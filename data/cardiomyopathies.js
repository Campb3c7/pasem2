/* Wireman, Cardiomyopathies. Eight general "Cardiomyopathy Objectives" in the supplied order (sections 1-8), then one
   section per AHA-classified cardiomyopathy; HCM is split into four sections (9a-9d). Picture-only slides were rendered:
   slide 23 (HCM cardinal features incl. systolic anterior motion of the mitral valve) and slide 64 (RCM classification,
   idiopathic ~50%) are folded into the matching cards. Items marked "Clarification" come from a standard reference. */
(function(){
"use strict";
/* Prompts, choices, explanations, and titles are rendered as escaped text, so decode the few entities used there. */
var ENT={"&ndash;":"–","&mdash;":"—","&rsquo;":"’","&rarr;":"→","&ge;":"≥","&le;":"≤","&uarr;":"↑","&darr;":"↓","&ldquo;":"“","&rdquo;":"”","&plusmn;":"±"};
function d(x){return String(x).replace(/&[a-zA-Z]+;/g,function(m){return ENT[m]||m;});}
function q(p,a,w,e){return {prompt:d(p),choices:[a].concat(w).map(d),correct:0,explanation:d(e)};}
function c(t,h,v,tests,applies){return {title:t,html:h,coverage:v,test:tests,apply:applies};}
function s(id,t,desc,units){var r={id:id,title:d(t),description:d(desc),cards:[],test:[],apply:[]};units.forEach(function(x,i){r.cards.push({title:d(x.title),html:x.html,coverage:x.coverage});['test','apply'].forEach(function(m){x[m].forEach(function(z){z.card=i;r[m].push(z);});});});return r;}
function hy(x){return '<div class="box-hy"><span class="lbl">High yield</span>'+x+'</div>';}
function mn(x){return '<div class="box-mnemonic"><span class="lbl">Mnemonic</span>'+x+'</div>';}
function tbl(head,rows){return '<table class="learn-table"><tr>'+head.map(function(h){return '<th>'+h+'</th>';}).join('')+'</tr>'+rows.map(function(r){return '<tr>'+r.map(function(x){return '<td>'+x+'</td>';}).join('')+'</tr>';}).join('')+'</table>';}
function ul(items){return '<ul>'+items.map(function(i){return '<li>'+i+'</li>';}).join('')+'</ul>';}

window.CARDIOMYOPATHY_OBJECTIVES=[

/* ---------------- 1 ---------------- */
s('01-definition','1. Cardiomyopathy vs heart muscle damage from other diseases','Objective 1. Slides 3&ndash;8.',[
c('What a cardiomyopathy is (and isn&rsquo;t)',
'<p><strong>Cardio</strong> = heart, <strong>myo</strong> = muscle, <strong>pathy</strong> = disease.</p>'+
tbl(['','Old definition','Current definition'],[
['Included','<strong>All</strong> causes of heart muscle damage, including known CV causes: <strong>HTN, CAD, congenital heart disease (CHD), valve disease</strong>','Myocardium is <strong>structurally and functionally abnormal</strong> in the <strong>absence of known cardiovascular causes</strong> sufficient to explain the abnormality'],
['Basis','Phenotype; many labeled &ldquo;idiopathic&rdquo;','Shifting toward <strong>genetic association</strong>; most CMs now known to have a genetic basis']])+
'<p>CM results from changes in the <strong>shape, size, or thickness</strong> of the myocardium, which can impair <strong>contraction and electrical conduction</strong>; the pattern depends on the phenotype.</p>'+
hy('Heart muscle damage <strong>secondary to</strong> HTN, CAD, valve disease, or congenital heart disease is <strong>not</strong> a cardiomyopathy.'),
['current-definition','old-definition','sequela-damage'],
[q('Under the current definition, a cardiomyopathy is a structurally and functionally abnormal myocardium that occurs:','In the absence of known cardiovascular causes sufficient to explain it',['Only as a result of coronary artery disease','Only after long-standing hypertension','As a sequela of valvular heart disease'],'Current definition: abnormal myocardium WITHOUT a known CV cause (HTN, CAD, CHD, valve disease) sufficient to explain it.'),
q('Which group of conditions was included in older cardiomyopathy definitions but is now excluded?','HTN, CAD, congenital heart disease, and valve disease',['Sarcomere and desmosome gene mutations','Viral and autoimmune myocarditis','Peripartum and stress-induced myocardial dysfunction'],'In the past all causes of heart muscle damage were included, notably HTN, CAD, CHD and valve disease; these are now excluded.')],
[q('A patient has LV wall thickening clearly explained by 20 years of poorly controlled hypertension. How should this be classified?','Heart muscle damage secondary to HTN, not a cardiomyopathy',['Hypertrophic cardiomyopathy','Restrictive cardiomyopathy','Hypertensive cardiomyopathy as an AHA genetic subtype'],'Damage explained by a known CV cause (HTN) is a sequela, described generically as LVH, not a cardiomyopathy.')]),
c('Why &ldquo;ischemic&rdquo; and &ldquo;valvular&rdquo; cardiomyopathy are no longer used',
tbl(['Old-fashioned term','Meant','Why dropped'],[
['<strong>Ischemic cardiomyopathy</strong>','Heart muscle damage from <strong>vessel disease (CAD)</strong>','Damage has a known CV cause &rarr; it is a sequela of CAD'],
['<strong>Valvular cardiomyopathy</strong>','Heart muscle damage from <strong>abnormal valves</strong>','Damage has a known CV cause &rarr; it is a sequela of valve disease']])+
'<p>Such sequelae may instead be described with the generic term <strong>left ventricular hypertrophy (LVH)</strong>; they are covered in separate lectures (CAD, valve disease, HTN, congenital heart disease).</p>',
['ischemic-term','valvular-term','lvh-generic-term'],
[q('&ldquo;Ischemic cardiomyopathy&rdquo; is an old-fashioned term describing heart muscle damage caused by:','Coronary artery disease',['Abnormal heart valves','Sarcomere gene mutations','Viral infection'],'Ischemic CM = damage from vessel disease (CAD); it is no longer classified as a cardiomyopathy.'),
q('Why is &ldquo;valvular cardiomyopathy&rdquo; no longer used as a cardiomyopathy category?','The damage has a known cardiovascular cause (abnormal valves), so it is a sequela, not a cardiomyopathy',['Valve disease never damages the myocardium','It was renamed restrictive cardiomyopathy','It is now classified as a genetic cardiomyopathy'],'CM now requires absence of a known CV cause; valve-related damage is a sequela of valve disease.'),
q('When HTN or valve disease damages the heart muscle, what generic term may describe the result?','Left ventricular hypertrophy',['Hypertrophic cardiomyopathy','Arrhythmogenic cardiomyopathy','Restrictive cardiomyopathy'],'These sequelae may cause the generic finding of LVH rather than being labeled a cardiomyopathy.')],
[q('A chart note reads &ldquo;ischemic cardiomyopathy&rdquo; for a patient whose LV dysfunction followed two prior MIs. Under the current definition, the best description is:','Myocardial damage as a sequela of CAD, not a true cardiomyopathy',['Dilated cardiomyopathy of genetic origin','Tako-tsubo cardiomyopathy','Arrhythmogenic right ventricular cardiomyopathy'],'Ischemic CM is an outdated term; damage from CAD has a known CV cause and is excluded from the current CM definition.')])
]),

/* ---------------- 2 ---------------- */
s('02-symptoms-exam-pathways','2. Common symptoms, exam findings, and final common pathways','Objective 2. Slides 8&ndash;9.',[
c('Common symptoms',
'<p>The spectrum is wide: <strong>asymptomatic</strong> &rarr; <strong>severe heart failure</strong> &rarr; <strong>sudden death</strong>.</p>'+
'<p>If symptomatic, patients generally present with:</p>'+ul(['<strong>Chest pain</strong>','<strong>Exertional intolerance</strong>','<strong>Shortness of breath (SOB)</strong>','<strong>Palpitations</strong>']),
['symptom-spectrum','common-symptoms'],
[q('Which set lists the common presenting symptoms of a symptomatic cardiomyopathy?','Chest pain, exertional intolerance, SOB, palpitations',['Fever, rash, arthralgia, weight loss','Headache, polyuria, polydipsia, blurred vision','Claudication, cool extremities, hair loss, ulcers'],'Symptomatic CM generally presents with chest pain, exertional intolerance, SOB and palpitations.'),
q('The symptom spectrum of cardiomyopathy ranges from:','Asymptomatic to severe heart failure or sudden death',['Always symptomatic at birth','Mild fatigue only, never fatal','Isolated chest pain without heart failure'],'CM ranges from no symptoms to severe HF or sudden death.')],
[q('A 34-year-old reports 3 months of palpitations, chest pain, and becoming short of breath sooner than usual while jogging. Which diagnosis category should be on the differential?','Cardiomyopathy',['Peripheral arterial disease','Diabetes insipidus','Migraine'],'Chest pain, exertional intolerance, SOB and palpitations are the common CM symptoms.')]),
c('Physical exam findings',
'<p>The PE is <strong>normal in many cases</strong>, but may show:</p>'+
tbl(['Finding','Points to'],[
['Gallop rhythm (S3 or S4)','Abnormal ventricular filling'],
['AV valve regurgitation murmur (mitral/tricuspid)','Ventricular dilation or distortion'],
['Displaced PMI, cardiac lift/heave','Enlarged or hypertrophied heart'],
['Rales (crackles)','Pulmonary congestion (left-sided HF)'],
['JVD, peripheral edema, ascites','Volume overload (right-sided HF)']]),
['pe-normal-often','gallop','av-regurgitation','displaced-pmi-heave','rales','jvd-edema-ascites'],
[q('Which exam finding is listed among the possible PE findings in cardiomyopathy?','Displaced PMI',['Pulsus paradoxus with Kussmaul sign as the defining finding','Splinter hemorrhages','Absent dorsalis pedis pulse'],'Possible findings: gallop, AV valve regurgitation, displaced PMI, lift/heave, rales, JVD, peripheral edema, ascites.'),
q('What is the most accurate statement about the physical exam in cardiomyopathy?','It is normal in many cases',['It is always abnormal and diagnostic','It always reveals a pericardial friction rub','It always shows a fixed split S2'],'The PE is normal in many cases; abnormalities are supportive, not diagnostic.')],
[q('A patient with suspected cardiomyopathy has bibasilar crackles, JVD, and a laterally displaced PMI. These findings are best explained by:','Heart failure from the cardiomyopathy',['Acute pericarditis','Pneumothorax','Aortic dissection'],'Rales, JVD and displaced PMI are the HF-type findings that can accompany CM.')]),
c('Final common pathways',
'<p>Whatever the cause, the various CM types usually end in the same three outcomes:</p>'+
hy('<strong>Heart failure &rarr; arrhythmias &rarr; death</strong>'),
['final-common-pathways'],
[q('What are the final common pathways of the various cardiomyopathy types?','Heart failure, arrhythmias, and death',['Pericarditis, tamponade, and death','Hypertension, stroke, and renal failure','Endocarditis, emboli, and valve rupture'],'All CM etiologies usually result in HF, arrhythmias, and death.')],
[q('A student asks why genetically different cardiomyopathies are managed with similar tools (HF drugs, antiarrhythmic devices). Best explanation?','They share final common pathways of heart failure, arrhythmia, and death',['They all are caused by viral infection','They all respond to valve replacement','They all resolve spontaneously'],'Different etiologies converge on HF, arrhythmias, and death.')])
]),

/* ---------------- 3 ---------------- */
s('03-hf-progression','3. Symptoms as heart failure progresses','Objective 3. Slides 10&ndash;11.',[
c('Early symptoms: exertional intolerance',
'<p>Early symptoms reflect <strong>insufficient cardiac reserve during exercise</strong>:</p>'+ul(['Breathlessness &mdash; <strong>dyspnea on exertion (DOE)</strong>','Fatigue','Dizziness','Syncope','Chest pain'])+
hy('Early symptoms are <strong>vague</strong> and often overlooked or blamed on <strong>aging or deconditioning</strong>.'),
['early-exertional','cardiac-reserve','overlooked-symptoms'],
[q('Early cardiomyopathy symptoms are usually related to exertional intolerance because of:','Insufficient cardiac reserve during exercise',['Fluid overload at rest','Pericardial constriction','Valve calcification'],'Early symptoms come from inadequate cardiac reserve when demand rises with exercise.'),
q('Early cardiomyopathy symptoms are commonly misattributed to:','Aging or deconditioning',['Asthma exacerbation only','Acute appendicitis','Hypothyroidism only'],'Vague early symptoms may be overlooked or attributed to aging or deconditioning.')],
[q('A 58-year-old says he has been &ldquo;out of shape&rdquo; for a year: he gets winded and dizzy climbing stairs but is fine at rest. No orthopnea or edema. Which HF stage of cardiomyopathy does this fit?','Early disease with exertional intolerance',['Advanced disease with elevated filling pressures','Acute decompensation with pulmonary edema','No cardiac disease; deconditioning is confirmed'],'DOE, dizziness and fatigue with exertion only = early symptoms of insufficient cardiac reserve; do not dismiss as deconditioning.')]),
c('Later symptoms: fluid retention and high filling pressures',
'<p>Usually over time (rapidly in acute HF), <strong>fluid retention &rarr; increased filling pressures</strong> worsens symptoms:</p>'+
tbl(['Symptom/sign','Description'],[
['Dyspnea with routine activity','SOB no longer limited to exertion'],
['Wet cough, frothy sputum','Pulmonary edema'],
['<strong>Orthopnea</strong>','Dyspnea lying flat; quantified by # of pillows needed'],
['<strong>PND</strong>','SOB or coughing attack that wakes the patient at night'],
['Peripheral edema, ascites, abdominal discomfort','Systemic venous congestion'],
['&uarr; JVP','Elevated right-sided filling pressure']]),
['fluid-retention','routine-dyspnea','frothy-sputum','orthopnea','pnd','edema-ascites','increased-jvp'],
[q('Orthopnea is best defined as:','Dyspnea when lying down, often quantified by the number of pillows needed',['Sudden SOB that wakes the patient at night','Dyspnea only with heavy exertion','Chest pain relieved by leaning forward'],'Orthopnea = dyspnea lying flat; ask how many pillows are needed.'),
q('Paroxysmal nocturnal dyspnea (PND) is:','An episode of SOB or coughing that wakes the patient at night',['Dyspnea that occurs only when standing','Breathlessness relieved by lying flat','Wheezing triggered by cold air'],'PND = SOB/coughing attack waking the patient from sleep.'),
q('As cardiomyopathy progresses, what mechanism worsens symptoms beyond exertional intolerance?','Fluid retention raising cardiac filling pressures',['Loss of the SA node','Pericardial calcification','Coronary vasospasm'],'Fluid retention increases filling pressures, causing congestive symptoms.')],
[q('A patient with known cardiomyopathy now sleeps on three pillows, wakes at night coughing, and has a wet cough with frothy sputum and ankle edema. This indicates:','Progression with fluid retention and increased filling pressures',['Early exertional intolerance only','Resolution of heart failure','An isolated respiratory infection'],'Orthopnea, PND, frothy sputum and edema = congestive symptoms of progressive HF.'),
q('In a patient with progressing cardiomyopathy, which bedside finding reflects elevated right-sided filling pressure?','Increased JVP',['Fixed split S2','Diminished femoral pulses','Clubbing'],'Increased JVP, edema and ascites reflect elevated filling pressures/volume overload.')])
]),

/* ---------------- 4 ---------------- */
s('04-thromboembolism-scd','4. Thromboembolism risk and the arrhythmia of sudden death','Objective 4. Slides 12, 16.',[
c('Arrhythmias and sudden cardiac death',
'<p>Both <strong>atrial and ventricular tachyarrhythmias</strong> occur.</p>'+
hy('Sudden death is typically due to <strong>sustained ventricular tachycardia (VT)</strong> &rarr; <strong>ventricular fibrillation (VF)</strong> &rarr; <strong>asystole</strong>.'),
['tachyarrhythmias','sustained-vt','vt-vf-asystole'],
[q('Sudden death in cardiomyopathy is typically due to which arrhythmia?','Sustained ventricular tachycardia',['Sinus bradycardia','First-degree AV block','Atrial flutter with 4:1 block'],'Sudden death typically starts as sustained VT.'),
q('What is the usual electrical sequence in cardiomyopathy-related sudden death?','Sustained VT &rarr; VF &rarr; asystole',['Sinus tachycardia &rarr; atrial flutter &rarr; AF','First-degree block &rarr; Wenckebach &rarr; sinus rhythm','PACs &rarr; SVT &rarr; sinus rhythm'],'VT degenerates to VF and then asystole.')],
[q('A 25-year-old with a known cardiomyopathy collapses at the gym. Monitor shows a wide-complex regular tachycardia that soon becomes chaotic. Which arrhythmia began this sequence?','Sustained ventricular tachycardia',['Atrial fibrillation','Sinus arrhythmia','Junctional rhythm'],'SCD in CM typically begins with sustained VT that progresses to VF and asystole.')]),
c('Increased thromboembolism risk',
'<p>Many CM patients have an <strong>increased risk of thromboembolism</strong> (e.g., with atrial fibrillation, mural thrombus, dilated poorly contracting chambers).</p>'+
'<p>Management goal: <strong>reduce thromboembolism risk with anticoagulants</strong> &mdash; <strong>warfarin or a DOAC</strong>.</p>',
['thromboembolism-risk','anticoagulation'],
[q('Many cardiomyopathy patients have an increased risk of:','Thromboembolism',['Hypoglycemia','Hyperkalemia','Pericardial tamponade'],'The lecture highlights increased thromboembolism risk in many CM patients.'),
q('Which medications are used to reduce thromboembolism risk in cardiomyopathy?','Anticoagulants such as warfarin or a DOAC',['Beta-blockers such as metoprolol','Loop diuretics such as furosemide','Nitrates such as nitroglycerin'],'Anticoagulants (warfarin or DOAC) reduce thromboembolism risk.')],
[q('A patient with dilated cardiomyopathy develops atrial fibrillation. Which complication is the main reason to start oral anticoagulation?','Thromboembolism (e.g., stroke)',['Sudden VT','Hyperkalemia','Pericarditis'],'CM plus AF increases clot/embolic risk; anticoagulate with warfarin or a DOAC.')])
]),

/* ---------------- 5 ---------------- */
s('05-workup','5. Workup of cardiomyopathies and test selection','Objective 5. Slides 13&ndash;15.',[
c('Labs',
tbl(['Lab','Role'],[
['<strong>BNP</strong>','Helpful in the setting of <strong>heart failure</strong>'],
['<strong>Troponins</strong>','May help in <strong>acute</strong> settings'],
['Other labs','As indicated to <strong>rule out other etiologies</strong>']]),
['bnp','troponin','rule-out-labs'],
[q('Which lab is most helpful in a cardiomyopathy patient with heart failure?','BNP',['Troponin','Lipase','TSH alone'],'BNP is helpful in the setting of HF; troponins help in acute settings.'),
q('In the cardiomyopathy workup, troponins are mainly helpful:','In acute settings',['To diagnose chronic restrictive disease','To grade heart failure severity','To identify fibro-fatty infiltration'],'Troponins may be helpful in acute settings.')],
[q('A patient with suspected cardiomyopathy presents with worsening dyspnea and edema. Which blood test best supports a heart-failure picture?','BNP',['Lipase','Hemoglobin A1c','Serum calcium'],'BNP is the lab helpful in the setting of heart failure.')]),
c('EKG/Holter and chest x-ray',
tbl(['Test','What it shows','Limit'],[
['<strong>EKG / Holter</strong>','Electrical activity; atrial and ventricular tachyarrhythmias are common','Gives <strong>clues</strong> but does <strong>not diagnose</strong> CM'],
['<strong>CXR</strong>','Enlarged cardiac silhouette (cardiomegaly); fluffy infiltrates/<strong>Kerley lines</strong> if CHF','Suggestive, <strong>not specific</strong>; normal in many early cases']])+
hy('<strong>Incidental cardiomegaly on CXR</strong> should prompt a cardiology evaluation with <strong>echo and EKG</strong>.'),
['ekg-holter','cxr','incidental-cardiomegaly'],
[q('What is the role of the EKG/Holter monitor in cardiomyopathy?','Provides clues about electrical activity but does not diagnose cardiomyopathy',['Confirms the diagnosis of cardiomyopathy','Measures LV wall thickness','Identifies amyloid infiltration'],'EKG/Holter assess electrical activity and arrhythmias; they suggest but do not diagnose CM.'),
q('Which CXR finding suggests congestive heart failure in cardiomyopathy?','Fluffy infiltrates (Kerley lines)',['Hilar lymphadenopathy only','Apical cavitation','Tracheal deviation'],'Kerley lines/fluffy infiltrates suggest CHF; cardiomegaly suggests enlargement.')],
[q('A chest x-ray done for a cough incidentally shows an enlarged cardiac silhouette in an asymptomatic patient. Best next step?','Cardiology evaluation with echo and EKG',['No follow-up because CXR is not specific','Endomyocardial biopsy','Repeat chest x-ray in 5 years'],'Incidental cardiomegaly should prompt cardiac evaluation with echo and EKG.')]),
c('Echocardiogram: the test of choice',
'<p><strong>Echo</strong> is the <strong>test of choice to diagnose cardiomyopathy</strong>. It defines both <strong>anatomic and functional</strong> characteristics with <strong>high sensitivity and specificity</strong> for myocardial dysfunction.</p>'+
hy('Suspect CM &rarr; <strong>order an echo</strong>.'),
['echo-test-of-choice'],
[q('What is the test of choice to diagnose cardiomyopathy?','Echocardiogram',['Cardiac MRI','Endomyocardial biopsy','Chest x-ray'],'Echo defines anatomy and function with high sensitivity/specificity and is the test of choice.')],
[q('A 40-year-old has exertional dyspnea, an S3, and an EKG with LBBB. Which test should be ordered first to diagnose a cardiomyopathy?','Transthoracic echocardiogram',['Cardiac MRI','Endomyocardial biopsy','Coronary CT calcium score'],'Echo is the first-line diagnostic test; CMR follows once CM is confirmed.')]),
c('Cardiac MRI (CMR)',
'<p>Used as an <strong>additional study after CM is confirmed on echo</strong>:</p>'+
ul(['Better definition of anatomy and evaluation of the <strong>right ventricle</strong>','Identifies/localizes <strong>fat, iron, or amyloid infiltration</strong>, <strong>inflammation</strong>, <strong>fibrosis (scar)</strong>, focal hypertrophy, aneurysm']),
['cmr-follow-up','cmr-tissue-characterization','cmr-right-ventricle'],
[q('When is cardiac MRI used in the cardiomyopathy workup?','As an additional study after cardiomyopathy is confirmed on echo',['As the initial screening test','Only when echo is normal and symptoms resolve','Only to measure BNP'],'CMR follows echo confirmation to refine anatomy and tissue characterization.'),
q('Which can cardiac MRI identify that echo cannot reliably characterize?','Fat, iron, or amyloid infiltration and fibrosis',['Serum BNP levels','Heart rate variability over 24 hours','Coronary artery calcium only'],'CMR localizes fat, iron, amyloid, inflammation, fibrosis, focal hypertrophy and aneurysm.')],
[q('Echo confirms a cardiomyopathy, and the team now needs to know whether the myocardium contains fibrosis or infiltration and to better evaluate the right ventricle. Best next test?','Cardiac MRI',['Repeat transthoracic echo','Exercise stress test','Holter monitor'],'CMR best characterizes tissue (fat, iron, amyloid, scar) and the RV.')]),
c('Cardiac biopsy and stress testing',
tbl(['Test','Role'],[
['<strong>Cardiac (endomyocardial) biopsy</strong>','Rarely needed; <strong>definitive tissue diagnosis</strong> in subtypes (e.g., <strong>infiltrative disease</strong>) when etiology is <strong>equivocal</strong>'],
['<strong>Cardiac stress test</strong>','Typically done at some point; characterizes the patient&rsquo;s <strong>exercise tolerance</strong>']]),
['biopsy','stress-test'],
[q('When is a cardiac biopsy used in cardiomyopathy?','Rarely, to give a definitive tissue diagnosis (e.g., infiltrative disease) when the etiology is equivocal',['Routinely as the first test','To measure ejection fraction','To screen first-degree relatives'],'Biopsy is rarely needed; reserved for definitive tissue diagnosis when etiology is unclear.'),
q('What is the main purpose of stress testing during a cardiomyopathy evaluation?','Characterize the patient&rsquo;s exercise tolerance',['Confirm infiltrative disease','Measure LV wall thickness to the millimeter','Identify the genetic mutation'],'Stress testing helps characterize exercise tolerance.')],
[q('Echo and cardiac MRI suggest an infiltrative cardiomyopathy, but the MRI pattern is equivocal. Which test gives a definitive tissue diagnosis?','Endomyocardial biopsy',['Holter monitor','Exercise stress test','BNP'],'Biopsy provides definitive tissue pathology when imaging is equivocal.')])
]),

/* ---------------- 6 ---------------- */
s('06-management-goals','6. Management goals of cardiomyopathies','Objective 6. Slide 16.',[
c('Goals and medications',
'<p>Generally there is <strong>no cure</strong> (some exceptions). Goals: <strong>reduce morbidity and prevent mortality</strong>.</p>'+
tbl(['Goal','Tool','Example'],[
['Heart rate control','Beta-blocker','<strong>Metoprolol</strong>'],
['Reduce thromboembolism risk','Anticoagulant','<strong>Warfarin or DOAC</strong>'],
['Reduce fluid retention*','Diuretic','<strong>Furosemide (Lasix)</strong>']])+
'<p>*Diuretics are <strong>avoided in HCM with LVOT obstruction</strong> (see 9c).</p>',
['no-cure','morbidity-mortality','rate-control-bb','anticoagulant','diuretic'],
[q('What are the overall management goals for cardiomyopathies?','Reduce morbidity and prevent mortality',['Cure the disease in most patients','Eliminate the need for follow-up','Reverse all genetic mutations'],'There is generally no cure; goals are to reduce morbidity and prevent mortality.'),
q('Which drug class is used for heart rate control in cardiomyopathy?','Beta-blockers (e.g., metoprolol)',['Loop diuretics (e.g., furosemide)','Anticoagulants (e.g., warfarin)','Dihydropyridine CCBs (e.g., amlodipine)'],'Beta-blockers such as metoprolol control heart rate.'),
q('Which drug is the lecture&rsquo;s example for reducing fluid retention in cardiomyopathy?','Furosemide',['Metoprolol','Warfarin','Diazepam'],'Diuretics such as furosemide (Lasix) reduce fluid retention.')],
[q('A patient with cardiomyopathy has peripheral edema and pulmonary congestion. Which management goal and drug fit best?','Reduce fluid retention with a diuretic such as furosemide',['Rate control with digoxin only','Thromboembolism prevention with a DOAC only','Rhythm control with a pacemaker'],'Diuretics reduce fluid retention (except avoided in obstructive HCM).'),
q('A cardiomyopathy patient asks whether any medication will cure the condition. Best answer?','Generally no; treatment aims to reduce morbidity and prevent mortality',['Yes, beta-blockers cure most cardiomyopathies','Yes, a 6-week antibiotic course is curative','Yes, anticoagulants reverse the myocardial changes'],'Generally no cure; management reduces morbidity and mortality.')]),
c('Devices and surgery',
tbl(['Goal','Tool'],[
['Rhythm control','<strong>Implantable pacemaker</strong>'],
['Rhythm control <strong>and shock</strong>','<strong>Implantable cardioverter defibrillator (ICD)</strong>'],
['Select cases','<strong>Surgical excision</strong> of myocardial areas or <strong>heart transplant</strong>']]),
['pacemaker','icd','surgery-transplant'],
[q('Which device provides both rhythm control and the ability to shock a lethal arrhythmia?','Implantable cardioverter defibrillator (ICD)',['Implantable pacemaker','Holter monitor','Intra-aortic balloon pump'],'ICDs provide rhythm control and shock; pacemakers provide rhythm control only.'),
q('In select cardiomyopathy cases, which interventions may be performed beyond medications and devices?','Surgical excision of myocardial areas or heart transplant',['Valve replacement in all cases','Pericardiectomy in all cases','Coronary bypass grafting in all cases'],'Select cases may need surgical excision of myocardium or transplant.')],
[q('A cardiomyopathy patient survived an episode of sustained VT. Which device best addresses the risk of recurrence?','ICD',['Pacemaker alone','Loop recorder','Holter monitor'],'An ICD can detect and shock VT/VF.')])
]),

/* ---------------- 7 ---------------- */
s('07-genetics-family','7. Genetics and recommendations for family members','Objective 7. Slides 5, 17&ndash;18.',[
c('Genetic basis and the AHA classification',
'<p>CMs were once considered idiopathic; genetics and imaging now show <strong>most cardiomyopathies have a genetic basis</strong>. Classification is shifting toward <strong>genetic association</strong> rather than phenotype.</p>'+
tbl(['AHA group','Cardiomyopathies'],[
['<strong>Genetic</strong>','Hypertrophic (HCM); Arrhythmogenic right ventricular (ARVC/D)'],
['<strong>Mixed</strong> (genetic + acquired)','Dilated (DCM); Restrictive (RCM)'],
['<strong>Acquired</strong>','Myocarditis; Peripartum (PPCM); Stress-related Tako-tsubo']]),
['genetic-basis','aha-genetic','aha-mixed','aha-acquired'],
[q('Which two cardiomyopathies are in the AHA &ldquo;genetic&rdquo; group?','HCM and ARVC',['DCM and RCM','Myocarditis and PPCM','DCM and Tako-tsubo'],'Genetic: HCM, ARVC. Mixed: DCM, RCM. Acquired: myocarditis, PPCM, Tako-tsubo.'),
q('In the AHA classification, dilated and restrictive cardiomyopathy are:','Mixed (genetic and acquired)',['Purely genetic','Purely acquired','Not cardiomyopathies'],'DCM and RCM are mixed.'),
q('Which cardiomyopathy is in the AHA &ldquo;acquired&rdquo; group?','Peripartum cardiomyopathy',['Hypertrophic cardiomyopathy','Arrhythmogenic right ventricular cardiomyopathy','Restrictive cardiomyopathy'],'Acquired: myocarditis, PPCM, Tako-tsubo.')],
[q('A student says cardiomyopathies are mostly idiopathic, so family history is irrelevant. Best correction?','Most cardiomyopathies are now known to have a genetic basis',['Only acquired cardiomyopathies run in families','Genetics only matter for myocarditis','Family history matters only after age 70'],'Modern genetics shows most CMs have a genetic basis, so family evaluation matters.')]),
c('Recommendations for family members',
'<p>For families of a patient with <strong>confirmed CM</strong>:</p>'+
ul(['Detailed family history for <strong>at least 3 generations</strong>','<strong>Clinical screening of first-degree relatives</strong>: <strong>H&amp;P, EKG, and echo</strong>','<strong>Genetic testing</strong> of family members if the <strong>index case has a known genetic mutation</strong>'])+
hy('Screen first-degree relatives with <strong>H&amp;P + EKG + echo</strong>; gene-test them only when the index patient&rsquo;s mutation is known.'),
['three-generation-fhx','first-degree-screening','genetic-testing-family'],
[q('How many generations should a family history cover for a patient with confirmed cardiomyopathy?','At least 3 generations',['1 generation','2 generations','Only living siblings'],'A detailed FHx for at least 3 generations is recommended.'),
q('Clinical screening of first-degree relatives of a cardiomyopathy patient consists of:','H&P, EKG, and echo',['BNP and troponin only','Cardiac MRI and biopsy','Chest x-ray only'],'First-degree relatives get H&P, EKG and echo.'),
q('When should genetic testing of family members be considered?','When the index case has a known genetic mutation',['Always before any clinical screening','Never; genetic testing is not used','Only if the relative is over 65'],'Genetic testing of relatives is considered if the index case has a known mutation.')],
[q('A patient is diagnosed with a cardiomyopathy; no mutation was identified on his genetic panel. His 19-year-old sister asks what she should do. Best advice?','Clinical screening with H&P, EKG, and echo',['Targeted genetic testing for his mutation','No evaluation unless she develops symptoms','Cardiac biopsy'],'First-degree relatives get H&P, EKG and echo; genetic testing is considered only if the index mutation is known.')])
]),

/* ---------------- 8 ---------------- */
s('08-echo-correlation','8. Correlating echo findings with cardiomyopathy type','Objective 8. Slides 30, 35, 49, 57, 66, 75, 79, 88.',[
c('Echo patterns: HCM, DCM, RCM, ARVC',
tbl(['Type','Key echo findings'],[
['<strong>HCM</strong>','LV wall <strong>&ge; 15 mm</strong>, usually <strong>asymmetric</strong> (septum/anterolateral); &plusmn; LVOT obstruction; diastolic dysfunction'],
['<strong>DCM</strong>','<strong>Dilated LV cavity</strong>, normal or <strong>decreased</strong> wall thickness, reduced inward systolic motion, <strong>EF &le; 40%</strong>; &plusmn; enlarged atria/RV'],
['<strong>RCM</strong>','<strong>Non-dilated, non-hypertrophied</strong> ventricles, <strong>bi-atrial enlargement</strong>, <strong>preserved systolic</strong> but abnormal diastolic function'],
['<strong>ARVC</strong>','<strong>Enlarged/dilated RV</strong> with RV wall motion abnormalities &plusmn; fatty tissue in RV wall; <strong>LV normal</strong> until late']])+
hy('Thick LV &rarr; HCM. Big, weak LV &rarr; DCM. Small stiff ventricles + big atria &rarr; RCM. Big abnormal RV &rarr; ARVC.'),
['echo-hcm','echo-dcm','echo-rcm','echo-arvc'],
[q('Which echo pattern is characteristic of restrictive cardiomyopathy?','Non-dilated, non-hypertrophied ventricles with bi-atrial enlargement and preserved systolic function',['Dilated LV with EF &le; 40%','Asymmetric septal thickness &ge; 15 mm','Dilated RV with fatty infiltration and normal LV'],'RCM: normal-sized, non-thick, stiff ventricles; big atria; preserved EF.'),
q('A dilated LV cavity with normal or decreased wall thickness and EF &le; 40% fits:','Dilated cardiomyopathy',['Hypertrophic cardiomyopathy','Restrictive cardiomyopathy','Athlete&rsquo;s heart'],'DCM = dilated LV, thin/normal walls, EF &le; 40%.'),
q('An echo showing a dilated RV with wall motion abnormalities and a normal LV suggests:','Arrhythmogenic right ventricular cardiomyopathy',['Dilated cardiomyopathy','Hypertrophic cardiomyopathy','Tako-tsubo cardiomyopathy'],'ARVC affects the RV first; the LV is normal until later stages.')],
[q('Echo shows asymmetric septal thickness of 19 mm with a normal-sized LV cavity and no hypertension or aortic stenosis. Most likely cardiomyopathy?','Hypertrophic cardiomyopathy',['Dilated cardiomyopathy','Restrictive cardiomyopathy','Arrhythmogenic right ventricular cardiomyopathy'],'LV wall &ge; 15 mm, asymmetric, without another cause = HCM.'),
q('A patient with right and left HF has an echo showing normal-sized ventricles with normal wall thickness, markedly enlarged both atria, and EF 60%. Most likely type?','Restrictive cardiomyopathy',['Dilated cardiomyopathy','Hypertrophic cardiomyopathy','Peripartum cardiomyopathy'],'Bi-atrial enlargement with non-dilated, non-hypertrophied ventricles and preserved EF = RCM.')]),
c('Echo patterns: acquired types and look-alikes',
tbl(['Condition','Echo/imaging clue'],[
['<strong>Myocarditis</strong>','LV dysfunction common, but can <strong>mimic HCM, DCM, RCM, or ARVC</strong>'],
['<strong>Peripartum CM</strong>','LV systolic dysfunction, <strong>EF &le; 45%</strong>; LV <strong>frequently dilated</strong> (looks like DCM)'],
['<strong>Tako-tsubo</strong>','Transient <strong>apical ballooning</strong>: impaired apical contraction with a hypercontractile base'],
['<strong>Athlete&rsquo;s heart</strong> (not a CM)','<strong>Symmetric</strong> LV wall thickening, usually <strong>13&ndash;15 mm</strong>']]),
['echo-myocarditis','echo-ppcm','echo-takotsubo','echo-athlete'],
[q('Which cardiomyopathy&rsquo;s echo can mimic HCM, DCM, RCM, or ARVC?','Myocarditis',['Tako-tsubo cardiomyopathy','Athlete&rsquo;s heart','Peripartum cardiomyopathy'],'Myocarditis has many echo presentations and can mimic any of the other types.'),
q('Which wall-motion pattern is characteristic of Tako-tsubo cardiomyopathy?','Apical ballooning with a hypercontractile base',['Diffuse RV dilation with fatty infiltration','Concentric LV thickening with normal motion','Isolated dilated atria with normal ventricles'],'Tako-tsubo: impaired apical contractility with hypercontractile LV base.')],
[q('Three weeks after delivery, a woman has dyspnea and orthopnea. Echo shows a dilated LV with EF 35%. Which pattern does this match?','Peripartum cardiomyopathy',['Hypertrophic cardiomyopathy','Restrictive cardiomyopathy','Athlete&rsquo;s heart'],'PPCM: LV systolic dysfunction (EF &le; 45%) with a frequently dilated LV, late pregnancy/early postpartum.'),
q('A marathon runner&rsquo;s echo shows symmetric LV wall thickness of 14 mm. Best interpretation?','Pattern consistent with athlete&rsquo;s heart',['Diagnostic of HCM','Restrictive cardiomyopathy','Dilated cardiomyopathy'],'Symmetric 13&ndash;15 mm thickening in an endurance athlete fits athletic LVH; HCM is &ge; 15 mm and usually asymmetric.')])
]),

/* ---------------- 9a HCM ---------------- */
s('09a-hcm-features','9a. HCM: genetics, characteristics, presentation, EKG','Objective 9 (HCM). Slides 21&ndash;28.',[
c('HCM genetics and inheritance',
'<p>Caused by mutations of the <strong>cardiac sarcomere</strong> or sarcomere-associated proteins (components of the contractile apparatus) &rarr; <strong>LVH</strong>.</p>'+
ul(['<strong>Autosomal dominant</strong>; <strong>60&ndash;70%</strong> of patients have an affected family member','<strong>Age-dependent</strong>: rarely present at birth, usually develops later','<strong>Incomplete penetrance</strong>: varied extent of disease and outcomes']),
['sarcomere-mutation','autosomal-dominant','age-dependent-penetrance'],
[q('HCM is caused by mutations in genes encoding:','Cardiac sarcomere proteins',['Desmosomal proteins','Dystrophin','Transthyretin only'],'HCM = sarcomere (contractile apparatus) mutations; ARVC = desmosomal.'),
q('What is the inheritance pattern of HCM?','Autosomal dominant',['Autosomal recessive','X-linked recessive','Mitochondrial'],'HCM is autosomal dominant; 60&ndash;70% have an affected family member.'),
q('&ldquo;Incomplete penetrance&rdquo; in HCM means:','The extent of disease and outcomes vary among carriers',['All carriers have identical disease','The disease is always present at birth','Only males are affected'],'Incomplete penetrance = varied extent of disease and clinical outcomes.')],
[q('A father has HCM with a known sarcomere mutation. His newborn&rsquo;s echo is normal. The parents ask if the baby is in the clear. Best answer?','No &mdash; HCM is age-dependent and usually develops later, so follow-up is needed',['Yes &mdash; HCM is always visible at birth','Yes &mdash; HCM is X-linked and skips sons','No &mdash; the baby certainly has HCM regardless of testing'],'HCM is autosomal dominant and age-dependent (rarely present at birth).')]),
c('HCM characteristics: diastolic dysfunction and LVOT obstruction',
ul(['<strong>Asymmetric thickening of the LV septum</strong>, especially the <strong>sub-aortic</strong> area','Wall thickness + loss of elasticity impair relaxation &rarr; harder to fill = <strong>diastolic dysfunction</strong>','<strong>2/3 of patients</strong> have <strong>left ventricular outflow tract (LVOT) obstruction</strong>','Slide 23 diagram: systolic outflow obstruction with <strong>systolic anterior motion of the mitral valve</strong>; <strong>low resistance and low blood volume worsen obstruction</strong>'])+
hy('HCM is a disease of <strong>stiff, thick</strong> muscle: problem is <strong>filling (diastole)</strong>, plus dynamic <strong>outflow</strong> obstruction.'),
['asymmetric-septal','diastolic-dysfunction','lvot-obstruction'],
[q('Which ventricular function is primarily impaired by the thick, inelastic walls of HCM?','Diastolic function (relaxation and filling)',['Systolic function with EF &le; 40%','Right ventricular contractility only','Atrial conduction only'],'Thickened inelastic walls impair relaxation and filling = diastolic dysfunction.'),
q('What fraction of HCM patients have LVOT obstruction?','About two-thirds',['About one-tenth','About one-quarter','Essentially all'],'2/3 of HCM patients experience LVOT obstruction.'),
q('Where is HCM thickening classically most prominent?','Asymmetric septal thickening, especially sub-aortic',['Concentric thickening of the RV free wall','The atrial septum only','Uniform thinning of the apex'],'HCM: asymmetric LV septal thickening, especially the sub-aortic area.')],
[q('In an HCM patient, which change would most likely worsen LVOT obstruction?','Low blood volume (e.g., dehydration)',['Increased blood volume','Slower heart rate','Increased afterload'],'Low resistance and low blood volume worsen the dynamic obstruction (slide 23).')]),
c('HCM symptoms and presentation',
'<p>Highly variable: <strong>no symptoms</strong> in one patient, <strong>sudden cardiac death</strong> in another. May be found via <strong>family screening</strong> or workup of suggestive clinical/EKG findings.</p>'+
ul(['<strong>Dyspnea on exertion</strong>','<strong>Exertional chest pain</strong>','<strong>Exertional syncope</strong> (or presyncope)','Palpitations','Advanced HF (orthopnea, PND, edema) as disease progresses'])+
'<p>Mild&ndash;moderate limitation usually progresses slowly with age.</p>',
['hcm-variable','hcm-exertional-symptoms','hcm-advanced-hf'],
[q('Which symptom pattern is most associated with HCM?','Exertional dyspnea, chest pain, and syncope',['Fever, rash, and arthralgias after a viral illness','Pleuritic chest pain relieved by leaning forward','Leg claudication relieved by rest'],'HCM symptoms are exertional: DOE, chest pain, syncope/presyncope, palpitations.'),
q('How is HCM often identified in asymptomatic people?','Familial screening or workup of suggestive clinical/EKG findings',['Routine troponin screening','Chest CT for lung cancer','Lumbar puncture'],'HCM may be identified through family screening or workup of suggestive findings.')],
[q('A 17-year-old basketball player faints during a sprint drill and recovers quickly. He has had exertional chest pain for months. Which cardiomyopathy is most likely?','Hypertrophic cardiomyopathy',['Restrictive cardiomyopathy','Peripartum cardiomyopathy','Tako-tsubo cardiomyopathy'],'Exertional syncope and chest pain in a young athlete = classic HCM.')]),
c('HCM exam: murmur and S4',
'<p>Exam is often <strong>normal</strong>, but may show <strong>S4</strong>, a systolic murmur, or a cardiac lift/heave.</p>'+
tbl(['Finding','Details'],[
['<strong>LVOT obstruction murmur</strong>','<strong>Harsh crescendo-decrescendo systolic</strong> murmur, best at the <strong>apex and LLSB</strong>'],
['Mitral regurgitation murmur','May also occur'],
['<strong>S4</strong> (atrial diastolic gallop, &ldquo;<strong>Tennessee</strong>&rdquo;)','Low-pitched, end of diastole just before S1 (<strong>ta-lub-dub</strong>); apex, <strong>bell</strong>'],
['Augmentation','Auscultate during <strong>Valsalva strain</strong> or <strong>standing from squatting</strong>']])+
'<p><em>Clarification (standard reference):</em> Valsalva and squat-to-stand reduce preload, which <strong>increases the LVOT obstruction murmur</strong> of HCM &mdash; the opposite of most other systolic murmurs.</p>',
['lvot-murmur','s4','mr-murmur','augmentation-maneuvers'],
[q('The characteristic murmur of HCM LVOT obstruction is a:','Harsh crescendo-decrescendo systolic murmur at the apex and LLSB',['Diastolic decrescendo murmur at the LSB','Holosystolic blowing murmur radiating to the axilla only','Continuous machinery murmur at the left infraclavicular area'],'LVOT obstruction: harsh crescendo-decrescendo systolic murmur best at apex and LLSB.'),
q('Which extra heart sound is associated with HCM?','S4 (atrial diastolic gallop)',['S3 (ventricular diastolic gallop)','Opening snap','Pericardial knock'],'S4 &ldquo;Tennessee&rdquo; (ta-lub-dub) from atrial contraction into a stiff ventricle.'),
q('Which bedside maneuvers are used for augmentation when auscultating a suspected HCM patient?','Valsalva strain or standing from squatting',['Squatting from standing or handgrip','Leaning forward at end-expiration','Inspiration with the patient supine'],'Augment with Valsalva or squat-to-stand (both reduce preload).')],
[q('A 22-year-old has a harsh crescendo-decrescendo systolic murmur at the LLSB that gets louder when he stands up from a squat. Most likely diagnosis?','Hypertrophic cardiomyopathy with LVOT obstruction',['Mitral stenosis','Aortic regurgitation','Patent ductus arteriosus'],'A systolic murmur that increases with squat-to-stand suggests dynamic LVOT obstruction (HCM).'),
q('You hear a low-pitched sound just before S1 (ta-lub-dub) at the apex with the bell in a patient with LVH. Which cardiomyopathy is this sound classically linked to?','Hypertrophic cardiomyopathy',['Dilated cardiomyopathy','Myocarditis','Peripartum cardiomyopathy'],'S4 is heard in HCM; S3 is the DCM sound.')]),
c('HCM EKG findings',
'<p>EKG is <strong>typically abnormal</strong> and can suggest HCM, but findings are nonspecific and cannot make a definitive diagnosis.</p>'+
tbl(['Finding','Note'],[
['<strong>LVH</strong> with <strong>abnormal P waves</strong>','Compensatory atrial hypertrophy; LVH + abnormal P waves <strong>strongly suggests HCM</strong>'],
['<strong>Deep, narrow &ldquo;dagger-like&rdquo; Q waves</strong>','Septal hypertrophy'],
['<strong>Giant negative T waves</strong>','Deeply inverted T waves in the <strong>apical variant</strong>'],
['Atrial and ventricular arrhythmias','May be seen']]),
['ekg-lvh-p-waves','dagger-q-waves','giant-negative-t','ekg-arrhythmias'],
[q('Which EKG combination strongly suggests HCM?','LVH with abnormal P waves',['Low QRS voltage with sinus tachycardia','Epsilon waves in V1','Diffuse ST elevation with PR depression'],'LVH plus abnormal P waves (atrial hypertrophy) strongly suggests HCM.'),
q('Deep, narrow &ldquo;dagger-like&rdquo; Q waves are associated with which cardiomyopathy?','Hypertrophic cardiomyopathy',['Restrictive cardiomyopathy','Arrhythmogenic right ventricular cardiomyopathy','Tako-tsubo cardiomyopathy'],'Dagger-like Q waves are an HCM EKG finding.'),
q('&ldquo;Giant negative T waves&rdquo; are seen in which HCM variant?','Apical variant',['Septal obstructive variant only','Right ventricular variant','Dilated end-stage variant'],'The apical variant may cause deeply inverted (giant negative) T waves.')],
[q('A young athlete&rsquo;s preparticipation EKG shows LVH voltage with abnormal P waves and deep narrow Q waves. What is the appropriate interpretation and next step?','Suggestive of HCM; obtain an echocardiogram',['Diagnostic of HCM; no further testing needed','Normal athletic variant; no follow-up','Diagnostic of myocarditis; start NSAIDs'],'HCM EKG findings are suggestive, not diagnostic; all such patients need an echo.')])
]),

/* ---------------- 9b HCM ---------------- */
s('09b-hcm-diagnosis','9b. HCM: echo, CMR, stress test, family screening, athlete&rsquo;s heart','Objective 9 (HCM). Slides 29&ndash;35.',[
c('HCM echo: who gets one and the diagnostic threshold',
'<p><strong>ALL</strong> patients with HCM-type EKG findings or clinical concern need a <strong>transthoracic echo (TTE)</strong> with Doppler: morphology, systolic and diastolic function, LVOT obstruction presence/severity, valve abnormalities.</p>'+
hy('HCM confirmed: <strong>LV wall thickness &ge; 15 mm</strong> on echo in the <strong>absence of another cause</strong>. Usually <strong>asymmetric</strong>, any segment, most often <strong>septum or anterolateral wall</strong>.'),
['echo-all-suspected','wall-thickness-15mm','asymmetric-segments'],
[q('What LV wall thickness on echo confirms HCM (absent another cause)?','&ge; 15 mm',['&ge; 8 mm','&ge; 11 mm','&ge; 25 mm only'],'HCM: any LV wall thickness &ge; 15 mm without another cause.'),
q('Which echo modality is used for the initial HCM evaluation?','Transthoracic echo (TTE) with Doppler',['Transesophageal echo as the routine first test','Stress echo only','M-mode only without Doppler'],'TTE with Doppler evaluates morphology, function, LVOT and valves.'),
q('In HCM, the increased wall thickness most often involves:','The septum or anterolateral wall',['The RV free wall','The atrial appendage','The posterior pericardium'],'Usually asymmetric; most often septum or anterolateral wall.')],
[q('A 30-year-old with exertional chest pain has a septal thickness of 17 mm and posterior wall of 10 mm; BP is normal and there is no aortic stenosis. Interpretation?','Meets echo criteria for HCM',['Normal variant; under 20 mm is normal','Athlete&rsquo;s heart because thickening is asymmetric','Restrictive cardiomyopathy'],'&ge; 15 mm, asymmetric, no other cause = HCM.')]),
c('LVOT obstruction &ge; 50 mmHg',
'<p>An LVOT gradient <strong>&ge; 50 mmHg</strong> is a <strong>strong, independent determinant of progressive HF symptoms and stroke death</strong> in HCM.</p>'+
'<p>LVOT obstruction opens <strong>additional treatment options</strong> (e.g., septal reduction) and creates a list of <strong>medications to avoid</strong>.</p>',
['lvot-50-mmhg','lvot-prognosis'],
[q('What LVOT gradient is a strong, independent determinant of progressive HF and stroke death in HCM?','&ge; 50 mmHg',['&ge; 5 mmHg','&ge; 20 mmHg','&ge; 150 mmHg'],'LVOT obstruction &ge; 50 mmHg predicts progressive HF symptoms and stroke death.')],
[q('An HCM patient&rsquo;s echo shows an LVOT gradient of 70 mmHg. Why does this matter clinically?','It predicts progressive HF and stroke death and changes which drugs to avoid',['It excludes HCM and suggests athlete&rsquo;s heart','It means diuretics are first-line','It means the patient no longer needs follow-up'],'LVOT &ge; 50 mmHg is prognostic and expands treatment options while restricting some drugs.')]),
c('Cardiac MRI in HCM',
'<p>CMR is typically ordered after echo to:</p>'+
ul(['More reliably assess <strong>LV morphology</strong> and <strong>maximal LV wall thickness</strong>','Better define anatomy for patients considering <strong>septal reduction</strong> (alcohol septal ablation or surgical myectomy)']),
['cmr-max-wall-thickness','cmr-septal-reduction-planning'],
[q('Why is cardiac MRI ordered after echo in HCM?','To more reliably assess LV morphology and maximal wall thickness',['To replace the EKG','To measure BNP','To diagnose sarcomere mutations directly'],'CMR more reliably measures LV morphology and maximal wall thickness.')],
[q('An HCM patient with refractory obstructive symptoms is being considered for alcohol septal ablation versus surgical myectomy. Which imaging best defines the anatomy for planning?','Cardiac MRI',['Chest x-ray','Holter monitor','Exercise EKG without imaging'],'CMR better defines anatomy for septal reduction candidates.')]),
c('Exercise stress test in HCM',
'<p>Part of the HCM evaluation; <strong>most have LVOT obstruction after exercise</strong>. Evaluates exercise-related <strong>ischemia or arrhythmias</strong>.</p>'+
tbl(['Abnormal finding','Example'],[
['Symptoms','Angina, dyspnea, palpitations, presyncope'],
['<strong>BP response</strong>','<strong>Failure of BP to rise</strong> appropriately or <strong>exercise-induced hypotension</strong>'],
['Arrhythmias','AF, VT at peak or immediately after exercise'],
['Ischemia','Severe ST depression']]),
['stress-lvot-after-exercise','stress-bp-response','stress-arrhythmia-ischemia'],
[q('Which blood pressure response on exercise testing is abnormal in HCM?','Failure of BP to rise or exercise-induced hypotension',['Gradual rise in systolic BP with exercise','Mild diastolic fall with exercise','Normal return of BP during recovery'],'Failure of BP to increase appropriately or exercise hypotension is abnormal.'),
q('After exercise, most HCM patients demonstrate:','LVOT obstruction',['Resolution of all hypertrophy','A drop in LV wall thickness below 10 mm','Epsilon waves'],'Most HCM patients have LVOT obstruction following exercise.')],
[q('During an exercise test, an HCM patient&rsquo;s systolic BP falls from 130 to 105 mmHg at peak exercise and he has a run of VT in recovery. How should these findings be interpreted?','Abnormal: exercise hypotension and arrhythmia',['Normal physiologic response','Diagnostic of athlete&rsquo;s heart','Diagnostic of Tako-tsubo'],'Exercise-induced hypotension and VT are abnormal stress findings in HCM (and SCD risk markers).')]),
c('HCM family screening',
'<p>Because of the large genetic influence, <strong>all first-degree family members</strong> should be evaluated:</p>'+
ul(['<strong>H&amp;P, ECG, and echo</strong>','If an <strong>HCM-causing mutation is identified in the index case</strong> &rarr; <strong>genetic screening</strong> of family members']),
['hcm-first-degree','hcm-family-tests','hcm-genetic-screening'],
[q('Which relatives of an HCM patient should be evaluated?','All first-degree family members',['Only symptomatic siblings','Only relatives over 50','Only male relatives'],'All first-degree relatives should be evaluated.'),
q('HCM family screening consists of:','H&P, ECG, and echo',['CXR and BNP','Cardiac biopsy','Stress test alone'],'H&P, ECG and echo; plus genetic screening if the index mutation is known.')],
[q('A 45-year-old with HCM has a sarcomere mutation identified. Her two teenage children are asymptomatic. Best recommendation?','Clinical screening (H&P, ECG, echo) plus genetic screening for the identified mutation',['No evaluation until symptoms appear','Echo only after age 40','Empiric beta-blockers without testing'],'Known index mutation &rarr; genetic screening in addition to clinical screening.')]),
c('Athlete&rsquo;s heart vs HCM',
'<p>Other causes of LVH to distinguish from HCM: <strong>HTN, aortic stenosis, cardiac amyloid, athlete&rsquo;s heart</strong>.</p>'+
tbl(['','Athlete&rsquo;s heart (athletic LVH)','HCM'],[
['Nature','<strong>NOT a cardiomyopathy</strong>; physiologic from endurance training','Genetic cardiomyopathy'],
['Wall pattern','<strong>Symmetric</strong>','Usually <strong>asymmetric</strong> (septal)'],
['Thickness','Usually <strong>13&ndash;15 mm</strong>','<strong>&ge; 15 mm</strong>'],
['Arrhythmias','Several <strong>benign</strong> arrhythmias','Atrial/ventricular; SCD risk']]),
['athlete-not-cm','athlete-symmetric','athlete-13-15mm','other-lvh-causes'],
[q('How does athlete&rsquo;s heart differ from HCM on echo?','Symmetric thickening usually 13&ndash;15 mm versus asymmetric thickening &ge; 15 mm',['Asymmetric septal thickening &ge; 20 mm versus symmetric thickening','Dilated RV versus normal RV','Bi-atrial enlargement versus normal atria'],'Athletic LVH is symmetric, 13&ndash;15 mm; HCM is usually asymmetric, &ge; 15 mm.'),
q('Is athlete&rsquo;s heart a cardiomyopathy?','No; it is physiologic LVH from endurance training',['Yes; it is a mixed cardiomyopathy','Yes; it is an early form of HCM','Yes; it is an acquired cardiomyopathy'],'Athletic LVH is NOT a cardiomyopathy.'),
q('Which is listed as an acquired cause of LVH that must be distinguished from HCM?','Aortic stenosis',['Coxsackievirus B','Terbutaline','Doxorubicin'],'HTN, aortic stenosis, cardiac amyloid and athlete&rsquo;s heart can all cause LVH.')],
[q('A 21-year-old collegiate rower has symmetric LV wall thickening of 13 mm on echo and occasional benign ectopy. No symptoms or family history. Most likely explanation?','Athlete&rsquo;s heart',['Hypertrophic cardiomyopathy','Restrictive cardiomyopathy','Arrhythmogenic right ventricular cardiomyopathy'],'Symmetric 13&ndash;15 mm with benign arrhythmias in an endurance athlete = athletic LVH.')])
]),

/* ---------------- 9c HCM ---------------- */
s('09c-hcm-treatment','9c. HCM: treatment of HF, refractory cases, drugs to avoid, AF','Objective 9 (HCM). Slides 36&ndash;40.',[
c('Asymptomatic HCM and activity restriction',
ul(['Asymptomatic HCM: <strong>close clinical observation and follow-up</strong>','<strong>All</strong> HCM patients: counsel on <strong>activity restriction</strong> &mdash; avoid <strong>competitive and strenuous exercise</strong>']),
['asymptomatic-observation','activity-restriction'],
[q('What is the treatment for asymptomatic HCM?','Close clinical observation and follow-up',['Immediate septal myectomy','Routine diuretic therapy','Empiric heart transplant listing'],'Asymptomatic HCM: observe closely and follow up.'),
q('What activity counseling applies to all HCM patients?','Avoid competitive and strenuous exercise',['Increase high-intensity interval training','No restrictions if asymptomatic','Avoid all walking'],'All HCM patients should avoid competitive and strenuous exercise.')],
[q('An asymptomatic 16-year-old is diagnosed with HCM on family screening and wants to keep playing varsity soccer. Best counseling?','Avoid competitive and strenuous exercise; arrange close follow-up',['Continue competitive sports since he has no symptoms','Start furosemide so he can keep playing','Proceed to alcohol septal ablation now'],'All HCM patients are restricted from competitive/strenuous exercise; asymptomatic patients are observed.')]),
c('Initial therapy for HF or angina from LVOT obstruction',
tbl(['Step','Drug','When'],[
['<strong>First-line</strong>','<strong>Beta-blocker</strong> (e.g., <strong>metoprolol</strong>)','HF symptoms or angina due to LVOT obstruction'],
['Alternative','<strong>Nondihydropyridine CCB</strong> (<strong>diltiazem</strong> or <strong>verapamil</strong>)','BB contraindicated (e.g., <strong>asthma</strong>) or not tolerated (e.g., feeling sluggish)'],
['Add-on','BB + nondihydropyridine CCB combination','Further management needed; &uarr; risk of <strong>bradyarrhythmia</strong> and intolerance']])+
hy('Start with <strong>monotherapy</strong>: BB first; non-DHP CCB if BB not an option.'),
['bb-first-line','nondhp-ccb-alternative','combo-therapy'],
[q('What is the initial drug for HF symptoms or angina due to LVOT obstruction in HCM?','A beta-blocker such as metoprolol',['A dihydropyridine CCB such as amlodipine','A loop diuretic such as furosemide','An ACE inhibitor such as lisinopril'],'Beta-blockers (metoprolol) are first-line in obstructive HCM.'),
q('Which drugs are used in HCM when a beta-blocker is contraindicated or not tolerated?','Nondihydropyridine CCBs such as diltiazem or verapamil',['Dihydropyridine CCBs such as nifedipine','Nitrates such as nitroglycerin','Positive inotropes such as dobutamine'],'Non-DHP CCBs (diltiazem, verapamil) are the alternative.'),
q('What is the main risk of combining a beta-blocker with a nondihydropyridine CCB in HCM?','Bradyarrhythmia and intolerance',['Hyperkalemia','Worsening LVOT obstruction from vasodilation','Hypoglycemia'],'Combination therapy carries greater likelihood of bradyarrhythmia and intolerance.')],
[q('A 28-year-old with obstructive HCM and moderate persistent asthma has exertional angina. Which drug is the best initial choice?','Verapamil',['Metoprolol','Amlodipine','Nitroglycerin'],'BB contraindicated by asthma &rarr; use a non-DHP CCB (verapamil or diltiazem).'),
q('A patient with obstructive HCM and no other conditions has dyspnea on exertion. Which medication should be started first?','Metoprolol',['Diltiazem plus metoprolol together','Furosemide','Lisinopril'],'Beta-blocker monotherapy is first-line.')]),
c('Refractory HF: septal reduction',
'<p>If HF symptoms are <strong>refractory to drugs</strong>, relieve the LVOT obstruction with:</p>'+
tbl(['Procedure','How it works'],[
['<strong>Surgical septal myectomy</strong>','Removes a portion of the ventricular septum &rarr; wider outflow tract'],
['<strong>Alcohol (ETOH) septal ablation</strong>','Percutaneous injection of absolute ethanol into a <strong>septal perforator branch</strong> (usually from the <strong>LAD</strong>) &rarr; local transmural infarction of the hypertrophied zone']]),
['septal-myectomy','alcohol-septal-ablation'],
[q('What treatment is used for HCM heart failure symptoms that are refractory to medications?','Surgical septal myectomy or alcohol septal ablation',['High-dose furosemide','Dihydropyridine CCB','Digoxin'],'Refractory obstructive symptoms: septal myectomy or alcohol septal ablation.'),
q('In alcohol septal ablation, ethanol is injected into:','A septal perforator branch, usually from the LAD',['The right coronary artery ostium','The coronary sinus','The pulmonary artery'],'Ethanol into a septal perforator (usually off the LAD) infarcts the hypertrophied septum.')],
[q('An HCM patient remains symptomatic with an LVOT gradient of 80 mmHg despite maximal metoprolol and verapamil. Which option directly widens the outflow tract by removing septal muscle surgically?','Surgical septal myectomy',['Alcohol septal ablation','ICD placement','Heart transplant'],'Myectomy surgically removes septum; ablation creates a controlled infarct percutaneously.')]),
c('Drugs to AVOID in LVOT obstruction',
'<p>These worsen LVOT obstruction and symptoms (more contractility, less preload, or less afterload):</p>'+
tbl(['Class','Generic examples'],[
['<strong>Positive inotropes</strong>','Dopamine, dobutamine, digoxin'],
['<strong>Vasodilators</strong>: dihydropyridine CCBs','Nifedipine, amlodipine'],
['<strong>Vasodilators</strong>: ACE inhibitors/ARBs','Lisinopril, losartan'],
['<strong>Vasodilators</strong>: nitrates','Nitroglycerin'],
['<strong>Diuretics</strong>','Furosemide']])+
mn('Avoid what makes the LV <strong>squeeze harder</strong> or <strong>emptier</strong>: <strong>&ldquo;I.V.D.&rdquo;</strong> &mdash; <strong>I</strong>notropes, <strong>V</strong>asodilators, <strong>D</strong>iuretics.'),
['avoid-inotropes','avoid-dhp-ccb','avoid-acei-arb','avoid-nitrates','avoid-diuretics'],
[q('Which positive inotropes should be avoided in HCM with LVOT obstruction?','Dopamine, dobutamine, digoxin',['Metoprolol, atenolol, propranolol','Diltiazem, verapamil','Warfarin, apixaban'],'Positive inotropes increase contractility and worsen obstruction.'),
q('Which calcium channel blockers should be avoided in obstructive HCM?','Dihydropyridines such as nifedipine and amlodipine',['Nondihydropyridines such as verapamil','Nondihydropyridines such as diltiazem','All calcium channel blockers are first-line'],'DHP CCBs are vasodilators and worsen obstruction; non-DHP CCBs are treatment.'),
q('Which of these drug classes is NOT on the avoid list for obstructive HCM?','Beta-blockers',['ACE inhibitors/ARBs','Nitrates','Diuretics'],'Beta-blockers are first-line; ACEi/ARBs, nitrates, diuretics, DHP CCBs and inotropes are avoided.')],
[q('A patient with obstructive HCM presents with exertional chest pain. A colleague suggests sublingual nitroglycerin. Best response?','Avoid it: nitrates are vasodilators that worsen LVOT obstruction',['Give it: nitrates are first-line for HCM angina','Give it with furosemide for better effect','Give it only with amlodipine'],'Nitrates reduce preload/afterload and worsen obstruction.'),
q('A patient with obstructive HCM is found to have mild hypertension at a clinic visit. Which antihypertensive should be avoided?','Lisinopril',['Metoprolol','Verapamil','Diltiazem'],'ACEi/ARBs (lisinopril, losartan) are vasodilators to avoid in LVOT obstruction.'),
q('A patient with obstructive HCM has mild ankle swelling. Which medication should NOT be reflexively prescribed?','Furosemide',['Metoprolol','Verapamil','Warfarin'],'Diuretics reduce preload and worsen LVOT obstruction.')]),
c('Atrial fibrillation in HCM',
'<p>HCM + AF &rarr; <strong>increased thromboembolism (clot) risk</strong> &rarr; <strong>oral anticoagulation</strong> with <strong>warfarin (Coumadin) or a DOAC</strong>.</p>',
['af-anticoagulation'],
[q('What is the key treatment for atrial fibrillation in an HCM patient?','Oral anticoagulation with warfarin or a DOAC',['Digoxin for inotropy','Nifedipine for rate control','No treatment; AF is benign in HCM'],'Due to increased thromboembolism risk, anticoagulate with warfarin or a DOAC.')],
[q('A 55-year-old with HCM develops new atrial fibrillation. Which medication addresses his greatest AF-related risk?','Apixaban (a DOAC)',['Dobutamine','Amlodipine','Losartan'],'HCM + AF: anticoagulate (warfarin or DOAC) to prevent thromboembolism.')])
]),

/* ---------------- 9d HCM SCD ---------------- */
s('09d-hcm-sudden-death','9d. HCM: sudden cardiac arrest and death','Objective 9 (HCM). Slides 40&ndash;42.',[
c('ICD: the only effective prevention of SCD',
'<p>HCM patients with <strong>ventricular arrhythmias</strong> or <strong>higher risk for sudden cardiac death</strong> receive an <strong>implantable cardioverter defibrillator (ICD)</strong>.</p>'+
hy('The <strong>ICD</strong> is the <strong>only effective prevention strategy against sudden cardiac death</strong>.'),
['icd-only-prevention'],
[q('What is the only effective prevention strategy against sudden cardiac death in HCM?','Implantable cardioverter defibrillator (ICD)',['Beta-blocker therapy','Activity restriction alone','Amiodarone'],'The ICD is the only effective SCD prevention strategy.')],
[q('An HCM patient has documented non-sustained VT and massive septal hypertrophy. He asks if metoprolol will protect him from sudden death. Best response?','Only an ICD effectively prevents sudden cardiac death',['Yes, metoprolol alone prevents SCD','Yes, avoiding caffeine prevents SCD','No intervention reduces SCD risk'],'ICD is the only effective prevention against SCD.')]),
c('Sudden cardiac arrest in HCM: presentation and arrhythmias',
'<p><strong>HCM is the leading cause of sudden cardiac death in young athletes.</strong> SCA is rare but immediate and drastic.</p>'+
ul(['Usually a <strong>young adult athlete</strong> suddenly <strong>collapses</strong> with <strong>absent pulse and respirations</strong>','Occasionally chest discomfort, dyspnea, or palpitations just before; often <strong>no warning</strong>','Caused by <strong>ventricular arrhythmias</strong>: <strong>sustained VT / VF</strong>']),
['hcm-leading-scd-athletes','sca-presentation','sca-vt-vf'],
[q('What is the leading cause of sudden cardiac death in young athletes?','Hypertrophic cardiomyopathy',['Arrhythmogenic right ventricular cardiomyopathy','Myocarditis','Tako-tsubo cardiomyopathy'],'HCM is #1; ARVC is the 2nd most common cause of sudden death in athletes.'),
q('Sudden cardiac arrest in HCM is caused by:','Ventricular arrhythmias (sustained VT/VF)',['Complete heart block only','Atrial flutter','Pericardial tamponade'],'SCA in HCM is from sustained VT/VF.')],
[q('A 19-year-old football player collapses on the field without warning; he is pulseless and not breathing. Which underlying cardiomyopathy is most likely?','Hypertrophic cardiomyopathy',['Dilated cardiomyopathy','Restrictive cardiomyopathy','Peripartum cardiomyopathy'],'HCM is the leading cause of SCD in young athletes; it often occurs without warning.')]),
c('Greatest risk factors for SCA in HCM',
tbl(['Risk factor'],[
['Age <strong>under 40</strong>'],['Previously identified <strong>non-sustained VT</strong>'],['<strong>Massive hypertrophy</strong>'],['<strong>Hypotension on stress test</strong>'],['<strong>Family history of SCA</strong>']]),
['risk-under-40','risk-nsvt','risk-massive-hypertrophy','risk-stress-hypotension','risk-family-sca'],
[q('Which factor is associated with the greatest risk of sudden cardiac arrest in HCM?','Previously identified non-sustained VT',['Age over 65','Mild symmetric wall thickening','Normal BP rise on stress testing'],'Greatest risk: age under 40, prior NSVT, massive hypertrophy, stress-test hypotension, FH of SCA.'),
q('Which stress-test result is an SCA risk factor in HCM?','Hypotension during exercise',['Appropriate rise in BP','Achieving target heart rate','No symptoms during exercise'],'Hypotension on stress test is a major SCA risk factor.'),
q('Which family history raises SCA risk in an HCM patient?','A family history of sudden cardiac arrest',['A family history of hypothyroidism','A family history of asthma','A family history of osteoporosis'],'FH of SCA is a key risk factor.')],
[q('Which HCM patient has the highest risk of sudden cardiac arrest?','A 24-year-old with massive hypertrophy whose brother died suddenly',['A 70-year-old with mild hypertrophy and no arrhythmias','A 60-year-old with a normal stress test and no family history','A 50-year-old with asymptomatic mild septal thickening'],'Young age, massive hypertrophy, and FH of SCA are the highest-risk features.')]),
c('Managing acute sudden cardiac arrest',
'<p>For acute hemodynamic collapse / SCA: <strong>prompt defibrillation and CPR</strong> are necessary (details in ACLS and arrhythmia lectures).</p>',
['defibrillation-cpr'],
[q('What management is necessary for an HCM patient in sudden cardiac arrest?','Prompt defibrillation and CPR',['Oral metoprolol','IV furosemide','Observation until the rhythm self-terminates'],'SCA needs immediate CPR and defibrillation.')],
[q('A teenager with HCM collapses during a game and is pulseless; an AED is nearby. What is the priority?','Start CPR and defibrillate promptly',['Give oral aspirin and wait for EMS','Obtain a 12-lead EKG first','Check a troponin level'],'Prompt defibrillation and CPR are life-saving in SCA.')])
]),

/* ---------------- 10 ARVC ---------------- */
s('10-arvc','10. Arrhythmogenic right ventricular cardiomyopathy (ARVC)','Objective 9 (ARVC). Slides 43&ndash;50.',[
c('ARVC genetics and pathology',
ul(['<strong>Autosomal dominant</strong>','Mutations in genes encoding <strong>desmosomal proteins</strong> &rarr; myocyte detachment and apoptosis','Myocytes replaced by <strong>fibro-fatty tissue</strong>'])+
hy('HCM = <strong>sarcomere</strong>. ARVC = <strong>desmosome</strong> &rarr; fibro-fatty RV.'),
['arvc-autosomal-dominant','desmosomal-mutation','fibro-fatty-replacement'],
[q('ARVC is caused by mutations in genes encoding:','Desmosomal proteins',['Sarcomere proteins','Dystrophin','Hemoglobin'],'ARVC = desmosomal mutations; HCM = sarcomere.'),
q('In ARVC, detached myocytes are replaced by:','Fibro-fatty tissue',['Amyloid fibrils','Granulomas','Iron deposits'],'Myocyte apoptosis leads to fibro-fatty replacement.'),
q('What is the inheritance pattern of ARVC?','Autosomal dominant',['X-linked recessive','Autosomal recessive only','Not inherited'],'ARVC is autosomal dominant.')],
[q('Pathology from a young athlete who died suddenly shows the RV myocardium replaced by fat and fibrous tissue. Which gene family was most likely mutated?','Desmosomal protein genes',['Sarcomere protein genes','Dystrophin gene','Transthyretin gene'],'Fibro-fatty RV replacement = ARVC from desmosomal mutations.')]),
c('ARVC presentation and sudden death',
ul(['Typically <strong>right-sided HF</strong> and rhythm disturbances, especially <strong>VT</strong>','Often precipitated by <strong>catecholamine release during exercise</strong>','<strong>2nd most common cause of sudden death in athletes</strong>','Often diagnosed in the <strong>2nd or 3rd decade</strong>'])+
tbl(['Phase','Presentation'],[
['<strong>Concealed</strong>','Asymptomatic'],
['<strong>Electrical</strong>','Palpitations or syncope'],
['<strong>Diffuse</strong>','Right-sided HF (JVD, peripheral edema, ascites)']])+
'<p>Results in right-sided HF, VT, and sudden death.</p>',
['arvc-right-hf','arvc-vt','exercise-catecholamines','second-mcc-athletes','arvc-phases'],
[q('ARVC is the ______ most common cause of sudden death in athletes.','2nd',['1st','3rd','5th'],'HCM is 1st; ARVC is 2nd.'),
q('What typically precipitates the arrhythmias of ARVC?','Catecholamine release during exercise',['Lying supine at night','Cold exposure only','Large meals'],'Exercise-related catecholamine surges precipitate VT.'),
q('In which phase of ARVC do patients present with palpitations or syncope?','Electrical phase',['Concealed phase','Diffuse phase','Recovery phase'],'Concealed = asymptomatic; electrical = palpitations/syncope; diffuse = right HF.')],
[q('A 24-year-old cyclist has palpitations and a syncopal episode during a race; later he develops JVD and ankle edema. Which cardiomyopathy best fits?','Arrhythmogenic right ventricular cardiomyopathy',['Restrictive cardiomyopathy','Tako-tsubo cardiomyopathy','Peripartum cardiomyopathy'],'Exercise-triggered VT/syncope plus right-sided HF in a young adult = ARVC.')]),
c('ARVC EKG and epsilon waves',
'<p>EKG is suggestive but nonspecific: <strong>50% normal at presentation</strong>, yet in a 6-year study all patients eventually had &ge; 1 finding.</p>'+
ul(['PVCs, QRS prolongation, VT','Bundle branch blocks, T wave inversions','<strong>Epsilon wave</strong>: notch/blip at the <strong>end of the QRS</strong> in precordial leads, especially <strong>V1</strong>; from delayed excitation of myocyte strands scattered among fibrous and fatty tissue']),
['arvc-ekg-normal-50','arvc-ekg-findings','epsilon-wave'],
[q('Epsilon waves are best described as:','Notches or blips at the end of the QRS in precordial leads, especially V1',['Deep dagger-like Q waves in lateral leads','Giant negative T waves in the apex leads','Low QRS voltage in all leads'],'Epsilon waves = terminal QRS notches, especially V1 (ARVC).'),
q('What proportion of ARVC patients have a normal EKG at presentation?','About 50%',['About 5%','About 25%','Essentially 100%'],'50% are normal at presentation, though all eventually showed findings in a 6-year study.'),
q('What causes the epsilon wave in ARVC?','Delayed excitation of myocyte strands scattered among fibrous and fatty tissue',['Accessory pathway pre-excitation','Atrial enlargement','Pericardial inflammation'],'Delayed activation through fibro-fatty tissue produces the epsilon wave.')],
[q('A young patient with exercise-induced palpitations has small notches at the end of the QRS complex in V1 and T wave inversions. Which cardiomyopathy should you suspect?','Arrhythmogenic right ventricular cardiomyopathy',['Hypertrophic cardiomyopathy','Restrictive cardiomyopathy','Tako-tsubo cardiomyopathy'],'Epsilon waves in V1 point to ARVC.')]),
c('ARVC imaging: echo and cardiac MRI',
tbl(['Test','Role and findings'],[
['<strong>Echo</strong> (test of choice)','<strong>Enlarged/dilated RV</strong>, RV wall motion abnormalities, &plusmn; fatty tissue in RV wall; <strong>LV normal</strong> until later'],
['<strong>Cardiac MRI</strong>','Follow-up study; <strong>best study to identify fibro-fatty infiltrates</strong> once RV findings are seen on echo']]),
['arvc-echo','arvc-cmr'],
[q('Which study is best to identify fibro-fatty infiltrates in a patient with RV abnormalities on echo?','Cardiac MRI',['Chest x-ray','Exercise EKG','BNP'],'CMR is the best study for fibro-fatty infiltrates in ARVC.'),
q('What does echo typically show in ARVC?','Dilated RV with wall motion abnormalities and a normal LV',['Concentric LVH with LVOT obstruction','Dilated LV with EF &le; 40% and a normal RV','Bi-atrial enlargement with small ventricles'],'ARVC echo: enlarged RV with wall motion abnormalities; LV normal until late.')],
[q('A patient with suspected ARVC has an echo showing an enlarged, poorly moving RV. Which follow-up study best confirms fibro-fatty infiltration?','Cardiac MRI',['Repeat echo in 5 years','Coronary angiogram','Endomyocardial biopsy as first step'],'CMR is the follow-up study of choice for fibro-fatty tissue.')]),
c('ARVC treatment',
tbl(['Treatment','Detail'],[
['<strong>Activity restriction</strong>','Avoid competitive/strenuous exercise'],
['<strong>Anti-arrhythmics</strong>','<strong>Beta-blockers first line</strong>'],
['<strong>ICD</strong>','<strong>Secondary prevention</strong> of SCD after a <strong>sustained ventricular arrhythmia</strong>'],
['<strong>Cardiac transplant</strong>','Last resort']]),
['arvc-activity-restriction','arvc-beta-blocker','arvc-icd','arvc-transplant'],
[q('What is the first-line anti-arrhythmic drug class in ARVC?','Beta-blockers',['Dihydropyridine CCBs','Positive inotropes','Diuretics'],'Beta-blockers are first-line anti-arrhythmics for ARVC.'),
q('In ARVC, an ICD is appropriate for:','Secondary prevention after a sustained ventricular arrhythmia',['All patients in the concealed phase','Treating right-sided edema','Rate control of sinus rhythm'],'ICD for secondary prevention of SCD after sustained ventricular arrhythmia.'),
q('What is the last-resort treatment for ARVC?','Cardiac transplantation',['Alcohol septal ablation','Surgical septal myectomy','Prompt delivery'],'Transplant is the last resort in ARVC.')],
[q('A 26-year-old with ARVC was resuscitated from sustained VT during a basketball game. Besides beta-blockers and stopping competitive sports, what is indicated?','Implantable cardioverter defibrillator',['Alcohol septal ablation','Digoxin','Benzodiazepine therapy'],'Survivor of sustained ventricular arrhythmia &rarr; ICD for secondary prevention.')])
]),

/* ---------------- 11 DCM ---------------- */
s('11-dcm','11. Dilated cardiomyopathy (DCM)','Objective 9 (DCM). Slides 52&ndash;61.',[
c('DCM: most common form and its characteristics',
hy('<strong>DCM is the most common form of cardiomyopathy.</strong>')+
ul(['<strong>Dilation of the ventricle</strong> (typically left, can include right) with <strong>impaired contraction</strong>','<strong>Systolic dysfunction (EF &le; 40%)</strong> with LV enlargement','Presents with <strong>cardiomegaly</strong> and progressive, often severe <strong>HF</strong>']),
['most-common-cm','ventricular-dilation','systolic-dysfunction-ef40'],
[q('What is the most common form of cardiomyopathy?','Dilated cardiomyopathy',['Hypertrophic cardiomyopathy','Restrictive cardiomyopathy','Arrhythmogenic right ventricular cardiomyopathy'],'DCM is the most common cardiomyopathy.'),
q('DCM is defined by which ejection fraction threshold?','EF &le; 40%',['EF &ge; 70%','EF &le; 60%','EF &le; 10% only'],'DCM: systolic dysfunction with EF &le; 40% and LV enlargement.'),
q('The core dysfunction in DCM is:','Systolic dysfunction from a dilated, poorly contracting ventricle',['Diastolic dysfunction from a thick, stiff ventricle','Dynamic LVOT obstruction','Isolated RV fibro-fatty replacement'],'DCM = dilated ventricle with impaired contraction (systolic dysfunction).')],
[q('A 50-year-old has progressive HF, cardiomegaly on CXR, and an echo showing a dilated LV with EF 25%. No CAD, valve disease, or HTN is found. Diagnosis?','Dilated cardiomyopathy',['Hypertrophic cardiomyopathy','Restrictive cardiomyopathy','Athlete&rsquo;s heart'],'Dilated LV, EF &le; 40%, without a known CV cause = DCM.')]),
c('DCM etiologies: genetic and acquired',
tbl(['Cause','Key points'],[
['<strong>Idiopathic</strong> (~50%)','Half of these patients&rsquo; family members have abnormal cardiac evaluations'],
['<strong>Genetic</strong> (~35%)','e.g., <strong>muscular dystrophy</strong>: dystrophin gene mutation &rarr; cardiomyocyte lysis'],
['<strong>Alcohol (ETOH)</strong>','Early stages may be <strong>reversible</strong> with abstinence'],
['<strong>Pregnancy (PPCM)</strong>','Possible underlying genetic factors'],
['<strong>Drugs/toxins</strong>','Chemotherapy: <strong>doxorubicin (Adriamycin)</strong> &mdash; usually within <strong>3 months of last dose</strong>; anti-rheumatic: <strong>hydroxychloroquine (Plaquenil)</strong>']]),
['dcm-idiopathic','dcm-genetic-muscular-dystrophy','dcm-alcohol','dcm-pregnancy','dcm-doxorubicin','dcm-hydroxychloroquine'],
[q('Which chemotherapy agent is a classic cause of acquired DCM?','Doxorubicin (Adriamycin)',['Methotrexate','Vincristine','Tamoxifen'],'Doxorubicin causes DCM, generally within 3 months of the last dose.'),
q('Which anti-rheumatic agent is listed as a cause of DCM?','Hydroxychloroquine (Plaquenil)',['Sulfasalazine','Prednisone','Ibuprofen'],'Hydroxychloroquine is the anti-rheumatic DCM cause in the lecture.'),
q('Which acquired cause of DCM may be reversible in early stages?','Alcohol use, if the patient abstains',['Doxorubicin after 10 years','Muscular dystrophy','Idiopathic familial DCM'],'Early alcoholic DCM may reverse with abstinence.'),
q('Roughly what fraction of DCM is idiopathic?','About 50%',['About 5%','About 15%','About 90%'],'Idiopathic ~50%; genetic ~35%.'),
q('In muscular dystrophy&ndash;associated DCM, which gene is mutated?','Dystrophin',['Desmoplakin','Beta-myosin heavy chain','Transthyretin'],'Dystrophin mutations cause cardiomyocyte lysis.')],
[q('Two months after finishing breast cancer chemotherapy, a 52-year-old develops dyspnea and edema; echo shows a dilated LV with EF 30%. Most likely culprit?','Doxorubicin',['Hydroxychloroquine','Terbutaline','Coxsackievirus B'],'Doxorubicin cardiotoxicity typically appears within 3 months of the last dose.'),
q('A 45-year-old who drinks heavily has new DCM with EF 35%. What is the most important reversible step?','Complete abstinence from alcohol',['Alcohol septal ablation','Switch from beer to wine','Immediate heart transplant listing'],'Early alcoholic DCM may be reversible with abstinence.')]),
c('DCM presentation, exam, and S3',
'<p><strong>Left-sided HF first</strong>: exertional intolerance/dyspnea early, then PND/orthopnea, cough with frothy sputum (pulmonary edema). <strong>Right-sided HF follows</strong>: anasarca, LE edema, abdominal distension.</p>'+
tbl(['Exam finding','Detail'],[
['<strong>S3</strong> (ventricular diastolic gallop, &ldquo;<strong>Kentucky</strong>&rdquo;)','Low-pitched, early diastole just after S2 (<strong>lub-dub-ta</strong>); apex, <strong>left lateral</strong> position; louder with tachycardia'],
['Regurgitant murmurs','<strong>Mitral and tricuspid</strong> regurgitation'],
['Rales','Pulmonary congestion'],
['Elevated JVP, peripheral edema, ascites','Right-sided HF']])+
mn('<strong>S3 = &ldquo;Ken-tuc-ky&rdquo;</strong> (lub-dub-<strong>ta</strong>, dilated/volume overload). <strong>S4 = &ldquo;Ten-nes-see&rdquo;</strong> (<strong>ta</strong>-lub-dub, stiff/hypertrophied).'),
['dcm-left-then-right-hf','s3','dcm-regurg-murmurs','dcm-rales-jvp-edema'],
[q('Which extra heart sound is characteristic of DCM?','S3 (ventricular diastolic gallop)',['S4 (atrial diastolic gallop)','Ejection click','Opening snap'],'S3 &ldquo;Kentucky&rdquo; is heard in DCM.'),
q('How is the S3 best heard?','At the apex with the patient in the left lateral position',['At the right upper sternal border with the diaphragm while sitting','At the left infraclavicular area during Valsalva','Over the carotids while standing'],'S3: low-pitched, apex, left lateral position; accentuated with tachycardia.'),
q('Which regurgitant murmurs are associated with DCM?','Mitral and tricuspid regurgitation',['Aortic and pulmonic regurgitation','Aortic stenosis and mitral stenosis','Patent ductus arteriosus'],'Dilation causes mitral and tricuspid regurgitation.')],
[q('A patient has orthopnea, frothy sputum, bibasilar rales, and a low-pitched sound right after S2 heard best in the left lateral position. Which cardiomyopathy fits?','Dilated cardiomyopathy',['Hypertrophic cardiomyopathy','Arrhythmogenic right ventricular cardiomyopathy','Tako-tsubo cardiomyopathy'],'S3 plus left-sided HF signs = DCM.')]),
c('DCM echo findings',
'<p><strong>Echo is the test of choice</strong> and gives the most useful information:</p>'+
ul(['<strong>Dilated LV cavity</strong> with <strong>normal or decreased</strong> wall thickness','Reduced inward endocardial systolic motion','<strong>EF &le; 40%</strong>','May show enlarged atria and RV']),
['dcm-echo-toc','dcm-echo-findings'],
[q('Which test provides the most useful information for diagnosing DCM?','Echocardiogram',['Chest x-ray','BNP','Troponin'],'Echo is the test of choice for DCM.'),
q('In DCM, the LV wall thickness on echo is typically:','Normal or decreased',['Asymmetrically increased to &ge; 15 mm','Symmetrically increased to 13&ndash;15 mm','Replaced by fat in the RV only'],'DCM: dilated cavity with normal or decreased wall thickness.')],
[q('Which echo report is most consistent with DCM?','Dilated LV, thin walls, reduced systolic motion, EF 28%',['Septum 21 mm, LVOT gradient 60 mmHg, EF 70%','Small ventricles, huge atria, EF 60%','Dilated RV with fat in RV wall, normal LV'],'Dilated LV with thin/normal walls and EF &le; 40% = DCM.')]),
c('DCM chest x-ray and Kerley lines',
'<p>CXR is suggestive but not specific: <strong>cardiomegaly</strong>, fluffy infiltrates (Kerley lines), &plusmn; <strong>pleural effusions</strong>.</p>'+
tbl(['Kerley line','Appearance'],[
['<strong>A</strong>','Long (&ge; 2 cm), unbranching, diagonal lines from the <strong>hila to the periphery</strong>'],
['<strong>B</strong>','<strong>Short, fat horizontal</strong> lines in the <strong>periphery</strong>'],
['<strong>C</strong>','Short, fine lines throughout the lungs (<strong>least common</strong>)']]),
['dcm-cxr-cardiomegaly','kerley-a','kerley-b','kerley-c','pleural-effusion'],
[q('Kerley B lines are:','Short, fat horizontal lines in the lung periphery',['Long diagonal lines from the hila outward','Fine lines throughout the lungs, least common','Air-fluid levels in the bases'],'Kerley B = short horizontal peripheral lines.'),
q('Kerley A lines are:','Long (at least 2 cm) unbranching lines running diagonally from the hila to the periphery',['Short horizontal lines at the costophrenic angles','Fine reticular lines throughout both lungs','Vertical lines along the heart border'],'Kerley A = long diagonal lines from hila.'),
q('Which Kerley line type is least common?','Kerley C',['Kerley A','Kerley B','All are equally common'],'Kerley C lines (short, fine, throughout) are least common.')],
[q('A DCM patient&rsquo;s CXR shows an enlarged heart, short horizontal lines at the lung periphery near the costophrenic angles, and blunted angles. Best description?','Cardiomegaly with Kerley B lines and pleural effusions',['Normal CXR','Kerley C lines with pneumothorax','Hilar adenopathy from sarcoidosis'],'Short horizontal peripheral lines = Kerley B; blunted angles suggest effusions.')]),
c('DCM ECG, labs, and other tests',
tbl(['Test','DCM finding/role'],[
['<strong>ECG</strong>','<strong>Sinus tachycardia and LBBB</strong> most common; <strong>AF</strong> 2nd most common (not specific)'],
['<strong>BNP</strong>','Establishes <strong>prognosis and HF severity</strong>; rises as HF worsens'],
['<strong>Troponin</strong>','Not useful except to <strong>rule out acute coronary event</strong>'],
['Stress test','Part of workup'],
['<strong>Cardiac cath</strong>','To evaluate for <strong>ischemic causes</strong>']]),
['dcm-ecg','dcm-bnp','dcm-troponin','dcm-stress-cath'],
[q('Which ECG findings are most common in DCM?','Sinus tachycardia and LBBB',['Epsilon waves and RBBB','Dagger-like Q waves and giant negative T waves','Diffuse ST elevation with PR depression'],'DCM: sinus tach and LBBB most common; AF second.'),
q('What is the role of BNP in DCM?','Helps establish prognosis and HF severity',['Confirms the diagnosis of DCM','Identifies doxorubicin toxicity specifically','Has no role in DCM'],'BNP rises as HF worsens; helps prognosis and severity.'),
q('Why might a cardiac catheterization be part of the DCM workup?','To evaluate for ischemic causes',['To inject alcohol into the septum','To measure Kerley lines','To perform a stress test'],'Cath evaluates for ischemic (CAD) causes of LV dysfunction.')],
[q('A new DCM patient has no chest pain. A student orders serial troponins to assess HF severity. What is a better choice and why?','BNP, because it tracks HF severity and prognosis; troponin is mainly to rule out acute coronary events',['CRP, because DCM is primarily inflammatory','Lipase, because DCM causes pancreatitis','No labs, because labs have no role'],'Troponin is not useful in DCM except to exclude ACS; BNP gauges severity/prognosis.')]),
c('DCM treatment',
tbl(['Goal','Treatment'],[
['Correct reversible causes','e.g., stop <strong>alcohol</strong>'],
['Treat HF','<strong>Beta-blockers</strong> (&darr; HR and O2 demand); <strong>ACE inhibitors</strong> (afterload); <strong>nitroglycerin</strong> (preload + afterload); <strong>diuretics</strong> (furosemide)'],
['Prevent thromboembolism','<strong>Anticoagulants</strong>'],
['Manage dysrhythmias','Beta-blockers; <strong>digoxin</strong> (positive inotrope used in DCM); <strong>ICD</strong>'],
['End stage','<strong>Cardiac transplant</strong> &mdash; <strong>DCM is the most common reason</strong>']])+
hy('Drugs <strong>avoided</strong> in obstructive HCM (ACEi, nitrates, diuretics, digoxin) are <strong>used</strong> in DCM.'),
['dcm-reversible-causes','dcm-hf-drugs','dcm-anticoagulation','dcm-digoxin-icd','dcm-transplant'],
[q('Which positive inotrope is used to manage dilated cardiomyopathy?','Digoxin',['Dobutamine as long-term oral therapy','Nifedipine','Verapamil'],'Digoxin is the positive inotrope used for DCM.'),
q('What is the most common reason for cardiac transplantation?','Dilated cardiomyopathy',['Hypertrophic cardiomyopathy','Tako-tsubo cardiomyopathy','Myocarditis'],'DCM is the most common reason for heart transplant.'),
q('In DCM, ACE inhibitors are used primarily for:','Afterload reduction',['Positive inotropy','Rate control','Anticoagulation'],'ACEi reduce afterload; nitroglycerin reduces preload and afterload.')],
[q('A DCM patient (EF 25%) has dyspnea and edema. Which regimen best matches the lecture&rsquo;s HF treatment?','Beta-blocker, ACE inhibitor, and furosemide',['Verapamil, amlodipine, and dobutamine','Benzodiazepine and NSAID','No medications; observation only'],'DCM HF: BB, vasodilators (ACEi, nitro), diuretics; plus anticoagulation and arrhythmia management.')])
]),

/* ---------------- 12 RCM ---------------- */
s('12-rcm','12. Restrictive cardiomyopathy (RCM)','Objective 9 (RCM). Slides 62&ndash;68.',[
c('Distinct characteristics of RCM',
'<p>Less common than DCM or HCM.</p>'+
tbl(['Feature','RCM'],[
['Ventricle size','<strong>Non-dilated</strong>'],
['Wall thickness','Usually <strong>normal</strong> (infiltrative disease may thicken)'],
['Wall property','<strong>Rigid, stiff</strong> ventricles &rarr; <strong>severe diastolic dysfunction</strong>, restrictive filling, elevated filling pressures'],
['Atria','<strong>Dilated</strong>'],
['Systolic function','Usually <strong>normal</strong> until severe disease']]),
['rcm-nondilated','rcm-stiff-diastolic','rcm-dilated-atria','rcm-preserved-systolic'],
[q('Which description best fits restrictive cardiomyopathy?','Stiff, non-dilated ventricles with severe diastolic dysfunction and dilated atria',['Dilated ventricles with EF &le; 40%','Asymmetric septal hypertrophy with LVOT obstruction','Fibro-fatty RV with epsilon waves'],'RCM = stiff ventricles, diastolic dysfunction, big atria, preserved systolic function.'),
q('Systolic function in RCM is usually:','Normal until the disease becomes severe',['Severely reduced from the start','Hyperdynamic at the base with apical ballooning','Unmeasurable'],'LV systolic function usually remains normal until severe.')],
[q('A patient&rsquo;s ventricles fill poorly because the walls are rigid, though they are normal in size and contract normally. Which cardiomyopathy is this?','Restrictive cardiomyopathy',['Dilated cardiomyopathy','Arrhythmogenic right ventricular cardiomyopathy','Peripartum cardiomyopathy'],'Rigid non-dilated ventricles with preserved contraction = RCM.')]),
c('RCM etiologies',
tbl(['Emphasized cause','Category (slide 64)'],[
['<strong>Idiopathic</strong> (~50% of RCM)','Idiopathic'],
['<strong>Amyloidosis</strong>','Infiltrative'],
['<strong>Sarcoidosis</strong>','Infiltrative'],
['<strong>Radiation therapy</strong> (post-irradiation)','Inflammatory']])+
'<p>Other categories on the classification chart: noninfiltrative (e.g., scleroderma, diabetic), storage (hemochromatosis, glycogen storage, Fabry).</p>',
['rcm-idiopathic','rcm-amyloidosis','rcm-sarcoidosis','rcm-radiation'],
[q('Which list contains the RCM etiologies emphasized in the lecture?','Radiation therapy, amyloidosis, sarcoidosis, idiopathic',['Alcohol, doxorubicin, pregnancy, muscular dystrophy','Desmosomal mutation, exercise, catecholamines','Coxsackievirus, adenovirus, parvovirus B19'],'RCM: radiation, amyloidosis, sarcoidosis, idiopathic.'),
q('About what proportion of RCM is idiopathic?','About 50%',['About 5%','About 20%','About 95%'],'Idiopathic accounts for ~50% of RCM (slide 64).'),
q('Amyloidosis and sarcoidosis cause RCM through which mechanism category?','Infiltration of the myocardium',['Sarcomere gene mutation','Catecholamine-induced coronary spasm','Desmosome detachment'],'Both are infiltrative causes of RCM.')],
[q('A 64-year-old who received chest radiation for Hodgkin lymphoma 20 years ago now has right and left HF with bi-atrial enlargement and a normal EF. Most likely cardiomyopathy?','Restrictive cardiomyopathy',['Dilated cardiomyopathy','Hypertrophic cardiomyopathy','Tako-tsubo cardiomyopathy'],'Prior radiation therapy is a classic RCM cause.')]),
c('RCM clinical presentation',
'<p>RCM produces <strong>left and right heart failure</strong>, and progression is usually <strong>rapid</strong>:</p>'+
ul(['SOB, orthopnea, PND','JVD, peripheral edema, ascites','Gallop rhythm (<strong>S3 or S4</strong>) and regurgitant murmurs']),
['rcm-biventricular-hf','rcm-rapid-progression','rcm-gallop-murmurs'],
[q('How does RCM typically present?','Left and right heart failure that usually progresses rapidly',['Isolated exertional syncope in young athletes','Transient apical ballooning after emotional stress','Asymptomatic for life in most patients'],'RCM: biventricular HF with usually rapid progression.')],
[q('A patient with cardiac amyloidosis has orthopnea, PND, JVD, ascites, and an S4. What does this presentation reflect?','Biventricular heart failure from RCM',['Isolated left-sided HF from HCM','Pericarditis from myocarditis','Athlete&rsquo;s heart'],'RCM causes both left- and right-sided HF; gallops and regurgitant murmurs may be heard.')]),
c('RCM workup findings',
tbl(['Test','RCM finding'],[
['<strong>ECG</strong>','Nonspecific; may show <strong>decreased QRS amplitude</strong>'],
['<strong>CXR</strong>','Cardiomegaly <strong>from enlarged atria</strong>; pulmonary congestion'],
['<strong>Echo</strong> (test of choice)','Non-dilated, non-hypertrophied ventricles, <strong>bi-atrial enlargement</strong>, preserved systolic LV, abnormal diastolic function']]),
['rcm-low-qrs','rcm-cxr','rcm-echo'],
[q('Which ECG finding may be seen in RCM?','Decreased QRS amplitude',['Epsilon waves','Dagger-like Q waves','Diffuse ST elevation with PR depression'],'RCM ECG is nonspecific but may show low QRS voltage.'),
q('In RCM, cardiomegaly on CXR is mainly due to:','Enlarged atria',['Dilated ventricles','Pericardial effusion','Septal hypertrophy'],'The cardiac silhouette enlarges from the dilated atria.')],
[q('A patient with HF has low-voltage QRS complexes on ECG and an echo showing small, non-thickened ventricles with large atria. Which cardiomyopathy fits?','Restrictive cardiomyopathy',['Hypertrophic cardiomyopathy','Dilated cardiomyopathy','Arrhythmogenic right ventricular cardiomyopathy'],'Low QRS voltage + bi-atrial enlargement + non-dilated ventricles = RCM.')]),
c('Choosing tests in RCM: CMR and biopsy',
tbl(['Test','When/why'],[
['<strong>Cardiac MRI</strong>','Shows presence/absence of <strong>myocardial infiltration and fibrosis</strong>; patterns inform the <strong>specific form</strong> of RCM'],
['<strong>Endomyocardial biopsy</strong>','<strong>Most accurate</strong> but invasive, less used; to confirm infiltrative disease when <strong>MRI is unclear/equivocal</strong>']])+
hy('Echo &rarr; CMR &rarr; biopsy only if CMR is equivocal.'),
['rcm-cmr','rcm-biopsy'],
[q('Which test is most accurate for confirming infiltrative RCM?','Endomyocardial biopsy',['ECG','Chest x-ray','BNP'],'Biopsy is most accurate but invasive; used when MRI is equivocal.'),
q('What information does cardiac MRI add in RCM?','Presence or absence of myocardial infiltration and fibrosis, guiding the specific form',['Ejection fraction only','Coronary artery anatomy only','Genetic mutation type'],'CMR patterns of infiltration/fibrosis inform the specific RCM diagnosis.')],
[q('Echo suggests RCM. Which is the best next test to look for infiltration or fibrosis and identify the specific cause?','Cardiac MRI',['Endomyocardial biopsy as the first step','Exercise stress test','Repeat chest x-ray'],'CMR is next; biopsy is reserved for equivocal MRI.'),
q('A suspected cardiac amyloidosis patient&rsquo;s cardiac MRI is equivocal. What is the next step to confirm infiltrative disease?','Endomyocardial biopsy',['Repeat CXR','Holter monitor','Start benzodiazepines'],'Biopsy confirms infiltrative disease when MRI is unclear.')]),
c('RCM prognosis',
hy('RCM has the <strong>lowest one-year survival</strong> compared with DCM and HCM; <strong>most patients die within a few years</strong> of diagnosis.')+
ul(['<strong>No cure</strong>; manage HF and arrhythmias','Heart transplant possible but <strong>seldom advised</strong> because of the underlying primary disease']),
['rcm-poor-prognosis','rcm-no-cure-transplant'],
[q('Compared with DCM and HCM, RCM has:','The lowest one-year survival',['The highest one-year survival','Equal survival','Spontaneous recovery in most patients'],'RCM has the lowest one-year survival; most die within a few years.'),
q('Why is heart transplant seldom advised in RCM?','Because of the underlying primary disease',['Because RCM always resolves','Because RCM affects only the atria','Because transplant is contraindicated in all cardiomyopathies'],'The underlying primary disease (e.g., infiltrative) limits transplant benefit.')],
[q('A family asks about the outlook for their father&rsquo;s newly diagnosed restrictive cardiomyopathy. Which statement is most accurate?','Prognosis is poor; most patients die within a few years of diagnosis',['Most patients recover fully within 4 weeks','Half recover spontaneously after delivery','It is benign and requires no treatment'],'RCM has the poorest prognosis of the major types.')])
]),

/* ---------------- 13 Myocarditis ---------------- */
s('13-myocarditis','13. Myocarditis','Objective 9 (Myocarditis). Slides 70&ndash;77.',[
c('Process and histologic hallmark',
'<p>An <strong>inflammatory process with necrosis</strong> involving the myocardium.</p>'+
hy('Histologic hallmark: <strong>focal patchy or diffuse inflammatory infiltrate with adjacent myocyte injury</strong>.')+
'<p>Course varies: asymptomatic/self-limited; fevers, chest pain, chills, N/V/D, arthralgia, myalgia; or acute HF, arrhythmias, and death.</p>',
['inflammation-necrosis','histologic-hallmark','variable-course'],
[q('What is the histologic hallmark of myocarditis?','Focal patchy or diffuse inflammatory infiltrate with adjacent myocyte injury',['Fibro-fatty replacement of RV myocytes','Myocyte disarray from sarcomere mutation','Amyloid deposits with apple-green birefringence'],'Myocarditis = inflammatory infiltrate with adjacent myocyte injury.'),
q('Myocarditis is best described as:','An inflammatory process with necrosis involving the myocardium',['A genetic desmosomal disorder','A catecholamine-induced coronary spasm','A physiologic adaptation to training'],'Inflammation with necrosis of the myocardium.')],
[q('An endomyocardial biopsy shows patchy inflammatory cell infiltrates with injury of nearby myocytes. Which diagnosis does this support?','Myocarditis',['Hypertrophic cardiomyopathy','Arrhythmogenic right ventricular cardiomyopathy','Restrictive cardiomyopathy from amyloid'],'This is the histologic hallmark of myocarditis.')]),
c('Etiologies: viral is most common',
hy('Most commonly initiated by <strong>viral infection</strong>.')+
'<p>Common viruses (US/Western Europe, immunocompetent): <strong>adenovirus, coxsackievirus B (enterovirus), parvovirus B19</strong>, herpes simplex, influenza A, CMV.</p>'+
tbl(['Other causes','Examples'],[
['Bacteria','Mycoplasma, staph, strep, Haemophilus, TB'],
['Fungi (as listed)','Coccidioidomycosis, histoplasmosis (toxoplasmosis also listed here*)'],
['Parasites','Amebiasis'],
['Protozoan','<strong>Chagas disease</strong> (South America)'],
['Autoimmune','<strong>Giant-cell myocarditis</strong>'],
['Other','Drugs, toxins, hypersensitivity, collagen vascular disease']])+
'<p><em>*Clarification (standard reference): Toxoplasma is a protozoan, not a fungus.</em></p>',
['viral-most-common','common-viruses','chagas','giant-cell'],
[q('What is the most common cause of myocarditis?','Viral infection',['Bacterial infection','Autoimmune giant-cell disease','Drug hypersensitivity'],'Myocarditis is most commonly initiated by a viral infection.'),
q('Which virus is among the most common causes of myocarditis in the US?','Coxsackievirus B',['Hepatitis A','Rotavirus','Measles'],'Adenovirus, coxsackie B, parvovirus B19, HSV, influenza A, CMV.'),
q('Which protozoan cause of myocarditis is associated with South America?','Chagas disease',['Amebiasis','Histoplasmosis','Giant-cell myocarditis'],'Chagas (Trypanosoma cruzi) is the South American protozoan cause.')],
[q('A previously healthy 22-year-old develops chest pain and dyspnea two weeks after a febrile enteroviral illness. Which organism most likely triggered his myocarditis?','Coxsackievirus B',['Mycoplasma','Histoplasma','Entamoeba'],'Viral causes predominate; coxsackievirus B is a classic enterovirus cause.')]),
c('Clinical presentation that raises suspicion',
'<p>Myocarditis may be <strong>masked by constitutional symptoms</strong> (fever, malaise, fatigue, arthralgias, myalgias, rash).</p>'+
hy('<strong>Red flag:</strong> patient seeks care <strong>days to weeks after an acute flu-like illness</strong> with <strong>chest pain</strong> or <strong>acute-onset HF</strong> (dyspnea, fatigue, &darr; exercise tolerance, palpitations, JVD, edema, ascites).')+
'<p>Other presentations: syncope, ventricular arrhythmias, complete heart block, emboli (e.g., PE).</p>',
['masked-constitutional','post-viral-red-flag','other-presentations'],
[q('Which history most raises suspicion for myocarditis?','Chest pain or new HF days to weeks after a flu-like illness',['Exertional syncope since childhood with a family history of SCD','Heart failure in the last month of pregnancy','Chest pain right after the death of a spouse'],'The red flag is presentation days/weeks after an acute flu-like syndrome.'),
q('Why can myocarditis be missed initially?','It may be masked by constitutional symptoms of the illness',['It always causes a normal ECG','It only occurs in the elderly','It never causes symptoms'],'Fever, malaise, myalgias, etc. can overshadow the cardiac involvement.')],
[q('A 30-year-old had fever and myalgias 10 days ago. Now she has palpitations, dyspnea, new JVD, and ankle edema. What diagnosis should you suspect?','Myocarditis',['Tako-tsubo cardiomyopathy','Hypertrophic cardiomyopathy','Athlete&rsquo;s heart'],'Acute-onset HF days to weeks after a flu-like illness = myocarditis red flag.')]),
c('Myocarditis workup findings',
tbl(['Test','Finding'],[
['<strong>ECG</strong>','<strong>Tachycardia</strong> and <strong>nonspecific ST and T wave changes</strong>'],
['<strong>Cardiac enzymes</strong>','<strong>Positive</strong>'],
['CXR','&plusmn; cardiomegaly'],
['<strong>Echo</strong>','LV dysfunction common, but can <strong>mimic HCM, DCM, RCM, ARVC</strong>']]),
['myocarditis-ecg','myocarditis-enzymes','myocarditis-cxr','myocarditis-echo'],
[q('Which ECG findings are typical of myocarditis?','Tachycardia and nonspecific ST and T wave changes',['Epsilon waves in V1','Dagger-like Q waves','Low QRS voltage with bi-atrial enlargement'],'Myocarditis ECG: tachycardia with nonspecific ST/T changes.'),
q('Cardiac enzymes in myocarditis are typically:','Positive (elevated)',['Always normal','Only elevated after 6 months','Not measurable'],'Positive cardiac enzymes reflect myocyte necrosis.')],
[q('A 25-year-old with recent viral symptoms has sinus tachycardia with nonspecific ST-T changes, an elevated troponin, and LV dysfunction on echo. These workup findings best support:','Myocarditis',['Athlete&rsquo;s heart','Restrictive cardiomyopathy from radiation','ARVC'],'Tachycardia, nonspecific ST/T changes, positive enzymes, LV dysfunction after viral illness = myocarditis.')]),
c('Supportive care and HF management',
tbl(['Area','Management'],[
['<strong>Supportive care</strong>','<strong>Hospitalize</strong> and monitor for HF/arrhythmias; <strong>rest</strong>; <strong>NSAIDs</strong>; <strong>oxygen</strong>; &plusmn; antibiotics'],
['HF management','Restrict fluids; diuretics (acutely); ACE inhibitors or beta-blockers (ongoing)'],
['Anticoagulation','If <strong>embolic event</strong> (e.g., PE) or <strong>mural thrombus</strong> on echo'],
['Severe cases','Arrhythmia suppression, hemodynamic support, vasopressors, inotropes, IABP'],
['Prolonged course','May need <strong>heart transplant</strong>']]),
['supportive-care','myocarditis-hf-management','myocarditis-anticoagulation','severe-support'],
[q('Which list matches supportive care for myocarditis in the lecture?','Hospitalize and monitor, rest, NSAIDs, oxygen, &plusmn; antibiotics',['Outpatient competitive exercise training','Benzodiazepines and prompt delivery','Alcohol septal ablation and ICD for all'],'Supportive care: hospitalize/monitor, rest, NSAIDs, O2, &plusmn; antibiotics.'),
q('When is anticoagulation necessary in myocarditis?','If an embolic event or mural thrombus on echo is found',['In every patient regardless of findings','Only if the ECG is normal','Never'],'Anticoagulate for embolic events (e.g., PE) or mural thrombi.')],
[q('A patient admitted with viral myocarditis has an LV mural thrombus on echo. Besides supportive care, what is indicated?','Anticoagulation',['Alcohol septal ablation','Benzodiazepines','Prompt delivery'],'Mural thrombus or embolic event &rarr; anticoagulation.'),
q('A stable patient is diagnosed with myocarditis after a viral illness. What is the initial disposition?','Hospitalize and monitor closely for HF and arrhythmias',['Discharge with return-to-play clearance','Immediate heart transplant','Outpatient follow-up in 6 months'],'Supportive care starts with hospitalization and close monitoring.')])
]),

/* ---------------- 14 PPCM ---------------- */
s('14-ppcm','14. Peripartum cardiomyopathy (PPCM)','Objective 9 (PPCM). Slides 78&ndash;85.',[
c('PPCM onset, EF, and diagnostic criteria',
ul(['Rare CM acquired in <strong>late pregnancy or early postpartum</strong> (most common in the <strong>1st month after delivery</strong>)','<strong>LV systolic dysfunction, EF &le; 45%</strong>','<strong>LV frequently dilated</strong> &mdash; presents like DCM','Etiology unknown'])+
'<p><strong>Diagnosis requires all 3:</strong></p>'+
ul(['HF toward the <strong>end of pregnancy or within 6 months of delivery</strong>','<strong>No other identifiable cause</strong> of HF','<strong>LVEF &le; 45%</strong>']),
['ppcm-onset','ppcm-ef-45','ppcm-lv-dilation','ppcm-criteria'],
[q('What ejection fraction threshold defines PPCM?','LVEF &le; 45%',['LVEF &le; 40%','LVEF &le; 25%','LVEF &ge; 55% with diastolic dysfunction'],'PPCM: LVEF &le; 45% (DCM uses &le; 40%).'),
q('When does PPCM most commonly occur?','During the first month after delivery',['In the first trimester','Only during labor','More than 2 years after delivery'],'Late pregnancy or early postpartum, most commonly the 1st month after delivery.'),
q('The LV in PPCM is frequently:','Dilated',['Asymmetrically hypertrophied','Replaced by fat','Normal in size with large atria'],'PPCM frequently dilates the LV and presents like DCM.')],
[q('Four months after delivery, a woman develops HF with LVEF 40% and no other identifiable cause. Does she meet PPCM criteria?','Yes: HF within 6 months of delivery, no other cause, LVEF &le; 45%',['No: PPCM must occur during the first trimester','No: PPCM requires EF &le; 25%','No: PPCM requires asymmetric septal hypertrophy'],'All 3 criteria are met.')]),
c('PPCM risk factors',
ul(['Age <strong>over 30</strong>','<strong>African descent</strong>','<strong>Multiple gestation</strong>','History of <strong>preeclampsia, eclampsia, or postpartum HTN</strong>','<strong>Maternal cocaine use</strong>','Prolonged <strong>oral beta-agonist tocolysis</strong> (e.g., <strong>terbutaline</strong>)'])+
mn('<strong>&ldquo;MOTHER C&rdquo;</strong>: <strong>M</strong>ultiples, <strong>O</strong>lder (over 30), <strong>T</strong>ocolytics (terbutaline), <strong>H</strong>ypertensive disorders (preeclampsia/eclampsia), <strong>E</strong>thnicity (African descent), <strong>R</strong>ecreational <strong>C</strong>ocaine.'),
['ppcm-age-30','ppcm-african-descent','ppcm-multiple-gestation','ppcm-preeclampsia','ppcm-cocaine','ppcm-terbutaline'],
[q('Which tocolytic exposure is a PPCM risk factor?','Prolonged oral beta-adrenergic agonist therapy such as terbutaline',['Short-term magnesium sulfate','Antenatal corticosteroids','Oral iron supplements'],'Prolonged tocolysis with oral beta-agonists (terbutaline) is a risk factor.'),
q('Which is a risk factor for PPCM?','History of preeclampsia',['Age under 20 as the main factor','Singleton first pregnancy as the main factor','Gestational diabetes as the listed factor'],'Hx preeclampsia, eclampsia, or postpartum HTN is a listed risk factor.')],
[q('Which pregnant patient has the most PPCM risk factors?','A 35-year-old of African descent with twins and preeclampsia',['A 22-year-old with a singleton pregnancy and no complications','A 25-year-old with mild nausea in the first trimester','A 28-year-old with a singleton pregnancy and normal BP'],'Age over 30, African descent, multiple gestation, and preeclampsia are all risk factors.')]),
c('PPCM clinical presentation and workup',
ul(['Dyspnea, cough, orthopnea, PND, pedal edema','Diagnosis often <strong>delayed</strong> because symptoms overlap <strong>normal pregnancy</strong> (fatigue, SOB, swollen feet)','Exam: <strong>elevated JVP, displaced apical impulse, S3, MR murmur</strong>'])+
'<p>Workup <strong>must include echo and ECG</strong>; BNP, CXR, cardiac MRI, cath, and biopsy in selected cases.</p>',
['ppcm-symptoms','ppcm-delayed-dx','ppcm-exam','ppcm-workup'],
[q('Why is PPCM diagnosis often delayed?','Its symptoms overlap normal pregnancy symptoms such as fatigue, SOB, and foot swelling',['It never causes symptoms','It only causes rash','It is only detectable by biopsy'],'Normal pregnancy symptoms can mask early PPCM.'),
q('Which exam findings suggest PPCM?','Elevated JVP, displaced apical impulse, S3, mitral regurgitation murmur',['Harsh systolic murmur that increases with Valsalva','Epsilon waves and RV dilation','Pericardial knock and Kussmaul sign'],'PPCM exam resembles DCM: &uarr; JVP, displaced apex, S3, MR.'),
q('Which tests must be part of the PPCM workup?','Echo and ECG',['Cardiac MRI and biopsy','Coronary angiogram and stress test','CXR only'],'Workup needs echo and ECG; others in selected cases.')],
[q('Two weeks postpartum, a woman reports she must sleep upright and wakes at night breathless; her provider attributed her swollen feet to pregnancy. Exam: elevated JVP and an S3. Best next step?','Echo and ECG to evaluate for PPCM',['Reassure that these are normal postpartum symptoms','Start a benzodiazepine','Order a lumbar puncture'],'Orthopnea, PND, JVP and S3 postpartum suggest PPCM; echo + ECG are required.')]),
c('PPCM treatment',
'<p>Similar to other DCM therapy, <strong>modified for safety of mother and unborn/breastfeeding baby</strong>:</p>'+
hy('<strong>Avoid ACE inhibitors and ARBs</strong> in pregnancy and breastfeeding.')+
'<p><strong>Prompt delivery</strong> is suggested for PPCM with <strong>advanced HF and hemodynamic instability</strong>.</p>',
['ppcm-dcm-like-tx','ppcm-avoid-acei-arb','ppcm-prompt-delivery'],
[q('Which drugs should be avoided when treating PPCM during pregnancy or breastfeeding?','ACE inhibitors and ARBs',['Beta-blockers','Loop diuretics as a class','All heart failure medications'],'ACEi/ARBs are avoided in pregnancy and breastfeeding.'),
q('When is prompt delivery suggested in PPCM?','Advanced HF with hemodynamic instability',['Any PPCM diagnosis at any gestational age, even when stable','Mild fatigue only','Never; delivery worsens PPCM'],'Prompt delivery is suggested with advanced HF and hemodynamic instability.')],
[q('A breastfeeding mother with PPCM is being started on HF therapy. Which medication should be avoided?','Lisinopril',['Metoprolol','Furosemide','Digoxin'],'ACEi/ARBs (e.g., lisinopril) are avoided in pregnancy/breastfeeding.'),
q('At 36 weeks, a patient with PPCM becomes hypotensive with worsening pulmonary edema despite therapy. What is suggested?','Prompt delivery',['Start lisinopril','Continue pregnancy to term with observation','Begin alcohol septal ablation'],'Advanced HF with hemodynamic instability &rarr; prompt delivery.')]),
c('PPCM prognosis and future pregnancies',
tbl(['Outcome','Proportion'],[
['Spontaneous recovery','<strong>About half</strong>'],
['Persistent LV dysfunction, HF, early death','<strong>About half</strong>'],
['Fatal','<strong>1 in 10</strong>']])+
hy('Advise <strong>avoiding future pregnancies</strong>: risk of <strong>recurrence</strong>, HF progression, and <strong>maternal death</strong>.'),
['ppcm-half-recover','ppcm-mortality','ppcm-future-pregnancy'],
[q('What fraction of PPCM patients spontaneously recover?','About half',['Nearly all','About 1 in 10','None'],'Half recover; the other half have persistent dysfunction, HF, early death.'),
q('About what proportion of PPCM diagnoses are fatal?','1 in 10',['1 in 2','1 in 100','1 in 1000'],'1 in 10 PPCM diagnoses are fatal.')],
[q('A woman recovering from PPCM asks about having another baby. Best counseling?','Avoid future pregnancies because of recurrence, HF progression, and maternal death risk',['Future pregnancy is safe once EF normalizes','Wait 6 months, then pregnancy carries no added risk','Recurrence only happens with twins'],'Patients are advised to avoid future pregnancies.')])
]),

/* ---------------- 15 Tako-tsubo ---------------- */
s('15-takotsubo','15. Tako-tsubo cardiomyopathy','Objective 9 (Tako-tsubo). Slides 86&ndash;91.',[
c('Common names and origin',
ul(['AKA <strong>&ldquo;stress-induced cardiomyopathy&rdquo;</strong> and <strong>&ldquo;broken-heart syndrome&rdquo;</strong>','First described in <strong>Japan</strong> (1990s); named for the <strong>tako-tsubo</strong>, a pot used to trap octopus, which the ballooned LV resembles']),
['common-names','octopus-pot'],
[q('Which are common names for Tako-tsubo cardiomyopathy?','Stress-induced cardiomyopathy and broken-heart syndrome',['Athlete&rsquo;s heart and athletic LVH','Ischemic and valvular cardiomyopathy','Giant-cell and Chagas cardiomyopathy'],'AKA stress-induced CM and broken-heart syndrome.')],
[q('A family member says their mother was told she had &ldquo;broken-heart syndrome.&rdquo; Which cardiomyopathy is this?','Tako-tsubo cardiomyopathy',['Peripartum cardiomyopathy','Restrictive cardiomyopathy','Arrhythmogenic right ventricular cardiomyopathy'],'Broken-heart syndrome = Tako-tsubo (stress-induced) CM.')]),
c('The LV dysfunction: transient apical ballooning',
ul(['<strong>Transient LV dysfunction</strong> without significant CAD','<strong>Impaired apical contractility</strong> with <strong>hypercontractile LV base</strong> &rarr; <strong>apical ballooning</strong>','Ventriculography (slide 89): akinesis of anterolateral, apical, and inferior apical segments with hyperdynamic basal segments']),
['transient-lv-dysfunction','apical-ballooning','hypercontractile-base'],
[q('What LV dysfunction occurs in Tako-tsubo cardiomyopathy?','Transient apical ballooning with hypercontractile base',['Permanent global LV dilation with EF &le; 40%','Asymmetric septal hypertrophy with LVOT obstruction','Isolated RV dilation with fatty infiltrate'],'Transient impaired apical contraction with hyperdynamic base.'),
q('Is the LV dysfunction in Tako-tsubo permanent?','No, it is transient',['Yes, it always progresses to DCM','Yes, it requires transplant','It affects only the RV'],'Tako-tsubo causes transient LV dysfunction.')],
[q('A left ventriculogram shows akinesis of the apical segments while the basal segments contract vigorously, and the coronaries are clean. Which diagnosis fits?','Tako-tsubo cardiomyopathy',['Hypertrophic cardiomyopathy','Restrictive cardiomyopathy','Dilated cardiomyopathy'],'Apical akinesis with hyperdynamic base = apical ballooning of Tako-tsubo.')]),
c('Precipitating events and mechanism',
'<p>Precipitated by <strong>acute emotional or psychological distress</strong>.</p>'+
'<p><strong>Surge of catecholamines &rarr; coronary artery spasm</strong> &rarr; presents like a <strong>STEMI</strong>.</p>',
['emotional-distress','catecholamine-surge','stemi-mimic'],
[q('What typically precipitates Tako-tsubo cardiomyopathy?','Acute emotional or psychological distress',['Sustained endurance training','Late pregnancy','Chest radiation therapy'],'Acute emotional/psychological stress is the trigger.'),
q('What is the mechanism of Tako-tsubo cardiomyopathy described in the lecture?','Catecholamine surge causing coronary artery spasm',['Desmosomal protein mutation','Sarcomere protein mutation','Amyloid infiltration'],'A catecholamine surge causes coronary spasm; it presents like a STEMI.')],
[q('A 68-year-old woman develops crushing chest pain and ST elevation hours after learning of her husband&rsquo;s sudden death. Which cardiomyopathy should be on the differential once the acute MI pathway is started?','Tako-tsubo cardiomyopathy',['Arrhythmogenic right ventricular cardiomyopathy','Peripartum cardiomyopathy','Hypertrophic cardiomyopathy'],'Acute emotional distress + STEMI-like presentation = Tako-tsubo.')]),
c('Cardiac catheterization findings',
'<p>Acutely, treat as a <strong>STEMI</strong> (clinical picture, EKG, elevated troponin).</p>'+
hy('Cardiac cath shows <strong>LV wall motion abnormalities</strong> but <strong>no significant CAD</strong>.')+
'<p>Some develop acute complications (<strong>cardiogenic shock, acute HF</strong>) requiring intensive care.</p>',
['treat-as-stemi','cath-no-cad','acute-complications'],
[q('What does cardiac catheterization show in Tako-tsubo cardiomyopathy?','LV wall motion abnormalities without significant CAD',['Total occlusion of the LAD','Severe three-vessel CAD','Coronary artery fistula'],'Cath: wall motion abnormality, no significant CAD.'),
q('How is a patient with suspected Tako-tsubo managed in the acute setting before cath?','As a STEMI',['As stable angina with outpatient follow-up','With alcohol septal ablation','With prompt delivery'],'Because it presents like a STEMI (EKG, troponin), it is first treated as one.')],
[q('A woman with chest pain, ST elevation, and elevated troponin after a stressful event undergoes emergent cath. Which result supports Tako-tsubo?','No significant coronary disease with apical wall motion abnormality',['Ruptured plaque with thrombus in the LAD','Severe left main stenosis','Ruptured papillary muscle'],'No significant CAD + LV wall motion abnormality = Tako-tsubo.')]),
c('Recovery and the role of benzodiazepines',
'<p>Survivors of the acute episode typically <strong>recover LV function within 4 weeks</strong>.</p>'+
hy('<strong>Benzodiazepines</strong> &mdash; <strong>diazepam</strong> and <strong>lorazepam</strong> &mdash; may be used <strong>once the patient is stable</strong> to reduce stress and <strong>decrease catecholamine release</strong>.'),
['recovery-4-weeks','benzodiazepines','diazepam-lorazepam'],
[q('Why are benzodiazepines used in Tako-tsubo cardiomyopathy?','To reduce stress and decrease catecholamine release once the patient is stable',['To treat LVOT obstruction acutely','To dissolve coronary thrombus','To prevent recurrence of PPCM'],'Benzodiazepines reduce stress and catecholamine release after stabilization.'),
q('Which generic benzodiazepines are named for Tako-tsubo cardiomyopathy?','Diazepam and lorazepam',['Metoprolol and atenolol','Verapamil and diltiazem','Alprazolam and buspirone'],'Lecture examples: diazepam and lorazepam.'),
q('Within what time frame do survivors typically recover LV function in Tako-tsubo?','Within 4 weeks',['Within 24 hours','After 1 year','Never'],'LV function typically recovers within 4 weeks.')],
[q('A patient with Tako-tsubo cardiomyopathy is now hemodynamically stable and very anxious about her loss. Which medication may be used to reduce catecholamine release?','Lorazepam',['Dobutamine','Nifedipine','Terbutaline'],'Once stable, a benzodiazepine (diazepam or lorazepam) reduces stress/catecholamines.'),
q('When should a benzodiazepine be started in Tako-tsubo cardiomyopathy?','Once the patient is stable',['During cardiogenic shock in place of hemodynamic support','Before cardiac catheterization to replace the STEMI workup','Never'],'Benzodiazepines are used once the patient is stable.')]),
c('Risk of recurrence',
hy('<strong>2% yearly risk of recurrence</strong>.')+
'<p>Some specialists prefer <strong>lifelong beta-blockers</strong>, but efficacy is unknown.</p>',
['recurrence-2-percent','lifelong-bb-uncertain'],
[q('What is the yearly risk of recurrence of Tako-tsubo cardiomyopathy?','About 2% per year',['About 50% per year','About 20% per year','0%; it never recurs'],'2% yearly recurrence risk.'),
q('What is known about lifelong beta-blockers after Tako-tsubo?','Some specialists use them, but efficacy is unknown',['They are proven to eliminate recurrence','They are contraindicated in all patients','They cure the disease within 24 hours'],'Some prefer lifelong BB; efficacy is unknown.')],
[q('A patient who recovered from Tako-tsubo cardiomyopathy asks whether it can happen again. Best answer?','Yes; there is about a 2% yearly risk of recurrence',['No; it never recurs','Yes; recurrence is nearly certain within a year','Only during future pregnancies'],'Recurrence risk is about 2% per year.')])
])

];
})();
