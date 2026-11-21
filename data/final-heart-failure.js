/* Heart Failure Final test (Anna, 2026-11-21): one whole-deck test, new questions, each tied to its slide, every LO block covered.
   F(slide, prompt, answer, [3 wrong], why). Ids "heart-failure|final|<i>": only append. */
(function () {
  "use strict";
  var F = SlideStudy.F;
  SlideStudy.final("heart-failure", [
    /* LO 1-3 */
    F(4, "By how much is HF prevalence projected to rise from 2012 to 2030?", "About 46%", ["About 4%", "About 146%", "It will fall"], "Projections show a 46% increase to over 8 million people."),
    F(5, "How does lifetime HF risk compare between women and men?", "It is as high in women as in men", ["Women have half the risk", "Men have ten times the risk", "Only men get HF"], "The lifetime risk is as high in women as in men."),
    F(6, "Which ethnic group ranks second for HF risk on the deck's list?", "Hispanics/Latinos", ["Asians", "Caucasians", "Pacific Islanders"], "The order is Black, Hispanic/Latino, Caucasian, Asian."),
    F(7, "About how many US deaths each year are due to heart failure?", "Over 250,000", ["About 2,500", "About 25,000", "Over 25 million"], "Greater than 250,000 deaths every year are due to HF."),
    F(8, "What is the estimated total annual cost of heart failure in the US?", "About $30.7 billion", ["About $30.7 million", "About $3 trillion", "About $307,000"], "The deck estimates $30.7 billion."),
    F(9, "Which cardiac structural finding on the risk factor list thickens the LV wall?", "Left ventricular hypertrophy", ["Mitral prolapse", "PFO", "Dextrocardia"], "LVH is listed as an HF risk factor."),

    /* LO 4 */
    F(14, "What happens to cardiac output during exercise?", "It increases", ["It decreases", "It stops", "It is unchanged"], "Output rises to meet exercise demand."),
    F(15, "What is the volume in the ventricle just before contraction called?", "End-diastolic volume", ["Stroke volume", "End-systolic volume", "Cardiac output"], "EDV is the volume at the end of diastole."),
    F(17, "Which part of the autonomic nervous system lowers heart rate?", "Parasympathetic", ["Sympathetic", "Somatic", "Enteric"], "The parasympathetic system slows the heart."),
    F(18, "What is afterload?", "The force the heart must generate to eject blood", ["The blood volume before contraction", "The heart rate", "The ejection fraction"], "Afterload is the force needed to eject blood from a filled heart."),

    /* LO 5a */
    F(20, "Besides adapting the failing heart, what do compensatory mechanisms also cause?", "The pathophysiology of HF itself", ["A cure for HF", "Bradycardia only", "Lower BNP"], "The same mechanisms drive HF pathophysiology."),
    F(23, "Which receptor does SNS stimulation act on to cause tachycardia and arrhythmias?", "Beta-adrenergic receptors", ["Muscarinic receptors", "V2 receptors", "Angiotensin receptors only"], "Increased SNS activity stimulates beta receptors."),
    F(23, "How does SNS vasoconstriction harm the kidneys?", "It decreases renal blood flow", ["It increases GFR", "It causes stones", "It lowers renin"], "Vasoconstriction decreases flow to the kidneys."),
    F(24, "What does RAAS activation ultimately do to total blood volume?", "Increases it", ["Decreases it", "Leaves it unchanged", "Halves it"], "RAAS increases overall blood volume."),
    F(27, "Through which cells does angiotensin II cause myocardial fibrosis?", "Fibroblasts depositing collagen", ["Red blood cells", "Platelets", "Neurons"], "Fibrosis occurs through fibroblast proliferation and collagen deposits."),

    /* LO 5b */
    F(28, "Which two compensations must be active for ADH release in HF?", "SNS (norepinephrine) and RAAS (angiotensin II)", ["ANP and BNP", "Insulin and glucagon", "Remodeling and PNS"], "ADH is released due to elevated norepinephrine and angiotensin II."),
    F(30, "What vascular problem results from prolonged ADH water retention?", "Vascular congestion", ["Vasculitis", "Varicose veins only", "Aneurysm"], "Prolonged free water retention causes vascular congestion."),
    F(31, "How many natriuretic peptides are most associated with heart failure?", "Two (ANP and BNP)", ["One", "Four", "Ten"], "Two of the four NPs, ANP and BNP, are most associated with HF."),
    F(32, "What do natriuretic peptides do to pulmonary artery pressure?", "Lower it", ["Raise it", "No effect", "Double it"], "NPs stimulate vasodilation and reduce pulmonary artery pressures."),
    F(33, "Why do natriuretic peptides eventually fail in HF despite high levels?", "They can't outcompete the other compensations", ["They stop being made", "The kidneys block them", "Statins destroy them"], "They become ineffective because RAAS and SNS overpower them."),

    /* LO 6 */
    F(37, "In which dysfunction does the EF fall: systolic or diastolic?", "Systolic", ["Diastolic", "Both equally", "Neither"], "Systolic dysfunction lowers EF, and diastolic keeps it normal."),
    F(41, "Why can compensations only help systolic dysfunction for so long?", "Rising preload causes dilation and more wall tension", ["They raise EF permanently", "They lower preload", "They cure the muscle"], "As preload rises, dilation and wall tension worsen the cycle."),
    F(43, "Which cardiomyopathy on the systolic causes list impairs contraction?", "Dilated cardiomyopathy", ["Hypertrophic cardiomyopathy", "Restrictive cardiomyopathy", "Takotsubo"], "Dilated cardiomyopathy impairs contractile performance."),
    F(45, "What determines how long ventricular filling can occur?", "Heart rate", ["Blood type", "Potassium level", "Afterload only"], "Heart rate sets the length of diastole."),
    F(46, "Which chronic disease delays diastolic relaxation along with aging?", "Hypertension", ["Hypothyroidism", "Asthma", "Gout"], "Hypertension is listed under delayed diastolic relaxation."),

    /* LO 7 */
    F(48, "In the tree diagram, which failure causes activity intolerance from decreased tissue perfusion?", "Left heart failure", ["Right heart failure", "Neither", "Tricuspid stenosis"], "Left failure lowers cardiac output, causing activity intolerance."),
    F(50, "Over time, what can chronic hepatic congestion from right HF cause?", "Liver failure", ["Gallstones only", "Hepatitis A", "Liver cancer always"], "The slide says it can develop into liver failure."),
    F(51, "Which right-sided valves cause RV dysfunction when stenotic or regurgitant?", "Tricuspid and pulmonic", ["Aortic and mitral", "Only the aortic", "None"], "Stenosis or regurgitation of tricuspid or pulmonic valves is listed."),
    F(53, "Which kidney change can left ventricular dysfunction cause?", "Worsening renal function", ["Better renal function", "Kidney stones", "Polycystic kidneys"], "Worsening renal function is on the left-sided symptom list."),
    F(54, "Besides hypertension, what is the other most common cause of left ventricular failure?", "Acute myocardial infarction", ["Cor pulmonale", "Pulmonary embolism", "Tricuspid regurgitation"], "HTN and acute MI are the most common causes."),

    /* LO 8 */
    F(56, "Which HF type's remodeling makes it especially prone to arrhythmias?", "HFrEF", ["HFpEF", "Neither", "Right HF only"], "Eccentric remodeling in HFrEF makes it prone to arrhythmias."),
    F(58, "What happens to myocardial relaxation in HFpEF?", "Active relaxation is impaired", ["It is faster than normal", "It is unchanged", "The heart doesn't contract"], "Impaired active relaxation is part of HFpEF remodeling."),
    F(59, "Which three conditions give advanced HFpEF a very stiff LV?", "Restrictive cardiomyopathy, severe LVH, severe CAD", ["Anemia, pregnancy, fever", "Asthma, COPD, PE", "Hypothyroidism, gout, obesity"], "The slide lists these as causes of a very stiff LV."),

    /* symptoms */
    F(61, "What causes general fatigue in heart failure according to the clinical manifestations slide?", "Decreased oxygen sent to tissues", ["Too much oxygen", "Low cholesterol", "High BNP"], "Fatigue comes from decreased oxygen delivery."),
    F(64, "What sensation does PND wake the patient with?", "Choking and air hunger", ["Chest burning", "Leg cramps", "Palpitations only"], "The patient wakes suddenly with choking and air hunger."),
    F(65, "How do the most severely affected orthopnea patients sleep?", "Sitting upright", ["Flat on the back", "On the stomach", "Head down"], "Severely affected patients usually sleep sitting upright."),
    F(66, "Which sleep symptom is on the cerebral symptoms list of HF?", "Insomnia", ["Narcolepsy", "Sleepwalking", "Night terrors"], "Cerebral symptoms include anxiety, confusion, insomnia and memory impairment."),

    /* exam */
    F(67, "Which rhythm may be found on exam in HFrEF besides sinus tachycardia?", "Atrial fibrillation", ["Sinus bradycardia", "Complete heart block", "WPW"], "Possibly atrial fibrillation in HFrEF."),
    F(68, "What is another name for a pleural effusion in HF?", "Hydrothorax", ["Hemothorax", "Pneumothorax", "Chylothorax"], "The slide calls pleural effusions hydrothorax."),
    F(69, "Which genital finding can come with severe HF edema?", "Scrotal or labial edema", ["Testicular torsion", "Varicocele", "Genital warts"], "Genital area edema is listed."),
    F(73, "Together with which other sign does an S3 predict death and rehospitalization?", "Elevated jugular venous pressure", ["Low BNP", "Normal EF", "Bradycardia"], "S3 with elevated JVP is associated with death and rehospitalization."),
    F(74, "Why does an S4 occur in HFpEF?", "Decreased ventricular compliance", ["Increased compliance", "A leaky valve", "Low heart rate"], "S4 is due to decreased ventricular compliance."),
    F(75, "Why do advanced HF patients eat less?", "Early satiety and nausea", ["Too much energy", "High appetite", "Diabetes"], "Poor caloric intake comes from early satiety and nausea."),

    /* LO 9 */
    F(77, "What is the main role of imaging and lab tests in diagnosing HF?", "Confirm the diagnosis and rule out other causes", ["Make the diagnosis alone", "Replace the exam", "Pick the statin"], "Tests confirm the clinical diagnosis and rule out others."),
    F(78, "Which classification system helps decide therapy?", "AHA stages", ["Framingham criteria", "NYHA class", "Killip class"], "AHA stages aid in determining therapies."),
    F(79, "Is hepatojugular reflux a major or minor Framingham criterion?", "Major", ["Minor", "Not a criterion", "Exclusion criterion"], "Hepatojugular reflux is a major criterion."),
    F(79, "What weight loss on diuretics counts as a major Framingham criterion?", "More than 10 lb in 5 days", ["1 lb in 1 month", "More than 50 lb in 1 day", "Any weight loss"], "Weight loss over 10 lb in 5 days on diuretics is major."),
    F(80, "Which NYHA class has no symptoms with ordinary activity?", "Class I", ["Class II", "Class III", "Class IV"], "NYHA I has no symptoms or limits with ordinary activity."),
    F(81, "Which AHA stage includes exposure to cardiotoxins with a normal heart?", "Stage A", ["Stage B", "Stage C", "Stage D"], "Cardiotoxin exposure without structural disease is stage A."),

    /* LO 10a */
    F(82, "Which rhythm abnormalities does the HF EKG look for?", "AF/flutter, frequent ventricular ectopy and sustained arrhythmias", ["Only sinus rhythm", "Only bradycardia", "None"], "The EKG checks for these rhythm problems."),
    F(83, "In which acute HF causes may cardiomegaly be absent on CXR?", "Acute MI or acute myocarditis", ["Chronic HTN", "Chronic valve disease", "Long-standing DCM"], "Cardiomegaly may be absent in acute HF from MI or myocarditis."),
    F(85, "Which pressures can echo estimate noninvasively in HF?", "Right and left ventricular filling pressures", ["Intracranial pressure", "Intraocular pressure", "Bladder pressure"], "Echo gives both right and left ventricular filling pressures."),
    F(86, "Besides at diagnosis, when are routine labs repeated in HF?", "At decompensation, therapy changes and periodic monitoring", ["Never", "Only at death", "Only every 10 years"], "Labs are also recommended at decompensation, therapy changes and periodically."),
    F(88, "Why is proBNP lower in HFpEF than HFrEF?", "Less diastolic wall stretch", ["HFpEF has no BNP gene", "Lab error", "HFpEF patients take more ACEi"], "Reduced diastolic wall stretch in HFpEF raises BNP less."),

    /* LO 10b */
    F(91, "When does CPET add the most value in HF?", "When advanced therapies are being considered", ["In every stage A patient", "Never", "Only in children"], "CPET adds precision especially when advanced therapies are considered."),
    F(92, "Which two exercise protocols can a stress echo use?", "Treadmill or bicycle", ["Swimming or rowing", "Stairs or jumping", "Weights only"], "Patients are tested with a treadmill or bicycle protocol."),
    F(94, "Which aortic finding is cardiac MRI frequently used to evaluate?", "Aortic enlargement", ["Aortic valve calcium score", "Aortic dissection only by echo", "None"], "Aortic enlargement is on the MRI list."),
    F(95, "Which protein-deposition disease can still need endomyocardial biopsy?", "Amyloid heart disease", ["Hemophilia", "Gout", "Lupus only"], "Amyloid heart disease is listed."),

    /* LO 11 */
    F(99, "Which arrhythmia device does the comorbidity slide question for AF and arrhythmias?", "ICD", ["Pacemaker for everyone", "IABP", "LVAD"], "The slide says atrial fibrillation and other arrhythmias (ICD?)."),
    F(100, "What drives fluid restriction recommendations in HF?", "Clinicians' clinical experience", ["Large randomized trials", "Genetic testing", "BNP levels only"], "The slide says fluid restriction is largely driven by clinical experience."),
    F(102, "What do weight and BP diaries help detect?", "Under- or over-diuresis", ["Diabetes", "Cancer", "Infection"], "These two parameters evaluate for under- and over-diuresis."),
    F(103, "How does aerobic training change the response to vasodilators?", "It improves it", ["It blocks it", "No change", "It reverses it"], "Exercise improves the response to pharmacologic vasodilators."),
    F(104, "Should CPAP be recommended for HF patients with OSA?", "Yes", ["No", "Only for children", "Only if EF is normal"], "CPAP should be recommended for patients with HF and OSA."),

    /* LO 13a */
    F(107, "How do ACE inhibitors reduce salt and water retention?", "By lowering aldosterone release", ["By blocking the loop of Henle", "By blocking ADH V2 receptors", "By inhibiting neprilysin"], "Less angiotensin II means less aldosterone-driven retention."),
    F(108, "What is the brand name of quinapril?", "Accupril", ["Altace", "Vasotec", "Zestril"], "Quinapril is Accupril."),
    F(109, "Which kidney lab change is a side effect of ACE inhibitors?", "Azotemia", ["Low creatinine", "Glycosuria", "Proteinuria only"], "Azotemia is on the ACEi side effect list."),
    F(110, "Which group may have a higher angioedema risk on ARBs?", "Black patients", ["Asian patients", "Children", "Athletes"], "The slide notes Black patients may be at increased risk."),
    F(111, "What is the brand name of olmesartan?", "Benicar", ["Micardis", "Avapro", "Atacand"], "Olmesartan is Benicar."),
    F(112, "Which AHA stages of HFrEF can use BiDil when ACEi and ARB fail?", "Stages B, C and D", ["Stage A only", "Stage D only", "None"], "BiDil is an alternative in HFrEF stage B, C, D."),
    F(113, "Which heart rate side effect can hydralazine + nitrate cause?", "Bradycardia", ["Atrial fibrillation always", "Torsades", "Complete heart block"], "Bradycardia is on the BiDil side effect list."),

    /* LO 13b */
    F(115, "Besides HF benefits, what does a beta blocker do to blood pressure?", "Reduces hypertension", ["Raises it", "No effect", "Causes hypertensive crisis"], "Beta blockers reduce hypertension."),
    F(116, "Which shock state contraindicates a beta blocker?", "Cardiogenic shock", ["Septic shock after recovery", "Anaphylaxis history", "None"], "Cardiogenic shock is a contraindication."),
    F(117, "What is the brand name of bisoprolol?", "Zebeta", ["Coreg", "Toprol", "Inderal"], "Bisoprolol is Zebeta."),
    F(119, "How quickly do diuretics relieve pulmonary and peripheral edema?", "Rapidly", ["Over 6 months", "Never", "Only after transplant"], "Diuretics provide rapid relief of edema."),
    F(120, "Which allergy concern applies to loop diuretics?", "Sulfa", ["Penicillin", "Egg", "Latex"], "Loop diuretics carry sulfa concerns."),
    F(121, "What is the brand name of torsemide?", "Demadex", ["Bumex", "Lasix", "Zaroxolyn"], "Torsemide is Demadex."),
    F(122, "Which magnesium change do thiazides cause?", "Hypomagnesemia", ["Hypermagnesemia", "None", "Magnesium toxicity"], "Thiazides cause hypomagnesemia."),
    F(124, "What is the brand name of eplerenone?", "Inspra", ["Aldactone", "Midamor", "Dyrenium"], "Eplerenone is Inspra."),
    F(126, "What is the brand name of triamterene?", "Dyrenium", ["Midamor", "Inspra", "Aldactone"], "Triamterene is Dyrenium."),

    /* LO 13c */
    F(128, "Why was the Entresto trial stopped early?", "Significant benefit in the treatment arm", ["Too many deaths", "Lack of funding", "Drug shortage"], "The trial stopped early because of significant benefit."),
    F(129, "Which allergy history contraindicates Entresto?", "Angioedema", ["Penicillin rash", "Seasonal allergies", "Shellfish allergy"], "History of angioedema is a contraindication."),
    F(131, "In which stages is digoxin used?", "Late stage C and D", ["Stage A", "Stage B", "Never"], "Digoxin is late stage C and D treatment."),
    F(132, "Which kinds of arrhythmias can digoxin cause?", "Both tachy- and bradyarrhythmias", ["Only tachycardias", "Only bradycardias", "None"], "Digoxin can cause tachy and brady arrhythmias."),
    F(133, "Which other inotrope besides milrinone does the slide name?", "Xamoterol", ["Dobutamine", "Dopamine", "Epinephrine"], "Milrinone, vesnarinone and xamoterol are listed."),
    F(135, "Does ivabradine lower mortality when HR is under 75 on appropriate therapy?", "No", ["Yes, greatly", "Only in AF", "Only in HFpEF"], "There is no mortality improvement below 75 bpm."),
    F(137, "Which limb complication risk do SGLT2 inhibitors raise?", "Foot amputation", ["Hand fractures", "Knee arthritis", "Shoulder dislocation"], "Increased risk of foot amputation is a listed side effect."),
    F(138, "What is the target dose of carvedilol for a patient under 85 kg?", "25 mg twice daily", ["3.125 mg twice daily", "200 mg daily", "50 mg twice daily"], "Carvedilol targets 25 mg BID, or 50 mg BID at 85 kg or more."),

    /* LO 11-12 */
    F(141, "Which two compliance areas does regular follow-up check?", "Medications and water/salt restriction", ["Seatbelt and helmet use", "Sleep and dreams", "Vaccines only"], "Follow-up ensures medication and water/salt compliance."),
    F(142, "What three things do disease management programs combine?", "Treatment, complication prevention and education", ["Surgery, sedation and imaging", "Billing, scheduling and coding", "Only medication refills"], "The goals are treatment, complication prevention and education."),
    F(143, "Which work goal does cardiac rehab help with?", "Returning to work and normal activities", ["Changing careers", "Early retirement", "Disability claims only"], "Rehab provides support to return to work and normal activities."),
    F(144, "Does private insurance always cover cardiac rehab?", "No, it may or may not", ["Yes, always", "Never", "Only for children"], "Private insurances may or may not cover this care."),

    /* stages A-B */
    F(146, "Which lifestyle measures are part of stage A treatment?", "Quit smoking, lose weight, exercise", ["Bed rest", "High-salt diet", "More alcohol"], "Stage A includes smoking cessation, weight reduction and exercise."),
    F(148, "What history makes a stage B patient an ICD candidate?", "Ventricular arrhythmias", ["Seasonal allergies", "Kidney stones", "Migraines"], "ICD if indicated by ventricular arrhythmia history."),
    F(149, "Where are an ICD's leads placed?", "Right atrium and ventricle", ["Left atrium only", "Aorta", "Pulmonary veins"], "The drawing shows electrodes in the right atrium and ventricle."),

    /* stage C */
    F(151, "Which three diuretic types are listed for HFpEF stage C?", "Potassium-sparing, thiazide and loop", ["Osmotic, carbonic anhydrase and loop", "Only loop", "None"], "Potassium-sparing, thiazide and loop diuretics are listed."),
    F(152, "Which organ worsens from over-diuresis in HFpEF?", "The kidneys", ["The liver only", "The thyroid", "The skin"], "Over-diuresis worsens renal function through decreased perfusion."),
    F(156, "Why is normal atrial conduction important in HFpEF?", "The stiff ventricle relies on the atrial kick", ["It raises EF", "It lowers BNP", "It prevents cough"], "HFpEF depends on atrial contraction to fill (standard teaching for the why)."),
    F(158, "Which surgical options are listed for stage C HFrEF?", "Revascularization and valve surgery", ["Appendectomy", "Gastric bypass", "Thyroidectomy"], "Revascularization and valvular surgery are listed."),

    /* stage D */
    F(161, "What does digoxin do for stage D patients besides contractility?", "Rate control", ["Diuresis", "Blood pressure increase", "Anticoagulation"], "Digoxin is used for rate control and inotropic effect."),
    F(162, "Which mechanical devices are stage D options?", "IABP and LVAD", ["TR band and Mynx", "Holter and event monitor", "CPAP and nebulizer"], "IABP and LVAD are on the stage D device list."),
    F(163, "When does an IABP deflate?", "At the beginning of systole", ["In mid-diastole", "Never", "At the end of systole"], "The balloon deflates at the beginning of systole."),
    F(165, "When must cardiac transplant be considered?", "When a patient can't be weaned from acute management or is severely impaired despite therapy", ["In every stage B patient", "When BNP is mildly high", "After one hospitalization"], "Transplant is considered when acute support can't be weaned or impairment is severe."),

    /* decompensated */
    F(167, "Which stimulants are listed as causes of acute heart failure?", "Cocaine and methamphetamines", ["Caffeine and nicotine gum", "Melatonin", "Vitamin B12"], "Substance abuse with cocaine, meth and ethanol is listed."),
    F(167, "Which antiarrhythmic is listed as an iatrogenic trigger of acute HF?", "Amiodarone", ["Adenosine", "Atropine", "Magnesium"], "A new antiarrhythmic such as amiodarone is listed."),
    F(169, "Which lung sound is heard on auscultation in decompensated HF?", "Crackles", ["Stridor", "Silence", "Pleural rub only"], "Crackles are heard on auscultation."),
    F(173, "What are the sensitivity and specificity of clinical judgment for acute HF?", "61% and 86%", ["86% and 61%", "100% and 100%", "20% and 30%"], "Clinical judgment has 61% sensitivity and 86% specificity."),
    F(176, "Which bedside imaging is listed besides CXR for acute HF?", "Lung ultrasound", ["Brain MRI", "Bone scan", "Colonoscopy"], "Lung ultrasound is listed."),
    F(180, "Which blood gas tests are part of the ED workup?", "ABG or VBG", ["CSF analysis", "Urine culture only", "Sweat chloride"], "ABG/VBG is on the ED lab list."),
    F(183, "Which facial feature does NIV need to work?", "Anatomy that allows a good mask seal", ["A beard", "A broken nose", "No teeth only"], "Facial anatomy must allow an adequate seal."),
    F(184, "Which cognitive condition contraindicates NIV?", "Dementia", ["Mild anxiety", "Depression", "ADHD"], "Dementia is listed as an NIV contraindication."),
    F(185, "Which respiratory finding indicates intubation in acute HF?", "Overt respiratory distress", ["Mild cough", "Normal breathing", "Snoring"], "Overt respiratory distress is an intubation indication."),
    F(187, "How does nitroglycerin help myocardial ischemia?", "It dilates the coronary arteries", ["It raises heart rate", "It blocks platelets", "It raises preload"], "NTG has coronary vasodilatory effects."),
    F(189, "Which cardiomyopathy history contraindicates nitrates?", "Hypertrophic cardiomyopathy", ["Dilated cardiomyopathy", "Ischemic cardiomyopathy", "Peripartum recovered"], "HCM history is a nitrate contraindication."),
    F(191, "Which loop diuretic is most used in the emergency setting?", "Furosemide", ["Torsemide", "Ethacrynic acid", "Bumetanide"], "Furosemide is the most commonly used loop in the ED."),
    F(194, "Which BUN level is a high-risk feature on the acute HF pathway?", "Over 43", ["Over 10", "Under 5", "Over 200"], "BUN over 43 is a high-risk feature."),
    F(194, "Which creatinine level is a high-risk feature on the acute HF pathway?", "Over 2.75", ["Over 0.5", "Under 1.0", "Over 10"], "Creatinine over 2.75 is a high-risk feature."),
    F(197, "Which lower-risk patients fit observation telemetry?", "Those who improve during their ED stay", ["Those needing intubation", "Those in shock", "Those with acute ischemia"], "Lower-risk patients who improve in the ED fit observation."),
    F(199, "Which stage D options appear in the discharge planning step of the outpatient pathway?", "Devices, aquapheresis, transplant, hospice", ["Statin, aspirin, diet", "Only oxygen", "None"], "Stage D patients get devices, aquapheresis, transplant or hospice planning."),
    F(201, "Which IV add-on agents are weaned in the hospital?", "Vasodilators, inotropes and vasopressors", ["Oral diuretics", "Statins", "Insulin only"], "The inpatient goals include weaning IV vasodilators, inotropes and pressors.")
  ]);
})();
