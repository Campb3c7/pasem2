/* Coronary Angiogram Apply final (Anna, 2026-11-21): short patient cases across the whole deck (what is it, what to order, what to do).
   F(slide, prompt, answer, [3 wrong], why). Ids "coronary-angiogram|apply|<i>": only append. */
(function () {
  "use strict";
  var F = SlideStudy.F;
  SlideStudy.apply("coronary-angiogram", [
    /* LO 1 */
    F(3, "A cardiologist needs to know exactly which coronary is blocked and how badly before deciding on stent or bypass. Which test?", "Coronary angiogram", ["Calcium score", "Exercise ECG", "Event monitor"], "Angiography is the gold standard and maps each lesion for treatment planning."),

    /* LO 3 */
    F(4, "A 64-year-old on aspirin, a beta blocker, a long-acting nitrate and ranolazine still gets angina walking to the mailbox. What next?", "Coronary angiogram", ["Add a calcium score", "Holter monitor", "Repeat stress test in 2 years"], "Lifestyle-limiting angina despite maximal therapy is a cath indication."),
    F(4, "A treadmill test shows 3 mm ST depression at stage 1 and a BP drop. What next?", "Coronary angiogram", ["Calcium score", "Reassure", "Coronary CTA in a year"], "High-risk noninvasive findings send the patient to cath."),
    F(4, "A 50-year-old has a new EF of 25% with no known cause. Which test looks for an ischemic cause?", "Coronary angiogram", ["Event monitor", "Bubble study", "Calcium score"], "New-onset cardiomyopathy is a cath indication."),
    F(5, "A 58-year-old has 2 mm ST elevation in V1-V4. Which test is the initial test?", "Emergent coronary angiogram", ["Exercise stress test", "Coronary CTA", "Calcium score"], "STEMI is an ACS indication for going straight to angiography."),
    F(5, "A patient has troponin rising with ST depression and ongoing pain. Which test?", "Coronary angiogram", ["Treadmill test", "Calcium score", "Holter"], "NSTEMI is on the initial-test list."),
    F(5, "A man is shocked out of VF by bystanders and arrives with ROSC. What test is ordered first for the coronaries?", "Coronary angiogram", ["Stress echo", "Calcium score", "CTA after discharge"], "Sudden cardiac arrest is an initial-test indication for angiography."),

    /* LO 4 */
    F(6, "A patient scheduled for elective cath has a creatinine that tripled this week. What do you do?", "Delay the cath and treat the kidney injury", ["Proceed with extra contrast", "Switch to coronary CTA with contrast", "Give metformin"], "Acute renal failure is a relative contraindication because contrast can worsen it."),
    F(6, "A patient with fever of 39°C and no known source is scheduled for elective cath. What do you do?", "Find and treat the infection first", ["Proceed now", "Give contrast faster", "Cancel all future testing"], "Unexplained fever may be infection, a relative contraindication."),
    F(6, "A patient on digoxin has nausea, yellow vision and new bigeminy before an elective cath. What do you do?", "Treat digitalis toxicity before the cath", ["Proceed with the cath", "Give more digoxin", "Use the radial artery and proceed"], "Digitalis intoxication is a relative contraindication."),
    F(6, "A patient with gasping orthopnea and crackles to the apices is scheduled for elective cath. What first?", "Treat the pulmonary edema first", ["Lay him flat and proceed", "Do a calcium score", "Give contrast"], "Decompensated HF or acute pulmonary edema is a relative contraindication."),
    F(6, "A 95-year-old with metastatic cancer and weeks to live has stable angina. Is cath reasonable?", "Usually no, illness drastically shortens life", ["Yes, always", "Yes, with a Swan-Ganz", "Only with a calcium score first"], "Severe illness that drastically shortens life is a relative contraindication."),

    /* LO 5 */
    F(7, "A patient on apixaban is booked for elective cath. What do you tell her about the anticoagulant?", "Hold it before the procedure", ["Double it the night before", "Take it the morning of", "Switch to warfarin"], "Anticoagulation is held before the cath."),
    F(7, "The night before cath, a patient asks if he can have breakfast. What do you say?", "No, nothing to eat or drink after midnight", ["Yes, a full breakfast", "Only coffee with cream", "Only a large meal at 6 AM"], "The pre-op instructions say NPO after midnight."),
    F(7, "A diabetic asks when to restart metformin after Monday's cath. What do you say?", "Wednesday, 48 hours after", ["Monday evening", "Next month", "Never"], "Metformin is held the day of and for 48 hours afterward."),

    /* LO 2 & 7 */
    F(10, "A patient wants to walk soon after his cath and avoid hours of groin pressure. Which access site fits?", "Radial", ["Femoral", "Subclavian", "Brachial"], "Radial access is closed with a TR band at the wrist instead of a groin sheath and bedrest (standard teaching for the benefit)."),
    F(11, "During femoral access, the needle enters 6 cm below the inguinal ligament. What risk rises?", "Pseudoaneurysm", ["Retroperitoneal bleed", "Stroke", "Contrast allergy"], "Too low a stick risks pseudoaneurysm."),
    F(14, "A cath shows a 60% circumflex lesion in a patient with stable symptoms. What is usually done?", "Medical therapy, no stent", ["Emergent bypass", "Stent always", "Repeat cath tomorrow"], "Lesions under 70% are not flow-limiting and rarely need revascularization."),
    F(14, "A cath shows a 95% proximal LAD lesion. What is usually done?", "PCI with a stent", ["Nothing", "Calcium score", "Event monitor"], "A tight flow-limiting lesion is treated with PCI."),

    /* after the cath */
    F(16, "Femoral cath finished at noon, last heparin at 11:30. When is the sheath likely pulled?", "About 3:30 PM", ["12:05 PM", "Tomorrow", "Never, it stays"], "The sheath waits about 4 hours after the last heparin."),
    F(16, "The femoral sheath was pulled at 4 PM. When can the patient get up?", "About 10 PM, after 6 hours of bedrest", ["Right away", "In 2 days", "At 4:30 PM"], "Bedrest is 6 hours after sheath removal."),
    F(19, "A femoral cath patient developed a groin hematoma during the case. Should a Mynx closure device be used?", "No, avoid closure devices with a hematoma", ["Yes, always", "Yes, two of them", "Only if the patient is fasting"], "The notes say to avoid a closure device if a hematoma formed."),
    F(20, "After radial cath, the nurse sees oozing under the wristband. What does she adjust?", "The TR band's balloon pressure", ["The femoral clamp", "The Mynx sealant", "The Swan-Ganz"], "The TR band controls radial bleeding with an inflatable balloon."),

    /* LO 6 */
    F(22, "During PCI the patient suddenly cannot move his right arm and speak. What happened?", "Stroke", ["Retroperitoneal bleed", "AV fistula", "Contrast nephropathy"], "Stroke is a listed complication at about 0.4% during PCI."),
    F(22, "Weeks after femoral cath, a patient has a continuous groin bruit and leg swelling. What is it?", "AV fistula", ["Retroperitoneal hemorrhage", "Acute dissection", "Contrast allergy"], "An AV fistula is a late vascular complication with a continuous bruit (standard teaching for the picture)."),
    F(22, "Right after the catheter passes, a patient's leg goes cold and pale with no pulses. What happened?", "Acute thrombosis or distal embolization", ["Pseudoaneurysm", "AV fistula", "Contrast allergy"], "Acute thrombosis or distal embolization cuts off flow to the limb."),
    F(22, "Right after groin access, a firm, tender swelling grows at the site. What is it?", "Acute hematoma", ["Late AV fistula", "Stroke", "Calcium deposit"], "Hematoma or hemorrhage is an acute vascular complication."),
    F(22, "During coronary dye injection the patient goes into VT. Which listed complication is this?", "Arrhythmia", ["Contrast allergy", "AV fistula", "Pseudoaneurysm"], "Arrhythmia is on the cath complication list."),

    /* LO 8 */
    F(23, "A patient who had hives with a past CT scan is booked for cath at 7 AM. What prep is ordered?", "Prednisone 50 mg at 6 PM, 12 AM and 6 AM, plus Benadryl 50 mg at 6 AM", ["Nothing", "Benadryl after the procedure only", "Epinephrine 1 mg before"], "Prednisone at 13, 7 and 1 hour before and Benadryl 1 hour before is the protocol."),
    F(23, "A patient with a contrast allergy arrives for cath having missed the 13-hour prednisone dose. What protocol was not followed?", "The 3-dose prednisone premedication", ["The metformin hold", "The NPO rule", "The INR check"], "Contrast allergy prep requires prednisone at 13, 7 and 1 hour before."),

    /* right heart cath */
    F(25, "A septic patient's volume status is unclear and fluids aren't helping. Which catheter measures the pressures directly?", "Swan-Ganz (pulmonary artery) catheter", ["Coronary angiogram catheter", "Foley catheter", "TR band"], "Unknown volume status in shock is a right heart cath indication."),
    F(25, "A patient with suspected pulmonary hypertension on echo needs it confirmed with direct pressures. Which procedure?", "Right heart cath", ["Coronary CTA", "Calcium score", "Holter"], "Suspected pulmonary artery hypertension is a right heart cath indication."),
    F(24, "A Swan-Ganz shows a low SvO2 and low cardiac output. What does this suggest?", "The heart isn't delivering enough oxygen, as in cardiogenic shock", ["Normal physiology", "Overhydration only", "Contrast allergy"], "Low CO with low mixed venous saturation means tissues are extracting more oxygen from too little flow (standard teaching)."),

    /* LO 9 */
    F(27, "A 48-year-old at intermediate risk has an equivocal nuclear stress test. Which noninvasive test can look at the coronaries next?", "Coronary CT angiogram", ["Calcium score only", "Holter", "Bubble study"], "Intermediate risk with an equivocal stress test is the CTA indication."),
    F(27, "A teen athlete fainted on the field and a coronary anomaly is suspected. Which test images it noninvasively?", "Coronary CT angiogram", ["Calcium score", "TTE only", "Event monitor"], "CTA is useful for known or suspected congenital coronary anomalies."),
    F(27, "Before coronary CTA, a patient's heart rate is 88. What is given?", "A beta blocker", ["Atropine", "Dobutamine", "Epinephrine"], "A beta blocker brings the rate to 60-70 bpm for clear images."),
    F(29, "A patient with severe COPD cannot hold his breath at all. Which coronary test will be limited?", "Coronary CT angiogram", ["Coronary angiogram", "TTE", "Holter"], "Inability to hold the breath for 5 seconds limits CTA."),
    F(28, "A coronary CTA reads 'possible 70% stenosis in a small diagonal branch.' How much weight does that carry?", "Moderate, since PPV outside left main and grafts is only 60-84%", ["Certain, PPV is 100%", "None, CTA can't see branches", "It proves left main disease"], "CTA overcalls more often in smaller arteries."),

    /* LO 10 */
    F(30, "A 55-year-old with no symptoms and borderline risk wants to know if a statin is worth it. Which test can help?", "Coronary calcium score", ["Coronary angiogram", "TEE", "Swan-Ganz"], "Calcium scoring screens asymptomatic low-intermediate and intermediate risk patients."),
    F(31, "An asymptomatic patient's calcium score is 0. What do you tell him?", "No identifiable coronary disease", ["Severe disease", "He needs a cath", "Moderate disease"], "A score of 0 means no identifiable disease."),
    F(31, "A calcium score comes back 250. How is it read?", "Moderate disease", ["Mild disease", "Severe disease", "No disease"], "100-399 is moderate disease."),
    F(30, "A patient's calcium score is 800 and he asks if an artery is 90% blocked. What is the honest answer?", "The score can't say how tight any stenosis is", ["Yes, the LAD is 90% blocked", "No, nothing is blocked", "Only a Holter can tell"], "Calcium scoring measures plaque burden, not stenosis severity.")
  ]);
})();
