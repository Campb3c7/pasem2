/* EKG "Start here": a guided path that teaches EKG from zero before the practice tools. Short lessons in
   order, one idea per page, each with a picture (animated heart + strip, annotated beats, graph paper,
   rate rulers, generated rhythm strips, real workbook strips), then a few easy check questions, a
   "remember" summary and buttons that open the matching practice tool.
   Data: window.EKG_LEARN (data/ekg-learn.js). Progress: pasem2:ekg-learn:progress { lessonId: { done, right, of } }. */
(function () {
  "use strict";

  var data = window.EKG_LEARN;
  var launch = document.getElementById("ekg-learn-launch");
  var view = document.getElementById("ekg-learn-view");
  var content = document.getElementById("ekg-learn-content");
  var studyView = document.getElementById("study-view");
  if (!data || !launch || !view || !content) return;

  var PROGRESS_KEY = "pasem2:ekg-learn:progress";
  var lessons = data.lessons, byId = {};
  lessons.forEach(function (l, i) { l.index = i; byId[l.id] = l; });
  var state = null, uid = 0;

  function el(id) { return content.querySelector("#" + id); }
  function escapeHtml(value) {
    return String(value == null ? "" : value).replace(/[&<>'"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[c];
    });
  }
  function shuffle(items) {
    var copy = items.slice();
    for (var i = copy.length - 1; i > 0; i -= 1) { var j = Math.floor(Math.random() * (i + 1)); var v = copy[i]; copy[i] = copy[j]; copy[j] = v; }
    return copy;
  }
  function loadProgress() { try { var v = localStorage.getItem(PROGRESS_KEY); return v ? JSON.parse(v) : {}; } catch (e) { return {}; } }
  function saveProgress(p) { try { localStorage.setItem(PROGRESS_KEY, JSON.stringify(p)); } catch (e) {} }
  function f1(n) { return Number(n).toFixed(1); }

  // ---- one heartbeat as a function of time ---------------------------------
  // Seconds and millivolts. Normal: P onset 0.02, PR interval ~0.15, QRS 0.175-0.245, T ends ~0.55.
  function gauss(t, mu, sd, a) { var d = (t - mu) / sd; return a * Math.exp(-0.5 * d * d); }
  function beatTimes(o) {
    o = o || {};
    var pr = o.pr || 0.155, q = 0.02 + pr, wide = !!o.wide;
    return { p0: 0.02, pPeak: 0.065, p1: 0.11, q0: q, j: q + (wide ? 0.15 : 0.07), tPeak: q + (wide ? 0.36 : 0.29), tEnd: q + (wide ? 0.47 : 0.38), wide: wide, noP: !!o.noP, invP: !!o.invP };
  }
  function beatValue(t, b) {
    var v = 0;
    if (!b.noP) v += gauss(t, b.pPeak, 0.019, b.invP ? -0.13 : 0.15);
    if (b.wide) v += gauss(t, b.q0 + 0.045, 0.025, 1.0) + gauss(t, b.q0 + 0.11, 0.025, -0.4) + gauss(t, b.tPeak, 0.06, -0.3);
    else v += gauss(t, b.q0 + 0.008, 0.006, -0.1) + gauss(t, b.q0 + 0.03, 0.009, 1.15) + gauss(t, b.q0 + 0.052, 0.008, -0.3) + gauss(t, b.tPeak, 0.045, 0.3);
    return v;
  }

  // ---- shared drawing helpers ----------------------------------------------
  // px per small box (0.04 s horizontally, 1 mm = 0.1 mV vertically).
  function grid(w, h, box, x0) {
    var s = "", n = 0;
    for (var x = (x0 || 0); x <= w + 0.1; x += box, n += 1) s += '<line x1="' + f1(x) + '" y1="0" x2="' + f1(x) + '" y2="' + h + '" class="' + (n % 5 === 0 ? "rs-big" : "rs-small") + '"/>';
    n = 0;
    for (var y = h; y >= -0.1; y -= box, n += 1) s += '<line x1="0" y1="' + f1(y) + '" x2="' + w + '" y2="' + f1(y) + '" class="' + (n % 5 === 0 ? "rs-big" : "rs-small") + '"/>';
    return s;
  }
  function tracePoints(fn, t0, t1, xOf, yOf) {
    var pts = [];
    for (var t = t0; t <= t1 + 1e-9; t += 0.002) pts.push(f1(xOf(t)) + "," + f1(yOf(fn(t))));
    return pts.join(" ");
  }

  // ---- figure: the heart's wiring ------------------------------------------
  // Parts: sa, atria, av, his, bb, purk, vent. opts.on = parts to light; opts.labels; opts.anim (loop).
  var HEART_WINDOWS = { sa: [0, 0.05], atria: [0.02, 0.12], av: [0.11, 0.19], his: [0.17, 0.2], bb: [0.18, 0.21], purk: [0.19, 0.24], vent: [0.19, 0.26], reset: [0.34, 0.56] };
  function glow(part, dur) {
    var w = HEART_WINDOWS[part], a = Math.max(0, w[0] - 0.005), b = Math.min(1, w[1] + 0.03);
    return '<animate attributeName="opacity" dur="' + dur + 's" repeatCount="indefinite" calcMode="linear" keyTimes="0;' + f1(a * 1000) / 1000 + ';' + (w[0] + 0.006).toFixed(3) + ';' + w[1].toFixed(3) + ';' + b.toFixed(3) + ';1" values="0;0;1;1;0;0"/>';
  }
  function heartSvg(opts) {
    opts = opts || {};
    var on = opts.on || [], anim = !!opts.anim, dur = opts.dur || 2.5, labels = opts.labels !== false;
    function cls(part) { return anim ? "lh-live" : on.indexOf(part) >= 0 ? "lh-on" : ""; }
    function a(part) { return anim ? glow(part, dur) : ""; }
    var vent = "M40,112 Q40,102 58,104 L182,104 Q202,102 202,116 C204,160 170,198 130,226 C92,200 38,162 40,112 Z";
    var s = '<svg class="lh-heart" viewBox="0 0 300 240" role="img" aria-label="The heart\'s conduction system">';
    // chambers
    s += '<ellipse class="lh-wall" cx="80" cy="72" rx="42" ry="33"/><ellipse class="lh-wall" cx="160" cy="70" rx="40" ry="31"/><path class="lh-wall" d="' + vent + '"/>';
    s += '<g class="lh-fill lh-fill-atria ' + cls("atria") + '"' + (anim ? ' opacity="0"' : "") + '><ellipse cx="80" cy="72" rx="42" ry="33"/><ellipse cx="160" cy="70" rx="40" ry="31"/>' + a("atria") + '</g>';
    s += '<path class="lh-fill lh-fill-vent ' + cls("vent") + '"' + (anim ? ' opacity="0"' : "") + ' d="' + vent + '">' + a("vent") + '</path>';
    if (anim) s += '<path class="lh-fill lh-fill-reset lh-live" opacity="0" d="' + vent + '">' + glow("reset", dur) + '</path>';
    s += '<line class="lh-septum" x1="122" y1="106" x2="130" y2="224"/><line class="lh-septum" x1="120" y1="44" x2="120" y2="102"/>';
    // wiring (always drawn faintly, lit when on)
    function wire(part, d, extra) {
      return '<path class="lh-wire" d="' + d + '"/><path class="lh-wire-on ' + cls(part) + '"' + (anim ? ' opacity="0"' : "") + ' d="' + d + '">' + (extra || a(part)) + '</path>';
    }
    s += wire("atria", "M62,52 C78,70 96,86 114,100 M62,52 C90,48 130,50 168,62");
    s += wire("his", "M116,101 L122,124");
    s += wire("bb", "M122,124 C130,140 140,160 150,190 M122,124 C116,142 110,162 106,188");
    s += wire("purk", "M150,190 C160,206 176,196 186,170 C192,150 194,132 192,118 M106,188 C96,204 78,190 64,166 C56,148 52,132 52,118 M128,214 C136,206 146,200 150,190 M128,214 C120,206 112,198 106,188");
    s += '<circle class="lh-node" cx="62" cy="52" r="7"/><circle class="lh-node-on ' + cls("sa") + '"' + (anim ? ' opacity="0"' : "") + ' cx="62" cy="52" r="8">' + a("sa") + '</circle>';
    s += '<circle class="lh-node" cx="115" cy="100" r="6"/><circle class="lh-node-on ' + cls("av") + '"' + (anim ? ' opacity="0"' : "") + ' cx="115" cy="100" r="7">' + a("av") + '</circle>';
    if (labels) {
      s += '<text class="lh-label" x="8" y="30">SA node</text>' +
        '<line class="lh-lead" x1="122" y1="100" x2="214" y2="100"/><text class="lh-label" x="218" y="104">AV node</text>' +
        '<line class="lh-lead" x1="124" y1="118" x2="214" y2="128"/><text class="lh-label" x="218" y="132">His bundle</text>' +
        '<line class="lh-lead" x1="190" y1="160" x2="214" y2="160"/><text class="lh-label" x="218" y="164">Purkinje</text>' +
        '<line class="lh-lead" x1="146" y1="182" x2="214" y2="192"/><text class="lh-label" x="218" y="196">Bundle</text><text class="lh-label" x="218" y="209">branches</text>' +
        '<text class="lh-small" x="62" y="76">RA</text><text class="lh-small" x="160" y="74">LA</text><text class="lh-small" x="74" y="150">RV</text><text class="lh-small" x="160" y="150">LV</text>';
    }
    return s + '</svg>';
  }

  // ---- figure: heart + strip drawing together (slowed down) ----------------
  function syncFigure(opts) {
    opts = opts || {};
    var dur = 2.5, box = 7, W = 25 * box, H = 22 * box, base = 15 * box, id = "lsync" + (uid += 1);
    var b = beatTimes();
    var pts = tracePoints(function (t) { return beatValue(t, b); }, 0, 1, function (t) { return t / 0.04 * box; }, function (v) { return base - v * 10 * box; });
    var strip = '<svg class="lh-beat" viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="One heartbeat drawing">' + grid(W, H, box) +
      '<clipPath id="' + id + '"><rect x="0" y="0" width="0" height="' + H + '"><animate attributeName="width" from="0" to="' + W + '" dur="' + dur + 's" repeatCount="indefinite"/></rect></clipPath>' +
      '<polyline class="lh-ghost" points="' + pts + '"/><polyline class="rs-trace" clip-path="url(#' + id + ')" points="' + pts + '"/>' +
      '<line class="lh-pen" x1="0" y1="0" x2="0" y2="' + H + '"><animate attributeName="x1" from="0" to="' + W + '" dur="' + dur + 's" repeatCount="indefinite"/><animate attributeName="x2" from="0" to="' + W + '" dur="' + dur + 's" repeatCount="indefinite"/></line>' +
      label("P", b.pPeak, 0.35) + label("QRS", b.q0 + 0.1, 1.0) + label("T", b.tPeak, 0.55) + '</svg>';
    function label(text, t, mv) { return '<text class="lh-wave lh-wave-sync" x="' + f1(t / 0.04 * box) + '" y="' + f1(base - mv * 10 * box) + '" text-anchor="middle">' + text + '</text>'; }
    return '<div class="lh-sync">' + heartSvg({ anim: true, dur: dur, labels: opts.labels !== false }) + strip + '</div>' +
      '<p class="lh-caption">Slowed down 2.5×. Gold = firing (depolarizing). Blue = resetting (repolarizing).</p>';
  }

  // ---- figure: one annotated beat ------------------------------------------
  // opts: labels ["P","Q","R","S","T"], brackets ["PR","QRS","QT","PRseg","ST"], shade [same keys], pr, wide, noP, invP, j (bool)
  function beatFigure(opts) {
    opts = opts || {};
    var box = 16, b = beatTimes(opts), end = Math.max(0.72, b.tEnd + 0.12), W = Math.ceil(end / 0.04) * box, H = 25 * box, base = 13 * box;
    function x(t) { return t / 0.04 * box; }
    function y(mv) { return base - mv * 10 * box; }
    var spans = {
      PR: [b.p0, b.q0, "PR interval"], PRseg: [b.p1, b.q0, "PR segment"], QRS: [b.q0, b.j, "QRS"], ST: [b.j, b.tPeak - 0.08, "ST segment"], QT: [b.q0, b.tEnd, "QT interval"], P: [b.p0, b.p1, "P wave"], T: [b.tPeak - 0.1, b.tEnd, "T wave"]
    };
    var s = '<svg class="lh-beat lh-beat-big" viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="One heartbeat, labeled">' + grid(W, H, box);
    (opts.shade || []).forEach(function (k, i) {
      var sp = spans[k]; s += '<rect class="lh-shade lh-shade-' + (i % 3) + '" x="' + f1(x(sp[0])) + '" y="0" width="' + f1(x(sp[1]) - x(sp[0])) + '" height="' + H + '"/>';
    });
    s += '<polyline class="rs-trace" points="' + tracePoints(function (t) { return beatValue(t, b); }, 0, end, x, y) + '"/>';
    var wavePos = { P: [b.pPeak, b.invP ? -0.42 : 0.38], Q: [b.q0 + 0.004, -0.38], R: [b.q0 + (b.wide ? 0.09 : 0.06), b.wide ? 0.9 : 1.0], S: [b.q0 + (b.wide ? 0.11 : 0.056), b.wide ? -0.68 : -0.55], T: [b.tPeak, b.wide ? -0.55 : 0.55] };
    (opts.labels || []).forEach(function (k) {
      if (k === "P" && b.noP) return;
      var p = wavePos[k]; s += '<text class="lh-wave" x="' + f1(x(p[0])) + '" y="' + f1(y(p[1])) + '" text-anchor="middle">' + k + '</text>';
    });
    if (opts.j) s += '<circle class="lh-j" cx="' + f1(x(b.j)) + '" cy="' + f1(y(0)) + '" r="5"/><text class="lh-wave lh-wave-sm" x="' + f1(x(b.j) + 8) + '" y="' + f1(y(-0.25)) + '">J point</text>';
    (opts.brackets || []).forEach(function (k, i) {
      var sp = spans[k], yy = H - 12 - i * 36, x0 = x(sp[0]), x1 = x(sp[1]);
      var secs = Math.round((sp[1] - sp[0]) * 100) / 100;
      s += '<g class="lh-bracket lh-bracket-' + (i % 3) + '"><line x1="' + f1(x0) + '" y1="' + yy + '" x2="' + f1(x1) + '" y2="' + yy + '"/><line x1="' + f1(x0) + '" y1="' + (yy - 6) + '" x2="' + f1(x0) + '" y2="' + (yy + 6) + '"/><line x1="' + f1(x1) + '" y1="' + (yy - 6) + '" x2="' + f1(x1) + '" y2="' + (yy + 6) + '"/>' +
        '<text x="' + f1(x0) + '" y="' + (yy - 9) + '">' + sp[2] + (opts.times ? " ≈ " + secs.toFixed(2) + " s" : "") + '</text></g>';
    });
    return s + '</svg>';
  }

  // ---- figure: the graph paper, zoomed in ----------------------------------
  function paperFigure() {
    var box = 22, n = 10, W = n * box, H = n * box, ox = 40, oy = 16;
    var s = '<svg class="lh-paper" viewBox="0 0 ' + (W + ox + 150) + ' ' + (H + oy + 50) + '" role="img" aria-label="EKG paper boxes"><g transform="translate(' + ox + ',' + oy + ')">' + grid(W, H, box) +
      '<rect class="lh-box-small" x="0" y="' + (H - box) + '" width="' + box + '" height="' + box + '"/>' +
      '<rect class="lh-box-big" x="' + (5 * box) + '" y="' + (H - 5 * box) + '" width="' + (5 * box) + '" height="' + (5 * box) + '"/>' +
      '<text class="lh-dim" x="' + (box / 2) + '" y="' + (H + 18) + '" text-anchor="middle">0.04 s</text>' +
      '<text class="lh-dim" x="-6" y="' + (H - box / 2 + 4) + '" text-anchor="end">1 mm</text>' +
      '<text class="lh-dim lh-dim-big" x="' + (7.5 * box) + '" y="' + (H + 18) + '" text-anchor="middle">0.20 s</text>' +
      '<text class="lh-dim lh-dim-big" x="' + (W + 8) + '" y="' + (H - 2.5 * box + 4) + '">5 mm</text>' +
      '<text class="lh-axis" x="' + (W / 2) + '" y="' + (H + 40) + '" text-anchor="middle">time →</text>' +
      '<text class="lh-axis" x="' + (W + 8) + '" y="' + (H - 7 * box) + '">↑ size</text><text class="lh-axis" x="' + (W + 8) + '" y="' + (H - 7 * box + 16) + '">(voltage)</text>' +
      '</g></svg>';
    return s;
  }

  // ---- figure: the 300 method ruler ----------------------------------------
  function rateFigure(opts) {
    var boxes = opts.boxes || 4, box = 6, H = 108, base = 78;
    var lb = 5 * box, firstR = 2 * lb, rr = boxes * lb, W = firstR + Math.max(rr * 2, 6 * lb) + lb;
    var b = beatTimes(), rOff = b.q0 + 0.03;
    var beats = [];
    for (var r = firstR - rr; r < W + rr; r += rr) beats.push(r);
    function v(t) {
      var sum = 0; beats.forEach(function (rx) { var t0 = (rx / lb) * 0.2 - rOff; sum += beatValue(t - t0, b); }); return sum;
    }
    var s = '<svg class="lh-rate" viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="The 300 method">' + grid(W, H, box) +
      '<polyline class="rs-trace" points="' + tracePoints(v, 0, W / lb * 0.2, function (t) { return t / 0.2 * lb; }, function (mv) { return base - mv * 40; }) + '"/>';
    var names = [300, 150, 100, 75, 60, 50, 43, 38];
    for (var k = 1; k <= 8 && firstR + k * lb <= W; k += 1) {
      s += '<text class="lh-count' + (k === boxes ? " hit" : "") + '" x="' + (firstR + k * lb) + '" y="12" text-anchor="middle">' + names[k - 1] + '</text>';
    }
    s += '<line class="lh-rr" x1="' + firstR + '" y1="20" x2="' + (firstR + rr) + '" y2="20"/>';
    return s + '</svg>' + (opts.caption === false ? "" : '<p class="lh-caption">R waves ' + boxes + ' large boxes apart: ' + names.slice(0, boxes).join(" → ") + '. Rate ≈ <strong>' + names[boxes - 1] + '</strong>.</p>');
  }

  // ---- figure: generated rhythm strip, optional markers --------------------
  function rhythmById(id) {
    var found = null;
    (window.EKG_RHYTHMS ? window.EKG_RHYTHMS.groups : []).forEach(function (g) { g.rhythms.forEach(function (r) { if (r.id === id) found = r; }); });
    return found;
  }
  function stripFigure(spec) {
    var r = rhythmById(spec.rhythm);
    if (!r || !window.RhythmSynth) return "";
    var out = window.RhythmSynth.make(r.gen, spec.seed == null ? undefined : spec.seed), svg = out.svg, add = "";
    if (spec.marks === "count") {
      out.qrs.forEach(function (t, i) { add += '<text class="lh-mark" x="' + f1(t * 150) + '" y="16" text-anchor="middle">' + (i + 1) + '</text>'; });
      add += '<text class="lh-mark lh-mark-sec" x="4" y="176">0 s</text><text class="lh-mark lh-mark-sec" x="450" y="176" text-anchor="middle">3 s</text><text class="lh-mark lh-mark-sec" x="896" y="176" text-anchor="end">6 s</text>';
    }
    if (spec.marks === "p") out.atrial.forEach(function (t) { if (t >= 0 && t <= 6) add += '<text class="lh-mark lh-mark-p" x="' + f1(t * 150) + '" y="16" text-anchor="middle">P</text>'; });
    if (add) svg = svg.replace(/<\/svg>\s*$/, add + "</svg>");
    var extra = spec.marks === "count" ? '<p class="lh-caption">' + out.qrs.length + ' QRS complexes in 6 seconds × 10 = about <strong>' + out.qrs.length * 10 + '</strong> per minute.</p>' : "";
    return '<div class="lh-strip" data-lh-strip="' + escapeHtml(JSON.stringify(spec)) + '"><p class="lh-strip-name">' + escapeHtml(spec.label || r.name) + '</p><div class="rs-box">' + svg + '</div>' + extra +
      '<button class="lh-redraw" type="button">↻ Draw another one</button></div>';
  }
  function workbookFigure(spec) {
    return '<div class="wb-strip"><img src="images/ekg-workbook/' + spec.id + '.webp" alt="Workbook rhythm strip" decoding="async"></div>' + (spec.caption ? '<p class="lh-caption">' + spec.caption + '</p>' : "");
  }

  function figure(f) {
    if (!f) return "";
    if (Array.isArray(f)) return f.every(function (x) { return x.type === "beat"; }) ? '<div class="lh-figs">' + f.map(figure).join("") + '</div>' : f.map(figure).join("");
    var html = "";
    if (f.type === "heart") html = heartSvg(f);
    else if (f.type === "sync") html = syncFigure(f);
    else if (f.type === "beat") html = beatFigure(f);
    else if (f.type === "paper") html = paperFigure();
    else if (f.type === "rate") html = rateFigure(f);
    else if (f.type === "strip") html = stripFigure(f);
    else if (f.type === "workbook") html = workbookFigure(f);
    return '<figure class="lh-figure">' + html + (f.caption && f.type !== "workbook" ? '<figcaption class="lh-caption">' + f.caption + '</figcaption>' : "") + '</figure>';
  }
  function bindFigures() {
    content.querySelectorAll(".lh-redraw").forEach(function (button) {
      button.addEventListener("click", function () {
        var box = button.closest(".lh-strip"), spec = JSON.parse(box.dataset.lhStrip);
        var tmp = document.createElement("div"); tmp.innerHTML = stripFigure(spec);
        box.replaceWith(tmp.firstChild); bindFigures();
      });
    });
  }

  // ---- open / close --------------------------------------------------------
  function open() {
    studyView.hidden = true;
    document.querySelectorAll(".walkthrough-view").forEach(function (section) { section.hidden = true; });
    document.querySelectorAll("[data-rhythm-tool]").forEach(function (other) { other.innerHTML = ""; });
    view.hidden = false;
    renderHome();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function close() { state = null; view.hidden = true; studyView.hidden = false; content.innerHTML = ""; refreshLaunch(); window.scrollTo({ top: 0, behavior: "smooth" }); }
  function nextLesson(progress) {
    for (var i = 0; i < lessons.length; i += 1) if (!progress[lessons[i].id]) return lessons[i];
    return null;
  }
  function refreshLaunch() {
    var note = document.getElementById("ekg-learn-status");
    if (!note) return;
    var progress = loadProgress(), done = lessons.filter(function (l) { return progress[l.id]; }).length, next = nextLesson(progress);
    note.textContent = done ? done + " of " + lessons.length + " lessons done" + (next ? " · next: " + next.title : " · all done") : lessons.length + " short lessons, about 10 minutes each. Start with lesson 1.";
  }

  // ---- home: the path ------------------------------------------------------
  function renderHome() {
    state = null;
    var progress = loadProgress(), next = nextLesson(progress), done = lessons.filter(function (l) { return progress[l.id]; }).length;
    var html = '<div class="drill-heading"><p class="eyebrow">EKG · start here</p><h2>Learn EKG from zero</h2>' +
      '<p>' + data.intro + '</p></div>' +
      '<div class="lh-continue"><div><strong>' + (done ? done + " of " + lessons.length + " lessons done" : "Nothing done yet, and that's fine") + '</strong><span>' + (next ? "Next up: " + escapeHtml(next.title) : "You finished every lesson. The practice tools are all yours.") + '</span></div>' +
      (next ? '<button class="primary-action" type="button" data-lh-open="' + next.id + '">' + (done ? "Continue →" : "Start lesson 1 →") + '</button>' : "") + '</div>';
    data.parts.forEach(function (part) {
      var list = lessons.filter(function (l) { return l.part === part.id; });
      html += '<section class="lh-part"><p class="eyebrow">' + escapeHtml(part.title) + '</p><p class="lh-part-blurb">' + escapeHtml(part.blurb) + '</p><div class="lh-lessons">';
      if (!list.length) html += '<p class="lh-soon">Coming next: ' + escapeHtml(part.soon || "") + '</p>';
      list.forEach(function (l) {
        var p = progress[l.id], isNext = next && next.id === l.id;
        html += '<button class="lh-lesson' + (p ? " done" : "") + (isNext ? " next" : "") + '" type="button" data-lh-open="' + l.id + '"><span class="lh-num">' + (p ? "✓" : l.index + 1) + '</span><span><strong>' + escapeHtml(l.title) + '</strong><small>' + escapeHtml(l.goal) + '</small></span><span class="lh-arrow" aria-hidden="true">›</span></button>';
      });
      html += '</div></section>';
    });
    content.innerHTML = html;
    content.querySelectorAll("[data-lh-open]").forEach(function (b) { b.addEventListener("click", function () { startLesson(byId[b.dataset.lhOpen]); }); });
  }

  // ---- a lesson ------------------------------------------------------------
  function startLesson(lesson) {
    var checks = shuffle(lesson.checks).map(function (c) {
      var choices = shuffle([c.answer].concat(c.wrong));
      return { prompt: c.prompt, choices: choices, answer: choices.indexOf(c.answer), why: c.why };
    });
    state = { lesson: lesson, page: 0, checks: checks, check: 0, right: 0, answered: false };
    renderPage();
  }
  function steps() { return state.lesson.pages.length + state.checks.length + 1; }
  function dots(current) {
    var total = steps(), s = '<div class="lh-dots" aria-hidden="true">';
    for (var i = 0; i < total; i += 1) s += '<span class="' + (i < current ? "past" : i === current ? "now" : "") + (i >= state.lesson.pages.length && i < total - 1 ? " check" : "") + '"></span>';
    return s + '</div>';
  }
  function topBar() {
    var l = state.lesson;
    return '<div class="session-top"><button type="button" id="lh-home">← All lessons</button><span>Lesson ' + (l.index + 1) + ' of ' + lessons.length + '</span></div><h2 class="lh-title">' + escapeHtml(l.title) + '</h2>';
  }
  function renderPage() {
    var l = state.lesson;
    if (state.page < l.pages.length) {
      var pg = l.pages[state.page];
      content.innerHTML = topBar() + dots(state.page) +
        '<article class="learn-card lh-page"><p class="card-number">' + (state.page + 1) + ' of ' + l.pages.length + '</p><h3>' + escapeHtml(pg.title) + '</h3>' + figure(pg.fig) + '<div class="learn-body lh-text">' + pg.html + '</div></article>' +
        '<div class="hs-nav">' + (state.page ? '<button class="secondary-action" id="lh-prev" type="button">← Back</button>' : "") +
        '<button class="primary-action" id="learn-next" type="button">' + (state.page + 1 === l.pages.length ? "Quick check →" : "Next →") + '</button></div>';
      wire();
      bindFigures();
      if (el("lh-prev")) el("lh-prev").addEventListener("click", function () { state.page -= 1; renderPage(); });
      el("learn-next").addEventListener("click", function () { state.page += 1; renderPage(); });
    } else if (state.check < state.checks.length) renderCheck();
    else renderDone();
    content.scrollIntoView({ behavior: "instant", block: "start" });
  }
  function wire() { el("lh-home").addEventListener("click", renderHome); }
  function renderCheck() {
    var l = state.lesson, c = state.checks[state.check];
    content.innerHTML = topBar() + dots(l.pages.length + state.check) +
      '<p class="recall-step-label">Quick check ' + (state.check + 1) + ' of ' + state.checks.length + ' · no pressure, it just helps it stick</p>' +
      '<article class="question-card immersive-card"><h3>' + escapeHtml(c.prompt) + '</h3><div class="choices">' + c.choices.map(function (x, i) {
        return '<button class="choice" type="button" data-choice="' + i + '"><span>' + String.fromCharCode(65 + i) + '</span>' + escapeHtml(x) + '</button>';
      }).join("") + '</div><div class="explanation" id="lh-explanation" hidden></div></article>' +
      '<button class="primary-action full-action" id="learn-next" type="button" hidden>' + (state.check + 1 === state.checks.length ? "Finish lesson →" : "Next →") + '</button>';
    wire();
    var group = content.querySelector(".choices"), answered = false;
    group.querySelectorAll("[data-choice]").forEach(function (button) {
      button.addEventListener("click", function () {
        if (answered) return;
        answered = true;
        var selected = Number(button.dataset.choice), right = selected === c.answer;
        if (right) state.right += 1;
        group.querySelectorAll("[data-choice]").forEach(function (b) {
          var i = Number(b.dataset.choice); b.disabled = true;
          b.classList.add(i === c.answer ? "correct" : i === selected ? "wrong" : "dimmed");
        });
        var exp = el("lh-explanation");
        exp.hidden = false;
        exp.innerHTML = '<strong>' + (right ? "Right: " : "It's: ") + escapeHtml(c.choices[c.answer]) + '</strong><p>' + c.why + '</p>';
        el("learn-next").hidden = false;
        exp.scrollIntoView({ behavior: "smooth", block: "nearest" });
      });
    });
    el("learn-next").addEventListener("click", function () { state.check += 1; renderPage(); });
  }
  function renderDone() {
    var l = state.lesson, progress = loadProgress();
    progress[l.id] = { done: true, right: state.right, of: state.checks.length };
    saveProgress(progress);
    var next = lessons[l.index + 1];
    content.innerHTML = topBar() + dots(steps() - 1) +
      '<section class="complete-panel lh-done"><span class="complete-icon">✓</span><p class="eyebrow">Lesson ' + (l.index + 1) + ' done</p><h3>' + escapeHtml(l.title) + '</h3><p>' + state.right + ' of ' + state.checks.length + ' checks right' + (state.right < state.checks.length ? ". Have another look at the pages for the ones you missed whenever you like." : ". Nice.") + '</p></section>' +
      '<article class="learn-card lh-remember"><p class="eyebrow">Remember</p><ul class="lh-remember-list">' + l.remember.map(function (x) { return '<li>' + x + '</li>'; }).join("") + '</ul></article>' +
      ((l.practice || []).length ? '<article class="learn-card lh-practice"><p class="eyebrow">Practice this</p>' + l.practice.map(function (p, i) {
        return '<button class="lh-practice-btn" type="button" data-lh-practice="' + i + '"><strong>' + escapeHtml(p.label) + ' →</strong><small>' + escapeHtml(p.note) + '</small></button>';
      }).join("") + '</article>' : "") +
      '<div class="hs-nav"><button class="secondary-action" id="lh-again" type="button">Read it again</button>' +
      (next ? '<button class="primary-action" id="learn-next" type="button">Next lesson: ' + escapeHtml(next.title) + ' →</button>' : '<button class="primary-action" id="learn-next" type="button">All lessons</button>') + '</div>';
    wire();
    el("lh-again").addEventListener("click", function () { startLesson(l); });
    el("learn-next").addEventListener("click", function () { if (next) startLesson(next); else renderHome(); });
    content.querySelectorAll("[data-lh-practice]").forEach(function (b) {
      b.addEventListener("click", function () {
        var p = l.practice[Number(b.dataset.lhPractice)], target = document.getElementById(p.launch);
        if (!target) return;
        close();
        target.click();
        if (p.then) setTimeout(function () { var t = document.getElementById(p.then); if (t) t.click(); }, 50);
      });
    });
  }

  launch.addEventListener("click", open);
  document.getElementById("ekg-learn-back").addEventListener("click", close);
  refreshLaunch();
}());
