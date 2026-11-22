/* Exam prep, Cardiac Surgery (Gardner). Rebuilt 2026-11-22 round 2: his exam is based on his Kahoot plus the bold
   and yellow-highlighted slide text, so every Kahoot question is here in close wording (his answer list where it is
   fair), plus each highlighted fact as a direct question and the three ICU calls as short cases. See data/exam-prep.js. */
(function () {
  "use strict";
  var X = ExamPrep.X;
  ExamPrep.lecture({
    id: "cardiac-surgery", title: "Cardiac Surgery", short: "Surgery", group: "Cardiac Surgery",
    concepts: {
      inter: "The three invasive interventions and when to go invasive (LO 1)",
      syntax: "SYNTAX I and II (LO 2)",
      who: "Who needs CABG: elective and emergent (LO 3)",
      cpb: "Cardiopulmonary bypass (LO 4)",
      plegia: "Cardioplegia and hypothermia (LO 5)",
      graft: "Conduits and patency (LO 6)",
      risk: "Outcomes and predictors of a poor result (LO 7)",
      comp: "Post-op complications and their management (LO 8)",
      icu: "ICU monitoring tools and the post-op calls (LO 9)"
    },
    qs: [
      /* LO 1 */
      X("inter", "Fact", 12, "What are the three invasive interventions for CAD?", "Fibrinolysis, PCI with DES, CABG", ["Aspirin, statin, beta-blocker", "Stress test, echo, cath", "Nitrates, CCB, ranolazine"], "Gardner's three: tPA, PCI and CABG."),
      X("inter", "Classify", 12, "Which of the following is NOT an invasive cardiac intervention?", "Amiodarone", ["CABG", "Fibrinolysis", "PCI"], "Amiodarone is a drug; the invasive three are fibrinolysis, PCI and CABG."),
      X("inter", "Fact", 13, "When do you go invasive for CAD?", "When medical management fails or there's an acute event", ["Whenever CAD is found", "Only after age 80", "Only if the patient asks"], "It always depends on the risk/benefit ratio."),
      X("inter", "Fact", 14, "What does risk stratification rely on?", "Population health and statistics", ["Anecdotal evidence", "The ability to predict the future", "The surgeon's gut feeling"], "Knowing when medical therapy has failed means comparing risks with population data."),
      X("inter", "Fact", 13, "What does the decision to operate always come down to?", "The risk/benefit ratio", ["The patient's age alone", "The cost of surgery", "The number of stents already placed"], "Weigh the risk of staying medical against the risk of surgery."),
      X("inter", "Classify", 15, "Which risk model estimates short-term CABG risk?", "STS", ["CHA2DS2-VASc", "ASCERT", "HEART"], "STS is short term; ASCERT estimates long-term survival over 65 for isolated CABG."),

      /* LO 2 */
      X("syntax", "Fact", 16, "SYNTAX I looks at what?", "Extent of CAD (the lesions)", ["Patient's overall health", "Patient age", "Extent of PAD"], "SYNTAX I scores the coronary anatomy."),
      X("syntax", "Fact", 16, "Which feature is part of SYNTAX I scoring?", "Lesion length, tortuosity, calcification, total occlusion", ["Age, kidney function and EF", "Smoking, COPD and PAD", "BMI, blood pressure and cholesterol"], "SYNTAX I is size, complexity, location, occlusion, calcium/thrombus, diffuse or focal."),
      X("syntax", "Fact", 17, "SYNTAX II adds which parameter?", "Renal function of the patient", ["Percent occlusion of the coronaries", "Tortuosity of the coronaries", "Calcification of the lesion"], "SYNTAX II adds patient factors to the anatomy."),
      X("syntax", "Fact", 17, "In SYNTAX II, what raises the score?", "Older age, lower renal function, lower EF", ["Younger age and normal EF", "Higher EF and normal kidneys", "Being a former nonsmoker"], "Also left main disease, diabetes, current smoking, COPD and PAD."),
      X("syntax", "Fact", 18, "What is the magic SYNTAX score where mortality rises rapidly?", "Low 20s", ["Low teens", "Mid thirties", "High seventies"], "At 23 and above, CABG is favored."),
      X("syntax", "Compare", 16, "SYNTAX I vs SYNTAX II?", "I: the anatomy; II: anatomy plus patient factors", ["I: patient factors; II: anatomy", "Both score only the kidneys", "I is for valves; II is for CABG"], "SYNTAX II adds age, kidney function, EF and comorbidities."),

      /* LO 3 */
      X("who", "Next step", 19, "A patient has 3-vessel CAD with a SYNTAX score of 35. What should be recommended?", "CABG", ["PCI", "Fibrinolysis", "Medical management"], "Three-vessel disease with SYNTAX 23 or more favors CABG."),
      X("who", "Next step", 19, "A patient has left main CAD with 60% stenosis. What should be recommended?", "CABG", ["PCI", "Fibrinolysis", "Medical management"], "Left main over 50% favors CABG unless the SYNTAX score is under 22."),
      X("who", "Next step", 19, "Two-vessel CAD not involving the proximal LAD, medical therapy failed. Which is favored?", "PCI", ["CABG", "Fibrinolysis", "Heart transplant"], "PCI is favored for one or two vessels without proximal LAD."),
      X("who", "Next step", 19, "Three-vessel CAD with a SYNTAX score of 18. Is PCI reasonable?", "Yes: PCI is a reasonable alternative", ["No: CABG is mandatory", "No: medical therapy only", "No: fibrinolysis is first"], "With lower SYNTAX scores, PCI is considered reasonable."),
      X("who", "Fact", 21, "What are the magic numbers indicating probable need for CABG?", "All: 70% stenosis, 3 vessels, left main 50%", ["70% stenosis only", "3-vessel disease only", "Left main 50% only, nothing else"], "Each is an indication for CABG."),
      X("who", "Fact", 21, "Which is an indication for CABG?", "Two-vessel disease with proximal LAD involvement", ["One-vessel RCA disease at 40%", "A single 50% LCx lesion", "A normal angiogram"], "Also 3-vessel, left main over 50% and survivors of ischemic VT."),
      X("who", "Fact", 21, "A survivor of sudden cardiac arrest from ischemia-driven VT has CAD. What does Gardner list?", "An indication for CABG", ["A contraindication to CABG", "An indication for fibrinolysis only", "An indication for observation"], "Ischemia-mediated VT survivors are on the CABG indication list."),
      X("who", "Next step", 22, "Which patient should have an urgent CABG?", "Acute mechanical heart failure", ["LVEF of 40%", "A high SYNTAX score alone", "Stable 2-vessel disease"], "Mechanical failure, septal rupture and failed PCI or lysis are emergent indications."),
      X("who", "Next step", 22, "Acute ischemia continues after a failed PCI. What next?", "Emergent CABG", ["Elective CABG in 6 weeks", "Repeat stress test", "Medical therapy only"], "Failed PCI or fibrinolysis with ongoing ischemia is an emergent indication."),
      X("who", "Next step", 22, "Day 3 after an MI, a new ventricular septal rupture. Surgical timing?", "Emergent or urgent surgery", ["Elective surgery next month", "No surgery is ever needed", "Fibrinolysis instead"], "Ventricular or septal rupture is an emergent indication."),

      /* LO 4 */
      X("cpb", "Fact", 26, "CPB bypasses which organs?", "Heart and lungs", ["Kidneys", "Liver and spleen", "Brain"], "The machine pumps and oxygenates instead of the heart and lungs."),
      X("cpb", "Fact", 26, "Where does CPB usually take blood out and return it?", "Out of the right atrium, back to the aorta", ["Out of the aorta, back to the RA", "Out of the femoral vein, back to the lung", "Out of the LV, back to the PA"], "Venous blood leaves from the RA and returns arterialized to the aorta."),
      X("cpb", "Fact", 26, "What is the problem with using CPB?", "The flow is not pulsatile", ["The blood is poorly oxygenated", "It can't remove all the venous blood", "The blood is too high in potassium"], "Non-pulsatile flow is the bold point on the CPB slide."),
      X("cpb", "Why", 26, "What aspect of CPB is particularly hard on the kidneys and other organs?", "Nonpulsatile flow", ["High potassium in the cardioplegia", "Hypothermia", "Filtered blood"], "Organs are used to pulsatile perfusion."),
      X("cpb", "Fact", 26, "What must be done to the blood before it goes on CPB?", "Anticoagulate it", ["Warm it to 40 degrees", "Remove the platelets", "Add potassium to it"], "Blood is anticoagulated, then oxygenated, filtered and temperature-controlled."),
      X("cpb", "Fact", 26, "What is the target CPB flow rate and pressure?", "2.2-2.4 L/min, pressure 65-100", ["5-6 L/min, pressure 120-140", "0.5 L/min, pressure 30", "10 L/min, pressure 200"], "Those targets keep organs perfused on bypass."),
      X("cpb", "Fact", 10, "Who solved the air bubble problem and created the modern CPB machine in 1955?", "Lillehei and DeWall", ["Gross and Cutler", "Billroth and Hippocrates", "Hippocrates and Cutler"], "Removing air from the oxygenator made modern bypass possible."),

      /* LO 5 */
      X("plegia", "Fact", 26, "What is the primary electrolyte in cardioplegia?", "Potassium", ["Sodium", "Calcium", "Magnesium"], "High potassium stops the heart in diastole."),
      X("plegia", "Why", 27, "Why is cardioplegia cold?", "Hypothermia decreases cardiac metabolism", ["Cold blood doesn't clot as quickly", "So the potassium stays in solution", "Cold alone stops the heart"], "Cooling cuts oxygen demand while the heart is stopped."),
      X("plegia", "Fact", 27, "How much does O2 consumption drop for every 10 degree C drop?", "50%", ["10%", "25%", "90%"], "That's why flow can fall to 1 L/min/m2 at 18 degrees."),
      X("plegia", "Fact", 27, "What is cardioplegia usually mixed with?", "The patient's own (autologous) blood", ["Saline only", "Donor plasma", "Albumin only"], "It's a potassium-rich solution usually mixed with autologous blood."),
      X("plegia", "Why", 27, "What is the advantage of retrograde cardioplegia?", "Even spread past blockages, even with a leaky aortic valve", ["It needs no potassium in the solution", "It warms the heart back up faster", "It avoids the need for anticoagulation"], "Retrograde flow reaches beyond blocked arteries."),

      /* LO 6 */
      X("graft", "Fact", 35, "Which conduit has the best patency?", "LITA (left internal thoracic artery)", ["Saphenous vein", "Radial artery", "RITA"], "LITA is 95% patent at 5 years."),
      X("graft", "Fact", 31, "Which graft has the worst prognosis?", "Saphenous vein", ["LITA", "Radial artery", "RIMA"], "Vein grafts fail most: 10-25% in 12-18 months."),
      X("graft", "Fact", 35, "What is the LITA patency at 5 years?", "95%", ["50%", "70%", "Under 60%"], "Highlighted on the slide: LITA 95% at 5 years, the best."),
      X("graft", "Fact", 35, "What is the RITA patency at 10 years?", "Under 90%", ["Under 50%", "Exactly 100%", "About 25%"], "RITA is under 90% at 10 years."),
      X("graft", "Classify", 35, "Rank the conduits from best to worst patency.", "LITA, then RITA, then saphenous vein", ["Saphenous vein, then LITA, then RITA", "RITA, then saphenous vein, then LITA", "All have equal patency"], "Arterial grafts outlast vein grafts."),
      X("graft", "Fact", 35, "For two arterial grafts, which pair is better?", "Left and right ITA", ["LITA and radial artery", "Two saphenous veins", "Radial and saphenous"], "Bilateral ITA beats LITA plus radial."),
      X("graft", "Fact", 31, "What percent of saphenous vein grafts occlude in the first 30 days?", "About 10%", ["About 1%", "About 50%", "None"], "Early occlusion happens in 10% of SVGs."),
      X("graft", "Fact", 31, "What is the late occlusion rate of vein grafts from year 7 on?", "4-5% per year", ["0.1% per year", "2% per year", "20% per year"], "Years 1-6 are 2% per year, then 4-5% per year."),
      X("graft", "Fact", 34, "What is the goal for every CABG patient's grafts?", "At least one arterial graft", ["Only vein grafts", "No more than one graft", "Only radial grafts"], "Arterial grafts last longer."),
      X("graft", "Fact", 35, "IMA and ITA are the same artery. What do the letters stand for?", "Internal mammary and internal thoracic", ["Inferior mesenteric and iliac", "Intermediate and interatrial", "Innominate and inferior thyroid"], "IMA = internal mammary artery = ITA."),

      /* LO 7 */
      X("risk", "Fact", 39, "Three years after a CABG, how many patients will be dead?", "About 25%", ["About 10%", "About 40%", "About 60%"], "Mortality reaches 23.3% at 3 years."),
      X("risk", "Fact", 39, "What is the 30-day mortality after CABG?", "3.2%", ["0.1%", "15%", "23%"], "It rises to 8.1% at 1 year and 23.3% at 3 years."),
      X("risk", "Fact", 37, "Which are the negative endpoints after CABG?", "Repeat revascularization, post-op MI, death", ["Fever, pain, nausea", "Weight gain, edema, cough", "Arrhythmia, anemia, rash"], "Outcomes are measured by these three."),
      X("risk", "Fact", 38, "Which predicts a post-op MI, repeat revascularization or death?", "Renal dialysis", ["A young age", "A normal hemoglobin", "Being a nonsmoker"], "Also emergency surgery, shock, reoperation, insulin-dependent DM, smoking and low pre-op Hgb."),
      X("risk", "Fact", 38, "Which is a predictor of a poor short-term outcome after CABG?", "Emergency surgery", ["Elective timing", "A normal EF", "No prior surgery"], "Emergency, hemodynamic instability and reoperation all predict poor outcomes."),
      X("risk", "Trap", 40, "Which of the following is NOT a predictor of mortality after CABG?", "Autoimmune disorders", ["Bad lungs", "Perioperative MI", "Carotid artery disease"], "Gardner's mortality list has lung disease, pulmonary HTN, perioperative MI, kidney injury and atherosclerosis."),
      X("risk", "Fact", 40, "Which creatinine range predicts mortality after CABG?", "1.5-2.5 mg/dL", ["0.6-0.9 mg/dL", "Under 0.5 mg/dL", "It doesn't matter"], "Creatinine 1.5-2.5 and acute kidney injury predict death."),
      X("risk", "Fact", 41, "Which cardiac risk factors are also predictors of mortality after CABG?", "Age, hyperlipidemia, DM, HTN, smoking", ["Asthma, gout, migraine", "Anemia only", "None of them"], "The standard cardiac risk factors carry over."),
      X("risk", "Next step", 42, "What makes a difference after CABG to keep the grafts open?", "Risk factor control plus aspirin or clopidogrel", ["Stopping all medications at discharge", "Bed rest for 3 months after surgery", "Daily NSAIDs for the chest wall pain"], "Stop smoking and control lipids, DM and BP."),

      /* LO 8 */
      X("comp", "Classify", 43, "What are the three sources of post-op complications?", "The wound/trauma, the anesthesia, the operation", ["The diet, the bed and the visitors", "The lab, the X-ray and the pharmacy", "The patient's age, sex and race"], "Gardner groups complications by cause."),
      X("comp", "Why", 44, "Why does using both ITAs raise sternal wound problems?", "It devascularizes the sternum", ["It causes a pneumothorax", "It raises blood glucose", "It blocks the coronaries"], "Both ITAs feed the sternum."),
      X("comp", "Classify", 45, "Which complication is related to the anesthesia?", "Stroke (neurologic dysfunction)", ["Sternal devascularization", "Vein graft occlusion", "Wound infection"], "Anesthesia causes hypo/hypervolemia and neurologic dysfunction."),
      X("comp", "Classify", 46, "Which is a complication from the operation itself?", "Inflammatory response to CPB", ["Allergy to tape", "Constipation from opioids", "A pressure ulcer"], "Also global arrest, hypothermia, nonpulsatile flow, emboli and clamping."),
      X("comp", "Fact", 47, "What is the most common dysrhythmia after CABG?", "Atrial fibrillation", ["Third-degree block", "Torsades", "WPW"], "AF leads the post-op arrhythmia list (standard teaching)."),
      X("comp", "Fact", 48, "How often does an MI happen after CABG?", "3.2% of patients", ["30% of patients", "Never", "75% of patients"], "Perioperative MI is also a predictor of death."),
      X("comp", "Classify", 48, "Post-op BP low with a high SVR on the Swan. What problem is this NOT?", "Vasodilatory shock", ["Pump failure", "Tamponade", "Hypovolemia"], "Vasodilatory shock has a low SVR."),
      X("comp", "Fact", 49, "Which nerve injury after CABG causes diaphragm dysfunction?", "Phrenic nerve", ["Vagus nerve", "Recurrent laryngeal nerve", "Femoral nerve"], "Phrenic nerve injury impairs the diaphragm and weaning."),
      X("comp", "Next step", 54, "Which post-op care is important in preventing pulmonary complications after CABG?", "Incentive spirometry", ["Swan-Ganz catheter", "Bed rest", "Antiplatelet therapy"], "Spirometry and ambulation after extubation prevent atelectasis and pneumonia."),
      X("comp", "Why", 50, "Why are CABG patients at risk for renal failure?", "Vasoconstriction, hypothermia, nonpulsatile flow", ["High HDL after surgery", "Too much urine output", "Spirometry use after extubation"], "All are on the renal dysfunction slide."),
      X("comp", "Trap", 50, "Which is NOT a reason CABG patients get renal failure post-op?", "A blood clot in the chest tube", ["Nonpulsatile flow during CPB", "Pre-op contrast dye", "Prophylactic aminoglycosides"], "A clotted chest tube causes tamponade risk, not kidney injury."),
      X("comp", "Pick the drug", 50, "Which drugs should you avoid after CABG to protect the kidneys?", "Aminoglycosides, ACE inhibitors and contrast", ["Aspirin and clopidogrel", "Acetaminophen and insulin", "Statins and metoprolol"], "Keep the patient normotensive and avoid nephrotoxins."),
      X("comp", "Next step", 51, "What is the most important thing to do for a post-op patient who is bleeding?", "Stop the bleeding", ["Transfuse PRBCs", "Transfer to the ICU", "Check serial hemoglobins"], "Transfusion buys time, but the source must be stopped."),

      /* LO 9 */
      X("icu", "Fact", 52, "A central venous catheter can measure what?", "Preload", ["Cardiac output", "Afterload", "Systemic vascular resistance"], "Central venous pressure reflects filling (preload)."),
      X("icu", "Fact", 52, "Which device measures cardiac output and SVR?", "Swan-Ganz (pulmonary artery) catheter", ["Arterial line", "Central venous catheter alone", "Pulse oximeter"], "The PA catheter gives CO, SVR and possibly wedge pressure."),
      X("icu", "Fact", 51, "Which test gives a quick assessment of contractility at the bedside?", "Echocardiogram", ["CXR", "Central venous pressure", "ECG"], "Echo shows cardiac function directly."),
      X("icu", "Fact", 52, "What does an arterial line give you?", "Continuous blood pressure", ["Cardiac output", "Preload", "Urine output"], "An A-line gives beat-to-beat BP and access for ABGs."),
      X("icu", "Fact", 51, "What do you watch chest tube output for?", "Bleeding", ["Kidney function", "Blood sugar", "Arrhythmias"], "Rising chest tube output means the patient is bleeding."),
      X("icu", "Fact", 51, "What does urine output tell you after CABG?", "Whether the kidneys are perfused", ["Whether the grafts are open", "Whether the patient has AF", "The blood sugar"], "Low urine output signals poor perfusion or hypovolemia."),
      X("icu", "Fact", 51, "How often is blood sugar checked after CABG?", "Every 6 hours", ["Once a week", "Every 15 minutes", "Only at discharge"], "Check for hypo- and hyperglycemia."),
      X("icu", "Next step", 52, "A post-op patient has a BP of 70/P with a pulse of 80. What gives useful information in a timely manner?", "Central venous pressure", ["Electrolyte panel", "CBC", "Arterial blood gas"], "CVP quickly tells you whether the problem is filling."),
      X("icu", "Case", 55, "8 hours post-CABG: BP 75/P, pulse 130, falling urine output. Most likely problem?", "Hypovolemia", ["Hypertension", "Cardiac dyskinesia", "Vasodilation from sepsis"], "Low BP with a fast pulse: check CVP and chest tube output for bleeding or low volume."),
      X("icu", "Case", 56, "8 hours post-CABG: BP 180/110, pulse 90, falling urine output. Treatment?", "Nitroprusside", ["IV fluid bolus", "Epinephrine", "Packed red cells"], "Check pain, awake state and CVP/CO/SVR, then treat HTN."),
      X("icu", "Case", 57, "8 hours post-CABG: BP 75/P, pulse 90, falling urine output, normal chest tube output. Likely problem and test?", "Cardiac dyskinesia (pump failure); echo", ["Hypovolemia; give fluids", "Hypertension; nitroprusside", "Pneumonia; CXR"], "Hypotension without tachycardia points to the pump: get an echo."),
      X("icu", "Case", 51, "Post-CABG patient: a CXR shows bilateral fluffy infiltrates. Which complication is this?", "Pulmonary edema or hypervolemia", ["Phrenic nerve injury", "Ischemic changes", "Hypoglycemia"], "The CXR checks for edema, volume overload and pneumonia.")
    ]
  });
})();
