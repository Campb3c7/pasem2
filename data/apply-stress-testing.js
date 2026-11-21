/* Stress Testing Apply final (Anna, 2026-11-21): whole-deck patient cases (order it or not, which test, which drug, read the result).
   Separate from the Final test. Each case is tied to the slide that teaches it, every LO covered.
   F(slide, prompt, answer, [3 wrong], why). Ids "stress-testing|apply|<i>": only append. */
(function () {
  "use strict";
  var F = SlideStudy.F;
  SlideStudy.apply("stress-testing", [
    /* LO 1 */
    F(4, "A 58-year-old man has 3 weeks of chest pressure when walking uphill that eases with rest. His pre-test probability is intermediate. What is the next step?", "Order a stress test", ["Reassure and send home", "Start tPA", "Order immediate CABG"], "Angina symptoms with intermediate pre-test likelihood is an indication."),
    F(4, "A patient had an NSTEMI two weeks ago, was managed medically without a cath and is now symptom-free. What can assess his risk?", "A stress test within three months", ["Nothing", "Repeat troponin yearly", "Immediate CABG"], "Stress testing may be used for risk assessment within three months post-ACS."),
    F(5, "A 70-year-old with new heart failure of unknown cause needs evaluation. Is a stress test indicated?", "Yes, newly diagnosed HF or cardiomyopathy is an indication", ["No, never in HF", "Only after 5 years", "Only an EKG"], "New HF or cardiomyopathy is listed."),
    F(5, "A patient with known CAD is having an elective hip replacement. Which listed indication applies?", "Pre-op evaluation before elective non-cardiac surgery in a cardiac patient", ["Routine screening", "Acute STEMI", "None"], "Pre-op evaluation in patients with cardiac conditions is an indication."),
    F(6, "A 35-year-old asymptomatic runner wants a stress test because a friend had one. What do you advise?", "Not indicated: screening asymptomatic patients is generally inappropriate", ["Order an exercise EKG", "Order a PET", "Order a dobutamine echo"], "Screening asymptomatic, low-risk patients is not indicated."),
    F(6, "An asymptomatic 52-year-old commercial airline pilot needs clearance. Could a stress test be reasonable?", "Yes, high-risk occupations are a rare exception", ["Never", "Only after an MI", "Only for women"], "High-risk occupations like pilots are the listed exception."),

    /* LO 2 */
    F(10, "A 45-year-old woman with atypical chest pain and a low pre-test probability needs testing. Why is an exercise EKG reasonable?", "Its main value is excluding CAD in low pre-test probability patients", ["It is best for proving 3-vessel disease", "It measures the EF", "It has no limits"], "The exercise EKG's main value is excluding CAD at low pre-test probability."),
    F(10, "A patient with WPW on his resting EKG is sent for an exercise EKG. What is the problem?", "An abnormal baseline EKG makes it non-diagnostic", ["WPW makes it more accurate", "WPW contraindicates all testing", "Nothing"], "The exercise EKG is non-diagnostic with an abnormal baseline (dig, LVH, WPW)."),
    F(11, "A patient with unstable angina is sent for a treadmill test. What do you do?", "Cancel it: unstable angina is an absolute contraindication", ["Proceed", "Use the Bruce protocol faster", "Give caffeine first"], "Unstable angina is on the absolute list."),
    F(11, "A patient had an acute MI yesterday. Can he have a treadmill test today?", "No, acute MI within two days is an absolute contraindication", ["Yes, it is ideal", "Only the Bruce protocol", "Only if pain-free"], "The table lists acute MI within two days as absolute."),
    F(11, "A patient with a suspected acute aortic dissection is on the stress lab schedule. What do you do?", "Cancel: acute aortic dissection is an absolute contraindication", ["Proceed with dobutamine", "Proceed with exercise", "Give regadenoson"], "Acute aortic dissection is absolute."),
    F(11, "A patient's potassium is 2.9 the morning of his treadmill test. How does the table treat this?", "Electrolyte abnormalities are a relative contraindication", ["Absolute contraindication", "No concern", "An indication"], "Electrolyte abnormalities are relative."),
    F(12, "A patient reaches 85% PMHR at 4 minutes and feels fine. Should the test stop?", "No, it should be symptom limited, aiming for 6-12 minutes", ["Yes, 85% is the end", "Yes, at 4 minutes always", "Stop and give adenosine"], "Tests should be symptom limited, not just 85% PMHR."),
    F(15, "During a treadmill test the patient becomes pale, confused and unsteady. What do you do?", "Stop the test", ["Speed up", "Raise the grade", "Ignore it"], "A patient who doesn't look well is a provider endpoint."),
    F(15, "At stage 3 the monitor shows sustained VT. What do you do?", "Stop the test", ["Continue to stage 4", "Lower the grade only", "Ignore it"], "VT is an ECG endpoint."),
    F(16, "A patient develops 1.5 mm upsloping ST depression at peak exercise. How do you report it?", "Equivocal", ["Positive", "Negative", "STEMI"], "Upsloping ST depression >1 mm is equivocal."),

    /* LO 3 */
    F(18, "A patient walks 6 minutes, has 2 mm ST depression and non-limiting angina. What is his Duke score?", "−8, moderate risk", ["+6, low risk", "−12, high risk", "−2, low risk"], "6 − 10 − 4 = −8, which is moderate."),
    F(18, "A patient walks 12 minutes with 0.5 mm ST deviation and no angina. What is his Duke score?", "+9.5, low risk", ["+12, low risk", "−2.5, moderate risk", "−12, high risk"], "12 − 2.5 − 0 = +9.5, which is ≥+5."),
    F(18, "A patient walks 4 minutes, has 2 mm ST deviation and stops because of chest pain. What is his Duke score?", "−14, high risk", ["−6, moderate risk", "+4, moderate risk", "−20, high risk"], "4 − 10 − 8 = −14, which is ≤−11."),
    F(17, "A patient stops at 4 METs; peak systolic BP was 118. What kind of test is this?", "High risk", ["Low risk", "Normal", "Equivocal only"], "Under 5 METs and peak SBP under 130 are high-risk features."),
    F(17, "A patient has 2.5 mm ST depression at stage 1. How do you classify the test?", "High risk", ["Low risk", "Negative", "Equivocal"], "ST depression ≥2 mm, especially early, is a high-risk feature."),

    /* LO 5 */
    F(20, "A patient with LBBB and chest pain needs a stress test. Why not a plain exercise EKG?", "LBBB prevents ST interpretation, so imaging is needed", ["LBBB makes the EKG perfect", "LBBB patients can't walk", "No reason"], "LBBB is on the list of conditions preventing exercise EKG testing."),
    F(20, "A man with prior stents has new angina and you need to know which territory is ischemic. Which test kind?", "Stress imaging (nuclear or echo)", ["Plain exercise EKG", "Resting EKG", "Lipid panel"], "Prior revascularization and ischemic localization need imaging."),

    /* LO 7 */
    F(24, "Stress MPI: the lateral wall is dim at stress and normal at rest. What does it mean?", "Lateral wall ischemia", ["Old lateral MI", "Normal study", "Artifact"], "A stress defect that is normal at rest means ischemia."),
    F(24, "Stress MPI: the inferior wall is dim at both stress and rest; no other defects. What does it mean?", "Prior inferior MI or scar", ["Inferior ischemia", "Normal", "Pericarditis"], "A defect at rest and stress suggests infarction or scar."),
    F(27, "A patient with LVH and an IVCD needs a stress test and can exercise. Which imaging test handles these well?", "Exercise MPI", ["Plain exercise EKG", "Resting echo only", "No test"], "MPI is good in LVH, digoxin and IVCD."),
    F(27, "A treadmill EKG shows 1.5 mm ST depression in a woman with atypical symptoms. How can you tell if it is a false positive?", "Add stress perfusion imaging", ["Repeat the same test", "Ignore it", "Start a statin"], "Perfusion imaging helps separate true from false positive ST depression."),
    F(28, "A 140-kg woman needs a nuclear stress test. What limitation should you anticipate?", "Poor images and more false positives", ["Too little radiation", "Perfect images", "No tracer uptake"], "Obesity causes poor images and thallium false positives."),

    /* LO 4-6 */
    F(29, "A patient with severe COPD can only walk 20 feet. Which kind of stress test?", "Pharmacologic stress", ["Exercise EKG", "No stress test is possible", "Exercise echo"], "Patients who can't exercise get pharmacologic stress."),
    F(31, "A paced patient who can't exercise needs a stress test. Which drug class?", "Vasodilator", ["Dobutamine", "Beta blocker", "Nitrate"], "LBBB or pacemaker points to a vasodilator."),
    F(31, "A patient with aortic stenosis needs stress evaluation of his valve. Which drug?", "Dobutamine", ["Adenosine", "Regadenoson", "Dipyridamole"], "Dobutamine is used for evaluation of valvular heart disease."),
    F(32, "A patient took theophylline for COPD this morning. What does this mean for an adenosine test today?", "It is contraindicated because xanthines block adenosine", ["No effect", "It enhances the test", "Switch to caffeine"], "Xanthines block adenosine and must be held."),
    F(32, "A patient's resting HR is 38 before a planned adenosine study. What do you do?", "Don't use adenosine: HR under 40 is a contraindication", ["Proceed", "Give caffeine", "Double the dose"], "Severe bradycardia under 40 contraindicates dipyridamole/adenosine."),
    F(32, "A patient with sick sinus syndrome and no pacemaker needs perfusion stress. Is adenosine safe?", "No, sick sinus syndrome is a contraindication", ["Yes, always", "Yes, with caffeine", "Only at night"], "High-degree AV block and sick sinus syndrome are listed."),
    F(33, "During an adenosine infusion the patient reports chest tightness. How common is this?", "The most common side effect, about 20%", ["Very rare, under 1%", "Proof of an MI", "Never seen"], "Chest pain occurs in about 20% with adenosine or dipyridamole."),
    F(34, "A patient with second-degree AV block has no pacemaker. Which vasodilator is listed as contraindicated?", "Regadenoson", ["None", "Dobutamine", "Caffeine"], "2nd or 3rd degree AV block without a pacemaker contraindicates regadenoson."),
    F(35, "After regadenoson a patient has a pounding headache. What do you tell her?", "Headache is a common side effect, about 26%", ["It means a stroke", "It never happens", "It means the test failed"], "Headache is listed at 26%."),
    F(37, "A patient with obstructive HCM can't exercise. Which stress drug should be avoided?", "Dobutamine", ["Regadenoson", "Adenosine", "None"], "HCM is a dobutamine contraindication."),
    F(37, "A patient with uncontrolled AF at 140 needs a stress test. Which drug is a problem?", "Dobutamine", ["Adenosine", "Regadenoson", "Dipyridamole"], "Tachyarrhythmias are a dobutamine contraindication."),
    F(38, "During a dobutamine echo a patient has a 12-beat run of VT. How common is this kind of event?", "Significant arrhythmias occur in 8-10%", ["Never", "In 75%", "Only with adenosine"], "Significant arrhythmias occur in 8-10% with dobutamine."),
    F(39, "A patient on the treadmill for exercise SPECT tires at 3 minutes. How can the study be saved?", "Inject regadenoson during exercise", ["Stop and send home", "Give dobutamine after the scan", "Switch to a resting EKG"], "Regadenoson can be injected during exercise if workload isn't reached."),

    /* LO 4 (echo) */
    F(41, "A patient with known CAD needs to know which wall is ischemic, without radiation. Which test?", "Stress echo", ["Thallium MPI", "PET", "Coronary CT"], "Stress echo localizes ischemia with no radiation."),
    F(42, "A patient's stress echo was done at 75% predicted HR. How reliable is a normal result?", "Less reliable: sensitivity drops to 42% under 85%", ["Fully reliable", "More reliable", "It is always positive"], "Sensitivity drops to 42% if max HR is under 85% predicted."),
    F(42, "A patient with chest pain and a new murmur needs a stress test. Which test also shows the valves?", "Stress echo", ["Exercise EKG", "Thallium MPI", "PET viability"], "Stress echo identifies co-existent structural abnormalities like valve disease."),
    F(43, "A patient has single-vessel disease suspected and a stress echo is negative. Why be cautious?", "Stress echo is less sensitive for single-vessel or mild disease", ["Stress echo is perfect", "Single-vessel disease never matters", "Echo uses radiation"], "Decreased sensitivity for single-vessel disease is listed."),
    F(44, "A patient with a prior large anterior MI and EF 30% needs ischemia testing. Why not stress echo?", "Resting wall motion abnormalities and LV dysfunction reduce its accuracy", ["Echo can't image the heart", "Echo needs caffeine", "Echo is only for valves"], "Resting WMAs and moderate-severe dysfunction lower stress echo accuracy."),

    /* LO 8 */
    F(45, "A patient with ischemic cardiomyopathy has large \"scar\" areas on MPI. The surgeon asks if CABG will help. What test answers this?", "PET myocardial viability scan", ["Exercise EKG", "Repeat thallium", "Holter monitor"], "PET viability tells whether the muscle is alive."),
    F(47, "PET shows the anterior wall with low flow but strong glucose uptake. What do you tell the surgeon?", "The wall is viable (hibernating), so bypass may restore function", ["It is dead scar", "It is normal", "It is pericarditis"], "Flow-metabolism mismatch means viable hibernating muscle."),
    F(47, "PET shows the inferior wall with no flow and no glucose uptake. What does it mean?", "Permanent damage that won't recover with bypass", ["Hibernating muscle", "Stunned muscle", "Normal tissue"], "Matched loss of flow and metabolism is permanent damage."),

    /* LO 9 */
    F(48, "A 60-year-old with typical angina, normal resting EKG, no digoxin, who walks briskly. Which test?", "Exercise treadmill EKG", ["Adenosine SPECT", "Dobutamine echo", "PET"], "Able to exercise with a clean baseline → exercise ECG."),
    F(48, "A 72-year-old with LBBB walks well. Which stress test?", "Vasodilator SPECT or PET", ["Exercise ECG", "Exercise echo", "Dobutamine echo"], "LBBB leads to vasodilator nuclear imaging even if the patient can exercise."),
    F(48, "A wheelchair-bound patient with AF needs a stress test; no asthma. Which test?", "Vasodilator SPECT or PET", ["Exercise ECG", "Dobutamine echo first", "Treadmill"], "Can't exercise with AF leads to vasodilator nuclear imaging."),
    F(48, "A patient can't exercise, has no LBBB or AF, normal wall motion, and severe asthma. Which test?", "Dobutamine echo", ["Adenosine SPECT", "Regadenoson PET", "Exercise EKG"], "Vasodilators are out with bronchospasm, so dobutamine echo is the choice."),
    F(48, "A patient can exercise but takes digoxin and has no resting wall motion abnormalities. Which test?", "Exercise stress echo or exercise nuclear", ["Plain exercise EKG", "Vasodilator PET only", "No test"], "Digoxin needs imaging; with normal wall motion, echo or nuclear both work.")
  ]);
})();
