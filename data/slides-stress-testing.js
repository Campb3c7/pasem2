/* Cardiac Testing, deck 1: Stress Testing (Sillaman), slide by slide.
   Slide text: data/slide-text-stress-testing.js (generated). Pictures: images/stress-slides/.
   Slide 11 is a picture table: its speaker notes say MI within 4 days and HTN 200/115, the table says 2 days and 200/110; questions use the table.
   Anything not on the slides is marked "(standard teaching)". Question ids "stress-testing|s<slide>|<i>", "stress-testing|<lo>|r|<i>": only append. */
(function () {
  "use strict";
  var S = SlideStudy.S, Q = SlideStudy.Q;
  var los = [];

  /* ---------------------------------------------------------------- LO 1 */
  los.push({
    id: "lo1", label: "LO 1", title: "Why and when to order a stress test",
    objective: "Recall the indications for ordering a stress test.",
    slides: [
      S(1, "Title: Stress testing", {
        pic: "<p>Title slide: \"Stress testing\".</p>",
        why: "<p>A stress test asks one question: does this heart run short of blood when it has to work? You make it work (treadmill or a drug), then look for the shortage four ways: symptoms, EKG changes, perfusion defects (nuclear) or wall motion changes (echo).</p>"
      }),
      S(2, "Objectives", {
        why: "<p>Nine objectives, nine blocks here: indications, the exercise protocol, the Duke score, the modalities, their contraindications, drug side effects, perfusion imaging, the PET viability scan, and choosing the right test.</p>",
        q: [
          Q("Which score does this lecture expect you to calculate?", "The Duke treadmill score", ["The TIMI score", "The HEART score", "The SYNTAX score"], "Calculating a Duke treadmill score is one of the objectives.")
        ]
      }),
      S(3, "Why am I ordering a stress test?", {
        why: "<p>Two jobs: <b>diagnose</b> coronary heart disease and <b>assess risk</b> from it. Every indication on the next slides is one of those two.</p>",
        q: [
          Q("What are the two jobs of a stress test?", "Diagnosing coronary heart disease and assessing its risk", ["Measuring cholesterol and BP", "Treating angina and preventing MI", "Finding valve disease and arrhythmias only"], "Stress testing aids diagnosis of and risk assessment for CHD.")
        ]
      }),
      S(4, "Stress test indications (1)", {
        why: "<p>Order one for: <b>symptoms suggesting angina</b> with an <b>intermediate or high pre-test likelihood</b>; <b>acute chest pain after ACS is ruled out</b>; a <b>recent ACS treated without angiography</b> (risk assessment within 3 months if stable); and <b>known CHD with a change</b> in symptoms.</p>",
        q: [
          Q("Which patient with angina-like symptoms is a stress test indicated for?", "One with an intermediate or high pre-test likelihood of CHD", ["One with a very low pre-test likelihood only", "Any patient with no symptoms", "Only patients with a STEMI"], "The indication is symptoms plus intermediate or high pre-test likelihood."),
          Q("A patient with chest pain in the ER has had ACS ruled out. Is a stress test reasonable?", "Yes, acute chest pain after ACS is ruled out is an indication", ["No, never after ER chest pain", "Only after a cath", "Only if the troponin is positive"], "Patients with acute chest pain after ACS has been ruled out are listed."),
          Q("A patient had an NSTEMI managed without angiography. Within what window can a stress test assess his risk?", "Within three months, if he is stable", ["Within 24 hours while still having pain", "Only after 2 years", "Never"], "Stress testing may be used for risk assessment within three months post-ACS if stable.")
        ]
      }),
      S(5, "Stress test indications (2)", {
        why: "<p>More indications: <b>valvular heart disease (dobutamine only)</b>, <b>new heart failure or cardiomyopathy</b>, <b>pre-op evaluation</b> before elective non-cardiac surgery in patients with cardiac conditions, and <b>new arrhythmias</b>.</p>",
        q: [
          Q("Which stress agent is used when the indication is valvular heart disease?", "Dobutamine only", ["Adenosine only", "Regadenoson", "Dipyridamole"], "The slide says valvular heart disease (dobutamine only)."),
          Q("Which of these is a listed stress test indication?", "Newly diagnosed heart failure or cardiomyopathy", ["A routine physical in a healthy 30-year-old", "Seasonal allergies", "A normal EKG at a job screening"], "New HF or cardiomyopathy is listed."),
          Q("When is a stress test listed for surgery?", "Pre-op evaluation before elective non-cardiac surgery in patients with cardiac conditions", ["Before every surgery in everyone", "After surgery only", "Never"], "Pre-op evaluation in patients with cardiac conditions is an indication.")
        ]
      }),
      S(6, "Stress test indications: screening", {
        why: "<p>Screening <b>asymptomatic</b> people is <b>generally not indicated</b>. Rare exceptions: very high risk from risk factors, and high-risk jobs like <b>airline pilots</b>.</p>",
        q: [
          Q("Is stress testing indicated to screen asymptomatic patients?", "Generally no, with rare exceptions", ["Yes, everyone over 40", "Yes, every year", "Only in women"], "Screening asymptomatic patients is generally not indicated."),
          Q("Which asymptomatic person is an example of a rare exception for screening?", "An airline pilot", ["An office worker", "A college student", "A retired teacher with no risk factors"], "High-risk occupations such as airline pilots are the example.")
        ]
      }),
      S(7, "How stress testing shows CAD", {
        why: "<p>A stress test proves a stenosis matters by showing one of four things under stress: <b>symptoms</b>, <b>EKG changes</b>, <b>perfusion defects</b> (MPI) or <b>regional wall motion abnormalities</b> (echo). Each modality reads a different one of these.</p>",
        q: [
          Q("What does a stress echo look for as evidence of ischemia?", "Regional wall motion abnormalities", ["Perfusion defects", "Q waves at rest", "A calcium score"], "Echo shows regional wall motion abnormalities."),
          Q("What does myocardial perfusion imaging look for?", "Perfusion defects", ["Wall motion only", "Valve gradients", "Pericardial fluid"], "MPI shows myocardial perfusion defects."),
          Q("What kind of evidence does a stress test give about a stenosis?", "Physiologic evidence that it is clinically significant", ["A direct picture of the plaque", "The exact percent stenosis", "The LDL level"], "Stress testing provides physiologic evidence of significant stenosis.")
        ]
      })
    ],
    review: [
      Q("A 55-year-old with typical exertional chest pressure has an intermediate pre-test probability. What test fits?", "A stress test", ["No testing", "Screening calcium score only", "Immediate CABG"], "Angina symptoms with intermediate pre-test likelihood is an indication."),
      Q("A healthy, asymptomatic 45-year-old accountant wants a stress test \"to be safe\". What do you say?", "Screening asymptomatic patients is generally not indicated", ["Yes, everyone should have one", "Order a dobutamine echo", "Order a PET scan"], "Screening is generally not appropriate except rare high-risk cases."),
      Q("A patient with known CAD has new, worsening angina. Is a stress test indicated?", "Yes, known CHD with a change in clinical status is an indication", ["No, he already has CAD", "Only after 1 year", "Only if asymptomatic"], "Known CHD with new or worsening symptoms is listed."),
      Q("Which four findings can a stress test use to show ischemia?", "Symptoms, EKG changes, perfusion defects and wall motion abnormalities", ["LDL, HDL, triglycerides and glucose", "Troponin, BNP, CK and lactate", "Murmurs, rubs, gallops and clicks"], "These four kinds of evidence are listed.")
    ]
  });

  /* ---------------------------------------------------------------- LO 2 */
  los.push({
    id: "lo2", label: "LO 2", title: "The exercise stress test and its protocol",
    objective: "Recall the testing protocol for an exercise stress test.",
    slides: [
      S(8, "Testing modalities", {
        pic: "<p>Section title: \"Testing modalities\".</p>",
        why: "<p>Two choices make every stress test: <b>how you stress</b> (exercise or drug) and <b>how you look</b> (EKG alone, nuclear perfusion, or echo). Exercise is preferred whenever the patient can do it.</p>",
        q: [
          Q("Which two choices define a stress test?", "How you stress the heart and how you image it", ["The patient's age and sex", "The time of day and the room", "The LDL and the BP"], "A stress test pairs a stressor (exercise or drug) with a way to look (standard teaching).")
        ]
      }),
      S(9, "Exercise stress test", {
        why: "<p>Exercise is the <b>preferred mode</b>. <b>Exercise duration = functional capacity</b>. It lets you watch <b>symptoms</b>, <b>heart rate response and recovery</b>, <b>BP response</b>, the <b>EKG</b> and <b>arrhythmias</b>. PMHR (in the notes) = predicted maximal heart rate.</p>",
        q: [
          Q("What is the preferred mode of stress testing?", "Exercise", ["Dobutamine", "Adenosine", "Regadenoson"], "Exercise stress testing is the preferred mode."),
          Q("What does exercise duration tell you?", "Functional capacity", ["The LDL level", "The ejection fraction exactly", "The valve area"], "Exercise duration equals functional capacity."),
          Q("What does PMHR stand for?", "Predicted maximal heart rate", ["Peak mean heart rhythm", "Pulse minimum heart rate", "Post-MI heart rate"], "The notes define PMHR as predicted maximal heart rate.")
        ]
      }),
      S(10, "Exercise EKG test: strengths and limits", {
        why: "<p><b>Strengths</b>: cheap, short, shows functional status, <b>high sensitivity for 3-vessel or left main</b> disease, prognostic. <b>Limits</b>: only <b>50% sensitive for single-vessel</b> disease (85% for 3-vessel); overall <b>68% sensitive, 77% specific</b>; beta blockers cause <b>false negatives</b>; <b>non-diagnostic with an abnormal baseline EKG</b> (digoxin, LVH, WPW); poor specificity in premenopausal women, LVH, dig, IVCD, low K, hyperventilation, severe HTN, resting ST changes. You must reach <b>&gt;85% of max HR</b>. Its main value: <b>excluding CAD in low pre-test probability</b> patients.</p>",
        q: [
          Q("What is the overall sensitivity and specificity of the exercise EKG test?", "68% sensitive, 77% specific", ["95% sensitive, 95% specific", "50% sensitive, 99% specific", "85% sensitive, 90% specific"], "The slide gives overall sensitivity 68% and specificity 77%."),
          Q("How sensitive is the exercise EKG for single-vessel disease?", "About 50%", ["About 95%", "About 85%", "About 10%"], "Sensitivity is about 50% for single-vessel disease and 85% for 3-vessel."),
          Q("Why do beta blockers cause false negative exercise EKGs?", "The patient can't reach the needed rate pressure product", ["They cause ST elevation", "They raise the heart rate too much", "They block the EKG leads"], "Beta blockers prevent achieving the rate pressure product."),
          Q("What is the main value of the exercise EKG test?", "Excluding CAD in patients with low pre-test probability", ["Proving CAD in high-risk patients", "Measuring the EF", "Finding valve disease"], "Its main value lies in excluding CAD when pre-test probability is low.")
        ]
      }),
      S(11, "Contraindications to exercise treadmill testing", {
        pic: "<p>A table. <b>Absolute</b>: acute MI (within two days), unstable angina, uncontrolled arrhythmias causing symptoms or hemodynamic compromise, symptomatic severe aortic stenosis, uncontrolled symptomatic heart failure, acute PE or pulmonary infarction, acute myocarditis or pericarditis, active endocarditis, acute aortic dissection, acute noncardiac disorder that may affect or be aggravated by exercise (infection, renal failure, thyrotoxicosis), inability to obtain consent. <b>Relative</b> (can be overridden if benefit outweighs risk): left main stenosis or equivalent, moderate stenotic valve disease, electrolyte abnormalities, severe hypertension (systolic ≥200 and/or diastolic ≥110), tachyarrhythmias or bradyarrhythmias including AF with uncontrolled rate, HCM and other outflow obstruction, mental or physical impairment preventing cooperation, high-degree AV block.</p>",
        why: "<p>Don't run someone on a treadmill whose heart is already in crisis. <b>Absolute</b>: MI within 2 days, unstable angina, symptomatic severe AS, uncontrolled HF or arrhythmias, acute PE, myocarditis/pericarditis, endocarditis, aortic dissection. <b>Relative</b>: left main stenosis, moderate valve stenosis, electrolyte problems, <b>BP ≥200/110</b>, uncontrolled rate, HCM, high-degree AV block. (The speaker notes say MI within 4 days and 200/115; the table says 2 days and 200/110.)</p>",
        q: [
          Q("Which of these is an ABSOLUTE contraindication to treadmill testing?", "Symptomatic severe aortic stenosis", ["Moderate valve stenosis", "Electrolyte abnormalities", "High-degree AV block"], "Symptomatic severe AS is on the absolute list."),
          Q("Per the table, an acute MI within how many days is an absolute contraindication?", "Two days", ["Thirty days", "One year", "Six months"], "The table lists acute MI within two days."),
          Q("Severe hypertension above what level is a relative contraindication?", "Systolic ≥200 and/or diastolic ≥110", ["Systolic ≥140", "Systolic ≥160", "Diastolic ≥90"], "The table lists systolic ≥200 and/or diastolic ≥110."),
          Q("Can a relative contraindication be overridden?", "Yes, if the benefit outweighs the risk of exercise", ["Never", "Only for absolute ones", "Only with a signed waiver"], "The table's footnote says relative contraindications can be superseded.")
        ]
      }),
      S(12, "Exercise stress testing: the goal", {
        why: "<p>Aim for <b>6-12 minutes</b> of exercise so the heart reaches maximal demand. Make it <b>symptom limited</b>, not just stopped at 85% PMHR. Most labs use a <b>treadmill and the Bruce protocol</b>.</p>",
        q: [
          Q("How long should an exercise stress test ideally last?", "6-12 minutes", ["1-2 minutes", "30-40 minutes", "Exactly 20 minutes"], "The goal is 6-12 minutes to reach maximal metabolic demand."),
          Q("When should an exercise stress test be stopped?", "When symptoms limit it, not just at 85% PMHR", ["As soon as 85% PMHR is reached", "After exactly 3 minutes", "When the patient sweats"], "Tests should be symptom limited."),
          Q("Which protocol is most often used on the treadmill?", "Bruce protocol", ["Naughton protocol", "Cornell protocol", "Wells protocol"], "Most tests use the Bruce protocol.")
        ]
      }),
      S(13, "The test in action", {
        pic: "<p>A photo of a patient on a treadmill wearing EKG electrodes and a BP cuff, with staff watching the monitor.</p>",
        why: "<p>During the test the patient wears <b>EKG leads and a BP cuff</b> while staff watch the monitor: you're tracking HR, BP, rhythm, ST segments and symptoms the whole time.</p>",
        q: [
          Q("In the photo, what is monitored on the patient during an exercise test?", "EKG and blood pressure", ["EEG and glucose", "Oxygen saturation only", "Nothing until the end"], "The photo shows EKG electrodes and a BP cuff.")
        ]
      }),
      S(14, "Treadmill protocols (Bruce)", {
        pic: "<p>A table of treadmill protocols (Modified Bruce, Bruce, Cornell, Naughton) with grade, speed, time, O2 uptake and METs. Bruce (arrow): stage 1 = 10% grade, 1.7 mph, 3 min, 4.5 METs; stage 2 = 12%, 2.5 mph, 6 min, 7 METs; stage 3 = 14%, 3.4 mph, 9 min, 10 METs; stage 4 = 16%, 4.2 mph, 12 min, 13 METs. Modified Bruce starts at 0% and 5% grade at 1.7 mph. 1 MET = 3.5 mL O2/kg/min.</p>",
        why: "<p>The Bruce protocol raises <b>speed and grade every 3 minutes</b>: stage 1 is 1.7 mph at 10% (4.5 METs), stage 4 is 4.2 mph at 16% (13 METs). <b>1 MET = 3.5 mL O2/kg/min</b>, the oxygen used sitting at rest. The <b>Modified Bruce</b> adds two easier starting stages for frail patients.</p>",
        q: [
          Q("How often do Bruce protocol stages change?", "Every 3 minutes", ["Every 30 seconds", "Every 10 minutes", "Only once"], "Each Bruce stage lasts 3 minutes."),
          Q("What is 1 MET?", "3.5 mL O2/kg/min", ["1 L O2/min", "10 mL O2/kg/min", "100 kcal"], "The table footnote defines 1 MET as 3.5 mL O2/kg/min."),
          Q("What does the Modified Bruce protocol add?", "Easier starting stages at 0% and 5% grade", ["Faster speeds", "Running backwards", "A drug infusion"], "Modified Bruce has stages 0 and 1/2 before standard stage 1.")
        ]
      }),
      S(15, "Exercise test endpoints", {
        pic: "<p>A table of endpoints. <b>Patient-determined</b>: wants to stop, significant chest discomfort, marked fatigue or severe dyspnea, other limiting symptoms. <b>Provider-determined</b>: patient doesn't look well (ataxia, confusion, pallor, cyanosis), exertional hypotension (systolic below standing rest), systolic &gt;250, diastolic &gt;120, ECG endpoints (marked ST depression, new BBB that can't be told from VT, new Mobitz 2 or complete AV block, VT or VF, increasing ventricular ectopy, onset of SVT), equipment failure. <b>Protocol-determined</b> (submaximal tests): heart rate (e.g. 120-140) or workload (e.g. 5 METs).</p>",
        why: "<p>Stop the test when the <b>patient</b> needs to (chest pain, severe dyspnea, fatigue), when the <b>provider</b> sees danger (looks unwell, <b>BP falls</b> below resting, systolic &gt;250 or diastolic &gt;120, marked ST depression, new AV block, VT/VF, rising ectopy, SVT), or when a <b>submaximal protocol</b> target is met.</p>",
        q: [
          Q("During a stress test, the systolic BP falls below the resting standing value. What do you do?", "Stop the test: exertional hypotension is an endpoint", ["Speed up the treadmill", "Ignore it", "Give a beta blocker and continue"], "Exertional hypotension is a provider-determined endpoint."),
          Q("Above what systolic BP should a provider stop the exercise test?", "250 mm Hg", ["140 mm Hg", "180 mm Hg", "300 mm Hg"], "Systolic BP over 250 is a provider endpoint."),
          Q("Which EKG change is a reason to stop the test?", "New Mobitz 2 or complete AV block", ["Sinus tachycardia appropriate for workload", "Rare isolated PACs", "Mild upsloping J-point depression"], "New high-grade AV block is an ECG endpoint.")
        ]
      }),
      S(16, "Abnormal test", {
        pic: "<p>A figure of ST depression with exercise: no ST depression = negative test; upsloping ST depression (&gt;1 mm) = equivocal; horizontal ST depression (&gt;1 mm) and downsloping ST depression (&gt;1 mm) = positive. Next to it, EKG strips at baseline, stage 1, stage 2 and recovery showing ST depression developing with exercise.</p>",
        why: "<p>The <b>shape</b> of ST depression matters. <b>Upsloping</b> &gt;1 mm = <b>equivocal</b>. <b>Horizontal or downsloping</b> &gt;1 mm = <b>positive</b>. No ST depression = negative.</p>",
        q: [
          Q("Horizontal ST depression of more than 1 mm during exercise means what?", "A positive stress test", ["A negative stress test", "An equivocal test", "Artifact"], "Horizontal or downsloping ST depression >1 mm is positive."),
          Q("Upsloping ST depression of more than 1 mm during exercise means what?", "An equivocal test", ["A positive test", "A negative test", "An STEMI"], "The figure labels upsloping ST depression as equivocal."),
          Q("Which ST pattern is the most convincing for ischemia?", "Downsloping ST depression", ["Upsloping ST depression", "No ST change", "J-point elevation at rest"], "Downsloping ST depression >1 mm is a positive test.")
        ]
      })
    ],
    review: [
      Q("A patient on the Bruce protocol completes stage 3. Roughly how many METs is that?", "About 10 METs", ["About 2 METs", "About 4.5 METs", "About 20 METs"], "Bruce stage 3 is about 10 METs on the table."),
      Q("A patient on metoprolol reaches only 70% PMHR with a normal EKG. How should you read the test?", "Possibly a false negative: target HR wasn't reached and beta blockers blunt the response", ["Definitely normal", "Positive for ischemia", "Diagnostic of left main disease"], "Beta blockers cause false negatives and >85% PMHR is needed for accuracy."),
      Q("A patient on digoxin with LVH needs testing. Why is a plain exercise EKG a poor choice?", "An abnormal baseline EKG makes it non-diagnostic", ["Digoxin makes it more accurate", "LVH improves sensitivity", "Nothing is wrong with it"], "The exercise EKG is non-diagnostic with an abnormal baseline (dig, LVH, WPW)."),
      Q("A patient has a BP of 210/115 at rest before a treadmill test. What does the table say?", "Severe hypertension is a relative contraindication", ["It is an ideal time to test", "It is an absolute contraindication", "BP doesn't matter"], "Systolic ≥200 and/or diastolic ≥110 is a relative contraindication."),
      Q("A patient's test shows 2 mm downsloping ST depression at stage 2. What is the result?", "Positive", ["Negative", "Equivocal", "Non-diagnostic"], "Downsloping ST depression >1 mm is a positive test.")
    ]
  });

  /* ---------------------------------------------------------------- LO 3 */
  los.push({
    id: "lo3", label: "LO 3", title: "High-risk tests and the Duke treadmill score",
    objective: "Recall how to calculate a Duke treadmill score.",
    slides: [
      S(17, "What is a high-risk test?", {
        why: "<p>High-risk features: <b>short exercise, under 5 METs</b>; <b>ST depression ≥2 mm</b>; low <b>peak systolic BP (&lt;130)</b> or <b>BP falling</b> below the resting standing value; <b>not reaching target HR</b>; <b>exercise-induced angina</b>; frequent <b>ventricular ectopy at low workload</b>.</p>",
        q: [
          Q("Exercise duration under how many METs is a high-risk feature?", "5 METs", ["15 METs", "10 METs", "20 METs"], "Short exercise duration less than 5 METs is high risk."),
          Q("How much ST depression marks a high-risk test?", "2 mm or more", ["0.5 mm", "1 mm upsloping", "Any J-point change"], "Significant ST depression is a magnitude ≥2 mm."),
          Q("What peak systolic BP is a high-risk feature?", "Under 130 mm Hg", ["Over 200 mm Hg", "Exactly 160 mm Hg", "Over 250 mm Hg"], "Low peak systolic BP under 130 is listed.")
        ]
      }),
      S(18, "Duke treadmill score", {
        why: "<p><b>Duke score = exercise minutes − (5 × max ST deviation in mm) − (4 × angina index)</b>. Angina index: <b>0 = none, 1 = non-limiting, 2 = limited the test</b>. <b>Low risk ≥ +5</b>, <b>moderate −10 to +4</b>, <b>high ≤ −11</b>.</p>",
        q: [
          Q("What is the Duke treadmill score formula?", "Exercise time − (5 × ST deviation mm) − (4 × angina index)", ["Exercise time + ST deviation + angina", "METs × heart rate ÷ BP", "Age − exercise time"], "That is the formula on the slide."),
          Q("In the Duke score, what angina index is chest pain that stopped the test?", "2", ["0", "1", "5"], "Exercise-limiting angina scores 2."),
          Q("Which Duke score is low risk?", "+5 or higher", ["−11 or lower", "−10 to +4", "Exactly 0"], "Low risk is a score of +5 or more."),
          Q("Which Duke score is high risk?", "−11 or lower", ["+5 or higher", "−10 to +4", "+10"], "High risk is a score of −11 or less.")
        ]
      }),
      S(19, "Duke score example", {
        why: "<p>8 minutes, 1 mm ST deviation, non-limiting chest pain: <b>8 − 5(1) − 4(1) = −1</b> → <b>moderate risk</b>.</p>",
        q: [
          Q("In the slide's example (8 min, 1 mm ST, non-limiting pain), what is the Duke score?", "−1", ["+8", "−9", "+3"], "8 − 5 − 4 = −1."),
          Q("What risk category is a Duke score of −1?", "Moderate", ["Low", "High", "Not scored"], "−10 to +4 is moderate risk.")
        ]
      })
    ],
    review: [
      Q("A patient exercises 10 minutes with no ST change and no angina. What is the Duke score and risk?", "+10, low risk", ["−10, moderate risk", "0, moderate risk", "+10, high risk"], "10 − 0 − 0 = +10, which is ≥+5."),
      Q("A patient exercises 3 minutes with 3 mm ST depression and angina that stops the test. What is the Duke score?", "−20", ["−4", "+3", "−12"], "3 − 15 − 8 = −20."),
      Q("What risk group is a Duke score of −20?", "High", ["Low", "Moderate", "Normal"], "−11 or lower is high risk."),
      Q("A patient stops at 4 METs with frequent ventricular couplets. How would you describe the test?", "High risk", ["Low risk", "Normal", "Non-diagnostic only"], "Under 5 METs and ectopy at low workload are high-risk features.")
    ]
  });

  /* ---------------------------------------------------------------- LO 5 (exercise EKG) */
  los.push({
    id: "lo5a", label: "LO 5", title: "Who can't have a plain exercise EKG test",
    objective: "Recognize the contraindications to each stress testing modality.",
    slides: [
      S(20, "Conditions preventing exercise EKG testing", {
        why: "<p>Some patients can't get a useful <b>exercise EKG alone</b>: <b>LBBB</b>, <b>V-pacing</b>, <b>≥1 mm resting ST-T changes</b>, <b>LVH</b>, <b>digoxin</b>, <b>prior revascularization</b>, when you need to <b>localize ischemia</b>, or when they <b>can't reach 85% PMHR</b>. They need imaging (nuclear or echo), and some need a drug instead of exercise.</p>",
        q: [
          Q("A patient has a left bundle branch block. Why is an exercise EKG alone not useful?", "LBBB prevents reading ST changes", ["LBBB makes the EKG more accurate", "LBBB is a reason to skip all testing", "LBBB only matters for echo"], "LBBB is listed as a condition preventing exercise EKG testing."),
          Q("A patient on digoxin needs a stress test. Can a plain exercise EKG be used?", "No, digoxin is listed as preventing it", ["Yes, it is ideal", "Only at night", "Only with dobutamine"], "On digoxin is on the list."),
          Q("You need to know WHICH wall is ischemic. Is an exercise EKG alone enough?", "No, ischemic localization needs imaging", ["Yes, the EKG always localizes", "Yes, with V-pacing", "Only in women"], "Ischemic localization is listed as a reason to add imaging.")
        ]
      })
    ],
    review: [
      Q("A patient with a ventricular pacemaker needs a stress test. What is the problem with an exercise EKG?", "V-pacing makes the ST segments unreadable", ["V-pacing makes the EKG more sensitive", "Pacers can't exercise", "Nothing"], "V-pacing is listed as preventing exercise EKG testing."),
      Q("Which patient CAN have a plain exercise EKG test?", "One with a normal resting EKG who can reach 85% PMHR", ["One with LBBB", "One with LVH on digoxin", "One with prior CABG who needs localization"], "The listed conditions all rule out the EKG-only test.")
    ]
  });

  /* ---------------------------------------------------------------- LO 7 */
  los.push({
    id: "lo7", label: "LO 7", title: "Myocardial perfusion imaging (MPI)",
    objective: "Explain the concepts of myocardial perfusion imaging and how it predicts coronary ischemia.",
    slides: [
      S(21, "How stress testing shows CAD (again)", {
        why: "<p>Back to the four kinds of evidence; this section is about <b>perfusion defects</b>, seen with a radioactive tracer.</p>",
        q: [
          Q("Which of the four kinds of stress evidence does myocardial perfusion imaging use?", "Perfusion defects", ["Wall motion only", "Symptoms only", "Troponin"], "MPI detects myocardial perfusion defects.")
        ]
      }),
      S(22, "Myocardial perfusion images", {
        pic: "<p>Nuclear perfusion images: rows of colored rings (short-axis slices of the left ventricle) at stress and at rest, side by side.</p>",
        why: "<p>Each ring is a slice of the left ventricle. Bright = tracer arrived = good blood flow. A dim or missing segment is a <b>defect</b>. You always compare <b>stress</b> rows with <b>rest</b> rows.</p>",
        q: [
          Q("On a perfusion scan, what does a dim or missing area in the ring mean?", "Reduced blood flow to that segment", ["Extra muscle", "Normal flow", "A valve"], "Less tracer means less perfusion (standard teaching)."),
          Q("Which two sets of images are compared on an MPI study?", "Stress and rest", ["Morning and evening", "Before and after a meal", "Left arm and right arm"], "The images show stress and rest rows.")
        ]
      }),
      S(23, "Myocardial perfusion imaging (MPI)", {
        why: "<p>MPI = a <b>visual comparison of blood flow at rest and under stress</b> using a radioactive tracer (<b>thallium or technetium</b>), imaged with <b>SPECT or PET</b>. The picture shows a narrowed coronary feeding an area of reduced flow.</p>",
        q: [
          Q("Which radioactive tracers are used for MPI?", "Thallium or technetium", ["Iodine or barium", "Gadolinium only", "Fluorine-18 glucose only"], "The slide lists thallium or technetium."),
          Q("Which two cameras can be used for MPI?", "SPECT or PET", ["MRI or CT", "X-ray or ultrasound", "EEG or EMG"], "MPI uses SPECT or PET."),
          Q("What does MPI compare?", "Myocardial blood flow at rest versus under stress", ["Valve areas", "Pericardial thickness", "Electrical axis"], "MPI assesses perfusion between rest and stress.")
        ]
      }),
      S(24, "What is an abnormal scan?", {
        why: "<p><b>Normal at rest, reduced with stress = ischemia</b> (a reversible defect). <b>Reduced at rest AND stress = prior MI or scar</b> (a fixed defect).</p>",
        q: [
          Q("Perfusion is normal at rest but reduced during stress. What does this mean?", "Ischemia", ["Old infarct or scar", "Normal heart", "Artifact only"], "Preserved rest perfusion with a stress defect indicates ischemia."),
          Q("Perfusion is reduced both at rest and during stress. What does this mean?", "Prior MI or scar", ["Ischemia", "Normal heart", "Vasospasm only"], "A defect at rest and stress suggests infarction or scarring."),
          Q("Which defect is called reversible?", "One present at stress that fills in at rest", ["One present at both rest and stress", "No defect at all", "A defect only at rest"], "A defect that appears with stress and resolves at rest is reversible ischemia (standard teaching).")
        ]
      }),
      S(25, "The nuclear camera", {
        pic: "<p>A photo of a patient lying on a nuclear (SPECT) camera table with the detector heads over the chest.</p>",
        why: "<p>After the tracer is injected, the patient lies under the <b>gamma camera</b> (SPECT) that counts where the tracer went in the heart muscle (standard teaching). It takes time, which is one of MPI's limits.</p>",
        q: [
          Q("What does the camera in the photo detect?", "Where the radioactive tracer went in the heart", ["Sound waves from the valves", "The electrical axis", "Coronary calcium"], "The nuclear camera images the tracer (standard teaching).")
        ]
      }),
      S(26, "Reading a SPECT study", {
        pic: "<p>A SPECT display: short-axis, horizontal long-axis and vertical long-axis slices at stress and rest, with bull's-eye polar maps.</p>",
        why: "<p>The heart is sliced three ways (short axis, horizontal long axis, vertical long axis) and summed in a <b>bull's-eye map</b>, so each wall and coronary territory can be checked at stress and rest (standard teaching).</p>",
        q: [
          Q("What is the round summary picture on a SPECT study called?", "A bull's-eye (polar) map", ["An echo window", "A calcium score", "A strip"], "The display shows bull's-eye polar maps (standard teaching).")
        ]
      }),
      S(27, "Stress MPI: strengths", {
        why: "<p>MPI beats the exercise EKG: <b>85-90% sensitive and about 90% specific</b>, <b>25% more sensitive for single-vessel disease</b>, <b>95-100% for 3-vessel</b>. Works with <b>LVH, digoxin, IVCD</b>. Gated SPECT shows <b>perfusion and function together</b>. Works with drug stress as well as exercise, adds prognosis, can show <b>viability</b>, and is quantitative. Adding it to a treadmill EKG separates true from false positive ST depression.</p>",
        q: [
          Q("What is the sensitivity of SPECT MPI for detecting CAD in chest pain patients?", "85-90%", ["50%", "68%", "100% always"], "The slide gives 85-90% sensitivity."),
          Q("How much more sensitive is SPECT than exercise EKG for single-vessel disease?", "About 25% higher", ["About 5% lower", "The same", "About 90% higher"], "Sensitivity for single-vessel disease is 25% higher with SPECT."),
          Q("A patient has LVH on digoxin. Which test still works well?", "Stress MPI", ["Plain exercise EKG", "Resting EKG alone", "No test works"], "MPI is good in patients with LVH, dig and IVCD."),
          Q("What does gated SPECT add?", "Simultaneous perfusion and function", ["Coronary calcium score", "Valve gradients", "Blood pressure"], "Gated SPECT evaluates perfusion and function together.")
        ]
      }),
      S(28, "Stress MPI: limitations", {
        why: "<p>MPI downsides: <b>thallium false positives</b> (especially <b>women and obese</b> patients), <b>long procedure</b> with technetium, <b>higher cost</b>, <b>radiation</b>, and <b>poor images in obesity</b>.</p>",
        q: [
          Q("Which patients have more false positive thallium scans?", "Women and obese patients", ["Young men", "Thin athletes", "Children"], "The slide says false positives are common in women and obese patients."),
          Q("Which downside does MPI have that stress echo doesn't?", "Radiation exposure", ["No pictures", "Can't test the heart", "Needs no tracer"], "MPI uses radioactive tracers; stress echo has no radiation."),
          Q("Why are MPI images poor in some patients?", "Obesity degrades the images", ["Tall height", "Low LDL", "Normal BP"], "Poor images in obese patients is a listed limitation.")
        ]
      })
    ],
    review: [
      Q("A stress MPI shows an inferior wall defect at stress that fills in at rest. What is the interpretation?", "Reversible ischemia in the inferior wall", ["Old inferior MI", "Normal scan", "Artifact from obesity"], "A stress defect that normalizes at rest means ischemia."),
      Q("A stress MPI shows an anterior defect at both stress and rest. What is it?", "Scar from a prior MI", ["Reversible ischemia", "Normal", "Vasospasm"], "A fixed defect at rest and stress suggests infarction or scar."),
      Q("An obese woman has an abnormal thallium scan but clean coronaries on cath. What explains it?", "A thallium false positive, common in women and obese patients", ["Missed MI", "Cath error", "She has 3-vessel disease"], "Thallium has suboptimal specificity in women and obese patients."),
      Q("Why add perfusion imaging to a treadmill test with ST depression?", "To tell true positive from false positive ST depression", ["To lower the cost", "To avoid radiation", "To shorten the test"], "Stress perfusion helps separate true from false positive ETT results."),
      Q("Which test detects 3-vessel disease with 95-100% sensitivity?", "Exercise SPECT", ["Exercise EKG", "Resting EKG", "Chest X-ray"], "The sensitivity for 3VD with exercise SPECT is 95-100%.")
    ]
  });

  /* ---------------------------------------------------------------- LO 4-6 */
  los.push({
    id: "lo46", label: "LO 4-6", title: "Drug stress: agents, contraindications, side effects",
    objective: "Recall the different stress testing modalities. Recognize the contraindications to each stress testing modality. Recognize the side effects of each pharmacologic agent.",
    slides: [
      S(29, "Pharmacologic stress testing", {
        why: "<p>Use a drug when the patient <b>can't exercise enough</b> or has a condition that <b>prevents a treadmill EKG test</b>.</p>",
        q: [
          Q("When is pharmacologic stress testing used?", "When the patient can't exercise enough or has a condition preventing a treadmill EKG", ["Always first", "Only in athletes", "Only for valve disease"], "Drugs replace exercise when exercise isn't possible or useful."),
          Q("A 78-year-old with severe knee arthritis can't walk on a treadmill. What kind of stress test fits?", "A pharmacologic stress test", ["An exercise EKG", "No test is possible", "A resting EKG only"], "Inability to exercise is the reason for drug stress.")
        ]
      }),
      S(30, "Pharmacologic stressing agents", {
        why: "<p>Two drug families. <b>Vasodilators</b>: <b>dipyridamole, adenosine, regadenoson</b>, which dilate normal coronaries so a narrowed one shows up as a relative flow defect. <b>Inotrope/chronotrope</b>: <b>dobutamine</b>, which makes the heart beat faster and harder, like exercise.</p>",
        q: [
          Q("Which drug is a positive inotrope and chronotrope used for stress testing?", "Dobutamine", ["Adenosine", "Regadenoson", "Dipyridamole"], "Dobutamine is the inotrope/chronotrope on the slide."),
          Q("Which three agents are vasodilator stress drugs?", "Dipyridamole, adenosine and regadenoson", ["Dobutamine, epinephrine and atropine", "Nitroglycerin, nitroprusside and hydralazine", "Metoprolol, diltiazem and digoxin"], "The vasodilators listed are dipyridamole, adenosine and regadenoson."),
          Q("How does a vasodilator reveal a stenosis on perfusion imaging?", "Normal arteries dilate more, so the narrowed territory gets relatively less flow", ["It speeds up the heart", "It closes the narrowed artery", "It raises BP"], "Flow mismatch between normal and stenosed territories shows as a defect (standard teaching).")
        ]
      }),
      S(31, "Chemical stress indications: vasodilator or dobutamine?", {
        why: "<p><b>Vasodilator</b>: can't exercise, exercise contraindicated, <b>LBBB or pacemaker</b>, digoxin. <b>Dobutamine</b>: can't exercise <b>and</b> has a <b>contraindication to vasodilators</b>, or you are <b>evaluating valve disease</b>.</p>",
        q: [
          Q("A patient with LBBB needs a perfusion stress test. Which kind of agent fits?", "A vasodilator", ["Dobutamine", "Exercise", "No stress"], "LBBB and pacemaker are vasodilator indications."),
          Q("When is dobutamine chosen over a vasodilator?", "When the patient can't exercise and has a contraindication to vasodilators, or for valve disease", ["Always first", "For LBBB", "When the patient can run"], "Dobutamine is for vasodilator contraindications and valve evaluation."),
          Q("A patient with severe asthma can't exercise. Which agent fits?", "Dobutamine", ["Adenosine", "Dipyridamole", "Regadenoson"], "Asthma is a vasodilator contraindication, so dobutamine is used.")
        ]
      }),
      S(32, "Contraindications: dipyridamole and adenosine", {
        why: "<p>Avoid dipyridamole/adenosine with: <b>severe asthma or COPD with active wheezing</b>, <b>SBP &lt;90</b>, <b>HR &lt;40</b>, <b>caffeine or xanthines within 12 hours</b> (they block adenosine), <b>dipyridamole (Aggrenox) within 48 hours</b>, <b>aminophylline within 24 hours</b>, and <b>high-degree AV block or sick sinus syndrome</b>. The notes flag this as a test question.</p>",
        q: [
          Q("How long before an adenosine stress test must caffeine be stopped?", "12 hours", ["1 hour", "1 week", "Not at all"], "Xanthines and caffeine within 12 hours block adenosine."),
          Q("Why does caffeine ruin an adenosine stress test?", "It blocks the effects of adenosine", ["It causes a false positive", "It raises troponin", "It thins the blood"], "Caffeine and xanthines block adenosine's effect."),
          Q("Which lung condition contraindicates dipyridamole or adenosine?", "Severe asthma or COPD with active wheezing", ["Mild seasonal rhinitis", "Healed pneumonia", "Normal lungs"], "Active bronchospasm is a contraindication."),
          Q("Which heart rhythm problem contraindicates adenosine?", "High-degree AV block or sick sinus syndrome", ["Sinus rhythm at 70", "Isolated PACs", "First-degree AV block alone"], "High-degree AV block and sick sinus syndrome are listed.")
        ]
      }),
      S(33, "Side effects: dipyridamole and adenosine", {
        why: "<p>Common side effects: <b>chest pain (20%)</b>, <b>dyspnea, dizziness and headache (12% each)</b>, ST-T changes (5-8%) and nausea (3%). Chest pain is the most common.</p>",
        q: [
          Q("What is the most common side effect of dipyridamole or adenosine?", "Chest pain (20%)", ["Nausea (3%)", "Rash", "Seizure"], "Chest pain at 20% leads the list."),
          Q("About how often does dyspnea occur with dipyridamole or adenosine?", "12%", ["50%", "1%", "90%"], "Dyspnea occurs in 12%.")
        ]
      }),
      S(34, "Contraindications: regadenoson (Lexiscan)", {
        why: "<p>Regadenoson: avoid with <b>second- or third-degree AV block without a pacemaker</b>, <b>sinus node dysfunction without a pacemaker</b>, and <b>hypotension</b>.</p>",
        q: [
          Q("What is the brand name of regadenoson?", "Lexiscan", ["Aggrenox", "Adenocard", "Dobutrex"], "The slide gives regadenoson (Lexiscan)."),
          Q("A patient with third-degree AV block and no pacemaker needs a vasodilator stress test. Can regadenoson be used?", "No, it is contraindicated without a pacemaker", ["Yes, it is preferred", "Only at double dose", "Only with caffeine"], "2nd or 3rd degree AV block without a pacemaker is a contraindication."),
          Q("A patient with sinus node dysfunction HAS a working pacemaker. Is that a regadenoson contraindication?", "No, the contraindication is sinus node dysfunction without a pacemaker", ["Yes, always", "Only in women", "Only at night"], "The slide limits it to sinus node dysfunction without a pacemaker.")
        ]
      }),
      S(35, "Side effects: regadenoson", {
        why: "<p>Regadenoson side effects: <b>dyspnea (28%)</b> and <b>headache (26%)</b> are most common, then tachycardia (22%), flushing (16%), PVCs (14%), chest pain (13%) and ST depression (12%).</p>",
        q: [
          Q("What is the most common side effect of regadenoson on the slide?", "Dyspnea (28%)", ["Chest pain (13%)", "PVCs (14%)", "Constipation"], "Dyspnea at 28% is the highest number listed."),
          Q("About how often does headache occur with regadenoson?", "26%", ["2%", "60%", "90%"], "Headache is listed at 26%.")
        ]
      }),
      S(36, "Dobutamine", {
        why: "<p>Dobutamine is a <b>synthetic catecholamine</b> that stimulates <b>beta-1</b> receptors: faster rate (<b>chronotropic</b>) and stronger squeeze (<b>inotropic</b>), mimicking exercise. It is the <b>preferred drug for stress echo</b>.</p>",
        q: [
          Q("Which receptor does dobutamine mainly stimulate?", "Beta-1", ["Alpha-1", "Muscarinic", "Adenosine A2A"], "Dobutamine stimulates beta-1 adrenergic receptors."),
          Q("Dobutamine is the preferred drug for which test?", "Stress echocardiography", ["Nuclear MPI", "PET viability", "Coronary CT"], "The slide calls it the preferred agent for stress echo."),
          Q("How does dobutamine stress the heart?", "It raises heart rate and contractility", ["It dilates the coronaries", "It slows the heart", "It blocks beta receptors"], "It has chronotropic and inotropic effects.")
        ]
      }),
      S(37, "Contraindications: dobutamine", {
        why: "<p>Avoid dobutamine with: <b>unstable angina</b>, <b>recent MI</b>, <b>hypotension or hypertension</b>, <b>tachyarrhythmias</b>, <b>symptomatic severe AS</b>, <b>HCM</b>, and <b>aortic dissection or large aneurysm</b>: all situations where a harder, faster heart could do damage.</p>",
        q: [
          Q("A patient has a large aortic aneurysm. Which stress drug should be avoided?", "Dobutamine", ["Regadenoson", "Adenosine", "None"], "Aortic dissection or large aneurysm is a dobutamine contraindication."),
          Q("Which rhythm problem contraindicates dobutamine?", "Tachyarrhythmias", ["Sinus bradycardia at 55", "First-degree AV block", "Isolated PACs"], "Tachyarrhythmias are on the dobutamine list."),
          Q("Why is dobutamine avoided in hypertrophic cardiomyopathy?", "Stronger contraction worsens outflow obstruction", ["It causes bronchospasm", "It blocks AV conduction", "It lowers the heart rate"], "HCM is listed; a harder squeeze worsens the obstruction (standard teaching).")
        ]
      }),
      S(38, "Side effects: dobutamine", {
        why: "<p>Side effects happen in about <b>75%</b>: <b>ischemic ST depression (33%)</b>, <b>chest pain (31%)</b>, <b>palpitations (29%)</b>, headache, flushing and dyspnea (14% each), and significant <b>arrhythmias (8-10%)</b>.</p>",
        q: [
          Q("About what fraction of patients get side effects from dobutamine?", "About 75%", ["About 5%", "About 25%", "Nearly 100%"], "Side effects occur in approximately 75%."),
          Q("Which dobutamine side effect is the riskiest?", "Significant supraventricular or ventricular arrhythmias (8-10%)", ["Flushing", "Headache", "Mild palpitations"], "Arrhythmias are the dangerous listed side effect (standard teaching for the ranking)."),
          Q("How often does dobutamine cause ischemic ST depression?", "33%", ["3%", "75%", "1%"], "Ischemic ST depression is listed at 33%.")
        ]
      }),
      S(39, "MPI scan: which drug", {
        why: "<p><b>Vasodilators are preferred for nuclear MPI</b> and can be combined with low-level exercise. <b>Regadenoson</b> can be injected <b>during exercise</b> if a patient starts an exercise SPECT but can't reach the workload.</p>",
        q: [
          Q("Which class of agents is preferred for nuclear perfusion (MPI) stress?", "Vasodilators", ["Inotropes", "Beta blockers", "Nitrates"], "Vasodilators are preferred for radionuclide MPI."),
          Q("A patient starts an exercise SPECT but tires before reaching the workload. What can be given?", "Regadenoson during exercise", ["Dobutamine after the scan", "Caffeine", "Atropine only"], "Regadenoson's pharmacokinetics allow injection during exercise.")
        ]
      })
    ],
    review: [
      Q("A patient drank two cups of coffee this morning and is booked for an adenosine MPI this afternoon. What do you do?", "Reschedule: caffeine within 12 hours blocks adenosine", ["Go ahead", "Switch to exercise EKG with LBBB", "Give more caffeine"], "Caffeine within 12 hours is a contraindication."),
      Q("A patient with severe COPD and wheezing needs a stress test and can't walk. Which agent?", "Dobutamine", ["Adenosine", "Dipyridamole", "Regadenoson"], "Active wheezing contraindicates vasodilators, so dobutamine is used."),
      Q("A patient with aortic dissection repair pending and severe asthma needs stress testing. What is the problem?", "Dobutamine is contraindicated by the aorta and vasodilators by the asthma", ["No problem", "Use both", "Use caffeine"], "Each agent has one of the patient's conditions as a contraindication."),
      Q("During a regadenoson scan, a patient becomes short of breath. How common is this?", "Very common: dyspnea is the top side effect at 28%", ["Very rare", "It means an MI", "It never happens"], "Dyspnea is listed at 28% for regadenoson."),
      Q("A patient took Aggrenox yesterday. Which stress drugs are a problem?", "Dipyridamole or adenosine, since dipyridamole within 48 hours is a contraindication", ["Dobutamine only", "No stress drugs", "Exercise only"], "Recent dipyridamole use within 48 hours is listed.")
    ]
  });

  /* ---------------------------------------------------------------- LO 4 (echo) */
  los.push({
    id: "lo4b", label: "LO 4", title: "Stress echocardiography",
    objective: "Recall the different stress testing modalities.",
    slides: [
      S(40, "How stress testing shows CAD (echo)", {
        why: "<p>The fourth kind of evidence: <b>regional wall motion abnormalities</b>, seen on echo.</p>",
        q: [
          Q("Stress echo looks for which of the four kinds of stress evidence?", "Regional wall motion abnormalities", ["Perfusion defects with tracer", "ST changes only", "Symptoms only"], "Echo detects regional wall motion abnormalities.")
        ]
      }),
      S(41, "Stress echocardiography: uses", {
        why: "<p>Stress echo detects <b>significant CHD</b>, <b>localizes ischemia</b> in known CHD, assesses <b>valve disease</b> and <b>viability</b>. Ischemia shows as a <b>new or worsening wall motion abnormality</b> under stress.</p>",
        q: [
          Q("How does stress echo detect ischemia?", "A new or worsening regional wall motion abnormality", ["A drop in calcium score", "A perfusion defect with thallium", "A rise in BNP"], "Stress echo detects new or worse wall motion abnormalities."),
          Q("Which of these can stress echo also assess?", "Valvular heart disease", ["Coronary calcium", "Lung cancer", "Thyroid nodules"], "Stress echo assesses valve disease and viability too.")
        ]
      }),
      S(42, "Stress echo: strengths", {
        why: "<p>Better than exercise EKG: <b>84% sensitive, 86% specific</b> (but very operator dependent). Sensitivity drops to <b>42%</b> if HR stays under 85% predicted, and is <b>10% lower in women</b>. Adds prognosis, is <b>quick</b>, shows <b>structural disease</b> (valves), can add contrast for perfusion, costs less and has <b>no radiation</b>. Dobutamine stress has higher sensitivity than other drug stress.</p>",
        q: [
          Q("What are the sensitivity and specificity of stress echo in the meta-analysis?", "84% and 86%", ["50% and 50%", "68% and 77%", "99% and 99%"], "The slide gives sensitivity 84% and specificity 86%."),
          Q("What happens to stress echo sensitivity if the max HR is under 85% predicted?", "It drops to 42%", ["It rises to 95%", "It stays the same", "It becomes 0%"], "Sensitivity drops to 42% below 85% max HR."),
          Q("Which advantage does stress echo have over nuclear MPI?", "No radiation", ["Better in COPD", "Quantitative analysis", "Less operator dependent"], "Stress echo uses no radiation."),
          Q("How does stress echo sensitivity compare between women and men?", "About 10% lower in women", ["Higher in women", "Identical", "Only works in women"], "Sensitivity is 10% lower in women with the same specificity.")
        ]
      }),
      S(43, "Stress echo: limitations", {
        why: "<p>Downsides: less sensitive for <b>single-vessel or mild</b> disease, can't always image the whole ventricle, <b>highly operator dependent</b>, <b>no quantitative analysis</b>, <b>poor windows in COPD</b>, and ischemia in an <b>infarct zone</b> is harder to see.</p>",
        q: [
          Q("Which patients often have poor stress echo windows?", "Patients with COPD", ["Thin young adults", "Children", "Patients with normal lungs"], "Poor windows in COPD is a listed limitation."),
          Q("Which limitation does stress echo have compared with MPI?", "No quantitative image analysis", ["Radiation", "Long scan time", "Needs a tracer"], "Stress echo has no quantitative image analysis."),
          Q("Why might two readers disagree on the same stress echo?", "It is highly operator dependent", ["It is fully automated", "It uses radiation", "It has no images"], "Analysis of stress echo images is highly operator dependent.")
        ]
      }),
      S(44, "Stress echo accuracy problems", {
        why: "<p>Stress echo accuracy suffers when the patient already has <b>significant resting wall motion abnormalities</b> or <b>moderate-severe LV systolic dysfunction</b>: it is hard to see a new problem in a wall that already moves badly.</p>",
        q: [
          Q("Which baseline finding lowers stress echo accuracy?", "Significant resting wall motion abnormalities", ["A normal resting echo", "A normal EKG", "Good image windows"], "Resting wall motion abnormalities reduce accuracy."),
          Q("A patient has an EF of 25% with extensive resting wall motion abnormalities. Is stress echo the best test?", "No, its accuracy is reduced; nuclear imaging is better", ["Yes, it is ideal", "Yes, with exercise only", "No test can be done"], "Moderate-severe LV dysfunction hurts stress echo accuracy; the algorithm points to nuclear imaging.")
        ]
      })
    ],
    review: [
      Q("A young woman with chest pain wants to avoid radiation. Which imaging stress test fits?", "Stress echo", ["Thallium MPI", "PET viability scan", "Coronary CTA"], "Stress echo has no radiation."),
      Q("A heavy smoker with severe COPD needs an imaging stress test. Why is echo a weaker choice?", "COPD gives poor echo windows", ["Echo uses radiation", "Echo needs caffeine", "COPD makes echo more accurate"], "Poor windows in COPD limit stress echo."),
      Q("A patient's stress echo shows the anterior wall moving normally at rest and becoming hypokinetic at peak stress. What does it mean?", "Ischemia in the anterior wall", ["Old anterior MI", "Normal response", "Valve disease"], "A new wall motion abnormality under stress indicates ischemia."),
      Q("Which drug stress gives stress echo its highest sensitivity?", "Dobutamine", ["Adenosine", "Dipyridamole", "Regadenoson"], "Dobutamine stress has higher sensitivity on the slide.")
    ]
  });

  /* ---------------------------------------------------------------- LO 8 */
  los.push({
    id: "lo8", label: "LO 8", title: "PET myocardial viability: scar or sleeping muscle?",
    objective: "Explain the concepts of a PET myocardial viability scan.",
    slides: [
      S(45, "Scar on MPI and echo: revascularize?", {
        why: "<p>The puzzle: a patient has <b>extensive scarring on MPI</b> and <b>wall motion abnormalities on echo</b>. Is that muscle dead, or alive but starved? Only living muscle will recover after a bypass or stent, so you need a <b>viability</b> test.</p>",
        q: [
          Q("A patient has extensive \"scar\" on MPI and wall motion abnormalities on echo. What question decides revascularization?", "Is the muscle still viable?", ["Is the LDL high?", "Is the BP normal?", "Is there a murmur?"], "Only viable muscle benefits from revascularization (standard teaching)."),
          Q("Why does it matter whether dysfunctional muscle is alive?", "Only living muscle can recover after revascularization", ["Dead muscle recovers best", "It doesn't matter", "Living muscle never recovers"], "Revascularizing scar doesn't restore function (standard teaching).")
        ]
      }),
      S(46, "PET myocardial viability scan", {
        why: "<p>PET looks at <b>perfusion AND metabolism</b>. Metabolism = <b>glucose uptake</b> by the cells; perfusion is measured as in MPI. Together they can separate <b>normal, stunned, hibernating and necrotic</b> myocardium.</p>",
        q: [
          Q("What two things does a PET viability scan measure?", "Perfusion and metabolism", ["Wall motion and valve area", "Calcium and LDL", "Rate and rhythm"], "PET assesses both perfusion and metabolism."),
          Q("How does PET measure metabolism?", "By glucose uptake in the cells", ["By troponin levels", "By oxygen saturation", "By wall thickness"], "Metabolism is measured through glucose uptake."),
          Q("Which four kinds of myocardium can PET potentially tell apart?", "Normal, stunned, hibernating and necrotic", ["Thick, thin, long and short", "Left, right, upper and lower", "Calcified, soft, red and white"], "PET can differentiate normal, stunned, hibernating and necrotic myocardium.")
        ]
      }),
      S(47, "PET viability: transplant or bypass?", {
        pic: "<p>Two pairs of PET images. \"Permanent damage: Transplant\": no blood flow AND no metabolism in the same area. \"Viable heart tissue: By-pass\": no blood flow but metabolic activity present.</p>",
        why: "<p>Read the pair: <b>no flow + no metabolism = dead (scar)</b>; revascularizing won't help (the slide's example goes to transplant). <b>No flow + metabolism present = viable, hibernating</b> muscle: bypass can bring it back. <b>PET MPI is the gold standard noninvasive test for hibernating myocardium</b>.</p>",
        q: [
          Q("On PET, an area has no blood flow but still has metabolic activity. What does it mean?", "Viable (hibernating) muscle that can benefit from bypass", ["Permanent scar", "Normal muscle", "A valve problem"], "The slide labels no flow with metabolic activity as viable tissue for bypass."),
          Q("On PET, an area has no blood flow and no metabolism. What does it mean?", "Permanent damage", ["Hibernating muscle", "Normal muscle", "Stunned muscle that will recover"], "No flow and no metabolism is labeled permanent damage."),
          Q("What is the gold standard noninvasive technique for identifying hibernating myocardium?", "PET MPI", ["Exercise EKG", "Stress echo", "Chest X-ray"], "Radionuclide MPI with PET is the gold standard.")
        ]
      })
    ],
    review: [
      Q("An ischemic cardiomyopathy patient with EF 25% is being considered for CABG. Which test tells you if the weak walls will recover?", "PET myocardial viability scan", ["Exercise EKG", "Resting EKG", "Lipid panel"], "PET viability distinguishes hibernating from dead muscle."),
      Q("A PET scan shows a matched defect: no flow and no glucose uptake. Will CABG to that wall restore function?", "No, it is permanent scar", ["Yes, fully", "Yes, partially in all cases", "Only with dobutamine"], "No flow and no metabolism means permanent damage."),
      Q("A PET scan shows a mismatch: low flow but preserved glucose uptake. What is the next step direction?", "Revascularization, since the muscle is viable", ["Comfort care only", "No action ever", "Repeat in 10 years"], "Viable hibernating muscle can recover with bypass.")
    ]
  });

  /* ---------------------------------------------------------------- LO 9 */
  los.push({
    id: "lo9", label: "LO 9", title: "Choosing the right stress test",
    objective: "Recognize when to order each stress testing modality.",
    slides: [
      S(48, "Algorithm for choosing the optimal stress test", {
        pic: "<p>A flowchart. <b>Can the patient exercise to a satisfactory workload?</b> <b>Yes</b> → any of: LBBB, V-pacing, V-pre-excitation, ≥1 mm resting ST-T changes, LVH, digoxin, prior revascularization, ischemia localization, assessment of viability? <b>No</b> → exercise ECG. <b>Yes</b> → stress imaging: LBBB or V-pacing? Yes → vasodilator stress SPECT or PET unless contraindicated; No → extensive resting wall motion abnormalities? Yes → stress nuclear (exercise if possible, otherwise vasodilator; PET for viability if available); No → stress echo or stress nuclear (exercise where possible, dobutamine echo or vasodilator nuclear if no contraindications). <b>Can't exercise</b> → LBBB, V-pacing or AF? Yes → vasodilator SPECT or PET unless contraindicated. No → extensive resting wall motion abnormalities? Yes → vasodilator SPECT or PET (dobutamine SPECT or PET if vasodilator contraindicated; PET for viability). No → vasodilator SPECT/PET or dobutamine echo. <b>Contraindications box</b>: vasodilators = bronchospastic airway disease, hypotension, sick sinus syndrome, high-degree AV block, oral dipyridamole; hold theophylline 48 h and caffeine 12 h. Dobutamine = ventricular arrhythmias, recent MI (1-3 days), unstable angina, significant LVOT obstruction, aortic dissection, severe systemic hypertension.</p>",
        why: "<p>Ask three questions in order. <b>1. Can they exercise?</b> If yes and the resting EKG is clean (no LBBB, pacing, WPW, LVH, digoxin, ST changes, prior revascularization, no need to localize or check viability), do a plain <b>exercise ECG</b>. <b>2. Is there LBBB or V-pacing?</b> Then use a <b>vasodilator nuclear</b> test, because exercise and dobutamine cause false septal defects in LBBB (standard teaching). <b>3. Are there extensive resting wall motion problems?</b> Then <b>nuclear</b> (PET for viability) rather than echo. Otherwise stress echo or nuclear both work; use dobutamine echo or vasodilator nuclear if they can't exercise.</p>",
        q: [
          Q("A patient can exercise and has a normal resting EKG. Which test does the algorithm pick?", "Exercise ECG", ["Vasodilator PET", "Dobutamine echo", "No test"], "Able to exercise with none of the listed conditions → exercise ECG."),
          Q("A patient with LBBB needs a stress test. What does the algorithm pick?", "Vasodilator stress SPECT or PET", ["Exercise ECG", "Dobutamine echo", "Exercise echo"], "LBBB or V-pacing leads to vasodilator nuclear imaging."),
          Q("A patient can't exercise, has no LBBB, and has extensive resting wall motion abnormalities. Which test?", "Vasodilator SPECT or PET (PET if viability is needed)", ["Dobutamine echo", "Exercise ECG", "Treadmill only"], "Extensive resting wall motion abnormalities steer away from echo toward nuclear."),
          Q("Per the contraindication box, how long should theophylline be held before vasodilator stress?", "48 hours", ["12 hours", "1 hour", "2 weeks"], "The box says theophylline 48 hours and caffeine 12 hours.")
        ]
      })
    ],
    review: [
      Q("A 50-year-old with chest pain walks well, has a normal resting EKG and takes no digoxin. Which stress test?", "Exercise treadmill EKG", ["Dobutamine echo", "Adenosine SPECT", "PET viability"], "He can exercise and has no condition requiring imaging."),
      Q("A 70-year-old with a ventricular pacemaker can't exercise. Which stress test?", "Vasodilator SPECT or PET", ["Exercise EKG", "Dobutamine echo", "No test"], "V-pacing leads to vasodilator nuclear imaging."),
      Q("A patient can exercise but has LVH with strain on the resting EKG and no extensive wall motion problems. Which test?", "Exercise stress echo or exercise nuclear", ["Plain exercise EKG", "PET viability only", "Nothing"], "LVH needs imaging; without extensive resting WMAs, stress echo or nuclear both work."),
      Q("A patient can't exercise, has asthma with wheezing, normal EKG and no wall motion problems. Which test?", "Dobutamine echo", ["Adenosine SPECT", "Regadenoson PET", "Exercise ECG"], "Bronchospasm contraindicates vasodilators, so dobutamine echo is used."),
      Q("After a CABG, a patient has new angina. Why does he need imaging rather than a plain exercise EKG?", "Prior revascularization is on the list that requires stress imaging", ["Bypass patients can't exercise", "EKGs don't work after surgery", "He doesn't need any test"], "Prior revascularization sends the patient to stress imaging in the algorithm.")
    ]
  });

  SlideStudy.lecture({
    id: "stress-testing",
    title: "Cardiac Testing: Stress Testing",
    short: "Stress testing",
    by: "Sillaman",
    img: "images/stress-slides/slide-{nn}.webp",
    los: los
  });
})();
