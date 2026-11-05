/*
  Cardio Part 2 Diseases tool: Arrhythmias lecture.
  Source: source-material/cardio-part-2/text/arrhythmias.md. AF, flutter and
  MAT are taught in Arrhythmia Management and live in that file.
  Question ids are "<disease id>|<index>": only APPEND questions.
*/
(function () {
  "use strict";
  var H = window.DiseaseContent;
  var Tbl = H.Tbl, HY = H.HY, Mn = H.Mn, S = H.S, Q = H.Q, D = H.D, L = H.L;

  var unstable = Tbl(["Instability sign", "Detail"], [
    ["Hypotension", "SBP &lt; 90 with hypoperfusion"],
    ["Altered mentation", "Brain hypoperfusion"],
    ["Chest pain", "Coronary ischemia"],
    ["Dyspnea", "Pulmonary edema"],
    ["Very fast rate", "Ventricular rate &gt; 220–240 in adults"]
  ]) + HY("Unstable tachycardia → synchronized cardioversion. Unstable bradycardia → atropine, then pacing.");

  var blocks = Tbl(["Block", "EKG", "Level", "Treatment"], [
    ["1st degree", "PR &gt; 200 ms, every P conducts", "AV node", "None if asymptomatic"],
    ["Mobitz I (Wenckebach)", "PR lengthens until a QRS drops; grouped beating", "AV node", "Atropine if unstable; rarely progresses"],
    ["Mobitz II", "Constant PR, sudden dropped QRS; often wide QRS", "Infranodal", "<strong>Pace</strong>, permanent pacemaker"],
    ["3rd degree (complete)", "P waves and QRS unrelated; escape rhythm", "Any level", "Pacer pads now, <strong>permanent pacemaker</strong>"]
  ]);

  window.CARDIO2_DISEASES_ARRHYTHMIAS = L("arrhythmias", "Arrhythmias", [

    D("arr-sinus-arrhythmia", "Sinus Arrhythmia", "Normal sinus rhythm whose rate varies with breathing; benign.", [
      S("overview", "What it is", "<p>Variation of NSR with an irregular rate: <strong>P–P interval varies by ≥ 0.12 s</strong>.</p>" + Tbl(["Type", "Feature"], [
        ["<strong>Phasic (respiratory)</strong>", "Rate <strong>rises on inspiration</strong> (vagal tone falls) and <strong>falls on expiration</strong>"],
        ["Nonphasic", "Not tied to breathing"],
        ["Ventriculophasic", "In 3rd-degree block or after a PVC pause: P–P containing a QRS is shorter"]
      ])),
      S("treatment", "Significance", "<p>Common, benign, normal in <strong>young healthy people</strong>; also linked with obesity, DM, HTN. <strong>No further cardiac work-up needed.</strong></p>" + HY("Rate up on inspiration, down on expiration = respiratory sinus arrhythmia: reassure."))
    ], [
      Q("overview", "A healthy 19-year-old's heart rate speeds up when she breathes in and slows when she breathes out. What is this?", ["Respiratory (phasic) sinus arrhythmia", "Sick sinus syndrome", "Atrial fibrillation", "Mobitz I block"], 0, "Inspiration lowers vagal tone and raises the rate; expiration does the opposite."),
      Q("overview", "How much P-P variation defines sinus arrhythmia?", ["0.12 seconds or more", "0.04 seconds", "0.5 seconds", "Any variation at all"], 0, "Sinus arrhythmia: P-P varies by ≥ 0.12 s."),
      Q("treatment", "What work-up does respiratory sinus arrhythmia need?", ["None; it is benign", "Holter monitor", "Echo and stress test", "EP study"], 0, "Mostly benign and does not require further cardiac evaluation."),
      Q("overview", "Why does the sinus rate rise during inspiration?", ["Vagal tone is inhibited", "Sympathetic nerves are blocked", "The AV node speeds up", "Preload falls"], 0, "Inspiration inhibits vagal tone, increasing the sinus rate."),
      Q("overview", "In which setting is ventriculophasic sinus arrhythmia seen?", ["Third-degree AV block or after a PVC pause", "Exercise", "Pregnancy", "Hypothyroidism"], 0, "The P-P interval containing a QRS is shorter than one without."),
      Q("treatment", "Which patients most typically show respiratory sinus arrhythmia?", ["Young, healthy people", "Elderly patients after MI", "Patients on digoxin", "Patients with WPW"], 0, "It is a normal phenomenon in young, healthy individuals.")
    ]),

    D("arr-pacs", "Premature Atrial Contractions (PACs)", "Early beats from an ectopic atrial focus; usually benign but can trigger AF.", [
      S("overview", "What it is & triggers", "<p>An ectopic atrial focus fires before the next sinus beat.</p>" + Tbl(["EKG", ""], [
        ["P wave", "<strong>Early and differently shaped</strong>"],
        ["QRS", "Usually <strong>normal</strong> (ventricles depolarize normally)"],
        ["After it", "Short pause; if the AV node is refractory the PAC is <strong>nonconducted</strong> (no QRS)"]
      ]) + "<p>Triggers: <strong>caffeine, alcohol, nicotine, cocaine, amphetamines, stress, fatigue</strong>; digoxin (parasympathetic). More common with heart and lung disease.</p>"),
      S("presentation", "Presentation", "<p>Most have no symptoms; some feel <strong>palpitations, skipped beats</strong>, dizziness. Rarely compromise hemodynamics unless there is bradycardia. <strong>Frequent PACs can degenerate into AF or flutter.</strong></p>"),
      S("treatment", "Treatment", Tbl(["Situation", "Plan"], [
        ["Asymptomatic", "<strong>No treatment</strong>"],
        ["Symptomatic", "Reassurance, avoid triggers"],
        ["Persistent symptoms", "<strong>Metoprolol 25 mg BID</strong>; class IA or III antiarrhythmics"],
        ["PACs triggering AF", "Catheter ablation"]
      ]))
    ], [
      Q("overview", "An EKG shows an early, oddly shaped P wave followed by a normal QRS and a short pause. Diagnosis?", ["Premature atrial contraction", "PVC", "Mobitz II", "Junctional escape"], 0, "PAC: early abnormal P, usually normal QRS."),
      Q("overview", "An early P wave is not followed by any QRS. Why?", ["The AV node was still refractory (nonconducted PAC)", "Mobitz II block", "Complete heart block", "Sinus arrest"], 0, "A PAC arriving during the refractory period doesn't conduct."),
      Q("treatment", "A 30-year-old with occasional asymptomatic PACs. Treatment?", ["None", "Metoprolol", "Amiodarone", "Ablation"], 0, "Asymptomatic PACs need no treatment."),
      Q("treatment", "A patient with bothersome PACs despite cutting caffeine. First medication?", ["Metoprolol 25 mg BID", "Digoxin", "Warfarin", "Adenosine"], 0, "Metoprolol 25 mg BID for persistent symptoms."),
      Q("presentation", "What can frequent PACs progress to?", ["Atrial fibrillation or flutter", "VF", "Complete heart block", "Torsades"], 0, "Frequent PACs can degenerate into AF or flutter."),
      Q("overview", "Which is a common PAC trigger?", ["Caffeine", "Atropine", "Hypothermia", "Beta blockers"], 0, "Caffeine, alcohol, nicotine, stimulants and stress are triggers.")
    ]),

    D("arr-sinus-brady", "Sinus Bradycardia", "SA node rate below 60; normal in athletes, pathologic in the elderly or with heart disease.", [
      S("overview", "Causes", "<p>Sinus rhythm &lt; 60 bpm. Normal in athletes and during sleep.</p>" + Tbl(["Intrinsic", "Extrinsic"], [
        ["Ischemia, <strong>acute (inferior) MI</strong>, cardiomyopathy, transplant, pericarditis, trauma, rheumatic disease, <strong>Lyme</strong>, myocarditis, <strong>OSA</strong>", "<strong>Drugs</strong> (antiarrhythmics, antihypertensives, antipsychotics, opioids, sedatives), vasovagal, <strong>hypothyroidism</strong>, hypothermia, hypoxia, <strong>hyperkalemia</strong>, anorexia, <strong>↑ ICP</strong>"]
      ])),
      S("presentation", "Presentation & diagnosis", "<p>Often none. Slow-rate symptoms: lightheadedness, presyncope/syncope, fatigue, exercise intolerance, cognitive slowing; worse angina or HF. Confirm by <strong>EKG</strong> and <strong>exclude AV block</strong>.</p>"),
      S("treatment", "Treatment", Tbl(["Patient", "Plan"], [
        ["Asymptomatic", "None"],
        ["Stable with symptoms", "Find and fix the cause: drugs, hypothyroidism, MI"],
        ["Unstable", "<strong>Atropine 1 mg IV q3–5 min (max 3 mg)</strong> → transcutaneous/transvenous pacing → permanent pacemaker"]
      ]))
    ], [
      Q("treatment", "A hypotensive, confused patient has sinus bradycardia at 36. First drug?", ["Atropine 1 mg IV", "Adenosine 6 mg", "Metoprolol", "Amiodarone"], 0, "Unstable sinus brady: atropine 1 mg q3-5 min, max 3 mg, then pacing."),
      Q("overview", "A marathon runner has a resting HR of 48 and feels fine. Management?", ["None; it is a normal adaptation", "Pacemaker", "Atropine", "Stop running"], 0, "Sinus brady is adaptive in athletes."),
      Q("overview", "Which MI most often causes sinus bradycardia?", ["Inferior wall MI", "Anterior wall MI", "Lateral MI", "Posterior MI only"], 0, "Acute (inferior) MI is a classic intrinsic cause."),
      Q("overview", "Which metabolic problem causes sinus bradycardia?", ["Hypothyroidism", "Hyperthyroidism", "Hypokalemia", "Fever"], 0, "Extrinsic causes include hypothyroidism, hypothermia, hypoxia, hyperkalemia."),
      Q("presentation", "What must be excluded when you see a slow pulse?", ["AV block", "AF", "WPW", "Pericarditis"], 0, "It is vital to exclude other bradyarrhythmias such as AV block."),
      Q("treatment", "Atropine fails in unstable sinus bradycardia. Next step?", ["Transcutaneous or transvenous pacing", "Adenosine", "Diltiazem", "Observe"], 0, "If atropine fails, temporary pacing, then permanent pacemaker."),
      Q("overview", "Which sleep disorder is listed as a cause of sinus bradycardia?", ["Obstructive sleep apnea", "Narcolepsy", "Restless legs", "Insomnia"], 0, "OSA is an intrinsic cause on the slide.")
    ]),

    D("arr-sick-sinus", "Sick Sinus Syndrome (Sinus Node Dysfunction)", "Age-related SA node failure: bradycardia, pauses, sinus arrest, tachy-brady.", [
      S("overview", "What it is", "<p>SA node fails to make or transmit impulses. <strong>Most common cause: age-related degeneration of the SA node.</strong> Extrinsic: high vagal tone (carotid sinus hypersensitivity, vasovagal), hypothyroidism, hypothermia, hypocalcemia, hypoxia, hyperkalemia.</p><p>Rhythms: sinus brady, <strong>pauses &gt; 3 s / sinus arrest</strong>, <strong>tachy-brady syndrome</strong> (alternating). <strong>Sinus node dysfunction</strong> becomes <strong>sick sinus syndrome</strong> once it causes symptoms.</p>"),
      S("presentation", "Presentation & diagnosis", "<p>Fatigue, lightheadedness, palpitations, presyncope, <strong>syncope</strong> (~50% of SSS pacemaker patients), DOE, chest discomfort; <strong>chronotropic incompetence</strong> (HR can't rise with activity).</p><p>Key = <strong>symptom–rhythm correlation</strong>: history + EKG → exercise stress test → 2–4 weeks ambulatory monitor.</p>"),
      S("treatment", "Treatment", "<p>Treat reversible causes and <strong>hold offending drugs</strong>; otherwise <strong>permanent pacemaker</strong>. Pacer indications: symptomatic bradycardia, chronotropic incompetence, SND from needed drugs (e.g. AF rate control), symptomatic HR &lt; 40.</p>" + HY("Tachy-brady in an older patient = sick sinus; pacer (then rate-control drugs are safe)."))
    ], [
      Q("overview", "What is the most common cause of sick sinus syndrome?", ["Age-related degeneration of the SA node", "Lyme disease", "Digoxin", "Congenital"], 0, "Most common intrinsic cause is age-related SA node degeneration."),
      Q("overview", "An 80-year-old's monitor shows runs of AF alternating with long pauses. Name?", ["Tachy-brady syndrome (sick sinus)", "Mobitz II", "MAT", "WPW"], 0, "Alternating bradycardia and tachycardia is tachy-brady syndrome, a form of SND."),
      Q("presentation", "What is the key to diagnosing sick sinus syndrome?", ["Correlating symptoms with the rhythm", "Troponin", "Echo", "Tilt table"], 0, "Symptom-rhythm correlation is essential."),
      Q("presentation", "What is chronotropic incompetence?", ["Heart rate cannot rise appropriately with activity", "Heart rate is too fast at rest", "Dropped QRS complexes", "Short PR"], 0, "Inappropriate heart rate response to physiologic demand."),
      Q("treatment", "A patient with SSS needs a beta blocker for AF but becomes bradycardic. Solution?", ["Permanent pacemaker, then continue the drug", "Stop all rate control forever", "Atropine daily", "Digoxin"], 0, "SND due to necessary medications is a pacemaker indication."),
      Q("treatment", "What is the first step in a patient with new sinus node dysfunction?", ["Treat reversible causes and hold offending drugs", "Immediate pacemaker", "Ablation", "Amiodarone"], 0, "Initial management: reversible causes and offending meds; pacer if that fails."),
      Q("overview", "What separates sinus node dysfunction from sick sinus syndrome?", ["Symptoms such as syncope", "Age over 65", "QRS width", "Gender"], 0, "SND becomes SSS once the patient is symptomatic.")
    ]),

    D("arr-first-degree", "First-Degree AV Block", "PR over 200 ms with every P conducted; usually benign.", [
      S("overview", "What it is & causes", "<p>Delayed AV conduction: <strong>PR &gt; 200 ms</strong>, every P followed by a QRS; usually at the AV node. Common in <strong>athletes</strong> (vagal tone).</p><p>Causes: age-related degeneration, myocarditis, <strong>inferior MI</strong>, <strong>digoxin, BB, CCB</strong>, <strong>Lyme</strong>, DCM, <strong>sarcoidosis</strong>.</p>" + blocks),
      S("presentation", "Presentation", "<p>Rarely symptomatic. Very long PR → <strong>pseudo-pacemaker syndrome</strong> (atria contract right after the ventricles): malaise, dyspnea, orthopnea, cough, dizziness, chest discomfort, throat fullness.</p>"),
      S("treatment", "Evaluation & treatment", "<p>Diagnosed on EKG; ask about heart disease, fitness, <strong>new meds</strong>, recent procedures. <strong>No treatment</strong> if asymptomatic. <strong>During ACS</strong> it signals higher risk of progressing to complete block.</p>")
    ], [
      Q("overview", "What defines first-degree AV block?", ["PR longer than 200 ms with every P conducted", "Dropped QRS after progressive PR lengthening", "PR under 120 ms", "No relation between P and QRS"], 0, "First-degree block: PR > 200 ms."),
      Q("treatment", "An asymptomatic 25-year-old cyclist has a PR of 220 ms. Treatment?", ["None", "Pacemaker", "Atropine", "Stop cycling"], 0, "Asymptomatic first-degree block needs no treatment."),
      Q("presentation", "A patient with a very long PR has dyspnea, cough and throat fullness. Name?", ["Pseudo-pacemaker syndrome", "Pacemaker syndrome", "Brugada", "Tamponade"], 0, "Marked first-degree block can cause pseudo-pacemaker syndrome."),
      Q("treatment", "Why is new first-degree AV block concerning during an ACS?", ["Higher risk of progressing to complete heart block", "It means VF is imminent", "It proves an anterior MI", "It is a drug allergy"], 0, "In ACS it indicates higher risk of progression."),
      Q("overview", "Which infection causes AV block?", ["Lyme disease", "Strep throat", "Influenza only", "C. diff"], 0, "Lyme disease is listed for first-degree, Mobitz I and II blocks."),
      Q("overview", "Which medications cause first-degree AV block?", ["Digoxin, beta blockers, calcium channel blockers", "Atropine and epinephrine", "Statins", "Aspirin"], 0, "AV nodal blockers prolong the PR.")
    ]),

    D("arr-mobitz-1", "Second-Degree AV Block, Mobitz I (Wenckebach)", "PR lengthens until a beat drops; at the AV node, rarely progresses.", [
      S("overview", "What it is", "<p><strong>Progressive PR prolongation until a P is not conducted</strong> (dropped QRS) → <strong>grouped beating</strong>. Level: <strong>AV node</strong>; each impulse lengthens the node's refractory period.</p><p>Causes: <strong>normal people/athletes (vagal)</strong>, <strong>inferior MI</strong>, cardiomyopathy (sarcoid), myocarditis (Lyme), <strong>digoxin toxicity, BB, CCB</strong>, after cardiac surgery or ablation.</p>"),
      S("presentation", "Presentation", "<p>Often transient and asymptomatic. With slow sinus rates (2:1, 3:2) output can drop: pale, diaphoretic, worse HF (crackles, JVD, edema). <strong>Rarely progresses to complete heart block.</strong></p>"),
      S("treatment", "Treatment", Tbl(["Patient", "Plan"], [
        ["Asymptomatic", "None; look for reversible causes"],
        ["Unstable", "<strong>Atropine 1 mg</strong> (max 3 mg) → temporary pacing"],
        ["Stable symptomatic", "Monitor with pacing pads, fix causes; pacemaker if persistent"]
      ]) + blocks)
    ], [
      Q("overview", "The PR gets longer each beat until a QRS drops, then repeats. Diagnosis?", ["Mobitz I (Wenckebach)", "Mobitz II", "First-degree block", "Complete heart block"], 0, "Progressive PR prolongation then a dropped beat = Wenckebach."),
      Q("overview", "Where is the block in Mobitz I usually?", ["AV node", "Below the His bundle", "SA node", "Accessory pathway"], 0, "Mobitz I typically occurs at the AV node."),
      Q("presentation", "How likely is Mobitz I to progress to complete heart block?", ["Rarely", "Almost always", "Within hours in most", "Always after exercise"], 0, "Mobitz I rarely progresses to complete heart block."),
      Q("treatment", "Mobitz I with BP 78/40 and confusion. First drug?", ["Atropine 1 mg IV", "Adenosine", "Diltiazem", "Amiodarone"], 0, "Unstable Mobitz I: atropine, then temporary pacing."),
      Q("overview", "What EKG pattern does Wenckebach create?", ["Grouped beating", "Sawtooth waves", "Delta waves", "Electrical alternans"], 0, "The repeating cycle creates grouped beating."),
      Q("overview", "Which drug toxicity causes Mobitz I?", ["Digoxin", "Atropine", "Epinephrine", "Albuterol"], 0, "Digoxin toxicity, BBs and CCBs are iatrogenic causes.")
    ]),

    D("arr-mobitz-2", "Second-Degree AV Block, Mobitz II", "Constant PR with sudden dropped beats; infranodal and dangerous — pace.", [
      S("overview", "What it is", "<p>Some P waves fail to conduct with a <strong>constant PR</strong>. Usually <strong>infranodal</strong>: below His (75%, <strong>wide QRS</strong>) or within His (25%, narrow). <strong>High-grade block</strong> = &gt; 1 consecutive nonconducted P.</p><p>Means <strong>structural damage</strong>: <strong>anterior MI</strong> (septal/bundle necrosis), fibrosis (scleroderma, SLE), Lyme, myocarditis, sarcoid, amyloid, hyperkalemia, BB/CCB/digoxin. Rare without heart disease.</p>"),
      S("presentation", "Presentation", "<p>More likely than Mobitz I to cause <strong>hemodynamic compromise, severe bradycardia, progression to 3rd degree or asystole</strong>: fatigue, presyncope/syncope, dyspnea, chest pain, sudden cardiac arrest.</p>"),
      S("treatment", "Treatment", "<p><strong>Start pacing as soon as it is identified</strong>; admit to monitoring and place a <strong>permanent pacemaker</strong>. <strong>Atropine often does not work</strong> (block is below the node).</p>" + blocks + HY("Mobitz II = pace. Atropine won't fix an infranodal block."))
    ], [
      Q("overview", "Constant PR intervals with an occasional P not followed by a QRS. Diagnosis?", ["Mobitz II", "Mobitz I", "First-degree block", "PAC"], 0, "Mobitz II: constant PR with sudden dropped QRS."),
      Q("treatment", "What is the treatment for Mobitz II?", ["Pacing, then a permanent pacemaker", "Observation", "Atropine alone", "Metoprolol"], 0, "Initiate pacing as soon as Mobitz II is identified; permanent pacemaker."),
      Q("overview", "Which MI is classically linked to Mobitz II?", ["Anterior MI", "Inferior MI", "Posterior MI", "RV infarct"], 0, "Anterior MI damages the septum and bundle branches."),
      Q("overview", "Why is the QRS usually wide in Mobitz II?", ["The block is below the His bundle", "WPW is present", "Hyperkalemia", "The SA node is diseased"], 0, "75% of Mobitz II blocks are distal to the His bundle, giving wide QRS."),
      Q("overview", "What is high-grade AV block?", ["More than one consecutive nonconducted P wave", "PR over 300 ms", "Any wide QRS", "Block after an MI"], 0, "High-grade: more than one consecutive P wave not conducted."),
      Q("presentation", "Why is Mobitz II more dangerous than Mobitz I?", ["It can progress to complete heart block or asystole", "It causes AF", "It is always asymptomatic", "It is caused by caffeine"], 0, "Mobitz II has higher risk of compromise and progression.")
    ]),

    D("arr-complete-block", "Third-Degree (Complete) Heart Block", "No AV conduction: atria and ventricles beat independently; escape rhythm keeps the patient alive.", [
      S("overview", "What it is", "<p>Complete <strong>AV dissociation</strong>: P waves march through, unrelated to QRS; ventricular rate slower than atrial.</p>" + Tbl(["Escape", "Block level", "QRS", "Rate"], [
        ["Junctional", "At or above AV node", "Narrow", "40–60"],
        ["Ventricular", "Below AV node", "Wide", "20–40"]
      ]) + "<p>Causes: inferior or anterior MI, conduction system degeneration, <strong>BB/CCB/digoxin</strong>, cardiomyopathy, myocarditis.</p>"),
      S("presentation", "Presentation", "<p>Fatigue, dyspnea, presyncope/syncope; worse angina/HF. A ventricular escape often <strong>can't maintain output</strong> → instability, periods of asystole. Risks: asystole, VT, sudden death.</p>"),
      S("treatment", "Treatment", "<p><strong>Atropine 1 mg</strong> and <strong>transcutaneous pacer pads immediately</strong>; infranodal blocks often don't respond → transcutaneous then transvenous pacing. <strong>Permanent pacemaker required.</strong></p>" + blocks)
    ], [
      Q("overview", "P waves at 80 and wide QRS complexes at 34 with no relationship. Diagnosis?", ["Third-degree heart block with ventricular escape", "Mobitz I", "Sinus bradycardia", "Junctional rhythm with retrograde P"], 0, "Complete AV dissociation with a slow wide escape."),
      Q("overview", "What escape rate and QRS go with a junctional escape in complete heart block?", ["40-60 bpm, narrow", "20-40 bpm, wide", "60-100 bpm, wide", "Over 100, narrow"], 0, "Junctional: 40-60, narrow; ventricular: 20-40, wide."),
      Q("treatment", "What is the definitive treatment of complete heart block?", ["Permanent pacemaker", "Atropine daily", "Amiodarone", "Ablation"], 0, "Permanent pacemaker insertion is required."),
      Q("treatment", "Complete heart block with BP 70/40. What happens immediately with atropine?", ["Place transcutaneous pacer pads", "Give adenosine", "Wait for cardiology", "Give metoprolol"], 0, "Atropine 1 mg and immediately place pacer pads."),
      Q("presentation", "Why are patients with a ventricular escape rhythm often unstable?", ["The slow wide escape often can't maintain cardiac output", "It causes hypertension", "It is too fast", "It triggers AF"], 0, "Ventricular escape pacemakers often fail to maintain output."),
      Q("overview", "Which drugs can cause complete heart block?", ["Beta blockers, CCBs and digoxin", "Statins", "Atropine", "Dopamine"], 0, "AV-nodal blocking agents are listed causes.")
    ]),

    D("arr-escape-rhythms", "Junctional & Ventricular Escape Rhythms", "Backup pacemakers when the SA node or AV conduction fails.", [
      S("overview", "Compare", Tbl(["", "Junctional escape", "Ventricular escape"], [
        ["When", "SA node blocked/slower than AV node: <strong>SND, kids asleep, athletes</strong>", "SA and AV nodes fail: <strong>3rd-degree block</strong>, long sinus arrest"],
        ["Rate", "<strong>40–60</strong>", "<strong>20–40</strong>"],
        ["QRS", "<strong>Narrow</strong> (&lt; 120 ms)", "<strong>Wide</strong> (LBBB or RBBB shape)"],
        ["P waves", "Absent or retrograde", "Non-conducted (CHB) or absent (arrest)"]
      ])),
      S("treatment", "Treatment", "<p>Healthy and asymptomatic: nothing. Symptomatic: treat causes, <strong>atropine 1 mg</strong> or <strong>temporary pacing</strong> (atropine acts on SA/AV nodes, so often <strong>fails for ventricular escape</strong>). <strong>Permanent pacemaker</strong> for SSS, complete/high-grade block, or persistent symptoms.</p>")
    ], [
      Q("overview", "Narrow QRS at 48 bpm with no visible P waves in a sleeping child. Rhythm?", ["Junctional escape rhythm", "Ventricular escape", "Mobitz II", "VT"], 0, "Junctional escape: 40-60, narrow, absent or retrograde P."),
      Q("overview", "What is the rate of a ventricular escape rhythm?", ["20-40 bpm", "40-60 bpm", "60-100 bpm", "Over 150 bpm"], 0, "Ventricular escape: 20-40, wide QRS."),
      Q("treatment", "Why might atropine fail for a ventricular escape rhythm?", ["Atropine works on the SA and AV nodes, not the ventricles", "It is too slow", "It causes VF", "It is contraindicated"], 0, "Atropine may not be effective for ventricular escape rhythms."),
      Q("overview", "In which situation does a ventricular escape rhythm appear?", ["Third-degree block or a long sinus arrest", "Sinus tachycardia", "AF with RVR", "First-degree block"], 0, "Both SA and AV nodes fail."),
      Q("treatment", "An asymptomatic athlete has a junctional escape at night. Treatment?", ["None", "Pacemaker", "Atropine", "Amiodarone"], 0, "Healthy individuals need no medical management."),
      Q("overview", "What P waves are typical of a junctional rhythm?", ["Absent or retrograde (inverted)", "Sawtooth", "Three different shapes", "Normal and before every QRS with PR 160"], 0, "Junctional rhythms have absent or retrograde P waves.")
    ]),

    D("arr-sinus-tach", "Sinus Tachycardia", "Sinus rate above 100 with gradual onset; treat the cause, not the rate.", [
      S("overview", "Causes", "<p>Sinus rate &gt; 100 (usually 100–160); <strong>gradual onset and offset</strong> (unlike reentrant PSVT).</p><p>Causes: exercise, <strong>fever, hypovolemia, hypotension, sepsis, anemia, hypoxia, PE, acute MI, anxiety, hyperthyroidism</strong>, stimulants, <strong>withdrawal</strong> (BB, alcohol, opioids, digoxin, benzos).</p><p>Very fast rates can hide the P in the T wave (<strong>\"camel hump\"</strong>).</p>"),
      S("presentation", "Presentation", "<p>Doesn't cause symptoms itself (maybe palpitations); in heart patients ↑ O2 demand → dyspnea, chest pain. Symptoms are mostly from the cause.</p>"),
      S("treatment", "Treatment", Tbl(["Cause", "Treat"], [["Hypovolemia/hypotension", "IV fluids"], ["Fever", "Antipyretics"], ["Significant anemia", "Transfusion"], ["Stimulants", "Avoid caffeine/stimulants"]]) + "<p>Admit if at risk: sepsis, shock, hypoxia, metabolic acidosis, acute MI.</p>" + HY("Sinus tach is a symptom: find the fever, bleed, clot or hypoxia."))
    ], [
      Q("treatment", "A febrile, dehydrated patient has sinus tachycardia at 130. Best treatment?", ["IV fluids and antipyretics", "Metoprolol", "Adenosine", "Cardioversion"], 0, "Identify and treat the underlying cause."),
      Q("overview", "How does sinus tachycardia start and stop compared with AVNRT?", ["Gradually, not abruptly", "Abruptly", "Only with vagal maneuvers", "Only at night"], 0, "Sinus tach has gradual onset/termination; reentry is abrupt."),
      Q("overview", "What is the 'camel hump' on a fast EKG?", ["P waves hidden in the preceding T wave", "Delta waves", "Osborn waves", "U waves"], 0, "At fast rates the P can merge with the T wave."),
      Q("overview", "Which serious cause of sinus tachycardia must not be missed in a dyspneic post-op patient?", ["Pulmonary embolism", "Sick sinus syndrome", "WPW", "Hypothyroidism"], 0, "PE is a listed cause; sinus tach is also the most common EKG finding of PE."),
      Q("overview", "Stopping which drug can cause rebound sinus tachycardia?", ["A beta blocker", "Amlodipine", "A statin", "Aspirin"], 0, "Withdrawal from BB, alcohol, opioids, digoxin, benzos."),
      Q("treatment", "Which patient with sinus tach needs admission?", ["One with sepsis or metabolic acidosis", "One after drinking coffee", "One with anxiety only", "One after a jog"], 0, "Admit conditions at risk for deterioration: sepsis, shock, hypoxia, acidosis, MI.")
    ]),

    D("arr-avnrt", "AV Nodal Reentrant Tachycardia (AVNRT)", "Most common PSVT: dual AV nodal pathways, young women, abrupt onset; vagal → adenosine.", [
      S("overview", "Mechanism", "<p>Reentry in the AV node using a <strong>fast pathway</strong> (fast conduction, long refractory) and a <strong>slow pathway</strong> (slow conduction, short refractory). A perfectly timed <strong>PAC</strong> hits the refractory fast pathway, goes down the slow one, and returns up the fast one: <strong>typical (slow–fast)</strong>. Atypical = fast–slow.</p><p>Common in <strong>young women (late teens–young adults)</strong> with normal hearts.</p>"),
      S("presentation", "Presentation & EKG", "<p><strong>Sudden onset and offset</strong> of palpitations, dizziness, dyspnea; less often fatigue, syncope; chest pain with heart disease.</p>" + Tbl(["EKG", ""], [["QRS", "Narrow, regular, rapid"], ["Rate", "<strong>170–180</strong>"], ["P waves", "<strong>Buried in the QRS (70%)</strong> or pseudo-r' in V1 / pseudo-S"]])),
      S("treatment", "Treatment", "<ol><li><strong>Vagal maneuvers</strong>: Valsalva 1–2 tries, then <strong>modified Valsalva</strong> (blow into 10 mL syringe 15 s semi-recumbent, then supine with legs raised 45 s; 2.5–3× better), or carotid massage (supine, monitored).</li><li><strong>Adenosine 6 mg</strong> rapid IV (then 12 mg): &gt; 80% success.</li><li>IV <strong>verapamil/diltiazem</strong> or <strong>metoprolol/esmolol</strong>.</li><li>Unstable or persistent → <strong>cardioversion</strong>. Frequent/refractory → <strong>catheter ablation</strong>.</li></ol>" + HY("Young woman, sudden regular narrow tachy at 180, P buried in QRS → vagal, then adenosine."))
    ], [
      Q("presentation", "A 22-year-old woman has sudden palpitations; EKG shows a regular narrow tachycardia at 178 with no visible P waves. Diagnosis?", ["AVNRT", "Sinus tachycardia", "Atrial fibrillation", "VT"], 0, "AVNRT: regular, narrow, 170-180, P buried in QRS, young women."),
      Q("treatment", "What is the first treatment for stable AVNRT?", ["Vagal maneuvers", "Adenosine 12 mg", "Cardioversion", "Ablation"], 0, "Vagal maneuvers first, then adenosine."),
      Q("treatment", "How is the modified Valsalva done?", ["Blow into a 10 mL syringe for 15 s semi-recumbent, then lie flat with legs raised for 45 s", "Hold breath for 60 s standing", "Cough repeatedly", "Ice to the face for 5 minutes only"], 0, "Modified Valsalva is 2.5-3x more successful than standard."),
      Q("overview", "What triggers typical AVNRT?", ["A perfectly timed PAC", "A PVC only", "Hyperkalemia", "Digoxin"], 0, "A PAC arrives when the fast pathway is refractory and travels down the slow pathway."),
      Q("overview", "In typical AVNRT, which way does the impulse travel?", ["Down the slow pathway, back up the fast pathway", "Down the fast, up the slow", "Down an accessory pathway", "Around the tricuspid annulus"], 0, "Typical = slow-fast; atypical = fast-slow."),
      Q("treatment", "AVNRT episodes are frequent and poorly tolerated despite meds. Best long-term option?", ["Catheter ablation", "Lifelong adenosine", "Pacemaker", "Warfarin"], 0, "Ablation for frequent, refractory or poorly tolerated episodes."),
      Q("treatment", "What success rate does adenosine have for AVNRT?", ["Over 80%", "About 10%", "About 30%", "100%"], 0, "Adenosine is successful in over 80% of cases.")
    ]),

    D("arr-wpw-avrt", "WPW Syndrome & AVRT", "Bundle of Kent: short PR, delta wave; orthodromic (narrow) vs antidromic (wide) AVRT; never block the node in pre-excitation.", [
      S("overview", "WPW pattern vs syndrome", "<p>Accessory pathway (<strong>bundle of Kent</strong>) bypasses the AV node → pre-excitation. EKG triad: <strong>short PR &lt; 120 ms</strong>, <strong>delta wave</strong> (slurred QRS upstroke), <strong>slightly wide QRS</strong>.</p><p><strong>Pattern</strong> = EKG findings only. <strong>Syndrome</strong> = arrhythmias using the pathway: <strong>AVRT</strong> (95%) and <strong>AF</strong> (most dangerous).</p>"),
      S("types", "Orthodromic vs antidromic", Tbl(["", "Orthodromic (90–95%)", "Antidromic (5%)"], [
        ["Down", "AV node", "Accessory pathway"],
        ["Up", "Accessory pathway", "AV node"],
        ["QRS", "<strong>Narrow</strong>, no delta wave", "<strong>Wide</strong>, pre-excited (mimics VT)"],
        ["Rate / RP", "150–250+; inverted P, RP ≈ ½ RR", "150–250+; RP &gt; ½ RR"]
      ])),
      S("presentation", "Presentation", "<p>Palpitations, syncope/presyncope, dizziness, diaphoresis, chest pain, dyspnea; can cause sudden death. Incidental WPW pattern is usually asymptomatic but needs <strong>risk stratification</strong>.</p>"),
      S("treatment", "Treatment", Tbl(["Situation", "Plan"], [
        ["Unstable", "<strong>Synchronized cardioversion</strong>"],
        ["Orthodromic (narrow)", "Vagal → adenosine → metoprolol or diltiazem → <strong>procainamide</strong> if refractory"],
        ["Antidromic (wide)", "Unsure → treat as VT. Sure → <strong>procainamide</strong>; EP if it fails"],
        ["Avoid in pre-excitation", "<strong>Verapamil, diltiazem, BB, amiodarone, adenosine</strong>"]
      ]) + HY("Delta wave + wide fast rhythm → procainamide. Nodal blockers can push it into VF."))
    ], [
      Q("overview", "Which EKG triad defines a WPW pattern?", ["Short PR, delta wave, slightly wide QRS", "Long PR, dropped QRS, narrow QRS", "Sawtooth waves, narrow QRS, regular rate", "ST elevation V1-V2, pseudo-RBBB"], 0, "WPW: PR < 120 ms, delta wave, widened QRS."),
      Q("types", "Which AVRT goes down the AV node and back up the accessory pathway?", ["Orthodromic (narrow QRS)", "Antidromic (wide QRS)", "Atypical AVNRT", "Atrial flutter"], 0, "Orthodromic is 90-95% and narrow."),
      Q("types", "Why can antidromic AVRT look like VT?", ["Conduction goes down the accessory pathway, giving wide QRS", "It has no P waves", "It is irregular", "It causes ST elevation"], 0, "Antidromic AVRT has wide pre-excited QRS that mimics VT."),
      Q("treatment", "Stable antidromic AVRT with known WPW. Drug?", ["Procainamide", "Adenosine", "Diltiazem", "Metoprolol"], 0, "Procainamide; avoid nodal blockers in pre-excitation."),
      Q("overview", "What is the difference between WPW pattern and WPW syndrome?", ["Syndrome means arrhythmias using the pathway occur", "Pattern means wide-complex tachycardia", "Syndrome has no delta wave", "They are the same"], 0, "Pattern = EKG pre-excitation; syndrome = arrhythmias involving the pathway."),
      Q("treatment", "Which drugs must be avoided in pre-excited AF?", ["Verapamil, diltiazem, beta blockers, amiodarone, adenosine", "Procainamide", "Ibutilide", "Electricity"], 0, "Nodal blockers push impulses down the accessory pathway."),
      Q("overview", "What is the accessory pathway in WPW called?", ["Bundle of Kent", "Bundle of His", "Bachmann bundle", "Purkinje fiber"], 0, "The bundle of Kent connects atria and ventricles directly."),
      Q("treatment", "Orthodromic AVRT is refractory to adenosine, metoprolol and diltiazem. Next?", ["Procainamide", "Digoxin", "Atropine", "Verapamil plus esmolol"], 0, "Procainamide blocks conduction in the accessory pathway.")
    ]),

    D("arr-pvcs", "Premature Ventricular Contractions (PVCs)", "Wide early beats without a P wave and a full compensatory pause; usually benign.", [
      S("overview", "What it is", "<p>Early beats from the outflow tract or His–Purkinje: <strong>wide, bizarre QRS</strong>, usually <strong>no P</strong>, <strong>full compensatory pause</strong>. <strong>Bigeminy</strong> = every 2nd beat; <strong>trigeminy</strong> = every 3rd. Usually benign; rarely trigger VT/VF with heart disease.</p>"),
      S("workup", "Frequent PVCs: check", "<p><strong>Electrolytes</strong> (hypo/hyperkalemia, hypomagnesemia), <strong>hyperthyroidism</strong>, occult heart disease.</p>"),
      S("treatment", "Treatment", Tbl(["Situation", "Plan"], [
        ["Asymptomatic, normal heart", "None"],
        ["Mild symptoms", "Reassurance"],
        ["Symptomatic or PVC cardiomyopathy", "<strong>Beta blocker</strong> first (metoprolol, propranolol, atenolol); non-DHP CCB alternative"],
        ["Fails", "Flecainide or amiodarone; <strong>catheter ablation</strong> if refractory"]
      ]))
    ], [
      Q("overview", "Every other beat is a wide early complex without a P wave. Pattern?", ["Ventricular bigeminy", "Trigeminy", "Mobitz I", "Atrial flutter"], 0, "Bigeminy: every second beat is premature."),
      Q("overview", "Which pause classically follows a PVC?", ["A full compensatory pause", "No pause", "A pause of exactly 3 s", "A short non-compensatory pause"], 0, "A full compensatory pause follows unless there is retrograde VA conduction."),
      Q("workup", "A patient has frequent PVCs. Which labs should be checked?", ["Potassium, magnesium and thyroid function", "Lipase", "D-dimer", "INR"], 0, "Check electrolytes and hyperthyroidism, and look for occult heart disease."),
      Q("treatment", "First-line drug for symptomatic PVCs?", ["Beta blocker", "Flecainide", "Amiodarone", "Digoxin"], 0, "Beta blockers first; non-DHP CCBs are the alternative."),
      Q("treatment", "A patient has PVC-induced cardiomyopathy despite medication. Option?", ["Catheter ablation", "Pacemaker", "Observation", "Warfarin"], 0, "Ablation for refractory symptoms or cardiomyopathy from PVC burden."),
      Q("overview", "When are PVCs more dangerous?", ["With underlying heart disease, where they can trigger VT or VF", "In young athletes", "With caffeine use", "At night"], 0, "Rarely they trigger VT/VF, especially with heart disease.")
    ]),

    D("arr-monomorphic-vt", "Ventricular Tachycardia (Monomorphic)", "Three or more PVCs in a row; wide regular rhythm at 140–180, usually ischemic heart disease.", [
      S("overview", "Definitions & causes", "<p>VT = <strong>≥ 3 consecutive PVCs</strong>. <strong>Nonsustained</strong> &lt; 30 s; <strong>sustained</strong> &gt; 30 s. Classify by stability, morphology, pulse.</p><p><strong>Monomorphic</strong>: wide, regular, same QRS beat to beat, <strong>140–180</strong>, no P waves (most common VT).</p><p>Causes: <strong>chronic ischemic heart disease, acute MI</strong>; less: DCM/HCM, MVP, channelopathies, drugs. Worsened by hypoxia, alkalosis, electrolytes (hyperkalemia). Risk: HTN, prior MI, COPD, ST changes. <strong>VT &gt; 48 h after MI</strong> carries higher death risk than VT in the first 48 h.</p>"),
      S("presentation", "Presentation", "<p>Palpitations, dyspnea, lightheadedness; syncope, arrest. Triggered by exercise or stress. Hypotension, AMS, diaphoresis, pallor.</p>"),
      S("treatment", "Treatment", Tbl(["Type", "Plan"], [
        ["<strong>Pulseless</strong>", "Defibrillate, CPR, ACLS"],
        ["<strong>Unstable with pulse</strong> (hypotension, HF, chest pain, AMS, shock)", "<strong>Synchronized cardioversion 100 J</strong>, sedate if possible"],
        ["<strong>Stable</strong>", "<strong>Amiodarone 150 mg over 10 min</strong> → 1 mg/min × 6 h, or <strong>procainamide</strong> (not with long QT, MI, severe HF); fails → synchronized cardioversion"],
        ["<strong>Long term</strong>", "<strong>ICD</strong> if significant LV dysfunction; <strong>beta blocker</strong>; amiodarone/sotalol; ablation"]
      ]) + unstable)
    ], [
      Q("overview", "How many consecutive PVCs define ventricular tachycardia?", ["Three or more", "Two", "Five", "Ten"], 0, "VT: three or more consecutive PVCs."),
      Q("overview", "What separates sustained from nonsustained VT?", ["Lasting more than 30 seconds", "Rate over 200", "Wide QRS", "Pulse present"], 0, "Nonsustained < 30 s and self-terminating; sustained > 30 s."),
      Q("treatment", "Monomorphic VT at 170 with BP 80/50 and confusion, pulse present. Treatment?", ["Synchronized cardioversion at 100 J", "Amiodarone 150 mg and wait", "Unsynchronized shock 360 J only after CPR", "Adenosine"], 0, "Unstable VT with a pulse: immediate synchronized cardioversion."),
      Q("treatment", "Stable monomorphic VT. First drug?", ["Amiodarone 150 mg IV over 10 minutes", "Adenosine 6 mg", "Diltiazem", "Atropine"], 0, "Stable VT: amiodarone or procainamide; cardioversion if they fail."),
      Q("overview", "What is the most common cause of VT?", ["Ischemic heart disease or acute MI", "WPW", "Hyperthyroidism", "Caffeine"], 0, "Chronic ischemic heart disease and acute MI."),
      Q("treatment", "A survivor of sustained VT has an EF of 25%. Long-term therapy?", ["ICD plus beta blocker", "Aspirin only", "Pacemaker only", "Digoxin"], 0, "ICD for significant LV dysfunction; BB is primary drug."),
      Q("overview", "Which timing of VT after an MI carries the higher risk of death?", ["More than 48 hours after the MI", "Within the first 48 hours", "During the MI", "Timing doesn't matter"], 0, "VT > 48 h after acute MI increases risk of death.")
    ]),

    D("arr-polymorphic-vt", "Polymorphic VT & Torsades de Pointes", "Changing QRS shape; torsades is the long-QT form that twists around the baseline — magnesium.", [
      S("overview", "What it is", "<p><strong>Polymorphic VT</strong>: wide, rapid, irregular, QRS shape changes beat to beat, 140–180, no P.</p><p><strong>Torsades de pointes</strong>: long-QT subtype; QRS <strong>\"twisting of the points\"</strong> around the baseline. Caused by <strong>delayed repolarization</strong>: <strong>congenital long QT</strong> or acquired (<strong>drugs</strong>, <strong>severe hypokalemia, hypomagnesemia</strong>). Bursts of up to 30 cycles often stop on their own (brief syncope); sustained → VF.</p>"),
      S("treatment", "Treatment", "<p><strong>Sustained polymorphic VT: immediate unsynchronized shock (defibrillation).</strong> Torsades: add <strong>magnesium 1–2 g IV</strong>; <strong>never withhold defibrillation</strong>. Stop QT-prolonging drugs, fix K+ and Mg2+.</p>" + HY("Torsades = long QT + low K/Mg + QT drugs → magnesium; pulseless → shock."))
    ], [
      Q("overview", "A wide irregular tachycardia twists around the baseline in a patient on haloperidol. Name?", ["Torsades de pointes", "Monomorphic VT", "VF", "AF with aberrancy"], 0, "Torsades: long-QT polymorphic VT twisting around the baseline."),
      Q("treatment", "Torsades with a pulse. Drug?", ["Magnesium 1-2 g IV", "Amiodarone", "Procainamide", "Sotalol"], 0, "Add magnesium 1-2 g IV."),
      Q("treatment", "Sustained polymorphic VT. What electricity is used?", ["Immediate unsynchronized shock (defibrillation)", "Synchronized cardioversion 50 J", "Transcutaneous pacing", "None"], 0, "Sustained polymorphic VT gets an immediate unsynchronized shock."),
      Q("overview", "Which electrolyte problems cause torsades?", ["Severe hypokalemia and hypomagnesemia", "Hypernatremia", "Hypercalcemia", "Hyperphosphatemia"], 0, "Severe low K+ and Mg2+ plus QT drugs."),
      Q("overview", "Why do torsades often present as brief syncope?", ["Bursts often stop on their own within seconds", "It never affects output", "It only occurs asleep", "It causes seizures"], 0, "Bursts of up to 30 cycles often terminate spontaneously."),
      Q("overview", "What is the underlying problem in torsades?", ["Delayed repolarization (long QT)", "Accessory pathway", "AV block", "Sinus node failure"], 0, "Delayed repolarization initiates the tachycardia.")
    ]),

    D("arr-vfib", "Ventricular Fibrillation", "Chaotic ventricular activity with no output: shock, CPR, epinephrine, amiodarone.", [
      S("overview", "What it is & causes", "<p>Disorganized depolarization, <strong>no cardiac output</strong>; fine/coarse irregular waves, no P or QRS. Common with <strong>severe ischemic heart disease</strong>. Primary VF (sudden) vs secondary (after LV failure/shock).</p><p>Also: hypo/hyperkalemia, hypomagnesemia, acidosis, hypothermia, hypoxia; cardiomyopathies; <strong>QT abnormalities, Brugada</strong>, family history of SCD; alcohol; catheters, <strong>electrocution</strong>, <strong>commotio cordis</strong>; prior VT.</p>"),
      S("presentation", "Presentation", "<p>Sudden collapse: <strong>unconscious, unresponsive, pulseless</strong>. Before: chest pain, dyspnea, N/V.</p>"),
      S("treatment", "ACLS & aftercare", "<ol><li>CPR, attach defibrillator → <strong>shock</strong>.</li><li>CPR 2 min, IV/IO → still shockable: shock, CPR, <strong>epinephrine 1 mg</strong> (q3–5 min).</li><li>Still shockable: shock, CPR, <strong>amiodarone 300 mg</strong> (then 150).</li><li>Look for <strong>H's and T's</strong>: hypovolemia, hypoxia, H+ (acidosis), hypo/hyperkalemia, hypothermia; tension PTX, tamponade, toxins (tablets), thrombosis (coronary, PE).</li></ol><p>After ROSC fix ischemia, metabolic and toxic triggers. Long term: <strong>ICD</strong> for prior VF or sustained VT.</p>")
    ], [
      Q("treatment", "A man collapses; monitor shows VF. First action?", ["Defibrillate and start CPR", "Atropine", "Adenosine", "Synchronized cardioversion"], 0, "Shockable rhythm: defibrillate."),
      Q("treatment", "VF persists after the second shock. Which drug now?", ["Epinephrine 1 mg IV", "Amiodarone 150 mg", "Atropine 1 mg", "Magnesium"], 0, "After the second shock: epinephrine; after the third: amiodarone 300."),
      Q("treatment", "Which drug follows the third shock for refractory VF?", ["Amiodarone 300 mg", "Adenosine 12 mg", "Digoxin", "Procainamide"], 0, "Amiodarone 300 mg (or lidocaine)."),
      Q("overview", "A teenage baseball player collapses in VF after a ball strikes his chest. Name?", ["Commotio cordis", "Brugada", "Tamponade", "Aortic dissection"], 0, "Blunt chest trauma causing VF is commotio cordis."),
      Q("treatment", "Which T's are on the reversible causes list?", ["Tension pneumothorax, tamponade, toxins, thrombosis", "Tachycardia, tremor, tinnitus, thirst", "Thyroid, tumor, TB, trauma only", "Tetany, temperature, tachypnea, TIA"], 0, "Trauma, tablets, coronary thrombosis, PE, tamponade, tension PTX."),
      Q("treatment", "A VF survivor with no reversible cause. Long-term therapy?", ["ICD", "Pacemaker", "Aspirin only", "Nothing"], 0, "ICD for those with a history of VF or sustained VT.")
    ]),

    D("arr-pea-asystole", "PEA & Asystole", "Non-shockable arrests: CPR and epinephrine, and hunt for the cause.", [
      S("overview", "What they are", Tbl(["", "PEA", "Asystole"], [
        ["Definition", "Organized electrical activity <strong>without a pulse</strong> (can look like sinus)", "<strong>Flatline</strong>: no electrical or mechanical activity"],
        ["Clues", "<strong>Narrow</strong> PEA → mechanical (tamponade, PTX, PE, myocardial rupture); <strong>wide</strong> PEA → metabolic (hyperkalemia), Na-channel drug toxicity, ischemia, LV failure", "Usually deterioration of VF/pVT; <strong>&lt; 2% survive</strong>"]
      ])),
      S("treatment", "Treatment", "<p><strong>Do not shock.</strong> CPR 2 min + <strong>epinephrine 1 mg IV q3–5 min</strong>; recheck rhythm, repeat until shockable; treat H's and T's.</p>" + HY("PEA/asystole: no shock — CPR, epi, find the cause."))
    ], [
      Q("treatment", "A patient in asystole. What do you NOT do?", ["Defibrillate", "Start CPR", "Give epinephrine", "Look for reversible causes"], 0, "Asystole and PEA do not respond to defibrillation."),
      Q("overview", "The monitor shows sinus rhythm but there is no pulse. Name?", ["Pulseless electrical activity", "Asystole", "VF", "Complete heart block"], 0, "PEA: electrical activity without a pulse; can mimic any rhythm."),
      Q("overview", "Narrow-complex PEA most suggests which kind of cause?", ["Mechanical (tamponade, tension PTX, PE)", "Hyperkalemia", "Sodium channel blocker overdose", "LV failure"], 0, "Narrow = mechanical; wide = metabolic or drug."),
      Q("overview", "Wide-complex PEA most suggests?", ["Hyperkalemia or sodium channel blocker toxicity", "Tamponade", "Tension pneumothorax", "Hypovolemia"], 0, "Wide PEA links to metabolic problems, drug toxicity, ischemia, LV failure."),
      Q("treatment", "How often is epinephrine given in PEA?", ["1 mg every 3-5 minutes", "Once only", "Every 30 seconds", "Only after 20 minutes"], 0, "Epinephrine 1 mg IV q3-5 min."),
      Q("overview", "About how many patients survive asystole?", ["Fewer than 2%", "About 25%", "About 50%", "Most"], 0, "Less than 2% of asystole cases survive.")
    ])
  ]);
}());
