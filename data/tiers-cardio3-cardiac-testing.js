/* Cardio Part 3 Tiers: Cardiac Testing (Sillaman decks: stress testing, echo & telemetry, coronary angiogram), all three tiers, story format.
   Same shape and rules as data/tiers-cardio3-cad-part-1.js. Facts follow source-material/cardio-part-3/text/{stress-testing,echo-telemetry,coronary-angiogram}.md;
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
  T.units["t1|cardiac-testing"] = { chunks: [
    { id: "why-stress", title: "Why stress the heart", goal: "A stress test makes a narrowed artery show itself: symptoms, EKG changes, perfusion defects or wall motion problems.",
      pages: [
        { title: "Meet Linda", fig: { type: "patient", icon: "👩", name: "Linda, 58", line: "Chest pressure walking uphill that fades with rest. Normal EKG today.", chips: [["Risk", "HTN, smoker", "ok"], ["At rest", "feels fine", "good"], ["Pretest", "intermediate", "ok"]] },
          html: "<p>At rest, Linda's narrowed artery still carries enough blood. The problem only shows when the heart <strong>works harder</strong>. So we make it work, and watch.</p>" },
        { title: "Supply can't keep up", fig: { type: "artery", stage: "plaque", note: "Enough flow at rest, not enough under stress" },
          html: "<p>Stress testing gives <strong>physiologic evidence</strong> of a significant stenosis. It shows up as one of four things:</p>" +
            "<ul><li>symptoms (angina)</li><li>EKG changes (ST depression)</li><li>perfusion defects on nuclear imaging (MPI)</li><li>new wall motion abnormalities on echo</li></ul>" },
        { title: "Who gets one", fig: { type: "tiles", items: [["🤔", "Possible angina", "intermediate or high pretest likelihood"], ["🏥", "Chest pain, ACS ruled out", ""], ["📉", "Known CAD, new or worse symptoms", ""], ["🫀", "New HF or cardiomyopathy", ""], ["🔪", "Before elective surgery", "with cardiac conditions"], ["❌", "Screening the asymptomatic", "generally NOT indicated"]], hi: 5 },
          html: hy("A stress test diagnoses CAD and sorts risk. It is not a screening test for people without symptoms.") }
      ],
      remember: ["Stress testing shows ischemia that hides at rest.", "Four signals: symptoms, EKG changes, perfusion defects, wall motion abnormalities.", "Indicated for intermediate/high pretest likelihood angina, post-ACS rule-out, changing symptoms.", "Not for screening asymptomatic people."],
      check: [
        Q("Why do we stress the heart to find CAD?", "A narrowed artery often supplies enough at rest but not under load", ["Resting EKGs are always abnormal in CAD", "Exercise dissolves plaque", "To measure cholesterol"], "Ischemia appears when demand outruns a fixed supply."),
        Q("Which of these is NOT one of the four ways a stress test shows ischemia?", "Elevated BNP", ["ST changes on EKG", "Perfusion defect on MPI", "New wall motion abnormality on echo"], "Stress tests read symptoms, EKG, perfusion and wall motion."),
        Q("Should a healthy, asymptomatic 45-year-old get a routine stress test?", "No, screening asymptomatic people is generally not indicated", ["Yes, every year after 40", "Yes, if cholesterol is normal", "Only with a nuclear tracer"], "The deck says screening the asymptomatic is not appropriate except rare high-risk cases.")
      ],
      bank: [
        Q("A patient with acute chest pain has had ACS ruled out. Is a stress test reasonable?", "Yes", ["No, never after chest pain", "Only after 1 year", "Only if troponin is positive"], "Chest pain after ACS is excluded is a listed indication.")
      ] },

    { id: "treadmill", title: "The treadmill test", goal: "Exercise is preferred; Bruce protocol, 6-12 minutes, reach at least 85% of predicted max heart rate.",
      pages: [
        { title: "Exercise first", fig: { type: "bruce", hi: 2 },
          html: "<p>Exercise is the <strong>preferred</strong> stress. Linda walks the <strong>Bruce protocol</strong>: every stage the treadmill gets faster and steeper. Exercise time tells us her <strong>functional capacity</strong>.</p>" +
            std("Each Bruce stage lasts 3 minutes.") },
        { title: "How hard is hard enough", fig: { type: "mphr" },
          html: "<p>The test is only accurate if she reaches <strong>≥ 85% of her predicted max heart rate</strong> (220 − age). The goal is <strong>6-12 minutes</strong> of exercise, and it should be <strong>symptom limited</strong>, not stopped at 85%.</p>" },
        { title: "What a positive test looks like", fig: { type: "stseg", hi: "down" },
          html: "<p>At minute 6 Linda gets chest pressure and her EKG shows <strong>downsloping ST depression</strong>. That is ischemia.</p>" +
            hy("Exercise EKG is cheap, quick and tells you function. Its main value is excluding CAD in low-pretest patients.") }
      ],
      remember: ["Exercise is the preferred stress; Bruce protocol on a treadmill.", "Target ≥ 85% of predicted max HR (220 − age).", "Aim for 6-12 minutes, symptom limited.", "Exercise time = functional capacity."],
      check: [
        Q("What heart rate target makes an exercise stress test accurate?", "At least 85% of predicted maximum", ["50% of predicted maximum", "Exactly 100 bpm", "Any rate above resting"], "Below 85% the test may miss ischemia."),
        Q("Which treadmill protocol is used most often?", "Bruce", ["Duke", "Framingham", "Wells"], "Bruce raises speed and grade each stage."),
        Q("How long should the ideal exercise stress test last?", "6-12 minutes", ["1-2 minutes", "30-40 minutes", "Exactly 3 minutes"], "6 to 12 minutes reaches maximal metabolic demand.")
      ],
      bank: [
        Q("Predicted max heart rate for a 60-year-old is:", "160 bpm", ["220 bpm", "120 bpm", "180 bpm"], "220 minus age gives 160 (standard teaching formula).")
      ] },

    { id: "no-treadmill", title: "When the treadmill won't work", goal: "Can't exercise or abnormal baseline EKG → add imaging, use drugs: vasodilators for nuclear, dobutamine for echo.",
      pages: [
        { title: "EKGs that can't be read", fig: { type: "tiles", items: [["🧱", "LBBB", ""], ["⚡", "Ventricular pacing", ""], ["📏", "LVH", ""], ["💊", "Digoxin", ""], ["📉", "≥ 1 mm resting ST changes", ""], ["🔧", "Prior revascularization", "need to localize"]] },
          html: "<p>If the resting EKG is already abnormal, exercise ST changes mean nothing. Add <strong>imaging</strong> (nuclear or echo) instead.</p>" },
        { title: "Can't walk? Use a drug", fig: { type: "quad", x: ["Vasodilators", "Inotrope / chronotrope"], y: ["Drugs", "Best paired with"], cells: [["Adenosine, dipyridamole, regadenoson", "open the coronary arteries", "blue"], ["Dobutamine", "heart beats faster and harder", "ok"], ["Nuclear MPI", "vasodilators preferred", "blue"], ["Stress echo", "dobutamine preferred", "ok"]] },
          html: "<p>Vasodilators open healthy arteries more than narrowed ones, so the nuclear tracer shows a <strong>flow difference</strong>. Dobutamine acts like exercise, so echo can watch a wall <strong>stop moving</strong>.</p>" +
            mn("Dobutamine makes the walls <strong>move</strong>, so echo watches them move. Vasodilators change the <strong>flow</strong>, so the tracer sees the flow.") }
      ],
      remember: ["LBBB, paced, LVH, digoxin, ≥ 1 mm resting ST → add imaging.", "Can't exercise → pharmacologic stress.", "Vasodilators (adenosine, regadenoson, dipyridamole) → nuclear MPI.", "Dobutamine → stress echo."],
      check: [
        Q("A patient with LBBB needs a stress test. Plain exercise EKG is a poor choice because:", "The baseline EKG can't show new ST changes", ["LBBB patients can't walk", "LBBB is a contraindication to any stress", "LBBB always means CAD"], "An abnormal baseline hides exercise ST changes."),
        Q("Which pharmacologic agent is preferred for stress echo?", "Dobutamine", ["Adenosine", "Regadenoson", "Dipyridamole"], "Dobutamine raises demand so echo sees wall motion change."),
        Q("Which agents are preferred for nuclear perfusion (MPI) stress?", "Vasodilators like regadenoson", ["Dobutamine", "Beta blockers", "Digoxin"], "Vasodilators create a flow difference the tracer can see.")
      ],
      bank: [
        Q("Why does digoxin make an exercise EKG stress test unreliable?", "It causes baseline ST changes", ["It stops the heart rate rising", "It blocks the tracer", "It causes LBBB"], "Digoxin itself produces ST depression.")
      ] },

    { id: "nuclear", title: "Nuclear perfusion (MPI)", goal: "A tracer shows blood flow at rest and stress: defect only at stress = ischemia; defect at both = scar.",
      pages: [
        { title: "Rest and stress pictures", fig: { type: "perfusion", state: "normal" },
          html: "<p>A radioactive tracer (thallium or technetium) is taken up where blood flows. A camera (<strong>SPECT</strong> or <strong>PET</strong>) takes a picture at <strong>rest</strong> and after <strong>stress</strong>.</p>" },
        { title: "Ischemia", fig: { type: "perfusion", state: "ischemia" },
          html: "<p>Linda's scan: full at rest, a dark gap at stress. Normal at rest, reduced with stress = <strong>ischemia</strong>. That muscle is alive but starved. Fixing the artery helps.</p>" },
        { title: "Scar", fig: { type: "perfusion", state: "scar" },
          html: "<p>A gap in <strong>both</strong> pictures = <strong>prior infarct or scar</strong>. That muscle is gone.</p>" +
            mn("Reversible defect = rescue-able. Fixed defect = finished.") }
      ],
      remember: ["MPI: tracer (thallium or technetium), SPECT or PET.", "Defect at stress only = ischemia (reversible).", "Defect at rest and stress = scar (fixed).", "More sensitive and specific than exercise EKG."],
      check: [
        Q("A perfusion defect seen at stress but not at rest means:", "Ischemia", ["Old scar", "Normal study", "Artifact only"], "Flow is fine at rest but falls under stress."),
        Q("A perfusion defect seen at both rest and stress means:", "Prior infarct or scar", ["Ischemia", "Normal study", "Coronary spasm"], "No tracer reaches dead muscle in either state."),
        Q("Which tracers are used in nuclear MPI?", "Thallium or technetium", ["Iodine contrast", "Gadolinium", "Microbubbles"], "Those radionuclides are taken up by perfused muscle.")
      ],
      bank: [
        Q("Which is more sensitive for CAD: nuclear MPI or plain exercise EKG?", "Nuclear MPI", ["Plain exercise EKG", "They are identical", "Neither can detect CAD"], "MPI sensitivity is 85-90% versus 68% for exercise EKG.")
      ] },

    { id: "echo", title: "Echo: TTE and TEE", goal: "TTE is the first, quick, noninvasive look; TEE from the esophagus sees posterior structures like the mitral valve best.",
      pages: [
        { title: "Transthoracic echo", fig: { type: "probe", mode: "tte" },
          html: "<p>The <strong>TTE</strong> probe sits on the chest. It shows both ventricles' function, the EF, wall motion, hypertrophy, septal defects and all <strong>four valves</strong>. Quick, done by an echo tech, the first echo for almost everyone.</p>" },
        { title: "Transesophageal echo", fig: { type: "probe", mode: "tee" },
          html: "<p>The <strong>TEE</strong> probe goes down the esophagus, right behind the heart. Nothing in the way, so it sees <strong>posterior structures</strong> best: the <strong>mitral valve</strong>, left atrium and its appendage.</p>" },
        { title: "When to pick which", fig: { type: "vs", a: ["TTE", "good", ["Initial test for most", "Non-invasive, quick", "Echo tech"]], b: ["TEE", "blue", ["Best view of mitral valve", "LA/LAA clot before cardioversion", "Endocarditis complications, prosthetic valves, dissection", "Minimally invasive; physician"]] },
          html: hy("TTE first. TEE when TTE can't see well enough or life-threatening posterior problems are suspected.") }
      ],
      remember: ["TTE: first-line, noninvasive, quick, echo tech.", "TEE: esophagus, best for mitral valve and posterior structures.", "TEE: clot in LA appendage before cardioversion, endocarditis complications, dissection.", "Stress echo looks for new wall motion abnormalities."],
      check: [
        Q("Which valve does TEE see best?", "Mitral", ["Pulmonic", "Tricuspid", "None better than TTE"], "The mitral valve sits right in front of the esophagus."),
        Q("What is the initial echo test for most patients?", "Transthoracic echo", ["Transesophageal echo", "MUGA", "Cardiac MRI"], "TTE is quick, noninvasive and usually enough."),
        Q("Before cardioverting atrial fibrillation, which test looks for left atrial appendage clot?", "TEE", ["TTE", "Exercise stress test", "Holter monitor"], "TEE sees the posterior left atrium and its appendage.")
      ],
      bank: [
        Q("A patient with a new murmur, edema and dyspnea. Best first test for suspected valve disease?", "Echocardiogram", ["Holter monitor", "Exercise treadmill with Myoview", "EKG alone"], "Echo shows valve structure and function directly.")
      ] },

    { id: "monitors", title: "Catching rhythms", goal: "Telemetry in hospital, Holter 24-48 h, event monitor 2-4 weeks, implantable monitor up to 3 years.",
      pages: [
        { title: "Meet Rose", fig: { type: "patient", icon: "👵", name: "Rose, 66", line: "Daily \"thumping heartbeat\" with shortness of breath and fatigue.", chips: [["Palpitations", "daily", "ok"], ["Office EKG", "normal", "good"]] },
          html: "<p>Rose's palpitations come and go. You need a monitor that is on <strong>when</strong> they happen. How often symptoms occur decides which one.</p>" },
        { title: "Match the monitor to the symptom", fig: { type: "ladder", steps: [["Telemetry", "in hospital: continuous 2-3 leads; suspected arrhythmia, syncope, after treatment", "blue"], ["Holter", "24-48 h outpatient, symptom diary: daily symptoms", "good"], ["Event monitor", "2-4 weeks at home; can remove to shower: less frequent symptoms, AF burden", "ok"], ["Implantable", "up to 3 years: unexplained syncope, cryptogenic stroke", "bad"]], hi: 1 },
          html: "<p>Rose has <strong>daily</strong> symptoms, so a <strong>Holter</strong> will catch them.</p>" +
            mn("Daily → Holter. Weekly → event monitor. Rarely, with fainting or a stroke without cause → implant.") }
      ],
      remember: ["Telemetry: inpatient, 2-3 leads.", "Holter: 24-48 h, daily symptoms, symptom diary.", "Event monitor: 2-4 weeks, removable to shower.", "Implantable: up to 3 years; unexplained syncope, cryptogenic stroke."],
      check: [
        Q("Daily palpitations with a normal office EKG. Which monitor?", "24-48 hour Holter", ["Implantable loop recorder", "No monitor", "Coronary angiogram"], "Daily symptoms will appear within a day or two."),
        Q("Which monitor fits unexplained syncope or cryptogenic stroke?", "Implantable monitor", ["24-hour Holter", "Telemetry for 1 hour", "Stress echo"], "Rare events need up to 3 years of recording."),
        Q("How long does a typical event monitor record?", "2-4 weeks", ["24 hours", "3 years", "1 hour"], "Event monitors cover weeks for less frequent symptoms.")
      ],
      bank: [
        Q("Which is an indication for inpatient cardiac telemetry?", "Unexplained syncope", ["Routine knee surgery", "Stable hypertension", "Seasonal allergies"], "Telemetry is for suspected arrhythmia, syncope or monitoring treatment.")
      ] },

    { id: "cath", title: "The angiogram", goal: "Cardiac cath is the gold standard for coronary disease; radial or femoral access; ≥ 70% stenosis is flow limiting.",
      pages: [
        { title: "The gold standard", fig: { type: "coronary", blocks: [["ladp", "80%"]] },
          html: "<p>Linda's nuclear scan showed anterior ischemia. A <strong>coronary angiogram</strong> (cardiac cath) is the <strong>gold standard</strong> for diagnosing coronary atherosclerosis. Dye in the artery shows the narrowing directly, and it can be fixed (PCI) in the same sitting.</p>" },
        { title: "Getting in", fig: { type: "access", mode: "radial" },
          html: "<p>The two most common access sites are the <strong>radial</strong> (wrist) and <strong>femoral</strong> (groin) arteries. A catheter goes up the aorta to the coronary openings.</p>" },
        { title: "How tight is too tight", fig: { type: "meter", max: 100, value: 80, pin: "Linda: 80%", unit: "% stenosis", label: "Under 70% is not flow limiting and rarely needs revascularization", bands: [[70, "not flow limiting", "good"], [100, "flow limiting", "bad"]] },
          html: hy("Who goes to cath: lifestyle-limiting angina despite meds, high-risk stress test, and first-line after cardiac arrest, ACS or new symptomatic HF.") }
      ],
      remember: ["Coronary angiogram = gold standard.", "Radial and femoral are the most common access sites.", "< 70% stenosis is not flow limiting.", "First-line cath: ACS, cardiac arrest, life-threatening VT, new symptomatic HF."],
      check: [
        Q("What is the gold standard for diagnosing coronary atherosclerosis?", "Coronary angiogram", ["Exercise EKG", "Coronary calcium score", "Echocardiogram"], "Angiography shows the lumen directly."),
        Q("What are the two most common cath access sites?", "Radial and femoral arteries", ["Jugular and subclavian veins", "Carotid and brachial", "Popliteal and dorsalis pedis"], "The wrist and groin give easy arterial access."),
        Q("Stenoses below what percent are not flow limiting?", "70%", ["20%", "40%", "95%"], "Under 70% rarely needs revascularization.")
      ],
      bank: [
        Q("A patient survives sudden cardiac arrest. First test for the coronaries?", "Coronary angiogram", ["Exercise treadmill test", "Holter", "Calcium score"], "After arrest, cath is the initial test.")
      ] },

    { id: "ct", title: "CT angiogram and calcium score", goal: "CCTA sees the lumen noninvasively and rules CAD out; the calcium score measures plaque burden, not stenosis.",
      pages: [
        { title: "Two kinds of CT", fig: { type: "vs", a: ["Coronary CT angiogram", "blue", ["IV contrast, BB to slow HR, nitro", "Sees the lumen", "Intermediate risk, equivocal stress test", "Very high negative predictive value"]], b: ["Calcium score", "ok", ["No contrast", "Counts calcium = plaque burden", "CAN'T measure stenosis", "Screening: low-intermediate to intermediate risk"]] },
          html: "<p>CCTA needs a slow, regular heart: HR under 70, able to hold a breath, not too much calcium or stents.</p>" },
        { title: "Reading the calcium score", fig: { type: "meter", max: 500, unit: "Agatston", label: "0 is highly predictive of no atherosclerosis", bands: [[1, "0: none", "good"], [100, "1-99 mild", "ok"], [400, "100-399 moderate", "bad"], [500, "≥ 400 severe", "worst"]] },
          html: "<p>A score of <strong>0</strong> strongly predicts no plaque. A high score means a lot of plaque, but not where it blocks.</p>" }
      ],
      remember: ["CCTA: contrast, BB to HR 60-70, nitro; rules out CAD (NPV 95-100%).", "CCTA limits: HR > 70, irregular rhythm, can't hold breath, heavy calcium or stents.", "CAC: plaque burden, not stenosis.", "CAC 0 none, 1-99 mild, 100-399 moderate, ≥ 400 severe."],
      check: [
        Q("What can a coronary calcium score NOT tell you?", "How severe a stenosis is", ["Plaque burden", "Whether atherosclerosis is likely absent", "Overall coronary risk"], "Calcium shows plaque amount, not lumen narrowing."),
        Q("A calcium score of 250 means:", "Moderate disease", ["No disease", "Mild disease", "Severe disease"], "100 to 399 is moderate."),
        Q("Which patient is a poor CCTA candidate?", "Atrial fibrillation with HR 110", ["Sinus rhythm at 62", "Intermediate risk with equivocal stress test", "Suspected coronary anomaly"], "Fast, irregular rhythms blur the images.")
      ],
      bank: [
        Q("Why is a beta blocker given before CCTA?", "To slow the heart to about 60-70 bpm for clear images", ["To prevent contrast allergy", "To dilate the coronaries", "To lower potassium"], "Slower hearts move less during the scan.")
      ] }
  ] };

  /* =============================== TIER 2 · STANDARD DETAILS =============================== */
  T.units["t2|cardiac-testing"] = { chunks: [
    { id: "indications", title: "Every stress test indication", goal: "Know the full indication list and the features of a high-risk test.",
      pages: [
        { title: "The full list", fig: { type: "grid", cols: ["Indication", "Note"], rows: [["Possible angina", "intermediate or high pretest likelihood"], ["Acute chest pain", "after ACS is ruled out"], ["Recent ACS treated without cath", "within 3 months, if stable"], ["Known CAD", "new or worsening symptoms"], ["Valve disease", "dobutamine only"], ["New HF or cardiomyopathy", ""], ["Pre-op, elective noncardiac surgery", "with cardiac conditions"], ["New arrhythmia", ""]], hiCol: 1 },
          html: "<p>Rare screening exceptions: very high risk factor burden or high-risk occupations.</p>" },
        { title: "A high-risk test", fig: { type: "tiles", items: [["⏱️", "&lt; 5 METs", "short exercise"], ["📉", "ST depression ≥ 2 mm", ""], ["🩸", "Peak SBP &lt; 130", "or SBP falls below resting"], ["❤️", "Can't reach target HR", ""], ["😣", "Exercise-induced angina", ""], ["⚡", "Frequent ventricular ectopy", "at low workload"]] },
          html: "<p>A high-risk result sends the patient to <strong>angiography</strong>.</p>" }
      ],
      remember: ["Recent ACS without cath: stress test within 3 months if stable.", "Valve disease: dobutamine only.", "High risk: < 5 METs, ST ≥ 2 mm, SBP < 130 or falling, can't reach HR, angina, ventricular ectopy.", "High-risk test → angiogram."],
      check: [
        Q("Which blood pressure response marks a high-risk stress test?", "Systolic BP falls below the resting standing value", ["SBP rises from 130 to 170", "DBP stays the same", "SBP rises 10 mmHg"], "A falling SBP suggests the LV can't keep up."),
        Q("For valve disease, which stress agent is the only one listed?", "Dobutamine", ["Adenosine", "Regadenoson", "Exercise only"], "The deck limits valve evaluation to dobutamine."),
        Q("ST depression of what magnitude marks a high-risk test?", "2 mm or more", ["0.5 mm", "Any ST elevation in aVR", "1 mm in one lead"], "≥ 2 mm is significant ST depression.")
      ],
      bank: [
        Q("A patient with NSTEMI was managed without cath and is now stable. When can a stress test be used for risk assessment?", "Within three months", ["Never", "Only after 1 year", "During active chest pain"], "Post-ACS risk assessment is within 3 months if symptoms are stable.")
      ] },

    { id: "duke", title: "The Duke treadmill score", goal: "Time − 5 × ST mm − 4 × angina index; ≥ +5 low, −10 to +4 moderate, ≤ −11 high.",
      pages: [
        { title: "The formula", fig: { type: "eq", terms: [["Time", "min", ""], "−", ["5 × ST", "mm", "max deviation"], "−", ["4 × angina", "index", "0 none, 1 nonlimiting, 2 limiting"]] },
          html: "<p>Every minute of exercise helps. Every mm of ST deviation and any angina hurts.</p>" },
        { title: "Try it", fig: { type: "duke", t: 8, st: 1 },
          html: "<p>Deck example: 8 minutes, 1 mm ST, nonlimiting pain → 8 − 5 − 4 = <strong>−1</strong>, moderate risk.</p>" },
        { title: "The bands", fig: { type: "ladder", steps: [["≥ +5", "low risk", "good"], ["−10 to +4", "moderate risk", "ok"], ["≤ −11", "high risk", "bad"]] },
          html: mn("High scores are good here: more time, less ST, less pain.") }
      ],
      remember: ["Duke = time − 5(ST mm) − 4(angina).", "Angina index: 0 none, 1 nonlimiting, 2 limiting.", "≥ +5 low; −10 to +4 moderate; ≤ −11 high."],
      check: [
        Q("10 minutes, no ST change, no angina. Duke score and risk?", "+10, low risk", ["0, moderate", "−10, high", "+5, moderate"], "10 − 0 − 0 = +10."),
        Q("6 minutes, 2 mm ST depression, exercise-limiting angina. Duke score?", "−12, high risk", ["−4, moderate", "+6, low", "−2, moderate"], "6 − 10 − 8 = −12."),
        Q("What number is assigned to nonlimiting angina in the Duke score?", "1", ["0", "2", "5"], "None 0, nonlimiting 1, limiting 2.")
      ],
      bank: [
        Q("A Duke score of +3 is:", "Moderate risk", ["Low risk", "High risk", "Not interpretable"], "−10 to +4 is moderate.")
      ] },

    { id: "ett-limits", title: "Exercise EKG: limits and contraindications", goal: "Sensitivity 68%, specificity 77%; misses single-vessel disease; beta blockers cause false negatives.",
      pages: [
        { title: "Strengths vs limits", fig: { type: "vs", a: ["Strengths", "good", ["Low cost, short", "Functional status", "High sensitivity in 3-vessel or left main", "Prognosis"]], b: ["Limits", "bad", ["Sens 68%, spec 77%", "Single-vessel: ~50% sensitivity", "Beta blockers → false negatives", "Abnormal baseline EKG = nondiagnostic"]] },
          html: "<p>Poor specificity in <strong>premenopausal women</strong>, LVH, digoxin, conduction delay, hypokalemia, hyperventilation, severe HTN and resting ST changes.</p>" },
        { title: "Don't stress these hearts", fig: { type: "tiles", items: [["🔥", "Unstable angina", ""], ["💧", "Decompensated HF", ""], ["⚡", "Uncontrolled arrhythmia", ""], ["🩸", "BP ≥ 200/115", ""], ["💥", "MI within 4 days", ""], ["🚪", "Severe AS", "and severe pulmonary HTN"]] },
          html: "<p>From the deck's speaker notes.</p>" }
      ],
      remember: ["Exercise EKG: sens 68%, spec 77%.", "Single-vessel ~50%, 3-vessel 85%.", "Beta blockers → false negatives (can't reach rate-pressure product).", "Don't test: UA, decompensated HF, uncontrolled arrhythmia, BP 200/115, MI < 4 days, severe AS."],
      check: [
        Q("Why can beta blockers cause a false-negative exercise test?", "The patient can't reach the target rate-pressure product", ["They cause ST elevation", "They block the tracer", "They cause LBBB"], "Without enough demand, ischemia never appears."),
        Q("Exercise EKG sensitivity is lowest for:", "Single-vessel disease", ["Left main disease", "Three-vessel disease", "Prior MI scar"], "One narrowed artery often doesn't change the EKG."),
        Q("Which is a contraindication to exercise stress testing?", "Severe symptomatic aortic stenosis", ["Mild hypertension", "Prior knee surgery", "Stable angina"], "Severe AS can collapse under exercise.")
      ],
      bank: [
        Q("In which group does exercise EKG have notoriously poor specificity?", "Premenopausal women", ["Men over 65", "Patients with three-vessel disease", "Athletes with low resting HR"], "False positives are common in premenopausal women.")
      ] },

    { id: "vasodilators", title: "Adenosine, dipyridamole, regadenoson", goal: "Contraindications: wheezing, SBP < 90, HR < 40, caffeine within 12 h, high-grade AV block.",
      pages: [
        { title: "When NOT to give a vasodilator", fig: { type: "tiles", items: [["🫁", "Active wheezing", "severe asthma or COPD"], ["📉", "SBP &lt; 90", ""], ["🐢", "HR &lt; 40", ""], ["☕", "Caffeine / xanthines &lt; 12 h", "block adenosine"], ["💊", "Dipyridamole &lt; 48 h", "Aggrenox"], ["💉", "Aminophylline &lt; 24 h", ""], ["🧱", "High-grade AV block / SSS", ""]] },
          html: "<p>The deck flags this slide: <strong>\"test question.\"</strong></p>" +
            mn("No coffee before the adenosine stress: caffeine blocks the same receptor.") },
        { title: "Regadenoson (Lexiscan)", fig: { type: "vs", a: ["Contraindications", "bad", ["2nd/3rd degree AV block without pacer", "Sinus node dysfunction without pacer", "Hypotension"]], b: ["Bonus", "good", ["Can be injected during exercise", "if the patient can't reach workload"]] },
          html: "<p>Vasodilators can be combined with <strong>low-level exercise</strong> for MPI.</p>" },
        { title: "Side effects", fig: { type: "grid", cols: ["Dipyridamole / adenosine", "Regadenoson"], rows: [["Chest pain 20%", "Dyspnea 28%"], ["Dyspnea 12%", "Headache 26%"], ["Dizziness 12%", "Tachycardia 22%"], ["Headache 12%", "Flushing 16%"], ["ST-T changes 5-8%", "PVCs 14%"], ["Nausea 3%", "Chest pain 13%, ST depression 12%"]] },
          html: "<p>Chest pain is the top adenosine side effect; dyspnea tops regadenoson.</p>" }
      ],
      remember: ["Vasodilator no-gos: wheezing, SBP < 90, HR < 40, high-grade AV block/SSS.", "Caffeine 12 h, dipyridamole 48 h, aminophylline 24 h.", "Regadenoson: avoid AV block/SND without pacer, hypotension.", "Adenosine top SE: chest pain. Regadenoson top SE: dyspnea."],
      check: [
        Q("How long before an adenosine stress test must caffeine be avoided?", "12 hours", ["1 hour", "48 hours", "1 week"], "Xanthines block adenosine receptors."),
        Q("Which patient should NOT get adenosine stress?", "Active wheezing from COPD", ["LBBB", "On digoxin", "Unable to walk"], "Adenosine can trigger bronchospasm."),
        Q("Which drug must be stopped 48 hours before vasodilator stress?", "Dipyridamole (Aggrenox)", ["Aspirin", "Atorvastatin", "Metoprolol"], "Recent dipyridamole is listed with a 48-hour window.")
      ],
      bank: [
        Q("Most common side effect of regadenoson in the deck?", "Dyspnea", ["Nausea", "Bradycardia", "Rash"], "Dyspnea (28%) leads the list.")
      ] },

    { id: "dobutamine", title: "Dobutamine stress", goal: "Beta-1 agonist that raises rate and contractility; avoid in unstable angina, recent MI, severe AS, HCM, dissection.",
      pages: [
        { title: "How it works", fig: { type: "flow", steps: ["Synthetic catecholamine", "β1 stimulation", "↑ heart rate (chronotropy)", "↑ contractility (inotropy)", "demand rises like exercise"] },
          html: "<p><strong>Preferred</strong> pharmacologic agent for stress echo, and the choice when vasodilators are contraindicated (like active asthma) or valves need evaluating.</p>" },
        { title: "Contraindications", fig: { type: "tiles", items: [["🔥", "Unstable angina", ""], ["💥", "Recent MI", ""], ["🩸", "Hypo- or hypertension", ""], ["⚡", "Tachyarrhythmias", ""], ["🚪", "Symptomatic severe AS", ""], ["🧱", "HCM", ""], ["🎈", "Aortic dissection / big aneurysm", ""]] },
          html: "<p>Side effects in about <strong>75%</strong>: ST depression 33%, chest pain 31%, palpitations 29%, headache, flushing, dyspnea 14% each, significant arrhythmias 8-10%.</p>" }
      ],
      remember: ["Dobutamine: β1 → ↑ HR and contractility.", "Preferred for stress echo; use when vasodilators are contraindicated.", "Avoid: UA, recent MI, BP extremes, tachyarrhythmias, severe AS, HCM, dissection.", "Side effects in ~75%; arrhythmias 8-10%."],
      check: [
        Q("A patient with active asthma can't exercise. Which stress agent fits?", "Dobutamine", ["Adenosine", "Dipyridamole", "Regadenoson"], "Vasodilators can cause bronchospasm; dobutamine doesn't."),
        Q("Dobutamine stimulates which receptor?", "β1", ["α1", "Adenosine A2A", "Muscarinic M2"], "β1 raises rate and contractility."),
        Q("Which is a contraindication to dobutamine stress?", "Hypertrophic cardiomyopathy", ["LBBB", "Asthma", "Digoxin use"], "More squeeze worsens HCM outflow obstruction.")
      ],
      bank: [
        Q("About what fraction of patients have side effects from dobutamine stress?", "About 75%", ["About 5%", "About 25%", "Nearly 100%"], "The deck says side effects occur in roughly 75%.")
      ] },

    { id: "echo-views", title: "Echo windows and modes", goal: "Parasternal, apical, subcostal windows; apical 4-chamber for EF, 5-chamber for the aortic outflow, IVC for volume.",
      pages: [
        { title: "Three windows", fig: { type: "grid", cols: ["Window", "Best for"], rows: [["Parasternal long axis", "RV/LV size and contractility, mitral and aortic valves"], ["Parasternal short axis", "aortic valve level, mitral level, papillary muscles"], ["Apical 4-chamber", "all 4 chambers; <strong>Simpson EF</strong>"], ["Apical 5-chamber", "<strong>aortic outflow tract: measures AS</strong>"], ["Apical 2-chamber", "anterior and inferior LV walls"], ["Subcostal", "only window in some ventilated patients; <strong>IVC = volume status</strong>"]], hiCol: 1 },
          html: "<p>The subcostal window is also called subxiphoid.</p>" },
        { title: "Echo modes", fig: { type: "tiles", items: [["📏", "M-mode", "a tracing: chamber size, wall thickness"], ["🔊", "Doppler", "flow through chambers and valves"], ["🌈", "Color Doppler", "colors show flow direction"], ["🎞️", "2-D", "real-time structure and motion"], ["🧊", "3-D", "depth; useful for CT surgeons"]] },
          html: "<p>A bubble study (agitated saline) confirms an <strong>ASD or PFO</strong>.</p>" }
      ],
      remember: ["Windows: parasternal, apical, subcostal.", "Apical 4-chamber: Simpson EF.", "Apical 5-chamber: aortic outflow, AS.", "Subcostal IVC: volume status.", "Bubble study: ASD, PFO."],
      check: [
        Q("Which echo view is best for measuring aortic stenosis?", "Apical 5-chamber", ["Apical 2-chamber", "Subcostal IVC", "Parasternal short axis at the papillary muscles"], "It lines the Doppler beam up with the aortic outflow."),
        Q("Which echo finding estimates volume status?", "IVC diameter and its respiratory variation", ["Mitral leaflet thickness", "Aortic root size", "Longitudinal strain"], "A full, non-collapsing IVC means high volume."),
        Q("A bubble study is used to confirm:", "PFO or ASD", ["Aortic stenosis", "Pericardial effusion", "LV thrombus"], "Bubbles crossing to the left side show a shunt.")
      ],
      bank: [
        Q("Which echo mode uses colors to show the direction of blood flow?", "Color Doppler", ["M-mode", "3-D echo", "2-D echo"], "Color codes flow toward or away from the probe.")
      ] },

    { id: "tee-muga", title: "TEE safety and MUGA", goal: "Absolute TEE contraindication: prior esophagectomy; watch for perforation and methemoglobinemia. MUGA measures EF precisely.",
      pages: [
        { title: "TEE: who can't, what can go wrong", fig: { type: "vs", a: ["Contraindications", "bad", ["<strong>Absolute</strong>: prior esophagectomy", "Relative: esophageal tear, bleed or stricture", "Coagulopathy, low platelets", "Zenker's diverticulum, AMS", "Severe cervical arthritis"]], b: ["Complications", "ok", ["Esophageal perforation", "GI bleed (platelets &lt; 50k)", "Pharyngeal hematoma", "Methemoglobinemia: benzocaine spray", "Minor: bronchospasm, hypoxia, NSVT, AF"]] },
          html: "<p>Methemoglobinemia comes from the <strong>topical benzocaine</strong> used to numb the throat.</p>" },
        { title: "MUGA scan", fig: { type: "flow", steps: ["Label red cells with a tracer", "gamma camera over the chest", "count blood in the LV each beat", "very accurate, reproducible EF"] },
          html: "<p><strong>Preferred technique for a precise LVEF</strong>. Body habitus doesn't limit it. Radiation about <strong>620 mrem</strong> (CXR 10, CT chest 700). Contraindicated in pregnancy and lactation.</p>" }
      ],
      remember: ["TEE absolute contraindication: prior esophagectomy.", "TEE complications: perforation, bleeding, hematoma, methemoglobinemia (benzocaine).", "MUGA: labeled RBCs, most accurate EF.", "MUGA: ~620 mrem; not in pregnancy or lactation."],
      check: [
        Q("What is the absolute contraindication to TEE?", "Prior esophagectomy", ["Atrial fibrillation", "Prosthetic valve", "Age over 80"], "There is no normal esophagus to pass the probe through."),
        Q("Which TEE complication comes from the throat-numbing spray?", "Methemoglobinemia", ["Esophageal perforation", "Atrial fibrillation", "Pharyngeal hematoma"], "Topical benzocaine can oxidize hemoglobin."),
        Q("Which test is preferred for a very accurate, reproducible LVEF?", "MUGA scan", ["Exercise EKG", "Calcium score", "Holter"], "MUGA counts labeled blood in the ventricle.")
      ],
      bank: [
        Q("MUGA is contraindicated in:", "Pregnancy", ["Obesity", "Atrial fibrillation", "Prior CABG"], "It uses radiation, about 620 mrem.")
      ] },

    { id: "cath-prep", title: "Cath: before and after", goal: "Hold ACEi/ARB/diuretics the morning of, INR < 1.5, metformin day of and 48 h after; femoral site within 3 cm of the ligament.",
      pages: [
        { title: "Before", fig: { type: "tiles", items: [["💊", "ACEi, ARB, diuretics", "may hold the morning of"], ["🩸", "Anticoagulation held", "INR &lt; 1.5"], ["🍬", "Metformin", "hold day of + 48 h after"], ["🌙", "NPO after midnight", ""], ["😌", "Shave, sedative", ""]], hi: 2 },
          html: "<p>Contrast plus metformin risks <strong>lactic acidosis</strong> if the kidneys are hit (standard teaching for why).</p>" },
        { title: "The femoral rule", fig: { type: "groin" },
          html: "<p>Stick no more than <strong>3 cm below the inguinal ligament</strong>. Too <strong>high</strong> → retroperitoneal bleed. Too <strong>low</strong> → pseudoaneurysm.</p>" +
            mn("High = hidden bleed (retroperitoneum). Low = lump (pseudoaneurysm).") },
        { title: "After", fig: { type: "flow", vertical: true, steps: ["Sheath stays until heparin wears off (~4 h after last dose)", "Hourly vitals, 30-min groin checks", "Pull sheath + hold pressure ~20 min", "Bed rest 6 h", "No lifting &gt; 10 lb or hard exercise for 1 week"] },
          html: "<p>Vitals every 15 min for 1 h, every 30 min for 3 h, every 4 h for 24 h.</p>" }
      ],
      remember: ["Hold ACEi/ARB/diuretics morning of; anticoagulation to INR < 1.5.", "Metformin: day of + 48 h after.", "Femoral ≤ 3 cm below inguinal ligament: high → RP bleed, low → pseudoaneurysm.", "Sheath out ~4 h after heparin; 20 min pressure; 6 h bed rest; no lifting > 10 lb for 1 week."],
      check: [
        Q("How long after a cath is metformin held?", "48 hours", ["2 hours", "1 week", "Not held"], "The deck says hold the day of and 48 hours after."),
        Q("A femoral puncture made too high risks:", "Retroperitoneal bleeding", ["Pseudoaneurysm", "AV fistula only", "Radial artery spasm"], "Above the ligament, bleeding tracks into the retroperitoneum."),
        Q("What INR is required before a cath?", "Below 1.5", ["Below 3.0", "Exactly 2.5", "Above 2.0"], "Anticoagulation is held until INR is under 1.5.")
      ],
      bank: [
        Q("How long is bed rest after femoral sheath removal?", "6 hours", ["30 minutes", "24 hours", "3 days"], "The deck lists 6 hours of bed rest.")
      ] },

    { id: "cath-risks", title: "Cath: who, who not, what goes wrong", goal: "Relative contraindications like renal failure, GI bleed, infection; complications from death 0.1% to pseudoaneurysm; contrast allergy prep.",
      pages: [
        { title: "Relative contraindications", fig: { type: "tiles", items: [["🫘", "Acute renal failure", ""], ["🩸", "Active GI bleed, severe anemia, coagulopathy", ""], ["🌡️", "Fever, active infection", "aortic valve endocarditis"], ["🧠", "Acute stroke", ""], ["💧", "Decompensated HF, pulmonary edema", ""], ["⚠️", "Contrast anaphylaxis, digoxin toxicity", "refuses PCI"]] },
          html: "<p>All are <strong>relative</strong>: in an emergency the cath may still go ahead.</p>" },
        { title: "Complications", fig: { type: "grid", cols: ["Complication", "When / how often"], rows: [["Death, MI", "0.1% each"], ["Stroke", "0.4% during PCI"], ["Dissection, hematoma, thrombosis/embolism", "acute"], ["Pseudoaneurysm, AV fistula", "late"], ["Retroperitoneal hemorrhage", ""], ["Arrhythmia, contrast allergy, AKI", ""]], hiCol: 1 },
          html: "<p>Contrast allergy prep: <strong>prednisone 50 mg at 13, 7 and 1 h</strong> before, plus <strong>diphenhydramine 50 mg 1 h</strong> before.</p>" }
      ],
      remember: ["Relative CIs: ARF, GI bleed, infection, stroke, severe anemia/HTN, decompensated HF, contrast anaphylaxis, coagulopathy.", "Death 0.1%, MI 0.1%, stroke 0.4% (PCI).", "Late vascular: pseudoaneurysm, AV fistula.", "Contrast allergy: prednisone 50 mg at 13, 7, 1 h + Benadryl 50 mg at 1 h."],
      check: [
        Q("Contrast allergy prep before cath uses prednisone 50 mg at:", "13, 7 and 1 hour before", ["Only 1 hour before", "24 and 12 hours before", "After the procedure"], "Three doses spread over 13 hours blunt the reaction."),
        Q("Which vascular complication appears LATE after cath?", "Pseudoaneurysm", ["Acute dissection", "Acute thrombosis", "Hematoma during the case"], "Pseudoaneurysm and AV fistula are listed as late."),
        Q("What is the risk of death during diagnostic cath per the deck?", "About 0.1%", ["About 5%", "About 1%", "About 10%"], "Death and MI are each about 0.1%.")
      ],
      bank: [
        Q("Which is a relative contraindication to coronary angiogram?", "Acute renal failure", ["Stable angina", "Prior CABG", "Hyperlipidemia"], "Contrast can worsen acute kidney injury.")
      ] },

    { id: "rhc", title: "Right heart cath", goal: "A Swan-Ganz catheter measures CVP, right heart and PA pressures, wedge pressure, cardiac output and SvO₂.",
      pages: [
        { title: "Floating through the right heart", fig: { type: "rhc" },
          html: "<p>The <strong>pulmonary artery (Swan-Ganz) catheter</strong> measures pressures directly as it floats through: CVP, right-sided pressures, PA pressure, pulmonary capillary occlusion (wedge) pressure, cardiac output and mixed venous O₂.</p>" },
        { title: "When to float one", fig: { type: "tiles", items: [["❓", "Shock, volume status unknown", ""], ["🫀", "Severe cardiogenic shock", ""], ["🫁", "Pulmonary hypertension", "suspected or known"], ["👶", "Severe cardiopulmonary disease", "congenital, shunt, valves"]] },
          html: hy("Left heart cath = coronaries. Right heart cath = pressures and output.") }
      ],
      remember: ["Swan-Ganz: CVP, RA/RV, PA pressure, wedge, CO, SvO₂.", "Indications: shock with unclear volume, severe cardiogenic shock, pulmonary HTN, severe cardiopulmonary disease."],
      check: [
        Q("Which is measured directly by a pulmonary artery catheter?", "Pulmonary capillary occlusion (wedge) pressure", ["Coronary stenosis percent", "Ejection fraction by Simpson", "Calcium score"], "The balloon wedges in a PA branch to read left-sided filling pressure."),
        Q("Which is an indication for right heart cath?", "Shock with unknown volume status", ["Stable angina", "Screening for CAD", "Palpitations"], "Direct pressures sort out the type of shock."),
        Q("Another name for the pulmonary artery catheter is:", "Swan-Ganz", ["Foley", "Mynx", "Holter"], "Swan-Ganz is the classic balloon-tipped PA catheter.")
      ],
      bank: [
        Q("SvO₂ from a right heart cath stands for:", "Mixed venous oxygen saturation", ["Systemic vascular oxygen", "Stroke volume O₂ index", "Septal valve oxygen"], "SvO₂ is the O₂ saturation of blood returning to the PA.")
      ] }
  ] };

  /* =============================== TIER 3 · THE WEEDS =============================== */
  T.units["t3|cardiac-testing"] = { chunks: [
    { id: "accuracy", title: "Test accuracy numbers", goal: "Exercise EKG 68/77, MPI 85-90/~90, stress echo 84/86 (42% if HR < 85% target).",
      pages: [
        { title: "Sensitivity by test", fig: { type: "bars", items: [["Exercise EKG", 68, "sens 68%, spec 77%", "bad"], ["Stress echo", 84, "sens 84%, spec 86%", "ok"], ["SPECT MPI", 88, "sens 85-90%, spec ~90%", "good"], ["Stress echo, HR &lt; 85%", 42, "sensitivity drops to 42%", "bad"]], note: "Bar = sensitivity." },
          html: "<p>Exercise EKG sensitivity is about <strong>50% for single-vessel</strong> and <strong>85% for three-vessel</strong> disease.</p>" },
        { title: "Strengths and weak spots", fig: { type: "vs", a: ["Nuclear MPI", "blue", ["Works in almost everyone", "Quantitative; LV function and viability", "Thallium: false positives in women and obese", "Radiation, long, costly"]], b: ["Stress echo", "ok", ["No radiation, cheaper, short", "Sees valves too", "Operator dependent, not quantitative", "Poor windows in COPD; misses single-vessel"]] },
          html: "<p>Dobutamine stress echo is more sensitive than vasodilator stress echo.</p>" }
      ],
      remember: ["Exercise EKG: 68% sens, 77% spec.", "MPI: 85-90% sens, ~90% spec.", "Stress echo: 84% sens, 86% spec; 42% if HR < 85% target.", "Thallium false positives: women, obese. Echo: COPD windows, operator dependent."],
      check: [
        Q("Overall sensitivity of the exercise EKG stress test?", "About 68%", ["About 95%", "About 30%", "About 85%"], "The deck gives sensitivity 68%, specificity 77%."),
        Q("Stress echo sensitivity falls to about what when HR stays below 85% of target?", "42%", ["84%", "68%", "10%"], "Inadequate stress hides wall motion changes."),
        Q("In which patients does thallium imaging give more false positives?", "Women and obese patients", ["Young men", "Patients with LBBB only", "Athletes"], "Breast and soft tissue attenuate the signal.")
      ],
      bank: [
        Q("Which stress modality uses no radiation?", "Stress echo", ["SPECT MPI", "PET", "MUGA"], "Echo uses ultrasound.")
      ] },

    { id: "viability", title: "PET viability", goal: "PET checks perfusion and glucose metabolism to separate stunned, hibernating and dead muscle; gold standard for hibernating myocardium.",
      pages: [
        { title: "Is it worth fixing", fig: { type: "grid", cols: ["Muscle", "Perfusion", "Metabolism (glucose)", "Fix the artery?"], rows: [["Normal", "✓", "✓", ""], ["Hibernating", "↓", "✓ alive", "<strong>yes: it can recover</strong>"], ["Scar (necrotic)", "↓", "✗", "no"]], hiCol: 3 },
          html: "<p>Scarring on MPI plus wall motion problems on echo: is it a revascularization candidate? <strong>PET</strong> measures glucose uptake. Living muscle still eats sugar. PET can also identify stunned myocardium.</p>" +
            std("Hibernating = chronically underperfused, alive, recovers after revascularization; stunned = recovering after a brief ischemic hit.") }
      ],
      remember: ["PET viability: perfusion + glucose metabolism.", "Separates normal, stunned, hibernating, necrotic.", "Gold standard noninvasive test for hibernating myocardium.", "Hibernating muscle can recover with revascularization."],
      check: [
        Q("What does a PET viability scan measure besides perfusion?", "Glucose metabolism", ["Calcium content", "Wall thickness", "Electrical conduction"], "Living cells take up glucose."),
        Q("Gold standard noninvasive test for hibernating myocardium?", "PET MPI", ["Exercise EKG", "Calcium score", "TTE"], "The deck names PET as the gold standard."),
        Q("Low perfusion with preserved metabolism on PET suggests:", "Hibernating myocardium", ["Dead scar", "Normal muscle", "Pericardial effusion"], "Alive but underperfused muscle can recover.")
      ],
      bank: [
        Q("Why does finding hibernating myocardium matter?", "That muscle can recover after revascularization", ["It needs no treatment", "It means the patient needs a pacemaker", "It rules out CAD"], "Restoring flow wakes it up.")
      ] },

    { id: "ct-numbers", title: "CCTA numbers", goal: "NPV 95-100%; PPV 91-93% for left main and grafts, 60-84% elsewhere.",
      pages: [
        { title: "Good at ruling out", fig: { type: "bars", items: [["NPV, any significant CAD", 98, "95-100%", "good"], ["PPV, left main and grafts", 92, "91-93%", "ok"], ["PPV, other arteries", 72, "60-84%", "bad"]] },
          html: "<p>A clean CCTA nearly excludes significant CAD. A positive one is less certain outside the left main and grafts. CCTA is also used for suspected <strong>congenital coronary anomalies</strong>.</p>" }
      ],
      remember: ["CCTA NPV 95-100%.", "PPV 91-93% left main and grafts; 60-84% other arteries.", "Also for congenital coronary anomalies."],
      check: [
        Q("CCTA's negative predictive value for significant CAD is about:", "95-100%", ["50-60%", "70-75%", "30%"], "A normal CCTA nearly excludes disease."),
        Q("Where is CCTA's positive predictive value highest?", "Left main and bypass grafts", ["Distal small branches", "Heavily calcified segments", "Stented segments"], "PPV is 91-93% there."),
        Q("Which of these limits CCTA?", "Inability to hold breath for 5 seconds", ["Normal sinus rhythm", "No prior stents", "Heart rate of 60"], "Motion ruins the images.")
      ],
      bank: [
        Q("Positive predictive value of CCTA in non-left-main coronary arteries?", "60-84%", ["91-93%", "99%", "20-30%"], "Smaller arteries are harder to read accurately.")
      ] },

    { id: "hemostasis", title: "Closing the hole", goal: "Hand pressure, mechanical clamp, closure device (Mynx), or TR band for the wrist.",
      pages: [
        { title: "Four ways to stop the bleeding", fig: { type: "tiles", items: [["✋", "Hand-held pressure", ""], ["🗜️", "Mechanical clamp", "big sheath, heavy anticoagulation, hematoma, DAPT"], ["🧩", "Closure device (Mynx)", "↑ infection/endarteritis; avoid if hematoma"], ["⌚", "TR band", "radial access"]] },
          html: "<p>The clamp is preferred when a <strong>longer hemostasis time</strong> is expected.</p>" }
      ],
      remember: ["Mechanical clamp: larger sheaths, over-anticoagulated, hematoma, DAPT.", "Closure device: may raise local vascular complications and infection; avoid if hematoma.", "TR band: radial."],
      check: [
        Q("When is a mechanical clamp preferred for femoral hemostasis?", "On dual antiplatelet therapy with a large sheath", ["Radial access", "Small sheath, no anticoagulation", "Never"], "Clamps suit longer expected hemostasis."),
        Q("Which closure risk is noted for a Mynx-type device?", "Local infection or endarteritis", ["Methemoglobinemia", "Contrast allergy", "Heart block"], "A foreign plug can seed infection."),
        Q("Which device closes a radial access site?", "TR band", ["Mynx", "Swan-Ganz", "IABP"], "The TR band compresses the wrist artery.")
      ],
      bank: [
        Q("Should a closure device be used if a hematoma formed during the procedure?", "No, avoid it", ["Yes, always", "Only with heparin", "Only on the radial side"], "The deck says avoid closure devices with a hematoma.")
      ] },

    { id: "side-effect-numbers", title: "Pharmacologic side effect numbers", goal: "Adenosine chest pain 20%; regadenoson dyspnea 28%, headache 26%; dobutamine ST depression 33%, chest pain 31%.",
      pages: [
        { title: "Top side effects", fig: { type: "bars", items: [["Dobutamine: ST depression", 33, "33%", "bad"], ["Dobutamine: chest pain", 31, "31%", "bad"], ["Dobutamine: palpitations", 29, "29%", "ok"], ["Regadenoson: dyspnea", 28, "28%", "blue"], ["Regadenoson: headache", 26, "26%", "blue"], ["Regadenoson: tachycardia", 22, "22%", "blue"], ["Adenosine: chest pain", 20, "20%", "ok"]] },
          html: "<p>Dobutamine causes side effects in about 75% overall, with significant arrhythmias in 8-10%.</p>" }
      ],
      remember: ["Dobutamine: ST depression 33%, chest pain 31%, palpitations 29%.", "Regadenoson: dyspnea 28%, headache 26%, tachycardia 22%.", "Adenosine/dipyridamole: chest pain 20%."],
      check: [
        Q("Most common side effect of dobutamine stress per the deck?", "Ischemic ST depression (33%)", ["Rash", "Bradycardia", "Hypoglycemia"], "ST depression 33% edges out chest pain 31%."),
        Q("Most common side effect of adenosine/dipyridamole?", "Chest pain (20%)", ["Nausea (3%)", "Flushing (50%)", "Bradycardia (40%)"], "Chest pain leads at 20%."),
        Q("Which side effect is listed for regadenoson but not adenosine in the deck?", "Tachycardia", ["Chest pain", "Dyspnea", "Headache"], "Tachycardia (22%) appears only in the regadenoson list.")
      ],
      bank: [
        Q("Rate of significant arrhythmias with dobutamine stress?", "8-10%", ["Under 1%", "50%", "33%"], "The deck lists 8-10%.")
      ] }
  ] };
})();
