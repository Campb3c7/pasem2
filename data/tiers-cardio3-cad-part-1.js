/* Cardio Part 3 Tiers: CAD Part I (Foundations, Stager deck), all three tiers.
   Each tier is split into small chunks: { id, title, cards: [C(title, html)], check: [Q], bank: [Q] }.
   Chunk ids, card order and question order are progress keys: only append. Loaded after data/tiers-cardio-part-3.js. */
(function () {
  "use strict";
  var T = window.CARDIO3_TIERS;
  if (!T) return;
  function C(title, html) { return { title: title, html: html }; }
  function Q(prompt, answer, wrong, why) { return { prompt: prompt, answer: answer, wrong: wrong, why: why }; }
  function hy(x) { return '<div class="box-hy"><span class="lbl">High yield</span>' + x + "</div>"; }
  function table(head, rows) {
    return '<table class="learn-table"><tr>' + head.map(function (h) { return "<th>" + h + "</th>"; }).join("") + "</tr>" +
      rows.map(function (r) { return "<tr>" + r.map(function (c) { return "<td>" + c + "</td>"; }).join("") + "</tr>"; }).join("") + "</table>";
  }

  /* ---------------- Tier 1: foundations ---------------- */
  T.units["t1|cad-part-1"] = { chunks: [
    { id: "words", title: "CAD, ASCVD and IHD: the words", cards: [
      C("Three words that sound the same but aren't",
        "<p><strong>Atherosclerosis</strong> is the process: lipid buildup plus inflammation in the artery wall makes plaque.</p>" +
        table(["Term", "What it means"], [
          ["ASCVD", "Atherosclerosis anywhere: coronary, brain, limbs or aorta"],
          ["CAD (= ASHD)", "Atherosclerosis of the <strong>coronary</strong> arteries only"],
          ["IHD", "Oxygen <strong>supply falls short of demand</strong> in the heart muscle"],
          ["CVD", "Any heart or vessel disease, even non-atherosclerotic"]]) +
        hy("CAD can cause IHD, but ischemia can happen <strong>without</strong> obstructive CAD (spasm, emboli). CAD is just one part of ASCVD.")),
      C("What CAD looks like when it causes symptoms",
        "<p>Symptomatic CAD shows up in two ways:</p><ul><li><strong>Stable angina</strong>: chest pain with exertion</li>" +
        "<li><strong>Acute coronary syndrome (ACS)</strong>: unstable angina, NSTEMI, STEMI</li></ul>" +
        "<p>The next chunks explain why: a slowly narrowing plaque gives stable angina, a suddenly rupturing plaque gives ACS.</p>")
    ], check: [
      Q("Which term means the heart muscle's oxygen supply falls short of its demand?", "Ischemic heart disease (IHD)", ["Coronary artery disease (CAD)", "ASCVD", "Atherosclerosis"], "IHD names the supply-demand mismatch itself, whatever caused it."),
      Q("A patient has atherosclerosis in the carotids and femoral arteries but clean coronaries. Which term fits?", "ASCVD", ["CAD", "ASHD", "IHD"], "ASCVD covers atherosclerosis in any arterial territory, not only the coronaries."),
      Q("Which of these is NOT an acute coronary syndrome?", "Stable angina", ["Unstable angina", "NSTEMI", "STEMI"], "Stable angina is the chronic, exertional form; ACS is UA, NSTEMI and STEMI.")
    ], bank: [
      Q("Can a patient have myocardial ischemia without obstructive CAD?", "Yes, for example from vasospasm or emboli", ["No, ischemia always means a fixed coronary stenosis", "Only in women", "Only after CABG"], "Ischemia is a supply-demand problem, and spasm or emboli can cut supply without plaque.")
    ] },

    { id: "supply", title: "Supply vs demand: why ischemia happens", cards: [
      C("The heart fills its own arteries in diastole",
        "<ul><li>Coronary flow happens mostly in <strong>diastole</strong>; in systole the squeezing muscle compresses its own vessels.</li>" +
        "<li>Exercise raises heart rate and contractility, so <strong>demand goes up</strong>.</li>" +
        "<li>A faster heart rate <strong>shortens diastole</strong>, so there is less time to perfuse each beat.</li>" +
        "<li>Normal arteries answer by <strong>dilating</strong>. A narrowed artery can't open enough, so supply < demand = <strong>ischemia</strong>, felt as angina.</li></ul>" +
        hy("Tachycardia hurts twice: more demand and less diastolic filling time."))
    ], check: [
      Q("When does most blood flow into the myocardium?", "Diastole", ["Systole", "Isovolumetric contraction", "Equally in systole and diastole"], "Contracting muscle squeezes the intramyocardial vessels shut in systole."),
      Q("Heart rate rises from 70 to 140 during exercise. What happens to coronary perfusion time per beat?", "It falls, because diastole shortens", ["It rises, because diastole lengthens", "It doesn't change", "It rises, because systole shortens"], "Faster rates eat mostly into diastole, which is when the coronaries fill."),
      Q("Why does a patient with a fixed 70% stenosis get angina only with exertion?", "The narrowed artery can't dilate enough to meet the higher demand", ["The plaque ruptures each time they exercise", "Exercise causes coronary vasospasm", "Resting flow is already zero in that artery"], "At rest flow is enough; with exertion demand rises but the stenosed artery can't increase supply.")
    ], bank: [
      Q("Which change raises myocardial oxygen demand?", "Higher heart rate and contractility", ["Longer diastole", "Lower heart rate", "Coronary vasodilation"], "The heart burns more oxygen the faster and harder it beats.")
    ] },

    { id: "two-plaques", title: "Old plaque vs young plaque", cards: [
      C("Two plaques, two diseases",
        table(["", "Old, stable plaque", "Young, vulnerable plaque"], [
          ["Cap", "Thick fibrous cap", "Thin cap"],
          ["Core", "Small lipid core, little inflammation", "Large lipid core, lots of inflammation"],
          ["What it does", "Narrows the lumen (stenosis)", "Often small, then suddenly <strong>ruptures</strong> → clot"],
          ["Disease", "<strong>Exertional (stable) angina</strong>, claudication", "<strong>ACS</strong>: UA, NSTEMI, STEMI"],
          ["Warning?", "Symptoms with exertion first, later at rest", "Abrupt, often no warning angina"]]) +
        hy("Arthur, 34, runner who eats fast food, has a sudden MI: young plaque ruptured. Zeke, 90, slower with chores from chest tightness: old stable stenosis."))
    ], check: [
      Q("Which plaque is most likely to rupture and cause an MI?", "Thin fibrous cap with a large lipid core", ["Thick fibrous cap with little lipid", "Heavily calcified old plaque", "Plaque causing a 90% stable stenosis"], "Thin caps over big inflamed lipid pools tear, exposing clot-forming material."),
      Q("A 35-year-old with no prior symptoms has a sudden STEMI. What most likely happened in his artery?", "A small, young plaque ruptured and a clot formed", ["A slowly growing plaque finally closed the lumen", "A heavily calcified plaque spasmed", "A stable thick-capped plaque eroded over years"], "Young plaques don't narrow much but rupture suddenly, so ACS comes with no warning."),
      Q("Old plaques with thick fibrous caps usually cause which presentation?", "Exertional angina", ["STEMI", "Sudden cardiac death without warning", "Unstable angina at rest"], "Thick-capped plaques rarely rupture but narrow the lumen, limiting flow during exertion.")
    ], bank: [
      Q("How does acute CAD (plaque rupture) differ from chronic CAD in its symptoms?", "It starts abruptly, with no warning angina", ["It starts with exertion and later occurs at rest", "It causes only claudication", "It is always painless"], "Rupture and clot block flow all at once, unlike a plaque that grows slowly.")
    ] },

    { id: "symptoms", title: "What ischemia feels like", cards: [
      C("Classic angina, and how women differ",
        "<ul><li><strong>Chest pain</strong>: substernal, tight, dull, achy; radiates to the left shoulder or arm; lasts minutes to hours.</li>" +
        "<li><strong>Not</strong> worse with deep breaths or pressing on the sternum (that points away from the heart).</li>" +
        "<li>Also: exertional dyspnea, nausea, lightheadedness, diaphoresis.</li></ul>" +
        hy("Women often skip classic chest pain: unusual fatigue, sleep trouble, shortness of breath, indigestion, anxiety. Only 30% had chest discomfort before their MI."))
    ], check: [
      Q("Which feature argues AGAINST cardiac chest pain?", "It gets worse when you press on the sternum", ["It is substernal and tight", "It radiates to the left arm", "It comes with sweating"], "Ischemic pain doesn't change with palpation or breathing; reproducible pain points to the chest wall."),
      Q("A 58-year-old woman has weeks of unusual fatigue, poor sleep and indigestion. What should you keep in mind?", "These can be ischemia symptoms in women", ["Women's MI symptoms are the same as men's", "Without chest pain, ischemia is ruled out", "These symptoms only matter after age 80"], "Most women in the study had these vague symptoms and only 30% had chest discomfort.")
    ], bank: [
      Q("Which description best fits classic angina?", "Dull, tight substernal pressure radiating to the left shoulder", ["Sharp pain worse with a deep breath", "Burning pain after meals relieved by antacids", "Pain reproduced by pressing on the ribs"], "Ischemic pain is a dull pressure that radiates, not sharp, pleuritic or positional.")
    ] },

    { id: "testing", title: "Who gets tested, and how", cards: [
      C("Testing is for symptomatic patients only",
        "<ul><li>Start with risk factors and a good H&P.</li>" +
        "<li>Ischemia tests are <strong>not screening</strong> tools: only <strong>symptomatic</strong> patients get them.</li>" +
        "<li><strong>Pretest likelihood</strong> (age, sex, symptoms, number of risk factors) decides whether and how to test.</li></ul>" +
        table(["Rule", "Meaning"], [
          ["1", "Acute MI or ongoing ischemia: <strong>no stress test of any kind</strong>"],
          ["2", "<strong>Exercise</strong> stress is preferred if they can exercise"],
          ["3", "Abnormal baseline EKG (LBBB, paced): pharmacologic stress <strong>with imaging</strong>"],
          ["4", "No vasodilators with hypotension, high-grade AV block, sick sinus or active wheezing"]]) +
        hy("Invasive coronary angiography is the reference standard for coronary anatomy and lets you place a stent (PCI) in the same procedure."))
    ], check: [
      Q("Which patient should get a stress test?", "A 60-year-old with 3 months of exertional chest tightness", ["An asymptomatic 50-year-old with high cholesterol, as screening", "A patient with chest pain right now and ST depressions", "A patient 1 year after a stent with no new symptoms"], "Stress tests are for symptomatic stable patients, never screening or active ischemia."),
      Q("A patient can walk on a treadmill but has a LBBB. Which test?", "Pharmacologic stress test with imaging", ["Exercise treadmill EKG alone", "No testing is possible", "Exercise treadmill EKG with a longer protocol"], "A LBBB makes ST changes unreadable, so you need imaging, done with drug stress."),
      Q("What is the reference standard for defining coronary anatomy?", "Invasive coronary angiography", ["Exercise stress EKG", "Coronary calcium score", "Transthoracic echo"], "Angiography shows the lumen directly and can treat a blockage with PCI.")
    ], bank: [
      Q("What decides how a patient with suspected stable angina is worked up?", "Their pretest (clinical) likelihood of obstructive CAD", ["Their cholesterol level alone", "Whether they want a cath", "Their age alone"], "The likelihood model combines age, sex, symptoms and risk factors to pick the next test.")
    ] }
  ] };

  /* ---------------- Tier 2: standard details ---------------- */
  T.units["t2|cad-part-1"] = { chunks: [
    { id: "risk", title: "Risk factors", cards: [
      C("Modifiable, non-modifiable and risk enhancers",
        table(["Modifiable", "Non-modifiable", "Risk enhancers"], [
          ["HTN, dyslipidemia, diabetes, tobacco, obesity, inactivity, poor diet, excess alcohol",
           "Male sex, older age, family history of <strong>premature CAD</strong> (male relative < 55, female < 65)",
           "CKD stage 3-5, metabolic syndrome, chronic inflammatory disease"]]) +
        hy("Smoking raises ASCVD risk 2-3x, and that risk falls 50% within 2 years of quitting. Even modest exercise lowers risk a lot.") +
        "<p>Risk reduction: stop tobacco, control BP and lipids, move more and eat well (sustainable changes, not all-or-nothing), manage diabetes.</p>")
    ], check: [
      Q("Which family history counts as premature CAD?", "Father with an MI at 50", ["Father with an MI at 60", "Mother with an MI at 70", "Grandfather with an MI at 75"], "Premature means a male relative under 55 or a female relative under 65."),
      Q("How much does ASCVD risk drop within 2 years of quitting smoking?", "About 50%", ["About 10%", "It doesn't drop for 10 years", "Back to zero risk"], "Quitting halves the excess risk within 2 years, which is why cessation comes first."),
      Q("Which is a risk-enhancing condition rather than a classic modifiable risk factor?", "Chronic kidney disease stage 3", ["Hypertension", "Tobacco use", "Obesity"], "CKD 3-5, metabolic syndrome and chronic inflammation are listed as risk enhancers.")
    ], bank: [
      Q("Which is a non-modifiable ASCVD risk factor?", "Male sex", ["Physical inactivity", "Dyslipidemia", "Excess alcohol"], "Sex, age and family history can't be changed; the rest can.")
    ] },

    { id: "plaque", title: "How plaque forms", cards: [
      C("From LDL to plaque",
        '<ol class="concept-chain"><li><strong>LDL</strong> enters the intima and gets trapped and modified.</li>' +
        "<li><strong>Monocytes</strong> are recruited, become macrophages and eat the lipid → <strong>foam cells</strong>.</li>" +
        "<li>Foam cells form the first lesion, the <strong>fatty streak</strong>.</li>" +
        "<li>Over 10-15 years some streaks become complex plaques (atheromas).</li></ol>" +
        "<p><strong>Endothelial dysfunction</strong> drives it: the healthy endothelium makes <strong>NO</strong> (vasodilates, blocks platelet adhesion and inflammation) and <strong>prostacyclin (PGI₂)</strong> (vasodilates, blocks platelet aggregation). Lose them and the wall loses its protection.</p>" +
        hy("Plaques form where flow is disturbed: <strong>branch points, sharp curves</strong>, irregular segments and sudden changes in velocity or direction. Accelerators: HTN (shear), smoking, high cholesterol, inflammation/oxidative stress."))
    ], check: [
      Q("What is the first visible lesion of atherosclerosis?", "Fatty streak", ["Fibrous cap", "Calcified plaque", "Thrombus"], "Lipid-filled foam cells collecting in the intima make the fatty streak first."),
      Q("What are foam cells?", "Macrophages filled with lipid", ["Platelets stuck to the endothelium", "Smooth muscle cells making collagen", "Red cells trapped in clot"], "Recruited monocytes become macrophages that swallow modified LDL."),
      Q("Where in the arterial tree do atheromas tend to form?", "At branch points and sharp curves", ["In straight segments with smooth flow", "Only in the aorta", "Only in capillaries"], "Disturbed flow at branches and curves damages endothelial function.")
    ], bank: [
      Q("Which endothelial product vasodilates and inhibits platelet aggregation?", "Prostacyclin (PGI₂)", ["Thromboxane A2", "Endothelin", "LDL"], "Prostacyclin and nitric oxide are the protective molecules lost in endothelial dysfunction.")
    ] },

    { id: "remodel", title: "Stable vs vulnerable plaque and remodeling", cards: [
      C("Plaques age, and arteries remodel",
        "<p>As an unruptured plaque ages, its inflammation cools and its cap gains collagen, so it becomes <strong>more stable</strong>.</p>" +
        table(["Remodeling", "What happens", "Effect"], [
          ["Positive (most common)", "Wall bulges outward at the plaque", "Lumen preserved, so angina is less likely at first"],
          ["Negative", "No outward bulge", "Plaque grows into the lumen and narrows it"]]) +
        hy("Positive remodeling can switch to negative as the plaque keeps growing. The inflamed plaque core is also pro-clotting and activates platelets."))
    ], check: [
      Q("Which kind of remodeling keeps the lumen open early on?", "Positive remodeling", ["Negative remodeling", "Calcific remodeling", "Fibrous remodeling"], "In positive remodeling the wall bulges outward, so the plaque doesn't narrow the lumen yet."),
      Q("What happens to an unruptured plaque as it ages?", "Less inflammation and a thicker collagen cap, so more stable", ["More inflammation and a thinner cap", "It dissolves completely", "It always ruptures within a year"], "Old plaques heal their caps, which is why they cause stenosis rather than rupture.")
    ], bank: [
      Q("Which remodeling pattern is most common?", "Positive remodeling", ["Negative remodeling", "Neither; plaques don't remodel", "They are equally common"], "Most plaques first push the wall outward before any narrowing.")
    ] },

    { id: "muscle", title: "Stunning, hibernation and infarction", cards: [
      C("What ischemia does to the muscle",
        "<p>Ischemia → anaerobic metabolism → lactic acid → poor relaxation and contraction → <strong>regional wall motion abnormalities</strong> on echo, and changes on the EKG.</p>" +
        table(["", "Cause", "Viable?", "Recovers?"], [
          ["<strong>Stunning</strong>", "Short ischemia, then flow restored", "Yes", "On its own in hours to days"],
          ["<strong>Hibernation</strong>", "Chronic or repeated low flow; muscle turns itself down", "Yes", "After revascularization"],
          ["<strong>Infarction</strong>", "Prolonged severe ischemia → necrosis", "No", "Never: permanent loss"]]) +
        hy("Stunned = flow is back, function isn't yet. Hibernating = flow is still low, function waits for a stent or bypass."))
    ], check: [
      Q("Blood flow is restored after a brief occlusion, but the wall still moves poorly for 2 days. What is this?", "Myocardial stunning", ["Myocardial hibernation", "Myocardial infarction", "Positive remodeling"], "Stunning is viable muscle that stays weak for a while after flow returns."),
      Q("Chronically low flow makes a wall contract poorly, and it improves after CABG. What was it?", "Hibernating myocardium", ["Stunned myocardium", "Infarcted myocardium", "Scar tissue"], "Hibernating muscle is viable but turned down until blood supply is restored."),
      Q("Which ischemic state causes permanent loss of muscle?", "Myocardial infarction", ["Stunning", "Hibernation", "Demand ischemia that resolves"], "Prolonged severe ischemia kills myocytes, and dead muscle doesn't recover.")
    ], bank: [
      Q("Why does ischemic muscle show a wall motion abnormality on echo?", "Lactic acid from anaerobic metabolism impairs relaxation and contraction", ["The muscle is always already dead", "The valve stops opening", "The pericardium stiffens"], "Local acidosis makes that region stiff and weak, which echo sees as abnormal wall motion.")
    ] },

    { id: "stress", title: "Stress tests: which one", cards: [
      C("Exercise, drugs and imaging",
        table(["Test", "How it stresses", "Key point"], [
          ["Exercise treadmill (Bruce)", "Speed and incline rise every 3 minutes", "Needs ability to exercise and a readable resting EKG"],
          ["Vasodilators: <strong>regadenoson</strong> (most common), adenosine, dipyridamole", "Dilate healthy arteries more than stenosed ones", "Avoid in hypotension, high-grade AV block, sick sinus, wheezing"],
          ["<strong>Dobutamine</strong> (stress echo)", "Raises HR and contractility = more demand", "Also tests hibernating muscle viability"],
          ["MPI (nuclear)", "Tracer at stress vs rest", "<strong>Reversible defect</strong> = dark at stress, filled at rest = ischemia; only contraindication: pregnancy"],
          ["Stress echo", "Exercise or dobutamine", "Looks for new wall motion abnormalities"]]))
    ], check: [
      Q("Which vasodilator is the most commonly used stress agent?", "Regadenoson (Lexiscan)", ["Dobutamine", "Dipyridamole", "Nitroglycerin"], "Regadenoson is listed as the most common pharmacologic stress agent."),
      Q("A patient with active asthma wheezing needs a pharmacologic stress test. Which agent fits?", "Dobutamine", ["Adenosine", "Regadenoson", "Dipyridamole"], "Vasodilators can trigger bronchospasm, so use dobutamine, which raises demand instead."),
      Q("On MPI, an area is dark on the stress images but fills in at rest. What does it mean?", "Reversible ischemia", ["Old infarct (scar)", "A normal study", "Attenuation from breast tissue"], "Tracer missing only under stress means the area gets enough flow at rest but not under load.")
    ], bank: [
      Q("What is the only contraindication to MPI itself?", "Pregnancy", ["Diabetes", "Age over 65", "Prior PCI"], "The radioactive tracer is the problem, so pregnancy is the one contraindication.")
    ] },

    { id: "after", title: "Duke score, CCTA and the cath", cards: [
      C("Reading results and choosing the next step",
        "<p><strong>Duke Treadmill Score</strong> uses exercise minutes, max ST deviation (mm) and the angina index (0 none, 1 nonlimiting, 2 limiting).</p>" +
        table(["Score", "Risk", "Next step"], [
          ["≥ +5", "Low", "Usually no more testing"],
          ["−10 to +4", "Intermediate", "Stress imaging or CCTA"],
          ["≤ −11", "High", "Prompt evaluation; consider invasive angiography"]]) +
        "<p><strong>CCTA</strong>: IV contrast CT of the coronaries; best for stable chest pain with no known CAD and <strong>intermediate</strong> likelihood, or to clarify an unclear stress test.</p>" +
        "<p><strong>Coronary angiography (LHC)</strong>: contrast + fluoroscopy, radial or femoral access; diagnostic <strong>and</strong> therapeutic (balloon + stent = PCI in the same sitting).</p>")
    ], check: [
      Q("A Duke Treadmill Score of −1 means what risk?", "Intermediate", ["Low", "High", "Non-diagnostic"], "Scores from −10 to +4 are intermediate, which calls for imaging or CCTA next."),
      Q("A Duke score of −14. What is the next step?", "Prompt evaluation and consider invasive angiography", ["No more testing", "Repeat the treadmill in a year", "Coronary calcium score"], "Scores of −11 or lower are high risk, so you look at the anatomy directly."),
      Q("Which patient is the best fit for CCTA?", "Stable chest pain, no known CAD, intermediate likelihood", ["Ongoing chest pain with ST elevation", "Known heavy coronary calcification", "Advanced CKD"], "CCTA shines in intermediate-likelihood patients without known CAD; calcium and CKD favor stress testing.")
    ], bank: [
      Q("What makes coronary angiography both diagnostic and therapeutic?", "A PCI with balloon and stent can be done in the same procedure", ["It also measures the calcium score", "It gives a stress EKG at the same time", "It dissolves plaque with contrast"], "If a significant narrowing is found, the cardiologist can open it right then.")
    ] }
  ] };

  /* ---------------- Tier 3: the weeds ---------------- */
  T.units["t3|cad-part-1"] = { chunks: [
    { id: "numbers", title: "The numbers", cards: [
      C("Numbers from the slides",
        table(["Fact", "Number"], [
          ["Americans with ASCVD", "18.2 million (rises with age)"],
          ["Worldwide ASCVD deaths, 2023", "~15.9 million"],
          ["US adults with ≥ 1 established risk factor", "35%"],
          ["CV mortality from the top 5 modifiable factors (HLD, DM, HTN, obesity, smoking)", "> 50%"],
          ["Heart's share of body weight vs resting O₂ use", "0.3% vs 7%"],
          ["Time for a plaque to fully develop", "10-15 years"],
          ["Women with MI: symptom > 1 month before / chest discomfort", "78% / only 30% (study of 515 women)"]]))
    ], check: [
      Q("The heart is 0.3% of body weight. What share of resting oxygen does it use?", "7%", ["0.3%", "20%", "50%"], "That big gap is why the heart is called needy: it can't tolerate any shortfall in supply."),
      Q("How long can an atheroma take to fully develop?", "10-15 years", ["2-3 weeks", "1 year", "40-50 years"], "Plaque builds slowly over a decade or more, which is why prevention starts early."),
      Q("The top five modifiable risk factors account for what share of CV mortality?", "More than 50%", ["About 10%", "About 25%", "Nearly 100%"], "Over half of cardiovascular deaths trace back to HLD, DM, HTN, obesity and smoking.")
    ], bank: [
      Q("In the study of 515 women with MI, what share reported chest discomfort?", "30%", ["78%", "95%", "50%"], "Only 30% had chest discomfort, while 78% had another symptom for over a month beforehand.")
    ] },

    { id: "other-causes", title: "Ischemia without plaque", cards: [
      C("Other causes of ischemia",
        "<ul><li><strong>Vasospasm</strong> → <strong>Prinzmetal's angina</strong>: twitchy arterioles or sympathomimetic drugs (like cocaine, standard teaching) causing intense vasoconstriction.</li>" +
        "<li><strong>Congenital lesions</strong>: uncommon.</li>" +
        "<li><strong>Emboli</strong>: septic vegetations from infective endocarditis.</li></ul>")
    ], check: [
      Q("A 28-year-old has chest pain and ST changes after using cocaine, with clean coronaries. Mechanism?", "Coronary vasospasm from a sympathomimetic", ["Plaque rupture", "Fixed stenosis", "Congenital coronary anomaly"], "Sympathomimetic drugs cause intense vasoconstriction, cutting supply without any plaque."),
      Q("A patient with infective endocarditis has an MI. What is the likely cause?", "A septic embolus from a vegetation", ["Vasospasm", "Positive remodeling", "Plaque erosion"], "Vegetations can break off and lodge in a coronary artery.")
    ], bank: [
      Q("Vasospasm of the coronary arteries causes which angina?", "Prinzmetal's angina", ["Stable angina", "Unstable angina", "Ludwig's angina"], "Prinzmetal's (variant) angina is ischemia from spasm, not fixed plaque.")
    ] },

    { id: "who-not", title: "Stress test: who should and shouldn't", cards: [
      C("Appropriate and inappropriate patients",
        table(["Appropriate", "Inappropriate"], [
          ["Angina symptoms with intermediate or high pretest probability", "Active chest pain or ACS symptoms (UA, NSTEMI)"],
          ["Recent UA/NSTEMI treated conservatively without a cath (risk-stratify)", "Prior revascularization, no new symptoms: < 5 years after CABG or < 2 years after PCI"],
          ["Known CAD with new or worse symptoms", "No symptoms (with rare exceptions)"],
          ["New HFrEF or cardiomyopathy if no cath is planned", "Decompensated HF, uncontrolled arrhythmia, critical AS"],
          ["Pre-op evaluation for elective noncardiac surgery when indicated", "PE, endocarditis, thyrotoxicosis, acute systemic illness"]]) +
        "<p>The ESC 2024 RF-CL model uses age, sex, symptoms and the number of risk factors (smoking, dyslipidemia, HTN, diabetes, family history) to give a pretest % of obstructive CAD.</p>")
    ], check: [
      Q("A patient had a stent 1 year ago and has no new symptoms. Stress test?", "No: inappropriate under 2 years after PCI without new symptoms", ["Yes, yearly testing is routine after PCI", "Yes, but only with dobutamine", "Only if LDL is high"], "Without new symptoms, testing is not indicated for 2 years after PCI or 5 after CABG."),
      Q("Which condition makes a stress test inappropriate?", "Critical aortic stenosis", ["Stable exertional angina", "New HFrEF with no cath planned", "Known CAD with worsening symptoms"], "Stressing a heart behind a critical valve can cause collapse."),
      Q("A patient's NSTEMI was treated medically without a cath. Why order a stress test later?", "To risk-stratify them", ["To diagnose the NSTEMI", "To screen family members", "Stress tests are never done after ACS"], "After conservative management, the stress test shows how much ischemia remains.")
    ], bank: [
      Q("Which is NOT part of the ESC RF-CL pretest likelihood model?", "LDL level", ["Age and sex", "Symptom characteristics", "Number of risk factors"], "The model counts dyslipidemia as a risk factor but doesn't use the LDL number itself.")
    ] },

    { id: "imaging", title: "CCTA limits, calcium score and cath details", cards: [
      C("When CT isn't the answer, and cath details",
        "<p><strong>Prefer stress testing over CCTA</strong> with known moderate-severe coronary calcium, <strong>age > 65</strong> (likely calcified) or <strong>CKD</strong> (contrast kidney injury). CCTA also suffers with irregular rhythms, uses radiation and finds incidentalomas.</p>" +
        "<p><strong>CAC score</strong> (Agatston): noncontrast CT of calcified plaque. Higher = more risk. <strong>0 does not exclude</strong> noncalcified plaque. Used to decide on lipid-lowering when unsure.</p>" +
        "<p><strong>Cath</strong>: radial or femoral sheath, catheter to the coronary ostia, contrast + fluoroscopy, stenosis reported as % and location. A <strong>left ventriculogram</strong> (catheter across the aortic valve into the LV) estimates EF. About an hour, then hold pressure or use a closure device (femoral).</p>" +
        hy("Cath risks: access-site bleeding or hematoma, contrast kidney injury or allergy, radiation, and rarely arrhythmia, MI or stroke."))
    ], check: [
      Q("A 72-year-old with stable chest pain and CKD stage 4 needs testing. CCTA or stress test?", "Stress test", ["CCTA", "Calcium score only", "No testing"], "Age over 65 and CKD both favor stress testing over contrast CT."),
      Q("A coronary calcium score of 0 means what?", "No calcified plaque seen, but noncalcified plaque isn't ruled out", ["No CAD at all", "Very high risk", "The test failed"], "The score only sees calcium, so soft plaque can still be present."),
      Q("During a left heart cath, how is the EF estimated?", "Left ventriculogram: dye injected into the LV", ["Calcium score", "Right heart cath", "Duke treadmill score"], "The catheter crosses the aortic valve and dye shows how much the LV ejects.")
    ], bank: [
      Q("What is the calcium score mainly used for?", "Deciding on lipid-lowering in primary prevention when unsure", ["Diagnosing acute MI", "Planning a stent", "Measuring EF"], "It refines risk when the statin decision is uncertain.")
    ] }
  ] };
})();
