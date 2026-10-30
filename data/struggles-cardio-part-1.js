/* Struggles (Cardio Part 1): Anna's starred Quizlet cards, regrouped by idea.
   Each group = one short targeted Learn card, then multiple-choice questions on it.
   Question ids are "<group id>|<index>": only append questions, never insert or reorder.
   Checked against the lecture slides in source-material/cardio-part-1/text/. */
(function () {
  "use strict";

  function hy(x) { return '<div class="box-hy"><span class="lbl">High yield</span>' + x + '</div>'; }
  function mn(x) { return '<div class="box-mnemonic"><span class="lbl">Mnemonic</span>' + x + '</div>'; }
  function fix(x) { return '<div class="box-fix"><span class="lbl">Your card, fixed</span>' + x + '</div>'; }
  function tbl(head, rows) {
    return '<table class="learn-table"><tr>' + head.map(function (h) { return '<th>' + h + '</th>'; }).join('') + '</tr>' +
      rows.map(function (r) { return '<tr>' + r.map(function (d) { return '<td>' + d + '</td>'; }).join('') + '</tr>'; }).join('') + '</table>';
  }
  // Q(prompt, right answer, [3 wrong answers], explanation, optional hint)
  function Q(q, a, w, x, h) { var item = { q: q, a: a, w: w, x: x }; if (h) item.h = h; return item; }

  var CM = "Cardiomyopathies";
  var LIP = "Lipid Physiology and Dyslipidemia";
  var INTRO = "Hypertension Intro";
  var WORKUP = "HTN Diagnosis, Measurement, End Organ Damage, and Workup";
  var TX = "Hypertension Treatment";
  var EM = "Hypertension Emergencies";

  window.CARDIO_PART1_STRUGGLES = {
    corrections: [
      { source: EM, card: "Subarachnoid hemorrhage: treated well with burr hole evacuation", fix: "The slide (Hypertensive Crisis, slide 14) does label it subarachnoid hemorrhage, but everything it describes (blood between the skull and brain, a concave crescent following the skull, burr hole evacuation) is a <strong>subdural hematoma</strong>. A true subarachnoid hemorrhage is blood under the arachnoid (usually a ruptured aneurysm) and is managed with BP control (nicardipine DOC) plus treating the aneurysm, not a burr hole. If an exam question copies the slide word for word, answer what the slide says." },
      { source: TX, card: "Inspira is more selective…", fix: "The drug is <strong>eplerenone (Inspra)</strong>. It is more selective for the aldosterone receptor, so it has fewer endocrine side effects than spironolactone." },
      { source: EM, card: "Nitroglycerin: not used with PDE-F inhibitors", fix: "<strong>PDE-5</strong> inhibitors (sildenafil, tadalafil), used for erectile dysfunction or pulmonary HTN. Together with nitrates they cause very severe hypotension." },
      { source: TX, card: "Alpha blocker: not used when both HTN and BPH are present", fix: "It's the opposite. Alpha-1 blockers are <strong>not appropriate monotherapy</strong> for HTN, but they are <strong>often used when HTN and BPH both need treatment</strong>, because one drug lowers BP and relaxes the prostate." },
      { source: LIP, card: "LDL borderline: 100-159 mg/dL", fix: "<strong>Borderline high is 130-159.</strong> 100-129 is its own category, \"near optimal\". Optimal is under 100, high is 160-189, and very high is 190 or more." },
      { source: TX, card: "Non-DHP CCB: do not give with beta-blocker", fix: "The slide says to <strong>use caution</strong> with a beta-blocker (both slow the SA and AV nodes, so watch for bradycardia and heart block). It isn't an absolute ban. Do not use non-DHPs in <strong>acutely decompensated HFrEF</strong>, sick sinus syndrome, or 2nd/3rd degree AV block." },
      { source: TX, card: "CCB overdose: IV resuscitation may not work", fix: "IV fluids are still the first step for the low BP. What \"may not be effective\" on the slide is <strong>atropine</strong> for the bradycardia. Next come IV calcium, glucagon, pressors, high-dose insulin, and activated charcoal." },
      { source: EM, card: "Goal BP before intra-atrial (IA) fibrinolysis", fix: "IA stands for <strong>intra-arterial</strong>. The goal before IV or intra-arterial tPA is still under 185/110." },
      { source: INTRO, card: "Primary HTN cardiac malfunction", fix: "The slide says cardiac <strong>malformation</strong>: something that developed abnormally before birth (a less elastic aorta, or fewer capillaries from prematurity), which leads to HTN in adulthood." },
      { source: TX, card: "Potassium sparing diuretic indication: HFrEF, ascites", fix: "Those indications belong to the <strong>aldosterone antagonists</strong> (spironolactone, eplerenone). Triamterene and amiloride are also potassium sparing, but they work differently (they block sodium channels) and don't have those indications." },
      { source: EM, card: "Nitroprusside MOA: lower peripheral venous resistance", fix: "It dilates veins <em>and</em> arterioles, which lowers <strong>peripheral vascular resistance (PVR)</strong> and venous return. It works within 2 minutes and wears off within about 10 minutes." },
      { source: TX, card: "Mixed alpha and beta blockers shown to reduce mortality in HFrEF", fix: "The slide credits <strong>carvedilol</strong> specifically with the mortality benefit in systolic dysfunction and HFrEF. Labetalol is the IV and pregnancy drug." },
      { source: TX, card: "B-blocker indication: DOC after MI, compensated HFrEF, symptomatic LV dysfunction", fix: "Add <strong>CAD and A-fib</strong>, and LV dysfunction counts whether it's <strong>symptomatic or asymptomatic</strong> (EF under 50%)." },
      { source: EM, card: "Labetalol: not used in HF", fix: "Specifically <strong>acute</strong> heart failure. Its relative carvedilol is a mainstay of chronic HFrEF." },
      { source: CM, card: "S4: Valsalva strain from a squat", fix: "These are <strong>two separate</strong> maneuvers: listen while the patient does a Valsalva strain, <em>or</em> while they stand up from a squat." },
      { source: CM + " / " + TX + " / " + EM, card: "Small typos", fix: "\"Output tract\" means <strong>outflow</strong> tract. \"Rental\" artery stenosis means <strong>renal</strong>. \"Neins\" means <strong>veins</strong>. \"Boderline\" means borderline." }
    ],

    groups: [
      // ------------------------------------------------------------------ Cardiomyopathies
      {
        id: "hcm-lvot",
        source: CM,
        title: "HCM with LVOT obstruction: the murmur and the drugs to avoid",
        learn:
          '<p>In HCM the thick septum bulges into the <strong>left ventricular outflow tract (LVOT)</strong>. The <strong>smaller or more forceful</strong> the LV gets, the narrower that outflow gets.</p>' +
          tbl(["Feature", "What to know"], [
            ["Murmur", "<strong>Harsh crescendo-decrescendo systolic</strong> murmur, best at the <strong>apex and left lower sternal border</strong>. A mitral regurg murmur can also be present"],
            ["First-line drug", "<strong>Beta-blocker</strong> (metoprolol). Use a non-DHP CCB (verapamil, diltiazem) if a BB is contraindicated, such as asthma"],
            ["Refractory", "Surgical septal myectomy or alcohol septal ablation"]
          ]) +
          '<p><strong>Avoid</strong> anything that empties the LV or squeezes it harder:</p>' +
          tbl(["Avoid", "Examples", "Why it worsens obstruction"], [
            ["Positive inotropes", "Dopamine, dobutamine, digoxin", "Stronger squeeze pulls the septum and mitral leaflet together"],
            ["Vasodilators", "DHP CCBs (amlodipine, nifedipine), ACEi/ARBs, nitrates", "Less preload/afterload means a smaller LV cavity"],
            ["Diuretics", "Furosemide", "Less preload means a smaller LV cavity"]
          ]) +
          hy('Same logic shows up in Hypertensive Crisis: <strong>IV nicardipine (a DHP CCB) is contraindicated in HCM</strong>.') +
          mn('<strong>"Don\'t make it smaller or stronger."</strong> Inotropes make it stronger. Vasodilators and diuretics make it smaller.'),
        questions: [
          Q("What does the murmur of LVOT obstruction in HCM sound like?", "Harsh crescendo-decrescendo systolic murmur", ["Blowing holosystolic murmur", "Low-pitched diastolic rumble", "High-pitched decrescendo diastolic murmur"], "HCM with LVOT obstruction gives a harsh crescendo-decrescendo systolic murmur, like aortic stenosis but heard lower on the chest."),
          Q("Where is the LVOT obstruction murmur heard best?", "Apex and left lower sternal border", ["Right 2nd intercostal space radiating to the carotids", "Left 2nd intercostal space", "Left axilla"], "The slide says apex and LLSB. Aortic stenosis is the one at the right upper sternal border radiating to the carotids."),
          Q("A patient with HCM and significant LVOT obstruction is in heart failure. Which drug should be avoided?", "Digoxin", ["Metoprolol", "Verapamil", "Diltiazem"], "Digoxin is a positive inotrope: a stronger squeeze narrows the outflow tract. BBs and non-DHP CCBs are the treatment."),
          Q("Why are diuretics like furosemide avoided in HCM with LVOT obstruction?", "Less preload makes the LV cavity smaller, which narrows the outflow tract", ["They cause hyperkalemia that triggers arrhythmias", "They increase contractility", "They raise afterload"], "Diuretics drop preload. An underfilled LV has a smaller cavity, so the septum and mitral leaflet obstruct more.", "Think about what happens to the size of the LV when it has less blood in it."),
          Q("Which antihypertensive is a poor choice for a patient with HCM and LVOT obstruction?", "Amlodipine", ["Metoprolol", "Verapamil", "Atenolol"], "Amlodipine is a DHP CCB, a vasodilator. Vasodilators (DHP CCBs, ACEi/ARBs, nitrates) worsen the obstruction."),
          Q("What is first-line drug therapy for symptoms from LVOT obstruction in HCM?", "A beta-blocker such as metoprolol", ["An ACE inhibitor such as lisinopril", "A loop diuretic such as furosemide", "Digoxin"], "A beta-blocker slows the heart (more filling time) and weakens the squeeze, both of which open the outflow tract."),
          Q("A patient with HCM and LVOT obstruction also has asthma. What replaces the beta-blocker?", "A non-DHP CCB such as verapamil or diltiazem", ["Nifedipine", "Hydralazine", "Nitroglycerin"], "Non-DHP CCBs are used when a BB is contraindicated (like asthma) or not tolerated. Nifedipine is a DHP vasodilator and should be avoided."),
          Q("Which IV hypertensive emergency drug is contraindicated in hypertrophic cardiomyopathy?", "Nicardipine", ["Esmolol", "Labetalol", "Hydralazine for eclampsia"], "Nicardipine is a DHP CCB vasodilator. The slides list aortic stenosis, HFrEF, and HCM as contraindications.")
        ]
      },
      {
        id: "extra-sounds",
        source: CM,
        title: "S4 and S3: Tennessee vs Kentucky",
        learn:
          tbl(["", "S4", "S3"], [
            ["Nickname", "Atrial diastolic gallop, <strong>\"Tennessee\"</strong>", "Ventricular diastolic gallop, <strong>\"Kentucky\"</strong>"],
            ["Cardiomyopathy", "<strong>Hypertrophic (HCM)</strong>: stiff, thick ventricle", "<strong>Dilated (DCM)</strong>: big, floppy, volume overloaded ventricle"],
            ["Timing", "<strong>End of diastole, right before S1</strong> (ta-LUB-dub)", "<strong>Early diastole, right after S2</strong> (lub-DUB-ta)"],
            ["Pitch", "Low", "Low"],
            ["How to hear it", "Apex, <strong>bell</strong>", "Apex, bell, patient in <strong>left lateral</strong> position"],
            ["Make it louder", "Listen during a <strong>Valsalva strain</strong>, or as the patient <strong>stands up from a squat</strong>", "Louder when the patient is tachycardic"]
          ]) +
          '<p>S4 is the atria kicking blood into a ventricle too stiff to stretch, so it happens late, when the atria contract. S3 is blood rushing into an already full, dilated ventricle early in diastole.</p>' +
          mn('<strong>TEN-nes-see</strong>: the extra beat comes first (before S1). <strong>Ken-TUC-ky</strong>: the extra beat comes last (after S2). And <strong>S4 = Stiff</strong> (HCM), <strong>S3 = Stretched</strong> (DCM).') +
          fix('Valsalva strain and standing from a squat are <strong>two separate</strong> maneuvers. Either one can bring out the S4.') +
          '<p>Restrictive CM can have <strong>either</strong> gallop (S3 or S4). Peripartum CM acts like DCM and has an S3.</p>',
        questions: [
          Q("When in the cardiac cycle does an S4 occur?", "At the end of diastole, just before S1", ["Early diastole, just after S2", "Mid-systole", "Immediately after S1"], "S4 is the atrial kick into a stiff ventricle, so it comes at the very end of diastole: ta-LUB-dub."),
          Q("Which cardiomyopathy is classically associated with an S4?", "Hypertrophic cardiomyopathy", ["Dilated cardiomyopathy", "Peripartum cardiomyopathy", "Takotsubo cardiomyopathy"], "S4 = Stiff. The thick, noncompliant HCM ventricle resists the atrial kick."),
          Q("What is the S4 nicknamed?", "The \"Tennessee\" gallop", ["The \"Kentucky\" gallop", "The opening snap", "The ejection click"], "S4 is Tennessee (TEN-nes-see: the extra beat comes first). S3 is Kentucky."),
          Q("How do you best hear an S4?", "At the apex with the bell", ["At the left 2nd intercostal space with the diaphragm", "At the right upper sternal border with the diaphragm", "At the base with the patient leaning forward"], "S4 is low pitched, so use the bell, at the apex."),
          Q("Which maneuver can augment an S4 per the Cardiomyopathies lecture?", "Having the patient stand up from a squat", ["Having the patient squat from standing", "Passive leg raise", "Sustained handgrip"], "The slide lists Valsalva strain or standing from a squat. Squatting and leg raise do the opposite (more venous return).", "Both maneuvers the slide lists drop venous return."),
          Q("An S3 (\"Kentucky\") is classically heard in which cardiomyopathy?", "Dilated cardiomyopathy", ["Hypertrophic cardiomyopathy", "Restrictive cardiomyopathy only", "Arrhythmogenic RV cardiomyopathy"], "S3 = Stretched. Blood rushes into a big, volume overloaded ventricle early in diastole: lub-DUB-ta."),
          Q("You hear a low-pitched extra sound right after S2 at the apex in a patient lying on their left side. What is it?", "S3", ["S4", "Opening snap of mitral stenosis", "Physiologic split S2"], "Right after S2, low pitched, apex, left lateral position: that's an S3 (ventricular gallop)."),
          Q("Which cardiomyopathy can present with either an S3 or an S4?", "Restrictive cardiomyopathy", ["Hypertrophic cardiomyopathy", "Dilated cardiomyopathy", "Takotsubo cardiomyopathy"], "The RCM slide lists a gallop rhythm (S3 or S4) plus regurgitant murmurs.")
        ]
      },
      {
        id: "cm-ekg",
        source: CM,
        title: "EKG clues for each cardiomyopathy",
        learn:
          '<p>No EKG <em>diagnoses</em> a cardiomyopathy. It only suggests one, and the <strong>echo</strong> confirms it.</p>' +
          tbl(["Cardiomyopathy", "EKG clue", "Why"], [
            ["<strong>HCM</strong>", "LVH + abnormal P waves; <strong>deep, narrow \"dagger-like\" Q waves</strong>; apical variant gives giant negative T waves", "Thick LV makes big voltage; the stiff LV backs up into the atria, so they enlarge too (abnormal P waves)"],
            ["<strong>DCM</strong>", "<strong>Sinus tach and LBBB</strong> most common; <strong>A-fib</strong> second", "Failing heart runs fast; the stretched LV disrupts the conduction system; dilated atria fibrillate"],
            ["<strong>RCM</strong>", "<strong>Decreased QRS amplitude</strong> (low voltage)", "Infiltrated, stiff muscle (e.g., amyloid) conducts less voltage"],
            ["<strong>Myocarditis</strong>", "<strong>Tachycardia + nonspecific ST and T wave changes</strong>", "Inflamed muscle; fever and illness drive the rate"]
          ]) +
          hy('LVH <em>with</em> abnormal P waves strongly suggests HCM. Every patient with suggestive EKG findings needs an <strong>echo</strong>.') +
          mn('<strong>Restrictive = Reduced</strong> voltage. <strong>Dilated = Dropped bundle</strong> (LBBB). HCM = <strong>Daggers</strong>.'),
        questions: [
          Q("Which EKG finding is classic for hypertrophic cardiomyopathy?", "Deep, narrow \"dagger-like\" Q waves", ["Low QRS voltage", "Epsilon waves", "Diffuse ST elevation with PR depression"], "HCM: LVH, abnormal P waves, and deep narrow dagger-like Q waves. Epsilon waves are ARVC."),
          Q("Why can HCM cause abnormal P waves on EKG?", "The stiff LV backs pressure into the left atrium, which enlarges", ["The septum blocks the SA node", "Digoxin toxicity", "The right bundle branch is compressed"], "Compensation for the stiff, hypertrophied LV causes atrial hypertrophy, which changes the P wave."),
          Q("An EKG shows LVH and deep dagger-like Q waves in a young athlete. What is the next step to confirm HCM?", "Echocardiogram", ["Repeat EKG in 6 months", "Cardiac catheterization", "Exercise stress test"], "EKG suggests the diagnosis but can't make it. All patients with suggestive EKG findings need an echo."),
          Q("Which EKG findings are most common in dilated cardiomyopathy?", "Sinus tachycardia and left bundle branch block", ["Low QRS voltage", "Dagger-like Q waves", "Epsilon waves"], "DCM: sinus tach and LBBB are most common, and A-fib is the second most common."),
          Q("Besides sinus tach and LBBB, what rhythm is the second most common EKG finding in DCM?", "Atrial fibrillation", ["Complete heart block", "Torsades de pointes", "Sinus bradycardia"], "Stretched, dilated atria fibrillate. A-fib is #2 in DCM."),
          Q("Which cardiomyopathy may show decreased QRS amplitude on EKG?", "Restrictive cardiomyopathy", ["Hypertrophic cardiomyopathy", "Dilated cardiomyopathy", "Takotsubo cardiomyopathy"], "Restrictive = Reduced voltage. Infiltrated muscle conducts less electrical signal."),
          Q("A patient had a flu-like illness two weeks ago and now has chest pain. EKG shows tachycardia with nonspecific ST and T wave changes. Most likely?", "Myocarditis", ["Restrictive cardiomyopathy", "Hypertrophic cardiomyopathy", "Peripartum cardiomyopathy"], "Myocarditis follows a viral illness and shows tachycardia with nonspecific ST/T changes and positive cardiac enzymes.")
        ]
      },
      {
        id: "cm-exam",
        source: CM,
        title: "Exam findings: peripartum, dilated, and restrictive CM",
        learn:
          '<p>These three all end up as <strong>heart failure</strong>, so their exams look alike. Memorize the extra sound and the murmur for each.</p>' +
          tbl(["Cardiomyopathy", "Exam findings"], [
            ["<strong>Peripartum (PPCM)</strong>", "<strong>Elevated JVP, displaced apical impulse, S3, mitral regurg murmur</strong> (it behaves like DCM)"],
            ["<strong>Dilated (DCM)</strong>", "<strong>S3</strong>, regurg murmurs (mitral and tricuspid), rales, elevated JVP, edema, ascites"],
            ["<strong>Restrictive (RCM)</strong>", "<strong>Gallop (S3 or S4)</strong>, regurg murmurs, JVD, edema, ascites (left and right HF, progresses fast)"]
          ]) +
          '<p><strong>Why the apex is displaced</strong> in PPCM/DCM: the LV dilates, so the PMI moves down and to the left. <strong>Why MR</strong>: the dilated ring pulls the mitral leaflets apart.</p>' +
          hy('PPCM diagnosis needs all 3: <strong>HF at the end of pregnancy or within 6 months of delivery</strong>, no other cause, and <strong>LVEF ≤ 45%</strong>. Avoid ACEi/ARBs in pregnancy and breastfeeding.'),
        questions: [
          Q("Which set of findings fits peripartum cardiomyopathy?", "Elevated JVP, displaced apical impulse, S3, mitral regurg murmur", ["Normal JVP, S4, harsh crescendo-decrescendo murmur", "Pulsus paradoxus, muffled heart sounds, JVD", "Fixed split S2 and a pulmonic flow murmur"], "PPCM behaves like dilated CM: volume overload (JVP, S3), a dilated LV (displaced apex), and a stretched mitral ring (MR)."),
          Q("Why is the apical impulse displaced in peripartum cardiomyopathy?", "The left ventricle is dilated", ["The septum is hypertrophied", "The pericardium is thickened", "The uterus pushes the heart up"], "PPCM is a dilated cardiomyopathy. A big LV shifts the PMI down and laterally.", "PPCM is treated like which other cardiomyopathy?"),
          Q("Which is NOT one of the three diagnostic criteria for peripartum cardiomyopathy?", "Elevated troponin", ["HF toward the end of pregnancy or within 6 months of delivery", "No other identifiable cause of HF", "LVEF ≤ 45%"], "The three criteria are timing, no other cause, and LV systolic dysfunction (EF ≤ 45%). Troponin isn't one of them."),
          Q("Which heart failure drug class must be avoided in a pregnant patient with peripartum cardiomyopathy?", "ACE inhibitors and ARBs", ["Loop diuretics", "Beta-blockers", "Hydralazine"], "ACEi/ARBs are teratogenic (renal agenesis) and are avoided in pregnancy and breastfeeding."),
          Q("What heart sounds are expected in restrictive cardiomyopathy?", "A gallop (S3 or S4) and regurgitant murmurs", ["A fixed split S2 only", "A pericardial friction rub", "An opening snap and diastolic rumble"], "RCM slide: gallop rhythm (S3 or S4) and regurg murmurs, plus JVD, edema, and ascites."),
          Q("A patient with dilated cardiomyopathy would most likely have which extra heart sound?", "S3", ["S4", "Ejection click", "Opening snap"], "S3 = Stretched. DCM gives an S3 and mitral and tricuspid regurg murmurs.")
        ]
      },

      // ------------------------------------------------------------------ Lipids
      {
        id: "lipid-numbers",
        source: LIP,
        title: "Lipid cutoffs: LDL, triglycerides, and Apo B",
        learn:
          tbl(["Category", "LDL (mg/dL)", "Triglycerides (mg/dL)"], [
            ["Optimal / normal", "&lt; 100", "&lt; 150"],
            ["Near optimal", "100-129", "—"],
            ["<strong>Borderline high</strong>", "<strong>130-159</strong>", "<strong>150-199</strong>"],
            ["High", "160-189", "≥ 200"],
            ["Very high / danger", "<strong>≥ 190</strong> (very high)", "<strong>&gt; 500: at risk for pancreatitis</strong>"]
          ]) +
          fix('LDL borderline high is <strong>130-159</strong>, not 100-159. 100-129 is "near optimal".') +
          '<p><strong>Apo B</strong>: every atherogenic particle (LDL, VLDL) carries exactly one Apo B, so Apo B counts the <strong>total number of atherogenic lipoprotein particles</strong>. From the NMR panel: optimal <strong>&lt; 60</strong>, intermediate 60-79, high ≥ 80 mg/dL. Apo B ≥ 130 is an ASCVD risk enhancer.</p>' +
          mn('LDL steps go up by 30: <strong>100, 130, 160, 190</strong>. TG borderline is <strong>150</strong>, pancreatitis is <strong>500</strong> (the Familial Hypertriglyceridemia slide says &gt; 750 can cause it).'),
        questions: [
          Q("What LDL range is \"borderline high\"?", "130-159 mg/dL", ["100-129 mg/dL", "100-159 mg/dL", "160-189 mg/dL"], "Borderline high LDL is 130-159. 100-129 is near optimal, and 160-189 is high."),
          Q("An LDL of 115 mg/dL is classified as:", "Near optimal", ["Optimal", "Borderline high", "High"], "100-129 is near optimal. Optimal is under 100."),
          Q("What triglyceride range is \"borderline high\"?", "150-199 mg/dL", ["100-149 mg/dL", "200-499 mg/dL", "130-159 mg/dL"], "Normal TG is under 150, borderline high 150-199, high 200 or more."),
          Q("Above what triglyceride level is a patient at risk for pancreatitis?", "> 500 mg/dL", ["> 150 mg/dL", "> 200 mg/dL", "> 250 mg/dL"], "The lipid diagnostics table puts the pancreatitis risk at TG above 500."),
          Q("What does an Apo B level represent?", "The total number of atherogenic lipoprotein particles", ["The amount of HDL protecting the arteries", "The triglyceride content of chylomicrons", "Liver enzyme activity"], "Each LDL and VLDL particle carries one Apo B, so Apo B counts the particles.", "How many Apo B molecules sit on each LDL particle?"),
          Q("What is the optimal Apo B level on the NMR panel?", "< 60 mg/dL", ["< 100 mg/dL", "< 130 mg/dL", "< 150 mg/dL"], "Apo B optimal is under 60, intermediate 60-79, high 80 or more."),
          Q("An LDL of 195 mg/dL is classified as:", "Very high", ["High", "Borderline high", "Near optimal"], "190 or more is very high, and it's one of the four statin groups (high intensity).")
        ]
      },
      {
        id: "statins",
        source: LIP,
        title: "Statins: LDL ≥ 190 and liver safety",
        learn:
          '<p>The four groups who benefit from a statin:</p>' +
          tbl(["Group", "Intensity"], [
            ["Clinical ASCVD (secondary prevention)", "High"],
            ["<strong>LDL ≥ 190 mg/dL</strong>", "<strong>High, right away</strong>. No risk calculator needed"],
            ["Diabetes, age 40-75, LDL 70-189", "Moderate"],
            ["No diabetes, 10-year ASCVD risk ≥ 7.5%, age 40-75, LDL 70-189", "Moderate to high"]
          ]) +
          '<p><strong>High-intensity statins</strong> (~50% LDL reduction): <strong>atorvastatin 40-80</strong> and <strong>rosuvastatin 20-40</strong>.</p>' +
          '<p><strong>Liver</strong>: statins work in the liver, so check <strong>LFTs (ALT/AST/alk phos) before starting</strong> and recheck if concerns come up. Other drugs that alter liver function complicate this:</p>' +
          '<ul><li><strong>E-mycin</strong> (erythromycin, a macrolide antibiotic)</li><li><strong>Antifungals</strong> (azoles)</li><li><strong>Immunosuppressive agents</strong></li></ul>' +
          hy('You don\'t have to stop the statin until liver enzymes are <strong>more than 3 times the upper limit of normal</strong>.') +
          mn('<strong>"EAI"</strong>: <strong>E</strong>-mycin, <strong>A</strong>ntifungals, <strong>I</strong>mmunosuppressants.'),
        questions: [
          Q("A 35-year-old with no other risk factors has an LDL of 210 mg/dL. What is the treatment?", "High-intensity statin now", ["Lifestyle changes and recheck in 6 months", "Calculate 10-year ASCVD risk first", "Low-intensity statin"], "LDL 190 or more is its own statin group: start a high-intensity statin immediately. No risk calculation needed."),
          Q("Which is a high-intensity statin regimen?", "Atorvastatin 40-80 mg daily", ["Atorvastatin 10-20 mg daily", "Pravastatin 40 mg daily", "Simvastatin 10 mg daily"], "High intensity: atorvastatin 40-80 or rosuvastatin 20-40. Atorvastatin 10-20 is moderate."),
          Q("Which medication class can alter liver function and complicate statin monitoring?", "Azole antifungals", ["Loop diuretics", "Beta-blockers", "Thiazide diuretics"], "The slide lists E-mycin (erythromycin), antifungals, and immunosuppressants."),
          Q("\"E-mycin\" on the statin slide refers to which drug?", "Erythromycin", ["Ezetimibe", "Enalapril", "Eplerenone"], "E-mycin is a brand of erythromycin, a macrolide antibiotic that affects liver metabolism of statins."),
          Q("What should be checked before starting a statin?", "Liver enzymes (ALT/AST/alk phos)", ["Serum potassium", "TSH only", "Urine protein"], "Statins work in the liver, so get baseline LFTs and recheck if concerns arise."),
          Q("At what liver enzyme level does conventional wisdom say to stop a statin?", "More than 3 times the upper limit of normal", ["Any elevation above normal", "More than 1.5 times the upper limit of normal", "Only if bilirubin rises"], "Mild bumps are common. The slide says you don't need to stop until enzymes exceed 3x the high end of normal.")
        ]
      },

      // ------------------------------------------------------------------ HTN and the heart
      {
        id: "htn-heart",
        source: INTRO + " / " + WORKUP + " / " + EM,
        title: "How high pressure hurts the heart",
        learn:
          '<p><strong>Primary HTN, \"cardiac malformation\" theory:</strong> an aorta that developed <strong>less elastic</strong>, or a <strong>capillary network that never fully developed</strong> (prematurity), means the ventricle has to push harder against a stiffer, narrower arterial system. Result: adult-onset HTN.</p>' +
          fix('The slide says malformation (something that formed abnormally before birth), not malfunction.') +
          '<p><strong>The afterload chain</strong> (follow it one step at a time):</p>' +
          '<ol class="concept-chain"><li>High BP = high <strong>afterload</strong> (the pressure the LV must push against)</li><li>The LV muscle thickens: <strong>LVH</strong></li><li>Thick, stiff muscle needs <strong>more oxygen</strong> and doesn\'t relax well (<strong>diastolic dysfunction comes first</strong>)</li><li>Coronary arteries fill during <strong>diastole</strong>. High aortic pressure plus thick, poorly relaxing muscle means <strong>less coronary perfusion</strong></li><li>More demand + less supply = <strong>ischemia / MI</strong>, then heart failure</li></ol>' +
          hy('Supply vs demand: HTN <strong>raises</strong> myocardial O2 demand and <strong>lowers</strong> coronary perfusion at the same time.'),
        questions: [
          Q("What is the \"cardiac malformation\" theory of primary HTN?", "An aorta that developed less elastic or an underdeveloped capillary network makes the ventricle push harder", ["A congenital VSD shunts blood to the lungs", "Valve leaflets fused before birth", "The SA node fires too fast from birth"], "Abnormal development of aortic elasticity or of the microvascular network (e.g., prematurity) causes adult-onset HTN."),
          Q("Increased afterload from chronic HTN first causes which structural change in the heart?", "Left ventricular hypertrophy", ["Right ventricular dilation", "Mitral valve prolapse", "Pericardial thickening"], "The LV adapts to pushing against high pressure by thickening its muscle (LVH)."),
          Q("How does LVH from HTN affect myocardial oxygen?", "It increases oxygen demand and decreases coronary perfusion", ["It decreases oxygen demand and increases perfusion", "It has no effect on oxygen", "It increases both demand and perfusion equally"], "More muscle needs more O2, and thick muscle plus high aortic pressure squeezes coronary flow. Supply falls as demand rises."),
          Q("When are the coronary arteries perfused?", "During diastole, when the heart muscle relaxes", ["During systole, when the heart contracts", "Only during atrial contraction", "Equally in systole and diastole"], "The myocardium is perfused when it relaxes. Stiff muscle that relaxes poorly gets less flow.", "When is the muscle not squeezing its own arteries shut?"),
          Q("Which type of heart dysfunction appears FIRST in hypertensive heart disease?", "Diastolic dysfunction", ["Systolic dysfunction", "Right heart failure", "Complete heart block"], "The stiff, hypertrophied LV doesn't relax fully in diastole. Systolic failure comes later."),
          Q("In a hypertensive emergency, why can a patient have an MI?", "High aortic pressure, high afterload, and LVH reduce coronary perfusion while the stiff muscle needs more oxygen", ["High pressure ruptures the coronary arteries directly", "The BP medications cause coronary spasm", "Blood clots form in the left atrium"], "The Hypertensive Crisis lecture: high aortic pressure + afterload + hypertrophy means less coronary perfusion and higher O2 demand, so the muscle becomes ischemic.")
        ]
      },

      // ------------------------------------------------------------------ HTN treatment
      {
        id: "ace-when",
        source: TX,
        title: "ACE inhibitors: when they are the drug of choice",
        learn:
          '<p>ACE inhibitors block angiotensin I → II (less vasoconstriction, less aldosterone) and raise bradykinin (vasodilator, and the cause of the cough).</p>' +
          tbl(["ACEi is the drug of choice for…", "Why"], [
            ["<strong>CKD with proteinuria</strong>", "Lowers glomerular pressure, slows progression"],
            ["<strong>HFrEF or recent MI</strong>", "Reduces morbidity and mortality"],
            ["<strong>LV remodeling</strong> in HF, CAD, cardiomyopathies", "Halts or may even reverse remodeling"]
          ]) +
          '<p><strong>Compelling indications where ACEi/ARB comes first:</strong></p>' +
          tbl(["Condition + HTN", "First", "Then"], [
            ["Diabetes", "<strong>ACEi or ARB</strong>", "DHP CCB or thiazide"],
            ["CKD / proteinuria", "<strong>ACEi or ARB</strong>", "DHP CCB or thiazide"],
            ["Recurrent stroke prevention", "<strong>ACEi or ARB</strong>", "Thiazide or DHP CCB"]
          ]) +
          hy('<strong>Never combine an ACEi and an ARB</strong> (ONTARGET: less proteinuria but worse kidney outcomes). Both are <strong>contraindicated in pregnancy</strong>.') +
          mn('ACE/ARB first for the <strong>"3 Ds that damage vessels"</strong>: <strong>D</strong>iabetes, <strong>D</strong>amaged kidneys (CKD/proteinuria), <strong>D</strong>amaged brain (stroke).'),
        questions: [
          Q("What is the first-line drug class for HTN in a patient with diabetes?", "ACE inhibitor or ARB", ["Beta-blocker", "Thiazide diuretic", "Alpha-1 blocker"], "Diabetes is a compelling indication for ACEi/ARB, then a DHP CCB or thiazide."),
          Q("What is the first-line drug class for HTN in a patient with CKD and proteinuria?", "ACE inhibitor or ARB", ["Loop diuretic", "Non-DHP CCB", "Hydralazine"], "ACEi are the treatment of choice in CKD with proteinuria to slow progression."),
          Q("A patient with HTN had a stroke last year. Which class is first line for recurrent stroke prevention?", "ACE inhibitor or ARB", ["Beta-blocker", "Central alpha-2 agonist", "Alpha-1 blocker"], "Recurrent stroke prevention: ACEi or ARB, then a thiazide or DHP CCB."),
          Q("Which is a reason ACE inhibitors are the drug of choice after a recent MI?", "They reduce morbidity and mortality", ["They are the only drugs that lower heart rate", "They dissolve coronary clots", "They prevent all arrhythmias"], "ACEi reduce morbidity and mortality in HFrEF and recent MI."),
          Q("What can ACE inhibitors do to the left ventricle in HF, CAD, and cardiomyopathies?", "Halt or even reverse remodeling", ["Cause hypertrophy", "Speed up dilation", "Thicken the septum"], "The slide: ACEi may halt or regress LV remodeling."),
          Q("Why should an ACE inhibitor and an ARB never be combined?", "It worsens major kidney outcomes", ["They cancel each other out", "It causes severe bradycardia", "It causes hypoglycemia"], "ONTARGET: the combination reduced proteinuria more but worsened major renal outcomes."),
          Q("After an ACE inhibitor, which drug is added next for HTN with diabetes?", "A DHP CCB or a thiazide", ["A second ACE inhibitor", "An ARB", "A non-selective beta-blocker"], "Diabetes, CKD, and stroke all follow the same ladder: ACEi/ARB, then a DHP CCB or thiazide.")
        ]
      },
      {
        id: "ace-kidney",
        source: TX,
        title: "ACE inhibitors: kidney and potassium safety",
        learn:
          '<p>Angiotensin II squeezes the <strong>efferent</strong> (outgoing) arteriole to hold pressure inside the glomerulus. An ACEi relaxes that arteriole, so <strong>glomerular pressure and GFR drop a little</strong>. That is protective in proteinuria, but dangerous when the kidney depends on that squeeze.</p>' +
          tbl(["Situation", "What happens"], [
            ["<strong>Sick days / hypovolemia</strong>: poor PO intake, N/V/D, GI bleed, overdiuresis", "The kidney needs RAAS to keep filtering. An ACEi can <strong>worsen kidney function</strong>"],
            ["<strong>Renal artery stenosis</strong>", "RAAS is constantly on to keep glomerular pressure up. Suddenly blocking it <strong>drops glomerular pressure and GFR, causing AKI</strong>"]
          ]) +
          '<p><strong>Monitoring:</strong> check <strong>potassium and BUN/creatinine within 5-10 days</strong> of starting or raising the dose. A small, temporary creatinine bump is expected.</p>' +
          '<p><strong>Stop the ACEi</strong> if there is <strong>persistent hyperkalemia</strong> or <strong>creatinine rises more than 30%</strong>.</p>' +
          '<p><strong>Hyperkalemia</strong> is most common in <strong>CKD (stage IV/V) and diabetics</strong>, and when combined with an <strong>aldosterone antagonist</strong> (spironolactone, eplerenone) or other potassium-sparing drug.</p>' +
          hy('AKI right after starting an ACEi/ARB should make you <strong>suspect renal artery stenosis</strong>.'),
        questions: [
          Q("A patient on lisinopril has 3 days of vomiting and diarrhea. What is the concern?", "Worsening kidney function from hypovolemia", ["Angioedema", "Hypoglycemia", "Bradycardia"], "During hypovolemia (poor PO, N/V/D, GI bleed, overdiuresis) the kidney relies on RAAS. An ACEi can worsen kidney function."),
          Q("When should potassium and BUN/creatinine be checked after starting or increasing an ACE inhibitor?", "Within 5-10 days", ["Within 24 hours", "In 3 months", "Only if symptoms develop"], "The slide: monitor K and BUN/Cr within 5-10 days of initiation or dose increase."),
          Q("When must an ACE inhibitor be stopped?", "Persistent hyperkalemia or creatinine rising more than 30%", ["Any creatinine increase at all", "Potassium of 4.8 once", "A mild dry mouth"], "A small, temporary creatinine rise is expected. Stop for persistent hyperK or a rise above 30%."),
          Q("Which patient is at highest risk of hyperkalemia on an ACE inhibitor?", "A diabetic with stage IV CKD who also takes spironolactone", ["A healthy 30-year-old on lisinopril alone", "A patient also taking furosemide", "A patient also taking HCTZ"], "Highest risk: CKD IV/V, diabetics, and patients on an aldosterone antagonist or other K-sparing drug. Loops and thiazides lower K."),
          Q("Why can an ACE inhibitor cause AKI in renal artery stenosis?", "The kidney depends on angiotensin II to keep glomerular pressure up; blocking it drops GFR", ["ACE inhibitors directly damage the tubules", "ACE inhibitors cause renal artery spasm", "ACE inhibitors raise blood volume"], "With stenosis, RAAS is constantly active to maintain filtration. Suddenly blocking it drops glomerular pressure and GFR.", "Which arteriole does angiotensin II constrict?"),
          Q("A patient develops AKI one week after starting an ACE inhibitor. What diagnosis should you suspect?", "Renal artery stenosis", ["Primary hyperaldosteronism", "Pheochromocytoma", "Coarctation of the aorta"], "The HTN lectures list AKI after starting an ACEi/ARB as a reason to suspect renal artery stenosis."),
          Q("What does angiotensin II normally do to the efferent arteriole?", "Constricts it to keep glomerular pressure up", ["Dilates it to lower glomerular pressure", "Has no effect on it", "Blocks sodium channels in it"], "Angiotensin II squeezes the efferent arteriole. Removing that squeeze is why GFR dips on an ACEi.")
        ]
      },
      {
        id: "aldosterone-antagonists",
        source: TX,
        title: "Spironolactone vs eplerenone (Inspra)",
        learn:
          '<p>Potassium-sparing diuretics come in two kinds:</p>' +
          tbl(["Type", "Drugs", "How they work"], [
            ["<strong>Aldosterone antagonists</strong>", "<strong>Spironolactone (Aldactone)</strong>, <strong>eplerenone (Inspra)</strong>", "Block the aldosterone (mineralocorticoid) receptor: lose sodium, keep potassium"],
            ["Sodium-channel blockers", "Triamterene, amiloride", "Block distal tubule sodium channels: weak diuresis, keep potassium"]
          ]) +
          '<p><strong>Aldosterone antagonist indications:</strong> <strong>HFrEF</strong> (compelling indication) and <strong>ascites from chronic liver disease</strong> (initial diuretic of choice). Also a 4th-drug option in resistant HTN.</p>' +
          '<p><strong>Side effects:</strong></p><ul><li><strong>Hyperkalemia</strong>, especially with an ACEi/ARB or K supplements, GFR &lt; 50, diabetes, proteinuria</li><li><strong>Spironolactone only:</strong> it also binds <strong>estrogen and progesterone receptors</strong>, causing <strong>gynecomastia, irregular periods, and impotence</strong></li></ul>' +
          fix('"Inspira" is <strong>eplerenone (Inspra)</strong>: more selective for the aldosterone receptor, so <strong>no endocrine side effects</strong>.') +
          mn('<strong>S</strong>pironolactone = <strong>S</strong>ex hormone side effects. <strong>E</strong>plerenone = <strong>E</strong>xact (selective).'),
        questions: [
          Q("Why does spironolactone cause gynecomastia?", "It also binds estrogen and progesterone receptors", ["It raises prolactin", "It lowers testosterone production in the testes", "It causes hyperkalemia"], "Spironolactone is less selective: it binds sex hormone receptors, causing gynecomastia, irregular periods, and impotence."),
          Q("A man on spironolactone for HFrEF develops painful breast enlargement. What is the best switch?", "Eplerenone (Inspra)", ["Triamterene", "Furosemide", "Hydrochlorothiazide"], "Eplerenone is more selective for the aldosterone receptor, so it lacks the endocrine side effects and keeps the HFrEF benefit."),
          Q("What is the brand name of eplerenone?", "Inspra", ["Aldactone", "Lasix", "Dyazide"], "Eplerenone = Inspra. Spironolactone = Aldactone."),
          Q("What is the initial diuretic of choice for ascites from chronic liver disease?", "Spironolactone", ["Furosemide alone", "Hydrochlorothiazide", "Acetazolamide"], "Aldosterone antagonists are the initial diuretic of choice in cirrhotic ascites."),
          Q("Which heart condition is a compelling indication for an aldosterone antagonist?", "HFrEF", ["Hypertrophic cardiomyopathy", "Aortic stenosis", "Sick sinus syndrome"], "HF with systolic dysfunction: ACEi/ARB + BB + aldosterone antagonist + diuretic."),
          Q("What is the most dangerous side effect when spironolactone is combined with an ACE inhibitor?", "Hyperkalemia", ["Hypokalemia", "Hyponatremia only", "Hypercalcemia"], "Both raise potassium. Monitor the chemistry panel, especially with GFR < 50, diabetes, or proteinuria."),
          Q("Which potassium-sparing diuretic works by blocking sodium channels rather than the aldosterone receptor?", "Amiloride", ["Spironolactone", "Eplerenone", "Furosemide"], "Triamterene and amiloride block distal tubule sodium channels. Spironolactone and eplerenone block the aldosterone receptor.")
        ]
      },
      {
        id: "ccb-safety",
        source: TX,
        title: "Non-DHP CCBs and CCB overdose",
        learn:
          tbl(["", "DHP (amlodipine, nifedipine, nicardipine)", "Non-DHP (diltiazem, verapamil)"], [
            ["Main target", "Blood vessels (vasodilation), HR neutral", "<strong>Heart</strong>: slows SA/AV node, weakens contraction"],
            ["Side effects", "Edema, flushing, HA, reflex tachycardia", "Bradycardia, AV block, systolic HF, constipation (verapamil)"]
          ]) +
          '<p><strong>Non-DHP cautions:</strong></p><ul><li><strong>Caution with a beta-blocker</strong> (both slow the heart: bradycardia, heart block)</li><li><strong>Don\'t use in acutely decompensated HFrEF</strong> (they weaken contraction). Can resume after about 24 h of diuresis</li><li>Don\'t use in bradyarrhythmias: sick sinus syndrome, 2nd/3rd degree AV block</li></ul>' +
          fix('The slide says <strong>caution</strong> with a BB, not "never".') +
          '<p><strong>CCB overdose</strong> (5-10x the dose, even a DHP):</p>' +
          tbl(["Finding", "Why"], [
            ["<strong>Bradycardia, prolonged PR, hypotension</strong>", "Calcium block at the AV node and vessels"],
            ["<strong>Hyperglycemia</strong>", "The pancreas needs calcium to release insulin"],
            ["<strong>Clear mentation despite hypotension</strong>, then sudden collapse", "Brain keeps perfusing until it can't. <strong>Recheck neuro frequently</strong>"]
          ]) +
          '<p><strong>Treatment:</strong> IV fluids first, atropine for bradycardia (<strong>atropine may not work</strong>), then activated charcoal, <strong>IV calcium, glucagon</strong>, pressors (norepi), high-dose insulin.</p>' +
          fix('It\'s the atropine that may not work, not the IV fluids.') +
          hy('<strong>CCB overdose = HYPERglycemia.</strong> Beta-blocker overdose = <strong>HYPOglycemia</strong> (plus hyperkalemia and confusion).'),
        questions: [
          Q("Which combination calls for caution because of bradycardia and heart block?", "Verapamil plus metoprolol", ["Amlodipine plus lisinopril", "Chlorthalidone plus losartan", "Nifedipine plus HCTZ"], "Non-DHP CCBs and beta-blockers both slow the SA and AV nodes."),
          Q("Diltiazem should NOT be started in which situation?", "Acutely decompensated HFrEF", ["Atrial fibrillation with rapid rate", "Stable HTN", "Angina"], "Non-DHPs weaken contraction and can worsen decompensated HFrEF. A-fib rate control is actually an indication."),
          Q("Besides HFrEF, which rhythm problem rules out verapamil?", "Second- or third-degree AV block", ["Sinus tachycardia", "Atrial fibrillation with rapid response", "Premature atrial contractions"], "Verapamil and diltiazem slow conduction, so avoid them in sick sinus syndrome and higher-degree AV blocks."),
          Q("Which lab abnormality is expected in calcium channel blocker overdose?", "Hyperglycemia", ["Hypoglycemia", "Hypercalcemia", "Hypokalemia"], "The pancreas needs calcium to release insulin, so blocking it raises glucose.", "What does the pancreas need calcium for?"),
          Q("Which set of findings fits a CCB overdose?", "Bradycardia, prolonged PR interval, hypotension", ["Tachycardia, short PR, hypertension", "Pinpoint pupils and hypothermia", "Wide QRS and hyperthermia"], "At 5-10x the dose, even DHPs hit the AV node: bradycardia, long PR, low BP."),
          Q("A CCB overdose patient is hypotensive but talking clearly. What is the key nursing/monitoring point?", "Recheck neuro status frequently; they can deteriorate suddenly", ["Clear mentation means the overdose is mild", "Discharge after 2 hours", "No monitoring is needed"], "Mentation stays clear until cerebral perfusion becomes critically low, then drops precipitously."),
          Q("In CCB overdose, which initial treatment may NOT be effective?", "Atropine for bradycardia", ["IV fluids for hypotension", "IV calcium", "High-dose insulin"], "The slide: IV fluids first for hypotension, atropine for bradycardia, but atropine may not be effective."),
          Q("Which is a specific treatment for CCB overdose?", "IV calcium", ["Naloxone", "Sodium thiosulfate", "Methylene blue"], "IV calcium, glucagon, pressors, and high-dose insulin. Naloxone is for clonidine overdose."),
          Q("How do CCB and beta-blocker overdoses differ in glucose?", "CCB causes hyperglycemia; beta-blocker causes hypoglycemia", ["Both cause hyperglycemia", "Both cause hypoglycemia", "CCB causes hypoglycemia; beta-blocker causes hyperglycemia"], "CCB blocks insulin release (high glucose). BB overdose causes hypoglycemia, hyperkalemia, and confusion.")
        ]
      },
      {
        id: "beta-blockers",
        source: TX,
        title: "Beta-blockers: who gets them, who doesn't",
        learn:
          tbl(["Receptor", "Where", "Stimulation does"], [
            ["β1", "Heart, kidney", "↑ HR, ↑ contractility, ↑ renin"],
            ["β2", "Lungs, liver, pancreas, arterioles", "Bronchodilation, vasodilation, insulin release, glycogenolysis"]
          ]) +
          '<p><strong>Non-cardioselective</strong> (propranolol, nadolol, timolol) block β1 <strong>and β2</strong>, so they cause <strong>bronchoconstriction</strong>. Cardioselective (metoprolol, atenolol, bisoprolol) lose selectivity at high doses, so use caution in <strong>asthma/COPD with any BB</strong>.</p>' +
          '<p><strong>Not first line for HTN.</strong> Use only with a compelling indication:</p>' +
          '<ul><li><strong>Post-MI</strong> (first line)</li><li><strong>Compensated HFrEF</strong> and LV dysfunction, <strong>symptomatic or asymptomatic</strong> (EF &lt; 50%)</li><li><strong>CAD and A-fib</strong></li></ul>' +
          fix('Your card missed CAD and A-fib, and LV dysfunction counts even without symptoms.') +
          '<p><strong>Diabetics:</strong> hypoglycemia normally triggers the sympathetic system (tremor, sweating, fast HR, palpitations). A BB blocks those warning signs, so glucose can drop dangerously <strong>without the patient noticing</strong>. BBs also lower insulin release. Avoid in diabetes unless there is a compelling indication.</p>' +
          '<p><strong>Intrinsic sympathomimetic activity (ISA)</strong>, e.g., <strong>acebutolol</strong>: a partial agonist, so it <strong>doesn\'t lower resting HR or cardiac output</strong>. Niche use: a patient with <strong>bradycardia</strong> who needs a BB. <strong>Contraindicated post-MI or in high-risk patients</strong> (less cardioprotective).</p>' +
          hy('Don\'t stop a BB abruptly (rebound HTN, angina, MI). Taper over 1-2 weeks.'),
        questions: [
          Q("Why are non-cardioselective beta-blockers risky in asthma or COPD?", "They block β2 receptors, causing bronchoconstriction", ["They block β1 receptors in the lungs", "They cause hyperkalemia", "They cause a dry cough"], "Non-selective BBs block β1 and β2. β2 normally bronchodilates, so blocking it bronchoconstricts."),
          Q("Which is a non-cardioselective beta-blocker?", "Propranolol", ["Metoprolol", "Atenolol", "Bisoprolol"], "Non-selective: propranolol, nadolol, timolol. Cardioselective: metoprolol, atenolol, bisoprolol."),
          Q("For which patient is a beta-blocker a first-line BP drug?", "A patient with HTN who had an MI last month", ["A healthy 45-year-old with stage 1 HTN", "A diabetic with no heart disease", "A patient with asthma and HTN"], "BBs aren't first line for HTN unless there's a compelling indication like post-MI, HFrEF/LV dysfunction, CAD, or A-fib."),
          Q("Which patient has a compelling indication for a beta-blocker?", "Asymptomatic LV dysfunction with EF 40%", ["Isolated systolic HTN in a 70-year-old", "HTN with gout", "HTN with BPH"], "Symptomatic or asymptomatic LV dysfunction (EF under 50%) is an indication."),
          Q("Why are beta-blockers risky in a diabetic on insulin?", "They hide the warning signs of hypoglycemia", ["They cause hyperkalemia", "They raise glucose to dangerous levels", "They block insulin receptors"], "Tremor, palpitations, and tachycardia come from the sympathetic response to low glucose. A BB blunts them, so hypoglycemia can go unnoticed."),
          Q("What is intrinsic sympathomimetic activity (ISA)?", "Partial beta-agonist activity, so resting heart rate isn't lowered", ["Full beta-agonist activity that raises heart rate", "Alpha-blocking activity", "Calcium channel blocking activity"], "ISA beta-blockers like acebutolol partially stimulate the receptor, so they don't reduce resting HR or cardiac output."),
          Q("Which patient might be a candidate for a beta-blocker with ISA (acebutolol)?", "A patient with bradycardia who needs a beta-blocker", ["A patient one week after an MI", "A high-risk patient with CAD", "A patient with HFrEF"], "ISAs have a niche in bradycardia. They're contraindicated post-MI and in high-risk patients."),
          Q("In which patient is a beta-blocker with ISA contraindicated?", "A patient who recently had an MI", ["A patient with mild bradycardia", "A young patient with anxiety", "A patient with essential tremor"], "ISAs are less cardioprotective and are contraindicated post-MI or in high-risk patients.")
        ]
      },
      {
        id: "alpha-beta",
        source: TX,
        title: "Mixed alpha/beta blockers: carvedilol and labetalol",
        learn:
          '<p>Two actions in one drug:</p>' +
          '<ul><li><strong>Beta block</strong> → lower HR and myocardial oxygen demand</li><li><strong>Alpha-1 block</strong> → peripheral vasodilation</li></ul>' +
          tbl(["Drug", "Key uses"], [
            ["<strong>Carvedilol (Coreg)</strong>", "BP lowering in <strong>HFrEF</strong>; <strong>shown to reduce mortality</strong> in systolic dysfunction/HFrEF. Less effect on glucose than a plain BB"],
            ["<strong>Labetalol (Trandate)</strong>", "Oral BP med; <strong>IV</strong> PRN or in emergencies; <strong>safe in pregnancy</strong>"]
          ]) +
          fix('The mortality benefit is for <strong>carvedilol</strong> specifically.') +
          '<p><strong>Main side effect: orthostatic hypotension.</strong> The alpha block lowers standing BP more than lying BP, so it causes more orthostasis than a plain BB.</p>' +
          mn('<strong>C</strong>arvedilol for <strong>C</strong>hronic HF (<strong>C</strong>oreg). <strong>L</strong>abetalol for <strong>L</strong>abor (pregnancy) and the <strong>L</strong>ine (IV).'),
        questions: [
          Q("Which two drugs are mixed alpha-1 and beta blockers?", "Carvedilol and labetalol", ["Metoprolol and atenolol", "Doxazosin and terazosin", "Clonidine and methyldopa"], "Carvedilol (Coreg) and labetalol (Trandate) block both alpha-1 and beta receptors."),
          Q("How does a mixed alpha/beta blocker lower BP?", "Beta block lowers HR and O2 demand; alpha-1 block causes peripheral vasodilation", ["It blocks calcium channels in vessels", "It blocks angiotensin II receptors", "It stimulates central alpha-2 receptors"], "Two mechanisms: beta (heart) and alpha-1 (vessels)."),
          Q("Which mixed alpha/beta blocker has proven mortality benefit in HFrEF?", "Carvedilol", ["Labetalol", "Doxazosin", "Atenolol"], "Carvedilol reduces mortality in systolic dysfunction and HFrEF and is used for BP in those patients."),
          Q("What is the characteristic side effect of mixed alpha/beta blockers?", "Orthostatic hypotension", ["Dry cough", "Gynecomastia", "Hirsutism"], "The added alpha block lowers standing BP more than supine BP."),
          Q("A patient with HTN and HFrEF needs a beta-blocker that also lowers BP well. Best choice?", "Carvedilol", ["Propranolol", "Acebutolol", "Labetalol"], "Carvedilol (Coreg) is frequently used for BP in HFrEF and has mortality benefit."),
          Q("Which mixed alpha/beta blocker is commonly used IV and in pregnancy?", "Labetalol", ["Carvedilol", "Esmolol", "Propranolol"], "Labetalol: oral or IV, lots of experience and safe in pregnancy.")
        ]
      },
      {
        id: "alpha1",
        source: TX,
        title: "Alpha-1 blockers: the HTN + BPH drug",
        learn:
          '<p><strong>Names:</strong> <strong>doxazosin (Cardura)</strong>, terazosin (Hytrin), prazosin (Minipress). The \"-azosin\" ending gives them away.</p>' +
          '<p><strong>MOA:</strong> blocking alpha-1 receptors <strong>dilates veins and arteries</strong> (lower BP) and <strong>relaxes the prostate</strong> (easier urine flow).</p>' +
          fix('<strong>Not appropriate as monotherapy</strong> for HTN, but <strong>often used when HTN and BPH both need treatment</strong>. Your card said the opposite.') +
          '<p><strong>Side effects:</strong></p><ul><li><strong>Orthostatic hypotension</strong>, especially in older patients, so <strong>dose at bedtime</strong></li><li><strong>First-dose phenomenon</strong>: dizziness, faintness, palpitations, or syncope 1-3 hours after the first dose</li><li><strong>Edema</strong></li></ul>' +
          mn('<strong>-azosin</strong> = the pee-easier pill. Take it <strong>at bedtime</strong> so the head rush happens lying down.'),
        questions: [
          Q("A 68-year-old man has HTN and BPH with weak urine stream. Which add-on drug treats both?", "Doxazosin", ["Hydrochlorothiazide", "Metoprolol", "Clonidine"], "Alpha-1 blockers relax vascular smooth muscle (lower BP) and the prostate (easier urination)."),
          Q("Which statement about alpha-1 blockers in HTN is correct?", "Not appropriate monotherapy, but often used when HTN and BPH coexist", ["They are first-line monotherapy for all HTN", "They must never be used when BPH is present", "They are the drug of choice in pregnancy"], "The slide: not appropriate monotherapy, but often used when both HTN and comorbid BPH need treatment."),
          Q("What is the brand name of doxazosin?", "Cardura", ["Catapres", "Coreg", "Cardene"], "Doxazosin = Cardura. Catapres is clonidine, Coreg is carvedilol, Cardene is nicardipine."),
          Q("Why are alpha-1 blockers dosed at bedtime?", "To limit orthostatic hypotension", ["To prevent nocturia", "Because they cause insomnia", "To avoid morning hyperkalemia"], "Lying down overnight limits the orthostatic drop, especially in older patients."),
          Q("A patient faints 2 hours after their first dose of terazosin. What is this?", "First-dose phenomenon", ["Angioedema", "Rebound hypertension", "Serotonin syndrome"], "First-dose phenomenon: transient dizziness, faintness, palpitations, or syncope 1-3 hours after the first dose."),
          Q("How do alpha-1 blockers make urination easier?", "They block alpha-1 receptors on the prostate, relaxing it", ["They shrink the prostate by blocking testosterone", "They increase bladder contraction", "They are diuretics"], "Alpha-1 receptors on prostate smooth muscle cause tightening. Blocking them relaxes it.")
        ]
      },
      {
        id: "central-alpha2",
        source: TX,
        title: "Central alpha-2 agonists and clonidine overdose",
        learn:
          '<p><strong>Names:</strong> <strong>clonidine (Catapres)</strong>, PO or weekly patch; <strong>methyldopa (Aldomet)</strong>; guanfacine (Tenex).</p>' +
          '<p><strong>MOA:</strong> stimulate alpha-2 receptors <strong>in the brain</strong> → <strong>less sympathetic outflow</strong> from the CNS and <strong>more vagal tone</strong>.</p>' +
          tbl(["Drug", "Niche"], [
            ["Methyldopa", "One of the safest in <strong>pregnancy</strong>; rarely used otherwise"],
            ["Clonidine", "Severe HTN in <strong>ESRD</strong> (safe in renal failure); <strong>alcohol withdrawal</strong>"]
          ]) +
          '<p><strong>Side effects:</strong> <strong>rebound HTN if stopped abruptly</strong> (clonidine), orthostasis, bradycardia, drowsiness, dry mouth, edema.</p>' +
          '<p><strong>Overdose (clonidine)</strong> looks like an <strong>opioid overdose</strong>:</p>' +
          '<ul><li>Tablets become symptomatic <strong>within 1 hour</strong> (patch may be slower)</li><li><strong>Pinpoint pupils, depressed LOC, hypotension, coma, respiratory depression</strong></li><li>Plus <strong>hypothermia</strong></li><li>Treat with <strong>naloxone</strong>, IV fluids, atropine, pacing, pressors</li></ul>' +
          mn('Clonidine OD = <strong>"cold opioid"</strong>: everything an opioid OD has, plus hypothermia.'),
        questions: [
          Q("How do central alpha-2 agonists lower BP?", "They stimulate alpha-2 receptors in the brain, reducing sympathetic outflow and increasing vagal tone", ["They block alpha-1 receptors on vessels", "They block beta-1 receptors in the heart", "They block sodium reabsorption"], "Central alpha-2 stimulation turns down sympathetic output from the CNS and turns up vagal tone."),
          Q("Which drugs are central alpha-2 agonists?", "Clonidine and methyldopa", ["Doxazosin and prazosin", "Carvedilol and labetalol", "Hydralazine and minoxidil"], "Clonidine (Catapres), methyldopa (Aldomet), guanfacine (Tenex)."),
          Q("A child gets into a grandparent's clonidine pills. Which findings are expected?", "Pinpoint pupils, depressed consciousness, hypotension, respiratory depression, hypothermia", ["Dilated pupils, agitation, hypertension, hyperthermia", "Hyperglycemia and prolonged PR only", "Gynecomastia and hyperkalemia"], "Clonidine overdose mimics an opioid overdose, plus hypothermia."),
          Q("How soon does a clonidine tablet overdose become symptomatic?", "Within about one hour", ["After 24 hours", "After 3 days", "Only after the patch is removed"], "Tablets become symptomatic within an hour. A patch overdose may take longer."),
          Q("Which antidote is used in clonidine overdose?", "Naloxone", ["Sodium thiosulfate", "Methylene blue", "Flumazenil"], "Because it looks like an opioid overdose, naloxone is part of treatment, with IV fluids, atropine, pacing, and pressors."),
          Q("What happens if clonidine is stopped abruptly?", "Rebound hypertension", ["Hypoglycemia", "Gynecomastia", "Angioedema"], "Abrupt discontinuation of clonidine is a significant risk for rebound HTN."),
          Q("Which central alpha-2 agonist is one of the safest antihypertensives in pregnancy?", "Methyldopa", ["Clonidine patch", "Guanfacine", "Minoxidil"], "Methyldopa is one of the safest in pregnant hypertensives and rarely used otherwise.")
        ]
      },
      {
        id: "direct-vasodilators",
        source: TX,
        title: "Direct arterial vasodilators: hydralazine and minoxidil",
        learn:
          '<p>They relax <strong>arterial</strong> smooth muscle directly, with little venous effect.</p>' +
          tbl(["Drug", "Use", "Unique side effect"], [
            ["<strong>Hydralazine</strong>", "<strong>PO or IV</strong>; HR neutral; part of HF combos; safe in CKD/AKI and ESRD; <strong>IV/IM for eclampsia</strong>", "<strong>Drug-induced lupus</strong>"],
            ["<strong>Minoxidil</strong>", "Renal failure patients with hard-to-control HTN", "<strong>Excess hair growth</strong>"]
          ]) +
          '<p><strong>Shared side effects:</strong> <strong>sodium/water retention</strong> (give with a loop), <strong>reflex tachycardia</strong>, and <strong>angina</strong> (caution in CAD).</p>' +
          hy('Avoid hydralazine in <strong>acute decompensated HFrEF</strong> (more cardiac work) and in <strong>intracerebral/subarachnoid hemorrhage</strong>.') +
          mn('<strong>Hydra-LUPUS-zine</strong>. <strong>Minoxi-HAIR</strong> (it\'s the drug in Rogaine).'),
        questions: [
          Q("Which two drugs are direct arterial vasodilators?", "Hydralazine and minoxidil", ["Nitroprusside and nitroglycerin", "Clonidine and methyldopa", "Amlodipine and nifedipine"], "Hydralazine (PO or IV) and minoxidil."),
          Q("Which antihypertensive can cause drug-induced lupus?", "Hydralazine", ["Minoxidil", "Lisinopril", "Amlodipine"], "Hydralazine is known to cause drug-induced lupus."),
          Q("A patient on a new BP medication notices increased hair growth on the face and arms. Which drug?", "Minoxidil", ["Hydralazine", "Spironolactone", "Clonidine"], "Excessive hair growth is minoxidil's signature side effect."),
          Q("Why is a loop diuretic often given with a direct arterial vasodilator?", "To counter sodium and water retention", ["To prevent drug-induced lupus", "To prevent hair growth", "To slow the heart rate"], "Direct vasodilators cause sodium/water retention and edema."),
          Q("Which hypertensive emergency is IV hydralazine specifically listed for?", "Eclampsia", ["Aortic dissection", "Acute decompensated heart failure", "Subarachnoid hemorrhage"], "Hydralazine 10-20 mg IV or 10-50 mg IM: indication eclampsia. It's avoided in acute HF and brain bleeds."),
          Q("Why is hydralazine avoided in acute decompensated HFrEF?", "Arterial vasodilation increases cardiac work (reflex tachycardia)", ["It causes bronchoconstriction", "It causes hyperkalemia", "It blocks the AV node"], "The Hypertensive Crisis slide: avoid hydralazine in acute decompensated HFrEF because it increases cardiac work.")
        ]
      },

      // ------------------------------------------------------------------ HTN emergencies
      {
        id: "brain-bleeds",
        source: EM,
        title: "The brain in hypertensive emergency",
        learn:
          tbl(["Problem", "Key facts"], [
            ["<strong>Intraparenchymal hemorrhage</strong>", "Hemorrhagic stroke from acute or <strong>long-standing</strong> HTN. Most often in the <strong>basal ganglia</strong>, from <strong>small penetrating arteries off the MCA</strong>. CT: bright white blood with darker edema around it"],
            ["Lacunar stroke", "Chronic HTN damages the same small penetrating MCA arteries (ischemic, not bleeding)"],
            ["<strong>PRES</strong>", "Vision changes, seizures, severe HA, brain edema. Edema in the <strong>bilateral occipital and parietal lobes</strong>, seen best on <strong>MRI</strong>. Improves over 2-4 days with gradual BP lowering"],
            ["Hypertensive encephalopathy", "Confusion from <strong>generalized</strong> brain edema"]
          ]) +
          '<p><strong>The slide 14 problem.</strong> The slide labels a picture \"subarachnoid hemorrhage\" and says blood collects between the skull and brain, follows the curve of the skull (concave), and is fairly easily treated with a burr hole. That description is a <strong>subdural hematoma</strong>.</p>' +
          tbl(["", "Subdural hematoma", "Subarachnoid hemorrhage"], [
            ["Where", "Between dura and arachnoid (\"between skull and brain\")", "Under the arachnoid, in the CSF around the brain"],
            ["CT", "<strong>Crescent (concave)</strong> following the skull", "Blood in the sulci and cisterns"],
            ["Usual cause", "Torn bridging veins", "Ruptured aneurysm (\"worst headache of my life\")"],
            ["Treatment", "<strong>Burr hole evacuation</strong>", "BP control (<strong>nicardipine</strong>), aneurysm coiling/clipping"]
          ]) +
          fix('Burr hole evacuation is for a <strong>subdural</strong> hematoma. If an exam question quotes the slide exactly, choose the slide\'s answer.') +
          mn('<strong>PRES</strong> = <strong>P</strong>osterior: parietal and occipital, both sides. <strong>Burr hole = suBdural.</strong>'),
        questions: [
          Q("Where do hypertensive intraparenchymal hemorrhages most often occur?", "Basal ganglia, from small penetrating arteries off the MCA", ["Cerebellum, from the basilar artery", "Frontal lobe, from the ACA", "Subarachnoid space, from a berry aneurysm"], "Long-standing HTN damages the small penetrating arteries off the MCA that supply the basal ganglia."),
          Q("Which lobes does PRES edema typically affect?", "Bilateral occipital and parietal lobes", ["Unilateral frontal lobe", "Bilateral temporal lobes", "The brainstem only"], "PRES = Posterior: both parieto-occipital regions."),
          Q("What is the best imaging test to see PRES edema?", "MRI", ["Non-contrast CT", "Carotid ultrasound", "Plain skull X-ray"], "PRES edema is seen best on MRI (hyperintense parieto-occipital lesions)."),
          Q("A hypertensive patient has seizures, severe headache, and vision changes. MRI shows bilateral parieto-occipital edema. Diagnosis?", "Posterior reversible encephalopathy syndrome (PRES)", ["Hypertensive encephalopathy with generalized edema", "Basal ganglia hemorrhage", "Lacunar stroke"], "Vision changes, seizures, severe HA, and posterior edema on MRI = PRES. It improves over 2-4 days with gradual BP lowering."),
          Q("A crescent-shaped (concave) collection of blood follows the inner skull on CT. Which bleed fits AND is treated with burr hole evacuation?", "Subdural hematoma", ["Subarachnoid hemorrhage from an aneurysm", "Intraparenchymal hemorrhage", "Lacunar infarct"], "That description (and burr hole treatment) is a subdural hematoma, even though slide 14 labels it subarachnoid.", "Which space sits right under the skull and dura?"),
          Q("What is the drug of choice for BP control in subarachnoid hemorrhage?", "Nicardipine", ["Nitroprusside", "Hydralazine", "Burr hole evacuation"], "A true subarachnoid hemorrhage is managed medically: nicardipine is the DOC; labetalol or esmolol also work. Avoid nitroprusside and hydralazine."),
          Q("What is the usual cause of a true (non-traumatic) subarachnoid hemorrhage?", "A ruptured aneurysm", ["Torn bridging veins", "A lacunar infarct", "PRES"], "Subarachnoid hemorrhage is usually from a ruptured aneurysm. Torn bridging veins cause subdural hematomas.")
        ]
      },
      {
        id: "urgency-emergency",
        source: EM,
        title: "Urgency vs emergency: how fast to lower BP",
        learn:
          '<p>Both start at <strong>SBP ≥ 180 and/or DBP ≥ 120</strong>. The difference is <strong>acute target-organ damage</strong>: none in urgency, present in emergency.</p>' +
          tbl(["", "Hypertensive urgency", "Hypertensive emergency"], [
            ["Where", "<strong>Outpatient</strong> (no ER needed)", "<strong>ICU / stepdown, IV meds</strong>"],
            ["First target", "Within <strong>2-4 hours</strong>: BP <strong>&lt; 160/100</strong>, or lower MAP by <strong>no more than 25-30%</strong>", "Lower MAP by <strong>no more than 10-20%</strong> over <strong>minutes to 1 hour</strong>"],
            ["Next", "Gradually to goal over <strong>1-2 weeks</strong>", "Another <strong>5-15%</strong> over the <strong>next 23 hours</strong>"],
            ["Then", "<strong>Prompt outpatient follow-up</strong>", "Oral meds over the next days to weeks"]
          ]) +
          '<p><strong>Why not drop it fast?</strong> Organs have adapted to high pressure (autoregulation shifted). Dropping too fast can cause stroke, MI, or AKI from underperfusion.</p>' +
          hy('Exceptions to the 10-20% rule: <strong>ischemic stroke</strong> (often don\'t lower), <strong>brain bleeds</strong>, and <strong>aortic dissection</strong> (lower fast: SBP 100-120 within 20 minutes).') +
          mn('Emergency: <strong>"10-20 in the first hour, 5-15 in the next 23."</strong> Urgency: <strong>"160/100 in 2-4 hours."</strong>'),
        questions: [
          Q("What separates hypertensive emergency from urgency?", "Acute or progressing target-organ damage", ["BP above 200/130", "Symptoms of headache", "Age over 65"], "Both are ≥180 and/or ≥120. Emergency has acute target-organ damage; urgency doesn't."),
          Q("A patient in clinic has BP 186/118 with no symptoms or organ damage. Where should they be managed?", "Outpatient, with BP lowered over hours and prompt follow-up", ["Send to the ER for IV nitroprusside", "Admit to the ICU", "No treatment needed"], "Urgency patients in an ambulatory setting do not need the ER. Lower BP outpatient with close follow-up."),
          Q("What is the target in hypertensive urgency within 2-4 hours?", "BP < 160/100 or MAP reduced by no more than 25-30%", ["BP < 120/80 within 1 hour", "MAP reduced by 50%", "No change for 24 hours"], "Within 2-4 hours: below 160/100, or MAP down no more than 25-30%. Then to goal over 1-2 weeks."),
          Q("In hypertensive emergency, how much should MAP be lowered in the first hour?", "No more than 10-20%", ["No more than 25-30%", "40-50%", "To a normal BP of 120/80"], "First hour: MAP down 10-20% with IV meds. Then another 5-15% over the next 23 hours."),
          Q("After the first hour of a hypertensive emergency, what happens over the next 23 hours?", "Lower MAP another 5-15% in the ICU", ["Lower MAP to normal immediately", "Switch to oral meds and discharge", "Stop all BP medications"], "Reduce MAP another 5-15% over the next 23 hours in the ICU or stepdown with IV meds, then oral meds over days to weeks."),
          Q("Why shouldn't BP be dropped too fast in a hypertensive emergency?", "Organs adapted to high pressure can become underperfused, causing stroke, MI, or AKI", ["Fast drops cause hyperkalemia", "IV drugs don't work quickly", "It causes rebound hypertension only"], "Autoregulation has shifted. Lowering below what organs can autoregulate causes ischemia.", "What has the body's autoregulation gotten used to?"),
          Q("Which hypertensive emergency needs BP lowered FASTER than the usual rule?", "Aortic dissection", ["Hypertensive encephalopathy", "Acute kidney injury", "PRES"], "Aortic dissection: rapidly lower SBP to 100-120 within 20 minutes.")
        ]
      },
      {
        id: "nitrates",
        source: EM,
        title: "Nitroprusside and nitroglycerin",
        learn:
          tbl(["", "Sodium nitroprusside (Nipride)", "Nitroglycerin"], [
            ["Use", "<strong>Most HTN emergencies</strong>; aortic dissection (with a BB)", "<strong>Coronary ischemia and heart failure</strong>"],
            ["Dose", "0.25-10 mcg/kg/min IV", "5-100 mcg/min IV"],
            ["Action", "Direct <strong>venous and arteriolar</strong> dilation: lower PVR and venous return. BP drops <strong>within 2 min</strong>, effect lasts ~10 min. <strong>Raises ICP</strong>", "Mostly <strong>venous</strong> (lowers preload), less arterial; <strong>dilates coronary arteries</strong>"],
            ["Big side effects", "<strong>Cyanide/thiocyanate toxicity</strong> (tx: sodium thiosulfate); <strong>methemoglobinemia</strong> (tx: methylene blue); N/V, muscle twitching, sweating", "HA, flushing, hypotension, methemoglobinemia; <strong>tachyphylaxis in 24-48 h</strong>"],
            ["Caution / avoid", "<strong>High ICP</strong>, <strong>azotemia</strong>, <strong>CKD</strong> (can't clear cyanide); avoid in brain bleeds", "<strong>PDE-5 inhibitors</strong> (sildenafil, tadalafil): severe hypotension"]
          ]) +
          '<p><strong>Azotemia</strong> = high BUN/creatinine from poor filtration. Cyanide builds up when the kidneys or liver can\'t clear it.</p>' +
          fix('"PDE-F" is <strong>PDE-5</strong>. And nitroprusside lowers peripheral <strong>vascular</strong> resistance, not \"venous resistance\".') +
          mn('Nitro<strong>PRUSS</strong>ide → <strong>Prussian blue</strong> is a cyanide compound. So: <strong>cyanide</strong>, and the brain <strong>swells</strong> (raises ICP).'),
        questions: [
          Q("What is the most feared toxicity of sodium nitroprusside?", "Cyanide and thiocyanate toxicity", ["Drug-induced lupus", "Angioedema", "Hyperglycemia"], "Nitroprusside releases large amounts of cyanide, treated with sodium thiosulfate."),
          Q("Besides cyanide toxicity, which other serious reaction can nitroprusside cause?", "Methemoglobinemia", ["Agranulocytosis", "Gynecomastia", "Hypothermia"], "Hemoglobin is oxidized to the ferric state and can't carry oxygen: cyanosis despite oxygen. Treat with methylene blue."),
          Q("In which patient should nitroprusside be used with caution?", "A patient with CKD and azotemia", ["A patient with asthma", "A patient with BPH", "A patient with gout"], "Caution with high ICP, azotemia, and CKD. Patients with kidney or liver disease can't clear cyanide well."),
          Q("What does nitroprusside do to intracranial pressure?", "Raises it", ["Lowers it", "Has no effect", "Lowers it only in children"], "Nitroprusside raises ICP, so it's avoided in brain bleeds and used with caution when ICP is high."),
          Q("How quickly does nitroprusside lower BP?", "Within about 2 minutes", ["Within 1-2 hours", "Within 24 hours", "After 3 days"], "It causes a precipitous drop within 2 minutes, and the effect lasts up to about 10 minutes."),
          Q("What is IV nitroglycerin's main indication in hypertensive emergency?", "Coronary ischemia and heart failure", ["Eclampsia", "Aortic dissection alone", "Sympathetic crisis from cocaine"], "NTG dilates veins (lowers preload) and coronary arteries, which is ideal for ischemia and pulmonary edema."),
          Q("A patient took sildenafil last night and now has chest pain. Which drug must be avoided?", "Nitroglycerin", ["Aspirin", "Metoprolol", "Morphine"], "Nitrates plus PDE-5 inhibitors (sildenafil, tadalafil) cause very severe hypotension."),
          Q("Why does a continuous nitroglycerin drip lose its effect after 1-2 days?", "Tachyphylaxis (tolerance)", ["Cyanide accumulation", "Hyperkalemia", "Kidney clearance increases"], "Tachyphylaxis develops in 24-48 hours, so a nitrate-free interval is needed."),
          Q("Which side effects match nitroprusside?", "Nausea, vomiting, muscle twitching, sweating", ["Scalp tingling and bronchoconstriction", "Hair growth and edema", "Dry cough and angioedema"], "The emergency drug table: nitroprusside causes N/V, muscle twitching, sweating, plus thiocyanate/cyanide toxicity.")
        ]
      },
      {
        id: "iv-emergency-drugs",
        source: EM,
        title: "IV emergency drugs: nicardipine, esmolol, labetalol, hydralazine",
        learn:
          tbl(["Drug", "Use it for", "Side effects", "Avoid in"], [
            ["<strong>Nicardipine (Cardene)</strong>: IV DHP CCB, 5-15 mg/h", "Most emergencies; <strong>DOC for brain bleeds</strong>; ischemic stroke; encephalopathy", "<strong>Tachycardia, HA, flushing, phlebitis</strong> (rotate IV site every 12 h)", "<strong>Acute HF, HFrEF, aortic stenosis, HCM</strong>; caution in coronary ischemia"],
            ["<strong>Esmolol</strong>: IV ultra-short BB", "<strong>Aortic dissection, perioperative</strong>", "<strong>Hypotension, nausea, asthma (bronchoconstriction), 1st-degree heart block, worsens decompensated HFrEF</strong>", "Asthma, decompensated HFrEF"],
            ["<strong>Labetalol</strong>: IV alpha/beta", "Most emergencies; ischemic stroke; eclampsia; cocaine/sympathetic crisis", "<strong>Vomiting, scalp tingling, bronchoconstriction, dizziness, heart block, orthostatic hypotension</strong>", "<strong>Acute heart failure</strong>"],
            ["<strong>Hydralazine</strong>: IV/IM", "<strong>Eclampsia</strong>", "Tachycardia, flushing, HA, angina", "Acute HFrEF, brain bleeds"]
          ]) +
          '<p><strong>Nicardipine timing:</strong> peak effect in <strong>1-2 hours</strong>, drops sharply 30 min after stopping, but <strong>~50 hours</strong> for all effect to clear (longer in kidney disease).</p>' +
          fix('Labetalol is avoided in <strong>acute</strong> heart failure. Carvedilol (its cousin) is a staple of chronic HFrEF.') +
          mn('<strong>Esmolol</strong> for the <strong>E</strong>xploding aorta (dissection). <strong>Scalp tingling = Labetalol</strong> (\"La-BET-a-tingle\"). <strong>Nicardipine</strong> veins get angry: rotate every 12 h.'),
        questions: [
          Q("Which side effects match IV nicardipine?", "Tachycardia, headache, flushing, local phlebitis", ["Bradycardia and heart block", "Cyanide toxicity and methemoglobinemia", "Scalp tingling and bronchoconstriction"], "Nicardipine is a DHP vasodilator: reflex tachycardia, HA, flushing, and vein irritation."),
          Q("How often should the IV site be rotated for a nicardipine drip?", "Every 12 hours", ["Every hour", "Every 72 hours", "It never needs rotating"], "Cardene irritates the vein, so the site is rotated every 12 hours."),
          Q("Nicardipine is contraindicated in which condition?", "Aortic stenosis", ["Ischemic stroke", "Subarachnoid hemorrhage", "Hypertensive encephalopathy"], "Contraindicated in aortic stenosis, HFrEF, and HCM, and not used in acute HF."),
          Q("What is esmolol's main indication in hypertensive emergency?", "Aortic dissection and perioperative HTN", ["Eclampsia", "Acute decompensated HFrEF", "Coronary ischemia with sildenafil use"], "Esmolol: aortic dissection and perioperative use."),
          Q("A patient with asthma needs BP control. Which IV drug's side effect list includes asthma/bronchoconstriction?", "Esmolol", ["Nicardipine", "Hydralazine", "Nitroglycerin"], "Esmolol is a beta-blocker. Its listed adverse effects include asthma, hypotension, nausea, first-degree heart block, and worsening decompensated HFrEF. (Labetalol also causes bronchoconstriction.)"),
          Q("Which IV drug is known for causing scalp tingling?", "Labetalol", ["Esmolol", "Nicardipine", "Nitroprusside"], "Labetalol: vomiting, scalp tingling, bronchoconstriction, dizziness, nausea, heart block, orthostatic hypotension."),
          Q("Labetalol is used in most hypertensive emergencies EXCEPT:", "Acute heart failure", ["Ischemic stroke", "Eclampsia", "Cocaine-induced hypertensive crisis"], "The emergency drug table: labetalol for most emergencies except acute heart failure."),
          Q("Which IV drug is listed specifically for eclampsia?", "Hydralazine", ["Nitroprusside", "Esmolol", "Nitroglycerin"], "Hydralazine 10-20 mg IV or 10-50 mg IM: indication eclampsia. Labetalol is also used."),
          Q("A patient on cocaine has BP 220/130 and HR 140. Why not give esmolol alone?", "Blocking beta alone leaves unopposed alpha vasoconstriction, raising BP further", ["Esmolol causes cyanide toxicity", "Esmolol raises heart rate", "Esmolol is only oral"], "With a catecholamine surge, beta-blockade alone sends catecholamines to alpha receptors. Use labetalol IV to block both.")
        ]
      },
      {
        id: "special-situations",
        source: EM,
        title: "Special cases: acute HF, stroke, brain bleeds",
        learn:
          tbl(["Situation", "BP rule", "Drugs"], [
            ["<strong>Acute heart failure</strong>", "SBP &lt; 140", "<strong>IV loop diuretic first</strong> (dry the lungs), then <strong>nitroglycerin</strong> (dilates veins and coronary arteries). <strong>Avoid BBs, CCBs, hydralazine</strong> in decompensated HFrEF"],
            ["<strong>Ischemic stroke, no tPA</strong>", "Treat <strong>only if ≥ 220 / ≥ 120</strong>", "<strong>Labetalol, nicardipine</strong>. Resume home meds after <strong>24-48 h</strong>"],
            ["<strong>Ischemic stroke getting tPA</strong>", "<strong>&lt; 185 / &lt; 110</strong> before IV or <strong>intra-arterial</strong> fibrinolysis", "Labetalol, nicardipine"],
            ["<strong>Intracerebral or subarachnoid hemorrhage</strong>", "Titrate SBP to about 160 (algorithm: hemorrhagic stroke &lt; 140, SAH &lt; 160)", "<strong>Nicardipine DOC</strong>; labetalol or esmolol. <strong>Avoid nitroprusside and hydralazine</strong>"],
            ["Aortic dissection", "SBP 100-120 within 20 min, HR &lt; 60", "Esmolol/labetalol + nitroprusside + morphine, then OR"]
          ]) +
          '<p><strong>Why leave BP high in ischemic stroke?</strong> The brain tissue around the clot (penumbra) is alive but starving. It depends on <strong>collateral vessels</strong>, which need high pressure to push blood in. Lowering BP would starve it.</p>' +
          '<p><strong>tPA</strong> is the \"clot buster\". BP must be under 185/110 first because high pressure plus a clot buster = bleeding into the brain.</p>' +
          fix('IA means <strong>intra-arterial</strong>, not intra-atrial. "Neins" means veins.') +
          mn('Stroke numbers: <strong>220/120 to treat</strong>, <strong>185/110 for tPA</strong>. Acute HF order: <strong>"Lasix, then Nitro"</strong>.'),
        questions: [
          Q("A patient with an acute ischemic stroke (not getting tPA) has BP 200/110. What do you do with the BP?", "Don't treat it; only treat if ≥ 220/120", ["Lower it to < 140/90 immediately", "Start a nitroprusside drip", "Lower it to < 185/110"], "Without tPA, treat only if SBP ≥ 220 and DBP ≥ 120. The penumbra needs the pressure."),
          Q("Why is BP allowed to stay high after an ischemic stroke?", "Collateral vessels around the ischemic area need high pressure to perfuse it", ["High BP dissolves the clot", "BP meds don't work in stroke", "It prevents seizures"], "The penumbra survives on collateral flow, which needs elevated pressure."),
          Q("What must BP be before an ischemic stroke patient receives tPA?", "< 185/110", ["< 220/120", "< 140/90", "< 160/100"], "Before IV or intra-arterial fibrinolysis with tPA, the goal is under 185/110."),
          Q("Which IV drugs are preferred for BP in ischemic stroke?", "Labetalol and nicardipine", ["Nitroprusside and hydralazine", "Esmolol and nitroglycerin", "Furosemide and nitroglycerin"], "Preferred: labetalol and nicardipine. Home meds resume 24-48 hours after the stroke."),
          Q("When can an ischemic stroke patient (no tPA) restart home BP meds?", "24-48 hours after the stroke", ["Immediately", "After 2 weeks", "Never"], "Resume the home regimen 24-48 hours after the stroke if there are no contraindications."),
          Q("What is the DOC for BP in intracerebral or subarachnoid hemorrhage?", "Nicardipine", ["Nitroprusside", "Hydralazine", "Nitroglycerin"], "Nicardipine is the DOC; labetalol or esmolol can be used. Avoid nitroprusside (raises ICP) and hydralazine."),
          Q("A patient with acute heart failure and pulmonary edema has BP 190/110. What is given first?", "IV loop diuretic", ["IV nitroglycerin", "IV metoprolol", "IV hydralazine"], "If fluid overloaded, an IV loop diuretic first to dry the lungs, then nitroglycerin."),
          Q("In acute heart failure, what is given after the loop diuretic?", "Nitroglycerin, to dilate the veins and coronary arteries", ["Esmolol, to slow the heart", "Diltiazem, to lower BP", "Hydralazine, to dilate arteries"], "NTG is a venous vasodilator that also dilates the coronaries. BBs, CCBs, and hydralazine are avoided in decompensated HFrEF."),
          Q("Which drugs should be avoided in acute decompensated HFrEF?", "Beta-blockers, CCBs, and hydralazine", ["Loop diuretics and nitroglycerin", "Oxygen and morphine", "ACE inhibitors after stabilization"], "BBs and CCBs depress contractility. Hydralazine increases cardiac work by arterial vasodilation.")
        ]
      }
    ]
  };
}());
