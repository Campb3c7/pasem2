/*
  Cardio Part 2 Diseases tool: Inpatient & Long-Term Arrhythmia Management.
  Source: source-material/cardio-part-2/text/chronic-arrhythmia-management.md.
  AF is split into four entries (diagnosis, acute care, rate vs rhythm,
  stroke prevention) because the lecture spends most of its time there.
  Question ids are "<disease id>|<index>": only APPEND questions.
*/
(function () {
  "use strict";
  var H = window.DiseaseContent;
  var Tbl = H.Tbl, HY = H.HY, Mn = H.Mn, S = H.S, Q = H.Q, D = H.D, L = H.L;

  window.CARDIO2_DISEASES_MGMT = L("arrhythmia-management", "Inpatient & Long-Term Arrhythmia Management", [

    D("mgmt-nsvt", "NSVT in the Hospital", "Runs of VT on telemetry: check for artifact, fix reversible causes, and work up if recurrent.", [
      S("overview", "What it is", "<p>Non-sustained VT is extremely common on telemetry. It is a <strong>potential marker for sustained ventricular dysrhythmia</strong> and should <strong>always be investigated</strong>.</p><p>Patients are usually asymptomatic (ask about CP, dyspnea, palpitations, presyncope); exam is normal and the monitor is back in NSR when you arrive.</p>"),
      S("workup", "Work-up", "<ol class=\"concept-chain\"><li>Look at the strip: <strong>artifact</strong> can mimic NSVT; compare with the 12-lead</li><li>Reversible causes: <strong>K+ and Mg2+</strong> (most common), anemia, ischemia, hypoxia, hypotension, HF decompensation, drug effect</li><li><strong>Immediate 12-lead + HS troponin now and in 6 h</strong> in all patients</li></ol>" + Tbl(["Situation", "Work-up"], [
        ["Single episode", "12-lead, troponins, reversible causes: <strong>that's all</strong>"],
        ["Recurrent or highly symptomatic", "Add <strong>2D echo</strong> (study of choice); <strong>stress test</strong> if VT seems exercise-related"]
      ]) + HY("NSVT call: check for artifact → K/Mg → 12-lead + troponin x2 → echo only if recurrent."))
    ], [
      Q("workup", "A nurse calls about a 12-beat run of VT on telemetry. First thing to do?", ["Look at the strip for artifact and compare with the 12-lead", "Shock the patient", "Start amiodarone", "Order a cardiac cath"], 0, "Artifact may look like NSVT; check the strip first."),
      Q("workup", "Which electrolytes are the most common reversible causes of NSVT?", ["Potassium and magnesium", "Sodium and chloride", "Calcium and phosphate", "Bicarbonate and glucose"], 0, "K and Mg derangements are most common."),
      Q("workup", "Which labs does every NSVT patient get?", ["12-lead EKG plus HS troponin now and in 6 hours", "D-dimer and BNP only", "TSH only", "Nothing"], 0, "Rule out ischemia in all patients."),
      Q("workup", "A patient has a single asymptomatic run of NSVT; EKG, troponins and electrolytes are fine. Next step?", ["No further work-up needed", "Echo and stress test", "EP study", "ICD"], 0, "For a single episode, EKG, troponins and reversible causes are all that's needed."),
      Q("workup", "A patient has recurrent NSVT runs. Which test comes first?", ["2D echo", "Tilt table", "Cardiac MRI", "Holter for 30 days"], 0, "Echo is the study of choice to assess function and structure."),
      Q("overview", "Why is NSVT always investigated?", ["It may mark risk for sustained ventricular arrhythmia", "It always causes syncope", "It is always artifact", "It means AF is coming"], 0, "NSVT is a potential marker for sustained ventricular dysrhythmia."),
      Q("workup", "When is stress testing added for NSVT?", ["When VT seems to start with exercise", "Always first", "Never", "Only if K is low"], 0, "Stress testing if onset corresponds to exercise.")
    ]),

    D("mgmt-ist", "Inappropriate Sinus Tachycardia", "Diagnosis of exclusion in young women: sinus rate too high for the body's needs; metoprolol or ivabradine.", [
      S("overview", "Sinus tach vs IST", "<p><strong>Sinus tachycardia</strong> is a physiologic response to stress or illness; symptoms come from the underlying illness, so treat the cause.</p><p><strong>Inappropriate sinus tach</strong> (chronic non-paroxysmal sinus tach) is a <strong>diagnosis of exclusion</strong> without structural disease or another cause; exaggerated HR response to exercise. Mostly <strong>young women</strong>. Mechanism: <strong>SA node hyperactivity, depressed vagal response, β-adrenergic hypersensitivity</strong>.</p>"),
      S("workup", "Work-up", Tbl(["Sinus tach", "Atrial tach"], [
        ["Responds to stress or illness", "<strong>Paroxysmal</strong>, unrelated to events"],
        ["Gradual", "Often <strong>&gt; 140 bpm</strong>"]
      ]) + "<p>First step: <strong>12-lead EKG</strong> to confirm sinus (not atrial) tach. No reversible cause → <strong>cardiology consult + 2D echo</strong>.</p>"),
      S("treatment", "Treatment", "<p><strong>Low-dose metoprolol</strong>. <strong>Ivabradine</strong> is more effective but <strong>off label in the US</strong>.</p>" + HY("IST = young woman, sinus tach without a cause → metoprolol; ivabradine works better."))
    ], [
      Q("overview", "A 24-year-old woman has a resting HR of 115 in sinus rhythm with normal TSH, CBC and echo. Diagnosis?", ["Inappropriate sinus tachycardia", "POTS", "Atrial flutter", "AVNRT"], 0, "IST is a diagnosis of exclusion without another cause."),
      Q("workup", "First step in evaluating suspected inappropriate sinus tachycardia?", ["12-lead EKG to confirm sinus, not atrial, tachycardia", "Tilt table", "Cardiac cath", "Ablation"], 0, "Confirm it's sinus tach with a 12-lead."),
      Q("workup", "Which feature favors atrial tachycardia over sinus tachycardia?", ["Paroxysmal onset unrelated to events, often over 140", "Gradual rise with fever", "Rate under 110", "Normal P wave axis"], 0, "Atrial tach is paroxysmal and often > 140."),
      Q("treatment", "Usual first treatment for inappropriate sinus tachycardia?", ["Low-dose metoprolol", "Amiodarone", "Digoxin", "Warfarin"], 0, "IST is generally treated with low-dose metoprolol."),
      Q("overview", "Which mechanism is proposed for inappropriate sinus tachycardia?", ["SA node hyperactivity with beta-adrenergic hypersensitivity", "Accessory pathway", "Pulmonary vein foci", "AV node scarring"], 0, "SA node hyperactivity, depressed vagal response, beta hypersensitivity."),
      Q("overview", "A patient's sinus tach is from fever and dehydration. Treatment?", ["Treat the underlying cause", "Metoprolol", "Ivabradine", "Cardioversion"], 0, "Physiologic sinus tach: correct the cause."),
      Q("workup", "No reversible cause is found for persistent sinus tachycardia. Next step?", ["Cardiology consult and 2D echo", "Discharge without follow-up", "Start warfarin", "Pacemaker"], 0, "Reasonable to consult cardiology and get an echo.")
    ]),

    D("mgmt-pots", "Postural Tachycardia Syndrome (POTS)", "Exaggerated HR rise on standing with intact baroreflex; young women; rarely syncope; combination therapy.", [
      S("overview", "What it is", "<p>Exaggerated <strong>HR response to standing</strong> with an <strong>intact baroreceptor reflex</strong>: the heart races, but vessels constrict appropriately. So <strong>syncope is rare</strong>; presyncope and orthostatic symptoms are common.</p><p>Most common in <strong>adolescent and young adult women</strong>. Proposed mechanisms: genetics, hypovolemia, deconditioning, distal denervation, ↓ venous return (no single cause).</p>"),
      S("presentation", "Symptoms", Tbl(["System", "Symptoms with standing"], [
        ["CNS", "Dizziness, weakness, lightheadedness, blurred vision, fatigue"],
        ["Orthostatic", "Palpitations, tremor, anxiety"],
        ["GI", "Nausea, cramps, constipation/diarrhea"]
      ]) + "<p>In general, they don't feel well every day.</p>"),
      S("workup", "Diagnosis", "<p><strong>Tilt-table testing</strong>. The slide says positive = HR rises about <strong>10 bpm</strong> while BP drops &lt; 20/10. Usual teaching: HR rise <strong>≥ 30 bpm</strong> within 10 min without orthostatic hypotension (standard teaching); know both.</p>"),
      S("treatment", "Treatment", "<p>No proven best strategy, likely a <strong>combination</strong>: <strong>exercise</strong>, <strong>oral hydration</strong>, <strong>midodrine</strong> (α1 agonist), <strong>fludrocortisone</strong> (mineralocorticoid), <strong>low-dose BB</strong> for palpitations.</p>" + HY("POTS: HR climbs, BP holds → rarely faints. Exercise + fluids ± midodrine/fludrocortisone/low-dose BB."))
    ], [
      Q("overview", "A 17-year-old girl's HR jumps from 70 to 120 on standing; BP stays normal and she feels dizzy but never faints. Diagnosis?", ["POTS", "Orthostatic hypotension", "Vasovagal syncope", "Sick sinus syndrome"], 0, "Exaggerated HR response with intact baroreflex."),
      Q("overview", "Why do POTS patients rarely faint?", ["Their baroreceptor reflex is intact so they vasoconstrict", "Their HR doesn't change", "They have high BP", "They are always lying down"], 0, "They vasoconstrict appropriately to the postural change."),
      Q("workup", "Which test diagnoses POTS?", ["Tilt-table testing", "Echo", "Holter", "Stress test"], 0, "Tilt table can be used for diagnosis."),
      Q("treatment", "Which alpha-1 agonist is used in POTS?", ["Midodrine", "Fludrocortisone", "Ivabradine", "Clonidine"], 0, "Midodrine: selective alpha-1 agonist raising BP."),
      Q("treatment", "What does low-dose beta blocker do for POTS?", ["Prevents palpitations", "Raises BP", "Expands volume", "Cures it"], 0, "Low-dose BB can prevent palpitations."),
      Q("presentation", "Which GI symptoms can POTS cause?", ["Nausea, cramps, constipation or diarrhea", "Hematemesis", "Jaundice", "Dysphagia"], 0, "POTS causes CNS, orthostatic and GI symptoms."),
      Q("overview", "Who most commonly has POTS?", ["Adolescent and young adult women", "Elderly men", "Infants", "Middle-aged men with CAD"], 0, "Most common in adolescent and young adult women."),
      Q("workup", "What HR rise on tilt does the standard POTS definition use?", ["30 bpm or more without orthostatic hypotension", "5 bpm", "100 bpm", "Any rise"], 0, "Usual teaching is ≥ 30 bpm; the slide states about 10 bpm.")
    ]),

    D("mgmt-flutter", "Atrial Flutter", "Regular sawtooth flutter from a right atrial re-entry circuit; 2:1 block gives 150; ablation is preferred.", [
      S("overview", "EKG & mechanism", Tbl(["Feature", ""], [
        ["Rhythm", "<strong>Rapid, regular, narrow-complex</strong> tachycardia"],
        ["Flutter waves", "Single morphology, downward <strong>sawtooth</strong>; best in <strong>inferior leads and V1</strong>"],
        ["2:1 block", "Ventricular rate <strong>150</strong>"],
        ["3:1 block", "Ventricular rate <strong>100</strong>"],
        ["Circuit", "<strong>Re-entry in the right atrium</strong> along the <strong>tricuspid annulus</strong>; LA activated passively"]
      ]) + "<p>Risk factors, symptoms and much of management mirror AF.</p>"),
      S("treatment", "Treatment", "<p>Rate control and anticoagulation as for AF. Preferred definitive treatment: <strong>radiofrequency catheter ablation</strong> of the circuit near the tricuspid valve (highly successful). Alternative (first episode or declines ablation): <strong>synchronized cardioversion</strong>.</p>" + HY("Regular narrow tachycardia at exactly 150 = think flutter with 2:1 block."))
    ], [
      Q("overview", "A regular narrow-complex tachycardia at 150 with sawtooth waves in II, III and aVF. Diagnosis?", ["Atrial flutter with 2:1 block", "Sinus tachycardia", "AF with RVR", "MAT"], 0, "2:1 flutter gives a ventricular rate of 150."),
      Q("overview", "Where is the usual atrial flutter circuit?", ["Right atrium along the tricuspid annulus", "Pulmonary veins", "AV node", "Left ventricle"], 0, "Re-entry in the RA, typically along the tricuspid annulus."),
      Q("treatment", "Preferred definitive treatment for atrial flutter?", ["Radiofrequency catheter ablation", "Digoxin", "Watchful waiting", "Maze procedure"], 0, "Ablation of the circuit is highly successful."),
      Q("overview", "Flutter with 3:1 block gives what ventricular rate?", ["100", "150", "75", "300"], 0, "3:1 block: ventricular rate of 100."),
      Q("overview", "In which leads are flutter waves best seen?", ["Inferior leads and V1", "I and aVL", "V5 and V6", "aVR only"], 0, "Best seen in inferior leads and V1."),
      Q("treatment", "A patient with a first episode of flutter declines ablation. Alternative?", ["Synchronized cardioversion", "Adenosine as cure", "Pacemaker", "No treatment"], 0, "Synchronized cardioversion is the alternative.")
    ]),

    D("mgmt-mat", "Multifocal Atrial Tachycardia (MAT)", "Irregular tachycardia with 3+ P-wave shapes in elderly COPD patients; AV nodal blockers, not shocks.", [
      S("overview", "Features", Tbl(["Feature", ""], [
        ["Rate", "<strong>&gt; 100</strong>"],
        ["P waves", "<strong>3 or more distinct morphologies</strong> (multiple ectopic foci)"],
        ["Rhythm", "Irregular"],
        ["Who", "<strong>Elderly</strong>, frequently with <strong>COPD</strong>"]
      ])),
      S("treatment", "Treatment", "<p><strong>AV nodal blocking agents</strong> (and treat the lung disease). <strong>Cardioversion and RFCA have no effect.</strong></p>" + HY("Irregular + 3 P-wave shapes + COPD = MAT. Don't shock it."))
    ], [
      Q("overview", "An elderly COPD patient has an irregular rhythm at 115 with three different P-wave shapes. Diagnosis?", ["Multifocal atrial tachycardia", "Atrial fibrillation", "Atrial flutter", "Sinus arrhythmia"], 0, "MAT: ≥ 3 P morphologies, HR > 100, COPD."),
      Q("treatment", "Which therapy has no effect on MAT?", ["Cardioversion and catheter ablation", "Diltiazem", "Metoprolol", "Treating the COPD"], 0, "Cardioversion and RFCA have no effect."),
      Q("treatment", "How is MAT treated?", ["AV nodal blocking agents", "Synchronized cardioversion", "Ablation", "Defibrillation"], 0, "Treated with AV nodal blocking agents."),
      Q("overview", "How many P-wave morphologies define MAT?", ["Three or more", "Two", "One", "None"], 0, "3 or more distinct P-wave morphologies."),
      Q("overview", "Which lung disease is most linked with MAT?", ["COPD", "Asthma in children", "Sarcoidosis", "Cystic fibrosis"], 0, "MAT is frequently associated with COPD."),
      Q("overview", "What causes the rhythm in MAT?", ["Multiple ectopic atrial foci", "A single re-entry circuit", "An accessory pathway", "Ventricular foci"], 0, "Firing of multiple ectopic foci.")
    ]),

    D("mgmt-af-dx", "Atrial Fibrillation: Diagnosis & Classification", "Most common arrhythmia: irregularly irregular, no P waves; classify by duration; full work-up for new AF.", [
      S("overview", "EKG & mechanism", "<p>AF affects ~4.5% of the US, <strong>12% over 80</strong>; most common arrhythmia. More prevalent in women, but men more likely to develop it; more common in European descent.</p>" + Tbl(["EKG", ""], [
        ["Rhythm", "<strong>Irregularly irregular</strong>"],
        ["P waves", "<strong>Absent</strong>; flat or chaotic baseline"],
        ["QRS", "Narrow unless BBB or pre-excitation"],
        ["Rate", "RVR &gt; 100; treat the rate when &gt; 110"]
      ]) + "<ol class=\"concept-chain\"><li>Trigger + permissive substrate</li><li>Foci in <strong>pulmonary vein muscle sleeves</strong> (left atrium) fire</li><li>Atria quiver: <strong>atrial kick lost</strong></li><li>AV node bombarded (~400/min) → irregular, rapid ventricular response</li><li>Electrical and structural remodeling → AF promotes itself</li></ol>"),
      S("types", "Classification & risk factors", Tbl(["Type", "Definition"], [
        ["Reversible cause", "Classified separately (post-op, trauma)"],
        ["<strong>Paroxysmal</strong>", "Self-terminating, <strong>&lt; 7 days</strong> (often &lt; 24 h)"],
        ["<strong>Persistent</strong>", "<strong>&gt; 7 days</strong>; needs drug or electrical cardioversion"],
        ["Long-standing persistent", "Not terminated by <strong>1 year</strong>"],
        ["<strong>Permanent</strong>", "&gt; 1 year and <strong>accepted</strong>: no further rhythm attempts"],
        ["Lone AF", "&lt; 60, no structural disease or risk factors; young men; &gt; 1/3 family history"]
      ]) + "<p><strong>Risk factors</strong>: age &gt; 70, valve disease (mitral), DCM, CAD, genetics, COPD, anemia, HTN, DM, CKD, obesity. <strong>Triggers</strong>: thyrotoxicosis, alcohol intake/withdrawal, heart/lung surgery, pericarditis, chest trauma, caffeine, hypoxia, theophylline, albuterol.</p>"),
      S("presentation", "Presentation", "<p>Often minimal if rate controlled. Common: <strong>fatigue, exertional dyspnea, decreased endurance</strong>, palpitations, weakness, dizziness. Severe: rest dyspnea, angina, presyncope. Complications: <strong>embolic event, heart failure</strong>. Up to 90% of pAF episodes go unrecognized by the patient.</p>"),
      S("workup", "Work-up", Tbl(["Test", "Looking for"], [
        ["<strong>12-lead EKG</strong> (makes the diagnosis)", "AF/flutter, LVH, prior MI, conduction disease, baseline QTc"],
        ["<strong>TSH, free T4</strong>", "Thyrotoxicosis"],
        ["CBC, renal function, glucose, UA", "Anemia, kidney disease, DM, proteinuria"],
        ["<strong>TTE</strong> for every new AF", "Valves, atrial size, LVH, function (cannot exclude <strong>LA thrombus</strong>: that needs TEE)"],
        ["HS troponin q6h x3, BNP", "Ischemia, HF"],
        ["Holter / event monitor", "Suspected pAF with normal EKGs"],
        ["CT angiogram (standard teaching)", "PE when rapid AF resists meds"]
      ]))
    ], [
      Q("overview", "A 90-year-old has an irregularly irregular pulse and an EKG with no P waves and a chaotic baseline. Rhythm?", ["Atrial fibrillation", "Atrial flutter", "MAT", "Sinus arrhythmia"], 0, "Irregularly irregular with absent P waves = AF."),
      Q("types", "AF that self-terminates within 7 days is called what?", ["Paroxysmal", "Persistent", "Permanent", "Long-standing persistent"], 0, "Paroxysmal AF: < 7 days, often < 24 h."),
      Q("types", "AF lasting over a year that the patient and clinician have accepted without further rhythm attempts?", ["Permanent AF", "Persistent AF", "Lone AF", "Paroxysmal AF"], 0, "Permanent AF is accepted; no attempts to restore NSR."),
      Q("overview", "Where does AF most often originate?", ["Pulmonary vein muscle sleeves in the left atrium", "The tricuspid annulus", "The AV node", "The right ventricle"], 0, "Arrhythmogenic sleeves extending into the pulmonary veins."),
      Q("workup", "Which thyroid labs are ordered for new AF?", ["TSH and free T4", "Thyroglobulin", "Anti-TPO only", "Reverse T3"], 0, "Evaluate for thyrotoxicosis."),
      Q("workup", "What important finding can a TTE not reliably exclude in AF?", ["Left atrial appendage thrombus", "LVH", "Mitral stenosis", "Low EF"], 0, "TEE is needed to exclude LA thrombus."),
      Q("types", "A 40-year-old man with AF and no heart disease or risk factors. His father had AF. Classification?", ["Lone AF", "Permanent AF", "Valvular AF", "Post-operative AF"], 0, "Lone AF: under 60, no structural disease; often familial."),
      Q("overview", "Why does AF keep itself going over time?", ["Electrical and structural atrial remodeling", "It lowers potassium", "It thickens the septum", "It damages the SA node only"], 0, "AF is self-promoting through remodeling."),
      Q("types", "Which is a classic AF trigger?", ["Alcohol binge or withdrawal", "Hypothyroidism", "Bradycardia", "Hyperkalemia"], 0, "Triggers: thyrotoxicosis, alcohol, surgery, caffeine, albuterol and others."),
      Q("workup", "Suspected paroxysmal AF but every EKG is normal. Next test?", ["Holter or event monitor", "Repeat EKG daily", "Cardiac cath", "Tilt table"], 0, "Holter or an event device can capture pAF.")
    ]),

    D("mgmt-af-acute", "Atrial Fibrillation: Acute Management", "Unstable → synchronized cardioversion; stable → rate control (diltiazem), reversible-cause work-up, anticoagulation.", [
      S("treatment", "Unstable vs stable", Tbl(["Patient", "Plan"], [
        ["<strong>Unstable</strong> (hypotension, AMS, ischemia, pulmonary edema)", "<strong>Immediate synchronized cardioversion 150–200 J</strong>; if it fails, load meds and repeat"],
        ["<strong>Stable</strong>", "1. Telemetry admission if needed<br>2. <strong>Rate control</strong> if RVR<br>3. Reversible-cause work-up<br>4. <strong>Anticoagulate</strong> if appropriate (key if &gt; 48 h)"]
      ])),
      S("types", "Rate-control drugs", Tbl(["Drug", "When"], [
        ["<strong>Diltiazem 10–20 mg IV bolus</strong> → drip for HR &lt; 100", "<strong>Drug of choice for most</strong>; skip the bolus if BP is soft"],
        ["<strong>Metoprolol IV</strong>", "Ischemia, MI or CAD"],
        ["Amiodarone IV drip", "May cardiovert"],
        ["Digoxin IV", "Rarely; less effective"]
      ]) + "<p>Anticoagulation choices: <strong>enoxaparin 1 mg/kg SQ BID</strong>, heparin drip, or a DOAC.</p>"),
      S("workup", "Who is admitted?", "<p>Known pAF with good cardiology follow-up: adjust meds in the ED, outpatient follow-up. <strong>Any new-onset AF</strong>: 23-hour admission. Any complication (e.g., <strong>pulmonary edema</strong> from RVR): admit.</p>" + HY("Before any BB or CCB, exclude pre-excitation (WPW): blocking the AV node drives impulses down the accessory pathway."))
    ], [
      Q("treatment", "AF at 160 with BP 74/40 and confusion. Treatment?", ["Immediate synchronized cardioversion 150-200 J", "Diltiazem bolus", "Oral metoprolol", "Start apixaban and observe"], 0, "Unstable AF: immediate synchronized cardioversion."),
      Q("types", "Stable AF with RVR in most patients. Drug of choice?", ["Diltiazem IV", "Digoxin IV", "Adenosine", "Lidocaine"], 0, "Cardizem bolus then drip is the DOC for most."),
      Q("types", "Stable AF with RVR in a patient having an MI. Preferred rate-control drug?", ["IV metoprolol", "Diltiazem", "Digoxin", "Flecainide"], 0, "Metoprolol is the drug of choice with ischemia, MI or CAD."),
      Q("workup", "Which AF patient needs admission?", ["Any new-onset AF", "Known pAF with good follow-up and controlled rate", "Nobody", "Only those over 90"], 0, "New-onset AF benefits from a 23-hour admission."),
      Q("types", "Why use caution with IV amiodarone for rate control?", ["It may cardiovert the patient", "It never slows the rate", "It causes hyperkalemia", "It is a beta agonist"], 0, "Amiodarone has potential for cardioversion."),
      Q("treatment", "Therapeutic enoxaparin dose for AF?", ["1 mg/kg SQ twice daily", "40 mg SQ daily", "5000 units SQ TID", "1 mg/kg IV once"], 0, "Lovenox 1 mg/kg SQ BID."),
      Q("workup", "What must be excluded before giving a BB or CCB in AF?", ["A pre-excitation syndrome such as WPW", "Hypothyroidism", "Hyperkalemia", "Pregnancy"], 0, "AV nodal blockade in pre-excited AF promotes conduction down the accessory pathway."),
      Q("treatment", "When does anticoagulation matter most in acute AF?", ["When AF has lasted more than 48 hours", "Only after 1 year", "Never in the ED", "Only for flutter"], 0, "Anticoagulation is more important if AF > 48 hours.")
    ]),

    D("mgmt-af-rhythm", "Atrial Fibrillation: Rate vs Rhythm Control", "Most new AF gets rhythm control (cardioversion + antiarrhythmic, then ablation); frail elderly get rate control; AV node ablation + PPM as a last resort.", [
      S("treatment", "Choosing a strategy", Tbl(["Rate control", "Rhythm control"], [
        ["Target resting HR ~80", "Restore and keep NSR"],
        ["<strong>Frail, elderly (80+)</strong>, limited activity", "<strong>Most patients</strong>, younger or symptomatic from lost atrial kick"],
        ["<strong>BB or non-DHP CCB</strong> first line; amiodarone or digoxin in decompensated HFrEF", "Cardioversion + antiarrhythmic (repeatable) → RF ablation or Maze"]
      ]) + "<p>Why restore NSR: AF predicts CV mortality; NSR improves hemodynamics, exercise tolerance, HF symptoms, and slows or reverses remodeling.</p>"),
      S("types", "Cardioversion & antiarrhythmics", "<p><strong>Cardioversion</strong>: normalize K and O2, NPO 6 h, therapeutic antiarrhythmic, sedation, <strong>TEE first</strong> to exclude LA thrombus, <strong>120–200 J biphasic</strong>. 90% success in young patients with short-duration AF. <strong>Continue anticoagulation</strong> after.</p>" + Tbl(["Drug", "Key point"], [
        ["<strong>Flecainide, propafenone</strong> (IC)", "<strong>No structural heart disease</strong> (no CAD or LV dysfunction); \"pill in the pocket\""],
        ["<strong>Amiodarone</strong> (III)", "DOC with <strong>CAD or HF</strong>; most effective; thyroid, lung, liver, neuro, skin/corneal toxicity"],
        ["<strong>Sotalol</strong> (III)", "OK in CAD; <strong>avoid in HF or long QT</strong>; watch K"],
        ["<strong>Dofetilide</strong> (III)", "<strong>3-day inpatient start</strong> (QT); safe in HFrEF and CAD"],
        ["<strong>Dronedarone</strong>", "All 4 classes; <strong>contraindicated in permanent AF and HF</strong>"]
      ]) + "<p>Class III drugs prolong QT: monitor QTc, K, Mg. Interactions: other antiarrhythmics, antipsychotics, ondansetron, macrolides, quinolones, azoles, HAART.</p>"),
      S("presentation", "When drugs fail", Tbl(["Option", "When"], [
        ["<strong>RF catheter ablation</strong> (pulmonary vein isolation)", "Lifestyle-limiting AF + failed/intolerant of ≥ 1 antiarrhythmic. 60% after one, 80% after several; best in short-duration AF. <strong>No mortality benefit, no change in anticoagulation.</strong> Risks: perforation, tamponade, flutter, access injury"],
        ["<strong>Cox-Maze</strong>", "Only during cardiac surgery for another reason (valve, CABG)"],
        ["<strong>AV node ablation + permanent pacemaker</strong>", "Can't hold NSR and can't tolerate BB/CCB (tachy-brady, hypotension). Pacer dependent, <strong>still anticoagulated</strong>"]
      ]) + HY("Ablation doesn't get anyone off anticoagulation; neither does AV node ablation (the atria still fibrillate)."))
    ], [
      Q("treatment", "A frail 90-year-old with a walker and new AF. Strategy?", ["Rate control with a BB or non-DHP CCB", "Catheter ablation", "Repeated cardioversion", "Maze procedure"], 0, "Frail elderly patients are best suited to rate control."),
      Q("treatment", "Target resting heart rate for AF rate control?", ["About 80 bpm", "Under 50 bpm", "About 120 bpm", "Exactly 60 bpm"], 0, "Rate control aims for an optimal 80 bpm."),
      Q("types", "A 45-year-old with AF and a structurally normal heart wants a 'pill in the pocket.' Which drug?", ["Flecainide", "Amiodarone", "Dofetilide", "Digoxin"], 0, "Class IC drugs are for patients without structural heart disease."),
      Q("types", "Antiarrhythmic of choice for AF with CAD and heart failure?", ["Amiodarone", "Flecainide", "Dronedarone", "Sotalol"], 0, "Amiodarone has less proarrhythmic effect in heart disease."),
      Q("types", "Which antiarrhythmic requires a 3-day hospital stay to start?", ["Dofetilide", "Amiodarone", "Flecainide", "Metoprolol"], 0, "FDA mandates inpatient monitoring for dofetilide."),
      Q("types", "Dronedarone is contraindicated in which patients?", ["Permanent AF and heart failure", "CAD risk factors", "Paroxysmal AF", "After cardioversion"], 0, "Higher mortality in permanent AF and HF."),
      Q("types", "Which test is done right before elective cardioversion to look for clot?", ["TEE", "TTE", "CT head", "Chest X-ray"], 0, "TEE; cardiovert if no LA thrombus."),
      Q("presentation", "A symptomatic 55-year-old relapses into AF after two cardioversions on two antiarrhythmics. Likely next step?", ["RF catheter ablation", "Permanent rate control only", "Stop anticoagulation", "Maze without other surgery"], 0, "Failed cardioversions and antiarrhythmics → ablation."),
      Q("presentation", "A 70-year-old faints on low-dose metoprolol and diltiazem, failed four cardioversions and digoxin. Best option?", ["AV node ablation and permanent pacemaker", "Higher-dose diltiazem", "Fifth cardioversion", "Stop all anticoagulation"], 0, "Can't tolerate rate control and can't hold NSR → AV node ablation + PPM."),
      Q("presentation", "After AV node ablation and pacemaker, does the patient still need anticoagulation?", ["Yes, the atria still fibrillate", "No, the stroke risk is gone", "Only aspirin", "Only for 6 weeks"], 0, "They still require anticoagulation."),
      Q("presentation", "When is a Cox-Maze procedure done?", ["During cardiac surgery for another reason", "As first-line therapy", "Instead of anticoagulation", "In the ED"], 0, "Maze is done when the patient is having cardiac surgery anyway."),
      Q("presentation", "Does catheter ablation let a patient stop anticoagulation?", ["No; there's no change in anticoagulation strategy", "Yes, always", "Yes, if successful once", "Only if under 60"], 0, "RFCA is not done to get off anticoagulation.")
    ]),

    D("mgmt-af-stroke", "Atrial Fibrillation: Stroke Prevention", "CHA2DS2-VASc decides anticoagulation, HAS-BLED estimates bleeding; DOACs preferred except mechanical valves or mitral disease; Watchman if bleeding.", [
      S("overview", "Why AF clots", "<p>Quivering atria barely empty → static blood, especially in the <strong>left atrial appendage</strong>. Thrombus is <strong>assumed after ≥ 48 h</strong> of AF, even paroxysmal. AF causes <strong>~20% of ischemic strokes</strong>; <strong>5x</strong> the risk of NSR; strokes are larger and more often hemorrhagic. Embolic stroke 5–6%/year, <strong>&gt; 10% with rheumatic valve disease</strong>; higher in women and with age. <strong>Paroxysmal and permanent AF carry the same stroke risk.</strong></p>"),
      S("workup", "CHA2DS2-VASc & HAS-BLED", Tbl(["CHA2DS2-VASc", "Points"], [
        ["<strong>C</strong>HF / LV dysfunction", "1"], ["<strong>H</strong>ypertension", "1"], ["<strong>A</strong>ge ≥ 75", "2"], ["<strong>D</strong>iabetes", "1"],
        ["<strong>S</strong>troke / TIA / embolism", "2"], ["<strong>V</strong>ascular disease (MI, PAD, aortic plaque)", "1"], ["<strong>A</strong>ge 65–74", "1"], ["<strong>S</strong>ex category (female)", "1"]
      ]) + Tbl(["Score", "Plan"], [
        ["0–1", "EC aspirin 81–325 mg"],
        ["2", "Individualize; <strong>anticoagulation preferred</strong>"],
        ["≥ 3", "<strong>Anticoagulate</strong>: DOAC preferred over warfarin"]
      ]) + "<p><strong>HAS-BLED</strong>: HTN (SBP &gt; 160), abnormal renal/liver (1 each), stroke, bleeding history, labile INR, elderly &gt; 65, drugs/alcohol (1 each). <strong>&gt; 3 = high bleeding risk</strong>: correct risks. HAS-BLED higher than CHA2DS2-VASc → bleeding may outweigh benefit. Scores apply to <strong>non-valvular</strong> AF only.</p>"),
      S("treatment", "Anticoagulants & devices", Tbl(["Agent", "Key point"], [
        ["<strong>Apixaban</strong> 5 mg BID (Xa)", "2.5 mg BID if 2 of: SCr ≥ 1.5, age ≥ 80, weight ≤ 60 kg; OK in ESRD"],
        ["<strong>Rivaroxaban</strong> 20 mg daily with largest meal (Xa)", "15 mg if GFR 15–50"],
        ["<strong>Dabigatran</strong> 150 mg BID (thrombin)", "Avoid GFR ≤ 30; reversal agent exists"],
        ["<strong>Edoxaban</strong> 60 mg daily (Xa)", "30 mg if GFR ≤ 50; not if GFR ≥ 95 or ≤ 30"],
        ["<strong>Warfarin</strong>, INR 2–3", "DOC for <strong>mechanical valves, significant native mitral disease, ESRD</strong>"],
        ["<strong>Watchman</strong> (LAA occluder)", "High stroke risk + <strong>bleeding on anticoagulation</strong>; AC 4–6 weeks then aspirin alone"],
        ["<strong>LAA clip</strong>", "Only during other cardiac surgery; then aspirin alone"]
      ]) + "<p>Even after successful cardioversion, keep AC or ASA as indicated: patients relapse, and up to 90% of episodes go unnoticed.</p>" + Mn("CHA2DS2-VASc", "The two 2-pointers: A2 (age ≥ 75) and S2 (prior stroke/TIA)."))
    ], [
      Q("workup", "A 90-year-old man with AF has a TIA and no other history. CHA2DS2-VASc score?", ["4", "2", "3", "5"], 0, "Age ≥ 75 = 2, TIA = 2: total 4."),
      Q("workup", "CHA2DS2-VASc of 3 in non-valvular AF. Management?", ["Anticoagulate, preferably with a DOAC", "Aspirin alone", "Nothing", "Clopidogrel alone"], 0, "Score ≥ 3: warfarin or DOAC, DOAC preferred."),
      Q("workup", "CHA2DS2-VASc of 0 per the lecture. Prevention?", ["Enteric-coated aspirin 81-325 mg", "Apixaban", "Warfarin", "Watchman"], 0, "Score 0-1: EC aspirin alone per the slide."),
      Q("treatment", "A patient with AF and a mechanical mitral valve needs anticoagulation. Which drug?", ["Warfarin", "Apixaban", "Rivaroxaban", "Dabigatran"], 0, "DOACs can't be used with mechanical valves or significant mitral disease."),
      Q("treatment", "An 82-year-old weighing 55 kg with SCr 1.2 takes apixaban for AF. Dose?", ["2.5 mg twice daily", "5 mg twice daily", "10 mg twice daily", "20 mg daily"], 0, "Two of three criteria (age ≥ 80, weight ≤ 60 kg) → 2.5 mg BID."),
      Q("overview", "How does paroxysmal AF compare with permanent AF in stroke risk?", ["No different", "Paroxysmal is much lower", "Paroxysmal needs no prophylaxis", "Permanent is lower"], 0, "Stroke risk is no different; all types need prophylaxis."),
      Q("treatment", "An AF patient with CHA2DS2-VASc 5 keeps having GI bleeds on apixaban. Option?", ["Watchman left atrial appendage occluder", "Double the dose", "Switch to dabigatran 300 mg", "Stop all therapy"], 0, "Watchman suits high stroke risk with bleeding on anticoagulation."),
      Q("workup", "What HAS-BLED score signals high bleeding risk?", ["More than 3", "1", "0", "Any score"], 0, "HAS-BLED > 3 = high risk; correct risks such as HTN."),
      Q("overview", "After how long is left atrial thrombus assumed in AF?", ["48 hours", "7 days", "1 hour", "1 year"], 0, "Thrombus is assumed after 48 hours or more."),
      Q("treatment", "How should rivaroxaban be taken?", ["20 mg once daily with the largest meal", "5 mg twice daily fasting", "150 mg twice daily", "60 mg daily at bedtime"], 0, "Xarelto 20 mg daily with the largest meal."),
      Q("overview", "Where do AF clots usually form?", ["Left atrial appendage", "Right ventricle", "Pulmonary veins", "Aortic root"], 0, "Blood stagnates in the LAA."),
      Q("treatment", "After Watchman placement, how long is anticoagulation continued?", ["4-6 weeks, then aspirin alone", "Lifelong", "None", "1 year"], 0, "AC for 4-6 weeks while it epithelializes, then ASA.")
    ])
  ]);
}());
