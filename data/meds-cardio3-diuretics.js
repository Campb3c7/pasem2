/*
  Medications: Diuretics in heart failure (Cardio Part 3). Source:
  heart-failure.md slides 118-126, 151-153, 190-192; cad-part-4.md slides
  65-66, 72 (RV infarct, LV failure); coronary-angiogram.md slide 7.
  Aldosterone antagonists are in the heart failure group. Only append questions.
*/
(function () {
  "use strict";
  var H = window.DiseaseContent, M = window.MedContent;
  var Tbl = H.Tbl, HY = H.HY, Mn = H.Mn, Q = H.Q, L = H.L, Med = M.Med, ul = M.ul;

  window.CARDIO3_MEDS_DIURETICS = L("meds3-diuretics", "Diuretics", [

    Med("med3-loop", "Loop diuretics (furosemide, bumetanide, torsemide)", "Fast relief of congestion in every HF stage; IV in decompensated HF; no survival benefit", ["Heart Failure", "CAD Part IV: ACS", "Cardiac Testing"], {
      uses: ul(["<strong>Symptom relief</strong> of pulmonary and peripheral edema in all HF stages; <strong>decompensated HF</strong>.", "Diuretics in general have <strong>not been shown to improve survival</strong>.",
        "LV failure after MI with pulmonary congestion."]) +
        Tbl(["Decompensated HF dosing (ED)", "Plan"], [
          ["Furosemide-naive", "<strong>40 mg IV</strong>"],
          ["Already on oral furosemide", "<strong>1–2.5× the total daily oral dose</strong>, IV (on 40 mg PO daily → 40–100 mg IV)"],
          ["Usual ED max (normal kidneys)", "80 mg IV (over-diuresis risk)"],
          ["Chronic outpatient", "Start 20 mg daily; severe HF may need 80 mg BID; titrate to effect"]
        ]),
      moa: "<p>Blocks NaCl reabsorption in the <strong>thick ascending limb of the loop of Henle</strong> (Na-K-2Cl, standard teaching) → big natriuresis → less blood volume → <strong>↓ preload</strong>, less congestion. IV works in <strong>10–15 min</strong>.</p>",
      avoid: ul(["<strong>RV infarction</strong> (needs preload) and hypotension.", "Over-diuresis in <strong>HFpEF</strong> (low preload drops CO).",
        "HF with HTN: loop alone without a vasodilator (NTG) raises the risk of worse renal function and mortality.", "Sulfa allergy concerns.", "Often held the morning of a heart cath."]),
      se: ul(["<strong>Hypokalemia</strong>, metabolic alkalosis, hyponatremia, hyperuricemia.", "Hypovolemia, hypotension, <strong>azotemia</strong>.", "Ototoxicity with high IV doses (standard teaching)."]),
      pearls: ul(["Use <strong>IV</strong> in the ED: bowel wall edema blocks oral absorption.", "Chronic kidney disease needs higher doses.", "In acute HF with high BP, the <strong>vasodilator comes first</strong>; breathing often improves before any diuresis."]) +
        HY("Loops: symptoms, not survival. IV in acute HF. Hold in RV infarct.")
    }, [
      Q("uses", "A patient on furosemide 40 mg PO daily comes in with decompensated HF. Starting IV dose?", ["40-100 mg IV (1-2.5 times the daily oral dose)", "10 mg IV", "400 mg IV", "Same 40 mg orally"], 0, "Chronic users need at least their usual daily dose IV to overcome tolerance."),
      Q("uses", "Why is furosemide given IV rather than PO in acute HF?", ["Bowel wall edema can block oral absorption", "It is cheaper", "Oral furosemide does not exist", "IV avoids hypokalemia"], 0, "A congested gut absorbs pills poorly, so IV gives reliable fast diuresis."),
      Q("uses", "A furosemide-naive patient has acute pulmonary edema. Recommended ED dose?", ["40 mg IV", "200 mg IV", "5 mg PO", "1 mg/kg SQ"], 0, "40 mg IV is the lecture's starting dose for diuretic-naive patients."),
      Q("se", "A patient diuresing on furosemide has new PVCs. Which lab is the first suspect?", ["Low potassium", "High calcium", "High glucose", "Low platelets"], 0, "Loop diuretics waste potassium, and hypokalemia is arrhythmogenic."),
      Q("avoid", "Inferior STEMI with hypotension, JVD and clear lungs. The resident orders furosemide for the JVD. Correct?", ["No: suspect RV infarct; diuretics drop preload, give fluids", "Yes, 80 mg IV", "Yes, plus nitro", "Only if BNP is high"], 0, "JVD here comes from a failing RV that needs volume, not from overload in the lungs."),
      Q("uses", "Do loop diuretics improve survival in HF?", ["No, they relieve symptoms", "Yes, more than ACEi", "Only in HFpEF", "Only with digoxin"], 0, "Diuretics treat congestion but have not been shown to change mortality."),
      Q("avoid", "Acute HF with BP 200/110. Why add NTG instead of relying only on IV furosemide?", ["Loop alone in HF with HTN raises renal dysfunction and mortality risk", "NTG is a diuretic", "Furosemide raises BP", "NTG lowers potassium"], 0, "The problem is afterload; lowering it rescues the heart faster and protects the kidneys.")
    ]),

    Med("med3-thiazide", "Thiazide and thiazide-like diuretics (HCTZ, chlorthalidone, chlorothiazide, metolazone)", "Mild add-on for HF symptoms; can be combined with a loop; useless at CrCl < 30", ["Heart Failure"], {
      uses: ul(["Added for symptom relief in stage A, B and C HF; mild antihypertensive effect.", "<strong>May be combined with a loop</strong> (sequential nephron blockade, metolazone classic, standard teaching).", "HFpEF: low dose with close monitoring if a K-sparing diuretic cannot be used."]),
      moa: "<p>Blocks Na and Cl transport in the <strong>distal convoluted tubule</strong> → more Na, Cl and water excreted.</p>",
      avoid: ul(["<strong>Ineffective if CrCl &lt;30</strong> (metolazone is the exception, standard teaching).", "Sulfa cross-reaction possible."]),
      se: ul(["<strong>Hypercalcemia</strong>, hypokalemia, hypochloremic alkalosis, <strong>hyponatremia</strong>, hypomagnesemia.", "Hypotension."]),
      pearls: ul(["Thiazide = calcium <strong>up</strong>; loop = calcium down (standard teaching)."]) + HY("Thiazide: add-on, weak, CrCl < 30 = no effect, Ca goes up.")
    }, [
      Q("avoid", "A patient with CrCl 22 has HF edema. Will HCTZ alone help much?", ["No: thiazides are ineffective below CrCl 30", "Yes, it is the strongest diuretic", "Yes, at any kidney function", "Only with digoxin"], 0, "Too little filtrate reaches the distal tubule for HCTZ to act."),
      Q("se", "Which electrolyte rises on a thiazide but falls on a loop?", ["Calcium", "Potassium", "Sodium", "Magnesium"], 0, "Thiazides increase calcium reabsorption in the distal tubule."),
      Q("uses", "A HF patient stays overloaded despite high-dose furosemide. Which add-on fits?", ["A thiazide-like diuretic such as metolazone", "A second loop diuretic", "Digoxin", "A beta blocker"], 0, "Blocking the distal tubule catches the sodium the loop let through."),
      Q("se", "An elderly woman on HCTZ is confused with Na 124. Link?", ["Thiazides commonly cause hyponatremia", "HCTZ raises sodium", "Unrelated", "It means hypercalcemia only"], 0, "Thiazides impair urine dilution, so water is kept relative to sodium.")
    ]),

    Med("med3-k-sparing-na", "Na channel K-sparing diuretics (amiloride, triamterene)", "Weak diuretics that keep potassium; hyperkalemia risk", ["Heart Failure"], {
      uses: ul(["K-sparing option; HFpEF prefers K-sparing diuretics.", "Offsets K loss from loops or thiazides (standard teaching)."]),
      moa: "<p>Directly block the <strong>sodium channels</strong> of the aldosterone-sensitive pump (ENaC, standard teaching) → Na out, K kept, like an aldosterone antagonist without blocking the receptor.</p>",
      avoid: ul(["Hyperkalemia; caution with ACEi, ARB, NSAIDs, CKD."]),
      se: ul(["<strong>Hyperkalemia</strong>, fatigue, hypotension, azotemia."]),
      pearls: ul(["Unlike spironolactone, no gynecomastia (no hormone receptor effect, standard teaching)."]) + HY("Amiloride/triamterene: K up, no breast effects.")
    }, [
      Q("moa", "How do amiloride and triamterene spare potassium?", ["They block distal sodium channels directly", "They block aldosterone receptors", "They block the loop of Henle", "They block SGLT2"], 0, "Less sodium entry means less driving force for potassium secretion."),
      Q("se", "Main lab risk with triamterene plus an ACE inhibitor?", ["Hyperkalemia", "Hypokalemia", "Hypercalcemia", "Hyperglycemia"], 0, "Both keep potassium in the body."),
      Q("se", "A man had gynecomastia on spironolactone. Which K-sparing diuretic avoids that hormone effect?", ["Amiloride", "Spironolactone at a lower dose", "Furosemide", "Chlorthalidone"], 0, "Amiloride works on sodium channels, not the steroid receptor.")
    ])
  ]);
}());
