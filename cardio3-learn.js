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

  var FIGS = { coronary: coronaryFigure, artery: arteryFigure, cpb: cpbFigure, thermo: thermoFigure, bars: barsFigure, line: lineFigure, harvest: harvestFigure, decide: decideFigure, monitor: monitorFigure, eq: eqFigure, flow: flowFigure, tiles: tilesFigure, cycle: cycleFigure, grid: gridFigure, quad: quadFigure };
  // Lecture-specific figure types can be added from another file: window.Cardio3Figures[type] = fn(f, kit).
  window.Cardio3Figures = window.Cardio3Figures || {};
  var kit = { esc: esc, f1: f1, has: has, arrowDefs: arrowDefs, nextId: function (p) { return (p || "c3x") + (uid += 1); }, coronary: coronaryFigure, artery: arteryFigure };
  window.Cardio3FigureKit = kit;
  function figure(f) {
    var fn = FIGS[f.type] || window.Cardio3Figures[f.type];
    return fn ? fn(f, kit) : "";
  }
  var BINDERS = [["[data-c3-thermo]", bindThermo], ["[data-c3-decide]", bindDecide]];
  window.Cardio3Binders = window.Cardio3Binders || [];
  function bindFigures(content) {
    BINDERS.concat(window.Cardio3Binders).forEach(function (b) { content.querySelectorAll(b[0]).forEach(function (box) { if (!box.dataset.c3Bound) { box.dataset.c3Bound = "1"; b[1](box); } }); });
  }
  function ownCaption(f) { return f.type === "artery" || f.type === "cpb" || f.type === "thermo" || f.type === "decide" || ((f.type === "bars" || f.type === "line") && f.note); }

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
      figure: figure, bindFigures: bindFigures, ownCaption: ownCaption,
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
