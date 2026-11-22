/*
  Medications: Heart failure & post-MI GDMT (Cardio Part 3). Source:
  heart-failure.md slides 99, 105-117, 127-137, 145-161, 162, 193; cad-part-5.md
  slides 52-54; cad-part-4.md slides 80-81; cad-part-2.md slides 39, 59;
  cad-part-3.md slide 123; coronary-angiogram.md slide 7; cardiac-surgery.md
  slide 50. Diuretics are their own group. Only append questions.
*/
(function () {
  "use strict";
  var H = window.DiseaseContent, M = window.MedContent;
  var Tbl = H.Tbl, HY = H.HY, Mn = H.Mn, Q = H.Q, L = H.L, Med = M.Med, ul = M.ul;

  window.CARDIO3_MEDS_HF = L("meds3-hf", "Heart failure & post-MI drugs", [

    Med("med3-acei", "ACE inhibitors (-pril)", "1st line in every HF stage; post-MI with EF ≤40%, HF, HTN, DM or anterior STEMI; cough and angioedema", ["Heart Failure", "CAD Part II: Prevention", "CAD Part III: Chest Pain Workup", "CAD Part IV: ACS", "CAD Part V: Pharmacology", "Cardiac Testing", "Cardiac Surgery"], {
      uses: Tbl(["Setting", "Plan"], [
        ["<strong>Heart failure</strong>", "<strong>1st line, all AHA stages</strong> if tolerated: ↑ survival, ↓ hospitalizations, ↓ symptoms, slows remodeling. Stage A/B: 1st-line antihypertensive"],
        ["<strong>After ACS</strong>", "Oral ACEi (ARB if not tolerated) within the first 24 h when <strong>LVEF ≤40%, HF, HTN, diabetes or anterior STEMI</strong>; modest benefit even in lower-risk MI; continue long term if high risk or low EF"],
        ["Stable CAD", "Indicated with diabetes or LV systolic dysfunction"],
        ["HFpEF", "Most are on ACEi/ARB for BP (better BP = better diastolic function); no mortality benefit shown"]
      ]) + "<p>Members: enalapril (Vasotec), lisinopril (Prinivil, Zestril), quinapril (Accupril), ramipril (Altace).</p>",
      moa: "<p>Blocks conversion of <strong>angiotensin I → II</strong> → less vasoconstriction (↓ afterload), less SNS activation, less aldosterone (less salt/water retention) → less remodeling. Bradykinin builds up (cough, angioedema; standard teaching).</p>",
      avoid: ul(["<strong>History of angioedema</strong>.", "<strong>Pregnancy</strong> (boxed warning: fetal injury/death).", "Renal failure, <strong>bilateral renal artery stenosis</strong>.", "Never with an ARB; stop it 3 days before starting an ARNI (Entresto).",
        "Little data for starting it in the ED for acute HF.", "Often held the morning of a heart cath; avoided as nephrotoxic right after CABG."]),
      se: ul(["<strong>Persistent dry cough</strong> → switch to an ARB.", "<strong>Angioedema</strong>.", "<strong>Hyperkalemia</strong>, hypotension, azotemia (↑ creatinine)."]),
      pearls: ul(["Start low, titrate by renal function and tolerance.", "Check BP, creatinine and potassium after starting and after each dose change.", "ACEi lowers BNP, so a chronic HF patient can have a normal BNP."]) +
        HY("ACEi: all HF stages, post-MI with low EF/HF/HTN/DM/anterior. Stop for cough (→ ARB) or angioedema (→ not ARB).")
    }, [
      Q("uses", "Day 1 after an anterior STEMI, EF 35%, BP 128/76, creatinine and K normal. Which drug should start now?", ["An ACE inhibitor", "Digoxin", "Diltiazem", "Ibuprofen"], 0, "ACEi after MI with low EF or anterior STEMI lowers mortality by limiting remodeling."),
      Q("se", "A patient on lisinopril for HFrEF has a nagging dry cough for 2 months. Best change?", ["Switch to an ARB", "Add a cough suppressant and continue", "Stop all RAAS drugs", "Switch to another ACE inhibitor"], 0, "Cough comes from bradykinin, which ARBs do not raise, and ARBs are equally effective in HF."),
      Q("avoid", "A woman on enalapril for HFrEF has a positive pregnancy test. Next step?", ["Stop enalapril as soon as possible", "Continue: benefit outweighs risk", "Halve the dose", "Switch to an ARB"], 0, "All RAAS drugs carry a boxed warning for fetal injury and death."),
      Q("se", "One week after starting ramipril, K is 6.1. Why?", ["Less aldosterone means the kidney keeps potassium", "Ramipril contains potassium", "Hemolysis is the only cause", "Ramipril blocks insulin"], 0, "Blocking angiotensin II lowers aldosterone, which normally excretes potassium."),
      Q("moa", "How do ACE inhibitors slow remodeling in HF?", ["They block angiotensin II, cutting vasoconstriction, SNS and aldosterone effects", "They raise heart rate", "They increase intracellular calcium", "They inhibit neprilysin"], 0, "Angiotensin II and aldosterone drive fibrosis and fluid retention, so blocking them protects the ventricle."),
      Q("avoid", "Which patient should not get an ACE inhibitor?", ["Prior lip and tongue swelling on lisinopril", "Diabetes with microalbuminuria", "HFrEF with EF 30%", "Anterior MI with EF 40%"], 0, "Angioedema history is an absolute contraindication."),
      Q("uses", "A patient with diabetes and stable angina has normal EF. Does the CAD lecture list an ACEi for him?", ["Yes: ACEi/ARB is indicated with diabetes or LV systolic dysfunction", "No, only with EF under 20%", "No, ACEi worsens angina", "Only if he is pregnant"], 0, "Diabetes is one of the CAD indications for an ACEi/ARB.")
    ]),

    Med("med3-arb", "ARBs (-sartan)", "Equal to ACEi for HF mortality; the swap for ACEi cough; NOT safe after ACEi angioedema", ["Heart Failure", "CAD Part II: Prevention", "CAD Part IV: ACS", "CAD Part V: Pharmacology", "Cardiac Testing"], {
      uses: ul(["HF when an <strong>ACEi is not tolerated (cough)</strong>; any stage; <strong>equally effective</strong> as ACEi for mortality.", "After ACS with high-risk features if ACEi not tolerated.", "BP control in CAD prevention (Thomas got an ARB for BP &lt;130/80).",
        "Members: candesartan, irbesartan, losartan, olmesartan, telmisartan, valsartan."]),
      moa: "<p>Blocks the <strong>angiotensin II receptor</strong> (AT1) → same downstream effects as ACEi, without bradykinin build-up.</p>",
      avoid: ul(["<strong>Angioedema</strong>: not considered a safe alternative after ACEi angioedema.", "<strong>Pregnancy</strong> (boxed warning).", "Never with an ACEi."]),
      se: ul(["Angioedema (Black patients may be at higher risk), hyperkalemia, hypotension."]),
      pearls: ul(["Same monitoring as ACEi: BP, creatinine, K.", "Valsartan is the ARB inside Entresto."]) + HY("ACEi cough → ARB. ACEi angioedema → NOT an ARB.")
    }, [
      Q("avoid", "A HFrEF patient had angioedema on lisinopril. Is losartan a safe swap?", ["No: ARBs are not considered safe after ACEi angioedema", "Yes, ARBs never cause angioedema", "Yes, at half dose", "Only with steroids"], 0, "ARBs can also cause angioedema, so the risk is too high after it happened once."),
      Q("uses", "How does an ARB compare to an ACEi for mortality in HF?", ["Equally effective", "Much worse", "Only helps symptoms", "Better in every trial"], 0, "ARBs block the same angiotensin II effects, so they lower mortality similarly."),
      Q("avoid", "A patient is on lisinopril and valsartan for HF. Problem?", ["Avoid ACEi + ARB together", "None: it is the preferred combo", "Only a problem with aspirin", "Only in pregnancy"], 0, "Double RAAS block raises hyperkalemia, hypotension and kidney injury without benefit."),
      Q("moa", "Why do ARBs not cause the ACEi cough?", ["They block the angiotensin II receptor and do not raise bradykinin", "They are not absorbed in the lungs", "They are bronchodilators", "They block histamine"], 0, "ACE also breaks down bradykinin; ARBs leave ACE alone.")
    ]),

    Med("med3-arni", "Sacubitril/valsartan (Entresto, ARNI)", "HFrEF: 20% fewer HF hospitalizations than ACEi; 3-day ACEi washout first", ["Heart Failure"], {
      uses: ul(["<strong>HFrEF</strong>: recommended when taking and tolerating a max-dose ACEi or ARB; some start it first-line instead.", "<strong>~20% fewer HF hospitalizations</strong> than an ACEi alone (trial stopped early for benefit)."]),
      moa: "<p><strong>Valsartan</strong> blocks RAAS; <strong>sacubitril</strong> blocks <strong>neprilysin</strong>, the enzyme that breaks down <strong>natriuretic peptides</strong> → more natriuresis and vasodilation.</p>",
      avoid: ul(["<strong>History of angioedema</strong>.", "<strong>GFR &lt;30</strong>.", "<strong>Pregnancy</strong> (boxed warning).", "<strong>Stop any ACE inhibitor or ARB 3 days before</strong> starting (washout) to lower angioedema, hypotension and hyperkalemia risk."]),
      se: ul(["Hypotension, hyperkalemia, angioedema."]),
      pearls: ul(["Neprilysin also breaks down bradykinin, which is why ACEi + neprilysin inhibition causes angioedema.", "BNP rises on sacubitril (it is a neprilysin substrate), so NT-proBNP is used to follow these patients (standard teaching)."]) +
        HY("ACEi → Entresto: stop ACEi, wait 3 days, then start. Not if GFR < 30 or prior angioedema.")
    }, [
      Q("avoid", "A patient on lisinopril 40 mg is switching to Entresto. When can he start it?", ["3 days after his last lisinopril dose", "Same day, together", "After 3 weeks", "Only after a cath"], 0, "Overlapping ACEi and neprilysin inhibition raises bradykinin and angioedema risk, hence the 3-day washout."),
      Q("moa", "What does sacubitril add to valsartan?", ["Blocks neprilysin so natriuretic peptides stay higher", "Blocks aldosterone receptors", "Inhibits the If current", "Blocks SGLT2"], 0, "Keeping natriuretic peptides around promotes sodium loss and vasodilation."),
      Q("avoid", "Which patient should not get sacubitril/valsartan?", ["HFrEF with eGFR 22", "HFrEF with EF 30% on max ACEi", "HFrEF with K 4.2", "HFrEF NYHA II"], 0, "GFR below 30 is a contraindication in the lecture."),
      Q("uses", "Compared with an ACE inhibitor alone, what did ARNI show in HFrEF?", ["About 20% fewer HF hospitalizations", "No difference", "More deaths", "Benefit only in HFpEF"], 0, "The trial stopped early because the ARNI arm did better.")
    ]),

    Med("med3-bb-hf", "Beta blockers for HFrEF (carvedilol, bisoprolol, metoprolol succinate)", "Lower mortality and raise EF in stable HF; never start in decompensated HF; start low, titrate slowly", ["Heart Failure", "CAD Part IV: ACS", "CAD Part V: Pharmacology"], {
      uses: ul(["<strong>Stable HF</strong>, AHA <strong>stage B and C</strong> (B: add-on for persistent HTN).", "↓ mortality (fewer arrhythmias and sudden deaths), ↑ EF, fewer symptoms.", "After MI with EF &lt;50%: metoprolol succinate, carvedilol or bisoprolol."]),
      moa: "<p>Slow HR → <strong>longer diastolic filling</strong>, less SNS toxicity on the myocardium → EF improves over months.</p>",
      avoid: ul(["<strong>Acutely decompensated HF</strong>: hold.", "Cardiogenic shock.", "Severe HF (stage D): stage D gets everything from A-C except the BB.", "Chronic pulmonary disease / bronchospasm (non-selective)."]),
      se: ul(["Bradycardia, hypotension, bronchospasm (non-cardioselective).", "Can feel worse for a few weeks while titrating (standard teaching)."]),
      pearls: ul(["<strong>Only these three</strong> beta blockers have HFrEF mortality data: metoprolol <strong>succinate</strong> (not tartrate), carvedilol, bisoprolol.", "Titrate gradually so the patient tolerates it.", "Newly added BB is a classic trigger of acute decompensation."]) +
        Mn("HF beta blockers", "\"Can Be Mighty\": Carvedilol, Bisoprolol, Metoprolol succinate.")
    }, [
      Q("avoid", "A HFrEF patient arrives with acute pulmonary edema, cool extremities and BP 88/60. His home carvedilol?", ["Hold it during decompensation", "Double the dose", "Switch to IV metoprolol", "Add verapamil"], 0, "In a low-output state, beta blockade further cuts contractility and can push him into shock."),
      Q("uses", "Which beta blocker is NOT one of the HFrEF mortality-proven agents?", ["Atenolol", "Carvedilol", "Bisoprolol", "Metoprolol succinate"], 0, "Only metoprolol succinate, carvedilol and bisoprolol have the HF outcome data."),
      Q("moa", "How does a beta blocker eventually raise EF in HFrEF?", ["Slower HR lengthens filling and blocks chronic sympathetic damage", "It is a positive inotrope", "It is a diuretic", "It raises intracellular calcium"], 0, "Chronic SNS activation remodels the heart; blocking it lets the ventricle recover."),
      Q("pearls", "Why is the HF beta blocker started at a low dose and titrated slowly?", ["Early negative inotropy can worsen symptoms before benefit appears", "It is very expensive", "To avoid hyperkalemia", "It is renally cleared"], 0, "Gradual titration lets the patient tolerate the initial drop in contractility."),
      Q("uses", "Stage D refractory HF: which stage C drug class is usually removed?", ["Beta blockers", "Diuretics", "ACE inhibitors", "Statins"], 0, "In stage D the failing heart may not tolerate negative inotropy.")
    ]),

    Med("med3-mra", "Aldosterone antagonists (spironolactone, eplerenone)", "Add-on for stage C-D HFrEF and post-MI LV dysfunction; preferred diuretic in HFpEF; watch potassium", ["Heart Failure"], {
      uses: ul(["<strong>Add-on</strong> for moderate-severe HF (stage C and D) not controlled on other therapy; severe LV systolic dysfunction.", "Improves outcomes in HF <strong>after MI</strong>.",
        "<strong>HFpEF</strong>: the <strong>preferred diuretic</strong>; loops or thiazides only if K does not allow it."]),
      moa: "<p>Competitively blocks <strong>aldosterone</strong> in the distal tubule → Na<sup>+</sup> and water out, <strong>K<sup>+</sup> kept</strong>. Also blocks aldosterone-driven fibrosis (standard teaching).</p>",
      avoid: ul(["<strong>Hyperkalemia</strong>.", "Renal impairment, high K intake, and other K-raising drugs (<strong>ACEi, ARB, NSAIDs</strong>) raise the risk."]),
      se: ul(["<strong>Hyperkalemia</strong>, renal failure.", "Spironolactone: <strong>gynecomastia</strong>, menstrual abnormalities, impotence, ↓ libido (eplerenone less, standard teaching).", "Hypertriglyceridemia."]),
      pearls: ul(["Check K <strong>before starting</strong> and monitor closely.", "Amiloride and triamterene are the other K-sparing diuretics (Na channel blockers), in the diuretics group."]) +
        HY("Spironolactone: K goes up, breasts can grow. Eplerenone = fewer hormone effects.")
    }, [
      Q("se", "A man on spironolactone for HFrEF develops painful breast enlargement. Best swap?", ["Eplerenone", "Furosemide alone", "Amiloride", "Stop all HF drugs"], 0, "Eplerenone is more selective for the aldosterone receptor, so fewer hormonal effects."),
      Q("avoid", "Before starting spironolactone in a patient on lisinopril, which lab matters most?", ["Potassium (and kidney function)", "Lipase", "TSH", "Uric acid"], 0, "Both drugs raise K, so hyperkalemia is the main danger."),
      Q("uses", "A HFpEF patient with leg edema needs a diuretic. Which type does the lecture prefer?", ["Potassium-sparing (aldosterone antagonist)", "High-dose loop", "Thiazide plus loop", "Osmotic"], 0, "HFpEF hearts depend on preload, and over-diuresis drops output, so gentler K-sparing drugs come first."),
      Q("avoid", "A HFrEF patient on spironolactone and losartan starts daily naproxen for knee pain. Main risk?", ["Hyperkalemia and kidney injury", "Hypokalemia", "Bradycardia", "Hypoglycemia"], 0, "NSAIDs reduce renal K excretion and kidney perfusion on top of two K-raising drugs."),
      Q("moa", "Why does spironolactone raise potassium?", ["It blocks aldosterone, which normally swaps Na in for K out", "It contains potassium", "It blocks insulin", "It acts in the loop of Henle"], 0, "Without aldosterone effect, the distal tubule stops secreting potassium.")
    ]),

    Med("med3-sglt2", "SGLT2 inhibitors (dapagliflozin, empagliflozin)", "Lower mortality and HF progression in HFrEF with or without diabetes; also for T2DM with ASCVD/HF/CKD", ["Heart Failure", "CAD Part II: Prevention", "CAD Part IV: ACS"], {
      uses: ul(["<strong>HFrEF, NYHA II-IV, with or without diabetes</strong> (DAPA-HF: dapagliflozin ↓ mortality and HF progression).", "<strong>T2DM with ASCVD, HF or CKD</strong>: GLP-1 RA and/or SGLT2i with proven CV/kidney benefit, regardless of A1c or metformin use.",
        "Members: dapagliflozin (Farxiga), empagliflozin (Jardiance)."]),
      moa: "<p>Blocks SGLT2 in the proximal tubule → glucose and sodium lost in urine (osmotic diuresis, natriuresis) → lower preload and BP (standard teaching).</p>",
      avoid: ul(["Recurrent genital/urinary infections.", "Volume depletion/hypotension.", "Foot ulcers or amputation risk."]),
      se: ul(["Frequent urination.", "<strong>Urinary and groin (genital) infections</strong>.", "Hypotension.", "↑ risk of <strong>foot amputation</strong>.", "Euglycemic DKA (standard teaching)."]),
      pearls: ul(["Benefit in HF does not need diabetes.", "Listed as a 2nd-line add-on for HFrEF stage C in the lecture's stage table."]) + HY("SGLT2i: helps HF even without diabetes. Watch genital infections, amputations.")
    }, [
      Q("uses", "A non-diabetic man with HFrEF (EF 30%, NYHA II) is on carvedilol, Entresto and spironolactone. Which add-on lowers mortality?", ["Dapagliflozin", "Digoxin", "Diltiazem", "Nifedipine"], 0, "DAPA-HF showed SGLT2 inhibition lowers death and HF progression with or without diabetes."),
      Q("se", "A woman on empagliflozin has her third vulvovaginal yeast infection. Link?", ["Glucose in the urine feeds genital infections", "It suppresses immunity", "It is unrelated", "It lowers estrogen"], 0, "SGLT2 inhibitors spill glucose into the urine."),
      Q("uses", "A patient with T2DM and prior MI has an A1c of 6.8% on metformin. Should an SGLT2 inhibitor or GLP-1 RA be added?", ["Yes: indicated for ASCVD benefit regardless of A1c", "No, A1c is at goal", "Only if A1c is above 9%", "Only after stopping metformin"], 0, "These drugs are chosen for heart and kidney protection, not only glucose."),
      Q("se", "A diabetic with a nonhealing foot ulcer and PAD: which HF add-on raises a specific concern?", ["SGLT2 inhibitor (amputation risk)", "Hydralazine", "Ivabradine", "Spironolactone"], 0, "The lecture lists increased foot amputation risk with SGLT2 inhibitors.")
    ]),

    Med("med3-hydralazine-isdn", "Hydralazine + isosorbide dinitrate (BiDil)", "HFrEF when ACEi/ARB not tolerated, and added for Black patients with stage C-D HFrEF", ["Heart Failure"], {
      uses: ul(["HFrEF (stage B, C, D) <strong>unable to take ACEi or ARB</strong>: hyperkalemia, cough, angioedema, hypotension or worsening renal function.", "<strong>Added for Black patients</strong> with HFrEF stage C and D.", "Mortality benefit, less than ACEi; some studies show more benefit in Black patients."]),
      moa: "<p><strong>Hydralazine</strong>: direct <strong>arteriolar</strong> dilator (↓ afterload). <strong>Isosorbide dinitrate</strong>: mostly <strong>venous</strong> dilator (↓ preload) with some arterial effect.</p>",
      avoid: ul(["<strong>PDE-5 inhibitors</strong> (sildenafil, tadalafil, vardenafil): severe hypotension."]),
      se: ul(["Hypotension, bradycardia, nausea/vomiting, diaphoresis.", "Headache (nitrate); drug-induced lupus with hydralazine (standard teaching)."]),
      pearls: ul(["Works on both sides: hydralazine unloads the arteries, the nitrate unloads the veins.", "Good choice when kidneys or K block RAAS drugs."]) + HY("Can't take ACEi/ARB (K, kidneys, angioedema) → hydralazine + nitrate.")
    }, [
      Q("uses", "HFrEF patient had angioedema on an ACEi and his K runs 5.8. Which vasodilator combo fits?", ["Hydralazine + isosorbide dinitrate", "An ARB", "Sacubitril/valsartan", "Spironolactone"], 0, "It lowers afterload and preload without touching RAAS, so no angioedema or K rise."),
      Q("uses", "A Black patient with HFrEF stage C is on optimal ACEi, beta blocker and diuretic but still symptomatic. Add-on in the lecture?", ["Hydralazine + isosorbide dinitrate", "Diltiazem", "Clopidogrel", "Ivabradine only if HR under 60"], 0, "Adding BiDil to standard therapy is recommended for Black patients with stage C-D HFrEF."),
      Q("moa", "What does each part of BiDil do?", ["Hydralazine dilates arterioles, isosorbide dinitrate mainly dilates veins", "Both block RAAS", "Hydralazine is a diuretic, nitrate an inotrope", "Both slow the heart"], 0, "Lowering both afterload and preload unloads the failing ventricle."),
      Q("avoid", "A man on BiDil asks about sildenafil. Answer?", ["Contraindicated: severe hypotension with the nitrate", "Fine with food", "Fine if he skips hydralazine", "Only tadalafil is a problem"], 0, "The nitrate in BiDil plus a PDE-5 inhibitor can drop BP dangerously.")
    ]),

    Med("med3-ivabradine", "Ivabradine", "Slows the SA node (If current); lowers mortality only if HR stays above 75 on proper therapy", ["Heart Failure"], {
      uses: ul(["HFrEF on appropriate therapy with <strong>HR &gt;75</strong> bpm: shown to lower mortality.", "HR &lt;75 on therapy: no mortality benefit.", "2nd-line add-on for HFrEF stage C."]),
      moa: "<p>Selective inhibitor of the SA node <strong>\"funny\" current (I<sub>f</sub>)</strong> → slower HR without lowering contractility or BP.</p>",
      avoid: ul(["HR already &lt;75 on therapy (no benefit).", "Not in sinus rhythm such as AF: works on the SA node (standard teaching).", "Bradycardia (standard teaching)."]),
      se: ul(["Bradycardia; luminous visual phenomena (phosphenes) (standard teaching)."]),
      pearls: ul(["Pure rate drug: use when the beta blocker is maxed but HR is still high."]) + HY("Ivabradine: If current, HR > 75 only.")
    }, [
      Q("uses", "HFrEF on max carvedilol, Entresto, spironolactone and dapagliflozin; sinus rhythm at 84. Which drug targets the remaining problem?", ["Ivabradine", "Digoxin", "Verapamil", "Amlodipine"], 0, "A resting HR above 75 despite therapy is exactly where ivabradine lowered mortality."),
      Q("uses", "Same patient but HR is 68. Add ivabradine?", ["No: no mortality benefit when HR is below 75", "Yes, always", "Yes, double dose", "Only with verapamil"], 0, "The benefit came from slowing hearts that were still fast."),
      Q("moa", "Where does ivabradine act?", ["SA node funny current (If)", "AV node calcium channels", "Beta-1 receptors", "Na-K ATPase"], 0, "Blocking If slows SA firing without negative inotropy.")
    ]),

    Med("med3-digoxin", "Digoxin", "Late stage C-D HFrEF symptoms and AF rate control; fewer hospitalizations, no mortality benefit; never in acute HF", ["Heart Failure", "Cardiac Testing"], {
      uses: ul(["HFrEF with <strong>continued symptoms</strong> despite ACEi/ARB/ARNI and diuretic: improves symptoms, fewer hospitalizations, <strong>no mortality benefit</strong>.", "<strong>Rate control in HF with AF</strong>.", "Stage D: considered for rate control and inotropy, <strong>HFrEF only, not HFpEF</strong>."]),
      moa: "<p>Inhibits the <strong>Na-K-ATPase</strong> → more intracellular Ca<sup>2+</sup> → stronger contraction, better CO; also slows AV node (vagal, standard teaching).</p>",
      avoid: ul(["Prior <strong>VT or VF</strong>.", "<strong>Acute (decompensated) HF</strong>: contraindicated.", "<strong>HFpEF</strong>: caution, more calcium in myocytes worsens diastolic relaxation."]),
      se: ul(["<strong>Digoxin toxicity</strong>: GI (nausea, anorexia), neuro (confusion, visual changes), systemic symptoms.", "Tachy- and bradyarrhythmias."]),
      pearls: ul(["Other inotropes (milrinone, vesnarinone, xamoterol) raise mortality with long-term use (arrhythmogenic).", "Digoxin makes the exercise ECG uninterpretable: needs imaging or chemical stress.", "Ranolazine raises digoxin levels; hypokalemia makes toxicity worse (standard teaching)."]) +
        HY("Digoxin: symptoms and AF rate, not survival. Never in acute HF or HFpEF.")
    }, [
      Q("uses", "Digoxin's effect on mortality in HFrEF?", ["None: it improves symptoms and hospitalizations only", "Lowers mortality by 30%", "Raises mortality always", "Only lowers mortality in HFpEF"], 0, "It helps the patient feel better and stay out of the hospital, but survival does not change."),
      Q("avoid", "Why is digoxin used with caution in HFpEF?", ["More intracellular calcium worsens diastolic relaxation", "It causes hyperkalemia", "It lowers EF", "It is renally inactive"], 0, "HFpEF is a stiff ventricle problem, and calcium loading stiffens it further."),
      Q("se", "An elderly woman on digoxin has nausea, confusion and yellow-tinged vision. Concern?", ["Digoxin toxicity", "Statin myopathy", "ACEi angioedema", "Ticagrelor dyspnea"], 0, "GI and neuro symptoms with visual changes are classic for digoxin toxicity."),
      Q("avoid", "A patient with acute decompensated HF arrives on no medicines. Start digoxin in the ED?", ["No: contraindicated in acute HF", "Yes, IV load now", "Yes, with a beta blocker", "Only if BP is high"], 0, "The lecture lists digoxin, BBs and CCBs as contraindicated in acute HF treatment."),
      Q("moa", "How does digoxin raise contractility?", ["Na-K-ATPase inhibition raises intracellular calcium", "Beta-1 stimulation", "PDE-3 inhibition", "Calcium channel blockade"], 0, "Less Na gradient means the Na/Ca exchanger removes less calcium, so more is available to contract."),
      Q("pearls", "Why are milrinone-type inotropes not used long term in HF?", ["They raise mortality because they are arrhythmogenic", "They are oral only", "They cause hyperkalemia", "They block RAAS"], 0, "Pushing a failing heart harder over months triggers arrhythmias and death.")
    ])
  ]);
}());
