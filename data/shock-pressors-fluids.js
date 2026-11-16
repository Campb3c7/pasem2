/* Cardio Part 2, Shock, Pressors & Fluid Management (Shock Pressors and Fluid Management 2026 deck, 112 slides).
   Official "Shock, Pressors & Fluid Management Objectives" in order, one section per objective. Splits: objective 4
   (cardiogenic shock) into 4a epidemiology/risk/etiology, 4b clinical features, 4c diagnostic tests; objective 6 into
   the receptor overview plus one section per pressor; objective 8 into bedside lines (Foley, central line, art line)
   and cath lab/ICU devices (IABP, Swan-Ganz, LVAD); objective 11 into electrolytes and moving forces, then osmolality
   and tonicity; objective 20 into isotonic, hypotonic and hypertonic solutions. The clinical synthesis slide (62, 112)
   sits with the goals of resuscitation. Picture slides read: 4 (four shock types), 66 (fluid compartments), 73
   (ascites as third spacing), 77 (electrolyte bar chart), 84 (tonicity tubes). Mnemonics are standard teaching.
   Deck slips labeled on the cards: slide 74 divalent wording, slide 55 "right arterial" (atrial), slide 52 "ScVO2"
   (mixed venous SvO2), slide 85 20% vs slide 99 30% crystalloid retention, slide 53 75 kg vs slide 61 70 kg. */
