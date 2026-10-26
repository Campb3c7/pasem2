/*
  Concepts: Hypertension Part II (same shape as data/diseases-endocrine.js).

  Each entry is a mechanism, not a disease: idea → cause/effect chain →
  bedside relevance → common traps, with a prediction-style question bank.
  Source: source-material/cardio-part-1/text/hypertension-part-2.md (concepts
  sit with the deck that teaches them). Anything the slides only imply is
  labeled "Clarification (standard physiology)" or "Clarification (standard
  pharmacology)" in the html.

  Question ids are "<concept id>|<index>" and progress is saved against them:
  only APPEND questions to a concept; never insert, delete, or reorder.
  `correct` is zero-based; the engine shuffles answer order every time.
*/
(function () {
  "use strict";

  var H = window.DiseaseContent;
  var Tbl = H.Tbl, HY = H.HY, Mn = H.Mn, S = H.S, Q = H.Q, D = H.D, L = H.L;

  function chain(steps) {
    return '<ol class="concept-chain">' + steps.map(function (step) { return "<li>" + step + "</li>"; }).join("") + "</ol>";
  }
  function clar(text) {
    return "<p><strong>Clarification (standard physiology):</strong> " + text + "</p>";
  }
  function clarRx(text) {
    return "<p><strong>Clarification (standard pharmacology):</strong> " + text + "</p>";
  }
  function traps(items) {
    return "<ul>" + items.map(function (item) { return "<li>" + item + "</li>"; }).join("") + "</ul>";
  }

  window.CARDIO_CONCEPTS_HYPERTENSION_PART2 = L("hypertension-part-2", "Hypertension Part II", [

    // ------------------------------------------------------------------
    D("htn-cardiac-remodeling", "Afterload → LVH → stiff heart → heart failure", "Chronic high pressure is a heavy load the left ventricle must push against, so it thickens; the thick wall relaxes poorly, raising filling pressures first (diastolic dysfunction), and eventually the pump itself fails.", [
      S("idea", "The idea", "<p>Afterload is the pressure the heart must beat against — the systolic BP. In chronic HTN the left ventricle lifts a heavier weight every beat, so like any muscle doing weight training, its cells <strong>hypertrophy</strong> (LVH). That lets it pump harder against the high aortic pressure.</p><p>The price: a thick wall is a <strong>stiff</strong> wall. It does not relax completely in early diastole, so filling needs more pressure. This <strong>diastolic dysfunction</strong> comes <em>first</em> (HFpEF). Later the thick wall crowds the cavity, limits filling and stroke volume, and systolic function fails (HFrEF).</p><p>The arteries remodel too: chronic HTN makes them <strong>stiffer</strong> (less compliant) → higher systolic BP and a <strong>wider pulse pressure</strong>.</p>"),
      S("chain", "Cause → effect", chain([
        "Chronic HTN → ↑ afterload.",
        "↑ Afterload → ↑ myocardial oxygen consumption and ↓ coronary perfusion pressure to an overworked myocardium.",
        "LV myocytes hypertrophy → LVH (hypertensive heart disease).",
        "Stiff, thick LV relaxes incompletely in early diastole → ↑ LV end-diastolic pressure → diastolic dysfunction (HFpEF).",
        "↑ LVEDP → ↑ left atrial pressure → left atrial enlargement → atrial arrhythmias.",
        "LVH impinges on the cavity → ↓ filling and stroke volume → systolic failure (HFrEF), aortic root dilation, valve incompetence, ischemia."
      ]) + Tbl(["Vessel/heart change", "Mechanism", "What you measure"], [
        ["Arterial stiffening", "↓ Compliance from chronic pressure", "↑ SBP, wide pulse pressure (isolated systolic HTN in older adults)"],
        ["LVH", "Myocyte hypertrophy against ↑ afterload", "EKG/echo LVH, heave, displaced apical impulse"],
        ["Diastolic dysfunction", "Stiff LV, incomplete relaxation → ↑ LVEDP", "S4, rales, HFpEF"],
        ["Systolic failure", "Cavity crowded, pump fails", "HFrEF"]
      ]) + HY("In HTN, diastolic dysfunction comes first: the thick, stiff LV can't relax and fill, so filling pressures rise.")),
      S("bedside", "Why it matters clinically", "<p>The HTN physical exam is a hunt for this chain: inspect and palpate for <strong>heaves</strong>, palpate for a <strong>displaced apical impulse</strong> (LVH), auscultate for an <strong>S4</strong>, and listen to the lungs for <strong>rales</strong>. Order a baseline <strong>EKG</strong> to assess for LVH, with echo if abnormal.</p>" + clar("an S4 is the sound of the atrium forcing blood into a stiff, hypertrophic ventricle late in diastole — the bedside sign of the diastolic dysfunction above. Rales reflect raised left-sided filling pressure backing up into the lungs.") + "<p><strong>Age and BP numbers:</strong> in younger patients diastolic BP is most linked to CV risk; in adults over 60, stiff arteries give isolated systolic HTN with a wide pulse pressure, and <strong>systolic BP</strong> is the main determiner of risk.</p><p>LVH is associated with increased premature death; ACEIs may halt or regress LV remodeling.</p>"),
      S("traps", "Common traps", traps([
        "<strong>“HTN causes systolic heart failure first.”</strong> Diastolic dysfunction (HFpEF) occurs first; systolic function is long preserved.",
        "<strong>“LVH is purely bad.”</strong> It begins as an adaptation that lets the heart pump harder against high aortic pressure — the cost is stiffness and higher O₂ demand.",
        "<strong>“A wide pulse pressure in an older adult means a leaky valve.”</strong> In the lecture's context it reflects vascular non-compliance (stiff arteries).",
        "<strong>“S3 is the classic HTN heart sound.”</strong> The HTN exam slide lists S4 — the stiff-ventricle sound."
      ]))
    ], [
      Q("chain", "Systemic BP stays high for years. What happens to the left ventricular wall?", ["It hypertrophies (LVH) to pump against the higher afterload", "It thins and dilates first", "It is unaffected because afterload only affects the aorta", "It atrophies from overuse"], 0, "Increased afterload causes LV myocyte hypertrophy so the heart can pump against elevated aortic pressure."),
      Q("chain", "A hypertrophied LV relaxes incompletely in early diastole. Predict LV end-diastolic pressure.", ["LVEDP rises", "LVEDP falls", "LVEDP is unchanged", "LVEDP becomes negative"], 0, "Incomplete passive relaxation of the stiff LV raises LVEDP, which then raises left atrial pressure."),
      Q("idea", "Which type of cardiac dysfunction appears FIRST in hypertensive heart disease?", ["Diastolic dysfunction (HFpEF)", "Systolic dysfunction (HFrEF)", "Right ventricular failure", "Complete heart block"], 0, "Diastolic dysfunction occurs first; systolic function is long preserved and fails later as LVH limits filling and stroke volume."),
      Q("bedside", "Which extra heart sound fits a stiff, hypertrophic LV from long-standing HTN?", ["S4", "S3", "Opening snap", "Midsystolic click"], 0, "The HTN exam slide says to auscultate for S4 — atrial contraction into a stiff, hypertrophied ventricle."),
      Q("chain", "Why does chronic HTN widen the pulse pressure in older adults?", ["Arteries stiffen (less compliance), raising systolic pressure while diastolic stays normal or low", "The heart rate slows", "Blood volume falls", "The aortic valve narrows"], 0, "Chronic HTN increases arterial wall stiffness → higher SBP and widened pulse pressure, reflecting vascular non-compliance."),
      Q("chain", "Increased afterload affects the coronary circulation how?", ["↓ Coronary perfusion pressure while ↑ myocardial oxygen consumption", "↑ Coronary perfusion and ↓ oxygen consumption", "No change in coronary perfusion", "↓ Oxygen consumption only"], 0, "The increased afterload of HTN decreases coronary perfusion pressure to an overworked myocardium and increases myocardial O2 consumption."),
      Q("bedside", "In a 72-year-old with isolated systolic HTN, which number is the main determiner of CV risk?", ["Systolic BP", "Diastolic BP", "Heart rate", "MAP below 70"], 0, "In adults over 60, systolic BP remains the primary determiner of CV risk; in younger patients diastolic BP is most associated."),
      Q("chain", "Rising LVEDP from LVH is transmitted backward. Which structure enlarges next?", ["Left atrium", "Right ventricle", "Aortic root first", "Pulmonary valve"], 0, "Raised LVEDP increases left atrial pressure, leading to left atrial enlargement and atrial arrhythmias."),
      Q("bedside", "Which exam finding reflects LVH from chronic HTN?", ["Displaced apical impulse or heave", "Delayed femoral pulse", "Abdominal bruit", "Pinpoint pupils"], 0, "The HTN exam includes palpating for heaves and a displaced apical impulse — signs of an enlarged, hypertrophied LV.")
    ]),

    // ------------------------------------------------------------------
    D("htn-autoregulation", "Autoregulation in the brain and kidney", "The brain and kidney normally keep their own blood flow constant across a wide range of BP; chronic HTN resets the brain's range upward and breaks the kidney's protection, so both organs become vulnerable to swings in pressure.", [
      S("idea", "The idea", "<p><strong>Cerebral autoregulation</strong> keeps brain blood flow constant when MAP is between about <strong>60 and 150 mmHg</strong>. If BP drops, brain arteries dilate to keep flow up; if BP rises, arterioles constrict to prevent hyperperfusion. It works like a cruise control for brain flow.</p><p>In <strong>chronic HTN</strong> the brain gets used to high pressure and treats it as normal: cerebral vascular resistance rises. Now a pressure that is “normal” for most people feels <em>low</em> to that brain — so dropping BP fast can cause <strong>ischemia</strong>.</p><p>In the <strong>kidney</strong>, chronic HTN scars the small arteries (sclerosis, endothelial dysfunction, impaired vasodilation). Renal autoregulation fails, and pressure inside the glomerulus starts to <strong>follow systemic BP directly</strong> — the kidney has no shield against swings.</p>"),
      S("chain", "Cause → effect", chain([
        "Normal: ↓ systemic BP → cerebral arteries dilate; ↑ BP → arterioles constrict → flow stays constant.",
        "Chronic HTN → brain adapts with ↑ cerebral vascular resistance; the set point shifts upward.",
        "BP lowered rapidly to the “normal” range → below the new set point → ↓ cerebral flow → ischemia.",
        "Kidney: chronic HTN → sclerosis of small renal arteries → impaired vasodilation → autoregulation lost.",
        "Intraglomerular pressure now varies directly with systemic pressure → glomerular damage → CKD progression."
      ]) + Tbl(["", "Normal autoregulation", "Chronic HTN"], [
        ["Brain set point", "Flow constant at MAP 60–150", "Shifted upward; ↑ cerebral vascular resistance"],
        ["Rapid BP drop", "Arteries dilate, flow preserved", "<strong>Ischemia risk</strong>"],
        ["Kidney", "Glomerular pressure buffered", "Glomerular pressure follows systemic BP"]
      ]) + HY("In long-standing HTN, lower BP slowly — over weeks — so autoregulation can reset.") + "<p>CPP = MAP − ICP: the pressure pushing blood into the brain is MAP minus the pressure inside the skull.</p>"),
      S("bedside", "Why it matters clinically", "<p><strong>Titrate slowly:</strong> the lecture states that for long-standing HTN it can be just as dangerous to lower BP too precipitously as to leave it high; let BP normalize over a few weeks as medications are gradually titrated.</p><p><strong>Rapid rise in a normotensive brain:</strong> a sudden BP spike in someone whose autoregulation is set at normal can overwhelm it → hyperperfusion, raised ICP, cerebral edema, dissection, or stroke.</p><p><strong>Kidney:</strong> this is why chronic HTN contributes to CKD progression, and why Black patients — 4× more likely to have renal complications and ESKD from HTN — need close control.</p><p>Brain end-organ clues on history and imaging: headaches, cerebral atrophy greater than expected for age, dementia.</p>"),
      S("traps", "Common traps", traps([
        "<strong>“Lower is always better, and faster is better still.”</strong> In chronic HTN, dropping BP quickly into the normal range can cause cerebral ischemia.",
        "<strong>“Autoregulation protects the hypertensive kidney.”</strong> Chronic HTN damages the small arteries, so glomerular pressure varies directly with systemic pressure.",
        "<strong>“A chronically hypertensive brain tolerates low BP better.”</strong> It is the opposite: its higher resistance makes it more prone to ischemia when flow falls."
      ]))
    ], [
      Q("chain", "In a normotensive person, systemic BP falls (MAP still above 60). Predict the cerebral arteries.", ["They dilate to keep brain flow constant", "They constrict to raise flow", "They do nothing, so flow falls proportionally", "They close completely"], 0, "Cerebral autoregulation preserves flow when BP drops by dilating brain arteries."),
      Q("chain", "A patient with 20 years of uncontrolled HTN has BP lowered from 190/110 to 120/70 within hours. Predict the brain.", ["Risk of cerebral ischemia — the brain's set point has shifted upward", "Improved cerebral flow from lower resistance", "No effect, because autoregulation covers all pressures", "Cerebral edema from hyperperfusion"], 0, "Chronic HTN raises cerebral vascular resistance; a rapid drop to normal falls below the reset range, risking ischemia."),
      Q("bedside", "How should BP be brought to goal in long-standing HTN, per the lecture?", ["Gradually over a few weeks with slow titration", "Within the first hour", "Within 24 hours using IV drugs", "It should never be lowered"], 0, "Allow BP to normalize slowly over weeks so autoregulation can return to a normal set point."),
      Q("chain", "Chronic HTN causes sclerosis of small renal arteries. What happens to intraglomerular pressure?", ["It varies directly with systemic arterial pressure", "It stays constant regardless of BP", "It falls to zero", "It varies inversely with systemic pressure"], 0, "Loss of renal autoregulation means glomerular pressure follows systemic pressure, leaving the kidney unprotected during swings."),
      Q("idea", "Across what MAP range is cerebral blood flow normally held constant?", ["About 60–150 mmHg", "About 20–60 mmHg", "About 150–250 mmHg", "Only at exactly 93 mmHg"], 0, "The lecture's cerebral autoregulation curve shows constant flow with MAP 60–150 mmHg."),
      Q("chain", "ICP rises while MAP stays the same. What happens to cerebral perfusion pressure?", ["CPP falls", "CPP rises", "CPP is unchanged", "CPP equals ICP"], 0, "CPP = MAP − ICP, so a higher ICP lowers perfusion pressure."),
      Q("bedside", "A previously normotensive person has a sudden large BP spike. Which brain complication fits the lecture?", ["Hyperperfusion with raised ICP and cerebral edema", "Cerebral ischemia from low flow", "Shift of autoregulation to a lower range", "No risk, because autoregulation is intact"], 0, "In normotensive or mildly hypertensive patients a rapid rise can cause hyperperfusion, raised ICP, cerebral edema, dissection, or stroke."),
      Q("traps", "Why is a chronically hypertensive patient more prone to cerebral ischemia when flow falls?", ["The brain adapted by increasing cerebral vascular resistance", "The brain has more collateral vessels", "The brain's autoregulation range shifted lower", "Chronic HTN dilates cerebral arteries permanently"], 0, "Chronic hypertensive patients adapt by increasing cerebral vascular resistance, making them more prone to ischemia when flow decreases.")
    ])
  ]);
}());
