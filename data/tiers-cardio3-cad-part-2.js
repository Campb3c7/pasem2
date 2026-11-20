/* Cardio Part 3 Tiers: CAD Part II (Stager's prevention and risk modification deck), all three tiers, story format.
   Same shape and rules as data/tiers-cardio3-cad-part-1.js. Facts follow source-material/cardio-part-3/text/cad-part-2.md;
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

  var PREVENT_BANDS = [[3, "Low (< 3%)", "Lifestyle is central.", "cabg", "&lt; 3 low"], [5, "Borderline (3 to < 5%)", "Lipid-lowering MAY be considered after a talk.", "ok", "3-5 borderline"],
    [10, "Intermediate (5 to < 10%)", "Lipid-lowering SHOULD be considered after a talk.", "ok", "5-10 intermediate"], [null, "High (≥ 10%)", "Lipid-lowering is RECOMMENDED.", "bad", "≥ 10 high"]];

  /* =============================== TIER 1 · FOUNDATIONS =============================== */
  T.units["t1|cad-part-2"] = { chunks: [
    { id: "prevention", title: "Primary vs secondary prevention", goal: "Primary keeps CAD from starting; secondary keeps it from coming back. Start early.",
      pages: [
        { title: "Two jobs, one timeline", fig: { type: "prevline" },
          html: "<p>Picture a patient's whole life on one line. Plaque builds silently for years before the first heart attack or stroke.</p>" +
            "<p><strong>Primary prevention</strong> works <strong>before</strong> the first event: lower the modifiable risk factors with lifestyle, and catch metabolic problems early, so CAD never develops.</p>" +
            "<p><strong>Secondary prevention</strong> works <strong>after</strong> CAD is diagnosed: stop the plaque from progressing, prevent more heart damage and prevent the next event.</p>" +
            mn("Primary = first. Secondary = second time.") },
        { title: "What primary care checks", fig: { type: "tiles", items: [["🩺", "Blood pressure", ""], ["🧪", "Lipids", ""], ["🚬", "Smoking", ""], ["🍬", "Diabetes", ""], ["🫘", "Kidney function", ""], ["🏃", "Lifestyle", ""]] },
          html: "<p>At routine visits: check these six, <strong>estimate risk</strong> when it will guide a treatment decision, and <strong>reassess</strong> when life changes.</p>" },
        { title: "Start early", fig: { type: "flow", steps: ["Age 20 to 29<br><small>find risk factors, lifetime risk, family history</small>", "Age 30 to 79<br><small>PREVENT-ASCVD 10-year risk</small>", "Age 30 to 59<br><small>also think 30-year risk</small>"] },
          html: "<p>Plaque takes 10 to 15 years to build, so prevention can't wait until risk is high.</p>" +
            "<p>In your 20s: find and fix risk factors early. Think about lipid-lowering in selected young adults, especially <strong>LDL-C ≥ 160</strong> or a <strong>strong family history of premature ASCVD</strong>.</p>" }
      ],
      remember: ["Primary prevention: before CAD; lifestyle + catching metabolic problems early.", "Secondary prevention: after CAD; stop progression, damage and recurrent events.", "Check BP, lipids, smoking, diabetes, kidney function and lifestyle; estimate and reassess risk.", "20s: find risk factors early; consider lipid-lowering if LDL ≥ 160 or strong family history. 30 to 79: PREVENT."],
      check: [
        Q("A 60-year-old with a stent placed last year is started on a statin. What kind of prevention is this?", "Secondary prevention", ["Primary prevention", "Screening", "Tertiary screening"], "He already has CAD, so the goal is to stop progression and the next event."),
        Q("A healthy 45-year-old is counseled on diet, exercise and quitting smoking. What kind of prevention is this?", "Primary prevention", ["Secondary prevention", "Revascularization", "Risk stratification after ACS"], "No CAD yet, so the goal is to keep it from developing."),
        Q("A 26-year-old has an LDL-C of 175 and a father with an MI at 48. What should you consider?", "Earlier lipid-lowering treatment", ["Nothing until age 40", "A stress test", "Aspirin 81 mg"], "Young adults with LDL ≥ 160 or strong premature family history may warrant early treatment.")
      ],
      bank: [
        Q("Which risk tool is used to estimate 10-year risk at ages 30 to 79?", "PREVENT-ASCVD", ["Duke Treadmill Score", "HEART score", "CHA2DS2-VASc"], "PREVENT-ASCVD is the preferred calculator for primary prevention decisions.")
      ] },

    { id: "prevent", title: "The PREVENT calculator", goal: "PREVENT-ASCVD gives a 10-year risk that sorts patients into low, borderline, intermediate or high.",
      pages: [
        { title: "Three models, one for statins", fig: { type: "tiles", items: [["❤️🧠", "PREVENT-ASCVD", "risk of MI and stroke"], ["💧", "PREVENT-HF", "risk of heart failure"], ["➕", "PREVENT-CVD", "total: ASCVD + HF"]], hi: 0 },
          html: "<p>In 2026, <strong>PREVENT</strong> became the preferred risk calculator. It has three models; for <strong>lipid-lowering decisions, use PREVENT-ASCVD</strong>.</p>" +
            "<p>Time frames: <strong>10-year</strong> risk at ages <strong>30 to 79</strong>, and <strong>30-year</strong> risk at <strong>30 to 59</strong>.</p>" },
        { title: "Reading the number", fig: { type: "slider", label: "10-year PREVENT-ASCVD risk", unit: "%", min: 0, max: 20, step: 0.5, value: 4, bands: PREVENT_BANDS },
          html: "<p><strong>Drag the risk.</strong> The four categories are the backbone of primary prevention.</p>" +
            mn("3, 5, 10: the three fences. Under 3 low, 3 to 5 borderline, 5 to 10 intermediate, 10 and up high.") },
        { title: "When NOT to use it", fig: { type: "tiles", items: [["❤️", "Known CVD", "already secondary prevention"], ["🦴", "CAC ≥ 300", "severe subclinical disease"], ["🫘", "End-stage kidney disease", ""], ["⏳", "Life expectancy &lt; 1 year", ""], ["🧬", "Inherited conditions", "that set high risk on their own"]] },
          html: "<p>PREVENT is for eligible adults 30 to 79 <strong>without</strong> known CVD or subclinical atherosclerosis. In these five situations it isn't the main decision tool: the answer is already clear, or the model doesn't fit.</p>" }
      ],
      remember: ["PREVENT-ASCVD (MI + stroke) is the one for statin decisions; HF and CVD models also exist.", "10-year risk at 30 to 79; 30-year risk at 30 to 59.", "&lt; 3% low · 3 to &lt; 5% borderline · 5 to &lt; 10% intermediate · ≥ 10% high.", "Don't use it with known CVD, CAC ≥ 300, ESKD, life expectancy &lt; 1 year, or high-risk inherited conditions."],
      check: [
        Q("A 10-year PREVENT-ASCVD risk of 7% falls in which category?", "Intermediate", ["Low", "Borderline", "High"], "5% to under 10% is intermediate."),
        Q("Which PREVENT model guides lipid-lowering decisions?", "PREVENT-ASCVD", ["PREVENT-HF", "PREVENT-CVD", "The pooled cohort equations"], "The deck says to use PREVENT-ASCVD, which estimates MI and stroke risk, for lipid decisions."),
        Q("For which patient should PREVENT NOT be the main decision tool?", "A 60-year-old with a CAC score of 350", ["A healthy 45-year-old smoker", "A 35-year-old with borderline LDL", "A 70-year-old with treated hypertension"], "CAC ≥ 300 is severe subclinical disease, so the calculator no longer fits.")
      ],
      bank: [
        Q("At what ages can a 30-year PREVENT risk be considered?", "30 to 59", ["20 to 29", "40 to 75", "60 to 79"], "The 30-year estimate is for eligible younger adults, 30 to 59.")
      ] },

    { id: "statins", title: "Who gets a statin", goal: "Every ASCVD patient gets a high-intensity statin; four groups skip the calculator; everyone else follows PREVENT.",
      pages: [
        { title: "Already have ASCVD? High-intensity, no questions", fig: { type: "tiles", items: [["❤️", "Coronary", "ACS, prior MI, stable or unstable angina, PCI/stent, CABG"], ["🧠", "Cerebrovascular", "atherosclerotic ischemic stroke or TIA"], ["🦵", "Peripheral", "atherosclerotic PAD"], ["🫀", "Aortic", "atherosclerotic aortic aneurysm"]] },
          html: "<p>This is secondary prevention. <strong>Every</strong> patient with clinical atherosclerotic disease gets a <strong>high-intensity statin</strong>, <strong>whatever their lipid panel says</strong>.</p>" +
            "<p>High intensity means <strong>atorvastatin 40 to 80</strong> or <strong>rosuvastatin 20 to 40</strong>.</p>" +
            hy("Known ASCVD + a \"normal\" LDL still = high-intensity statin.") },
        { title: "Four groups skip the calculator", fig: { type: "tiles", items: [["🔺", "LDL-C ≥ 190", "severe hypercholesterolemia; think familial"], ["🍬", "Diabetes", "ages 40 to 75"], ["🫘", "CKD stage 3 or 4", "ages 40 to 75"], ["🧬", "HIV", "ages 40 to 75"]] },
          html: "<p>In primary prevention, these four groups get lipid-lowering therapy <strong>regardless of the PREVENT number</strong>. Their risk is high enough on its own.</p>" +
            mn("190, and the 40-to-75 trio: Diabetes, Kidneys, HIV.") },
        { title: "Everyone else: let PREVENT decide", fig: { type: "grid", cols: ["PREVENT-ASCVD", "Lipid-lowering therapy"], rows: [["High ≥ 10%", "<strong>Recommended</strong>"], ["Intermediate 5 to &lt; 10%", "<strong>Should</strong> be considered after a talk"], ["Borderline 3 to &lt; 5%", "<strong>May</strong> be considered after a talk"], ["Low &lt; 3%", "Lifestyle; consider only if LDL 160-189 or 30-year risk ≥ 10% (ages 30 to 59)"]], hiCol: 1 },
          html: "<p>For eligible adults 30 to 79 with LDL 70 to 189 and no ASCVD, the PREVENT number guides it. Notice the words climb: <strong>may → should → recommended</strong>.</p>" },
        { title: "Try it", fig: { type: "statinpick" },
          html: "<p>Work top to bottom like you would in clinic: the <strong>first yes</strong> decides it. Only when all three are no does the PREVENT number matter.</p>" }
      ],
      remember: ["Clinical ASCVD (coronary, cerebral, PAD, aortic) → high-intensity statin regardless of lipids.", "High intensity: atorvastatin 40 to 80, rosuvastatin 20 to 40.", "Treat regardless of risk: LDL ≥ 190; ages 40 to 75 with diabetes, CKD 3-4 or HIV.", "Otherwise PREVENT: ≥ 10% recommended · 5-10% should consider · 3-5% may consider · &lt; 3% lifestyle."],
      check: [
        Q("A 58-year-old with a prior MI has an LDL of 85. What statin plan?", "High-intensity statin", ["No statin, his LDL is fine", "Moderate-intensity statin", "Statin only if PREVENT ≥ 10%"], "All patients with clinical ASCVD get a high-intensity statin regardless of their lipids."),
        Q("A 50-year-old with type 2 diabetes and a PREVENT risk of 4%. Lipid-lowering?", "Yes, recommended regardless of PREVENT risk", ["No, risk is borderline", "Only if LDL ≥ 190", "Only after a CAC score"], "Diabetes at 40 to 75 is one of the groups treated without relying on the calculator."),
        Q("A 55-year-old with no ASCVD, no diabetes, LDL 140, PREVENT 12%. What's the recommendation?", "Lipid-lowering therapy is recommended", ["Lifestyle only", "May be considered", "Get an echo first"], "A PREVENT-ASCVD risk of 10% or more means therapy is recommended.")
      ],
      bank: [
        Q("Which of these is a high-intensity statin dose?", "Rosuvastatin 20 mg", ["Rosuvastatin 5 mg", "Atorvastatin 10 mg", "Pravastatin 40 mg"], "High intensity is atorvastatin 40 to 80 or rosuvastatin 20 to 40.")
      ] },

    { id: "lifestyle", title: "Lifestyle comes first", goal: "Lifestyle changes make the biggest difference: diet, 150 minutes of activity, sleep 7 to 9 hours.",
      pages: [
        { title: "The biggest lever", fig: { type: "tiles", items: [["🥗", "Heart-healthy diet", "fruits, vegetables, whole grains, legumes, nuts, fish, lean protein"], ["🏃", "Regular activity", "150 moderate or 75 vigorous min/week"], ["😴", "Sleep", "7 to 9 hours"], ["💧", "Hydration", "water over sugary drinks"]] },
          html: "<p>The deck's take-home, said three times: <strong>lifestyle changes, lifestyle changes, lifestyle changes</strong>. They're the hardest to achieve and need a motivated patient, but they make the <strong>greatest impact</strong> on ASCVD risk.</p>" +
            "<p>Every plan starts with <strong>education</strong>. Healthy patients: keep it up. Unhealthy habits: set <strong>specific, attainable goals together</strong> and keep chipping away.</p>" },
        { title: "Move: 150 or 75", fig: { type: "bars", items: [["Moderate", 100, "150 min / week", "good"], ["or vigorous", 50, "75 min / week", "good"], ["Plus strength", 28, "≥ 2 days / week", "blue"]] },
          html: "<p>At least <strong>150 minutes a week of moderate</strong> or <strong>75 minutes of vigorous</strong> aerobic activity, <strong>plus</strong> muscle strengthening on at least <strong>2 days</strong>.</p>" +
            mn("Vigorous counts double: 75 vigorous = 150 moderate.") },
        { title: "How exercise protects the heart", fig: { type: "eq", terms: [["Fat", "abdominal", ""], "·", ["BP", "", ""], "·", ["TG", "", ""], "·", ["HDL", "", ""], "·", ["Insulin", "sensitivity", ""]] },
          html: "<p><strong>Antiatherogenic effects</strong>: less abdominal fat, lower BP, lower triglycerides, higher HDL, better insulin sensitivity.</p>" +
            "<p><strong>Other benefits</strong>: antithrombotic, better endothelial function, better autonomic function, anti-ischemic and antiarrhythmic. Exercise works through many paths at once.</p>" },
        { title: "Eat this, limit that", fig: { type: "quad", x: ["Eat more", "Limit"], y: ["Foods", "Swaps"], cells: [["Fruits, vegetables, whole grains, legumes, nuts, fish, lean protein", "", "cabg"], ["Saturated and trans fats, processed meats, highly processed foods", "", "bad"], ["Unsaturated fats: olive oil, nuts, avocado, fatty fish; low-fat dairy", "", "cabg"], ["Sodium, added sugars, sugar-sweetened drinks", "", "bad"]] },
          html: "<p>The key swap: <strong>replace saturated fats with unsaturated fats</strong>. And choose low-fat or fat-free dairy.</p>" }
      ],
      remember: ["Lifestyle changes make the greatest impact on ASCVD risk, even though they're the hardest.", "Activity: 150 min moderate or 75 min vigorous per week + strength ≥ 2 days.", "Sleep 7 to 9 hours; water over sugary drinks.", "Diet: swap saturated for unsaturated fat; limit trans fat, processed meat, sodium, added sugar."],
      check: [
        Q("What is the weekly aerobic activity goal?", "150 min moderate or 75 min vigorous", ["30 min vigorous", "300 min moderate only", "60 min of any activity"], "Either 150 minutes moderate or 75 minutes vigorous, plus strength work twice a week."),
        Q("Which intervention does the deck say makes the greatest impact on ASCVD risk?", "Lifestyle changes", ["Aspirin", "Calcium scoring", "Stress testing"], "Lifestyle is the hardest to achieve but has the biggest effect on risk."),
        Q("Which of these is an antiatherogenic effect of exercise?", "Higher HDL", ["Higher triglycerides", "More abdominal fat", "Lower insulin sensitivity"], "Exercise raises HDL and lowers BP, triglycerides and abdominal fat.")
      ],
      bank: [
        Q("How many hours of sleep should adults aim for?", "7 to 9", ["5 to 6", "10 to 12", "At least 4"], "The deck's good-habits list sets 7 to 9 hours a night.")
      ] },

    { id: "gateway", title: "The gateway diseases and smoking", goal: "Get BP, diabetes and smoking under control; aspirin is not routine.",
      pages: [
        { title: "Three doors into CAD", fig: { type: "flow", steps: ["Hypertension", "Dyslipidemia", "Diabetes", "CAD"], hi: 3 },
          html: "<p>The deck calls them the <strong>gateway diseases</strong>. The importance of controlling these three <strong>to goal</strong> \"cannot be overstated\".</p>" +
            "<p>Lipids were the statin chunk. This chunk is BP, diabetes, smoking, and one thing NOT to do routinely.</p>" },
        { title: "Blood pressure: under 130/80", fig: { type: "slider", label: "Systolic BP", unit: " mmHg", min: 100, max: 180, step: 1, value: 138, bands: [[120, "Under 120", "A more intensive target for some higher-risk patients.", "cabg"], [130, "120 to 129", "At goal for most adults (with diastolic under 80).", "pci"], [null, "130 or higher", "Above goal: lifestyle and medicines to get under 130/80.", "bad"]] },
          html: "<p>Goal for most adults: <strong>below 130/80</strong>. In appropriate patients at higher CV risk, consider <strong>SBP below 120</strong>.</p>" +
            "<p>Confirm the diagnosis with standardized office readings and home or ambulatory monitoring, and pick drugs by compelling indications.</p>" },
        { title: "Diabetes: A1c, and two heart-protecting drugs", fig: { type: "slider", label: "A1c", unit: "%", min: 4.5, max: 10, step: 0.1, value: 6.0, bands: [[5.7, "Normal", "Below the prediabetes range.", "cabg"], [6.5, "Prediabetes", "5.7 to 6.4%.", "ok"], [null, "Diabetes", "6.5% or higher.", "bad"]] },
          html: "<p>Most adults with diabetes: <strong>A1c goal below 7%</strong>.</p>" +
            "<p>Type 2 diabetes <strong>plus</strong> ASCVD, heart failure or CKD → a <strong>GLP-1 RA and/or SGLT2 inhibitor</strong> with proven heart or kidney benefit, <strong>regardless of A1c or metformin use</strong>.</p>" +
            hy("T2DM + ASCVD, HF or CKD = GLP-1 RA or SGLT2i, even if the A1c is already at goal.") },
        { title: "Smoking: every visit", fig: { type: "flow", steps: ["Ask", "Advise", "Assess", "Assist", "Arrange follow-up"], hi: 1 },
          html: "<p>Address smoking at <strong>every visit</strong>: how much (1 pack = 20 cigarettes), have they tried to quit, chewing tobacco or vaping?</p>" +
            "<p>Use the <strong>5 A's</strong> (or the 3-step Ask, Advise, Connect). A cessation <strong>adjunct doubles the success rate</strong>.</p>" },
        { title: "Aspirin: not for most people", fig: { type: "grid", cols: ["Who (no ASCVD)", "Aspirin 81 mg?"], rows: [["Most adults", "Not routinely"], ["40 to 70, high CV risk, low bleeding risk", "May consider"], ["Over 70, or higher bleeding risk", "Don't start routinely"]], hiCol: 1 },
          html: "<p>For <strong>primary</strong> prevention, routine low-dose aspirin is <strong>not recommended</strong>. It's an individual call: cardiovascular benefit vs <strong>bleeding risk</strong>.</p>" }
      ],
      remember: ["Gateway diseases: HTN, dyslipidemia, diabetes; control them to goal.", "BP goal &lt; 130/80; consider SBP &lt; 120 in higher-risk patients.", "A1c &lt; 7% for most; T2DM + ASCVD/HF/CKD → GLP-1 RA and/or SGLT2i regardless of A1c or metformin.", "Smoking at every visit; 5 A's; an adjunct doubles success.", "Aspirin for primary prevention: not routine; maybe 40 to 70 with high risk and low bleeding risk; not &gt; 70."],
      check: [
        Q("What is the general BP goal for most adults?", "Below 130/80", ["Below 140/90", "Below 120/70 for everyone", "Below 150/90"], "The deck's general treatment goal is under 130/80, with SBP under 120 for some higher-risk patients."),
        Q("A patient with type 2 diabetes and prior MI has an A1c of 6.8% on metformin. What should you add?", "A GLP-1 RA and/or SGLT2 inhibitor", ["Nothing, his A1c is at goal", "Insulin", "A sulfonylurea"], "With ASCVD, these drugs are indicated for heart benefit regardless of A1c or metformin."),
        Q("A healthy 74-year-old asks about daily aspirin to prevent a heart attack. Advice?", "Don't routinely start it", ["Start 81 mg daily", "Start 325 mg daily", "Start it only with a statin"], "Aspirin isn't routinely started after 70 because bleeding risk outweighs the benefit.")
      ],
      bank: [
        Q("How much does using a cessation adjunct change quit success?", "It doubles it", ["No change", "It halves it", "It triples it"], "Medications or nicotine replacement double the chance of quitting.")
      ] }
  ] };

  /* =============================== TIER 2 · STANDARD DETAILS =============================== */
  T.units["t2|cad-part-2"] = { chunks: [
    { id: "prevent-vs-pce", title: "PREVENT vs the old PCE", goal: "PREVENT adds kidney function and BMI, plus optional UACR, A1c and a social deprivation index.",
      pages: [
        { title: "What PREVENT added", fig: { type: "grid", cols: ["Input", "Old PCE", "PREVENT"], rows: [["Age, sex, total cholesterol, HDL, SBP, BP meds, diabetes, smoking", "Yes", "Yes"], ["<strong>eGFR</strong> (kidney function)", "No", "<strong>Yes</strong>"], ["<strong>BMI</strong>", "No", "<strong>Yes</strong>"], ["UACR, A1c, social deprivation index", "No", "Optional"]], hiCol: 2 },
          html: "<p>Both calculators share the classic eight inputs. PREVENT adds <strong>eGFR</strong> and <strong>BMI</strong> to its base equations, and can optionally use <strong>UACR, A1c</strong> and a <strong>social deprivation index</strong>.</p>" +
            mn("PREVENT added the Kidneys (eGFR, UACR), the Metabolism (BMI, A1c) and the ZIP code (SDI).") },
        { title: "Why the kidneys matter", fig: { type: "tiles", items: [["🫘", "eGFR", "kidney FUNCTION. Low eGFR = higher CV risk; CKD and CVD travel together."], ["🧪", "UACR", "kidney DAMAGE: albumin leaking into urine, even before eGFR falls."]] },
          html: "<p>A patient with diabetes can have a <strong>normal eGFR</strong> but <strong>significant albuminuria</strong>. UACR catches that extra risk.</p>" },
        { title: "Metabolism and the ZIP code", fig: { type: "tiles", items: [["⚖️", "BMI", "body size and obesity-related risk"], ["🩸", "A1c", "average glucose over 2 to 3 months, more than a yes/no for diabetes"], ["📍", "Social deprivation index", "from the ZIP code: access to care, money, education, housing"]] },
          html: "<p>BMI and A1c capture metabolic health beyond \"diabetes yes or no\". The social deprivation index captures area-level conditions that shape health.</p>" }
      ],
      remember: ["PREVENT base adds eGFR and BMI to the PCE inputs.", "Optional: UACR, A1c, social deprivation index (ZIP code).", "eGFR = function; UACR = damage, can be abnormal with a normal eGFR.", "A1c reflects ~2 to 3 months of glucose."],
      check: [
        Q("Which input is in PREVENT's base equations but not in the PCE?", "eGFR", ["Total cholesterol", "Smoking", "Systolic BP"], "PREVENT added kidney function (eGFR) and BMI to the classic inputs."),
        Q("A diabetic patient has a normal eGFR. Which optional PREVENT input could still reveal kidney damage?", "Urine albumin-to-creatinine ratio (UACR)", ["BMI", "Social deprivation index", "HDL"], "Albuminuria can show kidney damage before eGFR falls."),
        Q("What does the social deprivation index use?", "The patient's ZIP code", ["Their income tax return", "Their education level by questionnaire", "Their insurance plan"], "It's an area-level measure based on ZIP code.")
      ],
      bank: [
        Q("Over roughly what period does the A1c reflect average glucose?", "2 to 3 months", ["1 week", "1 year", "24 hours"], "A1c tracks glucose over about the last 2 to 3 months.")
      ] },

    { id: "lipid-panel", title: "Reading the lipid panel", goal: "Know the cutoffs for LDL, total cholesterol, HDL and triglycerides.",
      pages: [
        { title: "Four numbers, four scales", fig: { type: "lipidpanel" },
          html: "<p>Look at each piece, not just total cholesterol. These are <strong>conventional classes</strong>, not personal treatment goals.</p>" +
            "<p>HDL is the odd one out: <strong>higher is better</strong>. ≥ 60 is protective; low is under 40 in men, under 50 in women.</p>" },
        { title: "Slide the LDL", fig: { type: "slider", label: "LDL-C", unit: " mg/dL", min: 60, max: 240, step: 5, value: 120, bands: [[100, "Desirable", "Under 100.", "cabg", "&lt; 100"], [130, "100 to 129", "Between desirable and borderline (not named on the slide).", "pci", "100-129"], [160, "Borderline", "130 to 159.", "ok", "130-159"], [190, "High", "160 to 189.", "bad", "160-189"], [null, "Very high: severe hypercholesterolemia", "190 or more: treat regardless of calculated risk, and think familial hypercholesterolemia.", "bad", "≥ 190"]] },
          html: hy("LDL ≥ 190 is its own category: severe hypercholesterolemia. It gets treated no matter what PREVENT says.") },
        { title: "Triglycerides and total cholesterol", fig: { type: "lipidpanel", hi: "tg" },
          html: "<p>Triglycerides: <strong>&lt; 150</strong> desirable, <strong>150-199</strong> borderline, <strong>200-499</strong> high, <strong>≥ 500</strong> very high.</p>" +
            "<p>Total cholesterol: <strong>&lt; 200</strong> desirable, <strong>200-239</strong> borderline, <strong>≥ 240</strong> high.</p>" +
            mn("Triglycerides double their way up: 150, 200, 500.") }
      ],
      remember: ["LDL: &lt; 100 desirable · 130-159 borderline · 160-189 high · ≥ 190 very high (severe).", "Total: &lt; 200 · 200-239 · ≥ 240.", "HDL: ≥ 60 protective; low &lt; 40 men, &lt; 50 women.", "TG: &lt; 150 · 150-199 · 200-499 · ≥ 500."],
      check: [
        Q("An LDL-C of 172 mg/dL is classified as what?", "High", ["Borderline", "Very high", "Desirable"], "160 to 189 is high; 190 and up is very high."),
        Q("Which HDL value is considered protective?", "62 mg/dL", ["38 mg/dL", "45 mg/dL in a woman", "52 mg/dL"], "HDL of 60 or more is protective."),
        Q("Triglycerides of 398 mg/dL fall in which class?", "High", ["Borderline", "Very high", "Desirable"], "200 to 499 is high; 500 and up is very high.")
      ],
      bank: [
        Q("What is low HDL for a woman?", "Under 50 mg/dL", ["Under 40 mg/dL", "Under 60 mg/dL", "Under 30 mg/dL"], "The low cutoff is 40 for men and 50 for women.")
      ] },

    { id: "statin-doses", title: "Statin intensities", goal: "High: atorvastatin 40-80, rosuvastatin 20-40. Moderate: the lower doses and the other statins at 40.",
      pages: [
        { title: "Two intensities", fig: { type: "grid", cols: ["Intensity", "Statins and daily doses"], rows: [["<strong>High</strong>", "Atorvastatin (Lipitor) <strong>40 to 80</strong> mg · Rosuvastatin (Crestor) <strong>20 to 40</strong> mg"], ["Moderate", "Atorvastatin 10 to 20 · Rosuvastatin 5 to 10 · Lovastatin 40 · Pravastatin 40 · Simvastatin 40"]], hiCol: 1 },
          html: "<p>Statins are the main way to prevent CAD from dyslipidemia. Only <strong>two</strong> statins reach high intensity: <strong>atorvastatin</strong> and <strong>rosuvastatin</strong>.</p>" +
            mn("High intensity = A 40/80, R 20/40. Everything else at 40 (lova, prava, simva) is only moderate.") +
            std("High intensity lowers LDL by about 50% or more; moderate by about 30 to 49%.") },
        { title: "Treat to goals", fig: { type: "flow", steps: ["Pick the intensity", "Check the % LDL drop", "Check LDL / non-HDL goals"], hi: 2 },
          html: "<p>The take-home: follow <strong>both</strong> the recommended <strong>percentage LDL reduction</strong> and the applicable <strong>LDL-C / non-HDL-C goals</strong>.</p>" }
      ],
      remember: ["High intensity: atorvastatin 40 to 80, rosuvastatin 20 to 40.", "Moderate: atorvastatin 10 to 20, rosuvastatin 5 to 10, lovastatin 40, pravastatin 40, simvastatin 40.", "Treat to both the % LDL reduction and the LDL / non-HDL goals."],
      check: [
        Q("Which statin dose is high intensity?", "Atorvastatin 80 mg", ["Simvastatin 40 mg", "Pravastatin 40 mg", "Atorvastatin 20 mg"], "Only atorvastatin 40 to 80 and rosuvastatin 20 to 40 are high intensity."),
        Q("Rosuvastatin 10 mg is what intensity?", "Moderate", ["High", "Low", "Maximum"], "Rosuvastatin 5 to 10 is moderate; 20 to 40 is high."),
        Q("Which statin can NOT reach high intensity at the deck's doses?", "Pravastatin", ["Atorvastatin", "Rosuvastatin", "Both A and R"], "Pravastatin, lovastatin and simvastatin at 40 mg are only moderate intensity.")
      ],
      bank: [
        Q("What two things should you follow when treating lipids, per the take-home slide?", "The % LDL reduction and the LDL/non-HDL goals", ["Only the total cholesterol", "Only the HDL", "Only symptoms"], "The deck says treat to both the percentage reduction and the applicable goals.")
      ] },

    { id: "personalize", title: "Calculate, personalize, reclassify", goal: "After the number: risk enhancers can push you toward treatment, and hs-CRP has a special rule.",
      pages: [
        { title: "Three steps", fig: { type: "flow", steps: ["1 · Calculate<br><small>10-year PREVENT; 30-year at 30 to 59</small>", "2 · Personalize<br><small>risk enhancers</small>", "3 · Reclassify<br><small>CAC if still unsure</small>"], hi: 1 },
          html: "<p>The PREVENT number is a starting point. Then you <strong>personalize</strong> it with things the calculator doesn't see, and if you're still unsure, <strong>reclassify</strong> with a calcium score.</p>" },
        { title: "Risk enhancers", fig: { type: "grid", cols: ["Group", "Enhancers"], rows: [["Family and ancestry", "Premature ASCVD in a parent or sibling; South Asian or Filipino ancestry"], ["Lipids", "Lp(a) ≥ 125 nmol/L (50 mg/dL); persistent LDL 160-189; ApoB ≥ 120 or non-HDL 190-219; persistent high TG"], ["Inflammatory / metabolic", "RA, SLE, advanced psoriasis; hs-CRP ≥ 2 mg/L more than once"], ["Reproductive", "Menopause before 40; preeclampsia; gestational diabetes or HTN; preterm delivery"]] },
          html: "<p>These <strong>raise risk beyond the calculator</strong>. A borderline or intermediate patient with one of these leans toward treatment.</p>" +
            mn("Four families: Family, Fats, Fire (inflammation), Fertility (pregnancy history).") },
        { title: "The hs-CRP rule", fig: { type: "flow", steps: ["No ASCVD", "Borderline PREVENT<br><small>3 to &lt; 5%</small>", "hs-CRP ≥ 2 mg/L<br><small>twice, no other cause</small>", "High-intensity statin<br><small>can be useful</small>"], hi: 3 },
          html: "<p>CRP is a marker of <strong>systemic inflammation</strong>, and high hs-CRP goes with higher ASCVD risk. In a <strong>borderline</strong> patient, hs-CRP ≥ 2 on <strong>two successive</strong> checks with no other cause makes a <strong>high-intensity statin</strong> useful.</p>" }
      ],
      remember: ["Calculate → personalize (risk enhancers) → reclassify (CAC).", "Enhancers: premature family history, South Asian/Filipino ancestry, Lp(a) ≥ 125 nmol/L, LDL 160-189, ApoB ≥ 120, high TG, RA/SLE/psoriasis, hs-CRP ≥ 2, early menopause, preeclampsia, gestational DM/HTN, preterm delivery.", "Borderline + hs-CRP ≥ 2 twice (no other cause) → high-intensity statin can be useful."],
      check: [
        Q("Which is an ASCVD risk-enhancing factor?", "Preeclampsia in a past pregnancy", ["Menopause at 52", "LDL of 95", "HDL of 65"], "Pregnancy complications like preeclampsia are listed reproductive risk enhancers."),
        Q("A borderline-risk patient has hs-CRP 2.6 and 2.9 on two checks, no infection or other cause. What can be useful?", "A high-intensity statin", ["Aspirin 325 mg", "A stress test", "Nothing; recheck in 5 years"], "That's the deck's hs-CRP rule for borderline PREVENT risk."),
        Q("Which ancestry is listed as a higher-risk ancestry?", "South Asian", ["Northern European", "East African", "Pacific Northwest Native"], "South Asian and Filipino ancestry are listed risk enhancers.")
      ],
      bank: [
        Q("What is the third step after calculating and personalizing risk?", "Reclassify with a CAC score if still uncertain", ["Start aspirin", "Order a cath", "Repeat PREVENT in 1 week"], "CAC scoring helps when the treatment decision remains uncertain.")
      ] },

    { id: "cac", title: "Calcium score to break a tie", goal: "CAC 0 can support waiting; 1-99 means plaque is there; ≥ 100 or ≥ 75th percentile supports treatment.",
      pages: [
        { title: "Who gets one", fig: { type: "meter", max: 20, unit: "% 10-yr risk", label: "Outlined = where CAC helps: borderline or intermediate PREVENT risk, decision still open", bands: [[3, "low", "good"], [5, "borderline", "ok", 1], [10, "intermediate", "ok", 1], [20, "high", "bad"]] },
          html: "<p>Consider a CAC score in selected adults at <strong>borderline or intermediate</strong> risk when the lipid-lowering decision is <strong>still uncertain</strong>. It shows calcified coronary plaque directly.</p>" },
        { title: "Slide the score", fig: { type: "slider", label: "CAC score", min: 0, max: 400, step: 1, value: 0, bands: [[1, "CAC 0", "May support deferring therapy, unless diabetes, smoking or a strong family history of premature ASCVD.", "cabg", "0"], [100, "CAC 1 to 99", "Atherosclerosis is there: decide with overall risk and the CAC percentile.", "ok", "1 to 99"], [300, "CAC 100 or more", "Supports lipid-lowering therapy (so does ≥ 75th percentile).", "bad", "100+"], [null, "CAC 300 or more", "Severe subclinical disease: PREVENT is no longer the decision tool.", "bad", "300+"]] },
          html: hy("CAC 0 can support waiting, EXCEPT in diabetes, smoking or a strong premature family history.") }
      ],
      remember: ["Order CAC for borderline/intermediate risk when the decision is uncertain.", "0: may defer, unless diabetes, smoking or strong family history.", "1 to 99: plaque present; use overall risk + percentile.", "≥ 100 or ≥ 75th percentile: supports lipid-lowering. ≥ 300: PREVENT no longer applies."],
      check: [
        Q("An intermediate-risk nonsmoker without diabetes has CAC 0. What does that support?", "Possibly deferring lipid-lowering therapy", ["Starting a high-intensity statin right away", "Cardiac catheterization", "Daily aspirin"], "CAC 0 may support deferring therapy when there are no important exceptions."),
        Q("A smoker with intermediate risk has CAC 0. Can you defer therapy based on that?", "No, smoking is an exception to the CAC 0 rule", ["Yes, CAC 0 always means no therapy", "Yes, if LDL is under 190", "Only if HDL is low"], "Diabetes, smoking and strong family history are the exceptions where CAC 0 shouldn't reassure."),
        Q("A CAC of 140 supports what?", "Lipid-lowering therapy", ["Deferring therapy", "A repeat CAC tomorrow", "Stopping the statin"], "CAC ≥ 100 (or ≥ 75th percentile) supports treatment.")
      ],
      bank: [
        Q("CAC 1 to 99 means what?", "Atherosclerosis is present; decide with overall risk and percentile", ["No atherosclerosis", "Automatic high-intensity statin", "The test is invalid"], "Any calcium means plaque, but the treatment call uses the whole picture.")
      ] },

    { id: "apob-lpa", title: "ApoB vs Lp(a)", goal: "ApoB counts atherogenic particles; Lp(a) is an inherited risky particle to measure once.",
      pages: [
        { title: "Counting particles vs one bad particle", fig: { type: "particles" },
          html: "<p>Every atherogenic particle (<strong>LDL, VLDL, IDL and Lp(a)</strong>) carries exactly <strong>one ApoB</strong>. So <strong>ApoB counts the number of particles</strong>.</p>" +
            "<p><strong>Lp(a)</strong> is one specific kind of particle: LDL-like, with an extra protein, <strong>apolipoprotein(a)</strong>, attached to its ApoB-100. It's <strong>inherited</strong>.</p>" +
            mn("ApoB = how MANY. Lp(a) = which ONE you were born with.") },
        { title: "Lp(a): measure it once", fig: { type: "meter", max: 300, value: 180, pin: "example: 180", unit: "nmol/L", label: "Lp(a) cutoffs: 125 nmol/L (50 mg/dL) and 250 nmol/L (100 mg/dL)", bands: [[125, "normal", "good"], [250, "elevated ~1.4×", "bad"], [300, "very high ~2×", "worst"]] },
          html: "<p>Levels are mostly <strong>genetic</strong>, so measure Lp(a) <strong>at least once in all adults</strong>.</p>" +
            "<p><strong>≥ 125 nmol/L (50 mg/dL)</strong>: about <strong>1.4×</strong> ASCVD risk. <strong>≥ 250 nmol/L (100 mg/dL)</strong>: about <strong>2×</strong>. High Lp(a) means push harder on every modifiable factor and on LDL lowering.</p>" },
        { title: "When ApoB helps", fig: { type: "tiles", items: [["🧈", "High triglycerides", ""], ["🍬", "Diabetes", ""], ["🫀🫘", "CKM syndrome", "cardio-kidney-metabolic"]] },
          html: "<p>In these patients the LDL-C can look fine while the <strong>particle count</strong> is high. ApoB reveals risk that LDL-C underestimates. <strong>ApoB ≥ 120 mg/dL</strong> is a risk enhancer (2026 guideline).</p>" }
      ],
      remember: ["ApoB: one per atherogenic particle (LDL, VLDL, IDL, Lp(a)) → particle number; ≥ 120 mg/dL is a risk enhancer.", "ApoB helps most with high TG, diabetes, CKM syndrome.", "Lp(a): LDL-like + apo(a); genetic; measure once in all adults.", "Lp(a) ≥ 125 nmol/L (50 mg/dL) ≈ 1.4× risk; ≥ 250 (100 mg/dL) ≈ 2×."],
      check: [
        Q("What does ApoB measure?", "The number of atherogenic particles", ["The size of HDL particles", "Total cholesterol mass", "Inflammation"], "Each atherogenic particle carries one ApoB, so ApoB counts them."),
        Q("How often should Lp(a) be measured in adults?", "At least once", ["Every year", "Only after an MI", "Never; it's not useful"], "Lp(a) is genetically set, so one measurement is enough for most adults."),
        Q("An Lp(a) of 260 nmol/L means roughly what risk change?", "About 2-fold ASCVD risk", ["No change", "About 1.1-fold", "About 10-fold"], "Very high Lp(a), ≥ 250 nmol/L, carries about twice the estimated risk.")
      ],
      bank: [
        Q("In which patient might LDL-C underestimate risk, making ApoB useful?", "A patient with diabetes and high triglycerides", ["A healthy 25-year-old", "A patient with LDL 220", "A patient with low triglycerides and no diabetes"], "High TG, diabetes and CKM syndrome raise particle number beyond what LDL-C shows.")
      ] },

    { id: "diabetes", title: "Diabetes in detail", goal: "Diagnostic cutoffs, individual A1c goals, and the diabetes features that raise CV risk.",
      pages: [
        { title: "Diagnosing diabetes", fig: { type: "tiles", items: [["🩸", "A1c ≥ 6.5%", "prediabetes 5.7 to 6.4%"], ["🌅", "Fasting glucose ≥ 126", "mg/dL"], ["🥤", "2-hour OGTT ≥ 200", "mg/dL"], ["🎲", "Random ≥ 200", "with classic symptoms"]] },
          html: "<p>Four ways to make the diagnosis. The numbers to know: <strong>6.5</strong>, <strong>126</strong>, <strong>200</strong>, <strong>200</strong>.</p>" },
        { title: "Goals depend on the patient", fig: { type: "bars", items: [["Selected patients", 40, "A1c &lt; 6.5% (no hypoglycemia)", "good"], ["Most adults", 60, "A1c &lt; 7%", "ok"], ["Frail, comorbid, short life expectancy", 85, "A1c &lt; 8%", "blue"]] },
          html: "<p>Most nonpregnant adults: <strong>&lt; 7%</strong>. Tighter (<strong>&lt; 6.5%</strong>) if it's safe without hypoglycemia. Looser (<strong>&lt; 8%</strong>) with frailty, lots of comorbidity, limited life expectancy or high treatment risk.</p>" },
        { title: "Diabetes features that raise CV risk", fig: { type: "tiles", items: [["⏳", "Long duration", "≥ 10 yr type 2, ≥ 20 yr type 1"], ["🧪", "UACR ≥ 30 mg/g", ""], ["🫘", "eGFR &lt; 60", ""], ["👁️", "Retinopathy", ""], ["🦶", "Neuropathy", "any type"], ["🦵", "ABI &lt; 0.9", ""]] },
          html: "<p>Why 10 years for type 2 but 20 for type 1? The deck asks you to think about it.</p>" +
            std("Type 2 is usually found years after the blood sugar started rising, so the clock started earlier than the diagnosis. Type 1 is diagnosed right at onset, often in childhood.") }
      ],
      remember: ["Diagnosis: A1c ≥ 6.5% (pre 5.7 to 6.4) · FPG ≥ 126 · OGTT 2-h ≥ 200 · random ≥ 200 + symptoms.", "A1c goals: &lt; 7% most · &lt; 6.5% selected · &lt; 8% frail/comorbid.", "Higher-risk diabetes: duration ≥ 10 yr (T2) / ≥ 20 yr (T1), UACR ≥ 30, eGFR &lt; 60, retinopathy, neuropathy, ABI &lt; 0.9."],
      check: [
        Q("Which fasting plasma glucose diagnoses diabetes?", "126 mg/dL or higher", ["100 mg/dL or higher", "110 mg/dL or higher", "200 mg/dL or higher"], "Fasting glucose ≥ 126 is the diagnostic cutoff; 200 is for OGTT or random with symptoms."),
        Q("A frail 84-year-old with diabetes and many comorbidities. Reasonable A1c goal?", "Below 8%", ["Below 6%", "Below 6.5%", "No goal at all"], "A less stringent goal fits frailty, comorbidity and limited life expectancy."),
        Q("Which finding makes a diabetic patient's CV risk higher?", "UACR of 45 mg/g", ["A1c of 6.8%", "BMI of 24", "Diabetes for 3 years"], "Albuminuria (UACR ≥ 30) is one of the listed high-risk diabetes features.")
      ],
      bank: [
        Q("What A1c range is prediabetes?", "5.7 to 6.4%", ["5.0 to 5.6%", "6.5 to 7.0%", "6.0 to 7.0%"], "Prediabetes is 5.7 to 6.4%; 6.5% and up is diabetes.")
      ] }
  ] };

  /* =============================== TIER 3 · THE WEEDS =============================== */
  T.units["t3|cad-part-2"] = { chunks: [
    { id: "day", title: "How Americans spend their day", goal: "Over 7 hours sitting, about 12 minutes of real activity, and 1 in 3 short on sleep.",
      pages: [
        { title: "A typical day", fig: { type: "bars", items: [["Sedentary", 100, "&gt; 7 hours a day", "bad"], ["Moderate / vigorous", 3, "0.2 h ≈ 12 minutes a day", "good"]] },
          html: "<p>The average US adult spends <strong>more than 7 hours a day sedentary</strong> and only about <strong>0.2 hours (≈ 12 minutes)</strong> in moderate or vigorous activity.</p>" +
            "<p>And <strong>1 in 3 adults</strong> sleeps <strong>less than 7 hours</strong>, below the 7 to 9 hour goal.</p>" +
            pic("Twelve minutes a day × 7 = 84 minutes a week: barely half of the 150-minute goal.") }
      ],
      remember: ["&gt; 7 hours sedentary per day.", "≈ 12 minutes (0.2 h) moderate/vigorous activity per day.", "1 in 3 adults sleeps &lt; 7 hours."],
      check: [
        Q("How much moderate or vigorous activity does the average US adult get per day?", "About 12 minutes", ["About 1 hour", "About 30 minutes", "About 2 hours"], "The deck's chart shows 0.2 hours, roughly 12 minutes a day."),
        Q("What share of US adults sleep less than 7 hours?", "About 1 in 3", ["About 1 in 10", "About half", "Almost all"], "One in three adults gets under 7 hours of sleep.")
      ],
      bank: [
        Q("How many hours a day does the average US adult spend sedentary?", "More than 7", ["About 2", "About 4", "More than 14"], "The chart shows over 7 hours of sedentary time daily.")
      ] },

    { id: "cessation-meds", title: "Smoking cessation medicines", goal: "Nicotine replacement doses, bupropion and varenicline: how to start them and what to watch.",
      pages: [
        { title: "Nicotine replacement", fig: { type: "grid", cols: ["Form", "Dose", "Watch for"], rows: [["Patch", "<strong>21 mg</strong> if &gt; ½ ppd · <strong>14 mg</strong> if &lt; ½ ppd", "Skin irritation; remove for sleep"], ["Gum / lozenge", "<strong>4 mg</strong> if first tobacco ≤ 30 min after waking · <strong>2 mg</strong> if &gt; 30 min; 1 piece every 1-2 h; max 20 lozenges or 24 gum/day", "Hiccups, GERD; nothing to eat 15 min before or after"], ["Nasal or oral inhaler", "1-2 sprays per hour, or puff a cartridge 20 min/hour", "Local irritation; avoid with nasal/airway disease"]] },
          html: mn("Half a pack is the patch line: more → 21, less → 14. Thirty minutes is the gum line: sooner → 4, later → 2.") },
        { title: "The two pills", fig: { type: "quad", x: ["Bupropion (Zyban, Wellbutrin)", "Varenicline (Chantix)"], y: ["Start", "Watch for"], cells: [["150 mg daily × 3 days, then 150 mg twice daily", "", "ok"], ["0.5 mg daily × 3 days → 0.5 mg BID × 4 days → 1 mg BID", "", "pci"], ["Seizures (history or risk), eating disorders, MAOIs", "", "bad"], ["Nausea (common), vivid dreams; dose-adjust in CKD", "", "bad"]] },
          html: "<p><strong>Bupropion</strong> lowers the seizure threshold, so avoid it with a seizure history or risk, eating disorders, or MAOIs.</p>" +
            "<p><strong>Varenicline</strong> is titrated over a week; nausea is common, dreams get vivid, and the dose needs adjusting in CKD.</p>" }
      ],
      remember: ["Patch: 21 mg if &gt; ½ ppd, 14 mg if &lt; ½ ppd; remove for sleep.", "Gum/lozenge: 4 mg if first cigarette ≤ 30 min after waking, else 2 mg; max 20 lozenges / 24 gum; no food 15 min around.", "Bupropion: 150 daily × 3 d then BID; avoid seizures, eating disorders, MAOIs.", "Varenicline: 0.5 daily × 3 d → 0.5 BID × 4 d → 1 mg BID; nausea, vivid dreams, CKD dosing."],
      check: [
        Q("A patient smokes 1 pack a day. Which nicotine patch strength?", "21 mg", ["14 mg", "7 mg", "42 mg"], "More than half a pack a day starts at 21 mg."),
        Q("A patient lights up 10 minutes after waking. Which gum strength?", "4 mg", ["2 mg", "1 mg", "6 mg"], "First tobacco within 30 minutes of waking means the 4 mg strength."),
        Q("Which smoking cessation drug should be avoided in a patient with a seizure disorder?", "Bupropion", ["Varenicline", "Nicotine patch", "Nicotine lozenge"], "Bupropion lowers the seizure threshold.")
      ],
      bank: [
        Q("Which cessation drug commonly causes nausea and vivid dreams and needs CKD dose adjustment?", "Varenicline", ["Bupropion", "Nicotine gum", "Nicotine inhaler"], "Those are varenicline's classic side effects and its renal caution.")
      ] },

    { id: "alcohol", title: "Alcohol", goal: "What one drink is, what counts as binge or heavy, and the advice.",
      pages: [
        { title: "One drink is smaller than people think", fig: { type: "drinks" },
          html: "<p>One standard drink = <strong>12 oz beer</strong> (4-5%), <strong>5 oz wine</strong> or <strong>1.5 oz liquor</strong>. Most patients pour more than this without noticing.</p>" },
        { title: "Binge vs heavy", fig: { type: "grid", cols: ["", "Women", "Men"], rows: [["Binge (one occasion)", "≥ 4", "≥ 5"], ["Heavy (per week)", "≥ 8", "≥ 15"], ["If they keep drinking (BP)", "≤ 1 / day", "≤ 2 / day"]] },
          html: "<p>CV risk rises with more alcohol; <strong>heavy and binge</strong> drinking are especially harmful. Screen for unhealthy use and encourage cutting down or stopping.</p>" +
            "<p>For BP, the 2025 guideline says <strong>abstinence is the optimal goal</strong>; if they keep drinking, ≤ 1 a day for women and ≤ 2 for men.</p>" +
            mn("Binge 4/5 (women/men), heavy 8/15 per week.") }
      ],
      remember: ["1 drink = 12 oz beer, 5 oz wine, 1.5 oz liquor.", "Binge: ≥ 4 women / ≥ 5 men in one occasion. Heavy: ≥ 8 / ≥ 15 per week.", "BP: abstinence is optimal; otherwise ≤ 1/day women, ≤ 2/day men."],
      check: [
        Q("How much wine is one standard drink?", "5 oz", ["8 oz", "12 oz", "1.5 oz"], "One drink is 5 oz wine, 12 oz beer or 1.5 oz liquor."),
        Q("A man has 16 drinks a week. How is that classified?", "Heavy drinking", ["Binge drinking", "Moderate drinking", "Normal"], "Heavy drinking for men is 15 or more drinks per week."),
        Q("For BP management, what does the 2025 guideline call the optimal alcohol goal?", "Abstinence", ["1 drink a day for everyone", "Up to 3 drinks a day", "Red wine only"], "Abstinence is optimal; if drinking continues, limit to 1 (women) or 2 (men) a day.")
      ],
      bank: [
        Q("A woman has 4 drinks at a party. How is that classified?", "Binge drinking", ["Heavy drinking", "Moderate drinking", "One standard serving"], "Four or more on one occasion is binge drinking for women.")
      ] },

    { id: "osa", title: "Sleep apnea and the heart", goal: "Each apnea causes hypoxemia and a sympathetic surge; untreated it leads to pulmonary HTN and cor pulmonale.",
      pages: [
        { title: "One apnea, over and over", fig: { type: "cycle", nodes: ["Airway collapses", "O₂ drops", "Brief arousal", "Sympathetic surge: ↑ HR, ↑ BP", "Airway reopens, sleep fragmented"], center: "all night" },
          html: "<p>The upper airway keeps closing during sleep. Oxygen drops, the brain briefly wakes to reopen it, and each time there's a <strong>sympathetic surge</strong> raising heart rate and BP.</p>" +
            "<p>Repeated all night, this drives <strong>inflammation, endothelial dysfunction</strong> and cardiovascular stress.</p>" },
        { title: "Where untreated OSA ends up", fig: { type: "flow", steps: ["Repeated hypoxemia", "Faster flow through the lungs", "RV hypertrophy + pulmonary HTN", "Right heart failure<br><small>cor pulmonale</small>"], hi: 3 },
          html: "<p>The body tries to oxygenate faster by pushing blood through the lungs harder. The right ventricle thickens, pulmonary pressure climbs, and eventually the right heart fails: <strong>cor pulmonale</strong>.</p>" +
            hy("Treatment: CPAP or BiPAP every night. Every night.") }
      ],
      remember: ["OSA: airway obstruction → intermittent hypoxemia → arousal → sympathetic surge (↑ HR, ↑ BP).", "Leads to inflammation, endothelial dysfunction, CV stress.", "Untreated: RV hypertrophy, pulmonary HTN, then cor pulmonale.", "CPAP or BiPAP every night."],
      check: [
        Q("What happens to heart rate and BP with each apnea episode?", "Both rise from a sympathetic surge", ["Both fall from vagal tone", "HR falls, BP rises", "No change"], "Each arousal triggers sympathetic activation."),
        Q("Untreated sleep apnea eventually causes which kind of heart failure?", "Right-sided (cor pulmonale)", ["Left-sided HFrEF only", "High-output failure", "Restrictive cardiomyopathy"], "Chronic hypoxemia leads to pulmonary HTN and RV failure."),
        Q("What is the essential treatment for OSA in the deck?", "CPAP or BiPAP every night", ["A beta blocker", "Supplemental O₂ during the day", "Sleeping pills"], "Nightly positive airway pressure keeps the airway open.")
      ],
      bank: [
        Q("Which vascular change does repeated apnea promote?", "Endothelial dysfunction", ["Lower blood pressure", "Higher HDL", "Better insulin sensitivity"], "Repeated hypoxemia and sympathetic surges drive inflammation and endothelial dysfunction.")
      ] },

    { id: "thomas", title: "Thomas: 14 years of prevention", goal: "The deck's case, visit by visit: what changed and what you'd do.",
      pages: [
        { title: "Visit 1: age 52", fig: { type: "tiles", items: [["🚬", "1 pack a day", "since age 17"], ["⚖️", "BMI 28", "waist 110 cm (43 in)"], ["🥩", "Active job", "meat department manager"], ["🩺", "BP 117/68", "normal exam"]] },
          html: "<p>Thomas has diet-controlled dyslipidemia and smokes. He worries quitting will make him gain weight.</p>" +
            "<p>You tell him the <strong>#1 thing he can do is quit smoking</strong>. He <strong>refuses an adjunct</strong>, so you ask him to think hard about each cigarette and cut down, add about <strong>20 minutes of brisk walking</strong> most days, and order a CBC, chemistry, fasting lipids and A1c.</p>" },
        { title: "3 months later", fig: { type: "lipidpanel" },
          html: "<p>He's down to <strong>½ pack a day</strong> and kept his weight. A1c <strong>4.8%</strong>. Lipids: TC 210, <strong>LDL 108</strong>, <strong>HDL 32</strong> (low), <strong>TG 398</strong> (high). <strong>GFR 55</strong>. BP 120/60.</p>" +
            hy("A GFR of 55 is CKD stage 3 range, and he's between 40 and 75: that's one of the groups that gets lipid-lowering regardless of PREVENT (CKD needs to persist 3 months to be called CKD, standard teaching).") },
        { title: "Age 55: life happens", fig: { type: "flow", steps: ["Quit for 2 years", "Wife diagnosed with breast cancer", "Smoking again, depression", "A1c 7.7%: diabetes"], hi: 3 },
          html: "<p>Now A1c 7.7% (diabetes), TC 160, LDL 88, HDL 38, TG 258, BP 120/70.</p>" +
            "<p>What do you do? Diabetes at 40 to 75 is another reason for lipid-lowering. With diabetes <strong>and</strong> CKD, a <strong>GLP-1 RA or SGLT2 inhibitor</strong> with kidney or heart benefit fits. And keep working on the smoking, with an adjunct if he'll take one.</p>" },
        { title: "Age 56 to 66", fig: { type: "flow", steps: ["HTN diagnosed<br><small>ARB to &lt; 130/80</small>", "Still smoking", "Age 66: NSTEMI", "3-vessel CABG"], hi: 2 },
          html: "<p>Within a year of the diabetes, he's diagnosed with <strong>hypertension</strong> and started on an <strong>ARB</strong> to get under 130/80. Despite aggressive risk factor management, at <strong>66</strong> he has an <strong>NSTEMI</strong> and a <strong>3-vessel CABG</strong>.</p>" +
            "<p>Now he's in <strong>secondary prevention</strong>: high-intensity statin regardless of his LDL, and everything else you've been doing, harder.</p>" }
      ],
      remember: ["#1 intervention for a smoker: quitting. Offer an adjunct (it doubles success).", "GFR 55 at age 52 = CKD 3 range → lipid-lowering regardless of PREVENT.", "New diabetes + CKD → also GLP-1 RA or SGLT2i with proven benefit.", "HTN → treat to &lt; 130/80 (ARB here).", "After NSTEMI + CABG: secondary prevention, high-intensity statin."],
      check: [
        Q("At Thomas's first visit, what does the deck call the #1 thing he can do for his health?", "Quit smoking", ["Lose weight", "Start a statin", "Start aspirin"], "Smoking cessation was the top priority despite his weight-gain worry."),
        Q("Thomas, 52, has a GFR of 55 and LDL 108. Why consider lipid-lowering even without a PREVENT number?", "CKD stage 3 at age 40 to 75 is treated regardless of risk", ["His LDL is over 190", "He already has ASCVD", "His HDL is protective"], "CKD 3-4 at 40 to 75 is one of the groups treated without the calculator."),
        Q("After Thomas's NSTEMI and CABG, what statin plan does he need?", "High-intensity statin", ["Moderate-intensity statin", "No statin if LDL is under 100", "Statin only if PREVENT ≥ 10%"], "He now has clinical ASCVD, so secondary prevention means high intensity regardless of lipids.")
      ],
      bank: [
        Q("Thomas's triglycerides of 398 mg/dL are classified as what?", "High", ["Borderline", "Very high", "Desirable"], "200 to 499 is high; 500 and up is very high.")
      ] }
  ] };
})();
