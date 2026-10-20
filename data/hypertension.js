/* Veal, Hypertension Parts I, II and III — one lecture built from three decks. Slide numbers are cited as I-, II- or III-.
   Supplied objectives in order; the drug-class objective (22) is split into one section per class (22a–22l).
   Picture-only slides were rendered: I-2 (CDC traffic-light definition), I-26/27 (RAAS diagrams), I-33 (primary HTN
   pathophysiology figure), III-18/19 (2025 AHA/ACC treatment-threshold algorithms); their content is folded into the matching cards. */
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

window.HYPERTENSION_OBJECTIVES=[

/* ---------------- Objective 1 ---------------- */
s('01-epidemiology-sdoh','1. Epidemiology (global vs US) and social determinants of health','Objective 1. Part I slides 3–11; Part II slides 24–25.',[
c('Global epidemiology',
'<p>Hypertension is the <strong>leading cause of cardiovascular disease and premature death worldwide</strong>.</p>'+
ul(['Affects <strong>more than 1 billion</strong> people','Highest prevalence: <strong>Africa (27%)</strong>; lowest: <strong>the Americas (18%)</strong>','More than <strong>9.4 million deaths/year</strong>','<strong>46% unaware</strong> they have HTN; <strong>fewer than 50%</strong> treated; only <strong>1 in 5</strong> controlled'])+
hy('Africa highest (27%), Americas lowest (18%). Globally only 1 in 5 is controlled.'),
['global-prevalence','global-awareness-control'],
[q('Which world region has the highest prevalence of hypertension?','Africa (27%)',['The Americas (18%)','Europe','Southeast Asia'],'The lecture cites Africa as highest (27%) and the Americas as lowest (18%).'),
q('Worldwide, roughly what fraction of people with hypertension have it under control?','1 in 5',['1 in 2','3 in 4','1 in 20'],'Globally about 1 in 5 people with HTN are controlled; 46% are unaware and fewer than 50% are treated.')],
[q('A global-health elective student asks which region has the lowest hypertension prevalence. What do you answer from the lecture?','The Americas (18%)',['Africa (27%)','Eastern Europe','Western Pacific'],'The Americas have the lowest prevalence (18%); Africa has the highest (27%).')]),

c('US epidemiology and control',
'<p>HTN is the <strong>most common cardiovascular disease in the US</strong>: about <strong>119 million</strong> adults (≈<strong>48%</strong>) with BP ≥130/80; contributes to more than 685K deaths; costs about $131 billion per year. It is the most common reason non-pregnant adults visit a PCP and the most common indication for a prescription drug.</p>'+
tbl(['Group','Prevalence','Control'],[
['Men vs women','Men 50% &gt; women 44%','—'],
['Black','<strong>56% (highest)</strong>','25%'],
['White','48%','<strong>32% (highest control)</strong>'],
['Asian','46%','<strong>19% (lowest control)</strong>'],
['Hispanic','39% (lowest)','25%'],
['Age over 65','70%','—']])+
'<p>Only about <strong>1 in 4</strong> US adults with HTN is controlled; ~45% of uncontrolled patients are above 140/90. <strong>1 in 5</strong> adults is unaware, and another 10% know but choose not to treat.</p>',
['us-prevalence','us-demographics','us-control'],
[q('About what percentage of US adults have hypertension (BP ≥130/80)?','About 48%',['About 18%','About 27%','About 70%'],'About 119 million US adults, roughly 48%, meet the ≥130/80 definition.'),
q('Which US racial/ethnic group has the highest hypertension prevalence?','Black adults (56%)',['White adults (48%)','Asian adults (46%)','Hispanic adults (39%)'],'Prevalence order: Blacks 56%, Whites 48%, Asians 46%, Hispanics 39%.'),
q('Which US group has the lowest rate of blood pressure control?','Asian adults (19%)',['White adults (32%)','Black adults (25%)','Hispanic adults (25%)'],'Control is highest in Whites (32%) and lowest in Asians (19%).'),
q('About what fraction of US adults with hypertension have it controlled?','About 1 in 4',['About 1 in 2','About 3 in 4','About 1 in 10'],'Only about 1 of every 4 US adults with HTN has it under control.')],
[q('A clinic manager asks what the single most common reason is for non-pregnant adults to see their PCP. Based on the lecture, what do you say?','Hypertension',['Type 2 diabetes','Low back pain','Upper respiratory infection'],'HTN is the most common reason for non-pregnant adults to visit their PCP and the most common indication for a prescription drug.'),
q('A quality team reviews hypertension in a practice of adults over 65. About what prevalence does the lecture predict?','About 70%',['About 30%','About 48%','About 90%'],'Prevalence rises with age; about 70% of adults over 65 have HTN.')]),

c('Risk from HTN and benefit of control',
'<p>HTN raises the relative risk of <strong>CAD, HF, stroke, AF, CKD, PAD, and dementia</strong> (vascular/Alzheimer) <strong>2–4 fold</strong>. The lowest CV and renal risk is seen at about <strong>115/75</strong> or less.</p>'+
tbl(['Controlling BP to goal reduces','By'],[['MI','20–25%'],['Heart failure','<strong>50%</strong>'],['Stroke','30–40%'],['Overall mortality','11%']])+
'<p>Benefits are likely even greater above age 65.</p>',
['complication-risk','control-benefits'],
[q('Controlling BP to goal reduces the risk of heart failure by about:','50%',['11%','20–25%','30–40%'],'Control lowers HF risk ~50%, stroke 30–40%, MI 20–25%, mortality 11%.'),
q('At about what blood pressure is the lowest risk of cardiovascular and renal complications seen?','About 115/75 or less',['About 130/80','About 140/90','About 100/60 or less'],'The lecture places the lowest CV/renal risk at about 115/75 or less.')],
[q('A patient asks how much controlling her BP will lower her stroke risk. Which estimate from the lecture is correct?','About 30–40%',['About 11%','About 50%','About 80%'],'BP control reduces stroke risk about 30–40%.')]),

c('Social determinants of health and disparities',
'<p><strong>SDOH</strong> = conditions where people live, learn, work, and play that affect health risks and outcomes. The CDC defines <strong>5 key areas</strong>:</p>'+
ul(['Healthcare access and quality','Education access and quality','Social and community context','Economic stability','Neighborhood and work environment'])+
'<p>Economically disadvantaged persons have <strong>higher HTN rates</strong> and are <strong>less likely to be controlled</strong>. Assess <strong>health literacy</strong> and tailor counseling; ask about barriers to treatment.</p>'+
'<p><strong>Disparities in Black patients:</strong> HTN develops about <strong>10 years earlier</strong>, is more severe, and carries more complications; 1.3× nonfatal and 1.8× fatal stroke risk; <strong>4×</strong> renal complications/ESKD.</p>',
['sdoh-domains','sdoh-disparities','health-literacy'],
[q('Which is one of the CDC’s five key areas of social determinants of health?','Economic stability',['Genetic predisposition','Dietary sodium intake','Medication class'],'CDC areas: healthcare access/quality, education access/quality, social/community context, economic stability, neighborhood/work environment.'),
q('Compared with white patients, Black patients are about how many times as likely to have hypertensive renal complications and ESKD?','4 times',['1.3 times','1.8 times','10 times'],'Black patients are 4× as likely to develop renal complications/ESKD from HTN.'),
q('On average, how much earlier do African American patients develop hypertension than Caucasian patients?','About 10 years',['About 2 years','About 20 years','No difference'],'African Americans develop HTN about 10 years earlier, with more severe disease and complications.')],
[q('A newly diagnosed hypertensive patient works two jobs, has no car, and struggles to read the medication label. What should you do first in counseling?','Assess health literacy and barriers, then tailor counseling to that level',['Give the standard printed handout and schedule 1-year follow-up','Start three drugs at once to save visits','Defer counseling until BP is controlled'],'The lecture stresses assessing health literacy and SDOH barriers and tailoring counseling.')])
]),

/* ---------------- Objective 2 ---------------- */
s('02-bp-physiology','2. BP physiology: RAA system, sympathetic activity, baroreceptors','Objective 2. Part I slides 12–30.',[
c('Hemodynamics: MAP, CO, and resistance',
'<p>MAP must stay <strong>70–100 mmHg</strong> to perfuse tissues. <strong>MAP = CO × total peripheral resistance</strong>; <strong>CO = SV × HR</strong>.</p>'+
ul(['<strong>CO</strong> is affected by sodium intake, renal function, mineralocorticoids, and sympathetic/parasympathetic tone.','<strong>Peripheral vascular resistance</strong> depends on the sympathetic nervous system, humoral factors, and local autoregulation.','Systole: arterial walls stretch (compliance) → pulse. Diastole: elastic recoil; DBP = minimum pressure before the next systole.'])+
tbl(['Term','Meaning'],[['Preload','Stretch before contraction; measured as EDV'],['Afterload','Pressure the heart must generate to eject = systolic BP'],['Inotrope','Changes force of contraction'],['Chronotrope','Changes rate']])+
'<p><strong>MAP = [(2 × DBP) + SBP] / 3</strong>. 130/80 → 97; 120/70 → 87; 100/50 → 67 (below a “good” MAP of 70–100).</p>',
['map','co-tpr','map-calculation','determinants'],
[q('Mean arterial pressure equals cardiac output multiplied by:','Total peripheral resistance',['Heart rate','Stroke volume','Central venous pressure'],'MAP = CO × TPR; CO itself = SV × HR.'),
q('What MAP range does the lecture call adequate for tissue perfusion?','70–100 mmHg',['40–60 mmHg','100–130 mmHg','60–150 mmHg'],'A “good” MAP is 70–100 mmHg.'),
q('In the lecture’s terms, afterload clinically corresponds to:','Systolic blood pressure',['End-diastolic volume','Heart rate','Central venous pressure'],'Afterload = pressure the heart must exert to eject blood = SBP. Preload = EDV.')],
[q('After a fluid bolus, a hypotensive patient’s BP is 100/50. What is the MAP, and is it adequate?','About 67 — still below the 70–100 target',['About 75 — adequate','About 83 — adequate','About 50 — critically low'],'MAP = (2×50 + 100)/3 ≈ 67, below the 70–100 target.')]),

c('Baroreceptor reflex (short-term neural control)',
'<p><strong>Short-term</strong> BP control (minutes–hours) is <strong>neural</strong>. The medulla/pons integrate input from <strong>carotid and aortic baroreceptors</strong> (stretch receptors) and chemoreceptors.</p>'+
ul(['↑ BP → ↑ wall stretch → ↑ action-potential frequency to the medullary cardiovascular center → <strong>inhibits sympathetic</strong>, <strong>activates parasympathetic</strong> → BP falls.','↓ BP → ↓ stretch → <strong>sympathetic activation</strong> → ↑ HR, contractility, vasoconstriction.'])+
hy('Baroreceptors sense pressure indirectly through stretch of elastic arterial walls.'),
['baroreceptor-reflex','short-term-neural'],
[q('Where are the arterial baroreceptors that drive the short-term BP reflex located?','Carotid sinus and aortic arch',['Renal medulla and adrenal cortex','Left atrium and pulmonary veins','Hypothalamus and pituitary'],'Carotid and aortic baroreceptors are stretch receptors that signal the medulla.'),
q('Increased stretch of the baroreceptors causes which autonomic response?','Sympathetic inhibition and parasympathetic activation',['Sympathetic activation and parasympathetic inhibition','Renin release from the macula densa','ADH release from the posterior pituitary'],'More stretch → more firing → sympathetic inhibited, parasympathetic triggered.')],
[q('A patient stands quickly and her arterial pressure drops. What is the immediate baroreceptor response?','Reduced stretch activates the sympathetic nervous system',['Increased stretch activates the vagus nerve','The macula densa releases ATP','Aldosterone is released within seconds'],'Falling pressure reduces stretch and activates sympathetic outflow — the fast, neural response.')]),

c('Sympathetic activity and other neural regulators',
'<p>Sympathetic activation raises HR, contractility, and arteriolar tone, and also drives <strong>renin release</strong>: low baroreceptor stretch → renal sympathetic fibers release <strong>NE onto β1 receptors of juxtaglomerular cells</strong> → renin.</p>'+
tbl(['Regulator','Location / stimulus','Effect'],[
['Peripheral chemoreceptors','Carotid and aortic arch; ↓ arterial PO2','Arteriolar vasoconstriction (skeletal muscle, renal, splanchnic)'],
['Central chemoreceptors','Medulla; ↑ PCO2 / CSF pH change','Sympathetic outflow, vasoconstriction'],
['Volume receptors','Venous side; ↑ stretch (volume)','↓ ADH, ↑ ANP (vasodilation), ↓ RAAS']]),
['sympathetic-activity','chemoreceptors','volume-receptors'],
[q('Renal sympathetic nerves trigger renin release by stimulating which receptor on juxtaglomerular cells?','β1 adrenergic receptors',['α2 adrenergic receptors','β2 adrenergic receptors','Muscarinic M2 receptors'],'NE acts on β1 receptors of JG cells to release renin.'),
q('Increased stretch of venous volume receptors causes:','Decreased ADH, increased ANP, and decreased RAAS activity',['Increased ADH and increased renin','Sympathetic activation and vasoconstriction','Increased aldosterone and sodium retention'],'Volume receptors respond to more volume by lowering ADH and RAAS and raising ANP.')],
[q('A patient with a COPD exacerbation has an arterial PO2 of 52 mmHg. Which receptor most directly triggers vasoconstriction in his renal and splanchnic beds?','Peripheral chemoreceptors in the carotid and aortic bodies',['Central chemoreceptors responding to CSF pH','Venous volume receptors','Macula densa cells'],'Peripheral chemoreceptors respond to falling PO2 with arteriolar vasoconstriction.')]),

c('RAAS activation (long-term humoral control)',
'<p><strong>Long-term</strong> BP control is <strong>humoral</strong> (RAAS). Renin is released by three triggers:</p>'+
ul(['<strong>Renal sympathetic nerves</strong> (β1 on JG cells) when baroreceptors sense low stretch','<strong>JG-cell baroreceptors</strong> sensing low pressure in the afferent arteriole','<strong>Macula densa</strong> (thick ascending limb) sensing <strong>low sodium</strong>'])+
'<p><strong>Tubuloglomerular feedback:</strong> high Na at the macula densa → ATP → afferent vasoconstriction → ↓ GFR; low Na → prostaglandins → vasodilation → ↑ filtration.</p>'+
hy('Either low sodium or low pressure stimulates renin.'),
['raas-triggers','macula-densa','long-term-humoral'],
[q('Where is the macula densa located?','Thick ascending limb of the loop of Henle',['Proximal convoluted tubule','Collecting duct','Glomerular capillary tuft'],'The macula densa senses tubular sodium in the thick ascending limb.'),
q('When the macula densa senses moderately increased sodium, what does it release and with what effect?','ATP, causing afferent arteriolar vasoconstriction and reduced GFR',['Prostaglandins, causing afferent vasodilation','Renin, causing angiotensin I formation','ANP, causing natriuresis'],'High Na → ATP → afferent constriction (tubuloglomerular feedback).')],
[q('A patient is dehydrated with low afferent arteriolar pressure and low tubular sodium. What is the expected renal hormonal response?','Increased renin secretion',['Decreased renin secretion','Increased ANP secretion','Suppressed aldosterone'],'Low pressure and low sodium both stimulate renin.')]),

c('Angiotensin II actions',
'<p>Cascade: <strong>angiotensinogen</strong> (liver) → renin → <strong>angiotensin I</strong> → ACE (pulmonary/renal endothelium) → <strong>angiotensin II</strong>.</p>'+
tbl(['Angiotensin II action','Result'],[['Arteriolar <strong>vasoconstriction</strong>','↑ BP'],['Stimulates <strong>aldosterone</strong> (adrenal cortex)','Na/water retention, K excretion'],['↑ Na and bicarbonate reabsorption in the <strong>proximal tubule</strong>','Volume expansion'],['Stimulates <strong>thirst</strong> and <strong>ADH</strong> (posterior pituitary)','Aquaporins, ↓ water loss'],['↑ Sympathetic activity','↑ BP']])+
mn('Ang II “<strong>VAST</strong>”: <strong>V</strong>asoconstriction, <strong>A</strong>ldosterone, <strong>S</strong>odium/bicarb reabsorption, <strong>T</strong>hirst/ADH.'),
['angiotensin-ii','aldosterone'],
[q('Which enzyme converts angiotensin I to angiotensin II?','Angiotensin-converting enzyme',['Renin','Aldosterone synthase','Neprilysin'],'ACE (mainly on pulmonary endothelium) converts Ang I to Ang II.'),
q('Which is NOT a lecture-listed action of angiotensin II?','Release of atrial natriuretic peptide',['Arteriolar vasoconstriction','Stimulation of aldosterone','Stimulation of thirst and ADH release'],'Ang II vasoconstricts, releases aldosterone, increases proximal Na/bicarb reabsorption, and stimulates thirst/ADH. ANP opposes it.')],
[q('A hemorrhaging patient has high angiotensin II levels. Which finding is expected from its action on the posterior pituitary?','ADH release with increased water reabsorption',['ACTH release with cortisol rise','TSH release with tachycardia','Oxytocin release with vasodilation'],'Ang II stimulates thirst and vasopressin (ADH) release, mobilizing aquaporins.')])
]),

/* ---------------- Objective 3 ---------------- */
s('03-primary-vs-secondary','3. Primary vs secondary hypertension: epidemiology, etiologies, pathophysiology','Objective 3. Part I slides 31–66.',[
c('Primary vs secondary at a glance',
tbl(['','Primary (essential)','Secondary'],[
['Share of cases','<strong>90–95%</strong>','About <strong>5%</strong>'],
['Cause','No exact known pathophysiology; identified risk factors','An identifiable underlying illness'],
['Typical age at diagnosis','Middle age onward, rising with age','Often diagnosed <strong>before age 20 or after age 50</strong>'],
['Resistant HTN','Most cases overall','Accounts for about <strong>20% of resistant HTN</strong>'],
['Management','Lifestyle + medication','Find and treat the cause']]),
['primary-epidemiology','secondary-epidemiology'],
[q('About what percentage of hypertension is primary (essential)?','90–95%',['50–60%','75–80%','99%'],'Primary HTN accounts for 90–95%; secondary about 5%.'),
q('Secondary causes account for about what share of resistant hypertension?','About 20%',['About 5%','About 50%','About 90%'],'Though only ~5% of HTN overall, secondary causes account for ~20% of resistant HTN.')],
[q('Which new hypertension diagnosis should most raise suspicion for a secondary cause?','A 17-year-old with sustained BP 150/96',['A 52-year-old obese man with stage 1 HTN and a sedentary lifestyle','A 45-year-old woman whose parents both have HTN','A 60-year-old with stage 1 HTN and high sodium intake'],'Secondary HTN is often diagnosed before age 20 or after 50; an adolescent onset is a classic red flag.')]),

c('Pathophysiology contrast',
'<p><strong>Primary:</strong> multifactorial — stress, high NaCl, genetics, and obesity raise sympathetic activity, salt/water retention, RAAS activity, and cause vascular changes → ↑ <strong>cardiac output</strong> and/or ↑ <strong>peripheral resistance</strong> (I-33 figure).</p>'+
'<p><strong>Secondary:</strong> a specific mechanism, e.g.:</p>'+
tbl(['Etiology','Mechanism'],[
['Renal artery stenosis','Hypoperfused kidney constantly activates RAAS'],
['Primary hyperaldosteronism','Excess aldosterone → Na/water retention, hypokalemia'],
['Pheochromocytoma','Catecholamine surges'],
['Cushing syndrome','Glucocorticoid excess → Na/water retention'],
['OSA','Hypoxia → sympathetic activation'],
['Coarctation','Fixed aortic narrowing → high upper-body pressures']]),
['primary-pathophysiology','secondary-pathophysiology'],
[q('In primary hypertension, the many contributing mechanisms ultimately raise BP by increasing which two hemodynamic variables?','Cardiac output and/or peripheral resistance',['Venous capacitance and heart rate only','Pulmonary vascular resistance and preload only','Stroke volume and venous return only'],'BP = CO × PVR; primary HTN mechanisms raise one or both.'),
q('What is the mechanism of hypertension in obstructive sleep apnea?','Hypoxia triggers sympathetic nervous system activity',['Glucocorticoid-driven sodium retention','Fixed narrowing of the thoracic aorta','Autonomous aldosterone secretion'],'OSA hypoxia drives SNS activity → HTN.')],
[q('A 30-year-old with episodic BP surges has a tumor making norepinephrine and epinephrine. Which category and mechanism fit?','Secondary hypertension from catecholamine excess',['Primary hypertension from sympathetic hyperactivity of unknown cause','Secondary hypertension from glucocorticoid excess','Secondary hypertension from a fixed renal artery obstruction'],'Pheochromocytoma is an identifiable (secondary) cause acting through catecholamines.')]),

c('Secondary HTN etiologies grouped',
tbl(['Group','Etiologies'],[
['<strong>Congenital</strong>','Polycystic kidney disease, coarctation of the aorta'],
['<strong>Acquired</strong>','Renal artery stenosis, obstructive sleep apnea, medications/substances'],
['<strong>Endocrine</strong>','Hyperaldosteronism, Cushing’s, pheochromocytoma, thyroid disease']])+
hy('OSA is present in more than 50% of people with HTN — think of it in resistant HTN, snoring, and obesity.'),
['secondary-etiologies'],
[q('Which secondary cause of hypertension is classified as congenital?','Coarctation of the aorta',['Renal artery stenosis','Obstructive sleep apnea','Pheochromocytoma'],'Congenital: PCKD and coarctation. RAS and OSA are acquired; pheo is endocrine.'),
q('Which secondary cause of hypertension is classified as endocrine?','Primary hyperaldosteronism',['Polycystic kidney disease','Renal artery stenosis','Coarctation of the aorta'],'Endocrine: hyperaldosteronism, Cushing’s, pheochromocytoma, thyroid disease.')],
[q('An obese man with loud snoring and daytime sleepiness has BP above goal on three drugs. Which secondary cause is most common and fits best?','Obstructive sleep apnea',['Coarctation of the aorta','Pheochromocytoma','Polycystic kidney disease'],'OSA occurs in more than 50% of hypertensives and should be considered in resistant HTN with snoring and obesity.')])
]),

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

/* ---------------- Objective 8 ---------------- */
s('08-renovascular-resistant','8. Renovascular hypertension and resistant hypertension','Objective 8. Part I slides 44, 46–49; Part III slides 104–105.',[
c('Renovascular hypertension',
'<p><strong>Renovascular HTN</strong> = hypertension caused by <strong>renal artery stenosis</strong>. The poorly perfused kidney <strong>constantly activates RAAS</strong>: high renin → Ang II → arteriolar vasoconstriction and aldosterone → volume expansion and high BP. Because the stenosis is a fixed obstruction, the high BP never restores flow to that kidney, and it stresses the normal kidney.</p>'+
tbl(['Cause','Typical patient','Imaging clue'],[
['<strong>Atherosclerosis</strong>','<strong>Men over 50</strong> with CAD risk factors (HLD, tobacco, DM, CKD, PAD)','Ostial/proximal stenosis'],
['<strong>Fibromuscular dysplasia</strong>','<strong>Women under 50</strong>','<strong>“String of beads/pearls”</strong>']]),
['renovascular-definition','ras-populations'],
[q('Renovascular hypertension is caused by:','Renal artery stenosis with constant RAAS activation',['Polycystic kidney enlargement','Glomerular hyperfiltration from diabetes','Adrenal aldosterone-producing adenoma'],'RAS makes the hypoperfused kidney drive RAAS continuously.'),
q('Fibromuscular dysplasia causing renal artery stenosis typically affects:','Women under 50',['Men over 50 with CAD risk factors','Children with coarctation','Older women with diabetes only'],'FMD = women under 50; atherosclerosis = men over 50 with risk factors.')],
[q('A 32-year-old woman with new severe HTN has a renal angiogram showing a “string of beads.” What is the cause?','Fibromuscular dysplasia',['Atherosclerotic renal artery stenosis','Polycystic kidney disease','Renal artery aneurysm from trauma'],'The string-of-beads appearance is classic for FMD.'),
q('A 68-year-old smoker with diabetes and PAD develops worsening HTN. Which renovascular cause is most likely?','Atherosclerotic renal artery stenosis',['Fibromuscular dysplasia','Coarctation of the aorta','Pheochromocytoma'],'Atherosclerotic RAS occurs in men over 50 with CAD risk factors.')]),

c('Resistant hypertension',
'<p><strong>Resistant HTN</strong> = BP <strong>above goal despite maximum tolerated doses of three antihypertensive classes, one of which is a thiazide diuretic</strong>.</p>'+
ul(['Most common 3-drug regimen: <strong>ACEI or ARB + CCB + thiazide</strong> (controls ~80%)','If still uncontrolled: confirm <strong>adherence</strong>, check <strong>home BP</strong>, exclude interfering drugs/intake','Add a <strong>4th drug</strong>: aldosterone antagonist, β-blocker, central agent, α-blocker, or direct vasodilator','Consider HTN-specialist referral and/or a <strong>secondary HTN work-up</strong> (secondary causes ≈20% of resistant HTN)']),
['resistant-definition','resistant-management'],
[q('Resistant hypertension requires uncontrolled BP on maximal doses of three drug classes including:','A thiazide diuretic',['A beta-blocker','A loop diuretic','An aldosterone antagonist'],'Resistant HTN: above goal on maximal tolerated doses of 3 classes, one being a thiazide.'),
q('Which three-drug combination controls BP in about 80% of patients?','ACEI or ARB + CCB + thiazide',['ACEI + ARB + thiazide','Beta-blocker + alpha-blocker + loop','Clonidine + hydralazine + loop'],'ACEI/ARB + CCB + thiazide is the most widely used triple therapy.')],
[q('A patient remains at 148/92 on maximal lisinopril, amlodipine, and chlorthalidone. Adherence and home readings are confirmed. What is a reasonable next step?','Add a fourth agent such as an aldosterone antagonist and consider secondary HTN work-up',['Add losartan to the lisinopril','Stop all drugs and restart one at a time','Accept the BP as goal'],'This is resistant HTN; add a 4th drug (e.g., spironolactone) and evaluate for secondary causes. Never combine ACEI + ARB.')])
]),

/* ---------------- Objective 9 ---------------- */
s('09-secondary-workup','9. Secondary hypertension: etiologies, when to suspect, and testing','Objective 9. Part I slides 43–66; Part II slides 48–50.',[
c('When to screen for secondary HTN',
'<p>Testing is expensive — screen with <strong>clinical suspicion</strong>:</p>'+
ul(['<strong>New-onset HTN when young</strong> (before ~20–25; can occur younger in Black patients) — secondary HTN is often found before 20 or after 50','<strong>HTN refractory to treatment</strong> (more than 3–4 drugs)','<strong>Specific clinical/lab clues</strong>: persistent hypokalemia, epigastric/abdominal bruits, BP difference between arms, episodic HTN with flushing/palpitations']),
['when-to-suspect'],
[q('Which feature is a lecture-listed reason to screen for secondary hypertension?','Persistent hypokalemia',['Stage 1 HTN in a 55-year-old with obesity','A family history of essential hypertension','BP that falls with weight loss'],'Clues include persistent hypokalemia, abdominal bruits, arm BP differences, and episodic HTN/flushing/palpitations.'),
q('Refractory hypertension that should prompt a secondary work-up is BP uncontrolled on more than how many drugs?','3–4 drugs',['1 drug','2 drugs','6 drugs'],'HTN refractory to more than 3–4 meds warrants secondary screening.')],
[q('Which patient most warrants a secondary hypertension work-up?','A 19-year-old with new BP 162/100',['A 58-year-old with stage 1 HTN controlled on one drug','A 47-year-old with elevated BP and a high-salt diet','A 66-year-old with isolated systolic HTN at 136/72'],'New-onset HTN in a young patient is a key screening trigger.')]),

c('Renal artery stenosis: clues and testing',
'<p><strong>Suspect RAS if:</strong></p>'+
ul(['<strong>AKI after starting an ACEI/ARB</strong> (check a chemistry panel within a week of starting)','Refractory HTN in a patient with RAS risk factors','<strong>Recurrent flash pulmonary edema</strong>','<strong>Abdominal bruit</strong> over the renal artery'])+
tbl(['Test','Notes'],[
['<strong>Duplex Doppler renal artery US</strong>','Cheap, non-invasive, no radiation; operator dependent; <strong>initial test when suspicion is low</strong>'],
['CT or MR angiography','More expensive, non-invasive; dye load and radiation (CT)'],
['<strong>Renal/aortic angiogram</strong>','<strong>Gold standard</strong>; invasive, dye load; can intervene (PTRA/stent) at the same time']]),
['ras-clues','ras-testing'],
[q('Which test is the gold standard for renal artery stenosis?','Renal artery angiogram',['Duplex Doppler ultrasound','CT angiography','Plasma renin activity'],'Catheter angiography is the gold standard and allows same-session intervention.'),
q('Which test is generally the initial study when suspicion for renal artery stenosis is low?','Duplex Doppler renal artery ultrasound',['Catheter angiography','MR angiography','Renal biopsy'],'Duplex US is cheap, non-invasive, and radiation-free — the usual first test.'),
q('Which finding should prompt suspicion of renal artery stenosis?','Recurrent flash pulmonary edema',['Rib notching on chest x-ray','Episodic pallor and palpitations','Bilateral flank masses with hematuria'],'Flash pulmonary edema, abdominal bruit, refractory HTN, and AKI on ACEI/ARB suggest RAS.')],
[q('One week after starting lisinopril, a 70-year-old smoker’s creatinine rises from 1.0 to 1.9. An abdominal bruit is heard. What diagnosis should you suspect?','Renal artery stenosis',['Polycystic kidney disease','Primary hyperaldosteronism','ACE inhibitor–induced angioedema'],'AKI after ACEI/ARB plus an abdominal bruit in a high-risk patient suggests RAS.')]),

c('Polycystic kidney disease and coarctation',
tbl(['','Polycystic kidney disease','Coarctation of the aorta'],[
['Type','<strong>Autosomal dominant</strong>, congenital','Congenital narrowing <strong>after the great-vessel take-off</strong>'],
['Findings','Kidneys enlarge up to 5× with cysts; <strong>flank pain, hematuria, UTI, renal stones</strong>, poor urine concentration','<strong>Upper-extremity BP/pulses higher than lower</strong>; radial–femoral delay; chest bruit; <strong>rib notching</strong> (Roesler sign) from dilated intercostal collaterals'],
['Testing','Renal imaging','<strong>Echo in children, CTA in adults</strong>']]),
['pckd','coarctation'],
[q('Inferior rib notching on chest x-ray (Roesler sign) suggests:','Coarctation of the aorta',['Polycystic kidney disease','Pheochromocytoma','Cushing syndrome'],'Dilated intercostal collaterals bypassing a coarctation notch the ribs.'),
q('Which test diagnoses coarctation of the aorta in an adult?','CT angiography',['Echocardiogram only','Renal duplex ultrasound','24-hour urine metanephrines'],'Echo is diagnostic in children; CTA in adults.'),
q('What is the inheritance pattern of polycystic kidney disease in the lecture?','Autosomal dominant',['Autosomal recessive only','X-linked','Mitochondrial'],'PCKD is described as an autosomal dominant disease.')],
[q('A 24-year-old with HTN has arm BP 168/96, leg BP 120/80, and a radial–femoral pulse delay. What is the likely cause?','Coarctation of the aorta',['Renal artery stenosis','Primary hyperaldosteronism','White coat hypertension'],'Higher upper- than lower-extremity BP with femoral delay points to coarctation.'),
q('A 38-year-old with HTN has bilateral flank masses, hematuria, and recurrent kidney stones. His father had the same. Which cause fits?','Polycystic kidney disease',['Coarctation of the aorta','Fibromuscular dysplasia','Pheochromocytoma'],'Enlarged cystic kidneys, flank pain, hematuria, stones, and AD inheritance = PCKD.')]),

c('Endocrine causes',
tbl(['Cause','Key features','Testing in lecture'],[
['<strong>Pheochromocytoma</strong>','Rare, usually benign adrenal medulla tumor; <strong>paroxysms</strong> of severe HTN, <strong>palpitations, diaphoresis, pallor</strong>, headache; can cause flash pulmonary edema, MI, stroke','<strong>24-hour urine metanephrines and catecholamines</strong> → if high, adrenal CT/MRI with contrast'],
['<strong>Primary hyperaldosteronism</strong>','Adrenal hyperplasia or adenoma; Na/water retention, <strong>hypokalemia</strong>, <strong>metabolic alkalosis</strong>; <strong>generalized weakness</strong>','(not specified)'],
['<strong>Cushing syndrome</strong>','Pituitary ACTH adenoma, adrenal adenoma/hyperplasia, or ectopic ACTH (usually SCLC); Na/water retention','(not specified)'],
['<strong>Thyroid disease</strong>','Hypo- or hyperthyroidism (HTN from hypothyroidism is uncommon)','<strong>TSH</strong>']])+
cl('screen primary hyperaldosteronism with a plasma aldosterone-to-renin ratio; screen Cushing syndrome with 24-hour urine free cortisol, late-night salivary cortisol, or a 1-mg overnight dexamethasone suppression test.'),
['pheochromocytoma','hyperaldosteronism','cushing','thyroid'],
[q('What is the initial lab test for suspected pheochromocytoma in the lecture?','24-hour urine metanephrines and catecholamines',['Serum TSH','Plasma aldosterone alone','Renal duplex ultrasound'],'24-h urine metanephrines/catecholamines first; adrenal CT/MRI if elevated.'),
q('Which electrolyte/acid-base picture fits primary hyperaldosteronism?','Hypokalemia with metabolic alkalosis',['Hyperkalemia with metabolic acidosis','Hyponatremia with metabolic acidosis','Hypercalcemia with respiratory alkalosis'],'Excess aldosterone wastes K+ and H+ in urine.'),
q('Which test does the lecture use to screen for thyroid-related hypertension?','TSH',['Free T3 only','Thyroid ultrasound','Radioactive iodine uptake'],'Screen either hypo- or hyperthyroidism with a TSH.'),
q('The most common ectopic source of ACTH causing Cushing syndrome is:','Small cell lung cancer',['Pheochromocytoma','Medullary thyroid cancer','Renal cell carcinoma'],'Paraneoplastic ACTH most often comes from SCLC.')],
[q('A 41-year-old has episodes of pounding headache, palpitations, sweating, and pallor with BP 220/120, and normal BP between episodes. What is the next test?','24-hour urine metanephrines and catecholamines',['Adrenal vein sampling first','Renal angiogram','Overnight sleep study'],'Paroxysmal HTN with palpitations, diaphoresis, and pallor suggests pheochromocytoma.'),
q('A 46-year-old with resistant HTN complains of generalized weakness. K+ is 2.9 and HCO3 is 32 off diuretics. Which cause is most likely?','Primary hyperaldosteronism',['Pheochromocytoma','Hypothyroidism','Coarctation of the aorta'],'Hypokalemia, metabolic alkalosis, and weakness point to aldosterone excess.')]),

c('OSA and medications/substances',
'<p><strong>OSA:</strong> present in <strong>more than 50%</strong> of hypertensives; consider in resistant HTN, snoring, obesity; hypoxia → SNS. <strong>CPAP</strong> treats OSA and may not cure HTN but makes medications more effective.</p>'+
'<p><strong>Medications/substances:</strong> ethanol (common and hard to treat), cocaine/methamphetamine, estrogens, ephedra/pseudoephedrine, NSAIDs, black licorice (lowers K+, raises BP).</p>'+
'<p><strong>History clues:</strong> OTC meds, OCPs, EtOH, illicit drugs; heat/cold intolerance or HR changes (thyroid); snoring and daytime sleepiness (OSA).</p>',
['osa','medication-causes'],
[q('What effect does CPAP have on hypertension in OSA patients according to the lecture?','It may not relieve HTN but makes antihypertensives more effective',['It cures HTN in most patients','It raises BP by increasing intrathoracic pressure','It has no relationship to BP control'],'CPAP treats OSA and makes BP more responsive to medication.'),
q('Black licorice raises BP by causing:','Low potassium with sodium/volume retention',['Catecholamine release','Hyperthyroidism','Renal artery vasospasm'],'Licorice contains a chemical that lowers K+ and raises BP.')],
[q('A 50-year-old with obesity and resistant HTN reports his wife hears loud snoring and pauses in breathing. What should you order?','A sleep study for obstructive sleep apnea',['24-hour urine metanephrines','Renal angiogram','Thyroid ultrasound'],'OSA should be considered in resistant HTN with snoring and obesity.')])
]),

/* ---------------- Objective 10 ---------------- */
s('10-primary-etiologies','10. Primary hypertension: suspected mechanisms and contributing conditions','Objective 10. Part I slides 31–42.',[
c('Suspected mechanisms of primary HTN (brief)',
'<p>Multifactorial and complex; no single known process. Possible mechanisms:</p>'+
tbl(['Mechanism','Key point'],[
['<strong>Sympathetic hyperactivity</strong>','Increased sympathetic tone raises vascular tone'],
['<strong>Genetics</strong>','HTN is <strong>twice as common</strong> with 1–2 hypertensive parents'],
['<strong>Reduced nephron mass</strong>','Genetic, fetal, and lifetime events'],
['<strong>Sodium handling</strong>','Salt load normally raises BP then natriuresis via natriuretic peptides; disordered in primary HTN'],
['<strong>Immunologic</strong>','Renal immune-cell infiltration; immunosuppression lowers BP'],
['<strong>Developmental</strong>','Abnormal aortic elasticity or reduced microvascular network (prematurity) → adult HTN']]),
['sns-hyperactivity','genetics','nephron-mass','sodium-handling','immunologic','developmental'],
[q('Hypertension is about how much more common in people with one or two hypertensive parents?','Twice as common',['Equally common','Ten times as common','Half as common'],'Genetics: HTN is twice as common with 1–2 hypertensive parents.'),
q('Which observation supports an immunologic mechanism for primary hypertension?','Pharmacologic immunosuppression lowers BP',['Salt restriction lowers BP','Beta-blockers lower renin','Weight loss lowers BP'],'HTN is associated with renal immune-cell infiltration, and immunosuppression lowers BP.')],
[q('A 35-year-old born at 28 weeks’ gestation develops hypertension. Which proposed mechanism best links his history to HTN?','Reduced fetal development of the microvascular capillary network',['Autonomous aldosterone secretion','Renal artery fibromuscular dysplasia','Excess cortisol from a pituitary adenoma'],'Prematurity with reduced microvascular development is a proposed cause of adult-onset primary HTN.')]),

c('Non-modifiable risk factors',
ul(['<strong>Genetics</strong> (1–2 first-degree relatives with HTN)','<strong>African American race</strong>: about 10 years earlier onset, more severe, more complications','<strong>Male sex</strong>','<strong>Psychosocial stress</strong>: hostile attitude, impatience, depression','<strong>Low socioeconomic status</strong>','<strong>Age</strong>: especially systolic HTN']),
['non-modifiable'],
[q('Which is a non-modifiable risk factor for hypertension in the lecture?','Advancing age',['Obesity','Excess alcohol','High-sodium diet'],'Non-modifiable: genetics, African American race, male sex, psychosocial stress, low SES, age.'),
q('Advancing age particularly increases the risk of which form of hypertension?','Systolic hypertension',['Diastolic hypertension','White coat hypertension','Secondary hypertension'],'Age especially raises systolic HTN risk.')],
[q('A hostile, impatient 50-year-old man with depression and HTN asks if his personality matters. What does the lecture say?','Psychosocial stress traits are listed risk factors for HTN',['Personality has no relationship to BP','Only anxiety, not hostility, raises BP','These traits cause secondary HTN'],'Psychosocial stress — hostility, impatience, depression — is a listed risk factor.')]),

c('Contributing conditions: obesity, diabetes/dyslipidemia, CKD',
tbl(['Condition','How it contributes'],[
['<strong>Obesity</strong>','↑ intravascular volume, ↑ cardiac output, ↑ sympathetic outflow, RAAS activation; weight loss lowers BP modestly'],
['<strong>Diabetes and dyslipidemia</strong>','CV risk factors themselves and increase the risk of developing HTN'],
['<strong>CKD</strong>','Any loss of nephron mass raises risk; higher CKD stage → more HTN, often difficult to control']]),
['obesity','diabetes-dyslipidemia','ckd'],
[q('Which set of changes explains how obesity raises BP?','Increased intravascular volume, cardiac output, sympathetic outflow, and RAAS activity',['Decreased cardiac output with increased venous capacitance','Increased ANP and natriuresis','Decreased sympathetic tone and bradycardia'],'Obesity raises volume, CO, sympathetic outflow, and activates RAAS.'),
q('How does CKD stage relate to hypertension?','Higher CKD stage makes HTN more likely and harder to control',['Advanced CKD protects against HTN','CKD only causes hypotension','CKD stage is unrelated to BP'],'Any loss of nephron mass increases risk; higher stages bring difficult-to-control HTN.')],
[q('A patient with stage 4 CKD needs four drugs to approach goal. How do you explain this?','Reduced nephron mass in advanced CKD causes more frequent and harder-to-control HTN',['He must have white coat hypertension','CKD causes hypotension, so this must be primary hyperaldosteronism','His HTN is caused by dyslipidemia alone'],'The higher the CKD stage, the more likely and harder to control the HTN.')]),

c('Lifestyle and other contributors',
tbl(['Factor','Key point'],[
['<strong>Alcohol</strong>','More than 2 drinks/day raises risk (↑ catecholamines); hard to control above 40 g/day or with binges'],
['<strong>High sodium / low potassium</strong>','Sodium restriction lowers BP (2 g/day recommended); low K contributes; K intake 90 mmol/day'],
['<strong>Sedentary lifestyle / weight gain</strong>','Aerobic exercise lowers BP in previously sedentary people'],
['<strong>Smoking</strong>','↑ plasma norepinephrine; synergistic CV risk with HTN'],
['<strong>Insufficient sleep</strong>','Less than 7 hours nightly'],
['<strong>Polycythemia</strong>','↑ blood viscosity'],
['<strong>NSAIDs</strong>','Raise BP about 5 mmHg on average']])+
'<p><strong>Counseling:</strong> explain that many factors, only some modifiable, cause primary HTN; use therapeutic lifestyle change with motivational interviewing; medications often needed meanwhile.</p>',
['alcohol','sodium-potassium','inactivity','smoking','sleep','polycythemia','nsaids','counseling'],
[q('Smoking raises blood pressure mainly by increasing:','Plasma norepinephrine',['Aldosterone','Blood viscosity','Cortisol'],'Smoking raises BP by increasing plasma norepinephrine.'),
q('Polycythemia raises blood pressure by:','Increasing blood viscosity',['Activating baroreceptors','Lowering potassium','Increasing ANP'],'Higher red-cell mass increases viscosity.'),
q('Less than how many hours of sleep nightly is associated with hypertension?','7 hours',['4 hours','5 hours','9 hours'],'Insufficient sleep (under 7 hours nightly) is associated with HTN.')],
[q('A patient with HTN works nights, sleeps 5 hours, smokes, and drinks 4 beers daily. Which combination of contributors does the lecture identify?','Insufficient sleep, smoking, and excess alcohol',['Only the alcohol','Only the smoking','None — these affect lipids, not BP'],'Sleep under 7 h, smoking (↑ NE), and more than 2 drinks/day all raise BP.'),
q('A sedentary patient asks which single exercise change helps BP most. What does the lecture support?','Regular aerobic exercise, which lowers BP in previously sedentary people',['Heavy weightlifting only','No exercise until BP is controlled','Exercise only helps already active people'],'Aerobic exercise lowers BP in sedentary people; more strenuous exercise in active people adds less.')])
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
]),

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
