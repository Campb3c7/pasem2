/*
  Cardio Part 2 Diseases tool: Shock, Pressors & Fluid Management.
  Source: source-material/cardio-part-2/text/shock-pressors-fluids.md.
  Pressor and fluid drug cards live in the Medications tool; here they appear
  only as the treatment of each shock type.
  Question ids are "<disease id>|<index>": only APPEND questions.
*/
(function () {
  "use strict";
  var H = window.DiseaseContent;
  var Tbl = H.Tbl, HY = H.HY, Mn = H.Mn, S = H.S, Q = H.Q, D = H.D, L = H.L;

  var goals = Tbl(["Resuscitation goal", "Target"], [
    ["Urine output", "&gt; <strong>0.5 mL/kg/hr</strong> (~35 mL/hr)"],
    ["CVP", "≥ 8 mmHg (normal 8–12)"],
    ["<strong>MAP</strong>", "<strong>≥ 65</strong> (normal 65–90)"],
    ["SBP", "≥ 90"],
    ["SpO2", "≥ 92%"]
  ]);

  window.CARDIO2_DISEASES_SHOCK = L("shock", "Shock, Pressors & Fluid Management", [

    D("shk-overview", "Shock: Stages & Compensation", "Tissue hypoxia from poor perfusion: pre-shock (tachycardia, vasoconstriction) → shock (hypotension, oliguria, acidosis) → end-organ failure.", [
      S("overview", "Definition & types", "<p>Cellular and tissue <strong>hypoxia</strong> from ↓ O2 delivery, ↑ consumption or poor utilization; circulatory failure with ↓ perfusion. <strong>Reversible at first</strong>, then rapidly irreversible.</p>" + Tbl(["Type", "Causes", "Fix"], [
        ["<strong>Cardiogenic</strong>", "MI, cardiomyopathy, arrhythmia, valve/septal rupture", "Treat cause; support output/pressure"],
        ["<strong>Hypovolemic</strong>", "Hemorrhage, vomiting, diarrhea, pancreatitis, burns", "Crystalloid; blood if bleeding"],
        ["<strong>Obstructive</strong>", "PE, tension pneumothorax, tamponade, dissection", "<strong>Relieve the obstruction</strong>"],
        ["<strong>Distributive</strong>", "Sepsis, neurogenic, anaphylaxis", "Treat cause; fluids/pressor"]
      ])),
      S("presentation", "Stages", Tbl(["Stage", "Findings"], [
        ["<strong>Pre-shock</strong> (warm, compensated)", "Healthy adults tolerate ~10% volume loss; <strong>tachycardia and vasoconstriction</strong> may be the only signs"],
        ["<strong>Shock</strong>", "Tachycardia, <strong>hypotension</strong>, tachypnea, anxiety, diaphoresis, <strong>metabolic acidosis</strong>, <strong>oliguria</strong>, cool clammy skin"],
        ["<strong>End-organ dysfunction</strong>", "Anuria/renal failure, ↓ CO, delirium → obtundation → coma, death"]
      ])),
      S("workup", "Compensation", "<ol class=\"concept-chain\"><li>Carotid/aortic baroreceptors sense ↓ volume</li><li>Sympathetic surge + epinephrine, norepinephrine, cortisol</li><li>↑ HR and contractility (CO = HR x SV)</li><li>Arteriolar constriction keeps SVR (shunts blood from gut, kidney, skin); venoconstriction ↑ venous return</li><li>RAAS + <strong>ADH</strong> (after ~10% volume loss): water retention, thirst, <strong>oliguria</strong></li></ol>"),
      S("treatment", "Monitoring & goals", goals + "<p>Treat the physiology, not just the BP: <strong>assess</strong> (perfusion, mechanism, fluid tolerance) → <strong>act</strong> → <strong>reassess</strong> perfusion AND congestion. <strong>MAP</strong> is a better perfusion marker than SBP; arterial line for accuracy; Foley for urine output.</p>")
    ], [
      Q("presentation", "A trauma patient is anxious with HR 118 and BP 124/80. Which stage of shock?", ["Pre-shock (compensated)", "End-organ dysfunction", "Irreversible shock", "Not shock"], 0, "Tachycardia and vasoconstriction may be the only early signs."),
      Q("treatment", "Target MAP in shock resuscitation?", ["65 mmHg or more", "40 mmHg", "100 mmHg or more", "Exactly 120 mmHg"], 0, "MAP ≥ 65."),
      Q("treatment", "Urine output goal during shock resuscitation?", ["More than 0.5 mL/kg/hr", "More than 5 mL/kg/hr", "Any output", "Less than 10 mL/hr"], 0, "> 0.5 mL/kg/hr, about 35 mL/hr."),
      Q("overview", "Tension pneumothorax and tamponade cause which shock type?", ["Obstructive", "Distributive", "Hypovolemic", "Cardiogenic"], 0, "Obstructive shock: PE, tension pneumo, tamponade, dissection."),
      Q("workup", "Which hormone causes oliguria after about a 10% volume loss?", ["ADH", "Insulin", "Glucagon", "Thyroid hormone"], 0, "The posterior pituitary releases ADH."),
      Q("overview", "Sepsis, neurogenic shock and anaphylaxis are which shock type?", ["Distributive", "Obstructive", "Cardiogenic", "Hypovolemic"], 0, "Distributive shock from vasodilation."),
      Q("treatment", "Why is MAP preferred over SBP in shock?", ["It better reflects perfusion to vital organs", "It is always higher", "It ignores diastolic pressure", "It's easier to guess"], 0, "MAP is a better indicator of organ perfusion."),
      Q("overview", "First-line treatment for obstructive shock?", ["Relieve the obstruction", "Large fluid boluses alone", "Dobutamine", "Antibiotics"], 0, "Obstructive shock: urgently relieve the obstruction (e.g., needle decompression, pericardiocentesis, tPA)."),
      Q("presentation", "Which finding marks progression from shock to end-organ dysfunction?", ["Anuria and coma", "Mild tachycardia", "Anxiety only", "Warm skin"], 0, "Anuria, renal failure, delirium and coma.")
    ]),

    D("shk-cardiogenic", "Cardiogenic Shock", "Pump failure, usually from a large MI (≥ 40% of LV): hypotension with congestion; hold fluid boluses; norepinephrine, dobutamine if SBP ≥ 90; reperfuse.", [
      S("overview", "Causes", "<p><strong>MI is the most common cause</strong>: 6–8% of AMIs; <strong>≥ 40% of myocardium</strong> lost, usually within <strong>8 h</strong> of a massive MI (left main / LAD territory). RV infarct (RCA, inferior MI) ~5%. Others: contusion, cardiomyopathy, sustained arrhythmia, valve/septal defects, cardiac surgery.</p><p>Risks: age &gt; 65, CAD, HF, DM, left main MI, <strong>mechanical complications</strong> (chordae rupture, VSD or free-wall rupture).</p><ol class=\"concept-chain\"><li>↓ Contractility</li><li>↑ Preload and afterload</li><li>↓ Coronary perfusion</li><li>Worse pump function → hypotension, hypoperfusion</li></ol>"),
      S("presentation", "Presentation", "<p>Chest/arm/jaw pain, dyspnea, diaphoresis, vomiting, weakness, AMS, cool extremities.</p>" + Tbl(["Sign", "Detail"], [
        ["BP", "<strong>SBP &lt; 90</strong> or drop ≥ 40 (may be normal in pre-shock)"],
        ["HR", "Tachycardia; <strong>bradycardia with inferior/RV MI</strong>; normal if on BB/CCB"],
        ["Murmur", "<strong>Apical holosystolic = MR from chordae rupture</strong>"],
        ["Congestion", "<strong>JVD &gt; 8 cm</strong>, <strong>rales</strong>, frothy sputum, edema"],
        ["Skin", "Cool, clammy, <strong>mottled</strong>; ↓ urine output"]
      ])),
      S("workup", "Work-up", Tbl(["Test", "Looking for"], [
        ["<strong>EKG within 10 minutes</strong> (first test)", "STEMI (≥ 1 mm limb / ≥ 2 mm precordial in 2 contiguous leads), Wellens"],
        ["Portable CXR", "Pulmonary edema, widened mediastinum, cardiomegaly"],
        ["Echo", "LVEF, wall motion, mechanical complication"],
        ["Troponin, CK-MB", "MI"],
        ["Lactate, CBC, CMP, PT/INR", "Hypoperfusion, organ failure"],
        ["<strong>BNP</strong>", "<strong>Normal BNP points away from cardiogenic shock</strong>"]
      ])),
      S("treatment", "Treatment", "<p>Stabilize while arranging <strong>reperfusion (cath lab)</strong> or surgery. O2 → most need <strong>intubation</strong>. <strong>Hold large fluid boluses</strong> if LV dysfunction or pulmonary congestion (saline lock); cautious <strong>250 mL</strong> boluses only without congestion, reassessing each. <strong>Aspirin 324 mg</strong> + IV heparin.</p>" + Tbl(["Drug", "Use"], [
        ["<strong>Norepinephrine</strong>", "<strong>Preferred</strong>; SBP &lt; 90"],
        ["<strong>Dobutamine</strong>", "Inotrope; only if <strong>SBP ≥ 90</strong>"],
        ["Dopamine", "SBP &lt; 90; arrhythmias limit it"],
        ["Epinephrine", "Alternative; more acidosis, tachycardia, arrhythmias"],
        ["<strong>Avoid</strong>", "<strong>Beta blockers and CCBs</strong> (block compensatory tachycardia)"]
      ]) + "<p>Devices: <strong>IABP</strong> (inflates in diastole, ↓ afterload, ↑ coronary perfusion), Swan-Ganz, short-term <strong>LVAD</strong>.</p>" + HY("Cardiogenic shock = cold and wet: no big fluid boluses, norepinephrine, get to the cath lab."))
    ], [
      Q("overview", "Most common cause of cardiogenic shock?", ["Acute myocardial infarction", "Sepsis", "Hemorrhage", "Pulmonary embolism"], 0, "MI; 6-8% of AMIs develop cardiogenic shock."),
      Q("overview", "How much myocardium must be lost to cause cardiogenic shock?", ["40% or more", "5%", "10%", "90%"], 0, "≥ 40% loss of myocardium."),
      Q("treatment", "A patient in cardiogenic shock has rales and JVD. Should you give a 2 L fluid bolus?", ["No, hold large boluses with pulmonary congestion", "Yes, always", "Yes, with LR", "Only if lactate is high"], 0, "Hold boluses with LV dysfunction or congestion."),
      Q("treatment", "Preferred vasopressor in cardiogenic shock?", ["Norepinephrine", "Phenylephrine", "Vasopressin alone", "Epinephrine first"], 0, "Norepinephrine is the preferred agent."),
      Q("treatment", "When can dobutamine be used in cardiogenic shock?", ["When SBP is 90 or higher", "When SBP is under 70", "Never", "Only in hypovolemic shock"], 0, "Dobutamine vasodilates; avoid if SBP < 90."),
      Q("presentation", "After an MI, a hypotensive patient has a new apical holosystolic murmur. Likely cause?", ["Mitral regurgitation from chordae tendineae rupture", "Aortic stenosis", "Pericarditis", "Pulmonic stenosis"], 0, "Holosystolic apical murmur = acute MR."),
      Q("presentation", "Why might a patient in cardiogenic shock have a normal heart rate?", ["Beta blockers or CCBs blunt the compensatory tachycardia", "Shock never raises HR", "They are athletes", "Pressors slow the heart"], 0, "Normal HR if compensation is blunted; bradycardia with inferior MI."),
      Q("workup", "What does a normal BNP suggest in a hypotensive patient?", ["A diagnosis other than cardiogenic shock", "Cardiogenic shock is confirmed", "Tamponade", "Nothing"], 0, "Normal BNP points elsewhere."),
      Q("treatment", "Which drugs should be avoided in cardiogenic shock?", ["Beta blockers and calcium channel blockers", "Aspirin and heparin", "Norepinephrine", "Oxygen"], 0, "Negative inotropes worsen it."),
      Q("treatment", "How does an intra-aortic balloon pump help?", ["Inflates in diastole to raise coronary perfusion and lower afterload", "Inflates in systole to raise BP", "Removes clot", "Paces the heart"], 0, "IABP inflates during diastole and deflates before systole."),
      Q("workup", "First diagnostic test in suspected cardiogenic shock from MI?", ["EKG within 10 minutes", "Echo", "CT chest", "BNP"], 0, "EKG first to look for STEMI and the need for reperfusion."),
      Q("presentation", "Inferior MI with cardiogenic shock and HR 42. Why bradycardia?", ["Nodal dysfunction from RCA/inferior infarct", "Beta agonist effect", "Hypovolemia", "Sepsis"], 0, "Right-sided or inferior MI can cause nodal dysfunction.")
    ]),

    D("shk-hypovolemic", "Hypovolemic & Hemorrhagic Shock", "Most common shock: volume or blood loss; isotonic crystalloid boluses, blood after ~2 L, 1:1:1 massive transfusion, permissive hypotension in trauma.", [
      S("overview", "Causes & signs", "<p><strong>Most common form of shock.</strong> Causes: hemorrhage; vomiting, diarrhea, poor intake, fever, pancreatitis; burns (third spacing).</p><p>Vitals can mislead and lag. Classic: tachycardia, hypotension, weak pulses, slow cap refill, ↓ mental status. Exam: <strong>dry mucosa, shrunken tongue, poor turgor</strong>, no tears, ↓ urine/wet diapers, <strong>sunken fontanelle</strong>. BUN, creatinine, Hct, urine SG help but aren't sensitive. No formula estimates the deficit: follow BP, HR, JVP, urine output, mentation.</p>"),
      S("treatment", "Fluids", Tbl(["Situation", "Plan"], [
        ["Mild–moderate", "<strong>1 L isotonic bolus</strong>, then ~100 mL/hr until better"],
        ["Severe / shock", "<strong>1–2 L wide open</strong>, reassess"],
        ["<strong>Isotonic crystalloid</strong> (NS, LR)", "<strong>Preferred first</strong>; only ~20–30% stays intravascular → <strong>3:1 rule</strong>"],
        ["Colloids", "No outcome benefit; costly; leak in sepsis/hemorrhage"],
        ["NS", "Only fluid given with blood; overuse → <strong>hyperchloremic metabolic acidosis</strong>"],
        ["LR", "Surgery, trauma, burns; caution liver/renal disease, pH &gt; 7.5"]
      ])),
      S("types", "Blood", "<p>After <strong>~2 L of crystalloid</strong>, consider blood to avoid hemodilution. Unstable with gross bleeding: <strong>O-negative</strong> emergency release; <strong>massive transfusion 1:1:1</strong> (PRBC:FFP:platelets; &gt; 10 units/24 h). <strong>Permissive hypotension</strong> in trauma hemorrhage. Type and screen when blood may be needed; type and cross when urgent. Watch for hemolytic reactions, TRALI, anaphylaxis.</p>" + HY("Bleeding: stop the bleeding + give blood. Fluids are a bridge, not a fix."))
    ], [
      Q("overview", "Most common form of shock?", ["Hypovolemic", "Cardiogenic", "Obstructive", "Neurogenic"], 0, "Hypovolemic shock is the most common."),
      Q("treatment", "Preferred initial fluid for resuscitation?", ["Isotonic crystalloid", "D5W", "Albumin", "Hetastarch"], 0, "Isotonic crystalloids are preferred."),
      Q("treatment", "What is the 3:1 rule?", ["Give 3 times the blood lost as isotonic crystalloid", "Give 3 units of blood per liter of saline", "Three pressors at once", "Three boluses then stop"], 0, "Only about a third stays intravascular."),
      Q("types", "Ratio for initial massive transfusion protocol?", ["1:1:1 PRBC to FFP to platelets", "3:1:1", "1:2:3", "PRBC only"], 0, "1:1:1 is the initial starting point."),
      Q("types", "Which IV fluid is the only one that can run with blood products?", ["0.9% normal saline", "Lactated Ringer's", "D5W", "0.45% saline"], 0, "Only 0.9NS with blood."),
      Q("types", "After how much rapid crystalloid should blood be considered?", ["About 2 liters", "500 mL", "10 liters", "Never"], 0, "Following 2 L, consider blood to avoid hemodilution."),
      Q("treatment", "What side effect comes from large volumes of normal saline?", ["Hyperchloremic metabolic acidosis", "Metabolic alkalosis", "Hyperkalemia", "Hypoglycemia"], 0, "0.9NS-induced hyperchloremic acidosis."),
      Q("overview", "A child with gastroenteritis has a sunken fontanelle, dry mucosa and few wet diapers. Problem?", ["Hypovolemia", "Hypervolemia", "Cardiogenic shock", "Anaphylaxis"], 0, "Classic dehydration exam."),
      Q("types", "Which blood type is given in emergency release?", ["O negative", "AB positive", "A positive", "Type specific only"], 0, "Emergency release blood is O negative."),
      Q("treatment", "Severe hypovolemic shock: initial fluid order?", ["1-2 L isotonic saline wide open", "100 mL/hr maintenance", "250 mL and wait", "D5W 1 L"], 0, "Severe depletion needs rapid resuscitation.")
    ]),

    D("shk-distributive", "Distributive Shock", "Vasodilation (sepsis, anaphylaxis, neurogenic) with warm skin early; fluids plus pressors; treat the cause.", [
      S("overview", "Types", Tbl(["Type", "Mechanism", "Clue"], [
        ["<strong>Septic</strong>", "Infection → vasodilation, leaky capillaries", "Fever, source of infection, ↑ lactate"],
        ["<strong>Anaphylactic</strong>", "Allergic mediator release", "Urticaria, wheeze, angioedema after exposure"],
        ["<strong>Neurogenic</strong>", "<strong>Loss of sympathetic vasomotor tone</strong> (spinal cord injury)", "Hypotension with <strong>bradycardia</strong>, warm skin (standard teaching)"]
      ])),
      S("treatment", "Treatment", "<p>Treat the cause; <strong>fluids and pressors as indicated</strong> (norepinephrine first in septic shock, standard teaching). Anaphylaxis: IM epinephrine (standard teaching). In sepsis even proteins leak out, so colloids don't help.</p>" + HY("Distributive = the pipes are too wide: fill the tank, then squeeze the pipes (pressor)."))
    ], [
      Q("overview", "After a spinal cord injury, a patient has BP 78/40 with HR 50 and warm skin. Shock type?", ["Neurogenic (distributive)", "Hypovolemic", "Cardiogenic", "Obstructive"], 0, "Loss of sympathetic tone: hypotension with bradycardia."),
      Q("overview", "Which shock type includes sepsis?", ["Distributive", "Obstructive", "Cardiogenic", "Hypovolemic"], 0, "Sepsis, neurogenic and anaphylaxis are distributive."),
      Q("treatment", "General treatment of distributive shock?", ["Treat the cause with fluids and pressors as indicated", "Hold all fluids", "Pericardiocentesis", "Beta blockers"], 0, "Treat cause; fluids/pressor as indicated."),
      Q("overview", "What is the mechanism of neurogenic shock?", ["Loss of sympathetic vasomotor tone", "Blood loss", "Pump failure", "Clot in the lung"], 0, "Neurogenic shock is due to loss of sympathetic vasomotor tone."),
      Q("treatment", "Why don't colloids help much in septic shock?", ["Leaky vessels let even proteins escape", "They are too cheap", "They cause bradycardia", "They contain glucose"], 0, "Vessels become permeable to proteins in sepsis and hemorrhage."),
      Q("overview", "Hives, wheezing and hypotension minutes after a bee sting. Shock type?", ["Anaphylactic (distributive)", "Cardiogenic", "Obstructive", "Hypovolemic"], 0, "Anaphylaxis is distributive.")
    ]),

    D("shk-hypervolemia", "Hypervolemia (Volume Overload)", "Too much fluid: edema, pulmonary edema, JVD; risk with renal, liver and heart failure; watch during fluid resuscitation.", [
      S("overview", "Recognition", "<p><strong>Clinical diagnosis</strong>: <strong>edema</strong> (central or peripheral), <strong>respiratory distress / pulmonary edema</strong>, <strong>JVD</strong>. Risk factors: <strong>renal disease, liver disease, heart failure</strong>.</p><p><strong>Third spacing</strong>: fluid shifts into tissues or cavities, so a patient can be <strong>total-body overloaded yet intravascularly dry</strong>.</p>"),
      S("treatment", "Fluid choices to know", Tbl(["Fluid", "Tonicity", "Use", "Caution"], [
        ["0.9% NS", "Isotonic", "Hypovolemia, blood loss, DKA, hyponatremia", "HF, hyperchloremic acidosis"],
        ["LR", "Isotonic", "Surgery, trauma, burns, third spacing", "Liver/renal disease, pH &gt; 7.5"],
        ["0.45% NS", "Hypotonic", "Hypernatremia, hypertonic dehydration", "Hyponatremia → cerebral edema"],
        ["D5W", "Hypotonic", "<strong>Free water</strong>, maintenance, hypoglycemia; <strong>not resuscitation</strong>", "Hyperglycemia"],
        ["3% NS", "Hypertonic", "Symptomatic severe hyponatremia, ↑ ICP", "Fast correction → <strong>osmotic demyelination</strong>"]
      ]) + "<p>Body water = 60% of weight: ICF ~28 L, interstitial ~10 L, plasma ~5 L. Crystalloid: ~80% leaves the vessels within 30 min. Reassess for congestion after every bolus.</p>")
    ], [
      Q("overview", "After 6 L of fluid, a dialysis patient has new crackles, JVD and leg edema. Problem?", ["Hypervolemia (volume overload)", "Hypovolemia", "Septic shock", "Anaphylaxis"], 0, "Edema, pulmonary edema and JVD."),
      Q("overview", "Which conditions raise the risk of volume overload?", ["Renal disease, liver disease and heart failure", "Asthma and COPD", "Hyperthyroidism", "Anemia"], 0, "Renal, liver and heart failure."),
      Q("overview", "How can a patient be fluid overloaded yet poorly perfused?", ["Third spacing moves fluid out of the vessels into tissues", "Fluid can't be measured", "Pressors remove fluid", "It isn't possible"], 0, "Excess total body fluid with inadequate circulating volume."),
      Q("treatment", "Which fluid is for free-water replacement, not resuscitation?", ["D5W", "0.9% NS", "Lactated Ringer's", "Albumin"], 0, "D5W is hypotonic free water."),
      Q("treatment", "Risk of correcting severe hyponatremia too fast with 3% saline?", ["Osmotic demyelination syndrome", "Cerebral edema", "Hypokalemia", "DVT"], 0, "Formerly central pontine myelinolysis."),
      Q("treatment", "Overuse of 0.45% saline can cause what?", ["Acute hyponatremia with cerebral edema", "Hypernatremia", "Metabolic alkalosis", "Hyperglycemia"], 0, "Hypotonic fluid can drop sodium."),
      Q("treatment", "What percent of infused crystalloid leaves the vessels within 30 minutes?", ["About 80%", "About 5%", "100%", "None"], 0, "20% stays intravascular, 80% moves to the interstitium.")
    ])
  ]);
}());
