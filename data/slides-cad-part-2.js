/* CAD Part II (Stager): Prevention & Risk Modification, slide by slide.
   Slide text: data/slide-text-cad-part-2.js (generated). Pictures: images/cad2-slides/.
   Anything not on the slides is marked "(standard teaching)". Question ids "cad-part-2|s<slide>|<i>", "cad-part-2|<lo>|r|<i>": only append. */
(function () {
  "use strict";
  var S = SlideStudy.S, Q = SlideStudy.Q;
  var los = [];

  /* ---------------------------------------------------------------- LO 1 */
  los.push({
    id: "lo1", label: "LO 1", title: "Primary vs secondary prevention",
    objective: "Differentiate primary and secondary cardiovascular prevention and explain the goals of each in patients at risk for or with established atherosclerotic cardiovascular disease (ASCVD).",
    slides: [
      S(1, "Title: CAD Part II, Prevention & Risk Modification", {
        why: "<p>CAD I was what plaque is. CAD II is how primary care keeps plaque from forming (or from getting worse): estimate risk, fix lifestyle, and treat the 'gateway diseases' (lipids, blood pressure, diabetes) plus smoking, alcohol and sleep apnea.</p>"
      }),
      S(2, "Primary vs secondary prevention", {
        why: "<p>The dividing line is one question: <b>does the patient already have ASCVD?</b> No → <b>primary</b> prevention (stop the disease from starting; how hard we treat depends on calculated risk). Yes (prior MI, stent, CABG, stroke/TIA, PAD) → <b>secondary</b> prevention (stop progression and the next event; everyone gets aggressive therapy, no calculator needed). Atherosclerosis builds silently over decades, so prevention works best started early (standard teaching).</p>",
        q: [
          Q("Preventing CAD from developing by reducing modifiable risk factors is:", "Primary prevention", ["Secondary prevention", "Tertiary prevention", "Revascularization"], "Primary prevention acts before the patient has CAD."),
          Q("A patient with a prior MI is being treated to prevent a second event. This is:", "Secondary prevention", ["Primary prevention", "Screening", "Risk estimation"], "Secondary prevention is for people who already have CAD, to stop progression and recurrent events."),
          Q("Which is a goal of secondary prevention?", "Reducing the risk of recurrent cardiovascular events", ["Preventing the first plaque from forming", "Calculating 30-year risk", "Screening for familial hypercholesterolemia in teens"], "Secondary prevention targets progression, further cardiac damage and recurrent events.")
        ]
      })
    ],
    review: [
      Q("A 58-year-old with a stent placed last year: primary or secondary prevention?", "Secondary prevention", ["Primary prevention", "Neither, he is treated", "Depends on his PREVENT score"], "A stent means established CAD, which makes it secondary prevention."),
      Q("A healthy 40-year-old smoker with no heart disease is counseled to quit. Which prevention is this?", "Primary prevention", ["Secondary prevention", "Tertiary prevention", "Cardiac rehab"], "He has no CAD yet, so lowering his risk factors is primary prevention."),
      Q("What two tools does primary prevention lean on, per the slide?", "Lifestyle modification and early identification of metabolic abnormalities", ["Stents and bypass", "Thrombolytics and heparin", "Cardiac rehab and nitrates"], "The slide defines primary prevention as lifestyle change plus early detection of metabolic problems.")
    ]
  });

  /* ---------------------------------------------------------------- LO 2 */
  los.push({
    id: "lo2", label: "LO 2", title: "Risk assessment and PREVENT-ASCVD",
    objective: "Apply appropriate cardiovascular risk assessment strategies in primary care, including identifying patients eligible for PREVENT-ASCVD risk estimation and interpreting 10-year and, when appropriate, 30-year risk.",
    slides: [
      S(3, "Cardiovascular risk assessment in primary care", {
        why: "<p>Risk assessment is not a one-time event. Every routine visit is a chance to check the big modifiable factors (BP, lipids, smoking, diabetes, kidney function, lifestyle), and the estimate is redone when something changes (new diabetes, new CKD, started smoking).</p>",
        q: [
          Q("When should cardiovascular risk factors be assessed?", "As part of routine preventive care", ["Only after a first MI", "Only in patients over 65", "Only when chest pain occurs"], "The slide makes risk assessment part of routine preventive care."),
          Q("Which is on the slide's list of things to evaluate during risk assessment?", "Kidney function", ["Bone density", "Vision", "Thyroid antibodies"], "The slide lists BP, lipids, smoking, diabetes, kidney function and lifestyle."),
          Q("When should risk be reassessed?", "As clinical circumstances change", ["Never once calculated", "Only every 10 years", "Only after age 79"], "The slide says to reassess risk when circumstances change.")
        ]
      }),
      S(4, "Ages 20 to 29", {
        why: "<p>A 10-year calculator says nearly every 25-year-old is 'low risk' because age dominates the math, yet plaque is already starting. So in young adults the focus is lifetime risk, family history and early action. LDL ≥160 or a strong family history of premature ASCVD (often familial hypercholesterolemia, standard teaching) can justify earlier lipid-lowering.</p>",
        q: [
          Q("In patients ages 20-29, which LDL-C level supports considering earlier lipid-lowering therapy?", "LDL-C ≥160 mg/dL", ["LDL-C ≥70 mg/dL", "LDL-C ≥100 mg/dL", "LDL-C ≥300 mg/dL only"], "The slide names LDL-C ≥160 or strong family history of premature ASCVD in young adults."),
          Q("What kind of risk should be assessed in 20- to 29-year-olds when appropriate?", "Lifetime risk and family history", ["10-year PREVENT risk", "CAC score", "Exercise stress test"], "The slide says to assess lifetime risk and family history in this age group.")
        ]
      }),
      S(5, "Ages 30 to 79", {
        why: "<p>From 30 to 79 we calculate. 10-year risk is for everyone eligible (30-79). 30-year risk is added for 30-59 because a younger person's 10-year risk looks small even when their long-run risk is high. The number is a guide used <i>with</i> clinical factors, not a verdict.</p>",
        q: [
          Q("What tool estimates 10-year risk in eligible patients ages 30-79?", "PREVENT-ASCVD", ["Framingham only", "CHA2DS2-VASc", "TIMI score"], "The slide names PREVENT-ASCVD for ages 30-79."),
          Q("In which age group should 30-year risk be considered?", "Ages 30-59", ["Ages 20-29", "Ages 60-79", "Ages over 80"], "30-year risk is for eligible adults ages 30-59."),
          Q("How should the PREVENT estimate be used?", "Alongside clinical risk factors to guide prevention", ["As the only factor in every decision", "Only for insurance purposes", "To diagnose CAD"], "The slide says to use the estimate alongside clinical risk factors.")
        ]
      }),
      S(6, "PREVENT-ASCVD: three models", {
        why: "<p>PREVENT is a family of three equations. Match the model to the question: MI/stroke risk → <b>PREVENT-ASCVD</b>; heart failure risk → <b>PREVENT-HF</b>; everything combined → <b>PREVENT-CVD</b>. Statins prevent plaque events, so lipid decisions use the ASCVD model.</p>",
        q: [
          Q("As of the 2026 update, what is the preferred cardiovascular risk calculator?", "PREVENT-ASCVD", ["Pooled Cohort Equations", "Reynolds score", "SCORE2"], "The 2026 update made PREVENT-ASCVD the preferred calculator."),
          Q("Which PREVENT model estimates the risk of heart failure?", "PREVENT-HF", ["PREVENT-ASCVD", "PREVENT-CVD", "PREVENT-MI"], "PREVENT-HF is the heart failure model."),
          Q("Which PREVENT model should guide lipid-lowering decisions?", "PREVENT-ASCVD", ["PREVENT-HF", "PREVENT-CVD", "Any of the three equally"], "The slide says to use PREVENT-ASCVD for lipid-lowering decisions.")
        ]
      }),
      S(7, "PREVENT-ASCVD vs PCE: the inputs", {
        why: "<p>PREVENT keeps all eight PCE inputs and adds two required ones, <b>eGFR</b> and <b>BMI</b>, so kidney and metabolic health count. Three more are optional: <b>UACR</b>, <b>HbA1c</b> and the <b>social deprivation index</b>. Easy memory hook: the old calculator ignored the kidneys and the waistline.</p>",
        q: [
          Q("Which input is in PREVENT but NOT in the PCE?", "eGFR", ["Systolic blood pressure", "HDL cholesterol", "Smoking"], "Kidney function (eGFR) is new in PREVENT."),
          Q("Which PREVENT input is required (not optional)?", "Body mass index", ["Urine albumin-to-creatinine ratio", "Hemoglobin A1c", "Social deprivation index"], "BMI is a base input; UACR, HbA1c and social deprivation index are optional."),
          Q("Which input is shared by both PCE and PREVENT?", "Antihypertensive treatment", ["eGFR", "BMI", "Social deprivation index"], "Both calculators ask whether the patient is on BP treatment.")
        ]
      }),
      S(8, "A. Kidney function: eGFR", {
        why: "<p>Why the kidney matters to the heart: CKD brings hypertension, vascular calcification, inflammation and abnormal lipids, all of which speed atherosclerosis (standard teaching). Many CKD patients die of cardiovascular disease before they ever need dialysis, so leaving eGFR out underestimates their risk.</p>",
        q: [
          Q("Why does PREVENT include eGFR?", "Reduced kidney function is associated with increased cardiovascular risk", ["eGFR determines statin dose", "eGFR replaces the lipid panel", "Kidney function is unrelated to CVD but improves accuracy"], "The slide links reduced kidney function to higher cardiovascular risk."),
          Q("What does eGFR capture that the PCE does not directly incorporate?", "Risk from impaired kidney function", ["Risk from smoking", "Risk from high blood pressure", "Risk from age"], "The slide says eGFR captures kidney-related risk the PCE misses.")
        ]
      }),
      S(9, "B. Metabolic health: BMI and HbA1c", {
        why: "<p>The PCE only asks 'diabetes: yes or no?'. But an A1c of 6.4% and one of 11% are very different, and so is a lean versus an obese patient. BMI (required) and HbA1c (optional) let the calculator see <i>how much</i> metabolic trouble there is. A1c reflects about 2-3 months because red cells live about 120 days and glucose sticks to their hemoglobin over that time (standard teaching).</p>",
        q: [
          Q("HbA1c reflects average blood glucose over about:", "The preceding 2-3 months", ["The past 24 hours", "The past 2 weeks", "The past year"], "The slide says HbA1c reflects about 2-3 months of glucose."),
          Q("What does HbA1c add beyond the PCE's diabetes variable?", "Information about glycemic status beyond a simple yes/no", ["A diagnosis of CAD", "Kidney function", "Inflammation level"], "A1c grades how high glucose runs instead of just yes/no diabetes."),
          Q("What does BMI add to PREVENT?", "Information about body size and obesity-related risk", ["Information about kidney damage", "Information about genetic lipid risk", "Information about social conditions"], "The slide says BMI brings in body size and obesity-related risk.")
        ]
      }),
      S(10, "C. Kidney damage: UACR", {
        why: "<p>eGFR measures how <i>well</i> the kidney filters; UACR measures whether the filter is <i>leaking</i>. Albumin leaking into urine is an early sign of damaged blood vessels in the glomerulus, and that same vessel damage is happening in the coronaries (standard teaching). That is why a diabetic with a normal eGFR can still have meaningful extra risk.</p>",
        q: [
          Q("What does the urine albumin-to-creatinine ratio (UACR) assess?", "Urinary albumin excretion relative to urinary creatinine", ["Kidney filtration rate", "Blood glucose over 3 months", "Muscle breakdown"], "UACR compares urine albumin to urine creatinine to find kidney damage."),
          Q("A diabetic patient has a normal eGFR. What can UACR reveal?", "Significant albuminuria indicating extra risk", ["Nothing, since eGFR is normal", "Prediabetes", "Familial hypercholesterolemia"], "The slide's example is a diabetic with normal eGFR but significant albuminuria."),
          Q("UACR can detect kidney damage when?", "Before substantial reductions in eGFR", ["Only after dialysis begins", "Only when eGFR is under 15", "Only in nondiabetics"], "Albuminuria can appear before eGFR drops.")
        ]
      }),
      S(11, "D. Social Deprivation Index", {
        why: "<p>Where you live shapes risk: access to care, money for healthy food and medicines, education and housing all change how risk factors get managed. PREVENT can include this optional ZIP-code-based index so the estimate reflects those conditions.</p>",
        q: [
          Q("The optional Social Deprivation Index in PREVENT is based on the patient's:", "ZIP code", ["Income tax return", "Insurance type", "Race"], "The slide says it is based on ZIP code."),
          Q("Which is an example of a condition the Social Deprivation Index reflects?", "Access to healthcare", ["Serum LDL", "Family history of MI", "Blood pressure"], "It reflects area-level conditions like access to care, economics, education and housing.")
        ]
      }),
      S(12, "PREVENT-ASCVD eligibility", {
        why: "<p>PREVENT is for <b>primary</b> prevention in people whose risk is still uncertain. If the answer is already known (known CVD, CAC ≥300, an inherited condition that sets high risk) the calculator adds nothing and treatment is already indicated. ESKD and life expectancy under a year are outside what the model was built for.</p>",
        q: [
          Q("Which patient is eligible for PREVENT-ASCVD as the primary decision tool?", "A 50-year-old without known CVD", ["A 60-year-old with a prior MI", "A 55-year-old with CAC 400", "A 45-year-old on dialysis for ESKD"], "PREVENT is for ages 30-79 without known CVD or significant subclinical disease."),
          Q("PREVENT should not be the primary decision tool if the CAC score is:", "≥300", ["0", "1-99", "≥10"], "The slide lists severe subclinical disease such as CAC ≥300."),
          Q("Which is an exclusion from using PREVENT as the primary tool?", "Life expectancy of less than one year", ["Smoking", "Diabetes", "Age 35"], "The slide excludes patients with a life expectancy under one year.")
        ]
      }),
      S(13, "10-year PREVENT-ASCVD risk categories", {
        why: "<p>Memory hook: <b>3, 5, 10</b>. Under 3% low, 3 to under 5 borderline, 5 to under 10 intermediate, 10 and up high. These cutoffs are lower than the old PCE ones (5, 7.5, 20; standard teaching) because PREVENT gives lower numbers for the same patient.</p>",
        q: [
          Q("A 10-year PREVENT-ASCVD risk of 4% is:", "Borderline", ["Low", "Intermediate", "High"], "Borderline is 3% to under 5%."),
          Q("A 10-year PREVENT-ASCVD risk of 12% is:", "High", ["Intermediate", "Borderline", "Very low"], "High risk is 10% or more."),
          Q("What range defines intermediate 10-year PREVENT-ASCVD risk?", "5% to <10%", ["3% to <5%", "7.5% to <20%", "10% to <20%"], "Intermediate is 5% to under 10%.")
        ]
      }),
      S(14, "PREVENT calculator link", {
        why: "<p>The AHA's free online PREVENT calculator lives at this link. Practice entering a patient once (age, sex, TC, HDL, SBP, BP meds, diabetes, smoking, eGFR, BMI) so the inputs from slide 7 stick.</p>",
        q: [
          Q("Which organization hosts the PREVENT calculator linked on the slide?", "American Heart Association", ["CDC", "USPSTF", "WHO"], "The link is to professional.heart.org, the AHA's site.")
        ]
      })
    ],
    review: [
      Q("A 45-year-old with no CVD: which risk estimates are appropriate?", "10-year and 30-year PREVENT-ASCVD", ["10-year only", "30-year only", "Lifetime risk only"], "Ages 30-59 get both 10-year and 30-year estimates."),
      Q("A 68-year-old with no CVD: which risk estimate applies?", "10-year PREVENT-ASCVD", ["30-year PREVENT-ASCVD", "No estimate, too old", "Lifetime risk only"], "30-year risk stops at 59, but 10-year risk covers up to 79."),
      Q("A 26-year-old with LDL-C 170 and a father with an MI at 42. What is appropriate?", "Consider earlier lipid-lowering therapy", ["Calculate 10-year PREVENT risk and treat only if ≥10%", "No action until age 40", "CAC score"], "Young adults with LDL ≥160 or strong premature family history can start earlier."),
      Q("Which two required inputs does PREVENT add to the PCE?", "eGFR and BMI", ["UACR and HbA1c", "Age and sex", "Lp(a) and ApoB"], "eGFR and BMI are required; UACR, HbA1c and social index are optional."),
      Q("A 10-year PREVENT-ASCVD risk of 2.5% is:", "Low", ["Borderline", "Intermediate", "High"], "Low is under 3%."),
      Q("A 65-year-old with a prior ischemic stroke: should PREVENT guide her statin decision?", "No, she has known CVD and needs secondary prevention", ["Yes, always calculate first", "Yes, if under 79", "Only if LDL is over 190"], "PREVENT is not the primary tool for patients with known CVD."),
      Q("Which marker shows kidney damage even when filtration is still normal?", "UACR", ["eGFR", "BMI", "HbA1c"], "Albuminuria can show damage before eGFR falls.")
    ]
  });

  /* ---------------------------------------------------------------- LO 3 */
  los.push({
    id: "lo3", label: "LO 3", title: "Lifestyle: diet, activity, weight, sleep",
    objective: "Recommend evidence-based lifestyle modifications to reduce cardiovascular risk, including dietary changes, physical activity, weight management, and adequate sleep.",
    slides: [
      S(15, "Approach to risk modification starts with education", {
        why: "<p>Change only sticks if the patient owns the goal. 'Lose weight' fails; 'walk 15 minutes after dinner 5 days a week' can work. Healthy patients get encouragement to keep going; patients with unhealthy habits get more counseling and specific, attainable goals set together.</p>",
        q: [
          Q("Any approach to CV risk modification begins with:", "Patient education", ["A statin", "A stress test", "A CAC score"], "The slide says every approach begins with patient education."),
          Q("For patients with unhealthy habits, the provider should:", "Set specific, attainable goals for change with the patient", ["Give a pamphlet only", "Wait until they have symptoms", "Refer everyone to cardiology"], "The slide says to set specific attainable goals together."),
          Q("For healthy patients, the emphasis is on:", "Continuing healthy habits", ["Starting aspirin", "Starting a statin", "Annual stress testing"], "The slide emphasizes continuing the habits that keep them healthy.")
        ]
      }),
      S(16, "Good habits 1-2: diet", {
        why: "<p>Saturated and trans fats raise LDL by lowering the liver's LDL receptors, so swapping them for unsaturated fats (olive oil, nuts, avocado, fish) lowers LDL (standard teaching). Sodium raises BP, and added sugar raises triglycerides and weight. Think Mediterranean-style: plants, fish, olive oil; little processed food.</p>",
        q: [
          Q("Which fat swap does the slide recommend?", "Replace saturated fats with unsaturated fats", ["Replace unsaturated fats with saturated fats", "Replace all fats with sugar", "Replace olive oil with butter"], "Unsaturated fats like olive oil, nuts, avocados and fish replace saturated fats."),
          Q("Which dairy choice does the slide recommend?", "Low-fat or fat-free dairy", ["Whole-milk dairy", "No dairy at all", "Only cheese"], "The slide says to choose low-fat or fat-free dairy."),
          Q("Which food should be limited per the slide?", "Processed meats", ["Legumes", "Fish", "Whole grains"], "Processed meats are on the limit list with saturated/trans fats and processed foods.")
        ]
      }),
      S(17, "Good habits 3-5: hydration, activity, sleep", {
        why: "<p>The activity numbers to know: <b>150 min/week moderate OR 75 min/week vigorous</b> aerobic (vigorous counts double), plus <b>muscle strengthening ≥2 days/week</b>. Sleep 7-9 hours: short sleep raises sympathetic tone, BP, insulin resistance and appetite (standard teaching).</p>",
        q: [
          Q("How much moderate-intensity aerobic activity is recommended per week?", "At least 150 minutes", ["At least 60 minutes", "At least 300 minutes required", "At least 30 minutes"], "The goal is 150 min/week moderate or 75 min/week vigorous."),
          Q("How much vigorous-intensity aerobic activity meets the weekly goal?", "75 minutes", ["150 minutes", "30 minutes", "200 minutes"], "75 minutes of vigorous activity equals 150 minutes of moderate."),
          Q("How many hours of sleep per night does the slide recommend?", "7-9 hours", ["5-6 hours", "10-12 hours", "At least 4 hours"], "The slide says aim for 7-9 hours."),
          Q("How often should muscle-strengthening activity be done?", "At least 2 days/week", ["Daily", "Once a month", "Not recommended"], "The slide adds muscle strengthening at least 2 days a week.")
        ]
      }),
      S(18, "How do US adults spend their day?", {
        html: "<p><b>How do U.S. adults spend their day?</b> Average time spent across a 24-hour day.</p><ul><li><b>Sedentary time:</b> &gt;7 hours spent in sedentary activities each day.</li><li><b>Moderate/vigorous activity:</b> 0.2 hours, ≈12 minutes per day.</li><li>1 in 3 adults gets less than 7 hours of sleep.</li><li>Pie chart, hours per day: vigorous activity (thin sliver), sedentary, light activity, sleep.</li></ul>",
        why: "<p>The point: the average adult gets about 12 minutes of real exercise a day (about 84 a week), barely half the 150-minute goal, while sitting over 7 hours. So most patients you see are not meeting activity goals, and a third are short on sleep.</p>",
        q: [
          Q("About how much moderate/vigorous activity does the average US adult get per day?", "About 12 minutes", ["About 1 hour", "About 30 minutes", "About 2 hours"], "The slide shows 0.2 hours, about 12 minutes a day."),
          Q("How much time does the average US adult spend sedentary each day?", "More than 7 hours", ["About 2 hours", "About 30 minutes", "Less than 1 hour"], "The slide says more than 7 hours a day are sedentary."),
          Q("What fraction of adults gets less than 7 hours of sleep?", "1 in 3", ["1 in 10", "1 in 2", "9 in 10"], "The slide says 1 in 3 adults sleep under 7 hours.")
        ]
      }),
      S(19, "Exercise intensity: METs, examples and the talk test", {
        pic: "<p><b>Exercise Intensity: METs, Examples, and the Talk Test</b></p><table class=\"ss-table\"><tr><th>Intensity</th><th>METs</th><th>Examples</th></tr><tr><td>Sedentary</td><td>1 – 1.5</td><td>Sitting, reclining; watching television, computer use</td></tr><tr><td>Light</td><td>1.6 – 2.9</td><td>Walking slowly; cooking, light housework; light yoga or tai chi</td></tr><tr><td>Moderate</td><td>3 – 5.9</td><td>Brisk walking (≈ 3–4 mph); cycling &lt; 9 mph; doubles tennis; active yoga</td></tr><tr><td>Vigorous</td><td>≥ 6</td><td>Jogging or running (≥ 6 mph); cycling ≥ 10 mph; singles tennis; swimming laps</td></tr></table><p><b>The Talk Test</b>: a simple way to monitor exercise intensity based on how easily you can talk during the activity.</p><ul><li><b>Light</b>: can talk and sing comfortably.</li><li><b>Moderate</b>: can talk, but not sing.</li><li><b>Vigorous</b>: can say only a few words before pausing for a breath.</li></ul><p><b>Key Takeaway:</b> Use METs, examples, and the talk test to help patients choose, monitor, and progress their exercise intensity.</p>",
        why: "<p>A MET is the energy you burn sitting still; 4 METs means four times that (standard teaching). The talk test is the bedside version: talk but not sing = moderate, so that is where most patients should aim for the 150-minute goal.</p>",
        q: [
          Q("Using the talk test, a patient who can talk but not sing is exercising at:", "Moderate intensity", ["Light intensity", "Vigorous intensity", "Sedentary level"], "Talk but not sing is moderate intensity."),
          Q("What MET range is moderate-intensity activity?", "3 – 5.9 METs", ["1 – 1.5 METs", "1.6 – 2.9 METs", "≥ 6 METs"], "Moderate is 3 to 5.9 METs."),
          Q("Which is a vigorous-intensity activity on the slide?", "Singles tennis", ["Doubles tennis", "Brisk walking", "Light yoga"], "Singles tennis is vigorous; doubles tennis is moderate.")
        ]
      }),
      S(20, "Does the patient need medical clearance before exercise?", {
        pic: "<p><b>Flowchart</b></p><ol><li><b>Does the patient have 1 or more of the following symptoms or signs</b>, including but not limited to: angina pectoris or features of cardiac ischemia without chest discomfort, either at rest or with exertion; dyspnea on exertion or dyspnea at rest; paroxysmal nocturnal dyspnea and/or orthopnea; syncope or presyncope; arrhythmia or palpitations; cardiac murmur?<ul><li><b>Yes</b> → Medical clearance recommended (often with exercise stress testing).</li><li><b>No</b> → next question.</li></ul></li><li><b>Does the patient have established atherosclerotic cardiovascular disease, diabetes, or chronic kidney disease (even though they are asymptomatic)?</b><ul><li><b>Yes</b> → Does the patient already participate in moderate-intensity exercise on a regular basis (ie, at least 30 minutes, 3 days/week)?<ul><li><b>No</b> → Medical clearance recommended (often with exercise stress testing).</li><li><b>Yes</b> → Does the patient wish to pursue vigorous-intensity exercise?<ul><li><b>No</b> → Medical clearance not necessary. Continue moderate-intensity exercise.</li><li><b>Yes</b> → Has the patient undergone medical clearance (to participate in exercise) during the past 12 months? <b>No</b> → Medical clearance recommended (often with exercise stress testing). <b>Yes</b> → Medical clearance not necessary. Gradually increase to vigorous-intensity exercise.</li></ul></li></ul></li><li><b>No</b> → Does the patient already participate in moderate-intensity exercise on a regular basis (ie, at least 30 minutes, 3 days/week)?<ul><li><b>Yes</b> → Medical clearance not necessary. Continue moderate-intensity exercise or gradually increase to vigorous-intensity exercise.</li><li><b>No</b> → Medical clearance not necessary. Initiate light-intensity exercise and gradually increase to moderate-intensity exercise; may eventually escalate to vigorous-intensity activity.</li></ul></li></ul></li></ol><p><b>Box:</b> Exercise intensity varies by age, fitness, comorbidities, and other factors. The following examples apply to most but not all patients. <b>Light aerobic exercise examples:</b> easy walking; light household chores; light yoga or tai chi. <b>Moderate aerobic exercise examples:</b> brisk walking; cycling at or slower than 14.5 km/hour (9 miles/hour); doubles tennis; active yoga.</p>",
        why: "<p>Exercise is safe for most people, but a sudden jump in effort can unmask ischemia or an arrhythmia in someone with heart disease. So the flowchart asks two things: <b>symptoms?</b> (always clear them first) and <b>ASCVD, diabetes or CKD?</b> (clear them if they are sedentary, or if they want to go vigorous without clearance in the last 12 months). Healthy, symptom-free people never need clearance; they just start light and build up.</p>",
        q: [
          Q("A patient has exertional dyspnea and wants to start exercising. Next step?", "Medical clearance, often with exercise stress testing", ["Start vigorous exercise", "No clearance needed, start light exercise", "Start aspirin"], "Any cardiac symptom or sign sends the patient to medical clearance first."),
          Q("A healthy, sedentary, symptom-free 40-year-old with no ASCVD, diabetes or CKD wants to exercise. Advice?", "No clearance needed; start light and build to moderate", ["Exercise stress test first", "Cardiology referral", "Avoid exercise"], "Without symptoms or disease, clearance is not necessary; start light and progress."),
          Q("An asymptomatic diabetic who does not exercise regularly wants to start. Per the flowchart:", "Medical clearance is recommended", ["No clearance needed", "Only vigorous exercise is allowed", "Exercise is contraindicated"], "Diabetes plus no regular moderate exercise leads to medical clearance.")
        ]
      }),
      S(21, "How exercise protects the heart", {
        html: "<p><b>How Exercise Protects the Heart.</b> Regular activity benefits cardiovascular health in several ways.</p><p><b>Antiatherogenic effects</b></p><ul><li>↓ Less abdominal fat</li><li>↓ Lower blood pressure</li><li>↓ Lower triglycerides</li><li>↑ Higher HDL</li><li>✓ Better insulin sensitivity</li></ul><p><b>Other cardiovascular benefits:</b> antithrombotic; endothelial function; autonomic function; antiischemic; antiarrhythmic.</p><p>Exercise lowers cardiovascular risk through multiple pathways.</p><p><small>Reference: UpToDate; Fletcher GF, Balady GJ, Amsterdam EA, et al. Circulation. 2001;104:1694.</small></p>",
        why: "<p>Exercise hits almost every risk factor at once. Antiatherogenic: less visceral fat, lower BP and TG, higher HDL, better insulin sensitivity. Beyond plaque: less clotting (antithrombotic), more nitric oxide from the lining (endothelial), more vagal tone and lower resting HR (autonomic, antiarrhythmic), and a trained heart needs less oxygen for the same work (antiischemic) (mechanisms standard teaching).</p>",
        q: [
          Q("What does regular exercise do to HDL?", "Raises it", ["Lowers it", "No effect", "Makes it harmful"], "The slide lists higher HDL as an antiatherogenic effect."),
          Q("Which is listed as an antiatherogenic effect of exercise?", "Lower triglycerides", ["Higher LDL", "Higher blood pressure", "More abdominal fat"], "Exercise lowers TG, BP and abdominal fat and raises HDL."),
          Q("Which is listed as an 'other cardiovascular benefit' of exercise?", "Antiarrhythmic", ["Prothrombotic", "Proarrhythmic", "Raises resting heart rate"], "The slide lists antithrombotic, endothelial, autonomic, antiischemic and antiarrhythmic benefits.")
        ]
      })
    ],
    review: [
      Q("A patient jogs 25 minutes 3 times a week. Does he meet the aerobic goal?", "Yes, 75 minutes of vigorous activity meets it", ["No, he needs 150 minutes of anything", "No, he needs 300 minutes", "Only if he adds weights"], "Jogging is vigorous, and 75 vigorous minutes a week meets the goal."),
      Q("A patient brisk-walks 20 minutes 5 days a week. How far is she from the goal?", "50 minutes short of 150", ["She meets it", "She exceeds it", "She is 130 minutes short"], "20 x 5 = 100 minutes of moderate activity, 50 short of 150."),
      Q("What should a patient replace saturated fat with?", "Olive oil, nuts, avocados and fatty fish", ["Butter and lard", "Sugar-sweetened drinks", "Processed meats"], "Unsaturated fats replace saturated fats."),
      Q("During exercise a patient can only say a few words before pausing to breathe. Intensity?", "Vigorous", ["Light", "Moderate", "Sedentary"], "Only a few words per breath is vigorous on the talk test."),
      Q("A 55-year-old with CAD who already walks briskly 30 minutes 4 days a week wants to keep that up. Clearance?", "Not necessary; continue moderate exercise", ["Stress test first", "Stop exercising", "Cardiology referral"], "ASCVD patients already doing moderate exercise who stay moderate need no clearance."),
      Q("Which drink does the slide recommend over sugar-sweetened beverages?", "Water", ["Fruit juice", "Sports drinks", "Diet soda"], "The slide says choose water over sugar-sweetened beverages.")
    ]
  });

  /* ---------------------------------------------------------------- LO 4 */
  los.push({
    id: "lo4", label: "LO 4", title: "Lipid management and statin intensity",
    objective: "Apply current recommendations for lipid management in primary and secondary prevention, including identifying patients who warrant lipid-lowering therapy and selecting appropriate statin intensity.",
    slides: [
      S(22, "Statins: high vs moderate intensity", {
        why: "<p>Intensity is about how much LDL drops: <b>high</b> ≈ 50% or more, <b>moderate</b> ≈ 30-49% (standard teaching). Only two statins can be high intensity, and only at their top doses: <b>atorvastatin 40-80</b> and <b>rosuvastatin 20-40</b>. Memory hook: 'A 40, R 20' is where high intensity starts. Lower doses of those two, and lovastatin 40, pravastatin 40, simvastatin 40, are moderate.</p>",
        q: [
          Q("Which is a high-intensity statin regimen?", "Atorvastatin 40-80 mg daily", ["Atorvastatin 10-20 mg daily", "Pravastatin 40 mg daily", "Simvastatin 40 mg daily"], "Atorvastatin 40-80 is high intensity; 10-20 is moderate."),
          Q("Rosuvastatin at what dose is high intensity?", "20-40 mg daily", ["5-10 mg daily", "1-2 mg daily", "80 mg daily"], "Rosuvastatin 20-40 is high intensity; 5-10 is moderate."),
          Q("Which statin regimen is moderate intensity?", "Simvastatin 40 mg", ["Rosuvastatin 40 mg", "Atorvastatin 80 mg", "Rosuvastatin 20 mg"], "Simvastatin 40 is on the moderate-intensity list.")
        ]
      }),
      S(23, "Secondary prevention: high-intensity statin for all ASCVD", {
        why: "<p>Once someone has atherosclerosis anywhere, the plaque is everywhere, and the next event risk is high. So there is no calculator and no lipid threshold: <b>every</b> patient with clinical ASCVD gets a <b>high-intensity</b> statin, even with a 'normal' LDL. Note the list goes beyond the heart: stroke/TIA, PAD and atherosclerotic aortic aneurysm count too.</p>",
        q: [
          Q("A patient with prior CABG and an LDL of 75. Statin?", "High-intensity statin regardless of lipid profile", ["No statin, LDL is normal", "Moderate-intensity statin", "Calculate PREVENT first"], "All patients with clinical ASCVD get high-intensity statins regardless of lipids."),
          Q("Which counts as clinical ASCVD requiring a high-intensity statin?", "Atherosclerotic peripheral artery disease", ["Hemorrhagic stroke", "Varicose veins", "Atrial fibrillation"], "PAD is on the slide's list along with CAD, stroke/TIA and aortic aneurysm."),
          Q("Which cerebrovascular event qualifies as ASCVD on the slide?", "Atherosclerotic ischemic stroke or TIA", ["Hemorrhagic stroke", "Migraine with aura", "Subdural hematoma"], "Ischemic stroke or TIA from atherosclerosis is clinical ASCVD.")
        ]
      }),
      S(24, "Primary prevention: groups treated regardless of PREVENT", {
        why: "<p>Four groups skip the calculator because their risk is known to be high or the calculator underestimates it: <b>LDL ≥190</b> (usually genetic, lifelong exposure), and ages <b>40-75</b> with <b>diabetes</b>, <b>stage 3-4 CKD</b> or <b>HIV</b> (chronic inflammation and, for HIV, some antiretrovirals worsen lipids; standard teaching). Notice the age window 40-75 for the last three, but no age window for LDL ≥190.</p>",
        q: [
          Q("Which patient should get lipid-lowering therapy regardless of PREVENT risk?", "A 50-year-old with diabetes", ["A 35-year-old with diabetes", "A 50-year-old smoker with LDL 120", "A 30-year-old with BMI 31"], "Adults 40-75 with diabetes get lipid-lowering therapy regardless of calculated risk."),
          Q("What LDL-C level defines severe hypercholesterolemia?", "≥190 mg/dL", ["≥130 mg/dL", "≥160 mg/dL", "≥250 mg/dL"], "LDL-C ≥190 is severe hypercholesterolemia."),
          Q("Which CKD stages qualify for lipid-lowering therapy regardless of PREVENT (ages 40-75)?", "Stage 3 or 4", ["Stage 1 or 2", "Stage 5 on dialysis", "Any stage"], "The slide specifies stage 3 or 4 CKD."),
          Q("A 52-year-old living with HIV, no CVD. Per the 2026 guideline:", "Lipid-lowering therapy is recommended regardless of PREVENT risk", ["Calculate PREVENT and treat only if ≥10%", "No statin needed", "Aspirin instead of a statin"], "Adults 40-75 with HIV are a regardless-of-risk group.")
        ]
      }),
      S(25, "Start with the lipid panel", {
        html: "<p><b>Start With the Lipid Panel.</b> Review the individual components—not just total cholesterol.</p><p>A standard lipid panel includes LDL-C, HDL-C, total cholesterol, and triglycerides.</p><table class=\"ss-table\"><tr><th>Lipid</th><th>Desirable</th><th>Borderline</th><th>High / very high</th></tr><tr><td>LDL-C</td><td>&lt;100 mg/dL</td><td>130–159 mg/dL</td><td>160–189: high<br>≥190: very high</td></tr><tr><td>Total-C</td><td>&lt;200 mg/dL</td><td>200–239 mg/dL</td><td>≥240 mg/dL: high</td></tr><tr><td>HDL-C</td><td>≥60 mg/dL (considered protective)</td><td>—</td><td>&lt;40 mg/dL (men)<br>&lt;50 mg/dL (women): low</td></tr><tr><td>Triglycerides</td><td>&lt;150 mg/dL</td><td>150–199 mg/dL</td><td>200–499: high<br>≥500: very high</td></tr></table><p><b>Important:</b> These are conventional lipid classifications—not individualized LDL treatment goals. LDL-C ≥190 mg/dL is a distinct severe-hypercholesterolemia category.</p><p><small>Values in mg/dL. Interpret results in the context of overall ASCVD risk and current guidelines.</small></p>",
        why: "<p>Memory hooks: LDL &lt;100, total &lt;200, TG &lt;150, HDL ≥60. LDL and TG are bad when high; HDL is the one where <i>low</i> is bad (it carries cholesterol back to the liver). TG ≥500 is its own danger zone because it can cause pancreatitis (standard teaching). And these are labels, not treatment goals: whether to treat depends on overall risk.</p>",
        q: [
          Q("What is a desirable LDL-C on the conventional classification?", "<100 mg/dL", ["<130 mg/dL", "<160 mg/dL", "<190 mg/dL"], "Desirable LDL-C is under 100."),
          Q("An HDL of 38 in a man is classified as:", "Low", ["Desirable", "Borderline", "Protective"], "HDL under 40 in men is low."),
          Q("Triglycerides of 398 mg/dL are classified as:", "High", ["Borderline", "Desirable", "Very high"], "TG 200-499 is high; 500 and above is very high."),
          Q("What HDL level is considered protective?", "≥60 mg/dL", ["≥40 mg/dL", "≥50 mg/dL", "≥100 mg/dL"], "HDL of 60 or more is considered protective.")
        ]
      }),
      S(26, "Primary prevention: who gets what approach", {
        why: "<p>Read this table as a sorting step. LDL ≥190 → treat (and think familial hypercholesterolemia). Age 40-75 with diabetes, CKD 3-4 or HIV → treat. Everyone else ages 30-79 with LDL 70-189 and no ASCVD → run PREVENT-ASCVD and let the risk category decide.</p>",
        q: [
          Q("A patient has LDL-C 205. Besides starting therapy, what should you evaluate for?", "Familial hypercholesterolemia", ["Hypothyroidism only", "Diabetes insipidus", "Pancreatitis"], "LDL ≥190 calls for treatment and evaluation for familial hypercholesterolemia when appropriate."),
          Q("A 50-year-old without ASCVD, diabetes, CKD or HIV has LDL-C 140. How is the statin decision made?", "Use PREVENT-ASCVD to guide it", ["Start a statin automatically", "No statin until LDL ≥190", "Order a CAC score first in everyone"], "Eligible adults 30-79 with LDL 70-189 are sorted by PREVENT-ASCVD."),
          Q("Which LDL-C range is sorted by PREVENT-ASCVD in eligible adults 30-79?", "70-189 mg/dL", ["≥190 mg/dL", "<70 mg/dL", "100-129 mg/dL only"], "The slide's PREVENT group is LDL-C 70-189 mg/dL.")
        ]
      }),
      S(27, "Primary prevention by PREVENT-ASCVD risk", {
        why: "<p>The wording climbs with risk: low = lifestyle (statin only in select cases), borderline = <b>may</b> consider, intermediate = <b>should</b> consider, high = <b>recommended</b>. Both middle groups require a clinician-patient discussion. The low-risk exceptions are LDL 160-189 or a 30-year risk ≥10% in ages 30-59, because lifelong exposure matters even when the next 10 years look safe.</p>",
        q: [
          Q("10-year PREVENT-ASCVD risk is 12%. Lipid-lowering therapy is:", "Recommended", ["May be considered", "Not indicated", "Should be avoided"], "High risk (≥10%) means lipid-lowering therapy is recommended."),
          Q("10-year PREVENT-ASCVD risk is 4%. Lipid-lowering therapy:", "May be considered after a clinician-patient discussion", ["Is recommended", "Should be considered without discussion", "Is contraindicated"], "Borderline risk (3% to under 5%) means therapy may be considered after discussion."),
          Q("A 35-year-old with 10-year risk 1.5% but 30-year risk 12%. What can be considered?", "Lipid-lowering therapy in selected cases", ["Nothing, he is low risk", "Aspirin", "A stress test"], "Low-risk adults 30-59 with 30-year risk ≥10% may be considered for therapy.")
        ]
      }),
      S(28, "Calculate, personalize, reclassify", {
        why: "<p>A 3-step thought process. <b>Calculate</b> the number. <b>Personalize</b> it with things the calculator does not see (family history, persistent LDL, Lp(a), inflammatory disease). <b>Reclassify</b> with a CAC score only if you and the patient are still unsure, because CAC shows plaque directly.</p>",
        q: [
          Q("What are the three steps of the primary-prevention lipid approach?", "Calculate, personalize, reclassify", ["Screen, diagnose, refer", "Ask, advise, connect", "Calculate, treat, stop"], "The slide's three steps are calculate, personalize and reclassify."),
          Q("When should CAC scoring be considered?", "When the treatment decision remains uncertain in an appropriate patient", ["In every patient before a statin", "Only after an MI", "Instead of a lipid panel"], "CAC is for reclassifying when the decision is uncertain."),
          Q("Which is a 'personalize' factor on the slide?", "Elevated Lp(a)", ["Age", "Systolic BP", "Total cholesterol"], "Lp(a) is a personalizing factor that the calculator does not include.")
        ]
      }),
      S(29, "Risk enhancers 1-2: family history, ancestry, lipids", {
        why: "<p>Risk enhancers nudge a borderline or intermediate patient toward treatment. Premature ASCVD in a first-degree relative usually means men &lt;55 and women &lt;65 (standard teaching). South Asian and Filipino ancestry carry higher risk than the calculator predicts. Lipid enhancers are numbers to memorize: <b>Lp(a) ≥125 nmol/L (≥50 mg/dL)</b>, <b>ApoB ≥120</b>, <b>non-HDL 190-219</b>, persistent <b>LDL 160-189</b>, persistently high TG.</p>",
        q: [
          Q("Which ancestry is listed as higher-risk on the slide?", "South Asian", ["Northern European", "East African", "Scandinavian"], "South Asian and Filipino ancestry are listed as higher-risk."),
          Q("What Lp(a) level is a risk enhancer?", "≥125 nmol/L or ≥50 mg/dL", ["≥25 nmol/L", "≥10 mg/dL", "≥500 nmol/L only"], "Elevated Lp(a) is ≥125 nmol/L or ≥50 mg/dL."),
          Q("What ApoB level is a risk enhancer?", "≥120 mg/dL", ["≥60 mg/dL", "≥90 mg/dL", "≥200 mg/dL"], "ApoB of 120 or more is a risk-enhancing factor.")
        ]
      }),
      S(30, "Risk enhancers 3-4: inflammation, metabolism, reproduction", {
        why: "<p>Atherosclerosis is an inflammatory disease, so chronic inflammatory conditions (RA, SLE, advanced psoriasis) and a persistently high hsCRP speed plaque. Pregnancy is a 'stress test' for the vessels: preeclampsia, gestational diabetes or hypertension, and preterm delivery reveal a woman's future risk; early menopause removes estrogen's protection early (standard teaching).</p>",
        q: [
          Q("Which inflammatory disease is a risk enhancer?", "Rheumatoid arthritis", ["Osteoarthritis", "Asthma", "Seasonal allergies"], "RA, SLE and advanced psoriasis are listed."),
          Q("What hsCRP finding is a risk enhancer?", "≥2 mg/L on more than one occasion", ["≥0.5 mg/L once", "≥10 mg/L once during an infection", "Any detectable level"], "hsCRP ≥2 on more than one occasion is a risk enhancer."),
          Q("Which reproductive history is a risk enhancer?", "Preeclampsia", ["Twin pregnancy", "Cesarean delivery", "Breastfeeding"], "Preeclampsia is on the reproductive risk factor list."),
          Q("Menopause before what age is a risk enhancer?", "Age 40", ["Age 55", "Age 50", "Age 60"], "Premature menopause is before age 40.")
        ]
      }),
      S(31, "Lipoprotein(a)", {
        why: "<p>Lp(a) is an LDL particle with an extra protein, apo(a), attached. It is mostly genetic, so diet and exercise barely change it, and you only need to check it <b>once</b> in a lifetime. Apo(a) looks like plasminogen, so it may also promote clotting (standard teaching). Since you cannot fix Lp(a) itself, you push harder on everything else, especially LDL.</p>",
        q: [
          Q("How often should Lp(a) be measured in adults?", "At least once", ["Every year", "Every 3 months", "Never"], "Lp(a) is largely genetic, so measure it at least once in all adults."),
          Q("What determines Lp(a) levels?", "Largely genetics", ["Mostly diet", "Mostly exercise", "Mostly alcohol use"], "The slide says levels are largely genetically determined."),
          Q("Lp(a) ≥250 nmol/L (100 mg/dL) gives about how much ASCVD risk?", "About 2-fold", ["About 1.1-fold", "About 10-fold", "No added risk"], "Very high Lp(a) is about a 2-fold increase in estimated risk."),
          Q("What does elevated Lp(a) warrant?", "More intensive management of modifiable risk factors and LDL-C lowering", ["Nothing, it can't be changed", "Immediate CABG", "Stopping statins"], "The slide says elevated Lp(a) calls for more intensive LDL lowering and risk-factor control.")
        ]
      }),
      S(32, "Apolipoprotein B", {
        why: "<p>LDL-C measures the cholesterol <i>cargo</i>; ApoB counts the <i>trucks</i>. Each atherogenic particle carries exactly one ApoB. When TGs are high (diabetes, CKM syndrome) particles are small and cholesterol-poor, so LDL-C looks fine while the particle count, and the risk, is high (standard teaching).</p>",
        q: [
          Q("What does ApoB measure?", "The number of circulating atherogenic lipoprotein particles", ["The cholesterol content of HDL", "Inflammation", "Triglyceride level"], "ApoB counts atherogenic particles."),
          Q("In which patients can LDL-C alone underestimate risk that ApoB reveals?", "Patients with elevated triglycerides, diabetes or CKM syndrome", ["Patients with low triglycerides", "Children", "Patients with high HDL"], "The slide names high TG, diabetes and CKM syndrome."),
          Q("An ApoB of 130 mg/dL is:", "An ASCVD risk-enhancing factor", ["Normal", "Protective", "Diagnostic of FH"], "ApoB ≥120 is a risk-enhancing factor in the 2026 guideline.")
        ]
      }),
      S(33, "ApoB vs Lp(a)", {
        why: "<p>Keep them apart: <b>ApoB = particle number</b> (counts LDL, VLDL, IDL and Lp(a), one ApoB each). <b>Lp(a) = inherited risk particle</b> (one specific kind of particle, with apo(a) attached to its ApoB). So every Lp(a) particle is counted in ApoB, but ApoB is not Lp(a).</p>",
        q: [
          Q("'Think: particle number' describes:", "ApoB", ["Lp(a)", "HDL-C", "hsCRP"], "ApoB counts particles because each carries one ApoB."),
          Q("'Think: inherited risk particle' describes:", "Lp(a)", ["ApoB", "Triglycerides", "HDL"], "Lp(a) is a specific inherited LDL-like particle."),
          Q("Which particles carry ApoB?", "LDL, VLDL, IDL and Lp(a)", ["HDL only", "Chylomicron remnants only", "LDL only"], "The slide lists LDL, VLDL, IDL and Lp(a).")
        ]
      }),
      S(34, "High-sensitivity CRP", {
        why: "<p>CRP rises with any inflammation, including a cold, so one high value means little. That is why it must be ≥2 on <b>two</b> occasions with <b>no other cause</b>. In that setting, a borderline-risk patient's inflamed vessels tip the balance toward a high-intensity statin (statins also lower CRP, standard teaching).</p>",
        q: [
          Q("A borderline-risk patient has hsCRP ≥2 mg/L on two occasions, no other cause. What can be useful?", "High-intensity statin therapy", ["Aspirin", "Antibiotics", "No change"], "The slide says high-intensity statin therapy can be useful in this case."),
          Q("For hsCRP to support therapy, the elevation must be:", "Present on two successive occasions with no identifiable cause", ["Present once during a viral illness", "Above 50 mg/L", "Paired with a fever"], "It must be ≥2 twice with no identifiable underlying cause."),
          Q("CRP is a marker of:", "Systemic inflammation", ["Kidney damage", "Particle number", "Glycemic control"], "CRP marks systemic inflammation.")
        ]
      }),
      S(35, "Coronary artery calcium (CAC) scoring", {
        why: "<p>CAC is a non-contrast CT that sees calcium in plaque. A zero means very little calcified plaque, so deferring a statin may be reasonable, <b>except</b> in diabetics, smokers or strong premature family history (they can have soft plaque or fast progression). 1-99 means plaque is there; ≥100 or ≥75th percentile for age and sex means treat.</p>",
        q: [
          Q("Which patients should be considered for CAC scoring?", "Borderline or intermediate risk with uncertainty about therapy", ["Everyone at age 30", "High-risk patients already on a statin", "Patients with known CAD"], "CAC is for borderline or intermediate risk when the decision is uncertain."),
          Q("A CAC score of 150. What does this support?", "Lipid-lowering therapy", ["Deferring therapy", "Repeat in 10 years", "Aspirin only"], "CAC ≥100 or ≥75th percentile supports therapy."),
          Q("A smoker with CAC = 0. Can therapy be deferred based on CAC alone?", "No, smoking is an exception to the CAC = 0 reassurance", ["Yes, always", "Yes, if under 50", "Only if LDL >190"], "CAC = 0 supports deferring only when diabetes, smoking and strong family history are absent."),
          Q("What does a CAC score of 1-99 indicate?", "Coronary atherosclerosis is present", ["No atherosclerosis", "Severe hypercholesterolemia", "Need for CABG"], "Any calcium means plaque; the decision then uses overall risk and percentile.")
        ]
      })
    ],
    review: [
      Q("A 62-year-old had a TIA from carotid atherosclerosis. LDL 90. Best statin?", "Atorvastatin 80 mg", ["Pravastatin 40 mg", "No statin", "Simvastatin 20 mg"], "Clinical ASCVD needs a high-intensity statin regardless of LDL."),
      Q("A 45-year-old with type 2 diabetes, no CVD, LDL 110. Statin decision?", "Start lipid-lowering therapy regardless of PREVENT", ["Calculate PREVENT and treat only if ≥10%", "Wait for LDL ≥190", "Order CAC first"], "Adults 40-75 with diabetes get therapy regardless of calculated risk."),
      Q("A 55-year-old, no ASCVD or diabetes, LDL 150, PREVENT 7%. What next?", "Lipid-lowering therapy should be considered after discussion", ["No therapy", "Therapy is required without discussion", "Aspirin instead"], "Intermediate risk (5% to under 10%) means therapy should be considered after discussion."),
      Q("Which statin and dose is moderate intensity?", "Rosuvastatin 10 mg", ["Rosuvastatin 20 mg", "Atorvastatin 40 mg", "Atorvastatin 80 mg"], "Rosuvastatin 5-10 is moderate; 20-40 is high."),
      Q("Which lab is checked once in a lifetime because it is genetic?", "Lp(a)", ["LDL-C", "hsCRP", "Triglycerides"], "Lp(a) is genetically determined, so one measurement is enough."),
      Q("A 52-year-old with intermediate risk, a strong family history of premature MI and CAC 0. Defer statin?", "No, strong premature family history is an exception", ["Yes, CAC 0 always means defer", "Yes, and repeat CAC in 1 year", "Only if LDL is under 100"], "CAC 0 is not reassuring with diabetes, smoking or strong family history."),
      Q("A 25-year-old with LDL-C 195. Approach?", "Start lipid-lowering therapy and evaluate for familial hypercholesterolemia", ["Calculate PREVENT", "Wait until age 40", "Lifestyle only"], "LDL ≥190 is treated without a calculator, with an FH workup."),
      Q("Which is a lipid-related risk enhancer?", "Non-HDL-C 190-219 mg/dL", ["HDL 65 mg/dL", "LDL 90 mg/dL", "TG 100 mg/dL"], "Non-HDL-C 190-219 is on the risk enhancer list.")
    ]
  });

  /* ---------------------------------------------------------------- LO 5a */
  los.push({
    id: "lo5a", label: "LO 5a", title: "Diabetes, hypertension, sleep apnea",
    objective: "Identify and recommend strategies to address additional modifiable cardiovascular risk factors, including diabetes, hypertension, obstructive sleep apnea, unhealthy alcohol use, and tobacco use. (Part a: diabetes, hypertension, OSA.)",
    slides: [
      S(36, "What is next after habits and lipids?", {
        why: "<p>This slide is the roadmap for the rest of LO 5: after lifestyle and lipids come the other modifiable risk factors, <b>diabetes, hypertension, sleep apnea, alcohol and smoking</b>. Each one damages the artery lining in its own way.</p>",
        q: [
          Q("After habits and lipids, which risk factors does the lecture address next?", "Diabetes, hypertension, sleep apnea, alcohol and smoking", ["Age, sex and family history", "Asthma and COPD", "Anemia and thyroid disease"], "The slide lists diabetes, hypertension, sleep apnea and alcohol/smoking."),
          Q("Which item on the 'what is next' list is a sleep disorder?", "Sleep apnea", ["Insomnia", "Narcolepsy", "Restless legs"], "Sleep apnea is the sleep disorder listed as a CV risk factor.")
        ]
      }),
      S(37, "Diabetes: glycemic control and diagnosis", {
        why: "<p>High glucose sugar-coats proteins in the vessel wall and LDL particles (glycation), making the lining sticky and inflamed, so diabetes speeds atherosclerosis (standard teaching). The numbers: A1c <b>5.7-6.4%</b> prediabetes, <b>≥6.5%</b> diabetes; fasting <b>≥126</b>; OGTT 2-h <b>≥200</b>; random <b>≥200 with symptoms</b>.</p>",
        q: [
          Q("What A1c defines diabetes?", "≥6.5%", ["≥5.7%", "≥7.0%", "≥8.0%"], "Diabetes is A1c of 6.5% or more."),
          Q("What A1c range defines prediabetes?", "5.7-6.4%", ["5.0-5.6%", "6.5-7.0%", "4.0-5.6%"], "Prediabetes is 5.7-6.4%."),
          Q("What fasting plasma glucose meets diabetes criteria?", "≥126 mg/dL", ["≥100 mg/dL", "≥140 mg/dL", "≥200 mg/dL"], "Fasting plasma glucose of 126 or more meets the criteria."),
          Q("A random glucose meets diabetes criteria when it is:", "≥200 mg/dL with classic symptoms", ["≥140 mg/dL without symptoms", "≥126 mg/dL at any time", "≥180 mg/dL after a meal"], "Random glucose ≥200 counts only with classic symptoms.")
        ]
      }),
      S(38, "Diabetes treatment goals", {
        why: "<p>Lower A1c protects small vessels, but pushing too hard causes hypoglycemia, which can trigger arrhythmias and falls (standard teaching). So the goal is individualized: &lt;7% for most, &lt;6.5% if it can be done safely, &lt;8% for frail, sick or short-life-expectancy patients.</p>",
        q: [
          Q("What A1c goal is appropriate for many nonpregnant adults with diabetes?", "<7%", ["<5.7%", "<6.0%", "<9%"], "Below 7% is the usual goal."),
          Q("An 84-year-old frail patient with diabetes and multiple comorbidities. A1c goal?", "A less stringent goal such as <8%", ["<6.5%", "<6.0%", "<5.7%"], "Frailty and comorbidity call for a less stringent goal like under 8%."),
          Q("When may an A1c goal below 6.5% be appropriate?", "When achievable without significant hypoglycemia or treatment burden", ["In every patient", "In frail elderly patients", "Never"], "Tighter goals are only for selected patients who can reach them safely.")
        ]
      }),
      S(39, "Diabetes: GLP-1 RA and SGLT2 inhibitors", {
        why: "<p>Some diabetes drugs protect the heart and kidneys beyond lowering sugar. SGLT2 inhibitors (the '-gliflozins') reduce HF admissions and protect the kidney; GLP-1 RAs (the '-glutides') reduce MI and stroke and cause weight loss (standard teaching). That is why they are used for ASCVD, HF or CKD even if the A1c is already at goal.</p>",
        q: [
          Q("A patient with type 2 diabetes and established ASCVD. Which drug class should be used?", "A GLP-1 RA and/or SGLT2 inhibitor with proven benefit", ["A sulfonylurea", "Insulin first", "No change if A1c is at goal"], "GLP-1 RAs and/or SGLT2 inhibitors are used in diabetics with ASCVD, HF or CKD."),
          Q("Are GLP-1 RAs or SGLT2 inhibitors indicated if the A1c is already at goal and the patient takes metformin?", "Yes, regardless of baseline A1c or metformin use", ["No, only if A1c is above 9%", "No, metformin must be stopped first", "Only in type 1 diabetes"], "The slide says they may be indicated regardless of A1c or metformin use."),
          Q("Which three conditions trigger GLP-1 RA/SGLT2 inhibitor use in type 2 diabetes?", "Established ASCVD, heart failure or CKD", ["Obesity, asthma or GERD", "Hypothyroidism, anemia or gout", "Migraine, depression or insomnia"], "The slide names ASCVD, heart failure and CKD.")
        ]
      }),
      S(40, "Features of diabetes that raise CVD risk", {
        why: "<p>The slide asks why the duration cutoff differs (≥10 years T2DM vs ≥20 years T1DM). T2DM is usually found years after it starts and comes with HTN, dyslipidemia and obesity already in place, so damage accrues faster; T1DM is diagnosed at onset, often in childhood (standard teaching). The other features (albuminuria, low eGFR, retinopathy, neuropathy, ABI &lt;0.9) all show the vessels are already damaged.</p>",
        q: [
          Q("What diabetes duration increases CVD risk in type 2 diabetes?", "≥10 years", ["≥20 years", "≥5 years", "≥30 years"], "T2DM ≥10 years and T1DM ≥20 years are the cutoffs."),
          Q("Why does T2DM need a shorter duration than T1DM to raise risk?", "T2DM is often diagnosed late, with other risk factors already present (standard teaching)", ["T2DM patients are always younger", "T1DM patients never get CAD", "T1DM causes lower glucose"], "Type 2 diabetes often goes undiagnosed for years and arrives with hypertension and dyslipidemia, so the vessels are damaged sooner (standard teaching)."),
          Q("Which UACR level raises CVD risk in diabetes?", "≥30 mg/g", ["≥3 mg/g", "≥300 mg/g only", "≥1,000 mg/g"], "UACR of 30 mg/g or more is on the slide."),
          Q("Which ABI raises CVD risk in diabetes?", "<0.9", ["1.0-1.4", ">1.4 only", "Exactly 1.0"], "An ABI under 0.9 signals PAD and raises risk.")
        ]
      }),
      S(41, "Hypertension: diagnose and treat to goal", {
        why: "<p>High pressure injures the endothelium and thickens the LV, raising both plaque and oxygen demand (standard teaching). Goal: &lt;130/80 for most, &lt;120 systolic for selected high-risk patients, adjusted for orthostasis, frailty and tolerance. Confirm with home or ambulatory readings to catch white-coat and masked hypertension.</p>",
        q: [
          Q("What is the general BP treatment goal for most adults?", "<130/80 mmHg", ["<140/90 mmHg", "<120/70 mmHg", "<150/90 mmHg"], "The slide gives a general goal below 130/80."),
          Q("In appropriate high-risk patients, what more intensive SBP target can be considered?", "<120 mmHg", ["<110 mmHg", "<140 mmHg", "<100 mmHg"], "More intensive SBP lowering below 120 can be considered."),
          Q("How should hypertension be confirmed?", "Standardized office readings plus home or ambulatory monitoring when appropriate", ["One office reading", "Only by symptoms", "Only with an echocardiogram"], "The slide says to confirm with standardized office and out-of-office readings.")
        ]
      }),
      S(42, "Obstructive sleep apnea", {
        why: "<p>The chain: airway closes → O2 drops → brain jolts awake to reopen it → sympathetic surge raises HR and BP → repeated all night → inflammation, endothelial dysfunction and daytime hypertension. OSA is a common cause of resistant hypertension and is linked to AF (standard teaching).</p>",
        q: [
          Q("What causes intermittent hypoxemia in OSA?", "Recurrent upper-airway obstruction during sleep", ["Central loss of breathing drive only", "Pulmonary embolism", "Anemia"], "Recurrent upper-airway obstruction causes repeated O2 drops."),
          Q("What does each OSA episode trigger?", "Sympathetic activation, raising heart rate and blood pressure", ["Vagal activation, lowering BP", "Deep restorative sleep", "Lower inflammation"], "Each episode triggers a sympathetic surge."),
          Q("How do brief arousals in OSA affect sleep?", "They restore breathing but fragment sleep", ["They deepen sleep", "They have no effect", "They cause the obstruction"], "Arousals reopen the airway but break up normal sleep.")
        ]
      }),
      S(43, "Untreated OSA leads to cor pulmonale", {
        why: "<p>Low O2 in the lungs makes the pulmonary arteries constrict (hypoxic vasoconstriction, standard teaching). Night after night this raises pulmonary pressure, the RV thickens to push against it, and eventually fails: <b>cor pulmonale</b> (right heart failure from a lung problem). Nightly CPAP/BiPAP prevents it.</p>",
        q: [
          Q("Untreated sleep apnea leads to which heart changes?", "RV hypertrophy and pulmonary hypertension", ["LV dilation only", "Mitral stenosis", "Aortic dissection"], "The slide says untreated OSA causes RV hypertrophy and pulmonary hypertension."),
          Q("Right heart failure from untreated sleep apnea is called:", "Cor pulmonale", ["Takotsubo", "Dressler syndrome", "Constrictive pericarditis"], "Right heart failure from a lung cause is cor pulmonale."),
          Q("What is the essential treatment for OSA on the slide?", "CPAP or BiPAP every night", ["Sleeping pills", "Supplemental oxygen during the day", "Beta blockers"], "Nightly CPAP or BiPAP is the treatment.")
        ]
      })
    ],
    review: [
      Q("A1c 6.0%. Classification?", "Prediabetes", ["Normal", "Diabetes", "Diabetes in poor control"], "5.7-6.4% is prediabetes."),
      Q("A type 2 diabetic with heart failure, A1c 6.8% on metformin. Add?", "An SGLT2 inhibitor", ["Nothing, A1c is at goal", "A sulfonylurea", "Stop metformin"], "Diabetics with HF get an SGLT2 inhibitor and/or GLP-1 RA regardless of A1c."),
      Q("A 60-year-old on BP meds has a home average of 138/84. At goal?", "No, the goal for most adults is <130/80", ["Yes, the goal is <140/90", "Yes, the goal is <150/90", "Only if she has diabetes"], "Most adults should be treated to under 130/80."),
      Q("A patient with resistant hypertension, loud snoring and daytime sleepiness. What should you look for?", "Obstructive sleep apnea", ["Hypothyroidism only", "Asthma", "GERD"], "OSA causes nightly sympathetic surges that raise BP."),
      Q("A diabetic has retinopathy and UACR 45 mg/g. What does this mean for CVD risk?", "Higher CVD risk", ["Lower CVD risk", "No change", "Only eye risk"], "Retinopathy and UACR ≥30 are features that raise CVD risk."),
      Q("Untreated OSA with low O2 at night eventually strains which ventricle?", "The right ventricle", ["The left ventricle only", "Neither", "Both atria only"], "Pulmonary hypertension from OSA strains the RV.")
    ]
  });

  /* ---------------------------------------------------------------- LO 5b */
  los.push({
    id: "lo5b", label: "LO 5b", title: "Alcohol and tobacco",
    objective: "Identify and recommend strategies to address additional modifiable cardiovascular risk factors, including diabetes, hypertension, obstructive sleep apnea, unhealthy alcohol use, and tobacco use. (Part b: alcohol, tobacco, take-home.)",
    slides: [
      S(44, "Screen for unhealthy alcohol use", {
        why: "<p>Alcohol raises BP, triglycerides and AF risk, and heavy use can cause cardiomyopathy (standard teaching). Two definitions, both lower for women: <b>binge</b> = ≥4 (women) or ≥5 (men) on one occasion; <b>heavy</b> = ≥8 (women) or ≥15 (men) per week.</p>",
        q: [
          Q("Binge drinking for women is:", "≥4 drinks on one occasion", ["≥2 drinks on one occasion", "≥8 drinks on one occasion", "≥4 drinks per week"], "Binge is ≥4 for women or ≥5 for men on one occasion."),
          Q("Heavy drinking for men is:", "≥15 drinks/week", ["≥8 drinks/week", "≥5 drinks/week", "≥30 drinks/week"], "Heavy is ≥15 a week for men and ≥8 for women."),
          Q("How does cardiovascular risk change with greater alcohol consumption?", "It increases", ["It decreases", "It stays the same", "It decreases with binge drinking"], "The slide says risk rises with more drinking, especially heavy and binge.")
        ]
      }),
      S(45, "What is one drink?", {
        pic: "<p>Picture: <b>What 5 Ounces of Wine Really Looks Like.</b> When health experts say a glass of wine is good for your health, they're talking about a 5-ounce serving. Depending on the size and shape of the glass you choose, that amount can look very different. (Five glasses of different capacities, each holding 5 oz; glass capacities about 8½, 21½, 15½, 13 and 21 ounces. © Consumer Reports.)</p>",
        why: "<p>Each standard drink holds about 14 g of alcohol (standard teaching). Big modern wine glasses make a 'glass' easily 2 drinks, and craft beers are often 7-9% ABV, so patients under-count. Ask in ounces and type, not 'glasses'.</p>",
        q: [
          Q("One standard drink of wine is:", "5 oz", ["8 oz", "12 oz", "1.5 oz"], "5 oz of wine is one drink."),
          Q("One standard drink of hard liquor is:", "1.5 oz", ["5 oz", "3 oz", "12 oz"], "1.5 oz of liquor is one drink."),
          Q("One standard drink of beer is:", "12 oz of 4-5% ABV beer", ["16 oz of any beer", "8 oz of 9% beer", "24 oz of light beer"], "12 oz of 4-5% beer is one drink.")
        ]
      }),
      S(46, "Counsel patients on alcohol", {
        why: "<p>There is no safe heart-healthy dose to recommend. For BP, the 2025 guideline goal is <b>abstinence</b>; if the patient keeps drinking, ≤1/day for women and ≤2/day for men. Women's limits are lower because they reach higher blood alcohol levels from the same dose (standard teaching).</p>",
        q: [
          Q("For BP management, what does the 2025 guideline recommend as the optimal alcohol goal?", "Abstinence", ["1 drink/day for everyone", "Red wine daily", "Up to 14 drinks/week"], "The 2025 guideline says abstinence is optimal for BP."),
          Q("If a man continues drinking, what limit does the 2025 BP guideline give?", "≤2 drinks/day", ["≤1 drink/day", "≤4 drinks/day", "≤15 drinks/day"], "Men ≤2 a day, women ≤1 a day if drinking continues.")
        ]
      }),
      S(47, "Smoking cessation at every visit", {
        why: "<p>Smoking injures the endothelium, raises LDL oxidation, lowers HDL and makes blood more likely to clot, and quitting cuts risk quickly (standard teaching). Document pack count (1 pack = 20 cigarettes), past quit attempts and other tobacco or vaping. Adjuncts <b>double</b> the quit rate, so always offer one.</p>",
        q: [
          Q("How many cigarettes are in one pack?", "20", ["10", "25", "40"], "One pack is 20 cigarettes."),
          Q("By how much does using a cessation adjunct increase success?", "It doubles the success rate", ["It has no effect", "It increases it by 10%", "It lowers it"], "The slide says adjunct use doubles success."),
          Q("How often should smoking cessation be addressed?", "At every visit", ["Once a year", "Only if the patient asks", "Only after an MI"], "The slide says address it at every visit.")
        ]
      }),
      S(48, "Three-step model and the Five A's", {
        html: "<p><b>Smoking Cessation</b></p><table class=\"ss-table\"><tr><th>Three-Step Model</th><th>Five A's</th></tr><tr><td>Ask</td><td>Ask</td></tr><tr><td>Advise</td><td>Advise</td></tr><tr><td>Connect</td><td>Assess</td></tr><tr><td></td><td>Assist</td></tr><tr><td></td><td>Arrange follow-up</td></tr></table><ul><li>Ask all patients about tobacco use</li><li>Advise quitting</li></ul>",
        why: "<p>Both models start the same way: <b>Ask</b> every patient, <b>Advise</b> every smoker to quit. The short model then <b>Connects</b> them to help (quitline, program). The Five A's do it all in-office: <b>Assess</b> readiness, <b>Assist</b> (plan + medication), <b>Arrange</b> follow-up.</p>",
        q: [
          Q("What are the steps of the Three-Step Model?", "Ask, Advise, Connect", ["Ask, Assess, Arrange", "Advise, Assist, Arrange", "Ask, Treat, Refer"], "The three steps are Ask, Advise and Connect."),
          Q("What is the last of the Five A's?", "Arrange follow-up", ["Assist", "Assess", "Advise"], "The Five A's end with arranging follow-up."),
          Q("Which step comes right after Advise in the Five A's?", "Assess", ["Assist", "Arrange", "Ask"], "The order is Ask, Advise, Assess, Assist, Arrange.")
        ]
      }),
      S(49, "Nicotine replacement adjuncts", {
        why: "<p>Patch = steady background level (dose by amount smoked: &gt;½ ppd 21 mg, &lt;½ ppd 14 mg). Gum/lozenge/inhaler = fast rescue for cravings (dose by time to first cigarette: ≤30 min after waking means higher dependence, so 4 mg). Acidic food and drink block nicotine absorption through the mouth, hence no eating 15 minutes before or after (standard teaching). Removing the patch at night avoids vivid dreams and insomnia (standard teaching).</p>",
        q: [
          Q("A patient smokes 1 pack per day. Starting nicotine patch dose?", "21 mg", ["14 mg", "7 mg", "42 mg"], "More than ½ pack a day starts at 21 mg."),
          Q("A patient smokes his first cigarette 10 minutes after waking. Nicotine gum dose?", "4 mg", ["2 mg", "1 mg", "8 mg"], "First tobacco within 30 minutes of waking means the 4 mg dose."),
          Q("Which precaution applies to nicotine gum or lozenges?", "Avoid eating 15 minutes before and after", ["Take only with meals", "Avoid in people who walk", "Remove at night"], "Patients should not eat 15 minutes before or after gum or lozenges."),
          Q("When should the nicotine inhaler be avoided?", "With nasal or airway disease", ["With hypertension", "With diabetes", "With obesity"], "Local irritation makes the inhaler a poor choice with nasal/airway disease.")
        ]
      }),
      S(50, "Bupropion and varenicline", {
        why: "<p>Bupropion lowers the seizure threshold, so avoid it with seizures or eating disorders (electrolyte shifts) and with MAOIs (standard teaching on mechanism). Varenicline is a partial agonist at the nicotine receptor: it takes the edge off cravings and blunts the reward of smoking; it is renally cleared, so adjust for CKD (standard teaching on mechanism).</p>",
        q: [
          Q("Bupropion should be avoided in patients with:", "A history or risk of seizures", ["Hypertension", "Asthma", "Hypothyroidism"], "Bupropion lowers the seizure threshold, so avoid it with seizures or seizure risk."),
          Q("Which cessation drug commonly causes nausea and vivid dreams?", "Varenicline (Chantix)", ["Bupropion", "Nicotine patch", "Nicotine gum"], "Nausea and vivid dreams are classic for varenicline."),
          Q("Which cessation drug must be dose adjusted for CKD?", "Varenicline", ["Bupropion", "Nicotine gum", "Nicotine inhaler"], "The slide says varenicline needs CKD dose adjustment."),
          Q("Bupropion should not be combined with which drug class?", "MAOIs", ["Statins", "ACE inhibitors", "Antacids"], "The slide says avoid bupropion with MAOIs.")
        ]
      }),
      S(51, "Take-home messages for CAD prevention", {
        why: "<p>Two messages. Lifestyle change has the biggest impact on ASCVD risk but is the hardest, so keep chipping away with small achievable goals. And the 'gateway diseases' (<b>hypertension, dyslipidemia, diabetes</b>) must be controlled to goal.</p>",
        q: [
          Q("According to the take-home slide, what makes the greatest impact on ASCVD risk?", "Lifestyle changes", ["Statins alone", "Aspirin", "CABG"], "The slide says lifestyle changes make the greatest impact."),
          Q("Which three 'gateway diseases' must be controlled to prevent CAD?", "Hypertension, dyslipidemia and diabetes", ["Asthma, COPD and OSA", "Obesity, gout and GERD", "AF, HF and stroke"], "The slide names hypertension, dyslipidemia and diabetes.")
        ]
      })
    ],
    review: [
      Q("A woman drinks 2 large glasses of wine (10 oz each) on Saturday night. How many standard drinks is that?", "4 drinks, which is binge drinking for a woman", ["2 drinks, within limits", "1 drink", "10 drinks"], "Each 10-oz glass is two 5-oz drinks, and 4 drinks on one occasion is binge for women."),
      Q("A smoker of ½ ppd who smokes the first cigarette 1 hour after waking. Patch and gum doses?", "14 mg patch and 2 mg gum", ["21 mg patch and 4 mg gum", "21 mg patch and 2 mg gum", "7 mg patch and 4 mg gum"], "½ ppd or less is 14 mg, and first tobacco after 30 minutes is 2 mg gum."),
      Q("A smoker with a seizure disorder wants a pill to quit. Best choice?", "Varenicline", ["Bupropion", "No medication is safe", "Phenytoin"], "Bupropion lowers the seizure threshold, leaving varenicline."),
      Q("A man with hypertension who wants to keep drinking. Advice per the 2025 guideline?", "Abstinence is best; if not, ≤2 drinks/day", ["Up to 4 drinks/day", "Red wine is protective", "No limit"], "Abstinence is optimal, otherwise ≤2 a day for men."),
      Q("Which smoking cessation counseling model includes 'Connect'?", "The Three-Step Model", ["The Five A's", "The CAGE model", "The PREVENT model"], "Ask, Advise, Connect is the Three-Step Model."),
      Q("A patient on varenicline with eGFR 25. What is needed?", "A dose adjustment for CKD", ["No change", "Switch to an MAOI", "Double the dose"], "Varenicline must be dose adjusted in CKD.")
    ]
  });

  /* ---------------------------------------------------------------- LO 6 */
  los.push({
    id: "lo6", label: "LO 6", title: "Aspirin in primary prevention",
    objective: "Explain the role of aspirin in primary prevention of ASCVD, including patient selection and the importance of balancing cardiovascular benefit against bleeding risk.",
    slides: [
      S(52, "Aspirin for primary prevention: use selectively", {
        why: "<p>Aspirin blocks platelet clumping, which prevents MIs but also causes GI and brain bleeds (standard teaching). In people who have never had an event, the small benefit is roughly cancelled by bleeding, and bleeding risk climbs with age. So: not routine; maybe ages <b>40-70</b> with high CV risk and <b>low</b> bleeding risk; not routinely &gt;70 or with high bleeding risk. Secondary prevention is different: patients with ASCVD do get aspirin (standard teaching).</p>",
        q: [
          Q("Is routine low-dose aspirin recommended for most adults without ASCVD?", "No", ["Yes, for everyone over 40", "Yes, for everyone over 70", "Yes, for all smokers"], "Routine aspirin is not recommended for most adults without established ASCVD."),
          Q("Which patient may be considered for primary-prevention aspirin?", "A 55-year-old with elevated CV risk and low bleeding risk", ["A 75-year-old with no CVD", "A 50-year-old with a prior GI bleed", "A 30-year-old with low risk"], "Aspirin may be considered in ages 40-70 with high CV risk and low bleeding risk."),
          Q("Why is aspirin not routinely started in adults older than 70 for primary prevention?", "Bleeding risk outweighs the benefit", ["It doesn't work in the elderly", "It causes hypertension", "It raises LDL"], "The decision weighs CV benefit against bleeding, and bleeding wins in older adults."),
          Q("What is the low dose of aspirin named on the slide?", "81 mg/day", ["325 mg/day", "650 mg/day", "1,000 mg/day"], "The slide says low-dose aspirin is 81 mg/day.")
        ]
      })
    ],
    review: [
      Q("A 72-year-old with high PREVENT risk and no ASCVD asks about aspirin. Advice?", "Do not routinely start it", ["Start 81 mg daily", "Start 325 mg daily", "Start only if he smokes"], "Aspirin is not routinely started for primary prevention over age 70."),
      Q("A 48-year-old with high CV risk and peptic ulcer bleeding last year. Primary-prevention aspirin?", "No, increased bleeding risk", ["Yes, 81 mg daily", "Yes, with food", "Yes, 325 mg daily"], "High bleeding risk is a reason not to start aspirin."),
      Q("What is the key principle in deciding on primary-prevention aspirin?", "Individualized balance of cardiovascular benefit versus bleeding risk", ["Give it to everyone with high LDL", "Never use it", "Use it instead of a statin"], "The slide's key takeaway is weighing benefit against bleeding for each patient.")
    ]
  });

  /* ---------------------------------------------------------------- LO 7 */
  los.push({
    id: "lo7", label: "LO 7", title: "Thomas: an individualized risk-reduction plan",
    objective: "Develop an individualized cardiovascular risk-reduction plan using patient history, risk estimates, laboratory findings, comorbidities, and patient-specific factors.",
    slides: [
      S(53, "CVD prevention example: meet Thomas", {
        pic: "<p>Photo of Thomas.</p>",
        why: "<p>Start the plan by listing risk factors as you hear them: <b>male, 52, dyslipidemia (diet-controlled), tobacco</b>. Age 52 puts him in the 30-79 PREVENT window and the 30-59 window for 30-year risk. A wellness visit is the perfect moment for primary prevention.</p>",
        q: [
          Q("At 52 with no ASCVD, which risk estimates can be done for Thomas?", "10-year and 30-year PREVENT-ASCVD", ["10-year only", "None", "Lifetime risk only"], "Ages 30-59 get both 10-year and 30-year estimates."),
          Q("Which two risk factors does Thomas bring at his first visit?", "Dyslipidemia and tobacco use", ["Diabetes and hypertension", "CKD and HIV", "Prior MI and stroke"], "His history is diet-controlled dyslipidemia and tobacco abuse.")
        ]
      }),
      S(54, "Thomas: smoking, activity, weight", {
        why: "<p>Three more problems. <b>1 ppd for 35 years = 35 pack-years.</b> His 'active job' is not the same as structured moderate exercise. <b>BMI 28 = overweight</b>, and a waist of 110 cm (&gt;102 cm in men) means central obesity, a metabolic syndrome feature (standard teaching). His worry about weight gain is a common barrier to quitting.</p>",
        q: [
          Q("Thomas smoked 1 ppd from age 17 to 52. How many pack-years?", "35", ["17", "52", "20"], "1 pack a day for 35 years is 35 pack-years."),
          Q("Thomas's BMI of 28 is classified as:", "Overweight", ["Normal", "Obese class I", "Underweight"], "BMI 25-29.9 is overweight, since normal ends at 24.9 (standard teaching)."),
          Q("What barrier to quitting does Thomas raise?", "Fear of weight gain", ["Cost of cigarettes", "Fear of withdrawal seizures", "His wife smokes"], "He worries that cutting down will make him gain weight.")
        ]
      }),
      S(55, "Thomas: advise quitting", {
        why: "<p>This is Ask → Advise in action: quitting is his <b>#1</b> intervention, because the CV benefit far outweighs a few pounds (standard teaching). He refuses an adjunct, so the plan is to cut down and keep revisiting it, since adjuncts double success.</p>",
        q: [
          Q("What is the #1 intervention for Thomas's health right now?", "Quit smoking", ["Lose weight first", "Start aspirin", "Start a statin"], "The slide says smoking cessation is his #1 intervention."),
          Q("Thomas refuses an adjunct. What should you do at future visits?", "Keep addressing cessation and offer an adjunct again", ["Never bring it up again", "Refer him to cardiology", "Prescribe varenicline anyway"], "Smoking cessation is addressed at every visit, and adjuncts double success.")
        ]
      }),
      S(56, "Thomas: exercise and labs", {
        why: "<p>Brisk walking is moderate intensity; 20 minutes most days (about 100 min/week) is a realistic start toward 150. BP 117/68 is at goal. The labs (CBC, chemistry with eGFR, fasting lipids, A1c) are exactly what PREVENT and the 'regardless of risk' groups need.</p>",
        q: [
          Q("Brisk walking is what intensity of exercise?", "Moderate", ["Light", "Vigorous", "Sedentary"], "Brisk walking (about 3-4 mph) is moderate intensity."),
          Q("Why order a chemistry panel, lipid panel and A1c for Thomas?", "To get eGFR, lipids and glycemic status for risk estimation and treatment groups", ["To diagnose CAD", "To decide on aspirin only", "To screen for cancer"], "These labs supply PREVENT inputs and show diabetes or CKD.")
        ]
      }),
      S(57, "Thomas: first labs", {
        why: "<p>Read each value. A1c 4.8% normal. TC 210 borderline, LDL 108 above desirable, <b>HDL 32 low</b>, <b>TG 398 high</b>. <b>eGFR 55 = CKD stage 3a range</b> (45-59) if it persists for 3 months (standard teaching). If confirmed, stage 3 CKD at age 40-75 means lipid-lowering therapy regardless of PREVENT. Low HDL with high TG is the classic insulin-resistance pattern (standard teaching).</p>",
        q: [
          Q("Thomas's eGFR is 55. If confirmed as stage 3 CKD, what does that mean for lipid therapy?", "Lipid-lowering therapy regardless of PREVENT risk", ["No statin until LDL ≥190", "Statins are contraindicated", "Only lifestyle change"], "Adults 40-75 with stage 3-4 CKD get therapy regardless of calculated risk."),
          Q("Thomas's triglycerides of 398 are:", "High", ["Desirable", "Borderline", "Very high"], "TG 200-499 is high."),
          Q("Thomas's HDL of 32 is:", "Low", ["Desirable", "Protective", "Borderline"], "HDL under 40 in men is low."),
          Q("Which of Thomas's first results is normal?", "A1c 4.8%", ["HDL 32", "TG 398", "eGFR 55"], "An A1c under 5.7% is normal.")
        ]
      }),
      S(58, "Thomas at 55: what do you do?", {
        why: "<p>The deck asks 'What do you do?' without an answer slide, so here is the reasoning from its own rules. <b>A1c 7.7% ≥6.5% → diabetes</b> (confirm with a repeat test, standard teaching). Diabetes at age 40-75 → <b>lipid-lowering therapy regardless of PREVENT</b>. A1c goal <b>&lt;7%</b>. Check UACR and eGFR (CKD + diabetes → GLP-1 RA/SGLT2i). Restart cessation (Ask, Advise, offer adjunct), keep exercise, and support his depression and stress. BP 120/70 is at goal.</p>",
        q: [
          Q("Thomas's A1c is now 7.7%. What does this mean?", "Diabetes range", ["Prediabetes", "Normal", "Well-controlled diabetes"], "An A1c of 6.5% or higher is diabetes range."),
          Q("Thomas, age 55, now has diabetes. Lipid-lowering therapy?", "Recommended regardless of PREVENT risk", ["Only if PREVENT ≥10%", "Only if LDL ≥190", "Not needed, LDL is 88"], "Adults 40-75 with diabetes get therapy regardless of calculated risk or LDL."),
          Q("What A1c goal fits Thomas?", "<7%", ["<5.7%", "<8%", "<9%"], "Most nonpregnant adults with diabetes aim for under 7%."),
          Q("If Thomas's eGFR stays low, which diabetes drug classes should be used?", "GLP-1 RA and/or SGLT2 inhibitor", ["Sulfonylurea only", "Insulin only", "No drug, diet only"], "Type 2 diabetes with CKD calls for GLP-1 RAs and/or SGLT2 inhibitors.")
        ]
      }),
      S(59, "Thomas: hypertension, then NSTEMI and CABG", {
        why: "<p>An ARB is a smart BP choice in a diabetic with possible CKD because it protects the kidney and reduces albuminuria (standard teaching). After his NSTEMI and CABG, Thomas crosses from primary to <b>secondary</b> prevention: high-intensity statin regardless of lipids, and no more PREVENT calculations.</p>",
        q: [
          Q("What BP goal does Thomas's ARB aim for?", "<130/80", ["<140/90", "<150/90", "<120/60"], "The slide targets under 130/80."),
          Q("After his NSTEMI and CABG, which prevention category is Thomas in?", "Secondary prevention", ["Primary prevention", "Tertiary screening", "No prevention needed"], "Established CAD means secondary prevention."),
          Q("After CABG, which statin intensity does Thomas need?", "High intensity, regardless of lipid profile", ["Moderate intensity", "Based on PREVENT score", "None if LDL <100"], "All patients with clinical ASCVD, including CABG, need a high-intensity statin."),
          Q("Why is an ARB a good BP choice for Thomas?", "It protects the kidneys in diabetes and CKD (standard teaching)", ["It raises HDL", "It lowers A1c", "It helps him quit smoking"], "ARBs reduce albuminuria and slow diabetic kidney disease, a compelling indication in Thomas (standard teaching).")
        ]
      }),
      S(60, "Take-home messages: primary prevention (1)", {
        why: "<p>Four verbs to remember: <b>start early</b>, <b>calculate</b> (10-year, plus 30-year in younger adults), <b>recognize</b> the groups treated without a calculator (LDL ≥190, diabetes, CKD 3-4), and <b>personalize</b> (family history, Lp(a), preferences).</p>",
        q: [
          Q("Why start prevention early?", "Atherosclerosis develops over time", ["Statins only work in young people", "Risk calculators only work under 40", "Plaque cannot form after 60"], "The slide says atherosclerosis builds over time, so prevention should start before short-term risk is high."),
          Q("Which conditions warrant lipid-lowering therapy without relying on calculated risk, per the take-home slide?", "Severe hypercholesterolemia, diabetes and stage 3-4 CKD", ["Obesity, smoking and HTN", "Family history only", "Low HDL only"], "The slide lists LDL ≥190, diabetes and stage 3-4 CKD.")
        ]
      }),
      S(61, "Take-home messages: primary prevention (2)", {
        why: "<p>Three more: <b>reclassify</b> with CAC when unsure, <b>treat to goals</b> (both the % LDL reduction and LDL/non-HDL targets), and <b>address every risk factor</b>: smoking, activity, nutrition, BP and diabetes.</p>",
        q: [
          Q("What tool can help resolve uncertainty about treatment?", "CAC scoring", ["Echocardiogram", "Holter monitor", "Chest x-ray"], "The take-home slide says CAC can help resolve uncertainty."),
          Q("'Treat to goals' means following:", "Both the recommended percentage LDL-C reduction and LDL-C/non-HDL-C goals", ["Only total cholesterol", "Only HDL", "Only the PREVENT score"], "The slide says follow both percent reduction and LDL/non-HDL goals.")
        ]
      })
    ],
    review: [
      Q("A 50-year-old, no ASCVD, LDL 130, eGFR 50 on two tests 3 months apart. Statin decision?", "Lipid-lowering therapy regardless of PREVENT", ["Calculate PREVENT first", "No statin until LDL ≥190", "CAC score first"], "Confirmed stage 3 CKD at 40-75 is a regardless-of-risk group."),
      Q("A 58-year-old smoker with diabetes, BP 138/86, LDL 120. Which is NOT part of a good plan?", "Daily aspirin 325 mg for primary prevention", ["Lipid-lowering therapy", "Smoking cessation with an adjunct", "BP treatment to <130/80"], "Routine aspirin is not recommended for primary prevention, and 325 mg is not the low dose."),
      Q("Thomas at 52 had TC 210, LDL 108, HDL 32, TG 398, eGFR 55, A1c 4.8%, BP 120/60. Which finding first puts him in a regardless-of-risk statin group if confirmed?", "eGFR 55 (stage 3 CKD)", ["LDL 108", "HDL 32", "BP 120/60"], "Stage 3 CKD at 40-75 qualifies regardless of PREVENT, while his LDL does not."),
      Q("Thomas restarts smoking under stress. Best next step?", "Ask, advise quitting and offer an adjunct again", ["Accept it during the crisis", "Discharge him from the practice", "Start aspirin to offset smoking"], "Cessation is addressed at every visit, and adjuncts double success."),
      Q("After Thomas's CABG, which tool no longer guides his statin?", "PREVENT-ASCVD", ["His lipid panel", "His A1c", "His BP"], "PREVENT is for primary prevention, and he now has known CVD."),
      Q("Thomas has diabetes and CKD. Which diabetes drugs fit best?", "GLP-1 RA and/or SGLT2 inhibitor", ["Sulfonylurea", "No medication", "Insulin only"], "Type 2 diabetes with CKD calls for agents with proven CV/kidney benefit.")
    ]
  });

  SlideStudy.lecture({
    id: "cad-part-2",
    title: "CAD Part II: Prevention & Risk Modification",
    short: "CAD II",
    by: "Stager",
    img: "images/cad2-slides/slide-{nn}.webp",
    los: los
  });
})();
