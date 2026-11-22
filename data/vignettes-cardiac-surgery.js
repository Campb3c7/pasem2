/* Vignettes, Cardiac Surgery (Gardner): short patient cases built on his Kahoot and the bold/yellow slide facts
   (go invasive or not, SYNTAX, who needs CABG, bypass and cardioplegia, conduits, who does badly, complications,
   the ICU calls). See data/vignettes.js. */
(function () {
  "use strict";
  var V = Vignettes.V;
  Vignettes.lecture({
    id: "cardiac-surgery", title: "Cardiac Surgery", short: "Surgery", group: "Cardiac Surgery",
    concepts: {
      inter: "Invasive interventions and when to go invasive (LO 1)",
      syntax: "SYNTAX I and II (LO 2)",
      who: "Who needs CABG: elective and emergent (LO 3)",
      cpb: "Cardiopulmonary bypass (LO 4)",
      plegia: "Cardioplegia and hypothermia (LO 5)",
      graft: "Conduits and patency (LO 6)",
      risk: "Outcomes and predictors of a poor result (LO 7)",
      comp: "Post-op complications and their management (LO 8)",
      icu: "ICU monitoring and the post-op calls (LO 9)"
    },
    qs: [
      /* LO 1 */
      V("inter", "Next step", 13, "A 64-year-old with stable two-vessel CAD has no angina on aspirin, a statin and a beta-blocker, with a normal EF. Should he go invasive?", "No: medical management hasn't failed", ["Yes: all CAD needs a procedure", "Yes: CABG for any two-vessel CAD", "Yes: fibrinolysis to clear plaque"], "You go invasive when medical management fails or there is an acute event."),
      V("inter", "Classify", 12, "A 70-year-old with an MI is treated in turn with amiodarone, tenecteplase, a drug-eluting stent and later a CABG. Which was NOT an invasive intervention?", "Amiodarone", ["Tenecteplase", "The stent", "The CABG"], "The three invasive interventions are fibrinolysis, PCI with DES and CABG."),
      V("inter", "Test to order", 15, "A surgeon wants to estimate a 72-year-old's short-term risk of dying after CABG before the family meeting. Which model fits?", "The STS risk score", ["The HEART score", "The TIMI score", "CHA2DS2-VASc"], "The STS model estimates short-term CABG risk from population data."),
      V("inter", "Next step", 13, "An 84-year-old frail woman with dialysis and severe COPD has multivessel CAD, and her angina is controlled on meds. What drives the surgery decision?", "The risk/benefit ratio", ["Only the number of vessels", "Only the patient's age", "Only the SYNTAX score"], "The decision to operate always comes down to risk versus benefit."),

      /* LO 2 */
      V("syntax", "Classify", 16, "A cardiologist scores a 66-year-old's angiogram for lesion length, tortuosity, calcification and a total occlusion. Which score is this?", "SYNTAX I", ["SYNTAX II", "STS score", "TIMI score"], "SYNTAX I grades the anatomy of the coronary lesions."),
      V("syntax", "What's happening", 17, "Two patients have the same coronary anatomy, but one is 82 with an EF of 30% and a creatinine of 2.4. Which score separates them?", "SYNTAX II, which adds patient factors", ["SYNTAX I, which grades only lesions", "The HEART score, for chest pain", "The TIMI score, for NSTEMI"], "SYNTAX II adds age, renal function and EF to the anatomy."),
      V("syntax", "What's happening", 18, "A 63-year-old's SYNTAX score went from 15 to 24 on a repeat cath. Why does that matter?", "Mortality rises fast in the low 20s", ["Scores under 30 never matter", "PCI is now always best", "Only scores over 50 count"], "The low 20s is the threshold where risk climbs and CABG is favored."),

      /* LO 3 */
      V("who", "Next step", 19, "A 67-year-old has three-vessel CAD with a SYNTAX score of 35 and angina despite meds. What should be recommended?", "CABG", ["PCI", "Lytics", "Meds only"], "Complex three-vessel disease with a high SYNTAX score favors CABG."),
      V("who", "Next step", 19, "A 61-year-old has a 60% left main stenosis and exertional angina. What should be recommended?", "CABG", ["PCI to the LAD only", "Medical therapy only", "Fibrinolysis"], "Left main disease of 50% or more is a magic number for CABG."),
      V("who", "Next step", 19, "A 58-year-old has two-vessel CAD that spares the proximal LAD, with angina despite meds and a normal EF. Which is favored?", "PCI", ["CABG", "Lytics", "Nothing"], "Two-vessel disease without the proximal LAD is usually treated with PCI."),
      V("who", "Next step", 19, "A 65-year-old has three-vessel CAD with a SYNTAX score of 18 and wants to avoid surgery. Is PCI reasonable?", "Yes: with a low score, PCI is reasonable", ["No: three vessels always need a CABG", "No: he needs fibrinolysis first", "Only if his EF is under 20%"], "With low SYNTAX scores, PCI is a reasonable alternative to CABG."),
      V("who", "Next step", 21, "A 60-year-old has a 75% proximal LAD lesion and a 70% circumflex lesion with angina despite meds. What does Gardner list?", "CABG: two vessels including proximal LAD", ["Meds only: two vessels are never surgical", "Lytics: the lesions are both fresh", "PCI only: CABG is for left main alone"], "Two-vessel disease with proximal LAD involvement is an indication for CABG."),
      V("who", "Next step", 21, "A 57-year-old survived a cardiac arrest from ischemia-driven VT and has multivessel CAD on cath. What does Gardner list?", "An indication for CABG", ["Medical therapy only", "A stress test first", "Fibrinolysis now"], "Surviving sudden death from ischemic VT with CAD is a CABG indication."),
      V("who", "Next step", 22, "A 66-year-old's PCI for an anterior STEMI failed, and he still has chest pain with ST elevation. What next?", "Emergent CABG", ["Repeat lytics tomorrow", "Discharge on DAPT", "Elective CABG in 6 weeks"], "Ongoing ischemia after a failed PCI calls for emergent CABG."),
      V("who", "Next step", 22, "Day 3 after an MI, a 70-year-old has a new harsh holosystolic murmur and shock from a ventricular septal rupture. Surgical timing?", "Emergent or urgent surgery", ["Elective surgery in 3 months", "No surgery: medical therapy", "Surgery only if it heals"], "Acute mechanical complications of MI need emergent or urgent surgery."),

      /* LO 4 */
      V("cpb", "What's happening", 26, "A 68-year-old is placed on cardiopulmonary bypass for CABG. Where does the pump take blood out and return it?", "Out of the right atrium, back into the aorta", ["Out of the aorta, back into the right atrium", "Out of the LV, back into the pulmonary artery", "Out of the femoral vein, back into the IVC"], "Venous blood drains from the right atrium and oxygenated blood returns to the aorta."),
      V("cpb", "Complication", 26, "After a long bypass run, a 71-year-old's creatinine doubles even though his mean pressure stayed 70. What aspect of bypass is hardest on his kidneys?", "The flow isn't pulsatile", ["The blood is too warm", "The pressure is too high", "The flow is too fast"], "Nonpulsatile CPB flow is especially hard on the kidneys and other organs."),
      V("cpb", "Next step", 26, "A 64-year-old is about to be connected to the bypass circuit. What must be done to his blood first?", "Anticoagulate it with heparin", ["Warm it to 40 degrees C", "Give it platelets first", "Add potassium to it"], "Blood must be anticoagulated before it touches the bypass circuit."),
      V("cpb", "Next step", 26, "The perfusionist reports a 66-year-old on bypass has a flow of 1.2 L/min and a mean pressure of 45. What are the targets?", "Flow 2.2-2.4 L/min, pressure 65-100", ["Flow 0.5-1 L/min, pressure 30-50", "Flow 5-6 L/min, pressure 120-150", "Flow 10 L/min, pressure over 200"], "Bypass flow targets 2.2 to 2.4 L/min with a pressure of 65 to 100."),

      /* LO 5 */
      V("plegia", "What's happening", 26, "Before grafting, the surgeon infuses a solution that stops a 63-year-old's heart in diastole. What is its primary electrolyte?", "Potassium", ["Calcium", "Sodium", "Magnesium"], "High-potassium cardioplegia arrests the heart."),
      V("plegia", "What's happening", 27, "A 69-year-old's heart is cooled by 10 degrees C with cold cardioplegia. How much does myocardial O2 consumption drop?", "About 50%", ["About 10%", "About 25%", "About 90%"], "Each 10 degree drop cuts oxygen use by about half."),
      V("plegia", "Next step", 27, "A 70-year-old needing CABG has severe proximal blockages and a leaky aortic valve. How can cardioplegia still reach all the muscle?", "Give it retrograde through the coronary sinus", ["Give it only through the aortic root", "Skip cardioplegia for this patient", "Inject it straight into the LV cavity"], "Retrograde cardioplegia spreads evenly past blockages even with aortic regurgitation."),
      V("plegia", "What's happening", 27, "A student asks why cardioplegia is cold and mixed with the patient's own blood. What is the main reason it is cold?", "Hypothermia lowers cardiac metabolism", ["Cold blood flows faster through grafts", "Cold dissolves clots in the coronaries", "Cold raises the heart's oxygen demand"], "Cooling cuts metabolism so the arrested heart tolerates ischemia."),

      /* LO 6 */
      V("graft", "Pick the drug", 35, "A 58-year-old needs a bypass to his LAD. Which conduit gives the best long-term patency?", "Left internal thoracic artery (LITA)", ["Saphenous vein graft from the leg", "Right internal thoracic artery", "Radial artery from the forearm"], "The LITA has the best patency, about 95% at 5 years."),
      V("graft", "Complication", 31, "Eight years after a CABG with three vein grafts and a LITA, a 70-year-old has new angina. Which graft most likely failed?", "A saphenous vein graft", ["The LITA graft", "The native left main", "None of the grafts"], "Vein grafts have the worst patency, failing 4-5% a year after year 7."),
      V("graft", "Complication", 31, "Two weeks after CABG, a 66-year-old has a troponin rise and a cath shows one of his vein grafts is already closed. How common is that?", "About 10% occlude in the first 30 days", ["Almost never: under 0.1%", "About half in the first month", "Every vein graft closes by then"], "About 10% of saphenous vein grafts occlude in the first month."),
      V("graft", "Pick the drug", 35, "A 55-year-old having CABG can get two arterial grafts. Which pair gives the best results?", "Left and right ITA", ["Two vein grafts", "Radial and vein", "Vein and LITA"], "Bilateral ITAs are the best arterial pair."),
      V("graft", "Next step", 34, "A surgeon is planning a 62-year-old's four-graft CABG. What is the minimum goal for arterial grafts?", "At least one arterial graft", ["No arterial grafts needed", "Only vein grafts are safe", "All four must be arterial"], "Every CABG patient should get at least one arterial graft, usually the LITA."),

      /* LO 7 */
      V("risk", "What's happening", 39, "A 68-year-old asks about his chances 3 years after his planned CABG. About how many patients are dead at 3 years?", "About 25%", ["About 3%", "About 50%", "About 75%"], "Thirty-day mortality is 3.2%, but about a quarter die within 3 years."),
      V("risk", "Classify", 38, "Four patients need CABG: one on dialysis, one with seasonal allergies, one with prior appendectomy and one with myopia. Who has a predictor of a poor outcome?", "The patient on dialysis", ["The allergy patient", "The appendectomy patient", "The myopic patient"], "Renal dialysis predicts post-op MI, repeat revascularization and death."),
      V("risk", "Classify", 38, "A 71-year-old goes to the OR for CABG the same night his PCI failed. What raises his short-term risk most?", "It is emergency surgery", ["He had a stent attempt", "He is under 75 years old", "He has a normal creatinine"], "Emergency surgery is a predictor of a poor short-term outcome."),
      V("risk", "Classify", 40, "A 66-year-old has a creatinine of 2.0 before CABG. How does it affect his risk?", "It predicts higher mortality", ["It lowers his surgical risk", "It has no effect on his risk", "It matters only for PCI"], "A creatinine of 1.5 to 2.5 mg/dL predicts mortality after CABG."),
      V("risk", "Next step", 42, "Six weeks after CABG, a 63-year-old asks what will keep his grafts open. What makes the difference?", "Risk factor control plus aspirin or clopidogrel", ["Stopping all medicines once he is healed", "Yearly repeat cath to check the grafts", "Only weight training three days a week"], "Graft patency depends on risk factor control and antiplatelet therapy."),

      /* LO 8 */
      V("comp", "Complication", 47, "Two days after CABG, a 72-year-old has palpitations and an irregularly irregular rhythm at 130. Which common complication is this?", "Atrial fibrillation", ["Complete heart block", "Ventricular fibrillation", "Sinus bradycardia"], "AF is the most common dysrhythmia after CABG."),
      V("comp", "Complication", 44, "A 66-year-old diabetic had both internal thoracic arteries used in his CABG and now has a draining, unstable sternum. Why was he at higher risk?", "Using both ITAs devascularizes the sternum", ["Vein grafts carry infection into the sternum", "Cardioplegia slowly dissolves the bone", "Bypass flow was too pulsatile for healing"], "Taking both ITAs strips the sternum's blood supply, especially in diabetics."),
      V("comp", "Complication", 49, "After CABG, a 61-year-old can't wean from the ventilator, and fluoroscopy shows the left hemidiaphragm doesn't move. Which nerve was injured?", "The phrenic nerve", ["The vagus nerve", "The recurrent laryngeal", "The long thoracic nerve"], "Phrenic nerve injury after CABG causes diaphragm dysfunction."),
      V("comp", "Next step", 54, "On day 1 after CABG, a 69-year-old has shallow breathing because of incision pain and new basilar atelectasis. Which care prevents pulmonary complications?", "Incentive spirometry", ["Strict bed rest", "IV fluid boluses", "Aminoglycosides"], "Incentive spirometry keeps the lungs open after sternotomy."),
      V("comp", "Pick the drug", 50, "A 70-year-old's creatinine rose after CABG and he has a wound infection. Which drugs should you avoid to protect his kidneys?", "Aminoglycosides, ACE inhibitors and contrast", ["Acetaminophen, insulin and saline", "Aspirin, statins and beta-blockers", "Heparin, oxygen and incentive spirometry"], "Nephrotoxins worsen kidney injury after bypass."),
      V("comp", "Next step", 51, "Four hours after CABG, a 65-year-old's chest tubes are putting out 400 mL an hour of blood and his BP is falling. What is the most important thing to do?", "Stop the bleeding", ["Start a diuretic", "Start a beta-blocker", "Give nitroprusside"], "A bleeding post-op patient needs the bleeding stopped above all else."),
      V("comp", "Complication", 45, "The morning after CABG, a 74-year-old has new right arm weakness and slurred speech. Which source of complications does Gardner tie this to?", "The anesthesia (neurologic dysfunction)", ["The sternal wound healing", "The saphenous vein harvest", "The chest tube placement"], "Gardner groups stroke and neurologic dysfunction with anesthesia complications."),

      /* LO 9 */
      V("icu", "Diagnosis", 55, "Eight hours after CABG, a 67-year-old has BP 75/P, pulse 130 and falling urine output. Most likely problem?", "Hypovolemia", ["Pump failure", "Hypertension", "Tamponade"], "Low BP with a fast pulse after surgery is most often low volume."),
      V("icu", "Pick the drug", 56, "Eight hours after CABG, a 64-year-old has BP 180/110, pulse 90 and falling urine output. Treatment?", "Nitroprusside", ["IV fluid bolus", "Epinephrine drip", "Blood transfusion"], "Post-op hypertension stresses fresh grafts and is treated with nitroprusside."),
      V("icu", "Test to order", 57, "Eight hours after CABG, a 70-year-old has BP 75/P, pulse 90, falling urine output and normal chest tube output. Likely problem and test?", "Pump failure: get an echo", ["Hypovolemia: give 2 L fluid", "Bleeding: back to the OR now", "Hypertension: give nitroprusside"], "Low BP without tachycardia or bleeding suggests cardiac dyskinesia, best seen on echo."),
      V("icu", "Test to order", 52, "A post-op CABG patient has a BP of 70/P with a pulse of 80. Which measurement gives useful information about volume fastest?", "Central venous pressure", ["A chest X-ray", "A stress test", "A troponin level"], "CVP from the central line is a quick look at preload."),
      V("icu", "Test to order", 52, "A 68-year-old after CABG has low BP, and you need his cardiac output and SVR to sort out the cause. Which device gives both?", "A Swan-Ganz (pulmonary artery) catheter", ["An arterial line in the radial artery", "A central venous catheter alone", "A urinary Foley catheter"], "The PA catheter measures cardiac output and SVR."),
      V("icu", "Diagnosis", 51, "A day after CABG, a 72-year-old who got 6 L of fluid has crackles, low SpO2 and bilateral fluffy infiltrates on CXR. Which complication is this?", "Pulmonary edema from hypervolemia", ["A phrenic nerve injury", "A sternal wound infection", "New atrial fibrillation"], "Fluffy bilateral infiltrates after big fluid volumes are pulmonary edema."),
      V("icu", "Next step", 51, "A post-CABG patient's urine output drops to 10 mL an hour. What does urine output tell you after surgery?", "Whether the kidneys are perfused", ["Whether the grafts are open", "Whether the sternum is healing", "Whether there is atrial fibrillation"], "Urine output is a bedside readout of renal perfusion.")
    ]
  });
})();
