/* Exam prep, Echo & Telemetry (Sillaman): concept and application questions on the 10 LOs. See data/exam-prep.js. */
(function () {
  "use strict";
  var X = ExamPrep.X;
  ExamPrep.lecture({
    id: "echo-telemetry", title: "Echo & Telemetry", short: "Echo", group: "Cardiac Testing",
    concepts: {
      tte: "TTE: what it shows and when to order it (LO 1-3)",
      views: "Echo views and modes (LO 3)",
      tee: "TEE vs TTE: when, contraindications, complications (LO 4-7)",
      bubble: "Bubble study for shunts",
      muga: "MUGA scan (LO 8)",
      monitor: "Telemetry, Holter, event monitor, implantable loop (LO 9, 10)"
    },
    qs: [
      /* TTE */
      X("tte", "Next step", 2, "Dyspnea, leg swelling and a new 2/6 systolic murmur. Which test answers whether a valve is the cause?", "Echocardiogram", ["Holter monitor", "Exercise treadmill", "Resting ECG"], "An echo shows valve structure and flow, so it is the test for suspected valvular disease."),
      X("tte", "Why", 5, "Why is TTE the first imaging test for most cardiac questions?", "It's noninvasive and shows structure and function", ["It's the only test that sees the coronaries", "It's invasive, so its images are sharper", "It needs sedation, so it's more reliable"], "TTE is the primary noninvasive test for quantitative and qualitative cardiac anatomy and function."),
      X("tte", "Case", 14, "A patient with HF needs an EF, LV wall thickness and PA systolic pressure. Which test gives all three?", "Transthoracic echo", ["Coronary angiogram", "Holter monitor", "Calcium score"], "Echo measures EF, LVH, PA systolic pressure, chamber sizes, valves and more."),
      X("tte", "Compare", 5, "Which question can a TTE answer that an ECG cannot?", "Is the LV squeeze reduced?", ["Is the rhythm regular?", "Is the PR interval long?", "Is there a bundle block?"], "Echo shows mechanical function like LV systolic function; the ECG shows electrical activity."),
      X("tte", "Case", 9, "Intubated ICU patient: how can echo help judge volume status?", "IVC diameter and its respiratory variation", ["Aortic valve area on the long axis view", "M-mode thickness of the septum", "Color Doppler across the pulmonic valve"], "From the subcostal view, IVC diameter and respiratory change are pivotal for estimating volume status."),

      /* views and modes */
      X("views", "Compare", 8, "You need to grade aortic stenosis with Doppler. Which view lines up best with the outflow tract?", "Apical 5-chamber", ["Parasternal short axis", "Subcostal IVC view", "Apical 2-chamber"], "The apical 5-chamber view adds the aortic valve and best aligns Doppler with the aortic outflow tract."),
      X("views", "Compare", 8, "Which view is best for the Simpson EF and mitral inflow?", "Apical 4-chamber", ["Parasternal long", "Subcostal IVC", "Suprasternal"], "The apical 4-chamber view is best for Simpson EF, the LV apex and mitral inflow (diastolic function, MS)."),
      X("views", "Case", 9, "Ventilated patient: parasternal and apical windows are blocked. Which window may still work?", "Subcostal", ["Parasternal", "Apical", "None at all"], "In some ventilated patients the subcostal view is the only accessible window."),
      X("views", "Compare", 11, "Which echo mode shows the direction of blood flow?", "Color Doppler", ["M-mode", "2-D echo", "3-D echo"], "Color Doppler uses colors to show flow direction, which makes regurgitant jets easy to see."),
      X("views", "Compare", 10, "Which echo mode gives a tracing used to measure wall thickness and chamber size?", "M-mode", ["Color Doppler", "Bubble study", "Spectral PW"], "M-mode provides a tracing of heart structures for measuring chambers and wall thickness."),
      X("views", "Why", 13, "Why would a CT surgeon want a 3-D echo before valve surgery?", "It shows the structures in depth while beating", ["It's the only mode that shows flow direction", "It replaces the coronary angiogram", "It's cheaper and faster than 2-D echo"], "3-D echo gives greater depth and real-time measurements, useful to the surgeon before surgery."),

      /* TEE */
      X("tee", "Why", 20, "Why does TEE see the mitral valve better than TTE?", "The esophagus lies right behind the LA", ["TEE uses radiation for finer detail", "TEE is done by an echo tech alone", "TTE can't image any of the valves"], "TEE gives superior views of posterior structures, and the mitral valve is its best-seen valve."),
      X("tee", "Next step", 16, "AF for 3 days, not anticoagulated; plan is cardioversion today. Which test first?", "TEE for LA appendage thrombus", ["TTE alone to measure the EF", "Coronary angiogram first", "Holter for 48 hours"], "TEE rules out LA/LAA thrombus before cardioversion or ablation in AF or flutter."),
      X("tee", "Next step", 16, "Prosthetic mitral valve, fever and Staph bacteremia. TTE is unrevealing. Next?", "TEE", ["MUGA", "Holter", "Stop testing"], "TEE is indicated to diagnose IE with moderate-high pretest likelihood like prosthetic valves, and when TTE is nondiagnostic."),
      X("tee", "Case", 16, "Known endocarditis, new PR prolongation and persistent fever. Why order a TEE?", "To look for an abscess or fistula", ["To measure the patient's EF only", "To count PVCs over 24 hours", "To score coronary calcium"], "TEE is indicated for suspected complications of endocarditis such as abscess or fistula."),
      X("tee", "Next step", 16, "Tearing chest pain, unstable patient, suspected dissection. Which echo test?", "TEE", ["TTE", "MUGA", "M-mode"], "TEE is an initial test in life-threatening settings like suspected acute aortic dissection."),
      X("tee", "Trap", 17, "A patient had an esophagectomy for cancer and now needs a TEE. Answer?", "Absolutely contraindicated", ["Fine with extra sedation", "Only relatively contraindicated", "Fine if platelets are normal"], "Previous esophagectomy or esophagogastrectomy is the absolute contraindication to TEE."),
      X("tee", "Case", 18, "Which finding is a relative contraindication to TEE?", "Platelet count of 35,000", ["Prosthetic mitral valve", "Atrial fibrillation", "Recent bacteremia"], "Thrombocytopenia, coagulopathy, esophageal stricture or tear, Zenker's, AMS and severe cervical arthritis are relative contraindications."),
      X("tee", "Why", 18, "Why is severe cervical spine arthritis a relative TEE contraindication?", "Limited neck motion raises the risk of injury", ["Arthritis blocks the ultrasound beam", "Arthritis drugs interact with the sedation", "It makes the mitral valve harder to see"], "Reduced range of motion makes passing the probe harder and raises complication risk."),
      X("tee", "Case", 19, "After a TEE with topical benzocaine, the patient is cyanotic with a normal PaO2 and chocolate-brown blood. Cause?", "Methemoglobinemia", ["Esophageal tear", "Air embolism", "Pharyngeal clot"], "Methemoglobinemia is a rare, life-threatening complication of topical benzocaine used for throat anesthesia."),
      X("tee", "Case", 19, "After TEE: severe chest pain, fever and crepitus in the neck. Feared complication?", "Esophageal perforation", ["Methemoglobinemia", "Transient bronchospasm", "Benign vomiting"], "Esophageal perforation is a major TEE complication."),
      X("tee", "Compare", 20, "Which pair describes TEE vs TTE correctly?", "TEE: semi-invasive, physician; TTE: quick, echo tech", ["TEE: quick, echo tech; TTE: semi-invasive, physician", "Both noninvasive and done by echo techs", "Both need sedation and a physician"], "TEE is minimally invasive and needs a skilled physician; TTE is quick, noninvasive and done by a tech."),
      X("tee", "Trap", 20, "A student orders TEE first for every echo question. What is wrong?", "TTE comes first; TEE is for specific cases", ["Nothing: TEE should always come first", "TEE is never used for valve questions", "TEE is only for children with shunts"], "TTE is the initial test for most patients; TEE is first only in life-threatening or likely-nondiagnostic settings."),

      /* bubble */
      X("bubble", "Mechanism", 21, "Why do bubbles normally stay on the right side of the heart?", "The lung capillaries trap and absorb them", ["The tricuspid valve blocks every bubble", "They dissolve in the right atrium at once", "The septum pulls them into the coronaries"], "Microbubbles are trapped in pulmonary capillaries, so without a shunt they never reach the left heart."),
      X("bubble", "Case", 21, "Bubble study: bubbles appear in the left atrium within a few beats. Meaning?", "A shunt such as a PFO or ASD", ["A normal finding in adults", "Severe mitral regurgitation", "Aortic valve endocarditis"], "Bubbles crossing to the left side means an intracardiac shunt like a PFO or ASD."),
      X("bubble", "Trap", 21, "What is the theoretical risk of a bubble study in a right-to-left shunt?", "Systemic air embolism", ["Pulmonary infarction", "Allergic dye reaction", "Radiation exposure"], "With a right-to-left shunt, bubbles reach the systemic side, a theoretical risk of air embolism."),

      /* MUGA */
      X("muga", "Mechanism", 22, "How does a MUGA scan measure EF?", "Tagged red cells counted by a gamma camera", ["Ultrasound tracks the moving LV walls", "Contrast dye fills the left ventricle", "A wire measures the LV pressures directly"], "MUGA labels the blood pool with a radioactive tracer and measures counts over the chest for a volumetric EF."),
      X("muga", "Why", 23, "Why choose MUGA over echo for a precise EF, as before cardiotoxic chemo?", "Very accurate and not limited by body habitus", ["It has no radiation, unlike an echo", "It also shows valve structure in 3-D", "It is cheaper and quicker than an echo"], "MUGA is the preferred test for highly accurate, reproducible EF, and body habitus doesn't limit it."),
      X("muga", "Trap", 23, "A pregnant patient needs an EF measured. Why not MUGA?", "It's radioactive, so not used in pregnancy", ["It needs general anesthesia to do", "It can't measure an EF at all", "It needs a TEE probe in the throat"], "MUGA exposes the patient to about 620 mrem and is contraindicated in pregnancy and lactation."),

      /* monitors */
      X("monitor", "Next step", 25, "Inpatient with unexplained syncope. Monitoring while admitted?", "Telemetry", ["MUGA", "Implantable loop", "Calcium score"], "Telemetry is indicated for suspected arrhythmia, unexplained syncope and evaluating a therapy."),
      X("monitor", "Next step", 26, "Palpitations every day. Which outpatient monitor fits best?", "24-48 hour Holter", ["Implantable loop recorder", "Inpatient telemetry", "TEE"], "Symptoms that occur daily are likely to be caught on a 24-48 hour Holter with a symptom diary."),
      X("monitor", "Next step", 27, "Palpitations about once a week; Holter was normal. Next monitor?", "30-day event monitor", ["Repeat 24-hour Holter", "Implantable device now", "No more monitoring"], "Less frequent symptoms need a longer window: an event monitor covers 2-4 weeks."),
      X("monitor", "Next step", 28, "Cryptogenic stroke; you need to find hidden AF over months. Which device?", "Implantable loop recorder", ["24-hour Holter", "Inpatient telemetry", "A resting ECG"], "Implantable monitors are indicated for unexplained syncope and cryptogenic stroke and record for up to 3 years."),
      X("monitor", "Compare", 28, "Rare syncope every few months despite a normal event monitor. Why an implantable device?", "It records up to 3 years, catching rare events", ["It records only 48 hours but at higher quality", "It replaces the need for an echocardiogram", "It treats the arrhythmia as well as finding it"], "The match is frequency: rare events need the long recording window of an implantable monitor."),
      X("monitor", "Trap", 27, "Why might a 30-day event monitor miss an arrhythmia?", "Patients remove it and find it uncomfortable", ["It only records while the patient sleeps", "It can't detect atrial fibrillation", "It works only for the first 24 hours"], "Event monitors can be removed to shower and are uncomfortable, so compliance is a limitation."),
      X("monitor", "Case", 24, "66-year-old with daily thumping heartbeat, dyspnea and fatigue. Which first test fits her symptom pattern?", "Holter monitor", ["Implantable loop", "Coronary angiogram", "PET viability scan"], "Daily symptoms are likely to show up within 24-48 hours, so a Holter is the matching test.")
    ]
  });
})();
