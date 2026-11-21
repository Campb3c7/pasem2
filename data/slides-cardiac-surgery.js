/* Cardiac Surgery (Gardner): Intro to Cardiac Surgery, slide by slide.
   Slide text: data/slide-text-cardiac-surgery.js (generated). Pictures: images/surg-slides/.
   Slides 25 and 28 were videos (emptied in the repo copy). The three ICU calls (55-57) use the speaker-note answers.
   Anything not on the slides is marked "(standard teaching)". Question ids "cardiac-surgery|s<slide>|<i>", "cardiac-surgery|<lo>|r|<i>": only append. */
(function () {
  "use strict";
  var S = SlideStudy.S, Q = SlideStudy.Q;
  var los = [];

  /* ---------------------------------------------------------------- Intro */
  los.push({
    id: "intro", label: "Intro", title: "How heart surgery began, and what it includes",
    objective: "Background for the lecture: the history of cardiac surgery up to the bypass machine, and the list of cardiac operations.",
    slides: [
      S(1, "Title: Intro to Cardiac Surgery (Gardner)", {
        why: "<p>This lecture follows a patient with coronary disease from \"should we operate?\" to the ICU. The path: the three ways to open a coronary, how risk scores (SYNTAX) pick PCI or CABG, who needs CABG now, how the bypass machine and cardioplegia let the surgeon work on a still heart, which conduits last longest, who does badly afterward, and how to read the ICU numbers after surgery.</p>"
      }),
      S(2, "Learning outcomes", {
        why: "<p>The nine outcomes are the nine LO blocks here. The exam-friendly facts hide in them: the <b>three invasive interventions</b> (tPA, PCI, CABG), what SYNTAX scores, who needs elective vs emergent CABG, the <b>potassium</b> in cardioplegia, the <b>LITA</b> as the best conduit, the predictors of a bad outcome, and the ICU monitors.</p>",
        q: [
          Q("Which electrolyte does the lecture expect you to name as the main one in cardioplegia?", "Potassium", ["Sodium", "Calcium", "Magnesium"], "Cardioplegia is a cold, potassium-rich solution that stops the heart.")
        ]
      }),
      S(3, "In the beginning: ancient Egypt", {
        pic: "<p>An ancient Egyptian illustration.</p>",
        why: "<p>The Egyptians thought the heart, not the brain, held the mind. The history slides show how long the heart was treated as untouchable, which makes the bypass machine of 1955 look like the turning point it was.</p>",
        q: [
          Q("Where did the ancient Egyptians believe the intellect lived?", "In the heart", ["In the brain", "In the liver", "In the lungs"], "The slide says Egyptians saw the heart as the seat of the intellect.")
        ]
      }),
      S(4, "In the beginning: Hippocrates", {
        pic: "<p>A portrait of Hippocrates.</p>",
        why: "<p>\"A wound in the heart is mortal.\" For more than 2,000 years after Hippocrates, a heart wound meant death.</p>",
        q: [
          Q("Who said \"a wound in the heart is mortal\"?", "Hippocrates", ["Billroth", "Cutler", "Lillehei"], "The quote is from Hippocrates, born 460 BC.")
        ]
      }),
      S(5, "In the beginning: Billroth", {
        pic: "<p>A portrait of Theodor Billroth.</p>",
        why: "<p>Even in the 1880s, one of the greatest surgeons warned that suturing the heart would cost a surgeon his colleagues' respect. Heart surgery was taboo, not just hard.</p>",
        q: [
          Q("In the 1880s, which surgeon warned that no respected surgeon would suture the heart?", "Theodor Billroth", ["Robert Gross", "Elliott Cutler", "Hippocrates"], "Billroth said it in the 1880s.")
        ]
      }),
      S(6, "1909: suturing heart wounds", {
        why: "<p>By 1909, 109 heart-wound repairs had been reported with <b>60% mortality</b>. So suturing the heart was possible, but most patients still died.</p>",
        q: [
          Q("What was the mortality of the 109 heart-wound repairs reported by 1909?", "60%", ["6%", "30%", "95%"], "The slide gives 109 cases with 60% mortality."),
          Q("What did the 1909 report show about heart surgery?", "Heart wounds could be sutured, though most patients died", ["Heart surgery was now safe", "No one had tried it", "Bypass was in common use"], "Repairs were being done, but with 60% mortality.")
        ]
      }),
      S(7, "1923: Cutler and mitral stenosis", {
        why: "<p>Cutler opened a stenotic mitral valve in an 11-year-old by pushing a knife through the heart wall, with the heart still beating and no bypass. The first valve operation was done blind.</p>",
        q: [
          Q("In 1923, what did Cutler operate on?", "Mitral stenosis in an 11-year-old", ["A PDA in a 7-year-old", "An ASD using a parent as the pump", "A coronary bypass"], "Cutler opened a mitral stenosis with a knife through the heart wall."),
          Q("How did Cutler reach the mitral valve in 1923?", "With a knife placed through the heart wall", ["On full cardiopulmonary bypass", "Through a catheter in the groin", "With a stent"], "There was no bypass yet, so the knife went through the beating heart wall.")
        ]
      }),
      S(8, "1938: Gross closes a PDA", {
        pic: "<p>A photo of Robert Gross.</p>",
        why: "<p>Gross closed a patent ductus arteriosus in a 7-year-old. A PDA sits outside the heart, so it could be tied off without stopping the heart.</p>",
        q: [
          Q("What did Robert Gross close successfully in 1938?", "A patent ductus arteriosus in a 7-year-old", ["A VSD using bypass", "A mitral stenosis", "A coronary artery"], "Gross closed a PDA in a 7-year-old in 1938."),
          Q("Why could a PDA be closed in 1938 without a bypass machine?", "It is a vessel outside the heart that can be tied off", ["It is inside the left ventricle", "It needs the heart stopped", "It was done with a stent"], "The ductus lies outside the heart chambers (standard teaching).")
        ]
      }),
      S(9, "1954: Lillehei and cross-circulation", {
        pic: "<p>A photo of Lillehei with a patient.</p>",
        why: "<p>Lillehei repaired congenital ASDs and VSDs by using <b>a parent as the bypass machine</b> (cross-circulation): the parent's heart and lungs supported the child during the repair. In 45 cases there were no donor deaths and 29 of 45 children survived.</p>",
        q: [
          Q("In 1954, what did Lillehei use as the bypass machine to repair ASDs and VSDs?", "One of the patient's parents", ["A mechanical oxygenator", "A balloon pump", "No bypass at all"], "A parent's circulation supported the child during the repair."),
          Q("How did Lillehei's 45 cross-circulation cases turn out?", "No donor deaths and 29 of 45 patients survived", ["All 45 patients died", "Most donors died", "All patients survived"], "The slide reports no donor deaths and 29/45 survivors.")
        ]
      }),
      S(10, "1955: the modern bypass machine", {
        pic: "<p>A photo of an early heart-lung machine.</p>",
        why: "<p>Lillehei and DeWall solved the problem of <b>air bubbles in the oxygenator</b>, and the modern cardiopulmonary bypass machine was born. Bubbles going back into the patient are emboli, so this was the step that made open-heart surgery safe enough to spread.</p>",
        q: [
          Q("What problem did Lillehei and DeWall solve in 1955 to create the modern bypass machine?", "Getting air bubbles out of the oxygenator", ["Keeping the blood warm", "Making the pump pulsatile", "Reversing heparin"], "Removing bubbles from the oxygenator gave the modern CPB machine."),
          Q("Why are air bubbles in a bypass circuit dangerous?", "They become air emboli in the patient", ["They cool the blood", "They make the blood clot less", "They raise potassium"], "Air returned to the circulation embolizes to the brain and organs (standard teaching).")
        ]
      }),
      S(11, "What counts as cardiac surgery", {
        why: "<p>The list: transplant, <b>CABG</b>, valve repair or replacement, cardiac aneurysm, repair of ASD or VSD, closure of PDA, repair of trauma and pacemaker placement. This lecture focuses on CABG.</p>",
        q: [
          Q("Which of these is on the lecture's list of cardiac surgeries?", "Closure of a patent ductus arteriosus", ["Carotid endarterectomy", "Appendectomy", "Thyroidectomy"], "PDA closure is on the slide's list along with CABG, valves, transplant and others."),
          Q("Which operation is the focus of this lecture?", "Coronary artery bypass grafting (CABG)", ["Heart transplant", "Pacemaker placement", "ASD repair"], "The rest of the lecture is about CABG for coronary disease.")
        ]
      })
    ],
    review: [
      Q("Put these in order: Gross closes a PDA, Cutler opens a mitral stenosis, the modern bypass machine.", "Cutler 1923, Gross 1938, bypass machine 1955", ["Gross 1938, Cutler 1923, bypass 1955", "Bypass 1955, Cutler 1923, Gross 1938", "Cutler 1955, Gross 1923, bypass 1938"], "Cutler came in 1923, Gross in 1938 and the modern machine in 1955."),
      Q("Which surgeon is tied to both cross-circulation and the modern bypass machine?", "Lillehei", ["Billroth", "Gross", "Cutler"], "Lillehei used parents as the pump in 1954 and built the machine with DeWall in 1955."),
      Q("Which phrase best sums up how surgeons saw the heart before the 1900s?", "Untouchable: a heart wound was fatal and suturing it was taboo", ["Routine to operate on", "Easy to stop and restart", "Best reached by catheter"], "Hippocrates and Billroth both treated heart surgery as hopeless or forbidden.")
    ]
  });

  /* ---------------------------------------------------------------- LO 1 */
  los.push({
    id: "lo1", label: "LO 1", title: "The three invasive interventions, and when to go invasive",
    objective: "Identify the three invasive interventions for CAD.",
    slides: [
      S(12, "Interventions", {
        why: "<p>Three ways to reopen or get around a blocked coronary: <b>fibrinolysis with tPA</b> (dissolve the clot), <b>PCI with a drug-eluting stent</b> (open it from inside), and <b>CABG</b> (go around it with a new vessel).</p>",
        q: [
          Q("What are the three invasive interventions for CAD?", "Fibrinolysis with tPA, PCI with a drug-eluting stent, and CABG", ["Aspirin, statin and beta blocker", "Stress test, echo and cath", "Valve replacement, transplant and pacemaker"], "The slide lists tPA, PCI with DES and CABG."),
          Q("Which of the three interventions goes around the blockage instead of opening it?", "CABG", ["PCI with a stent", "tPA", "Balloon angioplasty"], "A bypass graft carries blood past the blocked segment (standard teaching)."),
          Q("What kind of stent is named with PCI on the slide?", "Drug-eluting stent", ["Bare-metal stent", "Covered aortic stent", "Biliary stent"], "The slide says PCI with drug-eluting stent.")
        ]
      }),
      S(13, "To be or not to be invasive", {
        why: "<p>Go invasive in two situations: <b>medical management fails</b>, or the patient has an <b>acute event</b>. Either way the choice rests on the <b>risk/benefit ratio</b>.</p>",
        q: [
          Q("When does the lecture say to consider an invasive approach for CAD?", "When medical management fails or there is an acute event", ["Only after age 80", "Whenever LDL is high", "Only if the patient asks"], "Failed medical therapy and acute events are the two triggers."),
          Q("What always decides whether to go invasive?", "The risk/benefit ratio", ["The patient's insurance", "The cholesterol level alone", "The surgeon's schedule"], "The slide says it always depends on the risk/benefit ratio.")
        ]
      }),
      S(14, "How do you know medical management has failed?", {
        why: "<p>You would need to see the future. Instead you <b>balance the risk</b> of staying on medicines against the risk of surgery, using population statistics: <b>risk stratification</b>.</p>",
        q: [
          Q("How does the lecture say you judge that medical management has failed?", "Balance the risk of continuing medicines against the risk of surgery using risk stratification", ["Wait for a second MI", "Check the LDL once", "Ask the patient to pick"], "It is about population statistics and risk stratification."),
          Q("What tool turns population statistics into a decision for one patient?", "Risk stratification", ["A lipid panel", "An EKG", "A chest X-ray"], "Risk stratification estimates the patient's risk with and without surgery.")
        ]
      })
    ],
    review: [
      Q("A patient's chest pain persists on full medical therapy. Which three invasive options exist for his CAD?", "tPA, PCI with stent, CABG", ["Statin, aspirin, nitrate", "Echo, stress test, CCTA", "Transplant, LVAD, pacemaker"], "Those are the three invasive interventions the lecture names."),
      Q("Which two situations push toward an invasive strategy?", "Failed medical management or an acute event", ["High HDL or low LDL", "Normal stress test or normal echo", "Age under 40 or female sex"], "The slide names failed medical management and acute events."),
      Q("Which of the three interventions dissolves the clot rather than treating the plaque mechanically?", "Fibrinolysis with tPA", ["PCI", "CABG", "Atherectomy"], "tPA breaks down fibrin in the clot (standard teaching).")
    ]
  });

  /* ---------------------------------------------------------------- LO 2 */
  los.push({
    id: "lo2", label: "LO 2", title: "Risk scores, SYNTAX I and II, and PCI vs CABG",
    objective: "Identify the criterion on which the SYNTAX Scoring systems are based.",
    slides: [
      S(15, "Risk stratification tools", {
        why: "<p>Many calculators, each for a job. <b>STS</b>: short-term surgical risk. <b>ASCERT</b>: long-term survival after isolated CABG in patients over 65. <b>EuroSCORE</b>: in-hospital mortality (1995). <b>Ambler</b>: valve surgery with or without CABG (Great Britain/Ireland). <b>APACHE I-IV</b>: ICU illness severity. <b>CHA2DS2-VASc</b> and <b>CHADS2</b>: stroke risk in AF.</p>",
        q: [
          Q("Which risk tool estimates long-term survival after isolated CABG in patients over 65?", "ASCERT", ["STS", "EuroSCORE", "CHADS2"], "ASCERT is the long-term survival calculator for over-65 isolated CABG."),
          Q("Which risk tool is described as short term?", "STS", ["ASCERT", "Ambler", "CHA2DS2-VASc"], "The slide lists STS as short-term risk."),
          Q("The Ambler risk model is built for which surgery?", "Valve surgery with or without CABG", ["Isolated PCI", "Heart transplant", "Pacemaker placement"], "Ambler covers valve surgery with or without CABG in Great Britain and Ireland.")
        ]
      }),
      S(16, "SYNTAX I", {
        why: "<p>SYNTAX I scores the <b>coronary anatomy</b> seen on the angiogram: lesion <b>size and length</b>, <b>complexity and tortuosity</b>, <b>location</b>, <b>total occlusion</b> or not, <b>calcification or thrombus</b>, and <b>diffuse vs localized</b> disease. Harder anatomy means a higher score and a harder PCI.</p>",
        q: [
          Q("What is SYNTAX I based on?", "The anatomy of the coronary lesions", ["The patient's age and kidney function", "The LDL and HDL", "The ejection fraction alone"], "SYNTAX I scores lesion size, complexity, location, occlusion, calcification and spread."),
          Q("Which feature raises a SYNTAX I score?", "Heavy calcification of the lesion", ["A short, simple lesion", "A normal artery", "A young patient"], "Calcification or thrombus is one of the SYNTAX I criteria."),
          Q("Is a total occlusion part of SYNTAX I scoring?", "Yes, total occlusion or not is a criterion", ["No, only symptoms are scored", "Only in women", "Only for vein grafts"], "Total occlusion is listed among the SYNTAX I criteria.")
        ]
      }),
      S(17, "SYNTAX II", {
        why: "<p>SYNTAX II adds the <b>patient</b> to the anatomy: older age, worse renal function, lower LVEF, left main disease, diabetes, current smoking, COPD and PAD all push the score up. So SYNTAX I = the arteries, SYNTAX II = the arteries plus the person.</p>",
        q: [
          Q("What does SYNTAX II add that SYNTAX I lacks?", "Clinical factors such as age, renal function, LVEF, COPD and PAD", ["Only more anatomy", "The patient's LDL", "The surgeon's experience"], "SYNTAX II brings patient factors into the score."),
          Q("How does a lower LVEF change the SYNTAX II score?", "It raises the score", ["It lowers the score", "It has no effect", "It cancels the score"], "The slide shows lower LVEF increases the score."),
          Q("How does worse renal function change the SYNTAX II score?", "It raises the score", ["It lowers the score", "Only matters for SYNTAX I", "It has no effect"], "Reduced renal function increases the SYNTAX II score.")
        ]
      }),
      S(18, "SYNTAX score vs mortality", {
        pic: "<p>A graph of 4-year mortality (%) against SYNTAX total points: about 0.6% at 0 points, 1.3% at 10, 3% at 20, 6.8% at 30, 15.1% at 40, 31.5% at 50 and 58.4% at 60, rising toward 100%.</p>",
        why: "<p>Mortality climbs slowly at low scores, then <b>steeply</b>: about 7% at 30 points, 15% at 40, 31.5% at 50 and 58% at 60. Each extra 10 points past 30 roughly doubles the risk, which is why high scores push toward CABG.</p>",
        q: [
          Q("On the SYNTAX vs mortality curve, what happens to 4-year mortality as the score rises past 30?", "It climbs steeply, roughly doubling every 10 points", ["It falls", "It stays flat", "It rises by about 1% per 10 points"], "Mortality goes from about 7% at 30 to 15% at 40 and 31.5% at 50."),
          Q("About what 4-year mortality does the graph show at 60 points?", "About 58%", ["About 6%", "About 15%", "About 100%"], "The graph marks 58.4% at 60 points.")
        ]
      }),
      S(19, "PCI or CABG?", {
        why: "<p><b>PCI</b>: one- or two-vessel disease <b>not</b> involving the proximal LAD. <b>CABG</b>: three-vessel disease with SYNTAX <b>≥23</b> (PCI is reasonable at lower scores), and left main disease, except when the SYNTAX score is under 22. Simple anatomy goes to the stent; complex anatomy goes to the surgeon.</p>",
        q: [
          Q("Which patient is favored for PCI over CABG?", "One- or two-vessel disease not involving the proximal LAD", ["Three-vessel disease with SYNTAX 30", "Left main disease with SYNTAX 35", "Two-vessel disease with proximal LAD plus diabetes and SYNTAX 40"], "PCI is favored for 1-2 vessel disease sparing the proximal LAD."),
          Q("Three-vessel disease favors CABG over PCI above what SYNTAX score?", "23 or more", ["10 or more", "5 or more", "50 or more"], "CABG is favored with three-vessel disease and SYNTAX ≥23."),
          Q("When is PCI still reasonable for left main disease, per the slide?", "When the SYNTAX score is under 22", ["When the SYNTAX score is over 40", "Never", "Only with diabetes"], "Left main favors CABG except with a SYNTAX score under 22.")
        ]
      })
    ],
    review: [
      Q("Which score is based on lesion size, complexity, location, occlusion, calcification and spread?", "SYNTAX I", ["SYNTAX II", "STS", "CHA2DS2-VASc"], "Those anatomic criteria make up SYNTAX I."),
      Q("A 70-year-old smoker with COPD, PAD and an EF of 30% has the same angiogram as a healthy 50-year-old. Which score will differ between them?", "SYNTAX II", ["SYNTAX I", "Neither", "Only the EuroSCORE"], "SYNTAX II adds age, LVEF, COPD, PAD and smoking to the anatomy."),
      Q("A patient has three-vessel CAD with a SYNTAX score of 31. What is favored?", "CABG", ["PCI", "Medical therapy only", "tPA"], "Three-vessel disease with SYNTAX ≥23 favors CABG."),
      Q("A patient has single-vessel disease of the right coronary artery. What is favored if medicines fail?", "PCI", ["CABG", "Heart transplant", "Valve replacement"], "One- or two-vessel disease without the proximal LAD favors PCI."),
      Q("Which tool would you use for stroke risk in atrial fibrillation, from the slide's list?", "CHA2DS2-VASc", ["SYNTAX I", "ASCERT", "Ambler"], "CHA2DS2-VASc and CHADS2 score stroke risk in AF (standard teaching).")
    ]
  });

  /* ---------------------------------------------------------------- LO 3 */
  los.push({
    id: "lo3", label: "LO 3", title: "Who needs CABG, and who needs it now",
    objective: "Determine which patients need an elective or emergent CABG.",
    slides: [
      S(20, "Coronary anatomy", {
        pic: "<p>A labeled coronary artery diagram: aorta, superior vena cava, right atrium, right coronary artery, posterior descending artery, right marginal artery, right ventricle, left coronary artery, left circumflex, left marginal artery, left anterior descending (interventricular) artery, diagonal branch, left ventricle, left pulmonary artery and veins.</p>",
        why: "<p>The map behind every CABG decision. The <b>left main</b> splits into the <b>LAD</b> (front wall and septum) and <b>circumflex</b> (lateral wall). The <b>RCA</b> feeds the right ventricle and usually the <b>posterior descending artery</b>. Left main and proximal LAD disease put the most muscle at risk, which is why they push toward CABG.</p>",
        q: [
          Q("Which two arteries does the left main coronary split into?", "The LAD and the circumflex", ["The RCA and the PDA", "The LAD and the RCA", "The marginal and the diagonal"], "The left coronary artery divides into the LAD and the left circumflex (standard teaching)."),
          Q("On the diagram, which artery usually gives off the posterior descending artery?", "The right coronary artery", ["The LAD", "The diagonal branch", "The left marginal"], "The diagram shows the PDA arising from the RCA."),
          Q("Why does left main disease put so much muscle at risk?", "It feeds both the LAD and circumflex territories", ["It only feeds the right atrium", "It supplies the lungs", "It is a vein"], "A left main lesion threatens most of the left ventricle (standard teaching).")
        ]
      }),
      S(21, "Indications for CABG", {
        why: "<p>CABG is indicated for: significant stenosis <b>over 70%</b>, <b>complex three-vessel</b> CAD, <b>left main over 50%</b>, <b>two-vessel disease with proximal LAD</b> involvement, and survivors of sudden cardiac death with <b>ischemia-mediated VT</b>.</p>",
        q: [
          Q("How much left main stenosis is an indication for CABG?", "More than 50%", ["More than 10%", "More than 90% only", "Any plaque at all"], "Left main occlusion over 50% is on the list."),
          Q("Two-vessel disease is a CABG indication when it involves which artery?", "The proximal LAD", ["The distal RCA", "A small diagonal", "The left marginal only"], "2-vessel disease with proximal LAD involvement is listed."),
          Q("Which survivor of sudden cardiac death is a CABG candidate?", "One whose VT was caused by ischemia", ["One with long QT syndrome", "One with WPW", "One with a heart block"], "Survivors with ischemia-mediated VT are on the indications list.")
        ]
      }),
      S(22, "Indications for emergent or urgent CABG", {
        why: "<p>Go to the OR <b>now</b> when: acute ischemia persists after <b>failed PCI or fibrinolysis</b>; there is <b>mechanical failure</b> (ventricular or septal rupture, acute valve injury); or ischemia keeps <b>recurring</b>. Mechanical problems can't be fixed with a stent.</p>",
        q: [
          Q("A STEMI patient's PCI fails and he still has ongoing ischemia. What is indicated?", "Emergent or urgent CABG", ["Elective CABG in 6 months", "A stress test", "Discharge on aspirin"], "Acute ischemia with failed PCI or fibrinolysis is an emergent CABG indication."),
          Q("Three days after an MI, a patient has a ventricular septal rupture. Why does he need surgery rather than a stent?", "It is a mechanical failure, which is an emergent CABG indication", ["A stent closes septal defects", "It heals by itself", "It is treated with tPA"], "Ventricular or septal rupture is listed under mechanical failure."),
          Q("Which of these is an emergent CABG indication?", "Acute valvular injury after MI", ["Stable angina well controlled on meds", "High LDL", "A positive calcium score"], "Acute valvular injury is a mechanical failure on the emergent list.")
        ]
      })
    ],
    review: [
      Q("Which patient has an elective CABG indication?", "Complex three-vessel CAD", ["Ventricular free-wall rupture", "STEMI after failed PCI", "Acute papillary muscle rupture"], "Complex 3-vessel CAD is elective; the others are emergent."),
      Q("Which patient needs EMERGENT CABG?", "Acute ischemia after failed fibrinolysis", ["Left main stenosis of 60% found on a routine cath", "Two-vessel disease with proximal LAD", "Stenosis of 75% in one vessel"], "Failed PCI or fibrinolysis with ongoing ischemia is emergent."),
      Q("What stenosis percent is called significant in the CABG indications?", "Over 70%", ["Over 20%", "Over 40%", "Over 99% only"], "Significant stenosis is defined as over 70% on the slide."),
      Q("Which finding is an indication for CABG?", "Left main stenosis over 50%", ["Diagonal branch stenosis of 30%", "Single 40% RCA lesion", "Normal coronaries"], "Left main over 50% is on the CABG list.")
    ]
  });

  /* ---------------------------------------------------------------- LO 4-5 */
  los.push({
    id: "lo4", label: "LO 4-5", title: "The bypass machine, hypothermia and potassium cardioplegia",
    objective: "Describe the basic components and functions of the CPB. Name the primary electrolyte in cardioplegia.",
    slides: [
      S(23, "The cardiac team", {
        why: "<p>CABG takes a team: surgeon, anesthesia, cardiology, PA, the <b>perfusionist</b> (who runs the bypass machine), circulators, surgical techs, echo techs, ICU and floor nurses, respiratory therapy and office staff.</p>",
        q: [
          Q("Which team member runs the cardiopulmonary bypass machine?", "The perfusionist", ["The circulator", "The echo tech", "The respiratory therapist"], "The perfusionist operates the CPB machine (standard teaching)."),
          Q("Is the PA part of the cardiac surgery team on the slide?", "Yes", ["No, only physicians", "Only in the office", "Only for transplants"], "PA is listed among the team members.")
        ]
      }),
      S(24, "The CPB machine", {
        pic: "<p>A labeled photo of a bypass machine: display (times, pressures, alarms), reservoir, cardioplegia pump, vent, sucker, oxygenator and arterial pump.</p>",
        why: "<p>Follow the blood: it drains into the <b>reservoir</b>, passes through the <b>oxygenator</b> (lungs), and the <b>arterial pump</b> (heart) sends it back. The <b>cardioplegia pump</b> delivers the stopping solution, the <b>vent</b> keeps the heart empty, and the <b>sucker</b> returns blood from the field. The display shows times, pressures and alarms.</p>",
        q: [
          Q("Which part of the CPB machine does the job of the lungs?", "The oxygenator", ["The reservoir", "The vent", "The arterial pump"], "The oxygenator adds oxygen to the blood."),
          Q("Which part of the CPB machine does the job of the heart?", "The arterial pump", ["The oxygenator", "The sucker", "The reservoir"], "The arterial pump returns blood to the patient's circulation."),
          Q("Which pump on the machine delivers the solution that stops the heart?", "The cardioplegia pump", ["The sucker", "The vent", "The arterial pump"], "The labeled cardioplegia pump delivers cardioplegia.")
        ]
      }),
      S(25, "Cardiopulmonary bypass circuit (video)", {
        pic: "<p>Title card for a video of the bypass circuit (the video is not included).</p>",
        why: "<p>The video traced the circuit: blood out of the right atrium, through the machine, back into the aorta. Slide 26 lists the same path in words.</p>",
        q: [
          Q("In the bypass circuit, where is blood usually taken out of the body?", "The right atrium", ["The left ventricle", "The femoral artery", "The pulmonary artery"], "Blood is usually drained from the right atrium.")
        ]
      }),
      S(26, "Cardiopulmonary bypass (CPB)", {
        why: "<p>CPB is extracorporeal circulation. Blood is <b>anticoagulated</b>, drained (usually from the <b>right atrium</b>), oxygenated, filtered and temperature-controlled, then returned (usually to the <b>aorta</b>), but the flow is <b>non-pulsatile</b>. The heart is stopped with <b>cold, potassium-rich cardioplegia</b>. Target flow 2.2-2.4 L/min at 65-100 mm Hg. At the end the cardioplegia is washed out, the heart fills, restarts, and the patient comes off bypass.</p>",
        q: [
          Q("Where is blood usually returned to the patient on CPB?", "The aorta", ["The right atrium", "The vena cava", "The pulmonary vein"], "Returned blood usually enters the aorta."),
          Q("What is different about the flow from a bypass machine compared with a heartbeat?", "It is non-pulsatile", ["It is faster than normal", "It is pulsatile", "It skips the brain"], "The slide stresses that CPB flow is non-pulsatile."),
          Q("What is the target flow rate and pressure on CPB?", "2.2-2.4 L/min at 65-100 mm Hg", ["5-6 L/min at 120-140 mm Hg", "0.5 L/min at 30 mm Hg", "10 L/min at 200 mm Hg"], "The slide gives 2.2-2.4 L/min with pressure 65-100 mm Hg."),
          Q("Why is the blood anticoagulated before going on bypass?", "So it doesn't clot in the machine", ["To cool it", "To stop the heart", "To raise potassium"], "Blood contacting the circuit would clot without anticoagulation (standard teaching).")
        ]
      }),
      S(27, "Why make the patient hypothermic?", {
        why: "<p>Cooling cuts oxygen use by <b>50% for every 10°C</b> drop. At 37°C the body needs about 2.4 L/min/m2 of flow; at 18°C only about 1 L/min/m2. The heart is stopped with <b>cardioplegia</b>: a <b>potassium-rich</b> solution usually mixed with the patient's own blood. The notes add that <b>retrograde</b> cardioplegia spreads more evenly in diffuse CAD and doesn't need a competent aortic valve.</p>",
        q: [
          Q("How much does oxygen consumption fall for every 10°C drop in temperature?", "About 50%", ["About 5%", "About 10%", "About 90%"], "Hypothermia halves oxygen consumption per 10°C."),
          Q("What is the main electrolyte in cardioplegia?", "Potassium", ["Sodium", "Calcium", "Chloride"], "Cardioplegia is a potassium-rich solution."),
          Q("Why is the patient cooled on bypass?", "To lower oxygen demand so less flow is needed", ["To speed up the heart", "To thin the blood", "To prevent infection"], "At 18°C only about 1 L/min/m2 of flow is needed."),
          Q("Per the notes, what is an advantage of retrograde cardioplegia?", "More even spread in diffuse CAD without needing a competent aortic valve", ["It needs no potassium", "It warms the heart", "It avoids anticoagulation"], "The speaker notes give these two advantages.")
        ]
      }),
      S(28, "Bypass video", {
        pic: "<p>An embedded video (not included in the repo copy).</p>",
        why: "<p>This slide was a video of a bypass operation. Everything you need from it is on slides 24-27.</p>"
      })
    ],
    review: [
      Q("How does a potassium-rich solution stop the heart?", "High potassium depolarizes the cells so they can't fire again", ["It blocks the coronaries", "It cools the blood", "It thins the blood"], "Depolarized myocytes stay in diastolic arrest (standard teaching)."),
      Q("Put the bypass path in order.", "Right atrium → reservoir → oxygenator → arterial pump → aorta", ["Aorta → oxygenator → right atrium", "Left ventricle → pump → pulmonary artery", "Vena cava → lungs → aorta"], "Blood drains from the right atrium, is oxygenated and pumped back into the aorta."),
      Q("At 18°C, about how much bypass flow is needed?", "About 1 L/min/m2", ["About 2.4 L/min/m2", "About 5 L/min/m2", "No flow at all"], "Cooling to 18°C drops the needed flow to about 1 L/min/m2."),
      Q("Which feature of CPB later contributes to kidney injury?", "Loss of pulsatile flow", ["Too much pulsatile flow", "High potassium in the urine", "Warm blood"], "Non-pulsatile bypass flow is listed as a cause of renal dysfunction."),
      Q("What happens at the end of the bypass run?", "Cardioplegia is removed, the heart fills with blood, restarts and the patient comes off bypass", ["The heart stays stopped for a day", "More cardioplegia is given", "The patient is cooled further"], "Slide 26 describes washing out cardioplegia and restarting the heart.")
    ]
  });

  /* ---------------------------------------------------------------- LO 6 */
  los.push({
    id: "lo6", label: "LO 6", title: "Choosing the conduit: patency from best to worst",
    objective: "Associate the blood vessels used as conduits in CABG in order of patency rates.",
    slides: [
      S(29, "Bypass graft configurations", {
        pic: "<p>Four drawings (A-D) of a heart with bypass grafts: grafts from the aorta to the coronaries, and an internal mammary artery left attached to its origin and sewn to the LAD.</p>",
        why: "<p>Two ways to hook up a graft. A <b>free graft</b> (saphenous vein, radial artery) is sewn from the aorta to the coronary past the blockage. An <b>in-situ</b> internal mammary artery stays attached to its origin and is swung down onto the LAD (standard teaching).</p>",
        q: [
          Q("How is a saphenous vein graft usually connected?", "From the aorta to the coronary beyond the blockage", ["From the vena cava to the right atrium", "From the LAD to the RCA only", "It is left attached at the leg"], "A free vein graft runs from the aorta to the coronary past the lesion (standard teaching)."),
          Q("Which conduit is usually left attached at its origin and sewn to the LAD?", "The left internal mammary (thoracic) artery", ["The saphenous vein", "The radial artery", "The cephalic vein"], "The LIMA stays attached to the subclavian and is brought down to the LAD (standard teaching).")
        ]
      }),
      S(30, "Choosing conduit", {
        pic: "<p>A body drawing circling the three harvest sites: mammary artery (chest), radial artery (forearm) and saphenous vein (leg).</p>",
        why: "<p>Conduits are <b>arterial</b> (internal mammary, radial) or <b>venous</b> (saphenous). The picture shows where each is taken from: chest wall, forearm and leg.</p>",
        q: [
          Q("Where is the radial artery harvested from?", "The forearm", ["The leg", "The chest wall", "The neck"], "The picture circles the radial artery in the forearm."),
          Q("Which conduit comes from the leg?", "The saphenous vein", ["The radial artery", "The internal mammary artery", "The gastroepiploic artery"], "The saphenous vein is circled on the leg.")
        ]
      }),
      S(31, "Graft choices: saphenous vein", {
        why: "<p>The saphenous vein is the <b>most common</b> graft but the <b>least durable</b>. Patency under 90% at 1 year is common, 10-25% fail in 12-18 months, 10% occlude early (within 30 days), then late occlusion runs about <b>2%/year in years 1-6</b> and <b>4-5%/year from year 7</b>. How well it does depends on the runoff and size of the native artery.</p>",
        q: [
          Q("What is the most commonly used CABG graft?", "The saphenous vein", ["The left internal thoracic artery", "The radial artery", "The right internal thoracic artery"], "The slide calls the saphenous vein the most common graft."),
          Q("What fraction of saphenous vein grafts occlude early, within 30 days?", "About 10%", ["About 1%", "About 50%", "None"], "Early occlusion within 30 days happens in 10% of SVGs."),
          Q("How fast do saphenous vein grafts occlude from year 7 on?", "About 4-5% per year", ["About 0.5% per year", "About 2% per year", "About 20% per year"], "Late occlusion is 2%/year for years 1-6 and 4-5%/year from year 7."),
          Q("What does saphenous graft success depend on?", "The runoff and size of the native artery", ["The patient's height", "The type of anesthesia", "The patient's blood type"], "The slide says patency depends on runoff and native artery size.")
        ]
      }),
      S(32, "Leg incision after vein harvest", {
        pic: "<p>A photo of a long healed incision down the inside of the leg where the saphenous vein was taken.</p>",
        why: "<p>Taking the saphenous vein leaves a long leg incision. That wound is another place for infection and poor healing after CABG (standard teaching).</p>",
        q: [
          Q("What does the photo of a long medial leg incision show?", "The site where the saphenous vein was harvested", ["A radial artery harvest", "A femoral cath site", "A DVT"], "The saphenous vein is taken from the inner leg (standard teaching).")
        ]
      }),
      S(33, "Leg wound problems", {
        pic: "<p>Three photos of open, poorly healing leg wounds along the vein-harvest incision.</p>",
        why: "<p>The leg wound can break down, especially in patients with diabetes, PAD or obesity (standard teaching). It is a reason surgeons like arterial grafts and smaller harvest incisions.</p>",
        q: [
          Q("What complication do the leg photos show?", "Breakdown of the vein-harvest wound", ["Varicose veins", "Cellulitis from an IV", "Compartment syndrome"], "The photos show open, poorly healing harvest incisions."),
          Q("Which patient is most at risk of a vein-harvest wound breaking down?", "A diabetic with PAD", ["A healthy 40-year-old", "A patient with normal circulation", "A patient on no medications"], "Poor circulation and diabetes impair wound healing (standard teaching).")
        ]
      }),
      S(34, "Arterial grafts: at least one", {
        why: "<p>Every CABG patient should get <b>at least one arterial graft</b>, because arteries stay open far longer than veins.</p>",
        q: [
          Q("How many arterial grafts should each CABG patient receive, per the lecture?", "At least one", ["None, veins are better", "Exactly four", "Only if over 80"], "The slide says try to place at least one arterial graft in each patient."),
          Q("Why do surgeons try to place at least one arterial graft?", "Arterial grafts stay open much longer than vein grafts", ["Arteries are easier to harvest from the leg", "Vein grafts never work", "Arterial grafts need no anastomosis"], "LITA patency is about 95% at 5 years versus high SVG failure.")
        ]
      }),
      S(35, "Arterial grafts: internal mammary", {
        why: "<p>IMA = ITA (internal mammary = internal thoracic). <b>LITA: 95% patency at 5 years, the best</b>. RITA: under 90% at 10 years. For two arterial grafts, <b>left + right ITA</b> beats LITA + radial. So patency order: <b>LITA &gt; RITA &gt; radial &gt; saphenous vein</b>.</p>",
        q: [
          Q("Which conduit has the best patency?", "Left internal thoracic artery", ["Saphenous vein", "Radial artery", "Right internal thoracic artery"], "LITA has 95% patency at 5 years, the best."),
          Q("What is LITA patency at 5 years?", "About 95%", ["About 50%", "About 75%", "About 25%"], "The slide gives 95% at 5 years."),
          Q("For two arterial grafts, which pair is better?", "Left and right ITA", ["LITA and radial artery", "Two saphenous veins", "Radial and saphenous"], "L and R ITA beat LITA plus radial."),
          Q("What is another name for the internal mammary artery?", "Internal thoracic artery", ["Internal carotid artery", "Subclavian vein", "Radial artery"], "IMA and ITA are the same vessel.")
        ]
      })
    ],
    review: [
      Q("Rank these conduits from best to worst patency.", "LITA, RITA, radial artery, saphenous vein", ["Saphenous vein, radial, RITA, LITA", "Radial, LITA, saphenous, RITA", "RITA, saphenous, LITA, radial"], "LITA is best and the saphenous vein is worst; L+R ITA beats LITA+radial."),
      Q("A surgeon plans CABG with only saphenous vein grafts. What does the lecture advise?", "Add at least one arterial graft", ["Use only veins", "Avoid the LITA", "Use the radial artery for every graft"], "At least one arterial graft should be placed in each patient."),
      Q("Which conduit is the most commonly used but has the highest failure rate?", "Saphenous vein", ["LITA", "RITA", "Radial artery"], "SVGs are most common with 10-25% failure in 12-18 months."),
      Q("Using both internal thoracic arteries can cause which wound problem?", "Devascularization of the sternum", ["Leg wound breakdown", "Radial nerve palsy", "Carotid dissection"], "Both ITAs supply the sternum, so taking both can devascularize it.")
    ]
  });

  /* ---------------------------------------------------------------- LO 7 */
  los.push({
    id: "lo7", label: "LO 7", title: "Outcomes after CABG and who does badly",
    objective: "Identify the biggest risks for a poor outcome after CABG.",
    slides: [
      S(36, "Post-op", {
        pic: "<p>A photo of a patient just after CABG: a midline sternotomy incision with mediastinal chest tubes and monitoring lines.</p>",
        why: "<p>This is what the ICU patient looks like: a <b>sternotomy</b> incision, <b>chest tubes</b> draining the mediastinum, and lines for monitoring. The chest tubes matter later: their output tells you if the patient is bleeding.</p>",
        q: [
          Q("What are the tubes coming out below the sternotomy in the post-op photo?", "Mediastinal chest tubes", ["Nasogastric tubes", "Urinary catheters", "Central venous lines"], "Chest tubes drain the mediastinum after surgery."),
          Q("Why do the chest tubes matter in the ICU?", "Their output shows whether the patient is bleeding", ["They give medicines", "They feed the patient", "They measure cardiac output"], "Chest and mediastinal tube output answers \"are they bleeding?\".")
        ]
      }),
      S(37, "Outcomes: the negative endpoints", {
        why: "<p>CABG outcomes are judged by three bad endpoints: <b>need for repeat revascularization</b>, <b>post-op MI</b> and <b>death</b>.</p>",
        q: [
          Q("Which three negative endpoints are used to judge CABG outcomes?", "Repeat revascularization, post-op MI and death", ["Pain, length of stay and cost", "LDL, HDL and triglycerides", "Stroke, infection and fever"], "The slide lists these three endpoints."),
          Q("Is needing another revascularization counted as a bad CABG outcome?", "Yes", ["No", "Only after 10 years", "Only if done by PCI"], "Need for revascularization is one of the three negative endpoints.")
        ]
      }),
      S(38, "Predictors of MI, revascularization or death", {
        why: "<p>Who does badly: <b>emergency</b> surgery, <b>shock or hemodynamic instability</b>, <b>reoperation</b>, <b>dialysis</b>, <b>insulin-dependent diabetes</b>, <b>smoking</b> and <b>low pre-op hemoglobin</b>. Sicker going in means worse coming out.</p>",
        q: [
          Q("Which pre-op lab value predicts a worse outcome after CABG?", "Low hemoglobin", ["High hemoglobin", "Low LDL", "High HDL"], "Low pre-op hemoglobin is on the list of predictors."),
          Q("Which patient has a predictor of a bad outcome after CABG?", "One on renal dialysis", ["One who exercises daily", "One with a normal EF", "One having an elective first operation"], "Renal dialysis is listed as a predictor."),
          Q("Why is a reoperation riskier than a first CABG?", "Reoperation is a listed predictor of MI, revascularization or death", ["The heart is smaller", "No anesthesia is needed", "It is always shorter"], "Reoperation appears on the slide's list of predictors.")
        ]
      }),
      S(39, "Outcomes: mortality over time", {
        why: "<p>CABG mortality: <b>3.2% at 30 days</b>, 6.4% at 180 days, 8.1% at 1 year, 11.3% at 2 years and <b>23.3% at 3 years</b>. Risk keeps adding up, so long-term prevention matters.</p>",
        q: [
          Q("What is CABG mortality at 30 days, per the slide?", "3.2%", ["0.1%", "11.3%", "23.3%"], "30-day mortality is 3.2%."),
          Q("What is CABG mortality at 3 years, per the slide?", "23.3%", ["3.2%", "8.1%", "50%"], "The slide lists 23.3% at 3 years."),
          Q("What does the mortality trend after CABG suggest?", "Risk keeps adding up, so ongoing prevention matters", ["All deaths happen in the OR", "Mortality falls over time", "CABG cures CAD"], "Mortality climbs from 3.2% at 30 days to 23.3% at 3 years.")
        ]
      }),
      S(40, "Predictors of mortality", {
        why: "<p>Predictors of <b>death</b>: more than moderate <b>lung disease</b>, <b>pulmonary hypertension</b>, <b>perioperative MI</b>, <b>creatinine 1.5-2.5</b>, <b>acute kidney injury</b>, and atherosclerosis elsewhere (carotids, cerebrovascular, aorta).</p>",
        q: [
          Q("Which serum creatinine range is listed as a predictor of mortality after CABG?", "1.5-2.5 mg/dL", ["0.5-0.8 mg/dL", "0.8-1.0 mg/dL", "Any normal value"], "Creatinine 1.5-2.5 mg/dL is on the list."),
          Q("Which lung finding predicts death after CABG?", "Pulmonary hypertension", ["A normal CXR", "Mild seasonal allergies", "A prior chest cold"], "Pulmonary hypertension is a listed predictor of mortality."),
          Q("Why does carotid disease matter for CABG mortality?", "Atherosclerosis elsewhere predicts death", ["It protects the heart", "It lowers stroke risk", "It doesn't matter"], "Carotid, cerebrovascular and aortic disease are listed predictors.")
        ]
      }),
      S(41, "Predictors of mortality (continued)", {
        why: "<p>The classic cardiac risk factors also predict death: <b>age, hyperlipidemia, diabetes, hypertension and smoking</b>.</p>",
        q: [
          Q("Which of these cardiac risk factors is listed as a predictor of mortality after CABG?", "Diabetes", ["Young age", "Low blood pressure", "Being a non-smoker"], "Age, hyperlipidemia, DM, HTN and smoking are listed."),
          Q("Is age itself a predictor of mortality after CABG?", "Yes", ["No", "Only under 40", "Only in women"], "Age is listed among the cardiac risk factors.")
        ]
      }),
      S(42, "Prevention after CABG makes a difference", {
        why: "<p>The bypass is not a cure; the disease keeps going in the native arteries and the grafts. Keep up <b>smoking cessation</b>, control of <b>lipids, diabetes and hypertension</b>, and <b>antiplatelet therapy</b> (aspirin or clopidogrel).</p>",
        q: [
          Q("Which antiplatelet agents does the slide name after CABG?", "Aspirin or clopidogrel", ["Warfarin or heparin", "tPA or tenecteplase", "Ibuprofen or naproxen"], "ASA or clopidogrel is listed for secondary prevention."),
          Q("After CABG, does risk factor control still matter?", "Yes, continuing prevention makes a difference", ["No, the bypass cured the disease", "Only for one month", "Only if the patient has symptoms"], "The slide says continued prevention after surgery makes a difference."),
          Q("Which habit is the first item on the post-CABG prevention list?", "Stopping smoking", ["Starting alcohol", "Bed rest", "High-salt diet"], "Stop smoking leads the list.")
        ]
      })
    ],
    review: [
      Q("A patient going for emergency CABG is in shock and on dialysis. How do his odds compare with an elective patient?", "Worse: emergency, shock and dialysis all predict a bad outcome", ["Better", "The same", "It depends only on LDL"], "Emergency, shock and dialysis are listed predictors."),
      Q("Which finding predicts mortality rather than just a bad outcome?", "Perioperative MI", ["Low pre-op hemoglobin", "Reoperation", "Emergency surgery"], "Perioperative MI is on the predictors of mortality list."),
      Q("What is the 1-year mortality after CABG on the slide?", "8.1%", ["3.2%", "23.3%", "0.5%"], "1-year mortality is 8.1%."),
      Q("Which of these does NOT appear as a predictor of a poor CABG outcome?", "Regular exercise", ["Smoking", "Insulin-dependent diabetes", "Low pre-op hemoglobin"], "Smoking, insulin-dependent DM and low Hgb are predictors; exercise is not."),
      Q("After CABG, a patient asks if he can stop his aspirin since his arteries are \"fixed\". What do you say?", "No, antiplatelet therapy continues as prevention", ["Yes, the bypass cured him", "Switch to warfarin", "Stop all medications"], "Antiplatelet therapy is part of continued prevention after CABG.")
    ]
  });

  /* ---------------------------------------------------------------- LO 8 */
  los.push({
    id: "lo8", label: "LO 8", title: "Complications after CABG",
    objective: "Assess and manage the potential complications following a CABG Surgery.",
    slides: [
      S(43, "Post-op complications: three sources", {
        why: "<p>Sort complications by where they come from: the <b>wound and trauma</b>, the <b>anesthesia</b>, and the <b>operation itself</b> (bypass, arrest, cooling).</p>",
        q: [
          Q("What are the three sources of post-op complications after CABG?", "The wound/trauma, the anesthesia and the operation itself", ["The diet, the drugs and the bed", "The lungs, the liver and the gut", "The family, the staff and the hospital"], "The slide sorts complications into these three groups.")
        ]
      }),
      S(44, "Complications from the wound", {
        why: "<p>The wound causes <b>bleeding or thrombosis</b>, <b>sternotomy</b> problems, and <b>devascularization of the sternum</b> when both ITAs are used, since they supply the sternum. A poorly supplied sternum heals badly and can get infected (standard teaching).</p>",
        q: [
          Q("Why can using both internal thoracic arteries cause a wound complication?", "Both supply the sternum, so taking both can devascularize it", ["They supply the leg", "They supply the kidneys", "They drain the lungs"], "Devascularization of the sternum from using both ITAs is on the slide."),
          Q("Which complication comes from the wound or trauma of surgery?", "Bleeding or thrombosis", ["Stroke from anesthesia", "Hypothermia from bypass", "Inflammatory response from CPB"], "Bleeding/thrombosis and sternotomy issues are wound complications.")
        ]
      }),
      S(45, "Complications from anesthesia", {
        why: "<p>Anesthesia-related: <b>hypo- or hypervolemia</b> (fluid shifts) and <b>neurologic dysfunction, including stroke</b>.</p>",
        q: [
          Q("Which complication does the lecture link to anesthesia?", "Neurologic dysfunction such as stroke", ["Sternal devascularization", "Saphenous wound breakdown", "Graft occlusion at 7 years"], "Stroke is listed under anesthesia-related complications."),
          Q("Which fluid problem is linked to anesthesia after CABG?", "Hypo- or hypervolemia", ["Hyperkalemia only", "Ascites", "Pleural empyema"], "Hypo/hypervolemia is listed under anesthesia.")
        ]
      }),
      S(46, "Complications from the surgery itself", {
        why: "<p>The operation itself: <b>global cardiac arrest</b> (cardioplegia), <b>hypothermia</b>, <b>non-pulsatile</b> artificial perfusion, the <b>inflammatory response</b> to CPB, <b>fat and particles</b> sent back into the circulation, <b>aortic clamping/unclamping and cannulation</b> (which can knock loose plaque), and bleeding or thrombosis.</p>",
        q: [
          Q("Which complication comes from the bypass machine itself?", "An inflammatory response to CPB", ["Leg wound infection", "Sternal devascularization", "Graft kinking at 5 years"], "Inflammatory response due to CPB is on the surgery list."),
          Q("Why can aortic clamping and cannulation cause problems?", "Handling the aorta can send debris into the circulation", ["It raises potassium", "It cools the patient", "It removes the sternum's blood supply"], "Clamping, unclamping and reintroducing particulate matter are listed causes (standard teaching)."),
          Q("Which of these is listed as a surgery-related cause of complications?", "Reintroduction of fat and particulate matter", ["Hyperthermia", "Pulsatile flow", "High oxygen demand"], "Fat and particulate matter reintroduction is on the slide.")
        ]
      }),
      S(47, "Cardiac complications: dysrhythmias", {
        why: "<p>Rhythm problems after CABG: <b>atrial fibrillation</b> (the most common, standard teaching), ventricular arrhythmias and bradyarrhythmias.</p>",
        q: [
          Q("Which arrhythmia is listed first among post-CABG dysrhythmias?", "Atrial fibrillation", ["Wolff-Parkinson-White", "Long QT", "Brugada"], "AF heads the list, followed by ventricular arrhythmias and bradyarrhythmia."),
          Q("Which rhythm problems does the slide list after CABG?", "Atrial fibrillation, ventricular arrhythmias and bradyarrhythmias", ["Only sinus tachycardia", "Only heart block", "None, CABG prevents arrhythmia"], "The slide lists these three groups.")
        ]
      }),
      S(48, "Cardiac complications: weakness and failure", {
        why: "<p>Why the heart may fail to keep up: <b>MI</b> (3.2% of CABG patients), <b>poor inotropy</b>, <b>inadequate preload</b>, <b>vasodilatory shock</b> (low SVR), <b>excessive afterload</b> (high SVR), <b>valve dysfunction</b> and <b>tamponade</b>. Each one shows a different pattern on the ICU monitors.</p>",
        q: [
          Q("What fraction of CABG patients have a post-op MI, per the slide?", "3.2%", ["0.1%", "15%", "30%"], "The slide gives MI in 3.2% of CABG patients."),
          Q("Vasodilatory shock after CABG means what kind of SVR?", "Low SVR", ["High SVR", "Normal SVR", "SVR can't be measured"], "The slide pairs vasodilatory shock with low SVR."),
          Q("Excessive afterload after CABG means what kind of SVR?", "High SVR", ["Low SVR", "Normal SVR", "Zero SVR"], "Excessive afterload is listed as high SVR."),
          Q("Which of these is listed as a cause of post-CABG cardiac failure?", "Tamponade", ["Pneumonia", "Atelectasis", "Diaphragm dysfunction"], "Tamponade is on the myocardial weakness and failure list.")
        ]
      }),
      S(49, "Pulmonary complications", {
        why: "<p>Lungs after CABG: pulmonary edema (cardiogenic or not), pleural effusion, decreased chest wall compliance, <b>atelectasis</b>, pneumonia, <b>phrenic nerve injury</b> causing diaphragm dysfunction, ALI/ARDS and difficulty weaning from the ventilator.</p>",
        q: [
          Q("Which nerve injury after CABG can cause diaphragm dysfunction?", "Phrenic nerve", ["Vagus nerve", "Recurrent laryngeal nerve", "Radial nerve"], "Phrenic nerve injury leading to diaphragmatic dysfunction is on the slide."),
          Q("Which pulmonary complication after CABG does the slide list?", "Atelectasis", ["Asthma", "Sarcoidosis", "Lung cancer"], "Atelectasis is listed with effusion, pneumonia and ARDS."),
          Q("Can pulmonary edema after CABG be noncardiogenic?", "Yes, the slide lists both cardiogenic and noncardiogenic", ["No, it is always cardiogenic", "Only in children", "Only after valve surgery"], "Pulmonary edema is listed as cardiogenic or noncardiogenic.")
        ]
      }),
      S(50, "Renal dysfunction", {
        why: "<p>Kidneys suffer from <b>vasoconstriction, hypothermia, loss of pulsatile flow and atherosclerosis</b>. Protect them: keep the patient <b>normotensive</b> and avoid <b>nephrotoxins</b> (aminoglycosides, ACE inhibitors, contrast).</p>",
        q: [
          Q("Which drugs does the lecture say to avoid after CABG to protect the kidneys?", "Aminoglycosides, ACE inhibitors and contrast", ["Aspirin and statins", "Acetaminophen and insulin", "Beta blockers and nitrates"], "These nephrotoxins are listed to avoid."),
          Q("What BP strategy protects the kidneys after CABG?", "Keep the patient normotensive", ["Let the BP run low", "Keep the BP very high", "BP doesn't matter for the kidneys"], "Keeping normotensive is a listed strategy."),
          Q("Which bypass feature contributes to renal dysfunction?", "Loss of pulsatile flow", ["Pulsatile flow", "Warm blood", "Low potassium"], "Loss of pulsatile flow is a listed cause.")
        ]
      })
    ],
    review: [
      Q("A day after CABG with both ITAs used, the sternal wound is breaking down. What is the likely reason?", "Devascularization of the sternum", ["Phrenic nerve injury", "Saphenous wound infection", "Low SVR"], "Using both ITAs removes much of the sternum's blood supply."),
      Q("A post-CABG patient has an elevated diaphragm and trouble weaning from the ventilator. What injury do you suspect?", "Phrenic nerve injury", ["Recurrent laryngeal nerve injury", "Radial artery injury", "Sternal infection"], "Phrenic nerve injury causes diaphragmatic dysfunction and weaning difficulty."),
      Q("A post-CABG patient's creatinine is rising. Which drug should you hold?", "An ACE inhibitor", ["Aspirin", "Acetaminophen", "A stool softener"], "ACE inhibitors are among the nephrotoxins to avoid."),
      Q("Which complication belongs to the anesthesia group?", "Stroke", ["Bleeding from the sternotomy", "Inflammation from CPB", "Fat embolism from bypass"], "Neurologic dysfunction such as stroke is anesthesia-related on the slide."),
      Q("Which post-CABG cardiac complication fills the pericardium and squeezes the heart?", "Tamponade", ["Atrial fibrillation", "Vasodilatory shock", "Valve dysfunction"], "Tamponade compresses the heart (standard teaching).")
    ]
  });

  /* ---------------------------------------------------------------- LO 9 */
  los.push({
    id: "lo9", label: "LO 9", title: "ICU monitoring and the three 8-hour calls",
    objective: "Utilize the various monitoring tools available in the ICU to diagnose the post-operative complication.",
    slides: [
      S(51, "Post-op monitoring: what each tool answers", {
        why: "<p>Every monitor answers a question. <b>Chest/mediastinal tubes</b>: are they bleeding? <b>Urine output and vitals</b>: are the kidneys perfused, is there hypovolemia? <b>Daily labs</b> (lytes, ABG, Hgb, platelets, BUN, creatinine): kidneys, anemia, acidosis, oxygenation. <b>Glucose q6h</b>: hypo- or hyperglycemia. <b>Echo</b>: how the heart is pumping. <b>ECG</b>: ischemia. <b>CXR</b>: edema, hypervolemia, pneumonia.</p>",
        q: [
          Q("Which monitor answers the question \"are they bleeding?\" after CABG?", "Chest and mediastinal tube output", ["Glucose checks", "ECG", "Pulse oximetry"], "Chest tube output is the bleeding check."),
          Q("How often is blood sugar checked after CABG, per the slide?", "Every 6 hours", ["Once a week", "Every 15 minutes", "Only at discharge"], "The slide says blood sugar q 6."),
          Q("Which test gives visual evidence of cardiac function after CABG?", "Echocardiography", ["CXR", "Urine output", "BUN"], "Echo shows how the heart is pumping."),
          Q("Which test looks for ischemic changes after CABG?", "ECG", ["Glucose", "Chest tube output", "Platelet count"], "The ECG answers \"ischemic changes?\".")
        ]
      }),
      S(52, "Post-op monitoring in the ICU", {
        why: "<p>ICU tools: <b>central filling pressure</b> (CVP, possibly wedge), the <b>Swan-Ganz</b> (pulmonary artery) catheter for <b>cardiac output and SVR</b>, telemetry for rhythm, an <b>arterial line</b> for continuous BP, blood gases (oxygenation, ventilation, acid-base) and PaO2 with pulse oximetry.</p>",
        q: [
          Q("Which ICU device measures cardiac output and SVR?", "Swan-Ganz (pulmonary artery) catheter", ["Arterial line", "Telemetry", "Pulse oximeter"], "The Swan-Ganz gives cardiac output and SVR."),
          Q("Which ICU device gives continuous blood pressure?", "Arterial line", ["Swan-Ganz", "Foley catheter", "Telemetry"], "The arterial line gives continuous BP."),
          Q("What does telemetry watch for after CABG?", "Dysrhythmias", ["Bleeding", "Glucose", "Kidney function"], "Telemetry shows signs of dysrhythmia."),
          Q("What do blood gases tell you after CABG?", "Oxygenation, ventilation and acid-base status", ["Cardiac output", "SVR", "Chest tube output"], "ABGs assess oxygenation, ventilation and acid-base.")
        ]
      }),
      S(53, "Right heart catheterization", {
        pic: "<p>A drawing of a right heart catheter entering through the internal jugular (or basilic) vein, passing the right atrium and right ventricle into the pulmonary artery, next to a photo of a pulmonary artery catheter with its colored ports and balloon syringe.</p>",
        why: "<p>The Swan-Ganz goes in through a big vein (internal jugular here), through the <b>right atrium and right ventricle</b>, into the <b>pulmonary artery</b>. From there it measures filling pressures, cardiac output and lets you calculate SVR: the numbers you need for the three ICU calls.</p>",
        q: [
          Q("In the drawing, where does the pulmonary artery catheter end up?", "In the pulmonary artery", ["In the left ventricle", "In the aorta", "In the coronary sinus"], "It passes the RA and RV into the pulmonary artery."),
          Q("Which vein is shown as the entry site for the right heart catheter?", "The internal jugular vein", ["The saphenous vein", "The portal vein", "The renal vein"], "The drawing shows entry through the internal jugular (or basilic) vein.")
        ]
      }),
      S(54, "After extubation", {
        why: "<p>Once the breathing tube is out: <b>incentive spirometry</b> (open the lungs, prevent atelectasis and pneumonia), <b>ambulation</b> and <b>antiplatelet therapy</b>.</p>",
        q: [
          Q("What three things does the lecture list after extubation?", "Spirometry, ambulation and antiplatelet therapy", ["Bed rest, NPO and sedation", "Reintubation, paralysis and cooling", "Steroids, antibiotics and diuretics for all"], "The slide lists spirometry, ambulation and antiplatelet therapy."),
          Q("Why is incentive spirometry used after CABG?", "To expand the lungs and prevent atelectasis and pneumonia", ["To measure cardiac output", "To check the grafts", "To lower BP"], "Spirometry targets the pulmonary complications like atelectasis (standard teaching).")
        ]
      }),
      S(55, "8-hour call 1: BP 75/P, HR 130, low urine", {
        why: "<p>Low BP, <b>fast</b> heart rate, falling urine: the heart is speeding up to make up for an empty tank. The notes say <b>hypovolemia</b> (think bleeding). Check <b>CVP, chest tube output, SpO2 and cardiac output</b>; order an <b>ECG, Hgb and maybe an echo</b>; treat with volume (and blood if bleeding, standard teaching).</p>",
        q: [
          Q("Eight hours after CABG: BP 75/palp, HR 130, falling urine output. What is the likely problem?", "Hypovolemia", ["Hypertension", "Cardiac dyskinesia with normal volume", "Vasospasm"], "Low BP with a fast heart rate points to hypovolemia in the speaker notes."),
          Q("In call 1, which numbers do you want to know first?", "CVP, chest tube output, SpO2 and cardiac output", ["LDL and HDL", "TSH and A1c", "Lipase and amylase"], "The notes list CVP, CT output, SpO2 and cardiac output."),
          Q("In call 1, which tests do the notes suggest?", "ECG, hemoglobin and possibly an echo", ["A stress test", "A head CT", "A lipid panel"], "The notes list ECG, Hgb and echo +/-."),
          Q("Why is the heart rate 130 in call 1?", "The heart speeds up to make up for low stroke volume from an empty tank", ["The patient is in heart block", "Too much beta blocker", "Low potassium only"], "Tachycardia compensates for low preload in hypovolemia (standard teaching).")
        ]
      }),
      S(56, "8-hour call 2: BP 180/110, HR 90, low urine", {
        why: "<p>High BP after CABG. Ask: <b>history of HTN</b>? What are the <b>CVP, cardiac output and SVR</b>? Is the patient <b>awake or in pain</b>? What is the <b>chest tube output</b>? Order an <b>ECG and echo</b>. Treat the hypertension with <b>nitroprusside</b>. High pressure strains fresh suture lines (standard teaching).</p>",
        q: [
          Q("Eight hours after CABG: BP 180/110, HR 90, falling urine. Which drug do the notes give?", "Nitroprusside", ["Normal saline bolus", "Epinephrine", "Furosemide alone"], "The notes say treat the HTN with nitroprusside."),
          Q("In call 2, which simple bedside causes of high BP should you check?", "Whether the patient is awake or in pain", ["Whether the patient ate", "Blood type", "Whether he has a fever"], "The notes ask whether the patient is awake or in pain."),
          Q("In call 2, which Swan-Ganz number tells you afterload is high?", "SVR", ["SpO2", "Glucose", "Platelets"], "The notes ask for CVP, cardiac output and SVR."),
          Q("Why does hypertension right after CABG matter?", "It strains the fresh grafts and suture lines and can cause bleeding", ["It protects the kidneys", "It is always harmless", "It improves graft flow"], "High pressure stresses new anastomoses (standard teaching).")
        ]
      }),
      S(57, "8-hour call 3: BP 75/P, HR 90, low urine", {
        why: "<p>Low BP <b>without</b> tachycardia, falling urine. Not the hypovolemia picture of call 1. Check <b>chest tube output, CVP, cardiac output and SVR</b>, get an <b>echocardiogram</b>. The notes' answer: <b>cardiac dyskinesia</b>, a pump that isn't squeezing well.</p>",
        q: [
          Q("Eight hours after CABG: BP 75/palp, HR 90, falling urine. What is the notes' answer?", "Cardiac dyskinesia (poor pump function)", ["Hypovolemia", "Hypertension", "Normal recovery"], "The speaker notes give cardiac dyskinesia."),
          Q("In call 3, which test is most useful?", "Echocardiogram", ["Lipid panel", "Stress test", "Upper endoscopy"], "The notes list an echocardiogram."),
          Q("How does call 3 differ from call 1?", "The heart rate is 90, not 130, so it doesn't fit the hypovolemia picture", ["The BP is higher", "Urine output is rising", "There is no difference"], "Same low BP but no tachycardia points toward the pump rather than the tank.")
        ]
      }),
      S(58, "It's over!", {
        pic: "<p>A drawing of a red heart crossed out, with \"It's over!\".</p>",
        why: "<p>End of the lecture. Run through the three ICU calls one more time: fast and low = tank (hypovolemia), high = nitroprusside, low without tachycardia = pump (dyskinesia, get an echo).</p>"
      })
    ],
    review: [
      Q("A post-CABG patient's chest tube output jumps to 400 mL in an hour with falling BP. What do you suspect?", "Bleeding with hypovolemia", ["Vasodilatory shock", "Hypertension", "Phrenic nerve injury"], "Chest tube output answers \"are they bleeding?\", and the low BP fits hypovolemia."),
      Q("Match the call: BP 180/110 eight hours after CABG.", "Hypertension: check pain and SVR, give nitroprusside", ["Hypovolemia: give fluids", "Dyskinesia: get an echo only", "Bleeding: take back to the OR"], "Call 2's notes point to HTN treated with nitroprusside."),
      Q("Which ICU tool would tell you the SVR is low in vasodilatory shock?", "Swan-Ganz catheter", ["Arterial line alone", "Chest X-ray", "Glucose meter"], "The Swan-Ganz gives cardiac output and SVR."),
      Q("A post-CABG patient's CXR shows fluffy bilateral infiltrates. What is the CXR answering?", "Pulmonary edema or hypervolemia", ["Bleeding", "Ischemia", "Hypoglycemia"], "The CXR checks for pulmonary edema, hypervolemia and pneumonia."),
      Q("A patient's BP is 75/palp eight hours after CABG with HR 90 and normal chest tube output. What is the next best test?", "Echocardiogram", ["Stress test", "Lipid panel", "Repeat glucose"], "Low BP without tachycardia points to pump failure, so get an echo.")
    ]
  });

  SlideStudy.lecture({
    id: "cardiac-surgery",
    title: "Cardiac Surgery",
    short: "Surgery",
    by: "Gardner",
    img: "images/surg-slides/slide-{nn}.webp",
    los: los
  });
})();
