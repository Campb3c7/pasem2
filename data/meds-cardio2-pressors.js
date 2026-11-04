/*
  Medications: Pressors & inotropes (Cardio Part 2). Source:
  shock-pressors-fluids.md slides 36-50, 54, 61; arrhythmias.md slides
  146-148 (epinephrine in arrest); endocarditis-pericardial.md slide 66;
  vascular-disease-part-2.md slide 79. Digoxin is in the AV nodal group.
  Only append questions (ids "<med id>|<index>").
*/
(function () {
  "use strict";
  var H = window.DiseaseContent, M = window.MedContent;
  var Tbl = H.Tbl, HY = H.HY, Mn = H.Mn, Q = H.Q, L = H.L, Med = M.Med, ul = M.ul;

  var receptorTable = Tbl(["Drug", "Receptors", "Cardiac stimulation", "Vasoconstriction"], [
    ["Dobutamine", "Mainly β1 (some α1, β2)", "++++", "+"],
    ["Dopamine", "Dopaminergic, α1, β1, β2", "++ at 5 mcg/kg/min", "++ at 15 mcg/kg/min"],
    ["Norepinephrine", "Mainly α1, some β1", "++", "++++"],
    ["Epinephrine", "α1, β1, β2", "+++", "++"]
  ]);

  var lineRules = ul([
    "Best through a <strong>central line</strong>; first doses may go through a peripheral IV, but continuous pressors through a peripheral line risk <strong>venous sclerosis and tissue necrosis if they extravasate</strong>.",
    "If several pressors are running, simplify once the best agent is found.",
    "Goals: <strong>MAP ≥ 65</strong>, SBP ≥ 90, urine &gt; 0.5 mL/kg/hr, CVP ≥ 8, SpO2 ≥ 92%."
  ]);

  window.CARDIO2_MEDS_PRESSORS = L("meds2-pressors", "Pressors & inotropes", [

    Med("med-norepinephrine", "Norepinephrine (Levophed)", "Mainly α1 + some β1; the preferred pressor in cardiogenic shock", ["Shock, Pressors & Fluid Management", "Infective Endocarditis & Pericardial Disease", "Vascular Disease Part 2"], {
      uses: ul([
        "<strong>Preferred agent in cardiogenic shock</strong>.",
        "Hypotension with <strong>SBP &lt; 90 mmHg</strong>; used as a <strong>single potent vasopressor</strong>.",
        "Vasodilatory shock after fluids; tamponade or massive PE while the cause is fixed."
      ]),
      moa: "<p>Stimulates mainly <strong>α1</strong> (strong vasoconstriction, arterial and venous) and some <strong>β1</strong> (inotropy and chronotropy). Raises HR, contractility and SVR; shunts blood away from the periphery. <strong>Onset 1–2 min</strong>.</p>" + receptorTable,
      avoid: lineRules,
      se: ul(["Tissue necrosis if it extravasates from a peripheral IV.", "Peripheral and organ ischemia from strong vasoconstriction; arrhythmias (standard teaching)."]),
      pearls: ul(["Least vasoconstricting to most: dobutamine &lt; dopamine (low) &lt; epinephrine &lt; norepinephrine."]) +
        HY("Cardiogenic shock with SBP < 90 → norepinephrine.")
    }, [
      Q("uses", "Which pressor does the Shock lecture call the preferred agent in cardiogenic shock?", ["Norepinephrine", "Dobutamine", "Phenylephrine", "Isoproterenol"], 0, "Norepinephrine (Levophed) is the preferred agent in cardiogenic shock."),
      Q("moa", "Which receptors does norepinephrine mainly stimulate?", ["Alpha-1 with some beta-1", "Beta-2 only", "Dopaminergic only", "Beta-1 only"], 0, "Norepinephrine is primarily α1 with some β1: strong vasoconstriction plus some inotropy."),
      Q("avoid", "Why should continuous norepinephrine run through a central line?", ["Extravasation from a peripheral IV can cause sclerosis and tissue necrosis", "It does not work peripherally", "It causes hyperkalemia peripherally", "Central lines lower the dose"], 0, "Beyond emergency care, continuous pressors must go through a central line."),
      Q("moa", "Which pressor has the strongest vasoconstriction (++++)?", ["Norepinephrine", "Dobutamine", "Dopamine at 5 mcg/kg/min", "Epinephrine at low dose"], 0, "Norepinephrine: cardiac ++, vasoconstriction ++++."),
      Q("uses", "What is the MAP goal of resuscitation?", ["At least 65 mmHg", "At least 90 mmHg", "At least 120 mmHg", "Below 60 mmHg"], 0, "Goals: MAP ≥ 65, SBP ≥ 90, UOP > 0.5 mL/kg/hr, CVP ≥ 8, SpO2 ≥ 92%.")
    ]),

    Med("med-epinephrine", "Epinephrine", "α1 + β1 + β2; 1 mg every 3–5 min in cardiac arrest and an alternative pressor in shock", ["Arrhythmias", "Shock, Pressors & Fluid Management"], {
      uses: ul([
        "<strong>Cardiac arrest</strong>: <strong>1 mg IV every 3–5 min</strong>. Asystole/PEA: give it right away with CPR. VF/pVT: after the second shock, then amiodarone after the third.",
        "<strong>Shock: an alternative to norepinephrine</strong> (onset 1–2 min).",
        "Anaphylaxis (distributive shock) (standard teaching)."
      ]),
      moa: "<p>β1: more contraction and rate → higher cardiac output. β2: vasodilation, so SVR may <strong>fall at low doses</strong>. α1: vasoconstriction <strong>dominates at higher doses</strong> and raises SVR. Net SVR effect is dose-dependent.</p>",
      avoid: ul(["Compared with norepinephrine it causes <strong>more systemic acidosis, tachycardia and dysrhythmias</strong>, so it is second choice in shock."]),
      se: ul(["Tachycardia and arrhythmias.", "<strong>Lactic (systemic) acidosis</strong>.", "Ischemia from high demand."]),
      pearls: ul(["The body's own epinephrine, norepinephrine and cortisol surge is the compensation in early shock."]) +
        HY("Arrest: epinephrine 1 mg q3–5 min. Shock: alternative to norepinephrine, more arrhythmias and acidosis.")
    }, [
      Q("uses", "A patient is in asystole. What drug is given right away with CPR?", ["Epinephrine 1 mg IV every 3-5 minutes", "Atropine 1 mg", "Amiodarone 300 mg", "Adenosine 6 mg"], 0, "Asystole/PEA: CPR and epinephrine 1 mg IV every 3-5 minutes."),
      Q("se", "Why is epinephrine second to norepinephrine in shock?", ["More acidosis, tachycardia and dysrhythmias", "It has no beta effect", "It takes 30 minutes to work", "It cannot be given IV"], 0, "Epinephrine is an alternative but causes more systemic acidosis, tachycardia and dysrhythmias."),
      Q("moa", "What happens to SVR with low-dose epinephrine?", ["It may fall from beta-2 vasodilation", "It rises sharply from alpha-1", "It does not change", "It always doubles"], 0, "Low doses: β2 vasodilation may lower SVR; higher doses: α1 vasoconstriction raises SVR."),
      Q("uses", "In VF, when is the first epinephrine given?", ["After the second shock, with CPR", "Before the first shock", "Only after amiodarone", "Never in VF"], 0, "ACLS: shock, CPR; still shockable → shock, CPR, epinephrine 1 mg; then shock and amiodarone 300 mg."),
      Q("moa", "Which receptors does epinephrine stimulate?", ["Alpha-1, beta-1 and beta-2", "Alpha-1 only", "Dopaminergic and beta-1", "Beta-1 only"], 0, "Epinephrine stimulates α1, β1 and β2.")
    ]),

    Med("med-dopamine", "Dopamine", "Dose-dependent: dopaminergic → β1 → α1", ["Shock, Pressors & Fluid Management", "Vascular Disease Part 2"], {
      uses: ul([
        "Hypotension with <strong>SBP &lt; 90 mmHg</strong> (onset ~5 min).",
        "Single agent or <strong>combined with dobutamine</strong>.",
        "Pressor support in unstable PE (the deck's example)."
      ]),
      moa: Tbl(["Dose (mcg/kg/min)", "Main effect"], [
        ["Low (&lt; 3)", "<strong>Dopaminergic</strong>: renal and mesenteric arterial vasodilation, ↑ renal blood flow and urine"],
        ["Intermediate (3–10)", "<strong>β1</strong> + dopaminergic: ↑ SA node rate, contractility and CO"],
        ["High (&gt; 10)", "<strong>α1</strong>: peripheral vasoconstriction, including the kidneys"]
      ]) + "<p>At higher doses a second dopaminergic subtype releases norepinephrine.</p>",
      avoid: ul(["High doses vasoconstrict the kidneys → <strong>renal necrosis and failure</strong>.", "Same central-line rules as all continuous pressors."]),
      se: ul(["<strong>Dose-limiting dysrhythmias</strong> (tachycardia)."]),
      pearls: ul(["Remember the ladder: <strong>D → β → α</strong> as the dose rises (low, medium, high)."]) +
        Mn("Dose ladder", "Low = Dopaminergic (kidneys), medium = Beta (heart), high = Alpha (squeeze).")
    }, [
      Q("moa", "At less than 3 mcg/kg/min, what does dopamine mainly do?", ["Dilates renal and mesenteric arteries and raises urine output", "Strong alpha vasoconstriction", "Blocks beta receptors", "Lowers heart rate"], 0, "Low-dose dopamine is dopaminergic: arterial vasodilation, more renal blood flow and urine."),
      Q("moa", "At more than 10 mcg/kg/min, which effect dominates?", ["Alpha-1 vasoconstriction", "Dopaminergic vasodilation", "Beta-2 bronchodilation", "Pure beta-1 inotropy"], 0, "High-dose dopamine acts mainly on α1 receptors, causing peripheral vasoconstriction."),
      Q("avoid", "What is a risk of high-dose dopamine for the kidneys?", ["Renal vasoconstriction leading to renal necrosis and failure", "Kidney stones", "Nephrotic syndrome", "Polyuria"], 0, "High doses vasoconstrict the kidneys, which can cause renal necrosis and failure."),
      Q("se", "What side effect most often limits dopamine?", ["Dysrhythmias", "Bronchospasm", "Hyperglycemia", "Rash"], 0, "Dopamine can cause dose-limiting dysrhythmias."),
      Q("moa", "What does intermediate-dose (3-10 mcg/kg/min) dopamine do?", ["Beta-1 stimulation raises rate, contractility and cardiac output", "Pure renal vasodilation", "Pure vasoconstriction", "Slows the SA node"], 0, "Intermediate doses mix dopaminergic and β1 effects."),
      Q("uses", "With which inotrope can dopamine be combined?", ["Dobutamine", "Esmolol", "Diltiazem", "Adenosine"], 0, "Dopamine can be used as a single agent or in combination with dobutamine.")
    ]),

    Med("med-dobutamine", "Dobutamine", "Mainly β1 inotrope; raises CO and lowers SVR; only if SBP ≥ 90", ["Shock, Pressors & Fluid Management"], {
      uses: ul([
        "<strong>Cardiogenic shock without profound hypotension</strong>: only when <strong>SBP ≥ 90 mmHg</strong>.",
        "Can be combined with dopamine (or a pressor) when BP is low (onset 1–2 min)."
      ]),
      moa: "<p>Synthetic sympathomimetic: <strong>β1 agonist = positive inotrope</strong>; <strong>β2 = some peripheral vasodilation</strong>. Result: <strong>more contractility and cardiac output, lower SVR, little change in heart rate</strong>.</p>",
      avoid: ul(["<strong>SBP &lt; 90 mmHg</strong>: the vasodilation can drop the pressure further."]),
      se: ul(["Hypotension from β2 vasodilation; tachyarrhythmias (standard teaching)."]),
      pearls: ul(["Dobutamine is the inotrope (pump), norepinephrine is the pressor (squeeze).", "Cardio Part 1 Medications covers its HF and cardiomyopathy uses."]) +
        HY("Dobutamine: ↑ CO, ↓ SVR, only if SBP ≥ 90.")
    }, [
      Q("avoid", "A cardiogenic shock patient has a BP of 78/50. Why not start dobutamine alone?", ["Its vasodilation can drop BP further; it needs SBP of at least 90", "It causes bradycardia", "It only works in septic shock", "It is too slow"], 0, "Dobutamine should only be used when SBP ≥ 90; avoid when SBP < 90."),
      Q("moa", "What is dobutamine's net hemodynamic effect?", ["More contractility and CO, lower SVR, little HR change", "Strong vasoconstriction and higher SVR", "Lower HR and lower CO", "Renal vasodilation only"], 0, "β1 inotropy plus β2 vasodilation: ↑ CO, ↓ SVR, minimal HR change."),
      Q("moa", "Which pressor has the most cardiac stimulation and the least vasoconstriction?", ["Dobutamine", "Norepinephrine", "High-dose dopamine", "Phenylephrine"], 0, "Dobutamine: cardiac ++++, vasoconstriction +."),
      Q("uses", "Which patient fits dobutamine best?", ["Cardiogenic shock with SBP 94, cold and wet", "Septic shock with BP 70/40", "Hemorrhagic shock", "Anaphylaxis"], 0, "Dobutamine is for cardiogenic shock without profound hypotension (SBP ≥ 90).")
    ])
  ]);
}());
