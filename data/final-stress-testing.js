/* Stress Testing Final test (Anna, 2026-11-21): one whole-deck test, new questions, each tied to its slide, every LO covered.
   F(slide, prompt, answer, [3 wrong], why). Ids "stress-testing|final|<i>": only append. */
(function () {
  "use strict";
  var F = SlideStudy.F;
  SlideStudy.final("stress-testing", [
    /* LO 1 */
    F(3, "Stress testing helps diagnose which disease and assess its risk?", "Coronary heart disease", ["Asthma", "Peripheral neuropathy", "Hypothyroidism"], "Stress testing aids diagnosis and risk assessment for CHD."),
    F(4, "Known CHD becomes an indication for stress testing when what happens?", "The clinical status changes, with new or worsening symptoms", ["LDL falls", "The patient turns 50", "Nothing changes"], "Known CHD with a change in clinical status is listed."),
    F(5, "Which rhythm finding is listed as a stress test indication?", "New arrhythmias", ["Normal sinus rhythm", "Sinus arrhythmia in a child", "Old stable PACs"], "Patients with new arrhythmias are on the indications list."),
    F(6, "Besides high-risk jobs, which asymptomatic group might be a rare screening exception?", "Patients at very high CHD risk from risk factors", ["Anyone over 30", "Patients with low risk", "All women"], "Very high risk from risk factors is the other exception."),
    F(7, "Which kind of evidence of ischemia needs no imaging at all?", "Symptomatic and EKG changes", ["Perfusion defects", "Wall motion abnormalities", "Metabolic mismatch on PET"], "Symptoms and EKG changes come from the treadmill alone (standard teaching)."),

    /* LO 2 */
    F(9, "Which response during exercise testing reflects autonomic recovery?", "Heart rate recovery after exercise", ["LDL level", "Weight", "Hemoglobin"], "The exercise test evaluates heart rate response and recovery."),
    F(10, "In which disease pattern is the exercise EKG most sensitive?", "Three-vessel or left main disease", ["Single-vessel disease", "Normal coronaries", "Vasospasm only"], "It has high sensitivity in 3-vessel or left main disease."),
    F(10, "Which group has poor exercise EKG specificity?", "Premenopausal women", ["Men over 60", "Patients with normal EKGs", "Children"], "Premenopausal women are listed for poor specificity."),
    F(10, "Which electrolyte problem lowers exercise EKG specificity?", "Hypokalemia", ["Hypernatremia", "Hypercalcemia", "Hypophosphatemia"], "Hypokalemia is on the poor-specificity list."),
    F(11, "Which infection is an absolute contraindication to treadmill testing?", "Active endocarditis", ["A healed UTI", "A cold sore", "A treated ear infection"], "Active endocarditis is on the absolute list."),
    F(11, "Is left main coronary stenosis an absolute or relative contraindication to exercise testing?", "Relative", ["Absolute", "Not a contraindication", "Only for dobutamine"], "Left main stenosis or its equivalent is relative."),
    F(11, "Which pericardial problem is an absolute contraindication to exercise testing?", "Acute pericarditis", ["A healed pericarditis from years ago", "A tiny chronic effusion", "None"], "Acute myocarditis or pericarditis is absolute."),
    F(12, "Why aim for at least 6 minutes of exercise?", "To reach maximal metabolic demand", ["To burn calories", "To lower BP", "To shorten the test"], "6-12 minutes allows maximal metabolic demand."),
    F(14, "What are the speed and grade of Bruce stage 1?", "1.7 mph at 10% grade", ["4.2 mph at 16%", "3.4 mph at 14%", "1.7 mph at 0%"], "Bruce stage 1 is 1.7 mph at 10%."),
    F(14, "About how many METs does Bruce stage 4 represent?", "13 METs", ["4.5 METs", "7 METs", "25 METs"], "Bruce stage 4 is about 13 METs."),
    F(15, "Which endpoint is protocol-determined in a submaximal test?", "Reaching a set heart rate such as 120-140", ["Patient wants to stop", "Ataxia", "VT"], "Submaximal tests stop at a set heart rate or workload."),
    F(15, "Above what diastolic BP should an exercise test be stopped?", "120 mm Hg", ["80 mm Hg", "90 mm Hg", "150 mm Hg"], "Diastolic BP over 120 is a provider endpoint."),
    F(16, "What does a stress test with no ST depression count as?", "Negative", ["Positive", "Equivocal", "High risk"], "No ST depression is a negative test on the figure."),

    /* LO 3 */
    F(17, "Which BP response during exercise is a high-risk feature?", "Systolic BP falling below the resting standing value", ["A normal rise in systolic BP", "A small rise in diastolic BP", "BP of 150 at peak"], "A significant decrease in systolic BP is high risk."),
    F(17, "Which symptom during a stress test is a high-risk feature?", "Exercise-induced angina", ["Leg fatigue at 12 minutes", "Sweating", "Mild shortness of breath at peak"], "Exercise-induced angina is listed."),
    F(17, "Failing to reach which target is a high-risk feature?", "Target heart rate", ["Target weight", "Target glucose", "Target LDL"], "Inability to attain target HR is listed."),
    F(18, "In the Duke score, what is each mm of ST deviation multiplied by?", "5", ["4", "2", "10"], "ST deviation is multiplied by 5."),
    F(18, "In the Duke score, what is the angina index multiplied by?", "4", ["5", "1", "3"], "The angina index is multiplied by 4."),
    F(18, "Which Duke score range is moderate risk?", "−10 to +4", ["+5 or more", "−11 or less", "+5 to +10"], "Moderate risk is −10 to +4."),
    F(19, "In the Duke example, what angina index was used for non-limiting chest pain?", "1", ["0", "2", "4"], "Non-limiting angina scores 1."),

    /* LO 5 */
    F(20, "Which EKG finding of pre-excitation appears in the algorithm as needing imaging?", "Ventricular pre-excitation (WPW)", ["Sinus rhythm", "Normal axis", "Normal PR"], "WPW is on the abnormal baseline list and the algorithm's list (V-pre-excitation)."),
    F(20, "How much resting ST-T abnormality prevents a plain exercise EKG test?", "1 mm or more", ["Any 0.1 mm", "Only 5 mm", "None"], "≥1 mm resting ST-T abnormalities are listed."),
    F(20, "Which history means a patient should have stress imaging rather than an EKG-only test?", "Prior revascularization", ["Prior appendectomy", "Prior flu", "Prior knee scope"], "Prior revascularization is on the list."),

    /* LO 7 */
    F(23, "What does the radioactive tracer in MPI show?", "Where blood flows in the heart muscle", ["Valve motion", "Coronary calcium", "Electrical conduction"], "MPI visualizes myocardial perfusion via a tracer."),
    F(24, "What is a defect called that appears only with stress?", "Ischemia", ["Scar", "Artifact", "Infarct"], "A stress-only defect is ischemia."),
    F(26, "How many axes are the heart slices shown in on a SPECT study?", "Three: short axis, horizontal long axis, vertical long axis", ["One", "Two", "Six"], "The display shows short, horizontal long and vertical long axis slices."),
    F(27, "What is the specificity of SPECT MPI for excluding CAD?", "About 90%", ["About 50%", "About 77%", "About 30%"], "Specificity is in the 90% range."),
    F(27, "Can MPI assess viability and ischemia at the same time?", "Yes", ["No", "Only with echo", "Only with exercise EKG"], "Viability and ischemia can be assessed simultaneously."),
    F(28, "Which tracer has a longer procedure time?", "Technetium", ["Thallium", "Gadolinium", "Iodine"], "The slide lists long procedure time with Tc agents."),
    F(28, "How does MPI cost compare with an exercise treadmill test?", "Higher", ["Lower", "The same", "Free"], "MPI has higher costs than ETT."),

    /* LO 4-6 */
    F(30, "Which stress drug is NOT a vasodilator?", "Dobutamine", ["Adenosine", "Dipyridamole", "Regadenoson"], "Dobutamine is an inotrope/chronotrope."),
    F(31, "A patient on digoxin who can't exercise needs perfusion stress. Which class fits?", "Vasodilator", ["Dobutamine only", "Beta blocker", "Exercise"], "Digoxin is listed under vasodilator indications."),
    F(32, "Below what systolic BP is dipyridamole or adenosine contraindicated?", "90 mm Hg", ["130 mm Hg", "120 mm Hg", "60 mm Hg"], "Hypotension under 90 SBP is listed."),
    F(32, "Below what heart rate is dipyridamole or adenosine contraindicated?", "40 bpm", ["60 bpm", "70 bpm", "100 bpm"], "Severe bradycardia under 40 is listed."),
    F(32, "How long before an adenosine test must aminophylline be stopped?", "24 hours", ["1 hour", "1 week", "Not needed"], "Aminophylline within 24 hours blocks adenosine."),
    F(33, "How often does adenosine or dipyridamole cause nausea?", "About 3%", ["About 30%", "About 75%", "Never"], "Nausea is listed at 3%."),
    F(34, "Which BP problem contraindicates regadenoson?", "Hypotension", ["Mild hypertension", "Normal BP", "Orthostatic rise"], "Hypotension is on the regadenoson list."),
    F(35, "How often does regadenoson cause flushing?", "16%", ["1%", "50%", "90%"], "Flushing is listed at 16%."),
    F(36, "What kind of drug is dobutamine?", "A synthetic catecholamine", ["A xanthine", "A calcium channel blocker", "An adenosine analog"], "Dobutamine is a synthetic catecholamine."),
    F(37, "Which valve lesion contraindicates dobutamine?", "Symptomatic severe aortic stenosis", ["Mild mitral regurgitation", "Trivial tricuspid regurgitation", "A normal valve"], "Symptomatic severe AS is a dobutamine contraindication."),
    F(37, "Which coronary syndrome contraindicates dobutamine stress?", "Unstable angina", ["Stable angina", "No CAD", "Prior PCI years ago"], "Unstable angina is on the list."),
    F(38, "How often does dobutamine cause palpitations?", "29%", ["2%", "75%", "100%"], "Palpitations are listed at 29%."),
    F(39, "Can a vasodilator be combined with low-level exercise for MPI?", "Yes", ["No", "Only dobutamine can", "Only in children"], "Vasodilators can be combined with low-level exercise."),

    /* LO 4 (echo) */
    F(41, "Besides diagnosing CHD, what can stress echo assess about the myocardium?", "Viability", ["Calcium score", "Electrical axis", "Lipid content"], "Stress echo can assess myocardial viability."),
    F(42, "In women with single-vessel disease, what was stress echo sensitivity?", "About 40%", ["About 95%", "About 84%", "About 10%"], "In women with single-vessel disease sensitivity was only 40%."),
    F(42, "What can be added to stress echo to evaluate perfusion?", "Contrast agents", ["Thallium", "Caffeine", "Barium"], "Simultaneous perfusion evaluation is possible with contrast agents."),
    F(43, "Where is ischemia harder to see on stress echo?", "In an infarct zone", ["In a normal wall", "In the right atrium", "In the aorta"], "Infarct zone ischemia is less well detected."),
    F(44, "Which baseline LV function lowers stress echo accuracy?", "Moderate to severe systolic dysfunction", ["Normal EF", "Hyperdynamic EF", "Mild diastolic dysfunction only"], "Moderate to severe LV dysfunction reduces accuracy."),

    /* LO 8 */
    F(46, "Which state of myocardium is alive but not contracting because of chronic low flow?", "Hibernating", ["Necrotic", "Normal", "Calcified"], "Hibernating myocardium is viable but underperfused (standard teaching)."),
    F(46, "How does PET assess perfusion?", "The same way as MPI", ["With ultrasound", "With an EKG", "With a calcium score"], "PET assesses vascular perfusion the same as MPI."),
    F(47, "Which noninvasive technique is the gold standard for hibernating myocardium?", "PET radionuclide MPI", ["Stress echo", "Exercise EKG", "Cardiac CT"], "PET MPI is the gold standard for hibernating myocardium."),

    /* LO 9 */
    F(48, "In the algorithm, which patients who can't exercise go to vasodilator SPECT or PET first?", "Those with LBBB, V-pacing or atrial fibrillation", ["Those with normal EKGs", "Those with asthma", "Those with aortic dissection"], "LBBB, V-pacing or AF leads to vasodilator nuclear imaging."),
    F(48, "In the algorithm's contraindication box, which recent MI window contraindicates dobutamine?", "One to three days", ["Two years", "Six months", "Ten years"], "Recent MI (1-3 days) is listed for dobutamine."),
    F(48, "In the algorithm, when should PET be used?", "When myocardial viability needs assessment and PET is available", ["For every patient", "Only for LBBB", "Never"], "The algorithm uses PET for viability if available.")
  ]);
})();
