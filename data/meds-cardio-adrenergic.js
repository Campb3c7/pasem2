/*
  Medications: Beta & alpha blockers (Cardio Part 1). Source:
  hypertension-part-3.md slides 73-89, hypertensive-crisis.md slides 43-54,
  cardiomyopathies.md, valvular-disease.md. Esmolol lives with the
  hypertensive emergency drugs. Only append questions (ids "<med id>|<index>").
*/
(function () {
  "use strict";
  var H = window.DiseaseContent, M = window.MedContent;
  var Tbl = H.Tbl, HY = H.HY, Mn = H.Mn, Q = H.Q, L = H.L, Med = M.Med, ul = M.ul;

  var types = Tbl(["Type", "Drugs", "Use"], [
    ["Cardioselective (β1)", "Metoprolol, atenolol, bisoprolol (esmolol IV)", "Cardiac indications, tachyarrhythmias"],
    ["Non-selective (β1 + β2)", "Propranolol, nadolol, timolol", "Migraine, tremor, anxiety, portal HTN, thyrotoxicosis"],
    ["Intrinsic sympathomimetic (ISA)", "Acebutolol", "Niche: bradycardic patient needing a BB"],
    ["Mixed α1 + β", "Carvedilol, labetalol", "HFrEF (carvedilol); pregnancy and emergencies (labetalol)"]
  ]);

  window.CARDIO_MEDS_ADRENERGIC = L("meds-adrenergic", "Beta & alpha blockers", [

    Med("med-cardioselective-bb", "Beta blockers (cardioselective)", "Metoprolol succinate (Toprol XL, daily) and tartrate (Lopressor, BID), atenolol, bisoprolol", ["Hypertension Part III", "Hypertensive Crisis", "Cardiomyopathies", "Valvular Disease"], {
      uses: ul([
        "<strong>Not first line for plain hypertension</strong>: they have not been shown to reduce stroke or mortality from HTN.",
        "Compelling indications: <strong>post-MI</strong> (first line after STEMI/NSTEMI), <strong>HFrEF</strong> and any LV dysfunction (EF &lt; 50%), <strong>CAD</strong>, <strong>AFib</strong>.",
        "Tachyarrhythmias such as AFib and sinus tachycardia.",
        "<strong>Hypertrophic cardiomyopathy</strong>: first line for HF symptoms or angina from LVOT obstruction (metoprolol).",
        "Cardiomyopathy rate control, dilated cardiomyopathy, myocarditis (ongoing).",
        "Hypertensive emergency with <strong>ACS</strong> (IV metoprolol or esmolol)."
      ]),
      moa: "<p>Block cardiac <strong>β1</strong> receptors, blunting epinephrine and norepinephrine: <strong>lower heart rate, contractility and renin release</strong>, so less myocardial oxygen demand. At higher doses they also block β2 in the lungs: <strong>selectivity is lost at high doses</strong>.</p>" + types,
      avoid: ul([
        "<strong>Bradyarrhythmia or heart block</strong>: stop the drug if it develops.",
        "<strong>Acutely decompensated HFrEF</strong> (depresses contractility). Start low and titrate slowly in stable HFrEF.",
        "<strong>Cocaine, methamphetamine or pheochromocytoma</strong>: never a beta blocker alone (unopposed alpha vasoconstriction). Use labetalol.",
        "<strong>Asthma/COPD</strong>: use caution regardless of selectivity.",
        "<strong>Diabetes</strong>: not recommended for HTN unless there is a compelling indication.",
        "Use with caution over age 60 without a compelling indication."
      ]),
      se: ul([
        "Bradycardia and heart block.",
        "<strong>Fatigue</strong> and reduced exercise tolerance.",
        "<strong>Impotence</strong> (reduced sexual function in men).",
        "<strong>Masks hypoglycemia</strong> (no tremor, sweating or tachycardia) and lowers insulin release (worse glucose)."
      ]),
      pearls: ul([
        "<strong>Never stop abruptly</strong>: rebound HTN, worsening angina or MI. Wean over 1–2 weeks. Abrupt BB withdrawal is a cause of hypertensive crisis.",
        "Less effective for HTN in Black patients, but compelling indications trump race: a Black patient with prior MI or HF still gets a BB.",
        "<strong>Overdose</strong>: hypotension, bradycardia, confusion, hyperkalemia, hypoglycemia, cardiogenic shock. Treat with IV fluids and atropine, then IV calcium, IV <strong>glucagon</strong>, pressors, high-dose insulin + glucose, lipid emulsion."
      ]) + HY("Compelling indications beat everything: post-MI, HFrEF, CAD, AFib → beta blocker, whatever the race.")
    }, [
      Q("uses", "A 55-year-old with uncomplicated stage 1 hypertension and no comorbidities asks for metoprolol. Why is it not first line?", ["Beta blockers have not been shown to reduce stroke or mortality from HTN", "Metoprolol is contraindicated in hypertension", "It causes hyperkalemia", "It is too weak to lower BP"], 0, "BBs are not first line for HTN unless there is a compelling cardiac indication; they have not been shown to reduce HTN stroke or mortality."),
      Q("uses", "A Black patient has HTN and had an NSTEMI last month. Which drug should be part of the regimen?", ["Beta blocker plus ACEI or ARB", "Thiazide alone because of race", "Non-DHP CCB alone", "Alpha-1 blocker"], 0, "Post-MI is a compelling indication for BB + ACEI/ARB. Compelling indications trump race."),
      Q("se", "Why can beta blockers be dangerous for a diabetic on insulin?", ["They mask the warning signs of hypoglycemia", "They cause severe hyperkalemia in diabetics", "They block insulin absorption", "They increase insulin release"], 0, "BBs block the tremor, sweating and tachycardia of hypoglycemia, and also lower insulin release."),
      Q("pearls", "A patient stops his metoprolol abruptly before a trip. What is the main risk?", ["Rebound hypertension, angina or MI", "Hypokalemia", "Angioedema", "Bradycardia"], 0, "Abrupt BB withdrawal can cause rebound HTN, worsening angina or MI; wean over 1-2 weeks."),
      Q("avoid", "A tachycardic, hypertensive patient after cocaine use is in the ED. Why not give metoprolol alone?", ["Unopposed alpha stimulation would raise BP further", "Metoprolol worsens cocaine-induced hyperkalemia", "Metoprolol causes reflex tachycardia", "It would cause angioedema"], 0, "Blocking beta alone leaves catecholamines on alpha receptors: unopposed vasoconstriction. Use labetalol (alpha + beta)."),
      Q("moa", "What happens to beta-1 selectivity at higher doses of metoprolol?", ["It is lost, so beta-2 in the lungs is also blocked", "It increases", "It changes to alpha blockade", "Nothing; selectivity is fixed"], 0, "Cardioselectivity is lost at higher doses; use caution in asthma/COPD regardless."),
      Q("uses", "Which drug is first line for HF symptoms or angina caused by LVOT obstruction in HCM?", ["Beta blocker such as metoprolol", "Nifedipine", "Furosemide", "Lisinopril"], 0, "BBs are first line in obstructive HCM; non-DHP CCBs are the alternative."),
      Q("pearls", "Which IV medication augments cardiac contractility in a beta blocker overdose?", ["Glucagon", "Naloxone", "Methylene blue", "Sodium thiosulfate"], 0, "BB overdose: IV fluids, atropine, IV calcium, IV glucagon, pressors, high-dose insulin + glucose, lipid emulsion."),
      Q("pearls", "How do metoprolol succinate and metoprolol tartrate differ?", ["Succinate (Toprol XL) is once daily; tartrate (Lopressor) is twice daily", "Tartrate is the IV form only", "Succinate is non-selective", "Tartrate is used only for migraine"], 0, "Metoprolol succinate is long-acting once-daily; tartrate is dosed twice daily."),
      Q("avoid", "A patient on atenolol develops new second-degree AV block. What should you do?", ["Discontinue the beta blocker", "Double the dose", "Add verapamil", "Continue and recheck in a year"], 0, "If a bradyarrhythmia or heart block develops on a BB, the drug should be stopped."),
      Q("pearls", "How should a beta blocker be started in a patient with stable HFrEF?", ["Low dose and titrate up slowly", "Full dose immediately", "Only IV", "Never; BBs are contraindicated in HFrEF"], 0, "BBs depress contractility and HR, so start low and titrate cautiously in LV dysfunction.")
    ]),

    Med("med-nonselective-bb", "Beta blockers (non-selective & ISA)", "Propranolol (Inderal), nadolol (Corgard), timolol; ISA: acebutolol (Sectral)", ["Hypertension Part III", "Valvular Disease"], {
      uses: ul([
        "Usually <strong>not used for hypertension</strong>.",
        "<strong>Migraine prophylaxis, anxiety, essential tremor, portal hypertension, thyrotoxicosis</strong>.",
        "<strong>Mitral valve prolapse</strong> with palpitations: propranolol (and avoid stimulants).",
        "ISA (acebutolol): niche use, possibly a bradycardic patient who needs a BB."
      ]),
      moa: "<p>Non-selective drugs block <strong>β1 and β2 at all doses</strong>. β2 blockade can cause bronchospasm.</p><p><strong>ISA</strong> drugs are partial β agonists: they do <strong>not lower resting heart rate or cardiac output</strong> and are less cardioprotective.</p>",
      avoid: ul([
        "<strong>Asthma and COPD</strong> (β2 blockade → bronchoconstriction).",
        "ISA drugs are <strong>contraindicated post-MI</strong> and in high-risk patients.",
        "Same class cautions as all BBs: heart block, decompensated HF, cocaine/pheo without alpha blockade, abrupt withdrawal."
      ]),
      se: ul([
        "Bronchospasm.",
        "Fatigue, impotence, bradycardia, masked hypoglycemia (class effects).",
        "<strong>Propranolol</strong> is very lipophilic: in overdose it crosses the blood-brain barrier and causes <strong>seizures and delirium</strong>."
      ]),
      pearls: ul([
        "Propranolol and carvedilol are the most lipophilic BBs → most neurotoxic in overdose. Lipid emulsion is one treatment.",
        "Acebutolol is the ISA example."
      ]) + Mn("Non-selective uses", "“Propranolol calms the MAPT”: Migraine, Anxiety, Portal HTN, Tremor (plus Thyrotoxicosis)")
    }, [
      Q("uses", "Which is a typical use of propranolol rather than metoprolol?", ["Essential tremor or migraine prophylaxis", "First-line HTN in diabetes", "Post-MI in a patient with asthma", "Proteinuric CKD"], 0, "Non-selective BBs are used for migraine, anxiety, essential tremor, portal HTN and thyrotoxicosis."),
      Q("avoid", "A patient with moderate persistent asthma needs a beta blocker. Which type is worst?", ["Non-selective, such as propranolol", "Cardioselective, such as bisoprolol", "Esmolol at low dose", "All beta blockers are equally safe"], 0, "Non-selective BBs block β2 at all doses and cause bronchoconstriction. Use caution with any BB."),
      Q("moa", "What makes acebutolol different from metoprolol?", ["It is a partial agonist (ISA) that does not lower resting HR", "It is non-selective", "It also blocks alpha-1", "It is IV only"], 0, "ISA BBs are partial agonists that don't reduce resting HR or CO."),
      Q("avoid", "In which patients are ISA beta blockers contraindicated?", ["Post-MI and high-risk patients", "Patients with bradycardia", "Patients with migraine", "Patients with essential tremor"], 0, "ISAs are not as cardioprotective and are contraindicated post-MI or in high-risk patients."),
      Q("uses", "A young woman with mitral valve prolapse has bothersome palpitations. What is the usual drug?", ["Propranolol, and avoid stimulants", "Warfarin", "Amoxicillin prophylaxis", "Furosemide"], 0, "Symptomatic MVP with palpitations: beta blockers such as propranolol, and avoid stimulants."),
      Q("se", "A patient overdoses on propranolol and has a seizure. Why is propranolol especially neurotoxic?", ["It is highly lipophilic and crosses the blood-brain barrier", "It is a partial agonist", "It blocks GABA receptors", "It causes hyponatremia"], 0, "Propranolol and carvedilol are the most lipophilic BBs, causing seizures and delirium in overdose."),
      Q("moa", "At what doses does propranolol block beta-2 receptors?", ["At all doses", "Only at very high doses", "Never", "Only when given IV"], 0, "Non-selective BBs inhibit both β1 and β2 at all doses.")
    ]),

    Med("med-carvedilol", "Carvedilol (Coreg)", "Mixed α1 + β blocker with mortality benefit in HFrEF", ["Hypertension Part III"], {
      uses: ul([
        "<strong>HFrEF / systolic dysfunction</strong>: shown to <strong>reduce mortality</strong>; frequently used for BP in HFrEF patients.",
        "Later-line alternative for hypertension."
      ]),
      moa: "<p>Blocks <strong>β receptors</strong> (lower HR and oxygen demand) and <strong>α1 receptors</strong> (peripheral vasodilation).</p>",
      avoid: ul([
        "Same beta-blocker cautions: bradycardia/heart block, acutely decompensated HF, asthma, abrupt stopping.",
        "Patients prone to orthostatic hypotension (elderly, falls)."
      ]),
      se: ul([
        "<strong>Orthostatic hypotension</strong>: lowers standing BP more than supine BP, so more orthostasis than a plain BB.",
        "Class BB effects: fatigue, bradycardia, impotence."
      ]),
      pearls: ul([
        "Less effect on glucose metabolism than a straight beta blocker.",
        "Very lipophilic (like propranolol): more neurotoxicity in overdose."
      ]) + HY("Carvedilol = the HFrEF beta blocker with alpha-1 blockade → watch for orthostasis.")
    }, [
      Q("uses", "Which mixed alpha/beta blocker has shown a mortality benefit in HFrEF?", ["Carvedilol", "Labetalol", "Atenolol", "Acebutolol"], 0, "Carvedilol reduces mortality in systolic dysfunction/HFrEF."),
      Q("se", "Why does carvedilol cause more orthostatic hypotension than metoprolol?", ["Its alpha-1 blockade lowers standing BP more than supine BP", "It is a stronger diuretic", "It blocks the AV node more", "It raises bradykinin"], 0, "The added α1 blockade lowers standing BP more, so orthostasis is more common than with a BB alone."),
      Q("pearls", "How does carvedilol compare with a straight beta blocker on glucose metabolism?", ["Less effect on glucose metabolism", "Much worse glucose control", "It causes hypoglycemia directly", "No difference"], 0, "Carvedilol is considered to have less effect on glucose metabolism than a straight BB."),
      Q("moa", "Which receptors does carvedilol block?", ["Beta and alpha-1", "Beta-1 only", "Alpha-2 only", "Beta-2 only"], 0, "Carvedilol is a mixed α1- and β-blocker."),
      Q("se", "An 80-year-old started on carvedilol feels dizzy every time she stands up. Most likely cause?", ["Orthostatic hypotension from alpha-1 blockade", "Hypoglycemia", "Hyperkalemia", "Ototoxicity"], 0, "Mixed α1/β blockers cause more orthostatic hypotension than BBs alone."),
      Q("pearls", "Which two beta blockers are most lipophilic and most neurotoxic in overdose?", ["Propranolol and carvedilol", "Atenolol and metoprolol", "Esmolol and bisoprolol", "Nadolol and acebutolol"], 0, "Propranolol and carvedilol cross the blood-brain barrier easily, causing seizures and delirium in overdose.")
    ]),

    Med("med-labetalol", "Labetalol (Trandate)", "Mixed α1 + β blocker; PO and IV; the pregnancy and emergency workhorse", ["Hypertension Part III", "Hypertensive Crisis"], {
      uses: ul([
        "<strong>Pregnancy</strong>: preferred, lots of experience, safe; twice daily and well tolerated. Increasingly preferred over methyldopa.",
        "<strong>Preeclampsia/eclampsia</strong> severe BP (with hydralazine).",
        "IV for <strong>most hypertensive emergencies except acute heart failure</strong>; IV prn when patients can't take their oral BB.",
        "<strong>Sympathetic overactivity</strong> (cocaine, amphetamines, pheochromocytoma, autonomic dysfunction): blocks alpha and beta together.",
        "<strong>Acute ischemic stroke</strong> (with nicardipine); alternative for ICH/SAH; aortic dissection (BB component).",
        "Oral BP control."
      ]),
      moa: "<p>Blocks <strong>β receptors</strong> (lower HR) and <strong>α1 receptors</strong> (vasodilation) at the same time, so there is no unopposed alpha effect.</p>",
      avoid: ul([
        "<strong>Acute (decompensated) heart failure</strong>.",
        "Heart block, bronchospasm (asthma)."
      ]),
      se: ul([
        "<strong>Scalp tingling</strong> (classic), vomiting, nausea, dizziness.",
        "Bronchoconstriction, heart block.",
        "Orthostatic hypotension."
      ]),
      pearls: ul([
        "IV: bolus every 10 minutes or a continuous infusion.",
        "When the question says cocaine or pheo plus severe HTN: think labetalol, never a plain beta blocker."
      ]) + HY("Labetalol: pregnancy, preeclampsia, stroke, cocaine/pheo. Not in acute heart failure.")
    }, [
      Q("uses", "A 30-week pregnant woman has chronic hypertension needing medication. Which is increasingly preferred because of fewer side effects?", ["Labetalol", "Lisinopril", "Losartan", "Spironolactone"], 0, "Labetalol is well tolerated with good safety data and is increasingly preferred over methyldopa."),
      Q("uses", "A patient with suspected pheochromocytoma has BP 230/130 and HR 135. Which IV drug fits best?", ["Labetalol", "Esmolol alone", "Metoprolol alone", "Furosemide"], 0, "In sympathetic overactivity, block alpha and beta together with labetalol; a BB alone causes unopposed alpha vasoconstriction."),
      Q("avoid", "In which hypertensive emergency should labetalol be avoided?", ["Acute decompensated heart failure", "Acute ischemic stroke", "Preeclampsia", "Cocaine toxicity"], 0, "Labetalol is used for most HTN emergencies except acute heart failure (BBs depress contractility)."),
      Q("se", "Which side effect is classically associated with IV labetalol?", ["Scalp tingling", "Cyanide toxicity", "Hirsutism", "Dry cough"], 0, "Labetalol AEs: vomiting, scalp tingling, bronchoconstriction, dizziness, nausea, heart block, orthostatic hypotension."),
      Q("uses", "Which two drugs are preferred for acute ischemic stroke when BP needs lowering?", ["Labetalol and nicardipine", "Nitroprusside and hydralazine", "Esmolol and nitroglycerin", "Clonidine and captopril"], 0, "For acute ischemic stroke, the preferred meds are labetalol and nicardipine."),
      Q("uses", "Which pair is used for severe BP in preeclampsia or eclampsia?", ["Labetalol and hydralazine", "Lisinopril and furosemide", "Nitroprusside and esmolol", "Losartan and amlodipine"], 0, "Obstetric hypertensive emergency (preeclampsia/eclampsia): labetalol, hydralazine."),
      Q("moa", "Why is labetalol safe in cocaine-induced hypertension when metoprolol alone is not?", ["It blocks alpha-1 and beta receptors at the same time", "It is a stronger beta-1 blocker", "It stimulates central alpha-2 receptors", "It blocks dopamine receptors"], 0, "Blocking both prevents unopposed alpha-adrenergic vasoconstriction."),
      Q("uses", "A hospitalized patient is NPO and can't take their oral beta blocker. BP is high. What is commonly used?", ["IV labetalol prn", "Sublingual nifedipine", "Oral clonidine", "IV furosemide"], 0, "Labetalol is frequently given IV prn to control BP or when patients cannot take their oral BB.")
    ]),

    Med("med-alpha1-blockers", "Alpha-1 blockers", "Doxazosin (Cardura), terazosin (Hytrin), prazosin (Minipress)", ["Hypertension Part III"], {
      uses: ul([
        "Hypertension <strong>with BPH</strong>: treats both.",
        "<strong>Not appropriate monotherapy</strong> for HTN; later-line or 4th drug in resistant HTN."
      ]),
      moa: "<p>Block <strong>α1 receptors</strong> on veins and arteries (vasodilation → lower BP) and on the <strong>prostate</strong> (easier urine flow).</p>",
      avoid: ul([
        "Elderly patients prone to orthostasis and falls.",
        "Not as a single agent for HTN."
      ]),
      se: ul([
        "<strong>Orthostatic hypotension</strong>, especially in older patients.",
        "<strong>First-dose phenomenon</strong>: dizziness, faintness, palpitations or syncope 1–3 hours after the first dose.",
        "Edema (a diuretic may be added, watching for worse orthostasis)."
      ]),
      pearls: ul([
        "<strong>Dose at bedtime</strong> to limit orthostasis.",
        "The “-zosin” suffix = alpha-1 blocker."
      ]) + HY("Old man with HTN + BPH → “-zosin” at bedtime. Warn about first-dose syncope.")
    }, [
      Q("uses", "A 68-year-old man has hypertension and BPH with weak stream. Which add-on treats both?", ["Doxazosin", "Clonidine", "Hydralazine", "Spironolactone"], 0, "Alpha-1 blockers lower BP and relax prostate smooth muscle; good when both HTN and BPH need treatment."),
      Q("se", "A patient faints 2 hours after his first dose of terazosin. What is this?", ["First-dose phenomenon", "Rebound hypertension", "Angioedema", "Clonidine withdrawal"], 0, "First-dose phenomenon: dizziness, faintness, palpitations or syncope 1-3 hours after the first dose."),
      Q("pearls", "When should alpha-1 blockers be dosed?", ["At bedtime", "In the morning", "With every meal", "Only as needed"], 0, "Bedtime dosing limits the effect of orthostasis."),
      Q("uses", "Are alpha-1 blockers appropriate as monotherapy for hypertension?", ["No: they are add-ons, often for patients with BPH", "Yes: they are first line", "Yes, in Black patients", "Only in pregnancy"], 0, "Alpha-1 blockers are not appropriate monotherapy but are useful when HTN and BPH coexist."),
      Q("moa", "How do alpha-1 blockers improve urine flow?", ["They block alpha-1 receptors in the prostate", "They shrink the prostate by blocking DHT", "They increase bladder contraction", "They act as diuretics"], 0, "Blocking prostate α1 receptors relaxes smooth muscle and allows easier urine flow."),
      Q("se", "Which side effect of alpha-1 blockers is most dangerous for an elderly patient?", ["Orthostatic hypotension leading to falls", "Hyperkalemia", "Gynecomastia", "Constipation"], 0, "Orthostatic hypotension, especially in older patients, is the key risk.")
    ])
  ]);
}());
