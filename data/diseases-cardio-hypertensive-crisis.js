/*
  Cardio Part 1 Diseases tool: Hypertensive Crisis lecture (Veal).
  Same shape as data/diseases-endocrine.js; uses window.DiseaseContent helpers.

  Sources: source-material/cardio-part-1/text/hypertensive-crisis.md (slides + the
  transcribed slide 21 and 55 diagrams) and the "Hypertension Crisis Objectives"
  block of objectives.txt. Each entry is a crisis presentation the lecture teaches:
  urgency, emergency, each organ-specific emergency, sympathetic crisis, the
  pregnancy hypertensive disorders, and nitrate/nitroprusside toxicity.

  Clarifications match data/hypertensive-crisis.js: slide 14's "subarachnoid
  hemorrhage" description (crescent along the skull, burr hole) is the classic
  description of a subdural hematoma; ICH BP goal is "titrate to SBP ~160" on
  slide 48 and "SBP < 140" on the slide 55 algorithm.

  Question ids are "<disease id>|<index>" and progress is saved against them:
  only APPEND questions to a disease; never insert, delete, or reorder.
*/
(function () {
  "use strict";

  var H = window.DiseaseContent;
  var Tbl = H.Tbl, HY = H.HY, Mn = H.Mn, S = H.S, Q = H.Q, D = H.D, L = H.L;

  function C(text) { return "<p><strong>Clarification:</strong> " + text + "</p>"; }

  var defTable = Tbl(["", "Hypertensive urgency", "Hypertensive emergency (crisis)"], [
    ["BP", "SBP ≥ 180 and/or DBP ≥ 120", "SBP ≥ 180 and/or DBP ≥ 120"],
    ["Target organs", "<strong>No</strong> acute or progressing injury", "<strong>Acute or progressing</strong> target-organ damage"],
    ["Where", "Outpatient (most)", "ICU / stepdown, IV drugs"],
    ["First goal", "&lt; 160/100 (or MAP ↓ no more than 25–30%) over 2–4 h; goal over 1–2 weeks", "MAP ↓ no more than 10–20% in the first hour, then 5–15% over 23 h"]
  ]) + Mn("U vs E", "Urgency = Undamaged organs. Emergency = End-organ damage. Same numbers.");

  var algorithm = Tbl(["Emergency", "Drug(s)", "Goal"], [
    ["Ischemic stroke", "Labetalol, nicardipine", "tPA candidate &lt; 185/110; non-candidate treat only ≥ 220/120"],
    ["Intracranial hemorrhage", "Nicardipine", "ICH SBP &lt; 140; SAH SBP &lt; 160"],
    ["Hypertensive encephalopathy", "Nicardipine", "Standard"],
    ["Acute hypertensive nephrosclerosis", "Fenoldopam", "Standard"],
    ["Acute coronary syndrome", "Nitroglycerin (or IV beta-blocker)", "Treat if SBP &gt; 160 and/or DBP &gt; 100"],
    ["Acute heart failure", "Loop diuretic, then nitroglycerin", "SBP &lt; 140"],
    ["Aortic dissection", "Morphine + esmolol/labetalol + nitroprusside", "HR &lt; 60, then SBP 100–120 within 20 min"],
    ["Preeclampsia / eclampsia", "Labetalol, hydralazine", "SBP &lt; 150, DBP 80–100"]
  ]);

  window.CARDIO_DISEASES_HYPERTENSIVE_CRISIS = L("hypertensive-crisis", "Hypertensive Crisis", [

    // ------------------------------------------------------------------
    D("hc-urgency", "Hypertensive Urgency", "BP of 180/120 or higher with no acute target-organ damage. Most cases come from missed medications, are treated in the office with rest and oral drugs, and are brought down gradually over days to weeks.", [
      S("definition", "Definition", defTable),
      S("causes", "Causes and history", "<ul><li><strong>Non-adherence</strong> to antihypertensives (most common)</li><li>Undiagnosed HTN</li><li><strong>Abrupt cessation of a beta-blocker or clonidine</strong></li><li>CKD, OSA</li><li>Drugs: cocaine, amphetamines, diet pills, phenylephrine</li></ul><p>History: duration, severity and control of HTN, medication compliance, OTC/supplements/illicit drugs, prior end-organ disease, head trauma, thyroid disease, Cushing's, SLE, pregnancy, MAOIs.</p>"),
      S("disposition", "Where to treat", "<ul><li>Urgency in an office or urgent care does <strong>NOT</strong> need the ER; treat outpatient.</li><li><strong>Quiet room 30 minutes</strong> → BP falls ≥ 20/10 in one-third of patients.</li><li><strong>Known cerebral or aortic aneurysm</strong> (imminent risk) → ER, lower over 2–4 hours like an emergency.</li><li>History of DM, CAD, or prior CVA → consider admission.</li><li><strong>Elderly</strong> patients are at particular risk if BP is lowered precipitously.</li></ul>"),
      S("treatment", "Treatment and goals", "<ul><li>Restart a previously well-tolerated regimen if the patient stopped it.</li><li>Salt restriction.</li><li>New-onset HTN: <strong>2 drugs at modest doses</strong> (ACEI or ARB, CCB, thiazide).</li><li>Within 2–4 h: BP <strong>&lt; 160/100</strong>, or MAP down <strong>no more than 25–30%</strong>; then to goal over <strong>1–2 weeks</strong>.</li><li>Monitor 1–2 hours for signs of end-organ damage; close outpatient follow-up.</li></ul>" + HY("Urgency is lowered slowly and mostly outpatient. Lowering too fast causes the stroke, MI, or AKI you were trying to prevent."))
    ], [
      Q("definition", "What separates hypertensive urgency from emergency?", ["Absence of acute target-organ damage", "A lower BP threshold", "Age under 50", "Absence of a headache"], 0, "Both share the 180/120 threshold; urgency has no acute or progressing target-organ injury."),
      Q("causes", "What is the most common cause of hypertensive urgency or emergency?", ["Non-adherence to antihypertensive medication", "Pheochromocytoma", "Coarctation of the aorta", "Cushing's syndrome"], 0, "Medication non-adherence is the most common cause."),
      Q("disposition", "A 58-year-old has BP 190/122 in the office with no symptoms or organ damage. What is the first step?", ["Rest in a quiet room for 30 minutes and recheck", "Send to the ER by ambulance", "Start IV nitroprusside", "Admit to the ICU"], 0, "Resting lowers BP by at least 20/10 in a third of patients; urgency is managed outpatient."),
      Q("disposition", "Which urgency patient should be sent to the ER?", ["A patient with a known cerebral aneurysm", "A patient with a mild tension headache", "Any patient over 40", "A patient with well-controlled diabetes and no symptoms"], 0, "Known cerebral or aortic aneurysm = imminent risk, treat like an emergency."),
      Q("treatment", "What is the BP target over the first 2–4 hours of urgency?", ["Below 160/100, or MAP down no more than 25–30%", "Below 120/80", "Below 100/60", "No reduction for 24 hours"], 0, "Reduce to under 160/100 (or MAP no more than 25–30%) over 2–4 hours, then to goal over 1–2 weeks."),
      Q("treatment", "A patient with new-onset HTN presents with urgency. How is treatment started?", ["Two drugs at modest doses, such as an ACEI or ARB plus a CCB or thiazide", "IV labetalol drip", "A single maximal dose of clonidine", "No drug until the next annual visit"], 0, "New-onset HTN with urgency → two guideline drugs at modest doses with prompt follow-up."),
      Q("treatment", "A patient stopped his well-tolerated amlodipine and lisinopril and now has BP 188/118 without organ damage. Best plan?", ["Restart his regimen, restrict salt, and arrange close follow-up", "Admit for IV nicardipine", "Switch to a new class immediately", "Lower BP to 110/70 within one hour"], 0, "Restart a well-tolerated regimen if there are no contraindications."),
      Q("disposition", "Why is rapid lowering especially risky in an 85-year-old with urgency?", ["Elderly patients are at particular risk of stroke, MI, or AKI from precipitous drops", "Elderly patients cannot absorb oral drugs", "Elderly patients never have organ damage", "BP has no effect on the elderly brain"], 0, "The lecture singles out elderly patients as at particular risk of complications from precipitous lowering.")
    ]),

    // ------------------------------------------------------------------
    D("hc-emergency", "Hypertensive Emergency (Crisis)", "BP of 180/120 or higher with acute or progressing damage to the brain, heart, kidney, eyes, blood, or a pregnancy. Lower the MAP by no more than 10–20% in the first hour with IV drugs, then 5–15% more over the next day.", [
      S("definition", "Definition", defTable + "<p>Target organs: <strong>CNS</strong> (ischemic or hemorrhagic stroke, encephalopathy), <strong>cardiovascular</strong> (acute LV failure with pulmonary edema, MI, unstable angina, aortic dissection, eclampsia), <strong>renal</strong> (AKI); also eyes (retinopathy), vasculature (MAHA), and mom and baby in pregnancy.</p>"),
      S("pathophysiology", "Pathophysiology", "<ol><li>Abrupt rise in SVR, possibly from humoral vasoconstrictors released by a stressed vessel wall</li><li>Prolonged smooth muscle contraction → endothelial dysfunction, ↓ NO, <strong>failure of autoregulation</strong></li><li>Focal vasodilation, endothelial damage, permeability, <strong>fibrinoid necrosis</strong>, clotting cascade, inflammation</li><li>More angiotensin II, norepinephrine, vasopressin → SVR rises further (vicious cycle)</li></ol>"),
      S("exam", "Physical exam", Tbl(["Look at", "For"], [
        ["BP supine and standing; both arms", "Volume depletion; interarm difference = <strong>dissection</strong>"],
        ["Carotid, brachial, femoral pulses", "Weak or absent = <strong>dissection</strong>"],
        ["Fundi", "New flame hemorrhages, exudates, papilledema"],
        ["Heart and lungs", "JVD, rales, dyspnea/orthopnea, edema, acute severe back pain"],
        ["Neuro", "Agitation/delirium, visual deficits, focal signs, seizures; N/V suggests ↑ ICP"],
        ["Abdomen", "Masses or bruits"]
      ])),
      S("workup", "Work-up", "<ul><li>Chemistry (BUN, Cr, eGFR) for AKI; UA for hematuria, proteinuria, RBC casts</li><li>CBC; new anemia → LFTs, haptoglobin, smear (MAHA)</li><li><strong>hs-troponin now and in 60–90 min</strong>; if elevated q6–8h × 2</li><li>Urine tox, pregnancy test, endocrine testing if suspicious</li><li>CXR for dyspnea/chest pain; <strong>non-contrast CT head</strong> for AMS or neuro changes</li></ul>"),
      S("treatment", "Treatment", "<ul><li>First hour: MAP down <strong>no more than 10–20%</strong> with IV drugs.</li><li>Next 23 h: another <strong>5–15%</strong> in ICU/stepdown.</li><li>Days to weeks: oral meds.</li><li><strong>Exceptions:</strong> ischemic stroke, ICH/SAH, aortic dissection.</li></ul>" + algorithm)
    ], [
      Q("definition", "A 60-year-old with BP 186/116 has chest pain and a rising troponin. Diagnosis?", ["Hypertensive emergency", "Hypertensive urgency", "Stage 1 hypertension", "White coat hypertension"], 0, "SBP of 180 or more with acute myocardial injury is a hypertensive emergency."),
      Q("pathophysiology", "Which vascular lesion is characteristic of the endothelial damage in hypertensive emergency?", ["Fibrinoid necrosis", "Fatty streak", "Granuloma", "Amyloid plaque"], 0, "Endothelial damage leads to fibrinoid necrosis and clotting cascade activation."),
      Q("pathophysiology", "Why does BP keep climbing once a hypertensive crisis starts?", ["Damaged endothelium releases more vasoconstrictors such as angiotensin II, norepinephrine, and vasopressin", "Nitric oxide production rises", "Baroreceptors reset to low pressures", "The kidneys excrete too much sodium"], 0, "The crisis is a vicious cycle of endothelial damage and vasoconstrictor release."),
      Q("exam", "Which exam finding in a hypertensive emergency suggests aortic dissection?", ["A BP difference between the arms", "Papilledema", "Bibasilar crackles", "An abdominal bruit"], 0, "Interarm BP differences and weak or absent pulses suggest dissection."),
      Q("workup", "A hypertensive emergency patient is newly confused. What imaging is ordered first?", ["Non-contrast CT head", "CXR", "Renal ultrasound", "Echocardiogram"], 0, "AMS or neurologic changes call for a non-contrast CT head."),
      Q("workup", "When is the second hs-troponin drawn in a hypertensive crisis?", ["60–90 minutes after the first", "24 hours after the first", "Only if the first is normal", "One week later"], 0, "hs-troponin now and in 60–90 minutes; if elevated, every 6–8 hours twice."),
      Q("treatment", "How much should MAP be lowered in the first hour of a hypertensive emergency (no exception present)?", ["No more than 10–20%", "50%", "To 120/80", "Not at all"], 0, "Reduce MAP no more than 10–20% over minutes to an hour with IV meds."),
      Q("treatment", "Which three conditions are exceptions to the standard emergency BP goals?", ["Ischemic stroke, intracerebral/subarachnoid hemorrhage, and aortic dissection", "PRES, AKI, and retinopathy", "ACS, heart failure, and AKI", "Urgency, white coat HTN, and pregnancy"], 0, "Stroke, ICH/SAH, and dissection need faster or no lowering on day 1."),
      Q("treatment", "Where is a hypertensive emergency patient managed during the 23 hours after the first hour of IV therapy?", ["ICU or stepdown unit with close monitoring", "Home on oral medications", "Outpatient clinic", "General medical floor without monitoring"], 0, "MAP is lowered another 5–15% over 23 hours in the ICU or stepdown unit with IV meds."),
      Q("definition", "A patient with BP 200/124 and no organ damage on exam, labs, or imaging. What does the algorithm direct?", ["Discharge and initiate or intensify the antihypertensive regimen", "ICU admission", "IV nitroprusside", "Emergency surgery"], 0, "No end-organ dysfunction → discharge with initiated or intensified therapy.")
    ]),

    // ------------------------------------------------------------------
    D("hc-encephalopathy-pres", "Hypertensive Encephalopathy and PRES", "Brain edema from pressures beyond autoregulation: diffuse confusion (encephalopathy) or posterior edema with vision changes, seizures, and severe headache (PRES). Both improve over 2–4 days with gradual BP lowering.", [
      S("pathophysiology", "Pathophysiology", "<p>High hydrostatic pressure exceeds cerebral autoregulation (normal flow is constant at MAP 60–150) → hyperperfusion, cerebral congestion, and <strong>edema</strong>.</p>"),
      S("presentation", "Presentation", Tbl(["", "Hypertensive encephalopathy", "PRES"], [
        ["Key feature", "<strong>Altered mentation / confusion</strong>", "<strong>Vision changes, seizures, severe headache</strong>; AMS may occur"],
        ["Edema", "Generalized", "<strong>Bilateral occipital and parietal</strong> lobes"],
        ["Imaging", "CT to exclude bleed/infarct", "<strong>MRI</strong>: bilateral parieto-occipital hyperintensities"]
      ]) + Mn("PRES = Posterior", "Occipital lobes → vision changes.")),
      S("treatment", "Treatment", "<p><strong>Gradual</strong> BP lowering (algorithm drug: <strong>nicardipine</strong>), standard emergency goals. Both slowly improve over <strong>2–4 days</strong>.</p>" + HY("PRES and encephalopathy: nicardipine, gradual lowering, recovery in 2–4 days."))
    ], [
      Q("presentation", "What is the hallmark of hypertensive encephalopathy?", ["Altered mentation or confusion", "Unilateral hemiparesis only", "Tearing back pain", "Hematuria"], 0, "Confusion from generalized cerebral edema."),
      Q("presentation", "Which lobes does PRES most commonly affect?", ["Bilateral occipital and parietal lobes", "Bilateral frontal lobes", "Temporal lobes only", "Cerebellum"], 0, "PRES edema is mostly bilateral occipital and parietal."),
      Q("presentation", "Which imaging test shows PRES best?", ["MRI", "CT without contrast", "Skull x-ray", "Carotid Doppler"], 0, "PRES is seen best on MRI."),
      Q("presentation", "A 31-year-old with BP 214/128 has a seizure, severe headache, and blurred vision. MRI shows bilateral parieto-occipital hyperintensities. Diagnosis?", ["PRES", "Lacunar stroke", "Subarachnoid hemorrhage", "Multiple sclerosis"], 0, "These are the classic features of PRES."),
      Q("treatment", "Which IV drug does the algorithm pair with hypertensive encephalopathy?", ["Nicardipine", "Hydralazine", "Nitroglycerin", "Fenoldopam"], 0, "Encephalopathy → nicardipine."),
      Q("treatment", "How long do PRES and hypertensive encephalopathy take to improve with gradual BP lowering?", ["2–4 days", "10 minutes", "6 months", "They never improve"], 0, "Both slowly improve over 2–4 days."),
      Q("pathophysiology", "Why does brain edema develop in hypertensive encephalopathy?", ["Pressure exceeds the upper limit of autoregulation, causing hyperperfusion and congestion", "BP falls below the lower limit of autoregulation", "An embolus blocks the MCA", "Bacteria infect the meninges"], 0, "High hydrostatic pressure past the autoregulatory limit causes generalized edema.")
    ]),

    // ------------------------------------------------------------------
    D("hc-ischemic-stroke", "Ischemic Stroke With Severe Hypertension", "An embolus or a ruptured plaque blocks a cerebral artery; chronic HTN classically causes lacunar strokes in the basal ganglia. BP is left alone unless 220/120 or higher, or lowered below 185/110 for tPA.", [
      S("pathophysiology", "Pathophysiology", "<ul><li>Can occur anywhere from an <strong>embolus</strong> or <strong>rupture of an arteriosclerotic plaque</strong> with <strong>in situ thrombosis</strong>.</li><li>Chronic uncontrolled HTN classically causes <strong>lacunar strokes</strong> in small penetrating MCA arteries (lenticulostriates) to the <strong>basal ganglia</strong>.</li></ul>"),
      S("workup", "Work-up", "<p>Neuro change → <strong>non-contrast CT head</strong>; algorithm CNS branch: CT head, CTA brain/neck, MRI brain.</p>"),
      S("treatment", "BP management", Tbl(["Situation", "BP rule", "Drugs"], [
        ["Not receiving tPA", "Treat <strong>only if ≥ 220/120</strong>; otherwise resume home meds <strong>24–48 h</strong> after the stroke", "Labetalol, nicardipine"],
        ["Receiving IV or IA tPA", "<strong>&lt; 185/110</strong> before reperfusion", "Labetalol, nicardipine"]
      ]) + Mn("185 and 220", "185/110 to clot-bust; 220/120 to bother.") + C("the brain around an infarct relies on pressure for perfusion, so lowering BP can extend the stroke."))
    ], [
      Q("treatment", "In acute ischemic stroke without tPA, when is BP lowered?", ["Only if it is 220/120 or higher", "Whenever it is above 140/90", "Always to 120/80", "Never in the first month"], 0, "Treat only if at least 220/120."),
      Q("treatment", "What is the BP target before tPA in ischemic stroke?", ["Below 185/110", "Below 220/120", "Below 140/90", "Below 120/80"], 0, "Goal under 185/110 prior to reperfusion therapy."),
      Q("treatment", "Which drugs are preferred to lower BP in ischemic stroke?", ["Labetalol and nicardipine", "Nitroprusside and hydralazine", "Nitroglycerin and furosemide", "Methyldopa and clonidine"], 0, "Labetalol and nicardipine are preferred."),
      Q("treatment", "A stroke patient (not a tPA candidate) has BP 188/104 on day 1. When does she restart her home lisinopril?", ["24–48 hours after the stroke, if no contraindications", "Immediately in the ED", "Never", "In 6 months"], 0, "Home antihypertensives resume 24–48 hours after the stroke."),
      Q("pathophysiology", "Which stroke does chronically uncontrolled hypertension classically cause?", ["Lacunar stroke in the basal ganglia", "Watershed infarct", "Venous sinus thrombosis", "Cardioembolic stroke from AF"], 0, "Lacunar strokes in small penetrating MCA arteries."),
      Q("treatment", "A tPA candidate's BP is 202/116. What must happen before tPA?", ["Lower BP below 185/110", "Give tPA now", "Lower BP to 120/80", "Wait 48 hours"], 0, "BP must be under 185/110 before reperfusion."),
      Q("workup", "Which imaging is first for a hypertensive patient with acute focal weakness?", ["Non-contrast CT head", "CXR", "Echocardiogram", "Abdominal CT with contrast"], 0, "Neurologic change → non-contrast CT head to exclude hemorrhage.")
    ]),

    // ------------------------------------------------------------------
    D("hc-intracranial-hemorrhage", "Intracerebral and Subarachnoid Hemorrhage", "Bleeding into or around the brain from acute or long-standing severe HTN, often in the basal ganglia. The BP goal balances stopping the bleed against perfusing a brain adapted to high pressure; nicardipine is the drug of choice and nitroprusside and hydralazine are avoided.", [
      S("pathophysiology", "Pathophysiology", "<ul><li><strong>Intraparenchymal hemorrhage</strong>: with acutely elevated BP or long-standing poorly controlled HTN; often in the <strong>basal ganglia</strong> from small penetrating arteries off the MCA.</li><li>CT: blood <strong>bright white</strong>, surrounding vasogenic edema <strong>darker grey</strong>.</li><li><strong>Subarachnoid hemorrhage (slide 14)</strong>: blood between the skull and brain applying external pressure; concave hyperdense blood following the skull; burr hole and evacuation.</li></ul>" + C("the slide 14 description (concave crescent along the skull, burr hole) is the classic description of a subdural hematoma; a true SAH is blood in the subarachnoid space, classically from a ruptured aneurysm.")),
      S("dilemma", "Why BP is tricky", "<p>The chronically hypertensive brain has a <strong>right-shifted autoregulation curve</strong>. High BP can enlarge the bleed, but dropping MAP lowers cerebral perfusion (<strong>CPP = MAP − ICP</strong>), especially when ICP is raised. First <strong>determine whether ICP is increased</strong>.</p>"),
      S("treatment", "Treatment", Tbl(["", "ICH / SAH"], [
        ["Goal", "Usually titrated to <strong>SBP ~160</strong> (slide 48); algorithm: ICH <strong>&lt; 140</strong>, SAH <strong>&lt; 160</strong>"],
        ["Preferred", "<strong>Nicardipine (DOC)</strong>; labetalol or esmolol"],
        ["Avoid", "<strong>Nitroprusside</strong> (raises ICP), <strong>hydralazine</strong>"]
      ]) + HY("Bleeding brain: nicardipine; no nitroprusside, no hydralazine."))
    ], [
      Q("treatment", "What is the drug of choice for BP control in intracerebral hemorrhage?", ["Nicardipine", "Nitroprusside", "Hydralazine", "Nitroglycerin"], 0, "Nicardipine is DOC; labetalol or esmolol are alternatives."),
      Q("treatment", "Which two drugs are avoided in ICH and SAH?", ["Nitroprusside and hydralazine", "Nicardipine and labetalol", "Labetalol and esmolol", "Nicardipine and esmolol"], 0, "Avoid nitroprusside and hydralazine."),
      Q("treatment", "Why is nitroprusside avoided in intracranial hemorrhage?", ["It raises intracranial pressure", "It is too slow", "It causes bradycardia", "It cannot be titrated"], 0, "Nitroprusside raises ICP."),
      Q("pathophysiology", "Where do hypertensive intraparenchymal hemorrhages often occur?", ["Basal ganglia, from small penetrating MCA arteries", "Frontal pole, from the ACA trunk", "Cerebellar vermis only", "Spinal cord"], 0, "Basal ganglia, small penetrating branches off the MCA."),
      Q("pathophysiology", "How does acute intraparenchymal blood look on non-contrast CT?", ["Bright white with darker grey surrounding edema", "Black with white edema", "Invisible", "Grey, identical to brain"], 0, "Acute blood is hyperdense (white); vasogenic edema is darker."),
      Q("dilemma", "Why is the BP goal in ICH a difficult decision?", ["Lowering BP limits bleeding but can starve a brain adapted to high pressure, especially with raised ICP", "BP has no effect on bleeding", "All antihypertensives are contraindicated", "ICH requires raising BP to 220"], 0, "Competing interests: CPP = MAP − ICP vs bleed expansion."),
      Q("treatment", "What is the algorithm's SBP goal for subarachnoid hemorrhage?", ["Below 160", "Below 100", "100–120 within 20 minutes", "Below 220"], 0, "SAH SBP goal is under 160 on the algorithm."),
      Q("dilemma", "What should be determined first when managing BP in ICH or SAH?", ["Whether intracranial pressure is increased", "The patient's lipid panel", "Whether the patient is a tPA candidate", "The patient's HbA1c"], 0, "Determine if increased ICP is present.")
    ]),

    // ------------------------------------------------------------------
    D("hc-aortic-dissection", "Aortic Dissection in Hypertensive Emergency", "High aortic pressure tears the intima and blood splits the wall between intima and media. Suspect it with tearing back pain, unequal arm pressures, or a missing pulse; drop HR below 60 and SBP to 100–120 within 20 minutes, then OR.", [
      S("pathophysiology", "Pathophysiology", "<p>High pressure tears the <strong>intima</strong>; the tear widens rapidly as blood is forced <strong>between the intima and media</strong>; the dissection worsens quickly and can <strong>rupture</strong>.</p>"),
      S("presentation", "Presentation and exam", "<ul><li><strong>Acute severe back pain</strong> (cardiopulmonary branch: chest pain, back pain)</li><li><strong>BP difference between arms</strong></li><li><strong>Weak or absent carotid, brachial, or femoral pulse</strong></li></ul>"),
      S("workup", "Work-up", "<p>Cardiopulmonary branch: CXR, ECG, troponin, <strong>CTA chest</strong>.</p>"),
      S("treatment", "Treatment", "<ul><li>Goal: <strong>HR &lt; 60</strong> immediately, then <strong>SBP 100–120 within 20 minutes</strong>, unless end-organ hypoperfusion occurs.</li><li>Drugs: <strong>morphine</strong> + <strong>beta-blocker (esmolol, labetalol)</strong> + <strong>vasodilator (nitroprusside)</strong>.</li><li>Then the <strong>OR</strong>.</li></ul>" + Mn("MBV → OR", "Morphine, Beta-blocker, Vasodilator, then the operating room.") + C("beta-blockade first keeps the vasodilator from causing reflex tachycardia that would stress the torn wall."))
    ], [
      Q("treatment", "What is the SBP goal in acute aortic dissection?", ["100–120 within 20 minutes", "Below 185 within 24 hours", "A 10–20% MAP reduction in one hour", "Below 220"], 0, "Rapidly lower SBP to 100–120 within 20 minutes."),
      Q("treatment", "What heart rate target comes first in aortic dissection?", ["Below 60 bpm", "Below 100 bpm", "Above 80 bpm", "Below 30 bpm"], 0, "HR under 60, then SBP 100–120."),
      Q("treatment", "Which combination is preferred for aortic dissection?", ["Morphine, esmolol or labetalol, and nitroprusside", "Hydralazine alone", "Nitroglycerin and furosemide", "Nicardipine and hydralazine"], 0, "Narcotic, beta-blocker, and vasodilator, then OR."),
      Q("presentation", "Which exam finding suggests aortic dissection in a hypertensive patient?", ["A large BP difference between the arms", "Papilledema", "Bibasilar crackles", "Proteinuria"], 0, "Interarm BP difference and absent pulses suggest dissection."),
      Q("pathophysiology", "Between which layers does blood travel in aortic dissection?", ["Intima and media", "Media and pericardium", "Adventitia and pleura", "Endocardium and myocardium"], 0, "Blood is forced between the intima and media."),
      Q("workup", "Which imaging confirms suspected dissection on the algorithm?", ["CTA chest", "MRI brain", "Renal ultrasound", "Abdominal x-ray"], 0, "The cardiopulmonary work-up includes CTA chest."),
      Q("treatment", "A dissection patient is started on nitroprusside alone and HR rises to 118. What was missed?", ["A beta-blocker first to control heart rate", "More nitroprusside", "Hydralazine", "Nothing; tachycardia is the goal"], 0, "Beta-blockade first prevents reflex tachycardia from vasodilation."),
      Q("treatment", "After BP and HR are controlled in acute dissection, where does the patient go?", ["The operating room", "Home with oral meds", "Outpatient follow-up in a month", "Cardiac rehab"], 0, "Then the patient goes to the OR.")
    ]),

    // ------------------------------------------------------------------
    D("hc-acs", "Acute Coronary Syndrome in Hypertensive Emergency", "STEMI, NSTEMI, or unstable angina triggered by extreme afterload: coronary filling in diastole falls while a thick, stiff LV needs more oxygen. Treat when above 160/100 with a nitroglycerin drip or IV beta-blocker.", [
      S("pathophysiology", "Pathophysiology", "<ul><li>Coronaries perfuse the myocardium during <strong>diastole</strong>.</li><li>High aortic pressure, <strong>severe afterload</strong>, and <strong>LV hypertrophy</strong> → less coronary perfusion.</li><li>A tense, stiff myocardium <strong>needs more O<sub>2</sub></strong> and <strong>may not relax</strong> for diastolic filling.</li></ul>" + HY("Supply ↓ + demand ↑ = ischemia.")),
      S("workup", "Work-up", "<p><strong>Troponin elevation</strong> and possible <strong>EKG changes</strong>. hs-troponin now and in 60–90 min, then q6–8h × 2 if elevated. Involve <strong>cardiology early</strong>; <strong>echo</strong> if not going to the cath lab.</p>"),
      S("treatment", "Treatment", "<ul><li>Treat if <strong>SBP &gt; 160 and/or DBP &gt; 100</strong>.</li><li>Preferred: <strong>nitroglycerin drip</strong> or <strong>IV beta-blocker (metoprolol, esmolol)</strong>.</li><li>Caution: nicardipine (coronary ischemia); hydralazine aggravates angina.</li></ul>")
    ], [
      Q("treatment", "At what BP is hypertension treated in acute coronary syndrome?", ["SBP above 160 and/or DBP above 100", "SBP above 220", "SBP above 120", "Only if BP is above 250"], 0, "Treat if SBP is over 160 and/or DBP over 100."),
      Q("treatment", "Which drugs are preferred for hypertensive ACS?", ["Nitroglycerin drip or IV metoprolol/esmolol", "Hydralazine or minoxidil", "Fenoldopam alone", "Sublingual nifedipine"], 0, "NTG or IV beta-blockers are preferred."),
      Q("pathophysiology", "Why does severe afterload cause myocardial ischemia?", ["Diastolic coronary filling falls while oxygen demand rises", "Coronary flow rises in systole", "Afterload lowers oxygen demand", "The coronaries fill only during systole"], 0, "Coronaries fill in diastole; afterload and LVH reduce supply and raise demand."),
      Q("workup", "If a hypertensive ACS patient is not going to the cath lab, which test is obtained?", ["Echocardiogram", "MRI brain", "Renal scan", "Upper endoscopy"], 0, "Obtain an echo if not going to cardiac catheterization."),
      Q("treatment", "Which drug can aggravate angina and should not be the choice in hypertensive ACS?", ["Hydralazine", "Nitroglycerin", "Metoprolol", "Esmolol"], 0, "Hydralazine's adverse effects include aggravation of angina."),
      Q("workup", "A hypertensive emergency patient has chest pain. When is the second hs-troponin drawn?", ["In 60–90 minutes", "In 24 hours", "In a week", "Never"], 0, "hs-troponin now and in 60–90 minutes."),
      Q("treatment", "A 64-year-old with NSTEMI, BP 182/106, and HR 96 has a history of nightly tadalafil, last dose 6 hours ago. Which IV option avoids a dangerous interaction?", ["IV metoprolol or esmolol", "IV nitroglycerin", "Sublingual nitroglycerin", "Isosorbide dinitrate"], 0, "Nitrates with PDE-5 inhibitors cause severe hypotension; use an IV beta-blocker instead.")
    ]),

    // ------------------------------------------------------------------
    D("hc-acute-heart-failure", "Acute LV Failure and Flash Pulmonary Edema", "Afterload so high that the left ventricle cannot eject forward, so blood backs up into the lungs. Diurese with an IV loop, then add nitroglycerin; target SBP below 140 and avoid beta-blockers, CCBs, and hydralazine.", [
      S("pathophysiology", "Pathophysiology", "<p>In crisis the afterload (aortic pressure) becomes so high that <strong>forward flow out of the LV is compromised</strong>; blood <strong>backs up into the lungs</strong> causing progressively worse pulmonary congestion.</p>"),
      S("presentation", "Presentation", "<ul><li>Dyspnea, orthopnea</li><li><strong>JVD</strong>, <strong>crackles (rales)</strong></li><li>Peripheral edema</li></ul><p>Work-up: CXR, ECG, troponin.</p>"),
      S("treatment", "Treatment", "<ul><li>Goal <strong>SBP &lt; 140</strong>.</li><li><strong>IV loop diuretic first</strong> if fluid overloaded.</li><li>Then <strong>nitroglycerin</strong> (venous vasodilator; dilates coronaries too).</li></ul>" + Tbl(["Avoid in acute decompensated HFrEF", "Why"], [
        ["Beta-blockers, CCBs (labetalol, nicardipine)", "Depress contractility"],
        ["Hydralazine", "Increases cardiac work by arterial vasodilation"]
      ]) + Mn("Dry, then Dilate", "Loop diuretic, then nitroglycerin."))
    ], [
      Q("treatment", "What is the SBP goal in hypertensive acute heart failure?", ["Below 140", "Below 185", "100–120 in 20 minutes", "Below 220"], 0, "The acute HF goal is SBP under 140."),
      Q("treatment", "What is given first to a fluid-overloaded patient in hypertensive acute HF?", ["IV loop diuretic", "IV labetalol", "IV nicardipine", "IV hydralazine"], 0, "A loop diuretic dries the lungs first."),
      Q("treatment", "Which vasodilator is added after diuresis in acute HF?", ["Nitroglycerin", "Hydralazine", "Nicardipine", "Minoxidil"], 0, "Nitroglycerin is the venous vasodilator of choice."),
      Q("treatment", "Why are beta-blockers and CCBs avoided in acute decompensated HFrEF?", ["They depress contractility", "They raise ICP", "They cause cyanide toxicity", "They cause hyperkalemia"], 0, "Both depress contractility."),
      Q("pathophysiology", "What causes flash pulmonary edema in hypertensive emergency?", ["Afterload so high that LV forward flow fails and blood backs into the lungs", "Low afterload with high output", "Pulmonary embolism", "Right ventricular infarct"], 0, "Extreme afterload compromises LV ejection."),
      Q("presentation", "A 70-year-old has BP 230/130, JVD, diffuse crackles, and orthopnea. What is the end-organ damage?", ["Acute LV failure with pulmonary edema", "Aortic dissection", "PRES", "Hypertensive urgency"], 0, "JVD, rales, and orthopnea are acute LV failure with congestion."),
      Q("treatment", "Why is hydralazine avoided in acute decompensated HFrEF?", ["It increases cardiac work", "It depresses contractility", "It raises ICP", "It causes bradycardia"], 0, "Hydralazine increases cardiac work through arterial vasodilation.")
    ]),

    // ------------------------------------------------------------------
    D("hc-renal-retinal-maha", "Renal, Retinal, and Blood Damage (AKI, Retinopathy, MAHA)", "Hypertensive emergency can injure the kidney (AKI, proteinuria), the retina (flame hemorrhages, exudates, papilledema), and red cells (microangiopathic hemolytic anemia). Look with labs, a UA, and the fundoscope.", [
      S("renal", "Kidney: AKI and proteinuria", "<ul><li>Chronic HTN sclerosis removes renal autoregulation: glomerular pressure follows systemic pressure.</li><li>In crisis, cardiac output falls against severe afterload → <strong>hypoperfused kidney</strong> → <strong>AKI or proteinuria</strong>; decreased urine output.</li><li>Work-up: BUN, Cr, eGFR; UA (hematuria, proteinuria, RBCs, <strong>RBC casts</strong>).</li><li>Algorithm: acute hypertensive nephrosclerosis → <strong>fenoldopam</strong>.</li></ul>"),
      S("retina", "Eye: hypertensive retinopathy", "<p>Retinal vascular changes cause <strong>exudates and microinfarctions</strong>. Fundoscopy: new <strong>flame hemorrhages, exudates, papilledema</strong>.</p>"),
      S("maha", "Blood: MAHA", "<p><strong>Hemolysis from high vascular pressures</strong>. New anemia on CBC → <strong>LFTs, haptoglobin, peripheral smear</strong>.</p>" + C("standard findings are low haptoglobin and schistocytes on the smear."))
    ], [
      Q("renal", "Which drug does the algorithm list for acute hypertensive nephrosclerosis?", ["Fenoldopam", "Hydralazine", "Labetalol", "Nitroglycerin"], 0, "Slide 55 lists fenoldopam."),
      Q("renal", "Which urinalysis findings support hypertensive renal injury?", ["Hematuria, proteinuria, and RBC casts", "Glucose and ketones", "Nitrites and leukocyte esterase", "Bilirubin"], 0, "UA looks for hematuria, proteinuria, RBCs, and RBC casts."),
      Q("renal", "What causes AKI in hypertensive emergency according to the lecture?", ["Hypoperfusion as cardiac output falls against severe afterload", "Direct drug toxicity", "Kidney stones", "Hyperperfusion from high cardiac output"], 0, "Falling cardiac output hypoperfuses the kidney."),
      Q("retina", "Which fundoscopic findings point to an acute hypertensive emergency?", ["New flame hemorrhages, exudates, or papilledema", "Cherry-red spot", "Drusen", "Normal fundus"], 0, "New flame hemorrhages, exudates, or papilledema."),
      Q("maha", "A crisis patient has new anemia. Which tests evaluate for MAHA?", ["LFTs, haptoglobin, and peripheral smear", "Ferritin and TIBC", "B12 and folate", "Hemoglobin electrophoresis"], 0, "These exclude microangiopathic hemolytic anemia."),
      Q("maha", "What causes microangiopathic hemolytic anemia in hypertensive emergency?", ["Red cells hemolyzed by high vascular pressure", "Iron deficiency", "Marrow failure", "Autoimmune antibodies only"], 0, "Hemolysis is the result of high vascular pressures."),
      Q("renal", "Which symptom on the algorithm signals renal involvement?", ["Decreased urine output", "Back pain", "Visual disturbance", "Intractable vomiting"], 0, "Renal branch symptom: decreased urine output.")
    ]),

    // ------------------------------------------------------------------
    D("hc-sympathetic-crisis", "Sympathetic Crisis (Cocaine, Amphetamines, Pheochromocytoma)", "A catecholamine surge from cocaine, methamphetamine or amphetamines, pheochromocytoma, or severe autonomic dysfunction causes sudden severe HTN with tachycardia. Never give a beta-blocker alone; block alpha and beta together with labetalol.", [
      S("causes", "Causes", "<ul><li><strong>Cocaine</strong></li><li><strong>Methamphetamine/amphetamines</strong> (Ritalin, Adderall)</li><li><strong>Pheochromocytoma</strong></li><li><strong>Severe autonomic dysfunction</strong>: spinal cord injury, Guillain-Barré</li></ul>"),
      S("presentation", "Presentation", "<p>Large catecholamine release → sudden severe HTN; patients are quite <strong>tachycardic</strong> and hypertensive, perhaps with <strong>coronary ischemia</strong>. Work-up includes a <strong>urine toxicology screen</strong>.</p>"),
      S("treatment", "Treatment", "<p>A <strong>beta-blocker alone is contraindicated</strong>: catecholamines then bind α receptors → <strong>unopposed alpha vasoconstriction</strong> → BP rises further. Block both with <strong>IV labetalol</strong>.</p>" + HY("Stimulants or pheo: no pure beta-blocker. Labetalol."))
    ], [
      Q("treatment", "Why is a beta-blocker alone contraindicated in cocaine-induced hypertensive emergency?", ["It causes unopposed alpha-adrenergic vasoconstriction", "It raises ICP", "It causes cyanide toxicity", "It lowers potassium dangerously"], 0, "Catecholamines are left to act on alpha receptors."),
      Q("treatment", "Which IV drug blocks alpha and beta together in a sympathetic crisis?", ["Labetalol", "Metoprolol", "Esmolol", "Propranolol"], 0, "Labetalol blocks both."),
      Q("causes", "Which neurologic conditions can cause a sympathetic hypertensive crisis?", ["Spinal cord injury and Guillain-Barré syndrome", "Migraine and cluster headache", "Bell's palsy", "Essential tremor"], 0, "Severe autonomic dysfunction from cord injury or GBS."),
      Q("presentation", "A 23-year-old has BP 224/130, HR 140, dilated pupils, and chest pain at a party. What test supports the cause?", ["Urine toxicology screen", "TSH", "Lipid panel", "Serum aldosterone"], 0, "Urine tox looks for cocaine or amphetamines."),
      Q("treatment", "A patient with a pheochromocytoma crisis gets IV propranolol alone and BP climbs higher. Why?", ["Unopposed alpha stimulation", "Propranolol is an alpha agonist", "Rebound from clonidine", "Cyanide toxicity"], 0, "Pure beta-blockade leaves alpha receptors fully stimulated."),
      Q("causes", "Which prescription stimulants are listed as causes of sympathetic crisis?", ["Ritalin and Adderall", "Sertraline and bupropion", "Lisinopril and losartan", "Levothyroxine and liothyronine"], 0, "Amphetamines including Ritalin and Adderall.")
    ]),

    // ------------------------------------------------------------------
    D("hc-preeclampsia", "Preeclampsia and Eclampsia", "Chronic or gestational hypertension with placental insufficiency and proteinuria after 20 weeks (up to 6 weeks postpartum); eclampsia adds seizures. Delivery is definitive; IV labetalol or hydralazine bring SBP below 150.", [
      S("definition", "Definition", Tbl(["", "Preeclampsia", "Eclampsia"], [
        ["Defined by", "HTN (chronic or gestational) + <strong>placental insufficiency</strong> + <strong>proteinuria</strong>", "<strong>HTN + proteinuria + seizure</strong>"],
        ["Timing", "Typically &gt; 20 weeks to &lt; 6 weeks postpartum", "Same"]
      ])),
      S("risk", "Risk factors", "<ul><li><strong>Nulliparous</strong></li><li><strong>Multiple gestation</strong></li><li>History of <strong>HTN or renal disease</strong></li><li><strong>Family history</strong></li></ul>"),
      S("presentation", "Presentation and work-up", "<p>Seizure, headache, visual disturbance. Work-up: CBC, BMP, LFT, UA, <strong>protein:creatinine</strong>.</p>"),
      S("treatment", "Treatment", "<ul><li>Restricted activity, possibly bed rest, very close fetal monitoring.</li><li><strong>Definitive treatment is delivery</strong>.</li><li>Emergency: <strong>labetalol or hydralazine</strong>; goal <strong>SBP &lt; 150, DBP 80–100</strong>.</li><li><strong>Never ACEI/ARB</strong> (fetal toxicity, death).</li></ul>" + HY("Hydralazine is the IV drug the table lists for eclampsia."))
    ], [
      Q("definition", "What distinguishes preeclampsia from gestational hypertension?", ["Placental insufficiency with proteinuria", "Onset before 20 weeks", "No proteinuria", "Normal BP"], 0, "Preeclampsia adds placental insufficiency and proteinuria."),
      Q("definition", "Eclampsia is defined as:", ["Hypertension, proteinuria, and seizure", "Hypertension before 20 weeks", "Proteinuria without hypertension", "Hypotension after delivery"], 0, "Eclampsia = HTN, proteinuria, and seizure."),
      Q("treatment", "What is the definitive treatment of preeclampsia?", ["Delivery", "Bed rest alone", "An ACE inhibitor", "Magnesium alone for life"], 0, "Delivery is definitive."),
      Q("risk", "Which patient is at highest risk of preeclampsia?", ["A nulliparous woman carrying twins with chronic HTN", "A multiparous woman with a singleton and no history", "A woman with two prior uncomplicated pregnancies", "A woman with no family history and normal kidneys in her third pregnancy"], 0, "Nulliparity, multiple gestation, and prior HTN or renal disease raise risk."),
      Q("treatment", "Which IV drugs does the algorithm list for preeclampsia or eclampsia?", ["Labetalol and hydralazine", "Nitroprusside and esmolol", "Enalaprilat and losartan", "Nitroglycerin and furosemide"], 0, "Labetalol and hydralazine are the obstetric drugs."),
      Q("treatment", "What is the immediate BP goal in preeclampsia/eclampsia on the algorithm?", ["SBP below 150 and DBP 80–100", "SBP 100–120 within 20 minutes", "Below 185/110", "Below 120/80"], 0, "Goal SBP under 150 with DBP 80–100."),
      Q("presentation", "Which test on the obstetric work-up quantifies proteinuria?", ["Urine protein:creatinine ratio", "Urine culture", "Serum lipase", "Chest x-ray"], 0, "The obstetric branch includes protein:creatinine."),
      Q("definition", "A 23-year-old in her first pregnancy at 35 weeks has BP 162/106, proteinuria, and then a seizure. Diagnosis?", ["Eclampsia", "Gestational hypertension", "Chronic hypertension", "PRES unrelated to pregnancy"], 0, "Preeclampsia plus seizure is eclampsia.")
    ]),

    // ------------------------------------------------------------------
    D("hc-pregnancy-htn", "Chronic and Gestational Hypertension in Pregnancy", "Chronic HTN predates pregnancy or appears before 20 weeks; gestational HTN appears after 20 weeks without proteinuria and resolves by 12 weeks postpartum. Treat with labetalol, methyldopa, or nifedipine, never an ACEI or ARB.", [
      S("physiology", "Why BP can rise", "<p>Plasma volume rises to <strong>150% of normal</strong> and RBC volume by <strong>30%</strong>, stressing the CV system.</p>"),
      S("definition", "Types", Tbl(["", "Chronic HTN", "Gestational (pregnancy-induced) HTN"], [
        ["Definition", "Prior diagnosis, or &gt; 140/90 <strong>before 20 weeks</strong>, or persisting &gt; <strong>12 weeks postpartum</strong>", "&gt; 140/90 <strong>after 20 weeks</strong>, <strong>no proteinuria</strong>"],
        ["Course", "Persists", "Resolves by 12 weeks postpartum"]
      ]) + Mn("20 and 12", "20 weeks' gestation splits chronic from gestational; 12 weeks postpartum decides whether it was really chronic.")),
      S("treatment", "Medications", Tbl(["Drug", "Notes"], [
        ["<strong>Labetalol</strong>", "BID, well tolerated, good safety data; increasingly preferred (fewer side effects)"],
        ["<strong>Methyldopa</strong>", "2–4×/day, good safety data; preferred on long-term follow-up data; anticholinergic side effects"],
        ["<strong>Nifedipine / diltiazem</strong>", "Once daily, less safety data; no ↑ major teratogenicity"],
        ["β-blockers", "Generally safe; IUGR reported"],
        ["Clonidine", "Limited data"],
        ["Diuretics", "Not first-line; probably safe in low doses"],
        ["<strong>ACEI, ARB</strong>", "Category C 1st trimester, D 2nd/3rd; <strong>major teratogenicity</strong> (fetal toxicity, death)"]
      ]))
    ], [
      Q("definition", "New BP above 140/90 after 20 weeks without proteinuria that resolves by 12 weeks postpartum is:", ["Gestational hypertension", "Chronic hypertension", "Preeclampsia", "Eclampsia"], 0, "That is the definition of gestational (pregnancy-induced) hypertension."),
      Q("definition", "BP above 140/90 found at 12 weeks' gestation is classified as:", ["Chronic hypertension", "Gestational hypertension", "Preeclampsia", "Normal pregnancy physiology"], 0, "HTN before 20 weeks is chronic."),
      Q("treatment", "Which antihypertensives must be avoided in pregnancy?", ["ACE inhibitors and ARBs", "Labetalol and methyldopa", "Nifedipine and labetalol", "Hydralazine and labetalol"], 0, "ACEIs and ARBs cause fetal toxicity and death."),
      Q("treatment", "Which pregnancy antihypertensive has the longest-term safety follow-up data?", ["Methyldopa", "Losartan", "Spironolactone", "Lisinopril"], 0, "Methyldopa is preferred on long-term safety data."),
      Q("treatment", "Which fetal effect has been reported with beta-blockers in pregnancy?", ["Intrauterine growth retardation", "Neural tube defects", "Fetal hyperthyroidism", "Cleft lip"], 0, "IUGR has been reported."),
      Q("physiology", "By how much does plasma volume rise in pregnancy?", ["To about 150% of normal", "To about 300% of normal", "It falls by half", "It does not change"], 0, "Plasma volume increases to 150% of normal."),
      Q("treatment", "A woman on lisinopril learns she is 6 weeks pregnant. What should happen?", ["Stop lisinopril and switch to labetalol or methyldopa", "Continue lisinopril", "Add losartan", "Stop all treatment and recheck after delivery"], 0, "ACEIs are teratogenic; switch to a pregnancy-safe drug.")
    ]),

    // ------------------------------------------------------------------
    D("hc-nitrate-toxicity", "Nitroprusside and Nitrate Toxicity", "Complications of the IV vasodilators used in crisis: cyanide toxicity from nitroprusside (worse with renal or liver disease; treat with sodium thiosulfate), methemoglobinemia from nitroprusside or nitroglycerin (cyanosis despite oxygen; treat with methylene blue), and severe hypotension from nitrates plus PDE-5 inhibitors.", [
      S("cyanide", "Cyanide toxicity", "<p>Nitroprusside produces large amounts of <strong>cyanide</strong>; humans clear it poorly, especially with <strong>renal or liver disease</strong>. Thiocyanate toxicity also occurs. Treatment: <strong>sodium thiosulfate</strong>.</p>"),
      S("methemoglobinemia", "Methemoglobinemia", "<p>Hemoglobin oxidized from <strong>ferrous (Fe<sup>2+</sup>) to ferric (Fe<sup>3+</sup>)</strong>, which cannot bind O<sub>2</sub>: <strong>cyanosis</strong> and hypoxia <strong>despite high-flow oxygen</strong>. Caused by nitroprusside and nitroglycerin. Treatment: <strong>methylene blue</strong>.</p>" + Mn("Met-Met", "Methemoglobinemia → methylene blue.")),
      S("nitrates", "Nitroglycerin problems", "<ul><li>Headache, flushing, hypotension</li><li><strong>Tachyphylaxis in 24–48 h</strong> → nitrate-free interval</li><li><strong>PDE-5 inhibitors</strong> (sildenafil, tadalafil) → very severe hypotension</li></ul>")
    ], [
      Q("cyanide", "What is the treatment for nitroprusside-induced cyanide toxicity?", ["Sodium thiosulfate", "Methylene blue", "Naloxone", "Vitamin K"], 0, "Sodium thiosulfate treats cyanide toxicity."),
      Q("methemoglobinemia", "What is the treatment for methemoglobinemia?", ["Methylene blue", "Sodium thiosulfate", "Protamine", "Flumazenil"], 0, "Methylene blue treats methemoglobinemia."),
      Q("cyanide", "Which patients are at highest risk of cyanide toxicity on nitroprusside?", ["Those with renal or liver disease", "Young healthy adults", "Patients with asthma", "Patients with migraine"], 0, "Renal or liver disease limits cyanide clearance."),
      Q("methemoglobinemia", "A patient on nitroprusside becomes cyanotic with low O2 saturation that does not improve on high-flow oxygen. Most likely cause?", ["Methemoglobinemia", "Cyanide toxicity", "Pulmonary embolism", "Hypoglycemia"], 0, "Ferric hemoglobin cannot bind oxygen, so supplemental O2 does not help."),
      Q("nitrates", "A man took sildenafil last night and now has chest pain. Why avoid nitroglycerin?", ["Nitrates plus PDE-5 inhibitors cause very severe hypotension", "Sildenafil blocks nitrates", "Nitrates cause hypertension with sildenafil", "There is no interaction"], 0, "The combination causes profound hypotension."),
      Q("nitrates", "After 2 days on a continuous nitroglycerin drip, the effect fades. Why?", ["Tachyphylaxis; a nitrate-free interval is needed", "Cyanide toxicity", "Drug allergy", "Methemoglobin reversal"], 0, "Tolerance develops within 24–48 hours."),
      Q("methemoglobinemia", "In methemoglobinemia, the iron in hemoglobin is converted from:", ["Ferrous (Fe2+) to ferric (Fe3+)", "Ferric (Fe3+) to ferrous (Fe2+)", "Iron to copper", "It is not changed"], 0, "Oxidized ferric iron cannot bind oxygen.")
    ])
  ]);
})();
