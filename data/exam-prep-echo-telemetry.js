/* Exam prep, Echo and Telemetry (Sillaman). Rebuilt 2026-11-22 round 2: no application posted for this deck, so
   every LO is covered as quick facts (views, modes, TEE contraindications and complications, MUGA, monitor lengths)
   and short "which test do you order" cases like his own opening question. See data/exam-prep.js. */
(function () {
  "use strict";
  var X = ExamPrep.X;
  ExamPrep.lecture({
    id: "echo-telemetry", title: "Echo and Telemetry", short: "Echo", group: "Cardiac Testing",
    concepts: {
      tte: "TTE: what it is and what it sees (LO 1-3)",
      views: "Echo windows, views and modes (LO 3)",
      tee: "TEE vs TTE: when to order which, the mitral valve (LO 1, 4, 5)",
      teeci: "TEE contraindications and complications (LO 6, 7)",
      bubble: "Bubble study",
      muga: "MUGA scan (LO 8)",
      monitor: "Telemetry, Holter, event monitor, implantable loop (LO 9, 10)"
    },
    qs: [
      /* TTE */
      X("tte", "Next step", 2, "Dyspnea, swelling, 1+ edema and a new 2/6 systolic murmur. Which test if you suspect valve disease?", "Echocardiogram", ["ECG", "Exercise treadmill with Myoview", "Holter monitor"], "Echo shows valve structure and function."),
      X("tte", "Fact", 5, "What is the primary noninvasive test for cardiac anatomy and function?", "Transthoracic echocardiogram", ["Cardiac catheterization", "Chest X-ray", "Holter monitor"], "TTE evaluates structure, both ventricles and all four valves."),
      X("tte", "Fact", 5, "Which structural abnormalities can a TTE find?", "LVH, wall motion abnormalities, PFO, ASD", ["Coronary plaque and calcium", "Pulmonary emboli", "Carotid stenosis"], "Plus septal aneurysm and valve disease."),
      X("tte", "Fact", 14, "Which measurement can an echo give?", "Pulmonary artery systolic pressure", ["Coronary calcium score", "Serum BNP", "Coronary FFR"], "Echo also gives EF, valve area, atrial size, IVC size and aortic root."),
      X("tte", "Fact", 14, "Which is NOT on the deck's list of echo measurements?", "Coronary artery stenosis", ["LV ejection fraction", "Aortic valve area", "Diastolic function"], "Coronary narrowing needs angiography or CCTA."),
      X("tte", "Next step", 14, "New HF symptoms. Which test gives the EF and diastolic function?", "Transthoracic echo", ["Holter monitor", "Implantable loop recorder", "Exercise EKG alone"], "Echo measures EF, diastolic function, chamber size and valves."),
      X("tte", "Fact", 20, "Who usually performs a TTE?", "An echo tech", ["A cardiothoracic surgeon", "An anesthesiologist", "The patient at home"], "TTE is quick and noninvasive; TEE needs a skilled physician."),
      X("tte", "Fact", 20, "Which echo is the initial test of choice for most patients?", "TTE", ["TEE", "MUGA", "3-D echo only"], "TEE first only in life-threatening cases or when TTE will be nondiagnostic."),

      /* views and modes */
      X("views", "Fact", 6, "What are the three echo imaging windows?", "Parasternal, apical, subcostal", ["Anterior, posterior, lateral", "Carotid, femoral, radial", "Axial, sagittal, coronal"], "Each window gives different views."),
      X("views", "Fact", 8, "Which view is best for calculating the Simpson EF?", "Apical 4-chamber", ["Parasternal short axis", "Subcostal IVC", "Apical 2-chamber"], "The A4C also shows the LV apex and mitral inflow."),
      X("views", "Fact", 8, "Which view best measures aortic stenosis and the outflow tract?", "Apical 5-chamber", ["Apical 4-chamber", "Parasternal short axis at the papillary muscles", "Subcostal IVC"], "The A5C aligns Doppler with the aortic outflow."),
      X("views", "Fact", 8, "Which view shows the anterior and inferior LV walls?", "Apical 2-chamber", ["Apical 5-chamber", "Subcostal IVC", "Parasternal long axis"], "The A2C shows the anterior and inferior walls."),
      X("views", "Fact", 9, "In a ventilated ICU patient, which window may be the only one available?", "Subcostal", ["Parasternal", "Apical", "Suprasternal"], "The subcostal 4-chamber view can still assess LV, RV and valves."),
      X("views", "Fact", 9, "What does the IVC diameter and its respiratory variation estimate?", "Volume status", ["Ejection fraction", "Aortic valve area", "Coronary flow"], "Seen from the subcostal window."),
      X("views", "Fact", 7, "Which view looks at mitral and aortic valve morphology and LV size?", "Parasternal long axis", ["Subcostal IVC", "Apical 2-chamber", "Suprasternal notch"], "With color Doppler it shows AR and MR."),
      X("views", "Fact", 7, "What are the three parasternal short axis levels?", "Aortic valve, mitral valve, mid-ventricle", ["RA, RV, PA", "Apex, septum, lateral wall", "Carotid, aorta, IVC"], "Base to apex through the papillary muscles."),
      X("views", "Classify", 10, "Which echo mode gives a tracing to measure wall thickness and chamber size?", "M-mode", ["Color Doppler", "3-D echo", "Bubble study"], "M-mode traces structures over time."),
      X("views", "Classify", 11, "Which echo mode shows blood flow direction with colors?", "Color Doppler", ["M-mode", "2-D", "MUGA"], "Doppler measures flow; color shows direction."),
      X("views", "Classify", 12, "Which echo mode shows the real-time structures and motion?", "2-D echo", ["M-mode", "Color Doppler", "MUGA"], "2-D shows actual moving anatomy."),
      X("views", "Fact", 13, "Who especially uses 3-D echo?", "The CT surgeon before surgery", ["The ER for chest pain", "The PCP for screening", "The patient at home"], "3-D gives depth for surgical planning."),

      /* TEE */
      X("tee", "Fact", 20, "Which valve is best seen on TEE?", "Mitral valve", ["Pulmonic valve", "Tricuspid valve", "Aortic valve only"], "The esophagus sits right behind the left atrium, so posterior structures are best seen."),
      X("tee", "Compare", 20, "Main difference between TEE and TTE?", "TEE sees posterior structures better; it is minimally invasive", ["TTE sees posterior structures better; it is invasive", "TEE is faster and done by an echo tech", "TTE gives the best view of the LA appendage"], "TEE is behind the heart; TTE is through the chest wall."),
      X("tee", "Next step", 16, "AF for 3 days, planning cardioversion, not anticoagulated. Which test first?", "TEE to look for LA appendage thrombus", ["TTE through the chest wall", "24-hour Holter monitor", "MUGA scan"], "TEE is best for LA/LAA clot before cardioversion."),
      X("tee", "Next step", 16, "Prosthetic mitral valve, fever, bacteremia with Staph aureus. Which echo?", "TEE", ["TTE only", "MUGA", "M-mode only"], "Prosthetic valves and high-likelihood endocarditis need TEE."),
      X("tee", "Next step", 16, "Endocarditis with new heart block, worried about an aortic root abscess. Which echo?", "TEE", ["TTE", "Holter", "MUGA"], "Suspected endocarditis complications like abscess or fistula need TEE."),
      X("tee", "Next step", 16, "Suspected acute aortic dissection in an unstable patient. Which echo?", "TEE", ["TTE", "M-mode", "MUGA"], "Acute aortic pathology is a TEE indication."),
      X("tee", "Next step", 16, "Young patient with a stroke and no clear source. Which echo looks for a cardiac source of embolus?", "TEE", ["MUGA", "Holter only", "M-mode only"], "TEE evaluates for cardiac source of embolus."),
      X("tee", "Next step", 16, "The TTE images were nondiagnostic. What next?", "TEE", ["Repeat TTE in a year", "MUGA", "No further imaging"], "TEE is indicated when TTE is nondiagnostic."),
      X("tee", "Fact", 16, "Which procedures does TEE help guide?", "Closure devices, valvuloplasty and percutaneous valves", ["CABG graft placement", "Coronary stent placement", "Pacemaker lead placement only"], "TEE guides noncoronary percutaneous interventions."),
      X("tee", "Fact", 16, "When is a repeat TEE indicated?", "When an interval change would change therapy", ["Every month for everyone", "Never", "Only after a normal TTE"], "For example, to confirm a vegetation resolved."),

      /* TEE contraindications and complications */
      X("teeci", "Trap", 17, "What is the absolute contraindication to TEE?", "Prior esophagectomy", ["Atrial fibrillation", "A prosthetic valve", "Mild GERD"], "The probe goes down the esophagus."),
      X("teeci", "Trap", 18, "Which is a relative contraindication to TEE?", "Esophageal stricture", ["Atrial fibrillation", "Endocarditis", "Mitral regurgitation"], "Also recent esophageal tear, coagulopathy, low platelets, Zenker's, altered mental status and severe C-spine arthritis."),
      X("teeci", "Why", 18, "Why is severe cervical spine arthritis a relative TEE contraindication?", "Reduced neck motion raises complication risk", ["It causes arrhythmias", "It blocks the ultrasound", "It raises the heart rate"], "Limited range of motion makes probe passage risky."),
      X("teeci", "Trap", 18, "Which diverticulum is a relative contraindication to TEE?", "Zenker's diverticulum", ["Meckel's diverticulum", "Sigmoid diverticulum", "Colonic diverticulum"], "A Zenker's pouch in the pharynx can be perforated."),
      X("teeci", "Fact", 19, "What is the most serious TEE complication?", "Esophageal perforation", ["Hiccups", "Mild sore throat", "Dry mouth"], "Also GI bleeding and pharyngeal hematoma."),
      X("teeci", "Fact", 19, "Below what platelet count is GI bleeding risk raised with TEE?", "50,000", ["150,000", "300,000", "500,000"], "Consider bleeding risk with platelets under 50k."),
      X("teeci", "Case", 19, "After TEE with benzocaine throat spray, SpO2 falls to 85% despite oxygen and the blood looks chocolate brown. Diagnosis?", "Methemoglobinemia", ["Aspiration pneumonia", "Esophageal perforation", "Pneumothorax"], "Topical benzocaine can cause life-threatening methemoglobinemia."),
      X("teeci", "Classify", 19, "Which is a minor TEE complication?", "Transient bronchospasm", ["Esophageal perforation", "Methemoglobinemia", "Pharyngeal hematoma"], "Minor ones also include transient hypoxia, NSVT, AF, hemoptysis and vomiting."),

      /* bubble study */
      X("bubble", "Next step", 21, "Young patient with a cryptogenic stroke. Which echo add-on looks for a PFO?", "Bubble study", ["Color Doppler alone", "M-mode", "MUGA"], "Agitated saline confirms ASD or PFO."),
      X("bubble", "Mechanism", 21, "Why don't microbubbles normally reach the left heart?", "The pulmonary capillaries trap and absorb them", ["They are too heavy to move", "The tricuspid valve blocks them", "They dissolve in the RA"], "Bubbles on the left side mean a shunt."),
      X("bubble", "Trap", 21, "What is the theoretical risk of a bubble study?", "Systemic air embolism with a right-to-left shunt", ["Kidney injury from iodine contrast", "Radiation exposure to the chest", "A tear of the esophagus"], "Bubbles crossing to the left could embolize."),

      /* MUGA */
      X("muga", "Fact", 23, "What is the MUGA scan's main use?", "Highly accurate LV ejection fraction", ["Finding coronary plaque", "Seeing the mitral valve", "Diagnosing endocarditis"], "MUGA is the preferred technique for accurate, reproducible EF."),
      X("muga", "Mechanism", 22, "How does a MUGA scan work?", "Labels red cells with a tracer and counts with a gamma camera", ["Uses ultrasound from the esophagus", "Injects iodine contrast into the coronaries", "Records electrical activity for 48 hours"], "It is radionuclide ventriculography."),
      X("muga", "Fact", 23, "Which is a strength of MUGA over echo?", "Body habitus doesn't limit it", ["No radiation", "Shows valve anatomy", "Can be done in pregnancy"], "It's accurate and reproducible in any body type."),
      X("muga", "Trap", 23, "In whom is MUGA contraindicated?", "Pregnant or lactating women", ["Obese patients", "Patients with AF", "Patients on chemotherapy"], "It uses radiation."),
      X("muga", "Fact", 23, "About how much radiation does a MUGA give?", "620 mrem", ["10 mrem", "5 mrem", "5,000 mrem"], "A CXR is 10 mrem, CT head 200 and CT chest 700."),
      X("muga", "Next step", 23, "A patient on cardiotoxic chemo needs serial, very reproducible EF checks. Which test?", "MUGA", ["Holter monitor", "TEE", "Bubble study"], "MUGA gives accurate, reproducible EF (chemo use is standard teaching)."),

      /* monitors */
      X("monitor", "Fact", 25, "What is telemetry?", "Continuous monitoring of 2-3 ECG leads", ["A 12-lead taken once a day", "An echo done at the bedside", "A patch worn for 3 years"], "Telemetry watches the rhythm continuously."),
      X("monitor", "Fact", 25, "Which is an indication for telemetry?", "Unexplained syncope", ["Stable hypertension", "Mild GERD", "Seasonal allergies"], "Also suspected arrhythmia and evaluating a therapeutic intervention."),
      X("monitor", "Next step", 26, "Daily palpitations and fatigue. Which outpatient monitor fits first?", "24-48 hour Holter monitor", ["Implantable loop recorder", "Inpatient telemetry", "MUGA"], "Daily symptoms are likely to show up in 24-48 hours."),
      X("monitor", "Fact", 26, "What does the patient keep while wearing a Holter?", "A symptom diary", ["A blood pressure log only", "A food diary", "Nothing"], "Symptoms are matched to the rhythm."),
      X("monitor", "Next step", 27, "Palpitations a few times a month, high suspicion for arrhythmia. Which monitor?", "30-day event monitor", ["24-hour Holter", "MUGA", "TEE"], "Event monitors run 2-4 weeks for less frequent symptoms."),
      X("monitor", "Fact", 27, "How long does an event monitor record?", "2-4 weeks", ["24 hours", "3 years", "1 hour"], "It's mailed to the patient's house."),
      X("monitor", "Fact", 27, "Which is a drawback of the 30-day event monitor?", "Discomfort and poor compliance", ["It can't be removed to shower", "It must be implanted", "It gives radiation"], "Patients can remove it to shower, which helps."),
      X("monitor", "Next step", 28, "Recurrent unexplained syncope; Holter and event monitor were negative. Next?", "Implantable loop recorder", ["Another 24-hour Holter", "MUGA", "TEE"], "Implantable monitors are for unexplained syncope and cryptogenic stroke."),
      X("monitor", "Next step", 28, "Cryptogenic stroke and you want to find hidden AF over years. Which monitor?", "Implantable monitoring device", ["24-hour Holter", "Inpatient telemetry for one night", "Event monitor for 1 week"], "It monitors for up to 3 years."),
      X("monitor", "Fact", 28, "How long can an implantable monitor record?", "Up to 3 years", ["48 hours", "30 days", "10 years"], "It downloads each night and is explanted after three years."),
      X("monitor", "Fact", 28, "What is a practical drawback of implantable monitors?", "Hard to get insurance approval", ["They require general anesthesia", "They give radiation", "They must be worn on the chest"], "They also require a minimally invasive procedure."),
      X("monitor", "Classify", 26, "Rank monitors from shortest to longest recording.", "Holter, event monitor, implantable loop", ["Implantable loop, Holter, event monitor", "Event monitor, Holter, implantable loop", "All the same length"], "24-48 hours, 2-4 weeks, up to 3 years.")
    ]
  });
})();
