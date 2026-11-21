/* Cardiac Surgery Apply final (Anna, 2026-11-21): whole-deck patient cases (who needs what, what went wrong, what to do).
   Separate from the Final test. Each case is tied to the slide that teaches it, every LO covered.
   F(slide, prompt, answer, [3 wrong], why). Ids "cardiac-surgery|apply|<i>": only append. */
(function () {
  "use strict";
  var F = SlideStudy.F;
  SlideStudy.apply("cardiac-surgery", [
    /* Intro */
    F(10, "A student asks why early bypass attempts killed patients even when the repair went well. What problem did the 1955 machine solve?", "Air bubbles from the oxygenator embolizing", ["Lack of anesthesia", "No way to suture", "No antibiotics"], "Lillehei and DeWall solved getting air bubbles out of the oxygenator."),
    F(11, "A 30-year-old with a large secundum ASD asks if it is \"heart surgery\". Is ASD repair on the lecture's list?", "Yes, repair of ASD or VSD is a cardiac surgery", ["No, only CABG counts", "Only in children", "Only if done by catheter"], "Repair of a patent ASD or VSD is on the list."),

    /* LO 1 */
    F(12, "A STEMI patient is 3 hours from the nearest cath lab. Which of the three invasive interventions can be given locally?", "Fibrinolysis with tPA", ["CABG", "PCI with a drug-eluting stent", "Valve replacement"], "tPA is the intervention that doesn't need a cath lab or OR."),
    F(13, "A 58-year-old's angina is well controlled on a beta blocker and nitrate, and he has had no events. Is an invasive approach needed now?", "Not yet: medical management hasn't failed and there is no acute event", ["Yes, everyone gets CABG", "Yes, PCI immediately", "Yes, tPA"], "Invasive therapy is for failed medical management or an acute event."),
    F(14, "A cardiologist and surgeon debate stenting versus surgery for a frail 82-year-old. What decides it?", "Risk stratification of surgery against continued medical care", ["The patient's favorite doctor", "Whichever is faster", "The LDL"], "It is about balancing risks using population statistics."),

    /* LO 2 */
    F(15, "A 72-year-old is having isolated CABG and asks about his long-term survival. Which calculator fits?", "ASCERT", ["CHA2DS2-VASc", "Ambler", "SYNTAX I"], "ASCERT estimates long-term survival for over-65 isolated CABG."),
    F(15, "A patient needs aortic valve replacement plus CABG in London. Which risk model was built for this?", "Ambler", ["ASCERT", "APACHE", "CHADS2"], "Ambler covers valve surgery with or without CABG in Great Britain and Ireland."),
    F(16, "Two patients have three-vessel disease. One has long, calcified, tortuous lesions with a total occlusion. Who has the higher SYNTAX I score?", "The one with calcified, tortuous lesions and a total occlusion", ["The other one", "They are equal", "SYNTAX doesn't score anatomy"], "Calcification, tortuosity, length and occlusion all raise SYNTAX I."),
    F(17, "Two patients have identical angiograms, but one is 78 with COPD, CKD and an EF of 30%. Which score separates them?", "SYNTAX II", ["SYNTAX I", "TIMI", "HEART"], "SYNTAX II adds age, renal function, LVEF and COPD."),
    F(19, "A 64-year-old has 90% stenoses of the RCA and circumflex; the LAD is clean. Medical therapy has failed. What is favored?", "PCI", ["CABG", "Transplant", "tPA"], "1-2 vessel disease without the proximal LAD favors PCI."),
    F(19, "A diabetic has three-vessel disease with a SYNTAX score of 34. Medical therapy has failed. What is favored?", "CABG", ["PCI", "No treatment", "tPA"], "Three-vessel disease with SYNTAX ≥23 favors CABG."),
    F(19, "A patient has left main disease with a SYNTAX score of 18. Is PCI an option?", "Yes, with SYNTAX under 22 PCI is a reasonable alternative", ["No, never with left main", "Only tPA", "Only transplant"], "Left main favors CABG except when the SYNTAX score is under 22."),
    F(18, "A patient's SYNTAX score is 50. What does the mortality curve suggest about his 4-year risk?", "High, about 30%", ["Under 1%", "About 3%", "Zero"], "The curve shows 31.5% mortality at 50 points."),

    /* LO 3 */
    F(21, "A cath shows a 60% left main stenosis in a patient with angina. What is the indication?", "CABG, since left main over 50% is an indication", ["Medical therapy only", "PCI of a small branch", "No action"], "Left main occlusion over 50% is a CABG indication."),
    F(21, "A patient has two-vessel disease including an 85% proximal LAD lesion. What is indicated?", "CABG", ["Nothing", "Watchful waiting", "tPA only"], "Two-vessel disease with proximal LAD involvement is a CABG indication."),
    F(21, "A survivor of sudden cardiac arrest is found to have VT caused by ischemia and multivessel CAD. What is indicated?", "CABG to treat the ischemia", ["No intervention", "A statin only", "A pacemaker only"], "Survivors with ischemia-mediated VT are a CABG indication."),
    F(22, "Two days after an MI a patient develops a loud murmur and flash pulmonary edema from papillary muscle rupture. What is needed?", "Emergent surgery for acute valvular injury", ["Elective CABG in a month", "A stress test", "More aspirin"], "Acute valvular injury is a mechanical failure needing emergent surgery."),
    F(22, "A STEMI patient received tPA but has persistent ST elevation and pain. Rescue PCI also failed. What next?", "Emergent CABG", ["Repeat tPA", "Discharge", "Outpatient echo"], "Acute ischemia with failed PCI or fibrinolysis is an emergent CABG indication."),
    F(20, "A cath shows a blocked posterior descending artery. Which main artery most likely feeds it?", "The right coronary artery", ["The LAD", "The diagonal", "The left marginal"], "The anatomy diagram shows the PDA arising from the RCA."),

    /* LO 4-5 */
    F(26, "During CABG, the perfusionist reports flow of 1.5 L/min at normal temperature. What is wrong?", "Flow is below the 2.2-2.4 L/min target", ["Flow is too high", "Nothing", "Pressure is too high"], "Target flow on CPB is 2.2-2.4 L/min."),
    F(26, "The CPB pressure reads 50 mm Hg. How does this compare with the target?", "Too low; the target is 65-100 mm Hg", ["Perfect", "Too high", "Pressure doesn't matter"], "The slide gives a target pressure of 65-100 mm Hg."),
    F(27, "The surgeon cools the patient from 37°C to 27°C. About how much does oxygen consumption fall?", "About 50%", ["About 10%", "About 90%", "It rises"], "Oxygen use falls about 50% for each 10°C drop."),
    F(27, "The surgeon needs the heart to stop so he can sew a graft. What is infused into the coronaries?", "Cold potassium-rich cardioplegia", ["Calcium chloride", "Epinephrine", "Heparin alone"], "Cardioplegia is a potassium-rich solution that arrests the heart."),
    F(27, "A patient has diffuse CAD and aortic insufficiency. Which cardioplegia route spreads better and doesn't need a competent aortic valve?", "Retrograde cardioplegia", ["Antegrade only", "IV potassium", "Oral potassium"], "The notes say retrograde cardioplegia suits diffuse CAD and doesn't depend on the aortic valve."),
    F(24, "During bypass the blood level in the reservoir drops. Which part of the machine holds the drained blood?", "The reservoir", ["The oxygenator", "The vent", "The arterial pump"], "Drained blood collects in the reservoir before oxygenation."),

    /* LO 6 */
    F(35, "A 60-year-old needs a graft to the LAD and wants the one most likely to last. What do you pick?", "Left internal thoracic artery", ["Saphenous vein", "Radial artery", "Cephalic vein"], "LITA has the best patency, 95% at 5 years."),
    F(31, "A patient had CABG with vein grafts 8 years ago and now has angina again. Why?", "Saphenous vein grafts occlude at 4-5% per year after year 7", ["Arterial grafts always fail at 8 years", "His grafts are permanent", "Angina is unrelated to grafts"], "Late SVG occlusion speeds up to 4-5%/year from year 7."),
    F(31, "Two weeks after CABG, a vein graft is found occluded. How unusual is this?", "Not rare: about 10% of SVGs occlude in the first 30 days", ["It never happens", "It happens to 90%", "Only arterial grafts do this"], "Early occlusion within 30 days happens in about 10% of SVGs."),
    F(34, "A surgeon plans a four-graft CABG using only saphenous veins. What does the lecture recommend?", "Include at least one arterial graft", ["All veins is ideal", "Use no grafts", "Use the radial for all"], "At least one arterial graft should be placed in each patient."),
    F(35, "A surgeon wants two arterial grafts. Which pair gives the better result?", "Left and right ITA", ["LITA and radial artery", "Two saphenous veins", "Radial and saphenous"], "L and R ITA beats LITA plus radial for two arterial grafts."),
    F(44, "An obese diabetic is planned for CABG with both ITAs. What wound risk should you weigh?", "Sternal devascularization and poor healing", ["Leg compartment syndrome", "Radial nerve palsy", "None"], "Using both ITAs devascularizes the sternum."),

    /* LO 7 */
    F(38, "A 70-year-old for CABG has a pre-op hemoglobin of 8.9. How does this affect his risk?", "It predicts post-op MI, revascularization or death", ["It lowers his risk", "It has no effect", "It only affects the leg wound"], "Low pre-op hemoglobin is a listed predictor."),
    F(38, "Which patient has the most predictors of a bad CABG outcome?", "A smoker on dialysis having emergency reoperation", ["A non-smoker having elective first CABG", "A healthy 50-year-old", "A patient with normal kidneys and no diabetes"], "Smoking, dialysis, emergency and reoperation are all listed predictors."),
    F(40, "A CABG candidate has a creatinine of 2.1 and pulmonary hypertension. What do these predict?", "Higher mortality", ["Lower mortality", "Better graft patency", "Nothing"], "Creatinine 1.5-2.5 and pulmonary hypertension are predictors of mortality."),
    F(40, "A CABG candidate has severe carotid disease and an aortic aneurysm. How does this affect his risk?", "Atherosclerosis elsewhere predicts higher mortality", ["It lowers risk", "It has no effect", "It only affects the legs"], "Carotid, cerebrovascular and aortic disease are listed predictors."),
    F(39, "A patient asks his chance of being alive one year after CABG. What does the slide say about 1-year mortality?", "About 8%", ["About 0.1%", "About 23%", "About 50%"], "1-year mortality is 8.1%."),
    F(42, "Six weeks after CABG, a patient has restarted smoking and stopped his statin and aspirin. What do you tell him?", "Prevention still matters; stop smoking and restart lipid and antiplatelet therapy", ["The bypass cured him", "Only the aspirin matters", "Nothing can help now"], "Continued risk factor reduction after CABG makes a difference."),

    /* LO 8 */
    F(47, "Two days after CABG a patient's monitor shows an irregularly irregular rhythm at 140. What is it most likely?", "Atrial fibrillation", ["Normal sinus rhythm", "Third-degree heart block", "Ventricular fibrillation"], "AF is the first dysrhythmia listed after CABG."),
    F(48, "After CABG a patient is hypotensive with warm extremities, high cardiac output and low SVR. What is it?", "Vasodilatory shock", ["Excessive afterload", "Tamponade", "Hypovolemia from bleeding"], "Vasodilatory shock means low SVR."),
    F(48, "After CABG a patient has hypotension, rising CVP and muffled heart sounds after chest tube output suddenly stopped. What do you suspect?", "Tamponade", ["Vasodilatory shock", "Hypertension", "Atelectasis"], "Tamponade is on the cardiac failure list (standard teaching for the bedside signs)."),
    F(49, "Day 2 after CABG a patient has fever, low oxygen and decreased breath sounds at the bases. Which tool helps most?", "Incentive spirometry and a CXR to look for atelectasis or pneumonia", ["A stress test", "A lipid panel", "An upper GI series"], "Atelectasis and pneumonia are listed pulmonary complications, and the CXR checks for them."),
    F(50, "After CABG a patient's creatinine is rising and an attending wants a contrast CT. What do you advise?", "Avoid contrast if possible; it is nephrotoxic", ["Give double contrast", "Add an aminoglycoside", "Start an ACE inhibitor"], "Contrast, aminoglycosides and ACE inhibitors are listed nephrotoxins to avoid."),
    F(45, "The morning after CABG a patient can't move his right arm and has a facial droop. Which complication group is this?", "Neurologic dysfunction (stroke)", ["Sternal wound", "Leg wound", "Renal dysfunction"], "Neurologic dysfunction such as stroke is a listed complication."),
    F(46, "A CABG patient has a high fever and widespread capillary leak right after surgery without infection. What bypass-related cause fits?", "The inflammatory response to CPB", ["Sternal devascularization", "Saphenous wound infection", "Atelectasis"], "CPB triggers an inflammatory response, listed as a surgery-related cause."),

    /* LO 9 */
    F(51, "A post-CABG patient's glucose is 290. How often should sugars be checked?", "Every 6 hours", ["Once a day", "Once a week", "Not needed"], "Blood sugar is checked every 6 hours after CABG."),
    F(51, "After CABG a patient has new ST depression on the monitor. Which test answers \"ischemic changes?\"", "A 12-lead ECG", ["A CXR", "A glucose", "A platelet count"], "The ECG checks for ischemic changes."),
    F(52, "You need continuous beat-to-beat BP on a post-CABG patient on pressors. Which line?", "Arterial line", ["Peripheral IV", "Foley", "Nasogastric tube"], "The arterial line gives continuous blood pressure."),
    F(52, "You need to know whether a hypotensive post-CABG patient has low SVR or low cardiac output. Which device?", "Swan-Ganz catheter", ["Pulse oximeter", "Telemetry", "Foley"], "The Swan-Ganz gives cardiac output and SVR."),
    F(55, "Eight hours after CABG: BP 75/palp, HR 130, urine dropping, and chest tube output is high. What is the treatment direction?", "Volume and blood for hypovolemia from bleeding", ["Nitroprusside", "Diuretics", "Beta blocker bolus"], "Low BP with tachycardia fits hypovolemia in the notes; high chest tube output means bleeding."),
    F(56, "Eight hours after CABG the patient is agitated and in pain with BP 180/110. What do you check before treating?", "Whether pain or waking up is driving the BP, plus CVP, cardiac output and SVR", ["Lipid panel", "Thyroid tests", "Nothing, just give fluids"], "The notes ask about pain, wakefulness and the Swan-Ganz numbers."),
    F(56, "After checking for pain, a post-CABG patient's BP stays 180/110. Which drug do the notes give?", "Nitroprusside", ["Normal saline", "Dobutamine", "Atropine"], "The notes treat post-CABG hypertension with nitroprusside."),
    F(57, "Eight hours after CABG: BP 75/palp, HR 90, low urine, normal chest tube output, high CVP. Which test and diagnosis fit?", "Echo for cardiac dyskinesia", ["CT head for stroke", "Fluids for hypovolemia", "Nitroprusside for HTN"], "Low BP without tachycardia and no bleeding points to a weak pump, so get an echo."),
    F(54, "The day after extubation a CABG patient wants to stay in bed. What does the lecture recommend?", "Spirometry and ambulation", ["Strict bed rest", "Reintubation", "Sedation"], "Spirometry and ambulation are the after-extubation steps.")
  ]);
})();
