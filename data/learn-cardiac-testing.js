/*
  Cardiac Testing "from zero" lessons (engine: learn-path.js, figures: cardio3-learn.js).
  Same visual step-by-step style as the Cardiac Surgery path (Anna, 2026-11-16). Facts follow Sillaman's three decks
  (source-material/cardio-part-3/text/stress-testing.md, echo-telemetry.md, coronary-angiogram.md); anything not on the
  slides is marked "(standard teaching)". Analogies are teaching aids.
  Lesson ids (ctl-*) are progress keys: never rename. Checks: K(prompt, answer, [wrong], why).
*/
(function () {
  "use strict";
  function K(prompt, answer, wrong, why) { return { prompt: prompt, answer: answer, wrong: wrong, why: why }; }
  function hy(x) { return '<div class="box-hy"><span class="lbl">Key idea</span>' + x + "</div>"; }
  function an(x) { return '<div class="box-mnemonic"><span class="lbl">Picture it</span>' + x + "</div>"; }
  function mn(x) { return '<div class="box-mnemonic"><span class="lbl">Mnemonic</span>' + x + "</div>"; }
  function std(x) { return '<div class="box-fix"><span class="lbl">Standard teaching</span>' + x + "</div>"; }
  function obj(id, mode, label, note) {
    return { label: label, note: note, objective: { course: "cardio-part-3", lecture: "cardiac-testing", mode: mode, id: id } };
  }

  var parts = [
    { id: "p1", title: "Part 1 · Stress testing", blurb: "Why stressing the heart uncovers a narrowed artery, the treadmill and how to read it, then imaging and drug stress for the patients a treadmill can't answer." },
    { id: "p2", title: "Part 2 · Echo and rhythm monitors", blurb: "Ultrasound from the chest and from the esophagus, the MUGA scan, and which monitor to use for which rhythm question." },
    { id: "p3", title: "Part 3 · The cath lab and CT", blurb: "The gold-standard angiogram: who gets one, the prep, the access site, the complications, the right heart cath, then CT angiography and the calcium score." }
  ];

  var lessons = [
    /* ---------------- 1 ---------------- */
    {
      id: "ctl-why-stress", part: "p1", title: "Why we stress the heart", goal: "A narrowed artery is fine at rest and only shows itself when demand goes up.",
      pages: [
        { title: "Fine at rest, short on demand", fig: { type: "artery", stage: "plaque", note: "A 70% narrowing still lets enough blood through at rest. Exercise needs more, and this pipe can't deliver it." },
          html: "<p>A partly blocked coronary artery usually carries <strong>enough blood at rest</strong>. The trouble starts when the heart works harder and needs more oxygen.</p>" +
            "<p>So a resting EKG can look normal in someone with serious CAD. A <strong>stress test</strong> raises the heart's demand on purpose, while we watch, to see whether the supply keeps up.</p>" +
            an("A narrow road is fine at 3 a.m. Rush hour shows you the bottleneck. A stress test is <strong>rush hour on purpose</strong>.") },
        { title: "Four ways ischemia shows itself", fig: { type: "tiles", items: [["😣", "Symptoms", "chest pain, dyspnea"], ["📈", "EKG changes", "ST depression"], ["☢️", "Perfusion defects", "MPI: a gap in tracer uptake"], ["🫀", "Wall motion abnormalities", "echo: a segment stops squeezing"]] },
          html: "<p>The deck's definition: stress testing gives <strong>physiologic evidence</strong> of a significant stenosis by showing one of:</p>" +
            "<ul><li><strong>symptomatic changes</strong>,</li><li><strong>EKG changes</strong>,</li><li><strong>myocardial perfusion defects</strong> (MPI),</li><li><strong>regional wall motion abnormalities</strong> (echo).</li></ul>" +
            hy("Every stress test is one <strong>stressor</strong> (exercise or a drug) plus one or more <strong>readouts</strong> (EKG, nuclear pictures, or echo).") },
        { title: "Who should get one", fig: { type: "tiles", items: [["❓", "Symptoms suggesting angina", "with intermediate or high pre-test likelihood"], ["✅", "Chest pain after ACS ruled out", ""], ["🩹", "Recent ACS treated without cath", "risk check within 3 months if stable"], ["⬆️", "Known CHD, new or worse symptoms", ""], ["🎵", "Valve disease", "dobutamine only"], ["💔", "New HF or cardiomyopathy", ""], ["🔪", "Pre-op for non-cardiac surgery", "patients with cardiac conditions"], ["💓", "New arrhythmias", ""]] },
          html: "<p>The purpose: help <strong>diagnose</strong> coronary heart disease and <strong>assess risk</strong>.</p>" +
            hy("<strong>Screening people without symptoms is generally NOT indicated.</strong> Rare exceptions: very high risk-factor burden, or high-risk jobs such as <strong>airline pilots</strong>.") }
      ],
      checks: [
        K("Why can a resting EKG be normal in a patient with significant CAD?", "A narrowed artery often supplies enough blood at rest", ["CAD never changes the EKG", "The EKG only shows the right heart", "Plaque only forms during exercise"], "Ischemia appears when demand rises, which is why we stress the heart."),
        K("Which is NOT one of the four ways a stress test shows ischemia?", "A high calcium score", ["ST changes on the EKG", "A perfusion defect on MPI", "A new wall motion abnormality on echo"], "The four readouts are symptoms, EKG changes, perfusion defects and wall motion abnormalities."),
        K("A healthy 45-year-old accountant with no symptoms asks for a screening stress test. Indicated?", "Generally no: screening asymptomatic patients is not indicated", ["Yes, everyone over 40 needs one", "Yes, but only with dobutamine", "Only if he drinks coffee"], "Asymptomatic screening is reserved for rare cases like very high risk or airline pilots.")
      ],
      remember: [
        "Stress testing helps <strong>diagnose CHD and assess risk</strong>.",
        "Ischemia shows as <strong>symptoms, EKG changes, perfusion defects (MPI), or wall motion abnormalities (echo)</strong>.",
        "Indications: possible angina (intermediate/high pre-test likelihood), chest pain after ACS ruled out, recent conservatively treated ACS, known CHD with change, valve disease (dobutamine), new HF, pre-op, new arrhythmias.",
        "<strong>Not</strong> for screening asymptomatic people (exceptions: very high risk, airline pilots)."
      ],
      practice: [
        obj("01-stress-indications", "learn", "Lecture: stress test indications", "The deck's cards on why and when."),
        obj("01-stress-indications", "apply", "Apply: should this patient get one?", "Short cases.")
      ]
    },

    /* ---------------- 2 ---------------- */
    {
      id: "ctl-treadmill", part: "p1", title: "The treadmill test", goal: "Walk the Bruce protocol for 6 to 12 minutes and pass 85% of the predicted max heart rate.",
      pages: [
        { title: "Exercise is the preferred stress", fig: { type: "tiles", items: [["😣", "Symptoms", ""], ["💓", "Heart rate response and recovery", ""], ["🩸", "Blood pressure response", ""], ["📈", "EKG response", ""], ["⚡", "Arrhythmia", ""], ["⏱", "Exercise duration", "= functional capacity"]] },
          html: "<p>Exercise is the <strong>preferred mode</strong> of stress testing, because it's what the heart actually does in life, and it tells you so much at once.</p>" +
            hy("How long the patient can walk is information in itself: <strong>exercise duration = functional capacity</strong>.") },
        { title: "The Bruce protocol", fig: { type: "bruce", hi: 3 },
          html: "<p>Most treadmill tests use the <strong>Bruce protocol</strong>. Each stage lasts <strong>3 minutes</strong>, and at every stage the belt gets <strong>faster and steeper</strong>. Stage 1 is 1.7 mph at a 10% grade.</p>" +
            "<p>The <strong>goal is 6 to 12 minutes</strong> of exercise, enough to reach maximal metabolic demand. The test is <strong>symptom limited</strong>: it doesn't just stop at a heart-rate number.</p>" +
            "<p>For frail patients, the <strong>Modified Bruce</strong> adds two easier stages first (0% and 5% grade at 1.7 mph).</p>" },
        { title: "The 85% rule", fig: { type: "mphr" },
          html: "<p>The test is only accurate if the heart works hard enough. The patient must reach <strong>more than 85% of the predicted maximal heart rate (PMHR)</strong>.</p>" +
            "<p>If they don't, a \"normal\" result means nothing: the artery was never really challenged.</p>" +
            hy("<strong>Beta blockers</strong> cause <strong>false negatives</strong>: the heart rate and BP can't rise enough (the rate pressure product isn't reached).") },
        { title: "Good at ruling out, weak alone", fig: { type: "bars", items: [["Overall sensitivity", 68, "68%", "ok"], ["Overall specificity", 77, "77%", "ok"], ["1-vessel disease", 50, "50%", "bad"], ["3-vessel disease", 85, "85%", "good"]], note: "Slide 10." },
          html: "<p><strong>Strengths:</strong> low cost, short, shows functional status, <strong>high sensitivity for 3-vessel or left main disease</strong>, useful prognosis.</p>" +
            "<p><strong>Limits:</strong> misses about half of single-vessel disease; not diagnostic with an abnormal baseline EKG (digoxin, LVH, WPW); poor specificity in premenopausal women, LVH, digoxin, IVCD, hypokalemia, hyperventilation, severe HTN, resting ST changes.</p>" +
            hy("Its main value: <strong>excluding CAD in patients with a LOW pre-test probability</strong>.") }
      ],
      checks: [
        K("How long is each Bruce protocol stage?", "3 minutes", ["1 minute", "5 minutes", "10 minutes"], "Every 3 minutes the speed and grade both go up."),
        K("What heart rate must a patient reach for an accurate exercise test?", "More than 85% of the predicted maximal heart rate", ["50% of the predicted max", "Exactly 100 bpm", "Any rate, as long as they walk 3 minutes"], "Below 85% PMHR the heart wasn't stressed enough to rule ischemia out."),
        K("A patient on metoprolol has a normal treadmill test but reached only 70% of PMHR. How do you read it?", "Possibly a false negative", ["CAD is ruled out", "High-risk positive test", "Proof of left main disease"], "Beta blockers blunt the heart rate, so the test may have missed ischemia."),
        K("What is the exercise EKG's main value?", "Excluding CAD in low pre-test probability patients", ["Diagnosing single-vessel disease", "Measuring ejection fraction", "Testing patients on digoxin"], "Its sensitivity is modest, so it's best at ruling out disease in low-risk patients.")
      ],
      remember: [
        "Exercise = <strong>preferred</strong> stress; duration = functional capacity.",
        "<strong>Bruce protocol</strong>: 3-minute stages, faster and steeper each time; stage 1 = 1.7 mph, 10%.",
        "Goal <strong>6-12 minutes</strong>, symptom limited; must pass <strong>85% PMHR</strong> (220 − age, standard teaching).",
        "Sensitivity 68%, specificity 77%; 50% for 1-vessel, 85% for 3-vessel disease.",
        "Beta blockers → false negatives. Best use: <strong>ruling out CAD in low pre-test probability</strong>."
      ],
      practice: [
        obj("02-exercise-protocol", "learn", "Lecture: the exercise test", "Strengths, limits, Bruce protocol and endpoints."),
        obj("02-exercise-protocol", "test", "Test yourself", "Recall the numbers.")
      ]
    },

    /* ---------------- 3 ---------------- */
    {
      id: "ctl-no-treadmill", part: "p1", title: "When not to use a treadmill", goal: "Some hearts are too unstable to exercise; some EKGs are impossible to read.",
      pages: [
        { title: "Too dangerous to exercise (absolute)", fig: { type: "tiles", items: [["💔", "Acute MI within 2 days", ""], ["⚠️", "Unstable angina", ""], ["⚡", "Uncontrolled arrhythmia", "causing symptoms or instability"], ["🚪", "Symptomatic severe AS", ""], ["🌊", "Uncontrolled symptomatic HF", ""], ["🫁", "Acute PE / pulmonary infarction", ""], ["🔥", "Acute myo- or pericarditis; active endocarditis", ""], ["🩻", "Acute aortic dissection", ""]] },
          html: "<p>Absolute contraindications are hearts that are <strong>already in trouble</strong>. Making them work harder could cause collapse or death.</p>" +
            "<p>Also: an acute <strong>noncardiac</strong> problem worsened by exercise (infection, renal failure, thyrotoxicosis), and inability to give consent.</p>" +
            an("Ask: <strong>is anything acute, unstable, or tearing?</strong> If yes, no treadmill.") },
        { title: "Use caution (relative)", fig: { type: "tiles", items: [["🌳", "Left main stenosis", "or equivalent"], ["🎵", "Moderate valve stenosis", ""], ["🧂", "Electrolyte abnormalities", ""], ["🩸", "Severe HTN", "SBP ≥ 200 and/or DBP ≥ 110"], ["💓", "Tachy- or bradyarrhythmias", "including fast AF"], ["🚧", "HCM / outflow obstruction", ""], ["🧠", "Can't cooperate", ""], ["⛔", "High-degree AV block", ""]] },
          html: "<p>Relative contraindications can be <strong>overridden if the benefit outweighs the risk</strong>.</p>" +
            std("The table on slide 11 says MI within <strong>2 days</strong> and HTN <strong>200/110</strong>; the speaker notes say 4 days and 200/115. The lecture follows the table.") },
        { title: "Safe to exercise, but the EKG can't be read", fig: { type: "stseg", hi: "flat" },
          html: "<p>Some patients can walk fine, but their <strong>EKG is already abnormal at rest</strong>, so exercise ST changes can't be interpreted. Slide 20:</p>" +
            "<ul><li><strong>LBBB</strong></li><li><strong>V-pacing</strong></li><li><strong>≥ 1 mm resting ST-T changes</strong></li><li><strong>LVH</strong></li><li><strong>Digoxin</strong></li></ul>" +
            "<p>And three more reasons you need pictures, not just an EKG: <strong>prior revascularization</strong>, needing to <strong>localize ischemia</strong>, and being <strong>unable to reach 85% PMHR</strong>.</p>" +
            hy("These patients still get a stress test, just <strong>with imaging</strong> (nuclear or echo), or a <strong>drug</strong> instead of exercise.") }
      ],
      checks: [
        K("A patient had an acute MI yesterday. Can he have a treadmill test today?", "No: acute MI within 2 days is an absolute contraindication", ["Yes, it's the preferred test", "Yes, if he skips his beta blocker", "Only with the Modified Bruce"], "An MI within 2 days is too unstable to exercise."),
        K("Which is a RELATIVE (not absolute) contraindication to exercise testing?", "Left main stenosis", ["Acute aortic dissection", "Unstable angina", "Symptomatic severe aortic stenosis"], "Left main disease is risky but can be tested with care if the benefit is worth it."),
        K("A patient with LBBB can walk well. Why not a plain exercise EKG?", "LBBB makes ST changes impossible to read", ["LBBB prevents exercise", "LBBB is an absolute contraindication", "LBBB causes false-low heart rates"], "An abnormal baseline EKG makes exercise ST changes non-diagnostic, so add imaging.")
      ],
      remember: [
        "Absolute: <strong>MI within 2 days, unstable angina</strong>, uncontrolled arrhythmia, <strong>symptomatic severe AS</strong>, uncontrolled HF, acute PE, myo/pericarditis, endocarditis, <strong>aortic dissection</strong>, acute noncardiac illness, no consent.",
        "Relative: left main, moderate valve stenosis, electrolytes, <strong>HTN ≥ 200/110</strong>, arrhythmias, HCM, can't cooperate, high-degree AV block.",
        "EKG unreadable: <strong>LBBB, V-pacing, ≥ 1 mm resting ST-T, LVH, digoxin</strong>; plus prior revascularization, need to localize, can't reach 85% PMHR."
      ],
      practice: [
        obj("03-exercise-contraindications", "learn", "Lecture: contraindications", "The full slide 11 table."),
        obj("03-exercise-contraindications", "apply", "Apply: treadmill or not?", "Cases.")
      ]
    },

    /* ---------------- 4 ---------------- */
    {
      id: "ctl-reading", part: "p1", title: "Reading the result and the Duke score", goal: "ST shape, high-risk features, and one formula that sorts low, moderate and high risk.",
      pages: [
        { title: "Which ST depression counts", fig: { type: "stseg" },
          html: "<p>Ischemia during exercise shows as <strong>ST depression</strong>. The <strong>shape</strong> matters:</p>" +
            "<ul><li><strong>Horizontal</strong> or <strong>downsloping</strong> depression (over 1 mm) = <strong>positive</strong>.</li><li><strong>Upsloping</strong> = <strong>equivocal</strong>.</li></ul>" },
        { title: "What makes a test high risk", fig: { type: "tiles", items: [["⏱", "Short exercise", "less than 5 METs"], ["📉", "ST depression ≥ 2 mm", ""], ["🩸", "BP problems", "peak SBP < 130, or SBP drops below resting"], ["💓", "Can't reach target HR", ""], ["😣", "Exercise-induced angina", ""], ["⚡", "Frequent ventricular ectopy", "couplets or VT at low workload"]] },
          html: "<p>A <strong>high-risk</strong> test suggests a lot of muscle is at risk (think left main or 3-vessel disease).</p>" +
            hy("Blood pressure should <strong>rise</strong> with exercise. A BP that <strong>falls</strong> means the pump is failing under stress: a big red flag.") },
        { title: "The Duke treadmill score", fig: { type: "duke", t: 8, st: 1 },
          html: "<p>The deck's formula:</p><p class=\"lh-big\">time − 5 × ST mm − 4 × angina</p>" +
            "<ul><li><strong>time</strong> = minutes of exercise,</li><li><strong>ST</strong> = maximum ST deviation in mm,</li><li><strong>angina index</strong>: 0 none, 1 non-limiting, 2 exercise-limiting.</li></ul>" +
            "<p>Bands: <strong>low risk ≥ +5</strong>, <strong>moderate −10 to +4</strong>, <strong>high ≤ −11</strong>. The slide 19 example: 8 − 5(1) − 4(1) = <strong>−1, moderate</strong>.</p>" +
            mn("Walking <strong>helps</strong> (adds points). ST changes and angina <strong>hurt</strong> (subtract). <strong>5 for ST, 4 for pain.</strong>") }
      ],
      checks: [
        K("Which ST depression pattern is read as EQUIVOCAL?", "Upsloping", ["Horizontal over 1 mm", "Downsloping over 1 mm", "Downsloping 3 mm"], "Horizontal and downsloping count as positive; upsloping is equivocal."),
        K("Exercise 6 min, 2 mm ST depression, angina that stopped the test. Duke score?", "−12, high risk", ["−1, moderate risk", "+6, low risk", "−4, moderate risk"], "6 − 5(2) − 4(2) = −12, which is −11 or lower."),
        K("During a stress test the systolic BP drops below the resting value. What does it mean?", "A high-risk finding", ["A normal response", "A sign of good fitness", "A false negative"], "BP should rise with exercise; a fall means the pump fails under stress.")
      ],
      remember: [
        "Horizontal/downsloping ST depression = <strong>positive</strong>; upsloping = <strong>equivocal</strong>.",
        "High risk: <strong>&lt; 5 METs</strong>, <strong>ST ≥ 2 mm</strong>, peak SBP &lt; 130 or SBP drop, can't reach target HR, exercise angina, frequent ectopy at low workload.",
        "Duke = <strong>time − 5 × ST mm − 4 × angina index</strong> (0/1/2).",
        "Low <strong>≥ +5</strong>; moderate <strong>−10 to +4</strong>; high <strong>≤ −11</strong>."
      ],
      practice: [
        obj("04-duke-score", "test", "Test: Duke score", "Calculate and band the score."),
        obj("04-duke-score", "apply", "Apply: read the test", "Cases with ST patterns and high-risk features.")
      ]
    },

    /* ---------------- 5 ---------------- */
    {
      id: "ctl-mpi", part: "p1", title: "Nuclear perfusion imaging (MPI)", goal: "A gap at stress that fills in at rest is ischemia; a gap at both is scar.",
      pages: [
        { title: "A tracer follows the blood", fig: { type: "perfusion", state: "normal" },
          html: "<p><strong>Myocardial perfusion imaging</strong>: a radioactive tracer (<strong>thallium</strong> or <strong>technetium</strong>) is injected and goes wherever blood goes. A camera (<strong>SPECT</strong> or <strong>PET</strong>) photographs the heart muscle.</p>" +
            "<p>Pictures are taken twice: once at <strong>stress</strong>, once at <strong>rest</strong>. Healthy muscle lights up evenly both times. These rings are slices across the left ventricle.</p>" },
        { title: "Ischemia: the gap fills in", fig: { type: "perfusion", state: "ischemia" },
          html: "<p><strong>Normal perfusion at rest, decreased at stress</strong> = <strong>ischemia</strong>.</p>" +
            "<p>The narrowed artery carries enough at rest, so the rest picture looks fine. At stress it can't keep up, so that slice goes dark.</p>" +
            hy("<strong>Reversible</strong> defect = ischemia = muscle that's alive and could be helped by opening the artery.") },
        { title: "Scar: the gap stays", fig: { type: "perfusion", state: "scar" },
          html: "<p>A defect that is there at <strong>rest too</strong> suggests an <strong>old MI or scarring</strong>: dead muscle takes up no tracer, whatever the demand.</p>" +
            an("Ischemia is a <strong>dim</strong> room: turn the lights on (rest) and it's fine. Scar is a room with <strong>no light bulb</strong>: dark either way.") },
        { title: "Why add pictures to the treadmill?", fig: { type: "bars", items: [["Exercise EKG", 68, "68% sensitive", "ok"], ["SPECT MPI", 88, "85-90% sensitive", "good"], ["SPECT for 3-vessel", 97, "95-100%", "good"]], note: "Slides 10 and 27." },
          html: "<p><strong>Strengths:</strong> higher sensitivity and specificity (~90%) than exercise EKG; works with LVH, digoxin, IVCD; adds prognosis; can measure LV function; shows viability and ischemia together; works in almost everyone.</p>" +
            "<p><strong>Limits:</strong> <strong>radiation</strong>; longer and costlier; thallium false positives (especially women and obese patients); poor images in obesity.</p>" }
      ],
      checks: [
        K("MPI shows normal uptake at rest but a defect at stress. Meaning?", "Ischemia", ["Old MI scar", "A normal heart", "Pericarditis"], "A defect that fills in at rest means the muscle is alive but under-supplied at stress."),
        K("MPI shows the same defect at stress AND at rest. Meaning?", "Prior MI or scar", ["Ischemia that will reverse", "Normal variant", "Beta blocker effect"], "Dead muscle takes up no tracer at any time."),
        K("What is a disadvantage of nuclear MPI compared with exercise EKG?", "Radiation exposure and higher cost", ["Lower sensitivity", "Cannot be done with digoxin", "Cannot measure LV function"], "MPI is more accurate but involves radiation, takes longer and costs more.")
      ],
      remember: [
        "MPI: radioactive tracer (<strong>thallium or technetium</strong>), imaged by <strong>SPECT or PET</strong>, at stress and at rest.",
        "Defect at stress, normal at rest = <strong>ischemia</strong> (reversible).",
        "Defect at stress and rest = <strong>prior MI / scar</strong> (fixed).",
        "Sensitivity 85-90%, specificity ~90%; works with LVH, digoxin, IVCD. Downsides: radiation, cost, time, obesity."
      ],
      practice: [
        obj("05-mpi", "learn", "Lecture: MPI", "The deck's MPI cards."),
        obj("05-mpi", "apply", "Apply: read the scan", "Ischemia or scar?")
      ]
    },

    /* ---------------- 6 ---------------- */
    {
      id: "ctl-vasodilators", part: "p1", title: "Drug stress 1: the vasodilators", goal: "Adenosine, dipyridamole and regadenoson: what stops them and what they cause.",
      pages: [
        { title: "Can't walk? Use a drug", fig: { type: "quad", x: ["Vasodilators", "Inotrope / chronotrope"], y: ["Drugs", "Best paired with"], cells: [["Adenosine, dipyridamole, regadenoson", "open the coronary arteries", "blue"], ["Dobutamine", "makes the heart beat faster and harder", "ok"], ["Nuclear MPI", "vasodilators are preferred for MPI", "blue"], ["Stress echo", "dobutamine is preferred for echo", "ok"]] },
          html: "<p><strong>Pharmacologic stress</strong> is for patients who <strong>can't exercise</strong> to a sufficient workload, or have a condition preventing a treadmill EKG.</p>" +
            "<p>Two families: <strong>vasodilators</strong> (dipyridamole, adenosine, regadenoson) and the <strong>positive inotrope/chronotrope</strong> (dobutamine).</p>" },
        { title: "How a vasodilator shows a blockage", fig: { type: "flow", steps: ["Drug opens the coronary arteries", "Healthy arteries widen: flow jumps", "Narrowed artery is already wide open: flow can't rise", "Uneven tracer = a gap on MPI"], hi: 2 },
          html: "<p>Vasodilators don't make the heart work harder. They <strong>open the arteries</strong>. Healthy arteries respond with a big jump in flow; the diseased one can't, so its territory looks dim next to its neighbors.</p>" +
            std("The \"flow difference\" mechanism is standard teaching; the deck gives the drugs and their preferred use (MPI).") +
            "<p><strong>Regadenoson</strong> can even be injected <strong>during exercise</strong> when a patient started on the treadmill but can't reach the workload.</p>" },
        { title: "What stops a vasodilator", fig: { type: "tiles", items: [["🫁", "Wheezing", "severe asthma or COPD with active wheezing"], ["⬇️", "Hypotension", "SBP < 90"], ["🐢", "Severe bradycardia", "HR < 40; high-degree AV block; sick sinus"], ["☕", "Caffeine / xanthines", "within 12 h: they block adenosine"], ["💊", "Dipyridamole (Aggrenox)", "within 48 h"], ["🧪", "Aminophylline", "within 24 h"]] },
          html: "<p>Adenosine and dipyridamole contraindications (the deck's notes flag this slide as a <strong>test question</strong>):</p>" +
            "<p><strong>Regadenoson (Lexiscan)</strong>: 2nd or 3rd degree AV block <strong>without a pacemaker</strong>, sinus node dysfunction without a pacemaker, hypotension.</p>" +
            mn("<strong>\"Wheeze, Low, Slow, Coffee.\"</strong> Wheezing lungs, low BP, slow heart (brady/AV block/sick sinus), and caffeine or other xanthines.") },
        { title: "What they cause", fig: { type: "bars", items: [["Chest pain", 20, "20%", "ok"], ["Dyspnea", 12, "12%", "ok"], ["Dizziness", 12, "12%", "ok"], ["Headache", 12, "12%", "ok"], ["ST-T changes", 7, "5-8%", "ok"], ["Nausea", 3, "3%", "ok"]], note: "Adenosine / dipyridamole, slide 33." },
          html: "<p>Adenosine and dipyridamole: <strong>chest pain (20%)</strong> leads, then dyspnea, dizziness and headache (12% each).</p>" +
            "<p>Regadenoson: <strong>dyspnea (28%)</strong> and <strong>headache (26%)</strong> lead, then tachycardia (22%), flushing (16%), PVCs (14%), chest pain (13%), ST depression (12%).</p>" }
      ],
      checks: [
        K("Which patient should NOT get adenosine for a stress test?", "An asthmatic who is actively wheezing", ["A patient with knee arthritis", "A patient with LBBB", "A patient on a statin"], "Active bronchospasm is a vasodilator contraindication."),
        K("A patient had two cups of coffee this morning. Why does it matter for an adenosine stress test?", "Caffeine blocks adenosine's effect", ["Caffeine causes LBBB", "Caffeine makes dobutamine dangerous", "It doesn't matter"], "Xanthines like caffeine must be avoided for 12 hours before a vasodilator."),
        K("Which pharmacologic agent is preferred for nuclear MPI?", "A vasodilator", ["Dobutamine", "Atropine alone", "Digoxin"], "Vasodilators are preferred for MPI; dobutamine for stress echo."),
        K("Regadenoson is contraindicated in second-degree AV block when?", "When there is no pacemaker", ["Always, even with a pacemaker", "Only during exercise", "Never"], "With a pacemaker the slow-conduction risk is covered.")
      ],
      remember: [
        "Drug stress = <strong>can't exercise</strong> or EKG prevents treadmill.",
        "Vasodilators: <strong>dipyridamole, adenosine, regadenoson</strong>; preferred for <strong>MPI</strong>; regadenoson can be given during exercise.",
        "Contraindications: <strong>wheezing</strong>, <strong>SBP &lt; 90</strong>, <strong>HR &lt; 40</strong>, high-degree AV block / sick sinus, <strong>caffeine 12 h</strong>, dipyridamole 48 h, aminophylline 24 h.",
        "Regadenoson: 2nd/3rd AVB or SND <strong>without a pacemaker</strong>, hypotension.",
        "Side effects: adenosine/dipyridamole → chest pain 20%; regadenoson → dyspnea 28%, headache 26%."
      ],
      practice: [
        obj("06-vasodilator-agents", "learn", "Lecture: vasodilator agents", "Contraindications and side effects."),
        obj("06-vasodilator-agents", "test", "Test yourself", "Recall the lists.")
      ]
    },

    /* ---------------- 7 ---------------- */
    {
      id: "ctl-dobutamine-echo", part: "p1", title: "Drug stress 2: dobutamine and stress echo", goal: "Dobutamine makes the heart work like exercise; echo watches for a wall that stops squeezing.",
      pages: [
        { title: "Dobutamine: fake exercise", fig: { type: "eq", terms: [["Dobutamine", "", "β1 agonist"], "→", ["HR", "↑", "chronotropy"], "+", ["Contractility", "↑", "inotropy"]] },
          html: "<p><strong>Dobutamine</strong> is a synthetic catecholamine that stimulates <strong>β1</strong> receptors: the heart beats <strong>faster</strong> (chronotropic) and <strong>harder</strong> (inotropic). It raises demand just like exercise.</p>" +
            "<p>It's the <strong>preferred drug for stress echocardiography</strong>, and the only stressor listed for <strong>valvular heart disease</strong>.</p>" },
        { title: "Who can't have dobutamine", fig: { type: "tiles", items: [["⚠️", "Unstable angina / recent MI", ""], ["🩸", "Hypotension or hypertension", ""], ["⚡", "Tachyarrhythmias", ""], ["🚪", "Symptomatic severe AS", ""], ["🚧", "HCM", ""], ["🩻", "Aortic dissection / large aneurysm", ""]] },
          html: "<p>Since dobutamine makes the heart <strong>work harder</strong>, its contraindications look like exercise's: anything that a racing, forceful heart would make worse.</p>" +
            "<p>Side effects occur in about <strong>75%</strong>: ischemic ST depression (33%), chest pain (31%), palpitations (29%), headache, flushing, dyspnea (14% each), significant arrhythmias (8-10%).</p>" +
            an("Vasodilators fail in <strong>lungs and slow hearts</strong>. Dobutamine fails in <strong>fast, fragile, blocked or tearing</strong> hearts.") },
        { title: "Stress echo: watch the walls", fig: { type: "flow", steps: ["Echo at rest<br><small>all walls squeeze</small>", "Stress (exercise or dobutamine)", "Ischemic segment stops squeezing<br><small>new wall motion abnormality</small>"], hi: 2 },
          html: "<p>Stress echo detects ischemia by a <strong>new regional wall motion abnormality</strong>, or a worsening of one that was already there.</p>" +
            "<p>It also <strong>localizes</strong> ischemia, checks <strong>valves</strong> and assesses <strong>viability</strong>.</p>" +
            "<p><strong>Strengths:</strong> sensitivity 84%, specificity 86%; short; shows valves and structure; cheaper; <strong>no radiation</strong>.</p>" +
            "<p><strong>Limits:</strong> very <strong>operator dependent</strong>; poor windows in COPD; sensitivity drops to 42% if the patient doesn't reach 85% PMHR; less accurate with extensive resting wall motion abnormalities or a weak LV.</p>" }
      ],
      checks: [
        K("How does dobutamine stress the heart?", "β1 stimulation raises heart rate and contractility", ["It dilates the coronary arteries", "It blocks adenosine", "It slows the heart"], "Dobutamine makes the heart work harder, like exercise."),
        K("Which stressor is preferred for a stress ECHO?", "Dobutamine", ["Adenosine", "Regadenoson", "Dipyridamole"], "Echo watches wall motion during increased work, which dobutamine provides."),
        K("Which is a contraindication to dobutamine?", "Hypertrophic cardiomyopathy", ["Active wheezing", "Caffeine this morning", "Sick sinus syndrome with a pacemaker"], "A forceful, fast heart worsens HCM obstruction; wheezing and caffeine matter for vasodilators."),
        K("How does stress echo show ischemia?", "A new or worse regional wall motion abnormality", ["A gap in tracer uptake", "A rising calcium score", "Glucose uptake on PET"], "Ischemic muscle stops moving normally under stress.")
      ],
      remember: [
        "Dobutamine = <strong>β1</strong>: ↑ HR and ↑ contractility; preferred for <strong>stress echo</strong> and valve disease.",
        "Contraindications: <strong>UA, recent MI, hypo/hypertension, tachyarrhythmias, symptomatic severe AS, HCM, dissection/aneurysm</strong>.",
        "Side effects in ~75%: ST depression 33%, chest pain 31%, palpitations 29%.",
        "Stress echo: <strong>new wall motion abnormality</strong>; sens 84%, spec 86%; no radiation; operator dependent; poor in COPD."
      ],
      practice: [
        obj("07-dobutamine-stress-echo", "learn", "Lecture: dobutamine and stress echo", "The deck's cards."),
        obj("07-dobutamine-stress-echo", "test", "Test yourself", "Recall questions.")
      ]
    },

    /* ---------------- 8 ---------------- */
    {
      id: "ctl-viability", part: "p1", title: "Is the muscle alive? PET viability", goal: "Low flow with sugar still being used = hibernating muscle worth bypassing.",
      pages: [
        { title: "The question PET answers", fig: { type: "perfusion", state: "scar" },
          html: "<p>A patient has extensive scarring on MPI and wall motion abnormalities on echo. Is it worth revascularizing?</p>" +
            "<p>Only if the dark, still muscle is <strong>alive</strong>. Some muscle under chronically low flow <strong>stops contracting to save energy</strong> but is still living: <strong>hibernating</strong> myocardium.</p>" },
        { title: "Two readings: flow and fuel", fig: { type: "grid", cols: ["Blood flow", "Metabolism (glucose uptake)", "Meaning", "Plan"], rows: [
              ["Normal", "Normal", "Normal muscle", ""],
              ["<strong>Low</strong>", "<strong>Present</strong>", "<strong>Hibernating</strong>: alive", "<strong>Bypass</strong> can bring it back"],
              ["<strong>Low</strong>", "<strong>None</strong>", "<strong>Necrotic</strong>: dead", "Opening the artery won't help"]] },
          html: "<p>A <strong>PET viability scan</strong> measures <strong>perfusion</strong> (same as MPI) and <strong>metabolism</strong> (glucose uptake into cells).</p>" +
            "<p>It can tell <strong>normal, stunned, hibernating and necrotic</strong> myocardium apart.</p>" +
            an("A house with the power cut. If the <strong>pilot light is still on</strong> (sugar being used), restore the power and it comes back. If the <strong>fire is out</strong>, there's nothing to restart.") },
        { title: "The gold standard", fig: { type: "flow", steps: ["Chronic low flow", "Muscle hibernates: stops squeezing, still uses glucose", "PET: flow defect + metabolism present (mismatch)", "Revascularize → function can recover"] },
          html: "<p>Radionuclide MPI with <strong>PET</strong> is the <strong>gold standard noninvasive technique for identifying hibernating myocardium</strong>.</p>" }
      ],
      checks: [
        K("A PET scan shows reduced blood flow but preserved glucose uptake. What is the muscle?", "Hibernating (viable)", ["Necrotic scar", "Normal", "Pericardium"], "Flow is low but the cells are still burning sugar, so they're alive."),
        K("What two things does a PET viability scan measure?", "Perfusion and metabolism", ["Calcium and stenosis", "Rate and rhythm", "Valve area and gradient"], "PET adds glucose metabolism to the perfusion picture."),
        K("What is the gold-standard noninvasive test for hibernating myocardium?", "PET", ["Exercise EKG", "Calcium score", "Holter monitor"], "PET's metabolism reading separates live from dead muscle.")
      ],
      remember: [
        "PET viability = <strong>perfusion + metabolism</strong> (glucose uptake).",
        "Low flow + metabolism present = <strong>hibernating, viable</strong> → revascularize.",
        "Low flow + no metabolism = <strong>necrotic</strong> → revascularizing won't help.",
        "Distinguishes normal, stunned, hibernating, necrotic. <strong>PET = gold standard</strong> for hibernating myocardium."
      ],
      practice: [
        obj("08-pet-viability", "learn", "Lecture: PET viability", "The deck's card."),
        obj("08-pet-viability", "test", "Test yourself", "Quick recall.")
      ]
    },

    /* ---------------- 9 ---------------- */
    {
      id: "ctl-pick-test", part: "p1", title: "Picking the right stress test", goal: "Can they walk? Can you read the EKG? Then pick the stressor and the pictures.",
      pages: [
        { title: "Question 1: can they exercise?", fig: { type: "flow", vertical: true, steps: ["<strong>Can exercise?</strong>", "Yes + normal EKG → <strong>exercise EKG</strong>", "Yes + LBBB, pacing, LVH, digoxin, ST changes, prior revasc, need to localize → <strong>exercise + imaging</strong>", "No → <strong>drug stress + imaging</strong>"] },
          html: "<p>Slide 48's algorithm starts with one question: <strong>can the patient exercise to a satisfactory workload?</strong></p>" +
            "<p>If yes, the next question is whether you can <strong>read their EKG</strong>. If you can, a plain treadmill EKG is enough. If you can't, add pictures (echo or nuclear).</p>" },
        { title: "Three patterns to remember", fig: { type: "tiles", items: [["⚡", "LBBB or V-pacing (or AF, can't walk)", "→ vasodilator SPECT or PET"], ["🫀", "Extensive resting wall motion abnormality", "→ nuclear, not echo"], ["🔋", "Need to know if muscle is alive", "→ PET"]] },
          html: "<ul><li><strong>LBBB or pacing → vasodilator nuclear</strong>. A racing heart with LBBB causes false septal defects (standard teaching), so don't speed it up.</li>" +
            "<li><strong>Lots of old wall motion abnormality → nuclear</strong>. Echo can't spot a new problem on top of extensive old ones.</li>" +
            "<li><strong>Viability → PET</strong>.</li></ul>" +
            "<p>Can't exercise, no LBBB/pacing/AF, no big wall motion problem: <strong>vasodilator nuclear or dobutamine echo</strong>. Vasodilator contraindicated (e.g. wheezing): <strong>dobutamine</strong>.</p>" },
        { title: "Try three patients", fig: { type: "grid", cols: ["Patient", "Test"], rows: [
              ["Fit 50-year-old, chest pain, normal EKG", "<strong>Exercise EKG</strong>"],
              ["Walks fine, on digoxin, no wall motion problem", "<strong>Exercise echo or exercise nuclear</strong>"],
              ["Wheelchair, V-paced", "<strong>Regadenoson SPECT or PET</strong>"],
              ["Can't walk, actively wheezing, needs viability", "<strong>Dobutamine PET</strong>"],
              ["Valve disease", "<strong>Dobutamine</strong> (stress echo)"]] },
          html: "<p>Run each one through the questions: <strong>walk? → read the EKG? → which stressor is safe? → which pictures?</strong></p>" }
      ],
      checks: [
        K("A fit 50-year-old with chest pain and a normal resting EKG. Best stress test?", "Exercise EKG", ["Regadenoson SPECT", "PET viability", "Dobutamine echo"], "Can exercise and the EKG is readable, so no imaging or drug is needed."),
        K("A patient in a wheelchair with a paced rhythm needs ischemia testing. Best test?", "Vasodilator (regadenoson) SPECT or PET", ["Exercise EKG", "Dobutamine echo", "Bruce protocol"], "Can't exercise + pacing → vasodilator nuclear."),
        K("A patient with extensive resting wall motion abnormalities is steered toward which imaging?", "Nuclear", ["Echo", "Plain EKG", "None"], "Echo can't see a new abnormality on top of many old ones."),
        K("A patient walks fine but takes digoxin. What does the algorithm add?", "Imaging", ["Nothing; plain exercise EKG", "A Holter monitor", "Cardiac cath first"], "Digoxin distorts ST segments, so add pictures.")
      ],
      remember: [
        "Q1: <strong>can they exercise?</strong> Q2: <strong>can you read the EKG?</strong>",
        "Walk + readable EKG → <strong>exercise EKG</strong>. Walk + unreadable → <strong>exercise + imaging</strong>.",
        "LBBB / V-pacing (or AF without exercise) → <strong>vasodilator SPECT/PET</strong>.",
        "Extensive resting WMA → <strong>nuclear</strong>. Viability → <strong>PET</strong>. Vasodilator contraindicated or valve disease → <strong>dobutamine</strong>."
      ],
      practice: [
        obj("09-choosing-stress-test", "apply", "Apply: pick the test", "Patients run through the slide 48 algorithm."),
        obj("09-choosing-stress-test", "learn", "Lecture: the algorithm", "The full algorithm card.")
      ]
    },

    /* ---------------- 10 ---------------- */
    {
      id: "ctl-tte", part: "p2", title: "The echocardiogram (TTE)", goal: "Ultrasound through the chest: three windows, several modes, almost every structure.",
      pages: [
        { title: "Ultrasound from the outside", fig: { type: "probe", mode: "tte" },
          html: "<p>A <strong>transthoracic echo (TTE)</strong> is the <strong>primary noninvasive</strong> test for the heart's anatomy and function. A tech puts a probe on the chest; sound waves bounce back from the heart.</p>" +
            "<p>It shows <strong>both ventricles' function</strong> (systolic, diastolic, RV), <strong>structure</strong> (LVH, wall motion abnormalities, septal aneurysm, PFO, ASD) and <strong>all four valves</strong>.</p>" +
            hy("Suspect a valve problem (new murmur, dyspnea, edema)? Order an <strong>echo</strong>. That's the deck's opening case.") },
        { title: "Three windows", fig: { type: "grid", cols: ["Window", "Best for"], rows: [
              ["<strong>Parasternal</strong> (long and short axis)", "LV and RV size and squeeze; mitral and aortic valves"],
              ["<strong>Apical 4-chamber</strong>", "All 4 chambers; <strong>Simpson EF</strong>; LV apex; mitral inflow (diastolic function, MS)"],
              ["<strong>Apical 5-chamber</strong>", "Aortic outflow tract: grade <strong>aortic stenosis</strong>, cardiac output"],
              ["Apical 2-chamber", "Anterior and inferior LV walls"],
              ["<strong>Subcostal</strong>", "Often the only window on a ventilator; <strong>IVC</strong> size and breathing change = volume status"]] },
          html: "<p>The probe is placed in three spots (windows), each giving different views. Learn the standouts:</p>" +
            mn("<strong>5 = 5-chamber = aortic stenosis.</strong> <strong>Sub</strong>costal = the <strong>IVC</strong> under the ribs.") },
        { title: "Echo modes", fig: { type: "tiles", items: [["〰️", "M-mode", "a tracing: chamber size and wall thickness"], ["🌊", "Doppler", "blood flow through chambers and valves"], ["🎨", "Color Doppler", "colors show flow direction"], ["🎥", "2-D", "real-time motion of structures"], ["🧊", "3-D", "depth; useful to the CT surgeon pre-op"], ["🫧", "Bubble study", "agitated saline: finds ASD or PFO"]] },
          html: "<p>The <strong>bubble study</strong>: shaken saline makes microbubbles that normally stay on the right side and get trapped in the lungs. If bubbles appear on the <strong>left</strong>, there's a hole between the sides: an <strong>ASD or PFO</strong>.</p>" }
      ],
      checks: [
        K("A patient has new dyspnea, edema and a 2/6 systolic murmur. Which test for suspected valve disease?", "Echocardiogram", ["Holter monitor", "Exercise treadmill test", "Calcium score"], "The echo shows the valves directly."),
        K("Which echo view is best for grading aortic stenosis?", "Apical 5-chamber", ["Subcostal IVC", "Apical 2-chamber", "Parasternal short axis at the papillary muscles"], "The 5-chamber view lines the Doppler beam up with the aortic outflow."),
        K("Which view estimates volume status from the IVC?", "Subcostal", ["Apical 4-chamber", "Parasternal long axis", "Apical 5-chamber"], "The IVC sits under the ribs, seen from the subcostal window."),
        K("Bubbles show up in the left atrium during a bubble study. What does it suggest?", "An ASD or PFO", ["Aortic stenosis", "Normal lungs", "Mitral prolapse"], "Bubbles should be trapped in the lungs; reaching the left side means a shunt.")
      ],
      remember: [
        "TTE = <strong>primary noninvasive</strong> test of cardiac anatomy and function: ventricles, structure, four valves.",
        "Windows: <strong>parasternal, apical, subcostal</strong>.",
        "Apical 4 = Simpson EF, mitral inflow; <strong>apical 5 = aortic stenosis</strong>; apical 2 = anterior/inferior walls; <strong>subcostal = IVC/volume</strong>.",
        "Modes: M-mode, Doppler, color Doppler, 2-D, 3-D. <strong>Bubble study → ASD/PFO</strong>."
      ],
      practice: [
        obj("10-tte", "learn", "Lecture: TTE", "Windows, modes and measurements."),
        obj("10-tte", "test", "Test yourself", "Recall the views.")
      ]
    },

    /* ---------------- 11 ---------------- */
    {
      id: "ctl-tee", part: "p2", title: "TEE: echo from the esophagus", goal: "The probe sits right behind the heart, so the mitral valve and back structures are crystal clear.",
      pages: [
        { title: "Why go down the throat?", fig: { type: "probe", mode: "tee" },
          html: "<p>In a <strong>transesophageal echo (TEE)</strong> the probe goes down the esophagus, which runs <strong>right behind the left atrium</strong>.</p>" +
            "<p>No ribs or lung in the way, and the back of the heart is right there. TEE gives <strong>superior views of posterior structures</strong>: the <strong>best view of the mitral valve</strong>, the left atrium and its appendage.</p>" +
            hy("TEE = <strong>best for the mitral valve</strong> (and other back-of-the-heart structures).") },
        { title: "When to order a TEE", fig: { type: "tiles", items: [["🩻", "Acute aortic problem", "dissection, transection, hematoma"], ["⚙️", "Prosthetic valve trouble", "thrombus, pannus, vegetation, leak"], ["🦠", "Endocarditis", "complications (abscess, fistula); diagnose if moderate/high likelihood"], ["🧱", "LA / LAA clot", "before cardioversion or ablation for AF/flutter"], ["🎯", "Source of an embolus", ""], ["🔧", "Guide procedures", "closure devices, valvuloplasty, percutaneous valves"]] },
          html: "<p>TTE is still the <strong>first test for most patients</strong>. Go straight to TEE in <strong>life-threatening</strong> situations or when TTE will likely be <strong>non-diagnostic</strong> (or already was).</p>" },
        { title: "Who shouldn't, and what can go wrong", fig: { type: "grid", cols: ["", ""], rows: [
              ["<strong>Absolute contraindication</strong>", "Previous <strong>esophagectomy</strong> or esophagogastrectomy"],
              ["Relative", "Recent esophageal tear or bleeding, stricture, coagulopathy, low platelets, Zenker's diverticulum, altered mental status, severe cervical spine arthritis"],
              ["Major complications", "<strong>Esophageal perforation</strong>, GI bleeding (platelets &lt; 50k), pharyngeal hematoma, <strong>methemoglobinemia</strong> (from benzocaine throat spray)"],
              ["Minor", "Bronchospasm, hypoxia, NSVT, AF, hemoptysis, vomiting"]] },
          html: "<p>Every risk comes from <strong>where the probe travels</strong>: the throat and esophagus.</p>" +
            "<p><strong>TEE vs TTE:</strong> TEE is <strong>minimally invasive</strong> and needs a <strong>skilled physician</strong>; TTE is <strong>quick, non-invasive</strong> and done by an <strong>echo tech</strong>.</p>" }
      ],
      checks: [
        K("Which valve is best seen on TEE?", "Mitral", ["Pulmonic", "Tricuspid", "None; TTE is always better"], "The esophagus lies right behind the left atrium and mitral valve."),
        K("What is the absolute contraindication to TEE?", "Prior esophagectomy", ["Atrial fibrillation", "Prosthetic valve", "Age over 80"], "With no normal esophagus there's no safe path for the probe."),
        K("A patient with AF needs cardioversion and has not been anticoagulated. Which test looks for LA appendage clot?", "TEE", ["TTE", "Holter", "Calcium score"], "The LA appendage sits at the back of the heart, best seen from the esophagus."),
        K("Which rare TEE complication comes from the numbing spray?", "Methemoglobinemia", ["Pseudoaneurysm", "Contrast nephropathy", "Hyperkalemia"], "Topical benzocaine can cause methemoglobinemia.")
      ],
      remember: [
        "TEE probe sits behind the LA → <strong>best view of posterior structures, mitral valve, LA/LAA</strong>.",
        "TTE first for most; TEE first if life-threatening or TTE non-diagnostic.",
        "Indications: aortic dissection, prosthetic valve problems, endocarditis, <strong>LAA clot before cardioversion/ablation</strong>, embolic source, procedure guidance.",
        "Absolute contraindication: <strong>esophagectomy</strong>. Complications: <strong>perforation</strong>, GI bleed, hematoma, <strong>methemoglobinemia</strong>."
      ],
      practice: [
        obj("11-tee", "learn", "Lecture: TEE indications", "The deck's TEE cards."),
        obj("12-tee-safety", "test", "Test: TEE safety", "Contraindications and complications.")
      ]
    },

    /* ---------------- 12 ---------------- */
    {
      id: "ctl-muga-monitors", part: "p2", title: "MUGA and rhythm monitors", goal: "MUGA measures EF best; pick the monitor by how often the symptoms happen.",
      pages: [
        { title: "MUGA: the most accurate EF", fig: { type: "tiles", items: [["🎯", "Most accurate EF", "very accurate and reproducible"], ["⚖️", "Body habitus doesn't matter", ""], ["☢️", "Radiation 620 mrem", "a chest CT is about 700, a CXR 10"], ["🤰", "Not in pregnancy or lactation", ""]] },
          html: "<p>A <strong>MUGA scan</strong> (multi-gated acquisition, radionuclide ventriculography) <strong>labels the red blood cells</strong> with a tracer and counts radioactivity over the chest with a gamma camera.</p>" +
            "<p>It measures <strong>volume</strong> directly, so it's the <strong>preferred technique for an accurate LVEF</strong>.</p>" },
        { title: "Matching the monitor to the symptom", fig: { type: "bars", items: [["Telemetry", 3, "in hospital, continuous", "blue"], ["Holter", 6, "24 or 48 hours", "blue"], ["Event monitor", 25, "2-4 weeks (30-day)", "ok"], ["Implantable loop", 100, "up to 3 years", "good"]], note: "Bar length = how long it watches. Slides 25-28." },
          html: "<ul><li><strong>Telemetry</strong>: continuous in-hospital monitoring of 2-3 leads, for suspected arrhythmia, unexplained syncope, or watching a treatment.</li>" +
            "<li><strong>Holter</strong>: 24 or 48 hours with a symptom diary: for symptoms that happen <strong>daily</strong>.</li>" +
            "<li><strong>30-day event monitor</strong>: 2-4 weeks, mailed home, can come off to shower; for a high suspicion of arrhythmia or AF burden. Compliance is the problem.</li>" +
            "<li><strong>Implantable monitor</strong>: <strong>unexplained syncope</strong> and <strong>cryptogenic stroke</strong>; up to 3 years; downloads nightly; hard to get insurance to approve.</li></ul>" +
            hy("<strong>The rarer the symptom, the longer the monitor.</strong> The deck's 66-year-old with <strong>daily</strong> palpitations fits a <strong>Holter</strong>.") }
      ],
      checks: [
        K("Which test is preferred for a highly accurate LVEF measurement?", "MUGA scan", ["Exercise EKG", "Holter monitor", "Calcium score"], "MUGA measures blood-pool volume directly, so its EF is very accurate."),
        K("Who should NOT have a MUGA scan?", "A pregnant woman", ["An obese patient", "A patient with AF", "A patient over 70"], "MUGA uses radiation, so it's contraindicated in pregnancy and lactation."),
        K("A patient has palpitations every day. Which monitor?", "Holter (24-48 hours)", ["Implantable loop recorder", "No monitor needed", "MUGA"], "Daily symptoms will show up within a day or two."),
        K("Which monitor is indicated for cryptogenic stroke?", "Implantable monitoring device", ["24-hour Holter", "Telemetry for one night", "TTE"], "Rare paroxysmal AF needs years of watching.")
      ],
      remember: [
        "MUGA: labeled red cells; <strong>most accurate EF</strong>; body habitus doesn't matter; 620 mrem; <strong>no pregnancy/lactation</strong>.",
        "Telemetry: inpatient; suspected arrhythmia, unexplained syncope, watching therapy.",
        "<strong>Holter 24-48 h</strong> (daily symptoms) → <strong>event monitor 2-4 weeks</strong> → <strong>implantable up to 3 years</strong> (unexplained syncope, cryptogenic stroke)."
      ],
      practice: [
        obj("13-muga", "test", "Test: MUGA", "Quick recall."),
        obj("14-monitoring", "apply", "Apply: pick the monitor", "Cases.")
      ]
    },

    /* ---------------- 13 ---------------- */
    {
      id: "ctl-angiogram", part: "p3", title: "The coronary angiogram", goal: "The gold standard: who needs it, who should wait, and how to prep.",
      pages: [
        { title: "Seeing the arteries directly", fig: { type: "coronary", hi: ["lad"], blocks: [["ladp", "90%"]] },
          html: "<p><strong>Cardiac catheterization</strong> is the <strong>gold standard for diagnosing coronary atherosclerosis</strong>. A catheter is threaded to the coronary openings, dye is injected, and x-ray video shows every narrowing.</p>" +
            "<p>Stenoses <strong>under 70% aren't flow-limiting</strong> and rarely need revascularization.</p>" },
        { title: "Who gets one", fig: { type: "quad", x: ["After other tests", "As the FIRST test"], y: ["", ""], cells: [["Lifestyle-limiting angina", "despite maximal medical therapy", "ok"], ["Sudden cardiac arrest", "or life-threatening ventricular arrhythmia", "bad"], ["High-risk noninvasive test; atypical symptoms with equivocal stress test", "", "ok"], ["ACS (STEMI, NSTEMI, UA); new symptomatic HF", "and new-onset cardiomyopathy", "bad"]] },
          html: "<p>Some patients reach the cath lab after other tests. Others go <strong>straight there</strong>: after <strong>sudden cardiac arrest</strong>, <strong>life-threatening ventricular arrhythmia</strong>, <strong>new symptomatic heart failure</strong>, and <strong>ACS</strong>.</p>" },
        { title: "Who should wait (relative contraindications)", fig: { type: "tiles", items: [["🫘", "Kidneys", "acute renal failure"], ["🩸", "Bleeding / clotting", "active GI bleed, severe anemia, severe coagulopathy"], ["🦠", "Infection", "unexplained fever, active infection, aortic valve endocarditis"], ["🧠", "Acute stroke", ""], ["⚖️", "Unstable body", "uncontrolled HTN, electrolytes, decompensated HF, digoxin toxicity"], ["🚫", "Wouldn't help", "refuses PCI, life-shortening illness, contrast anaphylaxis, bad PAD"]] },
          html: "<p>All the contraindications are <strong>relative</strong>. Group them by why they matter: <strong>the dye</strong> hurts kidneys, <strong>the puncture and blood thinners</strong> bleed, <strong>infection</strong> spreads, or the result <strong>wouldn't change anything</strong>.</p>" },
        { title: "Getting ready", fig: { type: "grid", cols: ["What", "When"], rows: [
              ["ACE inhibitor, ARB, diuretics", "May hold the <strong>morning</strong> of"],
              ["Anticoagulation", "Hold; <strong>INR must be &lt; 1.5</strong>"],
              ["<strong>Metformin</strong>", "Hold the <strong>day of and 48 h after</strong>"],
              ["Food and drink", "<strong>NPO after midnight</strong>"],
              ["Contrast allergy", "<strong>Prednisone 50 mg</strong> at 13, 7 and 1 h before + <strong>Benadryl 50 mg</strong> 1 h before"]] },
          html: "<p>Each hold protects against one risk: kidney stress from the dye (ACEi/ARB/diuretics, metformin), bleeding at the puncture (anticoagulants).</p>" +
            mn("Contrast allergy prep: <strong>\"13, 7, 1, then Benadryl at 1.\"</strong>") }
      ],
      checks: [
        K("What is the gold standard for diagnosing coronary atherosclerosis?", "Cardiac catheterization (coronary angiogram)", ["Exercise EKG", "Coronary calcium score", "TTE"], "The angiogram shows the narrowings directly."),
        K("When is metformin held for a cath?", "The day of and 48 hours after", ["One week before only", "It is never held", "Only if the INR is high"], "Contrast can hurt the kidneys, and metformin plus kidney injury risks lactic acidosis (standard teaching)."),
        K("What INR must a patient have before a cath?", "Under 1.5", ["Under 3.0", "Over 2.0", "INR doesn't matter"], "The arterial puncture needs normal clotting."),
        K("A patient with a contrast allergy needs a cath. Prep?", "Prednisone 50 mg at 13, 7 and 1 h before plus Benadryl 50 mg 1 h before", ["Epinephrine 1 mg before", "Cancel the cath", "Double the contrast"], "Slide 23's premedication protocol.")
      ],
      remember: [
        "Cath = <strong>gold standard</strong>. Stenosis <strong>&lt; 70%</strong> rarely needs revascularization.",
        "Indications: lifestyle-limiting angina despite max therapy, high-risk noninvasive test, atypical symptoms + equivocal stress test, new cardiomyopathy.",
        "FIRST test: <strong>sudden cardiac arrest, life-threatening VA, new symptomatic HF, ACS</strong>.",
        "Prep: hold ACEi/ARB/diuretics that morning; <strong>INR &lt; 1.5</strong>; <strong>metformin day of + 48 h</strong>; NPO after midnight.",
        "Contrast allergy: <strong>prednisone 50 mg at 13, 7, 1 h</strong> + <strong>Benadryl 50 mg at 1 h</strong>."
      ],
      practice: [
        obj("15-angio-indications", "learn", "Lecture: angiogram indications", "Who gets one."),
        obj("16-angio-prep", "test", "Test: prep and holds", "Recall the holds and allergy prep.")
      ]
    },

    /* ---------------- 14 ---------------- */
    {
      id: "ctl-access", part: "p3", title: "Getting in and out: access and complications", goal: "Radial or femoral; the 3 cm rule; what can go wrong early and late.",
      pages: [
        { title: "The two common doors", fig: [{ type: "access", mode: "radial" }, { type: "access", mode: "femoral" }],
          html: "<p>The catheter enters an artery and travels <strong>up the aorta</strong> to the coronaries. The two most common access sites are <strong>femoral</strong> (groin) and <strong>radial</strong> (wrist). Brachial and subclavian are options too.</p>" },
        { title: "The femoral 3 cm rule", fig: { type: "groin" },
          html: "<p>Femoral access must be <strong>no more than 3 cm below the inguinal ligament</strong>.</p>" +
            "<ul><li><strong>Too high</strong> → <strong>retroperitoneal bleed</strong>.</li><li><strong>Too low</strong> → <strong>pseudoaneurysm</strong>.</li></ul>" +
            mn("<strong>High = Hidden</strong> bleed (retroperitoneum). <strong>Low = Lump</strong> (pseudoaneurysm).") },
        { title: "Afterward", fig: { type: "flow", steps: ["Sheath stays in until heparin wears off<br><small>~4 h after the last dose</small>", "Pull sheath + hold pressure ~20 min", "Bedrest 6 h", "No lifting > 10 lb or strenuous exercise for 1 week"] },
          html: "<p>While the sheath is in: <strong>hourly vitals</strong> and <strong>groin checks every 30 minutes</strong>. After: vitals every 15 min for 1 h, every 30 min for 3 h, then every 4 h for 24 h.</p>" +
            "<p>Hemostasis options: <strong>hand pressure</strong>, <strong>mechanical clamp</strong> (when a long hold is expected: large sheath, heavy anticoagulation, hematoma, DAPT), or a <strong>closure device</strong> (Mynx: more local infection; avoid if a hematoma formed). The radial site uses a <strong>TR band</strong>.</p>" },
        { title: "Complications", fig: { type: "grid", cols: ["Type", "Examples"], rows: [
              ["Rare but serious", "Death 0.1%, MI 0.1%, <strong>stroke 0.4%</strong> (during PCI)"],
              ["Vascular, <strong>acute</strong>", "Thrombosis / distal embolization, dissection, hematoma / hemorrhage, retroperitoneal hemorrhage"],
              ["Vascular, <strong>late</strong>", "<strong>Pseudoaneurysm</strong>, <strong>AV fistula</strong>"],
              ["Other", "Arrhythmia, contrast allergy (iodine), <strong>acute kidney injury</strong>"]] },
          html: "<p>Sort the vascular ones by <strong>timing</strong>: bleeding and clots happen <strong>right away</strong>; a pseudoaneurysm or AV fistula shows up <strong>later</strong>.</p>" }
      ],
      checks: [
        K("Femoral access is placed too HIGH above the inguinal ligament. Risk?", "Retroperitoneal bleed", ["Pseudoaneurysm", "Radial artery occlusion", "Methemoglobinemia"], "Above the ligament the bleeding can track into the retroperitoneum where you can't compress it."),
        K("Femoral access too LOW. Risk?", "Pseudoaneurysm", ["Retroperitoneal bleed", "Pneumothorax", "Esophageal perforation"], "Too low, the artery isn't over bone and is hard to compress, so a leak pocket forms."),
        K("Which cath complication shows up LATE?", "AV fistula", ["Acute dissection", "Hematoma during the case", "Acute thrombosis"], "Pseudoaneurysm and AV fistula are the late vascular complications."),
        K("How long is bedrest after femoral sheath removal?", "6 hours", ["30 minutes", "3 days", "No bedrest"], "Slide 16: bedrest for 6 hours.")
      ],
      remember: [
        "Most common access: <strong>femoral and radial</strong>.",
        "Femoral: <strong>≤ 3 cm below the inguinal ligament</strong>. Too high → <strong>retroperitoneal bleed</strong>; too low → <strong>pseudoaneurysm</strong>.",
        "Sheath out ~4 h after heparin, pressure ~20 min, <strong>bedrest 6 h</strong>, no lifting &gt; 10 lb for 1 week.",
        "Complications: death 0.1%, MI 0.1%, stroke 0.4%; acute vascular (thrombosis, dissection, hematoma, RP bleed) vs <strong>late (pseudoaneurysm, AV fistula)</strong>; arrhythmia, contrast allergy, AKI."
      ],
      practice: [
        obj("17-angio-access", "test", "Test: access and post-op care", "The 3 cm rule and aftercare."),
        obj("18-angio-complications", "apply", "Apply: complications", "Cases after a cath.")
      ]
    },

    /* ---------------- 15 ---------------- */
    {
      id: "ctl-rhc", part: "p3", title: "The right heart cath", goal: "A balloon catheter rides the blood through the right heart and reads pressures at each stop.",
      pages: [
        { title: "A ride through the right heart", fig: { type: "rhc" },
          html: "<p>A <strong>pulmonary artery (Swan-Ganz) catheter</strong> goes into a vein and floats with the blood: <strong>right atrium → right ventricle → pulmonary artery</strong>, until its balloon wedges in a small branch.</p>" +
            "<p>Direct measurements: <strong>CVP</strong>, <strong>right-sided pressures</strong>, <strong>PA pressure</strong>, <strong>pulmonary capillary occlusion (wedge) pressure</strong>, <strong>cardiac output</strong>, and <strong>mixed venous O₂ (SvO₂)</strong>.</p>" +
            an("When the balloon blocks the branch, the catheter \"looks through\" the lung capillaries to the <strong>left atrium</strong>. So the wedge pressure estimates left-sided filling (standard teaching).") },
        { title: "When to use it", fig: { type: "tiles", items: [["❓", "Shock with unknown volume status", ""], ["💔", "Severe cardiogenic shock", ""], ["🫁", "Pulmonary hypertension", "suspected or known"], ["🧩", "Severe cardiopulmonary disease", "congenital, L→R shunt, severe valve disease"]] },
          html: "<p>The right heart cath answers questions that a blood pressure cuff can't: <strong>is this patient dry or wet? Is the pump failing? How high are the lung pressures?</strong></p>" +
            "<p>You saw it in Cardiac Surgery: in the ICU the Swan-Ganz gives the <strong>CO and SVR</strong> that split BP = CO × SVR into its parts.</p>" }
      ],
      checks: [
        K("Which is NOT measured directly by a Swan-Ganz catheter?", "Coronary artery stenosis", ["CVP", "Pulmonary artery pressure", "Cardiac output"], "Coronary narrowings are seen on a left heart cath (angiogram), not a right heart cath."),
        K("Which patient is a right heart cath indicated for?", "Shock with an unknown volume status", ["Stable angina with a normal EKG", "Screening for CAD", "Palpitations once a month"], "It tells you whether the patient is dry, wet, or has a failing pump."),
        K("The wedge (PCOP) pressure estimates pressure in which chamber?", "The left atrium", ["The right atrium", "The aorta", "The coronary sinus"], "With the balloon blocking flow, the reading reflects the left atrium beyond the lungs.")
      ],
      remember: [
        "Swan-Ganz path: <strong>RA → RV → PA → wedge</strong>.",
        "Measures: <strong>CVP, right-sided pressures, PA pressure, PCOP (wedge), CO, SvO₂</strong>.",
        "Indications: <strong>shock with unknown volume</strong>, severe cardiogenic shock, pulmonary hypertension, severe cardiopulmonary disease."
      ],
      practice: [
        obj("19-right-heart-cath", "learn", "Lecture: right heart cath", "The deck's card."),
        obj("19-right-heart-cath", "test", "Test yourself", "Recall what it measures.")
      ]
    },

    /* ---------------- 16 ---------------- */
    {
      id: "ctl-ct", part: "p3", title: "CT angiography and the calcium score", goal: "CCTA rules out disease; the calcium score counts plaque but can't measure narrowing.",
      pages: [
        { title: "Coronary CT angiography (CCTA)", fig: { type: "bars", items: [["Negative predictive value", 97, "95-100%", "good"], ["PPV: left main and grafts", 92, "91-93%", "good"], ["PPV: other arteries", 72, "60-84%", "ok"]], note: "Slide 28." },
          html: "<p><strong>Non-invasive</strong> coronary angiography by CT. Used for <strong>intermediate-risk</strong> patients with <strong>equivocal stress tests</strong>, and for suspected <strong>congenital coronary anomalies</strong>.</p>" +
            "<p>Prep: a <strong>beta blocker</strong> to slow the heart to <strong>60-70</strong>, <strong>nitroglycerin</strong> to open the arteries, and <strong>IV contrast</strong>.</p>" +
            hy("A <strong>negative CCTA</strong> is very reassuring: NPV <strong>95-100%</strong>.") },
        { title: "When CCTA struggles", fig: { type: "tiles", items: [["💨", "Heart rate over 70", "blurry pictures"], ["〰️", "Irregular rhythm", ""], ["😮‍💨", "Can't hold breath 5 seconds", ""], ["🪨", "Heavy calcium or prior stents", "metal and calcium hide the lumen"]] },
          html: "<p>CT takes a picture of a moving target. Anything that makes the heart move more, or hides the inside of the artery, ruins it.</p>" +
            an("Like photographing a race car: you need it <strong>slow</strong> (HR under 70), <strong>steady</strong> (regular rhythm, breath held) and <strong>no glare</strong> (calcium, stents).") },
        { title: "The calcium score", fig: { type: "bars", items: [["0", 3, "no identifiable disease", "good"], ["1-99", 30, "mild", "ok"], ["100-399", 60, "moderate", "ok"], ["≥ 400", 100, "severe", "bad"]], note: "Slide 31." },
          html: "<p>A non-contrast CT counts <strong>calcium in the coronaries</strong>: a <strong>screening tool for asymptomatic</strong> low-intermediate and intermediate risk patients.</p>" +
            "<p>It predicts <strong>plaque burden</strong> and is highly predictive of the <strong>absence</strong> of atherosclerosis (a zero is reassuring).</p>" +
            hy("The calcium score <strong>CANNOT measure how narrow</strong> an artery is. It tells you <strong>how much plaque</strong>, not where the blockage is.") }
      ],
      checks: [
        K("Why is a beta blocker given before a CCTA?", "To slow the heart rate to 60-70 for clear pictures", ["To prevent contrast allergy", "To raise blood pressure", "To dilate the coronary arteries"], "A fast heart blurs the images; nitroglycerin is what dilates the arteries."),
        K("Which patient is a poor CCTA candidate?", "A patient in atrial fibrillation", ["A patient in sinus rhythm at 60", "An intermediate-risk patient with an equivocal stress test", "A patient with a suspected coronary anomaly"], "An irregular rhythm ruins CT timing."),
        K("A calcium score is 250. What does it mean?", "Moderate disease", ["No disease", "Mild disease", "A 250% stenosis"], "100-399 is moderate."),
        K("What can a calcium score NOT tell you?", "How severe a stenosis is", ["How much plaque there is", "Whether atherosclerosis is likely absent", "Overall disease burden"], "It counts calcium, not the size of the lumen.")
      ],
      remember: [
        "CCTA: non-invasive; intermediate risk + equivocal stress test, coronary anomalies; <strong>BB to HR 60-70, NTG, IV contrast</strong>.",
        "NPV <strong>95-100%</strong>; PPV 91-93% left main and grafts, 60-84% elsewhere.",
        "Limits: <strong>HR &gt; 70, irregular rhythm, can't hold breath 5 s, heavy calcium or stents</strong>.",
        "Calcium score: screening, plaque burden; <strong>0 none, 1-99 mild, 100-399 moderate, ≥ 400 severe</strong>; <strong>cannot measure stenosis</strong>."
      ],
      practice: [
        obj("20-ccta", "test", "Test: CCTA", "Prep, accuracy and limits."),
        obj("21-calcium-score", "apply", "Apply: calcium score", "Read the number.")
      ]
    }
  ];

  window.CARDIO3_LEARN = window.CARDIO3_LEARN || {};
  window.CARDIO3_LEARN["cardiac-testing"] = {
    prefix: "ctl", short: "Cardiac Testing", heading: "Cardiac testing from zero",
    kicker: "Cardiac testing, step by step",
    card: "Why stressing the heart finds a blockage, the treadmill and the Duke score, nuclear pictures and drug stress, picking the right test, echo and monitors, then the cath lab, CT and the calcium score. Short lessons with moving pictures and a few easy checks.",
    intro: "Sixteen short lessons, one idea per page, each with a picture. Start with lesson 1: every lesson builds on the one before.",
    parts: parts, lessons: lessons
  };
}());
