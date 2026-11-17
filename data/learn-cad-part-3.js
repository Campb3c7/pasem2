/*
  CAD Part III (chest pain, ACS workup, testing and treatment) "from zero" lessons (engine: learn-path.js,
  figures: cardio3-learn.js). Same visual step-by-step style as the other Cardio Part 3 paths (Anna, 2026-11-16).
  Facts follow the deck (source-material/cardio-part-3/text/cad-part-3.md) as built into data/cad-part-3.js; anything
  not on the slides is marked "(standard teaching)". Analogies are teaching aids.
  Lesson ids (cad3l-*) are progress keys: never rename. Checks: K(prompt, answer, [wrong], why).
*/
(function () {
  "use strict";
  function K(prompt, answer, wrong, why) { return { prompt: prompt, answer: answer, wrong: wrong, why: why }; }
  function hy(x) { return '<div class="box-hy"><span class="lbl">Key idea</span>' + x + "</div>"; }
  function an(x) { return '<div class="box-mnemonic"><span class="lbl">Picture it</span>' + x + "</div>"; }
  function mn(x) { return '<div class="box-mnemonic"><span class="lbl">Mnemonic</span>' + x + "</div>"; }
  function std(x) { return '<div class="box-fix"><span class="lbl">Standard teaching</span>' + x + "</div>"; }
  function obj(id, mode, label, note) {
    return { label: label, note: note, objective: { course: "cardio-part-3", lecture: "cad-part-3", mode: mode, id: id } };
  }

  var parts = [
    { id: "p1", title: "Part 1 · Is this chest pain the heart?", blurb: "What angina is, the words that raise or lower the odds, anginal equivalents, women and older adults, the exam, the differential, and what to do in the office." },
    { id: "p2", title: "Part 2 · Stable angina and ACS", blurb: "The four syndromes on one line: stable angina, unstable angina, NSTEMI and STEMI, and what separates them." },
    { id: "p3", title: "Part 3 · The ED workup", blurb: "History, the EKG, troponin and hs-troponin, the first steps in the ED, STEMI vs no ST elevation, and the HEART score." },
    { id: "p4", title: "Part 4 · From testing to the cath lab", blurb: "CCTA vs stress testing, pretest probability, reading the cath (stenosis, TIMI, FFR), stents and DAPT, CTO and the complications." },
    { id: "p5", title: "Part 5 · Fixing it and living with it", blurb: "CABG vs PCI vs medicines, the long-term targets, the angina classes and the antianginal drugs." }
  ];

  var lessons = [
    /* ---------------- 1 ---------------- */
    {
      id: "cad3l-angina", part: "p1", title: "Angina and its three types", goal: "Angina is ischemic chest discomfort: stable, unstable, or vasospastic.",
      pages: [
        { title: "Why chest pain matters", fig: { type: "tiles", items: [["🚑", "#2 reason", "adults go to the ED"], ["🏥", "~4 million", "outpatient visits a year"], ["❤️", "> 18.2 million", "US adults with CAD"], ["⚰️", "> 365,000", "deaths a year: #1 for men and women"]] },
          html: "<p>Most chest pain isn't the heart, but the cost of missing it is so high that sorting serious from benign is the whole job.</p>" },
        { title: "What angina feels like", fig: { type: "flow", steps: ["Ischemia", "Retrosternal pressure, tightness, heaviness<br><small>not always called pain</small>", "To arm, jaw, shoulder or back<br><small>+ dyspnea, sweating, nausea</small>"], hi: 1 },
          html: hy("<strong>Silent ischemia</strong> happens in elderly and diabetic patients.") },
        { title: "Three types", fig: { type: "grid", cols: ["", "Stable", "Unstable", "Vasospastic (Prinzmetal)"], rows: [["Trigger", "Exertion or stress; rest relieves", "Rest or minimal exertion: emergency", "Can occur at rest"], ["Cause", "Fixed plaque", "Plaque rupture + thrombus", "Coronary spasm"], ["Ischemia", "Subendocardial", "", "Transmural, with ST elevation"]] },
          html: "<p>Same symptom, three different mechanisms, three very different responses.</p>" }
      ],
      checks: [
        K("Which angina type causes transmural ischemia with ST elevation?", "Vasospastic (Prinzmetal)", ["Stable", "Unstable", "Silent"], "Spasm closes the whole artery for a moment, so the full wall is ischemic."),
        K("Who is most likely to have silent ischemia?", "An elderly diabetic", ["A 25-year-old athlete", "A pregnant woman", "A child"], "Diabetes and age blunt the pain signal."),
        K("Angina at rest that is new or worsening is called…", "Unstable angina", ["Stable angina", "Prinzmetal angina only", "Costochondritis"], "Rest or minimal-exertion angina is an emergency from plaque rupture.")
      ],
      remember: [
        "Chest pain: #2 reason for ED visits; CAD is the #1 killer.",
        "Angina = ischemic retrosternal pressure ± radiation, dyspnea, sweating, nausea; silent in elderly/diabetics.",
        "Stable (fixed plaque), unstable (rupture + clot, emergency), vasospastic (spasm, transmural, ST ↑)."
      ],
      practice: [ obj("01-angina", "test", "Test: angina types", "Quick recall.") ]
    },

    /* ---------------- 2 ---------------- */
    {
      id: "cad3l-symptoms", part: "p1", title: "The symptoms and the equivalents", goal: "Four features describe ischemic pain; dyspnea and fatigue can stand in for it.",
      pages: [
        { title: "Four features", fig: { type: "tiles", items: [["💢", "Discomfort", "pressure, tight, heavy, squeezing; substernal"], ["↗️", "Radiation", "arm(s), shoulder, neck, jaw, back"], ["🏃", "Pattern", "exertion or stress; rest or NTG relieves"], ["😰", "Associated", "dyspnea, sweating, nausea, lightheaded, fatigue"]] },
          html: "<p>New, worsening, longer or resting symptoms raise concern for ACS.</p>" +
            hy("Symptoms don't match how much disease there is, and <strong>sudden cardiac death</strong> is sometimes the first symptom.") },
        { title: "Anginal equivalents", fig: { type: "tiles", items: [["😮‍💨", "Dyspnea", ""], ["🪫", "Unusual fatigue", "less exercise tolerance"], ["💫", "Exertional weakness", "or lightheadedness"], ["🤢", "Nausea", "or upper belly discomfort"]] },
          html: "<p>An anginal equivalent is a symptom <strong>other than chest discomfort</strong> that comes from ischemia.</p>" },
        { title: "Women and patients over 75", fig: { type: "grid", cols: ["Women", "Over 75"], rows: [["Chest pain still most common, but no chest pain more often than men", "33% of all ACS"], ["Nausea, upper belly pain, SOB, extreme fatigue", "Other diagnoses are still more common"], ["Jaw, neck, upper back pain; fainting", "SOB, syncope, confusion, belly pain, an unexplained fall"]] },
          html: an("In an older patient, a <strong>fall or new confusion</strong> can be the MI.") }
      ],
      checks: [
        K("Which is an anginal equivalent?", "Exertional dyspnea", ["Pleuritic chest pain", "Rash", "Cough with fever"], "Breathlessness with effort can be ischemia without chest pain."),
        K("An 82-year-old presents after an unexplained fall. Why consider ACS?", "Older adults often present atypically", ["Falls never relate to the heart", "Only if she has chest pain", "Only if she is a man"], "Over 75, ACS can show up as falls, syncope or confusion."),
        K("During an MI, compared with men, women are more likely to have…", "No chest pain", ["Only chest pain", "Fewer symptoms overall", "Fever"], "Women more often present without chest pain."),
        K("What is sometimes the first symptom of CAD?", "Sudden cardiac death", ["Leg swelling", "Headache", "Weight loss"], "Symptoms don't track disease, so some first present with arrest.")
      ],
      remember: [
        "Four features: discomfort, radiation, pattern (exertion, relief), associated symptoms.",
        "Equivalents: dyspnea, fatigue, exertional weakness, nausea/epigastric discomfort.",
        "Women: no chest pain more often; nausea, belly pain, SOB, fatigue.",
        "&gt; 75: 33% of ACS; falls, syncope, confusion."
      ],
      practice: [ obj("02-symptoms-equivalents", "test", "Test: symptoms", "Quick recall."), obj("03-women-older", "apply", "Apply: atypical presentations", "Short vignettes.") ]
    },

    /* ---------------- 3 ---------------- */
    {
      id: "cad3l-classify", part: "p1", title: "Words that raise or lower the odds", goal: "Squeeze in the middle = heart; sharp, shifting, breathing-related = probably not.",
      pages: [
        { title: "Listen to the words", fig: { type: "grid", cols: ["Higher odds", "In between", "Lower odds"], rows: [["Central, retrosternal", "Left-sided, dull, aching", "Sharp, fleeting"], ["Pressure, squeezing, gripping", "Stabbing, burning", "Shifting"], ["Heaviness, tightness", "Right-sided, tearing, ripping", "Pleuritic"], ["With exertion or stress", "", "Positional"]], hiCol: 0 },
          html: mn("Squeeze in the middle = heart. Sharp, shifting, breathing-related = probably not.") },
        { title: "Old and new labels", fig: { type: "quad", x: ["2021 AHA/ACC", "Diamond-Forrester (old)"], y: ["Labels", "How"], cells: [["Cardiac · possible cardiac · noncardiac", "'atypical' retired", "blue"], ["Typical · atypical · non-anginal", "no longer recommended", "ok"], ["Noncardiac = persists despite negative testing or low-risk pathway", "", "blue"], ["Count: substernal, exertional, relieved by rest/NTG", "3 = typical, 2 = atypical, 1 = non-anginal", "ok"]] },
          html: "<p>Know Diamond-Forrester for the boards; the guideline now uses cardiac, possible cardiac and noncardiac.</p>" }
      ],
      checks: [
        K("Which description most raises the odds of ischemia?", "Retrosternal squeezing with exertion", ["Sharp, fleeting, positional", "Pleuritic and shifting", "Pain with one finger on a rib"], "Central pressure with exertion is the classic ischemic pattern."),
        K("Diamond-Forrester: substernal and exertional, but not relieved by rest. Label?", "Atypical anginal", ["Typical anginal", "Non-anginal", "Noncardiac"], "Two of three criteria is atypical."),
        K("What did the 2021 guideline replace 'atypical' with?", "Cardiac, possible cardiac, noncardiac", ["Stable and unstable", "Typical only", "Class I to IV"], "It moved to labels that point to the likely cause.")
      ],
      remember: [
        "Higher odds: central, pressure/squeeze, heavy, exertional. Lower: sharp, fleeting, shifting, pleuritic, positional.",
        "Diamond-Forrester: substernal + exertional + relieved by rest/NTG; 3 typical, 2 atypical, 1 non-anginal.",
        "2021: cardiac, possible cardiac, noncardiac."
      ],
      practice: [ obj("04-classification", "test", "Test: classifying chest pain", "Quick recall."), obj("04-classification", "apply", "Apply: classify it", "Short vignettes.") ]
    },

    /* ---------------- 4 ---------------- */
    {
      id: "cad3l-exam-ddx", part: "p1", title: "The exam and the differential", goal: "The exam is normal between episodes; know the mimics and the trap that nitro relieves spasm too.",
      pages: [
        { title: "During ischemia", fig: { type: "tiles", items: [["😣", "Uncomfortable, pale, sweaty", ""], ["😮‍💨", "Short of breath", "rales"], ["😵", "Altered mentation", ""], ["🎵", "S4 'TEN-nes-see'", "stiff ventricle (common)"], ["🎵", "S3 'Ken-TUC-ky'", "weak ventricle (less often)"]] },
          html: "<p>When the patient isn't having ischemia, the exam is <strong>normal</strong>.</p>" +
            hy("S4 is the common ischemic gallop: the stiff ventricle resists the atrial kick.") },
        { title: "What else it could be", fig: { type: "grid", cols: ["System", "Causes"], rows: [["Pulmonary", "PE, pneumothorax, pneumonia, pleurisy"], ["GI", "GERD, PUD, esophageal spasm, pancreatitis, biliary, esophageal rupture"], ["Chest wall", "Costochondritis, rib fracture, cervical disc, zoster before the rash"], ["Other heart and aorta", "Pericarditis, dissection, aneurysm, myocarditis, takotsubo"], ["Psychiatric", "Anxiety, panic, hyperventilation, depression"]] },
          html: hy("Trap: <strong>esophageal spasm is relieved by nitroglycerin</strong>, so a nitro response doesn't prove angina.") },
        { title: "Red flags for something else", fig: { type: "grid", cols: ["Clue", "Think"], rows: [["Pleuritic, with breathing or cough", "Lung or chest wall"], ["Mid or lower abdomen", "GI"], ["Points with one finger; reproduced by pressing or moving", "Musculoskeletal"], ["Constant for days", "Lung or chest wall"], ["≤ 30 seconds", "Nerve pain"], ["To the legs or above the jaw", "Musculoskeletal"]] },
          html: "<p>Slide 20: a 58-year-old smoker with HTN and high lipids, substernal pressure walking uphill, to the left shoulder, gone in 5 minutes of rest. That's <strong>stable angina</strong>.</p>" }
      ],
      checks: [
        K("Which gallop is more common during ischemia?", "S4", ["S3", "Opening snap", "Pericardial knock"], "The stiff ischemic ventricle makes the atrial kick audible."),
        K("Chest pain relieved by nitroglycerin proves angina. True?", "No, esophageal spasm also responds to nitro", ["Yes, always", "Only in women", "Only with exertion"], "Nitro relaxes esophageal smooth muscle too."),
        K("Pain that lasts 20 seconds and is reproduced by pressing a rib suggests…", "Musculoskeletal pain", ["Unstable angina", "STEMI", "Aortic dissection"], "Fleeting, reproducible, point-tender pain is chest wall."),
        K("A patient with burning epigastric pain relieved by food. Likely?", "Peptic ulcer", ["Stable angina", "Pneumothorax", "Pericarditis"], "Food or antacid relief points to a peptic cause.")
      ],
      remember: [
        "Exam normal between episodes; during: pale, sweaty, dyspneic, rales, confusion, S4 (or S3).",
        "Mimics: PE, pneumothorax, GERD/PUD, spasm, biliary, MSK, pericarditis, dissection, anxiety.",
        "Nitro relieves esophageal spasm too.",
        "Red flags: pleuritic, positional, point-tender, constant for days, ≤ 30 s."
      ],
      practice: [ obj("05-exam", "test", "Test: the exam", "Quick recall."), obj("06-differential", "apply", "Apply: what else is it?", "Short vignettes.") ]
    },

    /* ---------------- 5 ---------------- */
    {
      id: "cad3l-office", part: "p1", title: "Chest pain in the office", goal: "Pain now → 911. Unstable features → cardiology now or ER. Stable → stress test.",
      pages: [
        { title: "Three doors", fig: { type: "tiles", items: [["🚑", "Pain right now", "call 911, ambulance to the ER"], ["⚠️", "Had pain, unstable features", "cardiology ASAP or the ER"], ["📋", "Had pain, stable features", "risk-stratify with stress testing"]] },
          html: an("Never drive an active chest pain patient to the ER yourself, and never send them in their own car.") +
            std("The ambulance rule is about arrhythmia and arrest on the way.") }
      ],
      checks: [
        K("Your clinic patient is having chest pressure now. Next step?", "Call 911 for an ambulance to the ER", ["Order an outpatient stress test", "Have them drive to the ER", "Reschedule"], "Active pain could be ACS, which needs monitored transport."),
        K("Pain last week with stable features, none now. Next step?", "Risk-stratify with a stress test", ["Call 911", "Send to the cath lab", "No workup"], "Stable features allow outpatient risk stratification."),
        K("Pain yesterday at rest, none now. Next step?", "Cardiology ASAP or the ER", ["Stress test in 6 weeks", "Reassure and discharge", "Antacids"], "Rest pain is an unstable feature.")
      ],
      remember: [
        "Pain now → 911 to the ER.",
        "Unstable features → cardiology ASAP or ER.",
        "Stable features → stress testing."
      ],
      practice: [ obj("07-office-triage", "test", "Test: office triage", "Quick recall.") ]
    },

    /* ---------------- 6 ---------------- */
    {
      id: "cad3l-stable", part: "p2", title: "Stable angina", goal: "Predictable, 5 to 10 minutes, relieved by rest or nitro: a fixed plaque.",
      pages: [
        { title: "Four syndromes on one line", fig: { type: "flow", steps: ["Stable angina", "Unstable angina", "NSTEMI", "STEMI"], hi: 0 },
          html: "<p>Coronary atherosclerosis shows up four ways. The last three are <strong>ACS</strong>.</p>" },
        { title: "The fixed plaque", fig: { type: "artery", stage: "plaque" },
          html: "<p>Stable angina is <strong>predictable and reproducible</strong>: exertion, cold or emotion bring it on, it lasts <strong>5 to 10 minutes</strong>, and rest or nitro relieve it. The plaque limits flow when demand rises. Ischemia is <strong>subendocardial and reversible</strong>: no muscle dies.</p>" },
        { title: "Thomas, 72", fig: { type: "tiles", items: [["🏃", "Pain after 15 min on the treadmill", "same for 6 months"], ["⏸️", "Walks 13 min, rests 5", "then fine"], ["💊", "On ASA, metoprolol, losartan", "prior MI and CABG"], ["✅", "Stable angina", "renew SL nitro"]] },
          html: "<p>The key word is <strong>unchanged</strong>. Same trigger, same amount, same relief for months.</p>" }
      ],
      checks: [
        K("How long does a typical stable angina episode last?", "5 to 10 minutes", ["A few seconds", "Several hours", "Days"], "Rest restores the balance within minutes."),
        K("What kind of ischemia does stable angina cause?", "Subendocardial and reversible", ["Transmural with necrosis", "None", "Only right ventricular"], "The inner layer is starved briefly and recovers."),
        K("Which of the four syndromes is NOT an ACS?", "Stable angina", ["Unstable angina", "NSTEMI", "STEMI"], "ACS covers the three unstable syndromes.")
      ],
      remember: [
        "Four syndromes: stable angina, UA, NSTEMI, STEMI (last three = ACS).",
        "Stable: predictable, exertion/cold/stress, 5 to 10 min, rest or NTG relieves.",
        "Fixed plaque; subendocardial, reversible ischemia."
      ],
      practice: [ obj("08-stable-angina", "test", "Test: stable angina", "Quick recall.") ]
    },

    /* ---------------- 7 ---------------- */
    {
      id: "cad3l-acs", part: "p2", title: "Unstable angina, NSTEMI, STEMI", goal: "Troponin separates UA from NSTEMI; ST elevation separates NSTEMI from STEMI.",
      pages: [
        { title: "When angina changes", fig: { type: "tiles", items: [["📈", "More often", ""], ["💥", "More severe", ""], ["⏳", "Lasts longer", ""], ["🛋️", "Less exertion, or at rest", ""], ["💊", "Less relief", "from rest or nitro"]] },
          html: "<p>ACS comes from sudden <strong>plaque rupture</strong>, plaque growing to a critical point, or a <strong>noncardiac illness</strong> that strains a diseased heart.</p>" },
        { title: "Three pictures", fig: { type: "acs" },
          html: "<p><strong>UA</strong>: ischemic symptoms, <strong>no troponin rise</strong>, no ST elevation (maybe ST depression or new T inversion). <strong>NSTEMI</strong>: troponin up, partial clot, no ST elevation, subendocardial infarct. <strong>STEMI</strong>: troponin up, often full occlusion, ST elevation, transmural infarct.</p>" +
            hy("Every ACS starts looking like UA. NSTEMI declares itself when the <strong>hs-troponin rises</strong>.") },
        { title: "Thomas, 4 months later", fig: { type: "flow", steps: ["Pain walking in from the parking lot", "Pain at rest on the couch, needs 2 nitro", "Office EKG: no ST or T changes", "Unstable angina"], hi: 3 },
          html: "<p>Less exertion, then rest: the pattern changed. That's ACS until proven otherwise.</p>" }
      ],
      checks: [
        K("Ischemic symptoms, normal troponins, no ST elevation. Diagnosis?", "Unstable angina", ["NSTEMI", "STEMI", "Stable angina"], "No troponin rise means no measurable injury yet."),
        K("Troponin rises but there is no ST elevation. Diagnosis?", "NSTEMI", ["Unstable angina", "STEMI", "Prinzmetal angina"], "Injury without ST elevation is NSTEMI."),
        K("Which ACS usually has a complete occlusion and transmural infarct?", "STEMI", ["NSTEMI", "Unstable angina", "Stable angina"], "Full occlusion injures the whole wall thickness."),
        K("Which can trigger ACS besides plaque rupture?", "A noncardiac illness straining a diseased heart", ["A normal stress test", "Taking a statin", "Positive remodeling"], "Severe illness raises demand on narrowed arteries.")
      ],
      remember: [
        "ACS = more frequent, severe, longer, less exertion or rest, less relief.",
        "UA: no troponin, no ST ↑. NSTEMI: troponin ↑, no ST ↑, partial clot, subendocardial.",
        "STEMI: troponin ↑, ST ↑, often complete occlusion, transmural."
      ],
      practice: [ obj("09-acs-ua", "test", "Test: ACS and UA", "Quick recall."), obj("10-nstemi-stemi", "apply", "Apply: UA, NSTEMI or STEMI?", "Short vignettes.") ]
    },

    /* ---------------- 8 ---------------- */
    {
      id: "cad3l-history-ekg", part: "p3", title: "History, risk factors and the EKG", goal: "OLDCARTS plus the extras; a normal first EKG does not rule out ACS.",
      pages: [
        { title: "OLDCARTS and beyond", fig: { type: "tiles", items: [["O", "Onset", "what were you doing?"], ["L", "Location", "point to it"], ["D", "Duration", ""], ["C", "Character", "pressure? sharp?"], ["A", "Aggravating / relieving", "exertion, meals, position, breath"], ["R", "Radiation", ""], ["T", "Timing / pattern", "changing?"], ["S", "Severity", "0 to 10, limits?"]] },
          html: "<p>Then keep going: associated symptoms, prior episodes, risk factors, cardiac history. Examine for vascular disease (carotid bruit, weak pulses). First tests: <strong>12-lead EKG</strong>, <strong>serial troponin</strong>, CBC, CMP, and tests for the differential like a CXR.</p>" },
        { title: "How worrying is each EKG finding?", fig: { type: "bars", items: [["T wave inversion", 25, "nonspecific", "ok"], ["ST depression", 50, "maybe", "ok"], ["New LBBB, LVH, PVCs", 60, "concerning", "bad"], ["ST elevation", 100, "definitive", "bad"]], note: "Bar length = how strongly it points to ischemia (slide 41)." },
          html: hy("A normal first EKG does <strong>not</strong> rule out ACS. Repeat it if symptoms continue or come back.") }
      ],
      checks: [
        K("Which EKG finding is definitive for ischemia on the deck's scale?", "ST elevation", ["T wave inversion", "ST depression", "PVCs"], "ST elevation is the strongest EKG sign of acute injury."),
        K("The first EKG is normal but pain continues. Next?", "Repeat the EKG", ["Discharge home", "Stop the workup", "Order a lipid panel only"], "Early EKGs can be normal; changes evolve."),
        K("Which exam finding suggests vascular disease?", "Carotid bruit", ["Clear lungs", "Normal capillary refill", "Warm hands"], "A bruit signals atherosclerosis elsewhere.")
      ],
      remember: [
        "OLDCARTS + associated symptoms, prior episodes, risk factors, history.",
        "First tests: 12-lead EKG, serial troponin, CBC, CMP, differential tests.",
        "T inversion nonspecific; ST depression maybe; LBBB/LVH/PVCs concerning; ST elevation definitive.",
        "Normal first EKG doesn't rule out ACS: repeat."
      ],
      practice: [ obj("11-initial-eval", "test", "Test: initial evaluation", "Quick recall."), obj("12-ekg", "test", "Test: the EKG", "Quick recall.") ]
    },

    /* ---------------- 9 ---------------- */
    {
      id: "cad3l-troponin", part: "p3", title: "Troponin", goal: "Troponin I is heart-only; it rises in 4 to 6 hours and lingers 7 to 10 days.",
      pages: [
        { title: "The troponin curve", fig: { type: "line", points: [["0 h", 0, "\u00a0"], ["4 h", 18, "detectable"], ["6 h", 40, "\u00a0"], ["12 h", 80, "\u00a0"], ["24 h", 100, "peak"], ["3 d", 60, "\u00a0"], ["7 d", 25, "\u00a0"], ["10 d", 8, "low"]], max: 115, xlabel: "time from ischemia", ylabel: "troponin", note: "Shape is a sketch (standard teaching); timing from slide 45 (regular assay)." },
          html: "<p>Troponin (T, C, I) spills from damaged heart muscle. <strong>Troponin I is only in cardiac cells</strong>, so it's the most specific. Detectable at <strong>4 to 6 hours</strong>, then low-level for <strong>7 to 10 days</strong>.</p>" },
        { title: "How good is it?", fig: { type: "bars", items: [["Sensitivity at 4 h", 50, "50%", "bad"], ["Sensitivity at 6 h", 97, "97%", "good"], ["Specificity", 95, "95%", "good"]] },
          html: hy("An <strong>early</strong> first troponin can be normal. Check again.") },
        { title: "Traps", fig: { type: "tiles", items: [["🫘", "ESRD, CKD stage 4", "always a bit high: compare with baseline"], ["⚡", "Fast arrhythmias", "can leak troponin"], ["🫁", "RV strain from PE", ""], ["💧", "Decompensated HF", ""]] },
          html: "<p>Troponin means <strong>muscle injury</strong>, not always a blocked artery.</p>" }
      ],
      checks: [
        K("Which troponin subunit is found only in cardiac cells?", "Troponin I", ["Troponin C", "All three equally", "None"], "Troponin I is the most cardiac-specific."),
        K("Troponin drawn 1 hour after pain began is normal. Conclusion?", "Too early: repeat it", ["MI is ruled out", "The patient has PE", "Discharge with no follow-up"], "It takes 4 to 6 hours to become detectable."),
        K("A dialysis patient has a mildly high troponin with no symptoms. Best approach?", "Compare with a prior baseline", ["Diagnose MI immediately", "Ignore all troponins forever", "Give thrombolytics"], "Poor clearance keeps troponin chronically high in ESRD."),
        K("How long does troponin stay elevated after an MI (regular assay)?", "7 to 10 days", ["1 hour", "24 hours", "6 months"], "It lingers at low levels for over a week.")
      ],
      remember: [
        "Troponin I = cardiac-only. Up at 4 to 6 h; stays 7 to 10 days.",
        "Sensitivity 50% at 4 h, 97% at 6 h; specificity 95%.",
        "Also up in ESRD/CKD 4, tachyarrhythmias, PE, decompensated HF."
      ],
      practice: [ obj("13-troponin", "test", "Test: troponin", "Quick recall."), obj("13-troponin", "apply", "Apply: troponin cases", "Short vignettes.") ]
    },

    /* ---------------- 10 ---------------- */
    {
      id: "cad3l-hs-trop", part: "p3", title: "hs-troponin and BNP", goal: "hs-troponin's strength is ruling OUT: high NPV, lower PPV.",
      pages: [
        { title: "Same molecule, sharper eyes", fig: { type: "quad", x: ["Strength", "Cost"], y: ["What", "So"], cells: [["Higher sensitivity → higher NPV", "", "pci"], ["Lower specificity → lower PPV", "", "bad"], ["No rise = no acute MI; finds very low-risk patients fast", "", "pci"], ["More noncardiac patients with detectable troponin", "", "bad"]] },
          html: "<p>The 2021 ACC guidelines recommend <strong>hs-troponin</strong>. To qualify, it must detect troponin in <strong>&gt; 50% of normal people</strong>.</p>" },
        { title: "Two ways to rule out", fig: { type: "flow", steps: ["Single value: arrived > 2 h after onset, below the sex-specific 99th percentile", "or", "Delta: two values 90 to 120 min apart, both below, minimal change → home"], hi: 2 },
          html: hy("hs-troponin is a <strong>rule-out</strong> test.") },
        { title: "BNP in one page", fig: { type: "flow", steps: ["High filling pressure stretches the ventricles", "Ventricles release BNP (+ inert NT-proBNP)", "Diuresis, natriuresis, ↓ RAAS, ↓ sympathetic"], hi: 1 },
          html: "<p>Named for the brain, made in the <strong>ventricles</strong>. A lab measures one or the other; they're <strong>not interchangeable</strong>. Renally cleared, so <strong>not helpful in AKI or significant CKD</strong>.</p>" }
      ],
      checks: [
        K("hs-troponin's main strength is…", "A high negative predictive value", ["A high positive predictive value", "Perfect specificity", "Diagnosing PE"], "Its sensitivity makes a negative result very reassuring."),
        K("Two hs-troponins 90 to 120 minutes apart, both below the 99th percentile, minimal change. Plan?", "Discharge home", ["Emergency cath", "Thrombolytics", "Admit to ICU"], "That delta pattern rules out acute MI."),
        K("Where is BNP mainly released?", "The cardiac ventricles", ["The brain", "The kidneys", "The liver"], "The name is historical; the ventricles make it when stretched."),
        K("Why is BNP unhelpful in significant CKD?", "It is renally cleared, so it's always elevated", ["Kidneys make BNP", "CKD lowers BNP to zero", "It measures creatinine"], "Poor clearance keeps the level high regardless of the heart.")
      ],
      remember: [
        "hs-troponin: same molecule, more precise; detects it in &gt; 50% of normal people.",
        "↑ sensitivity/NPV (rule-out), ↓ specificity/PPV.",
        "Rule-out: single value &gt; 2 h after onset below 99th percentile, or 2 values 90 to 120 min apart both below.",
        "BNP: ventricles, stretch; NT-proBNP not interchangeable; useless in AKI/CKD."
      ],
      practice: [ obj("14-hs-troponin", "test", "Test: hs-troponin", "Quick recall."), obj("15-bnp", "test", "Test: BNP", "Quick recall.") ]
    },

    /* ---------------- 11 ---------------- */
    {
      id: "cad3l-ed", part: "p3", title: "The ED: first steps, STEMI and NSTE-ACS", goal: "EKG in 10 minutes, chewed aspirin, then STEMI to the cath lab or serial troponins.",
      pages: [
        { title: "The first steps", fig: { type: "flow", steps: ["Triage<br><small>ABCs, vitals; think dissection, PE, tension pneumo</small>", "12-lead EKG within 10 min", "Labs + treatment<br><small>hs-trop, CBC, lytes, glucose; aspirin 325 chewed; SL NTG; O₂ only if sat &lt; 90%</small>"], hi: 1 },
          html: mn("EKG in 10; aspirin 325 chewed; O₂ only under 90.") },
        { title: "STEMI", fig: { type: "flow", steps: ["ST ↑ in ≥ 2 contiguous leads + ischemic picture", "Call interventional cardiology; STEMI pathway", "Aspirin + P2Y12 (ticagrelor or prasugrel)", "Cath lab: primary PCI"], hi: 3 },
          html: "<p>Don't wait for troponin when the EKG and the story show an occlusion.</p>" },
        { title: "No ST elevation", fig: { type: "grid", cols: ["Need", "Do"], rows: [["Is it MI?", "hs-troponin now and in 1 to 2 h; cardiology to bedside if highly suggestive"], ["Ongoing pain", "Repeat EKG every 10 to 20 min to catch a STEMI"], ["Relief", "SL NTG; IV NTG if pain persists, hypertension or pulmonary edema"], ["Rate", "Oral beta blocker within 24 h if no contraindications"], ["Clot", "UFH or enoxaparin once ACS is diagnosed"]] },
          html: "<p>Highly suggestive patients are admitted for UA/NSTEMI with a cardiology consult. Keep looking for other causes.</p>" }
      ],
      checks: [
        K("How soon should the 12-lead EKG be done?", "Within 10 minutes of arrival", ["Within 1 hour", "After troponin returns", "The next morning"], "A STEMI must be found fast to open the artery."),
        K("Chest pain, O₂ sat 97%. Oxygen?", "Not routinely", ["Yes, 15 L non-rebreather", "Yes, always 4 L", "Intubate"], "Oxygen is only for hypoxemia (sat under 90%)."),
        K("Which P2Y12 inhibitors are preferred for primary PCI?", "Ticagrelor or prasugrel", ["Clopidogrel", "Warfarin", "Heparin"], "They're preferred over clopidogrel for PCI."),
        K("NSTE-ACS with ongoing pain. How often to repeat the EKG?", "Every 10 to 20 minutes", ["Every 6 hours", "Once a day", "Only if troponin rises"], "Frequent EKGs catch an evolving STEMI.")
      ],
      remember: [
        "Triage → EKG in 10 min → hs-trop, labs, aspirin 325 chewed, SL NTG, O₂ only if &lt; 90%.",
        "STEMI: ST ↑ in ≥ 2 contiguous leads → cath lab; aspirin + ticagrelor/prasugrel.",
        "NSTE: hs-trop 0 and 1 to 2 h; EKG q10 to 20 min if pain; NTG, BB within 24 h, UFH or enoxaparin."
      ],
      practice: [ obj("16-ed-steps-stemi", "test", "Test: ED steps and STEMI", "Quick recall."), obj("17-ed-nste", "apply", "Apply: ED cases", "Short vignettes.") ]
    },

    /* ---------------- 12 ---------------- */
    {
      id: "cad3l-heart", part: "p3", title: "The HEART score and who goes home", goal: "Score five letters: 0-3 home, 4-6 observe, 7-10 admit.",
      pages: [
        { title: "Score a patient", fig: { type: "heartscore", start: [1, 0, 1, 1, 0] },
          html: "<p>Many ED patients become pain-free. They still need risk stratification: home with follow-up, or an observation rule-out?</p>" +
            mn("3 / 6 / 10: 0-3 go home, 4-6 observe, 7-10 admit.") },
        { title: "Score vs pathway", fig: { type: "quad", x: ["HEART score", "HEART Pathway"], y: ["What", "Low risk"], cells: [["A 0 to 10 risk score", "", "blue"], ["A decision pathway: score + EKG + serial troponins", "", "ok"], ["Score 0 to 3", "", "blue"], ["≤ 3, no ischemic EKG, negative serial troponins (original excludes known CAD)", "30-day death/MACE < 1%", "ok"]] },
          html: "<p>Low risk: discharge, no urgent stress test or CCTA, outpatient follow-up. Intermediate: observation, then <strong>CCTA</strong> (anatomy) or <strong>stress imaging</strong> (ischemia).</p>" },
        { title: "What negatives mean", fig: { type: "flow", steps: ["hs-trop at arrival", "Repeat in 1 to 2 h", "Intermediate risk: again at 3 to 6 h"], hi: 1 },
          html: hy("Nonischemic EKG + negative serial hs-troponins: \"An acute MI is unlikely, but you may still have CAD that explains your symptoms.\"") }
      ],
      checks: [
        K("HEART score 5. Plan?", "Serial troponins and observation; consider CCTA or stress testing", ["Discharge with no testing", "Emergency CABG", "Ignore it"], "4 to 6 is intermediate risk."),
        K("A 50-year-old gets how many age points?", "1", ["0", "2", "3"], "45 to 64 scores 1."),
        K("Troponin 4× normal scores how many points?", "2", ["0", "1", "3"], "More than 3× normal is 2 points."),
        K("What defines low risk for discharge?", "Estimated 30-day death or MACE below 1%", ["Troponin above the 99th percentile", "HEART score 7", "ST elevation"], "A validated pathway with under 1% risk allows discharge.")
      ],
      remember: [
        "HEART: History, EKG, Age (&lt; 45 / 45 to 64 / 65+), Risk factors, Troponin; 0 to 2 each.",
        "0-3 low (home), 4-6 intermediate (observe, CCTA or stress), 7-10 high (admit).",
        "Pathway = score + EKG + serial troponins; low = 30-day MACE &lt; 1%.",
        "Negative troponins rule out MI, not CAD."
      ],
      practice: [ obj("18-heart-score", "apply", "Apply: score HEART", "Case questions."), obj("19-heart-pathway", "test", "Test: the pathway", "Quick recall.") ]
    },

    /* ---------------- 13 ---------------- */
    {
      id: "cad3l-noninvasive", part: "p4", title: "CCTA, stress testing and pretest probability", goal: "CCTA shows anatomy; stress shows ischemia; above 15% pretest probability, test.",
      pages: [
        { title: "Anatomy vs function", fig: { type: "quad", x: ["CCTA", "Stress test"], y: ["Shows", "Weak spot"], cells: [["Coronary anatomy, soft and calcified plaque", "normal CCTA: obstructive CAD very unlikely", "blue"], ["Inducible ischemia", "exercise ECG, echo, MPI, MRI", "ok"], ["Contrast; calcium; fast or irregular rate", "can't say if a lesion causes ischemia", "blue"], ["Not for active chest pain", "stable outpatients only", "ok"]] },
          html: hy("CCTA = <strong>anatomy</strong>. Stress test = <strong>function</strong>.") },
        { title: "Pretest probability by age and sex", fig: { type: "grid", cols: ["Age", "Men", "Women"], rows: [["30 to 39", "≤ 4%", "≤ 5%"], ["40 to 49", "≤ 22%", "≤ 10%"], ["50 to 59", "≤ 32%", "≤ 13%"], ["60 to 69", "≤ 44%", "≤ 16%"], ["70+", "≤ 52%", "≤ 27%"]], hiCol: 1 },
          html: "<p><strong>≤ 15%</strong>: testing may be deferred (exercise EKG maybe). <strong>&gt; 15%</strong>: stress test or CCTA.</p>" +
            "<p>CAC refines it: 1 to 99 → ≤ 15%; 100 to 999 → 15 to 50%; ≥ 1,000 → &gt; 50%.</p>" +
            hy("Same age, men have a much higher pretest probability than women.") }
      ],
      checks: [
        K("Which test tells you whether a lesion causes ischemia?", "A stress test", ["CCTA", "Calcium score", "Lipid panel"], "Stress testing measures function, not anatomy."),
        K("A 45-year-old man's pretest probability tops out near…", "22%", ["4%", "52%", "90%"], "Men 40 to 49 are up to 22%."),
        K("Pretest probability 30%. Approach?", "Stress testing or CCTA", ["No testing", "Immediate cath", "Exercise EKG only, always"], "Above 15%, noninvasive testing is more likely to help."),
        K("Who should NOT get a stress test now?", "A patient with active chest pain", ["A stable outpatient with exertional angina", "A patient with intermediate risk", "A patient after a low-risk HEART pathway"], "Active pain needs ACS evaluation, not stress.")
      ],
      remember: [
        "CCTA: anatomy, soft + calcified plaque; normal = obstructive CAD very unlikely.",
        "Stress: inducible ischemia; stable outpatients, not active pain.",
        "≤ 15% may defer; &gt; 15% stress or CCTA. Men &gt; women at the same age.",
        "CAC: 1 to 99 ≤ 15%, 100 to 999 15 to 50%, ≥ 1,000 &gt; 50%."
      ],
      practice: [ obj("20-noninvasive-testing", "test", "Test: noninvasive testing", "Quick recall."), obj("20-noninvasive-testing", "apply", "Apply: pick the test", "Short vignettes.") ]
    },

    /* ---------------- 14 ---------------- */
    {
      id: "cad3l-cath", part: "p4", title: "From positive stress test to reading the cath", goal: "Positive stress → LHC. Significant = ≥ 70% (left main ≥ 50%), TIMI flow, FFR ≤ 0.80.",
      pages: [
        { title: "Stable Stan", fig: { type: "perfusion", state: "ischemia" },
          html: "<p>Stan, 46, ex-lineman, desk job, 50 lb heavier: 3 months of left chest pain mowing, relieved by rest. Regadenoson MPI: no EKG change, but <strong>reversible ischemia</strong>. A positive stress test → <strong>left heart cath</strong>.</p>" +
            "<p>A normal stress test is a good <strong>rule-out</strong>. The cath is invasive: NPO after midnight, lie flat.</p>" },
        { title: "Three cath outcomes", fig: { type: "tiles", items: [["🟢", "No significant disease", "false-positive stress test"], ["🔧", "Stentable disease", "diagnostic AND therapeutic"], ["💊", "Better treated with meds or CABG", "stays diagnostic"]] },
          html: "<p>A false positive happens.</p>" },
        { title: "Is it significant?", fig: { type: "coronary", hi: ["lm", "lad"], blocks: [["lm", ""], ["ladm", "≥ 70%"]] },
          html: "<p>Significant: <strong>≥ 70%</strong> in most arteries (like the LAD here), <strong>≥ 50%</strong> in the left main (top marker). In-between lesions: <strong>FFR ≤ 0.80</strong> (or iFR ≤ 0.89).</p>" +
            mn("Left main gets the lower bar because it feeds so much muscle.") },
        { title: "TIMI flow and FFR", fig: [{ type: "bars", items: [["TIMI 0", 3, "no flow", "bad"], ["TIMI 1", 18, "gets past, no perfusion", "bad"], ["TIMI 2", 55, "fills, but slow", "ok"], ["TIMI 3", 100, "normal: the goal after PCI", "good"]] }, { type: "eq", terms: [["FFR", "", ""], "=", ["P after", "", "stenosis"], "÷", ["P before", "", "stenosis"]] }],
          html: "<p>FFR is measured at maximum flow with adenosine. <strong>0.70</strong> = 70% of maximum flow gets through. ≤ 0.80 = enough to cause ischemia.</p>" }
      ],
      checks: [
        K("When is a left main stenosis significant?", "≥ 50%", ["≥ 70%", "≥ 90%", "Only at 100%"], "The left main feeds so much muscle that 50% counts."),
        K("An intermediate LAD lesion has FFR 0.75. Meaning?", "Physiologically significant", ["Not significant", "Normal flow", "A measurement error"], "FFR ≤ 0.80 means it limits flow enough to cause ischemia."),
        K("After a successful PCI, which TIMI grade is the goal?", "TIMI 3", ["TIMI 0", "TIMI 1", "TIMI 2"], "TIMI 3 is normal perfusion."),
        K("Stan's MPI shows reversible ischemia. Next step?", "Left heart cath", ["Repeat MPI next year", "Calcium score", "No further workup"], "A positive stress test leads to angiography.")
      ],
      remember: [
        "Normal stress test = good rule-out; positive → LHC.",
        "Cath outcomes: no disease (false +), stent it, or meds/CABG.",
        "Significant: ≥ 70%; left main ≥ 50%; FFR ≤ 0.80 or iFR ≤ 0.89.",
        "TIMI 0 none, 1 no perfusion, 2 delayed, 3 normal."
      ],
      practice: [ obj("21-stress-to-cath", "test", "Test: stress to cath", "Quick recall."), obj("22-lhc-findings", "apply", "Apply: read the cath", "Short vignettes.") ]
    },

    /* ---------------- 15 ---------------- */
    {
      id: "cad3l-stents", part: "p4", title: "Stents and DAPT", goal: "DES are preferred; thrombosis is sudden clot, restenosis is slow tissue; DAPT 12 months after ACS, 6 if stable.",
      pages: [
        { title: "Balloon, then stent", fig: [{ type: "artery", stage: "balloon" }, { type: "artery", stage: "stent" }],
          html: "<p><strong>Bare-metal stent</strong>: a metal scaffold, more restenosis, older. <strong>Drug-eluting stent</strong>: releases a drug that limits tissue growth, less restenosis, preferred.</p>" +
            hy("DES reduce restenosis and repeat procedures <strong>without</strong> raising stent thrombosis.") },
        { title: "Two ways a stent fails", fig: { type: "grid", cols: ["", "Stent thrombosis", "In-stent restenosis"], rows: [["Speed", "Sudden; hours to years", "Gradual"], ["What", "Clot in the stent", "Tissue regrows inside"], ["Cause", "Stopping DAPT early, poor expansion", "Neointimal hyperplasia"], ["Looks like", "ACS / acute MI", "Angina returns"]] },
          html: mn("Thrombosis = clot (sudden). Restenosis = tissue growth (slow).") },
        { title: "DAPT", fig: [{ type: "flow", steps: ["Stent injures the lining", "Platelets stick before endothelium covers it", "DAPT prevents stent thrombosis"], hi: 2 }, { type: "grid", cols: ["Drug", "How"], rows: [["Aspirin", "Blocks thromboxane A2"], ["P2Y12: clopidogrel, prasugrel (thienopyridines), ticagrelor", "Blocks ADP activation"]] }],
          html: mn("<strong>ACS = 12 months</strong> of aspirin + P2Y12 (if bleeding risk allows). <strong>Stable = 6</strong> months of aspirin + clopidogrel, then one drug.") }
      ],
      checks: [
        K("A patient stops clopidogrel a week after a stent and has an MI. Likely cause?", "Stent thrombosis", ["In-stent restenosis", "Positive remodeling", "Vasospasm only"], "Stopping DAPT early lets a clot form on the bare stent."),
        K("Angina slowly returns 8 months after a stent. Likely cause?", "In-stent restenosis", ["Stent thrombosis", "Aortic dissection", "Pericarditis"], "Tissue regrowth narrows the stent gradually."),
        K("DAPT duration after PCI for NSTEMI (normal bleeding risk)?", "At least 12 months", ["6 months", "1 month", "Lifelong P2Y12 only"], "ACS treated with PCI gets 12 months."),
        K("Which P2Y12 inhibitor is NOT a thienopyridine?", "Ticagrelor", ["Clopidogrel", "Prasugrel", "Ticlopidine"], "Ticagrelor works on the same receptor by a different chemical class.")
      ],
      remember: [
        "DES preferred: less restenosis, no more thrombosis.",
        "Thrombosis: sudden clot, early DAPT stop → ACS. Restenosis: slow neointimal growth → angina.",
        "Aspirin (TXA2) + P2Y12 (ADP): clopidogrel, prasugrel, ticagrelor.",
        "DAPT: ACS 12 months; stable 6 months."
      ],
      practice: [ obj("23-pci-stents", "test", "Test: stents", "Quick recall."), obj("24-dapt", "apply", "Apply: DAPT cases", "Short vignettes.") ]
    },

    /* ---------------- 16 ---------------- */
    {
      id: "cad3l-complications", part: "p4", title: "CTO and cath complications", goal: "Know the CTO, the retroperitoneal bleed, pseudoaneurysm vs fistula, and contrast AKI vs cholesterol emboli.",
      pages: [
        { title: "Chronic total occlusion", fig: { type: "artery", stage: "occluded" },
          html: "<p>A <strong>CTO</strong> is 100% blocked (TIMI 0) for <strong>≥ 3 months</strong>. Because it closed slowly, <strong>collaterals</strong> grew: enough at rest, not with exercise. Treatment: optimal meds, CTO PCI for lifestyle-limiting angina or viable ischemic muscle, or CABG.</p>" },
        { title: "Groin bleed you can't see", fig: { type: "groin" },
          html: "<p>Radial: hematoma, radial artery occlusion, perforation, rarely compartment syndrome. Femoral: hematoma, pseudoaneurysm, AV fistula, and the dangerous one, <strong>retroperitoneal hemorrhage</strong>: flank or back pain, low BP, fast HR, falling Hb, often <strong>no groin bruise</strong>. CT to diagnose.</p>" },
        { title: "Pseudoaneurysm vs AV fistula", fig: { type: "grid", cols: ["", "Pseudoaneurysm", "AV fistula"], rows: [["What", "Blood pools outside the artery", "Artery-to-vein connection"], ["Clue", "Pulsatile mass, pain out of proportion", "Continuous bruit, thrill"], ["Test", "Duplex ultrasound", "Duplex ultrasound"], ["Fix", "< 2 cm watch; else US-guided thrombin", "Many close; compression or endovascular"]] },
          html: mn("Pseudoaneurysm: pulsatile mass, thrombin fix. Fistula: continuous bruit, often closes on its own.") },
        { title: "Contrast AKI vs cholesterol emboli", fig: { type: "grid", cols: ["", "Contrast AKI", "Cholesterol emboli"], rows: [["When", "Early", "Later, creeping"], ["Who", "CKD 3b+, diabetes", "Catheter scraping plaque"], ["Skin", "Normal", "Livedo, blue toes with good pulses"], ["Labs", "", "Eosinophilia (up to 80%)"], ["Prevent/treat", "Hydrate, hold nephrotoxins", "Supportive"]] },
          html: hy("Blue toes with good pulses + livedo + eosinophilia + late rising creatinine = cholesterol emboli.") }
      ],
      checks: [
        K("Back pain and falling hemoglobin after femoral cath, no groin bruise. Suspect?", "Retroperitoneal hemorrhage", ["AV fistula", "Contrast allergy", "Stent restenosis"], "A high puncture bleeds into the retroperitoneum, out of sight."),
        K("A pulsatile groin mass after cath. Test of choice?", "Duplex ultrasound", ["CT head", "EKG", "Troponin"], "Ultrasound shows the pseudoaneurysm and its neck."),
        K("Two weeks after cath: blue toes with palpable pulses, eosinophilia, rising creatinine. Diagnosis?", "Cholesterol emboli syndrome", ["Contrast AKI", "DVT", "Raynaud's"], "Crystal emboli cause late AKI, skin signs and eosinophilia."),
        K("What defines a chronic total occlusion?", "100% blockage with TIMI 0 for at least 3 months", ["50% blockage for a week", "Any stent", "A clot after DAPT stops"], "Slow closure over months lets collaterals form.")
      ],
      remember: [
        "CTO: 100%, TIMI 0, ≥ 3 months; collaterals OK at rest only.",
        "Retroperitoneal bleed: high femoral puncture; back/flank pain, hypotension, ↓ Hb, no bruise → CT.",
        "Pseudoaneurysm: pulsatile mass → duplex → thrombin. AV fistula: continuous bruit.",
        "Contrast AKI early (CKD, DM). Cholesterol emboli late: livedo, blue toes, eosinophilia."
      ],
      practice: [ obj("26-access-complications", "test", "Test: access complications", "Quick recall."), obj("27-aki-emboli", "apply", "Apply: AKI or emboli?", "Short vignettes.") ]
    },

    /* ---------------- 17 ---------------- */
    {
      id: "cad3l-cabg-pci", part: "p5", title: "CABG vs PCI vs medicines", goal: "CABG: left main, 3 vessels, diabetes, low EF.",
      pages: [
        { title: "Pick the fix", fig: { type: "decide" },
          html: mn("CABG: <strong>L</strong>eft main, <strong>3</strong> vessels, <strong>D</strong>iabetes, <strong>L</strong>ow EF.") },
        { title: "Three paths", fig: { type: "grid", cols: ["CABG better", "PCI better", "Medicines only"], rows: [["Left main ≥ 50%; 3-vessel", "A few lesions", "Stable CAD"], ["Multivessel + diabetes (LAD)", "Normal LV function", "No critical (≥ 70%) stenosis"], ["Multivessel + EF < 35% (35 to 50% reasonable)", "", "No LV dysfunction"]] },
          html: "<p>Conduits: <strong>LIMA to the LAD</strong> (~90%+ open at 10 years), <strong>radial artery</strong> second, <strong>saphenous vein</strong> common but ~50 to 60% at 10 years.</p>" }
      ],
      checks: [
        K("Diabetic with 3-vessel disease including the LAD. Best revascularization?", "CABG", ["PCI", "Medicines only", "Thrombolytics"], "Diabetes with multivessel disease does better with surgery."),
        K("Single 80% RCA lesion, normal EF. Best?", "PCI", ["CABG", "No treatment ever", "Heart transplant"], "A limited lesion with normal LV function suits a stent."),
        K("Which conduit has the best 10-year patency?", "LIMA to the LAD", ["Saphenous vein", "Femoral vein", "Radial vein"], "The internal mammary artery resists atherosclerosis.")
      ],
      remember: [
        "CABG: left main ≥ 50%, 3-vessel, multivessel + DM, multivessel + low EF.",
        "PCI: few lesions, normal LV. Meds: stable, no critical stenosis, normal LV.",
        "LIMA → LAD best (~90%+ at 10 yr); radial second; SVG ~50 to 60%."
      ],
      practice: [ obj("28-cabg-vs-pci", "test", "Test: CABG vs PCI", "Quick recall."), obj("28-cabg-vs-pci", "apply", "Apply: pick the fix", "Short vignettes.") ]
    },

    /* ---------------- 18 ---------------- */
    {
      id: "cad3l-long-term", part: "p5", title: "Living with CAD", goal: "Risk factor control is the cornerstone; know the targets, the angina classes and the antianginals.",
      pages: [
        { title: "The targets", fig: { type: "tiles", items: [["🍬", "A1c < 7%", "some < 6.5%"], ["🧈", "LDL < 70", "< 100 at least; statin"], ["🛢️", "TG < 200", "fibrates, fish oil"], ["🩺", "BP < 130/80", ""], ["🚭", "Quit smoking", ""], ["🏃", "30 to 60 min", "moderate, 5×/week"], ["⚖️", "< 120% ideal weight", "BMI ≤ 24"]] },
          html: hy("Aggressive risk factor reduction is the <strong>cornerstone</strong> of CAD therapy.") +
            "<p>Cardiology every 3 to 6 months. Lifesaving drugs: <strong>high-intensity statin</strong>, <strong>aspirin</strong> 81 to 162 (P2Y12 if aspirin allergy). Ask every visit how much <strong>rescue nitro</strong> they use; the goal is normal activity without it.</p>" },
        { title: "CCS angina classes", fig: { type: "bars", items: [["Class I", 15, "only strenuous or prolonged exertion", "good"], ["Class II", 40, "brisk walking, stairs fast, after meals", "ok"], ["Class III", 70, "1 to 2 blocks, 1 flight at normal pace", "bad"], ["Class IV", 100, "any activity, or at rest", "bad"]], note: "Bar length = how limited the patient is." },
          html: "<p>The CCS class tracks how much daily life angina takes away.</p>" },
        { title: "Antianginals", fig: { type: "grid", cols: ["Class", "How", "Watch for"], rows: [["Beta blockers", "↓ HR, contractility, BP", "Brady, hypotension, bronchospasm; NOT in Prinzmetal"], ["Nitrates", "↓ preload/afterload, dilate coronaries", "Headache, flushing, orthostasis; tachyphylaxis"], ["CCBs (verapamil, diltiazem)", "↓ HR/BP, dilate coronaries", "Brady, constipation; may worsen HF"], ["Ranolazine", "Blocks late Na current", "No BP/HR effect; QTc ↑"]] },
          html: hy("Ranolazine is the one that <strong>doesn't lower BP or HR</strong>: useful when they're already low.") +
            std("Beta blockers leave alpha unopposed, which worsens vasospasm. ACEi/ARB are added in CAD with diabetes or LV dysfunction.") }
      ],
      checks: [
        K("Angina when walking one block on level ground. CCS class?", "III", ["I", "II", "IV"], "Marked limitation at 1 to 2 blocks is class III."),
        K("Which antianginal does not lower BP or heart rate?", "Ranolazine", ["Metoprolol", "Diltiazem", "Isosorbide dinitrate"], "Ranolazine blocks the late sodium current instead."),
        K("Which drug should be avoided in Prinzmetal angina?", "Beta blockers", ["Calcium channel blockers", "Nitrates", "Statins"], "Unopposed alpha stimulation can worsen spasm."),
        K("What is the cornerstone of long-term CAD therapy?", "Aggressive risk factor reduction", ["Yearly cath", "Lifelong antibiotics", "Bed rest"], "Controlling risk factors slows progression and prevents ACS.")
      ],
      remember: [
        "Targets: A1c &lt; 7, LDL &lt; 70, TG &lt; 200, BP &lt; 130/80, no smoking, exercise 5×/week, BMI ≤ 24.",
        "Statin + aspirin (P2Y12 if allergic); ask about rescue nitro every visit.",
        "CCS I strenuous, II slight, III 1 to 2 blocks, IV at rest.",
        "BB (not Prinzmetal), nitrates (tachyphylaxis), CCB, ranolazine (no BP/HR change, QTc)."
      ],
      practice: [ obj("29-long-term", "test", "Test: long-term care", "Quick recall."), obj("30-ccs-antianginals", "apply", "Apply: antianginals", "Short vignettes.") ]
    }
  ];

  window.CARDIO3_LEARN = window.CARDIO3_LEARN || {};
  window.CARDIO3_LEARN["cad-part-3"] = {
    prefix: "cad3l", short: "CAD Part III", heading: "Chest pain and ACS from zero",
    kicker: "Chest pain to cath lab, step by step",
    card: "Is it the heart? Then the four syndromes side by side, troponin and the ED steps, a tap-to-score HEART calculator, reading the cath (TIMI, FFR), stents and DAPT, complications, and the antianginals. Short lessons with pictures and a few easy checks.",
    intro: "Eighteen short lessons, one idea per page. Start with lesson 1: telling cardiac pain from everything else comes first.",
    parts: parts, lessons: lessons
  };
}());
