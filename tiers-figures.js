/* Extra figures for the Cardio 3 Tiers story pages . Registered into the shared Cardio 3
   figure kit (cardio3-learn.js): window.Cardio3Figures[type] = fn(f, kit), binders in window.Cardio3Binders.
   Loaded after cardio3-learn.js and before tiers.js.

   painmap {mode: "classic" | "women"}      torso with where ischemic pain sits and spreads (or women's symptoms)
   stresspick                               interactive: answer 4 questions, get the stress test (deck rules 1 to 4)
   muscle3 {hi: "stun"|"hib"|"mi"}          flow vs function over time for stunning, hibernation, infarction
   prevline {hi: "primary"|"secondary"}     the prevention timeline, primary vs secondary
   statinpick                               interactive: who gets lipid-lowering therapy (2026 deck rules)
   particles                                ApoB (one per particle) vs Lp(a) (LDL-like + apo(a))
   lipidpanel {hi: "ldl"|"tc"|"hdl"|"tg"}   the four lipid scales with their cutoffs
   drinks                                   one standard drink: beer, wine, liquor
   meter {label, value, pin, unit, max, bands: [[upTo, text, tone, outlined?]]}   a static colored scale with an optional pin
   ladder {steps: [[label, text, tone]], hi, note}   rising levels (CCS, NYHA, HF stages, EKG worry)
   vs {a: [title, tone, [lines]], b: [...], mid}     two cards side by side
   patient {icon, name, line, chips: [[label, value, tone]]}   a story patient card
   leads {hi: [leads], recip: [leads], label, note}  the 3x4 12-lead layout with a wall lit up
   timi {hi}                                         TIMI flow grades 0 to 3
   platelet {hi: asa|p2y12|gp}                       where each antiplatelet drug hits
   clot {hi: plug|mesh|lytic}                        antiplatelet vs anticoagulant vs fibrinolytic */
