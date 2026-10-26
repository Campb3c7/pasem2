/*
  Concepts: Hypertension Part III (same shape as data/diseases-endocrine.js).

  Each entry is a mechanism, not a disease: idea → cause/effect chain →
  bedside relevance → common traps, with a prediction-style question bank.
  Source: source-material/cardio-part-1/text/hypertension-part-3.md (concepts
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

  window.CARDIO_CONCEPTS_HYPERTENSION_PART3 = L("hypertension-part-3", "Hypertension Part III", [

    // ------------------------------------------------------------------
    D("htn-diuretics", "Diuretics: where they act predicts their side effects", "Each diuretic blocks sodium reabsorption at a different spot in the nephron; that location predicts its strength and whether potassium falls (thiazides, loops) or rises (potassium-sparing drugs).", [
      S("idea", "The idea", "<p>Diuretics make the kidney let go of sodium, and water follows. Less volume → lower CO → lower BP at first; later, CO normalizes and resistance falls.</p><p>The nephron is a conveyor belt with sodium pumps at several stations. Where a diuretic jams the belt decides what else changes:</p><ul><li><strong>Loop diuretics</strong> block the thick ascending limb, where most sodium excretion is controlled — strong, used for HF, edema, ascites, and CKD more than for HTN.</li><li><strong>Thiazides</strong> increase renal sodium excretion (and may vasodilate) — weaker but long-acting, preferred for HTN.</li><li><strong>Potassium-sparing</strong> drugs work at the very end of the line, where sodium is swapped for potassium. Triamterene and amiloride block the distal sodium channels; spironolactone and eplerenone block the aldosterone receptor.</li></ul>" + clar("thiazides act in the distal convoluted tubule. Loops and thiazides send extra sodium down to the late distal nephron, where sodium is reabsorbed in exchange for potassium (and H⁺) — so more K⁺ is lost in the urine. Potassium-sparing drugs block that final exchange, so K⁺ is kept.")),
      S("chain", "Cause → effect", chain([
        "Block sodium reabsorption upstream (loop or thiazide) → more sodium and water in the urine → ↓ volume.",
        "Extra sodium reaches the distal exchange site → K⁺ and H⁺ wasted → hypokalemia (and, with loops, contraction alkalosis).",
        "Overdiuresis → hypovolemia.",
        "Thiazides also: hyponatremia, hypomagnesemia, hypercalcemia, hyperuricemia (gout), hyperglycemia.",
        "Block the distal sodium channel or the aldosterone receptor → sodium lost but K⁺ retained → hyperkalemia."
      ]) + Tbl(["Diuretic", "Site / target", "Potassium", "Signature side effects"], [
        ["Thiazide (chlorthalidone, indapamide, HCTZ)", "↑ Renal Na⁺ excretion (DCT)", "<strong>↓</strong>", "↓ Na⁺, ↓ Mg²⁺, ↑ Ca²⁺, gout, ↑ glucose"],
        ["Loop (furosemide, bumetanide, torsemide)", "Thick ascending limb", "<strong>↓</strong>", "Contraction alkalosis, gout, ototoxicity"],
        ["Triamterene, amiloride", "Distal Na⁺ channels", "<strong>↑</strong>", "Hyperkalemia; triamterene crystalluria/stones"],
        ["Spironolactone, eplerenone", "Aldosterone (mineralocorticoid) receptor", "<strong>↑</strong>", "Hyperkalemia; spironolactone gynecomastia"]
      ]) + HY("Loops and thiazides lose K⁺; potassium-sparing drugs and aldosterone antagonists keep K⁺.")),
      S("bedside", "Why it matters clinically", "<ul><li><strong>Check labs:</strong> a chemistry panel 5–7 days after starting or increasing a thiazide or loop, looking for hypokalemia and hyponatremia. Loops are almost always given with potassium supplements.</li><li><strong>Avoid thiazides</strong> in gout (hyperuricemia), low serum sodium or SSRI use (hyponatremia), urinary incontinence, and as first line in diabetes (mild glucose-raising).</li><li><strong>Hyperkalemia danger</strong> with K-sparing drugs: diabetics, CKD, and patients on an ACEI or ARB.</li><li><strong>Spironolactone</strong> also binds estrogen and progesterone receptors → gynecomastia, irregular menses, impotence; <strong>eplerenone</strong> is more selective.</li><li><strong>Aldosterone antagonists</strong> are valued less as diuretics and more for blocking aldosterone on the kidney, vessels, and heart → compelling indication in HFrEF; initial diuretic for ascites from chronic liver disease.</li><li>Dose in the morning (BID no later than 5 pm) to avoid nocturnal diuresis.</li></ul>"),
      S("traps", "Common traps", traps([
        "<strong>“All diuretics drop potassium.”</strong> Potassium-sparing diuretics and aldosterone antagonists raise it.",
        "<strong>“Thiazides cause hypocalcemia like loops.”</strong> The lecture lists hyper<em>calcemia</em> for thiazides.",
        "<strong>“Loops are first-line for HTN because they're strongest.”</strong> Loops are mainly for HF, ascites, CKD, and edema; thiazides are the preferred HTN diuretic.",
        "<strong>“Spironolactone's gynecomastia comes from high potassium.”</strong> It comes from binding estrogen and progesterone receptors."
      ]))
    ], [
      Q("chain", "A thiazide sends extra sodium to the late distal nephron. Predict serum potassium.", ["Falls (hypokalemia)", "Rises (hyperkalemia)", "Unchanged", "Rises only with exercise"], 0, "Thiazides cause hypokalemia; the extra distal sodium is exchanged for potassium that is lost in the urine."),
      Q("chain", "Spironolactone blocks the aldosterone receptor. Predict serum potassium.", ["Rises", "Falls", "Unchanged", "Falls, then normalizes in 2 weeks"], 0, "Competitive mineralocorticoid-receptor inhibition decreases Na–K pumps, increasing serum K⁺ and urinary Na⁺ loss."),
      Q("bedside", "A patient with recurrent gout needs a BP medication. Which class should be avoided and why?", ["Thiazide diuretics — they cause hyperuricemia", "DHP CCBs — they raise uric acid", "ARBs — they cause gout flares", "α1 blockers — they block uric acid excretion"], 0, "Thiazides cause hyperuricemia (gout), so avoid them in patients with gout."),
      Q("traps", "A man on spironolactone develops gynecomastia. Which mechanism explains it?", ["Spironolactone also binds estrogen and progesterone receptors", "Hyperkalemia stimulates breast tissue", "Spironolactone raises cortisol", "Volume loss stimulates prolactin"], 0, "Spironolactone is less selective for the mineralocorticoid receptor; eplerenone is more selective and has fewer endocrine effects."),
      Q("chain", "A patient on lisinopril is started on amiloride. Which electrolyte problem should you anticipate?", ["Hyperkalemia", "Hypokalemia", "Hypercalcemia", "Hypernatremia"], 0, "Potassium-sparing diuretics cause hyperkalemia, particularly in patients on an ACEI or ARB, diabetics, and CKD."),
      Q("idea", "Where do loop diuretics act?", ["Thick ascending limb", "Proximal tubule", "Collecting duct aldosterone receptor", "Glomerulus"], 0, "Loops account for most sodium excretion in the thick ascending limb."),
      Q("bedside", "Which thiazide effect explains why it's not the preferred first-line drug in a diabetic?", ["Mild glucose-raising (hyperglycemia)", "Hyperkalemia", "Reflex tachycardia", "Dry cough"], 0, "Due to mild glucose-raising effects, clinicians should avoid thiazides as first line in diabetics, although they can be used."),
      Q("chain", "A heart-failure patient overdiureses on furosemide. Predict the acid–base and volume change.", ["Hypovolemia with contraction alkalosis", "Hypervolemia with acidosis", "Hypovolemia with metabolic acidosis", "No change"], 0, "Loop adverse effects include overdiuresis/hypovolemia and contraction alkalosis."),
      Q("bedside", "Why are loop diuretics almost always prescribed with potassium?", ["They cause hypokalemia", "They cause hyperkalemia", "Potassium increases their absorption", "Potassium prevents ototoxicity"], 0, "Loops waste potassium; roughly 20 mEq K⁺ per 40 mg furosemide in a healthy kidney, adjusted by chemistry panel."),
      Q("traps", "Which thiazide electrolyte effect runs opposite to the others in the lecture's list?", ["Calcium rises (hypercalcemia)", "Sodium falls", "Potassium falls", "Magnesium falls"], 0, "Thiazides lower K⁺, Na⁺, and Mg²⁺ but raise Ca²⁺.")
    ]),

    // ------------------------------------------------------------------
    D("htn-acei-arb", "ACE inhibitors and ARBs: blocking angiotensin II", "ACE inhibitors stop angiotensin II from being made and ARBs stop it from binding; less angiotensin II means less vasoconstriction and less aldosterone, which explains both their benefits and their potassium and kidney side effects.", [
      S("idea", "The idea", "<p>Angiotensin II squeezes vessels and calls for aldosterone. Two ways to shut it down:</p><ul><li><strong>ACE inhibitors</strong> (“-pril”) block conversion of angiotensin I → angiotensin II. ACE also breaks down <strong>bradykinin</strong>, so ACEIs raise bradykinin, a potent vasodilator.</li><li><strong>ARBs</strong> (“-sartan”) block angiotensin II from binding its receptors. They do not touch bradykinin.</li></ul><p>Less angiotensin II → vessels relax (↓ TPR) and less aldosterone (less sodium retention). But aldosterone is also how the body gets rid of potassium — so blocking it can push K⁺ <strong>up</strong>.</p>" + clarRx("the dry cough and angioedema of ACEIs are attributed to the bradykinin build-up. That is why ARBs, which do not raise bradykinin, cause less cough and less angioedema.")),
      S("chain", "Cause → effect", chain([
        "ACEI blocks angiotensin I → II (ARB blocks the receptor).",
        "↓ Angiotensin II → arteriolar vasodilation → ↓ TPR → ↓ BP.",
        "↓ Aldosterone → sodium loss and K⁺ retention → hyperkalemia risk (worse with CKD, diabetes, aldosterone antagonists).",
        "↓ Angiotensin II at the glomerulus → GFR falls a little → creatinine rises slightly, then improves.",
        "If the kidney depended on angiotensin II (RAS, hypovolemia from N/V/D, GI bleed, overdiuresis) → AKI.",
        "ACEI only: ↑ bradykinin → vasodilation, and the dry cough and angioedema risk."
      ]) + clar("angiotensin II normally constricts the efferent (outflow) arteriole, holding glomerular pressure up. Remove it and glomerular pressure falls — this lowers protein leak in proteinuric CKD (protective) but drops GFR when the kidney relied on it (harmful).") + Tbl(["", "ACE inhibitor", "ARB"], [
        ["Target", "Blocks angiotensin I → II", "Blocks angiotensin II receptors"],
        ["Bradykinin", "↑", "Not affected"],
        ["Cough", "Common (more in women)", "Less"],
        ["Angioedema", "Life-threatening; more in Black and Asian patients", "Lower risk; usable after ACEI angioedema with caution"],
        ["Hyperkalemia, ↑ creatinine, pregnancy", "Yes / yes / contraindicated", "Yes / yes / contraindicated"]
      ]) + HY("Less angiotensin II → less aldosterone → K⁺ goes up. ACEI-only bradykinin → cough and angioedema.")),
      S("bedside", "Why it matters clinically", "<ul><li><strong>Monitor:</strong> potassium and BUN/Cr within 5–10 days of starting or increasing (5–7 days for ARBs). Stop for persistent hyperkalemia or creatinine rising more than 30%.</li><li><strong>Nephroprotective and nephrotoxic:</strong> treatment of choice for CKD with proteinuria, yet can worsen kidney function during hypovolemic illness.</li><li><strong>Heart:</strong> reduce morbidity and mortality in HFrEF and after MI; may halt or regress LV remodeling.</li><li><strong>Pregnancy:</strong> contraindicated (risk of fetal renal agenesis).</li><li><strong>Never combine ACEI + ARB</strong> (ONTARGET): combination reduced proteinuria more but worsened major renal outcomes.</li><li><strong>Race:</strong> more effective in White and Asian patients, less effective in Black patients.</li></ul>" + clar("the lecture notes HTN in Black patients is more responsive to sodium intake. HTN that is driven more by salt and volume tends to respond better to drugs that remove volume or dilate vessels directly (thiazides, CCBs) than to RAAS blockers — but compelling indications still come first.")),
      S("traps", "Common traps", traps([
        "<strong>“ACEIs cause hypokalemia like diuretics.”</strong> They lower aldosterone, so they cause hyperkalemia.",
        "<strong>“A small creatinine rise after starting means stop the drug.”</strong> A small temporary rise is expected; stop for a rise above 30% or persistent hyperkalemia.",
        "<strong>“Switch to an ARB because ARBs cause cough too.”</strong> ARBs cause less cough (no bradykinin rise) and can be trialed after an ACEI cough.",
        "<strong>“Two RAAS blockers are better than one.”</strong> ACEI + ARB worsens major renal outcomes — absolutely not."
      ]))
    ], [
      Q("chain", "An ACE inhibitor lowers angiotensin II and aldosterone. Predict serum potassium.", ["Rises", "Falls", "Unchanged", "Falls only in diabetics"], 0, "Less aldosterone means less K⁺ excretion; hyperkalemia is a listed ACEI adverse effect, especially in CKD, diabetes, or with aldosterone antagonists."),
      Q("chain", "Why does an ACE inhibitor cause dry cough while an ARB usually does not?", ["ACEIs raise bradykinin; ARBs do not affect bradykinin", "ARBs raise bradykinin more than ACEIs", "ACEIs raise aldosterone", "ARBs block the cough reflex"], 0, "ACEIs block the enzyme that also breaks down bradykinin; ARBs act at the angiotensin II receptor and leave bradykinin alone."),
      Q("bedside", "A patient on lisinopril develops vomiting and diarrhea for three days. What kidney risk rises, and why?", ["AKI — the hypovolemic kidney depends on angiotensin II to maintain filtration", "Hyperfiltration injury from extra angiotensin II", "Kidney stones from crystalluria", "Nephrotic syndrome from bradykinin"], 0, "ACEIs can worsen kidney function during illness, primarily with hypovolemia from poor intake, N/V/D, GI bleed, or overdiuresis."),
      Q("bedside", "Creatinine rises 10% one week after starting an ACE inhibitor, and potassium is normal. What is the best interpretation?", ["An expected small rise as GFR falls, which usually improves — continue and monitor", "Renal artery stenosis — stop immediately", "Angioedema is starting", "The dose is too low"], 0, "Creatinine usually rises a little temporarily; stop for persistent hyperkalemia or a rise above 30%."),
      Q("traps", "A patient had angioedema on an ACE inhibitor. Which is correct per the lecture?", ["Never prescribe another ACEI; an ARB may be used with caution and education", "Switch to a different ACEI", "Combine an ACEI with an ARB at low dose", "ACEIs can be restarted after a month"], 0, "After ACEI angioedema, discontinue and never prescribe another ACEI; ARBs can be used with caution."),
      Q("idea", "How do ARBs lower BP?", ["They block angiotensin II from binding its receptors", "They block conversion of angiotensin I to II", "They block the aldosterone receptor", "They block renin release from JG cells"], 0, "ARBs inhibit the action of angiotensin II by blocking it from binding to AT1 and AT2 receptors."),
      Q("bedside", "Why should a woman planning pregnancy avoid ACE inhibitors and ARBs?", ["Risk of renal agenesis in the fetus", "They cause maternal gout", "They cause fetal tachycardia", "They are ineffective in pregnancy"], 0, "Both are contraindicated in pregnancy due to the risk of fetal renal agenesis."),
      Q("traps", "A colleague wants to add an ARB to an ACEI to lower proteinuria further. What did ONTARGET show?", ["Proteinuria fell more, but major renal outcomes worsened", "Both proteinuria and renal outcomes improved", "No change in proteinuria", "Mortality fell by half"], 0, "Combination therapy reduces proteinuria more than monotherapy but worsens major renal outcomes."),
      Q("chain", "Which patients are at highest risk of hyperkalemia on an ACE inhibitor?", ["CKD stage IV–V, diabetics, and those also taking an aldosterone antagonist", "Young athletes", "Patients also taking a loop diuretic", "Patients with hypokalemia from vomiting"], 0, "The lecture lists CKD IV or V, diabetes, and concurrent spironolactone or eplerenone."),
      Q("bedside", "Which angioedema features match the lecture?", ["Sudden lip, tongue, and pharynx swelling; more in Black and Asian patients; half within the first week", "Slowly progressive ankle swelling after years", "Always delayed for more than a year", "More common in White patients only"], 0, "ACEI angioedema is sudden and life-threatening; 50% occur within the first week; more common in Black and Asian patients.")
    ]),

    // ------------------------------------------------------------------
    D("htn-ccb", "Calcium channel blockers: vessels vs heart", "Calcium drives contraction in both vascular smooth muscle and heart muscle; DHP CCBs mainly relax arteries (so they cause reflex tachycardia and edema), while non-DHP CCBs mainly slow the heart (so they cause bradycardia, heart block, and HF worsening).", [
      S("idea", "The idea", "<p>Calcium entry is the “go” signal for contraction in arterial smooth muscle and heart cells, and for conduction through the SA and AV nodes. CCBs block calcium influx. Their effects split by where they act most:</p><ul><li><strong>Dihydropyridines</strong> (amlodipine, felodipine, nifedipine; nicardipine IV) act mainly on <strong>peripheral arteries</strong> → potent arteriolar vasodilation; heart-rate neutral.</li><li><strong>Non-dihydropyridines</strong> (diltiazem, verapamil) act mainly on the <strong>heart</strong> → ↓ contractility (negative inotrope) and ↓ SA/AV conduction (negative chronotrope).</li></ul><p>Both lower BP about equally; you choose based on what you want them to do (or not do) to the heart.</p>" + Mn("DHP = Dilate the Periphery", "Non-DHP = slow the Node (verapamil, diltiazem).")),
      S("chain", "Cause → effect", chain([
        "CCB blocks calcium influx across smooth-muscle and cardiac cell membranes.",
        "DHP: arteriolar vasodilation → ↓ TPR → ↓ BP.",
        "Sudden large BP drop (short-acting DHP) → baroreflex → reflex tachycardia; vasodilation also → flushing, headache, dizziness.",
        "DHP ↑ vascular permeability → peripheral edema that is not from extra volume → diuretics don't fix it.",
        "Non-DHP: ↓ SA/AV conduction → ↓ HR (useful in AF); ↓ contractility → can worsen HFrEF; with a β-blocker → additive bradycardia/AV block."
      ]) + Tbl(["", "DHP (amlodipine, nifedipine)", "Non-DHP (verapamil, diltiazem)"], [
        ["Main site", "Peripheral arterioles", "Heart (SA/AV node, myocardium)"],
        ["Heart rate", "Neutral; reflex ↑ if BP drops fast", "<strong>↓</strong>"],
        ["Contractility", "Little effect", "<strong>↓</strong>"],
        ["Signature AEs", "Edema, flushing, HA, reflex tachycardia", "Bradycardia, AV block, HF worsening, constipation (verapamil)"],
        ["Avoid in", "—", "Sick sinus, 2nd/3rd-degree AV block, acutely decompensated HFrEF"]
      ]) + HY("DHPs dilate vessels (edema, reflex tachycardia); non-DHPs slow and weaken the heart (bradycardia, block, HF).")),
      S("bedside", "Why it matters clinically", "<ul><li><strong>Compelling uses:</strong> non-DHP for <strong>AF</strong> rate control; DHP-CCBs are add-ons for CAD, DM, CKD, stroke. CCBs and thiazides work best in Black patients. Avoid non-DHPs in HFrEF.</li><li><strong>DHP edema</strong> is less common with a RAAS blocker given at the same time; if significant, the DHP may need to be stopped.</li><li><strong>Overdose (5–10× dose):</strong> even a DHP hits the AV node → bradycardia, PR prolongation, hypotension. Hyperglycemia occurs because the pancreas is prevented from releasing insulin. Mentation can stay clear until cerebral perfusion becomes critically low — recheck neuro status often.</li></ul>" + clarRx("insulin release from pancreatic β cells depends on calcium entry, which is why blocking calcium channels can raise glucose in overdose. IV calcium in overdose works by overcoming the blocked channels.")),
      S("traps", "Common traps", traps([
        "<strong>“Treat amlodipine ankle edema with a diuretic.”</strong> It comes from increased vascular permeability, not extra plasma volume, so it usually doesn't respond.",
        "<strong>“All CCBs slow the heart.”</strong> DHPs are heart-rate neutral at normal doses (and can cause reflex tachycardia); non-DHPs slow the heart.",
        "<strong>“Verapamil plus metoprolol is a safe rate-control combo.”</strong> Both slow the SA/AV node — caution for bradycardia and block.",
        "<strong>“CCB overdose patients who are talking are stable.”</strong> Mentation may stay clear despite hypotension, then deteriorate precipitously."
      ]))
    ], [
      Q("chain", "Short-acting nifedipine drops BP suddenly. Predict heart rate.", ["Reflex tachycardia", "Bradycardia", "No change", "Complete heart block"], 0, "A sudden large BP drop activates the baroreceptor reflex → reflex tachycardia; short-acting forms are rarely used."),
      Q("chain", "Verapamil acts mainly on the heart. Predict heart rate and contractility.", ["Both fall", "Both rise", "Heart rate rises, contractility falls", "Heart rate falls, contractility rises"], 0, "Non-DHP CCBs decrease SA/AV conduction (negative chronotrope) and contractility (negative inotrope)."),
      Q("traps", "A patient on amlodipine develops ankle edema. Why doesn't a diuretic usually help?", ["The edema comes from increased vascular permeability, not increased plasma volume", "Amlodipine blocks the diuretic's site of action", "The edema is from heart failure", "Diuretics raise amlodipine levels"], 0, "DHP CCBs increase vascular permeability; the edema is not from extra plasma volume, so it usually doesn't respond to diuretics."),
      Q("bedside", "A patient with HTN and atrial fibrillation needs rate control. Which CCB subclass fits, and why?", ["Non-DHP (diltiazem/verapamil) — it slows SA/AV nodal conduction", "DHP (amlodipine) — it dilates arterioles", "DHP (nifedipine) — it speeds AV conduction", "Neither — CCBs are contraindicated in AF"], 0, "Non-DHP CCBs block cardiac calcium channels, slowing AV nodal conduction; AF is their indication."),
      Q("bedside", "Which patient should NOT get verapamil?", ["A patient with second-degree AV block", "A patient with HTN and AF with normal conduction", "A Black patient with HTN", "A patient with migraine and normal EF"], 0, "Non-DHPs should not be used in bradyarrhythmias such as sick sinus syndrome or 2nd/3rd-degree AV block."),
      Q("chain", "A massive amlodipine overdose (5–10× dose). Predict the rhythm effect.", ["Bradycardia and PR prolongation from AV-node effects", "Reflex tachycardia only", "No rhythm change because DHPs spare the heart", "Atrial fibrillation"], 0, "At high doses even a DHP affects the AV node, causing bradycardia and PR prolongation plus hypotension."),
      Q("chain", "Why does CCB overdose cause hyperglycemia?", ["The pancreas is prevented from releasing insulin", "CCBs stimulate glycogenolysis via β2", "CCBs block glucose uptake in the gut", "CCBs raise cortisol"], 0, "The lecture states the pancreas is prevented from releasing insulin; insulin release depends on calcium."),
      Q("idea", "Which statement contrasts the two CCB subclasses correctly?", ["DHPs act more on peripheral vessels; non-DHPs act more on the heart", "DHPs act more on the heart; non-DHPs act more on vessels", "Both act only on veins", "Both act only on the AV node"], 0, "DHP CCBs primarily block peripheral vascular calcium channels; non-DHPs primarily block cardiac channels."),
      Q("bedside", "A patient has acutely decompensated HFrEF. Which drug should be held?", ["Diltiazem", "Amlodipine", "Furosemide", "Lisinopril"], 0, "Non-DHP CCBs decrease contractility and may worsen HF; they should not be used in acutely decompensated HFrEF.")
    ]),

    // ------------------------------------------------------------------
    D("htn-beta-blockers", "β-blockers: receptor map predicts side effects", "β1 receptors speed and strengthen the heart and release renin; β2 receptors open airways, dilate vessels, and help release insulin and glucose — so blocking them slows the heart, lowers renin, and can tighten airways and hide or worsen hypoglycemia.", [
      S("idea", "The idea", "<p>Learn the receptor map and the side effects write themselves:</p><ul><li><strong>β1</strong> (heart, kidney): ↑ HR, ↑ contractility, ↑ renin release.</li><li><strong>β2</strong> (lungs, liver, pancreas, arteriolar smooth muscle): bronchodilation, vasodilation, insulin secretion, glycogenolysis.</li></ul><p><strong>Cardioselective</strong> β-blockers (metoprolol, atenolol, bisoprolol) mainly block β1 — but selectivity is lost at higher doses. <strong>Nonselective</strong> ones (propranolol, nadolol, timolol) block both at all doses. <strong>ISA</strong> drugs (acebutolol) are partial agonists that don't lower resting HR or CO.</p><p>Hypoglycemia normally sets off the sympathetic alarm (tremor, sweating, fast heart, palpitations). A β-blocker mutes much of that alarm.</p>"),
      S("chain", "Cause → effect", chain([
        "Block β1 in the heart → ↓ HR and ↓ contractility → ↓ CO and ↓ myocardial O₂ demand.",
        "Block β1 at JG cells → ↓ renin.",
        "Block β2 in the lungs → bronchoconstriction risk → caution in asthma/COPD (any selectivity).",
        "Block β2 in the pancreas → ↓ insulin release → worse glucose metabolism.",
        "Block the sympathetic response to hypoglycemia → tremor/tachycardia/palpitations masked → unaware hypoglycemia.",
        "Stop abruptly → rebound HTN, worsening angina, or MI → taper over 1–2 weeks."
      ]) + Tbl(["Receptor blocked", "Normal job", "Predicted effect of blocking"], [
        ["β1 heart", "↑ HR, ↑ contractility", "Bradycardia, heart block, fatigue, ↓ exercise tolerance"],
        ["β1 kidney", "↑ Renin", "↓ Renin"],
        ["β2 lung", "Bronchodilation", "Bronchospasm risk"],
        ["β2 pancreas/liver", "Insulin secretion, glycogenolysis", "Glucose effects; masked hypoglycemia warning"]
      ]) + HY("Know β1 (heart, renin) vs β2 (lungs, vessels, insulin/glucose) and you can predict every β-blocker side effect.")),
      S("bedside", "Why it matters clinically", "<ul><li><strong>Not first line for HTN</strong> (no shown reduction in stroke or mortality) — unless a compelling indication: post-MI, HFrEF or any LV dysfunction (EF &lt; 50%), CAD, AF. Compelling indications trump race.</li><li><strong>Diabetics:</strong> avoid for HTN alone because of ↓ insulin release and masked hypoglycemia.</li><li><strong>HFrEF:</strong> start low, titrate slowly — they depress contractility and HR.</li><li><strong>Nonselective uses:</strong> migraine prophylaxis, anxiety, essential tremor, portal HTN, thyrotoxicosis.</li><li><strong>Carvedilol / labetalol</strong> (α1 + β): α1 blockade adds vasodilation → lowers standing BP more → more orthostasis. Carvedilol has HFrEF mortality benefit; labetalol is used in pregnancy.</li><li><strong>Overdose:</strong> hypotension, bradyarrhythmia, confusion, hyperkalemia, hypoglycemia; lipophilic propranolol and carvedilol cross the BBB → seizures, delirium. Glucagon augments contractility; IV calcium raises HR; high-dose insulin improves contractility; lipid emulsion binds lipophilic drugs.</li></ul>" + clar("the hypoglycemia in β-blocker overdose fits the receptor map — β2 normally mediates glycogenolysis, so blocking it limits the liver's glucose release.")),
      S("traps", "Common traps", traps([
        "<strong>“Cardioselective means safe in asthma.”</strong> Selectivity is lost at higher doses; use caution in asthma/COPD regardless.",
        "<strong>“A diabetic on a β-blocker will feel hypoglycemia coming.”</strong> The sympathetic warning signs may be absent.",
        "<strong>“β-blockers are a good first-line HTN drug in everyone.”</strong> They are later-line unless there is a compelling cardiac indication.",
        "<strong>“ISA β-blockers are the most cardioprotective.”</strong> They are less cardioprotective and contraindicated post-MI."
      ]))
    ], [
      Q("chain", "A nonselective β-blocker is given to a patient with asthma. Predict the airway effect.", ["Bronchoconstriction risk from blocking β2", "Bronchodilation from blocking β1", "No airway effect", "Improved asthma control"], 0, "β2 stimulation causes bronchodilation; blocking it can worsen bronchospasm."),
      Q("chain", "A diabetic on metoprolol becomes hypoglycemic. Predict the warning symptoms.", ["Tremor, tachycardia, and palpitations may be blunted or absent", "Warning symptoms are exaggerated", "Only tachycardia increases", "The patient becomes hyperglycemic instead"], 0, "Hypoglycemia activates the sympathetic system; β-blockade blocks the target receptors, so warning signs may be absent."),
      Q("chain", "Why do β-blockers worsen glucose metabolism?", ["They decrease insulin release from pancreatic β cells", "They increase insulin release", "They block glucose absorption", "They raise aldosterone"], 0, "β2 receptors mediate insulin secretion; blocking them decreases insulin release."),
      Q("bedside", "A patient wants to stop atenolol abruptly. What risk should you explain?", ["Rebound HTN, worsening angina, or MI — taper over 1–2 weeks", "Profound hypotension", "Hypokalemia", "No risk — stop any time"], 0, "Abrupt discontinuation may cause rebound HTN, worsening angina, or MI; wean over 1–2 weeks."),
      Q("bedside", "A Black patient with HTN had an MI last year. Which drug class should be part of the regimen?", ["A β-blocker — the compelling indication outweighs race-based efficacy", "Only a thiazide", "Only a DHP CCB", "An α1 blocker"], 0, "Compelling indications trump all else; post-MI patients get a β-blocker plus ACEI/ARB regardless of race."),
      Q("traps", "A patient on high-dose metoprolol develops wheezing. Why, if metoprolol is cardioselective?", ["β1 selectivity is lost at higher doses, so β2 in the lungs is also blocked", "Metoprolol stimulates β2", "Metoprolol causes angioedema", "Wheezing is from fluid overload"], 0, "Cardioselective β-blockers may also target lung β2 receptors at higher doses."),
      Q("chain", "Carvedilol adds α1 blockade to β blockade. Predict its effect on standing BP versus a pure β-blocker.", ["Lowers standing BP more → more orthostatic hypotension", "Raises standing BP", "Same orthostatic effect as a pure β-blocker", "Only lowers supine BP"], 0, "α1 blockade causes peripheral vasodilation; carvedilol lowers standing BP more than supine, producing more orthostasis."),
      Q("bedside", "Why does propranolol overdose cause more seizures and delirium than atenolol overdose?", ["Propranolol is lipophilic and crosses the blood–brain barrier", "Propranolol blocks calcium channels", "Atenolol is more potent", "Propranolol causes hyperglycemia"], 0, "Propranolol and carvedilol are the most lipophilic β-blockers and cause the most neurotoxicity."),
      Q("idea", "Which receptor pair matches its location and effect?", ["β1 in heart and kidney: ↑ HR, ↑ contractility, ↑ renin", "β1 in lungs: bronchodilation", "β2 in heart: ↑ HR", "β2 in kidney: ↑ renin"], 0, "β1 receptors in the heart and kidney increase HR, contractility, and renin; β2 receptors in lungs, liver, pancreas, and arterioles."),
      Q("bedside", "In β-blocker overdose, why is glucagon given?", ["It augments cardiac contractility", "It blocks β2 receptors", "It lowers potassium", "It slows the heart further"], 0, "IV glucagon augments contractility; IV calcium increases HR; high-dose insulin also improves contractility.")
    ]),

    // ------------------------------------------------------------------
    D("htn-sympatholytics-vasodilators", "α1 blockers, central α2 agonists, and direct vasodilators", "Drugs that relax vessels or turn down sympathetic outflow lower BP, but the body fights back: orthostasis when standing reflexes are blocked, reflex tachycardia and fluid retention when arteries dilate, and rebound when clonidine stops suddenly.", [
      S("idea", "The idea", "<p>Three later-line options, each pulling a different lever:</p><ul><li><strong>α1 blockers</strong> (terazosin, doxazosin, prazosin) block α1 on veins and arteries → vasodilation; also relax the <strong>prostate</strong> so urine flows more easily.</li><li><strong>Central α2 agonists</strong> (clonidine, methyldopa, guanfacine) stimulate α2 in the brain → ↓ sympathetic outflow, ↑ vagal tone. Think of it as turning down the master volume knob for the sympathetic system.</li><li><strong>Direct arterial vasodilators</strong> (hydralazine, minoxidil) relax arterial smooth muscle directly with little venous effect.</li></ul><p>The body's compensations (baroreflex, RAAS) explain much of the side-effect list.</p>"),
      S("chain", "Cause → effect", chain([
        "α1 blockade → arterial and venous dilation → ↓ BP; on standing, the vessels can't constrict → orthostatic hypotension, first-dose syncope.",
        "Central α2 agonism → ↓ sympathetic outflow → ↓ BP and bradycardia; abrupt stop → rebound HTN.",
        "Direct arterial vasodilation → ↓ TPR → baroreflex → reflex tachycardia → ↑ O₂ demand → angina in CAD.",
        "Vasodilators and α2 agonists → sodium and water retention → edema (often paired with a diuretic)."
      ]) + clar("when arterial pressure falls, the kidney's renin response (and sympathetic reflexes) work to restore pressure and volume — this compensation is why vasodilators retain sodium and water and are combined with diuretics.") + Tbl(["Drug", "Lever", "Predictable side effects", "Extra use"], [
        ["α1 blocker", "Arterial + venous dilation", "Orthostasis, 1st-dose syncope, edema — dose at bedtime", "BPH"],
        ["Clonidine / methyldopa", "↓ Central sympathetic outflow", "Rebound HTN, bradycardia, orthostasis, drowsiness, dry mouth, edema", "Alcohol withdrawal; methyldopa in pregnancy; clonidine in ESRD"],
        ["Hydralazine / minoxidil", "Direct arterial dilation", "Reflex tachycardia, Na/water retention, angina; drug-induced lupus (hydralazine); hair growth (minoxidil)", "HF combo, CKD/ESRD"]
      ]) + HY("Dilate arteries → reflex tachycardia + fluid retention. Block α1 → orthostasis. Stop clonidine suddenly → rebound HTN.")),
      S("bedside", "Why it matters clinically", "<ul><li><strong>α1 blockers</strong> are not appropriate monotherapy but treat HTN with comorbid BPH; bedtime dosing limits orthostasis; watch older patients.</li><li><strong>Clonidine</strong> counteracts alcohol withdrawal because withdrawal symptoms are driven by increased sympathetic CNS tone. It is strong and safe in renal failure. Compliance is hard (BID–TID or a weekly patch), and missed doses risk rebound.</li><li><strong>Clonidine overdose</strong> looks like an opioid overdose: pinpoint pupils, depressed consciousness, hypotension, respiratory depression, plus hypothermia — treated with naloxone, fluids, atropine, pacing, pressors.</li><li><strong>Hydralazine</strong> is described as heart-rate neutral, but excessive vasodilation can still trigger reflex tachycardia; use caution in CAD (angina, vascular steal). A loop diuretic helps offset fluid retention. Hydralazine is safe in CKD/AKI and ESRD; minoxidil is used for difficult HTN in renal failure.</li></ul>"),
      S("traps", "Common traps", traps([
        "<strong>“α1 blockers only dilate arteries.”</strong> They dilate veins and arteries — venous pooling on standing is why orthostasis is common.",
        "<strong>“Clonidine is an α2 blocker.”</strong> It is an α2 <em>agonist</em> acting in the brain to reduce sympathetic outflow.",
        "<strong>“Pinpoint pupils and coma always mean opioids.”</strong> Clonidine overdose presents the same way, with hypothermia.",
        "<strong>“Direct vasodilators lower BP without any counter-response.”</strong> Reflex tachycardia and sodium/water retention are expected."
      ]))
    ], [
      Q("chain", "Doxazosin is taken for the first time in the morning, and the patient faints an hour later. Why?", ["First-dose phenomenon: α1 blockade of veins and arteries causes orthostatic hypotension", "Rebound HTN", "Reflex bradycardia", "Hyperkalemia"], 0, "α1 blockers can cause transient dizziness, faintness, or syncope within 1–3 hours of the first dose; bedtime dosing limits orthostasis."),
      Q("bedside", "An older man has HTN and symptomatic BPH. Which add-on treats both, and how?", ["An α1 blocker — vasodilation lowers BP and prostate α1 blockade eases urine flow", "A thiazide — it increases urine flow", "Clonidine — it relaxes the bladder", "Hydralazine — it shrinks the prostate"], 0, "α1 blockers dilate vessels and block α1 receptors on the prostate."),
      Q("chain", "How does clonidine lower blood pressure?", ["Stimulates central α2 receptors → ↓ sympathetic outflow and ↑ vagal tone", "Blocks peripheral α1 receptors", "Blocks β1 receptors", "Blocks angiotensin II"], 0, "Central α2 agonists stimulate α2 receptors in the brain, reducing sympathetic outflow and increasing vagal tone."),
      Q("bedside", "Why does clonidine help in alcohol withdrawal?", ["It counteracts the increased sympathetic CNS tone that drives withdrawal symptoms", "It replaces alcohol at GABA receptors", "It speeds alcohol metabolism", "It lowers potassium"], 0, "Clonidine directly counteracts withdrawal symptoms mediated by increased sympathetic CNS tone."),
      Q("bedside", "A child is found drowsy with pinpoint pupils, slow breathing, hypotension, and hypothermia; a grandparent's clonidine is missing. What explains the picture?", ["Clonidine overdose mimicking an opioid overdose", "β-blocker overdose with hyperglycemia", "CCB overdose with clear mentation", "Hydralazine-induced lupus"], 0, "Clonidine overdose presents like opioid overdose (pinpoint pupils, depressed LOC, respiratory depression) plus hypothermia."),
      Q("chain", "Hydralazine relaxes arteries directly. Predict the heart rate and fluid response.", ["Reflex tachycardia with sodium and water retention", "Bradycardia with diuresis", "No change in rate, with dehydration", "Heart block with hypokalemia"], 0, "Excessive vasodilation causes reflex tachycardia, and sodium/water retention causes edema; a loop diuretic can minimize it."),
      Q("bedside", "Why use caution with direct vasodilators in a patient with CAD?", ["They can cause angina (vascular steal, reflex tachycardia)", "They cause bronchospasm", "They cause hyperkalemia", "They block the AV node"], 0, "Direct arterial vasodilators may cause angina and vascular steal; reflex tachycardia raises O2 demand."),
      Q("idea", "Which central α2 agonist is one of the safest in pregnancy?", ["Methyldopa", "Clonidine patch", "Guanfacine", "Minoxidil"], 0, "Methyldopa is one of the safest drugs for pregnant hypertensives and is rarely used otherwise."),
      Q("traps", "A patient on hydralazine develops joint pain, rash, and a positive ANA. Which adverse effect is this?", ["Drug-induced lupus", "Angioedema", "Excessive hair growth", "First-dose phenomenon"], 0, "Hydralazine is known to cause drug-induced lupus; minoxidil causes excessive hair growth.")
    ]),

    // ------------------------------------------------------------------
    D("htn-compelling-indications", "Choosing drugs by mechanism: compelling indications", "Pick the antihypertensive whose mechanism also treats the patient's other disease — and avoid the one whose side effects would worsen it.", [
      S("idea", "The idea", "<p>First-line drugs for uncomplicated HTN are <strong>ACEI/ARB, CCB, or thiazide</strong>. But many patients have a second disease that HTN caused or travels with — a <strong>compelling indication</strong>. In those, a specific class has proven survival benefit and goes first.</p><p>The logic isn't a list to memorize: it follows from the mechanisms you already know. A failing heart is harmed by RAAS and sympathetic overdrive, so block them. A leaky glomerulus is protected by lowering its pressure, so use an ACEI/ARB. A gouty patient shouldn't get a drug that raises uric acid.</p>"),
      S("chain", "Cause → effect", chain([
        "Identify the comorbidity (HF, post-MI, CAD, AF, DM, CKD/proteinuria, stroke, pregnancy, gout, BPH).",
        "Ask: which drug's mechanism helps that disease? → choose it.",
        "Ask: which drug's side effects worsen it? → avoid it.",
        "Stage 2 (≥140/≥90): start two drugs at low dose, ideally a fixed-dose combination — never ACEI + ARB together.",
        "Not at goal on 3 drugs including a thiazide → resistant HTN → check adherence and interfering drugs, add a 4th (e.g., aldosterone antagonist), consider secondary work-up."
      ]) + Tbl(["Condition", "Choose (mechanism)", "Avoid (mechanism)"], [
        ["HFrEF", "ACEI/ARB + β-blocker + aldosterone antagonist + diuretic (block RAAS/SNS; offload volume)", "Non-DHP CCB (negative inotrope)"],
        ["Post-MI", "β-blocker + ACEI/ARB", "ISA β-blocker"],
        ["Atrial fibrillation", "β-blocker or non-DHP CCB (slow AV node), then ACEI/ARB", "—"],
        ["Diabetes", "ACEI/ARB, then DHP-CCB or thiazide", "β-blocker without indication (↓ insulin, masked hypoglycemia); thiazide as first line (↑ glucose)"],
        ["CKD / proteinuria", "ACEI/ARB", "ACEI + ARB together"],
        ["Pregnancy potential", "Thiazide, DHP-CCB, BB (labetalol), methyldopa", "ACEI/ARB (renal agenesis)"],
        ["Gout, hyponatremia, SSRI use, incontinence", "Other first-line classes", "Thiazide (↑ uric acid, ↓ Na⁺, diuresis)"],
        ["BPH", "α1 blocker add-on", "—"],
        ["Advanced CKD / ESRD", "CCB, BB, direct vasodilators, α2 agonists (safe in ESRD)", "—"]
      ]) + HY("Compelling indications trump everything else, including race-based efficacy.")),
      S("bedside", "Why it matters clinically", "<p><strong>Why combine?</strong> Combination therapy lowers BP more than monotherapy, gets to goal faster, reduces dose-dependent side effects, and improves adherence. The common 3-drug regimen (ACEI or ARB + CCB + thiazide) controls about 80% of patients.</p><p>Thiazide efficacy improves with an ACEI or ARB, and DHP edema is less common with a RAAS blocker.</p>" + clarRx("a diuretic's volume loss activates the RAAS, which pushes BP back up; adding an ACEI/ARB blocks that counter-response, so the two drugs complement each other.") + "<p><strong>Race:</strong> CCBs and thiazides are more effective in Black patients; ACEI/ARBs first in White or non-Black patients under 60. <strong>Older adults:</strong> start low, go slow with a single agent (this also respects autoregulation).</p>"),
      S("traps", "Common traps", traps([
        "<strong>“Black patients shouldn't get β-blockers or ACEIs.”</strong> They are less effective for HTN alone, but compelling indications (post-MI, HFrEF, CKD) still come first.",
        "<strong>“Two RAAS blockers count as good combination therapy.”</strong> Never combine an ACEI and an ARB.",
        "<strong>“Resistant HTN means the drugs don't work — add more.”</strong> First confirm adherence, home readings, and interfering substances (NSAIDs, alcohol, decongestants), then add a 4th drug or look for a secondary cause.",
        "<strong>“β-blockers are first line because they're cardioprotective.”</strong> Without a compelling cardiac indication they are later-line and haven't been shown to reduce stroke or HTN mortality."
      ]))
    ], [
      Q("bedside", "A patient with HTN and HFrEF needs another BP drug. Which CCB should be avoided, and why?", ["A non-DHP CCB — it decreases contractility", "A DHP CCB — it slows the AV node", "All CCBs — they raise potassium", "None — CCBs are first line in HFrEF"], 0, "Non-DHP CCBs are negative inotropes that may worsen HF; avoid them in HFrEF."),
      Q("bedside", "A 50-year-old with diabetes and microalbuminuria has stage 1 HTN. Which class is first?", ["ACEI or ARB", "β-blocker", "Thiazide diuretic", "α1 blocker"], 0, "For DM and CKD/proteinuria, an ACEI or ARB is first, then a DHP-CCB or thiazide."),
      Q("chain", "A patient on chlorthalidone still isn't at goal. Why does adding an ACEI or ARB work especially well?", ["The diuretic's volume loss activates RAAS, and the ACEI/ARB blocks that counter-response", "The ACEI blocks the diuretic's side effects completely", "Both drugs act at the same nephron site", "ACEIs increase thiazide absorption"], 0, "Thiazide efficacy improves with an ACEI or ARB; blocking the RAAS response to volume loss explains the synergy."),
      Q("bedside", "A 28-year-old woman planning pregnancy has stage 2 HTN. Which pair should be avoided?", ["ACEI and ARB", "Thiazide and DHP-CCB", "Labetalol and nifedipine", "Methyldopa and labetalol"], 0, "Pregnancy potential: no ACEI or ARB (renal agenesis); thiazides, DHP-CCBs, and β-blockers are okay."),
      Q("bedside", "A patient with HTN has gout and takes an SSRI. Which class should be avoided?", ["Thiazide diuretics", "DHP CCBs", "ARBs", "ACE inhibitors"], 0, "Gout (hyperuricemia) and SSRI use or low sodium (hyponatremia) are reasons to avoid thiazides."),
      Q("idea", "What makes an indication 'compelling'?", ["A high-risk comorbidity where a specific drug class has evidence-based survival benefit", "Any patient preference for a drug", "The cheapest drug available", "A BP above 180/120"], 0, "Compelling indications are high-risk conditions that are sequelae of or associated with HTN, where a class has survival benefit."),
      Q("bedside", "A patient has BP 152/96 at diagnosis with no comorbidities. How should drug therapy start?", ["Two drugs at low dose, ideally a fixed-dose combination, plus lifestyle changes", "One drug only, after 6 months of lifestyle change", "An ACEI plus an ARB", "No drugs until end-organ damage appears"], 0, "Stage 2 HTN: start dual therapy (not ACEI + ARB) with TLC to reach goal faster with fewer dose-dependent side effects."),
      Q("chain", "BP is above goal on max doses of an ARB, amlodipine, and chlorthalidone, and adherence is confirmed. What is the next step per the lecture?", ["Add a 4th drug such as an aldosterone antagonist and consider a secondary-HTN work-up", "Add an ACE inhibitor", "Stop all drugs and restart", "Switch the thiazide to a loop diuretic only"], 0, "Resistant HTN: ensure compliance and no interfering intake, then add a 4th drug (aldosterone antagonist, BB, central agent, α-blocker, or vasodilator) and consider specialist referral or secondary work-up."),
      Q("traps", "A Black patient with HTN has HFrEF. A student says to avoid β-blockers because they work poorly in Black patients. What is correct?", ["Use the β-blocker — compelling indications trump race-based efficacy", "Avoid β-blockers and use only a thiazide", "Use a non-DHP CCB instead", "Use an α1 blocker instead"], 0, "β-blockers are less effective for HTN alone in Black patients, but compelling indications like HF, prior MI, or LV dysfunction come first."),
      Q("bedside", "A patient with HTN and AF needs a drug that also controls ventricular rate. Which option fits?", ["β-blocker or non-DHP CCB", "DHP CCB", "Thiazide", "Hydralazine"], 0, "For AF, the lecture lists a β-blocker or non-DHP CCB first, which slow AV nodal conduction.")
    ])
  ]);
}());
