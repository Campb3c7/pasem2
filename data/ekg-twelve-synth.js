/*
  12-lead EKG synthesizer (EKG practice exam). Pure functions, no DOM, so validators can load it.
  TwelveSynth.make(caseDef, seed) draws one standard 12-lead: four 2.5-second columns
  (I/II/III, aVR/aVL/aVF, V1-V3, V4-V6) plus a 10-second lead II rhythm strip, at 25 mm/s and
  10 mm/mV with a 1 mV calibration pulse.

  Each beat is a sum of smooth pieces ("components"). A component has a time shape (relative to
  QRS onset, in seconds) and an amplitude per lead: limb leads get the projection of a frontal-plane
  vector (ang in degrees, mag in mm) on the lead's angle; V1-V6 amplitudes are listed directly (v).
  Groups: p (P waves, left out when there are none), qrs (scaled for low voltage / alternans),
  st and pr (plateaus), t, u.

  caseDef: { rate: [lo, hi], rhythm: "sinus" | "af" | "paced", axis: [lo, hi], pr: [lo, hi],
             qtc: [lo, hi], build(c, ctx) } where build edits the named components c.
  Returns { svg, rate, axis, pr, qt, net: { I, aVF } (net QRS area, for checking the axis) }.
  The drawing is schematic: made to show the teaching features, not a recorded EKG.
*/
(function () {
  "use strict";
  var FS = 250, PX = 3, MM_S = 25, ROW = 30, GUT = 8, SECONDS = 10;
  var LIMB = { I: 0, II: 60, III: 120, aVR: -150, aVL: -30, aVF: 90 };
  var VS = ["V1", "V2", "V3", "V4", "V5", "V6"];
  var LAYOUT = [["I", "aVR", "V1", "V4"], ["II", "aVL", "V2", "V5"], ["III", "aVF", "V3", "V6"]];
  var counter = 0;

  function rng(seed) {
    var s = (seed >>> 0) ^ 0x51ed27a3;
    s = Math.imul(s ^ (s >>> 16), 0x85ebca6b) >>> 0;
    s = Math.imul(s ^ (s >>> 13), 0xc2b2ae35) >>> 0;
    s = (s ^ (s >>> 16)) >>> 0 || 1;
    return function () { s = (Math.imul(s, 1664525) + 1013904223) >>> 0; return s / 4294967296; };
  }
  function between(r, range) { return range[0] + (range[1] - range[0]) * r(); }
  function amp(c, lead) {
    var i = VS.indexOf(lead);
    if (i >= 0) return c.v ? c.v[i] : 0;
    return (c.mag || 0) * Math.cos(((c.ang || 0) - LIMB[lead]) * Math.PI / 180);
  }
  function smooth(x) { x = Math.max(0, Math.min(1, x)); return x * x * (3 - 2 * x); }
  // Time shape of a component at time d after QRS onset (0..1 scale).
  function shape(c, d) {
    if (c.kind === "plateau") {
      if (d < c.a - c.rise || d > c.c) return 0;
      if (d < c.a) return smooth((d - (c.a - c.rise)) / c.rise);
      if (d <= c.b) return 1;
      return 1 - smooth((d - c.b) / (c.c - c.b));
    }
    var sd = d > c.t && c.sd2 ? c.sd2 : c.sd, z = (d - c.t) / sd;
    return Math.abs(z) > 5 ? 0 : Math.exp(-0.5 * z * z);
  }

  // A normal adult beat: P, septal q, R, S, T. ctx = { axis, pr, qt }.
  function normal(ctx) {
    var tAxis = Math.max(0, Math.min(75, ctx.axis * 0.6 + 15));
    return {
      p: { group: "p", t: -ctx.pr + 0.048, sd: 0.02, ang: 55, mag: 1.4, v: [0.5, 0.8, 0.8, 0.8, 0.7, 0.6] },
      q: { group: "qrs", t: 0.012, sd: 0.006, ang: 170, mag: 1, v: [0.8, 1, 0.4, -0.3, -0.9, -0.9] },
      r: { group: "qrs", t: 0.04, sd: 0.0095, ang: ctx.axis, mag: 11, v: [2, 4, 8, 13, 14, 11] },
      s: { group: "qrs", t: 0.066, sd: 0.009, ang: -110, mag: 2, v: [-9, -13, -8, -4, -1.8, -0.8] },
      t: { group: "t", t: ctx.qt - 0.066, sd: 0.046, sd2: 0.032, ang: tAxis, mag: 3, v: [0.4, 3.4, 4, 4, 3.2, 2.4] }
    };
  }
  // Helpers the case builders use.
  function plateau(group, a, b, c, rise, ang, mag, v) { return { kind: "plateau", group: group, a: a, b: b, c: c, rise: rise, ang: ang, mag: mag, v: v }; }
  // ST segment from the J point (end of QRS) through the T wave.
  function st(ctx, j, ang, mag, v) { return plateau("st", j, ctx.qt - 0.1, ctx.qt - 0.01, 0.02, ang, mag, v); }

  function beatTimes(r, rhythm, rr) {
    var times = [], t = -between(r, [0.1, 0.9]) * rr;
    while (t < SECONDS + 0.6) {
      times.push(t);
      if (rhythm === "af") t += rr * between(r, [0.62, 1.38]);
      else if (rhythm === "paced") t += rr;
      else t += rr * between(r, [0.985, 1.015]);
    }
    return times;
  }

  function make(caseDef, seed) {
    var r = rng(seed == null ? Math.floor(Math.random() * 1e9) : seed);
    var rhythm = caseDef.rhythm || "sinus";
    var rate = caseDef.rateFixed ? caseDef.rateFixed[Math.floor(r() * caseDef.rateFixed.length)] : Math.round(between(r, caseDef.rate || [62, 92]));
    var rr = 60 / rate;
    var ctx = {
      r: r, rate: rate, rr: rr,
      axis: Math.round(between(r, caseDef.axis || [30, 70])),
      pr: between(r, caseDef.pr || [0.14, 0.18]),
      qtc: between(r, caseDef.qtc || [0.39, 0.43])
    };
    ctx.qt = Math.max(0.26, Math.min(ctx.qtc * Math.sqrt(rr), rr * 0.66));
    ctx.st = function (j, ang, mag, v) { return st(ctx, j, ang, mag, v); };
    ctx.plateau = plateau;
    var c = normal(ctx);
    if (caseDef.build) caseDef.build(c, ctx);
    var comps = Object.keys(c).map(function (k) { return c[k]; }).filter(Boolean);
    var times = beatTimes(r, rhythm, rr);
    var beats = times.map(function (t, i) {
      return { t: t, scale: (caseDef.qrsScale || 1) * (caseDef.alternans && i % 2 ? 0.62 : 1), spike: rhythm === "paced" };
    });
    var hasP = rhythm === "sinus";
    // AF: fine fibrillatory baseline (strongest in V1 and the inferior leads).
    var fib = rhythm === "af" ? [0, 1, 2, 3].map(function () { return { f: between(r, [4.8, 8.2]), a: between(r, [0.12, 0.26]), ph: r() * 6.3 }; }) : null;
    var fibLead = { V1: 1.3, II: 1, III: 0.9, aVF: 1, V2: 0.9, I: 0.4, aVL: 0.4, aVR: 0.6, V3: 0.6, V4: 0.5, V5: 0.4, V6: 0.4 };
    var wander = { f: between(r, [0.15, 0.3]), ph: r() * 6.3 };

    function value(lead, t) {
      var v = 0.15 * Math.sin(2 * Math.PI * wander.f * t + wander.ph + (LIMB[lead] || 0) / 60);
      if (fib) fib.forEach(function (w) { v += fibLead[lead] * w.a * Math.sin(2 * Math.PI * w.f * t + w.ph); });
      for (var b = 0; b < beats.length; b += 1) {
        var d = t - beats[b].t;
        if (d < -0.4 || d > 0.95) continue;
        for (var k = 0; k < comps.length; k += 1) {
          var comp = comps[k];
          if (comp.group === "p" && !hasP) continue;
          if (comp.group === "pr" && !hasP) continue;
          var a = amp(comp, lead);
          if (!a) continue;
          if (comp.group === "qrs") a *= beats[b].scale;
          else if (caseDef.qrsScale && comp.group === "t") a *= Math.max(0.5, caseDef.qrsScale);
          v += a * shape(comp, d);
        }
      }
      return v;
    }

    // ---- render ----
    var W = (GUT + SECONDS * MM_S) * PX, H = ROW * 4 * PX, id = "tw-grid-" + (counter += 1) + "-" + ((seed >>> 0) % 100000);
    var html = '<svg class="tw-ekg-svg" viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="12-lead EKG with a lead II rhythm strip">' +
      '<defs><pattern id="' + id + '" width="' + 5 * PX + '" height="' + 5 * PX + '" patternUnits="userSpaceOnUse">' +
      [1, 2, 3, 4].map(function (k) { return '<line x1="' + k * PX + '" y1="0" x2="' + k * PX + '" y2="' + 5 * PX + '" class="rs-small"/><line x1="0" y1="' + k * PX + '" x2="' + 5 * PX + '" y2="' + k * PX + '" class="rs-small"/>'; }).join("") +
      '<line x1="0" y1="0" x2="0" y2="' + 5 * PX + '" class="rs-big"/><line x1="0" y1="0" x2="' + 5 * PX + '" y2="0" class="rs-big"/></pattern></defs>' +
      '<rect x="0" y="0" width="' + W + '" height="' + H + '" fill="url(#' + id + ')"/>';
    function trace(lead, t0, t1, row) {
      var base = (row * ROW + ROW * 0.62) * PX, pts = [];
      var spikes = beats.filter(function (b) { return b.spike && b.t - 0.006 >= t0 && b.t - 0.006 < t1; }).map(function (b) { return b.t - 0.006; });
      var n = Math.round((t1 - t0) * FS);
      for (var i = 0; i <= n; i += 1) {
        var t = t0 + i / FS, x = (GUT + t * MM_S) * PX;
        while (spikes.length && spikes[0] <= t) {
          var sx = (GUT + spikes[0] * MM_S) * PX, sv = base - value(lead, spikes[0]) * PX;
          pts.push(sx.toFixed(1) + "," + sv.toFixed(1), sx.toFixed(1) + "," + (sv - 9 * PX).toFixed(1), (sx + 0.5).toFixed(1) + "," + sv.toFixed(1));
          spikes.shift();
        }
        var noise = (r() - 0.5) * 0.12;
        pts.push(x.toFixed(1) + "," + (base - (value(lead, t) + noise) * PX).toFixed(1));
      }
      return '<polyline class="rs-trace tw-trace" points="' + pts.join(" ") + '"/>';
    }
    for (var row = 0; row < 4; row += 1) {
      var base = (row * ROW + ROW * 0.62) * PX;
      // 1 mV calibration pulse: 10 mm tall, 0.2 s wide.
      html += '<polyline class="tw-cal" points="' + [[0.5, 0], [2, 0], [2, 10], [7, 10], [7, 0], [GUT, 0]].map(function (p) { return (p[0] * PX).toFixed(1) + "," + (base - p[1] * PX).toFixed(1); }).join(" ") + '"/>';
    }
    LAYOUT.forEach(function (leads, row) {
      leads.forEach(function (lead, col) {
        var t0 = col * 2.5, t1 = t0 + 2.5;
        html += trace(lead, t0, t1, row);
        var x = (GUT + t0 * MM_S) * PX;
        if (col) html += '<line class="tw-split" x1="' + x + '" y1="' + ((row * ROW + 9) * PX) + '" x2="' + x + '" y2="' + ((row * ROW + 13) * PX) + '"/>';
        html += '<text class="tw-label" x="' + (x + 4) + '" y="' + ((row * ROW + 5) * PX) + '">' + lead + '</text>';
      });
    });
    html += trace("II", 0, SECONDS, 3) + '<text class="tw-label" x="' + (GUT * PX + 4) + '" y="' + ((3 * ROW + 5) * PX) + '">II</text></svg>';

    var visible = times.filter(function (t) { return t >= 0 && t < SECONDS; });
    var measured = visible.length > 1 ? Math.round(60 * (visible.length - 1) / (visible[visible.length - 1] - visible[0])) : rate;
    function netArea(lead) {
      return comps.filter(function (x) { return x.group === "qrs"; }).reduce(function (sum, x) { return sum + amp(x, lead) * (x.sd || 0) * ((x.sd2 || x.sd) / x.sd + 1) / 2; }, 0);
    }
    return { svg: html, rate: measured, axis: ctx.axis, pr: ctx.pr, qt: ctx.qt, net: { I: netArea("I"), aVF: netArea("aVF") } };
  }

  window.TwelveSynth = { make: make, layout: LAYOUT, leads: Object.keys(LIMB).concat(VS) };
}());
