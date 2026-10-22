/*
  Cardio Part 1 Diseases tool: Cardiovascular H&P lecture (Marriott).
  Same shape as data/diseases-endocrine.js; uses window.DiseaseContent helpers.

  Sources: source-material/cardio-part-1/text/cardio-history-physical.md (slides)
  and the "Cardiovascular H&P Objectives" block of objectives.txt.
  This is an exam-skills lecture, so each entry is a condition the slides teach
  you to recognize at the bedside: the history clues, exam findings, special
  tests/maneuvers, and what they point to. No workup or treatment is added
  beyond the slides. Picture slides used: 84–86 (ABI method and interpretation
  table). Clarifications from a standard exam reference are labeled in the html.

  Question ids are "<disease id>|<index>" and progress is saved against them:
  only APPEND questions to a disease; never insert, delete, or reorder.
*/
(function () {
  "use strict";

  var H = window.DiseaseContent;
  var Tbl = H.Tbl, HY = H.HY, Mn = H.Mn, S = H.S, Q = H.Q, D = H.D, L = H.L;
  var CL = "<p><em>Clarification (standard exam reference, not on the slides):</em> ";

  // ---- Shared reference blocks -------------------------------------------

  var pmiTable = Tbl(["PMI finding", "Suggests"], [
    ["<strong>Tapping</strong>, 4th–5th ICS near the MCL, one interspace, &lt; 2.5 cm, brisk and non-sustained", "<strong>Normal</strong>"],
    ["<strong>Forceful</strong> and terminates quickly", "<strong>Hyperkinesis</strong> from a hypermetabolic state, or <strong>aortic regurgitation</strong>"],
    ["<strong>Diffuse and/or displaced</strong>", "<strong>Dilated ventricle</strong> from <strong>heart failure</strong> or <strong>cardiomyopathy</strong>"]
  ]);

  var stethTable = Tbl(["Stethoscope", "Best for", "Where"], [
    ["<strong>Diaphragm</strong> (high pitch)", "S1, S2, murmurs of <strong>aortic and mitral regurgitation</strong>, <strong>pericardial friction rub</strong>", "R 2nd ICS (aortic), L 2nd ICS (pulmonic), L 3rd, L 4th, L 5th ICS (tricuspid), apex (mitral)"],
    ["<strong>Bell</strong> (low pitch)", "<strong>S3, S4</strong>, murmur of <strong>mitral stenosis</strong>; bruits", "L 4th ICS, L 5th ICS (tricuspid), apex (mitral)"]
  ]);

  var gallopTable = Tbl(["", "S3 (ventricular gallop)", "S4 (atrial gallop)"], [
    ["Timing", "<strong>Early diastole</strong>, shortly after S2", "<strong>End of diastole</strong>, immediately before S1"],
    ["Cause", "Blood entering the ventricle during <strong>rapid filling</strong>", "Blood forced into a <strong>stiff or hypertrophic</strong> ventricle"],
    ["Heard in", "Hyperdynamic states (rapid early diastolic filling)", "<strong>LVH</strong> (HTN, aortic stenosis, HCM), <strong>acute MI/ischemia</strong>, hyperkinetic states"],
    ["How to hear", "<strong>Bell at the apex</strong>, patient in <strong>left lateral decubitus</strong>", "<strong>Bell at the apex</strong>; often also <strong>palpable</strong> at the apex"],
    ["Maneuvers", "↑ venous return → louder; ↓ venous return → softer", "—"]
  ]);

  var edemaGrade = Tbl(["Grade", "Pit depth", "Rebound"], [
    ["0", "No pitting", "Normal"],
    ["<strong>1+</strong>", "Barely detectable, &lt; 2 mm", "—"],
    ["<strong>2+</strong>", "Slight, 2–4 mm", "15 seconds"],
    ["<strong>3+</strong>", "Deeper, 4–6 mm", "30 seconds"],
    ["<strong>4+</strong>", "Very deep, 6–8 mm", "&gt; 30 seconds"]
  ]);

  var pulseGrade = Tbl(["Grade", "Meaning"], [
    ["<strong>3+</strong>", "Bounding"],
    ["<strong>2+</strong>", "Brisk, expected (normal)"],
    ["<strong>1+</strong>", "Diminished, weak"],
    ["<strong>0</strong>", "Absent, cannot palpate"]
  ]);

  var abiTable = Tbl(["ABI", "Interpretation"], [
    ["&gt; 1.30", "<strong>Noncompressible, calcified vessel</strong>"],
    ["0.91–1.30", "<strong>Normal</strong>"],
    ["0.41–0.90", "<strong>Mild-to-moderate PAD</strong>"],
    ["0–0.40", "<strong>Severe PAD</strong>"]
  ]);

  var legTests = Tbl(["Special test", "How", "Positive / abnormal", "Points to"], [
    ["<strong>Thigh &amp; calf circumference</strong>", "Measure 15 cm above the proximal patella (thigh) and 15 cm below the distal patella (calf); compare sides", "<strong>&gt; 1 cm</strong> difference", "Edema or venous occlusion (DVT)"],
    ["<strong>Thigh tenderness</strong>", "Squeeze the back of the thigh with appropriate pressure, both sides", "Tenderness", "<strong>Venous insufficiency</strong> or a <strong>large DVT</strong>"],
    ["<strong>Homan sign</strong>", "Dorsiflex the foot and palpate the calf, both sides", "Calf tenderness", "DVT — <strong>not very sensitive or specific</strong>; helps decide the next step"],
    ["<strong>Stemmer sign</strong>", "Pinch and lift the skin fold at the base of the 2nd toe / 2nd finger", "<strong>Cannot</strong> pinch the skin", "<strong>Lymphedema</strong>"],
    ["<strong>Arterial insufficiency test</strong>", "Supine; raise both legs to 60° until maximal pallor (30–60 s); then sit up and dangle legs", "Color return <strong>≥ 10 s</strong> (normal &lt; 10 s)", "<strong>PAD</strong>"]
  ]);

  // ---- Diseases ----------------------------------------------------------

  var diseases = [

    // ------------------------------------------------------------------
    D("hp-angina-acs", "Angina & Acute Coronary Syndrome", "Chest pain from inadequate coronary blood supply — one of the most serious complaints. Classic angina is exertional chest pressure, but women over 65 often present atypically.", [
      S("history", "History Clues", "<p>First question of the CV history: <strong>is the blood supply to the heart adequate?</strong></p><ul><li><strong>Classic ACS:</strong> <strong>exertional</strong> pain, <strong>pressure</strong>, or discomfort in the chest.</li><li><strong>Atypical</strong> (more likely in <strong>women, especially over 65</strong>; may go unrecognized): <strong>upper back, neck, or jaw pain</strong>, shortness of breath, PND, nausea, vomiting, and/or fatigue.</li><li>Start <strong>open-ended</strong> (“Please tell me about any symptoms you might be having in your chest”) and ask the patient to <strong>point to the pain</strong>.</li><li>Then targeted questions: worse or better with exertion? character? radiation to shoulder, back, or down the arm? SOB, sweating, palpitations, nausea? does it wake you at night?</li><li>General questions: chest pain on exertion (walking up stairs)? <strong>worse in cold weather</strong>? prior angina or heart attack? stress test, cardiac cath, or heart surgery — when and results?</li></ul>" + HY("Women over 65 are more likely to report atypical ACS symptoms (back, neck, jaw pain, dyspnea, nausea, fatigue) — careful history taking is essential.")),
      S("oldcarts", "OLDCARTS for Chest Pain", Tbl(["Letter", "Angina question"], [
        ["<strong>O</strong>nset", "When did the pain first start? Sudden or gradual?"],
        ["<strong>L</strong>ocation", "Where is the pain? (point)"],
        ["<strong>D</strong>uration", "How long does it last?"],
        ["<strong>C</strong>haracter", "Burning, pressing, stabbing, crushing, dull, aching, throbbing, sharp, constricting?"],
        ["<strong>A</strong>ggravating / alleviating", "Rest, exertion, stress, after eating, moving the arms, intercourse?"],
        ["<strong>R</strong>adiation", "Does it radiate? Where?"],
        ["<strong>T</strong>iming", "How often?"],
        ["<strong>S</strong>everity", "How severe? Limiting daily activities?"]
      ]) + "<p><strong>Associated symptoms:</strong> SOB, diaphoresis, palpitations, N/V, cough, fever, leg pain.</p><p><strong>Historical context:</strong> where were you and what were you doing when it began? Ever had this before? Recent travel? Recent lifestyle changes?</p>" + Mn("OLDCARTS", "Onset · Location · Duration · Character · Aggravating/alleviating · Radiation · Timing · Severity")),
      S("exam", "Bedside & Culture", "<ul><li>The S4 can be heard in <strong>acute myocardial ischemia</strong> — a stiff ventricle receiving atrial filling (bell at the apex, just before S1).</li><li><strong>Risk factors</strong> to ask about: hypertension, atherosclerosis, diabetes, dyslipidemias, metabolic syndrome, smoking, obesity, family history.</li><li><strong>Culture:</strong> patients from some Asian or South Asian groups may describe their “<strong>heart is empty</strong>” or a “<strong>fire elevation</strong>” in the chest for emotionally upsetting conditions not necessarily cardiac. A “<strong>talk story</strong>” (Hawaiian term) — conversing about the patient’s life first — builds rapport and may surface family and social history.</li><li>The lifestyle of certain ethnic groups may increase CAD risk.</li></ul>")
    ], [
      Q("history", "What are the classic symptoms of acute coronary syndrome taught in the lecture?", ["Exertional pain, pressure, or discomfort in the chest", "Sharp pleuritic pain worse lying flat", "Sudden tearing pain radiating to the back", "Leg cramping after walking a set distance"], 0, "Classic angina/ACS is exertional chest pain, pressure, or discomfort."),
      Q("history", "Which group is more likely to report atypical ACS symptoms that may go unrecognized?", ["Women, particularly those over 65", "Men under 40", "Adolescent athletes", "Young women under 30"], 0, "Females, particularly over 65, more often report atypical symptoms."),
      Q("history", "A 72-year-old woman reports three days of fatigue, nausea, and jaw and upper back discomfort when she carries groceries. Why does this history deserve careful attention?", ["It is an atypical presentation of ACS, common in older women", "It is classic for musculoskeletal strain", "It is typical of paroxysmal supraventricular tachycardia", "Jaw pain excludes a cardiac cause"], 0, "Upper back, neck, or jaw pain, dyspnea, nausea, vomiting, and fatigue are atypical ACS symptoms more often reported by women over 65."),
      Q("history", "How does the lecture recommend you begin a chest pain history?", ["With an open-ended question and asking the patient to point to the pain", "With a yes/no checklist of cardiac risk factors", "By ordering an EKG before speaking with the patient", "By asking the patient to rate pain on a 1–10 scale first"], 0, "Begin open-ended (“tell me about any symptoms in your chest”) and have the patient point to the pain, then narrow with associated questions."),
      Q("history", "Which general CV history question specifically screens for angina triggered by environment?", ["Is your chest pain worse in cold weather?", "How many pillows do you sleep on?", "Is the swelling worse in the morning or evening?", "When you sit with socks off, what color are your feet?"], 0, "Chest pain worse in cold weather is one of the general angina questions; pillows screen for orthopnea, swelling timing for edema, foot color for arterial disease."),
      Q("oldcarts", "In OLDCARTS, the question “Does the pain occur at rest, with exertion, with stress, after eating, or during intercourse?” falls under which letter?", ["A — aggravating/alleviating factors", "T — timing", "C — character", "O — onset"], 0, "Triggers that make pain worse or better are aggravating/alleviating factors."),
      Q("oldcarts", "A patient describes his chest pain as “crushing.” Which OLDCARTS element has he answered?", ["Character", "Location", "Severity", "Radiation"], 0, "Burning, pressing, stabbing, crushing, dull, etc. describe the character of the pain."),
      Q("oldcarts", "Which question adds historical context rather than an OLDCARTS element?", ["What were you doing when the symptoms started?", "Where is the pain?", "How long does it last?", "Does the pain radiate?"], 0, "Context questions include where you were, what you were doing, prior episodes, recent travel, and lifestyle changes."),
      Q("exam", "Which extra heart sound can appear during acute myocardial ischemia?", ["S4", "S3", "Opening snap", "Pericardial friction rub"], 0, "The slides list acute myocardial ischemia among causes of an S4 — blood forced into a stiff ventricle."),
      Q("exam", "A patient describes a “fire elevation” in her chest after a family conflict. What does the cultural considerations section teach about this?", ["Some Asian or South Asian groups use such phrases for emotional distress not necessarily cardiac", "It is pathognomonic for unstable angina", "It always indicates aortic dissection", "It should be documented as a refusal of exam"], 0, "Phrases like “heart is empty” or “fire elevation” may describe emotionally upsetting conditions rather than cardiac symptoms.")
    ]),

    // ------------------------------------------------------------------
    D("hp-palpitations", "Palpitations: Premature Beats, PSVT, Sinus Tachycardia", "An unpleasant awareness of the heartbeat. The pattern in the history hints at premature contractions, PSVT, or sinus tachycardia, but an EKG is needed to confirm.", [
      S("history", "History Clues", "<p>Second CV history question: <strong>is the electrical system of the heart functioning normally?</strong></p><ul><li>Patients describe <strong>skipping, racing, fluttering, pounding</strong>, or <strong>stopping</strong> of the heart.</li><li>May be irregular, rapidly slow down or accelerate, or come from increased forcefulness of contraction.</li><li>Ask the patient to <strong>tap out the rhythm</strong> with a hand or finger — or check their <strong>smart watch</strong>.</li><li>General question: “Have you ever been told you have an irregular heartbeat? Do you take medication for it?”</li></ul>"),
      S("patterns", "What the Pattern Points To", Tbl(["History clue", "Possible rhythm"], [
        ["Transient <strong>skips and flip-flops</strong>", "<strong>Premature contractions</strong>"],
        ["<strong>Rapid regular</strong> beating of <strong>sudden onset and offset</strong>", "<strong>Paroxysmal supraventricular tachycardia</strong> (PSVT)"],
        ["Rapid regular rate <strong>&lt; 120 bpm</strong>, especially <strong>gradually</strong> starting and stopping", "<strong>Sinus tachycardia</strong>"]
      ]) + HY("History only suggests the rhythm — an EKG is needed to confirm.") + Mn("Sudden vs gradual", "Switch-like on/off = PSVT · ramps up and down under 120 = sinus tach · skips/flip-flops = premature beats"))
    ], [
      Q("history", "How does the lecture define palpitations?", ["An unpleasant awareness of the heartbeat", "A heart rate over 100 bpm", "Any irregular rhythm on EKG", "Chest pain with exertion"], 0, "Palpitations are an unpleasant awareness of the heartbeat; they may be regular or irregular."),
      Q("history", "Which bedside technique helps characterize a patient’s palpitations?", ["Ask the patient to tap out the rhythm with a hand or finger", "Perform the Allen test", "Measure calf circumference", "Check for Stemmer sign"], 0, "Having the patient tap out the rhythm (or reviewing smart watch data) clarifies regularity and rate."),
      Q("patterns", "A patient reports occasional transient “skips” and “flip-flops” in her chest. What do these suggest?", ["Premature contractions", "Paroxysmal supraventricular tachycardia", "Sinus tachycardia", "Ventricular fibrillation"], 0, "Transient skips and flip-flops suggest premature contractions."),
      Q("patterns", "A 25-year-old describes episodes of very rapid regular heartbeat that start and stop abruptly, “like a switch.” What is the likely rhythm?", ["Paroxysmal supraventricular tachycardia", "Sinus tachycardia", "Premature contractions", "Sinus bradycardia"], 0, "Rapid regular beating of sudden onset and offset suggests PSVT."),
      Q("patterns", "A patient notes a regular heart rate around 110 bpm that builds gradually while jogging and slows gradually afterward. What does this suggest?", ["Sinus tachycardia", "Paroxysmal supraventricular tachycardia", "Premature contractions", "Ventricular tachycardia"], 0, "A rapid regular rate under 120 that starts and stops gradually suggests sinus tachycardia."),
      Q("patterns", "What rate threshold does the lecture attach to the sinus tachycardia history clue?", ["Less than 120 bpm", "Less than 100 bpm", "More than 150 bpm", "More than 180 bpm"], 0, "Sinus tachycardia: rapid regular rate under 120 bpm, especially with gradual onset and offset."),
      Q("patterns", "After you elicit a history suggestive of PSVT, what does the lecture say is needed to confirm the rhythm?", ["An EKG", "An ankle-brachial index", "A JVP measurement", "A Homan sign"], 0, "History clues only suggest the rhythm; an EKG confirms it."),
      Q("history", "Which of the following is NOT one of the terms patients commonly use to describe palpitations?", ["Tearing", "Fluttering", "Pounding", "Skipping"], 0, "Skipping, racing, fluttering, pounding, and stopping describe palpitations. Tearing pain is the dissection clue.")
    ]),

    // ------------------------------------------------------------------
    D("hp-heart-failure", "Heart Failure (Volume Overload)", "The heart cannot adequately move blood through the circulation. Recognize it by dyspnea, orthopnea, PND, edema and weight gain, a diffuse or displaced PMI, elevated JVP, and an S3.", [
      S("history", "History Clues", "<p>Third CV history question: <strong>is the heart adequately moving blood and supplying the organs?</strong></p>" + Tbl(["Symptom", "Definition", "Ask"], [
        ["<strong>Dyspnea</strong>", "Uncomfortable awareness of breathing <strong>inappropriate to the level of exertion</strong> (cardiac or pulmonary)", "How far can you walk before you become short of breath?"],
        ["<strong>Orthopnea</strong>", "Dyspnea when <strong>supine</strong> that improves when sitting up", "<strong>How many pillows</strong> do you sleep on?"],
        ["<strong>Paroxysmal nocturnal dyspnea</strong>", "Sudden dyspnea and orthopnea that <strong>awaken</strong> the patient, usually <strong>1–2 hours after going to bed</strong>, prompting them to sit up, stand, or go to a window for air", "Do you ever wake up at night feeling short of breath?"]
      ]) + "<ul><li><strong>Edema</strong>: may not be obvious until <strong>several liters</strong> of extra fluid have accumulated → have fluid-retaining patients record <strong>daily morning weights</strong>.</li><li><strong>Chronic care visit (OCHMEDPRA):</strong> the home reading for heart failure is <strong>home weights</strong> — note how and how often they were taken and the averages, highs, and lows.</li></ul>"),
      S("exam", "Exam Findings", pmiTable + gallopTable + CL + "in adults, an S3 is a classic sign of <strong>volume overload / heart failure</strong> (the objectives ask you to tie S3 to diagnoses).</p>"),
      S("jvp", "Jugular Venous Pressure", "<ul><li>JVP reflects <strong>right atrial pressure</strong> = central venous pressure = right ventricular end-diastolic pressure.</li><li>Use the <strong>right internal jugular</strong> — the most direct channel into the RA.</li><li>Head of bed about <strong>30°</strong>, head turned slightly away, tangential light; adjust the bed until the oscillation point is in the lower half of the neck.</li><li>Measure the vertical height of the highest pulsation above the <strong>sternal angle</strong>, then <strong>add 5 cm</strong> (sternal angle to center of RA).</li></ul>" + HY("Normal JVP = 6–8 cm. A higher value means higher right-sided filling pressure.") + CL + "a JVP above normal supports volume overload such as right-sided or biventricular heart failure.</p>"),
      S("culture", "Disparities", "<p>Minorities have been shown to receive <strong>inferior care for heart failure</strong> and fewer referrals for cardiac diagnostics, with less insurance coverage and access, and may mistrust the healthcare system after experiences of discrimination.</p>")
    ], [
      Q("history", "A patient says he now sleeps on four pillows because he gets short of breath lying flat. What symptom is this?", ["Orthopnea", "Paroxysmal nocturnal dyspnea", "Exertional dyspnea", "Palpitations"], 0, "Dyspnea when supine that improves sitting up is orthopnea; the pillow count quantifies it."),
      Q("history", "When does paroxysmal nocturnal dyspnea typically awaken a patient?", ["About 1–2 hours after going to bed", "Immediately on lying down", "Only in the early morning after waking", "After 6 or more hours of sleep"], 0, "PND usually awakens the patient 1–2 hours after going to bed, prompting them to sit up, stand, or go to a window."),
      Q("history", "A patient wakes suddenly at night gasping and goes to an open window for air. What is this called?", ["Paroxysmal nocturnal dyspnea", "Orthopnea", "Syncope", "Claudication"], 0, "Sudden nocturnal dyspnea that awakens the patient and drives them to sit, stand, or seek air is PND."),
      Q("history", "Why does the lecture recommend daily morning weights for patients who retain fluid?", ["Edema may not be obvious until several liters of fluid have accumulated", "Weight predicts the ABI", "Morning weight confirms PSVT", "Weights replace the need for an exam"], 0, "Several liters can accumulate before edema is visible, so weight trends catch fluid retention earlier."),
      Q("history", "At a chronic care visit for heart failure, which home reading should you review?", ["Home weights", "Home blood glucose", "Home peak flow", "Home pulse oximetry only"], 0, "In OCHMEDPRA, home readings are home BP for hypertension and home weights for heart failure."),
      Q("exam", "On exam the PMI is diffuse and displaced laterally. What does this suggest?", ["A dilated ventricle from heart failure or cardiomyopathy", "A normal heart", "Hyperkinesis from a hypermetabolic state", "Lymphedema"], 0, "A diffuse and/or displaced PMI suggests ventricular dilation from heart failure or cardiomyopathy."),
      Q("exam", "An extra low-pitched sound occurs shortly after S2 at the apex with the patient in left lateral decubitus. What is it?", ["S3", "S4", "Physiological split S2", "Pericardial friction rub"], 0, "S3 is early diastolic, low-pitched, best heard with the bell at the apex in left lateral decubitus."),
      Q("exam", "What produces the S3 heart sound?", ["Blood entering the ventricle during the rapid filling phase of diastole", "Blood forced into a stiff ventricle by atrial contraction", "Closure of the mitral and tricuspid valves", "Closure of the aortic and pulmonic valves"], 0, "S3 comes from rapid early diastolic filling; S4 comes from atrial contraction into a stiff ventricle."),
      Q("exam", "How do maneuvers that increase venous return affect an S3?", ["They accentuate it", "They soften it", "They have no effect", "They convert it into an S4"], 0, "Increasing venous return accentuates S3; decreasing venous return softens it."),
      Q("jvp", "JVP directly reflects which pressure?", ["Right atrial pressure", "Left atrial pressure", "Aortic diastolic pressure", "Pulmonary artery systolic pressure"], 0, "JVP reflects RA pressure, which equals CVP and RV end-diastolic pressure."),
      Q("jvp", "The highest IJ pulsation is 4 cm above the sternal angle. What is the JVP?", ["9 cm — above normal", "4 cm — normal", "6 cm — normal", "1 cm — low"], 0, "Add 5 cm (sternal angle to center of RA): 4 + 5 = 9 cm, above the normal 6–8 cm."),
      Q("jvp", "What is the normal JVP?", ["6 to 8 cm", "1 to 3 cm", "10 to 12 cm", "Under 5 cm"], 0, "Normal JVP is 6–8 cm."),
      Q("jvp", "Which vein gives the best JVP estimate, and why?", ["Right internal jugular — most direct channel into the right atrium", "Left external jugular — most visible", "Right external jugular — has valves", "Left internal jugular — closest to the aorta"], 0, "The right IJ has the most direct channel into the RA."),
      Q("culture", "According to the cultural considerations slides, in which area of cardiac care have minorities been shown to receive inferior healthcare?", ["Care for heart failure and referral for cardiac diagnostics", "Treatment of lymphedema", "Allen test performance", "Pacemaker battery replacement"], 0, "Minorities receive inferior care in areas such as referral for cardiac diagnostics and care for heart failure.")
    ]),

    // ------------------------------------------------------------------
    D("hp-edema-lymphedema", "Peripheral Edema & Lymphedema", "Excess fluid in the extravascular interstitial space. Characterize location, timing, and setting; grade pitting 1+ to 4+; a positive Stemmer sign points to lymphedema.", [
      S("history", "History Clues", "<ul><li><strong>Definition:</strong> accumulation of excess fluid in the <strong>extravascular interstitial space</strong>.</li><li>Focus on <strong>location</strong> (<strong>unilateral vs bilateral</strong>), <strong>timing</strong>, <strong>setting</strong>, and associated symptoms.</li><li>Causes are frequently <strong>cardiac or pulmonary</strong> but can also be <strong>nutritional and/or positional</strong>.</li><li>Ask: pain or swelling in your legs? When first noticed? <strong>Sudden or gradual</strong>? <strong>Worse in the morning or evening</strong>? Medications for swelling?</li><li>Record <strong>daily morning weights</strong> — edema may not show until several liters accumulate.</li></ul>"),
      S("exam", "Pitting Edema Exam", "<p>Press firmly but gently with the thumb for <strong>1–2 seconds</strong> over the <strong>dorsum of each foot</strong>, <strong>behind each medial malleolus</strong>, and over the <strong>anterior tibia</strong>. Pitting = a depression left by the thumb.</p>" + edemaGrade + HY("2+ = 2–4 mm, 15 s · 3+ = 4–6 mm, 30 s · 4+ = 6–8 mm, > 30 s")),
      S("tests", "Special Tests", "<ul><li><strong>Stemmer sign</strong> (lymphedema): pinch and lift the skin fold at the base of the <strong>2nd toe</strong> and <strong>2nd finger</strong>. If you <strong>cannot</strong> pinch it, the sign is <strong>positive</strong> → lymphedema.</li><li><strong>Thigh and calf circumference</strong> evaluates edema and occlusion: 15 cm above the proximal patella and 15 cm below the distal patella; <strong>&gt; 1 cm</strong> side-to-side difference is abnormal.</li></ul>")
    ], [
      Q("history", "How does the lecture define edema?", ["Accumulation of excess fluid in the extravascular interstitial space", "Fluid inside the blood vessels", "Fluid within the pericardial sac", "Thickening of the skin from scarring"], 0, "Edema is excess fluid in the extravascular interstitial space."),
      Q("history", "Which feature of leg swelling does the lecture tell you to establish first when focusing the history?", ["Whether it is unilateral or bilateral", "The patient’s shoe size", "Whether the PMI is displaced", "The ABI"], 0, "Focus on location (unilateral vs bilateral), timing, setting, and associated symptoms."),
      Q("history", "Besides cardiac and pulmonary causes, which other categories of edema cause does the lecture list?", ["Nutritional and positional", "Infectious and toxic", "Congenital and genetic only", "Psychogenic"], 0, "Causes are frequently cardiac or pulmonary but can also be nutritional and/or positional."),
      Q("exam", "Where should you press to check for lower extremity pitting edema?", ["Dorsum of each foot, behind each medial malleolus, and over the anterior tibia", "Popliteal fossa and posterior thigh only", "Plantar surface of the heel", "Over the patella"], 0, "Press 1–2 seconds over the dorsum of the foot, behind the medial malleolus, and over the anterior tibia."),
      Q("exam", "Pressing on the shin leaves a 5 mm pit that takes about 30 seconds to rebound. What grade is this?", ["3+", "2+", "1+", "4+"], 0, "3+ is a deeper 4–6 mm indentation with about 30 seconds to rebound."),
      Q("exam", "A barely detectable impression under 2 mm is graded as what?", ["1+", "2+", "3+", "0"], 0, "1+ = barely detectable impression (< 2 mm)."),
      Q("exam", "A very deep 7 mm pit takes more than 30 seconds to rebound. What grade is it?", ["4+", "3+", "2+", "1+"], 0, "4+ = very deep indentation (6–8 mm), more than 30 seconds to rebound."),
      Q("tests", "After axillary node dissection a patient has a swollen arm, and you cannot lift the skin fold at the base of her second finger. What does this indicate?", ["Lymphedema — positive Stemmer sign", "DVT — positive Homan sign", "Radial artery occlusion — positive Allen test", "A normal finding"], 0, "Inability to pinch the dorsal skin fold at the base of the 2nd finger or toe is a positive Stemmer sign, associated with lymphedema."),
      Q("tests", "How is the Stemmer sign performed?", ["Pinch and lift the skin fold at the base of the second toe or finger", "Dorsiflex the foot and palpate the calf", "Raise the legs to 60° and time color return", "Press the thumb into the anterior tibia for 2 seconds"], 0, "Stemmer sign: try to pinch and lift the skin at the base of the 2nd toe/finger."),
      Q("tests", "How much side-to-side difference in calf circumference is abnormal?", ["More than 1 cm", "More than 0.25 cm", "More than 3 cm", "More than 5 cm"], 0, "Measure 15 cm from the patella on each side; a difference greater than 1 cm is abnormal.")
    ]),

    // ------------------------------------------------------------------
    D("hp-dvt-venous", "Deep Venous Thrombosis & Venous Insufficiency", "Venous causes of leg pain and swelling. Look for unilateral edema, a > 1 cm calf or thigh difference, thigh tenderness, and a Homan sign — remembering Homan is neither sensitive nor specific.", [
      S("history", "History Clues", "<ul><li>Peripheral vascular symptoms with <strong>associated edema</strong> point toward <strong>DVT</strong> or <strong>venous insufficiency</strong>.</li><li>Ask about pain or swelling in the legs, when it started, <strong>sudden vs gradual</strong> onset, and whether swelling is worse in the morning or evening.</li><li>A normal CV history documents “No history of <strong>blood clots</strong>” and denies <strong>varicosities</strong> or <strong>ulcerations</strong>.</li><li>Skin: look for <strong>ulcers, nonhealing wounds, or abnormal venous patterns</strong>.</li></ul>"),
      S("tests", "Special Tests", legTests + HY("Homan sign is not very sensitive or specific — it only helps decide the next step in diagnosing DVT.") + "<p>The normal documentation example ends “Negative Homan sign. Negative Stemmer sign.”</p>")
    ], [
      Q("history", "Leg pain or cramping is accompanied by edema. Which two venous conditions does the lecture link to this picture?", ["Deep venous thrombosis and venous insufficiency", "PAD and aortic dissection", "Lymphedema and Raynaud", "Heart block and PSVT"], 0, "Peripheral vascular symptoms with associated edema suggest DVT or venous insufficiency."),
      Q("tests", "How is the Homan sign performed?", ["Dorsiflex the foot and palpate the calf for tenderness", "Squeeze the back of the thigh", "Pinch the skin at the base of the second toe", "Raise both legs to 60°"], 0, "Homan sign: dorsiflex the foot and palpate the calf, repeated bilaterally."),
      Q("tests", "What is the main limitation of the Homan sign?", ["It is not very sensitive or specific", "It is painful and contraindicated", "It requires Doppler ultrasound", "It only works in the upper extremity"], 0, "Homan sign is neither very sensitive nor specific but can help determine the next step in diagnosing DVT."),
      Q("tests", "Tenderness when you squeeze the back of the thigh suggests what?", ["Venous insufficiency or a large DVT", "Lymphedema", "Severe PAD", "Aortic regurgitation"], 0, "Thigh tenderness suggests venous insufficiency or a large DVT."),
      Q("tests", "Where are calf and thigh circumferences measured?", ["15 cm below the distal patella and 15 cm above the proximal patella", "At the ankle and mid-thigh", "5 cm from the knee crease", "At the widest point wherever it falls"], 0, "Thigh: 15 cm from the proximal patella. Calf: 15 cm from the distal patella. Compare bilaterally."),
      Q("tests", "A patient’s right calf measures 38.5 cm and the left 37 cm at the standard landmark. How do you interpret this?", ["Abnormal — the difference exceeds 1 cm, raising concern for edema or occlusion", "Normal — differences under 2 cm are expected", "Diagnostic of lymphedema", "Diagnostic of PAD"], 0, "A difference greater than 1 cm is abnormal; the test evaluates for edema and occlusion such as DVT."),
      Q("history", "Which skin finding on the legs points toward a venous problem rather than an arterial one?", ["Abnormal venous patterns with ulcers or nonhealing wounds", "Hair loss over the anterior tibia with pallor", "Clubbing of the fingernails", "Cyanotic lips"], 0, "Abnormal venous patterns are a venous finding; hair loss, coldness, and pallor point to decreased arterial perfusion.")
    ]),

    // ------------------------------------------------------------------
    D("hp-pad", "Peripheral Arterial Disease", "Decreased arterial perfusion of the legs. Recognize exertional leg pain that resolves with rest, cool pale hairless skin, weak pulses, bruits, delayed color return, and an ABI ≤ 0.90.", [
      S("history", "History Clues", "<ul><li><strong>Pain or cramping in the legs with exertion</strong> (clarify <strong>how far they can walk</strong> before pain comes on) or <strong>at rest</strong> → <strong>PAD</strong>.</li><li><strong>Coldness, numbness, pallor, or discoloration</strong> of the extremities, or <strong>hair loss over the anterior tibial surfaces</strong> → decreased arterial perfusion.</li><li>Ask: told you have a circulation problem in your feet or legs? <strong>vascular bypass</strong>? bothered by <strong>cold feet</strong>? what <strong>color</strong> are your feet sitting with shoes and socks off? <strong>slow-healing ulcer</strong>? <strong>amputation</strong> of leg, foot, or toe?</li><li>Risk factors: HTN, atherosclerosis, diabetes, dyslipidemias, metabolic syndrome, <strong>smoking</strong>, obesity, family history.</li></ul>" + CL + "exertional leg pain relieved by rest is called <strong>claudication</strong> (the term appears in the slide 26 documentation example).</p>"),
      S("exam", "Exam Findings", "<ul><li><strong>Skin:</strong> ulcers, nonhealing wounds, skin color, hair distribution.</li><li><strong>Capillary refill</strong> in fingernails and toenails: <strong>&gt; 5 seconds</strong> suggests poor peripheral circulation.</li><li><strong>Pulses:</strong> pads of the 2nd and 3rd fingers, <strong>compare bilaterally</strong> — temporal, carotid, brachial, radial, ulnar, femoral, popliteal, posterior tibial, dorsalis pedis.</li></ul>" + pulseGrade + "<ul><li><strong>Bruits:</strong> auscultate with the <strong>bell</strong> over the temporal, carotid (patient <strong>holds breath</strong>), aortic, renal, iliac, and femoral arteries.</li></ul>"),
      S("tests", "Special Tests", "<p><strong>Lower extremity arterial insufficiency test:</strong> patient supine → raise both legs to <strong>60°</strong> until maximal pallor (usually 30–60 s) → patient sits up with legs dangling → time the return of color. <strong>Normal &lt; 10 seconds.</strong></p><p><strong>Ankle-brachial index (ABI):</strong> quick, noninvasive test for subclinical or suspected PAD; detects <strong>≥ 50% stenosis</strong> in major leg vessels. Compares leg and arm systolic BP using <strong>Doppler</strong> (brachial; dorsalis pedis and posterior tibial).</p>" + HY("Right ABI = highest right ankle pressure ÷ highest pressure in EITHER arm. Left ABI = highest left ankle pressure ÷ highest pressure in EITHER arm.") + abiTable + "<p><strong>Allen test</strong> (hand): compares <strong>radial and ulnar</strong> patency before an <strong>ABG</strong>. Tight fist → compress both arteries → open hand relaxed → release the radial and watch for color return (3–5 s) → repeat, releasing the ulnar.</p>")
    ], [
      Q("history", "A smoker reports calf cramping after walking two blocks that goes away when he stops. Which condition does the lecture link to this?", ["Peripheral arterial disease", "Deep venous thrombosis", "Lymphedema", "Venous insufficiency"], 0, "Pain or cramping in the legs with exertion points to PAD."),
      Q("history", "When a patient reports leg pain with exertion, what should you clarify?", ["How far they can walk before the pain comes on", "How many pillows they sleep on", "Whether the pain is tearing", "Whether they can tap out the rhythm"], 0, "Quantify walking distance before pain begins — it tracks PAD severity."),
      Q("history", "Which skin finding over the anterior tibia suggests decreased arterial perfusion?", ["Hair loss", "Pitting edema", "Abnormal venous patterns", "Hyperpigmented varicosities"], 0, "Coldness, numbness, pallor, discoloration, or hair loss over the anterior tibial surfaces suggests decreased arterial perfusion."),
      Q("exam", "Capillary refill greater than how many seconds suggests poor peripheral circulation in this lecture?", ["5 seconds", "1 second", "10 seconds", "30 seconds"], 0, "The slides state capillary refill greater than 5 seconds suggests poor peripheral circulation."),
      Q("exam", "The dorsalis pedis pulse is diminished and weak. How is it graded?", ["1+", "2+", "3+", "0"], 0, "3+ bounding, 2+ brisk/normal, 1+ diminished/weak, 0 absent."),
      Q("exam", "Which part of the stethoscope is used to listen for bruits?", ["Bell", "Diaphragm", "Either, but only with the patient prone", "Neither — bruits are palpated"], 0, "Auscultate pulses for bruits with the bell."),
      Q("exam", "When auscultating the carotid artery for a bruit, what do you ask the patient to do?", ["Hold their breath", "Lean forward and exhale", "Roll into left lateral decubitus", "Make a tight fist"], 0, "Carotid bruits are auscultated while the patient holds their breath."),
      Q("tests", "During the arterial insufficiency test, how long should it take normally for color to return to the feet after dangling?", ["Less than 10 seconds", "Less than 2 seconds", "30–60 seconds", "More than 60 seconds"], 0, "Normal color return is under 10 seconds; 30–60 s is how long elevation takes to produce maximal pallor."),
      Q("tests", "To what angle are the legs raised in the lower extremity arterial insufficiency test?", ["60°", "30°", "45°", "90°"], 0, "Both legs are raised to 60° until maximal pallor develops."),
      Q("tests", "How is the right ABI calculated?", ["Highest right ankle systolic pressure ÷ highest systolic pressure in either arm", "Right ankle pressure ÷ right arm pressure only", "Highest arm pressure ÷ right ankle pressure", "Average of both ankles ÷ left arm pressure"], 0, "Each ankle uses its own highest pressure; the denominator is the highest arm pressure from either side."),
      Q("tests", "Arm systolic pressures are R 140 and L 130. Left ankle pressures are DP 110 and PT 98. What is the left ABI and its meaning?", ["0.79 — mild-to-moderate PAD", "0.85 — normal", "0.70 — severe PAD", "1.27 — noncompressible vessel"], 0, "Highest left ankle (110) ÷ highest arm (140) = 0.79, which falls in 0.41–0.90: mild-to-moderate PAD."),
      Q("tests", "A patient with rest pain and a nonhealing toe ulcer has an ABI of 0.35. How do you interpret it?", ["Severe PAD", "Mild-to-moderate PAD", "Normal", "Noncompressible vessel"], 0, "ABI 0–0.40 = severe PAD."),
      Q("tests", "A long-standing diabetic has an ABI of 1.45. What is the best interpretation?", ["Noncompressible, calcified vessel", "Normal — PAD excluded", "Severe PAD", "Mild-to-moderate PAD"], 0, "An ABI above 1.30 reflects a noncompressible, calcified vessel."),
      Q("tests", "What is the normal ABI range?", ["0.91–1.30", "0.41–0.90", "0–0.40", "Greater than 1.30"], 0, "Normal ABI is 0.91–1.30."),
      Q("tests", "The ABI detects stenosis of at least what degree in major leg vessels?", ["50%", "10%", "25%", "90%"], 0, "ABI detects stenosis of 50% or more."),
      Q("tests", "Before drawing an arterial blood gas from the radial artery, which test confirms that the ulnar artery can supply the hand?", ["Allen test", "Homan sign", "Stemmer sign", "Arterial insufficiency test"], 0, "The Allen test compares radial and ulnar patency and is performed before an ABG.")
    ]),

    // ------------------------------------------------------------------
    D("hp-syncope", "Syncope", "Transient loss of consciousness followed by recovery. Most often neurocardiogenic (vasovagal is most common); cardiac arrhythmias — especially VT and bradyarrhythmias — are the dangerous cause.", [
      S("overview", "Definition & Causes", "<p><strong>Syncope</strong> = transient loss of consciousness followed by recovery.</p>" + Tbl(["Category", "Causes taught"], [
        ["<strong>Neurocardiogenic</strong> — the <strong>most common</strong> category", "<strong>Vasovagal syncope (most common)</strong>, postural orthostatic tachycardia syndrome (<strong>POTS</strong>), <strong>carotid sinus syncope</strong>, <strong>orthostatic hypotension</strong>"],
        ["<strong>Cardiac arrhythmias</strong>", "Especially <strong>ventricular tachycardia</strong> and <strong>bradyarrhythmias</strong>"]
      ]) + HY("Most common cause of syncope: neurocardiogenic — vasovagal above all.")),
      S("history", "History Clues", "<ul><li>Ask about the <strong>context</strong>: where were you and what were you doing when it began? Ever happened before?</li><li>Ask about prior <strong>irregular heartbeat</strong> and any medication for it.</li><li>A normal CV history documents that the patient <strong>denies syncope</strong>.</li></ul>")
    ], [
      Q("overview", "How does the lecture define syncope?", ["Transient loss of consciousness followed by recovery", "Persistent unresponsiveness requiring CPR", "Lightheadedness without loss of consciousness", "Seizure activity with postictal confusion"], 0, "Syncope is a transient loss of consciousness followed by recovery."),
      Q("overview", "What is the most common category of syncope?", ["Neurocardiogenic", "Cardiac arrhythmia", "Structural valve disease", "Pulmonary embolism"], 0, "The most common cause is neurocardiogenic."),
      Q("overview", "Which specific type of syncope is the most common overall?", ["Vasovagal syncope", "Carotid sinus syncope", "Ventricular tachycardia", "POTS"], 0, "Vasovagal syncope is listed as the most common."),
      Q("overview", "Which of the following is listed as a neurocardiogenic cause of syncope?", ["Postural orthostatic tachycardia syndrome", "Ventricular tachycardia", "Complete heart block", "Paroxysmal supraventricular tachycardia"], 0, "Neurocardiogenic causes: vasovagal, POTS, carotid sinus syncope, and orthostatic hypotension."),
      Q("overview", "Which arrhythmias does the lecture highlight as cardiac causes of syncope?", ["Ventricular tachycardia and bradyarrhythmias", "Premature atrial contractions and sinus tachycardia", "Sinus arrhythmia and PACs", "Wandering atrial pacemaker and PJCs"], 0, "Cardiac arrhythmias causing syncope are especially VT and bradyarrhythmias."),
      Q("overview", "Which of the following is NOT on the lecture’s list of neurocardiogenic causes of syncope?", ["Ventricular tachycardia", "Carotid sinus syncope", "Orthostatic hypotension", "Vasovagal syncope"], 0, "VT is a cardiac arrhythmia cause; vasovagal, POTS, carotid sinus syncope, and orthostatic hypotension are neurocardiogenic."),
      Q("overview", "A patient faints on standing quickly from bed and recovers within seconds. Which listed cause best fits?", ["Orthostatic hypotension", "Ventricular tachycardia", "Bradyarrhythmia from heart block", "Carotid sinus syncope"], 0, "Syncope on standing fits orthostatic hypotension, a neurocardiogenic cause on the list."),
      Q("history", "Which context question does the lecture recommend to frame a symptom like syncope?", ["What were you doing when the symptoms started?", "How many pillows do you sleep on?", "Is the pain worse in cold weather?", "Have you had a leg amputation?"], 0, "Historical context questions include where the patient was and what they were doing when symptoms began.")
    ]),

    // ------------------------------------------------------------------
    D("hp-abdominal-vascular", "Vascular Abdominal, Back & Flank Pain", "Abdominal, back, or flank pain can be vascular: acute arterial thrombosis, oxygen supply–demand mismatch (pain worse with eating), or a sudden tearing pain from abdominal aortic dissection.", [
      S("history", "History Clues", Tbl(["Pain pattern", "Concern"], [
        ["<strong>Acute</strong> symptoms", "<strong>Arterial thrombosis</strong>"],
        ["Pain <strong>worse with eating</strong> (viscera need more O₂)", "<strong>Oxygen supply–demand mismatch</strong>"],
        ["<strong>Sudden tearing</strong> pain", "<strong>Abdominal aortic dissection</strong>"]
      ]) + HY("Sudden tearing pain = think aortic dissection.") + CL + "post-prandial abdominal pain from supply–demand mismatch is the pattern of <strong>chronic mesenteric ischemia</strong>.</p>"),
      S("exam", "Exam Findings", "<ul><li><strong>Aortic pulse:</strong> use the <strong>entire hand</strong>, pressing deeply in the <strong>upper abdomen, slightly left of midline</strong>.</li><li><strong>Bruits:</strong> with the <strong>bell</strong> over the <strong>aortic, renal, and iliac</strong> arteries (plus temporal, carotid, femoral).</li><li>Normal documentation: “Temporal, carotid, aortic, renal, iliac, femoral pulses auscultated without bruits.”</li></ul>")
    ], [
      Q("history", "A patient describes sudden, tearing abdominal pain radiating to the back. What does this raise concern for?", ["Abdominal aortic dissection", "Peripheral arterial disease", "Paroxysmal supraventricular tachycardia", "Lymphedema"], 0, "Sudden tearing pain suggests abdominal aortic dissection."),
      Q("history", "Acute abdominal, back, or flank symptoms raise suspicion of what vascular event?", ["Arterial thrombosis", "Venous insufficiency", "Lymphatic obstruction", "Pericardial friction"], 0, "Acute symptoms raise suspicion of arterial thrombosis."),
      Q("history", "A patient with atherosclerosis has abdominal pain that reliably begins after meals. What mechanism does the lecture describe?", ["Oxygen supply–demand mismatch as the viscera need more oxygen", "Sudden tearing of the aortic wall", "Acute arterial thrombosis", "Lymphedema of the bowel"], 0, "Pain worse with eating reflects supply–demand mismatch when the viscera need greater oxygen supply."),
      Q("exam", "How do you palpate the aortic pulse?", ["Press deeply with the entire hand in the upper abdomen, slightly left of midline", "Use fingertips lightly in the right lower quadrant", "Palpate the umbilicus with the heel of the hand while the patient holds breath", "Use the bell of the stethoscope over the epigastrium"], 0, "Use the entire hand, pressing deeply in the upper abdomen slightly left of midline."),
      Q("exam", "Which abdominal vessels does the lecture list for bruit auscultation?", ["Aortic, renal, and iliac", "Splenic and hepatic", "Superior mesenteric and portal", "Gastric and gastroduodenal"], 0, "Bruit sites: temporal, carotid, aortic, renal, iliac, femoral."),
      Q("exam", "Which stethoscope technique is used to listen for abdominal bruits?", ["The bell over the aortic, renal, and iliac sites", "The diaphragm at the apex", "The bell at the left 2nd ICS", "No stethoscope; palpation only"], 0, "Auscultate pulses for bruits with the bell.")
    ]),

    // ------------------------------------------------------------------
    D("hp-clubbing-cyanosis", "Hypoxemia Signs: Clubbing & Cyanosis", "Skin clues to chronic or current hypoxia. Clubbing is bulbous soft-tissue swelling at the nail base in hypoxic conditions and certain heart conditions; bluish lips indicate hypoxia.", [
      S("exam", "Exam Findings", Tbl(["Finding", "What it is", "Suggests"], [
        ["<strong>Clubbing</strong>", "<strong>Bulbous swelling of the soft tissue at the nail base</strong>", "<strong>Hypoxic conditions</strong> and certain <strong>heart conditions</strong>"],
        ["<strong>Cyanotic lips</strong>", "Bluish-tinged lips", "<strong>Hypoxia</strong>"],
        ["<strong>Capillary refill &gt; 5 s</strong>", "Delayed color return in finger/toe nails", "<strong>Poor peripheral circulation</strong>"]
      ]) + HY("Clubbing and cyanosis = oxygenation problem; slow capillary refill = perfusion problem.")),
      S("history", "History Clues", "<ul><li>Ask: “Have you ever noticed <strong>bluish colored skin</strong>?”</li><li>A normal CV history documents that the patient <strong>denies cyanosis</strong>.</li><li>Also ask about cold-induced <strong>color change in fingertips or toes</strong> (documented in the normal ROS).</li></ul>")
    ], [
      Q("exam", "How does the lecture describe fingernail clubbing?", ["Bulbous swelling of the soft tissue at the nail base", "Spoon-shaped concave nails", "Splinter hemorrhages under the nail", "Pitting of the nail plate"], 0, "Clubbing is bulbous swelling of the soft tissue at the nail base."),
      Q("exam", "In what settings does clubbing appear, per the lecture?", ["Hypoxic conditions and certain heart conditions", "Iron deficiency only", "Acute DVT", "Lymphedema"], 0, "Clubbing is seen in hypoxic conditions and certain heart conditions."),
      Q("exam", "A child with a congenital heart condition has bluish-tinged lips. What do they suggest?", ["Hypoxia", "Poor peripheral circulation only", "Lymphedema", "Venous insufficiency"], 0, "Bluish-tinged (cyanotic) lips suggest hypoxia."),
      Q("exam", "Which skin finding reflects a perfusion problem rather than an oxygenation problem?", ["Capillary refill greater than 5 seconds", "Clubbing", "Cyanotic lips", "Bluish skin"], 0, "Delayed capillary refill (> 5 s) suggests poor peripheral circulation; clubbing and cyanosis point to hypoxia."),
      Q("history", "Which general CV history question screens for cyanosis?", ["Have you ever noticed bluish colored skin?", "How far can you walk before you become short of breath?", "Is your chest pain worse in cold weather?", "Are you bothered by cold feet?"], 0, "“Have you ever noticed bluish colored skin?” screens for cyanosis."),
      Q("exam", "Where does the lecture tell you to look for cyanosis on the face?", ["The lips", "The earlobes", "The sclerae", "The nasal bridge"], 0, "Observe the lips; bluish-tinged lips suggest hypoxia.")
    ]),

    // ------------------------------------------------------------------
    D("hp-hypertension-lvh", "Hypertension & Left Ventricular Hypertrophy", "A chronic condition evaluated with OCHMEDPRA chronic care questions and home BP readings. Its bedside signature is LVH: an S4 (often palpable) and a palpable heave from an enlarged ventricle.", [
      S("chronic-care", "Chronic Care Visit (OCHMEDPRA)", Tbl(["Letter", "Ask"], [
        ["<strong>O</strong>nset", "When was the condition diagnosed?"],
        ["<strong>C</strong>urrent concerns", "Anything about the condition they hoped to discuss today?"],
        ["<strong>H</strong>ome readings", "<strong>Home BP readings</strong> for hypertension (home weights for HF) — how and how often taken, time of day, averages, highs, lows"],
        ["<strong>M</strong>edications", "Compliance and side effects"],
        ["<strong>E</strong>xercise", "Regular regimen? Activity level?"],
        ["<strong>D</strong>iet", "Healthy, unhealthy, specific plan? Effect on the condition?"],
        ["<strong>P</strong>revious imaging/procedures", "Labs (cholesterol, A1C), stress test, echo, cardiac cath"],
        ["<strong>R</strong>isk factors", "What could worsen the condition or cause complications?"],
        ["<strong>A</strong>ssociated symptoms", "<strong>Headaches, vision changes</strong>, chest pain/pressure, SOB, difficulty sleeping, fatigue, leg swelling or pain"]
      ]) + Mn("OCHMEDPRA", "Onset · Current concerns · Home readings · Medications · Exercise · Diet · Previous imaging/procedures · Risk factors · Associated symptoms") + "<p>General history: “Do you currently have or have you had high blood pressure? Do you take blood pressure medication?”</p>"),
      S("exam", "Exam Findings (LVH)", gallopTable + "<ul><li><strong>Heaves/lifts:</strong> inspect with <strong>tangential light</strong> (forceful contractions) and palpate with <strong>finger pads</strong> at the aortic, pulmonic, and apical areas — produced by an <strong>enlarged right or left ventricle</strong> or a ventricular aneurysm.</li><li>A normal PMI is <strong>brisk and non-sustained</strong>, one interspace, &lt; 2.5 cm.</li></ul>" + HY("S4 = stiff/hypertrophic LV: hypertension, aortic stenosis, hypertrophic cardiomyopathy, acute ischemia. Often palpable at the apex."))
    ], [
      Q("chronic-care", "What does the acronym OCHMEDPRA organize?", ["Chronic care questions for a follow-up visit", "Pain questions for a new complaint", "The cardiovascular exam sequence", "Special tests of the legs"], 0, "OCHMEDPRA structures chronic care questions; OLDCARTS structures pain complaints."),
      Q("chronic-care", "In OCHMEDPRA, what does the H stand for, and what is it for hypertension?", ["Home readings — home blood pressure readings", "History — family history of hypertension", "Heart sounds — an S4", "Hospitalizations — prior admissions"], 0, "H = home readings: home BP for hypertension, home weights for heart failure."),
      Q("chronic-care", "Which associated symptoms does the lecture specifically list to ask about at a chronic care visit?", ["Headaches, vision changes, chest pain, SOB, sleep difficulty, fatigue, leg swelling", "Fever, rash, joint pain, and diarrhea", "Polyuria, polydipsia, and weight loss", "Hematuria and flank pain only"], 0, "Ask specifically about headaches, vision changes, chest pain/pressure, SOB, difficulty sleeping, fatigue, and leg swelling or pain."),
      Q("chronic-care", "When reviewing a patient’s home BP log, which details does the lecture tell you to note?", ["How and how often readings were taken, time of day, and averages, highs, and lows", "Only the single most recent reading", "Only readings taken in the clinic", "Only whether any reading exceeded 200 systolic"], 0, "Note technique, frequency, time of day, and the averages, highest, and lowest readings."),
      Q("chronic-care", "In OCHMEDPRA, asking whether the patient has had a stress test, echo, cardiac cath, or cholesterol and A1C labs falls under which letter?", ["P — previous imaging/procedures", "R — risk factors", "C — current concerns", "A — associated symptoms"], 0, "Prior labs, stress tests, echo, and cath are previous imaging/procedures."),
      Q("exam", "A patient with long-standing hypertension has a low-pitched sound immediately before S1 at the apex. What is it?", ["S4", "S3", "Physiological split S2", "Opening snap"], 0, "A pre-S1 low-pitched apical sound from a stiff, hypertrophic LV is an S4."),
      Q("exam", "What produces the S4 heart sound?", ["Blood forced into a stiff or hypertrophic ventricle", "Rapid early diastolic filling of a compliant ventricle", "Closure of the aortic and pulmonic valves", "Turbulent flow across a regurgitant aortic valve"], 0, "S4 is the sound of blood forced into a stiff or hypertrophic ventricle at the end of diastole."),
      Q("exam", "Which conditions does the lecture list as causes of LVH that produce an S4?", ["Hypertension, aortic stenosis, and hypertrophic cardiomyopathy", "Mitral stenosis, lymphedema, and DVT", "Aortic regurgitation and anemia only", "Pericarditis and PSVT"], 0, "S4 occurs in LVH from hypertension, aortic stenosis, or HCM, and in acute ischemia and hyperkinetic states."),
      Q("exam", "Besides hearing it, how else can an S4 frequently be detected?", ["It is often palpable at the cardiac apex", "It causes a visible jugular pulsation", "It produces a positive Homan sign", "It is felt as a thrill at the RUSB"], 0, "The slides note S4 is frequently palpable at the apex."),
      Q("exam", "Palpating with the finger pads, you feel a heave at the apex. What produces heaves?", ["An enlarged right or left ventricle or a ventricular aneurysm", "Turbulent flow across a valve", "Pericardial inflammation", "Elevated jugular venous pressure"], 0, "Heaves are produced by enlarged ventricles and ventricular aneurysms; thrills come from turbulent flow.")
    ]),

    // ------------------------------------------------------------------
    D("hp-murmurs-rubs", "Murmurs & Rubs: Mitral Stenosis, Aortic & Mitral Regurgitation, Pericardial Rub", "The lesions the H&P lecture teaches you to augment and hear: mitral stenosis (bell, apex, left lateral decubitus), aortic regurgitation (diaphragm, leaning forward in held expiration), mitral regurgitation, and the pericardial friction rub.", [
      S("history", "History Clues", "<ul><li>Ask: “Have you ever been told you had a <strong>heart murmur</strong> or had <strong>rheumatic fever</strong>?”</li><li>A normal CV history documents “Denies history of murmur, rheumatic fever…”, and a normal exam “no <strong>murmurs, rubs, or gallops</strong>.”</li></ul>"),
      S("exam", "Which Head, Where", stethTable + "<p><strong>Valve auscultation points</strong> (different from where the valves actually sit):</p>" + Tbl(["Valve", "Auscultate at", "Surface projection"], [
        ["Aortic", "<strong>Right 2nd ICS</strong> at the sternum", "Behind the sternum opposite the 3rd ICS"],
        ["Pulmonic", "<strong>Left 2nd ICS</strong> at the sternum", "Left of the sternum, 3rd intercostal junction"],
        ["Tricuspid", "<strong>Left 5th ICS</strong> at the sternum", "Behind the right sternum, 4th–5th junction"],
        ["Mitral", "<strong>5th ICS, midclavicular line</strong> (apex)", "Left of the sternum, 4th intercostal junction"]
      ]) + "<ul><li><strong>Thrills</strong> — palpated with the <strong>ball/heel of the hand</strong> at the left sternal border (4th/5th ICS) and apex — are produced by <strong>turbulent flow</strong>.</li><li><strong>PMI forceful and terminating quickly</strong> → hyperkinesis or <strong>aortic regurgitation</strong>.</li></ul>"),
      S("maneuvers", "Augmenting Murmurs", Tbl(["Lesion", "Position", "Stethoscope &amp; site"], [
        ["<strong>Mitral stenosis</strong>", "Roll partly onto the left side — <strong>left lateral decubitus</strong> (brings the LV close to the chest wall)", "<strong>Bell</strong> on the <strong>apical impulse</strong>"],
        ["<strong>Aortic regurgitation</strong>", "<strong>Sit up, lean forward, exhale completely, and hold</strong> in expiration", "<strong>Diaphragm</strong> along the <strong>left sternal border (3rd/4th ICS)</strong> and at the apex"]
      ]) + HY("MS = bell + apex + left side down. AR = diaphragm + LSB + lean forward, breath out and held.") + "<p><strong>Pericardial friction rub</strong> and the murmurs of <strong>aortic and mitral regurgitation</strong> are high-pitched → <strong>diaphragm</strong>.</p>")
    ], [
      Q("history", "Which history question screens for valvular disease in the general CV history?", ["Have you ever been told you had a heart murmur or had rheumatic fever?", "Is the swelling worse in the morning or evening?", "Are you bothered by cold feet?", "Have you had any recent travel?"], 0, "The general CV history asks about a known murmur or rheumatic fever."),
      Q("maneuvers", "To augment a mitral stenosis murmur, how do you position the patient?", ["Left lateral decubitus", "Sitting up, leaning forward, breath held in expiration", "Supine with legs raised to 60°", "Standing after squatting"], 0, "Rolling partly onto the left side brings the LV close to the chest wall."),
      Q("maneuvers", "Which stethoscope head and location best detect mitral stenosis?", ["Bell on the apical impulse", "Diaphragm at the right 2nd ICS", "Diaphragm at the left sternal border", "Bell at the left 2nd ICS"], 0, "MS is low-pitched: bell at the apex."),
      Q("maneuvers", "How do you augment the murmur of aortic regurgitation?", ["Have the patient sit up, lean forward, exhale completely, and hold", "Roll the patient into left lateral decubitus", "Have the patient inhale deeply and hold", "Raise the legs to 60°"], 0, "AR: sit up, lean forward, exhale, and pause in expiration."),
      Q("maneuvers", "Where do you place the diaphragm when listening for aortic regurgitation?", ["Left sternal border at the 3rd/4th interspaces and at the apex", "Right 2nd ICS only", "Apex with the bell", "Left 2nd ICS with the bell"], 0, "Listen along the LSB (3rd/4th ICS) and at the apex with the diaphragm."),
      Q("exam", "Which stethoscope head is best for the murmurs of aortic and mitral regurgitation?", ["Diaphragm", "Bell", "Either equally", "Neither — they are palpated"], 0, "The diaphragm picks up high-pitched sounds: S1, S2, AR and MR murmurs, and rubs."),
      Q("exam", "Which stethoscope head best detects a pericardial friction rub?", ["Diaphragm", "Bell", "Bell with patient in left lateral decubitus", "Neither — it is palpated"], 0, "Pericardial friction rubs are high-pitched and best heard with the diaphragm."),
      Q("exam", "A patient’s PMI is forceful and terminates quickly. Which valve lesion does the lecture associate with this?", ["Aortic regurgitation", "Mitral stenosis", "Tricuspid stenosis", "Pulmonic stenosis"], 0, "A forceful, quickly terminating PMI suggests hyperkinesis from hypermetabolic states or aortic regurgitation."),
      Q("exam", "You feel a vibration with the heel of your hand at the left sternal border. What is it, and what produces it?", ["A thrill, from turbulent flow", "A heave, from an enlarged ventricle", "A palpable S4, from a stiff ventricle", "A lift, from pericardial fluid"], 0, "Thrills are palpated with the ball/heel of the hand and are produced by turbulent flow."),
      Q("exam", "Where is the mitral valve auscultated?", ["5th intercostal space at the midclavicular line", "Right 2nd intercostal space", "Left 2nd intercostal space", "Left 5th intercostal space at the sternum"], 0, "Mitral: 5th ICS at the MCL (apex). The left 5th ICS at the sternum is tricuspid."),
      Q("exam", "Where is the aortic valve auscultated?", ["Right side of the sternum in the 2nd intercostal space", "Behind the sternum opposite the 3rd intercostal space", "Left 2nd intercostal space", "Apex"], 0, "Aortic is auscultated at the right 2nd ICS; behind the sternum at the 3rd ICS is its surface projection.")
    ])
  ];

  window.CARDIO_DISEASES_HP = L("cardio-history-physical", "Cardiovascular H&P", diseases);
}());
