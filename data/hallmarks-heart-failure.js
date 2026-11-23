/* Hallmarks: Heart Failure (Brandell). Source: source-material/cardio-part-3/text/heart-failure.md. Only APPEND hallmarks. */
(function () {
  "use strict";
  var C = window.Hallmarks.C;
  window.Hallmarks.lecture("heart-failure", "Heart Failure", [

    C("hm-hfref", "HFrEF (systolic dysfunction)", "Weak squeeze: the EF falls and the ventricle dilates.",
      "Low EF + dilated (eccentric) LV + S3 + displaced PMI = HFrEF.", [
        ["test", "Reduced EF on echo (normal 55-70%)", "Impaired contractility lowers the fraction ejected each beat."],
        ["exam", "S3 gallop ('Lub-Dub-Tah')", "An S3 marks high LV filling pressure and is more common in HFrEF."],
        ["test", "Eccentric (elongated) remodeling with a dilated ventricle", "Rising preload stretches and dilates the weak ventricle."],
        ["exam", "Laterally displaced, sustained PMI", "LV enlargement pushes the apex outward."],
        ["cause", "Ischemic heart disease, dilated cardiomyopathy, myocarditis", "These impair the heart's contractile performance."],
        ["labs", "proBNP more often elevated than in HFpEF", "A dilated ventricle has more wall stretch, so it releases more BNP."]
      ], { x: ["hm-left-hf", "hm-ischemic-cm"] }),

    C("hm-hfpef", "HFpEF (diastolic dysfunction)", "Stiff ventricle: it can't relax or fill, but EF is normal.",
      "Normal EF + thick stiff LV (concentric) + S4 + exercise intolerance + can't raise HR = HFpEF.", [
        ["test", "Normal EF with impaired relaxation and filling", "The problem is filling, not squeezing."],
        ["exam", "S4 gallop ('Tah-Lub-Dub', atrial kick)", "The atrium pushes blood into a stiff, noncompliant ventricle."],
        ["test", "Concentric remodeling: thick walls, small chamber, interstitial fibrosis", "Pressure overload thickens the wall inward."],
        ["sx", "Exercise intolerance is the main symptom", "A stiff LV can't increase stroke volume with exercise.", ["hm-left-hf", "hm-hfref", "hm-ischemic-cm", "hm-hypertensive-hf"]],
        ["buzz", "Chronotropic incompetence: can't raise heart rate with exercise", "That is a key difference from HFrEF."],
        ["avoid", "Over-diuresis and tachycardia", "Both cut filling, and the stiff ventricle depends on preload and filling time."],
        ["tx", "Potassium-sparing diuretics preferred; ACEi/ARB/ARNI/BB show no mortality benefit", "Treatment relieves congestion and controls BP and comorbidities."]
      ]),

    C("hm-left-hf", "Left-sided heart failure", "Blood backs up into the lungs.",
      "Orthopnea, PND, rales, frothy sputum, hypoxia = left-sided failure; MCC HTN and acute MI.", [
        ["sx", "Orthopnea and paroxysmal nocturnal dyspnea", "Lying flat shifts fluid back into the congested lungs."],
        ["exam", "Pulmonary rales and cough with frothy sputum", "High pulmonary venous pressure pushes fluid into the alveoli."],
        ["cause", "Most common causes: hypertension and acute MI", "Those are the slide's MCCs for left-sided dysfunction."],
        ["exam", "Narrow pulse pressure, cyanosis, pallor, confusion", "Low cardiac output narrows pulse pressure and starves the brain."],
        ["danger", "Eventually progresses to right-sided failure", "Pulmonary congestion overloads the RV over time."]
      ], { x: ["hm-hfref", "hm-acute-hf", "hm-pnd"] }),

    C("hm-right-hf", "Right-sided heart failure", "Blood backs up into the body's veins.",
      "JVD, peripheral edema, hepatomegaly with RUQ pain, ascites; most common cause = left-sided failure.", [
        ["exam", "Jugular venous distention", "JVD is the starred sign of right ventricular dysfunction."],
        ["exam", "Dependent pitting edema, hepatomegaly with RUQ pain, ascites", "Systemic venous congestion fills the legs, liver and abdomen."],
        ["cause", "Most common cause: left ventricular failure", "Left-sided failure is the MCC of right-sided failure."],
        ["sx", "GI congestion: abdominal pain, anorexia, poor nutrient absorption", "Bowel wall edema impairs eating and absorption."]
      ], { x: ["hm-cor-pulmonale", "hm-anasarca"] }),

    C("hm-cor-pulmonale", "Cor pulmonale", "Right heart failure caused by lung disease.",
      "Chronic lung disease or PE → sustained pulmonary HTN → RV fails = cor pulmonale.", [
        ["cause", "Sustained pulmonary hypertension from chronic lung disease, pneumonia, PE, or AS/MS", "The RV fails against chronically high pulmonary pressure."],
        ["who", "Untreated obstructive sleep apnea", "OSA causes RV hypertrophy, pulmonary HTN and then cor pulmonale."],
        ["tx", "New onset from PE: image to confirm, anticoagulate, support the RV", "The slide's plan for acute right failure from PE."]
      ], { x: ["hm-right-hf"] }),

    C("hm-ischemic-cm", "Ischemic cardiomyopathy", "HF caused by CAD and prior MI.",
      "Prior MI + low EF = ischemic cardiomyopathy; HF from CAD is the most common presentation in men.", [
        ["who", "Most common HF presentation in men", "HF associated with CAD is the MC presentation in men."],
        ["cause", "CAD, particularly prior MI", "Dead or ischemic muscle can't contract."],
        ["dx", "Cath if intermediate or high pretest probability of CAD", "Surgical revascularization improves outcomes in ischemic HF."]
      ], { x: ["hm-hfref", "hm-hypertensive-hf"] }),

    C("hm-hypertensive-hf", "Hypertensive heart failure", "HF driven by long-standing hypertension.",
      "Long-standing HTN + LVH = hypertensive HF; the most common presentation in women.", [
        ["who", "Most common HF presentation in women", "HF associated with HTN is the MC presentation in women."],
        ["cause", "Pressure overload from hypertension leading to LV hypertrophy", "High afterload thickens the wall and stiffens it."],
        ["tx", "Blood pressure control (ACEi/ARB)", "Lowering BP improves diastolic function regardless of drug."]
      ], { x: ["hm-ischemic-cm", "hm-hfpef"] }),

    C("hm-acute-hf", "Acute decompensated HF", "A flare of HF that lands the patient in the ED.",
      "Sitting up gasping, cool and clammy, crackles, weight gain, leg swelling = decompensated HF; NIV + nitro + IV furosemide.", [
        ["sx", "Acute respiratory distress from pulmonary edema: the MC reason to come to the ED", "Fluid floods the alveoli and causes hypoxia."],
        ["exam", "Sitting upright, gasping, cool and clammy, crackles, Cheyne-Stokes breathing", "That is the classic decompensated presentation."],
        ["cause", "Noncompliance (diet, meds), uncontrolled HTN, missed dialysis, stimulants, new negative inotrope or NSAID", "These are the slide's precipitants."],
        ["test", "CXR: pulmonary venous congestion, cardiomegaly, Kerley lines", "These are the most common CXR findings in acute HF."],
        ["tx", "NIV (CPAP/BiPAP) if needed, nitroglycerin, then IV furosemide (40 mg if naive)", "Lower afterload and preload first, then remove fluid."],
        ["avoid", "Beta blockers, CCBs and digoxin in the acute setting", "These are contraindicated in acute HF."]
      ], { x: ["hm-left-hf", "hm-flash-pe-htn"] }),

    C("hm-flash-pe-htn", "Hypertensive acute HF (afterload-sensitive)", "Pulmonary edema triggered by high blood pressure.",
      "SBP ≥150 + pulmonary edema = afterload reduction with nitroglycerin can avoid intubation.", [
        ["exam", "Pulmonary edema with systolic BP 150 or higher", "The failing heart is very sensitive to afterload."],
        ["tx", "Nitroglycerin: venodilates at low dose, also lowers afterload at high dose", "Prompt afterload reduction can avoid intubation."],
        ["danger", "Loop diuretic alone without a vasodilator worsens kidneys and mortality", "The slide's caution for HF with HTN."]
      ], { x: ["hm-acute-hf"] }),

    C("hm-pnd", "Paroxysmal nocturnal dyspnea vs orthopnea", "Night-time breathlessness from pulmonary congestion.",
      "Wakes up choking after lying down for a while = PND; breathless within minutes of lying flat = orthopnea (more severe).", [
        ["sx", "Wakes suddenly choking with air hunger and sits up for relief", "That is PND."],
        ["cause", "Fluid from below the diaphragm is mobilized while supine, raising pulmonary venous pressure", "Lying down returns edema fluid to the circulation."],
        ["timing", "PND comes first; orthopnea (within minutes of lying flat) is more severe", "Orthopnea has the same cause but means worse dysfunction."]
      ], { x: ["hm-left-hf"] }),

    C("hm-anasarca", "Anasarca and stasis dermatitis", "Massive edema of advanced HF.",
      "Massive generalized edema (scrotum/labia, arms, abdominal wall) = anasarca, terminal HF.", [
        ["exam", "Massive edema of the genitals, upper extremities and thoracic/abdominal walls", "Generalized edema means poorly controlled or terminal HF."],
        ["exam", "Pigmented, red, indurated skin of the lower legs that may break down", "Chronic edema causes stasis dermatitis."],
        ["exam", "Sacral edema in a bedbound patient", "Edema settles in whatever part is dependent."]
      ], { x: ["hm-right-hf"] }),

    C("hm-cachexia", "Cardiac cachexia", "Muscle wasting in advanced HF.",
      "Advanced HF + early satiety + muscle wasting = cardiac cachexia.", [
        ["cause", "Poor intake (early satiety, nausea), fat malabsorption and high norepinephrine metabolism", "Less in and more burned leads to tissue loss."],
        ["exam", "Weight loss from skeletal muscle atrophy", "Cachexia is loss of muscle mass, not just fat."],
        ["who", "Advanced disease, especially with chronic splanchnic congestion", "Gut congestion drives the poor intake and absorption."]
      ]),

    C("hm-pleural-effusion", "HF pleural effusion", "Fluid around the lungs from congestion.",
      "Dull to percussion, decreased breath sounds, shifting dullness = pleural effusion; clears slowly with diuresis.", [
        ["exam", "Dullness to percussion with diminished or absent breath sounds", "Fluid blocks sound transmission."],
        ["exam", "Shifting dullness from sitting to lateral decubitus", "Free fluid moves with position."],
        ["timing", "Reabsorbs slowly once diuresis begins", "CXR clearing can lag about 48 hours behind clinical improvement."]
      ]),

    C("hm-digoxin-tox", "Digoxin toxicity", "Too much digoxin in an HF patient.",
      "HF patient on digoxin with GI, neuro and systemic symptoms + tachy- or bradyarrhythmias = digoxin toxicity.", [
        ["sx", "GI, neurologic and generalized systemic symptoms", "These are the toxicity symptoms on the slide."],
        ["ekg", "Tachy- and bradyarrhythmias", "Digoxin raises intracellular calcium and slows AV conduction."],
        ["avoid", "Prior VT or VF is a contraindication; caution in HFpEF", "More calcium worsens diastolic function and arrhythmias."]
      ]),

    C("hm-ace-angioedema", "ACE inhibitor cough and angioedema", "The classic ACEi adverse effects.",
      "Dry persistent cough on an ACEi = switch to an ARB; angioedema = no ARB either, use hydralazine + nitrate.", [
        ["sx", "Persistent dry cough", "ACEi block bradykinin breakdown, causing cough."],
        ["danger", "Angioedema: ARB is NOT a safe alternative", "Angioedema can recur with an ARB."],
        ["tx", "Hydralazine + isosorbide dinitrate if ACEi and ARB can't be used", "It is the alternative when RAAS drugs are not tolerated."],
        ["avoid", "Pregnancy (boxed warning) and renal artery stenosis", "RAAS drugs injure the fetus and can drop GFR."]
      ])
  ], {
    type: ["hm-hfref", "hm-hfpef", "hm-left-hf", "hm-right-hf", "hm-cor-pulmonale", "hm-ischemic-cm", "hm-hypertensive-hf"],
    acute: ["hm-acute-hf", "hm-flash-pe-htn", "hm-pnd", "hm-pleural-effusion"],
    late: ["hm-anasarca", "hm-cachexia", "hm-digoxin-tox", "hm-ace-angioedema"]
  });
}());