(function () {
  "use strict";

  function q(prompt, answer, wrong, explanation) {
    return { prompt: prompt, choices: [answer].concat(wrong), correct: 0, explanation: explanation };
  }
  function C(title, html, coverage, test, apply) {
    return { title: title, html: html, coverage: coverage, test: test, apply: apply };
  }
  function S(id, title, description, units) {
    var r = { id: id, title: title, description: description, cards: [], test: [], apply: [] };
    units.forEach(function (u, i) {
      r.cards.push({ title: u.title, html: u.html, coverage: u.coverage });
      ["test", "apply"].forEach(function (m) {
        u[m].forEach(function (x) { x.card = i; r[m].push(x); });
      });
    });
    return r;
  }
  function hy(x) { return '<div class="box-hy"><span class="lbl">High yield</span>' + x + "</div>"; }
  function mn(x) { return '<div class="box-mnemonic"><span class="lbl">Mnemonic</span>' + x + "</div>"; }
  function note(x) { return '<div class="box-fix"><span class="lbl">Source note</span>' + x + "</div>"; }
  function tbl(head, rows) {
    return '<table class="learn-table"><tr>' + head.map(function (h) { return "<th>" + h + "</th>"; }).join("") + "</tr>" +
      rows.map(function (r) { return "<tr>" + r.map(function (d) { return "<td>" + d + "</td>"; }).join("") + "</tr>"; }).join("") + "</table>";
  }

  window.SHOCK_PRESSORS_FLUIDS_OBJECTIVES = [

    /* ---------- 1 ---------- */
    S("01-types-of-shock", "1. Types of shock and an example of each", "Objective 1. Slides 2–5.", [
      C("What shock is",
        "<p><strong>Shock</strong> = a state of <strong>cellular and tissue hypoxia</strong> from:</p>" +
        "<ul><li><strong>Reduced oxygen delivery</strong></li><li><strong>Increased oxygen consumption</strong></li><li><strong>Inadequate oxygen utilization</strong></li><li>Or a <strong>combination</strong></li></ul>" +
        "<p>It is <strong>circulatory failure</strong> shown as <strong>reduced tissue perfusion</strong>. It is <strong>initially reversible</strong> but quickly progresses to <strong>irreversible organ dysfunction</strong>.</p>" +
        hy("Shock is defined by <strong>tissue hypoxia / poor perfusion</strong>, not by a blood pressure number. A patient can be in early shock with a normal BP."),
        ["shock-definition", "shock-three-mechanisms", "shock-reversible-then-not"],
        [q("What is the definition of shock?", "A state of cellular and tissue hypoxia from inadequate oxygen delivery, increased consumption or poor utilization", ["Any systolic blood pressure under 100", "A heart rate over 120", "Loss of consciousness from any cause"], "Shock is tissue hypoxia, shown as reduced tissue perfusion."),
          q("Which is NOT one of the deck's mechanisms of tissue hypoxia in shock?", "Increased oxygen delivery", ["Reduced oxygen delivery", "Increased oxygen consumption", "Inadequate oxygen utilization"], "Delivery is reduced, not increased."),
          q("How does shock behave over time if untreated?", "Initially reversible, then quickly progresses to irreversible organ dysfunction", ["Always irreversible from the start", "Always resolves on its own", "Stays stable for weeks"], "Early shock can be reversed, but untreated it quickly causes permanent organ damage."),
          q("Shock is circulatory failure shown by what?", "Reduced tissue perfusion", ["Increased urine output", "Bradycardia", "Warm flushed skin in every case"], "Poor perfusion is the core.")],
        [q("A septic patient has a BP of 112/70 but rising lactate and confusion. Can this be shock?", "Yes, shock is tissue hypoxia and poor perfusion, not a BP cutoff", ["No, the BP is normal", "No, shock requires bradycardia", "Only if the heart rate is normal"], "Shock means poor tissue perfusion; lactate and confusion show it even with a normal BP."),
          q("A patient in shock is treated late and develops organ failure that does not recover despite normal BP. What happened?", "Shock progressed from the reversible stage to irreversible organ dysfunction", ["The patient never had shock", "Shock is always reversible", "Fluids caused the organ failure"], "Early shock is reversible; late is not.")]),
      C("The four types and their examples",
        tbl(["Type", "Problem", "Examples from the deck"], [
          ["<strong>Cardiogenic</strong> (this lecture's focus)", "The <strong>pump</strong> fails", "MI (most common), contusion, cardiomyopathy, sustained arrhythmia, valve or septal defect, cardiac surgery"],
          ["<strong>Hypovolemic</strong>", "The <strong>tank</strong> is empty", "<strong>Hemorrhage</strong>; fluid loss from <strong>vomiting, diarrhea, dehydration, pancreatitis</strong>; <strong>3rd spacing (burns)</strong>"],
          ["<strong>Obstructive</strong>", "Something <strong>blocks</strong> flow", "<strong>Pulmonary embolism</strong>, <strong>tension pneumothorax</strong>, <strong>cardiac tamponade</strong>, <strong>aortic dissection</strong>"],
          ["<strong>Distributive</strong>", "The <strong>pipes</strong> dilate", "<strong>Sepsis</strong>, <strong>neurogenic</strong> (loss of sympathetic vasomotor tone), <strong>anaphylaxis</strong>"]]) +
        mn("<strong>Pump, Tank, Block, Pipes</strong>: cardiogenic = broken pump, hypovolemic = empty tank, obstructive = blocked pipe, distributive = pipes too wide.") +
        hy("<strong>Hypovolemic shock is the most common form of shock</strong> overall (slide 88). <strong>MI</strong> is the most common cause of <strong>cardiogenic</strong> shock."),
        ["shock-four-types", "hypovolemic-examples", "obstructive-examples", "distributive-examples", "cardiogenic-examples-overview"],
        [q("What are the four main types of shock?", "Cardiogenic, hypovolemic, obstructive, distributive", ["Septic, cardiac, renal, hepatic", "Warm, cold, wet, dry", "Hemorrhagic, neurogenic, renal, hepatic"], "Shock is a pump problem (cardiogenic), a volume problem (hypovolemic), a blockage (obstructive) or leaky vessels (distributive)."),
          q("Tension pneumothorax causes which type of shock?", "Obstructive", ["Distributive", "Hypovolemic", "Cardiogenic"], "A tension pneumo squeezes the vena cava and heart, blocking venous return: obstructive."),
          q("Anaphylaxis causes which type of shock?", "Distributive", ["Obstructive", "Cardiogenic", "Hypovolemic"], "Anaphylaxis dilates vessels and makes them leak, so blood pools: distributive."),
          q("Burns cause which type of shock in the deck?", "Hypovolemic, from 3rd spacing", ["Obstructive", "Cardiogenic", "Distributive only"], "Fluid lost to 3rd spacing."),
          q("Neurogenic shock is caused by what?", "Loss of sympathetic vasomotor tone", ["Blood loss", "A blocked pulmonary artery", "Pump failure from MI"], "Spinal injury cuts sympathetic tone, so vessels dilate (and HR drops): distributive."),
          q("Cardiac tamponade causes which type of shock?", "Obstructive", ["Cardiogenic", "Distributive", "Hypovolemic"], "Fluid around the heart stops it filling, a physical block: obstructive."),
          q("Pancreatitis causes which type of shock in the deck?", "Hypovolemic", ["Obstructive", "Cardiogenic", "Neurogenic"], "Pancreatitis leaks huge volumes of fluid into the abdomen: hypovolemic."),
          q("Which shock type does aortic dissection fall under in this deck?", "Obstructive", ["Distributive", "Neurogenic", "Septic"], "The deck lists it as obstructive."),
          q("What is the most common form of shock overall?", "Hypovolemic shock", ["Cardiogenic shock", "Neurogenic shock", "Obstructive shock"], "Hypovolemia (bleeding, vomiting, diarrhea) is the most common cause of shock. (Slide 88)")],
        [q("A man with a massive saddle PE becomes hypotensive. Type of shock?", "Obstructive", ["Distributive", "Hypovolemic", "Neurogenic"], "A big PE physically blocks flow out of the RV: obstructive."),
          q("A woman with a urinary source has fever, warm skin and hypotension. Type of shock?", "Distributive (septic)", ["Obstructive", "Cardiogenic", "Hypovolemic"], "Sepsis dilates vessels (warm skin, low BP): distributive."),
          q("A patient with a C5 spinal cord injury is hypotensive and bradycardic. Type of shock?", "Distributive (neurogenic)", ["Hypovolemic", "Obstructive", "Cardiogenic"], "Cord injury above T6 cuts sympathetic tone: low BP with a slow HR."),
          q("A child with 3 days of vomiting and diarrhea is lethargic and tachycardic. Type of shock?", "Hypovolemic", ["Distributive", "Cardiogenic", "Obstructive"], "Vomiting and diarrhea drain volume: hypovolemic."),
          q("A patient 4 hours after an anterior STEMI is hypotensive with rales. Type of shock?", "Cardiogenic", ["Distributive", "Hypovolemic", "Neurogenic"], "A big MI weakens the pump; rales show the backup: cardiogenic.")])
    ]),

    /* ---------- 2 ---------- */
    S("02-phases-of-shock", "2. Phases of shock", "Objective 2. Slides 6–9.", [
      C("The continuum: pre-shock, shock, end-organ dysfunction",
        "<p>Every type follows the same <strong>continuum</strong>: an <strong>inciting event</strong> (MI, infection, injury such as a gunshot wound) leads to a systemic circulatory problem that moves through:</p>" +
        tbl(["Phase", "What is happening", "What you see"], [
          ["<strong>1. Pre-shock</strong><br>AKA <strong>warm shock</strong> or <strong>compensated shock</strong>", "Rapid <strong>compensation</strong>; <strong>sympathetic and renin systems</strong> hold up cardiac output and BP. A healthy adult can be <strong>asymptomatic despite a 10% loss</strong> of effective arterial blood volume", "<strong>Tachycardia</strong> and <strong>peripheral vasoconstriction</strong> may be the <strong>only</strong> signs"],
          ["<strong>2. Shock</strong>", "Compensation is <strong>overwhelmed</strong>; organ dysfunction appears", "Tachycardia, <strong>hypotension</strong>, tachypnea, anxiety, diaphoresis, <strong>metabolic acidosis</strong>, <strong>oliguria</strong>, <strong>cool clammy skin</strong>"],
          ["<strong>3. End-organ dysfunction</strong>", "Progressive, <strong>irreversible</strong> organ damage and death", "Urine falls further: <strong>acute renal failure, anuria</strong>; falling cardiac output; <strong>anxiety → delirium → obtundation → coma</strong>"]]) +
        mn("<strong>Compensate, Crash, Collapse</strong>: pre-shock compensates, shock crashes the BP, end-organ dysfunction collapses the organs.") +
        note("\"Warm shock\" here means compensated pre-shock (the deck's term). In sepsis teaching, \"warm shock\" also describes vasodilated distributive shock; answer by the deck in this lecture."),
        ["phases-continuum", "preshock-warm-compensated", "preshock-10-percent", "preshock-only-signs", "shock-phase-signs", "end-organ-phase"],
        [q("What are the three phases of the shock continuum?", "Pre-shock, shock, end-organ dysfunction", ["Warm, wet, cold", "Acute, subacute, chronic", "Hypovolemic, cardiogenic, obstructive"], "Shock moves from compensated pre-shock to shock to end-organ failure. (Slide 6)"),
          q("What are the other names for pre-shock?", "Warm shock or compensated shock", ["Cold shock or decompensated shock", "Irreversible shock", "Spinal shock"], "Pre-shock is called warm or compensated because the body still holds BP up. (Slide 7)"),
          q("A healthy adult can be asymptomatic despite about what loss of effective arterial blood volume?", "10%", ["1%", "40%", "60%"], "Compensation hides up to about a 10% loss of effective volume."),
          q("Which systems compensate first in pre-shock?", "The sympathetic and renin systems", ["The lymphatic system", "The parasympathetic system alone", "The thyroid axis"], "Sympathetic and renin systems respond first to hold BP."),
          q("What may be the only signs of shock during pre-shock?", "Tachycardia and peripheral vasoconstriction", ["Anuria and coma", "Hypotension and bradycardia", "Fever and rash"], "Early on, the only clues may be a fast HR and cool skin."),
          q("When does hypotension first appear on the continuum?", "In the shock phase, when compensation is overwhelmed", ["In pre-shock", "Before the inciting event", "Never in shock"], "BP finally drops once compensation can't keep up."),
          q("Which acid-base finding appears in the shock phase?", "Metabolic acidosis", ["Metabolic alkalosis", "Respiratory alkalosis only", "Normal pH always"], "Starved tissues make lactic acid, causing metabolic acidosis."),
          q("Which urine finding defines end-organ dysfunction more than the shock phase?", "Anuria and acute renal failure", ["Polyuria", "Mild oliguria only", "Normal urine output"], "When the kidneys stop working (anuria), organs are failing."),
          q("What is the order of mental status decline in shock?", "Anxiety, then delirium, then obtundation, then coma", ["Coma, then delirium, then anxiety", "Delirium, then anxiety, then coma", "Obtundation, then anxiety"], "As brain perfusion falls: anxiety, then delirium, obtundation, coma. (Slide 9)")],
        [q("A trauma patient has HR 118, BP 124/80, cool fingers and no other complaints. Which phase?", "Pre-shock (compensated)", ["End-organ dysfunction", "Irreversible shock", "Not shock at all"], "Tachycardia and vasoconstriction with a normal BP = compensated pre-shock."),
          q("A patient has HR 130, BP 78/50, RR 28, cool clammy skin, anxiety and low urine output. Which phase?", "Shock", ["Pre-shock", "Recovery", "Normal stress response"], "Low BP, tachypnea, clammy skin and low urine = shock phase."),
          q("A patient in prolonged shock is now anuric and comatose. Which phase?", "End-organ dysfunction", ["Pre-shock", "Compensated shock", "Warm shock"], "Anuria and coma mean organs are failing: end-organ dysfunction."),
          q("A patient is tachycardic with a normal BP after a GI bleed. Why is the normal BP falsely reassuring?", "Compensation keeps BP up in pre-shock until it is overwhelmed", ["Normal BP rules out blood loss", "GI bleeds do not cause shock", "Tachycardia is always anxiety"], "Compensation keeps BP normal until a lot of blood is lost, so watch the HR.")])
    ]),

    /* ---------- 3 ---------- */
    S("03-response-to-shock", "3. The body's response to shock", "Objective 3. Slides 10–12.", [
      C("Sympathetic and hormonal response",
        "<p><strong>Carotid baroreceptors</strong> sense the drop in volume and trigger a <strong>sympathetic</strong> response. A surge of <strong>vasoactive hormones</strong>: <strong>epinephrine, norepinephrine, cortisol</strong>.</p>" +
        tbl(["Change", "Why"], [
          ["<strong>↑ Heart rate</strong>", "CO = HR × SV"],
          ["<strong>↑ Contractility</strong>", "Raises <strong>stroke volume</strong>"],
          ["<strong>Arteriole constriction</strong>", "Keeps <strong>SVR</strong> and BP up; <strong>shunts blood away from liver, spleen, kidneys and periphery</strong>"],
          ["<strong>Venous constriction</strong>", "<strong>Increases venous return</strong> to the heart"]]) +
        hy("Shunting from the <strong>kidneys and skin</strong> is why shock looks like <strong>oliguria</strong> and <strong>cool, clammy, mottled skin</strong>."),
        ["response-baroreceptors", "response-hormones", "response-hr-contractility", "response-arteriole", "response-venous"],
        [q("Which receptors first sense the drop in volume in shock?", "Carotid baroreceptors", ["Juxtaglomerular chemoreceptors in the lung", "Skin thermoreceptors", "Retinal photoreceptors"], "Carotid baroreceptors sense the drop and trigger the sympathetic response. (Slide 10)"),
          q("Which hormones surge in the shock response?", "Epinephrine, norepinephrine and cortisol", ["Insulin, glucagon and somatostatin", "Thyroxine and calcitonin", "Estrogen and progesterone"], "Epinephrine, norepinephrine and cortisol surge to support BP."),
          q("Which equation explains why the heart rate rises in shock?", "CO = HR x SV", ["MAP = HR + SV", "BP = CO / SVR", "SV = HR x SVR"], "If SV falls, the only way to hold CO is a faster HR."),
          q("What does arteriole constriction do in shock?", "Maintains SVR and BP, shunting blood away from liver, spleen, kidneys and periphery", ["Increases blood flow to the skin", "Lowers SVR", "Increases kidney blood flow"], "Arteriolar constriction holds BP by shunting blood to heart and brain."),
          q("What does venous constriction do in shock?", "Increases venous return to the heart", ["Decreases preload", "Causes edema", "Lowers heart rate"], "Squeezing the veins pushes more blood back to the heart."),
          q("Increased contractility in shock raises which variable?", "Stroke volume", ["Afterload only", "Urine output", "Heart rate only"], "Stronger contraction raises stroke volume.")],
        [q("Why does a patient in shock have cool, pale fingers?", "Arteriole constriction shunts blood away from the periphery", ["Fever", "Venous dilation", "Too much cardiac output"], "Arteriolar constriction pulls blood away from the skin."),
          q("Why does urine output fall early in shock?", "Sympathetic vasoconstriction shunts blood away from the kidneys", ["The bladder is obstructed", "ADH is suppressed", "Fluid intake is too high"], "Sympathetic tone shunts blood away from the kidneys.")]),
      C("Other compensations: gut, kidney, pituitary",
        tbl(["Organ", "Compensation"], [
          ["<strong>Intestines</strong>", "<strong>Absorb fluid</strong> from intestinal spaces"],
          ["<strong>Kidneys</strong>", "<strong>Sympathetic vasoconstriction</strong> shunts blood away from the kidneys"],
          ["<strong>Pituitary</strong>", "A <strong>10% drop in intravascular volume</strong> makes the hypothalamus stimulate the <strong>posterior pituitary</strong> to release <strong>ADH</strong>: <strong>water reabsorption</strong>, <strong>increased thirst</strong>, <strong>less urine (oliguria)</strong>"]]) +
        hy("<strong>ADH = posterior pituitary</strong>, triggered at about a <strong>10% volume loss</strong>. Same 10% as the pre-shock threshold."),
        ["response-intestines", "response-kidneys", "response-adh-10-percent", "response-adh-effects"],
        [q("Which gland releases ADH in shock?", "Posterior pituitary", ["Anterior pituitary", "Adrenal cortex", "Thyroid"], "ADH is released from the posterior pituitary."),
          q("What drop in intravascular volume triggers ADH release in the deck?", "10%", ["1%", "50%", "75%"], "About a 10% volume drop triggers ADH."),
          q("Which is NOT an effect of ADH in shock?", "Increased urine production", ["Water reabsorption by the kidneys", "Increased thirst", "Oliguria"], "ADH retains water, so urine output falls, not rises."),
          q("How do the intestines help in shock?", "They absorb fluid from intestinal spaces", ["They secrete fluid into the gut", "They release ADH", "They increase blood flow to themselves"], "The gut pulls fluid in from its own spaces to add volume. (Slide 12)"),
          q("Which part of the brain stimulates the posterior pituitary to release ADH?", "Hypothalamus", ["Cerebellum", "Medulla only", "Occipital lobe"], "The hypothalamus signals the posterior pituitary to release ADH.")],
        [q("A bleeding patient is very thirsty and making little urine. Which hormone explains both?", "ADH", ["Aldosterone only", "Insulin", "Atrial natriuretic peptide"], "ADH causes thirst and water retention (low urine)."),
          q("A patient lost about 10% of intravascular volume. Which response begins?", "Hypothalamus triggers posterior pituitary ADH release", ["ADH release stops", "The anterior pituitary releases TSH", "The kidneys increase urine output"], "A 10% drop triggers hypothalamic ADH release.")])
    ]),

    /* ---------- 4a ---------- */
    S("04a-cardiogenic-epi-risk-etiology", "4a. Cardiogenic shock: epidemiology, risk factors and etiology", "Objective 4. Slides 14–18.", [
      C("Causes and epidemiology",
        "<p>Four broad <strong>categories</strong> of cardiogenic shock:</p>" +
        "<ol><li><strong>Myocardial damage</strong>: MI, myocardial contusion, cardiomyopathies</li><li><strong>Sustained arrhythmias</strong></li><li><strong>Valvular or septal defects</strong></li><li><strong>Cardiac surgery</strong></li></ol>" +
        tbl(["Epidemiology", "Number"], [
          ["Most common cause", "<strong>Myocardial infarction</strong>"],
          ["AMI patients who develop it", "<strong>6–8%</strong>"],
          ["Myocardium lost", "<strong>≥ 40%</strong> (one massive AMI or a series)"],
          ["Timing", "Usually within <strong>8 hours</strong> of a massive AMI"]]) +
        mn("<strong>40% lost, 8 hours, 6–8% of MIs</strong>."),
        ["cs-four-categories", "cs-mi-most-common", "cs-6-8-percent", "cs-40-percent", "cs-8-hours"],
        [q("What is the most common cause of cardiogenic shock?", "Myocardial infarction", ["Myocarditis", "Aortic stenosis", "Cardiac surgery"], "MI is the most common cause of cardiogenic shock."),
          q("About what percentage of AMI patients develop cardiogenic shock?", "6 to 8%", ["Less than 1%", "25 to 30%", "50%"], "About 6-8% of AMIs lead to cardiogenic shock."),
          q("Loss of how much myocardium causes cardiogenic shock?", "40% or more", ["5%", "15%", "90% only"], "Losing 40% of the LV leaves too little muscle to pump."),
          q("Cardiogenic shock usually develops within how long of a massive AMI?", "8 hours", ["8 days", "8 weeks", "30 minutes always"], "It usually appears within 8 hours of a massive AMI."),
          q("Which is NOT one of the four broad categories of cardiogenic shock?", "Anaphylaxis", ["Myocardial damage", "Sustained arrhythmias", "Valvular or septal defects"], "Anaphylaxis is distributive, not cardiogenic."),
          q("Myocardial contusion falls into which cardiogenic shock category?", "Myocardial damage", ["Sustained arrhythmia", "Cardiac surgery", "Septal defect"], "A contusion bruises the muscle, like an MI: myocardial damage.")],
        [q("A patient had three MIs over 2 years and now is hypotensive with a dilated weak LV. Why might shock occur without one huge MI?", "A series of AMIs can add up to 40% or more myocardial loss", ["Only one massive MI can cause it", "Small MIs never matter", "Shock needs a valve problem"], "Several smaller MIs can add up to 40% loss."),
          q("A driver hits the steering wheel and develops hypotension with a new wall motion abnormality and no coronary disease. Cause?", "Myocardial contusion causing cardiogenic shock", ["Neurogenic shock", "Anaphylaxis", "Hypovolemia from burns"], "A bruised heart from blunt trauma can fail like an MI.")]),
      C("Risk factors, etiology and pump failure",
        tbl(["Risk factors", "Etiology"], [
          ["<strong>Age > 65</strong>; history of <strong>CAD, heart failure or diabetes</strong>; AMI of the <strong>left main</strong> and its branches (LV dysfunction); <strong>mechanical complications</strong>: <strong>chordae tendineae rupture</strong>, <strong>ventricular septal or free wall rupture</strong>",
            "Most often <strong>multivessel disease of the left anterior heart</strong>: <strong>left main</strong> and branches. <strong>RV dysfunction</strong> about <strong>5%</strong>, from an <strong>inferior AMI</strong> (<strong>right coronary artery</strong>)"]]) +
        "<p><strong>Pump failure</strong>: the heart cannot meet the body's demand. Poor cardiac output comes from <strong>decreased contractility</strong>, <strong>increased preload</strong> and <strong>increased afterload</strong>. Rising preload and afterload then <strong>impair coronary perfusion</strong>, so the myocardium gets less oxygen and pumps even worse: <strong>a downward spiral</strong> to hypotension, hypoperfusion and tissue hypoxia.</p>" +
        hy("Pump failure is a <strong>vicious cycle</strong>: weak pump → high filling pressures and afterload → less coronary flow → weaker pump."),
        ["cs-risk-age-pmh", "cs-risk-left-main", "cs-risk-mechanical", "cs-etiology-lad-left-main", "cs-rv-5-percent", "cs-pump-failure-spiral"],
        [q("Which age is a risk factor for cardiogenic shock?", "Older than 65", ["Younger than 30", "Older than 40", "Older than 90 only"], "Age over 65 raises the risk."),
          q("Which coronary artery's AMI is the classic risk for cardiogenic shock from LV dysfunction?", "Left main and its branches", ["Right coronary only", "Posterior descending only", "A small diagonal branch"], "Left main feeds most of the LV, so occlusion causes massive damage."),
          q("Which mechanical complications are risk factors for cardiogenic shock?", "Chordae tendineae rupture and ventricular septal or free wall rupture", ["Mitral valve prolapse at birth", "Patent foramen ovale", "Bicuspid aortic valve"], "Rupture of chordae, septum or free wall suddenly wrecks the pump."),
          q("About how often does cardiogenic shock come from RV dysfunction?", "About 5%, from an inferior wall AMI", ["About 50%", "About 90%", "Never"], "About 5% come from RV failure, usually from an inferior MI."),
          q("RV infarct causing cardiogenic shock usually involves which artery?", "Right coronary artery", ["Left anterior descending", "Left circumflex", "Left main"], "The RCA supplies the RV."),
          q("Which three factors drive poor cardiac output in pump failure?", "Decreased contractility, increased preload, increased afterload", ["Increased contractility, decreased preload, decreased afterload", "Bradycardia, low preload, low afterload", "Vasodilation alone"], "Weak contraction plus high preload and afterload cut output. (Slide 18)"),
          q("Why does pump failure spiral downward?", "Rising preload and afterload impair coronary perfusion, cutting myocardial oxygen supply", ["Coronary perfusion improves", "Afterload falls to zero", "Preload drops"], "Higher filling pressures and afterload starve the coronaries, weakening the heart further."),
          q("Which comorbidities raise the risk of cardiogenic shock?", "CAD, heart failure and diabetes", ["Asthma and eczema", "Migraine and IBS", "Hypothyroidism only"], "CAD, HF and diabetes raise the risk.")],
        [q("A 72-year-old diabetic has a left main STEMI. What complication is she at highest risk for?", "Cardiogenic shock", ["Neurogenic shock", "Anaphylaxis", "Hypernatremia"], "Left main STEMI, age and diabetes put her at top risk."),
          q("A patient with an inferior STEMI is hypotensive with clear lungs and JVD. Likely mechanism?", "RV dysfunction from right coronary artery occlusion", ["Left main occlusion", "Tension pneumothorax", "Sepsis"], "Clear lungs with JVD and hypotension after inferior MI = RV infarct."),
          q("Day 3 after MI, a patient suddenly becomes hypotensive with a new loud holosystolic murmur. Mechanism?", "Mechanical complication such as septal rupture or chordae rupture", ["A new pericardial rub only", "Dehydration", "Anaphylaxis"], "A new murmur and sudden shock days after MI = mechanical rupture.")])
    ]),

    /* ---------- 4b ---------- */
    S("04b-cardiogenic-clinical-features", "4b. Cardiogenic shock: clinical features", "Objective 4. Slides 19–23.", [
      C("Symptoms, blood pressure and heart rate",
        "<p><strong>Symptoms</strong>: chest pain, dyspnea, diaphoresis, vomiting, arm pain, jaw pain, altered mental status, weakness, <strong>cool extremities</strong>.</p>" +
        tbl(["Sign", "Finding"], [
          ["<strong>Blood pressure</strong>", "<strong>Pre-shock</strong>: may be <strong>normotensive</strong>. <strong>Shock</strong>: <strong>SBP < 90 mmHg</strong> or a <strong>drop of ≥ 40 mmHg</strong>"],
          ["<strong>Heart rate</strong>", "<strong>Tachycardia</strong> is the normal response. Exceptions: <strong>bradycardia</strong> from nodal dysfunction in a <strong>right-sided or inferior AMI</strong>; a <strong>normal HR</strong> if blunted by <strong>beta blockers or calcium channel blockers</strong>"]]) +
        hy("A <strong>normal heart rate does not rule out shock</strong>: check the med list for <strong>beta blockers and CCBs</strong>, and think <strong>inferior MI</strong> if bradycardic."),
        ["cs-symptoms", "cs-bp-criteria", "cs-bp-preshock-normal", "cs-tachycardia-normal", "cs-brady-inferior", "cs-normal-hr-bb-ccb"],
        [q("What systolic BP defines the shock phase of cardiogenic shock?", "SBP under 90 mmHg or a drop of 40 mmHg or more", ["SBP under 120 mmHg", "SBP under 60 mmHg only", "Any drop of 5 mmHg"], "Cardiogenic shock: SBP under 90 or a 40 mmHg drop. (Slide 20)"),
          q("What is the BP in the pre-shock phase of cardiogenic shock?", "May be normal", ["Always under 70", "Always over 180", "Unmeasurable"], "Compensation keeps BP normal early."),
          q("What is the normal heart rate response in cardiogenic shock?", "Tachycardia", ["Bradycardia", "No change", "Asystole"], "The heart speeds up to compensate for low SV."),
          q("Why can cardiogenic shock present with bradycardia?", "Nodal dysfunction from a right-sided or inferior AMI", ["Beta agonist use", "Fever", "Anemia"], "An inferior/RV MI can damage the SA or AV node, causing bradycardia."),
          q("Which drugs can blunt the tachycardic response in shock?", "Beta blockers and calcium channel blockers", ["Diuretics and statins", "Antibiotics", "Proton pump inhibitors"], "Beta blockers and CCBs block the expected tachycardia."),
          q("Which is a symptom of cardiogenic shock in the deck?", "Cool extremities", ["Warm flushed skin", "Polyuria", "Hyperactive bowel sounds"], "Poor perfusion makes the extremities cool."),
          q("A drop of how much in systolic BP meets the shock criterion even if SBP stays above 90?", "40 mmHg or more", ["5 mmHg", "10 mmHg", "100 mmHg only"], "A 40 mmHg drop counts even if SBP stays over 90.")],
        [q("A man on metoprolol has an anterior STEMI, BP 82/50, HR 74, cool clammy skin. Does the normal HR argue against shock?", "No, the beta blocker blunts the tachycardia", ["Yes, shock always has HR over 100", "Yes, HR 74 rules out shock", "No, because he is septic"], "The beta blocker blunts tachycardia, so a normal HR doesn't rule shock out."),
          q("A hypertensive patient normally at 170 systolic now has an SBP of 125 with an acute MI and cold hands. Shock criterion?", "Yes, a drop of 40 mmHg or more counts", ["No, SBP must be under 90", "No, cold hands are normal", "Only if HR is over 150"], "A 40+ mmHg drop from baseline counts as shock."),
          q("An inferior STEMI patient is hypotensive with HR 42. Why is the HR low?", "Nodal dysfunction from the inferior/right-sided MI", ["Normal compensation", "Too much fluid", "Hyperthyroidism"], "Inferior/RV MI can damage the nodes, causing bradycardia.")]),
      C("Exam: heart, vessels, lungs, skin, mental status",
        tbl(["System", "Finding", "Meaning"], [
          ["Heart", "<strong>Holosystolic murmur at the apex</strong>", "<strong>Mitral regurgitation from chordae tendineae rupture</strong>"],
          ["Heart", "<strong>Displaced PMI</strong>", "<strong>Preexisting cardiomyopathy or CHF</strong>"],
          ["Vascular", "<strong>JVD > 8 cm</strong>; <strong>pitting peripheral edema</strong>", "Edema suggests <strong>preexisting heart failure</strong>"],
          ["Lungs", "<strong>Tachypnea, rales, frothy sputum</strong>", "Pulmonary edema"],
          ["GU", "<strong>Decreased urine output</strong>", "Renal hypoperfusion"],
          ["Skin", "<strong>Cool, clammy, mottled (livedo reticularis)</strong>", "Peripheral vasoconstriction"],
          ["Mental status", "<strong>Anxiety → delirium → obtunded → coma</strong>", "Brain hypoperfusion"]]) +
        hy("Cardiogenic shock is <strong>cold and wet</strong>: cold, mottled skin plus <strong>rales, frothy sputum and JVD</strong>. That wet picture is what separates it from hypovolemic shock (cold and dry)."),
        ["cs-murmur-mr", "cs-displaced-pmi", "cs-jvd-8", "cs-edema-preexisting", "cs-lungs", "cs-urine", "cs-skin-mottled", "cs-mental-status"],
        [q("A new holosystolic murmur at the apex in cardiogenic shock suggests what?", "Mitral regurgitation from chordae tendineae rupture", ["Aortic stenosis", "Pericarditis", "Pulmonic stenosis"], "Ruptured chordae let the mitral valve leak: apical holosystolic murmur. (Slide 21)"),
          q("What does a displaced PMI suggest in cardiogenic shock?", "Preexisting cardiomyopathy or CHF", ["Acute PE", "Tension pneumothorax", "Normal heart"], "A displaced PMI means an already enlarged heart."),
          q("What JVD measurement does the deck list in cardiogenic shock?", "More than 8 cm", ["Less than 2 cm", "Exactly 4 cm", "JVD is absent"], "JVD over 8 cm shows high right-sided pressure."),
          q("Peripheral pitting edema in cardiogenic shock suggests what?", "Preexisting heart failure", ["Acute hemorrhage", "Anaphylaxis", "Dehydration"], "Pitting leg edema means HF was already there."),
          q("Which lung findings occur in cardiogenic shock?", "Tachypnea, rales and frothy sputum", ["Clear lungs with wheeze only", "Absent breath sounds on one side", "Normal lungs always"], "Pulmonary edema causes tachypnea, rales and frothy sputum."),
          q("What is livedo reticularis?", "Mottled skin from poor perfusion", ["A petechial rash from platelets", "Jaundice", "A hive"], "Livedo reticularis is mottled skin from poor perfusion."),
          q("Cardiogenic shock is classically described by which temperature and volume pattern?", "Cold and wet", ["Warm and dry", "Warm and wet", "Hot and dry"], "Cold from poor perfusion, wet from congestion.")],
        [q("A patient after MI has BP 80/50, cold mottled skin, rales to the apices and JVD 12 cm. Type of shock?", "Cardiogenic shock", ["Hypovolemic shock", "Septic shock", "Neurogenic shock"], "Hypotension, cold skin, rales and high JVD after MI = cardiogenic (cold and wet)."),
          q("A cardiogenic shock patient has a displaced PMI and 3+ pitting leg edema. What do these suggest?", "Preexisting cardiomyopathy and heart failure", ["An acute PE only", "Dehydration", "Anaphylaxis"], "A displaced PMI and leg edema point to pre-existing cardiomyopathy and HF."),
          q("A hypotensive patient has cold skin but flat neck veins and clear lungs after vomiting for days. Cardiogenic?", "No, cold and dry fits hypovolemic shock", ["Yes, classic cardiogenic", "Yes, because of the cold skin", "It is obstructive"], "Cold and dry (no congestion) fits hypovolemia, not pump failure.")])
    ]),

    /* ---------- 4c ---------- */
    S("04c-cardiogenic-diagnostics", "4c. Cardiogenic shock: diagnostic tests", "Objective 4. Slides 24–31.", [
      C("EKG first",
        "<p>The <strong>EKG</strong> is the <strong>first diagnostic test</strong>: it looks for MI and the need for <strong>reperfusion</strong>.</p>" +
        "<ul><li>Symptoms of ACS: <strong>cardiac monitor</strong> and an <strong>EKG within 10 minutes</strong></li>" +
        "<li><strong>STEMI</strong>: ST elevation of <strong>1 mm in limb leads</strong> or <strong>2 mm in precordial leads</strong> in <strong>2 contiguous leads</strong></li>" +
        "<li><strong>Wellens waves</strong>: <strong>T wave changes in V2–V3</strong> from a <strong>large LAD lesion</strong> (the deck: more than 2 mm of T wave depression in V2–V3)</li></ul>" +
        note("Wellens is usually taught as deeply inverted or biphasic T waves in V2–V3 that warn of a critical proximal LAD stenosis. The deck words it as T wave depression; both point to the LAD.") +
        mn("<strong>1 in the limbs, 2 in the chest, 2 leads in a row, 10 minutes to the EKG</strong>."),
        ["cs-ekg-first", "cs-ekg-10-min", "cs-stemi-criteria", "cs-wellens"],
        [q("What is the first diagnostic test in suspected cardiogenic shock?", "EKG", ["Chest CT", "Echocardiogram", "Cardiac MRI"], "The EKG finds the MI causing the shock, fast. (Slide 24)"),
          q("Within how many minutes should a patient with ACS symptoms get an EKG?", "10 minutes", ["60 minutes", "2 hours", "24 hours"], "ACS symptoms need an EKG within 10 minutes."),
          q("What ST elevation in the limb leads meets STEMI criteria?", "1 mm in 2 contiguous leads", ["0.5 mm in 1 lead", "5 mm in 3 leads", "Any ST change in aVR only"], "STEMI: 1 mm in 2 contiguous limb leads."),
          q("What ST elevation in the precordial leads meets STEMI criteria?", "2 mm in 2 contiguous leads", ["1 mm in any single lead", "4 mm in all leads", "0.5 mm in V1 only"], "STEMI: 2 mm in 2 contiguous precordial leads."),
          q("Wellens waves point to a lesion in which artery?", "Large LAD lesion", ["Right coronary artery", "Left circumflex", "Posterior descending"], "Wellens T waves warn of a critical proximal LAD lesion."),
          q("In which leads are Wellens T wave changes seen?", "V2 to V3", ["II, III, aVF", "I and aVL", "V5 to V6"], "Wellens changes are in V2-V3.")],
        [q("A patient with chest pain and hypotension arrives in the ED. What is done within 10 minutes?", "Cardiac monitor and 12-lead EKG", ["CT angiogram", "Stress test", "Echo before anything else"], "Monitor and 12-lead EKG within 10 minutes."),
          q("An EKG shows 1.5 mm ST elevation in II, III and aVF. Meets STEMI criteria?", "Yes, at least 1 mm in 2 contiguous limb leads", ["No, limb leads need 2 mm", "No, it needs 5 leads", "Only if troponin is up"], "1.5 mm in II, III and aVF meets the 1 mm limb-lead criterion."),
          q("A pain-free patient has deep T wave changes in V2 and V3 after chest pain yesterday. Concern?", "Wellens waves from a critical LAD lesion", ["Normal variant", "Pericarditis only", "Right coronary occlusion"], "Wellens waves after chest pain warn of a critical LAD lesion.")]),
      C("CXR, echo and labs",
        tbl(["Test", "Looks for"], [
          ["<strong>Portable CXR</strong>", "<strong>Pulmonary edema</strong>, <strong>widened mediastinum</strong>, <strong>cardiomegaly</strong>"],
          ["<strong>Echocardiogram</strong>", "Mechanical function and <strong>LVEF</strong>: <strong>decreased stroke volume</strong> and <strong>wall motion abnormalities</strong>"],
          ["<strong>Troponin I, CK, CK-MB</strong>", "MI"],
          ["<strong>Serum lactate</strong>", "Systemic ischemia or sepsis"],
          ["<strong>CBC</strong>", "Infection or anemia"],
          ["<strong>CMP</strong>", "Liver or kidney failure, electrolytes"],
          ["<strong>BNP</strong>", "A <strong>normal BNP suggests a diagnosis other than cardiogenic shock</strong>"],
          ["<strong>PT/INR, PTT</strong>", "Coagulopathy"]]) +
        hy("<strong>Normal BNP argues against cardiogenic shock</strong>. A <strong>widened mediastinum</strong> on CXR should make you think <strong>aortic dissection</strong> (an obstructive cause)."),
        ["cs-cxr", "cs-echo", "cs-troponin", "cs-lactate", "cs-cbc-cmp", "cs-bnp-normal", "cs-coags"],
        [q("Which three CXR findings does the deck look for in cardiogenic shock?", "Pulmonary edema, widened mediastinum, cardiomegaly", ["Rib fractures, pneumothorax, effusion", "Hilar adenopathy only", "Free air under the diaphragm"], "CXR looks for edema, a wide mediastinum and cardiomegaly. (Slide 27)"),
          q("What does the echo show in cardiogenic shock?", "Decreased stroke volume and ventricular wall motion abnormalities", ["Increased stroke volume", "Normal LVEF always", "Hyperdynamic LV only"], "Echo shows low SV and wall motion problems."),
          q("What does a normal BNP suggest in a hypotensive patient?", "A diagnosis other than cardiogenic shock", ["Confirms cardiogenic shock", "Confirms sepsis", "Nothing at all"], "A failing heart raises BNP, so a normal BNP points elsewhere. (Slide 31)"),
          q("Why is serum lactate checked in shock?", "To evaluate systemic ischemia or sepsis", ["To diagnose MI", "To measure kidney function", "To check clotting"], "Lactate measures tissue hypoperfusion."),
          q("Which cardiac markers evaluate for MI in cardiogenic shock?", "Troponin I, CK and CK-MB", ["Amylase and lipase", "AST and ALT only", "TSH and free T4"], "Troponin, CK and CK-MB look for MI."),
          q("Which labs evaluate for coagulopathy?", "PT/INR and PTT", ["BNP", "Lactate", "CK-MB"], "PT/INR and PTT check for coagulopathy."),
          q("Which test measures LVEF in cardiogenic shock?", "Echocardiogram", ["Chest x-ray", "CBC", "Lactate"], "Echo measures EF."),
          q("Which lab evaluates for organ failure (liver or kidney) and electrolyte problems?", "CMP", ["CBC", "PT/INR", "Troponin"], "A CMP checks kidney, liver and electrolytes.")],
        [q("A hypotensive patient's BNP is normal. How does this change thinking?", "Look for another cause of shock than cardiogenic", ["Confirms cardiogenic shock", "Start dobutamine", "Ignore it"], "Normal BNP argues against pump failure."),
          q("A hypotensive patient with chest pain has a widened mediastinum on portable CXR. What must be considered?", "Aortic dissection", ["Simple pneumonia", "Normal finding", "Anaphylaxis"], "A widened mediastinum suggests dissection."),
          q("A cardiogenic shock patient's lactate keeps climbing. What does it reflect?", "Worsening systemic ischemia (tissue hypoperfusion)", ["Improving perfusion", "Liver cirrhosis only", "Normal recovery"], "Rising lactate means tissue perfusion is getting worse.")])
    ]),

    /* ---------- 5 ---------- */
    S("05-cardiogenic-emergency-management", "5. Emergency management of cardiogenic shock", "Objective 5. Slides 32–37.", [
      C("Goal, airway and fluids",
        "<p>Emergency care is a <strong>temporizing measure</strong> while arranging <strong>revascularization/reperfusion in the cath lab</strong> (AMI) or <strong>surgery</strong> (mechanical catastrophe). <strong>Airway and circulatory stabilization happen simultaneously</strong> and often come <strong>before</strong> a complete history, exam, studies and drugs.</p>" +
        tbl(["Step", "Details"], [
          ["<strong>Oxygen</strong>", "Nasal cannula → non-rebreather → <strong>bag-valve mask</strong> if <strong>obtunded or comatose</strong> (before intubation)"],
          ["<strong>Advanced airway</strong>", "<strong>Endotracheal intubation</strong>: <strong>most</strong> cardiogenic shock patients ultimately need intubation and a ventilator"],
          ["<strong>IV fluids</strong>", "<strong>Hold boluses</strong> if shock is from <strong>LV dysfunction</strong> or there is <strong>respiratory distress from pulmonary congestion</strong>. Get IV access (<strong>saline lock</strong>)"],
          ["<strong>Cautious boluses</strong>", "<strong>250 cc</strong> boluses for <strong>mild hypotension</strong> only if <strong>no LV dysfunction</strong> (no respiratory distress, rales, JVD or CXR congestion). <strong>Reassess before and after every 250 cc</strong>"]]) +
        hy("The definitive treatment is <strong>reperfusion in the cath lab</strong>. Everything in the ED buys time."),
        ["cs-em-temporizing", "cs-em-simultaneous", "cs-em-oxygen-steps", "cs-em-intubation", "cs-em-hold-fluids", "cs-em-250-bolus"],
        [q("What is the role of emergency care in cardiogenic shock from AMI?", "A temporizing measure while arranging cath lab revascularization", ["The definitive cure", "Only comfort care", "To delay the cath lab"], "The ED stabilizes; the cath lab fixes the cause. (Slide 32)"),
          q("When do airway management and circulatory stabilization happen in cardiogenic shock?", "Simultaneously, often before the full history and exam", ["Only after a full history", "Airway only after the echo", "Circulation only after intubation is complete"], "Airway and circulation are handled at once, before the full workup."),
          q("Which oxygen device is used for an obtunded patient before intubation?", "Bag-valve mask", ["Nasal cannula", "Venturi mask", "No oxygen"], "Bag-valve mask bridges until intubation."),
          q("How many cardiogenic shock patients ultimately need intubation?", "Most", ["None", "Almost none", "Only children"], "Most cardiogenic shock patients need intubation."),
          q("When should IV fluid boluses be held in cardiogenic shock?", "With LV dysfunction or respiratory distress from pulmonary congestion", ["Never", "Only if BP is high", "Only in children"], "A weak or congested LV can't handle more fluid."),
          q("What size fluid bolus may be given cautiously in cardiogenic shock without LV dysfunction?", "250 cc", ["2 L", "30 mL/kg", "5 L"], "Small 250 cc boluses limit the risk of overloading."),
          q("How often is a cardiogenic shock patient reassessed during cautious fluids?", "Before and after every 250 cc bolus", ["Once a day", "Only after 2 L", "Never"], "Reassess before and after each 250 cc bolus."),
          q("What IV setup is used when fluids are held in cardiogenic shock?", "Saline lock (IV access without large boluses)", ["No IV access", "Wide-open fluids", "Only an IO line"], "A saline lock keeps access without giving fluid.")],
        [q("An anterior STEMI patient is hypotensive with rales and frothy sputum. IV fluids?", "Hold boluses; place a saline lock", ["2 L normal saline wide open", "30 mL/kg bolus", "D5W at 250 cc/hour"], "Rales and frothy sputum mean the lungs are already overloaded."),
          q("An inferior MI patient has mild hypotension, clear lungs, no JVD and a clear CXR. Fluids?", "Cautious 250 cc bolus with reassessment before and after", ["Hold all fluids forever", "Wide-open 3 L", "Hypertonic saline"], "Without congestion, a small cautious bolus is reasonable."),
          q("A cardiogenic shock patient becomes obtunded with poor respiratory effort. Bridge before intubation?", "Bag-valve mask ventilation", ["Nasal cannula 2 L", "No oxygen", "Incentive spirometer"], "BVM bridges to intubation."),
          q("What definitive therapy is being arranged during ED care of cardiogenic shock from STEMI?", "Revascularization in the cardiac cath lab", ["Discharge home", "Outpatient stress test", "Elective valve surgery next month"], "Cath lab revascularization is the definitive fix.")]),
      C("Drugs: the balance, blood thinners and what to avoid",
        "<p>Treatment is a <strong>precarious balance</strong>: <strong>improve cardiac output</strong>, <strong>reduce myocardial workload and oxygen need</strong>, and <strong>increase coronary perfusion</strong>.</p>" +
        tbl(["Drug group", "Details"], [
          ["<strong>Blood thinners</strong>", "<strong>Aspirin 324 mg orally</strong> and <strong>IV heparin</strong>"],
          ["<strong>Sympathomimetic inotropes and vasopressors</strong> (first-line mainstay)", "<strong>Dobutamine, dopamine, norepinephrine (Levophed), epinephrine</strong>"],
          ["<strong>AVOID: negative inotropes</strong>", "<strong>Beta blockers and calcium channel blockers</strong>: they <strong>block the tachycardic response</strong> and worsen the situation"]]) +
        hy("A STEMI in <strong>shock</strong> does <strong>not</strong> get a beta blocker. Aspirin 324 mg + heparin + pressors, then the cath lab.") +
        note("The 324 mg is four 81 mg tablets, usually chewed (standard teaching)."),
        ["cs-drug-balance", "cs-aspirin-324", "cs-heparin", "cs-pressors-first-line", "cs-avoid-bb-ccb"],
        [q("What aspirin dose is given in cardiogenic shock from AMI?", "324 mg orally", ["81 mg IV", "1000 mg orally", "None"], "Aspirin 324 mg (four 81s) is chewed. (Slide 36)"),
          q("Which anticoagulant is given IV with aspirin in cardiogenic shock?", "Heparin", ["Warfarin", "Apixaban", "Alteplase alone"], "IV heparin is given with aspirin."),
          q("What is the mainstay first-line drug group for cardiogenic shock?", "Sympathomimetic inotropes and vasopressors", ["Beta blockers", "Calcium channel blockers", "Loop diuretics alone"], "Inotropes and pressors support pump and BP. (Slide 37)"),
          q("Which drugs should be avoided in cardiogenic shock?", "Beta blockers and calcium channel blockers", ["Aspirin and heparin", "Norepinephrine", "Oxygen"], "Beta blockers and CCBs depress the already failing pump."),
          q("Why are beta blockers avoided in cardiogenic shock?", "They block the tachycardic response and worsen the situation", ["They cause bleeding", "They raise BP too much", "They are too expensive"], "Beta blockers block the compensatory tachycardia and weaken the heart."),
          q("Which is NOT one of the goals in the precarious balance of cardiogenic shock treatment?", "Increase myocardial oxygen demand", ["Improve cardiac output", "Reduce myocardial workload", "Increase coronary perfusion"], "Reduce demand, not increase it."),
          q("Which four sympathomimetic agents does the deck list for cardiogenic shock?", "Dobutamine, dopamine, norepinephrine, epinephrine", ["Metoprolol, diltiazem, digoxin, adenosine", "Furosemide, spironolactone, HCTZ, mannitol", "Atropine, lidocaine, magnesium, calcium"], "Dobutamine, dopamine, norepinephrine and epinephrine are the options. (Slide 37)")],
        [q("A STEMI patient in shock (BP 78/40) has tachycardia at 120. A resident orders IV metoprolol for rate control. Response?", "Avoid it: beta blockers worsen cardiogenic shock", ["Give it, tachycardia is harmful", "Double the dose", "Add diltiazem too"], "Beta blockers worsen cardiogenic shock."),
          q("A hypotensive STEMI patient is waiting for the cath lab. Which antithrombotic pair?", "Aspirin 324 mg orally and IV heparin", ["Warfarin and clopidogrel", "No antithrombotics", "Alteplase and warfarin"], "Aspirin plus heparin stops clot growth."),
          q("A patient in cardiogenic shock takes diltiazem at home. What should happen to it?", "Hold it: calcium channel blockers worsen cardiogenic shock", ["Double it", "Give it IV", "Switch to verapamil"], "CCBs depress contractility, so hold it.")])
    ]),

    /* ---------- 6a ---------- */
    S("06a-pressor-receptors-overview", "6a. Pressors: receptors and the comparison table", "Objective 6. Slides 38–41.", [
      C("Receptors",
        tbl(["Receptor", "Where", "Effect"], [
          ["<strong>α1</strong>", "Vascular walls", "<strong>Significant vasoconstriction</strong>"],
          ["<strong>β1</strong>", "Heart", "<strong>↑ Inotropy and chronotropy</strong>, minimal vasoconstriction"],
          ["<strong>β2</strong>", "Blood vessels", "<strong>Vasodilation</strong>"],
          ["<strong>Dopaminergic</strong> (low dose dopamine)", "<strong>Renal, splanchnic (mesenteric), coronary, cerebral</strong> beds", "<strong>Vasodilation</strong> at <strong>< 10 mcg/kg/min</strong>"],
          ["<strong>Second dopaminergic subtype</strong> (high dose)", "Releases norepinephrine", "<strong>Vasoconstriction</strong> at <strong>> 10 mcg/kg/min</strong>"]]) +
        "<p>General rules: pressors improve <strong>perfusion pressure in the large vessels</strong>; if several are used, <strong>simplify</strong> once the best agent is found; give them <strong>ideally by central line</strong>, though <strong>initial doses can go peripherally</strong>.</p>" +
        mn("<strong>β1 = 1 heart, β2 = 2 lungs/vessels relax, α1 = squeeze</strong>."),
        ["recept-alpha1", "recept-beta1", "recept-beta2", "recept-dopaminergic-low", "recept-dopaminergic-high", "pressor-general-rules"],
        [q("Which receptor causes significant vasoconstriction in vascular walls?", "Alpha-1", ["Beta-1", "Beta-2", "Low-dose dopaminergic"], "Alpha-1 constricts vessels."),
          q("Which receptor in the heart increases inotropy and chronotropy?", "Beta-1", ["Alpha-1", "Beta-2", "Muscarinic M2"], "Beta-1 speeds and strengthens the heart."),
          q("What does beta-2 stimulation do in blood vessels?", "Vasodilation", ["Vasoconstriction", "Increases heart rate only", "Nothing"], "Beta-2 relaxes vascular smooth muscle."),
          q("Where are the low-dose dopaminergic receptors that cause vasodilation?", "Renal, splanchnic, coronary and cerebral vascular beds", ["Skin and skeletal muscle only", "Lung airways only", "Bone marrow"], "Low-dose dopamine receptors dilate renal, gut, coronary and brain vessels. (Slide 40)"),
          q("How does high-dose dopamine cause vasoconstriction?", "A second dopaminergic receptor subtype causes norepinephrine release", ["It blocks alpha receptors", "It activates beta-2 receptors", "It lowers calcium"], "High-dose dopamine releases norepinephrine, which constricts vessels."),
          q("Where should vasopressors ideally be given?", "Through a central line (initial doses can be peripheral)", ["Intramuscularly", "Orally", "Only by IO line"], "A central line prevents extravasation injury; peripheral is OK briefly."),
          q("What should happen if multiple vasopressors are running?", "Simplify as soon as the best agent is identified", ["Add more until BP is 180", "Never change them", "Stop all of them at once"], "Simplify to the best single agent once found."),
          q("Pressors improve perfusion pressure in which vessels?", "Large vessels", ["Lymphatics", "Capillaries only", "Veins only"], "Pressors raise pressure in large vessels. (Slide 38)")],
        [q("A pressor raises heart rate and contractility with little vasoconstriction. Which receptor does it mainly hit?", "Beta-1", ["Alpha-1", "Dopaminergic only", "Beta-2 only"], "Rate and contractility with little squeeze = beta-1."),
          q("A patient needs norepinephrine in the ED and has only a peripheral IV. Can it be started?", "Yes, initial doses can go peripheral while a central line is placed", ["No, wait hours for a central line", "Only orally", "Only IM"], "Start peripherally while placing a central line.")]),
      C("The four pressors side by side",
        tbl(["Drug", "Receptors", "Cardiac stimulation", "Vasoconstriction"], [
          ["<strong>Dobutamine</strong>", "<strong>Primarily β1</strong>; α1 and β2 (dose dependent)", "<strong>++++</strong>", "+"],
          ["<strong>Dopamine</strong>", "α1, β1, β2, dopaminergic", "++ at <strong>5 mcg/kg/min</strong> (intermediate)", "++ at <strong>15 mcg/kg/min</strong> (high)"],
          ["<strong>Norepinephrine (Levophed)</strong>", "<strong>Primarily α1</strong>, some β1", "++", "<strong>++++</strong>"],
          ["<strong>Epinephrine</strong>", "α1, β1, β2", "+++", "++"]]) +
        hy("<strong>Dobutamine = most pump, least squeeze</strong>. <strong>Norepinephrine = most squeeze</strong>. Epinephrine and dopamine sit in between."),
        ["table-dobutamine-row", "table-dopamine-row", "table-norepi-row", "table-epi-row"],
        [q("Which pressor has the most cardiac stimulation (++++) in the deck's table?", "Dobutamine", ["Norepinephrine", "Dopamine", "Epinephrine"], "Dobutamine is mostly beta-1, so the most cardiac effect."),
          q("Which pressor has the most vasoconstriction (++++) in the deck's table?", "Norepinephrine", ["Dobutamine", "Dopamine at 5 mcg/kg/min", "Epinephrine"], "Norepinephrine is mostly alpha-1, so the most vasoconstriction."),
          q("Which receptor does norepinephrine primarily stimulate?", "Alpha-1, with some beta-1", ["Beta-2 only", "Dopaminergic only", "Beta-1 only"], "Norepinephrine is mainly alpha-1 with some beta-1."),
          q("Which receptor does dobutamine primarily stimulate?", "Beta-1", ["Alpha-1", "Dopaminergic", "Muscarinic"], "Dobutamine is mainly beta-1."),
          q("Which receptors does epinephrine stimulate?", "Alpha-1, beta-1 and beta-2", ["Only alpha-1", "Only dopaminergic", "Only beta-2"], "Epinephrine hits alpha-1, beta-1 and beta-2."),
          q("Which pressor stimulates dopaminergic receptors?", "Dopamine", ["Dobutamine", "Norepinephrine", "Epinephrine"], "Only dopamine acts on dopaminergic receptors.")],
        [q("A patient needs a stronger pump with minimal vasoconstriction and has SBP 96. Which pressor fits best?", "Dobutamine", ["Norepinephrine", "High-dose dopamine", "Phenylephrine"], "Dobutamine boosts the pump with little vasoconstriction, and SBP is over 90."),
          q("A patient needs maximum vasoconstriction to raise a very low BP. Which pressor in the table fits?", "Norepinephrine", ["Dobutamine", "Low-dose dopamine", "Esmolol"], "Norepinephrine gives the most vasoconstriction.")])
    ]),

    /* ---------- 6b ---------- */
    S("06b-dobutamine", "6b. Dobutamine", "Objective 6. Slides 42–43.", [
      C("Dobutamine",
        tbl(["", "Dobutamine"], [
          ["Type", "<strong>Synthetic sympathomimetic</strong>"],
          ["Mechanism", "<strong>β1 agonist = positive inotrope</strong>; <strong>β2 agonist = some peripheral vasodilation</strong>"],
          ["Net effect", "<strong>↑ Contractility</strong> and vasodilation with <strong>minimal change in heart rate</strong>: <strong>↑ cardiac output, ↓ SVR</strong>"],
          ["Indication", "Cardiogenic shock <strong>without profound hypotension</strong>: only when <strong>SBP ≥ 90 mmHg</strong> (avoid if SBP < 90)"],
          ["Onset", "<strong>1–2 minutes</strong>"],
          ["Combination", "May be used <strong>with dopamine</strong>"]]) +
        hy("Dobutamine <strong>lowers SVR</strong>, so it can <strong>drop the BP</strong>. That is why it needs an <strong>SBP of at least 90</strong>.") +
        mn("<strong>DobutaMINE needs a MINimum of 90</strong>."),
        ["dobut-synthetic", "dobut-beta1-beta2", "dobut-net-effect", "dobut-sbp-90", "dobut-onset", "dobut-with-dopamine"],
        [q("What is dobutamine's main receptor action?", "Beta-1 agonist (positive inotrope) with some beta-2 vasodilation", ["Pure alpha-1 agonist", "Dopaminergic agonist", "Beta blocker"], "Dobutamine is a beta-1 inotrope with a little beta-2 vasodilation. (Slide 42)"),
          q("What does dobutamine do to SVR?", "Decreases it", ["Increases it greatly", "No effect", "Doubles it"], "Beta-2 vasodilation lowers SVR."),
          q("What does dobutamine do to heart rate?", "Minimal change", ["Large increase always", "Large decrease", "Causes asystole"], "Dobutamine changes HR only a little."),
          q("Above what SBP should dobutamine be used?", "90 mmHg or higher", ["60 mmHg", "120 mmHg", "Any BP"], "Dobutamine can drop BP, so SBP should be 90 or higher."),
          q("What is dobutamine's onset of action?", "1 to 2 minutes", ["5 minutes", "30 minutes", "2 hours"], "Dobutamine works in 1-2 minutes."),
          q("Which pressor may be combined with dobutamine per the deck?", "Dopamine", ["Metoprolol", "Diltiazem", "Esmolol"], "Dopamine can be combined with dobutamine. (Slide 43)"),
          q("What type of agent is dobutamine?", "Synthetic sympathomimetic", ["Natural catecholamine from the adrenal medulla", "Anticholinergic", "Cardiac glycoside"], "Dobutamine is a synthetic sympathomimetic.")],
        [q("A cardiogenic shock patient has SBP 94, cold extremities and low cardiac output. Which agent improves contractility with less vasoconstriction?", "Dobutamine", ["Norepinephrine", "High-dose dopamine", "Esmolol"], "SBP over 90 and low output = dobutamine."),
          q("A cardiogenic shock patient has SBP 72. Is dobutamine alone appropriate?", "No, avoid dobutamine when SBP is under 90; use a vasopressor such as norepinephrine", ["Yes, it is first-line at any BP", "Yes, it raises SVR", "Yes, double the dose"], "Dobutamine lowers SVR; with SBP under 90 use a vasopressor."),
          q("Shortly after starting dobutamine, a patient's BP drifts down. Why?", "Beta-2 vasodilation lowers SVR", ["It is a pure vasoconstrictor", "It slows the heart", "It causes bleeding"], "Beta-2 vasodilation lowers SVR and BP.")])
    ]),

    /* ---------- 6c ---------- */
    S("06c-dopamine", "6c. Dopamine", "Objective 6. Slides 44–45.", [
      C("Dopamine",
        tbl(["", "Dopamine"], [
          ["Receptors", "<strong>Dopaminergic, α1 and β1</strong>"],
          ["Activity", "<strong>Inotropic</strong> (contraction) and <strong>chronotropic</strong> (rate)"],
          ["Dose effects", "<strong>< 10 mcg/kg/min</strong>: renal and mesenteric vasodilation. <strong>> 10 mcg/kg/min</strong>: vasoconstriction"],
          ["Indication", "<strong>Hypotension with SBP < 90 mmHg</strong>"],
          ["Onset", "<strong>5 minutes</strong>"],
          ["Use", "<strong>Single agent or with dobutamine</strong>"],
          ["Main problem", "<strong>Dose-limiting dysrhythmias</strong>"]]) +
        hy("Dopamine is the pressor with the <strong>slowest onset (5 minutes)</strong> and the one known for <strong>dysrhythmias</strong>."),
        ["dopa-receptors", "dopa-ino-chrono", "dopa-dose-switch", "dopa-sbp-under-90", "dopa-onset-5", "dopa-combo", "dopa-dysrhythmias"],
        [q("Which receptors does dopamine stimulate?", "Dopaminergic, alpha-1 and beta-1", ["Only beta-2", "Only muscarinic", "Only alpha-2"], "Dopamine hits dopaminergic, alpha-1 and beta-1 receptors. (Slide 44)"),
          q("What is dopamine's onset of action?", "5 minutes", ["1 to 2 minutes", "30 minutes", "1 hour"], "Dopamine takes about 5 minutes to work."),
          q("When is dopamine indicated?", "Hypotension with SBP under 90 mmHg", ["SBP over 140", "Only for bradycardia under 30", "Hypertensive emergency"], "Dopamine is for SBP under 90."),
          q("What is the dose-limiting side effect of dopamine?", "Dysrhythmias", ["Hypoglycemia", "Seizures", "Hearing loss"], "Dopamine's beta-1 effect causes arrhythmias. (Slide 45)"),
          q("What does dopamine below 10 mcg/kg/min do to renal and mesenteric vessels?", "Vasodilates them", ["Constricts them", "No effect", "Causes thrombosis"], "Under 10, dopaminergic receptors dilate kidney and gut vessels."),
          q("Dopamine above 10 mcg/kg/min mainly causes what?", "Vasoconstriction", ["Vasodilation", "Bradycardia", "Diuresis"], "Over 10, alpha effects dominate: vasoconstriction."),
          q("Can dopamine be used with dobutamine?", "Yes, as a single agent or in combination with dobutamine", ["Never", "Only with beta blockers", "Only orally"], "Dopamine can be used alone or with dobutamine."),
          q("Dopamine has which two types of cardiac activity?", "Inotropic and chronotropic", ["Negative inotropic and negative chronotropic", "Only dromotropic", "None"], "Dopamine raises contractility and rate.")],
        [q("A hypotensive patient on dopamine develops runs of ventricular tachycardia. What is the likely cause?", "Dose-limiting dysrhythmias from dopamine", ["Normal response", "Hypovolemia only", "Dobutamine allergy"], "Dopamine causes arrhythmias, its dose-limiting effect."),
          q("Which pressor takes the longest to start working in the deck?", "Dopamine (5 minutes)", ["Norepinephrine (1 to 2 minutes)", "Epinephrine (1 to 2 minutes)", "Dobutamine (1 to 2 minutes)"], "Dopamine takes 5 minutes; others take 1-2.")])
    ]),

    /* ---------- 6d ---------- */
    S("06d-norepinephrine", "6d. Norepinephrine (Levophed)", "Objective 6. Slides 47–48.", [
      C("Norepinephrine",
        tbl(["", "Norepinephrine (Levophed)"], [
          ["Role", "<strong>Preferred agent in cardiogenic shock</strong>"],
          ["Receptors", "<strong>Primarily α1 and β1</strong>"],
          ["Activity", "Inotropic and chronotropic; <strong>↑ arterial and venous tone</strong>"],
          ["Net effect", "<strong>↑ HR, contraction and peripheral vascular resistance</strong>; <strong>shunts blood away from the periphery</strong>"],
          ["Indication", "Hypotension with <strong>SBP < 90 mmHg</strong>"],
          ["Onset", "<strong>1–2 minutes</strong>"],
          ["Use", "<strong>Single potent vasopressor</strong>"]]) +
        hy("<strong>Norepinephrine is the preferred agent in cardiogenic shock</strong> and the go-to when SBP is under 90.") +
        mn("<strong>Levophed lifts the pressure</strong>: Levophed = norepinephrine."),
        ["ne-preferred", "ne-receptors", "ne-tone", "ne-shunts", "ne-sbp-90", "ne-onset", "ne-single-agent", "ne-levophed"],
        [q("Which pressor is preferred in cardiogenic shock?", "Norepinephrine", ["Dopamine", "Epinephrine", "Phenylephrine"], "Norepinephrine is the preferred pressor in cardiogenic shock. (Slide 47)"),
          q("What is the brand name of norepinephrine?", "Levophed", ["Dobutrex", "Intropin", "Adrenalin"], "Levophed = norepinephrine."),
          q("Which receptors does norepinephrine primarily stimulate?", "Alpha-1 and beta-1", ["Beta-2 and dopaminergic", "Muscarinic", "Alpha-2 only"], "Norepinephrine hits alpha-1 and beta-1. (Slide 47)"),
          q("What is norepinephrine's onset of action?", "1 to 2 minutes", ["5 minutes", "20 minutes", "1 hour"], "Norepinephrine works in 1-2 minutes."),
          q("When is norepinephrine indicated?", "Hypotension with SBP under 90 mmHg", ["SBP over 160", "Bradycardia with normal BP", "Hypertensive urgency"], "Norepinephrine is for SBP under 90."),
          q("What does norepinephrine do to peripheral vascular resistance?", "Increases it", ["Decreases it", "No change", "Abolishes it"], "Alpha-1 constriction raises SVR."),
          q("Norepinephrine increases tone in which vessels?", "Both arterial and venous", ["Arterial only", "Venous only", "Neither"], "Norepinephrine tightens arteries and veins."),
          q("How is norepinephrine typically used per the deck?", "As a single potent vasopressor", ["Only with dobutamine", "Only orally", "Only for bradycardia"], "Norepinephrine is potent enough to use alone.")],
        [q("A cardiogenic shock patient has SBP 70 with cold extremities. First pressor?", "Norepinephrine", ["Dobutamine alone", "Metoprolol", "Nitroglycerin"], "SBP 70 needs a strong vasopressor: norepinephrine."),
          q("A patient on norepinephrine develops cool, dusky fingers. Why?", "It shunts blood away from the peripheral circulation", ["Beta-2 vasodilation", "It lowers SVR", "Hypothermia only"], "Alpha-1 constriction shunts blood from the fingers.")])
    ]),

    /* ---------- 6e ---------- */
    S("06e-epinephrine", "6e. Epinephrine", "Objective 6. Slides 49–50.", [
      C("Epinephrine",
        tbl(["", "Epinephrine"], [
          ["Receptors", "<strong>α1, β1 and β2</strong>"],
          ["β1", "Inotropy and chronotropy: <strong>↑ cardiac output</strong>"],
          ["β2", "Vasodilation: may <strong>↓ SVR at lower doses</strong>"],
          ["α1", "Vasoconstriction, <strong>more prominent at higher doses</strong>: <strong>↑ SVR</strong>"],
          ["Net SVR", "<strong>Dose dependent</strong>"],
          ["Role", "<strong>Alternative to norepinephrine</strong>"],
          ["Onset", "<strong>1–2 minutes</strong>"],
          ["Downside vs norepinephrine", "<strong>More systemic acidosis, tachycardia and dysrhythmias</strong>"]]) +
        hy("Epi is the <strong>backup to norepi</strong>: it works, but costs more <strong>acidosis, tachycardia and arrhythmias</strong>."),
        ["epi-receptors", "epi-low-dose-svr", "epi-high-dose-svr", "epi-alternative", "epi-onset", "epi-downsides"],
        [q("What is epinephrine's role in cardiogenic shock?", "An alternative to norepinephrine", ["The preferred first agent", "Contraindicated", "Only for bradycardia"], "Epinephrine is the backup to norepinephrine. (Slide 50)"),
          q("What does low-dose epinephrine do to SVR?", "May decrease it through beta-2 vasodilation", ["Always doubles it", "No effect", "Only increases it"], "At low doses beta-2 dilation can lower SVR."),
          q("What does high-dose epinephrine do to SVR?", "Increases it through alpha-1 vasoconstriction", ["Decreases it", "No effect", "Eliminates it"], "At high doses alpha-1 constriction raises SVR."),
          q("Compared with norepinephrine, epinephrine causes more of what?", "Systemic acidosis, tachycardia and dysrhythmias", ["Bradycardia and hypoglycemia", "Hypokalemia only", "Constipation"], "Epinephrine causes more acidosis, tachycardia and arrhythmias than NE. (Slide 50)"),
          q("What is epinephrine's onset of action?", "1 to 2 minutes", ["5 minutes", "15 minutes", "1 hour"], "Epinephrine works in 1-2 minutes."),
          q("Epinephrine's net effect on SVR is what?", "Dose dependent", ["Always lowers it", "Always raises it", "Never changes it"], "SVR effect depends on dose: beta-2 low, alpha-1 high. (Slide 49)")],
        [q("A cardiogenic shock patient on epinephrine has a rising lactate, HR 140 and new PVC runs. Better choice?", "Switch toward norepinephrine, which causes less acidosis and dysrhythmia", ["Add dopamine for more arrhythmia", "Double the epinephrine", "Give a beta blocker bolus"], "Epinephrine's acidosis and arrhythmias favor switching to norepinephrine."),
          q("Norepinephrine is unavailable for a hypotensive cardiogenic shock patient. Alternative per the deck?", "Epinephrine", ["Metoprolol", "Diltiazem", "Nitroprusside"], "Epinephrine is the alternative to norepinephrine.")])
    ]),

    /* ---------- 7 ---------- */
    S("07-dopamine-dosing", "7. Dopamine dosing thresholds", "Objective 7. Slides 40, 41, 46.", [
      C("Three dopamine dose ranges",
        tbl(["Dose", "Receptor", "Effect"], [
          ["<strong>Low: < 3 mcg/kg/min</strong>", "Dopaminergic", "<strong>Arterial vasodilation</strong>; <strong>↑ renal blood flow and urine output</strong>"],
          ["<strong>Intermediate: 3–10 mcg/kg/min</strong>", "Mixed dopaminergic + <strong>β1</strong>", "<strong>↑ SA node stimulation</strong> (rate), <strong>↑ contractility and cardiac output</strong>"],
          ["<strong>High: > 10 mcg/kg/min</strong>", "<strong>α1</strong>", "<strong>Peripheral vasoconstriction</strong>, including the <strong>kidneys</strong>: <strong>renal necrosis and failure</strong>"]]) +
        mn("<strong>Renal, Rate, Restrict</strong> at <strong>3 and 10</strong>: under 3 = renal, 3–10 = rate and pump (β1), over 10 = restrict (α1 squeeze).") +
        note("Slide 40 splits dopamine at 10 mcg/kg/min only (vasodilation below, constriction above). Slide 46 gives the three tiers used here. The table on slide 41 uses 5 (intermediate) and 15 (high) as examples."),
        ["dopa-low-dose", "dopa-intermediate-dose", "dopa-high-dose", "dopa-high-renal-failure", "dopa-thresholds-3-10"],
        [q("What does low-dose dopamine (under 3 mcg/kg/min) do?", "Arterial vasodilation with increased renal blood flow and urine output", ["Strong vasoconstriction", "Bradycardia", "Renal failure"], "Under 3, dopaminergic effects dilate renal vessels."),
          q("What dose range of dopamine gives mixed dopaminergic and beta-1 effects?", "3 to 10 mcg/kg/min", ["Under 1 mcg/kg/min", "Over 20 mcg/kg/min only", "Exactly 50 mcg/kg/min"], "3-10 adds beta-1 effects."),
          q("Which receptor dominates at dopamine doses over 10 mcg/kg/min?", "Alpha-1", ["Beta-2", "Dopaminergic", "Muscarinic"], "Over 10, alpha-1 dominates."),
          q("What renal harm can high-dose dopamine cause?", "Renal vasoconstriction leading to renal necrosis and failure", ["Increased renal blood flow", "Kidney stones", "Polyuria"], "High-dose alpha constriction can starve the kidneys. (Slide 46)"),
          q("Intermediate-dose dopamine improves cardiac output through which receptor?", "Beta-1", ["Alpha-1", "Beta-2", "Alpha-2"], "Beta-1 raises output at intermediate doses."),
          q("What are the two dopamine dosing thresholds?", "3 and 10 mcg/kg/min", ["1 and 100 mcg/kg/min", "5 and 50 mcg/kg/min", "0.5 and 2 mcg/kg/min"], "Under 3, 3 to 10, over 10."),
          q("Which dopamine dose range increases SA node stimulation?", "Intermediate, 3 to 10 mcg/kg/min", ["Low, under 3", "None", "Only above 50"], "Beta-1 at 3-10 speeds the SA node."),
          q("In the deck's table, which dopamine dose is labeled high dose with vasoconstriction?", "15 mcg/kg/min", ["1 mcg/kg/min", "5 mcg/kg/min", "2 mcg/kg/min"], "15 mcg/kg/min is labeled high dose (vasoconstriction). (Slide 41)")],
        [q("A patient on dopamine 2 mcg/kg/min has a rise in urine output. Why?", "Low-dose dopaminergic renal vasodilation", ["Alpha-1 vasoconstriction", "Beta-2 bronchodilation", "ADH release"], "Under 3, dopamine dilates renal vessels and raises urine output."),
          q("Dopamine runs at 7 mcg/kg/min. Main effect?", "Increased heart rate and contractility from beta-1 (with dopaminergic effects)", ["Pure renal vasodilation", "Pure alpha vasoconstriction", "No effect"], "At 3-10, beta-1 raises HR and contractility."),
          q("Dopamine is titrated to 18 mcg/kg/min and urine output falls. Why?", "High-dose alpha-1 vasoconstriction of the kidneys", ["Low-dose renal dilation", "Beta-2 effects", "Fluid overload"], "Over 10, alpha constriction cuts kidney flow."),
          q("Dopamine runs at 12 mcg/kg/min. Which effect dominates?", "Peripheral vasoconstriction (alpha-1)", ["Renal vasodilation", "Pure beta-2 effect", "Bradycardia"], "Over 10, alpha-1 vasoconstriction dominates.")])
    ]),

    /* ---------- 8a ---------- */
    S("08a-foley-central-art-line", "8a. Devices: Foley, central line and arterial line", "Objective 8. Slides 51, 53–57.", [
      C("Foley catheter and central line (CVP)",
        tbl(["Device", "Where placed", "Used for"], [
          ["<strong>Foley catheter</strong>", "ED or ICU", "Accurate <strong>urine output</strong> = perfusion status. Goal <strong>> 0.5 mL/kg/hr</strong> (about 35 mL/hr)"],
          ["<strong>Central venous line</strong>", "ED or ICU", "Monitor <strong>central venous pressure</strong>; give <strong>vasopressors and fluids</strong>"]]) +
        "<p><strong>Why a central line for pressors</strong>: peripheral IVs should not carry <strong>continuous vasopressors</strong>, because <strong>extravasation</strong> causes <strong>venous sclerosis and tissue necrosis</strong>. Beyond emergency care, pressors must go through a central line.</p>" +
        "<p><strong>CVP</strong> = pressure in the <strong>vena cava</strong>; an estimate of <strong>preload and right atrial pressure</strong>. Most accurate with the catheter in the <strong>internal jugular</strong> at the <strong>top of the SVC</strong>. <strong>Normal 8–12 mmHg</strong>.</p>" +
        note("Slide 55 says \"right arterial pressure\"; it means right atrial pressure. Slide 53 gives 35 mL/hr for a 75 kg adult and slide 61 for a 70 kg adult; 0.5 mL/kg/hr is the number to know."),
        ["foley-urine-output", "foley-goal", "central-line-uses", "central-line-extravasation", "cvp-definition", "cvp-normal", "cvp-ij-svc"],
        [q("What does a Foley catheter measure in shock?", "Urine output, reflecting perfusion", ["Central venous pressure", "Arterial blood gases", "Cardiac output"], "Urine output reflects kidney perfusion. (Slide 53)"),
          q("What is the urine output goal with a Foley in shock?", "More than 0.5 mL/kg/hr", ["More than 5 mL/kg/hr", "Less than 0.1 mL/kg/hr", "Exactly 100 mL/hr for everyone"], "Aim for over 0.5 mL/kg/hr."),
          q("What is a normal CVP in the deck?", "8 to 12 mmHg", ["0 to 2 mmHg", "20 to 30 mmHg", "65 to 90 mmHg"], "Normal CVP is 8 to 12. (Slide 55)"),
          q("What does CVP estimate?", "Preload and right atrial pressure", ["Left ventricular afterload only", "Arterial oxygen content", "Intracranial pressure"], "CVP estimates right atrial pressure and preload. (Slide 55)"),
          q("Where is CVP most accurately measured?", "Internal jugular catheter at the top of the superior vena cava", ["Radial artery", "Femoral vein below the knee", "Bladder"], "An IJ catheter tip at the top of the SVC is most accurate."),
          q("Why should continuous vasopressors not run through a peripheral IV long term?", "Extravasation can cause venous sclerosis and tissue necrosis", ["They do not work peripherally", "They cause hypoglycemia", "They clot the IV instantly"], "Leaking pressors cause sclerosis and tissue necrosis. (Slide 54)"),
          q("What is a central line used for in shock?", "Monitoring CVP and giving vasopressors and fluids", ["Measuring urine output", "Measuring arterial blood gases only", "Pacing"], "A central line measures CVP and safely gives pressors and fluids. (Slide 51)"),
          q("Where are the Foley and central line placed per the deck?", "ED or ICU", ["Only the OR", "Only the cath lab", "Only the outpatient clinic"], "They're placed in the ED or ICU. (Slide 51)")],
        [q("An 80 kg patient in shock has made 25 mL of urine in the last hour. Goal met?", "No, the goal is at least 40 mL/hr (0.5 mL/kg/hr)", ["Yes, any urine is fine", "Yes, the goal is 10 mL/hr", "Cannot tell without a CVP"], "0.5 x 80 = 40."),
          q("A patient's peripheral IV running norepinephrine has infiltrated, and the forearm is pale and cold. Risk?", "Tissue necrosis from vasopressor extravasation", ["None", "Hypoglycemia", "Bradycardia"], "Leaked pressor can cause tissue necrosis."),
          q("A shock patient's CVP is 3 mmHg. What does that suggest?", "Low preload (below the normal 8 to 12)", ["Fluid overload", "Normal CVP", "Tamponade"], "CVP 3 is low, so preload is low.")]),
      C("Arterial line and MAP",
        "<p><strong>Arterial line</strong>: placed in the ED or ICU, most often the <strong>radial artery</strong> (also brachial, dorsalis pedis, femoral, axillary). It gives <strong>continuous arterial BP</strong> (more accurate than a cuff) and <strong>blood samples for ABGs</strong>.</p>" +
        "<p><strong>MAP</strong> = average arterial pressure over one cardiac cycle. A <strong>better indicator of vital organ perfusion than SBP</strong>. Most accurate by <strong>continuous arterial line</strong>. <strong>Normal 65–90 mmHg</strong>.</p>" +
        hy("Art line = <strong>pressures + ABGs</strong>. <strong>MAP ≥ 65</strong> is the resuscitation target.") +
        note("MAP is about diastolic + one third of the pulse pressure (standard teaching): BP 90/60 gives a MAP of 70."),
        ["art-line-sites", "art-line-uses", "map-definition", "map-better-than-sbp", "map-normal"],
        [q("What is the most common site for an arterial line?", "Radial artery", ["Carotid artery", "Pulmonary artery", "Subclavian vein"], "The radial artery is the usual art line site. (Slide 56)"),
          q("What two things does an arterial line provide?", "Continuous arterial pressure and ABG sampling", ["Urine output and CVP", "Cardiac pacing and defibrillation", "Oxygen delivery and suction"], "An art line gives continuous BP and ABG access. (Slide 56)"),
          q("What is a normal MAP in the deck?", "65 to 90 mmHg", ["8 to 12 mmHg", "120 to 140 mmHg", "30 to 40 mmHg"], "Normal MAP is 65 to 90. (Slide 57)"),
          q("Why is MAP preferred over SBP in shock?", "It is a better indicator of perfusion to vital organs", ["It is always higher", "It needs no equipment", "It measures urine output"], "MAP reflects organ perfusion better than SBP. (Slide 57)"),
          q("How is MAP most accurately measured?", "Continuously by arterial line", ["By cuff once a day", "By Foley", "By pulse oximeter"], "An art line measures MAP continuously."),
          q("What does MAP represent?", "Average arterial pressure during one cardiac cycle", ["The peak pressure in systole", "Pressure in the vena cava", "Pressure in the bladder"], "MAP is the average pressure across one cardiac cycle.")],
        [q("A shock patient's MAP on the art line is 58. Goal met?", "No, the goal is MAP of 65 or higher", ["Yes, any MAP over 50 is fine", "Yes, MAP should be under 60", "Only SBP matters"], "MAP goal is 65 or higher."),
          q("A team wants beat-to-beat BP and frequent ABGs on a patient on pressors. Which device?", "Arterial line", ["Foley catheter", "Peripheral IV", "Nasogastric tube"], "An art line gives beat-to-beat BP and easy ABGs."),
          q("A patient's BP is 90/60. Estimate the MAP.", "About 70 mmHg", ["About 150 mmHg", "About 30 mmHg", "About 90 mmHg"], "60 + 30/3 = 70.")])
    ]),

    /* ---------- 8b ---------- */
    S("08b-iabp-swan-lvad", "8b. Devices: IABP, Swan-Ganz and LVAD", "Objective 8. Slides 52, 58–60.", [
      C("Intra-aortic balloon pump",
        tbl(["", "IABP"], [
          ["Where placed", "<strong>Cath lab</strong>"],
          ["What", "<strong>10-inch balloon</strong> in the <strong>descending aorta</strong>, pumping in synchrony with the heart"],
          ["Does", "<strong>↓ Afterload</strong> and myocardial O2 demand; <strong>↑ coronary</strong> and systemic perfusion"],
          ["Timing", "<strong>Inflates in diastole</strong>, <strong>deflates just before systole</strong>"]]) +
        hy("<strong>Inflate in diastole</strong> pushes blood back into the coronaries (they fill in diastole). <strong>Deflate before systole</strong> leaves a low-pressure space, so the LV ejects against <strong>less afterload</strong>."),
        ["iabp-cath-lab", "iabp-descending-aorta", "iabp-afterload-coronary", "iabp-timing"],
        [q("Where is an intra-aortic balloon pump placed?", "In the descending aorta, in the cath lab", ["In the left ventricle, in the ED", "In the pulmonary artery, at the bedside", "In the vena cava, in clinic"], "The IABP sits in the descending aorta and is placed in the cath lab. (Slide 52, 58)"),
          q("When does the IABP balloon inflate?", "During ventricular diastole", ["During ventricular systole", "Randomly", "Only during cardiac arrest"], "Inflating in diastole pushes blood into the coronaries."),
          q("When does the IABP balloon deflate?", "Just before ventricular systole", ["In mid-diastole", "After systole ends", "Never"], "Deflating before systole drops afterload."),
          q("What two main effects does an IABP have?", "Decreases afterload and increases coronary perfusion", ["Increases afterload and decreases coronary perfusion", "Raises heart rate and preload", "Removes fluid"], "IABP lowers afterload and boosts coronary perfusion. (Slide 52)"),
          q("How long is the IABP balloon?", "About 10 inches", ["About 1 inch", "About 3 feet", "About 1 cm"], "The balloon is about 10 inches long. (Slide 58)"),
          q("What does an IABP do to myocardial oxygen demand?", "Decreases it", ["Increases it", "No effect", "Doubles it"], "Less afterload means less work and O2 demand.")],
        [q("A cardiogenic shock patient in the cath lab needs mechanical afterload reduction and better coronary flow. Device?", "Intra-aortic balloon pump", ["Foley catheter", "Arterial line", "Peripheral IV"], "The IABP lowers afterload and boosts coronary flow."),
          q("Why does diastolic inflation of an IABP help the coronaries?", "Coronaries fill in diastole, so inflation pushes blood into them", ["Coronaries fill in systole", "It blocks the coronaries", "It lowers coronary pressure"], "Coronaries fill in diastole, so inflating then pushes blood into them.")]),
      C("Swan-Ganz catheter and LVAD",
        tbl(["Device", "Where placed", "What it does"], [
          ["<strong>Pulmonary artery catheter (Swan-Ganz)</strong>", "<strong>ICU, CCU or cath lab</strong>; usually via the <strong>right jugular vein</strong> into the pulmonary artery", "Measures <strong>PA pressure, pulmonary capillary wedge pressure, cardiac output, mixed venous O2 saturation</strong>"],
          ["<strong>LVAD</strong>", "<strong>OR or cath lab</strong>", "Pumps blood from the <strong>LV or LA to the aorta</strong>; <strong>short-term stabilization</strong> of critically ill patients, <strong>not a long-term solution</strong> (in this deck)"]]) +
        note("Slide 52 calls the Swan-Ganz oxygen number \"ScVO2\". A PA catheter measures mixed venous saturation (SvO2); ScvO2 is the central line version.") +
        hy("<strong>Swan-Ganz = numbers</strong> (wedge, CO, SvO2). <strong>IABP and LVAD = mechanical support</strong>."),
        ["swan-placement", "swan-measurements", "lvad-placement", "lvad-flow", "lvad-short-term"],
        [q("What does a Swan-Ganz catheter measure?", "PA pressure, wedge pressure, cardiac output and mixed venous saturation", ["Urine output and creatinine", "Only heart rate", "Intracranial pressure"], "A Swan-Ganz measures PA and wedge pressures, CO and SvO2. (Slide 59)"),
          q("Through which vein is a Swan-Ganz usually placed?", "Right jugular vein", ["Left femoral artery", "Radial artery", "Saphenous vein"], "It's usually placed through the right IJ. (Slide 59)"),
          q("Where is a Swan-Ganz catheter placed per the deck?", "ICU, CCU or cath lab", ["Outpatient clinic", "Patient's home", "Only the OR"], "Swan-Ganz catheters are placed in the ICU, CCU or cath lab. (Slide 52)"),
          q("What does an LVAD do?", "Pumps blood from the LV or LA to the aorta", ["Pumps blood from the aorta to the LV", "Drains urine", "Measures CVP"], "An LVAD pulls blood from the LV (or LA) and pumps it into the aorta. (Slide 60)"),
          q("Per the deck, what is an LVAD used for in shock?", "Short-term stabilization, not a long-term solution", ["A permanent cure", "Measuring wedge pressure", "Giving pressors"], "In shock, an LVAD buys time; it's a short-term bridge here. (Slide 60)"),
          q("Where is an LVAD placed?", "OR or cath lab", ["ED triage", "Clinic", "Ambulance"], "LVADs go in in the OR or cath lab. (Slide 52)"),
          q("Into which vessel does a Swan-Ganz catheter end?", "Pulmonary artery", ["Aorta", "Carotid artery", "Renal vein"], "The Swan-Ganz tip floats into the pulmonary artery.")],
        [q("The ICU team needs wedge pressure and cardiac output to sort out the cause of shock. Device?", "Pulmonary artery (Swan-Ganz) catheter", ["Foley catheter", "Arterial line only", "LVAD"], "Only a Swan-Ganz measures wedge pressure and CO."),
          q("A patient with refractory cardiogenic shock needs a pump to move blood from the LV to the aorta to stabilize. Device?", "Left ventricular assist device", ["Swan-Ganz catheter", "Foley catheter", "Central line"], "An LVAD pumps from the LV to the aorta.")])
    ]),

    /* ---------- 9 ---------- */
    S("09-goals-of-resuscitation", "9. Goals of resuscitation in shock", "Objective 9. Slides 61–62, 112.", [
      C("The five targets",
        tbl(["Target", "Goal"], [
          ["<strong>Urine output</strong>", "<strong>> 0.5 mL/kg/hr</strong> (35 mL/hr for a 70 kg adult)"],
          ["<strong>CVP</strong>", "<strong>≥ 8 mmHg</strong>"],
          ["<strong>MAP</strong>", "<strong>≥ 65 mmHg</strong>"],
          ["<strong>SBP</strong>", "<strong>≥ 90 mmHg</strong>"],
          ["<strong>SpO2</strong>", "<strong>≥ 92%</strong>"]]) +
        mn("<strong>Half, 8, 65, 90, 92</strong>: urine 0.5, CVP 8, MAP 65, SBP 90, SpO2 92."),
        ["goal-urine", "goal-cvp", "goal-map", "goal-sbp", "goal-spo2"],
        [q("What is the urine output goal of resuscitation?", "More than 0.5 mL/kg/hr", ["More than 2 mL/kg/hr", "More than 0.1 mL/kg/hr", "Less than 0.5 mL/kg/hr"], "Urine over 0.5 mL/kg/hr shows the kidneys are perfused. (Slide 61)"),
          q("What is the CVP goal of resuscitation?", "8 mmHg or more", ["2 mmHg or more", "20 mmHg or more", "Under 4 mmHg"], "CVP 8 or more shows adequate filling. (Slide 61)"),
          q("What is the MAP goal of resuscitation?", "65 mmHg or more", ["50 mmHg or more", "100 mmHg or more", "Under 60 mmHg"], "MAP 65 or more perfuses the organs. (Slide 61)"),
          q("What is the SBP goal of resuscitation?", "90 mmHg or more", ["70 mmHg or more", "140 mmHg or more", "Under 90 mmHg"], "SBP goal is 90 or more. (Slide 61)"),
          q("What is the SpO2 goal of resuscitation?", "92% or more", ["80% or more", "100% only", "88% or less"], "SpO2 goal is 92% or more. (Slide 61)"),
          q("For a 70 kg adult, what hourly urine output meets the goal?", "More than 35 mL/hr", ["More than 7 mL/hr", "More than 350 mL/hr", "More than 3.5 mL/hr"], "0.5 × 70 kg = 35 mL/hr, so more than that.")],
        [q("A resuscitated patient has MAP 68, SBP 96, CVP 9, urine 45 mL/hr (70 kg), SpO2 90%. Which goal is not met?", "SpO2 (goal 92% or more)", ["MAP", "CVP", "Urine output"], "SpO2 90% is below the 92% goal."),
          q("A 60 kg patient in septic shock: MAP 63, SBP 92, CVP 10, urine 40 mL/hr, SpO2 95%. Which goal is not met?", "MAP (goal 65 or more)", ["SBP", "Urine output", "CVP"], "MAP 63 is below the 65 goal."),
          q("A 100 kg patient makes 40 mL of urine per hour. Goal met?", "No, the goal is more than 50 mL/hr", ["Yes, 40 is always enough", "Yes, the goal is 10 mL/hr", "Only CVP matters"], "0.5 x 100 = 50.")]),
      C("Clinical synthesis: assess, act, reassess",
        "<p><strong>Treat the physiology, not the blood pressure alone.</strong></p>" +
        tbl(["Step", "Ask"], [
          ["<strong>1. Assess</strong>", "Is perfusion impaired? (<strong>MAP trend, mentation, capillary refill, urine output, lactate trend</strong>). What mechanism fits? (<strong>volume loss, pump failure, vasodilation, obstruction</strong>). Is fluid tolerance limited? (<strong>JVP, crackles/O2 need, focused echo or POCUS</strong>)"],
          ["<strong>2. Act</strong>", "Nonhemorrhagic volume loss → <strong>reassessed isotonic crystalloid</strong>. Active hemorrhage → <strong>bleeding control + blood products</strong>. Pump failure with congestion → <strong>treat cause; support output/pressure</strong>. Vasodilatory → <strong>treat cause; fluids/pressor as indicated</strong>. Obstructive → <strong>urgently relieve the obstruction</strong>"],
          ["<strong>3. Reassess</strong>", "Perfusion improving? Congestion emerging (work of breathing, O2 need, JVP, lungs, POCUS)? If the response is poor: <strong>recheck the phenotype, fluid responsiveness, source control and need to escalate</strong>"]]) +
        hy("Always reassess <strong>both perfusion AND congestion</strong> after each intervention."),
        ["synth-treat-physiology", "synth-assess", "synth-act-by-type", "synth-reassess", "synth-poor-response"],
        [q("What is the central message of the clinical synthesis slide?", "Treat the physiology, not the blood pressure alone", ["Treat the BP number only", "Always give 3 L of fluid", "Pressors before diagnosis always"], "Fix the cause of poor perfusion, not just the BP number. (Slide 62)"),
          q("What is the treatment for obstructive shock in the synthesis?", "Urgently relieve the obstruction", ["Large fluid boluses only", "Beta blockers", "Watchful waiting"], "Obstructive shock only improves when the blockage is relieved."),
          q("What is the treatment for active hemorrhage in the synthesis?", "Bleeding control plus blood products", ["Crystalloid only, unlimited", "Pressors only", "Diuretics"], "Bleeding needs blood and stopping the source, not just saline."),
          q("What is the treatment for nonhemorrhagic volume loss in the synthesis?", "Reassessed isotonic crystalloid", ["Hypertonic saline", "Blood products", "Pressors alone"], "Non-bleeding volume loss gets isotonic crystalloid with reassessment."),
          q("After each intervention, what two things are reassessed?", "Perfusion and congestion", ["Weight and height", "Temperature and glucose only", "Only blood pressure"], "Reassess perfusion and congestion after every intervention."),
          q("Which tool does the synthesis list to judge fluid tolerance?", "Focused echo or POCUS, plus JVP and crackles", ["Urine culture", "Head CT", "Lipid panel"], "POCUS, JVP and crackles show whether more fluid is tolerated.")],
        [q("After a 500 cc bolus, a patient's BP rises but she now has crackles and a higher O2 need. What does the synthesis say?", "Congestion is emerging; stop fluids and reassess the phenotype", ["Give another 2 L", "Ignore the lungs", "Start a beta blocker"], "New crackles and O2 need mean fluid overload; stop and reassess."),
          q("A patient in shock is not responding to fluids and a pressor. Next step per the synthesis?", "Recheck the phenotype, fluid responsiveness, source control and need to escalate", ["Keep the same plan and wait", "Stop all monitoring", "Discharge"], "Recheck the type of shock, fluid response, source and need to escalate."),
          q("A patient with tension pneumothorax is hypotensive. Synthesis action?", "Urgently relieve the obstruction (decompress)", ["Fluids and wait", "Dobutamine", "Blood transfusion only"], "Decompress the tension pneumo to relieve the obstruction.")])
    ]),

    /* ---------- 10 ---------- */
    S("10-fluid-compartments", "10. Body fluid distribution and compartments", "Objective 10. Slides 64–73.", [
      C("Compartments and volumes",
        "<p>Fluid resuscitation helps the body keep <strong>organ perfusion and oxygenation</strong>. Restoring perfusion often corrects the electrolyte and acid-base imbalance too.</p>" +
        "<p><strong>60% of adult body weight is water</strong>, in two main compartments:</p>" +
        tbl(["Compartment", "Volume", "Key points"], [
          ["<strong>Intracellular</strong>", "<strong>28 L</strong> (about <strong>40%</strong> of body weight)", "Inside cell membranes"],
          ["<strong>Extracellular: interstitial</strong>", "<strong>10 L</strong> (about <strong>14%</strong>)", "Bathes the cells; made by the <strong>systolic force pushing water out of capillaries</strong>; returned by <strong>lymphatics</strong>; excess = <strong>edema</strong>"],
          ["<strong>Extracellular: intravascular</strong>", "<strong>5 L of blood</strong>", "Plasma, platelets, RBCs. <strong>RBCs, platelets and plasma proteins cannot cross capillary walls</strong>"],
          ["<strong>Extracellular: transcellular</strong>", "Minor", "Specialized fluids: CSF, synovial, peritoneal, ocular"]]) +
        mn("<strong>60-40-20</strong>: 60% of weight is water, 40% inside cells, about 20% outside (14% interstitial + plasma)."),
        ["fluid-purpose", "tbw-60", "icf-28-40", "isf-10-14", "isf-made-lymph", "ivs-5-liters", "ivs-cannot-cross"],
        [q("What percentage of adult body weight is water?", "60%", ["20%", "40%", "80%"], "About 60% of adult body weight is water. (Slide 65)"),
          q("How much intracellular fluid does the average person have?", "28 L, about 40% of body weight", ["5 L, about 7%", "10 L, about 14%", "50 L, about 70%"], "Intracellular fluid is about 28 L (40% of weight). (Slide 67)"),
          q("How much interstitial fluid does the average person have?", "10 L, about 14% of body weight", ["28 L", "1 L", "5 L"], "Interstitial fluid is about 10 L (14%). (Slide 68)"),
          q("How much blood is in the intravascular space?", "5 L", ["1 L", "10 L", "28 L"], "About 5 L is blood in the vessels. (Slide 70)"),
          q("How is interstitial fluid made?", "The systolic force of the heart pushes water out of the capillaries", ["It is secreted by the liver", "It leaks out of cells", "It is swallowed"], "The heart's pressure pushes water out of capillaries into the interstitium. (Slide 69)"),
          q("How is interstitial fluid returned to the intravascular space?", "Through the lymphatic system", ["Through the urine", "Through the skin", "Through the bile ducts"], "Lymphatics return interstitial fluid to the blood."),
          q("What happens when excess fluid builds up in the interstitial space?", "Edema", ["Dehydration", "Polycythemia", "Hypernatremia"], "Too much interstitial fluid = edema."),
          q("Which components of blood cannot cross capillary walls?", "RBCs, platelets and plasma proteins", ["Water and sodium", "Glucose and urea", "Oxygen and CO2"], "Cells and proteins are too big to cross capillary walls. (Slide 70)"),
          q("What are the two main body fluid compartments?", "Intracellular and extracellular", ["Arterial and venous", "Cerebral and spinal", "Pleural and peritoneal"], "Fluid is intracellular or extracellular. (Slide 65)")],
        [q("A 70 kg man: about how much total body water does he have?", "About 42 L (60%)", ["About 14 L", "About 70 L", "About 5 L"], "0.6 × 70 = 42 L."),
          q("A patient with heart failure has pitting leg edema. Which compartment holds the extra fluid?", "Interstitial", ["Intracellular", "Intravascular only", "CSF"], "Edema is interstitial fluid."),
          q("Why don't albumin and RBCs leave the vessels in a healthy person?", "They cannot pass through capillary walls", ["They dissolve in plasma", "The lymphatics pull them out", "They are pumped out by the kidneys"], "Albumin and RBCs are too large to cross intact capillaries.")]),
      C("Transcellular space and third spacing",
        "<p><strong>Transcellular</strong> compartments hold fluid that is <strong>not readily available</strong> to support hemodynamics or fix electrolytes: <strong>pleural, peritoneal, pericardial, CSF, joint spaces, GI tract</strong>.</p>" +
        "<p><strong>Third spacing</strong> = abnormal redistribution of extracellular fluid into tissues or body cavities (picture: <strong>ascites</strong> in the peritoneal cavity).</p>" +
        hy("A patient can have <strong>too much total body fluid</strong> and at the same time <strong>too little circulating volume</strong> and poor perfusion."),
        ["transcellular-spaces", "transcellular-not-available", "third-spacing-definition", "third-spacing-paradox"],
        [q("What is third spacing?", "Abnormal redistribution of extracellular fluid into tissues or body cavities", ["Loss of fluid in the urine", "Fluid moving into cells", "Blood loss from a wound"], "Third spacing is fluid shifting into tissues or cavities where it can't circulate. (Slide 72)"),
          q("Which is NOT a transcellular space in the deck?", "Intravascular space", ["Pleural space", "Peritoneal space", "Joint spaces"], "Intravascular is a main compartment; transcellular means cavities like peritoneum. (Slide 71)"),
          q("Why is transcellular fluid not helpful in shock?", "It is not readily available to maintain hemodynamics or correct electrolytes", ["It is all blood", "It is inside cells", "It is immediately absorbed"], "Fluid trapped in cavities can't support BP or fix electrolytes."),
          q("What is the key clinical paradox of third spacing?", "Excess total body fluid with inadequate circulating volume", ["Low total fluid with high circulating volume", "No change in perfusion", "It always causes hypertension"], "Third spacing: too much total fluid but too little in the vessels. (Slide 72)"),
          q("Ascites is fluid in which transcellular space?", "Peritoneal cavity", ["Pleural space", "Pericardial space", "CSF space"], "Ascites is fluid in the peritoneal cavity. (Slide 73)")],
        [q("A cirrhotic patient has tense ascites and leg edema but is hypotensive with low urine output. Explanation?", "Third spacing: excess body fluid but low circulating volume", ["Fluid overload means no hypovolemia", "Septic shock only", "Too much intravascular volume"], "Fluid sits in the abdomen and tissues, not the vessels: third spacing."),
          q("A burn patient is swollen everywhere yet tachycardic and hypotensive. Why?", "Fluid has third spaced out of the vessels, leaving low circulating volume", ["Volume overload causes hypotension", "The burn raised the BP", "Edema means euvolemia"], "Burns make capillaries leak, so fluid leaves the vessels.")])
    ]),

    /* ---------- 11a ---------- */
    S("11a-electrolytes-forces", "11a. Forces on fluid: electrolytes, diffusion, osmosis, pressures", "Objective 11. Slides 70, 74–79.", [
      C("Electrolytes and where they live",
        "<ul><li><strong>Electrolytes</strong> dissociate in solution into ions: <strong>cations (+)</strong> and <strong>anions (−)</strong></li>" +
        "<li><strong>Monovalent</strong>: one charge (K+). <strong>Divalent</strong>: two charges (Ca2+, Mg2+)</li>" +
        "<li><strong>Non-electrolytes</strong> do not dissociate: <strong>glucose</strong> and <strong>BUN</strong></li>" +
        "<li>Body fluids hold <strong>equal amounts of cations and anions</strong>; ions can be <strong>exchanged for ones with the same charge</strong>: <strong>H+ for K+</strong>, <strong>HCO3− for Cl−</strong></li></ul>" +
        tbl(["Compartment", "Large amounts", "Moderate", "Small"], [
          ["<strong>Intracellular</strong>", "<strong>Potassium</strong>", "<strong>Magnesium, phosphorus</strong> (plus protein anions)", ""],
          ["<strong>Extracellular</strong>", "<strong>Sodium, chloride</strong>", "<strong>Bicarbonate</strong>", "<strong>Calcium</strong>"]]) +
        mn("<strong>K is the King inside; Na and Cl hang out outside</strong>.") +
        note("Slide 74 calls divalent ions those carrying \"a positive and negative charge\". Divalent means a charge of 2 (Ca2+, Mg2+)."),
        ["lytes-definition", "lytes-valence", "lytes-nonelectrolytes", "lytes-electroneutral-exchange", "lytes-icf", "lytes-ecf"],
        [q("What is the major intracellular electrolyte?", "Potassium", ["Sodium", "Chloride", "Calcium"], "Potassium is the main intracellular ion. (Slide 76)"),
          q("What are the major extracellular electrolytes?", "Sodium and chloride", ["Potassium and magnesium", "Phosphorus and protein", "Calcium only"], "Sodium and chloride dominate outside cells. (Slide 76)"),
          q("Which electrolytes are found in moderate amounts inside cells?", "Magnesium and phosphorus", ["Sodium and chloride", "Bicarbonate", "Calcium"], "Magnesium and phosphorus are moderate inside cells. (Slide 76)"),
          q("Which are non-electrolyte particles?", "Glucose and BUN", ["Sodium and potassium", "Chloride and bicarbonate", "Calcium and magnesium"], "Glucose and BUN are particles without a charge. (Slide 74)"),
          q("Which ion can be exchanged for K+?", "H+", ["Cl-", "HCO3-", "Ca2+"], "H+ and K+ are both +1, so they swap across cells."),
          q("Which ion can be exchanged for Cl-?", "HCO3-", ["K+", "Na+", "H+"], "HCO3- and Cl- are both -1, so they swap."),
          q("What does divalent mean?", "An ion carrying a charge of 2, like Ca2+ or Mg2+", ["An ion with one charge", "A particle with no charge", "A molecule that does not dissociate"], "Divalent ions carry a charge of 2."),
          q("Calcium is found in what amount in extracellular fluid?", "Small amounts", ["Large amounts", "None", "The largest amount of any ion"], "Calcium is present in small amounts outside cells. (Slide 76)"),
          q("Bicarbonate is found in what amount in extracellular fluid?", "Moderate amounts", ["Large amounts", "None", "Only intracellularly"], "Bicarbonate is moderate in ECF. (Slide 76)")],
        [q("A patient's cells are damaged by crush injury and release their contents. Which electrolyte rises most in the serum?", "Potassium", ["Sodium", "Chloride", "Bicarbonate"], "Crushed cells spill their potassium."),
          q("In acidosis, H+ moves into cells. Which ion moves out to keep charges balanced?", "K+", ["Cl-", "HCO3-", "Glucose"], "H+ in, K+ out to balance charge, so K rises in acidosis.")]),
      C("Diffusion, osmosis, hydrostatic and osmotic pressure",
        tbl(["Force", "What moves", "Direction"], [
          ["<strong>Diffusion</strong>", "<strong>Particles</strong> (charged or not)", "<strong>High → low concentration</strong>"],
          ["<strong>Osmosis</strong>", "<strong>Water</strong> across a semipermeable membrane", "From <strong>more water (fewer solutes)</strong> to <strong>less water (more solutes)</strong>; this creates <strong>osmotic pressure</strong>"],
          ["<strong>Hydrostatic pressure</strong>", "Fluid out of vessels", "The <strong>pushing</strong> force"],
          ["<strong>Osmotic (oncotic) pressure</strong>", "Fluid into vessels", "The <strong>pulling</strong> force"]]) +
        "<p>Intravascular volume is regulated by <strong>osmotic gradients, hydrostatic gradients and the kidneys</strong>. Despite different solutes inside and outside cells, the <strong>total concentration gradient is the same</strong> in both compartments because water moves osmotically.</p>" +
        mn("<strong>Hydrostatic pushes, oncotic pulls</strong>. <strong>Water follows solute</strong>."),
        ["diffusion", "osmosis", "osmotic-pressure", "hydrostatic-push", "oncotic-pull", "ivs-regulation", "gradient-equal"],
        [q("What is diffusion?", "Movement of particles from high to low concentration", ["Movement of water only across a membrane", "Movement against a gradient using ATP", "Movement of cells"], "Diffusion moves particles from high to low concentration. (Slide 78)"),
          q("What is osmosis?", "Movement of water across a semipermeable membrane", ["Movement of sodium through channels", "Movement of proteins out of vessels", "Movement of blood cells"], "Osmosis moves water across a membrane. (Slide 79)"),
          q("Water moves by osmosis toward which side?", "The side with more solute particles", ["The side with fewer solute particles", "Always into cells", "Always out of cells"], "Water moves toward more solute."),
          q("Which force pushes fluid out of the vessels?", "Hydrostatic pressure", ["Osmotic pressure", "Oncotic pull", "Lymphatic flow"], "Hydrostatic pressure pushes fluid out."),
          q("Which force pulls fluid into the vessels?", "Osmotic (oncotic) pressure", ["Hydrostatic pressure", "Gravity", "Systolic pressure"], "Oncotic pressure from proteins pulls fluid in."),
          q("Which three things regulate intravascular volume?", "Osmotic gradients, hydrostatic gradients and the kidneys", ["The liver, spleen and skin", "Only the lungs", "Only the lymphatics"], "Osmotic and hydrostatic gradients plus the kidneys control volume. (Slide 70)"),
          q("What pressure is generated when water crosses a semipermeable membrane?", "Osmotic pressure", ["Hydrostatic pressure", "Atmospheric pressure", "Pulse pressure"], "Water crossing a membrane generates osmotic pressure. (Slide 79)")],
        [q("A cirrhotic patient with very low albumin develops edema. Which force is reduced?", "Oncotic (osmotic) pulling pressure", ["Hydrostatic pushing pressure", "Lymphatic flow increases", "Diffusion of glucose"], "Low albumin lowers oncotic pull."),
          q("A heart failure patient has high venous pressures and leg edema. Which force is increased?", "Hydrostatic pushing pressure", ["Oncotic pulling pressure", "Osmolal gap", "ADH suppression"], "High venous pressure increases hydrostatic push.")])
    ]),

    /* ---------- 11b ---------- */
    S("11b-osmolality-tonicity", "11b. Forces on fluid: osmolality, osmolal gap and tonicity", "Objective 11. Slides 80–84.", [
      C("Osmolarity, osmolality and the osmolal gap",
        tbl(["Term", "Meaning"], [
          ["<strong>Osmolarity</strong>", "Osmoles per <strong>1 L of solution</strong>"],
          ["<strong>Osmolality</strong>", "Osmoles per <strong>1 kg of solvent</strong>"],
          ["What sets serum osmolality", "<strong>90–95% NaCl and NaHCO3</strong>; <strong>5% glucose and BUN</strong>"],
          ["<strong>Calculated osmolality</strong>", "<strong>2[Na+] + glucose/18 + BUN/2.8</strong>; normal <strong>275–295 mosmol/kg</strong>"],
          ["<strong>Osmolal gap</strong>", "<strong>Measured − calculated</strong>; normal <strong>< 10 mosmol/kg</strong>. More than 10 means <strong>unmeasured abnormal solutes</strong> that affect fluid balance"]]) +
        "<p>Normally <strong>measured = calculated</strong>, and <strong>interstitial = plasma = intracellular osmolality</strong>.</p>" +
        mn("<strong>Osmolarity per Liter; osmolaLity per kiLogram</strong>: \"-arity\" for the bag, \"-ality\" for the body water. Formula: <strong>2 Na + glucose/18 + BUN/2.8</strong>.") +
        note("Toxic alcohols (methanol, ethylene glycol) are the classic cause of a high osmolal gap (standard teaching)."),
        ["osmolarity-vs-osmolality", "serum-osm-determinants", "calc-osm-formula", "calc-osm-normal", "osm-gap-definition", "osm-gap-normal", "osm-equal-compartments"],
        [q("What is osmolarity?", "Osmoles per liter of solution", ["Osmoles per kilogram of solvent", "Grams of sodium per liter", "Number of cells per liter"], "Osmolarity is per liter of solution. (Slide 80)"),
          q("What is osmolality?", "Osmoles per kilogram of solvent", ["Osmoles per liter of solution", "Milligrams of glucose per dL", "Protein per liter"], "Osmolality is per kilogram of solvent. (Slide 80)"),
          q("What is the formula for calculated serum osmolality?", "2 x Na + glucose/18 + BUN/2.8", ["Na + K + Cl", "Na - (Cl + HCO3)", "2 x glucose + BUN"], "Calculated osm = 2 × Na + glucose/18 + BUN/2.8. (Slide 81)"),
          q("What is the normal calculated serum osmolality?", "275 to 295 mosmol/kg", ["135 to 145 mosmol/kg", "350 to 400 mosmol/kg", "8 to 12 mosmol/kg"], "Normal is 275 to 295. (Slide 81)"),
          q("What is the osmolal gap?", "Measured osmolality minus calculated osmolality", ["Sodium minus chloride and bicarbonate", "Calculated minus 290", "Urine minus serum osmolality"], "Gap = measured minus calculated. (Slide 81)"),
          q("What is a normal osmolal gap?", "Less than 10 mosmol/kg", ["Less than 50 mosmol/kg", "More than 20 mosmol/kg", "Exactly 0 always"], "Normal gap is under 10. (Slide 81)"),
          q("What mostly determines serum osmolality?", "NaCl and NaHCO3 (90 to 95%)", ["Glucose and BUN (90%)", "Potassium", "Albumin"], "Sodium salts make up 90-95% of osmolality. (Slide 80)"),
          q("What does an osmolal gap over 10 mean?", "Abnormal unmeasured solutes are present", ["Normal finding", "Low sodium only", "Dehydration only"], "A gap over 10 means something unmeasured (like alcohols) is there. (Slide 82)"),
          q("How does osmolality compare across interstitial, plasma and intracellular fluid normally?", "It is equal in all three", ["Highest inside cells", "Highest in plasma", "Zero in the interstitium"], "Water moves until osmolality is equal everywhere. (Slide 82)")],
        [q("Na 140, glucose 90, BUN 14. Calculate the serum osmolality.", "290 mosmol/kg", ["280 mosmol/kg", "244 mosmol/kg", "310 mosmol/kg"], "280 + 5 + 5 = 290."),
          q("Calculated osmolality is 290 and measured is 320. Interpretation?", "Osmolal gap of 30: abnormal unmeasured solutes present", ["Normal gap", "Gap of 610", "Lab error only"], "320 - 290 = 30, well over 10."),
          q("Na 130, glucose 180, BUN 28. Calculate the serum osmolality.", "280 mosmol/kg", ["260 mosmol/kg", "338 mosmol/kg", "300 mosmol/kg"], "260 + 10 + 10 = 280."),
          q("A confused patient who drank antifreeze has a measured osmolality much higher than calculated. What is elevated?", "The osmolal gap", ["Only the sodium", "The anion gap is the only change", "Nothing"], "Ethylene glycol is unmeasured, raising the osmolal gap.")]),
      C("Tonicity",
        "<p><strong>Tonicity</strong> = the osmotic effect a solution has on <strong>cell volume</strong>.</p>" +
        tbl(["Solution", "Water moves", "Cell"], [
          ["<strong>Isotonic</strong>", "No net movement", "<strong>No change</strong>"],
          ["<strong>Hypotonic</strong>", "<strong>Into</strong> the cell", "<strong>Swells</strong>"],
          ["<strong>Hypertonic</strong>", "<strong>Out of</strong> the cell", "<strong>Shrinks</strong>"]]) +
        mn("<strong>hypO = cell gets fat like an O</strong> (swells); <strong>hypER = cell shrivels</strong>.") +
        hy("That is why <strong>hypotonic</strong> fluid in excess causes <strong>cerebral edema</strong> and <strong>hypertonic</strong> saline <strong>shrinks swollen brain cells</strong>."),
        ["tonicity-definition", "tonicity-iso", "tonicity-hypo", "tonicity-hyper"],
        [q("What does tonicity describe?", "The osmotic effect a solution has on cell volume", ["The solution's color", "The solution's temperature", "The number of RBCs"], "Tonicity is how a solution changes cell volume. (Slide 83)"),
          q("What happens to a cell in a hypotonic solution?", "It swells", ["It shrinks", "No change", "It divides"], "Hypotonic: water rushes into the cell and it swells."),
          q("What happens to a cell in a hypertonic solution?", "It shrinks", ["It swells", "No change", "It bursts immediately in every case"], "Hypertonic: water leaves and the cell shrinks."),
          q("What happens to a cell in an isotonic solution?", "No change in size", ["It swells", "It shrinks", "It lyses"], "Isotonic: no net water movement."),
          q("In a hypertonic solution, which way does water move?", "Out of the cell", ["Into the cell", "No movement", "Into the nucleus only"], "Water leaves toward the higher solute outside.")],
        [q("A patient given large volumes of hypotonic fluid develops headache and confusion. Why?", "Water moved into brain cells, causing swelling (cerebral edema)", ["Brain cells shrank", "Isotonic shift", "Hypernatremia"], "Hypotonic fluid swells brain cells."),
          q("Hypertonic saline is given for raised intracranial pressure. How does it work on cells?", "Pulls water out of swollen cells so they shrink", ["Makes cells swell", "No effect on cells", "Adds water to cells"], "Hypertonic saline pulls water out of brain cells.")])
    ]),

    /* ---------- 12 ---------- */
    S("12-crystalloid-vs-colloid", "12. Crystalloids vs colloids", "Objective 12. Slides 85–86, 99–100.", [
      C("Crystalloids vs colloids",
        tbl(["", "Crystalloids", "Colloids"], [
          ["What", "<strong>Electrolytes + sterile water</strong>", "Large molecules: <strong>human derivatives</strong> or <strong>semisynthetic</strong>"],
          ["Examples", "<strong>Normal saline, lactated Ringer's, D5W</strong>", "Human: <strong>FFP, albumin, whole blood</strong>. Semisynthetic: <strong>dextrans, gelatins, hetastarch</strong>"],
          ["Tonicity", "Isotonic, hypotonic or hypertonic", ""],
          ["Where it goes", "<strong>20% stays intravascular, 80% to the interstitium within 30 minutes</strong> (low oncotic pressure)", "<strong>Mostly stays intravascular</strong>: plasma expansion"],
          ["Role", "<strong>Isotonic crystalloid = preferred initial fluid</strong> for resuscitation", "<strong>No better outcomes</strong> than crystalloid; <strong>costly</strong>"],
          ["Catch", "Large volumes needed (3:1 rule)", "In <strong>hemorrhage and sepsis</strong>, vessels get so leaky that <strong>even proteins escape</strong> into the interstitium"]]) +
        hy("<strong>Start with isotonic crystalloid.</strong> Colloids cost more and do not improve outcomes.") +
        mn("<strong>Crystalloid = clear, cheap, crosses</strong> out of vessels. <strong>Colloid = costly, clings</strong> to vessels."),
        ["crystalloid-definition", "crystalloid-examples", "crystalloid-20-80", "colloid-examples", "colloid-stays", "isotonic-preferred-initial", "colloid-no-benefit-costly", "colloid-leak-sepsis"],
        [q("What are crystalloids?", "Solutions of electrolytes and sterile water", ["Solutions of large proteins", "Blood products only", "Oral rehydration drinks"], "Crystalloids are electrolytes in water. (Slide 85)"),
          q("Which of these is a crystalloid?", "Lactated Ringer's", ["Albumin", "Fresh frozen plasma", "Hetastarch"], "LR is a crystalloid."),
          q("Which of these is a semisynthetic colloid?", "Hetastarch", ["Normal saline", "D5W", "Lactated Ringer's"], "Hetastarch is a semisynthetic colloid."),
          q("Which of these is a human-derived colloid?", "Albumin", ["Dextran", "Gelatin", "Normal saline"], "Albumin comes from human plasma."),
          q("Where does most infused crystalloid end up within 30 minutes?", "About 80% moves to the interstitium", ["100% stays in the vessels", "It all enters cells", "It is all urinated out"], "About 80% of crystalloid leaves the vessels within 30 minutes. (Slide 85)"),
          q("Where do colloids mainly stay?", "In the intravascular compartment", ["In the interstitium", "Inside cells", "In the GI tract"], "Colloids are big and stay in vessels."),
          q("What is the preferred initial fluid in resuscitation?", "Isotonic crystalloid", ["Albumin", "Hetastarch", "3% saline"], "Isotonic crystalloid is first-line. (Slide 99)"),
          q("Do colloids improve outcomes compared with crystalloids?", "No, there is no evidence of improved outcomes", ["Yes, they halve mortality", "Yes, always in trauma", "Yes, in every patient"], "Colloids cost more without better outcomes. (Slide 100)"),
          q("Why do colloids leak out of vessels in hemorrhage and sepsis?", "Vessels become so permeable that even proteins cross", ["Colloids are too small", "The kidneys pull them out", "Lymphatics push them out"], "In sepsis and hemorrhage capillaries leak even protein."),
          q("Why do crystalloids shift out of the vessels?", "Their low oncotic pressure", ["Their high protein content", "Their high cost", "Their large molecules"], "Crystalloids have no oncotic pull, so they drift out. (Slide 99)")],
        [q("A septic patient needs fluid resuscitation. Albumin or isotonic crystalloid first?", "Isotonic crystalloid: preferred, cheaper, with no outcome difference", ["Albumin always", "Hetastarch", "D5W"], "Crystalloid is first: cheaper and no worse."),
          q("Why might albumin fail to stay in the vessels in septic shock?", "Leaky capillaries let even proteins escape into the interstitium", ["Albumin is a crystalloid", "Albumin is too dilute", "Albumin enters cells"], "Leaky septic capillaries let albumin escape."),
          q("One liter of normal saline is infused. About how much stays intravascular after 30 minutes per slide 85?", "About 200 mL", ["About 1 L", "About 800 mL", "None"], "Only about 20% stays, so about 200 mL.")])
    ]),

    /* ---------- 13 ---------- */
    S("13-sensible-insensible", "13. Sensible vs insensible fluid losses", "Objective 13. Slide 87.", [
      C("Sensible vs insensible losses",
        tbl(["", "Sensible", "Insensible"], [
          ["Definition", "<strong>Easily explained or measured</strong>", "<strong>Not easily measured or quantified</strong>"],
          ["Causes", "Poor intake, <strong>vomiting, diarrhea</strong>", ""],
          ["Examples (deck)", "<strong>Urine ~500 mL/day</strong>, <strong>stool ~200 mL/day</strong>", "<strong>Sweat ~500 mL/day</strong>, <strong>lungs ~400 mL/day</strong>"]]) +
        mn("<strong>Sensible = you can See it in a cup</strong> (urine, stool, vomit). <strong>Insensible = Invisible</strong> (sweat, breath).") +
        note("The deck's 500 mL/day urine is about the minimum obligatory output; typical adult urine output is closer to 1 to 1.5 L/day (standard teaching). Fever and fast breathing raise insensible losses."),
        ["sensible-definition", "sensible-examples", "insensible-definition", "insensible-examples"],
        [q("What are sensible losses?", "Losses that are easily explained or measured", ["Losses that cannot be measured", "Only losses through the lungs", "Only sweat"], "Sensible losses can be measured. (Slide 87)"),
          q("What are insensible losses?", "Losses that are not easily measured or quantified", ["Urine and stool", "Vomiting", "Blood loss into a drain"], "Insensible losses can't be easily measured. (Slide 87)"),
          q("Which is an insensible loss?", "Water lost through the lungs", ["Urine", "Stool", "Vomit"], "Breathing loses water you can't measure."),
          q("Which is a sensible loss?", "Diarrhea", ["Sweating", "Breathing", "Evaporation from the skin"], "Diarrhea can be measured."),
          q("About how much fluid is lost through the lungs per day in the deck?", "About 400 mL", ["About 40 mL", "About 4 L", "About 2 L"], "Lungs lose about 400 mL/day. (Slide 87)"),
          q("About how much fluid is lost through sweat per day in the deck?", "About 500 mL", ["About 50 mL", "About 5 L", "None"], "Sweat loses about 500 mL/day. (Slide 87)"),
          q("About how much stool water is lost per day in the deck?", "About 200 mL", ["About 2 L", "About 20 mL", "About 1 L"], "Stool loses about 200 mL/day. (Slide 87)")],
        [q("A febrile, tachypneic patient on a ventilator looks drier than intake and output suggest. Which losses are being missed?", "Insensible losses from sweat and breathing", ["Sensible urine losses", "Stool losses", "None"], "Fever and fast breathing raise insensible losses."),
          q("A nurse records emesis and urine in the I/O chart. Which type of losses are these?", "Sensible", ["Insensible", "Transcellular", "Third spaced"], "Emesis and urine are measured: sensible.")])
    ]),

    /* ---------- 14 ---------- */
    S("14-hypovolemia-pathophys", "14. Pathophysiology of the body's response to hypovolemia", "Objective 14. Slides 88–89.", [
      C("Hypovolemia and the compensations",
        "<p><strong>Hypovolemia</strong> = any reduction in <strong>extracellular volume</strong> (vomiting, blood loss). Severe hypovolemia reduces tissue perfusion. <strong>Hypovolemic shock is the most common form of shock</strong>, and <strong>fluid resuscitation is essential regardless of the cause</strong>.</p>" +
        tbl(["Step", "Response"], [
          ["1", "<strong>Carotid and aortic baroreceptors</strong> fire: <strong>sympathetic response</strong>, <strong>less vagal tone</strong>"],
          ["2", "<strong>Arterial vasoconstriction</strong> shunts flow from areas of less need to areas of more need"],
          ["3", "<strong>↑ HR and contractility</strong>: better cardiac output"],
          ["4", "<strong>Venous constriction</strong>: more venous return"],
          ["5", "<strong>Vasoactive hormones</strong>: epinephrine, norepinephrine, <strong>dopamine</strong>, cortisol: more vascular tone"],
          ["6", "<strong>Kidneys: RAAS and ADH</strong> move extravascular volume into the intravascular space"]]) +
        hy("Same playbook as shock in general (objective 3), with <strong>RAAS + ADH</strong> pulling fluid back into the vessels."),
        ["hypovol-definition", "hypovol-most-common", "hypovol-baroreceptors", "hypovol-shunt", "hypovol-hr-contractility", "hypovol-venous", "hypovol-hormones", "hypovol-raas-adh"],
        [q("Which baroreceptors sense volume loss in hypovolemia?", "Carotid and aortic baroreceptors", ["Pulmonary stretch receptors", "Skin pain receptors", "Gastric receptors"], "Carotid and aortic baroreceptors sense volume loss. (Slide 89)"),
          q("What happens to vagal stimulation in hypovolemia?", "It decreases", ["It increases", "No change", "It doubles"], "Vagal tone falls as sympathetic tone rises."),
          q("Which hormones are released in hypovolemia per slide 89?", "Epinephrine, norepinephrine, dopamine and cortisol", ["Insulin and glucagon", "ANP and BNP", "Melatonin"], "Catecholamines and cortisol rise."),
          q("Which renal systems move fluid into the intravascular space in hypovolemia?", "RAAS and ADH", ["ANP and BNP", "PTH and calcitonin", "Erythropoietin only"], "RAAS and ADH retain salt and water. (Slide 89)"),
          q("What does venous constriction do in hypovolemia?", "Augments venous return", ["Lowers preload", "Lowers heart rate", "Increases urine"], "Venous constriction pushes blood back to the heart."),
          q("What is hypovolemia?", "Any condition of extracellular volume reduction", ["Too much intracellular water", "High blood pressure", "Excess interstitial fluid only"], "Hypovolemia is any loss of extracellular volume. (Slide 88)"),
          q("Is fluid resuscitation needed for hypovolemia regardless of the cause?", "Yes, it is essential for intravascular depletion", ["No, only for blood loss", "No, only for vomiting", "Never"], "Any cause of intravascular depletion needs fluid. (Slide 88)"),
          q("What does arterial vasoconstriction do in hypovolemia?", "Shunts flow from areas of less need to areas of more need", ["Sends blood to the skin", "Lowers SVR", "Increases kidney flow"], "Arterial constriction shunts blood to vital organs.")],
        [q("A patient loses 1 L of blood. Why is she tachycardic with a narrow pulse pressure and cool skin?", "Baroreceptor-driven sympathetic response: higher HR and vasoconstriction", ["Vagal surge", "Fever", "Hypothyroidism"], "Baroreceptors trigger sympathetic tachycardia and vasoconstriction."),
          q("After a hemorrhage, aldosterone and ADH rise. What is the goal?", "Shift extravascular fluid into the intravascular space and keep water and salt", ["Increase urine output", "Lower BP", "Dilate the arteries"], "RAAS and ADH pull and keep fluid in the vessels.")])
    ]),

    /* ---------- 15 ---------- */
    S("15-hypovolemia-history-signs", "15. Hypovolemia: history, signs and symptoms", "Objective 15. Slides 90–94.", [
      C("History, vitals, exam and labs",
        tbl(["Area", "Findings"], [
          ["<strong>History</strong>", "<strong>Vomiting, diarrhea, fever, decreased intake, chronic disease, altered mental status</strong>"],
          ["<strong>Vitals</strong>", "Can be <strong>misleading</strong>. Classic: <strong>tachycardia, hypotension, poor peripheral perfusion</strong> (weak pulses, slow capillary refill), <strong>decreased mental status</strong>; these may be <strong>delayed</strong>"],
          ["<strong>Exam</strong>", "<strong>Dry mucosa, shrunken tongue, decreased skin turgor, delayed capillary refill, no tears, decreased urine or wet diapers, sunken fontanelles (infants)</strong>"],
          ["<strong>Labs</strong>", "<strong>BUN, creatinine, hematocrit, urine specific gravity</strong>: commonly used but <strong>not always reliable or sensitive</strong>"]]) +
        hy("Hypovolemia is a <strong>clinical diagnosis</strong>: history + exam. Normal vitals or labs do not rule it out.") +
        note("Slide 92 says \"decreased capillary refill\"; it means slowed (prolonged) refill, as slide 91 says."),
        ["hypovol-history", "hypovol-vitals-misleading", "hypovol-exam", "hypovol-infant-signs", "hypovol-labs-unreliable"],
        [q("Which history items suggest hypovolemia?", "Vomiting, diarrhea, fever and decreased intake", ["Weight gain and edema", "Polyuria from diabetes insipidus only", "Hypertension"], "Vomiting, diarrhea, fever and poor intake drain volume. (Slide 90)"),
          q("How reliable are vital signs in hypovolemia?", "They can be misleading and abnormal findings may be delayed", ["Always perfectly accurate", "Always normal", "They are the only reliable test"], "Compensation keeps vitals normal until late. (Slide 91)"),
          q("Which exam finding fits hypovolemia?", "Decreased skin turgor", ["Pitting edema", "JVD", "Rales"], "Poor skin turgor shows dehydration. (Slide 92)"),
          q("Which infant finding suggests hypovolemia?", "Sunken fontanelle", ["Bulging fontanelle", "Increased wet diapers", "Tears with crying"], "A sunken fontanelle shows infant dehydration."),
          q("Which labs are commonly used but not always sensitive for fluid status?", "BUN, creatinine, hematocrit and urine specific gravity", ["Troponin and BNP", "TSH and free T4", "Lipase and amylase"], "These labs help but often miss volume problems. (Slide 93)"),
          q("What happens to the tongue in hypovolemia?", "It looks shrunken", ["It swells", "It turns blue", "No change"], "A dry, shrunken tongue suggests dehydration. (Slide 92)"),
          q("Which perfusion signs are classic in hypovolemia?", "Weak pulses and prolonged capillary refill", ["Bounding pulses and flushed skin", "Brisk refill under 1 second", "Warm extremities"], "Weak pulses and slow cap refill show poor perfusion.")],
        [q("A toddler with 2 days of vomiting has dry lips, no tears, few wet diapers and a sunken fontanelle. Diagnosis?", "Hypovolemia (dehydration)", ["Fluid overload", "Heart failure", "Meningitis with bulging fontanelle"], "Dry mucosa, no tears, few diapers and sunken fontanelle = dehydration."),
          q("An elderly woman with poor intake has a normal HR and BP but dry mucosa and poor turgor. Can she be hypovolemic?", "Yes, vitals can be misleading and changes may be delayed", ["No, normal vitals rule it out", "No, labs must be abnormal first", "Only if she has a fever"], "Vitals change late, so the exam matters."),
          q("A patient with diarrhea has a normal BUN and hematocrit. Does that rule out hypovolemia?", "No, labs are not always sensitive to fluid status", ["Yes, completely", "Yes, if creatinine is normal too", "Only if urine is dilute"], "Labs aren't sensitive enough to rule it out. (Slide 93)")]),
      C("Hypervolemia: the other side",
        "<p><strong>Volume overload is a clinical diagnosis</strong>:</p>" +
        "<ul><li><strong>Edema</strong> (central or peripheral)</li><li><strong>Respiratory distress</strong> (pulmonary edema)</li><li><strong>Jugular venous distension</strong></li></ul>" +
        "<p><strong>Risk factors</strong>: <strong>renal disease, liver disease, heart failure</strong>.</p>" +
        hy("Before and after every bolus, look for <strong>new edema, crackles and JVD</strong>, especially in patients with <strong>kidney, liver or heart failure</strong>."),
        ["hypervol-clinical", "hypervol-signs", "hypervol-risk"],
        [q("How is volume overload diagnosed?", "Clinically: edema, respiratory distress and JVD", ["Only by CT scan", "Only by BNP", "Only by urine sodium"], "Overload is clinical: edema, distress, JVD. (Slide 94)"),
          q("Which conditions are risk factors for volume overload?", "Renal disease, liver disease and heart failure", ["Asthma and eczema", "Migraine", "Hypothyroidism alone"], "Kidney, liver and heart failure can't handle fluid. (Slide 94)"),
          q("Which finding suggests hypervolemia rather than hypovolemia?", "Jugular venous distension", ["Dry mucosa", "Sunken fontanelle", "Decreased skin turgor"], "JVD means too much volume.")],
        [q("A dialysis patient has gained 4 kg, has leg edema, crackles and JVD. Volume status?", "Hypervolemic", ["Hypovolemic", "Euvolemic", "Third spaced only with low total fluid"], "Weight gain, edema, crackles and JVD = overload."),
          q("A heart failure patient being given IV fluids becomes short of breath with new crackles. What is happening?", "Volume overload with pulmonary edema", ["Worsening dehydration", "Allergic reaction to saline", "Normal response"], "Fluids into a weak heart caused pulmonary edema.")])
    ]),

    /* ---------- 16 ---------- */
    S("16-goals-iv-fluid-replacement", "16. Goals of IV fluid replacement", "Objective 16. Slides 95–98.", [
      C("Goals, the deficit and IV access",
        "<p><strong>Goals of replacement therapy</strong>:</p>" +
        "<ol><li><strong>Stop fluid loss</strong></li><li><strong>Restore lost volume</strong> to sustain critical organ perfusion</li><li><strong>Maintain oxygen carrying capacity</strong> for cellular oxygen delivery</li><li><strong>Correct electrolyte and coagulation derangements</strong></li></ol>" +
        "<p>In short: <strong>help the body's compensation</strong> and prevent hemodynamic compromise and systemic collapse.</p>" +
        tbl(["Point", "Detail"], [
          ["<strong>Estimating the deficit</strong>", "<strong>No formula</strong> accurately estimates the total deficit. Use and follow <strong>BP, HR, JVP and urine output</strong>"],
          ["<strong>Temporizing</strong>", "Fluid and blood are a <strong>bridge</strong> while the source is found and controlled, <strong>not an indefinite</strong> treatment (especially in hemorrhage)"],
          ["<strong>IV access</strong>", "After <strong>airway and breathing</strong> are secure; often simultaneous with nursing. Options: <strong>peripheral, central, intraosseous</strong>"]]) +
        mn("<strong>Stop, Restore, Oxygenate, Correct</strong>."),
        ["ivf-goal-stop", "ivf-goal-restore", "ivf-goal-o2", "ivf-goal-correct", "ivf-no-formula", "ivf-follow-params", "ivf-temporizing", "iv-access-options"],
        [q("What are the four goals of IV fluid replacement?", "Stop loss, restore volume, maintain oxygen carrying capacity, correct electrolytes and coagulation", ["Raise BP to 180, diurese, cool, sedate", "Only restore volume", "Only correct sodium"], "Stop loss, restore volume, keep O2 carrying capacity, fix electrolytes/coags. (Slide 95)"),
          q("Is there a formula that accurately estimates the total fluid deficit?", "No", ["Yes, weight x 10", "Yes, the 3:1 rule", "Yes, the Parkland formula for everyone"], "No formula is accurate; follow the patient. (Slide 96)"),
          q("Which clinical parameters are followed to judge volume replacement?", "BP, heart rate, JVP and urine output", ["Only the hemoglobin", "Only the weight", "Only the temperature"], "Follow BP, HR, JVP and urine output. (Slide 96)"),
          q("What is the role of IV fluids in hemorrhage per the deck?", "A temporizing bridge while the source is found and controlled", ["An indefinite treatment", "The definitive cure", "Contraindicated"], "Fluids buy time; stopping the bleeding is the fix. (Slide 97)"),
          q("What must be secured before IV access?", "Airway and breathing", ["The Foley", "A chest CT", "Consent for surgery"], "Airway and breathing come before IV access. (Slide 98)"),
          q("What are the three IV access options?", "Peripheral, central and intraosseous", ["Oral, rectal, nasal", "Arterial, lymphatic, venous", "Subcutaneous only"], "Access can be peripheral, central or intraosseous. (Slide 98)"),
          q("Which goal of fluid therapy relates to hemoglobin?", "Maintain oxygen carrying capacity", ["Stop fluid loss", "Correct coagulation", "Lower BP"], "Hemoglobin carries O2.")],
        [q("A trauma patient has two failed peripheral IVs and is crashing. Fastest access option listed?", "Intraosseous line", ["Wait for an ultrasound IV tomorrow", "Oral fluids", "No access needed"], "IO access is fast when IVs fail."),
          q("A GI bleed patient keeps bleeding despite 3 L of fluid. What does the deck say about fluids?", "They are temporizing; the source must be controlled", ["Keep giving fluid indefinitely", "Fluids alone cure it", "Stop all fluids and wait"], "Fluids only buy time; control the source."),
          q("A team wants a formula to calculate exactly how much fluid a vomiting patient lost. Deck's answer?", "No formula is accurate; follow BP, HR, JVP and urine output", ["Weight times 30", "Sodium times 2", "The 3:1 rule gives the exact amount"], "No formula is accurate; use clinical parameters.")])
    ]),

    /* ---------- 17 ---------- */
    S("17-three-to-one-rule", "17. The 3:1 rule", "Objective 17. Slides 85, 99.", [
      C("The 3:1 rule",
        "<p><strong>Isotonic crystalloids</strong> have <strong>low oncotic pressure</strong>, so much of each liter <strong>shifts into the interstitium</strong>.</p>" +
        "<p><strong>3:1 rule</strong> (a <strong>theoretical</strong> concept): for every amount of <strong>blood lost</strong>, give <strong>3 times that amount of isotonic crystalloid</strong>, because <strong>at best only about 30% stays intravascular</strong>.</p>" +
        "<p><strong>Actual volume loss is judged clinically</strong>, not by the rule.</p>" +
        hy("Lose <strong>1 L of blood</strong> → about <strong>3 L of crystalloid</strong> to refill the vessels. That much crystalloid causes <strong>hemodilution and edema</strong>, which is why blood is considered after about 2 L.") +
        note("Slide 99 says at best 30% stays intravascular; slide 85 says 20% stays and 80% leaves within 30 minutes. Either way, about two thirds or more leaves, so 3 L replaces about 1 L."),
        ["three-one-definition", "three-one-why-30", "three-one-theoretical", "three-one-low-oncotic", "three-one-example"],
        [q("What is the 3:1 rule?", "Give 3 times the blood lost as isotonic crystalloid to restore intravascular volume", ["Give 3 units of blood per liter of saline", "Give 1 L of fluid every 3 hours", "Give 3 pressors at once"], "3:1 = 3 mL of crystalloid for every 1 mL of blood lost. (Slide 99)"),
          q("Why does the 3:1 rule exist?", "At best only about 30% of crystalloid stays in the intravascular space", ["Crystalloid is 3 times more concentrated than blood", "Blood is 3 times heavier", "The kidneys retain 3 times the fluid"], "Only about 30% of crystalloid stays in vessels. (Slide 99)"),
          q("Why does crystalloid shift out of the vessels so much?", "Low oncotic pressure", ["High oncotic pressure", "High protein content", "It is hypertonic"], "No oncotic pull lets crystalloid leak out. (Slide 99)"),
          q("Is the 3:1 rule an exact calculation?", "No, it is a theoretical concept; volume loss is judged clinically", ["Yes, it is exact", "Yes, but only in children", "Yes, it replaces all monitoring"], "3:1 is a concept; judge volume clinically."),
          q("Which type of fluid does the 3:1 rule apply to?", "Isotonic crystalloid", ["Albumin", "Packed RBCs", "3% saline"], "3:1 applies to isotonic crystalloid.")],
        [q("A trauma patient has lost an estimated 500 mL of blood. By the 3:1 rule, how much crystalloid is needed?", "1.5 L", ["500 mL", "3 L", "167 mL"], "3 × 500 mL = 1.5 L."),
          q("A patient lost about 1 L of blood. By the 3:1 rule, how much isotonic crystalloid restores intravascular volume?", "3 L", ["1 L", "333 mL", "10 L"], "3 × 1 L = 3 L."),
          q("A patient lost 2 L of blood. Why not give 6 L of saline and stop there?", "That much crystalloid causes hemodilution and edema; blood products are needed", ["6 L is exactly right", "Saline carries oxygen", "Saline stays in the vessels"], "Consider blood after 2 L.")])
    ]),

    /* ---------- 18 ---------- */
    S("18-blood-transfusions", "18. Blood transfusions: indications and administration", "Objective 18. Slides 101–103.", [
      C("When and how to transfuse",
        "<ul><li><strong>No hard and fast rule</strong> for when to transfuse</li>" +
        "<li><strong>Most common product: PRBCs</strong></li>" +
        "<li><strong>0.9% NS is the only IV fluid</strong> given with blood products</li>" +
        "<li>After <strong>2 L of rapid crystalloid</strong>, consider blood to <strong>avoid hemodilution</strong></li>" +
        "<li><strong>Permissive hypotension</strong> in hypovolemia from <strong>traumatic hemorrhage</strong></li></ul>" +
        tbl(["Before transfusion (if possible)", "Detail"], [
          ["<strong>Consent</strong>", "Discuss risks and benefits"],
          ["<strong>Type and screen</strong>", "When you <strong>anticipate</strong> needing blood"],
          ["<strong>Type and cross</strong>", "When there is an <strong>urgent</strong> need"]]) +
        mn("<strong>Screen when you might, Cross when you must</strong>.") +
        note("Permissive hypotension means accepting a lower-than-normal BP in bleeding trauma until the bleeding is controlled, so you do not \"pop the clot\" or dilute clotting factors (standard teaching)."),
        ["tx-no-rule", "tx-prbc-common", "tx-ns-only", "tx-after-2l", "tx-permissive-hypotension", "tx-consent", "tx-type-screen", "tx-type-cross"],
        [q("What is the most commonly transfused blood product?", "Packed red blood cells", ["Platelets", "Cryoprecipitate", "Whole blood"], "PRBCs are the most transfused product. (Slide 101)"),
          q("Which is the only IV fluid that can be given with blood products?", "0.9% normal saline", ["Lactated Ringer's", "D5W", "0.45% saline"], "Only NS is compatible; others can clot or lyse blood. (Slide 101)"),
          q("After how much rapid crystalloid should blood transfusion be considered?", "2 L", ["500 mL", "10 L", "100 mL"], "After 2 L of crystalloid, consider blood. (Slide 101)"),
          q("Why is blood considered after 2 L of crystalloid?", "To avoid hemodilution", ["To avoid hypernatremia", "To prevent hypoglycemia", "To lower BP"], "More saline dilutes hemoglobin and clotting factors."),
          q("Which strategy applies to hypovolemia from traumatic hemorrhage?", "Permissive hypotension", ["Target SBP over 160", "Beta blockade", "Large D5W volumes"], "Permissive hypotension avoids blowing off clots before bleeding is controlled. (Slide 101)"),
          q("When is a type and screen ordered?", "When anticipating the need for blood products", ["Only during massive transfusion", "Never", "After the transfusion"], "Type and screen when blood might be needed."),
          q("When is a type and cross ordered?", "When there is an urgent need for blood products", ["Only for elective surgery next year", "Never", "Only for platelets"], "Type and cross when blood is needed urgently."),
          q("Is there a hard rule for when to transfuse in the deck?", "No, there is no hard or fast rule", ["Yes, always at Hgb under 10", "Yes, always after 1 L", "Yes, only at Hgb under 4"], "Transfusion is a clinical judgment, not a fixed rule. (Slide 101)")],
        [q("A nurse wants to run lactated Ringer's in the same line as PRBCs. Response?", "Use only 0.9% normal saline with blood products", ["LR is fine", "Use D5W instead", "Use 3% saline"], "LR's calcium can clot blood, so only NS."),
          q("A surgical patient may need blood during tomorrow's case. What do you order?", "Type and screen", ["Type and cross 10 units", "Emergency O negative now", "Nothing"], "Possible need = type and screen."),
          q("A trauma patient is bleeding and has had 2 L of saline with ongoing tachycardia. Next?", "Consider blood transfusion", ["Another 4 L of saline", "Start D5W", "Furosemide"], "After 2 L with ongoing shock, give blood."),
          q("A trauma patient with a bleeding liver laceration has SBP 85 before surgery. Should the team push BP to 130 with fluids?", "No, permissive hypotension is used until bleeding is controlled", ["Yes, target 130 with saline", "Yes, start norepinephrine to 160", "Yes, give 6 L"], "Raising BP before control can pop clots and worsen bleeding.")]),
      C("Emergency and massive transfusion",
        tbl(["Situation", "Product"], [
          ["<strong>Hemodynamic instability from gross blood loss</strong>", "<strong>Immediate transfusion</strong> may be necessary: <strong>emergency release O negative</strong>"],
          ["<strong>Massive transfusion protocol (MTP)</strong>", "Start at <strong>1:1:1 PRBCs : FFP : platelets</strong>"],
          ["<strong>Massive transfusion</strong>", "<strong>> 10 units in 24 hours</strong>"]]) +
        "<p><strong>Complications</strong> to watch for: <strong>acute febrile hemolytic reaction</strong>, <strong>TRALI</strong> (transfusion-related acute lung injury), <strong>anaphylaxis</strong>.</p>" +
        hy("<strong>O negative</strong> = universal emergency red cells. <strong>1:1:1</strong> replaces cells, factors and platelets together."),
        ["tx-o-negative", "tx-mtp-111", "tx-massive-10-units", "tx-complications"],
        [q("What blood is given as emergency release before crossmatch?", "O negative", ["AB positive", "A positive", "B negative"], "O negative is the universal emergency donor. (Slide 103)"),
          q("What is the starting ratio for a massive transfusion protocol?", "1:1:1 PRBCs to FFP to platelets", ["3:1 saline to blood", "1:2:3 PRBCs to FFP to platelets", "PRBCs only"], "MTP starts 1:1:1 to replace whole blood. (Slide 103)"),
          q("What defines massive transfusion?", "More than 10 units in 24 hours", ["More than 1 unit in 24 hours", "More than 2 units in a week", "Any transfusion"], "Massive transfusion = more than 10 units in 24 hours. (Slide 103)"),
          q("Which transfusion complications does the deck list?", "Acute febrile hemolytic reaction, TRALI and anaphylaxis", ["Hyperglycemia and gout", "Stroke and MI only", "Kidney stones"], "Hemolytic reactions, TRALI and anaphylaxis are listed. (Slide 103)"),
          q("What does TRALI stand for?", "Transfusion-related acute lung injury", ["Transfusion-related arterial line infection", "Total renal acute liver injury", "Transient right atrial lead issue"], "TRALI = transfusion-related acute lung injury.")],
        [q("A gunshot victim arrives with barely palpable pulses and massive bleeding and no time for typing. What blood?", "Emergency release O negative", ["Wait for type and cross", "AB positive", "Albumin only"], "No time to type: O negative."),
          q("The trauma team activates massive transfusion. Initial product ratio?", "1:1:1 PRBCs, FFP and platelets", ["PRBCs only", "Saline and albumin only", "FFP only"], "Equal parts red cells, plasma and platelets replace whole blood and prevent trauma coagulopathy."),
          q("Within hours of a transfusion, a patient develops sudden hypoxia and bilateral infiltrates. Complication?", "TRALI", ["Anaphylaxis only", "Hemochromatosis", "Hypernatremia"], "New hypoxia and infiltrates after transfusion = TRALI.")])
    ]),

    /* ---------- 19 ---------- */
    S("19-resuscitation-management", "19. Resuscitation management: rate of fluids", "Objective 19. Slides 104–105, 107.", [
      C("How fast and how much",
        tbl(["Severity", "Plan"], [
          ["<strong>Mild or moderate hypovolemia</strong>", "Rapid resuscitation <strong>not necessary</strong>. Usually <strong>1 L isotonic saline bolus</strong>, then <strong>100 cc/hour</strong> until clinical parameters improve"],
          ["<strong>Severe depletion or hypovolemic shock</strong>", "<strong>Rapid</strong> resuscitation: <strong>at least 1–2 L isotonic saline boluses wide open</strong>"]]) +
        "<p><strong>Rule</strong>: the fluid rate must be <strong>greater than the rate of ongoing losses</strong>, or the deficit worsens.</p>" +
        "<p><strong>Monitor</strong>: <strong>BP, HR, JVP, urine output, mental status</strong>.</p>" +
        "<p><strong>Common NS orders</strong>: boluses of <strong>250 cc, 500 cc, 1 L, 2 L</strong>; maintenance of <strong>75, 100, 125, 250 cc/hour</strong>. It is common to order a <strong>bolus followed by a drip</strong>.</p>" +
        mn("<strong>Mild: 1 and 100</strong> (1 L, then 100 cc/hr). <strong>Shock: 1–2 wide open</strong>."),
        ["rate-mild-moderate", "rate-severe", "rate-exceed-losses", "rate-monitor", "ns-common-boluses", "ns-common-maintenance", "ns-bolus-then-drip"],
        [q("What is the usual fluid plan for mild or moderate hypovolemia?", "1 L isotonic saline bolus, then 100 cc/hour until parameters improve", ["5 L wide open", "Nothing by IV", "3% saline 100 cc"], "Mild-moderate: 1 L bolus then 100 cc/hr. (Slide 104)"),
          q("What is the fluid plan for hypovolemic shock?", "At least 1 to 2 L isotonic saline boluses wide open", ["100 cc/hour only", "D5W at 50 cc/hour", "Oral rehydration"], "Shock: 1-2 L wide open. (Slide 105)"),
          q("How must the fluid rate compare with ongoing losses?", "It must be greater than the rate of continued losses", ["It must be less than the losses", "It must equal half of the losses", "It does not matter"], "Fluids must outpace ongoing losses. (Slide 104)"),
          q("Which parameters are monitored during fluid resuscitation?", "BP, heart rate, JVP, urine output and mental status", ["Only temperature", "Only weight", "Only sodium"], "Monitor BP, HR, JVP, urine and mental status. (Slide 105)"),
          q("Which is a common normal saline bolus size?", "500 cc", ["5 cc", "5 L", "50 L"], "A common bolus is 500 cc. (Slide 107)"),
          q("Which is a common normal saline maintenance rate?", "125 cc/hour", ["1000 cc/hour", "5 cc/hour", "2 L/hour"], "A common maintenance rate is 125 cc/hr. (Slide 107)"),
          q("Is rapid fluid resuscitation needed for mild hypovolemia?", "No", ["Yes, always wide open", "Yes, 4 L minimum", "Yes, with pressors"], "Mild hypovolemia doesn't need rapid fluids. (Slide 104)"),
          q("What is a common way to order fluids for a patient who needs hydration?", "A bolus followed by a maintenance drip", ["Only a drip with no bolus ever", "Only oral fluids", "Only D5W"], "Bolus, then maintenance drip. (Slide 107)")],
        [q("A patient with 1 day of mild vomiting is mildly tachycardic with dry mucosa and normal BP. Fluid order?", "1 L normal saline bolus, then 100 cc/hour", ["3 L wide open plus pressors", "D5W only", "No fluids"], "Mild-moderate: 1 L bolus then 100 cc/hr."),
          q("A patient with severe diarrhea has BP 76/40, HR 130 and confusion. Fluid order?", "1 to 2 L isotonic saline wide open, then reassess", ["100 cc/hour only", "0.45% saline at 75 cc/hour", "D5W bolus"], "Shock: 1-2 L wide open, then reassess."),
          q("A patient with ongoing diarrhea of 200 mL/hour is on saline at 100 cc/hour. Problem?", "The fluid rate is below ongoing losses, so the deficit grows", ["Nothing, it is fine", "Too much fluid", "Wrong fluid type only"], "100 cc/hr is less than 200 mL/hr losses, so the deficit grows.")])
    ]),

    /* ---------- 20a ---------- */
    S("20a-isotonic-solutions", "20a. Isotonic solutions: normal saline and lactated Ringer's", "Objective 20. Slides 86, 106, 108.", [
      C("0.9% normal saline",
        tbl(["", "0.9% Normal saline"], [
          ["Tonicity", "<strong>Isotonic</strong>: matches serum osmolarity"],
          ["Notes", "<strong>Most commonly used IV solution</strong>; <strong>can be given with blood products</strong>"],
          ["Indications", "<strong>Hypovolemia, dehydration, blood loss, DKA, hyponatremia</strong>"],
          ["Precautions", "<strong>Heart failure</strong> from excessive use; <strong>hyperchloremic metabolic acidosis</strong> with prolonged use"]]) +
        hy("Lots of NS = lots of <strong>chloride</strong> → <strong>hyperchloremic (non-gap) metabolic acidosis</strong>."),
        ["ns-isotonic", "ns-most-common", "ns-with-blood", "ns-indications", "ns-precaution-hf", "ns-hyperchloremic-acidosis"],
        [q("Which IV solution is the most commonly used?", "0.9% normal saline", ["D5W", "3% saline", "Albumin"], "NS is the most used IV fluid. (Slide 106)"),
          q("Which acid-base problem can prolonged normal saline cause?", "Hyperchloremic metabolic acidosis", ["Metabolic alkalosis", "Respiratory alkalosis", "Ketoacidosis"], "NS's high chloride causes hyperchloremic acidosis. (Slide 106)"),
          q("Which of these is an indication for normal saline?", "DKA", ["Hypernatremia", "Free water replacement", "Cerebral edema from hyponatremia treatment"], "NS is first-line in DKA. (Slide 106)"),
          q("What is a precaution with excessive normal saline?", "Heart failure", ["Hypoglycemia", "Osmotic demyelination", "Hyperkalemia only"], "Too much NS overloads a weak heart. (Slide 106)"),
          q("Normal saline is what tonicity?", "Isotonic", ["Hypotonic", "Hypertonic", "Colloid"], "NS is isotonic. (Slide 86)"),
          q("Which IV solutions are isotonic in the deck?", "0.9% normal saline and lactated Ringer's", ["0.45% saline and D5W", "D5NS and 3% saline", "Albumin and hetastarch"], "NS and LR are isotonic. (Slide 86)")],
        [q("A DKA patient needs initial volume resuscitation. Fluid?", "0.9% normal saline", ["D5W", "0.45% saline", "3% saline"], "NS is used to start DKA resuscitation."),
          q("After 8 L of normal saline, a patient has Cl 118 and HCO3 16 with a normal anion gap. Cause?", "Hyperchloremic metabolic acidosis from normal saline", ["Lactic acidosis", "DKA", "Metabolic alkalosis"], "Lots of NS = high Cl, low HCO3, normal gap acidosis."),
          q("A patient with chronic heart failure gets repeated NS boluses and develops crackles. Which precaution was missed?", "Heart failure from excessive normal saline", ["Hyperglycemia", "Cerebral edema from hypotonic fluid", "Osmotic demyelination"], "Too much NS overloaded the failing heart.")]),
      C("Lactated Ringer's",
        tbl(["", "Lactated Ringer's"], [
          ["Tonicity", "<strong>Isotonic</strong>; <strong>electrolyte makeup similar to plasma</strong>"],
          ["Notes", "<strong>Common in surgical patients</strong>; <strong>lactate is a buffer</strong> that prevents metabolic acidosis"],
          ["Indications", "<strong>Acute blood loss</strong> (OR, trauma); <strong>3rd spacing</strong> (<strong>burns, ascites, pleural effusions</strong>)"],
          ["Precautions", "<strong>Renal disease, liver disease, pH > 7.5</strong>"]]) +
        hy("LR's <strong>lactate is converted by the liver</strong> to bicarbonate, so avoid it in <strong>liver disease</strong> and <strong>alkalosis (pH > 7.5)</strong>. It also carries potassium, a concern in <strong>renal disease</strong>.") +
        note("The liver and potassium reasons are standard teaching; the deck lists the precautions only."),
        ["lr-isotonic-plasma", "lr-surgical", "lr-lactate-buffer", "lr-indications", "lr-precautions"],
        [q("Which isotonic fluid has an electrolyte makeup similar to plasma?", "Lactated Ringer's", ["D5W", "0.45% saline", "3% saline"], "LR's makeup is close to plasma. (Slide 108)"),
          q("What does the lactate in LR do?", "Acts as a buffer to prevent metabolic acidosis", ["Causes lactic acidosis", "Raises glucose", "Lowers potassium"], "Lactate is converted to bicarbonate, buffering acid."),
          q("Which patients commonly receive LR?", "Surgical patients", ["Patients with hypernatremia", "Patients with pH 7.6", "Patients with cerebral edema"], "LR is common in surgery. (Slide 108)"),
          q("Which is an indication for LR?", "Burns (third spacing)", ["Liver failure", "pH over 7.5", "Hypernatremia"], "LR replaces burn losses. (Slide 108)"),
          q("Which are precautions for LR?", "Renal disease, liver disease and pH over 7.5", ["Burns and trauma", "Surgery", "Hypovolemia"], "LR needs the liver to clear lactate and adds K; avoid in alkalosis. (Slide 108)"),
          q("Which third spacing conditions does LR treat in the deck?", "Burns, ascites and pleural effusions", ["Hypernatremia and diabetes insipidus", "Cerebral edema", "Hypoglycemia"], "LR treats third spacing: burns, ascites, effusions. (Slide 108)")],
        [q("A burn patient needs large volume resuscitation. Preferred isotonic fluid per the deck?", "Lactated Ringer's", ["D5W", "0.45% saline", "3% saline"], "LR is preferred for burns."),
          q("A patient with cirrhosis and a pH of 7.52 needs fluid. Which fluid's precautions apply?", "Lactated Ringer's (liver disease and pH over 7.5)", ["Normal saline", "Packed RBCs", "Albumin"], "LR's precautions include liver disease and alkalosis."),
          q("A trauma patient in the OR is losing blood and needs crystalloid. Which fluid fits the deck's indication?", "Lactated Ringer's", ["D5W", "0.45% saline", "3% saline"], "LR is indicated for acute blood loss.")])
    ]),

    /* ---------- 20b ---------- */
    S("20b-hypotonic-solutions", "20b. Hypotonic solutions: 0.45% saline and D5W", "Objective 20. Slides 86, 109–110.", [
      C("0.45% saline and D5W",
        tbl(["", "0.45% NS (half NS)", "D5W"], [
          ["Tonicity", "<strong>Hypotonic</strong>", "<strong>Hypotonic</strong>"],
          ["Indications", "<strong>Hypertonic extracellular dehydration</strong>; <strong>hypernatremia</strong>", "<strong>Free water replacement</strong> (not volume resuscitation); <strong>maintenance only (100 cc/hour)</strong>; <strong>hypoglycemia</strong> (oral hypoglycemic overdose); <strong>malnourished</strong>"],
          ["Precautions", "<strong>Acute hyponatremia</strong> from excessive use → <strong>cerebral edema</strong>", "<strong>Hyperglycemia</strong> from excessive use"]]) +
        hy("<strong>Never resuscitate with D5W</strong>: once the dextrose is used, it is free water that spreads into cells, so very little stays in the vessels.") +
        mn("<strong>Hypo fluids for hyper sodium</strong>: hypotonic fluid treats hypernatremia."),
        ["half-ns-hypotonic", "half-ns-indications", "half-ns-cerebral-edema", "d5w-hypotonic", "d5w-free-water", "d5w-maintenance", "d5w-hypoglycemia", "d5w-hyperglycemia"],
        [q("Which IV solutions are hypotonic in the deck?", "0.45% saline and D5W", ["0.9% saline and LR", "3% saline and D5NS", "Albumin and FFP"], "0.45% saline and D5W are hypotonic. (Slide 86)"),
          q("What is 0.45% normal saline indicated for?", "Hypernatremia and hypertonic extracellular dehydration", ["Hyponatremia with seizures", "Hypovolemic shock resuscitation", "Raised ICP"], "Hypotonic saline adds free water to correct hypernatremia. (Slide 109)"),
          q("What is the precaution with excessive 0.45% saline?", "Acute hyponatremia causing cerebral edema", ["Hyperglycemia", "Osmotic demyelination", "Metabolic alkalosis"], "Too much free water drops Na and swells the brain. (Slide 109)"),
          q("What is D5W used for?", "Free water replacement and maintenance, not volume resuscitation", ["Volume resuscitation in shock", "Mixing with blood", "Raised ICP"], "D5W is free water; it doesn't stay in vessels. (Slide 110)"),
          q("What maintenance rate does the deck give for D5W?", "100 cc/hour", ["1000 cc/hour", "10 cc/hour", "500 cc/hour"], "D5W maintenance is 100 cc/hr. (Slide 110)"),
          q("What is the precaution with excessive D5W?", "Hyperglycemia", ["Hypernatremia", "Hyperchloremic acidosis", "TRALI"], "Too much D5W raises glucose. (Slide 110)"),
          q("Which overdose is an indication for D5W in the deck?", "Oral hypoglycemic overdose", ["Acetaminophen overdose", "Opioid overdose", "Beta blocker overdose"], "D5W treats hypoglycemia from oral agents."),
          q("Should D5W be used for volume resuscitation?", "No", ["Yes, it is first-line", "Yes, in all shock", "Yes, with blood"], "D5W spreads into all compartments, so it can't resuscitate. (Slide 110)")],
        [q("An elderly nursing home patient has Na 158 and dry mucosa. Which hypotonic fluid fits?", "0.45% normal saline", ["3% saline", "D5NS", "Normal saline only, forever"], "High Na needs free water: 0.45% saline."),
          q("A patient took too much glipizide and has recurrent glucose of 45. Fluid?", "D5W", ["0.45% saline", "3% saline", "Lactated Ringer's"], "D5W supplies glucose for sulfonylurea hypoglycemia."),
          q("A hypotensive trauma patient is started on D5W boluses. Problem?", "D5W is free water, not for volume resuscitation", ["It is the best choice", "It is hypertonic", "It must be given with blood"], "D5W is free water; it won't stay in the vessels."),
          q("A patient on lots of 0.45% saline develops headache, vomiting and Na 124. Why?", "Excessive hypotonic fluid causing acute hyponatremia and cerebral edema", ["Hypernatremia", "Hyperglycemia", "Volume depletion"], "Too much hypotonic fluid drops Na and swells the brain.")])
    ]),

    /* ---------- 20c ---------- */
    S("20c-hypertonic-solutions", "20c. Hypertonic solutions: 3% saline and D5NS", "Objective 20. Slides 86, 111.", [
      C("3% saline and D5NS",
        tbl(["", "3% saline", "D5NS"], [
          ["Tonicity", "<strong>Hypertonic</strong>", "<strong>Hypertonic</strong> (in the deck)"],
          ["Indications", "<strong>Severe symptomatic hyponatremia</strong> (seizures, encephalopathy); <strong>intracranial hemorrhage</strong> to lower ICP", ""],
          ["Precautions", "<strong>Too-rapid sodium correction</strong> → <strong>osmotic demyelination syndrome</strong> (formerly <strong>central pontine myelinolysis</strong>): myelin destroyed in the <strong>brain stem</strong>, can cause <strong>death</strong>", ""]]) +
        mn("<strong>Low to high, the pons will die</strong>: correcting low sodium too fast causes osmotic demyelination.") +
        note("D5NS is hypertonic in the bag; once the dextrose is metabolized it behaves like normal saline (standard teaching)."),
        ["hts-hypertonic", "hts-hyponatremia-seizures", "hts-icp", "hts-ods", "hts-cpm-old-name", "d5ns-hypertonic"],
        [q("Which IV solutions are hypertonic in the deck?", "3% saline and D5NS", ["0.9% saline and LR", "0.45% saline and D5W", "Albumin and hetastarch"], "3% saline and D5NS are hypertonic. (Slide 86)"),
          q("What are the indications for 3% saline?", "Severe symptomatic hyponatremia and intracranial hemorrhage to lower ICP", ["Hypernatremia and dehydration", "Routine maintenance", "Mixing with blood"], "3% saline treats severe hyponatremia and lowers ICP. (Slide 111)"),
          q("What is the main risk of correcting sodium too fast with 3% saline?", "Osmotic demyelination syndrome", ["Cerebral edema", "Hyperglycemia", "Hyperchloremic alkalosis"], "Correcting Na too fast causes osmotic demyelination. (Slide 111)"),
          q("What was osmotic demyelination syndrome formerly called?", "Central pontine myelinolysis", ["Wernicke encephalopathy", "Guillain-Barre syndrome", "Multiple sclerosis"], "It used to be called central pontine myelinolysis. (Slide 111)"),
          q("Where does osmotic demyelination destroy myelin?", "Axons into the brain stem (pons)", ["Peripheral nerves of the feet", "Retina only", "Spinal cord only"], "It destroys myelin in the brainstem (pons)."),
          q("What hyponatremia symptoms justify 3% saline?", "Seizures or encephalopathy", ["Mild fatigue only", "No symptoms with Na 133", "Thirst"], "Seizures or encephalopathy justify 3% saline."),
          q("Is D5NS hypotonic or hypertonic in the deck?", "Hypertonic", ["Hypotonic", "Isotonic", "A colloid"], "D5NS is hypertonic. (Slide 86)")],
        [q("A marathon runner is seizing with a sodium of 114. Fluid?", "3% hypertonic saline", ["D5W", "0.45% saline", "Free water"], "Seizing with Na 114 needs 3% saline."),
          q("A patient with an intracranial hemorrhage has rising ICP. Which fluid helps?", "3% hypertonic saline", ["D5W", "0.45% saline", "Lactated Ringer's at maintenance"], "Hypertonic saline pulls water from the brain, lowering ICP."),
          q("Days after rapid correction of Na from 110 to 132, a patient has quadriparesis and trouble swallowing. Diagnosis?", "Osmotic demyelination syndrome", ["Cerebral edema from hypotonic fluid", "Stroke from hypernatremia", "Guillain-Barre"], "Too-fast Na correction causes osmotic demyelination.")])
    ])
  ];
})();
