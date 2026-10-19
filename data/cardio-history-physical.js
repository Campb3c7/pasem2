/* Marriott, Cardiovascular H&P. Fifteen "Cardiovascular H&P" objectives in the supplied order (OSCE block excluded).
   Picture-only slide content transcribed: surface lines (31), interspace counting (32), heart beneath chest wall (33-34),
   valve O/X diagrams (35-38), precordial areas (46-53), S1/S2 timing (56), bruit sites (74), Allen test (76), ABI method and
   interpretation table (85-86). Items marked "Clarification" come from a standard physical-exam reference (Bates) and fill
   gaps the objectives ask for that the slides leave blank. */
(function () {
  "use strict";

  function q(prompt, answer, wrong, explanation) {
    return { prompt: prompt, choices: [answer].concat(wrong), correct: 0, explanation: explanation };
  }
  function C(title, html, coverage, test, apply) {
    return { title: title, html: html, coverage: coverage, test: test, apply: apply };
  }
  function S(id, title, description, units) {
    var s = { id: id, title: title, description: description, cards: [], test: [], apply: [] };
    units.forEach(function (u, i) {
      s.cards.push({ title: u.title, html: u.html, coverage: u.coverage });
      ["test", "apply"].forEach(function (mode) {
        u[mode].forEach(function (x) { x.card = i; s[mode].push(x); });
      });
    });
    return s;
  }
  var CL = '<p><em>Clarification (standard exam reference, not on the slides):</em> ';

  window.CARDIO_HP_OBJECTIVES = [

  /* ---------------------------------------------------------------- 1 */
  S("01-history-symptoms", "1. History questions for angina, palpitations, SOB, edema, peripheral vascular symptoms, syncope, and abdominal/back/flank pain", "Objective 1. Slides 3-21 and 26.", [
    C("The three history questions and seven cardiac symptoms",
      `<p>Approach every cardiovascular history by asking three things:</p>
      <ul><li><strong>Blood supply</strong>: is the blood supply to the heart adequate?</li>
      <li><strong>Electrical</strong>: is the electrical system working normally?</li>
      <li><strong>Pump</strong>: is the heart moving blood through the circulation and supplying the organs?</li></ul>
      <p>The seven common symptoms of cardiovascular disease:</p>
      <table class="learn-table"><tr><th>Symptom</th><th>Main idea</th></tr>
      <tr><td>Angina (chest pain)</td><td>Supply problem</td></tr>
      <tr><td>Palpitations</td><td>Electrical problem</td></tr>
      <tr><td>Shortness of breath</td><td>Dyspnea, orthopnea, PND</td></tr>
      <tr><td>Edema</td><td>Fluid retention</td></tr>
      <tr><td>Peripheral vascular</td><td>Pain, skin changes, hair changes</td></tr>
      <tr><td>Syncope</td><td>Transient loss of consciousness</td></tr>
      <tr><td>Abdominal, back, flank pain</td><td>Vascular catastrophe or supply-demand mismatch</td></tr></table>`,
      ["history-approach", "symptom-list"],
      [q(`Which is NOT one of the three framing questions for a cardiovascular history?`, `Is the heart rate between 60 and 100 at rest?`, [`Is the blood supply to the heart adequate?`, `Is the electrical system of the heart functioning normally?`, `Is the heart adequately moving blood and supplying the organs?`], `The three questions are blood supply, electrical system, and pump function.`),
       q(`Which list contains only symptoms the lecture names as common cardiovascular symptoms?`, `Palpitations, syncope, edema, flank pain`, [`Palpitations, hematuria, dysuria, edema`, `Syncope, diplopia, tinnitus, edema`, `Angina, polyuria, polydipsia, syncope`], `The seven: angina, palpitations, SOB, edema, peripheral vascular symptoms, syncope, and abdominal/back/flank pain.`)],
      [q(`A patient reports a fluttering heartbeat. Which of the three history framing questions does this symptom mainly address?`, `Is the electrical system of the heart functioning normally?`, [`Is the blood supply to the heart adequate?`, `Is the heart moving blood and supplying the organs?`, `Is the peripheral venous return adequate?`], `Palpitations point to the electrical system.`)]),

    C("Angina: classic vs atypical presentations",
      `<p>Chest pain is <strong>one of the most serious of all patient complaints</strong>. Patients with acute coronary syndrome (ACS) may give the <strong>classic</strong> story: <strong>exertional pain, pressure, or discomfort</strong> in the chest.</p>
      <div class="box-hy"><span class="lbl">High yield</span><strong>Females, especially over 65</strong>, more often report <strong>atypical</strong> symptoms that may go unrecognized: upper back pain, neck pain, jaw pain, shortness of breath, PND, nausea, vomiting, and/or fatigue. Careful history taking is especially important.</div>
      <p><strong>How to start:</strong> open-ended ("Please tell me about any symptoms you might be having in your chest") and <strong>ask the patient to point to the pain</strong>. Then narrow: worse or better with exertion? character? radiation to shoulder, back, or arm? SOB, sweating, palpitations, or nausea? does it wake you at night?</p>`,
      ["angina", "angina-classic", "angina-atypical-women", "angina-open-ended"],
      [q(`Which group is most likely to present with atypical ACS symptoms such as jaw pain, nausea, and fatigue?`, `Females, particularly those over age 65`, [`Males under age 40`, `Adolescent athletes`, `Males with a family history of hypertension`], `The lecture highlights females, especially over 65, as more likely to have atypical symptoms that go unrecognized.`),
       q(`What is the classic description of angina?`, `Exertional pain, pressure, or discomfort in the chest`, [`Sharp pain that worsens with deep breathing`, `Burning pain only after lying flat`, `Pain reproduced by pressing on the chest wall`], `Classic angina is exertional chest pain, pressure, or discomfort.`)],
      [q(`A 72-year-old woman reports 2 days of fatigue, nausea, and upper back and jaw discomfort. She denies chest pain. What is the best interpretation?`, `These may be atypical ACS symptoms and need a careful cardiac history`, [`Absence of chest pain rules out a cardiac cause`, `This is most consistent with a musculoskeletal strain only`, `Jaw pain points to a dental problem and ends the cardiac workup`], `Older females often present with atypical symptoms; missing them is the danger the lecture emphasizes.`),
       q(`You begin the history for a patient whose chief complaint is chest discomfort. What is the best first step?`, `Ask an open-ended question about the chest symptoms and have the patient point to the pain`, [`Ask only yes/no questions about radiation`, `Ask about family history before the complaint`, `Skip history and order an EKG without asking about symptoms`], `Begin open-ended and have the patient point; then ask targeted questions.`)]),

    C("OLDCARTS questions for angina",
      `<p>Use <strong>OLDCARTS</strong> for every pain complaint: <strong>O</strong>nset, <strong>L</strong>ocation, <strong>D</strong>uration, <strong>C</strong>haracter, <strong>A</strong>ggravating/Alleviating, <strong>R</strong>adiation, <strong>T</strong>iming, <strong>S</strong>everity.</p>
      <table class="learn-table"><tr><th>Letter</th><th>Angina question</th></tr>
      <tr><td>Onset</td><td>When did the pain first start?</td></tr>
      <tr><td>Location</td><td>Where is the pain? (point)</td></tr>
      <tr><td>Duration</td><td>How long does it last?</td></tr>
      <tr><td>Character</td><td>Burning, pressing, stabbing, crushing, dull, aching, throbbing, sharp, constricting?</td></tr>
      <tr><td>Aggravating/Alleviating</td><td>What makes it worse/better? At rest, exertion, stress, after eating, moving arms, intercourse?</td></tr>
      <tr><td>Radiation</td><td>Does it radiate? Where?</td></tr>
      <tr><td>Timing</td><td>How often? Sudden or gradual?</td></tr>
      <tr><td>Severity</td><td>How severe? Limiting daily activities?</td></tr></table>
      <p>Always add <strong>associated symptoms</strong>: SOB, diaphoresis, palpitations, N/V, cough, fever, leg pain.</p>`,
      ["oldcarts", "angina-associated-symptoms"],
      [q(`In OLDCARTS, what does the "A" stand for?`, `Aggravating/alleviating factors`, [`Associated symptoms`, `Age of onset`, `Activity level`], `OLDCARTS: Onset, Location, Duration, Character, Aggravating/Alleviating, Radiation, Timing, Severity.`),
       q(`Which question addresses the "C" in OLDCARTS for chest pain?`, `How would you describe the pain: pressing, crushing, sharp, burning?`, [`Does the pain radiate into your arm?`, `How long does each episode last?`, `Does it come on with exertion?`], `Character = quality of the pain.`)],
      [q(`A patient says his chest pain comes on when he climbs stairs and eases when he rests. Which OLDCARTS element has he just answered?`, `Aggravating/alleviating factors`, [`Radiation`, `Location`, `Severity`], `What brings it on and what relieves it are aggravating/alleviating factors.`)]),

    C("Historical context of symptoms",
      `<p>Beyond OLDCARTS, ask about the <strong>context</strong> of the symptoms:</p>
      <ul><li>Where were you when the symptoms began?</li><li>What were you doing when they started?</li><li>Have you had symptoms like this before?</li><li>Any recent <strong>travel</strong>?</li><li>Any recent <strong>lifestyle changes</strong>?</li></ul>`,
      ["historical-context"],
      [q(`Which question gathers historical context rather than an OLDCARTS element?`, `Have you had any recent travel?`, [`How severe is the pain on a 1-10 scale?`, `Does the pain radiate?`, `How long does the pain last?`], `Context questions: where, what doing, prior episodes, recent travel, lifestyle changes.`)],
      [q(`A patient with new leg swelling and dyspnea has completed OLDCARTS. Which added question best gives context that could change your differential?`, `Have you had any recent travel?`, [`What is your favorite exercise?`, `Do you prefer morning appointments?`, `Which pharmacy do you use?`], `Recent travel is a context question the lecture lists; it can raise concern for a clot.`)]),

    C("Palpitations: wording and history clues",
      `<p><strong>Palpitations</strong> = an unpleasant awareness of the heartbeat. Patients say <strong>skipping, racing, fluttering, pounding, or stopping</strong> of the heart. Ask them to <strong>tap out the rhythm</strong> with a hand or finger (or check their smart watch).</p>
      <table class="learn-table"><tr><th>History clue</th><th>Possible rhythm</th></tr>
      <tr><td>Transient skips and flip-flops</td><td>Premature contractions</td></tr>
      <tr><td>Rapid, regular, <strong>sudden onset and offset</strong></td><td>Paroxysmal supraventricular tachycardia</td></tr>
      <tr><td>Rapid, regular, <strong>&lt;120 bpm</strong>, gradual start and stop</td><td>Sinus tachycardia</td></tr></table>
      <div class="box-hy"><span class="lbl">High yield</span>History only suggests the rhythm; an <strong>EKG is needed to confirm</strong>.</div>`,
      ["palpitations", "palpitation-patterns", "palpitations-tap-rhythm"],
      [q(`Rapid, regular palpitations with sudden onset and sudden offset suggest which rhythm?`, `Paroxysmal supraventricular tachycardia`, [`Sinus tachycardia`, `Premature contractions`, `Sinus bradycardia`], `Abrupt on/off rapid regular beating suggests PSVT.`),
       q(`What simple bedside technique helps characterize a patient's palpitations?`, `Ask the patient to tap out the rhythm with a hand or finger`, [`Have the patient hold their breath for 60 seconds`, `Ask the patient to count pillows used at night`, `Elevate the legs to 60 degrees`], `Tapping out the rhythm (or reviewing a smart watch) shows rate and regularity.`)],
      [q(`A patient describes occasional single "flip-flops" in her chest lasting a second. What do these most likely represent?`, `Premature contractions`, [`Paroxysmal supraventricular tachycardia`, `Sinus tachycardia`, `Vasovagal syncope`], `Transient skips and flip-flops suggest premature contractions; confirm with EKG.`),
       q(`A patient reports a regular racing heart around 110 bpm that builds gradually during exercise and slowly settles afterward. Which rhythm is most likely?`, `Sinus tachycardia`, [`Paroxysmal supraventricular tachycardia`, `Premature contractions`, `Ventricular tachycardia`], `Regular, under 120, gradual onset and offset suggests sinus tachycardia.`)]),

    C("Shortness of breath: dyspnea, orthopnea, PND",
      `<table class="learn-table"><tr><th>Term</th><th>Definition</th><th>Ask</th></tr>
      <tr><td><strong>Dyspnea</strong></td><td>Uncomfortable awareness of breathing inappropriate to the level of exertion; common in cardiac or pulmonary problems</td><td>How far can you walk before you become short of breath?</td></tr>
      <tr><td><strong>Orthopnea</strong></td><td>Dyspnea when <strong>supine</strong> that improves when sitting up</td><td>How many pillows do you sleep on?</td></tr>
      <tr><td><strong>PND</strong></td><td>Sudden dyspnea and orthopnea that <strong>wake the patient</strong>, usually <strong>1-2 hours after going to bed</strong>; the patient sits up, stands, or goes to a window for air</td><td>Do you ever wake up at night short of breath?</td></tr></table>`,
      ["dyspnea", "orthopnea", "pnd"],
      [q(`Dyspnea that occurs when lying flat and improves on sitting up is called what?`, `Orthopnea`, [`Paroxysmal nocturnal dyspnea`, `Exertional dyspnea`, `Platypnea`], `Orthopnea = supine dyspnea relieved by sitting up; screen with the pillow question.`),
       q(`Paroxysmal nocturnal dyspnea typically wakes the patient how long after going to bed?`, `1-2 hours`, [`5-10 minutes`, `6-8 hours`, `Only at sunrise`], `PND usually occurs 1-2 hours after going to bed.`)],
      [q(`A patient says he now sleeps propped on three pillows because he cannot breathe lying flat. What symptom is he describing?`, `Orthopnea`, [`Paroxysmal nocturnal dyspnea`, `Palpitations`, `Claudication`], `The pillow count quantifies orthopnea.`),
       q(`A patient wakes about 90 minutes after falling asleep gasping for air and goes to an open window to breathe. What is this?`, `Paroxysmal nocturnal dyspnea`, [`Orthopnea`, `Vasovagal syncope`, `Exertional angina`], `Sudden nighttime dyspnea waking the patient 1-2 hours after bed is PND.`)]),

    C("Edema history",
      `<p><strong>Edema</strong> = accumulation of excess fluid in the extravascular <strong>interstitial space</strong>.</p>
      <ul><li>Focus on <strong>location (unilateral vs bilateral)</strong>, timing, setting, and associated symptoms.</li>
      <li>Ask: when first noticed? sudden or gradual? worse in morning or evening? on medications for swelling?</li>
      <li>Have fluid-retaining patients record <strong>daily morning weights</strong>: edema may not be obvious until <strong>several liters</strong> have accumulated.</li>
      <li>Causes are often cardiac or pulmonary but can be <strong>nutritional and/or positional</strong>.</li></ul>`,
      ["edema", "edema-unilateral-bilateral", "daily-weights"],
      [q(`Why should patients who retain fluid record daily morning weights?`, `Edema may not be visible until several liters of fluid have accumulated`, [`Weight measures cardiac output directly`, `Morning weight replaces the need for an exam`, `It is the only way to grade pitting edema`], `Weight gain detects fluid accumulation before visible edema.`)],
      [q(`A patient reports new leg swelling. Which history detail is most important to clarify first, per the lecture?`, `Whether the swelling is unilateral or bilateral`, [`Shoe brand`, `Favorite food`, `Blood type`], `Location (unilateral vs bilateral), timing, setting, and associated symptoms guide the differential.`)]),

    C("Peripheral vascular symptoms",
      `<table class="learn-table"><tr><th>Symptom</th><th>Suggests</th></tr>
      <tr><td>Leg pain or cramping <strong>with exertion</strong> (ask how far they can walk) or at rest</td><td>Peripheral arterial disease (PAD)</td></tr>
      <tr><td>Leg pain with associated <strong>edema</strong></td><td>DVT or venous insufficiency</td></tr>
      <tr><td>Coldness, numbness, pallor, discoloration, <strong>hair loss over the anterior tibia</strong></td><td>Decreased arterial perfusion</td></tr></table>
      <p>General questions: told you have a circulation problem in the legs? vascular bypass? cold feet? color of feet with shoes and socks off? slow-healing ulcer? amputation?</p>`,
      ["peripheral-vascular", "claudication-pad", "venous-edema-dvt", "arterial-perfusion-signs"],
      [q(`Leg pain or cramping that comes on with walking a set distance suggests which condition?`, `Peripheral arterial disease`, [`Venous insufficiency`, `Lymphedema`, `Deep venous thrombosis`], `Exertional leg pain (clarify distance walked) suggests PAD.`),
       q(`Hair loss over the anterior tibial surfaces suggests what?`, `Decreased arterial perfusion`, [`Venous insufficiency`, `Lymphedema`, `Fluid overload from heart failure`], `Coldness, numbness, pallor, discoloration, and anterior tibial hair loss suggest decreased arterial perfusion.`)],
      [q(`A smoker reports calf cramping after walking two blocks that resolves with rest; his shins are hairless and his feet are cool. What is the most likely problem?`, `Peripheral arterial disease`, [`Deep venous thrombosis`, `Venous insufficiency`, `Lymphedema`], `Exertional pain plus signs of poor arterial perfusion point to PAD.`),
       q(`A patient has a painful, swollen left calf after a long flight. Which category of problem do pain plus edema raise?`, `DVT or venous insufficiency`, [`Peripheral arterial disease only`, `Paroxysmal supraventricular tachycardia`, `Aortic regurgitation`], `Leg pain with associated edema suggests DVT or venous insufficiency.`)]),

    C("Syncope",
      `<p><strong>Syncope</strong> = transient loss of consciousness followed by recovery.</p>
      <ul><li>Most common cause: <strong>neurocardiogenic</strong>, with <strong>vasovagal syncope the single most common</strong>. Others: POTS, carotid sinus syncope, orthostatic hypotension.</li>
      <li><strong>Cardiac arrhythmias</strong>, especially <strong>ventricular tachycardia</strong> and <strong>bradyarrhythmias</strong>.</li></ul>`,
      ["syncope", "syncope-causes", "vasovagal"],
      [q(`What is the single most common cause of syncope?`, `Vasovagal syncope`, [`Ventricular tachycardia`, `Aortic stenosis`, `Hypoglycemia`], `Neurocardiogenic causes are most common, and vasovagal syncope leads them.`),
       q(`Which arrhythmias does the lecture emphasize as cardiac causes of syncope?`, `Ventricular tachycardia and bradyarrhythmias`, [`Premature atrial contractions and sinus arrhythmia`, `Sinus tachycardia only`, `First-degree AV block only`], `Cardiac arrhythmic syncope: especially VT and bradyarrhythmias.`)],
      [q(`A healthy 20-year-old faints while having blood drawn, recovers fully within a minute, and has a normal exam. What is the most likely cause?`, `Vasovagal syncope`, [`Ventricular tachycardia`, `Carotid sinus syncope`, `Abdominal aortic dissection`], `Transient LOC with full recovery triggered by a typical stimulus is vasovagal.`)]),

    C("Abdominal, back, and flank pain",
      `<ul><li><strong>Acute</strong> symptoms raise suspicion of <strong>arterial thrombosis</strong>.</li>
      <li>Pain may reflect <strong>oxygen supply-demand mismatch</strong>, e.g., pain <strong>worse with eating</strong> when the viscera need more oxygen.</li>
      <li><strong>Sudden tearing pain</strong> suggests <strong>abdominal aortic dissection</strong>.</li></ul>`,
      ["abd-back-flank-pain", "arterial-thrombosis", "postprandial-mismatch", "tearing-dissection"],
      [q(`Sudden tearing abdominal or back pain should raise concern for what?`, `Abdominal aortic dissection`, [`Vasovagal syncope`, `Venous insufficiency`, `Stable angina`], `Sudden tearing pain is the classic dissection description.`),
       q(`Abdominal pain that worsens after eating suggests what vascular mechanism?`, `Oxygen supply-demand mismatch in the viscera`, [`Lymphatic obstruction`, `Venous valve incompetence`, `Electrical conduction delay`], `Eating raises visceral oxygen demand; inadequate supply causes pain.`)],
      [q(`A hypertensive 68-year-old has sudden, severe "tearing" pain radiating to his back. Which diagnosis must you consider first?`, `Aortic dissection`, [`Renal colic only`, `Muscle strain`, `Gastroesophageal reflux`], `Tearing pain = dissection until proven otherwise.`)]),

    C("General cardiovascular history and risk factors",
      `<p><strong>Past history:</strong> any heart problems? angina or heart attack? stress test (when, results)? cardiac cath or heart surgery? high blood pressure and meds? irregular heartbeat and meds? murmur or <strong>rheumatic fever</strong>?</p>
      <p><strong>Symptom screen:</strong> exertional chest pain (stairs)? worse in cold weather? bluish skin? SOB? PND? pillows? walking distance before SOB?</p>
      <p><strong>Risk factors:</strong> hypertension, atherosclerosis, diabetes, dyslipidemias, metabolic syndrome, smoking, obesity, family history.</p>
      <p><strong>Documentation (negative ROS example):</strong> denies chest pain/pressure, palpitations, clots, dyspnea, PND, orthopnea, cyanosis, edema, claudication, varicosities, ulcerations, cold-induced color change, murmur, rheumatic fever, HTN, CAD, syncope; plus date and results of last EKG/echo.</p>`,
      ["general-cv-questions", "risk-factors", "history-documentation"],
      [q(`Which is listed in the lecture as a cardiovascular risk factor to assess?`, `Metabolic syndrome`, [`Seasonal allergies`, `Myopia`, `Childhood fractures`], `Risk factors: HTN, atherosclerosis, diabetes, dyslipidemias, metabolic syndrome, smoking, obesity, family history.`),
       q(`Which past history question screens for a cause of valvular heart disease?`, `Have you ever had rheumatic fever?`, [`Have you ever had chickenpox?`, `Do you wear glasses?`, `Have you ever broken a bone?`], `The general history asks about murmurs and rheumatic fever.`)],
      [q(`You are documenting a normal cardiovascular history. Which statement belongs in it?`, `Denies dyspnea, PND, orthopnea, claudication, or syncope`, [`PMI is tapping at the 5th interspace`, `JVP is 6 cm at 30 degrees`, `Negative Homan sign`], `The other choices are physical exam findings, not history.`)])
  ]),

  /* ---------------------------------------------------------------- 2 */
  S("02-chronic-care-questions", "2. When to use chronic care questions and which questions evaluate chronic disease", "Objective 2. Slides 21-25.", [
    C("When to use chronic care questions: OCHMEDPRA",
      `<p><strong>OLDCARTS</strong> characterizes a new symptom. For a patient returning to follow an <strong>established chronic condition</strong> (e.g., hypertension, heart failure), use the chronic care acronym <strong>OCHMEDPRA</strong>:</p>
      <table class="learn-table"><tr><th>Letter</th><th>Topic</th></tr>
      <tr><td>O</td><td>Onset of condition</td></tr><tr><td>C</td><td>Current concerns</td></tr><tr><td>H</td><td>Home readings</td></tr>
      <tr><td>M</td><td>Medications (compliance and side effects)</td></tr><tr><td>E</td><td>Exercise</td></tr><tr><td>D</td><td>Diet</td></tr>
      <tr><td>P</td><td>Previous imaging/procedures</td></tr><tr><td>R</td><td>Risk factors</td></tr><tr><td>A</td><td>Associated symptoms</td></tr></table>`,
      ["chronic-when", "ochmedpra"],
      [q(`What does the "H" stand for in OCHMEDPRA?`, `Home readings`, [`History of present illness`, `Hospitalizations`, `Heart rate`], `OCHMEDPRA: Onset, Current concerns, Home readings, Medications, Exercise, Diet, Previous imaging/procedures, Risk factors, Associated symptoms.`),
       q(`What does the "P" stand for in OCHMEDPRA?`, `Previous imaging/procedures`, [`Pain scale`, `Pulse`, `Past surgical history`], `P = previous related imaging or procedures.`)],
      [q(`A patient with hypertension diagnosed 5 years ago returns for a routine 3-month follow-up with no new complaint. Which history framework fits best?`, `Chronic care questions (OCHMEDPRA)`, [`OLDCARTS for a new pain complaint`, `A review of systems only`, `Historical context questions only`], `Chronic disease follow-up uses OCHMEDPRA; OLDCARTS is for a new symptom.`)]),

    C("Onset, current concerns, and home readings",
      `<ul><li><strong>Onset:</strong> when was the chronic condition diagnosed?</li>
      <li><strong>Current concerns:</strong> any concerns or problems with the condition they hoped to discuss today?</li>
      <li><strong>Home readings:</strong> did they bring their home monitoring? <strong>Hypertension &rarr; home BP readings</strong>; <strong>heart failure &rarr; home weights</strong>. Note how readings were taken, how often, the numbers (average, highest, lowest), and time of day.</li></ul>`,
      ["onset", "current-concerns", "home-readings"],
      [q(`For a heart failure patient, which home reading is most relevant to review?`, `Daily weights`, [`Home blood glucose only`, `Peak flow`, `Pulse oximetry only`], `Home readings: BP for hypertension, weights for heart failure.`),
       q(`When reviewing home BP readings, which detail should you note?`, `How and when readings were taken, plus average, highest, and lowest values`, [`Only the single lowest reading`, `Only the brand of the cuff`, `Only readings taken in the office`], `Record technique, frequency, time of day, averages, highs, and lows.`)],
      [q(`A hypertensive patient brings a log of BPs. Which OCHMEDPRA element are you addressing as you review it?`, `Home readings`, [`Onset`, `Diet`, `Risk factors`], `The log is the home readings component.`)]),

    C("Medications, exercise, and diet",
      `<ul><li><strong>Medications:</strong> taking them as prescribed (<strong>compliance</strong>)? any <strong>side effects</strong> or problems?</li>
      <li><strong>Exercise:</strong> sticking to a regular regimen? what is their activity like?</li>
      <li><strong>Diet:</strong> healthy, unhealthy, or a specific plan? how is it affecting the condition? anything to watch in the diet for this condition?</li></ul>`,
      ["medications", "exercise", "diet"],
      [q(`In chronic care questions, the medication review should cover which two things?`, `Compliance and side effects`, [`Brand names and costs only`, `Pill color and shape`, `Pharmacy hours and location`], `M = medications: compliance and side effects.`)],
      [q(`A patient with heart failure has gained weight and admits he stopped his water pill because it made him urinate too much. Which OCHMEDPRA element uncovered this?`, `Medications (compliance and side effects)`, [`Onset`, `Previous imaging`, `Current concerns about insurance`], `Nonadherence due to a side effect is found by the medication question.`)]),

    C("Previous imaging/procedures, risk factors, associated symptoms",
      `<ul><li><strong>Previous related imaging or procedures:</strong> labs (cholesterol, A1C), stress test, echo, cardiac cath.</li>
      <li><strong>Risk factors:</strong> what might worsen the condition or raise complications?</li>
      <li><strong>Associated symptoms:</strong> any <strong>new</strong> symptoms? Specifically ask about headaches, vision changes, chest pain/pressure, SOB, difficulty sleeping, fatigue, leg swelling or pain.</li></ul>`,
      ["previous-imaging", "risk-factors-chronic", "associated-symptoms"],
      [q(`Which specific associated symptoms should be asked about at a chronic cardiovascular visit?`, `Headaches, vision changes, chest pain, SOB, sleep difficulty, fatigue, leg swelling`, [`Rash, joint pain, hair loss only`, `Hearing loss and tinnitus only`, `Urinary frequency only`], `The lecture lists headaches, vision changes, chest pain/pressure, SOB, sleep difficulty, fatigue, and leg swelling or pain.`)],
      [q(`At a hypertension follow-up you ask whether the patient has had any recent cholesterol labs, stress test, or echo. Which OCHMEDPRA element is this?`, `Previous imaging/procedures`, [`Home readings`, `Exercise`, `Onset`], `Labs, stress tests, echo, and cath fall under previous imaging/procedures.`)])
  ]),

  /* ---------------------------------------------------------------- 3 */
  S("03-exam-landmarks", "3. Anatomical landmarks for the cardiovascular exam", "Objective 3. Slides 28-34.", [
    C("Exam setup",
      `<ul><li>Gown <strong>open to the front</strong>.</li>
      <li>Stand at the patient's <strong>right side</strong>.</li>
      <li>Keep the right chest draped; ask the patient to gently lift or displace the <strong>left breast</strong>.</li>
      <li>Bed at <strong>30 degrees</strong>.</li>
      <li>Stethoscope goes on <strong>skin</strong>, not over the gown.</li></ul>
      <p>Key exam components in order: general appearance and vitals, skin, PMI, inspect/palpate chest wall, auscultate S1/S2 and extra sounds, augment murmurs, JVP, palpate and auscultate pulses, special tests.</p>`,
      ["exam-positioning", "exam-components"],
      [q(`On which side of the patient should the examiner stand for the cardiovascular exam?`, `The patient's right side`, [`The patient's left side`, `At the foot of the bed`, `Behind the patient`], `Stand at the patient's right side.`),
       q(`At what angle should the head of the bed be positioned for the cardiovascular exam?`, `30 degrees`, [`0 degrees (flat)`, `60 degrees`, `90 degrees`], `Bed positioned at 30 degrees.`)],
      [q(`A student listens to the heart through the patient's gown from the patient's left side. What should be corrected?`, `Place the stethoscope on skin and stand at the patient's right side`, [`Nothing; this is correct technique`, `Have the patient lie prone`, `Use only the bell over the gown`], `Listen on skin and examine from the right side.`)]),

    C("Vertical surface lines of the chest",
      `<table class="learn-table"><tr><th>Line</th><th>Where</th></tr>
      <tr><td>Midsternal</td><td>Down the center of the sternum</td></tr>
      <tr><td>Midclavicular (MCL)</td><td>Vertically through the midpoint of the clavicle</td></tr>
      <tr><td>Anterior axillary</td><td>From the anterior axillary fold</td></tr>
      <tr><td>Midaxillary</td><td>From the apex of the axilla</td></tr>
      <tr><td>Posterior axillary</td><td>From the posterior axillary fold</td></tr></table>
      <div class="box-hy"><span class="lbl">High yield</span>The <strong>midclavicular line</strong> is the reference for the mitral area and the PMI (5th ICS, MCL).</div>`,
      ["midsternal", "midclavicular", "anterior-axillary", "midaxillary", "posterior-axillary"],
      [q(`Which vertical line is used to locate the PMI and mitral auscultation point?`, `Midclavicular line`, [`Midsternal line`, `Anterior axillary line`, `Midaxillary line`], `Mitral area and PMI: 5th ICS at the midclavicular line.`),
       q(`Which line runs vertically from the apex of the axilla?`, `Midaxillary line`, [`Anterior axillary line`, `Posterior axillary line`, `Midclavicular line`], `Anterior = anterior fold, mid = apex of axilla, posterior = posterior fold.`)],
      [q(`You palpate a PMI 3 cm lateral to the line dropped from the middle of the left clavicle. Which landmark are you measuring from?`, `Midclavicular line`, [`Midsternal line`, `Posterior axillary line`, `Midaxillary line`], `Horizontal PMI location is measured in cm from the MCL.`)]),

    C("Counting interspaces from the sternal angle",
      `<ol><li>Find the <strong>suprasternal notch</strong>, then slide down to the <strong>sternal angle</strong> (angle of Louis).</li>
      <li>Move laterally: the <strong>2nd rib</strong> joins the sternum in line with the sternal angle.</li>
      <li>Move down from the 2nd rib into the <strong>2nd intercostal space</strong>; count down from there.</li></ol>
      <div class="box-hy"><span class="lbl">High yield</span>Sternal angle = 2nd rib. The 2nd interspaces are the aortic (right) and pulmonic (left) areas.</div>`,
      ["suprasternal-notch", "sternal-angle", "second-rib", "second-ics"],
      [q(`Which rib articulates with the sternum at the level of the sternal angle?`, `2nd rib`, [`1st rib`, `3rd rib`, `4th rib`], `The sternal angle marks the 2nd rib; just below it is the 2nd ICS.`)],
      [q(`You need to find the pulmonic area. What is the correct way to locate it?`, `Find the sternal angle, move laterally to the 2nd rib on the left, then drop into the 2nd intercostal space`, [`Start at the xiphoid and count up 2 ribs`, `Find the nipple and move up one space`, `Start at the clavicle and count down 5 spaces`], `Use suprasternal notch to sternal angle to 2nd rib to 2nd ICS.`)]),

    C("Heart projection beneath the chest wall",
      `<p>On the anterior chest (slides 33-34, pictures):</p>
      <ul><li>The <strong>right ventricle</strong> forms most of the anterior surface, behind and left of the sternum.</li>
      <li>The <strong>right atrium</strong> and <strong>SVC</strong> form the right border.</li>
      <li>The <strong>left ventricle</strong> lies to the left; its tip makes the <strong>apical impulse</strong> (PMI).</li>
      <li>The <strong>aorta</strong> and <strong>pulmonary artery</strong> arise at the upper border near the 2nd interspaces.</li></ul>
      <p>Blood flow: SVC/IVC &rarr; RA &rarr; tricuspid &rarr; RV &rarr; pulmonic &rarr; pulmonary artery &rarr; lungs &rarr; pulmonary veins &rarr; LA &rarr; mitral &rarr; LV &rarr; aortic &rarr; aorta.</p>`,
      ["heart-projection", "rv-anterior", "lv-apical-impulse", "great-vessels"],
      [q(`Which chamber forms most of the anterior surface of the heart beneath the sternum?`, `Right ventricle`, [`Left ventricle`, `Left atrium`, `Right atrium`], `The RV sits anteriorly; the LV lies to the left and forms the apex.`),
       q(`The apical impulse is produced by which chamber?`, `Left ventricle`, [`Right ventricle`, `Right atrium`, `Left atrium`], `The LV apex produces the apical impulse (PMI).`)],
      [q(`A patient has a lift along the left sternal border. Which chamber lies directly beneath this area?`, `Right ventricle`, [`Left ventricle`, `Left atrium`, `Aortic arch`], `The left sternal border overlies the RV (the right ventricular area).`)])
  ]),

  /* ---------------------------------------------------------------- 4 */
  S("04-valve-auscultation-points", "4. Associate each cardiac valve with its auscultation point", "Objective 4. Slides 35-38, 50, 53.", [
    C("Surface projection vs auscultation point",
      `<p>On the valve diagrams, <strong>O = surface projection</strong> of the valve (where it actually sits) and <strong>X = auscultation point</strong> (where it is best heard). The white arrow shows the <strong>direction of blood flow and sound</strong>.</p>
      <div class="box-hy"><span class="lbl">High yield</span>Valves are best heard <strong>downstream, in the direction of flow</strong>, not directly over the valve.</div>
      <table class="learn-table"><tr><th>Valve</th><th>Surface projection (O)</th><th>Auscultation point (X)</th></tr>
      <tr><td>Aortic</td><td>Behind sternum opposite 3rd ICS</td><td><strong>Right 2nd ICS</strong> at sternal border</td></tr>
      <tr><td>Pulmonic</td><td>Left of sternum opposite 3rd intercostal junction</td><td><strong>Left 2nd ICS</strong> at sternal border</td></tr>
      <tr><td>Tricuspid</td><td>Behind right side of sternum at 4th-5th intercostal junction</td><td><strong>Left 5th ICS</strong> at lower left sternal border</td></tr>
      <tr><td>Mitral</td><td>Left of sternum at 4th intercostal junction</td><td><strong>5th ICS, midclavicular line</strong> (apex)</td></tr></table>
      <div class="box-mnemonic"><span class="lbl">Mnemonic</span><strong>"All Physicians Take Money"</strong>: Aortic, Pulmonic, Tricuspid, Mitral, starting at the right 2nd ICS and moving in a Z down to the apex.</div>`,
      ["projection-vs-auscultation", "flow-direction", "apt-m-sequence"],
      [q(`On the valve diagrams, what does "X" represent?`, `The auscultation point of the valve`, [`The surface projection of the valve`, `The direction of blood flow`, `The PMI`], `O = surface projection; X = auscultation point; white arrow = flow and sound direction.`),
       q(`Why is a valve's auscultation point different from its surface projection?`, `Sound travels in the direction of blood flow, so it is best heard downstream`, [`The stethoscope cannot be placed over bone`, `Valves move during respiration`, `Auscultation points are chosen arbitrarily by convention only`], `Sound is carried with flow away from the valve.`)],
      [q(`A student places the stethoscope directly over the sternum at the 3rd ICS to listen to the aortic valve. Where should she listen instead?`, `Right 2nd intercostal space at the sternal border`, [`Left 2nd intercostal space`, `Left 5th intercostal space`, `5th ICS at the midclavicular line`], `The aortic valve projects behind the sternum at the 3rd ICS but is heard at the right 2nd ICS.`)]),

    C("Aortic valve",
      `<p><strong>Surface projection:</strong> behind the sternum opposite the 3rd intercostal space.</p>
      <p><strong>Auscultated:</strong> <strong>right side of sternum, 2nd intercostal space</strong> (aortic area).</p>`,
      ["aortic"],
      [q(`Where is the aortic valve best auscultated?`, `Right 2nd ICS at the sternal border`, [`Left 2nd ICS at the sternal border`, `Left 5th ICS at the sternal border`, `5th ICS at the midclavicular line`], `Aortic area = right 2nd interspace.`)],
      [q(`A crescendo-decrescendo murmur is loudest just right of the sternum in the 2nd interspace. Which valve area is this?`, `Aortic`, [`Pulmonic`, `Tricuspid`, `Mitral`], `Right 2nd ICS = aortic area.`)]),

    C("Pulmonic valve",
      `<p><strong>Surface projection:</strong> left side of sternum opposite the left 3rd intercostal junction.</p>
      <p><strong>Auscultated:</strong> <strong>left side of sternum, left 2nd intercostal space</strong> (pulmonic area).</p>`,
      ["pulmonic"],
      [q(`Where is the pulmonic valve best auscultated?`, `Left 2nd ICS at the sternal border`, [`Right 2nd ICS at the sternal border`, `Left 4th ICS at the sternal border`, `Apex`], `Pulmonic area = left 2nd interspace.`)],
      [q(`You hear a sound best just left of the sternum in the 2nd interspace. Which valve area are you over?`, `Pulmonic`, [`Aortic`, `Tricuspid`, `Mitral`], `Left 2nd ICS = pulmonic area.`)]),

    C("Tricuspid valve",
      `<p><strong>Surface projection:</strong> behind the right side of the sternum at the 4th-5th intercostal junction.</p>
      <p><strong>Auscultated:</strong> <strong>left side of sternum, left 5th intercostal space</strong> (lower left sternal border, tricuspid area).</p>`,
      ["tricuspid"],
      [q(`Where is the tricuspid valve best auscultated?`, `Left 5th ICS at the lower left sternal border`, [`Right 5th ICS at the sternal border`, `Left 2nd ICS`, `5th ICS at the midclavicular line`], `Tricuspid area = lower left sternal border, 5th ICS. Note it projects behind the right sternum but is heard on the left.`)],
      [q(`A holosystolic murmur is loudest at the lower left sternal border and does not radiate to the axilla. Which valve area is it loudest over?`, `Tricuspid`, [`Mitral`, `Aortic`, `Pulmonic`], `Lower left sternal border (left 5th ICS) is the tricuspid area.`)]),

    C("Mitral valve",
      `<p><strong>Surface projection:</strong> left of the sternum at the 4th intercostal junction.</p>
      <p><strong>Auscultated:</strong> <strong>5th intercostal space at the midclavicular line</strong> (apex, mitral area; same spot as the PMI).</p>`,
      ["mitral"],
      [q(`Where is the mitral valve best auscultated?`, `5th ICS at the midclavicular line (apex)`, [`Left 5th ICS at the sternal border`, `Left 2nd ICS`, `Right 2nd ICS`], `Mitral area = apex, 5th ICS MCL.`)],
      [q(`You place your stethoscope over the palpable apical impulse in the 5th interspace at the midclavicular line. Which valve area is this?`, `Mitral`, [`Tricuspid`, `Pulmonic`, `Aortic`], `The apex is the mitral area.`)]),

    C("The full auscultation sequence",
      `<p>Listen at all six sites with the <strong>diaphragm</strong>: <strong>right 2nd ICS (aortic) &rarr; left 2nd ICS (pulmonic) &rarr; left 3rd ICS &rarr; left 4th ICS &rarr; left 5th ICS (tricuspid) &rarr; apex (mitral)</strong>.</p>
      <p>Then repeat with the <strong>bell</strong> at the left 4th ICS, left 5th ICS, and apex.</p>
      ${CL}the left 3rd ICS is commonly called <strong>Erb's point</strong>.</p>`,
      ["auscultation-sequence", "left-third-ics"],
      [q(`Which site is included in the lecture's diaphragm sequence between the pulmonic area and the tricuspid area?`, `Left 3rd and 4th intercostal spaces`, [`Right 5th intercostal space`, `Suprasternal notch`, `Left midaxillary line`], `Sequence: R2, L2, L3, L4, L5 (tricuspid), apex (mitral).`)],
      [q(`A student listens only at the aortic, pulmonic, tricuspid, and mitral areas with the diaphragm. Which sites did she skip?`, `Left 3rd and left 4th intercostal spaces`, [`Right 3rd and right 4th intercostal spaces`, `The suprasternal notch and epigastrium`, `The midaxillary line bilaterally`], `The full diaphragm sequence includes L3 and L4 along the left sternal border.`)])
  ]),

  /* ---------------------------------------------------------------- 5 */
  S("05-skin-findings", "5. Normal vs abnormal skin findings related to the cardiovascular system", "Objective 5. Slides 39-43.", [
    C("Skin inspection",
      `<p>Look for <strong>ulcers</strong>, <strong>nonhealing wounds</strong>, <strong>abnormal venous patterns</strong>, <strong>skin color</strong>, and <strong>hair distribution</strong>.</p>
      <table class="learn-table"><tr><th>Normal</th><th>Abnormal</th></tr>
      <tr><td>Intact skin, normal color, normal hair distribution, no abnormal veins</td><td>Ulcers, nonhealing wounds, abnormal venous patterns, discoloration/pallor, hair loss (e.g., anterior tibia with poor arterial flow)</td></tr></table>`,
      ["skin-inspection", "ulcers-wounds", "venous-patterns", "hair-distribution"],
      [q(`Which skin findings are part of the cardiovascular skin assessment?`, `Ulcers, nonhealing wounds, abnormal venous patterns, color, and hair distribution`, [`Moles, freckles, and tattoos only`, `Acne and rosacea only`, `Skin turgor only`], `The slide lists ulcers, nonhealing wounds, venous patterns, color, and hair distribution.`)],
      [q(`A diabetic smoker has a nonhealing ulcer on the toe and shiny hairless shins. How should these findings be classified?`, `Abnormal skin findings suggesting poor perfusion`, [`Normal age-related findings`, `Signs of normal hair cycling`, `Findings unrelated to the cardiovascular exam`], `Nonhealing wounds and abnormal hair distribution are abnormal cardiovascular skin findings.`)]),

    C("Clubbing",
      `<p><strong>Clubbing</strong> = <strong>bulbous swelling of the soft tissue at the nail base</strong>, seen in <strong>hypoxic conditions</strong> and certain heart conditions.</p>
      <p>Normal: no bulbous swelling at the nail base.</p>`,
      ["clubbing"],
      [q(`What is fingernail clubbing?`, `Bulbous swelling of the soft tissue at the nail base`, [`Horizontal white lines across the nail`, `Spoon-shaped concave nails`, `Small splinter hemorrhages under the nail`], `Clubbing is soft tissue swelling at the nail base from chronic hypoxia or certain heart conditions.`)],
      [q(`A patient with a long-standing cyanotic congenital heart defect has bulbous swelling at the base of every fingernail. What is this and what does it suggest?`, `Clubbing, suggesting chronic hypoxia`, [`Koilonychia, suggesting iron deficiency`, `Onycholysis, suggesting thyroid disease`, `Normal nails`], `Clubbing is linked to hypoxic and certain heart conditions.`)]),

    C("Capillary refill",
      `<p>Check capillary refill in the <strong>fingernails and toenails</strong>.</p>
      <div class="box-hy"><span class="lbl">High yield</span>Per the lecture, refill <strong>greater than 5 seconds</strong> suggests <strong>poor peripheral circulation</strong>.</div>`,
      ["capillary-refill"],
      [q(`Per the lecture, capillary refill greater than how many seconds suggests poor peripheral circulation?`, `5 seconds`, [`1 second`, `10 seconds`, `30 seconds`], `The slide states greater than 5 seconds suggests poor peripheral circulation.`)],
      [q(`After you blanch a patient's great toenail, color takes 7 seconds to return. What does this suggest?`, `Poor peripheral circulation`, [`Normal circulation`, `Lymphedema`, `Venous insufficiency only`], `Refill over 5 seconds = poor peripheral circulation.`)]),

    C("Cyanotic lips",
      `<p>Observe the lips: <strong>bluish-tinged lips</strong> (cyanosis) suggest <strong>hypoxia</strong>. Normal lips are pink.</p>`,
      ["cyanosis"],
      [q(`Bluish-tinged lips suggest what?`, `Hypoxia`, [`Anemia only`, `Jaundice`, `Hypercalcemia`], `Cyanotic lips suggest hypoxia.`)],
      [q(`A patient in respiratory distress has blue-tinged lips. What does this skin finding indicate?`, `Hypoxia`, [`Normal perfusion`, `Hyperbilirubinemia`, `Carotenemia`], `Lip cyanosis indicates hypoxia.`)]),

    C("Pitting edema: technique and grading",
      `<p><strong>Technique:</strong> press firmly but gently with your thumb for <strong>1-2 seconds</strong> over the <strong>dorsum of each foot</strong>, <strong>behind each medial malleolus</strong>, and over the <strong>anterior tibia</strong>. Look for pitting (a depression from your thumb).</p>
      <table class="learn-table"><tr><th>Grade</th><th>Depth</th><th>Rebound</th></tr>
      <tr><td>None</td><td>No pitting = normal</td><td>-</td></tr>
      <tr><td>1+</td><td>Barely detectable, &lt;2 mm</td><td>-</td></tr>
      <tr><td>2+</td><td>Slight, 2-4 mm</td><td>15 seconds</td></tr>
      <tr><td>3+</td><td>Deeper, 4-6 mm</td><td>30 seconds</td></tr>
      <tr><td>4+</td><td>Very deep, 6-8 mm</td><td>&gt;30 seconds</td></tr></table>
      <div class="box-mnemonic"><span class="lbl">Mnemonic</span>Each grade adds about <strong>2 mm</strong>: 1+ &lt;2, 2+ 2-4, 3+ 4-6, 4+ 6-8.</div>`,
      ["edema-technique", "edema-grading", "edema-1", "edema-2", "edema-3", "edema-4"],
      [q(`Where should you press to check for lower extremity pitting edema?`, `Dorsum of the foot, behind the medial malleolus, and over the anterior tibia`, [`Plantar heel, lateral thigh, and popliteal fossa`, `Over the patella only`, `Calf and gluteal region only`], `The three sites are dorsum of foot, behind medial malleolus, and anterior tibia.`),
       q(`A slight indentation of 2-4 mm that rebounds in about 15 seconds is graded as what?`, `2+`, [`1+`, `3+`, `4+`], `2+ = 2-4 mm, 15 seconds to rebound.`),
       q(`A very deep indentation of 6-8 mm that takes more than 30 seconds to rebound is graded as what?`, `4+`, [`3+`, `2+`, `1+`], `4+ = 6-8 mm, >30 seconds.`)],
      [q(`Pressing over a patient's anterior tibia for 2 seconds leaves a 5 mm pit that takes about 30 seconds to fill in. How do you document it?`, `3+ pitting edema`, [`1+ pitting edema`, `2+ pitting edema`, `4+ pitting edema`], `4-6 mm with 30-second rebound = 3+.`),
       q(`You press the dorsum of a patient's foot and leave a barely detectable impression less than 2 mm deep. How is this graded?`, `1+ pitting edema`, [`No edema`, `2+ pitting edema`, `3+ pitting edema`], `Barely detectable, <2 mm = 1+.`)])
  ]),

  /* ---------------------------------------------------------------- 6 */
  S("06-pmi", "6. Locate the PMI, its anatomical source, and causes of an abnormal PMI", "Objective 6. Slides 33, 44-45.", [
    C("How to locate the PMI",
      `<ol><li><strong>Inspect</strong> the left anterior chest for a visible PMI.</li>
      <li><strong>Palpate</strong> at the apex using your <strong>finger pads</strong>.</li>
      <li>Locate it <strong>vertically by intercostal space</strong> (usually the <strong>5th, or 4th</strong>) and <strong>horizontally by centimeters from the midclavicular line</strong>.</li></ol>`,
      ["pmi-inspect", "pmi-palpate-finger-pads", "pmi-location"],
      [q(`Which part of the hand is used to palpate the PMI?`, `Finger pads`, [`Ball/heel of the hand`, `Back of the hand`, `Fingertips with nails`], `PMI and heaves: finger pads. Thrills: ball/heel of hand.`),
       q(`How is the horizontal location of the PMI described?`, `Distance in centimeters from the midclavicular line`, [`Distance in centimeters from the nipple`, `Number of ribs below the clavicle`, `Distance from the xiphoid`], `Vertical = intercostal space; horizontal = cm from the MCL.`)],
      [q(`You feel the apical impulse in the 5th interspace right at the midclavicular line. How do you document its location?`, `5th intercostal space at the midclavicular line`, [`2nd intercostal space at the sternal border`, `Anterior axillary line, 7th interspace`, `Left sternal border, 3rd interspace`], `The documentation example: PMI tapping at 5th interspace at MCL.`)]),

    C("Normal PMI characteristics and anatomical source",
      `<p>The PMI is the <strong>apical impulse of the left ventricle</strong> (apex of the heart).</p>
      <table class="learn-table"><tr><th>Feature</th><th>Normal</th></tr>
      <tr><td>Location</td><td>5th (or 4th) ICS at/near the MCL</td></tr>
      <tr><td>Diameter</td><td>Occupies <strong>one interspace</strong> and <strong>&lt;2.5 cm</strong></td></tr>
      <tr><td>Amplitude and duration</td><td><strong>Brisk and non-sustained</strong> (tapping)</td></tr></table>`,
      ["pmi-lv-apex", "pmi-diameter", "pmi-amplitude-duration"],
      [q(`What is the normal diameter of the PMI?`, `Less than 2.5 cm, occupying one interspace`, [`Less than 5 cm, occupying two interspaces`, `Greater than 3 cm`, `Exactly 1 cm in every patient`], `Normal PMI is <2.5 cm and within one interspace.`),
       q(`The PMI reflects which part of the heart?`, `The apex of the left ventricle`, [`The right ventricular outflow tract`, `The right atrium`, `The aortic root`], `The apical impulse is generated by the LV apex.`)],
      [q(`A patient's PMI is 2 cm in diameter, brisk, and non-sustained at the 5th ICS MCL. How do you interpret this?`, `Normal PMI`, [`Displaced PMI from dilated ventricle`, `Hyperkinetic PMI from aortic regurgitation`, `Sustained PMI from LV hypertrophy`], `Under 2.5 cm, one space, brisk and non-sustained = normal.`)]),

    C("Abnormal PMI and its causes",
      `<table class="learn-table"><tr><th>PMI quality</th><th>Meaning</th></tr>
      <tr><td><strong>Tapping</strong></td><td>Normal</td></tr>
      <tr><td><strong>Forceful</strong>, terminates quickly</td><td><strong>Hyperkinesis</strong>: hypermetabolic states or <strong>aortic regurgitation</strong></td></tr>
      <tr><td><strong>Diffuse and/or displaced</strong></td><td><strong>Dilated ventricle</strong>: heart failure or cardiomyopathy</td></tr></table>`,
      ["pmi-tapping-normal", "pmi-forceful-hyperkinetic", "pmi-diffuse-displaced"],
      [q(`A diffuse and/or displaced PMI suggests what?`, `A dilated ventricle from heart failure or cardiomyopathy`, [`A normal heart`, `A hypermetabolic state`, `Mitral stenosis`], `Diffuse/displaced = dilated ventricle (HF, cardiomyopathy).`),
       q(`A forceful PMI that terminates quickly suggests which of the following?`, `Hyperkinesis from a hypermetabolic state or aortic regurgitation`, [`Dilated cardiomyopathy`, `Normal finding`, `Pericardial effusion`], `Forceful and brief = hyperkinetic (hypermetabolic states, AR).`)],
      [q(`A patient with known heart failure has an apical impulse felt in the 6th interspace at the anterior axillary line over two interspaces. What does this suggest?`, `A dilated left ventricle`, [`Normal PMI`, `Hyperkinetic state from anemia`, `Right ventricular hypertrophy only`], `A diffuse, displaced PMI suggests a dilated ventricle.`),
       q(`A thyrotoxic patient has a forceful apical impulse that taps briefly and terminates quickly. Best interpretation?`, `Hyperkinetic PMI from a hypermetabolic state`, [`Dilated ventricle from cardiomyopathy`, `Normal tapping PMI`, `Ventricular aneurysm`], `Forceful, quickly terminating = hyperkinesis.`)])
  ]),

  /* ---------------------------------------------------------------- 7 */
  S("07-chest-wall-inspection-palpation", "7. Normal vs abnormal inspection and palpation of the chest wall", "Objective 7. Slides 46-49.", [
    C("Inspection: lifts and heaves",
      `<p><strong>Inspect</strong> for <strong>lifts/heaves</strong> using <strong>tangential light</strong>. They are produced by <strong>forceful cardiac contractions</strong>.</p>
      <p>Inspect over the <strong>aortic</strong> (R 2nd ICS), <strong>pulmonic</strong> (L 2nd ICS), <strong>left 3rd interspace</strong>, and <strong>apex (PMI)</strong>.</p>
      <p><strong>Normal:</strong> no lifts or heaves (a small apical impulse may be visible).</p>`,
      ["inspection-tangential-light", "lifts-heaves", "inspection-sites"],
      [q(`What lighting technique is used to inspect the chest wall for lifts and heaves?`, `Tangential light`, [`Direct overhead light`, `Transillumination`, `Ultraviolet light`], `Tangential light highlights subtle movement.`),
       q(`Lifts and heaves seen on inspection are produced by what?`, `Forceful cardiac contractions`, [`Turbulent blood flow`, `Pericardial friction`, `Venous pulsations`], `Lifts/heaves = forceful contractions; thrills = turbulent flow.`)],
      [q(`During inspection with a penlight held across the chest, you see the left parasternal area rise with each beat. How should you document this?`, `An abnormal lift/heave`, [`Normal chest wall`, `A thrill`, `A normal PMI`], `A visible heave is abnormal; normal documentation is "no lifts or heaves."`)]),

    C("Palpation: heaves/impulses with finger pads",
      `<p>Palpate for <strong>heaves/impulses</strong> using <strong>finger pads</strong> over the <strong>aortic</strong>, <strong>pulmonic</strong>, and <strong>apex (PMI)</strong> areas.</p>
      <p>Heaves are produced by an <strong>enlarged right or left ventricle</strong> and <strong>ventricular aneurysms</strong>.</p>`,
      ["palpate-heaves-finger-pads", "heave-causes"],
      [q(`Palpable heaves are produced by which of the following?`, `Enlarged right or left ventricle and ventricular aneurysm`, [`Turbulent flow across a valve`, `Normal atrial contraction`, `Pericardial friction rub`], `Heaves: enlarged ventricle or ventricular aneurysm.`)],
      [q(`A patient with long-standing pulmonary hypertension has a sustained impulse at the left sternal border felt with your finger pads. What does this suggest?`, `An enlarged right ventricle`, [`A normal chest wall`, `Turbulent flow causing a thrill`, `An enlarged left atrium`], `A heave over the RV area suggests RV enlargement.`)]),

    C("Palpation: thrills with the ball/heel of hand",
      `<p>Palpate for <strong>thrills</strong> using the <strong>ball/heel of the hand</strong>. Thrills are produced by <strong>underlying turbulent flow</strong>.</p>
      <p>Sites: <strong>left sternal border (4th/5th interspace)</strong> and <strong>apex (PMI)</strong>.</p>
      <table class="learn-table"><tr><th>Finding</th><th>Hand part</th><th>Cause</th></tr>
      <tr><td>Heave/impulse</td><td>Finger pads</td><td>Enlarged ventricle, aneurysm</td></tr>
      <tr><td>Thrill</td><td>Ball/heel of hand</td><td>Turbulent flow</td></tr></table>
      <p><strong>Normal:</strong> no thrills, heaves, or lifts.</p>`,
      ["palpate-thrills-heel", "thrill-turbulent-flow", "thrill-sites"],
      [q(`Which part of the hand is best for palpating thrills?`, `Ball/heel of the hand`, [`Finger pads`, `Fingertips`, `Back of the hand`], `Thrills: ball/heel of hand. Heaves and PMI: finger pads.`),
       q(`What produces a thrill?`, `Underlying turbulent blood flow`, [`Forceful ventricular contraction`, `Ventricular aneurysm`, `Normal valve closure`], `A thrill is the palpable vibration of turbulent flow.`)],
      [q(`With the heel of your hand at the left sternal border in the 4th interspace, you feel a buzzing vibration. What is this and what causes it?`, `A thrill from turbulent flow`, [`A heave from ventricular enlargement`, `A normal PMI`, `A friction rub from pericarditis`], `A palpable buzzing vibration is a thrill from turbulent flow.`)])
  ]),

  /* ---------------------------------------------------------------- 8 */
  S("08-diaphragm-vs-bell", "8. Diaphragm vs bell for detecting heart sounds", "Objective 8. Slides 50-53.", [
    C("Diaphragm: high-pitched sounds",
      `<p>The <strong>diaphragm</strong> detects <strong>high-pitched</strong> sounds:</p>
      <ul><li><strong>S1 and S2</strong></li><li>Murmurs of <strong>aortic regurgitation</strong> and <strong>mitral regurgitation</strong></li><li><strong>Pericardial friction rubs</strong></li></ul>
      <p>Use it at all six sites: R 2nd ICS (aortic), L 2nd ICS (pulmonic), L 3rd, L 4th, L 5th ICS (tricuspid), apex (mitral).</p>
      ${CL}press the diaphragm <strong>firmly</strong> against the skin.</p>`,
      ["diaphragm-high-pitched", "diaphragm-s1-s2", "diaphragm-ar-mr", "diaphragm-friction-rub", "diaphragm-sites"],
      [q(`Which sounds are best heard with the diaphragm?`, `S1, S2, aortic and mitral regurgitation murmurs, and pericardial friction rubs`, [`S3, S4, and mitral stenosis`, `Only S3 and S4`, `Only carotid bruits`], `Diaphragm = high-pitched sounds.`)],
      [q(`You suspect pericarditis and want to hear a friction rub. Which stethoscope head should you use?`, `Diaphragm`, [`Bell`, `Either; it makes no difference`, `Neither; rubs are only palpable`], `Friction rubs are high-pitched: diaphragm.`)]),

    C("Bell: low-pitched sounds",
      `<p>The <strong>bell</strong> detects <strong>low-pitched</strong> sounds:</p>
      <ul><li><strong>S3 and S4</strong></li><li>Murmur of <strong>mitral stenosis</strong></li></ul>
      <p>Use it at the <strong>left 4th ICS, left 5th ICS (tricuspid), and apex (mitral)</strong>.</p>
      ${CL}rest the bell <strong>lightly</strong>; pressing hard stretches the skin into a diaphragm and filters out low tones.</p>
      <div class="box-mnemonic"><span class="lbl">Mnemonic</span><strong>Bell = Bass</strong>: low-pitched S3, S4, mitral stenosis.</div>`,
      ["bell-low-pitched", "bell-s3-s4", "bell-mitral-stenosis", "bell-sites"],
      [q(`Which sounds are best heard with the bell?`, `S3, S4, and the murmur of mitral stenosis`, [`S1, S2, and aortic regurgitation`, `Pericardial friction rubs`, `Mitral regurgitation only`], `Bell = low-pitched sounds.`),
       q(`At which sites does the lecture have you listen with the bell?`, `Left 4th ICS, left 5th ICS, and apex`, [`Right 2nd ICS and left 2nd ICS only`, `All six sites including the aortic area`, `Suprasternal notch only`], `Bell: L4, L5 (tricuspid), apex (mitral).`)],
      [q(`You want to listen for a low-pitched diastolic rumble at the apex. Which stethoscope head should you use?`, `Bell`, [`Diaphragm pressed firmly`, `Either head over the aortic area`, `Diaphragm at the right 2nd ICS`], `Low-pitched sounds such as the mitral stenosis rumble: bell at the apex.`)])
  ]),

  /* ---------------------------------------------------------------- 9 */
  S("09-s1-s2-split", "9. S1 vs S2: pathophysiology, auscultation, and the physiological split of S2", "Objective 9. Slides 54-56.", [
    C("S1",
      `<ul><li>Produced by closure of the <strong>mitral and tricuspid</strong> valves.</li>
      <li>Marks the <strong>start of systole</strong>.</li>
      <li>Best heard with the <strong>diaphragm</strong> at the <strong>left 5th ICS, MCL (PMI/apex)</strong>.</li></ul>`,
      ["s1-av-valves", "s1-systole-start", "s1-apex"],
      [q(`Closure of which valves produces S1?`, `Mitral and tricuspid`, [`Aortic and pulmonic`, `Mitral and aortic`, `Tricuspid and pulmonic`], `S1 = AV valve (mitral, tricuspid) closure.`),
       q(`Where is S1 best heard?`, `Left 5th ICS at the midclavicular line (apex)`, [`Left 2nd ICS near the sternum`, `Right 2nd ICS`, `Suprasternal notch`], `S1 is loudest at the apex; S2 at the base.`)],
      [q(`At the apex you hear two sounds; the first is louder. Which valve closures does that louder first sound represent?`, `Mitral and tricuspid closure`, [`Aortic and pulmonic closure`, `Rapid ventricular filling`, `Atrial contraction into a stiff ventricle`], `S1 is loudest at the apex and comes from AV valve closure.`)]),

    C("S2",
      `<ul><li>Produced by closure of the <strong>aortic (A2) and pulmonic (P2)</strong> valves.</li>
      <li>Marks the <strong>end of systole/start of diastole</strong>.</li>
      <li>Best heard with the <strong>diaphragm</strong> over the <strong>left 2nd ICS close to the sternal border</strong>.</li></ul>`,
      ["s2-semilunar-valves", "s2-diastole-start", "s2-base"],
      [q(`Closure of which valves produces S2?`, `Aortic and pulmonic`, [`Mitral and tricuspid`, `Mitral and pulmonic`, `Tricuspid and aortic`], `S2 = A2 + P2.`),
       q(`Where is S2 best heard?`, `Left 2nd ICS near the sternal border`, [`5th ICS at the midclavicular line`, `Left 5th ICS at the sternal border`, `Left midaxillary line`], `S2 is loudest at the base, left 2nd ICS.`)],
      [q(`At the left 2nd interspace near the sternum the second heart sound is louder than the first. Why?`, `S2 (aortic and pulmonic closure) is best heard at the base`, [`S1 is best heard at the base`, `S2 is produced by mitral closure`, `This always indicates a murmur`], `Base = S2 louder; apex = S1 louder.`)]),

    C("Telling S1 from S2 with the carotid pulse",
      `<p>Auscultate while <strong>palpating the carotid pulse</strong>:</p>
      <ul><li><strong>S1</strong> falls <strong>just before</strong> the carotid upstroke.</li>
      <li><strong>S2</strong> <strong>follows</strong> the carotid upstroke.</li></ul>
      <p>Timeline: S1 &rarr; systole &rarr; S2 &rarr; diastole (longer) &rarr; S1.</p>`,
      ["s1-s2-carotid-timing"],
      [q(`Relative to the carotid upstroke, when does S1 occur?`, `Just before the carotid upstroke`, [`Just after the carotid upstroke`, `In the middle of diastole`, `Only during inspiration`], `S1 just before; S2 follows the upstroke.`)],
      [q(`At a fast heart rate you cannot tell which sound is S1. What should you do?`, `Palpate the carotid pulse while listening; the sound just before the upstroke is S1`, [`Listen only with the bell`, `Have the patient hold their breath in inspiration`, `Count the respiratory rate`], `Timing to the carotid upstroke distinguishes S1 from S2.`)]),

    C("Physiological split of S2 and how to augment it",
      `<ul><li>S2 is usually <strong>single during expiration</strong>.</li>
      <li>During <strong>inspiration</strong>, A2 and P2 may separate: the <strong>physiological split</strong>.</li>
      <li><strong>Augment it</strong> by listening at the <strong>left 2nd ICS (pulmonic area)</strong> with the diaphragm while the patient <strong>breathes in</strong>.</li></ul>
      ${CL}inspiration increases venous return to the right heart, so the RV takes longer to empty and <strong>P2 closes later than A2</strong>. A soft P2 is heard best in the pulmonic area.</p>`,
      ["s2-physiologic-split", "split-inspiration", "split-augment", "split-mechanism"],
      [q(`When does the physiological split of S2 occur?`, `During inspiration`, [`During expiration`, `Only during breath holding`, `Only with the patient prone`], `S2 is single in expiration and splits with inspiration.`),
       q(`In the physiological split, which component closes later?`, `P2 (pulmonic)`, [`A2 (aortic)`, `M1 (mitral)`, `T1 (tricuspid)`], `Inspiration delays RV emptying, so P2 follows A2.`)],
      [q(`You want to demonstrate a physiological split of S2 to a student. What is the best approach?`, `Listen at the left 2nd ICS with the diaphragm while the patient inhales`, [`Listen at the apex with the bell during expiration`, `Have the patient exhale fully and hold`, `Listen at the right 2nd ICS during breath holding`], `Split is heard at the pulmonic area during inspiration.`)])
  ]),

  /* ---------------------------------------------------------------- 10 */
  S("10-s3-s4", "10. S3 and S4 heart sounds and their associated diagnoses", "Objective 10. Slides 57-58.", [
    C("S3: ventricular diastolic gallop",
      `<ul><li>Also called the <strong>ventricular diastolic gallop</strong>.</li>
      <li><strong>Low-pitched</strong>, at the <strong>beginning of diastole shortly after S2</strong>.</li>
      <li>Best heard at the <strong>apex with the bell</strong>, patient in <strong>left lateral decubitus</strong>.</li>
      <li>Produced by blood entering the ventricle during the <strong>rapid filling phase</strong> of diastole.</li>
      <li>Heard in <strong>hyperdynamic states</strong> (rapid early diastolic filling).</li>
      <li><strong>Increase venous return &rarr; louder S3</strong>; decrease venous return &rarr; softer S3.</li></ul>
      ${CL}a pathologic S3 is classically associated with <strong>heart failure/volume overload</strong>; it can be normal in children, young adults, and pregnancy.</p>`,
      ["s3-timing", "s3-bell-apex-lld", "s3-rapid-filling", "s3-hyperdynamic", "s3-venous-return", "s3-heart-failure"],
      [q(`When in the cardiac cycle does S3 occur?`, `Early diastole, shortly after S2`, [`Late diastole, just before S1`, `Mid-systole`, `Simultaneous with S1`], `S3 = early diastole after S2.`),
       q(`What produces S3?`, `Blood entering the ventricle during the rapid filling phase`, [`Blood forced into a stiff ventricle by atrial contraction`, `Closure of the aortic valve`, `Opening of a stenotic mitral valve`], `S3 = rapid early diastolic filling.`),
       q(`How do maneuvers that increase venous return affect S3?`, `They accentuate (louden) S3`, [`They soften S3`, `They have no effect on S3`, `They convert S3 to S4`], `More venous return = louder S3.`)],
      [q(`A patient with heart failure and leg edema has an extra low-pitched sound right after S2, heard best with the bell at the apex in left lateral decubitus. What is it?`, `S3`, [`S4`, `Split S2`, `Pericardial friction rub`], `Early diastolic, low-pitched, apex with bell: S3, classically HF/volume overload.`)]),

    C("S4: atrial diastolic gallop",
      `<ul><li>Also called the <strong>atrial diastolic gallop</strong>.</li>
      <li><strong>Low-pitched</strong>, at the <strong>end of diastole immediately before S1</strong>.</li>
      <li>Best heard at the <strong>apex with the bell</strong>.</li>
      <li>Produced by blood being forced into a <strong>stiff or hypertrophic ventricle</strong>.</li>
      <li>Associated diagnoses: <strong>LV hypertrophy</strong> (<strong>hypertension, aortic stenosis, hypertrophic cardiomyopathy</strong>), <strong>acute myocardial ischemia</strong>, <strong>hyperkinetic states</strong>.</li>
      <li>Frequently also <strong>palpable</strong> at the apex.</li></ul>`,
      ["s4-timing", "s4-bell-apex", "s4-stiff-ventricle", "s4-lvh-causes", "s4-ischemia", "s4-palpable"],
      [q(`When does S4 occur?`, `End of diastole, immediately before S1`, [`Early diastole, right after S2`, `Mid-systole`, `Immediately after S1`], `S4 = late diastole, just before S1.`),
       q(`S4 is produced by blood being forced into what kind of ventricle?`, `A stiff or hypertrophic ventricle`, [`A dilated, volume-overloaded ventricle`, `A normal compliant ventricle`, `A ventricle with a ruptured septum`], `S4 = atrial contraction into a stiff/hypertrophic ventricle.`)],
      [q(`A patient with long-standing hypertension has a low-pitched sound immediately before S1 at the apex. Which sound is this?`, `S4`, [`S3`, `Physiological split S2`, `Opening snap`], `Pre-S1 low-pitched sound in LVH from HTN = S4.`),
       q(`Which patient is most likely to have an S4?`, `A patient with aortic stenosis and LV hypertrophy`, [`A healthy patient with no cardiac disease`, `A patient with isolated venous insufficiency`, `A patient with vasovagal syncope`], `S4 associations: LVH (HTN, AS, HCM), acute ischemia, hyperkinetic states.`)]),

    C("S3 vs S4 side by side",
      `<table class="learn-table"><tr><th></th><th>S3</th><th>S4</th></tr>
      <tr><td>Name</td><td>Ventricular diastolic gallop</td><td>Atrial diastolic gallop</td></tr>
      <tr><td>Timing</td><td>Early diastole, after S2</td><td>Late diastole, before S1</td></tr>
      <tr><td>Mechanism</td><td>Rapid early filling</td><td>Blood forced into stiff ventricle</td></tr>
      <tr><td>Listen</td><td>Bell, apex, left lateral decubitus</td><td>Bell, apex (often palpable)</td></tr>
      <tr><td>Associations</td><td>Hyperdynamic states; (HF/volume overload)</td><td>LVH (HTN, AS, HCM), acute ischemia, hyperkinetic states</td></tr></table>
      <div class="box-mnemonic"><span class="lbl">Mnemonic</span><strong>S3 "Ken-tuck-y"</strong> (S1-S2-<strong>S3</strong>): extra beat after S2. <strong>S4 "Ten-nes-see"</strong> (<strong>S4</strong>-S1-S2): extra beat before S1.</div>`,
      ["s3-s4-compare", "gallop-cadence"],
      [q(`The cadence "Ten-nes-see" represents which heart sound sequence?`, `S4-S1-S2`, [`S1-S2-S3`, `S1-split S2`, `S1-S2-opening snap`], `"TEN" is the S4 before S1.`)],
      [q(`You hear "Ken-tuck-y" at the apex with the bell. Which extra sound is present and when does it occur?`, `S3, in early diastole after S2`, [`S4, in late diastole before S1`, `A split S1`, `A systolic click`], `Kentucky = S1-S2-S3.`)])
  ]),

  /* ---------------------------------------------------------------- 11 */
  S("11-augment-ms-ar", "11. Techniques to augment mitral stenosis and aortic regurgitation", "Objective 11. Slides 59-60.", [
    C("Augmenting mitral stenosis",
      `<ol><li>Have the patient roll partly onto the <strong>left side (left lateral decubitus)</strong>, bringing the LV close to the chest wall.</li>
      <li>Place the <strong>bell</strong> on the <strong>apical impulse</strong>.</li></ol>
      <div class="box-hy"><span class="lbl">High yield</span>MS = <strong>Left side, Bell, Apex</strong>.</div>`,
      ["ms-left-lateral-decubitus", "ms-bell-apex"],
      [q(`Which position augments the murmur of mitral stenosis?`, `Left lateral decubitus`, [`Sitting up, leaning forward, exhaled`, `Prone`, `Standing with Valsalva`], `Rolling onto the left side brings the LV against the chest wall.`),
       q(`Which stethoscope head and site are used for mitral stenosis?`, `Bell on the apical impulse`, [`Diaphragm at the left sternal border`, `Diaphragm at the right 2nd ICS`, `Bell at the left 2nd ICS`], `MS is low-pitched: bell at the apex.`)],
      [q(`You suspect mitral stenosis in a patient with a history of rheumatic fever. How should you position and listen?`, `Roll the patient partly onto the left side and place the bell on the apical impulse`, [`Sit the patient up, lean forward, exhale; diaphragm at the left sternal border`, `Supine, diaphragm at the right 2nd ICS`, `Standing, bell at the pulmonic area`], `MS: left lateral decubitus, bell, apex.`)]),

    C("Augmenting aortic regurgitation",
      `<ol><li>Have the patient <strong>sit up, lean forward, exhale completely, and pause</strong> in expiration.</li>
      <li>Place the <strong>diaphragm</strong> along the <strong>left sternal border (3rd/4th interspaces)</strong> and at the <strong>apex</strong>.</li></ol>
      <table class="learn-table"><tr><th>Murmur</th><th>Position</th><th>Head</th><th>Site</th></tr>
      <tr><td>Mitral stenosis</td><td>Left lateral decubitus</td><td>Bell</td><td>Apex</td></tr>
      <tr><td>Aortic regurgitation</td><td>Sit up, lean forward, full exhale, hold</td><td>Diaphragm</td><td>LSB 3rd/4th ICS and apex</td></tr></table>`,
      ["ar-lean-forward-exhale", "ar-diaphragm-lsb"],
      [q(`Which maneuver augments aortic regurgitation?`, `Sit up, lean forward, exhale completely, and hold in expiration`, [`Left lateral decubitus with the bell at the apex`, `Lie supine and inhale deeply`, `Squat then stand quickly`], `AR: lean forward, exhale, hold.`),
       q(`Where do you place the stethoscope to listen for aortic regurgitation?`, `Diaphragm along the left sternal border (3rd/4th ICS) and at the apex`, [`Bell at the right 2nd ICS only`, `Bell at the apex only`, `Diaphragm over the carotid artery`], `AR is high-pitched: diaphragm at LSB 3rd/4th and apex.`)],
      [q(`A patient has a forceful, quickly terminating PMI and you suspect aortic regurgitation. Which technique best brings out the murmur?`, `Have the patient sit up, lean forward, exhale fully and hold; listen with the diaphragm along the left sternal border`, [`Left lateral decubitus with the bell at the apex`, `Supine with the bell at the left 2nd ICS during inspiration`, `Have the patient stand and hold their breath in inspiration`], `AR: lean forward, full exhale, diaphragm at LSB.`)])
  ]),

  /* ---------------------------------------------------------------- 12 */
  S("12-jvp", "12. Estimating jugular venous pressure, its significance, and normal JVP", "Objective 12. Slides 61-66.", [
    C("What JVP reflects and why the right internal jugular",
      `<ul><li>JVP reflects <strong>right atrial pressure</strong>, which equals <strong>central venous pressure</strong> and <strong>right ventricular end-diastolic pressure</strong>.</li>
      <li>Best estimated from the <strong>right internal jugular vein</strong>: the <strong>most direct channel into the right atrium</strong>.</li>
      <li>Find the <strong>highest point of oscillation</strong> (near where the vein appears to collapse).</li></ul>`,
      ["jvp-reflects-ra-cvp", "jvp-right-ij"],
      [q(`JVP reflects pressure in which chamber?`, `Right atrium`, [`Left atrium`, `Left ventricle`, `Pulmonary artery wedge`], `JVP = RA pressure = CVP = RVEDP.`),
       q(`Which vein is best for estimating JVP?`, `Right internal jugular vein`, [`Left external jugular vein`, `Right external jugular vein`, `Left subclavian vein`], `The right IJ has the most direct channel into the RA.`)],
      [q(`A student tries to estimate JVP using the left external jugular vein. Which vein should be used instead, and why?`, `Right internal jugular, because it has the most direct path to the right atrium`, [`Left internal jugular, because it is closer to the heart`, `Right external jugular, because it is always visible`, `Carotid artery, because it pulsates more`], `The right IJ is in direct line with the SVC and RA.`)]),

    C("Positioning and finding the pulsation",
      `<ul><li>Raise the head of the bed to about <strong>30 degrees</strong>.</li>
      <li>Turn the head <strong>slightly away</strong> from the side being inspected; keep the patient comfortable so the <strong>SCM relaxes</strong>.</li>
      <li>Use <strong>tangential lighting</strong> and examine <strong>both sides</strong> of the neck.</li>
      <li>If needed, raise or lower the head of the bed until the <strong>meniscus</strong> is in the <strong>lower half of the neck</strong>.</li>
      <li>Look in the <strong>suprasternal notch</strong>, <strong>between the sternal and clavicular heads of the SCM</strong>, or <strong>just posterior to the SCM</strong>.</li>
      <li><strong>Distinguish</strong> internal jugular pulsations from the carotid pulse.</li></ul>
      ${CL}the IJ pulsation is soft, biphasic, not palpable, eliminated by light pressure above the clavicle, and its level changes with position and respiration. The carotid is a single, palpable, firm thrust that does not change with position.</p>`,
      ["jvp-30-degrees", "jvp-head-turn-scm", "jvp-tangential-light", "jvp-adjust-bed", "jvp-where-to-look", "jvp-vs-carotid"],
      [q(`To what angle is the head of the bed typically raised to estimate JVP?`, `About 30 degrees`, [`0 degrees`, `About 60 degrees`, `90 degrees`], `Start at about 30 degrees, then adjust.`),
       q(`Which feature distinguishes the internal jugular pulsation from the carotid pulse?`, `The IJ pulsation is not palpable and is eliminated by light pressure above the clavicle`, [`The IJ pulsation is a firm palpable single thrust`, `The IJ pulsation does not change with position`, `The IJ pulsation is felt best with the heel of the hand`], `Clarification: IJ waves are soft, nonpalpable, compressible, and positional; the carotid is palpable and constant.`)],
      [q(`At 30 degrees you cannot see the top of the venous pulsation; it seems to extend above the angle of the jaw. What should you do?`, `Raise the head of the bed until the meniscus is in the lower half of the neck`, [`Lower the bed flat`, `Stop and record JVP as normal`, `Measure the carotid pulsation instead`], `Adjust the bed so the oscillation point is visible in the lower neck.`)]),

    C("Measuring JVP and normal values",
      `<ol><li>Identify the <strong>highest point of pulsation</strong> in the right IJ.</li>
      <li>Extend a <strong>horizontal</strong> straight edge from that point and hold a <strong>centimeter ruler vertically</strong> on the <strong>sternal angle</strong>, at an exact right angle.</li>
      <li>Measure the <strong>vertical distance above the sternal angle</strong>.</li>
      <li><strong>Add 5 cm</strong> (sternal angle to the center of the RA).</li></ol>
      <div class="box-hy"><span class="lbl">High yield</span><strong>JVP = height above sternal angle + 5 cm. Normal = 6 to 8 cm.</strong></div>`,
      ["jvp-ruler-sternal-angle", "jvp-add-5", "jvp-normal-6-8"],
      [q(`What is the normal JVP?`, `6 to 8 cm`, [`1 to 3 cm`, `10 to 12 cm`, `15 to 20 cm`], `Normal JVP is 6-8 cm.`),
       q(`How many centimeters are added to the measurement above the sternal angle to calculate JVP?`, `5 cm`, [`2 cm`, `8 cm`, `10 cm`], `The sternal angle sits about 5 cm above the center of the RA.`)],
      [q(`The top of the right IJ pulsation is 2 cm vertically above the sternal angle. What is the JVP and is it normal?`, `7 cm; normal`, [`2 cm; low`, `7 cm; elevated`, `12 cm; elevated`], `2 + 5 = 7 cm, within 6-8 cm.`),
       q(`The top of the right IJ pulsation is 6 cm above the sternal angle. What is the JVP?`, `11 cm, elevated`, [`6 cm, normal`, `8 cm, normal`, `1 cm, low`], `6 + 5 = 11 cm, above the 6-8 cm normal range.`)]),

    C("Clinical significance of JVP",
      `<p>Because JVP equals <strong>RA pressure/CVP/RV end-diastolic pressure</strong>, it is a bedside estimate of right-sided filling pressure and volume status.</p>
      ${CL}an <strong>elevated JVP</strong> (above about 8 cm) suggests increased right-sided pressure or volume, as in <strong>heart failure or fluid overload</strong>; a low JVP suggests <strong>volume depletion</strong>.</p>`,
      ["jvp-significance", "jvp-elevated"],
      [q(`An elevated JVP most directly indicates elevated pressure in which location?`, `Right atrium (central venous pressure)`, [`Left ventricle during systole`, `Aorta`, `Pulmonary veins only`], `JVP reflects RA pressure/CVP.`)],
      [q(`A patient with dyspnea, orthopnea, and 3+ leg edema has a JVP of 12 cm. What does this suggest?`, `Elevated right-sided filling pressure consistent with volume overload/heart failure`, [`Normal venous pressure`, `Volume depletion`, `Isolated arterial insufficiency`], `JVP above 8 cm with edema and orthopnea points to volume overload.`)])
  ]),

  /* ---------------------------------------------------------------- 13 */
  S("13-pulses-bruits", "13. Palpable pulse locations, palpation technique, pulse grading, and auscultating bruits", "Objective 13. Slides 67-74.", [
    C("How to palpate pulses",
      `<ul><li>Use the <strong>pads of your 2nd and 3rd fingers</strong>.</li>
      <li><strong>Compare bilaterally</strong>.</li>
      <li>For the <strong>aortic pulse</strong>, use the <strong>entire hand</strong>, pressing deeply in the <strong>upper abdomen slightly left of midline</strong>.</li></ul>`,
      ["pulse-technique-finger-pads", "pulse-bilateral", "aortic-pulse-technique"],
      [q(`What is the best method to palpate peripheral pulses?`, `Pads of the 2nd and 3rd fingers, comparing bilaterally`, [`Thumb, one side at a time`, `Heel of the hand only`, `Fingertips pressing as hard as possible`], `Use the 2nd and 3rd finger pads and compare both sides. Avoid the thumb, which has its own pulse.`),
       q(`How is the abdominal aortic pulse palpated?`, `Entire hand pressing deeply in the upper abdomen slightly left of midline`, [`Two finger pads just right of the umbilicus`, `Lightly over the left lower quadrant`, `Heel of hand over the suprapubic region`], `Aorta: whole hand, deep, upper abdomen slightly left of midline.`)],
      [q(`A student checks a patient's radial pulses one at a time using her thumb. What should she change?`, `Use the pads of the 2nd and 3rd fingers and compare both sides`, [`Nothing; this is correct`, `Use the heel of her hand`, `Use the bell of the stethoscope`], `Correct technique: 2nd/3rd finger pads, bilateral comparison.`)]),

    C("Pulse grading",
      `<table class="learn-table"><tr><th>Grade</th><th>Description</th></tr>
      <tr><td>3+</td><td>Bounding</td></tr>
      <tr><td>2+</td><td>Brisk, expected (<strong>normal</strong>)</td></tr>
      <tr><td>1+</td><td>Diminished, weak</td></tr>
      <tr><td>0</td><td>Absent, cannot palpate</td></tr></table>
      <p>Pulses are graded on <strong>amplitude</strong>.</p>`,
      ["pulse-grading", "pulse-3", "pulse-2", "pulse-1", "pulse-0"],
      [q(`A normal, brisk pulse is graded as what?`, `2+`, [`1+`, `3+`, `4+`], `2+ = brisk, expected.`),
       q(`A bounding pulse is graded as what?`, `3+`, [`2+`, `1+`, `0`], `3+ = bounding.`)],
      [q(`A patient with PAD has a weak, barely felt dorsalis pedis pulse on the right. How do you grade it?`, `1+`, [`0`, `2+`, `3+`], `Diminished, weak = 1+.`),
       q(`You cannot palpate the posterior tibial pulse on one foot even with careful technique. How do you grade it?`, `0`, [`1+`, `2+`, `3+`], `Absent/cannot palpate = 0.`)]),

    C("Upper body pulse locations",
      `<p>From the slide photos:</p>
      <table class="learn-table"><tr><th>Pulse</th><th>Where to feel it</th></tr>
      <tr><td>Temporal</td><td>In front of the ear (anterior to the tragus), over the temporal bone</td></tr>
      <tr><td>Carotid</td><td>Neck, medial to the sternocleidomastoid, below the angle of the jaw (one side at a time)</td></tr>
      <tr><td>Brachial</td><td>Antecubital fossa, medial to the biceps tendon</td></tr>
      <tr><td>Radial</td><td>Lateral (thumb side) volar wrist</td></tr>
      <tr><td>Ulnar</td><td>Medial (pinky side) volar wrist</td></tr></table>
      ${CL}feel each carotid separately so you do not reduce cerebral blood flow.</p>`,
      ["temporal-pulse", "carotid-pulse", "brachial-pulse", "radial-pulse", "ulnar-pulse"],
      [q(`Where is the brachial pulse palpated?`, `Antecubital fossa, medial to the biceps tendon`, [`Lateral volar wrist`, `Anterior to the tragus`, `Behind the medial malleolus`], `Brachial: medial antecubital fossa.`),
       q(`Where is the ulnar pulse palpated?`, `Medial (pinky side) volar wrist`, [`Lateral (thumb side) volar wrist`, `Antecubital fossa`, `Dorsum of the hand`], `Radial = thumb side; ulnar = pinky side.`),
       q(`Where is the temporal pulse palpated?`, `Just anterior to the tragus of the ear`, [`Behind the ear over the mastoid`, `Below the angle of the jaw`, `At the suprasternal notch`], `Temporal artery: in front of the ear.`)],
      [q(`Before taking a blood pressure, you place your fingers medial to the biceps tendon in the antecubital fossa. Which pulse are you palpating?`, `Brachial`, [`Radial`, `Ulnar`, `Axillary`], `The brachial pulse is medial to the biceps tendon.`),
       q(`You palpate a pulse in the neck medial to the sternocleidomastoid. Which pulse is it?`, `Carotid`, [`Temporal`, `External jugular`, `Subclavian`], `The carotid lies medial to the SCM.`)]),

    C("Lower body pulse locations",
      `<table class="learn-table"><tr><th>Pulse</th><th>Where to feel it</th></tr>
      <tr><td>Aortic</td><td>Upper abdomen, slightly left of midline (whole hand, deep)</td></tr>
      <tr><td>Femoral</td><td>Groin, below the inguinal ligament, midway between the ASIS and pubic symphysis</td></tr>
      <tr><td>Popliteal</td><td>Behind the knee in the popliteal fossa, knee slightly flexed, both hands</td></tr>
      <tr><td>Posterior tibial</td><td>Behind the <strong>medial malleolus</strong></td></tr>
      <tr><td>Dorsalis pedis</td><td><strong>Dorsum of the foot</strong>, lateral to the extensor hallucis longus tendon</td></tr></table>`,
      ["aortic-pulse", "femoral-pulse", "popliteal-pulse", "posterior-tibial-pulse", "dorsalis-pedis-pulse"],
      [q(`Where is the posterior tibial pulse palpated?`, `Behind the medial malleolus`, [`Behind the lateral malleolus`, `Dorsum of the foot`, `Popliteal fossa`], `PT = posterior to the medial malleolus.`),
       q(`Where is the dorsalis pedis pulse palpated?`, `Dorsum of the foot, lateral to the extensor hallucis longus tendon`, [`Behind the medial malleolus`, `Plantar arch`, `Lateral ankle below the fibula`], `DP = top of the foot.`),
       q(`Where is the popliteal pulse palpated?`, `Behind the knee in the popliteal fossa`, [`Anterior to the patella`, `Medial thigh`, `Groin crease`], `Popliteal = posterior knee, knee slightly flexed.`)],
      [q(`In a patient with claudication, you place your fingers on the top of the foot just lateral to the big-toe tendon. Which pulse are you checking?`, `Dorsalis pedis`, [`Posterior tibial`, `Popliteal`, `Femoral`], `Dorsum of foot lateral to EHL = dorsalis pedis.`),
       q(`You palpate in the groin just below the inguinal ligament midway between the ASIS and pubic symphysis. Which pulse is this?`, `Femoral`, [`Iliac`, `Popliteal`, `Aortic`], `Femoral pulse = below the inguinal ligament.`)]),

    C("Auscultating for bruits",
      `<ul><li>Auscultate for bruits over the <strong>temporal, carotid, aortic, renal, iliac, and femoral</strong> arteries.</li>
      <li>Use the <strong>bell</strong> of the stethoscope.</li>
      <li>Have the patient <strong>hold their breath</strong> for the <strong>carotid</strong>.</li></ul>
      <p>Abdominal sites (slide 74 picture): <strong>aorta</strong> upper midline; <strong>renal arteries</strong> to either side of the upper abdomen; <strong>iliac arteries</strong> in the lower quadrants; <strong>femoral arteries</strong> at the groin.</p>`,
      ["bruit-bell", "bruit-sites", "carotid-hold-breath", "abdominal-bruit-sites"],
      [q(`Which stethoscope head is used to auscultate for bruits?`, `Bell`, [`Diaphragm`, `Either one pressed firmly`, `Neither; bruits are palpated`], `Bruits: bell.`),
       q(`What instruction is given to the patient when auscultating the carotid artery for bruits?`, `Hold their breath`, [`Take rapid deep breaths`, `Turn the head fully to the same side`, `Bear down as if having a bowel movement`], `Breath-holding removes breath sounds during carotid auscultation.`)],
      [q(`A hypertensive patient has resistant hypertension, and you want to listen for a renal artery bruit. Where and with what do you listen?`, `Bell, upper abdomen lateral to midline on each side`, [`Diaphragm over the costovertebral angle only`, `Bell over the lower quadrants only`, `Diaphragm at the right 2nd ICS`], `Renal bruits: upper abdomen, either side of midline, with the bell.`)])
  ]),

  /* ---------------------------------------------------------------- 14 */
  S("14-special-tests", "14. Technique and interpretation of cardiovascular special tests", "Objective 14. Slides 75-86.", [
    C("Allen test",
      `<p><strong>Purpose:</strong> compares patency of the <strong>radial and ulnar arteries</strong>; done <strong>before an ABG</strong>.</p>
      <ol><li>Patient makes a <strong>tight fist</strong>.</li>
      <li><strong>Compress both radial and ulnar arteries</strong> firmly.</li>
      <li>Patient opens the hand into a relaxed, slightly flexed position (palm is pale).</li>
      <li><strong>Release the radial</strong>; watch for color return within <strong>3-5 seconds</strong>.</li>
      <li>Repeat, this time <strong>releasing the ulnar</strong>.</li></ol>
      <p><strong>Interpretation:</strong> color returning in 3-5 seconds = that artery is patent. Delayed or absent color return = occlusion of the released artery.</p>`,
      ["allen-purpose", "allen-technique", "allen-interpretation"],
      [q(`What does the Allen test assess?`, `Patency of the radial and ulnar arteries`, [`Deep venous thrombosis of the arm`, `Lymphatic drainage of the hand`, `Carotid artery stenosis`], `Allen test: radial and ulnar patency before an ABG.`),
       q(`During the Allen test, within what time should color return to the hand after releasing an artery?`, `3-5 seconds`, [`30 seconds`, `60 seconds`, `Less than 0.5 seconds only`], `Look for blood return in 3-5 seconds.`)],
      [q(`Before a radial ABG, you compress both arteries, then release the ulnar. The palm stays pale for 15 seconds. What does this mean?`, `The ulnar artery is not providing adequate flow; avoid puncturing that radial artery`, [`The radial artery is occluded`, `Normal result; proceed`, `The test cannot be interpreted`], `Delayed color return when the ulnar is released means poor ulnar collateral flow.`)]),

    C("Thigh and calf circumference",
      `<p>Evaluates for <strong>edema and occlusion</strong>.</p>
      <ul><li>Measure <strong>15 cm proximal to the patella</strong> (thigh) and <strong>15 cm distal to the patella</strong> (calf).</li>
      <li>Compare bilaterally: a difference <strong>&gt;1 cm is abnormal</strong>.</li></ul>`,
      ["circumference-technique", "circumference-1cm"],
      [q(`Where are thigh and calf circumferences measured?`, `15 cm above and 15 cm below the patella`, [`5 cm above and below the patella`, `At the ankle and mid-thigh`, `10 cm below the inguinal ligament only`], `Thigh 15 cm proximal; calf 15 cm distal to the patella.`),
       q(`What side-to-side difference in calf circumference is abnormal?`, `More than 1 cm`, [`More than 0.1 cm`, `More than 5 cm`, `More than 10 cm`], `A difference >1 cm is abnormal.`)],
      [q(`A patient's right calf measures 38 cm and left calf 36 cm, 15 cm below each patella. How do you interpret this?`, `Abnormal; difference greater than 1 cm suggests edema or occlusion`, [`Normal; differences up to 3 cm are expected`, `Abnormal; this confirms lymphedema`, `Cannot interpret without thigh measurements`], `A 2 cm difference exceeds the 1 cm threshold.`)]),

    C("Thigh tenderness",
      `<p>Squeeze the <strong>back of the thigh</strong> with appropriate pressure; repeat bilaterally.</p>
      <p>Tenderness suggests <strong>venous insufficiency</strong> or a <strong>large DVT</strong>.</p>`,
      ["thigh-tenderness"],
      [q(`Posterior thigh tenderness on squeezing suggests what?`, `Venous insufficiency or a large DVT`, [`Peripheral arterial disease`, `Lymphedema`, `Aortic regurgitation`], `Thigh tenderness: venous insufficiency or large DVT.`)],
      [q(`A postoperative patient with a swollen leg winces when you squeeze the back of the thigh. What does this finding suggest?`, `A large DVT or venous insufficiency`, [`Normal postoperative soreness only`, `Arterial occlusion`, `Lymphedema`], `Thigh tenderness raises concern for a large DVT.`)]),

    C("Homan sign",
      `<p><strong>Dorsiflex the foot</strong> and <strong>palpate the calf</strong> for tenderness; repeat bilaterally.</p>
      <p>Used for <strong>DVT</strong>. <strong>Not very sensitive or specific</strong>, but can help determine the next step in diagnosing DVT.</p>`,
      ["homan-technique", "homan-limitations"],
      [q(`How is the Homan sign performed?`, `Dorsiflex the foot and palpate the calf for tenderness`, [`Plantarflex the foot and squeeze the thigh`, `Raise the leg to 60 degrees and watch for pallor`, `Pinch the skin at the base of the second toe`], `Homan: dorsiflex and palpate the calf.`),
       q(`What is a key limitation of the Homan sign?`, `It is not very sensitive or specific`, [`It is perfectly sensitive but never specific`, `It requires Doppler ultrasound`, `It can only be done in children`], `Homan sign has poor sensitivity and specificity but may guide next steps.`)],
      [q(`A patient has a negative Homan sign but a unilaterally swollen, tender calf after a long flight. What is the best interpretation?`, `A negative Homan sign does not rule out DVT; further evaluation is still needed`, [`DVT is ruled out`, `The patient has lymphedema`, `The patient has peripheral arterial disease`], `Homan sign is not sensitive enough to exclude DVT.`)]),

    C("Stemmer sign",
      `<p>Assesses for <strong>lymphedema</strong>.</p>
      <ul><li>Pinch and lift the skin fold at the <strong>base of the second toe</strong> and <strong>second finger</strong>.</li>
      <li><strong>Positive:</strong> you <strong>cannot</strong> pinch the skin of the dorsum of the foot or hand = associated with lymphedema.</li></ul>`,
      ["stemmer-technique", "stemmer-positive-lymphedema"],
      [q(`A positive Stemmer sign is associated with what condition?`, `Lymphedema`, [`Deep venous thrombosis`, `Peripheral arterial disease`, `Heart failure`], `Stemmer sign tests for lymphedema.`),
       q(`What defines a positive Stemmer sign?`, `Inability to pinch and lift the skin at the base of the second toe or finger`, [`Calf pain with dorsiflexion`, `Color return longer than 10 seconds`, `Calf circumference difference over 1 cm`], `Cannot pinch the skin fold = positive.`)],
      [q(`After axillary node dissection, a patient has a swollen arm; you cannot lift the skin fold at the base of her second finger. What does this suggest?`, `Lymphedema (positive Stemmer sign)`, [`Upper extremity DVT (positive Homan sign)`, `Radial artery occlusion (positive Allen test)`, `Normal finding`], `Inability to pinch the dorsal skin fold = positive Stemmer sign.`)]),

    C("Lower extremity arterial insufficiency test",
      `<p>Assesses <strong>arterial insufficiency</strong> in the legs, such as <strong>PAD</strong>.</p>
      <ol><li>Patient <strong>supine</strong>.</li>
      <li>Raise both legs to <strong>60 degrees</strong> until maximal pallor of the feet (usually <strong>30-60 seconds</strong>).</li>
      <li>Lower the legs as the patient <strong>sits up with legs dangling</strong>.</li>
      <li>Compare the time for <strong>color to return</strong>. <strong>Normal &lt;10 seconds</strong>.</li></ol>`,
      ["lea-test-technique", "lea-60-degrees", "lea-normal-10"],
      [q(`In the lower extremity arterial insufficiency test, to what angle are the legs raised?`, `60 degrees`, [`15 degrees`, `30 degrees`, `90 degrees`], `Raise both legs to 60 degrees until maximal pallor.`),
       q(`What is the normal time for color return after the legs are lowered?`, `Less than 10 seconds`, [`Less than 60 seconds`, `30-45 seconds`, `More than 2 minutes`], `Normal color return is under 10 seconds.`)],
      [q(`After elevating a smoker's legs to 60 degrees and then having him dangle them, color returns to the left foot in 6 seconds and the right foot in 35 seconds. What does this suggest?`, `Arterial insufficiency in the right leg`, [`Normal bilateral perfusion`, `Right leg lymphedema`, `Left leg DVT`], `Delayed color return (>10 seconds) indicates arterial insufficiency.`)]),

    C("Ankle-brachial index: purpose and method",
      `<ul><li>Tests for <strong>subclinical or suspected PAD</strong>; quick and noninvasive.</li>
      <li>Detects <strong>stenosis of 50% or more</strong> in major leg vessels.</li>
      <li>Compares <strong>leg systolic BP to arm systolic BP</strong> using <strong>Doppler</strong> (brachial artery in the arms; dorsalis pedis and posterior tibial at the ankle).</li></ul>
      <div class="box-hy"><span class="lbl">High yield</span><strong>Right ABI</strong> = highest right ankle pressure / highest pressure in <strong>either</strong> arm.<br><strong>Left ABI</strong> = highest left ankle pressure / highest pressure in <strong>either</strong> arm.</div>`,
      ["abi-purpose", "abi-50-stenosis", "abi-doppler", "abi-calculation"],
      [q(`How is the right ABI calculated?`, `Highest right ankle systolic pressure divided by the highest systolic pressure in either arm`, [`Right ankle pressure divided by right arm pressure only`, `Highest arm pressure divided by right ankle pressure`, `Average of both ankle pressures divided by the left arm pressure`], `Each ankle uses its own highest pressure; the denominator is the highest arm pressure from either side.`),
       q(`The ABI detects stenosis of at least what degree in major leg vessels?`, `50%`, [`10%`, `25%`, `90%`], `ABI detects stenosis of 50% or more.`)],
      [q(`Arm systolic pressures are R 140 and L 130. Left ankle pressures are DP 110 and PT 98. What is the left ABI?`, `0.79`, [`0.85`, `0.70`, `1.27`], `Highest left ankle (110) / highest arm (140) = 0.79.`)]),

    C("ABI interpretation",
      `<p>From the slide 86 table:</p>
      <table class="learn-table"><tr><th>ABI</th><th>Interpretation</th></tr>
      <tr><td>&gt;1.30</td><td><strong>Noncompressible, calcified vessel</strong></td></tr>
      <tr><td>0.91-1.30</td><td><strong>Normal</strong></td></tr>
      <tr><td>0.41-0.90</td><td><strong>Mild-to-moderate PAD</strong></td></tr>
      <tr><td>0-0.40</td><td><strong>Severe PAD</strong></td></tr></table>`,
      ["abi-noncompressible", "abi-normal", "abi-mild-moderate", "abi-severe"],
      [q(`What is the normal ABI range?`, `0.91-1.30`, [`0.41-0.90`, `0-0.40`, `Greater than 1.30`], `Normal ABI = 0.91-1.30.`),
       q(`An ABI greater than 1.30 indicates what?`, `A noncompressible, calcified vessel`, [`Normal flow`, `Severe PAD`, `Mild PAD`], `>1.30 = noncompressible/calcified vessel (common in diabetes).`)],
      [q(`A smoker with claudication has an ABI of 0.62. How do you interpret it?`, `Mild-to-moderate PAD`, [`Normal`, `Severe PAD`, `Noncompressible vessel`], `0.41-0.90 = mild-to-moderate PAD.`),
       q(`A patient with rest pain and a nonhealing toe ulcer has an ABI of 0.35. How do you interpret it?`, `Severe PAD`, [`Mild-to-moderate PAD`, `Normal`, `Noncompressible vessel`], `0-0.40 = severe PAD.`),
       q(`A long-standing diabetic has an ABI of 1.45. What is the best interpretation?`, `Noncompressible, calcified vessels make the ABI unreliable`, [`Normal; PAD is excluded`, `Severe PAD`, `Mild-to-moderate PAD`], `ABI above 1.30 reflects noncompressible calcified arteries.`)])
  ]),

  /* ---------------------------------------------------------------- 15 */
  S("15-cultural-considerations", "15. Cultural considerations related to the cardiovascular system", "Objective 15. Slides 89-93.", [
    C("Disparities in cardiovascular care",
      `<ul><li>Minorities have received <strong>inferior healthcare</strong> in areas such as <strong>referral for cardiac diagnostics</strong> and <strong>heart failure care</strong>.</li>
      <li>Minorities also have <strong>less insurance coverage</strong>, <strong>less access</strong>, <strong>more acute and chronic illness</strong>, and <strong>lower life expectancy</strong>.</li>
      <li>There may be <strong>less effective communication</strong> with ethnic minorities.</li></ul>`,
      ["disparities-referral-hf", "disparities-access", "communication-gaps"],
      [q(`In which areas has inferior care for minority patients been shown, per the lecture?`, `Referral for cardiac diagnostics and heart failure care`, [`Vaccination rates only`, `Dental care only`, `Dermatology referrals only`], `The slide names cardiac diagnostic referral and heart failure care.`)],
      [q(`A clinic audit finds minority patients with chest pain are referred for stress testing less often than white patients with similar presentations. What does this illustrate?`, `A documented disparity in referral for cardiac diagnostics`, [`Appropriate risk-based triage`, `A difference in disease biology only`, `Patient preference alone`], `The lecture cites inferior referral for cardiac diagnostics among minorities.`)]),

    C("Medical mistrust and implicit bias",
      `<ul><li>Mistrust may come from <strong>experiences of discrimination</strong> in historically marginalized groups.</li>
      <li>Compared with non-Hispanic white patients, <strong>non-Hispanic Black and Hispanic</strong> patients more often report mistrust of health professionals.</li>
      <li><strong>Perceived discrimination</strong> and <strong>not having a consistent health professional</strong> correlate with greater mistrust.</li>
      <li>Researchers attribute mistrust to <strong>implicit racial and ethnic bias</strong>.</li>
      <li><strong>Solution:</strong> <strong>multilevel community- and theory-based training models</strong> to counter implicit bias.</li></ul>`,
      ["mistrust-discrimination", "mistrust-consistent-provider", "implicit-bias", "bias-training"],
      [q(`Which factor correlates with greater medical mistrust in the studies cited?`, `Not having a consistent health professional`, [`Having private insurance`, `Living in an urban area`, `Having a college degree`], `Perceived discrimination and no consistent professional both correlate with greater mistrust.`),
       q(`What solution does the lecture propose to counter implicit bias?`, `Multilevel community- and theory-based training models`, [`Shorter visits`, `Avoiding discussion of race`, `Telehealth only`], `The slide recommends multilevel community- and theory-based training.`)],
      [q(`A patient who has seen a different clinician at each visit says she does not trust doctors. Which change best addresses a factor linked to mistrust?`, `Establish continuity with a consistent clinician`, [`Shorten visits to reduce burden`, `Rely only on written handouts`, `Avoid asking about her concerns`], `Lack of a consistent health professional correlates with greater mistrust.`)]),

    C("Culture and the cardiac history",
      `<ul><li>Patients from Asia or South Asia may say their <strong>"heart is empty"</strong> or there is <strong>"a fire elevation"</strong> in the chest to describe <strong>emotional distress</strong>, not necessarily cardiac symptoms.</li>
      <li><strong>"Talk story"</strong> (Hawaiian term): chat about the patient's life to <strong>build rapport before</strong> asking about symptoms; this often yields valuable family and social history.</li>
      <li>The <strong>lifestyle</strong> of certain ethnic groups may increase <strong>CAD risk</strong>.</li></ul>`,
      ["heart-is-empty", "talk-story", "lifestyle-cad-risk"],
      [q(`What does "talk story" mean in the cardiovascular history?`, `Conversing about the patient's life to build rapport before asking about symptoms`, [`Having the patient write a symptom diary`, `Reading the chart aloud to the patient`, `Asking only closed-ended questions`], `"Talk story" is a Hawaiian term for building rapport through conversation first.`)],
      [q(`A patient from South Asia says her "heart is empty" since her husband died. She denies chest pain or dyspnea. What is the best interpretation?`, `This may be an idiom for emotional distress rather than a cardiac symptom; explore gently`, [`This is classic angina requiring immediate cath`, `This describes palpitations from PSVT`, `This is a sign of heart failure`], `Some cultures use heart idioms for emotional upset; clarify rather than assume.`)]),

    C("Modesty, personal space, and exam refusal",
      `<ul><li>The cardiac exam <strong>exposes the chest</strong>: protect <strong>modesty</strong>.</li>
      <li>Consider ethnic/personal background when <strong>asking permission</strong> to expose; private zones and <strong>personal space</strong> differ among cultures.</li>
      <li>Patients may request a <strong>same-gender examiner</strong>; if not possible, offer a <strong>same-gender nurse or family member</strong> (with permission).</li>
      <li>Patients have the <strong>right to refuse</strong> any exam, which must be <strong>documented</strong>.</li></ul>`,
      ["modesty-permission", "personal-space", "same-gender-chaperone", "refusal-documented"],
      [q(`If a patient requests a same-gender examiner and none is available, what does the lecture suggest?`, `Offer a same-gender nurse or family member to be present, with permission`, [`Proceed without discussion`, `Skip the cardiac exam and do not document it`, `Discharge the patient`], `A same-gender nurse or family member can ease discomfort.`),
       q(`What must happen when a patient refuses part of the cardiovascular exam?`, `The refusal is respected and documented`, [`The exam is performed anyway`, `The patient is dismissed from the practice`, `Nothing needs to be recorded`], `Patients may refuse any exam; document it.`)],
      [q(`A patient declines to remove her top for auscultation even after a female chaperone is offered. What is the appropriate action?`, `Respect the refusal and document it`, [`Auscultate through clothing and document a normal exam`, `Insist the exam is mandatory`, `Note that the exam was performed`], `Patients have the right to refuse; document accurately.`)])
  ])
  ];
})();
