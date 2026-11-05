/*
  Cardio Part 2 Concepts: Shock, Pressors & Fluid Management.
  Source: source-material/cardio-part-2/text/shock-pressors-fluids.md.
  Anything the slides only imply is labeled "Clarification (standard physiology)".
  Question ids are "<concept id>|<index>": only APPEND questions.
*/
(function () {
  "use strict";
  var H = window.DiseaseContent;
  var Tbl = H.Tbl, HY = H.HY, Mn = H.Mn, S = H.S, Q = H.Q, D = H.D, L = H.L;
  function chain(steps) { return '<ol class="concept-chain">' + steps.map(function (s) { return "<li>" + s + "</li>"; }).join("") + "</ol>"; }
  function clar(text) { return "<p><strong>Clarification (standard physiology):</strong> " + text + "</p>"; }
  function traps(items) { return "<ul>" + items.map(function (i) { return "<li>" + i + "</li>"; }).join("") + "</ul>"; }

  window.CARDIO2_CONCEPTS_SHOCK = L("shock", "Shock, Pressors & Fluid Management", [

    D("shkc-pressure-equation", "Every shock breaks one term of the pressure equation", "Blood pressure is cardiac output times vascular resistance, and cardiac output is heart rate times stroke volume; each shock type knocks out a different term, which tells you how to fix it.", [
      S("idea", "The idea", "<p>Two equations explain all four shock types:</p><ul><li><strong>CO = HR × SV</strong> (the slides' formula)</li><li><strong>MAP ≈ CO × SVR</strong></li></ul><p>Shock is inadequate tissue perfusion. Ask which term failed:</p><ul><li><strong>Hypovolemic:</strong> not enough volume → low preload → low SV.</li><li><strong>Cardiogenic:</strong> the pump fails → low SV despite plenty of volume.</li><li><strong>Obstructive:</strong> something blocks filling or ejection (PE, tension pneumothorax, tamponade) → low SV.</li><li><strong>Distributive:</strong> vessels dilate (sepsis, anaphylaxis, neurogenic) → low SVR.</li></ul>" + clar("MAP ≈ CO × SVR and the CVP/SVR/CO pattern table are standard physiology; the slides list the four types and their causes.")),
      S("chain", "Cause → effect", chain([
        "Identify which term fell: volume, pump, obstruction, or vessel tone",
        "Body compensates for the fallen term (HR up, vasoconstriction)",
        "Compensation is overwhelmed → hypotension, hypoperfusion",
        "Treatment replaces the missing term: volume / inotrope + revascularize / relieve obstruction / vasopressor + treat cause",
        "Reassess perfusion AND congestion after every intervention"
      ]) + Tbl(["Shock", "CVP (filling)", "CO", "SVR", "Skin"], [
        ["Hypovolemic", "↓", "↓", "↑", "Cold"],
        ["Cardiogenic", "↑", "↓", "↑", "Cold, wet (congested)"],
        ["Obstructive", "↑ (tamponade, PE)", "↓", "↑", "Cold"],
        ["Distributive", "↓ or normal", "↑ or normal early", "↓", "Warm early"]
      ])),
      S("bedside", "Why it matters clinically", "<p>The slides' synthesis: <strong>treat the physiology, not the BP alone</strong>. Volume loss gets crystalloid; hemorrhage gets bleeding control and blood; pump failure with congestion gets the cause treated and output supported; vasodilation gets fluids and pressors; obstruction gets <strong>urgent relief</strong>. Fluids help the first and last only partially and can hurt the pump-failure patient.</p>" + HY("Hypovolemic shock is the most common form of shock.")),
      S("traps", "Common traps", traps([
        "<strong>One fix for all shock.</strong> A pressor won't relieve tamponade; fluid won't fix a failing pump.",
        "<strong>Calling warm skin reassuring.</strong> Distributive shock is warm early.",
        "<strong>Assuming high JVP rules out shock.</strong> Cardiogenic and obstructive shock both raise it."
      ]))
    ], [
      Q("chain", "In septic shock, which term of MAP = CO × SVR is the primary problem?", ["SVR falls from vasodilation", "CO falls from pump failure", "HR falls", "Stroke volume falls from blood loss"], 0, "Distributive shock lowers vascular resistance."),
      Q("chain", "A trauma patient loses 2 L of blood. Which term falls first?", ["Stroke volume, from low preload", "SVR", "Heart rate", "Contractility"], 0, "Hypovolemia lowers preload and SV."),
      Q("idea", "Tamponade, tension pneumothorax, and massive PE share which shock category?", ["Obstructive", "Distributive", "Hypovolemic", "Cardiogenic"], 0, "They block filling or outflow."),
      Q("bedside", "A hypotensive patient has JVD, muffled heart sounds, and clear lungs. What is the fix?", ["Relieve the obstruction (pericardiocentesis)", "Large fluid boluses alone", "Norepinephrine alone", "Diuretics"], 0, "Obstructive shock: urgently relieve the obstruction."),
      Q("traps", "A septic patient is hypotensive but has warm, flushed skin. Why?", ["Vasodilation keeps the skin perfused even as BP falls", "He is not in shock", "He has high SVR", "He is cardiogenic"], 0, "Distributive shock is warm early (low SVR). Clarification (standard physiology)."),
      Q("chain", "What is the formula for cardiac output on the slides?", ["CO = HR × SV", "CO = MAP × SVR", "CO = SV ÷ HR", "CO = HR + SV"], 0, "CO = HR × SV."),
      Q("bedside", "Cardiogenic shock with rales and JVD: what pattern do you expect?", ["High filling pressure, low CO, high SVR", "Low filling pressure, high CO, low SVR", "Everything normal", "Low filling pressure, low CO, low SVR"], 0, "Pump failure: congested, low output, vasoconstricted. Clarification (standard physiology)."),
      Q("idea", "What is the most common form of shock?", ["Hypovolemic", "Cardiogenic", "Obstructive", "Neurogenic"], 0, "Hypovolemic shock is the most common form.")
    ]),

    D("shkc-compensation", "Compensation hides shock until it suddenly can't", "Baroreceptors trigger a sympathetic surge, ADH, and RAAS to keep pressure up, so early shock looks like only tachycardia and cool skin; drugs that block that response unmask or worsen it.", [
      S("idea", "The idea", "<p>When perfusion drops, <strong>carotid and aortic baroreceptors</strong> fire a <strong>sympathetic surge</strong> (epinephrine, norepinephrine, cortisol):</p><ul><li>↑ HR and contractility → ↑ CO</li><li>Arteriolar constriction → keeps SVR and BP up, shunts blood away from gut, kidney, skin</li><li>Venous constriction → more return to the heart</li><li>Kidneys: <strong>RAAS + ADH</strong> → hold water and salt; thirst ↑, urine ↓</li></ul><p>This <strong>pre-shock</strong> (\"warm\" or compensated) stage can hide a 10% volume loss in a healthy adult; tachycardia and vasoconstriction may be the only signs.</p>"),
      S("chain", "Cause → effect", chain([
        "Perfusion falls → baroreceptors sense it",
        "Sympathetic surge → tachycardia, vasoconstriction (cool skin, low urine)",
        "ADH and RAAS → water retention, oliguria, thirst",
        "BP held normal = pre-shock",
        "Compensation overwhelmed → hypotension, acidosis, AMS → end-organ failure"
      ]) + Tbl(["Stage", "What you see"], [
        ["Pre-shock", "Tachycardia, vasoconstriction; BP may be normal"],
        ["Shock", "Hypotension, tachypnea, diaphoresis, oliguria, acidosis, cool clammy skin, anxiety"],
        ["End-organ dysfunction", "Anuria/AKI, delirium → coma, irreversible damage"]
      ])),
      S("bedside", "Why it matters clinically", "<p>Because compensation hides early shock, <strong>vital signs can mislead</strong> and changes may be delayed. Watch for the expected tachycardia's absence: a <strong>beta blocker or CCB</strong> can blunt it, and an <strong>inferior/right-sided MI</strong> can cause bradycardia from nodal dysfunction. That's also why negative inotropes (beta blockers, CCBs) are avoided in cardiogenic shock: they block the compensation.</p>" + HY("Normal BP does not exclude shock: tachycardia + cool skin + low urine = compensating.")),
      S("traps", "Common traps", traps([
        "<strong>\"Normal BP, so not in shock.\"</strong> Pre-shock keeps BP normal.",
        "<strong>Expecting tachycardia in everyone.</strong> Beta blockers, CCBs, or inferior MI can remove it.",
        "<strong>Giving a beta blocker for the tachycardia of shock.</strong> It is the compensation."
      ]))
    ], [
      Q("idea", "What senses the fall in pressure and starts the shock response?", ["Carotid and aortic baroreceptors", "The pancreas", "The liver", "Skeletal muscle"], 0, "Baroreceptors trigger the sympathetic response."),
      Q("chain", "Why does a patient in early shock have cool skin?", ["Arteriolar vasoconstriction shunts blood away from the periphery", "Fever has broken", "The patient is hypothermic from fluids", "Veins dilate"], 0, "Sympathetic vasoconstriction diverts blood to vital organs."),
      Q("chain", "Why does urine output fall in shock?", ["Renal vasoconstriction plus ADH and RAAS hold water", "The bladder is obstructed", "The patient drinks less", "Diuretics are given"], 0, "ADH release and renal shunting cause oliguria."),
      Q("bedside", "A patient on metoprolol is hemorrhaging but has HR 72. Why no tachycardia?", ["The beta blocker blunts the compensatory response", "He isn't bleeding much", "Hemorrhage causes bradycardia", "He is in pre-shock"], 0, "Beta blockers or CCBs can blunt the normal tachycardia."),
      Q("bedside", "A cardiogenic shock patient with an inferior MI has HR 45. Why?", ["Nodal dysfunction from right-sided or inferior MI", "Beta blocker overdose only", "Normal compensation", "Hypovolemia"], 0, "Inferior/RCA MI can cause bradycardia."),
      Q("traps", "Why are beta blockers and calcium channel blockers avoided in cardiogenic shock?", ["They are negative inotropes and block the compensatory tachycardia", "They raise SVR too much", "They cause hypokalemia", "They are too slow"], 0, "Avoid negative inotropes in cardiogenic shock."),
      Q("chain", "A healthy adult loses 10% of blood volume. What is the most likely presentation?", ["Possibly no symptoms, maybe mild tachycardia, because compensation holds BP", "Profound hypotension", "Coma", "Bradycardia and warm skin"], 0, "Compensation may keep a healthy adult asymptomatic with a 10% loss."),
      Q("chain", "What happens when compensatory mechanisms are overwhelmed?", ["Hypotension, acidosis, oliguria, and altered mental status appear", "Heart rate normalizes", "Skin becomes warm", "BP rises"], 0, "The shock stage begins.")
    ]),

    D("shkc-receptors", "Pick the pressor by the receptor it hits", "Alpha-1 squeezes vessels, beta-1 drives the heart, beta-2 relaxes vessels, and dopamine changes receptors with dose; each drug's effect on BP follows from its receptor mix.", [
      S("idea", "The idea", "<ul><li><strong>α1</strong> (vessel walls) → vasoconstriction → ↑ SVR</li><li><strong>β1</strong> (heart) → ↑ contractility and rate</li><li><strong>β2</strong> (vessels) → vasodilation → ↓ SVR</li><li><strong>Dopaminergic</strong> → renal/mesenteric vasodilation at low dose</li></ul><p>So <strong>dobutamine</strong> (β1 + some β2) makes the heart squeeze harder but <strong>lowers SVR</strong>; it can drop BP and is used only when <strong>SBP ≥ 90</strong>. <strong>Norepinephrine</strong> (mostly α1, some β1) raises SVR strongly and is the <strong>preferred agent in cardiogenic shock</strong>.</p>"),
      S("chain", "Cause → effect", chain([
        "Need more squeeze but BP OK (SBP ≥ 90) → dobutamine (β1): ↑ CO, ↓ SVR",
        "Hypotensive (SBP &lt; 90) → norepinephrine (α1 &gt; β1): ↑ SVR and some ↑ CO",
        "Dopamine &lt; 3: renal/mesenteric dilation → 3–10: β1, ↑ HR and CO → &gt; 10: α1 vasoconstriction (renal necrosis risk)",
        "Epinephrine low dose: β2 may ↓ SVR; high dose: α1 ↑ SVR (more acidosis, tachycardia, dysrhythmias than norepi)",
        "Infuse via central line beyond the emergency (extravasation → necrosis)"
      ]) + Tbl(["Drug", "Receptors", "Heart", "Vessels"], [
        ["Dobutamine", "β1 (± α1, β2)", "++++", "+ (net ↓ SVR)"],
        ["Dopamine", "Dopa, β1, α1 (dose)", "++ at 5", "++ at 15"],
        ["Norepinephrine", "α1 &gt; β1", "++", "++++"],
        ["Epinephrine", "α1, β1, β2", "+++", "++"]
      ])),
      S("bedside", "Why it matters clinically", "<p>Match the drug to the problem: weak pump with OK pressure → inotrope (dobutamine); low pressure → vasopressor (norepinephrine). Dobutamine and dopamine may be combined. Simplify to one agent as soon as the best one is identified.</p>" + HY("Dobutamine: avoid when SBP &lt; 90 because its β2 vasodilation lowers BP.")),
      S("traps", "Common traps", traps([
        "<strong>Starting dobutamine in a patient with SBP 78.</strong> It can drop BP further.",
        "<strong>Thinking higher dopamine protects the kidneys.</strong> &gt; 10 mcg/kg/min constricts renal vessels.",
        "<strong>Leaving pressors in a peripheral IV long-term.</strong> Extravasation causes necrosis."
      ]))
    ], [
      Q("chain", "Why can dobutamine lower blood pressure?", ["Its β2 effect vasodilates and lowers SVR", "It blocks α1 receptors", "It slows the heart", "It causes volume loss"], 0, "Dobutamine increases CO and decreases SVR."),
      Q("bedside", "A cardiogenic shock patient has SBP 76. Which agent fits first?", ["Norepinephrine", "Dobutamine alone", "Nitroprusside", "Metoprolol"], 0, "Norepinephrine is preferred; dobutamine only if SBP is 90 or more."),
      Q("chain", "Dopamine is raised from 5 to 15 mcg/kg/min. What effect becomes dominant?", ["Alpha-1 vasoconstriction", "Renal vasodilation", "Beta-2 vasodilation", "No change"], 0, "Above 10 mcg/kg/min, α1 vasoconstriction dominates."),
      Q("idea", "Which receptor mainly increases heart contractility and rate?", ["Beta-1", "Alpha-1", "Beta-2", "Dopaminergic"], 0, "β1 in the heart increases inotropy and chronotropy."),
      Q("idea", "Which receptor causes vasoconstriction in vessel walls?", ["Alpha-1", "Beta-1", "Beta-2", "Dopaminergic"], 0, "α1 induces significant vasoconstriction."),
      Q("traps", "Why might high-dose dopamine harm the kidneys?", ["Renal vasoconstriction can cause necrosis and failure", "It causes renal vasodilation", "It is nephrotoxic only at low doses", "It causes kidney stones"], 0, "Higher dosing vasoconstricts the kidneys."),
      Q("chain", "Compared with norepinephrine, what is epinephrine more likely to cause?", ["Acidosis, tachycardia, and dysrhythmias", "Bradycardia", "Lower heart rate and less acidosis", "Renal vasodilation"], 0, "Epinephrine is an alternative with more acidosis, tachycardia, and dysrhythmias."),
      Q("bedside", "Why should continuous vasopressors be given through a central line?", ["Peripheral extravasation can cause sclerosis and tissue necrosis", "Central lines raise the dose", "Peripheral veins block the drug", "Central lines are faster to place"], 0, "Beyond emergency care, pressors go through a central line.")
    ]),

    D("shkc-fluid-intolerant", "Cardiogenic shock: the pump can't handle more volume", "A failing ventricle already has too much preload, so fluid boluses back up into the lungs; support the pump and lower its workload instead.", [
      S("idea", "The idea", "<p>In cardiogenic shock, output is low because <strong>contractility is down</strong> while <strong>preload and afterload are up</strong>. Adding volume to a ventricle that can't empty raises filling pressure further → fluid backs into the lungs (rales, frothy sputum, hypoxia).</p><p>The rising pressures also squeeze the coronary arteries' perfusion, so the heart gets less oxygen and fails more, a spiral. Treatment must <strong>improve output, lower myocardial workload, and improve coronary perfusion</strong> at the same time.</p>"),
      S("chain", "Cause → effect", chain([
        "Large MI (often LAD/left main) → contractility falls",
        "Ventricle can't empty → preload and afterload rise → pulmonary congestion",
        "High pressures impair coronary perfusion → more ischemia → worse pump",
        "Fluids → more congestion, not more output",
        "So: hold boluses, norepinephrine ± dobutamine, IABP, revascularize"
      ]) + Tbl(["Tool", "How it helps"], [
        ["Norepinephrine", "Restores perfusion pressure (preferred agent)"],
        ["Dobutamine (SBP ≥ 90)", "More contractility, less afterload"],
        ["IABP", "Inflates in diastole (↑ coronary flow), deflates before systole (↓ afterload)"],
        ["LVAD", "Short-term pump from LV/LA to aorta"],
        ["Cath lab", "Reperfusion fixes the cause"]
      ])),
      S("bedside", "Why it matters clinically", "<p>Hold fluid boluses if there's LV dysfunction or any respiratory distress from congestion (rales, JVD, edema on CXR). With mild hypotension and <strong>no</strong> signs of LV dysfunction, cautious <strong>250 mL boluses</strong> are allowed, reassessing before and after each one. A <strong>normal BNP</strong> points away from cardiogenic shock.</p>" + clar("the Frank-Starling curve flattening in a failing ventricle is standard physiology.") + HY("New apical holosystolic murmur in cardiogenic shock = papillary muscle or chordae rupture with acute MR.")),
      S("traps", "Common traps", traps([
        "<strong>Bolusing every hypotensive patient.</strong> In pump failure with rales, it worsens edema.",
        "<strong>Thinking the IABP pumps blood forward.</strong> It inflates in diastole to raise coronary flow and deflates to lower afterload.",
        "<strong>Missing an RV infarct.</strong> Inferior MI can cause RV failure and bradycardia."
      ]))
    ], [
      Q("idea", "Why are fluid boluses held in cardiogenic shock from LV dysfunction?", ["The failing ventricle can't handle more preload, so fluid backs into the lungs", "Fluids cause hyperkalemia", "Fluids raise SVR too much", "Fluids dissolve clots"], 0, "Hold boluses with LV dysfunction or pulmonary congestion."),
      Q("chain", "When does an intra-aortic balloon pump inflate, and why?", ["During diastole, to boost coronary perfusion", "During systole, to push blood forward", "Continuously", "Only during arrhythmias"], 0, "Inflates in diastole, deflates just before systole."),
      Q("chain", "Why does the IABP deflate just before systole?", ["To lower afterload so the LV ejects more easily", "To raise afterload", "To fill the coronaries", "To slow the heart"], 0, "Deflation decreases afterload and myocardial O2 demand."),
      Q("bedside", "A hypotensive post-MI patient has no rales, no JVD, and a clear CXR. What fluid approach fits?", ["Cautious 250 mL boluses with reassessment after each", "2 L wide open", "No fluid ever", "Diuretics"], 0, "Cautious 250 cc boluses when no LV dysfunction signs."),
      Q("chain", "In cardiogenic shock, how do rising preload and afterload worsen the heart?", ["They impair coronary perfusion, causing more ischemia", "They improve contractility", "They lower oxygen demand", "They have no effect"], 0, "Coronary perfusion is impaired by increased preload and afterload."),
      Q("bedside", "A patient in shock has a normal BNP. What does this suggest?", ["A cause other than cardiogenic shock", "Definite cardiogenic shock", "Tamponade only", "Sepsis is excluded"], 0, "A normal BNP suggests a diagnosis other than cardiogenic shock."),
      Q("traps", "A cardiogenic shock patient develops a new holosystolic murmur at the apex. What happened?", ["Acute mitral regurgitation from chordae or papillary muscle rupture", "Aortic stenosis", "Pericarditis", "Normal flow murmur from dobutamine"], 0, "Holosystolic apical murmur suggests MR from chordae rupture."),
      Q("idea", "What three goals must cardiogenic shock therapy balance?", ["Improve output, reduce myocardial workload, and increase coronary perfusion", "Raise HR, raise preload, raise afterload", "Diurese, slow HR, vasodilate", "Fluids, fluids, fluids"], 0, "Striking a precarious balance.")
    ]),

    D("shkc-where-fluid-goes", "Where IV fluid ends up", "Crystalloid spreads across the whole extracellular space, so most leaves the vessels; tonicity decides whether water also enters the cells, which is why isotonic fluid resuscitates and D5W does not.", [
      S("idea", "The idea", "<p>Body water is about 60% of weight: <strong>intracellular</strong> (~28 L) and <strong>extracellular</strong> (interstitial ~10 L, plasma ~5 L of blood). Capillary walls let water and salt through but hold back cells and proteins.</p><ul><li><strong>Isotonic crystalloid</strong> (NS, LR) stays extracellular but spreads into the interstitium: only about <strong>20–30%</strong> stays in the vessels → the <strong>3:1 rule</strong>.</li><li><strong>Hypotonic</strong> (D5W, ½NS): the dextrose is metabolized, leaving free water that spreads into <strong>cells too</strong>, so almost none stays in the vessels → <strong>not for volume resuscitation</strong>.</li><li><strong>Colloids</strong> mostly stay intravascular, but in sepsis and hemorrhage leaky capillaries let even proteins escape; no outcome benefit and costly.</li></ul>" + clar("D5W acting as free water after the glucose is metabolized is standard physiology; the slides say it is for free-water replacement, not resuscitation.")),
      S("chain", "Cause → effect", chain([
        "Give 1 L NS → spreads across plasma + interstitium",
        "Only ~20-30% stays intravascular within 30 minutes",
        "So replace each 1 mL of blood lost with ~3 mL crystalloid (3:1 rule)",
        "After ~2 L of crystalloid in hemorrhage → consider blood to avoid hemodilution",
        "Too much → interstitial edema (third spacing): fluid overloaded yet underperfused"
      ]) + Tbl(["Fluid", "Tonicity", "Use"], [
        ["0.9 NS", "Isotonic", "Resuscitation; only fluid given with blood"],
        ["Lactated Ringer's", "Isotonic", "Resuscitation; lactate buffers acidosis"],
        ["0.45 NS", "Hypotonic", "Hypernatremia (cells swell)"],
        ["D5W", "Hypotonic", "Free water, maintenance, hypoglycemia; NOT resuscitation"],
        ["3% NS", "Hypertonic", "Symptomatic severe hyponatremia, ICP (cells shrink)"]
      ])),
      S("bedside", "Why it matters clinically", "<p>Isotonic crystalloid is the preferred initial resuscitation fluid. Severe hypovolemia: 1–2 L wide open, then reassess BP, HR, JVP, urine, mentation. Mild-moderate: 1 L then ~100 mL/h. Correct sodium slowly: rapid correction with 3% saline risks <strong>osmotic demyelination</strong>; overuse of hypotonic fluid risks hyponatremia and cerebral edema.</p>" + HY("Third spacing: a patient can be fluid overloaded and still have inadequate circulating volume.")),
      S("traps", "Common traps", traps([
        "<strong>Resuscitating with D5W.</strong> It's free water; it leaves the vessels.",
        "<strong>Running blood with LR.</strong> Only 0.9 NS goes with blood products.",
        "<strong>Assuming edema means enough volume.</strong> Third spacing can coexist with hypovolemia."
      ]))
    ], [
      Q("idea", "Why does a 1 L normal saline bolus raise blood volume by only about 250 mL?", ["Most of it moves into the interstitial space", "The kidneys excrete it immediately", "It enters the cells", "It is metabolized"], 0, "Only about 20-30% stays intravascular (3:1 rule)."),
      Q("chain", "A patient loses 500 mL of blood. By the 3:1 rule, how much crystalloid restores intravascular volume?", ["About 1500 mL", "500 mL", "250 mL", "5 L"], 0, "Three times the loss, because only about 30% stays."),
      Q("chain", "Why is D5W not used for volume resuscitation?", ["The glucose is metabolized, leaving free water that spreads into cells", "It is hypertonic", "It stays in the vessels too long", "It causes hyperkalemia"], 0, "D5W is for free-water replacement, not resuscitation."),
      Q("idea", "A cell is placed in a hypotonic solution. What happens?", ["It swells", "It shrinks", "No change", "It bursts only in hypertonic fluid"], 0, "Hypotonic solutions increase cell size."),
      Q("bedside", "Which IV fluid is the only one given alongside blood products?", ["0.9% normal saline", "Lactated Ringer's", "D5W", "0.45% saline"], 0, "0.9NS is the only fluid given with blood."),
      Q("traps", "Why don't colloids hold volume in the vessels as well as expected in sepsis?", ["Capillaries become so leaky that proteins escape into the interstitium", "Colloids are hypotonic", "Colloids are metabolized", "Colloids cause diuresis"], 0, "In sepsis and hemorrhage, even proteins flow into the interstitium."),
      Q("chain", "Hyponatremia is corrected too quickly with 3% saline. What is the risk?", ["Osmotic demyelination syndrome", "Cerebral edema", "Hyperkalemia", "Hypoglycemia"], 0, "Rapid sodium correction causes osmotic demyelination."),
      Q("bedside", "A burn patient has massive edema yet is hypotensive with low urine output. How?", ["Fluid has shifted out of the vessels (third spacing)", "He is volume overloaded in the vessels", "He has heart failure only", "Edema proves good perfusion"], 0, "Excess body fluid can coexist with inadequate circulating volume.")
    ]),

    D("shkc-perfusion-targets", "Resuscitate to perfusion, not to a number", "MAP reflects organ perfusion better than systolic pressure, and urine output, mentation, and lactate show whether tissues are actually getting blood; follow the trend after every intervention.", [
      S("idea", "The idea", "<p>Organs are perfused during the whole cardiac cycle, so the <strong>mean arterial pressure</strong> (average over the cycle) is a better marker of organ perfusion than SBP. But even a normal MAP doesn't prove tissues are fed: check <strong>end-organ signs</strong>.</p><ul><li><strong>Urine output</strong> &gt; 0.5 mL/kg/h (kidney perfusion)</li><li><strong>Mentation</strong> (brain perfusion)</li><li><strong>Capillary refill</strong> (skin)</li><li><strong>Lactate trend</strong> (anaerobic metabolism from tissue hypoxia)</li></ul>"),
      S("chain", "Cause → effect", chain([
        "Assess: is perfusion impaired? (MAP, mentation, cap refill, urine, lactate)",
        "Identify the mechanism (volume, pump, vasodilation, obstruction) and fluid tolerance (JVP, crackles, O2 need, POCUS)",
        "Act on the mechanism",
        "Reassess perfusion AND congestion",
        "Poor response → recheck phenotype, fluid responsiveness, source control, escalation"
      ]) + Tbl(["Goal", "Target"], [
        ["MAP", "≥ 65 mmHg"],
        ["SBP", "≥ 90 mmHg"],
        ["Urine output", "&gt; 0.5 mL/kg/h (~35 mL/h)"],
        ["CVP", "≥ 8 mmHg"],
        ["SpO2", "≥ 92%"]
      ])),
      S("bedside", "Why it matters clinically", "<p>A Foley measures urine output; an arterial line gives continuous MAP and ABGs; a central line measures CVP and delivers pressors. Rising lactate despite a better BP means tissues are still starving. New crackles, rising O2 needs, or JVD after fluids mean you have hit the limit of fluid tolerance.</p>" + clar("lactate rising from anaerobic metabolism is standard physiology; the slides list lactate to evaluate systemic ischemia or sepsis.") + HY("Treat the physiology, not the blood pressure alone.")),
      S("traps", "Common traps", traps([
        "<strong>Stopping at a good BP.</strong> Check urine, mentation, and lactate.",
        "<strong>Trusting a single lab for volume status.</strong> BUN, creatinine, Hct aren't reliable alone.",
        "<strong>Forgetting to reassess congestion.</strong> More fluid isn't always better."
      ]))
    ], [
      Q("idea", "Why is MAP preferred over systolic BP for judging organ perfusion?", ["Organs are perfused across the whole cardiac cycle, which MAP reflects", "MAP is always higher", "SBP can't be measured in shock", "MAP measures oxygen directly"], 0, "MAP is the average pressure over one cardiac cycle."),
      Q("bedside", "A 70 kg patient's urine output is 15 mL/h after resuscitation. What does this mean?", ["The kidneys are still underperfused (goal over 0.5 mL/kg/h)", "Resuscitation is complete", "Too much fluid was given", "Normal output"], 0, "Goal is above about 35 mL/h."),
      Q("chain", "After fluids, BP improves but lactate keeps rising. What does it suggest?", ["Tissues are still hypoperfused", "Shock has resolved", "Lab error only", "Too much oxygen"], 0, "Rising lactate signals ongoing tissue ischemia."),
      Q("chain", "During resuscitation, new crackles and rising O2 needs appear. What does it mean?", ["Fluid tolerance is reached; congestion is emerging", "More fluid is needed", "Perfusion is perfect", "The patient is septic"], 0, "Reassess perfusion AND congestion."),
      Q("bedside", "What is the MAP goal in resuscitation?", ["65 mmHg or higher", "40 mmHg", "100 mmHg or higher", "120 mmHg"], 0, "MAP ≥ 65."),
      Q("traps", "Can BUN, creatinine, and hematocrit alone tell you a patient's volume status?", ["No, they are not always reliable indicators", "Yes, always", "Only hematocrit is reliable", "Only creatinine is reliable"], 0, "Laboratory diagnostics are not always reliable indicators of fluid status."),
      Q("idea", "Why does mental status matter in shock assessment?", ["It reflects brain perfusion", "It reflects kidney function", "It is unrelated", "It only measures pain"], 0, "Mentation is an end-organ perfusion sign."),
      Q("bedside", "Which device gives continuous MAP and arterial blood gases?", ["Arterial line", "Foley catheter", "Peripheral IV", "Nasal cannula"], 0, "An arterial line measures arterial pressure and samples ABGs.")
    ])
  ]);
})();
