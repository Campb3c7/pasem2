/* Cardio Part 3, CAD Part II: Prevention & Risk Modification (Stager, 61 slides). Sections follow the deck, which walks
   the 7 objectives in order. Read from slide pictures: 18 (how US adults spend their day), 19 (METs, examples, talk
   test), 20 (exercise medical clearance algorithm), 45 (wine glass sizes), 53 (Thomas). Slide 14 is only the AHA
   PREVENT calculator link. The Thomas case (slides 53 to 59) asks "what do you do?" without an answer slide; the
   answers here apply the deck's own rules (slides 24, 26, 37, 39, 40, 23) and say so. */
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
  function note(x) { return '<div class="box-fix"><span class="lbl">Source note</span>' + x + "</div>"; }
  function tbl(head, rows) {
    return '<table class="learn-table"><tr>' + head.map(function (h) { return "<th>" + h + "</th>"; }).join("") + "</tr>" +
      rows.map(function (r) { return "<tr>" + r.map(function (d) { return "<td>" + d + "</td>"; }).join("") + "</tr>"; }).join("") + "</table>";
  }
  function ul(items) { return "<ul>" + items.map(function (i) { return "<li>" + i + "</li>"; }).join("") + "</ul>"; }
  function chain(steps) { return '<ol class="concept-chain">' + steps.map(function (s) { return "<li>" + s + "</li>"; }).join("") + "</ol>"; }


  window.CAD_PART_2_OBJECTIVES = [

    S("01-primary-secondary", "1. Primary vs secondary prevention and risk assessment", "Objectives 1 and 2 (slides 2 to 5): the two kinds of prevention, what primary care checks, and the approach by age.", [
      C("Primary vs secondary prevention",
        tbl(["", "Primary prevention", "Secondary prevention"], [
          ["Who", "People <strong>without</strong> CAD (at risk)", "People who <strong>already have</strong> CAD / ASCVD"],
          ["Goal", "<strong>Prevent CAD from developing</strong>", "<strong>Prevent progression</strong>, further cardiac damage and <strong>recurrent events</strong>"],
          ["How", "Lifestyle change; reduce modifiable risk factors; find <strong>metabolic abnormalities early</strong>", "Slow established atherosclerosis; e.g., <strong>high-intensity statin for everyone</strong> with clinical ASCVD"]]) +
        mn("<strong>Primary</strong> = before the <strong>first</strong> event. <strong>Secondary</strong> = after the disease is already there."),
        ["pp-def", "sp-def", "pp-sp-compare"],
        [q("Primary prevention aims to:", "Prevent CAD from developing", ["Prevent recurrent MI in known CAD", "Treat acute STEMI", "Rehabilitate after CABG"], "Slide 2."),
          q("Secondary prevention is for patients who:", "Already have a diagnosis of CAD", ["Have no risk factors", "Are under 20", "Have only a family history"], "Slide 2."),
          q("Which is a goal of secondary prevention?", "Reduce the risk of recurrent cardiovascular events", ["Prevent the first fatty streak", "Screen children for CAD", "Avoid all medications"], "Slide 2."),
          q("Primary prevention relies on lifestyle change and:", "Early identification of metabolic abnormalities", ["Emergency PCI", "CABG", "Thrombolytics"], "Slide 2.")],
        [q("A 58-year-old with a stent placed last year is started on a high-intensity statin. Which kind of prevention?", "Secondary prevention", ["Primary prevention", "Tertiary screening", "No prevention"], "Slides 2 and 23."),
          q("A healthy 35-year-old with high LDL and no heart disease starts a walking program. Which kind of prevention?", "Primary prevention", ["Secondary prevention", "Cardiac rehab", "Post-MI care"], "Slide 2.")]),
      C("Risk assessment in primary care, by age",
        tbl(["Every routine preventive visit"], [["Assess CV risk factors as part of <strong>routine preventive care</strong>"],
          ["Check <strong>BP, lipids, smoking, diabetes, kidney function, lifestyle</strong>"],
          ["<strong>Estimate risk</strong> when appropriate to guide treatment"], ["<strong>Reassess</strong> as circumstances change"]]) +
        tbl(["Age", "Approach"], [
          ["<strong>20 to 29</strong>", "Find and address risk factors <strong>early</strong>; assess <strong>lifetime risk</strong> and family history; consider <strong>earlier lipid-lowering</strong> in selected young adults: <strong>LDL ≥ 160</strong> or <strong>strong family history</strong> of premature ASCVD"],
          ["<strong>30 to 79</strong>", "Use <strong>PREVENT-ASCVD</strong> to estimate <strong>10-year risk</strong>; consider <strong>30-year risk</strong> at ages <strong>30 to 59</strong>; use the estimate with clinical risk factors"]]),
        ["ra-routine", "ra-checks", "ra-20s", "ra-30-79"],
        [q("Which is NOT listed among the items checked in routine CV risk assessment?", "Bone density", ["Blood pressure", "Kidney function", "Smoking status"], "Slide 3."),
          q("In adults 20 to 29, early lipid-lowering may be considered at an LDL of at least:", "160 mg/dL", ["100 mg/dL", "130 mg/dL", "250 mg/dL"], "Slide 4."),
          q("For ages 20 to 29, which risk is assessed when appropriate?", "Lifetime risk", ["10-year PREVENT risk", "Only 1-year risk", "No risk assessment"], "Slide 4."),
          q("PREVENT-ASCVD 10-year risk is used for ages:", "30 to 79", ["20 to 29", "40 to 75 only", "Over 80"], "Slide 5."),
          q("30-year risk is considered for eligible adults aged:", "30 to 59", ["60 to 79", "20 to 29", "Over 75"], "Slide 5."),
          q("How often should CV risk be reassessed?", "As clinical circumstances change", ["Never after age 30", "Only after an MI", "Only every 20 years"], "Slide 3.")],
        [q("A 26-year-old with LDL 172 and a father with an MI at 48 asks about medication. Best answer?", "Earlier lipid-lowering therapy can be considered in selected young adults like him", ["Wait until 40 for any lipid decision", "Use PREVENT 10-year risk now", "Nothing can be done before 30"], "Slide 4."),
          q("A 45-year-old without CVD needs a risk estimate. Which tool and time frame?", "PREVENT-ASCVD 10-year risk, and 30-year risk can be considered", ["Lifetime risk only", "Duke Treadmill Score", "No estimate until 75"], "Slide 5.")])
    ]),

    S("02-prevent", "2. PREVENT: the models and what is new vs PCE", "Objective 2 (slides 6 to 11): the three PREVENT models, time frames, and the new inputs eGFR, BMI, UACR, A1c and social deprivation.", [
      C("Three PREVENT models",
        "<p><strong>2026 update: PREVENT-ASCVD is the preferred risk calculator.</strong></p>" +
        tbl(["Model", "Estimates"], [
          ["<strong>PREVENT-ASCVD</strong>", "Risk of <strong>MI and stroke</strong>"],
          ["<strong>PREVENT-HF</strong>", "Risk of <strong>heart failure</strong>"],
          ["<strong>PREVENT-CVD</strong>", "<strong>Total CVD</strong> risk, including ASCVD and HF"]]) +
        tbl(["Time frame", "Eligible ages"], [["<strong>10-year</strong>", "<strong>30 to 79</strong>"], ["<strong>30-year</strong>", "<strong>30 to 59</strong>"]]) +
        hy("For <strong>lipid-lowering decisions</strong>, use <strong>PREVENT-ASCVD</strong>."),
        ["pv-preferred", "pv-ascvd", "pv-hf", "pv-cvd", "pv-time", "pv-lipid"],
        [q("Which risk calculator is preferred in the 2026 update?", "PREVENT-ASCVD", ["Pooled Cohort Equations", "Framingham 1998", "CHA2DS2-VASc"], "Slide 6."),
          q("PREVENT-ASCVD estimates the risk of:", "MI and stroke", ["Heart failure only", "Atrial fibrillation", "Bleeding"], "Slide 6."),
          q("Which PREVENT model estimates heart failure risk?", "PREVENT-HF", ["PREVENT-ASCVD", "PREVENT-CVD only", "PREVENT-AF"], "Slide 6."),
          q("Which PREVENT model estimates total CVD risk including ASCVD and HF?", "PREVENT-CVD", ["PREVENT-ASCVD", "PREVENT-HF", "PCE"], "Slide 6."),
          q("Which PREVENT model guides lipid-lowering decisions?", "PREVENT-ASCVD", ["PREVENT-HF", "PREVENT-CVD", "Any of them equally"], "Slide 6.")],
        [q("A clinician wants to know a 50-year-old's chance of developing heart failure specifically. Which model?", "PREVENT-HF", ["PREVENT-ASCVD", "Duke score", "CAC"], "Slide 6.")]),
      C("PREVENT vs the Pooled Cohort Equations",
        tbl(["Input", "PCE", "PREVENT"], [
          ["Age, sex, total cholesterol, HDL, SBP, BP treatment, diabetes, smoking", "Yes", "Yes"],
          ["<strong>Kidney function (eGFR)</strong>", "No", "<strong>Yes</strong> (base equations)"],
          ["<strong>BMI</strong>", "No", "<strong>Yes</strong>"],
          ["<strong>Urine albumin-to-creatinine ratio</strong>", "No", "<strong>Optional</strong>"],
          ["<strong>Hemoglobin A1c</strong>", "No", "<strong>Optional</strong>"],
          ["<strong>Social deprivation index</strong>", "No", "<strong>Optional</strong>"]]) +
        tbl(["New input", "Why it matters"], [
          ["<strong>eGFR</strong>", "Reduced kidney function raises CV risk; CKD and CVD often coexist; the PCE does not capture it"],
          ["<strong>BMI</strong>", "Body size and obesity-related risk; brings metabolic health in"],
          ["<strong>A1c</strong>", "Average glucose over about <strong>2 to 3 months</strong>; more than a yes/no diabetes box"],
          ["<strong>UACR</strong>", "Finds <strong>kidney damage before eGFR falls</strong>; e.g., a diabetic with normal eGFR but albuminuria"],
          ["<strong>Social deprivation index</strong>", "From the <strong>ZIP code</strong>: access to care, economic resources, education, housing"]]) +
        mn("PREVENT adds the <strong>kidney</strong> (eGFR, UACR), <strong>metabolism</strong> (BMI, A1c) and the <strong>neighborhood</strong> (ZIP code)."),
        ["pce-shared", "pce-egfr", "pce-bmi", "pce-optional", "pce-uacr-why", "pce-sdi"],
        [q("Which input is in PREVENT's base equations but not in the PCE?", "eGFR", ["Age", "Smoking", "HDL"], "Slide 7."),
          q("Which input does PREVENT use that the PCE does not, along with eGFR?", "BMI", ["Total cholesterol", "Systolic BP", "Diabetes"], "Slide 7."),
          q("Which is an OPTIONAL additional predictor in PREVENT?", "Urine albumin-to-creatinine ratio", ["Age", "Systolic BP", "Smoking"], "Slide 7."),
          q("Why does PREVENT include eGFR?", "Reduced kidney function is linked to higher CV risk", ["It measures LDL", "It replaces BP", "It predicts cancer"], "Slide 8."),
          q("A1c reflects average glucose over about:", "2 to 3 months", ["2 to 3 days", "1 year", "2 weeks"], "Slide 9."),
          q("What can UACR detect that eGFR may miss?", "Kidney damage before substantial eGFR reduction", ["Liver damage", "Plaque rupture", "Anemia"], "Slide 10."),
          q("PREVENT's social deprivation index is based on the patient's:", "ZIP code", ["Income tax return", "Insurance type", "Blood type"], "Slide 11."),
          q("Which input is in BOTH PCE and PREVENT?", "Antihypertensive treatment", ["eGFR", "BMI", "UACR"], "Slide 7.")],
        [q("A 52-year-old with diabetes has a normal eGFR but a UACR of 150 mg/g. How does PREVENT capture extra risk here?", "The optional UACR input reflects kidney damage the eGFR misses", ["It cannot capture it", "Through the smoking box", "Through the HDL value"], "Slide 10."),
          q("Two patients have identical PCE inputs, but one has eGFR 45 and BMI 38. Which calculator can tell them apart?", "PREVENT", ["PCE", "Neither", "Duke score"], "Slides 7 and 8.")])
    ]),

    S("03-prevent-use", "3. Who gets PREVENT and what the numbers mean", "Objective 2 (slides 12 to 14): eligibility, who should not use it, and the four 10-year risk bands.", [
      C("Eligibility and the four risk bands",
        "<p>Use PREVENT-ASCVD in eligible adults <strong>30 to 79</strong> <strong>without known CVD or subclinical atherosclerosis</strong>, within the model's parameters.</p>" +
        tbl(["Do NOT use PREVENT as the main tool in"], [
          ["<strong>Known cardiovascular disease</strong>"], ["<strong>Severe subclinical CVD</strong>, such as <strong>CAC ≥ 300</strong>"],
          ["<strong>End-stage kidney disease</strong>"], ["<strong>Life expectancy under 1 year</strong>"],
          ["Certain <strong>inherited CV conditions</strong> that independently establish high risk"]]) +
        tbl(["10-year PREVENT-ASCVD risk", "Category"], [
          ["<strong>&lt; 3%</strong>", "<strong>Low</strong>"], ["<strong>3% to &lt; 5%</strong>", "<strong>Borderline</strong>"],
          ["<strong>5% to &lt; 10%</strong>", "<strong>Intermediate</strong>"], ["<strong>≥ 10%</strong>", "<strong>High</strong>"]]) +
        mn("<strong>3, 5, 10</strong>: below 3 low, then borderline, intermediate, and 10 or more is high.") +
        "<p>The calculator is on the AHA professional site (slide 14).</p>",
        ["pe-elig", "pe-not", "pe-cac300", "pe-bands"],
        [q("PREVENT-ASCVD is for adults aged 30 to 79 without:", "Known CVD or subclinical atherosclerosis", ["Any risk factors", "Insurance", "A family history"], "Slide 12."),
          q("Above what CAC score should PREVENT not be the primary decision tool?", "300", ["0", "100", "1"], "Slide 12."),
          q("Which patient should NOT be assessed with PREVENT as the main tool?", "A patient on dialysis for end-stage kidney disease", ["A 45-year-old smoker", "A 60-year-old with high LDL", "A 35-year-old with obesity"], "Slide 12."),
          q("What life expectancy excludes PREVENT as the primary tool?", "Less than 1 year", ["Less than 20 years", "Less than 5 years", "Any life expectancy"], "Slide 12."),
          q("A 10-year PREVENT-ASCVD risk under 3% is:", "Low", ["Borderline", "Intermediate", "High"], "Slide 13."),
          q("A 10-year PREVENT-ASCVD risk of 3% to under 5% is:", "Borderline", ["Low", "Intermediate", "High"], "Slide 13."),
          q("A 10-year PREVENT-ASCVD risk of 5% to under 10% is:", "Intermediate", ["Borderline", "High", "Low"], "Slide 13."),
          q("A 10-year PREVENT-ASCVD risk of 10% or more is:", "High", ["Intermediate", "Borderline", "Very low"], "Slide 13.")],
        [q("A 64-year-old had an MI 3 years ago. Should you use PREVENT to decide on a statin?", "No; known CVD means secondary prevention, not PREVENT", ["Yes; always use PREVENT", "Only the 30-year model", "Only if LDL is over 190"], "Slides 12 and 23."),
          q("A 58-year-old's PREVENT-ASCVD 10-year risk is 7.2%. Category?", "Intermediate", ["Low", "Borderline", "High"], "Slide 13."),
          q("A 49-year-old's PREVENT-ASCVD 10-year risk is 4%. Category?", "Borderline", ["Low", "Intermediate", "High"], "Slide 13.")])
    ]),

    S("04-healthy-habits", "4. Lifestyle: diet, hydration, activity, sleep", "Objective 3 (slides 15 to 18): starting with education, the five good habits, and how adults actually spend their day.", [
      C("Education first, then the five habits",
        ul(["CV risk modification <strong>begins with patient education</strong>.",
          "<strong>Healthy patients</strong>: emphasize <strong>continuing</strong> healthy habits.",
          "<strong>Unhealthy habits</strong>: more extensive counseling; set <strong>specific, attainable goals</strong> with the patient."]) +
        tbl(["Habit", "Details"], [
          ["<strong>1. Heart-healthy diet</strong>", "Fruits, vegetables, whole grains, legumes, nuts, fish, lean protein; <strong>replace saturated fats with unsaturated</strong> (olive oil, nuts, avocados, fatty fish); <strong>low-fat or fat-free dairy</strong>"],
          ["<strong>2. Limit risky foods</strong>", "Saturated fats, <strong>trans fats</strong>, processed meats, highly processed foods; <strong>reduce sodium</strong>; limit added sugars and sugar-sweetened drinks"],
          ["<strong>3. Hydration</strong>", "<strong>Water</strong> over sugar-sweetened beverages"],
          ["<strong>4. Physical activity</strong>", "<strong>≥ 150 min/week moderate OR ≥ 75 min/week vigorous</strong> aerobic; <strong>muscle-strengthening ≥ 2 days/week</strong>"],
          ["<strong>5. Sleep</strong>", "<strong>7 to 9 hours</strong> a night"]]) +
        mn("<strong>150 or 75</strong>, plus <strong>2</strong> strength days, plus <strong>7 to 9</strong> hours of sleep."),
        ["hh-educ", "hh-goals", "hh-diet", "hh-limit", "hh-water", "hh-activity", "hh-sleep"],
        [q("Any approach to CV risk modification begins with:", "Patient education", ["A statin", "A stress test", "Aspirin"], "Slide 15."),
          q("For patients with unhealthy habits, the provider should:", "Set specific, attainable goals with the patient", ["Avoid discussing habits", "Insist on all changes at once", "Refer everyone to cardiology"], "Slide 15."),
          q("Which fat swap is recommended?", "Replace saturated fats with unsaturated fats", ["Replace olive oil with butter", "Replace fish with processed meat", "Add trans fats"], "Slide 16."),
          q("Which dairy choice is recommended?", "Low-fat or fat-free", ["Whole-fat only", "No dairy at all ever", "Cream-based"], "Slide 16."),
          q("Weekly aerobic activity goal for moderate intensity:", "At least 150 minutes", ["At least 30 minutes", "At least 75 minutes", "At least 500 minutes"], "Slide 17."),
          q("Weekly aerobic activity goal for vigorous intensity:", "At least 75 minutes", ["At least 150 minutes", "At least 15 minutes", "At least 300 minutes"], "Slide 17."),
          q("Muscle-strengthening should be done at least:", "2 days a week", ["Every day", "Once a month", "Never"], "Slide 17."),
          q("Recommended sleep per night:", "7 to 9 hours", ["4 to 5 hours", "10 to 12 hours", "5 to 6 hours"], "Slide 17."),
          q("Which drink choice is recommended for hydration?", "Water", ["Sugar-sweetened beverages", "Energy drinks", "Fruit punch"], "Slide 17.")],
        [q("A patient jogs 25 minutes 3 days a week. Does he meet the aerobic goal?", "Yes: 75 minutes of vigorous activity a week", ["No: he needs 150 vigorous minutes", "No: jogging is light activity", "Only if he also swims"], "Slides 17 and 19."),
          q("A patient walks briskly 20 minutes 5 days a week. Does she meet the aerobic goal?", "No: 100 moderate minutes is short of 150", ["Yes: any walking counts", "Yes: 75 minutes is enough", "Walking does not count at all"], "Slide 17."),
          q("A healthy patient already eats well and exercises. What is the counseling emphasis?", "Continue the healthy habits", ["Extensive counseling with new goals", "Start a statin", "Order a stress test"], "Slide 15.")]),
      C("How US adults spend their day",
        tbl(["Fact", "Number"], [
          ["Sedentary time", "<strong>More than 7 hours a day</strong>"],
          ["Moderate/vigorous activity", "<strong>0.2 hours, about 12 minutes a day</strong>"],
          ["Sleep", "<strong>1 in 3</strong> adults gets <strong>less than 7 hours</strong>"]]),
        ["day-sed", "day-mvpa", "day-sleep"],
        [q("How much sedentary time do US adults average a day?", "More than 7 hours", ["About 1 hour", "About 3 hours", "About 15 hours"], "Slide 18."),
          q("How much moderate or vigorous activity do US adults average a day?", "About 12 minutes", ["About 2 hours", "About 45 minutes", "About 1 minute"], "Slide 18."),
          q("What fraction of US adults sleep less than 7 hours?", "1 in 3", ["1 in 10", "1 in 2", "9 in 10"], "Slide 18.")],
        [q("A patient says 'most people barely exercise anyway.' Which statistic confirms it?", "US adults average about 12 minutes of moderate/vigorous activity a day", ["US adults average 2 hours of exercise a day", "Adults sit less than 1 hour a day", "Everyone sleeps 9 hours"], "Slide 18.")])
    ]),

    S("05-exercise", "5. Exercise intensity, clearance and why it works", "Objective 3 (slides 19 to 21): METs, the talk test, who needs medical clearance before exercising, and how exercise protects the heart.", [
      C("METs and the talk test",
        tbl(["Intensity", "METs", "Examples", "Talk test"], [
          ["<strong>Sedentary</strong>", "<strong>1 to 1.5</strong>", "Sitting, TV, computer", ""],
          ["<strong>Light</strong>", "<strong>1.6 to 2.9</strong>", "Walking slowly, cooking, light housework, light yoga, tai chi", "<strong>Can talk and sing</strong> comfortably"],
          ["<strong>Moderate</strong>", "<strong>3 to 5.9</strong>", "<strong>Brisk walking (3 to 4 mph)</strong>, cycling &lt; 9 mph (&lt; 14.5 km/h), <strong>doubles tennis</strong>, active yoga", "<strong>Can talk, but not sing</strong>"],
          ["<strong>Vigorous</strong>", "<strong>≥ 6</strong>", "<strong>Jogging/running (≥ 6 mph)</strong>, cycling ≥ 10 mph, <strong>singles tennis</strong>, swimming laps", "<strong>Only a few words</strong> before pausing for breath"]]) +
        hy("Use METs, examples and the <strong>talk test</strong> to help patients choose, monitor and progress exercise intensity."),
        ["met-bands", "met-examples", "talk-test"],
        [q("Moderate-intensity exercise is how many METs?", "3 to 5.9", ["1 to 1.5", "1.6 to 2.9", "6 or more"], "Slide 19."),
          q("Vigorous-intensity exercise is how many METs?", "6 or more", ["3 to 5.9", "1.6 to 2.9", "Under 1"], "Slide 19."),
          q("On the talk test, moderate intensity means you can:", "Talk but not sing", ["Talk and sing comfortably", "Say only a few words", "Not speak at all"], "Slide 19."),
          q("On the talk test, vigorous intensity means you can:", "Say only a few words before pausing for breath", ["Sing comfortably", "Talk but not sing", "Hold a full conversation"], "Slide 19."),
          q("Which is a moderate-intensity example?", "Doubles tennis", ["Singles tennis", "Swimming laps", "Watching television"], "Slide 19."),
          q("Which is a vigorous-intensity example?", "Singles tennis", ["Doubles tennis", "Brisk walking", "Light yoga"], "Slide 19."),
          q("Brisk walking at 3 to 4 mph is what intensity?", "Moderate", ["Light", "Vigorous", "Sedentary"], "Slide 19.")],
        [q("A patient can chat while cycling but cannot sing along to music. Which intensity?", "Moderate", ["Light", "Vigorous", "Sedentary"], "Slide 19."),
          q("A patient does tai chi and light yoga. Which intensity, and does it count toward the 150-minute goal?", "Light; it does not reach moderate intensity", ["Moderate; it counts fully", "Vigorous; it counts double", "Sedentary"], "Slides 17 and 19.")]),
      C("Who needs medical clearance before exercise",
        chain(["<strong>Symptoms or signs</strong> (angina, dyspnea at exertion or rest, PND or orthopnea, syncope, arrhythmia/palpitations, murmur)? → <strong>Medical clearance recommended</strong> (often with exercise stress testing)",
          "No symptoms, but <strong>established ASCVD, diabetes or CKD</strong> (even if asymptomatic)? → not already exercising moderately (≥ 30 min, 3 days/week) → <strong>clearance recommended</strong>",
          "ASCVD/DM/CKD and already exercising: staying moderate → <strong>no clearance</strong>; wants vigorous → clearance unless done in the <strong>past 12 months</strong>",
          "<strong>No</strong> ASCVD, DM or CKD → <strong>no clearance needed</strong>: if inactive, start <strong>light</strong> and build up; if active, continue or progress to vigorous"]),
        ["cl-symptoms", "cl-adc", "cl-vig", "cl-none"],
        [q("Which finding means medical clearance is recommended before an exercise program?", "Exertional chest discomfort", ["Being over 30", "Owning a treadmill", "High HDL"], "Slide 20."),
          q("Which conditions trigger the second branch of the clearance algorithm even without symptoms?", "Established ASCVD, diabetes or CKD", ["Asthma, migraine or GERD", "Age over 40 alone", "Obesity alone"], "Slide 20."),
          q("A healthy inactive adult with no ASCVD, DM or CKD should:", "Start light-intensity exercise and gradually increase; no clearance needed", ["Get a stress test first", "Start vigorous exercise at once", "Avoid exercise"], "Slide 20."),
          q("A diabetic already exercising moderately wants vigorous exercise. When is clearance not needed?", "If cleared within the past 12 months", ["Never needed", "Only after 5 years", "Always required every time"], "Slide 20.")],
        [q("A sedentary 60-year-old with type 2 diabetes and no symptoms wants to start exercising. What does the algorithm advise?", "Medical clearance is recommended first", ["No clearance; start vigorous running", "Exercise is contraindicated", "Clearance only if he has symptoms"], "Slide 20."),
          q("A 40-year-old with palpitations and occasional presyncope asks about starting a running program. Next step?", "Medical clearance, often with exercise stress testing", ["No clearance needed", "Start with sprints", "Only buy better shoes"], "Slide 20.")]),
      C("How exercise protects the heart",
        tbl(["Antiatherogenic effects"], [["↓ <strong>Abdominal fat</strong>"], ["↓ <strong>Blood pressure</strong>"], ["↓ <strong>Triglycerides</strong>"], ["↑ <strong>HDL</strong>"], ["Better <strong>insulin sensitivity</strong>"]]) +
        "<p><strong>Other benefits:</strong> antithrombotic, better endothelial function, better autonomic function, anti-ischemic, antiarrhythmic.</p>" +
        hy("Exercise lowers CV risk through <strong>multiple pathways</strong>."),
        ["ex-athero", "ex-other"],
        [q("What does regular exercise do to HDL?", "Raises it", ["Lowers it", "No effect", "Eliminates it"], "Slide 21."),
          q("What does regular exercise do to triglycerides?", "Lowers them", ["Raises them", "No effect", "Doubles them"], "Slide 21."),
          q("Which is listed as an antiatherogenic effect of exercise?", "Better insulin sensitivity", ["Higher LDL", "More abdominal fat", "Higher blood pressure"], "Slide 21."),
          q("Which is listed among exercise's other cardiovascular benefits?", "Antiarrhythmic", ["Prothrombotic", "Proarrhythmic", "Pro-ischemic"], "Slide 21.")],
        [q("A patient with high triglycerides, low HDL and insulin resistance asks how walking will help. Best answer?", "Exercise lowers triglycerides, raises HDL and improves insulin sensitivity", ["Exercise raises triglycerides", "It only burns calories", "It has no effect on lipids"], "Slide 21.")])
    ]),

    S("06-statins-secondary", "6. Statins and secondary prevention", "Objective 4 (slides 22 to 23): high vs moderate intensity statins and who must be on a high-intensity statin.", [
      C("Statin intensity",
        "<p>Dyslipidemia is one of the most important diseases to control to prevent CAD, and we do it mainly with <strong>statins</strong>.</p>" +
        tbl(["Intensity", "Statins and doses"], [
          ["<strong>High</strong>", "<strong>Atorvastatin (Lipitor) 40 to 80 mg</strong> daily; <strong>rosuvastatin (Crestor) 20 to 40 mg</strong> daily"],
          ["<strong>Moderate</strong>", "Atorvastatin <strong>10 to 20</strong>; rosuvastatin <strong>5 to 10</strong>; <strong>lovastatin (Mevacor) 40</strong>; <strong>pravastatin (Pravachol) 40</strong>; <strong>simvastatin (Zocor) 40</strong>"]]) +
        hy("Only <strong>atorvastatin and rosuvastatin</strong> reach high intensity. High intensity lowers LDL by about <strong>50% or more</strong>, moderate by about <strong>30 to 49%</strong> (standard teaching).") +
        mn("High intensity: <strong>A 40-80, R 20-40</strong>. Moderate: halve them (<strong>A 10-20, R 5-10</strong>), and the rest are <strong>40</strong>."),
        ["st-high", "st-mod", "st-brands", "st-pct"],
        [q("Which statin doses are high intensity?", "Atorvastatin 40 to 80 mg or rosuvastatin 20 to 40 mg", ["Atorvastatin 10 mg or rosuvastatin 5 mg", "Simvastatin 40 mg", "Pravastatin 40 mg"], "Slide 22."),
          q("Atorvastatin 20 mg is what intensity?", "Moderate", ["High", "Low", "Not a statin dose"], "Slide 22."),
          q("Rosuvastatin 10 mg is what intensity?", "Moderate", ["High", "Low", "Maximum"], "Slide 22."),
          q("Rosuvastatin 20 mg is what intensity?", "High", ["Moderate", "Low", "Not used"], "Slide 22."),
          q("Simvastatin 40 mg is what intensity?", "Moderate", ["High", "Low", "Very high"], "Slide 22."),
          q("Crestor is the brand name of:", "Rosuvastatin", ["Atorvastatin", "Simvastatin", "Pravastatin"], "Slide 22."),
          q("Lipitor is the brand name of:", "Atorvastatin", ["Rosuvastatin", "Lovastatin", "Pravastatin"], "Slide 22."),
          q("Zocor is the brand name of:", "Simvastatin", ["Pravastatin", "Lovastatin", "Atorvastatin"], "Slide 22."),
          q("Pravachol is the brand name of:", "Pravastatin", ["Simvastatin", "Rosuvastatin", "Lovastatin"], "Slide 22."),
          q("Mevacor is the brand name of:", "Lovastatin", ["Simvastatin", "Atorvastatin", "Pravastatin"], "Slide 22."),
          q("Which statins can reach high intensity?", "Atorvastatin and rosuvastatin only", ["Simvastatin and pravastatin", "Lovastatin only", "All statins at any dose"], "Slide 22.")],
        [q("A patient on simvastatin 40 mg has an MI. To reach high intensity, what is the best switch?", "Atorvastatin 80 mg", ["Pravastatin 40 mg", "Lovastatin 40 mg", "Atorvastatin 10 mg"], "Slides 22 and 23.")]),
      C("Secondary prevention: high-intensity statin for all",
        "<p><strong>All patients with clinical atherosclerotic disease</strong> should be on a <strong>high-intensity statin, regardless of their lipid profile</strong>.</p>" +
        tbl(["Territory", "Counts as clinical ASCVD"], [
          ["<strong>Coronary</strong>", "ACS, prior MI, stable or unstable angina, PCI/stent, CABG"],
          ["<strong>Cerebrovascular</strong>", "Atherosclerotic ischemic stroke or TIA"],
          ["<strong>Peripheral</strong>", "Atherosclerotic PAD"],
          ["<strong>Aortic</strong>", "Atherosclerotic aortic aneurysm"]]),
        ["sec-all", "sec-regardless", "sec-list"],
        [q("Who should be on a high-intensity statin regardless of lipids?", "Everyone with clinical atherosclerotic disease", ["Only those with LDL over 190", "Only diabetics", "Only smokers"], "Slide 23."),
          q("Which counts as clinical ASCVD for statin purposes?", "Atherosclerotic TIA", ["Migraine with aura", "Varicose veins", "Raynaud phenomenon"], "Slide 23."),
          q("Which aortic condition counts as clinical ASCVD?", "Atherosclerotic aortic aneurysm", ["Bicuspid aortic valve", "Aortic regurgitation", "Coarctation"], "Slide 23."),
          q("Does a normal LDL change the need for a high-intensity statin after an MI?", "No; it is regardless of lipid profile", ["Yes; no statin needed", "Yes; use low intensity", "Only if HDL is low"], "Slide 23.")],
        [q("A 70-year-old with symptomatic PAD has LDL 85. Statin plan?", "High-intensity statin regardless of LDL", ["No statin; LDL is fine", "Moderate intensity only", "Check PREVENT first"], "Slide 23."),
          q("A 59-year-old had CABG 2 years ago and is on pravastatin 40 mg. What should change?", "Switch to a high-intensity statin", ["Nothing", "Stop the statin", "Add aspirin only"], "Slides 22 and 23.")])
    ]),

    S("07-lipid-primary", "7. Lipid panel and primary prevention", "Objective 4 (slides 24 to 28): reading the lipid panel, groups treated regardless of risk, and the PREVENT-based approach.", [
      C("Start with the lipid panel",
        "<p>Review the individual components, not just total cholesterol. A standard panel = <strong>LDL-C, HDL-C, total cholesterol, triglycerides</strong>.</p>" +
        tbl(["Lipid", "Desirable", "Borderline", "High / very high"], [
          ["<strong>LDL-C</strong>", "<strong>&lt; 100</strong>", "130 to 159", "<strong>160 to 189 high</strong>; <strong>≥ 190 very high</strong>"],
          ["<strong>Total-C</strong>", "<strong>&lt; 200</strong>", "200 to 239", "<strong>≥ 240 high</strong>"],
          ["<strong>HDL-C</strong>", "<strong>≥ 60</strong> (protective)", "", "<strong>Low: &lt; 40 men, &lt; 50 women</strong>"],
          ["<strong>Triglycerides</strong>", "<strong>&lt; 150</strong>", "150 to 199", "<strong>200 to 499 high</strong>; <strong>≥ 500 very high</strong>"]]) +
        note("These are <strong>conventional classifications, not individualized LDL goals</strong>. LDL ≥ 190 is a distinct <strong>severe hypercholesterolemia</strong> category. All values mg/dL."),
        ["lp-panel", "lp-ldl", "lp-tc", "lp-hdl", "lp-tg"],
        [q("Desirable LDL-C is:", "Under 100 mg/dL", ["Under 160 mg/dL", "Under 190 mg/dL", "Over 130 mg/dL"], "Slide 25."),
          q("LDL-C of 190 or higher is:", "Very high (severe hypercholesterolemia)", ["Borderline", "Desirable", "High only"], "Slide 25."),
          q("Desirable total cholesterol is:", "Under 200 mg/dL", ["Under 240 mg/dL", "Under 150 mg/dL", "Over 200 mg/dL"], "Slide 25."),
          q("HDL is considered protective at:", "60 mg/dL or higher", ["Under 40 mg/dL", "40 to 49 mg/dL", "Over 150 mg/dL"], "Slide 25."),
          q("Low HDL in men is below:", "40 mg/dL", ["50 mg/dL", "60 mg/dL", "30 mg/dL"], "Slide 25."),
          q("Low HDL in women is below:", "50 mg/dL", ["40 mg/dL", "60 mg/dL", "35 mg/dL"], "Slide 25."),
          q("Desirable triglycerides are:", "Under 150 mg/dL", ["Under 200 mg/dL", "Under 500 mg/dL", "Under 100 mg/dL"], "Slide 25."),
          q("Triglycerides of 500 or more are:", "Very high", ["High", "Borderline", "Desirable"], "Slide 25."),
          q("Triglycerides of 200 to 499 are:", "High", ["Very high", "Borderline", "Desirable"], "Slide 25."),
          q("Are the lipid panel categories individualized LDL treatment goals?", "No; they are conventional classifications", ["Yes, for everyone", "Only for diabetics", "Only after an MI"], "Slide 25.")],
        [q("A woman's HDL is 45 mg/dL. How is it classified?", "Low (under 50 for women)", ["Desirable", "Protective", "Borderline high"], "Slide 25."),
          q("A man's lipid panel: TG 398. Classification?", "High (200 to 499)", ["Very high", "Desirable", "Borderline"], "Slide 25.")]),
      C("Who gets lipid-lowering regardless of calculated risk",
        tbl(["Group", "Approach"], [
          ["<strong>LDL-C ≥ 190</strong>", "Start lipid-lowering <strong>without relying on calculated risk</strong>; evaluate for <strong>familial hypercholesterolemia</strong>"],
          ["Ages <strong>40 to 75</strong> with <strong>diabetes</strong>", "Lipid-lowering recommended regardless of PREVENT"],
          ["Ages <strong>40 to 75</strong> with <strong>stage 3 or 4 CKD</strong>", "Lipid-lowering recommended regardless of PREVENT"],
          ["Ages <strong>40 to 75</strong> living with <strong>HIV</strong>", "Lipid-lowering recommended regardless of PREVENT"],
          ["Eligible ages <strong>30 to 79</strong>, LDL <strong>70 to 189</strong>, no ASCVD or subclinical atherosclerosis", "<strong>Use PREVENT-ASCVD</strong> to guide the decision"]]) +
        mn("<strong>190, D, K, HIV</strong>: very high LDL at any age, and diabetes, CKD 3 to 4 or HIV at <strong>40 to 75</strong>."),
        ["ind-190", "ind-dm", "ind-ckd", "ind-hiv", "ind-prevent"],
        [q("Which LDL level calls for lipid-lowering without relying on calculated risk?", "190 mg/dL or higher", ["100 mg/dL or higher", "130 mg/dL or higher", "70 mg/dL or higher"], "Slides 24 and 26."),
          q("Adults with diabetes get lipid-lowering regardless of PREVENT at ages:", "40 to 75", ["20 to 39", "30 to 79", "Over 80 only"], "Slide 24."),
          q("Which CKD stages trigger lipid-lowering regardless of PREVENT at ages 40 to 75?", "Stages 3 and 4", ["Stage 1 only", "Stage 5 on dialysis", "Any stage at any age"], "Slide 24."),
          q("Which infection is a lipid-lowering indication at ages 40 to 75 regardless of risk?", "HIV", ["Hepatitis A", "Influenza", "Lyme disease"], "Slide 24."),
          q("With LDL 190 or more, what should you also evaluate for?", "Familial hypercholesterolemia", ["Hypothyroidism only", "HIV", "Hemochromatosis"], "Slide 26."),
          q("Who should have PREVENT-ASCVD guide primary-prevention lipid decisions?", "Ages 30 to 79 with LDL 70 to 189 and no ASCVD", ["Everyone with LDL over 190", "Anyone after an MI", "Children"], "Slide 26.")],
        [q("A 32-year-old has LDL 205 and no other risk factors. Next step?", "Start lipid-lowering and evaluate for familial hypercholesterolemia", ["Calculate PREVENT and wait", "Recheck in 10 years", "Nothing; he is young"], "Slide 26."),
          q("A 48-year-old with type 2 diabetes has LDL 110 and a PREVENT risk of 4%. Statin?", "Yes; diabetes at 40 to 75 is an indication regardless of PREVENT", ["No; risk is only borderline", "Only if LDL exceeds 190", "Only after a CAC score"], "Slide 24."),
          q("A 56-year-old living with HIV has a low PREVENT risk. Lipid-lowering?", "Recommended regardless of calculated risk", ["Not indicated", "Only with diabetes", "Only after 75"], "Slide 24.")]),
      C("Using PREVENT: calculate, personalize, reclassify",
        tbl(["10-year PREVENT-ASCVD", "Approach"], [
          ["<strong>Low &lt; 3%</strong>", "<strong>Lifestyle is central</strong>; consider therapy in selected patients with <strong>LDL 160 to 189</strong> or <strong>30-year risk ≥ 10%</strong> (ages 30 to 59)"],
          ["<strong>Borderline 3 to &lt; 5%</strong>", "Therapy <strong>may be considered</strong> after clinician-patient discussion"],
          ["<strong>Intermediate 5 to &lt; 10%</strong>", "Therapy <strong>should be considered</strong> after clinician-patient discussion"],
          ["<strong>High ≥ 10%</strong>", "Therapy <strong>is recommended</strong>"]]) +
        chain(["<strong>Calculate</strong>: 10-year PREVENT-ASCVD; 30-year for eligible ages 30 to 59",
          "<strong>Personalize</strong>: family history of premature ASCVD, persistent LDL elevation, elevated <strong>Lp(a)</strong>, chronic inflammatory conditions, other risk factors",
          "<strong>Reclassify</strong>: consider <strong>CAC scoring</strong> when the decision is still uncertain"]) +
        mn("<strong>May</strong> (borderline) → <strong>should</strong> (intermediate) → <strong>is recommended</strong> (high)."),
        ["pv-low", "pv-border", "pv-int", "pv-high", "pv-steps"],
        [q("PREVENT high risk (10% or more): lipid-lowering is:", "Recommended", ["May be considered", "Not indicated", "Only lifestyle"], "Slide 27."),
          q("PREVENT intermediate risk (5 to under 10%): lipid-lowering:", "Should be considered after discussion", ["Is not indicated", "Is mandatory with no discussion", "Is only lifestyle"], "Slide 27."),
          q("PREVENT borderline risk (3 to under 5%): lipid-lowering:", "May be considered after discussion", ["Is recommended", "Is contraindicated", "Should always be started"], "Slide 27."),
          q("In low PREVENT risk, which patients may still be considered for therapy?", "LDL 160 to 189 or 30-year risk of 10% or more", ["LDL under 100", "HDL over 60", "Triglycerides under 150"], "Slide 27."),
          q("What are the three steps in the primary prevention lipid approach?", "Calculate, personalize, reclassify", ["Screen, stent, statin", "Diet, drug, dialysis", "Ask, advise, connect"], "Slide 28."),
          q("Which test is used to reclassify risk when the decision is uncertain?", "CAC scoring", ["Stress echo", "BNP", "Holter monitor"], "Slide 28.")],
        [q("A 61-year-old without ASCVD has LDL 140 and a 10-year PREVENT-ASCVD risk of 12%. Lipid-lowering?", "Recommended", ["Not indicated", "May be considered", "Lifestyle only"], "Slide 27."),
          q("A 38-year-old has a 10-year risk of 1.5% but a 30-year risk of 14% and LDL 150. What does the slide allow?", "Consider lipid-lowering in selected patients like him", ["Lipid-lowering is never allowed under 3%", "Mandatory high-intensity statin", "Ignore the 30-year risk"], "Slide 27.")])
    ]),

    S("08-risk-enhancers", "8. Personalizing risk: enhancers, Lp(a), ApoB, hs-CRP", "Objective 4 (slides 29 to 34): risk-enhancing factors beyond PREVENT, and what Lp(a), ApoB and hs-CRP add.", [
      C("Risk enhancers beyond PREVENT",
        tbl(["Group", "Enhancers"], [
          ["<strong>Family history, demographics</strong>", "Premature ASCVD in a <strong>parent or sibling</strong>; higher-risk ancestry: <strong>South Asian, Filipino</strong>"],
          ["<strong>Lipid-related</strong>", "<strong>Lp(a) ≥ 125 nmol/L or ≥ 50 mg/dL</strong>; persistent <strong>LDL 160 to 189</strong>; <strong>ApoB ≥ 120</strong> or <strong>non-HDL 190 to 219</strong>; persistent high triglycerides"],
          ["<strong>Inflammatory, metabolic</strong>", "Chronic inflammatory disease (<strong>RA, SLE, advanced psoriasis</strong>); <strong>hs-CRP ≥ 2 mg/L</strong> more than once"],
          ["<strong>Reproductive</strong>", "<strong>Premature menopause (before 40)</strong>; <strong>preeclampsia</strong>; <strong>gestational diabetes or hypertension</strong>; <strong>preterm delivery</strong>"]]),
        ["en-fam", "en-ancestry", "en-lipid", "en-inflam", "en-repro"],
        [q("Which ancestries are listed as higher risk?", "South Asian and Filipino", ["Scandinavian and Irish", "Japanese and Korean", "Nigerian and Ghanaian"], "Slide 29."),
          q("Which Lp(a) level is a risk enhancer?", "125 nmol/L or 50 mg/dL or higher", ["10 nmol/L", "5 mg/dL", "Under 30 mg/dL"], "Slide 29."),
          q("Which ApoB level is a risk enhancer?", "120 mg/dL or higher", ["60 mg/dL", "90 mg/dL", "Under 50 mg/dL"], "Slides 29 and 32."),
          q("Which non-HDL range is a risk enhancer?", "190 to 219 mg/dL", ["100 to 129 mg/dL", "130 to 159 mg/dL", "Under 100 mg/dL"], "Slide 29."),
          q("Which inflammatory diseases are listed as risk enhancers?", "RA, SLE, advanced psoriasis", ["Asthma, eczema, hay fever", "Gout, osteoarthritis, bursitis", "IBS, GERD, migraine"], "Slide 30."),
          q("Premature menopause as a risk enhancer means menopause before age:", "40", ["50", "55", "30"], "Slide 30."),
          q("Which pregnancy history is a risk enhancer?", "Preeclampsia", ["Twin pregnancy alone", "Cesarean delivery alone", "Breastfeeding"], "Slide 30."),
          q("hs-CRP is a risk enhancer at:", "2 mg/L or higher on more than one occasion", ["0.5 mg/L once", "Any detectable level", "10 mg/L during a cold"], "Slide 30.")],
        [q("A 45-year-old woman with borderline PREVENT risk had preeclampsia and gestational diabetes. How should this affect the statin talk?", "They are risk enhancers that favor treatment", ["They are irrelevant", "They lower her risk", "They only matter during pregnancy"], "Slide 30."),
          q("A 50-year-old man of South Asian ancestry has intermediate PREVENT risk. How does his ancestry factor in?", "It is a risk enhancer that favors treatment", ["It lowers his risk", "It has no role", "It means he cannot take statins"], "Slide 29.")]),
      C("Lp(a) vs ApoB",
        tbl(["", "<strong>ApoB</strong>", "<strong>Lp(a)</strong>"], [
          ["Think", "<strong>Particle number</strong>", "<strong>Inherited risk particle</strong>"],
          ["What it is", "Measures the <strong>number of atherogenic particles</strong>; each carries <strong>one ApoB</strong>; includes LDL, VLDL, IDL and Lp(a)", "LDL-like particle with <strong>apolipoprotein(a)</strong> attached to <strong>apoB-100</strong>"],
          ["Cause", "Atherogenic particle burden", "<strong>Largely genetic</strong>"],
          ["When useful", "Reveals risk <strong>LDL-C underestimates</strong>: high <strong>triglycerides, diabetes, CKM syndrome</strong>", "<strong>Measure at least once in all adults</strong>"],
          ["Risk-enhancing level", "<strong>≥ 120 mg/dL</strong> (2026 guideline)", "<strong>≥ 125 nmol/L (50 mg/dL): about 1.4-fold</strong> risk; <strong>≥ 250 nmol/L (100 mg/dL): about 2-fold</strong>"]]) +
        hy("Elevated Lp(a) → <strong>more intensive</strong> management of modifiable risk factors and <strong>LDL lowering</strong>."),
        ["lpa-what", "lpa-genetic", "lpa-once", "lpa-levels", "apob-what", "apob-when"],
        [q("Lp(a) is an LDL-like particle with which extra protein?", "Apolipoprotein(a)", ["Apolipoprotein E", "Albumin", "Ferritin"], "Slide 31."),
          q("Lp(a) levels are mainly determined by:", "Genetics", ["Diet", "Exercise", "Sleep"], "Slide 31."),
          q("How often should Lp(a) be measured?", "At least once in all adults", ["Every month", "Never", "Only after an MI"], "Slide 31."),
          q("Lp(a) of 125 nmol/L or more raises ASCVD risk about:", "1.4-fold", ["10-fold", "No change", "0.5-fold"], "Slide 31."),
          q("Lp(a) of 250 nmol/L (100 mg/dL) or more raises estimated risk about:", "2-fold", ["1.1-fold", "5-fold", "20-fold"], "Slide 31."),
          q("ApoB measures:", "The number of atherogenic lipoprotein particles", ["Only HDL", "Inflammation", "Kidney function"], "Slide 32."),
          q("How many ApoB molecules does each atherogenic particle carry?", "One", ["None", "Two", "Ten"], "Slide 33."),
          q("In which patients may LDL-C underestimate risk, so ApoB helps?", "High triglycerides, diabetes or CKM syndrome", ["Healthy young athletes", "Patients with low TG only", "Children with asthma"], "Slide 32."),
          q("Think 'particle number' for:", "ApoB", ["Lp(a)", "hs-CRP", "HDL"], "Slide 33."),
          q("Think 'inherited risk particle' for:", "Lp(a)", ["ApoB", "Triglycerides", "hs-CRP"], "Slide 33.")],
        [q("A 42-year-old with a normal LDL has an Lp(a) of 260 nmol/L. What does this mean?", "About 2-fold higher risk; manage risk factors and LDL more intensively", ["No meaning; LDL is normal", "It can be fixed with diet alone", "Repeat it every month"], "Slide 31."),
          q("A diabetic with TG 350 has an LDL of 95. Which test better shows his atherogenic particle burden?", "ApoB", ["Lp(a)", "HDL", "Total cholesterol"], "Slide 32.")]),
      C("hs-CRP",
        ul(["CRP is a marker of <strong>systemic inflammation</strong>; elevated hs-CRP is linked to higher ASCVD risk.",
          "Adults without ASCVD with <strong>borderline PREVENT risk (3 to &lt; 5%)</strong> and hs-CRP <strong>≥ 2 mg/L on two successive occasions</strong> with <strong>no identifiable cause</strong>: <strong>high-intensity statin</strong> can be useful."]),
        ["crp-marker", "crp-rule"],
        [q("hs-CRP is a marker of:", "Systemic inflammation", ["Kidney damage", "Myocardial necrosis", "Thyroid function"], "Slide 34."),
          q("In borderline-risk adults, hs-CRP supports a high-intensity statin when it is:", "2 mg/L or more on two successive occasions with no other cause", ["Any value once", "Under 1 mg/L", "Measured during an infection"], "Slide 34."),
          q("In which PREVENT band does the hs-CRP rule apply on the slide?", "Borderline (3 to under 5%)", ["High (10% or more)", "Known ASCVD", "Under age 20"], "Slide 34.")],
        [q("A 52-year-old with PREVENT risk 4% has hs-CRP of 3.1 and 2.8 mg/L a month apart, no infection or inflammatory disease. Next step?", "A high-intensity statin can be useful", ["No action", "Antibiotics", "Repeat in 10 years"], "Slide 34."),
          q("A patient has hs-CRP 9 mg/L while recovering from pneumonia. Does this support a statin?", "No; there is an identifiable cause and it is a single value", ["Yes; any high CRP means statin", "Yes; start high intensity now", "Only if HDL is high"], "Slide 34.")])
    ]),

    S("09-cac-reclassify", "9. CAC to reclassify risk", "Objective 4 (slide 35): when to order a CAC score and what 0, 1 to 99, and 100 or more mean.", [
      C("CAC: when and how to read it",
        "<p>Consider CAC in selected adults at <strong>borderline or intermediate</strong> PREVENT risk when <strong>uncertainty about lipid-lowering</strong> remains. It shows <strong>calcified coronary atherosclerosis</strong>.</p>" +
        tbl(["CAC", "Meaning"], [
          ["<strong>0</strong>", "May support <strong>deferring</strong> therapy in selected patients, if the exceptions are absent: <strong>diabetes, smoking, strong family history</strong> of premature ASCVD"],
          ["<strong>1 to 99</strong>", "Coronary atherosclerosis is present; decide using <strong>overall risk and CAC percentile</strong>"],
          ["<strong>≥ 100</strong> or <strong>≥ 75th percentile</strong>", "<strong>Supports lipid-lowering therapy</strong>"]]) +
        hy("A <strong>CAC of 0 does not cancel</strong> a statin in a <strong>smoker, diabetic or strong family history</strong>."),
        ["cac-who", "cac-0", "cac-1-99", "cac-100"],
        [q("CAC scoring is considered in which PREVENT bands?", "Borderline or intermediate", ["High only", "Known ASCVD", "Low under age 20"], "Slide 35."),
          q("A CAC score of 100 or more:", "Supports lipid-lowering therapy", ["Supports deferring therapy", "Means no atherosclerosis", "Requires CABG"], "Slide 35."),
          q("A CAC score at or above which percentile supports lipid-lowering?", "75th", ["10th", "25th", "50th"], "Slide 35."),
          q("A CAC of 0 may support deferring therapy unless the patient has:", "Diabetes, smoking or a strong family history", ["Normal BP", "High HDL", "Regular exercise"], "Slide 35."),
          q("A CAC score of 1 to 99 means:", "Coronary atherosclerosis is present; use overall risk and percentile", ["No atherosclerosis", "Immediate cath", "Automatic high-intensity statin for all"], "Slide 35.")],
        [q("A 55-year-old nonsmoker without diabetes or family history has intermediate PREVENT risk and is unsure about a statin. CAC = 0. What may be reasonable?", "Deferring therapy", ["Starting high-intensity statin", "Cardiac cath", "Aspirin"], "Slide 35."),
          q("A 60-year-old with borderline risk has CAC 180. What does this support?", "Lipid-lowering therapy", ["Deferring therapy", "No change", "Stopping all medicines"], "Slide 35."),
          q("A 50-year-old smoker with intermediate risk has CAC = 0. Can therapy be deferred on that basis?", "Not reliably; smoking is an exception", ["Yes, always", "Yes, smoking does not matter", "Only if he is a woman"], "Slide 35.")])
    ]),

    S("10-diabetes", "10. Diabetes and CV risk", "Objective 5 (slides 36 to 40): diagnosis, A1c goals, GLP-1 RA and SGLT2 inhibitors, and diabetes features that raise CVD risk.", [
      C("Diagnose and set the A1c goal",
        "<p>After habits and lipids, the next targets are <strong>diabetes, hypertension, sleep apnea, alcohol and smoking</strong>.</p>" +
        tbl(["Diagnosis", "Value"], [
          ["<strong>Prediabetes</strong>", "A1c <strong>5.7 to 6.4%</strong>"], ["<strong>Diabetes</strong>", "A1c <strong>≥ 6.5%</strong>"],
          ["Fasting plasma glucose", "<strong>≥ 126</strong>"], ["2-hour OGTT", "<strong>≥ 200</strong>"], ["Random glucose with classic symptoms", "<strong>≥ 200</strong>"]]) +
        tbl(["A1c goal", "Who"], [
          ["<strong>&lt; 7%</strong>", "<strong>Many nonpregnant adults</strong>"],
          ["<strong>&lt; 6.5%</strong>", "Selected patients, if achievable <strong>without significant hypoglycemia</strong> or burden"],
          ["<strong>&lt; 8%</strong>", "<strong>Substantial comorbidity, frailty, limited life expectancy</strong>, or high treatment risk"]]) +
        mn("<strong>7</strong> for most, <strong>6.5</strong> for the fit, <strong>8</strong> for the frail."),
        ["dm-next", "dm-dx", "dm-goal7", "dm-goal65", "dm-goal8"],
        [q("Which A1c range is prediabetes?", "5.7 to 6.4%", ["4.0 to 5.6%", "6.5 to 7.0%", "Over 8%"], "Slide 37."),
          q("Which A1c diagnoses diabetes?", "6.5% or higher", ["5.7% or higher", "7.0% or higher", "8.0% or higher"], "Slide 37."),
          q("Which fasting plasma glucose diagnoses diabetes?", "126 mg/dL or higher", ["100 mg/dL or higher", "110 mg/dL or higher", "200 mg/dL or higher"], "Slide 37."),
          q("Which 2-hour OGTT glucose diagnoses diabetes?", "200 mg/dL or higher", ["126 mg/dL or higher", "140 mg/dL or higher", "180 mg/dL or higher"], "Slide 37."),
          q("A random glucose of 200 or more diagnoses diabetes when:", "Classic symptoms are present", ["The patient is fasting", "It is checked twice in an hour", "Never"], "Slide 37."),
          q("The A1c goal for many nonpregnant adults is:", "Below 7%", ["Below 5.7%", "Below 9%", "Below 6%"], "Slide 38."),
          q("A goal below 6.5% may fit selected patients when:", "It is achievable without significant hypoglycemia", ["They are frail", "They have limited life expectancy", "They are pregnant"], "Slide 38."),
          q("A less stringent A1c goal such as below 8% fits:", "Frailty, substantial comorbidity or limited life expectancy", ["Young healthy adults", "Everyone", "Athletes"], "Slide 38.")],
        [q("An 84-year-old frail man with dementia and recurrent falls has type 2 diabetes. Reasonable A1c goal?", "Below 8%", ["Below 6%", "Below 6.5%", "Below 5.7%"], "Slide 38."),
          q("A 45-year-old's A1c is 6.1%. Diagnosis?", "Prediabetes", ["Diabetes", "Normal", "Hypoglycemia"], "Slide 37.")]),
      C("GLP-1 RA, SGLT2i and high-risk diabetes features",
        ul(["Type 2 diabetes with <strong>established ASCVD, heart failure or CKD</strong>: use a <strong>GLP-1 RA and/or SGLT2 inhibitor</strong> with proven CV or kidney benefit.",
          "These may be indicated <strong>regardless of baseline A1c or metformin use</strong>.",
          "Choice depends on CV and kidney conditions, glycemic needs, <strong>weight goals</strong>, contraindications, tolerability and preference."]) +
        tbl(["Diabetes features that raise CVD risk"], [
          ["<strong>Long duration</strong>: <strong>≥ 10 years T2DM</strong>, <strong>≥ 20 years T1DM</strong>"],
          ["<strong>UACR ≥ 30 mg/g</strong>"], ["<strong>eGFR &lt; 60</strong>"], ["<strong>Retinopathy</strong>"], ["<strong>Neuropathy</strong> of any type"], ["<strong>ABI &lt; 0.9</strong>"]]) +
        note("Why T1DM gets 20 years and T2DM only 10 (the deck asks): type 2 is usually found <strong>years after it began</strong>, in older patients with other risk factors already present; type 1 starts at a known date, usually in youth (standard teaching)."),
        ["glp-sglt", "glp-regardless", "dm-dur", "dm-features"],
        [q("Which drug classes are recommended in T2DM with ASCVD, HF or CKD?", "GLP-1 RA and/or SGLT2 inhibitor", ["Sulfonylurea and insulin", "Thiazolidinedione only", "DPP-4 inhibitor only"], "Slide 39."),
          q("Is a GLP-1 RA or SGLT2i in T2DM with ASCVD dependent on A1c?", "No; it may be indicated regardless of A1c or metformin use", ["Yes; only if A1c is over 9%", "Only after metformin fails", "Only if A1c is normal"], "Slide 39."),
          q("Diabetes duration that raises CVD risk in T2DM:", "10 years or more", ["1 year", "5 years", "20 years"], "Slide 40."),
          q("Diabetes duration that raises CVD risk in T1DM:", "20 years or more", ["10 years", "5 years", "2 years"], "Slide 40."),
          q("Which UACR is a diabetes feature that raises CVD risk?", "30 mg/g or higher", ["Under 30 mg/g", "Exactly 0", "Under 5 mg/g"], "Slide 40."),
          q("Which ABI is a diabetes feature that raises CVD risk?", "Under 0.9", ["Over 1.0", "Exactly 1.1", "Over 1.3 only"], "Slide 40."),
          q("Which eGFR is a diabetes feature that raises CVD risk?", "Under 60", ["Over 90", "Over 120", "Exactly 100"], "Slide 40.")],
        [q("A 60-year-old with T2DM, A1c 6.8% on metformin, has had an MI. Should a GLP-1 RA or SGLT2i be added even though A1c is near goal?", "Yes; they are indicated for ASCVD regardless of A1c", ["No; A1c is under 7%", "Only if A1c rises above 9%", "Only insulin is allowed"], "Slide 39."),
          q("A patient with 12 years of T2DM, retinopathy and UACR 80 mg/g asks if he is at higher CVD risk. Answer?", "Yes; duration, retinopathy and albuminuria all raise it", ["No; only A1c matters", "Only if he smokes", "No; retinopathy is an eye issue only"], "Slide 40.")])
    ]),

    S("11-htn-osa", "11. Hypertension and sleep apnea", "Objective 5 (slides 41 to 43): BP goals and treatment, and how untreated OSA damages the heart.", [
      C("Hypertension to goal",
        ul(["<strong>Confirm</strong> HTN with standardized office BP and <strong>home or ambulatory</strong> monitoring when appropriate.",
          "General goal: <strong>below 130/80</strong> for most adults.",
          "Consider <strong>SBP below 120</strong> in appropriate patients at increased CV risk.",
          "Individualize for comorbidities, orthostatic symptoms, frailty and tolerance.",
          "Choose drugs by clinical profile and <strong>compelling indications</strong>."]),
        ["htn-confirm", "htn-130", "htn-120", "htn-indiv"],
        [q("General BP treatment goal for most adults:", "Below 130/80", ["Below 140/90", "Below 150/90", "Below 110/70"], "Slide 41."),
          q("More intensive SBP lowering on the slide means below:", "120 mmHg", ["140 mmHg", "100 mmHg", "130 mmHg"], "Slide 41."),
          q("How should hypertension be confirmed?", "Standardized office BP plus home or ambulatory monitoring when appropriate", ["One reading at urgent care", "Patient report only", "A single wrist cuff reading"], "Slide 41."),
          q("What guides the choice of antihypertensive?", "Clinical profile and compelling indications", ["Pill color", "Cost alone", "Always a beta blocker"], "Slide 41.")],
        [q("A 68-year-old with orthostatic dizziness and frailty has BP 132/78 on two drugs. How should the goal be handled?", "Individualize; orthostasis and frailty may limit more lowering", ["Push SBP below 110 at all costs", "Stop all drugs", "Add three more drugs"], "Slide 41.")]),
      C("Obstructive sleep apnea and the heart",
        chain(["<strong>Recurrent upper-airway obstruction</strong> during sleep", "<strong>Intermittent hypoxemia</strong> (repeated O2 drops)",
          "<strong>Brief arousals</strong> reopen the airway but <strong>fragment sleep</strong>", "Each episode triggers <strong>sympathetic activation</strong>: ↑ HR and BP",
          "Repeated episodes → <strong>inflammation, endothelial dysfunction</strong>, CV stress",
          "Untreated: <strong>RV hypertrophy and pulmonary hypertension</strong>", "Eventually <strong>right-sided HF (cor pulmonale)</strong>"]) +
        hy("Treatment: wear <strong>CPAP or BiPAP every night</strong>."),
        ["osa-chain", "osa-sns", "osa-cor", "osa-cpap"],
        [q("What does each apnea episode trigger that raises HR and BP?", "Sympathetic activation", ["Vagal activation", "Insulin release", "Histamine release"], "Slide 42."),
          q("Untreated OSA leads to which heart changes?", "RV hypertrophy and pulmonary hypertension", ["LV dilation from AR", "Mitral stenosis", "Aortic coarctation"], "Slide 43."),
          q("Right-sided heart failure from OSA is called:", "Cor pulmonale", ["Takotsubo", "Dressler syndrome", "Constrictive pericarditis"], "Slide 43."),
          q("Treatment of OSA that is essential every night:", "CPAP or BiPAP", ["Sleeping pills", "Caffeine", "Aspirin"], "Slide 43."),
          q("What restores airway patency during an apnea episode?", "A brief arousal", ["Deep sleep", "Hypoxemia alone", "Nothing"], "Slide 42.")],
        [q("An obese snorer with daytime sleepiness has resistant HTN, a loud P2 and leg edema. What process links them?", "Untreated OSA causing sympathetic surges, pulmonary HTN and cor pulmonale", ["Mitral regurgitation", "Hypothyroidism only", "Anemia"], "Slides 42 and 43."),
          q("A patient with OSA stopped using CPAP because it is uncomfortable. What do you tell him?", "Nightly CPAP or BiPAP is essential to prevent heart damage", ["CPAP is optional", "Just sleep on his side", "Use it once a week"], "Slide 43.")])
    ]),

    S("12-alcohol", "12. Unhealthy alcohol use", "Objective 5 (slides 44 to 46): binge and heavy drinking, what one drink is, and how to counsel.", [
      C("Binge, heavy, and one drink",
        "<p>CV risk <strong>rises with more alcohol</strong>; <strong>heavy and binge drinking</strong> are particularly harmful.</p>" +
        tbl(["", "Women", "Men"], [
          ["<strong>Binge</strong> (one occasion)", "<strong>≥ 4</strong> drinks", "<strong>≥ 5</strong> drinks"],
          ["<strong>Heavy</strong> (per week)", "<strong>≥ 8</strong> drinks", "<strong>≥ 15</strong> drinks"],
          ["Limit if drinking continues (BP)", "<strong>≤ 1</strong>/day", "<strong>≤ 2</strong>/day"]]) +
        tbl(["One drink ="], [["<strong>12 oz</strong> beer (4 to 5% ABV)"], ["<strong>5 oz</strong> wine"], ["<strong>1.5 oz</strong> hard liquor"]]) +
        "<p>Most patients go above a standard drink easily: a wine glass can hold far more than 5 oz.</p>" +
        hy("Counsel: encourage <strong>reduction or abstinence</strong>. For BP, the <strong>2025 guideline</strong> says <strong>abstinence is the optimal goal</strong>."),
        ["alc-binge", "alc-heavy", "alc-drink", "alc-counsel", "alc-limit"],
        [q("Binge drinking for women is how many drinks on one occasion?", "4 or more", ["2 or more", "5 or more", "8 or more"], "Slide 44."),
          q("Binge drinking for men is how many drinks on one occasion?", "5 or more", ["4 or more", "3 or more", "10 or more"], "Slide 44."),
          q("Heavy drinking for women is how many drinks a week?", "8 or more", ["15 or more", "4 or more", "20 or more"], "Slide 44."),
          q("Heavy drinking for men is how many drinks a week?", "15 or more", ["8 or more", "5 or more", "30 or more"], "Slide 44."),
          q("One standard drink of wine is:", "5 oz", ["12 oz", "1.5 oz", "8 oz"], "Slide 45."),
          q("One standard drink of beer (4 to 5% ABV) is:", "12 oz", ["5 oz", "16 oz", "24 oz"], "Slide 45."),
          q("One standard drink of hard liquor is:", "1.5 oz", ["5 oz", "3 oz", "0.5 oz"], "Slide 45."),
          q("For BP management, the 2025 guideline's optimal alcohol goal is:", "Abstinence", ["2 drinks a day", "Binge only on weekends", "No limit"], "Slide 46."),
          q("If drinking continues, the BP limit for women is:", "1 drink a day or less", ["2 drinks a day", "3 drinks a day", "No limit"], "Slide 46."),
          q("If drinking continues, the BP limit for men is:", "2 drinks a day or less", ["1 drink a day", "4 drinks a day", "No limit"], "Slide 46.")],
        [q("A woman has two glasses of wine nightly, each about 10 oz. How many standard drinks a week?", "About 28, which is heavy drinking", ["About 14, under the limit", "About 7", "Under 4"], "Slides 44 and 45: 20 oz a night = 4 drinks x 7."),
          q("A man drinks 6 beers every Saturday and none the rest of the week. Pattern?", "Binge drinking (5 or more on one occasion)", ["Heavy weekly drinking", "Within limits", "Abstinence"], "Slide 44.")])
    ]),

    S("13-smoking", "13. Smoking cessation", "Objective 5 (slides 47 to 50): what to ask every visit, the 3-step and 5 A's models, and the cessation drugs.", [
      C("Every visit: ask, advise, connect",
        ul(["Address smoking <strong>at every visit</strong>: ask and <strong>document the amount</strong> (<strong>1 pack = 20 cigarettes</strong>).",
          "Have they tried to quit or cut down? If not, why not?",
          "Have they tried an adjunct? <strong>Adjunct use doubles the success rate</strong>.",
          "Ask about <strong>chewing tobacco and vaping</strong>."]) +
        tbl(["3-step model", "5 A's"], [["<strong>Ask</strong>", "<strong>Ask</strong>"], ["<strong>Advise</strong>", "<strong>Advise</strong>"], ["<strong>Connect</strong>", "<strong>Assess</strong>"], ["", "<strong>Assist</strong>"], ["", "<strong>Arrange</strong> follow-up"]]) +
        hy("Ask <strong>all</strong> patients about tobacco; advise <strong>quitting</strong>."),
        ["sm-every", "sm-pack", "sm-adjunct", "sm-3step", "sm-5a"],
        [q("How often should smoking cessation be addressed?", "At every visit", ["Once a year", "Only at the first visit", "Only after an MI"], "Slide 47."),
          q("One pack is how many cigarettes?", "20", ["10", "25", "40"], "Slide 47."),
          q("Using a cessation adjunct does what to the success rate?", "Doubles it", ["Halves it", "No change", "Triples the relapse"], "Slide 47."),
          q("What are the three steps of the 3-step model?", "Ask, advise, connect", ["Ask, assess, arrange", "Advise, assist, treat", "Screen, stent, statin"], "Slide 48."),
          q("Which is NOT one of the 5 A's?", "Agree", ["Ask", "Assess", "Arrange follow-up"], "Slide 48."),
          q("Which other tobacco products should you ask about?", "Chewing tobacco and vaping", ["Coffee and tea", "Chocolate", "Nicotinamide vitamins"], "Slide 47.")],
        [q("A patient smokes 30 cigarettes a day. How many packs per day do you document?", "1.5 ppd", ["3 ppd", "0.5 ppd", "30 ppd"], "Slide 47.")]),
      C("Cessation drugs",
        tbl(["Drug", "Dosing", "Precautions"], [
          ["<strong>Nicotine patch</strong>", "<strong>21 mg if &gt; ½ ppd</strong>; <strong>14 mg if &lt; ½ ppd</strong>", "Local irritation; <strong>remove for sleep</strong>"],
          ["<strong>Nicotine gum / lozenge</strong>", "<strong>4 mg if first tobacco ≤ 30 min after waking</strong>, 2 mg if &gt; 30 min; 1 piece every 1 to 2 hours; max <strong>20 lozenges or 24 gum</strong>/day", "<strong>Hiccups, GERD</strong>; avoid <strong>15 min before and after eating</strong>"],
          ["<strong>Nasal or oral inhaler</strong>", "1 to 2 nasal sprays/hour, or puff the oral cartridge 20 min/hour", "Local irritation; avoid with <strong>nasal/airway disease</strong>"],
          ["<strong>Bupropion (Zyban, Wellbutrin)</strong>", "150 mg/day × 3 days, then <strong>150 mg twice daily</strong>", "Avoid with <strong>seizure history or risk</strong>, <strong>eating disorders</strong>, <strong>MAOIs</strong>"],
          ["<strong>Varenicline (Chantix)</strong>", "0.5 mg daily × 3 days, 0.5 mg twice daily × 4 days, then <strong>1 mg twice daily</strong>", "<strong>Nausea</strong> common, <strong>vivid dreams</strong>; <strong>dose-adjust for CKD</strong>"]]) +
        mn("<strong>Bupropion</strong>: no <strong>S</strong>eizures, no <strong>E</strong>ating disorders, no <strong>M</strong>AOIs. <strong>Varenicline</strong>: <strong>N</strong>ausea, <strong>D</strong>reams, <strong>K</strong>idneys."),
        ["nrt-patch", "nrt-gum", "nrt-inhaler", "bup", "var"],
        [q("Nicotine patch dose for someone smoking more than half a pack a day:", "21 mg", ["14 mg", "7 mg", "42 mg"], "Slide 49."),
          q("Nicotine patch dose for someone smoking less than half a pack a day:", "14 mg", ["21 mg", "42 mg", "2 mg"], "Slide 49."),
          q("Which nicotine gum dose if the first tobacco is within 30 minutes of waking?", "4 mg", ["2 mg", "1 mg", "8 mg"], "Slide 49."),
          q("When should nicotine gum or lozenges be avoided?", "15 minutes before and after eating", ["At bedtime only", "With water", "In the morning"], "Slide 49."),
          q("Which side effects are listed for nicotine gum and lozenges?", "Hiccups and GERD", ["Seizures", "Vivid dreams", "Hair loss"], "Slide 49."),
          q("Why remove the nicotine patch for sleep?", "It is listed as a precaution (it can disturb sleep)", ["It causes seizures", "It melts", "It causes GERD"], "Slide 49."),
          q("Bupropion should be avoided in patients with:", "Seizure history or risk", ["Asthma", "Hypertension controlled", "Hypothyroidism"], "Slide 50."),
          q("Bupropion should be avoided in patients with which psychiatric condition?", "Eating disorders", ["Mild depression", "ADHD", "Insomnia"], "Slide 50."),
          q("Bupropion should not be combined with:", "MAOIs", ["Statins", "Aspirin", "Metformin"], "Slide 50."),
          q("Varenicline's common side effect:", "Nausea", ["Seizures", "Hiccups", "Hair loss"], "Slide 50."),
          q("Varenicline can cause:", "Vivid dreams", ["Hiccups", "Weight gain from fluid", "Hypoglycemia"], "Slide 50."),
          q("Which cessation drug must be dose-adjusted for CKD?", "Varenicline", ["Nicotine patch", "Nicotine gum", "Bupropion is the only one"], "Slide 50."),
          q("Chantix is the brand name of:", "Varenicline", ["Bupropion", "Nicotine patch", "Nicotine inhaler"], "Slide 50."),
          q("Bupropion's target dose after the start:", "150 mg twice daily", ["1 mg twice daily", "21 mg daily", "4 mg every hour"], "Slide 50."),
          q("Varenicline's target dose after titration:", "1 mg twice daily", ["150 mg twice daily", "0.5 mg weekly", "21 mg daily"], "Slide 50."),
          q("Who should avoid the nicotine nasal or oral inhaler?", "Patients with nasal or airway disease", ["Patients with GERD", "Patients with seizures", "Patients with CKD"], "Slide 49.")],
        [q("A smoker with a history of seizures wants a pill to quit. Which is the better choice?", "Varenicline", ["Bupropion", "Bupropion plus an MAOI", "None exist"], "Slide 50."),
          q("A smoker with bulimia nervosa wants help quitting. Which drug should be avoided?", "Bupropion", ["Nicotine patch", "Varenicline", "Nicotine gum"], "Slide 50."),
          q("A smoker on dialysis wants varenicline. What must you do?", "Adjust the dose for CKD", ["Use the full dose", "Never prescribe it", "Double the dose"], "Slide 50."),
          q("A patient lights up within 10 minutes of waking and smokes a pack a day. Which NRT doses fit?", "21 mg patch and 4 mg gum or lozenge", ["14 mg patch and 2 mg gum", "7 mg patch only", "No NRT"], "Slide 49."),
          q("A patient chews nicotine gum with meals and gets heartburn and hiccups. Advice?", "Avoid it 15 minutes before and after eating", ["Chew more pieces", "Swallow the gum", "Switch to 24 pieces at once"], "Slide 49.")])
    ]),

    S("14-aspirin-take-home", "14. Aspirin for primary prevention and take-home messages", "Objective 6 (slides 51, 52, 60, 61): who might get aspirin, who should not, and the big picture.", [
      C("Aspirin: use selectively",
        tbl(["Situation", "Aspirin 81 mg for primary prevention?"], [
          ["<strong>Most adults</strong> without ASCVD", "<strong>Not recommended routinely</strong>"],
          ["Select adults <strong>40 to 70</strong> with <strong>elevated CV risk</strong> and <strong>low bleeding risk</strong>", "<strong>May be considered</strong>"],
          ["Age <strong>over 70</strong>", "<strong>Do not routinely start</strong>"],
          ["<strong>Increased bleeding risk</strong>", "<strong>Do not routinely start</strong>"]]) +
        hy("Individualize: <strong>CV benefit vs bleeding risk</strong>. (Aspirin for <strong>secondary</strong> prevention is a different question.)"),
        ["asa-routine", "asa-40-70", "asa-70", "asa-bleed"],
        [q("Is routine low-dose aspirin recommended for most adults without ASCVD?", "No", ["Yes, everyone over 40", "Yes, everyone over 70", "Only women"], "Slide 52."),
          q("Aspirin for primary prevention may be considered in select adults aged:", "40 to 70 with elevated CV risk and low bleeding risk", ["Over 70", "20 to 30", "Anyone with high bleeding risk"], "Slide 52."),
          q("Should aspirin be routinely started in adults over 70 for primary prevention?", "No", ["Yes", "Only at 325 mg", "Only with warfarin"], "Slide 52."),
          q("The aspirin decision for primary prevention requires balancing:", "Cardiovascular benefit against bleeding risk", ["Cost against taste", "LDL against HDL", "BP against heart rate"], "Slide 52."),
          q("The low dose of aspirin on the slide is:", "81 mg/day", ["325 mg/day", "650 mg/day", "1 g/day"], "Slide 52.")],
        [q("A 74-year-old without ASCVD asks whether to start daily aspirin. Best answer?", "Do not routinely start aspirin over age 70", ["Start 81 mg daily", "Start 325 mg daily", "Start with clopidogrel"], "Slide 52."),
          q("A 55-year-old with high PREVENT risk, no ulcer history and no anticoagulant asks about aspirin. Best approach?", "It may be considered after weighing benefit and bleeding risk", ["Never allowed", "Mandatory for all", "Only over 70"], "Slide 52."),
          q("A 60-year-old with a prior GI bleed and no ASCVD asks about aspirin for prevention. Best answer?", "Do not routinely start; bleeding risk is increased", ["Start 81 mg now", "Start 325 mg now", "Aspirin lowers bleeding risk"], "Slide 52.")]),
      C("Take-home messages",
        tbl(["Message", "What it means"], [
          ["<strong>Lifestyle, lifestyle, lifestyle</strong>", "Hardest to accomplish and needs a motivated patient, but makes the <strong>greatest impact</strong>; keep chipping away with achievable goals"],
          ["<strong>Control the gateway diseases</strong>", "<strong>Hypertension, dyslipidemia, diabetes</strong> to goal"],
          ["<strong>Start early</strong>", "Atherosclerosis develops over time; begin before short-term risk is high"],
          ["<strong>Calculate appropriately</strong>", "PREVENT-ASCVD 10-year; 30-year in eligible younger adults"],
          ["<strong>Independent indications</strong>", "<strong>LDL ≥ 190, diabetes, CKD 3 to 4</strong> can warrant therapy without calculated risk"],
          ["<strong>Personalize</strong>", "Family history, <strong>Lp(a)</strong>, other risk factors, preferences"],
          ["<strong>Reclassify</strong>", "<strong>CAC</strong> can resolve uncertainty"],
          ["<strong>Treat to goals</strong>", "Follow both the recommended <strong>percent LDL reduction</strong> and <strong>LDL-C / non-HDL-C goals</strong>"],
          ["<strong>Address all risk factors</strong>", "Smoking, activity, nutrition, BP, diabetes"]]),
        ["th-lifestyle", "th-gateway", "th-early", "th-goals"],
        [q("Which intervention makes the greatest impact on ASCVD risk, per the take-home slide?", "Lifestyle changes", ["Aspirin", "CAC scoring", "Stress testing"], "Slide 51."),
          q("Which are the three 'gateway diseases' to control?", "Hypertension, dyslipidemia, diabetes", ["Asthma, GERD, migraine", "CKD, HIV, lupus", "Obesity, OSA, gout"], "Slide 51."),
          q("Treating to goals means following:", "Both the percent LDL reduction and LDL-C or non-HDL-C goals", ["Only total cholesterol", "Only HDL", "Only triglycerides"], "Slide 61."),
          q("Why start prevention early?", "Atherosclerosis develops over time", ["Statins only work in youth", "Risk falls with age", "It is required by law"], "Slide 60.")],
        [q("A patient keeps failing at diet change and asks why you keep bringing it up. Best response?", "Lifestyle change is hardest but has the greatest impact; we will set smaller achievable goals", ["We will stop discussing lifestyle", "Medication replaces lifestyle", "Lifestyle has no effect on CAD"], "Slide 51.")])
    ]),

    S("15-thomas-case", "15. Building a plan: Thomas", "Objective 7 (slides 53 to 59): an individualized risk-reduction plan over 14 years, from wellness visit to CABG.", [
      C("Visit 1: the smoker who 'gets exercise at work'",
        tbl(["Finding", "Detail"], [
          ["History", "<strong>52</strong>-year-old man; diet-controlled dyslipidemia; <strong>1 ppd since age 17</strong> (35 pack-years, calculated)"],
          ["Activity", "Thinks his active job as a meat department manager counts as exercise"],
          ["Weight", "<strong>BMI 28</strong> (normal 18 to 24.9), <strong>waist 110 cm (43.3 in)</strong>; worried quitting will add weight"],
          ["Exam", "Normal; <strong>BP 117/68</strong>"]]) +
        chain(["Acknowledge weight-gain worry, but the <strong>#1 intervention is to quit smoking</strong>",
          "He <strong>refuses an adjunct</strong>; ask him to think hard about each cigarette and <strong>cut down</strong>",
          "<strong>Brisk walking about 20 minutes most days</strong> (also helps with weight)",
          "Order <strong>CBC, chemistry, fasting lipid panel, A1c</strong>; follow up in <strong>3 months</strong>"]),
        ["th1-history", "th1-smoke", "th1-walk", "th1-labs"],
        [q("What was the number one intervention advised for Thomas at the first visit?", "Quit smoking", ["Start a statin", "Start aspirin", "Lose 30 pounds before anything else"], "Slide 55."),
          q("What did Thomas decide about a cessation adjunct?", "He refused one", ["He chose varenicline", "He chose a 21 mg patch", "He chose bupropion"], "Slide 55."),
          q("What exercise was Thomas advised?", "Brisk walking about 20 minutes most days", ["Marathon training", "Heavy weightlifting only", "No exercise"], "Slide 56."),
          q("Which labs were ordered at Thomas's first visit?", "CBC, chemistry, fasting lipid panel, A1c", ["Troponin and BNP", "Lp(a) and ApoB only", "TSH only"], "Slide 56."),
          q("Thomas's BMI of 28 is in which range?", "Overweight (above the normal 18 to 24.9)", ["Normal", "Underweight", "Class III obesity"], "Slide 54.")],
        [q("Thomas worries quitting will make him gain weight. What is the best response?", "Acknowledge it, but quitting is still the most important step; walking can offset weight gain", ["Keep smoking to control weight", "Weight gain makes quitting pointless", "Ignore his concern"], "Slides 55 and 56."),
          q("Thomas says his busy job counts as exercise. Does it likely meet the goal?", "Not reliably; he still needs about 150 minutes a week of moderate activity", ["Yes; any work counts", "Yes; standing is vigorous exercise", "Exercise does not matter for him"], "Slides 17 and 56.")]),
      C("3 months and age 55: what do you do?",
        tbl(["Visit", "Findings"], [
          ["<strong>3 months</strong>", "Down to <strong>½ ppd</strong>, weight stable. <strong>A1c 4.8%</strong>. TC 210, <strong>LDL 108</strong>, <strong>HDL 32</strong>, <strong>TG 398</strong>, <strong>GFR 55</strong>. BP 120/60"],
          ["<strong>Age 55</strong>", "Quit 2 years, then <strong>restarted smoking</strong> (wife's cancer; depression, seeing a therapist). <strong>A1c 7.7%</strong>. TC 160, LDL 88, HDL 38, TG 258. BP 120/70"]]) +
        tbl(["Applying the deck's rules", "Why"], [
          ["At 3 months: <strong>start lipid-lowering</strong>", "GFR 55 = <strong>CKD stage 3</strong> at age 40 to 75 (if it persists): an indication <strong>regardless of PREVENT</strong> (slide 24). Low HDL and high TG; smoking"],
          ["At 55: <strong>diabetes</strong>", "A1c 7.7% is <strong>≥ 6.5%</strong> (slide 37): diabetes at 40 to 75 is another <strong>statin indication</strong>; goal A1c <strong>&lt; 7%</strong>"],
          ["At 55: <strong>GLP-1 RA or SGLT2i</strong>", "T2DM <strong>with CKD</strong>: use a drug with CV or kidney benefit, regardless of A1c (slide 39)"],
          ["At 55: <strong>smoking again</strong>", "Address at every visit; offer an adjunct (doubles success); bupropion could also help depression (standard teaching)"]]) +
        note("The deck asks 'what do you do?' without an answer slide. These answers apply the deck's own rules; CKD needs a repeat eGFR at least 3 months later to confirm (standard teaching)."),
        ["th2-labs", "th2-ckd", "th3-dm", "th3-glp", "th3-smoke"],
        [q("Thomas's GFR of 55 is in which CKD stage?", "Stage 3", ["Stage 1", "Stage 2", "Stage 5"], "Slide 57; staging is standard teaching."),
          q("At the 3-month visit, Thomas's HDL of 32 is:", "Low (under 40 for men)", ["Protective", "Desirable", "Borderline"], "Slides 25 and 57."),
          q("At age 55, Thomas's A1c of 7.7% means:", "Diabetes", ["Prediabetes", "Normal", "Hypoglycemia"], "Slides 37 and 58."),
          q("At age 55, which diabetes drug class fits Thomas best given his kidney disease?", "GLP-1 RA or SGLT2 inhibitor with CV or kidney benefit", ["Sulfonylurea first", "No treatment", "Insulin only"], "Slide 39."),
          q("Thomas's triglycerides of 398 are:", "High (200 to 499)", ["Very high", "Desirable", "Borderline"], "Slides 25 and 57.")],
        [q("At Thomas's 3-month visit (age 52, GFR 55, LDL 108), why is lipid-lowering indicated without needing PREVENT?", "Stage 3 CKD at age 40 to 75 is an independent indication", ["LDL over 190", "He has had an MI", "HDL over 60"], "Slides 24 and 57."),
          q("At 55, Thomas restarted smoking under stress and has new diabetes. Which plan fits the deck best?", "Statin, GLP-1 RA or SGLT2i, A1c goal under 7%, and renewed cessation help with an adjunct", ["Aspirin only", "Wait until he has symptoms", "Stress test and nothing else"], "Slides 24, 37 to 39, 47.")]),
      C("The ending: hypertension, NSTEMI, CABG",
        ul(["Thomas keeps smoking and develops <strong>hypertension</strong> within a year of his diabetes diagnosis: an <strong>ARB</strong> is started for <strong>BP &lt; 130/80</strong>.",
          "Despite aggressive risk factor management, at <strong>66</strong> (14 years into care) he has an <strong>NSTEMI</strong> and a <strong>3-vessel CABG</strong>.",
          "Now he has clinical ASCVD: <strong>secondary prevention</strong>, e.g., a <strong>high-intensity statin regardless of lipids</strong> (slide 23)."]) +
        hy("Why an ARB fits: diabetes with CKD and albuminuria is a compelling indication for an ACE inhibitor or ARB (standard teaching)."),
        ["th4-arb", "th4-cabg", "th4-secondary"],
        [q("Which BP drug was started for Thomas?", "An ARB", ["A beta blocker", "A loop diuretic", "Clonidine"], "Slide 59."),
          q("What BP goal was set for Thomas?", "Below 130/80", ["Below 140/90", "Below 150/90", "Below 110/60"], "Slides 41 and 59."),
          q("What event did Thomas have at 66?", "NSTEMI followed by 3-vessel CABG", ["STEMI with a single stent", "Stroke", "Sudden cardiac death"], "Slide 59."),
          q("After his CABG, Thomas falls under which kind of prevention?", "Secondary", ["Primary", "None", "Primordial only"], "Slides 2 and 59.")],
        [q("After his CABG, what statin plan does the deck call for?", "High-intensity statin regardless of lipids", ["Moderate-intensity only if LDL is high", "Stop statins after surgery", "Calculate PREVENT first"], "Slide 23.")])
    ]),
  ];
})();
