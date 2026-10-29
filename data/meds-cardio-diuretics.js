/*
  Medications: Diuretics (Cardio Part 1). Source: hypertension-part-3.md
  slides 32-48, hypertensive-crisis.md slide 44, cardiomyopathies.md, and
  valvular-disease.md. Only append questions (ids are "<med id>|<index>").
*/
(function () {
  "use strict";
  var H = window.DiseaseContent, M = window.MedContent;
  var Tbl = H.Tbl, HY = H.HY, Mn = H.Mn, Q = H.Q, L = H.L, Med = M.Med, ul = M.ul;

  window.CARDIO_MEDS_DIURETICS = L("meds-diuretics", "Diuretics", [

    Med("med-thiazides", "Thiazide diuretics", "Chlorthalidone, indapamide, hydrochlorothiazide (HCTZ), metolazone", ["Hypertension Part III"], {
      uses: ul([
        "<strong>Hypertension, first line</strong> (with ACEI/ARB and CCB) when there is no compelling indication for something else.",
        "Work best in <strong>Black patients</strong> (with CCBs) and are preferred in patients <strong>over 60</strong> (thiazide, ACEI or ARB).",
        "Common add-on after an ACEI/ARB for CAD, diabetes, CKD/proteinuria and recurrent stroke prevention.",
        "Part of the classic three-drug combo (ACEI or ARB + CCB + thiazide) that controls BP in about 80% of patients."
      ]),
      moa: "<p>Increase renal <strong>sodium excretion</strong> and may have some vasodilator effect. At first, blood volume and cardiac output fall (PVR briefly rises); after <strong>6–8 weeks</strong> cardiac output normalizes and PVR falls, which is what keeps BP down.</p><p>Relatively weak on their own: most effective when <strong>combined with an ACEI or ARB</strong>.</p>",
      avoid: ul([
        "<strong>Gout</strong> (raise uric acid).",
        "<strong>Hyponatremia</strong> or <strong>SSRI</strong> treatment (both lower sodium).",
        "<strong>Urinary incontinence</strong> and balance problems.",
        "Not first line in <strong>diabetics</strong> because they raise glucose (can still be used)."
      ]) + Mn("Avoid thiazides", "“GUSHI”: Gout, Urinary incontinence, SSRIs, Hyponatremia, Imbalance (falls)"),
      se: Tbl(["Goes DOWN", "Goes UP"], [["Potassium (hypokalemia)", "Calcium (hypercalcemia)"], ["Sodium (hyponatremia)", "Uric acid (gout)"], ["Magnesium", "Glucose (worse DM control)"]]) +
        "<p>Also <strong>hypovolemia</strong> from overdiuresis. Electrolyte changes are usually seen in the <strong>first 2 weeks</strong> until the body adjusts.</p>" +
        HY("Thiazides are the diuretic that RAISES calcium. Loops lower it."),
      pearls: ul([
        "<strong>Chlorthalidone</strong> has the longest duration of action and is 1.5–2x more potent than HCTZ.",
        "Stroke and major CV event reduction is proven for <strong>chlorthalidone and indapamide</strong>; <strong>no outcome benefit with HCTZ</strong>.",
        "SBP and LDL were lower on chlorthalidone than HCTZ.",
        "Give in the <strong>morning</strong> to avoid nocturnal diuresis.",
        "Check a <strong>chemistry panel 5–7 days</strong> after starting or increasing the dose (hypokalemia, hyponatremia).",
        "Resistant HTN is defined as uncontrolled on three max-dose drugs, <strong>one of which is a thiazide</strong>."
      ])
    }, [
      Q("pearls", "Which thiazide has the longest duration of action and proven reduction in stroke and CV events?", ["Chlorthalidone", "Hydrochlorothiazide", "Metolazone", "Furosemide"], 0, "Chlorthalidone has the longest duration and, with indapamide, the best outcome data. HCTZ has shown no outcome benefit."),
      Q("se", "Which electrolyte pattern is classic for a thiazide diuretic?", ["Low K, low Na, low Mg, HIGH calcium", "Low K, low Na, low Mg, low calcium", "High K, low Na, high calcium", "High K, high Na, low calcium"], 0, "Thiazides lower K, Na and Mg but raise calcium (and uric acid and glucose)."),
      Q("avoid", "A 66-year-old with recurrent gout flares needs a first-line BP drug. Which first-line class should you avoid?", ["Thiazide diuretic", "ACE inhibitor", "Dihydropyridine CCB", "ARB"], 0, "Thiazides raise uric acid and can trigger gout, so avoid them in gout."),
      Q("pearls", "When should a chemistry panel be checked after starting a thiazide?", ["Within 5-7 days", "Within 24 hours", "At 3 months", "Only if symptomatic"], 0, "Check a chem panel 5-7 days after starting or increasing a thiazide or loop to catch hypokalemia and hyponatremia."),
      Q("pearls", "Which thiazide has NOT been shown to reduce clinical outcomes such as stroke?", ["Hydrochlorothiazide", "Chlorthalidone", "Indapamide", "All thiazides have equal outcome data"], 0, "Outcome benefit is established for chlorthalidone and indapamide; no benefit has been noted with HCTZ."),
      Q("avoid", "A 72-year-old on sertraline has a sodium of 131. Which first-line antihypertensive class is the worst choice?", ["Thiazide diuretic", "ARB", "Amlodipine", "ACE inhibitor"], 0, "Avoid thiazides with SSRIs or low sodium: both lower sodium further."),
      Q("uses", "Thiazides and CCBs are the most effective first-line choices in which patient group?", ["Black patients", "White patients under 60", "Asian patients", "Patients with proteinuric CKD"], 0, "Thiazides and CCBs work best in Black patients; ACEIs and ARBs work best in White and Asian patients."),
      Q("pearls", "Why are thiazides dosed in the morning?", ["To avoid nocturnal diuresis", "Because they are absorbed only with breakfast", "To prevent morning hypotension", "To reduce hypercalcemia"], 0, "All diuretics are given in the morning (and no later than 5 pm if twice daily) to avoid getting up at night to urinate."),
      Q("avoid", "Why are thiazides avoided as the first-line drug in a diabetic with hypertension?", ["They mildly raise blood glucose", "They cause hypoglycemia unawareness", "They are nephrotoxic in diabetes", "They raise potassium in diabetics"], 0, "Thiazides can worsen glucose control, so ACEI/ARB is preferred first in diabetes, though thiazides can still be added."),
      Q("moa", "A thiazide is most effective at lowering blood pressure when it is combined with which class?", ["ACE inhibitor or ARB", "Loop diuretic", "Potassium supplement", "Alpha-1 blocker"], 0, "Diuretics are relatively weak alone and work best combined with an ACEI or ARB (they can also be used with CCBs).")
    ]),

    Med("med-loops", "Loop diuretics", "Furosemide (Lasix), bumetanide (Bumex), torsemide (Demadex), ethacrynic acid", ["Hypertension Part III", "Hypertensive Crisis", "Cardiomyopathies", "Valvular Disease"], {
      uses: ul([
        "<strong>Volume overload</strong>: heart failure symptoms, ascites, CKD and edema. Not usually used to treat hypertension, but they do lower BP.",
        "<strong>IV</strong> in acutely decompensated heart failure, including hypertensive emergency with acute HF (loop first to dry the lungs, then nitroglycerin).",
        "Dilated cardiomyopathy and myocarditis heart failure (reduce fluid retention).",
        "<strong>Mitral stenosis</strong>: decrease pulmonary congestion symptoms."
      ]),
      moa: "<p>Block sodium reabsorption in the <strong>thick ascending limb</strong> of the loop of Henle, where most sodium is reabsorbed, so they are the most powerful diuretics. They are <strong>sulfonamide derivatives</strong>, except ethacrynic acid.</p>",
      avoid: ul([
        "<strong>Severe sulfa allergy</strong>: use <strong>ethacrynic acid</strong>, the non-sulfa loop.",
        "<strong>Hypertrophic cardiomyopathy with LVOT obstruction</strong>: diuretics lower preload and worsen the obstruction.",
        "Hypovolemia or overdiuresis."
      ]),
      se: ul([
        "<strong>Hypokalemia</strong> and hyponatremia.",
        "Overdiuresis, hypovolemia and <strong>contraction alkalosis</strong>.",
        "Hyperuricemia and gout.",
        "Hypersensitivity: rash and rare acute interstitial nephritis.",
        "<strong>Ototoxicity</strong>: tinnitus and hearing loss, transient to irreversible, usually at very high doses."
      ]) + Mn("Loop side effects", "“OH DANG”: Ototoxicity, Hypokalemia, Dehydration, Allergy (sulfa), Nephritis (interstitial), Gout"),
      pearls: ul([
        "<strong>Equivalent doses: furosemide 40 mg = bumetanide 1 mg = torsemide 20 mg.</strong>",
        "Furosemide is the least bioavailable: an IV dose is about <strong>twice as effective</strong> as the same oral dose. Bumetanide and torsemide are highly bioavailable.",
        "Higher doses are needed with low GFR (CKD/AKI) or if the patient is used to the drug.",
        "IV when there is acute decompensated HF or poor gut absorption (bowel edema).",
        "Almost always given with <strong>potassium</strong> (about 20 mEq per 40 mg furosemide in a healthy kidney).",
        "Give in the morning or afternoon; if twice daily, no later than 5 pm."
      ])
    }, [
      Q("pearls", "Which dose of bumetanide is equivalent to furosemide 40 mg?", ["1 mg", "20 mg", "10 mg", "40 mg"], 0, "Lasix 40 mg = Bumex 1 mg = Demadex (torsemide) 20 mg."),
      Q("pearls", "Which dose of torsemide is equivalent to furosemide 40 mg?", ["20 mg", "1 mg", "80 mg", "5 mg"], 0, "Lasix 40 mg = Bumex 1 mg = torsemide 20 mg."),
      Q("avoid", "A patient with a severe sulfa allergy needs a loop diuretic. Which one?", ["Ethacrynic acid", "Furosemide", "Bumetanide", "Torsemide"], 0, "Ethacrynic acid is the non-sulfonamide loop for patients with severe sulfa allergy."),
      Q("se", "A patient on high-dose IV furosemide reports ringing in the ears and muffled hearing. What is this?", ["Loop diuretic ototoxicity", "Hyperkalemia", "Thiazide-induced hypercalcemia", "Angioedema"], 0, "Loops can cause ototoxicity (tinnitus, hearing loss), usually at very high doses, and it can be irreversible."),
      Q("pearls", "Why is IV furosemide about twice as strong as the same oral dose?", ["Oral furosemide is poorly bioavailable", "IV furosemide acts on a different part of the nephron", "Oral furosemide is destroyed by stomach acid completely", "IV furosemide also blocks aldosterone"], 0, "Furosemide is less bioavailable than other loops, so the IV dose of the same milligrams is roughly twice as effective."),
      Q("pearls", "What supplement is almost always given with a loop diuretic?", ["Potassium", "Calcium", "Sodium chloride", "Vitamin D"], 0, "Loops cause hypokalemia, so supplemental potassium is usually given (about 20 mEq per 40 mg Lasix)."),
      Q("uses", "A patient in hypertensive emergency has acute heart failure with crackles and fluid overload. What is usually given first?", ["IV loop diuretic", "IV hydralazine", "IV esmolol", "IV verapamil"], 0, "In acute HF, an IV loop is often given first to dry the lungs, then nitroglycerin is added."),
      Q("avoid", "Which patient should NOT get a diuretic for symptoms?", ["Hypertrophic cardiomyopathy with LVOT obstruction", "Mitral stenosis with pulmonary congestion", "Dilated cardiomyopathy with edema", "Decompensated HFrEF"], 0, "In obstructive HCM, diuretics reduce preload and worsen the LVOT obstruction."),
      Q("moa", "Where in the nephron do loop diuretics work?", ["Thick ascending limb of the loop of Henle", "Distal convoluted tubule", "Collecting duct aldosterone receptor", "Proximal tubule carbonic anhydrase"], 0, "Loops act in the thick ascending limb, which accounts for most sodium reabsorption."),
      Q("se", "Which acid-base change is caused by overdiuresis with a loop diuretic?", ["Contraction alkalosis", "Anion gap acidosis", "Respiratory acidosis", "Non-anion gap acidosis"], 0, "Loops can cause hypovolemia and contraction alkalosis.")
    ]),

    Med("med-enac-blockers", "Potassium-sparing: amiloride & triamterene", "Amiloride (Midamor), triamterene (in Dyazide/Maxzide with HCTZ)", ["Hypertension Part III"], {
      uses: ul([
        "Weak diuretic that <strong>conserves potassium</strong>.",
        "Triamterene is used <strong>combined with HCTZ</strong> (Dyazide, Maxzide) to offset thiazide hypokalemia."
      ]),
      moa: "<p>Directly <strong>block sodium channels</strong> in the distal tubule. Less sodium gets in, so less potassium is pushed out: weak diuresis but potassium is kept.</p><p>This is different from spironolactone and eplerenone, which block the aldosterone receptor.</p>",
      avoid: ul([
        "Hyperkalemia risk: <strong>diabetics, CKD</strong>, and patients on an <strong>ACEI or ARB</strong>.",
        "Triamterene: caution with kidney stones or kidney disease."
      ]),
      se: ul([
        "<strong>Hyperkalemia</strong>.",
        "<strong>Triamterene</strong>: crystalluria and cast formation, leading to <strong>kidney stones and AKI</strong>."
      ]),
      pearls: ul([
        "<strong>Amiloride</strong> is better tolerated and less nephrotoxic than triamterene.",
        "Give in the morning (no later than 5 pm if twice daily)."
      ]) + HY("Triamterene = stones (crystalluria). Amiloride = the gentler one.")
    }, [
      Q("moa", "How do amiloride and triamterene spare potassium?", ["They directly block sodium channels in the distal tubule", "They block the aldosterone receptor", "They block the Na-K-2Cl transporter", "They inhibit carbonic anhydrase"], 0, "Triamterene and amiloride directly block distal tubule sodium channels: weak diuresis with potassium conservation."),
      Q("se", "Which potassium-sparing diuretic causes crystalluria and kidney stones?", ["Triamterene", "Amiloride", "Eplerenone", "Spironolactone"], 0, "Triamterene can cause crystalluria and casts, leading to kidney stones and AKI."),
      Q("pearls", "Which ENaC blocker is better tolerated and less nephrotoxic?", ["Amiloride", "Triamterene", "Metolazone", "Ethacrynic acid"], 0, "Amiloride is better tolerated and less nephrotoxic than triamterene."),
      Q("uses", "Why is triamterene combined with HCTZ in Dyazide or Maxzide?", ["To offset the hypokalemia caused by HCTZ", "To add strong diuresis to a weak drug", "To prevent HCTZ-induced gout", "To block aldosterone escape"], 0, "The potassium-sparing drug counteracts the thiazide's potassium loss."),
      Q("avoid", "A diabetic with CKD on lisinopril is started on amiloride. What lab problem is most likely?", ["Hyperkalemia", "Hypokalemia", "Hypercalcemia", "Hyponatremia only"], 0, "Potassium-sparing diuretics plus ACEI/ARB, diabetes or CKD raise the risk of hyperkalemia."),
      Q("se", "What is the main electrolyte risk of every potassium-sparing diuretic?", ["Hyperkalemia", "Hypomagnesemia", "Hypercalcemia", "Hypokalemia"], 0, "By design they keep potassium, so hyperkalemia is the main risk.")
    ]),

    Med("med-aldosterone-antagonists", "Aldosterone antagonists", "Spironolactone (Aldactone), eplerenone (Inspra)", ["Hypertension Part III"], {
      uses: ul([
        "<strong>HFrEF</strong>: compelling indication (ACEI/ARB + beta blocker + aldosterone antagonist + diuretic).",
        "<strong>Ascites from chronic liver disease</strong>: initial diuretic of choice.",
        "<strong>Resistant hypertension</strong>: a common 4th drug. Spironolactone is a later-line HTN alternative."
      ]),
      moa: "<p>Competitively block the <strong>mineralocorticoid (aldosterone) receptor</strong> in the distal tubule, so there are fewer Na-K pumps: sodium is lost in the urine and <strong>serum potassium rises</strong>.</p><p>The diuretic effect is weak. They are valued mostly for blocking aldosterone's harmful effects on the <strong>kidney, vessels and heart</strong>.</p>",
      avoid: ul([
        "Hyperkalemia risk, especially combined with an <strong>ACEI, ARB or potassium supplements</strong>.",
        "Use with caution and monitor a chem panel in <strong>GFR &lt; 50</strong>, diabetics and patients with proteinuria."
      ]),
      se: Tbl(["Drug", "Side effects"], [
        ["Both", "<strong>Hyperkalemia</strong>"],
        ["Spironolactone", "Less selective: binds estrogen and progesterone receptors → <strong>gynecomastia</strong>, irregular menses, impotence"],
        ["Eplerenone", "More selective for the aldosterone receptor → far fewer endocrine side effects"]
      ]),
      pearls: ul([
        "If a man on spironolactone develops gynecomastia, switch to <strong>eplerenone</strong>.",
        "Give in the morning; if twice daily, no later than 5 pm."
      ]) + HY("Spironolactone = gynecomastia. Eplerenone = the selective fix.")
    }, [
      Q("se", "A man on spironolactone for HFrEF develops painful breast enlargement. What is the best switch?", ["Eplerenone", "Triamterene", "Furosemide", "Amiloride"], 0, "Spironolactone binds estrogen/progesterone receptors and causes gynecomastia; eplerenone is more selective."),
      Q("uses", "Which diuretic is the initial choice for ascites from chronic liver disease?", ["Aldosterone antagonist (spironolactone)", "Hydrochlorothiazide", "Ethacrynic acid", "Metolazone"], 0, "Aldosterone antagonists are the initial diuretic of choice for ascites from chronic liver disease."),
      Q("uses", "Which HFrEF regimen matches the compelling-indication list?", ["ACEI or ARB + beta blocker + aldosterone antagonist + diuretic", "Non-DHP CCB + thiazide + hydralazine", "ARB + ACEI + loop diuretic", "Alpha blocker + clonidine + loop diuretic"], 0, "HFrEF: ACEI/ARB + beta blocker + aldosterone antagonist + diuretic; avoid non-DHP CCBs and never combine ACEI with ARB."),
      Q("avoid", "Which combination most raises the risk of hyperkalemia with spironolactone?", ["Adding lisinopril and a potassium supplement", "Adding furosemide", "Adding HCTZ", "Adding amlodipine"], 0, "Aldosterone antagonists with an ACEI, ARB or potassium supplement raise potassium the most."),
      Q("moa", "How does spironolactone raise serum potassium?", ["It blocks the aldosterone receptor, so fewer Na-K pumps work in the distal tubule", "It directly blocks ENaC sodium channels", "It blocks potassium secretion in the loop of Henle", "It increases renin release"], 0, "Blocking the mineralocorticoid receptor decreases Na-K pumps, so sodium is lost and potassium is kept."),
      Q("se", "Why does spironolactone cause gynecomastia and irregular menses but eplerenone rarely does?", ["Spironolactone also binds estrogen and progesterone receptors", "Eplerenone is not absorbed orally", "Spironolactone raises prolactin by blocking dopamine", "Eplerenone is a much weaker diuretic"], 0, "Spironolactone is less specific and binds sex-hormone receptors; eplerenone is more selective."),
      Q("uses", "A patient's BP is uncontrolled on max-dose lisinopril, amlodipine and chlorthalidone. Which is a common 4th drug?", ["Spironolactone", "Losartan", "Nifedipine", "HCTZ"], 0, "For resistant HTN, add a 4th drug such as an aldosterone antagonist (or BB, central agent, alpha blocker, vasodilator). Never add an ARB to an ACEI.")
    ])
  ]);
}());
