/* Cardio Part 3 "Learn it from zero" paths: one shared figure kit + wiring for every Part 3 lecture
   (lesson engine: learn-path.js). Anna asked (2026-11-16) for the same visual, step-by-step path as
   "Learn EKG from zero" and the Shock path for each Cardio Part 3 lecture.

   Data: window.CARDIO3_LEARN[<lecture id>] = { prefix, short, heading, kicker, card, intro, parts, lessons }
   (data/learn-<lecture id>.js). Progress key: pasem2:learn:<lecture id>:progress. Each path gets a gold card at
   the top of its lecture page (window.PasemLectureIntros[lecture id]) and its own view, created here.

   Figure types (all drawn here, no images):
   coronary {hi: [lm|lad|lcx|rca|pda], blocks: [[spot, label]], grafts: [[from, to, label]], stents: [spot], quiet}
     front view of the heart with its arteries. Spots: lm, ladp (proximal LAD), ladm, lcx, rca, rcam, pda.
     Graft from: lita | rita | aorta. Graft label decides the color: an arterial graft is green, a vein graft blue.
   artery {stage: normal|streak|plaque|rupture|clot|occluded|balloon|stent|tpa|bypass|spasm, note}
     a slice along an artery with flowing blood.
   cpb {hi: reservoir|pump|heat|oxy|filter|plegia}  the bypass machine loop, animated.
   thermo  interactive temperature slider: O₂ demand and needed flow.
   bars {items: [[label, value 0-100, shown text, tone]], note}   horizontal bars (tone: good|ok|bad|blue).
   line {points: [[label, value]], unit, max, note}   a simple line chart with labeled dots.
   harvest {hi: [ita|radial|svg]}  where bypass conduits come from.
   decide  interactive PCI vs CABG chooser (deck rules, slides 19 and 21).
   monitor {bp, hr, uo, extra: [[name, value]], tone}  an ICU monitor.
   eq {terms: [[name, arrow, sub] | "=" | "×"]}  a small equation with arrows.
   flow {steps, hi, vertical}, tiles {items: [[icon, title, text]], hi}, cycle {nodes, center}, grid {cols, rows: [[head, cells]]},
   quad {x: [left, right], y: [top, bottom], cells: [[title, text, tone] × 4], hi}  a 2×2 grid. */
