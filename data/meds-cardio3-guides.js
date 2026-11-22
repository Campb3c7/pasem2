/*
  Medications: "Which drug when" guides (Cardio Part 3). Cross-class picks.
  Source: cad-part-5.md slides 6, 10, 30, 35, 46, 59-73, 84; cad-part-4.md slides
  17-19, 23-25, 41-44, 58-59, 65-66, 80-81; cad-part-3.md slides 95-96, 120-124;
  heart-failure.md slides 145-161, 162, 186-193; stress-testing.md slides 30-39;
  coronary-angiogram.md slides 7, 23. Only append questions.
*/
(function () {
  "use strict";
  var H = window.DiseaseContent, M = window.MedContent;
  var Tbl = H.Tbl, HY = H.HY, Mn = H.Mn, S = H.S, Q = H.Q, L = H.L, Guide = M.Guide, ul = M.ul;

  window.CARDIO3_MEDS_GUIDES = L("meds3-guides", "Which drug when", [

    Guide("guide3-angina", "Stable angina: which antianginal", "Pick by heart rate, blood pressure, EF and spasm", ["CAD Part III: Chest Pain Workup", "CAD Part V: Pharmacology"], [
      S("supply", "Supply vs demand",
        Tbl(["Drug", "↓ Demand by", "↑ Supply by"], [
          ["<strong>Beta blocker</strong>", "↓ HR (main), ↓ contractility, ↓ BP", "Longer diastole"],
          ["<strong>Nitrate</strong>", "↓ preload → ↓ wall stress", "Coronary dilation, relieves spasm"],
          ["<strong>DHP CCB</strong>", "↓ afterload/BP", "Coronary dilation"],
          ["<strong>Non-DHP CCB</strong>", "↓ HR, ↓ contractility", "Coronary dilation"],
          ["<strong>Ranolazine</strong>", "↓ Ca overload, ↓ wall tension (no HR/BP change)", ""]
        ]) + "<p>Plus for everyone: high-intensity statin and aspirin (mortality-lowering), SL nitro to carry, risk factor control.</p>"),
      S("pick", "Pick by patient",
        Tbl(["Patient", "Choose", "Avoid"], [
          ["Typical stable angina", "<strong>Beta blocker</strong> first (or CCB)", ""],
          ["Still symptomatic on BB", "Add long-acting nitrate or <strong>amlodipine</strong>, then ranolazine", "Verapamil/diltiazem with the BB"],
          ["Asthma / can't take BB", "Non-DHP CCB (diltiazem)", "Nonselective BB"],
          ["<strong>Vasospastic (Prinzmetal) or cocaine</strong>", "<strong>CCB</strong> + nitrates", "<strong>Beta blockers</strong>"],
          ["Low HR and BP already", "<strong>Ranolazine</strong>", "More BB/CCB"],
          ["HFrEF", "BB (carvedilol, bisoprolol, metoprolol succinate), nitrate, amlodipine", "Verapamil, diltiazem"],
          ["HCM with obstruction or severe AS", "BB", "Nitrates (↓ preload)"],
          ["Uses sildenafil/tadalafil", "BB, CCB, ranolazine", "Any nitrate"]
        ]) + HY("Spasm = CCB, never BB. BB + CCB = amlodipine, never verapamil/diltiazem."))
    ], [
      Q("pick", "A 60-year-old with stable angina, HR 88, BP 150/90 and no lung disease. First antianginal?", ["A beta blocker", "Ranolazine", "Isosorbide mononitrate alone", "Prasugrel"], 0, "Beta blockers are first-line and his fast rate and high BP are exactly what they treat."),
      Q("pick", "A patient with stable angina takes tadalafil for BPH and ED. Which antianginal must be avoided?", ["Long-acting nitrate", "Metoprolol", "Amlodipine", "Ranolazine"], 0, "Any nitrate with a PDE-5 inhibitor can cause profound hypotension."),
      Q("supply", "Which antianginal lowers demand without changing HR or BP?", ["Ranolazine", "Metoprolol", "Diltiazem", "Nitroglycerin"], 0, "Ranolazine works by limiting calcium overload inside myocytes."),
      Q("pick", "A patient with HFrEF and angina on carvedilol still has angina. Which add-on is safest?", ["Isosorbide mononitrate or amlodipine", "Verapamil", "Diltiazem", "Propranolol"], 0, "Non-DHP CCBs worsen low-EF HF; nitrates and amlodipine do not."),
      Q("pick", "Early-morning rest angina with transient ST elevation, clean coronaries. Best long-term drug?", ["A calcium channel blocker", "Metoprolol", "Clopidogrel alone", "Furosemide"], 0, "Vasospastic angina responds to CCBs, which relax coronary smooth muscle.")
    ]),

    Guide("guide3-acs", "ACS: the drug checklist", "What every ACS patient gets, what is selective, and what to avoid", ["CAD Part III: Chest Pain Workup", "CAD Part IV: ACS", "CAD Part V: Pharmacology"], [
      S("now", "In the ER",
        Tbl(["Group", "Drugs"], [
          ["<strong>Core (everyone)</strong>", "<strong>Aspirin</strong> 162–325 chewed + <strong>P2Y12 inhibitor</strong> + <strong>anticoagulant</strong> (UFH if cath planned, enoxaparin if not); reperfusion when indicated"],
          ["<strong>Symptom-directed</strong>", "<strong>Nitroglycerin</strong> (SL → IV), <strong>oral beta blocker within 24 h</strong>, <strong>oxygen only if SpO<sub>2</sub> &lt;90%</strong>"],
          ["<strong>Selected</strong>", "Opioids for refractory pain; <strong>fibrinolysis</strong> for STEMI when PCI can't happen in 120 min"],
          ["<strong>Avoid</strong>", "<strong>Non-aspirin NSAIDs</strong> (ibuprofen, diclofenac: more CV events); <strong>prophylactic lidocaine/antiarrhythmics</strong>"],
          ["Also", "Correct <strong>K and Mg</strong>; start <strong>high-intensity statin</strong> regardless of LDL; ACEi/ARB in 24 h if EF ≤40%, HF, HTN, DM or anterior STEMI"]
        ]) + HY("Do not delay angiography or reperfusion to finish meds or control pain.")),
      S("home", "Discharge (secondary prevention)",
        ul(["<strong>DAPT</strong> (aspirin + P2Y12) at least 12 months if bleeding risk is not high, then aspirin 81 mg.", "<strong>High-intensity statin</strong>; add ezetimibe/nonstatin if LDL not at goal.",
          "<strong>Beta blocker</strong>: especially EF &lt;50%, HF, angina, arrhythmias.", "<strong>ACEi or ARB</strong>: EF ≤40%, HTN, DM, anterior STEMI.", "SL nitro to carry; SGLT2i or GLP-1 RA if T2DM; anticoagulation only for AF or LV thrombus (not every MI).",
          "Cardiac rehab, smoking cessation drugs."]) +
        Mn("Discharge after MI", "\"A-B-C-S\": Antiplatelets (DAPT) + ACEi/ARB, Beta blocker, Cholesterol (statin), Stop smoking + SL nitro (standard teaching memory aid)."))
    ], [
      Q("now", "A STEMI patient's knee hurts and he asks for ibuprofen. Answer?", ["Avoid non-aspirin NSAIDs in ACS: they raise CV events", "Ibuprofen 800 mg is fine", "Give ketorolac IV", "Only if creatinine is normal"], 0, "NSAIDs promote thrombosis, fluid retention and BP rise, so they are avoided in ACS."),
      Q("now", "Should a STEMI patient get prophylactic lidocaine to prevent VF?", ["No: prophylactic antiarrhythmics are not used", "Yes, always", "Only with an anterior MI", "Only in women"], 0, "Prophylactic lidocaine did not help and can cause harm; correct K and Mg instead."),
      Q("now", "Which three drug classes are the core of ACS treatment for nearly every patient?", ["Aspirin, a P2Y12 inhibitor and an anticoagulant", "Oxygen, morphine and nitro", "Digoxin, furosemide and an ACEi", "Fibrinolytic, statin and CCB"], 0, "Two antiplatelets plus an anticoagulant attack both the platelet plug and the fibrin mesh."),
      Q("home", "After NSTEMI with EF 60%, no HF, but diabetes. Which discharge drug is specifically indicated by the diabetes?", ["ACE inhibitor (or ARB)", "Warfarin", "Digoxin", "Amiodarone"], 0, "Diabetes is one of the high-risk features for ACEi after ACS."),
      Q("home", "A patient after an uncomplicated MI without AF or LV thrombus asks if he needs a blood thinner like apixaban. Answer?", ["No: anticoagulation only for AF or LV thrombus, not every MI", "Yes, everyone after MI", "Yes, for 12 months", "Only if he is over 70"], 0, "Adding an anticoagulant to DAPT raises bleeding without benefit unless there is a clot source."),
      Q("now", "A NSTEMI patient's K is 3.1 and Mg 1.4. Why replace them now?", ["Low K and Mg raise arrhythmia risk in ACS", "They lower troponin", "They help aspirin work", "They prevent contrast allergy"], 0, "Ischemic myocardium is irritable, and low K/Mg make VT/VF more likely.")
    ]),

    Guide("guide3-hold", "Who should NOT get the usual drug", "RV infarct, acute HF, spasm/cocaine, PDE-5 inhibitors, HFpEF", ["CAD Part IV: ACS", "CAD Part V: Pharmacology", "Heart Failure"], [
      S("table", "Situations",
        Tbl(["Situation", "Hold", "Give instead"], [
          ["<strong>RV infarct</strong> (inferior STEMI + hypotension + JVD + clear lungs)", "<strong>Nitrates, diuretics</strong> (↓ preload)", "<strong>IV normal saline</strong>, cautious with reassessment; right-sided ECG (V4R)"],
          ["<strong>Acute decompensated HF</strong>", "<strong>BB, CCB, digoxin</strong> (contraindicated); little data for starting ACEi/ARB in the ED", "O<sub>2</sub>/NIV, <strong>IV NTG</strong> (if BP high), <strong>IV loop</strong>"],
          ["<strong>Vasospasm or cocaine/meth</strong>", "<strong>Beta blockers</strong>", "CCB, nitrates, benzodiazepines (cocaine)"],
          ["<strong>PDE-5 inhibitor</strong> (24 h; tadalafil 48 h)", "<strong>All nitrates</strong>, incl. BiDil", "Other antianginals"],
          ["<strong>HFpEF</strong>", "Over-diuresis, digoxin, tachycardia", "K-sparing diuretic first, BP control, rate/rhythm control"],
          ["<strong>Severe AS / obstructive HCM</strong>", "Nitrates (caution), dobutamine stress", "Careful volume"],
          ["Prior stroke/TIA, age ≥75, &lt;60 kg", "Prasugrel (or 5 mg if &lt;60 kg)", "Ticagrelor or clopidogrel"]
        ]) + HY("Iatrogenic acute HF triggers: new BB or CCB, NSAIDs or steroids (salt), new amiodarone, IV overhydration."))
    ], [
      Q("table", "Acute pulmonary edema, BP 190/105. The patient's home list includes diltiazem and digoxin. Which drugs are contraindicated in treating the acute episode?", ["Beta blockers, CCBs and digoxin", "Nitroglycerin and furosemide", "Oxygen", "BiPAP"], 0, "Negative inotropes and digoxin are listed as contraindicated in acute HF treatment."),
      Q("table", "A patient with HF was started on prednisone and naproxen last week and is now fluid overloaded. Why?", ["Steroids and NSAIDs make the kidneys retain salt", "They are negative inotropes", "They cause bradycardia", "They lower BNP"], 0, "Salt-retaining drugs are a classic iatrogenic trigger of acute HF."),
      Q("table", "Inferior STEMI, BP 78/50, JVD, clear lungs. First move for the hypotension?", ["IV normal saline bolus", "IV nitroglycerin", "IV furosemide", "IV metoprolol"], 0, "The infarcted RV needs more preload to push blood through the lungs."),
      Q("table", "A HFpEF patient became dizzy and her creatinine rose after her furosemide was doubled. Why?", ["Over-diuresis drops preload, and a stiff ventricle then loses output", "Furosemide raises afterload", "Hyperkalemia", "Digoxin toxicity"], 0, "HFpEF hearts need filling pressure; too little volume drops cardiac output and kidney flow."),
      Q("table", "A new start of amiodarone came just before a patient's HF admission. Link?", ["New antiarrhythmics are a listed iatrogenic HF trigger", "Amiodarone is a diuretic", "Unrelated", "It lowers BNP"], 0, "The lecture lists a new antiarrhythmic agent such as amiodarone among the causes of acute HF.")
    ]),

    Guide("guide3-hf-stage", "Heart failure: drugs by stage", "Stage A to D and HFrEF vs HFpEF", ["Heart Failure"], [
      S("stages", "By AHA stage",
        Tbl(["Stage", "Drugs"], [
          ["<strong>A</strong> (high risk, no structure change)", "Treat HTN (<strong>ACEi/ARB</strong>), dyslipidemia (<strong>statin</strong>), DM, CAD, AF; quit smoking, stop alcohol/drugs"],
          ["<strong>B</strong> (structural disease, no symptoms)", "A + <strong>ACEi</strong> 1st (ARB if cough); <strong>beta blocker</strong> add-on for persistent HTN; ICD if indicated"],
          ["<strong>C HFrEF</strong>", "<strong>Diuretic + RAAS inhibitor (ACEi/ARB/ARNI) + beta blocker</strong>; 2nd line add-ons: <strong>aldosterone antagonist, ivabradine, dapagliflozin, hydralazine + nitrate, digoxin</strong>"],
          ["<strong>C HFpEF</strong>", "Diuretics for congestion (<strong>K-sparing preferred</strong>), BP control (most on ACEi/ARB); ACE/ARB/ARNI/BB show <strong>no mortality benefit</strong>; avoid tachycardia"],
          ["<strong>D</strong> (refractory)", "Everything from A-C <strong>except the beta blocker</strong>; consider <strong>digoxin</strong> (HFrEF only): fewer symptoms and admissions, no mortality benefit"]
        ]) + HY("HFrEF mortality drugs: ACEi/ARB/ARNI, the 3 BBs, MRA, SGLT2i, BiDil (Black pts), ivabradine (HR > 75). NOT mortality: diuretics, digoxin.")),
      S("acute", "Decompensated HF (ED)",
        ul(["O<sub>2</sub> if hypoxic, upright, 2 IVs, NIV (CPAP/BiPAP).", "<strong>Vasodilator first</strong> when BP is high: <strong>IV nitroglycerin</strong>.", "<strong>IV loop</strong>: 40 mg if naive, 1–2.5× home daily dose if not, usual ED max 80 mg.",
          "Do not start BB, CCB or digoxin; little data for ACEi/ARB in the ED.", "Once stable, wean IV vasodilators, inotropes and pressors."]))
    ], [
      Q("stages", "Which HFrEF drug improves symptoms and admissions but NOT mortality?", ["Digoxin", "Spironolactone", "Carvedilol", "Dapagliflozin"], 0, "Digoxin helps symptoms only; the others lowered death in trials."),
      Q("stages", "A patient with an old MI, EF 35% and no HF symptoms ever. AHA stage and drug?", ["Stage B: ACE inhibitor (beta blocker add-on)", "Stage A: statin only", "Stage C: add digoxin", "Stage D: transplant"], 0, "Structural disease without symptoms is stage B, where ACEi prevents remodeling."),
      Q("stages", "Which drug class is dropped in stage D?", ["Beta blockers", "Diuretics", "RAAS inhibitors", "Statins"], 0, "In refractory HF, negative inotropy may not be tolerated."),
      Q("stages", "Which drug class has shown no mortality benefit in HFpEF according to the lecture?", ["ACEi, ARB, ARNI and beta blockers", "Diuretics are proven to lower mortality", "Statins", "Antiplatelets"], 0, "HFpEF trials of these drugs did not lower death, so treatment targets congestion and BP."),
      Q("acute", "Acute pulmonary edema, BP 200/110, SpO2 86%. Order of drugs?", ["Oxygen/NIV, IV nitroglycerin, then IV loop diuretic", "IV metoprolol first", "Digoxin load", "IV fluids"], 0, "Lowering afterload rescues the heart fastest; diuresis follows once BP is controlled.")
    ]),

    Guide("guide3-stress", "Stress test agent and what to hold", "Exercise vs vasodilator vs dobutamine, and the meds to stop first", ["Cardiac Testing", "Cardiac Surgery"], [
      S("pick", "Pick the stress",
        Tbl(["Patient", "Stress"], [
          ["Can exercise, normal ECG", "Exercise ECG"],
          ["Can't exercise, or <strong>LBBB / pacemaker / digoxin</strong>", "<strong>Vasodilator</strong> (adenosine, regadenoson, dipyridamole) <strong>nuclear MPI</strong>"],
          ["Can't exercise <strong>and</strong> can't take a vasodilator (wheezing, high-grade AV block, caffeine today)", "<strong>Dobutamine</strong> (stress echo)"],
          ["Valve disease", "<strong>Dobutamine</strong> only"],
          ["Started exercise SPECT, can't reach workload", "<strong>Regadenoson during exercise</strong>"]
        ])),
      S("hold", "Hold before tests and procedures",
        Tbl(["Before", "Hold"], [
          ["Adenosine/dipyridamole", "<strong>Caffeine/xanthines 12 h</strong>, <strong>aminophylline 24 h</strong>, <strong>dipyridamole 48 h</strong>"],
          ["Exercise test", "Beta blockers can cause false negatives (can't reach rate-pressure product)"],
          ["Heart cath", "<strong>Metformin</strong> day of + 48 h after; ACEi/ARB/diuretics morning of; anticoagulation until INR &lt;1.5; NPO after midnight"],
          ["Contrast allergy", "Prednisone 50 mg at 13, 7, 1 h + diphenhydramine 50 mg at 1 h"],
          ["After CABG", "Avoid nephrotoxins: aminoglycosides, ACE inhibitors, contrast"]
        ]))
    ], [
      Q("pick", "A patient with a pacemaker, severe knee arthritis and no lung disease needs ischemia testing. Best stress?", ["Vasodilator nuclear MPI", "Exercise ECG", "Dobutamine with ECG only", "No test"], 0, "Paced rhythm ruins ST analysis and he cannot exercise, so vasodilator MPI is used."),
      Q("pick", "Can't exercise, active wheezing, needs stress testing. Which agent?", ["Dobutamine", "Adenosine", "Dipyridamole", "Regadenoson always"], 0, "Bronchospasm is a vasodilator contraindication, so dobutamine raises demand instead."),
      Q("hold", "Which drugs must be held before an adenosine stress test, and for how long?", ["Caffeine 12 h, aminophylline 24 h, dipyridamole 48 h", "Aspirin 7 days", "Statins 1 week", "Metformin 48 h"], 0, "Xanthines block adenosine receptors and dipyridamole raises adenosine levels too much."),
      Q("hold", "After CABG, which drug class does the lecture say to avoid to protect the kidneys?", ["ACE inhibitors (with aminoglycosides and contrast)", "Beta blockers", "Statins", "Aspirin"], 0, "ACEi lower glomerular pressure when the kidneys are already stressed by bypass.")
    ]),

    Guide("guide3-antithrombotic", "Antiplatelet vs anticoagulant vs lytic", "Plug vs mesh vs dissolve, P2Y12 picks, DAPT length", ["CAD Part III: Chest Pain Workup", "CAD Part IV: ACS", "CAD Part V: Pharmacology"], [
      S("types", "Three jobs",
        Tbl(["Type", "Does", "Remember", "Examples"], [
          ["<strong>Antiplatelet</strong>", "Blocks platelet activation/aggregation", "Stops the <strong>platelet plug</strong> growing", "Aspirin, clopidogrel, ticagrelor, prasugrel"],
          ["<strong>Anticoagulant</strong>", "Blocks clotting factors and fibrin", "Slows the <strong>fibrin mesh</strong>", "Heparin, enoxaparin, bivalirudin"],
          ["<strong>Fibrinolytic</strong>", "Breaks down fibrin in an existing clot", "<strong>Dissolves</strong> the mesh", "Tenecteplase, alteplase"]
        ])),
      S("p2y12", "P2Y12 picks",
        Tbl(["", "Clopidogrel", "Prasugrel", "Ticagrelor"], [
          ["Type", "Thienopyridine", "Thienopyridine", "Non-thienopyridine"],
          ["Load / daily", "300–600 / 75 mg", "60 / 10 mg (5 if &lt;60 kg)", "180 / 90 mg BID"],
          ["Use", "ACS, stable CAD PCI, stroke, PAD", "ACS with PCI", "ACS with PCI or medical"],
          ["Watch", "TTP (rare)", "No stroke/TIA; avoid ≥75; TTP", "Dyspnea, uric acid; aspirin ≤100 mg"]
        ]) + "<p><strong>DAPT length:</strong> ACS (with or without PCI) at least 12 months; stable CAD with PCI aspirin + clopidogrel 6 months.</p>")
    ], [
      Q("types", "Which drug actually dissolves an existing coronary clot?", ["Tenecteplase", "Heparin", "Clopidogrel", "Enoxaparin"], 0, "Only fibrinolytics break down fibrin already in the clot."),
      Q("p2y12", "A 79-year-old with a prior TIA has NSTEMI and will be managed medically. Which P2Y12 inhibitor fits the lecture best?", ["Ticagrelor (or clopidogrel)", "Prasugrel", "Alteplase", "None"], 0, "Prasugrel is out for prior TIA, age 75+, and medical management; ticagrelor covers medical ACS."),
      Q("p2y12", "Which P2Y12 inhibitor requires keeping aspirin at 100 mg or less?", ["Ticagrelor", "Clopidogrel", "Prasugrel", "All three"], 0, "Higher aspirin doses reduce ticagrelor's benefit."),
      Q("types", "Why are antiplatelets and an anticoagulant both used in ACS?", ["They attack different parts of the clot: the platelet plug and the fibrin mesh", "One reverses the other", "To dissolve the clot faster", "Only one is ever used"], 0, "A coronary clot is platelets held together by fibrin, so both pieces are targeted.")
    ])
  ]);
}());
