/* Vignettes, Echo and Telemetry (Sillaman; no application posted): short "which test do you order / can they have it /
   what went wrong" cases like his own opening question, on every LO (TTE, views and modes, TEE indications,
   contraindications and complications, bubble study, MUGA, monitors). See data/vignettes.js. */
(function () {
  "use strict";
  var V = Vignettes.V;
  Vignettes.lecture({
    id: "echo-telemetry", title: "Echo and Telemetry", short: "Echo", group: "Cardiac Testing",
    concepts: {
      tte: "TTE: what it is and what it sees (LO 1-3)",
      views: "Echo windows, views and modes (LO 3)",
      tee: "TEE vs TTE: when to order which (LO 1, 4, 5)",
      teeci: "TEE contraindications and complications (LO 6, 7)",
      bubble: "Bubble study",
      muga: "MUGA scan (LO 8)",
      monitor: "Telemetry, Holter, event monitor, implantable loop (LO 9, 10)"
    },
    qs: [
      /* TTE */
      V("tte", "Test to order", 2, "A 66-year-old has dyspnea, ankle swelling, 1+ edema and a new 2/6 systolic murmur. You suspect valve disease. Which test?", "Echocardiogram", ["ECG", "Treadmill with Myoview", "Holter monitor"], "An echo shows valve structure and function directly."),
      V("tte", "Test to order", 14, "A 70-year-old has new orthopnea and edema. Which first test gives his ejection fraction and diastolic function?", "Transthoracic echo", ["Transesophageal echo", "Cardiac catheterization", "MUGA scan"], "TTE is the initial noninvasive test for cardiac structure and function."),
      V("tte", "Test to order", 14, "A 52-year-old with scleroderma has exertional dyspnea, and you suspect pulmonary hypertension. Which noninvasive test estimates her PA pressure?", "Transthoracic echo", ["Holter monitor", "MUGA scan", "Treadmill EKG"], "Echo estimates pulmonary artery systolic pressure from the tricuspid jet."),
      V("tte", "Test to order", 14, "A 61-year-old asks whether his echo tomorrow will show how blocked his coronary arteries are. What do you tell him?", "No: echo doesn't show coronary stenosis", ["Yes: echo grades every stenosis", "Yes, but only in the LAD", "Only if contrast is used"], "Echo shows wall motion, valves and chambers, not the coronary lumen."),
      V("tte", "Diagnosis", 5, "A 35-year-old with a stroke has an echo showing a small hole in the interatrial septum with left-to-right flow. Which kind of finding can TTE pick up?", "Structural defects like PFO or ASD", ["Only valve calcification", "Only coronary plaque", "Only pulmonary emboli"], "TTE detects LVH, wall motion problems and septal defects such as PFO and ASD."),

      /* views and modes */
      V("views", "Test to order", 8, "The sonographer is calculating a 68-year-old's EF by the Simpson method. Which view is best?", "Apical 4-chamber", ["Subcostal view", "Parasternal long axis", "Suprasternal view"], "The apical 4-chamber view is used for the Simpson EF."),
      V("views", "Test to order", 8, "A 77-year-old with a harsh systolic murmur needs her aortic stenosis gradient and outflow tract measured. Which view?", "Apical 5-chamber", ["Apical 2-chamber", "Subcostal view", "Parasternal short axis"], "The apical 5-chamber view lines up with the LV outflow tract and aortic valve."),
      V("views", "Test to order", 9, "A 60-year-old on a ventilator in the ICU needs an urgent echo, but the chest windows are blocked. Which window may be the only one?", "Subcostal", ["Parasternal", "Apical", "Suprasternal"], "In ventilated patients, the subcostal window may be the only usable view."),
      V("views", "Test to order", 9, "A 72-year-old in the ICU is hypotensive, and you want to know if she is dry or overloaded. What can the echo measure?", "IVC diameter and how it varies with breathing", ["Coronary flow in the LAD", "Carotid artery stenosis", "Renal artery blood flow"], "IVC size and collapse with respiration estimate volume status."),
      V("views", "Classify", 11, "On a 58-year-old's echo, red and blue jets show blood leaking back across the mitral valve. Which mode shows this?", "Color Doppler", ["M-mode", "2-D echo", "3-D echo"], "Color Doppler shows flow direction and regurgitant jets in color."),
      V("views", "Classify", 10, "The sonographer uses a single-line tracing over time to measure a 64-year-old's septal and posterior wall thickness. Which mode?", "M-mode", ["Color Doppler", "3-D echo", "Bubble study"], "M-mode gives a one-dimensional tracing for wall thickness and chamber size."),
      V("views", "Test to order", 13, "A cardiothoracic surgeon is planning a 66-year-old's mitral valve repair and wants the most detailed picture of the valve. Which echo mode?", "3-D echo", ["M-mode only", "Color Doppler only", "Subcostal 2-D view"], "3-D echo is especially used by surgeons planning valve operations."),

      /* TEE */
      V("tee", "Test to order", 16, "A 70-year-old has had AF for 3 days, isn't anticoagulated and needs cardioversion today. Which test first?", "TEE to look for left atrial appendage clot", ["TTE to measure his EF", "Holter monitor for 48 hours", "MUGA scan for EF"], "TEE checks the LA and LAA for thrombus before cardioversion."),
      V("tee", "Test to order", 16, "A 74-year-old with a prosthetic mitral valve has fever and Staph aureus bacteremia. Which echo?", "TEE", ["TTE only", "M-mode", "MUGA"], "Prosthetic valves and Staph aureus give high pretest likelihood, so TEE is used for endocarditis."),
      V("tee", "Test to order", 16, "A 58-year-old with aortic valve endocarditis develops a new heart block, and you worry about a root abscess. Which echo?", "TEE", ["TTE", "MUGA", "Holter"], "TEE best shows complications of endocarditis like abscess and fistula."),
      V("tee", "Test to order", 16, "A 66-year-old has tearing chest pain to the back, a widened mediastinum and is too unstable to leave the ICU for CT. Which echo?", "TEE at the bedside", ["TTE subcostal only", "Treadmill echo", "MUGA scan"], "TEE can diagnose acute aortic dissection at the bedside."),
      V("tee", "Test to order", 16, "A 41-year-old has a stroke with no carotid disease, normal rhythm and no clear source. Which echo looks for a cardiac source of embolus?", "TEE", ["TTE M-mode", "MUGA", "Stress echo"], "TEE is the test to evaluate for a cardiac source of embolus."),
      V("tee", "Test to order", 20, "A 62-year-old's TTE was nondiagnostic because of obesity, and you need a close look at the mitral valve. Next test?", "TEE", ["A repeat TTE", "MUGA scan", "Holter"], "TEE sits behind the heart and sees the mitral valve best."),

      /* TEE contraindications and complications */
      V("teeci", "Next step", 17, "A 69-year-old needs a TEE for endocarditis but had an esophagectomy for cancer 2 years ago. What do you do?", "Don't do TEE: absolute contraindication", ["Do the TEE with extra sedation", "Do the TEE after an endoscopy", "Do the TEE with a smaller probe"], "A prior esophagectomy is the absolute contraindication to TEE."),
      V("teeci", "Next step", 18, "A 75-year-old needing TEE has a Zenker's diverticulum and severe neck arthritis. How do these affect the plan?", "Relative contraindications: weigh the risk", ["They have no effect on the TEE plan", "They are absolute bans on any TEE", "They matter only for a TTE, not a TEE"], "Zenker's and limited neck motion are relative contraindications that raise complication risk."),
      V("teeci", "Complication", 19, "Minutes after a TEE with benzocaine throat spray, a 63-year-old's SpO2 falls to 85% despite oxygen and the blood looks chocolate brown. Diagnosis?", "Methemoglobinemia", ["Pulmonary embolism", "Esophageal tear", "Anaphylaxis"], "Topical benzocaine can cause methemoglobinemia, a rare but serious TEE complication."),
      V("teeci", "Complication", 19, "The day after a TEE, a 70-year-old has severe chest pain, fever and crepitus in the neck. What is the most serious complication to suspect?", "Esophageal perforation", ["Transient bronchospasm", "Mild sore throat", "Vasovagal syncope"], "Perforation is the most serious TEE complication."),
      V("teeci", "Complication", 19, "A 66-year-old with platelets of 38,000 needs a TEE. Which complication is more likely?", "GI bleeding", ["Methemoglobinemia", "Contrast allergy", "Atrial septal tear"], "Platelets under 50,000 raise the risk of GI bleeding with TEE."),

      /* bubble study */
      V("bubble", "Test to order", 21, "A 36-year-old has a cryptogenic stroke. Which echo add-on looks for a PFO?", "A bubble study", ["M-mode tracing", "MUGA scan", "Stress echo"], "Agitated saline that crosses to the left heart shows a right-to-left shunt."),
      V("bubble", "What's happening", 21, "On a 40-year-old's bubble study, no bubbles appear in the left heart. Why don't microbubbles normally get there?", "The lung capillaries trap them", ["The tricuspid valve blocks them", "The bubbles dissolve in the IVC", "The aortic valve filters them"], "Microbubbles are filtered by the pulmonary capillaries unless there is a shunt."),
      V("bubble", "Complication", 21, "A 45-year-old with a large PFO is about to have a bubble study. What is the theoretical risk?", "Systemic air embolism", ["Methemoglobinemia", "Contrast kidney injury", "Esophageal tear"], "With a right-to-left shunt, bubbles could reach the systemic circulation."),

      /* MUGA */
      V("muga", "Test to order", 23, "A 48-year-old on trastuzumab needs very reproducible EF checks every 3 months to watch for cardiotoxicity. Which test?", "MUGA scan", ["Holter monitor", "Bubble study", "Treadmill EKG"], "MUGA gives a highly accurate, reproducible LVEF."),
      V("muga", "Test to order", 23, "A 64-year-old with severe obesity has had two echoes with poor images, and you need an accurate EF. Which test isn't limited by body habitus?", "MUGA scan", ["Another TTE", "M-mode echo", "Color Doppler"], "MUGA counts labeled red cells, so body size doesn't limit it."),
      V("muga", "Next step", 23, "A 32-year-old who is 20 weeks pregnant needs an EF measurement. Should she get a MUGA?", "No: it is contraindicated in pregnancy", ["Yes: it is the safest test", "Yes, after 30 weeks only", "Yes, at half the dose"], "MUGA uses radiation and is contraindicated in pregnant or lactating women."),
      V("muga", "What's happening", 22, "A 58-year-old on chemotherapy is booked for a MUGA scan and asks how it measures his heart function. What do you tell him?", "His red cells are tagged and counted by a camera", ["Sound waves bounce off his heart walls", "A probe is passed down his esophagus", "Dye is injected into his coronary arteries"], "MUGA labels red cells with a tracer and images them with a gamma camera."),

      /* monitors */
      V("monitor", "Test to order", 26, "A 45-year-old has palpitations and fatigue every day for 2 weeks. Which outpatient monitor fits first?", "24-48 hour Holter monitor", ["Implantable loop recorder", "30-day event monitor", "Inpatient telemetry"], "Daily symptoms are likely to be caught in 24-48 hours."),
      V("monitor", "Test to order", 27, "A 52-year-old gets palpitations a few times a month, and you strongly suspect an arrhythmia. Which monitor?", "30-day event monitor", ["24-hour Holter", "Inpatient telemetry", "MUGA scan"], "Event monitors record for 2-4 weeks to catch less frequent symptoms."),
      V("monitor", "Test to order", 28, "A 67-year-old has had three unexplained syncopal episodes in a year; Holter and event monitors were negative. Next?", "Implantable loop recorder", ["Another 24-hour Holter", "A treadmill stress test", "A repeat TTE only"], "Implantable monitors record for up to 3 years to catch rare events."),
      V("monitor", "Test to order", 28, "A 62-year-old had a cryptogenic stroke, and you want to find hidden paroxysmal AF over years. Which monitor?", "Implantable monitoring device", ["24-hour Holter", "30-day event monitor", "Inpatient telemetry"], "Long-term implanted monitors find intermittent AF that short monitors miss."),
      V("monitor", "Test to order", 25, "A 74-year-old is admitted after an unexplained syncopal episode. Which monitoring should start on the floor?", "Telemetry", ["Holter monitor", "Event monitor", "MUGA scan"], "Unexplained syncope is an indication for inpatient telemetry."),
      V("monitor", "Next step", 26, "A 49-year-old is going home with a 48-hour Holter for palpitations. What should he do while wearing it?", "Keep a diary of his symptoms", ["Avoid all daily activity", "Take it off to shower daily", "Press a button only at night"], "A symptom diary lets symptoms be matched to the rhythm.")
    ]
  });
})();
