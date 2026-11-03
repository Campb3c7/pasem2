/* Wireman, Introduction to Clinical Heart Sounds (68 slides). Anna asked (2026-11-03) for EVERY testable detail,
   not one section per objective, so the written part of the listening exam is answerable from word clues alone.
   Sections follow the deck (spots, S1/S2, split S2, gallops, clicks and snaps, murmur framework, specific murmurs,
   the others) and end with three cross-cutting review sections (maneuvers, vignette word clues, class recordings).
   Details read from slide pictures are marked "(slide picture)": Osmosis auscultation map (slide 8), S4 cartoon (22),
   ejection-click cartoon (26), "time these murmurs" diagrams (36-43), S1/S2 intensity labels on the AS, MR, TR and MS
   diagrams (53, 55, 57, 60), PS severity strip (54), venous hum / Still's chest map (64), rub components (65).
   Standard landmarks not printed in the deck (Erb's point 3rd left ICS, mitral area 5th ICS midclavicular line) are
   labeled as standard H&P landmarks. */
(function () {
  "use strict";

  function q(prompt, answer, wrong, explanation) {
    return { prompt: prompt, choices: [answer].concat(wrong), correct: 0, explanation: explanation };
  }
  function C(title, html, coverage, test, apply) {
    return { title: title, html: html, coverage: coverage, test: test, apply: apply };
  }
  function S(id, title, description, units) {
    var r = { id: id, title: title, description: description, cards: [], test: [], apply: [] };
    units.forEach(function (u, i) {
      r.cards.push({ title: u.title, html: u.html, coverage: u.coverage });
      ["test", "apply"].forEach(function (m) {
        u[m].forEach(function (x) { x.card = i; r[m].push(x); });
      });
    });
    return r;
  }
  function hy(x) { return '<div class="box-hy"><span class="lbl">High yield</span>' + x + "</div>"; }
  function mn(x) { return '<div class="box-mnemonic"><span class="lbl">Mnemonic</span>' + x + "</div>"; }
  function tbl(head, rows) {
    return '<table class="learn-table"><tr>' + head.map(function (h) { return "<th>" + h + "</th>"; }).join("") + "</tr>" +
      rows.map(function (r) { return "<tr>" + r.map(function (d) { return "<td>" + d + "</td>"; }).join("") + "</tr>"; }).join("") + "</table>";
  }

  // Timing diagram (same drawing and CSS classes as the Heart Sounds listening tool).
  // spec: { m: [{ phase: "sys"|"dia"|"cont", shape: "plateau"|"cresc"|"decresc"|"diamond"|"rumble", from, to }],
  //         s2: "split"|"wide", x: ["S3","S4","EC","MSC","OS"] }
  var X_S1 = 34, X_S2 = 170, X_S1B = 306, BASE = 86;
  function bar(x, h, cls) { return '<rect class="' + cls + '" x="' + (x - 3) + '" y="' + (BASE - h) + '" width="6" height="' + h + '" rx="1.5"/>'; }
  function lab(x, t, cls) { return '<text class="' + (cls || "hs-dg-label") + '" x="' + x + '" y="' + (BASE + 15) + '" text-anchor="middle">' + t + "</text>"; }
  function murmur(m) {
    if (m.phase === "cont") {
      return '<path class="hs-dg-murmur" d="M' + (X_S1 + 10) + " " + BASE + " L" + X_S2 + " " + (BASE - 34) + " L" + (X_S1B - 10) + " " + (BASE - 4) + " L" + (X_S1B - 10) + " " + BASE + ' Z"/>';
    }
    var left = m.phase === "sys" ? X_S1 + 8 : X_S2 + 8, right = m.phase === "sys" ? X_S2 - 8 : X_S1B - 8;
    var a = left + (right - left) * m.from, b = left + (right - left) * m.to, mid = (a + b) / 2, top = BASE - 30, low = BASE - 4, p;
    if (m.shape === "plateau") p = [[a, top + 6], [b, top + 6]];
    else if (m.shape === "cresc") p = [[a, low], [b, top]];
    else if (m.shape === "decresc") p = [[a, top], [b, low]];
    else if (m.shape === "diamond") p = [[a, low], [mid, top], [b, low]];
    else { p = []; for (var k = 0; k <= 10; k += 1) p.push([a + (b - a) * k / 10, BASE - (k % 2 ? 10 : 17)]); }
    return '<path class="hs-dg-murmur" d="M' + a + " " + BASE + p.map(function (pt) { return " L" + pt[0].toFixed(1) + " " + pt[1]; }).join("") + " L" + b + " " + BASE + ' Z"/>';
  }
  function dg(spec, caption) {
    spec = spec || {};
    var s = '<svg class="hs-diagram" viewBox="0 0 340 108" role="img" aria-label="Timing diagram">';
    s += '<line class="hs-dg-base" x1="12" y1="' + BASE + '" x2="328" y2="' + BASE + '"/>';
    s += '<text class="hs-dg-phase" x="' + ((X_S1 + X_S2) / 2) + '" y="14" text-anchor="middle">systole</text><text class="hs-dg-phase" x="' + ((X_S2 + X_S1B) / 2) + '" y="14" text-anchor="middle">diastole</text>';
    (spec.m || []).forEach(function (m) { s += murmur(m); });
    [X_S1, X_S1B].forEach(function (x) { s += bar(x, 46, "hs-dg-sound") + lab(x, "S1"); });
    if (spec.s2 === "split") s += bar(X_S2 - 5, 40, "hs-dg-sound") + bar(X_S2 + 5, 34, "hs-dg-sound");
    else if (spec.s2 === "wide") s += bar(X_S2 - 8, 40, "hs-dg-sound") + bar(X_S2 + 8, 34, "hs-dg-sound");
    else s += bar(X_S2, 40, "hs-dg-sound");
    s += lab(X_S2, "S2");
    var spots = { S3: X_S2 + 42, S4: X_S1B - 30, EC: X_S1 + 18, MSC: X_S1 + 66, OS: X_S2 + 22 };
    var names = { S3: "S3", S4: "S4", EC: "SEC", MSC: "MSC", OS: "OS" };
    (spec.x || []).forEach(function (k) { s += bar(spots[k], k === "S3" || k === "S4" ? 22 : 30, "hs-dg-extra") + lab(spots[k], names[k], "hs-dg-label hs-dg-extra-label"); });
    s += "</svg>";
    return caption ? '<figure style="margin:0">' + s + '<figcaption class="hs-muted">' + caption + "</figcaption></figure>" : s;
  }

  window.HEART_SOUNDS_LECTURE_OBJECTIVES = [
    /* ---------- 1 ---------- */
    S("01-where-to-listen", "1. Where to listen: APE To Man and A PET M", "Slides 2–8: how to practice, the five listening spots, and which murmurs live at each spot.", [
      C("How to practice (slide 5)",
        "<p>The lecture opens with a clinic scene: a <strong>45-year-old with shortness of breath</strong>. What you hear tells you whether they go to cardiology <strong>today</strong> or not. The stethoscope is <em>more than “old-fashioned.”</em></p>" +
        "<p><strong>Tips for success</strong></p><ul><li><strong>Use headphones</strong> (the exam is also a headphones exam)</li>" +
        "<li><strong>Repetition matters</strong>: pause and replay often; listen <strong>briefly but frequently</strong></li>" +
        "<li><strong>Start with normal sounds</strong></li>" +
        "<li>Listen on yourself and others: a <strong>relaxed (slow) heart rate is easier</strong>; move to <strong>faster heart rates</strong> as you gain confidence</li></ul>" +
        "<p><strong>Lecture outline:</strong> 01 Introduction · 02 Normal heart sounds · 03 Extra heart sounds (gallops, clicks, snaps) · 04 Murmur framework · 05 Specific murmurs · 06 Other sounds.</p>",
        ["tips", "outline"],
        [q("Which heart rate does the lecture say is easiest to start listening to?", "A relaxed, slow heart rate", ["A fast heart rate, so you hear more beats", "A heart rate during exercise", "Any rate; it makes no difference"], "Start on a relaxed heart rate, then work up to faster rates as you gain confidence."),
          q("Which sounds does the lecture say to start practicing with?", "Normal heart sounds", ["Diastolic murmurs", "Continuous murmurs", "Pericardial rubs"], "Tip for success: start with normal sounds."),
          q("What listening habit does the lecture recommend?", "Listen briefly but frequently, pausing and replaying often", ["One long session the night before", "Listen only with the speaker on", "Listen once and move on"], "Repetition matters: pause and replay often; listen briefly but frequently."),
          q("What equipment tip does the lecture give for studying heart sounds?", "Use headphones", ["Use laptop speakers", "Use a single earbud", "Turn the volume to maximum"], "Use headphones; the exam itself is taken with headphones.")],
        [q("You are studying for the heart sounds exam and get every fast-rate clip wrong. Following the lecture's advice, what should you do?", "Go back to relaxed, slower heart rates first and build up to faster ones", ["Only practice fast clips until they make sense", "Skip normal sounds and go straight to murmurs", "Listen to each clip once without replaying"], "Relaxed rates are easier; add faster rates as experience and confidence grow."),
          q("A classmate says the stethoscope is outdated now that echo exists. Which point from the lecture's opening fits best?", "What you hear can decide whether a short-of-breath patient goes to cardiology today", ["Auscultation is only for billing", "Echo cannot detect valve disease", "Auscultation replaces the EKG"], "Slide 4: a 45-year-old with dyspnea; what you hear tells you if they need cardiology today.")]),
      C("APE To Man: the five spots (slide 7)",
        "<p>Each valve is <strong>best heard</strong> at a certain spot on the chest. That spot is where the sound carries, not where the valve sits. Order top to bottom:</p>" +
        tbl(["Letter", "Area", "Where"], [
          ["<strong>A</strong>", "Aortic area", "<strong>Right 2nd ICS</strong>, right upper sternal border (RUSB)"],
          ["<strong>P</strong>", "Pulmonic area", "<strong>Left 2nd ICS</strong>, left upper sternal border (LUSB)"],
          ["<strong>E</strong>", "Erb’s point", "Left 3rd ICS at the sternal border (standard landmark)"],
          ["<strong>T</strong>", "Tricuspid area", "<strong>Left lower sternal border</strong> (LLSB), about the 4th ICS"],
          ["<strong>M</strong>", "Mitral area", "<strong>Apex</strong> (5th ICS, midclavicular line: standard landmark)"]]) +
        mn("<strong>APE To Man</strong>: Aortic, Pulmonic, Erb’s, Tricuspid, Mitral. Numbered 1 to 5 on the slide picture, right upper chest down to the apex.") +
        hy("Only <strong>A</strong> is on the <strong>right</strong>. Everything else is on the left side of the sternum, and M is out at the apex."),
        ["ape-to-man", "best-heard-vs-location"],
        [q("In APE To Man, what does the E stand for?", "Erb's point", ["Epigastrium", "Ejection area", "Endocardial point"], "A = aortic, P = pulmonic, E = Erb's point, T = tricuspid, M = mitral."),
          q("Which listening area is on the RIGHT side of the sternum?", "Aortic area", ["Pulmonic area", "Erb's point", "Tricuspid area"], "The aortic area is the right 2nd ICS (RUSB); the rest are on the left."),
          q("Where is the pulmonic area?", "Left 2nd intercostal space at the sternal border", ["Right 2nd intercostal space", "Left lower sternal border", "Apex"], "P = left 2nd ICS (LUSB)."),
          q("Where is the tricuspid area?", "Left lower sternal border", ["Right lower sternal border", "Left 2nd ICS", "Left axilla"], "T = LLSB."),
          q("Where is the mitral area?", "The apex", ["Left 2nd ICS", "Right 2nd ICS", "Left lower sternal border"], "M = apex (5th ICS, midclavicular line)."),
          q("The auscultation areas mark where each valve is:", "Best heard", ["Anatomically located", "Biopsied", "Seen on chest x-ray"], "A valve is best discerned at certain points on the chest; that is not the same as where the valve physically sits.")],
        [q("You place your stethoscope at the right 2nd intercostal space. Which valve area are you listening to?", "Aortic", ["Pulmonic", "Tricuspid", "Mitral"], "Right 2nd ICS = aortic area, the A of APE To Man."),
          q("A murmur is loudest at the left lower sternal border. Which valve area is that?", "Tricuspid", ["Mitral", "Aortic", "Pulmonic"], "LLSB = tricuspid area (T)."),
          q("A murmur is loudest at the apex in the 5th ICS, midclavicular line. Which valve area is that?", "Mitral", ["Tricuspid", "Erb's point", "Aortic"], "Apex = mitral area (M).")]),
      C("A PET M: which murmurs live where (slide 8, Osmosis map)",
        "<p>The second auscultation slide reorders the letters <strong>A P E T M</strong> and lists the murmurs heard best at each spot (slide picture):</p>" +
        tbl(["Area", "Murmurs heard best there"], [
          ["<strong>Aortic area</strong>", "<strong>Systolic</strong>: aortic stenosis, flow murmur (e.g., physiologic murmur), aortic valve sclerosis"],
          ["<strong>Pulmonic area</strong>", "<strong>Systolic ejection</strong>: pulmonic stenosis, atrial septal defect, flow murmur"],
          ["<strong>Erb’s point</strong>", "<strong>Diastolic</strong>: aortic regurgitation (valvular), pulmonic regurgitation · <strong>Systolic</strong>: hypertrophic cardiomyopathy"],
          ["<strong>Tricuspid area</strong>", "<strong>Holosystolic</strong>: tricuspid regurgitation, ventricular septal defect · <strong>Diastolic</strong>: tricuspid stenosis"],
          ["<strong>Mitral area</strong>", "<strong>Holosystolic</strong>: mitral regurgitation · <strong>Systolic</strong>: mitral valve prolapse · <strong>Diastolic</strong>: mitral stenosis"]]) +
        hy("Location alone narrows the answer: <strong>Erb’s point diastolic</strong> = AR or PR; <strong>LLSB holosystolic</strong> = TR or VSD; <strong>apex</strong> = mitral (MR, MVP, MS)."),
        ["apetm-map", "erb-point-murmurs", "pulmonic-area-murmurs"],
        [q("On the Osmosis map, which diastolic murmurs are heard best at Erb's point?", "Aortic regurgitation and pulmonic regurgitation", ["Mitral stenosis and tricuspid stenosis", "Aortic stenosis and pulmonic stenosis", "Mitral regurgitation and tricuspid regurgitation"], "Erb's point: diastolic AR (valvular) and PR; systolic HCM."),
          q("Which systolic murmur does the Osmosis map place at Erb's point?", "Hypertrophic cardiomyopathy", ["Mitral valve prolapse", "Aortic stenosis", "Tricuspid regurgitation"], "Erb's point systolic murmur: hypertrophic cardiomyopathy."),
          q("Which two holosystolic murmurs are heard best at the tricuspid area?", "Tricuspid regurgitation and ventricular septal defect", ["Mitral regurgitation and MVP", "Aortic stenosis and pulmonic stenosis", "PDA and venous hum"], "Tricuspid area: holosystolic TR and VSD; diastolic TS."),
          q("Which diastolic murmur is heard at the tricuspid area?", "Tricuspid stenosis", ["Aortic regurgitation", "Mitral stenosis", "Pulmonic regurgitation"], "Tricuspid area diastolic murmur = tricuspid stenosis."),
          q("Which three murmurs are heard best at the mitral area?", "Mitral regurgitation, mitral valve prolapse, mitral stenosis", ["Aortic stenosis, aortic sclerosis, flow murmur", "TR, VSD, TS", "AR, PR, HCM"], "Mitral area: holosystolic MR, systolic MVP, diastolic MS."),
          q("Besides pulmonic stenosis, which defect does the Osmosis map list at the pulmonic area?", "Atrial septal defect", ["Ventricular septal defect", "Patent ductus arteriosus", "Coarctation"], "Pulmonic area systolic ejection murmurs: PS, ASD, flow murmur."),
          q("Which murmurs does the Osmosis map list at the aortic area besides aortic stenosis?", "Flow (physiologic) murmur and aortic valve sclerosis", ["Aortic regurgitation and HCM", "MR and MVP", "PDA and VSD"], "Aortic area systolic murmurs: AS, flow murmur, aortic valve sclerosis.")],
        [q("A diastolic murmur is loudest at the left 3rd intercostal space at the sternal border. Which pair should you be thinking about?", "Aortic or pulmonic regurgitation", ["Mitral or tricuspid stenosis", "Aortic or pulmonic stenosis", "Mitral regurgitation or MVP"], "Left 3rd ICS = Erb's point; diastolic murmurs there are AR and PR."),
          q("A holosystolic murmur is loudest at the left lower sternal border, not the apex. Which pair fits?", "Tricuspid regurgitation or VSD", ["Mitral regurgitation or MVP", "Aortic stenosis or sclerosis", "AR or PR"], "Holosystolic at the tricuspid area = TR or VSD."),
          q("A diastolic murmur is loudest at the apex. Using the map, what is it?", "Mitral stenosis", ["Aortic regurgitation", "Tricuspid stenosis", "Pulmonic regurgitation"], "The only diastolic murmur listed at the mitral area is MS.")])
    ]),

    /* ---------- 2 ---------- */
    S("02-s1-s2", "2. Normal sounds: S1 and S2", "Slides 9–15 and 18: what S1 and S2 are, LAV MaT and D SLAP, and where systole and diastole fall.", [
      C("S1 = LUB = AV valves close (LAV MaT)",
        "<p><strong>S1</strong> is the sound of the <strong>atrioventricular “doors” closing</strong>: the <strong>mitral and tricuspid</strong> valves.</p>" +
        "<p>Osmosis picture: once the ventricles <strong>fill from the atria</strong>, the AV valves <strong>snap shut</strong>, producing S1.</p>" +
        "<ul><li>Sounds like <strong>“LUB”</strong></li><li><strong>Starts systole</strong></li></ul>" +
        mn("<strong>LAV MaT</strong>: <strong>L</strong>ub = <strong>A</strong>trio<strong>V</strong>entricular = <strong>M</strong>itral <strong>a</strong>nd <strong>T</strong>ricuspid."),
        ["s1-definition", "lav-mat", "s1-starts-systole"],
        [q("S1 is produced by closure of which valves?", "Mitral and tricuspid", ["Aortic and pulmonic", "Mitral and aortic", "Tricuspid and pulmonic"], "S1 = AV valves = mitral and tricuspid (LAV MaT)."),
          q("What does the mnemonic LAV MaT stand for?", "Lub = AtrioVentricular = Mitral and Tricuspid", ["Left Atrium Ventricle, Mitral and Tricuspid", "Late Aortic Valve, Mitral and Tricuspid", "Lub = Aortic Valve = Mitral and Tricuspid"], "LAV MaT: Lub = AtrioVentricular = Mitral And Tricuspid."),
          q("S1 marks the start of which phase?", "Systole", ["Diastole", "Atrial systole", "Isovolumetric relaxation"], "S1 starts systole."),
          q("Which syllable is S1?", "Lub", ["Dub", "Ta", "Snap"], "S1 = lub, S2 = dub.")],
        [q("You hear lub-dub at the apex. The 'lub' is the sound of what event?", "The mitral and tricuspid valves closing as systole begins", ["The aortic and pulmonic valves closing", "Blood rushing into the ventricles", "The atria contracting"], "Lub = S1 = AV valves closing; it starts systole.")]),
      C("S2 = DUB = semilunar valves close (D SLAP)",
        "<p><strong>S2</strong> is the sound of the <strong>semilunar “doors” closing</strong>: the <strong>aortic and pulmonic</strong> valves.</p>" +
        "<p>Osmosis picture: once the ventricles <strong>finish squeezing blood into the aorta and pulmonary artery</strong>, the semilunar valves shut, producing S2.</p>" +
        "<ul><li>Sounds like <strong>“DUB”</strong></li><li><strong>Starts diastole</strong></li></ul>" +
        mn("<strong>D SLAP</strong>: <strong>D</strong>ub = <strong>S</strong>emi<strong>L</strong>unar = <strong>A</strong>ortic and <strong>P</strong>ulmonic."),
        ["s2-definition", "d-slap", "s2-starts-diastole"],
        [q("S2 is produced by closure of which valves?", "Aortic and pulmonic", ["Mitral and tricuspid", "Mitral and aortic", "Tricuspid and pulmonic"], "S2 = semilunar valves = aortic and pulmonic (D SLAP)."),
          q("What does D SLAP stand for?", "Dub = SemiLunar = Aortic and Pulmonic", ["Diastole Starts Left Atrial Pressure", "Dub = Septal, Left Atrium, Pulmonic", "Diastolic SLAP of the mitral valve"], "D SLAP: Dub = SemiLunar = Aortic and Pulmonic."),
          q("S2 marks the start of which phase?", "Diastole", ["Systole", "Atrial kick", "Ejection"], "S2 starts diastole."),
          q("Which valves are the 'semilunar' valves?", "Aortic and pulmonic", ["Mitral and tricuspid", "Mitral and pulmonic", "Aortic and mitral"], "Semilunar = aortic and pulmonic; atrioventricular = mitral and tricuspid.")],
        [q("A student says dub is the mitral valve closing. What is the correct statement?", "Dub is the aortic and pulmonic valves closing at the start of diastole", ["Dub is the tricuspid valve opening", "Dub is the atria contracting", "Dub is the mitral valve opening"], "Dub = S2 = semilunar valves closing (D SLAP).")]),
      C("Systole and diastole between the sounds (slides 10–15)",
        "<p>The slides picture the valves as <strong>doors</strong> and mark the phases on a waveform strip:</p>" +
        "<ul><li><strong>S1 → S2 = systole</strong> (between lub and dub)</li><li><strong>S2 → next S1 = diastole</strong> (between dub and the next lub)</li>" +
        "<li><strong>One cardiac cycle</strong> = S1 to the next S1</li></ul>" + dg({}, "Normal: S1, systole, S2, diastole, S1.") +
        tbl(["", "S1", "S2"], [["Sound", "Lub", "Dub"], ["Valves", "AV: mitral + tricuspid", "Semilunar: aortic + pulmonic"], ["Mnemonic", "LAV MaT", "D SLAP"], ["Starts", "Systole", "Diastole"]]) +
        hy("A murmur <strong>between S1 and S2</strong> is systolic; <strong>between S2 and S1</strong> is diastolic. Every timing question starts here."),
        ["systole-between", "diastole-between", "cardiac-cycle"],
        [q("Systole is the interval between:", "S1 and S2", ["S2 and the next S1", "S3 and S4", "S4 and S2"], "S1 starts systole; S2 ends it."),
          q("Diastole is the interval between:", "S2 and the next S1", ["S1 and S2", "S1 and S3", "S4 and S1 only"], "S2 starts diastole; the next S1 ends it."),
          q("On the slides, one cardiac cycle runs from:", "S1 to the next S1", ["S1 to S2", "S2 to S3", "S4 to S2"], "Slide 10 draws one cardiac cycle from S1 to the next S1.")],
        [q("A murmur fills the gap between lub and dub. When does it occur?", "Systole", ["Diastole", "Both systole and diastole", "Neither; it is an extra heart sound"], "Between lub (S1) and dub (S2) = systole."),
          q("A murmur fills the gap between dub and the next lub. When does it occur?", "Diastole", ["Systole", "Continuous", "Pre-systole only"], "Between dub (S2) and lub (S1) = diastole.")])
    ]),

    /* ---------- 3 ---------- */
    S("03-split-s2", "3. The physiologic split of S2 (and the bad splits)", "Slides 16–18 plus the AS and PS slides: why S2 splits on inspiration, where to hear it, the hold-your-breath trick, and fixed, wide and paradoxical splits.", [
      C("Physiologic split S2: why and where",
        "<p>A <strong>normal variant</strong>. At times you may hear S2 split into two parts.</p>" +
        "<ul><li><strong>Inspiration</strong> → <strong>negative pressure in the chest</strong> → a bit <strong>more blood to the right side</strong> of the heart</li>" +
        "<li>The <strong>aortic valve closes on time</strong>, but the <strong>pulmonic valve closes slightly after</strong> (A2 then P2)</li>" +
        "<li><strong>Best heard at the pulmonic area</strong> (LSB, 2nd ICS)</li></ul>" + dg({ s2: "split" }, "Split S2 on inspiration: A2 then P2.") +
        hy("<strong>Normal only if it happens during inspiration only.</strong> Recall table: “slight delay of the pulmonic valve closure during inspiration; best heard at the pulmonic area.”"),
        ["split-mechanism", "split-location", "split-normal-inspiration"],
        [q("Which valve closes late in a physiologic split S2?", "Pulmonic", ["Aortic", "Mitral", "Tricuspid"], "The aortic valve closes on time; the pulmonic valve closes slightly after."),
          q("Why does inspiration delay pulmonic valve closure?", "Negative chest pressure sends a bit more blood to the right side of the heart", ["Positive chest pressure empties the right ventricle", "The aortic valve closes later", "The left ventricle fills with more blood"], "Inspiration creates negative intrathoracic pressure, more venous return to the right heart, so P2 is delayed."),
          q("Where is a physiologic split S2 best heard?", "Pulmonic area, left 2nd ICS", ["Aortic area, right 2nd ICS", "Apex", "Left lower sternal border"], "Recall table: best heard at the pulmonic area (LSB, 2nd ICS)."),
          q("A split S2 is normal when it happens:", "During inspiration only", ["During expiration only", "In both inspiration and expiration", "Only when the patient stands"], "Normal if it is during inspiration only."),
          q("The physiologic split of S2 is classified as:", "A normal variant", ["Always pathologic", "A sign of heart failure", "A murmur"], "Slide 16: normal variant.")],
        [q("A healthy 20-year-old has S2 that splits at the left 2nd ICS when she breathes in and becomes single when she breathes out. What is this?", "Physiologic split S2", ["Fixed split S2", "Paradoxical split S2", "Opening snap"], "Splitting on inspiration only, best at the pulmonic area, is physiologic."),
          q("You hear two closely spaced sounds at S2 during inspiration. Which components are they, in order?", "Aortic closure, then pulmonic closure", ["Pulmonic closure, then aortic closure", "Mitral closure, then tricuspid closure", "S2, then S3"], "A2 comes first, P2 slightly after on inspiration.")]),
      C("The hold-your-breath trick (slide 16)",
        "<p>Tip from the slide: <em>ask the patient to hold their breath while you listen… what happens to a physiologically split S2?</em></p>" +
        "<p><strong>Answer:</strong> it <strong>goes away</strong>. With no inspiration there is no extra right-sided filling, so the pulmonic valve closes with the aortic valve and S2 is single.</p>" +
        hy("Split that <strong>disappears</strong> with breath-holding or expiration = physiologic. Split that <strong>stays</strong> = think pathologic (fixed, wide or paradoxical)."),
        ["hold-breath"],
        [q("What happens to a physiologic split S2 when the patient holds their breath?", "It disappears and S2 becomes single", ["It gets wider", "It becomes fixed", "It reverses"], "No inspiration, no delayed P2, so the split goes away."),
          q("Why does breath-holding remove a physiologic split?", "There is no inspiratory increase in right-sided blood flow to delay pulmonic closure", ["The aortic valve closes later", "The mitral valve stops working", "Breath-holding raises heart rate"], "The split depends on inspiration bringing extra blood to the right heart.")],
        [q("You hear a split S2 at the left 2nd ICS. You ask the patient to hold their breath and the split vanishes. What does that tell you?", "It is a physiologic split", ["It is a fixed split", "It is an opening snap", "It is an S3"], "A split that disappears without inspiration is the normal, physiologic split.")]),
      C("Pathologic splits: fixed, wide, paradoxical",
        "<p>Slide 16: a split is <strong>pathological if fixed, wide, or paradoxical</strong>. The deck ties two of them to specific murmurs:</p>" +
        tbl(["Split", "What it means", "Deck link"], [
          ["<strong>Wide</strong>", "Split is wider than normal (P2 very late)", "<strong>Pulmonic stenosis</strong>: “wide split S2 may be present.” Slide picture: as PS goes mild → moderate → severe, P2 moves farther from A2"],
          ["<strong>Paradoxical</strong>", "Reversed: P2 before A2 (split on expiration)", "<strong>Severe aortic stenosis</strong>: “when severe, may cause paradoxical split S2” (the aortic valve closes late)"],
          ["<strong>Fixed</strong>", "Split does not change with breathing", "Not tied to a murmur in this deck (standard teaching: ASD)"]]) +
        hy("Pulmonic stenosis → <strong>wide</strong> split. Severe aortic stenosis → <strong>paradoxical</strong> split."),
        ["wide-split", "paradoxical-split", "fixed-split"],
        [q("Which three kinds of split S2 does the lecture call pathologic?", "Fixed, wide, paradoxical", ["Inspiratory, narrow, single", "Physiologic, fixed, single", "Wide, inspiratory, normal"], "Pathological if fixed, wide, or paradoxical."),
          q("Which murmur does the lecture link to a wide split S2?", "Pulmonic stenosis", ["Aortic stenosis", "Mitral stenosis", "Mitral regurgitation"], "PS slide: wide split S2 may be present."),
          q("Which murmur, when severe, may cause a paradoxical split S2?", "Aortic stenosis", ["Pulmonic stenosis", "Tricuspid regurgitation", "Mitral valve prolapse"], "AS slide: when severe, may cause paradoxical split S2."),
          q("In a paradoxical split, which valve closes first?", "Pulmonic", ["Aortic", "Mitral", "Tricuspid"], "Paradoxical = reversed: the aortic valve closes so late that P2 comes before A2."),
          q("On the PS slide picture, what happens to P2 as pulmonic stenosis gets more severe?", "It moves farther from A2", ["It moves before A2", "It merges with A2", "It disappears and is replaced by an S3"], "Mild to moderate to severe PS: P2 sits progressively later after A2, a wider split.")],
        [q("A 70-year-old with a harsh crescendo-decrescendo murmur at the right 2nd ICS radiating to the carotids has a split S2 heard on expiration that closes on inspiration. What is this split?", "Paradoxical split from severe aortic stenosis", ["Physiologic split", "Wide split from pulmonic stenosis", "Fixed split from a VSD"], "Severe AS delays aortic closure, so the split reverses: paradoxical."),
          q("A child has a harsh crescendo-decrescendo systolic murmur at the left 2nd ICS with an ejection click and a widely split S2. What is the most likely lesion?", "Pulmonic stenosis", ["Aortic stenosis", "Ventricular septal defect", "Still's murmur"], "LUSB diamond murmur plus wide split S2 = pulmonic stenosis."),
          q("A split S2 stays split no matter whether the patient breathes in or out. Is that normal?", "No; a split that does not change is pathologic (fixed)", ["Yes; any split is normal", "Yes, if heard at the pulmonic area", "No; it means mitral stenosis"], "Normal split is during inspiration only; a fixed split is pathologic.")])
    ]),
    /* ---------- 4 ---------- */
    S("04-gallops", "4. Gallops: S3 and S4", "Slides 19–25: timing, mechanism, cadence, how to listen, and what each gallop means.", [
      C("S3: Lub Dub Ta, “Kentucky”",
        "<ul><li><strong>Timing:</strong> <strong>early diastole</strong>, just after S2</li>" +
        "<li><strong>Mechanism:</strong> the ventricles <strong>fill up quickly</strong> and the fluid waves <strong>vibrate the ventricular walls</strong></li>" +
        "<li><strong>How to hear it:</strong> <strong>bell is best</strong>, quiet room, <strong>hold breath</strong></li>" +
        "<li><strong>Means:</strong> <strong>volume overload</strong>: i.e., <strong>CHF, DCM</strong> (dilated cardiomyopathy)</li>" +
        "<li><strong>But</strong> likely <strong>normal</strong> in an <strong>athletic heart, pregnancy, or young patients</strong></li>" +
        "<li>Also appears in <strong>severe MR</strong> and <strong>severe TR</strong> (murmur slides)</li></ul>" + dg({ x: ["S3"] }, "S3 sits just after S2: lub-dub-ta.") +
        mn("<strong>Ken-TUC-ky</strong>: S1 (Ken) – S2 (TUC) – S3 (ky). The extra beat comes <strong>after</strong> dub. Slide picture: a galloping horse."),
        ["s3-timing", "s3-mechanism", "s3-listening", "s3-meaning", "s3-normal"],
        [q("When does S3 occur?", "Early diastole, just after S2", ["Late diastole, just before S1", "Early systole", "Mid-systole"], "S3 = early diastole."),
          q("What produces S3?", "Rapid ventricular filling makes fluid waves vibrate the ventricular walls", ["Atria contracting against a stiff ventricle", "A stenotic valve snapping open", "A prolapsing mitral leaflet"], "Fast filling, wall vibration."),
          q("Which word cadence matches S3?", "Kentucky", ["Tennessee", "Mississippi", "Ohio"], "Lub-Dub-Ta = Ken-tuc-ky."),
          q("S3 classically indicates which kind of overload?", "Volume overload", ["Pressure overload", "Electrolyte overload", "Oxygen overload"], "S3 = too much blood (volume)."),
          q("Which two diseases does the lecture name for a pathologic S3?", "CHF and dilated cardiomyopathy", ["Severe HTN and HCM", "Aortic stenosis and HCM", "Pericarditis and PDA"], "S3: CHF, DCM."),
          q("In which groups is an S3 likely normal?", "Athletes, pregnancy, young patients", ["Elderly with hypertension", "Patients with aortic stenosis", "Patients with HCM"], "S3 can be normal in an athletic heart, pregnancy, or youth."),
          q("Which part of the stethoscope is best for S3?", "Bell", ["Diaphragm", "Either, pressed firmly", "The tubing over the carotid"], "Bell is best, quiet room, hold breath: S3 is low-pitched."),
          q("Which murmurs are associated with an S3 in severe cases?", "Mitral regurgitation and tricuspid regurgitation", ["Aortic stenosis and pulmonic stenosis", "Mitral stenosis and tricuspid stenosis", "Still's murmur and venous hum"], "MR: associated with S3 in severe cases. TR: can also lead to an S3 in severe cases.")],
        [q("A 68-year-old with dilated cardiomyopathy and bilateral crackles has a low-pitched extra sound right after S2, best heard with the bell. What is it?", "S3 gallop", ["S4 gallop", "Opening snap", "Split S2"], "Early diastolic, low, bell, volume overload (DCM) = S3."),
          q("A 19-year-old college runner has an extra sound just after S2 that sounds like 'Kentucky.' She has no symptoms. What is the best interpretation?", "Likely a normal S3 in an athletic heart", ["Always pathologic S4", "Severe aortic stenosis", "Mitral valve prolapse"], "S3 is likely normal in athletes, pregnancy, and young patients."),
          q("A woman at 32 weeks of pregnancy has a soft low sound right after S2. No symptoms. What is it most likely?", "A normal S3 of pregnancy", ["A pathologic S4", "A pericardial rub", "An ejection click"], "S3 can be normal in pregnancy."),
          q("You suspect an S3. How should you set up to hear it?", "Use the bell in a quiet room while the patient holds their breath", ["Use the diaphragm pressed firmly during deep breathing", "Have the patient squat and do Valsalva", "Listen over the carotids"], "Slide 20: bell is best, quiet room, hold breath.")]),
      C("S4: Ta Lub Dub, “Tennessee”",
        "<ul><li><strong>Timing:</strong> <strong>late diastole</strong>, just before S1</li>" +
        "<li><strong>Mechanism:</strong> <strong>atria contracting against stiff or non-compliant ventricles</strong></li>" +
        "<li><strong>How to hear it:</strong> <strong>bell is best</strong>, quiet room, <strong>hold breath</strong></li>" +
        "<li><strong>Means:</strong> <strong>pressure overload</strong>: i.e., <strong>severe HTN, HCM, AS</strong></li>" +
        "<li><strong>Always pathological</strong> (comparison table: “rarely normal”)</li>" +
        "<li>Slide picture: a <strong>stiff, hypertrophied</strong> (increased in size) left ventricle that must <strong>pump against high blood pressure</strong></li></ul>" + dg({ x: ["S4"] }, "S4 sits just before S1: ta-lub-dub.") +
        mn("<strong>TEN-nes-see</strong>: S4 (Ten) – S1 (nes) – S2 (see). The extra beat comes <strong>before</strong> lub."),
        ["s4-timing", "s4-mechanism", "s4-listening", "s4-meaning", "s4-always-pathologic"],
        [q("When does S4 occur?", "Late diastole, just before S1", ["Early diastole, just after S2", "Mid-systole", "Early systole"], "S4 = late diastole."),
          q("What produces S4?", "Atria contracting against a stiff, non-compliant ventricle", ["Rapid early filling vibrating the ventricular wall", "A stenotic AV valve forced open", "A semilunar valve snapping open"], "Atrial kick into a stiff ventricle."),
          q("Which word cadence matches S4?", "Tennessee", ["Kentucky", "Louisiana", "Texas"], "Ta-Lub-Dub = Ten-nes-see."),
          q("S4 indicates which kind of overload?", "Pressure overload", ["Volume overload", "Flow overload from anemia", "Normal physiology"], "S4 = too stiff ventricle (pressure)."),
          q("Which three conditions does the lecture list for S4?", "Severe hypertension, HCM, aortic stenosis", ["CHF, DCM, pregnancy", "MVP, MR, TR", "PDA, VSD, ASD"], "S4: severe HTN, HCM, AS."),
          q("How does the lecture describe the S4 in terms of normal vs abnormal?", "Always pathological", ["Normal in athletes", "Normal in pregnancy", "Normal in children"], "Slide 22: always pathological. Table: rarely normal."),
          q("Which part of the stethoscope is best for S4?", "Bell", ["Diaphragm", "Diaphragm pressed firmly", "No stethoscope needed"], "Bell is best, quiet room, hold breath.")],
        [q("A 62-year-old with long-standing poorly controlled hypertension has a low sound just before S1, best heard with the bell. What is it?", "S4 gallop", ["S3 gallop", "Split S1 from an ejection click", "Opening snap"], "Late diastolic, low, stiff hypertrophied LV from HTN = S4."),
          q("A 24-year-old athlete with a family history of sudden death has a 'Tennessee' cadence. Which diagnosis best explains the extra sound?", "Hypertrophic cardiomyopathy causing an S4", ["Normal athletic S3", "Mitral stenosis", "Physiologic split S2"], "S4 is always pathologic; in a young athlete think HCM."),
          q("An elderly patient has a harsh crescendo-decrescendo murmur at the RUSB radiating to the carotids and an extra sound right before S1. What is the extra sound and why?", "S4, from a stiff hypertrophied ventricle in aortic stenosis", ["S3, from volume overload", "Opening snap from mitral stenosis", "Midsystolic click from MVP"], "AS is a pressure-overload cause of S4.")]),
      C("S3 vs S4 side by side (slide 24 table)",
        tbl(["Feature", "S3", "S4"], [
          ["Timing", "<strong>Early diastole</strong> (just after S2)", "<strong>Late diastole</strong> (just before S1)"],
          ["Mechanism", "Rapid filling → ventricular wall vibration", "Atrial contraction against stiff ventricle"],
          ["Cadence", "“Lub-Dub-Ta” → <strong>Kentucky</strong>", "“Ta-Lub-Dub” → <strong>Tennessee</strong>"],
          ["Normal in…", "Athletes, pregnancy, youth", "<strong>Rarely normal</strong>"],
          ["Pathologic in…", "CHF, DCM", "HTN, aortic stenosis, HCM"],
          ["Key idea", "Too much blood (<strong>volume</strong>)", "Too stiff ventricle (<strong>pressure</strong>)"],
          ["Listening", "Bell, quiet room, hold breath", "Bell, quiet room, hold breath"]]) +
        hy("Exam stems ask “volume vs pressure overload.” <strong>S3 = volume</strong> (CHF, DCM, severe MR/TR). <strong>S4 = pressure</strong> (HTN, AS, HCM). Both are <strong>gallops</strong> and both are <strong>diastolic</strong>."),
        ["s3-s4-compare", "volume-vs-pressure", "both-diastolic"],
        [q("Both S3 and S4 occur in which phase?", "Diastole", ["Systole", "S3 in systole, S4 in diastole", "S3 in diastole, S4 in systole"], "S3 = early diastole, S4 = late diastole."),
          q("Which gallop is 'too much blood'?", "S3", ["S4", "Both equally", "Neither"], "Key idea: S3 = volume, S4 = pressure (stiff ventricle)."),
          q("Which gallop is 'too stiff a ventricle'?", "S4", ["S3", "Split S2", "Opening snap"], "S4 = stiff ventricle = pressure."),
          q("Which gallop can be normal in a young person?", "S3", ["S4", "Both", "Neither"], "S3: normal in athletes, pregnancy, youth; S4: rarely normal."),
          q("The S3 sound is heard right after which normal sound?", "S2", ["S1", "S4", "The opening snap"], "S3 sits just after S2."),
          q("The S4 sound is heard right before which normal sound?", "S1", ["S2", "S3", "The ejection click"], "S4 sits just before S1.")],
        [q("Exam question: 'This patient's extra heart sound reflects volume overload or pressure overload?' The clip has a low sound right after S2 in a patient with CHF. Answer?", "Volume overload", ["Pressure overload", "Neither; it is a normal split", "Outflow obstruction"], "S3 (after S2) in CHF = volume overload."),
          q("Exam question: a patient with HCM has a gallop. Is the cadence more like Kentucky or Tennessee?", "Tennessee", ["Kentucky", "Mississippi", "Neither; HCM gives no gallop"], "HCM = stiff ventricle = S4 = Tennessee."),
          q("A patient has an extra low sound. It is right before S1, not after S2. Which statement is correct?", "It is an S4 and always pathologic", ["It is an S3 and may be normal", "It is a physiologic split", "It is an ejection click"], "Before S1 = S4; always pathologic.")])
    ]),

    /* ---------- 5 ---------- */
    S("05-clicks-snaps", "5. Clicks and snaps", "Slides 26–32: systolic ejection click, midsystolic click (with the MVP maneuvers), opening snap, and the recall table.", [
      C("Systolic ejection click (SEC)",
        "<ul><li><strong>High-pitched</strong>, <strong>early systole</strong> (right after S1)</li>" +
        "<li>Associated with <strong>stenosis of a semilunar valve</strong>, <strong>esp. bicuspid aortic valve</strong></li>" +
        "<li>Typically <strong>followed by a crescendo-decrescendo murmur</strong></li>" +
        "<li>Slide picture: a stenotic aortic or pulmonic valve is <strong>not able to fully open</strong>; it <strong>resists opening, then snaps open</strong> = the “ejection click”</li></ul>" +
        dg({ x: ["EC"], m: [{ phase: "sys", shape: "diamond", from: 0.2, to: 0.95 }] }, "S1, SEC, crescendo-decrescendo murmur, S2 (slide 27).") +
        hy("Click right after S1 + diamond murmur = <strong>stenotic semilunar valve</strong> (AS, esp. bicuspid; or PS). AS slide: “ejection click present in <strong>early</strong> stenosis.”"),
        ["sec-timing-pitch", "sec-cause", "sec-followed-by", "sec-mechanism"],
        [q("When does a systolic ejection click occur?", "Early systole", ["Mid-systole", "Early diastole", "Late diastole"], "SEC: high-pitched, early systole."),
          q("What pitch is a systolic ejection click?", "High", ["Low", "Medium rumble", "It has no pitch"], "High-pitched, early systole."),
          q("A systolic ejection click is associated with stenosis of which type of valve?", "Semilunar valve", ["Atrioventricular valve", "Venous valve", "Prosthetic mitral valve only"], "SEC = stenosis of a semilunar (aortic or pulmonic) valve."),
          q("Which specific valve problem does the lecture highlight for an ejection click?", "Bicuspid aortic valve", ["Rheumatic mitral valve", "Myxomatous mitral valve", "Ebstein tricuspid valve"], "Esp. bicuspid aortic valve."),
          q("What murmur typically follows a systolic ejection click?", "Crescendo-decrescendo systolic murmur", ["Late systolic murmur", "Diastolic rumble", "Holosystolic plateau murmur"], "SEC is typically followed by a crescendo-decrescendo murmur."),
          q("What produces the ejection click?", "A stiff semilunar valve resisting opening and then snapping open", ["A mitral leaflet snapping back into the atrium", "A stenotic AV valve forced open in diastole", "Atria contracting against a stiff ventricle"], "Slide picture: stenotic aortic or pulmonic valve resists opening up before snapping open.")],
        [q("A 22-year-old with a known bicuspid aortic valve has a sharp high-pitched sound just after S1, followed by a diamond-shaped murmur. What is the sharp sound?", "Systolic ejection click", ["Midsystolic click", "Opening snap", "S4"], "Early systolic high-pitched click with a crescendo-decrescendo murmur = SEC from a stenotic semilunar valve."),
          q("Exam question: an early systolic click followed by a crescendo-decrescendo murmur best fits which lesion?", "Aortic stenosis", ["Mitral valve prolapse", "Mitral stenosis", "Tricuspid regurgitation"], "SEC + diamond = AS (also possible PS).")]),
      C("Midsystolic click (MSC) and the MVP maneuvers",
        "<ul><li><strong>Classic for mitral valve prolapse</strong></li>" +
        "<li>Often <strong>followed by a late systolic murmur</strong> (that murmur is <strong>MR</strong>)</li>" +
        "<li>Sound of the <strong>mitral leaflet suddenly snapping back into the atrium</strong>, as it is <strong>stopped by the chordae tendineae</strong></li>" +
        "<li><strong>Standing / Valsalva</strong>: click is <strong>earlier</strong>, murmur <strong>longer</strong></li>" +
        "<li><strong>Squatting</strong>: click is <strong>later</strong>, murmur is <strong>shorter</strong></li></ul>" +
        dg({ x: ["MSC"], m: [{ phase: "sys", shape: "plateau", from: 0.6, to: 1 }] }, "S1, MSC, late systolic murmur, S2 (slide 29).") +
        hy("Less blood in the LV (standing, Valsalva) → prolapse happens <strong>sooner</strong> → click <strong>earlier</strong>, murmur <strong>longer</strong>. More blood (squatting) → click <strong>later</strong>, murmur <strong>shorter</strong>."),
        ["msc-mvp", "msc-mechanism", "msc-followed-by", "msc-standing", "msc-squatting"],
        [q("A midsystolic click is classic for which diagnosis?", "Mitral valve prolapse", ["Aortic stenosis", "Mitral stenosis", "Pericarditis"], "MSC = MVP."),
          q("What murmur often follows a midsystolic click?", "Late systolic murmur (MR)", ["Early diastolic decrescendo", "Mid-diastolic rumble", "Continuous machinery murmur"], "Often followed by a late systolic murmur, which is MR."),
          q("What makes the midsystolic click?", "The mitral leaflet snapping back into the atrium and being stopped by the chordae tendineae", ["The aortic valve snapping open", "Blood forcing open a stenotic mitral valve", "Pericardial layers rubbing"], "Leaflet folds into the atrium and is suddenly stopped by the chordae."),
          q("What does standing or Valsalva do to the MVP click and murmur?", "Click earlier, murmur longer", ["Click later, murmur shorter", "Click disappears", "No change"], "Standing/Valsalva: click earlier, murmur longer."),
          q("What does squatting do to the MVP click and murmur?", "Click later, murmur shorter", ["Click earlier, murmur longer", "Murmur becomes diastolic", "Click becomes an opening snap"], "Squatting: click later, murmur shorter."),
          q("Which structure stops the prolapsing mitral leaflet and produces the click?", "Chordae tendineae", ["Papillary muscle rupture", "Moderator band", "Pericardium"], "Leaflet is stopped by the chordae tendineae.")],
        [q("A thin 28-year-old woman has a click in mid-systole at the apex followed by a short murmur. When she stands, the click moves closer to S1 and the murmur gets longer. Diagnosis?", "Mitral valve prolapse", ["Aortic stenosis", "Hypertrophic cardiomyopathy", "Mitral stenosis"], "Mid-systolic click whose timing shifts with standing = MVP."),
          q("A patient with MVP squats. What should happen to the click?", "It moves later in systole", ["It moves earlier in systole", "It moves into diastole", "It becomes louder and continuous"], "Squatting increases LV volume, so prolapse and the click come later and the murmur shortens."),
          q("Exam question: which maneuver makes the MVP murmur longer?", "Valsalva", ["Squatting", "Leaning forward", "Left lateral decubitus"], "Standing or Valsalva: click earlier, murmur longer.")]),
      C("Opening snap (OS)",
        "<ul><li><strong>High-pitched</strong>, <strong>early–mid diastole</strong></li>" +
        "<li>The snap is the sound we hear as <strong>blood forces open a stenotic AV valve</strong></li>" +
        "<li><strong>Classic for mitral stenosis</strong> (but can also be <strong>tricuspid</strong>)</li>" +
        "<li>Typically <strong>followed by a “diastolic rumble”</strong> as blood <strong>squeezes through the small opening</strong></li>" +
        "<li>Slide picture: diastolic murmurs, stenotic mitral or tricuspid: opening “snap” in the middle of diastole, then a diastolic rumble</li></ul>" +
        dg({ x: ["OS"], m: [{ phase: "dia", shape: "rumble", from: 0.2, to: 0.8 }] }, "S1, S2, OS, rumble (slide 31).") +
        hy("Something sharp <strong>after S2</strong> + a low <strong>rumble</strong> = <strong>mitral stenosis</strong>. Do not confuse it with S3 (low, dull, bell) or a split S2 (right on top of S2, inspiration only)."),
        ["os-timing-pitch", "os-mechanism", "os-ms", "os-rumble"],
        [q("When does an opening snap occur?", "Early to mid diastole", ["Early systole", "Mid-systole", "Late diastole just before S1"], "OS: high-pitched, early-mid diastole."),
          q("What pitch is an opening snap?", "High", ["Low", "None", "Medium rumble"], "High-pitched."),
          q("What produces an opening snap?", "Blood forcing open a stenotic AV valve", ["A stenotic semilunar valve snapping open", "A mitral leaflet prolapsing into the atrium", "Rapid ventricular filling"], "Blood forces open a stenotic AV valve."),
          q("An opening snap is classic for which diagnosis?", "Mitral stenosis", ["Aortic stenosis", "Mitral valve prolapse", "Aortic regurgitation"], "Classic for MS (can also be tricuspid stenosis)."),
          q("Besides the mitral valve, which valve can produce an opening snap?", "Tricuspid", ["Aortic", "Pulmonic", "Eustachian"], "Can also be tricuspid (stenosis)."),
          q("What typically follows an opening snap?", "A diastolic rumble", ["A crescendo-decrescendo systolic murmur", "A late systolic murmur", "A pericardial rub"], "Diastolic rumble as blood squeezes through the small opening.")],
        [q("A 45-year-old woman who had rheumatic fever as a child has a sharp sound shortly after S2 followed by a low rumble at the apex. What is the sharp sound?", "Opening snap", ["S3", "Split S2", "Ejection click"], "OS + diastolic rumble = mitral stenosis."),
          q("Exam question: an extra high-pitched sound in early diastole followed by a rumble indicates which valve problem?", "Stenotic mitral valve", ["Stenotic aortic valve", "Prolapsed mitral valve", "Leaky aortic valve"], "OS = stenotic AV valve being forced open; classic for MS.")]),
      C("Recall extra heart sounds (slide 32 table, filled in)",
        tbl(["Sound", "Timing", "Pitch", "Mechanism", "Means / followed by"], [
          ["<strong>S3</strong>", "Early diastole", "Low (bell)", "Rapid filling vibrates the walls", "Volume overload: CHF, DCM; normal in athletes, pregnancy, youth"],
          ["<strong>S4</strong>", "Late diastole", "Low (bell)", "Atrium contracts against stiff ventricle", "Pressure overload: severe HTN, HCM, AS; always pathologic"],
          ["<strong>Systolic ejection click</strong>", "Early systole", "High", "Stenotic semilunar valve snaps open", "Bicuspid AV / AS (or PS); followed by crescendo-decrescendo murmur"],
          ["<strong>Midsystolic click</strong>", "Mid-systole", "High (click)", "Mitral leaflet snaps back, stopped by chordae", "MVP; followed by late systolic murmur (MR)"],
          ["<strong>Opening snap</strong>", "Early–mid diastole", "High", "Blood forces open a stenotic AV valve", "MS (or TS); followed by diastolic rumble"]]) +
        hy("Two in <strong>systole</strong> (both clicks), three in <strong>diastole</strong> (S3, S4, OS). The <strong>high-pitched</strong> ones are the clicks and the snap; the <strong>low</strong> ones are the gallops."),
        ["extra-sounds-table", "systole-vs-diastole-extras"],
        [q("Which extra heart sounds occur in systole?", "Systolic ejection click and midsystolic click", ["S3 and S4", "Opening snap and S3", "S4 and opening snap"], "Both clicks are systolic."),
          q("Which extra heart sounds occur in diastole?", "S3, S4, and opening snap", ["Both clicks", "S4 and ejection click", "Only S3"], "S3 (early), OS (early-mid), S4 (late)."),
          q("Which extra sounds are low-pitched and best with the bell?", "S3 and S4", ["Ejection click and opening snap", "Midsystolic click", "Opening snap"], "Gallops: bell is best. Clicks and the snap are high-pitched."),
          q("Which extra sound comes in early systole?", "Systolic ejection click", ["Midsystolic click", "Opening snap", "S4"], "Ejection click = early systole; midsystolic click = mid."),
          q("Put these in order within diastole: S3, S4, opening snap.", "Opening snap, S3, S4", ["S4, S3, opening snap", "S3, opening snap, S4", "S3, S4, opening snap"], "OS comes early (crisp, high), S3 early (dull, low) shortly after, S4 late just before S1.")],
        [q("Exam question: an extra sound is heard in systole and moves with standing and squatting. Which is it?", "Midsystolic click", ["Systolic ejection click", "Opening snap", "S3"], "Only the MVP click is described as moving with standing/squatting."),
          q("Exam question: a sharp extra sound occurs right after S1 and is followed by a diamond murmur. A second patient has a sharp extra sound in mid-systole followed by a late murmur. Which pair is right?", "First = ejection click (stenotic semilunar valve), second = midsystolic click (MVP)", ["First = MVP click, second = ejection click", "Both are opening snaps", "First = S4, second = S3"], "Early click + diamond = SEC; mid click + late murmur = MSC/MVP.")])
    ]),
    /* ---------- 6 ---------- */
    S("06-murmur-timing-shape", "6. Murmur framework: the 6 steps, timing and shape", "Slides 33–43 and 51: the six steps, timing words, the four shapes, reading the timing diagrams, and the stenosis/regurgitation tree.", [
      C("The six steps for identifying a murmur (slide 34)",
        "<ol><li><strong>Time</strong> the murmur</li><li><strong>Locate</strong> where it is loudest on the precordium</li><li><strong>Conduct any augmentations</strong> (maneuvers)</li>" +
        "<li>Determine the <strong>shape</strong></li><li><strong>Grade</strong> the intensity</li><li>Identify <strong>associated features</strong> (radiation, pitch, quality, extra sounds)</li></ol>" +
        mn("<strong>T-L-A-S-G-A</strong>: “<strong>T</strong>ime <strong>L</strong>ocate, <strong>A</strong>ugment, <strong>S</strong>hape, <strong>G</strong>rade, <strong>A</strong>ssociated.” Timing always comes first."),
        ["six-steps"],
        [q("What is the FIRST step in identifying a murmur?", "Time the murmur", ["Grade the intensity", "Determine the shape", "Check for radiation"], "Step 1: time it (systolic, diastolic, continuous)."),
          q("What is step 2 of the murmur framework?", "Locate where the murmur is loudest on the precordium", ["Grade the intensity", "Identify associated features", "Determine the shape"], "1 time, 2 locate, 3 augment, 4 shape, 5 grade, 6 associated features."),
          q("Which step comes right before grading the intensity?", "Determine the shape", ["Time the murmur", "Locate it", "Conduct augmentations"], "Step 4 shape, step 5 grade."),
          q("What is the LAST step of the framework?", "Identify associated features", ["Grade the intensity", "Time the murmur", "Conduct augmentations"], "Step 6: associated features."),
          q("'Conduct any augmentations' means:", "Use maneuvers to see if the murmur gets louder or softer", ["Turn up the stethoscope volume", "Order an echo", "Listen longer"], "Augmentation = maneuvers like squatting, standing, Valsalva, leaning forward.")],
        [q("You hear a murmur and immediately try to grade it 3/6. According to the framework, what should you have done first?", "Decide whether it is systolic, diastolic, or continuous", ["Check for a thrill", "Have the patient squat", "Listen at the carotids"], "Timing is step one.")]),
      C("Timing words (slide 35)",
        "<p><strong>a) Systolic</strong>: early? mid? late? or <strong>holosystolic, aka pansystolic</strong> (S1 all the way to S2)</p>" +
        "<p><strong>b) Diastolic</strong>: early? mid? late?</p>" +
        "<p><strong>c) Continuous</strong>: runs through S2 into diastole (systolic + diastolic)</p>" +
        tbl(["Timing", "Deck examples"], [
          ["Early systolic", "Ejection click"],
          ["Mid-systolic", "Crescendo-decrescendo (AS, PS); midsystolic click"],
          ["Late systolic", "MVP murmur after the click"],
          ["Holosystolic", "MR, TR, VSD"],
          ["Early diastolic", "AR, PR (decrescendo)"],
          ["Mid-diastolic", "MS rumble after the opening snap"],
          ["Continuous / systolic + diastolic", "PDA, venous hum, (rub has systolic + diastolic parts)"]]) +
        hy("<strong>Holosystolic = pansystolic.</strong> Both words mean it fills S1 to S2."),
        ["timing-systolic", "timing-diastolic", "timing-continuous", "holosystolic-pansystolic"],
        [q("Another name for holosystolic is:", "Pansystolic", ["Presystolic", "Midsystolic", "Protodiastolic"], "Holosystolic aka pansystolic."),
          q("A holosystolic murmur lasts:", "From S1 all the way to S2", ["Only the first half of systole", "From S2 to S1", "Through S2 into diastole"], "Holo = whole systole."),
          q("Which three timing categories does the lecture list at the top level?", "Systolic, diastolic, continuous", ["Early, mid, late", "Crescendo, decrescendo, plateau", "Harsh, blowing, rumbling"], "a) systolic, b) diastolic, c) continuous."),
          q("Which murmurs in the deck are holosystolic?", "MR, TR, VSD", ["AS, PS, HCM", "AR, PR, MS", "PDA, venous hum, rub"], "MR and TR are blowing holosystolic; VSD is holosystolic harsh/blowing."),
          q("Which murmur in the deck is continuous with a machinery quality?", "Patent ductus arteriosus", ["Mitral stenosis", "Still's murmur", "Tricuspid regurgitation"], "PDA: harsh, continuous, machinery.")],
        [q("A murmur starts right with S1 and runs at the same loudness up to S2. How do you time it?", "Holosystolic (pansystolic)", ["Early diastolic", "Mid-systolic", "Continuous"], "S1 to S2 = holosystolic."),
          q("A murmur begins in systole, peaks at S2, and fades through diastole without stopping. How do you time it?", "Continuous", ["Holosystolic", "Early diastolic", "Late systolic"], "Running through S2 into diastole = continuous (classic PDA).")]),
      C("The four shapes (slide 40)",
        "<ul><li><strong>Crescendo</strong>: gets louder</li><li><strong>Decrescendo</strong>: gets softer</li>" +
        "<li><strong>Crescendo-decrescendo</strong> (aka <strong>diamond shape</strong>): louder then softer</li><li><strong>Plateau</strong>: same loudness throughout</li></ul>" +
        dg({ m: [{ phase: "sys", shape: "diamond", from: 0.12, to: 0.88 }] }, "Diamond (crescendo-decrescendo): AS, PS.") +
        dg({ m: [{ phase: "sys", shape: "plateau", from: 0, to: 1 }] }, "Plateau, holosystolic: MR, TR, VSD.") +
        dg({ m: [{ phase: "dia", shape: "decresc", from: 0, to: 0.75 }] }, "Decrescendo, early diastolic: AR, PR.") +
        tbl(["Shape", "Deck murmurs"], [["Crescendo-decrescendo (diamond)", "AS, PS (often after an ejection click)"], ["Plateau / holosystolic", "MR, TR, VSD"], ["Decrescendo", "AR, PR (early diastolic)"], ["Crescendo then decrescendo across S2", "PDA (crescendo in systole, decrescendo in diastole)"], ["Rumble (low, diastolic)", "MS, TS"]]),
        ["shape-crescendo", "shape-decrescendo", "shape-diamond", "shape-plateau"],
        [q("What is another name for a crescendo-decrescendo murmur?", "Diamond-shaped", ["Plateau", "Rumble", "Machinery"], "Crescendo-decrescendo aka diamond shape."),
          q("A murmur that stays the same loudness throughout is:", "Plateau", ["Crescendo", "Decrescendo", "Diamond"], "Plateau = flat intensity."),
          q("A murmur that gets steadily softer is:", "Decrescendo", ["Crescendo", "Plateau", "Diamond"], "Decrescendo = fading."),
          q("A murmur that gets steadily louder is:", "Crescendo", ["Decrescendo", "Plateau", "Rumble"], "Crescendo = building."),
          q("Which shape is classic for aortic and pulmonic stenosis?", "Crescendo-decrescendo", ["Plateau", "Decrescendo", "Crescendo only"], "AS and PS: harsh, high-pitched, crescendo-decrescendo."),
          q("Which shape is classic for aortic and pulmonic regurgitation?", "Early diastolic decrescendo", ["Mid-systolic diamond", "Holosystolic plateau", "Late systolic crescendo"], "AR and PR: blowing, high-pitched, early diastolic decrescendo.")],
        [q("Exam diagram: the murmur rises and falls between S1 and S2 with a gap at each end. Which lesion fits best?", "Aortic stenosis", ["Mitral regurgitation", "Aortic regurgitation", "Mitral stenosis"], "Mid-systolic diamond = AS (or PS)."),
          q("Exam diagram: a flat murmur fills all of systole. Which lesion fits best?", "Mitral regurgitation", ["Aortic stenosis", "Aortic regurgitation", "Still's murmur"], "Holosystolic plateau = MR (also TR, VSD)."),
          q("Exam diagram: a murmur starts loud right at S2 and fades through diastole. Which lesion fits best?", "Aortic regurgitation", ["Mitral stenosis", "Mitral valve prolapse", "Tricuspid regurgitation"], "Early diastolic decrescendo = AR (or PR).")]),
      C("Reading the “time these / describe these” diagrams (slides 36–43)",
        "<p>The practice diagrams show black bars for S1, S2, S1 and red lines for the murmur. Read <strong>which gap</strong> the red lines are in, then <strong>which way they slope</strong>:</p>" +
        tbl(["Picture", "Timing + shape", "Classic match"], [
          ["Red lines rising into S2", "<strong>Late systolic crescendo</strong>", "MVP murmur after the click"],
          ["Red diamond in the middle of systole", "<strong>Mid-systolic crescendo-decrescendo</strong>", "AS / PS"],
          ["Flat red block from S1 to S2", "<strong>Holosystolic plateau</strong>", "MR / TR / VSD"],
          ["Red lines rising into the next S1", "<strong>Late diastolic crescendo</strong> (presystolic)", "MS (atrial kick through a narrow valve; MS slide picture shows the rumble rising into an accentuated S1)"],
          ["Red lines starting at S2, fading", "<strong>Early diastolic decrescendo</strong>", "AR / PR"],
          ["Orange triangle peaking at S2", "<strong>Continuous</strong>: crescendo in systole, decrescendo in diastole", "PDA"],
          ["Red block in systole and a longer one in diastole", "<strong>Systolic + diastolic</strong>", "Continuous-type murmurs (PDA, venous hum)"]]) +
        hy("Gap first (systole = S1→S2, diastole = S2→S1), slope second. That two-step read answers every diagram question."),
        ["diagram-late-systolic", "diagram-mid-systolic", "diagram-holosystolic", "diagram-diastolic", "diagram-continuous"],
        [q("On a diagram, red lines that rise toward S2 near the end of systole show:", "A late systolic crescendo murmur", ["An early diastolic decrescendo murmur", "A holosystolic plateau", "A mid-diastolic rumble"], "Late systolic, building into S2: the MVP pattern."),
          q("On a diagram, red lines that start at S2 and fade before S1 show:", "An early diastolic decrescendo murmur", ["A late systolic crescendo murmur", "A holosystolic murmur", "A continuous murmur"], "Starts at S2, fades = early diastolic decrescendo (AR/PR)."),
          q("On a diagram, red lines that rise into the next S1 at the end of diastole show:", "A late diastolic (presystolic) crescendo murmur", ["A late systolic crescendo", "An early diastolic decrescendo", "An S3"], "Rising into S1 = late diastolic crescendo."),
          q("On a diagram, a triangle that builds through systole, peaks at S2, and fades through diastole shows:", "A continuous murmur (PDA pattern)", ["A diamond systolic murmur", "An early diastolic murmur", "A holosystolic murmur"], "PDA: crescendo during systole, decrescendo during diastole."),
          q("What two questions does every timing diagram answer?", "Which gap the murmur is in, and which way it slopes", ["How loud and how high-pitched", "Which valve and which artery", "What grade and what radiation"], "Timing (systole vs diastole) then shape.")],
        [q("Exam diagram question: the clip has a murmur that builds and ends right at S2, after a click. Which waveform matches?", "Late systolic crescendo ending at S2", ["Mid-systolic diamond with a gap before S2", "Early diastolic decrescendo", "Holosystolic plateau"], "MSC + late systolic murmur = MVP pattern."),
          q("Exam diagram question: a harsh murmur swells and fades in the middle of systole. Which waveform matches?", "Mid-systolic crescendo-decrescendo (diamond)", ["Holosystolic plateau", "Late diastolic crescendo", "Continuous triangle across S2"], "Diamond between S1 and S2 = AS or PS.")]),
      C("Approach to murmurs: stenosis vs regurgitation (slides 51, 52, 58)",
        "<p><strong>Systole</strong>: the AV valves have <strong>closed</strong> and the SL valves have <strong>opened</strong>; the ventricles squeeze blood into the aorta and pulmonary artery. Heard between S1 and S2. So systolic murmurs = <strong>leaky mitral/tricuspid</strong> (regurgitation) or <strong>stiff aortic/pulmonic</strong> (stenosis).</p>" +
        "<p><strong>Diastole</strong>: the SL valves have <strong>closed</strong> and the AV valves have <strong>opened</strong>; the atria empty into the ventricles. Heard between S2 and S1. So diastolic murmurs = <strong>stiff mitral/tricuspid</strong> (stenosis) or <strong>leaky aortic/pulmonic</strong> (regurgitation).</p>" +
        tbl(["", "Stenosis", "Regurgitation"], [["<strong>Systolic</strong>", "Semilunar (AS, PS)", "Atrioventricular (MR, TR)"], ["<strong>Diastolic</strong>", "Atrioventricular (MS, TS)", "Semilunar (AR, PR)"]]) +
        mn("<strong>Diastolic = ARMS</strong>: <strong>A</strong>ortic (pulmonic) <strong>R</strong>egurgitation and <strong>M</strong>itral (tricuspid) <strong>S</strong>tenosis. Everything else valvular is systolic (AS, PS, MR, TR, MVP)."),
        ["approach-tree", "systolic-logic", "diastolic-logic", "arms"],
        [q("Systolic stenosis murmurs come from which valves?", "Semilunar valves (aortic, pulmonic)", ["AV valves (mitral, tricuspid)", "Venous valves", "Any valve"], "In systole the SL valves should be open; if stiff, stenosis murmur."),
          q("Systolic regurgitation murmurs come from which valves?", "AV valves (mitral, tricuspid)", ["Semilunar valves", "Aortic only", "Pulmonic only"], "In systole the AV valves should be closed; if leaky, regurgitation."),
          q("Diastolic stenosis murmurs come from which valves?", "AV valves (mitral, tricuspid)", ["Semilunar valves", "Aortic only", "Pulmonic only"], "In diastole the AV valves are open; if stiff, stenosis."),
          q("Diastolic regurgitation murmurs come from which valves?", "Semilunar valves (aortic, pulmonic)", ["AV valves", "Mitral only", "Tricuspid only"], "In diastole the SL valves should be closed; if leaky, regurgitation."),
          q("What does the mnemonic ARMS stand for?", "Diastolic murmurs: Aortic (pulmonic) Regurgitation and Mitral (tricuspid) Stenosis", ["Systolic murmurs: Aortic Regurgitation, Mitral Stenosis", "Aortic Root, Mitral Septum", "Atrial Rumble, Mitral Snap"], "Diastolic = ARMS."),
          q("During systole, which valves are open?", "Aortic and pulmonic", ["Mitral and tricuspid", "All four", "None"], "Systole: AV closed, SL open."),
          q("During diastole, which valves are open?", "Mitral and tricuspid", ["Aortic and pulmonic", "All four", "None"], "Diastole: SL closed, AV open.")],
        [q("Exam question: is mitral stenosis a systolic or diastolic murmur?", "Diastolic", ["Systolic", "Both", "Neither"], "ARMS: mitral stenosis is diastolic."),
          q("Exam question: is mitral regurgitation a systolic or diastolic murmur?", "Systolic", ["Diastolic", "Both", "Neither"], "Leaky AV valve in systole: MR is systolic."),
          q("Exam question: is aortic regurgitation systolic or diastolic?", "Diastolic", ["Systolic", "Both", "Continuous"], "ARMS: aortic regurgitation is diastolic."),
          q("Exam question: is pericardial friction rub systolic, diastolic, or both?", "Both", ["Systolic only", "Diastolic only", "Neither; it is a gallop"], "Rub: systolic + diastolic (up to three components).")])
    ]),

    /* ---------- 7 ---------- */
    S("07-murmur-describe", "7. Murmur framework: location, grade, pitch, quality, radiation, maneuvers", "Slides 39 and 44–49: radiation, the 6-point grading scale, bell vs diaphragm, quality words, the maneuvers list, and how a full description is written.", [
      C("Location and radiation (slides 39, 48)",
        "<p><strong>Location</strong> = where the murmur is <strong>loudest (maximal intensity)</strong>. Then check whether it <strong>radiates</strong>.</p>" +
        "<p><strong>Radiation:</strong> some well-known murmurs <strong>project sound along the blood flow</strong>:</p>" +
        "<ul><li><strong>To the carotids: aortic stenosis</strong></li><li><strong>To the left axilla: mitral regurgitation</strong></li></ul>" +
        "<p>Other radiation from the murmur slides: <strong>PS</strong> may radiate to the <strong>left neck or left shoulder</strong>; <strong>AR</strong> may radiate to the <strong>apex</strong>; <strong>MS</strong> and <strong>TS</strong>: <strong>no radiation</strong>.</p>" +
        tbl(["Murmur", "Radiation"], [["AS", "Carotids"], ["MR", "Left axilla"], ["PS", "Left neck or left shoulder"], ["AR", "Apex"], ["MS", "None"], ["TS", "None"]]),
        ["location-max", "radiation-carotids", "radiation-axilla", "radiation-other"],
        [q("'Location' of a murmur means the spot where it is:", "Loudest (maximal intensity)", ["First heard", "Softest", "Closest to the valve's anatomic position"], "Where the murmur is loudest."),
          q("Which murmur radiates to the carotids?", "Aortic stenosis", ["Mitral regurgitation", "Mitral stenosis", "Tricuspid regurgitation"], "To carotids: AS."),
          q("Which murmur radiates to the left axilla?", "Mitral regurgitation", ["Aortic stenosis", "Aortic regurgitation", "Pulmonic stenosis"], "To left axilla: MR."),
          q("Why do some murmurs radiate?", "They project sound along the direction of blood flow", ["They are always grade 6", "The stethoscope picks up bone conduction", "They come from the pericardium"], "Murmurs project sound along the blood flow."),
          q("Where may pulmonic stenosis radiate?", "Left neck or left shoulder", ["Right carotid", "Left axilla", "Back"], "PS slide: may radiate to left neck or left shoulder."),
          q("Where may aortic regurgitation radiate?", "Apex", ["Carotids", "Left axilla", "Right shoulder"], "AR: best at left 2nd-4th ICS, may radiate to apex."),
          q("Which murmur does the lecture say has NO radiation?", "Mitral stenosis", ["Aortic stenosis", "Mitral regurgitation", "Pulmonic stenosis"], "MS: no radiation (TS also: no radiation).")],
        [q("A holosystolic murmur at the apex is also heard in the left armpit. What is it?", "Mitral regurgitation", ["Aortic stenosis", "Tricuspid regurgitation", "VSD"], "Apex + radiation to the left axilla = MR."),
          q("A systolic murmur at the right 2nd ICS is also heard over both sides of the neck. What is it?", "Aortic stenosis", ["Pulmonic stenosis", "Mitral regurgitation", "Venous hum"], "RUSB + radiation to the carotids = AS."),
          q("A harsh systolic murmur at the left 2nd ICS spreads toward the left shoulder. What is it?", "Pulmonic stenosis", ["Aortic stenosis", "Mitral regurgitation", "Aortic regurgitation"], "PS may radiate to the left neck or left shoulder.")]),
      C("Grading intensity: the 6-point scale (slides 44–45)",
        "<p><strong>Numerator</strong> = intensity of the murmur. <strong>Denominator</strong> = the scale you are using (<strong>always 6</strong>). Example documentation: <strong>Grade 2/6</strong>.</p>" +
        tbl(["Grade", "Description"], [
          ["<strong>1/6</strong>", "Faint; requires “<strong>tuning in</strong>”"],
          ["<strong>2/6</strong>", "Quiet, but <strong>heard immediately</strong>"],
          ["<strong>3/6</strong>", "<strong>Moderately loud</strong> (no thrill)"],
          ["<strong>4/6</strong>", "Loud <strong>+ thrill</strong>"],
          ["<strong>5/6</strong>", "Very loud + thrill; still audible with the stethoscope <strong>partly off the chest</strong>"],
          ["<strong>6/6</strong>", "Very loud + thrill; audible <strong>without a stethoscope</strong>"]]) +
        hy("A <strong>thrill starts at 4/6</strong>. 3/6 is the loudest murmur with <strong>no</strong> thrill. 5 = partly off; 6 = completely off."),
        ["grade-scale", "grade-thrill", "grade-5-vs-6", "grade-denominator"],
        [q("In 'grade 3/6,' what does the 6 represent?", "The scale being used, which is always 6", ["The number of beats counted", "The intercostal space", "The pitch"], "Denominator = the scale (always 6)."),
          q("What is the lowest grade that has a thrill?", "4/6", ["3/6", "5/6", "2/6"], "4/6: loud + thrill."),
          q("Which grade is faint and requires 'tuning in'?", "1/6", ["2/6", "3/6", "4/6"], "1/6: faint, requires tuning in."),
          q("Which grade is quiet but heard immediately?", "2/6", ["1/6", "3/6", "4/6"], "2/6: quiet but heard immediately."),
          q("Which grade is moderately loud without a thrill?", "3/6", ["2/6", "4/6", "5/6"], "3/6: moderately loud."),
          q("Which grade is still audible with the stethoscope partly off the chest?", "5/6", ["4/6", "6/6", "3/6"], "5/6: very loud, thrill, audible with the stethoscope partly off the chest."),
          q("Which grade is audible without a stethoscope?", "6/6", ["5/6", "4/6", "3/6"], "6/6: audible without a stethoscope."),
          q("How many points are on the murmur intensity scale?", "6", ["4", "5", "10"], "6-point scale.")],
        [q("You feel a vibration under your hand over a loud murmur, but you cannot hear it once the stethoscope lifts off the chest. What grade?", "4/6", ["3/6", "5/6", "6/6"], "Thrill present = at least 4; not audible partly off the chest = 4."),
          q("A murmur has a thrill and you can still hear it with the stethoscope tilted partly off the skin, but not with it fully off. Grade?", "5/6", ["4/6", "6/6", "3/6"], "Partly off = 5/6; fully off = 6/6."),
          q("A murmur is moderately loud, easy to hear, and there is no thrill. Grade?", "3/6", ["2/6", "4/6", "1/6"], "3/6 = moderately loud, no thrill."),
          q("You only hear a murmur after concentrating for several cycles. Grade?", "1/6", ["2/6", "3/6", "4/6"], "Requires tuning in = 1/6.")]),
      C("Pitch: bell vs diaphragm (slide 46)",
        "<p>Pitch can be <strong>high, medium, or low</strong>.</p>" +
        "<ul><li><strong>Press firm for high</strong>: firm pressure = <strong>diaphragm</strong> = high pitch</li>" +
        "<li><strong>Rest light for low</strong>: light touch = <strong>bell</strong> = low pitch</li></ul>" +
        tbl(["Bell (light touch, low)", "Diaphragm (firm, high)"], [["S3, S4 (“bell is best”)", "S1, S2, split S2"], ["Mitral stenosis rumble (“best heard at apex with bell”)", "Ejection click, midsystolic click, opening snap"], ["Tricuspid stenosis (rumble)", "AS, PS, MR, TR, AR, PR (all high-pitched)"], ["", "Pericardial friction rub (high-pitched)"]]) +
        mn("“<strong>Press firm for high, rest light for low.</strong>”"),
        ["pitch-levels", "diaphragm-high", "bell-low"],
        [q("Which part of the stethoscope picks up high-pitched sounds?", "Diaphragm, pressed firmly", ["Bell, rested lightly", "Bell, pressed firmly", "Tubing"], "Press firm for high: diaphragm."),
          q("Which part of the stethoscope picks up low-pitched sounds?", "Bell, resting lightly", ["Diaphragm, pressed firmly", "Diaphragm, resting lightly", "Earpieces"], "Rest light for low: bell."),
          q("What are the three pitch levels in the lecture?", "High, medium, low", ["Soft, loud, very loud", "Early, mid, late", "Harsh, blowing, rumbling"], "Pitch: high, medium, low."),
          q("Which murmur is classically LOW-pitched?", "Mitral stenosis", ["Aortic stenosis", "Mitral regurgitation", "Aortic regurgitation"], "MS: rumble, low-pitched, best with the bell."),
          q("Pressing the bell firmly against the skin turns it into a diaphragm. Based on the lecture, what should you do with the bell?", "Rest it lightly", ["Press it firmly", "Use it only for clicks", "Use it only at the base"], "Light touch = bell = low pitch.")],
        [q("You suspect mitral stenosis. Which stethoscope technique best brings out the rumble?", "Bell resting lightly at the apex", ["Diaphragm pressed firmly at the right 2nd ICS", "Diaphragm at the left axilla", "Bell pressed hard over the carotids"], "MS: best heard at apex with the bell."),
          q("You want to hear a high-pitched early diastolic decrescendo murmur. Which technique?", "Diaphragm pressed firmly", ["Bell resting lightly", "Bell pressed firmly over the apex in left lateral decubitus", "No stethoscope"], "AR is high-pitched: firm diaphragm.")]),
      C("Quality words (slide 47)",
        tbl(["Quality", "Usually means"], [
          ["<strong>Blowing</strong>", "<strong>Regurgitant</strong> murmurs (MR, TR, AR, PR; VSD can be blowing)"],
          ["<strong>Harsh</strong>", "<strong>Stenotic</strong> murmurs (AS, PS; also PDA and VSD)"],
          ["<strong>Rumbling</strong>", "<strong>Low-pitched diastolic</strong> murmurs (MS, TS)"],
          ["<strong>Musical / vibratory</strong>", "<strong>Innocent or Still’s</strong> murmur"],
          ["<strong>Scratchy / rub</strong>", "<strong>Pericardial friction rub</strong>"],
          ["<strong>Machinery</strong> (PDA slide)", "<strong>Patent ductus arteriosus</strong>"],
          ["<strong>Humming</strong> (venous hum slide)", "<strong>Venous hum</strong>"]]) +
        hy("These words are the biggest giveaways in a written stem. <strong>Harsh = stenosis. Blowing = regurgitation. Rumble = MS. Musical = Still’s. Scratchy = rub. Machinery = PDA. Hum = venous hum.</strong>"),
        ["quality-blowing", "quality-harsh", "quality-rumbling", "quality-musical", "quality-scratchy"],
        [q("A 'blowing' murmur usually means:", "Regurgitation", ["Stenosis", "Pericarditis", "Innocent flow"], "Blowing = usually regurgitant."),
          q("A 'harsh' murmur usually means:", "Stenosis", ["Regurgitation", "Venous hum", "Pericardial rub"], "Harsh = usually stenotic."),
          q("A 'rumbling' murmur usually means:", "A low-pitched diastolic murmur such as mitral stenosis", ["A high-pitched systolic murmur", "An innocent murmur", "A pericardial rub"], "Rumbling = low-pitched diastolic."),
          q("A 'musical' or 'vibratory' murmur usually means:", "Innocent (Still's) murmur", ["Aortic stenosis", "Pericardial friction rub", "Mitral stenosis"], "Musical/vibratory = innocent or Still's."),
          q("A 'scratchy' sound usually means:", "Pericardial friction rub", ["Mitral regurgitation", "Venous hum", "PDA"], "Scratchy/rub = pericardial friction rub."),
          q("Which murmur is described as a 'machinery' sound?", "Patent ductus arteriosus", ["Venous hum", "Still's murmur", "Mitral stenosis"], "PDA: harsh, continuous, machinery.")],
        [q("A stem describes a 'soft, musical, vibratory systolic murmur' in a healthy 5-year-old. What is it?", "Still's murmur", ["VSD", "Aortic stenosis", "PDA"], "Musical/vibratory in a child = Still's (innocent)."),
          q("A stem describes a 'blowing' holosystolic murmur at the apex. Is it stenosis or regurgitation?", "Regurgitation (MR)", ["Stenosis (MS)", "Stenosis (AS)", "Neither; it is a rub"], "Blowing = regurgitant; apex holosystolic = MR."),
          q("A stem describes a 'scratchy, high-pitched' sound with three components in a patient with chest pain after a viral illness. What is it?", "Pericardial friction rub", ["Aortic regurgitation", "Mitral stenosis", "Venous hum"], "Scratchy, high-pitched, up to three components = rub.")]),
      C("Augmentation and a full description (slides 48–49)",
        "<p><strong>Augmentation:</strong> some murmurs are classically <strong>increased or decreased</strong> by certain maneuvers: <strong>squatting, standing, Valsalva, leaning forward</strong> (plus inspiration, expiration, left lateral decubitus, supine and sitting on the individual slides; see section 13).</p>" +
        "<p><strong>Sample full description (slide 49):</strong></p>" +
        "<blockquote>“A <strong>harsh, high-pitched, grade 3/6 crescendo-decrescendo systolic</strong> murmur, heard best at the <strong>right 2nd intercostal space</strong>, with <strong>radiation to the carotids</strong>.” = <strong>Aortic stenosis</strong></blockquote>" +
        tbl(["Part of the description", "Framework step"], [["Harsh", "Quality (associated feature)"], ["High-pitched", "Pitch"], ["Grade 3/6", "Grade"], ["Crescendo-decrescendo", "Shape"], ["Systolic", "Timing"], ["Right 2nd ICS", "Location"], ["Radiation to carotids", "Associated feature"]]),
        ["augmentation-list", "sample-description"],
        [q("Which four maneuvers are listed on the augmentation slide?", "Squatting, standing, Valsalva, leaning forward", ["Running, jumping, coughing, sneezing", "Inspiration, expiration, sitting, lying", "Handgrip, amyl nitrite, phenylephrine, coughing"], "Slide 48: squatting, standing, Valsalva, leaning forward."),
          q("The lecture's sample description 'harsh, high-pitched, grade 3/6 crescendo-decrescendo systolic murmur at the right 2nd ICS radiating to the carotids' describes:", "Aortic stenosis", ["Pulmonic stenosis", "Mitral regurgitation", "Hypertrophic cardiomyopathy"], "Slide 49: aortic stenosis."),
          q("In the sample AS description, what grade is used?", "3/6", ["2/6", "4/6", "6/6"], "Grade 3/6.")],
        [q("Write-up: 'Blowing, high-pitched, holosystolic murmur, best at the apex, radiating to the left axilla.' What is the diagnosis?", "Mitral regurgitation", ["Tricuspid regurgitation", "Aortic stenosis", "VSD"], "Every word matches MR."),
          q("Write-up: 'Low-pitched diastolic rumble at the apex after an opening snap, no radiation, louder in left lateral decubitus.' Diagnosis?", "Mitral stenosis", ["Aortic regurgitation", "Tricuspid stenosis", "S3 gallop"], "Every word matches MS.")])
    ]),
    /* ---------- 8 ---------- */
    S("08-systolic-stenosis", "8. Systolic murmurs: aortic and pulmonic stenosis", "Slides 52–54: why stiff semilunar valves are systolic, then every detail of AS and PS and how to tell them apart.", [
      C("Aortic stenosis (AS)",
        "<ul><li><strong>Systolic</strong> murmur</li><li>Classically <strong>harsh, high-pitched, crescendo-decrescendo</strong></li>" +
        "<li><strong>Systolic ejection click</strong> present in <strong>early</strong> stenosis</li>" +
        "<li>When <strong>severe</strong>, may cause <strong>paradoxical split S2</strong></li>" +
        "<li>Best at the <strong>right 2nd intercostal space (RUSB)</strong> and <strong>radiates to the carotids</strong></li>" +
        "<li><strong>Loudest with squatting, softer with Valsalva</strong></li>" +
        "<li>Slide picture: the S2 after the murmur is labeled “<strong>may be decreased</strong>” (soft S2)</li>" +
        "<li>Also causes an <strong>S4</strong> (pressure overload) and is the lecture’s sample description (grade 3/6)</li></ul>" +
        dg({ x: ["EC"], m: [{ phase: "sys", shape: "diamond", from: 0.2, to: 0.95 }] }, "AS: ejection click, then a diamond murmur.") +
        hy("<strong>RUSB + carotids + harsh diamond</strong>. Squat = louder, Valsalva = softer. Severe = paradoxical split, soft S2."),
        ["as-description", "as-click", "as-paradoxical", "as-location-radiation", "as-maneuvers", "as-soft-s2"],
        [q("Classic quality, pitch and shape of aortic stenosis?", "Harsh, high-pitched, crescendo-decrescendo", ["Blowing, high-pitched, holosystolic", "Low-pitched rumble", "Blowing, early diastolic decrescendo"], "AS: harsh, high-pitched, crescendo-decrescendo."),
          q("Where is AS best heard?", "Right 2nd ICS (RUSB)", ["Left 2nd ICS (LUSB)", "Apex", "LLSB"], "AS: right 2nd intercostal space."),
          q("Where does AS radiate?", "Carotids", ["Left axilla", "Left shoulder", "Back"], "AS radiates to the carotids."),
          q("What does squatting do to the AS murmur?", "Makes it louder", ["Makes it softer", "Makes it disappear", "Moves it into diastole"], "AS: loudest with squatting."),
          q("What does Valsalva do to the AS murmur?", "Makes it softer", ["Makes it louder", "Adds a click", "No change"], "AS: softer with Valsalva."),
          q("In which stage of AS is a systolic ejection click present?", "Early stenosis", ["Only end-stage", "Never", "Only after valve replacement"], "Ejection click present in early stenosis."),
          q("Severe AS may cause which abnormal S2?", "Paradoxical split S2", ["Wide split S2", "Fixed split S2", "Loud S2"], "When severe, may cause paradoxical split S2."),
          q("On the AS slide picture, S2 is labeled as:", "May be decreased", ["Accentuated", "Widely split", "Absent S1"], "AS diagram: S2 may be decreased (soft).")],
        [q("A 74-year-old with exertional syncope has a harsh grade 3/6 crescendo-decrescendo systolic murmur at the right 2nd ICS that radiates to the neck. Diagnosis?", "Aortic stenosis", ["Mitral regurgitation", "Pulmonic stenosis", "Aortic regurgitation"], "Classic AS."),
          q("A patient's systolic murmur at the RUSB gets louder when they squat and softer with Valsalva. Which murmur?", "Aortic stenosis", ["Mitral valve prolapse", "Hypertrophic cardiomyopathy", "Venous hum"], "AS: loudest with squatting, softer with Valsalva."),
          q("Exam question: for a suspected AS murmur, which maneuver makes it louder?", "Squatting", ["Valsalva", "Standing", "Compressing the jugular vein"], "AS is loudest with squatting."),
          q("A patient with a diamond murmur at the RUSB has a soft S2 that splits on expiration. What does that suggest?", "Severe aortic stenosis", ["Mild aortic stenosis", "Physiologic splitting", "Pulmonic stenosis"], "Severe AS: decreased S2 and paradoxical split.")]),
      C("Pulmonic stenosis (PS)",
        "<ul><li><strong>Systolic</strong> murmur</li><li>Classically <strong>harsh, high-pitched, crescendo-decrescendo</strong> (same as AS)</li>" +
        "<li><strong>Systolic ejection click may be present</strong></li>" +
        "<li>Best heard at the <strong>left 2nd intercostal space (LUSB)</strong></li>" +
        "<li>May radiate to the <strong>left neck or left shoulder</strong></li>" +
        "<li><strong>Wide split S2</strong> may be present</li>" +
        "<li>Slide picture (mild → moderate → severe PS): the murmur gets longer and <strong>P2 moves farther from A2</strong></li></ul>" +
        dg({ s2: "wide", x: ["EC"], m: [{ phase: "sys", shape: "diamond", from: 0.2, to: 0.95 }] }, "PS: ejection click, diamond murmur, wide split S2."),
        ["ps-description", "ps-location", "ps-radiation", "ps-wide-split", "ps-click"],
        [q("Where is pulmonic stenosis best heard?", "Left 2nd ICS (LUSB)", ["Right 2nd ICS", "Apex", "LLSB"], "PS: left 2nd intercostal space."),
          q("Pulmonic stenosis may spread toward which area?", "Left neck or left shoulder", ["Carotids", "Left axilla", "Apex"], "PS may radiate to the left neck or left shoulder."),
          q("Which S2 finding goes with pulmonic stenosis?", "Wide split S2", ["Paradoxical split S2", "Absent split", "Accentuated S1"], "PS: wide split S2 may be present."),
          q("What is the classic description of the PS murmur?", "Harsh, high-pitched, crescendo-decrescendo systolic", ["Blowing, high-pitched, holosystolic", "Low-pitched diastolic rumble", "Scratchy, triphasic"], "Same description as AS."),
          q("Can pulmonic stenosis have an ejection click?", "Yes, a systolic ejection click may be present", ["No, only mitral stenosis has clicks", "No, only MVP has clicks", "Only in diastole"], "PS slide: systolic ejection click may be present.")],
        [q("A 10-year-old has a harsh crescendo-decrescendo systolic murmur loudest at the left 2nd ICS that spreads toward the left shoulder. Diagnosis?", "Pulmonic stenosis", ["Aortic stenosis", "Still's murmur", "VSD"], "LUSB + left shoulder/neck radiation = PS.")]),
      C("AS vs PS: same sound, different clues",
        tbl(["", "Aortic stenosis", "Pulmonic stenosis"], [
          ["Timing / shape", "Systolic, crescendo-decrescendo", "Systolic, crescendo-decrescendo"],
          ["Quality / pitch", "Harsh, high-pitched", "Harsh, high-pitched"],
          ["Click", "Ejection click in early stenosis", "Ejection click may be present"],
          ["Location", "<strong>Right</strong> 2nd ICS (RUSB)", "<strong>Left</strong> 2nd ICS (LUSB)"],
          ["Radiation", "<strong>Carotids</strong>", "<strong>Left neck / left shoulder</strong>"],
          ["S2", "Severe: <strong>paradoxical</strong> split; S2 may be decreased", "<strong>Wide</strong> split"],
          ["Maneuvers", "Louder squatting, softer Valsalva", "Not given in deck"]]) +
        hy("The sound is the same. The <strong>side</strong> (right vs left 2nd ICS), the <strong>radiation</strong> (carotids vs left neck/shoulder) and the <strong>split</strong> (paradoxical vs wide) decide it."),
        ["as-vs-ps"],
        [q("What is the single best location clue separating AS from PS?", "AS is right 2nd ICS; PS is left 2nd ICS", ["AS is apex; PS is LLSB", "AS is left 2nd ICS; PS is right 2nd ICS", "Both are at Erb's point"], "Right vs left upper sternal border."),
          q("Which split S2 points to PS rather than AS?", "Wide split", ["Paradoxical split", "Physiologic split", "No split"], "PS = wide; severe AS = paradoxical.")],
        [q("Two patients each have a harsh crescendo-decrescendo systolic murmur. Patient 1's radiates to the carotids; patient 2's radiates to the left shoulder. Which is which?", "Patient 1 aortic stenosis, patient 2 pulmonic stenosis", ["Patient 1 pulmonic stenosis, patient 2 aortic stenosis", "Both aortic stenosis", "Patient 1 MR, patient 2 TR"], "Carotids = AS; left neck/shoulder = PS.")])
    ]),

    /* ---------- 9 ---------- */
    S("09-systolic-regurg-mvp", "9. Systolic murmurs: MR, MVP and TR", "Slides 55–57: every detail of mitral regurgitation, mitral valve prolapse and tricuspid regurgitation, and how to tell MR from TR.", [
      C("Mitral regurgitation (MR)",
        "<ul><li><strong>Systolic</strong> murmur</li><li>Classically <strong>blowing, high-pitched, holosystolic</strong></li>" +
        "<li>Best heard at the <strong>apex</strong> and <strong>radiates to the left axilla</strong></li>" +
        "<li>Associated with <strong>S3 in severe cases</strong></li>" +
        "<li>Slide picture: S1 labeled “<strong>decreased</strong>,” with an <strong>S3</strong> after S2; the valve “doesn’t fully close and leaks”</li></ul>" +
        dg({ x: ["S3"], m: [{ phase: "sys", shape: "plateau", from: 0, to: 1 }] }, "MR: holosystolic plateau, soft S1, S3 when severe.") +
        hy("<strong>Apex + left axilla + blowing holosystolic.</strong>"),
        ["mr-description", "mr-location-radiation", "mr-s3", "mr-soft-s1"],
        [q("Classic description of mitral regurgitation?", "Blowing, high-pitched, holosystolic", ["Harsh, high-pitched, crescendo-decrescendo", "Low-pitched rumble", "Musical, vibratory"], "MR: blowing, high-pitched, holosystolic."),
          q("Where is MR best heard?", "Apex", ["Right 2nd ICS", "Left 2nd ICS", "Right supraclavicular"], "MR: best at the apex."),
          q("Where does MR radiate?", "Left axilla", ["Carotids", "Left shoulder", "Back"], "MR radiates to the left axilla."),
          q("Which extra heart sound is associated with severe MR?", "S3", ["S4", "Ejection click", "Opening snap"], "MR: associated with S3 in severe cases (volume overload)."),
          q("On the MR slide picture, which heart sound is labeled 'decreased'?", "S1", ["S2", "S3", "S4"], "MR diagram: decreased S1 (the mitral valve does not close fully).")],
        [q("A 66-year-old has a blowing, high-pitched holosystolic murmur at the apex radiating to the left axilla and a low sound after S2. What are the murmur and extra sound?", "Severe mitral regurgitation with an S3", ["Aortic stenosis with an S4", "Mitral stenosis with an opening snap", "MVP with a midsystolic click"], "Severe MR is associated with an S3."),
          q("Exam question: a holosystolic murmur at the apex that radiates to the axilla. Systolic or diastolic, and what lesion?", "Systolic, mitral regurgitation", ["Diastolic, mitral stenosis", "Systolic, aortic stenosis", "Diastolic, aortic regurgitation"], "Holosystolic apex to axilla = MR.")]),
      C("Mitral valve prolapse (MVP)",
        "<ul><li><strong>Systolic</strong> murmur</li><li>Classically <strong>mid-systolic click, ± late systolic murmur</strong></li>" +
        "<li><strong>Standing / Valsalva</strong> shifts the click/murmur <strong>earlier</strong> in systole; <strong>squatting</strong> shifts it <strong>later</strong></li>" +
        "<li>Best heard at the <strong>apex</strong></li>" +
        "<li><strong>All MVP can lead to MR, but not all MR is MVP</strong></li>" +
        "<li>Slide picture: prolapsed mitral leaflet bulging back into the left atrium; MSC then murmur up to S2</li></ul>" +
        dg({ x: ["MSC"], m: [{ phase: "sys", shape: "cresc", from: 0.6, to: 1 }] }, "MVP: midsystolic click, then late systolic murmur into S2.") +
        hy("Click in the <strong>middle</strong> of systole that <strong>moves</strong>: earlier with standing/Valsalva, later with squatting."),
        ["mvp-description", "mvp-maneuvers", "mvp-location", "mvp-mr-relation"],
        [q("What is the classic MVP finding?", "Mid-systolic click with or without a late systolic murmur", ["Opening snap with a diastolic rumble", "Ejection click with a diamond murmur", "Holosystolic murmur with an S3"], "MVP: mid-systolic click, ± late systolic murmur."),
          q("Where is MVP best heard?", "Apex", ["Right 2nd ICS", "LLSB", "Pulmonic area"], "MVP: best heard at apex."),
          q("Which statement about MVP and MR does the lecture make?", "All MVP can lead to MR, but not all MR is MVP", ["All MR is MVP", "MVP never causes MR", "MVP and MR are the same diagnosis"], "Slide 56."),
          q("Which maneuver shifts the MVP click LATER in systole?", "Squatting", ["Standing", "Valsalva", "Inspiration"], "Squatting shifts it later."),
          q("Which maneuvers shift the MVP click EARLIER in systole?", "Standing and Valsalva", ["Squatting and leg raise", "Leaning forward and exhaling", "Left lateral decubitus"], "Standing/Valsalva shift it earlier.")],
        [q("A 30-year-old with palpitations has an apical mid-systolic click and a short late systolic murmur. On standing, the click moves toward S1 and the murmur lengthens. Diagnosis?", "Mitral valve prolapse", ["Aortic stenosis", "Mitral stenosis", "Still's murmur"], "Moving click with standing = MVP."),
          q("A patient with MVP develops a long holosystolic murmur radiating to the axilla. What has happened?", "The MVP has led to mitral regurgitation", ["MVP has turned into aortic stenosis", "This is a normal flow murmur", "The patient now has a VSD"], "All MVP can lead to MR.")]),
      C("Tricuspid regurgitation (TR)",
        "<ul><li><strong>Systolic</strong> murmur</li><li>Classically <strong>blowing, high-pitched, holosystolic</strong> (same as MR)</li>" +
        "<li>Best heard at the <strong>LLSB</strong></li><li>Can also lead to an <strong>S3 in severe cases</strong></li>" +
        "<li><strong>Carvallo’s sign</strong>: murmur becomes <strong>louder during inspiration</strong></li>" +
        "<li>Slide picture: S1 labeled “<strong>decreased</strong>” with an S3 (same strip as MR)</li></ul>" +
        hy("<strong>Carvallo’s sign</strong> = TR gets louder with <strong>inspiration</strong> (more blood to the right heart)."),
        ["tr-description", "tr-location", "tr-carvallo", "tr-s3"],
        [q("Where is tricuspid regurgitation best heard?", "Left lower sternal border", ["Apex", "Right 2nd ICS", "Left axilla"], "TR: LLSB."),
          q("What is Carvallo's sign?", "The TR murmur gets louder during inspiration", ["The AS murmur gets louder with squatting", "The MVP click moves earlier on standing", "The rub gets louder on expiration"], "Carvallo's sign: TR louder with inspiration."),
          q("Classic description of TR?", "Blowing, high-pitched, holosystolic", ["Harsh, crescendo-decrescendo", "Low-pitched rumble", "Scratchy, triphasic"], "TR: blowing, high-pitched, holosystolic."),
          q("Which extra sound can severe TR cause?", "S3", ["S4", "Opening snap", "Ejection click"], "TR can also lead to an S3 in severe cases."),
          q("Why does TR get louder on inspiration?", "Inspiration sends more blood to the right side of the heart", ["Inspiration closes the tricuspid valve", "Inspiration slows the heart", "Inspiration increases left-sided flow"], "Same physiology as the physiologic split: more right-sided return on inspiration.")],
        [q("A patient with pulmonary hypertension has a blowing holosystolic murmur at the left lower sternal border that gets louder when he breathes in. Diagnosis and sign?", "Tricuspid regurgitation, Carvallo's sign", ["Mitral regurgitation, Carvallo's sign", "VSD, Kussmaul sign", "Aortic regurgitation, Austin Flint"], "LLSB holosystolic louder on inspiration = TR (Carvallo)."),
          q("Exam question: which maneuver increases the TR murmur?", "Inspiration", ["Expiration", "Valsalva", "Standing"], "Carvallo's sign.")]),
      C("MR vs TR (and VSD): three holosystolic murmurs",
        tbl(["", "MR", "TR", "VSD"], [
          ["Quality", "Blowing, high-pitched", "Blowing, high-pitched", "Harsh / blowing"],
          ["Location", "<strong>Apex</strong>", "<strong>LLSB</strong>", "<strong>3rd–5th ICS</strong> (left sternal border)"],
          ["Radiation", "<strong>Left axilla</strong>", "Not given", "Not given"],
          ["Breathing", "No change given", "<strong>Louder on inspiration</strong> (Carvallo)", "Not given"],
          ["Extra", "S3 when severe; S1 decreased", "S3 when severe; S1 decreased", "Congenital; L→R shunt"]]) +
        hy("Same holosystolic shape. <strong>Apex + axilla</strong> = MR. <strong>LLSB + inspiration</strong> = TR. <strong>Child, harsh, 3rd–5th ICS</strong> = VSD."),
        ["mr-vs-tr-vs-vsd"],
        [q("Which clue separates TR from MR?", "TR is at the LLSB and louder on inspiration", ["TR is at the apex and radiates to the axilla", "TR is diastolic", "TR is harsh and radiates to the carotids"], "TR: LLSB, Carvallo's sign. MR: apex, axilla."),
          q("Which holosystolic murmur is congenital?", "Ventricular septal defect", ["Mitral regurgitation", "Tricuspid regurgitation", "Mitral valve prolapse"], "VSD is a congenital septal defect.")],
        [q("A blowing holosystolic murmur gets louder each time the patient breathes in. MR or TR?", "TR", ["MR", "Neither; it is AS", "Both equally"], "Inspiration = right-sided = TR."),
          q("An infant has a harsh holosystolic murmur at the left 4th ICS. Which holosystolic murmur is most likely?", "VSD", ["MR", "TR", "MVP"], "Congenital, harsh, 3rd-5th ICS = VSD.")])
    ]),
    /* ---------- 10 ---------- */
    S("10-diastolic", "10. Diastolic murmurs: AR, PR, MS and TS (ARMS)", "Slides 58–61: why leaky semilunar and stiff AV valves are diastolic, then every detail of AR, PR, MS and the rare TS.", [
      C("Aortic regurgitation (AR)",
        "<ul><li><strong>Diastolic</strong> murmur</li><li>Classically <strong>blowing, high-pitched, early diastolic decrescendo</strong></li>" +
        "<li>Best at the <strong>left 2nd–4th ICS</strong> (Erb’s point region) and <strong>may radiate to the apex</strong></li>" +
        "<li><strong>Augment:</strong> patient <strong>leaning forward, exhale and hold</strong></li></ul>" +
        dg({ m: [{ phase: "dia", shape: "decresc", from: 0, to: 0.75 }] }, "AR: early diastolic decrescendo starting right at S2.") +
        hy("<strong>Leaning forward + exhale and hold</strong> brings out AR. The same lean-forward position brings out a rub."),
        ["ar-description", "ar-location", "ar-radiation", "ar-augment"],
        [q("Classic description of aortic regurgitation?", "Blowing, high-pitched, early diastolic decrescendo", ["Harsh, high-pitched, crescendo-decrescendo systolic", "Low-pitched mid-diastolic rumble", "Blowing holosystolic"], "AR: blowing, high-pitched, early diastolic decrescendo."),
          q("Where is AR best heard?", "Left 2nd to 4th ICS", ["Right 2nd ICS", "Apex", "Right supraclavicular"], "AR: best at left 2nd-4th ICS."),
          q("Which maneuver augments AR?", "Leaning forward, exhale and hold", ["Left lateral decubitus", "Squatting", "Inspiration"], "AR: pt leaning forward, exhale and hold."),
          q("Where may AR radiate?", "Apex", ["Carotids", "Left axilla", "Left shoulder"], "AR may radiate to the apex.")],
        [q("A 50-year-old with a wide pulse pressure has a soft blowing high-pitched murmur starting right after S2 at the left 3rd ICS, heard best when he sits up, leans forward and holds his breath after exhaling. Diagnosis?", "Aortic regurgitation", ["Mitral stenosis", "Pericardial friction rub", "Aortic stenosis"], "Early diastolic decrescendo with lean-forward/exhale augmentation = AR."),
          q("Exam question: to best hear an aortic regurgitation murmur, ask the patient to:", "Lean forward, exhale fully and hold", ["Lie on the left side", "Take a deep breath in and hold", "Squat"], "AR augment: lean forward, exhale and hold.")]),
      C("Pulmonic regurgitation (PR)",
        "<ul><li><strong>Diastolic</strong> murmur</li><li><strong>Similar</strong> to AR: <strong>blowing, high-pitched, early diastolic decrescendo</strong></li>" +
        "<li><strong>But gets louder with inspiration</strong> (right-sided)</li><li>Osmosis map: heard at <strong>Erb’s point</strong> with AR</li></ul>" +
        hy("AR vs PR sound the same. <strong>Inspiration louder = PR</strong> (right-sided). Lean forward / exhale = AR."),
        ["pr-description", "pr-inspiration", "ar-vs-pr"],
        [q("How does the PR murmur differ from AR on the slide?", "PR gets louder with inspiration", ["PR is a rumble", "PR is systolic", "PR radiates to the carotids"], "PR: similar blowing early diastolic decrescendo, but louder with inspiration."),
          q("Classic description of PR?", "Blowing, high-pitched, early diastolic decrescendo", ["Harsh crescendo-decrescendo systolic", "Low-pitched rumble with an opening snap", "Continuous machinery"], "Same description as AR."),
          q("Which maneuver separates PR from AR?", "Inspiration (PR gets louder)", ["Squatting (PR gets louder)", "Left lateral decubitus", "Standing"], "Right-sided murmurs grow louder with inspiration.")],
        [q("A patient has a blowing early diastolic decrescendo murmur at Erb's point that clearly increases with each breath in. AR or PR?", "Pulmonic regurgitation", ["Aortic regurgitation", "Mitral stenosis", "Tricuspid regurgitation"], "Inspiration louder = right-sided = PR.")]),
      C("Mitral stenosis (MS)",
        "<ul><li><strong>Diastolic</strong> murmur</li><li>Classically a <strong>rumble, low-pitched</strong>, with an <strong>opening snap after S2</strong></li>" +
        "<li>Best heard at the <strong>apex (with bell)</strong></li><li><strong>No radiation</strong></li>" +
        "<li><strong>Augment: left lateral decubitus</strong> positioning</li>" +
        "<li>Slide picture: S1 labeled “<strong>accentuated</strong>” (loud S1); after the OS the rumble fades, then rises again into S1</li></ul>" +
        dg({ x: ["OS"], m: [{ phase: "dia", shape: "rumble", from: 0.2, to: 0.95 }] }, "MS: opening snap, low rumble, loud S1.") +
        hy("<strong>OS + rumble + apex + bell + left lateral decubitus + no radiation + loud S1.</strong>"),
        ["ms-description", "ms-location", "ms-no-radiation", "ms-augment", "ms-loud-s1"],
        [q("Classic description of mitral stenosis?", "Low-pitched rumble with an opening snap after S2", ["High-pitched blowing holosystolic", "Harsh crescendo-decrescendo", "Musical vibratory"], "MS: rumble, low-pitched, opening snap after S2."),
          q("Where and with what is MS best heard?", "Apex with the bell", ["Right 2nd ICS with the diaphragm", "LLSB with the diaphragm", "Left 2nd ICS with the bell"], "MS: best at apex with bell."),
          q("Which position augments MS?", "Left lateral decubitus", ["Leaning forward", "Squatting", "Standing"], "MS: augment with left lateral decubitus positioning."),
          q("Where does MS radiate?", "It does not radiate", ["Left axilla", "Carotids", "Apex to back"], "MS: no radiation."),
          q("On the MS slide picture, S1 is labeled:", "Accentuated", ["Decreased", "Split", "Absent"], "MS diagram: accentuated (loud) S1.")],
        [q("A 38-year-old immigrant with prior rheumatic fever has dyspnea. At the apex, with the bell, you hear a snap after S2 and a low rumble that gets louder when she rolls onto her left side. Diagnosis?", "Mitral stenosis", ["Aortic regurgitation", "S3 from heart failure", "Tricuspid stenosis"], "Classic MS."),
          q("Exam question: which positioning best brings out a mitral stenosis murmur?", "Left lateral decubitus", ["Leaning forward after exhalation", "Supine with legs raised", "Standing"], "MS: augment with left lateral decubitus.")]),
      C("Tricuspid stenosis (rare) and the recall table",
        "<p><strong>Tricuspid stenosis (rare)</strong> may produce <strong>similar sounds</strong> to MS but:</p>" +
        "<ul><li>Loudest at the <strong>LLSB</strong></li><li>Louder <strong>with inspiration</strong></li><li><strong>No radiation</strong></li></ul>" +
        "<p><strong>Recall specific murmurs (slide 61, filled in):</strong></p>" +
        tbl(["Murmur", "Timing", "Description", "Location", "Radiation / extras / maneuvers"], [
          ["AS", "Systolic", "Harsh, high, crescendo-decrescendo", "Right 2nd ICS", "Carotids; SEC early; severe → paradoxical split; louder squat, softer Valsalva"],
          ["PS", "Systolic", "Harsh, high, crescendo-decrescendo", "Left 2nd ICS", "Left neck/shoulder; SEC may be present; wide split S2"],
          ["MR", "Systolic", "Blowing, high, holosystolic", "Apex", "Left axilla; S3 when severe"],
          ["MVP", "Systolic", "Midsystolic click ± late systolic murmur", "Apex", "Stand/Valsalva earlier; squat later"],
          ["TR", "Systolic", "Blowing, high, holosystolic", "LLSB", "Louder on inspiration (Carvallo); S3 when severe"],
          ["AR", "Diastolic", "Blowing, high, early decrescendo", "Left 2nd–4th ICS", "May radiate to apex; lean forward, exhale and hold"],
          ["PR", "Diastolic", "Blowing, high, early decrescendo", "(Erb’s point)", "Louder with inspiration"],
          ["MS", "Diastolic", "Low rumble after opening snap", "Apex (bell)", "No radiation; left lateral decubitus"],
          ["TS", "Diastolic", "Rumble like MS (rare)", "LLSB", "No radiation; louder with inspiration"]]) +
        mn("Diastolic = <strong>ARMS</strong>. Right-sided murmurs (<strong>TR, PR, TS</strong>) get <strong>louder with inspiration</strong>."),
        ["ts-description", "recall-table", "right-sided-inspiration"],
        [q("Where is tricuspid stenosis loudest?", "Left lower sternal border", ["Apex", "Right 2nd ICS", "Left axilla"], "TS: loudest at LLSB."),
          q("How does the lecture describe how common tricuspid stenosis is?", "Rare", ["The most common valve lesion", "Common in athletes", "Common in newborns"], "Tricuspid stenosis (rare)."),
          q("What happens to the TS murmur with inspiration?", "It gets louder", ["It gets softer", "It disappears", "It moves into systole"], "TS: louder with inspiration."),
          q("Which three right-sided murmurs in the deck get louder with inspiration?", "TR, PR, TS", ["AS, MR, MS", "AR, MR, MVP", "PDA, VSD, Still's"], "TR (Carvallo), PR, TS: louder with inspiration."),
          q("Which two diastolic murmurs have no radiation?", "Mitral stenosis and tricuspid stenosis", ["AR and PR", "AS and PS", "MR and TR"], "MS: no radiation; TS: no radiation.")],
        [q("A patient has a low diastolic rumble at the left lower sternal border that increases with inspiration and does not radiate. Diagnosis?", "Tricuspid stenosis", ["Mitral stenosis", "Aortic regurgitation", "Tricuspid regurgitation"], "LLSB rumble louder on inspiration = TS."),
          q("A diastolic rumble with an opening snap is heard. It is loudest at the apex and does not change with breathing. MS or TS?", "Mitral stenosis", ["Tricuspid stenosis", "Pulmonic regurgitation", "Aortic regurgitation"], "Apex, no inspiratory change = MS.")])
    ]),

    /* ---------- 11 ---------- */
    S("11-pda-vsd", "11. The others: PDA and VSD", "Slides 63 and 66: the two congenital shunts, their sounds, locations and why they make noise.", [
      C("Patent ductus arteriosus (PDA)",
        "<ul><li><strong>Systolic + diastolic</strong> murmur</li><li>Classically <strong>harsh, continuous, “machinery”</strong> sound</li>" +
        "<li><strong>Crescendo during systole, decrescendo during diastole</strong> (peaks at S2)</li>" +
        "<li>Best heard at the <strong>pulmonic position</strong> (left 2nd ICS)</li><li><strong>Congenital: newborns</strong></li>" +
        "<li>Slide picture: the <strong>ductus arteriosus</strong> stays open between the <strong>aorta and pulmonary artery</strong> instead of closing after birth, so blood flows aorta → pulmonary artery the whole cycle</li></ul>" +
        dg({ m: [{ phase: "cont", shape: "", from: 0, to: 1 }] }, "PDA: continuous, crescendo to S2, decrescendo after.") +
        hy("<strong>Machinery + continuous + newborn + pulmonic area</strong> = PDA."),
        ["pda-description", "pda-shape", "pda-location", "pda-congenital", "pda-mechanism"],
        [q("Classic description of a PDA murmur?", "Harsh, continuous, machinery", ["Soft, musical, vibratory", "Scratchy, triphasic", "Blowing, early diastolic"], "PDA: harsh, continuous, machinery sound."),
          q("What is the shape of a PDA murmur?", "Crescendo during systole, decrescendo during diastole", ["Decrescendo during systole, crescendo during diastole", "Plateau through systole only", "Diamond in mid-systole only"], "PDA: crescendo in systole, decrescendo in diastole."),
          q("Where is a PDA best heard?", "Pulmonic position (left 2nd ICS)", ["Apex", "Right supraclavicular", "LLSB"], "PDA: best at the pulmonic position."),
          q("Who classically has a PDA?", "Newborns (congenital)", ["Elderly with hypertension", "Athletes", "Pregnant women"], "Congenital: newborns."),
          q("Is a PDA systolic, diastolic or both?", "Both (continuous)", ["Systolic only", "Diastolic only", "Neither"], "Systolic + diastolic murmur."),
          q("A PDA connects which two vessels?", "Aorta and pulmonary artery", ["Aorta and vena cava", "Pulmonary artery and left atrium", "Right and left ventricles"], "The ductus arteriosus joins the aorta and pulmonary artery.")],
        [q("A premature newborn has a continuous machinery murmur loudest at the left 2nd ICS. Diagnosis?", "Patent ductus arteriosus", ["Venous hum", "VSD", "Still's murmur"], "Continuous machinery murmur in a newborn at the pulmonic area = PDA."),
          q("Exam question: a murmur heard in both systole and diastole, building to S2 then fading, described as machinery-like. What is it?", "PDA", ["Pericardial friction rub", "Aortic stenosis", "Mitral regurgitation"], "PDA shape and quality.")]),
      C("Ventricular septal defect (VSD)",
        "<ul><li><strong>Systolic</strong> murmur</li><li>Classically <strong>holosystolic, harsh/blowing</strong></li>" +
        "<li>Best heard at the <strong>3rd–5th ICS</strong> (left sternal border)</li>" +
        "<li><strong>Congenital</strong>: the ventricular septum <strong>fails to close normally</strong> and blood is <strong>shunted from the left ventricle directly into the right ventricle</strong></li>" +
        "<li>Osmosis map: VSD sits with TR at the <strong>tricuspid area</strong> (holosystolic)</li></ul>" +
        dg({ m: [{ phase: "sys", shape: "plateau", from: 0, to: 1 }] }, "VSD: holosystolic.") +
        hy("Why holosystolic? LV pressure beats RV pressure for <strong>all of systole</strong>, so blood shunts left → right from S1 to S2."),
        ["vsd-description", "vsd-location", "vsd-mechanism", "vsd-shunt-direction"],
        [q("Classic description of a VSD murmur?", "Holosystolic, harsh or blowing", ["Early diastolic decrescendo", "Continuous machinery", "Mid-systolic click"], "VSD: holosystolic, harsh/blowing."),
          q("Where is a VSD best heard?", "3rd to 5th ICS", ["Right 2nd ICS", "Apex only", "Right supraclavicular"], "VSD: best heard at 3rd-5th ICS."),
          q("Which way does blood shunt in a VSD?", "Left ventricle to right ventricle", ["Right ventricle to left ventricle", "Aorta to pulmonary artery", "Left atrium to right atrium"], "Blood is shunted from the LV directly into the RV."),
          q("What is the cause of a VSD?", "The ventricular septum fails to close normally (congenital)", ["Rheumatic fever", "Myocardial infarction only", "Pericarditis"], "Congenital failure of septal closure."),
          q("Is a VSD murmur systolic or diastolic?", "Systolic", ["Diastolic", "Continuous", "Both systolic and diastolic"], "VSD: systolic murmur.")],
        [q("A 6-week-old with poor feeding has a harsh holosystolic murmur at the left 4th ICS. Diagnosis?", "Ventricular septal defect", ["PDA", "Still's murmur", "Aortic stenosis"], "Harsh holosystolic at 3rd-5th ICS in an infant = VSD."),
          q("Exam question: which pathophysiology explains a VSD murmur?", "Blood shunts from the high-pressure LV into the RV through a septal hole throughout systole", ["Blood flows backward through a leaky mitral valve", "Blood flows from the aorta to the pulmonary artery in both phases", "A stiff aortic valve resists opening"], "L to R shunt through the septum.")]),
      C("PDA vs VSD vs MR",
        tbl(["", "PDA", "VSD", "MR"], [["Timing", "Systolic + diastolic (continuous)", "Holosystolic", "Holosystolic"], ["Quality", "Harsh machinery", "Harsh / blowing", "Blowing"], ["Location", "Pulmonic position", "3rd–5th ICS", "Apex → axilla"], ["Who", "Newborn", "Congenital (infant/child)", "Adult"], ["Mechanism", "Open duct aorta → PA", "LV → RV shunt", "Leaky mitral valve"]]),
        ["pda-vs-vsd"],
        [q("Which congenital lesion is continuous and which is holosystolic?", "PDA is continuous; VSD is holosystolic", ["VSD is continuous; PDA is holosystolic", "Both are continuous", "Both are diastolic"], "PDA: systolic + diastolic; VSD: systolic.")],
        [q("Two infants: one has a continuous machinery murmur at the left 2nd ICS; the other has a harsh holosystolic murmur at the left 4th ICS. Which is which?", "First PDA, second VSD", ["First VSD, second PDA", "Both PDA", "First Still's, second venous hum"], "Continuous at pulmonic area = PDA; holosystolic at 3rd-5th ICS = VSD.")])
    ]),

    /* ---------- 12 ---------- */
    S("12-benign-and-rub", "12. The others: Still's murmur, venous hum, friction rub", "Slides 64–65 and 67: the two benign pediatric murmurs, the pericardial friction rub, and the 'others' recall table.", [
      C("Still’s murmur (innocent murmur)",
        "<ul><li><strong>Innocent murmur: Still’s murmur (most common)</strong> benign pediatric murmur</li>" +
        "<li><strong>Systolic</strong> murmur, described as <strong>soft, musical or vibratory</strong></li>" +
        "<li><strong>Loudest at left sternal border / apex</strong> and <strong>supine</strong></li>" +
        "<li><strong>Disappears with standing</strong></li>" +
        "<li>Slide picture: Still’s drawn along the lower left sternal border toward the apex</li></ul>" +
        hy("<strong>Child + musical/vibratory + louder lying down + gone when standing</strong> = Still’s. Innocent: no workup needed."),
        ["stills-description", "stills-location", "stills-position", "stills-most-common"],
        [q("What is the most common innocent murmur?", "Still's murmur", ["Venous hum", "Pulmonary flow murmur", "Carotid bruit"], "Innocent murmur: Still's murmur (most common)."),
          q("How is Still's murmur described?", "Soft, musical or vibratory systolic", ["Harsh, continuous, machinery", "Scratchy, triphasic", "Blowing diastolic"], "Systolic, soft, musical or vibratory."),
          q("Where is Still's murmur loudest?", "Left sternal border / apex", ["Right supraclavicular", "Right 2nd ICS", "Left axilla"], "Loudest at LSB/apex."),
          q("In which position is Still's murmur loudest?", "Supine", ["Standing", "Sitting up", "Leaning forward"], "Loudest supine."),
          q("What happens to Still's murmur when the child stands?", "It disappears", ["It gets louder", "It becomes continuous", "It moves to the neck"], "Disappears with standing."),
          q("Is Still's murmur systolic or diastolic?", "Systolic", ["Diastolic", "Continuous", "Both"], "Still's: systolic.")],
        [q("A healthy 4-year-old at a well visit has a soft, musical systolic murmur at the left lower sternal border that is loudest lying down and gone when she stands. Diagnosis?", "Still's murmur", ["VSD", "Venous hum", "Pulmonic stenosis"], "Classic Still's."),
          q("Exam question: a vibratory systolic murmur in a child disappears on standing. Is it innocent or pathologic?", "Innocent (Still's murmur)", ["Pathologic (VSD)", "Pathologic (AS)", "Pathologic (HCM)"], "Still's is benign.")]),
      C("Venous hum",
        "<ul><li>Benign (pediatric) murmur</li><li><strong>Systolic + diastolic</strong> murmur</li>" +
        "<li>Classically a <strong>continuous, soft, humming</strong> murmur</li>" +
        "<li><strong>Louder</strong>: <strong>right supraclavicular</strong> area and <strong>sitting up</strong></li>" +
        "<li><strong>Disappears</strong>: <strong>supine</strong>, or <strong>compressing the jugular veins</strong>, or <strong>head rotated</strong></li>" +
        "<li>Slide picture: venous hum drawn over the right supraclavicular area, running S1 → S2 → through diastole (other benign spots on the same picture: carotid bruit in the neck, pulmonary flow at the upper left sternal border)</li></ul>" +
        hy("Venous hum and Still’s behave <strong>opposite</strong>: hum is <strong>louder sitting, gone supine</strong>; Still’s is <strong>louder supine, gone standing</strong>."),
        ["hum-description", "hum-location", "hum-louder", "hum-disappears"],
        [q("How is a venous hum described?", "Continuous, soft, humming", ["Harsh machinery", "Musical systolic", "Scratchy triphasic"], "Continuous, soft humming murmur."),
          q("Where is a venous hum loudest?", "Right supraclavicular area", ["Apex", "Left 2nd ICS", "Left lower sternal border"], "Louder right supraclavicular."),
          q("In which position is a venous hum louder?", "Sitting up", ["Supine", "Left lateral decubitus", "Squatting"], "Louder sitting up."),
          q("Which maneuvers make a venous hum disappear?", "Lying supine, compressing the jugular veins, or rotating the head", ["Sitting up and leaning forward", "Inspiration and standing", "Squatting and Valsalva"], "Disappears supine or with jugular compression/head rotated."),
          q("Is a venous hum systolic, diastolic or both?", "Both (continuous)", ["Systolic only", "Diastolic only", "Neither"], "Systolic + diastolic murmur."),
          q("Is a venous hum benign or pathologic?", "Benign (pediatric)", ["Pathologic, needs surgery", "Pathologic, means PDA", "Pathologic, means heart failure"], "Listed under benign (pediatric) murmurs.")],
        [q("A 6-year-old has a soft continuous hum below the right clavicle while sitting. It vanishes when you press on his right jugular vein. Diagnosis?", "Venous hum", ["PDA", "Carotid bruit", "Still's murmur"], "Right supraclavicular, continuous, gone with jugular compression = venous hum."),
          q("A continuous murmur in a child: how do you separate a venous hum from a PDA at the bedside?", "Lay the child supine or compress the jugular vein; a venous hum disappears", ["Have the child squat; a PDA disappears", "Listen with the bell; a PDA disappears", "Check for an S3"], "Venous hum disappears supine or with jugular compression; a PDA does not.")]),
      C("Pericardial friction rub",
        "<ul><li><strong>Systolic + diastolic</strong></li><li>Classically <strong>scratchy, high-pitched</strong>; <strong>mono-, bi-, or tri-phasic</strong></li>" +
        "<li>Best heard at the <strong>LSB, when leaning forward</strong></li>" +
        "<li><strong>Increases with expiration</strong></li>" +
        "<li>Slide picture: the three components are <strong>ventricular systole, ventricular diastole, and atrial systole</strong></li></ul>" +
        hy("<strong>Scratchy + up to 3 parts + lean forward + louder on expiration</strong> = rub (pericarditis)."),
        ["rub-description", "rub-phases", "rub-location", "rub-expiration", "rub-components"],
        [q("How is a pericardial friction rub described?", "Scratchy, high-pitched; mono-, bi-, or tri-phasic", ["Soft, musical, vibratory", "Low-pitched rumble", "Harsh machinery"], "Rub: scratchy, high-pitched, 1-3 phases."),
          q("Where and how is a rub best heard?", "Left sternal border with the patient leaning forward", ["Apex in left lateral decubitus", "Right supraclavicular sitting up", "Right 2nd ICS while squatting"], "Best heard at LSB when leaning forward."),
          q("What does expiration do to a pericardial friction rub?", "Makes it louder", ["Makes it disappear", "Makes it softer", "No change"], "Increases with expiration."),
          q("What are the three components of a triphasic rub?", "Ventricular systole, ventricular diastole, atrial systole", ["S1, S2, S3", "Early, mid and late systole", "Inspiration, expiration, breath-hold"], "Slide picture labels."),
          q("Is a friction rub systolic, diastolic or both?", "Both", ["Systolic only", "Diastolic only", "Neither"], "Systolic + diastolic.")],
        [q("A 25-year-old with sharp chest pain that improves sitting forward, after a recent viral illness, has a scratchy three-part sound at the left sternal border, louder on expiration. What is the sound?", "Pericardial friction rub", ["Aortic regurgitation", "Mitral regurgitation", "Venous hum"], "Scratchy, triphasic, lean forward, expiration = rub."),
          q("Exam question: both AR and a friction rub are best heard leaning forward. Which breathing clue fits the rub?", "Louder with expiration", ["Louder with inspiration", "Disappears with breath-holding", "Louder with Valsalva"], "Rub increases with expiration; AR is augmented by exhale and hold.")]),
      C("Recall the others (slide 67 table, filled in)",
        tbl(["", "Timing", "Description", "Where / position", "Key clue"], [
          ["<strong>PDA</strong>", "Systolic + diastolic", "Harsh, continuous machinery; crescendo in systole, decrescendo in diastole", "Pulmonic position", "Congenital, newborns"],
          ["<strong>Still’s</strong>", "Systolic", "Soft, musical / vibratory", "LSB / apex, louder supine", "Disappears standing; most common innocent murmur"],
          ["<strong>Venous hum</strong>", "Systolic + diastolic", "Continuous, soft humming", "Right supraclavicular, louder sitting up", "Disappears supine, jugular compression, head rotated"],
          ["<strong>Friction rub</strong>", "Systolic + diastolic", "Scratchy, high-pitched, 1–3 phases", "LSB, leaning forward", "Louder on expiration"],
          ["<strong>VSD</strong>", "Systolic", "Holosystolic, harsh / blowing", "3rd–5th ICS", "Congenital LV → RV shunt"]]) +
        hy("Three of the five are <strong>systolic + diastolic</strong>: PDA, venous hum, rub. Two are <strong>systolic only</strong>: Still’s, VSD."),
        ["others-table", "others-timing"],
        [q("Which of the 'others' are systolic + diastolic?", "PDA, venous hum, friction rub", ["Still's and VSD", "PDA and VSD", "Only the rub"], "PDA, venous hum, rub: systolic + diastolic."),
          q("Which of the 'others' are systolic only?", "Still's murmur and VSD", ["PDA and venous hum", "Rub and PDA", "Venous hum only"], "Still's and VSD are systolic."),
          q("Which two of the 'others' are benign pediatric murmurs?", "Still's murmur and venous hum", ["PDA and VSD", "Rub and PDA", "VSD and Still's"], "Benign (pediatric) murmurs slide: Still's and venous hum.")],
        [q("Exam question: which of these is NOT a continuous (systolic + diastolic) sound: PDA, venous hum, friction rub, VSD?", "VSD", ["PDA", "Venous hum", "Friction rub"], "VSD is holosystolic only.")])
    ]),
    /* ---------- 13 ---------- */
    S("13-maneuvers", "13. Every maneuver in one place", "Review across the deck: breathing, squatting, standing and Valsalva, leaning forward, left lateral decubitus, supine vs sitting, jugular compression, and stethoscope technique.", [
      C("Breathing: inspiration, expiration, holding",
        tbl(["Maneuver", "What changes"], [
          ["<strong>Inspiration</strong>", "Physiologic split S2 appears (P2 delayed). <strong>TR louder</strong> (Carvallo’s sign). <strong>PR louder.</strong> <strong>TS louder.</strong>"],
          ["<strong>Expiration</strong>", "<strong>Pericardial friction rub louder.</strong> Physiologic split closes."],
          ["<strong>Exhale and hold</strong> (with leaning forward)", "<strong>AR louder.</strong>"],
          ["<strong>Hold breath</strong>", "Physiologic split disappears. Used to hear <strong>S3 and S4</strong> (bell, quiet room, hold breath)."]]) +
        hy("<strong>Inspiration = right side louder</strong> (TR, PR, TS, P2 split). <strong>Expiration = rub</strong> (and exhale-and-hold for AR)."),
        ["inspiration", "expiration", "breath-hold"],
        [q("Which murmurs get louder with inspiration in this lecture?", "TR, PR, TS", ["AS, MR, MS", "AR and the rub", "MVP and HCM"], "Right-sided murmurs: TR (Carvallo), PR, TS."),
          q("Which sound in this lecture gets louder with expiration?", "Pericardial friction rub", ["Tricuspid regurgitation", "Physiologic split S2", "Venous hum"], "Rub increases with expiration."),
          q("Which murmur is augmented by leaning forward and exhaling and holding?", "Aortic regurgitation", ["Mitral stenosis", "Tricuspid regurgitation", "Still's murmur"], "AR: leaning forward, exhale and hold."),
          q("Why ask the patient to hold their breath when listening for S3 and S4?", "The slides say bell, quiet room, hold breath: breath sounds hide these soft low sounds", ["Holding breath creates the S3", "Holding breath makes S4 normal", "It turns the S3 into an opening snap"], "Slide 20 and 22: bell is best, quiet room, hold breath.")],
        [q("You hear a holosystolic murmur and are unsure if it is MR or TR. What single breathing maneuver helps most?", "Have the patient breathe in: TR gets louder", ["Have the patient exhale and hold: TR gets louder", "Have the patient hold their breath: MR disappears", "Have the patient breathe fast"], "Carvallo's sign separates TR from MR."),
          q("Exam question: a sound that gets louder when the patient breathes out and leans forward, with a scratchy quality. What is it?", "Pericardial friction rub", ["Pulmonic regurgitation", "Tricuspid stenosis", "Physiologic split S2"], "Rub: LSB leaning forward, louder with expiration.")]),
      C("Squatting vs standing / Valsalva",
        tbl(["Maneuver", "Aortic stenosis", "MVP click and murmur", "Still’s"], [
          ["<strong>Squatting</strong>", "<strong>Louder</strong>", "Click <strong>later</strong>, murmur <strong>shorter</strong>", "—"],
          ["<strong>Standing</strong>", "(softer)", "Click <strong>earlier</strong>, murmur <strong>longer</strong>", "<strong>Disappears</strong>"],
          ["<strong>Valsalva</strong>", "<strong>Softer</strong>", "Click <strong>earlier</strong>, murmur <strong>longer</strong>", "—"]]) +
        "<p>Why: squatting <strong>adds</strong> blood to the heart (more flow across a stiff aortic valve, bigger LV so the mitral leaflet prolapses later). Standing and Valsalva <strong>remove</strong> blood (less flow across the AS valve; smaller LV so the leaflet prolapses sooner).</p>" +
        hy("AS and MVP move in <strong>opposite</strong> directions: squatting makes AS <strong>louder</strong> but MVP <strong>shorter</strong>; Valsalva makes AS <strong>softer</strong> but MVP <strong>longer</strong>."),
        ["squat", "stand-valsalva"],
        [q("Squatting makes the AS murmur:", "Louder", ["Softer", "Disappear", "Earlier"], "AS: loudest with squatting."),
          q("Valsalva makes the AS murmur:", "Softer", ["Louder", "Longer", "Continuous"], "AS: softer with Valsalva."),
          q("Squatting makes the MVP murmur:", "Shorter, with a later click", ["Longer, with an earlier click", "Louder and holosystolic", "Disappear completely"], "Squatting: click later, murmur shorter."),
          q("Standing makes the MVP murmur:", "Longer, with an earlier click", ["Shorter, with a later click", "Disappear", "Diastolic"], "Standing/Valsalva: click earlier, murmur longer."),
          q("Which murmur disappears with standing?", "Still's murmur", ["Venous hum", "Aortic stenosis", "PDA"], "Still's: disappears with standing.")],
        [q("Exam question: a systolic murmur gets longer and its click moves earlier with Valsalva. A different systolic murmur gets softer with Valsalva. Which pair?", "First MVP, second aortic stenosis", ["First AS, second MVP", "Both MVP", "First Still's, second PDA"], "MVP lengthens with Valsalva; AS softens."),
          q("A teenager's systolic murmur gets louder when she squats from standing. Which lesion from this lecture fits?", "Aortic stenosis", ["Mitral valve prolapse", "Still's murmur", "Venous hum"], "AS is loudest with squatting; MVP gets shorter and Still's goes away when standing, not louder squatting.")]),
      C("Positions: leaning forward, left lateral decubitus, supine vs sitting, neck",
        tbl(["Position / maneuver", "Brings out", "Makes disappear"], [
          ["<strong>Leaning forward</strong>", "<strong>AR</strong> (with exhale and hold), <strong>friction rub</strong>", "—"],
          ["<strong>Left lateral decubitus</strong>", "<strong>Mitral stenosis</strong>", "—"],
          ["<strong>Supine</strong>", "<strong>Still’s murmur</strong> (loudest)", "<strong>Venous hum</strong>"],
          ["<strong>Sitting up</strong>", "<strong>Venous hum</strong>", "—"],
          ["<strong>Standing</strong>", "MVP (earlier, longer)", "<strong>Still’s murmur</strong>"],
          ["<strong>Compress jugular vein / rotate head</strong>", "—", "<strong>Venous hum</strong>"]]) +
        mn("Lean forward for the <strong>front</strong> of the heart: <strong>aortic</strong> valve and <strong>pericardium</strong>. Roll <strong>left</strong> to bring the <strong>apex</strong> (mitral) to the wall."),
        ["lean-forward", "left-lateral", "supine-sitting", "jugular-compression"],
        [q("Which position best brings out mitral stenosis?", "Left lateral decubitus", ["Leaning forward", "Standing", "Supine with head rotated"], "MS: augment with left lateral decubitus."),
          q("Which two sounds are best heard leaning forward?", "Aortic regurgitation and pericardial friction rub", ["Mitral stenosis and S3", "Still's murmur and venous hum", "MVP and AS"], "AR: lean forward, exhale, hold. Rub: LSB when leaning forward."),
          q("Lying flat (supine) makes which benign murmur loudest?", "Still's murmur", ["Venous hum", "Pericardial friction rub", "PDA"], "Still's: loudest supine; disappears standing. Venous hum does the opposite."),
          q("Which murmur disappears when the patient lies supine?", "Venous hum", ["Still's murmur", "Mitral stenosis", "Aortic regurgitation"], "Venous hum disappears supine."),
          q("What does compressing the jugular vein do to a venous hum?", "Makes it disappear", ["Makes it louder", "Makes it diastolic only", "No change"], "Disappears with jugular compression or head rotation.")],
        [q("Exam question: which maneuver would you use to best hear a mid-diastolic rumble at the apex?", "Left lateral decubitus", ["Leaning forward, exhale and hold", "Squatting", "Jugular compression"], "MS rumble: left lateral decubitus."),
          q("Exam question: a soft continuous murmur in a child is heard when sitting and is gone when lying down. What is it?", "Venous hum", ["Still's murmur", "PDA", "VSD"], "Venous hum: louder sitting up, disappears supine.")]),
      C("Stethoscope technique by sound",
        tbl(["Use the bell (light touch)", "Use the diaphragm (firm)"], [["S3, S4", "S1, S2, split S2"], ["Mitral stenosis rumble (apex, bell)", "Clicks and opening snap (high-pitched)"], ["Tricuspid stenosis", "AS, PS, MR, TR, AR, PR (high-pitched)"], ["", "Friction rub (high-pitched)"]]) +
        "<p>Plus: <strong>quiet room</strong> and <strong>breath-hold</strong> for gallops.</p>",
        ["bell-list", "diaphragm-list"],
        [q("Which of these is best heard with the bell?", "S4 gallop", ["Aortic regurgitation", "Ejection click", "Pericardial friction rub"], "Gallops are low-pitched: bell."),
          q("Which of these is best heard with the diaphragm?", "Aortic regurgitation", ["S3 gallop", "Mitral stenosis rumble", "S4 gallop"], "AR is high-pitched: diaphragm.")],
        [q("You switch from diaphragm to bell at the apex and a low sound just after S2 becomes clear. What did you most likely find?", "S3 gallop", ["Ejection click", "Aortic regurgitation", "Split S2"], "Low, early diastolic, heard better with the bell = S3.")])
    ]),

    /* ---------- 14 ---------- */
    S("14-word-clues", "14. Vignette giveaways: answer from the words", "Review across the deck: quality words, location and radiation words, patient clues, look-alike pairs, and what each of your 10 class recordings means.", [
      C("Word → answer",
        tbl(["If the stem says…", "Think"], [
          ["Harsh", "Stenosis (AS, PS); also PDA, VSD"], ["Blowing", "Regurgitation (MR, TR, AR, PR); VSD"], ["Rumble / rumbling", "Mitral stenosis (rarely TS)"],
          ["Musical / vibratory", "Still’s (innocent)"], ["Scratchy / rub / triphasic", "Pericardial friction rub"], ["Machinery", "PDA"], ["Humming, continuous, soft", "Venous hum"],
          ["Kentucky / lub-dub-ta", "S3"], ["Tennessee / ta-lub-dub", "S4"], ["Snap after S2", "Opening snap = MS"], ["Click in early systole", "Ejection click = AS (bicuspid) / PS"], ["Click in mid-systole", "MVP"],
          ["Radiates to carotids / neck", "AS"], ["Radiates to left axilla", "MR"], ["Radiates to left neck / shoulder", "PS"], ["Radiates to apex", "AR"], ["No radiation", "MS (or TS)"],
          ["Louder with inspiration", "TR (Carvallo), PR, TS; split S2"], ["Louder with expiration", "Rub"], ["Lean forward", "AR or rub"], ["Left lateral decubitus", "MS"],
          ["Louder squatting, softer Valsalva", "AS"], ["Click earlier with standing/Valsalva", "MVP"], ["Disappears standing", "Still’s"], ["Disappears supine / jugular compression", "Venous hum"],
          ["Holosystolic / pansystolic", "MR, TR, VSD"], ["Early diastolic decrescendo", "AR, PR"], ["Crescendo-decrescendo / diamond", "AS, PS"], ["Continuous", "PDA, venous hum"]]),
        ["word-quality", "word-radiation", "word-maneuver", "word-shape"],
        [q("A stem says 'radiates to the left axilla.' What murmur?", "Mitral regurgitation", ["Aortic stenosis", "Tricuspid regurgitation", "Pulmonic stenosis"], "Axilla = MR."),
          q("A stem says 'machinery-like.' What murmur?", "PDA", ["Venous hum", "AS", "Rub"], "Machinery = PDA."),
          q("A stem says 'rumbling diastolic murmur.' What murmur?", "Mitral stenosis", ["Aortic regurgitation", "Pulmonic regurgitation", "Still's"], "Rumble = MS."),
          q("A stem says 'Carvallo's sign present.' What murmur?", "Tricuspid regurgitation", ["Mitral regurgitation", "Aortic stenosis", "Mitral stenosis"], "Carvallo = TR louder on inspiration."),
          q("A stem says 'murmur disappears when the patient's head is turned.' What murmur?", "Venous hum", ["Still's murmur", "Carotid bruit from AS", "PDA"], "Venous hum disappears with head rotation or jugular compression."),
          q("A stem says 'early diastolic decrescendo, louder with inspiration.' What murmur?", "Pulmonic regurgitation", ["Aortic regurgitation", "Tricuspid stenosis", "Mitral stenosis"], "PR: like AR, but louder with inspiration."),
          q("A stem says 'pansystolic.' Which murmurs fit?", "MR, TR, VSD", ["AS, PS", "AR, PR", "MS, TS"], "Pansystolic = holosystolic.")],
        [q("Stem: 'harsh crescendo-decrescendo systolic murmur at the left upper sternal border with a widely split S2.' Answer?", "Pulmonic stenosis", ["Aortic stenosis", "ASD", "VSD"], "LUSB diamond + wide split = PS."),
          q("Stem: 'blowing holosystolic murmur at the left lower sternal border that increases with inspiration.' Answer?", "Tricuspid regurgitation", ["Mitral regurgitation", "VSD", "Pulmonic regurgitation"], "LLSB + inspiration = TR."),
          q("Stem: 'high-pitched blowing diastolic murmur at the left 3rd ICS, best with the patient leaning forward after full exhalation.' Answer?", "Aortic regurgitation", ["Pericardial friction rub", "Mitral stenosis", "Pulmonic stenosis"], "AR details."),
          q("Stem: 'mid-systolic click followed by a late systolic murmur that lengthens with Valsalva.' Answer?", "Mitral valve prolapse", ["Aortic stenosis", "Bicuspid aortic valve", "Hypertrophic cardiomyopathy"], "MVP details.")]),
      C("Patient clues → answer",
        tbl(["Patient in the stem", "Think"], [
          ["Newborn / premature infant, continuous murmur", "PDA"], ["Infant or child, harsh holosystolic murmur", "VSD"], ["Healthy child, musical murmur, well visit", "Still’s"], ["Child, hum above right clavicle", "Venous hum"],
          ["Young athlete, pregnant woman, or young person with an extra sound after S2", "Normal S3"], ["CHF, dilated cardiomyopathy, fluid overload", "S3 (volume overload)"],
          ["Long-standing hypertension, HCM, aortic stenosis", "S4 (pressure overload)"], ["Bicuspid aortic valve", "Ejection click + crescendo-decrescendo murmur"],
          ["Thin young woman, palpitations, click", "MVP"], ["Elderly, syncope/dyspnea, murmur to the neck", "AS"], ["Chest pain better leaning forward after a virus", "Friction rub (pericarditis)"]]) +
        hy("Volume vs pressure is a favorite exam question: <strong>CHF/DCM = volume = S3</strong>; <strong>HTN/AS/HCM = pressure = S4</strong>."),
        ["patient-clues"],
        [q("Stem: a patient with long-standing hypertension has a gallop. Which gallop and which overload?", "S4, pressure overload", ["S3, volume overload", "S4, volume overload", "S3, pressure overload"], "HTN = stiff ventricle = S4 = pressure."),
          q("Stem: a patient with decompensated CHF has a gallop. Which gallop and which overload?", "S3, volume overload", ["S4, pressure overload", "S3, pressure overload", "S4, volume overload"], "CHF = S3 = volume."),
          q("Stem: a patient with a bicuspid aortic valve. Which extra sound is expected?", "Systolic ejection click", ["Opening snap", "Midsystolic click", "S3"], "SEC: esp. bicuspid aortic valve.")],
        [q("Stem: a 3-day-old premature baby has a continuous murmur. What is the most likely cause?", "PDA", ["Still's murmur", "Venous hum", "Mitral stenosis"], "Congenital newborn continuous = PDA."),
          q("Stem: a 21-year-old marathoner has an extra sound right after S2 and no symptoms. What do you tell her?", "It is likely a normal S3 in an athletic heart", ["It is an S4 and always abnormal", "She has mitral stenosis", "She needs urgent cardiology today"], "S3 is likely normal in athletes."),
          q("Stem: a 55-year-old with HCM. Which gallop is expected?", "S4", ["S3", "No gallop", "Opening snap"], "HCM: S4 (pressure, stiff ventricle).")]),
      C("Look-alike pairs and how to split them",
        tbl(["Pair", "Same", "The difference"], [
          ["S3 vs S4", "Low, bell, diastolic gallop", "S3 <strong>after S2</strong> (volume, Kentucky) vs S4 <strong>before S1</strong> (pressure, Tennessee)"],
          ["Split S2 vs opening snap vs S3", "Something right after S2", "Split: right on S2, inspiration only. OS: high, crisp, then rumble. S3: low, dull, bell"],
          ["Ejection click vs midsystolic click", "High-pitched systolic click", "SEC <strong>early</strong>, then diamond (stenosis). MSC <strong>mid</strong>, then late murmur, moves with standing/squatting (MVP)"],
          ["AS vs PS", "Harsh diamond systolic", "Right vs left 2nd ICS; carotids vs left neck/shoulder; paradoxical vs wide split"],
          ["MR vs TR", "Blowing holosystolic", "Apex + axilla vs LLSB + louder on inspiration"],
          ["MR/TR vs VSD", "Holosystolic", "VSD harsh, 3rd–5th ICS, congenital"],
          ["AR vs PR", "Blowing early diastolic decrescendo", "PR louder with inspiration; AR lean forward, exhale-hold, may radiate to apex"],
          ["MS vs TS", "Diastolic rumble", "Apex, left lateral decubitus vs LLSB, inspiration"],
          ["PDA vs venous hum", "Continuous", "PDA harsh machinery at pulmonic area in a newborn; hum soft, right supraclavicular, gone supine/jugular compression"],
          ["Still’s vs venous hum", "Benign pediatric", "Still’s systolic, musical, louder supine, gone standing; hum continuous, louder sitting, gone supine"],
          ["AR vs rub", "Both best leaning forward", "AR blowing diastolic (exhale and hold); rub scratchy, up to 3 parts, louder on expiration"]]),
        ["lookalikes"],
        [q("Both AR and PR are blowing early diastolic decrescendo murmurs. What separates PR?", "It gets louder with inspiration", ["It radiates to the carotids", "It is a rumble", "It is louder with squatting"], "PR: louder with inspiration."),
          q("Both PDA and venous hum are continuous. Which disappears when the child lies down?", "Venous hum", ["PDA", "Both", "Neither"], "Venous hum disappears supine."),
          q("Which click moves with standing and squatting?", "Midsystolic click (MVP)", ["Systolic ejection click", "Opening snap", "Neither click moves"], "MVP click shifts with maneuvers."),
          q("Still's and venous hum are both benign. Which is louder supine?", "Still's murmur", ["Venous hum", "Both", "Neither"], "Still's is loudest supine; venous hum disappears supine.")],
        [q("A sound right after S2 is high-pitched, crisp, and followed by a low rumble. Split S2, opening snap or S3?", "Opening snap", ["Split S2", "S3", "S4"], "OS then rumble = MS."),
          q("A sound right after S2 is low, dull, heard only with the bell, with no murmur after it. Split S2, opening snap or S3?", "S3", ["Opening snap", "Split S2", "Ejection click"], "Low and dull, bell = S3.")]),
      C("Your 10 class recordings: shape → meaning",
        "<p>Anna’s 10 class sounds (the real exam uses these sound types). Each shape and the diagnosis it means:</p>" +
        tbl(["Class recording", "Means"], [
          ["Baseline", "Normal S1 (mitral + tricuspid close) and S2 (aortic + pulmonic close)"],
          ["Split S2", "Physiologic split: inspiration delays pulmonic closure; normal"],
          ["S3", "Volume overload: CHF, DCM (normal in athletes, pregnancy, youth)"],
          ["S4", "Stiff ventricle / pressure overload: HTN, HCM, AS; always pathologic"],
          ["Opening snap", "Mitral stenosis (stenotic AV valve forced open)"],
          ["Holosystolic", "Mitral regurgitation (also TR, VSD by location)"],
          ["Diamond mid-systolic", "Aortic stenosis (PS at the left 2nd ICS)"],
          ["Systolic crescendo (late)", "MVP with MR, after a midsystolic click"],
          ["Systolic decrescendo (early)", "MR (the listening tool teaches this as acute MR; not on the slides)"],
          ["Mid-diastolic", "Mitral stenosis rumble"]]) +
        hy("Practice the actual audio in the <strong>Heart Sounds</strong> listening page; this card is just the word side of each one."),
        ["class-recordings"],
        [q("Which class recording shape means aortic stenosis?", "Diamond (crescendo-decrescendo) mid-systolic", ["Holosystolic", "Mid-diastolic", "Systolic crescendo (late)"], "Diamond mid-systolic = AS."),
          q("Which class recording shape means MVP?", "Late systolic crescendo after a click", ["Holosystolic", "Diamond", "Mid-diastolic"], "Late systolic murmur after an MSC = MVP with MR."),
          q("Which two class recordings both point to mitral stenosis?", "Opening snap and mid-diastolic rumble", ["S3 and S4", "Holosystolic and diamond", "Split S2 and baseline"], "OS and the rumble are both MS."),
          q("Which class recording shape means mitral regurgitation?", "Holosystolic", ["Diamond", "Mid-diastolic", "Opening snap"], "Holosystolic = MR (TR or VSD by location).")],
        [q("Exam clip question: a murmur fills all of systole at the apex in a patient whose murmur radiates to the axilla. Which class recording type is it?", "Holosystolic (MR)", ["Diamond (AS)", "Mid-diastolic (MS)", "Systolic crescendo (MVP)"], "Holosystolic apex to axilla = MR."),
          q("Exam clip question: a 70-year-old with syncope; the clip has a murmur that swells and fades between S1 and S2. Which class recording type?", "Diamond mid-systolic (AS)", ["Holosystolic (MR)", "Mid-diastolic (MS)", "Opening snap (MS)"], "Diamond = AS.")])
    ]),
  ];
})();
