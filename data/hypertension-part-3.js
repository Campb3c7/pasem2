/* Veal, Hypertension Part III (deck hypertension-part-3). Official objectives 17–24 of the shared
   "Hypertension, Parts I, II and III" list, placed with the deck that teaches them. Slide numbers are cited as I-, II- or III-;
   a few sections also draw on slides from the other two parts. Section ids are unchanged from the combined lecture.
   Covers: BP targets, lifestyle, chronic care, treatment principles and compelling indications, race and pregnancy, every antihypertensive class (split 22a–22l), non-BP uses, and overdose. */
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

window.HYPERTENSION_PART3_OBJECTIVES=[

/* ---------------- Objective 17 ---------------- */
s('17-bp-targets','17. BP targets and treatment indications (AHA/ACC guideline)','Objective 17. Part III slides 6, 18–21, 97–99.',[
c('BP goal',
'<p>The lecture’s objective names the 2017 AHA/ACC guideline; the slides present the current <strong>2025 AHA/ACC</strong> algorithms, which keep the same goal:</p>'+
hy('Treatment goal: <strong>below 130/80</strong> for patients being treated for HTN.')+
'<p>The purpose of lowering BP is to reduce future CVD events, so assess all risk factors and use a risk calculator (PREVENT).</p>',
['bp-goal'],
[q('What is the AHA/ACC blood pressure goal for patients treated for hypertension?','Below 130/80',['Below 140/90','Below 150/90','Below 120/70'],'The goal is less than 130/80.')],
[q('A 50-year-old on two drugs has home BP averaging 134/78. Is she at goal?','No — the systolic is above the 130 goal',['Yes — under 140/90 is goal','Yes — only diastolic matters','No — goal is below 110/70'],'Goal requires systolic below 130 and diastolic below 80.')]),

c('When to start medication',
'<p>2025 AHA/ACC risk-based thresholds (III-18):</p>'+
ul(['Average BP <strong>≥140/90</strong> → start medication for <strong>everyone</strong>','Existing clinical CVD (CHD, stroke, HF) → start medication at <strong>≥130/80</strong> (secondary prevention)','<strong>Diabetes, CKD, or 10-year PREVENT risk ≥7.5%</strong> → start medication at <strong>≥130/80</strong>','Otherwise → lifestyle for <strong>3–6 months</strong>, then medication if still ≥130/80'])+
tbl(['Category','Recommendation'],[
['Normal (below 120/80)','Healthy lifestyle; reassess <strong>annually</strong>'],
['Elevated (120–129/below 80)','Lifestyle (TLC); reassess in <strong>3–6 months</strong>'],
['Stage 1, with CVD/DM/CKD or risk ≥7.5%','Lifestyle + <strong>medication</strong>; reassess in <strong>1 month</strong>'],
['Stage 1, low risk (below 7.5%)','Lifestyle first; reassess 3–6 months; add medication if not at goal'],
['Stage 2 (≥140/90)','Lifestyle + medication for all; reassess in <strong>1 month</strong>']])+
'<p>On medication: if at goal, reassess every 3–6 months; if not, check adherence and intensify.</p>',
['treatment-thresholds','risk-based-initiation','reassessment-intervals'],
[q('Above what average BP should antihypertensive medication be started in all adults regardless of risk?','140/90',['130/80','160/100','180/120'],'BP ≥140/90 is a medication threshold for everyone.'),
q('At what 10-year PREVENT CVD risk should stage 1 hypertension be treated with medication immediately?','7.5% or higher',['5% or higher','10% or higher','20% or higher'],'Stage 1 + DM, CKD, CVD, or risk ≥7.5% → lifestyle plus medication.'),
q('After starting medication, when should BP be reassessed?','In 1 month',['In 1 week','In 6 months','In 1 year'],'Reassess 1 month after starting; then every 3–6 months once at goal.'),
q('How often should a patient with normal BP be reassessed?','Annually',['Every month','Every 3–6 months','Every 5 years'],'Normal BP: promote healthy lifestyle, reassess annually.')],
[q('A 48-year-old with type 2 diabetes has confirmed BP 134/82. What is the recommended plan?','Lifestyle changes plus antihypertensive medication, reassess in 1 month',['Lifestyle only, reassess in 6 months','No treatment until BP reaches 140/90','Lifestyle only, reassess in 1 year'],'Diabetes with stage 1 HTN meets the threshold for medication now.'),
q('A healthy 40-year-old has confirmed BP 132/78 and a PREVENT risk of 3%. What is the plan?','Lifestyle changes and reassess in 3–6 months',['Start two drugs now','Start one drug now and recheck in 1 month','No action; recheck in 5 years'],'Low-risk stage 1 starts with lifestyle; add medication if not at goal after 3–6 months.')]),

c('When to consider withholding drug treatment',
'<p>Consider withholding medication and tolerating higher BP in <strong>stage 1 HTN</strong> in patients <strong>over 75</strong> with:</p>'+
ul(['Recurrent falls','Dementia','Extended-care facility residence','Multiple (non-HTN) comorbidities','Orthostatic hypotension','Limited life expectancy']),
['withholding-treatment'],
[q('Withholding antihypertensive treatment for stage 1 HTN may be considered in patients above what age with conditions such as recurrent falls or dementia?','75',['55','65','85'],'Consider withholding in stage 1 HTN over age 75 with falls, dementia, ECF residence, comorbidities, orthostasis, or limited life expectancy.')],
[q('An 84-year-old nursing-home resident with dementia, recurrent falls, and orthostatic hypotension has BP 136/78. What is reasonable?','Consider withholding antihypertensive medication and tolerate the higher BP',['Start two drugs to reach below 120/80','Start a central α2 agonist','Order ABPM and start an ARB regardless'],'Stage 1 HTN in a frail patient over 75 with falls and dementia is a case for withholding.')])
]),

/* ---------------- Objective 18 ---------------- */
s('18-lifestyle','18. Lifestyle management and patient education','Objective 18. Part III slides 2–12.',[
c('Lifestyle modifications and expected SBP reduction',
tbl(['Modification','Recommendation','Approx. SBP reduction'],[
['<strong>Weight loss</strong>','Maintain BMI 18.5–24.9','<strong>5–20 mmHg per 10 kg</strong> lost'],
['<strong>DASH diet</strong>','Fruits, vegetables, low-fat dairy; less saturated and total fat','<strong>8–14 mmHg</strong>'],
['<strong>Reduced sodium</strong>','Lecture target <strong>1500–2000 mg/day</strong> sodium (table: ideally 2.4 g/day); adequate K, Ca, Mg','2–8 mmHg'],
['<strong>Exercise</strong>','Aerobic, at least 30 min most days (<strong>150 min/week</strong>)','4–9 mmHg'],
['<strong>Alcohol moderation</strong>','2 drinks/day men; 1 drink/day women and lighter persons','2–4 mmHg']])+
hy('Biggest single effects: weight loss (5–20 per 10 kg) and DASH (8–14).')+
'<p>Lifestyle is used <strong>alone for elevated BP</strong> and <strong>with drugs for stage 1–2 HTN</strong>; if insufficient, drug treatment must start.</p>',
['lifestyle-table','weight-loss','dash','sodium','exercise','alcohol-limits'],
[q('How much SBP reduction does the DASH diet typically produce?','8–14 mmHg',['2–4 mmHg','4–9 mmHg','20–30 mmHg'],'DASH lowers SBP about 8–14 mmHg.'),
q('Weight loss lowers systolic BP by about how much per 10 kg lost?','5–20 mmHg',['1–2 mmHg','2–4 mmHg','30–40 mmHg'],'5–20 mmHg per 10 kg weight loss.'),
q('What is the weekly physical activity goal in the lecture?','150 minutes per week in divided sessions',['60 minutes per week','300 minutes per week of vigorous activity only','30 minutes once weekly'],'Goal is 150 min/week of physical activity.'),
q('What daily sodium target does the lecture recommend?','Less than 1500–2000 mg/day',['Less than 4000 mg/day','Less than 500 mg/day','No sodium restriction'],'Dietary sodium below 1500–2000 mg/day; consider a salt substitute.')],
[q('An overweight patient with elevated BP asks which single lifestyle change could lower his SBP the most. Which answer fits the lecture table?','Losing weight (5–20 mmHg per 10 kg)',['Cutting alcohol (2–4 mmHg)','Reducing salt (2–8 mmHg)','Exercising (4–9 mmHg)'],'Weight loss has the largest potential effect.')]),

c('DASH, alcohol, tobacco, and sodium details',
'<p><strong>DASH:</strong> vegetables, fruits, whole grains; fat-free/low-fat dairy, fish, poultry, beans, nuts, vegetable oils; limit saturated fat (fatty meats, full-fat dairy, coconut/palm oils), sugar-sweetened drinks, and sweets.</p>'+
'<p><strong>Alcohol:</strong> max 1 drink/day for women or smaller men, 2 for larger men. <strong>1 drink = 12 oz beer, 5 oz wine, 1.5 oz 80-proof liquor</strong>.</p>'+
'<p><strong>Tobacco:</strong> cessation; cutting down beats continuing; nicotine replacement or non-nicotine adjuncts; vaping effects uncertain.</p>'+
'<p><strong>Weight loss:</strong> assess nutrition knowledge; suggest an app or structured program. <strong>Salt:</strong> consider a salt substitute.</p>',
['tobacco','dash-foods','drink-definition'],
[q('One standard drink of wine is:','5 oz',['3 oz','8 oz','12 oz'],'1 drink = 12 oz beer, 5 oz wine, or 1.5 oz 80-proof liquor.'),
q('Which food should a DASH diet limit?','Coconut and palm oils',['Beans and nuts','Low-fat dairy','Fish and poultry'],'DASH limits saturated fats including tropical oils.')],
[q('A patient says she drinks “one glass” of wine nightly, poured as about 10 oz. How do you counsel her?','That is about 2 drinks; the limit for women is 1 drink (5 oz)',['That is 1 drink and within limits','Wine does not count toward alcohol limits','She can drink up to 4 drinks daily'],'One drink of wine = 5 oz; 10 oz = 2 drinks, above the limit for women.')]),

c('Motivational interviewing',
'<p>Discuss realistic, attainable lifestyle change at <strong>every visit</strong>. Motivational interviewing is key. Sample questions:</p>'+
ul(['How does your hypertension affect you?','What will happen if it is not controlled?','What changes can you make?','How will you make them, and how can I support you?','What goals can we set together today?']),
['motivational-interviewing'],
[q('How often does the lecture say lifestyle change should be discussed with a hypertensive patient?','At every visit',['Only at diagnosis','Once a year','Only if medications fail'],'Take time at each visit to discuss realistic lifestyle changes.')],
[q('A patient resists changing his diet. Which question best reflects motivational interviewing?','“What changes do you feel you could make, and how can I support you?”',['“You must stop eating salt today.”','“If you don’t change, I won’t refill your medicine.”','“Here is a diet sheet; follow it exactly.”'],'MI uses open questions about the patient’s goals and how the clinician can help.')])
]),

/* ---------------- Objective 19 ---------------- */
s('19-chronic-care','19. Chronic care visit and follow-up time frames','Objective 19. Part III slides 13–17.',[
c('Components of a chronic care visit',
tbl(['Component','What to do'],[
['<strong>BP readings</strong>','Automated oscillometric (or manual) BP, compare with prior visits; review home log: <strong>average SBP/DBP, highest and lowest</strong>; ask about low-BP symptoms; compare home cuff with office reading'],
['<strong>Symptom review</strong>','ENT: headache, visual change, epistaxis, dizziness, tinnitus. CV: diaphoresis, chest pain, palpitations, edema, dyspnea/↓ exercise tolerance'],
['<strong>Adherence and side effects</strong>','Check compliance with prescribed medications; monitor adverse effects'],
['<strong>Physical exam</strong>','General, HEENT, cardiac and vascular, lungs, GI, neuro, lymph, psych'],
['<strong>Labs</strong>','Review or order: chemistry panel, A1c, lipid panel (frequency depends on chronicity and control)'],
['<strong>Lifestyle</strong>','Address <strong>at least one measurable, attainable lifestyle goal</strong> each visit; reassess at every visit'],
['<strong>Plan</strong>','Adjust regimen or order further work-up as needed']]),
['bp-review','symptom-review','adherence','exam-labs','lifestyle-goal'],
[q('When reviewing a home BP log at a chronic care visit, which values should you note?','Average SBP and DBP plus the highest and lowest readings',['Only the single lowest reading','Only the morning readings','Only readings taken after exercise'],'Note the averages and the highest and lowest values; ask about low-BP symptoms.'),
q('At minimum, how many lifestyle goals should be addressed at each chronic HTN visit?','One measurable, attainable goal',['None if BP is at goal','Five goals every visit','Only one goal per year'],'Address at least one measurable lifestyle goal per chronic visit.'),
q('Which labs are typically reviewed or ordered at chronic HTN visits?','Chemistry panel, A1c, and lipid panel',['Blood cultures and ESR','Troponin and BNP every visit','Cortisol and ACTH every visit'],'Chemistry plus comorbidity screening (A1c, lipids).')],
[q('At a chronic HTN visit, a patient’s home log shows several readings of 98/58 with dizziness on standing. What should you do?','Ask about low-BP symptoms and consider adjusting the regimen',['Ignore low readings; only highs matter','Add another antihypertensive','Stop checking home BP'],'Note the lowest readings, ask about hypotension symptoms, and adjust treatment.')]),

c('Follow-up time frames',
tbl(['Control / compliance status','Follow-up'],[
['Uncontrolled and noncompliant','<strong>2–4 weeks</strong>'],
['Slightly uncontrolled and compliant','<strong>3 months</strong>'],
['Controlled and compliant, with risk factors for progression','<strong>3–6 months</strong>'],
['Chronically well controlled, compliant, otherwise healthy','<strong>6 months</strong>']]),
['follow-up-intervals'],
[q('What is the follow-up interval for an uncontrolled, noncompliant hypertensive patient?','2–4 weeks',['3 months','3–6 months','6 months'],'Uncontrolled and noncompliant: 2–4 weeks.'),
q('What is the follow-up interval for a chronically well-controlled, compliant, otherwise healthy patient?','6 months',['2–4 weeks','3 months','12–18 months'],'Well controlled, compliant, healthy: 6 months.')],
[q('A compliant patient’s BP is slightly above goal at 134/82. When should she return?','In 3 months',['In 2–4 weeks','In 6 months','In 1 year'],'Slightly uncontrolled and compliant: 3 months.'),
q('A patient on three drugs admits he stopped two of them; BP is 158/96. When should he return?','In 2–4 weeks',['In 3 months','In 6 months','In 1 year'],'Uncontrolled and noncompliant: 2–4 weeks.'),
q('A controlled, compliant patient with diabetes and CKD (risk factors for progression) is at goal. When should she return?','In 3–6 months',['In 2–4 weeks','In 12 months','Only when symptomatic'],'Controlled and compliant with risk factors for progression: 3–6 months.')])
]),

/* ---------------- Objective 20 ---------------- */
s('20-treatment-principles','20. General principles of HTN treatment and compelling indications','Objective 20. Part III slides 22–31, 96–105.',[
c('Drug classes, first-line and later-line agents',
'<p><strong>First-line</strong> (no compelling indication or contraindication):</p>'+
ul(['<strong>ACEIs or ARBs</strong>','<strong>Calcium channel blockers</strong>','<strong>Thiazide-type diuretics</strong>'])+
'<p><strong>Later-line alternatives</strong> (still routinely used): aldosterone antagonists (spironolactone), α1/β-blockers (carvedilol), β-blockers (metoprolol), α-blockers (doxazosin), central α2 agonists (clonidine), direct vasodilators (hydralazine).</p>'+
mn('First line = “<strong>A-C-T</strong>”: <strong>A</strong>CEI/ARB, <strong>C</strong>CB, <strong>T</strong>hiazide.')+
'<p>Steps: stage the BP and calculate risk → look for <strong>compelling indications</strong> → consider other factors (race, pregnancy potential, age, comorbidities).</p>',
['drug-classes','first-line','later-line'],
[q('Which drug class is first-line for hypertension without compelling indications?','Thiazide-type diuretics',['Beta-blockers','Alpha-1 blockers','Central alpha-2 agonists'],'First-line: ACEI/ARB, CCB, thiazide-type diuretics.'),
q('Which drug is a later-line alternative rather than first-line for uncomplicated hypertension?','Metoprolol',['Amlodipine','Chlorthalidone','Lisinopril'],'β-blockers are later-line unless a compelling indication exists.')],
[q('A 45-year-old with stage 1 HTN, high CV risk, and no comorbidities needs medication. Which is an appropriate first choice?','Amlodipine',['Doxazosin','Clonidine','Hydralazine'],'CCBs are first-line; α-blockers, clonidine, and hydralazine are later-line.')]),

c('Monotherapy vs combination therapy',
ul(['<strong>Stage 1</strong>: a single agent is usually enough to reach below 130/80','<strong>Stage 2</strong>: strongly consider <strong>two drugs at low dose in a fixed-dose combination</strong> (but <strong>never ACEI + ARB</strong>) with TLC','Low-risk stage 1: lifestyle first; add monotherapy if lifestyle fails (slide 98: after about 6 months)'])+
'<p><strong>Benefits of combination therapy:</strong> lowers BP more than monotherapy, reaches target faster, fewer dose-dependent side effects, better adherence.</p>',
['monotherapy-vs-combination'],
[q('For stage 2 hypertension, what initial regimen does the lecture recommend?','Two drugs at low dose, ideally in a fixed-dose combination',['A single drug at maximal dose','Three drugs at once','Lifestyle alone for 6 months'],'Stage 2 → dual therapy (not ACEI + ARB) plus TLC.'),
q('Which is a listed benefit of combination therapy?','Reduced risk of dose-dependent side effects',['Higher risk of hyperkalemia with every combination','Slower BP lowering','Worse adherence'],'Combination lowers BP more, faster, with fewer dose-dependent side effects and better adherence.')],
[q('A 50-year-old with no comorbidities has confirmed BP 152/96. Which initial plan fits the lecture?','Lifestyle changes plus a low-dose two-drug fixed combination, such as an ARB with amlodipine',['Lifestyle alone and recheck in 6 months','Lisinopril plus losartan','A single drug at maximal dose'],'Stage 2 HTN → start dual therapy with TLC; never combine ACEI and ARB.')]),

c('Compelling indications',
'<p><strong>Compelling indications</strong> = high-risk conditions that are sequelae of or associated with HTN, where a specific class has <strong>evidence-based survival benefit</strong>. Compelling indications trump other considerations.</p>'+
tbl(['Condition','Preferred drugs'],[
['<strong>HFrEF</strong>','ACEI/ARB + β-blocker + aldosterone antagonist + diuretic (aim for at least 2–3); <strong>avoid non-DHP CCB</strong>'],
['<strong>Post-MI</strong>','β-blocker + ACEI/ARB (both)'],
['<strong>CAD</strong>','β-blocker, ACEI/ARB, then DHP-CCB or thiazide'],
['<strong>Atrial fibrillation</strong>','β-blocker or non-DHP CCB, ACEI/ARB, then thiazide'],
['<strong>Diabetes</strong>','ACEI/ARB, then DHP-CCB or thiazide'],
['<strong>CKD / proteinuria</strong>','ACEI/ARB, then DHP-CCB or thiazide'],
['<strong>Recurrent stroke prevention</strong>','ACEI/ARB, then thiazide or DHP-CCB']]),
['compelling-definition','hf','post-mi','cad','afib','diabetes','ckd','stroke'],
[q('Which regimen is indicated for a hypertensive patient after a myocardial infarction?','Beta-blocker plus ACEI or ARB',['Thiazide plus alpha-blocker','Non-DHP CCB plus clonidine','Hydralazine alone'],'Post-MI: β-blocker + ACEI/ARB.'),
q('Which drug class should be avoided in heart failure with reduced ejection fraction?','Non-dihydropyridine calcium channel blockers',['ACE inhibitors','Aldosterone antagonists','Beta-blockers'],'Non-DHP CCBs depress contractility and are avoided in HFrEF.'),
q('For hypertension with CKD and proteinuria, which class is first?','ACEI or ARB',['Beta-blocker','Loop diuretic','Alpha-1 blocker'],'CKD/proteinuria: ACEI or ARB, then DHP-CCB or thiazide.'),
q('For hypertension with atrial fibrillation, which first agent also provides rate control?','Beta-blocker or non-DHP CCB',['Thiazide diuretic','DHP calcium channel blocker','Hydralazine'],'Afib: β-blocker or non-DHP CCB, ACEI/ARB, then thiazide.'),
q('Which class is first for a hypertensive patient with diabetes?','ACEI or ARB',['Beta-blocker','Thiazide diuretic','Alpha-1 blocker'],'Diabetes: ACEI/ARB, then DHP-CCB or thiazide.')],
[q('A 62-year-old with HTN and stable CAD with angina needs a first agent. Which fits the compelling indication?','A beta-blocker such as metoprolol',['Doxazosin','Hydralazine','Clonidine'],'CAD: β-blocker, ACEI/ARB, then DHP-CCB or thiazide.'),
q('A hypertensive patient with HFrEF (EF 30%) is on lisinopril. Which addition best follows compelling-indication therapy?','Add a beta-blocker such as carvedilol',['Add verapamil','Add diltiazem','Add doxazosin'],'HFrEF: ACEI/ARB + β-blocker + aldosterone antagonist + diuretic; avoid non-DHP CCBs.'),
q('A 70-year-old with HTN had an ischemic stroke 3 months ago. Which first-line choice fits recurrent stroke prevention?','ACEI or ARB',['Beta-blocker','Non-DHP CCB','Alpha-1 blocker'],'Recurrent stroke prevention: ACEI/ARB, then thiazide or DHP-CCB.')]),

c('Other patient factors and pitfalls',
ul(['<strong>Age over 60</strong>: thiazide, ACEI, or ARB preferred; start low, titrate gradually with a single agent; target may be less aggressive','<strong>Avoid thiazides</strong> with gout, urinary incontinence, balance issues, SSRI therapy, or hyponatremia','<strong>Advanced CKD/ESRD</strong>: CCBs, β-blockers, direct vasodilators, and α2 agonists are frequently used (safe in ESRD)','<strong>Never combine ACEI + ARB</strong> (ONTARGET): reduces proteinuria more but <strong>worsens renal outcomes</strong>']),
['other-factors','no-acei-arb-combo'],
[q('What did the ONTARGET trial show about combining an ACE inhibitor with an ARB?','It lowered proteinuria more but worsened major renal outcomes',['It improved survival and is recommended','It had no effect on renal outcomes','It reduced hyperkalemia'],'ACEI + ARB combination should never be used.'),
q('Which comorbidity is a reason to avoid thiazide diuretics?','Gout',['Osteoporosis','Atrial fibrillation','Heart failure'],'Avoid thiazides with gout, incontinence, SSRI use, hyponatremia, or balance issues.')],
[q('A 74-year-old woman on sertraline has urge incontinence and a sodium of 131. Which first-line class should be avoided for her HTN?','Thiazide diuretic',['ARB','DHP calcium channel blocker','ACE inhibitor'],'SSRI use, incontinence, and hyponatremia are all reasons to avoid thiazides.')])
]),

/* ---------------- Objective 21 ---------------- */
s('21-race-pregnancy','21. Most and least effective drugs by race; safe and unsafe drugs in pregnancy','Objective 21. Part III slides 28–29, 50, 57, 76, 87, 91, 101–103.',[
c('Drug effectiveness by race',
tbl(['','Black patients','Caucasian (and Asian) patients'],[
['<strong>Most effective</strong>','<strong>CCBs and thiazide diuretics</strong> (first line at any age)','<strong>ACEIs and ARBs</strong> (first choice under 60), then CCB or thiazide'],
['<strong>Less effective</strong>','<strong>ACEIs, ARBs, and β-blockers</strong> (ACEI/ARB still second/third line)','—'],
['Elderly with isolated systolic HTN','CCB or thiazide first','ACEI or ARB first']])+
hy('Compelling indications trump race: a Black patient with prior MI, HF, or LV dysfunction still gets a β-blocker (and ACEI/ARB).'),
['black-patients','white-patients','compelling-trumps-race'],
[q('Which drug classes are most effective for hypertension in Black patients?','Calcium channel blockers and thiazide diuretics',['ACE inhibitors and ARBs','Beta-blockers and alpha-blockers','Central alpha-2 agonists and vasodilators'],'CCBs and thiazides work best in Black patients.'),
q('Which drug classes work best in Caucasian or Asian patients with hypertension?','ACE inhibitors and ARBs',['Thiazide diuretics only','Calcium channel blockers only','Beta-blockers only'],'ACEI and ARBs work best in Caucasian or Asian patients.'),
q('Which drug class is less effective for hypertension in Black patients?','Beta-blockers',['Calcium channel blockers','Thiazide diuretics','Thiazide-like diuretics such as chlorthalidone'],'β-blockers (and ACEI/ARBs) are less effective in Black patients.')],
[q('A 50-year-old Black man with stage 1 HTN and no comorbidities needs one drug. Which is best?','Amlodipine',['Lisinopril','Metoprolol','Losartan'],'CCBs and thiazides are most effective in Black patients.'),
q('A 45-year-old white woman (not of childbearing potential) with stage 1 HTN and no comorbidities needs one drug. Which is the first choice?','An ACE inhibitor or ARB',['Atenolol','Clonidine','Doxazosin'],'In Caucasian patients under 60, ACEI or ARB is first choice.'),
q('A 58-year-old Black man with HTN had an MI last year. Which drug should be included despite reduced antihypertensive efficacy by race?','A beta-blocker',['An alpha-1 blocker','Clonidine','Hydralazine'],'Compelling indications trump race; post-MI requires a β-blocker.')]),

c('Pregnancy: safe and unsafe drugs',
tbl(['Safe / acceptable','Unsafe'],[
['<strong>Labetalol</strong> (lots of experience, safe; PO or IV)','<strong>ACE inhibitors</strong> — Category X, fetal <strong>renal agenesis</strong>'],
['<strong>Methyldopa</strong> (one of the safest)','<strong>ARBs</strong> — renal agenesis'],
['<strong>DHP-CCBs</strong>, <strong>β-blockers</strong>, and <strong>thiazides</strong> listed as okay with pregnancy potential','']])+
hy('Women of childbearing potential: avoid ACEI/ARB because of teratogenicity.'),
['pregnancy-unsafe','pregnancy-safe'],
[q('Why are ACE inhibitors and ARBs contraindicated in pregnancy?','Risk of fetal renal agenesis',['Risk of neural tube defects','Risk of fetal cleft palate','Risk of fetal hypothyroidism'],'ACEI/ARBs cause fetal renal agenesis (Category X for ACEI).'),
q('Which central alpha-2 agonist is one of the safest antihypertensives in pregnancy?','Methyldopa',['Clonidine patch','Guanfacine','Tizanidine'],'Methyldopa is one of the safest drugs in pregnant hypertensives.'),
q('Which mixed alpha/beta-blocker is widely used and considered safe in pregnancy?','Labetalol',['Carvedilol','Atenolol','Propranolol'],'Labetalol has extensive pregnancy experience and is safe.')],
[q('A 29-year-old on lisinopril for HTN tells you she is 6 weeks pregnant. What is the best action?','Stop lisinopril and switch to labetalol or methyldopa',['Continue lisinopril; it is safe','Switch to losartan','Add spironolactone'],'ACEIs and ARBs are contraindicated in pregnancy; labetalol and methyldopa are safe.')])
]),

/* ---------------- Objective 22: one section per drug class ---------------- */
s('22a-thiazide-diuretics','22a. Thiazide diuretics','Objective 22 (thiazide diuretics). Part III slides 32–37.',[
c('Thiazides: agents and mechanism',
'<p><strong>Agents:</strong> <strong>chlorthalidone</strong> (longest duration), <strong>indapamide</strong>, metolazone, <strong>HCTZ</strong>. Route: oral, <strong>once daily</strong>.</p>'+
ul(['<strong>MOA:</strong> ↑ renal <strong>sodium excretion</strong> (distal tubule) with some vasodilator effect','Diuresis first lowers volume and CO (PVR rises transiently); after <strong>6–8 weeks</strong> CO normalizes and <strong>PVR falls</strong>','Outcome benefit (fewer strokes and CV events) best shown with <strong>chlorthalidone and indapamide</strong>; <strong>none shown with HCTZ</strong>','Chlorthalidone lowers BP 1.5–2× more than HCTZ; relatively weak alone, best combined with ACEI/ARB (or CCB)'])+
hy('Preferred diuretic for HTN: long-acting, effective, cheap. Chlorthalidone &gt; HCTZ for outcomes.'),
['thiazide-agents','thiazide-moa','thiazide-outcomes'],
[q('Which thiazide-type diuretic has the longest duration of action?','Chlorthalidone',['Hydrochlorothiazide','Metolazone','Furosemide'],'Chlorthalidone is the longest-acting thiazide.'),
q('Clinical outcome benefits (fewer strokes and CV events) are best established with which thiazides?','Chlorthalidone and indapamide',['HCTZ and metolazone','HCTZ only','Metolazone only'],'No outcome benefit has been shown with HCTZ.'),
q('How do thiazide diuretics lower blood pressure long term?','Increased renal sodium excretion, with peripheral resistance falling after 6–8 weeks',['Blocking angiotensin II receptors','Blocking cardiac calcium channels','Stimulating central alpha-2 receptors'],'Initial volume loss; by 6–8 weeks CO normalizes and PVR falls.')],
[q('A patient on HCTZ 12.5 mg asks if a different diuretic would better prevent stroke. Which switch has the stronger outcome evidence?','Chlorthalidone',['Furosemide','Spironolactone','Triamterene alone'],'Chlorthalidone (and indapamide) have established outcome benefits; HCTZ does not.')]),

c('Thiazides: dosing schedule, adverse effects, and cautions',
'<p><strong>Give in the morning</strong> to avoid nocturnal diuresis. Check a <strong>chemistry panel within 5–7 days</strong> of starting or increasing the dose (hypokalemia, hyponatremia).</p>'+
tbl(['Adverse effect','Note'],[
['<strong>Hypokalemia, hyponatremia, hypomagnesemia</strong>','Electrolytes'],
['<strong>Hypercalcemia</strong>','Usually first 2 weeks'],
['<strong>Hyperuricemia → gout</strong>',''],
['<strong>Hyperglycemia</strong>','Worsens DM control; avoid as first-line in diabetics (can be used)'],
['Hypovolemia','Overdiuresis']])+
'<p><strong>Avoid / disease states worsened:</strong> gout, diabetes, hyponatremia, urinary incontinence, balance problems, SSRI therapy.</p>'+
hy('Thiazides <strong>raise</strong> glucose, uric acid, and calcium; they <strong>lower</strong> Na, K, and Mg.'),
['thiazide-dosing','thiazide-adverse','thiazide-cautions'],
[q('Which electrolyte is RAISED by thiazide diuretics?','Calcium',['Potassium','Sodium','Magnesium'],'Thiazides cause hypercalcemia but hypokalemia, hyponatremia, and hypomagnesemia.'),
q('When should a chemistry panel be checked after starting a thiazide?','Within 5–7 days',['Within 24 hours','After 3 months','Only if symptomatic'],'Check a chem panel within 5–7 days for hypokalemia and hyponatremia.'),
q('At what time of day should thiazides be taken?','In the morning',['At bedtime','With the evening meal','Every 6 hours around the clock'],'Morning dosing avoids nocturnal diuresis.')],
[q('Two weeks after starting chlorthalidone, a man develops an acutely painful, swollen first MTP joint. Which drug effect explains it?','Hyperuricemia precipitating gout',['Hyperkalemia','Hypocalcemia','Drug-induced lupus'],'Thiazides raise uric acid and can precipitate gout.'),
q('A patient with type 2 diabetes asks why his A1c rose after HCTZ was added. What is the explanation?','Thiazides have mild glucose-raising effects',['Thiazides block insulin receptors completely','Thiazides cause hypoglycemia unawareness','The HCTZ caused hypothyroidism'],'Thiazide-induced hyperglycemia can worsen diabetes control.')])
]),

s('22b-loop-diuretics','22b. Loop diuretics','Objective 22 (loop diuretics). Part III slides 38–43.',[
c('Loops: role, mechanism, and agents',
'<p>Not usually used for HTN; used for symptomatic <strong>HF, ascites, CKD, and edema</strong> — but they do lower BP, so count them in the regimen.</p>'+
ul(['<strong>MOA:</strong> block sodium reabsorption in the <strong>thick ascending limb</strong> (most sodium excretion); sulfonamide derivatives'])+
tbl(['Agent','Notes'],[
['<strong>Furosemide</strong> (Lasix)','PO daily/BID; less bioavailable — <strong>IV dose ≈ twice as effective</strong> as the same oral dose'],
['<strong>Bumetanide</strong> (Bumex)','Highly bioavailable'],
['<strong>Torsemide</strong> (Demadex)','Highly bioavailable'],
['<strong>Ethacrynic acid</strong> (Edecrin)','<strong>Non-sulfa</strong> loop for severe sulfa allergy; expensive']])+
'<p>Equipotent: <strong>furosemide 40 mg = bumetanide 1 mg = torsemide 20 mg</strong>.</p>',
['loop-indications','loop-moa','loop-agents'],
[q('Where do loop diuretics act?','Thick ascending limb of the loop of Henle',['Proximal tubule','Distal convoluted tubule','Collecting duct aldosterone receptor'],'Loops block Na reabsorption in the thick ascending limb.'),
q('Which loop diuretic is safe for a patient with severe sulfa allergy?','Ethacrynic acid',['Furosemide','Bumetanide','Torsemide'],'Ethacrynic acid is the non-sulfonamide loop.'),
q('Furosemide 40 mg is roughly equivalent to how much bumetanide?','1 mg',['0.1 mg','10 mg','40 mg'],'Lasix 40 = Bumex 1 = Demadex 20.')],
[q('A patient with HF and a severe sulfa allergy (anaphylaxis) needs a loop diuretic. Which is appropriate?','Ethacrynic acid',['Furosemide','Torsemide','Bumetanide'],'All loops but ethacrynic acid are sulfonamides.'),
q('A patient with acute decompensated HF and bowel edema is not responding to oral furosemide. What explains the better response to IV dosing?','Oral furosemide is poorly absorbed; IV bypasses the edematous gut and is about twice as potent per mg',['IV furosemide acts on a different nephron segment','IV furosemide has no electrolyte effects','Oral furosemide is inactive'],'IV loops are used in decompensated HF and poor GI absorption.')]),

c('Loops: dosing schedule and adverse effects',
ul(['Given in the <strong>morning or afternoon</strong>; if BID, <strong>no later than 5 pm</strong>','Usually given with <strong>potassium supplement</strong> (about 20 mEq per 40 mg furosemide in a healthy kidney; adjust with chemistry panel)','Higher doses needed in ↓ GFR (CKD/AKI) or if accustomed; IV for decompensated HF or poor GI absorption'])+
tbl(['Adverse effect','Note'],[
['<strong>Hypokalemia, hyponatremia</strong>','Monitor chemistry'],
['Overdiuresis/hypovolemia, <strong>contraction alkalosis</strong>',''],
['Gout / hyperuricemia',''],
['Hypersensitivity','Rash; rare <strong>acute interstitial nephritis</strong>'],
['<strong>Ototoxicity</strong>','Tinnitus, hearing loss; usually very high doses; transient to irreversible']]),
['loop-dosing','loop-adverse'],
[q('Which adverse effect of loop diuretics typically occurs with very high doses and may be irreversible?','Ototoxicity (tinnitus and hearing loss)',['Hypercalcemia','Gynecomastia','Drug-induced lupus'],'Loop ototoxicity is usually seen at very high doses.'),
q('Which acid-base disturbance can loop diuretics cause?','Contraction alkalosis',['Metabolic acidosis','Respiratory acidosis','No acid-base effect'],'Overdiuresis causes contraction alkalosis.'),
q('Why are loop diuretics usually prescribed with potassium?','To prevent hypokalemia',['To prevent hyperkalemia','To enhance ototoxicity','To reduce uric acid'],'Supplemental K prevents loop-induced hypokalemia.')],
[q('A patient on high-dose IV furosemide reports new ringing in his ears and muffled hearing. What is the likely cause?','Loop diuretic ototoxicity',['Hypercalcemia','ACE inhibitor angioedema','Meniere disease unrelated to drugs'],'Ototoxicity is a known high-dose loop effect.'),
q('A patient taking furosemide 40 mg BID asks when to take the second dose. What do you advise?','No later than 5 pm',['At bedtime','At 2 am','With a midnight snack'],'Avoid nocturnal diuresis: second dose no later than 5 pm.')])
]),

s('22c-potassium-sparing','22c. Potassium-sparing diuretics (ENaC blockers)','Objective 22 (potassium-sparing diuretics). Part III slides 44–45.',[
c('Triamterene and amiloride',
'<p><strong>Agents:</strong> <strong>triamterene</strong> (with HCTZ: Dyazide/Maxzide), <strong>amiloride</strong>. (Spironolactone and eplerenone are also K-sparing but act on the aldosterone receptor — see 22d.)</p>'+
ul(['<strong>MOA:</strong> directly <strong>block sodium channels in the distal tubule</strong> → weak diuresis with <strong>potassium conservation</strong>','<strong>Dosing:</strong> morning; if BID, not after 5 pm','Amiloride is better tolerated and less nephrotoxic than triamterene'])+
tbl(['Adverse effect','Risk group / note'],[
['<strong>Hyperkalemia</strong>','Diabetics, CKD, patients on ACEI/ARB'],
['<strong>Crystalluria and casts</strong> (triamterene)','→ kidney stones and AKI']]),
['ksparing-agents','ksparing-moa','ksparing-adverse'],
[q('How do triamterene and amiloride work?','They directly block sodium channels in the distal tubule',['They competitively block the aldosterone receptor','They block the Na-K-2Cl cotransporter','They inhibit carbonic anhydrase'],'ENaC blockade gives weak diuresis with K conservation.'),
q('Which potassium-sparing diuretic causes crystalluria and casts leading to stones and AKI?','Triamterene',['Amiloride','Eplerenone','Spironolactone'],'Triamterene causes crystalluria and cast formation.'),
q('Which potassium-sparing diuretic is better tolerated and less nephrotoxic?','Amiloride',['Triamterene','Ethacrynic acid','Metolazone'],'Amiloride is better tolerated than triamterene.')],
[q('A diabetic with CKD on lisinopril is started on triamterene-HCTZ. A week later K+ is 6.1. What explains this?','Potassium-sparing diuretic plus ACEI in a patient with diabetes and CKD',['HCTZ-induced hyperkalemia','Laboratory hemolysis only','Triamterene causing hypokalemia'],'Hyperkalemia risk is highest in diabetics, CKD, and ACEI/ARB users.')])
]),

s('22d-aldosterone-antagonists','22d. Aldosterone antagonists','Objective 22 (aldosterone antagonists). Part III slides 31, 46–48, 105.',[
c('Spironolactone and eplerenone: mechanism and uses',
'<p><strong>Agents:</strong> <strong>spironolactone</strong> (Aldactone), <strong>eplerenone</strong> (Inspra). Oral; morning dosing like all diuretics.</p>'+
ul(['<strong>MOA:</strong> <strong>competitively inhibit the mineralocorticoid (aldosterone) receptor</strong> in the distal tubule → fewer Na-K pumps → ↑ serum K, ↑ urinary Na loss','Weak diuretic; valued for <strong>blocking aldosterone effects on kidney, vessels, and heart</strong>','<strong>Compelling indication: HFrEF</strong>; <strong>initial diuretic of choice for ascites</strong> in chronic liver disease','Later-line HTN agent; common <strong>4th drug in resistant HTN</strong>']),
['aldo-agents','aldo-moa','aldo-indications'],
[q('What is the mechanism of spironolactone?','Competitive inhibition of the mineralocorticoid (aldosterone) receptor',['Direct blockade of distal sodium channels','Inhibition of ACE','Blockade of the Na-K-2Cl cotransporter'],'Aldosterone antagonists block the MR in the distal tubule.'),
q('Aldosterone antagonists are the initial diuretic of choice for which condition?','Ascites from chronic liver disease',['Acute pulmonary edema','Hypercalcemia','Nephrolithiasis'],'They are first-choice diuretics for cirrhotic ascites and have a compelling indication in HFrEF.')],
[q('A patient with resistant HTN remains above goal on maximal ACEI, amlodipine, and chlorthalidone. K+ is 3.8. Which fourth drug is listed first in the lecture?','Spironolactone',['Losartan','Furosemide','Verapamil'],'An aldosterone antagonist is the first-listed 4th agent for resistant HTN.')]),

c('Aldosterone antagonists: adverse effects and cautions',
tbl(['Adverse effect','Detail'],[
['<strong>Hyperkalemia</strong>','Especially with ACEI, ARB, or K supplements; caution with <strong>GFR below 50</strong>, diabetes, proteinuria; monitor chemistry'],
['<strong>Endocrine (spironolactone)</strong>','Less receptor-specific — binds estrogen/progesterone receptors → <strong>gynecomastia, irregular menses, impotence</strong>'],
['Eplerenone','<strong>More selective</strong> → fewer endocrine effects']]),
['aldo-adverse','eplerenone-selectivity'],
[q('Why does spironolactone cause gynecomastia?','It also binds estrogen and progesterone receptors',['It raises serum potassium','It blocks ACE','It inhibits thyroid hormone'],'Spironolactone is less selective than eplerenone.'),
q('Which aldosterone antagonist has fewer endocrine side effects?','Eplerenone',['Spironolactone','Triamterene','Amiloride'],'Eplerenone is more selective for the mineralocorticoid receptor.')],
[q('A man on spironolactone for HFrEF develops painful breast enlargement. What change keeps the benefit with fewer endocrine effects?','Switch to eplerenone',['Switch to triamterene','Add furosemide','Stop all aldosterone blockade permanently'],'Eplerenone is more selective, reducing gynecomastia.'),
q('A patient with diabetes, GFR 42, and proteinuria takes lisinopril. Spironolactone is being considered. What is the main risk to monitor?','Hyperkalemia',['Hypokalemia','Hypercalcemia','Ototoxicity'],'Aldosterone antagonists with ACEI in low GFR, diabetes, or proteinuria raise hyperkalemia risk.')])
]),

s('22e-ace-inhibitors','22e. ACE inhibitors','Objective 22 (ACE inhibitors). Part III slides 49–56, 61.',[
c('ACEIs: agents, mechanism, and uses',
'<p><strong>Agents (“-pril”):</strong> benazepril, captopril, <strong>enalapril (PO; enalaprilat IV)</strong>, fosinopril, <strong>lisinopril</strong>, moexipril, perindopril, quinapril, ramipril, trandolapril. Relatively cheap.</p>'+
ul(['<strong>MOA:</strong> block <strong>conversion of angiotensin I to angiotensin II</strong> → less vasoconstriction and less aldosterone','Also <strong>↑ bradykinin</strong> (potent vasodilator)','More effective in Whites, less in Blacks','Uses beyond HTN: <strong>CKD with proteinuria</strong> (treatment of choice), <strong>HFrEF and post-MI</strong> (↓ morbidity/mortality), may halt/regress LV remodeling']),
['acei-agents','acei-moa','acei-indications'],
[q('ACE inhibitors increase levels of which vasodilator?','Bradykinin',['Angiotensin II','Aldosterone','Endothelin'],'ACE also breaks down bradykinin; inhibiting it raises bradykinin.'),
q('Which ACE inhibitor is available as an IV formulation?','Enalaprilat',['Lisinopril','Ramipril','Benazepril'],'Enalapril is PO; enalaprilat is its IV form.'),
q('What is the mechanism of ACE inhibitors?','Blocking conversion of angiotensin I to angiotensin II',['Blocking angiotensin II at its receptor','Blocking renin release','Blocking the aldosterone receptor'],'ACEIs inhibit Ang I → Ang II conversion, reducing vasoconstriction and aldosterone.')],
[q('A normotensive patient with type 2 diabetes has persistent proteinuria. Which drug class slows progression of his kidney disease?','ACE inhibitor',['Thiazide diuretic','Alpha-1 blocker','Non-DHP CCB'],'ACEIs are the treatment of choice in CKD with proteinuria, even without HTN.')]),

c('ACEIs: renal effects and monitoring',
ul(['Patients relying on constant RAAS activation to maintain glomerular filtration (e.g., <strong>bilateral RAS</strong>, <strong>hypovolemia</strong>) can develop <strong>AKI</strong> when RAAS is blocked','ACEI can worsen kidney function during illness with <strong>hypovolemia</strong> (poor intake, N/V/D, GI bleed, overdiuresis)','<strong>Check K and BUN/Cr within 5–10 days</strong> of starting or increasing; a small temporary creatinine rise is expected','<strong>Stop</strong> if persistent <strong>hyperkalemia</strong> or creatinine rises <strong>more than 30%</strong>'])+
hy('Nephroprotective in proteinuric CKD — but nephrotoxic when glomerular filtration depends on angiotensin II.'),
['acei-renal','acei-monitoring'],
[q('Within how many days of starting an ACE inhibitor should potassium and creatinine be checked?','5–10 days',['1 day','30 days','6 months'],'Monitor K and BUN/Cr within 5–10 days of initiation or dose increase.'),
q('An ACE inhibitor must be stopped if creatinine rises by more than:','30%',['5%','10%','100% only'],'Stop for persistent hyperkalemia or creatinine increase over 30%.')],
[q('A patient on lisinopril develops severe vomiting and diarrhea for 3 days and now has AKI. What is the mechanism?','Hypovolemia combined with RAAS blockade lowers glomerular filtration',['ACE inhibitor-induced interstitial nephritis is the usual cause','Lisinopril causes crystal nephropathy','Bradykinin directly destroys tubules'],'ACEIs worsen kidney function during hypovolemic illness.'),
q('Ten days after starting ramipril, creatinine rose from 1.0 to 1.1 and K+ is 4.6. What should you do?','Continue; a small temporary creatinine rise is expected',['Stop ramipril immediately','Add an ARB','Start dialysis'],'A rise of 10% is acceptable; stop only for more than 30% or persistent hyperkalemia.')]),

c('ACEIs: adverse effects and contraindications',
tbl(['Adverse effect','Key points'],[
['<strong>Dry cough</strong>','1 week–6 months after start (can occur any time); more common in women; resolves when stopped'],
['<strong>Hyperkalemia</strong>','CKD IV–V, diabetics, concurrent aldosterone antagonist'],
['<strong>Angioedema</strong> (life-threatening)','Lips, tongue, pharynx; more common in <strong>Blacks and Asians</strong>; 50% within the 1st week; treat with diphenhydramine, methylprednisolone, famotidine, airway protection; <strong>never prescribe another ACEI</strong>'],
['<strong>Pregnancy</strong>','<strong>Contraindicated (Category X)</strong> — fetal renal agenesis']])+
'<p><strong>Never combine with an ARB</strong> (ONTARGET).</p>',
['acei-cough','acei-hyperkalemia','acei-angioedema','acei-pregnancy'],
[q('ACE inhibitor angioedema is more common in which groups?','Black and Asian patients',['White and Hispanic patients','Children only','Patients over 90 only'],'Angioedema is more common in Blacks and Asians; half occur in the first week.'),
q('ACE inhibitor cough is more common in:','Women',['Men','Children','Smokers only'],'Dry cough is more common in women and resolves after stopping.'),
q('After an episode of ACE inhibitor angioedema, what is the rule for future ACE inhibitors?','Never prescribe another ACE inhibitor',['Restart at half dose after 1 month','Switch to a different ACE inhibitor','Restart with an antihistamine'],'Discontinue and never prescribe any ACEI again.')],
[q('Three days after starting lisinopril, a patient presents with swelling of the lips and tongue and voice change. What is the priority?','Protect the airway, stop the ACE inhibitor, and give diphenhydramine, steroid, and famotidine',['Switch to enalapril','Reassure; this is a mild allergy','Add losartan'],'ACEI angioedema is life-threatening; secure the airway and never use an ACEI again.'),
q('A 56-year-old woman on lisinopril for 4 months has a persistent dry cough with clear lungs. What is the most likely cause?','ACE inhibitor cough from increased bradykinin',['Asthma','Pneumonia','Heart failure'],'Dry cough is the classic ACEI effect; it resolves when stopped.')])
]),

s('22f-arbs','22f. Angiotensin II receptor blockers (ARBs)','Objective 22 (ARBs). Part III slides 57–61.',[
c('ARBs: agents and mechanism',
'<p><strong>Agents (“-sartan”):</strong> losartan, valsartan, olmesartan, telmisartan, candesartan, eprosartan, azilsartan, irbesartan. Oral, relatively cheap.</p>'+
ul(['<strong>MOA:</strong> block <strong>angiotensin II from binding its receptors</strong> (slide: AT1 and AT2)','Efficacy similar to ACEIs; generally more effective in white patients','Same compelling indications as ACEIs (HFrEF, post-MI, DM, CKD/proteinuria, stroke)'])+
cl('clinically used ARBs are selective for the AT1 receptor.'),
['arb-agents','arb-moa'],
[q('How do ARBs lower blood pressure?','By blocking angiotensin II from binding its receptors',['By blocking conversion of angiotensin I to II','By increasing bradykinin','By blocking renin secretion directly'],'ARBs block the receptor; they do not raise bradykinin like ACEIs.'),
q('Which drug is an ARB?','Valsartan',['Benazepril','Verapamil','Eplerenone'],'ARBs end in “-sartan.”')],
[q('A pharmacist asks why losartan causes less cough than lisinopril. What is the best answer?','ARBs block the angiotensin II receptor and do not raise bradykinin',['ARBs are bronchodilators','ARBs block β2 receptors','ARBs are shorter acting'],'ACEI cough relates to bradykinin; ARBs act at the receptor.')]),

c('ARBs: advantages, adverse effects, and contraindications',
ul(['<strong>Generally preferred over ACEIs</strong>: less cough and lower angioedema risk','Can be used after <strong>ACEI angioedema</strong> (with caution and education)','Can be trialed after ACEI cough (stop if persistent cough)','<strong>Contraindicated in pregnancy</strong> (renal agenesis)','Check <strong>renal function and K within 5–7 days</strong> of starting or increasing','<strong>Never combine with an ACEI</strong> — ONTARGET: less proteinuria but <strong>worse renal outcomes</strong>']),
['arb-advantages','arb-adverse','arb-no-combo'],
[q('Why are ARBs generally preferred over ACE inhibitors?','Less cough and lower risk of angioedema',['Lower cost and no pregnancy risk','No need for potassium monitoring','Stronger effect in Black patients'],'ARBs cause less cough and angioedema.'),
q('Within how many days after starting an ARB should a chemistry panel be checked?','5–7 days',['1 day','30 days','1 year'],'Monitor renal status and potassium in 5–7 days.')],
[q('A patient developed a dry cough on enalapril. What is reasonable?','Trial an ARB and stop it if a persistent cough occurs',['Add an ARB to the enalapril','Switch to lisinopril','Never use any RAAS blocker'],'ARBs can be trialed after ACEI cough with counseling.'),
q('A patient with diabetic nephropathy is on maximal lisinopril; a resident suggests adding losartan to reduce proteinuria further. What do you say?','Do not combine — ACEI plus ARB worsens renal outcomes',['Good idea; proteinuria will fall with no downside','Only if potassium is low','Combine but halve both doses'],'ONTARGET showed combination therapy worsens major renal outcomes.')])
]),

s('22g-calcium-channel-blockers','22g. Dihydropyridine and non-dihydropyridine CCBs','Objective 22 (calcium channel blockers). Part III slides 62–70.',[
c('CCB mechanism and subclasses',
'<p><strong>MOA:</strong> inhibit calcium (± sodium) influx across cardiac and smooth muscle membranes → slower SA/AV conduction (↓ HR), ↓ contractility, and <strong>peripheral arterial vasodilation</strong>.</p>'+
tbl(['','Dihydropyridine (DHP)','Non-dihydropyridine'],[
['Main site','<strong>Peripheral vessels</strong> — potent arteriolar vasodilators','<strong>Heart</strong> — ↓ contractility (−inotrope), ↓ SA/AV conduction (−chronotrope)'],
['Heart rate','<strong>Neutral</strong>; negligible AV-node effect','↓ HR; slow AV conduction'],
['Agents','<strong>Amlodipine</strong>, felodipine, <strong>nifedipine</strong>, <strong>nicardipine (IV)</strong>','<strong>Diltiazem</strong>, <strong>verapamil</strong> (PO/IV)']])+
'<p>Both have similar antihypertensive efficacy; choice depends on cardiac effects. CCBs are first-line, especially in Black patients.</p>'+
mn('“-<strong>dipine</strong>” = <strong>D</strong>ilates <strong>P</strong>eriphery. <strong>V</strong>erapamil/<strong>D</strong>iltiazem = heart (<strong>V</strong>ery <strong>D</strong>epressant to SA/AV nodes).'),
['ccb-moa','dhp-vs-nondhp','ccb-agents'],
[q('Which CCB subclass acts primarily on the peripheral vasculature and is heart-rate neutral?','Dihydropyridines (e.g., amlodipine)',['Non-dihydropyridines (e.g., verapamil)','Phenylalkylamines only','Benzothiazepines only'],'DHPs are peripheral vasodilators; non-DHPs act on the heart.'),
q('Which is a non-dihydropyridine CCB?','Diltiazem',['Amlodipine','Felodipine','Nicardipine'],'Non-DHPs: diltiazem and verapamil.'),
q('Which dihydropyridine CCB is given IV?','Nicardipine',['Amlodipine','Felodipine','Verapamil'],'Nicardipine is the IV DHP.')],
[q('A hypertensive patient also needs rate control for atrial fibrillation. Which CCB fits both?','Diltiazem',['Amlodipine','Nifedipine','Felodipine'],'Non-DHP CCBs slow AV conduction; AFib is a listed indication.')]),

c('DHP CCB adverse effects',
tbl(['Adverse effect','Detail'],[
['Flushing, lightheadedness, dizziness, headache','10–20% of patients'],
['<strong>Reflex tachycardia</strong>','Baroreceptor-mediated, from abrupt BP fall with <strong>short-acting forms</strong> (rarely used)'],
['<strong>Peripheral edema</strong>','↑ vascular permeability, <strong>not volume</strong> — <strong>not diuretic-responsive</strong>; less with a RAAS blocker; stop the DHP if significant']]),
['dhp-adverse','dhp-edema'],
[q('Why does short-acting nifedipine cause reflex tachycardia?','It causes a sudden, large BP drop that triggers the baroreceptor reflex',['It directly stimulates the SA node','It blocks AV nodal conduction','It causes hypokalemia'],'Short-acting DHPs drop BP abruptly → reflex tachycardia.'),
q('Why is DHP-induced ankle edema usually unresponsive to diuretics?','It is caused by increased vascular permeability, not volume overload',['It is caused by heart failure','It is caused by hypoalbuminemia','It is caused by lymphatic obstruction'],'DHP edema reflects capillary permeability, not plasma volume.')],
[q('Two months after starting amlodipine 10 mg, a patient has bilateral ankle edema without dyspnea or JVD. What is the best approach?','Recognize DHP edema; consider adding a RAAS blocker or stopping the DHP if significant',['Add furosemide to treat volume overload','Order an echocardiogram for heart failure first','Increase the amlodipine dose'],'DHP edema is permeability related, diuretic-resistant, and reduced by RAAS blockers.')]),

c('Non-DHP CCB adverse effects and contraindications',
tbl(['Issue','Detail'],[
['<strong>Bradycardia, AV block</strong>','Verapamil &gt; diltiazem; <strong>avoid in sick sinus syndrome and 2nd/3rd-degree AV block</strong>'],
['<strong>Caution with β-blockers</strong>','Additive HR/AV-node depression'],
['<strong>Heart failure</strong>','↓ contractility; <strong>do not use in acutely decompensated HFrEF</strong> (avoid in HFrEF); may resume after ~24 h of diuresis once decompensation is addressed'],
['<strong>Constipation</strong>','Especially <strong>verapamil (25%)</strong>'],
['Edema','Less likely than DHPs']]),
['nondhp-adverse','nondhp-contraindications'],
[q('Which adverse effect is especially common with verapamil?','Constipation',['Ankle edema from permeability','Reflex tachycardia','Dry cough'],'Constipation occurs in about 25% on verapamil.'),
q('Non-DHP CCBs are contraindicated in which rhythm disorder?','Second- or third-degree AV block',['Sinus tachycardia','Atrial fibrillation with rapid ventricular response','Premature atrial contractions'],'Avoid in bradyarrhythmias such as SSS and high-degree AV block.')],
[q('A patient with sick sinus syndrome and HTN needs a CCB. Which choice is appropriate?','Amlodipine',['Verapamil','Diltiazem','Either non-DHP at low dose'],'Non-DHPs worsen SA/AV-node disease; DHPs are HR-neutral.'),
q('A patient on metoprolol for CAD is started on verapamil and returns with HR 42 and dizziness. What explains this?','Additive AV/SA-node depression from a non-DHP CCB with a β-blocker',['Reflex tachycardia from vasodilation','Hypokalemia from verapamil','Verapamil-induced hyperthyroidism'],'Use caution combining non-DHP CCBs with β-blockers.')])
]),

s('22h-beta-blockers','22h. Beta-blockers: cardioselective, nonselective, and ISA','Objective 22 (beta-blockers). Part III slides 73–83.',[
c('β receptors, mechanism, and types',
tbl(['Receptor','Location','Stimulation causes'],[
['<strong>β1</strong>','Heart, kidney','↑ HR, ↑ contractility, ↑ renin'],
['<strong>β2</strong>','Lungs, liver, pancreas, arteriolar smooth muscle','Bronchodilation, vasodilation, insulin secretion, glycogenolysis']])+
tbl(['Type','Agents','Key point'],[
['<strong>Cardioselective (β1)</strong>','<strong>Bisoprolol, metoprolol succinate</strong> (once daily), <strong>metoprolol tartrate</strong> (twice daily), <strong>atenolol</strong>','Block cardiac β1; <strong>selectivity lost at higher doses</strong>; used for tachyarrhythmias'],
['<strong>Nonselective (β1 + β2)</strong>','<strong>Nadolol, propranolol</strong>, timolol','Block both at all doses; often not used for HTN'],
['<strong>ISA</strong> (partial agonist)','<strong>Acebutolol</strong>','Does not lower resting HR or CO; niche (e.g., bradycardia needing a BB); <strong>contraindicated post-MI</strong>/high risk; less cardioprotective']]),
['beta-receptors','beta-moa','cardioselective','nonselective','isa'],
[q('What happens to β1 selectivity of cardioselective beta-blockers at higher doses?','It is lost, so they also block β2',['It increases','It converts them to α-blockers','It makes them partial agonists'],'β1 selectivity is lost at higher doses.'),
q('Which metoprolol formulation is dosed once daily?','Metoprolol succinate',['Metoprolol tartrate','Both are dosed four times daily','Neither; both are IV only'],'Succinate (Toprol XL) once daily; tartrate (Lopressor) twice daily.'),
q('Which beta-blocker has intrinsic sympathomimetic activity?','Acebutolol',['Atenolol','Propranolol','Bisoprolol'],'Acebutolol is the ISA β-blocker.'),
q('Which is a nonselective beta-blocker?','Nadolol',['Bisoprolol','Atenolol','Metoprolol'],'Nonselective: nadolol, propranolol, timolol.'),
q('Stimulation of β1 receptors in the kidney causes:','Renin release',['Bronchodilation','Glycogenolysis','Vasodilation'],'β1: ↑ HR, contractility, and renin release.')],
[q('A patient with mild asthma needs a beta-blocker after an MI. Which is the better choice?','A cardioselective agent such as metoprolol, used with caution',['Propranolol','Nadolol','Acebutolol'],'Cardioselective β1 blockers are preferred, but use caution in asthma/COPD regardless; ISA is contraindicated post-MI.'),
q('A patient needs a beta-blocker but has resting bradycardia of 52. Which type has a niche role here?','A beta-blocker with intrinsic sympathomimetic activity (acebutolol)',['Propranolol','Timolol','High-dose atenolol'],'ISA agents do not reduce resting HR — a niche use, but not post-MI.')]),

c('Indications and race/age considerations',
ul(['<strong>Not first-line for HTN</strong> unless a compelling cardiac indication exists','<strong>Post-MI</strong> (STEMI or NSTEMI): first line','<strong>Compensated HFrEF</strong> or any LV dysfunction (EF below 50%)','<strong>CAD</strong> and <strong>AFib</strong>','Have <strong>not</strong> been shown to reduce stroke or mortality from HTN','Less effective in <strong>Black patients</strong> — but compelling indications trump race','Use with <strong>caution over age 60</strong> without a compelling indication']),
['beta-indications','beta-race-age'],
[q('Which is a compelling indication for a beta-blocker?','Prior myocardial infarction',['Uncomplicated stage 1 HTN in a 40-year-old','Gout','Asthma'],'Post-MI, HFrEF/LV dysfunction, CAD, and AFib are BB indications.'),
q('Beta-blockers have NOT been shown to reduce which outcome in hypertension?','Stroke and HTN-associated mortality',['Post-MI mortality','HFrEF mortality','Ventricular rate in AFib'],'BBs have not reduced stroke or HTN-associated mortality.')],
[q('A 66-year-old with uncomplicated stage 2 HTN and no cardiac history is started on atenolol alone. What is the concern?','Beta-blockers are not first-line without a compelling indication and need caution over 60',['Atenolol is contraindicated in all hypertensives','Atenolol is a nonselective agent','Atenolol is the preferred first-line agent'],'Without a compelling indication, BBs are later-line and used cautiously over 60.')]),

c('Adverse effects, diabetes, and cautions',
tbl(['Issue','Detail'],[
['<strong>Bradycardia / heart block</strong>','Stop the BB if a bradyarrhythmia or heart block develops'],
['Sexual dysfunction, fatigue, ↓ exercise tolerance','Common complaints'],
['<strong>Masks hypoglycemia</strong>','Blocks adrenergic warning signs (tremor, tachycardia, palpitations)'],
['<strong>↓ Insulin release</strong>','Not recommended for HTN in diabetics without a compelling indication'],
['<strong>Asthma/COPD</strong>','Use caution regardless of selectivity'],
['<strong>HFrEF</strong>','Start low, titrate slowly'],
['<strong>Abrupt stop</strong>','Rebound HTN, angina, MI — <strong>taper over 1–2 weeks</strong>']]),
['beta-adverse','beta-diabetes','beta-contraindications','beta-withdrawal'],
[q('Why can beta-blockers be dangerous in insulin-treated diabetics?','They mask adrenergic warning signs of hypoglycemia',['They cause severe hyperkalemia','They raise insulin secretion','They cause ketoacidosis directly'],'Tremor, tachycardia, and palpitations from hypoglycemia may be absent.'),
q('How should a beta-blocker be discontinued when possible?','Tapered over 1–2 weeks',['Stopped abruptly','Tapered over 1 day','Switched to clonidine immediately'],'Abrupt withdrawal risks rebound HTN, angina, or MI.'),
q('Which side effect is commonly associated with beta-blockers?','Fatigue and reduced exercise tolerance',['Gingival hyperplasia','Hirsutism','Dry cough'],'BBs cause fatigue, reduced exercise tolerance, and impotence.')],
[q('A man stopped his metoprolol abruptly because of fatigue and now has chest pain with BP 186/104. What explains this?','Rebound hypertension and angina from abrupt beta-blocker withdrawal',['A pheochromocytoma unmasked','A side effect of continuing the drug','Hypoglycemia'],'BBs should be weaned over 1–2 weeks.'),
q('An insulin-treated diabetic on propranolol is found confused with glucose 38 but no tremor or tachycardia. What explains the missing symptoms?','Beta-blockade masks the adrenergic signs of hypoglycemia',['Hyperkalemia','Clonidine withdrawal','ACE inhibitor angioedema'],'BBs block sympathetic warning signs of hypoglycemia.')])
]),

s('22i-mixed-alpha-beta','22i. Mixed alpha-1 and beta-blockers','Objective 22 (mixed α1/β-blockers). Part III slides 86–87.',[
c('Carvedilol and labetalol',
'<p><strong>MOA:</strong> block <strong>β receptors</strong> (↓ HR, ↓ myocardial O2 demand) <strong>and α1 receptors</strong> (peripheral vasodilation).</p>'+
tbl(['Agent','Key points'],[
['<strong>Carvedilol</strong> (Coreg)','<strong>Mortality benefit in HFrEF</strong>/systolic dysfunction; frequently used for BP in HFrEF; less effect on glucose than a straight BB'],
['<strong>Labetalol</strong> (Trandate)','Oral for BP; <strong>IV prn</strong> for BP control or when oral BB cannot be taken; <strong>safe in pregnancy</strong>']])+
'<p><strong>Adverse effect:</strong> lowers standing BP more than supine → <strong>more orthostatic hypotension</strong> than a BB alone. Other cautions are as for β-blockers (bradycardia, heart block, asthma, abrupt withdrawal).</p>',
['mixed-moa','carvedilol','labetalol','mixed-adverse'],
[q('Which mixed alpha/beta-blocker has shown a mortality benefit in HFrEF?','Carvedilol',['Labetalol','Acebutolol','Propranolol'],'Carvedilol reduces mortality in systolic dysfunction/HFrEF.'),
q('What is the characteristic adverse effect of mixed alpha-1/beta-blockers compared with a beta-blocker alone?','More orthostatic hypotension',['More bronchospasm only','Hyperglycemia only','Dry cough'],'α1 blockade lowers standing BP more, increasing orthostasis.'),
q('How do mixed alpha-1/beta-blockers lower BP?','Beta blockade lowers HR and demand while alpha-1 blockade causes peripheral vasodilation',['Central alpha-2 stimulation','Calcium channel blockade','Aldosterone receptor blockade'],'They combine β and α1 blockade.')],
[q('A hypertensive patient admitted NPO cannot take her oral metoprolol. Which drug can be given IV as needed?','Labetalol',['Carvedilol','Spironolactone','Amlodipine'],'Labetalol is frequently given IV prn when oral BB cannot be taken.'),
q('An older man started on carvedilol reports lightheadedness when he stands. Why?','Alpha-1 blockade adds orthostatic hypotension',['Carvedilol causes hypokalemia','Carvedilol is a loop diuretic','Carvedilol raises standing BP'],'Mixed blockers lower standing BP more than supine BP.')])
]),

s('22j-alpha-1-blockers','22j. Alpha-1 blockers','Objective 22 (α1 blockers). Part III slides 88–89.',[
c('Alpha-1 blockers: agents, mechanism, and use',
'<p><strong>Agents:</strong> <strong>terazosin</strong>, <strong>doxazosin</strong>, <strong>prazosin</strong>. Oral.</p>'+
ul(['<strong>MOA:</strong> block α1 → <strong>vasodilation of veins and arteries</strong>; also block prostate α1 → easier urine flow','<strong>Not appropriate monotherapy</strong> for HTN; useful when <strong>HTN and BPH</strong> coexist','<strong>Dose at bedtime</strong> to limit orthostasis']),
['alpha1-agents','alpha1-moa','alpha1-dosing'],
[q('When are alpha-1 blockers most appropriate for hypertension?','As an add-on when HTN coexists with BPH',['As first-line monotherapy for all patients','As the drug of choice in pregnancy','As first-line for HFrEF'],'Not appropriate monotherapy; used with comorbid BPH.'),
q('When should alpha-1 blockers be dosed?','At bedtime',['In the morning with breakfast','Every 4 hours','Only before exercise'],'Bedtime dosing limits orthostatic symptoms.')],
[q('A 68-year-old man with HTN on two drugs also has nocturia and weak stream from BPH. Which add-on treats both?','Doxazosin',['Clonidine','Hydralazine','Furosemide'],'α1 blockers lower BP and relax prostate smooth muscle.')]),

c('Alpha-1 blockers: adverse effects',
tbl(['Adverse effect','Detail'],[
['<strong>Orthostatic hypotension</strong>','Especially older patients'],
['<strong>First-dose phenomenon</strong>','Dizziness, faintness, palpitations, <strong>syncope 1–3 hours after the first dose</strong>'],
['Edema','May add a diuretic but watch for worse orthostasis']]),
['alpha1-adverse','first-dose-phenomenon'],
[q('What is the first-dose phenomenon with alpha-1 blockers?','Transient dizziness, faintness, palpitations, or syncope 1–3 hours after the first dose',['Rash on the first day','Cough after the first dose','Hyperkalemia after the first dose'],'First-dose syncope is a classic α1-blocker effect.')],
[q('An 80-year-old man faints 2 hours after his first dose of terazosin taken in the morning. What advice would have reduced this risk?','Take the first dose at bedtime',['Take it with grapefruit juice','Double the first dose','Take it with a potassium supplement'],'Bedtime dosing limits first-dose and orthostatic effects.')])
]),

s('22k-central-alpha-2-agonists','22k. Centrally acting alpha-2 agonists','Objective 22 (central α2 agonists). Part III slides 90–92.',[
c('Clonidine, methyldopa, guanfacine: mechanism and use',
'<p><strong>Agents:</strong> <strong>clonidine</strong> (PO <strong>BID–TID</strong> or <strong>weekly patch</strong>, costly), <strong>methyldopa</strong>, <strong>guanfacine</strong>.</p>'+
ul(['<strong>MOA:</strong> stimulate <strong>α2 receptors in the brain</strong> → ↓ sympathetic outflow, ↑ vagal tone; peripheral presynaptic α2 stimulation further ↓ sympathetic tone','<strong>Methyldopa</strong>: one of the safest in <strong>pregnancy</strong>; rarely used otherwise','<strong>Clonidine</strong>: compliance issues (multiple daily doses); safe and fairly strong in <strong>ESRD</strong>; treats <strong>alcohol withdrawal</strong>']),
['alpha2-agents','alpha2-moa','alpha2-uses'],
[q('How do central alpha-2 agonists lower blood pressure?','They reduce sympathetic outflow from the CNS and increase vagal tone',['They block peripheral alpha-1 receptors','They block angiotensin II receptors','They block calcium channels'],'Central α2 stimulation reduces sympathetic outflow.'),
q('Which formulation of clonidine improves adherence?','A once-weekly transdermal patch',['A once-monthly injection','A daily inhaler','An annual implant'],'Clonidine PO is BID–TID; the weekly patch helps compliance but costs more.')],
[q('A patient on dialysis has severe hypertension despite a CCB and BB. Which central agent does the lecture describe as safe and fairly strong in ESRD?','Clonidine',['Methyldopa','Spironolactone','Lisinopril at high dose'],'Clonidine is used in ESRD patients with severe HTN.')]),

c('Central alpha-2 agonists: adverse effects',
tbl(['Adverse effect','Detail'],[
['<strong>Rebound HTN</strong>','Abrupt clonidine discontinuation — a significant risk'],
['Orthostatic hypotension, <strong>bradycardia</strong>',''],
['Dizziness, <strong>drowsiness</strong>, headache, fatigue','CNS effects'],
['<strong>Dry mouth</strong>, constipation, flushing, abdominal pain','“Anticholinergic-like” effects (clonidine)'],
['Sodium/water retention','Edema']]),
['alpha2-adverse','clonidine-rebound'],
[q('Which is the most significant risk when clonidine is stopped abruptly?','Rebound hypertension',['Hypoglycemia','Angioedema','Ototoxicity'],'Abrupt clonidine withdrawal causes significant rebound HTN.'),
q('Which side effect is typical of clonidine?','Dry mouth and drowsiness',['Gingival hyperplasia','Hirsutism','Dry cough'],'Clonidine causes dry mouth, constipation, drowsiness, and fatigue.')],
[q('A patient on clonidine TID skips doses and has an acute BP spike to 200/115 with headache and anxiety. What is the best long-term change?','Avoid clonidine or use the weekly patch, and counsel never to stop abruptly',['Increase the clonidine to five times daily','Add an ACE inhibitor and continue skipping doses','Switch to propranolol abruptly'],'Clonidine’s frequent dosing invites missed doses and rebound HTN.')])
]),

s('22l-direct-vasodilators','22l. Direct arterial vasodilators','Objective 22 (direct arterial vasodilators). Part III slides 94–95.',[
c('Hydralazine and minoxidil: mechanism and use',
'<p><strong>MOA:</strong> directly relax <strong>arterial smooth muscle</strong> with little or no venous dilation.</p>'+
tbl(['Agent','Use'],[
['<strong>Hydralazine</strong>','<strong>IV</strong> commonly, also <strong>PO</strong>; heart-rate neutral per slide; part of combination therapy in <strong>heart failure</strong>; safe in <strong>CKD/AKI/ESRD</strong>'],
['<strong>Minoxidil</strong>','Renal failure patients with <strong>difficult-to-control HTN</strong>']]),
['vasodilator-moa','hydralazine','minoxidil'],
[q('What is the mechanism of hydralazine?','Direct relaxation of arterial smooth muscle',['Venous dilation by nitric oxide donation only','Central alpha-2 stimulation','Blockade of angiotensin II receptors'],'Direct arterial vasodilators relax arterial smooth muscle with little venous effect.'),
q('Which direct vasodilator is often used for difficult-to-control hypertension in renal failure?','Minoxidil',['Nitroglycerin','Labetalol','Prazosin'],'Minoxidil is used for resistant HTN in renal failure.')],
[q('A hospitalized patient with AKI has BP 178/98 and cannot take oral medications. Which direct vasodilator is commonly given IV and is safe in AKI?','Hydralazine',['Minoxidil','Lisinopril','Spironolactone'],'Hydralazine is commonly used IV and is safe in CKD/AKI.')]),

c('Direct vasodilators: adverse effects',
tbl(['Adverse effect','Detail'],[
['<strong>Sodium/water retention</strong> → edema','Often paired with a <strong>loop diuretic</strong>'],
['<strong>Reflex tachycardia</strong>','From excessive vasodilation'],
['<strong>Angina</strong>','Caution in CAD — vascular steal'],
['<strong>Drug-induced lupus</strong>','<strong>Hydralazine</strong>'],
['<strong>Hirsutism</strong> (excess hair growth)','<strong>Minoxidil</strong>']]),
['vasodilator-adverse','drug-induced-lupus','hirsutism'],
[q('Which antihypertensive is known to cause drug-induced lupus?','Hydralazine',['Minoxidil','Amlodipine','Losartan'],'Hydralazine causes drug-induced lupus.'),
q('Which drug causes excessive hair growth?','Minoxidil',['Hydralazine','Clonidine','Doxazosin'],'Minoxidil causes hypertrichosis.'),
q('Direct vasodilators are often combined with which drug to counter fluid retention?','A loop diuretic',['An ACE inhibitor plus ARB','A potassium supplement alone','An alpha-1 blocker'],'Na/water retention is minimized with a loop diuretic.')],
[q('A patient on long-term hydralazine develops arthralgias, rash, and a positive ANA. What is the likely diagnosis?','Drug-induced lupus',['Gout','Rheumatic fever','Lyme arthritis'],'Hydralazine is a classic cause of drug-induced lupus.'),
q('A patient with CAD started on minoxidil develops chest pain and HR 112. What explains this?','Reflex tachycardia and vascular steal precipitating angina',['Bradycardia from AV block','Bronchospasm','Hypoglycemia'],'Direct vasodilators cause reflex tachycardia and can provoke angina in CAD.')])
]),

/* ---------------- Objective 23 ---------------- */
s('23-non-bp-indications','23. Additional (non-BP) indications for selected antihypertensives','Objective 23. Part III slides 65–66, 81, 88, 91.',[
c('Non-DHP CCBs',
'<p>Non-DHP CCBs (<strong>diltiazem, verapamil</strong>) slow SA/AV-node conduction, so they are used for <strong>rate control in atrial fibrillation</strong> and to treat <strong>supraventricular tachyarrhythmias</strong>.</p>',
['nondhp-nonbp'],
[q('Which non-BP indication do non-DHP CCBs have?','Rate control of atrial fibrillation and supraventricular tachyarrhythmias',['BPH','Migraine abortive therapy','Alcohol withdrawal'],'Non-DHPs slow AV conduction for AFib/SVT.')],
[q('A patient presents with AFib with rapid ventricular response and BP 150/92. Which antihypertensive also controls the ventricular rate?','Diltiazem',['Amlodipine','Hydralazine','Doxazosin'],'Diltiazem slows AV-node conduction.')]),

c('Nonselective β-blockers',
'<p>Nonselective BBs (<strong>propranolol, nadolol, timolol</strong>) are often <strong>not used for HTN</strong>; instead they treat:</p>'+
ul(['<strong>Migraine prophylaxis</strong>','<strong>Anxiety</strong> (performance)','<strong>Essential tremor</strong>','<strong>Portal hypertension</strong>','<strong>Thyrotoxicosis</strong>'])+
mn('Propranolol “<strong>MAPET</strong>”: <strong>M</strong>igraine, <strong>A</strong>nxiety, <strong>P</strong>ortal HTN, <strong>E</strong>ssential tremor, <strong>T</strong>hyrotoxicosis.'),
['nonselective-nonbp'],
[q('Which is a non-BP indication for nonselective beta-blockers?','Essential tremor',['BPH','Alcohol withdrawal','Atrial septal defect closure'],'Migraine, anxiety, essential tremor, portal HTN, thyrotoxicosis.'),
q('Which nonselective beta-blocker use relates to liver disease?','Portal hypertension',['Hepatic encephalopathy reversal','Hepatitis C cure','Gallstone dissolution'],'Nonselective BBs are used for portal hypertension.')],
[q('A 30-year-old with HTN also has frequent migraines. Which antihypertensive could also provide migraine prophylaxis?','Propranolol',['Amlodipine','Hydrochlorothiazide','Doxazosin'],'Nonselective BBs are used for migraine prophylaxis.'),
q('A patient with new Graves thyrotoxicosis has tremor and palpitations. Which nonselective beta-blocker relieves symptoms?','Propranolol',['Atenolol only','Clonidine','Hydralazine'],'Thyrotoxicosis is a listed nonselective BB indication.')]),

c('α1 blockers and central α2 agonists',
tbl(['Class','Non-BP indication'],[
['<strong>α1 blockers</strong> (terazosin, doxazosin, prazosin)','<strong>BPH</strong> — relax prostate α1 receptors for easier urine flow'],
['<strong>Central α2 agonists</strong> (clonidine)','<strong>Alcohol withdrawal</strong> — counteracts symptoms of increased CNS sympathetic tone']])+
'<p>(Methyldopa’s special use is HTN in pregnancy.)</p>',
['alpha1-nonbp','alpha2-nonbp'],
[q('Which non-BP indication do alpha-1 blockers have?','Benign prostatic hyperplasia',['Migraine prophylaxis','Portal hypertension','Atrial fibrillation'],'α1 blockers ease urine flow in BPH.'),
q('Which non-BP indication for clonidine is given in the lecture?','Alcohol withdrawal',['Essential tremor','BPH','Thyrotoxicosis'],'Clonidine counteracts sympathetically mediated withdrawal symptoms.')],
[q('A hospitalized patient with HTN is in early alcohol withdrawal with tremor, tachycardia, and sweating. Which antihypertensive directly counteracts the sympathetic symptoms?','Clonidine',['Doxazosin','Amlodipine','Lisinopril'],'Clonidine reduces CNS sympathetic outflow in alcohol withdrawal.')])
]),

/* ---------------- Objective 24 ---------------- */
s('24-overdose','24. Overdose of calcium channel blockers, beta-blockers, and clonidine','Objective 24. Part III slides 71–72, 84–85, 93.',[
c('Calcium channel blocker overdose',
ul(['At <strong>5–10× the usual dose</strong>: <strong>hypotension, bradycardia, PR prolongation</strong> — even with a DHP (AV-node effect at toxic doses)','<strong>Hyperglycemia</strong> (insulin release blocked), rarely significant','<strong>Mentation often stays clear</strong> despite hypotension, then may deteriorate precipitously — recheck neuro status often','<strong>Treatment:</strong> IV fluids, atropine (may not work), activated charcoal, <strong>IV calcium</strong>, <strong>glucagon</strong>, pressors (norepinephrine), <strong>high-dose insulin</strong>']),
['ccb-overdose'],
[q('Which glucose finding is characteristic of calcium channel blocker overdose?','Hyperglycemia',['Hypoglycemia','Normal glucose always','Ketoacidosis'],'CCBs block pancreatic insulin release → hyperglycemia.'),
q('Which feature is typical of CCB overdose mentation?','Clear mentation despite hypotension, with possible sudden decline',['Immediate coma from the first hour','Seizures in all cases','Pinpoint pupils with respiratory depression'],'CCB-poisoned patients may stay lucid until perfusion is critically low.')],
[q('After ingesting her mother’s amlodipine, a teenager has BP 78/40, HR 48, PR prolongation, glucose 260, and is alert. What is the likely toxin and a key antidotal therapy?','CCB overdose; give IV calcium (plus glucagon, pressors, high-dose insulin)',['Clonidine overdose; give naloxone first','Beta-blocker overdose; give lipid emulsion only','Opioid overdose; give flumazenil'],'Hypotension, bradycardia, and hyperglycemia with clear mentation = CCB toxicity.')]),

c('Beta-blocker overdose',
ul(['<strong>Hypotension, bradyarrhythmia, confusion, hyperkalemia, hypoglycemia</strong>; possible profound myocardial depression and cardiogenic shock','<strong>Propranolol and carvedilol</strong> are most lipophilic → cross the BBB → <strong>seizures and delirium</strong>','<strong>Treatment:</strong> IV fluids and atropine first; then <strong>IV calcium</strong> (↑ HR), <strong>IV glucagon</strong> (↑ contractility), vasopressors, <strong>high-dose insulin + glucose</strong>, <strong>lipid emulsion</strong> (binds lipophilic drugs)'])+
tbl(['','CCB overdose','BB overdose'],[['Glucose','<strong>Hyperglycemia</strong>','<strong>Hypoglycemia</strong>'],['Mental status','Often clear early','Confusion; seizures with lipophilic agents']]),
['bb-overdose','ccb-vs-bb'],
[q('Which glucose finding is characteristic of beta-blocker overdose?','Hypoglycemia',['Hyperglycemia','Hypernatremia','Hypercalcemia'],'BB overdose: hypoglycemia (CCB: hyperglycemia).'),
q('Which beta-blockers cause the most neurotoxicity (seizures, delirium) in overdose?','Propranolol and carvedilol',['Atenolol and nadolol','Metoprolol and bisoprolol','Acebutolol and timolol'],'The most lipophilic BBs cross the BBB.'),
q('In beta-blocker overdose, what is the purpose of IV glucagon?','To augment cardiac contractility',['To raise potassium','To reverse seizures directly','To bind the drug in the gut'],'Glucagon augments contractility; calcium increases HR; lipid emulsion binds lipophilic drugs.')],
[q('A patient overdoses on propranolol and has HR 38, BP 70/40, glucose 45, and a seizure. Which adjunct specifically binds this lipophilic drug?','Lipid emulsion',['Naloxone','Flumazenil','Physostigmine'],'Lipid emulsion surrounds lipophilic drugs such as propranolol.')]),

c('Clonidine overdose',
ul(['Symptomatic within <strong>1 hour</strong> (tablets); patch may take longer','<strong>Looks like an opioid overdose</strong>: <strong>pinpoint pupils</strong>, depressed consciousness, hypotension, coma, <strong>respiratory depression</strong>','<strong>Hypothermia</strong>','<strong>Treatment:</strong> <strong>naloxone</strong>, IV fluids, atropine, pacing, vasopressors']),
['clonidine-overdose'],
[q('Clonidine overdose most closely mimics which toxidrome?','Opioid overdose',['Anticholinergic toxicity','Sympathomimetic toxicity','Serotonin syndrome'],'Pinpoint pupils, ↓ LOC, respiratory depression, and hypotension mimic opioids.'),
q('Which antidote is listed for clonidine overdose?','Naloxone',['Flumazenil','Digoxin immune Fab','Fomepizole'],'Treatment includes naloxone, IV fluids, atropine, pacing, and vasopressors.')],
[q('A toddler is found drowsy an hour after chewing a grandparent’s pills. Pupils are pinpoint, temperature 35 °C, HR 50, BP 70/40, slow breathing. Urine opioid screen is negative. Which drug is most likely?','Clonidine',['Amlodipine','Lisinopril','Hydrochlorothiazide'],'Opioid-like toxidrome with hypothermia and bradycardia suggests clonidine.')])
])

];
})();
