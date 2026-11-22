/* Vignettes, Coronary Angiogram (Sillaman; no application posted): short "what do you do" cases on every LO (when to
   cath, relative contraindications, held meds, access and post-cath care, complications, contrast allergy prep, right
   heart cath, CCTA, calcium score). See data/vignettes.js. */
(function () {
  "use strict";
  var V = Vignettes.V;
  Vignettes.lecture({
    id: "coronary-angiogram", title: "Coronary Angiogram", short: "Cath", group: "Cardiac Testing",
    concepts: {
      what: "What it is and the gold standard (LO 1, 2)",
      ind: "Indications (LO 3)",
      ci: "Contraindications (LO 4)",
      meds: "Meds held before and after (LO 5)",
      access: "Access sites and post-cath care (LO 7)",
      comp: "Complications (LO 6)",
      allergy: "Contrast dye allergy prep (LO 8)",
      rhc: "Right heart cath",
      ccta: "Coronary CT angiogram (LO 9)",
      cac: "Coronary calcium score (LO 10)"
    },
    qs: [
      /* LO 1, 2 */
      V("what", "Test to order", 3, "A 61-year-old's stress test and CCTA disagree about whether he has a significant LAD lesion. Which test is the gold standard to settle it?", "Coronary angiogram", ["Repeat CCTA", "Calcium score", "Stress echo"], "Invasive coronary angiography is the gold standard for coronary atherosclerosis."),
      V("what", "Classify", 14, "A 58-year-old's cath shows a 50% mid-RCA lesion and no other disease. She has no angina. Is this lesion likely flow-limiting?", "No: lesions under 70% usually aren't", ["Yes: any lesion over 30% limits flow", "Yes: every RCA lesion is significant", "Only if the lesion is calcified"], "Stenoses below about 70% are usually not flow-limiting outside the left main."),

      /* LO 3 */
      V("ind", "Test to order", 4, "A 64-year-old's angina still limits her gardening despite maximal tolerated medical therapy. Next step?", "Coronary angiogram", ["Repeat stress test", "Calcium score", "More nitrates only"], "Lifestyle-limiting angina despite maximal therapy is an indication for cath."),
      V("ind", "Test to order", 4, "A 60-year-old's treadmill test shows 3 mm ST depression at 3 minutes with a drop in BP. Next step?", "Coronary angiogram", ["Repeat the treadmill", "CCTA in a year", "Calcium score"], "High-risk stress test features go straight to angiography."),
      V("ind", "Test to order", 5, "A 55-year-old was resuscitated from a sudden cardiac arrest in a restaurant. Which is the initial test to look for coronary disease?", "Coronary angiogram", ["Exercise stress test", "Calcium score", "Holter monitor"], "Survivors of sudden cardiac arrest go straight to angiography."),
      V("ind", "Test to order", 5, "A 67-year-old with chest pressure at rest has ST depression and a rising troponin. Which test is used initially?", "Coronary angiogram", ["Exercise stress test", "Coronary calcium score", "CCTA as an outpatient"], "In NSTEMI, angiography is the initial test, not a stress test."),
      V("ind", "Test to order", 5, "A 59-year-old with diabetes has new symptomatic heart failure with an EF of 28%. Which test looks for an ischemic cause?", "Coronary angiogram", ["Holter monitor", "Calcium score", "Bubble study"], "New HF with reduced EF is evaluated for CAD with angiography."),

      /* LO 4 */
      V("ci", "Next step", 6, "A 70-year-old is scheduled for an elective cath but has black tarry stools and a hemoglobin that dropped from 13 to 9. What do you do?", "Delay it: active GI bleeding", ["Proceed: bleeding doesn't matter", "Proceed with double heparin", "Proceed and add clopidogrel"], "Active GI bleeding is a relative contraindication because the cath needs anticoagulation."),
      V("ci", "Next step", 6, "A 72-year-old due for an elective cath has a creatinine that jumped from 1.0 to 2.6 this week. What do you do?", "Postpone it: acute renal failure", ["Proceed with extra contrast", "Proceed and add an NSAID", "Proceed and skip hydration"], "Acute renal failure is a relative contraindication to elective angiography."),
      V("ci", "Next step", 6, "A 69-year-old scheduled for an elective cath arrives in acute pulmonary edema and can't lie flat. What do you do?", "Treat the HF first, then cath when stable", ["Lay him flat and proceed with the cath", "Give a large IV fluid bolus and proceed", "Cancel all cardiac testing for good"], "Decompensated HF is a relative contraindication to an elective cath."),
      V("ci", "Next step", 6, "An 80-year-old says she would refuse any stent or bypass no matter what the cath shows. How does that affect the plan?", "It is a relative contraindication", ["It doesn't matter at all", "It is an absolute indication", "It makes a cath mandatory"], "If the result won't change treatment, the risks of cath aren't justified."),
      V("ci", "Next step", 6, "A 76-year-old on digoxin has nausea, yellow vision and a level of 3.2 the day of his elective cath. What do you do?", "Delay it: digitalis toxicity", ["Proceed and give more digoxin", "Proceed and skip the EKG", "Proceed with no monitoring"], "Digitalis intoxication is a relative contraindication to cath."),
      V("ci", "Next step", 6, "A 66-year-old due for an elective cath has a potassium of 2.6 with muscle weakness. What do you do?", "Correct the potassium first", ["Proceed with the cath now", "Give furosemide and proceed", "Proceed and recheck in a week"], "Severe symptomatic electrolyte imbalance is a relative contraindication."),

      /* LO 5 */
      V("meds", "Next step", 7, "A 63-year-old on warfarin for AF is scheduled for an elective cath. His INR is 2.4. What must happen first?", "Hold warfarin until the INR is under 1.5", ["Proceed: an INR of 2.4 is fine", "Double the warfarin dose", "Give vitamin K and proceed today"], "Anticoagulation is held before cath until the INR is under 1.5."),
      V("meds", "Next step", 7, "A 61-year-old with diabetes on metformin, lisinopril and furosemide has a cath tomorrow. What should he do with his medicines?", "Hold metformin, ACEi and diuretic", ["Take all of them as usual", "Double his metformin dose", "Stop only his daily aspirin"], "ACE inhibitors, ARBs and diuretics may be held, and metformin is held the day of and 48 hours after."),
      V("meds", "Next step", 7, "A 58-year-old is scheduled for a cath at 8 AM tomorrow and asks about breakfast. What do you tell him?", "Nothing to eat or drink after midnight", ["A light breakfast is fine at 6 AM", "Coffee only, with no food at all", "A large breakfast for the energy"], "Patients are NPO after midnight before a cath."),

      /* LO 7 */
      V("access", "Complication", 11, "A 67-year-old's femoral puncture was made well above the inguinal ligament. Which complication is he at higher risk for?", "Retroperitoneal bleeding", ["AV fistula only", "Radial occlusion", "Pneumothorax"], "A high stick above the ligament can bleed into the retroperitoneum."),
      V("access", "Complication", 11, "A 60-year-old's femoral stick was made more than 3 cm below the inguinal ligament. Which complication is more likely?", "Pseudoaneurysm", ["Retroperitoneal bleed", "Radial occlusion", "Aortic dissection"], "A low stick into a smaller vessel raises the risk of pseudoaneurysm."),
      V("access", "Next step", 16, "A 64-year-old had a femoral cath with heparin, last dosed at 10 AM. When should the sheath come out?", "About 2 PM, 4 hours after the heparin", ["Right away at 10 AM, with the heparin", "Tomorrow morning, after a full night", "After 24 hours of keeping it in place"], "The femoral sheath is removed about 4 hours after the last heparin dose."),
      V("access", "Next step", 16, "The femoral sheath was just pulled from a 66-year-old and hemostasis is achieved. How long is he on bedrest?", "6 hours", ["30 minutes", "24 hours", "3 days"], "Bedrest is 6 hours after femoral sheath removal."),
      V("access", "Next step", 17, "A 55-year-old who had a cath yesterday asks if he can help his son move furniture this weekend. What do you advise?", "No lifting over 10 lbs for a week", ["He can lift anything right away", "No lifting for 6 months", "Only lifting with his right arm"], "Avoid lifting over 10 pounds and strenuous exercise for a week after cath."),
      V("access", "Next step", 18, "A 70-year-old on DAPT and heavy anticoagulation had a large femoral sheath. Which hemostasis method fits?", "A mechanical clamp", ["A TR band", "No pressure", "Ice alone"], "A mechanical clamp is used for large sheaths and heavily anticoagulated patients."),
      V("access", "Next step", 19, "During a femoral cath, a 68-year-old develops a groin hematoma. Should the team use a Mynx closure device?", "No: avoid it when a hematoma has formed", ["Yes: the device treats the hematoma", "Yes, and use two devices to be safe", "Only if the patient is also on DAPT"], "Closure devices are avoided when a hematoma has formed."),
      V("access", "Next step", 20, "A 62-year-old had his cath through the right radial artery. What is used for hemostasis?", "A TR band", ["A mechanical clamp", "A Mynx device", "Six hours of bedrest"], "A TR band compresses the radial artery after radial access."),

      /* LO 6 */
      V("comp", "Diagnosis", 22, "The day after a femoral cath, a 69-year-old has a pulsatile groin mass with a bruit. Which complication?", "Pseudoaneurysm", ["Retroperitoneal bleed", "Arterial dissection", "Contrast reaction"], "A pulsatile mass with a bruit is a pseudoaneurysm, a late vascular complication."),
      V("comp", "Diagnosis", 22, "After a high femoral stick, a 73-year-old has hypotension, flank pain and a falling hemoglobin with no visible groin bleeding. Which complication?", "Retroperitoneal hemorrhage", ["Femoral pseudoaneurysm", "Femoral AV fistula", "Contrast allergic reaction"], "Hidden bleeding into the retroperitoneum causes shock without a groin hematoma."),
      V("comp", "Diagnosis", 22, "During contrast injection, a 57-year-old breaks out in hives, wheezes and drops her BP to 80/50. Which complication?", "Allergic reaction to iodine contrast", ["Vasovagal reaction from groin pain", "Retroperitoneal bleed from the stick", "Coronary dissection from the wire"], "Hives, bronchospasm and hypotension during injection are a contrast reaction."),
      V("comp", "Diagnosis", 22, "Two days after a cath, a 71-year-old diabetic's creatinine rose from 1.2 to 2.0 with no other cause. Which complication?", "Contrast-associated AKI", ["Retroperitoneal bleed", "Femoral pseudoaneurysm", "Periprocedural stroke"], "A creatinine rise within days of contrast is contrast-associated AKI."),
      V("comp", "What's happening", 22, "A 65-year-old is nervous about his cath and asks how often people die from it. What is the risk?", "About 0.1%", ["About 5%", "About 10%", "About 25%"], "Death from coronary angiography is rare, around 0.1%."),

      /* LO 8 */
      V("allergy", "Pick the drug", 23, "A 60-year-old with a prior contrast allergy has a cath scheduled at 1 PM. Which premedication fits?", "Prednisone 50 mg at 13, 7 and 1 h, plus diphenhydramine", ["One dose of prednisone right after the cath is done", "Epinephrine 1 mg IV just before the contrast injection", "Ibuprofen 400 mg the night before, with nothing else"], "Prednisone at 13, 7 and 1 hour plus diphenhydramine 50 mg 1 hour before."),
      V("allergy", "Classify", 6, "A 66-year-old had true anaphylaxis to contrast years ago and now needs a cath for unstable symptoms. How does the deck classify this history?", "A relative contraindication", ["An absolute contraindication", "Not a concern at all", "A reason to skip prep"], "Severe contrast allergy is a relative contraindication; premedicate and proceed if needed."),

      /* right heart cath */
      V("rhc", "Test to order", 25, "A 64-year-old in shock has unclear volume status after an echo and fluids, and you need wedge pressure and cardiac output. Which procedure?", "Right heart (Swan-Ganz) cath", ["Coronary angiogram", "Coronary CT angiogram", "Calcium score"], "A right heart cath measures wedge pressure and output directly."),
      V("rhc", "Test to order", 25, "A 47-year-old with exertional dyspnea has an echo suggesting pulmonary arterial hypertension. Which test confirms it?", "Right heart cath", ["Left heart cath", "Calcium score", "Holter monitor"], "Pulmonary hypertension is confirmed by measuring pressures with a right heart cath."),

      /* LO 9 */
      V("ccta", "Test to order", 27, "A 56-year-old with intermediate risk has an equivocal stress test and you want to see her coronaries noninvasively. Which test?", "Coronary CT angiogram", ["Calcium score", "Holter monitor", "MUGA scan"], "CCTA fits intermediate-risk patients with equivocal stress results."),
      V("ccta", "Next step", 27, "A 60-year-old is about to have a CCTA. Which drugs are given beforehand?", "Beta-blocker, nitroglycerin, IV contrast", ["Adenosine, aspirin and heparin", "Dobutamine, atropine and saline", "Prednisone, warfarin and furosemide"], "A beta-blocker slows the rate and nitro dilates the coronaries for sharp images."),
      V("ccta", "Test to order", 29, "A 67-year-old with AF at 95 and three prior stents needs his coronaries assessed. Why is CCTA a poor choice?", "A fast, irregular rate and stents limit images", ["CCTA can only image the left main artery", "Stents dissolve from the CT contrast", "CCTA needs a heart rate over 120"], "CCTA needs a slow, regular rhythm, and stents and calcium cause artifact."),
      V("ccta", "Test to order", 27, "A 17-year-old soccer player fainted during a game, and you suspect a congenital coronary anomaly. Which noninvasive test?", "Coronary CT angiogram", ["Calcium score", "Treadmill EKG", "MUGA scan"], "CCTA shows the course of anomalous coronary arteries."),
      V("ccta", "What's happening", 28, "A 52-year-old's CCTA shows no significant stenosis. How confident can you be that he has no significant CAD?", "Very: the NPV is 95-100%", ["Not at all: the NPV is 20%", "Only if a cath agrees later", "Only for the right coronary"], "A negative CCTA reliably rules out significant CAD."),

      /* LO 10 */
      V("cac", "Test to order", 30, "An asymptomatic 55-year-old at intermediate risk isn't sure about starting a statin. Which test can help decide?", "Coronary calcium score", ["Coronary angiogram", "Right heart cath", "Holter monitor"], "Calcium scoring is used for risk assessment in asymptomatic patients."),
      V("cac", "Classify", 31, "An asymptomatic 58-year-old's coronary calcium score is 250. How is it classified?", "Moderate disease", ["No identifiable disease", "Mild disease", "Severe disease"], "100-399 is moderate disease."),
      V("cac", "Classify", 31, "An asymptomatic 64-year-old's coronary calcium score is 520. How is it classified?", "Severe disease", ["Mild disease", "Moderate disease", "No identifiable disease"], "A score over 400 is severe disease."),
      V("cac", "Classify", 31, "An asymptomatic 50-year-old's coronary calcium score is 45. How is it classified?", "Mild disease", ["No identifiable disease", "Moderate disease", "Severe disease"], "1-99 is mild disease."),
      V("cac", "What's happening", 30, "A 61-year-old's calcium score is 380, and he asks whether that means one of his arteries is 90% blocked. What do you tell him?", "The score can't show how severe any stenosis is", ["Yes: a score of 380 means a 90% blockage", "Yes: it means three arteries are blocked", "No: a score of 380 rules out all plaque"], "Calcium scoring measures plaque burden, not the severity of a stenosis.")
    ]
  });
})();
