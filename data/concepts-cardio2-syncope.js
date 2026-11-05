/*
  Cardio Part 2 Concepts: Syncope.
  Source: source-material/cardio-part-2/text/syncope.md. Anything the slides
  only imply is labeled "Clarification (standard physiology)".
  Question ids are "<concept id>|<index>": only APPEND questions.
*/
(function () {
  "use strict";
  var H = window.DiseaseContent;
  var Tbl = H.Tbl, HY = H.HY, Mn = H.Mn, S = H.S, Q = H.Q, D = H.D, L = H.L;
  function chain(steps) { return '<ol class="concept-chain">' + steps.map(function (s) { return "<li>" + s + "</li>"; }).join("") + "</ol>"; }
  function clar(text) { return "<p><strong>Clarification (standard physiology):</strong> " + text + "</p>"; }
  function traps(items) { return "<ul>" + items.map(function (i) { return "<li>" + i + "</li>"; }).join("") + "</ul>"; }

  window.CARDIO2_CONCEPTS_SYNCOPE = L("syncope", "Syncope", [

    D("sync-global-hypoperfusion", "Syncope means the whole brain briefly lost flow", "True syncope is a short, global drop in brain perfusion, so it starts suddenly, lasts seconds, and fixes itself once the patient is flat; anything else that causes LOC is a mimic.", [
      S("idea", "The idea", "<p>The brain needs constant flow. When cardiac output or BP drops for a few seconds, the whole cortex goes offline → the patient loses consciousness and <strong>postural tone</strong> and falls. Falling flat puts the head level with the heart, flow returns, and the patient wakes <strong>spontaneously and completely</strong>, usually within a minute.</p><p>That definition is why <strong>seizures, hypoglycemia, intoxication, concussion</strong> are <em>not</em> syncope: they cause LOC without global hypoperfusion, and they don't fix themselves the moment the patient lies down.</p>"),
      S("chain", "Cause → effect", chain([
        "Trigger drops CO or BP (reflex, orthostatic, or cardiac)",
        "Global cerebral hypoperfusion",
        "Loss of consciousness + loss of postural tone → fall",
        "Supine position restores brain flow",
        "Spontaneous, complete recovery within ~1 minute"
      ]) + Tbl(["Category", "What drops", "Example"], [
        ["Reflex", "Vascular tone ± HR (vagal overcorrection)", "Vasovagal, situational, carotid sinus"],
        ["Orthostatic", "Venous return on standing, not compensated", "Diuretics, volume loss, Parkinson's"],
        ["Cardiac", "Output (pump, rhythm, obstruction)", "AS, HCM, VT, complete block, PE"]
      ])),
      S("bedside", "Why it matters clinically", Tbl(["Syncope", "Seizure"], [
        ["Low tone, falls limp", "High tone, tonic-clonic from the start"],
        ["Brief jerks (seconds)", "Rhythmic activity &gt; 30 s"],
        ["Wakes clear", "<strong>Postictal confusion</strong>, lateral tongue bite"]
      ]) + "<p>Incontinence and injury occur in both. Presyncope carries the <strong>same prognosis</strong> as syncope, so it gets the same work-up.</p>" + HY("Quick, complete recovery is part of the definition: prolonged confusion points away from syncope.")),
      S("traps", "Common traps", traps([
        "<strong>Calling a few limb jerks a seizure.</strong> Brief convulsive movements happen with syncope.",
        "<strong>Calling incontinence a seizure sign.</strong> It occurs in 10–20% of syncope.",
        "<strong>Propping a fainting patient upright.</strong> It keeps the brain underperfused; lay them flat."
      ]))
    ], [
      Q("chain", "Why does a fainting patient usually wake up within a minute without treatment?", ["Lying flat restores blood flow to the brain", "Adrenaline wakes them", "The seizure ends", "Glucose rises"], 0, "Supine position restores cerebral perfusion."),
      Q("idea", "Why is hypoglycemia not classified as syncope?", ["It causes LOC without global cerebral hypoperfusion", "It never causes LOC", "It always lasts seconds", "It is cardiac"], 0, "Syncope requires transient global hypoperfusion."),
      Q("bedside", "A collapsed patient is confused for 25 minutes afterward. What does that suggest?", ["A seizure or other mimic rather than syncope", "Classic vasovagal syncope", "Orthostatic syncope", "Situational syncope"], 0, "Syncope recovery is spontaneous and complete."),
      Q("traps", "A bystander props a fainting man upright in his chair. What happens?", ["Brain perfusion stays low and recovery is delayed", "He recovers faster", "Nothing changes", "His BP rises"], 0, "Lay them flat."),
      Q("chain", "Which of the three syncope categories depends on a drop in vascular tone from vagal overcorrection?", ["Reflex", "Orthostatic", "Cardiac", "Neurologic"], 0, "Reflex syncope: vasodilation ± bradycardia."),
      Q("bedside", "Why is presyncope worked up the same way as syncope?", ["It shares the same causes and prognosis", "It always becomes syncope", "It is always cardiac", "It requires an EEG"], 0, "Same prognosis."),
      Q("traps", "Which finding is equally common in syncope and seizure?", ["Urinary incontinence", "Postictal confusion", "Lateral tongue biting", "Tonic-clonic activity from the outset"], 0, "Incontinence and injury occur in both."),
      Q("chain", "Why does a person lose postural tone in syncope?", ["The whole brain, including tone-maintaining centers, goes offline", "Muscles become ischemic", "Potassium rises", "The spinal cord is injured"], 0, "Global cerebral hypoperfusion.")
    ]),

    D("sync-reflex-overcorrection", "Reflex syncope: the autonomic overcorrection", "A trigger first raises sympathetic tone; the body overcorrects with a vagal surge, dropping vascular tone and heart rate together, and the prodrome is the warning.", [
      S("idea", "The idea", "<p>In vasovagal syncope the nervous system <strong>overreacts</strong>. A trigger (standing, fear, blood, pain) causes an initial sympathetic rise, then a <strong>reflex vagal overcorrection</strong>: parasympathetic up, sympathetic down. Two things fall at once: <strong>vascular tone</strong> (vasodepressor) and often <strong>heart rate</strong> (cardioinhibitory).</p><p>The same autonomic shift causes the <strong>prodrome</strong>: warmth, sweating, nausea, pallor, tunnel vision. That warning is why lying down during the prodrome often aborts the faint.</p>" + clar("the vasodepressor vs cardioinhibitory split is standard teaching; the slides describe 'vasodilation and/or bradycardia'.")),
      S("chain", "Cause → effect", chain([
        "Trigger (prolonged standing, fear, blood, pain, crowded hot room)",
        "Initial sympathetic rise",
        "Reflex vagal overcorrection: parasympathetic ↑, sympathetic ↓",
        "Vasodilation ± bradycardia → systemic hypotension",
        "Cerebral hypoperfusion → faint (after a warm, sweaty, nauseous prodrome)"
      ]) + Tbl(["Reflex type", "Trigger hits", "Example"], [
        ["Vasovagal", "Emotion, standing", "Blood draw"],
        ["Situational", "Vagus / intrathoracic pressure", "Micturition, cough, swallow, defecation"],
        ["Carotid sinus", "Baroreceptor pressure", "Shaving, tight collar, head turn (older men)"]
      ])),
      S("bedside", "Why it matters clinically", "<p>Treatment follows the mechanism: <strong>avoid triggers</strong>, <strong>lie supine</strong> with prodrome, keep the tank full (<strong>2–2.5 L fluids, salt</strong>). Benign, discharged home, but injury in 30%. Older adults may have <strong>no prodrome</strong>, so falls and injuries are more common.</p>" + HY("A long history of faints starting before 40 with triggers and prodrome = reflex.")),
      S("traps", "Common traps", traps([
        "<strong>\"Vasovagal is just low heart rate.\"</strong> Vasodilation alone can do it; HR may be normal.",
        "<strong>Expecting a prodrome in the elderly.</strong> They often have none or don't remember it.",
        "<strong>Restricting fluids.</strong> More volume buffers the drop; hydrate and add salt."
      ]))
    ], [
      Q("chain", "During a vasovagal faint, what happens to sympathetic and parasympathetic tone?", ["Sympathetic falls and parasympathetic rises", "Both rise", "Sympathetic rises and parasympathetic falls", "Neither changes"], 0, "Reflex vagal overcorrection."),
      Q("bedside", "A woman feels warm, sweaty and nauseous while standing in a hot church. What should she do right away?", ["Lie down", "Stand still and lock her knees", "Walk outside quickly", "Drink coffee"], 0, "Supine position during prodrome aborts the faint."),
      Q("chain", "Why does adding salt and fluid help recurrent vasovagal syncope?", ["A fuller circulation buffers the reflex drop in BP", "It slows the heart", "It blocks the vagus nerve", "It raises potassium"], 0, "Hydrate 2-2.5 L and add salt."),
      Q("traps", "A vasovagal patient's heart rate stayed at 80 while BP fell to 70/40. Is that consistent?", ["Yes; vasodilation alone can cause reflex syncope", "No; vasovagal always causes bradycardia", "No; this must be cardiac", "Only in children"], 0, "Vasodilation and/or bradycardia."),
      Q("idea", "What produces the warning symptoms before a vasovagal faint?", ["The same autonomic shift that drops BP", "A seizure aura", "Low blood sugar", "An arrhythmia"], 0, "Prodrome is autonomic."),
      Q("bedside", "Why are injuries more likely when older adults have reflex syncope?", ["They may have no prodrome to warn them", "They faint for longer", "Their BP is higher", "They have seizures"], 0, "Lack of prodrome raises injury risk."),
      Q("chain", "How does a hard coughing fit trigger situational syncope?", ["High intrathoracic pressure cuts venous return and stimulates vagal reflexes", "It causes a PE", "It shocks the heart", "It raises preload"], 0, "Situational triggers raise intrathoracic pressure or stimulate the vagus."),
      Q("chain", "Pressing on the carotid sinus in a susceptible older man causes what response?", ["Bradycardia, asystole or hypotension", "Tachycardia and hypertension", "Torsades", "Atrial fibrillation"], 0, "Carotid sinus hypersensitivity.")
    ]),

    D("sync-standing-compensation", "Standing up: what keeps you conscious", "Standing pools blood in the legs; baroreceptors respond by squeezing vessels and speeding the heart. Orthostatic syncope is a failure of that response, and POTS is an overshoot of the heart rate.", [
      S("idea", "The idea", "<p>On standing, ~500 mL+ of blood pools in the legs → venous return, stroke volume and BP dip. <strong>Carotid and aortic baroreceptors</strong> respond within seconds: <strong>peripheral vasoconstriction</strong>, ↑ HR, ↑ contractility.</p><p><strong>Orthostatic hypotension</strong> happens when one part of the fix fails: too little volume, <strong>drugs</strong> blocking the vessels or heart (diuretics, α and β blockers, nitrates, TCAs, antipsychotics), or broken <strong>autonomic</strong> nerves (Parkinson's, neuropathy). <strong>POTS</strong> is different: vessels squeeze fine, but the HR overshoots, so patients feel awful but <strong>rarely faint</strong>.</p>" + clar("the pooled-volume figure is standard physiology; the slides give the compensation steps.")),
      S("chain", "Cause → effect", chain([
        "Stand up → blood pools in legs → ↓ venous return → ↓ SV, BP dips",
        "Baroreceptors fire → sympathetic surge",
        "Vasoconstriction + ↑ HR + ↑ contractility restore BP",
        "If volume is low, drugs block the response, or nerves fail → BP stays down",
        "SBP falls ≥ 20 or DBP ≥ 10 within 3 min → lightheadedness → syncope"
      ]) + Tbl(["", "Orthostatic hypotension", "POTS"], [
        ["BP on standing", "<strong>Falls</strong> ≥ 20/10", "Holds (vasoconstriction intact)"],
        ["HR", "May rise (or not, if on BB or autonomic failure)", "<strong>Exaggerated rise</strong>"],
        ["Syncope", "Common", "Rare; presyncope common"],
        ["Typical patient", "Elderly, polypharmacy, Parkinson's", "Young women"]
      ])),
      S("bedside", "Why it matters clinically", "<p>Fix the broken link: review meds (most common fix in the elderly), replace volume, rise slowly. Midodrine (α1) replaces lost vasoconstriction; fludrocortisone expands volume. Prevalence is &gt; 20% over 70.</p>" + HY("Elderly man on HCTZ + doxazosin + metoprolol who faints getting out of bed: three broken links at once.")),
      S("traps", "Common traps", traps([
        "<strong>Expecting tachycardia in every orthostatic patient.</strong> Beta blockers and autonomic failure blunt it.",
        "<strong>Calling POTS orthostatic hypotension.</strong> In POTS the BP holds; the HR is the problem.",
        "<strong>Checking BP only at 1 minute.</strong> The definition allows up to 3 minutes."
      ]))
    ], [
      Q("chain", "What is the first thing that happens to stroke volume when someone stands up?", ["It falls because blood pools in the legs", "It rises", "It stays the same", "It doubles"], 0, "Pooling lowers venous return."),
      Q("chain", "A patient on doxazosin stands up and faints. Which compensation did the drug block?", ["Alpha-1 mediated vasoconstriction", "Beta-1 heart rate rise", "ADH release", "Vagal tone"], 0, "Alpha blockers block vasoconstriction."),
      Q("traps", "An orthostatic patient on metoprolol has no rise in heart rate when BP drops. Why?", ["The beta blocker blunts the compensatory tachycardia", "He isn't orthostatic", "He has POTS", "His volume is high"], 0, "Beta blockers blunt the HR response."),
      Q("idea", "Why do POTS patients rarely faint even though their heart races?", ["Their vasoconstriction still works, so BP holds", "Their BP rises too high", "Their HR falls", "They have no symptoms"], 0, "Intact baroreceptor reflex."),
      Q("bedside", "Midodrine helps orthostatic symptoms by replacing which part of the response?", ["Vasoconstriction", "Heart rate", "Volume", "Vagal tone"], 0, "Midodrine is an alpha-1 agonist."),
      Q("bedside", "How does fludrocortisone help orthostatic symptoms?", ["Expands blood volume through salt and water retention", "Constricts vessels", "Speeds the heart", "Blocks the vagus"], 0, "Mineralocorticoid."),
      Q("chain", "Why does Parkinson's disease cause orthostatic syncope?", ["Autonomic failure prevents the reflex vasoconstriction and HR rise", "It lowers blood volume", "It causes heart block", "It blocks venous return directly"], 0, "Autonomic dysfunction."),
      Q("traps", "BP is normal at 1 minute of standing but falls 25 points at 3 minutes. Is that orthostatic hypotension?", ["Yes; the definition allows up to 3 minutes", "No; it must drop at 1 minute", "No; only diastolic counts", "Only if HR rises"], 0, "Sustained drop within 3 minutes.")
    ]),

    D("sync-fixed-output", "Exertional syncope: a pump that can't keep up", "Exercise dilates the muscle beds; a heart with fixed outflow (AS) or dynamic obstruction (HCM) can't raise output to match, so BP crashes during or right after exertion.", [
      S("idea", "The idea", "<p>During exercise, muscle arterioles dilate and SVR falls. A normal heart raises CO to keep BP up. In <strong>aortic stenosis</strong> the valve fixes how much blood can get out; in <strong>HCM</strong> the thick septum obstructs outflow, and the obstruction gets <strong>worse with exertion and dehydration</strong> (less filling, smaller cavity). Either way: dilated vessels + output that can't rise = <strong>hypotension</strong> → syncope.</p><p>This is why exertional syncope is a <strong>cardiac red flag</strong> and a harbinger of sudden death.</p>" + clar("the 'smaller cavity worsens HCM obstruction' reasoning is standard physiology behind the slide's 'worse with exertion/dehydration'.")),
      S("chain", "Cause → effect", chain([
        "Exercise → muscle vasodilation → ↓ SVR",
        "Normal heart: ↑ CO keeps MAP up",
        "AS: fixed valve area caps output; HCM: obstruction worsens with less filling",
        "CO can't rise to match the falling SVR",
        "BP crashes → exertional (pre)syncope, angina, dyspnea"
      ]) + Tbl(["", "AS", "HCM"], [
        ["Who", "Elderly men", "Young athletes, family history"],
        ["Murmur", "Harsh, RUSB → carotids", "Systolic ejection; LVH on EKG"],
        ["Worse with", "Exertion", "Exertion, dehydration (less preload)"],
        ["Test", "Echo", "TTE"]
      ])),
      S("bedside", "Why it matters clinically", "<p>Exertional syncope gets an <strong>echo</strong> and often a <strong>stress test</strong>; severe AS goes to <strong>valve replacement</strong>. Young athletes: ask about family history of sudden death (HCM is autosomal dominant).</p>" + HY("Syncope DURING exertion = cardiac until proven otherwise. Syncope after standing still in heat = reflex.")),
      S("traps", "Common traps", traps([
        "<strong>Giving lots of nitrates or diuretics to HCM.</strong> Less preload shrinks the cavity and worsens obstruction (standard teaching).",
        "<strong>Calling every post-exercise faint vasovagal.</strong> Faints during exertion are cardiac red flags.",
        "<strong>Assuming a normal exam rules out HCM.</strong> Exam may be normal; get the echo."
      ]))
    ], [
      Q("chain", "Why does severe aortic stenosis cause syncope during exercise?", ["Output can't rise past the fixed valve to match exercise vasodilation", "Exercise triggers a vagal reflex", "The valve leaks", "Exercise raises SVR"], 0, "Fixed outflow."),
      Q("chain", "An HCM patient becomes dehydrated during a race. What happens to the outflow obstruction?", ["It worsens because the smaller LV cavity narrows the outflow tract", "It improves", "It disappears", "It is unaffected"], 0, "Less preload worsens dynamic obstruction."),
      Q("idea", "What happens to systemic vascular resistance during exercise?", ["It falls as muscle beds dilate", "It rises sharply", "It stays constant", "It doubles"], 0, "Exercise-induced vasodilation."),
      Q("bedside", "Which history points most strongly to cardiac syncope?", ["Fainting in the middle of a basketball game", "Fainting at a blood draw", "Fainting after standing in a hot room", "Fainting while urinating"], 0, "Exertional syncope is a red flag."),
      Q("traps", "Why could a diuretic worsen symptoms in HCM?", ["Lower preload shrinks the LV and worsens obstruction", "It raises BP", "It causes AF", "It thickens the septum"], 0, "Standard teaching."),
      Q("bedside", "Which test fits syncope that occurs with exercise?", ["Echo and exercise stress testing", "Tilt table", "Carotid massage", "EEG"], 0, "Structural evaluation and stress testing."),
      Q("chain", "Why is AS the leading structural cause of syncope in the elderly but HCM in the young?", ["AS is degenerative calcification with age; HCM is genetic and shows up early", "AS is genetic", "HCM only affects the elderly", "They are the same disease"], 0, "Older: AS; younger: HOCM."),
      Q("bedside", "What is the definitive treatment for syncope from severe AS?", ["Aortic valve replacement", "Salt tablets", "Beta blocker alone", "Tilt training"], 0, "High mortality untreated.")
    ]),

    D("sync-cardiac-clues", "Why some clues point to the heart", "Arrhythmias don't care about posture or triggers, so faints that are sudden, supine, exertional, or without warning in older or heart-disease patients point to a cardiac cause.", [
      S("idea", "The idea", "<p>Reflex and orthostatic syncope need a <strong>trigger</strong> and usually an <strong>upright posture</strong>, and the autonomic shift gives a <strong>prodrome</strong>. An arrhythmia can drop output <strong>anywhere, anytime</strong>: lying down, at rest, mid-sentence, with at most a few palpitations. Structural disease shows up with <strong>exertion</strong>.</p><p>So the history sorts patients: young + triggers + prodrome + recurrent for years = noncardiac; older, male, known heart disease, supine or exertional, sudden, few episodes, family history of sudden death = cardiac. Cardiac syncope has &gt; 30% one-year mortality, so these patients are <strong>admitted</strong>.</p>"),
      S("chain", "Cause → effect", chain([
        "Arrhythmia (VT, complete block, SSS) suddenly drops CO",
        "No autonomic build-up → no prodrome (maybe palpitations)",
        "Happens regardless of posture → can occur supine",
        "Diseased heart (prior MI, low EF, HCM) → substrate for recurrence",
        "High risk of sudden death → admit, monitor, echo"
      ]) + Tbl(["Noncardiac clues", "Cardiac clues"], [
        ["Young; recurrent since &lt; 40", "&gt; 60, male, 1–2 episodes"],
        ["Standing only; after rising", "Supine or exertional"],
        ["Warm, nauseous prodrome", "None, or palpitations"],
        ["Specific triggers", "Known structural/ischemic disease, low EF"],
        ["Normal exam", "Abnormal exam, family history of sudden death"]
      ])),
      S("bedside", "Why it matters clinically", "<p>History, exam and <strong>12-lead EKG</strong> are the only Level A tests. High-risk EKG findings (Mobitz II/3rd degree, pauses &gt; 3 s, brady &lt; 40 awake, VT/SVT &gt; 160, ischemia; suspicious: delta wave, long/short QT, Brugada, LVH, Q waves) and high-risk features (HF, SBP &lt; 90, Hct &lt; 30, SOB) → <strong>admit</strong>.</p>" + HY("Syncope lying down cannot be orthostatic.")),
      S("traps", "Common traps", traps([
        "<strong>Calling a supine faint vasovagal.</strong> Lying down removes the orthostatic stress; think arrhythmia.",
        "<strong>Discharging an older patient with one unexplained faint and a normal exam.</strong> Check the EKG and risk features first.",
        "<strong>Ignoring 'just a fall' in the elderly.</strong> Unwitnessed falls can be syncope."
      ]))
    ], [
      Q("chain", "Why can arrhythmic syncope happen while lying in bed?", ["The rhythm drops output regardless of posture", "Blood pools in the legs when supine", "Vagal tone rises when lying down", "It can't; supine syncope is impossible"], 0, "Arrhythmias don't depend on posture."),
      Q("chain", "Why does cardiac syncope often lack a prodrome?", ["The output drop is sudden with no autonomic build-up", "The patient is asleep", "Cardiac syncope is slow", "Prodrome only happens in seizures"], 0, "Sudden, no warning."),
      Q("bedside", "A 72-year-old man with prior MI and EF 30% faints once while seated. Disposition?", ["Admit for monitoring and work-up", "Discharge with hydration advice", "Tilt table as outpatient", "No work-up"], 0, "Cardiac features and structural disease."),
      Q("idea", "Which history most strongly favors reflex syncope?", ["Recurrent faints since age 15 with nausea before each one", "One faint at age 70 while lying down", "Fainting during a sprint", "Faint with no warning and a family history of sudden death"], 0, "Long history, young onset, prodrome."),
      Q("bedside", "Which EKG finding in a syncope patient is diagnostic and high risk?", ["Mobitz II block", "Sinus arrhythmia", "Single PAC", "Normal sinus rhythm"], 0, "High-grade AV block."),
      Q("traps", "A patient faints while lying on the couch watching TV. Which cause is least likely?", ["Orthostatic hypotension", "VT", "Complete heart block", "Sick sinus syndrome"], 0, "Orthostatic needs an upright posture."),
      Q("bedside", "What is the one-year mortality of documented cardiac syncope?", ["More than 30%", "Under 1%", "About 5%", "Same as vasovagal"], 0, "Harbinger of sudden death."),
      Q("chain", "Why does a family history of sudden cardiac death raise concern in a young fainter?", ["Inherited conditions like HCM, long QT or Brugada can cause fatal arrhythmias", "It suggests vasovagal syncope", "It means dehydration", "It rules out cardiac causes"], 0, "Genetic arrhythmic and structural disease.")
    ])
  ]);
}());
