/* Echo & Telemetry Apply final (Anna, 2026-11-21): short patient cases across the whole deck (what is it, what to order, what to do).
   F(slide, prompt, answer, [3 wrong], why). Ids "echo-telemetry|apply|<i>": only append. */
(function () {
  "use strict";
  var F = SlideStudy.F;
  SlideStudy.apply("echo-telemetry", [
    /* LO 2 */
    F(2, "A 58-year-old has a new 3/6 holosystolic murmur at the apex radiating to the axilla. What is the first test?", "Transthoracic echo", ["Holter monitor", "MUGA scan", "Implantable loop recorder"], "A new murmur is a valve question, and TTE is the first test for valves."),
    F(2, "A patient with leg swelling and orthopnea has a normal ECG. What is the next test to look at the heart's structure and pump?", "Echocardiogram", ["Repeat ECG", "Event monitor", "Telemetry"], "A normal ECG does not rule out structural disease, and echo shows chambers, valves and EF."),

    /* LO 1 & 3 */
    F(5, "A hypertensive patient's ECG suggests LVH. Which noninvasive test confirms it?", "TTE", ["Holter monitor", "Event monitor", "Bubble study only"], "TTE measures wall thickness and shows LVH directly."),
    F(5, "After an MI, you want to know which walls move poorly. Which test?", "TTE", ["Telemetry", "MUGA only", "Implantable monitor"], "TTE shows wall motion abnormalities segment by segment."),
    F(7, "The sonographer wants to see the mitral and aortic valves in one long view from beside the sternum. Which view?", "Parasternal long axis", ["Apical 2-chamber", "Subcostal IVC", "Suprasternal notch"], "Parasternal long axis shows both left-sided valves and ventricular squeeze."),
    F(8, "Severe aortic stenosis is suspected and the gradient must be measured accurately. Which view lines up the Doppler best?", "Apical 5-chamber", ["Parasternal short axis at the papillary muscles", "Subcostal IVC", "Apical 2-chamber"], "The 5-chamber view gives the best Doppler alignment with the outflow tract."),
    F(8, "A patient with suspected diastolic dysfunction needs mitral inflow studied. Which view?", "Apical 4-chamber", ["Apical 5-chamber", "Parasternal long axis", "Subcostal short axis"], "Mitral inflow and diastolic function are studied in the apical 4-chamber view."),
    F(8, "An inferior wall MI is suspected and you want that wall seen with the anterior wall. Which view?", "Apical 2-chamber", ["Apical 5-chamber", "Subcostal IVC", "Parasternal long axis"], "The apical 2-chamber view shows the anterior and inferior LV walls."),
    F(9, "A hypotensive ICU patient on a ventilator needs a quick look at fluid status. Which echo view?", "Subcostal IVC", ["Apical 5-chamber", "Parasternal long axis", "3-D echo of the mitral valve"], "IVC size and breathing variation estimate volume status, and the subcostal window works in ventilated patients."),
    F(10, "The sonographer needs a precise septal wall thickness. Which mode?", "M-mode", ["Color Doppler", "Bubble study", "MUGA"], "M-mode is used to measure chamber size and wall thickness."),
    F(11, "A patient has a diastolic murmur and you want to see the backward jet into the LV. Which mode?", "Color Doppler", ["M-mode", "2-D without Doppler", "MUGA"], "Color Doppler shows flow direction, so a regurgitant jet stands out."),
    F(13, "A surgeon is planning a complex mitral valve repair. Which echo helps most?", "3-D echo", ["M-mode", "Plain 2-D alone", "Holter"], "3-D echo is useful to the CT surgeon before surgery."),

    /* LO 3 */
    F(14, "A patient with COPD and a loud P2 needs pulmonary pressure estimated. Which test?", "Echo", ["Holter monitor", "Event monitor", "Implantable monitor"], "Echo estimates pulmonary artery systolic pressure."),
    F(14, "A Marfan patient needs his aortic root followed. Which test is on the deck's list for this?", "Echo", ["MUGA", "Telemetry", "Event monitor"], "Aortic root size is on the echo evaluation list."),
    F(14, "A patient's echo shows an aortic valve area of 0.8 cm² and a high peak velocity. What do these describe?", "Aortic stenosis severity", ["Mitral prolapse", "Volume status", "Rhythm burden"], "Aortic valve area and peak velocity are the echo measures of aortic stenosis."),

    /* LO 4 */
    F(16, "A patient with tearing chest pain radiating to the back is too unstable for CT. Which echo?", "TEE", ["TTE only", "MUGA", "3-D TTE in clinic"], "Suspected acute aortic dissection is a TEE indication."),
    F(16, "A patient has a mechanical mitral valve, new heart failure and a muffled valve click. Which echo?", "TEE", ["MUGA", "Holter", "Subcostal IVC only"], "Suspected prosthetic valve dysfunction such as thrombus or pannus calls for TEE."),
    F(16, "A patient with known aortic valve endocarditis develops a new PR prolongation. Which echo?", "TEE to look for an abscess", ["Repeat ECG only", "MUGA", "Event monitor"], "A suspected endocarditis complication such as a root abscess is a TEE indication."),
    F(16, "A patient with AF for 3 weeks without anticoagulation needs cardioversion today. Which test first?", "TEE to exclude LA appendage thrombus", ["Holter", "MUGA", "Bubble study only"], "TEE checks the left atrial appendage for clot before cardioversion."),
    F(16, "A patient with Staph aureus bacteremia has a normal TTE. Which test next?", "TEE", ["No further imaging", "MUGA", "Holter"], "Certain pathogens raise the pretest likelihood of endocarditis enough to need TEE."),
    F(16, "A TTE in an obese patient with emphysema shows nothing clearly. What next?", "TEE", ["Repeat the same TTE daily", "Event monitor", "Telemetry"], "A nondiagnostic TTE is a TEE indication."),
    F(16, "A cardiologist is placing a TAVR-type percutaneous valve. Which echo guides it?", "TEE", ["Holter", "MUGA", "Plain chest X-ray"], "TEE guides noncoronary percutaneous procedures including percutaneous valves."),

    /* LO 6-7 */
    F(17, "A patient who had an esophagogastrectomy for cancer has suspected endocarditis and a poor TTE. Can he have a TEE?", "No, it is absolutely contraindicated", ["Yes, no special risk", "Yes, after a bubble study", "Only with a larger probe"], "A prior esophagectomy or esophagogastrectomy is the absolute TEE contraindication."),
    F(18, "A patient with ITP and platelets of 30,000 needs a TEE. How should you think about it?", "Relative contraindication with bleeding risk", ["Absolute contraindication", "No concern at all", "It makes TEE safer"], "Thrombocytopenia is a relative contraindication, and platelets under 50k raise GI bleeding risk."),
    F(18, "A patient with a Zenker's diverticulum needs a TEE. Why the caution?", "The probe can enter the pouch and perforate it", ["It blocks the ultrasound beam", "It causes AF", "It is an absolute contraindication"], "Zenker's is a relative contraindication because the pouch is a perforation risk (standard teaching)."),
    F(18, "A patient with an active upper GI bleed from an esophageal tear today needs a heart picture. Which echo?", "TTE, since TEE is relatively contraindicated", ["TEE right away", "MUGA only", "No imaging ever"], "A recent active esophageal tear or hemorrhage is a relative TEE contraindication."),
    F(19, "During a TEE, the patient wheezes briefly and then settles. What is this?", "Transient bronchospasm, a minor complication", ["Esophageal perforation", "Methemoglobinemia", "Pharyngeal hematoma"], "Transient bronchospasm is on the minor complication list."),
    F(19, "After a TEE, a patient vomits bright red blood with a platelet count of 40,000. What happened?", "GI bleeding", ["Methemoglobinemia", "Bronchospasm", "Air embolism"], "GI bleeding is a TEE complication, with more risk when platelets are under 50k."),
    F(19, "After a TEE with benzocaine spray, a patient is cyanotic with a normal PaO2. What is the treatment?", "Methylene blue (standard teaching)", ["More benzocaine", "Albuterol", "Heparin"], "Methemoglobinemia from benzocaine is treated with methylene blue (standard teaching)."),

    /* LO 4-5 */
    F(20, "A small clinic has an echo tech but no cardiologist today. Which echo can be done?", "TTE", ["TEE", "Both equally", "Neither"], "TTE is performed by an echo tech, while TEE requires a skilled physician."),
    F(20, "A patient with suspected mitral valve vegetation and a clear TTE window still has high suspicion. Which echo sees the mitral valve best?", "TEE", ["TTE only", "Subcostal IVC", "M-mode only"], "TEE gives the best view of posterior structures, including the mitral valve."),
    F(21, "A 32-year-old with migraines and a stroke has a bubble study. Bubbles cross to the left heart. What does it suggest?", "A PFO with right-to-left shunting", ["Normal anatomy", "Aortic stenosis", "Volume overload"], "Bubbles normally stop in the lung capillaries, so bubbles on the left mean a shunt."),
    F(21, "A patient with a known large right-to-left shunt is scheduled for a bubble study. What is the theoretical risk?", "Systemic air embolism", ["Methemoglobinemia", "Esophageal perforation", "Radiation"], "Bubbles that cross a right-to-left shunt could embolize systemically."),

    /* LO 8 */
    F(23, "A breast cancer patient on doxorubicin needs serial EF measurements that must be exactly comparable. Which test?", "MUGA", ["Holter", "Telemetry", "M-mode"], "MUGA is very accurate and reproducible for LVEF."),
    F(23, "A breastfeeding mother needs an EF. Which test is contraindicated?", "MUGA", ["TTE", "Telemetry", "Holter"], "MUGA is contraindicated in lactating women because of radiation."),
    F(23, "A 180 kg patient's TTE windows are poor and an accurate EF is needed. Which test is not limited by size?", "MUGA", ["TTE again", "Holter", "Event monitor"], "Body habitus does not limit MUGA."),

    /* LO 9 */
    F(25, "A patient in the ED had syncope and no cause is found. What monitoring is ordered on admission?", "Telemetry", ["MUGA", "Bubble study", "Implantable monitor first"], "Unexplained syncope is a telemetry indication."),
    F(25, "A hospitalized patient is loaded on amiodarone for AF. What monitoring do you order?", "Telemetry", ["Event monitor mailed home", "MUGA", "No monitoring"], "Evaluating a therapeutic intervention is a telemetry indication."),
    F(26, "A patient has daily dizzy spells and palpitations. Which outpatient monitor do you start with?", "24-48 hour Holter", ["Implantable monitor", "TEE", "MUGA"], "Daily symptoms are likely to be caught in 24-48 hours."),
    F(27, "A patient with weekly palpitations had a normal 48-hour Holter. What next?", "30-day event monitor", ["Repeat the Holter", "TEE", "MUGA"], "An event monitor covers 2-4 weeks, long enough to catch weekly symptoms."),
    F(27, "A patient's event monitor came back with few recordings because she kept taking it off. What drawback is this?", "Discomfort and poor compliance", ["Radiation", "Esophageal injury", "Insurance denial for an implant"], "The slide lists discomfort and patient compliance as event monitor problems."),

    /* LO 10 */
    F(28, "A 70-year-old has syncope twice a year, with negative telemetry, Holter and event monitor. What next?", "Implantable monitor", ["Another Holter", "TEE", "MUGA"], "Unexplained syncope with rare episodes is an indication for an implantable monitor."),
    F(28, "A patient had a stroke with no cause found and you suspect silent AF. Which monitor runs up to 3 years?", "Implantable monitor", ["Holter", "Telemetry", "Event monitor"], "Cryptogenic stroke is an implantable monitor indication, and it records up to 3 years."),
    F(28, "A patient's implantable monitor has been in for 3 years. What happens now?", "It is explanted", ["It is left forever", "It is recharged through the skin", "It turns into a pacemaker"], "The slide says the device needs to be explanted after three years.")
  ]);
})();
