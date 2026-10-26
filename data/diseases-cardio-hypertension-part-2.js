/*
  Cardio Part 1 Diseases tool: Hypertension Part II entries.
  Data shape: lecture -> disease -> sections (reference) + questions (practice bank).
  Sources: source-material/cardio-part-1/text/hypertension-part-1/2/3.md. Each entry
  sits with the deck that introduces it; an entry keeps its full path (diagnosis
  through treatment) even when a later deck teaches part of it, so question ids
  and saved progress stay intact. Hypertensive Crisis has its own file.

  Question ids are "<disease id>|<index>" and progress is saved against them:
  only APPEND questions to a disease; never insert, delete, or reorder.
  `correct` is zero-based; the engine shuffles answer order every time.
*/
(function () {
  "use strict";

  var H = window.DiseaseContent;
  var Tbl = H.Tbl, HY = H.HY, Mn = H.Mn, S = H.S, Q = H.Q, D = H.D, L = H.L;

  function C(text) { return "<p><em>Clarification (standard reference):</em> " + text + "</p>"; }

window.CARDIO_DISEASES_HYPERTENSION_PART2 = L("hypertension-part-2", "Hypertension Part II", [

    // ------------------------------------------------------------------
    D("htn-target-organ-damage", "Hypertensive Target-Organ Damage (Heart, Brain, Kidney)", "Complicated hypertension: years of high afterload stiffen arteries, thicken the left ventricle (LVH → HFpEF → HFrEF), and reset cerebral and renal autoregulation. Look for an S4, displaced apex, LVH on ECG, retinopathy, and CKD.", [
      S("natural-history", "Natural History and Vascular Remodeling", Tbl(["Phase", "What is happening"], [
        ["Prehypertension", "Asymptomatic ↑ cardiac output; intermittently elevated BP"],
        ["Early HTN", "Persistently ↑ peripheral resistance"],
        ["Established HTN", "Vascular remodeling; progressive damage"],
        ["<strong>Complicated HTN</strong>", "<strong>End-organ damage</strong>"]
      ]) + "<p><strong>Vascular remodeling:</strong> chronic HTN ↑ afterload → <strong>stiffer, less compliant arteries</strong> → higher systolic BP and a <strong>wider pulse pressure</strong>.</p><p><strong>Complications:</strong> CKD progression, LVH, HF (systolic and diastolic), ischemic stroke, intracerebral hemorrhage, ischemic heart disease, and hypertensive retinopathy.</p>" + HY("Stiff arteries = high systolic, normal-to-low diastolic, wide pulse pressure — the isolated systolic HTN of older adults.")),
      S("heart", "Hypertensive Heart Disease", "<p>High afterload <strong>reduces coronary perfusion</strong> to an overworked myocardium and <strong>raises myocardial O2 demand</strong> → myocytes hypertrophy (<strong>LVH</strong>) so the heart can pump against high aortic pressure.</p><ol><li><strong>Diastolic dysfunction comes first</strong>: the stiff, thick LV relaxes incompletely → ↑ LVEDP → ↑ left atrial pressure (<strong>HFpEF</strong>, LA enlargement)</li><li>LVH encroaches on the cavity → limits filling and stroke volume</li><li>Long-preserved systolic function fails → <strong>HFrEF</strong></li><li>Aortic root dilation and valve incompetence, atrial and ventricular arrhythmias, ischemic heart disease/cardiomyopathy</li></ol><p>LVH is associated with an increased risk of premature death. Exam: heave, <strong>displaced apical impulse, S4</strong>, rales. Tests: ECG (LVH), echo (diastolic/systolic dysfunction, wall motion).</p>" + HY("In hypertensive heart disease, diastolic dysfunction (HFpEF) appears before systolic failure (HFrEF).")),
      S("brain", "The Brain: Cerebral Autoregulation", "<p><strong>Cerebral autoregulation</strong> keeps cerebral blood flow constant across a <strong>MAP of about 60–150 mmHg</strong>: arterioles dilate when BP falls and constrict when BP rises. <strong>CPP = MAP − ICP</strong>.</p><ul><li>In a normotensive or mildly hypertensive patient, a <strong>rapid BP rise</strong> can cause hyperperfusion, ↑ ICP, cerebral edema, carotid/cerebral dissection, ischemic or hemorrhagic stroke.</li><li>With <strong>chronic HTN</strong>, the brain adapts to high pressures (↑ cerebral vascular resistance; the curve shifts right) — so dropping BP quickly into the normal range causes <strong>cerebral ischemia</strong>.</li><li>Therefore lower BP in long-standing HTN <strong>gradually over a few weeks</strong> so autoregulation can reset.</li></ul><p>Chronic damage: headaches, cerebral atrophy greater than expected for age, dementia (vascular/Alzheimer’s risk 2–4×).</p>" + HY("For long-standing HTN, lowering BP too fast is as dangerous as leaving it high — titrate over weeks.")),
      S("kidney", "The Kidney", "<p>Chronic HTN causes <strong>sclerosis of small renal arteries</strong> → endothelial dysfunction and impaired vasodilation → <strong>loss of renal autoregulation</strong>, so intraglomerular pressure varies directly with systemic BP and the glomerulus is unprotected from BP swings.</p><ul><li><strong>Glomerular disease</strong> (nephrotic/nephritic): HTN driven mainly by <strong>volume expansion</strong></li><li><strong>Renal vascular disease (RAS)</strong>: near-constant <strong>RAAS activation</strong> from ischemia</li><li><strong>Chronic renal failure</strong>: volume expansion + RAAS activation together</li></ul><p>Black patients are <strong>4×</strong> as likely to develop renal complications and ESKD from HTN. Detect with creatinine/eGFR and urine protein (microalbuminuria).</p>" + HY("Once renal autoregulation is lost, every BP swing is transmitted straight to the glomerulus.")),
      S("detection", "Finding Target-Organ Damage", Tbl(["Organ", "History", "Exam / tests"], [
        ["Heart", "Chest pain, dyspnea, fatigue, leg swelling", "S4, heave, displaced apex; ECG/echo for LVH, diastolic or systolic dysfunction"],
        ["Brain", "Headaches, TIA/stroke, cognitive decline", "Neuro exam; atrophy on CT/MRI"],
        ["Kidney", "Oliguria, hematuria, flank pain", "Creatinine/eGFR, urine protein"],
        ["Vessels", "Extremity pain, hair loss, cool pale limbs", "Pulses, bruits (PAD)"],
        ["Eye", "Visual change", "Cotton wool spots, AV nicking, arteriolar narrowing, hemorrhages, exudates, papilledema"]
      ]) + "<p>Known target-organ damage lowers the single-visit diagnostic threshold to <strong>≥160/≥100</strong>.</p>")
    ], [
      Q("natural-history", "What happens to the arteries with chronic uncontrolled hypertension?", ["They stiffen, raising systolic BP and widening pulse pressure", "They become more compliant, lowering systolic BP", "They dilate, lowering diastolic BP only", "They are unaffected until hypertensive emergency"], 0, "Chronic HTN increases arterial wall stiffness (less compliance), raising systolic BP and widening pulse pressure."),
      Q("natural-history", "Which stage of the natural history of hypertension is defined by end-organ damage?", ["Complicated hypertension", "Prehypertension", "Early hypertension", "Established hypertension"], 0, "Prehypertension: ↑ CO; early: ↑ peripheral resistance; established: vascular remodeling; complicated: end-organ damage."),
      Q("heart", "Which cardiac abnormality appears first in hypertensive heart disease?", ["Diastolic dysfunction from a stiff, hypertrophied LV", "Systolic dysfunction with low ejection fraction", "Aortic root dilation", "Ventricular tachycardia"], 0, "The thick LV relaxes incompletely, raising LVEDP — diastolic dysfunction (HFpEF) comes before systolic failure."),
      Q("heart", "Why does the left ventricle hypertrophy in chronic hypertension?", ["To pump against persistently high afterload", "Because preload is chronically low", "Because coronary blood flow is increased", "Because of right ventricular failure"], 0, "Increased afterload raises O2 demand and lowers coronary perfusion; myocytes hypertrophy so the LV can pump against the high aortic pressure."),
      Q("heart", "A 64-year-old with long-standing HTN has a laterally displaced apical impulse and an S4. What do these findings suggest?", ["Left ventricular hypertrophy from hypertensive heart disease", "Coarctation of the aorta", "Pheochromocytoma", "Primary hyperaldosteronism"], 0, "A heave, displaced apex, and S4 reflect a stiff, hypertrophied LV — target-organ damage in the heart."),
      Q("heart", "As LVH progresses, how does it eventually cause systolic failure?", ["The thickened wall encroaches on the cavity, limiting filling and stroke volume", "It causes mitral stenosis", "It lowers afterload", "It increases coronary perfusion pressure"], 0, "LVH impinges on the cavity, limiting diastolic filling and stroke volume until the long-preserved systolic function fails (HFrEF)."),
      Q("brain", "Over what MAP range does cerebral autoregulation keep cerebral blood flow constant?", ["About 60–150 mmHg", "About 20–60 mmHg", "About 150–250 mmHg", "About 100–120 mmHg only"], 0, "Cerebral flow is constant across a MAP of about 60–150 mmHg; chronic HTN shifts this range upward."),
      Q("brain", "A patient with long-standing BP around 180/105 is started on three drugs and is 118/70 two days later, now confused and dizzy. What explains this?", ["Cerebral hypoperfusion — autoregulation had reset to higher pressures", "Hypertensive encephalopathy from hyperperfusion", "Drug-induced lupus", "White coat effect"], 0, "Chronic HTN raises cerebral vascular resistance; rapid lowering into the normal range causes ischemia. Lower BP gradually over weeks."),
      Q("brain", "Which equation describes cerebral perfusion pressure?", ["CPP = MAP − ICP", "CPP = ICP − MAP", "CPP = CO × TPR", "CPP = SBP − DBP"], 0, "Cerebral perfusion pressure equals mean arterial pressure minus intracranial pressure."),
      Q("kidney", "What happens to renal autoregulation in chronic hypertension?", ["It is disrupted, so intraglomerular pressure varies directly with systemic BP", "It becomes more efficient, protecting the glomerulus", "It is unaffected because the kidney has its own blood supply", "It only fails during hypotension"], 0, "Sclerosis of small renal arteries impairs vasodilation and autoregulation, leaving the glomerulus unprotected during BP swings."),
      Q("kidney", "In a patient with nephrotic or nephritic syndrome, what mainly drives the hypertension?", ["Volume expansion", "Renin-secreting tumor", "Catecholamine excess", "Sympathetic overactivity from hypoxia"], 0, "Volume expansion drives HTN in glomerular disease; RAAS activation drives it in renal vascular disease; both combine in chronic renal failure."),
      Q("kidney", "Compared with White patients, how much more likely are Black patients to develop ESKD from hypertension?", ["About 4 times", "About 1.3 times", "About 10 times", "No difference"], 0, "Black patients are 4 times as likely to have renal complications and ESKD from HTN, with 1.3× nonfatal and 1.8× fatal stroke risk."),
      Q("detection", "Which finding is an eye manifestation of hypertensive target-organ damage?", ["Arteriolar narrowing with cotton wool spots", "Lens dislocation", "Kayser–Fleischer rings", "Roth spots"], 0, "Hypertensive retinopathy shows cotton wool spots, AV nicking, arteriolar narrowing, hemorrhages, exudates, and papilledema.")
    ]),

    // ------------------------------------------------------------------
    D("htn-drug-induced", "Drug- and Substance-Induced Hypertension", "Hypertension caused or worsened by a medication, supplement, food, or street drug — NSAIDs, decongestants, OCPs, triptans, alcohol, cocaine, meth, licorice, St. John’s wort — or by stopping a beta-blocker or clonidine abruptly. Always take an OTC and substance history.", [
      S("prescription", "Prescription and OTC Medications", Tbl(["Drug", "Teaching point"], [
        ["<strong>NSAIDs, COX-2 inhibitors</strong>", "Raise BP ~5 mmHg on average; avoid in borderline or elevated BP"],
        ["<strong>Pseudoephedrine / ephedra</strong>", "Sympathomimetic decongestants"],
        ["<strong>Estrogens / high-dose OCPs</strong>", "Ask about oral contraceptives in every new hypertensive"],
        ["<strong>Migraine meds (triptans)</strong>", "Listed cause"],
        ["Psych meds", "SNRIs, tricyclic antidepressants"],
        ["Others", "Carbamazepine, metoclopramide"]
      ]) + C("NSAIDs block renal prostaglandins and cause sodium/water retention; estrogen raises hepatic angiotensinogen; triptans are 5-HT1B/1D agonists that vasoconstrict.")),
      S("substances", "Alcohol, Street Drugs, and Natural Products", Tbl(["Substance", "Teaching point"], [
        ["<strong>Alcohol</strong>", "Chronic use is a <strong>common, hard-to-treat cause</strong>; &gt;2 drinks/day (40 g) or binges; ↑ plasma catecholamines"],
        ["<strong>Cocaine, methamphetamine</strong>", "Illicit sympathomimetics; cocaine <em>withdrawal</em> also raises BP"],
        ["<strong>St. John’s wort</strong>", "Herbal product on the list"],
        ["<strong>Black licorice</strong>", "Lowers K+ and raises BP"],
        ["Sodium", "Dietary cause"],
        ["Others", "Ephedra (ma-huang), “herbal ecstasy,” phenylpropanolamine analogs, nicotine and narcotic withdrawal, anabolic steroids, methylphenidate, phencyclidine, ketamine, ergot-containing herbals"]
      ]) + C("St. John’s wort has MAO-inhibitor–like activity and induces CYP450 enzymes, which can lower levels of co-prescribed drugs, including some antihypertensives.")),
      S("withdrawal", "Dangerous Drug Situations", "<ul><li><strong>Abrupt discontinuation of a beta-blocker</strong> → rebound HTN, worsening angina, or MI (taper over 1–2 weeks)</li><li><strong>Abrupt discontinuation of clonidine</strong> (central α2-agonist) → <strong>rebound HTN</strong>, a significant risk</li><li><strong>Beta-blocker without an alpha-blocker first</strong> in cocaine-induced HTN or pheochromocytoma</li></ul>" + HY("Never stop clonidine or a beta-blocker abruptly; never give a beta-blocker alone for cocaine-induced HTN.")),
      S("management", "Approach", "<p>Take a medication, OTC, supplement, and substance history at diagnosis and when BP becomes resistant. Remove or reduce the offender when possible (stop NSAIDs, decongestants, licorice; counsel on alcohol moderation — ≤1 drink/day for women and smaller men, ≤2 for larger men). Interfering substances are part of the resistant-HTN checklist.</p>")
    ], [
      Q("prescription", "About how much do NSAIDs raise blood pressure on average?", ["About 5 mmHg", "About 20 mmHg", "About 1 mmHg", "About 40 mmHg"], 0, "NSAIDs raise BP about 5 mmHg on average and are best avoided in borderline or elevated BP."),
      Q("prescription", "A previously controlled hypertensive patient’s BP rises to 152/94 after a week of a cold. Which OTC product is most likely responsible?", ["Pseudoephedrine", "Acetaminophen", "Guaifenesin", "Saline nasal spray"], 0, "Pseudoephedrine (and ephedra) are sympathomimetics listed as drug causes of HTN."),
      Q("prescription", "A 26-year-old woman develops new hypertension. Which medication history is most important to ask about?", ["Oral contraceptives", "Inhaled corticosteroids", "Proton pump inhibitors", "Topical antifungals"], 0, "Estrogens and high-dose oral contraceptives are listed causes; ask about OCPs, OTC meds, alcohol, and illicit drugs in every new hypertensive."),
      Q("prescription", "Which migraine medication class does the lecture list as raising blood pressure?", ["Triptans", "Acetaminophen", "Magnesium", "Riboflavin"], 0, "Migraine medications (triptans) are on the prescription drug list; they cause vasoconstriction."),
      Q("substances", "Which substance is described as a common cause of hypertension that can be very difficult to treat?", ["Chronic alcohol use", "Caffeine", "Marijuana", "Green tea"], 0, "Chronic alcohol use is a common, hard-to-treat cause; HTN is difficult to control above 40 g (2 drinks) daily or with binges."),
      Q("substances", "Which herbal product is on the lecture’s list of causes of drug-induced hypertension?", ["St. John’s wort", "Chamomile", "Peppermint", "Echinacea"], 0, "St. John’s wort is listed among natural products that raise BP, along with ephedra and ergot-containing herbals."),
      Q("substances", "Which pair of illicit drugs are sympathomimetics that raise blood pressure?", ["Cocaine and methamphetamine", "Heroin and fentanyl", "Marijuana and psilocybin", "Benzodiazepines and barbiturates"], 0, "Cocaine and methamphetamine are illicit sympathomimetics; cocaine withdrawal is also listed."),
      Q("withdrawal", "A patient stops his clonidine abruptly because he ran out. What is the main risk?", ["Rebound hypertension", "Hypotension", "Hyperkalemia", "Angioedema"], 0, "Abrupt discontinuation of clonidine causes rebound hypertension — a significant risk."),
      Q("withdrawal", "Why should metoprolol not be stopped abruptly?", ["Rebound hypertension, worsening angina, or MI", "It causes hypokalemia", "It causes angioedema", "It causes drug-induced lupus"], 0, "Abrupt beta-blocker withdrawal can cause rebound HTN, worsening angina, or MI; taper over 1–2 weeks."),
      Q("withdrawal", "A man with cocaine-induced hypertension is given a beta-blocker alone. What is the concern?", ["Unopposed alpha stimulation worsens hypertension", "Hypoglycemia", "Hyperkalemia", "Bronchodilation"], 0, "A beta-blocker without an alpha-blocker first in cocaine-induced HTN or pheochromocytoma is listed as a cause of HTN.")
    ])
  ]);
}());
