/*
  Concepts: Hypertensive Crisis (same shape as data/diseases-endocrine.js).

  Each entry is a mechanism, not a disease: idea → cause/effect chain →
  bedside relevance → common traps, with a prediction-style question bank.
  Source: source-material/cardio-part-1/text/hypertensive-crisis.md (Veal),
  with the matching Hypertension Part II slides for autoregulation.
  Recall facts (thresholds, drug tables) live in data/hypertensive-crisis.js;
  here they appear only where they explain a "why". Anything the slides only
  imply is labeled "Clarification (standard physiology)" in the html.

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
  function traps(items) {
    return "<ul>" + items.map(function (item) { return "<li>" + item + "</li>"; }).join("") + "</ul>";
  }

  window.CARDIO_CONCEPTS_HYPERTENSIVE_CRISIS = L("hypertensive-crisis", "Hypertensive Crisis", [

    // ------------------------------------------------------------------
    D("hc-organ-not-number", "The organ decides, not the number", "Urgency and emergency share the same BP threshold (180/120). What changes the diagnosis, the setting, and the speed of treatment is whether an organ is being injured right now.", [
      S("idea", "The idea", "<p>A BP of 200/120 is frightening, but the number alone does not tell you how sick the patient is. The lecture uses <strong>one threshold</strong> for both: SBP ≥ 180 and/or DBP ≥ 120.</p><p>The question that matters is: <strong>is an organ failing because of this pressure right now?</strong> Brain (confusion, focal deficit, seizure), heart and lungs (chest pain, dyspnea, back pain), kidney (low urine output, rising creatinine), eyes, blood, or a pregnancy.</p><p>No organ damage → <strong>urgency</strong>: there is time, so lower it slowly with oral drugs, usually outpatient. Organ damage → <strong>emergency</strong>: IV drugs and ICU, because ongoing pressure keeps damaging the organ.</p>"),
      S("chain", "Cause → effect", chain([
        "BP rises to ≥ 180/120.",
        "Ask: is there acute or progressing target-organ damage? (history, exam, labs, imaging)",
        "No → urgency → no ongoing injury, so the danger of lowering too fast outweighs the danger of waiting → rest, oral meds, goal over days to weeks.",
        "Yes → emergency → the organ is being injured now → controlled IV lowering (10–20% MAP in the first hour) in the ICU.",
        "Exceptions (stroke, ICH, dissection) change the speed because the injured organ itself changes what pressure is safe."
      ]) + Tbl(["Same BP, different patient", "Diagnosis", "Where"], [
        ["200/120, feels fine, normal exam and labs", "Urgency", "Office: quiet room, oral meds, follow-up"],
        ["200/120, confused, papilledema", "Emergency", "ICU, IV nicardipine"],
        ["200/120, known aortic aneurysm, no symptoms", "Urgency at imminent risk", "ER, lower over 2–4 hours"]
      ])),
      S("bedside", "Why it matters clinically", "<p>Studies show office urgency patients do <strong>not</strong> need the ER. Resting 30 minutes in a quiet room drops BP ≥ 20/10 in a third of patients. Rushing them to an ER and dropping BP fast can cause the stroke, MI, or AKI you were trying to prevent, especially in the elderly.</p><p>The exception is a patient with a <strong>known cerebral or aortic aneurysm</strong>: no damage yet, but the risk of rupture is imminent, so they are treated like an emergency.</p>" + HY("Find the organ first. The number only gets you to the question.")),
      S("traps", "Common traps", traps([
        "<strong>“Higher BP = emergency.”</strong> A patient at 230/130 with no organ damage has urgency; one at 184/116 with a troponin leak has an emergency.",
        "<strong>“Urgency should go to the ER.”</strong> Most urgency is lowered outpatient with close follow-up.",
        "<strong>“Treat urgency fast to be safe.”</strong> Fast lowering is the danger; the goal is under 160/100 in 2–4 hours, then goal over 1–2 weeks.",
        "<strong>“Headache alone makes it an emergency.”</strong> Look for actual organ injury: confusion, focal deficits, papilledema, chest pain, pulmonary edema, AKI."
      ]))
    ], [
      Q("chain", "Two patients both have BP 205/125. One has new confusion; the other is asymptomatic with a normal work-up. What happens to their management?", ["The confused patient gets IV therapy in the ICU; the other is treated slowly as an outpatient", "Both get IV nitroprusside", "Both are discharged", "Both are lowered to 120/80 within an hour"], 0, "The organ, not the number, decides emergency versus urgency."),
      Q("idea", "Why is the same BP threshold used for urgency and emergency?", ["Because the distinction is acute target-organ damage, not the pressure itself", "Because the BP in emergency is always lower", "Because urgency always progresses to emergency", "Because the threshold is arbitrary and unimportant"], 0, "Both share ≥ 180/120; target-organ damage is the dividing line."),
      Q("bedside", "An office patient with BP 192/122 and no organ damage rests for 30 minutes and BP falls to 168/104. What does this predict?", ["She can be managed outpatient with oral meds and close follow-up", "She now needs ICU admission", "She has a hypertensive emergency", "She needs IV nitroprusside"], 0, "Rest drops BP in a third of patients; urgency is managed outpatient."),
      Q("chain", "An asymptomatic patient with BP 188/118 has a known 6 cm aortic aneurysm. How does the aneurysm change management?", ["It makes the risk imminent, so the ER lowers BP over 2–4 hours as in an emergency", "It has no effect", "It means BP should not be lowered at all", "It means she can wait a year for follow-up"], 0, "Known aneurysm = imminent CV event risk; send to the ER."),
      Q("traps", "A patient with BP 182/112 has crushing chest pain and a troponin rise. A student calls it urgency because the BP is barely over 180. What is wrong?", ["Acute myocardial injury makes it an emergency regardless of how close the BP is to the threshold", "Nothing; it is urgency", "BP must exceed 220 for an emergency", "Chest pain never counts as organ damage"], 0, "Any acute target-organ damage at ≥ 180/120 is an emergency."),
      Q("bedside", "What is expected if an elderly urgency patient's BP is dropped from 200/110 to 120/70 in an hour?", ["Risk of stroke, MI, or AKI from underperfusion", "Faster cure with no risk", "Improved cerebral perfusion", "Better long-term adherence"], 0, "Precipitous lowering is dangerous, especially in the elderly.")
    ]),

    // ------------------------------------------------------------------
    D("hc-autoregulation-floor", "A reset autoregulation floor: why we lower slowly", "Years of high pressure shift the brain's autoregulation curve to the right, so a \"normal\" BP becomes too low for that brain. That is why emergencies are lowered only 10–20% in the first hour and urgencies over days to weeks.", [
      S("idea", "The idea", "<p>Normally the brain keeps its flow constant from <strong>MAP 60 to 150</strong> by constricting when pressure rises and dilating when it falls.</p><p>In chronic hypertension, the brain gets used to high pressure: cerebral vascular resistance rises and the whole curve <strong>shifts right</strong>. Its lower limit (the floor) is now much higher than 60.</p><p>So if you drop this patient's BP quickly to a \"normal\" value, you may land <strong>below the floor</strong>: the arterioles are already as dilated as they can get, flow falls, and tissue becomes ischemic.</p>"),
      S("chain", "Cause → effect", chain([
        "Chronic high BP → cerebral vessels adapt with higher resistance → autoregulation curve shifts right.",
        "BP lowered rapidly to the normotensive range → pressure falls below the new lower limit.",
        "Arterioles cannot dilate further → cerebral (and coronary, renal) blood flow falls.",
        "Ischemia → stroke, MI, AKI: the same events you were trying to prevent.",
        "Lowering gradually (10–20% MAP in hour 1, 5–15% more over 23 h, then weeks) lets the curve slowly reset back toward normal."
      ]) + Tbl(["Patient", "Floor of autoregulation", "Safe speed of lowering"], [
        ["Normotensive", "MAP ~60", "Tolerates normal BP"],
        ["Long-standing HTN", "Shifted higher", "<strong>Slow</strong>: weeks to reach goal"]
      ])),
      S("bedside", "Why it matters clinically", "<p>The slides frame management as two competing risks: imminent CV events if BP is not lowered enough, versus stroke, MI, and AKI if lowered too fast or too far. The 10–20% first-hour rule is the compromise.</p><p>The same idea explains why a normotensive person who suddenly spikes (for example, from a stimulant or preeclampsia) can get edema and encephalopathy at pressures a chronic hypertensive tolerates: their ceiling is lower, so they hyperperfuse sooner.</p>" + clar("the curve has both a floor and a ceiling; right-shifting raises both.") + HY("Chronic HTN: a normal BP can be hypotension for that brain.")),
      S("traps", "Common traps", traps([
        "<strong>“Get the BP to normal as fast as possible.”</strong> In chronic HTN that drops perfusion below the reset floor.",
        "<strong>“A 10–20% drop is not enough to help.”</strong> It moves the patient out of the injurious range while staying above the floor.",
        "<strong>“Encephalopathy needs aggressive lowering.”</strong> PRES and encephalopathy respond to gradual lowering and improve over 2–4 days.",
        "<strong>“The floor is the same for everyone.”</strong> It depends on how long and how high the BP has been."
      ]))
    ], [
      Q("chain", "A patient with 20 years of uncontrolled HTN has her MAP dropped from 150 to 85 within 30 minutes. What happens to her cerebral blood flow?", ["It falls, because 85 is below her right-shifted autoregulation floor", "It stays constant because autoregulation works at any pressure", "It rises because of vasodilation", "It is unaffected by MAP"], 0, "Her floor has moved up; rapid lowering drops flow and risks ischemia."),
      Q("idea", "What happens to the cerebral autoregulation curve in chronic hypertension?", ["It shifts right, raising both its lower and upper limits", "It shifts left", "It flattens to zero", "It is unchanged"], 0, "Chronic HTN increases cerebral vascular resistance and shifts the curve right."),
      Q("chain", "Why is MAP lowered no more than 10–20% in the first hour of an emergency?", ["To leave the injurious range while staying above the reset autoregulation floor", "Because IV drugs cannot work faster", "Because organ damage is irrelevant in the first hour", "To raise intracranial pressure"], 0, "The limit protects perfusion in a brain adapted to high pressure."),
      Q("bedside", "A previously normotensive 20-year-old at 34 weeks' gestation has BP 170/110 with severe headache and visual changes. Why is she symptomatic at a pressure a chronic hypertensive might tolerate?", ["Her autoregulation ceiling has not shifted, so she hyperperfuses sooner", "Pregnancy lowers BP in the brain", "Chronic hypertensives have no autoregulation", "BP has no effect on the brain"], 0, "A brain not adapted to high pressure exceeds its ceiling at lower BP."),
      Q("traps", "A resident says, \"Normal BP is always safe, so let's aim for 120/80 tonight\" for a chronic hypertensive in urgency. What is the predicted risk?", ["Stroke, MI, or AKI from hypoperfusion", "No risk", "Cerebral hyperperfusion", "Rebound hypertension only"], 0, "In chronic HTN, normal BP can be below the autoregulatory floor."),
      Q("chain", "Why does gradual lowering over weeks reduce risk?", ["It gives autoregulation time to reset toward its normal set point", "It lets the drug accumulate to toxic levels", "It keeps the patient in the hospital longer", "It raises the autoregulatory floor further"], 0, "Slow titration lets the curve shift back."),
      Q("bedside", "Why do PRES and hypertensive encephalopathy improve with gradual rather than rapid lowering?", ["Lowering below the injurious range relieves edema while avoiding ischemia; the brain recovers over 2–4 days", "Rapid lowering is impossible with IV drugs", "They improve only with surgery", "They never improve"], 0, "Gradual lowering relieves hyperperfusion without dropping below the floor.")
    ]),

    // ------------------------------------------------------------------
    D("hc-vicious-cycle", "The crisis feeds itself", "In a hypertensive emergency, pressure damages the endothelium, damaged endothelium releases vasoconstrictors and triggers clotting and inflammation, and those raise the pressure again. Breaking the loop requires active treatment.", [
      S("idea", "The idea", "<p>The vessel wall first protects itself from high pressure by <strong>smooth muscle hypertrophy and constriction</strong>. But constriction held too long injures the <strong>endothelium</strong>: it makes less <strong>nitric oxide</strong> and autoregulation fails.</p><p>Injured endothelium leaks (<strong>permeability</strong>), dies in patches (<strong>fibrinoid necrosis</strong>), switches on the <strong>clotting cascade</strong> and <strong>inflammation</strong>, and releases more <strong>angiotensin II, norepinephrine, and vasopressin</strong>, which push SVR even higher.</p>"),
      S("chain", "Cause → effect", chain([
        "Abrupt rise in SVR (possibly humoral vasoconstrictors from a stressed vessel wall).",
        "Sustained smooth muscle contraction → endothelial dysfunction → ↓ NO → autoregulation fails.",
        "Focal vasodilation and endothelial damage → permeability, fibrinoid necrosis, clotting, inflammation.",
        "More vasoconstrictors released (Ang II, NE, vasopressin) → SVR rises further.",
        "Higher SVR → more endothelial injury → loop repeats; organs downstream are injured (brain edema, AKI, MAHA, retinal exudates)."
      ]) + HY("Pressure → endothelial injury → vasoconstrictors → more pressure.")),
      S("bedside", "Why it matters clinically", "<p>This loop explains several crisis findings: <strong>MAHA</strong> (red cells shredded through damaged high-pressure vessels), <strong>retinal exudates and microinfarctions</strong>, <strong>RBC casts and proteinuria</strong> in the urine, and cerebral <strong>edema</strong> from leaky vessels.</p><p>It also explains why the most common cause, <strong>missed medications</strong>, or <strong>abrupt clonidine or beta-blocker withdrawal</strong>, can tip a controlled patient into a crisis that will not settle by itself.</p>" + clar("the loop is described on slide 5; the lecture notes the events are incompletely understood.")),
      S("traps", "Common traps", traps([
        "<strong>“An emergency will settle if the patient rests.”</strong> Rest helps urgency; an emergency with endothelial injury keeps driving itself and needs IV treatment.",
        "<strong>“Endothelial damage means vasoconstriction everywhere.”</strong> The slides note focal vasodilation alongside damage, which is what makes vessels leak.",
        "<strong>“MAHA in a crisis is an unrelated blood disease.”</strong> It is hemolysis from high vascular pressure, another product of the loop."
      ]))
    ], [
      Q("chain", "In a hypertensive crisis, endothelial injury reduces nitric oxide. What does this predict for vascular tone?", ["More vasoconstriction and higher SVR", "More vasodilation and lower SVR", "No change", "Lower angiotensin II"], 0, "Less NO removes a vasodilator signal, so SVR rises."),
      Q("chain", "Damaged endothelium releases angiotensin II, norepinephrine, and vasopressin. What happens next?", ["SVR rises further, worsening the injury", "BP falls back to normal", "Autoregulation is restored", "The kidneys excrete more sodium and BP drops"], 0, "These vasoconstrictors close the vicious cycle."),
      Q("bedside", "A crisis patient has new anemia with fragmented red cells. How does the crisis explain it?", ["Red cells are damaged passing through injured high-pressure vessels (MAHA)", "Iron deficiency from bleeding", "Marrow suppression by antihypertensives", "An unrelated autoimmune disease"], 0, "MAHA is hemolysis from high vascular pressures."),
      Q("idea", "Which lesion reflects endothelial death in the crisis cycle?", ["Fibrinoid necrosis", "Fatty streak", "Caseous necrosis", "Amyloid deposition"], 0, "Fibrinoid necrosis follows endothelial damage."),
      Q("bedside", "Why can a patient who abruptly stops clonidine spiral into an emergency that does not resolve with rest?", ["The rebound starts the pressure-endothelial injury-vasoconstrictor loop, which sustains itself", "Clonidine withdrawal lowers BP", "Rest always fixes rebound hypertension", "Clonidine withdrawal only affects heart rate"], 0, "Once the loop starts it perpetuates itself."),
      Q("chain", "Endothelial injury increases vascular permeability in the brain. What finding results?", ["Cerebral edema", "Cerebral dehydration", "Lower intracranial pressure", "Improved autoregulation"], 0, "Leaky vessels cause edema, as in PRES and encephalopathy.")
    ]),

    // ------------------------------------------------------------------
    D("hc-afterload-failure", "Extreme afterload: back up, starve the kidney, starve the heart", "When aortic pressure is extreme, the left ventricle cannot eject forward. Blood backs up into the lungs (flash pulmonary edema), forward output to the kidney falls (AKI), and the coronaries fill poorly while the thick LV needs more oxygen (ischemia).", [
      S("idea", "The idea", "<p>Afterload is the pressure the LV must push against: in a crisis that is the aorta at 220/130. Three things follow from one cause.</p><ul><li><strong>Backward:</strong> blood the LV cannot eject backs up into the left atrium and lungs → <strong>pulmonary congestion and edema</strong>.</li><li><strong>Forward:</strong> cardiac output falls → the <strong>kidney is hypoperfused</strong> → AKI, proteinuria, low urine output.</li><li><strong>The heart itself:</strong> coronaries fill in <strong>diastole</strong>; high aortic pressure, a stiff hypertrophied LV that relaxes poorly, and higher O<sub>2</sub> demand → <strong>ischemia</strong>, troponin rise.</li></ul>"),
      S("chain", "Cause → effect", chain([
        "Extreme afterload (aortic pressure).",
        "LV cannot eject its full volume → LVEDP rises → left atrial and pulmonary venous pressure rise → crackles, JVD, orthopnea (flash pulmonary edema).",
        "Forward output falls → renal hypoperfusion → AKI, proteinuria.",
        "Thick, tense LV needs more O<sub>2</sub> and relaxes poorly → less diastolic coronary filling → ischemia, troponin leak, EKG changes.",
        "Treatment that lowers preload and afterload (diuretic, nitroglycerin) relieves all three; drugs that weaken contraction (BB, CCB) worsen the failing pump."
      ]) + Tbl(["Direction", "Result", "Finding"], [
        ["Backward", "Pulmonary congestion", "JVD, rales, orthopnea"],
        ["Forward", "Renal hypoperfusion", "↑ Cr, ↓ urine output, proteinuria"],
        ["Coronary", "Supply ↓, demand ↑", "Troponin, EKG changes"]
      ])),
      S("bedside", "Why it matters clinically", "<p>Acute HF in a crisis: <strong>loop diuretic first</strong> (remove volume), then <strong>nitroglycerin</strong> (venous dilation lowers preload and also dilates coronaries); goal SBP &lt; 140. Avoid <strong>beta-blockers and CCBs</strong> (depress contractility) and <strong>hydralazine</strong> (increases cardiac work).</p><p>ACS in a crisis: <strong>nitroglycerin</strong> or an <strong>IV beta-blocker</strong> (slowing the rate lengthens diastole and lowers demand) when SBP &gt; 160 or DBP &gt; 100.</p>" + clar("a slower heart rate lengthens diastole, the time the coronaries fill.")),
      S("traps", "Common traps", traps([
        "<strong>“Pulmonary edema means too much fluid, so it is not a BP problem.”</strong> In a crisis it is primarily an afterload problem; the LV cannot push forward.",
        "<strong>“Beta-blockers help every cardiac emergency.”</strong> They help ACS by lowering demand, but they depress contractility in acute decompensated HFrEF.",
        "<strong>“The coronaries fill in systole when pressure is highest.”</strong> They fill in diastole, which a stiff hypertrophied LV shortchanges.",
        "<strong>“AKI in a crisis is from too much pressure in the kidney.”</strong> The lecture explains it by falling output and hypoperfusion."
      ]))
    ], [
      Q("chain", "Aortic pressure suddenly doubles in a patient with a stiff LV. What happens to pulmonary venous pressure?", ["It rises as blood backs up from the LV into the lungs", "It falls", "It is unaffected", "It drops to zero"], 0, "Failed forward ejection raises LVEDP, LA, and pulmonary venous pressure."),
      Q("chain", "In a crisis with severe afterload, cardiac output falls. What does this predict for the kidney?", ["Hypoperfusion with rising creatinine and less urine", "Increased GFR and polyuria", "No change", "Kidney stones"], 0, "Lower forward output hypoperfuses the kidney."),
      Q("chain", "A hypertrophied LV relaxes poorly in a crisis. What happens to coronary perfusion?", ["It falls, because coronaries fill during diastole", "It rises, because systolic pressure is high", "It is unchanged", "It becomes continuous"], 0, "Poor relaxation and high aortic pressure reduce diastolic coronary filling."),
      Q("bedside", "A hypertensive acute HF patient with EF 20% is given IV diltiazem. What is the predicted effect?", ["Worse pump function, because CCBs depress contractility", "Improved contractility", "No change", "Better diuresis"], 0, "CCBs and BBs depress contractility in acute decompensated HFrEF."),
      Q("bedside", "Why does nitroglycerin help hypertensive pulmonary edema?", ["Venous dilation lowers preload, and coronary dilation improves supply", "It increases contractility", "It causes diuresis directly", "It raises afterload"], 0, "NTG reduces preload more than afterload and dilates the coronaries."),
      Q("bedside", "Why is an IV beta-blocker useful in hypertensive ACS but avoided in acute decompensated HFrEF?", ["It lowers demand and lengthens diastole in ACS, but depresses a failing pump in HFrEF", "It is never useful in either", "It increases contractility in both", "It only works in pregnancy"], 0, "Same drug, opposite effect depending on whether the pump is failing."),
      Q("traps", "A student says hydralazine is ideal for hypertensive acute HF because it is a vasodilator. What is the flaw?", ["Hydralazine increases cardiac work and is avoided in acute decompensated HFrEF", "Hydralazine is not a vasodilator", "Hydralazine causes bradycardia", "Hydralazine is the drug of choice"], 0, "The slide lists hydralazine as a drug to avoid because it increases cardiac work.")
    ]),

    // ------------------------------------------------------------------
    D("hc-brain-pressure-balance", "The brain needs pressure: stroke and hemorrhage goals", "Cerebral perfusion pressure = MAP − ICP. In ischemic stroke, the brain around the clot depends on pressure, so BP is left high unless extreme. In hemorrhage, high pressure enlarges the bleed but too little starves a swollen brain, so the goal is a balance, and drugs that raise ICP are avoided.", [
      S("idea", "The idea", "<p><strong>CPP = MAP − ICP.</strong> The brain gets what is left after intracranial pressure is subtracted from arterial pressure.</p><ul><li><strong>Ischemic stroke:</strong> tissue around the blocked artery survives on collateral flow, which depends on pressure. Lowering BP can extend the infarct, so treat only if ≥ 220/120. If tPA is given, the bleeding risk means BP must be &lt; 185/110 first.</li><li><strong>Intracerebral/subarachnoid hemorrhage:</strong> high BP can push more blood out; but blood and edema raise ICP, so CPP depends on keeping MAP up. Hence the goal (SBP ~140–160) is a compromise.</li><li><strong>Nitroprusside raises ICP</strong>, so it is avoided in bleeds; <strong>nicardipine</strong> is the drug of choice.</li></ul>"),
      S("chain", "Cause → effect", chain([
        "Brain injury (clot or bleed).",
        "Ischemic stroke: flow to the penumbra depends on MAP → lowering MAP extends ischemia → permissive HTN unless ≥ 220/120.",
        "tPA given → bleeding risk rises → BP must be under 185/110 before reperfusion.",
        "Hemorrhage: blood + edema → ICP rises → CPP = MAP − ICP falls if MAP is lowered too much.",
        "Hemorrhage also expands with high pressure → lower to a middle target with nicardipine; avoid nitroprusside (raises ICP) and hydralazine."
      ]) + Tbl(["", "BP target", "Why"], [
        ["Ischemic stroke, no tPA", "Treat only ≥ 220/120", "Penumbra needs pressure"],
        ["Ischemic stroke, tPA", "&lt; 185/110", "Limit bleeding from lysis"],
        ["ICH / SAH", "SBP ~160 (algorithm ICH &lt; 140, SAH &lt; 160)", "Balance bleed vs CPP"]
      ])),
      S("bedside", "Why it matters clinically", "<p>The chronically hypertensive brain makes this harder: its autoregulation is shifted right, so it needs more pressure than a normal brain to stay perfused. That is the answer to the slide's question, \"Why is an intraparenchymal hemorrhage especially tricky in a patient with long-standing HTN?\"</p>" + clar("the ischemic tissue around an infarct (penumbra) has lost autoregulation, so its flow follows MAP directly.") + HY("Clot: leave the pressure up. Bleed: bring it down partway, with nicardipine.")),
      S("traps", "Common traps", traps([
        "<strong>“Every stroke needs BP lowered.”</strong> Ischemic stroke without tPA: treat only at ≥ 220/120.",
        "<strong>“tPA and non-tPA strokes have the same target.”</strong> tPA requires &lt; 185/110.",
        "<strong>“Nitroprusside is the strongest, so use it for a bleed.”</strong> It raises ICP and is avoided in ICH/SAH.",
        "<strong>“Lower ICH BP as far as possible to stop the bleed.”</strong> Raised ICP means lower MAP directly reduces cerebral perfusion."
      ]))
    ], [
      Q("chain", "In a patient with raised ICP from an ICH, MAP is dropped sharply. What happens to cerebral perfusion pressure?", ["It falls, because CPP = MAP − ICP", "It rises", "It stays the same because ICP falls equally", "It doubles"], 0, "Lower MAP with high ICP lowers CPP."),
      Q("chain", "In an acute ischemic stroke not treated with tPA, BP is lowered from 190/100 to 130/80. What is the predicted effect?", ["The infarct may extend because the penumbra depends on pressure", "The stroke resolves", "No effect on the brain", "ICP rises from vasoconstriction"], 0, "Ischemic tissue depends on pressure; that is why BP is left alone unless ≥ 220/120."),
      Q("chain", "Why must BP be below 185/110 before tPA?", ["Thrombolysis raises bleeding risk, and high pressure worsens bleeding", "tPA does not work at high BP", "tPA raises BP", "It is an arbitrary number"], 0, "Lysis plus high pressure increases hemorrhage risk."),
      Q("bedside", "Why is nicardipine preferred over nitroprusside in ICH?", ["Nitroprusside raises ICP, which lowers CPP", "Nicardipine raises ICP", "Nitroprusside is too slow", "Nicardipine is the only IV drug available"], 0, "Nitroprusside increases ICP; nicardipine is DOC."),
      Q("bedside", "Why is ICH especially tricky in a patient with long-standing HTN?", ["The brain's autoregulation is shifted right, so it needs higher pressure to stay perfused even as high pressure worsens the bleed", "Long-standing HTN prevents bleeding", "Chronic hypertensives tolerate any BP drop", "ICH never occurs in chronic HTN"], 0, "Competing interests are sharper with a reset autoregulation curve."),
      Q("traps", "A patient with an ischemic stroke outside the tPA window has BP 204/112. A colleague wants to start a nicardipine drip. What does the lecture predict is right?", ["Do not treat yet; the threshold without tPA is 220/120", "Start nicardipine to below 140", "Start nitroprusside to 120/80", "Give tPA now"], 0, "Without tPA, treat only at ≥ 220/120."),
      Q("chain", "Blood and edema from an ICH raise ICP from 10 to 30 while MAP stays 100. What happens to CPP?", ["It falls from 90 to 70", "It rises from 90 to 130", "It stays 100", "It falls to zero"], 0, "CPP = MAP − ICP: 100 − 10 = 90 becomes 100 − 30 = 70.")
    ]),

    // ------------------------------------------------------------------
    D("hc-dissection-shear", "Aortic dissection: slow the heart, then drop the pressure", "A dissection is driven by the force of each heartbeat against a torn wall. Unlike every other emergency, it is treated fast and low: heart rate below 60 first, then SBP 100–120 within 20 minutes, then surgery.", [
      S("idea", "The idea", "<p>Once the intima tears, every heartbeat pushes blood into the gap between <strong>intima and media</strong>, extending the tear toward rupture. Two things drive it: <strong>how hard</strong> each beat hits (pressure) and <strong>how often</strong> (rate).</p><p>So the plan is to slow the heart (<strong>beta-blocker: esmolol or labetalol</strong>), relieve pain (<strong>morphine</strong>, which also lowers sympathetic drive), and then lower pressure (<strong>nitroprusside</strong>), quickly and far, then send the patient to the OR.</p>"),
      S("chain", "Cause → effect", chain([
        "High aortic pressure tears the intima.",
        "Each beat forces blood between intima and media → tear propagates → risk of rupture.",
        "Beta-blocker first → HR below 60 → fewer, gentler beats.",
        "Then vasodilator (nitroprusside) → SBP 100–120 within 20 minutes.",
        "If a vasodilator is given first → reflex tachycardia → more force on the tear (which is why the beta-blocker leads)."
      ]) + Tbl(["", "Most emergencies", "Aortic dissection"], [
        ["Speed", "MAP ↓ 10–20% in the first hour", "SBP 100–120 within <strong>20 minutes</strong>"],
        ["Order", "Any appropriate IV drug", "<strong>Beta-blocker first</strong>, then vasodilator"],
        ["Endpoint", "ICU, oral meds later", "<strong>OR</strong>"]
      ])),
      S("bedside", "Why it matters clinically", "<p>Suspect dissection when a hypertensive patient has <strong>acute severe back pain</strong>, a <strong>BP difference between arms</strong>, or a <strong>weak or absent pulse</strong>; image with CTA chest. The only reason not to drop BP this fast is <strong>signs of end-organ hypoperfusion</strong>.</p>" + clar("reflex tachycardia from vasodilators increases the rate of rise of aortic pressure, the shear that extends the tear.") + Mn("MBV → OR", "Morphine, Beta-blocker, Vasodilator, then the operating room.")),
      S("traps", "Common traps", traps([
        "<strong>“Apply the 10–20% first-hour rule.”</strong> Dissection is the exception: fast and low.",
        "<strong>“Start with nitroprusside because it works fastest.”</strong> Without a beta-blocker on board, reflex tachycardia worsens the tear.",
        "<strong>“Back pain in a hypertensive patient is musculoskeletal.”</strong> Check both arms and the pulses.",
        "<strong>“Medical control is the cure.”</strong> After control the patient goes to the OR."
      ]))
    ], [
      Q("chain", "A dissection patient is given nitroprusside before any beta-blocker. What is the predicted heart-rate response and its effect?", ["Reflex tachycardia that increases force on the torn aorta", "Bradycardia that protects the aorta", "No change in heart rate", "Immediate healing of the tear"], 0, "Vasodilation alone triggers reflex tachycardia."),
      Q("idea", "Why is aortic dissection lowered faster and further than other emergencies?", ["Every beat at high pressure propagates the tear toward rupture", "The brain is not at risk in dissection", "Dissection patients have no autoregulation", "It is not; the goals are identical"], 0, "Ongoing pressure directly extends the dissection."),
      Q("chain", "Why does the algorithm target HR below 60 before SBP 100–120?", ["Slowing the heart first prevents reflex tachycardia when the vasodilator starts", "Heart rate does not matter", "Low HR raises BP", "So that nitroprusside can be avoided"], 0, "HR control first, then pressure."),
      Q("bedside", "A patient with BP 210/120 has tearing back pain and BP 30 mmHg lower in the left arm. What should happen to the BP over the next 20 minutes?", ["Lower SBP to 100–120 after controlling HR", "Lower MAP 10–20% over an hour", "Leave it alone until 220/120", "Raise it to protect the spinal cord"], 0, "Suspected dissection → HR under 60 then SBP 100–120 within 20 minutes."),
      Q("bedside", "What is the one reason given to stop short of the rapid dissection BP target?", ["Signs of end-organ hypoperfusion", "Mild headache", "Patient preference", "Age over 60"], 0, "Lower rapidly unless end-organ hypoperfusion occurs."),
      Q("chain", "Why is morphine part of dissection treatment?", ["Pain relief lowers sympathetic drive, heart rate, and BP", "It dissolves the clot in the false lumen", "It raises BP to protect perfusion", "It treats cyanide toxicity"], 0, "Pain drives catecholamines; analgesia helps control HR and BP."),
      Q("traps", "After achieving HR 56 and SBP 112 in a dissection, what is next?", ["The operating room", "Discharge on oral meds", "Repeat CTA in 6 months", "Start tPA"], 0, "Medical control is a bridge to surgery.")
    ]),

    // ------------------------------------------------------------------
    D("hc-unopposed-alpha", "Unopposed alpha: why a beta-blocker alone backfires", "In cocaine, amphetamine, or pheochromocytoma crises, catecholamines stimulate both alpha (vasoconstriction) and beta receptors. Blocking only beta leaves all the catecholamine to squeeze vessels through alpha, so BP goes up. Labetalol blocks both.", [
      S("idea", "The idea", "<p>Catecholamines act on <strong>alpha receptors</strong> (constrict vessels) and <strong>beta receptors</strong> (speed the heart; β2 also dilates some vessels).</p><p>With a flood of catecholamines (cocaine, meth, amphetamines like Ritalin and Adderall, pheochromocytoma, cord injury, GBS), the patient is <strong>tachycardic and hypertensive</strong>. It is tempting to give a beta-blocker for the tachycardia. But then the catecholamines have only alpha receptors left to act on: <strong>unopposed alpha vasoconstriction</strong> and an even higher BP.</p><p><strong>Labetalol</strong> blocks alpha and beta together, so neither arm is left unopposed.</p>"),
      S("chain", "Cause → effect", chain([
        "Catecholamine surge → alpha (vasoconstriction) + beta (tachycardia; β2 vasodilation).",
        "Pure beta-blocker given → beta effects removed, including β2 vasodilation.",
        "All catecholamine now acts on alpha → unopposed vasoconstriction.",
        "SVR and BP rise further; coronary ischemia can worsen.",
        "Labetalol (α + β) → vasoconstriction and tachycardia both blocked → BP and HR fall."
      ]) + clar("β2 receptors in skeletal muscle arterioles mediate vasodilation; blocking them removes a counterweight to alpha constriction.")),
      S("bedside", "Why it matters clinically", "<p>A young patient with BP 220/130, HR 140, dilated pupils, and chest pain after a party: get a <strong>urine tox</strong> and treat with <strong>labetalol</strong>, not metoprolol or esmolol alone. The same reasoning governs pheochromocytoma.</p>" + HY("Catecholamine crisis: block alpha with beta, never beta alone.")),
      S("traps", "Common traps", traps([
        "<strong>“The patient is tachycardic, so give metoprolol.”</strong> In a catecholamine surge this causes unopposed alpha.",
        "<strong>“Labetalol is just another beta-blocker.”</strong> It blocks alpha-1 too, which is why it is safe here.",
        "<strong>“Only illicit drugs cause this.”</strong> Prescription amphetamines, pheochromocytoma, cord injury, and GBS do too."
      ]))
    ], [
      Q("chain", "A cocaine-intoxicated patient with BP 210/120 and HR 130 is given IV metoprolol alone. What is predicted?", ["BP rises further from unopposed alpha vasoconstriction", "BP and HR both normalize", "BP falls sharply with bradycardia only", "No change"], 0, "Blocking beta leaves catecholamines acting on alpha receptors."),
      Q("chain", "Why does labetalol avoid the problem of unopposed alpha?", ["It blocks alpha and beta receptors together", "It is an alpha agonist", "It only blocks beta-2", "It increases catecholamine breakdown"], 0, "Labetalol is a mixed alpha/beta blocker."),
      Q("idea", "Which receptor is responsible for the vasoconstriction in a catecholamine crisis?", ["Alpha-1", "Beta-1", "Beta-2", "Muscarinic"], 0, "Alpha receptors cause vasoconstriction."),
      Q("bedside", "A patient with known pheochromocytoma has a hypertensive emergency with HR 128. Which IV drug fits the lecture?", ["Labetalol", "Esmolol alone", "Propranolol alone", "Metoprolol alone"], 0, "Block both together with labetalol."),
      Q("chain", "In a catecholamine surge, what happens to beta-2-mediated vasodilation when a nonselective beta-blocker is given?", ["It is lost, so vessels constrict even more", "It increases", "It is unaffected", "It converts to alpha stimulation"], 0, "Removing β2 dilation leaves alpha constriction unopposed."),
      Q("traps", "A patient with a spinal cord injury has sudden BP 230/120 from autonomic dysfunction. What principle applies?", ["It is a sympathetic surge; avoid a beta-blocker alone", "It is a beta-receptor deficiency", "Give a pure beta-blocker first", "BP will fall on its own and needs no thought"], 0, "Severe autonomic dysfunction is listed with cocaine, amphetamines, and pheo.")
    ]),

    // ------------------------------------------------------------------
    D("hc-drug-hemodynamics", "Pick the IV drug by what it does to the heart and vessels", "Each crisis drug changes preload, afterload, heart rate, contractility, or ICP. Matching that profile to the injured organ explains the drug table: nitroglycerin for the heart, nicardipine for the brain, esmolol plus nitroprusside for the aorta, and why some drugs are forbidden.", [
      S("idea", "The idea", "<p>You do not need to memorize six drugs as a list if you know what each does:</p>" + Tbl(["Drug", "Main action", "Consequence"], [
        ["<strong>Nitroglycerin</strong>", "Veins &gt; arteries; dilates coronaries", "↓ Preload, better coronary flow → ACS, acute HF"],
        ["<strong>Nitroprusside</strong>", "Veins = arterioles; within 2 min", "Powerful ↓ BP; <strong>↑ ICP</strong>; cyanide, methemoglobin"],
        ["<strong>Nicardipine</strong>", "Arterial DHP CCB; can ↓ contractility", "Brain-friendly; avoid in AS, HFrEF, HCM"],
        ["<strong>Esmolol / labetalol</strong>", "↓ HR (labetalol also α)", "Dissection, ACS, sympathetic crisis; avoid in acute HFrEF"],
        ["<strong>Hydralazine</strong>", "Arterial dilator; reflex tachycardia", "Eclampsia; avoid in ICH, ACS, acute HF"]
      ])),
      S("chain", "Cause → effect", chain([
        "Identify the injured organ and what it needs.",
        "Heart ischemic or failing → needs ↓ preload and coronary dilation → nitroglycerin (plus loop diuretic in HF).",
        "Brain bleeding → needs BP down without ↑ ICP → nicardipine, not nitroprusside.",
        "Aorta torn → needs ↓ HR then ↓ BP fast → esmolol/labetalol, then nitroprusside.",
        "Fixed outflow obstruction or weak pump (AS, HCM, HFrEF) → arterial dilation or negative inotropy drops output → avoid nicardipine."
      ]) + clar("with a fixed outflow obstruction (AS) or dynamic one (HCM), arterial dilation lowers pressure without letting more blood out, so perfusion falls.")),
      S("bedside", "Why it matters clinically", "<p>The slide 55 algorithm is this logic in picture form: stroke → labetalol/nicardipine; ICH → nicardipine; encephalopathy → nicardipine; nephrosclerosis → fenoldopam; ACS and HF → nitroglycerin; dissection → esmolol + nitroprusside; preeclampsia → labetalol + hydralazine.</p><p>Short-acting drips (nitroprusside offsets in ~10 min, NTG in 5–10 min) can be stopped fast if BP drops too far; nicardipine's effect fades sharply in 30 min but takes ~50 h to resolve fully, longer in kidney disease.</p>"),
      S("traps", "Common traps", traps([
        "<strong>“Nitroprusside for everything because it is strongest.”</strong> It raises ICP and accumulates cyanide in renal or liver disease.",
        "<strong>“Nicardipine is safe in any heart.”</strong> Not in AS, severe HFrEF, or HCM.",
        "<strong>“Hydralazine is a gentle choice.”</strong> Reflex tachycardia aggravates angina and increases cardiac work.",
        "<strong>“NTG works the same day after day.”</strong> Tachyphylaxis in 24–48 h; never with PDE-5 inhibitors."
      ]))
    ], [
      Q("chain", "A patient with severe aortic stenosis is given IV nicardipine. What is predicted?", ["BP falls without more blood getting past the valve, so perfusion drops", "Cardiac output rises", "The valve opens wider", "No effect"], 0, "Arterial dilation past a fixed obstruction lowers pressure without raising output."),
      Q("chain", "Why does nitroglycerin suit hypertensive ACS better than hydralazine?", ["NTG lowers preload and dilates coronaries; hydralazine causes reflex tachycardia that raises demand", "Hydralazine dilates the coronaries more", "NTG raises heart rate", "They are identical"], 0, "Hydralazine aggravates angina; NTG improves supply and lowers demand."),
      Q("bedside", "A patient with ICH and raised ICP needs BP lowered. Which drug's effect on ICP makes it a poor choice?", ["Nitroprusside, which raises ICP", "Nicardipine, which lowers ICP", "Labetalol, which raises ICP", "Esmolol, which raises ICP"], 0, "Nitroprusside raises intracranial pressure."),
      Q("chain", "A patient with cirrhosis receives nitroprusside for 3 days. What is predicted?", ["Cyanide accumulation, because clearance is limited with liver disease", "Better BP control with no toxicity", "Hyperkalemia", "Methemoglobin cannot form in cirrhosis"], 0, "Cyanide clearance is limited, especially with renal or liver disease."),
      Q("bedside", "Nitroprusside's effect lasts about 10 minutes. What is the clinical advantage?", ["If BP drops too far, stopping the drip reverses it quickly", "It only needs to be given once a day", "It can be given orally", "It has no side effects"], 0, "Short offset allows rapid correction of overshoot."),
      Q("traps", "A patient with HCM is in hypertensive emergency. Which drug's contraindication list includes HCM?", ["Nicardipine", "Nitroglycerin in every case", "Labetalol", "Furosemide"], 0, "Nicardipine is contraindicated in AS, severe HFrEF, and HCM."),
      Q("chain", "A patient with CKD stops a nicardipine drip but stays hypotensive for many hours. Why?", ["Nicardipine takes about 50 hours to fully resolve, longer in kidney disease", "Nicardipine is irreversible", "Hypotension is unrelated", "CKD speeds nicardipine clearance"], 0, "The effect fades sharply but resolves fully over about 50 hours, prolonged in kidney disease.")
    ]),

    // ------------------------------------------------------------------
    D("hc-pregnancy-placenta", "Pregnancy: more volume, and a placenta that only delivery fixes", "Pregnancy expands plasma volume by half and stresses the heart, so BP can rise. Preeclampsia is driven by the placenta, which is why only delivery cures it, and drugs that harm the fetus (ACEIs, ARBs) are off the table.", [
      S("idea", "The idea", "<p>Pregnancy raises <strong>plasma volume to 150%</strong> and <strong>RBC volume by 30%</strong>. The CV system carries a heavier load, so hypertension can appear.</p><p>The timing tells you the type: present <strong>before 20 weeks</strong> (or persisting &gt; 12 weeks postpartum) = it was there before the pregnancy (chronic); appearing <strong>after 20 weeks</strong> = the pregnancy caused it (gestational).</p><p><strong>Preeclampsia</strong> is different in kind: <strong>placental insufficiency</strong> plus <strong>proteinuria</strong> (kidney damage). Because the placenta drives it, the cure is to <strong>deliver</strong> the placenta. Eclampsia adds seizures.</p>"),
      S("chain", "Cause → effect", chain([
        "Pregnancy → plasma volume ↑ 50%, RBC volume ↑ 30% → CV stress.",
        "BP above 140/90 after 20 weeks without proteinuria → gestational HTN → resolves by 12 weeks postpartum.",
        "Placental insufficiency + HTN → endothelial/kidney damage → proteinuria = preeclampsia.",
        "Brain involvement → seizures = eclampsia (an obstetric hypertensive emergency).",
        "Placenta removed (delivery) → the driver is gone → definitive treatment."
      ]) + Tbl(["Drug choice", "Reason"], [
        ["Labetalol, methyldopa, nifedipine", "Safety data in pregnancy"],
        ["Hydralazine, labetalol IV", "Emergency (eclampsia); goal SBP &lt; 150, DBP 80–100"],
        ["<strong>Never ACEI/ARB</strong>", "Fetal toxicity and death"]
      ])),
      S("bedside", "Why it matters clinically", "<p>Nulliparous women, multiple gestation, prior HTN or kidney disease, and family history raise preeclampsia risk. Seizure, headache, or visual changes from 20 weeks to 6 weeks postpartum should make you think eclampsia. A pregnancy test is part of every crisis work-up because it changes both the diagnosis and the drug list.</p>" + clar("the obstetric BP goal keeps DBP 80–100 rather than lower, protecting placental perfusion.")),
      S("traps", "Common traps", traps([
        "<strong>“HTN at 14 weeks is gestational.”</strong> Before 20 weeks it is chronic.",
        "<strong>“Treating BP cures preeclampsia.”</strong> Drugs protect the mother; delivery is definitive.",
        "<strong>“Preeclampsia ends at delivery, so postpartum seizures are something else.”</strong> The window extends to about 6 weeks postpartum.",
        "<strong>“A woman's usual lisinopril is fine to continue.”</strong> ACEIs and ARBs cause fetal toxicity and death."
      ]))
    ], [
      Q("chain", "A woman's BP was normal at 10 weeks and is 148/96 at 30 weeks without proteinuria. What do you predict at 16 weeks postpartum if this is gestational HTN?", ["BP back to normal, because gestational HTN resolves by 12 weeks postpartum", "BP still elevated", "Progression to eclampsia", "Proteinuria will appear"], 0, "Gestational HTN resolves by 12 weeks postpartum; persistence means chronic HTN."),
      Q("idea", "Why is delivery the definitive treatment for preeclampsia?", ["The placenta drives the disease, so removing it removes the cause", "Delivery lowers maternal plasma volume to zero", "Antihypertensives stop working at term", "It is not; drugs cure it"], 0, "Preeclampsia is driven by placental insufficiency."),
      Q("chain", "A preeclamptic patient develops a seizure. How does the diagnosis change?", ["It becomes eclampsia", "It becomes gestational HTN", "It becomes chronic HTN", "It is unrelated epilepsy"], 0, "Eclampsia is HTN, proteinuria, and seizure."),
      Q("bedside", "A woman with chronic HTN on losartan becomes pregnant. What is predicted if losartan continues?", ["Risk of fetal toxicity and death", "Better fetal growth", "Prevention of preeclampsia", "No effect"], 0, "ARBs, like ACEIs, have major teratogenicity."),
      Q("chain", "Why can pregnancy raise BP in a woman who never had hypertension?", ["Plasma volume rises to 150% and RBC volume 30%, stressing the CV system", "Pregnancy lowers cardiac output", "Pregnancy reduces blood volume", "Pregnancy blocks the RAAS completely"], 0, "Volume expansion stresses the CV system."),
      Q("bedside", "A 24-year-old at 3 weeks postpartum has BP 168/108, severe headache, and blurred vision. What should you consider?", ["Postpartum preeclampsia/eclampsia, which occurs up to about 6 weeks postpartum", "Nothing pregnancy-related, since she delivered", "Gestational diabetes", "Normal postpartum recovery"], 0, "The obstetric window extends to about 6 weeks postpartum."),
      Q("traps", "Which pregnant patient is at highest predicted risk of preeclampsia?", ["A first pregnancy with twins and prior kidney disease", "A third pregnancy with a singleton and no history", "A second pregnancy after an uncomplicated first", "A singleton with no personal or family history"], 0, "Nulliparity, multiple gestation, and renal disease raise risk.")
    ])
  ]);
})();
