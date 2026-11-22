/* Exam prep, Stress Testing (adjunct; question style unknown, no application posted). Rebuilt 2026-11-22 round 2:
   every LO as both quick facts (indications, Bruce goals, Duke cutoffs, sensitivities, side effect percentages,
   contraindications; slide 32's list is marked "Test question" in the speaker notes) and short "which test" cases.
   See data/exam-prep.js. */
(function () {
  "use strict";
  var X = ExamPrep.X;
  ExamPrep.lecture({
    id: "stress-testing", title: "Stress Testing", short: "Stress", group: "Cardiac Testing",
    concepts: {
      ind: "Indications (LO 1)",
      ett: "Exercise test protocol and reading it (LO 2)",
      duke: "Duke treadmill score (LO 3)",
      modes: "The modalities and how each shows ischemia (LO 4)",
      ci: "Contraindications for each modality (LO 5)",
      se: "Side effects of each drug (LO 6)",
      mpi: "Myocardial perfusion imaging (LO 7)",
      pet: "PET viability (LO 8)",
      pick: "Which test for which patient (LO 9)"
    },
    qs: [
      /* LO 1 */
      X("ind", "Fact", 3, "What two things does stress testing help with?", "Diagnosing CHD and assessing its risk", ["Diagnosing valve disease and HF only", "Treating angina and preventing MI", "Measuring LDL and BP"], "Stress testing diagnoses and risk-stratifies coronary heart disease."),
      X("ind", "Case", 4, "Which patient is a good candidate for a stress test?", "Exertional chest pressure, intermediate pretest likelihood", ["Active chest pain with ST elevation", "No symptoms, low risk, age 30", "Pain that you can reproduce by pressing the chest"], "Symptoms suggesting angina with intermediate or high pretest likelihood."),
      X("ind", "Next step", 4, "ER chest pain patient: ACS ruled out with serial troponins and EKGs. Role of stress testing?", "Indicated now that ACS is ruled out", ["Contraindicated after any chest pain", "Only after a cath", "Only if troponin rises"], "Acute chest pain after ACS is excluded is an indication."),
      X("ind", "Fact", 4, "ACS treated medically without angiography. When can stress testing assess risk?", "Within three months, if symptoms are stable", ["Within 24 hours of the MI", "Only after one year", "Never after ACS"], "Stable post-ACS patients can be risk-stratified within three months."),
      X("ind", "Case", 4, "Known CAD, stable for years, now has angina with less exertion. Stress test indicated?", "Yes: change in clinical status", ["No: known CAD needs no testing", "No: go straight to CABG", "Only if he is over 80"], "Known CHD with new or worsening symptoms is an indication."),
      X("ind", "Fact", 5, "Which is a stress test indication on the deck's list?", "Newly diagnosed heart failure or cardiomyopathy", ["A routine physical at age 25", "A sprained ankle", "Seasonal allergies"], "Also valve disease (dobutamine), pre-op for elective surgery and new arrhythmias."),
      X("ind", "Pick the drug", 5, "For stress testing in valvular heart disease, which agent does the deck allow?", "Dobutamine only", ["Adenosine only", "Regadenoson only", "Any vasodilator"], "Valve disease is listed as a dobutamine-only indication."),
      X("ind", "Trap", 6, "A healthy 45-year-old with no symptoms asks for a screening stress test. Answer?", "Generally not indicated", ["Yes, every year", "Yes, with nuclear imaging", "Yes, if he exercises"], "Screening asymptomatic people is generally not appropriate."),
      X("ind", "Case", 6, "Which asymptomatic person may be the exception for a screening stress test?", "An airline pilot", ["A teacher with no risk factors", "A 20-year-old runner", "A retiree with no symptoms"], "High-risk occupations and very high-risk patients are rare exceptions."),

      /* LO 2 */
      X("ett", "Fact", 9, "What is the preferred mode of stress testing?", "Exercise", ["Dobutamine", "Adenosine", "Regadenoson"], "Exercise duration also shows functional capacity."),
      X("ett", "Fact", 9, "What does an exercise test evaluate besides the EKG?", "Symptoms, HR and BP response, arrhythmia", ["LDL and HDL levels", "Aortic valve area", "Kidney function"], "It gives symptoms, heart rate response and recovery, BP response and rhythm."),
      X("ett", "Fact", 12, "How long should an exercise stress test last?", "6-12 minutes", ["1-2 minutes", "30-45 minutes", "Exactly 3 minutes"], "That allows maximal metabolic demand."),
      X("ett", "Fact", 12, "Which treadmill protocol is used most often?", "Bruce protocol", ["Duke protocol", "Framingham protocol", "Wells protocol"], "Most exercise tests use the Bruce protocol."),
      X("ett", "Trap", 12, "Should the test stop as soon as the patient hits 85% of predicted max HR?", "No: tests are symptom limited", ["Yes, always stop at 85%", "Yes, stop at 50%", "Only stop if BP is high"], "Reaching 85% is needed for accuracy, but tests go until symptoms limit."),
      X("ett", "Fact", 10, "What heart rate must be reached for a diagnostic exercise test?", "Over 85% of predicted max HR", ["Over 50% of predicted max HR", "Over 100% of predicted max HR", "Any heart rate over 100"], "Below 85% of max HR, accuracy drops."),
      X("ett", "Fact", 10, "What is the overall sensitivity and specificity of an exercise EKG?", "Sensitivity 68%, specificity 77%", ["Sensitivity 95%, specificity 99%", "Sensitivity 30%, specificity 40%", "Sensitivity 85%, specificity 90%"], "That's why imaging is added when more accuracy is needed."),
      X("ett", "Compare", 10, "Exercise EKG sensitivity in 1-vessel vs 3-vessel disease?", "About 50% vs 85%", ["About 85% vs 50%", "About 99% vs 99%", "About 10% vs 20%"], "It is good at catching 3-vessel and left main disease."),
      X("ett", "Why", 10, "Why can a beta-blocker cause a false-negative exercise test?", "It blunts the heart rate, so demand never gets high enough", ["It causes ST elevation at rest", "It raises the BP too much to continue", "It causes a new LBBB on the tracing"], "A blunted heart rate means not enough demand to show ischemia."),
      X("ett", "Trap", 10, "In which group does the exercise EKG have poor specificity?", "Premenopausal women", ["Men over 60", "Patients with a normal EKG", "Athletes with normal BP"], "Also LVH, digoxin, IVCD, hypokalemia, hyperventilation and resting ST changes."),
      X("ett", "Fact", 10, "Where does the exercise EKG's main value lie?", "Excluding CAD when pretest probability is low", ["Proving CAD in high-risk patients", "Measuring EF", "Finding valve disease"], "A negative test in a low-probability patient is reassuring."),
      X("ett", "Fact", 10, "Which is a strength of exercise EKG testing?", "Low cost and short duration", ["No exercise needed", "Best for single-vessel disease", "Works with an LBBB"], "It also measures functional status and gives prognostic information."),
      X("ett", "Classify", 17, "Which finding makes an exercise test high risk?", "ST depression of 2 mm or more", ["Reaching 12 METs", "BP rising to 170 normally", "No symptoms at 10 minutes"], "Also under 5 METs, low peak SBP, exercise angina and ectopy at low workload."),
      X("ett", "Classify", 17, "During a treadmill test, the systolic BP falls below the resting standing BP. Meaning?", "A high-risk test", ["A normal response", "A low-risk test", "Equipment error only"], "A drop in SBP during exercise suggests severe ischemia."),
      X("ett", "Classify", 17, "Which exercise duration marks a high-risk test?", "Under 5 METs", ["Over 10 METs", "Exactly 8 METs", "12 METs"], "Poor functional capacity carries high risk."),
      X("ett", "Classify", 17, "Couplets and runs of VT appear at a low workload. Meaning?", "A high-risk test", ["A normal finding", "A low-risk test", "Only artifact"], "Frequent ventricular ectopy at low workload is high risk."),
      X("ett", "Trap", 11, "Which patient should NOT have an exercise stress test?", "Acute MI 2 days ago", ["Stable angina for 6 months", "New HF, now compensated", "Atypical chest pain"], "Contraindications: unstable angina, decompensated HF, uncontrolled arrhythmia, BP 200/115, MI within 4 days, severe PHTN, severe AS."),
      X("ett", "Trap", 11, "BP is 210/118 on arrival for a treadmill test. What do you do?", "Don't exercise: uncontrolled HTN is a contraindication", ["Proceed; it will come down", "Give dobutamine instead", "Start at a higher Bruce stage"], "BP over 200/115 is a contraindication."),

      /* LO 3 */
      X("duke", "Fact", 18, "What is the Duke treadmill score formula?", "Minutes - (5 x ST mm) - (4 x angina index)", ["Minutes + (5 x ST mm) + (4 x angina)", "METs x HR / 100", "Age - ST mm - angina"], "Angina index: 0 none, 1 nonlimiting, 2 exercise limiting."),
      X("duke", "Classify", 18, "Duke score of +6. Risk?", "Low", ["Moderate", "High", "Not scoreable"], "+5 or more is low risk."),
      X("duke", "Classify", 18, "Duke score of -3. Risk?", "Moderate", ["Low", "High", "Very low"], "-10 to +4 is moderate."),
      X("duke", "Classify", 18, "Duke score of -12. Risk?", "High", ["Moderate", "Low", "Normal"], "-11 or less is high risk."),
      X("duke", "Case", 19, "8 minutes, 1 mm ST deviation, non-limiting chest pain. Duke score and risk?", "-1, moderate", ["+3, low", "-9, high", "+8, low"], "8 - 5(1) - 4(1) = -1."),
      X("duke", "Case", 18, "10 minutes, no ST change, no angina. Duke score?", "+10, low risk", ["0, moderate", "-10, high", "+5, moderate"], "10 - 0 - 0 = 10."),
      X("duke", "Case", 18, "4 minutes, 2 mm ST depression, angina that stopped the test. Duke score?", "-14, high risk", ["-6, moderate", "+4, moderate", "-2, moderate"], "4 - 10 - 8 = -14."),
      X("duke", "Case", 18, "6 minutes, 1 mm ST depression, angina that limits exercise. Duke score?", "-7, moderate", ["-3, moderate", "+1, moderate", "-11, high"], "6 - 5 - 8 = -7."),
      X("duke", "Fact", 18, "What angina index is used for angina that stopped the test?", "2", ["0", "1", "4"], "Exercise-limiting angina scores 2; nonlimiting scores 1."),

      /* LO 4 */
      X("modes", "Fact", 7, "Which four kinds of evidence does stress testing use?", "Symptoms, EKG changes, perfusion defects, wall motion changes", ["Troponin, BNP, D-dimer, CBC", "Murmurs, rubs, gallops, clicks", "LDL, HDL, TG, Lp(a)"], "Perfusion defects come from MPI and wall motion from echo."),
      X("modes", "Classify", 30, "Which stress agents are vasodilators?", "Dipyridamole, adenosine, regadenoson", ["Dobutamine and dopamine", "Nitroglycerin and nitroprusside", "Metoprolol and diltiazem"], "Dobutamine is the positive inotrope and chronotrope."),
      X("modes", "Mechanism", 36, "How does dobutamine stress the heart?", "Beta-1 stimulation raises heart rate and contractility", ["It dilates normal coronaries", "It slows the heart", "It blocks adenosine receptors"], "It mimics exercise by raising demand."),
      X("modes", "Mechanism", 30, "How do vasodilator agents reveal a stenosis?", "Normal arteries dilate and steal flow from the narrowed one", ["They raise heart rate like exercise", "They constrict the stenotic artery", "They raise the blood pressure"], "The tracer shows less flow beyond the fixed stenosis (standard teaching)."),
      X("modes", "Mechanism", 41, "How does a stress echo detect ischemia?", "New or worsening regional wall motion abnormality", ["A drop in tracer uptake", "A rise in troponin", "An S4 gallop"], "Ischemic walls stop moving normally under stress."),
      X("modes", "Fact", 29, "When is pharmacologic stress testing done?", "When the patient can't exercise or can't have a treadmill EKG", ["Always before trying exercise testing", "Only in children and teenagers", "Only after a prior CABG"], "Exercise stays preferred when possible."),
      X("modes", "Fact", 42, "What are the sensitivity and specificity of stress echo?", "About 84% and 86%", ["About 50% and 50%", "About 99% and 99%", "About 68% and 77%"], "Better than exercise EKG, but highly operator dependent."),
      X("modes", "Fact", 42, "Which is a strength of stress echo?", "No radiation and lower cost", ["No operator dependence", "Best in severe COPD", "Quantitative image analysis"], "It also shows valve disease and is quick."),
      X("modes", "Trap", 42, "Stress echo when the patient reaches under 85% of predicted max HR. Sensitivity?", "Drops to 42%", ["Stays at 84%", "Rises to 95%", "Becomes 100%"], "Inadequate heart rate ruins sensitivity."),
      X("modes", "Trap", 43, "Why might stress echo disappoint in a patient with severe COPD?", "Poor acoustic windows", ["COPD blocks dobutamine", "COPD causes LBBB", "COPD raises troponin"], "Hyperinflated lungs block the ultrasound view."),
      X("modes", "Trap", 44, "Why is stress echo less accurate with a large old MI and EF 25%?", "Resting wall motion abnormalities hide new ones", ["Dobutamine doesn't work in HF", "The echo can't see the valves", "Radiation is too high"], "Significant resting WMAs and LV dysfunction reduce accuracy."),
      X("modes", "Compare", 42, "Stress echo sensitivity in women compared with men?", "About 10% lower", ["About 10% higher", "Exactly the same", "Twice as high"], "Specificity is the same across genders."),

      /* LO 5 */
      X("ci", "Trap", 20, "Which baseline finding prevents an exercise EKG stress test?", "Left bundle branch block", ["Normal sinus rhythm", "First-degree AV block only", "Sinus arrhythmia"], "Also V-pacing, resting ST-T changes, LVH, digoxin and prior revascularization."),
      X("ci", "Trap", 20, "A patient takes digoxin. Can a plain exercise EKG be read?", "No: digoxin causes ST changes", ["Yes, normally", "Only in women", "Only if HR is over 100"], "Digoxin makes ST depression nondiagnostic, so add imaging."),
      X("ci", "Trap", 32, "Which is a contraindication to adenosine or dipyridamole?", "Active wheezing from asthma or COPD", ["A heart rate of 70", "Stable angina", "Mild LVH"], "Adenosine causes bronchospasm."),
      X("ci", "Trap", 32, "A patient drank coffee 2 hours before an adenosine test. Why is that a problem?", "Caffeine blocks adenosine's effect", ["Caffeine causes bronchospasm", "Caffeine lowers the heart rate", "Caffeine raises tracer uptake"], "Hold xanthines and caffeine for 12 hours."),
      X("ci", "Trap", 32, "How long before an adenosine test must caffeine be held?", "12 hours", ["1 hour", "48 hours", "1 week"], "Caffeine and xanthines block adenosine receptors."),
      X("ci", "Trap", 32, "How long before an adenosine test must aminophylline be held?", "24 hours", ["2 hours", "12 hours", "1 week"], "Aminophylline blocks adenosine's effect."),
      X("ci", "Trap", 32, "A patient took Aggrenox (dipyridamole) yesterday. Problem with a dipyridamole test?", "Yes: dipyridamole within 48 hours is a contraindication", ["None; just give a double dose", "It causes severe hypertension", "It blocks uptake of the tracer"], "Recent dipyridamole use is listed."),
      X("ci", "Trap", 32, "Which HR and BP contraindicate adenosine or dipyridamole?", "SBP under 90 or HR under 40", ["SBP over 140 or HR over 100", "SBP of 120 and HR of 70", "Any HR under 60"], "Also high-degree AV block and sick sinus syndrome."),
      X("ci", "Trap", 34, "Which is a contraindication to regadenoson?", "Second- or third-degree AV block without a pacemaker", ["Prior MI", "LBBB", "Diabetes"], "Also sinus node dysfunction without a pacemaker and hypotension."),
      X("ci", "Trap", 37, "Which patient should NOT get dobutamine?", "Hypertrophic cardiomyopathy", ["Asthma with wheezing", "Daily caffeine use", "An LBBB"], "Also unstable angina, recent MI, tachyarrhythmias, severe AS and aortic dissection or aneurysm."),
      X("ci", "Why", 37, "Why is a large aortic aneurysm a contraindication to dobutamine?", "Raised contractility and BP stress the aortic wall", ["It blocks adenosine receptors", "It causes bronchospasm", "It lowers the heart rate"], "Dobutamine increases force and pressure on the aorta."),
      X("ci", "Trap", 37, "Symptomatic severe aortic stenosis and needs ischemia evaluation. Dobutamine?", "No: contraindicated", ["Yes, it's preferred", "Yes, at double dose", "Only with caffeine"], "Symptomatic severe AS is a dobutamine contraindication."),

      /* LO 6 */
      X("se", "Fact", 33, "What is the most common side effect of adenosine or dipyridamole?", "Chest pain (20%)", ["Seizure (50%)", "Rash (40%)", "Hypertension (60%)"], "Then dyspnea, dizziness and headache at about 12% each."),
      X("se", "Fact", 35, "Which side effects are most common with regadenoson?", "Dyspnea (28%) and headache (26%)", ["Rash and fever", "Bradycardia and constipation", "Seizure and syncope"], "Tachycardia (22%), flushing, PVCs and chest pain follow."),
      X("se", "Fact", 38, "About how many patients get side effects from dobutamine?", "About 75%", ["About 5%", "About 25%", "Nearly none"], "Chest pain, palpitations and ischemic ST depression are common."),
      X("se", "Fact", 38, "Which dobutamine side effect is the most serious?", "Significant SVT or VT (8-10%)", ["Headache in about 14%", "Flushing in about 14%", "Mild dyspnea in about 14%"], "Arrhythmias are the dangerous dobutamine effect."),
      X("se", "Fact", 38, "During dobutamine stress, which ECG change occurs in about a third of patients?", "Ischemic ST depression (33%)", ["ST elevation in all leads", "Delta waves", "Complete heart block"], "Dobutamine raises demand and provokes ischemia."),
      X("se", "Compare", 35, "Which side effect is listed for regadenoson but not for adenosine/dipyridamole?", "Tachycardia (22%)", ["Chest pain", "Headache", "Dyspnea"], "Regadenoson's list includes tachycardia and PVCs."),

      /* LO 7 */
      X("mpi", "Fact", 23, "Which tracers are used for myocardial perfusion imaging?", "Thallium or technetium", ["Iodine contrast", "Gadolinium", "Barium"], "Radionuclides are imaged with SPECT or PET."),
      X("mpi", "Case", 24, "MPI: a wall is normal at rest but has a defect during stress. Interpretation?", "Ischemia (reversible defect)", ["Old infarct (fixed defect)", "Normal study", "Artifact only"], "Preserved rest perfusion with reduced stress perfusion means ischemia."),
      X("mpi", "Case", 24, "MPI: a wall has a defect at both rest and stress. Interpretation?", "Old infarct or scar (fixed defect)", ["Active, reversible ischemia", "A normal study", "Coronary vasospasm"], "A defect at rest suggests prior MI or scarring."),
      X("mpi", "Fact", 27, "What is the sensitivity and specificity of SPECT MPI for CAD?", "Sensitivity 85-90%, specificity about 90%", ["Sensitivity 50%, specificity 50%", "Sensitivity 68%, specificity 77%", "Sensitivity 25%, specificity 30%"], "Higher than the exercise EKG."),
      X("mpi", "Compare", 27, "For single-vessel disease, how much more sensitive is SPECT than exercise testing?", "About 25% higher", ["About the same", "About 25% lower", "About 90% higher"], "SPECT catches more single-vessel disease."),
      X("mpi", "Fact", 27, "How sensitive is exercise SPECT for 3-vessel disease?", "95-100%", ["50%", "68%", "20%"], "It rarely misses 3-vessel disease."),
      X("mpi", "Why", 27, "Why does adding MPI help after ST depression on the treadmill?", "It separates true from false-positive ST changes", ["It lowers radiation", "It measures LDL", "It shortens the test"], "Perfusion defects confirm whether ST changes are real ischemia."),
      X("mpi", "Trap", 28, "Thallium MPI shows a defect in an obese woman. What do you keep in mind?", "Thallium has many false positives in women and obesity", ["It is always a true positive", "Obesity improves image quality", "Thallium never gives false positives"], "Soft tissue attenuation lowers specificity."),
      X("mpi", "Fact", 28, "Which is a limitation of nuclear MPI?", "Radiation exposure and higher cost", ["No radiation at all", "It can't be done with drugs", "It can't measure LV function"], "Also long procedure time and poor images in obese patients."),
      X("mpi", "Pick the drug", 39, "Which pharmacologic agent is preferred for nuclear MPI?", "A vasodilator", ["Dobutamine", "Epinephrine", "Atropine"], "Vasodilators are preferred for MPI; dobutamine for stress echo."),
      X("mpi", "Why", 39, "A patient on an exercise SPECT can't reach the workload. Why is regadenoson useful?", "It can be injected during exercise", ["It raises the heart rate faster", "It needs no tracer", "It works only at rest"], "Its pharmacokinetics allow injection mid-exercise."),

      /* LO 8 */
      X("pet", "Next step", 45, "Extensive scarring on MPI and wall motion loss on echo. How do you tell if revascularization will help?", "PET viability scan", ["Repeat treadmill test", "Calcium score", "BNP level"], "PET shows whether the muscle is alive."),
      X("pet", "Mechanism", 46, "What does a PET viability scan measure besides perfusion?", "Metabolism through glucose uptake", ["Calcium in the arteries", "Valve gradients", "Electrical conduction speed"], "Living muscle takes up glucose."),
      X("pet", "Case", 46, "PET: low perfusion but preserved glucose uptake. What is the muscle?", "Hibernating (viable)", ["Necrotic scar", "Normal", "Inflamed"], "Mismatch means alive but underperfused, so revascularization can help."),
      X("pet", "Case", 46, "PET: low perfusion and no glucose uptake. What is the muscle?", "Necrotic scar", ["Hibernating", "Stunned", "Normal"], "No metabolism means dead muscle that won't recover."),
      X("pet", "Fact", 47, "What is the gold standard noninvasive test for hibernating myocardium?", "PET MPI", ["Exercise EKG", "Stress echo", "CCTA"], "PET can distinguish normal, stunned, hibernating and necrotic muscle."),

      /* LO 9 */
      X("pick", "Next step", 10, "Low pretest probability, normal EKG, can exercise. Which test?", "Exercise EKG treadmill test", ["PET viability scan", "Dobutamine stress echo", "Coronary angiogram"], "The exercise EKG's value is excluding CAD in low-probability patients."),
      X("pick", "Pick the drug", 31, "LBBB on the resting EKG. Which stress test?", "Vasodilator MPI", ["Exercise EKG alone", "Dobutamine MPI first-line", "No test possible"], "LBBB and pacing favor vasodilator stress (exercise and dobutamine cause false septal defects, standard teaching)."),
      X("pick", "Pick the drug", 31, "Can't exercise and has active wheezing. Which agent?", "Dobutamine", ["Adenosine", "Regadenoson", "Dipyridamole"], "Dobutamine is for those who can't exercise and can't have a vasodilator."),
      X("pick", "Next step", 20, "Prior CABG with new angina. What test, and why?", "Stress imaging, to localize ischemia", ["Exercise EKG alone, no imaging", "Coronary calcium score", "No test is needed"], "Prior revascularization and need to localize ischemia require imaging."),
      X("pick", "Next step", 20, "LVH with strain on the resting EKG, can walk well. Which test?", "Exercise stress with imaging", ["Plain exercise EKG", "Vasodilator only, no exercise", "No testing"], "LVH makes the EKG nondiagnostic, but he can still exercise."),
      X("pick", "Next step", 29, "Severe knee arthritis, can't walk enough, no lung disease. Which test?", "Pharmacologic stress (vasodilator MPI)", ["Exercise EKG", "Treadmill with imaging", "No test"], "Inability to exercise means pharmacologic stress."),
      X("pick", "Next step", 41, "Need to check for ischemia and look at a valve in the same test, no radiation. Which test?", "Stress echo", ["Nuclear MPI", "PET viability", "Exercise EKG alone"], "Stress echo shows wall motion and valves without radiation."),
      X("pick", "Next step", 31, "Ventricular-paced rhythm, can't exercise. Which test?", "Vasodilator MPI", ["Exercise EKG", "Dobutamine echo always", "No test"], "Pacing makes the EKG unreadable; vasodilators are used for LBBB and pacemakers.")
    ]
  });
})();
