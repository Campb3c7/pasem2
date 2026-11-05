/*
  Cardio Part 2 Diseases tool: Syncope lecture.
  Source: source-material/cardio-part-2/text/syncope.md. Arrhythmia details
  (blocks, WPW, VT) live in the Arrhythmias file; this file covers the syncope
  causes the deck teaches as their own topics.
  Question ids are "<disease id>|<index>": only APPEND questions.
*/
(function () {
  "use strict";
  var H = window.DiseaseContent;
  var Tbl = H.Tbl, HY = H.HY, Mn = H.Mn, S = H.S, Q = H.Q, D = H.D, L = H.L;

  var cardiacVsNon = Tbl(["Points to NONcardiac (reflex/orthostatic)", "Points to CARDIAC"], [
    ["Younger age", "Older age (&gt; 60), male"],
    ["Only when standing; after standing up", "<strong>During exertion</strong> or <strong>supine</strong>"],
    ["Prodrome: nausea, vomiting, feeling warm", "Brief prodrome (palpitations) or <strong>none</strong>"],
    ["Triggers: dehydration, pain, medical setting; cough, laugh, micturition, defecation", "Known ischemic/structural disease, prior arrhythmia, low EF"],
    ["Long history of recurrent episodes (began &lt; 40)", "Few episodes (1–2), abnormal cardiac exam, <strong>family history of sudden death</strong>"]
  ]);

  window.CARDIO2_DISEASES_SYNCOPE = L("syncope", "Syncope", [

    D("syn-vasovagal", "Vasovagal Syncope", "Most common reflex syncope: a trigger causes vagal overcorrection, vasodilation ± bradycardia, and a faint with a prodrome.", [
      S("overview", "Definition & mechanism", "<p><strong>Syncope</strong> = transient, self-limited loss of consciousness and postural tone from <strong>global cerebral hypoperfusion</strong>: sudden onset, brief (&lt; 1 min), spontaneous complete recovery. <strong>Presyncope</strong> carries the same prognosis and is worked up the same way.</p>" +
        "<p>Reflex syncope (vasovagal, situational, carotid sinus) is the <strong>most common type</strong>: <strong>90%</strong> of cases in younger adults, <strong>40%</strong> in older adults.</p>" +
        "<ol class=\"concept-chain\"><li>Trigger (prolonged standing, fear, seeing blood)</li><li>Sympathetic surge</li><li>Vagal overcorrection: parasympathetic ↑, sympathetic ↓</li><li>Vasodilation ± bradycardia → BP drops</li><li>Cerebral hypoperfusion → faint</li></ol>"),
      S("presentation", "Triggers & prodrome", Tbl(["Triggers", "Hallmark prodrome"], [
        ["Unpleasant sight, sound or smell; fear, severe pain, emotional distress; prolonged standing or kneeling; crowded or hot places", "<strong>Lightheadedness, nausea, tunnel vision, pallor, sweating, feeling warm</strong>"]
      ]) + "<p>Older patients may have no prodrome or not remember it. Benign prognosis, but <strong>injury in 30%</strong> of episodes (more with older age, recurrent falls, no prodrome).</p>"),
      S("workup", "Work-up", "<p>History, exam and <strong>12-lead EKG</strong> are the only Level A recommendations. <strong>Tilt-table testing</strong>: recurrent syncope once a cardiac cause is excluded; identifies vasovagal syncope and POTS. Vasovagal, orthostatic and medication syncope can be <strong>discharged</strong>.</p>" + cardiacVsNon),
      S("treatment", "Treatment", "<p>Non-drug first: <strong>avoid triggers</strong>, <strong>lie supine during the prodrome</strong>, <strong>hydrate well (2–2.5 L)</strong>, salt supplementation if needed.</p>" + HY("Trigger + warm/sweaty/nauseous prodrome + quick full recovery = vasovagal. Lie down, hydrate, add salt."))
    ], [
      Q("presentation", "A 19-year-old faints while having blood drawn. She felt warm, nauseous and saw her vision narrow first, then woke within seconds. Diagnosis?", ["Vasovagal syncope", "Cardiac syncope", "Seizure", "Orthostatic hypotension from drugs"], 0, "A trigger plus the classic prodrome points to vasovagal (reflex) syncope."),
      Q("overview", "What is the most common type of syncope?", ["Reflex syncope", "Cardiac syncope", "Orthostatic syncope", "Neurologic syncope"], 0, "Reflex syncope, which includes vasovagal, is the most common type."),
      Q("overview", "What happens to autonomic tone at the moment of a vasovagal faint?", ["Parasympathetic activity rises and sympathetic activity falls", "Sympathetic activity surges", "Both rise together", "Neither changes"], 0, "The ANS overcorrects: parasympathetic up, sympathetic down, causing vasodilation and sometimes bradycardia."),
      Q("treatment", "First-line management for recurrent vasovagal syncope?", ["Avoid triggers, lie down with prodrome, hydrate 2-2.5 L, salt if needed", "Permanent pacemaker", "Beta blocker for everyone", "Driving restriction for life"], 0, "Initial treatment is non-pharmacologic."),
      Q("workup", "Which test identifies vasovagal syncope after a cardiac cause is excluded?", ["Tilt-table testing", "Exercise stress test", "Holter monitor", "Cardiac catheterization"], 0, "Tilt-table testing is for recurrent syncope with cardiac causes excluded."),
      Q("presentation", "What share of vasovagal episodes cause injury?", ["About 30%", "About 1%", "About 75%", "None; it is always harmless"], 0, "Prognosis is benign, but injuries occur in about 30% of episodes."),
      Q("overview", "Why is presyncope worked up like syncope?", ["It carries the same prognosis", "It always progresses to syncope", "It is always cardiac", "It is never benign"], 0, "Presyncope should be investigated the same way because it has the same prognosis."),
      Q("workup", "A young patient with a clear vasovagal story, normal exam and normal EKG. Disposition?", ["Discharge", "Admit to telemetry", "ICU", "EP study before discharge"], 0, "Vasovagal, orthostatic and medication-induced syncope have no added morbidity or mortality: discharge.")
    ]),

    D("syn-situational", "Situational Syncope", "Reflex syncope triggered by a bodily function that stimulates the vagus nerve or raises intrathoracic pressure.", [
      S("overview", "Triggers", "<p>A subtype of reflex syncope triggered directly by a bodily function or activity:</p>" + Tbl(["Trigger", ""], [
        ["<strong>Micturition</strong> or <strong>defecation</strong>", "Vagal stimulation / straining"],
        ["<strong>Coughing</strong>, laughing", "↑ Intrathoracic pressure → ↓ venous return"],
        ["<strong>Swallowing</strong>", "Vagal"],
        ["<strong>Eating a meal</strong>", "Post-prandial"]
      ]) + HY("Faints on the toilet, mid-cough fit, or while swallowing = situational syncope.")),
      S("treatment", "Management", "<p>Same as other reflex syncope: identify and avoid the trigger, hydrate, sit or lie down when symptoms start. Generally <strong>benign</strong> and safe to discharge.</p>")
    ], [
      Q("overview", "A 60-year-old man faints while urinating at night after drinking. Which reflex type?", ["Situational syncope", "Carotid sinus syndrome", "Cardiac syncope", "Orthostatic from autonomic failure"], 0, "Micturition is a classic situational trigger."),
      Q("overview", "Which trigger fits situational syncope?", ["Coughing fit", "Seeing blood", "Shaving the neck", "Running a marathon"], 0, "Cough raises intrathoracic pressure; seeing blood is vasovagal and shaving is carotid sinus."),
      Q("overview", "How does a coughing fit cause syncope?", ["It raises intrathoracic pressure and lowers venous return", "It blocks the AV node directly", "It causes a pulmonary embolus", "It triggers a seizure"], 0, "Situational syncope stimulates the vagus or raises intrathoracic pressure."),
      Q("overview", "Situational syncope belongs to which major category?", ["Reflex mediated", "Cardiac arrhythmic", "Structural cardiac", "Orthostatic"], 0, "Reflex syncope includes vasovagal, situational and carotid sinus syndrome."),
      Q("treatment", "Prognosis of situational syncope?", ["Benign", "High 1-year mortality", "Needs an ICD", "Progresses to complete heart block"], 0, "Like other reflex syncope, it carries no increased mortality."),
      Q("overview", "Which list contains only situational syncope triggers?", ["Defecation, swallowing, eating a meal", "Fear, pain, blood", "Turning the neck, tight collar", "Exertion, palpitations"], 0, "Fear and blood are vasovagal; neck pressure is carotid sinus; exertion suggests cardiac.")
    ]),

    D("syn-carotid-sinus", "Carotid Sinus Syndrome", "Reflex syncope in older men: pressure on a hypersensitive carotid sinus causes bradycardia, asystole or hypotension.", [
      S("overview", "Mechanism & risk factors", "<p>Stimulation of the carotid sinus baroreceptors → <strong>bradycardia, asystole (&gt; 3 s) or hypotension</strong> → syncope.</p>" + Tbl(["Risk factor", ""], [
        ["<strong>Elderly men &gt; 65</strong>", "Almost exclusively"],
        ["Atherosclerotic disease", ""],
        ["Head and neck cancers", ""]
      ])),
      S("presentation", "Presentation", "<p>Syncope or near-syncope triggered by daily activities that press on the carotid sinus: <strong>shaving, turning the neck</strong>, a tight collar or necktie (standard teaching). May present as <strong>unexplained falls</strong> in older patients.</p>" + HY("Consider carotid sinus syndrome in older patients (&gt; 50) with recurrent syncope and negative cardiac work-ups.")),
      S("workup", "Assessment", "<p><strong>Carotid sinus massage</strong>, both <strong>supine and upright</strong>, with simultaneous HR and BP monitoring. Positive = <strong>asystole &gt; 3 s and/or SBP drop ≥ 50 mmHg</strong> reproducing symptoms (standard teaching; blank on the slide). Avoid massage with a carotid bruit or recent stroke/TIA (standard teaching).</p>"),
      S("treatment", "Treatment", "<p>Avoid neck pressure (loose collars, turn the whole body). Cardioinhibitory type with recurrent syncope: <strong>dual-chamber pacemaker</strong> (standard teaching).</p>")
    ], [
      Q("presentation", "A 74-year-old man passes out while shaving and turning his head. Diagnosis?", ["Carotid sinus syndrome", "Vasovagal syncope", "Situational syncope", "Brugada syndrome"], 0, "Neck pressure or rotation triggering syncope in an older man is carotid sinus syndrome."),
      Q("overview", "Who gets carotid sinus syndrome almost exclusively?", ["Men older than 65", "Young women", "Children", "Pregnant women"], 0, "Elderly men over 65, especially with atherosclerosis or head and neck cancer."),
      Q("workup", "How is carotid sinus syndrome assessed?", ["Carotid sinus massage supine and upright with HR and BP monitoring", "Tilt table only", "Carotid ultrasound only", "EEG"], 0, "The slide calls for massage in both positions with simultaneous monitoring."),
      Q("overview", "What responses does carotid sinus stimulation produce in this syndrome?", ["Bradycardia, asystole over 3 seconds, or hypotension", "Tachycardia and hypertension", "Wide-complex tachycardia", "Prolonged QT"], 0, "The reflex causes bradycardia, asystole (>3 s) or hypotension."),
      Q("presentation", "A 70-year-old with recurrent syncope has a normal echo, EKG and Holter. What should you consider?", ["Carotid sinus syndrome", "Hypertrophic cardiomyopathy", "WPW", "Long QT"], 0, "Clinical pearl: consider it in patients over 50 with recurrent syncope and negative cardiac evaluations."),
      Q("overview", "Which is a risk factor for carotid sinus syndrome?", ["Head and neck cancer", "Female sex", "Young age", "Hyperthyroidism"], 0, "Risk factors: elderly men, atherosclerosis, head and neck cancers."),
      Q("workup", "What result makes carotid sinus massage positive?", ["Asystole over 3 seconds or a large SBP drop that reproduces symptoms", "A carotid bruit", "Mild slowing of HR by 5 bpm", "Tachycardia"], 0, "Asystole > 3 s and/or SBP fall ≥ 50 mmHg with symptoms (standard teaching).")
    ]),

    D("syn-orthostatic", "Orthostatic Syncope", "Syncope after standing from drugs, volume depletion or autonomic failure; orthostatic hypotension is the measurable sign.", [
      S("overview", "Mechanism & definition", "<ol class=\"concept-chain\"><li>Upright posture → blood shifts to lower body</li><li>Cardiac output drops</li><li>Inadequate compensation (autonomic failure, volume depletion, drug side effect)</li><li>Cerebral hypoperfusion → syncope</li></ol>" +
        "<p><strong>Orthostatic hypotension</strong> = sustained drop of <strong>SBP ≥ 20</strong> or <strong>DBP ≥ 10 mmHg within 3 minutes</strong> of standing. It is a <strong>sign</strong>; orthostatic syncope is a <strong>symptom</strong>.</p>"),
      S("presentation", "Causes & presentation", Tbl(["Cause", "Examples"], [
        ["<strong>Drugs</strong>", "Diuretics, BP meds (α and β blockers), vasodilators/nitrates, TCAs, antipsychotics"],
        ["<strong>Volume depletion</strong>", "Poor intake, vomiting, diarrhea, hemorrhage/anemia"],
        ["<strong>Autonomic failure</strong>", "Autonomic neuropathy, <strong>Parkinson's</strong>"]
      ]) + "<p>Symptoms: dizziness/lightheadedness, generalized weakness, cognitive slowing, after standing up. Prevalence rises with age: <strong>&lt; 5% under 50, &gt; 20% over 70</strong>.</p>"),
      S("treatment", "Management", "<p>Review and cut offending meds, replace volume, rise slowly. Can be discharged when the cause is clear. Persistent symptoms: midodrine or fludrocortisone (see Medications).</p>" + HY("Drop of 20 systolic / 10 diastolic within 3 minutes of standing = orthostatic hypotension."))
    ], [
      Q("overview", "What defines orthostatic hypotension?", ["SBP drop of 20 or DBP drop of 10 mmHg within 3 minutes of standing", "SBP drop of 10 within 10 minutes", "HR rise of 30 within 10 minutes", "Any dizziness on standing"], 0, "Sustained SBP fall ≥ 20 or DBP fall ≥ 10 within 3 minutes."),
      Q("presentation", "An 80-year-old on hydrochlorothiazide, doxazosin and metoprolol faints right after getting out of bed. Most likely type?", ["Orthostatic syncope from medications", "Carotid sinus syndrome", "Brugada syndrome", "Situational syncope"], 0, "Diuretics and alpha and beta blockers are classic orthostatic culprits."),
      Q("presentation", "Which neurologic disease causes orthostatic syncope through autonomic failure?", ["Parkinson's disease", "Migraine", "Bell's palsy", "Myasthenia gravis"], 0, "Autonomic dysfunction such as Parkinson's."),
      Q("overview", "How common is orthostatic hypotension after age 70?", ["More than 20%", "Less than 5%", "About 1%", "Almost 100%"], 0, "Under 5% before 50, over 20% after 70."),
      Q("overview", "Orthostatic hypotension vs orthostatic syncope: which is the sign?", ["Orthostatic hypotension", "Orthostatic syncope", "Both are symptoms", "Neither"], 0, "Orthostatic hypotension is measurable; syncope is the symptom."),
      Q("presentation", "A patient with 3 days of vomiting and diarrhea faints on standing. Mechanism?", ["Volume depletion so cardiac output can't be maintained upright", "Vagal overcorrection to fear", "Accessory pathway", "Outflow obstruction"], 0, "Hypovolemia limits compensation for the upright posture."),
      Q("presentation", "Which drug class can cause orthostatic syncope?", ["Tricyclic antidepressants", "Statins", "PPIs", "Metformin"], 0, "TCAs, antipsychotics, diuretics, BP meds and nitrates.")
    ]),

    D("syn-aortic-stenosis", "Aortic Stenosis (Syncope)", "Most common structural cause of syncope in older patients: fixed outflow can't rise with exertion.", [
      S("overview", "Mechanism", "<p>Structural cardiac syncope: the heart <strong>can't raise cardiac output</strong> to match <strong>exercise-induced peripheral vasodilation</strong> → <strong>exertional syncope</strong>. Older patients: <strong>AS</strong> is most common; younger: <strong>HCM</strong>.</p><p>Cardiac syncope is a <strong>harbinger of sudden death</strong> (1-year mortality &gt; 30%).</p>"),
      S("presentation", "Presentation", "<p>Most often <strong>elderly men</strong>. <strong>Loud, harsh systolic ejection murmur at the RUSB</strong>. Severe AS triad: <strong>dyspnea on exertion, (pre)syncope, angina on exertion</strong>. May present as an <strong>unwitnessed fall</strong>.</p>"),
      S("workup", "Diagnosis & prognosis", "<p><strong>Echo</strong> confirms. High mortality untreated: <strong>aortic valve replacement</strong> usually indicated.</p>" + HY("Elderly man + exertional syncope + harsh RUSB murmur = AS → echo → valve replacement."))
    ], [
      Q("presentation", "An 82-year-old man is found on the floor after a night-time bathroom trip. He has a 3/6 systolic ejection murmur at the RUSB and severe aortic calcification on echo. Likely cause?", ["Aortic stenosis", "Vasovagal syncope", "Brugada syndrome", "Carotid sinus syndrome"], 0, "This is the deck's Mick case: structural syncope from AS."),
      Q("overview", "Most common structural cause of syncope in older patients?", ["Aortic stenosis", "HCM", "Mitral prolapse", "ASD"], 0, "Older: AS. Younger: HOCM."),
      Q("overview", "Why does AS cause syncope with exertion?", ["Fixed outflow can't raise output to match exercise vasodilation", "Exercise triggers vagal tone", "AS causes long QT", "Exercise blocks the AV node"], 0, "Inability to increase CO in response to exercise-induced peripheral vasodilation."),
      Q("presentation", "Which triad marks severe aortic stenosis?", ["Exertional dyspnea, syncope, angina", "Fever, murmur, emboli", "Hypotension, JVD, muffled sounds", "Tearing pain, pulse deficit, widened mediastinum"], 0, "DOE, presyncope/syncope and exertional angina."),
      Q("workup", "Which test diagnoses aortic stenosis?", ["Echocardiogram", "Tilt table", "D-dimer", "EEG"], 0, "Diagnosis: echo."),
      Q("workup", "Treatment for symptomatic severe AS with syncope?", ["Aortic valve replacement", "Salt and fluids", "Midodrine", "Observation only"], 0, "High mortality if untreated; valve replacement is usually indicated."),
      Q("overview", "What is the 1-year mortality after documented cardiac syncope?", ["Over 30%", "Under 1%", "About 5%", "Same as vasovagal"], 0, "Cardiac syncope is a harbinger of sudden death.")
    ]),

    D("syn-hcm", "Hypertrophic Cardiomyopathy (Syncope)", "Most common structural syncope cause in the young: thick septum obstructs outflow, worse with exertion or dehydration.", [
      S("overview", "Mechanism & genetics", "<p><strong>Autosomal dominant</strong>: ask about family history of HCM or sudden cardiac death. About <strong>1 in 4</strong> have syncope or presyncope.</p><ol class=\"concept-chain\"><li>Stiff thick LV → poor filling → ↓ SV</li><li>Septal hypertrophy → LV outflow obstruction → ↓ CO</li><li>Worse with exertion or dehydration</li></ol>"),
      S("presentation", "Presentation & exam", "<p>May be asymptomatic; DOE, <strong>exertional angina or syncope</strong>, palpitations. Exam may be normal or show <strong>S4</strong>, systolic murmur, LV lift/heave.</p>" + Tbl(["Red flags", ""], [
        ["Family history of HOCM / sudden death", ""],
        ["Systolic ejection (crescendo-decrescendo) murmur", ""],
        ["Abnormal EKG with <strong>LVH</strong>", ""]
      ])),
      S("workup", "Diagnosis", "<p><strong>Transthoracic echo</strong>. Exercise-related syncope also gets <strong>stress testing</strong>. Children/athletes: always ask about activity-related syncope and family history.</p>" + HY("Young athlete + exertional syncope + family history of sudden death = HCM until proven otherwise → TTE."))
    ], [
      Q("presentation", "A 17-year-old basketball player faints mid-game. His uncle died suddenly at 30. EKG shows LVH. Most likely cause?", ["Hypertrophic cardiomyopathy", "Vasovagal syncope", "Aortic stenosis", "Carotid sinus syndrome"], 0, "Exertional syncope in a young patient with family history: HCM."),
      Q("overview", "What is the inheritance of HCM?", ["Autosomal dominant", "X-linked recessive", "Autosomal recessive", "Mitochondrial"], 0, "Ask about family history of HCM or sudden cardiac death."),
      Q("workup", "Test to diagnose HCM?", ["Transthoracic echo", "Tilt table", "Carotid massage", "CT head"], 0, "Diagnostics: transthoracic echo."),
      Q("overview", "What worsens outflow obstruction in HCM?", ["Exertion and dehydration", "Lying down", "Squatting", "Fluids"], 0, "Obstruction gets worse with exertion or dehydration."),
      Q("presentation", "Which extra heart sound may be heard in HCM?", ["S4", "S3 only", "Opening snap", "Pericardial knock"], 0, "Nonspecific findings include S4, systolic murmur and LV heave."),
      Q("overview", "About how many HCM patients have syncope or presyncope?", ["1 in 4", "1 in 100", "Nearly all", "None"], 0, "About 1 in 4."),
      Q("overview", "Most common structural cause of syncope in younger patients?", ["Hypertrophic cardiomyopathy", "Aortic stenosis", "Mitral stenosis", "Constrictive pericarditis"], 0, "Older: AS; younger: HOCM.")
    ]),

    D("syn-long-qt", "Long QT Syndrome", "Prolonged repolarization (congenital or drug/electrolyte) that can degenerate into torsades and sudden death.", [
      S("overview", "Definition & causes", "<p>Disorder of ventricular repolarization with a <strong>prolonged QT</strong> → symptomatic ventricular arrhythmias and sudden cardiac death risk. Normal QT: <strong>≤ 470 ms men, ≤ 480 ms women</strong>. Congenital or acquired.</p>" + Tbl(["Acquired cause", "Examples"], [
        ["Antiarrhythmics", "Quinidine, procainamide, <strong>sotalol</strong>"],
        ["Psychiatric", "<strong>Haloperidol</strong>, ziprasidone, SSRIs, TCAs"],
        ["Antimicrobials", "<strong>Fluoroquinolones, macrolides, azoles</strong>"],
        ["Antiemetics", "<strong>Ondansetron</strong>"],
        ["Electrolytes", "<strong>Hypokalemia, hypomagnesemia</strong>"]
      ])),
      S("presentation", "Presentation", "<p>Asymptomatic (QT prolongation on EKG) or <strong>palpitations, syncope, sudden cardiac arrest</strong>. It can degenerate into <strong>torsades de pointes</strong>, which usually stops on its own within seconds, so it often presents as <strong>brief syncope</strong> rather than arrest.</p>"),
      S("treatment", "Management", "<p>Pulseless/unstable → <strong>ACLS</strong>. Stop QT-prolonging drugs, correct <strong>K+ and Mg2+</strong>; torsades → <strong>IV magnesium</strong> (see Arrhythmias). Congenital: beta blocker, ICD if high risk (standard teaching).</p>" + Mn("QT drugs", "Anti-ARRHYTHMICS, anti-PSYCHOTICS, anti-BIOTICS, anti-EMETICS (+ low K, low Mg)."))
    ], [
      Q("overview", "What is the upper limit of a normal QT in men per the lecture?", ["470 ms", "440 ms", "500 ms", "400 ms"], 0, "≤ 470 ms in males, ≤ 480 ms in females."),
      Q("presentation", "A woman on azithromycin and ondansetron with K+ 2.9 has a brief faint. Which rhythm is feared?", ["Torsades de pointes from long QT", "Mobitz I block", "Atrial flutter", "Sinus arrhythmia"], 0, "Macrolide + ondansetron + hypokalemia prolong the QT."),
      Q("overview", "Which electrolyte disorders prolong the QT?", ["Hypokalemia and hypomagnesemia", "Hyperkalemia and hypercalcemia", "Hypernatremia", "Hyperphosphatemia"], 0, "Low K and low Mg are the lecture's electrolyte causes."),
      Q("overview", "Which antipsychotic is a classic QT-prolonging drug?", ["Haloperidol", "Lithium", "Buspirone", "Bupropion"], 0, "Haloperidol and ziprasidone; also SSRIs and TCAs."),
      Q("presentation", "Why does torsades often present as brief syncope rather than arrest?", ["It usually resolves on its own within seconds", "It never affects output", "It is always slow", "It only happens asleep"], 0, "Torsades usually self-terminates within seconds."),
      Q("overview", "Which antimicrobial classes prolong the QT?", ["Fluoroquinolones, macrolides and azoles", "Penicillins and cephalosporins", "Tetracyclines", "Aminoglycosides only"], 0, "FQs, macrolides, azoles."),
      Q("treatment", "A pulseless patient with known long QT. First step?", ["ACLS protocol", "Oral beta blocker", "Stop ondansetron and observe", "Tilt table"], 0, "Any unstable patient without a pulse goes to ACLS.")
    ]),

    D("syn-brugada", "Brugada Syndrome", "Autosomal dominant channelopathy with coved ST elevation in V1–V2; risk of VF and sudden death; treated with an ICD.", [
      S("overview", "Epidemiology", "<p><strong>Autosomal dominant</strong>. Mostly <strong>Southeast Asian descent, M &gt; F</strong>, usually diagnosed in adulthood. Raises risk of ventricular tachyarrhythmias and <strong>sudden cardiac death</strong>.</p>" + Tbl(["Brugada pattern", "Brugada syndrome"], [
        ["Typical EKG only, asymptomatic, no other criteria", "Typical EKG <strong>plus</strong> sustained VT/VF, sudden death, or syncope"],
        ["More common; <strong>no treatment</strong>", "Less common; <strong>ICD</strong>"]
      ])),
      S("presentation", "Presentation & EKG", "<p><strong>Sudden cardiac arrest</strong> is the first presentation in up to <strong>1/3</strong> (VF or polymorphic VT); syncope; palpitations.</p>" + Tbl(["Pattern", "EKG"], [
        ["General", "<strong>Pseudo-RBBB</strong> + persistent <strong>ST elevation in V1–V2</strong>"],
        ["<strong>Type 1</strong>", "<strong>Coved</strong> \"shark fin\": ST descends with upward convexity into an inverted T"],
        ["Type 2", "<strong>Saddleback</strong>: ST drops toward baseline then rises to an upright T"]
      ])),
      S("treatment", "Triggers & management", "<p>Provoked by <strong>fever</strong>, <strong>sodium channel blockers (flecainide)</strong>, beta blockers, <strong>TCAs</strong>, alcohol, cocaine.</p><p>First line: <strong>ICD</strong>; add antiarrhythmic or ablation for recurrent arrhythmias. Pattern alone: no treatment.</p>" + HY("Coved ST elevation V1–V2 + syncope (often with fever) = Brugada syndrome → ICD."))
    ], [
      Q("presentation", "A 35-year-old Vietnamese man faints during a febrile illness. EKG shows coved ST elevation in V1-V2 with inverted T waves. Diagnosis?", ["Brugada syndrome", "Anterior STEMI", "Pericarditis", "WPW"], 0, "Type 1 coved pattern + syncope, provoked by fever."),
      Q("treatment", "First-line therapy for Brugada syndrome?", ["ICD", "Flecainide", "Beta blocker", "Digoxin"], 0, "ICD; flecainide and beta blockers can provoke it."),
      Q("presentation", "Which describes a Type 1 Brugada pattern?", ["Coved shark-fin ST elevation into an inverted T", "Saddleback ST with upright T", "Delta wave", "Diffuse ST elevation with PR depression"], 0, "Type 1 is coved; Type 2 is saddleback."),
      Q("overview", "An asymptomatic man has a Brugada EKG pattern and no other criteria. Treatment?", ["None", "ICD", "Ablation", "Amiodarone"], 0, "Brugada pattern does not require treatment without clinical criteria."),
      Q("treatment", "Which drug can unmask Brugada syndrome?", ["Flecainide", "Amlodipine", "Atorvastatin", "Lisinopril"], 0, "Sodium channel blockers such as flecainide provoke it."),
      Q("presentation", "How often is sudden cardiac arrest the first sign of Brugada syndrome?", ["Up to one third", "Never", "Always", "Under 1%"], 0, "Initial presentation in up to 1/3, from VF or polymorphic VT."),
      Q("overview", "Which population is most affected by Brugada syndrome?", ["Southeast Asian men", "Northern European women", "Children under 5", "Pregnant women"], 0, "Majority are of Southeast Asian descent, M > F."),
      Q("presentation", "Brugada EKG findings appear in which leads?", ["V1 and V2", "II, III, aVF", "I and aVL", "V5 and V6"], 0, "Pseudo-RBBB with persistent ST elevation in V1-V2.")
    ]),

    D("syn-brady-syncope", "Bradyarrhythmic Syncope", "Syncope from sick sinus, high-grade AV block, pacemaker malfunction or drugs: sudden, little warning.", [
      S("overview", "Causes", Tbl(["Cause", "Key point"], [
        ["<strong>Sick sinus syndrome</strong>", "Age-related SA node degeneration: sinus brady, <strong>pauses &gt; 3 s</strong>, tachy-brady. Syncope in ~50% who get a pacemaker. Sinus node <em>dysfunction</em> becomes <em>syndrome</em> once symptomatic."],
        ["<strong>Mobitz II / 3rd degree</strong>", "Structural conduction damage (MI, fibrosis)"],
        ["<strong>Pacemaker/ICD malfunction</strong>", "Battery, lead or infection problems: dizziness, palpitations, syncope, CP, SOB"],
        ["<strong>Drug-induced</strong>", "Beta blockers, non-DHP CCBs, clonidine, amiodarone, sotalol, flecainide, digoxin"]
      ]) + HY("Drug combinations raise the risk and often unmask underlying conduction disease.")),
      S("workup", "Work-up", "<p>12-lead EKG and cardiac monitor. Diagnostic EKG findings: <strong>Mobitz II or 3rd-degree block, alternating BBB, pauses &gt; 3 s or sinus brady &lt; 40 while awake</strong>. Recurrent symptoms during monitored arrhythmia confirm cardiac syncope; symptoms during sinus rhythm exclude it.</p>"),
      S("treatment", "Treatment", "<p>Stop offending drugs; symptomatic SSS or high-grade block → <strong>permanent pacemaker</strong>; interrogate a device that may be failing.</p>")
    ], [
      Q("overview", "A patient with sinus node dysfunction starts fainting. What is it now called?", ["Sick sinus syndrome", "Sinus arrhythmia", "Mobitz I", "Carotid sinus syndrome"], 0, "Dysfunction becomes 'syndrome' once symptomatic."),
      Q("workup", "Which awake EKG finding is diagnostic in syncope?", ["Sinus pause over 3 seconds", "Sinus rate of 58", "Single PAC", "First-degree AV block"], 0, "Pauses > 3 s or brady < 40 while awake."),
      Q("overview", "A 78-year-old on metoprolol and diltiazem has syncope with HR 38. What does the lecture warn?", ["Drug combinations raise risk and unmask conduction disease", "This is always vasovagal", "Add digoxin", "It is long QT"], 0, "Combination of meds increases risk and often unmasks conduction disease."),
      Q("overview", "Which drug is NOT a classic cause of drug-induced bradycardia?", ["Amlodipine", "Verapamil", "Sotalol", "Digoxin"], 0, "Dihydropyridines like amlodipine cause reflex tachycardia, not bradycardia."),
      Q("overview", "What problems cause pacemaker or ICD malfunction?", ["Battery, lead or infection issues", "Too much salt", "Hyperthyroidism", "Anemia"], 0, "Due to issues with the battery, leads or infection."),
      Q("workup", "During a Holter, the patient reports dizziness while the monitor shows sinus rhythm. Meaning?", ["Cardiac (arrhythmic) syncope is less likely", "Cardiac syncope is confirmed", "Needs an ICD", "Repeat the same Holter"], 0, "Symptoms during sinus rhythm exclude an arrhythmic cause."),
      Q("overview", "What percent of patients getting a pacemaker for SSS report syncope?", ["About 50%", "About 5%", "100%", "About 10%"], 0, "Syncope is seen in ~50% of patients who get a pacemaker for SSS.")
    ]),

    D("syn-obstruction", "Cardiopulmonary Obstruction Syncope", "PE, MI, aortic dissection and tamponade cause sudden syncope by acutely cutting cardiac output.", [
      S("overview", "Causes & mechanisms", Tbl(["Cause", "Mechanism", "Clues"], [
        ["<strong>Pulmonary embolism</strong>", "Acute obstruction of the pulmonary vascular bed → ↓ CO", "SOB, tachycardia; D-dimer, CT"],
        ["<strong>Acute MI</strong>", "Myocardial dyskinesia → ↓ CO", "Chest pain, troponin"],
        ["<strong>Aortic dissection</strong>", "Intimal tear → false lumen compresses true lumen → systemic flow drops", "<strong>Tearing pain to the back</strong>; CT with contrast, echo, CXR <strong>widened mediastinum</strong>"],
        ["<strong>Cardiac tamponade</strong>", "Pericardial fluid → poor diastolic filling → ↓ CO", "<strong>Hypotension, JVD, distant heart sounds</strong>; low voltage or <strong>electrical alternans</strong>; echo"]
      ])),
      S("workup", "Red-flag symptoms", Tbl(["Symptom with syncope", "Think"], [
        ["Chest pain", "MI, dissection, PE, AS"],
        ["Palpitations", "Arrhythmia"],
        ["Shortness of breath", "PE, CHF"],
        ["Abdominal or back pain", "<strong>Leaking AAA</strong> or <strong>ruptured ectopic</strong>"],
        ["Sudden, no warning, or exertional", "Arrhythmia or structural lesion"]
      ]) + "<p>ED labs: CBC, BMP, <strong>urine pregnancy</strong>, troponin, BNP, D-dimer. High risk: abnormal EKG, HF history, SBP &lt; 90, <strong>Hct &lt; 30</strong>, SOB, family history of sudden death, old age with comorbidities → <strong>admit</strong>.</p>")
    ], [
      Q("overview", "A man has syncope with tearing chest pain to the back and a widened mediastinum. Diagnosis?", ["Aortic dissection", "Vasovagal syncope", "Pericarditis", "Brugada"], 0, "Tearing pain + widened mediastinum: dissection."),
      Q("overview", "Syncope with hypotension, JVD and distant heart sounds. EKG shows electrical alternans. Diagnosis?", ["Cardiac tamponade", "Tension pneumothorax", "HCM", "Long QT"], 0, "Beck's triad plus electrical alternans: tamponade; best diagnosed by echo."),
      Q("workup", "A woman has syncope with abdominal pain. Which serious causes does the lecture name?", ["Leaking AAA or ruptured ectopic pregnancy", "Vasovagal and situational", "Brugada and WPW", "Carotid sinus syndrome"], 0, "Abdominal or back pain with syncope: leaking AAA or ruptured ectopic."),
      Q("workup", "Which hematocrit marks a high-risk syncope patient?", ["Below 30", "Below 45", "Above 50", "Hematocrit is not used"], 0, "Hct < 30 is a high-risk indicator."),
      Q("overview", "How does a PE cause syncope?", ["Acute obstruction of the pulmonary bed lowers cardiac output", "Vagal reflex to fear", "Prolonged QT", "Volume overload"], 0, "Acute pulmonary vascular obstruction reduces CO."),
      Q("workup", "Syncope with sudden shortness of breath. Which two diagnoses lead the list?", ["PE and CHF", "Vasovagal and orthostatic", "Seizure and hypoglycemia", "WPW and Brugada"], 0, "SOB with syncope: PE, CHF."),
      Q("workup", "Which test is the best way to diagnose tamponade?", ["Bedside or formal echo", "CXR", "Troponin", "Tilt table"], 0, "Tamponade is best diagnosed with echo.")
    ]),

    D("syn-seizure-mimic", "Syncope vs Seizure & Evaluation", "Separating syncope from seizures and other mimics, and the core evaluation every syncope patient gets.", [
      S("overview", "Mimics", "<p>Not syncope per ACC/AHA (no 'neurologic syncope' category): <strong>seizure</strong>, intoxication, metabolic disturbance, concussion, coma, AMS, <strong>hypoglycemia</strong>.</p>" + Tbl(["Syncope", "Seizure"], [
        ["Presyncope present", "Tonic-clonic movements from the outset"],
        ["Spontaneous return of consciousness", "<strong>Postictal confusion</strong>"],
        ["<strong>Decreased</strong> muscle tone", "<strong>Increased</strong> muscle tone"],
        ["No tongue biting", "<strong>Lateral tongue biting</strong>, head turning, posturing"],
        ["Brief limb jerking (few seconds)", "Rhythmic convulsions <strong>&gt; 30 s</strong>"]
      ]) + "<p><strong>Urinary incontinence and trauma occur in either</strong> (incontinence in 10–20% of syncope). <strong>10:20 rule</strong>: syncope jerks are brief; true seizure activity lasts longer.</p>"),
      S("workup", "Evaluation", "<p>History, physical exam and <strong>12-lead EKG</strong> are the only <strong>Level A</strong> recommendations. Ask about triggers, before/during/after, cardiac or neuro history, <strong>family sudden death</strong>, unexplained car crashes.</p>" + Tbl(["Post-ED test", "Use"], [
        ["ECG monitoring (admit; Holter/event outpatient)", "Correlate symptoms with rhythm"],
        ["Echo", "Suspected structural disease"],
        ["Stress test", "<strong>Exercise-related</strong> syncope"],
        ["Tilt table", "Recurrent, cardiac excluded: vasovagal, POTS"]
      ]) + cardiacVsNon),
      S("types", "Special populations", Tbl(["Group", "Think"], [
        ["Elderly", "AS; always <strong>review meds</strong> (bradycardia, orthostasis, QT); may present as unwitnessed falls"],
        ["Children/adolescents", "Activity-related? HOCM, septal defects, breath holding; family history of QT, arrhythmia, sudden death"],
        ["Pregnancy", "Hyperemesis dehydration, <strong>ectopic</strong>, PE, 3rd-trimester <strong>uterus compressing the IVC</strong>"]
      ]))
    ], [
      Q("overview", "After collapsing, a man is confused for 20 minutes and bit the side of his tongue. Most likely?", ["Seizure", "Vasovagal syncope", "Orthostatic syncope", "Carotid sinus syndrome"], 0, "Postictal confusion and lateral tongue biting point to seizure."),
      Q("overview", "Which finding does NOT separate syncope from seizure?", ["Urinary incontinence", "Postictal confusion", "Lateral tongue biting", "Muscle tone during the event"], 0, "Urinary incontinence or trauma can occur in either."),
      Q("workup", "Which three items are the only Level A recommendations for syncope evaluation?", ["History, physical exam, 12-lead EKG", "Echo, CT head, EEG", "Troponin, D-dimer, BNP", "Tilt table, Holter, stress test"], 0, "ACEP Level A: history, physical, 12-lead EKG."),
      Q("types", "A woman in her third trimester feels faint lying flat on her back. Why?", ["The uterus compresses the IVC and cuts venous return", "Ectopic rupture", "Long QT", "Carotid sinus pressure"], 0, "Third-trimester IVC compression decreases venous return."),
      Q("workup", "Which test fits syncope that happens during exercise?", ["Stress testing", "Tilt table", "Carotid sinus massage", "EEG"], 0, "Exercise-related syncope → stress testing."),
      Q("workup", "Which feature points toward cardiac rather than reflex syncope?", ["Syncope while lying supine", "Faint after seeing blood", "Recurrent episodes since age 15", "Nausea and warmth beforehand"], 0, "Supine or exertional syncope suggests a cardiac cause."),
      Q("overview", "Why is hypoglycemia not called syncope?", ["It is not caused by global cerebral hypoperfusion", "It never causes LOC", "It is always cardiac", "It always lasts under a minute"], 0, "Per ACC/AHA, syncope requires transient global cerebral hypoperfusion."),
      Q("overview", "Brief limb jerking for a few seconds during a faint suggests what?", ["Convulsive syncope, not a true seizure", "Generalized epilepsy", "Status epilepticus", "Brugada"], 0, "Syncope jerks are brief; sustained rhythmic activity > 30 s suggests seizure."),
      Q("types", "What must you always review in an elderly syncope patient?", ["The medication list", "Childhood vaccines", "Family travel history", "Diet history"], 0, "Check for meds that cause bradycardia, orthostasis or QT prolongation.")
    ])
  ]);
}());
