/* Cardio Part 3, Cardiac Testing (Sillaman: three decks, "Stress testing" 48 slides, "Echo and telemetry" 28 slides,
   "Coronary Angiogram" 32 slides). One section per objective (some neighbors merged), in syllabus order:
   Stress Testing 1-9, Echocardiography and Telemetry 1-10, Coronary Angiogram 1-10.
   Read from slide pictures: stress slide 11 (absolute/relative exercise contraindications table; the speaker notes give a
   shorter list), 13 (Bruce protocol table), 15 (exercise test endpoints), 16 (ST depression patterns), 47 (PET viability
   images), 48 (algorithm for choosing a stress test); echo slide 2 (Case study 1); angiogram slides 8, 14, 15.
   Slip in the deck: stress slide 11's speaker notes say acute MI "within 4 days" and HTN "200/115"; the table on the same
   slide says MI within two days and SBP >= 200 and/or DBP >= 110. Cards teach the table and flag the notes. */
(function () {
  "use strict";

  function q(prompt, answer, wrong, explanation) {
    return { prompt: prompt, choices: [answer].concat(wrong), correct: 0, explanation: explanation };
  }
  function C(title, html, coverage, test, apply) {
    return { title: title, html: html, coverage: coverage, test: test, apply: apply };
  }
  function S(id, title, description, units) {
    var r = { id: id, title: title, description: description, cards: [], test: [], apply: [] };
    units.forEach(function (u, i) {
      r.cards.push({ title: u.title, html: u.html, coverage: u.coverage });
      ["test", "apply"].forEach(function (m) {
        u[m].forEach(function (x) { x.card = i; r[m].push(x); });
      });
    });
    return r;
  }
  function hy(x) { return '<div class="box-hy"><span class="lbl">High yield</span>' + x + "</div>"; }
  function mn(x) { return '<div class="box-mnemonic"><span class="lbl">Mnemonic</span>' + x + "</div>"; }
  function note(x) { return '<div class="box-fix"><span class="lbl">Source note</span>' + x + "</div>"; }
  function tbl(head, rows) {
    return '<table class="learn-table"><tr>' + head.map(function (h) { return "<th>" + h + "</th>"; }).join("") + "</tr>" +
      rows.map(function (r) { return "<tr>" + r.map(function (d) { return "<td>" + d + "</td>"; }).join("") + "</tr>"; }).join("") + "</table>";
  }
  function ul(items) { return "<ul>" + items.map(function (i) { return "<li>" + i + "</li>"; }).join("") + "</ul>"; }
  function chain(steps) { return '<ol class="concept-chain">' + steps.map(function (s) { return "<li>" + s + "</li>"; }).join("") + "</ol>"; }

  window.CARDIAC_TESTING_OBJECTIVES = [

    /* ================= STRESS TESTING ================= */

    S("01-stress-indications", "1. Why and when to order a stress test", "Stress testing objective 1 (slides 3 to 7): what stress testing does, the eight indications, why screening is not indicated, and the four ways a test shows ischemia.", [
      C("Stress test indications",
        "<p><strong>Why order one?</strong> Stress testing helps <strong>make the diagnosis</strong> of coronary heart disease (CHD) and <strong>assess the risk</strong> it carries.</p>" +
        tbl(["Indication", "Detail from the slide"], [
          ["Symptoms suggesting angina", "Only with an <strong>intermediate or high pre-test likelihood</strong> of CHD"],
          ["Acute chest pain", "<strong>After ACS has been ruled out</strong>"],
          ["Recent ACS treated conservatively (no angiogram)", "Risk assessment <strong>within 3 months</strong> post-ACS, if stable or no further symptoms"],
          ["Known CHD with a change in status", "New or worsening symptoms"],
          ["Valvular heart disease", "<strong>Dobutamine only</strong>"],
          ["Newly diagnosed heart failure or cardiomyopathy", ""],
          ["Preop before elective non-cardiac surgery", "In patients with cardiac conditions"],
          ["New arrhythmias", ""]]) +
        hy("Screening <strong>asymptomatic</strong> patients is generally <strong>not indicated</strong>. Rare exceptions: very high CHD risk from risk factors, and <strong>high-risk occupations</strong> such as <strong>airline pilots</strong>."),
        ["ct-stress-why", "ct-stress-indications", "ct-stress-screening"],
        [q("What two things does stress testing help with in coronary heart disease?", "Making the diagnosis and assessing risk", ["Treating the stenosis and preventing MI", "Measuring LDL and blood pressure", "Locating valve vegetations and thrombus"], "Slide 3: stress testing aids in making the diagnosis of and assessing risk related to CHD."),
          q("A patient with symptoms suggesting angina should get a stress test when the pre-test likelihood of CHD is:", "Intermediate or high", ["Very low", "Zero", "Unknown, because stress tests are for screening"], "Slide 4: symptoms suggesting angina with an intermediate or high pre-test likelihood."),
          q("When can a patient with acute chest pain get a stress test?", "After ACS has been ruled out", ["Before troponins are drawn", "During an active STEMI", "Only if the first EKG shows ST elevation"], "Slide 4: acute chest pain after ACS has been ruled out."),
          q("A recent ACS treated conservatively without angiography can get a stress test for risk assessment within what window?", "Three months post-ACS, if stable or no further symptoms", ["24 hours", "One year", "Only after five years"], "A stable patient after medically treated ACS can be risk-stratified with a stress test within 3 months. (Slide 4)"),
          q("Valvular heart disease is an indication for stress testing with which agent only?", "Dobutamine", ["Adenosine", "Regadenoson", "Dipyridamole"], "Slide 5: valvular heart disease (dobutamine only)."),
          q("Which of these is NOT listed as a stress test indication?", "Screening a healthy asymptomatic office worker", ["New arrhythmias", "Newly diagnosed heart failure or cardiomyopathy", "Preop for elective non-cardiac surgery in a patient with cardiac conditions"], "Slide 6: screening asymptomatic patients is generally not indicated."),
          q("Which asymptomatic patient is a rare exception where stress testing may be indicated?", "An airline pilot (high-risk occupation)", ["A 25-year-old runner", "Any adult over 40", "A patient who asks for a checkup"], "Slide 6: very high risk from risk factors or high-risk occupations such as airline pilots."),
          q("Stress testing shows clinically significant stenosis through four kinds of evidence. Which is one of them?", "Regional wall motion abnormalities on echo", ["Elevated LDL", "Carotid bruit", "Pedal edema"], "Slide 7: symptoms, EKG changes, perfusion defects (MPI), wall motion abnormalities (echo)."),
          q("Which four findings can a stress test use as evidence of significant coronary stenosis?", "Symptoms, EKG changes, perfusion defects, wall motion abnormalities", ["Troponin, BNP, D-dimer, CRP", "Murmur, rub, gallop, click", "LDL, HDL, triglycerides, Lp(a)"], "A stress test can show ischemia four ways: symptoms, EKG changes, perfusion defects or wall motion problems. (Slide 7)"),
          q("Known CHD is an indication for a stress test when:", "There is a change in clinical status, such as new or worsening symptoms", ["The patient has been stable for years", "The patient wants reassurance", "The LDL is at goal"], "Known CHD gets a stress test when something changes, like new or worse symptoms. (Slide 4)")],
        [q("A 58-year-old with exertional chest pressure, diabetes, and hypertension has an intermediate pre-test likelihood of CHD. Next step from this lecture?", "Order a stress test", ["Reassure, no testing needed", "Stress testing is contraindicated with symptoms", "Screen only if he is a pilot"], "Symptoms suggesting angina with intermediate or high pre-test likelihood is the first indication."),
          q("A 45-year-old asymptomatic accountant with no risk factors asks for a treadmill test as a checkup. Best answer?", "Stress testing for screening asymptomatic patients is generally not indicated", ["Order an exercise stress test", "Order a dobutamine stress echo", "Order PET viability"], "Stress tests don't screen asymptomatic low-risk people; false positives outnumber true ones. (Slide 6)"),
          q("A patient had an NSTEMI two months ago, was treated medically without an angiogram, and now has no symptoms. Is a stress test reasonable?", "Yes, for risk assessment within three months post-ACS", ["No, never after ACS", "Only after one year", "Only if troponin rises again"], "Within 3 months of medically managed ACS, a stress test assesses remaining risk. (Slide 4)"),
          q("A patient with moderate aortic stenosis needs a stress study for valve evaluation. Which stress agent fits?", "Dobutamine", ["Adenosine", "Regadenoson", "Dipyridamole"], "Valvular heart disease is a dobutamine-only indication.")]),
    ]),

    S("02-exercise-protocol", "2. Exercise stress test: strengths, limits and protocol", "Stress testing objective 2 (slides 9 to 15): the preferred mode, what it evaluates, strengths and limitations, the 6 to 12 minute goal, the Bruce protocol, and test endpoints.", [
      C("Exercise EKG stress test: strengths and limits",
        "<p>Exercise is the <strong>preferred mode</strong> of testing. <strong>Exercise duration = functional capacity.</strong> It evaluates symptoms, heart rate response and recovery, blood pressure response, EKG response and arrhythmia.</p>" +
        tbl(["Strengths", "Limitations"], [
          ["Low cost", "Sensitivity only <strong>50%</strong> for single-vessel disease (85% with 3-vessel)"],
          ["Short duration", "Overall sensitivity <strong>68%</strong>, specificity <strong>77%</strong>"],
          ["Evaluates functional status", "<strong>Beta blockers</strong> cause more false negatives (patient fails to reach the rate pressure product)"],
          ["High sensitivity in <strong>3-vessel or left main</strong> disease", "Non-diagnostic with an abnormal baseline EKG (<strong>dig, LVH, WPW</strong>)"],
          ["Useful prognostic information", "Poor specificity in premenopausal women, LVH, dig, IVCD, hypokalemia, hyperventilation, severe HTN, resting ST changes"],
          ["", "Must reach <strong>more than 85% of maximum heart rate</strong> (PMHR) to be accurate"]]) +
        hy("Its main value: <strong>excluding CAD</strong> in patients with a <strong>low pre-test probability</strong> (based on gender and age)."),
        ["ct-ett-preferred", "ct-ett-strengths", "ct-ett-limits"],
        [q("What is the preferred mode of stress testing?", "Exercise", ["Dobutamine", "Adenosine", "Regadenoson"], "Exercise is preferred because it is physiologic and also measures functional capacity. (Slide 9)"),
          q("On an exercise stress test, exercise duration equals:", "Functional capacity", ["Ejection fraction", "Coronary calcium score", "Pre-test probability"], "How long they can exercise is their functional capacity, a strong prognostic marker. (Slide 9)"),
          q("What is the sensitivity of exercise EKG testing for single-vessel disease?", "About 50%", ["About 95%", "About 85%", "About 10%"], "Slide 10: 50% for single-vessel, 85% for three-vessel."),
          q("What are the overall sensitivity and specificity of the exercise EKG stress test?", "Sensitivity 68%, specificity 77%", ["Sensitivity 95%, specificity 95%", "Sensitivity 50%, specificity 50%", "Sensitivity 85%, specificity 90%"], "Exercise EKG is only about 68% sensitive and 77% specific, so it misses a lot. (Slide 10)"),
          q("Why do beta blockers cause false-negative exercise tests?", "The patient fails to achieve the rate pressure product", ["They cause ST depression at rest", "They block the tracer", "They cause LBBB"], "Beta blockers blunt HR and BP, so demand never rises enough to provoke ischemia. (Slide 10)"),
          q("Which baseline EKG findings make an exercise EKG non-diagnostic?", "Digoxin effect, LVH, WPW", ["Normal sinus rhythm", "Sinus arrhythmia", "First-degree AV block only"], "Slide 10: abnormal baseline EKG (dig, LVH, WPW)."),
          q("What percent of maximum predicted heart rate must be reached for an accurate test?", "More than 85%", ["50%", "65%", "100% exactly"], "Under 85% of max predicted HR the heart isn't stressed enough to trust a negative result. (Slide 10)"),
          q("Exercise EKG has high sensitivity for which disease pattern?", "Three-vessel or left main disease", ["Single-vessel disease", "Microvascular disease only", "Valvular disease"], "Extensive (3-vessel or left main) disease almost always shows up on exercise EKG. (Slide 10)"),
          q("The main value of the exercise EKG test lies in:", "Excluding CAD in patients with a low pre-test probability", ["Confirming CAD in a patient with a STEMI", "Measuring the ejection fraction", "Finding hibernating myocardium"], "A negative exercise EKG in a low-probability patient reliably excludes CAD. (Slide 10)"),
          q("Which group has poor exercise EKG specificity per the slide?", "Premenopausal women", ["Postmenopausal women", "Young men", "Elderly men"], "Slide 10 also lists LVH, dig, IVCD, hypokalemia, hyperventilation, severe HTN, resting ST abnormalities."),
          q("PMHR stands for:", "Predicted maximal heart rate", ["Peak mean heart rhythm", "Pulmonary mean heart rate", "Post-MI heart rate"], "PMHR = predicted maximal heart rate (220 - age).")],
        [q("A patient on metoprolol has a normal exercise EKG but only reached 72% of PMHR. How should you read this result?", "Possibly a false negative: beta blockade kept him from reaching the target workload", ["Definitely no CAD", "High-risk positive test", "Diagnostic of single-vessel disease"], "Beta blockers raise false negatives, and under 85% PMHR accuracy drops."),
          q("A 40-year-old man with atypical chest pain and a low pre-test probability needs CAD excluded. He can exercise and has a normal EKG. Best test?", "Exercise EKG stress test", ["Invasive angiogram", "PET viability scan", "TEE"], "Excluding CAD in low pre-test probability is the exercise EKG's main value."),
          q("A 66-year-old on digoxin needs ischemia evaluation. Why is a plain exercise EKG a poor choice?", "Digoxin makes the baseline EKG abnormal, so ST changes are non-diagnostic", ["Digoxin blocks adenosine", "Digoxin prevents exercise", "Digoxin causes false-high calcium scores"], "Digoxin causes baseline ST changes, so exercise ST depression can't be read. (Slide 10 and 20)")]),
      C("Protocol and endpoints",
        ul(["Goal: <strong>6 to 12 minutes</strong> of exercise, to reach maximal metabolic demand.",
          "Tests are <strong>symptom limited</strong> (not just stopping at 85% PMHR).",
          "Most often on a <strong>treadmill</strong> using the <strong>Bruce protocol</strong>."]) +
        tbl(["Bruce stage", "Grade", "Speed (mph)", "Total time", "METs"], [
          ["1", "10%", "1.7", "3 min", "4.5"], ["2", "12%", "2.5", "6 min", "7"], ["3", "14%", "3.4", "9 min", "10"], ["4", "16%", "4.2", "12 min", "13"]]) +
        "<p>Each Bruce stage lasts <strong>3 minutes</strong> and raises both grade and speed. 1 MET = 3.5 mL O2/kg/min. The <strong>Modified Bruce</strong> adds two easier starting stages (0% and 5% grade at 1.7 mph).</p>" +
        tbl(["Endpoint type", "Examples (slide 15)"], [
          ["Patient-determined", "Wants to stop, significant chest discomfort, marked fatigue or severe dyspnea, other limiting symptoms"],
          ["Provider-determined", "Patient looks unwell; <strong>exertional hypotension</strong> (SBP below standing rest SBP); <strong>SBP above 250</strong>; <strong>DBP above 120</strong>; marked ST depression; new BBB that cannot be told from VT; new Mobitz 2 or complete heart block; VT or VF; rising ventricular ectopy; new SVT; equipment failure"],
          ["Protocol-determined (submaximal tests)", "Heart rate target (120 to 140) or workload target (5 METs)"]]),
        ["ct-ett-goal", "ct-bruce", "ct-ett-endpoints"],
        [q("How many minutes of exercise is the goal of an exercise stress test?", "6 to 12 minutes", ["1 to 3 minutes", "20 to 30 minutes", "Exactly 85 minutes"], "6 to 12 minutes is long enough to stress the heart without fatigue limiting the test. (Slide 12)"),
          q("Exercise stress tests should be limited by:", "Symptoms (not just reaching 85% PMHR)", ["A fixed 3-minute timer", "The first PVC", "Reaching 50% PMHR"], "Stop for symptoms, not just a number, so you see true capacity and ischemia. (Slide 12)"),
          q("Which treadmill protocol is used most often?", "Bruce protocol", ["Naughton protocol", "Cornell protocol", "Wells protocol"], "The Bruce protocol is the standard treadmill protocol. (Slide 12)"),
          q("How long is each Bruce protocol stage?", "3 minutes", ["1 minute", "5 minutes", "10 minutes"], "Slide 13 table: total time rises 3, 6, 9, 12."),
          q("What changes at each new Bruce stage?", "Both the treadmill grade and the speed increase", ["Only the speed increases", "Only the grade increases", "Nothing; it is a constant workload"], "Each 3-minute Bruce stage raises both speed and incline. (Slide 13)"),
          q("Bruce stage 1 is:", "10% grade at 1.7 mph", ["0% grade at 1.0 mph", "16% grade at 4.2 mph", "5% grade at 3.0 mph"], "Bruce stage 1 = 1.7 mph at a 10% grade. (Slide 13)"),
          q("Which systolic blood pressure is a provider-determined endpoint?", "SBP above 250 mmHg", ["SBP above 140 mmHg", "SBP above 160 mmHg", "SBP of 120 mmHg"], "Slide 15: SBP >250, DBP >120."),
          q("Exertional hypotension during a stress test means:", "Systolic BP falls below the standing SBP measured at rest", ["Diastolic BP rises above 90", "Heart rate exceeds 85% PMHR", "SBP rises by 20"], "BP should rise with exercise; a fall below resting suggests severe ischemia or LV failure. (Slide 15)"),
          q("Which rhythm finding is a provider-determined endpoint?", "New Mobitz 2 or complete heart block", ["Sinus tachycardia", "Isolated PAC at peak", "Sinus arrhythmia at rest"], "Slide 15 also lists VT or VF and new SVT."),
          q("A submaximal (protocol-determined) test stops at:", "A set heart rate (120 to 140) or workload (5 METs)", ["Severe chest pain only", "SBP 250", "VF"], "A submaximal test stops at a preset HR (120-140) or 5 METs, often used soon after MI. (Slide 15)"),
          q("1 MET equals:", "3.5 mL O2/kg/min", ["10 mL O2/kg/min", "1 L O2/min", "35 mL O2/kg/min"], "1 MET is resting O2 use, 3.5 mL/kg/min.")],
        [q("Eight minutes into a Bruce protocol, the patient's systolic pressure drops below his resting standing value. What should happen?", "Stop the test: exertional hypotension is a provider-determined endpoint", ["Continue to 12 minutes", "Increase the grade", "Give regadenoson and continue"], "Exertional hypotension signals severe ischemia, so stop the test. (Slide 15)"),
          q("During exercise a patient develops a new wide-QRS bundle branch block that cannot be distinguished from VT. Action?", "Stop the test", ["Continue to symptom limit", "Ignore it", "Switch to the Naughton protocol"], "A new wide-complex rhythm that may be VT means stop."),
          q("A deconditioned 78-year-old cannot manage 10% grade at 1.7 mph. Which protocol variant starts easier?", "Modified Bruce (0% and 5% grade stages first)", ["Standard Bruce stage 3", "Cornell stage 9", "Duke protocol"], "Slide 13: Modified Bruce stages 0 and 1/2.")])
    ]),

    S("03-exercise-contraindications", "3. Contraindications to exercise testing", "Stress testing objective 5, exercise part (slides 11 and 20): absolute and relative contraindications to exercise treadmill testing and conditions that prevent an exercise EKG test.", [
      C("Absolute and relative contraindications",
        tbl(["Absolute", "Relative"], [
          ["<strong>Acute MI within two days</strong>", "<strong>Left main</strong> stenosis or its equivalent"],
          ["<strong>Unstable angina</strong>", "Moderate stenotic valve disease"],
          ["Uncontrolled arrhythmias causing symptoms or hemodynamic compromise", "Electrolyte abnormalities"],
          ["<strong>Symptomatic severe aortic stenosis</strong>", "Severe HTN (SBP ≥200 and/or DBP ≥110)"],
          ["Uncontrolled symptomatic heart failure", "Tachy- or bradyarrhythmias, including AF with uncontrolled rate"],
          ["Acute PE or pulmonary infarction", "HCM and other outflow tract obstruction"],
          ["Acute myocarditis or pericarditis", "Mental or physical impairment, cannot cooperate"],
          ["Active endocarditis", "High-degree AV block"],
          ["<strong>Acute aortic dissection</strong>", ""],
          ["Acute noncardiac disorder worsened by exercise (infection, renal failure, thyrotoxicosis)", ""],
          ["Inability to obtain consent", ""]]) +
        "<p>Relative contraindications can be overridden if the benefits outweigh the risks.</p>" +
        note("The speaker notes give a shorter list: unstable angina, decompensated CHF, uncontrolled arrhythmias, uncontrolled HTN 200/115, acute MI within 4 days, severe pulmonary HTN, severe AS. The table on the slide says MI within <strong>two days</strong> and BP ≥200/110; questions use the table."),
        ["ct-ett-absolute", "ct-ett-relative"],
        [q("Which is an ABSOLUTE contraindication to exercise treadmill testing?", "Unstable angina", ["Moderate stenotic valve disease", "Electrolyte abnormalities", "High-degree AV block"], "Unstable angina is active ACS; exercising could cause an MI."),
          q("Acute MI within how long is an absolute contraindication on the slide table?", "Two days", ["Two weeks", "Two months", "Two years"], "Slide 11 table: acute MI within two days."),
          q("Symptomatic severe aortic stenosis is what kind of contraindication to exercise testing?", "Absolute", ["Relative", "Not a contraindication", "Only for dobutamine"], "Symptomatic severe AS can cause collapse or sudden death with exercise. (Slide 11)"),
          q("Left main coronary stenosis is what kind of contraindication to exercise testing?", "Relative", ["Absolute", "Not a contraindication", "Indication only"], "Left main disease is risky but the test can be done with care: relative. (Slide 11)"),
          q("What blood pressure makes severe hypertension a relative contraindication?", "SBP ≥200 and/or DBP ≥110", ["SBP ≥140 and/or DBP ≥90", "SBP ≥160 only", "DBP ≥80"], "Severe HTN = SBP 200 or more and/or DBP 110 or more."),
          q("Which of these is an absolute contraindication?", "Acute aortic dissection", ["HCM", "Moderate valve stenosis", "Electrolyte abnormality"], "Exercise could extend an acute dissection: absolute. (Slide 11)"),
          q("Relative contraindications can be overridden when:", "Benefits outweigh the risks of exercise", ["The patient is over 65", "Troponin is positive", "Never"], "Relative contraindications can be accepted when the benefit is worth the risk."),
          q("Which noncardiac acute problem is an absolute contraindication because exercise can worsen it?", "Thyrotoxicosis", ["Controlled hypothyroidism", "Healed ankle fracture", "Seasonal allergies"], "Slide 11: infection, renal failure, thyrotoxicosis."),
          q("Hypertrophic cardiomyopathy with outflow obstruction is what kind of contraindication to exercise testing?", "Relative", ["Absolute", "None", "Indication"], "HCM with obstruction is relative: exercise can worsen the gradient. (Slide 11)")],
        [q("A man admitted yesterday with an acute MI asks for a treadmill test before discharge tomorrow. Answer?", "No: acute MI within two days is an absolute contraindication", ["Yes, it is the preferred test", "Yes, if he skips his beta blocker", "Only Modified Bruce"], "An MI within 2 days is an absolute contraindication. (Slide 11)"),
          q("A patient with syncope on exertion and a harsh crescendo-decrescendo murmur has severe AS. A treadmill test is:", "Absolutely contraindicated", ["The test of choice", "Relatively contraindicated only", "Fine if BP is normal"], "Symptomatic severe AS is absolute."),
          q("A patient's BP in the stress lab is 206/112. How is this classified for exercise testing?", "Relative contraindication (severe hypertension)", ["Absolute contraindication", "Normal for the test", "Indication to give dobutamine"], "BP over 200/110 is severe HTN, a relative contraindication. (Slide 11)")]),
      C("Conditions that prevent an exercise EKG test",
        "<p>These patients can still exercise but the <strong>EKG cannot be read</strong> for ischemia, or more information is needed, so they need <strong>stress imaging</strong> (slide 20):</p>" +
        ul(["<strong>LBBB</strong>", "<strong>V-pacing</strong>", "≥1 mm resting ST-T abnormalities", "<strong>LVH</strong>", "On <strong>digoxin</strong>", "Prior revascularization", "Need for ischemia localization", "Unable to exercise to 85% PMHR"]) +
        mn("<strong>\"LBBB, Paced, Dig, LVH\"</strong>: the four EKGs that hide ST changes. Add prior revascularization, localizing ischemia, and not reaching 85%."),
        ["ct-ett-prevent"],
        [q("Which condition prevents interpretation of an exercise EKG stress test?", "Left bundle branch block", ["Right-handedness", "Sinus rhythm at 70", "Normal axis"], "LBBB distorts the ST segments, so ischemic changes can't be read. (Slide 20)"),
          q("Which of these does NOT prevent exercise EKG testing per slide 20?", "Normal resting EKG", ["V-pacing", "Digoxin use", "LVH"], "A normal resting EKG is exactly what you want for exercise EKG testing."),
          q("Resting ST-T abnormalities of what size prevent exercise EKG testing?", "≥1 mm", ["≥0.1 mm", "≥5 mm", "Any T-wave"], "Baseline ST changes of 1 mm or more make exercise ST changes unreadable. (Slide 20)"),
          q("Why does prior revascularization push you toward stress imaging rather than exercise EKG?", "It is on the list of conditions preventing exercise EKG testing; imaging can localize ischemia", ["Stents block tracers", "Revascularized patients cannot walk", "It is a contraindication to any stress test"], "Slide 20: prior revascularization and need for ischemic localization."),
          q("A patient who cannot exercise to what level should not have an exercise EKG test?", "85% of PMHR", ["50% of PMHR", "100 bpm", "5 METs"], "If they can't reach 85% PMHR, a negative result means nothing. (Slide 20)")],
        [q("A 70-year-old with a pacemaker that paces the ventricle needs a stress test. Why not a plain exercise EKG?", "V-pacing makes ST segments uninterpretable", ["Pacemakers prevent exercise", "Pacing causes false-positive troponin", "Pacemakers are a contraindication to all stress testing"], "Ventricular pacing distorts ST segments, so you need imaging. (Slide 20)"),
          q("A patient with LBBB can walk on a treadmill well. What is the issue with an exercise EKG test?", "LBBB prevents ST interpretation, so he needs stress imaging", ["None; exercise EKG is ideal", "LBBB is an absolute contraindication to any test", "He must get an angiogram first"], "LBBB hides ischemic ST changes, so add imaging. (slide 48)")])
    ]),

    S("04-duke-score", "4. Abnormal tests, high-risk tests and the Duke treadmill score", "Stress testing objective 3 (slides 16 to 19): ST depression patterns, what makes a test high risk, and how to calculate and interpret the Duke treadmill score.", [
      C("Abnormal and high-risk exercise tests",
        tbl(["ST response to exercise", "Reading"], [
          ["No ST depression", "Negative"],
          ["<strong>Upsloping</strong> ST depression (>1 mm)", "<strong>Equivocal</strong>"],
          ["<strong>Horizontal</strong> ST depression (>1 mm)", "<strong>Positive</strong>"],
          ["<strong>Downsloping</strong> ST depression (>1 mm)", "<strong>Positive</strong>"]]) +
        "<p><strong>High-risk test</strong> (slide 17):</p>" +
        ul(["Short exercise duration, <strong>less than 5 METs</strong>",
          "ST depression <strong>≥2 mm</strong>",
          "Low peak SBP (<strong>under 130</strong>) or SBP <strong>falling</strong> below resting standing BP",
          "Cannot reach the target heart rate",
          "<strong>Exercise-induced angina</strong>",
          "Frequent ventricular ectopy (couplets or VT) at <strong>low workload</strong>"]),
        ["ct-st-patterns", "ct-high-risk-test"],
        [q("Upsloping ST depression greater than 1 mm with exercise is read as:", "Equivocal", ["Positive", "Negative", "Diagnostic of STEMI"], "Upsloping ST depression is nonspecific, so it's equivocal."),
          q("Which ST depression patterns are read as a positive stress test?", "Horizontal and downsloping (>1 mm)", ["Upsloping only", "Any ST elevation at rest", "None; only symptoms count"], "Horizontal or downsloping ST depression over 1 mm is positive for ischemia. (Slide 16)"),
          q("A high-risk stress test includes exercise duration less than:", "5 METs", ["10 METs", "13 METs", "1 MET"], "Being unable to reach 5 METs means poor capacity and high risk. (Slide 17)"),
          q("What magnitude of ST depression marks a high-risk test?", "≥2 mm", ["≥0.5 mm", "Any upsloping change", "≥10 mm"], "ST depression of 2 mm or more is high risk. (Slide 17)"),
          q("Which peak systolic pressure marks a high-risk test?", "Below 130 mmHg", ["Above 160 mmHg", "Above 200 mmHg", "Exactly 120 mmHg at rest"], "Peak SBP under 130 means the heart can't raise output: high risk. (Slide 17)"),
          q("Frequent ventricular ectopy is a high-risk finding when it occurs:", "At a low workload", ["Only in recovery after 20 minutes", "At peak exercise in an athlete", "Never; ectopy is benign"], "Frequent PVCs at a low workload signal high risk. (Slide 17)"),
          q("Which is a high-risk stress test finding?", "Exercise-induced angina", ["Reaching 95% PMHR without symptoms", "Normal BP rise", "Upsloping ST depression of 0.5 mm"], "Exercise-induced angina is a high-risk finding. (Slide 17)")],
        [q("A patient stops at 4 minutes of Bruce (under 5 METs) with 2.5 mm horizontal ST depression and chest pressure. How would you classify the test?", "High risk", ["Low risk", "Equivocal", "Negative"], "Short duration, ≥2 mm ST depression and exercise angina are all high-risk features."),
          q("A treadmill test shows 1.5 mm upsloping ST depression and no symptoms. Reading?", "Equivocal", ["Positive, high risk", "Negative", "Diagnostic of left main disease"], "Upsloping ST depression without symptoms is equivocal. (Slide 16)")]),
      C("Duke treadmill score",
        "<p><strong>Duke score = exercise time (min) − (5 × max ST deviation in mm) − (4 × angina index)</strong></p>" +
        tbl(["Angina index", "Meaning"], [["0", "No angina"], ["1", "Non-limiting angina"], ["2", "Exercise-limiting angina (made them stop)"]]) +
        tbl(["Score", "Risk"], [["<strong>≥ +5</strong>", "Low"], ["<strong>−10 to +4</strong>", "Moderate"], ["<strong>≤ −11</strong>", "High"]]) +
        "<p><strong>Slide 19 example:</strong> 8 min, 1 mm ST deviation, non-limiting chest pain: 8 − 5(1) − 4(1) = <strong>−1, moderate risk</strong>.</p>" +
        mn("<strong>\"Time minus Five-ST minus Four-Angina\"</strong>. The multipliers go 5 then 4 in the same order as the words ST then Angina. Low risk needs +5 or more; high risk is −11 or less."),
        ["ct-duke-formula", "ct-duke-bands"],
        [q("What is the Duke treadmill score formula?", "Exercise time − (5 × max ST deviation in mm) − (4 × angina index)", ["Exercise time + (5 × ST deviation) + (4 × angina index)", "(4 × exercise time) − (5 × ST deviation) − angina index", "METs × heart rate ÷ 100"], "Duke = minutes exercised - 5 × ST mm - 4 × angina index. (Slide 18)"),
          q("In the Duke score, the ST deviation (mm) is multiplied by:", "5", ["4", "2", "10"], "Each mm of ST deviation costs 5 points. (Slide 18)"),
          q("In the Duke score, the angina index is multiplied by:", "4", ["5", "1", "3"], "The angina index (0, 1, 2) is multiplied by 4. (Slide 18)"),
          q("What angina index is given for exercise-limiting angina?", "2", ["0", "1", "4"], "Slide 18: 0 none, 1 nonlimiting, 2 exercise limiting."),
          q("What Duke score is low risk?", "≥ +5", ["−10 to +4", "≤ −11", "Exactly 0"], "Duke +5 or more = low risk. (Slide 18)"),
          q("What Duke score range is moderate risk?", "−10 to +4", ["≥ +5", "≤ −11", "+5 to +15"], "Duke -10 to +4 = moderate risk. (Slide 18)"),
          q("What Duke score is high risk?", "≤ −11", ["≥ +5", "−10 to +4", "≥ +11"], "Duke -11 or lower = high risk. (Slide 18)"),
          q("Exercise 8 min, 1 mm ST deviation, non-limiting chest pain. Duke score?", "−1 (moderate risk)", ["+3 (moderate risk)", "+8 (low risk)", "−12 (high risk)"], "Slide 19: 8 − 5 − 4 = −1."),
          q("Exercise 10 min, no ST change, no angina. Duke score and risk?", "+10, low risk", ["+10, moderate risk", "0, moderate risk", "−10, high risk"], "10 − 0 − 0 = 10."),
          q("Exercise 3 min, 2 mm ST depression, exercise-limiting angina. Duke score?", "−15, high risk", ["−7, moderate risk", "+3, moderate risk", "−3, moderate risk"], "3 − 10 − 8 = −15.")],
        [q("A 61-year-old exercises 9 minutes, has 1 mm ST depression and no angina. What is the Duke score and risk?", "+4, moderate risk", ["+9, low risk", "+4, low risk", "−1, moderate risk"], "9 − 5 − 0 = 4, which is in the −10 to +4 band."),
          q("A patient exercises 12 minutes with no ST changes and stops for leg fatigue, no angina. Duke score?", "+12, low risk", ["+12, moderate risk", "−12, high risk", "+7, low risk"], "12 − 0 − 0."),
          q("A patient exercises 5 minutes, has 2 mm ST depression and non-limiting angina. Duke score and risk?", "−9, moderate risk", ["−9, high risk", "−1, moderate risk", "+1, low risk"], "5 − 10 − 4 = −9."),
          q("A patient exercises 4 minutes with 3 mm ST depression and stops because of chest pain. Duke score?", "−19, high risk", ["−15, high risk", "−7, moderate risk", "+1, moderate risk"], "4 − 15 − 8 = −19.")])
    ]),

    S("05-mpi", "5. Myocardial perfusion imaging (MPI)", "Stress testing objectives 4 and 7 (slides 21 to 28): the stress test modalities, how MPI works, what an abnormal scan looks like, and MPI strengths and limits.", [
      C("Stress modalities and how MPI works",
        tbl(["Way to stress the heart", "Way to look for ischemia"], [
          ["<strong>Exercise</strong> (treadmill)", "<strong>EKG</strong> changes and symptoms"],
          ["<strong>Pharmacologic</strong>: vasodilator (dipyridamole, adenosine, regadenoson) or dobutamine", "<strong>MPI</strong> perfusion defects (nuclear: SPECT or PET)"],
          ["", "<strong>Echo</strong> regional wall motion abnormalities"]]) +
        "<p><strong>MPI</strong> is a visual assessment of myocardial blood flow (perfusion) using a <strong>radioactive tracer</strong>, compared between the <strong>resting</strong> and <strong>stressed</strong> states.</p>" +
        ul(["Tracers: <strong>thallium</strong> or <strong>technetium</strong>", "Cameras: <strong>SPECT</strong> (single photon emission CT) or <strong>PET</strong> (positron emission tomography)"]) +
        tbl(["Stress images", "Rest images", "Meaning"], [
          ["Decreased perfusion", "<strong>Normal</strong> perfusion", "<strong>Ischemia</strong> (reversible defect)"],
          ["Decreased perfusion", "<strong>Also decreased</strong>", "<strong>Prior MI or scar</strong> (fixed defect)"]]) +
        chain(["A narrowed artery gives enough flow at rest", "Stress raises flow in normal arteries but the narrowed one cannot keep up", "Less tracer reaches that wall during stress", "A defect appears only on stress images: ischemia"]),
        ["ct-modalities", "ct-mpi-concept", "ct-mpi-reading"],
        [q("What does MPI compare?", "Myocardial blood flow (perfusion) at rest vs during stress", ["Wall thickness at systole vs diastole", "Calcium at baseline vs one year", "Valve gradients before and after surgery"], "MPI compares blood flow at rest with flow under stress. (Slide 23)"),
          q("Which radionuclide agents are used for MPI?", "Thallium or technetium", ["Iodine or barium", "Gadolinium or gallium", "Fluorescein or indocyanine"], "MPI uses thallium or technetium tracers. (Slide 23)"),
          q("Which two camera techniques are used for MPI?", "SPECT or PET", ["MRI or CT", "TTE or TEE", "Fluoroscopy or angiography"], "MPI images are taken with SPECT or PET. (Slide 23)"),
          q("Normal perfusion at rest but decreased perfusion during stress means:", "Ischemia", ["Prior infarction or scar", "Normal study", "Aortic stenosis"], "Normal at rest but poor flow under stress = ischemia. (Slide 24)"),
          q("A perfusion defect on BOTH rest and stress images suggests:", "Previous MI or scar", ["Reversible ischemia", "Normal perfusion", "Artifact from caffeine"], "A defect at rest and stress = scar from a prior MI. (Slide 24)"),
          q("What does a stress echo look for to detect ischemia?", "New or worsening regional wall motion abnormalities", ["Perfusion defects on SPECT", "Coronary calcium", "ST elevation at rest"], "Ischemic muscle stops moving well, so stress echo looks for new wall motion abnormalities. (Slides 21 and 41)"),
          q("Which agents are vasodilator stress agents?", "Dipyridamole, adenosine, regadenoson", ["Dobutamine, dopamine, epinephrine", "Metoprolol, diltiazem, verapamil", "Nitroglycerin, hydralazine, nitroprusside"], "Dipyridamole, adenosine and regadenoson are vasodilator agents. (Slide 30)"),
          q("Which pharmacologic stress agent is a positive inotrope and chronotrope?", "Dobutamine", ["Adenosine", "Regadenoson", "Dipyridamole"], "Dobutamine raises contractility (inotrope) and HR (chronotrope). (Slide 30)")],
        [q("SPECT images show a defect in the inferior wall during stress that fills in at rest. Interpretation?", "Inferior wall ischemia", ["Inferior wall scar from an old MI", "Normal study", "Artifact; repeat with dobutamine"], "A stress defect that fills in at rest = reversible ischemia."),
          q("A patient with an old anterior MI has an anterior defect on both stress and rest images. Interpretation?", "Fixed defect: prior infarction or scar", ["Active anterior ischemia", "Normal perfusion", "Left main disease"], "Defect at rest and stress = scar."),
          q("Why does a moderately narrowed coronary artery show up only on stress images?", "At rest it supplies enough flow, but it cannot increase flow during stress the way normal arteries do", ["Tracer only works during exercise", "Rest images use a different heart", "Stress causes the plaque to grow"], "Flow mismatch appears only when demand rises.")]),
      C("MPI strengths and limitations",
        tbl(["Strengths", "Limitations"], [
          ["Perfusion and function together (gated SPECT)", "Suboptimal specificity with <strong>thallium</strong>: false positives, especially in <strong>women and obese</strong> patients"],
          ["<strong>Higher sensitivity and specificity than exercise EKG</strong>: sensitivity <strong>85 to 90%</strong>, specificity about <strong>90%</strong>", "Long procedure time with technetium agents; <strong>higher cost</strong> than ETT"],
          ["Works with LVH, dig, IVCD", "<strong>Radiation</strong> exposure"],
          ["Single-vessel sensitivity <strong>25% higher</strong> than exercise EKG; 3-vessel sensitivity <strong>95 to 100%</strong>", "Poor images in obese patients"],
          ["Can be done in almost all patients; extra prognostic info; quantifies LV function", ""],
          ["Same accuracy with pharmacologic stress; viability and ischemia together; quantitative analysis", ""]]) +
        "<p>Adding perfusion imaging to a treadmill test helps tell a true-positive from a false-positive ST depression.</p>",
        ["ct-mpi-strengths", "ct-mpi-limits"],
        [q("What is the sensitivity of SPECT MPI for detecting CAD in patients with chest pain?", "85 to 90%", ["50%", "68%", "100% always"], "SPECT MPI is 85 to 90% sensitive, better than exercise EKG. (Slide 27)"),
          q("How much higher is SPECT sensitivity than exercise EKG for single-vessel disease?", "25% higher", ["5% higher", "Lower", "Twice as low"], "SPECT is about 25% more sensitive than exercise EKG for single-vessel disease. (Slide 27)"),
          q("Sensitivity of exercise SPECT for three-vessel disease:", "95 to 100%", ["50%", "68%", "40%"], "Exercise SPECT catches 95 to 100% of 3-vessel disease. (Slide 27)"),
          q("Which MPI tracer has suboptimal specificity with more false positives?", "Thallium", ["Technetium", "Fluorodeoxyglucose", "Iodine"], "Thallium has more false positives (lower specificity). (Slide 28)"),
          q("Thallium false positives are a particular problem in:", "Women and obese patients", ["Young men", "Athletes", "Patients with RBBB"], "Breast tissue and body fat attenuate thallium, causing false defects. (Slide 28)"),
          q("Which is a limitation of MPI compared with an exercise EKG?", "Radiation exposure and higher cost", ["Lower sensitivity", "Cannot be used with LVH", "Cannot be combined with pharmacologic stress"], "MPI costs more and adds radiation. (Slide 28)"),
          q("MPI works in which patients where exercise EKG fails?", "Patients with LVH, digoxin or IVCD", ["Only patients with a normal EKG", "Only premenopausal women", "Only patients who can reach 85% PMHR"], "MPI doesn't rely on ST segments, so LVH, digoxin and IVCD don't ruin it. (Slide 27)"),
          q("Accuracy of MPI with pharmacologic stress compared with exercise:", "Comparable", ["Much worse", "Not possible", "Only half as accurate"], "Pharmacologic MPI is about as accurate as exercise MPI. (Slide 27)")],
        [q("An obese woman has a small anterior defect on a thallium SPECT. What limitation should you keep in mind?", "Thallium has more false positives in women and obese patients", ["SPECT cannot see the anterior wall", "Thallium never gives false positives", "Obesity improves image quality"], "Thallium false positives are common in women and obese patients. (Slide 28)"),
          q("A patient with LVH and resting ST changes needs ischemia testing and can exercise. Which approach gives an interpretable result?", "Exercise stress with MPI (perfusion imaging)", ["Plain exercise EKG", "Holter monitor", "Calcium score only"], "MPI works when the EKG is not interpretable.")])
    ]),

    S("06-vasodilator-agents", "6. Vasodilator stress agents: contraindications and side effects", "Stress testing objectives 5 and 6, vasodilators (slides 29 to 35 and 39): when to use pharmacologic stress, dipyridamole/adenosine and regadenoson contraindications and side effects, and why vasodilators go with MPI.", [
      C("When to use pharmacologic stress",
        "<p>Pharmacologic stress is for patients who <strong>cannot exercise</strong> to an adequate workload or have a condition that <strong>prevents an EKG treadmill test</strong>.</p>" +
        tbl(["Vasodilator indications", "Dobutamine indications"], [
          ["Unable to exercise", "Unable to exercise"],
          ["Contraindications to exercise", "<strong>Contraindication to vasodilator stress</strong>"],
          ["<strong>LBBB or pacemaker</strong>", "Evaluation of <strong>valvular heart disease</strong>"],
          ["Medications (<strong>digoxin</strong>)", ""]]) +
        hy("<strong>Vasodilators</strong> are the preferred pharmacologic agent for <strong>nuclear MPI</strong> and can be combined with low-level exercise. <strong>Regadenoson</strong> can be injected <strong>during exercise</strong> if a patient started an exercise SPECT but cannot reach the workload. <strong>Dobutamine</strong> is preferred for <strong>stress echo</strong>."),
        ["ct-pharm-when", "ct-vaso-vs-dobut-ind", "ct-vaso-mpi"],
        [q("Pharmacologic stress testing is performed when a patient:", "Cannot exercise to a sufficient workload or has a condition preventing an EKG treadmill test", ["Has a low pre-test probability", "Prefers not to walk", "Has a calcium score of 0"], "Pharmacologic stress is for patients who can't exercise enough or can't have a readable EKG. (Slide 29)"),
          q("Which pharmacologic agent is preferred for stress with LBBB or a pacemaker?", "A vasodilator", ["Dobutamine", "Atropine", "Epinephrine"], "Slide 31: LBBB/pacemaker is under vasodilator indications."),
          q("Which agent is chosen when there is a contraindication to vasodilator stress?", "Dobutamine", ["Adenosine", "Regadenoson", "Dipyridamole"], "Dobutamine works by raising demand, so it's used when vasodilators are contraindicated. (Slide 31)"),
          q("Which pharmacologic agent is preferred for nuclear MPI studies?", "Vasodilators", ["Dobutamine", "Atropine", "Isoproterenol"], "Vasodilators are preferred for nuclear MPI. (Slide 39)"),
          q("Which vasodilator can be injected during exercise when a patient cannot reach the target workload on an exercise SPECT?", "Regadenoson", ["Dipyridamole", "Dobutamine", "Aminophylline"], "Regadenoson can be added during exercise to finish the test. (Slide 39)"),
          q("Which agent is preferred for stress echocardiography?", "Dobutamine", ["Adenosine", "Regadenoson", "Dipyridamole"], "Dobutamine makes the heart work harder, ideal for watching wall motion on echo. (Slide 36)")],
        [q("A patient with a left bundle branch block who cannot walk well needs a nuclear stress test. Best stress agent?", "A vasodilator such as regadenoson", ["Dobutamine", "Treadmill only", "Atropine"], "LBBB is a vasodilator indication, and vasodilators are preferred for MPI."),
          q("A man starts an exercise SPECT but tires at 70% PMHR. What can be done without stopping?", "Inject regadenoson during exercise", ["Give aminophylline", "Switch to TEE", "Stop and send him home"], "Regadenoson can be injected during exercise to finish the test. (Slide 39)")]),
      C("Dipyridamole and adenosine",
        tbl(["Contraindications", "Side effects"], [
          ["<strong>Severe asthma, COPD (active wheezing)</strong>", "<strong>Chest pain (20%)</strong>"],
          ["<strong>Hypotension</strong> (SBP under 90)", "Dyspnea (12%)"],
          ["<strong>Severe bradycardia</strong> (under 40)", "Dizziness (12%)"],
          ["<strong>Xanthines, caffeine within 12 hours</strong> (block adenosine)", "Headache (12%)"],
          ["Dipyridamole (<strong>Aggrenox</strong>) within <strong>48 hours</strong>", "ST-T changes (5 to 8%)"],
          ["<strong>Aminophylline within 24 hours</strong> (blocks adenosine)", "Nausea (3%)"],
          ["High-degree AV block or sick sinus syndrome", ""]]) +
        hy("The speaker note on the contraindication slide says <strong>\"Test question.\"</strong> Know: wheezing lungs, low BP, slow heart, caffeine 12 h, Aggrenox 48 h, aminophylline 24 h, high-grade AV block or sick sinus.") +
        mn("<strong>\"No Coffee, No Wheeze, No Block\"</strong>: caffeine and xanthines block adenosine receptors; bronchospasm worsens; AV block worsens."),
        ["ct-adeno-ci", "ct-adeno-se"],
        [q("Which lung problem contraindicates adenosine or dipyridamole stress?", "Severe asthma or COPD with active wheezing", ["Mild seasonal allergies", "Remote pneumonia", "Sleep apnea"], "Adenosine and dipyridamole can trigger bronchospasm. (Slide 32)"),
          q("How long before an adenosine stress test must caffeine be held?", "12 hours", ["1 hour", "48 hours", "1 week"], "Hold caffeine 12 hours before adenosine stress. (Slide 32)"),
          q("Why must caffeine and xanthines be held before adenosine?", "They block the effects of adenosine", ["They cause asthma", "They lower blood pressure", "They interfere with the tracer"], "Caffeine and xanthines block adenosine receptors. (Slide 32)"),
          q("Aminophylline must not have been given within how long before adenosine stress?", "24 hours", ["12 hours", "48 hours", "7 days"], "Aminophylline blocks adenosine, so none within 24 hours. (Slide 32)"),
          q("Recent dipyridamole (Aggrenox) use within how long contraindicates dipyridamole/adenosine stress?", "48 hours", ["12 hours", "24 hours", "1 week"], "Dipyridamole within 48 hours would potentiate adenosine. (Slide 32)"),
          q("What systolic BP contraindicates dipyridamole/adenosine?", "Under 90 mmHg", ["Under 120 mmHg", "Above 140 mmHg", "Above 200 mmHg"], "SBP under 90 is too low for a vasodilator. (Slide 32)"),
          q("What heart rate contraindicates dipyridamole/adenosine?", "Severe bradycardia under 40", ["Heart rate under 70", "Heart rate over 100", "Any sinus rhythm"], "Vasodilators slow conduction, so HR under 40 is a contraindication. (Slide 32)"),
          q("Which rhythm problem contraindicates dipyridamole/adenosine?", "High-degree AV block or sick sinus syndrome", ["Sinus arrhythmia", "Single PAC", "RBBB"], "Vasodilators worsen AV block and sinus node dysfunction. (Slide 32)"),
          q("Most common side effect of dipyridamole/adenosine on the slide?", "Chest pain (20%)", ["Nausea (3%)", "Seizure", "Bradycardia only"], "Chest pain is the most common side effect (about 20%). (Slide 33)"),
          q("Which side effects of dipyridamole/adenosine each occur in about 12%?", "Dyspnea, dizziness, headache", ["Chest pain, nausea, rash", "Seizure, syncope, stroke", "Palpitations, VT, flushing"], "Dyspnea, dizziness and headache each occur in about 12%. (Slide 33)")],
        [q("A patient for an adenosine MPI had two cups of coffee 3 hours ago. What should happen?", "Reschedule: caffeine within 12 hours blocks adenosine", ["Proceed; coffee does not matter", "Give extra adenosine", "Switch to exercise only if he is wheezing"], "Caffeine within 12 hours blocks adenosine, so reschedule. (Slide 32)"),
          q("A patient with an asthma flare and audible wheezing needs pharmacologic MPI. Which agent should be avoided?", "Adenosine or dipyridamole", ["Dobutamine", "Exercise", "Technetium"], "Adenosine and dipyridamole can cause bronchospasm. (Slide 32)"),
          q("A patient takes Aggrenox and stopped it yesterday. Can she have dipyridamole/adenosine stress today?", "No: dipyridamole within 48 hours is a contraindication", ["Yes, 24 hours is enough", "Yes, Aggrenox is unrelated", "Only with caffeine"], "Dipyridamole within 48 hours is a contraindication. (Slide 32)"),
          q("During an adenosine infusion the patient reports chest pain. Is this expected?", "Yes, chest pain is the most common side effect (about 20%)", ["No, it always means MI", "No, adenosine never causes chest pain", "Only if the patient drank coffee"], "Chest pain is common (about 20%) with adenosine. (Slide 33)")]),
      C("Regadenoson (Lexiscan)",
        tbl(["Contraindications", "Side effects"], [
          ["<strong>Second- or third-degree AV block without a pacemaker</strong>", "<strong>Dyspnea (28%)</strong>"],
          ["<strong>Sinus node dysfunction without a pacemaker</strong>", "<strong>Headache (26%)</strong>"],
          ["<strong>Hypotension</strong>", "Tachycardia (22%)"],
          ["", "Flushing (16%)"],
          ["", "PVCs (14%)"],
          ["", "Chest pain (13%)"],
          ["", "ST depression (12%)"]]) +
        "<p>Regadenoson is a vasodilator (an A2A receptor agonist on the algorithm slide). A pacemaker protects against its AV block and sinus node problems.</p>",
        ["ct-regadenoson"],
        [q("What is the brand name of regadenoson?", "Lexiscan", ["Aggrenox", "Persantine", "Dobutrex"], "Lexiscan = regadenoson. (Slide 34)"),
          q("Second- or third-degree AV block contraindicates regadenoson unless:", "The patient has a pacemaker", ["The patient is on a beta blocker", "The patient has had caffeine", "Never; it is always contraindicated"], "A pacemaker protects against the AV block regadenoson can worsen. (Slide 34)"),
          q("Which of these is a regadenoson contraindication?", "Hypotension", ["Hypertension controlled on meds", "LBBB", "Digoxin use"], "Regadenoson lowers BP, so hypotension is a contraindication. (Slide 34)"),
          q("Most common side effect of regadenoson on the slide?", "Dyspnea (28%)", ["Flushing (16%)", "PVCs (14%)", "Nausea (3%)"], "Dyspnea is regadenoson's most common side effect (28%). (Slide 35)"),
          q("Which regadenoson side effect occurs in about 26%?", "Headache", ["Seizure", "Rash", "Bradycardia"], "Headache occurs in about 26%. (Slide 35)"),
          q("Regadenoson causes tachycardia in about:", "22%", ["2%", "50%", "75%"], "Tachycardia occurs in about 22%. (Slide 35)")],
        [q("A patient with sick sinus syndrome and no pacemaker needs pharmacologic MPI. Is regadenoson safe?", "No: sinus node dysfunction without a pacemaker contraindicates it", ["Yes, always", "Yes, if caffeine is given first", "Only at a double dose"], "Without a pacemaker, sinus node dysfunction can worsen with regadenoson. (Slide 34)"),
          q("A patient with complete heart block and a working dual-chamber pacemaker needs nuclear stress. Can regadenoson be used?", "Yes: AV block is only a contraindication without a pacemaker", ["No, never with heart block", "Only dobutamine is allowed", "Only after removing the pacemaker"], "With a pacemaker, AV block is no longer a contraindication. (Slide 34)"),
          q("After regadenoson a patient becomes short of breath and has a headache. These are:", "The two most common side effects", ["Signs of anaphylaxis requiring epinephrine", "Signs the drug failed", "Unrelated to the drug"], "Slide 35: dyspnea 28%, headache 26%.")])
    ]),

    S("07-dobutamine-stress-echo", "7. Dobutamine and stress echocardiography", "Stress testing objectives 4 to 6, dobutamine and echo (slides 36 to 38, 40 to 44): dobutamine action, contraindications and side effects, and stress echo uses, strengths and limits.", [
      C("Dobutamine",
        "<p>A synthetic catecholamine that stimulates <strong>beta-1 receptors</strong>: raises <strong>heart rate</strong> (chronotropic) and <strong>contractility</strong> (inotropic). It makes the heart work harder, like exercise. <strong>Preferred agent for stress echo.</strong></p>" +
        tbl(["Contraindications", "Side effects (about 75% of patients)"], [
          ["<strong>Unstable angina</strong>", "Ischemic ST depression (33%)"],
          ["<strong>Recent MI</strong>", "Chest pain (31%)"],
          ["Hypotension or hypertension", "Palpitations (29%)"],
          ["<strong>Tachyarrhythmias</strong>", "Headache, flushing, dyspnea (14% each)"],
          ["Symptomatic <strong>severe aortic stenosis</strong>", "Significant SVT or ventricular arrhythmias (8 to 10%)"],
          ["<strong>Hypertrophic cardiomyopathy</strong>", ""],
          ["<strong>Aortic dissection</strong> or large aortic aneurysm", ""]]) +
        hy("Vasodilators: avoid with <strong>wheezing, AV block, low BP, caffeine</strong>. Dobutamine: avoid when <strong>more work or more rate</strong> is dangerous: unstable angina, recent MI, tachyarrhythmias, severe AS, HCM, dissection."),
        ["ct-dobut-moa", "ct-dobut-ci", "ct-dobut-se"],
        [q("Dobutamine stimulates which receptor?", "Beta-1", ["Alpha-1", "Adenosine A2A", "Dopamine D1"], "Dobutamine is a beta-1 agonist. (Slide 36)"),
          q("Dobutamine increases which two things?", "Heart rate and contractility", ["Coronary vasodilation and bronchodilation", "Preload and afterload", "QT interval and PR interval"], "Slide 36: chronotropic and inotropic effect."),
          q("Dobutamine is the preferred pharmacologic stress agent for:", "Stress echocardiography", ["Nuclear MPI", "PET viability", "Coronary CT angiography"], "Dobutamine is the agent of choice for stress echo. (Slide 36)"),
          q("Which is a contraindication to dobutamine stress?", "Hypertrophic cardiomyopathy", ["Asthma", "Caffeine within 12 hours", "LBBB"], "Dobutamine raises contractility and worsens HCM obstruction. (Slide 37)"),
          q("Which aortic condition contraindicates dobutamine?", "Aortic dissection or large aortic aneurysm", ["Bicuspid aortic valve without stenosis", "Aortic sclerosis", "Mild aortic regurgitation"], "Dobutamine raises force and pressure that could worsen a dissection or aneurysm. (Slide 37)"),
          q("About what fraction of patients have side effects with dobutamine?", "About 75%", ["About 5%", "About 25%", "Almost none"], "About 75% have some side effect with dobutamine. (Slide 38)"),
          q("Most common dobutamine side effect on the slide?", "Ischemic ST depression (33%)", ["Headache (14%)", "Flushing (14%)", "Seizure"], "Ischemic ST depression (33%) is the most common. (Slide 38)"),
          q("Significant arrhythmias occur with dobutamine in about:", "8 to 10%", ["0.1%", "50%", "33%"], "Significant arrhythmias occur in about 8 to 10%. (Slide 38)"),
          q("Which rhythm problem contraindicates dobutamine?", "Tachyarrhythmias", ["Sinus bradycardia at 55", "First-degree AV block", "RBBB"], "Dobutamine speeds the heart and can worsen tachyarrhythmias. (Slide 37)")],
        [q("A COPD patient with active wheezing needs a pharmacologic stress test and has no cardiac contraindications. Which agent?", "Dobutamine (stress echo)", ["Adenosine", "Dipyridamole", "Regadenoson"], "Bronchospasm contraindicates vasodilators; dobutamine is the alternative."),
          q("A patient with known HCM and outflow obstruction is referred for a dobutamine stress echo. Concern?", "HCM is a contraindication to dobutamine", ["None; HCM is an indication", "Only caffeine matters", "Dobutamine is safe if BP is high"], "Dobutamine worsens the outflow obstruction in HCM. (Slide 37)"),
          q("During dobutamine infusion a patient reports palpitations and has 1.5 mm ST depression. Is this expected?", "Yes, both are common dobutamine side effects", ["No, dobutamine never causes ST changes", "Only if the patient had caffeine", "Only in patients with asthma"], "Palpitations and ST depression are common with dobutamine. (Slide 38)")]),
      C("Stress echocardiography",
        "<p><strong>Used to:</strong> detect hemodynamically significant CHD, <strong>localize ischemia</strong> in known CHD, assess <strong>valvular disease</strong>, and assess <strong>myocardial viability</strong>.</p>" +
        "<p><strong>Detects ischemia</strong> by <strong>new regional wall motion abnormalities</strong> or worsening of existing ones.</p>" +
        tbl(["Strengths", "Limitations"], [
          ["Sensitivity <strong>84%</strong>, specificity <strong>86%</strong> (better than exercise EKG); <strong>highly operator dependent</strong>", "Less sensitive for <strong>single-vessel</strong> or mild stenosis with post-exercise imaging"],
          ["If max HR under 85% PMHR, sensitivity drops to <strong>42%</strong>", "Cannot image the whole ventricle in some patients"],
          ["Sensitivity 10% lower in women; in women with single-vessel disease only 40%", "Highly operator dependent; no quantitative analysis"],
          ["Extra prognostic value; dobutamine stress more sensitive", "<strong>Poor windows in COPD</strong>"],
          ["Short exam; shows structural problems (valves); contrast can add perfusion", "Infarct-zone ischemia less well detected"],
          ["Relatively low cost; <strong>no radiation</strong>", "Less accurate with significant resting wall motion abnormalities or moderate-severe LV systolic dysfunction"]]),
        ["ct-stress-echo-uses", "ct-stress-echo-strengths", "ct-stress-echo-limits"],
        [q("How does stress echocardiography detect ischemia?", "New or worsening regional wall motion abnormalities", ["Perfusion defects on SPECT", "Calcium in the coronaries", "ST elevation at rest"], "Ischemic segments move poorly under stress. (Slide 41)"),
          q("Which is NOT a stated use of stress echo?", "Measuring coronary calcium", ["Localizing ischemia in known CHD", "Assessing valvular heart disease", "Assessing myocardial viability"], "Echo can't measure coronary calcium; that's CT. (Slide 41)"),
          q("Stress echo sensitivity and specificity from the meta-analysis:", "84% and 86%", ["68% and 77%", "95% and 100%", "42% and 40%"], "Stress echo is about 84% sensitive and 86% specific. (Slide 42)"),
          q("If the max heart rate is under 85% PMHR, stress echo sensitivity drops to:", "42%", ["84%", "68%", "10%"], "Below 85% PMHR, stress echo sensitivity drops to about 42%. (Slide 42)"),
          q("Which stress test advantage does stress echo have over nuclear MPI?", "No radiation", ["Quantitative image analysis", "Better windows in COPD", "Not operator dependent"], "Echo uses ultrasound, so there is no radiation. (Slide 42)"),
          q("Which patients tend to have poor echo windows?", "COPD patients", ["Thin young adults", "Patients with RBBB", "Patients on beta blockers"], "Hyperinflated lungs block ultrasound windows. (Slide 43)"),
          q("Stress echo is less accurate when there is:", "Significant resting wall motion abnormality or moderate-severe LV dysfunction", ["A normal resting echo", "Sinus rhythm", "Mild hypertension"], "Pre-existing wall motion problems make new ones hard to see. (Slide 44)"),
          q("Stress echo sensitivity in women compared with men:", "About 10% lower (specificity the same)", ["20% higher", "Identical", "Twice as high"], "Stress echo is about 10% less sensitive in women. (Slide 42)"),
          q("A major weakness of stress echo is that it is:", "Highly operator dependent", ["Very expensive", "High radiation", "Unable to see valves"], "Echo quality depends heavily on who performs it."),
          q("Which extra finding can a stress echo give that a treadmill EKG cannot?", "Co-existing structural problems such as valve disease", ["Coronary calcium score", "Hibernating myocardium glucose uptake", "INR"], "Echo also shows valves and structure. (Slide 42)")],
        [q("A 55-year-old with severe COPD needs ischemia testing. Why might stress echo be a poor choice?", "COPD gives poor echo windows", ["COPD causes false-positive calcium scores", "Stress echo uses adenosine", "Stress echo has high radiation"], "COPD hyperinflation gives poor echo windows. (Slide 43)"),
          q("A young woman wants to avoid radiation and needs ischemia testing; she cannot exercise and has no contraindications. Best option?", "Dobutamine stress echo", ["Thallium SPECT", "Coronary angiogram", "MUGA scan"], "No radiation and dobutamine is preferred for stress echo."),
          q("A patient with a large prior MI and an EF of 30% has extensive resting wall motion abnormalities. Why is stress echo less reliable?", "Significant resting wall motion abnormalities and LV dysfunction lower its accuracy", ["Echo cannot see the LV", "It uses radiation", "Dobutamine is always contraindicated after MI"], "Slide 44; the algorithm sends these patients to nuclear imaging.")])
    ]),

    S("08-pet-viability", "8. PET myocardial viability scan", "Stress testing objective 8 (slides 45 to 47): when viability matters, how PET measures perfusion and metabolism, and normal, stunned, hibernating and necrotic myocardium.", [
      C("PET viability: is the muscle dead or asleep?",
        "<p><strong>The question (slide 45):</strong> a patient has extensive scarring on MPI and wall motion abnormalities on echo. Is the muscle worth revascularizing?</p>" +
        ul(["PET viability assesses <strong>both perfusion and metabolism</strong>.",
          "Metabolism = <strong>glucose uptake</strong> by the cells.",
          "Perfusion is assessed the same way as MPI.",
          "It can tell <strong>normal, stunned, hibernating and necrotic</strong> myocardium apart."]) +
        tbl(["Blood flow", "Metabolism (glucose uptake)", "Meaning", "Plan (slide 47)"], [
          ["None", "<strong>None</strong>", "Permanent damage: dead (necrotic) tissue", "Revascularizing will not help (the slide labels it \"Transplant\")"],
          ["None", "<strong>Present</strong>", "<strong>Viable</strong> (hibernating) tissue", "<strong>Bypass</strong>: restoring flow can bring it back"]]) +
        hy("<strong>PET MPI is the gold standard noninvasive technique</strong> for finding <strong>hibernating myocardium</strong>.") +
        chain(["Chronic low flow", "Muscle stops contracting to save energy but keeps using glucose (hibernating)", "PET shows a flow defect with preserved metabolism (mismatch)", "Revascularize: function can recover"]),
        ["ct-pet-question", "ct-pet-how", "ct-pet-reading"],
        [q("What two things does a PET viability scan assess?", "Perfusion and metabolism", ["Calcium and stenosis", "Wall motion and valve area", "Rhythm and rate"], "PET checks perfusion and metabolism. (Slide 46)"),
          q("How does PET measure myocardial metabolism?", "Glucose uptake in the cells", ["Oxygen saturation in the coronary sinus", "Lactate in the blood", "Troponin release"], "PET uses a glucose tracer to see which cells are still metabolizing. (Slide 46)"),
          q("Which four myocardial states can PET distinguish?", "Normal, stunned, hibernating, necrotic", ["Ischemic, infarcted, calcified, dilated", "Systolic, diastolic, restrictive, constrictive", "Anterior, inferior, lateral, septal"], "PET can tell normal, stunned, hibernating and dead muscle apart. (Slide 46)"),
          q("What is the gold standard noninvasive technique for identifying hibernating myocardium?", "Radionuclide MPI with PET", ["Exercise EKG", "Stress echo", "Coronary calcium score"], "PET is the gold standard for finding hibernating myocardium. (Slide 47)"),
          q("On PET, no blood flow but preserved metabolic activity means:", "Viable (hibernating) tissue: consider bypass", ["Dead tissue: no benefit from revascularization", "Normal myocardium", "Artifact"], "No flow but active metabolism = hibernating muscle that can recover with bypass. (Slide 47)"),
          q("On PET, no blood flow and no metabolism means:", "Permanent damage (necrotic tissue)", ["Hibernating tissue", "Stunned tissue", "Normal tissue"], "No flow and no metabolism = dead tissue. (Slide 47)"),
          q("Why order a PET viability scan?", "To decide whether a patient with scar and wall motion abnormalities is a candidate for revascularization", ["To screen asymptomatic patients", "To measure the calcium score", "To diagnose aortic dissection"], "PET shows if weak muscle is alive enough to benefit from revascularization. (Slide 45)")],
        [q("A patient with ischemic cardiomyopathy has a large anterior defect on SPECT and an akinetic anterior wall. The surgeon asks whether bypass would help. Best test?", "PET myocardial viability scan", ["Exercise EKG", "Holter monitor", "Calcium score"], "PET viability shows if the akinetic wall would recover after bypass."),
          q("PET shows absent flow in the inferior wall but preserved glucose uptake. What does that mean for treatment?", "The muscle is viable (hibernating); revascularization can restore function", ["The wall is dead; do not revascularize", "The study is normal", "This means pericarditis"], "Slide 47: no blood flow plus metabolic activity = viable, by-pass."),
          q("PET shows no flow and no metabolism in the anterior wall. What is the implication?", "Permanent damage; bypass to that wall is unlikely to help", ["Hibernating myocardium; bypass will restore function", "Stunned myocardium that will recover in days", "False positive from caffeine"], "No flow and no metabolism = scar, which bypass won't fix. (Slide 47)")])
    ]),

    S("09-choosing-stress-test", "9. Choosing the right stress test", "Stress testing objective 9 (slide 48 algorithm): the question sequence that picks exercise EKG, stress imaging, vasodilator nuclear, dobutamine echo or PET.", [
      C("The algorithm",
        "<p><strong>Question 1: Can the patient exercise to a satisfactory workload?</strong></p>" +
        tbl(["Can exercise", "Cannot exercise"], [
          ["Any of: LBBB, V-pacing, pre-excitation (WPW), ≥1 mm resting ST-T changes, LVH, digoxin, prior revascularization, need to localize ischemia, need viability?<br><strong>No</strong> → <strong>exercise EKG</strong><br><strong>Yes</strong> → stress <strong>imaging</strong>", "LBBB, V-pacing or atrial fibrillation?<br><strong>Yes</strong> → <strong>vasodilator SPECT or PET</strong> (unless contraindicated)"],
          ["Imaging, LBBB or V-pacing? <strong>Yes</strong> → <strong>vasodilator</strong> SPECT or PET", "No → extensive resting wall motion abnormalities?"],
          ["No LBBB or pacing, extensive resting WMA? <strong>Yes</strong> → <strong>stress nuclear</strong> (exercise if possible, else vasodilator; PET for viability)", "Yes → <strong>vasodilator SPECT or PET</strong>; dobutamine SPECT/PET if vasodilators contraindicated; PET if viability needed"],
          ["No extensive WMA → <strong>stress echo or stress nuclear</strong> (exercise where possible; dobutamine echo or vasodilator nuclear if not)", "No → <strong>vasodilator SPECT/PET or dobutamine echo</strong>"]]) +
        hy("Patterns to remember: <strong>LBBB or pacing → vasodilator nuclear</strong> (exercise or dobutamine raises the heart rate and causes false septal defects in LBBB; standard teaching). <strong>Extensive resting wall motion abnormality → nuclear, not echo.</strong> <strong>Viability → PET.</strong> <strong>Normal EKG and can exercise → plain exercise EKG.</strong>") +
        "<p>Algorithm contraindication box: <strong>vasodilators</strong>: bronchospasm, hypotension, sick sinus, high-degree AV block, oral dipyridamole; hold theophylline 48 h and caffeine 12 h. <strong>Dobutamine</strong>: ventricular arrhythmias, recent MI (1 to 3 days), unstable angina, significant LVOT obstruction, aortic dissection, severe systemic hypertension.</p>",
        ["ct-algorithm-exercise", "ct-algorithm-noexercise", "ct-algorithm-patterns"],
        [q("What is the first question in choosing a stress test?", "Can the patient exercise to a satisfactory workload?", ["Does the patient have a murmur?", "What is the LDL?", "Is the patient over 65?"], "First ask: can they exercise enough? (Slide 48)"),
          q("A patient who can exercise and has none of the EKG problems on the list should get:", "An exercise EKG", ["Vasodilator PET", "Dobutamine echo", "Coronary angiogram"], "Can exercise and normal EKG = plain exercise EKG. (Slide 48)"),
          q("A patient who cannot exercise and has LBBB, V-pacing or AF should get:", "Vasodilator SPECT or PET", ["Dobutamine echo", "Exercise EKG", "Holter"], "LBBB, pacing and AF distort exercise results, so use vasodilator imaging. (Slide 48)"),
          q("A patient with extensive resting LV wall motion abnormalities is steered toward:", "Nuclear imaging rather than echo", ["Stress echo", "Plain exercise EKG", "No testing"], "Echo can't see new wall motion problems on top of extensive old ones, so use nuclear. (Slide 48)"),
          q("When the algorithm needs myocardial viability, which test does it choose?", "PET", ["Exercise EKG", "TTE", "Calcium score"], "PET is the viability test. (Slide 48)"),
          q("On the algorithm, how long must theophylline be held before a vasodilator?", "48 hours", ["12 hours", "1 hour", "2 weeks"], "Slide 48 contraindication box: theophylline 48 h, caffeine 12 h."),
          q("Which patient who CAN exercise still needs stress imaging?", "One with LVH or on digoxin", ["One with a normal resting EKG", "One with sinus arrhythmia", "One with a low pre-test probability and normal EKG"], "LVH and digoxin distort ST segments, so add imaging even if they can exercise."),
          q("A patient who cannot exercise, has no LBBB/pacing/AF and no extensive resting WMA can get:", "Vasodilator SPECT/PET or dobutamine echo", ["Only an exercise EKG", "Only invasive angiography", "Only a Holter"], "Can't exercise but no EKG or echo problems: vasodilator nuclear or dobutamine echo. (Slide 48)")],
        [q("A 62-year-old with knee arthritis who cannot walk on a treadmill has a paced ventricular rhythm. Best stress test?", "Vasodilator (regadenoson) SPECT or PET", ["Exercise EKG", "Dobutamine echo", "Treadmill with Bruce protocol"], "Cannot exercise + V-pacing → vasodilator nuclear."),
          q("A fit 50-year-old with chest pain, a normal resting EKG and no medications needs evaluation. Best stress test?", "Exercise EKG", ["Regadenoson SPECT", "PET viability", "TEE"], "Can exercise and no listed condition."),
          q("A patient who can exercise is on digoxin and has no resting wall motion abnormalities. Best test?", "Exercise stress echo or exercise nuclear", ["Plain exercise EKG", "Vasodilator PET for viability", "No test possible"], "Digoxin → imaging; no extensive WMA → stress echo or stress nuclear."),
          q("A patient who cannot exercise, has active wheezing (vasodilator contraindicated) and extensive resting wall motion abnormalities needs viability assessment. Best test?", "Dobutamine PET (or dobutamine SPECT)", ["Adenosine SPECT", "Exercise EKG", "Dobutamine echo"], "Slide 48: vasodilator SPECT/PET unless contraindicated, then dobutamine SPECT or PET; PET if viability needed."),
          q("A patient with AF who uses a wheelchair needs ischemia testing. Best test?", "Vasodilator SPECT or PET", ["Exercise EKG", "Exercise echo", "Calcium score"], "Cannot exercise + AF → vasodilator nuclear.")])
    ]),

    /* ================= ECHOCARDIOGRAPHY AND TELEMETRY ================= */

    S("10-tte", "10. Transthoracic echo: when to order and what it shows", "Echo objectives 1 to 3 (slides 2, 5 to 14): TTE as the primary noninvasive imaging test, the case study, imaging windows and views, echo modes, and the list of structures and measurements.", [
      C("TTE: what it is and when to order",
        "<p><strong>Transthoracic echocardiogram (TTE)</strong>: the <strong>primary noninvasive imaging</strong> test for quantitative and qualitative evaluation of cardiac <strong>anatomy and function</strong>.</p>" +
        ul(["<strong>Biventricular function</strong>: LV systolic, diastolic, RV function",
          "<strong>Structural abnormalities</strong>: LVH, wall motion abnormalities, septal aneurysm, <strong>PFO, ASD</strong>",
          "All <strong>four valves</strong>: aortic, mitral, tricuspid, pulmonic"]) +
        hy("<strong>Case study 1 (slide 2):</strong> dyspnea, swelling, 1+ leg edema and a 2/6 systolic murmur. Suspected valvular heart disease → order an <strong>echocardiogram</strong> (not an EKG, treadmill MPI, or Holter).") +
        "<p>Imaging windows: <strong>parasternal</strong>, <strong>apical</strong>, <strong>subcostal (subxiphoid)</strong>.</p>" +
        tbl(["View", "Best for"], [
          ["Parasternal long axis", "Size and contractility of RV and LV (septum and posterior wall); mitral and aortic valve morphology; color Doppler for AR or MR"],
          ["Parasternal short axis", "Three levels: base (aortic valve), mitral valve, mid-ventricle (papillary muscles toward apex)"],
          ["<strong>Apical 4-chamber</strong>", "All 4 chambers; <strong>best for Simpson EF</strong>, the LV apex, mitral inflow (diastolic function, mitral stenosis)"],
          ["<strong>Apical 5-chamber</strong>", "Adds the aortic valve; <strong>best Doppler alignment with the aortic outflow tract</strong>: grade <strong>aortic stenosis</strong>, calculate cardiac output"],
          ["Apical 2-chamber", "LV anterior and inferior walls"],
          ["Subcostal 4-chamber", "<strong>Sometimes the only window in ventilated patients</strong>; LV and RV function, valve regurgitation"],
          ["Subcostal short axis", "LV function; aortic valve with tricuspid and pulmonic valves"],
          ["Subcostal <strong>IVC</strong>", "IVC diameter and respiratory variation → <strong>volume status</strong>"]]),
        ["ct-tte-def", "ct-tte-case", "ct-echo-views"],
        [q("What is the primary noninvasive imaging test for cardiac anatomy and function?", "Transthoracic echocardiogram (TTE)", ["Cardiac MRI", "MUGA scan", "Coronary CT angiogram"], "TTE is the first-line test for cardiac structure and function. (Slide 5)"),
          q("Which structural abnormalities can TTE show?", "LVH, wall motion abnormalities, septal aneurysm, PFO, ASD", ["Coronary calcium only", "Coronary stenosis percentage", "Esophageal varices"], "TTE shows LVH, wall motion, aneurysms and shunts like PFO and ASD. (Slide 5)"),
          q("Which three imaging windows are used in echo?", "Parasternal, apical, subcostal", ["Anterior, posterior, lateral", "Suprasternal only", "Axillary, femoral, radial"], "Echo windows: parasternal, apical, subcostal. (Slide 6)"),
          q("Which view is best for calculating the Simpson ejection fraction?", "Apical 4-chamber", ["Parasternal short axis", "Subcostal IVC", "Apical 2-chamber"], "Simpson EF is calculated from the apical 4-chamber view. (Slide 8)"),
          q("Which view gives the best Doppler alignment to grade aortic stenosis?", "Apical 5-chamber", ["Apical 2-chamber", "Subcostal 4-chamber", "Parasternal short axis at the papillary muscles"], "Apical 5-chamber lines the Doppler up with aortic outflow."),
          q("Which view may be the only window in ventilated patients?", "Subcostal", ["Parasternal", "Apical 5-chamber", "Suprasternal"], "Subcostal is often the only window in ventilated patients. (Slide 9)"),
          q("What does the subcostal IVC view estimate?", "Volume status (IVC diameter and respiratory variation)", ["Aortic valve area", "Coronary flow", "Ejection fraction by Simpson"], "IVC size and collapse with breathing estimate volume status. (Slide 9)"),
          q("Which apical view shows the anterior and inferior LV walls?", "Apical 2-chamber", ["Apical 4-chamber", "Apical 5-chamber", "Subcostal IVC"], "Apical 2-chamber shows the anterior and inferior walls. (Slide 8)"),
          q("Which valves does a TTE evaluate?", "All four: aortic, mitral, tricuspid, pulmonic", ["Only the aortic", "Only the mitral and aortic", "None; TTE shows only chambers"], "TTE evaluates all four valves. (Slide 5)"),
          q("The apical 4-chamber view is used to study mitral inflow for:", "Diastolic function and mitral stenosis", ["Coronary calcium", "Aortic dissection", "Pulmonary embolism"], "Mitral inflow in apical 4-chamber shows diastolic function and MS. (Slide 8)")],
        [q("A patient has dyspnea, swelling, 1+ edema and a 2/6 systolic murmur. You suspect valve disease. Which test?", "Echocardiogram", ["EKG", "Exercise treadmill with Myoview", "Holter monitor"], "Echo is the test of choice for suspected valve disease. (slide 2)"),
          q("An intubated ICU patient has poor parasternal and apical windows. Which echo window may still work?", "Subcostal", ["Apical 5-chamber", "Parasternal long axis", "None; echo is impossible"], "The subcostal window often works when others fail. (Slide 9)"),
          q("You want to know if a hypotensive patient is volume depleted using bedside echo. Which view?", "Subcostal IVC (diameter and respiratory variation)", ["Apical 5-chamber", "Parasternal short axis at the aortic valve", "Apical 2-chamber"], "Subcostal IVC size and collapse show volume status. (Slide 9)")]),
      C("Echo modes and what echo measures",
        tbl(["Mode", "What it does"], [
          ["<strong>M-mode</strong>", "A \"tracing\" of structures; measures chamber size and wall thickness"],
          ["<strong>Doppler</strong>", "Measures blood <strong>flow</strong> through chambers and valves"],
          ["<strong>Color Doppler</strong>", "Colors show the <strong>direction</strong> of flow; simplifies Doppler interpretation"],
          ["<strong>2-D</strong>", "Shows actual structures and their <strong>real-time motion</strong>"],
          ["<strong>3-D</strong>", "Three-dimensional views with more depth; real-time measurements; <strong>useful for the CT surgeon before surgery</strong>"]]) +
        "<p><strong>Echo measures (slide 14):</strong> LVEF, LVOT, stroke volume, diastolic function, end-diastolic volume, LVH, <strong>pulmonary artery systolic pressure</strong>, IVC size, aortic root size, atrial sizes, <strong>aortic valve area and peak velocity</strong>, mitral stenosis, regurgitation and prolapse, PFO, ASD, tricuspid regurgitation, pulmonic stenosis, longitudinal strain.</p>" +
        "<p><strong>Bubble study (slide 21):</strong> agitated saline makes microbubbles that light up the right heart and are trapped by the lung capillaries, so normally none reach the left side. Used to confirm an <strong>ASD or PFO</strong>. A left-to-right shunt shows as a jet interrupting the opacified right atrium. Theoretical risk: <strong>systemic air embolism</strong> with a right-to-left shunt.</p>",
        ["ct-echo-modes", "ct-echo-measures", "ct-bubble"],
        [q("Which echo mode gives a tracing used to measure chamber size and wall thickness?", "M-mode", ["Color Doppler", "3-D echo", "Bubble study"], "M-mode gives a precise line tracing for chamber size and wall thickness. (Slide 10)"),
          q("What does Doppler echocardiography measure?", "Blood flow through the chambers and valves", ["Wall thickness only", "Coronary calcium", "Electrical activity"], "Doppler measures blood flow velocity through chambers and valves. (Slide 11)"),
          q("In color Doppler, what do the colors show?", "The direction of blood flow", ["Tissue temperature", "Oxygen saturation", "Calcium density"], "Color shows flow direction (toward or away from the probe). (Slide 11)"),
          q("Which echo mode is useful for the CT surgeon before surgery?", "3-D echo", ["M-mode", "Plain Doppler", "Subcostal IVC"], "3-D echo gives surgeons spatial detail before surgery. (Slide 13)"),
          q("Which echo mode shows real-time motion of the actual structures?", "2-D echo", ["M-mode", "MUGA", "CCTA"], "2-D echo shows real-time structure motion. (Slide 12)"),
          q("A bubble study is used to confirm:", "ASD or PFO", ["Aortic stenosis", "Coronary stenosis", "Pericarditis"], "A bubble study detects ASD or PFO shunts. (Slide 21)"),
          q("Why do bubbles normally not reach the left heart?", "They are trapped and absorbed by the pulmonary capillaries", ["They dissolve in the right atrium", "The tricuspid valve blocks them", "They are too heavy"], "The lungs filter out bubbles, so they appear on the left only through a shunt. (Slide 21)"),
          q("What is the theoretical risk of a bubble study?", "Systemic air embolism with a right-to-left shunt", ["Contrast nephropathy", "Radiation", "Esophageal perforation"], "With a right-to-left shunt, bubbles could cause a systemic air embolism. (Slide 21)"),
          q("Which pressure can echo estimate?", "Pulmonary artery systolic pressure", ["Pulmonary capillary wedge pressure directly", "Intracranial pressure", "Portal pressure"], "Echo estimates PA systolic pressure from the TR jet. (Slide 14)"),
          q("Which of these is on the echo measurement list?", "Aortic valve area and peak velocity", ["Coronary calcium score", "Fractional flow reserve", "QT interval"], "Echo measures aortic valve area and peak velocity. (Slide 14)")],
        [q("A young patient with a cryptogenic stroke has a normal TTE. You want to look for a PFO. Which echo add-on?", "Bubble study (agitated saline contrast)", ["M-mode", "Dobutamine stress", "MUGA"], "Bubble study looks for a PFO. (Slide 21)"),
          q("A surgeon planning mitral valve repair wants detailed spatial views of the valve. Which echo mode helps most?", "3-D echo", ["M-mode", "Subcostal IVC view", "Plain 2-D only"], "3-D echo gives detailed spatial views for valve repair. (Slide 13)")])
    ]),

    S("11-tee", "11. TEE: when to order it instead of TTE", "Echo objectives 4 and 5 (slides 15, 16, 20): what TEE is, its indications, TTE vs TEE, and the valve TEE sees best.", [
      C("TEE indications and TEE vs TTE",
        "<p><strong>Transesophageal echo (TEE)</strong>: the ultrasound probe is passed down the <strong>esophagus</strong>, right behind the heart, with the patient lying on their side.</p>" +
        tbl(["TEE indications (slide 16)"], [
          ["Suspected <strong>acute aortic pathology</strong> (dissection, transection, intramural hematoma)"],
          ["Suspected <strong>prosthetic valve dysfunction</strong> (thrombus, pannus, vegetation, regurgitation)"],
          ["Suspected <strong>complications of endocarditis</strong> (fistula, abscess)"],
          ["<strong>Left atrial / LAA thrombus</strong> in AF or flutter before anticoagulation decisions, <strong>cardioversion</strong> or ablation"],
          ["Diagnosing <strong>IE with moderate or high pretest likelihood</strong> (prosthetic valves, certain pathogens)"],
          ["<strong>Cardiac source of embolus</strong>"],
          ["Follow-up of a prior TEE when a change would alter therapy (vegetation resolving after antibiotics)"],
          ["When <strong>TTE is nondiagnostic</strong>"],
          ["Guiding noncoronary percutaneous procedures (closure devices, valvuloplasty, percutaneous valves)"]]) +
        tbl(["TEE", "TTE"], [
          ["<strong>Superior view of posterior structures</strong>: <strong>best view of the mitral valve</strong>", "<strong>Quick</strong>"],
          ["<strong>Minimally invasive</strong>", "<strong>Non-invasive</strong>"],
          ["Requires a <strong>skilled physician</strong>", "Performed by an <strong>echo tech</strong>"]]) +
        hy("TTE is the <strong>initial test of choice</strong> for most patients. TEE goes <strong>first</strong> in certain <strong>life-threatening</strong> situations (such as dissection) or when TTE is likely to be nondiagnostic. The esophagus sits right behind the <strong>left atrium and mitral valve</strong>, so TEE sees them best."),
        ["ct-tee-what", "ct-tee-indications", "ct-tee-vs-tte"],
        [q("Which valve is best visualized by TEE?", "Mitral valve", ["Pulmonic valve", "Tricuspid valve", "Aortic valve only on TTE"], "Slide 20: superior visualization of posterior structures, best view of the mitral valve."),
          q("Why does TEE see posterior structures better?", "The probe sits in the esophagus right behind the heart", ["It uses radiation", "It uses higher contrast doses", "It is done during exercise"], "The esophagus sits right behind the heart, so posterior structures are close. (Slides 15 and 20)"),
          q("What is the initial echo test of choice for most patients?", "TTE", ["TEE", "3-D TEE", "MUGA"], "Start with TTE; it's noninvasive. (Slide 20)"),
          q("Who performs a TTE vs a TEE?", "TTE: echo tech. TEE: skilled physician.", ["Both: echo tech", "TTE: physician. TEE: nurse.", "Both: radiologist only"], "An echo tech does TTE; a physician does TEE. (Slide 20)"),
          q("Which is a TEE indication?", "Left atrial appendage thrombus check before cardioversion in AF", ["Routine screening of a healthy adult", "Measuring coronary calcium", "First test for a 2/6 murmur"], "TEE sees the LA appendage, where AF clots form. (Slide 16)"),
          q("TEE is preferred to diagnose IE when:", "Pretest likelihood is moderate or high, such as prosthetic valves", ["The patient has no fever", "The TTE shows a normal valve and low suspicion", "Never; TTE is always enough"], "TEE is much more sensitive for endocarditis on prosthetic valves. (Slide 16)"),
          q("Which aortic problem is a TEE indication?", "Suspected dissection, transection or intramural hematoma", ["Aortic sclerosis", "Mild AR", "Calcified aortic knob on CXR"], "TEE images the thoracic aorta for dissection. (Slide 16)"),
          q("TEE is described as:", "Minimally invasive", ["Non-invasive", "Major surgery", "Radiation-based"], "TEE is minimally invasive. (Slide 20)"),
          q("Which endocarditis complications are TEE indications?", "Fistula or abscess", ["Splinter hemorrhages", "Roth spots", "Fever"], "TEE finds abscesses and fistulas that TTE misses. (Slide 16)")],
        [q("A patient with AF for 3 days, not anticoagulated, needs cardioversion now. Which test checks for LA appendage thrombus first?", "TEE", ["TTE", "MUGA", "Coronary CT angiogram"], "AF over 48 hours without anticoagulation needs TEE to rule out LAA clot first. (Slide 16)"),
          q("A patient with a mechanical mitral valve has fever and positive blood cultures. Which echo?", "TEE", ["TTE only", "Bubble study only", "No echo needed"], "Prosthetic valve, moderate-high IE likelihood, suspected prosthetic dysfunction."),
          q("A stable outpatient with a new murmur needs a first echo. Which one?", "TTE", ["TEE", "Intracardiac echo", "MUGA"], "TTE is the initial test of choice."),
          q("A patient with a stroke is suspected of a cardiac embolic source and the TTE was nondiagnostic. Next?", "TEE", ["Repeat TTE in a year", "Calcium score", "Holter monitor only"], "TEE is better for finding a cardiac embolic source. (Slide 16)")])
    ]),

    S("12-tee-safety", "12. TEE contraindications and complications", "Echo objectives 6 and 7 (slides 17 to 19): the absolute and relative contraindications to TEE and its major and minor complications.", [
      C("TEE contraindications and complications",
        tbl(["Absolute contraindication", "Relative contraindications"], [
          ["<strong>Previous esophagectomy or esophagogastrectomy</strong>", "Recent active esophageal tear or hemorrhage"],
          ["", "<strong>Esophageal stricture</strong>"],
          ["", "Coagulopathy; <strong>thrombocytopenia</strong>"],
          ["", "<strong>Zenker's diverticulum</strong>"],
          ["", "Altered mental status"],
          ["", "Severe cervical spine arthritis (less range of motion, more complications)"]]) +
        tbl(["Major complications", "Minor complications"], [
          ["<strong>Esophageal perforation</strong>", "Transient bronchospasm"],
          ["<strong>GI bleeding</strong> (higher risk with platelets under <strong>50k</strong>)", "Transient hypoxia"],
          ["Pharyngeal hematoma", "NSVT, AF"],
          ["<strong>Methemoglobinemia</strong>: rare but life-threatening, from topical <strong>benzocaine</strong> used to numb the throat", "Hemoptysis, vomiting"]]) +
        hy("Only ONE absolute contraindication: <strong>no esophagus to go down</strong> (prior esophagectomy). Everything else is relative. Benzocaine spray → <strong>methemoglobinemia</strong> (standard teaching: cyanosis and low pulse-ox that does not improve with oxygen, chocolate-brown blood)."),
        ["ct-tee-ci", "ct-tee-complications"],
        [q("What is the absolute contraindication to TEE?", "Previous esophagectomy or esophagogastrectomy", ["Esophageal stricture", "Thrombocytopenia", "Altered mental status"], "Without an esophagus there is no path for the probe. (Slide 17)"),
          q("Zenker's diverticulum is what kind of contraindication to TEE?", "Relative", ["Absolute", "Not a contraindication", "Indication"], "Zenker's is a relative contraindication: perforation risk. (Slide 18)"),
          q("Why is severe cervical spine arthritis a relative contraindication to TEE?", "Reduced range of motion increases the risk of complications", ["It causes methemoglobinemia", "It blocks the ultrasound beam", "It causes AF"], "Limited neck movement makes probe insertion riskier. (Slide 18)"),
          q("Which TEE complication comes from topical benzocaine?", "Methemoglobinemia", ["Esophageal perforation", "Pharyngeal hematoma", "Contrast nephropathy"], "Benzocaine spray can cause methemoglobinemia. (Slide 19)"),
          q("GI bleeding risk with TEE is higher when the platelet count is below:", "50,000", ["150,000", "500,000", "10 million"], "Platelets under 50,000 raise bleeding risk. (Slide 19)"),
          q("Which is a major TEE complication?", "Esophageal perforation", ["Transient hypoxia", "Vomiting", "Transient bronchospasm"], "Esophageal perforation is the major complication. (Slide 19)"),
          q("Which is a MINOR TEE complication?", "Transient bronchospasm", ["Esophageal perforation", "Methemoglobinemia", "Pharyngeal hematoma"], "Transient bronchospasm is minor. (Slide 19)"),
          q("Which of these is a relative contraindication to TEE?", "Esophageal stricture", ["Prior CABG", "Mitral valve prolapse", "Atrial fibrillation"], "An esophageal stricture is relative: the probe may tear it. (Slide 18)"),
          q("Which arrhythmias are listed as minor TEE complications?", "NSVT and AF", ["VF and asystole", "Complete heart block", "Torsades"], "NSVT and AF are minor complications. (Slide 19)")],
        [q("A patient who had an esophagectomy for cancer needs evaluation for endocarditis. Can you do a TEE?", "No: prior esophagectomy is an absolute contraindication", ["Yes, it is only relative", "Yes, with extra sedation", "Yes, if platelets are normal"], "Prior esophagectomy is an absolute contraindication. (Slide 17)"),
          q("Right after TEE with benzocaine spray, a patient's pulse-ox reads 85% and does not improve on oxygen. Most likely complication?", "Methemoglobinemia", ["Esophageal perforation", "Transient bronchospasm", "Air embolism"], "Slide 19; the oxygen-resistant low saturation is standard teaching."),
          q("A patient with platelets of 35,000 needs a TEE. Which complication risk is increased?", "GI bleeding", ["Methemoglobinemia", "Contrast allergy", "Radiation injury"], "Low platelets raise GI bleeding risk. (Slide 19)"),
          q("After a TEE a patient has severe neck and chest pain, fever and subcutaneous air. Concern?", "Esophageal perforation", ["Transient hypoxia", "Methemoglobinemia", "Normal post-procedure soreness"], "Pain, fever and subcutaneous air after TEE = perforation. (Slide 19)")])
    ]),

    S("13-muga", "13. MUGA scan", "Echo objective 8 (slides 22 to 23): radionuclide ventriculography, how it works, its strengths and its radiation.", [
      C("MUGA (multi-gated acquisition) scan",
        ul(["<strong>Radionuclide ventriculography</strong>: a <strong>volumetric</strong> measurement.",
          "The patient's <strong>red blood cell pool is labeled</strong> with a radioactive tracer; a <strong>gamma camera</strong> over the anterior chest counts the radioactivity.",
          "<strong>Preferred technique to measure LVEF</strong> with a high degree of accuracy.",
          "Very <strong>accurate and reproducible</strong>.",
          "<strong>Body habitus does not limit it</strong> (unlike echo).",
          "Non-invasive.",
          "Radiation: <strong>620 mrem</strong> (compare CXR 10, CT head 200, CT chest 700).",
          "<strong>Contraindicated in pregnancy or lactation.</strong>"]) +
        hy("Think <strong>MUGA = a very accurate, repeatable EF number</strong> (standard teaching: used to follow EF during cardiotoxic chemotherapy such as anthracyclines or trastuzumab)."),
        ["ct-muga-how", "ct-muga-features"],
        [q("MUGA stands for:", "Multi-gated acquisition scan", ["Myocardial ultrasound gated angiography", "Multiple uptake glucose assessment", "Mitral ultrasound gradient analysis"], "MUGA = multi-gated acquisition scan. (Slide 22)"),
          q("What does a MUGA scan label with a radioactive tracer?", "The red blood cell pool", ["The coronary plaque", "The myocardial glucose", "The valve leaflets"], "MUGA labels the red blood cells. (Slide 22)"),
          q("What is the MUGA scan the preferred technique for?", "Accurate measurement of LV ejection fraction", ["Coronary calcium scoring", "Finding PFO", "Diagnosing aortic dissection"], "MUGA gives a very accurate EF. (Slide 23)"),
          q("Which patient factor does NOT limit MUGA accuracy?", "Body habitus", ["Pregnancy", "Breastfeeding", "None of these matter"], "Body habitus doesn't limit MUGA; arrhythmias do. (Slide 23)"),
          q("MUGA radiation exposure is about:", "620 mrem", ["10 mrem", "2 mrem", "7000 mrem"], "Slide 23 (CXR 10, CT chest 700, CT head 200)."),
          q("MUGA is contraindicated in:", "Pregnancy or lactation", ["Obesity", "COPD", "AF only"], "Radioactive tracer is avoided in pregnancy and lactation. (Slide 23)"),
          q("Which camera reads a MUGA scan?", "Gamma camera over the anterior chest", ["Ultrasound probe", "MRI coil", "Fluoroscopy C-arm"], "A gamma camera over the chest reads MUGA. (Slide 22)"),
          q("MUGA is described as:", "Very accurate and reproducible", ["Highly operator dependent", "Invasive", "Radiation-free"], "MUGA is very accurate and reproducible for EF. (Slide 23)")],
        [q("A patient on cardiotoxic chemotherapy needs very accurate, repeatable EF measurements; echo windows are poor due to obesity. Best test?", "MUGA scan", ["TEE", "Exercise EKG", "Calcium score"], "Accurate, reproducible EF not limited by body habitus."),
          q("A breastfeeding mother needs an EF measurement. Which test should be avoided?", "MUGA", ["TTE", "Cardiac exam", "EKG"], "MUGA uses radioactive tracer, so avoid it while breastfeeding. (Slide 23)")])
    ]),

    S("14-monitoring", "14. Telemetry, Holter, event monitor and implantable monitor", "Echo objectives 9 and 10 (slides 24 to 28): case study 2, when to order telemetry, Holter and 30-day event monitors, and the implantable monitoring device.", [
      C("Rhythm monitoring options",
        "<p><strong>Case study 2:</strong> a 66-year-old woman with a daily \"thumping heartbeat\", shortness of breath and fatigue. The question is which rhythm monitor to order.</p>" +
        tbl(["Monitor", "Key facts", "When"], [
          ["<strong>Telemetry</strong>", "Continuous monitoring of electrical activity, <strong>2 or 3 leads</strong> (inpatient)", "Suspected arrhythmia; <strong>unexplained syncope</strong>; evaluating a therapy"],
          ["<strong>Holter</strong>", "<strong>24 or 48 hours</strong> continuous ECG; placed in the office; patient keeps a <strong>symptom diary</strong>; returns it after", "Symptoms that happen <strong>daily</strong>"],
          ["<strong>30-day event monitor</strong>", "Monitors rhythm <strong>2 to 4 weeks</strong>; mailed home and returned; can be <strong>removed to shower</strong>; uncomfortable, compliance problems", "<strong>High suspicion</strong> for arrhythmia; <strong>AF burden</strong>"],
          ["<strong>Implantable monitoring device</strong> (loop recorder)", "Monitors up to <strong>3 years</strong>; minimally invasive; downloads <strong>each night</strong>; must be <strong>explanted after 3 years</strong>; hard to get <strong>insurance approval</strong>", "<strong>Unexplained syncope</strong> and <strong>cryptogenic stroke</strong>"]]) +
        hy("Match the monitor to <strong>how often</strong> symptoms happen: daily → Holter; weekly or less → event monitor; rare (syncope) or hunting hidden AF after a cryptogenic stroke → implantable loop recorder; inpatient → telemetry."),
        ["ct-case-2", "ct-telemetry", "ct-holter-event", "ct-ilr"],
        [q("How many leads does cardiac telemetry show?", "Two or three", ["Twelve", "One only", "Fifteen"], "Telemetry shows 2 or 3 leads. (Slide 25)"),
          q("Which is an indication for telemetry?", "Unexplained syncope", ["Stable hypertension", "Routine annual exam", "Ankle sprain"], "Slide 25: suspected arrhythmia, unexplained syncope, evaluation of therapeutic intervention."),
          q("How long does a Holter monitor record?", "24 or 48 hours", ["30 days", "3 years", "6 months"], "A Holter records 24 or 48 hours. (Slide 26)"),
          q("What does a Holter patient keep while wearing it?", "A symptom diary", ["A food log", "A blood pressure cuff", "A peak flow meter"], "A symptom diary links symptoms to rhythm. (Slide 26)"),
          q("How long does an event monitor record?", "2 to 4 weeks", ["24 hours", "3 years", "1 hour"], "An event monitor records 2 to 4 weeks. (Slide 27)"),
          q("Which monitor may the patient remove to shower?", "30-day event monitor", ["Implantable loop recorder", "Inpatient telemetry", "None"], "The 30-day event monitor can be removed for showers. (Slide 27)"),
          q("Which monitor is used to detect AF burden?", "30-day event monitor", ["Bubble study", "MUGA", "Calcium score"], "A 30-day monitor captures AF burden. (Slide 27)"),
          q("What are the two indications for an implantable monitoring device?", "Unexplained syncope and cryptogenic stroke", ["Palpitations and anxiety", "Hypertension and diabetes", "Stable angina and claudication"], "Implantable monitors are for unexplained syncope and cryptogenic stroke. (Slide 28)"),
          q("How long can an implantable monitor record?", "Up to 3 years", ["48 hours", "30 days", "10 years"], "Implantable monitors record up to 3 years. (Slide 28)"),
          q("How often does an implantable monitor download the rhythm?", "Each night", ["Once a year", "Only when explanted", "Every 3 years"], "They transmit nightly. (Slide 28)"),
          q("A drawback of the implantable monitor is:", "Insurance approval is difficult and it must be explanted after 3 years", ["It needs open-heart surgery", "It records only 24 hours", "It uses radiation daily"], "Insurance approval is hard, and it must come out after 3 years. (Slide 28)"),
          q("A drawback of the 30-day event monitor is:", "Discomfort and poor patient compliance", ["Radiation", "Needs general anesthesia", "Requires explant"], "Discomfort leads to poor compliance. (Slide 27)")],
        [q("A 66-year-old has a daily thumping heartbeat with shortness of breath and fatigue. Which outpatient monitor fits daily symptoms?", "Holter monitor (24 to 48 hours)", ["Implantable loop recorder", "MUGA", "TEE"], "Case study 2: symptoms occur daily, so a short Holter will catch them."),
          q("A patient has palpitations once or twice a month. Which monitor?", "30-day event monitor", ["24-hour Holter", "Inpatient telemetry", "Calcium score"], "Infrequent symptoms need the longer event monitor."),
          q("A 54-year-old had an embolic-looking stroke with no cause found after full workup. You want to look for hidden AF for a long time. Which monitor?", "Implantable monitoring device", ["24-hour Holter", "Telemetry for 1 day", "Echo bubble study"], "Cryptogenic stroke is an indication."),
          q("A patient admitted after an unexplained syncopal episode should be placed on:", "Telemetry", ["A 30-day event monitor in the hospital", "Nothing", "A MUGA scan"], "Unexplained syncope gets telemetry to catch an arrhythmia. (Slide 25)"),
          q("A patient has had three unexplained faints over two years, and Holter and event monitors were normal. Best next monitor?", "Implantable loop recorder", ["Another 24-hour Holter", "Exercise EKG", "TEE"], "Rare syncope needs up to 3 years of monitoring.")])
    ]),

    /* ================= CORONARY ANGIOGRAM ================= */

    S("15-angio-indications", "15. Coronary angiogram: gold standard, indications and contraindications", "Angiogram objectives 1 to 4 (slides 3 to 6, 8 to 13): what the angiogram is, why it is the gold standard, its indications, and its relative contraindications.", [
      C("Cardiac catheterization basics and indications",
        "<p><strong>Cardiac catheterization (coronary angiogram) is the gold standard</strong> for diagnosing coronary atherosclerosis. A catheter goes from an artery (groin or wrist) up the aorta into the coronary ostia; contrast is injected and filmed with an X-ray (C-arm), showing blockages as narrowed \"gaps\".</p>" +
        tbl(["Indications", "Initial test (go straight to cath)"], [
          ["Angina that significantly interferes with lifestyle <strong>despite maximal medical therapy</strong>", "After <strong>sudden cardiac arrest</strong>"],
          ["<strong>High-risk criteria on noninvasive testing</strong>", "<strong>Life-threatening ventricular arrhythmia</strong>"],
          ["Atypical symptoms with <strong>equivocal</strong> stress results when a diagnosis is needed", "New-onset <strong>symptomatic heart failure</strong>"],
          ["New-onset <strong>cardiomyopathy</strong>", "<strong>ACS</strong> (STEMI, NSTEMI, unstable angina)"]]),
        ["ct-angio-gold", "ct-angio-indications"],
        [q("What is the gold standard for diagnosing coronary atherosclerosis?", "Cardiac catheterization (coronary angiogram)", ["Exercise EKG", "Coronary calcium score", "Stress echo"], "Coronary angiography is the gold standard for CAD. (Slide 3)"),
          q("Which is an indication for coronary angiography?", "High-risk criteria on noninvasive testing", ["Low pre-test probability with a normal EKG", "Asymptomatic screening", "Calcium score of 0"], "High-risk noninvasive results go to angiography. (Slide 4)"),
          q("Angina is an indication for angiography when it:", "Significantly interferes with lifestyle despite maximal tolerable medical therapy", ["Has occurred once", "Is controlled on one drug", "Is atypical with a normal stress test"], "Lifestyle-limiting angina despite maximal therapy needs angiography. (Slide 4)"),
          q("In which situation is the angiogram the INITIAL test?", "After sudden cardiac arrest", ["Stable angina well controlled on medicine", "Asymptomatic patient with high LDL", "Palpitations with a normal EKG"], "After sudden cardiac arrest, angiography comes first. (Slide 5)"),
          q("Which ACS types go directly to angiography as the initial test?", "STEMI, NSTEMI and unstable angina", ["STEMI only", "None", "Only unstable angina"], "ACS (STEMI, NSTEMI, UA) goes straight to angiography. (Slide 5)"),
          q("New-onset cardiomyopathy is:", "An indication for coronary angiogram", ["A contraindication", "Unrelated", "An indication for TEE only"], "New cardiomyopathy needs angiography to rule out ischemic cause. (Slide 4)"),
          q("Atypical symptoms with which stress test result are an angiogram indication?", "Equivocal findings when a diagnosis must be established", ["A clearly normal low-risk test", "No stress test needed", "Duke score of +10"], "Equivocal results with atypical symptoms can need angiography to settle it. (Slide 4)")],
        [q("A patient resuscitated from VF arrest in the field is now stable. What is the initial cardiac test?", "Coronary angiogram", ["Exercise EKG", "Calcium score", "Holter"], "After cardiac arrest, angiography is the initial test. (Slide 5)"),
          q("A patient on aspirin, a beta blocker, a long-acting nitrate and a CCB still has angina that stops her from working. Next step?", "Coronary angiogram", ["Another stress test in 5 years", "Calcium score", "Reassurance"], "Lifestyle-limiting angina despite four drugs = angiography. (Slide 4)"),
          q("A stress test shows 3 mm ST depression at 3 minutes with a fall in SBP. Next step?", "Coronary angiogram (high-risk noninvasive test)", ["Repeat stress test next year", "Calcium score", "Holter"], "3 mm ST depression early with falling BP is high risk, so cath. (Slide 4)")]),
      C("Relative contraindications",
        "<p>All angiogram contraindications are <strong>relative</strong> (slide 6):</p>" +
        tbl(["Group", "Examples"], [
          ["Kidney and contrast", "<strong>Acute renal failure</strong>; documented <strong>anaphylaxis to contrast</strong>"],
          ["Bleeding", "<strong>Active GI bleeding</strong>; <strong>severe coagulopathy</strong>; severe anemia"],
          ["Infection", "Unexplained fever; untreated active infection; <strong>aortic valve endocarditis</strong>"],
          ["Neuro", "<strong>Acute stroke</strong>"],
          ["Hemodynamic and metabolic", "Severe uncontrolled HTN; severe symptomatic electrolyte imbalance; <strong>digitalis intoxication</strong>; <strong>decompensated HF or acute pulmonary edema</strong>"],
          ["Patient factors", "Severe systemic or life-shortening illness; <strong>refuses definitive therapy</strong> such as PCI"],
          ["Access", "<strong>Severe PAD</strong> limiting vascular access"]]) +
        mn("Think of what the cath does: dye (kidneys, allergy), a hole in an artery (bleeding, PAD), a catheter across the aortic valve (aortic endocarditis), and blood thinners (stroke, GI bleed). Plus: why do it if the patient refuses PCI?"),
        ["ct-angio-ci"],
        [q("Contraindications to coronary angiography are:", "All relative", ["All absolute", "Only pregnancy", "None exist"], "All contraindications to angiography are relative."),
          q("Which kidney problem is a relative contraindication to angiography?", "Acute renal failure", ["A single kidney stone history", "Normal creatinine", "Renal cyst"], "Contrast worsens acute renal failure. (Slide 6)"),
          q("Which valve infection is a relative contraindication to angiography?", "Aortic valve endocarditis", ["Tricuspid valve endocarditis", "Mitral valve prolapse", "Pulmonic stenosis"], "Crossing an infected aortic valve risks embolizing vegetation. (Slide 6)"),
          q("Why is refusal of PCI a relative contraindication to angiography?", "If the patient will not accept definitive therapy, the diagnostic cath may not change management", ["PCI causes contrast allergy", "Refusal causes bleeding", "It is a legal absolute contraindication"], "If they won't accept PCI or CABG, the cath may not change management. (Slide 6)"),
          q("Which drug toxicity is listed as a relative contraindication?", "Digitalis intoxication", ["Statin myopathy", "Metformin lactic acidosis", "Aspirin allergy"], "Digoxin toxicity raises arrhythmia risk during cath. (Slide 6)"),
          q("Which peripheral problem is a relative contraindication?", "Severe PAD limiting vascular access", ["Varicose veins", "Raynaud phenomenon", "Mild claudication with normal pulses"], "Severe PAD can block vascular access. (Slide 6)"),
          q("Which of these is a relative contraindication to angiography?", "Decompensated heart failure or acute pulmonary edema", ["Stable angina", "High LDL", "Hypertension controlled on medication"], "Patients in pulmonary edema can't lie flat or handle contrast load. (Slide 6)")],
        [q("A stable chest pain patient scheduled for elective cath is found to have melena and a hemoglobin drop. What should happen?", "Delay: active GI bleeding is a relative contraindication", ["Proceed and give extra heparin", "Proceed without changes", "Switch to TEE"], "Active GI bleeding is a relative contraindication, so delay. (Slide 6)"),
          q("A patient planned for elective angiography has new right-sided weakness that started this morning. What should happen?", "Delay: acute stroke is a relative contraindication", ["Proceed immediately", "Give tPA and cath together", "Switch to stress echo"], "Acute stroke is a relative contraindication, so delay. (Slide 6)"),
          q("An elective cath patient has a fever of 39°C with no source. Next step?", "Postpone and find the source: unexplained fever is a relative contraindication", ["Proceed", "Give contrast prophylaxis", "Give prednisone"], "Unexplained fever is a relative contraindication, so find the source first. (Slide 6)")])
    ]),

    S("16-angio-prep", "16. Medications held and contrast allergy prep", "Angiogram objectives 5 and 8 (slides 7 and 23): pre-op holds for ACE inhibitors, ARBs, diuretics, anticoagulation and metformin, NPO, and the contrast allergy premedication.", [
      C("Pre-op holds and contrast allergy prep",
        tbl(["Medication or step", "Rule"], [
          ["<strong>ACE inhibitor, ARB, diuretics</strong>", "May be held the <strong>morning of</strong> the procedure"],
          ["<strong>Anticoagulation</strong>", "Held before the procedure; <strong>INR must be under 1.5</strong>"],
          ["<strong>Metformin</strong>", "Held the <strong>day of and 48 hours after</strong> the procedure"],
          ["Food and drink", "<strong>NPO after midnight</strong>"],
          ["Other", "Patient is shaved and given a sedative"]]) +
        tbl(["Contrast dye allergy premedication"], [
          ["<strong>Prednisone 50 mg</strong> at <strong>13, 7 and 1 hour</strong> before the procedure"],
          ["<strong>Benadryl (diphenhydramine) 50 mg</strong> <strong>1 hour</strong> before"]]) +
        hy("Why these holds (standard teaching): ACEi, ARBs and diuretics plus contrast raise the risk of <strong>acute kidney injury</strong>; metformin plus contrast-induced kidney injury risks <strong>lactic acidosis</strong>; anticoagulation raises <strong>access-site bleeding</strong>.") +
        mn("Contrast allergy: <strong>\"13-7-1, then Benadryl at 1\"</strong>. Prednisone 50 mg at 13, 7 and 1 hour before, Benadryl 50 mg at 1 hour."),
        ["ct-holds", "ct-contrast-prep"],
        [q("Which drugs may be held the morning of a cardiac cath?", "ACE inhibitors, ARBs and diuretics", ["Aspirin and statins", "Beta blockers only", "Insulin and levothyroxine"], "ACEi, ARBs and diuretics may be held to protect the kidneys from contrast. (Slide 7)"),
          q("What INR must a patient have before cardiac catheterization?", "Under 1.5", ["Under 3.0", "Between 2 and 3", "Over 4"], "INR must be under 1.5 to limit bleeding. (Slide 7)"),
          q("How long is metformin held around a cardiac cath?", "The day of and 48 hours after", ["One week before", "Only the night before", "Not held"], "Metformin is held the day of and 48 hours after because of contrast AKI and lactic acidosis. (Slide 7)"),
          q("NPO instructions before cardiac cath:", "Nothing to eat or drink after midnight", ["Clear liquids up to the procedure", "No restrictions", "Fast for 48 hours"], "NPO after midnight for sedation. (Slide 7)"),
          q("What is the prednisone dose and timing for contrast dye allergy prep?", "50 mg at 13, 7 and 1 hour before", ["10 mg once the night before", "50 mg at 24 hours only", "100 mg 30 minutes before"], "Prednisone 50 mg at 13, 7 and 1 hour before. (Slide 23)"),
          q("What is the Benadryl dose and timing for contrast allergy prep?", "50 mg 1 hour before", ["25 mg 13 hours before", "50 mg at 13, 7 and 1 hour", "100 mg the night before"], "Benadryl 50 mg 1 hour before. (Slide 23)"),
          q("Why is metformin held after contrast (standard teaching)?", "If contrast injures the kidneys, metformin can build up and cause lactic acidosis", ["Metformin causes contrast allergy", "Metformin raises the INR", "Metformin blocks adenosine"], "Slide 7; reason is standard teaching.")],
        [q("A diabetic on metformin has a cath tomorrow at 9 AM. When can he restart metformin?", "48 hours after the procedure", ["The same evening", "Tomorrow morning before the cath", "In two weeks"], "Metformin restarts 48 hours after the procedure. (Slide 7)"),
          q("A patient on warfarin for AF has an INR of 2.4 the morning of an elective cath. What should happen?", "Delay: INR must be under 1.5", ["Proceed", "Give prednisone", "Double the heparin"], "INR 2.4 is too high; it must be under 1.5. (Slide 7)"),
          q("A patient had hives with prior contrast and needs a cath at 2 PM. When should prednisone be given?", "50 mg at 1 AM, 7 AM and 1 PM, plus Benadryl 50 mg at 1 PM", ["50 mg at 1 PM only", "Benadryl only at 2 PM", "No premedication is needed"], "13, 7 and 1 hour before 2 PM."),
          q("A patient on lisinopril and furosemide is scheduled for a morning cath. What may you tell him?", "These may be held the morning of the procedure", ["Double the doses that morning", "Stop them for a month", "Take them with extra water"], "ACEi and diuretics may be held the morning of. (Slide 7)")])
    ]),

    S("17-angio-access", "17. Access sites, sheath removal and post-op care", "Angiogram objectives 2 and 7 (slides 10 to 20): access sites with femoral landmarks, PCI and the 70% rule, sheath removal, post-op vitals and restrictions, and hemostasis devices.", [
      C("Access and the femoral danger zones",
        "<p><strong>Access options:</strong> femoral, radial, brachial, subclavian. The <strong>two most common</strong> are <strong>femoral</strong> and <strong>radial</strong>.</p>" +
        hy("Femoral access must be <strong>no more than 3 cm below the inguinal ligament</strong>.<br><strong>Too high</strong> → <strong>retroperitoneal bleed</strong>.<br><strong>Too low</strong> → <strong>pseudoaneurysm</strong>.") +
        mn("<strong>\"High = Hidden bleed, Low = Lump\"</strong>: a high stick bleeds into the retroperitoneum where you cannot see it; a low stick makes a pulsatile lump (pseudoaneurysm).") +
        "<p><strong>PCI (slide 14):</strong> a balloon expands a <strong>stent</strong> against the plaque. <strong>Stenoses under 70% are not flow-limiting</strong> and rarely need revascularization. Restenosis can grow back inside a stent.</p>",
        ["ct-access-sites", "ct-femoral-landmark", "ct-pci-70"],
        [q("What are the two most common access sites for coronary angiography?", "Femoral and radial", ["Brachial and subclavian", "Jugular and femoral vein", "Carotid and radial"], "Femoral and radial are the main access sites."),
          q("Femoral access must be no more than how far below the inguinal ligament?", "3 cm", ["10 cm", "1 mm", "6 inches"], "Femoral access should be within 3 cm below the inguinal ligament. (Slide 11)"),
          q("A femoral stick that is too HIGH risks:", "Retroperitoneal bleed", ["Pseudoaneurysm", "Radial artery occlusion", "Pneumothorax"], "Above the ligament can't be compressed, so it bleeds into the retroperitoneum. (Slide 11)"),
          q("A femoral stick that is too LOW risks:", "Pseudoaneurysm", ["Retroperitoneal bleed", "Air embolism", "Stroke"], "Too low hits smaller vessels and risks pseudoaneurysm. (Slide 11)"),
          q("Stenoses under what percent are generally not flow-limiting?", "70%", ["20%", "40%", "95%"], "Under 70% usually isn't flow-limiting. (Slide 14)"),
          q("Which access sites are listed besides femoral and radial?", "Brachial and subclavian", ["Jugular and saphenous", "Carotid and popliteal", "Ulnar and dorsalis pedis"], "Brachial and subclavian are other access sites. (Slide 10)")],
        [q("Hours after a femoral cath, a patient becomes hypotensive with flank and back pain but no groin hematoma. Where was the stick likely placed?", "Too high: retroperitoneal bleed", ["Too low: pseudoaneurysm", "Radial", "Perfectly placed"], "Flank pain and hypotension without hematoma = too-high stick with retroperitoneal bleed. (Slide 11)"),
          q("A day after a femoral cath, a patient has a pulsatile groin mass with a bruit. Where was the stick likely placed?", "Too low: pseudoaneurysm", ["Too high: retroperitoneal bleed", "Venous system", "Radial artery"], "A pulsatile mass with a bruit = too-low stick with pseudoaneurysm. (Slide 11)"),
          q("An angiogram shows a 50% stenosis in the RCA in a patient with no ischemia. Does it need a stent?", "Usually not: under 70% is not flow-limiting", ["Yes, always stent any stenosis", "Yes, plus CABG", "Only if the patient is over 80"], "Under 70% isn't flow-limiting, so it usually doesn't need a stent. (Slide 14)")]),
      C("Sheath removal, post-op care and closure",
        tbl(["Step", "Rule"], [
          ["Sheath stays in until", "Anticoagulants are below peak, usually <strong>4 hours after the last heparin</strong>"],
          ["While the sheath is in", "<strong>Hourly vitals</strong>, <strong>groin checks every 30 minutes</strong>"],
          ["Removal", "Pull the sheath while pressing on the femoral artery; hold pressure about <strong>20 minutes</strong> or until hemostasis"],
          ["After removal", "<strong>Bedrest 6 hours</strong>"],
          ["Post-op vitals", "<strong>q15 min × 1 h</strong>, then <strong>q30 min × 3 h</strong>, then <strong>q4h × 24 h</strong>"],
          ["Activity", "<strong>No lifting over 10 lb for 1 week</strong>; no strenuous exercise for 1 week"]]) +
        tbl(["Hemostasis option", "Note"], [
          ["Hand-held pressure", ""],
          ["<strong>Mechanical clamp</strong>", "Preferred when hemostasis will take longer: larger sheaths, heavily anticoagulated, a hematoma already present, <strong>DAPT</strong>"],
          ["<strong>Closure device</strong> (Mynx)", "May increase local vascular complications and <strong>local infection (endarteritis)</strong>; avoid if a hematoma formed during the procedure"],
          ["<strong>TR Band</strong>", "Radial (wrist) compression band"]]),
        ["ct-sheath", "ct-postop", "ct-hemostasis"],
        [q("When is the femoral sheath usually removed?", "About 4 hours after the last heparin dose", ["Immediately, before heparin wears off", "After 24 hours", "After 1 week"], "The sheath comes out about 4 hours after the last heparin. (Slide 16)"),
          q("How often are groin checks done while the sheath is in?", "Every 30 minutes", ["Every 4 hours", "Once a day", "Every 5 minutes"], "Groin checks every 30 minutes. (Slide 16)"),
          q("How long is pressure held after sheath removal?", "About 20 minutes or until hemostasis", ["2 minutes", "2 hours", "No pressure needed"], "Hold pressure about 20 minutes or until hemostasis. (Slide 16)"),
          q("How long is bedrest after sheath removal?", "6 hours", ["30 minutes", "24 hours", "3 days"], "6 hours of bedrest after sheath removal. (Slide 16)"),
          q("Post-cath vitals schedule:", "q15 min for 1 h, q30 min for 3 h, q4h for 24 h", ["q1h for 24 h", "q4h for 1 h only", "Once at discharge"], "Vitals q15 for 1 h, q30 for 3 h, then q4h for 24 h. (Slide 17)"),
          q("Lifting restriction after cardiac cath:", "Nothing over 10 lb for 1 week", ["Nothing over 50 lb for 1 day", "No restriction", "Bedrest for 1 month"], "No lifting over 10 lb for a week. (Slide 17)"),
          q("When is a mechanical clamp preferred for hemostasis?", "When longer hemostasis time is expected: large sheaths, heavy anticoagulation, hematoma, DAPT", ["Always for radial access", "Only in children", "Never"], "Clamps help when bleeding is expected: large sheaths, anticoagulation, DAPT."),
          q("Which hemostasis device raises the risk of local infection (endarteritis)?", "Closure device (Mynx)", ["Hand-held pressure", "TR Band", "Mechanical clamp"], "Closure devices leave material that can get infected."),
          q("When should a closure device be avoided?", "If a hematoma formed during the procedure", ["After radial access", "If the patient is on a statin", "If the INR is 1.0"], "A hematoma means a closure device can fail, so avoid it."),
          q("What is the TR Band used for?", "Radial artery compression after wrist access", ["Femoral closure", "Contrast allergy", "Telemetry"], "The TR Band compresses the radial artery after wrist access. (Slide 20)")],
        [q("Heparin was last given at 10:00 during a femoral PCI. When would the sheath usually come out?", "Around 14:00", ["At 10:15", "At 22:00 the next day", "Only after 1 week"], "About 4 hours after the last heparin."),
          q("A patient on DAPT with a large femoral sheath needs hemostasis. Which method is preferred?", "Mechanical clamp", ["Mynx closure device despite a hematoma", "No pressure", "TR Band on the groin"], "A mechanical clamp is preferred when hemostasis will take longer."),
          q("A warehouse worker asks when he can lift 40-lb boxes after his cath. Answer?", "No lifting over 10 lb for 1 week", ["Tomorrow", "Never again", "After 6 hours of bedrest"], "No lifting over 10 lb for a week. (Slide 17)")])
    ]),

    S("18-angio-complications", "18. Complications of coronary angiography", "Angiogram objective 6 (slide 22): death, MI, stroke, vascular, arrhythmia, allergic and kidney complications.", [
      C("Complications",
        tbl(["Complication", "Detail"], [
          ["Death", "<strong>0.1%</strong>"],
          ["MI", "<strong>0.1%</strong>"],
          ["Stroke", "<strong>0.4% during PCI</strong>"],
          ["Vascular, <strong>acute</strong>", "Acute thrombosis / distal embolization; dissection; hematoma or hemorrhage"],
          ["Vascular, <strong>late</strong>", "<strong>Pseudoaneurysm</strong>; <strong>AV fistula</strong>"],
          ["Vascular, other", "<strong>Retroperitoneal hemorrhage</strong>"],
          ["Arrhythmia", ""],
          ["Allergic reaction", "<strong>Iodine</strong> contrast agent"],
          ["<strong>Acute kidney injury</strong>", "Contrast"]]) +
        hy("Acute vascular: thrombosis or embolism, dissection, hematoma. <strong>Late</strong> vascular: <strong>pseudoaneurysm and AV fistula</strong>. Stroke is the most common of the three big events (0.4% during PCI vs 0.1% death and MI)."),
        ["ct-angio-complications"],
        [q("Death rate from coronary angiography on the slide:", "0.1%", ["1%", "5%", "10%"], "Death from angiography is rare, about 0.1%. (Slide 22)"),
          q("Stroke rate during PCI on the slide:", "0.4%", ["4%", "0.01%", "10%"], "Stroke during PCI is about 0.4%. (Slide 22)"),
          q("Which vascular complications are listed as LATE?", "Pseudoaneurysm and AV fistula", ["Dissection and hematoma", "Acute thrombosis and embolism", "Retroperitoneal bleed and dissection"], "Pseudoaneurysm and AV fistula are late complications. (Slide 22)"),
          q("Which vascular complications are ACUTE?", "Thrombosis/distal embolization, dissection, hematoma", ["Pseudoaneurysm and AV fistula", "Restenosis", "Endocarditis"], "Thrombosis, dissection and hematoma happen acutely. (Slide 22)"),
          q("What causes the allergic reaction during angiography?", "Iodine contrast agent", ["Heparin", "Lidocaine", "Latex only"], "The iodine contrast causes allergic reactions. (Slide 22)"),
          q("Which organ injury is listed as a complication of angiography?", "Acute kidney injury", ["Acute liver failure", "Pancreatitis", "Optic neuritis"], "Contrast can cause AKI. (Slide 22)"),
          q("MI rate from coronary angiography on the slide:", "0.1%", ["10%", "2%", "25%"], "MI from angiography is about 0.1%. (Slide 22)")],
        [q("A week after femoral cath, a patient has a continuous bruit over the groin and leg swelling. Which late complication?", "AV fistula", ["Acute dissection", "Retroperitoneal hemorrhage", "Contrast allergy"], "Slide 22: AV fistula is a late vascular complication."),
          q("During angiography a patient develops hives, wheezing and hypotension right after contrast. Cause?", "Allergic reaction to iodine contrast", ["Retroperitoneal bleed", "Pseudoaneurysm", "Restenosis"], "Hives, wheeze and hypotension right after contrast = contrast allergy. (Slide 22)"),
          q("Two days after angiography, creatinine rises from 1.1 to 2.0. Most likely?", "Contrast-related acute kidney injury", ["Pseudoaneurysm", "AV fistula", "Stroke"], "Creatinine rising 2 days after contrast = contrast AKI. (Slide 22)")])
    ]),

    S("19-right-heart-cath", "19. Right heart catheterization (Swan-Ganz)", "Angiogram deck slides 24 to 25: what a pulmonary artery catheter measures and when it is indicated.", [
      C("Right heart cath",
        "<p>A <strong>pulmonary artery (Swan-Ganz) catheter</strong> directly measures:</p>" +
        ul(["<strong>Central venous pressure</strong> (CVP)", "Right-sided intracardiac pressures", "<strong>Pulmonary arterial pressure</strong> (PAP)", "<strong>Pulmonary capillary occlusion (wedge) pressure</strong> (PCOP)", "<strong>Cardiac output</strong> (CO)", "<strong>Mixed venous oxygen saturation</strong> (SvO2)"]) +
        tbl(["Indications"], [
          ["Unexplained or unknown <strong>volume status in shock</strong>"],
          ["<strong>Severe cardiogenic shock</strong>"],
          ["Suspected or known <strong>pulmonary arterial hypertension</strong>"],
          ["Severe cardiopulmonary disease: congenital heart disease, left-to-right shunt, severe valve disease, pulmonary hypertension"]]) +
        hy("Left heart cath (angiogram) = <strong>coronaries</strong>. Right heart cath = <strong>pressures, cardiac output and SvO2</strong>."),
        ["ct-rhc-measures", "ct-rhc-indications"],
        [q("What is another name for the pulmonary artery catheter?", "Swan-Ganz catheter", ["Foley catheter", "Mynx catheter", "Judkins catheter"], "Pulmonary artery catheter = Swan-Ganz. (Slide 24)"),
          q("Which value does a right heart cath measure directly?", "Pulmonary capillary occlusion (wedge) pressure", ["Coronary stenosis percent", "Coronary calcium score", "LDL"], "A right heart cath measures wedge pressure directly. (Slide 24)"),
          q("SvO2 stands for:", "Mixed venous oxyhemoglobin saturation", ["Systemic venous oxygen volume", "Superior vena oxygen", "Stroke volume oxygen"], "SvO2 = mixed venous O2 saturation. (Slide 24)"),
          q("Which is an indication for right heart cath?", "Suspected or known pulmonary arterial hypertension", ["Stable angina", "Asymptomatic hyperlipidemia", "Palpitations"], "Right heart cath confirms pulmonary HTN. (Slide 25)"),
          q("In shock, right heart cath is indicated when:", "Volume status is unexplained or unknown", ["The cause is obvious hemorrhage", "BP is normal", "The patient is stable on room air"], "In shock with unclear volume status, a Swan-Ganz clarifies. (Slide 25)"),
          q("Which measurement is NOT obtained by a right heart cath?", "Coronary artery stenosis", ["CVP", "Cardiac output", "Pulmonary arterial pressure"], "Slide 24: the coronaries need a left heart cath (angiogram).")],
        [q("A patient in shock after an MI has unclear volume status and worsening oliguria. Which procedure measures CO, wedge pressure and SvO2?", "Right heart cath with a Swan-Ganz catheter", ["Coronary calcium score", "TEE only", "Holter"], "A Swan-Ganz measures CO, wedge pressure and SvO2. (Slides 24 and 25)"),
          q("Echo suggests pulmonary hypertension. Which procedure confirms it with direct pressures?", "Right heart catheterization", ["Exercise EKG", "Left heart cath only", "MUGA"], "Right heart cath measures PA pressures directly. (Slide 25)")])
    ]),

    S("20-ccta", "20. Coronary CT angiogram", "Angiogram objective 9 (slides 26 to 29): what CCTA is, who gets it, how it is done, its predictive values and its limitations.", [
      C("CCTA",
        "<p><strong>Coronary CT angiography</strong> = <strong>non-invasive</strong> coronary angiography (non-invasive visualization of the coronary arteries).</p>" +
        tbl(["Feature", "Detail"], [
          ["Indicated for", "Patients with <strong>intermediate risk</strong> and <strong>equivocal stress test</strong> results (or nondiagnostic stress test with strong suspicion); <strong>known or suspected congenital coronary anomalies</strong>"],
          ["How it is done", "<strong>Beta blocker</strong> to slow HR to <strong>60 to 70</strong>, <strong>nitroglycerin</strong> for vasodilation, and <strong>IV contrast</strong>"],
          ["<strong>Negative predictive value</strong>", "<strong>95 to 100%</strong> for significant CAD"],
          ["Positive predictive value", "<strong>91 to 93%</strong> for <strong>left main</strong> and <strong>bypass grafts</strong>; <strong>60 to 84%</strong> for other coronaries"],
          ["Limitations", "<strong>HR above 70</strong>; <strong>irregular rhythm</strong>; cannot hold breath <strong>5 seconds</strong>; <strong>severe calcification or prior stents</strong>"]]) +
        hy("CCTA is best at <strong>ruling OUT</strong> CAD (NPV 95 to 100%). A fast or irregular heart (AF) blurs the images; heavy calcium and stents cause artifact."),
        ["ct-ccta-what", "ct-ccta-indications", "ct-ccta-values", "ct-ccta-limits"],
        [q("CCTA is:", "Non-invasive coronary angiography", ["Invasive coronary angiography", "A nuclear perfusion test", "An ultrasound test"], "CCTA is noninvasive coronary angiography. (Slide 27)"),
          q("Which patients is CCTA indicated for?", "Intermediate risk with equivocal stress test results", ["Very high risk with a STEMI", "Asymptomatic low-risk screening", "Patients with severe calcification"], "CCTA settles equivocal stress tests in intermediate-risk patients. (Slide 27)"),
          q("What is the negative predictive value of CCTA for significant CAD?", "95 to 100%", ["50%", "60 to 84%", "10%"], "CCTA's NPV is 95-100%, so a normal study rules out CAD. (Slide 28)"),
          q("CCTA positive predictive value for left main disease and bypass grafts:", "91 to 93%", ["60 to 84%", "30%", "100%"], "CCTA PPV is 91-93% for left main and bypass grafts. (Slide 28)"),
          q("CCTA positive predictive value for other coronary arteries:", "60 to 84%", ["91 to 93%", "99%", "10 to 20%"], "PPV is lower (60-84%) in smaller coronary arteries. (Slide 28)"),
          q("Which drug is given before CCTA to slow the heart rate?", "Beta blocker", ["Atropine", "Dobutamine", "Adenosine"], "A beta blocker slows the HR for clearer images. (Slide 27)"),
          q("Target heart rate for CCTA:", "60 to 70 bpm", ["90 to 100 bpm", "Above 85% PMHR", "40 bpm"], "Target HR for CCTA is 60 to 70. (Slide 27)"),
          q("Why is nitroglycerin given before CCTA?", "To vasodilate the coronaries", ["To slow the heart", "To prevent contrast allergy", "To raise BP"], "Nitro dilates the coronaries for better images. (Slide 27)"),
          q("Which is a CCTA limitation?", "Irregular heart rhythm", ["Normal sinus rhythm at 60", "Breath hold of 5 seconds", "Thin body habitus"], "Irregular rhythms blur gated images. (Slide 29)"),
          q("How long must a patient hold their breath for CCTA?", "5 seconds", ["60 seconds", "2 minutes", "No breath hold"], "Patients hold their breath about 5 seconds. (Slide 29)"),
          q("CCTA is useful for which congenital problem?", "Known or suspected congenital coronary anomalies", ["ASD", "Coarctation only", "Tetralogy repair follow-up only"], "CCTA shows congenital coronary anomalies well. (Slide 27)")],
        [q("A patient with intermediate risk has an equivocal stress test. Which noninvasive test can best rule out significant CAD?", "Coronary CT angiogram", ["Repeat exercise EKG", "Calcium score", "Holter"], "CCTA's high NPV can rule out CAD after an equivocal stress test. (Slides 27 and 28)"),
          q("A patient in AF at 110 bpm is booked for CCTA. Problem?", "Fast, irregular rhythm limits CCTA image quality", ["None", "AF improves CCTA", "AF is an indication for CCTA"], "Fast, irregular AF ruins CCTA image quality. (Slide 29)"),
          q("A patient with multiple prior stents and heavy coronary calcium needs coronary imaging. Why is CCTA a poor choice?", "Severe calcification and stents limit CCTA", ["Stents block contrast allergy", "CCTA cannot see the left main", "Stents prevent breath holding"], "Calcium and stents create artifacts on CCTA. (Slide 29)"),
          q("A young athlete had exertional syncope and a suspected anomalous coronary artery origin. Which test images it non-invasively?", "Coronary CT angiogram", ["MUGA", "Holter", "Calcium score"], "CCTA shows anomalous coronary origins. (Slide 27)")])
    ]),

    S("21-calcium-score", "21. Coronary calcium scoring", "Angiogram objective 10 (slides 30 to 31): what the calcium score is for, who should get it, what it cannot show, and how to read the numbers.", [
      C("Coronary artery calcium (CAC) scoring",
        ul(["A <strong>screening tool for asymptomatic patients</strong>.",
          "Recommended for <strong>low-intermediate and intermediate</strong> risk patients.",
          "Predicts the extent of atherosclerosis (<strong>plaque burden</strong>).",
          "<strong>CANNOT measure the severity of a stenosis.</strong>",
          "<strong>Highly predictive of the ABSENCE</strong> of coronary atherosclerosis."]) +
        tbl(["Score", "Disease"], [["<strong>0</strong>", "No identifiable disease"], ["<strong>1 to 99</strong>", "Mild"], ["<strong>100 to 399</strong>", "Moderate"], ["<strong>400 or more</strong>", "Severe"]]) +
        hy("CAC vs CCTA: <strong>CAC</strong> = no contrast, asymptomatic screening, measures <strong>how much plaque</strong>. <strong>CCTA</strong> = contrast, symptomatic intermediate-risk patients, shows <strong>where and how narrow</strong>.") +
        note("The slide writes \"&gt;400\" for severe; 400 itself falls in neither band, so this card uses 400 or more."),
        ["ct-cac-use", "ct-cac-bands"],
        [q("Coronary calcium scoring is a screening tool for:", "Asymptomatic patients", ["Patients with an active STEMI", "Patients with unstable angina", "Patients after CABG only"], "Calcium scoring screens asymptomatic patients. (Slide 30)"),
          q("Which risk groups is CAC scoring recommended for?", "Low-intermediate and intermediate risk", ["Very high risk only", "Zero risk", "Patients with known 3-vessel disease"], "CAC helps most in low-intermediate and intermediate risk. (Slide 30)"),
          q("What can coronary calcium scoring NOT measure?", "Severity of a coronary stenosis", ["Plaque burden", "Absence of atherosclerosis", "Extent of atherosclerosis"], "CAC measures calcium, not how narrow an artery is. (Slide 30)"),
          q("A calcium score is highly predictive of:", "The absence of coronary atherosclerosis (when 0)", ["The exact stenosis percent", "Ejection fraction", "Valve area"], "A zero calcium score strongly predicts no atherosclerosis. (Slide 30)"),
          q("A calcium score of 0 means:", "No identifiable disease", ["Mild disease", "Moderate disease", "Severe disease"], "CAC 0 = no identifiable disease. (Slide 31)"),
          q("A calcium score of 1 to 99 means:", "Mild disease", ["No disease", "Moderate disease", "Severe disease"], "CAC 1-99 = mild. (Slide 31)"),
          q("A calcium score of 100 to 399 means:", "Moderate disease", ["Mild disease", "Severe disease", "No disease"], "CAC 100-399 = moderate. (Slide 31)"),
          q("A calcium score above 400 means:", "Severe disease", ["Moderate disease", "Mild disease", "No disease"], "CAC over 400 = severe. (Slide 31)")],
        [q("An asymptomatic 52-year-old at intermediate risk is undecided about a statin. Which test helps refine risk?", "Coronary calcium score", ["Invasive angiogram", "TEE", "Dobutamine stress echo"], "CAC refines risk for an undecided intermediate-risk patient. (Slide 30)"),
          q("A patient's calcium score is 250. Interpretation?", "Moderate disease", ["Mild disease", "Severe disease", "No disease"], "250 is in the 100-399 moderate range. (Slide 31)"),
          q("A patient's calcium score is 640. He asks if this means his artery is 90% blocked. Best answer?", "Severe plaque burden, but the calcium score cannot measure how narrow any artery is", ["Yes, it is exactly 90% blocked", "It means no disease", "It measures the EF"], "CAC shows plaque burden, not stenosis severity. (Slide 30)"),
          q("A patient's calcium score is 0. What does this suggest?", "No identifiable coronary atherosclerosis", ["Severe soft plaque", "Moderate disease", "Need for urgent angiogram"], "CAC 0 suggests no identifiable atherosclerosis. (Slides 30 and 31)"),
          q("A calcium score of 45. Interpretation?", "Mild disease", ["Moderate disease", "Severe disease", "No disease"], "45 is in the 1-99 mild range. (Slide 31)")])
    ])
  ];
})();
