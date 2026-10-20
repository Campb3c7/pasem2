/*
  Concepts: Valvular Disease (same shape as data/diseases-endocrine.js).

  Each entry is a mechanism, not a disease: idea → cause/effect chain →
  bedside relevance → common traps, with a prediction-style question bank.
  Sources: source-material/cardio-part-1/text/valvular-disease.md (plus the
  physiology and H&P lectures for the bedside links). Anything the slides only
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

  window.CARDIO_CONCEPTS_VALVULAR = L("valvular-disease", "Valvular Disease", [

    // ------------------------------------------------------------------
    D("valv-murmur-timing", "Why a murmur is systolic or diastolic", "A stenotic valve makes noise when it should be open, and a leaky valve makes noise when it should be closed, so knowing which valves are open in systole vs diastole predicts every murmur's timing.", [
      S("idea", "The idea", "<p>You already know a murmur is the sound of <strong>turbulent flow</strong> through a diseased valve. The only question is <em>when</em> the turbulence happens.</p><p>Each valve has two jobs: <strong>open wide</strong> at one time and <strong>seal shut</strong> at the other. A <strong>stenotic</strong> valve fails the first job, so it is noisy while blood is trying to go <em>through</em> it. A <strong>regurgitant</strong> valve fails the second job, so it is noisy while blood should be <em>stopped</em> and is leaking backward instead.</p><p>In <strong>systole</strong> the ventricles squeeze: the aortic and pulmonic valves are open and the mitral and tricuspid valves are shut. In <strong>diastole</strong> the ventricles fill: the mitral and tricuspid valves are open and the aortic and pulmonic valves are shut. Put those two facts together and you can work out the timing of every murmur in this lecture instead of memorizing eight separate ones.</p>" + clar("the “stenosis when open, regurgitation when closed” rule is the standard reasoning behind the murmur timings the slides list; the slides give the timings, the rule explains them.")),
      S("chain", "Cause → effect", chain([
        "Systole: the ventricle contracts → aortic and pulmonic valves open; mitral and tricuspid valves close.",
        "A narrowed aortic or pulmonic valve → turbulent forward flow while it is open → systolic murmur (AS, PS).",
        "A leaky mitral or tricuspid valve → blood squirts back into the atrium while it should be shut → systolic murmur (MR, TR, MVP).",
        "Diastole: the ventricle relaxes and fills → mitral and tricuspid valves open; aortic and pulmonic valves close.",
        "A narrowed mitral or tricuspid valve → turbulent filling while it is open → diastolic murmur (MS, TS).",
        "A leaky aortic or pulmonic valve → blood falls back into the ventricle while it should be shut → diastolic murmur (AR, PR)."
      ]) + Tbl(["Valve", "Normally open in…", "Stenosis heard in…", "Regurgitation heard in…"], [
        ["Aortic / pulmonic (semilunar)", "Systole", "<strong>Systole</strong> (AS, PS)", "<strong>Diastole</strong> (AR, PR)"],
        ["Mitral / tricuspid (AV)", "Diastole", "<strong>Diastole</strong> (MS, TS)", "<strong>Systole</strong> (MR, TR, MVP)"]
      ]) + Mn("Outflow narrow or inflow leaky = systolic; outflow leaky or inflow narrow = diastolic", "Systolic: AS, PS, MR, TR (and MVP). Diastolic: AR, PR, MS, TS.") + HY("Stenosis is heard when the valve should be open; regurgitation is heard when it should be closed.")),
      S("bedside", "Why it matters clinically", "<p>The slides' murmur descriptions all follow the rule:</p>" + Tbl(["Lesion", "Timing (slides)", "Why"], [
        ["Aortic stenosis", "Systolic, crescendo-decrescendo, RUSB → carotids", "Aortic valve should be open in systole"],
        ["Pulmonic stenosis", "Systolic, crescendo-decrescendo, LUSB", "Pulmonic valve should be open in systole"],
        ["Mitral regurgitation", "Systolic, holosystolic, apex → axilla", "Mitral valve should be shut in systole"],
        ["Tricuspid regurgitation", "Systolic, holosystolic, LLSB", "Tricuspid valve should be shut in systole"],
        ["Mitral valve prolapse", "Mid-systolic click ± late systolic murmur", "Floppy mitral leaflets bow into the LA when the valve should be shut"],
        ["Aortic regurgitation", "Early diastolic decrescendo, left 2nd–4th ICS", "Aortic valve should be shut in diastole"],
        ["Pulmonic regurgitation", "Early diastolic decrescendo", "Pulmonic valve should be shut in diastole"],
        ["Mitral stenosis", "Diastolic rumble with opening snap, apex", "Mitral valve should be open in diastole"],
        ["Tricuspid stenosis", "Diastolic, like MS but at LLSB", "Tricuspid valve should be open in diastole"]
      ]) + "<p>Pair this with the H&amp;P skill of timing S1 to the carotid upstroke: once you know whether a murmur sits between S1 and S2 (systole) or between S2 and the next S1 (diastole), you have already cut the list in half.</p>"),
      S("traps", "Common traps", traps([
        "<strong>“Mitral disease is always systolic.”</strong> Mitral <em>regurgitation</em> is systolic, but mitral <em>stenosis</em> is diastolic — the mitral valve is open in diastole.",
        "<strong>“A diastolic murmur at the base must be stenosis.”</strong> The aortic and pulmonic valves are shut in diastole; a diastolic murmur there is regurgitation (AR or PR).",
        "<strong>“Systolic means the valve is leaking.”</strong> Systolic murmurs can be stenosis of an outflow valve (AS, PS) or leaking of an inflow valve (MR, TR).",
        "<strong>Forgetting that left and right mirror each other.</strong> PS behaves like AS, PR like AR, TS like MS, TR like MR — same timing, different location."
      ]))
    ], [
      Q("chain", "The aortic valve becomes narrowed. During which phase will its murmur be heard?", ["Systole — the aortic valve is supposed to be open then", "Diastole — the aortic valve is supposed to be open then", "Diastole — the aortic valve is supposed to be closed then", "Only during atrial contraction"], 0, "The aortic valve opens in systole to let the LV eject; a narrowed valve makes turbulent flow while it is open, so AS is systolic."),
      Q("chain", "The mitral valve fails to seal. During which phase does blood leak backward?", ["Systole — the LV contracts while the mitral valve should be shut", "Diastole — the LA contracts while the mitral valve should be shut", "Diastole — the LV fills through the open valve", "Neither; mitral leaks are silent"], 0, "The mitral valve is closed in systole; if it leaks, LV contraction drives blood back into the LA, so MR is systolic."),
      Q("chain", "A patient has mitral stenosis. When is the turbulence generated?", ["Diastole, as the LV fills through the narrowed open mitral valve", "Systole, as the LV ejects through the mitral valve", "Systole, as blood leaks back into the LA", "Only when the aortic valve is open"], 0, "The mitral valve opens in diastole for LV filling; a narrowed valve makes filling turbulent, so MS is diastolic."),
      Q("chain", "The aortic valve leaks. When does the murmur occur?", ["Diastole — blood falls back from the aorta into the LV while the valve should be shut", "Systole — blood leaks from the LV into the LA", "Systole — blood squeezes through a narrowed aortic valve", "Diastole — blood fills the LV through the mitral valve"], 0, "The aortic valve is closed in diastole; a leaky valve lets aortic blood flow back into the LV, so AR is diastolic."),
      Q("idea", "Which statement captures the rule for predicting murmur timing?", ["Stenosis is heard when the valve should be open; regurgitation when it should be closed", "Stenosis is always systolic; regurgitation is always diastolic", "Left-sided murmurs are systolic; right-sided murmurs are diastolic", "Murmur timing depends only on where you listen"], 0, "Each valve is open in one phase and closed in the other; failure to open (stenosis) is noisy when open, failure to close (regurgitation) is noisy when closed."),
      Q("traps", "A diastolic murmur is heard at the left upper sternal border. Which lesion fits the timing rule?", ["Pulmonic regurgitation", "Pulmonic stenosis", "Tricuspid regurgitation", "Mitral regurgitation"], 0, "The pulmonic valve should be shut in diastole, so a diastolic murmur from it means regurgitation; PS would be systolic."),
      Q("traps", "Which pair of lesions are both systolic murmurs?", ["Aortic stenosis and tricuspid regurgitation", "Aortic regurgitation and mitral stenosis", "Mitral stenosis and tricuspid stenosis", "Pulmonic regurgitation and aortic regurgitation"], 0, "Outflow valves are open in systole (stenosis heard then) and inflow valves are shut in systole (regurgitation heard then): AS and TR are both systolic."),
      Q("chain", "Why does tricuspid stenosis sound like mitral stenosis?", ["Both are narrowed AV valves, so both make turbulence during diastolic filling", "Both are outflow valves that open in systole", "Both leak blood back into the atrium", "Both are caused by aortic root dilation"], 0, "The tricuspid valve is the right-sided AV valve; like the mitral valve it opens in diastole, so its stenosis is also a diastolic murmur.")
    ]),

    // ------------------------------------------------------------------
    D("valv-pressure-volume-overload", "Pressure overload vs volume overload", "A stenotic outflow valve makes the ventricle push against more pressure, so its wall thickens (concentric hypertrophy); a leaky valve makes the ventricle handle extra volume, so its chamber stretches (eccentric hypertrophy).", [
      S("idea", "The idea", "<p>The heart muscle remodels to match the kind of extra work it is given.</p><p><strong>Pressure overload</strong> (stenosis of an outflow valve, like AS or PS): the ventricle has a normal amount of blood but must squeeze much harder to force it through a small opening. Like lifting heavy weights, the wall gets <strong>thicker</strong> — <strong>concentric hypertrophy</strong>.</p><p><strong>Volume overload</strong> (regurgitation, like AR, MR, PR, TR): the ventricle has to hold its normal filling <em>plus</em> the blood that leaked back. Like a balloon filled with more and more water, the chamber <strong>stretches and enlarges</strong> — <strong>eccentric hypertrophy</strong>.</p><p>Both changes help at first (they keep forward output normal), and both eventually fail.</p>" + clar("in concentric hypertrophy the wall thickens without the chamber enlarging; in eccentric hypertrophy the chamber dilates and the wall grows along with it.")),
      S("chain", "Cause → effect", chain([
        "Stenotic outflow valve (AS, PS) → ventricle must generate higher pressure to eject → pressure overload.",
        "Pressure overload → concentric hypertrophy → thick, stiff wall that maintains stroke volume at first.",
        "Stiff thick wall → diastolic dysfunction and higher myocardial oxygen demand → later systolic failure.",
        "Leaky valve (AR, MR, PR, TR) → ventricle receives normal filling + regurgitant volume → volume overload.",
        "Volume overload → chamber dilates (eccentric hypertrophy) → larger stroke volume keeps forward output up at first.",
        "Over-stretched myocardium loses contractile strength → systolic failure with reduced EF."
      ]) + Tbl(["", "Pressure overload", "Volume overload"], [
        ["Typical lesion", "AS (left), PS (right)", "AR, MR (left); PR, TR (right)"],
        ["Ventricle's problem", "Must push <strong>harder</strong>", "Must hold <strong>more</strong>"],
        ["Remodeling", "<strong>Concentric</strong>: thick wall", "<strong>Eccentric</strong>: dilated chamber"],
        ["Extra sound (slides)", "S4 (AS)", "S3 (AR; severe MR or TR)"],
        ["How it fails", "Stiff → diastolic, then systolic dysfunction", "Over-stretched → systolic failure, ↓ EF"]
      ]) + Mn("Stenosis = Strength training; Regurgitation = Reservoir", "Stenosis thickens the wall (concentric); regurgitation enlarges the chamber (eccentric).") + HY("Stenosis → pressure overload → concentric LVH. Regurgitation → volume overload → eccentric dilation.")),
      S("bedside", "Why it matters clinically", "<p><strong>Aortic stenosis</strong>: concentric LVH gives a <strong>sustained</strong> apical impulse and an <strong>S4</strong>; EKG may show LVH.</p><p><strong>Aortic regurgitation</strong>: eccentric dilation gives an <strong>S3</strong>, cardiomegaly on CXR, and LVH on EKG.</p><p><strong>Right side</strong>: PS → RV pressure overload → RV hypertrophy and right axis deviation on EKG. PR and TR → RV volume overload → RV dilation and cardiomegaly.</p>" + clar("an S4 is the atrium pushing blood into a stiff, thick ventricle; an S3 is blood rushing into an already over-full, dilated ventricle. That is why S4 pairs with pressure overload and S3 with volume overload.") + "<p>The fact that echo measures <strong>chamber size, wall thickness, and EF</strong> is exactly what lets it tell these two responses apart.</p>"),
      S("traps", "Common traps", traps([
        "<strong>“Regurgitation causes no hypertrophy.”</strong> AR does cause LVH — eccentric (dilation-type) rather than concentric.",
        "<strong>“A normal EF means the stenosis is mild.”</strong> In compensated AS the EF is usually ≥ 50% despite severe obstruction; LVH is hiding the problem.",
        "<strong>Swapping S3 and S4.</strong> The slides pair S4 with AS (stiff wall) and S3 with AR, severe MR, and severe TR (volume).",
        "<strong>“Mitral stenosis overloads the LV.”</strong> MS blocks LV filling; the pressure backs up into the LA and lungs instead (see the MS concept)."
      ]))
    ], [
      Q("chain", "The aortic valve gradually narrows. How does the left ventricle remodel?", ["Concentric hypertrophy — the wall thickens to generate higher pressure", "Eccentric hypertrophy — the chamber dilates to hold more volume", "The ventricle thins and shrinks", "No remodeling; only the atrium changes"], 0, "AS is pressure overload: the LV must squeeze harder to eject through a small valve, so its wall thickens concentrically."),
      Q("chain", "The aortic valve leaks for years. How does the left ventricle adapt?", ["It dilates (eccentric hypertrophy) to accept normal filling plus the backflow", "It thickens concentrically with a small chamber", "It stops filling from the left atrium", "It shrinks to reduce the regurgitant volume"], 0, "AR is volume overload: the LV receives blood from the LA plus backflow from the aorta and stretches to accommodate it."),
      Q("bedside", "A patient with severe aortic stenosis has an extra heart sound. Which one fits the remodeling?", ["S4 — the atrium pushing into a stiff, thick ventricle", "S3 — rapid filling of a dilated ventricle", "Opening snap — a stiff mitral valve opening", "Mid-systolic click — prolapsing leaflets"], 0, "AS causes concentric LVH and a stiff wall; the slides list an S4 for AS."),
      Q("chain", "Pulmonic stenosis worsens. Which EKG change does the mechanism predict?", ["RV hypertrophy with right axis deviation", "LV hypertrophy only", "Left atrial enlargement only", "No change because the right ventricle cannot hypertrophy"], 0, "PS is RV pressure overload, so the RV wall thickens; the slides list RVH and right axis deviation on EKG."),
      Q("chain", "Tricuspid regurgitation becomes severe. What happens to the right ventricle?", ["It dilates from volume overload", "It thickens concentrically from pressure overload", "It shrinks because less blood enters it", "It is unaffected; only the left ventricle changes"], 0, "In TR the RV fills with normal preload plus the regurgitant volume, so the RA and RV stretch to accommodate it."),
      Q("chain", "In chronic AR, the dilated LV eventually over-stretches. What happens next?", ["Contractile strength falls → systolic failure with reduced EF", "EF rises permanently", "The wall becomes concentric and the problem resolves", "The aortic valve reseals"], 0, "Over-stretched myocardium loses contractile strength, causing systolic failure with reduced EF and backup into the LA."),
      Q("idea", "Which pairing is correct?", ["Stenosis → pressure overload → concentric; regurgitation → volume overload → eccentric", "Stenosis → volume overload → eccentric; regurgitation → pressure overload → concentric", "Both stenosis and regurgitation → concentric only", "Both stenosis and regurgitation → no ventricular change"], 0, "Pushing harder thickens the wall; holding more stretches the chamber."),
      Q("traps", "A patient with severe AS has a normal EF. What is the best interpretation?", ["Concentric LVH is compensating; severe AS can coexist with a normal EF", "The AS must be mild", "The patient has regurgitation instead", "EF is irrelevant in AS"], 0, "Despite severe obstruction, EF is usually ≥ 50% early because LVH maintains stroke volume; once EF falls, prognosis worsens.")
    ]),

    // ------------------------------------------------------------------
    D("valv-as-fixed-output", "Aortic stenosis: a thick ventricle with a fixed output", "In aortic stenosis the hypertrophied LV keeps output normal at rest but cannot raise it with exertion and needs more oxygen, which explains exertional angina, dyspnea, and syncope.", [
      S("idea", "The idea", "<p>Imagine the aortic valve as a doorway that slowly shrinks. At rest, a strong, thick LV can still push enough blood through. But when the body asks for <strong>more</strong> (exercise, heat), the doorway will not let more out — <strong>cardiac output becomes fixed</strong>.</p><p>Meanwhile the thick muscle is <strong>hungry for oxygen</strong> and <strong>stiff</strong>. Those three problems — fixed output, oxygen hunger, stiffness — produce the three classic symptoms: <strong>syncope, angina, and dyspnea</strong>.</p><p>Because the disease progresses slowly, patients often scale back what they do without noticing. That is the <strong>Wood phenomenon</strong>: no symptoms does not mean mild disease.</p>"),
      S("chain", "Cause → effect", chain([
        "Calcium and inflammation stiffen the leaflets → valve narrows → LV must generate higher pressure.",
        "LV hypertrophies concentrically → output maintained at rest (compensated, EF often ≥ 50%).",
        "Thick muscle → ↑ myocardial oxygen demand → exertional <strong>angina</strong>.",
        "Thick wall → stiff LV → diastolic dysfunction → exertional <strong>dyspnea</strong>, decreased exercise tolerance.",
        "Fixed output cannot rise with exertion → brain under-perfused → <strong>syncope</strong>.",
        "LV becomes too stiff and too oxygen-hungry → diastolic then systolic dysfunction (EF < 50%) → heart failure."
      ]) + Tbl(["Symptom", "Mechanism", "Survival without replacement (slides)"], [
        ["Angina", "Thick LV needs more oxygen", "~5 years"],
        ["Heart failure / dyspnea", "Stiff LV, then falling EF", "~3 years"],
        ["Syncope", "Output cannot rise to meet demand", "~2 years"]
      ]) + HY("Once AS causes symptoms, the prognosis is poor without valve replacement.")),
      S("bedside", "Why it matters clinically", "<p><strong>Stephen's case</strong> (66, HTN, dyspnea first shoveling snow, faint on very hot days) is this chain: exertion and heat ask for more output than a fixed valve allows.</p>" + clar("heat and exercise dilate peripheral vessels; normally output rises to keep blood pressure up, but in AS output cannot rise, so pressure — and brain perfusion — falls.") + "<p>That same logic is behind the management slide: <strong>careful BP control — avoid aggressive vasodilation that could drop perfusion.</strong></p><p><strong>Exam:</strong> pulsus parvus et tardus (delayed, diminished carotid upstroke), a laterally displaced and sustained apical pulse, S4, and in severe disease a paradoxical split S2.</p>" + clar("the carotid upstroke is small and late because blood is squeezed slowly through a small valve; the long LV ejection delays aortic valve closure (A2) until after P2, so the split reverses (paradoxical).") + "<p><strong>After replacement</strong> the slides note EF improves by 6 months and LVH regresses by 18 months — removing the pressure load lets the muscle remodel back.</p>"),
      S("traps", "Common traps", traps([
        "<strong>“He is asymptomatic, so his AS is mild.”</strong> Wood phenomenon: patients down-regulate activity to stay symptom-free. There is no valve size or gradient at which symptoms reliably start.",
        "<strong>“Angina in AS means coronary blockage.”</strong> In AS the thick LV's oxygen demand alone can cause exertional angina.",
        "<strong>“Lowering BP hard is always good.”</strong> With fixed output, aggressive vasodilation can drop perfusion.",
        "<strong>“A normal EF rules out severe AS.”</strong> EF stays normal in compensated AS; it falls only late, when prognosis worsens dramatically."
      ]))
    ], [
      Q("chain", "A patient with severe AS starts exercising. What happens to cardiac output?", ["It cannot rise adequately because the narrowed valve fixes output", "It rises normally because LVH strengthens the LV", "It rises more than normal because of a bigger stroke volume", "It doubles because heart rate falls"], 0, "The slides describe cardiac output in AS as fixed — unable to adjust adequately to exertion."),
      Q("chain", "Why does aortic stenosis cause exertional angina?", ["The hypertrophied LV has increased myocardial oxygen demand", "Blood leaks back from the aorta into the LV", "The left atrium dilates and fibrillates", "The pulmonary arteries constrict"], 0, "LVH increases myocardial oxygen demand; exertion raises demand further while output stays fixed."),
      Q("bedside", "A man with AS feels faint on very hot days. Which mechanism explains it?", ["Heat dilates vessels, and the fixed output cannot rise to maintain perfusion", "Heat narrows the aortic valve further overnight", "Heat causes the mitral valve to prolapse", "Heat raises diastolic pressure, causing backflow"], 0, "Vasodilation normally gets matched by more output; in AS output is fixed, so pressure and brain perfusion fall."),
      Q("chain", "Why does LVH in AS eventually cause dyspnea even before EF falls?", ["The thick wall is stiff, causing diastolic dysfunction", "The thin wall bulges outward", "Blood leaks into the right atrium", "The aortic valve leaks in diastole"], 0, "LVH increases LV stiffness, causing diastolic dysfunction; later systolic dysfunction follows."),
      Q("traps", "A 70-year-old with severe AS on echo denies symptoms but has quietly stopped climbing stairs. What explains this?", ["Wood phenomenon — he has down-regulated activity to stay asymptomatic", "His AS is mild because he has no symptoms", "He has aortic sclerosis, not stenosis", "LVH has cured the obstruction"], 0, "Patients often limit their activities to match their disease, making themselves asymptomatic; absence of symptoms does not mean mild disease."),
      Q("bedside", "Why does AS produce a delayed, diminished carotid upstroke (pulsus parvus et tardus)?", ["Blood is ejected slowly through a narrowed valve, so the pulse rises late and small", "Blood leaks back into the LV, collapsing the pulse", "The carotid artery is narrowed by plaque", "The heart rate is too fast to feel the pulse"], 0, "The stenotic valve limits and slows LV ejection, so the arterial pulse is weak and late."),
      Q("idea", "Which AS symptom carries the shortest average survival without valve replacement?", ["Syncope (~2 years)", "Angina (~5 years)", "Heart failure (~5 years)", "Palpitations (~10 years)"], 0, "Slides: angina ~5 years, heart failure ~3 years, syncope ~2 years once symptoms develop."),
      Q("chain", "Why do the slides warn against aggressive vasodilation in AS?", ["With fixed output, dropping resistance lowers pressure and perfusion", "Vasodilators make the valve calcify faster", "Vasodilation causes aortic regurgitation", "Vasodilation increases LV preload too much"], 0, "If output cannot rise, lowering resistance lowers pressure; the slide calls for careful BP control to avoid dropping perfusion.")
    ]),

    // ------------------------------------------------------------------
    D("valv-ar-pulse-pressure", "Aortic regurgitation and the wide pulse pressure", "In chronic AR the dilated LV ejects a large stroke volume that pushes systolic pressure up, then much of it falls back into the LV in diastole so diastolic pressure drops — giving a wide pulse pressure and a bounding, collapsing pulse.", [
      S("idea", "The idea", "<p>In aortic regurgitation, every beat the LV pumps a big load into the aorta, and then part of it <strong>falls back</strong> through the leaky valve while the heart refills.</p><p>Big push out → the top number (systolic) goes <strong>up</strong>. Blood draining back → the bottom number (diastolic) goes <strong>down</strong>. The gap between them — the <strong>pulse pressure</strong> — becomes <strong>wide</strong>. You can feel that as a pulse that slaps up hard and then collapses (water hammer pulse) and sometimes see it as head bobbing with each beat (de Musset's sign).</p>" + clar("the slides list wide pulse pressure, water hammer pulse, and de Musset's sign as AR findings; the high-systolic / low-diastolic explanation is the standard reasoning that links them to the backflow.")),
      S("chain", "Cause → effect", chain([
        "Incompetent aortic valve → blood leaks from aorta back into the LV during diastole.",
        "LV fills from the left atrium plus the backflow → volume overload → eccentric dilation.",
        "Larger LV volume → larger stroke volume ejected each beat → systolic pressure rises.",
        "Aortic blood drains back into the LV in diastole → diastolic pressure falls.",
        "High systolic + low diastolic → wide pulse pressure → bounding, rapidly collapsing (water hammer) pulse.",
        "Over years the over-stretched LV weakens → EF falls; blood backs up into the LA → ↑ LA pressure → dyspnea."
      ]) + Tbl(["", "Chronic AR effect", "Why"], [
        ["Systolic BP", "↑", "Large stroke volume"],
        ["Diastolic BP", "↓", "Backflow into the LV"],
        ["Pulse pressure", "<strong>Wide</strong>", "Gap between the two widens"],
        ["Murmur", "Early diastolic decrescendo", "Backflow is greatest just after the valve should close"]
      ]) + HY("AR = big stroke volume out, backflow in → wide pulse pressure and a collapsing pulse.")),
      S("bedside", "Why it matters clinically", "<p><strong>Exam findings the slides list:</strong> S3, wide pulse pressure, water hammer pulse, de Musset's sign. The long list of eponyms (Traube's, Duroziez's, Quincke's, etc.) are the same bounding-pulse physics showing up in different arteries — the slides say not to memorize them.</p><p><strong>Murmur:</strong> blowing, high-pitched, early diastolic decrescendo at the left 2nd–4th ICS; augment by having the patient lean forward, exhale, and hold.</p>" + clar("the murmur is decrescendo because the pressure difference between aorta and LV is largest at the very start of diastole and shrinks as the aorta empties and the LV fills.") + "<p><strong>Ariana's case</strong> (morbid obesity despite multiple diets and medications; dyspnea, ankle swelling, PND) opens the AR section and fits the late chain: the over-stretched LV fails and pressure backs up. Fen-phen is on the slides' list of AR causes.</p><p><strong>Causes come in two kinds:</strong> a damaged leaflet (RHD, bicuspid valve, endocarditis, fen-phen) or a stretched aortic root pulling the leaflets apart (HTN, Marfan, dissection).</p>"),
      S("traps", "Common traps", traps([
        "<strong>“Wide pulse pressure means high diastolic pressure.”</strong> In AR the diastolic pressure is <em>low</em> because blood drains back into the LV.",
        "<strong>“AR only comes from leaflet disease.”</strong> Aortic root dilation (HTN, Marfan, dissection) can make a normal valve leak.",
        "<strong>“AR is a systolic murmur because it involves the aortic valve.”</strong> The aortic valve should be shut in diastole, so leaking is heard in diastole.",
        "<strong>“Asymptomatic AR is harmless.”</strong> Chronic AR can be stable for years, but once symptoms or LV dysfunction (EF < 50%) develop, mortality and sudden-death risk rise sharply."
      ]))
    ], [
      Q("chain", "In chronic AR, what happens to diastolic blood pressure, and why?", ["It falls, because aortic blood drains back into the LV during diastole", "It rises, because the aorta stays full", "It is unchanged, because the valve closes normally", "It rises, because the LV contracts during diastole"], 0, "The leaky valve lets blood return to the LV in diastole, so aortic pressure falls lower than normal before the next beat."),
      Q("chain", "In chronic AR, why does systolic pressure tend to rise?", ["The dilated LV ejects a larger stroke volume each beat", "The aortic valve is narrowed", "The LV wall is thick and stiff", "The heart rate falls to zero"], 0, "The LV fills with normal preload plus backflow, so it ejects more blood each beat, raising systolic pressure."),
      Q("bedside", "A patient has a bounding pulse that rises quickly and then collapses, plus head bobbing with each beat. Which mechanism explains both?", ["Large stroke volume followed by diastolic backflow → wide pulse pressure", "A narrowed aortic valve slowing ejection", "Mitral leaflets prolapsing into the LA", "Pulmonary hypertension from stiff pulmonary arteries"], 0, "Water hammer pulse and de Musset's sign reflect the wide pulse pressure of AR: a big systolic surge and diastolic collapse."),
      Q("chain", "Why is the AR murmur decrescendo (loudest right after S2, then fading)?", ["The aorta-to-LV pressure difference is largest at the start of diastole and shrinks as the LV fills", "The valve opens wider as diastole goes on", "The left atrium contracts at the start of diastole", "The murmur is actually systolic"], 0, "Backflow is driven hardest when aortic pressure is highest and LV pressure lowest — right at the start of diastole."),
      Q("chain", "A patient has Marfan syndrome with a dilated aortic root but normal leaflets. Predict the valve problem.", ["Aortic regurgitation — the stretched root pulls the leaflets apart", "Aortic stenosis — the root compresses the leaflets", "Mitral stenosis — the root blocks LV filling", "No valve problem, because the leaflets are normal"], 0, "Aortic root dilation (HTN, Marfan, dissection) is an AR cause on the slides; the leaflets can no longer meet."),
      Q("chain", "Chronic AR progresses and the LV becomes over-stretched. What happens to left atrial pressure?", ["It rises, because blood backs up from the failing LV", "It falls, because the LV empties better", "It is unchanged, because the mitral valve protects the LA", "It becomes negative"], 0, "The slides note the over-dilated LV loses contractile strength and blood backs up into the LA, raising LA pressure."),
      Q("traps", "Which statement about the pulse pressure in AR is correct?", ["It is wide: systolic up, diastolic down", "It is narrow: systolic down, diastolic up", "It is wide: systolic down, diastolic up", "It is always normal in chronic AR"], 0, "High stroke volume raises systolic pressure and backflow lowers diastolic pressure, so the gap widens."),
      Q("bedside", "Which maneuver brings out the AR murmur?", ["Sit up, lean forward, exhale, and hold", "Left lateral decubitus with the bell at the apex", "Stand up quickly", "Take a deep breath in and hold"], 0, "The slides augment AR with the patient leaning forward on held expiration.")
    ]),

    // ------------------------------------------------------------------
    D("valv-acute-vs-chronic", "Acute vs chronic regurgitation: time to adapt", "A chamber that dilates slowly can absorb a regurgitant volume at near-normal pressure, but a sudden leak into a normal-sized chamber spikes its pressure, causing pulmonary edema, hypotension, and shock.", [
      S("idea", "The idea", "<p>Think of a balloon. Blow into it slowly over months and it gradually stretches, holding a lot of air without bursting. Force a big blast of air into a new, stiff balloon and the pressure inside shoots up at once.</p><p><strong>Chronic</strong> AR and MR develop slowly. The LV (in AR) or LA (in MR) has time to <strong>dilate</strong>, so it can hold the extra blood without a big pressure rise. That is why patients can be asymptomatic for years.</p><p><strong>Acute</strong> AR and MR happen suddenly — a torn leaflet, ruptured chordae, a dissection. The chamber is still <strong>normal size</strong> and cannot accept the extra volume, so its pressure <strong>skyrockets</strong>, blood backs into the lungs, and forward output collapses. It is life threatening.</p>"),
      S("chain", "Cause → effect", chain([
        "Sudden leak (endocarditis, dissection, ruptured chordae/papillary muscle, prosthetic valve failure, trauma).",
        "Regurgitant volume enters a normal-sized, un-adapted chamber (LV in AR, LA in MR).",
        "No time to dilate → chamber pressure skyrockets.",
        "Pressure backs up into the pulmonary veins → pulmonary edema.",
        "Forward output plummets → hypotension → shock.",
        "Needs bedside echo and surgical valve replacement now."
      ]) + Tbl(["", "Chronic AR / MR", "Acute AR / MR"], [
        ["Onset", "Slow", "Abrupt"],
        ["Receiving chamber", "Dilated (adapted)", "Normal size (not adapted)"],
        ["Chamber pressure", "Near-normal for years", "<strong>Skyrockets</strong>"],
        ["Presentation", "Often asymptomatic for years", "Pulmonary edema, hypotension, shock"],
        ["Management", "Serial echo; scheduled surgery", "<strong>Bedside echo + surgery now</strong>"]
      ]) + HY("The same leak is tolerated when it comes slowly and is deadly when it comes suddenly — dilation is the buffer.")),
      S("bedside", "Why it matters clinically", "<p><strong>Acute AR</strong> causes (slides): infective endocarditis, aortic dissection, prosthetic valve failure, traumatic cusp rupture. In-hospital mortality is ~30% if unrecognized/untreated.</p><p><strong>Acute MR</strong> causes (slides): ischemia/infarct of the chordae or papillary muscles, chordae rupture from infective endocarditis. LA pressure spikes and LV forward output plummets.</p><p>Link to <strong>chronic MR</strong>: there, LA dilation is the predominant coping mechanism — the very thing missing in acute MR.</p>"),
      S("traps", "Common traps", traps([
        "<strong>“Acute AR will show the classic chronic signs.”</strong> The dilation that produces the chronic picture has not had time to develop; the patient presents critically ill with pulmonary edema and shock.",
        "<strong>“A bigger leak is always worse than a smaller one.”</strong> Speed matters: a leak the chamber has had years to adapt to can be stable for 10+ years.",
        "<strong>“Acute severe regurgitation can be watched with serial echo.”</strong> Serial echo is for chronic disease; acute severe AR or MR needs surgical replacement now."
      ]))
    ], [
      Q("chain", "A papillary muscle ruptures after an MI, causing sudden severe MR. What happens to left atrial pressure?", ["It spikes, because the normal-sized LA cannot accommodate the volume", "It stays normal, because the LA dilates instantly", "It falls, because blood leaves the LA faster", "It is unaffected, because MR only affects the RV"], 0, "In acute MR the LA is normal size and cannot absorb the regurgitant volume, so its pressure spikes → pulmonary edema."),
      Q("chain", "Why can chronic AR be tolerated for years while acute AR is life threatening?", ["In chronic AR the LV has dilated to accept the extra volume at near-normal pressure", "Chronic AR involves a smaller leak by definition", "Acute AR affects the right ventricle", "Chronic AR is a stenosis, not a leak"], 0, "Slow onset gives the LV time to dilate; a sudden leak hits an un-adapted LV whose pressure skyrockets."),
      Q("chain", "A patient develops acute AR from endocarditis. Predict the blood pressure and lungs.", ["Hypotension and pulmonary edema", "Hypertension and clear lungs", "Normal BP and clear lungs", "Wide pulse pressure with no symptoms"], 0, "LV pressure skyrockets → pulmonary edema; forward output collapses → hypotension and shock."),
      Q("bedside", "Which presentation best fits acute severe aortic regurgitation?", ["Sudden pulmonary edema and shock in a patient with aortic dissection", "Ten years of mild exertional dyspnea with a dilated LV", "Exertional syncope in a 70-year-old with a harsh systolic murmur", "An incidental mid-systolic click"], 0, "Acute AR is typically from endocarditis, dissection, prosthetic failure, or trauma and presents with pulmonary edema, hypotension, and shock."),
      Q("idea", "What is the key protective adaptation that chronic regurgitation has and acute regurgitation lacks?", ["Dilation of the receiving chamber", "Concentric hypertrophy of the receiving chamber", "Narrowing of the leaky valve", "Slowing of the heart rate"], 0, "Gradual dilation lets the chamber hold the regurgitant volume without a large pressure rise."),
      Q("traps", "A patient in the ED has acute severe MR from ruptured chordae. What is the management?", ["Bedside echo and surgical valve replacement now", "Reassurance and an echo in one year", "Beta-blocker and avoid stimulants only", "Monthly IM benzathine penicillin"], 0, "Acute severe MR is life threatening; the slides call for bedside echo and surgery now."),
      Q("chain", "In acute MR, what happens to LV forward output?", ["It plummets, because much of each beat goes back into the LA", "It doubles, because the LV dilates instantly", "It is unchanged", "It rises because LA pressure falls"], 0, "With a sudden leak, a large share of each LV contraction goes backward into the LA, so forward output plummets.")
    ]),

    // ------------------------------------------------------------------
    D("valv-ms-backup", "Mitral stenosis: pressure backs up behind the valve", "A narrowed mitral valve keeps the left atrium from emptying, so LA pressure rises and backs into the lungs (dyspnea, hemoptysis, pulmonary HTN, RV failure) while the stretched LA fibrillates and forms clots.", [
      S("idea", "The idea", "<p>The mitral valve is the doorway from the left atrium into the left ventricle. When it narrows, blood <strong>piles up behind it</strong> — in the LA, then in the lungs, then in the right heart.</p><p>Notice what is <em>not</em> overloaded: the <strong>left ventricle</strong>. It actually gets <em>less</em> blood (low preload), which is why patients feel <strong>fatigue</strong> from low cardiac output.</p><p>Everything else is a traffic jam moving backward: high LA pressure → congested lungs → stiff pulmonary arteries → a struggling right ventricle.</p>"),
      S("chain", "Cause → effect", chain([
        "Rheumatic scarring (most common) narrows the mitral valve → LA cannot empty well.",
        "LA pressure rises → pulmonary venous congestion → dyspnea (exertional, orthopnea, PND); high pulmonary pressures can rupture bronchial veins → hemoptysis.",
        "High pressure dilates the LA → stretches the conduction system → atrial fibrillation (palpitations).",
        "A dilated chamber that does not empty well → stagnant blood → thrombus → thromboembolism (especially with AF).",
        "Pulmonary arteries vasoconstrict and hypertrophy → remodeling → pulmonary hypertension.",
        "RV pressures rise to push blood through stiff pulmonary vessels → eventually RV failure.",
        "Less blood reaches the LV → low preload, low cardiac output → fatigue."
      ]) + Tbl(["Condition", "Effect on LA pressure / symptoms"], [
        ["Rest, mild–moderate MS", "Strain may be too small for symptoms"],
        ["Exertion, anemia, pregnancy (heart stressed)", "<strong>↑</strong> — symptoms appear more easily"],
        ["Severe MS", "Symptoms at rest"],
        ["Loop diuretic", "↓ pulmonary congestion symptoms"]
      ]) + HY("MS spares the LV: the pressure backs up into the LA, lungs, and right heart.")),
      S("bedside", "Why it matters clinically", "<p><strong>Misty's case</strong> (42-year-old woman, fatigued for years, collapses 10 minutes into hard exercise; HR 120 irregular, BP 90/50) is the chain under stress: exertion raises demand, the LA cannot empty fast enough, and the irregular rhythm fits AF.</p>" + clar("a faster heart rate shortens diastole, leaving less time for blood to cross the narrow valve, so LA pressure climbs and LV filling — and blood pressure — falls. This is why rate control matters in MS.") + "<p><strong>Management follows the chain:</strong> loop diuretics for pulmonary congestion; rate control + anticoagulation for AF; balloon valvotomy to separate the fused cusps.</p><p><strong>Tests:</strong> EKG may show LA enlargement or AF; CXR may show LA enlargement and pulmonary vascular congestion; echo estimates LA pressure and pulmonary pressures. Severe MS is a valve area < 1.5 cm².</p><p><strong>Murmur:</strong> low-pitched diastolic rumble with an opening snap after S2, best at the apex with the bell, augmented in left lateral decubitus.</p>"),
      S("traps", "Common traps", traps([
        "<strong>“MS causes LV hypertrophy.”</strong> The LV is under-filled, not overloaded; the hypertrophy happens in the pulmonary arteries and RV.",
        "<strong>“Fatigue means the LV is failing.”</strong> In MS, fatigue reflects low LV preload and low cardiac output from a valve that will not let blood through.",
        "<strong>“Right heart failure means a right-sided valve problem.”</strong> MS causes RV failure through chronic pulmonary hypertension.",
        "<strong>“The clot comes from the ventricle.”</strong> It forms in the dilated, poorly emptying LA, especially with AF."
      ]))
    ], [
      Q("chain", "The mitral valve narrows. What happens first to left atrial pressure?", ["It rises, because the LA cannot empty well into the LV", "It falls, because less blood enters the LA", "It is unchanged; only LV pressure rises", "It falls, because the LA hypertrophies"], 0, "MS makes it hard to empty the LA, so LA pressure rises — the first step in the backup chain."),
      Q("chain", "Why does mitral stenosis lead to atrial fibrillation?", ["High LA pressure dilates the LA and stretches its conduction system", "The LV hypertrophies and irritates the SA node", "Blood leaks back into the LA in systole", "Low LA pressure slows the AV node"], 0, "Higher LA pressure dilates the LA, stretching the conduction system and leading to atrial dysrhythmias."),
      Q("chain", "In MS, what happens to left ventricular preload?", ["It falls, because less blood gets through the narrowed valve", "It rises, because the LA pushes harder", "It rises, because of regurgitant volume", "It is unchanged"], 0, "Less blood crosses the mitral valve, so LV preload and cardiac output fall — causing fatigue."),
      Q("chain", "Over years, how does mitral stenosis cause right-sided heart failure?", ["↑ LA pressure → pulmonary vasoconstriction and remodeling → pulmonary HTN → RV pressure overload → RV failure", "↑ LV pressure → aortic backflow → RV dilation", "Tricuspid valve calcification spreads from the mitral valve", "Low LA pressure lets blood pool in the RV"], 0, "Pulmonary arteries respond to high pressure by constricting and hypertrophying; pulmonary HTN raises RV pressures until the RV fails."),
      Q("bedside", "A woman with moderate MS is fine at rest but becomes short of breath in pregnancy. Which mechanism explains it?", ["When the heart is stressed, more flow must cross the narrowed valve, raising LA pressure", "Pregnancy cures the stenosis temporarily", "Pregnancy causes aortic regurgitation", "Pregnancy lowers the heart rate"], 0, "The slides note exercise, anemia, and pregnancy stress the heart so mild–moderate MS becomes symptomatic more easily."),
      Q("chain", "Why does MS increase the risk of stroke from thromboembolism?", ["Blood stagnates in the dilated, poorly emptying LA, especially with AF", "The LV wall thickens and sheds clots", "Turbulent systolic flow damages the carotids", "Diuretics thicken the blood"], 0, "Clotting occurs more readily in a chamber that doesn't empty well; AF makes the LA emptying worse."),
      Q("bedside", "A patient with MS coughs up blood. What explains it?", ["Elevated pulmonary pressures rupture bronchial veins", "Aortic dissection into the airway", "Tricuspid regurgitation raising RA pressure", "Low LA pressure collapsing the alveoli"], 0, "The slides attribute hemoptysis in MS to elevated pulmonary pressures rupturing bronchial veins."),
      Q("chain", "A patient with MS develops AF with a heart rate of 120. Predict LA pressure.", ["It rises, because a fast rate shortens diastole and leaves less time to empty the LA", "It falls, because the LA contracts more often", "It is unchanged by heart rate", "It falls, because the mitral valve opens wider"], 0, "Clarification (standard physiology): a shorter diastole means less time for blood to cross the narrow valve, so LA pressure rises and LV filling falls."),
      Q("traps", "Which chamber is NOT overloaded in pure mitral stenosis?", ["Left ventricle", "Left atrium", "Right ventricle", "Pulmonary arteries"], 0, "The LV sits downstream of the obstruction and receives less blood; the LA, pulmonary vessels, and RV take the pressure.")
    ]),

    // ------------------------------------------------------------------
    D("valv-mr-chronic", "Chronic mitral regurgitation and the dilating left heart", "In MR, every LV contraction sends blood back into the left atrium, so the LA dilates (and fibrillates), the LV dilates to handle the returning volume, and forward output slowly falls.", [
      S("idea", "The idea", "<p>When the mitral valve does not seal, each time the LV squeezes, some blood goes <strong>backward into the LA</strong> instead of forward into the aorta.</p><p>That backward blood does not disappear. It comes right back into the LV on the next filling, on top of the normal amount. So <strong>both</strong> left chambers end up handling extra volume: the LA <strong>dilates</strong> to hold it, and the LV <strong>dilates</strong> (eccentric) to accept a bigger preload.</p><p>For a long time this keeps patients comfortable. But a dilated LA fibrillates, the lungs get congested, and the LV eventually tires out — forward stroke volume falls.</p>"),
      S("chain", "Cause → effect", chain([
        "Mitral valve fails to seal → LV contraction sends blood back into the LA during systole.",
        "LA slightly hypertrophies, but <strong>dilation</strong> is its main coping mechanism.",
        "Dilated LA → stretched conduction system → atrial fibrillation risk.",
        "Regurgitant blood returns to the LV next diastole → LV dilates (eccentric) to accept the larger preload.",
        "Worsening MR → pulmonary vascular congestion → pulmonary HTN → right-sided heart failure.",
        "LV becomes increasingly dilated → forward stroke volume falls → fatigue, dyspnea, heart failure."
      ]) + Tbl(["Change", "Effect"], [
        ["↑ Regurgitant volume", "↑ LA size, ↑ LV size, ↓ forward stroke volume"],
        ["↑ LA stretch", "↑ AF risk → anticoagulation and rate/rhythm control"],
        ["Valve repaired before decline", "Prevents the dilation spiral — why surgery is recommended before significant symptoms"]
      ]) + HY("MR dilates both the LA and LV; the LA dilation is why AF is such a common partner.")),
      S("bedside", "Why it matters clinically", "<p><strong>Murmur:</strong> blowing, high-pitched, holosystolic at the apex radiating to the left axilla, with an S3 in severe cases.</p>" + clar("the LV pressure is higher than LA pressure for all of systole, so the leak runs from S1 to S2 (holosystolic); the S3 reflects the big volume rushing back into the dilated LV.") + "<p><strong>Tests:</strong> echo shows the LV → LA jet with LA and LV dilation; EKG may show LA enlargement or AF; CXR may show LA enlargement and pulmonary congestion.</p><p><strong>Secondary (functional) MR:</strong> the slides list LV dilation from other causes (e.g., dilated cardiomyopathy) and annular dilation.</p>" + clar("a dilated LV pulls the mitral leaflets apart, so MR and LV dilation can feed each other — more dilation, more leak, more dilation.") + "<p><strong>Surgery timing:</strong> repair (preferred) is recommended <em>before</em> significant symptoms or hemodynamic changes, because the dilation and falling forward output are the damage you are trying to prevent.</p>"),
      S("traps", "Common traps", traps([
        "<strong>“MR overloads only the atrium.”</strong> The leaked blood returns to the LV on the next beat, so the LV is volume-overloaded too.",
        "<strong>“All MR is mitral valve prolapse.”</strong> All MVP can lead to MR, but not all MR is MVP — RHD, endocarditis, and LV/annular dilation also cause it.",
        "<strong>“Wait for symptoms before surgery.”</strong> In MR, surgery is recommended before significant symptoms or hemodynamic changes develop.",
        "<strong>“MR sounds like AS because both are systolic.”</strong> MR is holosystolic at the apex → axilla; AS is crescendo-decrescendo at the RUSB → carotids."
      ]))
    ], [
      Q("chain", "In chronic MR, what is the left atrium's main way of coping with the regurgitant volume?", ["Dilation", "Marked concentric hypertrophy", "Shrinking to push blood forward", "Closing the mitral valve harder"], 0, "The LA slightly hypertrophies at first, but dilation is the predominant coping mechanism for the regurgitant volume."),
      Q("chain", "Why does the left ventricle dilate in chronic MR?", ["The blood that leaked into the LA returns on the next filling, increasing LV preload", "The LV must push against a narrowed aortic valve", "Blood leaks back from the aorta", "The LV receives less blood than normal"], 0, "Normal filling plus the returning regurgitant volume enlarges LV preload, so the LV dilates eccentrically."),
      Q("chain", "MR worsens over years. What happens to forward stroke volume?", ["It decreases as the LV becomes increasingly dilated", "It increases indefinitely", "It is unchanged because the LA absorbs everything", "It rises because the mitral valve narrows"], 0, "The slides state LV output eventually declines and forward stroke volume decreases as the LV dilates."),
      Q("chain", "Why is atrial fibrillation common in chronic MR?", ["The dilated LA stretches its conduction system", "The aortic valve calcifies", "The LV wall becomes too thick", "Right atrial pressure falls"], 0, "The regurgitant volume increases LA pressure and stretches the atrial conduction system."),
      Q("bedside", "Why is the MR murmur holosystolic?", ["LV pressure exceeds LA pressure throughout systole, so blood leaks from S1 to S2", "The mitral valve is only open in mid-systole", "Blood leaks only during atrial contraction", "The murmur is generated by the aortic valve"], 0, "Clarification (standard physiology): once the LV contracts it stays higher than the LA for all of systole, so the leak lasts the whole phase."),
      Q("chain", "A patient with dilated cardiomyopathy develops MR with structurally normal leaflets. Which mechanism fits?", ["Secondary (functional) MR — LV and annular dilation keep the leaflets from meeting", "Primary MR from rheumatic fusion", "Mitral stenosis from calcification", "Aortic root dilation"], 0, "The slides list LV dilation from causes such as dilated cardiomyopathy and annular dilation as secondary MR."),
      Q("chain", "Long-standing severe MR leads to which right-sided consequence?", ["Pulmonary HTN and right-sided heart failure from pulmonary congestion", "Pulmonic stenosis", "Tricuspid stenosis", "Low right atrial pressure"], 0, "Worsening MR causes pulmonary vascular congestion, leading to pulmonary HTN and right-sided heart failure."),
      Q("traps", "Why is MR surgery recommended before significant symptoms develop?", ["To prevent the progressive LA/LV dilation and falling forward output", "Because symptoms never develop in MR", "Because medications cure MR", "Because surgery is only possible when the valve is calcified"], 0, "The damage in MR is the progressive dilation and decline in output; repair before it happens preserves function.")
    ]),

    // ------------------------------------------------------------------
    D("valv-maneuvers", "Maneuvers: changing volume to change the murmur", "Bedside maneuvers change how much blood fills the heart; more blood through a stenotic valve makes its murmur louder, and less blood in the LV makes a prolapsing mitral valve click earlier.", [
      S("idea", "The idea", "<p>A murmur is turbulent flow, so anything that changes <strong>how much blood flows</strong> changes the murmur.</p><p><strong>Squatting</strong> pushes blood from the legs back to the heart → <strong>more volume</strong>. <strong>Standing</strong> and <strong>Valsalva</strong> (bearing down) let less blood return → <strong>less volume</strong>. <strong>Inspiration</strong> pulls more blood into the <strong>right</strong> heart.</p><p>So: more blood through a narrowed valve → louder. And for MVP, a <strong>smaller</strong> LV gives the floppy leaflets less room before they flop back → the click comes <strong>earlier</strong>.</p>" + clar("squatting increases venous return and LV filling; standing and Valsalva decrease venous return. Inspiration lowers intrathoracic and right atrial pressure (physiology lecture), drawing more blood into the right heart.")),
      S("chain", "Cause → effect", chain([
        "Squatting → ↑ venous return → ↑ LV volume.",
        "↑ LV volume → more blood ejected through a stenotic aortic valve → AS murmur louder.",
        "↑ LV volume → bigger LV holds the floppy mitral leaflets taut longer → MVP click later.",
        "Standing / Valsalva → ↓ venous return → ↓ LV volume → AS softer; MVP click earlier.",
        "Inspiration → ↑ venous return to the right heart → more flow across right-sided valves → TR, TS, PR louder.",
        "Position moves the source closer to the stethoscope: left lateral decubitus for MS (apex); lean forward, exhale and hold for AR."
      ]) + Tbl(["Maneuver", "Venous return / LV volume", "AS", "MVP click", "Right-sided (TR, TS, PR)"], [
        ["Squat", "↑", "<strong>Louder</strong>", "<strong>Later</strong>", "—"],
        ["Stand / Valsalva", "↓", "<strong>Softer</strong>", "<strong>Earlier</strong>", "—"],
        ["Inspiration", "↑ to right heart", "—", "—", "<strong>Louder</strong>"]
      ]) + Mn("Small ventricle, early click", "Anything that shrinks the LV (standing, Valsalva) makes the MVP click come sooner.") + HY("More blood through a lesion = louder murmur; a smaller LV = earlier MVP click.")),
      S("bedside", "Why it matters clinically", "<p>The slides give the maneuvers for each lesion: AS <strong>loudest with squatting, softer with Valsalva</strong>; MVP click/murmur <strong>earlier with standing/Valsalva, later with squatting</strong>; TR louder with inspiration (<strong>Carvallo's sign</strong>); TS loudest with inspiration; PR louder with inspiration; MS augmented in <strong>left lateral decubitus</strong>; AR augmented by <strong>leaning forward, exhale and hold</strong>.</p><p>Inspiration is the same physics as the physiological split of S2 from the H&amp;P lecture: more venous return to the right heart lengthens RV ejection and delays P2.</p>" + clar("left lateral decubitus brings the LV apex against the chest wall, and leaning forward brings the base of the heart (where the aortic valve sits) closer to the stethoscope — these change distance, not flow.")),
      S("traps", "Common traps", traps([
        "<strong>“Valsalva makes everything louder.”</strong> Valsalva reduces venous return, so the AS murmur gets softer.",
        "<strong>“Squatting makes the MVP click earlier.”</strong> Squatting increases LV volume, so the click moves later.",
        "<strong>“Inspiration louder = left-sided.”</strong> Inspiration increases return to the right heart; TR, TS, and PR get louder with it.",
        "<strong>Confusing the positioning maneuvers.</strong> MS: left lateral decubitus, bell at the apex. AR: sit up, lean forward, exhale and hold."
      ]))
    ], [
      Q("chain", "A patient with aortic stenosis squats. Predict the murmur.", ["Louder — more venous return sends more blood through the narrowed valve", "Softer — less blood reaches the LV", "Unchanged — squatting has no effect on venous return", "It becomes diastolic"], 0, "Squatting increases venous return and LV volume, so more blood crosses the stenotic valve and the murmur is louder."),
      Q("chain", "A patient with aortic stenosis performs a Valsalva maneuver. Predict the murmur.", ["Softer — less venous return means less flow across the valve", "Louder — bearing down raises flow across the valve", "It becomes holosystolic", "It moves to the apex"], 0, "Valsalva decreases venous return and LV volume, so less blood crosses the valve and the murmur softens."),
      Q("chain", "A patient with MVP stands up from squatting. What happens to the click?", ["It moves earlier in systole because the LV gets smaller", "It moves later in systole because the LV gets larger", "It disappears permanently", "It moves into diastole"], 0, "Standing lowers venous return and LV volume, so the floppy leaflets prolapse sooner and the click comes earlier."),
      Q("chain", "A systolic murmur at the LLSB grows louder with each inspiration. Which mechanism and lesion fit?", ["↑ venous return to the right heart → tricuspid regurgitation (Carvallo's sign)", "↑ LV volume → mitral regurgitation", "↓ venous return → aortic stenosis", "Leaning forward → aortic regurgitation"], 0, "Inspiration increases flow into the right heart, so right-sided murmurs like TR get louder (Carvallo's sign)."),
      Q("idea", "What is the common thread behind squatting, standing, and Valsalva changing murmurs?", ["They change venous return and therefore how much blood fills the heart", "They change the heart's electrical conduction", "They change the valve's structure", "They change blood viscosity"], 0, "These maneuvers alter preload; murmurs from turbulent flow change with the volume of blood crossing the lesion."),
      Q("chain", "An MVP patient squats. Why does the click move later?", ["A larger LV keeps the leaflets taut longer before they prolapse", "A smaller LV makes the leaflets prolapse sooner", "Squatting narrows the mitral valve", "Squatting raises right atrial pressure only"], 0, "Squatting increases LV volume, delaying prolapse and moving the click later in systole."),
      Q("traps", "A diastolic murmur becomes louder with inspiration. Which lesion is most consistent?", ["Pulmonic regurgitation", "Aortic regurgitation", "Mitral stenosis", "Aortic stenosis"], 0, "Right-sided murmurs increase with inspiration; PR is a right-sided diastolic murmur that the slides say gets louder with inspiration."),
      Q("bedside", "Why does rolling the patient into left lateral decubitus help you hear mitral stenosis?", ["It brings the LV apex closer to the chest wall and stethoscope", "It increases flow through the aortic valve", "It increases venous return to the right heart", "It makes the mitral valve leak"], 0, "Clarification (standard physiology): this position moves the apex, where the MS rumble is heard, against the chest wall.")
    ]),

    // ------------------------------------------------------------------
    D("valv-right-sided", "Right-sided valves mirror the left — and are often caused by it", "Pulmonic and tricuspid lesions follow the same pressure-vs-volume rules as aortic and mitral lesions, but they back blood up into the systemic veins, and TR and PR are most often secondary to pulmonary hypertension from left-sided or lung disease.", [
      S("idea", "The idea", "<p>Everything you learned on the left applies on the right, one side over: pulmonic is the right-sided version of aortic, and tricuspid is the right-sided version of mitral.</p><p>The difference is <strong>where the backup shows</strong>. Left-sided backup goes into the <strong>lungs</strong> (dyspnea, pulmonary edema). Right-sided backup goes into the <strong>body's veins</strong>: JVD, hepatomegaly, ascites, peripheral edema.</p><p>And the right side is often the <strong>victim</strong>, not the cause. Anything that raises pulmonary pressure — left-sided heart failure, MS, MR, lung disease — strains the RV, stretches it, and pulls the tricuspid valve open.</p>"),
      S("chain", "Cause → effect", chain([
        "Pulmonic stenosis → RV pressure overload → RV hypertrophy → severe cases: right-sided heart failure.",
        "Pulmonic regurgitation → RV volume overload → RV dilation → right-sided heart failure.",
        "Tricuspid stenosis → ↓ RV filling + ↑ RA pressure → less cardiac output and more systemic venous congestion.",
        "Tricuspid regurgitation → RV contraction pushes blood back into the RA → RA and RV stretch → right-sided heart failure.",
        "Left-sided disease or lung disease → pulmonary HTN → RV dilation → secondary (functional) TR and PR.",
        "Right-sided failure → systemic venous congestion → JVD, hepatomegaly, ascites, peripheral edema."
      ]) + Tbl(["Lesion", "Left-sided twin", "Load on RV", "Most common cause (slides)"], [
        ["Pulmonic stenosis", "AS", "Pressure → RVH", "Congenital (isolated or with TOF)"],
        ["Pulmonic regurgitation", "AR", "Volume → RV dilation", "Pulmonary HTN (adults)"],
        ["Tricuspid stenosis", "MS", "↓ filling, ↑ RA pressure", "Rheumatic, as part of mixed valve disease"],
        ["Tricuspid regurgitation", "MR", "Volume → RA/RV dilation", "Secondary: RV dilation from pulmonary HTN or RV failure"]
      ]) + HY("Whatever causes pulmonary HTN or RV failure can cause TR.")),
      S("bedside", "Why it matters clinically", "<p><strong>Right-sided congestion findings</strong> on the slides: elevated JVD, hepatomegaly, ascites, and peripheral edema (PR, TS, TR).</p><p><strong>PS</strong>: harsh systolic crescendo-decrescendo murmur at the LUSB, possible ejection click, possible wide split S2; EKG RVH with right axis deviation; CXR post-stenotic pulmonary artery dilation.</p>" + clar("a stenotic pulmonic valve prolongs RV ejection, so P2 closes even later than usual and the S2 split widens.") + "<p><strong>Management follows the cause:</strong> for PR and TR the slides say treat the underlying disease (pulmonary HTN, heart failure) along with serial echo, and replace the valve when severe.</p><p>This links back to MS and MR: both end in pulmonary HTN and right-sided failure, and both are on the slides' list of TR causes.</p>"),
      S("traps", "Common traps", traps([
        "<strong>“TR usually means a primary tricuspid valve disease.”</strong> The most common TR is secondary/functional, from RV dilation due to pulmonary HTN or RV failure.",
        "<strong>“Right-sided failure causes pulmonary edema.”</strong> Right-sided backup shows in systemic veins: JVD, liver, ascites, legs.",
        "<strong>“Tricuspid stenosis usually appears alone.”</strong> It is exceedingly rare and almost always part of rheumatic mixed valve disease, often overshadowed by mitral or aortic lesions.",
        "<strong>“PS and PR stress the RV the same way.”</strong> PS is pressure overload (hypertrophy); PR is volume overload (dilation)."
      ]))
    ], [
      Q("chain", "A patient with long-standing COPD develops pulmonary hypertension. Which valve problem does the mechanism predict?", ["Secondary tricuspid regurgitation from RV dilation", "Aortic stenosis from calcification", "Mitral stenosis from rheumatic scarring", "Mitral valve prolapse"], 0, "Pulmonary HTN dilates the RV, pulling the tricuspid valve open; whatever causes pulmonary HTN or RV failure can cause TR."),
      Q("chain", "Pulmonic stenosis makes the RV work harder. How does the RV remodel?", ["RV hypertrophy from pressure overload", "RV dilation from volume overload", "LV hypertrophy", "Left atrial dilation"], 0, "PS impedes RV outflow, causing pressure overload and RV hypertrophy."),
      Q("chain", "Tricuspid stenosis narrows the RA-to-RV opening. Predict RA pressure and cardiac output.", ["RA pressure ↑, cardiac output ↓", "RA pressure ↓, cardiac output ↑", "RA pressure ↓, cardiac output ↓", "Both unchanged"], 0, "TS reduces RV filling (preload) and raises RA pressure → less cardiac output and more systemic venous congestion."),
      Q("bedside", "A patient with severe TR has JVD, hepatomegaly, ascites, and leg edema. Why?", ["Right-sided failure backs blood up into the systemic veins", "Left-sided failure backs blood into the lungs", "Aortic backflow raises systemic pressure", "The pulmonary artery dilates"], 0, "As the RA and RV stretch and fail, pressure backs up into the systemic venous system."),
      Q("chain", "Long-standing mitral regurgitation is most likely to affect the tricuspid valve how?", ["Pulmonary HTN → RV dilation → secondary TR", "Rheumatic spread → tricuspid stenosis", "Aortic root dilation → TR", "No effect; left and right valves are independent"], 0, "MR causes pulmonary congestion and pulmonary HTN; the slides list MS and MR among causes of secondary TR."),
      Q("chain", "Pulmonic regurgitation leaks blood back into the RV during diastole. What happens to the RV?", ["It dilates from volume overload", "It hypertrophies concentrically from pressure overload", "It shrinks", "It fills less than normal"], 0, "The RV receives its normal filling plus the regurgitant volume, so it dilates."),
      Q("bedside", "Why may pulmonic stenosis produce a wide split S2?", ["Prolonged RV ejection delays pulmonic valve closure (P2)", "The aortic valve closes late", "The tricuspid valve closes early", "The LV ejects faster"], 0, "Clarification (standard physiology): RV ejection takes longer through a narrow pulmonic valve, so P2 falls further behind A2."),
      Q("traps", "Which statement about pulmonic regurgitation in adults is correct?", ["Its most common cause is pulmonary hypertension", "It is almost always congenital and isolated", "It is a systolic murmur", "It causes pressure overload hypertrophy"], 0, "The slides list pulmonary HTN as the most common cause of PR in adults; it causes RV volume overload and a diastolic murmur.")
    ]),

    // ------------------------------------------------------------------
    D("valv-rhd-pathway", "Rheumatic heart disease: from strep throat to scarred valves", "Antibodies made against strep cross-react with heart tissue, so repeated inflammation heals with fibrosis that fuses leaflets and shortens chordae — which is why treating strep and preventing recurrences prevents valve disease.", [
      S("idea", "The idea", "<p>Rheumatic heart disease is a case of mistaken identity. The immune system makes antibodies against <strong>strep</strong> proteins, but some of those antibodies also recognize the body's own tissue in the <strong>heart</strong>, joints, and vessels.</p><p>Each attack inflames the valves; each time it heals, it heals with <strong>scar</strong>. Over years the scar <strong>fuses the leaflets together</strong> at their edges and <strong>shortens the chordae</strong>. Fused leaflets cannot open wide (stenosis) and distorted leaflets cannot seal (regurgitation).</p><p>The good news hidden in that chain: every step is a chance to stop it.</p>"),
      S("chain", "Cause → effect", chain([
        "Strep throat → antibodies against strep proteins.",
        "2–4 weeks: antibodies cross-react with self antigens in heart, joints, vessels → acute rheumatic fever; pancarditis possible.",
        "Valve leaflets inflame and develop small sterile vegetations (mitral most often, then aortic).",
        "Repeated inflammation heals with fibrosis → fusion and contracture of leaflets, shortened chordae.",
        "Years–decades: thickened, calcified, fish-mouth valve → stenosis ± regurgitation (RHD).",
        "Mitral > aortic > tricuspid > pulmonic; combinations are common."
      ]) + Tbl(["Point on the pathway", "Intervention (slides)", "What it prevents"], [
        ["Strep throat", "Timely penicillin", "Essentially eliminates acute rheumatic fever"],
        ["Acute rheumatic fever", "Anti-inflammatories acutely", "Treats the acute inflammation"],
        ["After ARF", "Monthly IM benzathine penicillin", "Recurrences → greatly reduces permanent scarring and RHD"]
      ]) + HY("The main goal of treating strep throat with penicillin is to prevent acute rheumatic fever.")),
      S("bedside", "Why it matters clinically", "<p><strong>Echo findings follow the stage:</strong> in acute rheumatic fever (active inflammation) — valvular regurgitation, pericardial effusion, LV enlargement if myocarditis is severe. In chronic RHD (scar) — thickened, calcified leaflets, commissural fusion (fish-mouth), short chordae → stenosis ± regurgitation.</p><p><strong>Why it is the top cause of MS:</strong> 90% of RHD patients have mitral involvement, and rheumatic fever is the most common cause of mitral stenosis. It is also the most common cause of AS worldwide, and tricuspid stenosis is almost always rheumatic.</p><p><strong>Why it is a global problem:</strong> it is a major cause of morbidity and mortality where access to legitimate antibiotics is limited and crowding is common — the very first link in the chain (treating strep) is missing.</p><p><strong>Why repair often fails:</strong> the surgery slides list severe calcification with fused, rigid leaflets (especially rheumatic disease) as a reason to replace rather than repair.</p>"),
      S("traps", "Common traps", traps([
        "<strong>“RHD is a strep infection of the valve.”</strong> It is an autoimmune cross-reaction; the vegetations in acute rheumatic fever are sterile.",
        "<strong>“Valve disease shows up right after the sore throat.”</strong> ARF follows in 2–4 weeks, but clinically significant RHD may not appear until adulthood — years to decades later.",
        "<strong>“Once ARF happens, nothing more can be done.”</strong> Monthly IM benzathine penicillin prevents recurrences and greatly reduces permanent scarring.",
        "<strong>“Acute and chronic echo look the same.”</strong> Acute = regurgitation and effusion (inflammation); chronic = thickened, fused, calcified leaflets (scar)."
      ]))
    ], [
      Q("chain", "What is the mechanism that links strep throat to rheumatic heart disease?", ["Antibodies against strep proteins cross-react with self antigens in the heart", "Strep bacteria directly infect and destroy the valve", "Strep toxins calcify the aortic valve", "Penicillin damages the valve endothelium"], 0, "RHD is autoimmune: antibodies against strep proteins cross-react with heart, joint, and vessel antigens."),
      Q("chain", "Repeated rheumatic inflammation heals with fibrosis. Predict the valve result.", ["Leaflet fusion and contracture with shortened chordae → stenosis ± regurgitation", "Floppy, redundant leaflets → prolapse", "Normal leaflets with a dilated aortic root", "Thin leaflets that open wider than normal"], 0, "Fibrosis fuses and contracts the leaflets and shortens the chordae, leading to stenosis with or without regurgitation."),
      Q("idea", "Which intervention is the main way to prevent acute rheumatic fever?", ["Timely penicillin for strep throat", "Monthly IM penicillin for everyone with a sore throat", "Anti-inflammatories for strep throat", "Valve replacement in childhood"], 0, "The main goal of treating strep throat with penicillin is to prevent ARF; timely antibiotics essentially eliminate the risk."),
      Q("chain", "A teenager has had acute rheumatic fever. What prevents progression to permanent valve scarring?", ["Monthly IM benzathine penicillin to prevent recurrences", "A single dose of amoxicillin before dental work", "Lifelong warfarin", "Beta-blockers and avoiding stimulants"], 0, "Recurrences add scar; monthly IM benzathine penicillin prevents them and greatly reduces RHD."),
      Q("bedside", "An echo shows thickened, calcified mitral leaflets with commissural fusion (fish-mouth) and short chordae. Which stage fits?", ["Chronic rheumatic heart disease", "Acute rheumatic fever", "Mitral valve prolapse", "Acute mitral regurgitation from papillary muscle rupture"], 0, "Fusion, calcification, and short chordae are scar findings of chronic RHD; acute ARF shows regurgitation and effusion."),
      Q("chain", "Why is RHD a major cause of morbidity and mortality worldwide?", ["Limited access to legitimate antibiotics and crowding let strep go untreated", "It is caused by aging valves", "It is caused by diet medications", "It only affects patients with prosthetic valves"], 0, "Without timely antibiotics, strep progresses to ARF and RHD; crowding increases spread."),
      Q("traps", "Which valve is most commonly affected by RHD?", ["Mitral", "Aortic", "Tricuspid", "Pulmonic"], 0, "Mitral > aortic > tricuspid > pulmonic; 90% of patients with RHD have mitral valve involvement."),
      Q("bedside", "Why is a rheumatic valve often replaced rather than repaired?", ["Severe calcification with fused, rigid leaflets cannot be reconstructed well", "Rheumatic valves never calcify", "Repair requires lifelong warfarin", "Rheumatic valves are always prosthetic"], 0, "The surgery slides list severe calcification (especially rheumatic disease with fused/rigid leaflets) as a reason repair is undesirable.")
    ])
  ]);
}());
