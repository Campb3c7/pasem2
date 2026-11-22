/* Exam prep, CAD Part V: Pharmacology (Stager). Rebuilt 2026-11-22 round 2: drugs, how they work and their
   little facts (onset, doses, side effects, contraindications, interactions), as short AI-style cases like her
   application (metoprolol mechanism, nitro venodilation, metoprolol succinate with asthma, verapamil for spasm).
   See data/exam-prep.js. */
(function () {
  "use strict";
  var X = ExamPrep.X;
  ExamPrep.lecture({
    id: "cad-part-5", title: "CAD Part V: Pharmacology", short: "CAD V", group: "CAD",
    concepts: {
      goals: "Supply vs demand and treatment goals (LO 1)",
      nitrate: "Nitrates (LO 2)",
      bb: "Beta-blockers (LO 3)",
      ccb: "DHP vs non-DHP calcium channel blockers (LO 4)",
      rano: "Ranolazine (LO 5)",
      acs: "ACS drugs: nitro, BB, ACEi/ARB, statin, O2, opioids (LO 6)",
      classes: "Antiplatelet vs anticoagulant vs fibrinolytic (LO 7)",
      p2y12: "Aspirin and the P2Y12 inhibitors (LO 8)",
      lytic: "Anticoagulants and fibrinolytics in ACS (LO 9)"
    },
    qs: [
      /* LO 1 */
      X("goals", "Classify", 2, "Which is a determinant of myocardial oxygen DEMAND?", "Ventricular wall stress", ["Hemoglobin level", "Coronary perfusion pressure", "Oxygen saturation"], "Demand is heart rate, contractility and wall stress; supply is flow and O2 content."),
      X("goals", "Classify", 3, "A patient with stable CAD develops angina during a fever and hyperthyroid storm. What is the problem?", "Increased O2 demand", ["Decreased O2 supply", "A new plaque rupture", "Coronary spasm only"], "Fever, hyperthyroidism, stimulants and albuterol raise demand."),
      X("goals", "Classify", 3, "A patient with known CAD gets angina with a hemoglobin of 6. What is the problem?", "Decreased O2 supply", ["Increased O2 demand", "Plaque rupture", "Drug toxicity"], "Anemia, hypoxemia and sickle cell lower supply."),
      X("goals", "Classify", 3, "Which condition both raises demand and lowers supply?", "Aortic stenosis", ["Anemia", "Fever", "Hypoxemia"], "AS and HCM appear on both sides of the balance."),
      X("goals", "Fact", 4, "How fast should SL nitro relieve true angina?", "Within 45 seconds to 5 minutes", ["Within 1 second of the dose", "Only after 30 minutes", "Only after 2 hours of rest"], "Angina lasts 2-30 minutes and responds to nitro within 5 minutes."),
      X("goals", "Fact", 5, "What are the short-term goals of CAD drug therapy?", "Relieve angina and restore supply-demand balance", ["Cure the plaque permanently", "Lower HDL and raise the LDL", "Raise the heart rate and output"], "Long-term goals are preventing MI, arrhythmia, HF and death."),
      X("goals", "Fact", 10, "Which antianginal is commonly used first for chronic stable angina?", "A beta-blocker or a calcium channel blocker", ["Ranolazine by itself as first line", "A long-acting nitrate alone", "Digoxin once daily"], "Choose by HR, BP, LV function and comorbidities; add others if symptoms persist."),
      X("goals", "Trap", 8, "A CAD patient asks if red wine will protect his heart. What does the deck say?", "Don't recommend alcohol for heart benefit", ["Yes, one glass of wine daily", "Yes, two glasses daily for men", "Only red wine, not beer or spirits"], "Discuss risks and moderation, but alcohol is never prescribed for the heart."),

      /* LO 2: nitrates */
      X("nitrate", "Mechanism", 11, "How does nitroglycerin mainly relieve angina?", "Venodilation lowers preload and O2 demand", ["It raises the heart rate", "It raises afterload on the LV", "It dissolves the coronary clot"], "NO relaxes veins, lowering preload and wall stress."),
      X("nitrate", "Mechanism", 11, "What do nitrates become in the body?", "Nitric oxide", ["Carbon monoxide", "Adenosine", "Prostacyclin"], "NO relaxes vascular smooth muscle."),
      X("nitrate", "Why", 11, "Why do nitrates also help vasospastic angina?", "They dilate coronary arteries and relieve spasm", ["They block beta receptors", "They thin the blood", "They slow the AV node"], "Coronary dilation treats spasm directly."),
      X("nitrate", "Fact", 13, "What is the onset of SL nitroglycerin?", "1-3 minutes", ["20-40 minutes", "40-60 minutes", "4-6 hours"], "SL nitro works in 1-3 minutes and lasts 30-60 minutes."),
      X("nitrate", "Fact", 13, "Which nitrate is dosed at 30 mg once daily for stable angina?", "Isosorbide mononitrate", ["SL nitroglycerin", "IV nitroglycerin", "Isosorbide dinitrate"], "Isosorbide mononitrate ER is once daily; dinitrate is 2-3 times a day."),
      X("nitrate", "Fact", 13, "Which nitrate forms are used for acute chest pain rather than prevention?", "SL and IV nitroglycerin", ["Isosorbide mononitrate", "Isosorbide dinitrate", "The nitro patch"], "The long-acting forms are for stable angina prevention."),
      X("nitrate", "Pick the drug", 14, "Hypertensive emergency with pulmonary edema. Which nitrate is the treatment of choice?", "IV nitroglycerin", ["SL nitro once", "Isosorbide mononitrate", "Nitro patch"], "IV nitro is titratable with a transient effect."),
      X("nitrate", "Next step", 15, "A CAD patient takes one SL nitro and the pain is not gone in 5 minutes. What should he do?", "Call 911", ["Wait 30 minutes", "Take 3 more at once", "Drive to clinic tomorrow"], "Call 911 at 5 minutes; don't wait to finish all three doses."),
      X("nitrate", "Fact", 16, "How should a patient take SL nitroglycerin?", "Sit down and let it dissolve under the tongue", ["Swallow it whole with water", "Chew it while standing up", "Take it only after exercise ends"], "Sitting avoids orthostatic falls; swallowing it makes it ineffective."),
      X("nitrate", "Why", 16, "Why do nitrates cause headache?", "Cerebral vasodilation", ["Coronary spasm", "Hypoglycemia", "Raised BP"], "Headache comes from dilated cerebral vessels and doesn't mean the drug is working."),
      X("nitrate", "Fact", 17, "Where do long-acting nitrates fit in stable angina?", "Second line when a beta-blocker isn't enough", ["First line for every patient", "Only for acute chest pain", "Only after a CABG"], "They're added for frequent angina despite a beta-blocker."),
      X("nitrate", "Why", 18, "Why is immediate-release isosorbide mononitrate dosed at 8 am and 3 pm?", "To leave a nitrate-free interval overnight", ["To match the patient's meal times", "Because each dose lasts 24 hours", "To prevent headaches at night"], "A 10-12 hour nitrate-free interval prevents tolerance."),
      X("nitrate", "Fact", 19, "How soon can nitrate tolerance develop with continuous use?", "24-48 hours", ["1 hour", "6 months", "Never"], "Continuous exposure causes tachyphylaxis within 1-2 days."),
      X("nitrate", "Trap", 21, "A man on tadalafil yesterday has chest pain. Why avoid nitro?", "Severe hypotension if nitro is given within 24 hours", ["Tadalafil makes nitroglycerin ineffective", "Nitroglycerin raises tadalafil to toxic levels", "Tadalafil itself causes coronary spasm"], "PDE-5 inhibitors include sildenafil, vardenafil and tadalafil."),
      X("nitrate", "Trap", 22, "Why use nitrates cautiously in HCM with outflow obstruction?", "Lower preload worsens the obstruction", ["They cause complete heart block", "They raise afterload on the LV", "They cause severe hyperkalemia"], "A smaller LV cavity pulls the septum and mitral leaflet together."),
      X("nitrate", "Trap", 24, "Substernal pain resolves with nitro. Does that prove it was cardiac?", "No: nitro also relieves esophageal spasm", ["Yes, always", "Yes, if relief took 5 minutes", "Only in women"], "Esophageal spasm also responds to nitrates."),
      X("nitrate", "Fact", 23, "What should you track at each visit for a patient on nitrates?", "BP, HR, dizziness and how often SL nitro is used", ["Liver enzymes every week", "Serum uric acid", "The INR"], "More SL nitro use or a new pattern needs urgent evaluation."),

      /* LO 3: beta-blockers */
      X("bb", "Mechanism", 27, "How does metoprolol lower myocardial O2 demand?", "Lowers heart rate and contractility", ["Raises heart rate and dilates coronaries", "Raises preload and wall tension", "Blocks platelet aggregation"], "Beta-1 blockade slows the heart and weakens contraction; BP also falls."),
      X("bb", "Why", 27, "Besides lowering demand, how does a slower heart rate help supply?", "Longer diastole gives more coronary filling time", ["Faster ejection pushes more blood in", "It raises the hemoglobin level", "It dilates the aortic root"], "Coronaries fill in diastole."),
      X("bb", "Fact", 25, "Where are beta-1 receptors mainly found?", "Heart and kidney juxtaglomerular cells", ["Bronchial smooth muscle", "Skeletal muscle", "The liver"], "Beta-1 raises HR, contractility, AV conduction and renin."),
      X("bb", "Pick the drug", 28, "Stable angina in a patient with asthma. Which beta-blocker is safest?", "Metoprolol succinate", ["Propranolol", "Nadolol", "Timolol"], "Beta-1 selective agents cause less bronchospasm."),
      X("bb", "Classify", 28, "Which beta-blocker also blocks alpha-1?", "Carvedilol", ["Metoprolol", "Atenolol", "Bisoprolol"], "Carvedilol and labetalol add alpha-1 blockade."),
      X("bb", "Classify", 28, "Which is a nonselective beta-blocker?", "Propranolol", ["Metoprolol", "Atenolol", "Bisoprolol"], "Propranolol, nadolol and timolol block beta-1 and beta-2."),
      X("bb", "Fact", 27, "What is first-line therapy to control symptoms in chronic stable angina?", "A beta-blocker", ["Ranolazine", "A long-acting nitrate", "Ivabradine"], "Beta-blockers are first line; CCBs are an alternative."),
      X("bb", "Trap", 31, "A diabetic on insulin starts a beta-blocker. What warning should you give?", "It can hide the fast heartbeat of hypoglycemia", ["It raises glucose in everyone", "It makes insulin stop working", "It lowers the A1c on its own"], "Beta-blockers mask adrenergic hypoglycemia signs."),
      X("bb", "Trap", 31, "A patient stops metoprolol abruptly. What can happen?", "Rebound tachycardia, angina or MI", ["Nothing, since it just wears off", "Severe bradycardia and block", "Hypokalemia and cramps"], "Taper beta-blockers gradually."),
      X("bb", "Trap", 32, "Which is a contraindication to a beta-blocker?", "Third-degree AV block without a pacemaker", ["Stable exertional angina", "A prior MI with normal EF", "Hypertension alone"], "Also severe bradycardia, decompensated HF, shock and active bronchospasm."),
      X("bb", "Fact", 31, "Which is a general beta-blocker side effect?", "Fatigue and reduced exercise tolerance", ["Gingival hyperplasia", "A dry cough", "Hirsutism"], "Fatigue, dizziness, cold extremities and sexual dysfunction are common."),

      /* LO 4: CCBs */
      X("ccb", "Compare", 34, "Where do DHP and non-DHP CCBs mainly act?", "DHP: vessels; non-DHP: heart", ["DHP: heart; non-DHP: vessels", "Both only on the heart", "Both only on veins"], "DHPs dilate arteries; non-DHPs slow HR and contractility."),
      X("ccb", "Classify", 34, "Which CCB is a dihydropyridine?", "Amlodipine", ["Verapamil", "Diltiazem", "Metoprolol"], "Amlodipine and nifedipine are DHPs; verapamil and diltiazem are non-DHPs."),
      X("ccb", "Pick the drug", 35, "Stable angina still not controlled on metoprolol. Which CCB is safe to add?", "Amlodipine", ["Verapamil", "Diltiazem", "None; never combine"], "A DHP pairs safely with a beta-blocker."),
      X("ccb", "Trap", 35, "Why avoid combining metoprolol with verapamil?", "Bradycardia, AV block and weaker LV", ["Severe hyperkalemia", "Lactic acidosis", "Acute liver failure"], "Both slow the heart and weaken contraction."),
      X("ccb", "Pick the drug", 35, "A 42-year-old smoker with night rest pain, transient ST elevation and clean coronaries. Long-term drug?", "Verapamil", ["Propranolol", "Digoxin", "Furosemide"], "CCBs are first-line for vasospastic angina; nonselective beta-blockers can worsen it."),
      X("ccb", "Fact", 36, "A patient on amlodipine has ankle swelling. Why?", "DHP arterial dilation causes peripheral edema", ["Heart failure from the drug", "Kidney failure", "A DVT is certain"], "Edema, headache and flushing are DHP side effects."),
      X("ccb", "Trap", 36, "Why is short-acting nifedipine a problem in angina?", "Reflex tachycardia raises O2 demand", ["It causes severe bradycardia", "It causes constipation", "It causes bronchospasm"], "Rapid vasodilation triggers reflex tachycardia."),
      X("ccb", "Fact", 37, "Which CCB side effect is most typical of verapamil?", "Constipation", ["Ankle edema", "Reflex tachycardia", "Cough"], "Verapamil causes constipation, bradycardia and AV block."),
      X("ccb", "Trap", 37, "Why avoid diltiazem in HFrEF?", "It can worsen heart failure", ["It raises LDL", "It causes hypoglycemia", "It causes cough"], "Non-DHPs depress contractility."),

      /* LO 5: ranolazine */
      X("rano", "Mechanism", 38, "How does ranolazine work?", "Blocks the late sodium current", ["Blocks beta-1 receptors in the heart", "Releases nitric oxide in veins", "Blocks L-type calcium channels"], "Less intracellular sodium means less calcium influx and wall tension."),
      X("rano", "Fact", 38, "What does ranolazine do to heart rate and BP?", "No effect on either", ["Lowers both", "Raises both", "Lowers HR only"], "That makes it useful when BP or HR is already low."),
      X("rano", "Pick the drug", 39, "Angina on metoprolol and amlodipine, BP 102/60, HR 54. What can you add?", "Ranolazine", ["More metoprolol", "Verapamil", "A higher nitrate dose"], "Ranolazine relieves angina without lowering HR or BP."),
      X("rano", "Fact", 39, "What is ranolazine's starting dose?", "500 mg ER twice daily", ["1,000 mg once daily", "50 mg daily", "2,000 mg twice daily"], "It can go up to 1,000 mg twice daily if tolerated."),
      X("rano", "Trap", 40, "Which EKG change must you watch for on ranolazine?", "QT prolongation", ["PR shortening", "Delta waves", "ST elevation"], "Ranolazine prolongs the ventricular action potential."),
      X("rano", "Trap", 40, "In which patient is ranolazine contraindicated?", "Liver cirrhosis", ["Asthma", "Gout", "Diabetes"], "It is extensively metabolized by the liver."),
      X("rano", "Trap", 41, "A patient on ranolazine takes digoxin. What happens?", "Digoxin levels rise", ["Digoxin stops working", "Ranolazine levels fall", "Nothing"], "Monitor and adjust the digoxin dose."),
      X("rano", "Trap", 41, "A patient starting ranolazine takes simvastatin 40 mg. What do you do?", "Lower simvastatin to 20 mg max", ["Stop ranolazine", "Raise simvastatin to 80 mg", "Nothing"], "Ranolazine raises simvastatin levels."),
      X("rano", "Trap", 41, "Which drug should be avoided with ranolazine?", "Clarithromycin", ["Amoxicillin", "Acetaminophen", "Metformin"], "Strong CYP3A inhibitors like ketoconazole and clarithromycin raise levels."),
      X("rano", "Fact", 41, "A patient on diltiazem or drinking grapefruit juice needs ranolazine. Max dose?", "500 mg twice daily", ["1,000 mg twice daily", "250 mg once daily", "No limit"], "Moderate CYP3A inhibitors cap the dose at 500 mg twice daily."),

      /* LO 6: ACS drugs */
      X("acs", "Fact", 46, "What are the core ACS therapies?", "Aspirin, a P2Y12 inhibitor, an anticoagulant", ["Morphine, oxygen and nitrates", "Digoxin, furosemide and ranolazine", "Statin, ezetimibe and niacin"], "Plus reperfusion when indicated; nitro, BB and O2 are symptom-directed."),
      X("acs", "Trap", 46, "Which drugs should be avoided routinely in ACS?", "Non-aspirin NSAIDs and prophylactic antiarrhythmics", ["Aspirin and heparin", "Statins and beta-blockers", "ACE inhibitors and ARBs"], "NSAIDs raise CV events; prophylactic lidocaine doesn't help."),
      X("acs", "Trap", 47, "ACS with suspected RV infarct. Which drug should be held?", "Nitroglycerin", ["Aspirin", "Heparin", "Atorvastatin"], "Nitro drops preload in a preload-dependent RV."),
      X("acs", "Fact", 49, "Which is a benefit of beta-blockers in ACS?", "Fewer lethal ventricular arrhythmias", ["Dissolving the coronary clot", "Faster LDL clearance by the liver", "More platelet aggregation"], "They also shrink infarct size and lower reinfarction."),
      X("acs", "Fact", 50, "Should a beta-blocker be given before PCI in ACS?", "No benefit if it starts within 24 hours", ["Yes, always give it IV before PCI", "Never give one in ACS", "Only start it after 6 weeks"], "Starting within the first 24 hours is what matters."),
      X("acs", "Fact", 51, "What HR and BP goal do you titrate a beta-blocker to in ACS?", "HR 55-70, systolic over 90", ["HR 40-50, systolic over 70", "HR 80-100, systolic over 140", "HR under 40"], "Avoid it if HR is under 55, SBP under 90 or there's active wheezing."),
      X("acs", "Trap", 51, "ACS patient, HR 50, BP 88/60. Beta-blocker now?", "No: hold it and reassess", ["Yes, IV metoprolol", "Yes, double the dose", "Yes, with atropine"], "Bradycardia under 55 and SBP under 90 are contraindications."),
      X("acs", "Pick the drug", 52, "Post-MI with LVEF 35%. Which beta-blockers are guideline-preferred long term?", "Metoprolol succinate, carvedilol or bisoprolol", ["Metoprolol tartrate, atenolol or propranolol", "Labetalol or nadolol", "Any beta-blocker"], "These three have HFrEF outcome data."),
      X("acs", "Fact", 52, "Uncomplicated MI with normal EF after revascularization. Lifelong beta-blocker?", "Not clearly beneficial; reassess over time", ["Mandatory forever", "Contraindicated after PCI", "Only if HR stays over 100"], "Routine lifelong use hasn't shown clear benefit with preserved EF."),
      X("acs", "Fact", 54, "What must you monitor after starting an ACE inhibitor post-MI?", "BP, creatinine and potassium", ["Liver enzymes and INR", "Glucose and A1c", "Uric acid and CK"], "ACEi can raise creatinine and potassium; don't combine ACEi with ARB."),
      X("acs", "Pick the drug", 53, "Post-MI patient gets a cough on lisinopril. What do you switch to?", "An ARB like losartan", ["An ACEi plus an ARB", "Nothing; stop RAAS blockers", "A nondihydropyridine CCB"], "An ARB is used if an ACE inhibitor isn't tolerated."),
      X("acs", "Fact", 84, "Should a high-intensity statin start in ACS if the LDL is already 70?", "Yes, regardless of baseline LDL", ["No, LDL is at goal", "Only if LDL is over 190", "Only after 3 months"], "Start a high-intensity statin in every ACS patient without contraindication."),
      X("acs", "Fact", 55, "When are opioids used in ACS?", "Severe pain despite maximal anti-ischemic therapy", ["First line for all chest pain", "To treat hypotension in ACS", "Before the aspirin is given"], "They're not routine and can delay oral P2Y12 effect."),
      X("acs", "Pick the drug", 56, "After IV morphine, an ACS patient's RR drops to 6. What do you give?", "Naloxone 0.4 mg IV", ["Flumazenil", "Atropine", "More morphine"], "Naloxone reverses opioid respiratory depression."),
      X("acs", "Trap", 56, "A patient itches after morphine. Is it an allergy?", "Not necessarily: histamine release", ["Yes, always", "Yes, and avoid all opioids forever", "It means anaphylaxis"], "Pruritus from histamine release does not always mean allergy."),
      X("acs", "Fact", 57, "What is the IV morphine dose for refractory ACS pain?", "2-4 mg, may repeat every 5-15 min", ["20 mg once as a bolus", "0.1 mg once only", "50 mg every hour"], "Doses up to 10 mg may be considered."),
      X("acs", "Fact", 57, "When should IV nitroglycerin be stopped or avoided in ACS?", "SBP under 90 or a drop over 30 below baseline", ["SBP over 140", "Heart rate under 100", "Any headache at all"], "Also avoid it in suspected RV infarction."),
      X("acs", "Fact", 84, "Which electrolytes are corrected in ACS to lower arrhythmia risk?", "Potassium and magnesium", ["Sodium and chloride", "Calcium and phosphate", "Bicarbonate only"], "Correct hypokalemia and hypomagnesemia."),

      /* LO 7 */
      X("classes", "Compare", 59, "What do antiplatelets, anticoagulants and fibrinolytics target?", "Platelet plug, fibrin formation, existing fibrin", ["Fibrin, platelets and LDL", "Only the platelet plug, all three", "Existing clot, fibrin and platelets"], "Antiplatelets stop the plug, anticoagulants slow the mesh, fibrinolytics dissolve it."),
      X("classes", "Classify", 59, "Which drug is an anticoagulant?", "Bivalirudin", ["Ticagrelor", "Tenecteplase", "Aspirin"], "Heparin, enoxaparin and bivalirudin are anticoagulants."),
      X("classes", "Classify", 59, "Which drug is a fibrinolytic?", "Tenecteplase", ["Enoxaparin", "Prasugrel", "Clopidogrel"], "Tenecteplase and alteplase break down fibrin."),
      X("classes", "Why", 71, "Why are aspirin, a P2Y12 inhibitor and heparin used together in ACS?", "Platelet and fibrin pathways are both active", ["They cancel out each other's bleeding", "Heparin activates the aspirin", "Only one of them actually works"], "Antiplatelets and anticoagulants are complementary."),

      /* LO 8 */
      X("p2y12", "Mechanism", 61, "How does aspirin work?", "Irreversibly blocks platelet COX-1", ["Reversibly blocks the ADP receptor", "Directly blocks thrombin", "Activates plasminogen to plasmin"], "The effect lasts for the platelet's life."),
      X("p2y12", "Fact", 62, "A patient on daily aspirin 81 mg arrives with ACS. Do you still give a loading dose?", "Yes: 162-325 mg chewed, then 81 mg daily", ["No, he's already on it", "Only if over 65", "Only enteric-coated 81 mg"], "Give the loading dose even if he takes daily aspirin."),
      X("p2y12", "Fact", 63, "After 12 months of DAPT post-ACS, what continues?", "Low-dose aspirin long term", ["Nothing", "Warfarin", "Clopidogrel 600 mg daily"], "Aspirin continues for secondary prevention."),
      X("p2y12", "Fact", 65, "What is clopidogrel's maintenance dose?", "75 mg daily", ["10 mg daily", "90 mg twice daily", "600 mg daily"], "Load 300-600 mg in ACS, then 75 mg daily."),
      X("p2y12", "Trap", 65, "A patient on clopidogrel has fever, confusion, low platelets and rising creatinine. What should you suspect?", "TTP", ["HIT", "DIC from sepsis only", "ITP"], "TTP is a rare but serious P2Y12 inhibitor reaction."),
      X("p2y12", "Pick the drug", 65, "Which P2Y12 inhibitor is also used after ischemic stroke and for symptomatic PAD?", "Clopidogrel", ["Prasugrel", "Ticagrelor", "None of them"], "Clopidogrel covers ACS, stroke and PAD."),
      X("p2y12", "Trap", 67, "STEMI going to PCI, history of TIA. Which P2Y12 inhibitor is contraindicated?", "Prasugrel", ["Ticagrelor", "Clopidogrel", "None"], "Prasugrel is contraindicated with prior stroke or TIA."),
      X("p2y12", "Fact", 67, "Why is prasugrel generally avoided at age 75 or older?", "Bleeding risk", ["Liver failure", "Hyperkalemia", "QT prolongation"], "Bleeding is its most important adverse effect."),
      X("p2y12", "Fact", 66, "What is prasugrel's loading and maintenance dose?", "60 mg load, 10 mg daily", ["300 mg load, 75 mg daily", "180 mg load, 90 mg twice daily", "325 mg load, 81 mg daily"], "Consider 5 mg daily if under 60 kg."),
      X("p2y12", "Fact", 68, "What is ticagrelor's loading and maintenance dose?", "180 mg load, 90 mg twice daily", ["60 mg load, 10 mg daily", "600 mg load, 75 mg daily", "50 mg once only"], "Use 90 mg twice daily for the first 12 months."),
      X("p2y12", "Compare", 68, "Which P2Y12 inhibitor can be used for ACS managed medically or with PCI?", "Ticagrelor", ["Prasugrel", "Neither", "Only aspirin"], "Prasugrel is for ACS patients going to PCI."),
      X("p2y12", "Trap", 69, "A patient on ticagrelor has mild new shortness of breath. Next step?", "Look for HF or ischemia first; it often fades", ["Stop all antiplatelets at once", "Start albuterol and ignore it", "Switch to prasugrel plus aspirin"], "Ticagrelor dyspnea is usually mild and fades."),
      X("p2y12", "Trap", 69, "A patient with gout needs a P2Y12 inhibitor. Which one needs caution?", "Ticagrelor", ["Clopidogrel", "Prasugrel", "None"], "Ticagrelor can raise uric acid."),
      X("p2y12", "Trap", 70, "Why keep aspirin at 81 mg with ticagrelor?", "Over 100 mg a day lowers ticagrelor's effect", ["Ticagrelor raises aspirin levels", "Aspirin over 81 causes TTP", "It's the only size made"], "Use maintenance aspirin 75-100 mg with ticagrelor."),
      X("p2y12", "Classify", 60, "Which P2Y12 inhibitors are thienopyridines?", "Clopidogrel and prasugrel", ["Ticagrelor and clopidogrel", "Ticagrelor and prasugrel", "All three"], "Ticagrelor is a non-thienopyridine."),

      /* LO 9 */
      X("lytic", "Pick the drug", 73, "STEMI going to the cath lab. Which anticoagulant is preferred?", "Unfractionated heparin drip", ["Enoxaparin SQ", "Warfarin by mouth", "Rivaroxaban by mouth"], "UFH is preferred with plans for LHC; enoxaparin if no cath is expected."),
      X("lytic", "Fact", 72, "What is the therapeutic enoxaparin dose in ACS?", "1 mg/kg SQ every 12 hours", ["40 mg SQ daily", "5,000 units SQ three times a day", "1 mg/kg IV once"], "That is the full anticoagulant dose."),
      X("lytic", "Mechanism", 81, "How does alteplase work?", "Turns plasminogen into plasmin to break fibrin", ["Blocks platelet thromboxane A2", "Blocks thrombin and factor Xa", "Blocks the platelet ADP receptor"], "Plasmin dissolves the fibrin mesh of the clot."),
      X("lytic", "Trap", 81, "For which ACS is alteplase used?", "STEMI only", ["NSTEMI and STEMI", "Unstable angina", "All ACS"], "Lytics have no role in UA or NSTEMI."),
      X("lytic", "Compare", 81, "How does alteplase compare with PCI for STEMI?", "Inferior; used only when PCI can't be done in time", ["Superior in every case", "Equal, so either one is fine", "Used only after PCI has failed"], "Alteplase helps but is far inferior to PCI."),
      X("lytic", "Fact", 83, "After a fibrinolytic, how long is an anticoagulant continued?", "At least 48 hours, up to 8 days", ["Not at all after lytics", "For 1 hour only", "Lifelong"], "UFH, LMWH or fondaparinux prevents new thrombosis as the clot lyses."),
      X("lytic", "Next step", 79, "Before PCI, a patient had a mild contrast reaction in the past. What do you do?", "Pretreat with a steroid or antihistamine", ["Cancel the PCI entirely", "Give double the contrast", "Give a beta-blocker first"], "Anaphylactoid reactions can be prevented with pretreatment."),
      X("lytic", "Next step", 79, "How do you protect the kidneys before a PCI?", "IV normal saline pre-hydration", ["Strict fluid restriction", "An NSAID before the cath", "IV furosemide before the cath"], "Pre-hydration is key; hold metformin and other nephrotoxins.")
    ]
  });
})();
