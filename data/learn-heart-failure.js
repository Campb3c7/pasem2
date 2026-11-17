/*
  Heart Failure "from zero" lessons (engine: learn-path.js, figures: cardio3-learn.js).
  Same visual step-by-step style as the other Cardio Part 3 paths (Anna, 2026-11-16). Facts follow Brandell's deck
  (source-material/cardio-part-3/text/heart-failure.md) as built into data/heart-failure.js; anything not on the slides
  is marked "(standard teaching)". Analogies are teaching aids.
  Lesson ids (hfl-*) are progress keys: never rename. Checks: K(prompt, answer, [wrong], why).
*/
(function () {
  "use strict";
  function K(prompt, answer, wrong, why) { return { prompt: prompt, answer: answer, wrong: wrong, why: why }; }
  function hy(x) { return '<div class="box-hy"><span class="lbl">Key idea</span>' + x + "</div>"; }
  function an(x) { return '<div class="box-mnemonic"><span class="lbl">Picture it</span>' + x + "</div>"; }
  function mn(x) { return '<div class="box-mnemonic"><span class="lbl">Mnemonic</span>' + x + "</div>"; }
  function std(x) { return '<div class="box-fix"><span class="lbl">Standard teaching</span>' + x + "</div>"; }
  function obj(id, mode, label, note) {
    return { label: label, note: note, objective: { course: "cardio-part-3", lecture: "heart-failure", mode: mode, id: id } };
  }

  var parts = [
    { id: "p1", title: "Part 1 · Why a weak heart gets weaker", blurb: "What heart failure is, the pump basics, and the body's rescue systems that help today and hurt tomorrow. Every drug later in the lecture blocks one of them." },
    { id: "p2", title: "Part 2 · Types and diagnosis", blurb: "Can't squeeze vs can't relax, left vs right, HFrEF vs HFpEF, the symptoms, the three classification systems and the workup." },
    { id: "p3", title: "Part 3 · Treating chronic heart failure", blurb: "Lifestyle, the RAAS blockers, beta blockers and friends, the diuretics by where they work in the kidney, then putting it together stage by stage." },
    { id: "p4", title: "Part 4 · Acute decompensated heart failure", blurb: "The patient gasping in the ED: what set it off, how to confirm it, the airway, nitroglycerin and Lasix, what NOT to give, and who gets admitted." }
  ];

  var lessons = [
    /* ---------------- 1 ---------------- */
    {
      id: "hfl-what-is-hf", part: "p1", title: "What heart failure is", goal: "The heart can't pump enough for the body's needs, and it's common, deadly and expensive.",
      pages: [
        { title: "A pump that can't keep up", fig: [{ type: "vent", kind: "normal", small: true }, { type: "vent", kind: "hfref", small: true }],
          html: "<p>In heart failure the heart <strong>can't move enough blood</strong> for what the body needs, either because it can't <strong>squeeze</strong> well or can't <strong>fill</strong> well. Blood that isn't moved forward <strong>backs up</strong>, and that backup is most of the symptoms.</p>" +
            "<p>On the left, a normal ventricle. On the right, a stretched, weak one (HFrEF) that barely changes size when it beats.</p>" },
        { title: "The numbers", fig: { type: "tiles", items: [["👥", "~5.8 million", "Americans; 46% more by 2030"], ["🆕", "~870,000", "new cases a year"], ["⚖️", "45% / 55%", "HFrEF / HFpEF"], ["⏳", "~60%", "die within 5 years of diagnosis"], ["🏥", "85%", "hospitalized at least once (40% four times)"], ["💵", "#1 Medicare cost", "$30.7 billion"]] },
          html: "<p>Heart failure keeps growing because people live longer and survive the heart disease that causes it. Lifetime risk is about <strong>1 in 5</strong>, as high in women as in men.</p>" +
            hy("Over <strong>75%</strong> had <strong>HTN or CAD</strong> first. HF with CAD is the most common picture in <strong>men</strong>; HF with HTN in <strong>women</strong>.") },
        { title: "Who gets it", fig: { type: "tiles", items: [["💔", "CAD, especially MI", "ischemic cardiomyopathy"], ["🩸", "Hypertension", ""], ["🧱", "LVH, cardiomyopathies", ""], ["🎵", "Valve disease", ""], ["🍬", "Diabetes", ""], ["⚖️", "Obesity", ""], ["🚬", "Smoking", ""]] },
          html: "<p>Risk by ethnicity, highest to lowest: <strong>Black → Hispanic → White → Asian</strong>, likely reflecting how common HTN and diabetes are in each group.</p>" +
            "<p><strong>Social determinants</strong> (access to care, food, medicines, follow-up, transport) shape how well HTN and diabetes are controlled, so they change who gets HF.</p>" }
      ],
      checks: [
        K("What precedes heart failure in over 75% of patients?", "Hypertension or CAD", ["Valve infection", "Thyroid disease", "Asthma"], "Most HF grows out of long-standing HTN or coronary disease."),
        K("About what fraction of heart failure is HFpEF?", "55%", ["10%", "25%", "90%"], "The deck splits HF into 45% HFrEF and 55% HFpEF."),
        K("What is the most common HF picture in women?", "HF with hypertension", ["HF with CAD", "HF from myocarditis", "HF from valve infection"], "CAD dominates in men; hypertension in women.")
      ],
      remember: [
        "HF = the heart can't pump enough for the body; blood <strong>backs up</strong>.",
        "~5.8 million in the US; HFrEF 45%, HFpEF 55%; <strong>~60% 5-year mortality</strong>; #1 Medicare cost.",
        "<strong>&gt; 75% had HTN or CAD first</strong>. Men: HF + CAD. Women: HF + HTN.",
        "Risk factors: CAD/MI, HTN, LVH, cardiomyopathy, valves, DM, obesity, smoking."
      ],
      practice: [ obj("01-definition-epidemiology", "test", "Test: the numbers", "Quick recall."), obj("02-risk-factors-sdoh", "learn", "Lecture: risk factors", "The deck's card.") ]
    },

    /* ---------------- 2 ---------------- */
    {
      id: "hfl-pump-basics", part: "p1", title: "Pump basics: preload, afterload, squeeze", goal: "Stroke volume has three knobs; only afterload works against you.",
      pages: [
        { title: "Cardiac output", fig: { type: "eq", terms: [["CO", "", "per minute"], "=", ["HR", "", "beats/min"], "×", ["SV", "", "per beat"]] },
          html: "<p><strong>Cardiac output</strong> is the blood the heart ejects each minute. It drops when you sleep and rises when you exercise. The ability to raise it is your <strong>cardiac reserve</strong>.</p>" +
            "<p>Heart rate is set by the nerves (sympathetic speeds it up, parasympathetic slows it). Stroke volume has three knobs.</p>" },
        { title: "The three knobs on stroke volume", fig: { type: "eq", terms: [["SV", "", "per beat"], "←", ["Preload", "↑", "how full"], ["Contractility", "↑", "how hard"], ["Afterload", "↓", "what it pushes against"]] },
          html: "<ul><li><strong>Preload</strong>: the pressure on the ventricle walls from the blood filling it at the end of diastole (EDV). More filling → more stretch → bigger stroke.</li>" +
            "<li><strong>Contractility</strong> (inotropy): how hard the muscle squeezes.</li>" +
            "<li><strong>Afterload</strong>: the force needed to eject, set by <strong>SVR</strong> and wall tension. More afterload → <strong>smaller</strong> stroke.</li></ul>" +
            mn("<strong>\"Pre, After, Squeeze.\"</strong> Only <strong>afterload</strong> works against you.") },
        { title: "Frank-Starling: stretch helps, up to a point", fig: { type: "starling", curves: ["normal", "failing"], dots: [{ curve: "failing", x: 80, label: "failing heart, full" }], flat: true },
          html: "<p><strong>Frank-Starling</strong>: the more the ventricle fills before it contracts, the more it pumps out, like a rubber band stretched further.</p>" +
            "<p>A <strong>failing</strong> heart sits on a lower, flatter curve. Past a point, adding more volume barely raises output; it just raises pressure, and the extra fluid goes to the <strong>lungs</strong>.</p>" +
            hy("This is why a failing heart can be <strong>overloaded with fluid</strong> and still have <strong>low output</strong>.") }
      ],
      checks: [
        K("Which change LOWERS stroke volume?", "Higher afterload", ["Higher preload", "Higher contractility", "A stronger squeeze"], "The ventricle has to push harder against more resistance, so less gets out."),
        K("What is preload?", "Pressure on the ventricle walls from end-diastolic filling", ["The resistance the ventricle pumps against", "The heart rate", "How hard the muscle squeezes"], "Preload is how full and stretched the ventricle is before it contracts."),
        K("Why does extra fluid help a failing heart only a little?", "It sits on the flat part of a lower Starling curve", ["Fluid lowers afterload", "Fluid raises contractility directly", "Failing hearts can't fill at all"], "On the flat part more stretch adds little output, mostly congestion.")
      ],
      remember: [
        "<strong>CO = HR × SV</strong>; cardiac reserve = ability to raise CO.",
        "SV ← <strong>preload</strong> (↑ helps), <strong>contractility</strong> (↑ helps), <strong>afterload</strong> (↑ hurts).",
        "<strong>Frank-Starling</strong>: more stretch → stronger squeeze, up to a point; a failing heart's curve is lower and flatter."
      ],
      practice: [ obj("03-physiology", "learn", "Lecture: physiology", "The terms and CO = HR × SV."), obj("03-physiology", "test", "Test yourself", "Recall the terms.") ]
    },

    /* ---------------- 3 ---------------- */
    {
      id: "hfl-rescue-systems", part: "p1", title: "The rescue systems that backfire", goal: "SNS, RAAS and ADH prop up output today and wreck the heart tomorrow.",
      pages: [
        { title: "Help now, harm later", fig: { type: "cycle", nodes: ["Low cardiac output", "SNS, RAAS, ADH switch on", "Faster, tighter, more fluid", "Heart works harder, stretches, scars", "Weaker heart"], center: "vicious cycle" },
          html: "<p>When output drops, the body fights back with five <strong>compensatory mechanisms</strong>: <strong>SNS, RAAS, ADH, natriuretic peptides, remodeling</strong>.</p>" +
            "<p>They keep up <strong>cardiac reserve</strong>, which is why early HF can go unnoticed. But most of them also <strong>drive HF forward</strong>.</p>" +
            hy("Nearly every chronic HF drug that saves lives <strong>blocks one of these systems</strong>.") },
        { title: "1 · The sympathetic nervous system", fig: { type: "flow", steps: ["Low CO<br><small>baroreceptors notice</small>", "Norepinephrine + epinephrine", "↑ HR, ↑ squeeze → CO up<br><small>(good, fast)</small>", "↑ O₂ demand, ischemia, ↑ afterload, arrhythmias<br><small>(bad, long term)</small>"], hi: 3 },
          html: "<p>The SNS is the <strong>fastest</strong> helper. But a fast heart needs more oxygen (ischemia, weaker muscle), clamped vessels raise <strong>afterload</strong> and cut kidney flow, and β stimulation causes <strong>arrhythmias</strong>.</p>" +
            "<p>That's why <strong>beta blockers</strong> help chronic HF.</p>" },
        { title: "2 · RAAS", fig: { type: "flow", steps: ["Low flow to the kidney", "Renin → angiotensin II → aldosterone", "Salt + water kept; vessels squeezed", "Short term: preload ↑, SV ↑", "Long term: overstretched, fibrotic, remodeled heart"], hi: 4 },
          html: "<p>The kidney thinks the body is dry, so it holds salt and water and squeezes the vessels. More fluid helps through Frank-Starling... at first.</p>" +
            "<p>Then the extra stretch raises wall tension and O₂ use, the squeeze raises afterload, and <strong>angiotensin II</strong> acts on the heart itself: <strong>hypertrophy, cell death, fibrosis</strong>.</p>" +
            "<p>That's why <strong>ACE inhibitors, ARBs, ARNI</strong> and <strong>aldosterone antagonists</strong> help.</p>" },
        { title: "3 · ADH (vasopressin)", fig: { type: "quad", x: ["V1 receptor", "V2 receptor"], y: ["Where", "Long-term harm"], cells: [["Vessels and heart muscle", "vasoconstriction, more squeeze", "ok"], ["Kidney collecting ducts", "keeps free water", "blue"], ["Hypertrophy, LV remodeling", "", "bad"], ["Congestion and hyponatremia", "", "bad"]] },
          html: "<p>High norepinephrine and angiotensin II make the hypothalamus release <strong>ADH</strong>.</p>" +
            mn("<strong>V1 = Vessels</strong>. <strong>V2 = 2 kidneys</strong> (water).") +
            "<p>Free water kept without salt dilutes the blood: that's why advanced HF patients get <strong>hyponatremia</strong>.</p>" }
      ],
      checks: [
        K("Which compensatory mechanism is the most immediate?", "The sympathetic nervous system", ["Remodeling", "RAAS", "Natriuretic peptides"], "Norepinephrine acts within seconds of low output."),
        K("Angiotensin II acting directly on the heart causes what?", "Hypertrophy, myocyte death and fibrosis", ["Thinner, more elastic walls", "Slower heart rate", "More natriuresis"], "That remodeling is why RAAS blockers help."),
        K("Why do advanced HF patients get hyponatremia?", "ADH (V2) makes the kidney keep free water", ["Aldosterone wastes sodium", "The SNS blocks sodium intake", "BNP is too low"], "Free water kept without salt dilutes the blood."),
        K("Which ADH receptor causes vasoconstriction?", "V1", ["V2", "β1", "AT1 only"], "V1 = vessels.")
      ],
      remember: [
        "Five compensations: <strong>SNS, RAAS, ADH, natriuretic peptides, remodeling</strong>.",
        "SNS: fastest; ↑ HR and contractility, then ischemia, ↑ afterload, arrhythmias.",
        "RAAS: salt/water + squeeze; angiotensin II → hypertrophy, fibrosis, remodeling.",
        "ADH: <strong>V1 = vessels</strong> (squeeze, remodeling), <strong>V2 = kidneys</strong> (water → congestion, hyponatremia).",
        "Help short term, harm long term → the drugs block them."
      ],
      practice: [ obj("04-sns", "learn", "Lecture: the SNS", "Card with the chain."), obj("05-raas", "learn", "Lecture: RAAS", "Card with the chain."), obj("06-adh", "test", "Test: ADH", "V1 vs V2.") ]
    },

    /* ---------------- 4 ---------------- */
    {
      id: "hfl-peptides-remodeling", part: "p1", title: "The good guys: ANP and BNP", goal: "Stretch releases natriuretic peptides that fight back, until they're overpowered.",
      pages: [
        { title: "Stretch → peptides → let go of salt", fig: { type: "flow", steps: ["Chambers stretch", "ANP (atria) + BNP (ventricles)", "Natriuresis, diuresis, vasodilation", "Block SNS, RAAS, ADH"] },
          html: "<p>When the atria and ventricles are stretched, they release <strong>ANP</strong> (atria) and <strong>BNP</strong> (ventricles). These do the opposite of the bad systems: dump salt and water, open vessels, lower pulmonary pressure, and inhibit the SNS, RAAS and vasopressin.</p>" +
            "<p>Over time, RAAS and the SNS <strong>overpower</strong> them: levels stay high, but they stop working well.</p>" },
        { title: "BNP as a lab test", fig: { type: "tiles", items: [["🧪", "NT-proBNP", "a byproduct of BNP; rises early in HF"], ["📈", "Tracks severity", "higher = worse"], ["⚠️", "Can be normal on treatment", "diuretics and ACEi lower it"]] },
          html: "<p>Because stretch makes BNP, measuring it tells you how stretched the heart is.</p>" +
            hy("A treated chronic HF patient can have a <strong>normal BNP</strong>: diuretics and ACE inhibitors lower it.") +
            "<p>Hold onto neprilysin for later: it's the enzyme that breaks these peptides down, and <strong>Entresto</strong> blocks it.</p>" },
        { title: "Remodeling: the heart changes shape", fig: [{ type: "vent", kind: "hfref", small: true }, { type: "vent", kind: "hfpef", small: true }],
          html: "<p>Risk factors, comorbidities and all the compensations <strong>reshape</strong> the heart muscle. Remodeling brings altered mechanics, <strong>arrhythmias</strong> and more ischemia.</p>" +
            "<p>Two shapes you'll meet in the next part: <strong>eccentric</strong> (dilated, thin: HFrEF) and <strong>concentric</strong> (thick, stiff: HFpEF).</p>" +
            hy("Every compensation helps short term and harms long term, <strong>except the natriuretic peptides</strong>, which help but get overpowered.") }
      ],
      checks: [
        K("Where is BNP made?", "The ventricles", ["The atria", "The kidney", "The hypothalamus"], "ANP comes from the atria, BNP from the ventricles."),
        K("A stable HF patient on furosemide and lisinopril has a normal BNP. Does that rule out HF?", "No: those drugs lower BNP", ["Yes: HF always raises BNP", "Yes, if the EKG is normal", "No: BNP is only for MI"], "Treatment lowers BNP, so a normal level doesn't exclude chronic HF."),
        K("Which compensatory mechanism helps rather than harms?", "Natriuretic peptides", ["RAAS", "The SNS", "ADH"], "ANP and BNP fight congestion; the others drive progression.")
      ],
      remember: [
        "<strong>ANP (atria), BNP (ventricles)</strong>: released by stretch; natriuresis, vasodilation; block SNS, RAAS, ADH.",
        "Overpowered over time: levels high, effect weak.",
        "NT-proBNP: rises early, tracks severity; <strong>can be normal on diuretics/ACEi</strong>.",
        "Remodeling: eccentric (dilated) vs concentric (thick); causes arrhythmias and ischemia."
      ],
      practice: [ obj("07-natriuretic-peptides", "test", "Test: natriuretic peptides", "Quick recall."), obj("08-remodeling", "learn", "Lecture: remodeling", "How it all fits.") ]
    },

    /* ---------------- 5 ---------------- */
    {
      id: "hfl-squeeze-relax", part: "p2", title: "Can't squeeze vs can't relax", goal: "Systolic dysfunction lowers EF; diastolic dysfunction keeps EF normal but can't fill.",
      pages: [
        { title: "Ejection fraction", fig: [{ type: "vent", kind: "normal", small: true }, { type: "vent", kind: "hfref", small: true }, { type: "vent", kind: "hfpef", small: true }],
          html: "<p><strong>Ejection fraction</strong> = the % of blood pumped out with each beat. Normal is <strong>55 to 70%</strong>.</p>" +
            "<ul><li><strong>Systolic dysfunction</strong>: can't <strong>squeeze</strong> → EF ↓.</li><li><strong>Diastolic dysfunction</strong>: can't <strong>relax</strong> (stiff wall) → can't fill → output ↓ even though EF is <strong>normal</strong>.</li></ul>" +
            an("Systolic = a <strong>weak hand</strong> squeezing a big sponge. Diastolic = a <strong>stiff sponge</strong> that can't soak up water; it squeezes out the little it holds just fine.") },
        { title: "Why speed hurts the stiff heart", fig: { type: "flow", steps: ["Stiff ventricle fills slowly", "Fast HR or AF = shorter filling time", "Even less filling", "Output drops: fatigue, dyspnea"], hi: 1 },
          html: "<p>A diastolic heart needs <strong>time to fill</strong>. Tachycardia or arrhythmia makes it worse; slowing the heart helps.</p>" +
            "<p>A systolic heart, by contrast, leaves blood behind each beat; preload rises, the ventricle dilates, and blood backs up: <strong>crackles</strong> and <strong>edema</strong>.</p>" },
        { title: "Causes of each", fig: { type: "grid", cols: ["Systolic: can't squeeze", "Diastolic: can't relax or expand"], rows: [
              ["<strong>Damaged muscle</strong>: ischemic heart disease, dilated cardiomyopathy, myocarditis", "<strong>Squeezed from outside</strong>: pericardial effusion, constrictive pericarditis"],
              ["<strong>Volume overload</strong>: anemia", "<strong>Too thick</strong>: hypertrophy, HCM"],
              ["<strong>Pressure overload</strong>: hypertension, valve stenosis", "<strong>Slow to relax</strong>: aging, hypertension, ischemia"]] },
          html: mn("Systolic = <strong>can't squeeze</strong> (damaged, overloaded). Diastolic = <strong>can't relax or expand</strong> (squeezed from outside, too thick, too old).") }
      ],
      checks: [
        K("What is a normal ejection fraction?", "55 to 70%", ["20 to 30%", "35 to 45%", "85 to 100%"], "The deck gives 55-70% as normal."),
        K("A patient with diastolic dysfunction has a low cardiac output. Why?", "The stiff ventricle can't fill, so preload is low", ["The EF is very low", "The valves leak", "The heart rate is too slow"], "Diastolic HF keeps EF normal but fills poorly."),
        K("Which is a cause of DIASTOLIC dysfunction?", "Constrictive pericarditis", ["Dilated cardiomyopathy", "Myocarditis", "Anemia"], "Constriction squeezes the heart from outside so it can't expand."),
        K("Why does atrial fibrillation worsen diastolic heart failure?", "A fast rate shortens filling time", ["AF raises the EF too much", "AF thins the ventricle wall", "AF lowers afterload"], "A stiff heart needs time to fill.")
      ],
      remember: [
        "EF normal <strong>55-70%</strong>.",
        "Systolic: ↓ contractility → <strong>↓ EF</strong>; causes: ischemia, DCM, myocarditis, volume (anemia) or pressure (HTN, stenosis) overload.",
        "Diastolic: stiff/slow relaxation → <strong>normal EF</strong>, poor filling; causes: pericardial disease, hypertrophy/HCM, aging, HTN, ischemia.",
        "Tachycardia hurts diastolic HF; slowing the heart helps."
      ],
      practice: [ obj("09-systolic-diastolic", "learn", "Lecture: systolic vs diastolic", "Cards and causes."), obj("09-systolic-diastolic", "apply", "Apply: which dysfunction?", "Cases.") ]
    },

    /* ---------------- 6 ---------------- */
    {
      id: "hfl-left-right", part: "p2", title: "Left vs right: follow the backup", goal: "Left failure floods the lungs; right failure floods the body.",
      pages: [
        { title: "One loop", fig: { type: "backup" },
          html: "<p>Blood goes around one loop: body → <strong>right heart</strong> → lungs → <strong>left heart</strong> → body. When one side fails, blood <strong>backs up behind it</strong>. You don't need to memorize two symptom lists: just ask <strong>what is upstream</strong>.</p>" },
        { title: "Left-sided failure → wet lungs", fig: { type: "backup", side: "left" },
          html: "<p>Blood backs up LV → LA → <strong>lungs</strong>: pulmonary edema, <strong>rales</strong>, cough with <strong>frothy sputum</strong>, <strong>orthopnea</strong>, <strong>PND</strong>, hypoxia and cyanosis.</p>" +
            "<p>Forward failure (too little out): fatigue, poor exercise tolerance, confusion, narrow pulse pressure, worse kidney function.</p>" +
            "<p>Most common causes: <strong>hypertension</strong> and <strong>acute MI</strong>; also aortic or mitral valve disease.</p>" },
        { title: "Right-sided failure → wet body", fig: { type: "backup", side: "right" },
          html: "<p>Blood backs up into the <strong>systemic veins</strong>: <strong>JVD</strong> (the key sign), <strong>dependent edema</strong>, weight gain, <strong>hepatomegaly</strong> and RUQ pain, splenomegaly, <strong>ascites</strong>, GI congestion (anorexia, poor absorption), anasarca.</p>" +
            hy("The most common cause of right failure is <strong>left failure</strong>. A lung cause (pulmonary hypertension) gives <strong>cor pulmonale</strong>. Long term, HF usually involves <strong>both sides</strong>.") }
      ],
      checks: [
        K("Rales, orthopnea and frothy sputum point to failure of which side?", "Left", ["Right", "Neither: it's always COPD", "Only the atria"], "The left heart backs blood up into the lungs."),
        K("What is the key sign of right-sided heart failure?", "JVD", ["Rales", "Frothy sputum", "PND"], "Right failure backs blood into the neck veins."),
        K("What is the most common cause of right heart failure?", "Left heart failure", ["Pneumonia", "Aortic stenosis", "Anemia"], "Backed-up pressure from the left side loads the right ventricle."),
        K("A long-time COPD patient develops JVD and leg edema with clear lungs. Likely cause?", "Cor pulmonale", ["Left-sided failure from HTN", "Mitral stenosis", "Myocarditis"], "Lung disease raises pulmonary pressure and fails the right ventricle.")
      ],
      remember: [
        "Ask <strong>what's upstream</strong>: left → lungs; right → body.",
        "Left: <strong>rales, orthopnea, PND, frothy sputum</strong>, hypoxia; fatigue, confusion; causes HTN, acute MI, aortic/mitral disease.",
        "Right: <strong>JVD</strong>, dependent edema, hepatomegaly, ascites, anorexia; most common cause = <strong>left failure</strong>; lungs → <strong>cor pulmonale</strong>.",
        "Long term: usually both sides."
      ],
      practice: [ obj("10-right-left", "learn", "Lecture: right vs left", "The comparison card."), obj("10-right-left", "apply", "Apply: which side?", "Cases.") ]
    },

    /* ---------------- 7 ---------------- */
    {
      id: "hfl-hfref-hfpef", part: "p2", title: "HFrEF vs HFpEF", goal: "Dilated with an S3 vs thick with an S4.",
      pages: [
        { title: "Two shapes", fig: [{ type: "vent", kind: "hfref", small: true }, { type: "vent", kind: "hfpef", small: true }],
          html: "<p><strong>HFrEF</strong> (reduced EF): systolic dysfunction bad enough to lower the EF on echo. The heart remodels <strong>eccentrically</strong>: elongated and dilated.</p>" +
            "<p><strong>HFpEF</strong> (preserved EF): HF with a normal EF; once called \"diastolic HF\". The heart remodels <strong>concentrically</strong>: thick walls, fibrosis, poor relaxation.</p>" +
            std("Usual EF cutoffs: HFrEF ≤ 40%, HFpEF ≥ 50% (41-49% is \"mildly reduced\"). The deck defines them by echo without numbers.") },
        { title: "Side by side", fig: { type: "grid", cols: ["", "HFrEF", "HFpEF"], rows: [
              ["Share", "45%", "55%"],
              ["Shape", "<strong>Eccentric</strong>: dilated", "<strong>Concentric</strong>: thick, fibrotic"],
              ["Heart rate", "Resting sinus tachycardia, maybe AF", "<strong>Chronotropic incompetence</strong>: can't speed up"],
              ["Main symptom", "Dyspnea, fatigue, congestion", "<strong>Exercise intolerance</strong>"],
              ["Extra sound", "<strong>S3</strong> \"Lub-Dub-Tah\" (+ MR)", "<strong>S4</strong> \"Tah-Lub-Dub\""],
              ["PMI", "Laterally displaced, sustained", "Usually not displaced"],
              ["proBNP", "More often high", "Less high (less stretch)"]] },
          html: an("<strong>S3</strong> = blood splashing into a <strong>big floppy</strong> ventricle right after S2. <strong>S4</strong> = the atrium <strong>kicking</strong> blood into a <strong>stiff</strong> one just before S1.") }
      ],
      checks: [
        K("Which heart sound goes with HFpEF?", "S4", ["S3", "Opening snap", "Ejection click"], "The atrial kick into a stiff ventricle makes an S4."),
        K("What remodeling shape goes with HFrEF?", "Eccentric (dilated)", ["Concentric (thick)", "No change", "Only the atria enlarge"], "The weak ventricle stretches and elongates."),
        K("A key HFpEF feature is the inability to raise the heart rate with exercise. What is it called?", "Chronotropic incompetence", ["Sinus arrhythmia", "Pulsus alternans", "Orthopnea"], "HFpEF patients can't speed up, so exercise tolerance suffers.")
      ],
      remember: [
        "HFrEF: <strong>eccentric/dilated</strong>, sinus tachy/AF, <strong>S3</strong>, MR, displaced PMI, BNP higher.",
        "HFpEF: <strong>concentric/thick</strong>, <strong>chronotropic incompetence</strong>, <strong>exercise intolerance</strong>, <strong>S4</strong>, BNP lower.",
        "Cutoffs (standard): HFrEF ≤ 40%, HFpEF ≥ 50%."
      ],
      practice: [ obj("11-hfref-hfpef", "test", "Test: HFrEF vs HFpEF", "Quick recall."), obj("11-hfref-hfpef", "apply", "Apply: which type?", "Cases.") ]
    },

    /* ---------------- 8 ---------------- */
    {
      id: "hfl-symptoms", part: "p2", title: "What the patient tells you and what you find", goal: "Dyspnea first; PND vs orthopnea; edema where gravity puts it.",
      pages: [
        { title: "Symptoms", fig: { type: "grid", cols: ["Symptom", "Why"], rows: [
              ["<strong>Dyspnea</strong> (most common), fatigue", "Low O₂ delivery; ask about changes in what they can do"],
              ["<strong>Orthopnea</strong>", "Breathless within minutes of lying flat; sleeps on pillows or upright"],
              ["<strong>PND</strong>", "Wakes after a while lying down, choking, sits up for relief; usually comes before orthopnea"],
              ["Thirst", "ADH"],
              ["<strong>Nocturia</strong>", "Lying down eases kidney vasoconstriction and returns fluid"],
              ["Oliguria", "Kidneys underperfused"],
              ["Anxiety, confusion, memory problems", "Brain gets less flow"]] },
          html: an("Lying down, the fluid that sat in your legs all day slides back into the chest. Fast = <strong>orthopnea</strong> (minutes). Slow = <strong>PND</strong> (hours, wakes you up).") },
        { title: "Exam", fig: { type: "tiles", items: [["💓", "Tachycardia", "sinus or AF; cool, pale, sweaty"], ["🫁", "Rales at the bases", "pulmonary edema: rales + wheezes everywhere"], ["🥁", "Pleural effusion", "dull to percussion, ↓ breath sounds"], ["🫙", "JVD, hepatic congestion", "ascites, RUQ pain, early satiety"], ["🦶", "Symmetric pitting edema", "feet if walking, sacrum if in bed"], ["🎯", "Displaced, sustained PMI", "cardiomegaly"], ["🦴", "Cardiac cachexia", "advanced HF"]] },
          html: "<p>Edema goes where <strong>gravity</strong> takes it: ankles in someone walking, the <strong>sacrum</strong> in someone bedbound. In terminal HF it becomes <strong>anasarca</strong>. Chronic edema leaves <strong>stasis dermatitis</strong>.</p>" }
      ],
      checks: [
        K("What is the most common HF symptom?", "Dyspnea", ["Chest pain", "Syncope", "Palpitations"], "Breathlessness from low output and congestion leads the list."),
        K("A patient wakes 2 hours after falling asleep, gasping, and sits on the bed edge for relief. What is this?", "PND", ["Orthopnea", "Sleep apnea only", "Panic attack"], "PND wakes the patient after time lying flat; orthopnea comes within minutes."),
        K("Where does edema collect in a bedbound HF patient?", "The sacrum", ["The ankles only", "The face", "The hands"], "Fluid follows gravity to the lowest part of the body.")
      ],
      remember: [
        "Dyspnea (most common), fatigue, <strong>orthopnea</strong> (minutes), <strong>PND</strong> (wakes them; comes first), thirst, nocturia, oliguria, confusion.",
        "Exam: tachycardia, cool skin, <strong>rales</strong>, effusion (dullness), <strong>JVD</strong>, hepatic congestion, symmetric pitting edema (sacral if bedbound), displaced PMI, cachexia."
      ],
      practice: [ obj("12-symptoms-exam", "learn", "Lecture: symptoms and exam", "The deck's cards."), obj("12-symptoms-exam", "test", "Test yourself", "Recall.") ]
    },

    /* ---------------- 9 ---------------- */
    {
      id: "hfl-classify", part: "p2", title: "Framingham, NYHA and AHA stages", goal: "Framingham diagnoses, NYHA grades symptoms, AHA stages guide therapy.",
      pages: [
        { title: "Framingham: making the diagnosis", fig: { type: "framingham" },
          html: "<p>HF is a <strong>clinical diagnosis</strong>: there's no single test. The <strong>Framingham criteria</strong> are the most sensitive and specific clinical tool.</p>" +
            hy("Diagnosis: <strong>2 major</strong>, OR <strong>1 major + 2 minor</strong>.") },
        { title: "NYHA: how limited is the patient now?", fig: { type: "tiles", items: [["I", "Class I", "no symptoms with ordinary activity"], ["II", "Class II", "dyspnea with exertion: stairs, raking, snow, trash"], ["III", "Class III", "dyspnea with ordinary activity; OK at rest"], ["IV", "Class IV", "symptoms at rest; mostly bedbound"]] },
          html: "<p>NYHA is used <strong>after</strong> HF is diagnosed, to rate <strong>symptom severity</strong>. It can move <strong>up and down</strong> as treatment works or fails (standard teaching).</p>" },
        { title: "AHA stages: a one-way street", fig: { type: "flow", steps: ["<strong>A</strong><br><small>at risk, no structural disease (HTN, DM, obesity)</small>", "<strong>B</strong><br><small>structural disease, no symptoms (prior MI, LVH)</small>", "<strong>C</strong><br><small>structural disease + symptoms</small>", "<strong>D</strong><br><small>refractory: symptoms at rest despite max therapy</small>"] },
          html: "<p>AHA stages are built on <strong>risk factors and structural disease</strong>, and they <strong>guide therapy</strong>. They only move <strong>forward</strong>: a stage C patient who feels great is still stage C.</p>" +
            mn("<strong>A</strong> = At risk. <strong>B</strong> = Built wrong (structure). <strong>C</strong> = Complaints. <strong>D</strong> = Done everything (refractory).") }
      ],
      checks: [
        K("Which system makes the clinical DIAGNOSIS of heart failure?", "Framingham criteria", ["NYHA class", "AHA stages", "Duke score"], "Framingham is the diagnostic tool; NYHA grades symptoms; AHA stages guide therapy."),
        K("A patient has PND and rales, nothing else. Does she meet Framingham?", "Yes: 2 major criteria", ["No: she needs 3 major", "No: she needs a BNP", "Only if she has edema"], "Two majors are enough."),
        K("A patient with a prior MI and LVH has no symptoms. AHA stage?", "B", ["A", "C", "D"], "Structural disease without symptoms is stage B."),
        K("A patient becomes breathless walking to the bathroom but is fine sitting. NYHA class?", "III", ["I", "II", "IV"], "Symptoms with ordinary activity, comfortable at rest = class III.")
      ],
      remember: [
        "Framingham = <strong>diagnose</strong>: 2 major or 1 major + 2 minor.",
        "Major: PND/orthopnea, ↑ JVP, HJR, rales, S3, enlarging heart, pulmonary edema, weight loss &gt; 10 lb in 5 days on diuretics, CVP &gt; 16.",
        "NYHA = <strong>symptoms</strong> I-IV; can go up and down.",
        "AHA = <strong>A</strong> at risk, <strong>B</strong> structure, <strong>C</strong> symptoms, <strong>D</strong> refractory; only forward."
      ],
      practice: [ obj("13-classification", "test", "Test: the three systems", "Recall."), obj("13-classification", "apply", "Apply: stage and class", "Cases.") ]
    },

    /* ---------------- 10 ---------------- */
    {
      id: "hfl-workup", part: "p2", title: "The workup", goal: "The echo defines the type; the rest finds causes and complications.",
      pages: [
        { title: "First-line tests", fig: { type: "grid", cols: ["Test", "Look for"], rows: [
              ["<strong>Echo</strong> (essential)", "Chamber size, walls, systolic and diastolic function, valves; <strong>HFrEF vs HFpEF</strong>"],
              ["EKG", "LVH, prior MI, <strong>AF</strong>, ectopy, LBBB, QT"],
              ["CXR", "<strong>Cardiomegaly</strong> (CTR &gt; 50%), <strong>Kerley lines</strong>, effusions; lags diuresis by 48 h"],
              ["CBC", "Anemia, iron deficiency"],
              ["BMP/CMP", "Na ↓, K ↓ (diuretics) or ↑ (ACEi), kidneys"],
              ["LFTs, glucose, A1c, lipids", "Congestion, risk factors"],
              ["proBNP", "Decompensation, severity"],
              ["Troponin", "Low-level leak in &gt; 50% of systolic HF (wall strain)"]] },
          html: hy("The <strong>echo is essential</strong>: it's the test that separates HFrEF from HFpEF. Repeat it with any change that would change management.") },
        { title: "When you need more", fig: { type: "tiles", items: [["🚴", "CPET", "peak VO₂ < 50% predicted → transplant or LVAD"], ["📈", "Stress echo", "CAD and filling pressures during exercise"], ["🫀", "Cath", "intermediate/high CAD probability: revascularizing ischemic HF helps"], ["🧲", "Cardiac MRI", "fibrosis, infiltrative disease, pericardium"], ["🔬", "Biopsy", "fulminant or giant cell myocarditis, sarcoid, amyloid, hemochromatosis"], ["🧬", "Genetic testing", "familial cardiomyopathy"]] },
          html: "<p>These hunt for a <strong>cause you can fix</strong> (ischemia, infiltration) or decide on <strong>advanced therapy</strong>.</p>" }
      ],
      checks: [
        K("Which test defines HFrEF vs HFpEF?", "Echocardiogram", ["CXR", "proBNP", "EKG"], "Only the echo measures the EF and filling."),
        K("What cardiothoracic ratio on CXR means cardiomegaly?", "Over 50%", ["Over 25%", "Over 80%", "Under 40%"], "A heart wider than half the chest is enlarged."),
        K("CPET shows peak VO₂ under 50% of predicted. What does it point toward?", "Transplant or LVAD evaluation", ["Discharge with no follow-up", "Starting digoxin only", "A stress test next week"], "Very low exercise capacity marks advanced HF.")
      ],
      remember: [
        "<strong>Echo essential</strong> (type, EF, valves). EKG, CXR (CTR &gt; 50%, Kerley lines), CBC, BMP, LFTs, glucose/A1c/lipids, proBNP, troponin.",
        "More: CPET (VO₂ &lt; 50% → transplant/LVAD), stress echo, cath, MRI, biopsy, genetics."
      ],
      practice: [ obj("14-workup-basics", "test", "Test: the workup", "Recall."), obj("15-workup-advanced", "learn", "Lecture: advanced testing", "The deck's card.") ]
    },

    /* ---------------- 11 ---------------- */
    {
      id: "hfl-lifestyle", part: "p3", title: "Living with HF: lifestyle and rehab", goal: "Salt, fluid, daily weights, sleep apnea, and rehab that lowers mortality.",
      pages: [
        { title: "The daily rules", fig: { type: "tiles", items: [["🧂", "Sodium 1,500 mg/day", "AHA"], ["💧", "Fluid 1-2 L/day max", ""], ["⚖️", "Daily weight + BP diary", "call if weight climbs"], ["🚭", "No smoking, alcohol, drugs", "cardiotoxins"], ["😴", "Treat sleep apnea", "~75% of HF; CPAP improves EF"], ["📅", "Follow-up every 3-6 months", "meds, salt, water, weight"]] },
          html: "<p>Goals of HF therapy: <strong>relieve symptoms</strong>, <strong>treat the cause</strong>, <strong>prevent progression and death</strong>. HFpEF is treated much like HFrEF because strong HFpEF trial data are lacking.</p>" +
            hy("The <strong>daily weight</strong> is the patient's own fluid alarm: weight comes before symptoms.") },
        { title: "Cardiac rehab", fig: { type: "flow", steps: ["Supervised exercise<br><small>20-30 min, 5 days a week</small>", "↑ LV function, endothelium, muscle", "Fewer hospitalizations", "Better quality of life AND mortality"] },
          html: "<p><strong>NYHA I to III</strong>, not IV; caution in HFpEF (exercise intolerance). Includes education, diet and medication counseling and support to return to work.</p>" +
            "<p>Barriers: insurance (Medicare covers at least one round), visits at least weekly, transportation.</p>" }
      ],
      checks: [
        K("What daily sodium limit does the AHA give for HF?", "1,500 mg", ["5,000 mg", "500 mg", "No limit"], "The deck quotes the AHA's 1,500 mg a day."),
        K("Which NYHA class should NOT do cardiac rehab?", "Class IV", ["Class I", "Class II", "Class III"], "Symptoms at rest make supervised exercise unsafe."),
        K("Why keep a daily weight diary?", "Weight gain warns of fluid before symptoms", ["To track muscle growth", "To dose statins", "It's only for diabetics"], "A rising weight is fluid building up.")
      ],
      remember: [
        "Sodium <strong>1,500 mg/day</strong>; fluid <strong>1-2 L/day</strong>; daily weight + BP; quit smoking, alcohol, drugs; lose weight; CPAP for OSA (~75%).",
        "Follow-up every 3-6 months.",
        "Cardiac rehab: <strong>NYHA I-III</strong>, 20-30 min × 5 days/week; improves QOL <strong>and mortality</strong>."
      ],
      practice: [ obj("16-lifestyle", "test", "Test: lifestyle", "Numbers."), obj("17-cardiac-rehab", "learn", "Lecture: cardiac rehab", "The card.") ]
    },

    /* ---------------- 12 ---------------- */
    {
      id: "hfl-raas-drugs", part: "p3", title: "Blocking RAAS: ACEi, ARB, ARNI, BiDil", goal: "Cough → ARB. Angioedema → no ARB, think BiDil. Entresto adds the good peptides.",
      pages: [
        { title: "ACE inhibitors (-pril)", fig: { type: "flow", steps: ["Angiotensin I", "✕ ACE inhibitor", "No angiotensin II", "↓ afterload, ↓ SNS, ↓ aldosterone, slower remodeling"], hi: 1 },
          html: "<p><strong>Enalapril, lisinopril, quinapril, ramipril.</strong> First-line, used in <strong>all AHA stages</strong> if tolerated: ↑ survival, ↓ hospitalizations, slower remodeling. Start low, titrate by kidneys and tolerance.</p>" +
            mn("ACEi problems: <strong>Cough, Angioedema, K⁺ up, low Pressure, Kidneys</strong>. Contraindicated: <strong>angioedema history, pregnancy</strong> (boxed warning), renal failure, renal artery stenosis.") },
        { title: "ARBs (-sartan) and the switch rule", fig: { type: "quad", x: ["Cough on ACEi", "Angioedema on ACEi"], y: ["Switch to", "Why"], cells: [["ARB", "✓ safe", "good"], ["NOT an ARB", "→ hydralazine + nitrate", "bad"], ["Cough comes from bradykinin; ARBs don't raise it", "(standard teaching)", ""], ["ARBs can cause angioedema too", "not a safe alternative", "bad"]] },
          html: "<p><strong>Losartan, valsartan, candesartan</strong> and the rest block angiotensin II at its receptor. <strong>As effective</strong> as ACEi at lowering HF mortality. Side effects: angioedema, hyperkalemia, hypotension. Pregnancy boxed warning.</p>" },
        { title: "Entresto (ARNI)", fig: { type: "flow", steps: ["Neprilysin normally breaks down ANP and BNP", "Sacubitril blocks neprilysin", "More of the good peptides", "+ valsartan blocks angiotensin II"], hi: 1 },
          html: "<p><strong>Sacubitril/valsartan</strong> blocks the bad system and boosts the good one. <strong>20% fewer HF hospitalizations</strong> than an ACEi; the trial stopped early for benefit. For patients tolerating a max-dose ACEi/ARB (some use it first line).</p>" +
            hy("Stop the ACEi/ARB <strong>3 days</strong> before starting Entresto (angioedema risk). Contraindicated: <strong>angioedema history</strong>, <strong>GFR &lt; 30</strong>, pregnancy.") },
        { title: "BiDil: hydralazine + isosorbide dinitrate", fig: { type: "eq", terms: [["Hydralazine", "", "arteries → ↓ afterload"], "+", ["Isosorbide dinitrate", "", "veins → ↓ preload"]] },
          html: "<p>For HFrEF (stages B-D) when the patient <strong>can't take an ACEi or ARB</strong> (angioedema, hyperkalemia, low BP, worsening kidneys), and <strong>added for Black patients</strong> with HFrEF stage C-D.</p>" +
            "<p>Side effects: hypotension, bradycardia, nausea, sweating. Never with <strong>sildenafil</strong> or other PDE inhibitors.</p>" +
            mn("<strong>H</strong>ydralazine = <strong>A</strong>rteries; <strong>I</strong>sosorbide = <strong>I</strong>nflow (veins).") }
      ],
      checks: [
        K("A patient on lisinopril develops a dry cough. Next step?", "Switch to an ARB", ["Switch to BiDil only", "Add a cough syrup and continue", "Stop all RAAS blockade forever"], "ARBs don't cause the bradykinin cough and work as well."),
        K("A patient had angioedema on an ACE inhibitor. Which is a reasonable alternative?", "Hydralazine + isosorbide dinitrate", ["Losartan", "Sacubitril/valsartan", "A higher ACEi dose"], "ARBs and Entresto can also cause angioedema."),
        K("How long must an ACE inhibitor be stopped before starting Entresto?", "3 days", ["3 weeks", "No washout", "3 hours"], "The washout lowers the angioedema risk."),
        K("What does sacubitril do?", "Blocks neprilysin so natriuretic peptides rise", ["Blocks angiotensin II receptors", "Blocks β1 receptors", "Inhibits Na-K-ATPase"], "Neprilysin breaks down ANP and BNP.")
      ],
      remember: [
        "ACEi (-pril): first line, all stages; <strong>cough, angioedema, ↑ K, hypotension, kidneys</strong>; no pregnancy.",
        "ARB (-sartan): equal benefit; <strong>cough → ARB</strong>; <strong>angioedema → NOT ARB</strong>.",
        "Entresto: sacubitril (neprilysin ✕) + valsartan; 20% fewer hospitalizations; <strong>3-day ACEi washout</strong>; no angioedema history, GFR &lt; 30, pregnancy.",
        "BiDil: hydralazine (arteries) + isosorbide (veins); ACEi/ARB intolerance and <strong>Black patients</strong>; no PDE inhibitors."
      ],
      practice: [ obj("18-acei", "test", "Test: ACE inhibitors", "Recall."), obj("26-arni", "test", "Test: Entresto", "Recall."), obj("20-bidil", "apply", "Apply: which RAAS option?", "Cases.") ]
    },

    /* ---------------- 13 ---------------- */
    {
      id: "hfl-slow-the-heart", part: "p3", title: "Beta blockers, ivabradine and digoxin", goal: "Slow the heart to let it fill; but never start a beta blocker in a crashing patient.",
      pages: [
        { title: "Beta blockers: the HF three", fig: { type: "flow", steps: ["Block β1", "Slower heart rate", "Longer filling time", "↑ EF, fewer arrhythmias and sudden deaths"] },
          html: "<p>Only three are used in HF: <strong>carvedilol, bisoprolol, metoprolol succinate</strong>. For <strong>stable</strong> HF (stages B and C): ↓ mortality, ↑ EF, fewer symptoms.</p>" +
            hy("<strong>Start low, go slow</strong>, only when the patient is stable. <strong>Hold</strong> in acute decompensation and cardiogenic shock; avoid in stage D. The crashing heart needs its sympathetic drive.") +
            mn("<strong>\"Carve a Bisque of Metal Succinate.\"</strong> Carvedilol, bisoprolol, metoprolol succinate.") },
        { title: "Ivabradine: a brake for the SA node", fig: { type: "monitor", bp: "118/72", hr: "82", uo: "OK", extra: [["On max beta blocker", "yes"]] },
          html: "<p><strong>Ivabradine</strong> blocks the SA node's <strong>funny current (I<sub>f</sub>)</strong> and lowers the heart rate. A 2nd-line add-on in stage C HFrEF.</p>" +
            hy("It lowers mortality only if the heart rate is still <strong>over 75</strong> on appropriate therapy. Under 75: no benefit.") },
        { title: "Digoxin", fig: { type: "flow", steps: ["Blocks Na-K-ATPase", "↑ calcium inside the cell", "Stronger squeeze (inotrope)", "Fewer symptoms and admissions, NO mortality benefit"], hi: 3 },
          html: "<p>Used for <strong>rate control in HF with AF</strong> and late stage C/D, after ACEi/ARB/ARNI and diuretics. Contraindicated after VT or VF. <strong>HFrEF only</strong>: calcium influx worsens diastolic function.</p>" +
            "<p>Other inotropes (milrinone and friends) <strong>raise mortality</strong> long term: they cause arrhythmias.</p>" }
      ],
      checks: [
        K("Which beta blocker is NOT one of the three used in HF?", "Atenolol", ["Carvedilol", "Bisoprolol", "Metoprolol succinate"], "Only carvedilol, bisoprolol and metoprolol succinate have HF data."),
        K("A patient arrives in acute decompensated HF on carvedilol. Start a higher dose?", "No: beta blockers are held in acute decompensation", ["Yes, double it", "Yes, switch to IV", "Only if HR is over 100"], "The failing heart needs sympathetic support in the crash."),
        K("Ivabradine lowers mortality only when the heart rate on therapy is:", "Over 75", ["Under 60", "Under 75", "Any rate"], "Below 75 there's no benefit."),
        K("What does digoxin NOT do in HFrEF?", "Lower mortality", ["Reduce symptoms", "Reduce hospitalizations", "Help rate control in AF"], "Digoxin helps symptoms but not survival.")
      ],
      remember: [
        "HF beta blockers: <strong>carvedilol, bisoprolol, metoprolol succinate</strong>; stable stage B-C; ↓ mortality; <strong>hold in ADHF/shock</strong>.",
        "Ivabradine: I<sub>f</sub> blocker; helps only if <strong>HR &gt; 75</strong> on therapy.",
        "Digoxin: Na-K-ATPase → ↑ Ca → inotrope; AF rate control; <strong>no mortality benefit</strong>; HFrEF only; not after VT/VF."
      ],
      practice: [ obj("21-beta-blockers", "test", "Test: beta blockers", "Recall."), obj("28-ivabradine", "test", "Test: ivabradine", "Recall."), obj("27-digoxin", "test", "Test: digoxin", "Recall.") ]
    },

    /* ---------------- 14 ---------------- */
    {
      id: "hfl-diuretics", part: "p3", title: "Diuretics by where they work", goal: "Walk down the nephron: SGLT2, loop, thiazide, potassium-sparing.",
      pages: [
        { title: "The map", fig: { type: "nephron" },
          html: "<p>All diuretics make the kidney dump <strong>salt and water</strong> → ↓ volume → ↓ preload and congestion. Fast symptom relief, but in general <strong>no survival benefit</strong> (except spironolactone/eplerenone and SGLT2i).</p>" },
        { title: "Loops: the strongest", fig: { type: "nephron", hi: "loop" },
          html: "<p><strong>Furosemide (Lasix), bumetanide, torsemide</strong>: block NaCl in the <strong>thick ascending limb</strong>. All stages for symptoms and in decompensation. Outpatient Lasix often 20 mg daily, up to 80 mg BID in severe HF.</p>" +
            "<p>Side effects: <strong>hypokalemia</strong>, metabolic alkalosis, low volume and BP, hyponatremia, <strong>hyperuricemia</strong>, sulfa.</p>" },
        { title: "Thiazides", fig: { type: "nephron", hi: "thiazide" },
          html: "<p><strong>HCTZ, chlorthalidone, chlorothiazide, metolazone</strong>: block Na/Cl in the <strong>distal tubule</strong>. Mild; stages A-C; can be added to a loop. <strong>Ineffective if CrCl &lt; 30</strong>.</p>" +
            mn("<strong>Loops Lose calcium; Thiazides Take (keep) calcium</strong> → hypercalcemia. Both lose potassium.") },
        { title: "Potassium-sparing", fig: { type: "nephron", hi: "ksparing" },
          html: "<p><strong>Spironolactone, eplerenone</strong> block aldosterone: add-on in stage C-D, severe LV systolic dysfunction, after MI. Side effects: <strong>hyperkalemia</strong>, <strong>gynecomastia</strong>, impotence (spironolactone also blocks androgens; standard teaching). Check K first; watch with ACEi/ARB, NSAIDs, kidney disease.</p>" +
            "<p><strong>Amiloride, triamterene</strong> block the sodium channel directly: K kept, no gynecomastia.</p>" },
        { title: "SGLT2 inhibitors", fig: { type: "nephron", hi: "sglt2" },
          html: "<p><strong>Dapagliflozin (Farxiga), empagliflozin (Jardiance)</strong>: sugar and sodium leave in the urine from the <strong>proximal tubule</strong>. <strong>DAPA-HF</strong>: ↓ mortality and progression in HFrEF (NYHA II-IV) <strong>with or without diabetes</strong>.</p>" +
            "<p>Side effects: frequent urination, urinary and <strong>groin infections</strong>, hypotension, ↑ foot amputation risk.</p>" }
      ],
      checks: [
        K("Where do loop diuretics act?", "Thick ascending limb of the loop of Henle", ["Proximal tubule", "Distal convoluted tubule", "Collecting duct"], "They block NaCl reabsorption in the thick ascending limb."),
        K("Which diuretic raises serum calcium?", "Hydrochlorothiazide", ["Furosemide", "Bumetanide", "Torsemide"], "Thiazides keep calcium; loops lose it."),
        K("A man on spironolactone develops breast enlargement. What's a better option?", "Eplerenone", ["More spironolactone", "Furosemide alone", "Digoxin"], "Eplerenone is more selective, so less gynecomastia."),
        K("Dapagliflozin helps HFrEF patients:", "With or without diabetes", ["Only with diabetes", "Only with HFpEF", "Only in stage A"], "DAPA-HF showed benefit regardless of diabetes.")
      ],
      remember: [
        "Proximal tubule: <strong>SGLT2i</strong> (dapagliflozin, empagliflozin): ↓ mortality in HFrEF ± DM; groin/UTI infections.",
        "Thick ascending limb: <strong>loops</strong> (furosemide, bumetanide, torsemide): ↓ K, alkalosis, ↑ uric acid.",
        "Distal tubule: <strong>thiazides</strong>: ↑ Ca, ↓ K; useless if CrCl &lt; 30.",
        "Collecting duct: <strong>spironolactone/eplerenone</strong> (↑ K, gynecomastia), <strong>amiloride/triamterene</strong> (↑ K).",
        "Diuretics relieve symptoms; most don't improve survival."
      ],
      practice: [ obj("22-loop-diuretics", "test", "Test: loops", "Recall."), obj("24-aldosterone-antagonists", "test", "Test: aldosterone antagonists", "Recall."), obj("29-sglt2", "test", "Test: SGLT2 inhibitors", "Recall.") ]
    },

    /* ---------------- 15 ---------------- */
    {
      id: "hfl-by-stage", part: "p3", title: "Putting it together by stage", goal: "A prevent, B protect, C treat (Drain, Block, Slow), D support.",
      pages: [
        { title: "Stages A and B", fig: { type: "grid", cols: ["Stage", "Do"], rows: [
              ["<strong>A</strong> at risk", "Quit smoking, lose weight, exercise, avoid cardiotoxins; HTN with ACEi/ARB; statin; manage CAD, DM, AF"],
              ["<strong>B</strong> structure, no symptoms", "Stage A + <strong>ACEi</strong> (ARB if cough), beta blocker if HTN persists; cardiology for CAD/valves; <strong>ICD</strong> if indicated"]] },
          html: hy("<strong>ICD</strong>: HF patients are at high risk of VT and VF; the ICD shocks lethal rhythms to prevent <strong>sudden cardiac death</strong>.") },
        { title: "Stage C HFrEF: Drain, Block, Slow", fig: { type: "tiles", items: [["💧", "Drain", "diuretic"], ["🛑", "Block", "ACEi, ARB or ARNI"], ["🐢", "Slow", "beta blocker"], ["➕", "Add-ons: A-I-D-H-D", "Aldosterone antagonist, Ivabradine, Dapagliflozin, Hydralazine/nitrate, Digoxin"]] },
          html: "<p>Plus: low sodium and fluid, quit smoking, glucose control, cardiac rehab, sleep study, ICD, revascularization, valve surgery, <strong>cardiac resynchronization</strong>.</p>" +
            mn("<strong>\"Drain, Block, Slow\"</strong>, then <strong>A-I-D-H-D</strong>.") },
        { title: "Stage C HFpEF: gentle with the tank", fig: { type: "vent", kind: "hfpef" },
          html: "<p>ACEi, ARB, ARNI and BB show <strong>no mortality benefit</strong> in HFpEF. Treat congestion and comorbidities:</p>" +
            "<ul><li><strong>Diuretics</strong> for overload, but carefully: HFpEF is a <strong>filling</strong> problem, so over-diuresis drops preload and output (dizziness, syncope, worse kidneys). Potassium-sparing preferred.</li><li><strong>Control BP</strong> (often ACEi/ARB): lower BP improves diastolic function.</li><li><strong>Avoid tachycardia</strong>; restore sinus rhythm (cardioversion/ablation); pacemaker for chronotropic incompetence.</li></ul>" },
        { title: "Stage D: refractory", fig: { type: "tiles", items: [["💊", "Stage A-C drugs", "minus the beta blocker; ± digoxin"], ["⚡", "ICD, CardioMEMS", ""], ["🎈", "IABP", "inflates in diastole: ↓ afterload"], ["⚙️", "LVAD", "bridge to transplant or for good"], ["🫀", "Transplant", "younger, intractable, < 6 months to live"], ["🕊", "Hospice / palliative", "consider ICD deactivation"]] },
          html: "<p>Goals shift to <strong>symptoms, quality of life, fewer readmissions</strong> and <strong>end-of-life planning</strong>. Ultrafiltration or dialysis can remove fluid.</p>" }
      ],
      checks: [
        K("What are the three base drugs for stage C HFrEF?", "Diuretic, RAAS blocker (ACEi/ARB/ARNI), beta blocker", ["Digoxin, ivabradine, hydralazine", "Statin, aspirin, nitroglycerin", "Calcium channel blocker, diuretic, digoxin"], "Drain, Block, Slow."),
        K("Why must diuresis be gentle in HFpEF?", "It is a filling problem; too little preload drops output", ["HFpEF patients never retain fluid", "Diuretics raise the EF too much", "Loops are contraindicated in HFpEF"], "A stiff heart needs enough filling pressure to fill at all."),
        K("Which drug is dropped in stage D?", "The beta blocker", ["The diuretic", "The ACE inhibitor always", "Oxygen"], "Refractory hearts can't tolerate losing sympathetic support."),
        K("A patient with stage B HF had a run of ventricular tachycardia. What device prevents sudden death?", "ICD", ["IABP", "Holter monitor", "TR band"], "An ICD detects and shocks lethal rhythms.")
      ],
      remember: [
        "A: lifestyle, HTN (ACEi/ARB), statin. B: + ACEi (ARB if cough), BB if HTN persists, <strong>ICD</strong> if indicated.",
        "C HFrEF: <strong>Drain, Block, Slow</strong> + <strong>A-I-D-H-D</strong>; rehab, ICD, CRT, revascularization.",
        "C HFpEF: gentle diuresis (K-sparing), BP control, avoid tachycardia, keep sinus rhythm.",
        "D: no BB, ± digoxin, ICD, CardioMEMS, IABP, <strong>LVAD</strong>, transplant, palliative care."
      ],
      practice: [ obj("31-stage-c", "apply", "Apply: stage C", "HFrEF and HFpEF cases."), obj("32-stage-d", "test", "Test: stage D", "Recall."), obj("30-stage-a-b", "test", "Test: stages A and B", "Recall.") ]
    },

    /* ---------------- 16 ---------------- */
    {
      id: "hfl-adhf-recognize", part: "p4", title: "Acute HF: what set it off and how it looks", goal: "Usually someone stopped meds, ate salt, or got a new drug. They arrive sitting up and gasping.",
      pages: [
        { title: "Precipitants", fig: { type: "tiles", items: [["🩸", "Uncontrolled HTN ★", ""], ["💊", "Stopped meds; salt or fluid binge", ""], ["🫘", "Renal failure, missed dialysis", ""], ["🍸", "Cocaine, meth, alcohol", ""], ["🏥", "Iatrogenic ★", "overhydration; new BB or CCB; NSAIDs or steroids; amiodarone"]] },
          html: "<p>Hospitalization marks a point of decline: <strong>5-year mortality 60%</strong>. Starred on the deck: <strong>uncontrolled HTN</strong> and <strong>overhydration in hospital</strong>.</p>" +
            hy("Drugs that tip a patient over: <strong>negative inotropes</strong> (non-DHP CCB, starting a BB), <strong>salt-retainers</strong> (NSAIDs, steroids), new antiarrhythmics (<strong>amiodarone</strong>).") },
        { title: "The look", fig: { type: "monitor", bp: "188/104", hr: "118", uo: "↓", extra: [["SpO₂", "86%"], ["RR", "32"]] },
          html: "<p><strong>Sitting up, gasping</strong>, cool and clammy, crackles: <strong>pulmonary edema</strong> is the most common reason for the ED visit. Weight gain, leg swelling, worse exercise tolerance; tachycardia, diaphoresis, cyanosis; maybe Cheyne-Stokes breathing, confusion, AF.</p>" +
            "<p>A <strong>history of HF</strong> is the single most useful clue (specificity 90%). New-onset? Think <strong>MI</strong> or <strong>PE</strong>.</p>" },
        { title: "Tests in the ED", fig: { type: "grid", cols: ["Test", "Point"], rows: [
              ["CXR", "Congestion, cardiomegaly, Kerley lines; <strong>20% are normal</strong> on arrival"],
              ["EKG", "Finds a cause (ischemia, arrhythmia); <strong>AF</strong> correlates most with HF"],
              ["proBNP", "Undifferentiated dyspnea when unsure"],
              ["Troponin", "ACS?"],
              ["CBC, BMP, LFTs, ABG/VBG, lung US", "Infection, anemia, kidneys, liver, gas exchange"]] },
          html: hy("It's a <strong>clinical diagnosis</strong>. Tests must <strong>never delay</strong> treating respiratory distress.") }
      ],
      checks: [
        K("Which is an iatrogenic precipitant of acute HF?", "Starting an NSAID", ["Starting a statin", "Giving acetaminophen", "Lowering salt intake"], "NSAIDs retain salt and water."),
        K("A patient with suspected acute HF has a normal CXR. Does it rule out HF?", "No: about 20% have a normal CXR on arrival", ["Yes, always", "Yes, if proBNP is pending", "Only in women"], "X-ray findings can lag."),
        K("What is the most useful single history finding for acute HF?", "A prior history of HF", ["Chest pain", "Recent travel", "Fever"], "Known HF has 90% specificity.")
      ],
      remember: [
        "Precipitants: <strong>uncontrolled HTN</strong>, noncompliance, salt/fluid, renal failure/missed dialysis, cocaine/meth/alcohol, <strong>overhydration</strong>, new BB/CCB, NSAIDs/steroids, amiodarone.",
        "Look: sitting up, gasping, crackles, cool and clammy; weight gain, edema.",
        "Clinical diagnosis; CXR normal in 20%; EKG finds the cause; proBNP when unsure; don't delay treatment."
      ],
      practice: [ obj("34-adhf-precipitants", "learn", "Lecture: precipitants and presentation", "The deck's cards."), obj("35-adhf-diagnostics", "test", "Test: ED tests", "Recall.") ]
    },

    /* ---------------- 17 ---------------- */
    {
      id: "hfl-adhf-treat", part: "p4", title: "Acute HF: air, nitro, Lasix", goal: "Oxygen and NIV, nitrates before diuretics, and no BB, CCB or digoxin.",
      pages: [
        { title: "Breathing first", fig: { type: "flow", steps: ["Sit upright, monitor, 2 IVs", "O₂ to SpO₂ > 95%", "CPAP / BiPAP if needed", "Intubate if: SpO₂ < 80%, overt distress, altered mental status, NIV fails"] },
          html: "<p><strong>NIV</strong> raises chest pressure → less venous return → ↓ preload, and lowers the need to intubate. It needs a mask seal and a cooperative patient.</p>" +
            "<p>NIV contraindications: <strong>SBP &lt; 90</strong> (it lowers BP), <strong>altered mental status</strong>, dementia.</p>" },
        { title: "Nitroglycerin: drop the afterload", fig: { type: "ntg" },
          html: "<p>The failing heart is very sensitive to <strong>afterload</strong>; some get pulmonary edema at an SBP of only 150. Nitroglycerin dilates veins (↓ preload) and, at higher doses, arteries (↓ afterload), and opens coronaries.</p>" +
            "<p><strong>SL 0.4 mg every 5 min</strong> (hold if SBP &lt; 100). Side effects: headache, hypotension (persistent → volume depletion or RV infarct: give 250-500 mL saline). Contraindications: <strong>RV infarct, aortic stenosis, HCM, dehydration</strong>, PDE inhibitors.</p>" },
        { title: "Then the loop diuretic", fig: { type: "flow", steps: ["Nitrates first", "IV furosemide", "Diuresis in 10-15 min"] },
          html: "<p><strong>IV</strong> because bowel-wall edema blocks oral absorption.</p>" +
            "<ul><li>Lasix-naïve: <strong>40 mg IV</strong>.</li><li>Already on Lasix: <strong>1 to 2.5 × the daily oral dose</strong> IV.</li><li>Generally max <strong>80 mg IV</strong> in the ED with normal kidneys (more in CKD).</li></ul>" +
            hy("<strong>Nitrates before diuretics</strong>. Loops alone without nitro in hypertensive HF → worse kidneys and mortality.") },
        { title: "What NOT to give", fig: { type: "tiles", items: [["🚫", "Beta blockers", "contraindicated"], ["🚫", "Calcium channel blockers", "contraindicated"], ["🚫", "Digoxin", "contraindicated"], ["❔", "ACEi / ARB", "little data in the ED"]] },
          html: mn("Acute HF: <strong>\"No BB, No CCB, No Dig.\"</strong>") +
            "<p>The drugs that save lives long term are the wrong drugs in the crash: the heart needs its sympathetic drive right now.</p>" }
      ],
      checks: [
        K("Acute HF patient with SBP 190. What vasodilator step?", "SL nitroglycerin plus IV nitroglycerin", ["Hold all nitrates", "IV metoprolol", "Diltiazem drip"], "Over 150/100 the protocol adds IV NTG."),
        K("Which order does the deck recommend?", "Nitrates before diuretics", ["Diuretics before nitrates", "Beta blocker first", "Digoxin first"], "Lowering afterload helps breathing long before diuresis."),
        K("A Lasix-naïve patient in acute HF. IV furosemide dose?", "40 mg IV", ["400 mg IV", "5 mg PO", "80 mg PO"], "The deck's starting IV dose for a Lasix-naïve patient."),
        K("Which drug is contraindicated in acute decompensated HF?", "Diltiazem", ["Nitroglycerin", "Furosemide", "Oxygen"], "CCBs, beta blockers and digoxin are contraindicated in the crash.")
      ],
      remember: [
        "Upright, monitor, O₂ to <strong>SpO₂ &gt; 95%</strong>, NIV (not if SBP &lt; 90 or AMS); intubate if <strong>SpO₂ &lt; 80%</strong>, overt distress, AMS, NIV fails.",
        "NTG: SL 0.4 mg q5 min; <strong>&gt; 150/100 add IV</strong>; <strong>&lt; 100 stop</strong>; no RV infarct, AS, HCM, dehydration, PDE-i.",
        "IV furosemide: naïve <strong>40 mg</strong>; on Lasix <strong>1-2.5 × daily dose</strong>; usually max 80 mg; <strong>nitrates before diuretics</strong>.",
        "<strong>No BB, no CCB, no digoxin</strong>; little data for ACEi/ARB in the ED."
      ],
      practice: [ obj("37-adhf-nitroglycerin", "apply", "Apply: nitroglycerin", "BP-guided cases."), obj("38-adhf-loop", "test", "Test: loop dosing", "Recall."), obj("39-adhf-avoid", "test", "Test: what to avoid", "Recall.") ]
    },

    /* ---------------- 18 ---------------- */
    {
      id: "hfl-adhf-dispo", part: "p4", title: "Acute HF: admit, stabilize, send home safely", goal: "Most are admitted; high-risk markers decide the ICU; discharge is all about education.",
      pages: [
        { title: "Who is high risk", fig: { type: "tiles", items: [["🧠", "Persistent AMS", ""], ["🫁", "Hypoxia despite NIV", ""], ["⬇️", "Hypotension", ""], ["🧪", "Troponin up, ischemic EKG", ""], ["🫘", "BUN > 43, creatinine > 2.75", ""], ["💓", "Tachycardia, tachypnea, low urine", ""]] },
          html: "<p>High risk or ongoing cardiorespiratory compromise → <strong>ICU</strong>. Lower risk → observation on telemetry; many improve within 12-24 hours. Discharge from the ED only with a good response, no high-risk features and good support.</p>" +
            "<p><strong>Most patients are admitted</strong>: the course is unpredictable and they often come back.</p>" },
        { title: "In the hospital and out the door", fig: { type: "flow", vertical: true, steps: ["Manage symptoms, treat the cause", "Wean O₂ / NIV and IV vasodilators, inotropes, pressors", "IV diuretic → PO; optimize oral meds", "Echo to define the type and EF", "Educate: meds, sodium and fluid limits, daily weights", "Follow-up soon; cardiac rehab; sleep study"] },
          html: hy("Every discharge is a chance to prevent the next admission: <strong>education</strong> on meds, salt, fluid and daily weights.") }
      ],
      checks: [
        K("Which finding makes an acute HF patient high risk?", "Creatinine over 2.75", ["SpO₂ 98% on room air", "Normal troponin", "BUN 12"], "Kidney failure markers raise risk."),
        K("Where do most acute HF patients go from the ED?", "Admitted", ["Home the same night", "Straight to transplant", "Outpatient stress test"], "The course is unpredictable, so most are admitted."),
        K("Before discharge, the IV diuretic is:", "Switched to an oral diuretic", ["Stopped with no replacement", "Doubled", "Switched to digoxin"], "Patients go home on oral diuretics.")
      ],
      remember: [
        "High risk: AMS, hypoxia on NIV, hypotension, troponin/ischemic EKG, <strong>BUN &gt; 43, creatinine &gt; 2.75</strong>, tachycardia, tachypnea, low urine → ICU.",
        "Most are admitted; low risk → observation on tele.",
        "Inpatient: wean support, IV → PO, echo, optimize meds, <strong>educate</strong>, follow-up, rehab."
      ],
      practice: [ obj("40-adhf-admission", "test", "Test: admission", "Recall."), obj("41-adhf-inpatient-discharge", "learn", "Lecture: inpatient and discharge", "The deck's card.") ]
    }
  ];

  window.CARDIO3_LEARN = window.CARDIO3_LEARN || {};
  window.CARDIO3_LEARN["heart-failure"] = {
    prefix: "hfl", short: "Heart Failure", heading: "Heart failure from zero",
    kicker: "Heart failure, step by step",
    card: "Why a weak heart gets weaker, squeeze vs relax and left vs right, the three classification systems, every drug by what it blocks or where it works in the kidney, then the acute HF patient in the ED. Short lessons with moving pictures and a few easy checks.",
    intro: "Eighteen short lessons, one idea per page, each with a picture. Start with lesson 1: the physiology comes first, and then the drugs make sense.",
    parts: parts, lessons: lessons
  };
}());
