/*
  Medications: RAAS blockers (Cardio Part 1). Source: hypertension-part-3.md
  slides 26-29 and 49-61, hypertensive-crisis.md slide 54, cardiomyopathies.md.
  Only append questions (ids are "<med id>|<index>").
*/
(function () {
  "use strict";
  var H = window.DiseaseContent, M = window.MedContent;
  var Tbl = H.Tbl, HY = H.HY, Mn = H.Mn, Q = H.Q, L = H.L, Med = M.Med, ul = M.ul;

  window.CARDIO_MEDS_RAAS = L("meds-raas", "ACE inhibitors & ARBs", [

    Med("med-ace-inhibitors", "ACE inhibitors", "Lisinopril, enalapril (IV enalaprilat), benazepril, captopril, ramipril, quinapril… (the “-prils”)", ["Hypertension Part III", "Hypertensive Crisis", "Cardiomyopathies"], {
      uses: ul([
        "<strong>Hypertension, first line</strong>: work best in <strong>White and Asian</strong> patients, less effective in Black patients.",
        "<strong>CKD with proteinuria</strong>: treatment of choice to slow progression (even without HTN).",
        "<strong>HFrEF and recent MI</strong>: reduce morbidity and mortality.",
        "First drug for <strong>diabetes</strong>, CKD and recurrent stroke prevention; part of CAD, AFib and post-MI regimens.",
        "May halt or regress <strong>LV remodeling</strong> in HF, CAD and cardiomyopathy; afterload reduction in dilated cardiomyopathy and myocarditis HF."
      ]),
      moa: "<p>Block the enzyme that converts <strong>angiotensin I to angiotensin II</strong>, so there is less vasoconstriction and less aldosterone release.</p><p>ACE also breaks down <strong>bradykinin</strong>, so ACEIs raise bradykinin, a potent vasodilator. Bradykinin is behind the cough and angioedema.</p>",
      avoid: ul([
        "<strong>Pregnancy (category X)</strong>: fetal <strong>renal agenesis</strong>. Avoid in women who may become pregnant and while breastfeeding (peripartum cardiomyopathy).",
        "<strong>Any history of ACEI angioedema</strong>: never prescribe another ACEI.",
        "<strong>Never combine with an ARB</strong> (ONTARGET: worse renal outcomes).",
        "Hypovolemia (vomiting, diarrhea, poor intake, GI bleed, overdiuresis): can worsen kidney function.",
        "Hypertrophic cardiomyopathy with LVOT obstruction (vasodilation worsens the obstruction)."
      ]),
      se: ul([
        "<strong>Dry cough</strong>: usually 1 week to 6 months after starting but can appear after years; more common in women; resolves when the drug is stopped.",
        "<strong>Hyperkalemia</strong>: especially CKD stage IV-V, diabetics, and with spironolactone or eplerenone.",
        "<strong>Angioedema (life threatening)</strong>: sudden swelling of lips, tongue and pharynx; more common in Black and Asian patients; half of cases in the first week.",
        "Rise in creatinine (a small temporary rise is expected)."
      ]) + Mn("ACEI side effects", "“CAPTOPRIL”: Cough, Angioedema, Pregnancy problems, Taste change, hypOtension, Potassium up, Renal impairment, Itch/rash, Leukopenia (rare)"),
      pearls: ul([
        "Check <strong>potassium and BUN/Cr within 5–10 days</strong> of starting or increasing the dose.",
        "<strong>Stop</strong> for persistent hyperkalemia or a creatinine rise of <strong>more than 30%</strong>.",
        "Angioedema treatment: diphenhydramine (Benadryl), methylprednisolone (Solu-Medrol), famotidine (Pepcid); protect the airway and intubate if needed; stop the ACEI for good.",
        "Enalapril has an <strong>IV form, enalaprilat</strong>.",
        "In stage 2 HTN, start two drugs in a combo pill, but never ACEI + ARB."
      ]) + HY("ACEI cough → switch to an ARB. ACEI angioedema → never another ACEI; an ARB only with caution.")
    }, [
      Q("se", "A 52-year-old woman on lisinopril for 4 months has a persistent dry, tickly cough and a clear chest. Best next step?", ["Stop lisinopril and switch to an ARB", "Add a cough suppressant and continue", "Switch to another ACE inhibitor", "Order a chest CT"], 0, "ACEI cough resolves when the drug is stopped; an ARB can be trialed because it causes less cough."),
      Q("se", "A Black patient started on lisinopril 3 days ago presents with swelling of the lips and tongue. What else is part of management?", ["Stop the ACEI permanently and never prescribe another ACEI", "Switch to enalapril once the swelling resolves", "Restart lisinopril at half dose", "Continue lisinopril and add a diuretic"], 0, "ACEI angioedema is life threatening: protect the airway, give diphenhydramine, methylprednisolone and famotidine, and never use another ACEI."),
      Q("avoid", "A 28-year-old woman planning pregnancy needs BP treatment. Which class must be avoided?", ["ACE inhibitors", "Labetalol", "Dihydropyridine CCB", "Thiazide diuretic"], 0, "ACEIs (and ARBs) are contraindicated in pregnancy because of fetal renal agenesis."),
      Q("pearls", "After starting an ACEI, when should potassium and creatinine be rechecked?", ["Within 5-10 days", "Within 24 hours", "After 6 months", "Only if the patient has symptoms"], 0, "Monitor K and BUN/Cr within 5-10 days of starting or increasing an ACEI."),
      Q("pearls", "Two weeks after starting lisinopril, creatinine rose from 1.0 to 1.4 and stays there. What should you do?", ["Stop the ACE inhibitor (rise is more than 30%)", "Continue: any rise is expected", "Double the dose", "Add an ARB"], 0, "A small temporary rise is expected, but a persistent rise of more than 30% means the drug must be stopped."),
      Q("uses", "Which drug class is the treatment of choice for CKD with proteinuria?", ["ACE inhibitor (or ARB)", "Loop diuretic", "Beta blocker", "Alpha-1 blocker"], 0, "ACEIs are the treatment of choice in CKD with proteinuria to prevent progression."),
      Q("moa", "Why do ACE inhibitors cause cough and angioedema but ARBs much less so?", ["ACE inhibitors raise bradykinin levels", "ACE inhibitors block AT1 receptors in the lung", "ARBs raise bradykinin more", "ACE inhibitors cause hyperkalemia in the airway"], 0, "ACE also breaks down bradykinin; blocking it raises bradykinin, which drives cough and angioedema."),
      Q("avoid", "Should an ACE inhibitor and an ARB be combined to reduce proteinuria further?", ["No: the combination worsens major renal outcomes", "Yes: it is first line in diabetic kidney disease", "Yes, but only in Black patients", "Only if potassium is low"], 0, "ONTARGET: combination reduced proteinuria more but worsened renal outcomes. Never combine them."),
      Q("avoid", "A patient on lisinopril has 3 days of vomiting and diarrhea. What is the main risk from the ACE inhibitor?", ["Acute kidney injury from hypovolemia", "Rebound hypertension", "Hypoglycemia", "Ototoxicity"], 0, "During hypovolemic illness, ACEIs can worsen kidney function because the kidney depends on angiotensin II to keep filtering."),
      Q("uses", "In which patient group do ACE inhibitors lower BP the most?", ["White and Asian patients", "Black patients", "Pregnant patients", "Patients with bilateral renal artery stenosis"], 0, "ACEIs and ARBs work best in White and Asian patients; CCBs and thiazides work best in Black patients."),
      Q("pearls", "Which ACE inhibitor comes in an IV form?", ["Enalapril (enalaprilat)", "Lisinopril", "Ramipril", "Benazepril"], 0, "Enalapril is given PO; enalaprilat is its IV form.")
    ]),

    Med("med-arbs", "ARBs (angiotensin II receptor blockers)", "Losartan, valsartan, olmesartan, telmisartan, irbesartan, candesartan, azilsartan (the “-sartans”)", ["Hypertension Part III", "Hypertensive Crisis", "Cardiomyopathies"], {
      uses: ul([
        "Same uses as ACE inhibitors: first-line HTN, CKD with proteinuria, HFrEF, post-MI, diabetes, stroke prevention.",
        "Same efficacy as ACEIs and more effective in White patients.",
        "<strong>Generally preferred over ACEIs</strong>: less cough and lower risk of angioedema."
      ]),
      moa: "<p>Block angiotensin II from binding its AT1 and AT2 receptors, so angiotensin II cannot cause vasoconstriction or aldosterone release. ACE still works, so <strong>bradykinin is not raised</strong>.</p>",
      avoid: ul([
        "<strong>Pregnancy</strong>: renal agenesis, same as ACEIs. Avoid in breastfeeding (peripartum cardiomyopathy).",
        "<strong>Never combine with an ACEI.</strong>",
        "Prior ACEI angioedema: can be used <strong>with caution and education</strong>.",
        "Hypertrophic cardiomyopathy with LVOT obstruction."
      ]),
      se: ul([
        "<strong>Hyperkalemia</strong> and rise in creatinine (same monitoring as ACEIs).",
        "Cough and angioedema are much less common than with ACEIs."
      ]),
      pearls: ul([
        "Check a chemistry panel (<strong>potassium and renal function</strong>) 5–7 days after starting or increasing the dose.",
        "ACEI cough: trial an ARB, and tell the patient to stop it if a persistent cough appears."
      ]) + HY("“-sartan” = ARB. Same benefits as an ACEI without the bradykinin cough.")
    }, [
      Q("uses", "Why are ARBs generally preferred over ACE inhibitors?", ["Less cough and lower angioedema risk", "They are safe in pregnancy", "They never cause hyperkalemia", "They work better in Black patients"], 0, "ARBs have similar efficacy with less cough and a lower risk of angioedema."),
      Q("avoid", "A patient had angioedema on lisinopril. Can an ARB be used?", ["Yes, with caution and patient education", "Never: ARBs carry the same risk", "Yes, with no special precautions", "Only if combined with an ACE inhibitor"], 0, "ARBs can be used after ACEI angioedema, with caution and education."),
      Q("avoid", "Which statement about losartan in pregnancy is correct?", ["Contraindicated: risk of fetal renal agenesis", "Preferred over labetalol in pregnancy", "Safe after the first trimester", "Only contraindicated with diabetes"], 0, "ARBs, like ACEIs, are contraindicated in pregnancy because of renal agenesis."),
      Q("pearls", "After starting valsartan, what should be checked in 5-7 days?", ["Potassium and renal function", "Liver enzymes", "Uric acid", "Lipid panel"], 0, "Monitor the chem panel (K and renal status) 5-7 days after starting or increasing an ARB."),
      Q("moa", "How does an ARB differ from an ACE inhibitor at the receptor level?", ["It blocks angiotensin II at its receptor instead of blocking its formation", "It blocks renin release from the kidney", "It raises bradykinin more than an ACEI", "It blocks the aldosterone receptor"], 0, "ARBs block angiotensin II binding to AT receptors; ACEIs block the conversion of angiotensin I to II."),
      Q("avoid", "A patient with diabetic nephropathy is on losartan. The resident wants to add lisinopril to cut proteinuria. Best response?", ["Do not combine: ACEI + ARB worsens renal outcomes", "Good idea: it is guideline recommended", "Only if potassium is above 5.5", "Use enalaprilat instead"], 0, "ONTARGET showed combining ACEI and ARB lowers proteinuria but worsens major renal outcomes."),
      Q("uses", "A patient developed a cough on an ACE inhibitor. What is the usual plan?", ["Trial an ARB and stop it if a persistent cough occurs", "Never use any RAAS blocker again", "Add benzonatate and continue the ACEI", "Switch to a different ACEI"], 0, "ARBs can be trialed after ACEI cough, with counseling to stop if cough persists.")
    ])
  ]);
}());
