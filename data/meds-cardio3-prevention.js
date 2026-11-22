/*
  Medications: Prevention: lipids & smoking cessation (Cardio Part 3).
  Source: cad-part-2.md slides 22-24, 34-35, 47-50, 59-61; cad-part-3.md slides
  97, 120; cad-part-4.md slides 80-81; cad-part-5.md slides 7, 41, 84;
  heart-failure.md slide 146; cardiac-surgery.md slide 42. Only append questions.
*/
(function () {
  "use strict";
  var H = window.DiseaseContent, M = window.MedContent;
  var Tbl = H.Tbl, HY = H.HY, Mn = H.Mn, Q = H.Q, L = H.L, Med = M.Med, ul = M.ul;

  window.CARDIO3_MEDS_PREVENTION = L("meds3-prevention", "Prevention: lipids & smoking", [

    Med("med3-statin", "Statins (high and moderate intensity)", "High-intensity statin for every patient with clinical ASCVD and every ACS, regardless of LDL", ["CAD Part II: Prevention", "CAD Part III: Chest Pain Workup", "CAD Part IV: ACS", "CAD Part V: Pharmacology", "Heart Failure", "Cardiac Surgery"], {
      uses: Tbl(["Who", "Statin"], [
        ["<strong>Clinical ASCVD</strong>: ACS, prior MI, angina, PCI/stent, CABG; ischemic stroke/TIA; PAD; atherosclerotic aortic aneurysm", "<strong>High intensity, regardless of the lipid profile</strong>"],
        ["<strong>ACS</strong>", "Start high-intensity in hospital unless contraindicated, regardless of baseline LDL"],
        ["Primary prevention, regardless of PREVENT risk", "LDL ≥190; diabetes ages 40–75; CKD stage 3–4 ages 40–75; HIV ages 40–75"],
        ["Borderline risk (3 to &lt;5%) with hs-CRP ≥2 twice", "High-intensity can be useful"],
        ["CAC ≥100 or ≥75th percentile", "Supports lipid-lowering therapy; CAC 0 may support deferring if no DM, smoking or strong family history"],
        ["HF stage A", "Treat dyslipidemia with a statin"]
      ]) + Tbl(["Intensity", "Drugs"], [
        ["<strong>High</strong>", "<strong>Atorvastatin 40–80 mg</strong>; <strong>rosuvastatin 20–40 mg</strong>"],
        ["Moderate", "Atorvastatin 10–20; rosuvastatin 5–10; lovastatin 40; pravastatin 40; simvastatin 40"]
      ]),
      moa: "<p>Inhibit <strong>HMG-CoA reductase</strong> → less liver cholesterol → more LDL receptors → lower LDL; also stabilize plaque (standard teaching). They are mortality-lowering therapy in CAD.</p>",
      avoid: ul(["Pregnancy, active liver disease (standard teaching).", "Interactions: <strong>ranolazine → simvastatin max 20 mg/day</strong>."]),
      se: ul(["Myalgias/myopathy, rarely rhabdomyolysis; ↑ liver enzymes; small rise in diabetes risk (standard teaching)."]),
      pearls: ul(["Need more LDL lowering after ACS: add <strong>ezetimibe</strong> or another nonstatin.", "Treat to goals: both the % LDL reduction and the LDL/non-HDL goal (older CAD slide: LDL &lt;100, most &lt;70).", "Triglycerides: older goal &lt;200 with fibrates or fish oil."]) +
        HY("ASCVD = high-intensity statin (atorva 40-80 or rosuva 20-40), no matter the LDL.")
    }, [
      Q("uses", "A man with a prior MI has LDL 68 off treatment. Statin?", ["High-intensity statin anyway", "None: LDL is already under 70", "Moderate intensity only", "Fish oil only"], 0, "Clinical ASCVD gets high intensity regardless of the lipid profile because statins lower events beyond LDL numbers."),
      Q("uses", "Which regimen is high-intensity?", ["Rosuvastatin 20 mg", "Simvastatin 40 mg", "Pravastatin 40 mg", "Atorvastatin 10 mg"], 0, "High intensity is atorvastatin 40-80 or rosuvastatin 20-40."),
      Q("uses", "A 45-year-old with type 2 diabetes and a low PREVENT score asks whether she needs a statin. Answer?", ["Yes: adults 40-75 with diabetes get lipid-lowering therapy regardless of calculated risk", "No, her risk is low", "Only if LDL is over 190", "Only after an MI"], 0, "Diabetes is an independent statin indication in the guideline."),
      Q("uses", "A 35-year-old has LDL 215. Statin?", ["Yes: LDL 190 or higher is a statin indication regardless of risk score", "No, too young", "Only if he smokes", "Only niacin"], 0, "LDL that high suggests familial hypercholesterolemia with lifetime risk."),
      Q("pearls", "Eight weeks after ACS on atorvastatin 80 mg, LDL is still above goal. Next step?", ["Add ezetimibe or another nonstatin", "Stop the statin", "Switch to pravastatin", "Accept it"], 0, "When a max statin is not enough, nonstatin add-ons lower LDL further."),
      Q("pearls", "A patient on ranolazine takes simvastatin 40 mg. What is the max simvastatin dose?", ["20 mg/day", "40 mg/day", "80 mg/day", "No limit"], 0, "Ranolazine raises simvastatin levels, increasing myopathy risk."),
      Q("uses", "Borderline-risk adult (PREVENT 4%) has hs-CRP 3.1 twice with no other cause. Lecture's view?", ["High-intensity statin can be useful", "No statin ever", "Aspirin instead", "Repeat CRP in 10 years"], 0, "Persistent inflammation is a risk enhancer that tips borderline patients toward treatment.")
    ]),

    Med("med3-nrt", "Nicotine replacement (patch, gum/lozenge, inhaler/spray)", "Patch 21 mg if > ½ ppd, 14 mg if less; gum/lozenge 4 mg if smoking within 30 min of waking", ["CAD Part II: Prevention", "CAD Part I: Foundations", "Heart Failure", "Cardiac Surgery"], {
      uses: Tbl(["Form", "Dose", "Precautions"], [
        ["<strong>Patch</strong>", "<strong>21 mg</strong> if &gt;½ pack/day; <strong>14 mg</strong> if &lt;½ ppd", "Local irritation; remove for sleep (it can cause vivid dreams, standard teaching)"],
        ["<strong>Gum / lozenge</strong>", "<strong>4 mg</strong> if first tobacco ≤30 min after waking, else 2 mg; 1 piece every 1–2 h; max 20 lozenges or 24 gum/day", "Hiccups, GERD; avoid eating 15 min before and after"],
        ["Nasal or oral inhaler", "1–2 sprays/hour, or puff cartridge 20 min/hour", "Local irritation; avoid with nasal/airway disease"]
      ]),
      moa: "<p>Replaces nicotine without the smoke → fewer withdrawal symptoms and cravings (standard teaching).</p>",
      avoid: ul(["Gum/lozenge right around meals (food and drink cut absorption, standard teaching).", "Nasal/oral inhaler with nasal or airway disease."]),
      se: ul(["Skin irritation (patch); hiccups and GERD (gum/lozenge); local irritation (inhaler/spray)."]),
      pearls: ul(["Using an adjunct <strong>doubles quit success</strong>.", "Ask about smoking every visit; 1 pack = 20 cigarettes.", "Smoking raises ASCVD risk 2-3×, and the extra risk falls 50% within 2 years of quitting.", "Combining a patch with a short-acting form is common (standard teaching)."]) +
        HY("Patch: > ½ ppd = 21 mg. Gum: smokes within 30 min of waking = 4 mg.")
    }, [
      Q("uses", "A man smokes 1 pack per day and is ready to quit with a patch. Starting strength?", ["21 mg", "14 mg", "7 mg", "42 mg"], 0, "More than half a pack a day starts on the 21 mg patch."),
      Q("uses", "A woman lights her first cigarette 10 minutes after waking. Nicotine gum strength?", ["4 mg", "2 mg", "1 mg", "8 mg"], 0, "Smoking within 30 minutes of waking signals higher dependence, so 4 mg."),
      Q("se", "A patient on the nicotine patch complains of vivid dreams. Fix?", ["Remove the patch at bedtime", "Double the patch", "Switch to 4 mg gum at night", "Stop all treatment"], 0, "Nicotine overnight disturbs sleep, which is why the patch comes off for sleep."),
      Q("avoid", "A patient chews nicotine gum with his coffee. Why does it seem not to work?", ["Eating or drinking within 15 minutes cuts absorption", "Coffee destroys nicotine", "Gum works only at night", "He needs the 2 mg dose"], 0, "Nicotine absorbs through the mouth lining, which acidic drinks and food block."),
      Q("pearls", "How much does using a quit-smoking adjunct improve success?", ["About doubles it", "No change", "Tenfold", "It lowers success"], 0, "Medication eases withdrawal, so twice as many people stay quit.")
    ]),

    Med("med3-bupropion", "Bupropion (Zyban, Wellbutrin)", "150 mg daily × 3 days, then BID; avoid with seizures, eating disorders, MAOIs", ["CAD Part II: Prevention"], {
      uses: ul(["Smoking cessation: <strong>150 mg/day × 3 days, then 150 mg BID</strong>.", "Helpful if the patient also has depression or worries about weight gain (standard teaching)."]),
      moa: "<p>Norepinephrine-dopamine reuptake inhibitor → less craving and withdrawal (standard teaching).</p>",
      avoid: ul(["<strong>History or risk of seizures</strong>.", "<strong>Eating disorders</strong> (bulimia/anorexia).", "<strong>MAOIs</strong>."]),
      se: ul(["Insomnia, dry mouth; lowers seizure threshold (standard teaching)."]),
      pearls: ul(["Start 1-2 weeks before the quit date (standard teaching)."]) + HY("Bupropion: no seizures, no eating disorder, no MAOI.")
    }, [
      Q("avoid", "A smoker with epilepsy wants help quitting. Which drug should be avoided?", ["Bupropion", "Nicotine patch", "Varenicline", "Nicotine gum"], 0, "Bupropion lowers the seizure threshold."),
      Q("avoid", "A 22-year-old with bulimia asks for Zyban. Problem?", ["Eating disorders are a contraindication", "None", "Only if she drinks coffee", "Only with the patch"], 0, "Electrolyte shifts from purging plus bupropion raise seizure risk."),
      Q("uses", "Bupropion dosing for smoking cessation?", ["150 mg daily for 3 days, then 150 mg twice daily", "0.5 mg daily then 1 mg BID", "21 mg daily", "300 mg three times a day"], 0, "The 3-day lead-in lowers side effects before the full dose."),
      Q("avoid", "A patient on phenelzine (an MAOI) wants bupropion. Answer?", ["Avoid the combination", "Fine together", "Only at night", "Double the bupropion"], 0, "The lecture lists MAOIs as a bupropion contraindication (risk of hypertensive reactions).")
    ]),

    Med("med3-varenicline", "Varenicline (Chantix)", "0.5 mg daily × 3 d, 0.5 mg BID × 4 d, then 1 mg BID; nausea, vivid dreams; adjust for CKD", ["CAD Part II: Prevention"], {
      uses: ul(["Smoking cessation: <strong>0.5 mg daily × 3 days → 0.5 mg BID × 4 days → 1 mg BID</strong>."]),
      moa: "<p><strong>Partial agonist</strong> at the nicotinic receptor: eases craving and blunts the reward from smoking (standard teaching).</p>",
      avoid: ul(["<strong>CKD</strong>: must be dose-adjusted (renally cleared)."]),
      se: ul(["<strong>Nausea</strong> (common).", "<strong>Vivid dreams</strong>."]),
      pearls: ul(["Taking it with food and water reduces nausea (standard teaching)."]) + HY("Chantix: nausea, dreams, dose-adjust in CKD.")
    }, [
      Q("se", "The most common side effect of varenicline?", ["Nausea", "Seizures", "Hyperkalemia", "Hiccups"], 0, "Nausea is common, so it is taken with food and water."),
      Q("avoid", "A smoker with eGFR 25 wants varenicline. What must change?", ["Lower the dose for CKD", "Nothing", "It is contraindicated with a patch", "Double the dose"], 0, "Varenicline is cleared by the kidneys, so it builds up in CKD."),
      Q("moa", "How does varenicline help people quit?", ["Partial nicotinic agonist: eases craving and blunts smoking reward", "Replaces nicotine fully", "Blocks dopamine reuptake", "Blocks MAO"], 0, "It occupies the receptor partly, so withdrawal eases and a cigarette feels less rewarding."),
      Q("uses", "Varenicline titration?", ["0.5 mg daily x3 days, 0.5 mg BID x4 days, then 1 mg BID", "150 mg daily then BID", "21 mg patch daily", "1 mg once weekly"], 0, "Slow titration over a week keeps nausea down.")
    ])
  ]);
}());