(function () {
  "use strict";
  var F = window.Cardio3Figures = window.Cardio3Figures || {};
  var B = window.Cardio3Binders = window.Cardio3Binders || [];
  function esc(v) { return String(v == null ? "" : v).replace(/[&<>'"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[c]; }); }
  var uid = 0;
  function seg(key, label, opts, on) {
    return '<div class="c3-decide-q"><span>' + label + '</span><div class="c3-seg" data-k="' + key + '">' + opts.map(function (o, i) {
      return '<button type="button" data-v="' + o[0] + '"' + (i === (on || 0) ? ' class="on"' : "") + '>' + o[1] + '</button>';
    }).join("") + '</div></div>';
  }
  function bindSegs(box, st, upd) {
    box.querySelectorAll(".c3-seg").forEach(function (sg) {
      sg.querySelectorAll("button").forEach(function (b) {
        b.addEventListener("click", function () {
          sg.querySelectorAll("button").forEach(function (x) { x.classList.toggle("on", x === b); });
          st[sg.dataset.k] = Number(b.dataset.v); upd();
        });
      });
    });
  }
  function verdict(box, title, text, tone) {
    var out = box.querySelector("[data-out]");
    out.className = "c3-verdict " + tone; out.querySelector("strong").textContent = title; out.querySelector("p").textContent = text;
  }

  /* ---------- painmap ---------- */
  F.painmap = function (f) {
    var id = "tpm" + (uid += 1), women = f.mode === "women";
    var s = '<svg class="c3-svg" viewBox="0 0 520 270" role="img" aria-label="' + (women ? "Ischemia symptoms in women" : "Where ischemic chest pain sits and spreads") + '">' +
      '<defs><radialGradient id="' + id + '"><stop offset="0" stop-color="#e46e6a" stop-opacity=".95"/><stop offset="1" stop-color="#e46e6a" stop-opacity="0"/></radialGradient>' +
      '<marker id="' + id + 'a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" class="sx-arrowhead"/></marker></defs>' +
      // body (patient faces us: their left is on our right)
      '<g transform="translate(60,0)"><g class="c3-body"><circle cx="200" cy="44" r="26"/>' +
      '<path d="M186,68 L214,68 L216,82 L262,92 Q284,98 290,122 L306,214 Q308,226 296,228 Q286,229 284,218 L270,140 L266,250 L134,250 L130,140 L116,218 Q114,229 104,228 Q92,226 94,214 L110,122 Q116,98 138,92 L184,82 Z"/></g>';
    if (!women) {
      s += '<ellipse cx="200" cy="128" rx="34" ry="30" fill="url(#' + id + ')"><animate attributeName="rx" values="26;38;26" dur="2.2s" repeatCount="indefinite"/><animate attributeName="ry" values="22;34;22" dur="2.2s" repeatCount="indefinite"/></ellipse>' +
        '<path class="sx-move" d="M222,112 Q246,96 262,100" marker-end="url(#' + id + 'a)"/>' +
        '<path class="sx-move" d="M268,108 Q286,150 292,196" marker-end="url(#' + id + 'a)"/>' +
        '<text class="sx-lbl sx-lbl-strong sx-bad" x="200" y="174" text-anchor="middle">substernal</text>' +
        '<text class="sx-lbl" x="200" y="188" text-anchor="middle">tight · dull · achy</text>' +
        '<text class="sx-lbl sx-gold" x="300" y="90">L shoulder</text>' +
        '<text class="sx-lbl sx-gold" x="306" y="168">down the</text><text class="sx-lbl sx-gold" x="306" y="181">L arm</text></g>' +
        '<text class="sx-lbl" x="14" y="120">NOT worse with:</text><text class="sx-lbl sx-green" x="14" y="135">· a deep breath</text><text class="sx-lbl sx-green" x="14" y="150">· pressing the sternum</text>' +
        '<text class="sx-lbl" x="14" y="182">lasts minutes</text><text class="sx-lbl" x="14" y="196">to hours</text>';
    } else {
      s += '<ellipse cx="200" cy="128" rx="16" ry="14" fill="url(#' + id + ')" opacity=".55"/>' +
        '<text class="sx-lbl sx-bad" x="200" y="174" text-anchor="middle">chest discomfort:</text><text class="sx-lbl sx-bad" x="200" y="188" text-anchor="middle">only 30%</text></g>';
      var sx = [["😴 unusual fatigue", 6, 70, 1], ["🛏️ sleep trouble", 6, 120, 0], ["😮‍💨 short of breath", 6, 170, 0], ["🍽️ indigestion", 372, 70, 0], ["😟 anxiety", 372, 120, 0]];
      sx.forEach(function (x, i) {
        s += '<text class="sx-lbl sx-lbl-strong' + (x[3] ? " sx-gold" : "") + '" x="' + x[1] + '" y="' + x[2] + '" opacity="0">' + x[0] +
          '<animate attributeName="opacity" values="0;1" dur=".5s" begin="' + (0.3 + i * 0.45) + 's" fill="freeze"/></text>';
      });
      s += '<text class="sx-lbl sx-gold" x="372" y="170">78% had one for</text><text class="sx-lbl sx-gold" x="372" y="184">&gt; 1 month before</text>';
    }
    return s + '</svg>';
  };

  /* ---------- stresspick ---------- */
  F.stresspick = function () {
    return '<div class="c3-decide" data-tr-stress>' +
      seg("acs", "Chest pain right now, or an MI / ACS going on?", [[0, "No"], [1, "Yes"]]) +
      seg("ex", "Can they exercise enough? (joints, deconditioning, obesity)", [[1, "Yes"], [0, "No"]]) +
      seg("ekg", "Resting EKG readable? (no LBBB, no ventricular pacing)", [[1, "Yes"], [0, "No"]]) +
      seg("vaso", "Hypotension, high-grade AV block, sick sinus or wheezing?", [[0, "No"], [1, "Yes"]]) +
      '<div class="c3-verdict" data-out><strong></strong><p></p></div><p class="lh-caption">Tap the answers. Rules 1 to 4 from the deck.</p></div>';
  };
  B.push(["[data-tr-stress]", function (box) {
    var st = { acs: 0, ex: 1, ekg: 1, vaso: 0 };
    function upd() {
      if (st.acs) return verdict(box, "No stress test", "Rule 1: acute MI or ongoing ischemia is a contraindication to stress testing of any type.", "bad");
      if (!st.ekg || !st.ex) {
        if (st.vaso) return verdict(box, "Dobutamine stress echo", (st.ex ? "The EKG can't be read, " : "They can't exercise, ") + "and vasodilators are off the table (rule 4), so raise demand with dobutamine instead.", "ok");
        return verdict(box, "Pharmacologic stress WITH imaging", (st.ex ? "Rule 3: a LBBB or paced rhythm hides ST changes, so use drug stress with imaging (regadenoson + MPI)." : "Rule 2: they can't exercise, so use a drug: regadenoson (most common) with MPI."), "pci");
      }
      return verdict(box, "Exercise treadmill stress test", "Rule 2: exercise is preferred when they can walk and the resting EKG is readable (Bruce protocol).", "cabg");
    }
    bindSegs(box, st, upd); upd();
  }]);

  /* ---------- muscle3 ---------- */
  F.muscle3 = function (f) {
    var panels = [
      ["stun", "Stunning", "brief ischemia", "M0,20 L30,20 L32,70 L52,70 L54,20 L150,20", "M0,24 L30,24 L34,74 L58,74 Q100,74 150,26", "recovers by itself", "sx-green"],
      ["hib", "Hibernation", "chronic low flow", "M0,20 L14,20 L16,58 L104,58 L106,20 L150,20", "M0,24 L14,24 L20,64 L104,64 Q120,64 150,28", "recovers after revasc", "sx-gold"],
      ["mi", "Infarction", "prolonged ischemia", "M0,20 L24,20 L26,80 L150,80", "M0,24 L24,24 L36,86 L150,86", "never recovers: dead", "sx-bad"]];
    var s = '<svg class="c3-svg" viewBox="0 0 520 190" role="img" aria-label="Stunning, hibernation and infarction: blood flow and muscle function over time">';
    panels.forEach(function (p, i) {
      var x = 14 + i * 170, on = !f.hi || f.hi === p[0];
      s += '<g class="' + (on ? "" : "c3-faded") + '" transform="translate(' + x + ',40)">' +
        '<text class="sx-lbl sx-lbl-strong ' + p[6] + '" x="75" y="-20" text-anchor="middle">' + p[1] + '</text>' +
        '<text class="sx-lbl" x="75" y="-6" text-anchor="middle">' + p[2] + '</text>' +
        '<line class="sx-axis" x1="0" y1="96" x2="150" y2="96"/>' +
        '<path d="' + p[3] + '" fill="none" stroke="#83b6e3" stroke-width="2.5"/>' +
        '<path d="' + p[4] + '" fill="none" stroke="var(--gold)" stroke-width="2.5" stroke-dasharray="5 3"/>' +
        (p[0] === "hib" ? '<text class="sx-lbl sx-green" x="105" y="12" text-anchor="middle">stent/CABG</text><line x1="105" y1="16" x2="105" y2="94" stroke="var(--green)" stroke-dasharray="2 2"/>' : "") +
        '<text class="sx-lbl" x="75" y="114" text-anchor="middle">time →</text>' +
        '<text class="sx-lbl ' + p[6] + '" x="75" y="132" text-anchor="middle">' + p[5] + '</text></g>';
    });
    return s + '<text class="sx-lbl sx-blue" x="150" y="184">━ blood flow</text><text class="sx-lbl sx-gold" x="270" y="184">┅ muscle function</text></svg>';
  };

  /* ---------- prevline ---------- */
  F.prevline = function (f) {
    var id = "tpl" + (uid += 1), hi = f.hi;
    var stops = [[40, "Healthy"], [140, "Risk factors"], [240, "Silent plaque"], [350, "First event"], [460, "After it"]];
    var s = '<svg class="c3-svg" viewBox="0 0 500 170" role="img" aria-label="Primary prevention before the first event, secondary prevention after"><defs><marker id="' + id + '" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" class="sx-arrowhead"/></marker></defs>' +
      '<line class="sx-axis" x1="20" y1="100" x2="486" y2="100" marker-end="url(#' + id + ')"/>';
    s += '<g class="' + (hi === "secondary" ? "c3-faded" : "") + '"><rect x="24" y="36" width="282" height="34" rx="9" fill="rgba(143,198,163,.14)" stroke="var(--green)"/>' +
      '<text class="sx-lbl sx-lbl-strong sx-green" x="165" y="52" text-anchor="middle">PRIMARY prevention</text><text class="sx-lbl" x="165" y="64" text-anchor="middle">keep CAD from starting</text></g>';
    s += '<g class="' + (hi === "primary" ? "c3-faded" : "") + '"><rect x="356" y="36" width="134" height="34" rx="9" fill="rgba(232,194,122,.14)" stroke="var(--gold)"/>' +
      '<text class="sx-lbl sx-lbl-strong sx-gold" x="423" y="52" text-anchor="middle">SECONDARY</text><text class="sx-lbl" x="423" y="64" text-anchor="middle">stop it coming back</text></g>';
    stops.forEach(function (p, i) {
      s += '<circle cx="' + p[0] + '" cy="100" r="' + (i === 3 ? 9 : 6) + '" fill="' + (i === 3 ? "var(--red)" : "#2b2420") + '" stroke="rgba(242,237,228,.5)"/>' +
        '<text class="sx-lbl' + (i === 3 ? " sx-bad sx-lbl-strong" : "") + '" x="' + p[0] + '" y="126" text-anchor="middle">' + p[1] + '</text>';
    });
    return s + '<text class="sx-lbl" x="350" y="146" text-anchor="middle">MI · stroke · stent · CABG</text></svg>';
  };

  /* ---------- statinpick ---------- */
  F.statinpick = function () {
    return '<div class="c3-decide" data-tr-statin>' +
      seg("ascvd", "Known ASCVD? (MI, ACS, angina, stent, CABG, stroke/TIA, PAD, aortic aneurysm)", [[0, "No"], [1, "Yes"]]) +
      seg("ldl", "LDL-C 190 or higher?", [[0, "No"], [1, "Yes"]]) +
      seg("grp", "Age 40 to 75 with diabetes, CKD stage 3-4 or HIV?", [[0, "No"], [1, "Yes"]]) +
      '<label class="c3-decide-q"><span>Otherwise: 10-year PREVENT-ASCVD risk <strong data-val></strong>%</span><input type="range" min="0" max="20" step="0.5" value="4" aria-label="PREVENT risk"></label>' +
      '<div class="c3-verdict" data-out><strong></strong><p></p></div><p class="lh-caption">Work down the questions: the first yes decides it.</p></div>';
  };
  B.push(["[data-tr-statin]", function (box) {
    var st = { ascvd: 0, ldl: 0, grp: 0 }, input = box.querySelector("input");
    function upd() {
      var r = Number(input.value);
      box.querySelector("[data-val]").textContent = r;
      box.querySelector("label").style.opacity = st.ascvd || st.ldl || st.grp ? ".35" : "1";
      if (st.ascvd) return verdict(box, "HIGH-intensity statin", "Secondary prevention: every patient with clinical ASCVD, whatever the lipid panel says.", "bad");
      if (st.ldl) return verdict(box, "Lipid-lowering therapy", "LDL-C ≥ 190 is severe hypercholesterolemia: treat without a calculator, and think about familial hypercholesterolemia.", "bad");
      if (st.grp) return verdict(box, "Lipid-lowering therapy", "Diabetes, CKD 3-4 or HIV at 40 to 75: treat regardless of the PREVENT number.", "bad");
      if (r >= 10) return verdict(box, "High (≥ 10%): recommended", "Lipid-lowering therapy is recommended.", "bad");
      if (r >= 5) return verdict(box, "Intermediate (5 to < 10%): should consider", "Lipid-lowering therapy should be considered after a talk with the patient. CAC can help if unsure.", "ok");
      if (r >= 3) return verdict(box, "Borderline (3 to < 5%): may consider", "May be considered after a talk; risk enhancers, hs-CRP or CAC can tip it.", "ok");
      return verdict(box, "Low (< 3%): lifestyle", "Lifestyle is central. Consider therapy only if LDL 160-189 or 30-year risk ≥ 10% (ages 30 to 59).", "cabg");
    }
    bindSegs(box, st, upd); input.addEventListener("input", upd); upd();
  }]);

  /* ---------- particles ---------- */
  F.particles = function () {
    var ps = [[70, 70, 34, "VLDL"], [170, 74, 27, "IDL"], [260, 76, 22, "LDL"], [370, 76, 22, "Lp(a)"]];
    var s = '<svg class="c3-svg" viewBox="0 0 470 190" role="img" aria-label="Every atherogenic particle carries one ApoB; Lp(a) is an LDL-like particle with apo(a) attached">';
    ps.forEach(function (p) {
      s += '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="' + p[2] + '" fill="rgba(217,180,92,.35)" stroke="#d9b45c" stroke-width="1.6"/>' +
        '<circle cx="' + (p[0] + p[2] * 0.7) + '" cy="' + (p[1] - p[2] * 0.7) + '" r="6" fill="#83b6e3"/>' +
        '<text class="sx-lbl sx-lbl-strong" x="' + p[0] + '" y="' + (p[1] + 4) + '" text-anchor="middle">' + p[3] + '</text>';
    });
    s += '<path d="M392,62 q12,-10 22,0 t22,0 t22,0" fill="none" stroke="var(--gold)" stroke-width="3" stroke-linecap="round"/>' +
      '<text class="sx-lbl sx-gold" x="426" y="44" text-anchor="middle">apo(a)</text>' +
      '<circle cx="34" cy="150" r="6" fill="#83b6e3"/><text class="sx-lbl" x="46" y="154">= one ApoB on every particle → ApoB counts the PARTICLE NUMBER</text>' +
      '<text class="sx-lbl sx-gold" x="34" y="176">Lp(a) = LDL-like particle + apo(a) tail → an INHERITED risk particle</text>';
    return s + '</svg>';
  };

  /* ---------- lipidpanel ---------- */
  var LIPIDS = [
    ["ldl", "LDL-C", [["< 100", "desirable", "good", 2], ["100-129", "", "mid", 1], ["130-159", "borderline", "ok", 1], ["160-189", "high", "bad", 1], ["≥ 190", "very high", "worst", 1]]],
    ["tc", "Total-C", [["< 200", "desirable", "good", 2], ["200-239", "borderline", "ok", 1.5], ["≥ 240", "high", "bad", 1.5]]],
    ["hdl", "HDL-C", [["< 40 ♂ / < 50 ♀", "low", "bad", 2], ["between", "", "mid", 1], ["≥ 60", "protective", "good", 2]]],
    ["tg", "Triglycerides", [["< 150", "desirable", "good", 2], ["150-199", "borderline", "ok", 1], ["200-499", "high", "bad", 1.5], ["≥ 500", "very high", "worst", 1]]]];
  F.lipidpanel = function (f) {
    return '<div class="tr-lipids">' + LIPIDS.map(function (l) {
      return '<div class="tr-lipid' + (f.hi && f.hi !== l[0] ? " c3-faded" : "") + '"><b>' + l[1] + '</b><div class="tr-lipid-band">' + l[2].map(function (z) {
        return '<span class="' + z[2] + '" style="flex:' + z[3] + '"><strong>' + z[0] + '</strong><small>' + z[1] + '</small></span>';
      }).join("") + '</div></div>';
    }).join("") + '<p class="lh-caption">mg/dL. Conventional classes, not treatment goals. LDL ≥ 190 is its own category: severe hypercholesterolemia.</p></div>';
  };

  /* ---------- drinks ---------- */
  F.drinks = function () {
    return '<svg class="c3-svg" viewBox="0 0 460 200" role="img" aria-label="One standard drink: 12 oz beer, 5 oz wine or 1.5 oz liquor">' +
      // beer bottle
      '<path d="M66,30 L82,30 L82,60 Q96,70 96,88 L96,160 Q96,168 88,168 L60,168 Q52,168 52,160 L52,88 Q52,70 66,60 Z" fill="rgba(217,180,92,.3)" stroke="#d9b45c" stroke-width="1.6"/>' +
      '<rect x="56" y="104" width="36" height="26" rx="3" fill="#2b2420"/>' +
      // wine glass
      '<path d="M196,40 L264,40 Q266,92 230,104 Q194,92 196,40 Z" fill="none" stroke="rgba(242,237,228,.6)" stroke-width="1.6"/><path d="M200,66 L260,66 Q256,94 230,100 Q204,94 200,66 Z" fill="rgba(142,43,43,.75)"/>' +
      '<line x1="230" y1="104" x2="230" y2="156" stroke="rgba(242,237,228,.6)" stroke-width="2"/><line x1="208" y1="160" x2="252" y2="160" stroke="rgba(242,237,228,.6)" stroke-width="2.5"/>' +
      // shot glass
      '<path d="M362,110 L398,110 L394,162 L366,162 Z" fill="none" stroke="rgba(242,237,228,.6)" stroke-width="1.6"/><path d="M364,126 L396,126 L394,160 L366,160 Z" fill="rgba(217,180,92,.55)"/>' +
      '<text class="sx-lbl sx-lbl-strong" x="74" y="188" text-anchor="middle">12 oz beer (4-5%)</text>' +
      '<text class="sx-lbl sx-lbl-strong" x="230" y="188" text-anchor="middle">5 oz wine</text>' +
      '<text class="sx-lbl sx-lbl-strong" x="380" y="188" text-anchor="middle">1.5 oz liquor</text>' +
      '<text class="sx-lbl sx-gold" x="152" y="110" text-anchor="middle">=</text><text class="sx-lbl sx-gold" x="310" y="110" text-anchor="middle">=</text>' +
      '<text class="sx-lbl sx-gold" x="230" y="20" text-anchor="middle">each = ONE drink</text></svg>';
  };

  /* ---------- meter ---------- */
  F.meter = function (f) {
    var max = f.max, prev = 0, ticks = [], has = f.value != null;
    var pos = has ? Math.max(0, Math.min(100, f.value / max * 100)) : 0;
    var band = f.bands.map(function (b) {
      var end = Math.min(b[0], max), w = (end - prev) / max * 100; prev = end;
      if (end < max) ticks.push('<span style="left:' + (end / max * 100) + '%">' + end + '</span>');
      return '<span class="' + b[2] + (b[3] ? " hi" : "") + '" style="width:' + w + '%">' + b[1] + '</span>';
    }).join("");
    return '<div class="tr-meter">' +
      (has ? '<div class="tr-meter-pin"><b style="left:' + pos + '%">' + (f.pin || f.value) + '</b></div>' : "") +
      '<div class="tr-meter-band">' + band + '</div>' +
      '<div class="tr-meter-ticks">' + ticks.join("") + (f.unit ? '<em>' + f.unit + '</em>' : "") + '</div>' +
      (f.label ? '<p class="tr-meter-lbl">' + f.label + '</p>' : "") + '</div>';
  };
  /* ---------- ladder: rising levels (CCS class, NYHA, HF stages, how worrying an EKG finding is) ---------- */
  // ladder {steps: [[label, text, tone good|ok|bad|worst|mid]], hi: index, note}
  F.ladder = function (f) {
    return '<div class="tr-ladder">' + f.steps.map(function (st, i) {
      return '<div class="tr-rung ' + (st[2] || "mid") + (f.hi === i ? " on" : "") + (f.hi != null && f.hi !== i ? " dim" : "") + '" style="margin-left:' + (i * 4) + '%">' +
        '<b>' + st[0] + '</b><span>' + st[1] + '</span></div>';
    }).join("") + (f.note ? '<p class="tr-fig-note">' + f.note + '</p>' : "") + '</div>';
  };

  /* ---------- vs: two side-by-side cards ---------- */
  // vs {a: [title, tone, [lines]], b: [...], mid: "vs"}
  F.vs = function (f) {
    function card(c) { return '<div class="tr-vs-card ' + (c[1] || "mid") + '"><b>' + c[0] + '</b><ul>' + c[2].map(function (x) { return "<li>" + x + "</li>"; }).join("") + '</ul></div>'; }
    return '<div class="tr-vs">' + card(f.a) + '<span class="tr-vs-mid">' + (f.mid || "vs") + '</span>' + card(f.b) + '</div>';
  };

  /* ---------- patient: a story card ---------- */
  // patient {icon, name, line, chips: [[label, value, tone]]}
  F.patient = function (f) {
    return '<div class="tr-patient"><div class="tr-pt-head"><span class="tr-pt-icon">' + (f.icon || "🧑") + '</span><div><b>' + f.name + '</b><span>' + (f.line || "") + '</span></div></div>' +
      (f.chips ? '<div class="tr-pt-chips">' + f.chips.map(function (c) { return '<span class="' + (c[2] || "") + '"><small>' + c[0] + '</small>' + c[1] + '</span>'; }).join("") + '</div>' : "") + '</div>';
  };

  /* ---------- leads: the standard 3x4 12-lead layout with a wall lit up ---------- */
  // leads {hi: [lead names], recip: [lead names], label, note}
  var LAYOUT = [["I", "aVR", "V1", "V4"], ["II", "aVL", "V2", "V5"], ["III", "aVF", "V3", "V6"]];
  F.leads = function (f) {
    var hi = f.hi || [], rc = f.recip || [];
    return '<div class="tr-leads"><div class="tr-leads-grid">' + LAYOUT.map(function (row) {
      return row.map(function (l) { return '<span class="' + (hi.indexOf(l) >= 0 ? "on" : rc.indexOf(l) >= 0 ? "recip" : "") + '">' + l + '</span>'; }).join("");
    }).join("") + '</div><p class="tr-fig-note">' + (f.label ? '<b class="tr-lead-on">■</b> ' + f.label : "") + (rc.length ? ' &nbsp; <b class="tr-lead-rc">■</b> reciprocal (ST ↓)' : "") + (f.note ? "<br>" + f.note : "") + '</p></div>';
  };

  /* ---------- timi: the four flow grades ---------- */
  F.timi = function (f) {
    var g = [["0", "No flow", 0, "complete occlusion"], ["1", "Penetration, no perfusion", 0.18, "dye barely gets past"], ["2", "Partial perfusion", 0.6, "fills, but slowly"], ["3", "Normal perfusion", 1, "the goal after PCI"]];
    var s = '<svg class="c3-svg" viewBox="0 0 490 210" role="img" aria-label="TIMI flow grades 0 to 3">';
    g.forEach(function (x, i) {
      var y = 14 + i * 48, on = f.hi == null || f.hi === i, w = 210 * x[2];
      s += '<g class="' + (on ? "" : "c3-faded") + '"><text class="sx-lbl sx-lbl-strong ' + (i === 3 ? "sx-green" : i === 0 ? "sx-bad" : "sx-gold") + '" x="8" y="' + (y + 22) + '">TIMI ' + x[0] + '</text>' +
        '<rect x="66" y="' + (y + 6) + '" width="220" height="24" rx="12" fill="rgba(220,142,137,.08)" stroke="rgba(220,142,137,.5)"/>' +
        (i < 3 ? '<rect x="96" y="' + (y + 6) + '" width="10" height="24" fill="#d9b45c" fill-opacity=".8"/>' : "") +
        (w ? '<rect x="71" y="' + (y + 11) + '" width="' + w + '" height="14" rx="7" fill="#c25050" fill-opacity="' + (i === 2 ? ".55" : ".85") + '"/>' : '<rect x="71" y="' + (y + 11) + '" width="22" height="14" rx="7" fill="#c25050" fill-opacity=".85"/>') +
        '<text class="sx-lbl sx-lbl-strong" x="296" y="' + (y + 16) + '">' + x[1] + '</text><text class="sx-lbl" x="296" y="' + (y + 30) + '">' + x[3] + '</text></g>';
    });
    return s + '</svg>';
  };

  /* ---------- platelet: where each antiplatelet drug hits ---------- */
  // platelet {hi: "asa"|"p2y12"|"gp"}
  F.platelet = function (f) {
    function on(k) { return !f.hi || f.hi === k ? "" : "c3-faded"; }
    var s = '<svg class="c3-svg" viewBox="0 0 460 260" role="img" aria-label="Platelet with the targets of antiplatelet drugs">' +
      '<ellipse cx="230" cy="140" rx="120" ry="64" fill="rgba(182,165,224,.16)" stroke="var(--violet)" stroke-width="2"/>' +
      '<text class="sx-lbl sx-lbl-strong" x="230" y="136" text-anchor="middle">PLATELET</text><text class="sx-lbl" x="230" y="152" text-anchor="middle">activates → sticks → clumps</text>';
    s += '<g class="' + on("asa") + '"><circle cx="140" cy="96" r="9" fill="var(--gold)"/><line x1="134" y1="88" x2="80" y2="56" stroke="var(--gold)" stroke-dasharray="3 3"/>' +
      '<text class="sx-lbl sx-lbl-strong sx-gold" x="10" y="24">COX-1 → TXA₂</text><text class="sx-lbl" x="10" y="40">aspirin</text></g>';
    s += '<g class="' + on("p2y12") + '"><circle cx="320" cy="96" r="9" fill="var(--gold)"/><line x1="326" y1="88" x2="380" y2="56" stroke="var(--gold)" stroke-dasharray="3 3"/>' +
      '<text class="sx-lbl sx-lbl-strong sx-gold" x="450" y="24" text-anchor="end">P2Y12 (ADP receptor)</text><text class="sx-lbl" x="450" y="40" text-anchor="end">clopidogrel · prasugrel · ticagrelor</text></g>';
    s += '<g class="' + on("gp") + '"><circle cx="230" cy="204" r="9" fill="var(--gold)"/>' +
      '<text class="sx-lbl sx-lbl-strong sx-gold" x="230" y="234" text-anchor="middle">GP IIb/IIIa (final clumping step)</text><text class="sx-lbl" x="230" y="250" text-anchor="middle">eptifibatide · tirofiban (IV, standard teaching)</text></g>';
    return s + '</svg>';
  };

  /* ---------- clot: plug vs mesh vs lytic ---------- */
  // clot {hi: "plug"|"mesh"|"lytic"}
  F.clot = function (f) {
    var c = [["plug", "PLATELET PLUG", "antiplatelets", "aspirin · P2Y12"], ["mesh", "FIBRIN MESH", "anticoagulants", "heparin · LMWH"], ["lytic", "DISSOLVE IT", "fibrinolytics", "alteplase · TNK"]];
    var s = '<svg class="c3-svg" viewBox="0 0 480 190" role="img" aria-label="Platelet plug, fibrin mesh and fibrinolysis">';
    c.forEach(function (x, i) {
      var ox = 10 + i * 158, on = !f.hi || f.hi === x[0];
      s += '<g class="' + (on ? "" : "c3-faded") + '" transform="translate(' + ox + ',10)"><rect x="0" y="0" width="146" height="100" rx="12" fill="rgba(220,142,137,.07)" stroke="rgba(220,142,137,.4)"/>';
      if (x[0] !== "lytic") for (var k = 0; k < 9; k += 1) s += '<circle cx="' + (34 + (k % 3) * 38) + '" cy="' + (26 + Math.floor(k / 3) * 24) + '" r="9" fill="var(--violet)" fill-opacity=".7"/>';
      if (x[0] === "mesh" || x[0] === "lytic") for (var m = 0; m < 5; m += 1) s += '<line x1="' + (10 + m * 30) + '" y1="8" x2="' + (40 + m * 22) + '" y2="94" stroke="#c25050" stroke-width="2"' + (x[0] === "lytic" ? ' stroke-dasharray="4 6" opacity=".6"' : "") + '/>';
      if (x[0] === "lytic") s += '<text class="sx-lbl sx-green sx-lbl-strong" x="73" y="56" text-anchor="middle">mesh cut apart</text>';
      s += '<text class="sx-lbl sx-lbl-strong sx-gold" x="73" y="126" text-anchor="middle">' + x[1] + '</text><text class="sx-lbl sx-lbl-strong" x="73" y="144" text-anchor="middle">' + x[2] + '</text><text class="sx-lbl" x="73" y="160" text-anchor="middle">' + x[3] + '</text></g>';
    });
    return s + '</svg>';
  };

})();
