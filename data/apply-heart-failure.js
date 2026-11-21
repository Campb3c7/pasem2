/* Heart Failure Apply final (Anna, 2026-11-21): short patient cases across the whole deck (what is it, what to order, what to do).
   F(slide, prompt, answer, [3 wrong], why). Ids "heart-failure|apply|<i>": only append. */
(function () {
  "use strict";
  var F = SlideStudy.F;
  SlideStudy.apply("heart-failure", [
    /* LO 1-3 */
    F(5, "A 60-year-old man with prior MI asks what most likely led to his HF. What do you say?", "Coronary artery disease, the most common HF presentation in men", ["Hypertension, the most common in men", "Anemia", "Valve disease"], "CAD-associated HF is the most common presentation in men."),
    F(5, "A 66-year-old woman with 20 years of poorly controlled BP develops HF. What is the likely precursor?", "Hypertension", ["CAD", "Alcohol", "Myocarditis"], "HTN-associated HF is the most common presentation in women."),
    F(6, "A clinic serves a mostly Black community with high rates of uncontrolled HTN and DM. What HF risk should it plan for?", "Higher HF risk tied to HTN and DM", ["Lower HF risk", "No difference", "Only pediatric HF"], "Black patients have the highest HF risk, largely from HTN and DM."),
    F(8, "An HF patient was just discharged for the first time and asks if she'll be back. What does the data say?", "Many are readmitted; 40% are hospitalized 4 or more times", ["No one is readmitted", "Only 1% are readmitted", "Everyone is readmitted weekly"], "85% are hospitalized at least once and 40% at least four times."),

    /* LO 4 */
    F(17, "A patient with HF is given atropine and his HR rises with SV unchanged. What happens to CO?", "It rises", ["It falls", "No change", "It stops"], "CO equals HR times SV, so a higher HR raises CO."),
    F(16, "A dehydrated patient gets a fluid bolus and his BP improves. Which principle explains it?", "Frank-Starling: more filling raises stroke volume", ["Afterload reduction", "Chronotropic incompetence", "Natriuresis"], "More preload stretches the ventricle and raises SV."),
    F(18, "A patient's SVR doubles from severe vasoconstriction. What happens to the heart's work?", "Afterload rises, so it must generate more force", ["Afterload falls", "Preload falls only", "Nothing changes"], "SVR sets afterload, the force needed to eject."),

    /* LO 5a */
    F(23, "A man with new HF has a resting HR of 110 and cool hands. Which compensation explains it?", "Sympathetic activation", ["Natriuretic peptides", "Parasympathetic activation", "Remodeling"], "SNS activation causes tachycardia and vasoconstriction."),
    F(25, "A patient's HF lowers renal blood flow and he retains sodium and water. Which system is this?", "RAAS", ["SNS only", "Natriuretic peptides", "Insulin"], "Low renal flow activates RAAS, retaining sodium and water."),
    F(27, "Why does an ACE inhibitor slow remodeling in a patient with HFrEF?", "It blocks angiotensin II's hypertrophy and fibrosis effects", ["It raises BNP", "It slows the heart", "It is a diuretic"], "Angiotensin II drives myocyte hypertrophy and fibrosis (standard teaching link)."),

    /* LO 5b */
    F(29, "A patient with severe HF has a sodium of 124 with clear signs of fluid overload. Which receptor is driving the water retention?", "ADH V2 receptors in the collecting duct", ["V1 receptors in vessels", "Beta-1 receptors", "ANP receptors"], "V2 stimulation reabsorbs free water, diluting sodium."),
    F(32, "A patient's atria stretch with fluid overload. Which hormone fights back with diuresis?", "ANP", ["ADH", "Aldosterone", "Angiotensin II"], "Atrial stretch releases ANP, causing natriuresis and diuresis."),
    F(33, "A long-term HF patient on furosemide and lisinopril has a BNP of 80. Does this rule out HF?", "No, his medications lower BNP", ["Yes, HF is gone", "Yes, BNP is always high in HF", "Only if he is young"], "Diuretics and ACEi lower BNP in chronic HF."),

    /* LO 6 */
    F(43, "A woman with hemoglobin 6 develops HF with a dilated LV. What mechanism does anemia use?", "Volume overload raising preload", ["Pressure overload", "Impeded expansion", "Delayed relaxation"], "Anemia is a volume overload cause of systolic dysfunction."),
    F(43, "A man with severe aortic stenosis develops systolic dysfunction. What mechanism is it?", "Pressure overload raising afterload", ["Volume overload", "Infiltration", "Pericardial constriction"], "Valvular stenosis generates pressure overload."),
    F(46, "A patient with a large pericardial effusion has signs of HF and normal EF. What type of dysfunction?", "Diastolic, from impeded expansion", ["Systolic from low contractility", "No dysfunction", "High output"], "Effusion impedes ventricular expansion, a diastolic cause."),
    F(45, "A patient with diastolic dysfunction is started on a beta blocker and his exercise tolerance improves. Why?", "Slower HR lengthens filling time", ["It raises EF", "It raises afterload", "It is a diuretic"], "Lowering HR improves diastolic filling."),

    /* LO 7 */
    F(51, "A patient with an inferior MI has JVD, hypotension and clear lungs. What is failing?", "The right ventricle (RV infarction)", ["The left ventricle only", "The mitral valve", "Nothing"], "RV infarction causes right-sided failure with clear lungs."),
    F(51, "A 30-year-old with a large untreated VSD develops right heart failure. Which listed cause is it?", "A congenital defect", ["Cor pulmonale from COPD", "Left MI", "Tricuspid stenosis"], "Congenital defects like VSD cause RV dysfunction."),
    F(53, "An HF patient has BP 100/88. What does this narrow pulse pressure suggest?", "Low stroke volume from left ventricular failure", ["Normal", "Aortic regurgitation", "Fever"], "A pulse pressure of 12 is narrow, reflecting low SV in left failure."),
    F(50, "A patient with right HF has early satiety, abdominal pain and weight loss. Why?", "GI tract congestion", ["Gastric cancer", "Gallstones", "Peptic ulcer"], "Right-sided congestion of the gut causes these symptoms."),
    F(54, "A patient with severe mitral regurgitation for years now has JVD and ascites. What happened?", "Left heart failure progressed to right heart failure", ["He developed cirrhosis only", "A new PE", "Nothing related"], "Worsening left failure and pulmonary congestion produce right failure."),

    /* LO 8 */
    F(59, "A 75-year-old with HFpEF can't raise her HR above 90 on the treadmill and stops early. What is this?", "Chronotropic incompetence", ["Normal aging only", "Beta blocker overdose always", "Atrial flutter"], "Inability to raise HR with exercise is chronotropic incompetence, a hallmark of HFpEF."),
    F(58, "An echo shows thick LV walls, a small cavity and EF 65% in a hypertensive patient with dyspnea. Which remodeling and type?", "Concentric remodeling, HFpEF", ["Eccentric remodeling, HFrEF", "Normal heart", "Dilated cardiomyopathy"], "Concentric remodeling with preserved EF is HFpEF."),
    F(56, "An echo shows a dilated, elongated LV with EF 28% in a patient with frequent PVCs. Which remodeling and type?", "Eccentric remodeling, HFrEF", ["Concentric remodeling, HFpEF", "Normal heart", "HCM"], "Eccentric remodeling with low EF is HFrEF, prone to arrhythmias."),

    /* symptoms */
    F(61, "A 68-year-old says he just 'slowed down' and stopped golfing this year. What should you ask about?", "Changes in functional capacity, looking for HF", ["His golf score only", "Nothing, it's aging", "His diet only"], "HF dyspnea and fatigue fly under the radar, so ask about functional changes."),
    F(64, "A man wakes nightly gasping 2 hours after falling asleep and opens a window. What symptom is this?", "Paroxysmal nocturnal dyspnea", ["Orthopnea", "Panic disorder", "GERD"], "Waking suddenly with air hunger after time supine is PND."),
    F(66, "An HF patient is always thirsty despite fluid restriction. What drives it?", "ADH activation", ["Diabetes insipidus", "Low glucose", "Hyperthyroidism"], "Thirst in HF is associated with ADH activation."),

    /* exam */
    F(68, "An HF patient's right base is dull to percussion with absent breath sounds. What do you expect after diuresis?", "The effusion is slowly reabsorbed", ["It needs surgery always", "It will worsen", "It disappears in 5 minutes"], "Pleural effusions are reabsorbed slowly as diuresis begins."),
    F(71, "A woman with years of leg edema has dark, red, firm skin over both shins that now weeps. What is it?", "Stasis dermatitis", ["Cellulitis only", "Psoriasis", "Eczema herpeticum"], "Chronic edema causes stasis dermatitis with skin breakdown."),
    F(73, "A tachycardic patient with EF 20% has an extra sound after S2. What does it predict with high JVP?", "Higher risk of death and readmission", ["A benign finding", "Normal filling pressures", "Recovery"], "S3 with elevated JVP is associated with death and recurrent hospitalization."),
    F(74, "A 70-year-old hypertensive with EF 60% has a soft sound just before S1. What does it point to?", "HFpEF with a stiff ventricle", ["HFrEF", "Mitral stenosis", "Pericarditis"], "S4 is the specific exam finding of HFpEF."),
    F(72, "A man with EF 25% has a PMI in the 6th intercostal space at the anterior axillary line. What is it?", "Cardiomegaly with a displaced PMI", ["Normal", "Pneumothorax", "Dextrocardia"], "A laterally displaced, sustained PMI suggests LV enlargement."),

    /* LO 9 */
    F(79, "A patient has PND, rales and night cough. Do Framingham criteria make the diagnosis?", "Yes, 2 major criteria", ["No, they are all minor", "No, rales are minor", "Only with a biopsy"], "PND and rales are both major criteria, so two majors make the diagnosis."),
    F(79, "A patient has an S3, leg edema and tachycardia of 130. Do Framingham criteria make the diagnosis?", "Yes, 1 major and 2 minor", ["No, all are minor", "No, needs 3 major", "Only with BNP over 900"], "S3 is major, and leg edema and HR over 120 are minor."),
    F(80, "An HF patient is short of breath only when shoveling snow. Which NYHA class?", "Class II", ["Class I", "Class III", "Class IV"], "Dyspnea with exertion like shoveling is class II."),
    F(80, "A bedbound HF patient is short of breath at rest. Which NYHA class?", "Class IV", ["Class III", "Class II", "Class I"], "Symptoms at rest are class IV."),
    F(81, "A patient with symptomatic HFrEF has recurrent admissions and symptoms at rest despite max therapy. Which AHA stage?", "Stage D", ["Stage C", "Stage B", "Stage A"], "Refractory symptoms despite max therapy are stage D."),
    F(81, "A woman who got anthracycline chemo has a normal echo and no symptoms. Which AHA stage?", "Stage A", ["Stage B", "Stage C", "Not at risk"], "Cardiotoxin exposure without structural disease is stage A."),

    /* LO 10a */
    F(82, "A new HF patient's EKG shows a QTc of 510. Why does it matter?", "Many HF therapies can prolong it further and cause lethal arrhythmias", ["It diagnoses HF", "It means low EF", "It does not matter"], "QT should be noted because many therapies prolong it."),
    F(83, "A CXR shows a heart 60% of the chest width with Kerley lines. What does it suggest?", "Cardiomegaly with interstitial edema", ["Normal film", "Pneumothorax", "COPD only"], "Cardiothoracic ratio over 50% with Kerley lines fits HF."),
    F(86, "A new HFrEF patient has a hemoglobin of 9 and low ferritin. Why does finding this matter?", "Early treatment may reverse it", ["It proves HF", "It is irrelevant", "It means he needs a transplant"], "Anemia and iron deficiency in systolic HF may be reversed with early treatment."),
    F(86, "An HF patient on high-dose furosemide has a sodium of 128. What two things can explain it?", "Advanced HF or excessive diuretic use", ["High salt intake only", "Dehydration from fever only", "Thyroid storm"], "Hyponatremia marks advanced HF or over-diuresis."),
    F(88, "A 35-year-old with dyspnea has an NT-proBNP of 600. Is HF likely?", "Yes, over 450 is highly sensitive and specific under 50", ["No, it must be over 900", "No, BNP is useless", "Only if over 5,000"], "In younger patients the cutoff is 450 pg/mL."),
    F(89, "A patient with HFrEF and no CAD has a troponin slightly above normal but below MI criteria. What is the likely reason?", "Volume overload and high filling pressures", ["An acute STEMI", "Lab error", "Kidney stone"], "Low-level troponin is common in systolic HF from overload."),
    F(85, "A stable HF patient's symptoms suddenly worsen and you're thinking of changing therapy. Which test do you repeat?", "Echocardiogram", ["Genetic testing", "Calcium score", "Endomyocardial biopsy"], "Repeat echo whenever a clinical change would change management."),

    /* LO 10b */
    F(93, "A 62-year-old diabetic smoker with new HFrEF has an intermediate pretest CAD probability. What next?", "Coronary angiography", ["Genetic testing", "Endomyocardial biopsy", "No further testing"], "Intermediate or high CAD probability calls for angiography."),
    F(94, "A patient with HF and low-voltage EKG with thick walls has suspected amyloid. Which imaging test fits first?", "Cardiac MRI", ["Exercise ECG", "Calcium score", "Holter"], "Cardiac MRI evaluates infiltrative cardiomyopathies."),
    F(95, "A young patient with fulminant HF, fever and VT has suspected giant cell myocarditis. Which test confirms it?", "Endomyocardial biopsy", ["Genetic testing", "Stress echo", "Calcium score"], "Biopsy is still used for giant cell myocarditis."),
    F(92, "A hypertensive patient with CAD and exertional dyspnea needs filling pressures assessed during exercise. Which test?", "Stress echocardiogram", ["Resting EKG", "Calcium score", "Genetic testing"], "Stress echo evaluates diastolic function and filling pressures during exercise."),
    F(96, "A 19-year-old's father has arrhythmogenic right ventricular dysplasia. What test identifies her risk?", "Genetic testing", ["Cardiac cath", "Endomyocardial biopsy", "Holter only"], "Genetic testing identifies at-risk relatives."),

    /* LO 11 */
    F(100, "An HF patient eats 4,000 mg of sodium daily. What target do you give?", "1,500 mg per day", ["5,000 mg per day", "No limit", "100 mg per day"], "The AHA recommends 1,500 mg/day sodium."),
    F(100, "An HF patient drinks 4 L of fluid daily and is edematous. What do you advise?", "Limit fluid to 1-2 L per day", ["Drink 6 L per day", "Stop drinking entirely", "No change"], "Fluid restriction is 1-2 L/day max."),
    F(99, "An HF patient drinks 6 beers a day. What do you advise?", "Stop alcohol, a cardiotoxin", ["Switch to wine", "No change", "Drink more water with it"], "Alcohol is a cardiotoxin to avoid."),
    F(103, "An NYHA IV patient short of breath at rest asks to start cardiac rehab. What do you say?", "Not now, rehab is for NYHA I-III", ["Start today at full intensity", "Run a marathon first", "Rehab is for everyone"], "Cardiac rehab is not indicated in NYHA class IV."),
    F(103, "An HFpEF patient wants to join cardiac rehab. What caution applies?", "Exercise intolerance may require modifying the program", ["It is contraindicated", "No caution needed", "Only weightlifting"], "HFpEF patients still benefit, but the program may need modifying."),

    /* LO 13a */
    F(107, "A newly diagnosed stage C HFrEF patient asks which drug improves survival first. Which class do you start?", "An ACE inhibitor", ["Digoxin", "A loop diuretic only", "Milrinone"], "ACEi are first line and improve survival."),
    F(109, "A patient starts lisinopril and a week later his potassium is 5.9 and creatinine rose. Which side effects are these?", "Hyperkalemia and azotemia", ["Hypokalemia and alkalosis", "Hypercalcemia", "Hyperuricemia"], "ACEi cause hyperkalemia and azotemia."),
    F(109, "A patient with bilateral renal artery stenosis needs HF therapy. Which drug class is contraindicated?", "ACE inhibitors", ["Loop diuretics", "Beta blockers", "SGLT2 inhibitors"], "Renal artery stenosis contraindicates ACEi."),
    F(113, "A patient on BiDil wants a prescription for tadalafil. What do you tell him?", "It is contraindicated with the nitrate in BiDil", ["Fine to combine", "Only half dose", "Take them 1 hour apart"], "BiDil plus PDE inhibitors is contraindicated."),

    /* LO 13b */
    F(115, "A stable HFrEF patient on an ACEi and diuretic has no beta blocker. What do you add, and how?", "Carvedilol, starting low and titrating slowly", ["Propranolol at full dose", "Atenolol IV", "No beta blocker"], "HF beta blockers are titrated gradually."),
    F(116, "A patient with HFrEF and severe COPD with bronchospasm is considered for a beta blocker. What concern does the slide raise?", "Chronic pulmonary disease is a contraindication", ["None", "It will raise EF too much", "It causes cough"], "Chronic pulmonary disease is listed as a beta blocker contraindication."),
    F(120, "An HF patient on furosemide develops gout. Which side effect caused it?", "Hyperuricemia", ["Hypercalcemia", "Hyperkalemia", "Hypoglycemia"], "Loop diuretics cause hyperuricemia."),
    F(122, "An HF patient on HCTZ has a calcium of 11.2. What caused it?", "Thiazide-induced hypercalcemia", ["Furosemide", "Lisinopril", "Spironolactone"], "Thiazides raise serum calcium."),
    F(125, "A post-MI patient with EF 30% and K 4.2 is on an ACEi and BB. What can be added for outcome benefit?", "An aldosterone antagonist", ["A thiazide alone", "Digoxin first", "A CCB"], "Aldosterone antagonists improve outcomes in HF after MI."),
    F(125, "A patient on lisinopril, spironolactone and daily ibuprofen has K 6.4. What caused it?", "Spironolactone plus ACEi and NSAID raising potassium", ["Furosemide", "Too little potassium", "Lab error always"], "ACEi and NSAIDs raise hyperkalemia risk with aldosterone antagonists."),
    F(126, "A patient on amiloride develops hyperkalemia. Which class is amiloride?", "Potassium-sparing sodium channel inhibitor", ["Loop diuretic", "Thiazide", "Aldosterone antagonist"], "Amiloride directly blocks sodium channels and spares potassium."),

    /* LO 13c */
    F(128, "A patient on max-dose valsartan is still symptomatic with HFrEF. What switch reduces hospitalizations?", "Sacubitril/valsartan (Entresto)", ["Add lisinopril", "Stop all RAAS drugs", "Switch to losartan"], "An ARNI is recommended for patients tolerating max ACEi or ARB."),
    F(129, "A patient with GFR 22 asks about Entresto. What do you say?", "It is contraindicated below GFR 30", ["It is ideal", "Double the dose", "Only with dialysis"], "GFR under 30 contraindicates Entresto."),
    F(131, "An HFrEF patient on full therapy still has symptoms and AF with a fast rate. Which drug helps both, without a mortality benefit?", "Digoxin", ["Milrinone", "Diltiazem", "Verapamil"], "Digoxin gives rate control and symptom relief."),
    F(132, "An HFpEF patient is prescribed digoxin. Why is that a concern?", "Calcium influx worsens diastolic function", ["It lowers EF too much", "It causes hyperkalemia", "It causes cough"], "Digoxin should be used with caution in HFpEF."),
    F(132, "An HF patient with a history of VF is considered for digoxin. Is it appropriate?", "No, prior VT or VF is a contraindication", ["Yes, ideal", "Only at high doses", "Only with milrinone"], "Prior V-tach or V-fib contraindicates digoxin."),
    F(133, "An HF patient asks to stay on milrinone at home long term to feel better. What is the risk?", "Higher mortality from arrhythmias", ["None", "Lower mortality", "Weight gain only"], "Long-term non-digoxin inotropes increase mortality."),
    F(135, "An HFrEF patient on max beta blocker in sinus rhythm has a HR of 68. Will ivabradine lower mortality?", "No, benefit is only when HR is over 75", ["Yes, always", "Only in AF", "Only in HFpEF"], "Ivabradine shows no mortality benefit with HR under 75."),
    F(137, "An HFrEF patient on dapagliflozin has repeated yeast infections. Which side effect is this?", "Urinary/groin infections from SGLT2 inhibitors", ["Loop diuretic effect", "ACEi effect", "Digoxin toxicity"], "SGLT2 inhibitors raise urinary and groin infection risk."),

    /* LO 11-12 */
    F(142, "A homebound HF patient keeps missing doses and gaining weight. Which program helps?", "Home health or visiting nurses", ["Cardiac surgery", "More ED visits", "Stopping all meds"], "Disease management programs include home health and visiting nurses."),
    F(143, "A post-MI HF patient wants to go back to his warehouse job. Which program helps him do it safely?", "Cardiac rehab", ["Hospice", "Dialysis", "Endomyocardial biopsy"], "Cardiac rehab supports return to work and normal activities."),
    F(144, "A 70-year-old on Medicare asks if cardiac rehab is covered. What do you say?", "Medicare covers at least one round if she qualifies", ["Never covered", "Only private insurance pays", "It is always free"], "Medicare pays for at least one round pending qualifying factors."),

    /* stages A-B */
    F(146, "A 45-year-old with LDL 190, obesity and HTN but a normal echo asks what to do. Which plan?", "Lifestyle changes, ACEi/ARB for HTN, statin", ["Loop diuretic", "ICD", "Digoxin"], "Stage A treatment is lifestyle, HTN control and statin therapy."),
    F(148, "A patient had an MI with EF 35%, no symptoms, and nonsustained VT. Which device may be indicated?", "ICD", ["IABP", "LVAD", "No device ever"], "Stage B patients with ventricular arrhythmia history may need an ICD."),

    /* stage C */
    F(153, "An HFpEF patient with K 5.4 needs diuresis. What do you use?", "A low-dose loop or thiazide with close monitoring", ["Spironolactone", "High-dose IV loop", "No diuretic ever"], "When K prevents potassium sparers, low-dose loops or thiazides are used."),
    F(155, "An HFpEF patient has sinus tachycardia at 115 from untreated pain. Why treat the cause quickly?", "Tachycardia causes ischemia and shortens filling", ["Tachycardia improves filling", "It raises EF", "It is harmless"], "Tachycardia raises demand and decreases filling and perfusion time."),
    F(156, "An HFpEF patient has a resting HR of 48 that won't rise with walking. What may help?", "A pacemaker for chronotropic incompetence", ["Digoxin", "More beta blocker", "Ivabradine"], "Pacemakers treat chronotropic incompetence in HFpEF."),
    F(158, "A stage C HFrEF patient on diuretic, ACEi and BB has EF 25% and a wide LBBB. Which device therapy fits?", "Cardiac resynchronization therapy", ["IABP", "TR band", "Holter"], "CRT is among the stage C HFrEF device options for dyssynchrony (standard teaching for LBBB)."),

    /* stage D */
    F(161, "A stage D HFrEF patient on full therapy still has symptoms and AF. Which drug is considered?", "Digoxin", ["Diltiazem", "Verapamil", "Flecainide"], "Stage D considers digoxin for rate control and inotropy."),
    F(162, "A stage D patient keeps reaccumulating fluid despite high-dose diuretics and poor kidneys. Which therapy can remove fluid?", "Ultrafiltration or aquapheresis", ["More salt", "Oral fluids", "Beta blocker loading"], "Ultrafiltration, aquapheresis and dialysis are stage D options."),
    F(163, "A patient in cardiogenic shock needs immediate afterload reduction support. Which device?", "Intra-aortic balloon pump", ["Holter", "ICD", "CPAP"], "IABP deflation at systole significantly decreases afterload."),
    F(165, "A 40-year-old with intractable HF and an expected survival of 4 months asks about options. What is indicated?", "Heart transplant evaluation", ["Stage A lifestyle only", "Calcium score", "Discharge without follow-up"], "Younger patients with intractable HF and life expectancy under 6 months are transplant candidates."),

    /* decompensated */
    F(167, "A stable HF patient was given 3 L of IV fluid for a UTI and now has pulmonary edema. What caused it?", "Iatrogenic overhydration", ["Natural progression only", "The antibiotic", "Low salt diet"], "Overhydration during a hospital stay is a starred cause."),
    F(167, "An HF patient was started on prednisone for COPD and now has edema and dyspnea. Why?", "Steroids retain salt", ["Prednisone is a diuretic", "COPD cured", "Coincidence"], "Steroids are salt-retaining drugs that trigger decompensation."),
    F(167, "A young man with no heart history arrives in acute HF after a meth binge. Which cause?", "Substance abuse", ["Overhydration", "Missed dialysis", "NSAIDs"], "Methamphetamine is a listed cause of acute HF."),
    F(174, "A patient with new HF has pleuritic pain, a swollen calf and a dilated RV. What is the likely cause?", "PE causing cor pulmonale", ["Left MI", "Aortic stenosis", "Myocarditis"], "PE causing acute right heart failure is a new-onset cause."),
    F(176, "A patient with suspected HF is in severe distress, and the CXR tech is 20 minutes away. What do you do?", "Start treatment now", ["Wait for the CXR", "Wait for BNP", "Send home"], "Labs and imaging should not delay treatment."),
    F(179, "A dyspneic patient's EKG shows new AF. How does this affect your suspicion for HF?", "It raises it, as AF correlates most with HF", ["It rules HF out", "No effect", "It proves COPD"], "AF has the highest correlation with an HF diagnosis."),
    F(182, "A patient in acute HF is hypoxic and anxious but cooperative with BP 160/90. What respiratory support?", "BiPAP or CPAP", ["Immediate intubation", "Nasal cannula only at 1 L", "No oxygen"], "NIV reduces intubation and lowers preload."),
    F(184, "An acute HF patient with dementia pulls at masks and is confused. Which support is contraindicated?", "Noninvasive ventilation", ["Oxygen", "IV access", "Monitoring"], "Altered mental status and dementia contraindicate NIV."),
    F(185, "A patient on BiPAP has SpO2 76% and is becoming obtunded. What next?", "Intubate", ["Continue BiPAP", "Give a beta blocker", "Discharge"], "SpO2 under 80%, altered mentation and failed NIV call for intubation."),
    F(186, "A patient with HFrEF arrives with BP 180/100 and flash pulmonary edema. What is the key first therapy?", "Vasodilator (nitroglycerin) for afterload reduction", ["Fluid bolus", "Beta blocker", "Digoxin"], "The failing heart is afterload sensitive, and vasodilators may avoid intubation."),
    F(188, "After IV nitroglycerin, BP drops to 78 and stays low after stopping it. What do you give?", "A 250-500 mL saline bolus", ["More nitroglycerin", "Furosemide 80 mg", "Metoprolol"], "Persistent hypotension suggests volume depletion or RV infarct; give a small bolus."),
    F(189, "An acute HF patient has an inferior STEMI with right-sided ST elevation. Which drug must be avoided?", "Nitroglycerin", ["Oxygen if hypoxic", "Aspirin", "IV access"], "Right ventricular infarction contraindicates nitrates."),
    F(191, "A hypertensive acute HF patient is given IV furosemide alone with no nitrates. What is the risk?", "Worse renal function and higher mortality", ["Faster recovery", "Hyperkalemia", "Bradycardia"], "Loops alone without vasodilators in HF with HTN raise renal injury and mortality."),
    F(191, "An acute HF patient with CKD stage 4 gets little urine after furosemide. Why?", "CKD patients need higher doses", ["He is cured", "Furosemide doesn't work IV", "He needs a beta blocker"], "Chronic renal failure requires higher loop doses."),
    F(192, "A furosemide-naive patient in acute HF needs a diuretic. What dose?", "Furosemide 40 mg IV", ["Furosemide 400 mg IV", "Furosemide 4 mg PO", "Bumetanide 40 mg IV"], "The recommended starting dose for a naive patient is 40 mg IV."),
    F(193, "An acute HF patient in AF with RVR. Which rate drugs are contraindicated during acute decompensation?", "Beta blockers, CCBs and digoxin", ["Oxygen", "Furosemide", "Nitroglycerin"], "BB, CCB and digoxin are contraindicated in acute HF."),
    F(194, "An acute HF patient got SL NTG and BP is 140/90 and improving. What next on the pathway?", "Consider transdermal nitroglycerin", ["IV nitroglycerin at high dose", "Stop all treatment", "Intubate"], "If BP is under 150/100 after SL and improved, consider transdermal NTG."),
    F(195, "An acute HF patient improved in the ED but lives alone, can't afford meds and has no follow-up. Where does he go?", "Admit, because of barriers to outpatient care", ["Discharge home", "Hospice", "Outpatient only"], "Caregiver support, medication access and follow-up shape disposition."),
    F(197, "An acute HF patient needs a Swan-Ganz catheter and pressors. Where is he admitted?", "ICU", ["Observation", "Home", "General clinic"], "ICU admission is for invasive monitoring or procedures."),
    F(201, "A day 3 inpatient with acute HF is euvolemic on IV furosemide. What is the next step?", "Transition to oral diuretics", ["Increase IV dose", "Stop all diuretics forever", "Start milrinone"], "Inpatient goals include weaning IV diuretics to PO."),
    F(202, "An HF patient is discharged on Friday. When should the follow-up visit be?", "By Wednesday, within 5 days", ["In 1 month", "In 6 months", "Only if symptoms return"], "Follow-up within 5 days decreases readmissions.")
  ]);
})();
