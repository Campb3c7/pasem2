/* Shock, Pressors & Fluids "from zero" path: figures + wiring (lesson engine: learn-path.js).
   Data: window.SHOCK_LEARN (data/shock-learn.js). Progress: pasem2:shock-learn:progress.
   The gold card sits at the top of the Cardio Part 2 "Shock, Pressors & Fluid Management" lecture
   (app.js calls window.PasemLectureIntros["shock-pressors-fluids"](slot) when that lecture renders).

   Figure types (all drawn here, no images):
   circuit {state: normal|cardiogenic|hypovolemic|distributive|obstructive, focus: [pump|tank|pipes|gauge|block]}
     the circulation as pump + pipes + tank with moving blood and a pressure gauge, plus a CO/SVR/preload readout.
   equation {hi: [bp|co|svr|hr|sv|pre|con|aft], arrows: {key: "up"|"down"}}  BP = CO × SVR tree.
   ventricle {focus: preload|contractility|afterload|all}  animated filling/squeezing left ventricle.
   starling {curves: [normal|failing|boosted], dots: [{curve, x, label}], moves: [{curve, from, to}], flat}  Frank-Starling plot.
   receptors {hi: [a1|b1|b2|d], drug}  the four receptor "buttons"; with drug, plus-levels from the deck's table.
   pressors  the deck's pressor comparison table as receptor bars.
   dopamine {dose}  interactive dose slider.
   phases {zone: 1|2|3}  HR / BP / urine output across pre-shock, shock, end-organ dysfunction.
   cycle {nodes: [...], center}  a vicious-cycle loop.
   flow {steps: [...], hi, vertical}  a chain of boxes with arrows.
   tiles {items: [[icon, title, text], ...], hi}  small cards.
   shocktable {hi}  the four shock types' bedside profile.
   mapcalc {sbp, dbp}  interactive MAP slider.
   iabp  animated intra-aortic balloon pump timing.
   targets {hi}  the five resuscitation goals.
   compartments {infuse: ns|d5w|colloid, third}  body water boxes, and where one liter ends up.
   capillary {leaky}  push vs pull across a capillary, lymph.
   tonicity {hi: iso|hypo|hyper}  three cells. */
