/* Cardio Part 3 Tiers: CAD Part III (Stager's chest pain workup and risk stratification deck), all three tiers, story format.
   Same shape and rules as data/tiers-cardio3-cad-part-1.js. Facts follow source-material/cardio-part-3/text/cad-part-3.md;
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
  T.units["t1|cad-part-3"] = { chunks: [
    { id: "angina", title: "What angina feels like", goal: "Angina is ischemic pressure, not always pain, and it comes in three types: stable, unstable and vasospastic.",
      pages: [
        { title: "Pressure, not always pain", fig: { type: "painmap", mode: "classic" },
          html: "<p><strong>Angina pectoris</strong> is chest discomfort caused by <strong>myocardial ischemia</strong>.</p>" +
            "<p>Patients often won't say \"pain\". They say <strong>pressure, tightness or heaviness</strong> behind the sternum, spreading to the <strong>arm, jaw, shoulder or back</strong>.</p>" +
            "<p>It often comes with <strong>dyspnea, diaphoresis and nausea</strong>.</p>" +
            hy("\"Silent\" ischemia happens in <strong>elderly and diabetic</strong> patients: no chest pain at all.") },
        { title: "Three kinds of angina", fig: { type: "tiles", items: [["🚶", "Stable", "exertion or emotion · goes away with rest · fixed plaque"], ["🛋️", "Unstable", "at rest or minimal exertion · plaque rupture + clot · EMERGENCY"], ["🌀", "Vasospastic (Prinzmetal)", "coronary spasm · can occur at rest · ST elevation"]] },
          html: "<p><strong>Stable angina</strong>: a fixed plaque. Exertion raises demand, the narrowed artery can't keep up, the inner layer (subendocardium) gets ischemic. Rest fixes it.</p>" +
            "<p><strong>Unstable angina</strong>: a plaque has <strong>ruptured and a clot formed</strong>. Pain comes at rest or with little effort. This is a <strong>medical emergency</strong>.</p>" +
            "<p><strong>Vasospastic (Prinzmetal)</strong>: the artery <strong>spasms</strong>. It can happen at rest and causes <strong>transmural</strong> ischemia with <strong>ST elevation</strong>.</p>" },
        { title: "What's happening in the artery", fig: { type: "artery", stage: "rupture", note: "Unstable angina: the plaque cap cracks and a clot builds on it. Stable angina is a fixed plaque without the crack." },
          html: "<p>Keep this picture for the whole lecture: <strong>stable = fixed narrowing</strong>; <strong>unstable = a cracked plaque with a clot</strong> on top.</p>" +
            mn("Stable = Same every time. Unstable = Unpredictable, at rest.") }
      ],
      remember: ["Angina = chest discomfort from myocardial ischemia: pressure, tightness, heaviness.", "Radiates to arm, jaw, shoulder or back; dyspnea, diaphoresis, nausea.", "Silent ischemia: elderly and diabetics.", "Stable: exertion, rest relieves, fixed plaque. Unstable: rest, rupture + clot, emergency. Vasospastic: spasm, rest, ST elevation."],
      check: [
        Q("Which patient is most likely to have \"silent\" ischemia?", "A 78-year-old with diabetes", ["A 35-year-old marathon runner", "A 50-year-old with GERD", "A 40-year-old with anxiety"], "Elderly and diabetic patients may have ischemia without chest pain."),
        Q("Chest pressure that now comes at rest, from a ruptured plaque with a clot, is:", "Unstable angina", ["Stable angina", "Vasospastic angina", "Costochondritis"], "Plaque rupture with thrombosis causing rest pain defines unstable angina."),
        Q("Which angina type causes transient ST elevation from coronary spasm?", "Vasospastic (Prinzmetal) angina", ["Stable angina", "Unstable angina", "Microvascular angina"], "Spasm causes transmural ischemia, which shows as ST elevation.")
      ],
      bank: [
        Q("Stable angina is caused by:", "A fixed atherosclerotic obstruction", ["Plaque rupture with clot", "Coronary artery spasm", "Aortic dissection"], "A fixed plaque limits flow only when demand rises with exertion.")
      ] },

    { id: "spectrum", title: "Thomas: stable to STEMI", goal: "Four syndromes on one ladder: stable angina, then the three ACS (UA, NSTEMI, STEMI), told by troponin and ST elevation.",
      pages: [
        { title: "Meet Thomas: stable angina", fig: { type: "patient", icon: "👴", name: "Thomas, 72", line: "HTN · HLD · DM · smoker · MI and 3-vessel CABG 6 years ago", chips: [["Chest pain", "after 15 min on treadmill", "ok"], ["Pattern", "same as 6 months ago", "good"], ["Exam", "normal", "good"]] },
          html: "<p>Thomas gets substernal chest pain after <strong>15 minutes</strong> on his treadmill. He walks 13 minutes, rests 5, then keeps going. It's <strong>the same</strong> as 6 months ago.</p>" +
            "<p>That's <strong>stable angina</strong>: predictable, reproducible, triggered by exertion, cold or emotion, lasting <strong>5 to 10 minutes</strong>, relieved by <strong>rest or nitroglycerin</strong>. His SL nitro is renewed.</p>" },
        { title: "Four months later: unstable angina", fig: { type: "patient", icon: "👴", name: "Thomas, 4 months later", line: "\"I'm worse.\"", chips: [["2 weeks ago", "pain walking in from the parking lot", "ok"], ["4 days ago", "pain sitting on the couch", "bad"], ["Relief", "only after 2 nitro", "bad"], ["EKG today", "no ST or T changes", "good"]] },
          html: "<p>The pain now comes with <strong>less exertion</strong>, then <strong>at rest</strong>, and needs <strong>more nitro</strong>. That change is the alarm.</p>" +
            "<p>ACS = more symptoms in <strong>frequency, severity, duration</strong>, with <strong>less provocation</strong> and <strong>less relief</strong>.</p>" +
            "<p>His troponin is normal and there's no ST elevation: <strong>unstable angina</strong>. Every ACS starts out looking like this, so the label can change as labs come back.</p>" },
        { title: "Two days later: NSTEMI or STEMI", fig: { type: "acs" },
          html: "<p>Thomas arrives by ambulance at 11 pm with worse pain not relieved by 3 nitro. His <strong>hs-troponin is 527</strong> (normal &lt; 15).</p>" +
            "<p>If the EKG shows <strong>T wave inversions</strong> and troponin is rising (527 → 1,637): <strong>NSTEMI</strong>. Heparin drip, cath in the morning.</p>" +
            "<p>If the EKG shows <strong>ST elevation</strong>: <strong>STEMI</strong>. Cath lab within 90 minutes, stent at 12:15 am.</p>" +
            mn("STEMI is the hat trick: symptoms + troponin + ST elevation.") },
        { title: "The whole ladder", fig: { type: "grid", cols: ["", "Troponin", "ST elevation", "In the artery"], rows: [["Stable angina", "normal", "no", "fixed plaque"], ["Unstable angina", "normal", "no", "reduced flow, often transient"], ["NSTEMI", "<strong>↑</strong>", "no", "partial occlusion"], ["STEMI", "<strong>↑</strong>", "<strong>yes</strong>", "often complete occlusion"]] },
          html: "<p>The last three are the <strong>acute coronary syndromes (ACS)</strong>. Two questions sort them: <strong>is troponin up?</strong> (injury) and <strong>is there ST elevation?</strong></p>" +
            hy("UA vs NSTEMI = troponin. NSTEMI vs STEMI = ST elevation.") }
      ],
      remember: ["Stable angina: predictable, exertion/cold/emotion, 5 to 10 min, rest or nitro relieves.", "ACS = UA, NSTEMI, STEMI: more frequent, severe, longer, less provocation, less relief.", "UA: no troponin rise, no ST elevation (may have ST depression or new T inversion).", "NSTEMI: troponin up, no ST elevation. STEMI: symptoms + troponin + ST elevation."],
      check: [
        Q("Chest pain at rest, normal troponins and no ST elevation. Diagnosis?", "Unstable angina", ["NSTEMI", "STEMI", "Stable angina"], "Ischemic symptoms without troponin rise or ST elevation is unstable angina."),
        Q("Rising troponin with T wave inversions but no ST elevation is:", "NSTEMI", ["Unstable angina", "STEMI", "Prinzmetal angina"], "Troponin rise means injury, and no ST elevation makes it an NSTEMI."),
        Q("Which three conditions make up the acute coronary syndromes?", "Unstable angina, NSTEMI, STEMI", ["Stable angina, NSTEMI, STEMI", "Unstable angina, pericarditis, STEMI", "Stable angina, unstable angina, NSTEMI"], "Stable angina is chronic; the three acute syndromes are UA, NSTEMI and STEMI.")
      ],
      bank: [
        Q("What separates unstable angina from NSTEMI?", "An elevated troponin", ["ST elevation", "Pain at rest", "Radiation to the jaw"], "Both can have rest pain and no ST elevation; only NSTEMI has myocardial injury.")
      ] },

    { id: "office", title: "Chest pain in your office", goal: "Pain right now means 911; unstable features mean cardiology now or the ER; stable symptoms mean a stress test.",
      pages: [
        { title: "Is the pain happening right now?", fig: { type: "flow", vertical: true, steps: ["Chest pain <strong>right now</strong><br><small>call 911 · ambulance to the ER</small>", "Pain before, not now, <strong>unstable features</strong><br><small>call cardiology to see them ASAP, or send to the ER</small>", "Pain before, not now, <strong>stable pattern</strong><br><small>risk stratify with a stress test</small>"], hi: 0 },
          html: "<p>When myocardial ischemia is on your list in clinic, the first question is <strong>is it happening now?</strong></p>" +
            "<p>Active chest pain goes to the ER <strong>by ambulance</strong>, not by car.</p>" +
            hy("Stress tests are for <strong>stable</strong> patients. Never stress-test active chest pain.") },
        { title: "Cardiac or not? Try a case", fig: { type: "patient", icon: "👨", name: "58-year-old man", line: "substernal pressure walking uphill or carrying groceries", chips: [["Radiates", "left shoulder", "bad"], ["Relief", "rest, within 5 min", "ok"], ["History", "HTN · HLD · 25 pack-years", "bad"]] },
          html: "<p>Substernal, brought on by exertion, relieved by rest, radiating to the shoulder, plus three risk factors. This is <strong>cardiac ischemia until proven otherwise</strong>: classic stable angina.</p>" +
            "<p>He's not in pain now and it's a stable pattern, so the next step is <strong>risk stratification with stress testing</strong>.</p>" }
      ],
      remember: ["Active chest pain in clinic → 911, ambulance to the ER.", "Not now but unstable features → cardiology ASAP or the ER.", "Not now, stable pattern → stress testing.", "Exertional substernal pressure relieved by rest + risk factors = think ischemia."],
      check: [
        Q("A patient in your office is having chest pressure right now. What do you do?", "Call 911 and send by ambulance to the ER", ["Order an outpatient stress test", "Have a family member drive them to the ER", "Give nitro and schedule follow-up"], "Active chest pain needs emergency evaluation by ambulance."),
        Q("A patient had exertional chest pressure last week, stable pattern, no pain now. Next step?", "Stress testing", ["Call 911", "Emergent cardiac cath", "Reassure and recheck in a year"], "Stable symptoms without active pain are risk stratified with a stress test."),
        Q("Pain at rest twice this week, none right now, in your office. What's the plan?", "Call cardiology to see them ASAP or send to the ER", ["Routine stress test in 6 weeks", "Start a PPI and recheck", "No workup needed"], "Rest pain is an unstable feature, so it needs urgent cardiology or ER evaluation.")
      ],
      bank: [
        Q("Which patient should NOT have a stress test today?", "A patient with chest pain right now", ["A patient with stable exertional angina", "A patient with chest pain 2 weeks ago, none since", "A patient with intermediate pretest probability"], "Stress testing is for clinically stable patients, not active chest pain.")
      ] },

    { id: "er-first", title: "The first 10 minutes in the ER", goal: "Stabilize, EKG within 10 minutes, troponin, chew aspirin; ST elevation in 2 contiguous leads means STEMI and the cath lab.",
      pages: [
        { title: "Three steps", fig: { type: "flow", steps: ["<strong>1. Triage</strong><br><small>ABCs, vitals, SpO₂, unstable? focused history</small>", "<strong>2. EKG in 10 min</strong><br><small>look for ST elevation</small>", "<strong>3. Labs + treat</strong><br><small>hs-troponin, CBC, BMP · aspirin · nitro</small>"] },
          html: "<p><strong>Step 1</strong>: airway, breathing, circulation, vitals, oxygen saturation. Look for instability: severe ongoing pain, hypotension, respiratory distress, syncope. Think about other killers: <strong>aortic dissection, PE, tension pneumothorax</strong>.</p>" +
            "<p><strong>Step 2</strong>: a 12-lead EKG <strong>read within 10 minutes</strong> of arrival.</p>" +
            "<p><strong>Step 3</strong>: high-sensitivity troponin plus CBC, electrolytes, renal function, glucose, and start treatment.</p>" },
        { title: "First treatment", fig: { type: "tiles", items: [["💊", "Aspirin 325 mg", "CHEWED, if ACS suspected"], ["👅", "Nitroglycerin SL", "for ongoing pain, if BP allows"], ["🫁", "Oxygen", "only if SpO₂ ≤ 90%"]] },
          html: "<p><strong>Chewable aspirin 325 mg</strong> when ACS is suspected and there's no contraindication.</p>" +
            "<p><strong>Sublingual nitroglycerin</strong> for ongoing ischemic pain if hemodynamically appropriate.</p>" +
            "<p><strong>Oxygen only for hypoxemia</strong>: don't give it routinely when saturation is over 90%.</p>" },
        { title: "The STEMI rule", fig: { type: "leads", hi: ["II", "III", "aVF"], recip: ["I", "aVL"], label: "ST elevation in 2+ neighboring leads (here: inferior)" },
          html: "<p><strong>ST elevation in 2 or more anatomically contiguous leads</strong> + a story of acute ischemia = <strong>STEMI</strong>.</p>" +
            "<p>Then: notify interventional cardiology, <strong>activate the STEMI pathway</strong>, give aspirin + a P2Y12 inhibitor, and go to the cath lab for <strong>primary PCI</strong>.</p>" +
            hy("Don't wait for troponin when the EKG already shows an occluded artery.") },
        { title: "A normal EKG doesn't clear them", fig: { type: "flow", steps: ["Normal or non-ST EKG", "hs-troponin now", "repeat in 1 to 2 h", "repeat EKGs if pain continues"] },
          html: "<p>A normal first EKG <strong>does not rule out ACS</strong>. Get <strong>serial EKGs</strong> if symptoms persist or suspicion stays high: every <strong>10 to 20 minutes</strong> while pain continues, looking for a STEMI to appear.</p>" }
      ],
      remember: ["Triage: ABCs, vitals, SpO₂; think dissection, PE, tension pneumothorax.", "12-lead EKG read within 10 minutes.", "hs-troponin; chew aspirin 325 mg; SL nitro if BP allows; O₂ only if SpO₂ ≤ 90%.", "ST elevation in ≥ 2 contiguous leads = STEMI → cath lab, don't wait for troponin.", "Normal EKG doesn't rule out ACS: repeat EKGs every 10 to 20 min with ongoing pain."],
      check: [
        Q("How soon should the 12-lead EKG be done and read in a chest pain patient?", "Within 10 minutes of arrival", ["Within 30 minutes", "Within 1 hour", "After the first troponin results"], "The EKG within 10 minutes finds STEMIs that need immediate reperfusion."),
        Q("A chest pain patient has SpO₂ 97%. Should you give oxygen?", "No, oxygen is only for hypoxemia", ["Yes, 4 L by nasal cannula for everyone", "Yes, a non-rebreather", "Only if troponin is up"], "Routine oxygen isn't given when saturation is above 90%."),
        Q("ST elevation in II, III and aVF with typical chest pain. What's next?", "Activate the STEMI pathway for primary PCI", ["Wait for the first troponin", "Admit for a stress test", "Repeat the EKG tomorrow"], "ST elevation in contiguous leads with ischemic symptoms is a STEMI, and reperfusion can't wait for labs.")
      ],
      bank: [
        Q("Which aspirin is given when ACS is suspected?", "325 mg chewed", ["81 mg swallowed", "650 mg rectal only", "None until cath"], "Chewing 325 mg gets antiplatelet effect fast.")
      ] },

    { id: "troponin", title: "Troponin, the injury marker", goal: "Troponin I is the most cardiac-specific marker; it rises in 4 to 6 hours, and hs-troponin rules MI out fast.",
      pages: [
        { title: "Where troponin comes from", fig: { type: "tiles", items: [["💔", "Dying myocytes", "ischemia spills troponin"], ["⚡", "Fast arrhythmias", "stress leak"], ["🫁", "PE with RV failure", "stress leak"], ["💧", "Decompensated HF", "stress leak"]], hi: 0 },
          html: "<p><strong>Troponin</strong> is a muscle protein with three subunits: T, C and I. Damaged heart cells spill it into the blood.</p>" +
            "<p>It can also <strong>leak with severe cardiac stress</strong>: tachyarrhythmias, RV failure from a PE, decompensated heart failure.</p>" +
            "<p><strong>Troponin I</strong> is found <strong>only in heart muscle</strong>, so it's the most specific for cardiac damage.</p>" },
        { title: "The timeline", fig: { type: "line", points: [["0 h", 0, "onset"], ["4-6 h", 30, "detectable"], ["24 h", 100, "peak"], ["3 d", 45, " "], ["7-10 d", 12, "still up"]], max: 115, ylabel: "troponin", note: "Shape for teaching; the deck gives the 4 to 6 hour rise and the 7 to 10 day tail (regular assay)." },
          html: "<p>Troponin I becomes <strong>detectable 4 to 6 hours</strong> after ischemia starts, peaks, then stays mildly <strong>elevated for 7 to 10 days</strong> on a regular assay.</p>" +
            "<p>So a patient who arrives quickly can have a <strong>normal first troponin</strong>. That's why we repeat it.</p>" },
        { title: "High-sensitivity: a better rule-out", fig: { type: "vs", a: ["Sensitivity ↑", "good", ["Catches almost every MI", "High negative predictive value", "No rise = no acute MI"]], b: ["Specificity ↓", "bad", ["Detectable in > 50% of healthy people", "More false alarms", "Lower positive predictive value"]], mid: "trade-off" },
          html: "<p><strong>hs-troponin</strong> measures the <strong>same molecule</strong>, just far more precisely at much lower levels.</p>" +
            "<p>The payoff: a fast, reliable <strong>rule-out</strong>, so low-risk patients go home sooner. The cost: more people without ACS have a detectable level and get worked up.</p>" +
            mn("hs-troponin is a great bouncer at the door: if it says no, it's no.") }
      ],
      remember: ["Troponin I is only in heart muscle: most specific for cardiac damage.", "Also leaks with tachyarrhythmias, PE with RV failure, decompensated HF.", "Detectable 4 to 6 h; stays up 7 to 10 days (regular assay). An early first troponin can be normal.", "hs-troponin: same molecule, more sensitive (great rule-out), less specific."],
      check: [
        Q("Which cardiac marker is the most specific for heart muscle damage?", "Troponin I", ["Troponin C", "CK total", "BNP"], "Troponin I is found only in cardiac cells."),
        Q("A patient arrives 1 hour after chest pain began and the first troponin is normal. What does that mean?", "It's too early to rule out MI; repeat it", ["MI is ruled out", "The patient has unstable angina", "Troponin is not useful in this patient"], "Troponin takes about 4 to 6 hours to become detectable on a regular assay."),
        Q("What is the main strength of hs-troponin?", "A high negative predictive value to rule out MI", ["Perfect specificity for MI", "It measures a different molecule", "It is undetectable in healthy people"], "Its high sensitivity means a negative result reliably excludes acute MI.")
      ],
      bank: [
        Q("Which can raise troponin without a coronary blockage?", "PE with right ventricular failure", ["Costochondritis", "GERD", "Anxiety"], "Severe cardiac stress such as RV strain from a PE can leak troponin.")
      ] },

    { id: "heart", title: "The HEART score", goal: "HEART sorts the chest-pain-free ER patient: 0 to 3 home, 4 to 6 observe and test, 7 to 10 admit.",
      pages: [
        { title: "Five letters, 0 to 2 points each", fig: { type: "heartscore", start: [1, 0, 1, 1, 0] },
          html: "<p>Many patients are <strong>pain free</strong> by the time they're evaluated. The ER now has to decide: <strong>high risk or low risk?</strong></p>" +
            "<p><strong>H</strong>istory, <strong>E</strong>KG, <strong>A</strong>ge, <strong>R</strong>isk factors, <strong>T</strong>roponin, each 0, 1 or 2. Tap the boxes to try it.</p>" },
        { title: "What the score means", fig: { type: "ladder", steps: [["0 to 3", "Low risk: if EKG and troponins are reassuring, discharge may be appropriate; routine urgent testing usually not needed", "good"], ["4 to 6", "Intermediate: serial hs-troponins, observation, consider CCTA or stress testing", "ok"], ["7 to 10", "High: urgent evaluation, usually hospital-level care", "bad"]] },
          html: "<p>Low risk goes home with outpatient follow-up. Intermediate stays for more evaluation. High gets admitted.</p>" +
            mn("3 and under go home; 7 and over stay.") }
      ],
      remember: ["HEART = History, EKG, Age, Risk factors, Troponin; 0 to 2 each, max 10.", "0 to 3 low: discharge may be appropriate if EKG and troponins reassure.", "4 to 6 intermediate: serial hs-troponin, observation, CCTA or stress test.", "7 to 10 high: urgent evaluation, usually admit."],
      check: [
        Q("A HEART score of 2 with a normal EKG and negative troponins suggests:", "Discharge with outpatient follow-up may be appropriate", ["Emergent cath", "Admission for a stress test", "Starting a heparin drip"], "0 to 3 is low risk when the EKG and troponins are reassuring."),
        Q("A HEART score of 5 falls in which group?", "Intermediate risk", ["Low risk", "High risk", "Very high risk"], "4 to 6 points is intermediate risk."),
        Q("What does the A in HEART stand for?", "Age", ["Angina", "Aspirin", "Arrhythmia"], "The letters are History, EKG, Age, Risk factors and Troponin.")
      ],
      bank: [
        Q("An intermediate HEART score usually leads to:", "Observation with serial troponins and CCTA or stress testing", ["Discharge home", "Emergent CABG", "Thrombolytics"], "Intermediate risk needs more evaluation before deciding.")
      ] }
  ] };

  /* =============================== TIER 2 · STANDARD DETAILS =============================== */
  T.units["t2|cad-part-3"] = { chunks: [
    { id: "symptoms", title: "Atypical patients and anginal equivalents", goal: "Ischemia can show up as dyspnea or fatigue, especially in women and patients over 75.",
      pages: [
        { title: "Anginal equivalents", fig: { type: "tiles", items: [["😮‍💨", "Dyspnea", ""], ["🪫", "Unusual fatigue", "reduced exercise tolerance"], ["😵", "Exertional weakness", "or lightheadedness"], ["🤢", "Nausea", "or upper abdominal discomfort"]] },
          html: "<p>An <strong>anginal equivalent</strong> is a symptom <strong>other than chest discomfort</strong> that reflects ischemia.</p>" +
            "<p>Other history clues: <strong>progressively worse dyspnea</strong> or exercise intolerance, palpitations, lightheadedness, weight gain over days or leg edema.</p>" +
            hy("Symptoms don't match how severe the disease is. <strong>Sudden cardiac death</strong> is sometimes the first symptom.") },
        { title: "Women", fig: { type: "painmap", mode: "women" },
          html: "<p>Women more often report <strong>nausea/vomiting, abdominal pain, shortness of breath and severe fatigue</strong>.</p>" +
            "<p>During an MI, women are <strong>more likely than men to have no chest pain</strong>.</p>" },
        { title: "Patients over 75", fig: { type: "tiles", items: [["😮‍💨", "Shortness of breath", ""], ["😶‍🌫️", "Syncope", ""], ["🧠", "Confusion", ""], ["🤰", "Abdominal pain", ""], ["⬇️", "Unexplained fall", ""]] },
          html: "<p>Patients over 75 are <strong>a third of all ACS</strong>, but an alternative diagnosis is still more common when they present with chest pain.</p>" +
            "<p>Their ACS may look like <strong>dyspnea, syncope, mental impairment, abdominal pain or an unexplained fall</strong>.</p>" }
      ],
      remember: ["Anginal equivalents: dyspnea, unusual fatigue, exertional weakness/lightheadedness, nausea/upper abdominal discomfort.", "Symptoms don't track disease severity; sudden death can be the first sign.", "Women: nausea, abdominal pain, SOB, fatigue; more often MI without chest pain.", "Over 75: SOB, syncope, confusion, abdominal pain, unexplained fall."],
      check: [
        Q("A 70-year-old diabetic has new exertional dyspnea and no chest pain. This may be:", "An anginal equivalent", ["Definitely pulmonary", "Musculoskeletal pain", "Normal aging only"], "Dyspnea can be how ischemia presents, especially in diabetics and older adults."),
        Q("During an MI, which group is more likely to present without chest pain?", "Women", ["Men", "Young athletes", "Smokers"], "Women more often have nonspecific symptoms and no chest pain."),
        Q("An 82-year-old presents after an unexplained fall. Could this be ACS?", "Yes, patients over 75 can present with a fall", ["No, ACS always causes chest pain", "Only if they also have fever", "Only if under 65"], "Older patients may present with falls, syncope, confusion or dyspnea.")
      ],
      bank: [
        Q("What can be the first symptom of CAD?", "Sudden cardiac death", ["Leg cramps", "Headache", "Rash"], "Symptoms don't reliably match the disease, and sudden death can come first.")
      ] },

    { id: "not-heart", title: "Clues it's not the heart", goal: "Pleuritic, one-finger, reproducible, fleeting or days-long pain points away from ischemia.",
      pages: [
        { title: "The differential", fig: { type: "tiles", items: [["🫁", "Pulmonary", "PE, pneumothorax, pneumonia, pleurisy"], ["🍽️", "GI", "GERD/PUD, esophagitis, pancreatitis, esophageal spasm, biliary colic, cholangitis"], ["🦴", "Chest wall", "costochondritis, rib fracture"], ["❤️", "Non-ischemic CV", "pericarditis, aortic dissection"], ["🧠", "Psychiatric", "anxiety, hyperventilation, panic, conversion"]] },
          html: "<p>Most chest pain isn't cardiac, but you have to tell the serious from the benign. Here's the list by system.</p>" },
        { title: "Clue → think", fig: { type: "grid", cols: ["The pain is...", "Think"], rows: [["Sharp, pleuritic, worse with breathing or cough", "pulmonary or MSK"], ["Mainly mid or lower abdomen", "GI"], ["Pointed to with <strong>one finger</strong>", "MSK"], ["Reproduced by movement or <strong>palpation</strong>", "MSK"], ["Constant for <strong>days</strong>", "pulmonary or MSK"], ["Fleeting, <strong>≤ 30 seconds</strong>", "nerve (MSK)"], ["Radiates to the legs or <strong>above the jaw</strong>", "MSK"]], hiCol: 1 },
          html: "<p>Ischemia is a diffuse pressure that builds over minutes. Anything very <strong>localized, reproducible, very short or very long</strong> points elsewhere.</p>" +
            mn("Angina doesn't fit under one finger, doesn't last seconds, and doesn't last days.") }
      ],
      remember: ["Pulmonary: PE, pneumothorax, pneumonia, pleurisy. GI: GERD/PUD, esophagitis, pancreatitis, spasm, biliary. Chest wall: costochondritis, rib fx. CV: pericarditis, dissection. Psych.", "Pleuritic → pulmonary or MSK. Lower abdominal → GI.", "One finger, reproducible by palpation, ≤ 30 s, above the jaw or into the legs → MSK.", "Constant for days → pulmonary or MSK."],
      check: [
        Q("Chest pain reproduced by pressing on the costal cartilage suggests:", "Musculoskeletal pain", ["Unstable angina", "Aortic dissection", "Pulmonary embolism"], "Pain reproduced by palpation points to the chest wall."),
        Q("Sharp chest pain lasting about 10 seconds at a time is most likely:", "Nerve (musculoskeletal) pain", ["Stable angina", "NSTEMI", "Pericarditis"], "Fleeting pains of 30 seconds or less suggest nerve pain."),
        Q("Sharp pain that worsens with deep breaths points first toward:", "A pulmonary or musculoskeletal cause", ["Stable angina", "Biliary colic", "Panic disorder"], "Pleuritic pain tied to breathing suggests a pulmonary or chest wall cause.")
      ],
      bank: [
        Q("Which is a non-ischemic cardiovascular cause of chest pain?", "Aortic dissection", ["Costochondritis", "Esophageal spasm", "Pleurisy"], "Dissection and pericarditis are the cardiovascular causes that aren't ischemia.")
      ] },

    { id: "classify-exam", title: "Classifying the pain and the exam", goal: "Today's guideline sorts pain as cardiac, possible cardiac or noncardiac; the exam is normal unless ischemia is active.",
      pages: [
        { title: "Three words, not \"typical\"", fig: { type: "ladder", steps: [["Cardiac", "classic quality, location, radiation, triggers and relief: likely ischemic", "bad"], ["Possible cardiac", "symptoms that suggest a cardiac origin", "ok"], ["Noncardiac", "likely not the heart, with a negative workup or low-risk pathway", "good"]] },
          html: "<p>The <strong>2021 AHA/ACC Chest Pain Guideline</strong> uses <strong>cardiac, possible cardiac and noncardiac</strong>.</p>" +
            "<p>The old <strong>Diamond-Forrester</strong> system is <strong>no longer recommended</strong>, but you may still see it: substernal + exertional + relieved by rest or nitro.</p>" +
            "<p>All 3 = typical (anginal), 2 = atypical, 1 = non-anginal.</p>" },
        { title: "Exam during ischemia", fig: { type: "tiles", items: [["😰", "Pale, diaphoretic", "looks uncomfortable"], ["😮‍💨", "Dyspnea, rales", "conversational dyspnea"], ["🧠", "Altered mentation", ""], ["🫀", "S4 (common)", "stiff LV: \"TEN-nes-see\""], ["🫀", "S3 (less often)", "LV systolic dysfunction: \"Ken-TUCK-y\""]] },
          html: "<p>If the patient isn't having ischemia right now, the <strong>exam is normal</strong>.</p>" +
            "<p>During ischemia the LV gets stiff, so an <strong>S4</strong> is common. An <strong>S3</strong> means the LV is failing to squeeze.</p>" +
            "<p>Also look for <strong>signs of vascular disease</strong>: carotid bruits, poor peripheral pulses.</p>" }
      ],
      remember: ["2021 guideline: cardiac, possible cardiac, noncardiac.", "Diamond-Forrester (no longer recommended): substernal, exertional, relieved by rest/nitro; 3 typical, 2 atypical, 1 non-anginal.", "Exam is normal without active ischemia.", "During ischemia: pale, diaphoretic, dyspnea/rales, confusion, S4 (stiff LV), less often S3 (systolic dysfunction)."],
      check: [
        Q("Substernal, exertional pain NOT relieved by rest. By Diamond-Forrester this is:", "Atypical angina (2 of 3)", ["Typical angina (3 of 3)", "Non-anginal (1 of 3)", "Noncardiac by definition"], "Two of the three features makes it atypical."),
        Q("Which extra heart sound is most common during active ischemia?", "S4", ["S3", "Opening snap", "Pericardial knock"], "Ischemia makes the LV stiff, producing an S4."),
        Q("What does the 2021 AHA/ACC guideline use instead of \"typical/atypical\"?", "Cardiac, possible cardiac, noncardiac", ["Stable, unstable, variant", "Low, intermediate, high", "Class I to IV"], "The guideline replaced the old terms with these three categories.")
      ],
      bank: [
        Q("A patient with stable CAD and no symptoms right now. What will the cardiac exam most likely show?", "A normal exam", ["An S3 and rales", "A new murmur", "Hypotension"], "The exam is usually normal unless ischemia is happening.")
      ] },

    { id: "ekg-history", title: "History, risk factors and the EKG", goal: "OLDCARTS plus risk factors; on the EKG, ST elevation is definitive and T inversions are nonspecific.",
      pages: [
        { title: "OLDCARTS", fig: { type: "grid", cols: ["", "Ask"], rows: [["<strong>O</strong>nset", "when, sudden or gradual, what were you doing?"], ["<strong>L</strong>ocation", "where? can you point?"], ["<strong>D</strong>uration", "how long each episode?"], ["<strong>C</strong>haracter", "pressure, tight, burning, sharp?"], ["<strong>A</strong>ggravating/relieving", "exertion, meals, position, breathing, rest?"], ["<strong>R</strong>adiation", "arm, jaw, neck, back, epigastrium?"], ["<strong>T</strong>iming", "how often? any change?"], ["<strong>S</strong>everity", "0 to 10, what does it limit?"]] },
          html: "<p>Then keep going: <strong>associated symptoms</strong> (dyspnea, diaphoresis, nausea, palpitations, syncope), prior episodes, risk factors and cardiac history.</p>" },
        { title: "Risk factors that make CAD likely", fig: { type: "vs", a: ["Can't change", "mid", ["Age", "Male sex", "Family history of premature CAD: male &lt; 55, female &lt; 65"]], b: ["Can change", "ok", ["Hyperlipidemia, hypertension, diabetes", "Metabolic syndrome", "Smoking", "Obesity, sedentary lifestyle", "Excess alcohol"]] },
          html: "<p>Initial testing: <strong>resting 12-lead EKG</strong>, <strong>serial troponins</strong>, CBC and CMP, plus tests for other causes like a <strong>chest X-ray</strong>.</p>" },
        { title: "How worrying is each EKG finding?", fig: { type: "ladder", steps: [["T inversion", "nonspecific", "mid"], ["ST depression", "maybe ischemia", "ok"], ["New LBBB", "concerning", "bad"], ["LVH, PVCs", "concerning", "bad"], ["ST elevation", "DEFINITIVE", "worst"]], hi: 4 },
          html: "<p>The deck's words: T wave inversion is <strong>nonspecific</strong>, ST depression is <strong>\"maybe\"</strong>, ST elevation is <strong>definitive</strong>. A <strong>new LBBB</strong>, LVH and PVCs are also concerning.</p>" },
        { title: "ST depression shapes", fig: { type: "stseg" },
          html: "<p>When ST depression shows up, its shape matters: <strong>horizontal or downsloping</strong> is more worrying than upsloping.</p>" +
            std("Shape criteria come from the stress testing lecture.") }
      ],
      remember: ["OLDCARTS + associated symptoms, prior episodes, risk factors, cardiac history.", "Non-modifiable: age, male sex, family history (male &lt; 55, female &lt; 65). Modifiable: lipids, HTN, DM, metabolic syndrome, smoking, obesity/sedentary, alcohol.", "Initial tests: 12-lead EKG, serial troponins, CBC, CMP, CXR for other causes.", "EKG: T inversion nonspecific; ST depression maybe; ST elevation definitive; new LBBB, LVH, PVCs concerning."],
      check: [
        Q("Which EKG finding is definitive for acute ischemia per the deck?", "ST elevation", ["T wave inversion", "ST depression", "Sinus tachycardia"], "ST elevation is the definitive finding; TWI is nonspecific and ST depression is a maybe."),
        Q("Premature family history counts for a male relative with CAD before age:", "55", ["45", "65", "75"], "Premature means a male under 55 or a female under 65."),
        Q("In OLDCARTS, what does the C stand for?", "Character", ["Cause", "Chronicity", "Cardiac history"], "C asks what the pain feels like: pressure, tightness, burning or sharp.")
      ],
      bank: [
        Q("Which EKG finding is concerning for ischemia if it's new?", "Left bundle branch block", ["Right axis in a young adult", "Sinus arrhythmia", "Early repolarization"], "A new LBBB is on the deck's list of concerning findings.")
      ] },

    { id: "hs-trop", title: "Using hs-troponin", goal: "hs-troponin at arrival and 1 to 2 hours later; two values under the 99th percentile with little change = home.",
      pages: [
        { title: "The rule-out", fig: { type: "flow", steps: ["Arrive &gt; 2 h after onset?<br><small>one hs-troponin &lt; 99th percentile lowers concern a lot</small>", "Or two values<br><small>90 to 120 min apart</small>", "Both &lt; 99th percentile<br><small>and little change (delta)</small>", "<strong>Discharge</strong>"] },
          html: "<p>For a patient presenting <strong>more than 2 hours after symptoms began</strong>, a single hs-troponin below the <strong>sex-specific 99th percentile</strong> substantially lessens concern for ACS.</p>" +
            "<p>Otherwise, compare two values <strong>90 to 120 minutes apart</strong>. Both below the 99th percentile with <strong>minimal change</strong>: discharge home.</p>" },
        { title: "Timing: hs vs conventional", fig: { type: "vs", a: ["hs-troponin (preferred)", "good", ["At presentation", "Repeat in 1 to 2 h", "Intermediate risk: again at 3 to 6 h"]], b: ["Conventional troponin", "mid", ["At presentation", "Repeat in 3 to 6 h"]] },
          html: "<p>Look at the <strong>pattern of rise or fall</strong> together with the story and the EKG.</p>" },
        { title: "Numbers and pitfalls", fig: { type: "bars", items: [["Sensitivity at 4 h", 50, "50%", "ok"], ["Sensitivity at 6 h", 97, "97%", "good"], ["Specificity", 95, "95%", "good"]], note: "Troponin I on a regular assay (slide 46)." },
          html: "<p>Troponin is <strong>chronically elevated in ESRD and CKD stage IV</strong> because it isn't cleared. Compare with a <strong>prior level</strong> to see if they're above their usual baseline.</p>" }
      ],
      remember: ["&gt; 2 h after onset: one hs-troponin below the sex-specific 99th percentile lowers concern a lot.", "Two values 90 to 120 min apart, both &lt; 99th percentile and minimal delta → discharge.", "hs: 0 and 1 to 2 h (3 to 6 h if intermediate). Conventional: 0 and 3 to 6 h.", "Troponin I sensitivity 50% at 4 h, 97% at 6 h; specificity 95%.", "ESRD/CKD IV: chronically high; compare with a prior baseline."],
      check: [
        Q("How far apart are the two serial hs-troponins drawn?", "90 to 120 minutes", ["10 to 20 minutes", "6 to 8 hours", "24 hours"], "The deck uses a delta between two values 90 to 120 minutes apart."),
        Q("A dialysis patient has a troponin of 0.08 with chest pain. What's the best next move?", "Compare with a prior level for their baseline", ["Diagnose NSTEMI immediately", "Ignore troponin in dialysis patients", "Send home"], "ESRD keeps troponin chronically elevated, so you look for a rise above their baseline."),
        Q("When is conventional troponin repeated?", "3 to 6 hours after the first", ["1 to 2 hours after the first", "Every 10 minutes", "Only the next morning"], "The less sensitive assay needs a longer gap to show a rise.")
      ],
      bank: [
        Q("What is troponin I's sensitivity for MI at 6 hours?", "97%", ["50%", "75%", "100%"], "Sensitivity climbs from 50% at 4 hours to 97% at 6 hours.")
      ] },

    { id: "er-treat", title: "Treating ACS in the ER", goal: "Nitro for pain, beta blocker within 24 h, anticoagulate diagnosed ACS; STEMI gets aspirin plus a P2Y12 and primary PCI.",
      pages: [
        { title: "Ongoing ischemic pain", fig: { type: "flow", steps: ["SL nitroglycerin<br><small>if hemodynamically stable</small>", "IV nitroglycerin<br><small>persistent pain, HTN or pulmonary edema</small>", "Oral beta blocker<br><small>within 24 h if no contraindication</small>"] },
          html: "<p>Nitro relieves symptoms. If pain persists despite SL doses, or there's <strong>hypertension or pulmonary edema</strong>, consider an <strong>IV nitro drip</strong>.</p>" +
            "<p>Start an <strong>oral beta blocker within 24 hours</strong> unless contraindicated.</p>" },
        { title: "Anticoagulate diagnosed ACS", fig: { type: "clot", hi: "mesh" },
          html: "<p>Start <strong>parenteral anticoagulation</strong>: <strong>unfractionated heparin (UFH) or enoxaparin (LMWH)</strong>. The choice depends on ACS type, strategy, kidney function and the situation.</p>" +
            "<p>Keep looking for other or concurrent causes, and reassess symptoms, EKG, hemodynamics and biomarkers.</p>" },
        { title: "STEMI drugs", fig: { type: "platelet" },
          html: "<p>For STEMI: <strong>aspirin + a P2Y12 inhibitor</strong>. <strong>Ticagrelor or prasugrel</strong> is generally preferred over <strong>clopidogrel</strong> for PCI.</p>" +
            "<p>Patients with a history highly suggestive of ACS but no STEMI are usually <strong>admitted by the hospitalist</strong> for UA/NSTEMI with cardiology consulting.</p>" }
      ],
      remember: ["SL nitro if stable; IV nitro for persistent pain, HTN or pulmonary edema.", "Oral beta blocker within 24 h if no contraindication.", "Diagnosed ACS: UFH or enoxaparin.", "STEMI: aspirin + P2Y12 (ticagrelor or prasugrel preferred over clopidogrel for PCI).", "Likely UA/NSTEMI: hospitalist admits, cardiology consults."],
      check: [
        Q("ACS patient with persistent pain after SL nitro and BP 178/96. What helps?", "IV nitroglycerin", ["Morphine only", "Stop all nitrates", "Oral nitro patch tomorrow"], "IV nitro is considered for persistent pain, hypertension or pulmonary edema."),
        Q("When should an oral beta blocker be started in ACS?", "Within 24 hours if no contraindication", ["Only after discharge", "Never in ACS", "Only before cath"], "The deck says to start it within 24 hours."),
        Q("Which P2Y12 inhibitors are generally preferred for STEMI going to PCI?", "Ticagrelor or prasugrel", ["Clopidogrel only", "Warfarin", "Apixaban"], "They're preferred over clopidogrel in patients undergoing PCI.")
      ],
      bank: [
        Q("Which anticoagulants are options for diagnosed ACS?", "Unfractionated heparin or enoxaparin", ["Aspirin or clopidogrel", "Alteplase or tenecteplase", "Warfarin or digoxin"], "Parenteral anticoagulation uses UFH or LMWH.")
      ] },

    { id: "pathway", title: "HEART Pathway and disposition", goal: "Low risk = score ≤ 3, nonischemic EKG, negative serial troponins: under 1% 30-day risk, go home.",
      pages: [
        { title: "Score vs Pathway", fig: { type: "vs", a: ["HEART score", "mid", ["Risk score 0 to 10", "5 parts: H, E, A, R, T", "0 to 3 = lower risk"]], b: ["HEART Pathway", "good", ["A decision pathway", "Score ≤ 3 + no ischemic EKG changes + negative serial troponins", "Original version excludes known CAD"]] },
          html: "<p>The <strong>Pathway</strong> wraps the score with the EKG and serial troponins to identify who can leave early.</p>" +
            "<p><strong>Low risk</strong> = estimated <strong>30-day risk of death or MACE below 1%</strong> by a validated pathway.</p>" },
        { title: "Who goes where", fig: { type: "vs", a: ["Low risk → home", "good", ["Nonischemic EKG, negative hs-troponin pathway", "&lt; 1% 30-day risk", "No admission, no urgent stress test or CCTA", "Outpatient follow-up, fix risk factors"]], b: ["Intermediate → more testing", "ok", ["Nondiagnostic EKG, no MI on troponins", "Still worried about CAD", "Observation or admission", "CCTA or stress imaging"]] },
          html: "<p>What do you tell someone with a normal EKG and negative troponins? <strong>\"An acute MI is unlikely or ruled out, but you may still have coronary disease.\"</strong> Then decide on more testing.</p>" }
      ],
      remember: ["HEART Pathway = score ≤ 3 + no ischemic EKG changes + negative serial troponins (original excludes known CAD).", "Low risk = 30-day death/MACE &lt; 1%.", "Low risk: home, no urgent testing, outpatient follow-up.", "Intermediate: observe or admit; CCTA for anatomy or stress imaging for ischemia.", "Negative workup rules out MI, not CAD."],
      check: [
        Q("What 30-day risk defines \"low risk\" in the HEART Pathway?", "Below 1% death or MACE", ["Below 5%", "Below 10%", "Below 0.01%"], "The deck defines low risk as under 1% 30-day risk."),
        Q("Normal EKG, negative serial troponins, still worrying story. What next?", "Observation with CCTA or stress imaging", ["Discharge, CAD is ruled out", "Emergent PCI", "Thrombolytics"], "Persistent concern is intermediate risk, which needs anatomic or functional testing."),
        Q("What can you tell a patient after negative troponins and a nonischemic EKG?", "An MI is unlikely, but they may still have CAD", ["They definitely don't have CAD", "They had a small MI", "They need CABG"], "Negative troponins rule out acute MI, not underlying coronary disease.")
      ],
      bank: [
        Q("The HEART Pathway combines the HEART score with:", "A nonischemic EKG and negative serial troponins", ["A stress test and a cath", "BNP and D-dimer", "Chest X-ray and CBC"], "The pathway adds the EKG and serial troponins to the score.")
      ] },

    { id: "testing", title: "CCTA, stress tests and pretest probability", goal: "Pretest probability ≤ 15% may skip testing; above 15%, choose CCTA (anatomy) or a stress test (ischemia).",
      pages: [
        { title: "Meet Jane", fig: { type: "patient", icon: "👵", name: "Jane, 69", line: "substernal pressure walking uphill in Hawaii, 2 weeks ago", chips: [["Relief", "rest, a few minutes", "ok"], ["Now", "feels well, no recurrence", "good"]] },
          html: "<p>Jane is stable and not in pain now: the right patient for <strong>outpatient testing</strong>.</p>" +
            "<p>First, estimate her <strong>pretest probability</strong>: the chance she has obstructive CAD before testing, from <strong>age, sex, the symptoms</strong> and clinical judgment.</p>" },
        { title: "The 15% line", fig: { type: "meter", max: 60, value: 30, pin: "Jane: likely above 15%", unit: "% pretest", bands: [[15, "≤ 15% low", "good"], [60, "> 15% intermediate-high", "ok"]] },
          html: "<p><strong>≤ 15%</strong>: more testing may be deferred in selected patients; an exercise EKG may be considered.</p>" +
            "<p><strong>&gt; 15%</strong>: noninvasive testing is likely to help: <strong>stress testing or CCTA</strong>.</p>" },
        { title: "CCTA vs stress test", fig: { type: "vs", a: ["CCTA (anatomy)", "blue", ["CT + IV contrast shows the arteries", "Sees calcified AND noncalcified plaque", "Normal = obstructive CAD very unlikely", "Limits: contrast, heavy calcium, fast or irregular HR", "Can't tell if a lesion causes ischemia"]], b: ["Stress test (function)", "ok", ["Is perfusion adequate under stress?", "Exercise or pharmacologic", "EKG alone, echo, nuclear MPI or MRI", "For stable patients, not active pain"]] },
          html: "<p>CCTA fits <strong>stable chest pain, intermediate-to-high likelihood, no known CAD</strong>.</p>" },
        { title: "Stable Stan's positive test", fig: { type: "perfusion", state: "ischemia" },
          html: "<p>Stan, 46, gets chest pain mowing after 20 minutes. His Lexiscan stress test shows <strong>no EKG changes</strong> but <strong>reversible ischemia on MPI</strong>.</p>" +
            "<p>A stress test is a <strong>rule-out test</strong>: negative means a very low chance of significant CAD. <strong>Positive means another test: the left heart cath.</strong></p>" +
            "<p>For a cath, the patient must be able to <strong>lie flat</strong> and be <strong>NPO after midnight</strong>.</p>" }
      ],
      remember: ["Pretest probability: age, sex, symptoms, judgment.", "≤ 15%: may defer testing (exercise EKG in some). &gt; 15%: stress test or CCTA.", "CCTA: anatomy, sees noncalcified plaque, normal = CAD very unlikely; limited by contrast, calcium, fast/irregular HR; can't prove ischemia.", "Stress test = rule-out test; positive → left heart cath.", "Cath: lie flat, NPO after midnight."],
      check: [
        Q("A stress test shows reversible ischemia. What's the next step?", "Left heart catheterization", ["Repeat the stress test in a year", "Discharge, it's a rule-out test", "CABG without a cath"], "A positive stress test needs coronary angiography to see the anatomy."),
        Q("Pretest probability is 10%. What's reasonable?", "Defer more testing in selected patients", ["Urgent cardiac cath", "CABG referral", "Start heparin"], "At 15% or lower, additional testing may be deferred."),
        Q("Which is a limitation of CCTA?", "It can't show whether a lesion causes ischemia", ["It can't see noncalcified plaque", "It needs no contrast", "It works best at fast heart rates"], "CCTA shows anatomy, not whether a narrowing limits blood flow.")
      ],
      bank: [
        Q("What does a negative stress test mean?", "Very low chance of significant CAD", ["CAD is impossible", "The patient needs a cath anyway", "The test was done wrong"], "Stress testing is a good rule-out test.")
      ] },

    { id: "cath", title: "Reading the cath", goal: "≥ 70% (≥ 50% left main) is significant; FFR ≤ 0.80 proves it limits flow; TIMI 3 is normal flow.",
      pages: [
        { title: "Three possible outcomes", fig: { type: "flow", steps: ["No significant disease<br><small>false-positive stress test</small>", "Stentable disease<br><small>diagnostic + therapeutic</small>", "Better for meds or surgery<br><small>stays diagnostic</small>"] },
          html: "<p>A left heart cath is <strong>invasive</strong> with a small risk, so it's used when the story is compelling or noninvasive tests can't rule CAD out.</p>" },
        { title: "When a narrowing counts", fig: { type: "coronary", blocks: [["lm", "50%+ LM"], ["ladm", "70%+"]], hi: ["lm", "lad"] },
          html: "<p><strong>≥ 70%</strong> stenosis in a non-left-main artery is anatomically significant.</p>" +
            "<p><strong>≥ 50%</strong> in the <strong>left main</strong> is significant: it feeds most of the left ventricle.</p>" +
            mn("Left main: half is enough.") },
        { title: "FFR: does it actually limit flow?", fig: { type: "eq", terms: [["FFR", "", "fractional flow reserve"], "=", ["pressure after", "", "beyond the stenosis"], "÷", ["pressure before", "", "proximal"]] },
          html: "<p>For <strong>intermediate</strong> lesions, measure the pressure drop. <strong>FFR ≤ 0.80</strong> or <strong>iFR ≤ 0.89</strong> means the stenosis is <strong>physiologically significant</strong>: it causes ischemia.</p>" },
        { title: "TIMI flow", fig: { type: "timi" },
          html: "<p>TIMI grades how well blood flows through the artery, especially after PCI. The goal after successful PCI is <strong>TIMI 3</strong>.</p>" +
            "<p>Then decide: <strong>medical therapy</strong> (risk reduction, statin, antiplatelet, antianginals) or <strong>PCI/CABG</strong> for high-risk anatomy, physiologically significant stenosis, or angina despite meds.</p>" }
      ],
      remember: ["Cath outcomes: no disease (false-positive stress), stentable, or meds/surgery.", "Significant: ≥ 70% non-left-main; ≥ 50% left main.", "Intermediate lesions: FFR ≤ 0.80 or iFR ≤ 0.89 = physiologically significant.", "TIMI 0 none, 1 penetration without perfusion, 2 delayed, 3 normal (goal after PCI).", "Revascularize for high-risk anatomy, significant physiology, or angina despite meds."],
      check: [
        Q("A 55% left main stenosis on cath is:", "Significant", ["Not significant, it's under 70%", "Only significant with symptoms at rest", "Normal variant"], "For the left main, 50% or more is significant."),
        Q("An intermediate LAD lesion has FFR 0.74. What does that mean?", "It's physiologically significant", ["It's not limiting flow", "The artery is completely occluded", "The test failed"], "FFR at or below 0.80 means the lesion causes ischemia."),
        Q("After PCI, what TIMI flow grade is the goal?", "TIMI 3", ["TIMI 0", "TIMI 1", "TIMI 2"], "TIMI 3 is normal coronary flow.")
      ],
      bank: [
        Q("A cath after a positive stress test shows no significant disease. This was:", "A false-positive stress test", ["A missed STEMI", "A CTO", "A stent thrombosis"], "The deck notes false-positive stress tests do happen.")
      ] },

    { id: "stents", title: "Stents and DAPT", goal: "Drug-eluting stents are preferred; DAPT (aspirin + P2Y12) prevents stent clot: 12 months after ACS, 6 months for stable CAD.",
      pages: [
        { title: "Balloon, then stent", fig: { type: "artery", stage: "stent" },
          html: "<p><strong>Balloon angioplasty</strong>: a balloon across the stenosis is inflated to open it. A <strong>stent</strong> (metal mesh) holds it open.</p>" },
        { title: "DES vs BMS", fig: { type: "vs", a: ["Drug-eluting (DES)", "good", ["Releases a drug that limits neointimal growth", "Lower restenosis", "Preferred today"]], b: ["Bare-metal (BMS)", "mid", ["Plain metal scaffold", "Higher restenosis", "Older technology"]] },
          html: "<p>Contemporary DES cut restenosis and repeat procedures <strong>without raising stent thrombosis</strong>.</p>" },
        { title: "Thrombosis vs restenosis", fig: { type: "vs", a: ["In-stent THROMBOSIS", "bad", ["Sudden clot in the stent", "Hours to years after PCI", "Presents as ACS or MI", "Stopping DAPT early, poor expansion, malapposition"]], b: ["In-stent RESTENOSIS", "ok", ["Gradual re-narrowing", "Neointimal hyperplasia (± neoatherosclerosis)", "Recurrent angina"]] },
          html: mn("Thrombosis = clot (sudden). Restenosis = tissue growth (slow).") },
        { title: "DAPT", fig: { type: "platelet" },
          html: "<p>The stent injures the lining and exposes a surface platelets love until endothelium covers it. <strong>DAPT</strong> = <strong>aspirin</strong> (blocks thromboxane A₂) + a <strong>P2Y12 inhibitor</strong> (blocks ADP activation): clopidogrel, prasugrel (thienopyridines) or ticagrelor.</p>" +
            "<p><strong>ACS treated with PCI: 12 months</strong> (if not high bleeding risk). <strong>Chronic CAD with PCI: 6 months</strong> of aspirin + clopidogrel, then single antiplatelet.</p>" }
      ],
      remember: ["Balloon opens; stent holds it open.", "DES preferred: less restenosis, no more thrombosis. BMS: higher restenosis.", "Thrombosis = sudden clot → ACS; risk ↑ if DAPT stopped early. Restenosis = gradual hyperplasia → angina.", "DAPT = aspirin + P2Y12 (clopidogrel, prasugrel, ticagrelor).", "After PCI: ACS 12 months; chronic CAD 6 months (aspirin + clopidogrel)."],
      check: [
        Q("A patient stops DAPT 3 weeks after a stent and has a sudden STEMI. Most likely?", "In-stent thrombosis", ["In-stent restenosis", "Coronary spasm", "Pericarditis"], "Early DAPT discontinuation is a major cause of sudden stent clot."),
        Q("How long is DAPT after PCI for an NSTEMI (not high bleeding risk)?", "At least 12 months", ["1 month", "6 months", "Lifelong"], "ACS treated with PCI gets 12 months of DAPT."),
        Q("Why are drug-eluting stents preferred?", "Less restenosis without more stent thrombosis", ["They need no antiplatelets", "They dissolve completely", "They are cheaper"], "The drug limits neointimal growth.")
      ],
      bank: [
        Q("Slowly returning angina 8 months after a stent suggests:", "In-stent restenosis", ["In-stent thrombosis", "Aortic dissection", "Pericarditis"], "Restenosis is gradual tissue growth that causes recurrent angina.")
      ] },

    { id: "long-term", title: "Long-term care and antianginals", goal: "Risk factor control is the cornerstone; high-intensity statin and aspirin lower mortality; antianginals treat symptoms.",
      pages: [
        { title: "Two goals", fig: { type: "vs", a: ["Slow the disease", "good", ["Fewer ACS events", "Statin, aspirin", "Aggressive risk factor control"]], b: ["Relieve angina", "ok", ["Antianginal drugs", "Revascularization"]] },
          html: "<p>CAD patients see cardiology every <strong>3 to 6 months</strong>. <strong>Aggressive risk factor reduction is the cornerstone.</strong></p>" },
        { title: "The targets", fig: { type: "tiles", items: [["🍬", "A1c &lt; 7%", "some say &lt; 6.5%"], ["🧪", "LDL &lt; 70", "(&lt; 100 minimum) · statins"], ["🧈", "TG &lt; 200", "fibrates, fish oil"], ["🩺", "BP &lt; 130/80", ""], ["🚭", "Quit smoking", ""], ["🏃", "30 to 60 min", "moderate exercise 5×/week"]] },
          html: "<p>Mortality-lowering drugs: <strong>high-intensity statin</strong> (atorvastatin 40 to 80, rosuvastatin 20 to 40) and <strong>aspirin 81 to 325</strong> (81 to 162 preferred, 81 if GI upset). <strong>ASA allergy → a P2Y12 inhibitor</strong>.</p>" },
        { title: "How limited are they? CCS class", fig: { type: "ladder", steps: [["Class I", "angina only with strenuous, rapid or prolonged exertion", "good"], ["Class II", "slight limit: brisk walking, uphill, stairs fast, after meals", "ok"], ["Class III", "marked limit: 1 to 2 blocks level or 1 flight of stairs", "bad"], ["Class IV", "any activity hurts; may occur at rest", "worst"]] },
          html: "<p>Every visit asks about chest pain and <strong>how much SL nitro</strong> they use. The goal: normal activity without angina. Watch for <strong>anginal equivalents</strong> too.</p>" },
        { title: "Antianginal drugs", fig: { type: "grid", cols: ["Drug", "How it helps", "Watch for"], rows: [["Beta blocker (metoprolol)", "↓ HR, contractility, BP", "bradycardia, bronchospasm, heart block; NOT in vasospastic angina"], ["Nitrates", "↓ preload/afterload, dilate coronaries", "headache, flushing, orthostasis, tachyphylaxis"], ["CCB (diltiazem, verapamil)", "↓ HR/BP, dilate coronaries", "bradycardia, constipation, heart block"], ["Ranolazine", "prevents calcium overload", "QTc prolongation; no BP/HR effect"]] },
          html: "<p><strong>ACE inhibitors/ARBs</strong> are added for patients with <strong>diabetes or LV systolic dysfunction</strong>.</p>" }
      ],
      remember: ["Goals: slow CAD (fewer ACS) and relieve angina; risk factor control is the cornerstone.", "A1c &lt; 7, LDL &lt; 70, TG &lt; 200, BP &lt; 130/80, quit smoking, 30 to 60 min exercise 5×/week.", "Mortality: high-intensity statin + aspirin 81 to 162 (P2Y12 if ASA allergy).", "CCS I strenuous only · II slight · III marked (1 to 2 blocks) · IV any activity/rest.", "Antianginals: BB, nitrates, CCB, ranolazine. ACEi/ARB if DM or LV dysfunction."],
      check: [
        Q("Angina when walking 1 block on level ground is which CCS class?", "Class III", ["Class I", "Class II", "Class IV"], "Marked limitation with 1 to 2 blocks or one flight of stairs is class III."),
        Q("Which antianginal should NOT be used in vasospastic angina?", "A beta blocker", ["Diltiazem", "Nitroglycerin", "Amlodipine"], "The deck says beta blockers are not used in variant angina."),
        Q("A CAD patient is allergic to aspirin. What antiplatelet instead?", "A P2Y12 inhibitor", ["Warfarin", "No antiplatelet at all", "Ranolazine"], "A daily P2Y12 inhibitor replaces aspirin in allergic patients.")
      ],
      bank: [
        Q("Which antianginal can prolong the QTc without changing BP or HR?", "Ranolazine", ["Metoprolol", "Diltiazem", "Isosorbide"], "Ranolazine blocks the late sodium current and can lengthen the QTc.")
      ] }
  ] };

  /* =============================== TIER 3 · THE WEEDS =============================== */
  T.units["t3|cad-part-3"] = { chunks: [
    { id: "numbers", title: "The numbers", goal: "The epidemiology numbers the deck opens with.",
      pages: [
        { title: "How common is chest pain?", fig: { type: "tiles", items: [["🚑", "#2", "reason adults come to the ED"], ["🏥", "~4 million", "outpatient visits a year"], ["❤️", "&gt; 18.2 million", "US adults with CAD"], ["🕯️", "&gt; 365,000", "CAD deaths a year"], ["👴", "33%", "of ACS is in patients &gt; 75"]] },
          html: "<p>Chest pain is the <strong>2nd most common</strong> reason adults come to the ED and causes nearly <strong>4 million</strong> outpatient visits a year.</p>" +
            "<p>CAD affects <strong>more than 18.2 million</strong> US adults and is the <strong>leading cause of death</strong> for men and women.</p>" }
      ],
      remember: ["Chest pain: 2nd most common ED complaint; ~4 million outpatient visits/year.", "CAD: &gt; 18.2 million adults, &gt; 365,000 deaths/year, leading cause of death in men and women.", "&gt; 75 years: 33% of ACS, but other diagnoses are still more common."],
      check: [
        Q("Where does chest pain rank among reasons adults visit the ED?", "Second", ["First", "Fifth", "Tenth"], "The deck calls it the second most common ED presentation."),
        Q("About how many US adults have CAD?", "More than 18.2 million", ["About 1 million", "About 50 million", "About 365,000"], "CAD affects over 18.2 million adults; 365,000 is the yearly deaths."),
        Q("What share of ACS cases are patients over 75?", "About a third", ["About 5%", "About half", "About 90%"], "Patients over 75 make up 33% of ACS.")
      ],
      bank: [
        Q("About how many Americans die of CAD each year?", "More than 365,000", ["About 18 million", "About 4 million", "About 36,000"], "The deck gives more than 365,000 deaths a year.")
      ] },

    { id: "bnp", title: "BNP", goal: "BNP comes from stretched ventricles, makes the kidneys dump sodium, and is useless in AKI or advanced CKD.",
      pages: [
        { title: "Where BNP comes from", fig: { type: "flow", steps: ["High filling pressure<br><small>stretched ventricles</small>", "Prohormone cleaved", "BNP (active)<br><small>+ NT-proBNP (inert)</small>"] },
          html: "<p>Named for the brain but released mainly by the <strong>ventricles</strong> when <strong>filling pressures are high</strong>, as in decompensated HF.</p>" +
            "<p>Cleavage makes active <strong>BNP</strong> and inert <strong>NT-proBNP</strong>. Labs measure one, and the two <strong>aren't comparable</strong>.</p>" },
        { title: "What BNP does", fig: { type: "tiles", items: [["🚽", "Diuresis + natriuresis", "sodium out in the urine"], ["🛑", "Inhibits RAAS", ""], ["🧘", "Inhibits sympathetic tone", ""], ["💪", "Positive inotrope", "on the ventricles"]] },
          html: "<p>BNP is <strong>cleared by the kidneys</strong>, so it's <strong>not helpful in AKI or significant CKD</strong>: it's always elevated.</p>" }
      ],
      remember: ["BNP: released from ventricles with high filling pressures.", "Active BNP + inert NT-proBNP; levels not comparable.", "Effects: diuresis/natriuresis, inhibits RAAS and SNS, positive inotrope.", "Renally cleared: not helpful in AKI or significant CKD."],
      check: [
        Q("BNP is released mainly from the:", "Ventricles", ["Brain", "Atria only", "Kidneys"], "Despite its name, BNP comes mostly from the cardiac ventricles."),
        Q("Why is BNP unhelpful in advanced CKD?", "It's renally cleared, so it's always elevated", ["CKD destroys BNP", "It's made in the kidney", "It falls to zero"], "Impaired clearance keeps BNP high regardless of HF."),
        Q("Which is an effect of BNP?", "Natriuresis", ["RAAS activation", "Vasoconstriction", "Sodium retention"], "BNP makes the kidneys waste sodium and inhibits RAAS.")
      ],
      bank: [
        Q("A hospital switches from BNP to NT-proBNP. Can you compare old and new values directly?", "No, the two aren't comparable", ["Yes, they're identical", "Yes, divide by 2", "Only in women"], "BNP and NT-proBNP levels are not comparable.")
      ] },

    { id: "cto", title: "Chronic total occlusions", goal: "A CTO is a 100% blockage for 3+ months kept alive by collaterals; open it only for angina or ischemia despite meds.",
      pages: [
        { title: "Collaterals keep the lights on", fig: { type: "coronary", blocks: [["rcam", "100%"]], hi: ["rca"] },
          html: "<p>A <strong>CTO</strong> is a <strong>100%</strong> occlusion with <strong>TIMI 0 flow</strong> present for <strong>≥ 3 months</strong>.</p>" +
            "<p>It closed slowly, so <strong>collateral vessels</strong> grew. They can supply the muscle at rest but may fail with exercise. Some patients have no symptoms, others exertional angina.</p>" },
        { title: "What to do", fig: { type: "flow", steps: ["Optimal medical therapy<br><small>antianginals + risk reduction</small>", "CTO PCI<br><small>cross it, balloon, usually DES</small>", "CABG<br><small>selected anatomy</small>"] },
          html: "<p>Consider <strong>CTO PCI</strong> for <strong>lifestyle-limiting angina despite optimal meds</strong>, or significant <strong>ischemia or viable myocardium</strong> in that territory.</p>" }
      ],
      remember: ["CTO: 100%, TIMI 0, ≥ 3 months.", "Collaterals keep rest flow, may fail with exercise.", "Options: medical therapy, CTO PCI, CABG.", "CTO PCI for limiting angina despite meds, or ischemia/viable myocardium in that territory."],
      check: [
        Q("How long must a total occlusion be present to be called a CTO?", "At least 3 months", ["24 hours", "2 weeks", "At least 1 year"], "The deck defines a CTO as present for 3 months or more."),
        Q("Why might a patient with a CTO have no symptoms at rest?", "Collateral vessels supply the muscle", ["The artery reopened", "Troponin protects it", "The heart doesn't need oxygen at rest"], "Collaterals can maintain resting flow but may fail with exertion."),
        Q("When is CTO PCI considered?", "Lifestyle-limiting angina despite optimal medical therapy", ["Every CTO found on cath", "Only if the patient has no symptoms", "Only in STEMI"], "CTO PCI is for persistent limiting angina or significant ischemia.")
      ],
      bank: [
        Q("What TIMI flow does a CTO have?", "TIMI 0", ["TIMI 1", "TIMI 2", "TIMI 3"], "A CTO is a complete occlusion with no flow.")
      ] },

    { id: "access", title: "Cath complications at the access site", goal: "Radial: hematoma, occlusion. Femoral: hematoma, pseudoaneurysm, AV fistula, retroperitoneal bleed.",
      pages: [
        { title: "Wrist or groin", fig: { type: "vs", a: ["Radial (wrist)", "good", ["Hematoma/bleeding", "Radial artery occlusion", "Perforation", "Rarely compartment syndrome"]], b: ["Femoral (groin)", "bad", ["Hematoma/bleeding", "Pseudoaneurysm", "AV fistula", "Retroperitoneal hemorrhage"]] },
          html: "<p>The femoral list is scarier: three of its complications can hide or grow.</p>" },
        { title: "Retroperitoneal hemorrhage", fig: { type: "patient", icon: "🛏️", name: "Post-cath, femoral access", line: "high stick above the inguinal ligament", chips: [["Pain", "flank, back or abdomen", "bad"], ["Vitals", "↓ BP, ↑ HR", "bad"], ["Labs", "Hgb falling", "bad"], ["Groin", "may look normal", "ok"]] },
          html: "<p>A <strong>high femoral puncture</strong> (above the inguinal ligament) bleeds into the retroperitoneum, where you <strong>can't see it</strong>. Potentially life-threatening.</p>" +
            "<p>Suspect it with <strong>anemia or back pain after femoral access</strong>. Diagnose with <strong>CT/CTA abdomen and pelvis</strong>. Treat with fluids/transfusion, then endovascular or surgical repair if it keeps bleeding.</p>" },
        { title: "Pseudoaneurysm vs AV fistula", fig: { type: "vs", a: ["Pseudoaneurysm", "ok", ["Blood pools outside the artery, held by tissue", "Pain out of proportion, swelling", "Pulsatile mass or bruit", "Duplex ultrasound", "&lt; 2 cm: observe; larger: US-guided thrombin injection"]], b: ["AV fistula", "blue", ["Artery and vein both nicked", "Continuous bruit or thrill", "Many small ones close on their own", "Compression, covered stent, or surgery"]] },
          html: mn("Pseudoaneurysm pulses; fistula hums (continuous).") }
      ],
      remember: ["Radial: hematoma, occlusion, perforation, rare compartment syndrome.", "Femoral: hematoma, pseudoaneurysm, AV fistula, retroperitoneal bleed.", "Retroperitoneal: high stick; flank/back pain, hypotension, falling Hgb, groin may look fine; CT.", "Pseudoaneurysm: pulsatile mass/bruit, duplex US; &lt; 2 cm observe, larger thrombin injection.", "AV fistula: continuous bruit/thrill; small ones often close."],
      check: [
        Q("After femoral cath, a patient has back pain, BP 88/50 and a falling hemoglobin. Groin looks fine. Most likely?", "Retroperitoneal hemorrhage", ["Pseudoaneurysm", "AV fistula", "Radial artery occlusion"], "A high femoral stick can bleed into the retroperitoneum without visible groin signs."),
        Q("Pulsatile groin mass with a bruit after cath. Best test?", "Duplex ultrasound", ["CT head", "Coronary angiogram", "Ankle-brachial index"], "Duplex ultrasound is the test of choice for femoral pseudoaneurysm."),
        Q("A continuous bruit and thrill at the femoral site suggests:", "AV fistula", ["Pseudoaneurysm", "Hematoma", "Retroperitoneal bleed"], "An artery-to-vein connection makes a continuous bruit.")
      ],
      bank: [
        Q("A 3 cm symptomatic femoral pseudoaneurysm is usually treated with:", "Ultrasound-guided thrombin injection", ["Observation only", "Heparin drip", "Immediate amputation"], "Thrombin injection is preferred for larger or symptomatic ones.")
      ] },

    { id: "kidneys-emboli", title: "Contrast AKI and cholesterol emboli", goal: "Contrast AKI comes early and is prevented with fluids; cholesterol emboli come later with livedo, blue toes and eosinophilia.",
      pages: [
        { title: "Contrast-associated AKI", fig: { type: "tiles", items: [["🫘", "Pre-existing CKD", "stage 3b or higher"], ["🍬", "Diabetes", ""], ["📉", "Hypotension, dehydration", ""]] },
          html: "<p>Kidney function falls after iodinated contrast. Higher risk with <strong>CKD 3b+ and diabetes</strong>. Prevent it with <strong>hydration</strong> and by <strong>holding nephrotoxic drugs</strong>.</p>" },
        { title: "Cholesterol emboli syndrome", fig: { type: "tiles", items: [["🕸️", "Livedo reticularis", "lacy purple skin"], ["🦶", "Blue toes", "WITH intact pulses"], ["🤒", "Fever, weight loss, myalgias", "inflammation"], ["🫃", "Mesenteric ischemia", "pain out of proportion, lactic acidosis"], ["🫘", "Late, progressive AKI", ""], ["🔬", "Eosinophilia", "up to 80%"]] },
          html: "<p>The catheter knocks <strong>cholesterol plaque</strong> loose; crystals plug small arterioles and trigger <strong>intense inflammation</strong>.</p>" +
            "<p>Its AKI comes <strong>later</strong> than contrast AKI and <strong>keeps progressing</strong>. Treatment is <strong>supportive</strong>.</p>" +
            hy("Blue toe with good pulses after a cath = cholesterol emboli.") }
      ],
      remember: ["Contrast AKI: risk with CKD 3b+, DM; prevent with hydration and holding nephrotoxins.", "Cholesterol emboli: plaque crystals plug arterioles + inflammation.", "Livedo reticularis, blue toes with intact pulses, constitutional symptoms, mesenteric ischemia.", "AKI later and progressive; eosinophilia in up to 80%; supportive care."],
      check: [
        Q("Two weeks after cath: blue toes with strong pedal pulses, livedo and rising creatinine. Diagnosis?", "Cholesterol emboli syndrome", ["Contrast-associated AKI", "Femoral pseudoaneurysm", "Raynaud phenomenon"], "Blue toes with intact pulses plus a late AKI point to cholesterol emboli."),
        Q("What's the main prevention for contrast-associated AKI?", "Hydration and holding nephrotoxic meds", ["High-dose steroids", "A heparin drip", "Avoiding aspirin"], "The deck lists hydration and holding nephrotoxins."),
        Q("Which lab finding is common in cholesterol emboli syndrome?", "Eosinophilia", ["Low platelets only", "High BNP only", "Hyperkalemia only"], "Eosinophilia is reported in up to 80% of patients.")
      ],
      bank: [
        Q("How does the AKI of cholesterol emboli differ from contrast AKI?", "It appears later and keeps progressing", ["It appears within hours", "It always resolves in a day", "It never raises creatinine"], "Cholesterol emboli AKI is later and progressive.")
      ] },

    { id: "cabg", title: "CABG vs PCI vs meds", goal: "CABG for left main, 3-vessel, diabetic multivessel or low EF; PCI for limited disease; meds alone for non-critical stenoses.",
      pages: [
        { title: "When CABG wins", fig: { type: "coronary", grafts: [["lita", "ladm", "LIMA"], ["aorta", "rcam", "SVG"]], quiet: true },
          html: "<p>Saphenous vein, internal mammary artery or radial artery is sewn from the aorta (or left in place, for the mammary) to the coronary <strong>past the blockage</strong>.</p>" +
            "<p><strong>CABG preferred</strong>: left main ≥ 50%; multivessel disease with <strong>EF &lt; 35%</strong> (recommended) or 35 to 50% (reasonable); <strong>diabetes with multivessel disease involving the LAD</strong>; complex or diffuse disease.</p>" },
        { title: "Grafts", fig: { type: "bars", items: [["LIMA → LAD", 90, "~90%+ at 10 years", "good"], ["Saphenous vein", 55, "~50-60% at 10 years", "ok"]], note: "Radial artery = preferred second arterial conduit." },
          html: "<p>The <strong>LIMA</strong> is the preferred graft to the <strong>LAD</strong>.</p>" },
        { title: "Who gets what", fig: { type: "grid", cols: ["", "Who"], rows: [["CABG better", "3-vessel or left main; diabetic multivessel; LV dysfunction + multivessel"], ["PCI better", "limited lesions, normal systolic function"], ["Medical therapy only", "stable CAD, no critical stenosis (&lt; 70%), no LV dysfunction"]], hiCol: 1 },
          html: "<p>Other weeds: weight goal &lt; 120% of ideal body weight (BMI ≤ 24).</p>" }
      ],
      remember: ["CABG preferred: LM ≥ 50%; multivessel + EF &lt; 35% (35 to 50% reasonable); DM + multivessel with LAD; complex disease.", "LIMA → LAD ~90% 10-year patency; SVG ~50-60%; radial = second arterial conduit.", "PCI: limited lesions, normal EF.", "Meds only: stable, &lt; 70%, normal EF."],
      check: [
        Q("A diabetic with 3-vessel disease including the LAD. Which revascularization is preferred?", "CABG", ["PCI", "Medical therapy only", "Thrombolytics"], "Diabetes with multivessel disease involving the LAD favors CABG."),
        Q("Which graft has the best 10-year patency?", "LIMA to LAD", ["Saphenous vein", "Femoral vein", "Synthetic graft"], "The LIMA stays open about 90% at 10 years."),
        Q("Stable CAD with a 50% LAD lesion and normal EF. Best plan?", "Medical therapy only", ["CABG", "Emergent PCI", "CTO PCI"], "Non-critical stenosis without LV dysfunction is treated medically.")
      ],
      bank: [
        Q("Multivessel CAD with EF 30%. What does the deck recommend?", "CABG in appropriate patients", ["PCI only", "No revascularization", "A stress test first"], "EF under 35% with multivessel disease is a CABG indication.")
      ] }
  ] };
})();
