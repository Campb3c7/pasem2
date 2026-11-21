/* CAD Part V Final test (Anna, 2026-11-21): one whole-deck test so she doesn't have to keep going back.
   New questions (not repeats of the slide questions), each tied to the slide it tests, covering every LO.
   F(slide, prompt, answer, [3 wrong], why). Ids "cad-part-5|final|<i>": only append. */
(function () {
  "use strict";
  var F = SlideStudy.F;
  SlideStudy.final("cad-part-5", [
    /* LO 1: goals, supply and demand (1-10) */
    F(2, "A drug lowers heart rate. Which side of the oxygen balance does it mainly help?", "It lowers demand", ["It raises supply only", "It lowers supply", "Neither side"], "Heart rate is a main determinant of oxygen demand."),
    F(2, "Which change would RAISE myocardial oxygen supply?", "Correcting severe anemia", ["Speeding the heart rate", "Raising contractility", "Raising wall stress"], "More hemoglobin raises arterial oxygen content, a supply factor."),
    F(3, "A woman with stable CAD has new angina, weight loss, tremor and a fast pulse. Which cause of increased demand fits?", "Hyperthyroidism", ["Sickle cell disease", "Polycythemia vera", "Hypoxemia"], "Excess thyroid hormone raises heart rate and demand."),
    F(3, "A dehydrated marathon runner with CAD has angina. Which supply problem does the table list?", "Hemoconcentration raising blood viscosity", ["Bradycardia", "Low contractility", "Low blood pressure from fever"], "Severe dehydration thickens the blood and lowers supply."),
    F(3, "Cocaine appears on both halves of the table. Why?", "It raises demand and can lower supply", ["It only lowers supply", "It only raises demand", "It has no cardiac effect"], "Sympathomimetic toxicity raises demand and can cause spasm that cuts supply."),
    F(4, "A man has burning chest pressure during sex that eases 2 minutes after a nitro. Does this fit angina?", "Yes, it matches the trigger, quality and nitro response", ["No, sex is not a trigger", "No, burning rules out angina", "No, nitro should take 30 minutes"], "Sex is a listed trigger and relief within 45 seconds to 5 minutes is typical."),
    F(4, "Where does typical angina radiate according to the deck?", "Left arm, shoulder, jaw, back or rarely the right arm", ["Only the right foot", "Only the lower abdomen", "Nowhere ever"], "Angina radiates to the left arm, shoulder, jaw, neck, back and rarely the right arm."),
    F(5, "A patient wants to walk his dog without chest pain. Which treatment goal is this?", "Short-term goal of reducing angina", ["Long-term goal of preventing death", "Neither goal", "A surgical goal"], "Relieving symptoms that limit activity is the short-term goal."),
    F(6, "Which drug is used to reduce future risk rather than relieve angina?", "A statin", ["Sublingual nitroglycerin", "Ranolazine", "Amlodipine"], "Statins are preventive, while the others relieve symptoms."),
    F(7, "What is the four-part approach to tobacco in CAD on the slide?", "Assess use, advise quitting, offer behavioral support and medication", ["Ignore it if over 65", "Advise switching to cigars", "Only treat if COPD"], "Assess, advise and support with counseling and medication."),
    F(7, "After starting a high-intensity statin in a CAD patient, what is the next lipid step?", "Recheck LDL to see if more therapy is needed", ["Stop it after 1 month", "Never recheck", "Switch to fish oil"], "LDL response decides whether to add therapy."),
    F(8, "A patient with CAD asks if his BMI must be under 25. What does the deck say about BMI?", "It is one measure, not a universal treatment target", ["It must be under 25", "It must be under 18", "It is irrelevant"], "Weight management should be sustainable and BMI is only one measure."),
    F(10, "A patient with angina has HR 95, BP 150/90 and no asthma. Which first drug fits well?", "A beta blocker", ["Ranolazine", "A long-acting nitrate alone", "Morphine"], "A fast heart rate and high BP favor a beta blocker as the initial drug."),

    /* LO 2: nitrates (11-24) */
    F(11, "Why does a smaller, less-filled ventricle need less oxygen?", "Lower wall stress", ["Higher heart rate", "More contractility", "Higher afterload"], "Less preload shrinks the ventricle and lowers wall stress and demand."),
    F(12, "A drug lowers demand mainly by lowering preload. Which drug is it?", "Nitroglycerin", ["Metoprolol", "Diltiazem", "Ranolazine"], "Nitrates work mainly through venodilation and lower preload."),
    F(13, "A patient needs nitrate coverage for more than 8 hours from a single application. Which form?", "Nitroglycerin patch", ["IV nitroglycerin", "SL nitroglycerin", "Isosorbide dinitrate"], "The patch lasts over 8 hours."),
    F(13, "Which nitrate has an onset of 20-40 minutes and lasts 4-6 hours, dosed TID?", "Isosorbide dinitrate", ["Isosorbide mononitrate", "SL nitroglycerin", "IV nitroglycerin"], "Isosorbide dinitrate starts at 10-20 mg TID with a 4-6 hour duration."),
    F(13, "Which nitrate form is listed for hypertension as well as acute chest pain?", "IV nitroglycerin", ["Nitroglycerin patch", "Isosorbide mononitrate", "Isosorbide dinitrate"], "IV NTG's indications are acute chest pain and HTN."),
    F(14, "A patient with flash pulmonary edema has BP 220/120. Which drug is the treatment of choice?", "IV nitroglycerin", ["Oral amlodipine", "Metoprolol IV", "SL nifedipine"], "IV NTG is the choice for hypertensive emergency with pulmonary edema."),
    F(15, "Who should carry sublingual nitroglycerin tablets?", "All patients with CAD", ["Only patients after CABG", "Only patients with heart failure", "Nobody, EMS carries it"], "Every CAD patient is told to carry SL NTG."),
    F(15, "A patient took one nitro, waited 5 minutes, then took two more before calling 911. What was the mistake?", "He should have called 911 after the first dose failed", ["He took too few doses", "He should have waited an hour", "No mistake"], "Unrelieved pain at 5 minutes means call 911 without waiting for three doses."),
    F(16, "Why should a patient sit before taking SL nitroglycerin?", "Rapid venodilation can drop BP and cause fainting", ["It works only when sitting", "It prevents headache", "It speeds absorption"], "Fast venous dilation can cause a sudden BP drop."),
    F(17, "Which long-acting nitrate is given 2-3 times daily?", "Isosorbide dinitrate (Isordil)", ["Isosorbide mononitrate ER", "The patch", "IV nitroglycerin"], "Isordil is dosed 2-3 times daily."),
    F(18, "A patient has angina mainly during his morning work shift. How should his long-acting nitrate be timed?", "To cover the hours he usually gets angina, with a nitrate-free gap", ["Around the clock", "Only at bedtime", "Only when pain starts"], "Doses cover high-risk periods while a 10-12 hour gap prevents tolerance."),
    F(19, "What is another name for nitrate tolerance?", "Tachyphylaxis", ["Tachycardia", "Anaphylaxis", "Bradykinesia"], "Tolerance with prolonged exposure is called tachyphylaxis."),
    F(20, "Why do nitrates cause flushing?", "Vasodilation of skin vessels", ["Histamine release", "Fever", "High blood pressure"], "Flushing results from vasodilation."),
    F(21, "A man takes vardenafil for ED and has angina. What is the interaction risk with nitrates?", "Severe hypotension", ["Severe hypertension", "Bleeding", "Bradycardia only"], "PDE-5 inhibitors plus nitrates can cause dangerous hypotension."),
    F(21, "A woman with pulmonary hypertension takes sildenafil. Does the nitrate warning apply to her?", "Yes, PDE-5 inhibitors for pulmonary hypertension count too", ["No, only ED use counts", "No, women are exempt", "Only if she takes Viagra"], "The contraindication covers PDE-5 inhibitors used for ED and pulmonary hypertension."),
    F(22, "A dehydrated patient with gastroenteritis has angina. Why be cautious with nitrates?", "Volume depletion can worsen hypotension", ["Dehydration blocks nitrate absorption", "It causes tolerance", "No reason"], "Low volume leaves no reserve when preload falls."),
    F(23, "Which parameters are monitored on nitrate therapy?", "BP, heart rate, dizziness and angina pattern", ["INR and platelets", "Uric acid and glucose", "TSH and calcium"], "Monitor BP, HR, dizziness, symptoms and NTG use."),
    F(24, "A patient's chest pain is relieved by nitro but EKGs and troponins are normal and he has dysphagia. What else is possible?", "Esophageal spasm", ["Definite NSTEMI", "Aortic stenosis", "Pericarditis"], "Nitrates relax esophageal muscle, so relief doesn't prove cardiac pain."),

    /* LO 3: beta blockers (25-32) */
    F(25, "Stimulating β1 receptors speeds which part of conduction?", "AV nodal conduction", ["Bronchial relaxation", "Gastric emptying", "Skin flushing"], "β1 stimulation increases AV nodal conduction, which blockade slows."),
    F(25, "Stimulating β2 receptors causes what in the airways and vessels?", "Bronchodilation and vasodilation", ["Bronchoconstriction and vasoconstriction", "Tachycardia only", "Renin release"], "β2 relaxes bronchial and vascular smooth muscle."),
    F(26, "Which catecholamine activates β1, β2 and β3 receptors?", "Epinephrine", ["Norepinephrine only at β3", "Acetylcholine", "Dopamine only"], "Epinephrine from the adrenal medulla activates all three."),
    F(27, "Beta blockers reduce the effect of which two hormones on the heart?", "Epinephrine and norepinephrine", ["Insulin and glucagon", "Cortisol and aldosterone", "ADH and oxytocin"], "They block the effects of catecholamines on the heart."),
    F(28, "A patient takes nadolol. What type of beta blocker is it?", "Nonselective", ["β1-selective", "α1 plus β blocker", "Calcium channel blocker"], "Nadolol blocks both β1 and β2."),
    F(28, "Which beta blocker has the added effect of arterial dilation through α1 blockade?", "Labetalol", ["Bisoprolol", "Atenolol", "Timolol"], "Labetalol and carvedilol add α1 blockade."),
    F(29, "Which beta blocker effect may help supply rather than demand?", "Longer diastolic filling time", ["Lower contractility", "Lower BP", "Lower wall stress"], "A longer diastole supports coronary perfusion."),
    F(30, "A patient with cocaine-related coronary spasm is tachycardic. Why avoid a nonselective beta blocker?", "Unopposed alpha stimulation can worsen spasm", ["It causes tolerance", "It raises potassium", "It interacts with aspirin"], "With β2 blocked, alpha constriction is unopposed."),
    F(31, "A man on a beta blocker reports cold hands and erectile problems. Are these expected?", "Yes, both are listed general side effects", ["No, both are allergies", "Only cold hands are possible", "Only with CCBs"], "Cold extremities and sexual dysfunction are listed adverse effects."),
    F(31, "A patient needs surgery and wants to stop his beta blocker the day before. What advice fits?", "Do not stop abruptly; taper if it must stop", ["Stop it suddenly", "Double it", "Switch to aspirin"], "Abrupt withdrawal can cause rebound tachycardia, angina or MI."),
    F(32, "A patient with angina has HR 44 and dizziness. Should a beta blocker be started?", "No, severe bradycardia is a contraindication", ["Yes, at full dose", "Yes, IV", "Yes, with verapamil"], "Severe bradycardia contraindicates beta blockers."),

    /* LO 4: CCBs (33-37) */
    F(33, "Which CCB family raises coronary flow mainly by dilating arteries?", "DHP", ["Non-DHP", "Neither", "Beta blockers"], "DHPs are the stronger arterial dilators."),
    F(34, "Which CCB is described as decreasing contractility and controlling arrhythmias?", "Verapamil", ["Amlodipine", "Nifedipine", "Isosorbide"], "Non-DHPs act on cardiac tissue."),
    F(34, "A hypertensive patient with angina and a normal heart rate needs a CCB that lowers afterload. Which?", "Amlodipine", ["Verapamil", "Diltiazem", "Propranolol"], "DHPs lower BP and afterload through arterial dilation."),
    F(35, "A patient can't take beta blockers because of severe asthma. Which drug class is a first-line alternative for angina?", "A calcium channel blocker", ["Ranolazine first", "A nonselective beta blocker", "Morphine"], "CCBs are first-line when beta blockers can't be used."),
    F(35, "A patient on carvedilol is started on diltiazem and now has HR 38. What caused it?", "Beta blocker plus non-DHP CCB", ["Carvedilol alone at a normal dose", "Diltiazem edema", "Nitrate tolerance"], "Combining a beta blocker with a non-DHP can cause excessive bradycardia."),
    F(36, "A patient feels his heart race after a dose of short-acting nifedipine. Why?", "Reflex tachycardia from a fast BP drop", ["Nifedipine stimulates β1 directly", "Hyperthyroidism", "Drug allergy"], "Rapid vasodilation triggers a reflex heart rate rise."),
    F(36, "Which pair of side effects belongs to DHPs?", "Headache and flushing", ["Constipation and AV block", "Bronchospasm and fatigue", "Hyperuricemia and dyspnea"], "Vasodilation causes headache and flushing."),
    F(37, "A patient on verapamil has fatigue, dizziness and low BP. Are these expected?", "Yes, they are listed non-DHP side effects", ["No, they suggest overdose of aspirin", "No, verapamil raises BP", "Only with DHPs"], "Hypotension, dizziness and fatigue are listed for non-DHPs."),

    /* LO 5: ranolazine and the ladder (38-43) */
    F(38, "Ranolazine prolongs which part of the cardiac cycle?", "The ventricular action potential", ["The PR interval only", "Atrial depolarization", "The P wave"], "Blocking late sodium prolongs the ventricular action potential."),
    F(38, "In ranolazine's mechanism, reducing intracellular sodium leads to what?", "Less calcium influx", ["More calcium influx", "More potassium loss", "Faster heart rate"], "Less sodium means less calcium overload."),
    F(39, "What is the maximum dose of ranolazine without interacting drugs?", "1,000 mg twice daily", ["500 mg once daily", "2,000 mg twice daily", "250 mg twice daily"], "Ranolazine can increase to 1,000 mg twice daily."),
    F(40, "Which GI side effect is listed for ranolazine?", "Constipation", ["Diarrhea with bleeding", "Pancreatitis", "Hepatitis"], "Constipation, nausea, headache and dizziness are listed."),
    F(40, "Why is ranolazine contraindicated in significant liver disease?", "It undergoes extensive hepatic metabolism", ["It is hepatotoxic in all patients", "It causes jaundice", "It is excreted in bile only"], "Liver impairment raises drug levels."),
    F(41, "A patient on digoxin starts ranolazine. What should you do?", "Monitor digoxin levels and adjust the dose", ["Stop digoxin", "No change needed", "Double digoxin"], "Ranolazine increases digoxin levels."),
    F(41, "Which antifungal requires avoiding ranolazine altogether?", "Itraconazole", ["Fluconazole", "Nystatin", "Terbinafine"], "Itraconazole is a strong CYP3A inhibitor."),
    F(42, "A patient on amlodipine plus isosorbide mononitrate still has angina. What is the next step on the ladder?", "Add ranolazine", ["Stop all drugs", "Add a second nitrate", "Give morphine daily"], "Ranolazine is added when combination therapy fails."),
    F(43, "What is the maximum daily dose of isosorbide mononitrate ER in the dosing table?", "120 mg once daily", ["30 mg once daily", "400 mg once daily", "10 mg once daily"], "Isosorbide mononitrate ER maxes at 120 mg daily."),

    /* LO 6: ACS drugs (44-58) */
    F(45, "Which ACS goal does nitroglycerin mainly serve?", "Relieving ischemic discomfort and lowering demand", ["Preventing thrombus formation", "Dissolving the clot", "Lowering LDL"], "Nitro relieves pain by reducing demand."),
    F(46, "When are opioids used in ACS according to the drug therapy slide?", "Only in selected situations for persistent pain", ["As core therapy", "Routinely for all", "Never"], "Opioids are for pain that persists despite anti-ischemic treatment."),
    F(47, "An ACS patient took sildenafil last night. Which drug is avoided?", "Nitroglycerin", ["Aspirin", "Heparin", "Clopidogrel"], "Recent PDE-5 inhibitor use is a reason to avoid nitro."),
    F(48, "How does oxygen help when an ACS patient's saturation is 86%?", "It improves oxygen supply and decreases angina", ["It lowers heart rate", "It dissolves the clot", "It lowers preload"], "In hypoxemia, oxygen raises supply."),
    F(49, "Beta blockers in ACS can reduce infarct size by what effect?", "Improving perfusion", ["Dissolving the thrombus", "Raising preload", "Raising heart rate"], "The slide says they reduce infarct size by improving perfusion."),
    F(50, "Which beta blockers are named as preferred in acute MI?", "Metoprolol and atenolol", ["Propranolol and nadolol", "Labetalol and timolol", "Carvedilol IV only"], "Cardioselective agents are preferred."),
    F(51, "An ACS patient on metoprolol has HR 62 and BP 118/70. What is the next step?", "Continue; he is at goal", ["Stop it for bradycardia", "Add verapamil", "Give atropine"], "HR 55-70 with SBP over 90 is the target."),
    F(51, "An ACS patient has crackles to the apices and an S3. Should a beta blocker be started now?", "No, decompensated HF is a contraindication", ["Yes, IV", "Yes, double dose", "Yes, with nitro"], "Overt decompensated HF contraindicates beta blockers in ACS."),
    F(52, "After MI, what decides whether a beta blocker continues long term?", "The EF and other indications", ["The patient's age only", "The troponin peak", "The LDL level"], "Long-term beta blocker use is based on EF and other indications."),
    F(53, "Which ACS patient qualifies for an ACEi for an anterior location of infarct?", "One with an anterior STEMI", ["One with an inferior NSTEMI and no risk factors", "One with unstable angina only", "Nobody"], "Anterior STEMI is one of the listed high-risk features."),
    F(53, "Which high-risk feature for ACEi after ACS involves the EF?", "LVEF 40% or less", ["LVEF over 60%", "LVEF of 55%", "EF does not matter"], "LVEF ≤40% is a listed feature."),
    F(54, "A patient on lisinopril after MI has potassium 5.9. Which monitoring item caught this?", "Potassium checks after ACEi initiation", ["Troponin trend", "INR", "Uric acid"], "BP, creatinine and potassium are monitored on ACEi."),
    F(55, "Which opioids are named for severe refractory ACS pain?", "IV morphine or fentanyl", ["Oral oxycodone", "Tramadol", "Codeine"], "IV morphine or fentanyl may be considered."),
    F(55, "Which adverse effects of opioids matter in ACS?", "Hypotension, respiratory depression, nausea and sedation", ["Bleeding and TTP", "Hyperuricemia and dyspnea", "QT prolongation only"], "These are the listed opioid adverse effects."),
    F(56, "A patient on IV morphine has RR 6 and is hard to rouse. What do you give?", "Naloxone", ["Flumazenil", "Atropine", "Protamine"], "Naloxone reverses opioid respiratory depression."),
    F(57, "What is the IV fentanyl dose for refractory ACS pain?", "25-50 μg, may repeat", ["2-4 mg", "0.4 mg", "100 mg"], "Fentanyl 25-50 μg IV, up to 100 μg."),
    F(57, "After about how long can tachyphylaxis develop on an IV nitro drip?", "About 24 hours", ["About 10 minutes", "About 1 month", "Never"], "The table notes tachyphylaxis after about 24 hours."),
    F(58, "A post-MI patient with knee arthritis wants diclofenac. What does the deck advise?", "Avoid non-aspirin NSAIDs when possible", ["Diclofenac is preferred", "Use it with no concern", "Double the aspirin instead"], "Non-aspirin NSAIDs raise cardiovascular events."),

    /* LO 7a: antiplatelet vs anticoagulant vs fibrinolytic (59) */
    F(59, "Which drug class slows formation of the fibrin mesh?", "Anticoagulants", ["Antiplatelets", "Fibrinolytics", "Nitrates"], "Anticoagulants inhibit coagulation factors and fibrin formation."),
    F(59, "Prasugrel belongs to which group in the comparison table?", "Antiplatelet", ["Anticoagulant", "Fibrinolytic", "Statin"], "Prasugrel inhibits platelet activation."),
    F(59, "Alteplase belongs to which group in the comparison table?", "Fibrinolytic", ["Antiplatelet", "Anticoagulant", "Beta blocker"], "Alteplase promotes breakdown of fibrin."),

    /* LO 8: aspirin and P2Y12 (60-70) */
    F(60, "Clopidogrel and prasugrel share which drug family?", "Thienopyridines", ["Non-thienopyridines", "Glycoprotein IIb/IIIa inhibitors", "COX-1 inhibitors"], "Both are thienopyridines."),
    F(61, "Which aspirin tablet strengths are listed?", "81, 162, 325 and 500 mg", ["5, 10 and 20 mg", "75 and 90 mg only", "1,000 mg only"], "Aspirin comes in 81, 162, 325 and 500 mg tablets."),
    F(61, "What does aspirin irreversibly inhibit?", "Platelet COX-1", ["The P2Y12 receptor", "Thrombin", "Plasminogen"], "Aspirin permanently blocks platelet COX-1."),
    F(62, "What range of aspirin is given at ACS presentation?", "162-325 mg chewed", ["81 mg swallowed", "500-1,000 mg IV", "40 mg SQ"], "The ACS load is 162-325 mg non-enteric-coated, chewed."),
    F(62, "After the ACS loading dose, what is the daily aspirin dose?", "81 mg daily", ["325 mg twice daily", "500 mg daily", "No more aspirin"], "Maintenance is 81 mg daily."),
    F(63, "A patient finishes 12 months of DAPT with no bleeding. What happens to his aspirin?", "Low-dose aspirin usually continues long term", ["Stop it", "Switch to warfarin", "Raise to 325 mg"], "Long-term low-dose aspirin continues for secondary prevention."),
    F(64, "An NSTEMI patient is going to PCI. Which P2Y12 inhibitors are Class 1?", "Ticagrelor or prasugrel", ["Clopidogrel only", "No P2Y12 inhibitor", "Warfarin"], "For PCI, aspirin plus ticagrelor or prasugrel is Class 1."),
    F(64, "When is clopidogrel used for a PCI patient?", "When ticagrelor or prasugrel are unavailable, not tolerated or contraindicated", ["Always first", "Never", "Only with warfarin"], "Clopidogrel is the fallback for PCI."),
    F(64, "After CABG, when is the P2Y12 inhibitor started?", "When safe postoperatively", ["The morning of surgery", "Never again", "After 5 years"], "Continue aspirin and start the P2Y12 inhibitor when safe after surgery."),
    F(65, "What is the clopidogrel loading dose range in ACS?", "300-600 mg", ["60 mg", "180 mg", "75 mg"], "Clopidogrel loads with 300-600 mg."),
    F(65, "Which P2Y12 inhibitor is also used after ischemic stroke?", "Clopidogrel", ["Prasugrel", "Ticagrelor only", "None"], "Clopidogrel is used for secondary prevention after ischemic stroke."),
    F(66, "What is the usual prasugrel maintenance dose?", "10 mg daily", ["75 mg daily", "90 mg twice daily", "60 mg daily"], "Prasugrel maintenance is 10 mg daily."),
    F(67, "Which TTP signs are listed for prasugrel?", "Fever, weakness, low platelets, kidney or neurologic changes", ["Rash and joint pain only", "Gout flares", "Dyspnea only"], "TTP presents with fever, weakness, thrombocytopenia, renal and neuro changes."),
    F(67, "A 65 kg, 58-year-old with no stroke history is going to PCI. Is prasugrel acceptable?", "Yes, at the standard 10 mg daily", ["No, prasugrel is never used", "Only at 5 mg", "Only if over 75"], "He has no stroke, is under 75 and weighs over 60 kg."),
    F(68, "How long is ticagrelor 90 mg twice daily continued after ACS?", "The first 12 months", ["2 weeks", "Lifelong at that dose", "Only during the hospital stay"], "Ticagrelor 90 mg twice daily covers the first 12 months."),
    F(69, "What is the most important adverse effect of ticagrelor?", "Bleeding", ["Dyspnea", "Hyperuricemia", "Headache"], "Bleeding is the most important adverse effect."),
    F(69, "A patient's ticagrelor dyspnea is intolerable after HF and ischemia are ruled out. What next?", "Consider an alternative P2Y12 inhibitor", ["Keep it and ignore symptoms", "Stop all antiplatelets", "Add a diuretic"], "Switch if symptoms are intolerable."),
    F(70, "What aspirin dose range is recommended with ticagrelor?", "75-100 mg daily", ["162-325 mg daily", "500 mg daily", "No aspirin"], "Doses over 100 mg may reduce ticagrelor's effect."),

    /* LO 7b: plug vs mesh (71) */
    F(71, "What is the thrombus in ACS sitting on in the picture?", "A ruptured atherosclerotic plaque", ["A normal vessel wall", "A heart valve", "An aneurysm"], "The ACS clot forms on a ruptured plaque."),
    F(71, "Which drug combination does the key takeaway give as the usual ACS regimen?", "Aspirin plus a P2Y12 inhibitor plus heparin", ["Aspirin alone", "Heparin plus warfarin", "Alteplase plus morphine"], "Antiplatelets and anticoagulants are complementary."),

    /* LO 9: anticoagulants, strategy, PCI, CABG, lytics (72-84) */
    F(72, "Which ACS anticoagulant is given subcutaneously?", "Enoxaparin", ["Unfractionated heparin drip", "Bivalirudin", "Alteplase"], "Enoxaparin is given SQ every 12 hours."),
    F(73, "Why is the UFH drip preferred when a cath is planned?", "It is short-acting and easy to stop for the procedure", ["It is given orally", "It lasts for days", "It dissolves clots"], "A titratable drip is easier to manage around the cath (standard teaching)."),
    F(74, "A STEMI patient gets no reperfusion therapy. Which anticoagulants are options?", "UFH or enoxaparin", ["Bivalirudin only", "None", "Alteplase"], "The no-reperfusion branch lists UFH or enoxaparin."),
    F(74, "A STEMI patient gets lytics and PCI is likely to follow. Which anticoagulant?", "UFH", ["Enoxaparin", "Fondaparinux", "No anticoagulant"], "UFH is chosen when angiography with PCI is likely after lysis."),
    F(75, "What does the invasive strategy for NSTEMI involve?", "Coronary angiography with revascularization when appropriate", ["Medicines only forever", "Lytics", "CABG for everyone"], "Invasive = cath and revascularize as needed."),
    F(76, "Which is NOT part of selective invasive medical management?", "Routine fibrinolytics", ["Monitoring the ECG", "Antithrombotic therapy", "Echo when indicated"], "Fibrinolytics are only for STEMI."),
    F(77, "Before an invasive strategy, nitrates and beta blockers are used only when?", "Clinically appropriate and not contraindicated", ["Always at maximum dose", "Never", "Only after PCI"], "They are used when appropriate and safe."),
    F(78, "An NSTEMI patient is pain free with stable vitals. How is cath timing set?", "By overall ischemic risk and clinical course", ["Immediately in all cases", "Never", "Only after 3 months"], "Stable NSTEMI cath timing depends on risk."),
    F(79, "Besides STEMI, which ACS patients are PCI candidates on the slide?", "High-risk NSTEMI patients", ["All unstable angina patients", "Low-risk chest pain only", "Stable angina only"], "PCI is indicated for STEMI and high-risk NSTEMI."),
    F(79, "Which oral drug may be considered before cath to protect the kidneys from contrast?", "N-acetylcysteine", ["Metformin", "Ibuprofen", "Furosemide"], "N-acetylcysteine PO BID for 4 doses may be considered."),
    F(80, "Which CABG graft comes from the chest wall?", "Internal mammary artery", ["Saphenous vein", "Radial artery", "Femoral vein"], "The internal mammary artery runs along the chest wall."),
    F(81, "Which proven benefit of alteplase is listed?", "Smaller infarct, better LV function and lower mortality", ["Lower LDL", "Faster heart rate", "No bleeding risk"], "Alteplase limits infarct size and reduces mortality."),
    F(81, "What is the full name of the abbreviation tPA?", "Tissue plasminogen activator", ["Total platelet antagonist", "Thrombin protein agonist", "Tissue prothrombin activator"], "tPA is tissue plasminogen activator, alteplase (standard teaching)."),
    F(82, "A STEMI patient in cardiogenic shock: within what time must PCI be available to choose PCI over lytics?", "Less than 150 minutes", ["Less than 30 minutes", "Less than 12 hours", "Less than 24 hours"], "In shock, PCI is chosen if available within 150 minutes."),
    F(82, "A STEMI patient had an ischemic stroke 6 weeks ago. Can he get lytics?", "No, ischemic stroke within 3 months is a contraindication", ["Yes, after 2 weeks it is safe", "Yes, at half dose", "Only with aspirin"], "Ischemic stroke in the prior 3 months is a major contraindication."),
    F(82, "What is the door-to-needle quality goal on the reperfusion flowchart?", "Under 30 minutes", ["Under 90 minutes", "Under 120 minutes", "Under 12 hours"], "Door-to-needle is under 30 minutes."),
    F(83, "Which anticoagulants are named for use after fibrinolysis?", "UFH, LMWH or fondaparinux", ["Warfarin only", "Aspirin only", "Bivalirudin only"], "UFH, LMWH or fondaparinux are given 48 hours to 8 days."),
    F(83, "A STEMI patient can get to PCI within the time goal. Should he get alteplase?", "No, lytics are for when invasive treatment is not an option", ["Yes, always both", "Yes, before cath", "Only if diabetic"], "Alteplase is used only when PCI can't be done."),
    F(84, "An ACS patient has potassium 3.1 and magnesium 1.4. Why correct them?", "To reduce arrhythmia risk", ["To lower BP", "To raise troponin", "To prevent bleeding"], "Low K and Mg raise arrhythmia risk."),
    F(84, "Which statin intensity is started in all ACS patients without a contraindication?", "High intensity", ["Low intensity", "Moderate intensity", "None if LDL is low"], "High-intensity statin is started regardless of LDL.")
  ]);
})();
