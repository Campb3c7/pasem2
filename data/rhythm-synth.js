/*
  Rhythm strip synthesizer (Cardio Part 2 Rhythm strips). Pure functions, no DOM, so validators
  can load it. RhythmSynth.make(spec, seed) builds one 6-second lead II-style strip:
    { qrs: [times in s], atrial: [P / flutter times], rate, svg }.
  Paper: 25 mm/s and 10 mm/mV; 1 small box = 0.04 s, 1 large box = 0.2 s. The drawing is
  schematic (sums of smooth waves), made to show the teaching features, not a recorded EKG.
  spec.gen picks the generator; the other spec fields are its ranges (see GENERATORS).
*/
(function () {
  "use strict";
  var T = 6, FS = 250, PX_S = 150, PX_MV = 60, H = 180, Y0 = 108;

  function rng(seed) {
    // Scramble the seed so nearby seeds give unrelated strips.
    var s = (seed >>> 0) ^ 0x9e3779b9;
    s = Math.imul(s ^ (s >>> 16), 0x85ebca6b) >>> 0;
    s = Math.imul(s ^ (s >>> 13), 0xc2b2ae35) >>> 0;
    s = (s ^ (s >>> 16)) >>> 0 || 1;
    return function () { s = (Math.imul(s, 1664525) + 1013904223) >>> 0; return s / 4294967296; };
  }
  function between(r, range) { return range[0] + (range[1] - range[0]) * r(); }
  function g(t, mu, sd, a) { var d = (t - mu) / sd; return a * Math.exp(-0.5 * d * d); }

  // ---- waveform pieces --------------------------------------------------------------------
  // P: { t, amp, sd, bi } (bi = biphasic second half). QRS: { t, kind, sign, rr }.
  function pWave(t, p) {
    var v = g(t, p.t, p.sd || 0.022, p.amp == null ? 0.2 : p.amp);
    if (p.bi) v += g(t, p.t + 0.035, 0.016, -0.08);
    return v;
  }
  function tOffset(rr) { return Math.min(0.15 + 0.13 * Math.sqrt(Math.min(rr, 1.6)), rr * 0.55); }
  function beat(t, b) {
    var q = b.t, s = b.sign || 1, rr = b.rr || 1;
    if (b.kind === "wide") {
      var off = Math.min(0.33, rr * 0.5);
      return s * (g(t, q, 0.03, 1.0) + g(t, q + 0.075, 0.03, -0.45) + g(t, q + off, 0.06, -0.3));
    }
    var v = g(t, q - 0.022, 0.007, -0.08) + g(t, q, 0.011, 1.15) + g(t, q + 0.025, 0.009, -0.28) + g(t, q + tOffset(rr), 0.045, 0.28);
    if (b.kind === "delta") v += g(t, q - 0.04, 0.022, 0.3);
    return v;
  }

  // ---- generators ------------------------------------------------------------------------
  // Each returns { p: [P waves], q: [beats], base?: fn(t), atrial?: [times] }.
  function sinusTimes(r, rate, opts) {
    var rr = 60 / rate, times = [], t = -1.4 + r() * rr;
    while (t < T + 0.6) {
      times.push(t);
      var step = rr;
      if (opts && opts.phasic) step = rr * (1 + 0.24 * Math.sin(2 * Math.PI * t / 4.4 + opts.phase));
      t += step;
    }
    return times;
  }
  function narrowBeat(t, rr, kind) { return { t: t, kind: kind || "narrow", rr: rr }; }

  var GENERATORS = {
    sinus: function (r, s) {
      var rate = between(r, s.rate), rr = 60 / rate, pr = between(r, s.pr || [0.14, 0.18]);
      var out = { p: [], q: [] };
      var times = sinusTimes(r, rate, s.phasic ? { phasic: true, phase: r() * 6 } : null);
      var kind = s.delta ? "delta" : "narrow";
      times.forEach(function (t) { out.q.push(narrowBeat(t, rr, kind)); out.p.push({ t: t - pr }); });
      return out;
    },
    pause: function (r, s) {
      var rate = between(r, s.rate), rr = 60 / rate, pr = 0.16, gap = between(r, [3.2, 3.6]);
      var out = { p: [], q: [] }, t = -1.4 + r() * rr, paused = false;
      var pauseAt = between(r, [0.6, 1.4]);
      while (t < T + 0.6) {
        out.q.push(narrowBeat(t, rr)); out.p.push({ t: t - pr });
        if (!paused && t >= pauseAt) { t += gap; paused = true; } else t += rr;
      }
      return out;
    },
    ectopic: function (r, s) {
      // Sinus with PACs or PVCs. s.type "pac" | "pvc"; s.every = n for a fixed pattern (2 = bigeminy).
      var rate = between(r, s.rate), rr = 60 / rate, pr = 0.16;
      var out = { p: [], q: [] }, t = -1.4 + r() * rr, n = 0;
      var singles = [between(r, [1.0, 1.8]), between(r, [3.4, 4.3])];
      while (t < T + 0.6) {
        out.q.push(narrowBeat(t, rr)); out.p.push({ t: t - pr }); n += 1;
        var early = s.every ? (n % (s.every - 1 || 1) === 0) : singles.some(function (x) { return t < x && t + rr >= x; });
        if (early && (s.every || r() < 0.95)) {
          var et = t + rr * (s.type === "pac" ? 0.62 : 0.58);
          if (s.type === "pac") {
            out.p.push({ t: et - 0.15, amp: 0.1, sd: 0.016, bi: true });
            out.q.push(narrowBeat(et, rr));
            t = et + rr;
          } else {
            out.q.push({ t: et, kind: "wide", sign: s.sign || 1, rr: rr });
            t += 2 * rr; // full compensatory pause
          }
        } else t += rr;
      }
      return out;
    },
    af: function (r, s) {
      var rate = between(r, s.rate), mean = 60 / rate, out = { p: [], q: [] }, t = -1.4 + r() * mean;
      while (t < T + 0.6) { var rr = mean * (0.55 + 0.9 * r()); out.q.push(narrowBeat(t, rr)); t += rr; }
      var waves = [0, 1, 2, 3].map(function () { return { f: between(r, [4.5, 8.5]), a: between(r, [0.015, 0.04]), ph: r() * 6.3 }; });
      out.base = function (x) { return waves.reduce(function (sum, w) { return sum + w.a * Math.sin(2 * Math.PI * w.f * x + w.ph); }, 0); };
      return out;
    },
    flutter: function (r, s) {
      var fa = between(r, s.atrialRate || [285, 315]), c = 60 / fa, ratio = s.ratio, out = { p: [], q: [], atrial: [] };
      var w0 = -1.5 + r() * c, k = 0;
      for (var w = w0; w < T + 0.6; w += c, k += 1) {
        out.atrial.push(w);
        if (k % ratio === 0) out.q.push(narrowBeat(w + 0.14, c * ratio));
      }
      out.base = function (x) {
        var ph = ((x - w0) / c) % 1; if (ph < 0) ph += 1;
        return ph < 0.72 ? 0.1 - 0.3 * (ph / 0.72) : -0.2 + 0.3 * ((ph - 0.72) / 0.28);
      };
      return out;
    },
    mat: function (r, s) {
      var rate = between(r, s.rate), mean = 60 / rate, out = { p: [], q: [] }, t = -1.4 + r() * mean;
      var shapes = [{ amp: 0.15, sd: 0.022 }, { amp: 0.09, sd: 0.015, bi: true }, { amp: -0.1, sd: 0.02 }, { amp: 0.22, sd: 0.03 }];
      while (t < T + 0.6) {
        var rr = mean * (0.75 + 0.5 * r()), sh = shapes[Math.floor(r() * shapes.length)];
        out.q.push(narrowBeat(t, rr));
        out.p.push({ t: t - between(r, [0.12, 0.2]), amp: sh.amp, sd: sh.sd, bi: sh.bi });
        t += rr;
      }
      return out;
    },
    svt: function (r, s) {
      var rate = between(r, s.rate), rr = 60 / rate, out = { p: [], q: [] };
      for (var t = -1.4 + r() * rr; t < T + 0.6; t += rr) out.q.push(narrowBeat(t, rr));
      return out;
    },
    junctional: function (r, s) {
      var rate = between(r, s.rate), rr = 60 / rate, out = { p: [], q: [] }, retro = r() < 0.6;
      for (var t = -1.4 + r() * rr; t < T + 0.6; t += rr) {
        out.q.push(narrowBeat(t, rr));
        if (retro) out.p.push({ t: t + 0.09, amp: -0.11, sd: 0.02 });
      }
      return out;
    },
    wenckebach: function (r, s) {
      var pp = 60 / between(r, s.atrialRate), n = s.group || (r() < 0.5 ? 3 : 4), out = { p: [], q: [] };
      var prs = n === 3 ? [0.18, 0.3] : [0.16, 0.26, 0.32];
      var k = Math.floor(r() * n);
      for (var t = -1.6 + r() * pp; t < T + 0.6; t += pp, k += 1) {
        out.p.push({ t: t });
        var pos = k % n;
        if (pos < n - 1) out.q.push(narrowBeat(t + prs[pos], pp));
      }
      return out;
    },
    mobitz2: function (r, s) {
      var pp = 60 / between(r, s.atrialRate), n = s.group || (r() < 0.5 ? 3 : 4), pr = between(r, [0.16, 0.19]), out = { p: [], q: [] };
      var k = Math.floor(r() * n);
      for (var t = -1.6 + r() * pp; t < T + 0.6; t += pp, k += 1) {
        out.p.push({ t: t });
        if (k % n !== n - 1) out.q.push({ t: t + pr, kind: "wide", sign: 1, rr: pp });
      }
      return out;
    },
    chb: function (r, s) {
      var pp = 60 / between(r, s.atrialRate), vr = 60 / between(r, s.rate), out = { p: [], q: [] };
      for (var t = -1.6 + r() * pp; t < T + 0.6; t += pp) out.p.push({ t: t });
      for (var v = -1.6 + r() * vr; v < T + 0.6; v += vr) out.q.push({ t: v, kind: "wide", sign: 1, rr: vr });
      return out;
    },
    idioventricular: function (r, s) {
      var vr = 60 / between(r, s.rate), out = { p: [], q: [] };
      for (var v = -1.6 + r() * vr; v < T + 0.6; v += vr) out.q.push({ t: v, kind: "wide", sign: 1, rr: vr });
      return out;
    },
    vt: function (r, s) {
      var rr = 60 / between(r, s.rate), sign = r() < 0.5 ? 1 : -1, out = { p: [], q: [] };
      for (var v = -1.4 + r() * rr; v < T + 0.6; v += rr) out.q.push({ t: v, kind: "wide", sign: sign, rr: rr });
      return out;
    },
    torsades: function (r) {
      var f = between(r, [3.6, 4.3]), period = between(r, [1.3, 1.7]), ph = r() * 6.3, out = { p: [], q: [], chaotic: true };
      out.base = function (x) {
        var env = Math.sin(Math.PI * x / period + ph);
        var w = Math.sin(2 * Math.PI * f * x) + 0.25 * Math.sin(4 * Math.PI * f * x + 0.6);
        return 0.95 * env * w;
      };
      return out;
    },
    vf: function (r, s) {
      // Random wavelets of uneven size, spacing and width: no repeating pattern, no real QRS.
      var fine = s.fine == null ? r() < 0.35 : s.fine, amp = fine ? 0.22 : 0.6, out = { p: [], q: [], chaotic: true }, bumps = [];
      for (var x = -0.4, sign = 1; x < T + 0.4; x += between(r, [0.09, 0.22]), sign = -sign) {
        bumps.push({ t: x, a: sign * amp * between(r, [0.35, 1]), sd: between(r, [0.025, 0.055]) });
      }
      out.base = function (t) {
        var v = 0;
        for (var k = 0; k < bumps.length; k += 1) if (Math.abs(bumps[k].t - t) < 0.25) v += g(t, bumps[k].t, bumps[k].sd, bumps[k].a);
        return v;
      };
      return out;
    },
    asystole: function () { return { p: [], q: [], chaotic: true }; }
  };

  var IRREGULAR = { af: true, mat: true };
  function countRate(q) {
    var visible = q.filter(function (b) { return b.t >= 0 && b.t < T; }).map(function (b) { return b.t; });
    return visible.length < 2 ? null : Math.round(60 * (visible.length - 1) / (visible[visible.length - 1] - visible[0]));
  }
  function inRange(q, range) { var rate = countRate(q); return rate != null && rate >= range[0] - 6 && rate <= range[1] + 6; }

  // ---- render ----------------------------------------------------------------------------
  function grid() {
    var html = "", x, y;
    for (x = 0; x <= T * PX_S + 0.1; x += 6) html += '<line x1="' + x + '" y1="0" x2="' + x + '" y2="' + H + '" class="' + (Math.round(x) % 30 === 0 ? "rs-big" : "rs-small") + '"/>';
    for (y = 0; y <= H + 0.1; y += 6) html += '<line x1="0" y1="' + y + '" x2="' + T * PX_S + '" y2="' + y + '" class="' + (Math.round(y) % 30 === 0 ? "rs-big" : "rs-small") + '"/>';
    for (var s = 0; s <= T; s += 1) html += '<line x1="' + s * PX_S + '" y1="0" x2="' + s * PX_S + '" y2="7" class="rs-tick"/>' + (s > 0 && s < T ? '<text x="' + (s * PX_S + 3) + '" y="13" class="rs-label">' + s + 's</text>' : "");
    return html;
  }

  function make(spec, seed) {
    var r = rng(seed == null ? Math.floor(Math.random() * 1e9) : seed);
    var gen = GENERATORS[spec.gen];
    if (!gen) throw new Error("Unknown rhythm generator " + spec.gen);
    var parts = gen(r, spec);
    // Irregular rhythms can land outside their range on a short strip; redraw (a few tries) so the
    // counted rate matches what the rhythm teaches.
    for (var tries = 0; tries < 30 && IRREGULAR[spec.gen] && spec.rate && !inRange(parts.q, spec.rate); tries += 1) parts = gen(r, spec);
    var wander = { a: 0.025, f: between(r, [0.2, 0.35]), ph: r() * 6.3 };
    var noise = [];
    for (var i = 0; i <= T * FS; i += 1) noise.push((r() - 0.5) * 0.014);
    var points = [];
    for (i = 0; i <= T * FS; i += 1) {
      var t = i / FS, v = wander.a * Math.sin(2 * Math.PI * wander.f * t + wander.ph) + noise[i];
      if (parts.base) v += parts.base(t);
      for (var a = 0; a < parts.p.length; a += 1) if (Math.abs(parts.p[a].t - t) < 0.15) v += pWave(t, parts.p[a]);
      for (var b = 0; b < parts.q.length; b += 1) if (parts.q[b].t - t < 0.12 && t - parts.q[b].t < 0.6) v += beat(t, parts.q[b]);
      var y = Math.max(2, Math.min(H - 2, Y0 - v * PX_MV));
      points.push((t * PX_S).toFixed(1) + "," + y.toFixed(1));
    }
    var visible = parts.q.filter(function (q) { return q.t >= 0 && q.t < T; }).map(function (q) { return q.t; });
    var rate = countRate(parts.q);
    if (rate == null && visible.length === 1) rate = 10;
    var atrial = (parts.atrial || parts.p.map(function (p) { return p.t; })).filter(function (x) { return x >= 0 && x < T; });
    var svg = '<svg class="rs-strip" viewBox="0 0 ' + T * PX_S + " " + H + '" preserveAspectRatio="xMidYMid meet" role="img" aria-label="6-second rhythm strip">' +
      grid() + '<polyline class="rs-trace" points="' + points.join(" ") + '"/></svg>';
    return { qrs: visible, count: visible.length, atrial: atrial, rate: rate, chaotic: !!parts.chaotic, svg: svg };
  }

  window.RhythmSynth = { make: make, generators: GENERATORS, seconds: T };
}());
