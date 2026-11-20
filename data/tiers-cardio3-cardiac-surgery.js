/* Cardio Part 3 Tiers: Cardiac Surgery (Gardner deck), all three tiers, story format.
   Same shape and rules as data/tiers-cardio3-cad-part-1.js. Facts follow source-material/cardio-part-3/text/cardiac-surgery.md;
   anything not on the slides is marked "(standard teaching)".
   Chunk ids are progress keys and question order is too: never rename a chunk, only append questions. */
(function () {
  "use strict";
  var T = window.CARDIO3_TIERS;
  if (!T) return;
  function Q(prompt, answer, wrong, why) { return { prompt: prompt, answer: answer, wrong: wrong, why: why }; }
  function hy(x) { return '<div class="box-hy"><span class="lbl">Key idea</span>' + x + "</div>"; }
  function pic(x) { return '<div class="box-mnemonic"><span class="lbl">Picture it</span>' + x + "</div>"; }
  function mn(x) { return '<div class="box-mnemonic"><span class="lbl">Memory hook</span>' + x + "</div>"; }
  function std(x) { return '<div class="box-fix"><span class="lbl">Standard teaching</span>' + x + "</div>"; }

  /* =============================== TIER 1 · FOUNDATIONS =============================== */
  T.units["t1|cardiac-surgery"] = { chunks: [
    { id: "three-roads", title: "Three ways to open an artery", goal: "Invasive CAD options are fibrinolysis (tPA), PCI with a drug-eluting stent, and CABG; go invasive when meds fail or an acute event hits.",
      pages: [
        { title: "Meet Frank", fig: { type: "patient", icon: "👨‍🦳", name: "Frank, 66", line: "Diabetic. Angina keeps getting worse despite three medicines.", chips: [["Meds", "maxed out", "bad"], ["Diabetes", "yes", "ok"], ["Cath", "3 arteries narrowed", "bad"]] },
          html: "<p>Medical management has failed Frank. Now the question: <strong>to be or not to be invasive</strong>. It always depends on the <strong>risk/benefit ratio</strong>.</p>" },
        { title: "The three roads", fig: { type: "tiles", items: [["💧", "Fibrinolysis (tPA)", "dissolve the clot"], ["🎈", "PCI with drug-eluting stent", "open it from inside"], ["🌉", "CABG", "build a detour around it"]], hi: 2 },
          html: "<p>Go invasive in two situations: <strong>medical management fails</strong>, or the patient has an <strong>acute event</strong>.</p>" },
        { title: "Opened vs bypassed", fig: { type: "artery", stage: "bypass", note: "A graft carries blood past the blockage" },
          html: "<p>A stent fixes one spot. A bypass graft skips the whole diseased stretch, which is why it wins when disease is widespread.</p>" +
            hy("Deciding when meds have \"failed\" means predicting the future. Risk scores do that.") }
      ],
      remember: ["Three invasive options: tPA, PCI with DES, CABG.", "Go invasive when meds fail or there's an acute event.", "Always a risk/benefit decision, guided by risk scores."],
      check: [
        Q("Which is NOT one of the three invasive interventions for CAD in the deck?", "Ranolazine", ["Fibrinolysis with tPA", "PCI with drug-eluting stent", "CABG"], "Ranolazine is a medicine, not an intervention."),
        Q("When is an invasive approach to CAD considered?", "When medical management fails or there is an acute event", ["Whenever LDL is above 100", "Only after age 75", "Before any medicine is tried"], "Those are the deck's two triggers."),
        Q("What decides between continuing medicines and surgery?", "The risk/benefit ratio", ["The patient's insurance only", "The cholesterol level alone", "Always the surgeon's preference"], "The deck says it always depends on risk versus benefit.")
      ],
      bank: [
        Q("Which invasive option builds a detour around a blockage?", "CABG", ["PCI", "tPA", "Atherectomy"], "A bypass graft routes blood past the lesion.")
      ] },

    { id: "pci-or-cabg", title: "Stent or bypass?", goal: "PCI for 1-2 vessels without proximal LAD; CABG for 3-vessel disease with SYNTAX ≥ 23 or left main disease.",
      pages: [
        { title: "Make the call", fig: { type: "decide" },
          html: "<p>Try Frank: three vessels, diabetic. The answer depends on <strong>how many vessels</strong>, whether the <strong>proximal LAD or left main</strong> is involved, and the <strong>SYNTAX score</strong>.</p>" },
        { title: "The rules", fig: { type: "grid", cols: ["Disease", "Favored"], rows: [["1-2 vessels, no proximal LAD", "<strong>PCI</strong>"], ["3 vessels, SYNTAX ≥ 23", "<strong>CABG</strong>"], ["3 vessels, lower SYNTAX", "PCI is a reasonable alternative"], ["Left main", "<strong>CABG</strong> (except SYNTAX &lt; 22)"]], hiCol: 1 },
          html: "<p>Frank's SYNTAX score is 31. He goes to <strong>CABG</strong>.</p>" },
        { title: "What SYNTAX counts", fig: { type: "coronary", blocks: [["ladm", "1"], ["lcx", "2"], ["rcam", "3"]] },
          html: "<p><strong>SYNTAX I</strong> scores the anatomy: lesion size and length, complexity and tortuosity, location, total occlusion, calcification or thrombus, diffuse vs localized. A higher score means more complex disease.</p>" +
            mn("Simple anatomy → stent. Complex anatomy (high SYNTAX) → surgery.") }
      ],
      remember: ["1-2 vessels without proximal LAD → PCI.", "3 vessels with SYNTAX ≥ 23 → CABG.", "Left main → CABG unless SYNTAX < 22.", "SYNTAX I = anatomic complexity."],
      check: [
        Q("Two-vessel disease sparing the proximal LAD. Which is favored?", "PCI", ["CABG", "Fibrinolysis", "Heart transplant"], "Limited disease without proximal LAD favors stenting."),
        Q("Three-vessel disease with a SYNTAX score of 30. Which is favored?", "CABG", ["PCI", "Medical therapy only", "tPA"], "SYNTAX ≥ 23 with three vessels favors bypass."),
        Q("What does the SYNTAX I score measure?", "How complex the coronary anatomy is", ["Kidney function", "Left ventricular EF", "Stroke risk in AF"], "SYNTAX I grades lesion size, location, calcification and more.")
      ],
      bank: [
        Q("Left main disease with SYNTAX 35. Favored approach?", "CABG", ["PCI", "Medical therapy", "Fibrinolysis"], "CABG is favored for left main unless SYNTAX is under 22.")
      ] },

    { id: "who-cabg", title: "Who needs a CABG", goal: "Elective: > 70% stenosis, complex 3VD, left main > 50%, 2VD with proximal LAD, ischemic VT survivors. Emergent: failed PCI/lysis, mechanical failure, recurrent ischemia.",
      pages: [
        { title: "Planned (elective) CABG", fig: { type: "tiles", items: [["📉", "Stenosis &gt; 70%", "significant"], ["🕸️", "Complex 3-vessel CAD", ""], ["🎯", "Left main &gt; 50%", ""], ["➕", "2-vessel with proximal LAD", ""], ["⚡", "Survived sudden cardiac event", "with ischemic VT"]] },
          html: "<p>Notice: the <strong>left main</strong> threshold is lower (&gt; 50%) because it feeds most of the left heart.</p>" },
        { title: "Emergent or urgent CABG", fig: { type: "tiles", items: [["❌", "Acute ischemia, failed PCI or lysis", ""], ["💔", "Mechanical failure", "ventricular or septal rupture, acute valve injury"], ["🔁", "Recurrent ischemia", ""]] },
          html: hy("Elective = the anatomy says so. Emergent = something broke or failed.") }
      ],
      remember: ["Elective CABG: > 70% stenosis, complex 3VD, left main > 50%, 2VD with proximal LAD, ischemic VT survivor.", "Emergent: failed PCI/fibrinolysis, mechanical failure (rupture, acute valve injury), recurrent ischemia."],
      check: [
        Q("Left main stenosis above what percent is an indication for CABG?", "50%", ["30%", "70%", "90%"], "Left main supplies so much muscle that > 50% counts."),
        Q("Which is an EMERGENT indication for CABG?", "Ventricular septal rupture after MI", ["Stable 2-vessel disease", "LDL above 190", "Positive calcium score"], "Mechanical failure needs urgent surgical repair."),
        Q("Two-vessel disease qualifies for CABG when it involves:", "The proximal LAD", ["The distal RCA only", "A small diagonal", "No major artery"], "Proximal LAD supplies a large territory.")
      ],
      bank: [
        Q("A STEMI patient's PCI fails and ischemia continues. Next step?", "Emergent CABG", ["Repeat stress test", "Start a statin and discharge", "Wait 6 weeks"], "Acute ischemia after failed PCI is an emergent indication.")
      ] },

    { id: "bypass-machine", title: "The heart-lung machine", goal: "CPB takes blood from the right atrium, oxygenates, cools and returns it to the aorta; cold, potassium-rich cardioplegia stops the heart.",
      pages: [
        { title: "Blood out, blood in", fig: { type: "cpb" },
          html: "<p>Frank is <strong>anticoagulated</strong>. Blood leaves from the <strong>right atrium</strong>, is oxygenated, filtered and temperature controlled, then returns through the <strong>aorta</strong>. The flow is <strong>non-pulsatile</strong>.</p>" },
        { title: "Stopping the heart", fig: { type: "cpb", hi: "plegia" },
          html: "<p><strong>Cardioplegia</strong>: a cold, <strong>potassium-rich</strong> solution, usually mixed with the patient's own blood, stops the heart so the surgeon can sew on a still target.</p>" +
            std("High extracellular potassium depolarizes the cells and holds them in diastolic arrest.") },
        { title: "Why cool the patient", fig: { type: "thermo" },
          html: "<p>Every <strong>10°C</strong> drop cuts oxygen use by <strong>50%</strong>. Cold tissues need less flow, which protects the brain and organs.</p>" +
            pic("A cold body is a house with the heat turned down: it needs much less fuel.") }
      ],
      remember: ["CPB: anticoagulate, drain from right atrium, oxygenate/filter/cool, return to aorta.", "Flow is non-pulsatile.", "Cardioplegia: cold, high-potassium, stops the heart.", "Each 10°C drop halves O₂ use."],
      check: [
        Q("Where is blood usually drained to the bypass machine?", "Right atrium", ["Left ventricle", "Pulmonary artery", "Femoral vein only"], "Venous blood is collected from the right atrium."),
        Q("What stops the heart during CABG?", "Cold, potassium-rich cardioplegia", ["Adenosine bolus", "Electrical shock", "Beta blocker drip"], "High potassium arrests the heart in diastole."),
        Q("Why is the patient cooled on bypass?", "Each 10°C drop halves oxygen consumption", ["To prevent bleeding", "To speed the heart up", "To raise potassium"], "Cold organs need less blood flow.")
      ],
      bank: [
        Q("Blood flow from the bypass machine is:", "Non-pulsatile", ["Pulsatile like a heartbeat", "Only to the brain", "Stopped completely"], "The pump gives continuous flow.")
      ] },

    { id: "grafts", title: "Choosing the grafts", goal: "LITA to LAD is the best graft (95% patent at 5 years); saphenous vein grafts are most common but fail faster.",
      pages: [
        { title: "Where grafts come from", fig: { type: "harvest" },
          html: "<p>Arteries: <strong>left and right internal thoracic (mammary)</strong> arteries, radial artery. Vein: the <strong>great saphenous</strong> from the leg. IMA and ITA are the same artery.</p>" },
        { title: "Frank's three grafts", fig: { type: "coronary", grafts: [["lita", "ladm", "LITA"], ["aorta", "rcam", "SVG"], ["aorta", "lcx", "SVG"]] },
          html: "<p>The <strong>LITA</strong> goes to the LAD; vein grafts run from the aorta to the others. Try to place <strong>at least one arterial graft</strong> in every patient.</p>" },
        { title: "Artery beats vein", fig: { type: "bars", items: [["LITA", 95, "95% patent at 5 years: best", "good"], ["RITA", 88, "&lt; 90% at 10 years", "ok"], ["Saphenous vein", 60, "most common; 10-25% fail in 12-18 months", "bad"]], note: "Bar lengths are a sketch, not one time point." },
          html: mn("LITA to LAD: the Lifetime graft.") }
      ],
      remember: ["Grafts: LITA, RITA (ITA = IMA), radial artery, saphenous vein.", "LITA: 95% patent at 5 years, the best.", "SVG: most common, fails more.", "At least one arterial graft per patient."],
      check: [
        Q("Which bypass graft has the best long-term patency?", "Left internal thoracic artery", ["Saphenous vein", "Radial artery", "Right internal thoracic artery"], "LITA is 95% patent at 5 years."),
        Q("Which conduit is used most often?", "Saphenous vein", ["Left ITA", "Radial artery", "Gastroepiploic artery"], "Vein grafts are the most common, though they fail more."),
        Q("The internal mammary artery is the same as the:", "Internal thoracic artery", ["Radial artery", "Subclavian vein", "Saphenous artery"], "IMA and ITA are two names for one artery.")
      ],
      bank: [
        Q("What is the minimum arterial graft goal for each CABG patient?", "At least one arterial graft", ["No arterial grafts", "Only vein grafts", "Every graft must be arterial"], "The deck says try to place at least one arterial graft.")
      ] },

    { id: "after", title: "After the operation", goal: "AF, bleeding, low output and kidney injury are the big worries; watch chest tubes, urine, pressures; read the three classic ICU calls.",
      pages: [
        { title: "What goes wrong", fig: { type: "tiles", items: [["〰️", "Atrial fibrillation", "and other arrhythmias"], ["🩸", "Bleeding", "chest tube output"], ["💔", "Low output", "MI, poor squeeze, tamponade"], ["🫁", "Lungs", "atelectasis, effusion, pneumonia"], ["🫘", "Kidneys", "cold, non-pulsatile, vasoconstricted"], ["🧠", "Stroke", ""]] },
          html: "<p>Many come from bypass itself: global cardiac arrest, hypothermia, non-pulsatile flow, an inflammatory response, and aortic clamping.</p>" },
        { title: "8 hours post-op: the first call", fig: { type: "monitor", bp: "75/P", hr: "130", uo: "↓" },
          html: "<p>Low BP, <strong>fast</strong> heart, little urine: the tank is empty. Think <strong>hypovolemia</strong> or bleeding. Check CVP, chest tube output, cardiac output, Hgb.</p>" },
        { title: "Two more calls", fig: { type: "vs", a: ["BP 180/110, HR 90, ↓ urine", "bad", ["Hypertension", "Pain? Awake? History of HTN?", "Treat: <strong>nitroprusside</strong>"]], b: ["BP 75/P, HR 90, ↓ urine", "blue", ["Low BP without tachycardia", "Pump problem: <strong>cardiac dyskinesia</strong>", "Get an echo"]] },
          html: hy("Low BP + fast HR = empty tank. Low BP + normal HR = weak pump. High BP = afterload to bring down.") }
      ],
      remember: ["Post-op: AF, bleeding, low output, lung problems, kidney injury, stroke.", "75/P + HR 130 + ↓ urine → hypovolemia.", "180/110 → nitroprusside.", "75/P + HR 90 + ↓ urine → pump failure (dyskinesia): echo."],
      check: [
        Q("8 hours after CABG: BP 75/P, HR 130, falling urine. Most likely problem?", "Hypovolemia", ["Hypertension", "Hypothermia only", "Hyperkalemia"], "Low pressure with a racing heart means low volume."),
        Q("8 hours after CABG: BP 180/110, HR 90. Which drug does the deck give?", "Nitroprusside", ["Furosemide", "Digoxin", "Epinephrine"], "Nitroprusside rapidly lowers afterload."),
        Q("8 hours after CABG: BP 75/P, HR 90, falling urine. What test first?", "Echocardiogram", ["Stress test", "Calcium score", "Holter"], "Low BP without tachycardia suggests the pump; echo shows it.")
      ],
      bank: [
        Q("Which arrhythmia is especially common after CABG?", "Atrial fibrillation", ["Wolff-Parkinson-White", "Brugada pattern", "Torsades from the start"], "AF is the first dysrhythmia listed in the deck.")
      ] }
  ] };

  /* =============================== TIER 2 · STANDARD DETAILS =============================== */
  T.units["t2|cardiac-surgery"] = { chunks: [
    { id: "risk-scores", title: "The risk scores", goal: "STS short term, ASCERT long term (> 65, isolated CABG), EuroSCORE, Ambler (valves), SYNTAX I anatomy, SYNTAX II clinical.",
      pages: [
        { title: "Which score for what", fig: { type: "grid", cols: ["Score", "Predicts"], rows: [["STS", "short-term risk"], ["ASCERT", "long-term survival; &gt; 65, isolated CABG"], ["EuroSCORE", "in-hospital mortality (1995)"], ["Ambler", "valve surgery ± CABG (UK/Ireland)"], ["SYNTAX I", "anatomic complexity"], ["SYNTAX II", "anatomy + clinical factors"]], hiCol: 1 },
          html: "<p>The deck also lists APACHE I-IV, CHA₂DS₂-VASc and CHADS₂ as risk tools.</p>" },
        { title: "SYNTAX II adds the patient", fig: { type: "tiles", items: [["🎂", "↑ Age", "↑ score"], ["🫘", "↓ Renal function", "↑ score"], ["💔", "↓ LVEF", "↑ score"], ["🎯", "Left main disease", "↑ score"], ["🍬", "Diabetes, current smoker", ""], ["🫁", "COPD, PAD", "↑ score"]] },
          html: mn("SYNTAX I = the arteries. SYNTAX II = the arteries + the person.") }
      ],
      remember: ["STS: short term. ASCERT: long term, > 65, isolated CABG.", "EuroSCORE: in-hospital mortality. Ambler: valves.", "SYNTAX I: lesion size, complexity, location, occlusion, calcium/thrombus, diffuse.", "SYNTAX II adds age, renal function, EF, left main, DM, smoking, COPD, PAD."],
      check: [
        Q("Which risk tool estimates long-term survival for patients over 65 having isolated CABG?", "ASCERT", ["STS", "EuroSCORE", "CHADS₂"], "ASCERT is the long-term calculator."),
        Q("Which factor raises the SYNTAX II score but is not part of SYNTAX I?", "Reduced renal function", ["Lesion calcification", "Total occlusion", "Lesion length"], "SYNTAX II adds clinical factors to anatomy."),
        Q("Which score is used for valve surgery with or without CABG?", "Ambler", ["ASCERT", "SYNTAX I", "Duke"], "The Ambler model comes from Great Britain and Ireland.")
      ],
      bank: [
        Q("Which is part of the SYNTAX I score?", "Calcification or thrombus", ["Age", "Diabetes", "Smoking"], "SYNTAX I is purely anatomic.")
      ] },

    { id: "syntax-curve", title: "SYNTAX and mortality", goal: "Higher SYNTAX scores carry steeply higher 4-year mortality.",
      pages: [
        { title: "The curve", fig: { type: "line", points: [["0", 0.6, "0.6%"], ["20-25", 3, "3%"], ["40", 15, "15%"], ["50", 31.5, "31.5%"], ["60", 58, "58%"], ["80+", 98, "~100%"]], max: 110, xlabel: "SYNTAX score", ylabel: "4-year mortality", note: "Read from the curve on slide 18." },
          html: "<p>Low scores barely change risk; above about 40 mortality climbs fast. The cutoffs of 22-23 decide stent vs bypass.</p>" }
      ],
      remember: ["Mortality rises steeply with SYNTAX score.", "≥ 23 with 3VD → CABG favored.", "Left main: CABG unless < 22."],
      check: [
        Q("As the SYNTAX score rises, 4-year mortality:", "Rises steeply", ["Falls", "Stays flat", "Rises then falls"], "More complex anatomy means worse outcomes."),
        Q("Which SYNTAX cutoff makes CABG favored in three-vessel disease?", "≥ 23", ["≥ 5", "≥ 60", "≥ 100"], "The deck uses 23 for three-vessel disease."),
        Q("Left main CAD favors CABG except when SYNTAX is:", "Below 22", ["Above 22", "Above 50", "Exactly 30"], "Low-complexity left main can be stented.")
      ],
      bank: [
        Q("Roughly what 4-year mortality does the slide's curve show at a SYNTAX of 50?", "About 30%", ["About 1%", "About 5%", "About 100%"], "The curve reads about 31.5% at 50.")
      ] },

    { id: "cpb-details", title: "Bypass in numbers", goal: "Flow 2.2-2.4 L/min, pressure 65-100 mmHg; at 18°C only 1 L/min/m² is needed; retrograde cardioplegia for diffuse disease.",
      pages: [
        { title: "Machine targets", fig: { type: "tiles", items: [["🔄", "Flow 2.2-2.4 L/min", ""], ["📏", "Pressure 65-100 mmHg", ""], ["🌡️", "37°C: ~2.4 L/min/m²", ""], ["❄️", "18°C: ~1 L/min/m²", ""]] },
          html: "<p>At the end, cardioplegia is washed out, the heart fills with blood, restarts, and the patient comes <strong>off bypass</strong>.</p>" },
        { title: "Retrograde cardioplegia", fig: { type: "vs", a: ["Antegrade", "blue", ["Down the coronaries from the aortic root", "Needs a competent aortic valve", "Blocked arteries get less"]], b: ["Retrograde", "good", ["Backward through the coronary veins", "More uniform with diffuse CAD", "Doesn't need the aortic valve"]] },
          html: std("Antegrade is given through the aortic root; retrograde through the coronary sinus.") }
      ],
      remember: ["CPB flow 2.2-2.4 L/min, pressure 65-100 mmHg.", "Normothermia ~2.4 L/min/m²; 18°C ~1 L/min/m².", "O₂ use halves per 10°C drop.", "Retrograde cardioplegia: even with diffuse CAD, no need for competent aortic valve."],
      check: [
        Q("Target CPB pressure range?", "65-100 mmHg", ["20-40 mmHg", "120-160 mmHg", "180-200 mmHg"], "The deck lists 65 to 100 mmHg."),
        Q("Flow needed at 18°C on bypass is about:", "1 L/min/m²", ["2.4 L/min/m²", "5 L/min/m²", "0.1 L/min/m²"], "Cooling cuts oxygen need, so less flow is required."),
        Q("Advantage of retrograde cardioplegia?", "More uniform delivery with diffuse CAD", ["It needs a competent aortic valve", "It warms the heart", "It avoids potassium"], "Going backward through the veins bypasses blocked arteries.")
      ],
      bank: [
        Q("Target pump flow rate on bypass per the deck?", "2.2-2.4 L/min", ["0.5 L/min", "5-6 L/min", "10 L/min"], "The deck states 2.2 to 2.4 liters per minute.")
      ] },

    { id: "graft-numbers", title: "Graft patency in detail", goal: "SVG: 10% early occlusion in 30 days, 2%/year years 1-6, 4-5%/year after; bilateral ITA beats LITA + radial.",
      pages: [
        { title: "How vein grafts fail", fig: { type: "ladder", steps: [["First 30 days", "about 10% occlude early", "ok"], ["First year", "patency under 90% is common; 10-25% fail by 12-18 months", "ok"], ["Years 1-6", "about 2% more close each year", "bad"], ["Year 7 on", "4-5% close each year", "bad"]] },
          html: "<p>10-25% fail within 12-18 months. Failure depends on the <strong>runoff</strong> and size of the native artery.</p>" },
        { title: "Arterial grafts", fig: { type: "vs", a: ["LITA", "good", ["95% patent at 5 years", "Best graft"]], b: ["RITA", "ok", ["&lt; 90% at 10 years", "Both ITAs beat LITA + radial for 2 arterial grafts"]] },
          html: "<p>Using <strong>both ITAs</strong> can devascularize the sternum and raise wound problems.</p>" }
      ],
      remember: ["SVG: 10% occlude in 30 days; 10-25% fail in 12-18 months.", "SVG late: 2%/yr years 1-6, 4-5%/yr from year 7.", "Patency depends on runoff and native artery size.", "Bilateral ITA > LITA + radial; but both ITAs risk sternal devascularization."],
      check: [
        Q("What fraction of saphenous vein grafts occlude within 30 days?", "About 10%", ["About 1%", "About 50%", "About 90%"], "Early occlusion is about 10%."),
        Q("Yearly vein graft occlusion rate from year 7 on?", "4-5% per year", ["2% per year", "20% per year", "0% per year"], "Late failure accelerates after year 6."),
        Q("For two arterial grafts, which pairing does the deck prefer?", "Left and right ITA", ["LITA and radial", "Two radial arteries", "Two saphenous veins"], "Bilateral ITA beats LITA plus radial.")
      ],
      bank: [
        Q("What risk comes with harvesting both internal thoracic arteries?", "Sternal devascularization", ["Leg wound infection", "Radial nerve injury", "Phrenic nerve injury"], "Both ITAs feed the sternum.")
      ] },

    { id: "outcomes", title: "Outcomes and predictors", goal: "Mortality 3.2% at 30 days to 23.3% at 3 years; emergency, shock, redo, dialysis, insulin DM, smoking, low Hgb predict bad outcomes.",
      pages: [
        { title: "Mortality over time", fig: { type: "line", points: [["30 d", 3.2, "3.2%"], ["6 mo", 6.4, "6.4%"], ["1 yr", 8.1, "8.1%"], ["2 yr", 11.3, "11.3%"], ["3 yr", 23.3, "23.3%"]], max: 28, ylabel: "mortality", note: "Slide 39." },
          html: "<p>Negative endpoints tracked: need for repeat revascularization, post-op MI, death.</p>" },
        { title: "Red flags before surgery", fig: { type: "vs", a: ["Predict MI, redo or death", "bad", ["Emergency surgery", "Shock / instability", "Reoperation", "Dialysis", "Insulin-dependent DM", "Smoking", "Low pre-op Hgb"]], b: ["Predict mortality", "bad", ["&gt; moderate lung disease", "Pulmonary HTN", "Perioperative MI", "Creatinine 1.5-2.5, AKI", "Carotid/cerebral/aortic atherosclerosis", "Age, lipids, DM, HTN, smoking"]] },
          html: "<p>Prevention after surgery makes a difference: stop smoking, control lipids, diabetes and BP, and give <strong>aspirin or clopidogrel</strong>.</p>" }
      ],
      remember: ["Mortality: 3.2% (30 d), 6.4% (6 mo), 8.1% (1 y), 11.3% (2 y), 23.3% (3 y).", "Bad-outcome predictors: emergency, shock, redo, dialysis, insulin DM, smoking, low Hgb.", "Mortality predictors: lung disease, pulmonary HTN, peri-op MI, Cr 1.5-2.5, AKI, atherosclerosis elsewhere.", "After: risk factor control + aspirin or clopidogrel."],
      check: [
        Q("30-day mortality after CABG per the deck?", "3.2%", ["0.1%", "23.3%", "11.3%"], "The slide lists 3.2% at 30 days."),
        Q("Which predicts post-op MI, repeat revascularization or death?", "Insulin-dependent diabetes", ["Female sex alone", "Normal pre-op hemoglobin", "Elective timing"], "Insulin DM is on the deck's list."),
        Q("Which antiplatelet agents continue after CABG?", "Aspirin or clopidogrel", ["Warfarin alone", "Heparin drip", "None"], "Antiplatelets are part of post-op prevention.")
      ],
      bank: [
        Q("What serum creatinine range is listed as a predictor of CABG mortality?", "1.5-2.5 mg/dL", ["0.5-0.8 mg/dL", "Under 1.0 mg/dL", "Over 10 mg/dL"], "Moderate renal dysfunction predicts death.")
      ] },

    { id: "complications", title: "Complications by system", goal: "From the wound, anesthesia and bypass: arrhythmias, low output, tamponade, phrenic injury, ARDS, kidney injury.",
      pages: [
        { title: "Three sources", fig: { type: "grid", cols: ["Source", "Examples"], rows: [["Wound / trauma", "bleeding, thrombosis, sternotomy problems, sternal devascularization (both ITAs)"], ["Anesthesia", "hypo- or hypervolemia, stroke"], ["Surgery / bypass", "global arrest, hypothermia, non-pulsatile flow, inflammation, fat emboli, aortic clamping"]] },
          html: "<p>Reintroduced fat and particles and aortic clamping can cause <strong>stroke</strong>.</p>" },
        { title: "Heart", fig: { type: "tiles", items: [["〰️", "AF, VT, bradycardia", ""], ["💥", "MI", "3.2% of CABG patients"], ["🪫", "Poor inotropy, low preload", ""], ["🌡️", "Vasodilatory shock", "low SVR"], ["🧱", "High afterload", "high SVR"], ["🫙", "Tamponade, valve dysfunction", ""]] },
          html: "<p>Each low-output cause maps to a dial: squeeze, fill, or resistance.</p>" },
        { title: "Lungs and kidneys", fig: { type: "vs", a: ["Lungs", "blue", ["Pulmonary edema, effusion, atelectasis", "Pneumonia, ARDS", "Phrenic nerve injury → diaphragm", "Hard to wean"]], b: ["Kidneys", "ok", ["Vasoconstriction, cold, non-pulsatile flow", "Keep normotensive", "Avoid aminoglycosides, ACEi, contrast"]] },
          html: "<p>After extubation: incentive spirometry and early ambulation.</p>" }
      ],
      remember: ["Sources: wound, anesthesia, bypass.", "Cardiac: AF/VT/brady, MI 3.2%, low output, vasodilatory shock, tamponade.", "Lungs: atelectasis, effusion, pneumonia, phrenic injury, ARDS.", "Kidneys: keep normotensive; avoid aminoglycosides, ACEi, contrast."],
      check: [
        Q("Which drugs should be avoided to protect the kidneys after CABG?", "Aminoglycosides, ACE inhibitors and contrast", ["Acetaminophen and saline", "Insulin and potassium", "Aspirin and statins"], "All three can injure the post-bypass kidney."),
        Q("Diaphragm weakness after CABG suggests injury to which nerve?", "Phrenic", ["Vagus", "Recurrent laryngeal", "Long thoracic"], "Phrenic nerve injury causes diaphragmatic dysfunction."),
        Q("Post-op shock with LOW systemic vascular resistance is called:", "Vasodilatory shock", ["Tamponade", "Hypovolemia", "Excess afterload"], "The vessels are too relaxed to hold pressure.")
      ],
      bank: [
        Q("How often does MI occur in CABG patients per the deck?", "About 3.2%", ["About 0.1%", "About 30%", "About 50%"], "The deck lists MI in 3.2% of CABG patients.")
      ] },

    { id: "monitoring", title: "Post-op monitoring", goal: "Chest tubes, urine, daily labs, glucose every 6 h, echo, EKG, CXR; in ICU a Swan-Ganz, art line and telemetry.",
      pages: [
        { title: "What each check answers", fig: { type: "grid", cols: ["Check", "Question"], rows: [["Chest tube output", "Bleeding?"], ["Urine output, vitals", "Kidneys perfused? Hypovolemic?"], ["Lytes, ABG, Hgb, platelets, BUN/Cr daily", "Kidneys working? Anemia? Acidosis?"], ["Glucose every 6 h", "Hypo- or hyperglycemia?"], ["Echo", "Cardiac function"], ["EKG", "Ischemia?"], ["CXR", "Edema, volume, pneumonia?"]], hiCol: 1 },
          html: "<p>In the ICU: central filling pressure (maybe wedge), <strong>Swan-Ganz</strong> for cardiac output and SVR, <strong>arterial line</strong> for continuous BP, telemetry, blood gases and pulse ox.</p>" }
      ],
      remember: ["Chest tube output = bleeding.", "Glucose every 6 hours.", "Swan-Ganz: CO and SVR; art line: continuous BP.", "After extubation: spirometry, ambulation, antiplatelets."],
      check: [
        Q("Which output tells you if a post-CABG patient is bleeding?", "Chest (mediastinal) tube output", ["Urine output", "Glucose", "Telemetry"], "Mediastinal blood drains out the chest tubes."),
        Q("How often is blood sugar checked after CABG per the deck?", "Every 6 hours", ["Once a week", "Every 15 minutes", "Never"], "The deck says q6 hours."),
        Q("Which ICU device gives continuous blood pressure?", "Arterial line", ["Pulse oximeter", "Foley catheter", "Incentive spirometer"], "An intra-arterial catheter reads every beat.")
      ],
      bank: [
        Q("Which device measures cardiac output and SVR after CABG?", "Swan-Ganz catheter", ["Arterial line", "Chest tube", "Holter"], "The PA catheter calculates output and resistance.")
      ] }
  ] };

  /* =============================== TIER 3 · THE WEEDS =============================== */
  T.units["t3|cardiac-surgery"] = { chunks: [
    { id: "history", title: "How heart surgery began", goal: "From \"a wound in the heart is mortal\" to Lillehei's cross-circulation (1954) and the modern bypass machine (1955).",
      pages: [
        { title: "The timeline", fig: { type: "ladder", steps: [["Hippocrates", "\"A wound in the heart is mortal\"", "bad"], ["1880s Billroth", "a surgeon who sutures the heart loses respect", "bad"], ["1909", "109 heart wounds sutured, 60% mortality", "ok"], ["1923 Cutler", "opened mitral stenosis in an 11-year-old", "ok"], ["1938 Gross", "closed a PDA in a 7-year-old", "good"], ["1954 Lillehei", "ASD/VSD repair using a PARENT as the bypass machine", "good"], ["1955 Lillehei + DeWall", "solved air bubbles: modern CPB born", "good"]] },
          html: "<p>Lillehei's cross-circulation: 45 cases, no donor deaths, 29 of 45 patients survived.</p>" }
      ],
      remember: ["Hippocrates: heart wounds are mortal.", "1923 Cutler: mitral stenosis. 1938 Gross: PDA.", "1954 Lillehei: parent as the bypass machine (29/45 survived).", "1955 Lillehei and DeWall: bubble-free oxygenator, modern CPB."],
      check: [
        Q("In 1954, what did Lillehei use as the bypass machine?", "One of the patient's parents", ["A pig heart", "A balloon pump", "An ice bath"], "Cross-circulation used a parent's circulation."),
        Q("What problem did Lillehei and DeWall solve in 1955?", "Getting air bubbles out of the oxygenator", ["Rejection of transplants", "Stent thrombosis", "Contrast allergy"], "Removing bubbles made modern CPB possible."),
        Q("Who first successfully closed a PDA, in 1938?", "Robert Gross", ["Elliott Cutler", "Theodor Billroth", "C. Walton Lillehei"], "Gross closed a PDA in a 7-year-old.")
      ],
      bank: [
        Q("How many of Lillehei's 45 cross-circulation patients survived?", "29", ["45", "10", "0"], "29 of 45 survived with no donor deaths.")
      ] },

    { id: "team", title: "The team and the other operations", goal: "Cardiac surgery covers transplant, CABG, valves, aneurysm, ASD/VSD, PDA, trauma and pacemakers, done by a large team.",
      pages: [
        { title: "What cardiac surgeons do", fig: { type: "tiles", items: [["🫀", "Transplant", ""], ["🌉", "CABG", ""], ["🚪", "Valve repair or replacement", ""], ["🎈", "Cardiac aneurysm", ""], ["🕳️", "ASD or VSD repair", ""], ["🔗", "PDA closure", ""], ["🚑", "Trauma repair", ""], ["⚡", "Pacemaker placement", ""]] },
          html: "<p>The team: surgeon, anesthesia, cardiology, <strong>PA</strong>, perfusionist (runs the pump), circulators, surgical and echo techs, ICU and floor nursing, RT and office staff.</p>" }
      ],
      remember: ["Operations: transplant, CABG, valves, aneurysm, ASD/VSD, PDA, trauma, pacemakers.", "The perfusionist runs the bypass machine.", "PAs are part of the cardiac surgery team."],
      check: [
        Q("Who runs the heart-lung machine?", "The perfusionist", ["The circulator", "The respiratory therapist", "The echo tech"], "Perfusionists operate cardiopulmonary bypass."),
        Q("Which is listed as a cardiac surgery in the deck?", "PDA closure", ["Carpal tunnel release", "Appendectomy", "Cataract removal"], "PDA closure is on the list."),
        Q("Which team member's role includes ventilator care after surgery?", "Respiratory therapist", ["Perfusionist", "Office staff", "Surgical tech"], "RT manages breathing support (standard teaching).")
      ],
      bank: [
        Q("Is a PA part of the cardiac surgery team in the deck?", "Yes", ["No", "Only for transplants", "Only in Europe"], "The PA is on the team list.")
      ] },

    { id: "icu-thinking", title: "Thinking through the ICU calls", goal: "For each call: what to ask, which tests, what to give.",
      pages: [
        { title: "Call 1: 75/P, HR 130", fig: { type: "flow", vertical: true, steps: ["Ask: CVP, chest tube output, SpO₂, cardiac output", "Tests: EKG, Hgb, ± echo", "Likely: <strong>hypovolemia</strong>", "Treat: volume (and stop bleeding)"] },
          html: "<p>Fast heart + low pressure = the heart is trying to make up for an empty tank.</p>" },
        { title: "Call 2: 180/110, HR 90", fig: { type: "flow", vertical: true, steps: ["Ask: history of HTN? Awake? Pain? CT output?", "Check CVP, cardiac output, SVR", "Tests: EKG, echo", "Treat: <strong>nitroprusside</strong>"] },
          html: "<p>High afterload strains fresh grafts and suture lines (standard teaching).</p>" },
        { title: "Call 3: 75/P, HR 90", fig: { type: "flow", vertical: true, steps: ["Ask: CT output, CVP, cardiac output, SVR", "Test: <strong>echocardiogram</strong>", "Likely: <strong>cardiac dyskinesia</strong> (pump failure)"] },
          html: hy("Same low BP as call 1, but no compensatory tachycardia: look at the pump.") }
      ],
      remember: ["Call 1 (75/P, 130): CVP, CT output → hypovolemia.", "Call 2 (180/110): pain? awake? → nitroprusside.", "Call 3 (75/P, 90): echo → cardiac dyskinesia."],
      check: [
        Q("For the post-CABG patient at 75/P with HR 130, which value most helps confirm hypovolemia?", "Low CVP", ["High SVR", "High glucose", "Normal hemoglobin"], "A low central pressure means the tank is empty."),
        Q("Before treating post-op hypertension, what should you ask?", "Is the patient in pain or waking up?", ["Is the calcium score high?", "Did they have a stress test?", "Is the LDL at goal?"], "Pain and emergence raise BP and need different fixes."),
        Q("Low BP, HR 90 and falling urine after CABG. Likely diagnosis per the deck?", "Cardiac dyskinesia", ["Hypovolemia", "Hypertension", "Hypothermia"], "The deck's notes name dyskinesia and get an echo.")
      ],
      bank: [
        Q("Which IV vasodilator does the deck use for post-CABG hypertension?", "Nitroprusside", ["Labetalol only", "Enalaprilat only", "Hydralazine only"], "The notes say give nitroprusside.")
      ] }
  ] };
})();