(function () {
  "use strict";

  var all = window.CARDIO3_LEARN;
  if (!all || !window.createLearnPath) return;
  var uid = 0;

  function esc(value) {
    return String(value == null ? "" : value).replace(/[&<>'"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[c];
    });
  }
  function f1(n) { return Number(n).toFixed(1); }
  function has(list, key) { return (list || []).indexOf(key) >= 0; }
  function arrowDefs(id, cls) {
    return '<defs><marker id="' + id + '" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" class="' + (cls || "sx-arrowhead") + '"/></marker></defs>';
  }

  // ---- coronary arteries ------------------------------------------------------
  var ART = {
    lm: "M182,74 L214,86",
    lad: "M214,86 C228,128 252,196 292,254",
    lcx: "M214,86 C246,84 272,100 284,128 C292,150 296,172 294,196",
    rca: "M170,74 C120,76 84,100 76,140 C70,180 96,214 134,232",
    pda: "M134,232 C158,240 182,246 210,252"
  };
  var ART_NAME = { lm: ["Left main", 248, 76], lad: ["LAD", 236, 214], lcx: ["LCx", 312, 150], rca: ["RCA", 40, 130], pda: ["PDA", 176, 268] };
  var SPOT = { lm: [203, 80, 25], ladp: [222, 110, 70], ladm: [246, 178, 58], lcx: [266, 96, 25], rca: [98, 92, -30], rcam: [74, 160, 90], pda: [176, 245, 12] };
  function graftPath(from, to) {
    var t = SPOT[to];
    if (from === "lita") return "M332,6 C322,70 300,120 " + t[0] + "," + t[1];
    if (from === "rita") return "M28,6 C40,40 " + (t[0] - 10) + "," + (t[1] - 60) + " " + t[0] + "," + t[1];
    // vein graft sewn onto the ascending aorta
    var sx = to === "rca" || to === "rcam" || to === "pda" ? 162 : 186;
    return "M" + sx + ",36 C" + (to === "lcx" || to === "ladm" || to === "ladp" ? "262,10 " + (t[0] + 40) + "," + (t[1] - 40) : "100,20 " + (t[0] - 30) + "," + (t[1] - 50)) + " " + t[0] + "," + t[1];
  }
  function coronaryFigure(f) {
    var hi = f.hi || [], id = "c3c" + (uid += 1);
    var s = '<svg class="c3-svg" viewBox="0 0 360 290" role="img" aria-label="The heart from the front with its coronary arteries">';
    s += '<path class="c3-heart" d="M150,62 C96,60 58,104 66,156 C74,206 120,236 170,250 C214,262 262,268 300,262 C306,220 300,160 270,112 C246,74 200,58 150,62 Z"/>';
    s += '<path class="c3-aorta" d="M176,76 L176,34 Q176,16 196,16 L240,16"/><text class="sx-lbl" x="250" y="20">aorta</text>';
    Object.keys(ART).forEach(function (k) {
      var on = !hi.length || has(hi, k);
      s += '<path class="c3-cor' + (has(hi, k) ? " c3-cor-hi" : "") + (on ? "" : " c3-cor-dim") + (k === "lcx" ? " c3-cor-back" : "") + '" d="' + ART[k] + '"/>';
      if (!f.quiet) { var n = ART_NAME[k]; s += '<text class="sx-lbl' + (has(hi, k) ? " sx-gold sx-lbl-strong" : "") + '" x="' + n[1] + '" y="' + n[2] + '" text-anchor="middle">' + n[0] + '</text>'; }
    });
    (f.grafts || []).forEach(function (g, i) {
      var vein = /SVG|vein/i.test(g[2] || "");
      s += '<path class="c3-graft ' + (vein ? "c3-graft-vein" : "c3-graft-art") + '" d="' + graftPath(g[0], g[1]) + '"/>';
      var t = SPOT[g[1]], lx = g[0] === "lita" ? 306 : g[0] === "rita" ? 18 : (t[0] < 180 ? 92 : 300), ly = g[0] === "aorta" ? (t[0] < 180 ? 44 : 52) + i * 4 : 16;
      s += '<text class="sx-lbl sx-lbl-strong ' + (vein ? "sx-blue" : "sx-green") + '" x="' + lx + '" y="' + ly + '" text-anchor="' + (g[0] === "lita" ? "end" : "middle") + '">' + esc(g[2]) + '</text>';
    });
    (f.blocks || []).forEach(function (b) {
      var p = SPOT[b[0]];
      s += '<g transform="translate(' + p[0] + ',' + p[1] + ') rotate(' + p[2] + ')"><rect class="c3-block" x="-7" y="-6" width="14" height="12" rx="3"/></g>';
      if (b[1]) s += '<text class="sx-lbl sx-bad sx-lbl-strong" x="' + (p[0] + (p[0] < 180 ? -12 : 12)) + '" y="' + (p[1] + 4) + '" text-anchor="' + (p[0] < 180 ? "end" : "start") + '">' + esc(b[1]) + '</text>';
    });
    (f.stents || []).forEach(function (k) {
      var p = SPOT[k];
      s += '<g transform="translate(' + p[0] + ',' + p[1] + ') rotate(' + p[2] + ')"><rect class="c3-stent" x="-11" y="-5" width="22" height="10" rx="2"/><path class="c3-stent-mesh" d="M-11,-5 L-6,5 L-1,-5 L4,5 L9,-5"/></g>';
    });
    s += '</svg>';
    return s;
  }

  // ---- an artery, cut along its length ------------------------------------------
  var STAGE = {
    normal: "Healthy artery: smooth lining, blood flows freely.",
    streak: "Fatty streak: LDL slips under the lining and foam cells collect. No narrowing yet.",
    plaque: "Stable plaque: a fatty core under a THICK fibrous cap. It narrows the pipe, so flow is short when demand rises.",
    rupture: "Rupture: a THIN cap cracks and the fatty core touches blood.",
    clot: "Platelets and clot pile onto the crack: the pipe narrows suddenly.",
    occluded: "Complete blockage: no flow past the clot. The muscle downstream starts to die.",
    balloon: "PCI: a balloon on a wire squashes the plaque open.",
    stent: "PCI with a stent: a metal mesh holds the artery open. Drug-eluting stents slow regrowth.",
    tpa: "Fibrinolysis (tPA): the drug dissolves the clot. The plaque is still there.",
    bypass: "CABG: a new pipe carries blood AROUND the blockage to the muscle beyond it.",
    spasm: "Spasm: the muscle in the artery wall squeezes the pipe shut for a while, with or without plaque."
  };
  function arteryFigure(f) {
    var st = f.stage || "normal", id = "c3a" + (uid += 1), top = 46, bot = 126, mid = 86;
    var plaque = st !== "normal" && st !== "spasm";
    var narrow = { normal: 0, streak: 4, plaque: 30, rupture: 30, clot: 52, occluded: 80, balloon: 10, stent: 6, tpa: 30, bypass: 80, spasm: 0 }[st];
    var s = '<svg class="c3-svg" viewBox="0 0 360 168" role="img" aria-label="An artery cut along its length">' + arrowDefs(id + "a");
    // walls
    var wTop = "M0," + top + " L360," + top, wBot = "M0," + bot + " L360," + bot;
    if (st === "spasm") { wTop = "M0," + top + " L120," + top + " Q180," + (top + 30) + " 240," + top + " L360," + top; wBot = "M0," + bot + " L120," + bot + " Q180," + (bot - 30) + " 240," + bot + " L360," + bot; }
    s += '<rect class="c3-wall-band" x="0" y="' + (top - 14) + '" width="360" height="14"/><rect class="c3-wall-band" x="0" y="' + bot + '" width="360" height="14"/>';
    s += '<path class="c3-lumen" d="' + (st === "spasm" ? "M0," + top + " L120," + top + " Q180," + (top + 30) + " 240," + top + " L360," + top + " L360," + bot + " L240," + bot + " Q180," + (bot - 30) + " 120," + bot + " L0," + bot + " Z" : "M0," + top + " L360," + top + " L360," + bot + " L0," + bot + " Z") + '"/>';
    s += '<path class="c3-wallline" d="' + wTop + '"/><path class="c3-wallline" d="' + wBot + '"/>';
    // plaque on the bottom wall
    if (plaque) {
      var h = Math.max(8, Math.min(narrow, 40)) , ph = st === "streak" ? 8 : h;
      s += '<path class="c3-plaque" d="M120,' + bot + ' Q180,' + (bot - ph * 2) + ' 240,' + bot + ' Z"/>';
      if (st !== "streak") s += '<path class="c3-cap' + (st === "rupture" || st === "clot" || st === "occluded" ? " thin" : "") + '" d="M124,' + (bot - 1) + ' Q180,' + (bot - ph * 2 - 1) + ' 236,' + (bot - 1) + '"/>';
      if (st === "streak") for (var k = 0; k < 4; k += 1) s += '<circle class="c3-foam" cx="' + (150 + k * 20) + '" cy="' + (bot + 7) + '" r="4"/>';
      if (st === "rupture") s += '<path class="c3-crack" d="M176,' + (bot - ph * 2 + 6) + ' l6,-8 l4,8 l6,-8"/>';
    }
    if (st === "clot" || st === "occluded" || st === "bypass") {
      var ch = st === "clot" ? 46 : 80;
      s += '<path class="c3-clot" d="M150,' + (bot - 28) + ' Q170,' + (bot - ch) + ' 196,' + (bot - ch + 2) + ' Q214,' + (bot - ch + 8) + ' 222,' + (bot - 30) + ' Z"/>';
      if (st !== "clot") s += '<rect class="c3-clot" x="160" y="' + top + '" width="52" height="' + (bot - top - 30) + '" rx="10"/>';
    }
    if (st === "tpa") s += '<g class="c3-dissolve"><circle class="c3-clot" cx="176" cy="' + (bot - 50) + '" r="5"/><circle class="c3-clot" cx="194" cy="' + (bot - 58) + '" r="4"/><circle class="c3-clot" cx="210" cy="' + (bot - 48) + '" r="3"/></g><text class="sx-lbl sx-gold sx-lbl-strong" x="190" y="' + (top - 22) + '" text-anchor="middle">tPA → clot dissolves</text>';
    if (st === "balloon") s += '<line class="c3-wire" x1="0" y1="' + mid + '" x2="300" y2="' + mid + '"/><ellipse class="c3-balloon" cx="180" cy="' + mid + '" rx="64" ry="30"><animate attributeName="ry" values="6;30;30;6" dur="2.4s" repeatCount="indefinite"/></ellipse>';
    if (st === "stent") { s += '<rect class="c3-stent" x="116" y="' + (top + 2) + '" width="128" height="' + (bot - top - 16) + '" rx="4"/>'; var z = "M116," + (top + 2); for (var j = 0; j < 8; j += 1) z += " L" + (124 + j * 16) + "," + (j % 2 ? top + 2 : bot - 14); s += '<path class="c3-stent-mesh" d="' + z + '"/>'; }
    if (st === "bypass") s += '<path class="c3-detour" d="M60,' + (top - 14) + ' C70,-8 290,-8 300,' + (top - 14) + '"/><text class="sx-lbl sx-green sx-lbl-strong" x="180" y="' + (top - 20) + '" text-anchor="middle">graft (new pipe)</text>';
    // moving blood
    var stop = st === "occluded" || st === "bypass" ? 150 : 360;
    var path = "M-10," + mid + " L" + stop + "," + mid;
    var dur = st === "clot" || st === "spasm" ? 6 : st === "plaque" || st === "rupture" || st === "tpa" ? 4.2 : 3;
    var n = st === "clot" || st === "spasm" ? 3 : 6;
    s += '<path id="' + id + 'p" d="' + path + '" fill="none" stroke="none"/>';
    for (var i = 0; i < n; i += 1) s += '<circle class="sx-cell" r="5"><animateMotion dur="' + f1(dur * stop / 360) + 's" repeatCount="indefinite" begin="-' + f1(dur * stop / 360 * i / n) + 's"><mpath href="#' + id + 'p"/></animateMotion></circle>';
    if (st === "bypass") {
      s += '<path id="' + id + 'b" d="M-10,' + mid + ' L60,' + mid + ' L60,' + (top - 14) + ' C70,-8 290,-8 300,' + (top - 14) + ' L300,' + mid + ' L370,' + mid + '" fill="none" stroke="none"/>';
      for (var b = 0; b < 5; b += 1) s += '<circle class="sx-cell" r="4.5"><animateMotion dur="4s" repeatCount="indefinite" begin="-' + f1(4 * b / 5) + 's"><mpath href="#' + id + 'b"/></animateMotion></circle>';
    }
    if (st === "occluded") s += '<rect class="c3-dead" x="230" y="' + (top + 2) + '" width="130" height="' + (bot - top - 4) + '"/><text class="sx-lbl sx-bad sx-lbl-strong" x="352" y="' + (bot + 30) + '" text-anchor="end">no flow → muscle dies</text>';
    s += '<text class="sx-lbl" x="8" y="' + (bot + 30) + '">blood flow →</text>';
    s += '</svg>';
    return s + '<p class="lh-caption">' + esc(f.note || STAGE[st]) + '</p>';
  }

  // ---- the bypass machine ---------------------------------------------------------
  function cpbFigure(f) {
    var hi = f.hi, id = "c3p" + (uid += 1);
    var s = '<svg class="c3-svg" viewBox="0 0 440 290" role="img" aria-label="The heart-lung (bypass) machine circuit">' + arrowDefs(id + "a");
    var venous = "M80,176 L80,250 L372,250 L372,140", arterial = "M372,140 L372,30 L112,30 L112,86";
    s += '<path class="c3-tube c3-tube-v" d="' + venous + '"/><path class="c3-tube c3-tube-a" d="' + arterial + '"/>';
    s += '<path class="c3-heart" d="M96,90 C70,80 44,96 46,124 C48,152 72,170 98,182 C124,170 146,152 148,124 C150,96 122,80 96,90 Z"/>';
    s += '<text class="sx-lbl sx-lbl-strong" x="97" y="128" text-anchor="middle">heart</text><text class="sx-lbl" x="97" y="141" text-anchor="middle">(stopped)</text>';
    s += '<text class="sx-lbl sx-blue" x="90" y="206">out of the</text><text class="sx-lbl sx-blue" x="90" y="218">right atrium</text>';
    s += '<text class="sx-lbl" x="122" y="58">back into</text><text class="sx-lbl" x="122" y="70">the aorta</text>';
    var boxes = [["reservoir", 168, 250, "reservoir", "collects the blood", "below"], ["pump", 292, 250, "pump", "non-pulsatile flow", "below"], ["heat", 372, 192, "heat exchanger", "cools / rewarms", "left"], ["oxy", 372, 88, "oxygenator", "adds O₂, removes CO₂", "left"], ["filter", 270, 30, "filter", "traps clots, air, debris", "below"]];
    boxes.forEach(function (b) {
      var on = hi === b[0], w = b[3].length > 10 ? 104 : 80;
      s += '<g class="c3-box' + (on ? " sx-hi" : "") + (hi && !on ? " c3-faded" : "") + '"><rect x="' + (b[1] - w / 2) + '" y="' + (b[2] - 15) + '" width="' + w + '" height="30" rx="8"/>' +
        '<text class="sx-lbl sx-lbl-strong" x="' + b[1] + '" y="' + (b[2] + 4) + '" text-anchor="middle">' + b[3] + '</text></g>';
      s += '<g class="' + (hi && !on ? "c3-faded" : "") + '">' + (b[5] === "left" ? '<text class="sx-lbl" x="' + (b[1] - 60) + '" y="' + (b[2] + 4) + '" text-anchor="end">' + b[4] + '</text>'
        : '<text class="sx-lbl" x="' + b[1] + '" y="' + (b[2] + 30) + '" text-anchor="middle">' + b[4] + '</text>') + '</g>';
    });
    s += '<g class="' + (hi === "plegia" ? "sx-hi" : "") + (hi && hi !== "plegia" ? " c3-faded" : "") + '"><path class="c3-tube c3-tube-k" d="M196,136 L146,126"/><rect class="c3-kbag" x="196" y="118" width="88" height="36" rx="6"/><text class="sx-lbl sx-lbl-strong sx-gold" x="240" y="133" text-anchor="middle">cardioplegia</text><text class="sx-lbl sx-gold" x="240" y="146" text-anchor="middle">cold, high K⁺</text></g>';
    s += '<path id="' + id + 'v" d="' + venous + '" fill="none" stroke="none"/><path id="' + id + 'r" d="' + arterial + '" fill="none" stroke="none"/>';
    for (var i = 0; i < 5; i += 1) {
      s += '<circle class="c3-cell-blue" r="4"><animateMotion dur="5s" repeatCount="indefinite" begin="-' + f1(i) + 's"><mpath href="#' + id + 'v"/></animateMotion></circle>';
      s += '<circle class="sx-cell" r="4"><animateMotion dur="4s" repeatCount="indefinite" begin="-' + f1(i * 0.8) + 's"><mpath href="#' + id + 'r"/></animateMotion></circle>';
    }
    return s + '</svg><p class="lh-caption">Blue = blood low in oxygen, red = oxygenated. Target flow 2.2 to 2.4 L/min at a pressure of 65 to 100 mmHg (slide 26).</p>';
  }

  // ---- hypothermia slider ---------------------------------------------------------
  function thermoFigure() {
    return '<div class="c3-thermo" data-c3-thermo>' +
      '<label><span>Body temperature: <strong data-t></strong> °C</span><input type="range" min="18" max="37" step="1" value="37" aria-label="Temperature"></label>' +
      '<div class="c3-thermo-row"><span>Oxygen the body uses</span><div class="c3-meter"><i data-o2></i></div><b data-o2v></b></div>' +
      '<div class="c3-thermo-row"><span>Pump flow needed</span><div class="c3-meter blue"><i data-flow></i></div><b data-flowv></b></div>' +
      '<p class="c3-thermo-note" data-note></p>' +
      '<p class="lh-caption">Drag to cool the patient. O₂ use halves for every 10 °C drop; flow 2.4 L/min/m² at 37 °C vs 1 L/min/m² at 18 °C (slide 27).</p></div>';
  }
  function bindThermo(box) {
    var input = box.querySelector("input");
    function upd() {
      var t = Number(input.value), o2 = 100 * Math.pow(0.5, (37 - t) / 10), flow = 1 + (t - 18) / 19 * 1.4;
      box.querySelector("[data-t]").textContent = t;
      box.querySelector("[data-o2]").style.width = o2.toFixed(0) + "%";
      box.querySelector("[data-o2v]").textContent = o2.toFixed(0) + "%";
      box.querySelector("[data-flow]").style.width = (flow / 2.4 * 100).toFixed(0) + "%";
      box.querySelector("[data-flowv]").textContent = flow.toFixed(1) + " L/min/m²";
      box.querySelector("[data-note]").textContent = t >= 35 ? "Warm body: every organ needs full flow." : t > 25 ? "Cooler: organs need less oxygen, so the machine can run slower and safer." : "Cold: organs need about a quarter of the usual oxygen. That buys time if flow is low.";
    }
    input.addEventListener("input", upd);
    upd();
  }

  // ---- bars and lines --------------------------------------------------------------
  function barsFigure(f) {
    return '<div class="c3-bars">' + f.items.map(function (it) {
      return '<div class="c3-bar-row"><span class="c3-bar-lbl">' + it[0] + '</span><div class="c3-bar"><i class="' + (it[3] || "good") + '" style="width:' + Math.max(2, it[1]) + '%"></i></div><b>' + it[2] + '</b></div>';
    }).join("") + '</div>' + (f.note ? '<p class="lh-caption">' + f.note + '</p>' : "");
  }
  function lineFigure(f) {
    var pts = f.points, W = 360, H = 210, x0 = 52, x1 = 322, y0 = 170, y1 = 24, max = f.max || Math.max.apply(null, pts.map(function (p) { return p[1]; })) * 1.15;
    function X(i) { return x0 + (pts.length === 1 ? 0 : i / (pts.length - 1)) * (x1 - x0); }
    function Y(v) { return y0 - v / max * (y0 - y1); }
    var s = '<svg class="c3-svg" viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="Line chart">';
    s += '<line class="sx-axis" x1="' + x0 + '" y1="' + y0 + '" x2="' + x1 + '" y2="' + y0 + '"/><line class="sx-axis" x1="' + x0 + '" y1="' + y0 + '" x2="' + x0 + '" y2="' + y1 + '"/>';
    if (f.ylabel) s += '<text class="sx-lbl" x="12" y="' + ((y0 + y1) / 2) + '" transform="rotate(-90 12 ' + ((y0 + y1) / 2) + ')" text-anchor="middle">' + esc(f.ylabel) + '</text>';
    if (f.band) s += '<rect class="sx-zone-bad" x="' + x0 + '" y="' + f1(Y(f.band[1])) + '" width="' + (x1 - x0) + '" height="' + f1(Y(f.band[0]) - Y(f.band[1])) + '"/><text class="sx-lbl sx-bad" x="' + (x1 - 4) + '" y="' + f1(Y(f.band[1]) + 12) + '" text-anchor="end">' + esc(f.band[2] || "") + '</text>';
    s += '<polyline class="sx-curve ' + (f.tone === "good" ? "sx-c-normal" : "sx-c-failing") + '" points="' + pts.map(function (p, i) { return f1(X(i)) + "," + f1(Y(p[1])); }).join(" ") + '"/>';
    pts.forEach(function (p, i) {
      s += '<circle class="sx-dot" cx="' + f1(X(i)) + '" cy="' + f1(Y(p[1])) + '" r="4.5"/>' +
        '<text class="sx-lbl sx-lbl-strong sx-gold" x="' + f1(X(i)) + '" y="' + f1(Y(p[1]) - 10) + '" text-anchor="middle">' + esc(p[2] || (p[1] + (f.unit || ""))) + '</text>' +
        '<text class="sx-lbl" x="' + f1(X(i)) + '" y="' + (y0 + 16) + '" text-anchor="middle">' + esc(p[0]) + '</text>';
    });
    if (f.xlabel) s += '<text class="sx-lbl" x="' + ((x0 + x1) / 2) + '" y="' + (y0 + 34) + '" text-anchor="middle">' + esc(f.xlabel) + '</text>';
    return s + '</svg>' + (f.note ? '<p class="lh-caption">' + f.note + '</p>' : "");
  }

  // ---- where grafts come from ----------------------------------------------------------
  function harvestFigure(f) {
    var hi = f.hi || [];
    function on(k) { return !hi.length || has(hi, k); }
    var s = '<svg class="c3-svg" viewBox="0 0 360 300" role="img" aria-label="Where bypass grafts are harvested">';
    s += '<g class="c3-body"><circle cx="180" cy="34" r="22"/><path d="M140,64 L220,64 Q236,64 238,82 L242,168 L118,168 L122,82 Q124,64 140,64 Z"/>' +
      '<path d="M122,74 L92,150 L84,196 L98,198 L108,152 L130,100"/><path d="M238,74 L268,150 L276,196 L262,198 L252,152 L230,100"/>' +
      '<path d="M124,168 L132,290 L162,290 L174,180 L186,180 L198,290 L228,290 L236,168 Z"/></g>';
    s += '<path class="c3-heart" d="M176,104 C164,98 152,106 154,118 C156,130 170,138 182,144 C196,136 208,126 206,114 C204,102 190,98 176,104 Z"/>';
    s += '<g class="' + (on("ita") ? "" : "c3-faded") + (has(hi, "ita") ? " sx-hi" : "") + '"><path class="c3-harv c3-harv-art" d="M158,70 L160,150"/><path class="c3-harv c3-harv-art" d="M202,70 L200,150"/>' +
      '<text class="sx-lbl sx-lbl-strong sx-green" x="8" y="70">internal thoracic</text><text class="sx-lbl sx-green" x="8" y="82">(mammary) arteries,</text><text class="sx-lbl sx-green" x="8" y="94">inside the chest wall</text><line class="lh-lead" x1="120" y1="84" x2="156" y2="100"/></g>';
    s += '<g class="' + (on("radial") ? "" : "c3-faded") + (has(hi, "radial") ? " sx-hi" : "") + '"><path class="c3-harv c3-harv-art" d="M262,150 L272,192"/>' +
      '<text class="sx-lbl sx-lbl-strong sx-green" x="296" y="186" text-anchor="middle">radial</text><text class="sx-lbl sx-green" x="296" y="198" text-anchor="middle">artery</text></g>';
    s += '<g class="' + (on("svg") ? "" : "c3-faded") + (has(hi, "svg") ? " sx-hi" : "") + '"><path class="c3-harv c3-harv-vein" d="M166,182 C164,220 160,256 156,286"/>' +
      '<text class="sx-lbl sx-lbl-strong sx-blue" x="70" y="232" text-anchor="middle">great saphenous</text><text class="sx-lbl sx-blue" x="70" y="244" text-anchor="middle">vein (SVG), leg</text><line class="lh-lead" x1="112" y1="236" x2="160" y2="236"/></g>';
    return s + '</svg>';
  }

  // ---- PCI or CABG? ------------------------------------------------------------------
  function decideFigure() {
    return '<div class="c3-decide" data-c3-decide>' +
      '<div class="c3-decide-q"><span>Diseased vessels</span><div class="c3-seg" data-k="v"><button type="button" data-v="1">1</button><button type="button" data-v="2" class="on">2</button><button type="button" data-v="3">3</button></div></div>' +
      '<div class="c3-decide-q"><span>Proximal LAD involved?</span><div class="c3-seg" data-k="lad"><button type="button" data-v="0" class="on">No</button><button type="button" data-v="1">Yes</button></div></div>' +
      '<div class="c3-decide-q"><span>Left main disease?</span><div class="c3-seg" data-k="lm"><button type="button" data-v="0" class="on">No</button><button type="button" data-v="1">Yes</button></div></div>' +
      '<label class="c3-decide-q"><span>SYNTAX score: <strong data-syn></strong></span><input type="range" min="0" max="50" step="1" value="15" aria-label="SYNTAX score"></label>' +
      '<div class="c3-verdict" data-out><strong></strong><p></p></div>' +
      '<p class="lh-caption">Rules from slides 19 and 21. Click the answers and drag the score.</p></div>';
  }
  function bindDecide(box) {
    var st = { v: 2, lad: 0, lm: 0 }, input = box.querySelector("input");
    box.querySelectorAll(".c3-seg").forEach(function (seg) {
      seg.querySelectorAll("button").forEach(function (b) {
        b.addEventListener("click", function () {
          seg.querySelectorAll("button").forEach(function (x) { x.classList.toggle("on", x === b); });
          st[seg.dataset.k] = Number(b.dataset.v); upd();
        });
      });
    });
    function upd() {
      var syn = Number(input.value), v, why, cls;
      box.querySelector("[data-syn]").textContent = syn;
      if (st.lm) {
        if (syn < 22) { v = "PCI is a reasonable alternative"; why = "Left main disease favors CABG, except when the SYNTAX score is under 22."; cls = "ok"; }
        else { v = "CABG"; why = "Left main disease: CABG is favored (SYNTAX 22 or more)."; cls = "cabg"; }
      } else if (st.v === 3) {
        if (syn >= 23) { v = "CABG"; why = "Three-vessel disease with a SYNTAX score of 23 or more: CABG is favored."; cls = "cabg"; }
        else { v = "PCI is a reasonable alternative"; why = "Three-vessel disease, but a low SYNTAX score: PCI is reasonable."; cls = "ok"; }
      } else if (st.lad) {
        if (st.v === 2) { v = "CABG"; why = "Two-vessel disease WITH proximal LAD involvement is a CABG indication (slide 21)."; cls = "cabg"; }
        else { v = "PCI"; why = "One vessel only: PCI is favored. (Proximal LAD makes it high-risk anatomy, so this is a heart-team call.)"; cls = "pci"; }
      } else { v = "PCI"; why = "One- or two-vessel disease NOT involving the proximal LAD: PCI is favored."; cls = "pci"; }
      var out = box.querySelector("[data-out]");
      out.className = "c3-verdict " + cls;
      out.querySelector("strong").textContent = v;
      out.querySelector("p").textContent = why;
    }
    input.addEventListener("input", upd);
    upd();
  }

  // ---- ICU monitor ---------------------------------------------------------------------
  function monitorFigure(f) {
    var cells = [["BP", f.bp, "mmHg", "bp"], ["HR", f.hr, "bpm", "hr"], ["Urine", f.uo || "↓", "output", "uo"]].concat((f.extra || []).map(function (x) { return [x[0], x[1], x[2] || "", "ex"]; }));
    return '<div class="c3-monitor' + (f.tone ? " " + f.tone : "") + '">' + cells.map(function (c) {
      return '<div class="c3-mon-cell c3-mon-' + c[3] + '"><small>' + esc(c[0]) + '</small><strong>' + esc(c[1]) + '</strong><span>' + esc(c[2]) + '</span></div>';
    }).join("") + '</div>' + (f.caption ? "" : "");
  }

  // ---- small equation -----------------------------------------------------------------
  function eqFigure(f) {
    return '<div class="sx-eq"><div class="sx-eq-row">' + f.terms.map(function (t) {
      if (typeof t === "string") return '<span class="sx-eq-op">' + esc(t) + '</span>';
      var a = t[1] ? '<b class="sx-eq-arrow ' + (t[1] === "↑" ? "sx-up" : t[1] === "↓" ? "sx-down" : "") + '">' + esc(t[1]) + '</b>' : "";
      return '<span class="sx-eq-box' + (t[3] ? " sx-hi" : "") + '">' + a + '<strong>' + t[0] + '</strong><small>' + (t[2] || "") + '</small></span>';
    }).join("") + '</div></div>';
  }

  // ---- generic: flow, tiles, cycle, grid, quad ---------------------------------------------
  function flowFigure(f) {
    var hi = f.hi == null ? -1 : f.hi;
    return '<div class="sx-flow' + (f.vertical ? " vertical" : "") + '">' + f.steps.map(function (st, i) {
      return (i ? '<span class="sx-flow-arrow-t" aria-hidden="true">' + (f.vertical ? "↓" : "→") + '</span>' : "") + '<span class="sx-flow-step' + (i === hi || (Array.isArray(hi) && hi.indexOf(i) >= 0) ? " sx-hi" : "") + '">' + st + '</span>';
    }).join("") + '</div>';
  }
  function tilesFigure(f) {
    var hi = f.hi == null ? -1 : f.hi;
    return '<div class="sx-tiles">' + f.items.map(function (t, i) {
      return '<div class="sx-tile' + (i === hi || (Array.isArray(hi) && hi.indexOf(i) >= 0) ? " sx-hi" : "") + '"><span class="sx-tile-icon">' + t[0] + '</span><strong>' + t[1] + '</strong><small>' + t[2] + '</small></div>';
    }).join("") + '</div>';
  }
  function cycleFigure(f) {
    var nodes = f.nodes, n = nodes.length, cx = 180, cy = 128, rx = 126, ry = 86, id = "c3y" + (uid += 1);
    var s = '<svg class="sx-cycle" viewBox="0 0 360 256" role="img" aria-label="A vicious cycle">' + arrowDefs(id + "a");
    var pos = nodes.map(function (_, i) { var a = -Math.PI / 2 + i * 2 * Math.PI / n; return [cx + rx * Math.cos(a), cy + ry * Math.sin(a)]; });
    pos.forEach(function (p, i) {
      var q = pos[(i + 1) % n], mx = (p[0] + q[0]) / 2, my = (p[1] + q[1]) / 2, ox = (mx - cx) * 0.25, oy = (my - cy) * 0.25;
      var a = [p[0] + (q[0] - p[0]) * 0.3, p[1] + (q[1] - p[1]) * 0.3], b = [p[0] + (q[0] - p[0]) * 0.7, p[1] + (q[1] - p[1]) * 0.7];
      s += '<path class="sx-cyc-arrow" d="M' + f1(a[0]) + ',' + f1(a[1]) + ' Q' + f1(mx + ox) + ',' + f1(my + oy) + ' ' + f1(b[0]) + ',' + f1(b[1]) + '" marker-end="url(#' + id + 'a)"/>';
    });
    if (f.center) s += '<text class="sx-lbl sx-bad sx-lbl-strong" x="' + cx + '" y="' + (cy + 4) + '" text-anchor="middle">' + esc(f.center) + '</text>';
    s += '</svg>';
    return '<div class="sx-cycle-wrap">' + s + pos.map(function (p, i) {
      return '<span class="sx-cyc-node' + (i === 0 ? " first" : "") + '" style="left:' + f1(p[0] / 360 * 100) + '%;top:' + f1(p[1] / 256 * 100) + '%">' + nodes[i] + '</span>';
    }).join("") + '</div>';
  }
  function gridFigure(f) {
    return '<div class="table-scroll"><table class="learn-table c3-grid"><tr>' + f.cols.map(function (c, i) { return '<th' + (f.hiCol === i ? ' class="sx-col-hi"' : "") + '>' + c + '</th>'; }).join("") + '</tr>' +
      f.rows.map(function (r) { return '<tr>' + r.map(function (d, i) { return '<td' + (f.hiCol === i ? ' class="sx-col-hi"' : "") + '>' + d + '</td>'; }).join("") + '</tr>'; }).join("") + '</table></div>';
  }
  function quadFigure(f) {
    var hi = f.hi == null ? -1 : f.hi;
    return '<div class="c3-quad"><span class="c3-quad-x">' + f.x[0] + '</span><span class="c3-quad-x">' + f.x[1] + '</span>' +
      f.cells.map(function (c, i) {
        return (i % 2 === 0 ? '<span class="c3-quad-y">' + f.y[i / 2] + '</span>' : "") + '<div class="c3-quad-cell ' + (c[2] || "") + (i === hi ? " sx-hi" : "") + '"><strong>' + c[0] + '</strong><small>' + c[1] + '</small></div>';
      }).join("") + '</div>';
  }

  // ==== Cardiac Testing figures ============================================================
  // bruce {hi: stage}  the Bruce treadmill protocol as a staircase.
  var BRUCE = [[1, "10%", "1.7", "4.5"], [2, "12%", "2.5", "7"], [3, "14%", "3.4", "10"], [4, "16%", "4.2", "13"]];
  function bruceFigure(f) {
    var s = '<svg class="c3-svg" viewBox="0 0 360 252" role="img" aria-label="Bruce protocol stages">', x0 = 34, w = 74, y0 = 206;
    s += '<line class="sx-axis" x1="' + x0 + '" y1="' + y0 + '" x2="' + (x0 + w * 4 + 8) + '" y2="' + y0 + '"/>';
    BRUCE.forEach(function (b, i) {
      var h = 58 + i * 28, x = x0 + i * w, on = f.hi === b[0];
      s += '<rect class="c3-step' + (on ? " on" : "") + '" x="' + x + '" y="' + (y0 - h) + '" width="' + w + '" height="' + h + '" rx="4"/>' +
        '<text class="sx-lbl sx-lbl-strong' + (on ? " sx-gold" : "") + '" x="' + (x + w / 2) + '" y="' + (y0 - h + 16) + '" text-anchor="middle">Stage ' + b[0] + '</text>' +
        '<text class="sx-lbl" x="' + (x + w / 2) + '" y="' + (y0 - h + 30) + '" text-anchor="middle">' + b[2] + ' mph</text>' +
        '<text class="sx-lbl" x="' + (x + w / 2) + '" y="' + (y0 - h + 43) + '" text-anchor="middle">' + b[1] + ' grade</text>' +
        '<text class="sx-lbl sx-gold" x="' + (x + w / 2) + '" y="' + (y0 - h - 6) + '" text-anchor="middle">' + b[3] + ' METs</text>' +
        '<text class="sx-lbl" x="' + (x + w) + '" y="' + (y0 + 14) + '" text-anchor="middle">' + (3 * (i + 1)) + ' min</text>';
    });
    s += '<text class="sx-lbl" x="' + x0 + '" y="' + (y0 + 14) + '" text-anchor="middle">0</text>';
    s += '<rect class="c3-goal" x="' + (x0 + w * 2) + '" y="' + (y0 + 22) + '" width="' + (w * 2) + '" height="14" rx="4"/><text class="sx-lbl sx-green" x="' + (x0 + w * 3) + '" y="' + (y0 + 33) + '" text-anchor="middle">goal: 6-12 minutes</text>';
    return s + '</svg><p class="lh-caption">Every 3 minutes the belt gets faster AND steeper (slide 13). 1 MET = resting oxygen use.</p>';
  }

  // mphr  interactive age → predicted max heart rate and the 85% target.
  function mphrFigure() {
    return '<div class="c3-thermo" data-c3-mphr><label><span>Patient age: <strong data-age></strong></span><input type="range" min="20" max="90" step="1" value="60" aria-label="Age"></label>' +
      '<div class="c3-hrbar"><i class="c3-hr-fill" data-fill></i><b class="c3-hr-mark" data-mark></b></div>' +
      '<div class="c3-hr-out"><span>Predicted max (220 − age)<strong data-max></strong></span><span>Target: 85% of that<strong data-target></strong></span></div>' +
      '<p class="lh-caption">Drag the age. The test is only reliable if the heart rate passes the target (slide 10; 220 − age is standard teaching).</p></div>';
  }
  function bindMphr(box) {
    var input = box.querySelector("input");
    function upd() {
      var a = Number(input.value), max = 220 - a, t = Math.round(max * 0.85);
      box.querySelector("[data-age]").textContent = a;
      box.querySelector("[data-max]").textContent = max + " bpm";
      box.querySelector("[data-target]").textContent = t + " bpm";
      box.querySelector("[data-fill]").style.width = (max / 220 * 100).toFixed(1) + "%";
      box.querySelector("[data-mark]").style.left = (t / 220 * 100).toFixed(1) + "%";
    }
    input.addEventListener("input", upd); upd();
  }

  // duke  interactive Duke treadmill score.
  function dukeFigure(f) {
    return '<div class="c3-decide" data-c3-duke>' +
      '<label class="c3-decide-q"><span>Exercise time: <strong data-v="t"></strong> min</span><input type="range" data-k="t" min="1" max="15" step="1" value="' + (f.t || 8) + '"></label>' +
      '<label class="c3-decide-q"><span>Max ST deviation: <strong data-v="st"></strong> mm</span><input type="range" data-k="st" min="0" max="4" step="0.5" value="' + (f.st == null ? 1 : f.st) + '"></label>' +
      '<div class="c3-decide-q"><span>Angina during the test</span><div class="c3-seg" data-k="ang"><button type="button" data-v="0">0 none</button><button type="button" data-v="1" class="on">1 non-limiting</button><button type="button" data-v="2">2 stopped the test</button></div></div>' +
      '<div class="c3-duke-math" data-math></div><div class="c3-verdict" data-out><strong></strong><p></p></div>' +
      '<p class="lh-caption">Formula and bands from slide 18. Starts on the slide 19 example.</p></div>';
  }
  function bindDuke(box) {
    var ang = 1;
    box.querySelectorAll(".c3-seg button").forEach(function (b) {
      b.addEventListener("click", function () { box.querySelectorAll(".c3-seg button").forEach(function (x) { x.classList.toggle("on", x === b); }); ang = Number(b.dataset.v); upd(); });
    });
    function upd() {
      var t = Number(box.querySelector('[data-k="t"]').value), st = Number(box.querySelector('[data-k="st"]').value), score = t - 5 * st - 4 * ang;
      box.querySelector('[data-v="t"]').textContent = t; box.querySelector('[data-v="st"]').textContent = st;
      box.querySelector("[data-math]").innerHTML = '<b>' + t + '</b> − 5 × <b>' + st + '</b> − 4 × <b>' + ang + '</b> = <strong>' + (Math.round(score * 10) / 10) + '</strong>';
      var band = score >= 5 ? ["Low risk", "Score of +5 or more.", "cabg"] : score >= -10 ? ["Moderate risk", "Score from −10 to +4.", "ok"] : ["High risk", "Score of −11 or less.", "bad"];
      var out = box.querySelector("[data-out]"); out.className = "c3-verdict " + band[2];
      out.querySelector("strong").textContent = band[0]; out.querySelector("p").textContent = band[1];
    }
    box.querySelectorAll("input").forEach(function (i) { i.addEventListener("input", upd); });
    upd();
  }

  // perfusion {state: normal|ischemia|scar}  stress and rest short-axis rings.
  function ring(cx, cy, defect, label) {
    var r = 44, s = '<circle class="c3-ring" cx="' + cx + '" cy="' + cy + '" r="' + r + '"/>';
    if (defect) {
      var a0 = -0.35 * Math.PI, a1 = 0.35 * Math.PI, x0 = cx + r * Math.cos(a0), y0 = cy + r * Math.sin(a0), x1 = cx + r * Math.cos(a1), y1 = cy + r * Math.sin(a1);
      s += '<path class="c3-ring-gap" d="M' + f1(x0) + ',' + f1(y0) + ' A' + r + ',' + r + ' 0 0 1 ' + f1(x1) + ',' + f1(y1) + '"/>';
    }
    return s + '<text class="sx-lbl sx-lbl-strong" x="' + cx + '" y="' + (cy + 4) + '" text-anchor="middle">' + label + '</text>';
  }
  var PERF = {
    normal: [false, false, "Normal: tracer everywhere at stress and at rest.", "good"],
    ischemia: [true, false, "ISCHEMIA: a gap at stress that fills in at rest. The artery is narrow, but the muscle is alive.", "ok"],
    scar: [true, true, "SCAR (old MI): the gap is there at stress AND at rest. Dead muscle takes up no tracer.", "bad"]
  };
  function perfusionFigure(f) {
    var p = PERF[f.state || "ischemia"];
    var s = '<svg class="c3-svg" viewBox="0 0 360 170" role="img" aria-label="Stress and rest perfusion images">';
    s += ring(100, 78, p[0], "STRESS") + ring(260, 78, p[1], "REST");
    s += '<text class="sx-lbl" x="100" y="148" text-anchor="middle">' + (p[0] ? "gap = less blood" : "even uptake") + '</text><text class="sx-lbl" x="260" y="148" text-anchor="middle">' + (p[1] ? "gap stays" : (p[0] ? "fills back in" : "even uptake")) + '</text>';
    return s + '</svg><p class="c3-verdict-line ' + p[3] + '">' + p[2] + '</p>';
  }

  // stseg {hi: up|flat|down}  three kinds of ST depression.
  function stsegFigure(f) {
    var s = '<svg class="c3-svg" viewBox="0 0 360 150" role="img" aria-label="Upsloping, horizontal and downsloping ST depression">';
    [["up", "Upsloping", "equivocal", "M10,62 L22,22 L30,74 L38,78 Q56,70 74,62 Q86,46 98,62", "sx-gold"], ["flat", "Horizontal", "positive", "M10,62 L22,22 L30,74 L38,78 L74,78 Q86,62 98,62", "sx-bad"], ["down", "Downsloping", "positive", "M10,62 L22,22 L30,74 L38,72 L74,84 Q86,70 98,62", "sx-bad"]].forEach(function (k, i) {
      var ox = 12 + i * 116, on = !f.hi || f.hi === k[0];
      s += '<g transform="translate(' + ox + ',8)" class="' + (on ? "" : "c3-faded") + '"><line class="c3-base" x1="0" y1="62" x2="104" y2="62"/><path class="c3-ecg" d="' + k[3] + '"/>' +
        '<text class="sx-lbl sx-lbl-strong" x="52" y="118" text-anchor="middle">' + k[1] + '</text><text class="sx-lbl ' + k[4] + '" x="52" y="132" text-anchor="middle">' + k[2] + '</text></g>';
    });
    return s + '</svg><p class="lh-caption">Dashed line = baseline. Over 1 mm horizontal or downsloping = positive (slide 16).</p>';
  }

  // probe {mode: tte|tee}  side view: probe on the chest vs in the esophagus.
  function probeFigure(f) {
    var tee = f.mode === "tee";
    var s = '<svg class="c3-svg" viewBox="0 0 360 240" role="img" aria-label="Where the echo probe sits">';
    s += '<text class="sx-lbl" x="14" y="18">FRONT (chest wall)</text><text class="sx-lbl" x="346" y="18" text-anchor="end">BACK (spine)</text>';
    s += '<line class="c3-skin" x1="40" y1="26" x2="40" y2="230"/>';
    for (var i = 0; i < 5; i += 1) s += '<ellipse class="c3-rib" cx="52" cy="' + (52 + i * 40) + '" rx="8" ry="12"/>';
    for (var j = 0; j < 5; j += 1) s += '<rect class="c3-spine" x="312" y="' + (34 + j * 40) + '" width="26" height="32" rx="6"/>';
    s += '<rect class="c3-eso" x="268" y="26" width="22" height="204" rx="11"/><text class="sx-lbl" x="279" y="238" text-anchor="middle">esophagus</text>';
    // heart: LV in front, LA behind next to the esophagus
    s += '<path class="c3-heart" d="M96,110 C96,70 150,60 186,80 C210,92 214,126 206,150 C192,192 140,206 112,186 C96,174 96,140 96,110 Z"/><text class="sx-lbl sx-lbl-strong" x="150" y="140" text-anchor="middle">left ventricle</text>';
    s += '<ellipse class="c3-la" cx="236" cy="112" rx="26" ry="22"/><text class="sx-lbl sx-lbl-strong" x="236" y="116" text-anchor="middle">LA</text>';
    s += '<line class="c3-mv" x1="210" y1="96" x2="210" y2="132"/><text class="sx-lbl sx-gold sx-lbl-strong" x="210" y="88" text-anchor="middle">mitral valve</text>';
    if (tee) {
      s += '<path class="c3-beam" d="M274,118 L176,62 L176,174 Z"/><rect class="c3-probe" x="271" y="104" width="16" height="28" rx="5"/><line class="c3-cord" x1="279" y1="26" x2="279" y2="104"/>';
      s += '<text class="sx-lbl sx-green sx-lbl-strong" x="300" y="210" text-anchor="end">TEE: right behind the LA</text>';
    } else {
      s += '<path class="c3-beam" d="M36,120 L200,60 L200,180 Z"/><rect class="c3-probe" x="18" y="106" width="18" height="28" rx="5"/>';
      s += '<text class="sx-lbl sx-gold sx-lbl-strong" x="44" y="222">TTE: through skin, ribs and lung</text>';
    }
    return s + '</svg>';
  }

  // access {mode: radial|femoral}  catheter route from the wrist or groin to the heart.
  function accessFigure(f) {
    var fem = f.mode === "femoral";
    var s = '<svg class="c3-svg" viewBox="0 0 360 300" role="img" aria-label="Catheter access sites">';
    s += '<g class="c3-body"><circle cx="180" cy="34" r="22"/><path d="M140,64 L220,64 Q236,64 238,82 L242,168 L118,168 L122,82 Q124,64 140,64 Z"/>' +
      '<path d="M122,74 L92,150 L84,196 L98,198 L108,152 L130,100"/><path d="M238,74 L268,150 L276,196 L262,198 L252,152 L230,100"/>' +
      '<path d="M124,168 L132,290 L162,290 L174,180 L186,180 L198,290 L228,290 L236,168 Z"/></g>';
    s += '<path class="c3-heart" d="M176,104 C164,98 152,106 154,118 C156,130 170,138 182,144 C196,136 208,126 206,114 C204,102 190,98 176,104 Z"/>';
    s += '<path class="c3-aorta-thin" d="M180,100 Q180,84 190,86 Q200,90 196,104 L196,176 L176,186 L150,214"/>';
    var route = fem ? "M152,214 L176,186 L196,176 L196,104 Q200,90 190,86 Q182,84 180,100" : "M92,190 L104,150 L126,96 Q150,78 176,86 Q186,90 180,100";
    s += '<path class="c3-cath" d="' + route + '"/>';
    s += fem ? '<circle class="c3-site" cx="152" cy="214" r="7"/><text class="sx-lbl sx-gold sx-lbl-strong" x="104" y="236" text-anchor="middle">femoral</text><text class="sx-lbl sx-gold" x="104" y="248" text-anchor="middle">(groin)</text>'
      : '<circle class="c3-site" cx="92" cy="190" r="7"/><text class="sx-lbl sx-gold sx-lbl-strong" x="56" y="218" text-anchor="middle">radial</text><text class="sx-lbl sx-gold" x="56" y="230" text-anchor="middle">(wrist)</text>';
    s += '<text class="sx-lbl" x="248" y="96">catheter → up the</text><text class="sx-lbl" x="248" y="108">aorta → coronaries</text>';
    return s + '</svg>';
  }

  // groin  the femoral puncture rule.
  function groinFigure() {
    var s = '<svg class="c3-svg" viewBox="0 0 360 220" role="img" aria-label="Femoral puncture zone">';
    s += '<rect class="c3-zone-bad" x="20" y="14" width="320" height="58" rx="6"/><text class="sx-lbl sx-bad sx-lbl-strong" x="180" y="40" text-anchor="middle">TOO HIGH: retroperitoneal bleed</text><text class="sx-lbl sx-bad" x="180" y="54" text-anchor="middle">(bleeding hides in the back of the belly)</text>';
    s += '<line class="c3-lig" x1="20" y1="78" x2="340" y2="78"/><text class="sx-lbl sx-lbl-strong" x="24" y="94">inguinal ligament</text>';
    s += '<rect class="c3-zone-ok" x="20" y="100" width="320" height="50" rx="6"/><text class="sx-lbl sx-green sx-lbl-strong" x="180" y="124" text-anchor="middle">SAFE: within 3 cm below the ligament</text><text class="sx-lbl sx-green" x="180" y="138" text-anchor="middle">(artery over the femoral head, easy to compress)</text>';
    s += '<rect class="c3-zone-bad" x="20" y="156" width="320" height="50" rx="6"/><text class="sx-lbl sx-bad sx-lbl-strong" x="180" y="180" text-anchor="middle">TOO LOW: pseudoaneurysm</text><text class="sx-lbl sx-bad" x="180" y="194" text-anchor="middle">(a leak pocket outside the artery)</text>';
    return s + '</svg><p class="lh-caption">Slide 11. The explanations in brackets are standard teaching.</p>';
  }

  // rhc  the right heart catheter's path and what it reads at each stop.
  function rhcFigure(f) {
    var stops = [["RA", "CVP"], ["RV", "RV pressure"], ["PA", "PA pressure"], ["Wedge", "PCOP"]];
    var s = '<svg class="c3-svg" viewBox="0 0 380 170" role="img" aria-label="Right heart catheter path">';
    stops.forEach(function (st, i) {
      var x = 52 + i * 92, on = f.hi == null || f.hi === i;
      s += '<g class="' + (on ? "" : "c3-faded") + '"><rect class="c3-chamber" x="' + (x - 40) + '" y="40" width="80" height="58" rx="12"/><text class="sx-lbl sx-lbl-strong" x="' + x + '" y="62" text-anchor="middle">' + st[0] + '</text>' +
        '<text class="sx-lbl sx-gold sx-lbl-strong" x="' + x + '" y="118" text-anchor="middle">' + st[1] + '</text>' + (i === 3 ? '<text class="sx-lbl" x="' + x + '" y="132" text-anchor="middle">≈ left atrium</text>' : "") + '</g>';
    });
    s += '<path class="c3-cath" d="M4,82 L322,82"/><circle class="c3-balloon" cx="328" cy="82" r="9"><animate attributeName="r" values="4;10;10;4" dur="2.4s" repeatCount="indefinite"/></circle>';
    s += '<text class="sx-lbl" x="190" y="24" text-anchor="middle">the catheter floats with the blood, left to right</text>';
    s += '<text class="sx-lbl" x="190" y="158" text-anchor="middle">plus cardiac output (CO) and mixed venous O₂ (SvO₂)</text>';
    return s + '</svg>';
  }


  // ==== Heart Failure figures ===============================================================
  // vent {kind: normal|hfref|hfpef}  one left ventricle filling and squeezing.
  var VENT = {
    normal: { o: [50, 66], i: [32, 48], sq: 0.62, name: "Normal", sub: "EF 55-70%", note: "fills and empties well", cls: "" },
    hfref: { o: [70, 82], i: [62, 74], sq: 0.9, name: "HFrEF", sub: "EF reduced", note: "big, thin, weak squeeze", cls: " bad" },
    hfpef: { o: [56, 68], i: [20, 34], sq: 0.62, name: "HFpEF", sub: "EF normal", note: "thick, stiff, small: fills poorly", cls: " ok" }
  };
  function ventFigure(f) {
    var v = VENT[f.kind || "normal"];
    var s = '<svg class="c3-svg c3-svg-small" viewBox="0 0 250 230" role="img" aria-label="' + v.name + ' left ventricle">';
    s += '<g transform="translate(125,104)"><ellipse class="c3-lv-wall' + v.cls + '" rx="' + v.o[0] + '" ry="' + v.o[1] + '"/>' +
      '<g><animateTransform attributeName="transform" type="scale" values="1;1;' + v.sq + ';1" keyTimes="0;0.45;0.7;1" dur="1.6s" repeatCount="indefinite"/><ellipse class="c3-lv-blood" rx="' + v.i[0] + '" ry="' + v.i[1] + '"/></g></g>';
    s += '<text class="sx-lbl sx-lbl-strong sx-gold" x="125" y="196" text-anchor="middle">' + v.name + ' · ' + v.sub + '</text><text class="sx-lbl" x="125" y="212" text-anchor="middle">' + v.note + '</text>';
    return s + '</svg>';
  }

  // starling {curves: [normal|failing], dots: [{curve, x, label}], moves: [{curve, from, to}]}
  var CURV = { normal: { top: 100, k: 32, cls: "sx-c-normal", name: "healthy" }, failing: { top: 46, k: 30, cls: "sx-c-failing", name: "failing" } };
  function starlingFigure(f) {
    var W = 360, H = 220, x0 = 46, y0 = 186, w = 236, h = 160, id = kit.nextId("c3s");
    function sv(c, x) { var cv = CURV[c]; return cv.top * (1 - Math.exp(-x / cv.k)); }
    function X(x) { return x0 + x / 100 * w; }
    function Y(v) { return y0 - v / 100 * h; }
    var s = '<svg class="c3-svg" viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="Frank-Starling curve">' + arrowDefs(id + "a");
    s += '<line class="sx-axis" x1="' + x0 + '" y1="' + y0 + '" x2="' + (x0 + w) + '" y2="' + y0 + '"/><line class="sx-axis" x1="' + x0 + '" y1="' + y0 + '" x2="' + x0 + '" y2="' + (y0 - h) + '"/>';
    s += '<text class="sx-lbl" x="' + (x0 + w / 2) + '" y="' + (y0 + 26) + '" text-anchor="middle">preload (how full / stretched) →</text>';
    s += '<text class="sx-lbl" x="14" y="' + (y0 - h / 2) + '" transform="rotate(-90 14 ' + (y0 - h / 2) + ')" text-anchor="middle">stroke volume →</text>';
    if (f.flat) s += '<rect class="sx-zone-bad" x="' + X(62) + '" y="' + (y0 - h) + '" width="' + (X(100) - X(62)) + '" height="' + h + '"/><text class="sx-lbl sx-bad" x="' + X(81) + '" y="' + (y0 - 22) + '" text-anchor="middle">flat part:</text><text class="sx-lbl sx-bad" x="' + X(81) + '" y="' + (y0 - 9) + '" text-anchor="middle">more fluid → lungs</text>';
    (f.curves || ["normal"]).forEach(function (c) {
      var pts = [];
      for (var x = 0; x <= 100; x += 2) pts.push(f1(X(x)) + "," + f1(Y(sv(c, x))));
      s += '<polyline class="sx-curve ' + CURV[c].cls + '" points="' + pts.join(" ") + '"/><text class="sx-lbl ' + CURV[c].cls + '-t" x="' + (X(100) + 4) + '" y="' + f1(Y(sv(c, 100)) + 4) + '">' + CURV[c].name + '</text>';
    });
    (f.moves || []).forEach(function (m) { s += '<path class="sx-move" d="M' + f1(X(m.from)) + ',' + f1(Y(sv(m.curve, m.from))) + ' L' + f1(X(m.to)) + ',' + f1(Y(sv(m.curve, m.to))) + '" marker-end="url(#' + id + 'a)"/>'; });
    (f.dots || []).forEach(function (d) { var cx = X(d.x), cy = Y(sv(d.curve, d.x)); s += '<circle class="sx-dot" cx="' + f1(cx) + '" cy="' + f1(cy) + '" r="5"/><text class="sx-lbl sx-lbl-strong" x="' + f1(cx) + '" y="' + f1(cy - 10) + '" text-anchor="middle">' + esc(d.label) + '</text>'; });
    return s + '</svg>';
  }

  // backup {side: left|right}  where blood backs up when one side fails.
  function backupFigure(f) {
    var L = f.side === "left", R = f.side === "right", id = kit.nextId("c3b");
    var s = '<svg class="c3-svg" viewBox="0 0 420 240" role="img" aria-label="Where blood backs up in heart failure">' + arrowDefs(id + "a");
    function box(x, y, w, h, title, sub, cls) { return '<rect class="c3-bx' + cls + '" x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="12"/><text class="sx-lbl sx-lbl-strong" x="' + (x + w / 2) + '" y="' + (y + h / 2 + 1) + '" text-anchor="middle">' + title + '</text>' + (sub ? '<text class="sx-lbl" x="' + (x + w / 2) + '" y="' + (y + h / 2 + 14) + '" text-anchor="middle">' + sub + '</text>' : ""); }
    s += box(150, 16, 120, 50, "Lungs", L ? "flooded" : "", L ? " wet" : "");
    s += box(8, 96, 100, 50, "Right heart", R ? "weak" : "", R ? " bad" : "");
    s += box(312, 96, 100, 50, "Left heart", L ? "weak" : "", L ? " bad" : "");
    s += box(150, 176, 120, 50, "Body veins", R ? "flooded" : "", R ? " wet" : "");
    s += '<path class="sx-move" d="M58,94 Q62,46 146,42" marker-end="url(#' + id + 'a)"/><path class="sx-move" d="M274,42 Q358,46 362,92" marker-end="url(#' + id + 'a)"/>' +
      '<path class="sx-move" d="M362,150 Q358,198 274,202" marker-end="url(#' + id + 'a)"/><path class="sx-move" d="M146,202 Q62,198 58,150" marker-end="url(#' + id + 'a)"/>';
    function mid(lines) { return lines.map(function (t, i) { return '<text class="sx-lbl' + t[1] + '" x="210" y="' + (100 + i * 14) + '" text-anchor="middle">' + t[0] + '</text>'; }).join(""); }
    if (L) s += '<path class="c3-back" d="M310,108 Q262,96 250,72" marker-end="url(#' + id + 'a)"/>' + mid([["backs up into", " sx-blue sx-lbl-strong"], ["the LUNGS", " sx-blue sx-lbl-strong"], ["rales, orthopnea,", ""], ["PND, frothy sputum", ""]]);
    if (R) s += '<path class="c3-back" d="M110,134 Q158,148 170,172" marker-end="url(#' + id + 'a)"/>' + mid([["backs up into", " sx-blue sx-lbl-strong"], ["the BODY", " sx-blue sx-lbl-strong"], ["JVD, leg edema,", ""], ["big liver, ascites", ""]]);
    if (!L && !R) s += mid([["", ""], ["body → right heart", ""], ["→ lungs → left heart", ""], ["→ body", ""]]);
    return s + '</svg>';
  }

  // framingham  tick the findings; 2 major, or 1 major + 2 minor.
  var FRAM = [["PND or orthopnea", 1], ["Elevated JVP", 1], ["Hepatojugular reflux", 1], ["Rales", 1], ["S3 gallop", 1], ["Enlarging heart on serial CXR", 1], ["Pulmonary edema on CXR", 1], ["Weight loss > 10 lb in 5 days on diuretics", 1], ["Venous pressure > 16 cm H₂O", 1],
    ["Dyspnea on exertion", 0], ["Night cough", 0], ["Tachycardia > 120", 0], ["Hepatomegaly", 0], ["Bilateral leg edema", 0], ["Pulmonary vascular engorgement on CXR", 0], ["Pleural effusion on CXR", 0]];
  function framFigure() {
    function col(major) { return FRAM.map(function (x, i) { return x[1] === major ? '<button type="button" class="c3-chip' + (major ? " major" : "") + '" data-i="' + i + '">' + x[0] + '</button>' : ""; }).join(""); }
    return '<div class="c3-decide" data-c3-fram><div class="c3-fram-cols"><div><p class="c3-fram-h">Major</p>' + col(1) + '</div><div><p class="c3-fram-h">Minor</p>' + col(0) + '</div></div>' +
      '<div class="c3-verdict" data-out><strong></strong><p></p></div><p class="lh-caption">Tap the findings your patient has (slide 79).</p></div>';
  }
  function bindFram(box) {
    function upd() {
      var on = box.querySelectorAll(".c3-chip.on"), maj = 0, min = 0;
      on.forEach(function (b) { if (FRAM[Number(b.dataset.i)][1]) maj += 1; else min += 1; });
      var yes = maj >= 2 || (maj >= 1 && min >= 2), out = box.querySelector("[data-out]");
      out.className = "c3-verdict " + (yes ? "cabg" : "ok");
      out.querySelector("strong").textContent = yes ? "Meets Framingham: heart failure" : "Not enough yet";
      out.querySelector("p").textContent = maj + " major + " + min + " minor. Needs 2 major, or 1 major + 2 minor.";
    }
    box.querySelectorAll(".c3-chip").forEach(function (b) { b.addEventListener("click", function () { b.classList.toggle("on"); upd(); }); });
    upd();
  }

  // ntg  BP slider → what to do with nitrates in acute HF (slide 194).
  function ntgFigure() {
    return '<div class="c3-decide" data-c3-ntg><label class="c3-decide-q"><span>Systolic BP: <strong data-v></strong> mmHg</span><input type="range" min="70" max="220" step="5" value="180" aria-label="Systolic BP"></label>' +
      '<div class="c3-verdict" data-out><strong></strong><p></p></div><p class="lh-caption">Drag the pressure. From the deck\'s acute HF protocol (slide 194).</p></div>';
  }
  function bindNtg(box) {
    var input = box.querySelector("input");
    function upd() {
      var b = Number(input.value), out = box.querySelector("[data-out]"), r;
      box.querySelector("[data-v]").textContent = b;
      if (b < 100) r = ["Stop / hold nitrates", "Under 100: no SL nitroglycerin, stop the drip. Low BP that persists → think volume depletion or RV infarct.", "bad"];
      else if (b <= 150) r = ["SL NTG 0.4 mg q5 min; consider transdermal", "Under 150/100 and improving after SL: a nitro patch can take over.", "ok"];
      else r = ["SL NTG + add IV nitroglycerin", "Over 150/100: the failing heart is drowning in afterload. Bring it down fast.", "cabg"];
      out.className = "c3-verdict " + r[2]; out.querySelector("strong").textContent = r[0]; out.querySelector("p").textContent = r[1];
    }
    input.addEventListener("input", upd); upd();
  }

  // nephron {hi: sglt2|loop|thiazide|ksparing}  where each diuretic works.
  function nephronFigure(f) {
    var hi = f.hi, M = function (x) { return Math.round(0.62 * x + 7); };
    // [id, site x, site y, label y, name, where]
    var spots = [["thiazide", M(262), 62, 34, "Thiazides", "distal tubule: Na + Cl"], ["sglt2", M(92), 70, 92, "SGLT2 inhibitors", "proximal tubule: sugar + Na"],
      ["ksparing", M(316), 150, 150, "K-sparing", "collecting duct: aldosterone/ENaC"], ["loop", M(152), 196, 208, "Loop diuretics", "loop of Henle: NaCl, strongest"]];
    var s = '<svg class="c3-svg" viewBox="0 0 480 250" role="img" aria-label="Where diuretics act in the nephron">';
    s += '<circle class="c3-glom" cx="' + M(44) + '" cy="54" r="18"/><text class="sx-lbl" x="' + M(44) + '" y="90" text-anchor="middle">glomerulus</text>';
    s += '<path class="c3-tubule" d="M' + M(64) + ',46 C' + M(110) + ',30 ' + M(120) + ',80 ' + M(140) + ',96 L' + M(148) + ',206 Q' + M(160) + ',232 ' + M(172) + ',206 L' + M(180) + ',100 C' + M(200) + ',60 ' + M(250) + ',40 ' + M(280) + ',52 C' + M(320) + ',66 ' + M(316) + ',96 ' + M(320) + ',120 L' + M(320) + ',236"/>';
    spots.forEach(function (p) {
      var on = !hi || hi === p[0];
      s += '<g class="' + (on ? "" : "c3-faded") + '"><line class="sx-axis" x1="' + (p[1] + 8) + '" y1="' + p[2] + '" x2="246" y2="' + (p[3] + 3) + '"/><circle class="c3-site" cx="' + p[1] + '" cy="' + p[2] + '" r="7"/>' +
        '<text class="sx-lbl sx-lbl-strong sx-gold" x="252" y="' + p[3] + '">' + p[4] + '</text>' +
        '<text class="sx-lbl" x="252" y="' + (p[3] + 14) + '">' + p[5] + '</text></g>';
    });
    s += '<text class="sx-lbl" x="' + (M(320) + 6) + '" y="244">→ urine</text>';
    return s + '</svg>';
  }

  // ---- CAD figures ----------------------------------------------------------------------
  // wall {step: ldl|oxidize|mono|foam|cap}  a slice of artery wall: lumen, endothelium, intima, media.
  function wallFigure(f) {
    var st = f.step || "ldl", id = kit.nextId("c3w"), s = '<svg class="c3-svg" viewBox="0 0 400 200" role="img" aria-label="A slice of artery wall">';
    var endo = st === "cap" ? "M0,74 L70,74 Q160,6 250,74 L300,74" : "M0,74 L300,74";
    s += '<rect class="c3-lumen" x="0" y="0" width="300" height="74"/><rect class="c3-intima" x="0" y="74" width="300" height="70"/>';
    if (st === "cap") s += '<path class="c3-intima" d="' + endo + ' Z"/>';
    s += '<rect class="c3-media" x="0" y="144" width="300" height="44"/>';
    for (var m = 0; m < 6; m += 1) s += '<line class="c3-media-line" x1="0" y1="' + (150 + m * 7) + '" x2="300" y2="' + (150 + m * 7) + '"/>';
    s += '<path class="c3-endo" d="' + endo + '"/>';
    // blood
    s += '<path id="' + id + 'p" d="M-10,' + (st === "cap" ? 14 : 24) + ' L310,' + (st === "cap" ? 14 : 24) + '" fill="none" stroke="none"/>';
    for (var i = 0; i < 4; i += 1) s += '<circle class="sx-cell" r="5"><animateMotion dur="4s" repeatCount="indefinite" begin="-' + i + 's"><mpath href="#' + id + 'p"/></animateMotion></circle>';
    function ldl(x, y, cls) { return '<circle class="' + (cls || "c3-ldl") + '" cx="' + x + '" cy="' + y + '" r="5"/>'; }
    var note = "";
    if (st === "ldl") {
      s += ldl(60, 48) + ldl(240, 50) + ldl(140, 104) + ldl(200, 116) + ldl(90, 124);
      [[110, 0], [170, 1.3], [230, 2.6]].forEach(function (p) {
        s += '<circle class="c3-ldl" r="5"><animateMotion dur="4s" repeatCount="indefinite" begin="-' + p[1] + 's" path="M' + p[0] + ',36 L' + p[0] + ',110"/></circle>';
      });
      note = ["LDL slips through", "the endothelium and", "gets STUCK in the intima"];
    }
    if (st === "oxidize" || st === "mono" || st === "foam") {
      [[70, 100], [130, 118], [170, 96], [220, 122], [250, 100]].forEach(function (p) { s += ldl(p[0], p[1], "c3-oxldl"); });
      [80, 150, 220].forEach(function (x) { s += '<path class="c3-adh" d="M' + x + ',74 l0,-8 m0,0 l-5,-6 m5,6 l5,-6"/>'; });
    }
    if (st === "oxidize") note = ["LDL is OXIDIZED", "→ inflammation:", "endothelium puts out", "VCAM-1 / ICAM-1 (Y)"];
    if (st === "mono") {
      s += '<circle class="c3-mono" r="9"><animateMotion dur="5s" repeatCount="indefinite" path="M20,40 L120,48 Q150,60 150,84 L150,110" keyPoints="0;0.55;1;1" keyTimes="0;0.5;0.8;1" calcMode="linear"/><animate attributeName="r" values="8;8;13;13" keyTimes="0;0.5;0.8;1" dur="5s" repeatCount="indefinite"/></circle>';
      note = ["MONOCYTE sticks,", "crawls in and becomes", "a MACROPHAGE"];
    }
    if (st === "foam") {
      [[70, 108], [128, 112], [186, 106], [244, 112]].forEach(function (p) {
        s += '<circle class="c3-macro" cx="' + p[0] + '" cy="' + p[1] + '" r="15"/>' + ldl(p[0] - 5, p[1] - 4, "c3-oxldl sm") + ldl(p[0] + 5, p[1] + 3, "c3-oxldl sm") + ldl(p[0] - 3, p[1] + 6, "c3-oxldl sm") + ldl(p[0] + 6, p[1] - 6, "c3-oxldl sm");
      });
      note = ["Macrophages eat", "oxidized LDL →", "FOAM CELLS.", "Many = FATTY STREAK"];
    }
    if (st === "cap") {
      s += '<ellipse class="c3-core" cx="160" cy="84" rx="66" ry="28"/>';
      [[130, 84], [160, 92], [190, 80], [150, 74]].forEach(function (p) { s += '<circle class="c3-macro dim" cx="' + p[0] + '" cy="' + p[1] + '" r="7"/>'; });
      s += '<path class="c3-cap" d="M86,66 Q160,10 234,66"/><rect class="c3-calc" x="208" y="92" width="7" height="5" rx="1"/><rect class="c3-calc" x="102" y="94" width="6" height="5" rx="1"/>';
      s += '<text class="sx-lbl sx-lbl-strong" x="160" y="33" text-anchor="middle">fibrous cap</text>';
      note = ["Fibrous CAP over a", "lipid-rich necrotic", "CORE; calcium (white)", "may follow"];
    }
    // labels
    s += '<text class="sx-lbl" x="306" y="28">lumen</text><text class="sx-lbl" x="306" y="78">endothelium</text><text class="sx-lbl" x="306" y="112">intima</text><text class="sx-lbl" x="306" y="170">media</text>';
    var out = s + '</svg>';
    return out + '<p class="lh-caption c3-wall-note">' + note.join(" ") + '</p>';
  }

  // remodel {kind: positive|negative}  plaque grows; the wall bulges out or the lumen shrinks.
  function remodelFigure(f) {
    var kinds = f.kind ? [f.kind] : ["positive", "negative"], W = kinds.length === 1 ? 200 : 400;
    var s = '<svg class="c3-svg' + (kinds.length === 1 ? " c3-svg-small" : "") + '" viewBox="0 0 ' + W + ' 222" role="img" aria-label="Artery cross-section remodeling">';
    kinds.forEach(function (k, n) {
      var cx = kinds.length === 1 ? 100 : 100 + n * 200, pos = k === "positive";
      var R = pos ? "46;62;62;46" : "46;44;44;46", P = pos ? "40;56;56;40" : "40;38;38;40", r = pos ? "30;29;29;30" : "30;13;13;30", cy = pos ? "-6;-24;-24;-6" : "-6;-21;-21;-6";
      function an(attr, v) { return '<animate attributeName="' + attr + '" values="' + v + '" keyTimes="0;0.45;0.8;1" dur="5s" repeatCount="indefinite"/>'; }
      s += '<g transform="translate(' + cx + ',92)"><circle class="c3-xs-wall" r="46">' + an("r", R) + '</circle><circle class="c3-plaque" r="40">' + an("r", P) + '</circle>' +
        '<circle class="c3-lumen-x" cy="-6" r="30">' + an("r", r) + an("cy", cy) + '</circle></g>';
      s += '<text class="sx-lbl sx-lbl-strong ' + (pos ? "sx-green" : "sx-bad") + '" x="' + cx + '" y="178" text-anchor="middle">' + (pos ? "Positive (outward)" : "Negative (inward)") + '</text>' +
        '<text class="sx-lbl" x="' + cx + '" y="194" text-anchor="middle">' + (pos ? "wall bulges out" : "artery shrinks in") + '</text><text class="sx-lbl" x="' + cx + '" y="209" text-anchor="middle">' + (pos ? "lumen stays open" : "lumen narrows") + '</text>';
    });
    return s + '</svg>';
  }

  // capcore {kind: vulnerable|stable}  the two plaques in cross-section.
  function capcoreFigure(f) {
    var kinds = f.kind ? [f.kind] : ["vulnerable", "stable"], W = kinds.length === 1 ? 200 : 400;
    var s = '<svg class="c3-svg' + (kinds.length === 1 ? " c3-svg-small" : "") + '" viewBox="0 0 ' + W + ' 210" role="img" aria-label="Vulnerable vs stable plaque in cross-section">';
    kinds.forEach(function (k, n) {
      var cx = kinds.length === 1 ? 100 : 100 + n * 200, v = k === "vulnerable";
      s += '<g transform="translate(' + cx + ',88)"><circle class="c3-xs-wall" r="60"/>';
      if (v) {
        s += '<ellipse class="c3-core" cx="0" cy="22" rx="44" ry="30"/>';
        [[-34, 4], [32, 2], [-14, -6], [16, -8], [0, 40]].forEach(function (p, i) { s += '<circle class="c3-inflam" cx="' + p[0] + '" cy="' + p[1] + '" r="4"><animate attributeName="opacity" values="1;.35;1" dur="1.6s" begin="' + (i * 0.3) + 's" repeatCount="indefinite"/></circle>'; });
        s += '<circle class="c3-lumen-x thin-cap" cy="-16" r="28"/>';
      } else {
        s += '<ellipse class="c3-fibrous" cx="0" cy="14" rx="50" ry="40"/><ellipse class="c3-core" cx="0" cy="30" rx="16" ry="10"/><rect class="c3-calc" x="-30" y="26" width="8" height="6"/><rect class="c3-calc" x="22" y="32" width="7" height="6"/>' +
          '<circle class="c3-lumen-x thick-cap" cy="-32" r="14"/>';
      }
      s += '</g><text class="sx-lbl sx-lbl-strong ' + (v ? "sx-bad" : "sx-gold") + '" x="' + cx + '" y="170" text-anchor="middle">' + (v ? "Vulnerable (young)" : "Stable (old)") + '</text>' +
        '<text class="sx-lbl" x="' + cx + '" y="185" text-anchor="middle">' + (v ? "thin cap, big core" : "thick cap, small core") + '</text>' +
        '<text class="sx-lbl" x="' + cx + '" y="200" text-anchor="middle">' + (v ? "open lumen → ruptures → ACS" : "narrow lumen → angina") + '</text>';
    });
    return s + '</svg>';
  }

  // balance {supply: [..], demand: [..], tip: demand|even, verdict}  oxygen supply vs demand seesaw.
  function balanceFigure(f) {
    var a = f.tip === "demand" ? 9 : f.tip === "supply" ? -9 : 0;
    var s = '<svg class="c3-svg" viewBox="0 0 360 220" role="img" aria-label="Oxygen supply and demand balance">';
    s += '<path class="c3-fulcrum" d="M180,128 L162,164 L198,164 Z"/>';
    s += '<g><animateTransform attributeName="transform" type="rotate" values="0 180 128;' + a + ' 180 128;' + a + ' 180 128;0 180 128" keyTimes="0;0.3;0.85;1" dur="5s" repeatCount="indefinite"/>';
    s += '<line class="c3-beam" x1="40" y1="128" x2="320" y2="128"/>';
    function pan(x, title, items, cls) {
      var h = 26 + items.length * 15, y = 122 - h;
      var g = '<rect class="c3-pan ' + cls + '" x="' + (x - 66) + '" y="' + y + '" width="132" height="' + h + '" rx="10"/><text class="sx-lbl sx-lbl-strong" x="' + x + '" y="' + (y + 17) + '" text-anchor="middle">' + title + '</text>';
      items.forEach(function (t, i) { g += '<text class="sx-lbl" x="' + x + '" y="' + (y + 33 + i * 15) + '" text-anchor="middle">' + t + '</text>'; });
      return g;
    }
    s += pan(86, "O₂ SUPPLY", f.supply || ["coronary flow", "(mostly in diastole)"], "sup") + pan(274, "O₂ DEMAND", f.demand || ["heart rate", "contractility", "wall stress"], "dem") + '</g>';
    if (f.verdict) s += '<text class="sx-lbl sx-lbl-strong ' + (a > 0 ? "sx-bad" : "sx-green") + '" x="180" y="196" text-anchor="middle">' + f.verdict + '</text>';
    return s + '</svg>';
  }

  // diastole  HR slider: the cycle shortens, and diastole (coronary filling time) takes the hit.
  function diastoleFigure() {
    return '<div class="c3-decide" data-c3-diast><label class="c3-decide-q"><span>Heart rate: <strong data-v></strong> bpm</span><input type="range" min="50" max="180" step="5" value="60" aria-label="Heart rate"></label>' +
      '<div class="c3-cyc"><div class="c3-cyc-bar"><span class="c3-cyc-sys" data-sys>systole</span><span class="c3-cyc-dia" data-dia>diastole: coronaries fill</span></div></div>' +
      '<div class="c3-verdict" data-out><strong></strong><p></p></div><p class="lh-caption">One heartbeat, drawn to scale. Rough timings (standard teaching): systole shortens a little, diastole a lot.</p></div>';
  }
  function bindDiast(box) {
    var input = box.querySelector("input");
    function upd() {
      var hr = Number(input.value), cyc = 60000 / hr, sys = Math.max(200, 400 - hr), dia = cyc - sys, full = 1200;
      box.querySelector("[data-v]").textContent = hr;
      box.querySelector(".c3-cyc-bar").style.width = (cyc / full * 100).toFixed(1) + "%";
      box.querySelector("[data-sys]").style.flexBasis = (sys / cyc * 100).toFixed(1) + "%";
      box.querySelector("[data-dia]").style.flexBasis = (dia / cyc * 100).toFixed(1) + "%";
      box.querySelector("[data-dia]").textContent = dia > 260 ? "diastole: coronaries fill" : "dia";
      var out = box.querySelector("[data-out]"), bad = hr >= 120;
      out.className = "c3-verdict " + (bad ? "bad" : hr >= 90 ? "ok" : "pci");
      out.querySelector("strong").textContent = "Diastole ≈ " + Math.round(dia) + " ms of each " + Math.round(cyc) + " ms beat (" + Math.round(dia / cyc * 100) + "%)";
      out.querySelector("p").textContent = bad ? "Fast rate: demand is up AND filling time is short. A stenosed artery can't keep up → ischemia." : hr >= 90 ? "Less filling time per beat while demand climbs." : "Slow rate: long diastole, plenty of time to fill the coronaries.";
    }
    input.addEventListener("input", upd); upd();
  }

  // pretest  likelihood slider → what test (2024 ESC model, suspected stable angina).
  function pretestFigure() {
    return '<div class="c3-decide" data-c3-pretest><label class="c3-decide-q"><span>Pretest likelihood of obstructive CAD: <strong data-v></strong>%</span><input type="range" min="1" max="40" step="1" value="10" aria-label="Pretest likelihood"></label>' +
      '<div class="c3-pt-scale"><span class="lo">&lt; 5%</span><span class="mid">5 to 15%</span><span class="hi">&gt; 15%</span></div>' +
      '<div class="c3-verdict" data-out><strong></strong><p></p></div><p class="lh-caption">Drag the likelihood. No known CAD, after the H&amp;P and ECG (slide 51).</p></div>';
  }
  function bindPretest(box) {
    var input = box.querySelector("input");
    function upd() {
      var p = Number(input.value), out = box.querySelector("[data-out]"), r;
      box.querySelector("[data-v]").textContent = p;
      if (p < 5) r = ["Testing not usually indicated", "The chance of obstructive CAD is too low for a test to help.", "pci", "lo"];
      else if (p <= 15) r = ["CAC score, exercise ECG, or no testing", "A light test can rule things in or out.", "ok", "mid"];
      else r = ["Stress test WITH imaging, or CCTA", "Likely enough that you want a real picture.", "bad", "hi"];
      out.className = "c3-verdict " + r[2]; out.querySelector("strong").textContent = r[0]; out.querySelector("p").textContent = r[1];
      box.querySelectorAll(".c3-pt-scale span").forEach(function (sp) { sp.classList.toggle("on", sp.classList.contains(r[3])); });
    }
    input.addEventListener("input", upd); upd();
  }

  var FIGS = { coronary: coronaryFigure, artery: arteryFigure, cpb: cpbFigure, thermo: thermoFigure, bars: barsFigure, line: lineFigure, harvest: harvestFigure, decide: decideFigure, monitor: monitorFigure, eq: eqFigure, flow: flowFigure, tiles: tilesFigure, cycle: cycleFigure, grid: gridFigure, quad: quadFigure,
    bruce: bruceFigure, mphr: mphrFigure, duke: dukeFigure, perfusion: perfusionFigure, stseg: stsegFigure, probe: probeFigure, access: accessFigure, groin: groinFigure, rhc: rhcFigure,
    vent: ventFigure, starling: starlingFigure, backup: backupFigure, framingham: framFigure, ntg: ntgFigure, nephron: nephronFigure,
    wall: wallFigure, remodel: remodelFigure, capcore: capcoreFigure, balance: balanceFigure, diastole: diastoleFigure, pretest: pretestFigure };
  // Lecture-specific figure types can be added from another file: window.Cardio3Figures[type] = fn(f, kit).
  window.Cardio3Figures = window.Cardio3Figures || {};
  var kit = { esc: esc, f1: f1, has: has, arrowDefs: arrowDefs, nextId: function (p) { return (p || "c3x") + (uid += 1); }, coronary: coronaryFigure, artery: arteryFigure };
  window.Cardio3FigureKit = kit;
  function figure(f) {
    var fn = FIGS[f.type] || window.Cardio3Figures[f.type];
    return fn ? fn(f, kit) : "";
  }
  var BINDERS = [["[data-c3-thermo]", bindThermo], ["[data-c3-decide]", bindDecide], ["[data-c3-mphr]", bindMphr], ["[data-c3-duke]", bindDuke], ["[data-c3-fram]", bindFram], ["[data-c3-ntg]", bindNtg], ["[data-c3-diast]", bindDiast], ["[data-c3-pretest]", bindPretest]];
  window.Cardio3Binders = window.Cardio3Binders || [];
  function bindFigures(content) {
    BINDERS.concat(window.Cardio3Binders).forEach(function (b) { content.querySelectorAll(b[0]).forEach(function (box) { if (!box.dataset.c3Bound) { box.dataset.c3Bound = "1"; b[1](box); } }); });
  }
  function ownCaption(f) { return ["artery", "cpb", "thermo", "decide", "bruce", "mphr", "duke", "perfusion", "stseg", "groin", "framingham", "ntg", "wall", "diastole", "pretest"].indexOf(f.type) >= 0 || ((f.type === "bars" || f.type === "line") && f.note); }

  // ---- one path per lecture ----------------------------------------------------------------
  var anchor = document.getElementById("shock-learn-view");
  window.Cardio3LearnPaths = {};
  Object.keys(all).forEach(function (lectureId) {
    var data = all[lectureId];
    if (!anchor || !data || !data.lessons || !data.lessons.length) return;
    var p = data.prefix;
    var section = document.createElement("section");
    section.id = p + "-view"; section.className = "walkthrough-view rhythms-view"; section.hidden = true;
    section.innerHTML = '<button class="back-button" id="' + p + '-back" type="button">← ' + esc(data.short) + '</button><div id="' + p + '-content"></div>';
    anchor.parentNode.insertBefore(section, anchor);
    var path = window.createLearnPath({
      data: data, viewId: p + "-view", contentId: p + "-content", backId: p + "-back", statusId: p + "-status",
      progressKey: "pasem2:learn:" + lectureId + ":progress", eyebrow: data.short + " · from zero", heading: data.heading,
      statusCopy: data.lessons.length + " short lessons. Start with lesson 1: each one builds on the last.",
      figure: figure, bindFigures: bindFigures, ownCaption: ownCaption, isSmall: function (f) { return f.type === "vent" || ((f.type === "remodel" || f.type === "capcore") && !!f.kind); },
      beforeOpen: function () { document.querySelectorAll("[data-rhythm-tool]").forEach(function (other) { other.innerHTML = ""; }); }
    });
    if (!path) return;
    window.Cardio3LearnPaths[lectureId] = path;
    window.PasemLectureIntros = window.PasemLectureIntros || {};
    window.PasemLectureIntros[lectureId] = function (slot) {
      if (!slot) return;
      slot.innerHTML = '<button class="lh-start lh-start-lecture" id="' + p + '-launch" type="button">' +
        '<span class="lh-start-kicker">Learn it from zero</span><strong>' + esc(data.kicker) + '</strong>' +
        '<span class="lh-start-copy">' + esc(data.card) + '</span>' +
        '<span class="lh-start-status" id="' + p + '-status">' + esc(path.statusText()) + '</span></button>';
      slot.querySelector("#" + p + "-launch").addEventListener("click", function () { path.open(); });
    };
  });
}());
