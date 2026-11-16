/*
  Cardiac Surgery "from zero" lessons (engine: learn-path.js, figures: cardio3-learn.js).
  Anna asked (2026-11-16) for the same visual step-by-step path as "Learn EKG from zero" for every Cardio Part 3
  lecture, starting with Cardiac Surgery. Facts follow Gardner's deck (source-material/cardio-part-3/text/cardiac-surgery.md);
  anything not on the slides is marked "(standard teaching)". Analogies are teaching aids.
  Lesson ids (csl-*) are progress keys: never rename. Checks: K(prompt, answer, [wrong], why).
*/
(function () {
  "use strict";
  function K(prompt, answer, wrong, why) { return { prompt: prompt, answer: answer, wrong: wrong, why: why }; }
  function hy(x) { return '<div class="box-hy"><span class="lbl">Key idea</span>' + x + "</div>"; }
  function an(x) { return '<div class="box-mnemonic"><span class="lbl">Picture it</span>' + x + "</div>"; }
  function mn(x) { return '<div class="box-mnemonic"><span class="lbl">Mnemonic</span>' + x + "</div>"; }
  function std(x) { return '<div class="box-fix"><span class="lbl">Standard teaching</span>' + x + "</div>"; }
  function obj(id, mode, label, note) {
    return { label: label, note: note, objective: { course: "cardio-part-3", lecture: "cardiac-surgery", mode: mode, id: id } };
  }

  var parts = [
    { id: "p1", title: "Part 1 · Why and when to operate", blurb: "A blocked heart artery can be opened three ways. Learn the map of the arteries, then how surgeons decide between a stent and a bypass." },
    { id: "p2", title: "Part 2 · In the operating room", blurb: "How a heart-lung machine takes over, why the patient is cooled and the heart stopped with potassium, and which blood vessels make the best bypass grafts." },
    { id: "p3", title: "Part 3 · After surgery", blurb: "Who does badly, what goes wrong and why, how the ICU watches for it, and the three phone calls you need to be able to answer." }
  ];

  var lessons = [
    /* ---------------- 1 ---------------- */
    {
      id: "csl-three-fixes", part: "p1", title: "Three ways to open a blocked artery", goal: "Dissolve the clot, stretch the pipe, or build a detour.",
      pages: [
        { title: "The problem: a blocked pipe", fig: { type: "artery", stage: "occluded" },
          html: "<p>The heart muscle gets its blood from the <strong>coronary arteries</strong>. In coronary artery disease (CAD), fatty plaque narrows them, and a clot can shut one completely.</p>" +
            "<p>Everything downstream of the block is starving. Cardiac surgery's whole job in this lecture is getting blood <strong>past the block</strong>.</p>" },
        { title: "Fix 1: dissolve the clot (fibrinolysis)", fig: { type: "artery", stage: "tpa" },
          html: "<p><strong>Fibrinolysis with tPA</strong> is a drug, given through an IV, that breaks down the clot.</p>" +
            "<p>No procedure is needed, but notice what is left behind: the <strong>plaque</strong>. The narrowing that caused the trouble is still there.</p>" },
        { title: "Fix 2: stretch the pipe open (PCI)", fig: [{ type: "artery", stage: "balloon" }, { type: "artery", stage: "stent" }],
          html: "<p><strong>Percutaneous coronary intervention (PCI)</strong>: a wire is threaded through an artery in the wrist or groin up into the coronary. A <strong>balloon</strong> squashes the plaque, and a <strong>drug-eluting stent</strong> (a metal mesh) holds the artery open.</p>" +
            "<p>Percutaneous means \"through the skin\": no open chest.</p>" },
        { title: "Fix 3: build a detour (CABG)", fig: { type: "artery", stage: "bypass" },
          html: "<p><strong>Coronary artery bypass grafting (CABG)</strong>: a surgeon opens the chest and sews a new blood vessel (a <strong>graft</strong>) from a blood supply to the artery <strong>beyond</strong> the block. Blood takes the detour.</p>" +
            an("A road is blocked by a crash. tPA <strong>tows the wreck away</strong>. PCI <strong>widens the lane</strong> right at the crash. CABG <strong>builds a new road around</strong> the whole mess.") },
        { title: "When do we go invasive at all?", fig: { type: "tiles", items: [["💊", "Medical management fails", "symptoms or risk keep going despite medicines"], ["⚡", "An acute event", "a heart attack happening now"], ["⚖️", "Always: risk vs benefit", "is the procedure safer than staying on pills?"]] },
          html: "<p>The deck's question: <strong>to be or not to be invasive?</strong> Two triggers: <strong>medical management fails</strong>, or the patient has an <strong>acute event</strong>.</p>" +
            hy("It <strong>always depends on the risk/benefit ratio</strong>. Surgery has real risks, so it only makes sense when it beats continuing medicines.") }
      ],
      checks: [
        K("Which intervention dissolves the clot but leaves the plaque behind?", "Fibrinolysis with tPA", ["PCI with a drug-eluting stent", "CABG", "Cardioplegia"], "tPA breaks down clot; it does nothing to the underlying plaque."),
        K("A surgeon sews a vessel from a blood supply to the artery beyond a blockage. What is this?", "CABG", ["PCI", "Fibrinolysis", "Cardiopulmonary bypass alone"], "A bypass graft is a detour around the block, which is what CABG means."),
        K("What are the deck's two reasons to go invasive for CAD?", "Medical management fails, or the patient has an acute event", ["Age over 65, or diabetes", "Any chest pain, or high cholesterol", "The patient asks, or the stress test is normal"], "Invasive care is for failed medicines or an acute event, weighed by risk vs benefit.")
      ],
      remember: [
        "Three interventions: <strong>fibrinolysis (tPA)</strong>, <strong>PCI with a drug-eluting stent</strong>, <strong>CABG</strong>.",
        "tPA dissolves clot; PCI stretches and props the artery open; CABG builds a detour.",
        "Go invasive when <strong>medical management fails</strong> or there is an <strong>acute event</strong>.",
        "It always comes down to <strong>risk vs benefit</strong>."
      ],
      practice: [
        obj("02-three-interventions", "learn", "Lecture: the three interventions", "The deck's cards on fibrinolysis, PCI and CABG."),
        obj("02-three-interventions", "test", "Test yourself", "Quick recall questions on the three interventions.")
      ]
    },

    /* ---------------- 2 ---------------- */
    {
      id: "csl-artery-map", part: "p1", title: "The map: the heart's own arteries", goal: "Left main splits into LAD and circumflex; the RCA usually gives the PDA.",
      pages: [
        { title: "Two arteries leave the aorta", fig: { type: "coronary" },
          html: "<p>Right where the aorta leaves the heart, two coronary arteries branch off: the <strong>left</strong> and the <strong>right</strong>. This is the heart seen from the front.</p>" +
            "<ul><li>The <strong>left main</strong> is short and splits in two: the <strong>LAD</strong> (left anterior descending) running down the front, and the <strong>circumflex (LCx)</strong> wrapping around the left side toward the back (dashed).</li>" +
            "<li>The <strong>right coronary artery (RCA)</strong> wraps around the right side and usually gives off the <strong>posterior descending artery (PDA)</strong> underneath.</li></ul>" },
        { title: "The left main: the trunk of the tree", fig: { type: "coronary", hi: ["lm"], blocks: [["lm", "left main"]] },
          html: "<p>The left main feeds <strong>both</strong> the LAD and the circumflex, so a block here starves most of the left ventricle at once.</p>" +
            an("Think of a tree. Cut one small branch and a few leaves die. Cut the <strong>trunk</strong> and the whole tree is in trouble. That is why <strong>left main disease</strong> keeps coming up as a reason for surgery.") },
        { title: "The LAD: the front wall", fig: { type: "coronary", hi: ["lad"], blocks: [["ladp", "proximal LAD"]] },
          html: "<p>The <strong>LAD</strong> supplies the front of the left ventricle and most of the septum (standard teaching). It's the biggest single branch.</p>" +
            "<p><strong>Proximal</strong> means near the start, before the branches come off. A block in the <strong>proximal LAD</strong> cuts off everything after it, which is why it counts extra when choosing between stent and surgery.</p>" },
        { title: "Counting vessels", fig: { type: "coronary", blocks: [["ladm", "1"], ["lcx", "2"], ["rcam", "3"]] },
          html: "<p>Doctors describe CAD by how many of the <strong>three main vessels</strong> are significantly blocked: <strong>LAD, circumflex, RCA</strong>.</p>" +
            "<ul><li><strong>1-vessel disease</strong>: one of them.</li><li><strong>2-vessel disease</strong>: two.</li><li><strong>3-vessel disease</strong>: all three (this picture).</li></ul>" +
            hy("More vessels, the left main, or the proximal LAD = more heart muscle at risk = more reason for <strong>CABG</strong>. You'll use this in the next two lessons.") }
      ],
      checks: [
        K("The LAD and circumflex both come from which artery?", "The left main", ["The RCA", "The PDA", "The internal mammary artery"], "The left main is the short trunk that splits into the LAD and circumflex."),
        K("Which artery usually gives off the posterior descending artery (PDA)?", "The RCA", ["The LAD", "The left main", "The circumflex always"], "In most people the RCA wraps underneath and gives the PDA."),
        K("Why is a left main blockage so dangerous?", "It starves the territory of both the LAD and the circumflex", ["It only affects the right ventricle", "It is the smallest coronary branch", "It supplies only the atria"], "Blocking the trunk cuts off both big branches of the left system.")
      ],
      remember: [
        "Left main → <strong>LAD</strong> (front wall) + <strong>circumflex</strong> (left side and back).",
        "RCA → usually the <strong>PDA</strong> (bottom of the heart).",
        "Three main vessels: <strong>LAD, LCx, RCA</strong>. Count them for 1-, 2- or 3-vessel disease.",
        "Left main and proximal LAD blocks put the most muscle at risk."
      ],
      practice: [
        obj("04-cabg-indications", "learn", "Lecture: anatomy and CABG indications", "The anatomy card from slide 20 and who needs surgery.")
      ]
    },

    /* ---------------- 3 ---------------- */
    {
      id: "csl-syntax", part: "p1", title: "Risk scores and SYNTAX", goal: "SYNTAX I scores the blockages; SYNTAX II adds the patient.",
      pages: [
        { title: "Telling the future with statistics", fig: { type: "tiles", items: [["⏱", "STS", "short-term surgical risk"], ["📅", "ASCERT", "long-term survival; age over 65, isolated CABG"], ["🇪🇺", "EuroSCORE", "in-hospital mortality (1995)"], ["🫀", "Ambler", "valve surgery with or without CABG (UK/Ireland)"], ["🏥", "APACHE I-IV", "ICU severity"], ["🧠", "CHADS₂ / CHA₂DS₂-VASc", "stroke risk"]] },
          html: "<p>How do you know medical management has failed? The deck's honest answer: you have to <strong>tell the future</strong>, and balance the risk of staying on medicines against the risk of surgery.</p>" +
            "<p>Nobody can do that for one person, so we use <strong>population statistics</strong>: <strong>risk stratification</strong> tools built from thousands of earlier patients.</p>" },
        { title: "SYNTAX I: how bad do the blockages look?", fig: { type: "tiles", items: [["📏", "Size / length", "how long the lesion is"], ["〰️", "Complexity", "tortuous, twisty arteries"], ["📍", "Location", "where in the tree it sits"], ["⛔", "Total occlusion", "fully shut or not"], ["🪨", "Calcium / thrombus", "hard to open"], ["🌫", "Diffuse or localized", "one spot vs the whole vessel"]] },
          html: "<p><strong>SYNTAX I</strong> is scored entirely from the <strong>angiogram</strong>: it describes the <strong>anatomy of the blockages</strong>.</p>" +
            "<p>Every feature that makes a stent harder or less durable adds points. A higher score = more complex disease.</p>" +
            mn("SYNTAX I looks only at the <strong>pipes</strong>: <strong>S</strong>ize, <strong>C</strong>omplexity, <strong>L</strong>ocation, <strong>O</strong>cclusion, <strong>C</strong>alcium/thrombus, <strong>D</strong>iffuse. \"<strong>S</strong>mall <strong>C</strong>ity <strong>L</strong>ots <strong>O</strong>ften <strong>C</strong>lose <strong>D</strong>own.\"") },
        { title: "SYNTAX II: now add the patient", fig: { type: "flow", steps: ["SYNTAX I<br><small>the blockages</small>", "+ patient<br><small>age, kidneys, EF, left main, DM, smoking, COPD, PAD</small>", "SYNTAX II<br><small>the whole picture</small>"], hi: 1 },
          html: "<p><strong>SYNTAX II</strong> keeps the anatomy and adds the <strong>person</strong>. Each of these raises the score:</p>" +
            "<ul><li>↑ <strong>age</strong></li><li>↓ <strong>renal function</strong></li><li>↓ <strong>LVEF</strong> (weak pump)</li><li><strong>left main</strong> disease</li><li><strong>diabetes</strong>, <strong>current smoker</strong></li><li><strong>COPD</strong>, <strong>PAD</strong></li></ul>" +
            hy("SYNTAX I = <strong>the arteries</strong>. SYNTAX II = <strong>the arteries + the patient</strong>.") },
        { title: "Higher score, higher mortality", fig: { type: "line", points: [["0", 0.6, "0.6%"], ["20-25", 3, "3%"], ["40", 15, "15%"], ["50", 31.5, "31.5%"], ["60", 58, "58%"], ["80+", 98, "~100%"]], max: 110, xlabel: "SYNTAX score", ylabel: "4-year mortality", note: "Read from the curve on slide 18." },
          html: "<p>The deck's curve shows <strong>4-year mortality</strong> climbing steeply as the SYNTAX score rises. A complex anatomy is a dangerous anatomy.</p>" },
        { title: "Try it: PCI or CABG?", fig: { type: "decide" },
          html: "<p>Slide 19 turns the score into a choice once medical management has failed:</p>" +
            "<ul><li><strong>1-2 vessel disease, not involving the proximal LAD</strong> → <strong>PCI</strong> favored.</li>" +
            "<li><strong>3-vessel disease with SYNTAX ≥ 23</strong> → <strong>CABG</strong> favored; lower scores, PCI is a reasonable alternative.</li>" +
            "<li><strong>Left main</strong> → <strong>CABG</strong> favored, except SYNTAX &lt; 22.</li></ul>" +
            "<p>Play with the buttons until the pattern clicks: <strong>simple disease → stent, complex disease → surgery</strong>.</p>" }
      ],
      checks: [
        K("SYNTAX I is based on what?", "The anatomy of the lesions (size, complexity, location, occlusion, calcium, diffuse)", ["Age, kidney function and EF", "Symptoms and stress-test results", "Cholesterol and blood pressure"], "SYNTAX I scores only the blockages seen on the angiogram."),
        K("Which of these raises a SYNTAX II score but is NOT part of SYNTAX I?", "Reduced renal function", ["Lesion length", "Calcification", "Total occlusion"], "SYNTAX II adds patient factors such as kidneys, age, EF, diabetes and COPD."),
        K("Three-vessel disease, SYNTAX 31. Which is favored?", "CABG", ["PCI", "Fibrinolysis", "Medicines only, no further thought"], "Three-vessel disease with a SYNTAX score of 23 or more favors CABG."),
        K("Two-vessel disease not involving the proximal LAD. Which is favored?", "PCI", ["CABG", "Heart transplant", "Fibrinolysis"], "One- or two-vessel disease without proximal LAD involvement favors PCI.")
      ],
      remember: [
        "Risk tools: <strong>STS</strong> short term, <strong>ASCERT</strong> long term (over 65, isolated CABG), EuroSCORE, Ambler (valves), APACHE, CHADS₂/CHA₂DS₂-VASc.",
        "<strong>SYNTAX I</strong> = anatomy: size/length, complexity/tortuosity, location, total occlusion, calcium/thrombus, diffuse vs localized.",
        "<strong>SYNTAX II</strong> adds: age, renal function, LVEF, left main, diabetes, smoking, COPD, PAD.",
        "Higher SYNTAX = higher mortality.",
        "1-2 vessels without proximal LAD → <strong>PCI</strong>. 3 vessels with SYNTAX ≥ 23, or left main (unless &lt; 22) → <strong>CABG</strong>."
      ],
      practice: [
        obj("03-syntax", "learn", "Lecture: SYNTAX and PCI vs CABG", "The deck's cards, including the mortality curve."),
        obj("03-syntax", "apply", "Apply: choose PCI or CABG", "Short cases using slide 19's rules.")
      ]
    },

    /* ---------------- 4 ---------------- */
    {
      id: "csl-who-needs-cabg", part: "p1", title: "Who needs a CABG, and who needs it now", goal: "Five elective indications, and the emergencies that send a patient straight to surgery.",
      pages: [
        { title: "Elective CABG: the five indications", fig: { type: "coronary", hi: ["lm", "lad"], blocks: [["lm", "> 50%"], ["ladp", "> 70%"]] },
          html: "<p>Slide 21 lists who should get a planned (elective) CABG:</p>" +
            "<ol class=\"lh-steps\"><li><strong>Significant stenosis &gt; 70%</strong></li><li><strong>Complex 3-vessel CAD</strong></li><li><strong>Left main occlusion &gt; 50%</strong></li><li><strong>2-vessel disease with proximal LAD involvement</strong></li><li><strong>Survivors of sudden cardiac death</strong> with <strong>ischemia-mediated VT</strong></li></ol>" +
            hy("Notice the two numbers: <strong>70%</strong> for an ordinary artery, but only <strong>50%</strong> for the left main, because the trunk feeds so much muscle.") },
        { title: "Why the sudden-death survivor?", fig: { type: "flow", steps: ["Blocked artery", "Ischemic muscle", "Irritable tissue", "Ventricular tachycardia", "Cardiac arrest"], hi: 0 },
          html: "<p>If the VT that nearly killed someone was <strong>caused by ischemia</strong>, the fix is to treat the cause: restore blood flow so the muscle stops being irritable.</p>" },
        { title: "Emergent / urgent CABG", fig: { type: "tiles", items: [["❌", "Failed PCI or fibrinolysis", "acute ischemia that the stent or tPA didn't fix"], ["💥", "Mechanical failure", "ventricular or septal rupture, acute valve injury"], ["🔁", "Recurrent ischemia", "it keeps coming back"]] },
          html: "<p>Some patients can't wait. Slide 22's urgent indications:</p>" +
            "<ul><li><strong>Acute ischemia with failed PCI or fibrinolysis</strong>: the other two fixes didn't work.</li>" +
            "<li><strong>Mechanical cardiac failure</strong>: the heart is physically torn: <strong>ventricular or septal rupture</strong>, or an <strong>acute valvular injury</strong>.</li>" +
            "<li><strong>Recurrent ischemia</strong>.</li></ul>" +
            an("Elective = the <strong>plumbing is bad</strong>. Emergent = the plumbing <strong>failed despite a fix</strong>, or the <strong>walls are tearing</strong>. A torn heart wall can't be fixed with a stent: it needs a surgeon.") }
      ],
      checks: [
        K("Left main stenosis of 60%. Does it meet the deck's CABG indication?", "Yes: left main over 50% is an indication", ["No: the cutoff is 70%", "No: left main is treated with tPA", "Only if the patient is over 65"], "The left main threshold is lower (over 50%) because it feeds so much muscle."),
        K("Which patient needs EMERGENT CABG?", "Acute MI with a ventricular septal rupture", ["Stable angina with one-vessel disease", "A 50% LAD stenosis found on a routine scan", "High cholesterol with no symptoms"], "Mechanical failure such as septal rupture is an urgent CABG indication."),
        K("Which is one of the five elective CABG indications?", "Two-vessel disease with proximal LAD involvement", ["One-vessel disease of a small branch", "Any patient with diabetes", "Atrial fibrillation"], "Two-vessel disease that includes the proximal LAD is on slide 21's list.")
      ],
      remember: [
        "Elective CABG: <strong>stenosis &gt; 70%</strong>, <strong>complex 3-vessel</strong>, <strong>left main &gt; 50%</strong>, <strong>2-vessel with proximal LAD</strong>, <strong>sudden-death survivor with ischemic VT</strong>.",
        "Emergent CABG: <strong>failed PCI/fibrinolysis</strong>, <strong>mechanical failure</strong> (ventricular or septal rupture, acute valve injury), <strong>recurrent ischemia</strong>."
      ],
      practice: [
        obj("04-cabg-indications", "test", "Test: CABG indications", "Recall the elective and emergent lists."),
        obj("04-cabg-indications", "apply", "Apply: who needs surgery?", "Cases asking elective, emergent, or not a CABG patient.")
      ]
    },

    /* ---------------- 5 ---------------- */
    {
      id: "csl-bypass-machine", part: "p2", title: "The heart-lung machine", goal: "Blood leaves the right atrium, gets oxygen outside the body, and comes back through the aorta.",
      pages: [
        { title: "Why a machine at all?", fig: { type: "cpb" },
          html: "<p>Sewing a tiny graft onto a coronary artery is hard on a heart that's beating and full of blood. So the surgeon <strong>stops the heart</strong>. But the brain and body still need blood every second.</p>" +
            "<p><strong>Cardiopulmonary bypass (CPB)</strong> is a machine that does the job of the <strong>heart (cardio)</strong> and the <strong>lungs (pulmonary)</strong> for a while. It's <strong>extracorporeal</strong> circulation: outside the body.</p>" },
        { title: "Step 1: thin the blood, take it out", fig: { type: "cpb", hi: "reservoir" },
          html: "<p>Blood touching plastic tubing would clot, so the blood is <strong>anticoagulated</strong> first.</p>" +
            "<p>Then <strong>all blood is removed from the body, usually from the right atrium</strong>, the chamber where used blood comes home. It drains into a reservoir.</p>" },
        { title: "Step 2: oxygen, filter, temperature", fig: { type: "cpb", hi: "oxy" },
          html: "<p>Inside the machine the blood is:</p><ul><li><strong>oxygenated</strong> (the lungs' job),</li><li><strong>filtered</strong>,</li><li><strong>temperature controlled</strong>,</li></ul><p>and a pump sends it back into the circulation, <strong>usually through the aorta</strong>.</p>" +
            hy("The pump's flow is <strong>non-pulsatile</strong>: a smooth stream, not beats. Hold on to that word: it explains some complications later.") },
        { title: "The numbers, and getting off", fig: { type: "cpb", hi: "pump" },
          html: "<p>Target <strong>flow 2.2 to 2.4 L/min</strong> with a <strong>pressure of 65 to 100 mmHg</strong>.</p>" +
            "<p>At the end, the cardioplegia is removed, the heart is <strong>filled with blood</strong>, <strong>restarted</strong>, and the patient is <strong>taken off bypass</strong>.</p>" +
            "<p>The person who runs the machine is the <strong>perfusionist</strong>, one member of a big cardiac team: surgeon, anesthesia, cardiology, PA, perfusionist, circulators, surgical techs, echo techs, ICU and floor nursing, RT, office staff.</p>" }
      ],
      checks: [
        K("On cardiopulmonary bypass, blood is usually drained from where and returned where?", "Out of the right atrium, back through the aorta", ["Out of the aorta, back through the right atrium", "Out of the left ventricle, back through the pulmonary artery", "Out of a leg vein, back through the same vein"], "The machine takes venous blood where it returns (right atrium) and gives it back where the heart would send it (aorta)."),
        K("Why is the blood anticoagulated before bypass?", "So it won't clot in the machine's tubing", ["To make the heart stop", "To cool the patient", "To raise the blood pressure"], "Blood clots on foreign surfaces, so it must be thinned first."),
        K("What is the target pump flow on bypass?", "2.2 to 2.4 L/min at 65 to 100 mmHg", ["5 to 6 L/min at 120 mmHg", "0.5 L/min at 40 mmHg", "10 L/min with pulsatile flow"], "Slide 26 gives 2.2 to 2.4 L/min with a pressure of 65 to 100.")
      ],
      remember: [
        "CPB = <strong>extracorporeal circulation</strong> doing the heart's and lungs' work.",
        "Blood is <strong>anticoagulated</strong>, drained <strong>from the right atrium</strong>, oxygenated, filtered, temperature controlled, returned <strong>via the aorta</strong>.",
        "Flow is <strong>non-pulsatile</strong>.",
        "Target <strong>2.2-2.4 L/min</strong> at <strong>65-100 mmHg</strong>.",
        "At the end: remove cardioplegia, fill and restart the heart, come off bypass."
      ],
      practice: [
        obj("05-cpb", "learn", "Lecture: the bypass machine", "The deck's CPB card."),
        obj("05-cpb", "test", "Test: CPB", "Quick recall on the machine and its numbers.")
      ]
    },

    /* ---------------- 6 ---------------- */
    {
      id: "csl-cold-potassium", part: "p2", title: "Cold and potassium", goal: "Cooling cuts oxygen need in half every 10 °C; potassium stops the heart.",
      pages: [
        { title: "Why make the patient cold?", fig: { type: "thermo" },
          html: "<p>Cold tissue burns less fuel. <strong>Oxygen consumption drops by 50% for every 10 °C drop in temperature.</strong></p>" +
            "<p>So at a normal 37 °C the body needs about <strong>2.4 L/min/m²</strong> of flow, but at <strong>18 °C only about 1 L/min/m²</strong>. Drag the slider and watch the demand fall.</p>" +
            an("Food lasts longer in the fridge. A cooled body can safely live on the machine's lower, non-pulsatile flow.") },
        { title: "Stopping the heart: cardioplegia", fig: { type: "cpb", hi: "plegia" },
          html: "<p>The heart is stopped with <strong>cardioplegia</strong>: a <strong>cold</strong> solution <strong>high in potassium</strong>, usually mixed with the patient's own (autologous) blood.</p>" +
            hy("The primary electrolyte in cardioplegia is <strong>potassium (K⁺)</strong>. That's the objective's whole answer.") },
        { title: "Why potassium stops the heart", fig: { type: "flow", steps: ["Lots of K⁺ outside the cells", "Cells can't reset (stay depolarized)", "No new action potentials", "Heart stops, relaxed, in diastole"] },
          html: "<p>Heart cells fire because of a carefully kept difference in potassium inside vs outside. Flood the outside with K⁺ and the cells <strong>can't reset</strong>, so they can't fire again. The heart stops still and relaxed.</p>" +
            std("The mechanism (depolarized arrest in diastole) is standard physiology; the deck gives the electrolyte.") +
            "<p>The deck's note: <strong>retrograde</strong> cardioplegia (given backwards through the veins) spreads more evenly in <strong>diffuse CAD</strong> and doesn't need a <strong>competent aortic valve</strong>.</p>" }
      ],
      checks: [
        K("What is the primary electrolyte in cardioplegia?", "Potassium", ["Sodium", "Calcium", "Magnesium"], "Cardioplegia is a cold, potassium-rich solution that stops the heart."),
        K("How much does oxygen consumption drop for every 10 °C of cooling?", "About 50%", ["About 10%", "About 90%", "It doesn't change"], "Slide 27: oxygen use halves for every 10 °C drop."),
        K("Why is the patient cooled on bypass?", "Lower oxygen demand lets organs survive on less flow", ["Cold blood clots less, so no heparin is needed", "Cold makes the heart beat faster", "Cooling raises the blood pressure"], "Cold tissue needs less oxygen, so the machine's lower flow is enough.")
      ],
      remember: [
        "O₂ use falls <strong>50% per 10 °C</strong>: 2.4 L/min/m² at 37 °C vs about 1 L/min/m² at 18 °C.",
        "Cardioplegia = <strong>cold, high-potassium</strong> solution, usually mixed with the patient's own blood.",
        "Primary electrolyte: <strong>K⁺</strong>.",
        "Retrograde cardioplegia: more even in diffuse CAD, doesn't need a competent aortic valve."
      ],
      practice: [
        obj("06-cardioplegia", "learn", "Lecture: cardioplegia and hypothermia", "The deck's card on cooling and K⁺."),
        obj("06-cardioplegia", "test", "Test yourself", "Quick recall questions.")
      ]
    },

    /* ---------------- 7 ---------------- */
    {
      id: "csl-conduits", part: "p2", title: "Choosing the graft", goal: "LITA lasts best; the saphenous vein is most common but fails most.",
      pages: [
        { title: "Where grafts come from", fig: { type: "harvest" },
          html: "<p>A bypass graft is a blood vessel borrowed from somewhere the body can spare it. The deck splits them into <strong>arterial</strong> and <strong>vein</strong> grafts:</p>" +
            "<ul><li><strong>Internal thoracic arteries</strong> (also called <strong>internal mammary</strong>: ITA = IMA), left (LITA) and right (RITA), inside the chest wall.</li><li>The <strong>radial artery</strong> from the forearm.</li><li>The <strong>great saphenous vein</strong> (SVG) from the leg.</li></ul>" },
        { title: "Who lasts longest", fig: { type: "bars", items: [["1 · LITA", 95, "95% open at 5 yr", "good"], ["2 · RITA", 75, "< 90% at 10 yr", "ok"], ["3 · Saphenous vein", 40, "< 90% at 1 yr", "bad"]], note: "Bar length shows the rank (slides 31 and 35). Patency = still open." },
          html: "<p><strong>Patency</strong> means the graft is still open.</p>" +
            "<ul><li><strong>LITA: 95% at 5 years</strong>, the best.</li><li><strong>RITA: &lt; 90% at 10 years</strong>.</li><li><strong>Saphenous vein: &lt; 90% at 1 year</strong> is common.</li></ul>" +
            hy("Order of patency: <strong>LITA &gt; RITA &gt; saphenous vein</strong>. Look at the time scales: arteries are measured in <strong>5-10 years</strong>, the vein in <strong>1 year</strong>.") },
        { title: "Why veins fail", fig: { type: "flow", steps: ["30 days<br><small>10% already shut</small>", "12-18 months<br><small>10-25% failed</small>", "Years 1-6<br><small>+2% more each year</small>", "Year 7 on<br><small>+4-5% more each year</small>"], hi: 0 },
          html: "<p>The saphenous vein is the <strong>most common</strong> graft, but:</p>" +
            "<ul><li><strong>10% occlude early</strong> (within 30 days).</li><li><strong>10-25% fail</strong> within 12-18 months.</li><li>Late occlusion: <strong>2% a year</strong> in years 1-6, then <strong>4-5% a year</strong> from year 7.</li><li>Success depends on the <strong>runoff / size of the native artery</strong> it lands on.</li></ul>" +
            std("Why: a vein is built for low pressure. Sewn into the high-pressure arterial system, its wall thickens and it clogs sooner.") },
        { title: "A classic CABG", fig: { type: "coronary", blocks: [["ladp", ""], ["rca", ""], ["lcx", ""]], grafts: [["lita", "ladm", "LITA"], ["aorta", "rcam", "SVG"], ["aorta", "lcx", "SVG"]] },
          html: "<p>The deck's rule: <strong>try to place at least one arterial graft in each patient</strong>. The usual choice is the <strong>LITA to the LAD</strong> (standard teaching): the best graft for the most important artery.</p>" +
            "<p>Vein grafts are sewn from the <strong>aorta</strong> to the other blocked arteries.</p>" +
            "<p>For a <strong>two-vessel arterial bypass</strong>, <strong>left + right ITA</strong> beats LITA + radial.</p>" +
            mn("<strong>\"LITA lasts.\"</strong> Arteries last for years, veins wear out.") }
      ],
      checks: [
        K("Rank these grafts by patency, best first.", "LITA, RITA, saphenous vein", ["Saphenous vein, RITA, LITA", "RITA, LITA, saphenous vein", "Radial, saphenous vein, LITA"], "LITA is 95% open at 5 years, RITA under 90% at 10 years, and the vein under 90% at just 1 year."),
        K("Which graft is the MOST COMMONLY used?", "Saphenous vein", ["LITA", "RITA", "Radial artery"], "The saphenous vein is the most common graft, even though it fails the most."),
        K("About what fraction of saphenous vein grafts occlude within 30 days?", "10%", ["1%", "50%", "95%"], "Slide 31: early occlusion in 30 days happens in about 10% of vein grafts."),
        K("What is another name for the internal thoracic artery?", "Internal mammary artery", ["Radial artery", "Great saphenous vein", "Posterior descending artery"], "ITA and IMA are the same vessel.")
      ],
      remember: [
        "Arterial grafts: <strong>LITA, RITA</strong> (ITA = IMA), radial. Vein: <strong>great saphenous (SVG)</strong>.",
        "Patency: <strong>LITA 95% at 5 yr</strong> &gt; <strong>RITA &lt; 90% at 10 yr</strong> &gt; <strong>SVG &lt; 90% at 1 yr</strong>.",
        "SVG: most common; 10% occlude in 30 days; 10-25% fail in 12-18 months; then 2%/yr (yr 1-6), 4-5%/yr (yr 7 on).",
        "At least <strong>one arterial graft</strong> per patient. Two-vessel arterial: <strong>L + R ITA</strong> beats LITA + radial."
      ],
      practice: [
        obj("07-conduits", "learn", "Lecture: conduits", "The deck's graft cards."),
        obj("07-conduits", "test", "Test: patency order", "Recall the grafts and their numbers.")
      ]
    },

    /* ---------------- 8 ---------------- */
    {
      id: "csl-outcomes", part: "p3", title: "Who does badly after CABG", goal: "The predictors of a bad outcome, and what keeps patients alive afterward.",
      pages: [
        { title: "What counts as a bad outcome", fig: { type: "tiles", items: [["🔁", "Need for revascularization", "the arteries block again"], ["💔", "Post-op MI", "a heart attack after surgery"], ["✝", "Death", ""]] },
          html: "<p>Outcomes after CABG are judged by three <strong>negative endpoints</strong>: needing another <strong>revascularization</strong>, a <strong>post-op MI</strong>, or <strong>death</strong>.</p>" },
        { title: "The biggest risks for a poor outcome", fig: { type: "tiles", items: [["🚨", "Arrived crashing", "emergency surgery; shock / hemodynamic instability"], ["🔂", "Done before", "reoperation"], ["🩺", "Sick body", "renal dialysis; insulin-dependent diabetes; low pre-op hemoglobin"], ["🚬", "Habit", "smoking"]] },
          html: "<p>Slide 38's predictors of post-op MI, repeat revascularization or death:</p>" +
            "<ul><li><strong>Emergency</strong> surgery</li><li><strong>Shock / hemodynamic instability</strong></li><li><strong>Reoperation</strong></li><li><strong>Renal dialysis</strong></li><li><strong>Insulin-dependent diabetes</strong></li><li><strong>Smoking</strong></li><li><strong>Low pre-op hemoglobin</strong></li></ul>" +
            an("Group them into four stories: the patient <strong>arrived crashing</strong>, it's a <strong>redo</strong>, the <strong>body is already sick</strong>, or a <strong>habit</strong> (smoking).") },
        { title: "Mortality over time", fig: { type: "line", points: [["30 d", 3.2, "3.2%"], ["6 mo", 6.4, "6.4%"], ["1 yr", 8.1, "8.1%"], ["2 yr", 11.3, "11.3%"], ["3 yr", 23.3, "23.3%"]], max: 28, ylabel: "mortality", note: "Slide 39." },
          html: "<p>Mortality after CABG: <strong>3.2% at 30 days</strong>, 6.4% at 180 days, 8.1% at 1 year, 11.3% at 2 years, <strong>23.3% at 3 years</strong>.</p>" +
            "<p><strong>Predictors of mortality</strong> (slides 40-41): more than moderate <strong>lung disease</strong>, <strong>pulmonary hypertension</strong>, <strong>perioperative MI</strong>, <strong>creatinine 1.5-2.5</strong>, <strong>acute kidney injury</strong>, atherosclerosis elsewhere (<strong>carotids, cerebrovascular, aorta</strong>), plus the cardiac risk factors: <strong>age, hyperlipidemia, DM, HTN, smoking</strong>.</p>" },
        { title: "The bypass doesn't cure the disease", fig: { type: "tiles", items: [["🚭", "Stop smoking", ""], ["🧈", "Control lipids", ""], ["🍬", "Control diabetes", ""], ["🩸", "Control BP", ""], ["💊", "Antiplatelet", "aspirin or clopidogrel"]] },
          html: "<p>The grafts bypass today's blocks, but the process that made them keeps going, and grafts can clog too.</p>" +
            hy("<strong>Continuing prevention after surgery makes a difference</strong>: stop smoking, control lipids, diabetes and BP, and take an <strong>antiplatelet</strong> (aspirin or clopidogrel).") }
      ],
      checks: [
        K("Which is a predictor of post-op MI, repeat revascularization or death after CABG?", "Low pre-op hemoglobin", ["High pre-op hemoglobin", "Female sex alone", "A LITA graft"], "Slide 38 lists low pre-op hemoglobin with emergency, shock, reoperation, dialysis, insulin-dependent DM and smoking."),
        K("What is the 30-day mortality after CABG on the deck's slide?", "3.2%", ["0.1%", "23.3%", "50%"], "Slide 39 gives 3.2% at 30 days, rising to 23.3% at 3 years."),
        K("After a successful CABG, which keeps making a difference?", "Ongoing risk-factor control and an antiplatelet", ["Nothing; the disease is cured", "Stopping all medicines", "Avoiding walking for a year"], "The grafts don't stop atherosclerosis, so prevention continues.")
      ],
      remember: [
        "Bad endpoints: <strong>repeat revascularization, post-op MI, death</strong>.",
        "Predictors: <strong>emergency, shock, reoperation, dialysis, insulin-dependent DM, smoking, low pre-op Hgb</strong>.",
        "Mortality: <strong>3.2% at 30 days</strong> → 23.3% at 3 years.",
        "Mortality predictors add lung disease, pulmonary HTN, peri-op MI, creatinine 1.5-2.5, AKI, carotid/cerebral/aortic disease, and age, lipids, DM, HTN, smoking.",
        "After surgery: stop smoking, control lipids, DM and BP, antiplatelet."
      ],
      practice: [
        obj("08-outcomes", "learn", "Lecture: outcomes", "The deck's outcome cards."),
        obj("08-outcomes", "test", "Test: risk predictors", "Recall the predictors.")
      ]
    },

    /* ---------------- 9 ---------------- */
    {
      id: "csl-what-goes-wrong", part: "p3", title: "What goes wrong, and why", goal: "Complications come from the wound, the anesthesia, or the bypass itself.",
      pages: [
        { title: "Three sources of trouble", fig: { type: "tiles", items: [["🔪", "The wound / trauma", "bleeding or thrombosis; the sternotomy; a sternum robbed of blood when BOTH ITAs are taken"], ["😴", "The anesthesia", "hypo- or hypervolemia; neurologic dysfunction (stroke)"], ["⚙️", "The operation itself", "the bypass machine, the cold, the stopped heart, the clamps"]] },
          html: "<p>Slide 43 sorts post-op complications by <strong>what caused them</strong>.</p>" +
            "<p>One link worth seeing: the ITAs feed the <strong>sternum</strong>. Take <strong>both</strong> as grafts and the breastbone loses its blood supply, so it heals poorly.</p>" },
        { title: "Everything you learned about bypass comes back", fig: { type: "grid", cols: ["What we did in the OR", "What it can cause"], rows: [
              ["Stopped the whole heart (global arrest)", "Weak heart muscle afterward"],
              ["Cooled the patient", "Hypothermia problems"],
              ["Non-pulsatile, artificial flow", "Organs (especially kidneys) poorly perfused"],
              ["Blood touched the machine", "<strong>Inflammatory response</strong> to CPB"],
              ["Blood returned from the field", "Fat and particles reintroduced"],
              ["Clamped and cannulated the aorta", "Loosened plaque → emboli (stroke)"],
              ["Anticoagulated, then reversed", "Bleeding or thrombosis"]] },
          html: "<p>Slide 46 lists complications from the surgery itself. Each one is the price of a step from lessons 5 and 6. Read it as cause → effect.</p>" +
            std("The \"what it can cause\" column links the deck's list to its effects; the links are standard teaching.") },
        { title: "The heart after surgery", fig: { type: "eq", terms: [["BP", "", "pressure"], "=", ["CO", "", "pump × volume"], "×", ["SVR", "", "pipe tightness"]] },
          html: "<p><strong>Dysrhythmias</strong>: <strong>atrial fibrillation</strong>, ventricular arrhythmias, bradyarrhythmias.</p>" +
            "<p><strong>Myocardial weakness / failure</strong>: sort slide 48's list with the pressure equation:</p>" +
            "<ul><li><strong>Pump</strong>: MI (3.2% of CABG patients), poor inotropy, valve dysfunction.</li><li><strong>Volume</strong>: inadequate preload; <strong>tamponade</strong> (blood squeezing the heart so it can't fill).</li><li><strong>Pipes</strong>: vasodilatory shock (low SVR) or excessive afterload (high SVR).</li></ul>" },
        { title: "Lungs and kidneys", fig: { type: "tiles", items: [["🫁", "Lungs", "pulmonary edema, effusion, ↓ chest compliance, atelectasis, pneumonia, phrenic nerve injury → diaphragm dysfunction, ARDS, hard to wean"], ["🫘", "Kidneys", "hurt by vasoconstriction, hypothermia, loss of pulsatile flow, atherosclerosis"], ["🛡", "Protect the kidneys", "keep normotensive; avoid aminoglycosides, ACE inhibitors, contrast"]] },
          html: "<p><strong>Pulmonary</strong>: edema (cardiogenic or not), pleural effusion, decreased thoracic compliance, atelectasis, pneumonia, <strong>phrenic nerve injury</strong> leading to diaphragm dysfunction, acute lung injury/ARDS, difficulty weaning.</p>" +
            "<p><strong>Renal dysfunction</strong> comes from vasoconstriction, hypothermia, <strong>loss of pulsatile flow</strong> and atherosclerosis.</p>" +
            hy("Protect the kidneys: <strong>keep the patient normotensive</strong> and <strong>avoid nephrotoxic drugs</strong>: aminoglycosides, ACE inhibitors, contrast.") }
      ],
      checks: [
        K("Why does taking BOTH internal thoracic arteries cause sternal wound problems?", "The sternum loses its blood supply", ["The legs swell", "The phrenic nerves are cut", "The heart can't be stopped"], "The ITAs feed the sternum; removing both devascularizes it."),
        K("Which is the most typical post-CABG arrhythmia on the deck's list?", "Atrial fibrillation", ["Wolff-Parkinson-White", "Long QT syndrome", "Sinus arrhythmia"], "Atrial fibrillation heads slide 47's dysrhythmia list."),
        K("Which drug would you AVOID to protect the kidneys right after CABG?", "An aminoglycoside", ["Acetaminophen", "Aspirin", "Insulin"], "The deck says avoid nephrotoxins: aminoglycosides, ACE inhibitors, contrast."),
        K("Which feature of bypass helps explain post-op kidney injury?", "Loss of pulsatile flow", ["High-potassium cardioplegia in the kidneys", "The LITA graft", "Too much urine"], "Slide 50 names loss of pulsatile flow among the causes of renal dysfunction.")
      ],
      remember: [
        "Sources: <strong>wound/trauma</strong> (bleeding, sternotomy, both ITAs → devascularized sternum), <strong>anesthesia</strong> (volume problems, stroke), <strong>the operation</strong>.",
        "Operation: global arrest, hypothermia, <strong>non-pulsatile flow</strong>, CPB <strong>inflammation</strong>, fat/particles, aortic clamping/cannulation, bleeding/thrombosis.",
        "Heart: <strong>AF</strong>, VA, brady; MI (3.2%), poor inotropy, low preload, low or high SVR, valve dysfunction, <strong>tamponade</strong>.",
        "Lungs: edema, effusion, atelectasis, pneumonia, <strong>phrenic nerve injury</strong>, ARDS, hard to wean.",
        "Kidneys: keep <strong>normotensive</strong>; avoid aminoglycosides, ACE inhibitors, contrast."
      ],
      practice: [
        obj("09-complications", "learn", "Lecture: complications", "The deck's complication cards."),
        obj("09-complications", "apply", "Apply: complications", "Cases about what went wrong.")
      ]
    },

    /* ---------------- 10 ---------------- */
    {
      id: "csl-icu-monitors", part: "p3", title: "Watching in the ICU", goal: "Every monitor answers one question.",
      pages: [
        { title: "Every monitor asks a question", fig: { type: "grid", cols: ["Monitor", "The question it answers"], rows: [
              ["Chest / mediastinal tube output", "Are they <strong>bleeding</strong>?"],
              ["Urine output, vital signs", "Are the kidneys perfused? <strong>Hypovolemic</strong>?"],
              ["Daily lytes, ABG, Hgb, platelets, BUN, creatinine", "Kidneys working? Anemic? Acidotic? Oxygenating?"],
              ["Blood sugar every 6 h", "Hypo- or hyperglycemic?"],
              ["Echocardiogram", "How is the <strong>pump</strong> working?"],
              ["ECG", "Ischemic changes?"],
              ["Chest x-ray", "Pulmonary edema? Hypervolemia? Pneumonia?"]] },
          html: "<p>Slide 51 is easiest to learn as <strong>monitor → question</strong>. Don't memorize the list; memorize what each one is <strong>asking</strong>.</p>" },
        { title: "The ICU extras", fig: { type: "tiles", items: [["📈", "Central filling pressure (CVP)", "how full is the tank? (possibly wedge pressure)"], ["🎈", "Swan-Ganz (PA catheter)", "cardiac output and SVR"], ["📟", "Telemetry", "dysrhythmias"], ["🩸", "Arterial line", "continuous blood pressure"], ["🧪", "Blood gases", "oxygenation, ventilation, acid/base"], ["☝️", "Pulse ox", "PaO₂ estimate"]] },
          html: "<p>In the ICU (slide 52) you also get the numbers that split <strong>BP = CO × SVR</strong> into its parts:</p>" +
            "<ul><li><strong>CVP</strong> tells you the volume (preload).</li><li>The <strong>Swan-Ganz</strong> catheter gives <strong>cardiac output</strong> and <strong>SVR</strong>.</li></ul>" +
            hy("With CVP, CO and SVR you can tell <strong>which part</strong> is failing: the tank, the pump or the pipes. That's exactly what the next lesson's phone calls need.") },
        { title: "After the breathing tube comes out", fig: { type: "flow", steps: ["Incentive spirometry<br><small>open the lungs</small>", "Ambulation<br><small>get up and walk</small>", "Antiplatelet therapy<br><small>protect the grafts</small>"] },
          html: "<p>After extubation: <strong>spirometry</strong> (to fight atelectasis), <strong>ambulation</strong>, and <strong>antiplatelet therapy</strong>.</p>" }
      ],
      checks: [
        K("Which monitor answers \"Is the patient bleeding?\"", "Chest / mediastinal tube output", ["Blood sugar every 6 hours", "Telemetry", "Pulse oximetry"], "Blood collecting around the heart drains out the chest tubes."),
        K("Which device gives cardiac output and SVR?", "Swan-Ganz (pulmonary artery) catheter", ["Arterial line", "Pulse oximeter", "Foley catheter"], "The PA catheter measures cardiac output, from which SVR is calculated."),
        K("A post-CABG chest x-ray is ordered. What is it looking for?", "Pulmonary edema, hypervolemia or pneumonia", ["Ischemic ST changes", "Blood sugar", "Platelet count"], "Slide 51: the CXR asks about edema, volume overload and pneumonia.")
      ],
      remember: [
        "Chest tubes → bleeding. Urine/vitals → perfusion, hypovolemia. Labs daily. Sugar q6h. Echo → pump. ECG → ischemia. CXR → edema, volume, pneumonia.",
        "ICU: <strong>CVP</strong> (volume), <strong>Swan-Ganz</strong> (CO, SVR), telemetry, <strong>arterial line</strong>, ABG, pulse ox.",
        "After extubation: <strong>spirometry, ambulation, antiplatelet</strong>."
      ],
      practice: [
        obj("10-icu-monitoring", "learn", "Lecture: ICU monitoring", "The deck's monitoring cards."),
        obj("10-icu-monitoring", "test", "Test: which monitor?", "Match monitors to the question they answer.")
      ]
    },

    /* ---------------- 11 ---------------- */
    {
      id: "csl-icu-calls", part: "p3", title: "The three 8-hour phone calls", goal: "Read BP, heart rate and urine to name the problem: volume, pressure, or pump.",
      pages: [
        { title: "Call 1: low BP, fast heart", fig: [{ type: "monitor", bp: "75/P", hr: "130", uo: "↓" }, { type: "eq", terms: [["BP", "↓"], "=", ["CO", "↓", "volume ↓"], "×", ["SVR", "", ""]] }],
          html: "<p>Eight hours after CABG the nurse calls: <strong>BP 75/palp, pulse 130, urine output falling.</strong></p>" +
            "<p>A <strong>fast</strong> heart is the body trying to make up for <strong>too little volume</strong>: it beats faster because each beat carries less.</p>" +
            hy("Problem: <strong>hypovolemia</strong>. Check <strong>CVP</strong> (low), <strong>chest tube output</strong> (bleeding?), SpO₂, cardiac output. Order ECG, <strong>Hgb</strong>, ± echo. Treat the volume (standard teaching: fluids or blood).") },
        { title: "Call 2: high BP", fig: [{ type: "monitor", bp: "180/110", hr: "90", uo: "↓" }, { type: "eq", terms: [["BP", "↑"], "=", ["CO", ""], "×", ["SVR", "↑", "pipes tight"]] }],
          html: "<p><strong>BP 180/110, pulse 90, urine output falling.</strong></p>" +
            "<p>What do you want to know? A <strong>history of hypertension</strong>, CVP / cardiac output / SVR, is the patient <strong>awake</strong> or in <strong>pain</strong>? Chest tube output (high pressure strains fresh suture lines). Order an ECG and echo.</p>" +
            hy("Problem: <strong>hypertension</strong>. Treat with <strong>nitroprusside</strong>.") },
        { title: "Call 3: low BP, normal heart rate", fig: [{ type: "monitor", bp: "75/P", hr: "90", uo: "↓" }, { type: "eq", terms: [["BP", "↓"], "=", ["CO", "↓", "pump weak"], "×", ["SVR", "", ""]] }],
          html: "<p><strong>BP 75/palp, pulse 90, urine output falling.</strong> Same low pressure as call 1, but the heart is <strong>not</strong> racing.</p>" +
            "<p>Check chest tube output, CVP, cardiac output, SVR, and get an <strong>echocardiogram</strong>.</p>" +
            hy("Problem: <strong>cardiac dyskinesia</strong>: the pump itself isn't squeezing properly. The echo shows it.") +
            std("The slide notes stop at the diagnosis and the echo. Supporting the pump (e.g. inotropes) is standard teaching.") },
        { title: "Side by side", fig: { type: "grid", cols: ["Call", "BP", "HR", "Problem", "Key test / treatment"], rows: [
              ["1", "75/P ↓", "130 ↑", "<strong>Hypovolemia</strong>", "CVP, chest tubes, Hgb → volume"],
              ["2", "180/110 ↑", "90", "<strong>Hypertension</strong>", "<strong>Nitroprusside</strong>"],
              ["3", "75/P ↓", "90", "<strong>Cardiac dyskinesia</strong>", "<strong>Echo</strong>"]] },
          html: "<p>Calls 1 and 3 have the <strong>same BP</strong>. The <strong>heart rate</strong> splits them:</p>" +
            "<ul><li>Low BP + <strong>fast</strong> HR → the heart is fine and trying hard; the <strong>tank</strong> is empty.</li><li>Low BP + <strong>normal</strong> HR → the <strong>pump</strong> is the problem.</li></ul>" +
            an("All three have <strong>falling urine</strong>: the kidneys are the alarm bell in every call. Your job is to find which part of BP = CO × SVR rang it.") }
      ],
      checks: [
        K("8 hours post-CABG: BP 75/palp, HR 130, low urine output. Most likely problem?", "Hypovolemia", ["Hypertension", "Cardiac dyskinesia", "Hyperglycemia"], "Low pressure with a racing heart means the tank is empty."),
        K("8 hours post-CABG: BP 180/110, HR 90, low urine output. Treatment from the slide notes?", "Nitroprusside", ["A fluid bolus", "Potassium", "Fibrinolysis"], "The notes treat post-op hypertension with nitroprusside."),
        K("8 hours post-CABG: BP 75/palp, HR 90, low urine output. Which test shows the problem?", "Echocardiogram", ["Calcium score", "Stress test", "Blood sugar"], "A low BP without tachycardia points to the pump (dyskinesia), which an echo shows."),
        K("Calls 1 and 3 both have BP 75/palp. What tells them apart?", "The heart rate", ["The urine output", "The time since surgery", "The patient's age"], "A fast HR means low volume; a normal HR with low BP means the pump is weak.")
      ],
      remember: [
        "75/P + HR <strong>130</strong> + ↓ urine = <strong>hypovolemia</strong> (CVP, chest tubes, Hgb; give volume).",
        "180/110 + HR 90 + ↓ urine = <strong>hypertension</strong> → <strong>nitroprusside</strong>.",
        "75/P + HR <strong>90</strong> + ↓ urine = <strong>cardiac dyskinesia</strong> → <strong>echo</strong>.",
        "Falling urine output is the alarm in all three."
      ],
      practice: [
        obj("10-icu-monitoring", "apply", "Apply: the ICU calls", "The three 8-hour cases and their variations.")
      ]
    }
  ];

  window.CARDIO3_LEARN = window.CARDIO3_LEARN || {};
  window.CARDIO3_LEARN["cardiac-surgery"] = {
    prefix: "csl", short: "Cardiac Surgery", heading: "Cardiac surgery from zero",
    kicker: "Cardiac surgery, step by step",
    card: "Three ways to open a blocked artery, the artery map, SYNTAX and who needs a CABG, then the heart-lung machine, cold and potassium, grafts, complications and the ICU calls. Short lessons with moving pictures and a few easy checks.",
    intro: "Eleven short lessons, one idea per page, each with a picture. Start with lesson 1: every lesson builds on the one before.",
    parts: parts, lessons: lessons
  };
}());
