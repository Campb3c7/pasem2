/*
  CAD Part II (risk reduction and prevention) "from zero" lessons (engine: learn-path.js, figures: cardio3-learn.js).
  Same visual step-by-step style as the other Cardio Part 3 paths (Anna, 2026-11-16). Facts follow the deck
  (source-material/cardio-part-3/text/cad-part-2.md) as built into data/cad-part-2.js; anything not on the slides
  is marked "(standard teaching)". Analogies are teaching aids.
  Lesson ids (cad2l-*) are progress keys: never rename. Checks: K(prompt, answer, [wrong], why).
*/
(function () {
  "use strict";
  function K(prompt, answer, wrong, why) { return { prompt: prompt, answer: answer, wrong: wrong, why: why }; }
  function hy(x) { return '<div class="box-hy"><span class="lbl">Key idea</span>' + x + "</div>"; }
  function an(x) { return '<div class="box-mnemonic"><span class="lbl">Picture it</span>' + x + "</div>"; }
  function mn(x) { return '<div class="box-mnemonic"><span class="lbl">Mnemonic</span>' + x + "</div>"; }
  function std(x) { return '<div class="box-fix"><span class="lbl">Standard teaching</span>' + x + "</div>"; }
  function obj(id, mode, label, note) {
    return { label: label, note: note, objective: { course: "cardio-part-3", lecture: "cad-part-2", mode: mode, id: id } };
  }

  var parts = [
    { id: "p1", title: "Part 1 · Measuring risk", blurb: "Primary vs secondary prevention, the PREVENT calculator, what it adds over the old equations, and what the four risk bands mean." },
    { id: "p2", title: "Part 2 · Lifestyle and exercise", blurb: "The five healthy habits, how hard is 'moderate', who needs clearance before exercising, and how exercise protects the arteries." },
    { id: "p3", title: "Part 3 · Lipids and statins", blurb: "Statin intensity, who must be on one, reading the lipid panel, the groups treated no matter the score, risk enhancers and the calcium score." },
    { id: "p4", title: "Part 4 · The other risk factors", blurb: "Diabetes, blood pressure, sleep apnea, alcohol, smoking and aspirin, then Thomas's 14 years put it all together." }
  ];

  var lessons = [
    /* ---------------- 1 ---------------- */
    {
      id: "cad2l-two-kinds", part: "p1", title: "Primary vs secondary prevention", goal: "Primary prevents the first event; secondary stops it coming back.",
      pages: [
        { title: "Before and after", fig: { type: "flow", steps: ["At risk, no CAD<br><small>PRIMARY: keep it from starting</small>", "First event or diagnosis", "Has ASCVD<br><small>SECONDARY: stop progression and repeat events</small>"], hi: 1 },
          html: "<p><strong>Primary</strong> prevention is for people without CAD: lifestyle, risk factors, catching metabolic problems early.</p>" +
            "<p><strong>Secondary</strong> prevention is for people who already have it: slow the plaque, prevent more damage. Example: a <strong>high-intensity statin for everyone with clinical ASCVD</strong>.</p>" +
            mn("Primary = before the first event. Secondary = after the disease is there.") },
        { title: "Risk checks by age", fig: { type: "grid", cols: ["Age", "Approach"], rows: [["20 to 29", "Find risk factors early, lifetime risk, family history; consider lipid-lowering if LDL ≥ 160 or strong premature family history"], ["30 to 79", "PREVENT-ASCVD 10-year risk; also 30-year risk at 30 to 59"]] },
          html: "<p>At every routine visit: check BP, lipids, smoking, diabetes, kidneys and lifestyle, estimate risk when it guides treatment, and <strong>reassess</strong> as things change.</p>" }
      ],
      checks: [
        K("A 60-year-old with a stent from last year is started on a high-intensity statin. Which prevention?", "Secondary", ["Primary", "Tertiary screening", "None, statins are not prevention"], "He already has ASCVD, so the goal is preventing the next event."),
        K("Which ages get a 10-year PREVENT-ASCVD estimate?", "30 to 79", ["20 to 29", "18 to 40", "Over 80 only"], "PREVENT's 10-year model is built for ages 30 to 79."),
        K("A 25-year-old has LDL 175. What does the deck suggest?", "Consider earlier lipid-lowering", ["Nothing until age 40", "Calculate 10-year PREVENT risk", "Start aspirin"], "Young adults with LDL ≥ 160 or strong family history may warrant earlier treatment.")
      ],
      remember: [
        "Primary: no CAD yet. Secondary: has ASCVD → e.g., high-intensity statin.",
        "20 to 29: find risk factors; LDL ≥ 160 or strong family history → consider treating.",
        "30 to 79: PREVENT 10-year; 30 to 59 also 30-year."
      ],
      practice: [ obj("01-primary-secondary", "test", "Test: prevention basics", "Quick recall.") ]
    },

    /* ---------------- 2 ---------------- */
    {
      id: "cad2l-prevent", part: "p1", title: "PREVENT: what it adds", goal: "PREVENT adds the kidneys, metabolism and the neighborhood to the old risk equation.",
      pages: [
        { title: "Three models", fig: { type: "tiles", items: [["❤️", "PREVENT-ASCVD", "MI and stroke: use this for lipid decisions"], ["💧", "PREVENT-HF", "heart failure"], ["🫀", "PREVENT-CVD", "total: ASCVD + HF"], ["⏱️", "10-year: 30 to 79", "30-year: 30 to 59"]] },
          html: "<p>The 2026 update makes <strong>PREVENT-ASCVD</strong> the preferred calculator.</p>" },
        { title: "New inputs", fig: { type: "grid", cols: ["Input", "Old PCE", "PREVENT", "Why it matters"], rows: [["Age, sex, TC, HDL, SBP, BP meds, DM, smoking", "Yes", "Yes", "The classics"], ["eGFR", "No", "Yes", "CKD raises CV risk"], ["BMI", "No", "Yes", "Brings in metabolic health"], ["UACR", "No", "Optional", "Kidney damage before eGFR falls"], ["A1c", "No", "Optional", "More than a yes/no diabetes box"], ["Social deprivation index", "No", "Optional", "ZIP code: access, money, education, housing"]], hiCol: 2 },
          html: mn("PREVENT adds the <strong>kidney</strong> (eGFR, UACR), <strong>metabolism</strong> (BMI, A1c) and the <strong>neighborhood</strong> (ZIP code).") }
      ],
      checks: [
        K("Which PREVENT model guides lipid-lowering decisions?", "PREVENT-ASCVD", ["PREVENT-HF", "PREVENT-CVD", "The Framingham HF criteria"], "Lipid decisions target MI and stroke risk."),
        K("Which input is in PREVENT's base equation but not the PCE?", "eGFR", ["Age", "Smoking", "Systolic BP"], "Kidney function was missing from the old equations."),
        K("What does the social deprivation index use?", "The patient's ZIP code", ["Income tax returns", "The A1c", "The urine albumin"], "It summarizes access, resources, education and housing by ZIP code."),
        K("Why add UACR?", "It finds kidney damage before eGFR falls", ["It measures LDL particles", "It replaces BP", "It diagnoses heart failure"], "Albuminuria shows early kidney injury even with a normal eGFR.")
      ],
      remember: [
        "PREVENT-ASCVD (MI, stroke), -HF, -CVD (total). ASCVD model for lipids.",
        "10-year 30 to 79; 30-year 30 to 59.",
        "New: eGFR, BMI (base); UACR, A1c, social deprivation index (optional)."
      ],
      practice: [ obj("02-prevent", "test", "Test: PREVENT", "Quick recall.") ]
    },

    /* ---------------- 3 ---------------- */
    {
      id: "cad2l-bands", part: "p1", title: "What the PREVENT number means", goal: "3, 5, 10: low, borderline, intermediate, high.",
      pages: [
        { title: "Drag the risk", fig: { type: "slider", label: "10-year PREVENT-ASCVD risk", unit: "%", min: 0, max: 20, step: 0.5, value: 4,
          bands: [[3, "Low", "Lifestyle is central. Therapy only in select patients: LDL 160 to 189, or 30-year risk ≥ 10% (ages 30 to 59).", "pci"], [5, "Borderline", "A statin MAY be considered after a clinician-patient discussion.", "ok"], [10, "Intermediate", "A statin SHOULD be considered after a discussion.", "ok"], [null, "High", "A statin IS recommended.", "bad"]],
          caption: "Bands from slide 13; approaches from slide 28." },
          html: mn("3, 5, 10. Then <strong>may → should → is recommended</strong>.") },
        { title: "Who it's not for", fig: { type: "tiles", items: [["❤️", "Known CVD", "already secondary prevention"], ["🦴", "CAC ≥ 300", "severe subclinical disease"], ["🩺", "End-stage kidney disease", ""], ["⏳", "Life expectancy < 1 year", ""], ["🧬", "Inherited high-risk conditions", ""]] },
          html: "<p>PREVENT is for adults <strong>30 to 79 without known CVD or subclinical atherosclerosis</strong>. In these groups the risk is already set, so the calculator would mislead.</p>" }
      ],
      checks: [
        K("10-year PREVENT-ASCVD risk is 7%. Which band?", "Intermediate", ["Low", "Borderline", "High"], "5 to under 10% is intermediate."),
        K("Risk is 12%. What does the deck say about a statin?", "It is recommended", ["It may be considered", "It is not indicated", "Only lifestyle"], "At 10% or more, therapy is recommended."),
        K("Which patient should NOT be assessed with PREVENT?", "A man with a CAC score of 400", ["A 45-year-old with no CVD", "A 60-year-old smoker without CVD", "A 35-year-old with high LDL"], "CAC ≥ 300 is severe subclinical disease, so the calculator doesn't apply.")
      ],
      remember: [
        "&lt; 3% low; 3 to &lt; 5% borderline; 5 to &lt; 10% intermediate; ≥ 10% high.",
        "Borderline may, intermediate should, high is recommended.",
        "Not for: known CVD, CAC ≥ 300, ESKD, life expectancy &lt; 1 yr, inherited high-risk conditions."
      ],
      practice: [ obj("03-prevent-use", "test", "Test: risk bands", "Quick recall."), obj("03-prevent-use", "apply", "Apply: read the number", "Short vignettes.") ]
    },

    /* ---------------- 4 ---------------- */
    {
      id: "cad2l-habits", part: "p2", title: "The five healthy habits", goal: "Education first, then diet, risky foods, water, activity and sleep.",
      pages: [
        { title: "Five habits", fig: { type: "tiles", items: [["🥗", "1 · Heart-healthy diet", "plants, fish, lean protein; unsaturated fats"], ["🚫", "2 · Limit risky foods", "saturated/trans fat, processed meat, salt, added sugar"], ["💧", "3 · Hydration", "water over sugary drinks"], ["🏃", "4 · Activity", "150 min moderate or 75 vigorous + 2 strength days"], ["😴", "5 · Sleep", "7 to 9 hours"]] },
          html: "<p>Risk reduction starts with <strong>education</strong>. Healthy patients: keep going. Unhealthy habits: more counseling and <strong>specific, attainable goals</strong>.</p>" +
            mn("150 or 75, plus 2 strength days, plus 7 to 9 hours of sleep.") },
        { title: "How adults actually spend the day", fig: { type: "bars", items: [["Sedentary", 100, "> 7 hours a day", "bad"], ["Moderate/vigorous activity", 3, "about 12 minutes a day", "bad"]], note: "Bar length = time per day. 1 in 3 adults sleeps less than 7 hours." },
          html: "<p>There's a lot of room to improve, and small steps count.</p>" }
      ],
      checks: [
        K("Weekly aerobic activity goal?", "≥ 150 min moderate or ≥ 75 min vigorous", ["30 min a month", "≥ 500 min vigorous", "Only strength training"], "Either amount meets the goal, plus 2 strength days."),
        K("How much sleep does the deck recommend?", "7 to 9 hours", ["4 to 5 hours", "5 to 6 hours", "10 to 12 hours"], "Short sleep is common and adds risk."),
        K("Which fat swap is recommended?", "Saturated fats → unsaturated fats like olive oil and nuts", ["Unsaturated → trans fats", "All fats → sugar", "Fish → processed meat"], "Unsaturated fats replace the harmful saturated ones.")
      ],
      remember: [
        "Education first; specific, attainable goals.",
        "Diet, limit risky foods, water, 150/75 min + 2 strength days, 7 to 9 h sleep.",
        "Adults: &gt; 7 h sedentary, ~12 min of activity a day."
      ],
      practice: [ obj("04-healthy-habits", "test", "Test: healthy habits", "Quick recall.") ]
    },

    /* ---------------- 5 ---------------- */
    {
      id: "cad2l-exercise", part: "p2", title: "How hard, and who needs clearance", goal: "Moderate = 3 to 5.9 METs, talk but can't sing. Symptoms or ASCVD/DM/CKD can mean clearance first.",
      pages: [
        { title: "The intensity ladder", fig: { type: "bars", items: [["Sedentary · 1 to 1.5 METs", 12, "sitting, TV", "ok"], ["Light · 1.6 to 2.9", 30, "talk AND sing", "good"], ["Moderate · 3 to 5.9", 60, "talk, but not sing", "good"], ["Vigorous · ≥ 6", 100, "only a few words", "bad"]], note: "Bar length = effort. Moderate: brisk walk 3 to 4 mph. Vigorous: jogging ≥ 6 mph, laps." },
          html: hy("The <strong>talk test</strong>: if you can talk but not sing, it's moderate.") },
        { title: "Who needs clearance first", fig: { type: "flow", steps: ["Symptoms? (angina, dyspnea, PND, syncope, palpitations, murmur)<br><small>yes → clearance, often a stress test</small>", "No symptoms, but ASCVD, diabetes or CKD?<br><small>not exercising → clearance; wants vigorous → clearance (unless in the past 12 months)</small>", "None of these<br><small>no clearance: start light, build up</small>"], vertical: true },
          html: "<p>Already exercising moderately with ASCVD, DM or CKD and staying moderate? <strong>No clearance</strong> needed.</p>" },
        { title: "Why exercise works", fig: { type: "tiles", items: [["⬇️", "Abdominal fat", ""], ["⬇️", "Blood pressure", ""], ["⬇️", "Triglycerides", ""], ["⬆️", "HDL", ""], ["⬆️", "Insulin sensitivity", ""]] },
          html: "<p>It's also antithrombotic, improves endothelial and autonomic function, and is anti-ischemic and antiarrhythmic: many pathways at once.</p>" }
      ],
      checks: [
        K("Your patient can talk but not sing while cycling. Intensity?", "Moderate", ["Sedentary", "Light", "Vigorous"], "Talking without singing is the talk-test sign of moderate effort."),
        K("Jogging at 6 mph is how many METs?", "≥ 6 (vigorous)", ["1 to 1.5", "1.6 to 2.9", "3 to 5.9"], "Running at 6 mph or more is vigorous."),
        K("An asymptomatic diabetic who doesn't exercise wants to start. Clearance?", "Yes, recommended", ["No, never", "Only if over 80", "Only for swimming"], "Asymptomatic DM, ASCVD or CKD and inactive → clearance first."),
        K("Which lipid does exercise raise?", "HDL", ["LDL", "Triglycerides", "Lp(a)"], "Exercise raises HDL and lowers triglycerides.")
      ],
      remember: [
        "METs: light 1.6 to 2.9, moderate 3 to 5.9, vigorous ≥ 6.",
        "Talk test: light sing, moderate talk, vigorous a few words.",
        "Clearance: any symptoms; or ASCVD/DM/CKD and inactive or going vigorous.",
        "Exercise: ↓ fat, BP, TG; ↑ HDL, insulin sensitivity."
      ],
      practice: [ obj("05-exercise", "test", "Test: exercise", "Quick recall."), obj("05-exercise", "apply", "Apply: clearance cases", "Short vignettes.") ]
    },

    /* ---------------- 6 ---------------- */
    {
      id: "cad2l-statins", part: "p3", title: "Statin intensity, and who must have one", goal: "Only atorvastatin and rosuvastatin go high; everyone with ASCVD gets high intensity.",
      pages: [
        { title: "High vs moderate", fig: { type: "grid", cols: ["Intensity", "Statins"], rows: [["High (LDL ↓ ≥ 50%)", "Atorvastatin 40 to 80; rosuvastatin 20 to 40"], ["Moderate (LDL ↓ 30 to 49%)", "Atorvastatin 10 to 20; rosuvastatin 5 to 10; lovastatin, pravastatin, simvastatin 40"]], hiCol: 1 },
          html: "<p>Lipids are one of the most important things to control, and statins do most of the work. Percent drops are standard teaching.</p>" +
            mn("High: <strong>A 40-80, R 20-40</strong>. Moderate: halve them, and the rest are 40.") },
        { title: "Clinical ASCVD = high-intensity statin", fig: { type: "tiles", items: [["❤️", "Coronary", "ACS, MI, angina, stent, CABG"], ["🧠", "Cerebral", "ischemic stroke, TIA"], ["🦵", "Peripheral", "PAD"], ["🫀", "Aortic", "atherosclerotic aneurysm"]] },
          html: hy("Anyone with clinical ASCVD gets a <strong>high-intensity statin regardless of lipids</strong>.") }
      ],
      checks: [
        K("Which is a high-intensity statin dose?", "Rosuvastatin 20 mg", ["Rosuvastatin 5 mg", "Pravastatin 40 mg", "Simvastatin 40 mg"], "Rosuvastatin 20 to 40 is high intensity."),
        K("A man with a prior TIA has LDL 85. Statin?", "High-intensity, regardless of LDL", ["None, LDL is under 100", "Moderate-intensity only", "Only if PREVENT ≥ 10%"], "TIA is clinical ASCVD, so secondary prevention applies."),
        K("Atorvastatin 20 mg is which intensity?", "Moderate", ["High", "Low", "Not a statin"], "Atorvastatin reaches high intensity only at 40 to 80.")
      ],
      remember: [
        "High: atorva 40 to 80, rosuva 20 to 40 (only these two).",
        "Moderate: atorva 10 to 20, rosuva 5 to 10, lova/prava/simva 40.",
        "Clinical ASCVD (coronary, stroke/TIA, PAD, aortic aneurysm) → high intensity regardless of lipids."
      ],
      practice: [ obj("06-statins-secondary", "test", "Test: statin intensity", "Quick recall."), obj("06-statins-secondary", "apply", "Apply: which statin?", "Short vignettes.") ]
    },

    /* ---------------- 7 ---------------- */
    {
      id: "cad2l-lipid-panel", part: "p3", title: "The lipid panel and who gets treated", goal: "Read each number; LDL ≥ 190, diabetes, CKD 3-4 and HIV get treated regardless of score.",
      pages: [
        { title: "Drag the LDL", fig: { type: "slider", label: "LDL-C", unit: " mg/dL", min: 60, max: 240, step: 5, value: 120,
          bands: [[100, "Desirable", "Under 100.", "pci"], [130, "Above desirable", "100 to 129 isn't named on the slide (often called near optimal, standard teaching).", "ok"], [160, "Borderline high", "130 to 159.", "ok"], [190, "High", "160 to 189.", "bad"], [null, "Very high", "Treat regardless of calculated risk and check for familial hypercholesterolemia.", "bad"]],
          caption: "Conventional categories (slide 24), not individual goals." },
          html: "<p>Read every component, not just total cholesterol: <strong>LDL, HDL, total, triglycerides</strong>. HDL ≥ 60 protects; low is &lt; 40 in men, &lt; 50 in women. TG &lt; 150 desirable, ≥ 500 very high.</p>" },
        { title: "Treated no matter the score", fig: { type: "tiles", items: [["🔟", "LDL ≥ 190", "any age; check for FH"], ["🍬", "Diabetes", "ages 40 to 75"], ["🫘", "CKD stage 3 or 4", "ages 40 to 75"], ["🧬", "HIV", "ages 40 to 75"]] },
          html: mn("<strong>190, D, K, HIV</strong>.") + "<p>Everyone else 30 to 79 with LDL 70 to 189 and no ASCVD: use PREVENT.</p>" },
        { title: "Calculate, personalize, reclassify", fig: { type: "flow", steps: ["Calculate<br><small>10-year PREVENT; 30-year if 30 to 59</small>", "Personalize<br><small>family history, LDL, Lp(a), inflammation</small>", "Reclassify<br><small>CAC if still unsure</small>"], hi: 1 },
          html: "<p>The number starts the talk; the patient's other risks and preferences finish it.</p>" }
      ],
      checks: [
        K("A 30-year-old has LDL 205. Next step?", "Start lipid-lowering and evaluate for familial hypercholesterolemia", ["Calculate PREVENT first", "Recheck in 10 years", "Aspirin only"], "LDL ≥ 190 is treated without relying on calculated risk."),
        K("A 50-year-old with diabetes, LDL 110, PREVENT 4%. Statin?", "Yes, diabetes at 40 to 75 is an indication", ["No, risk is borderline", "Only if LDL ≥ 190", "Only after a CAC"], "Diabetes at 40 to 75 earns therapy regardless of PREVENT."),
        K("Low HDL in a woman is under what value?", "50 mg/dL", ["40 mg/dL", "60 mg/dL", "100 mg/dL"], "Low HDL is under 40 in men and under 50 in women."),
        K("After calculating PREVENT, what is the next step?", "Personalize with risk enhancers", ["Always order a cath", "Stop all statins", "Repeat PREVENT daily"], "The order is calculate, personalize, then reclassify.")
      ],
      remember: [
        "LDL &lt; 100 desirable; 130 to 159 borderline; 160 to 189 high; ≥ 190 very high.",
        "HDL ≥ 60 protective; low &lt; 40 men, &lt; 50 women. TG &lt; 150; ≥ 500 very high.",
        "Treat regardless: LDL ≥ 190; DM, CKD 3 to 4, HIV at 40 to 75.",
        "Calculate → personalize → reclassify (CAC)."
      ],
      practice: [ obj("07-lipid-primary", "test", "Test: lipid panel", "Quick recall."), obj("07-lipid-primary", "apply", "Apply: treat or not?", "Short vignettes.") ]
    },

    /* ---------------- 8 ---------------- */
    {
      id: "cad2l-enhancers", part: "p3", title: "Risk enhancers: Lp(a), ApoB, hs-CRP", goal: "Enhancers push a borderline decision toward treatment.",
      pages: [
        { title: "Beyond the calculator", fig: { type: "grid", cols: ["Group", "Enhancers"], rows: [["Family, ancestry", "Premature ASCVD in a parent or sibling; South Asian, Filipino"], ["Lipids", "Lp(a) ≥ 125 nmol/L; LDL 160 to 189; ApoB ≥ 120; high TG"], ["Inflammation", "RA, SLE, psoriasis; hs-CRP ≥ 2 twice"], ["Pregnancy history", "Menopause before 40, preeclampsia, gestational DM or HTN, preterm birth"]] },
          html: "<p>These are things PREVENT doesn't capture. They help you <strong>personalize</strong>.</p>" },
        { title: "ApoB vs Lp(a)", fig: { type: "quad", x: ["ApoB", "Lp(a)"], y: ["Think", "When"], cells: [["Particle NUMBER", "one ApoB per atherogenic particle", "blue"], ["Inherited risk particle", "LDL-like + apolipoprotein(a)", "ok"], ["High TG, diabetes, CKM: when LDL underestimates", "risk ≥ 120 mg/dL", "blue"], ["Measure at least once in every adult", "≥ 125 nmol/L ≈ 1.4×; ≥ 250 ≈ 2×", "ok"]] },
          html: hy("High Lp(a) → manage every modifiable risk factor harder and lower LDL more.") },
        { title: "hs-CRP", fig: { type: "flow", steps: ["No ASCVD", "Borderline PREVENT (3 to < 5%)", "hs-CRP ≥ 2 twice, no other cause", "High-intensity statin can be useful"], hi: 3 },
          html: "<p>CRP is a marker of inflammation, and inflammation drives plaque.</p>" }
      ],
      checks: [
        K("How often should Lp(a) be measured?", "At least once in all adults", ["Every month", "Only after an MI", "Never; it isn't useful"], "Lp(a) is largely genetic, so one measurement shows the lifelong risk."),
        K("ApoB is most useful when…", "Triglycerides are high or the patient has diabetes", ["LDL is the only abnormality", "The patient has a stent", "The A1c is normal and TG low"], "LDL-C underestimates particle number in those settings."),
        K("Which pregnancy history is a risk enhancer?", "Preeclampsia", ["One uncomplicated term birth", "Breastfeeding", "Morning sickness"], "Preeclampsia and gestational DM/HTN raise later CV risk."),
        K("Borderline PREVENT risk and hs-CRP 3 mg/L on two occasions. What can help?", "A high-intensity statin", ["Aspirin for everyone", "No action", "A cath"], "Persistent inflammation tips a borderline patient toward treatment.")
      ],
      remember: [
        "Enhancers: premature family history, South Asian/Filipino, Lp(a), LDL 160 to 189, ApoB ≥ 120, inflammation, hs-CRP ≥ 2, pregnancy complications, early menopause.",
        "ApoB = particle number; Lp(a) = inherited, check once.",
        "Borderline + hs-CRP ≥ 2 twice → high-intensity statin can be useful."
      ],
      practice: [ obj("08-risk-enhancers", "test", "Test: risk enhancers", "Quick recall."), obj("08-risk-enhancers", "apply", "Apply: personalize", "Short vignettes.") ]
    },

    /* ---------------- 9 ---------------- */
    {
      id: "cad2l-cac", part: "p3", title: "CAC to break the tie", goal: "0 may defer a statin (with exceptions); ≥ 100 supports one.",
      pages: [
        { title: "Drag the calcium score", fig: { type: "slider", label: "CAC score", min: 0, max: 400, step: 1, value: 0,
          bands: [[1, "CAC 0", "May support deferring therapy, unless diabetes, smoking or strong family history.", "pci", "0"], [100, "CAC 1 to 99", "Atherosclerosis is present: decide by overall risk and the CAC percentile.", "ok", "1 to 99"], [null, "CAC ≥ 100", "Supports lipid-lowering therapy (so does ≥ 75th percentile).", "bad", "≥ 100"]],
          caption: "For borderline or intermediate PREVENT risk when the decision is still unclear (slide 35)." },
          html: hy("A CAC of 0 does <strong>not</strong> cancel a statin in a <strong>smoker, diabetic or strong family history</strong>.") }
      ],
      checks: [
        K("Who should get a CAC score for reclassification?", "Borderline or intermediate risk with an uncertain decision", ["Everyone over 20", "Patients with known CAD", "Patients with LDL ≥ 190"], "CAC helps when the statin decision is a toss-up."),
        K("CAC 150 in an intermediate-risk patient. What does it support?", "Lipid-lowering therapy", ["Stopping the statin", "No follow-up", "A cath right away"], "CAC ≥ 100 shows enough plaque to favor treatment."),
        K("A smoker has CAC 0. Can you defer the statin on that basis?", "No, smoking is an exception", ["Yes, always", "Yes, if under 70", "Only with aspirin"], "CAC 0 can't see soft plaque, which smokers often have.")
      ],
      remember: [
        "Use CAC in borderline/intermediate risk when unsure.",
        "0 → may defer (not with DM, smoking, strong family history).",
        "1 to 99 → plaque present, use overall risk. ≥ 100 or ≥ 75th percentile → treat."
      ],
      practice: [ obj("09-cac-reclassify", "test", "Test: CAC", "Quick recall.") ]
    },

    /* ---------------- 10 ---------------- */
    {
      id: "cad2l-diabetes", part: "p4", title: "Diabetes", goal: "Diagnose at A1c ≥ 6.5%, aim for < 7%, and use GLP-1 RA or SGLT2i when there's ASCVD, HF or CKD.",
      pages: [
        { title: "Drag the A1c", fig: { type: "slider", label: "A1c", unit: "%", min: 4.5, max: 10, step: 0.1, value: 6.0,
          bands: [[5.7, "Normal", "Below 5.7%.", "pci"], [6.5, "Prediabetes", "5.7 to 6.4%.", "ok"], [null, "Diabetes", "≥ 6.5%. Also: fasting glucose ≥ 126, 2-hour OGTT ≥ 200, or random ≥ 200 with symptoms.", "bad"]] },
          html: "<p>Goals: <strong>&lt; 7%</strong> for most; <strong>&lt; 6.5%</strong> for selected patients if safe; <strong>&lt; 8%</strong> with frailty, heavy comorbidity or limited life expectancy.</p>" +
            mn("7 for most, 6.5 for the fit, 8 for the frail.") },
        { title: "Drugs with heart and kidney benefit", fig: { type: "flow", steps: ["Type 2 DM", "+ ASCVD, heart failure or CKD", "GLP-1 RA and/or SGLT2 inhibitor<br><small>regardless of A1c or metformin</small>"], hi: 2 },
          html: "<p>Choose by the heart and kidney picture, glucose needs, weight goals, side effects and preference.</p>" },
        { title: "Diabetes that raises CV risk more", fig: { type: "tiles", items: [["⏳", "Long duration", "≥ 10 yr type 2, ≥ 20 yr type 1"], ["🧪", "UACR ≥ 30", ""], ["🫘", "eGFR < 60", ""], ["👁️", "Retinopathy", ""], ["🦶", "Neuropathy", ""], ["🦵", "ABI < 0.9", ""]] },
          html: std("Type 1 gets 20 years because it starts on a known date in youth; type 2 is usually found years after it began, in older patients.") }
      ],
      checks: [
        K("A1c 6.2% means what?", "Prediabetes", ["Normal", "Diabetes", "Hypoglycemia"], "5.7 to 6.4% is prediabetes."),
        K("A frail 82-year-old with diabetes. A1c goal?", "< 8%", ["< 6%", "< 6.5%", "No goal"], "Looser goals avoid hypoglycemia in frail patients."),
        K("Type 2 diabetes with heart failure and A1c 6.8%. Add what?", "An SGLT2 inhibitor (or GLP-1 RA) with proven benefit", ["Nothing; A1c is near goal", "Insulin only", "A sulfonylurea"], "With HF, ASCVD or CKD these drugs help regardless of A1c."),
        K("Which diabetes feature raises CV risk?", "UACR ≥ 30 mg/g", ["A1c 5.5%", "Diagnosis last year", "Normal ABI"], "Albuminuria signals vascular and kidney damage.")
      ],
      remember: [
        "Prediabetes 5.7 to 6.4%; diabetes ≥ 6.5% (FPG ≥ 126, OGTT or random ≥ 200).",
        "Goal &lt; 7% most; &lt; 6.5% fit; &lt; 8% frail.",
        "T2DM + ASCVD, HF or CKD → GLP-1 RA and/or SGLT2i regardless of A1c.",
        "Higher-risk DM: ≥ 10 yr T2 / ≥ 20 yr T1, UACR ≥ 30, eGFR &lt; 60, retinopathy, neuropathy, ABI &lt; 0.9."
      ],
      practice: [ obj("10-diabetes", "test", "Test: diabetes", "Quick recall."), obj("10-diabetes", "apply", "Apply: diabetes cases", "Short vignettes.") ]
    },

    /* ---------------- 11 ---------------- */
    {
      id: "cad2l-bp-osa", part: "p4", title: "Blood pressure and sleep apnea", goal: "BP below 130/80; untreated OSA ends in right heart failure.",
      pages: [
        { title: "BP to goal", fig: { type: "tiles", items: [["🎯", "< 130/80", "most adults"], ["⬇️", "SBP < 120", "consider with higher CV risk"], ["🏠", "Confirm it", "office + home or ambulatory"]] },
          html: "<p>Confirm with standardized office readings and home or ambulatory BP. Goal <strong>&lt; 130/80</strong> for most; consider <strong>SBP &lt; 120</strong> in higher-risk patients. Individualize for frailty and orthostasis, and pick drugs by compelling indication.</p>" },
        { title: "What OSA does every night", fig: { type: "cycle", nodes: ["Airway collapses", "O₂ drops", "Brief arousal", "Sympathetic surge: ↑ HR, ↑ BP", "Airway reopens, sleep again"], center: "all night" },
          html: "<p>Night after night: inflammation, endothelial dysfunction, CV stress. Untreated: <strong>RV hypertrophy → pulmonary hypertension → cor pulmonale</strong>.</p>" +
            hy("Treatment: CPAP or BiPAP <strong>every night</strong>.") }
      ],
      checks: [
        K("General BP goal for most adults?", "< 130/80", ["< 140/90", "< 160/100", "< 110/60"], "The deck sets 130/80 for most adults."),
        K("What does each apnea episode trigger?", "A sympathetic surge with higher HR and BP", ["Lower BP", "Vagal bradycardia only", "Nothing"], "The arousal comes with sympathetic activation."),
        K("Untreated OSA can end in which heart problem?", "Right-sided heart failure (cor pulmonale)", ["Aortic stenosis", "Mitral prolapse", "WPW"], "Repeated hypoxia causes pulmonary hypertension that strains the RV.")
      ],
      remember: [
        "BP &lt; 130/80; SBP &lt; 120 for some higher-risk patients.",
        "OSA: obstruction → hypoxemia → arousal → sympathetic surge, all night.",
        "Untreated: RVH → pulmonary HTN → cor pulmonale. CPAP/BiPAP nightly."
      ],
      practice: [ obj("11-htn-osa", "test", "Test: BP and OSA", "Quick recall.") ]
    },

    /* ---------------- 12 ---------------- */
    {
      id: "cad2l-alcohol", part: "p4", title: "Alcohol", goal: "Know binge and heavy cutoffs and what one drink really is.",
      pages: [
        { title: "Binge and heavy", fig: { type: "grid", cols: ["", "Women", "Men"], rows: [["Binge (one occasion)", "≥ 4", "≥ 5"], ["Heavy (per week)", "≥ 8", "≥ 15"], ["Limit if still drinking (BP)", "≤ 1/day", "≤ 2/day"]] },
          html: "<p>CV risk rises with more alcohol; heavy and binge drinking are worst. For BP, the 2025 guideline says <strong>abstinence</strong> is the best goal.</p>" },
        { title: "One drink is…", fig: { type: "tiles", items: [["🍺", "12 oz beer", "4 to 5%"], ["🍷", "5 oz wine", ""], ["🥃", "1.5 oz liquor", ""]] },
          html: an("A big wine glass can hold far more than 5 oz, so most people drink more than they think.") }
      ],
      checks: [
        K("A woman has 4 drinks at a party. What is it called?", "Binge drinking", ["Moderate drinking", "Heavy weekly drinking", "Safe drinking"], "Four or more in one sitting is a binge for women."),
        K("Heavy drinking for men is how many drinks a week?", "≥ 15", ["≥ 5", "≥ 8", "≥ 30"], "Men cross into heavy at 15 a week; women at 8."),
        K("One standard drink of wine is…", "5 oz", ["12 oz", "1.5 oz", "10 oz"], "Five ounces of wine equals one drink.")
      ],
      remember: [
        "Binge: women ≥ 4, men ≥ 5. Heavy/week: women ≥ 8, men ≥ 15.",
        "One drink: 12 oz beer, 5 oz wine, 1.5 oz liquor.",
        "BP: abstinence is optimal; otherwise ≤ 1 (women) or ≤ 2 (men) a day."
      ],
      practice: [ obj("12-alcohol", "test", "Test: alcohol", "Quick recall.") ]
    },

    /* ---------------- 13 ---------------- */
    {
      id: "cad2l-smoking", part: "p4", title: "Smoking cessation", goal: "Ask every visit; an adjunct doubles success.",
      pages: [
        { title: "Every visit", fig: { type: "flow", steps: ["Ask<br><small>how much (1 pack = 20)</small>", "Advise<br><small>quit</small>", "Assess<br><small>ready? tried before?</small>", "Assist<br><small>offer an adjunct</small>", "Arrange<br><small>follow-up</small>"], hi: 3 },
          html: "<p>The quick version is <strong>Ask, Advise, Connect</strong>; the longer one is the <strong>5 A's</strong>. Ask about chewing tobacco and vaping too.</p>" +
            hy("An adjunct <strong>doubles</strong> the quit rate.") },
        { title: "The drugs", fig: { type: "grid", cols: ["Drug", "Dose", "Watch for"], rows: [["Nicotine patch", "21 mg if > ½ ppd; 14 mg if < ½", "Skin irritation; take off for sleep"], ["Gum / lozenge", "4 mg if first smoke ≤ 30 min after waking, else 2 mg", "Hiccups, GERD; not 15 min around meals"], ["Inhaler (nasal/oral)", "1 to 2 sprays/h, or puff 20 min/h", "Local irritation; airway disease"], ["Bupropion", "150 mg × 3 days, then BID", "Seizures, eating disorders, MAOIs"], ["Varenicline", "0.5 mg, titrate to 1 mg BID", "Nausea, vivid dreams; adjust for CKD"]] },
          html: mn("Bupropion: no <strong>S</strong>eizures, <strong>E</strong>ating disorders, <strong>M</strong>AOIs. Varenicline: <strong>N</strong>ausea, <strong>D</strong>reams, <strong>K</strong>idneys.") }
      ],
      checks: [
        K("Which cessation drug is contraindicated with a seizure history?", "Bupropion", ["Varenicline", "Nicotine patch", "Nicotine gum"], "Bupropion lowers the seizure threshold."),
        K("A patient smokes his first cigarette 10 minutes after waking. Gum dose?", "4 mg", ["2 mg", "21 mg", "0.5 mg"], "Smoking within 30 minutes of waking means heavier dependence."),
        K("Varenicline's most common side effect?", "Nausea", ["Seizures", "Hiccups", "Hyperkalemia"], "Nausea is common; vivid dreams too."),
        K("How much does adding an adjunct improve quitting?", "It doubles the success rate", ["No change", "It halves it", "It guarantees success"], "Medication support doubles quit rates.")
      ],
      remember: [
        "Ask every visit (1 pack = 20 cigarettes); vaping and chew too.",
        "5 A's: Ask, Advise, Assess, Assist, Arrange.",
        "Adjunct doubles success. Patch 21/14; gum 4/2 by the 30-minute rule.",
        "Bupropion: no seizures, eating disorders, MAOIs. Varenicline: nausea, dreams, CKD dose."
      ],
      practice: [ obj("13-smoking", "test", "Test: smoking", "Quick recall."), obj("13-smoking", "apply", "Apply: pick the drug", "Short vignettes.") ]
    },

    /* ---------------- 14 ---------------- */
    {
      id: "cad2l-aspirin", part: "p4", title: "Aspirin and the big picture", goal: "No routine primary-prevention aspirin; lifestyle is the biggest lever.",
      pages: [
        { title: "Aspirin for primary prevention?", fig: { type: "grid", cols: ["Who", "Aspirin 81 mg?"], rows: [["Most adults without ASCVD", "Not routinely"], ["40 to 70, high CV risk, low bleeding risk", "May be considered"], ["Over 70", "Don't routinely start"], ["High bleeding risk", "Don't routinely start"]] },
          html: "<p>It's benefit vs bleeding. Aspirin after an event (secondary) is a different question.</p>" },
        { title: "Take-home", fig: { type: "tiles", items: [["🥗", "Lifestyle, lifestyle, lifestyle", "biggest impact"], ["🎯", "Gateway diseases to goal", "HTN, lipids, DM"], ["⏰", "Start early", ""], ["🧮", "Calculate, personalize, reclassify", ""], ["📌", "Independent indications", "LDL ≥ 190, DM, CKD 3 to 4"], ["🚭", "All risk factors", "smoking, activity, food, BP"]] },
          html: "<p>Atherosclerosis takes decades, so start before short-term risk is high.</p>" }
      ],
      checks: [
        K("A 75-year-old without ASCVD asks about starting aspirin. Advice?", "Don't routinely start it", ["Start 325 mg daily", "Start 81 mg for everyone over 70", "Only if LDL is high"], "Over 70, bleeding risk outweighs the benefit."),
        K("Who may be considered for primary-prevention aspirin?", "A 55-year-old with high CV risk and low bleeding risk", ["An 80-year-old on warfarin", "Most adults without ASCVD", "A patient with a recent GI bleed"], "Only selected 40 to 70-year-olds with low bleeding risk."),
        K("Which intervention has the biggest impact, per the deck?", "Lifestyle change", ["Aspirin", "Calcium scoring", "Annual stress tests"], "Lifestyle is hardest but matters most.")
      ],
      remember: [
        "Primary-prevention aspirin: not routine; maybe 40 to 70 with high risk and low bleeding risk; not &gt; 70.",
        "Lifestyle has the biggest impact; treat HTN, lipids, DM to goal; start early."
      ],
      practice: [ obj("14-aspirin-take-home", "test", "Test: aspirin", "Quick recall.") ]
    },

    /* ---------------- 15 ---------------- */
    {
      id: "cad2l-thomas", part: "p4", title: "Thomas: 14 years of prevention", goal: "See each rule from this lecture used in one patient.",
      pages: [
        { title: "Visit 1, age 52", fig: { type: "tiles", items: [["🚬", "1 ppd since 17", "35 pack-years"], ["🥩", "Meat department manager", "'my job is exercise'"], ["⚖️", "BMI 28, waist 110 cm", "afraid quitting adds weight"], ["🩺", "BP 117/68", "diet-controlled lipids"]] },
          html: "<p>#1 intervention: <strong>quit smoking</strong>. He refuses an adjunct, so ask him to think about each cigarette and cut down. Brisk walking ~20 minutes most days. Labs: CBC, chemistry, fasting lipids, A1c; see him in 3 months.</p>" },
        { title: "The years that follow", fig: { type: "flow", steps: ["3 months: ½ ppd; LDL 108, HDL 32, TG 398, GFR 55<br><small>CKD 3 at 40 to 75 → start lipid-lowering</small>", "Age 55: smoking again; A1c 7.7%<br><small>diabetes → statin indication; GLP-1 RA or SGLT2i; offer an adjunct</small>", "Within a year: hypertension<br><small>ARB to < 130/80</small>", "Age 66: NSTEMI → 3-vessel CABG<br><small>now secondary prevention: high-intensity statin</small>"], vertical: true },
          html: std("CKD needs a repeat eGFR at least 3 months later to confirm. An ARB fits because diabetes with CKD and albuminuria is a compelling indication.") }
      ],
      checks: [
        K("At visit 1, what is Thomas's most important intervention?", "Quitting smoking", ["Losing weight first", "Starting aspirin", "A stress test"], "Smoking is his biggest modifiable risk."),
        K("GFR 55 at 3 months, age 52. What does it trigger (if confirmed)?", "Lipid-lowering regardless of PREVENT", ["Nothing until 75", "Dialysis", "A cath"], "CKD stage 3 at 40 to 75 is an independent statin indication."),
        K("After his CABG, which statin plan applies?", "High-intensity, regardless of lipids", ["Stop the statin", "Moderate-intensity only", "Only if LDL > 190"], "He now has clinical ASCVD.")
      ],
      remember: [
        "Smoker first: quit, offer an adjunct, walk.",
        "CKD 3 or diabetes at 40 to 75 → statin regardless of PREVENT.",
        "T2DM + CKD → GLP-1 RA or SGLT2i; HTN + DM + CKD → ARB.",
        "After NSTEMI/CABG → secondary prevention, high-intensity statin."
      ],
      practice: [ obj("15-thomas-case", "learn", "Lecture: Thomas's case", "The full story."), obj("15-thomas-case", "apply", "Apply: Thomas's visits", "Case questions.") ]
    }
  ];

  window.CARDIO3_LEARN = window.CARDIO3_LEARN || {};
  window.CARDIO3_LEARN["cad-part-2"] = {
    prefix: "cad2l", short: "CAD Part II", heading: "CAD prevention from zero",
    kicker: "Risk reduction, step by step",
    card: "Drag a PREVENT score, an LDL, an A1c and a calcium score and see what each means, then statins, risk enhancers, exercise, smoking, alcohol and sleep apnea, and Thomas's 14 years. Short lessons with pictures and a few easy checks.",
    intro: "Fifteen short lessons, one idea per page. Start with lesson 1: measuring risk comes first, and the treatments hang off it.",
    parts: parts, lessons: lessons
  };
}());
