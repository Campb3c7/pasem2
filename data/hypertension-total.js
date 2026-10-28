/* Hypertension (Total): one combined review of Hypertension Parts I, II, III and Hypertensive Crisis.
   Learn cards are reused from the four lecture files (load those first). Every Test question and Apply case
   here is new: none repeats a prompt from the four source sections (checked by scripts/validate-hypertension-total.cjs).
   Overlapping objectives are merged: Part II objectives 11 (remodeling) and 12 (autoregulation) use the
   Hypertensive Crisis cards for objectives 1 and 2, which cover the same slides plus the crisis view.
   Order: official objectives 1–24 of "Hypertension, Parts I, II and III", then Hypertensive Crisis objectives 3–11. */
(function () {
"use strict";
var P1 = window.HYPERTENSION_PART1_OBJECTIVES || [];
var P2 = window.HYPERTENSION_PART2_OBJECTIVES || [];
var P3 = window.HYPERTENSION_PART3_OBJECTIVES || [];
var HC = window.HYPERTENSIVE_CRISIS_OBJECTIVES || [];

function find(list, id) {
  for (var i = 0; i < list.length; i += 1) if (list[i].id === id) return list[i];
  return null;
}
/* One question: card = Learn-card index, then prompt, correct answer, three distractors, explanation. */
function q(card, prompt, answer, wrong, explanation) {
  return { card: card, prompt: prompt, choices: [answer].concat(wrong), correct: 0, explanation: explanation };
}
/* One section: copies the Learn cards of a source objective and attaches the new questions. */
function sec(list, sourceId, id, title, description, test, apply) {
  var source = find(list, sourceId);
  var cards = source ? source.cards.map(function (c) { return { title: c.title, html: c.html, coverage: (c.coverage || []).slice() }; }) : [];
  return { id: id, title: title, description: description, cards: cards, test: test, apply: apply };
}

var T = [];

/* ======================= Objectives 1–10 (Parts I and II) ======================= */

T.push(sec(P1, "01-epidemiology-sdoh", "01-epidemiology-sdoh",
"1. Epidemiology and social determinants of health",
"Objective 1 (Part I). Global and US prevalence and control, risk reduction with treatment, and social determinants.",
[
q(0, "About how many people worldwide have hypertension?", "More than 1 billion", ["About 100 million", "About 400 million", "About 5 billion"], "The lecture cites more than 1 billion people with HTN worldwide and more than 9.4 million deaths per year."),
q(0, "What share of people with hypertension worldwide are unaware they have it?", "46%", ["10%", "25%", "80%"], "Globally 46% are unaware, fewer than 50% are treated, and only 1 in 5 is controlled."),
q(1, "Which US group has the HIGHEST rate of blood pressure control?", "White adults (32%)", ["Black adults (25%)", "Hispanic adults (25%)", "Asian adults (19%)"], "White adults have the highest control (32%); Asian adults have the lowest (19%). Black adults have the highest prevalence (56%)."),
q(1, "Which US group has the LOWEST prevalence of hypertension?", "Hispanic adults (39%)", ["Asian adults (46%)", "White adults (48%)", "Black adults (56%)"], "Prevalence is lowest in Hispanic adults (39%) and highest in Black adults (56%)."),
q(2, "Controlling BP to goal lowers the risk of myocardial infarction by about:", "20–25%", ["50%", "30–40%", "75%"], "MI falls 20–25%, stroke 30–40%, heart failure about 50%, and overall mortality about 11%."),
q(2, "Hypertension raises the relative risk of CAD, HF, stroke, AF, CKD, PAD, and dementia by about:", "2–4 fold", ["10–20 fold", "10–20%", "No measurable amount until BP exceeds 160/100"], "HTN raises these risks 2–4 fold; the lowest CV and renal risk is at about 115/75 or less."),
q(3, "How does the lecture define social determinants of health?", "Conditions where people live, learn, work, and play that affect health risks and outcomes", ["Inherited genes that set a person's BP", "A patient's personal health choices only", "The insurance plan a patient carries"], "SDOH are the conditions in the places people live, learn, work, and play; the CDC groups them into 5 key areas."),
q(3, "Compared with white patients, Black patients have about what risk of FATAL stroke?", "1.8 times", ["1.3 times", "4 times", "The same risk"], "Black patients have 1.3× nonfatal and 1.8× fatal stroke risk and 4× the renal complications/ESKD.")
],
[
q(0, "A public-health student says most people with hypertension worldwide are treated and controlled. Which correction is accurate?", "Fewer than half are treated and only about 1 in 5 is controlled", ["About 3 in 4 are controlled worldwide", "Almost everyone is treated, but half are uncontrolled", "Control rates are highest in Africa"], "Globally fewer than 50% are treated and only 1 in 5 is controlled; Africa has the highest prevalence (27%)."),
q(1, "A 72-year-old asks how common hypertension is in people his age. What does the lecture say?", "About 70% of adults over 65 have it", ["About 18%", "About 33%", "About 95%"], "Prevalence rises with age: about 70% of adults over 65 have HTN, compared with about 48% of all US adults."),
q(2, "A 60-year-old with a strong family history of heart failure asks which complication BP control prevents most. What do you tell him?", "Heart failure, reduced by about 50%", ["Myocardial infarction, reduced by about 50%", "Overall mortality, reduced by about 50%", "Stroke, reduced by about 11%"], "BP control cuts HF about 50%, stroke 30–40%, MI 20–25%, and overall mortality 11%."),
q(3, "A 31-year-old Black woman asks why her clinician checks her BP so carefully. Which explanation fits the lecture?", "HTN tends to develop about 10 years earlier and be more severe with more complications in Black patients", ["Black patients rarely develop renal complications from HTN", "HTN in Black patients is milder but harder to detect", "Black patients respond best to ACE inhibitors, so early detection matters less"], "In Black patients HTN develops about 10 years earlier, is more severe, and carries more complications, including 4× renal complications."),
q(3, "A patient recently lost his job and says his income no longer covers rent, food, and his BP pills. Which CDC area of social determinants is most directly involved?", "Economic stability", ["Education access and quality", "Social and community context", "Neighborhood and work environment"], "Income and the ability to afford basic needs fall under economic stability; economically disadvantaged persons have higher HTN rates and worse control.")
]));

T.push(sec(P1, "02-bp-physiology", "02-bp-physiology",
"2. BP physiology: RAAS, sympathetic activity, baroreceptors",
"Objective 2 (Part I). MAP and cardiac output, the baroreceptor reflex, sympathetic and chemoreceptor control, and the RAAS.",
[
q(0, "Cardiac output equals:", "Stroke volume × heart rate", ["MAP × peripheral resistance", "Preload − afterload", "Systolic BP − diastolic BP"], "CO = SV × HR, and MAP = CO × total peripheral resistance."),
q(0, "What is the mean arterial pressure for a BP of 150/90?", "110 mmHg", ["120 mmHg", "100 mmHg", "90 mmHg"], "MAP = [(2 × DBP) + SBP] / 3 = (180 + 150) / 3 = 110."),
q(0, "Preload is measured as:", "End-diastolic volume", ["Systolic BP", "Heart rate", "End-systolic pressure"], "Preload is the stretch before contraction, measured as EDV; afterload corresponds to systolic BP."),
q(1, "Short-term BP control over minutes to hours is mainly:", "Neural, through the baroreceptor reflex", ["Humoral, through the RAAS", "Renal sodium excretion", "Natriuretic peptides from the atria"], "Short-term control is neural (baroreceptors to the medulla/pons); long-term control is humoral (RAAS)."),
q(1, "Where is baroreceptor input integrated?", "The cardiovascular centers of the medulla and pons", ["The hypothalamus", "The juxtaglomerular apparatus", "The adrenal medulla"], "Carotid and aortic baroreceptor signals go to the medullary/pontine cardiovascular center, which adjusts sympathetic and parasympathetic output."),
q(2, "Central chemoreceptors in the medulla respond mainly to:", "Increased PCO2 and CSF pH change", ["Low arterial PO2", "Venous stretch", "Low tubular sodium"], "Central chemoreceptors sense PCO2/CSF pH and increase sympathetic outflow; peripheral chemoreceptors sense low PO2."),
q(3, "Which set lists all three triggers of renin release?", "Renal sympathetic β1 stimulation, low afferent arteriolar pressure, and low sodium at the macula densa", ["High BP, high sodium, and ANP", "Aldosterone, ADH, and angiotensin II", "Vagal stimulation, hyperkalemia, and high GFR"], "Renin is released by renal sympathetic nerves (β1 on JG cells), JG-cell baroreceptors sensing low pressure, and the macula densa sensing low sodium."),
q(3, "In tubuloglomerular feedback, LOW sodium at the macula densa causes:", "Prostaglandin release, afferent vasodilation, and increased filtration", ["ATP release, afferent vasoconstriction, and lower GFR", "ANP release and natriuresis", "Inhibition of renin release"], "Low Na → prostaglandins → vasodilation → ↑ filtration; high Na → ATP → afferent vasoconstriction → ↓ GFR."),
q(4, "Where is angiotensinogen made?", "The liver", ["The lungs", "The kidney's juxtaglomerular cells", "The adrenal cortex"], "Angiotensinogen (liver) → renin → angiotensin I → ACE (pulmonary/renal endothelium) → angiotensin II."),
q(4, "What does angiotensin II do in the proximal tubule?", "Increases sodium and bicarbonate reabsorption", ["Blocks sodium reabsorption", "Secretes renin", "Releases ANP"], "Ang II “VAST”: Vasoconstriction, Aldosterone, Sodium/bicarb reabsorption in the proximal tubule, Thirst/ADH.")
],
[
q(0, "A septic patient's BP is 84/42. What is the MAP, and is perfusion adequate?", "56 mmHg; below the 70–100 range needed for perfusion", ["63 mmHg; adequate", "84 mmHg; adequate", "42 mmHg; adequate if HR is high"], "MAP = (2 × 42 + 84) / 3 = 56, below the 70–100 mmHg needed to perfuse tissues."),
q(1, "Pressure on the carotid sinus increases the stretch its receptors sense. What response follows?", "Sympathetic inhibition and parasympathetic activation, so HR and BP fall", ["Sympathetic activation, so HR rises", "Renin release and vasoconstriction", "No change, because only the aortic arch senses stretch"], "More baroreceptor stretch increases firing to the medulla, which inhibits sympathetic and activates parasympathetic output."),
q(2, "A patient receives 3 liters of IV saline. Which response do stretched venous volume receptors produce?", "Less ADH, more ANP, and less RAAS activity", ["More ADH and more renin", "Arteriolar vasoconstriction in the kidney", "More aldosterone and thirst"], "Volume receptors on the venous side respond to stretch with ↓ ADH, ↑ ANP (vasodilation), and ↓ RAAS."),
q(2, "A bleeding patient who takes a beta-blocker has a blunted renin response. Which step in renin release did the drug block?", "Norepinephrine from renal sympathetic nerves acting on β1 receptors of juxtaglomerular cells", ["The macula densa sensing low sodium", "ACE in the pulmonary endothelium", "Aldosterone binding in the distal tubule"], "Low baroreceptor stretch drives renal sympathetic fibers to release NE onto β1 receptors on JG cells; β-blockade blunts that renin release."),
q(3, "A patient on a strict low-salt diet and a diuretic has a high renin level with normal BP. Which sensor is most directly responsible?", "The macula densa sensing low sodium", ["Carotid baroreceptors sensing high stretch", "Central chemoreceptors sensing CO2", "Venous volume receptors sensing high volume"], "Either low sodium (macula densa) or low pressure (JG cells, sympathetic input) stimulates renin."),
q(4, "A patient with renal artery stenosis has very high angiotensin II and a potassium of 3.2. Which angiotensin II action explains the low potassium?", "Stimulating aldosterone, which retains sodium and excretes potassium", ["Stimulating ADH, which dilutes potassium", "Direct arteriolar vasoconstriction", "Increasing bicarbonate excretion"], "Ang II stimulates adrenal aldosterone, causing Na/water retention and K excretion.")
]));

T.push(sec(P1, "03-primary-vs-secondary", "03-primary-vs-secondary",
"3. Primary vs secondary hypertension",
"Objective 3 (Part I). How common each is, typical age, mechanisms, and the three groups of secondary causes.",
[
q(0, "Secondary hypertension is most often diagnosed:", "Before age 20 or after age 50", ["Only between ages 30 and 50", "Only during pregnancy", "Only in patients over 80"], "Secondary HTN is often found before 20 or after 50; primary HTN appears from middle age onward and rises with age."),
q(0, "What is the core management of secondary hypertension?", "Find and treat the underlying cause", ["Lifestyle change alone", "Triple therapy for life", "Observation until organ damage appears"], "Primary HTN is managed with lifestyle plus medication; secondary HTN requires finding and treating the cause."),
q(1, "Which secondary cause raises BP through glucocorticoid excess with sodium and water retention?", "Cushing syndrome", ["Pheochromocytoma", "Coarctation of the aorta", "Obstructive sleep apnea"], "Cushing syndrome: glucocorticoid excess → Na/water retention. Pheo works by catecholamine surges; OSA by hypoxia-driven sympathetic activation."),
q(1, "How does coarctation of the aorta raise blood pressure?", "A fixed aortic narrowing causes high upper-body pressures", ["Constant RAAS activation from a renal tumor", "Catecholamine surges", "Hypoxia-driven sympathetic activation"], "Coarctation is a fixed aortic narrowing after the great vessels, producing high upper-extremity pressures."),
q(2, "Renal artery stenosis belongs to which group of secondary causes?", "Acquired", ["Congenital", "Endocrine", "Primary"], "Congenital: PKD, coarctation. Acquired: RAS, OSA, medications/substances. Endocrine: hyperaldosteronism, Cushing's, pheo, thyroid."),
q(2, "Obstructive sleep apnea is present in about what share of people with hypertension?", "More than 50%", ["About 5%", "About 15%", "Almost none"], "OSA is present in more than 50% of hypertensives; think of it with resistant HTN, snoring, and obesity.")
],
[
q(0, "A 15-year-old has a confirmed BP of 150/96. Which interpretation fits the lecture?", "This age strongly suggests secondary hypertension, so look for a cause", ["Primary hypertension is most likely at this age", "Teenage BP is not interpreted", "Treat with lifestyle only and recheck in a year"], "Secondary HTN is often diagnosed before 20 or after 50; a teenager with HTN needs a search for the cause."),
q(0, "A 54-year-old with obesity, a family history of HTN, and gradually rising BP has no clues to a secondary cause. What is the likely type and plan?", "Primary hypertension; lifestyle plus medication", ["Secondary hypertension; full endocrine work-up", "Secondary hypertension; renal angiogram", "Primary hypertension; no treatment needed"], "Primary (essential) HTN is 90–95% of cases, has identified risk factors but no single cause, and is managed with lifestyle plus medication."),
q(1, "A 44-year-old with hypertension has hypokalemia and metabolic alkalosis. Which mechanism links these findings?", "Excess aldosterone causing sodium/water retention and potassium loss", ["Catecholamine surges", "A fixed aortic narrowing", "Hypoxia-driven sympathetic activation"], "Primary hyperaldosteronism: excess aldosterone → Na/water retention and hypokalemia (often with metabolic alkalosis)."),
q(2, "A 25-year-old with hypertension has large cystic kidneys, as did his mother. How is this cause classified?", "A congenital secondary cause (polycystic kidney disease)", ["An acquired secondary cause", "An endocrine secondary cause", "Primary hypertension"], "Polycystic kidney disease is autosomal dominant and grouped with coarctation as a congenital secondary cause.")
]));

T.push(sec(P2, "04-bp-measurement", "04-bp-measurement",
"4. Proper blood pressure measurement",
"Objective 4 (Part II). Cuff size, preparation and positioning, measurement errors, both arms, and orthostatics.",
[
q(0, "Which cuff is usually right for an arm circumference of 27–34 cm?", "Adult", ["Small adult", "Large adult", "Adult thigh"], "22–26 cm small adult, 27–34 cm adult, 35–44 cm large adult, 45–52 cm adult thigh."),
q(0, "How does a cuff that is too LARGE affect the reading?", "It misreads by about 7/5 mmHg", ["It reads falsely high by 6–18/4–13", "It has no effect", "It reads about 30 mmHg too high"], "A too-small cuff reads falsely high (+6–18/4–13); a too-large cuff is off by about 7/5."),
q(1, "How long should a patient rest seated before an office BP?", "At least 5 minutes", ["30 seconds", "At least 30 minutes", "No rest is needed with an automated cuff"], "Seated, feet flat, back supported, and rested at least 5 minutes; avoid caffeine, exercise, and smoking for 30 minutes."),
q(1, "What is the ideal way to take an office BP according to the lecture?", "An automated oscillometric device with no staff in the room", ["A manual cuff with the nurse talking the patient through it", "A wrist cuff while standing", "A single reading right after the patient arrives"], "Ideal: automated oscillometric device, no staff in the room, no talking."),
q(1, "Leaving the patient's back unsupported changes the BP by about:", "6/8 mmHg", ["17/13 mmHg", "1/1 mmHg", "40/20 mmHg"], "Not resting 12/6, back unsupported 6/8, talking 17/13 (the largest error)."),
q(2, "How should office readings be taken to be reliable?", "At least 2 readings 1–2 minutes apart, averaged", ["One reading, repeated only if over 180", "Five readings 10 minutes apart, using the lowest", "Two readings, using the highest"], "Take at least 2 readings 1–2 minutes apart and average them."),
q(2, "What is the lecture's protocol for orthostatic BP?", "5 minutes supine, then measure 1–3 minutes after standing", ["Sitting, then immediately after standing", "Standing, then after 10 minutes lying down", "Supine only, both arms"], "Orthostatics: 5 min supine, then 1–3 min after standing; hypotension = SBP drop of 20 and/or DBP drop of 10.")
],
[
q(0, "A petite woman with a 24-cm arm circumference has her BP taken with a standard adult cuff. What should you do?", "Repeat it with a small adult cuff", ["Accept it; a larger cuff only reads high", "Use the thigh cuff", "Add 10 mmHg to the reading"], "22–26 cm needs a small adult cuff; a cuff that is too large misreads by about 7/5."),
q(1, "A patient had coffee and a cigarette in the parking lot 5 minutes ago. Her BP is 146/92. What is the best step?", "Wait until 30 minutes have passed, rest her, and repeat", ["Diagnose stage 2 hypertension", "Start medication and recheck in a month", "Recheck on the other arm right away"], "No caffeine, smoking, or exercise for 30 minutes before measurement; a reading taken right after is unreliable."),
q(1, "A patient sits with legs crossed and the arm hanging at her side while her BP is taken. Which error does the dangling arm add?", "About 10–12 mmHg too high from hydrostatic pressure", ["About 10–12 mmHg too low", "No change if the cuff is the right size", "About 30 mmHg too high"], "The arm must be supported at heart level; below heart level BP reads 10–12 mmHg higher."),
q(2, "At a first visit, the right arm reads 148/88 and the left 136/80. What should you do at future visits?", "Measure in the right arm, the one with the higher reading", ["Average the two arms", "Use the left arm because it is lower", "Alternate arms each visit"], "Measure both arms at the first visit; if they differ, use the arm with the higher reading going forward."),
q(2, "A 74-year-old's supine BP is 130/80; after 3 minutes standing it is 116/72. What do you conclude?", "Not orthostatic hypotension: the drop is 14/8", ["Orthostatic hypotension: any drop counts", "Orthostatic hypotension: the diastolic drop is 8", "Stage 1 hypertension only when standing"], "Orthostatic hypotension needs an SBP drop of 20 and/or a DBP drop of 10.")
]));

T.push(sec(P2, "05-abpm-hbpm", "05-abpm-hbpm",
"5. Ambulatory and home BP monitoring vs office monitoring",
"Objective 5 (Part II). HBPM technique, ABPM and nocturnal dipping, and equivalent thresholds for each method.",
[
q(0, "How should home BP be recorded each day?", "Twice in the morning before medications and twice in the evening before dinner, 1 minute apart", ["Once at bedtime", "Only when the patient feels symptoms", "Every hour while awake"], "Two readings in the morning before meds and two in the evening before dinner, 1 minute apart, saved in device memory or on paper."),
q(0, "How long should home BP be tracked before a scheduled visit?", "1 week", ["1 day", "2 months", "6 months"], "Measure for 1 week before a visit, or for 2 weeks after a medication change."),
q(1, "How often does ABPM record BP during the day?", "Every 15–20 minutes", ["Every 2 hours", "Every 5 minutes", "Once in the morning and once at night"], "ABPM measures every 15–20 minutes by day and every 30–60 minutes during sleep over 24 hours."),
q(1, "How much does BP normally fall during sleep?", "About 15% (10–20%)", ["About 50%", "It rises 10%", "It does not change"], "BP normally dips about 15% at night; non-dippers lack this dip and carry extra CV risk."),
q(1, "What is the main barrier to ABPM in the US?", "Insurance coverage", ["It cannot detect white coat hypertension", "It only measures during the day", "It is less accurate than office BP"], "ABPM is the preferred diagnostic method, but insurance coverage limits its use."),
q(2, "Which nighttime ABPM average corresponds to a clinic BP of 140/90 (stage 2)?", "120/70", ["135/85", "130/80", "100/65"], "Stage 2 equivalents: clinic 140/90, HBPM or daytime ABPM 135/85, nighttime ABPM 120/70, 24-hour ABPM 130/80."),
q(2, "Which method is most prone to technique error and the white coat effect?", "Office BP", ["Home BP with a validated device", "24-hour ABPM", "Nighttime ABPM"], "Office readings are most vulnerable to technique error and white coat effect; out-of-office monitoring is preferred for diagnosis.")
],
[
q(0, "A patient's home cuff log averages 20 mmHg lower than every office reading. What should you do first?", "Check the home device against an office reading", ["Assume white coat hypertension", "Stop his medication", "Ignore home readings permanently"], "Verify a home device's accuracy in the office before relying on it; do not use HBPM if it cannot be done properly."),
q(1, "A patient with LVH on echo has normal office readings. You want to know whether her BP stays high at night. Which test?", "24-hour ambulatory BP monitoring", ["Home BP twice daily", "Repeat office BP in both arms", "Orthostatic vital signs"], "ABPM is the only method that reliably captures nocturnal readings and detects non-dipping."),
q(1, "A patient's ABPM shows a daytime average of 128/78 and a nighttime average of 126/76. What does this show?", "A non-dipper, which adds cardiovascular risk", ["A normal nocturnal dip", "White coat hypertension", "Orthostatic hypotension"], "BP should fall about 15% during sleep; no dip (non-dipper) adds CV risk and is detected only on ABPM."),
q(2, "A patient's home BP averages 136/86 over a week. Which clinic category is this equivalent to?", "Stage 2 hypertension", ["Elevated BP", "Normal", "Stage 1 hypertension"], "The HBPM equivalent of stage 2 (clinic 140/90) is 135/85, so 136/86 is in the stage 2 range."),
q(2, "A patient's 24-hour ABPM averages 127/76. Which category does this match?", "Stage 1 hypertension", ["Normal", "Elevated BP", "Stage 2 hypertension"], "24-hour ABPM equivalents: elevated 115/75, stage 1 125/75, stage 2 130/80.")
]));

T.push(sec(P2, "06-diagnostic-criteria", "06-diagnostic-criteria",
"6. Diagnostic criteria for hypertension",
"Objective 6 (Part II). Standard criteria, single-visit diagnosis, the visit-2 algorithm, and white coat hypertension.",
[
q(0, "What average BP defines hypertension?", "Systolic 130 or higher, or diastolic 80 or higher", ["140/90 or higher", "120/80 or higher", "160/100 or higher"], "The threshold for HTN is an average ≥130 systolic or ≥80 diastolic."),
q(0, "Why is a single BP reading almost never enough to diagnose hypertension?", "BP varies widely from moment to moment", ["Automated cuffs are inaccurate", "Insurance requires three visits", "Only diastolic readings matter"], "BP varies widely, so diagnosis requires averaged readings on 2 or more visits, ideally confirmed out of office."),
q(1, "At what BP can hypertension be diagnosed at one visit, even without target-organ damage?", "180/120 or higher", ["140/90 or higher", "160/100 or higher", "150/95 or higher"], "Single-visit diagnosis: ≥180/≥120, or ≥160/≥100 with known target-organ damage."),
q(2, "At visit 1, BP is 136/84 and single-visit criteria are not met. What is the preferred next step?", "Arrange out-of-office monitoring, preferably ABPM", ["Start two medications", "Diagnose white coat hypertension", "Recheck in 1 year"], "Visit 1: H&P and labs; if ≥130/80 without single-visit criteria, arrange out-of-office assessment, ABPM preferred."),
q(2, "In the lecture's worked example, what happens to readings taken after the patient drank coffee?", "They are discarded", ["They count double", "They are kept but labeled", "They replace the lowest readings"], "Readings taken after caffeine are discarded; the rest are averaged per arm, and the higher arm is used.")
],
[
q(0, "A man's BP at a pharmacy health fair is 150/94. He asks if he has hypertension. What is accurate?", "Not yet: diagnosis needs averaged readings on 2 or more visits, ideally confirmed out of office", ["Yes, any reading over 140/90 is diagnostic", "Yes, if he feels well", "No, health fair readings are always wrong"], "A single reading is almost never diagnostic; average ≥2 readings on ≥2 visits and confirm with ABPM or HBPM."),
q(1, "A 61-year-old with known CKD has a repeated screening BP of 162/104. What is correct?", "Hypertension can be diagnosed today", ["She needs ABPM before any diagnosis", "This is hypertensive urgency", "Recheck in 1 year"], "With known target-organ damage (CKD is listed), a screening BP ≥160/≥100 allows a single-visit diagnosis."),
q(1, "A 50-year-old with no known organ damage has a repeated screening BP of 166/102. Can hypertension be diagnosed today?", "No; without organ damage or a BP of 180/120 or higher, confirm with more readings", ["Yes; any BP over 160/100 is diagnostic", "Yes; diastolic over 100 is always diagnostic", "No; he needs a renal angiogram first"], "160/100 allows a one-visit diagnosis only with known target-organ damage; otherwise ≥180/120 is required."),
q(2, "No ABPM or home cuff is available. Additional office readings average 134/82. What is the diagnosis?", "Hypertension (stage 1)", ["White coat hypertension", "Elevated BP", "Normal BP"], "If ABPM/HBPM are unavailable, an office average ≥130/80 on additional readings confirms HTN; 134/82 is stage 1.")
]));

T.push(sec(P2, "07-stages", "07-stages",
"7. Stages of hypertension and isolated systolic/diastolic HTN",
"Objective 7 (Part II). AHA/ACC categories, isolated systolic and diastolic HTN, and classification rules.",
[
q(0, "Which reading is ELEVATED BP (not stage 1)?", "126/78", ["132/76", "118/82", "124/80"], "Elevated = 120–129 AND diastolic below 80. A diastolic of 80 or more is already stage 1."),
q(0, "Which reading is STAGE 2 hypertension?", "138/92", ["139/89", "134/86", "128/78"], "Stage 2 = systolic ≥140 OR diastolic ≥90. A diastolic of 92 makes 138/92 stage 2."),
q(1, "How is isolated diastolic hypertension defined?", "Systolic under 130 and diastolic 80 or higher", ["Systolic 130 or higher and diastolic under 80", "Diastolic over 120", "Any diastolic over 90 with symptoms"], "Isolated diastolic HTN: systolic below 130 and diastolic ≥80. Isolated systolic HTN: systolic ≥130 and diastolic below 80."),
q(1, "In younger patients, which BP component tracks cardiovascular risk best?", "Diastolic BP", ["Systolic BP", "Pulse pressure", "Heart rate"], "Diastolic BP tracks risk best in younger patients; systolic is the main determinant after 60.")
],
[
q(0, "A 41-year-old's confirmed average BP is 134/94. How is it classified?", "Stage 2 hypertension", ["Stage 1 hypertension", "Elevated BP", "Isolated diastolic HTN, not staged"], "When systolic and diastolic fall in different categories, the higher category determines the stage; DBP 94 is stage 2."),
q(1, "A patient took HCTZ for years, then lost 20 kg and stopped it. A year later his BP is consistently 116/74 off medication. How is he classified?", "Normal BP; he is no longer called hypertensive", ["Still hypertensive, because he once took medication", "Elevated BP", "Stage 1, controlled"], "Once on medication a patient is always called hypertensive, unless lifestyle change lets them come off drugs with normal BP."),
q(1, "A 29-year-old's confirmed average BP is 122/84. What is the best description?", "Isolated diastolic hypertension, stage 1", ["Elevated BP", "Normal BP", "Isolated systolic hypertension"], "Systolic below 130 with diastolic ≥80 is isolated diastolic HTN; DBP 80–89 is stage 1."),
q(1, "A patient in the ED with a kidney stone has BP 150/95 while in severe pain. How should this BP be classified?", "It should not be staged; the definitions apply to adults who are not acutely ill, so recheck when well", ["Stage 2 hypertension", "Hypertensive urgency", "Isolated systolic hypertension"], "The AHA/ACC definitions apply to adults off antihypertensives who are not acutely ill.")
]));

T.push(sec(P1, "08-renovascular-resistant", "08-renovascular-resistant",
"8. Renovascular hypertension and resistant hypertension",
"Objective 8 (Part I). Renal artery stenosis from atherosclerosis or FMD, and the definition and management of resistant HTN.",
[
q(0, "Where does atherosclerotic renal artery stenosis typically occur?", "At the ostium or proximal renal artery", ["In the distal renal artery as a string of beads", "In the renal vein", "Within the glomerulus"], "Atherosclerotic RAS is ostial/proximal; FMD gives the distal “string of beads” in women under 50."),
q(0, "Why doesn't the high BP of renovascular hypertension fix the problem?", "The stenosis is fixed, so high BP never restores flow and the kidney keeps activating RAAS", ["Renin falls as BP rises", "The normal kidney blocks renin", "Aldosterone is suppressed"], "The poorly perfused kidney keeps activating RAAS because the obstruction is fixed, and the high BP stresses the normal kidney."),
q(1, "Before labeling hypertension resistant and adding a fourth drug, what should be confirmed?", "Adherence, home BP readings, and no interfering drugs or intake", ["A normal renal angiogram", "A sleep study in every patient", "Two weeks off all medications"], "If uncontrolled on three drugs: confirm adherence, check home BP, and exclude interfering drugs/intake."),
q(1, "Which is a lecture-listed fourth drug for resistant hypertension?", "An aldosterone antagonist", ["An ARB added to the ACE inhibitor", "A second thiazide", "A second dihydropyridine CCB"], "Fourth-drug options: aldosterone antagonist, β-blocker, central agent, α-blocker, or direct vasodilator. Never ACEI + ARB.")
],
[
q(0, "A 29-year-old woman has abrupt severe hypertension and an epigastric bruit. Which cause and imaging finding fit best?", "Fibromuscular dysplasia with a “string of beads” on angiography", ["Atherosclerotic ostial stenosis", "Polycystic kidneys on ultrasound", "Coarctation with rib notching"], "FMD affects women under 50 and shows a “string of beads/pearls”; atherosclerosis affects older men with CAD risk factors."),
q(0, "A 68-year-old man with unilateral atherosclerotic renal artery stenosis develops proteinuria in the OTHER kidney. What explains it?", "The high BP driven by the stenotic kidney stresses the normal kidney", ["The stenosis spreads to the other artery", "Renin is toxic to glomeruli", "Aldosterone directly damages the other kidney"], "In renovascular HTN the high BP never restores flow to the stenotic kidney, and it stresses the normal kidney."),
q(1, "A patient's BP is above goal on maximal lisinopril, amlodipine, and metoprolol. Does she have resistant hypertension?", "No; resistant HTN requires a thiazide diuretic among the three drugs, so add one", ["Yes; any three drugs qualify", "Yes; refer for a renal angiogram", "No; she needs five drugs first"], "Resistant HTN = above goal on maximal tolerated doses of three classes, one of which is a thiazide diuretic."),
q(1, "A patient is above goal on maximal lisinopril, amlodipine, and chlorthalidone. Home readings confirm it, and he takes ibuprofen daily for back pain. What is the best next step?", "Stop the NSAID and reassess before adding a fourth drug", ["Add spironolactone today and continue ibuprofen", "Add losartan", "Order a renal angiogram"], "Exclude interfering drugs before escalating; NSAIDs raise BP about 5 mmHg on average.")
]));

T.push(sec(P1, "09-secondary-workup", "09-secondary-workup",
"9. Secondary hypertension: when to suspect and how to test",
"Objective 9 (Part I). Screening triggers, RAS, PKD, coarctation, endocrine causes, OSA, and drugs.",
[
q(0, "Why is secondary hypertension screened for only when there is clinical suspicion?", "The testing is expensive", ["Secondary causes are never treatable", "The tests are always invasive", "Secondary HTN does not damage organs"], "Testing is expensive, so screen when there is a clinical reason: young onset, refractory HTN, or specific clues."),
q(0, "Which exam finding is a listed clue to secondary hypertension?", "A BP difference between the arms", ["An S3", "A BMI of 26", "Mild ankle edema on amlodipine"], "Clues: persistent hypokalemia, abdominal bruits, a BP difference between arms, and episodic HTN with flushing/palpitations."),
q(1, "What is a drawback of CT angiography for renal artery stenosis?", "Dye load and radiation", ["It is invasive", "It cannot image the renal arteries", "It requires general anesthesia"], "CT/MR angiography is non-invasive but more expensive; CT adds dye load and radiation."),
q(1, "Which renal artery test also allows angioplasty or stenting during the same procedure?", "Renal/aortic angiogram", ["Duplex Doppler ultrasound", "MR angiography", "Captopril renal scan"], "The angiogram is the invasive gold standard and allows PTRA/stent at the same time."),
q(1, "When should a chemistry panel be checked after starting an ACEI or ARB, in part to catch renal artery stenosis?", "Within a week", ["After 6 months", "Only if symptoms develop", "Never; ACEIs do not affect creatinine"], "AKI after starting an ACEI/ARB suggests RAS; check a chemistry panel within a week of starting."),
q(2, "Which test diagnoses coarctation of the aorta in a child?", "Echocardiogram", ["CT angiography", "Cardiac catheterization", "Renal ultrasound"], "Coarctation: echo in children, CTA in adults."),
q(2, "In polycystic kidney disease, the kidneys can enlarge up to:", "5 times normal size", ["Twice normal size", "10 times normal size", "They shrink"], "PKD kidneys enlarge up to 5× with cysts, causing flank pain, hematuria, UTI, stones, and poor urine concentration."),
q(3, "Pheochromocytoma is a tumor of the:", "Adrenal medulla", ["Adrenal cortex", "Anterior pituitary", "Thyroid"], "Pheochromocytoma is a rare, usually benign adrenal medulla tumor causing paroxysms of severe HTN."),
q(3, "If 24-hour urine metanephrines and catecholamines are high, what is the next test?", "Adrenal CT or MRI with contrast", ["Renal duplex ultrasound", "TSH", "Sleep study"], "Pheo work-up: 24-hour urine metanephrines/catecholamines, then adrenal CT/MRI if high."),
q(3, "Which screening test for primary hyperaldosteronism does the lecture give as a standard-reference clarification?", "Plasma aldosterone-to-renin ratio", ["24-hour urine metanephrines", "1-mg dexamethasone suppression test", "TSH"], "Clarification: screen hyperaldosteronism with an aldosterone-to-renin ratio; Cushing's with urine free cortisol, salivary cortisol, or dexamethasone suppression."),
q(4, "Which history clue points to thyroid disease as the cause of hypertension?", "Heat or cold intolerance and heart rate changes", ["Snoring and daytime sleepiness", "Flank pain and hematuria", "Episodic flushing with palpitations only"], "History clues: heat/cold intolerance or HR changes (thyroid); snoring and daytime sleepiness (OSA).")
],
[
q(0, "A 45-year-old's HTN is controlled on two drugs. He has normal potassium, no bruits, equal arm pressures, and no episodic symptoms. Should you screen for a secondary cause?", "No; there are no clinical clues and testing is expensive", ["Yes; everyone on two drugs needs screening", "Yes; order a renal angiogram", "Yes; order 24-hour urine metanephrines"], "Screen with clinical suspicion: young onset, refractory HTN (more than 3–4 drugs), or specific clues."),
q(1, "A 67-year-old with CKD stage 3b has refractory HTN and an abdominal bruit. You want a cheap, non-invasive test without dye or radiation. Which one?", "Duplex Doppler renal artery ultrasound", ["CT angiography", "Renal/aortic angiogram", "MR angiography with gadolinium"], "Duplex Doppler is cheap, non-invasive, and has no radiation or dye, though it is operator dependent."),
q(1, "A 70-year-old smoker has recurrent flash pulmonary edema, refractory HTN, and a high suspicion of RAS. The team plans to stent if it is confirmed. Which study fits?", "Renal/aortic angiogram", ["Duplex Doppler ultrasound only", "Plasma renin level", "Echocardiogram"], "The angiogram is the gold standard and lets the team intervene (PTRA/stent) at the same time."),
q(2, "An 8-year-old has arm BP 140/90, weak femoral pulses, and a radial–femoral delay. Which test confirms the diagnosis?", "Echocardiogram", ["CT angiography", "Renal ultrasound", "Chest x-ray only"], "Coarctation is diagnosed by echo in children and CTA in adults; rib notching is a later x-ray sign."),
q(3, "A 58-year-old smoker with a lung mass develops hypertension, hypokalemia, and new edema. Which secondary cause is most likely?", "Cushing syndrome from ectopic ACTH, usually small cell lung cancer", ["Pheochromocytoma", "Primary hyperthyroidism", "Polycystic kidney disease"], "Cushing syndrome can come from ectopic ACTH, most often SCLC, causing Na/water retention."),
q(3, "A 34-year-old with new HTN has tremor, weight loss, heat intolerance, and HR 112. Which test does the lecture use?", "TSH", ["Plasma aldosterone-to-renin ratio", "24-hour urine metanephrines", "Renal duplex ultrasound"], "Thyroid disease (hypo- or hyper-) is a listed endocrine cause; the lecture screens with TSH."),
q(4, "A patient with new HTN eats a large bag of black licorice every day. Her K+ is 3.1. What is the best step?", "Stop the licorice and recheck BP and potassium", ["Start spironolactone and continue the licorice", "Order an adrenal CT", "Start a thiazide"], "Black licorice lowers K+ and raises BP; remove the cause before labeling her hypertension."),
q(4, "A patient with OSA starts CPAP and asks if he can stop his BP medications. What does the lecture say?", "CPAP may not cure the HTN, but it makes the medications work better", ["CPAP always cures OSA-related HTN", "CPAP raises BP, so add another drug", "OSA has no link to HTN"], "OSA is present in more than 50% of hypertensives; CPAP may not cure HTN but makes medications more effective.")
]));

T.push(sec(P1, "10-primary-etiologies", "10-primary-etiologies",
"10. Primary hypertension: mechanisms and contributing conditions",
"Objective 10 (Part I). Proposed mechanisms, non-modifiable risk factors, contributing conditions, and lifestyle contributors.",
[
q(0, "How does the body normally respond to a salt load?", "BP rises, then natriuretic peptides cause natriuresis", ["BP falls immediately", "Renin rises", "Aldosterone rises to excrete sodium"], "Normally a salt load raises BP, then natriuresis via natriuretic peptides; this handling is disordered in primary HTN."),
q(0, "Reduced nephron mass as a cause of primary HTN can come from:", "Genetic, fetal, and lifetime events", ["Only kidney transplant", "Only diabetes", "Only NSAID use"], "Reduced nephron mass is listed as resulting from genetic, fetal, and lifetime events."),
q(1, "Which psychosocial traits are listed as hypertension risk factors?", "Hostile attitude, impatience, and depression", ["Optimism and extroversion", "High education level", "Shift work only"], "Psychosocial stress (hostile attitude, impatience, depression) is a listed risk factor."),
q(2, "How do diabetes and dyslipidemia relate to hypertension?", "They are CV risk factors themselves and increase the risk of developing HTN", ["They lower BP", "They have no link to HTN", "They only matter after a stroke"], "Diabetes and dyslipidemia are CV risk factors and also raise the risk of developing hypertension."),
q(3, "What potassium intake does the lecture recommend?", "90 mmol/day", ["10 mmol/day", "300 mmol/day", "Potassium should be avoided"], "Low K contributes to HTN; recommended K intake is 90 mmol/day, with sodium restricted to about 2 g/day."),
q(3, "According to the lecture, in whom does aerobic exercise lower blood pressure?", "Previously sedentary people", ["Only competitive athletes", "No one; exercise raises BP", "Only people over 80"], "Sedentary lifestyle and weight gain contribute to HTN; aerobic exercise lowers BP in previously sedentary people.")
],
[
q(0, "A patient's BP rises sharply after salty meals and stays up instead of returning to baseline. Which proposed mechanism fits best?", "Disordered sodium handling with impaired natriuresis", ["An immunologic mechanism", "A developmental aortic problem", "Polycythemia"], "Normally a salt load is followed by natriuresis via natriuretic peptides; this is disordered in primary HTN."),
q(1, "A 62-year-old man with low income, constant stress, and a hypertensive father asks which of his risk factors he cannot change. Which list matches the lecture's non-modifiable factors?", "Age, male sex, genetics, and low socioeconomic status", ["Smoking and alcohol", "Weight and sodium intake", "Sleep and exercise"], "The lecture lists genetics, African American race, male sex, psychosocial stress, low SES, and age as non-modifiable."),
q(2, "A 50-year-old with type 2 diabetes and high LDL has normal BP. She asks whether these conditions matter for hypertension. What do you tell her?", "Yes; they are CV risk factors and raise her risk of developing hypertension", ["No; they protect against hypertension", "Only her LDL matters", "Only if she also has CKD"], "Diabetes and dyslipidemia are CV risk factors and increase the risk of developing HTN."),
q(3, "A patient takes ibuprofen daily for arthritis. About how much does this raise BP on average?", "About 5 mmHg", ["About 1 mmHg", "About 20 mmHg", "It lowers BP"], "NSAIDs raise BP about 5 mmHg on average."),
q(3, "A patient has polycythemia with a hematocrit of 58% and new hypertension. Which mechanism links them?", "Increased blood viscosity", ["Increased natriuresis", "Low renin", "Increased venous capacitance"], "Polycythemia raises BP through increased blood viscosity.")
]));

/* ======================= Objectives 11–16 (Part II, merged with Crisis 1–2) ======================= */

T.push(sec(HC, "01-remodeling", "11-remodeling",
"11. Vascular and cardiac remodeling (with Crisis objective 1)",
"Objective 11 (Part II) and Hypertensive Crisis objective 1, merged. Stiff arteries, the complications flowchart, LVH, and natural history.",
[
q(0, "On the complications flowchart, accelerated atherosclerosis in the cerebral vessels leads to:", "Ischemic stroke", ["Hemorrhagic stroke", "Aortic dissection", "Retinopathy"], "Atherosclerosis arm: coronary → ischemia/MI, cerebral → ischemic stroke. Weakened-wall arm: aorta → aneurysm/dissection, cerebral → hemorrhagic stroke."),
q(0, "On the complications flowchart, weakened walls of the renal vessels lead to:", "Nephrosclerosis and renal failure", ["Renal artery stenosis from atherosclerosis", "Polycystic kidneys", "Fibromuscular dysplasia"], "Weakened vessel walls: aorta (aneurysm/dissection), cerebral (hemorrhagic stroke), renal (nephrosclerosis), ophthalmic (retinopathy)."),
q(1, "In the hypertensive heart disease continuum, what follows left atrial enlargement?", "HFrEF (systolic heart failure)", ["Normal LV mass", "Isolated systolic hypertension", "Diastolic dysfunction for the first time"], "Continuum: LVH and HFpEF → LA enlargement → HFrEF → aortic root dilation → arrhythmias → ischemic heart disease/cardiomyopathy."),
q(1, "Which exam findings suggest LVH?", "An S4 and a displaced, sustained apical impulse", ["An opening snap", "A pericardial rub", "A wide split S2 only"], "LVH exam clues: S4 and a displaced/sustained apical impulse."),
q(2, "Which phase of hypertension is characterized by vascular remodeling and progressive damage?", "Established hypertension", ["Prehypertension", "Early hypertension", "Complicated hypertension"], "Prehypertension ↑ CO; early HTN ↑ resistance; established HTN remodeling; complicated HTN end-organ damage.")
],
[
q(0, "A patient with 25 years of poorly controlled HTN is found to have an aortic aneurysm. Which arm of the complications flowchart explains it?", "Weakened vessel walls", ["Accelerated coronary atherosclerosis", "Renal hypoperfusion", "Increased cardiac output"], "Weakened vessel walls in the aorta lead to aneurysm and dissection."),
q(1, "After 25 years of uncontrolled HTN, a patient's echo shows a thick LV, an enlarged left atrium, and an EF of 35%. How does this fit the disease course?", "Late stage: the LVH has progressed from diastolic dysfunction to systolic failure", ["Early stage: diastolic dysfunction only", "Unrelated to hypertension", "Normal aging"], "Diastolic dysfunction comes first; later LVH encroaches on the cavity and systolic function fails (HFrEF)."),
q(2, "A hypertensive patient has CKD and retinopathy from her hypertension. Which phase is she in?", "Complicated hypertension", ["Prehypertension", "Early hypertension", "Established hypertension without damage"], "Complicated hypertension is the phase defined by end-organ damage.")
]));

T.push(sec(HC, "02-autoregulation", "12-cns-renal-autoregulation",
"12. CNS and renal autoregulation (with Crisis objective 2)",
"Objective 12 (Part II) and Hypertensive Crisis objective 2, merged. Cerebral autoregulation, the right-shifted curve, CPP, and renal autoregulation.",
[
q(0, "When MAP falls, how do autoregulating arterioles respond?", "They vasodilate to keep flow to the organ", ["They vasoconstrict", "They do not respond", "They release renin"], "MAP rises → arteriolar vasoconstriction; MAP falls → vasodilation to maintain organ flow."),
q(0, "If MAP is 90 mmHg and ICP is 20 mmHg, what is the cerebral perfusion pressure?", "70 mmHg", ["110 mmHg", "45 mmHg", "20 mmHg"], "CPP = MAP − ICP = 90 − 20 = 70."),
q(1, "In chronic hypertension, what happens to cerebral vascular resistance and the autoregulation curve?", "Resistance rises and the curve shifts to the right", ["Resistance falls and the curve shifts left", "Nothing changes", "Autoregulation is lost completely"], "Chronic hypertensives adapt with higher cerebral vascular resistance, shifting the curve right, so normal BP can cause ischemia."),
q(2, "In glomerular disease (nephrotic or nephritic), what is the main mechanism of hypertension?", "Volume expansion", ["Constant RAAS activation from ischemia", "Catecholamine excess", "Low cardiac output"], "Glomerular disease → volume expansion; RAS → RAAS activation; chronic renal failure → both.")
],
[
q(0, "A patient with an intracerebral bleed has ICP 30 mmHg. If MAP falls to 85 mmHg, what is the CPP?", "55 mmHg", ["115 mmHg", "85 mmHg", "30 mmHg"], "CPP = MAP − ICP = 85 − 30 = 55; rising ICP plus falling MAP reduces cerebral perfusion."),
q(1, "A 70-year-old with decades of HTN has BP 190/110 and no organ damage. Why should BP not be normalized today?", "Her brain's autoregulation curve is shifted right, so a quick drop to normal can cause ischemia", ["High BP protects her kidneys", "Her BP will normalize on its own", "Normal BP raises her ICP"], "Long-standing hypertensives treat high pressure as normal; lower BP slowly over weeks so autoregulation can reset."),
q(2, "A patient with long-standing HTN has BP swings between 200/110 and 100/60. Why are her kidneys vulnerable?", "Lost renal autoregulation lets intraglomerular pressure follow the systemic pressure up and down", ["The kidney increases renin only when BP is high", "The glomerulus constricts more as BP rises", "The kidney is protected by the macula densa"], "Sclerotic small renal arteries lose autoregulation, so intraglomerular pressure varies directly with systemic pressure.")
]));

T.push(sec(P2, "13-medications", "13-medications",
"13. Medications that raise BP",
"Objective 13 (Part II). NSAIDs, decongestants, OCPs, triptans, psychiatric and other drugs, and risky drug situations.",
[
q(0, "How do NSAIDs raise BP (standard-reference clarification)?", "They block renal prostaglandins, causing sodium and water retention", ["They stimulate alpha receptors", "They increase hepatic angiotensinogen", "They block bradykinin breakdown"], "Clarification: NSAIDs block renal prostaglandins → Na/water retention; they raise BP about 5 mmHg on average."),
q(0, "How does estrogen raise BP (standard-reference clarification)?", "It increases hepatic angiotensinogen production", ["It blocks renal prostaglandins", "It is a sympathomimetic", "It causes serotonin-mediated vasodilation"], "Clarification: estrogen increases hepatic angiotensinogen; triptans are 5-HT1B/1D agonists that vasoconstrict."),
q(1, "Which anticonvulsant is listed as a cause of drug-induced hypertension?", "Carbamazepine", ["Levetiracetam", "Gabapentin", "Lamotrigine"], "Other listed prescription causes: SNRIs, TCAs, carbamazepine, and metoclopramide."),
q(1, "Which GI medication is listed as raising BP?", "Metoclopramide", ["Omeprazole", "Ondansetron", "Loperamide"], "Metoclopramide is a listed cause of drug-induced HTN.")
],
[
q(0, "A patient with seasonal allergies takes pseudoephedrine daily and has a new BP of 142/90. What should you do before calling this primary hypertension?", "Stop the decongestant and recheck BP", ["Start lisinopril", "Order a renal angiogram", "Add a second decongestant"], "Review OTC and prescription drugs before labeling primary HTN; pseudoephedrine is a sympathomimetic that raises BP."),
q(0, "A 30-year-old on a high-dose estrogen OCP has a new BP of 138/88. What is the best approach?", "Consider OCP-induced HTN; discuss other contraception and recheck BP", ["Start a thiazide and continue the OCP", "Diagnose primary HTN", "Ignore it until BP exceeds 160/100"], "High-dose OCPs/estrogens are a listed cause of drug-induced HTN; ask about OCPs in every new diagnosis."),
q(1, "A patient's BP rose from 122/78 to 138/86 after starting venlafaxine for depression. What is the likely explanation?", "SNRI-induced hypertension", ["Primary hypertension unrelated to the drug", "White coat hypertension", "Rebound hypertension"], "SNRIs and tricyclic antidepressants are listed as psychiatric drug causes of HTN."),
q(1, "Before surgery for a pheochromocytoma, a resident gives propranolol alone first. Why is this dangerous?", "Blocking β receptors leaves α vasoconstriction unopposed, so BP can rise further", ["Propranolol is ineffective in adrenal tumors", "Propranolol causes hypokalemia", "Propranolol raises renin"], "Giving a β-blocker without an α-blocker first in pheochromocytoma or cocaine HTN leaves α vasoconstriction unopposed.")
]));

T.push(sec(P2, "14-substances", "14-substances",
"14. Alcohol, methamphetamine, cocaine, and St. John's wort",
"Objective 14 (Part II). Alcohol limits, illicit sympathomimetics, herbal products, and other listed substances.",
[
q(0, "What is the alcohol limit for women and lighter-weight persons?", "1 drink per day", ["2 drinks per day", "3 drinks per day", "No limit if taken with food"], "Limit: 2 drinks/day for men, 1 for women and lighter-weight persons."),
q(0, "Keeping alcohol within limits lowers systolic BP by about:", "2–4 mmHg", ["8–14 mmHg", "20–30 mmHg", "It does not lower BP"], "Alcohol moderation lowers SBP about 2–4 mmHg."),
q(1, "Besides cocaine and methamphetamine use, which related state is listed as raising BP?", "Cocaine withdrawal", ["Opioid intoxication", "Benzodiazepine use", "Marijuana withdrawal"], "Illicit sympathomimetics: cocaine and methamphetamine, and also cocaine withdrawal."),
q(2, "Why can St. John's wort lower the effect of a CCB (standard-reference clarification)?", "It induces CYP450 enzymes, lowering levels of co-prescribed drugs", ["It blocks calcium channels itself", "It causes hypokalemia", "It is a β-blocker"], "Clarification: St. John's wort has MAOI-like activity and induces CYP450, lowering levels of drugs such as some CCBs."),
q(2, "Which prescription stimulant is on the lecture's list of substances that raise BP?", "Methylphenidate", ["Metoprolol", "Metformin", "Methyldopa"], "Listed: nicotine and narcotic withdrawal, anabolic steroids, methylphenidate, phencyclidine, ketamine.")
],
[
q(0, "A 130-lb woman drinks two 5-oz glasses of wine every night. Her BP is 136/86. What should you advise?", "Cut back to 1 drink per day", ["Two glasses is within her limit", "Switch to beer, which does not affect BP", "Stop only if her BP exceeds 160/100"], "Women and lighter persons should limit to 1 drink/day (5 oz wine = 1 drink)."),
q(1, "A 28-year-old with unexplained new hypertension has a urine drug screen positive for amphetamines. What is the best interpretation?", "A sympathomimetic substance cause; address the drug use", ["Primary hypertension; start two drugs", "A false-positive to ignore", "Renal artery stenosis"], "Methamphetamine/amphetamines are illicit sympathomimetics; ask about illicit drugs when excluding secondary causes."),
q(2, "A 24-year-old bodybuilder has new hypertension. Which substance on the lecture's list should you ask about?", "Anabolic steroids", ["Whey protein", "Vitamin D", "Creatine"], "Anabolic steroids are on the lecture's list of substances that raise BP."),
q(2, "A patient on amlodipine starts St. John's wort for low mood, and her BP rises. What is the best explanation?", "St. John's wort can raise BP and lower amlodipine levels by inducing CYP450", ["Amlodipine causes depression", "St. John's wort is a diuretic", "This is white coat hypertension"], "St. John's wort is a listed BP-raising herbal; it induces CYP450 and lowers levels of drugs such as CCBs.")
]));

T.push(sec(P2, "15-history-physical", "15-history-physical",
"15. History and physical in the hypertensive patient",
"Objective 15 (Part II). Prior events, end-organ symptoms, history clues to secondary causes, and the exam.",
[
q(0, "Which brain finding can come from long-standing hypertension?", "Cerebral atrophy beyond what is expected for age, and dementia", ["Hydrocephalus", "Brain tumors", "Meningitis"], "Brain end-organ effects: headaches, cerebral atrophy beyond age, dementia."),
q(0, "Which kidney symptoms should you ask a hypertensive patient about?", "Oliguria, anuria, hematuria, and flank pain", ["Polyuria and thirst only", "Dysuria only", "Kidney symptoms are not part of the HTN history"], "Kidney: oliguria, anuria, hematuria, flank pain; CKD on labs."),
q(1, "Sweating episodes, labile HTN, headache, and palpitations suggest:", "Pheochromocytoma", ["Hypothyroidism", "OSA", "Renal artery stenosis"], "This classic history points to pheochromocytoma."),
q(2, "Cotton-wool spots and AV nicking on fundoscopy indicate:", "Hypertensive retinopathy", ["Diabetic macular edema only", "Glaucoma", "Cataract"], "Eye exam for HTN: cotton-wool spots, AV nicking, arteriolar narrowing, hemorrhages, exudates, papilledema."),
q(2, "Rales on lung exam in a hypertensive patient suggest:", "Heart failure", ["Coarctation", "PAD", "Stroke"], "Lungs: rales suggest heart failure; heart: heaves, displaced apical impulse, S4 suggest LVH.")
],
[
q(0, "A hypertensive smoker has calf pain when walking, and his feet are cool, pale, and hairless. Which end-organ damage is this?", "Peripheral arterial disease", ["Heart failure", "Hypertensive retinopathy", "Chronic kidney disease"], "Vessels: extremity pain, hair loss, pallor, and coolness point to PAD."),
q(1, "A hypertensive patient has an elevated creatinine, anemia, and an abdominal mass on exam. What does the history clue suggest?", "CKD or renal artery stenosis", ["Hyperthyroidism", "OSA", "Drug-induced HTN"], "Elevated creatinine, abdominal masses or bruits, and anemia suggest CKD or RAS."),
q(2, "Why does the hypertension exam include waist circumference along with height and weight?", "To assess obesity, a contributor to hypertension and CV risk", ["To size the BP cuff", "To screen for ascites", "To calculate MAP"], "Vitals include BP, height, weight, and waist circumference for staging and obesity."),
q(2, "A bruit is heard over the abdomen of a 66-year-old hypertensive smoker. What does it suggest?", "Arterial stenosis from atherosclerosis, such as renal artery stenosis", ["Coarctation of the aorta", "Normal bowel sounds", "Hypertensive retinopathy"], "Carotid, abdominal, or femoral bruits suggest stenosis/atherosclerosis.")
]));

T.push(sec(P2, "16-workup-risk", "16-workup-risk",
"16. Diagnostic work-up and risk stratification",
"Objective 16 (Part II). Initial labs and EKG, CV risk factors, and the PREVENT calculator.",
[
q(0, "In the initial hypertension work-up, the CBC is mainly checking the:", "Hematocrit", ["Platelet count", "White count", "Eosinophils"], "CBC → hematocrit; urinalysis → protein; electrolytes → CKD and hyperaldosteronism clues."),
q(0, "How long a fast does the lecture specify for the lipid profile?", "12 hours", ["2 hours", "24 hours", "No fasting"], "Fasting lipid profile with a 12-hour fast."),
q(0, "Which electrolytes and renal tests are in the initial panel?", "Sodium, potassium, creatinine (eGFR), and calcium", ["Magnesium and phosphate only", "Ammonia and lactate", "Amylase and lipase"], "Electrolytes: Na, K, creatinine (eGFR), and calcium."),
q(1, "At what ages does age itself count as a cardiovascular risk factor?", "Over 55 in men and over 65 in women", ["Over 40 in both", "Over 75 in both", "Over 65 in men and over 55 in women"], "Age: over 55 for men and over 65 for women."),
q(1, "What BMI defines obesity as a cardiovascular risk factor?", "30 or higher", ["25 or higher", "35 or higher", "40 or higher"], "Obesity is BMI ≥30.")
],
[
q(0, "A newly diagnosed hypertensive patient not on diuretics has a potassium of 3.1 on initial labs. Which secondary cause does this raise?", "Hyperaldosteronism", ["Hypothyroidism", "Coarctation", "OSA"], "Electrolytes in the initial work-up look for CKD and clues to hyperaldosteronism such as low K."),
q(1, "A 67-year-old woman with new HTN is a nonsmoker who walks daily. Her BMI is 31, LDL and HDL are normal, and her father had an MI at 50. Which are her CV risk factors?", "Age, obesity, and family history of premature CAD", ["Only her hypertension", "Physical inactivity and smoking", "Low HDL and diabetes"], "She is over 65, has BMI ≥30, and a male relative had CAD under 55."),
q(1, "Compared with 115/75, how much higher is cardiovascular risk at 155/95?", "About 4 times higher", ["About 2 times higher", "About 8 times higher", "No higher"], "CVD risk doubles with every 20/10 mmHg above 115/75: 135/85 doubles it and 155/95 doubles it again (4×).")
]));

/* ======================= Objectives 17–24 (Part III) ======================= */

T.push(sec(P3, "17-bp-targets", "17-bp-targets",
"17. BP targets and when to treat",
"Objective 17 (Part III). The below-130/80 goal, risk-based medication thresholds, reassessment, and when to withhold drugs.",
[
q(0, "What is the purpose of lowering blood pressure?", "To reduce future cardiovascular disease events", ["To relieve headaches", "To reach a normal number for its own sake", "To prevent white coat hypertension"], "The goal of lowering BP is to reduce future CVD events, so assess all risk factors and use a risk calculator (PREVENT)."),
q(1, "What is the plan for ELEVATED BP (120–129 with diastolic under 80)?", "Lifestyle change and reassess in 3–6 months", ["Start one drug and reassess in 1 month", "Start two drugs", "No change; reassess in 5 years"], "Elevated BP: therapeutic lifestyle change; reassess in 3–6 months."),
q(1, "What is the plan for LOW-RISK stage 1 hypertension (PREVENT under 7.5%, no CVD, diabetes, or CKD)?", "Lifestyle first, reassess in 3–6 months, add medication if not at goal", ["Start medication immediately", "No treatment is ever needed", "Start two drugs in a single pill"], "Low-risk stage 1: lifestyle for 3–6 months, then medication if still ≥130/80."),
q(1, "A patient on medication is at goal. How often should BP be reassessed?", "Every 3–6 months", ["Every week", "Every 2 years", "Only when symptoms occur"], "On medication and at goal: reassess every 3–6 months; if not at goal, check adherence and intensify."),
q(2, "Which is a listed reason to consider withholding medication for stage 1 HTN in a patient over 75?", "Limited life expectancy", ["Diabetes", "A family history of HTN", "Smoking"], "Over 75 with recurrent falls, dementia, extended-care residence, multiple comorbidities, orthostatic hypotension, or limited life expectancy.")
],
[
q(0, "A treated 66-year-old's average BP is 128/78. He asks whether he needs more medication. What is correct?", "He is at goal, which is below 130/80", ["He needs to reach below 120/80", "He needs to reach below 140/90 only", "He needs a second drug because he is over 65"], "The AHA/ACC goal for treated patients is below 130/80."),
q(1, "A 55-year-old had an ischemic stroke last year. Her confirmed BP is 132/82. What is recommended?", "Start medication with lifestyle change, since she has clinical CVD", ["Lifestyle only for 6 months", "No treatment until 140/90", "Withhold treatment after stroke"], "Existing clinical CVD (CHD, stroke, HF) means starting medication at ≥130/80 (secondary prevention)."),
q(1, "A 45-year-old with CKD stage 3 has a confirmed BP of 131/79. What is recommended?", "Start medication with lifestyle change", ["Lifestyle only; recheck in a year", "Nothing; the diastolic is under 80", "Refer for dialysis"], "Diabetes, CKD, or PREVENT ≥7.5% means medication at ≥130/80; systolic 131 qualifies."),
q(1, "A 60-year-old with no CVD, diabetes, or CKD has a PREVENT risk of 5% and a confirmed BP of 136/84. What is the plan?", "Lifestyle for 3–6 months, then medication if still 130/80 or higher", ["Start medication today", "Start two drugs today", "No follow-up is needed"], "Stage 1 with risk below 7.5%: lifestyle first, reassess in 3–6 months."),
q(2, "A healthy, active 78-year-old who lives independently has stage 1 HTN and no falls, dementia, or orthostasis. Should medication be withheld because of age?", "No; none of the withholding criteria apply, so treat as usual", ["Yes; everyone over 75 should go untreated", "Yes; only systolic over 180 is treated after 75", "No; she needs three drugs because of her age"], "Withholding is considered over 75 only with specific conditions (falls, dementia, extended care, comorbidities, orthostasis, limited life expectancy).")
]));

T.push(sec(P3, "18-lifestyle", "18-lifestyle",
"18. Lifestyle management and patient education",
"Objective 18 (Part III). Expected SBP reductions, DASH details, alcohol, tobacco, sodium, and motivational interviewing.",
[
q(0, "Aerobic exercise for at least 30 minutes most days lowers systolic BP by about:", "4–9 mmHg", ["8–14 mmHg", "2–4 mmHg", "20–30 mmHg"], "Exercise 4–9, DASH 8–14, weight loss 5–20 per 10 kg, sodium 2–8, alcohol moderation 2–4."),
q(0, "Reducing sodium lowers systolic BP by about:", "2–8 mmHg", ["8–14 mmHg", "5–20 mmHg", "No measurable amount"], "Reduced sodium (target 1500–2000 mg/day) lowers SBP about 2–8 mmHg."),
q(0, "What BMI range is the lecture's weight goal?", "18.5–24.9", ["25–29.9", "Under 18.5", "30–34.9"], "Weight loss: maintain BMI 18.5–24.9; 5–20 mmHg SBP reduction per 10 kg lost."),
q(1, "One standard drink of 80-proof liquor is:", "1.5 oz", ["5 oz", "3 oz", "12 oz"], "1 drink = 12 oz beer, 5 oz wine, or 1.5 oz 80-proof liquor."),
q(1, "What does the lecture say about cutting down on smoking rather than quitting?", "Cutting down is better than continuing", ["Cutting down has no benefit", "Cutting down is worse than continuing", "Vaping is proven safe as a replacement"], "Tobacco: cessation; cutting down beats continuing; NRT or non-nicotine adjuncts; vaping effects uncertain."),
q(2, "Which is a sample motivational interviewing question from the lecture?", "What goals can we set together today?", ["Why haven't you lost weight yet?", "Do you want to have a stroke?", "Will you promise to take your pills?"], "MI questions: How does HTN affect you? What happens if uncontrolled? What changes can you make? How can I support you? What goals can we set together?")
],
[
q(0, "An overweight patient loses 10 kg. About how much should his systolic BP fall?", "5–20 mmHg", ["1–2 mmHg", "30–40 mmHg", "It will not change"], "Weight loss lowers SBP about 5–20 mmHg per 10 kg lost."),
q(1, "A large man drinks three 12-oz beers every night. What should you advise?", "Cut down to no more than 2 drinks per day", ["Three beers is within his limit", "Switch to liquor, which has less alcohol", "Alcohol does not affect BP"], "Max 2 drinks/day for larger men and 1 for women or smaller men; 12 oz beer = 1 drink."),
q(1, "A patient starting the DASH diet asks which fats to cut back. Which answer fits the lecture?", "Fatty meats, full-fat dairy, and coconut and palm oils", ["Vegetable oils and nuts", "Fish and beans", "Low-fat dairy"], "DASH limits saturated fat (fatty meats, full-fat dairy, coconut/palm oils), sugar-sweetened drinks, and sweets."),
q(2, "A patient says he knows he should exercise but hates gyms. Which response best follows motivational interviewing?", "Ask what activity he could realistically do and how you can support him", ["Tell him he must join a gym", "Skip lifestyle and add a drug", "Tell him exercise does not affect BP"], "MI uses open questions about realistic, attainable changes and how the clinician can support them.")
]));

T.push(sec(P3, "19-chronic-care", "19-chronic-care",
"19. Chronic care visits and follow-up time frames",
"Objective 19 (Part III). What to review at each visit and how soon to bring patients back.",
[
q(0, "Which ENT-area symptoms are reviewed at a chronic hypertension visit?", "Headache, visual change, epistaxis, dizziness, and tinnitus", ["Hoarseness only", "Sore throat and fever", "Hearing loss from loud noise only"], "Symptom review: headache, visual change, epistaxis, dizziness, tinnitus; plus CV symptoms."),
q(0, "At a chronic care visit, what should the home BP cuff be compared with?", "An office reading", ["Another family member's cuff", "A wrist cuff", "The patient's memory of past readings"], "Compare the home cuff with the office reading and review the home log's average, highest, and lowest values."),
q(1, "Which patient should return in 2–4 weeks?", "Uncontrolled and noncompliant", ["Slightly uncontrolled and compliant", "Controlled and compliant with risk factors", "Chronically well controlled and otherwise healthy"], "Uncontrolled/noncompliant 2–4 weeks; slightly uncontrolled/compliant 3 months; controlled with risk factors 3–6 months; well controlled and healthy 6 months.")
],
[
q(0, "A patient with well-controlled HTN has not had labs in 2 years. Which labs fit the chronic care visit?", "Chemistry panel, A1c, and lipid panel", ["Blood cultures", "Urine drug screen only", "No labs are needed once BP is controlled"], "Chronic care labs: chemistry panel, A1c, and lipid panel, with frequency depending on chronicity and control."),
q(0, "At a chronic HTN visit, a patient on amlodipine mentions new ankle swelling. Which part of the visit does this belong to?", "Adherence and adverse-effect review", ["Lifestyle goal setting", "Diagnostic criteria", "Risk calculation"], "Each chronic care visit checks compliance and monitors adverse effects of the regimen."),
q(1, "A healthy 50-year-old has been well controlled and adherent for 5 years. When should she return?", "6 months", ["2–4 weeks", "3 months", "2 years"], "Chronically well controlled, compliant, and otherwise healthy patients return in 6 months.")
]));

T.push(sec(P3, "20-treatment-principles", "20-treatment-principles",
"20. General principles of treatment and compelling indications",
"Objective 20 (Part III). First-line and later-line classes, mono vs combination therapy, compelling indications, and pitfalls.",
[
q(0, "Which set is the “A-C-T” first-line group?", "ACEI/ARB, CCB, and thiazide-type diuretic", ["Alpha-blocker, clonidine, and thiazide", "ACEI, carvedilol, and torsemide", "Aldosterone antagonist, CCB, and terazosin"], "First line = A-C-T: ACEI/ARB, CCB, thiazide."),
q(0, "What is the first step when choosing an antihypertensive?", "Stage the BP and calculate the patient's risk", ["Choose the cheapest pill", "Start a β-blocker", "Order a renal ultrasound"], "Steps: stage BP and calculate risk → look for compelling indications → consider other factors."),
q(1, "For stage 1 hypertension, how many drugs are usually enough to reach below 130/80?", "One", ["Two", "Three", "Four"], "Stage 1: a single agent is usually enough; stage 2: strongly consider two low-dose drugs in a fixed-dose combination."),
q(2, "What makes a condition a compelling indication?", "A high-risk condition linked to HTN where a specific class has evidence-based survival benefit", ["Any patient preference for a drug", "A drug that is the cheapest", "Any side effect from a prior drug"], "Compelling indications are HTN-related high-risk conditions with evidence-based survival benefit for a class; they trump other considerations."),
q(2, "Which regimen does the lecture list for HFrEF?", "ACEI/ARB + β-blocker + aldosterone antagonist + diuretic", ["Non-DHP CCB + thiazide", "Clonidine + hydralazine only", "α-blocker + loop diuretic"], "HFrEF: ACEI/ARB, β-blocker, aldosterone antagonist, and diuretic (aim for at least 2–3); avoid non-DHP CCBs."),
q(3, "Which classes are preferred in patients over 60?", "Thiazide, ACEI, or ARB", ["β-blocker or clonidine", "α-blocker or hydralazine", "Loop diuretic or minoxidil"], "Over 60: thiazide, ACEI, or ARB; start low with a single agent and titrate."),
q(3, "Which classes are frequently used and safe in advanced CKD/ESRD?", "CCBs, β-blockers, direct vasodilators, and α2 agonists", ["ACEI plus ARB together", "Thiazides at high dose", "Potassium-sparing diuretics"], "Advanced CKD/ESRD: CCBs, β-blockers, direct vasodilators, and α2 agonists are frequently used.")
],
[
q(0, "A 52-year-old with stage 1 HTN, high risk, and no compelling indications needs a first drug. Which is appropriate?", "Chlorthalidone", ["Metoprolol", "Doxazosin", "Clonidine"], "First line without compelling indications: ACEI/ARB, CCB, or thiazide. The others are later-line."),
q(1, "A 48-year-old with BP 158/98 asks why you prescribed two drugs in one pill. Which benefit is correct?", "It lowers BP more and faster with fewer dose-dependent side effects", ["It allows him to skip lifestyle change", "It doubles every side effect", "It is only for patients with heart failure"], "Combination therapy lowers BP more, reaches target faster, has fewer dose-dependent effects, and improves adherence."),
q(2, "A patient 2 months after an MI takes only lisinopril for BP. What should be added for the compelling indication?", "A β-blocker", ["Losartan", "Doxazosin", "Hydralazine"], "Post-MI compelling indication: β-blocker + ACEI/ARB (both)."),
q(2, "A diabetic on a maximal ACE inhibitor is still above goal. What is the next class for this compelling indication?", "A DHP-CCB or thiazide", ["An ARB", "A non-DHP CCB only", "An α-blocker"], "Diabetes: ACEI/ARB first, then DHP-CCB or thiazide. Never combine ACEI + ARB."),
q(3, "A 70-year-old with gout needs a first antihypertensive. Which class should be avoided?", "Thiazide diuretic", ["ACE inhibitor", "ARB", "DHP-CCB"], "Avoid thiazides with gout, urinary incontinence, balance issues, SSRI therapy, or hyponatremia."),
q(3, "A patient on dialysis needs better BP control. Which class is frequently used and safe here?", "A calcium channel blocker", ["A thiazide diuretic", "An ACE inhibitor plus an ARB", "Triamterene"], "In advanced CKD/ESRD, CCBs, β-blockers, direct vasodilators, and α2 agonists are frequently used.")
]));

T.push(sec(P3, "21-race-pregnancy", "21-race-pregnancy",
"21. Drug choice by race and in pregnancy",
"Objective 21 (Part III). Most and least effective drugs by race, compelling indications over race, and pregnancy-safe drugs.",
[
q(0, "For an elderly Black patient with isolated systolic hypertension, which drug is first?", "A CCB or thiazide", ["An ACE inhibitor", "A β-blocker", "An α-blocker"], "Black patients: CCB or thiazide first at any age, including isolated systolic HTN."),
q(0, "Why are β-blockers not first choice in Black patients without a compelling indication?", "They are less effective for BP in Black patients", ["They cause angioedema", "They are unsafe in all Black patients", "They raise potassium"], "ACEIs, ARBs, and β-blockers are less effective in Black patients; compelling indications still trump race."),
q(1, "Which pregnancy-safe drug can be given orally or IV?", "Labetalol", ["Lisinopril", "Losartan", "Spironolactone"], "Labetalol has lots of pregnancy experience and can be given PO or IV."),
q(1, "Which classes should women of childbearing potential avoid?", "ACE inhibitors and ARBs", ["DHP-CCBs", "Labetalol", "Methyldopa"], "Avoid ACEI/ARB in women of childbearing potential because of teratogenicity (fetal renal agenesis).")
],
[
q(0, "A 66-year-old Black woman has isolated systolic HTN and no comorbidities. Which first drug fits?", "Amlodipine", ["Lisinopril", "Metoprolol", "Doxazosin"], "In Black patients, CCBs and thiazides are most effective, including for isolated systolic HTN."),
q(0, "A 55-year-old Black man has HTN and HFrEF. A student says to avoid β-blockers because of race. What is correct?", "He still needs a β-blocker and ACEI/ARB; compelling indications trump race", ["Use only amlodipine", "Use only a thiazide", "Avoid all RAAS blockers"], "Compelling indications trump race: prior MI, HF, or LV dysfunction still get a β-blocker and ACEI/ARB."),
q(1, "A 26-year-old with HTN plans to become pregnant next year. Which medication is appropriate?", "Labetalol", ["Lisinopril", "Valsartan", "Enalapril"], "Avoid ACEI/ARB with childbearing potential; labetalol and methyldopa are safe, and DHP-CCBs are listed as okay."),
q(1, "A 40-year-old Asian man has HTN and type 2 diabetes. Which first class fits both his race and his compelling indication?", "An ACE inhibitor or ARB", ["A β-blocker", "An α-blocker", "A loop diuretic"], "ACEIs/ARBs work best in white and Asian patients and are first for diabetes.")
]));

T.push(sec(P3, "22a-thiazide-diuretics", "22a-thiazide-diuretics",
"22a. Thiazide diuretics",
"Objective 22 (Part III). Agents, mechanism, outcome data, timing, and metabolic adverse effects.",
[
q(0, "Where do thiazide diuretics act?", "The distal tubule", ["The thick ascending limb", "The proximal tubule", "The collecting duct aldosterone receptor"], "Thiazides increase renal sodium excretion in the distal tubule, with some vasodilator effect."),
q(0, "How much more does chlorthalidone lower BP than HCTZ?", "1.5–2 times more", ["The same", "Half as much", "10 times more"], "Chlorthalidone lowers BP 1.5–2× more than HCTZ and has better outcome data."),
q(1, "When does thiazide-induced hypercalcemia usually appear?", "In the first 2 weeks", ["After 5 years", "Only after stopping the drug", "Never"], "Hypercalcemia usually occurs in the first 2 weeks."),
q(1, "Which electrolyte is LOWERED by thiazides?", "Magnesium", ["Calcium", "Uric acid", "Glucose"], "Thiazides raise glucose, uric acid, and calcium; they lower Na, K, and Mg.")
],
[
q(0, "A patient on chlorthalidone alone remains above goal. Which partner is best?", "An ACEI or ARB", ["A second thiazide", "A loop diuretic", "An α-blocker"], "Thiazides are relatively weak alone and are best combined with an ACEI/ARB (or CCB)."),
q(1, "A patient takes HCTZ at bedtime and wakes several times to urinate. What should you advise?", "Take it in the morning", ["Take it with dinner instead", "Stop all diuretics", "Double the dose"], "Give thiazides in the morning to avoid nocturnal diuresis."),
q(1, "Five days after starting chlorthalidone, a 79-year-old is weak and confused with sodium 128. What happened?", "Thiazide-induced hyponatremia, which the 5–7 day chemistry check is meant to catch", ["Hypercalcemia from the drug", "A stroke unrelated to the drug", "Expected and harmless"], "Check a chemistry panel within 5–7 days of starting or increasing a thiazide for hyponatremia and hypokalemia.")
]));

T.push(sec(P3, "22b-loop-diuretics", "22b-loop-diuretics",
"22b. Loop diuretics",
"Objective 22 (Part III). Role, mechanism, agents and equivalence, timing, potassium, and adverse effects.",
[
q(0, "Chemically, most loop diuretics are:", "Sulfonamide derivatives", ["Steroids", "Peptides", "Calcium channel blockers"], "Loops block Na reabsorption in the thick ascending limb and are sulfonamide derivatives (except ethacrynic acid)."),
q(0, "Furosemide 40 mg is about equal to how much torsemide?", "20 mg", ["1 mg", "40 mg", "80 mg"], "Furosemide 40 mg = bumetanide 1 mg = torsemide 20 mg."),
q(1, "About how much potassium is given with each 40 mg of furosemide in a healthy kidney?", "About 20 mEq", ["About 2 mEq", "About 100 mEq", "None; loops raise potassium"], "Loops are usually given with about 20 mEq K per 40 mg furosemide, adjusted by chemistry panel."),
q(1, "Which rare kidney reaction is listed for loop diuretics?", "Acute interstitial nephritis", ["Renal artery stenosis", "Polycystic kidney disease", "Kidney stones from crystals"], "Hypersensitivity: rash and, rarely, acute interstitial nephritis.")
],
[
q(0, "A patient takes furosemide for edema from CKD and also has HTN. How should the loop be treated when you plan her BP regimen?", "Count it in the regimen, because loops do lower BP", ["Ignore it; loops do not affect BP", "Stop it and start a thiazide", "Double it to replace other BP drugs"], "Loops are not usually chosen for HTN but they lower BP, so count them in the regimen."),
q(0, "A patient on furosemide 80 mg PO daily is switched to bumetanide. What is the equivalent dose?", "2 mg", ["1 mg", "40 mg", "80 mg"], "Furosemide 40 mg = bumetanide 1 mg, so 80 mg = 2 mg."),
q(1, "A patient with CKD stage 4 needs much more furosemide than usual for the same effect. Why?", "Reduced GFR requires higher loop doses", ["She is allergic to furosemide", "Loops work better in CKD", "Furosemide is inactivated by potassium"], "Higher doses are needed with reduced GFR (CKD/AKI) or if the patient is accustomed to the drug."),
q(1, "After a week of aggressive furosemide, a patient's bicarbonate is 34. What is the explanation?", "Contraction alkalosis from overdiuresis", ["Metabolic acidosis from the drug", "Ototoxicity", "Hyperkalemia"], "Loops can cause overdiuresis, hypovolemia, and contraction alkalosis.")
]));

T.push(sec(P3, "22c-potassium-sparing", "22c-potassium-sparing",
"22c. Potassium-sparing diuretics (ENaC blockers)",
"Objective 22 (Part III). Triamterene and amiloride: mechanism, hyperkalemia, and crystalluria.",
[
q(0, "Which combination products contain triamterene with HCTZ?", "Dyazide and Maxzide", ["Lasix and Bumex", "Aldactone and Inspra", "Coreg and Trandate"], "Triamterene is combined with HCTZ as Dyazide/Maxzide."),
q(0, "Which patients are at highest risk of hyperkalemia on triamterene or amiloride?", "Diabetics, CKD patients, and those on ACEIs or ARBs", ["Young athletes", "Patients on loop diuretics only", "Patients with hypokalemia"], "Hyperkalemia risk: diabetics, CKD, and patients on ACEI/ARB.")
],
[
q(0, "A patient on triamterene-HCTZ develops a kidney stone and AKI. What is the best change?", "Switch to amiloride, which is better tolerated and less nephrotoxic", ["Increase triamterene", "Add spironolactone", "Add a potassium supplement"], "Triamterene causes crystalluria and casts → stones and AKI; amiloride is better tolerated."),
q(0, "A patient on HCTZ keeps becoming hypokalemic. Which add-on directly blocks distal sodium channels and conserves potassium?", "Amiloride", ["Furosemide", "Chlorthalidone", "Hydralazine"], "Triamterene and amiloride directly block distal tubule sodium channels → weak diuresis with K conservation.")
]));

T.push(sec(P3, "22d-aldosterone-antagonists", "22d-aldosterone-antagonists",
"22d. Aldosterone antagonists",
"Objective 22 (Part III). Spironolactone and eplerenone: mechanism, uses, hyperkalemia, and endocrine effects.",
[
q(0, "What happens to Na-K pumps and serum potassium on spironolactone?", "Fewer Na-K pumps, so serum K rises and urinary Na loss increases", ["More Na-K pumps, so K falls", "No effect on potassium", "Pumps are blocked in the thick ascending limb"], "Mineralocorticoid receptor blockade → fewer Na-K pumps → ↑ serum K and ↑ urinary Na loss."),
q(0, "Spironolactone is a weak diuretic. What is it mainly valued for?", "Blocking aldosterone's effects on the kidney, vessels, and heart", ["Its strong diuretic effect", "Lowering heart rate", "Treating gout"], "It is a weak diuretic valued for blocking aldosterone effects; compelling indication in HFrEF."),
q(1, "Besides gynecomastia, which endocrine effect can spironolactone cause in women?", "Irregular menses", ["Hirsutism", "Hypothyroidism", "Hypoglycemia"], "Spironolactone binds estrogen/progesterone receptors → gynecomastia, irregular menses, impotence.")
],
[
q(0, "A patient with cirrhosis and ascites also has hypertension. Which diuretic is the initial choice?", "Spironolactone", ["Chlorthalidone", "Triamterene", "Ethacrynic acid"], "Aldosterone antagonists are the initial diuretic of choice for ascites in chronic liver disease."),
q(1, "A patient on lisinopril and a potassium supplement starts spironolactone. A week later K+ is 6.0. What is the best step?", "Stop the potassium supplement and adjust therapy with close chemistry monitoring", ["Add another ACE inhibitor", "Ignore it; this is expected", "Add triamterene"], "Hyperkalemia risk rises with ACEI, ARB, or K supplements; monitor chemistry closely.")
]));

T.push(sec(P3, "22e-ace-inhibitors", "22e-ace-inhibitors",
"22e. ACE inhibitors",
"Objective 22 (Part III). Mechanism and uses, renal effects and monitoring, cough, hyperkalemia, angioedema, and pregnancy.",
[
q(0, "Besides lowering BP, what can ACE inhibitors do to LV remodeling?", "Halt or regress it", ["Speed it up", "Cause it", "Have no effect"], "ACEIs reduce morbidity/mortality in HFrEF and post-MI and may halt or regress LV remodeling."),
q(1, "Which patients can develop AKI when an ACE inhibitor blocks the RAAS?", "Those whose GFR depends on RAAS, such as bilateral RAS or hypovolemia", ["Patients with proteinuric CKD", "Patients with normal kidneys and good intake", "Patients on low-dose aspirin only"], "Patients relying on constant RAAS activation to maintain filtration can develop AKI when it is blocked."),
q(2, "When does ACE inhibitor cough usually begin?", "1 week to 6 months after starting, though it can occur any time", ["Only after 10 years", "Within the first hour", "Only after stopping the drug"], "Dry cough begins 1 week–6 months after starting, is more common in women, and resolves when stopped."),
q(2, "About half of ACE inhibitor angioedema occurs:", "Within the first week", ["After 5 years", "Only at high doses", "Only in children"], "50% of angioedema occurs in the first week; it is more common in Black and Asian patients."),
q(2, "Which treatment is listed for ACE inhibitor angioedema?", "Diphenhydramine, methylprednisolone, famotidine, and airway protection", ["Increasing the ACEI dose", "Adding an ARB", "Nitroglycerin"], "Treat with diphenhydramine, methylprednisolone, famotidine, and airway protection; never prescribe another ACEI.")
],
[
q(0, "A 64-year-old with an EF of 35% after an MI needs a RAAS drug. Why is an ACE inhibitor a good choice?", "It reduces morbidity and mortality in HFrEF and post-MI", ["It raises heart rate", "It is the only drug that lowers potassium", "It is safe in pregnancy"], "Uses beyond HTN: CKD with proteinuria, HFrEF, and post-MI, where ACEIs reduce morbidity and mortality."),
q(1, "One week after starting lisinopril, creatinine rises from 1.2 to 1.7. What should you do?", "Stop the ACE inhibitor; the rise is more than 30%", ["Continue; any rise is expected", "Double the dose", "Add an ARB"], "A small temporary rise is expected, but stop for a creatinine rise above 30% (1.2 → 1.7 is about 42%) or persistent hyperkalemia."),
q(1, "A patient on lisinopril has the flu with vomiting and cannot keep fluids down for 2 days. What is the concern?", "Volume depletion while on an ACEI can cause AKI", ["Lisinopril causes vomiting", "Angioedema is likely", "His BP will rise dangerously"], "ACEIs can worsen kidney function during illness with hypovolemia (poor intake, N/V/D, GI bleed, overdiuresis)."),
q(2, "A Black patient had lip and tongue swelling on enalapril last year. He now needs a RAAS blocker. What is correct?", "Never give another ACEI; an ARB can be used with caution and education", ["Try a different ACE inhibitor", "Rechallenge enalapril at a lower dose", "RAAS blockers are never allowed again"], "After ACEI angioedema, never prescribe another ACEI; ARBs can be used with caution and education.")
]));

T.push(sec(P3, "22f-arbs", "22f-arbs",
"22f. Angiotensin II receptor blockers (ARBs)",
"Objective 22 (Part III). Agents, mechanism, advantages over ACEIs, adverse effects, and contraindications.",
[
q(0, "Clinically used ARBs are selective for which receptor (standard-reference clarification)?", "AT1", ["AT2", "β1", "α1"], "The slide says AT1 and AT2; clarification: clinically used ARBs are selective for AT1."),
q(1, "Can an ARB be used after ACE inhibitor angioedema?", "Yes, with caution and patient education", ["Never", "Only together with the ACEI", "Only in pregnancy"], "ARBs can be used after ACEI angioedema with caution and education, and trialed after ACEI cough.")
],
[
q(0, "A patient with diabetes and proteinuric CKD develops a dry cough on lisinopril. What is the best change?", "Switch to an ARB, which shares the same compelling indications", ["Stop RAAS blockade entirely", "Add losartan to the lisinopril", "Switch to a β-blocker"], "ARBs have the same compelling indications as ACEIs with less cough; never combine ACEI + ARB."),
q(1, "A 29-year-old on valsartan tells you she is planning a pregnancy. What should you do?", "Switch her off the ARB before conception; ARBs cause fetal renal agenesis", ["Continue valsartan; ARBs are safe in pregnancy", "Add an ACE inhibitor instead", "Wait until the third trimester to change"], "ARBs are contraindicated in pregnancy (renal agenesis); avoid them with childbearing potential.")
]));

T.push(sec(P3, "22g-calcium-channel-blockers", "22g-calcium-channel-blockers",
"22g. Dihydropyridine and non-dihydropyridine CCBs",
"Objective 22 (Part III). Mechanism, DHP vs non-DHP, and the adverse effects and contraindications of each.",
[
q(0, "How do non-dihydropyridine CCBs act on the heart?", "Negative inotrope and negative chronotrope", ["Positive inotrope", "No cardiac effect", "They only dilate veins"], "Non-DHPs decrease contractility and slow SA/AV conduction; DHPs act mainly on peripheral vessels."),
q(1, "What share of patients get flushing, dizziness, or headache on a DHP CCB?", "10–20%", ["Less than 1%", "50–60%", "Everyone"], "Flushing, lightheadedness, dizziness, and headache occur in 10–20%."),
q(1, "What can reduce DHP-induced ankle edema?", "Adding a RAAS blocker", ["Adding a loop diuretic", "Increasing the DHP dose", "Adding a second DHP"], "DHP edema is from vascular permeability, not volume, so diuretics don't help; a RAAS blocker lessens it."),
q(2, "Which non-DHP CCB causes more bradycardia and AV block?", "Verapamil", ["Diltiazem", "Amlodipine", "Nifedipine"], "Bradycardia and AV block: verapamil more than diltiazem."),
q(2, "In HFrEF, when may a non-DHP CCB be resumed after acute decompensation?", "After about 24 hours of diuresis once decompensation is addressed", ["Immediately during decompensation", "Never under any circumstance", "Only during pulmonary edema"], "Do not use non-DHPs in acutely decompensated HFrEF; they may be resumed after ~24 h of diuresis.")
],
[
q(0, "A Black patient with HTN has a resting heart rate of 54. Which CCB fits best?", "Amlodipine, which is heart-rate neutral", ["Verapamil", "Diltiazem", "No CCB is appropriate"], "DHPs are HR-neutral with negligible AV-node effect; CCBs are first line in Black patients."),
q(1, "A patient given short-acting nifedipine has palpitations and HR 118 as his BP falls quickly. What explains this?", "Baroreceptor-mediated reflex tachycardia", ["Heart block", "Hyperkalemia", "Angioedema"], "An abrupt BP fall with short-acting DHPs triggers baroreceptor-mediated reflex tachycardia."),
q(2, "An 80-year-old on verapamil complains of severe constipation. What is the best change?", "Switch to a different CCB, since constipation is especially common with verapamil", ["Add a second dose of verapamil", "Add an aldosterone antagonist", "Continue; this is unrelated"], "Constipation is especially common with verapamil (about 25%)."),
q(2, "A patient with HTN has second-degree AV block. Which class must be avoided?", "Non-DHP CCBs (verapamil, diltiazem)", ["DHP CCBs", "ACE inhibitors", "Thiazides"], "Avoid non-DHP CCBs in sick sinus syndrome and 2nd/3rd-degree AV block.")
]));

T.push(sec(P3, "22h-beta-blockers", "22h-beta-blockers",
"22h. Beta-blockers",
"Objective 22 (Part III). Receptors and types, indications, race and age, adverse effects, diabetes, and withdrawal.",
[
q(0, "What does β2 stimulation in the pancreas do?", "Promotes insulin secretion", ["Raises renin", "Slows heart rate", "Causes bronchoconstriction"], "β2 effects: bronchodilation, vasodilation, insulin secretion, and glycogenolysis."),
q(0, "Which β-blocker is cardioselective?", "Bisoprolol", ["Propranolol", "Nadolol", "Timolol"], "Cardioselective: bisoprolol, metoprolol, atenolol. Nonselective: nadolol, propranolol, timolol."),
q(0, "In whom is acebutolol (ISA) contraindicated?", "After MI or in high-risk patients", ["Patients with bradycardia", "Patients with hypertension", "Patients with anxiety"], "ISA agents do not lower resting HR or CO, are less cardioprotective, and are contraindicated post-MI/high risk."),
q(1, "Below what ejection fraction does LV dysfunction become a β-blocker indication?", "Below 50%", ["Below 20% only", "Below 70%", "Any EF in a diabetic"], "Indications include compensated HFrEF or any LV dysfunction (EF below 50%)."),
q(1, "Which types of MI make β-blockers first line?", "Both STEMI and NSTEMI", ["STEMI only", "NSTEMI only", "Neither"], "Post-MI (STEMI or NSTEMI): β-blockers are first line."),
q(2, "Over what period should a β-blocker be tapered?", "1–2 weeks", ["1 day", "3–6 months", "It can always be stopped abruptly"], "Abrupt stop risks rebound HTN, angina, and MI; taper over 1–2 weeks.")
],
[
q(0, "A patient keeps missing the evening dose of metoprolol tartrate. Which change improves adherence?", "Switch to metoprolol succinate once daily", ["Switch to acebutolol", "Add a second evening dose", "Switch to propranolol"], "Metoprolol succinate is dosed once daily; tartrate is twice daily."),
q(1, "A healthy 50-year-old with stage 1 HTN and no cardiac history asks for metoprolol. What is the concern?", "β-blockers are not first line without a compelling indication and have not been shown to reduce stroke or mortality from HTN", ["Metoprolol is unsafe for everyone over 40", "Metoprolol raises BP", "Metoprolol is first line for everyone"], "β-blockers are not first line for HTN unless there is a compelling cardiac indication."),
q(2, "A hypertensive diabetic with no heart disease takes atenolol, and her A1c has risen. Why is a β-blocker a poor choice here?", "β-blockers reduce insulin release and are not recommended for HTN in diabetics without a compelling indication", ["β-blockers cause hypokalemia", "β-blockers raise uric acid", "Atenolol is a sulfa drug"], "β-blockers reduce insulin release and mask hypoglycemia; avoid in diabetics without a compelling indication."),
q(2, "A patient on metoprolol develops HR 44 and second-degree heart block. What is the best step?", "Stop the β-blocker", ["Double the dose", "Add verapamil", "Add digoxin"], "Stop the β-blocker if a bradyarrhythmia or heart block develops.")
]));

T.push(sec(P3, "22i-mixed-alpha-beta", "22i-mixed-alpha-beta",
"22i. Mixed alpha-1 and beta-blockers",
"Objective 22 (Part III). Carvedilol and labetalol: mechanism, uses, and orthostasis.",
[
q(0, "Compared with a straight β-blocker, how does carvedilol affect glucose?", "It has less effect on glucose", ["It causes more hypoglycemia", "It causes diabetes", "It lowers A1c dramatically"], "Carvedilol has a mortality benefit in HFrEF and less effect on glucose than a straight β-blocker."),
q(0, "By which routes can labetalol be given?", "Oral and IV", ["IV only", "Oral only", "Transdermal patch"], "Labetalol is oral for BP and IV as needed; it is safe in pregnancy.")
],
[
q(0, "A patient with HFrEF and HTN needs a β-blocker with proven mortality benefit. Which mixed agent fits?", "Carvedilol", ["Labetalol", "Acebutolol", "Propranolol"], "Carvedilol has mortality benefit in HFrEF/systolic dysfunction and is frequently used for BP in HFrEF."),
q(0, "A pregnant patient with chronic HTN needs an outpatient drug she can take by mouth. Which mixed α/β-blocker fits?", "Labetalol", ["Carvedilol", "Atenolol", "Lisinopril"], "Labetalol is safe in pregnancy and available orally and IV.")
]));

T.push(sec(P3, "22j-alpha-1-blockers", "22j-alpha-1-blockers",
"22j. Alpha-1 blockers",
"Objective 22 (Part III). Terazosin, doxazosin, prazosin: mechanism, role, dosing, and adverse effects.",
[
q(0, "Which vessels do α1 blockers dilate?", "Both veins and arteries", ["Arteries only", "Veins only", "Neither; they act only on the prostate"], "α1 blockade vasodilates veins and arteries and relaxes prostate α1 receptors."),
q(1, "When does the first-dose phenomenon occur?", "1–3 hours after the first dose", ["After a week", "Only after stopping the drug", "Immediately on swallowing"], "First-dose phenomenon: dizziness, faintness, palpitations, syncope 1–3 hours after the first dose.")
],
[
q(0, "A man with no BPH has taken doxazosin alone for his HTN for a year. What is the issue?", "α1 blockers are not appropriate monotherapy for HTN; switch to a first-line class", ["Doxazosin is the ideal first-line drug", "He should add prazosin", "It is fine because he has no BPH"], "α1 blockers are not appropriate monotherapy for HTN; they are useful when HTN and BPH coexist."),
q(1, "A patient on prazosin develops ankle edema. What is the caution before adding a diuretic?", "It may worsen orthostatic hypotension", ["It will cause hyperkalemia", "It will cause cough", "It is contraindicated with α-blockers"], "Edema on α1 blockers may be treated with a diuretic, but watch for worse orthostasis.")
]));

T.push(sec(P3, "22k-central-alpha-2-agonists", "22k-central-alpha-2-agonists",
"22k. Centrally acting alpha-2 agonists",
"Objective 22 (Part III). Clonidine, methyldopa, guanfacine: mechanism, uses, and adverse effects.",
[
q(0, "Besides the brain, where does α2 stimulation further lower sympathetic tone?", "Peripheral presynaptic α2 receptors", ["Renal juxtaglomerular cells", "The adrenal cortex", "Bronchial smooth muscle"], "Central α2 stimulation ↓ sympathetic outflow and ↑ vagal tone; peripheral presynaptic α2 stimulation further ↓ sympathetic tone."),
q(1, "Which listed adverse effect of central α2 agonists causes edema?", "Sodium and water retention", ["Hypokalemia", "Angioedema", "Increased capillary permeability from DHP action"], "Central α2 agonists cause sodium/water retention (edema), plus CNS and anticholinergic-like effects.")
],
[
q(0, "A patient started on clonidine reports dry mouth, constipation, and drowsiness. What do you tell him?", "These are expected clonidine side effects", ["These suggest clonidine overdose", "These mean he is allergic", "These are signs of rebound hypertension"], "Clonidine causes dizziness, drowsiness, fatigue, and anticholinergic-like effects (dry mouth, constipation, flushing)."),
q(1, "A patient on oral clonidine TID will be NPO for 2 days after surgery. What is the main concern?", "Abruptly missing clonidine can cause rebound hypertension", ["Clonidine will cause hypoglycemia", "Clonidine causes angioedema after surgery", "There is no concern"], "Rebound HTN after abrupt clonidine discontinuation is a significant risk; plan around it (for example, the patch).")
]));

T.push(sec(P3, "22l-direct-vasodilators", "22l-direct-vasodilators",
"22l. Direct arterial vasodilators",
"Objective 22 (Part III). Hydralazine and minoxidil: mechanism, use, and adverse effects.",
[
q(0, "How much venous dilation do direct arterial vasodilators cause?", "Little or none", ["Mostly venous dilation", "Equal venous and arterial dilation", "They constrict veins"], "Hydralazine and minoxidil directly relax arterial smooth muscle with little or no venous dilation."),
q(1, "Why are direct vasodilators used with caution in CAD?", "They can cause angina through vascular steal and reflex tachycardia", ["They cause bradycardia", "They raise LDL", "They block coronary β receptors"], "Adverse effects include reflex tachycardia and angina (vascular steal), so use caution in CAD.")
],
[
q(0, "A patient with renal failure remains uncontrolled on four drugs. Which direct vasodilator is used for this situation?", "Minoxidil", ["Nitroglycerin", "Doxazosin", "Spironolactone"], "Minoxidil is used for renal failure patients with difficult-to-control HTN."),
q(1, "A woman on minoxidil is upset about new facial hair. What is the explanation?", "Hirsutism is a known minoxidil effect", ["It is drug-induced lupus", "It is unrelated to her medication", "It is from hydralazine"], "Minoxidil causes hirsutism; hydralazine causes drug-induced lupus."),
q(1, "A patient started on minoxidil gains 4 kg with leg edema. Which add-on is typical?", "A loop diuretic", ["A DHP CCB", "An α1 blocker", "Clonidine"], "Direct vasodilators cause Na/water retention and are often paired with a loop diuretic.")
]));

T.push(sec(P3, "23-non-bp-indications", "23-non-bp-indications",
"23. Non-BP indications for antihypertensives",
"Objective 23 (Part III). Non-DHP CCBs, nonselective β-blockers, α1 blockers, and central α2 agonists.",
[
q(0, "Besides atrial fibrillation rate control, which arrhythmias do non-DHP CCBs treat?", "Supraventricular tachyarrhythmias", ["Ventricular fibrillation", "Complete heart block", "Torsades de pointes"], "Non-DHP CCBs slow SA/AV conduction, so they treat AF rate and supraventricular tachyarrhythmias."),
q(1, "Which nonselective β-blocker use fits a nervous musician before a concert?", "Performance anxiety", ["Portal hypertension", "Thyrotoxicosis", "BPH"], "Propranolol “MAPET”: Migraine, Anxiety (performance), Portal HTN, Essential tremor, Thyrotoxicosis."),
q(2, "What is methyldopa's special use?", "Hypertension in pregnancy", ["BPH", "Alcohol withdrawal", "Migraine prophylaxis"], "Methyldopa is one of the safest antihypertensives in pregnancy; clonidine treats alcohol withdrawal; α1 blockers treat BPH.")
],
[
q(0, "A patient with HTN has recurrent paroxysmal SVT. Which antihypertensive also treats the arrhythmia?", "Diltiazem or verapamil", ["Amlodipine", "Hydralazine", "Chlorthalidone"], "Non-DHP CCBs slow AV-node conduction and treat SVT and AF rate."),
q(1, "A patient with cirrhosis and portal hypertension also has HTN. Which drug class addresses both?", "A nonselective β-blocker such as nadolol or propranolol", ["A DHP CCB", "An α1 blocker", "A loop diuretic"], "Nonselective β-blockers treat portal hypertension (MAPET)."),
q(1, "A 70-year-old has HTN and a hand tremor that worsens when he holds a cup. Which drug may help both?", "Propranolol", ["Amlodipine", "Lisinopril", "Hydralazine"], "Propranolol treats essential tremor (MAPET)."),
q(2, "A 70-year-old man on lisinopril has a weak urinary stream from BPH. Which add-on helps both, and when is it dosed?", "Doxazosin at bedtime", ["Doxazosin in the morning", "Clonidine at noon", "Propranolol at bedtime"], "α1 blockers treat BPH and are dosed at bedtime to limit orthostasis.")
]));

T.push(sec(P3, "24-overdose", "24-overdose",
"24. Overdose of CCBs, beta-blockers, and clonidine",
"Objective 24 (Part III). Recognizing and treating each overdose and telling them apart.",
[
q(0, "At about what multiple of the usual dose does CCB overdose become toxic?", "5–10 times", ["1.5 times", "50 times", "Any dose"], "At 5–10× the usual dose: hypotension, bradycardia, and PR prolongation, even with a DHP."),
q(0, "Why does CCB overdose cause hyperglycemia?", "Insulin release is blocked", ["Glucagon is released", "Cortisol rises", "The liver makes more glucose from the drug"], "CCBs block insulin release, causing hyperglycemia (rarely significant)."),
q(1, "What is given first in β-blocker overdose?", "IV fluids and atropine", ["Lipid emulsion", "Naloxone", "Sodium thiosulfate"], "BB overdose: IV fluids and atropine first, then calcium, glucagon, pressors, high-dose insulin + glucose, lipid emulsion."),
q(1, "In β-blocker overdose, what is IV calcium given for?", "To increase heart rate", ["To bind the drug", "To lower potassium only", "To reverse hypothermia"], "The lecture lists IV calcium (↑ HR) and IV glucagon (↑ contractility)."),
q(2, "Which temperature finding is typical of clonidine overdose?", "Hypothermia", ["High fever", "Normal temperature always", "Malignant hyperthermia"], "Clonidine overdose looks like opioid overdose with pinpoint pupils, depressed consciousness, hypotension, and hypothermia.")
],
[
q(0, "A patient who swallowed a bottle of amlodipine is alert with BP 80/50. Why recheck her neuro status often?", "Mentation often stays clear at first and then can deteriorate suddenly", ["CCBs always cause immediate coma", "She will have seizures from lipophilicity", "Her glucose will fall"], "In CCB overdose mentation often stays clear despite hypotension, then may deteriorate precipitously."),
q(1, "An overdose patient has HR 40, BP 76/40, K+ 5.8, and glucose 50. Which drug class is most likely?", "A β-blocker", ["A dihydropyridine CCB", "A thiazide", "An ACE inhibitor"], "β-blocker overdose: hypotension, bradycardia, confusion, hyperkalemia, and hypoglycemia (CCB overdose causes hyperglycemia)."),
q(2, "A child chewed on a grandparent's clonidine patch. Why might symptoms appear later than with tablets?", "The patch may take longer to cause symptoms than tablets, which act within 1 hour", ["Patches are inactive", "Patches act within 1 minute", "Clonidine is not absorbed through the mouth"], "Clonidine tablets cause symptoms within 1 hour; a patch may take longer.")
]));

/* ======================= Hypertensive Crisis objectives 3–11 ======================= */

T.push(sec(HC, "03-definitions", "c03-definitions",
"Crisis 3. Hypertensive urgency vs emergency",
"Hypertensive Crisis objective 3. Same BP threshold, different organs; where each is treated; target organs and their symptoms.",
[
q(0, "Where can hypertensive urgency be treated?", "As an outpatient", ["Only in the ICU", "Only in the operating room", "Only with IV drips"], "Urgency can be treated outpatient; emergency needs ICU/stepdown care with IV medications."),
q(0, "Where is a hypertensive emergency managed?", "ICU or stepdown, with IV medications", ["At home with oral medications", "In the clinic with a quiet room", "Only by phone follow-up"], "Hypertensive emergency (acute target-organ damage) is managed in the ICU/stepdown with IV drugs."),
q(1, "Which presenting symptoms point to CNS damage on the emergency algorithm?", "Altered mental status, focal neuro deficit, and intractable vomiting", ["Back pain and dyspnea", "Decreased urine output", "Peripheral edema only"], "CNS: AMS, focal deficit, intractable vomiting. Cardiopulmonary: chest pain, dyspnea, back pain. Renal: ↓ urine output."),
q(1, "Chest pain, dyspnea, and back pain on the emergency algorithm point to which system?", "Cardiopulmonary", ["CNS", "Renal", "Obstetric"], "Cardiopulmonary damage (LV failure with pulmonary edema, MI, dissection, unstable angina) presents with chest pain, dyspnea, or back pain.")
],
[
q(0, "A 63-year-old has BP 186/112 at a routine visit with no symptoms, a normal exam, and normal labs. How is this classified?", "Hypertensive urgency", ["Hypertensive emergency", "Stage 1 hypertension", "White coat hypertension"], "SBP ≥180 and/or DBP ≥120 without acute target-organ damage is urgency (Urgency = Undamaged organs)."),
q(1, "A patient with BP 204/126 has falling urine output and a creatinine that doubled since last month. How is this classified?", "Hypertensive emergency with renal end-organ damage", ["Hypertensive urgency", "Stage 2 hypertension only", "Prerenal azotemia unrelated to BP"], "Acute kidney injury (decreased urine output) is renal target-organ damage, making it an emergency."),
q(1, "Three weeks after delivery, a woman has BP 172/114 and a seizure. Which branch of the emergency algorithm applies?", "Obstetric (eclampsia)", ["None; obstetric crises end at delivery", "Renal", "Cardiopulmonary"], "Obstetric hypertensive emergencies occur after 20 weeks and up to 6 weeks postpartum; seizure means eclampsia.")
]));

T.push(sec(HC, "04a-causes-pathophysiology", "c04a-causes-pathophysiology",
"Crisis 4a. Causes and pathophysiology of crisis",
"Hypertensive Crisis objective 4. The MUD-COD causes and the vicious cycle of a crisis compared with chronic hypertension.",
[
q(0, "Which sleep disorder is a listed cause of hypertensive crisis?", "Obstructive sleep apnea", ["Narcolepsy", "Insomnia", "Restless legs"], "MUD-COD: Missed meds, Undiagnosed HTN, Discontinued BB/clonidine, CKD, OSA, Drugs."),
q(1, "In a hypertensive emergency, focal vasodilation and endothelial damage lead to:", "Vascular permeability, then fibrinoid necrosis and clotting activation", ["Vessel wall thickening that protects the organ", "Lower angiotensin II", "Restored autoregulation"], "Endothelial damage → permeability → fibrinoid necrosis, clotting cascade, inflammation → more vasoconstrictors → back to step 1.")
],
[
q(0, "A 35-year-old with no medical history takes OTC diet pills and a phenylephrine decongestant. BP is 210/124. Which MUD-COD category fits?", "Drugs", ["Missed medications", "CKD", "OSA"], "Drug causes: cocaine, amphetamines, diet pills, phenylephrine."),
q(1, "A student asks how the vessels differ in a hypertensive emergency compared with chronic hypertension. Which answer is correct?", "In an emergency autoregulation fails with fibrinoid necrosis; in chronic HTN the vessels remodel and adapt", ["Chronic HTN causes fibrinoid necrosis while emergencies cause remodeling", "They are identical", "Emergencies only affect veins"], "Chronic HTN: gradual remodeling and adaptation. Emergency: abrupt SVR rise, failed autoregulation, fibrinoid necrosis, permeability.")
]));

T.push(sec(HC, "04b-history", "c04b-history",
"Crisis 4b. History in hypertensive crisis",
"Hypertensive Crisis objective 4. Background, triggers, and how the crisis history differs from a routine HTN history.",
[
q(0, "What does the crisis history focus on, compared with a routine hypertension history?", "The trigger of the acute rise and any acute organ damage", ["Long-term risk factors only", "Family history only", "Lifestyle goals"], "The routine history screens for risk factors and chronic complications; the crisis history hunts for the trigger and acute damage."),
q(1, "Which systemic autoimmune disease is on the crisis history list?", "Systemic lupus erythematosus", ["Rheumatoid arthritis", "Psoriasis", "Sarcoidosis"], "Other medical problems to ask about: thyroid disease, Cushing's, and systemic lupus.")
],
[
q(0, "Which background detail best tells you how carefully BP must be lowered in a crisis?", "How long and how severe the preexisting HTN has been, and how well controlled", ["The patient's favorite food", "The patient's height", "Whether the patient has allergies to latex"], "Duration and severity of preexisting HTN matter: chronic hypertensives have right-shifted autoregulation and need slower lowering."),
q(1, "A 40-year-old fell off a bike yesterday and hit his head. Today he has BP 210/120 and confusion. Which history item is the key trigger?", "Recent head injury", ["Recent MAOI use", "Pregnancy", "Clonidine discontinuation"], "Recent head injury or trauma is a listed trigger to ask about.")
]));

T.push(sec(HC, "04c-physical-exam", "c04c-physical-exam",
"Crisis 4c. Physical exam in hypertensive crisis",
"Hypertensive Crisis objective 4. Vitals, pulses, eyes, cardiopulmonary, CNS, and abdominal findings of acute organ damage.",
[
q(0, "Which pulses are checked in the crisis exam for a weak or absent pulse?", "Carotid, brachial, and femoral", ["Dorsalis pedis only", "Radial only", "Temporal only"], "Weak or absent carotid, brachial, or femoral pulse suggests aortic dissection."),
q(1, "In a hypertensive crisis, nausea and vomiting may suggest:", "Increased intracranial pressure", ["Aortic dissection", "Hypokalemia", "Pulmonary edema"], "CNS findings: agitation/delirium, visual deficits, focal signs, seizures; N/V may suggest ↑ ICP.")
],
[
q(0, "A patient in crisis has BP 200/120 supine that falls to 160/100 on standing, with his HR rising. What does this suggest?", "Volume depletion", ["Aortic dissection", "Pulmonary edema", "Increased ICP"], "Supine and standing BP assess volume depletion; arm-to-arm differences suggest dissection."),
q(1, "A patient with BP 216/130 is agitated and has a new visual field deficit. Which system is showing end-organ damage?", "Central nervous system", ["Renal", "Cardiopulmonary", "None; agitation is expected"], "Agitation/delirium, visual deficits, focal signs, and seizures are CNS findings of acute damage.")
]));

T.push(sec(HC, "04d-workup", "c04d-workup",
"Crisis 4d. Diagnostic work-up in hypertensive crisis",
"Hypertensive Crisis objective 4. Labs, troponin, toxicology, pregnancy testing, and imaging by algorithm branch.",
[
q(0, "In a hypertensive crisis, which CBC finding triggers a work-up for microangiopathic hemolytic anemia?", "A new anemia", ["A high platelet count", "A high white count", "A normal hemoglobin"], "New anemia on CBC → add LFTs, haptoglobin, and a peripheral smear to exclude MAHA."),
q(1, "Which work-up fits the obstetric branch of the algorithm?", "CBC, BMP, LFT, UA, and protein:creatinine", ["CT head only", "CTA chest", "Troponin only"], "Obstetric branch: CBC, BMP, LFT, UA, protein:creatinine."),
q(1, "Which imaging is on the CNS branch of the algorithm?", "CT head, CTA brain/neck, and MRI brain", ["CXR and ECG", "Renal ultrasound", "Abdominal CT only"], "CNS branch: CT head, CTA brain/neck, MRI brain. Cardiopulmonary: CXR, ECG, troponin, CTA chest.")
],
[
q(0, "A patient in crisis has a creatinine of 2.8; last month it was 1.0. Which algorithm branch and work-up apply?", "Renal branch: BMP and UA", ["CNS branch: CT head", "Obstetric branch: LFTs", "No work-up; creatinine is unrelated"], "New AKI is renal end-organ damage; the renal branch work-up is BMP and UA."),
q(1, "A 26-year-old man has BP 208/124, HR 132, and dilated pupils. Which test best identifies the trigger?", "Urine toxicology", ["Lipid panel", "TSH only", "Echocardiogram"], "Urine toxicology, a pregnancy test, and endocrine testing look for the crisis trigger.")
]));

T.push(sec(HC, "05-cns-effects", "c05-cns-effects",
"Crisis 5. CNS effects of hypertensive emergency",
"Hypertensive Crisis objective 5. Encephalopathy, PRES, lacunar and ischemic stroke, intraparenchymal hemorrhage, and SAH as taught.",
[
q(0, "How should BP be lowered in hypertensive encephalopathy, and with which algorithm drug?", "Gradually, with nicardipine", ["As fast as possible, with nitroprusside", "Not at all for 48 hours", "To SBP 100–120 within 20 minutes, with esmolol"], "Encephalopathy responds to gradual lowering (10–20% in the first hour, 5–15% more by 24 h); the algorithm drug is nicardipine."),
q(1, "Where are PRES lesions seen on MRI?", "Subcortical white matter and cortical gray matter of the bilateral parieto-occipital regions", ["The frontal lobes only", "The cerebellum only", "The brainstem only"], "PRES shows hyperintense lesions in the bilateral parieto-occipital subcortical white and cortical gray matter."),
q(2, "The lenticulostriate arteries that cause lacunar strokes branch from which artery?", "Middle cerebral artery", ["Anterior cerebral artery", "Basilar artery", "Vertebral artery"], "Chronic HTN causes lacunar strokes in the small penetrating lenticulostriate arteries of the MCA, affecting the basal ganglia."),
q(3, "On CT, how does the vasogenic edema around an intraparenchymal hemorrhage appear?", "Darker grey around the bright white blood", ["Bright white like the blood", "Black like air", "It cannot be seen on CT"], "Intraparenchymal blood is bright white; the surrounding vasogenic edema is darker grey."),
q(4, "How is SAH treated for BP in the lecture?", "Like ICH: check ICP, nicardipine is the drug of choice, avoid nitroprusside and hydralazine", ["Like aortic dissection: SBP 100–120 in 20 minutes", "No BP treatment at all", "With nitroprusside first"], "SAH is treated like ICH; the algorithm goal is SBP below 160.")
],
[
q(0, "A confused patient with BP 236/140 and a normal CT is treated for hypertensive encephalopathy. His family asks how fast he will recover. What do you say?", "He should improve slowly over 2–4 days with gradual BP lowering", ["He will be normal within 10 minutes", "He will not improve", "He needs his BP normalized within 1 hour"], "Encephalopathy and PRES respond to gradual BP lowering and slowly improve over 2–4 days."),
q(1, "A patient with BP 210/120 has a seizure, severe headache, and new trouble seeing. Which imaging best shows the expected lesions?", "MRI brain", ["Chest x-ray", "Renal ultrasound", "Plain skull film"], "PRES (vision change, seizure, headache) is seen best on MRI, in the parieto-occipital regions."),
q(2, "A 68-year-old with 20 years of untreated HTN has a pure motor deficit. MRI shows a small deep infarct in the basal ganglia. Which vessels are involved?", "The small penetrating lenticulostriate arteries", ["The large proximal MCA trunk from an embolus", "The anterior communicating artery", "The venous sinuses"], "Chronic uncontrolled HTN classically causes lacunar strokes in the lenticulostriate arteries off the MCA."),
q(3, "A hypertensive patient's CT shows a bright white basal ganglia lesion surrounded by a darker rim. What is the darker rim?", "Vasogenic edema", ["Old infarct", "Calcification", "Air"], "Blood is bright white; the surrounding vasogenic edema is darker grey."),
q(4, "A patient with subarachnoid hemorrhage has BP 186/100. What is the algorithm's systolic goal?", "Below 160", ["Below 120", "Below 185", "No lowering on day 1"], "Algorithm: hemorrhagic stroke SBP below 140, SAH SBP below 160.")
]));

T.push(sec(HC, "06-cardiac-effects", "c06-cardiac-effects",
"Crisis 6. Cardiac effects of hypertensive emergency",
"Hypertensive Crisis objective 6. Aortic dissection, myocardial ischemia and infarction, and acute LV failure with pulmonary edema.",
[
q(0, "How does an aortic dissection start in a hypertensive emergency?", "High aortic pressure tears the intima", ["A clot forms in the aorta", "The aortic valve calcifies", "The adventitia is infected"], "High aortic pressure causes intimal tears; blood is forced between the intima and media."),
q(1, "Which conditions count as myocardial ischemia/infarction in a hypertensive emergency?", "STEMI, NSTEMI, and unstable angina", ["Stable angina only", "Pericarditis", "Endocarditis"], "Cardiac ischemia includes STEMI, NSTEMI, and unstable angina, with troponin elevation and possible EKG changes."),
q(2, "Flash pulmonary edema in a hypertensive crisis is mainly a problem of:", "Afterload", ["Low preload", "Bradycardia", "Valve infection"], "Afterload becomes so high that blood can't move forward out of the LV and backs up into the lungs.")
],
[
q(0, "A 62-year-old in crisis has BP 190/110 in the right arm and 150/90 in the left, with chest pain radiating to the back. What is the next study?", "CTA chest", ["Non-contrast CT head", "Renal ultrasound", "Stress test"], "Arm-to-arm BP difference, weak pulses, and back pain suggest dissection; CTA chest is on the cardiopulmonary branch."),
q(1, "A patient with LVH presents with BP 224/124 and a rising troponin without coronary blockage. Which mechanism explains the injury?", "Poor diastolic coronary filling plus higher oxygen demand from afterload and LVH", ["Too little afterload", "Low oxygen demand", "Pericardial effusion"], "Coronaries fill in diastole; high aortic pressure and LVH reduce perfusion while the stiff myocardium needs more O2."),
q(2, "A patient with BP 230/130 has pulmonary edema. Which treatment goal best matches the mechanism?", "Reduce the pressure the LV pumps against so blood can move forward", ["Raise afterload", "Give large IV fluid boluses", "Slow the heart to 40 bpm"], "Flash pulmonary edema is an afterload problem: the LV cannot push forward, so blood backs up into the lungs.")
]));

T.push(sec(HC, "07-retinopathy-maha", "c07-retinopathy-maha",
"Crisis 7. Retinopathy, MAHA, and other end-organ damage",
"Hypertensive Crisis objective 7. Hypertensive retinopathy, microangiopathic hemolytic anemia, AKI, and preeclampsia.",
[
q(0, "How does the lecture define hypertensive retinopathy?", "Vascular changes within the retina causing exudates and microinfarctions", ["Increased intraocular pressure", "Clouding of the lens", "Retinal detachment from trauma"], "Hypertensive retinopathy: retinal vascular changes with exudates and microinfarctions."),
q(1, "Which haptoglobin result is expected in MAHA (standard-reference clarification)?", "Low", ["High", "Normal", "Undetectable test"], "Clarification: hemolysis lowers haptoglobin and shows schistocytes on the smear."),
q(2, "How does a hypertensive emergency cause AKI?", "Cardiac output falls against severe afterload, so the kidney is hypoperfused", ["The kidney is infected", "Urine flow is blocked", "Too much renal blood flow causes stones"], "As CO falls against severe afterload, the kidney is hypoperfused and cannot filter properly → AKI or proteinuria.")
],
[
q(0, "A patient with BP 226/136 has bilateral papilledema on fundoscopy but no other complaints. How is this classified?", "Hypertensive emergency, because retinopathy is end-organ damage", ["Hypertensive urgency", "Stage 2 hypertension only", "A normal finding in HTN"], "New flame hemorrhages, exudates, or papilledema are acute end-organ damage."),
q(1, "A patient in hypertensive emergency has a new hemoglobin of 8.0. Which test looks directly for fragmented red cells?", "Peripheral blood smear", ["Troponin", "Lipid panel", "TSH"], "New anemia → LFTs, haptoglobin, and peripheral smear; fragmented RBCs (schistocytes) suggest MAHA."),
q(2, "A woman at 30 weeks has BP 168/110 and new proteinuria. How does the lecture classify this?", "Preeclampsia, a pregnancy-related hypertensive crisis with end-organ injury", ["Chronic hypertension only", "White coat hypertension", "Gestational hypertension without organ damage"], "Preeclampsia/eclampsia: pregnancy-related crisis with placental insufficiency, proteinuria, and potential seizures.")
]));

T.push(sec(HC, "08a-urgency-management", "c08a-urgency-management",
"Crisis 8a. Treating hypertensive urgency",
"Hypertensive Crisis objective 8. Competing risks, where to treat, regimens, and the 2–4 hour and 1–2 week goals.",
[
q(0, "What is the risk of lowering BP too little in a crisis?", "Imminent dissection, stroke, MI, or AKI", ["Hypoglycemia", "Angioedema", "Gout"], "Too little: imminent CV events. Too fast or far: stroke, MI, AKI below the autoregulatory range."),
q(1, "Which history should prompt you to consider admitting an urgency patient?", "Diabetes, CAD, or prior stroke", ["Seasonal allergies", "Age under 30", "A normal exam"], "Consider admission with a history of DM, CAD, or prior CVA."),
q(2, "By how much may MAP be lowered over the first 2–4 hours in urgency?", "No more than 25–30%", ["At least 50%", "To normal right away", "Not at all for a week"], "Goal: within 2–4 hours BP below 160/100, or MAP reduced no more than 25–30%; then to goal over 1–2 weeks.")
],
[
q(0, "An 82-year-old has BP 194/118 and no organ damage. A student suggests a large dose of a fast-acting drug. Why be careful?", "Elderly patients are at particular risk of complications if BP drops precipitously", ["Elderly patients need faster lowering", "Older patients never get urgency", "Fast drugs don't work in the elderly"], "Elderly patients are at particular risk if BP is lowered precipitously."),
q(1, "An office patient with BP 192/120 and no organ damage has a known cerebral aneurysm. What is the disposition?", "Send to the ER and lower BP over 2–4 hours, treated like an emergency", ["Quiet room and discharge", "Recheck in 6 months", "Start lifestyle change only"], "Urgency patients at imminent risk (known cerebral or aortic aneurysm) go to the ER, with the same drugs as an emergency."),
q(2, "Two hours after restarting her usual regimen, an urgency patient's BP is 158/98 with no organ damage. What now?", "Release her with close outpatient follow-up and reach goal over 1–2 weeks", ["Admit to the ICU", "Lower her to 110/70 before discharge", "Start an IV drip"], "Once below 160/100 without organ damage, release with close follow-up and bring BP to goal over 1–2 weeks.")
]));

T.push(sec(HC, "08b-emergency-goals-drugs", "c08b-emergency-goals-drugs",
"Crisis 8b. Emergency BP goals and drugs of choice",
"Hypertensive Crisis objective 8. The 10–20% then 5–15% rule, exceptions, IV drug table, and drug-to-organ matching.",
[
q(0, "Which medications are used in the days-to-weeks phase of a hypertensive emergency?", "Oral medications", ["IV nitroprusside", "IV nicardipine", "No medications"], "First hour and next 23 hours use IV drugs; days to weeks use oral medications."),
q(1, "Which adverse effects are listed for esmolol?", "Hypotension, nausea, asthma, 1st-degree heart block, and decompensated HFrEF", ["Cyanide toxicity", "Hirsutism", "Drug-induced lupus"], "Esmolol: hypotension, nausea, asthma, 1st-degree block, decompensated HFrEF; used for dissection and perioperatively."),
q(1, "Which adverse effects are listed for IV nitroglycerin?", "Headache, vomiting, methemoglobinemia, and tolerance", ["Bronchoconstriction and heart block", "Drug-induced lupus", "Hyperkalemia"], "Nitroglycerin: headache, vomiting, methemoglobinemia, tolerance; for coronary ischemia and HF."),
q(2, "Which drugs does the algorithm list for ischemic stroke?", "Labetalol and nicardipine", ["Nitroprusside and hydralazine", "Esmolol and nitroprusside", "Fenoldopam"], "Ischemic stroke: labetalol or nicardipine; candidate for thrombolysis below 185/110, non-candidate treat only ≥220/120.")
],
[
q(0, "After the first hour, a patient's MAP has fallen from 150 to 128. What is the plan for the next 23 hours?", "Lower MAP another 5–15% (or to 160/110) in the ICU or stepdown", ["Normalize BP to 120/80 within the next hour", "Stop all treatment", "Switch to oral drugs and discharge"], "Standard emergency goal: 10–20% in the first hour, another 5–15% over 23 hours, then oral drugs over days to weeks."),
q(1, "A patient develops a hypertensive emergency during surgery. Which IV drug on the table is listed for perioperative use?", "Esmolol", ["Hydralazine", "Fenoldopam", "Methyldopa"], "Esmolol is indicated for aortic dissection and perioperative hypertension."),
q(2, "A patient in hypertensive emergency has acute heart failure. Which algorithm drug and systolic goal fit?", "Nitroglycerin, SBP below 140", ["Nicardipine, SBP below 160", "Labetalol, SBP 100–120", "Hydralazine, SBP below 150"], "Acute HF: nitroglycerin, SBP below 140; labetalol and nicardipine are for most emergencies except acute HF.")
]));

T.push(sec(HC, "08c-nitroprusside", "c08c-nitroprusside",
"Crisis 8c. Sodium nitroprusside",
"Hypertensive Crisis objective 8. Mechanism, onset, ICP caution, and cyanide and methemoglobin toxicity.",
[
q(0, "How is nitroprusside prepared?", "Diluted in 5% dextrose with a special delivery system", ["Mixed in normal saline as a bolus", "Given orally", "Given as a skin patch"], "Nitroprusside is IV, diluted in D5W, and needs a special delivery system."),
q(1, "Besides cyanide, which related intoxication is listed for nitroprusside?", "Thiocyanate", ["Lithium", "Digoxin", "Acetaminophen"], "Other adverse effects: nausea, vomiting, muscle twitching, sweating, and thiocyanate intoxication.")
],
[
q(0, "A patient with aortic dissection is started on nitroprusside. What must be given with it?", "A β-blocker", ["Hydralazine", "A thiazide", "Nothing; it is used alone"], "Nitroprusside is used for dissection with a β-blocker so reflex tachycardia doesn't worsen aortic shear."),
q(1, "A resident proposes methylene blue for cyanide toxicity on nitroprusside. What is correct?", "Cyanide is treated with sodium thiosulfate; methylene blue is for methemoglobinemia", ["Methylene blue is correct", "Naloxone is the antidote", "No treatment is needed"], "Methemoglobinemia → methylene blue; cyanide → sodium thiosulfate.")
]));

T.push(sec(HC, "08d-nitroglycerin", "c08d-nitroglycerin",
"Crisis 8d. Nitroglycerin",
"Hypertensive Crisis objective 8. Venous dilation and coronary effects, kinetics, tolerance, and the PDE-5 interaction.",
[
q(0, "How quickly does the effect of IV nitroglycerin wear off after stopping?", "Within 5–10 minutes", ["After 50 hours", "After 1 week", "It never wears off"], "IV NTG: onset 2–5 minutes, effect gone in 5–10 minutes."),
q(1, "Which PDE-5 inhibitors does the lecture name with nitroglycerin?", "Sildenafil and tadalafil, used for ED or pulmonary HTN", ["Metoprolol and esmolol", "Amlodipine and nifedipine", "Lisinopril and losartan"], "PDE-5 inhibitors with NTG cause very severe hypotension.")
],
[
q(0, "Why is nitroglycerin preferred over nitroprusside for a hypertensive emergency with ACS?", "It dilates the coronary arteries and improves collateral flow to ischemic myocardium", ["It dilates arteries more than veins", "It lasts for days", "It raises heart rate"], "NTG reduces preload and dilates coronaries, improving collateral flow; nitroprusside dilates veins and arterioles equally."),
q(1, "A patient with pulmonary hypertension takes sildenafil daily. He now has chest pain and BP 190/110. Why avoid nitroglycerin?", "NTG with a PDE-5 inhibitor can cause very severe hypotension", ["NTG worsens pulmonary hypertension", "NTG causes bronchospasm", "Sildenafil makes NTG ineffective"], "Always ask about sildenafil/tadalafil before nitrates.")
]));

T.push(sec(HC, "08e-nicardipine", "c08e-nicardipine",
"Crisis 8e. Nicardipine",
"Hypertensive Crisis objective 8. IV DHP CCB kinetics, phlebitis, contraindications (A-H-H), and best uses.",
[
q(0, "When does IV nicardipine reach its peak effect?", "1–2 hours", ["Within 2 minutes", "After 24 hours", "After 1 week"], "Nicardipine peaks at 1–2 hours, falls sharply within 30 minutes of stopping, and takes ~50 hours to fully resolve."),
q(0, "How quickly does nicardipine's effect fall after the drip is stopped?", "Sharply within 30 minutes, though full resolution takes about 50 hours", ["Within 10 seconds completely", "It does not fall for 3 days", "It rises after stopping"], "Effect falls sharply within 30 minutes; full resolution ~50 hours, longer in kidney disease."),
q(1, "Which three conditions contraindicate nicardipine (A-H-H)?", "Aortic stenosis, HFrEF, and hypertrophic cardiomyopathy", ["Asthma, hypokalemia, and hepatitis", "Anemia, hypothyroidism, and hyperglycemia", "Atrial fibrillation, hyperlipidemia, and hernia"], "Nicardipine is out for Aortic stenosis, HFrEF (severe ventricular dysfunction), and HCM.")
],
[
q(0, "A nurse plans to run nicardipine through a small hand IV for several days. What is the better plan?", "Use a large peripheral vein or central line and rotate the site every 12 hours", ["Use the hand vein and leave it for 72 hours", "Give it orally instead", "Give it as a single bolus"], "Nicardipine irritates veins; give it through a large vein or central line and rotate every 12 hours."),
q(1, "A patient with known hypertrophic cardiomyopathy presents with BP 214/126 and confusion. Why avoid nicardipine?", "Vasodilation and reflex tachycardia worsen the outflow obstruction", ["It is too slow", "It raises ICP", "It causes cyanide toxicity"], "HCM is a nicardipine contraindication: vasodilation and reflex tachycardia worsen outflow obstruction.")
]));

T.push(sec(HC, "09a-ischemic-stroke", "c09a-ischemic-stroke",
"Crisis 9a. Hypertensive emergency with ischemic stroke",
"Hypertensive Crisis objective 9. When to treat BP with and without tPA, drugs, and resuming home medications.",
[
q(0, "Why is BP usually left alone in ischemic stroke without tPA (clarification)?", "The brain around the infarct depends on pressure to stay perfused", ["High BP dissolves the clot", "BP medications don't work after stroke", "Low BP causes bleeding"], "Lowering BP can extend the stroke because surrounding brain depends on pressure; treat only ≥220/120."),
q(1, "Why is the BP ceiling lower for patients receiving tPA (clarification)?", "tPA raises bleeding risk", ["tPA raises BP", "tPA works only at low BP", "tPA causes heart block"], "Goal below 185/110 before reperfusion because tPA raises bleeding risk.")
],
[
q(0, "A 71-year-old's ischemic stroke is too old for tPA. His BP is 228/124. A resident says BP is never lowered in ischemic stroke. What is correct?", "It should be treated, because it is 220/120 or higher; use labetalol or nicardipine", ["Never lower BP in ischemic stroke", "Lower it below 185/110 for tPA", "Lower it to 120/80 within 20 minutes"], "Without tPA, BP is left alone unless ≥220/120; at that level labetalol or nicardipine are preferred."),
q(0, "A stroke patient who was not treated acutely is stable on day 2 and takes lisinopril at home. When can it be resumed?", "24–48 hours after the stroke if no contraindications", ["Never", "Only after 3 months", "Immediately on arrival in the ED"], "Resume the home regimen 24–48 hours after the stroke if no contraindications."),
q(1, "A tPA candidate has BP 192/104. What must happen before reperfusion?", "Lower BP below 185/110 with labetalol or nicardipine", ["Nothing; BP is below 220/120", "Lower BP to 120/80", "Give hydralazine and wait 24 hours"], "tPA candidates need BP below 185/110 before reperfusion; labetalol or nicardipine are preferred.")
]));

T.push(sec(HC, "09b-intracerebral-hemorrhage", "c09b-intracerebral-hemorrhage",
"Crisis 9b. Hypertensive emergency with intracerebral hemorrhage",
"Hypertensive Crisis objective 9. ICP first, competing interests, BP targets, and drugs to use and avoid.",
[
q(0, "Why does a rising ICP make BP lowering in ICH risky?", "CPP equals MAP minus ICP, so a lower MAP with high ICP sharply cuts brain perfusion", ["ICP has no effect on perfusion", "High ICP raises MAP automatically", "Lowering BP lowers ICP to zero"], "Rising ICP plus falling MAP = falling cerebral perfusion; that is why ICH goals are a balance."),
q(1, "What is the rule for hydralazine in ICH or SAH?", "Avoid it", ["It is the drug of choice", "Use it with nitroprusside", "Use it only if HR is low"], "Bleeding brain: Nicardipine now; no Nitroprusside, no Hydralazine.")
],
[
q(0, "A patient has a hypertensive basal ganglia hemorrhage with BP 200/110. What is the algorithm's systolic goal?", "Below 140", ["Below 185", "100–120 within 20 minutes", "Below 220"], "Algorithm: hemorrhagic stroke SBP below 140; SAH below 160 (often titrated to about 160 per slide 48)."),
q(1, "A patient with an ICH also has severe aortic stenosis, so nicardipine is contraindicated. Which drug is an acceptable alternative?", "Labetalol", ["Nitroprusside", "Hydralazine", "Minoxidil"], "Labetalol or esmolol are acceptable in ICH; nitroprusside and hydralazine are avoided.")
]));

T.push(sec(HC, "09c-aortic-dissection", "c09c-aortic-dissection",
"Crisis 9c. Hypertensive emergency with aortic dissection",
"Hypertensive Crisis objective 9. Fast, low targets, heart rate first, and the morphine–β-blocker–vasodilator sequence.",
[
q(0, "How quickly should SBP reach 100–120 in aortic dissection?", "Within 20 minutes", ["Over 24 hours", "Over 1–2 weeks", "Within 6 hours"], "Dissection: rapidly lower SBP to 100–120 within 20 minutes unless end-organ hypoperfusion occurs."),
q(1, "Why is the β-blocker given before the vasodilator in dissection (clarification)?", "To prevent reflex tachycardia that would increase shear on the torn aorta", ["To raise BP first", "To treat pain", "Because vasodilators don't work in dissection"], "β-blocker first (HR below 60) so the vasodilator doesn't trigger reflex tachycardia.")
],
[
q(0, "During rapid BP lowering for a dissection, the patient becomes oliguric and confused. What does the lecture say?", "Stop pushing BP lower; the goal applies unless signs of end-organ hypoperfusion occur", ["Lower BP further to 80/50", "Add nitroprusside", "This is expected and should be ignored"], "Lower SBP to 100–120 within 20 minutes unless signs of end-organ hypoperfusion occur."),
q(1, "A dissection patient has severe pain, HR 110, and BP 200/110. Which sequence fits the lecture?", "Morphine, then esmolol to HR below 60, then nitroprusside, then the OR", ["Nitroprusside first, then esmolol", "Hydralazine alone", "Oral amlodipine and discharge"], "Dissection = MBV: Morphine, Beta-blocker, Vasodilator → OR.")
]));

T.push(sec(HC, "09d-acute-coronary-syndrome", "c09d-acute-coronary-syndrome",
"Crisis 9d. Hypertensive emergency with acute coronary syndrome",
"Hypertensive Crisis objective 9. Treatment threshold, preferred drugs, work-up, and drugs to use with caution.",
[
q(0, "Which drug on the emergency table carries a caution in coronary ischemia because of reflex tachycardia?", "Nicardipine", ["Nitroglycerin", "Esmolol", "Metoprolol"], "Nicardipine: caution with coronary ischemia (reflex tachycardia); hydralazine can aggravate angina."),
q(1, "Which specialty should be involved early in a hypertensive emergency with ACS?", "Cardiology", ["Nephrology", "Neurology", "Dermatology"], "Get cardiology involved early, trend troponin, and get an echo if not going to the cath lab.")
],
[
q(0, "A patient with an NSTEMI has BP 150/92 and no heart failure. Does the hypertension itself need emergency treatment?", "No; treat when SBP is above 160 and/or DBP above 100", ["Yes; any BP over 130/80 in ACS", "Yes; lower to 100–120 within 20 minutes", "No; BP is never treated in ACS"], "In ACS, treat if SBP above 160 and/or DBP above 100, with NTG or IV β-blockers."),
q(1, "A patient with unstable angina and BP 186/108 is not going to the cath lab. Which work-up steps fit?", "Involve cardiology, trend troponin, and get an echocardiogram", ["CT head and lumbar puncture", "Renal angiogram", "No further testing"], "ACS work-up: cardiology early, troponin trend, echo if not going to the cath lab.")
]));

T.push(sec(HC, "09e-heart-failure", "c09e-heart-failure",
"Crisis 9e. Hypertensive emergency with acute heart failure",
"Hypertensive Crisis objective 9. SBP goal, loop then nitroglycerin, and drugs to avoid in decompensated HFrEF.",
[
q(0, "In hypertensive acute heart failure with fluid overload, what is the order of therapy?", "IV loop diuretic first, then nitroglycerin", ["Nitroglycerin first, then a β-blocker", "Nicardipine first, then hydralazine", "Labetalol alone"], "Acute HF: Loop, then NTG (Dry, then Dilate)."),
q(1, "Why is labetalol listed as “except acute heart failure”?", "β-blockers depress cardiac contractility", ["It causes cyanide toxicity", "It raises preload", "It is too slow"], "β-blockers and CCBs depress contractility in acute decompensated HFrEF.")
],
[
q(0, "After IV furosemide, a patient with hypertensive acute HF still has BP 180/100 and crackles. What is next?", "Add IV nitroglycerin", ["Add IV labetalol", "Add IV hydralazine", "Add IV nicardipine"], "After the loop, add the venous vasodilator NTG, which also dilates the coronaries; goal SBP below 140."),
q(1, "The team wants IV hydralazine for afterload reduction in decompensated HFrEF. What is the best response?", "Avoid it; it increases cardiac work by reflex", ["Give it; it is the drug of choice", "Give it with labetalol", "Give it only if HR is high"], "Hydralazine increases cardiac work by arterial vasodilation (reflex) and is avoided in acute decompensated HFrEF.")
]));

T.push(sec(HC, "09f-sympathetic-overactivity", "c09f-sympathetic-overactivity",
"Crisis 9f. Hypertensive emergency from sympathetic overactivity",
"Hypertensive Crisis objective 9. Cocaine, amphetamines, pheochromocytoma, autonomic dysfunction, and unopposed alpha.",
[
q(0, "What vital-sign pattern is typical of a sympathetic crisis?", "Tachycardia with severe hypertension", ["Bradycardia with hypotension", "Fever with hypotension", "Normal heart rate with low BP"], "Large catecholamine release → sudden severe HTN with tachycardia, sometimes with coronary ischemia."),
q(1, "Is IV esmolol alone appropriate for cocaine-induced hypertensive emergency?", "No; a β-blocker alone leaves α vasoconstriction unopposed", ["Yes; it is the drug of choice", "Yes, if HR is over 120", "Only with hydralazine"], "Never a pure β-blocker alone in cocaine, meth, or pheo crisis; use labetalol to block α and β.")
],
[
q(0, "A patient recovering from Guillain-Barré syndrome has sudden severe hypertension and tachycardia. Which category explains it?", "Severe autonomic dysfunction causing sympathetic overactivity", ["Medication non-adherence", "Renal artery stenosis", "Preeclampsia"], "Spinal cord injury and Guillain-Barré cause severe autonomic dysfunction, a listed cause of sympathetic crisis."),
q(1, "A teenager took a handful of his Adderall. BP is 210/120 and HR 140. Which IV drug fits?", "Labetalol", ["Esmolol alone", "Propranolol alone", "Metoprolol alone"], "Amphetamines cause sympathetic crisis; labetalol blocks both α and β receptors.")
]));

T.push(sec(HC, "10-pregnancy-hypertension", "c10-pregnancy-hypertension",
"Crisis 10. Types of hypertension in pregnancy",
"Hypertensive Crisis objective 10. Pregnancy physiology, chronic vs gestational HTN, and preeclampsia vs eclampsia.",
[
q(0, "Which forms of hypertension must be distinguished from preeclampsia?", "Chronic, transient, and gestational hypertension", ["Renovascular and resistant hypertension", "White coat and masked hypertension", "Isolated systolic and diastolic hypertension"], "It is important to differentiate preeclampsia from chronic, transient, and gestational hypertension."),
q(1, "By when does gestational hypertension resolve?", "By 12 weeks postpartum", ["By 2 weeks postpartum", "Before delivery", "It never resolves"], "Gestational HTN resolves by 12 weeks postpartum; persistence beyond that means chronic HTN."),
q(2, "Which is a listed risk factor for preeclampsia?", "Multiple gestation", ["Being a multiparous woman with no history", "Low BMI", "Age under 20 only"], "Higher risk: nulliparous women, multiple gestation, history of HTN or renal disease, and family history.")
],
[
q(0, "A pregnant woman with normal BP at 24 weeks worries that every pregnancy causes high blood pressure. What does the lecture say?", "Most pregnant women don't have BP problems, though plasma volume rises to 150% and the CV system is stressed", ["All pregnant women develop hypertension", "BP always falls to dangerous lows in pregnancy", "Pregnancy lowers plasma volume"], "Most pregnant women have no BP problems; plasma volume rises to 150% and RBC volume 30%."),
q(1, "A 32-year-old with no known history has BP 144/92 on two visits at 12 weeks' gestation. How is this classified?", "Chronic hypertension", ["Gestational hypertension", "Preeclampsia", "Eclampsia"], "HTN found before 20 weeks is chronic; after 20 weeks without proteinuria is gestational."),
q(2, "A patient with stable preeclampsia at 32 weeks asks about management. Which plan fits the lecture?", "Restricted activity, close fetal monitoring, with delivery as the definitive treatment", ["ACE inhibitor and discharge", "No monitoring until term", "Immediate thiazide and diet only"], "Preeclampsia: restricted activity, possibly bed rest, very close fetal monitoring; definitive treatment is delivery.")
]));

T.push(sec(HC, "11-pregnancy-medications", "c11-pregnancy-medications",
"Crisis 11. Medications for hypertension in pregnancy",
"Hypertensive Crisis objective 11. Labetalol, methyldopa, nifedipine, other classes, and drugs to avoid.",
[
q(0, "How often is nifedipine dosed in pregnancy?", "Once daily", ["Twice daily", "2–4 times daily", "Weekly"], "Nifedipine or diltiazem once daily; labetalol twice daily; methyldopa 2–4 times daily."),
q(1, "What pregnancy category are ACE inhibitors in the FIRST trimester?", "Category C", ["Category A", "Category B", "Category X"], "ACEIs/ARBs are category C in the 1st trimester and D in the 2nd and 3rd, with major teratogenicity."),
q(1, "What does the lecture say about clonidine in pregnancy?", "Limited data", ["It is the drug of choice", "It is category X", "It causes renal agenesis"], "Clonidine has limited data; β-blockers are generally safe but IUGR is reported; diuretics are not first line.")
],
[
q(0, "A pregnant woman with chronic HTN wants a once-daily medication. Which fits?", "Nifedipine", ["Methyldopa", "Lisinopril", "Losartan"], "Nifedipine is once daily with less safety data but no increase in major teratogenicity."),
q(1, "A pregnant woman has taken atenolol for years. Which concern does the lecture list for β-blockers in pregnancy?", "Intrauterine growth retardation", ["Fetal renal agenesis", "Cleft palate", "Neonatal hyperglycemia"], "β-blockers are generally safe, but intrauterine growth retardation has been reported."),
q(1, "A woman at 36 weeks has severe preeclampsia with BP 176/114. Which IV drugs fit the lecture?", "Labetalol or hydralazine", ["Nitroprusside or esmolol", "IV enalaprilat", "Nicardipine and furosemide"], "Emergency in preeclampsia/eclampsia: IV labetalol or hydralazine.")
]));

window.HYPERTENSION_TOTAL_OBJECTIVES = T;
}());
