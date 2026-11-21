/* CAD Part V (Stager): pharmacologic management of ischemic heart disease and ACS, slide by slide.
   Slide text: data/slide-text-cad-part-5.js (generated). Pictures: images/cad5-slides/.
   Anything not on the slides is marked "(standard teaching)". Question ids "cad-part-5|s<slide>|<i>", "cad-part-5|<lo>|r|<i>": only append. */
(function () {
  "use strict";
  var S = SlideStudy.S, Q = SlideStudy.Q;
  var los = [];

  /* ---------------------------------------------------------------- LO 1 */
  los.push({
    id: "lo1", label: "LO 1", title: "Goals of CAD treatment: supply, demand and risk",
    objective: "Explain the pharmacologic goals of treatment for chronic coronary artery disease, including modification of cardiovascular risk factors and restoration of the balance between myocardial oxygen supply and demand.",
    slides: [
      S(1, "Title: CAD Part V, pharmacologic management of ischemic heart disease and ACS", {
        why: "<p>This lecture is the drug side of CAD I-IV. Every anti-anginal drug works by tipping the oxygen balance back: lower <b>demand</b> (HR, contractility, wall stress) or raise <b>supply</b> (open the coronary). Every ACS drug either eases ischemia or stops the clot (platelets, fibrin, or dissolving it).</p>"
      }),
      S(2, "Determinants of oxygen supply and demand", {
        why: "<p>Picture a scale. <b>Supply</b> side: coronary blood flow, how much oxygen the blood carries (hemoglobin and saturation) and coronary perfusion pressure. <b>Demand</b> side: heart rate, contractility and wall stress. Angina appears when demand outweighs supply. Heart rate counts twice, because a fast rate raises demand AND shortens diastole, when the coronaries fill (standard teaching).</p>",
        q: [
          Q("Which of these sits on the oxygen DEMAND side?", "Contractility", ["Hemoglobin", "Coronary perfusion pressure", "Oxygen saturation"], "Demand is set by heart rate, contractility and wall stress."),
          Q("Which of these sits on the oxygen SUPPLY side?", "Arterial oxygen content (hemoglobin and saturation)", ["Heart rate", "Ventricular wall stress", "Contractility"], "Supply depends on coronary flow, oxygen content and perfusion pressure."),
          Q("Why does a fast heart rate hurt the oxygen balance?", "It raises demand and shortens diastolic filling time", ["It raises supply only", "It lowers wall stress", "It has no effect"], "The heart works harder and the coronaries have less time to fill (standard teaching).")
        ]
      }),
      S(3, "Alteration of oxygen supply and demand", {
        why: "<p>Use this table to find hidden triggers of angina. <b>More demand</b>: fever, hyperthyroidism, meth/cocaine, hypertension, anxiety, albuterol, tachycardia, HCM, aortic stenosis. <b>Less supply</b>: anemia, hypoxemia, sickle cell, stimulants (spasm), thick blood (polycythemia, dehydration), CAD, AS, HCM. AS and HCM appear on BOTH sides: a thick muscle needs more oxygen while pushing against a fixed outflow that limits flow.</p>",
        q: [
          Q("A patient with stable CAD gets new angina while on albuterol for a COPD flare. Why?", "Beta agonists increase myocardial oxygen demand", ["Albuterol lowers hemoglobin", "Albuterol causes anemia", "Albuterol slows the heart"], "The table lists beta agonists as a noncardiac cause of increased demand."),
          Q("Which condition appears as a cause of BOTH more demand and less supply?", "Aortic stenosis", ["Anemia", "Fever", "Hyperthyroidism"], "AS and HCM raise demand and limit supply at the same time."),
          Q("Polycythemia vera can worsen angina by what mechanism?", "Higher blood viscosity lowers supply", ["It raises heart rate", "It lowers blood pressure", "It increases contractility"], "Thick blood is listed as a cause of decreased supply.")
        ]
      }),
      S(4, "Signs and symptoms associated with angina", {
        why: "<p>Classic angina: pressure or heaviness, gradual onset, substernal, radiating to the left arm, shoulder or jaw, lasting <b>2-30 minutes</b>, set off by exertion, cold, fright, anger or sex, and relieved by nitroglycerin within <b>45 seconds to 5 minutes</b>. Pain lasting seconds or hours, or that is sharp and pinpoint, is less likely angina (standard teaching).</p>",
        q: [
          Q("How long does a typical angina episode last?", "2 to 30 minutes", ["A few seconds", "Several hours", "All day"], "The slide gives a duration of 2-30 minutes."),
          Q("How fast does nitroglycerin usually relieve angina?", "Within 45 seconds to 5 minutes", ["Within 1 second", "After 30 minutes", "Only after 2 hours"], "NTG relief within 45 seconds to 5 minutes is listed."),
          Q("Which trigger is listed for angina?", "Cold temperatures", ["Lying flat after meals", "Pressing on the chest wall", "Deep breathing"], "Exertion, cold, fright, anger and sex are the listed triggers.")
        ]
      }),
      S(5, "Treatment goals in CAD", {
        why: "<p>Two time frames. <b>Short term</b>: relieve angina so the patient can be active, by restoring the supply and demand balance. <b>Long term</b>: prevent MI, arrhythmias, heart failure and death. Anti-anginals mostly serve the short-term goal; aspirin, statins and risk factor control serve the long-term goal.</p>",
        q: [
          Q("What is a SHORT-term goal of CAD treatment?", "Reduce angina and restore supply and demand balance", ["Prevent death over 10 years", "Cure atherosclerosis", "Prevent all heart failure"], "Short-term goals are symptom relief and better function."),
          Q("What is a LONG-term goal of CAD treatment?", "Prevent MI, arrhythmias and heart failure", ["Stop all chest pain today", "Lower heart rate during exercise only", "Relieve one angina attack"], "Long-term goals are preventing events, morbidity and mortality.")
        ]
      }),
      S(6, "Treatment in a nutshell", {
        why: "<p>Two jobs, two kinds of drugs. Job 1, <b>prevent the future</b>: lifestyle plus preventive medicines (statin, aspirin, BP and diabetes control). Job 2, <b>relieve symptoms</b>: beta blockers, CCBs, nitrates and ranolazine, picked by heart rate, BP and other diseases.</p>",
        q: [
          Q("Which four antianginal drug groups are named for relieving angina?", "Beta blockers, CCBs, nitrates and ranolazine", ["Statins, aspirin, ACEi and SGLT2i", "Diuretics, digoxin, ARBs and statins", "Heparin, warfarin, tPA and aspirin"], "These four relieve angina and improve function."),
          Q("What guides which antianginal drug you choose?", "Symptoms, heart rate, blood pressure and comorbidities", ["The patient's height", "The LDL level only", "The troponin level"], "Selection is tailored to symptoms, HR, BP and other diseases.")
        ]
      }),
      S(7, "Risk factor modification: smoking, hypertension, lipids", {
        why: "<p>Prevention rests on three big levers. <b>Tobacco</b>: ask, advise, support and offer medication; avoid secondhand smoke. <b>BP</b>: below 130/80 for many CAD patients, individualized. <b>Lipids</b>: high-intensity statin for established ASCVD, then recheck LDL to see if more is needed.</p>",
        q: [
          Q("What BP goal is appropriate for many patients with CAD?", "Below 130/80 mm Hg", ["Below 150/90 mm Hg", "Below 110/60 mm Hg", "Below 160/100 mm Hg"], "The slide gives under 130/80, individualized."),
          Q("What lipid therapy is typical for established ASCVD?", "High-intensity statin, then recheck LDL", ["No statin if LDL is normal", "Fish oil alone", "Low-intensity statin only"], "High-intensity statin is standard, with LDL rechecked to see if more is needed."),
          Q("Besides the patient quitting, what smoking exposure should they avoid?", "Secondhand smoke", ["Wood stoves only", "All cooking smoke", "None"], "The slide advises avoiding secondhand smoke.")
        ]
      }),
      S(8, "Risk factor modification: exercise, weight, diabetes, alcohol", {
        why: "<p><b>Exercise</b>: at least 150 minutes a week of moderate activity as tolerated. <b>Weight</b>: sustainable management; BMI is one measure, not the target. <b>Diabetes</b>: A1C around 7% for many, individualized. <b>Alcohol</b>: never recommend it for heart benefit.</p>",
        q: [
          Q("How much moderate activity per week is advised for CAD patients as tolerated?", "At least 150 minutes", ["At least 30 minutes", "At least 500 minutes", "None until cleared by cath"], "The slide gives at least 150 minutes per week."),
          Q("What A1C goal is reasonable for many nonpregnant adults with CAD and diabetes?", "Around 7%", ["Below 5%", "Around 10%", "Any value is fine"], "About 7% is reasonable, individualized to the patient."),
          Q("A patient asks if a glass of red wine daily will protect his heart. What does the deck say?", "Do not recommend alcohol for cardiovascular benefit", ["Yes, one glass daily is advised", "Yes, but only red wine", "Two drinks are better than one"], "Alcohol is not recommended for heart benefit.")
        ]
      }),
      S(9, "Stable angina: the four drug groups", {
        why: "<p>A roadmap of the next section: nitrates, beta blockers, calcium channel blockers and ranolazine (Ranexa). Keep asking for each one: does it lower demand, raise supply, or both?</p>",
        q: [
          Q("Which drug is the brand Ranexa?", "Ranolazine", ["Isosorbide mononitrate", "Amlodipine", "Metoprolol"], "Ranexa is ranolazine.")
        ]
      }),
      S(10, "Drug therapy for stable angina", {
        why: "<p>The three classic anti-ischemic classes are beta blockers, nitrates and CCBs. Start with a <b>beta blocker or a CCB</b>, and add more if symptoms persist. Choose by heart rate (fast favors a BB or non-DHP), BP, LV function and other diseases (asthma pushes away from BB).</p>",
        q: [
          Q("What is commonly used FIRST as maintenance therapy for stable angina?", "A beta blocker or calcium channel blocker", ["Ranolazine", "Long-acting nitrate alone", "Morphine"], "A BB or CCB is the usual starting drug."),
          Q("Which is NOT one of the three classic anti-ischemic drug classes on this slide?", "Statins", ["Beta blockers", "Nitrates", "Calcium channel blockers"], "Statins prevent events but are not anti-ischemic drugs.")
        ]
      })
    ],
    review: [
      Q("A patient's angina is worse since he developed a fever and became anemic. Which two sides of the balance moved?", "Demand rose and supply fell", ["Supply rose and demand fell", "Only demand fell", "Neither changed"], "Fever raises demand and anemia lowers oxygen content."),
      Q("Which goal is long term: relieving today's angina or preventing a future MI?", "Preventing a future MI", ["Relieving today's angina", "Both are short term", "Neither is a goal"], "Event prevention is the long-term goal."),
      Q("A patient with CAD has a BP of 142/88. What target does the deck give for many CAD patients?", "Below 130/80", ["Below 140/90 is enough", "Below 120/70 for all", "No BP target"], "Many CAD patients should be under 130/80."),
      Q("Which condition raises demand: hyperthyroidism or hypoxemia?", "Hyperthyroidism", ["Hypoxemia", "Both lower supply only", "Neither"], "Hyperthyroidism raises demand while hypoxemia lowers supply."),
      Q("Which two drug classes are usually started first for stable angina symptoms?", "Beta blocker or CCB", ["Nitrate or ranolazine", "Statin or aspirin", "ACEi or ARB"], "A BB or CCB is the initial maintenance choice.")
    ]
  });

  /* ---------------------------------------------------------------- LO 2 */
  los.push({
    id: "lo2", label: "LO 2", title: "Nitrates",
    objective: "Describe the mechanisms of action, clinical indications, adverse effects, contraindications, and monitoring parameters of nitrates used in the treatment of stable angina and acute coronary syndromes.",
    slides: [
      S(11, "Nitrates: mechanism of action", {
        why: "<p>Nitrates become <b>nitric oxide</b>, which relaxes smooth muscle. The biggest effect is on <b>veins</b>: blood pools in the veins, less returns to the heart (lower preload), the ventricle is smaller, wall stress falls and so does oxygen demand. They also open coronaries and break spasm, a smaller supply benefit.</p>",
        q: [
          Q("What do nitrates turn into in the body?", "Nitric oxide", ["Nitrous oxide", "Carbon monoxide", "Adenosine"], "Nitrates are converted to nitric oxide, which relaxes smooth muscle."),
          Q("What is the predominant vascular effect of nitrates?", "Venodilation, lowering preload", ["Arterial constriction", "Raising heart rate", "Increasing contractility"], "Venous dilation reduces venous return and preload."),
          Q("Besides lowering preload, how can nitrates help supply?", "They dilate coronaries and relieve spasm", ["They raise hemoglobin", "They slow the heart rate", "They thin the blood"], "Coronary dilation and spasm relief improve supply.")
        ]
      }),
      S(12, "Nitrates on the supply and demand scale", {
        why: "<p>Demand side: less preload → less wall stress → less oxygen demand (the main effect). Supply side: coronary dilation may improve flow, especially when spasm is the problem. That's why nitrates work for both classic angina and vasospastic angina.</p>",
        q: [
          Q("Through which chain do nitrates mainly lower oxygen demand?", "Less preload → less wall stress → less demand", ["Less heart rate → less contractility", "More preload → more stretch", "Less hemoglobin → less oxygen"], "Preload reduction lowers wall stress and demand."),
          Q("When is the supply benefit of nitrates most useful?", "With coronary spasm", ["With anemia", "With hypothyroidism", "With bradycardia"], "Coronary dilation particularly helps spasm.")
        ]
      }),
      S(13, "Nitrate forms: onset, duration and use", {
        why: "<p>Match speed to job. <b>IV NTG</b> (onset 1-2 min, lasts 3-5 min) and <b>SL NTG</b> (1-3 min, lasts 30-60 min) treat acute chest pain. <b>Isosorbide dinitrate</b> (4-6 h), the <b>patch</b> (&gt;8 h) and <b>isosorbide mononitrate</b> (6-8 h) prevent stable angina. Every form causes tolerance. IV NTG is also listed for hypertension.</p>",
        q: [
          Q("Which nitrate has the shortest duration of action?", "IV nitroglycerin (3-5 minutes)", ["SL nitroglycerin", "Isosorbide mononitrate", "Nitroglycerin patch"], "IV NTG lasts only 3-5 minutes, so it can be titrated quickly."),
          Q("Which nitrate forms are indicated for ACUTE chest pain?", "IV and SL nitroglycerin", ["Patch and isosorbide mononitrate", "Isosorbide dinitrate only", "None of them"], "Only the fast IV and SL forms treat acute pain."),
          Q("Which nitrate forms cause tolerance?", "All of them", ["Only the patch", "Only IV", "None"], "The table marks tolerance YES for every form."),
          Q("What is the usual starting dose of isosorbide mononitrate?", "30 mg daily", ["0.4 mg PRN", "5-10 mcg/min", "10-20 mg TID"], "The table lists 30 mg daily for isosorbide mononitrate.")
        ]
      }),
      S(14, "IV nitroglycerin", {
        why: "<p>The drip is used when pain persists despite SL nitro and an IV is in. Its short half-life is the point: you can turn it up or down and it wears off in minutes, which is safer when BP is marginal. It is also the drug of choice for hypertensive emergency with decompensated HF and pulmonary edema.</p>",
        q: [
          Q("Why is IV nitroglycerin useful in a patient with borderline BP?", "It can be titrated and its effect is transient", ["It raises BP", "It lasts 24 hours", "It never lowers BP"], "Because it wears off fast, the dose can be backed off if BP drops."),
          Q("IV nitroglycerin is the treatment of choice for which hypertensive emergency?", "One with decompensated HF and pulmonary edema", ["One with aortic dissection only", "One with eclampsia", "One with pheochromocytoma"], "The slide names HTN emergency with decompensated HF/pulmonary edema.")
        ]
      }),
      S(15, "Sublingual nitroglycerin: how to use it", {
        why: "<p>Every CAD patient carries SL NTG. Steps: stop and sit, one dose at onset, and <b>if not better in 5 minutes, call 911</b>, don't wait to use all three. While waiting, more doses every 5 minutes, up to three total, if BP allows. The point is that pain not relieved by one nitro may be an MI.</p>",
        q: [
          Q("A patient takes one SL nitro and still has pain 5 minutes later. What should he do?", "Call 911", ["Wait another 30 minutes", "Take three more tablets at once", "Go to sleep"], "Unrelieved pain at 5 minutes means call 911 without waiting."),
          Q("What should a patient do right before taking SL nitroglycerin?", "Stop activity and sit down", ["Run to the car", "Drink coffee", "Lie on the floor face down"], "Sitting protects against the drop in BP."),
          Q("While waiting for EMS, how many SL nitro doses can be taken in total?", "Up to three, 5 minutes apart, if BP allows", ["Unlimited", "Only one ever", "Ten"], "Doses every 5 minutes up to three total if BP permits.")
        ]
      }),
      S(16, "SL nitroglycerin: special considerations", {
        why: "<p>Headache comes from dilated cerebral vessels. SL nitro dilates veins quickly (and arteries less), so BP can drop: sit first. Let it dissolve under the tongue; swallowing it wastes it in the liver's first pass (standard teaching).</p>",
        q: [
          Q("Why does nitroglycerin cause headache?", "It dilates cerebral blood vessels", ["It raises intracranial pressure by fluid retention", "It causes bleeding", "It lowers blood sugar"], "Vasodilation includes the cerebral vessels."),
          Q("What is the instruction about swallowing an SL nitro tablet?", "Do not swallow it; let it dissolve", ["Swallow it with water", "Chew and swallow", "Crush and inhale"], "SL tablets must dissolve under the tongue.")
        ]
      }),
      S(17, "Long-acting nitrates", {
        why: "<p>Long-acting nitrates are <b>second-line</b> when angina is frequent despite a beta blocker. <b>Isosorbide mononitrate (Imdur)</b>: ER once daily; IR at 8 am and 3 pm to leave the night drug-free. <b>Isosorbide dinitrate (Isordil)</b>: 2-3 times daily in the same pattern.</p>",
        q: [
          Q("When are long-acting nitrates used in stable angina?", "Second-line when symptoms persist on a beta blocker", ["First-line for all", "Only for acute pain", "Never"], "They are added when a beta blocker alone isn't enough."),
          Q("Immediate-release isosorbide mononitrate is given at 8 am and 3 pm. Why?", "To leave a nitrate-free interval overnight", ["To match meals", "Because it lasts 24 hours", "To avoid daytime headache"], "The gap prevents tolerance."),
          Q("What is the brand name of isosorbide mononitrate?", "Imdur", ["Isordil", "Ranexa", "Plavix"], "Imdur is isosorbide mononitrate; Isordil is the dinitrate.")
        ]
      }),
      S(18, "Long-acting nitrates: prevention, timing and the free interval", {
        why: "<p>Extended-release nitrates <b>prevent</b> angina; they do not treat an attack (that's SL NTG). Time doses to cover when angina usually happens, and leave a <b>10-12 hour nitrate-free interval</b> each day so tolerance doesn't develop.</p>",
        q: [
          Q("How long is the daily nitrate-free interval?", "10-12 hours", ["1-2 hours", "24 hours", "None is needed"], "A 10-12 hour gap minimizes tolerance."),
          Q("Can extended-release isosorbide relieve an acute angina attack?", "No, it is for prevention", ["Yes, within 1 minute", "Yes, better than SL NTG", "Only if chewed"], "Long-acting nitrates prevent symptoms rather than relieve them.")
        ]
      }),
      S(19, "Nitrate side effects: tolerance and headache", {
        why: "<p><b>Tolerance (tachyphylaxis)</b>: continuous exposure blunts the response, within 24-48 hours, prevented by a daily nitrate-free gap. <b>Headache</b>: common, soon after a dose, and it does NOT tell you whether the drug is working.</p>",
        q: [
          Q("How soon can nitrate tolerance develop with continuous use?", "Within 24-48 hours", ["After 6 months", "After 10 years", "Never"], "Tolerance can appear within 24-48 hours."),
          Q("A patient says his nitro must be strong because it gives him a headache. Is he right?", "No, headache does not show whether it is effective", ["Yes, headache proves it works", "Yes, no headache means it's expired", "Only with the patch"], "Headache is a side effect unrelated to therapeutic effect.")
        ]
      }),
      S(20, "Nitrate side effects: flushing, orthostasis and dizziness", {
        why: "<p>Flushing is vasodilation of skin vessels. Orthostatic hypotension comes from blood pooling in the veins, so less returns to the heart. Sit before SL nitro, and be careful when BP is low or the patient is dry.</p>",
        q: [
          Q("What causes orthostatic hypotension with nitrates?", "Venous pooling and less venous return", ["Bradycardia", "Bleeding", "Kidney failure"], "Blood pools in dilated veins, so less reaches the heart."),
          Q("In which patients should nitrates be used with caution because of dizziness?", "Low BP or volume depletion", ["High BP", "Fluid overload", "Tachycardia from fever"], "Low BP or dehydration worsens the BP drop.")
        ]
      }),
      S(21, "Nitrate contraindication: PDE-5 inhibitors", {
        why: "<p>PDE-5 inhibitors (sildenafil, vardenafil, tadalafil) raise cGMP, the same pathway nitric oxide uses (standard teaching). Together they cause severe hypotension. Rule: no nitrate within 24 hours of a PDE-5 inhibitor (longer for tadalafil in standard teaching). Remember PDE-5 drugs are also used for pulmonary hypertension (Revatio, Adcirca).</p>",
        q: [
          Q("Which drug class must not be combined with nitrates within 24 hours?", "PDE-5 inhibitors", ["Statins", "ACE inhibitors", "SSRIs"], "The combination can cause severe hypotension."),
          Q("Sildenafil is sold for erectile dysfunction as Viagra. Under what brand is it used for pulmonary hypertension?", "Revatio", ["Cialis", "Levitra", "Imdur"], "Revatio is sildenafil for pulmonary hypertension."),
          Q("Which is a PDE-5 inhibitor?", "Tadalafil", ["Ticagrelor", "Torsemide", "Timolol"], "Tadalafil (Cialis) is a PDE-5 inhibitor.")
        ]
      }),
      S(22, "Nitrate contraindications and cautions", {
        why: "<p>All three cautions are \"needs preload\" states. <b>HCM with outflow obstruction</b>: a smaller ventricle narrows the outflow further. <b>Severe AS</b>: a fixed valve can't compensate, so BP falls. <b>Volume depletion or low BP</b>: there's no reserve.</p>",
        q: [
          Q("Why can nitrates worsen HCM with LV outflow obstruction?", "Lower preload makes the obstruction worse", ["They thicken the septum", "They cause bradycardia", "They raise afterload"], "A smaller, emptier ventricle narrows the outflow tract."),
          Q("Why are nitrates used cautiously in severe aortic stenosis?", "Vasodilation and lower preload can cause hypotension", ["They tighten the valve", "They cause AF", "They raise heart rate too little"], "A fixed valve can't raise output when preload falls.")
        ]
      }),
      S(23, "Nitrates: monitoring", {
        why: "<p>Check BP, HR, dizziness and angina. Track how often the patient uses SL nitro: rising use means worsening disease. SL nitro is for attacks or before predictable exertion. New, worse, longer or rest symptoms need urgent evaluation (could be ACS).</p>",
        q: [
          Q("A patient used 2 SL nitros a month and now uses 3 a day. What does this mean?", "Worsening angina needing urgent evaluation", ["Good control", "Nitrate allergy", "Normal aging"], "Rising nitro use and more frequent symptoms signal unstable disease."),
          Q("Besides acute attacks, when can short-acting nitroglycerin be used?", "Before predictable exertion", ["Every morning regardless", "Only at bedtime", "Never otherwise"], "It can be taken before activities known to cause angina.")
        ]
      }),
      S(24, "Nitrates and esophageal spasm", {
        why: "<p>Nitrates relax all smooth muscle, including the esophagus. So chest pain that goes away with nitro is NOT proof of angina: esophageal spasm responds too.</p>",
        q: [
          Q("Substernal pain resolves with nitroglycerin. Does that prove it was cardiac?", "No, esophageal spasm also responds to nitrates", ["Yes, always", "Yes, if it took 5 minutes", "Only in women"], "Nitrates relax esophageal smooth muscle too."),
          Q("What off-label use of nitrates is mentioned?", "Esophageal spasm", ["Migraine", "Asthma", "Gout"], "Nitrates may relieve esophageal spasm.")
        ]
      })
    ],
    review: [
      Q("A man on tadalafil yesterday has chest pain at home. Which drug in his kit should he NOT take?", "Sublingual nitroglycerin", ["Aspirin", "His metoprolol", "His statin"], "Nitrates within the PDE-5 window can cause severe hypotension."),
      Q("Which nitrate would you choose to prevent afternoon exertional angina: SL NTG or isosorbide mononitrate?", "Isosorbide mononitrate", ["SL NTG", "IV NTG", "None"], "Long-acting nitrates prevent symptoms on a schedule."),
      Q("A patient wears his nitro patch 24 hours a day and it stopped helping. Why?", "Nitrate tolerance from no free interval", ["The patch is expired", "His angina is cured", "He is allergic"], "Continuous exposure causes tolerance; he needs a 10-12 hour gap."),
      Q("Nitrates mainly lower demand by acting on which vessels?", "Veins", ["Arteries only", "Capillaries", "Lymphatics"], "Venodilation lowers preload and wall stress."),
      Q("A patient with an inferior STEMI and BP 84/50 still has pain. Is IV nitro appropriate?", "No, hypotension is a contraindication", ["Yes, at high dose", "Yes, as a bolus", "Yes, with diuretics"], "Nitrates worsen hypotension."),
      Q("When should a patient with chest pain call 911 after taking SL nitro?", "If not relieved within 5 minutes", ["After the third dose only", "After 1 hour", "Never"], "Waiting for all three doses delays care.")
    ]
  });

  /* ---------------------------------------------------------------- LO 3 */
  los.push({
    id: "lo3", label: "LO 3", title: "Beta blockers",
    objective: "Describe the mechanisms of action, clinical indications, adverse effects, contraindications, and monitoring parameters of beta-blockers used in the treatment of stable angina and acute coronary syndromes.",
    slides: [
      S(25, "Beta receptors: β1 and β2", {
        why: "<p><b>β1</b> (heart and kidney JG cells): speeds the heart, strengthens contraction, speeds AV conduction and releases renin. Block it and all four go down. <b>β2</b> (bronchi and vessels): opens airways and vessels. Block it and airways can clamp down. Memory: you have 1 heart and 2 lungs (standard teaching).</p>",
        q: [
          Q("Where are β1 receptors mainly found?", "Heart and kidney juxtaglomerular cells", ["Bronchial smooth muscle", "Skeletal muscle only", "Liver"], "β1 sits in the heart and the renin-releasing JG cells."),
          Q("Blocking β1 receptors lowers which kidney hormone?", "Renin", ["Erythropoietin", "Aldosterone directly", "ADH"], "β1 stimulation releases renin, so blockade reduces it."),
          Q("What can happen when β2 receptors are blocked?", "Bronchoconstriction", ["Bronchodilation", "Tachycardia", "Renin release"], "β2 normally opens airways.")
        ]
      }),
      S(26, "Beta receptors and their neurotransmitters", {
        pic: "<p><b>Beta (β) Receptors.</b> What are beta receptors? G protein-coupled receptors on cell surfaces; part of the sympathetic (adrenergic) nervous system; activated by the catecholamines epinephrine and norepinephrine. (Drawing: a β receptor (GPCR) in the cell membrane.)</p><p>Which neurotransmitters activate beta receptors? <b>Epinephrine</b> (from adrenal medulla): activates β1, β2, β3. <b>Norepinephrine</b> (from sympathetic nerve terminals): activates primarily β1 (also β2, less β3).</p>",
        why: "<p>Beta receptors are G protein-coupled receptors of the sympathetic system. Epinephrine (adrenal medulla) hits β1, β2 and β3; norepinephrine (nerve endings) hits mostly β1. A beta blocker stands in front of these receptors so the stress hormones can't push the heart.</p>",
        q: [
          Q("What type of receptor is a beta receptor?", "G protein-coupled receptor", ["Ion channel", "Nuclear receptor", "Tyrosine kinase"], "The picture labels the beta receptor a GPCR."),
          Q("Norepinephrine from nerve terminals mainly activates which receptor?", "β1", ["β3 only", "Muscarinic", "Nicotinic"], "Norepinephrine acts primarily on β1."),
          Q("Where does circulating epinephrine come from?", "The adrenal medulla", ["The adrenal cortex", "The thyroid", "The posterior pituitary"], "Epinephrine is released from the adrenal medulla.")
        ]
      }),
      S(27, "Beta blockers in stable angina", {
        why: "<p>Beta blockers are <b>first-line</b> for stable angina symptoms. They blunt epinephrine and norepinephrine, so heart rate, BP and contractility all fall, which lowers demand. The slower rate also lengthens diastole, when the coronaries fill, a bonus for supply.</p>",
        q: [
          Q("How do beta blockers mainly relieve angina?", "They lower heart rate, BP and contractility", ["They dilate veins", "They dissolve clots", "They raise preload"], "Less HR, BP and contractility means less oxygen demand."),
          Q("How does a slower heart rate help coronary supply?", "It lengthens diastolic filling time", ["It raises hemoglobin", "It shortens diastole", "It thickens the blood"], "Coronaries fill in diastole, so more time means more flow.")
        ]
      }),
      S(28, "Types of beta blockers", {
        why: "<p><b>Cardioselective (β1)</b>: metoprolol, atenolol, bisoprolol, preferred in lung disease (standard teaching). <b>Nonselective</b>: propranolol, nadolol, timolol. <b>With α1 blockade</b>: carvedilol and labetalol, which also dilate arteries. Memory for cardioselective: A-B-M (atenolol, bisoprolol, metoprolol), standard teaching.</p>",
        q: [
          Q("Which beta blocker is nonselective?", "Propranolol", ["Metoprolol", "Atenolol", "Bisoprolol"], "Propranolol blocks both β1 and β2."),
          Q("Which beta blocker also blocks α1 receptors?", "Carvedilol", ["Atenolol", "Nadolol", "Metoprolol"], "Carvedilol and labetalol add α1 blockade."),
          Q("Which group is metoprolol in?", "β1-selective (cardioselective)", ["Nonselective", "α1 plus β blocker", "Calcium channel blocker"], "Metoprolol preferentially blocks β1.")
        ]
      }),
      S(29, "Beta blockers on the supply and demand scale", {
        why: "<p>Demand side (the main effect): less heart rate, less contractility, lower BP and wall stress. Supply side: a longer diastole may support coronary perfusion. The single biggest anti-anginal effect is the lower heart rate.</p>",
        q: [
          Q("What is the MAIN antianginal effect of beta blockers?", "Lower heart rate", ["Coronary dilation", "Lower preload", "Higher oxygen content"], "The slide calls lower heart rate the main effect."),
          Q("On which side of the scale do beta blockers act most?", "Demand", ["Supply", "Neither", "Only oxygen content"], "They mainly lower oxygen demand.")
        ]
      }),
      S(30, "Avoid beta blockers in vasospastic angina", {
        why: "<p>Coronary tone is a tug of war: β2 relaxes, α1 constricts. Block β2 (especially with nonselective drugs) and α1 constriction wins unopposed, so spasm worsens. That's why CCBs (and nitrates) treat vasospastic angina.</p>",
        q: [
          Q("Why can beta blockers worsen vasospastic angina?", "Unopposed alpha-receptor vasoconstriction", ["They raise heart rate", "They cause anemia", "They lower preload too much"], "With β2 blocked, α constriction is unopposed."),
          Q("What is preferred first-line therapy for vasospastic angina?", "Calcium channel blockers", ["Nonselective beta blockers", "Ranolazine", "Aspirin alone"], "CCBs relax the coronary smooth muscle.")
        ]
      }),
      S(31, "Beta blockers: adverse effects", {
        why: "<p>Group them. <b>General</b>: fatigue, dizziness, less exercise tolerance, cold hands, sexual dysfunction. <b>CV</b>: bradycardia, hypotension, AV block, can worsen acute decompensated HF. <b>Lungs</b>: bronchospasm (mostly nonselective). <b>Metabolic</b>: hides the fast heartbeat warning of hypoglycemia. <b>Withdrawal</b>: stopping suddenly can cause rebound tachycardia, angina or MI, so taper.</p>",
        q: [
          Q("A diabetic on insulin starts a beta blocker. What warning should you give?", "It can mask the racing heart of hypoglycemia", ["It causes hyperglycemia crises", "It cures diabetes", "It raises insulin needs tenfold"], "Tachycardia, an adrenergic warning sign, is blunted."),
          Q("A patient stops his metoprolol abruptly. What can happen?", "Rebound tachycardia, angina or MI", ["Nothing", "Permanent bradycardia", "Hypoglycemia"], "Abrupt withdrawal can cause rebound; taper instead."),
          Q("Which beta blockers are most likely to cause bronchospasm?", "Nonselective agents", ["Cardioselective agents", "None of them", "Only carvedilol"], "Nonselective drugs block β2 in the airways.")
        ]
      }),
      S(32, "Beta blockers: contraindications", {
        why: "<p>Don't slow or weaken a heart that's already slow, blocked or failing: severe bradycardia or symptomatic hypotension, 2nd- or 3rd-degree AV block without a working pacemaker, acute decompensated HF, cardiogenic shock or low output, and active bronchospasm.</p>",
        q: [
          Q("Which patient should NOT start a beta blocker?", "One with third-degree AV block and no pacemaker", ["One with stable angina and HR 88", "One with hypertension", "One after a recent MI with normal vitals"], "High-grade AV block without a pacemaker is a contraindication."),
          Q("Can a beta blocker be used with second-degree AV block if the patient has a working pacemaker?", "Yes, the pacemaker protects against block", ["No, never", "Only nonselective ones", "Only IV"], "The contraindication is AV block without a functioning pacemaker."),
          Q("Which HF state is a contraindication to starting a beta blocker?", "Acute decompensated HF or cardiogenic shock", ["Stable chronic HFrEF", "HF in remission", "Compensated HFpEF"], "Beta blockers can worsen decompensated failure and shock.")
        ]
      })
    ],
    review: [
      Q("A patient with asthma needs a beta blocker for angina. Which type would you prefer?", "A cardioselective beta blocker", ["A nonselective beta blocker", "Propranolol", "Nadolol"], "β1-selective drugs spare the airway β2 receptors more."),
      Q("A young smoker has rest angina at dawn with transient ST elevation. Why avoid propranolol?", "It can worsen coronary spasm", ["It raises BP", "It causes tolerance", "It interacts with aspirin"], "Nonselective blockade leaves α constriction unopposed."),
      Q("A patient on atenolol has HR 42 and BP 82/50. What should you do with the drug?", "Hold it", ["Double it", "Add verapamil", "Give it IV"], "Severe bradycardia and hypotension contraindicate beta blockers."),
      Q("Which two beta blockers also block α1?", "Carvedilol and labetalol", ["Metoprolol and atenolol", "Propranolol and nadolol", "Bisoprolol and timolol"], "These add α1 blockade."),
      Q("Beta blockers lower which three demand factors?", "Heart rate, contractility and BP", ["Preload, hemoglobin and saturation", "Heart rate, preload and hemoglobin", "Only contractility"], "They reduce HR, contractility and BP/wall stress.")
    ]
  });

  /* ---------------------------------------------------------------- LO 4 */
  los.push({
    id: "lo4", label: "LO 4", title: "Calcium channel blockers: DHP vs non-DHP",
    objective: "Differentiate dihydropyridine and non-dihydropyridine calcium channel blockers based on their mechanisms of action, clinical indications, adverse effects, and contraindications in patients with coronary artery disease.",
    slides: [
      S(33, "Calcium channel blockers", {
        why: "<p>CCBs are a first-line option next to beta blockers. They help by lowering demand, raising coronary flow, or both. Split them into two families: <b>dihydropyridines</b> (DHP) and <b>non-dihydropyridines</b> (non-DHP).</p>",
        q: [
          Q("Where do CCBs stand in stable angina therapy?", "A first-line option alongside beta blockers", ["Last-line only", "Only for acute MI", "Never used"], "CCBs are first-line next to beta blockers."),
          Q("How do CCBs relieve angina?", "By lowering demand, raising coronary flow, or both", ["By dissolving clots", "By raising heart rate", "By raising preload"], "They work on demand, supply or both.")
        ]
      }),
      S(34, "DHP vs non-DHP: where they act", {
        why: "<p><b>DHPs</b> (amlodipine, nifedipine, the \"-dipines\") act on <b>vessels</b>: arterial dilation, lower BP and afterload. <b>Non-DHPs</b> (verapamil, diltiazem) act on the <b>heart</b>: slower rate, less contractility, rhythm control. Memory: \"-dipine\" = dilate the pipes; non-DHP = slows the pump (standard teaching).</p>",
        q: [
          Q("Where do DHP CCBs mainly act?", "Vascular smooth muscle", ["The AV node", "The bronchi", "The kidney tubules"], "DHPs block calcium in vascular smooth muscle, dilating arteries."),
          Q("Which CCB slows the heart rate and controls arrhythmias?", "Diltiazem", ["Amlodipine", "Nifedipine", "Felodipine"], "Non-DHPs like diltiazem act on cardiac tissue."),
          Q("Which is a dihydropyridine?", "Nifedipine", ["Verapamil", "Diltiazem", "Metoprolol"], "Nifedipine and amlodipine are DHPs.")
        ]
      }),
      S(35, "When to use CCBs and which to combine", {
        why: "<p>Use a CCB when beta blockers or nitrates are contraindicated or not tolerated, or symptoms persist on them. If you add a CCB to a beta blocker, pick a <b>DHP (amlodipine)</b>. A beta blocker plus a non-DHP double-slows the heart: bradycardia, AV block, worse LV function. In vasospastic angina, CCBs are preferred.</p>",
        q: [
          Q("A patient on metoprolol still has angina. Which CCB should be added?", "Amlodipine", ["Verapamil", "Diltiazem", "Any CCB is equal"], "A DHP is the safe partner for a beta blocker."),
          Q("Why avoid combining a beta blocker with verapamil?", "Excessive bradycardia, AV block or LV dysfunction", ["Severe hypertension", "Tachycardia", "Hyperkalemia"], "Both slow the heart and weaken contraction."),
          Q("When should a CCB be considered over a beta blocker?", "When BB or nitrates are contraindicated or not tolerated", ["Only after CABG", "Never", "Only in hyperthyroidism"], "CCBs step in for intolerance or contraindications.")
        ]
      }),
      S(36, "DHP adverse effects", {
        why: "<p>DHP side effects are all from arterial dilation: <b>ankle edema</b> (arterioles open more than venules, so fluid leaks out; standard teaching), headache, flushing, and <b>reflex tachycardia</b>, worse with short-acting nifedipine because BP drops fast.</p>",
        q: [
          Q("A patient started amlodipine and now has ankle swelling. Why?", "DHP edema from arterial dilation", ["Heart failure from the drug", "Kidney failure", "Allergy"], "Edema is a classic DHP side effect."),
          Q("Which DHP side effect is more likely with short-acting nifedipine?", "Reflex tachycardia", ["Bradycardia", "Constipation", "AV block"], "A fast BP drop triggers a reflex rise in heart rate.")
        ]
      }),
      S(37, "Non-DHP adverse effects", {
        why: "<p>Non-DHPs act on the heart, so their side effects are cardiac: bradycardia and AV block, hypotension, dizziness, fatigue, and <b>worse HF when the EF is reduced</b> (they weaken contraction). <b>Constipation</b> is the classic verapamil side effect.</p>",
        q: [
          Q("Which CCB is best known for causing constipation?", "Verapamil", ["Amlodipine", "Nifedipine", "Diltiazem"], "Constipation is especially common with verapamil."),
          Q("In which patients can non-DHP CCBs worsen heart failure?", "Those with reduced LV systolic function", ["Those with HFpEF only", "Those with normal hearts", "Those with hypertension only"], "Non-DHPs reduce contractility, which a weak ventricle can't afford."),
          Q("Which side effect is typical of non-DHP but NOT of DHP CCBs?", "AV block", ["Ankle edema", "Flushing", "Reflex tachycardia"], "Non-DHPs slow AV conduction.")
        ]
      })
    ],
    review: [
      Q("A patient with HFrEF (EF 30%) needs a CCB for angina. Which family should be avoided?", "Non-DHP (verapamil, diltiazem)", ["DHP (amlodipine)", "Both are fine", "Neither should be avoided"], "Non-DHPs can worsen reduced-EF heart failure."),
      Q("A patient with AF and angina, no HF, can't take beta blockers. Which CCB helps both?", "Diltiazem", ["Amlodipine", "Nifedipine", "None"], "A non-DHP slows the rate and relieves angina."),
      Q("Which CCB is the usual partner for a beta blocker?", "Amlodipine", ["Verapamil", "Diltiazem", "None"], "DHPs avoid double slowing of the heart."),
      Q("Flushing, headache and edema point to which CCB family?", "DHP", ["Non-DHP", "Neither", "Beta blockers"], "Those are vasodilator side effects."),
      Q("Which drug class is preferred for vasospastic angina: CCB or beta blocker?", "CCB", ["Beta blocker", "Neither", "Both equally"], "CCBs prevent spasm, beta blockers may worsen it.")
    ]
  });

  /* ---------------------------------------------------------------- LO 5 */
  los.push({
    id: "lo5", label: "LO 5", title: "Ranolazine and the stable angina ladder",
    objective: "Explain the mechanism of action, clinical indications, adverse effects, and important drug interactions of ranolazine in the management of chronic stable angina.",
    slides: [
      S(38, "Ranolazine: mechanism", {
        why: "<p>Ischemic cells leak sodium in late in repolarization. Too much sodium inside drives the sodium-calcium exchanger to load the cell with calcium, so the muscle can't relax and wall tension rises (standard teaching). Ranolazine blocks that <b>late sodium current</b>: less sodium, less calcium, lower wall tension and demand. It does <b>not</b> change HR or BP, so it's handy when those are already low.</p>",
        q: [
          Q("What channel does ranolazine inhibit?", "The late inward sodium current", ["L-type calcium channels", "Potassium channels only", "Beta-1 receptors"], "Ranolazine blocks the late phase of sodium entry."),
          Q("What effect does ranolazine have on heart rate and BP?", "None", ["It lowers both a lot", "It raises both", "It lowers only HR"], "Ranolazine does not affect HR or BP."),
          Q("How does less sodium inside the myocyte help?", "Less calcium enters, lowering wall tension and demand", ["More calcium enters, raising contractility", "It speeds the heart", "It dilates veins"], "Lower intracellular sodium reduces calcium overload.")
        ]
      }),
      S(39, "Ranolazine: use and dosing", {
        why: "<p>Ranolazine is an <b>add-on</b> for patients still symptomatic on a beta blocker, CCB or long-acting nitrate. Start 500 mg ER twice daily, up to 1,000 mg twice daily. With diltiazem or verapamil, cap at 500 mg twice daily, because they raise its levels.</p>",
        q: [
          Q("What is the starting dose of ranolazine?", "500 mg ER twice daily", ["1,000 mg once daily", "50 mg daily", "2,000 mg twice daily"], "Start at 500 mg ER twice daily."),
          Q("What is the maximum ranolazine dose when combined with diltiazem?", "500 mg twice daily", ["1,000 mg twice daily", "250 mg daily", "No limit"], "Diltiazem raises ranolazine levels."),
          Q("When is ranolazine used?", "As an add-on when symptoms persist on other antianginals", ["First-line for everyone", "For acute MI", "To lower BP"], "It is an add-on antianginal.")
        ]
      }),
      S(40, "Ranolazine: adverse effects", {
        why: "<p>Side effects: constipation, headache, nausea, dizziness, and <b>QT prolongation</b> (it lengthens the ventricular action potential). It's cleared by the liver, so it's <b>contraindicated in cirrhosis</b>. Watch kidney function in moderate to severe renal impairment.</p>",
        q: [
          Q("Which EKG change can ranolazine cause?", "QT prolongation", ["ST elevation", "Short PR", "Delta waves"], "Ranolazine prolongs the ventricular action potential."),
          Q("Which patient should NOT get ranolazine?", "One with liver cirrhosis", ["One with mild hypertension", "One on aspirin", "One with stable angina on a beta blocker"], "Extensive hepatic metabolism makes cirrhosis a contraindication."),
          Q("Which organ's function is monitored in moderate-to-severe impairment on ranolazine?", "Kidneys", ["Thyroid", "Lungs", "Eyes"], "Renal function is monitored in renal impairment.")
        ]
      }),
      S(41, "Ranolazine: drug interactions", {
        why: "<p>Ranolazine is a CYP3A substrate (standard teaching). <b>Strong CYP3A inhibitors</b> (ketoconazole, itraconazole, clarithromycin): avoid. <b>Moderate ones</b> (diltiazem, verapamil, grapefruit juice, fluconazole): cap at 500 mg twice daily. It raises <b>digoxin</b> levels and limits <b>simvastatin</b> to 20 mg daily.</p>",
        q: [
          Q("A patient on ranolazine needs clarithromycin. What is the rule?", "Avoid the combination (strong CYP3A inhibitor)", ["Double the ranolazine", "No interaction", "Give with grapefruit juice"], "Strong CYP3A inhibitors must be avoided."),
          Q("What is the maximum simvastatin dose with ranolazine?", "20 mg daily", ["80 mg daily", "40 mg daily", "No limit"], "The slide limits simvastatin to 20 mg/day."),
          Q("Ranolazine raises the level of which heart drug?", "Digoxin", ["Metoprolol", "Lisinopril", "Furosemide"], "Monitor and adjust digoxin when ranolazine is added."),
          Q("A patient drinks grapefruit juice daily. What is the ranolazine limit?", "500 mg twice daily", ["1,000 mg twice daily", "Avoid completely", "No limit"], "Grapefruit juice and fluconazole cap ranolazine at 500 mg twice daily.")
        ]
      }),
      S(42, "Stable angina: symptom-directed therapy", {
        pic: "<p><b>Stable Angina: Symptom-Directed Therapy.</b> Treatment is individualized: select and combine agents based on symptoms, tolerability, vital signs (HR/BP), and comorbidities.</p><ol><li><b>Angina</b> (symptomatic, chronic)</li><li><b>NTG</b> (acute symptom relief)</li><li><b>BB or CCB</b> (initial maintenance therapy)</li><li>Persistent symptoms? → <b>Add the other class (BB or CCB)</b> OR <b>Add long-acting nitrate</b></li><li>Persistent symptoms despite combination therapy? → <b>Add ranolazine</b> (last-line therapy)</li></ol>",
        why: "<p>This is the whole anti-anginal ladder on one page. Everyone gets SL NTG for attacks. Step 1: BB or CCB. Step 2: add the other class or a long-acting nitrate. Step 3: add ranolazine, the last line.</p>",
        q: [
          Q("On the stable angina ladder, what does every patient get for acute relief?", "Sublingual nitroglycerin", ["Ranolazine", "Morphine", "IV heparin"], "NTG is for acute symptom relief at every step."),
          Q("Symptoms persist on a beta blocker alone. What are the next options?", "Add a CCB or a long-acting nitrate", ["Add ranolazine first", "Stop all drugs", "Add a second beta blocker"], "Step 2 adds the other class or a long-acting nitrate."),
          Q("Where does ranolazine sit on the ladder?", "Last line, after combination therapy fails", ["First line", "Second line before CCBs", "Only for acute pain"], "Ranolazine is added when combinations fail.")
        ]
      }),
      S(43, "Commonly used medications to prevent angina (doses)", {
        pic: "<p><b>Commonly used medications to prevent angina</b> (starting dose → maximum dose, oral):</p><table class=\"ss-table\"><tr><th>Class</th><th>Medication</th><th>Starting</th><th>Maximum</th></tr><tr><td rowspan=\"6\">Beta blocker</td><td>Atenolol</td><td>50 mg once daily</td><td>100 mg once daily</td></tr><tr><td>Bisoprolol</td><td>2.5 mg once daily</td><td>20 mg once daily</td></tr><tr><td>Carvedilol (immediate release)</td><td>12.5 mg twice daily</td><td>50 mg twice daily</td></tr><tr><td>Metoprolol succinate</td><td>25 to 50 mg once daily</td><td>400 mg once daily</td></tr><tr><td>Metoprolol tartrate</td><td>12.5 to 25 mg twice daily</td><td>200 mg twice daily</td></tr><tr><td>Propranolol (extended release)</td><td>80 mg once daily</td><td>320 mg once daily</td></tr><tr><td rowspan=\"2\">Dihydropyridine CCB</td><td>Amlodipine</td><td>5 mg once daily</td><td>10 mg once daily</td></tr><tr><td>Nifedipine (extended release)</td><td>30 or 60 mg once daily</td><td>120 mg once daily</td></tr><tr><td rowspan=\"2\">Nondihydropyridine CCB</td><td>Diltiazem (24-hour extended release)</td><td>120 to 180 mg once daily</td><td>360 mg once daily</td></tr><tr><td>Verapamil (extended release)</td><td>180 mg once daily</td><td>480 mg per day in 1 to 2 divided doses</td></tr><tr><td>Nitrate</td><td>Isosorbide mononitrate (extended release)</td><td>30 to 60 mg once daily</td><td>120 mg once daily</td></tr><tr><td>Other</td><td>Ranolazine</td><td>500 mg twice daily</td><td>1000 mg twice daily</td></tr></table>",
        why: "<p>A reference table, not a memorize-every-number slide. Patterns worth knowing: metoprolol <b>tartrate</b> is twice daily, <b>succinate</b> once daily; amlodipine tops out at 10 mg; isosorbide mononitrate ER starts at 30-60 mg once daily; ranolazine 500 to 1000 mg twice daily.</p>",
        q: [
          Q("Which metoprolol form is dosed once daily?", "Metoprolol succinate", ["Metoprolol tartrate", "Both twice daily", "Neither"], "Succinate is extended release, once daily; tartrate is twice daily."),
          Q("What is the maximum daily dose of amlodipine in the table?", "10 mg once daily", ["5 mg once daily", "40 mg once daily", "100 mg once daily"], "Amlodipine starts at 5 mg and maxes at 10 mg."),
          Q("What is the starting dose of amlodipine in the table?", "5 mg once daily", ["10 mg twice daily", "2.5 mg weekly", "50 mg once daily"], "Amlodipine starts at 5 mg once daily.")
        ]
      })
    ],
    review: [
      Q("A patient with stable angina has HR 52 and BP 98/60 on a beta blocker and still has symptoms. Which add-on won't lower HR or BP further?", "Ranolazine", ["Diltiazem", "More metoprolol", "Verapamil"], "Ranolazine relieves angina without changing HR or BP."),
      Q("A patient on ranolazine 1,000 mg twice daily is started on verapamil. What change is needed?", "Reduce ranolazine to 500 mg twice daily", ["No change", "Stop verapamil only", "Raise ranolazine"], "Verapamil raises ranolazine levels."),
      Q("A patient on ranolazine has a long QT on his EKG. Which side effect explains it?", "Ranolazine prolongs the QT interval", ["Ranolazine causes hyperkalemia", "Ranolazine causes heart block", "It is unrelated"], "QT prolongation is a listed adverse effect."),
      Q("Order the stable angina steps after SL NTG.", "BB or CCB → add the other class or a nitrate → ranolazine", ["Ranolazine → nitrate → BB", "Nitrate → ranolazine → CCB", "CABG → BB → ranolazine"], "This is the symptom-directed therapy ladder."),
      Q("Which drug must be avoided entirely with ranolazine: ketoconazole or fluconazole?", "Ketoconazole", ["Fluconazole", "Both are fine", "Neither"], "Ketoconazole is a strong CYP3A inhibitor; fluconazole only caps the dose.")
    ]
  });

  /* ---------------------------------------------------------------- LO 6 */
  los.push({
    id: "lo6", label: "LO 6", title: "ACS drugs: nitro, oxygen, beta blocker, ACEi, opioids",
    objective: "Describe the pharmacologic management of acute coronary syndromes, including the roles of nitrates, beta-blockers, ACE inhibitors/ARBs, statins, supplemental oxygen, and opioid analgesics.",
    slides: [
      S(44, "Acute coronary syndromes", {
        why: "<p>The three ACS types again: <b>unstable angina</b> (rest pain, negative troponin), <b>NSTEMI</b> (positive troponin, no ST elevation) and <b>STEMI</b> (ST elevation, complete occlusion). The drug plan shares a core across all three; STEMI adds urgent reperfusion.</p>",
        q: [
          Q("Which three conditions make up ACS?", "Unstable angina, NSTEMI and STEMI", ["Stable angina, NSTEMI and STEMI", "Pericarditis, NSTEMI and STEMI", "Unstable angina, aortic dissection and PE"], "ACS = UA, NSTEMI and STEMI.")
        ]
      }),
      S(45, "ACS treatment goals", {
        why: "<p>Four goals in order of the story: relieve the pain and lower demand → reopen the artery when indicated and limit damage → stop more clot from forming → lower complications and death.</p>",
        q: [
          Q("Which is a treatment goal in ACS?", "Prevent further thrombus formation", ["Raise heart rate", "Increase myocardial oxygen demand", "Delay reperfusion"], "Stopping clot growth prevents recurrent events."),
          Q("What does restoring coronary blood flow aim to limit?", "Myocardial injury", ["Heart rate", "Blood glucose", "Cholesterol"], "Reperfusion limits how much muscle dies.")
        ]
      }),
      S(46, "Drug therapy for ACS", {
        why: "<p><b>Core</b>: aspirin + a P2Y12 inhibitor + an anticoagulant, with reperfusion when indicated. <b>Symptom-directed</b>: nitro, beta blocker, oxygen when needed. <b>Selected</b>: opioids only for pain that persists despite anti-ischemic drugs; lytics for STEMI when timely PCI isn't available. <b>Avoid routinely</b>: non-aspirin NSAIDs and prophylactic antiarrhythmics.</p>",
        q: [
          Q("What are the three core drug therapies for ACS?", "Aspirin, a P2Y12 inhibitor and an anticoagulant", ["Nitro, morphine and oxygen", "Statin, ACEi and diuretic", "Digoxin, amiodarone and warfarin"], "These three are given to essentially every ACS patient."),
          Q("Which drugs should NOT be used routinely in ACS?", "Non-aspirin NSAIDs and prophylactic antiarrhythmics", ["Aspirin and heparin", "Statins", "P2Y12 inhibitors"], "Both are listed as avoid routine use."),
          Q("When are fibrinolytics used in ACS?", "For eligible STEMI when timely PCI is unavailable", ["For all NSTEMIs", "For unstable angina", "Never"], "Lytics are a selected-situation therapy for STEMI.")
        ]
      }),
      S(47, "Nitroglycerin in ACS", {
        why: "<p>Same mechanism (mostly venodilation → less preload and wall stress → less demand). SL first, often by EMS, then IV if pain persists. <b>Avoid</b>: hypotension, suspected RV infarct, recent PDE-5 inhibitor. <b>Caution</b>: severe AS or obstructive HCM.</p>",
        q: [
          Q("Which ACS patient should NOT get nitroglycerin?", "One with a suspected right ventricular infarction", ["One with ongoing pain and BP 150/90", "One with anterior ST depression and HTN", "One with pulmonary edema and HTN"], "RV infarcts depend on preload, which nitrates lower."),
          Q("In ACS, what comes after SL nitro if pain persists?", "An IV nitroglycerin drip", ["A nitro patch", "Isosorbide mononitrate", "Ranolazine"], "IV NTG is started for persistent pain.")
        ]
      }),
      S(48, "Oxygen in ACS", {
        why: "<p>Give oxygen only if saturation is <b>below 90%</b>, where it truly raises supply. In patients who aren't hypoxic, routine oxygen has shown no benefit.</p>",
        q: [
          Q("At what oxygen saturation should supplemental oxygen be given in ACS?", "Below 90%", ["Below 98%", "Below 95% always", "Any saturation"], "Oxygen is given for sats under 90%."),
          Q("What benefit does routine oxygen give ACS patients who are not hypoxic?", "No demonstrated clinical benefit", ["Smaller infarcts", "Lower mortality", "Fewer arrhythmias"], "Routine oxygen without hypoxia hasn't shown benefit.")
        ]
      }),
      S(49, "Beta blockers in ACS: benefits", {
        why: "<p>In ACS, beta blockers can shrink the infarct, cut recurrent ischemia and reinfarction, lower mortality when continued long term, and reduce lethal ventricular arrhythmias and sudden death (less sympathetic drive on an irritable heart; standard teaching).</p>",
        q: [
          Q("Which benefit do beta blockers give in ACS?", "Fewer lethal ventricular arrhythmias and sudden deaths", ["Faster heart rate", "Dissolving the clot", "Higher BP"], "They reduce VT/VF and sudden cardiac death."),
          Q("Do beta blockers reduce reinfarction after ACS?", "Yes, they decrease recurrent ischemia and reinfarction", ["No effect", "They raise reinfarction", "Only in women"], "The slide lists fewer recurrent events.")
        ]
      }),
      S(50, "Beta blockers in ACS: timing and choice", {
        why: "<p>Give an <b>oral</b> beta blocker within the <b>first 24 hours</b> if no contraindication. Prefer a <b>cardioselective</b> one (metoprolol, atenolol). There's no gain in rushing it before PCI as long as it starts within 24 hours.</p>",
        q: [
          Q("When should an oral beta blocker be started in ACS?", "Within the first 24 hours if no contraindication", ["Only at discharge", "Only after 1 week", "Before aspirin"], "Oral BB within 24 hours is the standard."),
          Q("Is there benefit to giving the beta blocker before PCI?", "No, as long as it starts within 24 hours", ["Yes, always give before PCI", "Yes, it doubles survival", "It is required"], "Starting within 24 hours is what matters."),
          Q("Which type of beta blocker is preferred in acute MI?", "Cardioselective, such as metoprolol", ["Nonselective, such as propranolol", "Carvedilol IV only", "Timolol"], "Cardioselective agents are preferred.")
        ]
      }),
      S(51, "Beta blockers in ACS: goals and contraindications", {
        why: "<p>Titrate to <b>HR 55-70</b> while keeping systolic BP <b>above 90</b>. Hold for decompensated HF, HR under 55, SBP under 90 or shock, 2nd/3rd-degree block, or active asthma/wheezing. Reassess once the patient stabilizes.</p>",
        q: [
          Q("What heart rate goal is used when titrating a beta blocker in ACS?", "55-70 bpm", ["40-50 bpm", "80-100 bpm", "Over 100 bpm"], "Target HR is 55-70 while SBP stays above 90."),
          Q("Which finding is a contraindication to a beta blocker in ACS?", "Active wheezing", ["HR 85", "BP 140/88", "Anxiety"], "Active asthma, bronchospasm or wheezing is listed."),
          Q("An ACS patient on a beta blocker should keep systolic BP above what?", "90 mm Hg", ["130 mm Hg", "60 mm Hg", "150 mm Hg"], "Keep SBP over 90 while titrating.")
        ]
      }),
      S(52, "Beta blockers long term after ACS", {
        why: "<p>Decide by EF. <b>Reduced EF or HF</b>: continue; for EF under 50%, use metoprolol <b>succinate</b>, carvedilol or bisoprolol (the HF-proven ones). <b>Preserved EF, uncomplicated, revascularized</b>: lifelong therapy hasn't clearly helped, so reassess over time.</p>",
        q: [
          Q("After ACS, LVEF is 40%. Which beta blockers are guideline-preferred long term?", "Metoprolol succinate, carvedilol or bisoprolol", ["Atenolol or propranolol", "Metoprolol tartrate only", "Labetalol only"], "These three are the HF-proven options."),
          Q("After an uncomplicated, revascularized MI with preserved EF, is lifelong beta blocker clearly beneficial?", "No clear benefit; reassess over time", ["Yes, always lifelong", "It is harmful", "It must stop at 1 week"], "Routine lifelong therapy hasn't shown clear benefit here.")
        ]
      }),
      S(53, "ACEi/ARB after ACS: who gets them", {
        why: "<p>ACE inhibitors cut death and recurrent events after MI, likely by limiting harmful LV remodeling (standard teaching). The 2025 guideline gives an oral ACEi (ARB if intolerant) when any high-risk feature is present: <b>LVEF ≤40%, HF, hypertension, diabetes or anterior STEMI</b>. There's a modest benefit even in lower-risk MI.</p>",
        q: [
          Q("Which ACS patient has a high-risk feature for ACEi therapy?", "One with diabetes", ["One with LVEF 60% and no other disease", "One with asthma", "One with a family history of CAD"], "Diabetes is one of the five listed features."),
          Q("When is an ARB used instead of an ACEi after ACS?", "When the ACEi is not tolerated", ["Always first", "Only in STEMI", "Never"], "An ARB replaces an ACEi that isn't tolerated."),
          Q("Do lower-risk MI patients get any benefit from ACEi?", "A modest survival benefit", ["None", "Harm only", "A huge benefit"], "The slide notes a modest benefit even in lower-risk MI.")
        ]
      }),
      S(54, "ACEi/ARB after ACS: start and monitor", {
        why: "<p>Usually started in the first 24 hours, continued long term for high-risk or low-EF patients. Monitor BP, creatinine and potassium after starting and after dose changes. Never combine an ACEi with an ARB (more hyperkalemia and kidney injury; standard teaching).</p>",
        q: [
          Q("What labs are monitored after starting an ACEi post-MI?", "Creatinine and potassium", ["Troponin and BNP", "LFTs and lipase", "TSH and A1C"], "ACEi can raise creatinine and potassium."),
          Q("When is an ACEi typically started in ACS?", "Within the first 24 hours", ["After 6 months", "Only after discharge", "Before aspirin"], "ACEi is usually started within 24 hours."),
          Q("Should an ACEi and ARB be combined after ACS?", "No, avoid the combination", ["Yes, for extra benefit", "Yes, if EF is low", "Only in diabetes"], "Dual RAAS blockade is avoided.")
        ]
      }),
      S(55, "Opioids in ACS", {
        why: "<p>IV morphine or fentanyl only for <b>severe pain despite maximal anti-ischemic therapy</b>. Not first-line and not to hide ongoing ischemia. Side effects: hypotension, respiratory depression, nausea, sedation, and slowed stomach emptying that delays oral P2Y12 inhibitors.</p>",
        q: [
          Q("When are opioids appropriate in ACS?", "Severe pain despite maximal anti-ischemic therapy", ["As first-line for all chest pain", "To hide ischemia during workup", "Before aspirin"], "Opioids are only for refractory severe pain."),
          Q("How can opioids interfere with ACS therapy?", "They slow gastric emptying and delay oral P2Y12 inhibitors", ["They inactivate heparin", "They raise BP", "They cause bleeding"], "Delayed absorption weakens early platelet blockade.")
        ]
      }),
      S(56, "Opioids: monitoring and reversal", {
        why: "<p>Watch pain relief, BP, respiratory rate and sedation. Itching is common from histamine release and isn't necessarily allergy. Keep <b>naloxone (Narcan) 0.4 mg IV</b> ready.</p>",
        q: [
          Q("What is the opioid reversal agent and dose on the slide?", "Naloxone 0.4 mg IV push", ["Flumazenil 0.2 mg IV", "Protamine 50 mg IV", "Atropine 1 mg IV"], "Naloxone reverses opioids."),
          Q("A patient gets itchy after morphine. Is this an allergy?", "Not necessarily; it is often histamine release", ["Yes, always anaphylaxis", "Yes, stop all opioids forever", "It means overdose"], "Pruritus does not always indicate allergy.")
        ]
      }),
      S(57, "ACS symptom drugs: dosing table", {
        pic: "<table class=\"ss-table\"><tr><th>Medication</th><th>Route</th><th>Suggested dosing</th><th>Considerations</th></tr><tr><td>Nitroglycerin</td><td>SL (tablets, spray)</td><td>0.3 or 0.4 mg every 5 min as needed up to a total of 3 doses</td><td>Use in hemodynamically stable patients with SBP ≥90 mm Hg.</td></tr><tr><td>Nitroglycerin</td><td>IV</td><td>Start at 10 μg/min and titrate to pain relief and hemodynamic tolerability.</td><td>Consider for persistent anginal pain after oral nitrate therapy, or if ACS is accompanied by hypertension or pulmonary edema. Avoid use in suspected RV infarction, SBP &lt;90 mm Hg or a change in SBP &gt;30 mm Hg below baseline. Tachyphylaxis may occur after approximately 24 h.</td></tr><tr><td>Morphine</td><td>IV</td><td>2-4 mg; may repeat if needed every 5-15 min. Doses up to 10 mg may be considered.</td><td>Use for relief of pain that is resistant to other maximally tolerated anti-ischemic medications. May delay the effects of oral P2Y12 therapy. Monitor closely for adverse effects.</td></tr><tr><td>Fentanyl</td><td>IV</td><td>25-50 μg; may repeat if needed. Doses up to 100 μg may be considered.</td><td>Use for relief of pain that is resistant to other maximally tolerated anti-ischemic medications. May delay the effects of oral P2Y12 therapy. Monitor closely for adverse effects.</td></tr></table>",
        why: "<p>Key numbers: SL NTG 0.3-0.4 mg every 5 min up to 3 doses if SBP ≥90. IV NTG starts at 10 mcg/min; avoid with RV infarct, SBP under 90, or a drop of more than 30 below baseline; tolerance after about 24 hours. Morphine 2-4 mg IV; fentanyl 25-50 mcg IV.</p>",
        q: [
          Q("What starting dose of IV nitroglycerin does the ACS table give?", "10 μg/min", ["100 μg/min", "1 mg/min", "0.4 mg once"], "IV NTG starts at 10 μg/min and is titrated."),
          Q("IV nitro should be avoided if SBP has dropped how much below baseline?", "More than 30 mm Hg", ["More than 5 mm Hg", "Any drop at all", "More than 80 mm Hg"], "A fall over 30 mm Hg below baseline is a stop sign."),
          Q("What is the usual IV morphine dose for refractory ACS pain?", "2-4 mg, repeat every 5-15 minutes as needed", ["50 mg once", "0.4 mg once", "25-50 μg"], "Morphine 2-4 mg IV may be repeated.")
        ]
      }),
      S(58, "Avoid NSAIDs in ACS", {
        why: "<p>Non-aspirin NSAIDs (ibuprofen, diclofenac) raise cardiovascular events and have no routine role for ACS pain. Aspirin is the exception because it's an irreversible antiplatelet.</p>",
        q: [
          Q("A patient with suspected ACS asks for ibuprofen for his chest pain. What is the answer?", "Avoid it; NSAIDs increase CV events", ["Give 800 mg", "Give it with aspirin", "Use it instead of nitro"], "Non-aspirin NSAIDs are avoided in ischemic chest pain."),
          Q("Which NSAID is the exception and IS used in ACS?", "Aspirin", ["Ibuprofen", "Diclofenac", "Naproxen"], "Aspirin is antiplatelet therapy, not just analgesia.")
        ]
      })
    ],
    review: [
      Q("A STEMI patient has sats of 95% on room air. Which item from the classic ACS cocktail is not needed?", "Oxygen", ["Aspirin", "P2Y12 inhibitor", "Heparin"], "Oxygen is only for sats under 90%."),
      Q("An NSTEMI patient with diabetes and EF 55%: does he get an ACEi?", "Yes, diabetes is a high-risk feature", ["No, EF is normal", "Only an ARB", "Only if K is low"], "Diabetes qualifies for ACEi after ACS."),
      Q("An ACS patient on metoprolol has HR 50 and BP 86/50. What do you do?", "Hold the beta blocker", ["Increase the dose", "Add diltiazem", "Give IV metoprolol"], "HR under 55 and SBP under 90 are contraindications."),
      Q("Why give morphine only as a last resort in ACS?", "It can delay P2Y12 absorption and mask ischemia", ["It causes bleeding", "It raises BP", "It is not effective"], "Morphine slows gut absorption and can hide ongoing ischemia."),
      Q("What three drugs are core for every ACS?", "Aspirin, P2Y12 inhibitor, anticoagulant", ["Morphine, oxygen, nitro", "Beta blocker, statin, ACEi", "tPA, heparin, aspirin"], "Core ACS therapy is antiplatelet plus anticoagulant."),
      Q("After an MI with EF 35%, which metoprolol form is preferred long term?", "Metoprolol succinate", ["Metoprolol tartrate", "IV metoprolol", "No metoprolol"], "Succinate is the HF-proven form.")
    ]
  });

  /* ---------------------------------------------------------------- LO 7a */
  los.push({
    id: "lo7a", label: "LO 7", title: "Antiplatelets vs anticoagulants vs fibrinolytics",
    objective: "Differentiate antiplatelet agents, anticoagulants, and fibrinolytic agents based on their mechanisms of action, clinical indications, and roles in the management of acute coronary syndromes.",
    slides: [
      S(59, "Antiplatelets vs anticoagulants vs fibrinolytics", {
        why: "<p>A clot has two parts: a <b>platelet plug</b> and a <b>fibrin mesh</b> that holds it together. <b>Antiplatelets</b> (aspirin, clopidogrel, ticagrelor, prasugrel) stop the plug from growing. <b>Anticoagulants</b> (heparin, enoxaparin, bivalirudin) slow the mesh from forming. <b>Fibrinolytics</b> (tenecteplase, alteplase) dissolve the mesh of a clot that's already there. Only fibrinolytics break down an existing clot.</p>",
        q: [
          Q("Which drug class breaks down an EXISTING clot?", "Fibrinolytics", ["Antiplatelets", "Anticoagulants", "Statins"], "Fibrinolytics dissolve the clot's fibrin mesh."),
          Q("Enoxaparin belongs to which class?", "Anticoagulant", ["Antiplatelet", "Fibrinolytic", "Beta blocker"], "Enoxaparin slows fibrin formation."),
          Q("Antiplatelets act on which part of the clot?", "The platelet plug", ["The fibrin mesh", "The vessel wall", "The red cells"], "They stop platelets activating and aggregating."),
          Q("Which is a fibrinolytic?", "Tenecteplase", ["Ticagrelor", "Bivalirudin", "Clopidogrel"], "Tenecteplase and alteplase are fibrinolytics.")
        ]
      })
    ],
    review: [
      Q("Bivalirudin is in which drug group?", "Anticoagulant", ["Antiplatelet", "Fibrinolytic", "Antianginal"], "Bivalirudin inhibits fibrin formation."),
      Q("Which group works like 'stop the plug from growing'?", "Antiplatelets", ["Anticoagulants", "Fibrinolytics", "Nitrates"], "Antiplatelets prevent the platelet plug from growing."),
      Q("Heparin stops a clot from extending but does not do what?", "Dissolve the existing clot", ["Slow fibrin formation", "Inhibit coagulation factors", "Prevent new thrombus"], "Only fibrinolytics break down an existing clot.")
    ]
  });

  /* ---------------------------------------------------------------- LO 8 */
  los.push({
    id: "lo8", label: "LO 8", title: "Aspirin and P2Y12 inhibitors",
    objective: "Compare the clinical indications, mechanisms of action, dosing considerations, adverse effects, and contraindications of aspirin and P2Y₁₂ inhibitors (clopidogrel, prasugrel, and ticagrelor) used in the management of ACS and secondary prevention.",
    slides: [
      S(60, "Antiplatelet agents: the list", {
        why: "<p>Two targets. <b>Aspirin</b> blocks COX-1. <b>P2Y12 inhibitors</b> block the ADP receptor on platelets: clopidogrel and prasugrel are <b>thienopyridines</b> (prodrugs that bind irreversibly; standard teaching); ticagrelor is a <b>non-thienopyridine</b> (reversible).</p>",
        q: [
          Q("Which P2Y12 inhibitor is NOT a thienopyridine?", "Ticagrelor", ["Clopidogrel", "Prasugrel", "Both clopidogrel and prasugrel"], "Ticagrelor is a non-thienopyridine."),
          Q("What enzyme does aspirin inhibit?", "COX-1", ["P2Y12", "Factor Xa", "Plasminogen"], "Aspirin is a COX-1 inhibitor.")
        ]
      }),
      S(61, "Aspirin: forms and mechanism", {
        why: "<p>Aspirin <b>irreversibly</b> blocks platelet COX-1, so less thromboxane A2 and less aggregation. Platelets have no nucleus and can't make new enzyme, so the effect lasts the platelet's whole life (about 7-10 days; standard teaching). Comes as 81, 162, 325, 500 mg tablets or a 300 mg rectal suppository.</p>",
        q: [
          Q("How long does aspirin's antiplatelet effect last?", "For the life of the platelet", ["4-6 hours", "24 hours exactly", "Only while the drug is in the blood"], "Irreversible COX-1 inhibition lasts the platelet's lifetime."),
          Q("Aspirin decreases production of what platelet activator?", "Thromboxane A2", ["Prostacyclin only", "ADP", "Thrombin"], "Less thromboxane A2 means less aggregation."),
          Q("A vomiting ACS patient can't swallow. Which aspirin form exists?", "A 300 mg rectal suppository", ["An IV aspirin only", "An inhaled aspirin", "None"], "Aspirin is available as a 300 mg rectal suppository.")
        ]
      }),
      S(62, "Aspirin at ACS presentation", {
        why: "<p>Give <b>162-325 mg non-enteric-coated, chewed</b>, as soon as possible. Chewing and no coating make it work in minutes. Give it <b>even if the patient already takes daily aspirin</b>. Then 81 mg daily. Aspirin + a P2Y12 inhibitor = DAPT.</p>",
        q: [
          Q("A patient on daily aspirin 81 mg presents with ACS. Does he still get a loading dose?", "Yes, give the loading dose anyway", ["No, he's already covered", "Only half a tablet", "Only if troponin is positive"], "The loading dose is given even with daily aspirin use."),
          Q("What type of aspirin is used for the ACS loading dose?", "Non-enteric-coated, chewed", ["Enteric-coated, swallowed whole", "Rectal only", "IV only"], "Uncoated and chewed acts fastest."),
          Q("What does DAPT stand for in ACS?", "Aspirin plus an oral P2Y12 inhibitor", ["Aspirin plus heparin", "Two P2Y12 inhibitors", "Aspirin plus warfarin"], "Dual antiplatelet therapy = aspirin + P2Y12.")
        ]
      }),
      S(63, "Aspirin after MI", {
        why: "<p>For most ACS patients not at high bleeding risk, DAPT for <b>at least 12 months</b>. After that, low-dose aspirin is usually continued long term.</p>",
        q: [
          Q("After DAPT ends, what antiplatelet therapy usually continues?", "Low-dose aspirin long term", ["Nothing", "Clopidogrel 600 mg daily", "Warfarin"], "Low-dose aspirin is commonly continued for secondary prevention."),
          Q("What is the default DAPT length after ACS without high bleeding risk?", "At least 12 months", ["1 week", "3 days", "10 years"], "The default is at least 12 months.")
        ]
      }),
      S(64, "Initial choice of oral P2Y12 inhibitor in ACS", {
        pic: "<p><b>ACS: initial selection of oral P2Y12 inhibitor</b> (2025 ACC/AHA, JACC):</p><table class=\"ss-table\"><tr><th>Strategy</th><th>Class 1 choice</th><th>Alternative</th></tr><tr><td>PCI (NSTE-ACS or STEMI)</td><td>aspirin + ticagrelor or prasugrel</td><td>Clopidogrel when ticagrelor or prasugrel are not available, cannot be tolerated or are contraindicated</td></tr><tr><td>CABG</td><td>aspirin + ticagrelor or clopidogrel</td><td>Continue aspirin during CABG and start P2Y12 inhibitor when safe postoperatively</td></tr><tr><td>No planned invasive evaluation</td><td>aspirin + ticagrelor</td><td>Clopidogrel when ticagrelor is not available, cannot be tolerated or are contraindicated</td></tr><tr><td>Fibrinolytic in STEMI</td><td>aspirin + clopidogrel</td><td>Alternate P2Y12 inhibitor can be considered at PCI (if applicable)</td></tr></table>",
        why: "<p>Pick the P2Y12 by the plan. <b>PCI</b>: ticagrelor or prasugrel (strongest). <b>CABG</b>: ticagrelor or clopidogrel; keep aspirin through surgery. <b>No cath planned</b>: ticagrelor (prasugrel is only for PCI). <b>With lytics</b>: clopidogrel (the bleeding risk is already high). Clopidogrel is the fallback when the others can't be used.</p>",
        q: [
          Q("Which P2Y12 inhibitor is paired with fibrinolytics for STEMI?", "Clopidogrel", ["Prasugrel", "Ticagrelor", "None"], "Aspirin + clopidogrel is Class 1 with lytics."),
          Q("An NSTEMI patient will be managed with NO invasive evaluation. Which P2Y12 is preferred?", "Ticagrelor", ["Prasugrel", "Clopidogrel first", "None"], "Aspirin + ticagrelor is Class 1 without a planned cath."),
          Q("A patient is going to CABG. What happens to aspirin?", "Continue it during CABG", ["Stop it 2 weeks before", "Switch to warfarin", "Double it"], "Aspirin is continued through CABG.")
        ]
      }),
      S(65, "Clopidogrel (Plavix)", {
        why: "<p>Used in ACS, selected CAD, after ischemic stroke and for symptomatic PAD. ACS load 300-600 mg, then <b>75 mg daily</b>. Rare but important: <b>TTP</b>, which needs urgent recognition.</p>",
        q: [
          Q("What is the maintenance dose of clopidogrel?", "75 mg daily", ["10 mg daily", "90 mg twice daily", "325 mg daily"], "Clopidogrel maintenance is 75 mg daily."),
          Q("What rare serious adverse effect of clopidogrel needs urgent recognition?", "Thrombotic thrombocytopenic purpura (TTP)", ["Hyperuricemia", "Dyspnea", "QT prolongation"], "TTP is a rare complication of clopidogrel."),
          Q("Besides ACS, which other condition is clopidogrel used for?", "Symptomatic peripheral artery disease", ["Atrial fibrillation alone", "DVT treatment", "Asthma"], "It is used after ischemic stroke and for symptomatic PAD.")
        ]
      }),
      S(66, "Prasugrel (Effient): use and dosing", {
        why: "<p>Prasugrel is for ACS patients <b>undergoing PCI</b>. Load 60 mg when PCI is planned, then 10 mg daily, or 5 mg daily if under 60 kg.</p>",
        q: [
          Q("Prasugrel is indicated for ACS patients who are doing what?", "Undergoing PCI", ["Being managed medically only", "Getting lytics", "Going to CABG only"], "Prasugrel is for ACS with PCI."),
          Q("What prasugrel maintenance dose is considered for a patient under 60 kg?", "5 mg daily", ["10 mg daily", "20 mg daily", "60 mg daily"], "Low body weight raises bleeding, so the dose is halved."),
          Q("What is the prasugrel loading dose?", "60 mg", ["180 mg", "300-600 mg", "325 mg"], "Prasugrel loads at 60 mg when PCI is planned.")
        ]
      }),
      S(67, "Prasugrel: adverse effects and contraindications", {
        why: "<p>Prasugrel is the most potent, so <b>bleeding</b> is the main risk. <b>Contraindicated with prior stroke or TIA</b> (risk of brain bleed). Generally avoided at <b>age 75 or older</b> except selected high-risk patients. Rare TTP (fever, weakness, low platelets, kidney or neuro changes).</p>",
        q: [
          Q("Which history is an absolute contraindication to prasugrel?", "Prior stroke or TIA", ["Gout", "Asthma", "Prior PCI"], "Prasugrel is contraindicated with a history of stroke or TIA."),
          Q("Prasugrel is generally avoided at what age?", "75 or older", ["Under 40", "Under 18 only", "Over 50"], "Bleeding risk in older adults limits prasugrel."),
          Q("What is the most important adverse effect of prasugrel?", "Bleeding", ["Dyspnea", "Hyperuricemia", "Constipation"], "Bleeding can be severe or life-threatening.")
        ]
      }),
      S(68, "Ticagrelor (Brilinta): use and dosing", {
        why: "<p>Ticagrelor works with <b>PCI or medical therapy</b>. Load <b>180 mg</b>, then <b>90 mg twice daily</b> for the first 12 months after ACS. Twice daily matters: it's reversible, so a missed dose wears off fast (standard teaching).</p>",
        q: [
          Q("What is the ticagrelor loading dose?", "180 mg", ["60 mg", "600 mg", "75 mg"], "Ticagrelor loads at 180 mg."),
          Q("How is ticagrelor dosed for maintenance in the first year after ACS?", "90 mg twice daily", ["75 mg once daily", "10 mg once daily", "180 mg once daily"], "Maintenance is 90 mg twice daily."),
          Q("Ticagrelor can be used with which ACS strategies?", "Both PCI and medical therapy", ["PCI only", "Medical therapy only", "Only with lytics"], "Ticagrelor is indicated for PCI or medical management.")
        ]
      }),
      S(69, "Ticagrelor: adverse effects", {
        why: "<p><b>Bleeding</b> (main). <b>Hyperuricemia</b>: caution with gout. <b>Dyspnea</b>: usually mild and often fades; first rule out HF or ischemia, then switch if intolerable.</p>",
        q: [
          Q("A patient on ticagrelor complains of mild shortness of breath. What should you do first?", "Rule out other causes like HF or ischemia", ["Stop all antiplatelets", "Give a diuretic and ignore", "Double the dose"], "Evaluate other causes before blaming ticagrelor."),
          Q("Which ticagrelor side effect matters in a patient with gout?", "Hyperuricemia", ["Hypoglycemia", "Hypokalemia", "Hypercalcemia"], "Ticagrelor may raise uric acid."),
          Q("Does ticagrelor dyspnea usually persist?", "It is usually mild and often resolves", ["It is always severe", "It never resolves", "It means anaphylaxis"], "Dyspnea often improves with continued therapy.")
        ]
      }),
      S(70, "Ticagrelor: warnings and precautions", {
        why: "<p>With ticagrelor, keep aspirin at <b>75-100 mg</b> (usually 81). <b>Over 100 mg a day can make ticagrelor less effective.</b> Tablets can be crushed in water for patients who can't swallow.</p>",
        q: [
          Q("A patient on ticagrelor takes aspirin 325 mg daily. What is the problem?", "Aspirin over 100 mg may reduce ticagrelor's effect", ["No problem", "It causes TTP", "It raises uric acid"], "Keep maintenance aspirin at 75-100 mg with ticagrelor."),
          Q("Can ticagrelor be given to a patient who cannot swallow tablets?", "Yes, crushed and mixed with water", ["No, never", "Only IV", "Only as a patch"], "Tablets may be crushed and mixed with water.")
        ]
      })
    ],
    review: [
      Q("A 78-year-old with a prior TIA is going to PCI. Which P2Y12 should be avoided?", "Prasugrel", ["Ticagrelor", "Clopidogrel", "None"], "Prior stroke/TIA and age 75+ both argue against prasugrel."),
      Q("A patient on clopidogrel develops fever, confusion, low platelets and kidney injury. What do you suspect?", "TTP", ["ITP", "HIT", "DIC from sepsis"], "TTP is a rare but serious clopidogrel reaction."),
      Q("Which P2Y12 inhibitor is dosed twice daily?", "Ticagrelor", ["Clopidogrel", "Prasugrel", "All of them"], "Ticagrelor is 90 mg twice daily."),
      Q("Match the loading doses: clopidogrel, prasugrel, ticagrelor.", "300-600 mg, 60 mg, 180 mg", ["75 mg, 10 mg, 90 mg", "180 mg, 60 mg, 300 mg", "60 mg, 600 mg, 180 mg"], "Those are the ACS loading doses."),
      Q("A STEMI patient gets alteplase at a small hospital. Which P2Y12 goes with it?", "Clopidogrel", ["Prasugrel", "Ticagrelor", "None"], "Clopidogrel is the Class 1 partner for lytics."),
      Q("Why is aspirin's effect long lasting despite a short half-life?", "It irreversibly blocks COX-1 in platelets that can't make more", ["It is stored in fat", "It is renally retained", "It is reversible"], "Platelets lack a nucleus to make new COX-1.")
    ]
  });

  /* ---------------------------------------------------------------- LO 7b */
  los.push({
    id: "lo7b", label: "LO 7", title: "Plug vs mesh: why both are used",
    objective: "Differentiate antiplatelet agents, anticoagulants, and fibrinolytic agents based on their mechanisms of action, clinical indications, and roles in the management of acute coronary syndromes. (Slide 71 comes back to this LO.)",
    slides: [
      S(71, "Antiplatelets vs anticoagulants in ACS", {
        pic: "<p><b>Antiplatelets vs. Anticoagulants in ACS.</b> <b>The clot in ACS</b>: coronary thrombus (clot) over a ruptured atherosclerotic plaque, made of platelets (cellular plug) and fibrin (mesh).</p><p><b>Antiplatelets</b>: prevent platelets from activating and sticking together (aggregation); stop the platelet plug from growing → limits platelet clumping (platelet plug).</p><p><b>Anticoagulants</b>: inhibit clotting factors in the coagulation cascade (Factor X → Thrombin → Fibrin, crossed out); reduce formation of fibrin (the clot's mesh); prevent the clot from stabilizing and enlarging → reduces fibrin formation (fibrin mesh).</p>",
        why: "<p>The ACS clot over a ruptured plaque is platelets held together by fibrin. Antiplatelets hit the plug; anticoagulants block factor X → thrombin → fibrin and so hit the mesh. Because they hit different parts, they're <b>complementary</b>: aspirin + P2Y12 inhibitor + heparin together.</p>",
        q: [
          Q("In the coagulation cascade picture, what is the final product anticoagulants block?", "Fibrin", ["Thromboxane", "ADP", "Plasmin"], "Factor X → thrombin → fibrin is blocked."),
          Q("Why are antiplatelets and anticoagulants used together in ACS?", "They target different parts of the clot", ["They cancel each other out", "Only one works at a time", "To reduce bleeding"], "One targets the platelet plug, the other the fibrin mesh."),
          Q("What does the anticoagulant arm of ACS therapy keep the clot from doing?", "Stabilizing and enlarging", ["Releasing troponin", "Dissolving", "Embolizing to the brain"], "Less fibrin keeps the clot from stabilizing and growing.")
        ]
      })
    ],
    review: [
      Q("An ACS patient is on aspirin, ticagrelor and a heparin drip. How many drugs target the platelet plug?", "Two (aspirin and ticagrelor)", ["One (heparin)", "Three", "None"], "Aspirin and ticagrelor are antiplatelets; heparin is an anticoagulant."),
      Q("What is the clot's 'mesh' made of?", "Fibrin", ["Platelets", "Cholesterol", "Collagen"], "Fibrin forms the mesh."),
      Q("Which drug class targets the cellular plug of the clot?", "Antiplatelets", ["Anticoagulants", "Fibrinolytics", "Statins"], "Antiplatelets limit platelet clumping.")
    ]
  });

  /* ---------------------------------------------------------------- LO 9 */
  los.push({
    id: "lo9", label: "LO 9", title: "Anticoagulants, strategy, PCI, CABG and fibrinolytics",
    objective: "Describe the role of anticoagulant and fibrinolytic therapy in ACS, including medication selection based on clinical presentation and reperfusion strategy.",
    slides: [
      S(72, "Anticoagulant therapy", {
        why: "<p>Anticoagulation stops the clot from spreading and re-forming during ACS treatment. Two options: <b>UFH</b> as an IV drip titrated by PTT or anti-Xa, or <b>enoxaparin</b> 1 mg/kg SQ every 12 hours.</p>",
        q: [
          Q("How is unfractionated heparin titrated?", "By PTT or anti-Xa levels", ["By INR", "By platelet count", "By troponin"], "UFH drips are adjusted to PTT or anti-Xa."),
          Q("What is the therapeutic enoxaparin dose in ACS?", "1 mg/kg SQ every 12 hours", ["40 mg SQ daily", "5,000 units SQ three times daily", "1 mg/kg IV once"], "Therapeutic enoxaparin is 1 mg/kg q12h."),
          Q("What does anticoagulation prevent during ACS treatment?", "Thrombus propagation and recurrent coronary thrombosis", ["Plaque formation", "Arrhythmias", "Hypertension"], "It stops the clot growing and re-forming.")
        ]
      }),
      S(73, "UFH vs enoxaparin: who gets which", {
        why: "<p>Start anticoagulation in the ER as soon as the MI is identified. <b>UFH drip</b> if a cath is planned (STEMI or NSTEMI going to LHC): it's short-acting and can be stopped or reversed for the procedure (standard teaching). <b>Enoxaparin</b> only if no cath is expected.</p>",
        q: [
          Q("An NSTEMI patient is going to the cath lab tomorrow. Which anticoagulant is preferred?", "UFH drip", ["Enoxaparin SQ", "Warfarin", "None"], "UFH is preferred when LHC is planned."),
          Q("When is enoxaparin chosen in NSTEMI?", "When no cath is anticipated", ["When going to emergent cath", "For every STEMI", "Never"], "Enoxaparin is given only if no LHC is planned."),
          Q("When should anticoagulation be started in an MI?", "In the ER as soon as the MI is identified", ["After cath only", "At discharge", "After 48 hours"], "Start it in the ER once MI is identified.")
        ]
      }),
      S(74, "Choice of anticoagulant in STEMI by reperfusion strategy", {
        pic: "<p><b>Choice of anticoagulant in patients with STEMI by reperfusion strategy</b> (UpToDate). What is the primary reperfusion strategy?</p><ul><li><b>PCI</b> → UFH or bivalirudin.</li><li><b>Fibrinolysis</b> → After thrombolysis, is angiography with appropriate PCI likely? Yes → UFH. No → Enoxaparin or fondaparinux.</li><li><b>No reperfusion</b> → UFH or enoxaparin.</li></ul><p>Footnotes: in patients with prior heparin-induced thrombocytopenia, bivalirudin is the anticoagulant of choice. With bivalirudin, the infusion should continue after PCI at 1.75 mg/kg/hour (1 mg/kg/hour for eGFR &lt;30) for 2 to 4 hours. Fondaparinux may not be available for this use in some regions.</p>",
        why: "<p>Choose the anticoagulant by what happens next. <b>PCI</b>: UFH or bivalirudin. <b>Lytics</b>: UFH if PCI will follow, otherwise enoxaparin or fondaparinux. <b>No reperfusion</b>: UFH or enoxaparin. <b>History of HIT</b>: bivalirudin (no heparin in it).</p>",
        q: [
          Q("A STEMI patient going to PCI has a history of HIT. Which anticoagulant?", "Bivalirudin", ["UFH", "Enoxaparin", "Warfarin"], "Bivalirudin is the choice after heparin-induced thrombocytopenia."),
          Q("A STEMI patient gets lytics and PCI is NOT likely afterward. Which anticoagulant?", "Enoxaparin or fondaparinux", ["Bivalirudin", "No anticoagulant", "Aspirin only"], "Without later PCI, enoxaparin or fondaparinux is used."),
          Q("Which anticoagulants are options with primary PCI for STEMI?", "UFH or bivalirudin", ["Enoxaparin or fondaparinux", "Warfarin or apixaban", "Alteplase or tenecteplase"], "The PCI branch lists UFH or bivalirudin.")
        ]
      }),
      S(75, "NSTEMI/UA: invasive or selective strategy?", {
        why: "<p><b>Invasive</b>: cath, then revascularize when appropriate. <b>Selective invasive</b>: medicines first, cath if ischemia recurs, the patient becomes unstable or other reasons appear. Decide on overall risk and the whole picture, not one score.</p>",
        q: [
          Q("In a selective invasive strategy, what is done first?", "Medical treatment", ["Emergent cath", "CABG", "Fibrinolytics"], "Selective invasive starts with medicines."),
          Q("What should guide the choice of invasive vs selective strategy?", "Overall risk and clinical context, not one score alone", ["Only the TIMI score", "Only age", "Only the troponin peak"], "The slide stresses the overall picture.")
        ]
      }),
      S(76, "Selective invasive strategy: medical management", {
        why: "<p>On the medical path: guideline anti-ischemic and antithrombotic drugs, watch symptoms, EKG, vitals and signs of recurrent ischemia, echo when indicated (EF and complications), and reconsider cath if symptoms return or the patient destabilizes.</p>",
        q: [
          Q("A medically managed NSTEMI patient has recurrent chest pain on day 2. What now?", "Reconsider angiography", ["Discharge", "Stop all medications", "Give lytics"], "Recurrent symptoms or instability prompt cath."),
          Q("Why get an echo during selective invasive management?", "To assess ventricular function and complications", ["To measure troponin", "To diagnose asthma", "To check the INR"], "Echo shows EF and mechanical complications.")
        ]
      }),
      S(77, "Invasive strategy and STEMI", {
        why: "<p>Call cardiology promptly. Give aspirin and the ACS antithrombotics. Nitrates and beta blockers only when appropriate. <b>Never delay angiography or reperfusion</b> to get pain relief or finish meds. STEMI for primary PCI: activate the cath lab and go fast.</p>",
        q: [
          Q("A STEMI patient still has pain, and nurses want to finish the nitro titration before the cath. What is right?", "Do not delay reperfusion for pain relief", ["Wait until pain is gone", "Finish all meds first", "Give morphine and wait 1 hour"], "Urgent reperfusion must not wait for symptom control."),
          Q("What do you activate for a STEMI going to primary PCI?", "The cath lab", ["The stroke team", "The rapid response team only", "Outpatient stress testing"], "Activate the cath lab and go as fast as possible.")
        ]
      }),
      S(78, "NSTEMI: stable vs unstable", {
        why: "<p><b>Unstable NSTEMI</b> (refractory ischemia, hemodynamic instability, life-threatening arrhythmia): urgent invasive evaluation. <b>Stable NSTEMI</b>: cath timing from overall risk and course. Make NPO status match the planned procedure, rather than reflexively starving everyone.</p>",
        q: [
          Q("An NSTEMI patient develops sustained VT. What is the plan?", "Urgent invasive evaluation", ["Delay cath for a week", "Stress test", "Discharge on meds"], "Life-threatening arrhythmia makes the NSTEMI unstable."),
          Q("How should NPO status be decided for an NSTEMI patient?", "Tied to the planned procedure", ["Everyone NPO for 3 days", "Never NPO", "NPO only after discharge"], "NPO follows the procedure plan.")
        ]
      }),
      S(79, "PCI in ACS", {
        why: "<p>PCI is indicated for STEMI (door-to-PCI under 90 min) and high-risk NSTEMI, at a PCI-capable center. Contrast can cause <b>anaphylactoid reactions</b> (pretreat with a steroid or antihistamine) and <b>kidney injury</b>: pre-hydrate with IV normal saline, consider N-acetylcysteine, <b>hold metformin 48 hours before and after</b>, and hold other nephrotoxins.</p>",
        q: [
          Q("How long is metformin held around a cath?", "48 hours before and after", ["1 hour before only", "1 week after", "It is not held"], "Metformin is held 48 hours before and after LHC."),
          Q("What is the key step to protect the kidneys before PCI?", "Pre-hydration with IV normal saline", ["Furosemide", "Fluid restriction", "NSAIDs"], "Hydration lowers contrast kidney injury."),
          Q("A patient had a prior contrast reaction. What can be given before PCI?", "A steroid or antihistamine", ["Extra contrast", "Aspirin only", "Nothing can be done"], "Pretreatment reduces anaphylactoid reactions."),
          Q("What door-to-PCI time does this slide give for STEMI?", "Under 90 minutes", ["Under 30 minutes", "Under 6 hours", "Under 24 hours"], "STEMI door-to-PCI is under 90 minutes.")
        ]
      }),
      S(80, "Invasive treatment: CABG", {
        pic: "<p><b>CABG = coronary artery bypass graft.</b> Drawing of the heart with three grafts bypassing sites of blockage: an <b>internal mammary artery bypass</b>, a <b>radial artery bypass</b> (from the forearm) and a <b>saphenous vein bypass</b>.</p>",
        why: "<p>CABG uses a patient's own vessels to route blood around blockages: the internal mammary artery, the radial artery from the forearm, or the saphenous vein from the leg.</p>",
        q: [
          Q("Which graft vessel on the CABG picture is a vein?", "Saphenous vein", ["Internal mammary artery", "Radial artery", "Coronary sinus"], "The saphenous vein graft is the venous conduit."),
          Q("Where does the radial artery graft come from?", "The forearm", ["The leg", "The chest wall", "The neck"], "The picture shows it harvested from the arm.")
        ]
      }),
      S(81, "Fibrinolytics: alteplase (tPA)", {
        why: "<p>Alteplase activates plasminogen into <b>plasmin</b>, which chews up fibrin. It limits infarct size, improves LV function and lowers death, but is <b>far inferior to PCI</b>, so it's used only when PCI can't be done. <b>Only for STEMI</b> (not UA or NSTEMI).</p>",
        q: [
          Q("How does alteplase dissolve a clot?", "It converts plasminogen to plasmin, which breaks down fibrin", ["It blocks COX-1", "It blocks P2Y12", "It inhibits factor Xa"], "Plasmin degrades fibrin."),
          Q("Which ACS type can be treated with alteplase?", "STEMI only", ["NSTEMI", "Unstable angina", "All three"], "Alteplase is only used for STEMI."),
          Q("How does alteplase compare with PCI?", "Far inferior, so only used when PCI cannot be done", ["Superior to PCI", "Equal to PCI", "Used before PCI in everyone"], "PCI is better whenever it is available in time.")
        ]
      }),
      S(82, "Selecting a reperfusion strategy in STEMI", {
        pic: "<p><b>Selecting a reperfusion strategy in ST-elevation myocardial infarction</b> (UpToDate). What is the duration of ischemic symptoms?</p><ul><li><b>≤12 hours</b>: Can the patient undergo primary PCI within 120 minutes of first medical contact, or, if cardiogenic shock is present, is PCI available in less than 150 minutes? <b>Yes</b> → perform immediate PCI: activate emergency STEMI protocols, arrange rapid transfer to a PCI-capable center (quality goal: PCI within 90 minutes of ED arrival). <b>No</b> → can the patient receive a fibrinolytic agent? Yes → treat with a fibrinolytic agent and immediately transfer for angiography (quality goals: door-to-needle &lt;30 minutes and transfer for angiography within 24 hours). No → perform PCI as soon as possible.</li><li><b>&gt;12 hours and ≤48 hours</b>: Is there evidence of ongoing ischemia? Yes → perform PCI as soon as possible. No → nonurgent PCI, if available; otherwise, management without PCI or fibrinolysis is reasonable.</li><li><b>&gt;48 hours</b>: approach to reperfusion is individualized.</li></ul><p><b>Major contraindications to fibrinolysis include</b>: history of intracranial hemorrhage, cerebrovascular malformation, or intracranial malignancy; ischemic stroke in the previous 3 months but not within the last 3 hours; symptoms or signs of aortic dissection; active bleeding; significant closed-head or facial trauma in the preceding 3 months.</p>",
        why: "<p>Start with how long symptoms have lasted. Under 12 hours: PCI if it can happen within 120 minutes of first contact (150 if in shock); if not, lytics (door-to-needle under 30 min) then transfer for angiography within 24 hours; if lytics are contraindicated, PCI as soon as possible. 12-48 hours: PCI if still ischemic. Lytic contraindications are all about bleeding, especially in the brain, and aortic dissection.</p>",
        q: [
          Q("Which is a major contraindication to fibrinolysis?", "Suspected aortic dissection", ["Age over 65", "Diabetes", "Prior PCI"], "Lysing a dissection can be fatal."),
          Q("A STEMI patient can't get PCI within 120 minutes and has a history of intracranial hemorrhage. What now?", "PCI as soon as possible", ["Give lytics anyway", "No reperfusion ever", "Give double-dose heparin"], "If lytics are contraindicated, go to PCI as soon as possible."),
          Q("A STEMI started 30 hours ago and the patient still has ischemic pain. What does the flowchart say?", "Perform PCI as soon as possible", ["Give lytics", "Discharge home", "Reperfusion is never done"], "From 12 to 48 hours with ongoing ischemia, PCI as soon as possible."),
          Q("After lytics, what is the time goal for transfer for angiography?", "Within 24 hours", ["Within 1 week", "Within 30 days", "Not needed"], "Transfer for angiography within 24 hours is the quality goal.")
        ]
      }),
      S(83, "Fibrinolytics: when and what follows", {
        why: "<p>Lytics are for STEMI within <b>12 hours</b> of chest pain when invasive treatment is not an option. Afterward, keep the patient on <b>UFH, LMWH or fondaparinux for at least 48 hours and up to 8 days</b>, so small clots released during lysis don't block new spots.</p>",
        q: [
          Q("How long is anticoagulation continued after fibrinolysis?", "At least 48 hours and up to 8 days", ["1 hour", "Lifelong", "None is needed"], "UFH/LMWH/fondaparinux run 48 hours to 8 days."),
          Q("Within what time of chest pain onset are lytics used for STEMI?", "12 hours", ["72 hours", "1 hour only", "1 week"], "Lytics are for presentation within 12 hours."),
          Q("Why is anticoagulation given after a fibrinolytic?", "To prevent small thromboses as the clot is lysed", ["To reverse the lytic", "To raise BP", "To prevent tolerance"], "Fragments can form new blockages without anticoagulation.")
        ]
      }),
      S(84, "Additional considerations in ACS", {
        why: "<p>No prophylactic lidocaine or other antiarrhythmics to prevent VT/VF (no benefit and possible harm). Correct <b>low potassium and magnesium</b> to lower arrhythmia risk. Start a <b>high-intensity statin</b> in every ACS patient unless contraindicated, <b>whatever the baseline LDL</b>.</p>",
        q: [
          Q("Should prophylactic lidocaine be given to prevent VT/VF in ACS?", "No", ["Yes, to all STEMIs", "Yes, to all NSTEMIs", "Only in the elderly"], "Prophylactic antiarrhythmics are not used."),
          Q("An ACS patient's LDL is 62. Should a high-intensity statin be started?", "Yes, regardless of baseline LDL", ["No, LDL is already low", "Only a low-intensity statin", "Only if diabetic"], "High-intensity statin is started whatever the LDL."),
          Q("Which electrolytes are corrected to lower arrhythmia risk in ACS?", "Potassium and magnesium", ["Sodium and chloride", "Calcium and phosphorus", "Bicarbonate only"], "Hypokalemia and hypomagnesemia raise arrhythmia risk.")
        ]
      }),
      S(85, "References (1)", {
        why: "<p>The guidelines behind the lecture: the 2026 dyslipidemia guideline, the PREVENT equations (2024) and the 2023 chronic coronary disease guideline. Nothing to memorize here.</p>"
      }),
      S(86, "References (2)", {
        why: "<p>The 2021 chest pain guideline and the 2025 ACC/AHA ACS guideline (the source of most ACS recommendations in this deck).</p>"
      }),
      S(87, "References (3)", {
        why: "<p>The 2026 Fifth Universal Definition of MI and the AHA exercise testing standards.</p>"
      })
    ],
    review: [
      Q("A STEMI patient is going straight to primary PCI. Which anticoagulant would usually be chosen?", "UFH (or bivalirudin)", ["Enoxaparin SQ", "Fondaparinux", "Warfarin"], "PCI pairs with UFH or bivalirudin."),
      Q("A STEMI patient 2 hours into symptoms is 3 hours from PCI with no contraindications. What is the plan?", "Fibrinolytic within 30 minutes, then transfer", ["Wait for PCI", "Heparin only", "CABG now"], "PCI can't happen within 120 minutes, so lyse and transfer."),
      Q("Which drug is NOT used routinely in ACS: high-intensity statin or prophylactic amiodarone?", "Prophylactic amiodarone", ["High-intensity statin", "Both are routine", "Neither"], "Prophylactic antiarrhythmics are avoided."),
      Q("A diabetic on metformin is scheduled for LHC tomorrow. What do you do with the metformin?", "Hold it 48 hours before and after", ["Double it", "Continue it unchanged", "Switch to glipizide permanently"], "Metformin is held around contrast exposure."),
      Q("An NSTEMI patient with no planned cath needs an anticoagulant. Which one fits?", "Enoxaparin 1 mg/kg SQ q12h", ["UFH drip for cath", "Alteplase", "Bivalirudin"], "Enoxaparin is used when no LHC is planned."),
      Q("Can alteplase be given for an NSTEMI?", "No, it is only for STEMI", ["Yes, always", "Yes, if troponin is high", "Only in the elderly"], "Fibrinolytics are for STEMI only.")
    ]
  });

  SlideStudy.lecture({
    id: "cad-part-5",
    title: "CAD Part V: Pharmacology",
    short: "CAD V",
    by: "Stager",
    img: "images/cad5-slides/slide-{nn}.webp",
    los: los
  });
})();
