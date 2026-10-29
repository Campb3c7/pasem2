/*
  Medications: Central alpha-2 agonists & direct vasodilators (Cardio Part 1).
  Source: hypertension-part-3.md slides 90-95, hypertensive-crisis.md slides
  36, 44, 48, 53-55. Only append questions (ids are "<med id>|<index>").
*/
(function () {
  "use strict";
  var H = window.DiseaseContent, M = window.MedContent;
  var Tbl = H.Tbl, HY = H.HY, Mn = H.Mn, Q = H.Q, L = H.L, Med = M.Med, ul = M.ul;

  window.CARDIO_MEDS_VASODILATORS = L("meds-central-vasodilators", "Central agents & direct vasodilators", [

    Med("med-clonidine", "Clonidine (and guanfacine)", "Central α2 agonists: clonidine (Catapres) PO or weekly patch, guanfacine (Tenex)", ["Hypertension Part III", "Hypertensive Crisis"], {
      uses: ul([
        "<strong>ESRD with severe HTN</strong>: safe in renal failure and fairly strong.",
        "<strong>Alcohol withdrawal</strong>: counteracts the high sympathetic tone.",
        "Resistant HTN (4th drug) and later-line HTN.",
        "Pregnancy: limited data."
      ]),
      moa: "<p>Stimulates <strong>α2 receptors in the brain</strong>: <strong>less sympathetic outflow</strong> from the CNS and more vagal tone. Peripheral presynaptic α2 stimulation lowers sympathetic tone further.</p>",
      avoid: ul([
        "<strong>Poor adherence</strong>: missed doses cause rebound HTN. Dosing is PO twice to three times daily, or a once-weekly patch ($$$).",
        "Bradycardia, orthostatic hypotension."
      ]),
      se: ul([
        "<strong>Rebound hypertension with abrupt stopping</strong>: a significant risk and a cause of hypertensive crisis.",
        "Orthostatic hypotension, bradycardia.",
        "<strong>Dizziness, drowsiness</strong>, headache, fatigue.",
        "Dry mouth, constipation, flushing, abdominal pain (slow gut).",
        "Sodium and water retention → edema."
      ]),
      pearls: Tbl(["Clonidine overdose", ""], [
        ["Looks like", "<strong>Opioid overdose</strong>: pinpoint pupils, depressed consciousness, hypotension, respiratory depression, coma"],
        ["Also", "<strong>Hypothermia</strong>; tablets cause symptoms within 1 hour (patch may be later)"],
        ["Treatment", "<strong>Naloxone</strong>, IV fluids, atropine, pacing, vasopressors"]
      ]) + HY("Clonidine: never stop it suddenly (rebound HTN). Overdose = fake opioid overdose → naloxone.")
    }, [
      Q("se", "A patient runs out of clonidine for 2 days and presents with BP 220/124 and headache. Why?", ["Rebound hypertension from abrupt clonidine withdrawal", "Clonidine toxicity", "Serotonin syndrome", "Hypokalemia"], 0, "Abrupt discontinuation of clonidine causes rebound HTN and can precipitate hypertensive crisis."),
      Q("pearls", "A toddler ate a clonidine patch and has pinpoint pupils, slow breathing, hypotension and low temperature. First-line antidote?", ["Naloxone", "Flumazenil", "Glucagon", "Methylene blue"], 0, "Clonidine overdose mimics opioid overdose and is treated with naloxone, IV fluids, atropine, pacing and pressors."),
      Q("uses", "Which central agent is used in ESRD patients with severe HTN?", ["Clonidine", "Methyldopa", "Spironolactone", "Lisinopril"], 0, "Clonidine is safe in renal failure and fairly strong, so it is used in ESRD with severe HTN."),
      Q("uses", "Besides blood pressure, which condition can clonidine treat?", ["Alcohol withdrawal", "Gout", "Hypothyroidism", "Asthma"], 0, "Clonidine directly counteracts withdrawal symptoms driven by increased sympathetic CNS tone."),
      Q("moa", "How does clonidine lower blood pressure?", ["It stimulates central alpha-2 receptors and reduces sympathetic outflow", "It blocks peripheral alpha-1 receptors", "It blocks beta-1 receptors", "It directly relaxes arterial smooth muscle"], 0, "Central α2 stimulation reduces CNS sympathetic outflow and increases vagal tone."),
      Q("se", "Which side effects are typical of clonidine?", ["Drowsiness, dry mouth and constipation", "Cough and angioedema", "Hirsutism and lupus", "Gynecomastia and hyperkalemia"], 0, "Clonidine causes dizziness, drowsiness, fatigue, dry mouth, constipation, bradycardia and orthostasis."),
      Q("avoid", "Why is clonidine a poor choice for a patient who often misses doses?", ["Missed doses can cause rebound hypertension", "It is only available IV", "It must be taken with food", "It causes hypoglycemia if doses are missed"], 0, "Clonidine requires BID-TID dosing and missed doses risk rebound HTN."),
      Q("pearls", "Which clonidine form allows once-weekly dosing?", ["Transdermal patch", "Extended-release tablet once monthly", "IV infusion", "Sublingual tablet"], 0, "Clonidine can be given PO BID-TID or as a once-weekly patch (expensive).")
    ]),

    Med("med-methyldopa", "Methyldopa (Aldomet)", "Central α2 agonist used almost only in pregnancy", ["Hypertension Part III", "Hypertensive Crisis"], {
      uses: ul([
        "<strong>Hypertension in pregnancy</strong>: one of the safest drugs, with long-term follow-up data supporting safety.",
        "Rarely used otherwise."
      ]),
      moa: "<p>Central <strong>α2 agonist</strong>, like clonidine: less sympathetic outflow from the brain.</p>",
      avoid: ul(["Patients who need simple dosing: it is taken 2–4 times daily."]),
      se: ul([
        "Anticholinergic-type side effects (dry mouth, constipation).",
        "Central α2 class effects: drowsiness, dizziness, orthostatic hypotension, edema."
      ]),
      pearls: ul([
        "Methyldopa, labetalol and diltiazem are the drugs most commonly used for hypertensive disorders in pregnancy.",
        "Labetalol is increasingly preferred over methyldopa because it has fewer side effects."
      ]) + HY("Methyldopa = pregnancy drug with the longest safety record.")
    }, [
      Q("uses", "Which antihypertensive is preferred in pregnancy based on long-term follow-up safety data?", ["Methyldopa", "Lisinopril", "Clonidine", "Minoxidil"], 0, "Methyldopa is preferred based on long-term follow-up data supporting its safety."),
      Q("pearls", "Why is labetalol increasingly chosen over methyldopa in pregnancy?", ["Fewer side effects", "It is safer for the fetal kidney", "It is a stronger diuretic", "It is the only oral option"], 0, "Labetalol is increasingly preferred over methyldopa because of fewer side effects."),
      Q("moa", "Which drug class is methyldopa?", ["Central alpha-2 agonist", "Alpha-1 blocker", "Direct arterial vasodilator", "Aldosterone antagonist"], 0, "Methyldopa, clonidine and guanfacine are central α2 agonists."),
      Q("uses", "Outside of pregnancy, how often is methyldopa used?", ["Rarely", "It is first line for all patients", "It is first line in Black patients", "It is the drug of choice in CKD"], 0, "Methyldopa is one of the safest drugs in pregnancy but is rarely used otherwise."),
      Q("pearls", "How often is methyldopa dosed?", ["2-4 times daily", "Once weekly", "Once monthly", "Only as a continuous IV infusion"], 0, "Methyldopa is dosed 2-4 times daily and has some anticholinergic side effects.")
    ]),

    Med("med-hydralazine", "Hydralazine", "Direct arterial vasodilator; PO, IV or IM", ["Hypertension Part III", "Hypertensive Crisis"], {
      uses: ul([
        "BP control, commonly <strong>IV</strong> but also PO; heart rate neutral on its own.",
        "Part of a drug combination in <strong>heart failure</strong>.",
        "<strong>ESRD / CKD / AKI</strong>: safe in kidney disease.",
        "<strong>Eclampsia and preeclampsia</strong> severe BP (with labetalol)."
      ]),
      moa: "<p>Directly <strong>relaxes arterial smooth muscle</strong>, with little or no venous dilation.</p>",
      avoid: ul([
        "<strong>Acutely decompensated HFrEF</strong> (hypertensive emergency): arterial vasodilation <strong>increases cardiac work</strong>.",
        "<strong>Intracerebral or subarachnoid hemorrhage</strong>: avoid (with nitroprusside).",
        "<strong>CAD</strong>: can provoke angina (vascular steal)."
      ]),
      se: ul([
        "<strong>Drug-induced lupus</strong> (classic).",
        "<strong>Reflex tachycardia</strong> from strong vasodilation.",
        "<strong>Sodium and water retention → edema</strong>: often given with a loop diuretic.",
        "Angina; IV: tachycardia, flushing, headache, vomiting."
      ]),
      pearls: ul([
        "Direct vasodilators (hydralazine, minoxidil) are commonly used in advanced CKD/ESRD along with CCBs, BBs and α2 agonists."
      ]) + HY("Hydralazine = lupus + reflex tachycardia + eclampsia. Avoid in ICH and acute HF.")
    }, [
      Q("se", "A patient on long-term hydralazine has joint pain, a malar rash and a positive ANA. Cause?", ["Drug-induced lupus", "Rheumatic fever", "Angioedema", "Serum sickness from ACEI"], 0, "Hydralazine is known to cause drug-induced lupus."),
      Q("uses", "Which two drugs are used for severe BP in eclampsia?", ["Hydralazine and labetalol", "Nitroprusside and esmolol", "Lisinopril and HCTZ", "Clonidine and minoxidil"], 0, "Preeclampsia/eclampsia: labetalol and hydralazine."),
      Q("avoid", "A patient in hypertensive emergency has acute decompensated HFrEF. Why avoid hydralazine?", ["Arterial vasodilation increases cardiac work", "It causes bradycardia", "It worsens hyperkalemia", "It is ineffective IV"], 0, "Drugs to avoid in acute decompensated HFrEF: BBs, CCBs and hydralazine (increases cardiac work)."),
      Q("avoid", "In intracerebral hemorrhage, which two IV drugs should be avoided?", ["Nitroprusside and hydralazine", "Nicardipine and labetalol", "Labetalol and esmolol", "Nicardipine and esmolol"], 0, "For ICH/SAH, nicardipine is the drug of choice; avoid nitroprusside and hydralazine."),
      Q("se", "Why is hydralazine often given with a loop diuretic?", ["It causes sodium and water retention", "It causes hyperkalemia", "It blocks the loop diuretic", "It causes nocturia"], 0, "Direct vasodilators cause sodium/water retention and edema; a loop diuretic helps."),
      Q("se", "Why can hydralazine provoke angina in a patient with CAD?", ["Reflex tachycardia and vascular steal", "Coronary vasospasm from beta blockade", "It raises LDL", "It causes anemia"], 0, "Excess vasodilation causes reflex tachycardia, and it may cause vascular steal; caution in CAD."),
      Q("uses", "Which vasodilator is safe in CKD and AKI and often used IV or PO for inpatient BP control?", ["Hydralazine", "Lisinopril", "Spironolactone", "Triamterene"], 0, "Hydralazine is commonly used IV or PO, is heart rate neutral, and is safe in CKD/AKI."),
      Q("moa", "Which vessels does hydralazine mainly dilate?", ["Arteries, with little venous effect", "Veins more than arteries", "Only coronary arteries", "Pulmonary vessels only"], 0, "Direct arterial vasodilators relax arterial smooth muscle with little or no venous dilation.")
    ]),

    Med("med-minoxidil", "Minoxidil", "Direct arterial vasodilator for hard-to-control HTN in renal failure", ["Hypertension Part III"], {
      uses: ul(["<strong>Renal failure</strong> patients with difficult-to-control hypertension."]),
      moa: "<p>Direct <strong>arterial</strong> smooth muscle relaxation, little venous effect (same as hydralazine).</p>",
      avoid: ul(["CAD: may cause angina (vascular steal and reflex tachycardia)."]),
      se: ul([
        "<strong>Excessive hair growth (hypertrichosis)</strong>.",
        "Sodium and water retention → edema (give with a loop diuretic).",
        "Reflex tachycardia, angina."
      ]),
      pearls: HY("Minoxidil = hair growth. Hydralazine = lupus. Both = edema and reflex tachycardia.")
    }, [
      Q("se", "A patient with ESRD on a direct vasodilator develops new facial and body hair. Which drug?", ["Minoxidil", "Hydralazine", "Clonidine", "Amlodipine"], 0, "Excessive hair growth is the classic minoxidil side effect."),
      Q("uses", "Minoxidil is typically used for which patient?", ["Renal failure with difficult-to-control hypertension", "First-line HTN in a young adult", "Pregnancy", "Asthma with HTN"], 0, "Minoxidil is often used for renal failure patients with difficult-to-control HTN."),
      Q("se", "Which side effects do minoxidil and hydralazine share?", ["Edema and reflex tachycardia", "Lupus and hair growth", "Cough and angioedema", "Bradycardia and heart block"], 0, "Both direct vasodilators cause sodium/water retention and reflex tachycardia; lupus is hydralazine and hair growth is minoxidil."),
      Q("pearls", "Which diuretic is often paired with minoxidil to control fluid retention?", ["Loop diuretic", "Amiloride", "Acetazolamide", "No diuretic is needed"], 0, "Direct vasodilators cause sodium and water retention; a loop diuretic minimizes it."),
      Q("moa", "How does minoxidil lower blood pressure?", ["Direct arterial smooth muscle relaxation", "Central alpha-2 stimulation", "Beta-1 blockade", "Angiotensin receptor blockade"], 0, "Minoxidil is a direct arterial vasodilator.")
    ])
  ]);
}());
