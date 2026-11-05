/*
  Cardio Part 2 Diseases tool: Arrhythmia Pharmacology (drug toxicities).
  Source: source-material/cardio-part-2/text/arrhythmia-pharmacology.md.
  The drugs themselves live in the Medications tool; this file covers the
  toxic syndromes as conditions to recognize and treat.
  Question ids are "<disease id>|<index>": only APPEND questions.
*/
(function () {
  "use strict";
  var H = window.DiseaseContent;
  var Tbl = H.Tbl, HY = H.HY, Mn = H.Mn, S = H.S, Q = H.Q, D = H.D, L = H.L;

  window.CARDIO2_DISEASES_PHARM = L("pharmacology", "Arrhythmia Pharmacology", [

    D("pharm-digoxin-toxicity", "Digoxin Toxicity", "Nausea, yellow halos and arrhythmias (atrial tach with block, PVCs, VT) above 2 ng/mL; worse with renal failure and low K; Digibind.", [
      S("overview", "Risk", "<p>Can cause <strong>fatal arrhythmias</strong>; 0.8–4% of chronic users. Therapeutic range <strong>0.5–2 ng/mL</strong>; risk rises <strong>&gt; 2.0</strong>. Renally cleared, half-life 36–48 h (longer in renal failure).</p>" + Tbl(["Risk factor", ""], [
        ["Low body weight", ""], ["Advanced age", ""], ["<strong>Decreased renal function</strong>", ""], ["<strong>Hypokalemia</strong>", "(standard teaching: digoxin and K compete for the Na/K pump)"]
      ])),
      S("presentation", "Presentation", Tbl(["Type", "Findings"], [
        ["GI / neuro", "<strong>Nausea, vomiting</strong>, lethargy, <strong>visual changes: halos, yellow or blurred vision</strong>"],
        ["Arrhythmias", "Sinus brady, <strong>paroxysmal atrial tachycardia with AV block</strong>, junctional tachycardia, AV block, <strong>PVCs</strong>, VT/VF"],
        ["Labs", "<strong>Hyperkalemia</strong> (acute toxicity)"],
        ["EKG (therapeutic effect too)", "<strong>\"Scooped\" ST depression</strong>"]
      ]) + HY("Hallmark: tachyarrhythmia + AV block at the same time (e.g., atrial tach with block).")),
      S("treatment", "Treatment", Tbl(["Step", "Detail"], [
        ["<strong>DSFab (Digibind, DigiFab)</strong>", "Binds digoxin: <strong>life-threatening arrhythmia, K &gt; 5.5, end-organ damage</strong> (renal failure, AMS)"],
        ["Activated charcoal", "Within 1–2 h of ingestion, 1 g/kg (max 50 g), airway protected"],
        ["Atropine", "Bradycardia"],
        ["IV fluids", "Hypotension"]
      ]))
    ], [
      Q("presentation", "An 84-year-old on digoxin with worsening CKD has nausea, sees yellow halos and has atrial tachycardia with 2:1 block. Diagnosis?", ["Digoxin toxicity", "Amiodarone toxicity", "Hyperthyroidism", "Sick sinus syndrome"], 0, "GI + visual changes + tachyarrhythmia with block."),
      Q("treatment", "Antidote for life-threatening digoxin toxicity?", ["Digoxin immune Fab (DigiFab)", "Glucagon", "Naloxone", "Protamine"], 0, "DSFab binds digoxin."),
      Q("treatment", "Which potassium level is an indication for DigiFab?", ["Above 5.5", "Below 3.0", "Exactly 4.0", "Potassium doesn't matter"], 0, "K > 5.5, life-threatening arrhythmia or end-organ damage."),
      Q("overview", "Above what digoxin level does toxicity risk rise?", ["2.0 ng/mL", "0.5 ng/mL", "10 ng/mL", "0.1 ng/mL"], 0, "Therapeutic 0.5-2; increased risk > 2.0."),
      Q("overview", "Which electrolyte problem predisposes to digoxin toxicity?", ["Hypokalemia", "Hypernatremia", "Hypercalcemia only", "Hypophosphatemia"], 0, "Risk factors: low weight, age, renal decline, hypokalemia."),
      Q("presentation", "Which EKG change is classic for digoxin?", ["Scooped ST depression", "Delta wave", "Coved ST elevation", "Peaked P waves"], 0, "Scooped ST segments."),
      Q("treatment", "When does activated charcoal help in digoxin overdose?", ["Within 1-2 hours of ingestion with a protected airway", "Any time within a week", "Only after DigiFab", "Never"], 0, "1 g/kg within 1-2 hours if alert."),
      Q("presentation", "Which visual symptom suggests digoxin toxicity?", ["Yellow vision or halos", "Bright flashes when standing", "Painful red eye", "Double vision only"], 0, "Halos, yellow or blurred vision.")
    ]),

    D("pharm-bb-overdose", "Beta Blocker Overdose", "Bradycardia, hypotension, cardiogenic shock, bronchospasm, seizures; the heart can become refractory to drugs and pacing.", [
      S("presentation", "Presentation", "<p>Suicide attempt or accidental overdose → <strong>bradycardia, hypotension, low cardiac output, cardiac failure, cardiogenic shock</strong>. Also <strong>bronchospasm</strong>, respiratory depression, AMS, <strong>convulsions, coma</strong>. In severe cases the myocardium becomes <strong>refractory to drugs and electrical pacing</strong> → asystolic death.</p>"),
      S("treatment", "Treatment (standard teaching)", Tbl(["Step", "Detail"], [
        ["Airway, IV fluids, atropine", "Atropine often fails"],
        ["<strong>Glucagon IV</strong>", "Raises cAMP <strong>bypassing the beta receptor</strong>; classic antidote"],
        ["High-dose insulin + glucose, calcium", "Inotropic support"],
        ["Pressors, pacing", "If refractory"]
      ]) + HY("Beta blocker overdose → glucagon (works around the blocked receptor)."))
    ], [
      Q("presentation", "A teen takes a bottle of her mother's propranolol. HR 38, BP 70/40, wheezing. Diagnosis?", ["Beta blocker overdose", "Digoxin toxicity", "Anticholinergic toxicity", "Lidocaine toxicity"], 0, "Bradycardia, hypotension, bronchospasm."),
      Q("treatment", "Classic antidote for beta blocker overdose?", ["Glucagon", "Naloxone", "Flumazenil", "Physostigmine"], 0, "Glucagon raises cAMP independent of beta receptors (standard teaching)."),
      Q("presentation", "Why can severe beta blocker overdose end in asystole despite treatment?", ["The myocardium becomes refractory to drugs and pacing", "It causes VF only", "Pacing always works", "It raises catecholamines"], 0, "Refractory myocardium leads to asystolic death."),
      Q("presentation", "Which respiratory effect can beta blocker overdose cause?", ["Bronchospasm and respiratory depression", "Hyperventilation only", "Pneumothorax", "Pleural effusion"], 0, "Bronchospasm and respiratory depression."),
      Q("presentation", "Which neurologic findings occur in beta blocker overdose?", ["Altered mental status, convulsions and coma", "Tinnitus only", "Dilated pupils and dry skin", "Yellow vision"], 0, "Mental status changes, seizures and coma are described."),
      Q("treatment", "How does glucagon work in beta blocker overdose?", ["Raises cAMP by bypassing the beta receptor", "Blocks calcium channels", "Binds the beta blocker", "Speeds renal excretion"], 0, "Standard teaching.")
    ]),

    D("pharm-amio-toxicity", "Amiodarone Toxicity", "Long-term organ toxicity: lungs, liver, thyroid (hypo or hyper), eyes, blue-gray skin; acute brady, hypotension, AV block.", [
      S("overview", "Organ toxicity", Tbl(["Organ", "Toxicity", "Monitor"], [
        ["<strong>Lung</strong> (boxed)", "<strong>Pulmonary fibrosis</strong>, hypersensitivity/interstitial pneumonitis (can be fatal)", "<strong>Baseline CXR + PFTs</strong>; CXR q3–6 mo"],
        ["<strong>Liver</strong> (boxed)", "Hepatotoxicity", "LFTs; stop/reduce if &gt; 3x normal"],
        ["<strong>Thyroid</strong>", "<strong>Hypo- or hyperthyroidism</strong> (iodine load, blocks T4 → T3)", "Baseline + periodic TFTs"],
        ["Eyes", "<strong>Corneal microdeposits</strong> (halos); rarely optic neuritis", "Eye exams"],
        ["Skin", "<strong>Blue-gray discoloration</strong>, photosensitivity", ""],
        ["Neuro, GI", "Neuropathy, gait ataxia; nausea (&gt; 10%)", ""]
      ]) + "<p>Very long half-life (PO ~58 days), so toxicity lingers.</p>"),
      S("presentation", "Acute cardiac effects", "<p><strong>Bradycardia, hypotension</strong> (especially IV), AV block, sinus arrest, QT prolongation, new VT. Contraindicated in sick sinus, AV block, bradycardia without a pacer, <strong>cardiogenic shock</strong>, iodine hypersensitivity.</p>" + Mn("Amiodarone checks", "Check PFTs, LFTs, TFTs (lungs, liver, thyroid) + eyes and skin."))
    ], [
      Q("overview", "A patient on amiodarone for 2 years has progressive dyspnea, dry cough and reticular opacities on CXR. Likely cause?", ["Amiodarone pulmonary fibrosis", "Pneumonia", "CHF only", "Asthma"], 0, "Pulmonary toxicity is a boxed warning."),
      Q("overview", "Why does amiodarone cause thyroid problems?", ["High iodine content and blocking T4 to T3 conversion", "It destroys the pituitary", "It is an antithyroid drug", "It causes Graves antibodies"], 0, "Iodine load plus blocked conversion: hypo or hyper."),
      Q("overview", "Which baseline tests are needed before starting amiodarone?", ["Chest X-ray, PFTs, LFTs and TFTs", "Lipid panel only", "Echo only", "Digoxin level"], 0, "Lungs, liver and thyroid monitoring."),
      Q("overview", "Which skin change is linked to amiodarone?", ["Blue-gray discoloration in sun-exposed areas", "Yellow skin", "Malar rash", "Vitiligo"], 0, "Gray-blue discoloration and photosensitivity."),
      Q("overview", "When should amiodarone be stopped or reduced for liver toxicity?", ["When transaminases exceed 3 times normal", "Any LFT rise", "Never", "Only with jaundice"], 0, "Discontinue or reduce if > 3x normal."),
      Q("presentation", "Which acute effects can IV amiodarone cause?", ["Bradycardia and hypotension", "Severe hypertension", "Hyperkalemia", "Tachycardia only"], 0, "Bradycardia, hypotension, AV block."),
      Q("overview", "What eye finding is common and usually harmless on amiodarone?", ["Corneal microdeposits", "Retinal detachment", "Cataracts in all", "Glaucoma"], 0, "Common corneal microdeposits; rare optic neuritis."),
      Q("presentation", "In which patient is amiodarone contraindicated?", ["Cardiogenic shock or AV block without a pacemaker", "Paroxysmal AF", "Stable VT", "Persistent AF with CAD"], 0, "Contraindications: SSS, AV block, brady without pacer, cardiogenic shock, iodine allergy.")
    ]),

    D("pharm-lidocaine-toxicity", "Lidocaine Toxicity", "Dose-dependent CNS effects (tremor, tinnitus, slurred speech, confusion → seizures); rarely brady/asystole; worse with liver disease.", [
      S("presentation", "Presentation", Tbl(["System", "Findings"], [
        ["<strong>CNS</strong> (common, dose dependent)", "<strong>Tremor, tinnitus</strong>, drowsiness/insomnia, lightheadedness, <strong>slurred speech</strong>, ataxia, agitation, hallucinations, memory trouble; <strong>seizures</strong> at high levels"],
        ["Cardiovascular (infrequent)", "Sinus slowing, <strong>asystole</strong>, hypotension, shock: overdose or rapid IV push"]
      ]) + "<p><strong>Severe hepatic dysfunction</strong> raises toxicity risk (hepatic metabolism). Monitor LFTs, mental status, EKG, BP, levels.</p>"),
      S("treatment", "Management", "<p>CNS effects usually <strong>resolve by slowing or stopping the infusion</strong>. Seizures: benzodiazepines; severe toxicity: lipid emulsion (standard teaching).</p>" + HY("Lidocaine drip + new tinnitus, tremor or confusion → slow or stop the drip."))
    ], [
      Q("presentation", "On a lidocaine drip for VT, a patient develops ringing ears, tremor and slurred speech. Cause?", ["Lidocaine toxicity", "Stroke", "Digoxin toxicity", "Hypoglycemia"], 0, "Dose-dependent CNS effects."),
      Q("treatment", "First step for mild lidocaine CNS toxicity?", ["Slow or stop the infusion", "Add amiodarone", "Give atropine", "Defibrillate"], 0, "Effects resolve with reduced rate or discontinuation."),
      Q("presentation", "Which condition increases lidocaine toxicity risk?", ["Severe hepatic dysfunction", "Hypothyroidism", "Asthma", "Obesity"], 0, "Severe hepatic dysfunction increases risk."),
      Q("presentation", "What can very high lidocaine levels cause?", ["Seizures", "Hypertension", "Hyperthyroidism", "Rash"], 0, "High plasma concentrations can cause seizures."),
      Q("presentation", "What usually causes lidocaine's cardiovascular toxicity?", ["Overdose or rapid IV administration", "Oral tablets", "Low dose infusion", "Topical use"], 0, "Sinus slowing, asystole, hypotension from overdose or rapid IV."),
      Q("presentation", "Which labs are monitored on a lidocaine infusion?", ["Liver function tests and lidocaine levels", "TSH", "Lipids", "INR"], 0, "LFTs, neuro checks, ECG, BP and levels.")
    ]),

    D("pharm-anticholinergic-toxicity", "Atropine (Anticholinergic) Toxicity", "Too much atropine: dilated pupils, warm dry skin, tachycardia, tremor, ataxia, delirium, coma.", [
      S("presentation", "Presentation", "<p>Atropine overdose: <strong>dilated pupils, warm dry skin, tachycardia</strong>, tremor, ataxia, <strong>delirium</strong>, coma. Cautions: <strong>angle-closure glaucoma</strong>, pyloric obstruction, <strong>urinary retention (BPH)</strong>, mucus plugs. Elderly: half-life more than doubles. <strong>Heart transplant</strong>: atropine likely ineffective (no vagal innervation).</p>" + Mn("Anticholinergic", "Hot as a hare, dry as a bone, red as a beet, blind as a bat, mad as a hatter (standard teaching).")),
      S("treatment", "Management", "<p>Stop the drug, supportive care; physostigmine for severe delirium (standard teaching).</p>")
    ], [
      Q("presentation", "After several doses of atropine, a patient is delirious, flushed, with dry skin, big pupils and HR 140. Cause?", ["Anticholinergic (atropine) toxicity", "Opioid overdose", "Digoxin toxicity", "Beta blocker overdose"], 0, "Classic anticholinergic picture."),
      Q("presentation", "Which pupils fit atropine toxicity?", ["Dilated", "Pinpoint", "Unequal", "Normal always"], 0, "Dilated pupils."),
      Q("presentation", "Why is atropine unlikely to help bradycardia after a heart transplant?", ["The transplanted heart lacks vagal innervation", "It is metabolized too fast", "It causes rejection", "It is contraindicated with steroids"], 0, "No vagal input for atropine to block."),
      Q("presentation", "Which patient needs caution with atropine?", ["Elderly man with BPH and urinary retention", "Young athlete", "Patient with diarrhea", "Patient with open-angle glaucoma controlled"], 0, "Cautions: angle-closure glaucoma, pyloric obstruction, BPH, mucus plugs."),
      Q("presentation", "What happens to skin in anticholinergic toxicity?", ["Warm and dry", "Cold and clammy", "Sweaty", "Blue"], 0, "Warm, dry skin."),
      Q("presentation", "How does age affect atropine?", ["Half-life more than doubles in the elderly", "It is cleared faster", "No change", "It becomes a beta blocker"], 0, "Geriatric half-life more than doubled.")
    ])
  ]);
}());
