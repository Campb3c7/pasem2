/* Veal, Hypertension Part II (deck hypertension-part-2). Official objectives 4–7 and 11–16 of the shared
   "Hypertension, Parts I, II and III" list, placed with the deck that teaches them. Slide numbers are cited as I-, II- or III-;
   a few sections also draw on slides from the other two parts. Section ids are unchanged from the combined lecture.
   Covers: BP measurement, home and ambulatory monitoring, diagnostic criteria and staging, vascular, cardiac, CNS and renal effects, drugs and substances that raise BP, history and exam, and work-up. */
(function(){
"use strict";
function q(p,a,w,e){return {prompt:p,choices:[a].concat(w),correct:0,explanation:e};}
function c(t,h,v,tests,applies){return {title:t,html:h,coverage:v,test:tests,apply:applies};}
function s(id,t,desc,units){var r={id:id,title:t,description:desc,cards:[],test:[],apply:[]};units.forEach(function(x,i){r.cards.push({title:x.title,html:x.html,coverage:x.coverage});['test','apply'].forEach(function(m){x[m].forEach(function(z){z.card=i;r[m].push(z);});});});return r;}
function hy(x){return '<div class="box-hy"><span class="lbl">High yield</span>'+x+'</div>';}
function mn(x){return '<div class="box-mnemonic"><span class="lbl">Mnemonic</span>'+x+'</div>';}
function cl(x){return '<p><em>Clarification (standard reference, not on the slides):</em> '+x+'</p>';}
function tbl(head,rows){return '<table class="learn-table"><tr>'+head.map(function(h){return '<th>'+h+'</th>';}).join('')+'</tr>'+rows.map(function(r){return '<tr>'+r.map(function(d){return '<td>'+d+'</td>';}).join('')+'</tr>';}).join('')+'</table>';}
function ul(items){return '<ul>'+items.map(function(i){return '<li>'+i+'</li>';}).join('')+'</ul>';}

window.HYPERTENSION_PART2_OBJECTIVES=[

/* ---------------- Objective 4 ---------------- */
s('04-bp-measurement','4. Proper blood pressure measurement','Objective 4. Part II slides 6–10, 14.',[
c('Cuff size',
'<p>Use an <strong>appropriately sized cuff</strong>; the slide states the bladder should be <strong>80% of the arm</strong>.</p>'+
tbl(['Arm circumference','Usual cuff'],[['22–26 cm','Small adult'],['27–34 cm','Adult'],['35–44 cm','Large adult'],['45–52 cm','Adult thigh']])+
cl('the bladder <em>length</em> should encircle about 80% of the arm <em>circumference</em> (the slide says “arm length”).')+
hy('Cuff too small → falsely <strong>high</strong> reading (+6–18/4–13). Too large → about 7/5 off.'),
['cuff-size'],
[q('Which cuff is usually appropriate for an arm circumference of 35–44 cm?','Large adult',['Small adult','Adult','Adult thigh'],'22–26 small adult; 27–34 adult; 35–44 large adult; 45–52 adult thigh.'),
q('Using a cuff that is too small for the arm makes the reading:','Falsely high',['Falsely low','Accurate if the arm is at heart level','Unchanged for systolic only'],'An undersized cuff overestimates BP by about 6–18/4–13 mmHg.')],
[q('A patient with a 46-cm arm circumference is measured with a standard adult cuff and reads 158/96. What is the best next step?','Repeat with an adult thigh cuff',['Diagnose stage 2 hypertension','Repeat with a small adult cuff','Measure on the forearm with the same cuff'],'A 45–52 cm arm needs an adult thigh cuff; a small cuff falsely elevates BP.')]),

c('Preparation and positioning',
ul(['No <strong>exercise, caffeine, or smoking for 30 minutes</strong>; empty bladder','Seated, <strong>feet flat</strong>, <strong>back supported</strong>, rested <strong>at least 5 minutes</strong>','Cuff on a <strong>bare arm</strong> (a rolled-up sleeve acts as a tourniquet)','Arm supported <strong>at heart level</strong> — otherwise BP reads <strong>10–12 mmHg higher</strong> from hydrostatic pressure','<strong>No talking</strong> by patient or staff','Ideal: automated oscillometric device with no staff in the room'])+
tbl(['Error','Typical BP change'],[['Not resting 5+ minutes','12/6'],['Back unsupported','6/8'],['Talking','<strong>17/13</strong> (largest)']]),
['patient-prep','positioning','no-talking'],
[q('For how long should a patient avoid caffeine, exercise, and smoking before an office BP?','30 minutes',['5 minutes','2 hours','12 hours'],'No exercise, caffeine, or smoking for 30 minutes beforehand.'),
q('If the arm hangs below heart level, BP reads about how much higher?','10–12 mmHg',['2–3 mmHg','25–30 mmHg','It reads lower, not higher'],'An unsupported, dependent arm adds 10–12 mmHg of hydrostatic pressure.'),
q('Which measurement error produces the largest BP change in the lecture’s table?','Talking during measurement (about 17/13)',['Back unsupported (about 6/8)','Not resting 5 minutes (about 12/6)','Cuff too large (about 7/5)'],'Talking raises BP about 17/13 mmHg.')],
[q('A medical assistant checks BP over a rolled-up sweater sleeve while chatting with the patient, who just walked in. Which correction matters most?','Bare arm, 5 minutes seated rest, and no talking',['Switch to the other arm only','Take a single reading quickly before the patient relaxes','Have the patient lie supine with arm at the side'],'Rolled sleeves act as a tourniquet; rest and silence are required for an accurate reading.')]),

c('Both arms, repeated readings, and orthostatics',
ul(['At least <strong>2 readings 1–2 minutes apart</strong>, averaged','Measure <strong>both arms at the initial visit</strong>; if they differ, use the arm with the <strong>higher</strong> reading going forward','Orthostatics (especially older adults): 5 min supine, then <strong>1–3 minutes after standing</strong>','Orthostatic hypotension: systolic drop of <strong>20 mmHg</strong> and/or diastolic drop of <strong>10 mmHg</strong>']),
['both-arms','orthostatic','measurement-errors'],
[q('If BP differs between arms at the first visit, which arm should be used for future readings?','The arm with the higher reading',['The arm with the lower reading','The dominant arm','Alternate arms each visit'],'Use the higher-reading arm for follow-up measurements.'),
q('Which postural change defines orthostatic hypotension in the lecture?','Systolic drop of 20 mmHg and/or diastolic drop of 10 mmHg',['Systolic drop of 10 mmHg and/or diastolic drop of 5 mmHg','Any drop in systolic pressure','Heart rate rise of 10 bpm alone'],'SBP ↓20 and/or DBP ↓10 on standing.')],
[q('A 78-year-old on three antihypertensives reports dizziness on rising. Supine BP 142/80; at 2 minutes standing 118/72. What do you conclude?','Orthostatic hypotension (systolic drop of 24 mmHg)',['Normal postural response','White coat hypertension','Isolated diastolic hypertension'],'A systolic drop of at least 20 mmHg within 1–3 minutes of standing meets the definition.')])
]),

/* ---------------- Objective 5 ---------------- */
s('05-abpm-hbpm','5. Ambulatory and home BP monitoring vs office monitoring','Objective 5. Part II slides 5, 11–15, 22.',[
c('Home BP monitoring (HBPM)',
ul(['Verify the home device’s accuracy <strong>in the office</strong>','Seated, feet flat, arm supported, after more than 5 minutes’ rest','Measure for <strong>2 weeks after a medication change</strong> or <strong>1 week before a visit</strong>','Twice in the <strong>morning before medications</strong> and twice in the <strong>evening before dinner</strong>, 1 minute apart; store in device memory or on paper','Do not use for diagnosis/management if it cannot be done properly'])+
'<p><strong>Benefits:</strong> shows response to therapy, may improve adherence, and helps evaluate <strong>white coat hypertension</strong>.</p>',
['hbpm-technique','hbpm-utility'],
[q('When should a patient record home BP readings in relation to medication?','In the morning before taking medication and in the evening before dinner',['Only at bedtime after all medications','One hour after each dose','Only when symptomatic'],'Twice in the morning before meds and twice in the evening before dinner, 1 minute apart.'),
q('Before relying on a patient’s home BP log, what should the clinician do?','Verify the home device’s accuracy in the office',['Ask the patient to buy a wrist cuff','Compare it with a single ER reading','Have the patient average only the lowest values'],'The accuracy of the home device should be verified in the clinician’s office.')],
[q('A patient’s lisinopril dose was increased today. For how long should she track home BP before reassessment?','2 weeks after the medication change',['1 day','6 months','Only the week before her annual exam'],'HBPM is done for 2 weeks after a medication change or 1 week before a visit.')]),

c('Ambulatory BP monitoring (ABPM)',
ul(['<strong>Preferred method</strong> for diagnosing HTN and white coat hypertension','<strong>Predicts target-organ damage and CV events better than office BP</strong>','Readings every <strong>15–20 min by day</strong> and <strong>30–60 min during sleep</strong> over 24 hours','The <strong>only</strong> method that reliably obtains <strong>nocturnal readings</strong>','Limitation in the US: insurance coverage'])+
'<p><strong>Non-dippers:</strong> BP normally falls about 15% (10–20%) during sleep; absence of this dip confers extra CV risk and is readily detected <strong>only on ABPM</strong>.</p>',
['abpm-technique','abpm-utility','non-dippers','white-coat'],
[q('Which is the only BP method that can reliably obtain nocturnal readings?','Ambulatory BP monitoring',['Home BP monitoring','Automated office BP','Manual auscultatory office BP'],'ABPM is the only method that reliably captures nighttime BP.'),
q('How often does ABPM typically record BP during sleep?','Every 30–60 minutes',['Every 1–2 minutes','Every 15–20 minutes','Every 4 hours'],'Daytime every 15–20 minutes; during sleep every 30–60 minutes.'),
q('A “non-dipper” is a patient whose BP:','Fails to fall during sleep',['Falls excessively on standing','Is high only in the office','Is higher in the left arm'],'Normal BP drops ~15% at night; non-dippers lack this decline and carry extra CV risk.')],
[q('A patient’s office BP is 148/92 but home readings average 118/74. Which test is preferred to confirm white coat hypertension?','24-hour ambulatory BP monitoring',['Repeat office reading in 1 year','Echocardiogram','Renal artery duplex ultrasound'],'ABPM is the preferred method for diagnosing white coat hypertension.')]),

c('Office vs out-of-office comparison and equivalent values',
tbl(['Method','Strengths / limits'],[
['Office (OBPM)','At least 2 readings 1–2 min apart; confirm in the other arm; most prone to technique error and white coat effect'],
['HBPM','Needs an accurate, validated device; shows response to therapy; improves adherence; useful for white coat HTN'],
['ABPM','Preferred for diagnosis; best predictor of organ damage/events; nocturnal and non-dipper data; insurance barrier']])+
tbl(['Stage','Clinic','HBPM / daytime ABPM','Nighttime ABPM','24-h ABPM'],[
['Elevated','120–129/&lt;80','120/80','100/65','115/75'],
['Stage 1','130–139/80–89','130/80','110/65','125/75'],
['Stage 2','140/90','<strong>135/85</strong>','120/70','130/80'],
['Single-visit dx with organ damage','160/100','145/90','140/85','145/90']])+
hy('Out-of-office monitoring (HBPM or ABPM) is preferred over office readings when making the diagnosis.'),
['office-comparison','comparable-values'],
[q('A clinic BP of 140/90 corresponds to what home BP threshold?','135/85',['140/90','130/80','120/70'],'Stage 2 equivalents: clinic 140/90 = HBPM and daytime ABPM 135/85.'),
q('Which method best predicts target-organ damage and cardiovascular events?','Ambulatory BP monitoring',['Single office reading','Home BP monitoring with a wrist cuff','Orthostatic office readings'],'ABPM predicts organ damage and CV events better than office BP.')],
[q('A patient’s 24-hour ABPM average is 131/81. Which category does this correspond to?','Stage 2 hypertension (24-h threshold 130/80)',['Elevated BP','Normal BP','Stage 1 hypertension only'],'For 24-h ABPM, stage 2 corresponds to 130/80 (stage 1 = 125/75).')])
]),

/* ---------------- Objective 6 ---------------- */
s('06-diagnostic-criteria','6. Diagnostic criteria for hypertension','Objective 6. Part II slides 5, 15–20.',[
c('Standard diagnostic criteria',
'<p>BP varies widely, so a <strong>single reading is almost never diagnostic</strong>.</p>'+
ul(['<strong>Average of 2 or more seated readings</strong> 1–2 minutes apart, on <strong>2 or more outpatient visits</strong>','<strong>Out-of-office monitoring (ABPM or HBPM) is preferred</strong> to confirm','If out-of-office monitoring is impossible, repeat office readings within <strong>1–2 weeks</strong>; the follow-up visit is about <strong>2 weeks</strong> later'])+
hy('Threshold for HTN: average ≥130 systolic or ≥80 diastolic.'),
['average-readings','out-of-office-confirmation'],
[q('The clinical criteria for hypertension require the average of 2 or more seated readings on how many visits?','2 or more outpatient visits',['1 visit','3 or more visits within 1 day','5 visits over 6 months'],'Average ≥2 seated readings on ≥2 outpatient visits.'),
q('If home or ambulatory monitoring is not possible, when should office BP be repeated after an elevated screening value?','Within 1–2 weeks',['Within 24 hours','In 6 months','In 1 year'],'Repeat office readings within 1–2 weeks of the initial screen.')],
[q('A 44-year-old’s screening BP is 138/86. He has no symptoms or organ damage. What is the best next step?','Confirm with out-of-office (home or ambulatory) monitoring and recheck in about 2 weeks',['Diagnose stage 1 hypertension today','Start two antihypertensives today','Reassure and recheck in 5 years'],'One elevated reading is not diagnostic; confirm with ABPM/HBPM and follow up in ~2 weeks.')]),

c('Diagnosis at a single visit',
'<p>HTN can be diagnosed <strong>without confirmatory readings</strong> only when:</p>'+
ul(['BP <strong>≥180/≥120</strong> (hypertensive urgency/emergency), or','Screening BP <strong>≥160/≥100</strong> with <strong>known target-organ damage</strong>: CAD, HF, LVH, stroke, hypertensive retinopathy, CKD']),
['single-visit-exceptions'],
[q('Which screening BP allows a hypertension diagnosis at a single visit in a patient with known target-organ damage?','160/100 or higher',['130/80 or higher','140/90 or higher','180/120 or higher only'],'≥160/≥100 plus known organ damage (or any ≥180/≥120) is diagnostic at once.'),
q('Which is listed as target-organ damage that allows a single-visit diagnosis at 160/100 or higher?','Left ventricular hypertrophy',['Hyperlipidemia','Obesity','Tobacco use'],'Organ damage: CAD, HF, LVH, stroke, hypertensive retinopathy, CKD.')],
[q('A 62-year-old with prior stroke has a first-visit BP of 164/102 (repeated). What is correct?','Hypertension can be diagnosed today',['He needs two more visits before diagnosis','He must do 24-hour ABPM before any diagnosis','This is white coat hypertension until proven otherwise'],'≥160/≥100 with known target-organ damage (stroke) is diagnostic at a single visit.')]),

c('Visit 2 algorithm and white coat hypertension',
ul(['Visit 1: H&amp;P and labs. If BP ≥130/80 (not meeting single-visit criteria), arrange out-of-office assessment — ABPM preferred','Visit 2: daytime ABPM or HBPM <strong>≥130/80 → HTN diagnosed</strong>','If out-of-office readings are normal → <strong>white coat hypertension</strong>; periodically reassess','If ABPM/HBPM unavailable: office average ≥130/80 on additional readings → HTN'])+
'<p><strong>Worked example (II-18–20):</strong> average the paired readings per arm, then average the week. Right arm 138/74, left 129/68 → use the higher arm → <strong>stage 1 hypertension</strong>. Readings taken after caffeine are discarded.</p>',
['white-coat-hypertension','worked-example'],
[q('Office BP averages 142/88, but daytime ABPM averages 122/76. What is the diagnosis?','White coat hypertension',['Stage 2 hypertension','Masked hypertension requiring treatment','Isolated diastolic hypertension'],'Normal out-of-office readings with elevated office readings = white coat hypertension.'),
q('At visit 2, which out-of-office result confirms hypertension?','Daytime ABPM or home BP average of 130/80 or higher',['Any single home reading above 140/90','Nighttime ABPM of 90/60','An office reading taken right after coffee'],'Daytime ABPM or HBPM ≥130/≥80 confirms the diagnosis.')],
[q('Over a week of nurse checks, a patient’s right-arm average is 138/74 and left-arm average 129/68. How do you classify her BP?','Stage 1 hypertension, using the higher (right) arm',['Elevated BP, using the left arm','Normal BP, averaging both arms','Stage 2 hypertension'],'Use the higher arm; 138/74 falls in stage 1 (systolic 130–139).')])
]),

/* ---------------- Objective 7 ---------------- */
s('07-stages','7. Stages of hypertension, elevated BP, isolated systolic/diastolic HTN','Objective 7. Part I slide 2; Part II slides 4, 21, 23.',[
c('AHA/ACC adult BP classification',
tbl(['Category','Systolic','','Diastolic'],[
['Normal','&lt;120','and','&lt;80'],
['Elevated BP','120–129','and','&lt;80'],
['Stage 1 HTN','130–139','or','80–89'],
['Stage 2 HTN','≥140','or','≥90'],
['Hypertensive urgency / emergency (organ damage)','&gt;180','or','&gt;120']])+
hy('“Elevated” requires a diastolic below 80. Any diastolic of 80–89 is already stage 1.'),
['normal','elevated','stage-1','stage-2'],
[q('What systolic range defines elevated BP (with diastolic below 80)?','120–129',['110–119','130–139','140–159'],'Elevated BP = 120–129 and below 80.'),
q('Stage 1 hypertension is defined as:','Systolic 130–139 or diastolic 80–89',['Systolic 120–129 and diastolic below 80','Systolic 140 or higher or diastolic 90 or higher','Systolic 140–159 and diastolic 90–99'],'Stage 1 = 130–139 or 80–89.'),
q('Stage 2 hypertension begins at:','Systolic 140 or diastolic 90',['Systolic 130 or diastolic 80','Systolic 160 or diastolic 100','Systolic 180 or diastolic 120'],'Stage 2 = ≥140 or ≥90.'),
q('Normal blood pressure is defined as:','Systolic below 120 and diastolic below 80',['Systolic below 130 and diastolic below 85','Systolic below 140 and diastolic below 90','Systolic below 120 or diastolic below 80'],'Normal requires both SBP under 120 and DBP under 80.')],
[q('A 35-year-old has a confirmed average BP of 126/78. How is it classified?','Elevated BP',['Normal BP','Stage 1 hypertension','Isolated systolic hypertension'],'SBP 120–129 with DBP below 80 = elevated BP.'),
q('A confirmed average BP is 142/84. How is it classified?','Stage 2 hypertension',['Stage 1 hypertension','Elevated BP','Isolated diastolic hypertension'],'SBP ≥140 places it in stage 2 regardless of the diastolic value.')]),

c('Isolated systolic/diastolic HTN and classification rules',
tbl(['Type','Systolic','','Diastolic'],[['Isolated systolic HTN','≥130','and','&lt;80'],['Isolated diastolic HTN','&lt;130','and','≥80']])+
ul(['If systolic and diastolic fall in different categories, the <strong>higher category</strong> determines severity','Definitions apply to adults <strong>off antihypertensives</strong> and <strong>not acutely ill</strong>','Once on medication, a patient is <strong>always called hypertensive</strong> regardless of BP — unless lifestyle change lets them come off drugs with normal BP','Younger patients: <strong>diastolic</strong> BP tracks CV risk best. Older adults (over 60): <strong>systolic</strong> is the main risk determinant; isolated systolic HTN with a wide pulse pressure reflects vascular non-compliance']),
['isolated-systolic','isolated-diastolic','higher-category-rule'],
[q('Isolated systolic hypertension is defined as:','Systolic 130 or higher and diastolic below 80',['Systolic below 130 and diastolic 80 or higher','Systolic 140 or higher and diastolic 90 or higher','Systolic 120–129 and diastolic below 80'],'ISH: SBP ≥130 with DBP below 80.'),
q('When systolic and diastolic readings fall into different categories, which determines the stage?','The higher category',['The lower category','The systolic value always','The diastolic value always'],'The higher of the two categories sets the severity.'),
q('In adults over 60, which BP component is the primary determinant of cardiovascular risk?','Systolic BP',['Diastolic BP','Mean arterial pressure','Heart rate'],'Older adults: SBP; younger adults without comorbidities: DBP.')],
[q('A 72-year-old’s confirmed BP is 156/72 with a wide pulse pressure. What is the best description?','Isolated systolic hypertension from vascular non-compliance',['Isolated diastolic hypertension','White coat hypertension','Normal BP for age'],'Older adults often have ISH with wide pulse pressure from stiff arteries.'),
q('A 38-year-old’s confirmed BP is 124/86. How is it classified?','Isolated diastolic hypertension (stage 1 by the diastolic value)',['Elevated BP','Normal BP','Isolated systolic hypertension'],'SBP below 130 with DBP ≥80 = isolated diastolic HTN; the higher category (stage 1) sets severity.'),
q('A patient on amlodipine has had normal BP for 2 years. How is she classified?','Hypertensive (controlled), because she remains on medication',['Normotensive','Elevated BP','Resolved hypertension'],'Patients on antihypertensives are always referred to as hypertensive.')])
]),

/* ---------------- Objective 11 ---------------- */
s('11-remodeling','11. Vascular and cardiac remodeling in uncontrolled hypertension','Objective 11. Part II slides 26–34.',[
c('Natural history and vascular remodeling',
tbl(['Phase','Change'],[
['Prehypertension','Asymptomatic ↑ cardiac output, intermittently high BP'],
['Early HTN','Persistently ↑ peripheral resistance'],
['Established HTN','<strong>Vascular remodeling</strong>, progressive damage'],
['Complicated HTN','End-organ damage']])+
'<p><strong>Vascular remodeling:</strong> chronic HTN (↑ afterload) → <strong>↑ arterial wall stiffness</strong> (less compliance) → <strong>↑ systolic BP</strong> and <strong>widened pulse pressure</strong>.</p>'+
'<p>Complications: CKD progression, LVH, HF (systolic and diastolic), ischemic stroke, intracerebral hemorrhage, ischemic heart disease, hypertensive retinopathy.</p>',
['natural-history','vascular-remodeling'],
[q('Vascular remodeling from chronic hypertension produces:','Stiffer arteries, higher systolic BP, and wider pulse pressure',['More compliant arteries and lower systolic BP','Narrower pulse pressure and lower afterload','Venous dilation with lower diastolic BP only'],'Chronic HTN stiffens arteries, raising SBP and widening pulse pressure.'),
q('In the natural history of hypertension, early hypertension is characterized by:','Persistently increased peripheral resistance',['Intermittent increases in cardiac output only','End-organ damage','Vascular remodeling with progressive damage'],'Prehypertension = ↑CO; early = persistent ↑PVR; established = remodeling; complicated = organ damage.')],
[q('A 70-year-old with 30 years of poorly controlled HTN has BP 170/70. Which process best explains the wide pulse pressure?','Arterial stiffening from vascular remodeling',['Aortic stenosis from rheumatic fever','Hypovolemia','Increased arterial compliance'],'Chronic HTN reduces arterial compliance, raising SBP and widening pulse pressure.')]),

c('Cardiac remodeling: LVH and diastolic dysfunction',
'<p>↑ Afterload <strong>reduces coronary perfusion pressure</strong> and <strong>increases myocardial O2 consumption</strong> → <strong>LV myocyte hypertrophy (LVH)</strong> = hypertensive heart disease.</p>'+
ul(['<strong>Diastolic dysfunction occurs first</strong>: the stiff, hypertrophied LV relaxes incompletely','↑ LV end-diastolic pressure → ↑ left atrial pressure → <strong>LA enlargement</strong>','Eventually LVH encroaches on the cavity → ↓ filling and stroke volume → <strong>systolic function fails</strong>'])+
hy('LVH is associated with increased risk of premature death and morbidity. Exam clue: <strong>S4</strong>, displaced/sustained apical impulse.'),
['lvh','diastolic-dysfunction'],
[q('Which type of ventricular dysfunction occurs first in hypertensive heart disease?','Diastolic dysfunction',['Systolic dysfunction','Right ventricular failure','Restrictive pericardial disease'],'Incomplete relaxation of the stiff, hypertrophied LV causes diastolic dysfunction first.'),
q('Increased afterload from hypertension affects the myocardium by:','Lowering coronary perfusion pressure and raising myocardial oxygen consumption',['Raising coronary perfusion pressure and lowering oxygen demand','Dilating the LV cavity immediately','Reducing myocardial wall thickness'],'Higher afterload decreases coronary perfusion pressure and increases MVO2, driving LVH.')],
[q('A 58-year-old with long-standing HTN has exertional dyspnea, an S4, and echo showing a thick LV wall with normal EF. What is the mechanism?','Impaired relaxation of a hypertrophied LV (diastolic dysfunction)',['Dilated LV with reduced contractility','Severe aortic regurgitation','Constrictive pericarditis'],'LVH with preserved EF and an S4 = diastolic dysfunction (HFpEF).')]),

c('Hypertensive heart disease continuum',
'<p>Hypertensive heart disease progresses along a continuum:</p>'+
'<ol><li>LVH and <strong>HFpEF</strong> (diastolic)</li><li>Left atrial enlargement</li><li><strong>HFrEF</strong> (systolic heart failure)</li><li>Aortic root dilatation and valve incompetence</li><li>Atrial and ventricular arrhythmias</li><li>Ischemic heart disease / cardiomyopathy</li></ol>',
['hhd-continuum'],
[q('Which arrhythmia-prone change follows elevated LV end-diastolic pressure in hypertensive heart disease?','Left atrial enlargement',['Right atrial thinning','Pericardial effusion','Mitral stenosis'],'Higher LVEDP raises LA pressure and enlarges the left atrium, predisposing to atrial arrhythmias.'),
q('Late in the hypertensive heart disease continuum, which aortic change can occur?','Aortic root dilatation with valve incompetence',['Aortic coarctation','Bicuspid aortic valve formation','Aortic valve stenosis from calcified rheumatic disease'],'The continuum includes aortic root dilatation and valve incompetence.')],
[q('A patient with years of uncontrolled HTN and known LVH develops new atrial fibrillation. How does this fit the continuum?','LV stiffness raises LA pressure, enlarging the LA and predisposing to atrial arrhythmia',['AF is unrelated to hypertension','AF signals the onset of aortic stenosis','AF is caused by right ventricular hypertrophy'],'LVH → ↑LVEDP → LA enlargement → atrial arrhythmias.')])
]),

/* ---------------- Objective 12 ---------------- */
s('12-cns-renal-autoregulation','12. Effects of uncontrolled HTN on CNS and renal autoregulation','Objective 12. Part II slides 35–40.',[
c('Cerebral autoregulation',
'<p><strong>Cerebral autoregulation</strong> keeps cerebral blood flow constant across a wide range of perfusion pressures: flow is constant at <strong>MAP 60–150 mmHg</strong>.</p>'+
ul(['↓ Systemic BP → cerebral arteriolar <strong>vasodilation</strong>','↑ Systemic BP → arteriolar <strong>vasoconstriction</strong> (prevents hyperperfusion)','<strong>CPP = MAP − ICP</strong>'])+
'<p>A <strong>rapid BP rise</strong> in a normotensive or mildly hypertensive patient can cause hyperperfusion, ↑ ICP, cerebral edema, carotid/cerebral dissection, ischemic stroke, or hemorrhagic stroke.</p>',
['cerebral-autoregulation','acute-rise-effects'],
[q('Over what MAP range is cerebral blood flow normally held constant?','60–150 mmHg',['70–100 mmHg','100–200 mmHg','40–80 mmHg'],'Cerebral flow is constant with MAP 60–150 mmHg.'),
q('Cerebral perfusion pressure equals:','MAP minus intracranial pressure',['Systolic BP minus diastolic BP','MAP times cardiac output','Intracranial pressure minus CVP'],'CPP = MAP − ICP.'),
q('When systemic BP rises, normal cerebral autoregulation responds with:','Arteriolar vasoconstriction',['Arteriolar vasodilation','Increased CSF production','Reduced ICP from venous dilation'],'Constriction prevents hyperperfusion; dilation preserves flow when BP falls.')],
[q('A previously normotensive patient abruptly develops BP 210/130 after cocaine use and becomes confused. What CNS process is most likely?','Hyperperfusion with cerebral edema and raised ICP',['Chronic rightward shift of autoregulation','Cerebral hypoperfusion from low MAP','Isolated subdural hematoma from a fall'],'Rapid rises in normotensive patients overwhelm autoregulation, causing hyperperfusion and edema.')]),

c('Chronic HTN shifts the autoregulation curve',
'<p>With chronic HTN, the brain becomes <strong>accustomed to high perfusion pressures</strong> and treats them as normal. Cerebral vascular resistance increases, so these patients are <strong>more prone to ischemia</strong> when flow falls — especially if BP is lowered <strong>rapidly</strong> into the normal range.</p>'+
hy('In long-standing HTN, lowering BP too fast can be as dangerous as leaving it high. Normalize <strong>slowly over a few weeks</strong> while titrating drugs so autoregulation resets.'),
['autoregulation-shift','slow-lowering'],
[q('Why are patients with long-standing hypertension at risk when BP is lowered rapidly to normal?','Their cerebral autoregulation is reset higher, so normal pressures cause ischemia',['Their baroreceptors no longer function','They develop reflex hypertension','Their cerebral vessels cannot constrict'],'Chronic HTN raises cerebrovascular resistance; rapid normalization can cause cerebral ischemia.'),
q('Over what timeframe should BP be normalized in a patient with long-standing hypertension (not in crisis)?','Over a few weeks with gradual titration',['Within 1 hour','Within 24 hours','Over several years'],'Allow BP to normalize slowly over weeks so autoregulation can return toward normal.')],
[q('A 70-year-old with untreated HTN for 20 years presents at 182/104 without symptoms or organ damage. A colleague suggests IV medication to reach 120/80 today. What is the concern?','Rapid lowering risks cerebral ischemia because autoregulation is reset',['There is no risk; faster is better','Rapid lowering causes rebound hyperkalemia','The patient will develop white coat hypertension'],'Chronically hypertensive brains need gradual lowering over weeks.')]),

c('Renal autoregulation and kidney mechanisms',
'<p>Chronic HTN causes <strong>sclerotic changes in small renal arteries</strong> → <strong>endothelial dysfunction</strong> and <strong>impaired vasodilation</strong> → loss of renal autoregulation.</p>'+
hy('When renal autoregulation fails, <strong>intraglomerular pressure varies directly with systemic pressure</strong> — the glomerulus is unprotected from BP swings.')+
tbl(['Renal setting','Main HTN mechanism'],[
['Glomerular disease (nephrotic/nephritic)','<strong>Volume expansion</strong>'],
['Renovascular disease (RAS)','Near-constant <strong>RAAS activation</strong> from ischemia'],
['Chronic renal failure','<strong>Both</strong> volume expansion and RAAS activation']]),
['renal-autoregulation','renal-mechanisms'],
[q('When chronic hypertension disrupts renal autoregulation, intraglomerular pressure:','Varies directly with systemic arterial pressure',['Stays constant regardless of BP','Falls as systemic pressure rises','Depends only on ureteral pressure'],'Without autoregulation, glomerular pressure tracks systemic pressure.'),
q('What is the main mechanism of hypertension in chronic renal failure according to the lecture?','Combined volume expansion and RAAS activation',['Catecholamine excess','Glucocorticoid excess','Isolated sympathetic withdrawal'],'Volume expansion plus RAAS activation drives HTN in chronic renal failure.')],
[q('A patient with nephrotic syndrome develops edema and new hypertension. Which mechanism predominates?','Volume expansion',['Constant RAAS activation from renal ischemia','Pheochromocytoma-like catecholamine release','Reduced cardiac output'],'In glomerular disease, volume overload is the key driver.')])
]),

/* ---------------- Objective 13 ---------------- */
s('13-medications','13. Common medications that raise BP: NSAIDs, pseudoephedrine, OCPs, triptans','Objective 13. Part I slides 41, 65; Part II slide 51.',[
c('NSAIDs, pseudoephedrine, OCPs, and migraine medications',
tbl(['Medication','Contribution to HTN'],[
['<strong>NSAIDs / COX-2 inhibitors</strong>','Raise BP about <strong>5 mmHg</strong> on average; best avoided in borderline or elevated BP'],
['<strong>Pseudoephedrine / ephedra</strong>','Sympathomimetic decongestant; raises BP'],
['<strong>OCPs (high-dose) / estrogens</strong>','Listed cause of drug-induced HTN; ask about OCPs in every new diagnosis'],
['<strong>Migraine medications (triptans)</strong>','Listed cause of drug-induced HTN']])+
cl('NSAIDs cause sodium and water retention by blocking renal prostaglandins; estrogen increases hepatic angiotensinogen production; triptans are serotonin 5-HT1B/1D agonists that cause vasoconstriction.')+
hy('Before labeling someone with primary HTN, review OTC and prescription drugs: NSAIDs, decongestants, OCPs, migraine meds.'),
['nsaids','pseudoephedrine','ocps','triptans'],
[q('On average, NSAIDs raise blood pressure by about:','5 mmHg',['1 mmHg','15 mmHg','25 mmHg'],'NSAIDs raise BP about 5 mmHg on average.'),
q('Pseudoephedrine raises blood pressure because it is a:','Sympathomimetic',['Mineralocorticoid','Calcium channel opener','Loop diuretic'],'Ephedra/pseudoephedrine are sympathomimetics.'),
q('Which hormonal medication is a listed cause of drug-induced hypertension?','High-dose oral contraceptives',['Levothyroxine at replacement dose','Progestin-only IUD','Low-dose vaginal estrogen cream'],'High-dose OCs/estrogens are listed causes.'),
q('Which drug class used for migraine is listed as a cause of drug-induced hypertension?','Triptans (migraine medications)',['Acetaminophen','Ondansetron','Gabapentin'],'Migraine meds are on the prescription-drug list for drug-induced HTN.')],
[q('A 52-year-old with knee osteoarthritis takes naproxen daily; her BP has crept from 128/78 to 136/84. What is the best first step?','Review and minimize the NSAID before labeling or escalating HTN treatment',['Add a second antihypertensive immediately','Order renal angiography','Ignore it; NSAIDs do not affect BP'],'NSAIDs raise BP ~5 mmHg and should be avoided in borderline/elevated BP.'),
q('A 28-year-old with new stage 1 HTN takes a high-dose combined OCP and uses sumatriptan often. Which history item matters most for the HTN evaluation?','Both medications are listed causes of drug-induced HTN',['Neither medication affects BP','Only the triptan matters','Only an IUD could matter'],'High-dose OCs and migraine meds both appear on the drug-induced HTN list.'),
q('A man with a cold takes an OTC decongestant and his BP is 152/94. Which ingredient is the likely culprit?','Pseudoephedrine',['Dextromethorphan','Guaifenesin','Acetaminophen'],'Pseudoephedrine is a sympathomimetic that raises BP.')]),

c('Other prescription-drug causes and risky situations',
ul(['Psychiatric drugs: <strong>SNRIs, tricyclic antidepressants</strong>','<strong>Carbamazepine</strong>, <strong>metoclopramide</strong>','<strong>Abrupt discontinuation</strong> of a β-blocker or a centrally acting α-agonist (clonidine) → rebound HTN','Giving a <strong>β-blocker without an α-blocker first</strong> in cocaine-induced HTN or pheochromocytoma (unopposed α vasoconstriction)']),
['other-prescription-drugs','withdrawal-situations'],
[q('Abrupt discontinuation of which drug is a classic cause of rebound hypertension?','Clonidine',['Amlodipine','Hydrochlorothiazide','Lisinopril'],'Abrupt stop of a central α2 agonist or β-blocker causes rebound HTN.'),
q('Which psychiatric drug class is listed as a cause of drug-induced hypertension?','SNRIs',['SSRIs','Benzodiazepines','Lithium'],'SNRIs and TCAs appear on the list.')],
[q('A patient ran out of clonidine 2 days ago and now has BP 196/112 with anxiety and tremor. What is the most likely explanation?','Rebound hypertension from abrupt clonidine discontinuation',['Pheochromocytoma','Primary hyperaldosteronism','White coat hypertension'],'Abrupt clonidine withdrawal causes significant rebound HTN.')])
]),

/* ---------------- Objective 14 ---------------- */
s('14-substances','14. Alcohol, methamphetamine, cocaine, and St. John’s wort','Objective 14. Part I slides 39, 65; Part II slides 51–52; Part III slides 10, 12.',[
c('Alcohol',
ul(['More than <strong>2 drinks/day</strong> raises the risk of HTN, probably via ↑ <strong>plasma catecholamines</strong>','HTN is hard to control with more than <strong>40 g ethanol (2 drinks) daily</strong> or <strong>binge</strong> drinking','Chronic alcohol use is a <strong>common secondary cause</strong> and can be very difficult to treat','Limit: <strong>2 drinks/day for men, 1 for women</strong> and lighter-weight persons (SBP ↓ 2–4 mmHg)']),
['alcohol'],
[q('Alcohol most likely raises blood pressure by increasing:','Plasma catecholamines',['Aldosterone','Blood viscosity','Thyroid hormone'],'Alcohol raises BP perhaps by increasing plasma catecholamines.'),
q('Hypertension becomes difficult to control at more than how much ethanol daily?','40 g (about 2 drinks)',['10 g','100 g','Any amount at all'],'More than 40 g/day or binge drinking makes HTN hard to control.')],
[q('A 55-year-old drinks 4–5 beers nightly and has BP above goal on two drugs. What is the most important intervention?','Reduce alcohol to 2 drinks/day or fewer',['Add a third antihypertensive only','Order a renal angiogram','Switch beer to wine at the same volume'],'Excess alcohol is a common, hard-to-treat cause; moderation is key.')]),

c('Cocaine and methamphetamine',
ul(['<strong>Illicit sympathomimetics</strong>: cocaine, methamphetamine (also cocaine withdrawal)','Do <strong>not</strong> give a <strong>β-blocker without an α-blocker first</strong> in cocaine-induced HTN — unopposed α stimulation worsens vasoconstriction','Ask about illicit drugs when excluding secondary causes']),
['cocaine','methamphetamine'],
[q('Cocaine and methamphetamine raise BP because they are:','Sympathomimetics',['Mineralocorticoids','Calcium channel blockers','Glucocorticoids'],'Both are illicit sympathomimetic drugs.'),
q('Which drug mistake can worsen cocaine-induced hypertension?','Giving a beta-blocker without first giving an alpha-blocker',['Giving a benzodiazepine','Giving IV fluids','Giving an alpha-blocker first'],'Unopposed α activity after β-blockade worsens vasoconstriction.')],
[q('A 26-year-old has chest pain, BP 198/114, and dilated pupils after methamphetamine use. What category of cause fits?','Illicit sympathomimetic drug use',['Primary hyperaldosteronism','Renovascular hypertension','Essential hypertension'],'Methamphetamine is an illicit sympathomimetic that raises BP.')]),

c('St. John’s wort and other natural products',
'<p>Listed street drugs and natural products that raise BP include:</p>'+
ul(['<strong>St. John’s wort</strong>','Ephedra alkaloids (ma-huang), “herbal ecstasy”, phenylpropanolamine analogs, ergot-containing herbals','<strong>Black licorice</strong> (lowers K+, raises BP)','Nicotine withdrawal, narcotic withdrawal, anabolic steroids, methylphenidate, phencyclidine, ketamine'])+
cl('St. John’s wort has MAO-inhibitor–like activity and induces CYP450 enzymes, so it can raise BP and lower levels of co-prescribed drugs, including some antihypertensives such as CCBs.')+
hy('Always ask about herbal supplements — patients often do not consider them “medications.”'),
['st-johns-wort','other-substances'],
[q('Which herbal product used for depression is listed as a cause of drug-induced hypertension?','St. John’s wort',['Chamomile','Melatonin','Echinacea'],'St. John’s wort is on the natural-product list.'),
q('Which withdrawal state is listed as a cause of hypertension?','Nicotine withdrawal',['Caffeine withdrawal causing hypotension','Benzodiazepine initiation','Acetaminophen withdrawal'],'Nicotine, narcotic, and cocaine withdrawal are listed causes.')],
[q('A patient with newly elevated BP says she takes “only natural things”: St. John’s wort for mood and an herbal weight-loss product with ma-huang. What do you tell her?','Both are listed causes of drug-induced hypertension',['Herbal products cannot affect BP','Only the St. John’s wort could matter','Only prescription drugs need review'],'St. John’s wort and ephedra (ma-huang) are both on the list.')])
]),

/* ---------------- Objective 15 ---------------- */
s('15-history-physical','15. History and physical exam in the patient with hypertension','Objective 15. Part II slides 41–49.',[
c('History: prior events and end-organ symptoms',
'<p>Assess for <strong>end-organ damage</strong> and <strong>modifiable cardiometabolic risk</strong>.</p>'+
'<p><strong>Important prior events:</strong> HF (or its symptoms), OSA, CKD, stroke/TIA, diabetes/glucose intolerance, PAD.</p>'+
tbl(['Organ','Ask about','Possible finding'],[
['Heart','Chest pain, SOB, fatigue, leg swelling','LVH, diastolic/systolic dysfunction, wall-motion abnormality'],
['Brain','Headaches','Cerebral atrophy beyond age, dementia'],
['Kidney','Oliguria, anuria, hematuria, flank pain','CKD on labs'],
['Vessels','Extremity pain, hair loss, pallor, coolness','PAD'],
['Eye','Vision change','Retinopathy']]),
['history-prior-events','end-organ-symptoms'],
[q('Which history item suggests peripheral arterial disease as hypertensive end-organ damage?','Extremity pain with hair loss and cool, pale skin',['Polyuria with thirst','Heat intolerance','Morning headaches only'],'Extremity pain, hair loss, pallor, and coolness suggest PAD.'),
q('Which prior event is listed as important to elicit when diagnosing hypertension?','Stroke or TIA',['Childhood asthma','Appendectomy','Seasonal allergies'],'Prior HF, OSA, CKD, stroke/TIA, diabetes, and PAD matter.')],
[q('A newly hypertensive 60-year-old reports ankle swelling and breathlessness climbing stairs. Which end-organ evaluation does this history prompt?','Heart: assess for LVH and systolic/diastolic dysfunction with EKG or echo',['Eye: dilated retinal exam only','Kidney: renal biopsy','Brain: lumbar puncture'],'Dyspnea and edema suggest cardiac end-organ damage.')]),

c('History clues to secondary causes',
tbl(['History clue','Suggests'],[
['OTC meds, OCPs, EtOH, meth/cocaine','Drug-induced HTN'],
['Elevated creatinine, abdominal masses or bruits, anemia','CKD or RAS'],
['Sweating episodes, labile HTN, headache, palpitations','<strong>Pheochromocytoma</strong>'],
['Heat/cold intolerance, sweating, low energy, brady- or tachycardia','<strong>Thyroid disease</strong>'],
['Heavy snoring, daytime sleepiness','<strong>OSA</strong>'],
['Generalized weakness with hypokalemia','<strong>Hyperaldosteronism</strong>']]),
['secondary-cause-history'],
[q('A history of generalized weakness coupled with hypokalemia suggests:','Hyperaldosteronism',['Pheochromocytoma','Hypothyroidism','Coarctation of the aorta'],'Weakness + hypokalemia points to hyperaldosteronism.'),
q('Abdominal masses or bruits with elevated creatinine and anemia suggest:','CKD or renal artery stenosis',['Pheochromocytoma','Cushing syndrome','OSA'],'These findings suggest a renal (CKD or RAS) cause.')],
[q('A hypertensive patient reports cold intolerance, fatigue, weight gain, and a resting HR of 54. Which secondary cause should you consider?','Thyroid disease',['Pheochromocytoma','Renal artery stenosis','Coarctation of the aorta'],'Temperature intolerance, low energy, and HR changes suggest thyroid disease.')]),

c('Physical exam',
tbl(['System','What to check','Significance'],[
['Vitals','BP, height, weight, <strong>waist circumference</strong>','Staging, obesity'],
['Eyes','<strong>Cotton-wool spots, AV nicking, arteriolar narrowing</strong>, hemorrhages, exudates, papilledema','Hypertensive retinopathy'],
['Vessels','<strong>Radial–femoral delay</strong>','Coarctation'],
['','Weak/absent pedal pulses','PAD'],
['','Carotid, abdominal, or femoral <strong>bruits</strong>','Stenosis/atherosclerosis'],
['Heart','Heaves, <strong>displaced apical impulse</strong>, <strong>S4</strong>','LVH'],
['Lungs','<strong>Rales</strong>','Heart failure'],
['Brain','Neurologic exam','Stroke']]),
['vitals','fundoscopic','vascular-exam','cardiac-exam','lung-neuro'],
[q('Which fundoscopic finding is part of the hypertension exam?','AV nicking',['Cherry-red spot','Drusen','Lisch nodules'],'Look for cotton-wool spots, AV nicking, arteriolar narrowing, hemorrhages, exudates, papilledema.'),
q('A delay in the femoral pulse compared with the radial pulse suggests:','Coarctation of the aorta',['Peripheral arterial disease','Aortic regurgitation','Renal artery stenosis'],'Radial–femoral delay suggests coarctation.'),
q('Which heart sound should you auscultate for in hypertensive heart disease?','S4',['S3 only in children','Opening snap','Pericardial knock'],'An S4 reflects atrial contraction into a stiff, hypertrophied LV.'),
q('Which vital-sign measurement besides BP, height, and weight does the lecture include?','Waist circumference',['Head circumference','Arm span','Grip strength'],'Vitals: BP, height, weight, waist circumference.')],
[q('A hypertensive patient has a laterally displaced, sustained apical impulse and an S4. What does this suggest?','Left ventricular hypertrophy',['Right ventricular failure','Mitral stenosis','Pericardial effusion'],'Heave, displaced PMI, and S4 suggest LVH.'),
q('On exam of a 64-year-old smoker with HTN, you hear a bruit over the left carotid and cannot feel the dorsalis pedis pulses. What do these suggest?','Atherosclerotic disease: carotid stenosis and PAD',['Coarctation of the aorta','Pheochromocytoma','Normal age-related findings'],'Bruits suggest stenosis/atherosclerosis; absent pedal pulses suggest PAD.')])
]),

/* ---------------- Objective 16 ---------------- */
s('16-workup-risk','16. Diagnostic work-up and risk stratification at diagnosis','Objective 16. Part II slides 46–47, 53; Part III slides 6, 96.',[
c('Initial laboratory work-up and EKG',
tbl(['Test','Looking for'],[
['<strong>Urinalysis</strong>','Protein'],
['<strong>Fasting glucose and A1c</strong>','Diabetes'],
['<strong>CBC</strong>','Hematocrit'],
['<strong>Electrolytes</strong>: Na, K, creatinine (eGFR), calcium','CKD, hyperaldosteronism clues'],
['<strong>TSH</strong>','Thyroid disease'],
['<strong>Fasting lipid profile</strong> (12-hour fast)','Dyslipidemia'],
['<strong>Baseline EKG</strong>','<strong>LVH</strong>; consider <strong>echo</strong> if abnormal']]),
['initial-labs','ekg-echo'],
[q('What is the baseline EKG primarily used to assess in new hypertension?','Left ventricular hypertrophy',['Pericarditis','Long QT syndrome','Brugada pattern'],'Baseline EKG assesses for LVH; consider echo if abnormal.'),
q('Which test is part of the initial hypertension laboratory work-up?','TSH',['Serum cortisol','Plasma metanephrines','Renal duplex ultrasound'],'Initial labs: UA, glucose/A1c, CBC, electrolytes with creatinine and calcium, TSH, fasting lipids, EKG.'),
q('In the initial work-up, the urinalysis is mainly looking for:','Protein',['Nitrites','Bilirubin','Ketones'],'UA screens for protein (renal damage).')],
[q('A newly diagnosed hypertensive patient has an EKG with high-voltage QRS complexes and strain pattern. What is the next step?','Echocardiogram to evaluate LVH',['Renal angiogram','Coronary CT calcium score only','No further testing'],'An abnormal baseline EKG suggesting LVH should prompt an echo.')]),

c('Cardiovascular risk stratification',
tbl(['Risk factor','Threshold'],[
['Tobacco use','Cigarettes or chew'],
['Lipids','Elevated LDL or low HDL'],
['Diabetes mellitus','Present'],
['Obesity','BMI ≥30'],
['Physical inactivity','Lack of exercise'],
['Age','<strong>Over 55 men, over 65 women</strong>'],
['Kidney','<strong>eGFR below 60</strong> (stage 3 CKD); <strong>microalbuminuria</strong> (spot urine protein/creatinine)'],
['Family history of premature CAD','<strong>Male relative under 55, female under 65</strong>']])+
'<p>Calculate <strong>10-year CVD risk</strong> with the <strong>PREVENT</strong> calculator (or ASCVD Plus). CVD risk <strong>doubles</strong> for every <strong>20/10 mmHg</strong> above 115/75.</p>',
['cv-risk-factors','risk-calculator'],
[q('A family history of premature CAD means CAD in a male first-degree relative before age:','55',['45','65','75'],'Premature CAD: male relatives under 55, female relatives under 65.'),
q('Which calculator does the lecture recommend for estimating 10-year CVD risk?','PREVENT',['CHA2DS2-VASc','Wells score','HAS-BLED'],'Use the PREVENT (or ASCVD Plus) calculator.'),
q('Cardiovascular risk doubles for every increase of how much above 115/75?','20/10 mmHg',['5/2 mmHg','10/5 mmHg','40/20 mmHg'],'CVD risk doubles with each 20/10 increment above 115/75.')],
[q('A 58-year-old man with new HTN smokes, has BMI 32, eGFR 54, and a sister diagnosed with CAD at 60. Which are CV risk factors by the lecture’s definitions?','All of them: age, smoking, obesity, eGFR below 60, and premature family CAD',['Only smoking','Only age and obesity','None — the sister’s age does not count'],'He is over 55, smokes, BMI ≥30, eGFR below 60, and a female relative with CAD under 65 is premature.')])
])

];
})();
