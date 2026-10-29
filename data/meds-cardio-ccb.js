/*
  Medications: Calcium channel blockers (Cardio Part 1). Source:
  hypertension-part-3.md slides 62-72, hypertensive-crisis.md slides 53-54,
  cardiomyopathies.md slides 37-39. IV nicardipine lives with the hypertensive
  emergency drugs. Only append questions (ids are "<med id>|<index>").
*/
(function () {
  "use strict";
  var H = window.DiseaseContent, M = window.MedContent;
  var Tbl = H.Tbl, HY = H.HY, Mn = H.Mn, Q = H.Q, L = H.L, Med = M.Med, ul = M.ul;

  var compare = Tbl(["", "Dihydropyridine (DHP)", "Non-dihydropyridine"], [
    ["Drugs", "Amlodipine, felodipine, nifedipine, nicardipine (IV)", "Verapamil, diltiazem"],
    ["Main target", "Peripheral arterioles → vasodilation", "Heart: SA and AV node, myocardium"],
    ["Heart rate", "Neutral (reflex tachycardia with short-acting forms)", "Slows HR and AV conduction"],
    ["Signature side effect", "Peripheral edema, flushing, headache", "Bradycardia, AV block, constipation (verapamil)"]
  ]);

  window.CARDIO_MEDS_CCB = L("meds-ccb", "Calcium channel blockers", [

    Med("med-dhp-ccb", "Dihydropyridine CCBs (oral)", "Amlodipine (Norvasc), nifedipine (Procardia, Adalat), felodipine (Plendil)", ["Hypertension Part III", "Hypertensive Crisis", "Cardiomyopathies"], {
      uses: ul([
        "<strong>Hypertension, first line</strong>: work best in <strong>Black patients</strong> (with thiazides), including elderly isolated systolic HTN.",
        "Add-on after ACEI/ARB for <strong>CAD, diabetes, CKD</strong> and recurrent stroke prevention.",
        "Pregnancy: nifedipine is an option (once daily, less safety data than labetalol or methyldopa).",
        "Safe in advanced CKD/ESRD."
      ]),
      moa: "<p>Block calcium channels mainly in the <strong>peripheral arterioles</strong>, causing potent arteriolar vasodilation. Considered <strong>heart-rate neutral</strong> with negligible effect on AV nodal conduction.</p>" + compare,
      avoid: ul([
        "<strong>Short-acting forms</strong> (short-acting nifedipine): sudden BP drop and reflex tachycardia, so they are rarely used.",
        "<strong>Hypertrophic cardiomyopathy with LVOT obstruction</strong>: vasodilators worsen the obstruction.",
        "Significant edema may force you to stop the drug."
      ]),
      se: ul([
        "<strong>Flushing, lightheadedness, dizziness and headache</strong> in 10–20%.",
        "<strong>Peripheral edema</strong>: from increased vascular permeability, not extra volume, so it <strong>does not respond to diuretics</strong>. Less common when given with a RAAS blocker.",
        "<strong>Reflex tachycardia</strong> (baroreceptor response), mainly with short-acting forms."
      ]),
      pearls: ul([
        "Edema on amlodipine: adding an ACEI/ARB helps; adding a diuretic does not.",
        "<strong>Overdose</strong> (5–10x dose): even a DHP causes bradycardia, PR prolongation and hypotension, plus hyperglycemia (insulin release blocked).",
        "CCB-poisoned patients may stay alert until cerebral perfusion suddenly fails: recheck neuro status often.",
        "Overdose treatment: IV fluids, atropine (may not work), activated charcoal, <strong>IV calcium, glucagon</strong>, norepinephrine, high-dose insulin."
      ]) + HY("Amlodipine ankle edema is a permeability problem, not a fluid problem: diuretics won't fix it.")
    }, [
      Q("se", "A patient started on amlodipine has new bilateral ankle edema with normal heart, kidney and liver function. Why won't furosemide help much?", ["The edema is from vascular permeability, not volume overload", "Amlodipine blocks loop diuretics", "The edema is from hypoalbuminemia", "It is lymphedema caused by the drug"], 0, "DHP edema comes from increased vascular permeability, so it is not diuretic-responsive. Adding a RAAS blocker or stopping the CCB helps."),
      Q("uses", "Which first-line classes work best for hypertension in Black patients?", ["CCBs and thiazide diuretics", "ACE inhibitors and ARBs", "Beta blockers and alpha blockers", "Clonidine and hydralazine"], 0, "CCBs and thiazides are more effective in Black patients; ACEI/ARBs are less effective but still second or third line."),
      Q("se", "Why is short-acting nifedipine rarely used?", ["It causes a sudden BP drop with reflex tachycardia", "It causes severe bradycardia", "It causes hyperkalemia", "It is contraindicated in pregnancy"], 0, "Short-acting DHPs drop BP very suddenly, which triggers baroreceptor-mediated reflex tachycardia."),
      Q("moa", "How do dihydropyridine CCBs lower blood pressure?", ["Peripheral arteriolar vasodilation with little effect on heart rate", "Slowing SA and AV node conduction", "Blocking aldosterone", "Reducing renin release via beta-1 blockade"], 0, "DHPs act mostly on peripheral vessels and are heart-rate neutral."),
      Q("se", "Which side effects occur in 10-20% of patients on a DHP CCB?", ["Flushing, dizziness and headache", "Dry cough and angioedema", "Gynecomastia and impotence", "Hirsutism and lupus"], 0, "Flushing, lightheadedness, dizziness and headache are common with DHPs."),
      Q("avoid", "A 19-year-old with obstructive hypertrophic cardiomyopathy has HTN. Which drug should be avoided?", ["Amlodipine", "Metoprolol", "Verapamil", "Diltiazem"], 0, "In obstructive HCM, vasodilators such as DHP CCBs worsen LVOT obstruction. BBs or non-DHP CCBs are used."),
      Q("pearls", "A patient took 10 times their amlodipine dose. Which finding is expected even though it is a DHP?", ["Bradycardia with PR prolongation and hyperglycemia", "Hypoglycemia and tachycardia", "Hyperkalemia and seizures", "Pinpoint pupils and hypothermia"], 0, "At 5-10x dose, even DHPs act on the AV node (bradycardia, PR prolongation) and block insulin release (hyperglycemia)."),
      Q("pearls", "Which treatments are used for CCB overdose?", ["IV calcium, glucagon, pressors and high-dose insulin", "Naloxone and atropine only", "Sodium thiosulfate and methylene blue", "Dialysis and flumazenil"], 0, "CCB overdose: IV fluids, atropine, activated charcoal, IV calcium, glucagon, norepinephrine and high-dose insulin.")
    ]),

    Med("med-non-dhp-ccb", "Non-dihydropyridine CCBs", "Verapamil (Calan, Verelan), diltiazem (Cardizem, Tiazac, Cartia); PO and IV", ["Hypertension Part III", "Hypertensive Crisis", "Cardiomyopathies"], {
      uses: ul([
        "<strong>Atrial fibrillation</strong> rate control (compelling indication with BB) and supraventricular tachyarrhythmias.",
        "<strong>Hypertrophic cardiomyopathy</strong> with LVOT symptoms when a beta blocker is contraindicated (asthma) or not tolerated (feels sluggish).",
        "Hypertension; diltiazem is one of the drugs commonly used in pregnancy."
      ]),
      moa: "<p>Block <strong>cardiac</strong> calcium channels more than vessels: <strong>negative inotropy</strong> (less contractility) and <strong>negative chronotropy</strong> (slower SA and AV node conduction). Verapamil has the stronger cardiac effect.</p>" + compare,
      avoid: ul([
        "<strong>Bradyarrhythmias</strong>: sick sinus syndrome, 2nd or 3rd degree AV block.",
        "<strong>Acutely decompensated HFrEF</strong>: worsens heart failure. Can be resumed after the decompensation is treated (usually 24 hours of diuresis).",
        "Avoid non-DHP CCBs as a heart failure (systolic dysfunction) BP drug.",
        "<strong>Caution with beta blockers</strong>: additive bradycardia and AV block."
      ]),
      se: ul([
        "<strong>Bradycardia</strong> and AV block.",
        "Worsening <strong>systolic heart failure</strong>.",
        "<strong>Constipation</strong>, especially verapamil (25%).",
        "Less edema than DHPs."
      ]),
      pearls: ul([
        "HCM: start with one drug (BB or non-DHP CCB); combining them raises the risk of bradyarrhythmia and intolerance.",
        "Overdose looks like other CCB overdose: bradycardia, PR prolongation, hypotension, hyperglycemia; treat with IV calcium, glucagon, pressors, high-dose insulin."
      ]) + HY("Verapamil: slows the heart, constipates the gut. Never in heart block or decompensated HFrEF.")
    }, [
      Q("avoid", "A patient with sick sinus syndrome needs AFib rate control. Which drug is most dangerous?", ["Verapamil", "Amlodipine", "Losartan", "Chlorthalidone"], 0, "Non-DHP CCBs slow the SA/AV node and should not be used in bradyarrhythmias such as SSS or high-grade AV block."),
      Q("se", "Which non-DHP CCB side effect affects about a quarter of patients on verapamil?", ["Constipation", "Peripheral edema", "Dry cough", "Hirsutism"], 0, "Constipation is common, especially with verapamil (25%)."),
      Q("uses", "A patient with obstructive HCM and severe asthma has exertional angina. Which drug is the best choice?", ["Verapamil or diltiazem", "Metoprolol", "Nifedipine", "Nitroglycerin"], 0, "Non-DHP CCBs are used in HCM when beta blockers are contraindicated (asthma) or not tolerated."),
      Q("avoid", "A patient with acutely decompensated HFrEF is on diltiazem. What should happen?", ["Hold it; it can be resumed after the decompensation is treated", "Increase the dose to control heart rate", "Switch to verapamil", "Add metoprolol"], 0, "Non-DHP CCBs depress contractility and should not be used in acutely decompensated HFrEF; they can be resumed after about 24 hours of diuresis."),
      Q("moa", "What are the cardiac effects of verapamil and diltiazem?", ["Negative inotropy and negative chronotropy", "Positive inotropy and reflex tachycardia", "Arteriolar dilation with no cardiac effect", "Increased AV node conduction"], 0, "Non-DHPs decrease contractility and slow SA/AV conduction."),
      Q("avoid", "Why use caution when combining diltiazem with metoprolol?", ["Additive bradycardia and AV block", "Severe hyperkalemia", "Risk of angioedema", "They cancel each other out"], 0, "Both slow the heart; together they raise the risk of bradycardia and heart block."),
      Q("uses", "Which compelling indication is shared by beta blockers and non-DHP CCBs?", ["Atrial fibrillation (rate control)", "Pregnancy", "Proteinuric CKD", "Gout"], 0, "AFib: beta blocker or non-DHP CCB, then ACEI/ARB, then thiazide."),
      Q("se", "Compared with amlodipine, how likely is verapamil to cause edema?", ["Less likely", "More likely", "Equally likely", "Edema only occurs with verapamil"], 0, "Non-DHPs are less likely to cause or worsen edema than DHPs.")
    ])
  ]);
}());