(function () {
  "use strict";

  var data = window.SHOCK_LEARN;
  if (!data || !window.createLearnPath) return;
  var uid = 0;

  function esc(value) {
    return String(value == null ? "" : value).replace(/[&<>'"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[c];
    });
  }
  function f1(n) { return Number(n).toFixed(1); }
  function has(list, key) { return (list || []).indexOf(key) >= 0; }
  function arrowDefs(id) {
    return '<defs><marker id="' + id + '" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" class="sx-arrowhead"/></marker></defs>';
  }

  // ---- circuit: pump, pipes, tank ------------------------------------------
  var CIRCUIT = {
    normal: { pump: 1, pipe: 9, tank: 0.75, dots: 9, dur: 5, needle: 0.55, read: { CO: "", SVR: "", Preload: "" }, note: "Normal: full tank, strong pump, pipes with normal tone." },
    cardiogenic: { pump: 0.55, pipe: 6, tank: 0.9, dots: 6, dur: 9, needle: 0.22, backup: true, read: { CO: "↓", SVR: "↑", Preload: "↑" }, note: "Pump fails → flow drops → blood backs up behind it; pipes clamp down to hold pressure." },
    hypovolemic: { pump: 1, pipe: 6, tank: 0.22, dots: 4, dur: 7, needle: 0.22, read: { CO: "↓", SVR: "↑", Preload: "↓" }, note: "Tank empty → little returns to the pump → flow drops; pipes clamp down to hold pressure." },
    distributive: { pump: 1, pipe: 15, tank: 0.6, dots: 9, dur: 6, needle: 0.2, read: { CO: "↑ or normal (early)", SVR: "↓", Preload: "↓" }, note: "Pipes go wide → resistance collapses → pressure falls even though the pump works." },
    obstructive: { pump: 1, pipe: 6, tank: 0.85, dots: 4, dur: 10, needle: 0.2, block: true, read: { CO: "↓", SVR: "↑", Preload: "↑ behind the block" }, note: "Something blocks filling or emptying → flow drops; blood backs up behind the block." }
  };
  function circuitFigure(f) {
    var st = CIRCUIT[f.state || "normal"], focus = f.focus || [], id = "sxc" + (uid += 1);
    var loop = "M96,112 L96,52 Q96,40 108,40 L300,40 Q312,40 312,52 L312,186 Q312,198 300,198 L84,198 Q72,198 72,186 L72,150";
    var s = '<svg class="sx-circuit" viewBox="0 0 380 236" role="img" aria-label="Circulation drawn as pump, pipes and tank">' + arrowDefs(id + "a");
    // pipes: arterial (top/right) and venous (bottom)
    s += '<path class="sx-pipe sx-artery' + (has(focus, "pipes") ? " sx-hi" : "") + '" d="M96,112 L96,52 Q96,40 108,40 L300,40 Q312,40 312,52 L312,96" stroke-width="' + st.pipe + '"/>';
    s += '<path class="sx-pipe sx-vein" d="M312,140 L312,186 Q312,198 300,198 L84,198 Q72,198 72,186 L72,150" stroke-width="' + (st.backup ? 13 : 10) + '"/>';
    // organs (capillary beds)
    s += '<rect class="sx-organ" x="282" y="96" width="60" height="44" rx="10"/><text class="sx-lbl" x="312" y="122" text-anchor="middle">organs</text>';
    // tank on the venous side
    var tw = 110, th = 34, tx = 140, ty = 182, lvl = th * st.tank;
    s += '<g class="' + (has(focus, "tank") ? "sx-hi" : "") + '"><rect class="sx-tank" x="' + tx + '" y="' + ty + '" width="' + tw + '" height="' + th + '" rx="8"/>' +
      '<rect class="sx-tank-fill" x="' + (tx + 2) + '" y="' + f1(ty + th - lvl) + '" width="' + (tw - 4) + '" height="' + f1(Math.max(0, lvl - 2)) + '" rx="6"/>' +
      '<text class="sx-lbl" x="' + (tx + tw / 2) + '" y="' + (ty + th + 14) + '" text-anchor="middle">tank (blood volume, veins)</text></g>';
    // pump
    var pr = 30 * st.pump + 6;
    s += '<g class="sx-pump-g' + (has(focus, "pump") ? " sx-hi" : "") + '"><circle class="sx-pump" cx="84" cy="130" r="' + f1(pr) + '">' +
      '<animate attributeName="r" values="' + f1(pr) + ';' + f1(pr * (st.pump < 1 ? 0.95 : 0.84)) + ';' + f1(pr) + '" dur="1s" repeatCount="indefinite"/></circle>' +
      '<text class="sx-lbl sx-lbl-strong" x="84" y="134" text-anchor="middle">pump</text>' +
      (st.pump < 1 ? '<text class="sx-lbl sx-bad" x="58" y="' + f1(130 - pr - 4) + '" text-anchor="end">weak</text><text class="sx-lbl sx-bad" x="58" y="' + f1(130 - pr + 8) + '" text-anchor="end">squeeze</text>' : "") + '</g>';
    if (st.backup) s += '<text class="sx-lbl sx-bad" x="6" y="176">backs up →</text><text class="sx-lbl sx-bad" x="6" y="188">JVD, lungs</text>';
    if (st.block) s += '<g class="sx-block' + (has(focus, "block") ? " sx-hi" : "") + '"><rect x="62" y="152" width="20" height="10" rx="2"/><text class="sx-lbl sx-bad" x="22" y="176">block</text></g>';
    // gauge
    var gx = 204, gy = 70, gr = 22, ang = Math.PI * (1 - st.needle), nx = gx + Math.cos(ang) * (gr - 4), ny = gy - Math.sin(ang) * (gr - 4);
    s += '<g class="' + (has(focus, "gauge") ? "sx-hi" : "") + '"><path class="sx-gauge" d="M' + (gx - gr) + ',' + gy + ' A' + gr + ',' + gr + ' 0 0 1 ' + (gx + gr) + ',' + gy + '"/>' +
      '<path class="sx-gauge-low" d="M' + (gx - gr) + ',' + gy + ' A' + gr + ',' + gr + ' 0 0 1 ' + f1(gx - gr * Math.cos(Math.PI * 0.3)) + ',' + f1(gy - gr * Math.sin(Math.PI * 0.3)) + '"/>' +
      '<line class="sx-needle" x1="' + gx + '" y1="' + gy + '" x2="' + f1(nx) + '" y2="' + f1(ny) + '"/><circle class="sx-needle-dot" cx="' + gx + '" cy="' + gy + '" r="3"/>' +
      '<text class="sx-lbl" x="' + gx + '" y="' + (gy + 14) + '" text-anchor="middle">blood pressure</text></g>';
    s += '<text class="sx-lbl" x="200" y="28" text-anchor="middle">pipes (arteries, arterioles)</text>';
    // moving blood
    s += '<path id="' + id + 'p" d="' + loop + '" fill="none" stroke="none"/>';
    for (var i = 0; i < st.dots; i += 1) {
      s += '<circle class="sx-cell" r="4"><animateMotion dur="' + st.dur + 's" repeatCount="indefinite" begin="-' + f1(st.dur * i / st.dots) + 's"><mpath href="#' + id + 'p"/></animateMotion></circle>';
    }
    s += '</svg>';
    var read = Object.keys(st.read).filter(function (k) { return st.read[k]; });
    return s + (read.length ? '<div class="sx-readout">' + read.map(function (k) { return '<span><small>' + k + '</small>' + esc(st.read[k]) + '</span>'; }).join("") + '</div>' : "") +
      '<p class="lh-caption">' + esc(st.note) + '</p>';
  }

  // ---- equation tree -------------------------------------------------------
  function equationFigure(f) {
    var hi = f.hi || [], ar = f.arrows || {};
    function box(key, label, sub) {
      var a = ar[key] ? '<b class="sx-eq-arrow sx-' + ar[key] + '">' + (ar[key] === "up" ? "↑" : "↓") + '</b>' : "";
      return '<span class="sx-eq-box' + (has(hi, key) ? " sx-hi" : "") + '">' + a + '<strong>' + label + '</strong><small>' + sub + '</small></span>';
    }
    return '<div class="sx-eq">' +
      '<div class="sx-eq-row">' + box("bp", "BP", "pressure (MAP)") + '<span class="sx-eq-op">=</span>' + box("co", "CO", "cardiac output, L/min") + '<span class="sx-eq-op">×</span>' + box("svr", "SVR", "how tight the pipes are") + '</div>' +
      '<div class="sx-eq-row sx-eq-sub"><span class="sx-eq-hook">CO</span><span class="sx-eq-op">=</span>' + box("hr", "HR", "beats per minute") + '<span class="sx-eq-op">×</span>' + box("sv", "SV", "blood per beat") + '</div>' +
      '<div class="sx-eq-row sx-eq-sub"><span class="sx-eq-hook">SV</span><span class="sx-eq-op">←</span>' + box("pre", "Preload", "how full") + box("con", "Contractility", "how hard") + box("aft", "Afterload", "what it pushes against") + '</div>' +
      '</div>';
  }

  // ---- ventricle: fill and squeeze ------------------------------------------
  function ventricleFigure(f) {
    var focus = f.focus || "all", id = "sxv" + (uid += 1), dur = 1.8;
    var narrow = focus === "afterload";
    var s = '<svg class="sx-vent" viewBox="0 0 360 200" role="img" aria-label="The left ventricle filling and squeezing">' + arrowDefs(id + "a");
    // inflow (veins → atrium) and outflow (aorta)
    s += '<path class="sx-pipe sx-vein' + (focus === "preload" ? " sx-hi" : "") + '" d="M18,60 L110,60" stroke-width="12"/>';
    s += '<path class="sx-flow-arrow" d="M28,40 L92,40" marker-end="url(#' + id + 'a)"/><text class="sx-lbl" x="20" y="30">blood coming back</text>';
    s += '<path class="sx-pipe sx-artery' + (focus === "afterload" ? " sx-hi" : "") + '" d="M240,60 L340,60" stroke-width="' + (narrow ? 6 : 14) + '"/>';
    s += '<path class="sx-flow-arrow" d="M250,36 L330,36" marker-end="url(#' + id + 'a)"/><text class="sx-lbl" x="250" y="26">out to the body</text>';
    if (narrow) s += '<text class="sx-lbl sx-bad" x="258" y="88">tight pipes = high afterload</text>';
    // chamber group animates: fill (grow) then squeeze (shrink)
    s += '<g class="sx-vent-g" transform="translate(175,105)">' +
      '<g><animateTransform attributeName="transform" type="scale" values="0.78;1;1;0.62;0.78" keyTimes="0;0.45;0.55;0.75;1" dur="' + dur + 's" repeatCount="indefinite"/>' +
      '<path class="sx-vent-wall' + (focus === "contractility" ? " sx-hi" : "") + '" d="M-62,-48 Q-70,30 0,78 Q70,30 62,-48 Q0,-62 -62,-48 Z"/>' +
      '<path class="sx-vent-blood' + (focus === "preload" ? " sx-hi" : "") + '" d="M-46,-38 Q-52,24 0,60 Q52,24 46,-38 Q0,-50 -46,-38 Z"/>' +
      '</g></g>';
    s += '<path class="sx-pipe sx-vein" d="M110,60 L126,70" stroke-width="10"/><path class="sx-pipe sx-artery" d="M222,70 L240,60" stroke-width="' + (narrow ? 6 : 12) + '"/>';
    var lab = {
      preload: ["Preload", "how full it gets (stretch) before it squeezes"],
      contractility: ["Contractility", "how hard the muscle squeezes"],
      afterload: ["Afterload", "how hard it has to push to get blood out"],
      all: ["Stroke volume", "set by preload, contractility and afterload"]
    }[focus];
    s += '<text class="sx-lbl sx-lbl-strong sx-gold" x="175" y="194" text-anchor="middle">' + lab[0] + ': ' + lab[1] + '</text>';
    s += '<text class="sx-lbl sx-phase" x="175" y="108" text-anchor="middle">LV<animate attributeName="opacity" values="1;1;1;1" dur="' + dur + 's" repeatCount="indefinite"/></text>';
    s += '<text class="sx-lbl sx-fill-t" x="300" y="150" text-anchor="middle">filling…<animate attributeName="opacity" values="1;1;0;0;1" keyTimes="0;0.45;0.55;0.95;1" dur="' + dur + 's" repeatCount="indefinite"/></text>';
    s += '<text class="sx-lbl sx-gold" x="300" y="166" text-anchor="middle">squeeze!<animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;0.5;0.55;0.8;1" dur="' + dur + 's" repeatCount="indefinite"/></text>';
    return s + '</svg>';
  }

  // ---- Frank-Starling curves -------------------------------------------------
  var CURVES = { normal: { top: 100, k: 32, cls: "sx-c-normal", name: "healthy heart" }, failing: { top: 46, k: 30, cls: "sx-c-failing", name: "failing heart" }, boosted: { top: 72, k: 30, cls: "sx-c-boost", name: "failing heart + inotrope" } };
  function starlingFigure(f) {
    var W = 360, H = 220, x0 = 46, y0 = 186, w = 236, h = 160, id = "sxs" + (uid += 1);
    function sv(c, x) { var cv = CURVES[c]; return cv.top * (1 - Math.exp(-x / cv.k)); }
    function X(x) { return x0 + x / 100 * w; }
    function Y(v) { return y0 - v / 100 * h; }
    var s = '<svg class="sx-plot" viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="Frank-Starling curve">' + arrowDefs(id + "a");
    s += '<line class="sx-axis" x1="' + x0 + '" y1="' + y0 + '" x2="' + (x0 + w) + '" y2="' + y0 + '"/><line class="sx-axis" x1="' + x0 + '" y1="' + y0 + '" x2="' + x0 + '" y2="' + (y0 - h) + '"/>';
    s += '<text class="sx-lbl" x="' + (x0 + w / 2) + '" y="' + (y0 + 26) + '" text-anchor="middle">preload (how full / stretched) →</text>';
    s += '<text class="sx-lbl" x="14" y="' + (y0 - h / 2) + '" transform="rotate(-90 14 ' + (y0 - h / 2) + ')" text-anchor="middle">stroke volume →</text>';
    if (f.flat) s += '<rect class="sx-zone-bad" x="' + X(62) + '" y="' + (y0 - h) + '" width="' + (X(100) - X(62)) + '" height="' + h + '"/><text class="sx-lbl sx-bad" x="' + X(81) + '" y="' + (y0 - 22) + '" text-anchor="middle">flat part:</text><text class="sx-lbl sx-bad" x="' + X(81) + '" y="' + (y0 - 9) + '" text-anchor="middle">fluid → lungs</text>';
    (f.curves || ["normal"]).forEach(function (c) {
      var pts = [];
      for (var x = 0; x <= 100; x += 2) pts.push(f1(X(x)) + "," + f1(Y(sv(c, x))));
      s += '<polyline class="sx-curve ' + CURVES[c].cls + '" points="' + pts.join(" ") + '"/>' +
        '<text class="sx-lbl ' + CURVES[c].cls + '-t" x="' + (X(100) + 4) + '" y="' + f1(Y(sv(c, 100)) + 4) + '">' + (c === "boosted" ? "+ inotrope" : c === "normal" ? "healthy" : "failing") + '</text>';
    });
    (f.moves || []).forEach(function (m) {
      var cFrom = m.curve, cTo = m.toCurve || m.curve, xTo = m.to == null ? m.from : m.to;
      s += '<path class="sx-move" d="M' + f1(X(m.from)) + ',' + f1(Y(sv(cFrom, m.from))) + ' L' + f1(X(xTo)) + ',' + f1(Y(sv(cTo, xTo))) + '" marker-end="url(#' + id + 'a)"/>';
    });
    (f.dots || []).forEach(function (d) {
      var cx = X(d.x), cy = Y(sv(d.curve, d.x));
      s += '<circle class="sx-dot" cx="' + f1(cx) + '" cy="' + f1(cy) + '" r="5"/><text class="sx-lbl sx-lbl-strong" x="' + f1(cx + (d.dx || 0)) + '" y="' + f1(cy - 10 + (d.dy || 0)) + '" text-anchor="middle">' + esc(d.label) + '</text>';
    });
    return s + '</svg>';
  }

  // ---- receptors -------------------------------------------------------------
  var RECEPTORS = [
    { id: "a1", name: "α1", where: "smooth muscle of blood vessels", does: "squeezes the pipes (vasoconstriction)", bp: "↑ SVR → ↑ BP", icon: "pipe-tight" },
    { id: "b1", name: "β1", where: "heart", does: "faster and stronger beats (↑ chronotropy, ↑ inotropy)", bp: "↑ CO", icon: "heart" },
    { id: "b2", name: "β2", where: "blood vessels (and airways)", does: "relaxes the pipes (vasodilation)", bp: "↓ SVR → can ↓ BP", icon: "pipe-wide" },
    { id: "d", name: "D (dopaminergic)", where: "kidney, gut, heart and brain vessels", does: "opens those beds (vasodilation) at low dopamine doses", bp: "↑ renal blood flow, urine", icon: "kidney" }
  ];
  // Plus levels follow the deck's pressor table (slide 41) and receptor lists (slides 42-49).
  var DRUGS = {
    norepinephrine: { name: "Norepinephrine", lv: { a1: 4, b1: 2, b2: 0, d: 0 }, net: "↑↑ SVR, ↑ HR and contractility: the strongest squeeze" },
    dobutamine: { name: "Dobutamine", lv: { a1: 1, b1: 4, b2: 2, d: 0 }, net: "↑↑ contractility, ↓ SVR, little change in HR: more output, can lower BP" },
    epinephrine: { name: "Epinephrine", lv: { a1: 2, b1: 3, b2: 2, d: 0 }, net: "↑ CO; SVR dose dependent (low dose β2 ↓, high dose α1 ↑)" },
    dopamine: { name: "Dopamine", lv: { a1: 2, b1: 2, b2: 1, d: 3 }, net: "depends on the dose: kidneys → heart → squeeze" }
  };
  function icon(kind) {
    if (kind === "heart") return '<svg viewBox="0 0 40 32" class="sx-ricon"><path d="M20,30 C4,19 2,10 8,5 C13,1 18,4 20,8 C22,4 27,1 32,5 C38,10 36,19 20,30 Z"/></svg>';
    if (kind === "kidney") return '<svg viewBox="0 0 40 32" class="sx-ricon"><path d="M22,4 C10,2 5,12 7,20 C9,29 19,31 23,25 C26,20 19,17 22,12 C24,8 30,8 26,5 Z"/></svg>';
    var wTop = kind === "pipe-tight" ? 11 : 4, wBot = kind === "pipe-tight" ? 21 : 28;
    return '<svg viewBox="0 0 40 32" class="sx-ricon"><path class="sx-ricon-pipe" d="M2,' + wTop + ' Q20,' + (kind === "pipe-tight" ? 14 : 2) + ' 38,' + wTop + ' M2,' + wBot + ' Q20,' + (kind === "pipe-tight" ? 18 : 30) + ' 38,' + wBot + '"/></svg>';
  }
  function plus(n) { var s = ""; for (var i = 0; i < 4; i += 1) s += '<i class="' + (i < n ? "on" : "") + '"></i>'; return '<span class="sx-plus" aria-label="' + n + ' of 4">' + s + '</span>'; }
  function receptorsFigure(f) {
    var drug = f.drug && DRUGS[f.drug], hi = f.hi || [];
    var html = '<div class="sx-rec-grid">' + RECEPTORS.map(function (r) {
      var lv = drug ? drug.lv[r.id] : null, dim = (drug && !lv) || (hi.length && !has(hi, r.id));
      return '<div class="sx-rec' + (dim ? " dim" : "") + (has(hi, r.id) ? " sx-hi" : "") + '">' + icon(r.icon) + '<strong>' + r.name + '</strong><small>' + r.where + '</small><p>' + r.does + '</p><em>' + r.bp + '</em>' + (drug ? plus(lv) : "") + '</div>';
    }).join("") + '</div>';
    if (drug) html = '<p class="sx-drugname">' + drug.name + '</p>' + html + '<p class="sx-net"><strong>Net:</strong> ' + drug.net + '</p>';
    return html;
  }
  function pressorsFigure() {
    var rows = ["dobutamine", "dopamine", "norepinephrine", "epinephrine"];
    return '<div class="table-scroll"><table class="learn-table sx-ptable"><tr><th>Drug</th><th>α1 squeeze</th><th>β1 heart</th><th>β2 relax</th><th>D kidney</th></tr>' + rows.map(function (k) {
      var d = DRUGS[k];
      return '<tr><td><strong>' + d.name + '</strong></td>' + ["a1", "b1", "b2", "d"].map(function (r) { return '<td>' + plus(d.lv[r]) + '</td>'; }).join("") + '</tr>';
    }).join("") + '</table></div><p class="lh-caption">Bars are relative, read from the deck\'s table (slide 41) and receptor lists. Dopamine\'s row depends on the dose: see lesson 10.</p>';
  }

  // ---- dopamine dose dial ----------------------------------------------------
  function dopamineZone(dose) {
    if (dose < 3) return { k: "low", name: "Low dose (under 3)", rec: "Dopaminergic", eff: "Arterial vasodilation in the kidney and gut beds: ↑ renal blood flow and urine output.", r: "Renal" };
    if (dose <= 10) return { k: "mid", name: "Intermediate dose (3 to 10)", rec: "Dopaminergic + β1", eff: "β1 on the SA node and muscle: ↑ heart rate, ↑ contractility, ↑ cardiac output.", r: "Rate" };
    return { k: "high", name: "High dose (over 10)", rec: "α1", eff: "Peripheral vasoconstriction, including the kidneys: ↑ SVR and BP, but risk of renal necrosis and failure.", r: "Restrict" };
  }
  function dopamineFigure(f) {
    var dose = f.dose == null ? 2 : f.dose;
    return '<div class="sx-dopa" data-sx-dopa>' +
      '<div class="sx-dopa-bar"><span class="low">under 3<br><b>Renal</b></span><span class="mid">3 to 10<br><b>Rate</b></span><span class="high">over 10<br><b>Restrict</b></span><i class="sx-dopa-mark"></i></div>' +
      '<label class="sx-dopa-label">Dose: <strong data-sx-dopa-val></strong> mcg/kg/min<input type="range" min="0.5" max="20" step="0.5" value="' + dose + '" aria-label="Dopamine dose"></label>' +
      '<div class="sx-dopa-out"><strong data-sx-dopa-name></strong><span>Main receptor: <b data-sx-dopa-rec></b></span><p data-sx-dopa-eff></p></div>' +
      '<p class="lh-caption">Drag the slider. Thresholds from slide 46.</p></div>';
  }
  function bindDopamine(box) {
    var input = box.querySelector("input");
    function upd() {
      var d = Number(input.value), z = dopamineZone(d);
      box.querySelector("[data-sx-dopa-val]").textContent = d.toFixed(1);
      box.querySelector("[data-sx-dopa-name]").textContent = z.name;
      box.querySelector("[data-sx-dopa-rec]").textContent = z.rec;
      box.querySelector("[data-sx-dopa-eff]").textContent = z.eff;
      box.className = "sx-dopa sx-dopa-" + z.k;
      // bar is three equal thirds: 0-3, 3-10, 10-20
      var pos = d < 3 ? d / 3 / 3 : d <= 10 ? 1 / 3 + (d - 3) / 7 / 3 : 2 / 3 + (d - 10) / 10 / 3;
      box.querySelector(".sx-dopa-mark").style.left = (pos * 100).toFixed(1) + "%";
    }
    input.addEventListener("input", upd);
    upd();
  }

  // ---- MAP slider ------------------------------------------------------------
  function mapFigure(f) {
    return '<div class="sx-map" data-sx-map>' +
      '<label>Systolic <strong data-sx-sbp></strong><input type="range" min="50" max="180" step="2" value="' + (f.sbp || 120) + '" data-k="sbp" aria-label="Systolic pressure"></label>' +
      '<label>Diastolic <strong data-sx-dbp></strong><input type="range" min="20" max="110" step="2" value="' + (f.dbp || 80) + '" data-k="dbp" aria-label="Diastolic pressure"></label>' +
      '<div class="sx-map-out"><span>MAP ≈ (SBP + 2 × DBP) ÷ 3 =</span><strong data-sx-mapv></strong><em data-sx-map-note></em></div>' +
      '<p class="lh-caption">Drag the sliders. Goal: MAP 65 or more (deck); the formula is standard teaching.</p></div>';
  }
  function bindMap(box) {
    var inputs = box.querySelectorAll("input");
    function upd() {
      var sbp = Number(inputs[0].value), dbp = Number(inputs[1].value);
      if (dbp >= sbp) { dbp = sbp - 10; inputs[1].value = dbp; }
      var map = Math.round((sbp + 2 * dbp) / 3), ok = map >= 65;
      box.querySelector("[data-sx-sbp]").textContent = sbp;
      box.querySelector("[data-sx-dbp]").textContent = dbp;
      box.querySelector("[data-sx-mapv]").textContent = map;
      box.querySelector("[data-sx-map-note]").textContent = ok ? (map > 90 ? "above the normal 65-90 range" : "organs are perfused (65 or more)") : "under 65: organs are under-perfused";
      box.classList.toggle("bad", !ok);
    }
    inputs.forEach(function (i) { i.addEventListener("input", upd); });
    upd();
  }

  // ---- phases of shock -------------------------------------------------------
  function phasesFigure(f) {
    var W = 360, H = 210, x0 = 20, x1 = 340, y0 = 170, id = "sxp" + (uid += 1), zone = f.zone || 0;
    var z = [[x0, 130, "1 · Pre-shock", "compensated"], [130, 240, "2 · Shock", "overwhelmed"], [240, x1, "3 · End-organ", "dysfunction"]];
    function line(fn) { var p = []; for (var x = x0; x <= x1; x += 4) p.push(x + "," + f1(fn((x - x0) / (x1 - x0)))); return p.join(" "); }
    var s = '<svg class="sx-plot" viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="Phases of shock over time">';
    z.forEach(function (q, i) {
      s += '<rect class="sx-zone' + (zone === i + 1 ? " on" : "") + '" x="' + q[0] + '" y="20" width="' + (q[1] - q[0]) + '" height="' + (y0 - 20) + '"/>' +
        '<text class="sx-lbl sx-lbl-strong" x="' + ((q[0] + q[1]) / 2) + '" y="34" text-anchor="middle">' + q[2] + '</text><text class="sx-lbl" x="' + ((q[0] + q[1]) / 2) + '" y="47" text-anchor="middle">' + q[3] + '</text>';
    });
    s += '<line class="sx-axis" x1="' + x0 + '" y1="' + y0 + '" x2="' + x1 + '" y2="' + y0 + '"/><text class="sx-lbl" x="' + ((x0 + x1) / 2) + '" y="' + (y0 + 18) + '" text-anchor="middle">time / volume lost →</text>';
    s += '<polyline class="sx-curve sx-c-hr" points="' + line(function (t) { return 140 - 70 * Math.min(1, t / 0.55) + (t > 0.8 ? (t - 0.8) * 120 : 0); }) + '"/>';
    s += '<polyline class="sx-curve sx-c-bp" points="' + line(function (t) { return t < 0.34 ? 82 : 82 + (t - 0.34) * 120; }) + '"/>';
    s += '<polyline class="sx-curve sx-c-uo" points="' + line(function (t) { return 96 + t * 66; }) + '"/>';
    s += '<g class="sx-legend"><text class="sx-lbl sx-c-hr-t" x="26" y="202">— heart rate</text><text class="sx-lbl sx-c-bp-t" x="130" y="202">— blood pressure</text><text class="sx-lbl sx-c-uo-t" x="250" y="202">— urine output</text></g>';
    return s + '</svg>';
  }

  // ---- cycle / flow / tiles ---------------------------------------------------
  function cycleFigure(f) {
    var nodes = f.nodes, n = nodes.length, cx = 180, cy = 128, rx = 126, ry = 86, id = "sxy" + (uid += 1);
    var s = '<svg class="sx-cycle" viewBox="0 0 360 256" role="img" aria-label="A vicious cycle">' + arrowDefs(id + "a");
    var pos = nodes.map(function (_, i) { var a = -Math.PI / 2 + i * 2 * Math.PI / n; return [cx + rx * Math.cos(a), cy + ry * Math.sin(a)]; });
    pos.forEach(function (p, i) {
      var q = pos[(i + 1) % n], mx = (p[0] + q[0]) / 2, my = (p[1] + q[1]) / 2, ox = (mx - cx) * 0.25, oy = (my - cy) * 0.25;
      var t0 = 0.3, t1 = 0.7;
      var a = [p[0] + (q[0] - p[0]) * t0, p[1] + (q[1] - p[1]) * t0], b = [p[0] + (q[0] - p[0]) * t1, p[1] + (q[1] - p[1]) * t1];
      s += '<path class="sx-cyc-arrow" d="M' + f1(a[0]) + ',' + f1(a[1]) + ' Q' + f1(mx + ox) + ',' + f1(my + oy) + ' ' + f1(b[0]) + ',' + f1(b[1]) + '" marker-end="url(#' + id + 'a)"/>';
    });
    if (f.center) s += '<text class="sx-lbl sx-bad sx-lbl-strong" x="' + cx + '" y="' + (cy + 4) + '" text-anchor="middle">' + esc(f.center) + '</text>';
    s += '</svg>';
    var labels = pos.map(function (p, i) {
      return '<span class="sx-cyc-node' + (i === 0 ? " first" : "") + '" style="left:' + f1(p[0] / 360 * 100) + '%;top:' + f1(p[1] / 256 * 100) + '%">' + nodes[i] + '</span>';
    }).join("");
    return '<div class="sx-cycle-wrap">' + s + labels + '</div>';
  }
  function flowFigure(f) {
    var hi = f.hi == null ? -1 : f.hi;
    return '<div class="sx-flow' + (f.vertical ? " vertical" : "") + '">' + f.steps.map(function (st, i) {
      return (i ? '<span class="sx-flow-arrow-t" aria-hidden="true">' + (f.vertical ? "↓" : "→") + '</span>' : "") + '<span class="sx-flow-step' + (i === hi || (Array.isArray(hi) && hi.indexOf(i) >= 0) ? " sx-hi" : "") + '">' + st + '</span>';
    }).join("") + '</div>';
  }
  function tilesFigure(f) {
    var hi = f.hi == null ? -1 : f.hi;
    return '<div class="sx-tiles">' + f.items.map(function (t, i) {
      return '<div class="sx-tile' + (i === hi ? " sx-hi" : "") + '"><span class="sx-tile-icon">' + t[0] + '</span><strong>' + t[1] + '</strong><small>' + t[2] + '</small></div>';
    }).join("") + '</div>';
  }

  // ---- shock profile table ------------------------------------------------------
  function shockTable(f) {
    var cols = [
      ["cardiogenic", "Cardiogenic", "pump"], ["hypovolemic", "Hypovolemic", "tank"], ["distributive", "Distributive", "pipes"], ["obstructive", "Obstructive", "block"]
    ];
    var rows = [
      ["Cardiac output", ["↓", "↓", "↑ or normal early", "↓"]],
      ["SVR (pipes)", ["↑", "↑", "↓", "↑"]],
      ["Preload / neck veins", ["↑ JVD", "↓ flat", "↓ or normal", "↑ JVD"]],
      ["Skin", ["cool, clammy", "cool, clammy", "warm early", "cool"]],
      ["Lungs", ["rales (wet)", "clear (dry)", "clear", "usually clear"]]
    ];
    var hi = f.hi;
    return '<div class="table-scroll"><table class="learn-table sx-stable"><tr><th></th>' + cols.map(function (c) { return '<th class="' + (hi === c[0] ? "sx-col-hi" : "") + '">' + c[1] + '<small>' + c[2] + '</small></th>'; }).join("") + '</tr>' +
      rows.map(function (r) { return '<tr><td><strong>' + r[0] + '</strong></td>' + r[1].map(function (v, i) { return '<td class="' + (hi === cols[i][0] ? "sx-col-hi" : "") + '">' + v + '</td>'; }).join("") + '</tr>'; }).join("") +
      '</table></div><p class="lh-caption">Bedside profile = standard teaching built on the deck\'s mechanisms (slides 3-5, 62).</p>';
  }

  // ---- IABP --------------------------------------------------------------------
  function iabpFigure() {
    var dur = 2.4, id = "sxi" + (uid += 1);
    // heart squeezes 0-0.4 (systole), relaxes 0.4-1 (diastole); balloon inflates 0.42-0.92, deflates just before next systole.
    var s = '<svg class="sx-iabp" viewBox="0 0 360 286" role="img" aria-label="Intra-aortic balloon pump timing">' + arrowDefs(id + "a");
    s += '<g transform="translate(70,150)"><g><animateTransform attributeName="transform" type="scale" values="1;0.8;0.8;1;1" keyTimes="0;0.2;0.38;0.45;1" dur="' + dur + 's" repeatCount="indefinite"/>' +
      '<path class="sx-vent-wall" d="M-40,-36 Q-46,20 0,52 Q46,20 40,-36 Q0,-46 -40,-36 Z"/><text class="sx-lbl sx-lbl-strong" x="0" y="8" text-anchor="middle">LV</text></g></g>';
    // aorta: up from LV, arch, down the right side
    s += '<path class="sx-aorta" d="M86,112 C86,40 120,24 170,24 C230,24 262,40 262,96 L262,214"/>';
    s += '<path class="sx-coronary" d="M96,96 C70,86 52,96 44,112"/><text class="sx-lbl" x="4" y="72">coronary</text><text class="sx-lbl" x="4" y="84">arteries</text>';
    s += '<rect class="sx-balloon" x="256" y="104" width="12" height="96" rx="6"><animate attributeName="width" values="4;4;20;20;4" keyTimes="0;0.42;0.5;0.9;0.96" dur="' + dur + 's" repeatCount="indefinite"/>' +
      '<animate attributeName="x" values="260;260;252;252;260" keyTimes="0;0.42;0.5;0.9;0.96" dur="' + dur + 's" repeatCount="indefinite"/></rect>';
    s += '<text class="sx-lbl" x="278" y="156">balloon</text><text class="sx-lbl" x="278" y="168">(descending</text><text class="sx-lbl" x="278" y="180">aorta)</text>';
    // arrows: systole forward, diastole back to coronaries
    s += '<g opacity="0"><animate attributeName="opacity" values="1;1;0;0;1" keyTimes="0;0.38;0.42;0.96;1" dur="' + dur + 's" repeatCount="indefinite"/>' +
      '<path class="sx-move" d="M110,48 C140,30 200,30 236,44" marker-end="url(#' + id + 'a)"/>' +
      '<text class="sx-lbl sx-lbl-strong sx-gold" x="180" y="244" text-anchor="middle">SYSTOLE: balloon flat</text><text class="sx-lbl" x="180" y="260" text-anchor="middle">heart ejects into an emptier aorta</text><text class="sx-lbl" x="180" y="274" text-anchor="middle">= lower afterload, less O₂ demand</text></g>';
    s += '<g opacity="0"><animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;0.44;0.5;0.9;0.96" dur="' + dur + 's" repeatCount="indefinite"/>' +
      '<path class="sx-move sx-move-blue" d="M236,40 C200,28 140,28 108,56 L72,90" marker-end="url(#' + id + 'a)"/>' +
      '<text class="sx-lbl sx-lbl-strong sx-blue" x="180" y="244" text-anchor="middle">DIASTOLE: balloon inflates</text><text class="sx-lbl" x="180" y="260" text-anchor="middle">pushes blood back up into</text><text class="sx-lbl" x="180" y="274" text-anchor="middle">the coronaries = more perfusion</text></g>';
    return s + '</svg><p class="lh-caption">Slowed down. Inflates in diastole, deflates just before systole (slide 58).</p>';
  }

  // ---- resuscitation targets ----------------------------------------------------
  var TARGETS = [["map", "MAP", "≥ 65", "mmHg"], ["sbp", "SBP", "≥ 90", "mmHg"], ["uo", "Urine", "> 0.5", "mL/kg/hr"], ["cvp", "CVP", "≥ 8", "mmHg"], ["spo2", "SpO₂", "≥ 92", "%"]];
  function targetsFigure(f) {
    return '<div class="sx-targets">' + TARGETS.map(function (t) {
      return '<div class="sx-target' + (has(f.hi, t[0]) ? " sx-hi" : "") + '"><small>' + t[1] + '</small><strong>' + t[2] + '</strong><span>' + t[3] + '</span></div>';
    }).join("") + '</div>';
  }

  // ---- body water compartments --------------------------------------------------
  var INFUSE = {
    ns: { name: "1 L of normal saline or LR (isotonic crystalloid)", ml: [0, 750, 250], note: "Isotonic: stays outside the cells, spreads across the whole extracellular space. Only about 20-30% stays in the vessels (slides 85, 99)." },
    d5w: { name: "1 L of D5W", ml: [670, 250, 80], note: "The sugar is burned, leaving free water that spreads through ALL body water, mostly into cells. Under 10% stays in the vessels (standard teaching)." },
    colloid: { name: "Colloid (albumin, plasma)", ml: [0, 100, 900], note: "Big molecules can't cross the capillary wall, so colloids mostly stay in the vessels (slide 85), unless the vessels are leaky." }
  };
  function compartmentsFigure(f) {
    var inf = f.infuse && INFUSE[f.infuse];
    var boxes = [["Inside cells (ICF)", "28 L", "40% of body weight", 28, "icf"], ["Interstitial", "10 L", "14%", 10, "isf"], ["In the vessels", "5 L blood", "the only part that perfuses", 6, "ivf"]];
    var html = '<div class="sx-comp"><div class="sx-comp-row">' + boxes.map(function (b, i) {
      return (i ? '<span class="sx-wall" title="' + (i === 1 ? "cell membrane" : "capillary wall") + '"><small>' + (i === 1 ? "cell membrane" : "capillary wall") + '</small></span>' : "") +
        '<div class="sx-comp-box sx-' + b[4] + (f.hi === b[4] ? " sx-hi" : "") + '" style="flex:' + b[3] + '"><strong>' + b[0] + '</strong><span>' + b[1] + '</span><small>' + b[2] + '</small>' +
        (inf ? '<em class="sx-comp-add">+' + inf.ml[i] + ' mL</em>' : "") + '</div>';
    }).join("") + '</div>' +
      '<div class="sx-comp-brace"><span style="flex:28">intracellular ≈ 2/3</span><span style="flex:17">extracellular ≈ 1/3</span></div>';
    if (f.third) html += '<div class="sx-third"><strong>Third space</strong> (pleura, peritoneum, pericardium, CSF, joints, GI tract): fluid here is in the body but <em>not usable</em> for circulation.</div>';
    html += '</div>';
    if (inf) html += '<p class="sx-drugname">' + inf.name + '</p><p class="lh-caption">' + inf.note + '</p>';
    else html += '<p class="lh-caption">About 60% of adult body weight is water (slide 65). Volumes from slides 67, 68, 70.</p>';
    return html;
  }

  // ---- capillary: push vs pull ----------------------------------------------------
  function capillaryFigure(f) {
    var id = "sxk" + (uid += 1), leaky = !!f.leaky;
    var s = '<svg class="sx-cap" viewBox="0 0 360 236" role="img" aria-label="Capillary: hydrostatic push and oncotic pull">' + arrowDefs(id + "a");
    s += '<rect class="sx-interstitium" x="0" y="0" width="360" height="236"/>';
    s += '<text class="sx-lbl sx-gold sx-lbl-strong" x="12" y="18">PUSH out (hydrostatic)</text><text class="sx-lbl sx-blue sx-lbl-strong" x="348" y="18" text-anchor="end">PULL in (oncotic)</text>';
    s += '<ellipse class="sx-tcell" cx="150" cy="44" rx="20" ry="11"/><ellipse class="sx-tcell" cx="212" cy="44" rx="20" ry="11"/><text class="sx-lbl" x="180" y="74" text-anchor="middle">interstitial fluid</text>';
    s += '<path class="sx-capwall" d="M10,96 L350,96 M10,146 L350,146"' + (leaky ? ' stroke-dasharray="26 10"' : "") + '/>';
    s += '<rect class="sx-capblood" x="10" y="98" width="340" height="46"/>';
    s += '<text class="sx-lbl" x="16" y="125">arterial end →</text><text class="sx-lbl" x="344" y="125" text-anchor="end">→ venous end</text>';
    for (var p = 0; p < 7; p += 1) s += '<circle class="sx-protein" cx="' + (138 + p * 14) + '" cy="' + (112 + (p % 3) * 9) + '" r="3.2"/>';
    s += '<text class="sx-lbl sx-violet" x="180" y="164" text-anchor="middle">proteins stay in and pull water</text>';
    s += '<path class="sx-move" d="M60,94 L60,30" marker-end="url(#' + id + 'a)"/><path class="sx-move" d="M60,148 L60,184" marker-end="url(#' + id + 'a)"/>';
    s += '<path class="sx-move sx-move-blue" d="M300,30 L300,92" marker-end="url(#' + id + 'a)"/><path class="sx-move sx-move-blue" d="M300,184 L300,150" marker-end="url(#' + id + 'a)"/>';
    s += '<path class="sx-lymph" d="M200,206 Q240,190 290,206"/><text class="sx-lbl sx-green" x="350" y="228" text-anchor="end">lymph returns the extra</text>';
    if (leaky) {
      s += '<circle class="sx-protein" cx="120" cy="80" r="3.2"/><circle class="sx-protein" cx="240" cy="78" r="3.2"/><circle class="sx-protein" cx="130" cy="184" r="3.2"/>';
      s += '<text class="sx-lbl sx-bad sx-lbl-strong" x="10" y="212">leaky wall:</text><text class="sx-lbl sx-bad sx-lbl-strong" x="10" y="226">proteins escape</text>';
    }
    return s + '</svg>';
  }

  // ---- tonicity: three cells ---------------------------------------------------------
  function tonicityFigure(f) {
    var id = "sxt" + (uid += 1), hi = f.hi;
    var cells = [["iso", "Isotonic", "no change", 34, "0.9% NS, LR"], ["hypo", "Hypotonic", "water rushes in: cell swells", 46, "½NS, D5W"], ["hyper", "Hypertonic", "water pulled out: cell shrinks", 22, "3% saline (D5NS)"]];
    var s = '<svg class="sx-ton" viewBox="0 0 360 170" role="img" aria-label="Cells in isotonic, hypotonic and hypertonic fluid">' + arrowDefs(id + "a");
    cells.forEach(function (c, i) {
      var cx = 60 + i * 120, cy = 72, on = !hi || hi === c[0];
      s += '<g class="' + (on ? "" : "sx-dim") + (hi === c[0] ? " sx-hi" : "") + '">';
      s += '<circle class="sx-tcell-big" cx="' + cx + '" cy="' + cy + '" r="' + c[3] + '"/>';
      if (c[0] === "hypo") s += '<path class="sx-move sx-move-blue" d="M' + (cx - 58) + ',' + cy + ' L' + (cx - 48) + ',' + cy + '" marker-end="url(#' + id + 'a)"/><path class="sx-move sx-move-blue" d="M' + (cx + 58) + ',' + cy + ' L' + (cx + 48) + ',' + cy + '" marker-end="url(#' + id + 'a)"/>';
      if (c[0] === "hyper") s += '<path class="sx-move sx-move-blue" d="M' + (cx - 24) + ',' + cy + ' L' + (cx - 44) + ',' + cy + '" marker-end="url(#' + id + 'a)"/><path class="sx-move sx-move-blue" d="M' + (cx + 24) + ',' + cy + ' L' + (cx + 44) + ',' + cy + '" marker-end="url(#' + id + 'a)"/>';
      s += '<text class="sx-lbl sx-lbl-strong" x="' + cx + '" y="128" text-anchor="middle">' + c[1] + '</text><text class="sx-lbl" x="' + cx + '" y="142" text-anchor="middle">' + c[2].split(":")[0] + '</text>' +
        '<text class="sx-lbl sx-gold" x="' + cx + '" y="160" text-anchor="middle">' + c[4] + '</text></g>';
    });
    return s + '</svg>';
  }

  function figure(f) {
    switch (f.type) {
      case "circuit": return circuitFigure(f);
      case "equation": return equationFigure(f);
      case "ventricle": return ventricleFigure(f);
      case "starling": return starlingFigure(f);
      case "receptors": return receptorsFigure(f);
      case "pressors": return pressorsFigure();
      case "dopamine": return dopamineFigure(f);
      case "mapcalc": return mapFigure(f);
      case "phases": return phasesFigure(f);
      case "cycle": return cycleFigure(f);
      case "flow": return flowFigure(f);
      case "tiles": return tilesFigure(f);
      case "shocktable": return shockTable(f);
      case "iabp": return iabpFigure();
      case "targets": return targetsFigure(f);
      case "compartments": return compartmentsFigure(f);
      case "capillary": return capillaryFigure(f);
      case "tonicity": return tonicityFigure(f);
      default: return "";
    }
  }
  function bindFigures(content) {
    content.querySelectorAll("[data-sx-dopa]").forEach(bindDopamine);
    content.querySelectorAll("[data-sx-map]").forEach(bindMap);
  }

  var path = window.createLearnPath({
    data: data, viewId: "shock-learn-view", contentId: "shock-learn-content", backId: "shock-learn-back", statusId: "shock-learn-status",
    progressKey: "pasem2:shock-learn:progress", eyebrow: "Shock, Pressors & Fluids · from zero", heading: "Shock, pressors and fluids from zero",
    statusCopy: data.lessons.length + " short lessons. Start with lesson 1: the physiology comes first, then everything else makes sense.",
    figure: figure, bindFigures: bindFigures,
    beforeOpen: function () { document.querySelectorAll("[data-rhythm-tool]").forEach(function (other) { other.innerHTML = ""; }); }
  });
  if (!path) return;

  // The gold card at the top of the lecture page.
  window.PasemLectureIntros = window.PasemLectureIntros || {};
  window.PasemLectureIntros["shock-pressors-fluids"] = function (slot) {
    if (!slot) return;
    slot.innerHTML = '<button class="lh-start lh-start-lecture" id="shock-learn-launch" type="button">' +
      '<span class="lh-start-kicker">Learn it from zero</span><strong>Shock, pressors &amp; fluids, step by step</strong>' +
      '<span class="lh-start-copy">Start with the physiology (blood pressure, cardiac output, preload and afterload, the receptors), then the four shock types, how to pick a pressor, and how fluids move. Short lessons with moving pictures and a few easy checks.</span>' +
      '<span class="lh-start-status" id="shock-learn-status">' + esc(path.statusText()) + '</span></button>';
    slot.querySelector("#shock-learn-launch").addEventListener("click", function () { path.open(); });
  };
}());
