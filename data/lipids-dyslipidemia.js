/* Brandell, Lipid Physiology and Dyslipidemia (with pharmacology). One section per supplied objective, in order; the
   pharmacologic-treatment objective is split into one section per drug group (17a-17g). Picture-only slides (5, 12, 14,
   22, 25, 27, 42, 53, 61, 77, 84) were rendered and their content folded into the matching cards. Labeled
   "Clarification" notes are the only additions beyond the slides. */
(function(){
"use strict";
/* Prompts, choices, explanations, and titles are rendered as escaped text, so decode the few entities used there. */
var ENT={"&ndash;":"–","&rsquo;":"’","&rarr;":"→","&uarr;":"↑","&darr;":"↓","&ge;":"≥","&le;":"≤","&lt;":"<","&gt;":">","&times;":"×","&ldquo;":"“","&rdquo;":"”","&minus;":"−","&divide;":"÷","&mdash;":"—","&plusmn;":"±","&asymp;":"≈"};
function d(x){return String(x).replace(/&[a-zA-Z]+;/g,function(m){return ENT[m]||m;});}
function q(p,a,w,e){return {prompt:d(p),choices:[a].concat(w).map(d),correct:0,explanation:d(e)};}
function c(t,h,v,tests,applies){return {title:t,html:h,coverage:v,test:tests,apply:applies};}
function s(id,t,desc,units){var r={id:id,title:d(t),description:d(desc),cards:[],test:[],apply:[]};units.forEach(function(x,i){r.cards.push({title:d(x.title),html:x.html,coverage:x.coverage});['test','apply'].forEach(function(m){x[m].forEach(function(z){z.card=i;r[m].push(z);});});});return r;}
function hy(x){return '<div class="box-hy"><span class="lbl">High yield</span>'+x+'</div>';}
function mn(x){return '<div class="box-mnemonic"><span class="lbl">Mnemonic</span>'+x+'</div>';}
function cl(x){return '<p><em>Clarification (standard reference, not on the slides):</em> '+x+'</p>';}
function tbl(head,rows){return '<table class="learn-table"><tr>'+head.map(function(h){return '<th>'+h+'</th>';}).join('')+'</tr>'+rows.map(function(r){return '<tr>'+r.map(function(x){return '<td>'+x+'</td>';}).join('')+'</tr>';}).join('')+'</table>';}

window.LIPIDS_DYSLIPIDEMIA_OBJECTIVES=[

/* ---------- Objective 1 ---------- */
s('01-lipids-atherosclerosis','1. Role of lipids in atherosclerosis and cardiovascular disease','Objective 1. Slides 3&ndash;4, 10, 27, 63.',[
c('Atherosclerosis: the disease lipids drive',
'<p><strong>Atherosclerosis</strong> = &ldquo;narrowing and hardening of the arteries.&rdquo; It is the <strong>most common cause (MCC) of cardiovascular morbidity and mortality</strong>.</p>'+
'<ul><li>Progressive disorder that leads to <strong>coronary heart disease, cerebrovascular disease, PAD, and aortic atherosclerosis/aneurysm</strong>.</li><li>Starts early: about <strong>1 in 6 American teenagers</strong> already show beginning stages.</li></ul>'+
'<p>Three driving processes:</p><ol><li><strong>Endothelial injury</strong></li><li><strong>Accumulation of lipoproteins</strong></li><li><strong>Inflammation</strong></li></ol>'+
hy('Lipids matter because lipoprotein accumulation in the vessel wall is one of the three core processes of atherosclerosis, the leading cause of CV morbidity and mortality.'),
['atherosclerosis-burden','atherosclerosis-drivers','atherosclerosis-outcomes'],
[q('What is the most common cause of cardiovascular morbidity and mortality?','Atherosclerosis',['Valvular heart disease','Cardiomyopathy','Congenital heart disease'],'Atherosclerosis is the MCC of CV morbidity and mortality.'),
q('Which three processes drive atherosclerosis?','Endothelial injury, lipoprotein accumulation, and inflammation',['Valve calcification, arrhythmia, and fibrosis','Hypercoagulability, anemia, and hypoxia','Vasospasm, aneurysm, and dissection'],'The lecture lists endothelial injury, accumulation of lipoproteins, and inflammation.'),
q('About what fraction of American teenagers already show early atherosclerosis?','1 in 6',['1 in 50','1 in 100','1 in 2'],'Roughly 1:6 American teenagers have beginning stages of atherosclerosis.')],
[q('A 68-year-old has claudication, a prior MI, and an abdominal aortic aneurysm. Which single process best links all three problems?','Atherosclerosis',['Vasculitis','Cardiac amyloidosis','Rheumatic heart disease'],'Atherosclerosis progresses to CHD, PAD, and aortic atherosclerosis/aneurysm.')]),

c('Which lipid fractions raise or lower risk',
tbl(['Lipid','Effect on CV risk'],[
['<strong>&uarr; LDL-C</strong> (hyperlipidemia)','<strong>Increases CAD risk</strong>'],
['<strong>&uarr; HDL-C</strong>','<strong>May be cardioprotective</strong>'],
['<strong>&uarr; TG</strong> (hypertriglyceridemia)','Risk factor for atherosclerosis; if <strong>severe can cause pancreatitis</strong>']])+
'<p>The coronary risk ratio climbs steeply with plasma cholesterol (about 1&times; at 200 mg/dL, 2&times; at 250, 4&times; at 300).</p>'+
'<ul><li>Treating &uarr; TC/LDL-C slows CAD progression: <strong>about 15% &darr; CAD mortality for every 10% &darr; in serum cholesterol</strong>.</li><li>The impact of treating HDL and TG is <strong>less clear</strong> (each only shows some correlation with CAD).</li></ul>'+
hy('LDL = bad (causal, treatment proven). HDL = possibly protective. TG = atherosclerosis risk plus pancreatitis when severe.'),
['ldl-role','hdl-role','tg-role','cholesterol-risk-relationship'],
[q('Elevation of which lipid fraction most clearly increases CAD risk?','LDL cholesterol',['HDL cholesterol','Apolipoprotein A-1','Albumin-bound free fatty acids'],'Elevated LDL-C (hyperlipidemia) increases CAD risk.'),
q('Besides atherosclerosis, what acute complication can severe hypertriglyceridemia cause?','Pancreatitis',['Rhabdomyolysis','Cholangitis','Aortic dissection'],'Severely elevated TG can cause pancreatitis.'),
q('About how much does CAD mortality fall for every 10% reduction in serum cholesterol?','About 15%',['About 2%','About 50%','No change'],'The lecture cites a 15% decrease in CAD mortality for every 10% decrease in serum cholesterol.'),
q('Which lipid fraction may be cardioprotective when elevated?','HDL cholesterol',['LDL cholesterol','VLDL cholesterol','Triglycerides'],'Elevated HDL-C may be cardioprotective.')],
[q('A patient asks why you are focused on lowering his LDL-C rather than raising his HDL-C. Best explanation?','Lowering LDL-C has proven benefit; the impact of changing HDL is less clear',['Raising HDL has proven mortality benefit but no drugs exist','LDL only matters for pancreatitis risk','HDL causes plaque, so it should be lowered'],'Treating high TC/LDL-C slows CAD progression; the effect of HDL/TG treatment is less clear.'),
q('A patient with TG of 2,000 mg/dL presents with epigastric pain radiating to the back. What complication of the lipid disorder is most likely?','Acute pancreatitis',['Acute MI from LDL plaque','Biliary colic from gallstones only','Peptic ulcer'],'Severe hypertriglyceridemia can cause pancreatitis.')])
]),

/* ---------- Objective 2 ---------- */
s('02-plaque-formation','2. Plaque formation: fatty streaks and foam cells','Objective 2. Slides 5&ndash;9, 12.',[
c('Early phase: lipoprotein entry and the fatty streak',
'<ol><li><strong>Small lipoprotein particles penetrate the vascular endothelium</strong>, are <strong>oxidized</strong>, and gather in the <strong>intima</strong>.</li>'+
'<li>This is <strong>accelerated at sites of endothelial damage</strong>: HTN, smoking, shear forces (also &uarr; LDL and diabetes on the stages diagram).</li>'+
'<li>Lipoprotein accumulation in the intima &uarr; <strong>adhesion molecules</strong> on the endothelium, forming a <strong>&ldquo;fatty streak.&rdquo;</strong></li></ol>'+
hy('Fatty streak = oxidized lipoproteins in the <strong>intima</strong> + &uarr; endothelial adhesion molecules.'),
['endothelial-entry','oxidation','fatty-streak'],
[q('In the early phase of atherosclerosis, where do oxidized lipoprotein particles gather?','Intima',['Adventitia','Media only','Pericardium'],'Small lipoprotein particles penetrate the endothelium, are oxidized, and gather within the intimal layer.'),
q('Accumulation of lipoproteins in the intima increases which endothelial molecules, forming a fatty streak?','Adhesion molecules',['Natriuretic peptides','Nitric oxide synthase','Lipoprotein lipase'],'Lipoprotein accumulation causes increased adhesion molecules on the endothelial layer, forming a fatty streak.')],
[q('Why does a long-standing smoker with uncontrolled hypertension develop plaque faster than a healthy peer with the same LDL?','Endothelial damage speeds lipoprotein entry into the intima',['Smoking and HTN lower LDL receptor numbers only','HTN dissolves the fibrous cap','Smoking prevents foam cell formation'],'The early phase is accelerated at sites of endothelial damage (HTN, smoking, shear forces).')]),

c('Foam cells',
'<p>Circulating <strong>monocytes</strong> (which become <strong>macrophages</strong>) bind to fatty streaks and <strong>ingest the oxidized lipoprotein</strong>, becoming <strong>foam cells</strong>.</p>'+
'<ul><li>Endothelial and smooth muscle cells release chemoattractants; monocytes and T cells are recruited.</li><li>The stages diagram notes this inflammatory fatty-streak stage <strong>takes decades and is reversible</strong>.</li></ul>'+
hy('Foam cell = macrophage that has engulfed oxidized LDL.'),
['foam-cells','reversible-stage'],
[q('A foam cell is formed when which cell ingests oxidized lipoprotein?','Monocyte/macrophage',['Platelet','Endothelial cell','Erythrocyte'],'Circulating monocytes (macrophages) bind to fatty streaks and ingest lipoprotein, creating foam cells.'),
q('According to the stages-of-development diagram, the fatty streak/foam cell stage is:','Slow (decades) and reversible',['Rapid (days) and irreversible','Only seen after age 60','Always calcified'],'The inflammatory fatty streak stage takes decades and is reversible.')],
[q('A pathology slide of an arterial wall shows lipid-laden macrophages in the intima but no fibrous cap or calcium. What stage is this?','Fatty streak with foam cells',['Ruptured plaque','Mature calcified plaque','Organized thrombus'],'Foam cells in the intima without a cap or calcium = early fatty streak stage.')]),

c('Smooth muscle response: calcium and the fibrous cap',
'<p>The smooth muscle layer tries to wall off the lesion by:</p>'+
tbl(['Response','Consequence'],[
['<strong>Depositing calcium</strong>','<strong>Hardening</strong> of the artery &rarr; vasodilation inhibited in that area'],
['<strong>Creating a fibrous cap</strong>','<strong>Narrowing</strong> of the artery']])+
'<p>The lesion is now an <strong>atherosclerotic plaque</strong> (lipid-rich core, calcium, cellular debris under a fibrous cap). Inflammation makes the area <strong>locally prothrombotic</strong>.</p>'+
'<p>Luminal narrowing limits flow: <strong>claudication</strong> in peripheral vessels, <strong>angina</strong> in coronary vessels.</p>',
['calcification','fibrous-cap','atherosclerotic-plaque','luminal-narrowing'],
[q('Smooth muscle deposition of calcium in a plaque causes:','Arterial hardening with impaired vasodilation',['Arterial dilation and aneurysm only','Immediate plaque rupture','Increased nitric oxide release'],'Calcium deposition hardens the artery so vasodilation is inhibited in that area.'),
q('What does the smooth muscle layer create over the lesion that narrows the artery?','Fibrous cap',['Fatty streak','Foam cell','Thrombus'],'The smooth muscle creates a fibrous cap, narrowing the artery; the lesion is now an atherosclerotic plaque.')],
[q('A 62-year-old has calf pain with walking that resolves with rest. Which plaque process best explains the symptom?','Luminal narrowing from a fibrous plaque limiting flow',['Foam cells alone without narrowing','Acute plaque rupture with embolus','Venous valve incompetence'],'Plaque growth into the lumen causes flow limitation: claudication in peripheral vessels, angina in coronaries.')]),

c('Plaque rupture and thrombosis',
'<ul><li>The plaque is <strong>predisposed to fissure/rupture</strong>.</li><li>The exposed core triggers <strong>platelet aggregation</strong> &rarr; <strong>thrombus or embolus</strong>.</li><li>Result: oxygen deprivation of heart and brain (<strong>ACS: STEMI/NSTEMI/UA</strong>; <strong>TIA/CVA</strong>) and impaired flow to kidneys and lower extremities.</li></ul>'+
tbl(['Fibrous cap','Narrowing','Stability'],[['Thick','More narrowing','More stable'],['Thin','Less narrowing','<strong>Less stable</strong> (rupture-prone)']])+
mn('Plaque sequence: <strong>Enter &rarr; Oxidize &rarr; Streak &rarr; Foam &rarr; Cap &rarr; Crack &rarr; Clot</strong>.'),
['plaque-rupture','thrombosis','cap-stability'],
[q('When a plaque ruptures, what process forms the thrombus?','Platelet aggregation on the exposed core',['Foam cell apoptosis','Calcium deposition','Lipoprotein lipase activation'],'Exposure of the plaque core causes platelet aggregation, forming a thrombus or embolus.'),
q('Which fibrous cap is most likely to rupture?','A thin fibrous cap',['A thick fibrous cap','A heavily calcified thick cap','A cap with no lipid core'],'Thinner caps cause less narrowing but are less stable.')],
[q('A patient whose prior stress test showed only mild coronary narrowing presents with a STEMI. Which mechanism best explains this?','Rupture of a thin-capped, less stable plaque with thrombosis',['Slow growth of a thick stable cap','Fatty streak regression','Isolated calcium deposition'],'Thin-capped plaques cause less narrowing but are less stable and can rupture, leading to thrombus and ACS.')])
]),

/* ---------- Objective 3 ---------- */
s('03-ascvd-definition','3. ASCVD definition, risk equivalent, and recognizing secondary prevention','Objective 3. Slides 10&ndash;11, 57, 94.',[
c('What counts as clinical ASCVD',
'<p><strong>Clinical atherosclerotic cardiovascular disease (ASCVD)</strong> includes:</p>'+
tbl(['Category','Includes'],[
['<strong>Stable angina</strong>','Chronic exertional angina'],
['<strong>Acute coronary syndromes</strong>','MI (STEMI/NSTEMI) and unstable angina'],
['<strong>Ischemic stroke</strong>','CVA or TIA'],
['<strong>Peripheral arterial disease</strong>','PAD'],
['<strong>Revascularization history</strong>','Prior coronary or other arterial revascularization (e.g., stent, bypass)']])+
mn('<strong>&ldquo;SAS PR&rdquo;</strong>: <strong>S</strong>table angina, <strong>A</strong>CS, <strong>S</strong>troke/TIA, <strong>P</strong>AD, <strong>R</strong>evascularization.'),
['ascvd-stable-angina','ascvd-acs','ascvd-stroke-tia','ascvd-pad','ascvd-revascularization'],
[q('Which condition is included in the definition of clinical ASCVD?','Peripheral arterial disease',['Atrial fibrillation','Mitral valve prolapse','Venous thromboembolism'],'Clinical ASCVD = stable angina, ACS, ischemic stroke/TIA, PAD, and history of arterial revascularization.'),
q('Which type of stroke event counts as clinical ASCVD?','Ischemic stroke or TIA',['Subarachnoid hemorrhage from aneurysm','Hemorrhagic stroke from anticoagulation','Migraine with aura'],'The ASCVD definition includes ischemic stroke: CVA or TIA.'),
q('Which acute coronary syndromes are listed under clinical ASCVD?','STEMI, NSTEMI, and unstable angina',['Pericarditis and myocarditis','Takotsubo and coronary dissection only','Stable angina only'],'ACS includes MI (STEMI/NSTEMI) and unstable angina.'),
q('Besides active symptoms, which history automatically places a patient in clinical ASCVD?','Prior coronary or other arterial revascularization',['Prior varicose vein stripping','Prior cholecystectomy','Prior DVT'],'A history needing coronary or other arterial revascularization is part of the ASCVD definition.')],
[q('A 61-year-old had a TIA two years ago and has no other history. How is he classified for lipid management?','Clinical ASCVD (secondary prevention)',['Primary prevention, low risk','Primary prevention, borderline risk','Not classifiable without a calculator'],'TIA is included in clinical ASCVD, so this is secondary prevention.'),
q('A 66-year-old with exertional chest pressure relieved by rest for 3 years asks whether this counts as heart disease for cholesterol treatment. Answer?','Yes; stable angina is clinical ASCVD',['No; only MI counts','No; only stroke counts','Only if troponin is elevated'],'Stable angina is the first item in the clinical ASCVD definition.')]),

c('The ASCVD risk equivalent',
'<p>The lecture states that the clearest evidence for lipid testing and treatment is in patients with <strong>ASCVD or a risk equivalent</strong>.</p>'+
cl('A <strong>risk equivalent</strong> is a condition that carries risk similar to established coronary disease even before an event. <strong>Diabetes mellitus</strong> is the classic CHD risk equivalent (ATP III), which is why the lecture&rsquo;s algorithm gives diabetics aged 40&ndash;75 a statin without needing a risk score.')+
hy('Diabetes is <strong>not</strong> clinical ASCVD, but it is treated as a risk equivalent: DM + age 40&ndash;75 = statin (at least moderate intensity).'),
['risk-equivalent'],
[q('Which condition is the classic ASCVD (CHD) risk equivalent?','Diabetes mellitus',['Hypothyroidism','Obstructive sleep apnea','Osteoarthritis'],'Diabetes is the classic CHD risk equivalent; diabetics 40-75 receive a statin without a risk score.')],
[q('A 52-year-old with type 2 diabetes, no cardiac history, and LDL-C 120 asks if he needs a 10-year risk calculation before a statin. Best response?','No; diabetes aged 40&ndash;75 is itself a statin indication (risk equivalent)',['Yes; statins are given only if risk is 20% or more','No statin until he has an MI','Yes; diabetes does not affect statin decisions'],'Diabetes acts as a risk equivalent; diabetics 40-75 with LDL 70-189 get at least a moderate-intensity statin.')]),

c('Spotting secondary prevention in a case stem',
'<p>Secondary prevention = the patient has <strong>already had</strong> an ASCVD event or procedure. Look for these clues, often buried in surgical history:</p>'+
'<ul><li><strong>Coronary stent</strong>, CABG, peripheral stent/bypass, or carotid revascularization</li><li>Prior MI, unstable angina, or stable angina</li><li>Prior TIA or ischemic stroke</li><li>Known PAD/claudication</li></ul>'+
'<p>If present: <strong>no risk calculator needed</strong> &rarr; <strong>high-intensity statin</strong>.</p>'+
hy('Slide 94 trap: a 56-year-old with DM, HTN, HLD whose <strong>surgical history lists a coronary stent</strong> is a <strong>secondary prevention</strong> patient &rarr; high-intensity statin.'),
['secondary-prevention-recognition'],
[q('When a case stem reveals clinical ASCVD, what is the next step for statin selection?','High-intensity statin without needing a risk calculator',['Calculate 10-year ASCVD risk first','Order CAC before any statin','Start a low-intensity statin'],'Clinical ASCVD = secondary prevention: high-intensity statin, no risk score needed.')],
[q('A 56-year-old with DM, HTN, HLD, and OSA has a surgical history of tonsillectomy, mesh hernia repair, and coronary stent placement. What is his prevention category?','Secondary prevention (clinical ASCVD)',['Primary prevention, diabetes group','Primary prevention, borderline risk','Primary prevention, LDL &ge;190 group'],'The coronary stent is a prior revascularization, so he has clinical ASCVD and needs secondary prevention.'),
q('A 70-year-old had a femoral-popliteal bypass for claudication 5 years ago. Which statin plan fits?','High-intensity statin for secondary prevention',['No statin; he is over 65','Moderate-intensity statin after a risk score','Fish oil instead of a statin'],'Peripheral arterial revascularization/PAD = clinical ASCVD; treat with high-intensity statin.')])
]),

/* ---------- Objective 4 ---------- */
s('04-lipid-metabolism','4. Lipid metabolism: sources of free fatty acids and cholesterol','Objective 4. Slides 13&ndash;24.',[
c('Overview: lipoproteins and the three FFA sources',
'<p>Lipids (<strong>triglycerides and cholesterol</strong>) are <strong>hydrophobic</strong>, so they travel in <strong>lipoproteins</strong>.</p>'+
tbl(['FFA source','Carrier'],[
['1. <strong>Ingestion</strong> (diet)','<strong>Chylomicrons</strong>'],
['2. <strong>Adipose cells</strong> release them','<strong>Albumin</strong>'],
['3. <strong>Liver</strong> produces them','<strong>VLDL</strong> &rarr; IDL &rarr; LDL']])+
'<p>Tissues such as muscle absorb FFAs for <strong>ATP</strong>; FFAs not needed are <strong>stored in adipose</strong>.</p>',
['lipid-transport','ffa-three-sources'],
[q('Why are triglycerides and cholesterol carried in lipoproteins?','They are hydrophobic',['They are too large to filter','They are only made in the gut','They bind hemoglobin'],'Lipids are hydrophobic, so they are transported in lipoproteins.'),
q('Free fatty acids released from adipose cells travel in blood bound to:','Albumin',['Chylomicrons','HDL','Apo C-II'],'Adipose-derived FFAs travel attached to albumin.'),
q('Which lipoprotein carries FFAs that come from the diet?','Chylomicron',['LDL','HDL','IDL'],'Dietary FFAs are repackaged into chylomicrons.')],
[q('During a long run, a student wonders what happens to fatty acids muscle cells take up. Best answer?','They are oxidized to produce ATP',['They are converted to bile acids','They are stored in the muscle as LDL','They are excreted unchanged in urine'],'Muscle cells absorb fatty acids for ATP production; unneeded FFAs are stored in adipose.')]),

c('FFA source 1: ingestion and chylomicrons',
'<ol><li>Dietary fat is <strong>emulsified by bile acids</strong> (bile acids are synthesized from <strong>LDL cholesterol</strong> and reabsorbed in the small intestine).</li>'+
'<li><strong>Lipase</strong> breaks fat into fatty acids, which small intestine cells absorb.</li>'+
'<li>Inside the enterocyte, FFAs are repackaged into <strong>chylomicrons</strong> (sent via lymphatics to the bloodstream).</li>'+
'<li>At tissue capillaries, <strong>lipoprotein lipase (LPL)</strong> breaks up the chylomicron into FFAs for use or storage. <strong>LPL is activated by insulin</strong>; <strong>apo C-II</strong> on the chylomicron binds LPL.</li>'+
'<li>Leftover <strong>chylomicron remnants</strong> (FFAs and cholesterol) go to the <strong>liver</strong>.</li></ol>'+
hy('LPL needs <strong>insulin</strong> (activation) and <strong>apo C-II</strong> (binding). Lose LPL &rarr; chylomicrons pile up.'),
['ffa-ingestion','chylomicron','lipoprotein-lipase','chylomicron-remnant'],
[q('What emulsifies dietary fat during digestion?','Bile acids',['Lipoprotein lipase','Albumin','Apo B'],'Consumed fat is emulsified by bile acids during digestion.'),
q('Which hormone activates lipoprotein lipase?','Insulin',['Glucagon','Cortisol','Epinephrine'],'LPL is activated by insulin.'),
q('Which apolipoprotein on chylomicrons binds lipoprotein lipase?','Apo C-II',['Apo A-1','Apo B-100','Apo (a)'],'The apo C-II receptor on the chylomicron binds LPL.'),
q('Where are chylomicron remnants used?','Liver',['Kidney','Adipose only','Skeletal muscle only'],'Chylomicron remnants (leftover FFAs and cholesterol) are utilized in the liver.')],
[q('A patient with poorly controlled diabetes has very high triglycerides after meals. Which step of chylomicron handling is most impaired by low insulin action?','Lipoprotein lipase activation at capillaries',['Bile acid emulsification','Intestinal lipase digestion','Hepatic LDL receptor synthesis'],'LPL is activated by insulin; poor insulin action impairs chylomicron breakdown.')]),

c('FFA source 2: adipose cells',
'<ul><li>FFAs are stored as globules in <strong>adipocytes</strong>.</li><li><strong>1&ndash;2 hours after a meal</strong>, <strong>&darr; insulin and &uarr; glucagon</strong> signal FFAs to be released.</li><li>Released FFAs travel in the bloodstream bound to <strong>albumin</strong>.</li></ul>',
['ffa-adipose','albumin-transport'],
[q('Which hormonal change signals adipocytes to release FFAs?','&darr; Insulin and &uarr; glucagon',['&uarr; Insulin and &darr; glucagon','&uarr; Insulin and &uarr; glucagon','&uarr; Aldosterone'],'About 1-2 hours after a meal, falling insulin and rising glucagon signal FFA release from adipose.')],
[q('Two hours after lunch a student skips a snack. Insulin falls and glucagon rises. Where do the FFAs his muscles now use mainly come from, and how do they travel?','Adipose cells, carried on albumin',['Chylomicrons from the gut','Liver VLDL only','HDL from peripheral tissues'],'Fasting hormone shifts release stored FFAs from adipocytes, which travel bound to albumin.')]),

c('FFA source 3: liver synthesis and VLDL',
'<ol><li>The liver converts <strong>excess glucose</strong> to FFAs: glucose &rarr; (glycolysis) pyruvate &rarr; acetyl CoA &rarr; citrate (Krebs, mitochondria) &rarr; citrate exported &rarr; acetyl CoA &rarr; <strong>FFAs</strong> in the cytoplasm.</li>'+
'<li>The liver adds these FFAs to absorbed chylomicron remnants to build <strong>VLDL</strong>.</li>'+
'<li>VLDL acts like a chylomicron: <strong>apo C-II activates LPL</strong> at tissue capillaries to release FFAs.</li>'+
'<li>VLDL remnants are cleared or hydrolyzed to <strong>IDL</strong> and then <strong>LDL</strong>; <strong>apo B</strong> on LDL facilitates LDL clearance.</li></ol>'+
hy('Excess carbs &rarr; liver FFAs &rarr; VLDL &rarr; IDL &rarr; LDL. That is why cutting carbs and alcohol lowers TG.'),
['ffa-liver-synthesis','vldl','idl-ldl'],
[q('The liver converts excess glucose into FFAs and packages them into which lipoprotein?','VLDL',['Chylomicron','HDL','Albumin'],'The liver turns excess glucose into FFAs that it stores onto VLDL.'),
q('VLDL remnants are hydrolyzed into which lipoproteins?','IDL and then LDL',['Chylomicrons and HDL','HDL only','Lp(a) only'],'Remaining VLDL remnants are cleared or hydrolyzed to create IDL and LDL.'),
q('Which apolipoprotein on LDL facilitates its clearance?','Apo B',['Apo C-II','Apo A-1','Apo B-48'],'Apo B on the surface of LDL facilitates LDL clearance.')],
[q('A patient eats a very high-carbohydrate diet with little fat yet has elevated VLDL and TG. Best explanation?','The liver converts excess glucose to FFAs and exports them in VLDL',['Dietary carbohydrate is packaged directly into chylomicrons','Carbohydrates block bile acid synthesis','Glucose binds albumin as FFA'],'Liver production of FFAs from excess glucose loads VLDL, raising TG.')]),

c('Cholesterol source 1: ingestion (NPC1L1)',
'<ul><li>Cholesterol is an <strong>esterified complex lipid</strong> used for <strong>hormone synthesis, bile acid production, cell membranes, and energy storage</strong>; it combines with TG to form lipoproteins.</li>'+
'<li>The <strong>small intestine absorbs ingested cholesterol on a gradient</strong> through the <strong>Niemann-Pick C1-Like1 (NPC1L1) transporter</strong>.</li></ul>'+
hy('NPC1L1 = intestinal cholesterol transporter = <strong>ezetimibe</strong> target.'),
['cholesterol-ingestion','npc1l1','cholesterol-uses'],
[q('Which transporter absorbs dietary cholesterol in the small intestine?','Niemann-Pick C1-Like1 (NPC1L1)',['HMG CoA reductase','PCSK9','Lipoprotein lipase'],'Ingested cholesterol is absorbed in the small intestine via the NPC1L1 transporter.'),
q('Which is NOT a listed use of cholesterol in the body?','Oxygen transport in red cells',['Hormone synthesis','Bile acid production','Cell membrane production'],'Cholesterol is used for hormone synthesis, bile acid production, cell membrane production, and energy storage.')],
[q('A drug blocks cholesterol uptake at the intestinal brush border. Which step of cholesterol mobilization is it targeting?','Ingestion via NPC1L1',['Hepatic synthesis via HMG CoA reductase','Adipose release via albumin','LDL receptor degradation'],'Blocking intestinal NPC1L1 targets the ingestion source of cholesterol (this is ezetimibe).')]),

c('Cholesterol source 2: liver synthesis (HMG CoA reductase) and clearance',
'<p><strong>Liver parenchymal cells</strong> synthesize cholesterol:</p>'+
'<p><strong>Acetate &rarr; HMG CoA &rarr;</strong> (<strong>HMG CoA reductase</strong>) <strong>&rarr; mevalonic acid &rarr; cholesterol</strong></p>'+
'<p><strong>Clearance</strong>: cholesterol is recycled into <strong>bile acids</strong> or excreted in free form by the liver.</p>'+
hy('HMG CoA reductase = rate step targeted by <strong>statins</strong>. Bile acid recycling is the step targeted by <strong>bile acid sequestrants</strong>.'),
['cholesterol-liver-synthesis','hmg-coa-reductase','cholesterol-clearance'],
[q('Which enzyme converts HMG CoA to mevalonic acid?','HMG CoA reductase',['Lipoprotein lipase','PCSK9','Acetyl CoA carboxylase only'],'HMG CoA reductase converts HMG CoA to mevalonic acid in cholesterol synthesis.'),
q('Which cells synthesize cholesterol in the body, per the lecture?','Liver parenchymal cells',['Adipocytes','Red blood cells','Pancreatic beta cells'],'Liver parenchymal cells can synthesize cholesterol.'),
q('How does the liver clear cholesterol?','Recycling it into bile acids or excreting it in free form',['Converting it to glucose','Exhaling it as CO2','Filtering it through the kidney'],'Clearance is by recycling cholesterol into bile acids or free form liver excretion.')],
[q('A student asks which cholesterol source a statin targets. Best answer?','Hepatic synthesis, by blocking HMG CoA reductase',['Intestinal absorption at NPC1L1','Adipose release of FFAs','Bile acid reabsorption'],'Statins inhibit HMG CoA reductase, decreasing liver cholesterol production.')])
]),

/* ---------- Objective 5 ---------- */
s('05-lipoprotein-components','5. Components of a lipoprotein: cholesterol, FFAs, lipoprotein, apo receptors','Objective 5. Slides 14, 17, 21&ndash;23, 42.',[
c('Anatomy of a lipoprotein',
'<p>A lipoprotein is a transport particle (the lecture&rsquo;s &ldquo;ship&rdquo; image) with:</p>'+
tbl(['Component','Function'],[
['<strong>Triglyceride / FFAs</strong> (core)','Energy cargo delivered to tissues (released by LPL)'],
['<strong>Cholesterol</strong> (core, esterified)','Cargo for hormones, bile acids, and membranes'],
['<strong>Lipoprotein shell</strong>','Lets hydrophobic lipids travel in watery blood'],
['<strong>Apolipoproteins (apo)</strong> on the surface','Ligands that bind <strong>receptors and enzymes</strong> (e.g., apo C-II &rarr; LPL; apo B &rarr; LDL receptor)']])+
'<p>non-HDL-C = <strong>total cholesterol &minus; HDL-C</strong> (all apo B&ndash;carrying, atherogenic particles).</p>',
['lipoprotein-structure','cholesterol-component','tg-ffa-component','apolipoprotein-role'],
[q('What is the main job of apolipoproteins on a lipoprotein surface?','Bind receptors and enzymes that direct lipoprotein handling',['Store glycogen','Carry oxygen','Synthesize bile acids'],'Apolipoproteins act as ligands for receptors/enzymes, e.g., apo C-II binds LPL and apo B binds the LDL receptor.'),
q('How is non-HDL cholesterol calculated?','Total cholesterol &minus; HDL-C',['LDL-C &minus; HDL-C','TG &divide; 5','Total cholesterol &minus; TG'],'non-HDL-C = Total cholesterol - HDL-C.'),
q('Which lipoprotein cargo is broken down by lipoprotein lipase for tissue energy?','Triglyceride (FFAs)',['Cholesterol esters','Apo B','Albumin'],'LPL breaks down the triglyceride load into FFAs that tissues absorb.')],
[q('A classmate says lipoproteins exist because cholesterol is too reactive for blood. What is the better explanation?','Lipids are hydrophobic, so a protein-lipid shell carries them in plasma',['Lipoproteins make cholesterol water-soluble by turning it into glucose','Lipoproteins are only needed for HDL','Lipoproteins prevent cholesterol from entering cells'],'Lipids (TG and cholesterol) are hydrophobic and need lipoproteins for transport.')]),

c('The lipoprotein classes and their apolipoproteins',
tbl(['Lipoprotein','Made by / from','Main cargo','Key apo'],[
['<strong>Chylomicron</strong>','Intestine (dietary fat)','TG (dietary)','<strong>B-48</strong>, C-II'],
['<strong>VLDL</strong>','Liver','TG (hepatic)','<strong>B</strong>, C-II'],
['<strong>IDL</strong>','VLDL remnant','TG + cholesterol','B'],
['<strong>LDL</strong>','IDL','<strong>Cholesterol</strong>','<strong>B</strong> (binds LDL receptor)'],
['<strong>HDL</strong>','&mdash;','Picks up cholesterol from tissues','<strong>A-1</strong>'],
['<strong>Lp(a)</strong>','LDL-like','Cholesterol','B + apo (a)']])+
hy('Every atherogenic particle carries <strong>apo B</strong>; HDL carries <strong>apo A-1</strong>. Chylomicrons are the only one with <strong>B-48</strong>.'),
['chylomicron-class','vldl-class','ldl-class','hdl-class','lpa'],
[q('Which apolipoprotein is characteristic of HDL?','Apo A-1',['Apo B-48','Apo B','Apo (a)'],'The lecture diagram labels HDL with apo A-1.'),
q('Which apolipoprotein is unique to chylomicrons (and their remnants)?','Apo B-48',['Apo A-1','Apo C-II','Apo (a)'],'Chylomicron remnants carry apo B-48.'),
q('Which lipoprotein is LDL-like but carries an extra apo (a)?','Lp(a)',['IDL','VLDL','HDL'],'Lp(a) is an LDL-like particle with apo B plus apo (a).'),
q('Which lipoprotein is the main cholesterol-rich particle cleared by the liver LDL receptor?','LDL',['Chylomicron','VLDL','HDL'],'LDL is cholesterol-rich and cleared via apo B binding to the LDL receptor.')],
[q('A lab reports a patient&rsquo;s fasting sample is milky from TG-rich particles carrying apo B-48. Which lipoprotein is elevated?','Chylomicrons',['LDL','HDL','Lp(a)'],'Apo B-48 marks chylomicrons, which carry dietary TG.')]),

c('Apo receptors in action',
tbl(['Apo / receptor','Partner','Result','Disease when defective'],[
['<strong>Apo C-II</strong> (chylomicron, VLDL)','<strong>Lipoprotein lipase</strong>','TG released as FFAs to tissues','LPL deficiency &rarr; severe &uarr; TG'],
['<strong>Apo B</strong> (LDL)','<strong>LDL (apo B/E) receptor</strong> on liver','LDL cleared from blood','Familial defective apo B &rarr; &uarr; LDL'],
['<strong>LDL receptor</strong> (liver surface)','Apo B on LDL','Hepatic LDL uptake','Familial defective LDL receptor &rarr; &uarr; LDL'],
['<strong>Apo A-1</strong> (HDL)','&mdash;','Marks HDL, the cholesterol pick-up particle','&mdash;']]),
['apo-c2','apo-b','ldl-receptor','apo-a1'],
[q('Apo B on LDL binds which receptor to clear LDL from the blood?','The LDL (apo B/E) receptor on the liver',['Lipoprotein lipase on capillaries','NPC1L1 in the intestine','The insulin receptor'],'Apo B on LDL binds the hepatic LDL (apo B/E) receptor, facilitating clearance.'),
q('Apo C-II on VLDL activates which enzyme?','Lipoprotein lipase',['HMG CoA reductase','Pancreatic amylase','PCSK9'],'Apo C-II on VLDL activates LPL so FFAs can be released to tissues.')],
[q('A patient has a mutation that prevents LDL particles from binding their hepatic receptor even though receptor numbers are normal. Which lipoprotein component is defective?','Apo B',['Apo C-II','Apo A-1','Lipoprotein lipase'],'Normal receptors but impaired binding points to defective apo B (familial defective apo B).'),
q('A child&rsquo;s TG are extremely high, and testing shows lipoprotein lipase cannot be activated because the surface protein on chylomicrons is missing. Which protein is absent?','Apo C-II',['Apo B','Apo A-1','Apo (a)'],'Apo C-II on chylomicrons and VLDL binds and activates LPL.')])
]),

/* ---------- Objective 6 ---------- */
s('06-primary-secondary-prevention','6. Primary vs secondary prevention of CVD: indications and benefits','Objective 6. Slides 28&ndash;30, 63, 73.',[
c('Definitions',
tbl(['','Primary prevention','Secondary prevention'],[
['When','<strong>Before</strong> the onset of CVD events','<strong>After</strong> a CVD event has occurred'],
['Goal','Prevent the first event (requires recognition of risk)','Prevent <strong>progression and/or recurrence</strong>'],
['Benefit','<strong>Best long-term results</strong>','Still beneficial at any time']]),
['primary-definition','secondary-definition'],
[q('Management started before any CVD event has occurred is called:','Primary prevention',['Secondary prevention','Tertiary prevention','Rehabilitation'],'Primary prevention = strategies before the onset of CVD events.'),
q('The goal of secondary prevention is to:','Prevent progression and recurrence after a CVD event',['Prevent the first-ever CVD event','Screen children for FH','Avoid all medications'],'Secondary prevention is for patients who have already had CVD events.')],
[q('A 58-year-old who had an NSTEMI last year is started on a statin. Which type of prevention is this?','Secondary prevention',['Primary prevention','Screening only','Primordial prevention'],'He has already had a CVD event, so treatment is secondary prevention.')]),

c('Why it matters: benefits and indications',
'<ul><li>About <strong>37%</strong> of patients who have an acute coronary event <strong>die of a coronary event the same year</strong> &rarr; catching patients before they need secondary prevention is ideal, but treatment helps at any time.</li>'+
'<li>Since 1980, the fall in CVD deaths is attributed <strong>50% to better treatments and 50% to risk factor improvement</strong>.</li>'+
'<li>Each <strong>10% &darr; cholesterol &asymp; 15% &darr; CAD mortality</strong>.</li></ul>'+
tbl(['Prevention type','Statin indication (ACC/AHA)'],[
['<strong>Secondary</strong>','Clinical ASCVD &rarr; <strong>high-intensity</strong> statin'],
['<strong>Primary</strong>','LDL-C &ge;190; diabetes age 40&ndash;75 with LDL 70&ndash;189; no diabetes, age 40&ndash;75, LDL 70&ndash;189, 10-year risk &ge;7.5%']]),
['primary-benefit','secondary-benefit','prevention-indications','mortality-decline'],
[q('About what percentage of patients with an acute coronary event die of a coronary event in the same year?','About 37%',['About 3%','About 75%','About 90%'],'Approximately 37% die of a coronary event in the same year, which is why primary prevention is ideal.'),
q('Since 1980, the decline in CVD deaths has been attributed to:','50% improved treatments and 50% improved risk factors',['90% improved treatments and 10% risk factors','100% statins','Mostly genetic changes'],'The reduction is credited 50% to treatments and 50% to risk factor improvement.'),
q('Which group is a secondary prevention statin indication?','Patients with clinical ASCVD',['Patients with LDL-C &ge;190 and no events','Diabetics aged 40&ndash;75','Patients with 10-year risk &ge;7.5%'],'Secondary prevention applies to patients with clinical ASCVD; the others are primary prevention groups.')],
[q('A 45-year-old with no heart disease asks why she should treat her cholesterol now instead of waiting for symptoms. Best answer?','Primary prevention gives the best long-term results, and many first coronary events are fatal within the year',['Treatment only works after an event','Statins cannot help once disease exists','Waiting has no downside'],'Acting before events provides the best long-term results; about 37% die of a coronary event within the same year.'),
q('A 64-year-old with a prior CABG wonders if starting a statin is pointless because the damage is done. Response?','Secondary prevention still reduces progression and recurrence',['Correct; statins do not help after CABG','Only lifestyle change matters now','He needs a risk score first'],'Treating at any time is still beneficial; secondary prevention prevents progression and recurrence.')])
]),

/* ---------- Objective 7 ---------- */
s('07-dyslipidemia-causes','7. Genetic and secondary causes of dyslipidemia','Objective 7. Slides 39&ndash;40, 93.',[
c('Genetic causes',
'<ul><li><strong>Familial hypercholesterolemia</strong> (familial HLD): familial defective LDL receptor, familial defective apo B.</li><li><strong>Familial hypertriglyceridemia</strong>: VLDL overproduction or underutilization (LPL deficiency).</li></ul>'+
hy('Dyslipidemia is <strong>more commonly secondary</strong> to risk factors than genetic.'),
['genetic-causes'],
[q('Which pair names the two genetic categories of dyslipidemia in the lecture?','Familial hypercholesterolemia and familial hypertriglyceridemia',['Hypothyroidism and nephrotic syndrome','Diabetes and obesity','Cushing syndrome and alcohol use'],'Genetic causes are familial hypercholesterolemia and familial hypertriglyceridemia.'),
q('Compared with genetic causes, secondary causes of dyslipidemia are:','More common',['Rarer','Equally rare','Only seen in children'],'Dyslipidemia is more commonly secondary to risk factors.')],
[q('A 19-year-old with LDL-C 260 and a father who had an MI at 40 most likely has which category of dyslipidemia?','Genetic (familial hypercholesterolemia)',['Secondary to hypothyroidism','Secondary to alcohol','Secondary to sedentary lifestyle'],'Very high LDL in a young person with premature family CHD suggests familial hypercholesterolemia.')]),

c('Secondary causes',
tbl(['Category','Secondary causes'],[
['Endocrine/metabolic','<strong>Diabetes mellitus</strong>, <strong>hypothyroidism</strong>, obesity'],
['Organ disease','<strong>Obstructive (cholestatic) liver disease</strong>, <strong>chronic renal failure</strong>'],
['Lifestyle','<strong>Excess alcohol</strong>, <strong>cigarette smoking</strong>, sedentary lifestyle, dietary intake'],
['Prescription drugs','<strong>Progestins, anabolic steroids, corticosteroids, protease inhibitors</strong>'],
['Illicit drugs','<strong>Cocaine</strong>']])+
hy('Always evaluate for secondary causes (TSH, glucose, liver and kidney function, medication list) before or when statins are not working.'),
['secondary-causes','medication-causes'],
[q('Which endocrine disorder is a classic secondary cause of dyslipidemia?','Hypothyroidism',['Hyperthyroidism','Addison disease','Diabetes insipidus'],'Hypothyroidism is a listed secondary cause of dyslipidemia.'),
q('Which prescription drug class is a listed secondary cause of dyslipidemia?','Corticosteroids',['ACE inhibitors','Proton pump inhibitors','Loop diuretics'],'Rx causes: progestins, anabolic steroids, corticosteroids, protease inhibitors.'),
q('Which illicit drug is listed as a secondary cause of dyslipidemia?','Cocaine',['Cannabis','LSD','Psilocybin'],'Cocaine is the illicit drug listed.'),
q('Which type of liver disease is a secondary cause of dyslipidemia?','Obstructive (cholestatic) liver disease',['Hepatitis A recovery','Gilbert syndrome','Hepatic hemangioma'],'Obstructive (cholestatic) liver disease is listed.')],
[q('A 40-year-old with new hyperlipidemia also reports fatigue, cold intolerance, weight gain, and constipation. What should you check before attributing the lipids to diet?','TSH for hypothyroidism',['Serum lipase','Urine drug screen for cannabis','Echocardiogram'],'Hypothyroidism is a secondary cause of dyslipidemia and these symptoms suggest it.'),
q('A bodybuilder on injected testosterone derivatives has low HDL and high LDL. Which secondary cause is most likely?','Anabolic steroids',['Protease inhibitors','Hypothyroidism','Chronic renal failure'],'Anabolic steroids are a listed medication cause of dyslipidemia.'),
q('A patient with HIV on antiretroviral therapy develops new dyslipidemia. Which medication class is a likely contributor?','Protease inhibitors',['Progestins','Corticosteroids','Anabolic steroids'],'Protease inhibitors are a listed secondary cause.')])
]),

/* ---------- Objective 8 ---------- */
s('08-risk-factors','8. How smoking, HTN, DM, inactivity, obesity, and alcohol raise CVD risk','Objective 8. Slides 31&ndash;34.',[
c('Modifiable vs non-modifiable CAD risk factors',
tbl(['Modifiable','Non-modifiable'],[
['Blood lipid abnormalities, diabetes, hypertension, sedentary lifestyle, abdominal obesity, cigarette smoking, psychosocial factors, diet, too much alcohol','<strong>Family history</strong> (the younger the onset in a first-degree relative, the &uarr; the risk), <strong>male sex</strong>, genetic disorders']]),
['modifiable-vs-nonmodifiable'],
[q('Which CAD risk factor is non-modifiable?','Male sex',['Cigarette smoking','Abdominal obesity','Sedentary lifestyle'],'Non-modifiable: family history, male sex, genetic disorders.'),
q('For family history, which feature increases CAD risk most?','Younger age of onset in a first-degree relative',['Older age of onset in a distant cousin','Any relative over 85 with CAD','A spouse with CAD'],'The younger the onset in a first-degree relative, the higher the risk.')],
[q('A patient lists his risks: brother with MI at 42, male, smokes, sedentary. Which of these can he change?','Smoking and sedentary lifestyle',['Male sex and family history','Family history only','None of them'],'Smoking and physical inactivity are modifiable; sex and family history are not.')]),

c('Smoking',
'<ul><li>Causes <strong>endothelial dysfunction</strong></li><li><strong>&uarr; oxidative arterial deposition of LDL</strong></li><li><strong>&darr; HDL</strong></li><li>Tissue hypoxia from oxidant stress; <strong>CO displaces O<sub>2</sub> from Hgb</strong></li><li><strong>&uarr; platelet and leukocyte adhesion</strong></li><li><strong>&uarr; SNS activity</strong> from nicotine</li></ul>',
['smoking'],
[q('How does smoking affect HDL?','It lowers HDL',['It raises HDL','It has no effect on HDL','It converts HDL to LDL'],'Smoking decreases HDL levels.'),
q('Which effect of smoking promotes thrombosis on plaques?','&uarr; Platelet and leukocyte adhesion',['&darr; Sympathetic activity','&uarr; Nitric oxide release','&darr; LDL oxidation'],'Smoking increases platelet and leukocyte adhesion.'),
q('Through what mechanism does smoking increase LDL deposition in arteries?','&uarr; Oxidative arterial deposition of LDL',['&uarr; LDL receptor expression','&uarr; Bile acid excretion','&darr; Chylomicron formation'],'Smoking increases oxidative arterial deposition of LDL and causes endothelial dysfunction.')],
[q('A 45-year-old smoker asks how cigarettes affect his heart if his cholesterol is normal. Which answer is most complete?','Endothelial dysfunction, more LDL oxidation, lower HDL, more platelet adhesion, and nicotine-driven SNS activation',['Smoking only matters for lung cancer','Smoking raises HDL, which offsets other harm','Smoking only affects blood pressure'],'Smoking damages endothelium, increases oxidative LDL deposition, lowers HDL, increases adhesion, and increases SNS activity.')]),

c('Hypertension',
'<p>Elevated blood pressure damages the <strong>endothelium</strong> through <strong>shear forces</strong>, <strong>&uarr; vessel wall permeability to lipoproteins</strong>.</p>',
['hypertension'],
[q('How does hypertension promote atherosclerosis?','Shear forces damage endothelium and increase wall permeability to lipoproteins',['It lowers LDL production','It directly forms chylomicrons','It raises HDL'],'Elevated BP damages endothelium and increases permeability to lipoproteins.')],
[q('A patient with LDL 110 and untreated BP 168/98 asks why BP control matters for plaque. Best explanation?','High pressure injures the endothelium so lipoproteins enter the wall more easily',['High BP only causes strokes by bleeding','BP has no relation to plaque','High BP lowers triglycerides, which is harmful'],'HTN causes endothelial damage and increased permeability to lipoproteins (shear forces).')]),

c('Diabetes mellitus',
'<ul><li><strong>Glycation of lipoproteins</strong> &rarr; enhanced uptake of cholesterol by scavenger macrophages (<strong>foam cells</strong>)</li><li><strong>&uarr; prothrombotic tendency</strong></li><li><strong>Oxidative damage</strong> of the endothelial lining</li><li>Can cause <strong>overproduction of LDL and TG</strong></li></ul>',
['diabetes'],
[q('How does glycation of lipoproteins in diabetes promote plaque?','It enhances macrophage uptake of cholesterol, forming foam cells',['It blocks foam cell formation','It increases HDL efficiency','It prevents oxidation of LDL'],'Glycated lipoproteins are taken up more by scavenger macrophages (foam cells).'),
q('Which lipid effect can diabetes cause?','Overproduction of LDL and TG',['Isolated rise in HDL','Lower TG','Lower Lp(a) only'],'DM can cause an overproduction of LDL and TG.')],
[q('A patient with type 2 diabetes and A1c 10% asks why diabetes raises heart attack risk even with average cholesterol. Best explanation?','Glycated lipoproteins form foam cells more easily, the endothelium is oxidatively damaged, and blood is more prothrombotic',['Diabetes only affects small vessels','High glucose dissolves plaques','Diabetes lowers LDL, which is harmful'],'Diabetes glycates lipoproteins, damages endothelium, and increases thrombotic tendency.')]),

c('Physical inactivity',
tbl(['Lack of physical activity','Routine physical activity'],[['Weight gain, <strong>&uarr; LDL, &darr; HDL</strong>','Weight loss, <strong>&darr; LDL, &uarr; HDL</strong>']]),
['physical-inactivity'],
[q('Routine physical activity affects lipids how?','&darr; LDL and &uarr; HDL',['&uarr; LDL and &darr; HDL','&uarr; LDL and &uarr; HDL','No lipid effect'],'Routine physical activity leads to weight loss, decreased LDL, and increased HDL.')],
[q('A sedentary office worker gains 15 lb over 2 years. What lipid change would you expect?','&uarr; LDL and &darr; HDL',['&darr; LDL and &uarr; HDL','Isolated &uarr; HDL','Isolated &darr; TG'],'Lack of physical activity leads to weight gain, increased LDL, and decreased HDL.')]),

c('Obesity and alcohol',
tbl(['Risk factor','Lipid effect'],[
['<strong>Obesity</strong>','Overproduction of <strong>LDL/total cholesterol</strong>'],
['<strong>Alcohol abuse</strong>','Overproduction of <strong>LDL/total cholesterol</strong>; also worsens TG (cut back when TG is the concern)']]),
['obesity','alcohol'],
[q('According to the lecture, how do obesity and alcohol abuse each raise CVD risk?','They can cause overproduction of LDL/total cholesterol',['They lower LDL production','They raise HDL only','They block LPL synthesis genetically'],'Both obesity and EtOH abuse can lead to overproduction of LDL/total cholesterol.')],
[q('A patient drinks 6 beers nightly and has rising total cholesterol and TG. What lifestyle change most directly targets the lipid cause?','Cut back alcohol',['Increase saturated fat','Stop exercising','Add a nightly sugary snack'],'Alcohol overuse drives LDL/TC overproduction and worsens TG; cutting back is advised.'),
q('A patient with a BMI of 38 asks how weight affects cholesterol. Best answer?','Obesity drives overproduction of LDL and total cholesterol',['Obesity lowers LDL','Obesity only affects joints','Weight has no lipid effect'],'Obesity can lead to overproduction of LDL/total cholesterol.')])
]),

/* ---------- Objective 9 ---------- */
s('09-clinical-features','9. Clinical features: xanthelasma, eruptive xanthoma, tendon xanthoma, corneal arcus','Objective 9. Slides 36&ndash;38, 42.',[
c('Most dyslipidemia is silent: comparison of the four findings',
'<p>Dyslipidemia is <strong>most commonly asymptomatic</strong>; the lipid panel finds it. When signs appear:</p>'+
tbl(['Finding','Where','Lipid linked'],[
['<strong>Xanthelasma</strong>','Eyelids (inner canthus, upper &gt; lower)','Cholesterol (seen in FH)'],
['<strong>Tendon xanthoma</strong>','Achilles, patellar tendon, back of the hand','Very high cholesterol (FH)'],
['<strong>Eruptive xanthoma</strong>','Buttocks, hands, feet, arms, legs','<strong>Triglycerides</strong>'],
['<strong>Corneal arcus</strong>','Rim of the cornea around the iris','Cholesterol (FH)']])+
hy('Eruptive = <strong>TG</strong>. The other three = <strong>cholesterol/LDL</strong>.'),
['asymptomatic'],
[q('What is the most common clinical presentation of dyslipidemia?','Asymptomatic',['Eruptive xanthomas','Corneal arcus','Tendon xanthomas'],'Dyslipidemia is most commonly asymptomatic.'),
q('Which skin finding is linked to triglycerides rather than cholesterol?','Eruptive xanthoma',['Xanthelasma','Tendon xanthoma','Corneal arcus'],'Eruptive xanthomas are due to increased triglycerides.')],
[q('A 50-year-old with no skin, eye, or tendon findings asks whether a normal exam means her cholesterol is fine. Best answer?','No; dyslipidemia is usually asymptomatic, so a lipid panel is needed',['Yes; normal exam rules it out','Only if she also has no chest pain','Yes, if she has no xanthelasma'],'Most patients with dyslipidemia have no physical findings.')]),

c('Xanthelasma',
'<p><strong>Yellowish plaques</strong> most commonly near the <strong>inner canthus of the eyelid</strong>, <strong>upper lid more often than lower</strong>. Can be <strong>permanent</strong>.</p>',
['xanthelasma'],
[q('Where does xanthelasma most commonly occur?','Near the inner canthus of the eyelid, more often the upper lid',['On the Achilles tendon','On the buttocks','At the corneal rim'],'Xanthelasma: yellowish plaques near the inner canthus, upper lid more often than lower.'),
q('Which statement about xanthelasma is true?','It can be permanent',['It always resolves within days','It is caused by triglycerides','It is pruritic and pea-sized with a creamy center'],'The lecture notes xanthelasma can be permanent.')],
[q('A 44-year-old has soft, flat yellow plaques on both upper eyelids near the nose. Which finding is this?','Xanthelasma',['Eruptive xanthoma','Corneal arcus','Tendon xanthoma'],'Yellow plaques near the inner canthus of the eyelid are xanthelasma.')]),

c('Tendon xanthoma',
'<p>With <strong>very elevated cholesterol</strong>, cholesterol collects within prominent tendons:</p><ul><li><strong>Achilles</strong></li><li><strong>Patella</strong></li><li><strong>Back of the hand</strong> (extensor tendons)</li></ul>'+
hy('Tendon xanthomas point toward <strong>familial hypercholesterolemia</strong>.'),
['tendon-xanthoma'],
[q('Which tendon is a classic site for tendon xanthomas?','Achilles',['Biceps long head','Supraspinatus','Iliopsoas'],'Tendon xanthomas form in prominent tendons: Achilles, patella, and back of the hand.'),
q('Tendon xanthomas occur when which lipid is very elevated?','Cholesterol',['Triglycerides only','Free fatty acids on albumin','Apo C-II'],'Cholesterol can collect within prominent tendons if very elevated.')],
[q('A 32-year-old has firm nodular thickening of both Achilles tendons and knuckle extensor tendons. LDL-C is 280. Which finding is present?','Tendon xanthomas',['Eruptive xanthomas','Gouty tophi from hypertriglyceridemia','Xanthelasma'],'Firm thickening of the Achilles and hand tendons with very high LDL = tendon xanthomas.')]),

c('Eruptive xanthoma',
'<ul><li><strong>Sudden eruption</strong> of <strong>red-yellow papules</strong>: &ldquo;firm pea-sized bumps,&rdquo; sometimes &ldquo;with a creamy center&rdquo;; may be <strong>pruritic</strong>.</li><li>Sites: hands, feet, arms, legs, and <strong>especially the buttocks</strong>.</li><li>Due to <strong>&uarr; triglycerides</strong>.</li><li>Usually <strong>disappear when the underlying condition is treated</strong> (e.g., diabetes brought under control).</li></ul>',
['eruptive-xanthoma'],
[q('Eruptive xanthomas are caused by elevation of which lipid?','Triglycerides',['LDL cholesterol','HDL cholesterol','Lp(a)'],'Eruptive xanthomas are due to increased triglycerides.'),
q('Where do eruptive xanthomas especially appear?','Buttocks',['Eyelids','Corneal rim','Achilles tendon'],'They may appear on hands, feet, arms, legs, and especially the buttocks.'),
q('What usually happens to eruptive xanthomas when the underlying condition is treated?','They disappear',['They calcify permanently','They spread to the eyelids','They convert to tendon xanthomas'],'They usually disappear when the underlying condition, such as diabetes, is controlled.')],
[q('A man with uncontrolled diabetes develops a sudden crop of itchy, firm, pea-sized red-yellow papules with creamy centers on his buttocks. Which lab is most likely markedly elevated?','Triglycerides',['HDL cholesterol','TSH','Uric acid'],'Eruptive xanthomas reflect high triglycerides, often with uncontrolled diabetes.')]),

c('Corneal arcus',
'<p>Cholesterol deposit in the <strong>cornea</strong>, seen as a <strong>gray-white ring at the edge of the cornea surrounding the iris</strong> (slide 42 photo; the slide labels it &ldquo;iris &ndash; corneal arcus&rdquo;).</p><p>Listed with xanthomas and xanthelasma as a cholesterol-deposit sign of <strong>familial hypercholesterolemia</strong>.</p>',
['corneal-arcus'],
[q('Corneal arcus appears as:','A gray-white ring at the corneal edge around the iris',['A yellow plaque on the upper eyelid','A red papule on the buttocks','A nodule on the Achilles tendon'],'Corneal arcus is a gray-white cholesterol ring around the periphery of the cornea.')],
[q('A 28-year-old has a gray-white ring around both irises, and his mother had an MI at 50. Which lipid disorder should you suspect?','Familial hypercholesterolemia',['Lipoprotein lipase deficiency','Familial hypertriglyceridemia from overproduction','Hypothyroidism alone'],'Corneal arcus in a young patient with premature family CHD suggests familial hypercholesterolemia.')])
]),

/* ---------- Objective 10 ---------- */
s('10-familial-comparison','10. Familial hypercholesterolemia vs familial hypertriglyceridemia','Objective 10. Slides 40&ndash;47.',[
c('Side-by-side comparison',
tbl(['','Familial hypercholesterolemia (FH)','Familial hypertriglyceridemia'],[
['Lipid raised','<strong>LDL-C</strong>','<strong>TG</strong> (VLDL &plusmn; chylomicrons)'],
['Mechanism','<strong>&darr; LDL clearance</strong>: defective LDL receptor or defective apo B','<strong>Overproduction</strong> of hepatic VLDL or <strong>underutilization</strong> (LPL deficiency)'],
['Inheritance','Autosomal dominant','Overproduction cause unknown; LPL deficiency is an LPL gene mutation'],
['Main danger','<strong>Premature CAD</strong>; xanthomas, xanthelasma, corneal arcus','<strong>Pancreatitis</strong> (TG &gt;750); eruptive xanthomas'],
['Treatment','<strong>Early lipid management</strong> (statins)','<strong>Low-fat / low-carb diet</strong>, address secondary factors, <strong>fish oil (Vascepa)</strong>, historically fibrates']])+
hy('FH = LDL &rarr; heart. FHTG = TG &rarr; pancreas.'),
['fh-overview','fhtg-overview','fh-vs-fhtg'],
[q('Familial hypercholesterolemia raises LDL mainly by:','Decreasing LDL clearance',['Overproducing chylomicrons','Increasing HDL breakdown','Blocking bile acid synthesis'],'FH (defective LDL receptor or apo B) decreases LDL clearance.'),
q('Above what TG level does the lecture warn of pancreatitis in familial hypertriglyceridemia?','&gt;750 mg/dL',['&gt;150 mg/dL','&gt;200 mg/dL','&gt;300 mg/dL'],'TG levels >750 can cause pancreatitis.'),
q('What are the two main causes of familial hypertriglyceridemia?','Overproduction and underutilization',['Receptor defect and apo B defect','Absorption and excretion defects','Autoimmune and infectious'],'Familial hypertriglyceridemia has two main causes: overproduction and underutilization.')],
[q('A 30-year-old has recurrent pancreatitis, fasting TG 1,900, and normal LDL. Which familial disorder fits best?','Familial hypertriglyceridemia',['Familial hypercholesterolemia','Familial defective apo B','Heterozygous FH'],'Very high TG with pancreatitis = familial hypertriglyceridemia, not FH.'),
q('A 35-year-old has LDL-C 240, Achilles xanthomas, and a father with MI at 48. Which familial disorder and main risk?','Familial hypercholesterolemia; premature CAD',['Familial hypertriglyceridemia; pancreatitis','LPL deficiency; pancreatitis','Familial hypertriglyceridemia; eruptive xanthomas'],'FH presents with very high LDL, tendon xanthomas, and premature CAD.')]),

c('FH: homozygous vs heterozygous',
tbl(['','Homozygous FH','Heterozygous FH'],[
['Frequency','Rare','<strong>1 in 500</strong>'],
['LDL receptors','Severely deficient','<strong>&frac12; the normal</strong> functional receptors'],
['Presentation','Early in life: CAD, <strong>aortic stenosis</strong>, tendon xanthomas','CAC seen as early as <strong>age 11</strong>; premature CAD (&lt;55 men, &lt;65 women) and clinical signs'],
['Outcome','Commonly <strong>die of MI before age 20</strong> without early intervention','Premature CAD'],
['Treatment','Early intervention of lipid management','Early intervention of lipid management']]),
['homozygous-fh','heterozygous-fh'],
[q('How common is heterozygous FH?','About 1 in 500',['About 1 in 50','About 1 in 50,000','About 1 in 5'],'Heterozygous FH affects about 1 in 500 individuals.'),
q('Cells in heterozygous FH display what fraction of normal functional LDL receptors?','About one-half',['None','About one-tenth','Twice normal'],'Heterozygous FH cells display half the normal amount of functional LDL receptors.'),
q('Without early treatment, patients with homozygous FH commonly die of MI before what age?','20',['50','65','80'],'Homozygous FH patients commonly die of MI before age 20 without early intervention.')],
[q('A 9-year-old has tendon xanthomas, a systolic murmur from aortic stenosis, and LDL-C above 600. Which diagnosis fits?','Homozygous familial hypercholesterolemia',['Heterozygous familial hypercholesterolemia','Lipoprotein lipase deficiency','Secondary hyperlipidemia from diet'],'Homozygous FH presents early with CAD, aortic stenosis, and tendon xanthomas.')]),

c('Familial hypertriglyceridemia: overproduction vs underutilization',
tbl(['','Overproduction','Underutilization (LPL deficiency)'],[
['Defect','<strong>Overproduction of hepatic VLDL</strong>; mutation/cause unknown','<strong>LPL gene mutation</strong> &rarr; deficient LPL synthesis/function'],
['Worsened by','Secondary factors: <strong>DM, alcohol, estrogen</strong>','Secondary factors'],
['Particles that build up','VLDL','<strong>Chylomicrons and VLDL</strong> &rarr; severe &uarr; TG'],
['Treatment','Low-carb diet trial and/or low-fat intake, <strong>fish oil (Vascepa)</strong>, historically fibrates','<strong>Low-fat diet is primary</strong> (avoid making chylomicrons), address secondary factors, fish oil/Vascepa']]),
['fhtg-overproduction','fhtg-underutilization'],
[q('Which secondary factors can exacerbate the overproduction form of familial hypertriglyceridemia?','Diabetes, alcohol, and estrogen',['Exercise and fish intake','Statins and ezetimibe','Low-fat diet'],'DM, alcohol, and estrogen can exacerbate VLDL overproduction.'),
q('What is the primary treatment for lipoprotein lipase deficiency?','Low-fat diet',['High-intensity statin','PCSK9 inhibitor','Bile acid sequestrant'],'A low-fat diet is primary to avoid creating chylomicrons.')],
[q('A woman with known familial hypertriglyceridemia starts oral estrogen and her TG triples. Which form and mechanism are being worsened?','Overproduction; estrogen increases hepatic VLDL output',['LPL deficiency; estrogen destroys LPL','FH; estrogen blocks LDL receptors','Defective apo B; estrogen alters apo B'],'Estrogen is a secondary factor that exacerbates hepatic VLDL overproduction.')])
]),

/* ---------- Objective 11 ---------- */
s('11-fh-criteria','11. Diagnostic criteria for familial hypercholesterolemia','Objective 11. Slides 41, 43, 61.',[
c('When to suspect FH',
'<p>Suspect familial hypercholesterolemia when:</p>'+
'<p><strong>LDL-C &gt;190 mg/dL</strong></p><p><strong>AND</strong> either:</p>'+
'<ul><li>a <strong>first-degree relative with LDL-C &gt;190 mg/dL</strong>, or</li><li>a first-degree relative with <strong>known premature coronary heart disease</strong> (<strong>&lt;55 years in men; &lt;65 years in women</strong>)</li></ul>'+
mn('<strong>190 + a first-degree relative</strong>. Premature CHD ages: <strong>men 55, women 65</strong> (&ldquo;women get 10 more years&rdquo;).'),
['fh-ldl-threshold','fh-family-criterion','premature-chd-ages'],
[q('What LDL-C threshold is part of the criteria to suspect FH?','&gt;190 mg/dL',['&gt;100 mg/dL','&gt;130 mg/dL','&gt;160 mg/dL'],'Suspect FH when LDL-C >190 mg/dL plus a qualifying family history.'),
q('Premature coronary heart disease in a male relative is defined as onset before age:','55',['45','65','75'],'Premature CHD: <55 years in men, <65 years in women.'),
q('Premature coronary heart disease in a female relative is defined as onset before age:','65',['45','55','75'],'Premature CHD: <55 years in men, <65 years in women.'),
q('Besides LDL-C &gt;190, what else is required to suspect FH?','A first-degree relative with LDL-C &gt;190 or premature CHD',['Corneal arcus on exam','TG &gt;500','A personal history of MI'],'FH criteria: LDL-C >190 AND a first-degree relative with LDL-C >190 or known premature CHD.')],
[q('A 30-year-old has LDL-C 215. His mother had an MI at 61. Does he meet the lecture&rsquo;s criteria to suspect FH?','Yes; LDL &gt;190 and a female first-degree relative with CHD before 65',['No; his mother&rsquo;s MI was after 55','No; he needs tendon xanthomas','No; LDL must exceed 300'],'For women, premature CHD is <65, so his mother at 61 qualifies.'),
q('A 34-year-old has LDL-C 205. Her father had his first MI at 60 and her siblings have normal lipids. Does she meet criteria to suspect FH?','No; the father&rsquo;s MI at 60 is not premature for a man',['Yes; any family MI qualifies','Yes; LDL &gt;190 alone is enough','No; she needs LDL &gt;300'],'Premature CHD in men is <55; a paternal MI at 60 does not meet the family criterion.')]),

c('What the diagnosis changes',
'<ul><li>LDL-C &ge;190 is its own statin group: <strong>no risk calculation; high-intensity statin</strong>.</li><li>Age 0&ndash;19 on the ACC/AHA algorithm: lifestyle, and <strong>a diagnosis of FH &rarr; statin</strong>.</li><li>Both FH types are treated with <strong>early intervention of lipid management</strong>.</li></ul>',
['fh-next-step'],
[q('For an adult with LDL-C &ge;190, which statin approach does the ACC/AHA algorithm give?','High-intensity statin with no risk calculation',['Risk calculation first, then decide','Low-intensity statin','Lifestyle only for 1 year'],'LDL-C >=190: no risk assessment; high-intensity statin.')],
[q('A 16-year-old meets FH criteria. According to the ACC/AHA algorithm for ages 0&ndash;19, what is appropriate?','Lifestyle plus a statin because of the FH diagnosis',['Lifestyle only until age 40','No treatment until symptomatic','Fish oil as first line'],'For ages 0-19, a diagnosis of familial hypercholesterolemia leads to a statin.')])
]),

/* ---------- Objective 12 ---------- */
s('12-genetic-pathophysiology','12. Pathophysiology: defective LDL receptor, defective apo B, LPL deficiency','Objective 12. Slides 42&ndash;44, 47.',[
c('Familial defective LDL receptor',
'<ul><li><strong>Mutation in the gene encoding the LDL apo B/E receptor</strong> on the liver surface.</li><li>&rarr; <strong>&darr; clearance of LDL</strong> &rarr; excess LDL.</li><li>Clinical: &uarr; intravascular plaque, skin/tendon <strong>xanthoma</strong>, eyelid <strong>xanthelasma</strong>, <strong>corneal arcus</strong>.</li><li>Homozygous (rare) vs heterozygous (1 in 500, half the receptors).</li></ul>',
['defective-ldl-receptor'],
[q('In familial defective LDL receptor, which gene is mutated?','The gene encoding the LDL apo B/E receptor on the liver',['The apo B gene on LDL particles','The lipoprotein lipase gene','The NPC1L1 gene'],'Mutation in the gene that encodes the LDL apo B/E receptor on the liver surface.'),
q('What is the direct consequence of a defective LDL receptor?','Decreased LDL clearance',['Increased VLDL production','Decreased chylomicron formation','Increased HDL'],'This decreases the clearance of LDL.')],
[q('Liver biopsy cells from a patient with LDL-C 320 show only half the normal number of working LDL receptors. Which disorder is this?','Heterozygous familial defective LDL receptor',['Familial defective apo B','Lipoprotein lipase deficiency','Familial hypertriglyceridemia (overproduction)'],'Half the normal functional LDL receptors = heterozygous FH (defective LDL receptor).')]),

c('Familial defective apolipoprotein B',
'<ul><li><strong>Autosomal dominant</strong>.</li><li><strong>Defect in the apo B protein</strong> &rarr; <strong>impaired binding of LDL particles to the LDL receptor</strong> (receptor itself is normal).</li><li>About <strong>1 in 750</strong> Caucasians with HLD.</li><li>Clinically similar to defective LDL receptor: cholesterol deposits and early CAD.</li><li>Treatment: early intervention of lipid management.</li></ul>'+
hy('Receptor defect vs ligand defect: <strong>LDL receptor</strong> = the lock is broken; <strong>apo B</strong> = the key is broken. Either way LDL cannot be cleared.'),
['defective-apob'],
[q('In familial defective apo B, why does LDL accumulate?','Defective apo B impairs binding of LDL to the LDL receptor',['LDL receptors are absent','LPL cannot be activated','The liver overproduces VLDL'],'A defect in apo B impairs binding of LDL particles to the LDL receptor.'),
q('What is the inheritance pattern of familial defective apo B?','Autosomal dominant',['Autosomal recessive','X-linked recessive','Mitochondrial'],'Familial defective apo B is autosomal dominant.')],
[q('A patient with LDL-C 250 and tendon xanthomas has normal LDL receptor number and function on testing, but his LDL particles bind poorly. Diagnosis?','Familial defective apolipoprotein B',['Familial defective LDL receptor','Lipoprotein lipase deficiency','Secondary hyperlipidemia from hypothyroidism'],'Normal receptors with poor LDL binding = defective apo B (the ligand).')]),

c('Lipoprotein lipase deficiency',
'<ul><li><strong>Mutation in the LPL gene</strong> &rarr; deficient LPL synthesis/function (the &ldquo;underutilization&rdquo; form of familial hypertriglyceridemia).</li><li>TG in chylomicrons and VLDL cannot be broken down &rarr; <strong>&uarr; circulating chylomicrons and VLDL</strong> &rarr; <strong>severe hypertriglyceridemia</strong> (pancreatitis risk).</li><li>Treatment: <strong>low-fat diet is primary</strong> (avoid creating chylomicrons), address secondary factors, VLDL/TG-lowering meds (fish oil/Vascepa).</li></ul>',
['lpl-deficiency'],
[q('Which lipoproteins accumulate in lipoprotein lipase deficiency?','Chylomicrons and VLDL',['LDL and HDL','HDL only','Lp(a) only'],'LPL deficiency leads to increased circulating chylomicrons and VLDL and severe hypertriglyceridemia.'),
q('Why is a low-fat diet the primary treatment for LPL deficiency?','Less dietary fat means fewer chylomicrons are created',['Fat directly blocks LDL receptors','Fat activates PCSK9','Fat raises HDL too much'],'A low-fat diet avoids creating chylomicrons that cannot be cleared.')],
[q('A child has recurrent abdominal pain, lipemic serum, and TG over 2,000. Post-heparin LPL activity is absent. What is the mechanism of the hypertriglyceridemia?','Chylomicron and VLDL triglyceride cannot be hydrolyzed, so they accumulate',['LDL cannot bind its receptor','The liver overproduces cholesterol','Bile acids are not reabsorbed'],'LPL deficiency prevents breakdown of chylomicrons/VLDL, causing severe hypertriglyceridemia.')])
]),

/* ---------- Objective 13 ---------- */
s('13-lipid-panel','13. Interpreting a lipid panel without reference ranges','Objective 13. Slides 49&ndash;52, 57.',[
c('Collecting the panel and who to screen',
'<ul><li>Draw <strong>fasting (9&ndash;12 hours)</strong> so <strong>chylomicrons clear</strong> from circulation.</li><li><strong>Confirm an abnormal result with a second check</strong> if there is no historical data.</li><li>Screening (2013 ACC/AHA): <strong>all adults &gt;21</strong>, then <strong>every 3&ndash;5 years</strong> (unless on targeted treatment). Clear evidence supports testing anyone with ASCVD or a risk equivalent.</li></ul>',
['fasting','confirm-repeat','screening'],
[q('How long should a patient fast before a lipid panel?','9&ndash;12 hours',['2 hours','24 hours','No fasting is ever needed'],'Labs are checked in a fasted state (9-12 hours).'),
q('Why is a lipid panel drawn fasting?','To allow chylomicrons to clear from circulation',['To lower HDL','To raise LDL','To prevent hemolysis'],'Fasting allows chylomicrons to clear from circulation.'),
q('Per the 2013 ACC/AHA guideline cited, lipid screening starts for adults older than:','21',['10','40','65'],'Screen all adults >21, then every 3-5 years.')],
[q('A 35-year-old&rsquo;s first-ever lipid panel shows LDL-C 168. What should happen before labeling her with hyperlipidemia?','Repeat a fasting panel to confirm',['Start a PCSK9 inhibitor','Order a CAC immediately','Diagnose FH'],'Abnormal results should be confirmed with a second check if there is no historical data.'),
q('A healthy 30-year-old had a normal lipid panel 1 year ago. When is the next routine screening due?','In about 2&ndash;4 more years (every 3&ndash;5 years)',['Now, every year','Only after age 65','Never again'],'After the first screen, repeat every 3-5 years unless on targeted treatment.')]),

c('Measured vs calculated values: the Friedewald equation',
tbl(['Measured directly','Calculated'],[['<strong>Total cholesterol, TG, HDL-C</strong>','<strong>VLDL-C and LDL-C</strong>']])+
'<p>If <strong>TG &lt;400</strong>:</p><ul><li><strong>VLDL-C = TG &divide; 5</strong></li><li><strong>Friedewald</strong>: <strong>LDL-C = TC &minus; VLDL-C &minus; HDL-C</strong></li></ul>'+
'<p>If <strong>TG &gt;400</strong>, VLDL-C and LDL-C <strong>cannot be determined</strong> by this method.</p>'+
'<p>Example: TC 200, TG 150, HDL 50 &rarr; VLDL-C = 150/5 = <strong>30</strong>; LDL-C = 200 &minus; 30 &minus; 50 = <strong>120</strong>.</p>',
['measured-components','friedewald','vldl-calculation','tg-400-limit'],
[q('Which lipid panel values are measured directly?','Total cholesterol, TG, and HDL-C',['LDL-C and VLDL-C','LDL-C only','VLDL-C and HDL-C'],'TC, TG, and HDL are measured; VLDL and LDL are calculated.'),
q('How is VLDL-C estimated when TG is under 400?','TG &divide; 5',['TG &times; 5','TC &divide; 5','HDL &divide; 5'],'VLDL-C = TG/5 when TG < 400.'),
q('What is the Friedewald equation?','LDL-C = TC &minus; VLDL-C &minus; HDL-C',['LDL-C = TC + HDL-C &minus; TG','LDL-C = TG &divide; 5','LDL-C = HDL-C &minus; VLDL-C'],'Friedewald: LDL-C = Total cholesterol - VLDL-C - HDL-C.'),
q('Above what TG level can LDL-C not be calculated by Friedewald?','400 mg/dL',['150 mg/dL','200 mg/dL','1,000 mg/dL'],'If TG > 400, VLDL-C and LDL-C cannot be determined.')],
[q('A panel shows TC 240, TG 200, HDL 40. What is the calculated LDL-C?','160',['200','120','180'],'VLDL-C = 200/5 = 40; LDL-C = 240 - 40 - 40 = 160.'),
q('A panel shows TC 260, TG 650, HDL 38. The lab leaves LDL-C blank. Why?','TG is over 400, so Friedewald cannot be used',['HDL is too low to calculate','The sample was fasting','TC is too high to calculate'],'With TG > 400, VLDL-C and LDL-C cannot be determined by calculation.')]),

c('Reading LDL-C',
tbl(['LDL-C (mg/dL)','Category'],[['&lt;100','<strong>Optimal</strong>'],['100&ndash;129','Near optimal'],['130&ndash;159','Borderline high'],['160&ndash;189','High'],['&gt;189 (&ge;190)','<strong>Very high</strong>']])+
mn('LDL climbs in steps of 30: <strong>100 / 130 / 160 / 190</strong>.'),
['ldl-ranges'],
[q('What LDL-C is considered optimal?','&lt;100 mg/dL',['&lt;130 mg/dL','&lt;160 mg/dL','&lt;190 mg/dL'],'LDL-C <100 is optimal.'),
q('An LDL-C of 145 mg/dL falls into which category?','Borderline high',['Near optimal','High','Very high'],'LDL-C 130-159 is borderline high.'),
q('An LDL-C of 175 mg/dL falls into which category?','High',['Borderline high','Very high','Near optimal'],'LDL-C 160-189 is high.')],
[q('A patient&rsquo;s LDL-C is 196 mg/dL. How do you classify it?','Very high',['High','Borderline high','Near optimal'],'LDL-C >189 is very high (and is its own statin group at >=190).'),
q('A patient&rsquo;s LDL-C is 118 mg/dL. How do you classify it?','Near optimal',['Optimal','Borderline high','High'],'LDL-C 100-129 is near optimal.')]),

c('Reading total cholesterol and HDL-C',
tbl(['Total cholesterol (mg/dL)','Category'],[['&lt;200','<strong>Desirable</strong>'],['200&ndash;239','Borderline high'],['&gt;239 (&ge;240)','<strong>High</strong>']])+
tbl(['HDL-C (mg/dL)','Category'],[['&gt;60','<strong>Protective</strong>'],['41&ndash;59','Borderline'],['&lt;40','<strong>At risk</strong>'],['Goal','<strong>Women 50+, men 40+</strong>']]),
['total-cholesterol-ranges','hdl-ranges'],
[q('What total cholesterol is desirable?','&lt;200 mg/dL',['&lt;240 mg/dL','&lt;150 mg/dL','&lt;300 mg/dL'],'Total cholesterol <200 is desirable; 200-239 borderline; >239 high.'),
q('An HDL-C above what level is considered protective?','60 mg/dL',['40 mg/dL','50 mg/dL','35 mg/dL'],'HDL >60 is protective.'),
q('What are the HDL-C goals for women and men?','Women 50+, men 40+',['Women 40+, men 50+','Both 60+','Both 30+'],'HDL goal: women 50+, men 40+.')],
[q('A 52-year-old man has TC 228 and HDL 36. Interpret these two values.','TC borderline high; HDL at risk',['TC desirable; HDL protective','TC high; HDL borderline','TC borderline high; HDL protective'],'TC 200-239 is borderline high; HDL <40 is at risk.'),
q('A woman has HDL-C 46. Is she at her HDL goal?','No; the goal for women is 50 or higher',['Yes; 40 or higher is the goal for everyone','Yes; any HDL above 35 is protective','No; the goal is above 80'],'HDL goal is 50+ for women and 40+ for men.')]),

c('Reading triglycerides',
tbl(['TG (mg/dL)','Category'],[['&lt;150','<strong>Normal</strong>'],['150&ndash;199','Borderline high'],['&gt;200','High'],['&gt;500','<strong>At risk for pancreatitis</strong>']]),
['tg-ranges'],
[q('What fasting triglyceride level is normal?','&lt;150 mg/dL',['&lt;200 mg/dL','&lt;250 mg/dL','&lt;500 mg/dL'],'TG <150 is normal.'),
q('Above what TG level does the lipid table flag a risk of pancreatitis?','&gt;500 mg/dL',['&gt;150 mg/dL','&gt;200 mg/dL','&gt;300 mg/dL'],'TG >500 is labeled at risk for pancreatitis.')],
[q('A fasting panel shows TG 178. Interpretation?','Borderline high',['Normal','High','Pancreatitis risk'],'TG 150-199 is borderline high.'),
q('A fasting panel shows TG 620. Which concern is most pressing?','Risk of pancreatitis',['LDL-C is now accurate','HDL will be protective','No concern'],'TG >500 is at risk for pancreatitis (and LDL cannot be calculated over 400).')])
]),

/* ---------- Objective 14 ---------- */
s('14-additional-testing','14. Additional lipid testing: NMR, hs-CRP, CAC','Objective 14. Slides 53&ndash;56, 86, 88.',[
c('NMR lipoprotein analysis',
'<p>NMR (nuclear magnetic resonance) testing reports <strong>particle numbers and apolipoproteins</strong>, not just cholesterol content: <strong>LDL-P</strong> (particle number), <strong>apo B</strong>, small dense LDL (sdLDL), <strong>apo A-I</strong>, HDL-P, apo B:apo A-I ratio, and <strong>Lp(a)</strong>.</p>'+
'<p><strong>Utility</strong>: uncovers <strong>residual risk</strong> when the standard panel looks fine. In the slide example, TC 143, LDL-C 76, HDL 48, TG 81 were all optimal, yet <strong>LDL-P 1306 (high risk) and Lp(a) 55 (high risk)</strong>.</p>'+
tbl(['NMR value','High risk'],[['LDL-P','&ge;1300 nmol/L'],['Apo B','&ge;80 mg/dL (risk enhancer at &ge;130)'],['Lp(a) mass','&ge;30 mg/dL (risk enhancer at &gt;50)'],['Apo B:A-I ratio','&ge;0.81']])+
cl('&ldquo;NMR&rdquo; = nuclear magnetic resonance lipoprotein particle analysis; the slide shows only the report.'),
['nmr-utility','nmr-interpretation'],
[q('What does NMR lipoprotein testing add beyond a standard lipid panel?','Particle counts and apolipoproteins such as LDL-P, apo B, and Lp(a)',['A coronary calcium score','A 10-year ASCVD risk estimate','An inflammatory marker such as CRP'],'NMR reports particle numbers and apolipoproteins (LDL-P, apo B, sdLDL, apo A-I, Lp(a)).'),
q('On the NMR report shown in lecture, what LDL-P value is high risk?','&ge;1300 nmol/L',['&ge;100 nmol/L','&ge;500 nmol/L','&ge;5000 nmol/L'],'LDL-P >=1300 nmol/L is in the high-risk range.')],
[q('A patient with a premature-CAD family history has LDL-C 76 and normal TC, HDL, and TG. NMR shows LDL-P 1306 and Lp(a) 55. How do you interpret this?','Residual high risk from high particle number and Lp(a) despite an optimal standard panel',['Completely low risk because LDL-C is optimal','The NMR is invalid when LDL-C is optimal','Only TG matters for this patient'],'NMR can reveal high particle number and Lp(a) when standard values look optimal.')]),

c('hs-CRP',
'<ul><li>An <strong>acute phase reactant</strong> associated with underlying atherosclerosis; postulated to reflect <strong>risk of ACS</strong>.</li><li>Associated with risk of <strong>future events</strong> in stable angina, but only <strong>weakly associated with the extent of CAD</strong>.</li><li>In known stable coronary disease, baseline CRP strongly correlates with future acute coronary events.</li></ul>'+
tbl(['hs-CRP (mg/L)','Risk (CDC/AHA)'],[['&lt;1','Low'],['1&ndash;3','Average'],['&gt;3','High']])+
hy('hs-CRP &ge;2 mg/L is an <strong>ASCVD risk enhancer</strong>.'),
['hscrp-utility','hscrp-categories'],
[q('What type of marker is hs-CRP?','An acute phase reactant',['A lipoprotein particle count','A coronary calcium measure','A liver enzyme'],'hs-CRP is an acute phase reactant associated with atherosclerosis.'),
q('An hs-CRP above what value is classified as high risk?','3 mg/L',['1 mg/L','0.5 mg/L','10 mg/L'],'Low <1, average 1-3, high >3 mg/L.'),
q('hs-CRP correlates more with which of the following?','Risk of future coronary events',['The anatomic extent of CAD','LDL particle size','Coronary calcium score'],'CRP is associated with future events but only weakly with the extent of CAD.')],
[q('A patient with borderline 10-year risk has hs-CRP of 3.5 mg/L. How does this affect your assessment?','It is high-risk hs-CRP and counts as a risk enhancer',['It lowers his risk','It confirms the extent of his CAD','It is irrelevant to lipids'],'hs-CRP >3 is high risk, and >=2 is a risk enhancer.')]),

c('Coronary artery calcium (CAC) score',
'<ul><li><strong>Low-dose multi-detector CT</strong> measuring calcium plaque in coronary arteries for risk stratification. A <strong>positive scan confirms CAD</strong>.</li><li>Takes about <strong>10&ndash;20 minutes</strong>. Prep: <strong>no caffeine, smoking, or exercise for 4 hours</strong>.</li></ul>'+
tbl(['CAC score','Plaque burden','Statin decision (ACC/AHA 2019)'],[
['<strong>0</strong>','No identifiable disease','Low risk; consider <strong>no statin</strong> unless DM, family hx of premature ASCVD, or smoking'],
['<strong>1&ndash;99</strong>','Mild','<strong>Favors statin</strong>, especially if &gt;55'],
['<strong>100&ndash;399</strong>','Moderate','<strong>Statin indicated</strong> (100+)'],
['<strong>&ge;400</strong>','Severe','<strong>Statin indicated</strong>']]),
['cac-procedure','cac-scores','cac-decision'],
[q('What does a CAC scan measure?','Calcium plaque in the coronary arteries using low-dose CT',['LDL particle number by NMR','Inflammation by acute phase reactant','Stenosis by catheter angiography'],'CAC is a low-dose multi-detector CT that measures coronary calcium plaques.'),
q('What preparation is required before a CAC scan?','No caffeine, smoking, or exercise for 4 hours',['NPO for 24 hours','Bowel prep the night before','Hold all statins for 1 week'],'Prep: no caffeine, smoking, or exercise for 4 hours prior.'),
q('A CAC score of 100&ndash;399 indicates:','Moderate disease',['No identifiable disease','Mild disease','Severe disease'],'0 none, 1-99 mild, 100-399 moderate, >400 severe.'),
q('A CAC score of 0 generally means:','No identifiable disease; consider no statin unless DM, family hx of premature ASCVD, or smoking',['Severe disease requiring a statin','Mild disease favoring a statin','The scan was not interpretable'],'CAC 0 = low risk; consider no statin unless DM, family history, or smoking.')],
[q('A 60-year-old with an intermediate 10-year risk is unsure about a statin. Her CAC score is 140. What do you advise?','Statin is indicated (CAC 100+)',['No statin needed','Repeat CAC in 1 year before deciding','Fish oil only'],'CAC 100+ = statin indicated.'),
q('A 58-year-old nonsmoker without diabetes or family history has an intermediate risk score and a CAC of 0. What is reasonable?','Consider deferring the statin and focus on lifestyle',['Start a high-intensity statin','Add a PCSK9 inhibitor','Order an NMR before deciding anything'],'CAC = 0 lowers risk; consider no statin unless DM, family hx of premature ASCVD, or smoking.')])
]),

/* ---------- Objective 15 ---------- */
s('15-ascvd-risk-calculator','15. Using the ASCVD risk calculator to risk-stratify','Objective 15. Slides 58&ndash;61, 84.',[
c('Purpose of risk calculators and who gets one',
'<ul><li>Estimate the probability of ASCVD over <strong>10 years</strong> to guide the most appropriate preventive strategy and patient discussion.</li><li>Options: <strong>Framingham Risk Score, MESA score, ACC/AHA ASCVD risk estimator</strong> (some argue ACC/AHA may <strong>overestimate</strong> risk).</li><li>Used for <strong>primary prevention</strong>, age <strong>40&ndash;75</strong>, LDL-C <strong>70&ndash;189</strong>, <strong>without diabetes</strong>.</li></ul>'+
hy('<strong>Do not</strong> calculate risk to decide on a statin in clinical ASCVD (already high intensity) or LDL-C &ge;190 (already high intensity). Diabetes 40&ndash;75 already earns a statin; risk assessment then helps decide whether to step up to high intensity.'),
['calculator-purpose','calculator-options','who-to-calculate'],
[q('Over what time frame does the ACC/AHA ASCVD calculator estimate risk?','10 years',['1 year','5 years','Lifetime only'],'The calculator gives a 10-year ASCVD risk estimate.'),
q('Which criticism of the ACC/AHA ASCVD calculator is mentioned?','It may overestimate risk',['It ignores blood pressure','It only applies to children','It requires CAC'],'Some argue the ACC/AHA calculator may overestimate risk.'),
q('For which patient does the 10-year risk score begin the statin discussion?','Age 40&ndash;75, LDL 70&ndash;189, no diabetes, no ASCVD',['Prior MI','LDL-C 220','Age 25 with normal lipids'],'Age 40-75 with LDL 70-<190 and no diabetes: the 10-year ASCVD risk percent begins the risk discussion.')],
[q('A 63-year-old had a CABG last year. A student wants to enter him into the ASCVD calculator to decide on a statin. Correct approach?','Skip the calculator; he has clinical ASCVD and needs a high-intensity statin',['Use the calculator and treat only if &ge;20%','Use the MESA score instead','Order CAC first'],'Risk calculators are for primary prevention; clinical ASCVD already indicates high-intensity statin.')]),

c('Calculator inputs and end points',
'<p><strong>Framingham</strong> (began 1948, &gt;5,000 patients; now includes Black patients and women) predicts from:</p>'+
'<ul><li>Age, gender</li><li>Total or LDL cholesterol, <strong>HDL cholesterol</strong></li><li><strong>Systolic BP</strong></li><li>Diabetes (yes/no), <strong>current smoking</strong> (yes/no)</li></ul>'+
'<p>Framingham end points: CHD death, nonfatal MI, unstable angina, stable angina.</p>'+
cl('The ACC/AHA pooled cohort calculator uses the same core inputs plus <strong>race</strong> and whether the patient is <strong>on BP treatment</strong> (why slide 95 states the patient is Black and on lisinopril).'),
['calculator-inputs'],
[q('Which value is an input to the Framingham risk score?','Systolic blood pressure',['Triglycerides','hs-CRP','Waist circumference'],'Framingham inputs: age, gender, TC or LDL, HDL, systolic BP, diabetes, current smoking.'),
q('Which is NOT an input to the Framingham risk score?','Coronary calcium score',['Current smoking','HDL cholesterol','Diabetes status'],'CAC is not a Framingham input; smoking, HDL, and diabetes are.')],
[q('You are entering a 47-year-old into the ASCVD estimator. Which piece of history is needed?','Whether he currently smokes',['His triglyceride level','His waist circumference','His CAC score'],'Current smoking is a calculator input; TG, waist, and CAC are not.')]),

c('Interpreting the 10-year risk',
tbl(['10-year risk','Category','Action'],[
['&lt;5%','Low','Emphasize lifestyle'],
['5&ndash;&lt;7.5%','Borderline','If <strong>risk enhancers</strong> present, discuss <strong>moderate-intensity</strong> statin'],
['&ge;7.5&ndash;&lt;20%','Intermediate','If risk estimate + enhancers favor it, <strong>moderate-intensity</strong> statin (LDL &darr; 30&ndash;49%)'],
['&ge;20%','High','Statin to reduce LDL-C <strong>&ge;50%</strong> (high intensity)']])+
mn('<strong>5 &ndash; 7.5 &ndash; 20</strong>: Low | Borderline | Intermediate | High.'),
['risk-categories'],
[q('A 10-year ASCVD risk of 12% is classified as:','Intermediate risk',['Low risk','Borderline risk','High risk'],'Intermediate risk is >=7.5% to <20%.'),
q('Which 10-year risk is classified as borderline?','5% to &lt;7.5%',['&lt;5%','7.5% to &lt;20%','&ge;20%'],'Borderline risk is 5% to <7.5%.'),
q('At what 10-year risk is a patient high risk?','&ge;20%',['&ge;5%','&ge;7.5%','&ge;10%'],'High risk is >=20%.')],
[q('A 62-year-old without diabetes has LDL-C 150 and a calculated 10-year risk of 23%. What is the plan?','Statin to lower LDL-C by at least 50% (high intensity)',['Lifestyle only','Low-intensity statin','Recheck risk in 10 years'],'High risk (>=20%): initiate statin to reduce LDL-C >=50%.'),
q('A 50-year-old woman has a 10-year risk of 3.8%. What is recommended?','Emphasize lifestyle to reduce risk factors',['High-intensity statin','Moderate-intensity statin','PCSK9 inhibitor'],'Low risk (<5%): risk discussion emphasizing lifestyle.')])
]),

/* ---------- Objective 16 ---------- */
s('16-lifestyle','16. Lifestyle treatment: options, recommendations, and benefits','Objective 16. Slides 64&ndash;66.',[
c('Dietary recommendations',
'<p><strong>Lifestyle changes are first line.</strong></p>'+
'<ul><li><strong>&darr; fat intake, mainly saturated fat</strong>.</li><li><strong>Mediterranean diet</strong> lowers LDL.</li><li>Encourage <strong>polyunsaturated fats and omega-3s (fish, nuts)</strong>: protective via <strong>&darr; VLDL, &darr; platelet aggregation, &darr; CAD</strong>.</li><li>If <strong>&uarr; TG</strong> is the main concern: <strong>cut back carbs and alcohol</strong>.</li><li>&uarr; antioxidants from fruits/vegetables; <strong>soluble fiber may reduce LDL</strong>.</li></ul>',
['diet-fat','mediterranean','omega3-diet','tg-diet','fiber-antioxidants'],
[q('Which type of dietary fat should be reduced most?','Saturated fat',['Polyunsaturated fat','Omega-3 fat','Monounsaturated fat from olive oil'],'Decrease fat intake, mainly saturated fat.'),
q('Which diet has been shown to lower LDL?','Mediterranean diet',['High saturated-fat ketogenic diet','High refined-carbohydrate diet','Carnivore diet'],'The Mediterranean diet has been shown to lower LDL.'),
q('Dietary omega-3 fats (fish, nuts) are protective by which effects?','&darr; VLDL, &darr; platelet aggregation, &darr; CAD',['&uarr; VLDL and &uarr; platelet aggregation','&uarr; LDL only','&darr; HDL only'],'Omega-3s were found protective: decreased VLDL, decreased platelet aggregation, decreased CAD.'),
q('Which dietary component may reduce LDL?','Soluble fiber',['Trans fat','Refined sugar','Alcohol'],'Soluble fiber may reduce LDL.')],
[q('A patient&rsquo;s main lipid problem is TG of 380 with normal LDL. Which dietary advice is most targeted?','Cut back on carbohydrates and alcohol',['Increase fruit juice','Add more white bread','No diet change; start a statin first'],'If elevated TG is the main concern, cut back on carbs and alcohol.')]),

c('Other lifestyle measures',
'<ul><li><strong>Smoking cessation</strong></li><li><strong>Manage HTN, DM, CKD, obesity/metabolic syndrome</strong></li><li><strong>Exercise</strong> (&darr; LDL, &uarr; HDL, weight loss)</li></ul>',
['smoking-cessation','comorbidity-management','exercise'],
[q('Which is a recommended non-diet lifestyle measure for dyslipidemia?','Smoking cessation',['Increasing alcohol to raise HDL','Bed rest','Fasting for 3 days weekly'],'Lifestyle includes smoking cessation, managing HTN/DM/CKD/obesity, and exercise.')],
[q('A 52-year-old smoker with HTN, obesity, and LDL-C 150 wants to try lifestyle first. Which plan best reflects the lecture?','Quit smoking, exercise, Mediterranean-style diet, and control BP and weight',['Diet change alone with continued smoking','Exercise only, no diet change','Raise alcohol intake for HDL'],'Lifestyle combines diet, smoking cessation, exercise, and management of HTN, DM, CKD, and obesity.')]),

c('Expected benefit and shared decision-making',
'<ul><li>Diet alone usually gives <strong>modest LDL reductions: 5&ndash;10%</strong>.</li><li>The <strong>bigger impact</strong> of diet is on <strong>comorbidities</strong>: weight, BP, blood glucose, inflammation.</li><li>If medication is needed: discuss <strong>all risks and benefits</strong> (mortality &darr;, side effects, cost), keep assessing preferences and tolerance. Goal: <strong>maximum benefit aligned with patient preferences and goals</strong>.</li></ul>',
['lifestyle-benefit','shared-decision'],
[q('About how much does dietary change alone typically lower LDL?','5&ndash;10%',['30&ndash;50%','50&ndash;70%','0%'],'Typically modest reductions: 5-10% LDL.'),
q('Where does dietary change have its bigger impact?','Improving comorbidities such as weight, BP, glucose, and inflammation',['Raising LDL receptor numbers 10-fold','Curing familial hypercholesterolemia','Eliminating need for any medication in ASCVD'],'Bigger impact of dietary changes is improving comorbidities.')],
[q('A patient with LDL-C 170 asks whether diet alone will bring her into the optimal range. Best counseling?','Diet usually lowers LDL only 5&ndash;10%, but improves weight, BP, and glucose',['Diet reliably lowers LDL by 50%','Diet has no benefit at all','Diet works only in men'],'Expect modest 5-10% LDL reduction; larger benefit is on comorbidities.')])
]),

/* ---------- Objective 17 (split by drug group) ---------- */
s('17a-statins','17a. Statins (HMG CoA reductase inhibitors)','Objective 17. Slides 67&ndash;73, 83, 90.',[
c('Statin MOA, route, and lipid effect',
'<ul><li><strong>MOA</strong>: inhibit <strong>HMG CoA reductase</strong>, the enzyme in the cholesterol synthesis pathway &rarr; <strong>&darr; liver cholesterol production</strong>.</li><li><strong>Route</strong>: <strong>PO, once daily</strong>.</li><li><strong>Lipid effect</strong>: LDL-C &darr; about <strong>35% on average</strong> (range 20&ndash;60%); HDL &uarr; 5&ndash;10%; TG &darr; 10&ndash;33%.</li></ul>',
['statin-moa','statin-route','statin-lipid-effect'],
[q('What enzyme do statins inhibit?','HMG CoA reductase',['Lipoprotein lipase','PCSK9','NPC1L1'],'Statins inhibit HMG CoA reductase in the cholesterol synthesis pathway.'),
q('How are statins taken?','By mouth once daily',['Subcutaneous injection every 2 weeks','IV infusion monthly','Oral powder three times daily with meals'],'Statin dosing: PO, recommended once per day.'),
q('On average, how much do statins lower LDL-C?','About 35%',['About 5%','About 75%','About 90%'],'Statins decrease LDL-C about 35% on average.')],
[q('A patient asks how her new atorvastatin lowers cholesterol. Best explanation?','It blocks the liver enzyme that makes cholesterol',['It blocks cholesterol absorption in the gut','It binds bile acids in the intestine','It is an antibody that stops LDL receptor breakdown'],'Statins inhibit hepatic HMG CoA reductase, decreasing liver cholesterol production.')]),

c('Statin brand/generic names and intensity groups',
tbl(['Intensity','Statins (brand)','Expected LDL lowering'],[
['<strong>Low</strong>','Simvastatin (<strong>Zocor</strong>) 10 mg; pravastatin (<strong>Pravachol</strong>) 10&ndash;20 mg; lovastatin (<strong>Mevacor</strong>) 20 mg','~ <strong>&lt;30%</strong>'],
['<strong>Moderate</strong>','Pravastatin 40 mg; simvastatin 40 mg; atorvastatin (<strong>Lipitor</strong>) 10&ndash;20 mg; rosuvastatin (<strong>Crestor</strong>) 5&ndash;10 mg','~ <strong>30&ndash;50%</strong>'],
['<strong>High</strong>','Atorvastatin (<strong>Lipitor</strong>) 40&ndash;80 mg; rosuvastatin (<strong>Crestor</strong>) 20&ndash;40 mg','~ <strong>&ge;50%</strong>']])+
mn('Only the <strong>A</strong>&ndash;<strong>R</strong>ockstars go high: <strong>A</strong>torvastatin 40&ndash;80 and <strong>R</strong>osuvastatin 20&ndash;40.'),
['statin-brand-generic','statin-intensity'],
[q('What is the brand name of atorvastatin?','Lipitor',['Crestor','Zocor','Pravachol'],'Atorvastatin = Lipitor.'),
q('What is the brand name of rosuvastatin?','Crestor',['Lipitor','Mevacor','Zetia'],'Rosuvastatin = Crestor.'),
q('What is the brand name of simvastatin?','Zocor',['Pravachol','Mevacor','Lopid'],'Simvastatin = Zocor.'),
q('Pravastatin and lovastatin are sold as:','Pravachol and Mevacor',['Mevacor and Pravachol','Zocor and Lipitor','Crestor and Questran'],'Pravastatin = Pravachol; lovastatin = Mevacor.'),
q('Which statins can be given at high intensity?','Atorvastatin and rosuvastatin',['Simvastatin and pravastatin','Lovastatin and pravastatin','Simvastatin and lovastatin'],'High-intensity options are atorvastatin 40-80 mg and rosuvastatin 20-40 mg.'),
q('Moderate-intensity statin therapy lowers LDL-C by about:','30&ndash;50%',['&lt;30%','&ge;50%','5&ndash;10%'],'Moderate intensity ~30-50%; low <30%; high ~50%.')],
[q('A patient with a prior MI needs high-intensity therapy. Which regimen qualifies?','Atorvastatin (Lipitor) 80 mg daily',['Simvastatin (Zocor) 40 mg daily','Pravastatin (Pravachol) 40 mg daily','Rosuvastatin (Crestor) 5 mg daily'],'High intensity = atorvastatin 40-80 mg or rosuvastatin 20-40 mg.'),
q('A 55-year-old with diabetes needs a moderate-intensity statin. Which choice fits?','Rosuvastatin (Crestor) 10 mg daily',['Rosuvastatin (Crestor) 40 mg daily','Atorvastatin (Lipitor) 80 mg daily','Lovastatin (Mevacor) 20 mg daily'],'Moderate intensity includes rosuvastatin 5-10 mg; 40 mg and atorvastatin 80 are high; lovastatin 20 is low.')]),

c('Statin side effects and pregnancy',
'<ul><li><strong>Most common: myalgias (~10%)</strong></li><li><strong>Myositis</strong> (a bit more common) and <strong>rhabdomyolysis (rare)</strong></li><li>GI: upset stomach, flatus, dyspepsia</li><li><strong>&uarr; liver enzymes</strong>, liver failure</li><li><strong>Hyperglycemia</strong> and possibly new-onset diabetes</li><li><strong>Pregnancy</strong>: generally <strong>discontinue</strong>; avoid routine use.</li></ul>',
['statin-side-effects','statin-pregnancy'],
[q('What is the most common statin side effect?','Myalgias',['Rhabdomyolysis','Flushing','Injection site reaction'],'Myalgias are most common (about 10%).'),
q('Which serious statin muscle complication is rare?','Rhabdomyolysis',['Myalgia','GI upset','Flatus'],'Myositis is a bit more common; rhabdomyolysis is rare.'),
q('Which metabolic adverse effect is associated with statins?','Hyperglycemia and possible new-onset diabetes',['Hypoglycemia','Hypothyroidism','Hyperkalemia'],'Statins carry a risk of hyperglycemia and possibly new-onset DM.')],
[q('A woman on simvastatin learns she is 6 weeks pregnant. What should you do with her statin?','Discontinue it',['Double the dose','Switch to high-intensity rosuvastatin','Continue unchanged'],'Generally discontinue statins during pregnancy; avoid routine use.'),
q('Three weeks after starting atorvastatin, a patient reports mild symmetric thigh aches without weakness or dark urine. Which side effect is this most likely?','Statin myalgia',['Rhabdomyolysis','Gout flare','Niacin flushing'],'Myalgias are the most common statin side effect (~10%).')]),

c('Statin monitoring',
'<ul><li>Statins work in the liver: obtain <strong>baseline liver enzymes (ALT/AST/alk phos)</strong> before starting; monitor if concerns arise.</li><li>Drugs that also affect the liver complicate this: <strong>erythromycin, antifungals, immunosuppressants</strong>.</li><li>Conventional wisdom: <strong>do not stop the statin until enzymes exceed 3&times; the upper limit of normal</strong>.</li><li><strong>CK</strong> is not needed <strong>unless significantly symptomatic</strong>.</li><li>Recheck a <strong>fasting lipid panel 4&ndash;12 weeks</strong> after starting or changing the dose.</li></ul>',
['statin-monitoring'],
[q('What labs should be obtained before starting a statin?','Baseline liver enzymes (ALT/AST/alk phos)',['Baseline CK in all patients','Serum amylase','Hemoglobin A1c only'],'Liver enzymes must be taken prior to initiating statin therapy.'),
q('Conventional wisdom says a statin need not be stopped until liver enzymes exceed:','3&times; the upper limit of normal',['Any value above normal','1.5&times; the upper limit of normal','10&times; the upper limit of normal'],'Do not need to discontinue a statin until 3x the high end of normal.'),
q('Which medication class can complicate statin liver monitoring?','Antifungals',['Loop diuretics','ACE inhibitors','Inhaled corticosteroids'],'Erythromycin, antifungals, and immunosuppressants also alter liver function.')],
[q('Routine follow-up on a statin shows ALT 1.8&times; the upper limit of normal. The patient feels well. Next step?','Continue the statin and keep monitoring',['Stop the statin permanently','Order an urgent liver biopsy','Switch to niacin'],'Statins need not be stopped until enzymes are above 3x ULN.'),
q('A patient on atorvastatin needs a course of an azole antifungal. What monitoring issue should you anticipate?','Additive effect on liver function complicating LFT interpretation',['Loss of all statin effect','Severe hypoglycemia','Hyperkalemia'],'Antifungals, erythromycin, and immunosuppressants can also alter liver function.')]),

c('Statin CV research support and benefit groups',
'<ul><li><strong>Decrease in all-cause mortality</strong>.</li><li><strong>Limit progression</strong> and may even cause <strong>regression of atherosclerosis</strong>.</li></ul>'+
'<p><strong>Four groups who benefit</strong>:</p><ol><li>Secondary prevention: <strong>clinical ASCVD</strong></li><li>Primary prevention: <strong>LDL-C &ge;190</strong></li><li>Primary prevention: <strong>diabetes, age 40&ndash;75, LDL-C 70&ndash;189</strong></li><li>Primary prevention: <strong>no diabetes, age 40&ndash;75, LDL-C 70&ndash;189, 10-year ASCVD risk &ge;7.5%</strong></li></ol>',
['statin-cv-evidence','statin-benefit-groups'],
[q('What mortality outcome is supported for statins?','Decreased all-cause mortality',['No mortality benefit','Increased mortality','Only decreased pancreatitis'],'Statin use shows a decrease in all-cause mortality.'),
q('Which is one of the four statin benefit groups?','Diabetes, age 40&ndash;75, LDL-C 70&ndash;189',['Age 25 with LDL-C 110','TG 300 with normal LDL in a 30-year-old','HDL 35 alone'],'The diabetes 40-75 group with LDL 70-189 is a statin benefit group.')],
[q('A patient asks whether statins actually help her live longer or just change numbers. Best answer?','They reduce all-cause mortality and slow or even regress atherosclerosis',['They only lower numbers without outcome benefit','They only prevent pancreatitis','They work only in men'],'Statins decrease all-cause mortality and limit or may regress atherosclerosis.')])
]),

s('17b-ezetimibe','17b. Ezetimibe (cholesterol absorption inhibitor)','Objective 17. Slides 74&ndash;76, 83.',[
c('Ezetimibe: brand, MOA, route, lipid effect',
'<ul><li><strong>Ezetimibe (Zetia)</strong> 10 mg <strong>PO daily</strong>.</li><li><strong>MOA</strong>: inhibits cholesterol absorption at the <strong>brush border of the small intestine</strong> via the sterol transporter <strong>NPC1L1</strong> &rarr; less cholesterol enters enterocytes &rarr; less available for <strong>chylomicron</strong> formation.</li><li><strong>Lipid effect</strong>: LDL-C &darr; about <strong>17%</strong>; HDL &uarr; ~1%; TG &darr; 7&ndash;8%.</li></ul>',
['ezetimibe-brand','ezetimibe-moa','ezetimibe-route','ezetimibe-lipid-effect'],
[q('What is the brand name of ezetimibe?','Zetia',['Zocor','Praluent','Questran'],'Ezetimibe = Zetia.'),
q('Ezetimibe inhibits which transporter?','Niemann-Pick C1-Like1 (NPC1L1)',['HMG CoA reductase','PCSK9','Lipoprotein lipase'],'Ezetimibe blocks cholesterol absorption via NPC1L1 at the intestinal brush border.'),
q('About how much does ezetimibe lower LDL-C?','About 17%',['About 50%','About 70%','About 2%'],'Cholesterol absorption inhibitors lower LDL-C about 17%.'),
q('How is ezetimibe given?','Orally once daily',['Subcutaneously every 2 weeks','Orally twice daily as a powder','IV monthly'],'Ezetimibe (Zetia) 10 mg PO daily.')],
[q('A patient on a maximally tolerated statin needs more LDL lowering and prefers an inexpensive daily pill that blocks gut cholesterol absorption. Which agent fits?','Ezetimibe (Zetia)',['Evolocumab (Repatha)','Cholestyramine (Questran)','Gemfibrozil (Lopid)'],'Ezetimibe is an oral daily NPC1L1 inhibitor that blocks intestinal cholesterol absorption.')]),

c('Ezetimibe side effects and monitoring',
'<ul><li>Side effects are <strong>rare in monotherapy</strong>; possibly GI symptoms (<strong>diarrhea</strong>).</li><li><strong>&uarr; liver enzymes when used with statins</strong>.</li><li>Monitoring: <strong>use caution in significant hepatic impairment</strong>.</li><li>Pregnancy category C.</li></ul>',
['ezetimibe-side-effects','ezetimibe-monitoring'],
[q('When is ezetimibe most associated with elevated liver enzymes?','When combined with a statin',['When used alone in young patients','Only when given IV','When combined with fish oil'],'Ezetimibe can raise liver enzymes when used with statins.'),
q('Which side effect is possible with ezetimibe monotherapy?','Diarrhea',['Flushing','Injection site reaction','Rhabdomyolysis as the most common effect'],'SE are rare in monotherapy; possibly GI symptoms such as diarrhea.')],
[q('A patient with significant hepatic impairment needs additional LDL lowering. What does the lecture advise about ezetimibe?','Use with caution',['It is the preferred drug in liver failure','It has no hepatic considerations','It must be given with gemfibrozil'],'Monitoring: caution use of ezetimibe in significant hepatic impairment.')]),

c('Ezetimibe CV research support: IMPROVE-IT',
'<ul><li><strong>IMPROVE-IT</strong> (2015, NEJM): multicenter, double-blind RCT of <strong>18,144 patients hospitalized for ACS</strong>, followed ~6 years.</li><li>Statin + ezetimibe vs statin alone.</li><li>Result: <strong>modest but significant reduction in major CV events</strong>, <strong>without a demonstrated reduction in CV or all-cause mortality</strong>.</li></ul>'+
hy('Ezetimibe: &darr; events, <strong>no</strong> mortality benefit.'),
['improve-it'],
[q('Which trial evaluated adding ezetimibe to a statin after ACS?','IMPROVE-IT',['FOURIER','REDUCE-IT','Framingham'],'IMPROVE-IT compared statin + ezetimibe vs statin alone in recent ACS.'),
q('What did IMPROVE-IT show for ezetimibe added to a statin?','Modest reduction in major CV events without a mortality reduction',['Large reduction in all-cause mortality','No change in any outcome','Increased CV events'],'Modest but significant MACE reduction, no demonstrated mortality reduction.')],
[q('A post-ACS patient asks if adding ezetimibe to his statin will help him live longer. Most accurate answer?','It modestly reduces major CV events, but a mortality benefit was not shown',['Yes, it cuts mortality in half','No, it has no proven benefit of any kind','Only if he stops the statin'],'IMPROVE-IT: modest MACE reduction without CV or all-cause mortality reduction.')])
]),

s('17c-pcsk9-inhibitors','17c. PCSK9 inhibitors','Objective 17. Slides 77&ndash;78, 83.',[
c('PCSK9 inhibitor MOA and lipid effect',
'<ul><li>Normally <strong>PCSK9</strong> binds the <strong>LDL receptor</strong> and sends it to the <strong>lysosome</strong> to be destroyed.</li><li>A <strong>monoclonal antibody</strong> against PCSK9 lets the LDL receptor <strong>recycle</strong> to the hepatocyte surface &rarr; <strong>better clearance of LDL</strong>.</li><li>Lipid effect: <strong>LDL-C &darr; 38&ndash;72%</strong> (largest of any class), TG &darr; 2&ndash;23%, HDL &uarr; 4&ndash;9%.</li></ul>',
['pcsk9-moa','pcsk9-lipid-effect'],
[q('How do PCSK9 inhibitors lower LDL-C?','They allow LDL receptors to recycle, improving hepatic LDL clearance',['They block HMG CoA reductase','They block NPC1L1 in the gut','They bind bile acids'],'PCSK9 inhibition leads to better clearance/recycling of LDL particles in hepatocytes.'),
q('Which lipid-lowering class produces the largest LDL-C reduction in the lecture table?','PCSK9 inhibitors (38&ndash;72%)',['Ezetimibe (17%)','Bile acid sequestrants (15&ndash;30%)','Niacin (10&ndash;25%)'],'PCSK9 inhibitors lower LDL-C 38-72%.')],
[q('Without treatment, a protein in the patient&rsquo;s liver tags LDL receptors for lysosomal destruction. Which drug class blocks that protein?','PCSK9 inhibitors',['Statins','Fibrates','Omega-3 fatty acids'],'PCSK9 normally sends LDL receptors to lysosomes; antibodies against it preserve receptors.')]),

c('PCSK9 drugs, route, side effects, and evidence',
tbl(['Generic','Brand','Route'],[
['<strong>Evolocumab</strong>','<strong>Repatha</strong>','<strong>SubQ</strong> every 2 weeks or once monthly'],
['<strong>Alirocumab</strong>','<strong>Praluent</strong>','<strong>SubQ</strong> every 2 weeks or once monthly']])+
'<ul><li>Drawbacks: <strong>injection</strong> and <strong>cost</strong>.</li><li>SE: <strong>mild injection site reactions</strong>.</li><li>Research: <strong>&darr; CV events and mortality</strong>.</li></ul>',
['pcsk9-brand','pcsk9-route','pcsk9-side-effects','pcsk9-evidence'],
[q('What is the brand name of evolocumab?','Repatha',['Praluent','Vascepa','Zetia'],'Evolocumab = Repatha.'),
q('What is the brand name of alirocumab?','Praluent',['Repatha','Lovaza','Lopid'],'Alirocumab = Praluent.'),
q('By what route are PCSK9 inhibitors given?','Subcutaneous injection',['Oral daily tablet','Oral powder','Intramuscular depot every 6 months'],'PCSK9 inhibitors are given SubQ every 2 weeks or monthly.'),
q('What is the main side effect of PCSK9 inhibitors?','Mild injection site reactions',['Flushing','Myopathy with gemfibrozil','Fat-soluble vitamin deficiency'],'SE: some mild injection site reactions.')],
[q('A patient asks the downsides of adding Repatha to her statin. Which answer is accurate?','It is an injection and costly, with mostly mild injection site reactions',['It causes severe flushing','It must be taken as a powder 3 times daily','It raises TG significantly'],'PCSK9 inhibitors: injection, cost, and mild injection site reactions.'),
q('A patient wants to know whether PCSK9 inhibitors improve hard outcomes. Per the lecture, what does research show?','They decrease CV events and mortality',['No outcome benefit','Only reduce pancreatitis','Increase CV events'],'Research: PCSK9 inhibitors decrease CV events and mortality.')])
]),

s('17d-bile-acid-sequestrants','17d. Bile acid sequestrants','Objective 17. Slides 16, 79, 83.',[
c('Bile acid sequestrant: brand, MOA, route, lipid effect',
'<ul><li><strong>Cholestyramine (Questran)</strong>, <strong>oral</strong>.</li><li><strong>MOA</strong>: <strong>binds bile acids</strong> &rarr; &uarr; fecal excretion of fats and cholesterol. (Bile acids are made from LDL cholesterol, so the liver pulls more LDL to replace them.)</li><li><strong>Lipid effect</strong>: LDL-C &darr; <strong>15&ndash;30%</strong>, HDL &uarr;, <strong>TG &uarr;</strong>.</li></ul>'+
hy('Bile acid sequestrants <strong>raise TG</strong>: avoid when TG is the problem.'),
['bas-brand','bas-moa','bas-route','bas-lipid-effect'],
[q('What is the brand name of cholestyramine?','Questran',['Lopid','Fibricor','Zetia'],'Cholestyramine = Questran.'),
q('How do bile acid sequestrants lower cholesterol?','They bind bile acids, increasing fecal excretion of fats and cholesterol',['They inhibit HMG CoA reductase','They block NPC1L1','They inhibit PCSK9'],'BAS bind bile acids, leading to increased fecal excretion of fats and cholesterol.'),
q('What effect do bile acid sequestrants have on triglycerides?','They increase TG',['They lower TG by 50%','No effect','They lower TG by 20&ndash;45%'],'Bile acid sequestrants increase TGs.'),
q('By what route is cholestyramine given?','Oral',['Subcutaneous','Intravenous','Transdermal'],'Cholestyramine (Questran) is given orally.')],
[q('A patient with LDL-C 170 and TG 480 is being considered for cholestyramine. What is the main concern?','It can raise triglycerides further',['It causes injection site reactions','It causes severe flushing','It is contraindicated with any diet'],'BAS increase TG, a problem when TG is already high.')]),

c('Bile acid sequestrant side effects, evidence, and clinical use',
'<ul><li><strong>SE</strong>: nausea, bloating, cramping, diarrhea or constipation; <strong>impairs absorption of other medications</strong> and <strong>fat-soluble vitamins</strong>; &uarr; TG.</li><li><strong>Evidence</strong>: &darr; incidence of coronary events, <strong>but no evidence of mortality benefit</strong>.</li><li><strong>When used clinically</strong>: <strong>medication of choice for dyslipidemia in pregnancy</strong>.</li></ul>',
['bas-side-effects','bas-evidence','bas-clinical-use'],
[q('When are bile acid sequestrants typically used clinically?','Dyslipidemia in pregnancy',['First line after MI','Severe hypertriglyceridemia','To raise HDL in smokers'],'Bile acid sequestrants are the medication of choice for dyslipidemia in pregnancy.'),
q('Which vitamins may be poorly absorbed with bile acid sequestrants?','Fat-soluble vitamins',['Water-soluble B vitamins','Vitamin C only','None'],'BAS inhibit absorption of fat-soluble vitamins.'),
q('What does the evidence show for bile acid sequestrants?','&darr; coronary events but no mortality benefit',['&darr; all-cause mortality','No effect on events','&uarr; coronary events'],'BAS decrease incidence of coronary events but show no mortality benefit.')],
[q('A pregnant patient with significant hypercholesterolemia needs drug therapy. Which agent is the medication of choice?','Cholestyramine (Questran)',['Atorvastatin (Lipitor)','Evolocumab (Repatha)','Gemfibrozil (Lopid)'],'BAS are the medication of choice for dyslipidemia in pregnancy; statins are discontinued.'),
q('A patient on cholestyramine reports his other morning medications seem less effective. Best explanation?','The resin impairs absorption of other medications',['It induces liver enzymes','It causes rhabdomyolysis','It raises HDL too much'],'Bile acid sequestrants cause complications with absorption of other medications.')])
]),

s('17e-fibric-acid-derivatives','17e. Fibric acid derivatives (fibrates)','Objective 17. Slides 46, 80, 83.',[
c('Fibrates: brand, MOA, route, lipid effect, and clinical use',
tbl(['Generic','Brand','Key interaction'],[
['<strong>Fenofibrate</strong>','<strong>Fibricor</strong>','Can interact with <strong>Coumadin (warfarin)</strong>'],
['<strong>Gemfibrozil</strong>','<strong>Lopid</strong>','&uarr; <strong>statin muscle toxicity</strong>']])+
'<ul><li><strong>MOA</strong>: not well understood.</li><li><strong>Route</strong>: oral.</li><li><strong>Lipid effect</strong>: <strong>TG &darr; 35&ndash;53%</strong> (largest TG drop), HDL &uarr; 5&ndash;20%, LDL &darr; 6&ndash;20%.</li><li><strong>When used</strong>: <strong>not indicated unless there is a hypertriglyceridemia component</strong>; historically used for familial hypertriglyceridemia.</li></ul>'+
cl('The fibrate slide does not state a route; fenofibrate and gemfibrozil are oral tablets.'),
['fibrate-brand','fibrate-moa','fibrate-route','fibrate-lipid-effect','fibrate-clinical-use'],
[q('What is the brand name of gemfibrozil?','Lopid',['Fibricor','Lovaza','Questran'],'Gemfibrozil = Lopid.'),
q('What is the brand name of fenofibrate listed in lecture?','Fibricor',['Lopid','Zetia','Crestor'],'Fenofibrate = Fibricor.'),
q('Which lipid do fibrates lower the most?','Triglycerides (35&ndash;53%)',['LDL-C (38&ndash;72%)','HDL-C','Lp(a)'],'Fibrates decrease TG 35-53% and increase HDL.'),
q('When are fibrates indicated?','Only when there is a hypertriglyceridemia component',['First line for isolated high LDL','For all post-MI patients','For dyslipidemia in pregnancy'],'Fibrates are not indicated unless there is a hypertriglyceridemia component.'),
q('How well understood is the mechanism of fibrates according to the lecture?','Not well understood',['Fully explained as HMG CoA reductase inhibition','PCSK9 antibody','NPC1L1 blockade'],'The lecture states fibrate MOA is not well understood.')],
[q('A patient with normal LDL-C but TG 640 after diet changes needs a drug with the largest TG reduction. Which class lowers TG the most?','Fibric acid derivative',['Bile acid sequestrant','Ezetimibe','PCSK9 inhibitor'],'Fibrates lower TG 35-53%, the largest TG drop in the table.')]),

c('Fibrate side effects, monitoring, and evidence',
'<ul><li><strong>Monitoring</strong>: <strong>ALT</strong>; <strong>contraindicated in hepatic impairment</strong>.</li><li><strong>Fenofibrate</strong> can interact with <strong>Coumadin</strong>.</li><li><strong>Gemfibrozil</strong> <strong>increases muscle toxicity caused by statins</strong>.</li><li><strong>Evidence</strong>: <strong>no significant evidence of improved CV event or mortality outcomes</strong> in general populations.</li></ul>'+
hy('Statin + gemfibrozil = &uarr; myopathy/rhabdo risk.'),
['fibrate-side-effects','fibrate-monitoring','fibrate-evidence'],
[q('Which fibrate increases statin muscle toxicity?','Gemfibrozil (Lopid)',['Fenofibrate (Fibricor)','Ezetimibe (Zetia)','Icosapent ethyl (Vascepa)'],'Gemfibrozil has been shown to increase muscle toxicity caused by statins.'),
q('Which lab is monitored on fibrate therapy?','ALT',['TSH','Amylase','Uric acid'],'Monitoring: ALTs; fibrates are contraindicated in hepatic impairment.'),
q('What is the CV outcome evidence for fibrates?','No significant improvement in CV events or mortality in general populations',['Large reduction in all-cause mortality','Reduced MACE in statin-treated patients like Vascepa','Proven regression of plaque'],'There is no significant evidence of improved CV event or mortality outcomes.')],
[q('A patient on rosuvastatin develops severe muscle pain and dark urine two weeks after another clinician added a fibrate. Which fibrate is the likely culprit?','Gemfibrozil (Lopid)',['Fenofibrate in a patient with no statin','Cholestyramine (Questran)','Ezetimibe (Zetia)'],'Gemfibrozil increases statin muscle toxicity (myopathy/rhabdomyolysis).'),
q('A patient on warfarin is started on fenofibrate. What should you monitor more closely?','Anticoagulation effect (INR), since fenofibrate can interact with Coumadin',['Serum amylase','Potassium','Fat-soluble vitamin levels'],'Fenofibrate (Fibricor) can interact with Coumadin.'),
q('A patient with cirrhosis and TG 600 asks about a fibrate. What does the lecture say?','Fibrates are contraindicated in hepatic impairment',['Fibrates are preferred in liver disease','No liver monitoring is needed','Only gemfibrozil is safe in cirrhosis'],'Fibrates are contraindicated in hepatic impairment.')])
]),

s('17f-niacin','17f. Niacin','Objective 17. Slides 81, 83.',[
c('Niacin: lipid effects and evidence',
'<ul><li><strong>Niacin = vitamin B3</strong>; MOA not well understood. <strong>Goal: &uarr; HDL</strong>.</li><li>Lipid effect: <strong>HDL &uarr; 15&ndash;35%</strong> (largest HDL rise), LDL &darr; 10&ndash;25%, TG &darr; 25&ndash;30%.</li><li><strong>No evidence of improved event or mortality outcomes</strong>.</li></ul>',
['niacin-lipid-effect','niacin-evidence'],
[q('What is the main lipid goal of niacin?','Raise HDL',['Lower Lp(a) only','Raise TG','Lower HDL'],'Niacin goal: increase HDL (15-35%).'),
q('Which class produces the largest HDL increase in the lecture table?','Niacin (15&ndash;35%)',['Statins (5&ndash;10%)','PCSK9 inhibitors (4&ndash;9%)','Ezetimibe (1%)'],'Niacin raises HDL 15-35%.'),
q('What outcome evidence exists for niacin?','No evidence of improved event or mortality outcomes',['Reduced all-cause mortality','Reduced MACE in statin-treated patients','Plaque regression proven'],'Niacin has no evidence of improved event or mortality outcomes.')],
[q('A patient with low HDL wants niacin to &ldquo;prevent heart attacks.&rdquo; What should you tell him?','It raises HDL but has not been shown to reduce events or mortality',['It is proven to reduce heart attacks by half','It lowers HDL','It is the first-line drug for ASCVD'],'Niacin raises HDL but has no evidence of improved event or mortality outcomes.')]),

c('Niacin side effects and how to prevent them',
'<ul><li><strong>Flushing, tachycardia, pruritus</strong> (especially the <strong>immediate-release</strong> form) &rarr; <strong>reduce with aspirin 81 mg co-administration</strong>.</li><li><strong>N/V/D</strong></li><li><strong>Hepatotoxicity</strong></li><li><strong>Worsened insulin resistance</strong></li></ul>'+
hy('Niacin flush &rarr; give <strong>ASA 81</strong>; avoid immediate-release.'),
['niacin-side-effects','niacin-flush-prevention'],
[q('What is the classic side effect of niacin?','Flushing',['Injection site reaction','Fat-soluble vitamin deficiency','Myalgias as the most common effect'],'Niacin causes flushing, tachycardia, and pruritus.'),
q('How can niacin flushing be reduced?','Aspirin 81 mg co-administration',['Taking it with grapefruit juice','Adding gemfibrozil','Taking immediate-release form at bedtime only'],'Flushing may be reduced with ASA 81 co-administration.'),
q('Which niacin formulation causes the most flushing?','Immediate-release',['Subcutaneous','Topical','Inhaled'],'Flushing, tachycardia, and pruritus are especially seen with immediate-release niacin.'),
q('Which metabolic effect of niacin is a concern in diabetics?','Worsened insulin resistance',['Hypoglycemia','Lower A1c','Increased insulin sensitivity'],'Niacin can worsen insulin resistance.')],
[q('A patient stopped niacin because of hot, red, itchy skin 20 minutes after each dose. How could this be prevented?','Co-administer aspirin 81 mg',['Double the dose','Switch to immediate-release niacin','Take it with alcohol'],'Niacin flushing may be reduced with ASA 81 co-administration.'),
q('A patient with prediabetes is considering niacin. Which side effect is especially relevant?','Worsened insulin resistance',['Rhabdomyolysis','Reduced fat-soluble vitamin absorption','Injection site reactions'],'Niacin can worsen insulin resistance.')])
]),

s('17g-fish-oil','17g. Fish oil (omega-3 fatty acids)','Objective 17. Slides 82&ndash;83.',[
c('Fish oil: brand/generic, route, MOA, lipid effect',
tbl(['Generic','Brand','Content','Route'],[
['<strong>Icosapent ethyl</strong>','<strong>Vascepa</strong>','<strong>EPA only</strong>','2 g <strong>PO BID</strong>'],
['<strong>Omega-3-acid ethyl esters</strong>','<strong>Lovaza</strong>','<strong>EPA + DHA</strong>','2 g <strong>PO BID</strong>']])+
'<ul><li><strong>MOA</strong>: <strong>&darr; hepatic VLDL production</strong> &rarr; lower TG.</li><li><strong>Lipid effect</strong>: prescription omega-3 (4 g/day) <strong>&darr; TG about 20&ndash;45%</strong>; HDL &uarr; 5&ndash;9%; LDL variable.</li></ul>',
['fish-oil-brand','fish-oil-route','fish-oil-moa','fish-oil-lipid-effect'],
[q('What is the brand name of icosapent ethyl?','Vascepa',['Lovaza','Repatha','Lopid'],'Icosapent ethyl = Vascepa (EPA only).'),
q('Which prescription omega-3 contains both EPA and DHA?','Lovaza',['Vascepa','Fibricor','Zetia'],'Lovaza (omega-3-acid ethyl esters) contains EPA + DHA.'),
q('How do omega-3 fatty acids lower triglycerides?','By decreasing hepatic VLDL production',['By inhibiting HMG CoA reductase','By binding bile acids','By blocking PCSK9'],'Omega-3s decrease hepatic VLDL production.'),
q('About how much does prescription omega-3 (4 g/day) lower TG?','About 20&ndash;45%',['About 2&ndash;5%','About 70&ndash;90%','It raises TG'],'Prescription omega-3 at 4 g/day can reduce TG by about 20-45%.'),
q('By what route are prescription fish oils taken?','Oral, twice daily',['Subcutaneous every 2 weeks','IV monthly','Oral powder once weekly'],'Vascepa and Lovaza are 2 g PO BID.')],
[q('A patient with TG 320 already on a statin asks about a prescription omega-3 that is EPA-only. Which product is that?','Icosapent ethyl (Vascepa)',['Omega-3-acid ethyl esters (Lovaza)','Fenofibrate (Fibricor)','Evolocumab (Repatha)'],'Vascepa (icosapent ethyl) is EPA-only.')]),

c('Fish oil side effects and CV evidence',
'<ul><li><strong>SE</strong>: <strong>GI upset</strong>, <strong>&uarr; risk of atrial fibrillation</strong>, possible <strong>&uarr; bleeding risk</strong>.</li><li><strong>CV outcomes</strong>: <strong>Vascepa</strong> reduced major CV events in <strong>selected high-risk patients on statin therapy</strong>. This benefit is <strong>not established for Lovaza or OTC fish oil</strong>.</li></ul>'+
hy('Only <strong>Vascepa</strong> has CV outcome benefit. OTC fish oil &ne; Vascepa.'),
['fish-oil-side-effects','fish-oil-evidence'],
[q('Which arrhythmia risk is increased by prescription fish oil?','Atrial fibrillation',['Ventricular fibrillation','Complete heart block','Torsades de pointes'],'Fish oil SE include increased risk of atrial fibrillation.'),
q('Which omega-3 product has shown reduced major CV events in high-risk statin-treated patients?','Vascepa (icosapent ethyl)',['Lovaza','OTC fish oil capsules','All omega-3 products equally'],'Vascepa has demonstrated reduced MACE; this is not established for Lovaza or OTC fish oil.')],
[q('A high-risk patient on a statin with TG 260 asks if her OTC fish oil capsules give the same heart benefit as the prescription product her friend takes. Best answer?','No; the CV event benefit is shown for Vascepa, not OTC fish oil',['Yes; all fish oils are equivalent','Yes; OTC fish oil has more evidence','No; prescription fish oil increases MI risk'],'CV benefit is demonstrated for Vascepa, not Lovaza or OTC supplements.'),
q('A patient on warfarin with paroxysmal atrial fibrillation history is considering high-dose fish oil. Which side effects matter most?','Possible bleeding risk and increased AF risk',['Hypoglycemia and flushing','Rhabdomyolysis and myalgia','Fat-soluble vitamin deficiency'],'Fish oil can increase AF risk and possibly bleeding risk.')])
]),

/* ---------- Objective 18 ---------- */
s('18-medication-order','18. Choosing medications for LDL-C lowering and TG lowering, in order','Objective 18. Slides 46&ndash;47, 79&ndash;83, 85, 89, 91.',[
c('Lipid-lowering effects of each class',
tbl(['Class','% LDL-C &darr;','% HDL-C &uarr;','% TG &darr;'],[
['Statins','20&ndash;60','5&ndash;10','10&ndash;33'],
['<strong>PCSK9 inhibitors</strong>','<strong>38&ndash;72</strong>','4&ndash;9','2&ndash;23'],
['Cholesterol absorption inhibitor (ezetimibe)','17','1','7&ndash;8'],
['Bile acid sequestrants','15&ndash;30','~','<strong>Increases</strong>'],
['<strong>Fibric acid derivatives</strong>','6&ndash;20','5&ndash;20','<strong>35&ndash;53</strong>'],
['<strong>Niacin</strong>','10&ndash;25','<strong>15&ndash;35</strong>','25&ndash;30'],
['Omega-3 fatty acids','Variable','5&ndash;9','23&ndash;45']])+
hy('Biggest LDL drop: <strong>PCSK9i</strong>. Biggest TG drop: <strong>fibrates</strong>. Biggest HDL rise: <strong>niacin</strong>. Only class that <strong>raises TG</strong>: <strong>bile acid sequestrants</strong>.'),
['comparison-table'],
[q('Which class has the largest TG reduction in the lipid-effects table?','Fibric acid derivatives',['Statins','Ezetimibe','PCSK9 inhibitors'],'Fibrates lower TG 35-53%.'),
q('Which class increases triglycerides?','Bile acid sequestrants',['Fibrates','Omega-3 fatty acids','Niacin'],'Bile acid sequestrants increase TG.'),
q('What range of LDL-C lowering do statins produce in the table?','20&ndash;60%',['38&ndash;72%','6&ndash;20%','15&ndash;30%'],'Statins lower LDL-C 20-60%.')],
[q('A patient&rsquo;s labs show LDL 98, HDL 52, and TG 520 after lifestyle changes. Which single class has the largest effect on his main problem?','Fibric acid derivative',['Bile acid sequestrant','Ezetimibe','PCSK9 inhibitor'],'TG is the main problem; fibrates have the largest TG reduction (35-53%), and BAS would raise TG.')]),

c('LDL-C lowering: order of use',
'<ol><li><strong>Lifestyle</strong> for everyone.</li><li><strong>Statin first</strong>, at the intensity the patient&rsquo;s group calls for (proven &darr; all-cause mortality).</li><li><strong>Maximize the statin</strong> (dose or tolerance) and lifestyle; reinforce adherence and look for secondary causes.</li><li>Then <strong>add non-statin therapy</strong> for additional LDL lowering in select high-risk patients (shared decision):<ul><li><strong>Ezetimibe</strong>: oral, daily, inexpensive; &darr; events (IMPROVE-IT), no mortality benefit.</li><li><strong>PCSK9 inhibitor</strong>: largest LDL drop and &darr; events and mortality, but <strong>injection and cost</strong>.</li></ul></li><li><strong>Bile acid sequestrant</strong>: modest LDL drop, raises TG, no mortality benefit; mainly the <strong>drug of choice in pregnancy</strong>.</li></ol>'+
cl('ACC/AHA guidance generally uses <strong>ezetimibe as the first add-on</strong> to a maximized statin, reserving <strong>PCSK9 inhibitors</strong> for very-high-risk patients still above threshold.'),
['ldl-order'],
[q('What is the first-line drug class for LDL-C lowering?','Statin',['Ezetimibe','PCSK9 inhibitor','Fibrate'],'Statins are first line; non-statins are added after statin and lifestyle are maximized.'),
q('When should non-statin therapy be added for LDL lowering?','After the statin and lifestyle have been maximized (dose or tolerance)',['Before trying any statin','Only in pregnancy','Whenever HDL is low'],'Consider non-statin therapy after statin and lifestyle have been maximized.'),
q('Which LDL-lowering class is reserved mainly for pregnancy?','Bile acid sequestrants',['PCSK9 inhibitors','Statins','Ezetimibe'],'BAS are the medication of choice for dyslipidemia in pregnancy.')],
[q('A 64-year-old with prior MI is on atorvastatin 80 mg with good adherence; LDL-C remains 98. What is the most appropriate next step for more LDL lowering?','Add ezetimibe (non-statin add-on)',['Switch to niacin','Add cholestyramine as first add-on despite TG 400','Stop the statin and start fish oil'],'After maximizing the statin, add non-statin therapy; ezetimibe is the usual first add-on.'),
q('A 58-year-old with recurrent ACS remains far above goal despite maximally tolerated statin plus ezetimibe. Which agent offers the largest additional LDL reduction?','PCSK9 inhibitor (evolocumab or alirocumab)',['Fenofibrate','Niacin','Lovaza'],'PCSK9 inhibitors lower LDL 38-72% and reduce events and mortality.')]),

c('TG lowering: order of use',
'<ol><li><strong>Lifestyle and secondary causes first</strong>: cut <strong>carbs and alcohol</strong>, low-fat diet (essential in LPL deficiency), control diabetes, review estrogen and other drugs.</li><li><strong>Prescription omega-3, preferably Vascepa</strong>: &darr; TG 20&ndash;45% and the <strong>only TG agent with CV outcome benefit</strong> (in statin-treated high-risk patients).</li><li><strong>Fibrate</strong>: largest TG drop (35&ndash;53%) but <strong>no event/mortality benefit</strong>; use only with a hypertriglyceridemia component; avoid gemfibrozil with a statin; &ldquo;historically&rdquo; the TG drug.</li><li><strong>Niacin last</strong>: lowers TG but <strong>no outcome benefit</strong>, many side effects.</li></ol>'+
'<p>Avoid <strong>bile acid sequestrants</strong> when TG is high (they raise TG). The statin is still used for ASCVD risk when indicated.</p>',
['tg-order'],
[q('Which TG-lowering medication has demonstrated CV outcome benefit?','Icosapent ethyl (Vascepa)',['Gemfibrozil (Lopid)','Niacin','Cholestyramine'],'Vascepa reduced major CV events in selected high-risk statin-treated patients.'),
q('What is the first step for a patient with elevated TG?','Lifestyle: cut carbohydrates and alcohol, address secondary causes',['Start niacin','Start cholestyramine','Start a PCSK9 inhibitor'],'Lifestyle and secondary factors come first for TG.'),
q('Which TG-lowering agent should be used last because it lacks outcome benefit and has many side effects?','Niacin',['Vascepa','Diet changes','Fenofibrate in hyperTG'],'Niacin has no evidence of improved outcomes and has flushing, hepatotoxicity, and insulin resistance.')],
[q('A 60-year-old with diabetes on a moderate-intensity statin has TG 280 despite cutting carbs and alcohol and improving his A1c. Which add-on best reduces TG and also has CV event data?','Icosapent ethyl (Vascepa)',['Cholestyramine','Niacin','Gemfibrozil'],'Vascepa lowers TG and reduced MACE in high-risk statin-treated patients.'),
q('A patient on a statin needs a fibrate for TG 900. Which fibrate is preferred to reduce myopathy risk?','Fenofibrate rather than gemfibrozil',['Gemfibrozil rather than fenofibrate','Either; no difference','Neither; use cholestyramine'],'Gemfibrozil increases statin muscle toxicity, so fenofibrate is preferred alongside a statin.')])
]),

/* ---------- Objective 19 ---------- */
s('19-treatment-plan','19. Building a primary or secondary prevention plan (ACC/AHA framework)','Objective 19. Slides 61, 73, 84&ndash;89, 94&ndash;96.',[
c('The four statin groups and their intensity',
tbl(['Group','Statin intensity (ACC/AHA 2019)'],[
['1. <strong>Clinical ASCVD</strong> (secondary prevention)','<strong>High</strong>'],
['2. <strong>LDL-C &ge;190</strong>','<strong>High</strong> (no risk calculation needed)'],
['3. <strong>Diabetes, age 40&ndash;75</strong> (LDL 70&ndash;189)','<strong>Moderate</strong> (risk assessment to consider high)'],
['4. <strong>No DM, age 40&ndash;75, LDL 70&ndash;189, 10-year risk &ge;7.5%</strong>','<strong>Moderate&ndash;high</strong> (&ge;20% risk &rarr; high)']])+
hy('There is <strong>no target LDL</strong> in the 2019 framework: choose the right <strong>intensity</strong> for the group.'),
['four-groups','intensity-selection','no-ldl-target'],
[q('Which statin intensity is recommended for a patient with LDL-C &ge;190?','High intensity',['Low intensity','Moderate intensity','No statin; lifestyle only'],'LDL-C >=190: high-intensity statin.'),
q('Which statin intensity is recommended for diabetics aged 40&ndash;75?','Moderate intensity',['Low intensity','No statin','High intensity always'],'Diabetics 40-75: moderate intensity (consider high based on risk).'),
q('What LDL target does the ACC/AHA 2019 framework set?','There is no target LDL',['LDL &lt;70 for all','LDL &lt;100 for all','LDL &lt;130 for all'],'Of note, there is no target LDL; therapy is intensity-based.')],
[q('A 47-year-old Black smoker with HTN (on lisinopril, BP 132/78) has TC 284, LDL-C 153, TG 178, HDL 35. What is the correct first step in his plan?','Calculate his 10-year ASCVD risk; he is primary prevention without diabetes',['Start a PCSK9 inhibitor','High-intensity statin because LDL &gt;190','No action; he is under 50'],'Age 40-75, LDL 70-189, no DM, no ASCVD: the 10-year risk drives the statin decision.'),
q('A 56-year-old with DM, HTN, HLD, and a coronary stent asks what cholesterol plan he needs. Best plan?','High-intensity statin plus lifestyle (secondary prevention)',['Moderate-intensity statin for diabetes only','Calculate 10-year risk first','Lifestyle only'],'The stent means clinical ASCVD, which outranks the diabetes group: high-intensity statin.'),
q('A 52-year-old with no diabetes and no ASCVD has LDL-C 205. What does the framework recommend?','High-intensity statin without a risk calculation',['Moderate intensity after risk calculation','Lifestyle only for 6 months','Fish oil'],'LDL-C >=190 = high-intensity statin, no risk assessment needed.')]),

c('Special age groups and borderline risk',
tbl(['Situation','Recommendation'],[
['Age <strong>0&ndash;19</strong>','Lifestyle; <strong>FH diagnosis &rarr; statin</strong>'],
['Age <strong>20&ndash;39</strong>','Estimate lifetime risk; <strong>consider statin if family hx of premature ASCVD and LDL-C &ge;160</strong>'],
['Age <strong>&gt;75</strong>','<strong>Risk/benefit discussion</strong> with the patient'],
['<strong>Borderline risk</strong> (5&ndash;&lt;7.5%)','If <strong>risk enhancers</strong> present &rarr; shared decision on <strong>moderate-intensity</strong> statin']]),
['special-ages','borderline-risk'],
[q('For a patient aged 20&ndash;39, when should a statin be considered?','Family history of premature ASCVD and LDL-C &ge;160',['Any LDL-C above 100','Only after an MI','Never before age 40'],'Age 20-39: consider statin if family hx of premature ASCVD and LDL-C >=160.'),
q('What is recommended for adults older than 75 in primary prevention?','A risk/benefit discussion with the patient',['Automatic high-intensity statin','Stop all statins','CAC is mandatory'],'Age 75+: risk/benefit discussion.')],
[q('A 34-year-old has LDL-C 172; his father had an MI at 46. What does the framework suggest?','Consider a statin (age 20&ndash;39, premature family ASCVD, LDL &ge;160)',['No statin until age 40','PCSK9 inhibitor first','Risk calculator says no treatment'],'Age 20-39 with family history of premature ASCVD and LDL-C >=160: consider statin.'),
q('A 55-year-old woman without diabetes has a 6.4% 10-year risk, LDL-C 145, and a history of preeclampsia. Plan?','Shared decision on a moderate-intensity statin because a risk enhancer is present',['High-intensity statin','No discussion; lifestyle only','PCSK9 inhibitor'],'Borderline risk with risk enhancers: shared decision-making on moderate-intensity statin.')]),

c('ASCVD risk enhancers',
'<ul><li><strong>Family history of premature ASCVD</strong></li><li><strong>LDL-C &ge;160</strong> (persistent)</li><li><strong>CKD</strong></li><li><strong>Metabolic syndrome</strong></li><li>Conditions specific to women: <strong>preeclampsia, premature menopause</strong></li><li><strong>Inflammatory diseases</strong>: rheumatoid arthritis, psoriasis, HIV</li><li>Ethnicity: <strong>South Asian ancestry</strong></li><li>Lipid/biomarkers: <strong>TG &ge;175</strong>; if measured, <strong>hs-CRP &ge;2</strong>, <strong>Lp(a) &gt;50</strong>, <strong>apoB &ge;130</strong>, <strong>ABI &lt;0.9</strong></li></ul>',
['risk-enhancers'],
[q('Which is an ASCVD risk enhancer?','Chronic kidney disease',['Osteoarthritis','Asthma','Hypothyroidism treated to normal'],'CKD is listed as an ASCVD risk enhancer.'),
q('Which ankle-brachial index value is a risk enhancer?','ABI &lt;0.9',['ABI 1.0&ndash;1.2','ABI &gt;1.3 only','ABI exactly 1.0'],'ABI <0.9 is a risk enhancer.'),
q('Which ancestry is listed as an ASCVD risk enhancer?','South Asian',['Northern European','East African','Native Hawaiian'],'Ethnicity factor: South Asian ancestry.'),
q('What persistent triglyceride level is a risk enhancer?','&ge;175 mg/dL',['&ge;100 mg/dL','&ge;500 mg/dL','&ge;1,000 mg/dL'],'Persistently elevated TG >=175 is a risk enhancer.'),
q('What Lp(a) and apoB levels count as risk enhancers?','Lp(a) &gt;50 mg/dL and apoB &ge;130 mg/dL',['Lp(a) &gt;5 and apoB &ge;50','Lp(a) &gt;200 and apoB &ge;300','Lp(a) &lt;30 and apoB &lt;60'],'Lp(a) >50 and apoB >=130 are risk enhancers.')],
[q('A 50-year-old with psoriatic disease, a 9% 10-year risk, and LDL-C 140 is undecided about a statin. How should his psoriasis factor in?','It is a risk enhancer that favors starting a statin',['It lowers his risk','It is unrelated to ASCVD','It mandates a PCSK9 inhibitor'],'Inflammatory diseases (RA, psoriasis, HIV) are risk enhancers that favor statin therapy.')]),

c('When the decision is uncertain: CAC as tiebreaker',
'<p>If the risk decision remains <strong>uncertain</strong> (typically borderline or intermediate risk), consider a <strong>coronary calcium score</strong>:</p>'+
tbl(['CAC','Plan'],[
['<strong>0</strong>','Lowers risk; consider <strong>no statin</strong> unless <strong>diabetes, family hx of premature ASCVD, or cigarette smoking</strong>'],
['<strong>1&ndash;99</strong>','<strong>Favors statin</strong>, especially after age 55'],
['<strong>100+</strong>','<strong>Statin indicated</strong>']]),
['cac-tiebreaker'],
[q('In the ACC/AHA framework, when is a CAC score most useful?','When the statin decision is uncertain in primary prevention',['After an MI to decide statin intensity','In all patients with LDL &ge;190','To diagnose pancreatitis'],'If the risk decision is uncertain, consider measuring CAC in selected adults.'),
q('Which three factors mean a CAC of 0 does NOT remove the statin recommendation?','Diabetes, family history of premature ASCVD, cigarette smoking',['Age over 40, male sex, HTN','Obesity, OSA, osteoarthritis','High HDL, low TG, normal BMI'],'CAC = 0: consider no statin unless DM, family history of premature ASCVD, or smoking.')],
[q('A 57-year-old current smoker with intermediate risk has a CAC of 0. Should he skip the statin?','No; smoking is an exception, so a statin is still favored',['Yes; CAC 0 always means no statin','Yes, if his LDL is under 190','No; he needs a PCSK9 inhibitor'],'CAC 0 lowers risk, but smoking is listed as an exception where a statin is still considered.'),
q('A 61-year-old with intermediate risk has a CAC of 45. What does it suggest?','Favors starting a statin (CAC 1&ndash;99, age &gt;55)',['No statin needed','Statin only if CAC rises above 400','Immediate cardiac catheterization'],'CAC 1-99 favors statin, especially after age 55.')])
]),

/* ---------- Objective 20 ---------- */
s('20-metabolic-syndrome','20. Applying metabolic syndrome criteria as a risk enhancer','Objective 20. Slides 86&ndash;87.',[
c('Metabolic syndrome criteria (3 or more of 5)',
tbl(['Criterion','Threshold'],[
['<strong>Waist circumference</strong>','<strong>&gt;40 in (men)</strong>; <strong>&gt;35 in (women)</strong>'],
['<strong>Triglycerides</strong>','<strong>&ge;150 mg/dL</strong>'],
['<strong>HDL-C</strong>','<strong>&lt;40 (men)</strong>; <strong>&lt;50 (women)</strong>'],
['<strong>Fasting glucose</strong>','<strong>&ge;100 mg/dL</strong>'],
['<strong>Blood pressure</strong>','<strong>&ge;130 systolic and/or &ge;85 diastolic</strong>']])+
mn('<strong>&ldquo;3 of 5: Waist, TG, HDL, Sugar, BP&rdquo;</strong> &mdash; numbers <strong>40/35, 150, 40/50, 100, 130/85</strong>.'),
['three-of-five','waist','tg-criterion','hdl-criterion','glucose-criterion','bp-criterion'],
[q('How many criteria are needed to diagnose metabolic syndrome?','3 or more of 5',['1 of 5','2 of 5','All 5'],'Diagnosed if the patient has 3+ of the 5 criteria.'),
q('What waist circumference meets metabolic syndrome criteria in a woman?','&gt;35 inches',['&gt;30 inches','&gt;40 inches','&gt;45 inches'],'Waist >40 inches in men and >35 inches in women.'),
q('What HDL-C meets metabolic syndrome criteria in a man?','&lt;40 mg/dL',['&lt;50 mg/dL','&lt;60 mg/dL','&lt;30 mg/dL'],'HDL <40 in men or <50 in women.'),
q('What fasting glucose meets metabolic syndrome criteria?','&ge;100 mg/dL',['&ge;126 mg/dL','&ge;200 mg/dL','&ge;90 mg/dL'],'Fasting glucose >=100 mg/dL.'),
q('What blood pressure meets metabolic syndrome criteria?','&ge;130 systolic and/or &ge;85 diastolic',['&ge;140/90 only','&ge;120/80','&ge;160/100'],'BP systolic >=130 and/or diastolic >=85.'),
q('What triglyceride level meets metabolic syndrome criteria?','&ge;150 mg/dL',['&ge;200 mg/dL','&ge;500 mg/dL','&ge;100 mg/dL'],'Triglycerides >=150 mg/dL.')],
[q('A man has waist 42 in, TG 162, HDL 44, fasting glucose 96, and BP 134/82. Does he have metabolic syndrome?','Yes; waist, TG, and BP meet 3 criteria',['No; only 2 criteria','No; glucose must be &ge;126','Yes; all 5 criteria are met'],'Waist >40, TG >=150, and SBP >=130 = 3 criteria; HDL 44 and glucose 96 do not qualify.'),
q('A woman has waist 34 in, TG 140, HDL 46, fasting glucose 104, and BP 128/86. Does she have metabolic syndrome?','Yes; HDL, glucose, and diastolic BP meet 3 criteria',['No; only 2 criteria are met','No; waist circumference is required','Yes; all 5 criteria are met'],'HDL <50 (woman), glucose >=100, and DBP >=85 qualify; waist and TG do not. That is 3 criteria.')]),

c('Metabolic syndrome as an ASCVD risk enhancer',
'<ul><li><strong>Metabolic syndrome is an ASCVD risk enhancer</strong>.</li><li>In <strong>borderline</strong> (5&ndash;&lt;7.5%) or <strong>intermediate</strong> (7.5&ndash;&lt;20%) risk, a risk enhancer favors starting (at least) a <strong>moderate-intensity statin</strong> through shared decision-making.</li><li>Also a lifestyle target: manage obesity/metabolic syndrome with diet and exercise.</li></ul>',
['risk-enhancer-role'],
[q('How does metabolic syndrome affect statin decisions in primary prevention?','It is a risk enhancer that favors statin therapy in borderline/intermediate risk',['It is clinical ASCVD requiring high intensity','It has no role in risk assessment','It is a contraindication to statins'],'Metabolic syndrome is listed as an ASCVD risk enhancer.')],
[q('A 52-year-old woman with a 6% 10-year risk meets 4 metabolic syndrome criteria. How does this change management?','The risk enhancer supports a shared decision on a moderate-intensity statin',['She now needs high-intensity statin as secondary prevention','Nothing changes','She should start niacin'],'Borderline risk plus a risk enhancer (metabolic syndrome) supports a moderate-intensity statin discussion.')])
]),

/* ---------- Objective 21 ---------- */
s('21-follow-up','21. Follow-up after starting dyslipidemia treatment','Objective 21. Slides 90&ndash;93.',[
c('The 4&ndash;12 week visit: questions and labs',
'<p>Within <strong>4&ndash;12 weeks</strong> after starting a statin or changing the regimen, assess:</p>'+
tbl(['Ask about','Order'],[
['<strong>Adherence</strong> (taking it daily? lifestyle changes?)','<strong>Fasting lipid panel</strong> (response to therapy)'],
['<strong>Adverse effects</strong>: muscle aches/weakness, GI upset, dark urine, signs of liver injury','<strong>ALT/AST</strong> (some argue only if symptomatic)'],
['<strong>Response</strong> to therapy','<strong>CK only if significantly symptomatic</strong>']]),
['follow-up-timing','follow-up-questions','follow-up-labs','ck-testing'],
[q('When should a patient be reassessed after starting or changing a statin?','Within 4&ndash;12 weeks',['Within 1 week','At 1 year','Only if symptomatic'],'Assess adherence, response, and adverse effects within 4-12 weeks.'),
q('Which three things are assessed at the first follow-up after a statin start?','Adherence, response to therapy, and adverse effects',['Weight, height, and BMI only','Bone density, vision, and hearing','Only cost and insurance'],'Assess adherence, response to therapy, and adverse effects.'),
q('When should CK be checked in a patient on a statin?','Only if significantly symptomatic',['At every visit','Before starting in all patients','Monthly for a year'],'CK does not need to be assessed unless significantly symptomatic.'),
q('Which labs are measured at the first statin follow-up?','Fasting lipid panel and ALT/AST',['CK and TSH routinely','Amylase and lipase','CBC and ferritin'],'Measure fasting lipid levels and follow ALT/AST.')],
[q('Eight weeks after starting rosuvastatin, an asymptomatic patient returns. Which workup is appropriate?','Ask about adherence and side effects; fasting lipid panel; ALT/AST',['Routine CK and muscle biopsy','CAC scan','No labs until 1 year'],'At 4-12 weeks: assess adherence, response, and adverse effects; check fasting lipids and LFTs; CK only if significantly symptomatic.')]),

c('When the response is inadequate',
'<ol><li><strong>Reinforce adherence</strong> to lifestyle and drug therapy.</li><li><strong>Evaluate for secondary causes</strong> if indicated (DM, hypothyroidism, alcohol, cholestatic liver disease, chronic renal failure, smoking, obesity, drugs).</li><li><strong>Increase statin intensity</strong>, or if already on maximally tolerated statin, <strong>consider adding non-statin therapy</strong> in select high-risk individuals.</li></ol>',
['inadequate-response'],
[q('What is the first step when a patient is not getting the expected statin response?','Reinforce adherence to lifestyle and drug therapy',['Stop the statin','Add niacin immediately','Order a CAC'],'Reinforce improved adherence to lifestyle and drug therapy first.'),
q('If a patient is already on a maximally tolerated statin with inadequate response, what is considered?','Adding non-statin therapy in select high-risk patients',['Switching to a lower-intensity statin','Stopping all lipid therapy','Starting a bile acid sequestrant in every case'],'Consider addition of non-statin therapy in select high-risk individuals.')],
[q('A patient on moderate-intensity atorvastatin for 10 weeks has only a 5% LDL drop. He admits taking it &ldquo;most days&rdquo; and has new fatigue and weight gain. Best next steps?','Reinforce adherence and check for secondary causes such as hypothyroidism',['Add a PCSK9 inhibitor immediately','Stop the statin','Order CK and muscle biopsy'],'Reinforce adherence and evaluate for secondary causes before escalating.')]),

c('Long-term follow-up once stable',
'<ul><li>If no adjustments are needed: <strong>monitor adherence to lifestyle and drug therapy every 3&ndash;12 months</strong> once adherence is established.</li><li>Continue assessing adherence for optimal ASCVD risk reduction and safety.</li><li><strong>Continue to monitor for the development of secondary causes</strong>.</li></ul>',
['long-term-monitoring'],
[q('Once adherence is established and no changes are needed, how often should adherence be monitored?','Every 3&ndash;12 months',['Every week','Every 5 years','Never'],'Regularly monitor adherence every 3 to 12 months after adherence has been established.')],
[q('A patient has been stable on a statin with at-goal response for a year. What ongoing follow-up fits the lecture?','Check adherence every 3&ndash;12 months and watch for new secondary causes',['Stop follow-up','Repeat CAC every 3 months','Weekly CK levels'],'Monitor adherence every 3-12 months and continue to monitor for secondary causes.')])
])

];
})();
