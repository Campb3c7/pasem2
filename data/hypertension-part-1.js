/* Veal, Hypertension Part I (deck hypertension-part-1). Official objectives 1, 2, 3, 8, 9, 10 of the shared
   "Hypertension, Parts I, II and III" list, placed with the deck that teaches them. Slide numbers are cited as I-, II- or III-;
   a few sections also draw on slides from the other two parts. Section ids are unchanged from the combined lecture.
   Covers: epidemiology and social determinants, BP physiology (RAAS, sympathetic tone, baroreceptors), primary vs secondary HTN, renovascular and resistant HTN, secondary causes and testing, and primary HTN mechanisms. */
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

window.HYPERTENSION_PART1_OBJECTIVES=[

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
])

];
})();
