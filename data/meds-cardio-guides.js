/*
  Medications: "Which drug when" guides (Cardio Part 1). Side-by-side
  comparisons that cut across drug classes. Source: hypertension-part-3.md
  slides 24-31 and 96-105, hypertension-part-1.md slide 65,
  hypertension-part-2.md slides 51-52, hypertensive-crisis.md slides 34-55,
  cardiomyopathies.md slides 37-39 and 84, lipids-dyslipidemia.md slide 83.
  Only append questions.
*/
(function () {
  "use strict";
  var H = window.DiseaseContent, M = window.MedContent;
  var Tbl = H.Tbl, HY = H.HY, Mn = H.Mn, S = H.S, Q = H.Q, L = H.L, Guide = M.Guide, ul = M.ul;

  window.CARDIO_MEDS_GUIDES = L("meds-guides", "Which drug when", [

    Guide("guide-htn-choice", "Picking the hypertension drug", "First-line classes, compelling indications, and patient factors", ["Hypertension Part III"], [
      S("first", "First line & compelling indications",
        "<p><strong>First line</strong> (no compelling indication): <strong>ACEI or ARB, CCB, thiazide</strong>. Later-line but still common: spironolactone, carvedilol, metoprolol, doxazosin, clonidine, hydralazine.</p>" +
        Tbl(["Compelling indication", "Drugs"], [
          ["HFrEF", "ACEI/ARB + beta blocker + aldosterone antagonist + diuretic (get 2–3 on board). <strong>Avoid non-DHP CCB</strong>"],
          ["Post-MI", "Beta blocker + ACEI/ARB"],
          ["CAD", "Beta blocker, ACEI/ARB, then DHP-CCB or thiazide"],
          ["AFib", "Beta blocker or non-DHP CCB, ACEI/ARB, then thiazide"],
          ["Diabetes", "ACEI/ARB, then DHP-CCB or thiazide"],
          ["CKD / proteinuria", "ACEI/ARB, then DHP-CCB or thiazide"],
          ["Recurrent stroke prevention", "ACEI/ARB, then thiazide or DHP-CCB"]
        ]) + HY("Compelling indications trump race and age.")),
      S("patient", "Patient factors",
        Tbl(["Patient", "Choose", "Avoid"], [
          ["Black (any age)", "<strong>CCB, thiazide</strong>", "ACEI/ARB less effective (2nd/3rd line)"],
          ["White or Asian (&lt; 60)", "<strong>ACEI or ARB</strong>, then CCB or thiazide", ""],
          ["Age &gt; 60", "Thiazide, ACEI or ARB; start low, go slow", "Beta blocker without a compelling reason"],
          ["Could become pregnant", "Thiazide, DHP-CCB, beta blocker", "<strong>ACEI, ARB</strong>"],
          ["Gout, incontinence, SSRI, low sodium, falls", "Another first-line class", "<strong>Thiazide</strong>"],
          ["Advanced CKD / ESRD", "CCB, BB, direct vasodilators, α2 agonists", ""],
          ["Diabetes", "ACEI/ARB first", "Beta blocker (unless compelling), thiazide as first drug"],
          ["HTN + BPH", "Add an alpha-1 blocker", ""]
        ])),
      S("combo", "Mono vs combination & resistant HTN",
        ul([
          "<strong>Stage 1</strong>: one drug is usually enough.",
          "<strong>Stage 2</strong> (≥ 140/90): start <strong>two drugs</strong> at low dose, ideally a fixed-dose combo pill (never ACEI + ARB).",
          "Most used triple combo: <strong>ACEI or ARB + CCB + thiazide</strong> (controls 80%).",
          "<strong>Resistant HTN</strong>: not at goal on max doses of three drugs, one a thiazide. Check adherence and home BP, rule out interfering drugs, then add a <strong>4th drug</strong> (aldosterone antagonist, BB, central agent, alpha blocker or direct vasodilator); refer or work up secondary HTN.",
          "Over 75 with stage 1 and falls, dementia, nursing-home residence, orthostasis or limited life expectancy: consider holding drug treatment."
        ]))
    ], [
      Q("first", "A 50-year-old with HFrEF (EF 30%) and HTN. Which BP drug class should be avoided?", ["Non-dihydropyridine CCB", "ACE inhibitor", "Beta blocker", "Aldosterone antagonist"], 0, "HFrEF: ACEI/ARB + BB + aldosterone antagonist + diuretic; avoid non-DHP CCBs."),
      Q("first", "What are the three first-line classes for hypertension without a compelling indication?", ["ACEI or ARB, CCB, thiazide", "Beta blocker, loop diuretic, clonidine", "ARB, ACEI, aldosterone antagonist", "Alpha blocker, hydralazine, CCB"], 0, "First line: ACEIs or ARBs, CCBs and thiazide-type diuretics."),
      Q("patient", "A 45-year-old Black man with stage 1 HTN, no other disease. Best first drug?", ["Amlodipine or chlorthalidone", "Lisinopril", "Metoprolol", "Doxazosin"], 0, "CCBs and thiazides are more effective in Black patients."),
      Q("patient", "A 40-year-old White woman with type 2 diabetes and microalbuminuria has HTN. First drug?", ["ACE inhibitor or ARB", "Thiazide", "Beta blocker", "Clonidine"], 0, "Diabetes and CKD/proteinuria: ACEI or ARB first, then DHP-CCB or thiazide."),
      Q("combo", "A patient has BP 156/98 (stage 2). How should drug therapy start?", ["Two drugs at low dose, ideally in one combo pill", "One drug and recheck in 6 months", "ACEI plus ARB", "Lifestyle only for 6 months"], 0, "Stage 2: start dual therapy, but never ACEI + ARB together."),
      Q("combo", "What defines resistant hypertension?", ["Above goal on max doses of 3 drugs, one being a thiazide", "Above goal on 1 drug", "BP above 180/120 with organ damage", "Any patient on 4 drugs"], 0, "Resistant HTN: not at goal on the maximum tolerated dose of three antihypertensives, one a thiazide."),
      Q("first", "Which two drugs should a post-MI hypertensive patient be on?", ["Beta blocker and ACEI or ARB", "Thiazide and CCB", "Clonidine and hydralazine", "Alpha blocker and diuretic"], 0, "Post-MI: beta blocker + ACEI or ARB."),
      Q("first", "Which compelling indication lists a beta blocker OR non-DHP CCB first?", ["Atrial fibrillation", "Diabetes", "CKD with proteinuria", "Recurrent stroke"], 0, "AFib: BB or non-DHP CCB, ACEI or ARB, then thiazide."),
      Q("patient", "Which antihypertensive classes are commonly used in ESRD because they are safe?", ["CCBs, beta blockers, direct vasodilators, alpha-2 agonists", "ACEI plus ARB", "Thiazides and potassium-sparing diuretics", "Aldosterone antagonists"], 0, "Advanced CKD/ESRD: CCB, BB, direct arterial vasodilators and α2 agonists are frequently used."),
      Q("combo", "What is the most widely used three-drug combination for hypertension?", ["ACEI or ARB + CCB + thiazide", "ACEI + ARB + thiazide", "Beta blocker + clonidine + hydralazine", "Loop + thiazide + spironolactone"], 0, "ACEI (or ARB) + CCB + thiazide controls BP in about 80% of patients.")
    ]),

    Guide("guide-emergency-choice", "Hypertensive emergency: drug by situation", "Which IV drug for which organ, and what to avoid", ["Hypertensive Crisis"], [
      S("table", "Drug by situation",
        Tbl(["Situation", "Preferred", "BP goal"], [
          ["Most emergencies (encephalopathy, nephrosclerosis, ACS, HF)", "—", "MAP down 10–20% in the first hour, then 5–15% more over 23 hours (or &lt; 160/110)"],
          ["Acute ischemic stroke", "<strong>Labetalol, nicardipine</strong>", "Treat only if ≥ 220/120; &lt; 185/110 before tPA"],
          ["Intracerebral hemorrhage / SAH", "<strong>Nicardipine (DOC)</strong>; labetalol or esmolol", "ICH SBP &lt; 140; SAH SBP &lt; 160"],
          ["Hypertensive encephalopathy", "<strong>Nicardipine</strong>", ""],
          ["Acute hypertensive nephrosclerosis", "<strong>Fenoldopam</strong>", ""],
          ["Acute coronary syndrome", "<strong>Nitroglycerin</strong> or IV beta blocker (metoprolol, esmolol)", "Treat if SBP &gt; 160 or DBP &gt; 100"],
          ["Acute heart failure", "<strong>IV loop, then nitroglycerin</strong>", "SBP &lt; 140"],
          ["Aortic dissection", "<strong>Esmolol</strong> (HR &lt; 60 first) + <strong>nitroprusside</strong> + morphine", "SBP 100–120 within 20 min"],
          ["Cocaine, amphetamines, pheo, autonomic dysfunction", "<strong>Labetalol</strong>", ""],
          ["Preeclampsia / eclampsia", "<strong>Labetalol, hydralazine</strong>", "SBP &lt; 150, DBP 80–100"]
        ])),
      S("avoid", "What to avoid",
        Tbl(["Situation", "Avoid", "Why"], [
          ["Acute decompensated HFrEF", "Beta blockers, CCBs, hydralazine", "BB/CCB depress contractility; hydralazine raises cardiac work"],
          ["ICH / SAH", "Nitroprusside, hydralazine", "Nitroprusside raises ICP"],
          ["Cocaine / pheo", "Beta blocker alone", "Unopposed alpha vasoconstriction"],
          ["Aortic stenosis, HFrEF, HCM", "Nicardipine", "Contraindicated"],
          ["On sildenafil or tadalafil", "Nitroglycerin", "Severe hypotension"]
        ]) + "<p><strong>Hypertensive urgency</strong> (no organ damage): oral meds in the outpatient setting. Restart well-tolerated meds if non-adherent; new HTN can start 2 drugs (ACEI or ARB, CCB, thiazide). Lower to &lt; 160/100 over 2–4 hours (MAP down no more than 25–30%), then to goal over 1–2 weeks.</p>" +
        HY("Brain → nicardipine. Heart → nitroglycerin. Aorta → esmolol + nitroprusside. Kidney → fenoldopam. Pregnancy → labetalol/hydralazine. Cocaine → labetalol."))
    ], [
      Q("table", "Which IV drug is listed for acute hypertensive nephrosclerosis (decreased urine output)?", ["Fenoldopam", "Nitroglycerin", "Hydralazine", "Esmolol"], 0, "On the emergency algorithm, acute hypertensive nephrosclerosis → fenoldopam."),
      Q("table", "Aortic dissection: what is the immediate heart rate goal?", ["Under 60", "Under 100", "Under 120", "Heart rate does not matter"], 0, "Dissection: immediately HR < 60 (esmolol), then SBP 100-120."),
      Q("table", "Acute ischemic stroke, not a tPA candidate, BP 200/110. Treat now?", ["No: treat only if 220/120 or higher", "Yes: lower to 120/80 within an hour", "Yes: give nitroprusside", "Yes: give hydralazine"], 0, "For acute ischemic stroke, treat only if SBP ≥ 220 and DBP ≥ 120 (unless getting tPA: < 185/110)."),
      Q("table", "Before tPA for ischemic stroke, what BP is required?", ["Below 185/110", "Below 220/120", "Below 140/90", "Below 120/80"], 0, "For thrombolysis candidates, the goal is < 185/110 before reperfusion therapy."),
      Q("avoid", "Which drugs should be avoided in hypertensive emergency with acutely decompensated HFrEF?", ["Beta blockers, CCBs and hydralazine", "Loop diuretics and nitroglycerin", "Nitroglycerin only", "Loop diuretics only"], 0, "Avoid BBs and CCBs (depress contractility) and hydralazine (increases cardiac work)."),
      Q("table", "Preeclampsia with severe BP: which drugs?", ["Labetalol and hydralazine", "Lisinopril and losartan", "Nitroprusside and esmolol", "Clonidine and minoxidil"], 0, "Obstetric emergency: labetalol, hydralazine; goal SBP < 150, DBP 80-100."),
      Q("table", "In most hypertensive emergencies, how much should the MAP be lowered in the first hour?", ["No more than 10-20%", "50%", "To normal immediately", "Not at all"], 0, "Reduce the MAP no more than 10-20% over minutes to 1 hour, then another 5-15% over 23 hours."),
      Q("table", "What is the SBP goal in intracerebral hemorrhage on the algorithm?", ["Below 140", "Below 185", "Below 220", "Below 100"], 0, "Hemorrhagic stroke: SBP < 140; subarachnoid hemorrhage: SBP < 160."),
      Q("avoid", "Hypertensive urgency in clinic, no organ damage. Best approach?", ["Oral meds and outpatient follow-up", "Send to the ED for IV nitroprusside", "IV labetalol in clinic", "Admit to the ICU"], 0, "Urgency patients don't need the ER; lower BP with oral meds and close follow-up."),
      Q("table", "Which IV drug pair is preferred for hypertensive emergency with chest pain from ACS?", ["Nitroglycerin or an IV beta blocker", "Hydralazine or nicardipine", "Nitroprusside or fenoldopam", "Clonidine or labetalol"], 0, "ACS: nitroglycerin gtt or IV beta blockers (metoprolol, esmolol).")
    ]),

    Guide("guide-pregnancy", "Pregnancy: safe vs unsafe cardio drugs", "BP, lipid and cardiomyopathy drugs in pregnancy", ["Hypertensive Crisis", "Hypertension Part III", "Lipids & Dyslipidemia", "Cardiomyopathies"], [
      S("safe", "Use",
        Tbl(["Drug", "Comment"], [
          ["<strong>Labetalol</strong>", "Twice daily, well tolerated, good safety data; increasingly preferred over methyldopa"],
          ["<strong>Methyldopa</strong>", "Preferred on long-term follow-up safety data; 2–4x daily, anticholinergic-type side effects"],
          ["Nifedipine or diltiazem", "Once daily; less safety data, no increase in major teratogenicity"],
          ["Beta blockers", "Generally safe; growth restriction (IUGR) reported"],
          ["Hydralazine", "Severe BP in preeclampsia/eclampsia (with labetalol)"],
          ["Diuretics", "Not first line; probably safe at low dose"],
          ["Clonidine", "Limited data"],
          ["<strong>Bile acid sequestrants</strong>", "Lipid drug of choice in pregnancy"]
        ])),
      S("unsafe", "Avoid",
        Tbl(["Drug", "Why"], [
          ["<strong>ACE inhibitors, ARBs</strong>", "Fetal renal agenesis, fetal toxicity and death. Avoid in anyone who could become pregnant and while breastfeeding (peripartum cardiomyopathy)"],
          ["<strong>Statins</strong>", "Generally discontinue during pregnancy"]
        ]) + HY("Pregnant + HTN → labetalol (or methyldopa, nifedipine). Never an ACEI or ARB."))
    ], [
      Q("safe", "Which three drugs are most commonly used for hypertensive disorders in pregnancy?", ["Methyldopa, labetalol and diltiazem", "Lisinopril, losartan and HCTZ", "Clonidine, minoxidil and spironolactone", "Nitroprusside, esmolol and furosemide"], 0, "Methyldopa, labetalol and diltiazem are used most commonly during pregnancy."),
      Q("unsafe", "Why are ACE inhibitors and ARBs avoided in pregnancy?", ["Risk of fetal renal agenesis and toxicity", "They cause maternal hypoglycemia", "They are ineffective in pregnancy", "They cause neonatal bradycardia only"], 0, "Major teratogenicity (renal agenesis, fetal toxicity, death) has been reported."),
      Q("safe", "Which lipid drug is preferred during pregnancy?", ["Cholestyramine", "Rosuvastatin", "Niacin", "Gemfibrozil"], 0, "Bile acid sequestrants are the medication of choice for dyslipidemia in pregnancy; statins are generally stopped."),
      Q("safe", "Which side effect has been reported with beta blockers in pregnancy?", ["Intrauterine growth restriction", "Renal agenesis", "Neural tube defects", "Cleft palate"], 0, "Beta blockers are generally safe, but IUGR has been reported."),
      Q("unsafe", "A woman with peripartum cardiomyopathy is breastfeeding. Which HF drugs should she avoid?", ["ACE inhibitors and ARBs", "Beta blockers", "Loop diuretics", "Hydralazine"], 0, "PPCM treatment is like dilated CM, but avoid ACEI/ARBs in pregnancy and breastfeeding."),
      Q("safe", "Which statement about diuretics in pregnancy is correct?", ["Not first line, probably safe in low doses", "First line for preeclampsia", "Absolutely contraindicated", "Only loops are allowed"], 0, "Diuretics are not first-line in pregnancy but are probably safe at low doses.")
    ]),

    Guide("guide-hcm", "Hypertrophic cardiomyopathy: use vs avoid", "The drugs that help and the drugs that worsen LVOT obstruction", ["Cardiomyopathies"], [
      S("use", "Use",
        Tbl(["Problem", "Drug"], [
          ["HF symptoms or angina from LVOT obstruction", "<strong>Beta blocker</strong> (metoprolol) first"],
          ["Beta blocker contraindicated (asthma) or not tolerated", "<strong>Non-DHP CCB</strong> (verapamil, diltiazem)"],
          ["Still symptomatic on one drug", "BB + non-DHP CCB combo (more bradycardia), then septal myectomy or alcohol septal ablation"],
          ["Atrial fibrillation", "<strong>Oral anticoagulation</strong> (warfarin or DOAC)"],
          ["High risk of sudden cardiac death", "ICD (not a drug, but the only effective prevention)"]
        ]) + "<p>Slower heart rate and less forceful contraction give the thick ventricle more time to fill, which widens the outflow tract.</p>"),
      S("avoid", "Avoid",
        Tbl(["Class", "Examples", "Why it hurts"], [
          ["Positive inotropes", "Dopamine, dobutamine, digoxin", "Stronger squeeze narrows the outflow tract"],
          ["Vasodilators", "DHP CCBs (nifedipine, amlodipine), ACEI/ARB (lisinopril, losartan), nitrates (nitroglycerin)", "Lower afterload/preload → smaller LV → more obstruction"],
          ["Diuretics", "Furosemide", "Lower preload → smaller LV → more obstruction"],
          ["IV nicardipine", "", "Contraindicated in HCM"]
        ]) + Mn("HCM avoid list", "“Don't squeeze, dilate or drain”: no inotropes, no vasodilators, no diuretics"))
    ], [
      Q("use", "First-line drug for exertional dyspnea from LVOT obstruction in HCM?", ["Metoprolol", "Furosemide", "Lisinopril", "Nitroglycerin"], 0, "A beta blocker such as metoprolol is first line."),
      Q("avoid", "Which drug worsens obstruction in HCM?", ["Nitroglycerin", "Metoprolol", "Verapamil", "Diltiazem"], 0, "Vasodilators such as nitrates worsen LVOT obstruction."),
      Q("use", "An HCM patient feels too sluggish on metoprolol. Alternative?", ["Verapamil or diltiazem", "Amlodipine", "Losartan", "Digoxin"], 0, "Non-DHP CCBs are used if BBs are contraindicated or not tolerated."),
      Q("avoid", "Why do diuretics worsen HCM obstruction?", ["Lower preload makes the LV cavity smaller", "They raise heart rate", "They cause hyperkalemia", "They thicken the septum"], 0, "Less preload means a smaller LV, which narrows the outflow tract further."),
      Q("use", "HCM with atrial fibrillation: which therapy is required to prevent stroke?", ["Oral anticoagulation with warfarin or a DOAC", "Aspirin alone", "Digoxin", "No therapy"], 0, "HCM with AFib has high thromboembolic risk: warfarin or DOAC."),
      Q("avoid", "Which of these is SAFE in obstructive HCM?", ["Diltiazem", "Dobutamine", "Amlodipine", "Losartan"], 0, "Non-DHP CCBs are a treatment; inotropes, DHP CCBs and ARBs worsen obstruction.")
    ]),

    Guide("guide-drugs-raise-bp", "Drugs and substances that raise BP", "Secondary causes of hypertension from medications and substances", ["Hypertension Part I", "Hypertension Part II", "Hypertensive Crisis"], [
      S("list", "The list",
        Tbl(["Group", "Examples"], [
          ["Prescription", "<strong>NSAIDs</strong> and COX-2 inhibitors (BP up ~5 mmHg), SNRIs and tricyclics, carbamazepine, metoclopramide, migraine meds, high-dose estrogen/OCs, <strong>pseudoephedrine</strong>/ephedra"],
          ["Situations", "<strong>Abrupt stop of a beta blocker or clonidine</strong>; beta blocker without alpha blocker in cocaine or pheo; MAOIs"],
          ["Food", "Sodium, <strong>alcohol</strong> (common and hard to treat), <strong>black licorice</strong> (lowers K, raises BP)"],
          ["Illicit / other", "<strong>Cocaine</strong> (and withdrawal), methamphetamine, methylphenidate, anabolic steroids, PCP, nicotine and narcotic withdrawal, herbal ecstasy"]
        ]) + HY("Always ask about OTC NSAIDs, decongestants, birth control, alcohol and stimulants in new or resistant HTN."))
    ], [
      Q("list", "A patient's BP rose after starting ibuprofen daily for knee pain. About how much do NSAIDs raise BP?", ["About 5 mmHg", "About 40 mmHg", "They lower BP", "No effect"], 0, "NSAIDs increase BP by an average of 5 mmHg and are best avoided with borderline or elevated BP."),
      Q("list", "Which food substance lowers potassium and raises BP?", ["Black licorice", "Grapefruit", "Bananas", "Dark chocolate"], 0, "Black licorice/licorice root contains a chemical that lowers K+ and raises BP."),
      Q("list", "Which OTC cold medicine ingredient can raise BP?", ["Pseudoephedrine", "Dextromethorphan", "Guaifenesin", "Acetaminophen"], 0, "Ephedra/pseudoephedrine are on the drug-induced HTN list."),
      Q("list", "Which drug situation can trigger hypertensive crisis?", ["Abrupt discontinuation of clonidine or a beta blocker", "Starting amlodipine", "Taking lisinopril with food", "Lowering salt intake"], 0, "Abrupt cessation of a BB or clonidine causes rebound HTN."),
      Q("list", "Which psychiatric drug classes can raise BP?", ["SNRIs and tricyclic antidepressants", "SSRIs only", "Benzodiazepines", "Lithium"], 0, "Psych meds on the list: SNRIs and tricyclic antidepressants.")
    ]),

    Guide("guide-overdose", "Overdoses & antidotes", "Beta blocker, CCB, clonidine and nitrate toxicities", ["Hypertension Part III", "Hypertensive Crisis"], [
      S("table", "Toxicity table",
        Tbl(["Toxicity", "Clues", "Treatment"], [
          ["<strong>Beta blocker</strong>", "Hypotension, bradycardia, confusion, <strong>hyperkalemia, hypoglycemia</strong>, cardiogenic shock; seizures/delirium with propranolol or carvedilol", "IV fluids, atropine, IV calcium, <strong>IV glucagon</strong>, pressors, high-dose insulin + glucose, lipid emulsion"],
          ["<strong>Calcium channel blocker</strong>", "Hypotension, bradycardia, PR prolongation (even DHPs), <strong>hyperglycemia</strong>; alert until sudden neuro decline", "IV fluids, atropine, activated charcoal, <strong>IV calcium</strong>, glucagon, norepinephrine, high-dose insulin"],
          ["<strong>Clonidine</strong>", "Looks like opioid OD: pinpoint pupils, coma, respiratory depression, hypotension, <strong>hypothermia</strong>", "<strong>Naloxone</strong>, IV fluids, atropine, pacing, pressors"],
          ["<strong>Nitroprusside cyanide</strong>", "Worse with renal/liver disease", "<strong>Sodium thiosulfate</strong>"],
          ["<strong>Methemoglobinemia</strong> (nitroprusside, nitroglycerin)", "Cyanosis and hypoxia despite high-flow O2", "<strong>Methylene blue</strong>"]
        ]) + HY("Glucose tells them apart: beta blocker OD → LOW glucose; CCB OD → HIGH glucose."))
    ], [
      Q("table", "A patient overdosed on a heart pill and has HR 40, BP 70/40, and glucose 290. Which drug was most likely taken?", ["Calcium channel blocker", "Beta blocker", "Clonidine", "Hydralazine"], 0, "CCB overdose causes hyperglycemia (insulin release blocked); BB overdose causes hypoglycemia."),
      Q("table", "A patient has bradycardia, hypotension, hypoglycemia and hyperkalemia after an overdose. Likely drug?", ["Beta blocker", "Calcium channel blocker", "Nitroprusside", "Minoxidil"], 0, "BB overdose: hypotension, bradyarrhythmia, confusion, hyperkalemia, hypoglycemia."),
      Q("table", "Pinpoint pupils, coma, slow breathing, hypotension and hypothermia after taking a BP pill. Antidote?", ["Naloxone", "Glucagon", "Methylene blue", "Sodium thiosulfate"], 0, "Clonidine overdose looks like an opioid overdose and is treated with naloxone."),
      Q("table", "What reverses nitroprusside cyanide toxicity?", ["Sodium thiosulfate", "Methylene blue", "Naloxone", "Vitamin K"], 0, "Cyanide toxicity from nitroprusside is treated with sodium thiosulfate."),
      Q("table", "What reverses methemoglobinemia from nitrates?", ["Methylene blue", "Sodium thiosulfate", "Atropine", "Calcium gluconate"], 0, "Methemoglobinemia is treated with methylene blue."),
      Q("table", "In beta blocker overdose, which IV drug augments cardiac contractility?", ["Glucagon", "Naloxone", "Flumazenil", "Magnesium"], 0, "IV glucagon augments contractility in BB overdose; IV calcium increases heart rate."),
      Q("table", "Why must a CCB overdose patient who is talking normally be rechecked often?", ["Mental status can drop suddenly once cerebral perfusion fails", "They will develop delayed angioedema", "They will become hypoglycemic", "Their pupils will become pinpoint"], 0, "CCB-poisoned patients may stay clear despite hypotension, but neurologic status can deteriorate precipitously.")
    ])
  ]);
}());
