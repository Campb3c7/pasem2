/*
  Medications: Stress test & cath lab drugs (Cardio Part 3). Source:
  stress-testing.md slides 30-39 (slide 32 notes: "Test question"), beta blocker
  false negatives, digoxin; coronary-angiogram.md slides 7, 23, 26 (CCTA prep);
  cad-part-3.md slides on CA-AKI; cad-part-5.md slide 79; cardiac-surgery.md
  slide 50; echo-telemetry.md (contrast echo). Only append questions.
*/
(function () {
  "use strict";
  var H = window.DiseaseContent, M = window.MedContent;
  var Tbl = H.Tbl, HY = H.HY, Mn = H.Mn, Q = H.Q, L = H.L, Med = M.Med, ul = M.ul;

  window.CARDIO3_MEDS_TESTING = L("meds3-testing", "Stress test & cath lab drugs", [

    Med("med3-adenosine-stress", "Adenosine and dipyridamole (vasodilator stress)", "Vasodilator stress for nuclear MPI; hold caffeine 12 h; no active wheezing", ["Cardiac Testing"], {
      uses: ul(["<strong>Pharmacologic stress</strong> when the patient <strong>cannot exercise</strong> or has a contraindication to exercise.", "<strong>LBBB or pacemaker</strong>, and patients on <strong>digoxin</strong>: vasodilator stress is the pick.",
        "<strong>Vasodilators are preferred for nuclear MPI</strong> (SPECT) and can be combined with low-level exercise."]),
      moa: "<p>Adenosine (dipyridamole raises it by blocking its reuptake, standard teaching) dilates coronary arterioles. Normal arteries dilate more than stenosed ones, so flow is <strong>uneven</strong> and the tracer shows the defect (\"coronary steal\", standard teaching). It does not raise HR much, so it shows a perfusion gap, not demand ischemia.</p>",
      avoid: ul(["<strong>Severe asthma/COPD with active wheezing</strong> (bronchospasm).", "Hypotension (SBP &lt;90).", "Severe bradycardia (&lt;40).", "<strong>High-degree AV block / sick sinus</strong> (without pacemaker).",
        "<strong>Caffeine/xanthines within 12 h</strong>, <strong>aminophylline within 24 h</strong>: they block adenosine receptors.", "<strong>Dipyridamole (Aggrenox) within 48 h</strong> (before adenosine)."]),
      se: ul(["Chest pain (20%), dyspnea (12%), dizziness (12%), headache (12%), ST-T changes (5–8%), nausea (3%)."]),
      pearls: ul(["The slide notes say the contraindication list is a <strong>test question</strong>.", "Aminophylline reverses adenosine side effects because it blocks the same receptor (standard teaching)."]) +
        Mn("Before adenosine", "\"No coffee, no wheeze, no block\": caffeine 12 h, active bronchospasm, high-grade AV block/SSS.")
    }, [
      Q("avoid", "A patient arrives for an adenosine nuclear stress test after two cups of coffee this morning. What happens?", ["Reschedule: caffeine within 12 hours blocks adenosine", "Proceed, coffee does not matter", "Give double adenosine", "Switch to exercise even though he cannot walk"], 0, "Caffeine is an adenosine receptor blocker, so the test could be falsely negative."),
      Q("avoid", "Which patient should NOT get adenosine stress?", ["COPD with active wheezing", "LBBB", "Paced rhythm", "Knee arthritis unable to walk"], 0, "Adenosine can trigger bronchospasm in reactive airways."),
      Q("uses", "A patient with LBBB needs a stress test for chest pain. Best stress method?", ["Vasodilator (adenosine or regadenoson) nuclear MPI", "Exercise ECG alone", "Dobutamine with ECG only", "No test possible"], 0, "LBBB makes ST changes unreadable and exercise can cause false septal defects, so vasodilator MPI is used."),
      Q("avoid", "A patient took aminophylline 6 hours ago. Adenosine stress today?", ["No: aminophylline within 24 hours blocks adenosine", "Yes", "Yes, if he skips coffee", "Only with dobutamine"], 0, "Aminophylline is a xanthine that blocks adenosine receptors."),
      Q("avoid", "Patient with third-degree AV block and no pacemaker needs pharmacologic stress. Adenosine?", ["Contraindicated", "Preferred", "Fine at low dose", "Only with atropine"], 0, "Adenosine slows AV conduction and can worsen block."),
      Q("se", "During adenosine infusion the patient feels chest pressure and short of breath. Most likely?", ["Expected adenosine side effects (chest pain and dyspnea are common)", "Anaphylaxis", "Aortic dissection", "Pulmonary embolism"], 0, "Chest pain occurs in about 20% and dyspnea in about 12% with adenosine.")
    ]),

    Med("med3-regadenoson", "Regadenoson (Lexiscan)", "Selective A2A vasodilator, single bolus; can be given during exercise when the patient cannot reach workload", ["Cardiac Testing"], {
      uses: ul(["Vasodilator stress for <strong>nuclear MPI</strong>.", "Can be <strong>injected during exercise</strong> for a patient who started an exercise SPECT but cannot reach the target workload."]),
      moa: "<p>Selective <strong>A2A adenosine receptor agonist</strong> → coronary vasodilation; given as one bolus (standard teaching).</p>",
      avoid: ul(["<strong>2nd or 3rd degree AV block</strong> without a pacemaker.", "<strong>Sinus node dysfunction</strong> without a pacemaker.", "Hypotension.", "Caffeine also blunts it (standard teaching)."]),
      se: ul(["Dyspnea (28%), <strong>headache (26%)</strong>, tachycardia (22%), flushing (16%), PVCs (14%), chest pain (13%), ST depression (12%)."]),
      pearls: ul(["Its contraindication list is shorter than adenosine's (asthma is not on the slide: A2A-selective, standard teaching)."]) + HY("Lexiscan: conduction disease without a pacer = no.")
    }, [
      Q("uses", "A patient starts an exercise SPECT but stops at 4 minutes, far from target HR. Which drug lets the test continue?", ["Regadenoson injected during exercise", "Dobutamine IV push", "Atropine", "Metoprolol"], 0, "Regadenoson's pharmacokinetics allow injection during exercise to complete the MPI."),
      Q("avoid", "Which patient should not get regadenoson?", ["Sick sinus syndrome without a pacemaker", "LBBB", "Knee replacement", "Pacemaker-dependent patient"], 0, "Sinus node dysfunction without a pacer is a listed contraindication."),
      Q("moa", "What receptor does regadenoson target?", ["Adenosine A2A", "Beta-1", "Muscarinic M2", "P2Y12"], 0, "A2A receptors on coronary vessels cause vasodilation."),
      Q("se", "Most common regadenoson side effects?", ["Dyspnea and headache", "Constipation and gout", "Gynecomastia", "Cough and angioedema"], 0, "Dyspnea (28%) and headache (26%) lead the slide's list.")
    ]),

    Med("med3-dobutamine-stress", "Dobutamine (stress echo)", "β1 agonist that raises HR and contractility; preferred for stress echo; avoid in unstable angina, AS, HCM", ["Cardiac Testing", "CAD Part I: Foundations"], {
      uses: ul(["<strong>Preferred pharmacologic agent for stress echocardiography</strong>.", "Can't exercise <strong>and</strong> has a contraindication to vasodilator stress (for example active wheezing).", "<strong>Evaluation of valvular heart disease</strong> (dobutamine only).",
        "Higher sensitivity than pharmacologic vasodilator stress on echo."]),
      moa: "<p>Synthetic catecholamine → <strong>β1 stimulation</strong> → ↑ HR (chronotropy) and ↑ contractility (inotropy) → ↑ O<sub>2</sub> demand, so ischemic walls stop moving well on echo (wall-motion abnormality).</p>",
      avoid: ul(["<strong>Unstable angina, recent MI</strong>.", "Hypotension or uncontrolled hypertension.", "<strong>Tachyarrhythmias</strong>.", "<strong>Symptomatic severe aortic stenosis</strong>, <strong>HCM</strong>.", "<strong>Aortic dissection</strong> or large aortic aneurysm."]),
      se: ul(["About <strong>75%</strong> of patients: chest pain (31%), palpitations (29%), headache, flushing, dyspnea (14% each).", "<strong>Significant SVT/VT arrhythmias (8–10%)</strong>.", "Ischemic ST depression (33%)."]),
      pearls: ul(["Beta blockers blunt dobutamine (and exercise) response (standard teaching).", "Vasodilators make a flow gap (MPI); dobutamine raises demand (echo)."]) +
        HY("Wheezing + can't walk → dobutamine echo. LBBB/pacer → vasodilator MPI.")
    }, [
      Q("uses", "A patient with active COPD wheezing cannot walk on a treadmill. Which pharmacologic stress fits?", ["Dobutamine stress echo", "Adenosine MPI", "Dipyridamole MPI", "Exercise ECG"], 0, "Vasodilators can trigger bronchospasm, so dobutamine is the alternative."),
      Q("avoid", "Which patient should NOT get dobutamine stress?", ["Symptomatic severe aortic stenosis", "Asthma with wheezing", "Knee arthritis", "Obesity"], 0, "Raising contractility against a fixed outflow can cause collapse or ischemia."),
      Q("moa", "How does dobutamine reveal ischemia on echo?", ["Raises HR and contractility, so walls with poor supply stop moving well", "Dilates normal arteries to steal flow", "Lowers preload", "Blocks the AV node"], 0, "More demand unmasks territories whose stenosed artery cannot keep up."),
      Q("se", "During dobutamine echo the patient develops sustained VT. Is this a known risk?", ["Yes: significant arrhythmias occur in about 8-10%", "No, it never causes arrhythmias", "Only with caffeine", "Only in pacemaker patients"], 0, "β1 stimulation is pro-arrhythmic."),
      Q("avoid", "A man with a known 6 cm aortic aneurysm needs a stress test. Dobutamine?", ["No: aortic dissection or large aneurysm is a contraindication", "Yes, preferred", "Yes, with nitro", "Only for valves"], 0, "Surges in HR and contractility raise aortic wall stress."),
      Q("uses", "Which stress agent is listed for evaluating valvular heart disease?", ["Dobutamine", "Adenosine", "Regadenoson", "Dipyridamole"], 0, "Raising flow with dobutamine shows how a valve behaves under load.")
    ]),

    Med("med3-cath-prep", "Cath lab prep: contrast allergy premeds, metformin, held drugs, hydration", "Prednisone 50 mg at 13, 7 and 1 h + Benadryl 50 mg; hold metformin day of and 48 h after; hydrate", ["Cardiac Testing", "CAD Part III: Chest Pain Workup", "CAD Part V: Pharmacology", "Cardiac Surgery"], {
      uses: Tbl(["Problem", "Drug plan"], [
        ["<strong>Contrast dye allergy</strong>", "<strong>Prednisone 50 mg 13, 7 and 1 h before</strong> + <strong>diphenhydramine (Benadryl) 50 mg 1 h before</strong>. Documented anaphylaxis to dye is a cath contraindication"],
        ["<strong>Metformin</strong>", "<strong>Hold the day of and 48 h after</strong> the procedure"],
        ["ACEi, ARB, diuretics", "May be held the morning of the cath"],
        ["Anticoagulation (warfarin)", "Held before; <strong>INR must be &lt;1.5</strong>"],
        ["Contrast kidney injury prevention", "<strong>Pre-hydrate with IV normal saline</strong>; consider N-acetylcysteine PO BID × 4 doses; hold nephrotoxins"],
        ["Coronary CTA", "Beta blocker to slow HR to 60–70, nitroglycerin to dilate, IV contrast"],
        ["Sedation", "A sedative to relax; NPO after midnight"]
      ]),
      moa: "<p>Steroid + antihistamine blunt the <strong>anaphylactoid</strong> (non-IgE) reaction to iodinated contrast. Hydration dilutes contrast and keeps kidney flow up. Metformin is held because contrast AKI could let it build up and cause <strong>lactic acidosis</strong> (standard teaching).</p>",
      avoid: ul(["Documented anaphylaxis to contrast.", "Nephrotoxins around contrast (aminoglycosides, NSAIDs; ACEi and contrast after CABG)."]),
      se: ul(["Contrast-associated AKI: more likely with CKD stage IIIb+, diabetes, dehydration, hypotension.", "Cholesterol emboli AKI comes later and is progressive (not a drug effect)."]),
      pearls: ul(["Monitor creatinine after contrast.", "Thomas-type question: diabetic on metformin with CKD going to LHC → hold metformin, hydrate, hold nephrotoxins."]) +
        HY("Dye allergy: prednisone 13-7-1 + Benadryl 1 h. Metformin: hold day of + 48 h.")
    }, [
      Q("uses", "A patient had hives with contrast before and needs an elective LHC. Premedication?", ["Prednisone 50 mg at 13, 7 and 1 hour before, plus diphenhydramine 50 mg 1 hour before", "Epinephrine 1 mg before", "No premeds needed", "Cancel the cath forever"], 0, "Steroids and antihistamine blunt the anaphylactoid reaction to iodinated dye."),
      Q("uses", "A diabetic on metformin is scheduled for a heart cath. Metformin plan?", ["Hold the day of and for 48 hours after", "Double the dose", "No change", "Hold for 2 weeks"], 0, "If contrast injures the kidneys, metformin accumulates and can cause lactic acidosis."),
      Q("uses", "A patient on warfarin needs a cath. What INR does the lecture require?", ["Below 1.5", "2 to 3", "Above 3", "INR does not matter"], 0, "A low INR limits access-site bleeding."),
      Q("uses", "Best way to prevent contrast-associated AKI in a CKD patient?", ["IV normal saline hydration and holding nephrotoxins", "Furosemide before the dye", "Ibuprofen after", "Extra contrast to flush"], 0, "Hydration keeps renal flow up and dilutes the contrast."),
      Q("uses", "Before a coronary CTA, why is a beta blocker given?", ["To slow HR to 60-70 for clear images", "To treat contrast allergy", "To prevent AKI", "To dilate the coronaries"], 0, "A slow heart moves less between frames, so the arteries look sharp."),
      Q("avoid", "Which history is a contraindication to a heart cath on the lecture's list?", ["Documented anaphylaxis to contrast dye", "Mild seasonal allergies", "Shellfish dislike", "Prior hives from penicillin"], 0, "True anaphylaxis to dye is too dangerous for an elective study.")
    ])
  ]);
}());
