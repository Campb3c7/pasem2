/* Cardio Part 3 Tiers: Heart Failure (Brandell deck), all three tiers, story format.
   Same shape and rules as data/tiers-cardio3-cad-part-1.js. Facts follow source-material/cardio-part-3/text/heart-failure.md;
   anything not on the slides is marked "(standard teaching)".
   Chunk ids are progress keys and question order is too: never rename a chunk, only append questions. */
(function () {
  "use strict";
  var T = window.CARDIO3_TIERS;
  if (!T) return;
  function Q(prompt, answer, wrong, why) { return { prompt: prompt, answer: answer, wrong: wrong, why: why }; }
  function hy(x) { return '<div class="box-hy"><span class="lbl">Key idea</span>' + x + "</div>"; }
  function pic(x) { return '<div class="box-mnemonic"><span class="lbl">Picture it</span>' + x + "</div>"; }
  function mn(x) { return '<div class="box-mnemonic"><span class="lbl">Memory hook</span>' + x + "</div>"; }
  function std(x) { return '<div class="box-fix"><span class="lbl">Standard teaching</span>' + x + "</div>"; }

  /* =============================== TIER 1 · FOUNDATIONS =============================== */
  T.units["t1|heart-failure"] = { chunks: [
    { id: "pump", title: "What heart failure is", goal: "Heart failure means the heart can't pump enough blood for the body, or can only do it at high filling pressures.",
      pages: [
        { title: "Meet Walter", fig: { type: "patient", icon: "👴", name: "Walter, 68", line: "Can't climb his stairs anymore and now sleeps on three pillows.", chips: [["History", "HTN, MI 5 years ago", "ok"], ["Ankles", "swollen", "bad"], ["Breathing", "worse lying flat", "bad"]] },
          html: "<p>Walter's heart was damaged by years of high blood pressure and a heart attack. Now it can't keep up. That is <strong>heart failure</strong>: the heart can't pump enough blood to meet the body's needs.</p>" +
            hy("Over 75% of heart failure patients have hypertension or CAD behind it.") },
        { title: "The pump's output", fig: { type: "eq", terms: [["CO", "", "cardiac output"], "=", ["HR", "", "heart rate"], "×", ["SV", "", "stroke volume"]] },
          html: "<p>Stroke volume depends on three things: <strong>preload</strong> (how full the ventricle gets), <strong>afterload</strong> (what it pushes against) and <strong>contractility</strong> (how hard it squeezes).</p>" },
        { title: "Stretch makes squeeze", fig: { type: "starling", curves: ["normal"], dots: [{ curve: "normal", x: 25, label: "less full" }, { curve: "normal", x: 55, label: "more full" }], moves: [{ curve: "normal", from: 25, to: 55 }] },
          html: "<p><strong>Frank-Starling</strong>: a healthy ventricle that fills more stretches more and squeezes harder. More in, more out.</p>" },
        { title: "A failing heart can't keep up", fig: { type: "starling", curves: ["normal", "failing"], flat: true },
          html: "<p>The failing heart's curve is low and flat. Adding more fluid barely raises its output. The extra volume just <strong>backs up</strong> into the lungs and veins.</p>" +
            pic("Walter's heart is a tired sponge: squeeze it harder by soaking it more and the water just spills over.") }
      ],
      remember: ["HF: the heart can't pump enough for the body's needs.", "CO = HR × SV; SV depends on preload, afterload, contractility.", "Frank-Starling: more stretch → stronger squeeze, in a healthy heart.", "The failing curve is low and flat: extra fluid backs up instead."],
      check: [
        Q("Cardiac output equals:", "Heart rate × stroke volume", ["Heart rate + blood pressure", "Stroke volume ÷ preload", "Afterload × contractility"], "Output is beats per minute times blood per beat."),
        Q("Which three things set stroke volume?", "Preload, afterload and contractility", ["Heart rate, BP and SpO₂", "Sodium, water and potassium", "EF, BNP and troponin"], "Filling, resistance and squeeze decide how much each beat ejects."),
        Q("In a failing heart, giving more fluid mostly:", "Backs up into the lungs and veins", ["Doubles the stroke volume", "Lowers the heart rate", "Raises the EF to normal"], "The failing Starling curve is flat, so extra volume becomes congestion.")
      ],
      bank: [
        Q("What are the two conditions behind more than 75% of heart failure cases?", "Hypertension and CAD", ["Asthma and COPD", "Anemia and thyroid disease", "Valve disease and myocarditis"], "Pressure overload and ischemic damage are the main roads to HF.")
      ] },

    { id: "compensate", title: "How the body tries to help", goal: "Low output switches on the SNS, RAAS and ADH; they help at first but drive a vicious cycle.",
      pages: [
        { title: "The rescue team", fig: { type: "tiles", items: [["⚡", "Sympathetic system", "fastest: ↑ HR and squeeze, tighter vessels"], ["🧂", "RAAS", "angiotensin II + aldosterone: hold salt and water"], ["💧", "ADH", "holds free water"], ["🛡️", "Natriuretic peptides", "ANP/BNP: the counterweight"]] },
          html: "<p>When output drops, the body thinks it is <strong>losing blood</strong>. It speeds the heart, tightens the vessels and holds on to salt and water.</p>" },
        { title: "Help that hurts", fig: { type: "cycle", nodes: ["Low cardiac output", "SNS, RAAS, ADH switch on", "Faster, tighter, more fluid", "Heart works harder, stretches, scars", "Weaker heart"], center: "vicious cycle" },
          html: "<p>Short term, it works. Long term, the extra fluid congests the lungs, the tight vessels raise afterload, and angiotensin II pushes <strong>hypertrophy, fibrosis and cell death</strong>. The heart <strong>remodels</strong> and gets worse.</p>" +
            hy("Most HF drugs work by blocking this rescue team: ACE inhibitors, ARBs, beta blockers, aldosterone blockers.") },
        { title: "The body's own brake", fig: { type: "flow", steps: ["Stretched heart walls", "release <strong>ANP</strong> (atria) and <strong>BNP</strong> (ventricles)", "salt and water out, vessels relax", "brake on SNS, RAAS, ADH", "eventually overwhelmed"] },
          html: "<p>That is why <strong>BNP</strong> is a blood test for heart failure: a stretched ventricle releases it.</p>" }
      ],
      remember: ["Low output → SNS (fastest), RAAS, ADH switch on.", "They hold salt and water and tighten vessels: helpful short term, harmful long term.", "Angiotensin II drives hypertrophy, fibrosis and remodeling.", "ANP (atria) and BNP (ventricles) are the brake; BNP rises when the ventricle is stretched."],
      check: [
        Q("Which compensatory system responds most quickly to a drop in cardiac output?", "The sympathetic nervous system", ["RAAS", "ADH", "Natriuretic peptides"], "The SNS acts in seconds; hormones take longer."),
        Q("Why do these compensations eventually hurt the failing heart?", "They add fluid, afterload and remodeling", ["They lower the heart rate too much", "They dilate every vessel", "They block BNP release"], "More volume and squeeze demand plus fibrosis wear the heart down."),
        Q("Which hormone is released when the ventricles are stretched?", "BNP", ["Aldosterone", "ADH", "Renin"], "B-type natriuretic peptide comes from stretched ventricular walls.")
      ],
      bank: [
        Q("Many core HF drugs work by:", "Blocking the body's compensatory systems", ["Raising aldosterone", "Speeding the heart rate", "Adding fluid volume"], "ACEi, ARBs, beta blockers and aldosterone blockers all block the rescue team.")
      ] },

    { id: "left-right", title: "Left-sided vs right-sided failure", goal: "Left failure floods the lungs; right failure floods the body. Left failure is the most common cause of right failure.",
      pages: [
        { title: "The loop", fig: { type: "backup" },
          html: "<p>Blood goes body → right heart → lungs → left heart → body. When one side weakens, blood <strong>backs up behind it</strong>.</p>" },
        { title: "Left side fails: wet lungs", fig: { type: "backup", side: "left" },
          html: "<p>Walter's left ventricle is weak, so blood backs into his <strong>lungs</strong>: shortness of breath, <strong>rales</strong>, orthopnea (worse flat), PND (waking up gasping), frothy sputum. Low output also brings fatigue and confusion.</p>" +
            hy("Most common causes of left failure: hypertension and acute MI.") },
        { title: "Right side fails: wet body", fig: { type: "backup", side: "right" },
          html: "<p>A weak right ventricle backs blood into the <strong>body's veins</strong>: <strong>JVD</strong>, leg edema, weight gain, a big tender liver (RUQ pain), ascites.</p>" +
            mn("<strong>L</strong>eft = <strong>L</strong>ungs. Right = the Rest of the body.") },
        { title: "Why one leads to the other", fig: { type: "flow", steps: ["Left ventricle fails", "pressure backs into the lungs", "right ventricle pushes against high lung pressure", "right ventricle fails too"] },
          html: "<p>The <strong>most common cause of right-sided failure is left-sided failure</strong>. Other causes: cor pulmonale (lung disease), RV infarct, tricuspid or pulmonic valve disease.</p>" }
      ],
      remember: ["Left failure → lungs: dyspnea, rales, orthopnea, PND, frothy sputum.", "Right failure → body: JVD, edema, hepatomegaly, ascites, weight gain.", "Left failure is the most common cause of right failure.", "Left failure: HTN and acute MI are the most common causes."],
      check: [
        Q("Rales, orthopnea and PND point to failure of which side?", "Left", ["Right", "Neither: they are lung disease", "Both equally"], "A weak left ventricle backs blood into the lungs."),
        Q("JVD, leg edema and an enlarged liver point to failure of which side?", "Right", ["Left", "Neither: they are liver disease", "Only the atria"], "A weak right ventricle backs blood into the body's veins."),
        Q("What is the most common cause of right-sided heart failure?", "Left-sided heart failure", ["Pulmonary embolism", "Tricuspid regurgitation", "RV infarct"], "Pressure backed into the lungs overloads the right ventricle.")
      ],
      bank: [
        Q("A patient wakes at night gasping and has to sit up to breathe. What is this called?", "Paroxysmal nocturnal dyspnea", ["Cheyne-Stokes breathing", "Platypnea", "Exertional dyspnea"], "PND is sudden night breathlessness from fluid shifting into the lungs.")
      ] },

    { id: "ref-pef", title: "Weak squeeze vs stiff filling", goal: "HFrEF is a big, weak ventricle with low EF; HFpEF is a thick, stiff ventricle with normal EF that fills poorly.",
      pages: [
        { title: "A normal ventricle", fig: { type: "vent", kind: "normal" },
          html: "<p>Normal <strong>ejection fraction (EF)</strong> is <strong>55-70%</strong>: each beat pushes out over half of what's inside.</p>" },
        { title: "HFrEF: the weak squeeze", fig: { type: "vent", kind: "hfref" },
          html: "<p><strong>Systolic dysfunction</strong>: the muscle is damaged (MI, dilated cardiomyopathy, myocarditis). The ventricle stretches big and thin (<strong>eccentric</strong> remodeling) and the EF drops.</p>" },
        { title: "HFpEF: the stiff box", fig: { type: "vent", kind: "hfpef" },
          html: "<p><strong>Diastolic dysfunction</strong>: years of hypertension, aging or hypertrophy make the wall thick and stiff (<strong>concentric</strong> remodeling). It squeezes fine, so EF is <strong>normal</strong>, but it can't relax and fill.</p>" +
            hy("HFpEF is a filling problem. A fast heart rate cuts filling time and makes it worse.") },
        { title: "Side by side", fig: { type: "vs", a: ["HFrEF (reduced EF)", "bad", ["Can't squeeze", "Big, thin ventricle", "MI, DCM, myocarditis", "S3 gallop", "45% of cases"]], b: ["HFpEF (preserved EF)", "ok", ["Can't fill", "Thick, stiff ventricle", "HTN, aging, hypertrophy", "S4 gallop", "55% of cases"]] },
          html: "<p>An <strong>echo</strong> tells them apart by measuring the EF.</p>" }
      ],
      remember: ["Normal EF 55-70%.", "HFrEF: systolic, weak squeeze, big thin ventricle, low EF.", "HFpEF: diastolic, stiff thick ventricle, normal EF, poor filling.", "Echo measures EF to tell them apart."],
      check: [
        Q("What is a normal ejection fraction?", "55-70%", ["20-35%", "35-45%", "85-95%"], "A healthy ventricle ejects over half its volume each beat."),
        Q("A thick, stiff ventricle with a normal EF that fills poorly describes:", "HFpEF (diastolic dysfunction)", ["HFrEF (systolic dysfunction)", "Right-sided failure only", "High-output failure"], "Preserved EF with impaired relaxation is diastolic failure."),
        Q("Which test is used to measure EF and sort HFrEF from HFpEF?", "Echocardiogram", ["Chest X-ray", "BNP", "EKG"], "Echo shows chamber size, wall thickness and EF.")
      ],
      bank: [
        Q("Why does tachycardia worsen HFpEF?", "It shortens the time the stiff ventricle has to fill", ["It raises the EF too high", "It thins the ventricle wall", "It lowers BNP"], "Less diastole means even less filling in a stiff ventricle.")
      ] },

    { id: "bedside", title: "What you hear and see", goal: "Dyspnea and fatigue are the main symptoms; S3 goes with HFrEF, S4 with HFpEF.",
      pages: [
        { title: "Walter's story", fig: { type: "tiles", items: [["😮‍💨", "Dyspnea", "most common symptom: first on exertion"], ["🛏️", "Orthopnea", "needs pillows to sleep"], ["🌙", "PND", "wakes gasping; often comes before orthopnea"], ["😴", "Fatigue", "low output to the muscles"], ["🚽", "Nocturia", "fluid comes back to the kidneys lying down"]], hi: 0 },
          html: "<p>Walter also says he's <strong>thirsty</strong> all the time (ADH at work) and his ankles swell by evening.</p>" },
        { title: "On exam", fig: { type: "tiles", items: [["🫁", "Rales", "crackles at the bases"], ["🦒", "JVD", "neck veins up"], ["🦵", "Pitting edema", "presacral if bedbound"], ["👉", "Displaced PMI", "big heart"], ["💓", "Tachycardia or AF", ""], ["🫗", "Pleural effusion", "dull to percussion"]] },
          html: "<p>Long-standing edema leaves brown, scaly <strong>stasis dermatitis</strong> on the shins. Late HF wastes muscle (<strong>cardiac cachexia</strong>).</p>" },
        { title: "Two extra heart sounds", fig: { type: "vs", a: ["S3: ken-TUC-ky", "bad", ["Lub-dub-<strong>tah</strong>", "Blood slams into a big, floppy ventricle", "HFrEF (volume overload)"]], b: ["S4: TEN-nes-see", "ok", ["<strong>Tah</strong>-lub-dub", "Atrium kicks into a stiff ventricle", "HFpEF (stiff wall)"]] },
          html: "<p>An S3 in HF with a high JVP means a <strong>worse prognosis</strong>.</p>" +
            mn("S3 after S2 (the floppy bag); S4 before S1 (the stiff box).") }
      ],
      remember: ["Dyspnea is the most common symptom; fatigue next.", "PND usually comes before orthopnea.", "Exam: rales, JVD, edema, displaced PMI, effusion.", "S3 = HFrEF (lub-dub-tah). S4 = HFpEF (tah-lub-dub)."],
      check: [
        Q("What is the most common symptom of heart failure?", "Dyspnea", ["Chest pain", "Palpitations", "Syncope"], "Fluid in the lungs makes breathlessness the lead complaint."),
        Q("An S3 gallop goes with which type of heart failure?", "HFrEF", ["HFpEF", "Isolated right heart failure", "Pericarditis"], "Blood rushing into a dilated, floppy ventricle makes the S3."),
        Q("An S4 ('tah-lub-dub') points to:", "A stiff ventricle, as in HFpEF", ["A dilated, weak ventricle", "A leaky mitral valve", "A normal young heart"], "The atrium kicks blood into a noncompliant ventricle.")
      ],
      bank: [
        Q("Why are HF patients often thirsty?", "ADH is switched on", ["BNP blocks thirst", "Beta blockers dry the mouth", "Low sodium intake"], "The deck lists thirst as an ADH effect of HF.")
      ] },

    { id: "diagnose", title: "Making the diagnosis", goal: "HF is a clinical diagnosis: Framingham criteria, then echo and BNP; NYHA grades symptoms, AHA stages track progression.",
      pages: [
        { title: "Framingham criteria", fig: { type: "framingham" },
          html: "<p>Try Walter: PND, rales, an S3, and leg edema. HF needs <strong>2 major</strong>, or <strong>1 major + 2 minor</strong>.</p>" +
            hy("There is no single test for HF. It is a clinical diagnosis; tests confirm it and find the cause.") },
        { title: "The tests that back it up", fig: { type: "tiles", items: [["🫀", "Echo", "EF, type, valves: essential"], ["🧪", "proBNP", "> 450 if young, > 900 if over 50"], ["📈", "EKG", "LVH, old MI, AF, LBBB"], ["🩻", "Chest X-ray", "big heart, Kerley lines, effusions"]], hi: 0 },
          html: "<p>Walter's echo shows an <strong>EF of 30%</strong>. He has HFrEF.</p>" },
        { title: "How sick now: NYHA class", fig: { type: "ladder", steps: [["I", "no symptoms with ordinary activity", "good"], ["II", "dyspnea with exertion: stairs, raking leaves", "ok"], ["III", "dyspnea with ordinary activity, comfortable at rest", "ok"], ["IV", "symptoms at rest, mostly bedbound", "bad"]], hi: 1 },
          html: "<p>NYHA describes <strong>symptoms today</strong>, so it can go up and down.</p>" },
        { title: "How far along: AHA stage", fig: { type: "ladder", steps: [["A", "at risk: HTN, DM, obesity; no structural disease", "good"], ["B", "structural disease, no symptoms (old MI, LVH)", "ok"], ["C", "structural disease with symptoms", "bad"], ["D", "refractory: symptoms at rest despite max therapy", "bad"]], hi: 2 },
          html: "<p>AHA stages only move <strong>forward</strong>. Walter is stage C.</p>" +
            mn("NYHA = how you feel today. AHA = where you are on the road.") }
      ],
      remember: ["Framingham: 2 major, or 1 major + 2 minor.", "Echo is essential: EF and HF type.", "NYHA I-IV = symptoms; can improve.", "AHA A-D = progression; only moves forward."],
      check: [
        Q("How many Framingham criteria make the diagnosis of heart failure?", "2 major, or 1 major + 2 minor", ["Any 3 minor", "1 major alone", "4 minor"], "The Framingham rule needs two majors or one major plus two minors."),
        Q("Dyspnea climbing stairs but fine at rest and with ordinary activity is NYHA class:", "II", ["I", "III", "IV"], "Class II is symptoms with more than ordinary exertion."),
        Q("A patient with an old MI on echo but no HF symptoms is AHA stage:", "B", ["A", "C", "D"], "Structural disease without symptoms is stage B.")
      ],
      bank: [
        Q("Which of these is a MAJOR Framingham criterion?", "S3 gallop", ["Night cough", "Hepatomegaly", "Dyspnea on exertion"], "S3 is major; the others are minor.")
      ] },

    { id: "treat", title: "Treating chronic HFrEF", goal: "Diuretics relieve fluid; ACEi/ARB/ARNI plus a beta blocker improve survival; add aldosterone blockers and SGLT2 inhibitors.",
      pages: [
        { title: "Lifestyle first", fig: { type: "tiles", items: [["🧂", "Sodium 1500 mg/day", "AHA"], ["🥤", "Fluid 1-2 L/day", "max"], ["⚖️", "Daily weights + BP diary", "catch fluid early"], ["🚶", "Cardiac rehab", "NYHA I-III"], ["😴", "Treat sleep apnea", "CPAP"]] },
          html: "<p>Walter gets a scale. A sudden weight gain is fluid, and calling early prevents admission.</p>" },
        { title: "Fluid off: diuretics", fig: { type: "nephron", hi: "loop" },
          html: "<p><strong>Loop diuretics</strong> (furosemide) are the strongest. They relieve congestion fast but <strong>do not improve survival</strong>.</p>" },
        { title: "The life-savers", fig: { type: "tiles", items: [["🛑", "ACEi (or ARB / ARNI)", "1st line in every stage; block RAAS"], ["💓", "Beta blocker", "carvedilol, bisoprolol, metoprolol succinate"], ["🧂", "Aldosterone blocker", "spironolactone, eplerenone"], ["🍬", "SGLT2 inhibitor", "dapagliflozin, empagliflozin"]] },
          html: "<p>Walter's plan (stage C HFrEF): <strong>diuretic + ACEi/ARB/ARNI + beta blocker</strong>. Second line adds an aldosterone blocker, ivabradine, dapagliflozin, hydralazine + nitrate or digoxin.</p>" +
            hy("Symptoms: diuretics. Survival: block the rescue team (RAAS + SNS).") },
        { title: "Two big cautions", fig: { type: "vs", a: ["ACE inhibitor", "ok", ["Cough → switch to ARB", "Angioedema → no ARB either", "Pregnancy: boxed fetal warning", "Watch K and creatinine"]], b: ["Beta blocker", "bad", ["For stable HF only", "Hold in acute decompensation", "Hold in shock and stage D", "Start low, go slow"]] },
          html: "<p>A beta blocker is a <strong>chronic</strong> drug. Never start it while the patient is drowning.</p>" }
      ],
      remember: ["Sodium 1500 mg/day, fluid 1-2 L, daily weights.", "Diuretics: symptom relief, no survival benefit.", "Stage C HFrEF: diuretic + ACEi/ARB/ARNI + beta blocker.", "Hold beta blockers in acute decompensated HF and shock."],
      check: [
        Q("Which HF drugs relieve congestion but do not improve survival?", "Diuretics", ["ACE inhibitors", "Beta blockers", "SGLT2 inhibitors"], "Diuretics take off fluid; they don't change mortality."),
        Q("Which drug class is first line in every AHA stage of HF?", "ACE inhibitors", ["Digoxin", "Loop diuretics", "Calcium channel blockers"], "The deck calls ACEi first line for all stages, if tolerated."),
        Q("A patient with HFrEF develops a dry cough on lisinopril. Best switch?", "An ARB", ["A higher ACEi dose", "Digoxin", "Stop all RAAS drugs"], "ARBs don't cause the bradykinin cough and are equally effective.")
      ],
      bank: [
        Q("When should a beta blocker be held in heart failure?", "During acute decompensation", ["When EF is under 40%", "In stage B", "Whenever BP is over 120"], "Beta blockers lower contractility, which a drowning heart can't afford.")
      ] },

    { id: "acute", title: "When it decompensates", goal: "Sit them up, oxygen and NIV, nitroglycerin for high BP, IV loop diuretic; no beta blockers, CCBs or digoxin.",
      pages: [
        { title: "Walter comes back", fig: { type: "patient", icon: "🚑", name: "Walter, 3 months later", line: "Ate a salty holiday dinner and skipped pills. Sitting bolt upright, gasping.", chips: [["BP", "190/110", "bad"], ["SpO₂", "86%", "bad"], ["Lungs", "crackles to mid-chest", "bad"]] },
          html: "<p>Common triggers: <strong>noncompliance</strong> (salt, fluid, missed pills, uncontrolled HTN), missed dialysis, cocaine or alcohol, and drugs like NSAIDs, steroids, CCBs or a new beta blocker.</p>" },
        { title: "The first minutes", fig: { type: "flow", vertical: true, steps: ["Sit upright, monitor, <strong>2 IVs</strong>", "O₂ to SpO₂ &gt; 95%", "<strong>CPAP/BiPAP</strong> if struggling (not if SBP &lt; 90 or confused)", "<strong>Nitroglycerin</strong> if BP high", "<strong>IV loop diuretic</strong>"] },
          html: "<p>Labs and imaging must <strong>not delay treatment</strong>.</p>" },
        { title: "Nitro by blood pressure", fig: { type: "ntg" },
          html: "<p>The failing heart is very sensitive to afterload. With SBP ≥ 150, fast vasodilation can <strong>avoid intubation</strong>.</p>" },
        { title: "Then the loop, and what not to give", fig: { type: "vs", a: ["Give", "good", ["IV furosemide: 40 mg if naive", "Works in 10-15 min", "IV because the gut is swollen"]], b: ["Don't give", "bad", ["Beta blockers", "Calcium channel blockers", "Digoxin"]] },
          html: "<p>Once stable: echo, wean IV drugs to oral, teach salt and fluid limits, follow-up <strong>within 5 days</strong>.</p>" }
      ],
      remember: ["Triggers: noncompliance (salt, pills, HTN), missed dialysis, drugs.", "Upright, O₂ > 95%, 2 IVs, CPAP/BiPAP.", "Nitroglycerin first when BP is high; then IV loop diuretic.", "No beta blockers, CCBs or digoxin in acute HF."],
      check: [
        Q("What is the most common trigger of acute decompensated HF?", "Noncompliance with diet or medications", ["Sudden valve rupture", "Pulmonary embolism", "Viral myocarditis"], "Salt, fluid and missed pills top the deck's list."),
        Q("Which drug class is contraindicated in acute decompensated HF?", "Beta blockers", ["Loop diuretics", "Nitroglycerin", "Oxygen"], "Lowering contractility in a drowning heart worsens it."),
        Q("Acute pulmonary edema with BP 190/110. Which drug comes first?", "Nitroglycerin", ["Metoprolol", "Digoxin", "Diltiazem"], "High afterload is drowning the heart; vasodilate fast.")
      ],
      bank: [
        Q("Why is furosemide given IV in acute HF?", "Bowel wall edema blocks oral absorption", ["It doesn't come as a pill", "Oral works too fast", "IV avoids hypokalemia"], "A congested gut absorbs pills poorly.")
      ] }
  ] };

  /* =============================== TIER 2 · STANDARD DETAILS =============================== */
  T.units["t2|heart-failure"] = { chunks: [
    { id: "physiology", title: "Preload, afterload, reserve", goal: "EDV sets preload, SVR and wall tension set afterload, and cardiac reserve is the room to raise output.",
      pages: [
        { title: "The three dials", fig: { type: "grid", cols: ["Dial", "What it is", "In HF"], rows: [["<strong>Preload</strong>", "stretch at end-diastole (EDV)", "too high → congestion"], ["<strong>Afterload</strong>", "what the ventricle pushes against: SVR, wall tension", "raised by SNS and angiotensin II"], ["<strong>Contractility</strong>", "squeeze at a given stretch", "low in HFrEF"]], hiCol: 2 },
          html: "<p>Every HF drug turns one of these dials: diuretics and nitrates lower preload, ACEi/ARB and hydralazine lower afterload, inotropes raise contractility.</p>" },
        { title: "Cardiac reserve", fig: { type: "bars", items: [["Rest", 25, "CO about 5 L/min", "blue"], ["Exercise, healthy", 100, "output can rise several-fold", "good"], ["Exercise, HF", 40, "little room left", "bad"]], note: "Numbers are a sketch (standard teaching)." },
          html: "<p><strong>Cardiac reserve</strong> is how much the heart can raise output above rest. HF uses it up, so exercise intolerance is an early sign.</p>" }
      ],
      remember: ["Preload = end-diastolic stretch (EDV).", "Afterload = SVR and wall tension.", "Diuretics/nitrates ↓ preload; ACEi/ARB/hydralazine ↓ afterload.", "Cardiac reserve shrinks in HF → exercise intolerance."],
      check: [
        Q("Preload is best described as:", "Ventricular stretch at end-diastole", ["Resistance the ventricle pumps against", "Heart rate × stroke volume", "Force of contraction at a fixed stretch"], "End-diastolic volume stretches the fibers before they contract."),
        Q("Which two things set afterload?", "Systemic vascular resistance and wall tension", ["Heart rate and EF", "Venous return and EDV", "Sodium and water"], "The ventricle must overcome vessel resistance and its own wall stress."),
        Q("Cardiac reserve is:", "The ability to raise output above resting levels", ["Blood stored in the atria", "The EF at rest", "The amount of BNP released"], "Reserve is the gap between resting and maximal output.")
      ],
      bank: [
        Q("Which drug lowers afterload by dilating arterioles directly?", "Hydralazine", ["Furosemide", "Digoxin", "Spironolactone"], "Hydralazine is a direct arteriolar vasodilator.")
      ] },

    { id: "hormones", title: "RAAS, ADH and the peptides in detail", goal: "Kidney sensors trigger RAAS; ADH acts on V1 (vessels) and V2 (free water, hyponatremia); ANP/BNP fight back.",
      pages: [
        { title: "RAAS step by step", fig: { type: "flow", steps: ["Low flow sensed at the <strong>afferent arteriole</strong>", "renin", "angiotensin II: vasoconstriction, thirst", "aldosterone: hold Na and water", "angiotensin II also: <strong>hypertrophy, apoptosis, fibrosis</strong>"] },
          html: "<p>That last step is why ACE inhibitors <strong>slow remodeling</strong> and save lives, not just lower pressure.</p>" },
        { title: "ADH's two receptors", fig: { type: "vs", a: ["V1", "ok", ["Blood vessels", "Vasoconstriction", "↑ afterload"]], b: ["V2", "blue", ["Collecting duct", "Holds FREE water", "→ <strong>hyponatremia</strong>"]] },
          html: "<p>ADH is switched on by norepinephrine and angiotensin II. Hyponatremia in HF is a marker of <strong>advanced disease</strong> (or too much diuretic).</p>" },
        { title: "The peptides", fig: { type: "grid", cols: ["Peptide", "Source", "Effect"], rows: [["ANP", "atria", "natriuresis, vasodilation"], ["BNP", "ventricles", "same; the lab test"], ["Both", "", "inhibit SNS, RAAS, endothelin, vasopressin"]], hiCol: 1 },
          html: "<p>NT-proBNP rises with severity. <strong>Diuretics and ACE inhibitors lower BNP</strong>, so a treated patient can read lower. Sacubitril works by stopping neprilysin from breaking these peptides down.</p>" }
      ],
      remember: ["RAAS sensor: afferent arteriole.", "Angiotensin II: vasoconstriction plus hypertrophy, apoptosis, fibrosis.", "ADH: V1 vasoconstriction, V2 free water → hyponatremia.", "ANP from atria, BNP from ventricles; diuretics and ACEi lower BNP."],
      check: [
        Q("Hyponatremia in heart failure is caused mainly by ADH acting on which receptor?", "V2 in the collecting duct", ["V1 in vessel walls", "Beta-1 in the heart", "AT1 in the adrenal"], "V2 holds free water, diluting sodium."),
        Q("Which effect of angiotensin II drives cardiac remodeling?", "Hypertrophy, apoptosis and fibrosis", ["Natriuresis", "Bradycardia", "Venodilation"], "Angiotensin II acts as a growth and scarring signal on the heart."),
        Q("Which drugs can make a BNP read lower than expected?", "Diuretics and ACE inhibitors", ["NSAIDs", "Beta agonists", "Steroids"], "Lowering volume and RAAS activity reduces ventricular stretch.")
      ],
      bank: [
        Q("Where is the RAAS sensor that detects low flow?", "The afferent arteriole of the kidney", ["The carotid body", "The right atrium", "The collecting duct"], "Afferent arteriole sensors trigger renin release.")
      ] },

    { id: "causes", title: "Causes by type", goal: "Systolic: ischemia, DCM, myocarditis, volume or pressure overload. Diastolic: HTN, hypertrophy, aging, constriction. Right: LV failure first.",
      pages: [
        { title: "Systolic vs diastolic causes", fig: { type: "grid", cols: ["Systolic (↓ EF)", "Diastolic (normal EF)"], rows: [["Ischemia / MI", "Hypertension, LVH, HCM"], ["Dilated cardiomyopathy, myocarditis", "Aging"], ["Volume overload (e.g. anemia)", "Pericardial effusion, constriction"], ["Pressure overload (HTN, stenosis)", "Ischemia; worsened by tachycardia"]] },
          html: "<p>Risk factors overall: <strong>CAD/MI, LVH, cardiomyopathy, smoking, HTN, obesity, diabetes, valve disease</strong>.</p>" },
        { title: "Right-sided causes", fig: { type: "tiles", items: [["⬅️", "Left heart failure", "most common"], ["🫁", "Cor pulmonale", "lung disease, PE"], ["🚪", "Tricuspid or pulmonic valve disease", ""], ["💥", "RV infarct", ""], ["👶", "Congenital", "tetralogy, VSD"]], hi: 0 },
          html: "<p>Left-sided causes: <strong>HTN and acute MI</strong> most common, then aortic and mitral valve disease.</p>" },
        { title: "Two remodeling patterns", fig: { type: "vs", a: ["HFrEF: eccentric", "bad", ["Chamber dilates", "Wall thins", "Arrhythmias common"]], b: ["HFpEF: concentric", "ok", ["Wall thickens", "Fibrosis", "Chronotropic incompetence, exercise intolerance"]] },
          html: "<p>In HFpEF the heart rate can't rise enough with exercise (<strong>chronotropic incompetence</strong>), which is why exercise intolerance dominates.</p>" }
      ],
      remember: ["Systolic: MI, DCM, myocarditis, volume/pressure overload.", "Diastolic: HTN/LVH/HCM, aging, constriction, effusion.", "Right: LV failure > cor pulmonale, valves, RV infarct, congenital.", "HFrEF eccentric; HFpEF concentric + chronotropic incompetence."],
      check: [
        Q("Which is a cause of DIASTOLIC dysfunction?", "Constrictive pericarditis", ["Viral myocarditis", "Dilated cardiomyopathy", "Large anterior MI scar"], "A rigid pericardium stops the ventricle from filling."),
        Q("Concentric remodeling with fibrosis and chronotropic incompetence fits:", "HFpEF", ["HFrEF", "High-output failure", "Isolated RV failure"], "HFpEF walls thicken and the rate response is blunted."),
        Q("Cor pulmonale causes which kind of heart failure?", "Right-sided", ["Left-sided only", "High-output", "Diastolic LV failure"], "Lung disease raises pulmonary pressure and overloads the RV.")
      ],
      bank: [
        Q("Anemia leads to heart failure mainly through:", "Volume overload", ["Pericardial constriction", "Concentric hypertrophy from HTN", "Valve stenosis"], "The deck lists anemia under volume-overload systolic causes.")
      ] },

    { id: "exam", title: "History and exam details", goal: "Narrow pulse pressure, cerebral symptoms, oliguria and stasis dermatitis round out the picture.",
      pages: [
        { title: "Left-sided extras", fig: { type: "tiles", items: [["🫧", "Frothy pink sputum", "pulmonary edema"], ["🔵", "Cyanosis", ""], ["🧠", "Confusion", "low brain perfusion"], ["📏", "Narrow pulse pressure", "SBP-DBP under the normal ~40"], ["🫘", "Worsening renal function", "low output to kidneys"]] },
          html: "<p>A narrow pulse pressure means the stroke volume is small.</p>" },
        { title: "Right-sided extras", fig: { type: "tiles", items: [["⚖️", "Weight gain", "fluid"], ["🍽️", "GI congestion", "nausea, poor appetite"], ["🫃", "Ascites, splenomegaly", ""], ["🫄", "Anasarca", "whole-body edema"], ["✋", "Hepatojugular reflux", "press liver → JVP rises"]] },
          html: "<p><strong>Presacral</strong> edema replaces ankle edema in bedbound patients because fluid follows gravity.</p>" },
        { title: "Urine at night, not by day", fig: { type: "vs", a: ["Daytime", "bad", ["Upright, active", "Kidneys underperfused", "<strong>Oliguria</strong>"]], b: ["Night", "blue", ["Lying flat", "Leg fluid returns", "<strong>Nocturia</strong>"]] },
          html: "<p>PND usually shows up <strong>before</strong> orthopnea.</p>" }
      ],
      remember: ["Narrow pulse pressure (normal about 40) = small stroke volume.", "Frothy sputum, cyanosis, confusion, renal decline: left side.", "GI congestion, ascites, anasarca, HJR: right side.", "Daytime oliguria, nighttime nocturia."],
      check: [
        Q("What does a narrow pulse pressure suggest in HF?", "A small stroke volume", ["High-output failure", "Aortic regurgitation", "Good cardiac reserve"], "Pulse pressure tracks how much blood each beat ejects."),
        Q("Where does edema collect in a bedbound HF patient?", "The sacrum", ["The ankles only", "The face", "The hands"], "Fluid follows gravity to the lowest point."),
        Q("Pressing on the liver makes the JVP rise. This sign is called:", "Hepatojugular reflux", ["Kussmaul sign", "Pulsus paradoxus", "Homans sign"], "A congested right side can't take the extra returned blood.")
      ],
      bank: [
        Q("Why do HF patients make more urine at night?", "Lying flat returns leg fluid to the circulation and kidneys", ["ADH stops at night", "Diuretics are taken at bedtime", "BNP is lower at night"], "Recumbency shifts edema fluid back and perfuses the kidneys.")
      ] },

    { id: "workup", title: "EKG, X-ray and labs", goal: "EKG finds causes; CXR shows CT ratio > 50%, Kerley lines and effusions; labs check anemia, sodium, K, kidneys and liver.",
      pages: [
        { title: "EKG clues", fig: { type: "tiles", items: [["📏", "LVH", "pressure overload"], ["🪦", "Q waves", "prior MI"], ["〰️", "AF or flutter", "trigger or result"], ["🧱", "LBBB", "conduction delay"], ["⏱️", "QT", "many HF drugs prolong it"]] },
          html: "<p>The EKG can't diagnose HF, but it finds the <strong>cause or the trigger</strong>.</p>" },
        { title: "Chest X-ray", fig: { type: "grid", cols: ["Finding", "Meaning"], rows: [["Cardiothoracic ratio &gt; 50%", "cardiomegaly: almost all chronic HF"], ["Kerley lines", "interstitial edema: LA pressure &gt; 25 mmHg"], ["Pleural effusions", "fluid overflow"], ["Clearing", "can lag <strong>48 h</strong> behind diuresis"]], hiCol: 1 },
          html: "<p>Acute HF from a new MI or myocarditis may have a <strong>normal-size heart</strong>, and about 20% of acute HF films look normal.</p>" },
        { title: "The labs", fig: { type: "grid", cols: ["Lab", "Look for"], rows: [["CBC", "anemia, iron deficiency"], ["BMP", "hyponatremia; low K (diuretics) or high K (ACEi); renal function"], ["LFTs", "liver congestion"], ["proBNP", "&gt; 450 under 50 y, &gt; 900 over 50 y"], ["Troponin", "mildly up in &gt; 50% of systolic HF"], ["A1c, lipids", "risk factors"]] },
          html: "<p>proBNP is <strong>higher in HFrEF</strong> than HFpEF because the stiff HFpEF wall stretches less.</p>" }
      ],
      remember: ["EKG: LVH, Q waves, AF, LBBB, QT.", "CXR: CT ratio > 50%, Kerley lines (> 25 mmHg), effusions; clears 48 h late.", "proBNP > 450 (< 50 y) or > 900 (> 50 y); higher in HFrEF.", "Low-level troponin in > 50% of systolic HF."],
      check: [
        Q("Kerley lines on CXR appear when left-sided filling pressure rises above about:", "25 mmHg", ["5 mmHg", "12 mmHg", "60 mmHg"], "Interstitial edema shows above about 25 mmHg."),
        Q("Which proBNP cutoff supports HF in a 70-year-old with unclear dyspnea?", "Over 900 pg/mL", ["Over 100 pg/mL", "Over 450 pg/mL", "Over 2000 pg/mL"], "Over 50 years the deck's cutoff is 900."),
        Q("After good diuresis, the CXR may still look wet because:", "Radiographic clearing lags up to 48 hours", ["The diuretic failed", "Kerley lines are permanent", "Effusions never clear"], "X-ray findings resolve more slowly than symptoms.")
      ],
      bank: [
        Q("A cardiothoracic ratio over what value means cardiomegaly?", "50%", ["30%", "40%", "70%"], "A heart wider than half the chest is enlarged.")
      ] },

    { id: "stages", title: "Treatment by AHA stage", goal: "A: risk factors. B: ACEi/ARB, beta blocker, referral. C: diuretic + RAAS + BB. D: everything but BB, devices, transplant, hospice.",
      pages: [
        { title: "Stage by stage", fig: { type: "ladder", steps: [["A", "lifestyle; ACEi/ARB for HTN; statin; control DM", "good"], ["B", "ACEi (or ARB) first; add BB for persistent HTN; cardiology referral; ICD if ventricular arrhythmias", "ok"], ["C", "diuretic + ACEi/ARB/ARNI + BB; then 2nd-line add-ons; rehab, ICD, CRT", "bad"], ["D", "all of A-C <strong>except BB</strong>; digoxin; devices; transplant; hospice", "bad"]] },
          html: "<p>Stage B patients have structural disease, so cardiology screens for <strong>CAD and valve disease</strong> that surgery could fix.</p>" },
        { title: "Stage C, HFrEF add-ons", fig: { type: "tiles", items: [["🧂", "Aldosterone antagonist", ""], ["🫀", "Ivabradine", "if HR &gt; 75"], ["🍬", "Dapagliflozin", ""], ["🌿", "Hydralazine + nitrate", ""], ["💊", "Digoxin", "persistent symptoms"]] },
          html: "<p>Plus cardiac rehab, ICD, revascularization, valve surgery and <strong>CRT</strong> (resynchronization).</p>" },
        { title: "Stage C, HFpEF is different", fig: { type: "vs", a: ["Do", "good", ["Diuretics for congestion: <strong>K-sparing preferred</strong>", "Control BP (any agent)", "Avoid tachycardia", "Keep sinus rhythm / AV synchrony"]], b: ["Know", "bad", ["Over-diuresis drops preload → low CO", "ACEi, ARB, ARNI, BB: no mortality benefit in HFpEF", "Digoxin: caution"]] },
          html: "<p>Over-diuresis shows up as lightheadedness, syncope, fatigue and <strong>worsening renal function</strong>.</p>" }
      ],
      remember: ["A: risk factors, ACEi/ARB for HTN, statin.", "B: ACEi first, BB add-on, referral, ICD if indicated.", "C HFrEF: diuretic + ACEi/ARB/ARNI + BB.", "C HFpEF: K-sparing diuretic preferred, avoid tachycardia and over-diuresis.", "D: no BB; digoxin, devices, transplant, hospice."],
      check: [
        Q("Which drug class is dropped in stage D heart failure?", "Beta blockers", ["Diuretics", "ACE inhibitors", "Aldosterone antagonists"], "Stage D uses everything from A-C except beta blockers."),
        Q("Which diuretic type is preferred in HFpEF?", "Potassium-sparing", ["High-dose loop", "Osmotic", "Carbonic anhydrase inhibitor"], "Gentler diuresis avoids dropping the preload a stiff ventricle needs."),
        Q("Why is over-diuresis dangerous in HFpEF?", "The stiff ventricle needs preload to fill, so output falls", ["It causes hyperkalemia", "It raises BNP", "It causes an S3"], "Too little preload leaves too little end-diastolic volume.")
      ],
      bank: [
        Q("Which drugs have shown no mortality benefit in HFpEF?", "ACEi, ARB, ARNI and beta blockers", ["Loop diuretics only", "Statins only", "Oxygen and nitrates"], "The deck says they haven't shown mortality benefit in HFpEF.")
      ] },

    { id: "raas-drugs", title: "ACEi, ARB, ARNI, BiDil", goal: "Know each drug's role, side effects and the contraindications that trip people up.",
      pages: [
        { title: "ACE inhibitors", fig: { type: "grid", cols: ["", "ACE inhibitor (-pril)"], rows: [["Role", "1st line, all stages; ↓ mortality, slow remodeling"], ["Side effects", "cough, angioedema, hyperK, hypotension, azotemia"], ["Avoid", "angioedema history, renal failure, pregnancy, renal artery stenosis"], ["Dose", "start lowest, titrate to renal function"]] },
          html: "<p>Examples: enalapril, lisinopril, quinapril, ramipril. All RAAS drugs carry a <strong>boxed fetal warning</strong>.</p>" },
        { title: "ARB vs ARNI", fig: { type: "vs", a: ["ARB (-sartan)", "blue", ["If ACEi cough", "Equally effective on mortality", "NOT safe after ACEi angioedema", "Black patients: more angioedema risk"]], b: ["ARNI (sacubitril/valsartan)", "good", ["20% fewer HF hospitalizations than ACEi", "Stop ACEi/ARB <strong>3 days</strong> before", "Avoid: angioedema history, GFR &lt; 30"]] },
          html: "<p>The 3-day washout prevents <strong>angioedema, hypotension and hyperkalemia</strong>.</p>" },
        { title: "Hydralazine + isosorbide dinitrate", fig: { type: "tiles", items: [["🌿", "When", "HFrEF (B-D) who can't take ACEi or ARB"], ["✊🏿", "Added for", "Black patients with HFrEF stage C/D"], ["⚠️", "Side effects", "hypotension, bradycardia, nausea, sweating"], ["🚫", "Never with", "PDE-5 inhibitors"]] },
          html: "<p>Hydralazine dilates <strong>arterioles</strong>; the nitrate dilates mainly <strong>veins</strong>.</p>" }
      ],
      remember: ["ACEi: cough, angioedema, hyperK, hypotension, azotemia.", "ARB if cough; not after angioedema.", "ARNI: 3-day ACEi washout; no if angioedema or GFR < 30.", "BiDil: ACEi/ARB intolerance, or added for Black patients stage C/D; never with PDE-5."],
      check: [
        Q("A patient had angioedema on lisinopril. Is an ARB a safe alternative?", "No", ["Yes, always", "Yes, at half dose", "Only with a steroid"], "The deck says ARBs are not a safe alternative after ACEi angioedema."),
        Q("How long must an ACE inhibitor be stopped before starting sacubitril/valsartan?", "3 days", ["3 hours", "3 weeks", "No washout needed"], "The 3-day washout lowers angioedema risk."),
        Q("Hydralazine plus isosorbide dinitrate must never be combined with:", "A PDE-5 inhibitor", ["A loop diuretic", "A beta blocker", "An SGLT2 inhibitor"], "Nitrate plus PDE-5 inhibitor can crash the blood pressure.")
      ],
      bank: [
        Q("Which is a contraindication to an ACE inhibitor?", "Bilateral renal artery stenosis", ["Diabetes", "Prior MI", "Atrial fibrillation"], "ACEi can drop GFR sharply when the kidneys depend on angiotensin II.")
      ] },

    { id: "bb-diuretics", title: "Beta blockers and diuretics", goal: "Three proven beta blockers; loop in the thick ascending limb, thiazide in the DCT, K-sparing in the collecting duct.",
      pages: [
        { title: "The three beta blockers", fig: { type: "tiles", items: [["💊", "Carvedilol", "Coreg"], ["💊", "Bisoprolol", "Zebeta"], ["💊", "Metoprolol succinate", "the long-acting form"]] },
          html: "<p>For <strong>stable</strong> HF (stage B and C): longer diastolic filling, better EF, fewer arrhythmias and sudden deaths. Side effects: bradycardia, hypotension, bronchospasm (non-selective). Hold in acute decompensation, stage D, cardiogenic shock and chronic lung disease.</p>" +
            std("The deck labels metoprolol succinate \"Lopressor\"; Lopressor is the tartrate. Succinate is Toprol-XL.") },
        { title: "Loop diuretics", fig: { type: "nephron", hi: "loop" },
          html: "<p>Furosemide, bumetanide, torsemide block NaCl in the <strong>thick ascending limb</strong>. Side effects: <strong>hypokalemia, metabolic alkalosis</strong>, hypovolemia, hyponatremia, <strong>hyperuricemia</strong>, sulfa concerns. Furosemide starts at 20 mg daily; severe HF may need 80 mg BID.</p>" },
        { title: "Thiazides", fig: { type: "nephron", hi: "thiazide" },
          html: "<p>HCTZ, chlorthalidone, chlorothiazide, metolazone act in the <strong>distal convoluted tubule</strong>. <strong>Ineffective if CrCl &lt; 30</strong>. Side effects include <strong>hypercalcemia</strong>, hypokalemia, hyponatremia, hypomagnesemia. Can be combined with a loop.</p>" },
        { title: "K-sparing", fig: { type: "nephron", hi: "ksparing" },
          html: "<p><strong>Spironolactone, eplerenone</strong> block aldosterone: gynecomastia, menstrual changes, impotence, <strong>hyperkalemia</strong>. Used in stage C/D, severe LV systolic dysfunction and <strong>after MI</strong>. Check K first. <strong>Amiloride, triamterene</strong> block the Na channel directly.</p>" }
      ],
      remember: ["HF beta blockers: carvedilol, bisoprolol, metoprolol succinate.", "Loop: thick ascending limb; hypoK, alkalosis, hyperuricemia.", "Thiazide: DCT; useless if CrCl < 30; hyperCa.", "Spironolactone: gynecomastia, hyperK; stage C/D and post-MI."],
      check: [
        Q("Which is one of the three beta blockers proven in HF?", "Carvedilol", ["Atenolol", "Propranolol", "Labetalol"], "Carvedilol, bisoprolol and metoprolol succinate are the HF beta blockers."),
        Q("Thiazides lose their effect below what creatinine clearance?", "30 mL/min", ["90 mL/min", "60 mL/min", "10 mL/min"], "The deck says thiazides are ineffective if CrCl is under 30."),
        Q("Which diuretic side effect raises calcium?", "Thiazide", ["Loop", "Spironolactone", "Amiloride"], "Thiazides hold calcium; loops waste it.")
      ],
      bank: [
        Q("A man on spironolactone develops breast tenderness. Why?", "Antiandrogen effect causing gynecomastia", ["Hypokalemia", "Thiazide cross-reaction", "Digoxin toxicity"], "Spironolactone blocks androgen receptors too.")
      ] },

    { id: "add-ons", title: "Digoxin, ivabradine, SGLT2, rehab", goal: "Digoxin helps symptoms not survival; ivabradine only if HR > 75; SGLT2i lowers mortality; rehab 20-30 min 5 days/week.",
      pages: [
        { title: "Digoxin", fig: { type: "flow", steps: ["Blocks Na-K-ATPase", "↑ calcium inside the cell", "stronger squeeze", "fewer symptoms and admissions", "<strong>no mortality benefit</strong>"] },
          html: "<p>Uses: rate control in HF with <strong>AF</strong>, late stage C and D. Toxicity: GI, neuro, brady and tachy arrhythmias. Avoid with prior <strong>VT/VF</strong>; caution in HFpEF. Other inotropes (milrinone and others) <strong>raise mortality</strong> long term.</p>" },
        { title: "Ivabradine and SGLT2 inhibitors", fig: { type: "vs", a: ["Ivabradine", "blue", ["Blocks the SA node f-current (If)", "Only slows the rate", "Lowers mortality if HR &gt; 75 on full therapy"]], b: ["Dapagliflozin, empagliflozin", "good", ["DAPA-HF: ↓ death and progression in HFrEF", "With or without diabetes", "SE: urination, UTI/groin infection, hypotension, amputation"]] },
          html: "<p>Both are stage C second-line add-ons.</p>" },
        { title: "Cardiac rehab and sleep", fig: { type: "tiles", items: [["🚶", "20-30 min, 5 days/week", "moderate intensity"], ["✅", "NYHA I-III", "not class IV"], ["⚠️", "HFpEF", "modify for exercise intolerance"], ["😴", "Sleep apnea in 75%", "CPAP improves symptoms and EF"]] },
          html: "<p>Rehab improves LV function, endothelial function and muscle performance and <strong>cuts HF admissions</strong>. Follow-up visits every 3-6 months.</p>" }
      ],
      remember: ["Digoxin: Na-K-ATPase; symptoms and admissions, not survival; avoid if prior VT/VF.", "Milrinone-type inotropes raise mortality long term.", "Ivabradine: only if HR > 75.", "SGLT2i: DAPA-HF mortality benefit; UTIs, amputation.", "Rehab NYHA I-III; OSA in 75% → CPAP."],
      check: [
        Q("Which is true of digoxin in HF?", "It reduces symptoms and hospitalizations but not mortality", ["It lowers mortality more than ACEi", "It is first line in acute HF", "It is safe after VF"], "Digoxin improves symptoms without changing survival."),
        Q("Ivabradine improves mortality only when resting HR is above:", "75 bpm", ["50 bpm", "60 bpm", "100 bpm"], "Below 75 the deck shows no mortality benefit."),
        Q("Which NYHA class should NOT do cardiac rehab?", "Class IV", ["Class I", "Class II", "Class III"], "Rehab is for NYHA I-III.")
      ],
      bank: [
        Q("Which side effect is linked to SGLT2 inhibitors?", "Genital or urinary infections", ["Gynecomastia", "Dry cough", "Hypercalcemia"], "Sugar in the urine feeds infections.")
      ] },

    { id: "acute-plan", title: "Acute HF: the full plan", goal: "NIV and intubation criteria, nitroglycerin cautions, loop dosing and who gets admitted.",
      pages: [
        { title: "Breathing support", fig: { type: "vs", a: ["CPAP / BiPAP", "ok", ["Raises O₂, cuts intubation", "↑ chest pressure → ↓ venous return (preload)", "<strong>Not</strong> if SBP &lt; 90, AMS, dementia"]], b: ["Intubate if", "bad", ["SpO₂ &lt; 80%", "Overt respiratory distress", "Altered mental status", "Failed NIV"]] },
          html: "<p>NIV needs a good mask seal and a cooperative patient; anxious patients can feel smothered.</p>" },
        { title: "Nitroglycerin cautions", fig: { type: "tiles", items: [["🫀", "RV infarct", "preload dependent"], ["🚪", "Aortic stenosis", ""], ["🧱", "HCM", ""], ["🏜️", "Dehydration, hypotension", ""], ["💊", "PDE-5 inhibitor", "24 h; tadalafil 48 h"]] },
          html: "<p>NTG dilates veins first (↓ preload) and arteries at high doses (↓ afterload), and opens coronaries. Headache → acetaminophen. Persistent hypotension → think RV infarct or volume depletion, give <strong>250-500 mL</strong> saline.</p>" },
        { title: "Loop diuretic dosing", fig: { type: "grid", cols: ["Patient", "IV furosemide"], rows: [["Naive", "<strong>40 mg IV</strong>"], ["Already on it", "<strong>1-2.5×</strong> the total oral daily dose"], ["Example: 40 mg PO daily", "40-100 mg IV"], ["Usual ED max, normal kidneys", "80 mg IV"]], hiCol: 1 },
          html: "<p>Loop diuretic <strong>alone without NTG</strong> in HF with hypertension raises the risk of renal decline and death.</p>" },
        { title: "Who goes where", fig: { type: "ladder", steps: [["ICU", "needs invasive monitoring or procedures", "bad"], ["Admit", "hypotension, hyponatremia, ↑ troponin or BNP, renal insufficiency, poor support at home", "ok"], ["Observation", "lower risk; many resolve in 12-24 h", "good"]] },
          html: "<p>Hospitalized HF carries a <strong>60% 5-year mortality</strong>.</p>" }
      ],
      remember: ["NIV: not if SBP < 90, AMS, dementia.", "Intubate: SpO₂ < 80%, distress, AMS, failed NIV.", "No NTG with RV infarct, AS, HCM, dehydration, PDE-5 (24 h; tadalafil 48 h).", "Furosemide 40 mg IV if naive; 1-2.5× oral dose; ED max 80.", "Admit with hypotension, low Na, ↑ trop/BNP, renal insufficiency."],
      check: [
        Q("Which finding is a contraindication to CPAP/BiPAP in acute HF?", "SBP under 90", ["SpO₂ 88%", "Crackles to mid-lung", "Heart rate 110"], "NIV raises chest pressure and can drop BP further."),
        Q("A patient took tadalafil 30 hours ago. Is nitroglycerin safe?", "No: tadalafil needs a 48-hour gap", ["Yes: 24 hours have passed", "Yes, at half dose", "Only IV"], "Tadalafil lasts longer, so its window is 48 hours."),
        Q("A patient takes furosemide 40 mg PO daily. Initial ED IV dose?", "40-100 mg IV", ["10 mg IV", "200 mg IV", "No diuretic"], "Give 1 to 2.5 times the total oral daily dose.")
      ],
      bank: [
        Q("NTG drops the BP and it stays low. What should you suspect?", "RV infarct or volume depletion", ["Nitrate tolerance", "Hyperkalemia", "Too little furosemide"], "Persistent hypotension means the heart is preload dependent.")
      ] }
  ] };

  /* =============================== TIER 3 · THE WEEDS =============================== */
  T.units["t3|heart-failure"] = { chunks: [
    { id: "numbers", title: "The numbers", goal: "5.8 million patients, 870,000 new cases a year, 60% 5-year mortality, Medicare's top cost.",
      pages: [
        { title: "How common", fig: { type: "bars", items: [["Now", 58, "5.8 million in the US", "blue"], ["2030", 84, "over 8 million (+46%)", "bad"]], note: "Bars scaled to millions of patients." },
          html: "<p>About <strong>870,000 new cases</strong> a year. Lifetime risk about <strong>1 in 5</strong>. HFrEF 45%, HFpEF 55%.</p>" },
        { title: "Who and how bad", fig: { type: "tiles", items: [["⚰️", "~60% 5-year mortality", "&gt; 250,000 deaths a year"], ["🏥", "&gt; 1 million admissions a year", "85% admitted at least once; 40% four times"], ["💵", "$30.7 billion", "Medicare's top cost; $70 billion by 2030"], ["👥", "Highest risk", "Black, then Hispanic, White, Asian"]] },
          html: "<p>CAD is the most common cause in <strong>men</strong>; hypertension in <strong>women</strong>.</p>" }
      ],
      remember: ["5.8 million now, > 8 million by 2030.", "870,000 new cases/year; lifetime risk 1 in 5.", "HFpEF 55%, HFrEF 45%.", "~60% 5-year mortality; 40% admitted 4+ times.", "CAD most common in men, HTN in women."],
      check: [
        Q("What share of heart failure cases are HFpEF?", "About 55%", ["About 10%", "About 30%", "About 90%"], "The deck splits HF into 55% HFpEF and 45% HFrEF."),
        Q("Most common cause of HF in women per the deck?", "Hypertension", ["CAD", "Valve disease", "Alcohol"], "HTN leads in women; CAD leads in men."),
        Q("Roughly what is the 5-year mortality of heart failure?", "About 60%", ["About 5%", "About 20%", "About 95%"], "HF carries a worse 5-year outlook than many cancers (standard teaching).")
      ],
      bank: [
        Q("Which group has the highest HF risk per the deck?", "Black patients", ["Asian patients", "White patients", "Hispanic patients"], "The deck orders risk Black, Hispanic, White, Asian.")
      ] },

    { id: "advanced-tests", title: "Beyond the basic workup", goal: "CPET peak VO₂ < 50% predicted → transplant/LVAD; MRI for fibrosis and infiltration; biopsy for myocarditis and infiltrative disease.",
      pages: [
        { title: "Which test, which question", fig: { type: "grid", cols: ["Test", "Use"], rows: [["CPET", "prognosis; peak VO₂ &lt; 50% predicted → transplant or LVAD"], ["Stress echo", "CAD plus diastolic function during exercise"], ["Cath", "intermediate/high CAD probability or abnormal stress test"], ["Cardiac MRI", "fibrosis, infiltrative CM, pericardial thickness, aorta"], ["Biopsy", "fulminant/giant cell myocarditis, sarcoid, amyloid, hemochromatosis"], ["Genetics", "HCM, arrhythmogenic RV dysplasia"]], hiCol: 1 },
          html: "<p>Exercise testing is especially useful in <strong>HFpEF</strong>, where exercise intolerance is the key symptom. Revascularization improves outcomes in ischemic HF.</p>" }
      ],
      remember: ["CPET: peak VO₂ < 50% predicted → transplant/LVAD.", "MRI: fibrosis, infiltration, pericardium.", "Biopsy: myocarditis (fulminant, giant cell), sarcoid, amyloid, hemochromatosis.", "Genetic testing: HCM, ARVD."],
      check: [
        Q("A peak VO₂ below what on CPET points toward transplant or LVAD?", "50% of predicted", ["90% of predicted", "75% of predicted", "10% of predicted"], "The deck uses under 50% predicted as the threshold."),
        Q("Which test is used most for fibrosis and infiltrative cardiomyopathy?", "Cardiac MRI", ["Chest X-ray", "Exercise EKG", "BNP"], "MRI shows tissue character, not just size."),
        Q("Endomyocardial biopsy is still used for suspected:", "Giant cell myocarditis", ["Hypertensive heart disease", "Stable CAD", "Aortic stenosis"], "Biopsy confirms myocarditis and infiltrative diseases.")
      ],
      bank: [
        Q("Genetic testing in HF is best used to find relatives at risk for:", "Hypertrophic cardiomyopathy", ["Ischemic cardiomyopathy", "Alcoholic cardiomyopathy", "Tachycardia-induced cardiomyopathy"], "HCM and ARVD are the inherited targets in the deck.")
      ] },

    { id: "stage-d", title: "Stage D: devices and endings", goal: "ICD for sudden death, CRT, CardioMEMS, IABP inflates in diastole, LVAD bridges to transplant; hospice may mean ICD deactivation.",
      pages: [
        { title: "The device menu", fig: { type: "tiles", items: [["⚡", "ICD", "shocks VT/VF: prevents sudden death"], ["🔀", "CRT", "resynchronizes the ventricles"], ["📡", "CardioMEMS", "implanted pressure sensor"], ["🎈", "IABP", "inflates in diastole, deflates at systole: ↓ afterload"], ["⚙️", "LVAD", "pumps for the LV: bridge to transplant or long term"], ["🩸", "Ultrafiltration / dialysis", "fluid removal"]] },
          html: "<p>HF patients are at high risk of VT and VF, which is why the ICD matters.</p>" },
        { title: "Transplant and hospice", fig: { type: "vs", a: ["Transplant", "good", ["Can't wean from acute support, or severe limits despite therapy", "Younger patients", "Life expectancy &lt; 6 months"]], b: ["Hospice / palliative", "blue", ["Set end-of-life goals", "Consider <strong>ICD deactivation</strong>"]] },
          html: "<p>A firing ICD in a dying patient causes pain without changing the outcome.</p>" }
      ],
      remember: ["ICD prevents sudden death from VT/VF.", "IABP inflates in diastole, deflates at systole.", "LVAD: bridge to transplant or long-term.", "Transplant: younger, intractable HF, < 6 months life expectancy.", "Hospice: consider ICD deactivation."],
      check: [
        Q("When does an intra-aortic balloon pump inflate?", "In diastole", ["In systole", "Only during VF", "Continuously"], "Diastolic inflation and systolic deflation cut afterload."),
        Q("Which device is described as a bridge to transplant?", "LVAD", ["ICD", "CardioMEMS", "Pacemaker"], "An LVAD supports the LV until a heart is available."),
        Q("In hospice for end-stage HF, what should be considered for the ICD?", "Deactivation", ["Upgrading to CRT", "Raising the shock energy", "Nothing"], "Shocks at the end of life add suffering.")
      ],
      bank: [
        Q("Heart transplant is indicated for younger patients with intractable HF and a life expectancy under:", "6 months", ["5 years", "2 years", "1 week"], "The deck lists under 6 months.")
      ] },

    { id: "acute-weeds", title: "Acute HF fine print", goal: "History of HF is the best clue (sens 60%, spec 90%); AF has the strongest EKG link; new-onset HF means think MI or PE.",
      pages: [
        { title: "How sure can you be", fig: { type: "grid", cols: ["Clue", "Sensitivity", "Specificity"], rows: [["History of HF", "60%", "90%"], ["Clinical judgment", "61%", "86%"]] },
          html: "<p>When clinicians are <strong>80% confident</strong>, their gestalt beats any ED test. <strong>Cheyne-Stokes</strong> breathing (deep breaths then apnea) can appear.</p>" },
        { title: "New onset: find the cause", fig: { type: "vs", a: ["MI", "bad", ["Treat as ACS", "Cardiac cath"]], b: ["PE → cor pulmonale", "blue", ["Image to confirm", "Anticoagulate", "Manage acute right HF"]] },
          html: "<p>On the EKG, <strong>atrial fibrillation</strong> has the highest correlation with HF. The ED labs add CBC, BMP, proBNP, LFTs, troponin and a blood gas.</p>" },
        { title: "Inpatient goals", fig: { type: "flow", steps: ["Treat the cause", "Wean breathing support", "IV diuretic → oral", "Wean vasodilators, inotropes, pressors", "Teach, refer to rehab", "Follow up within 5 days"] },
          html: "<p>Once stable, an <strong>echo</strong> defines the type and EF. Seeing them within 5 days cuts readmissions.</p>" }
      ],
      remember: ["HF history: sens 60%, spec 90%.", "Gestalt at 80% confidence beats ED tests.", "AF: strongest EKG link to HF.", "New onset: rule out MI and PE.", "Discharge follow-up within 5 days."],
      check: [
        Q("What is the most useful historical clue for acute HF?", "A prior history of heart failure", ["Recent travel", "Chest pain at rest", "Smoking history"], "Prior HF has 60% sensitivity and 90% specificity."),
        Q("Which EKG rhythm correlates most with a diagnosis of HF?", "Atrial fibrillation", ["Sinus bradycardia", "First-degree AV block", "RBBB"], "The deck names AF as the strongest EKG link."),
        Q("Ideal follow-up after an HF discharge is within:", "5 days", ["5 weeks", "3 months", "1 year"], "Early follow-up reduces readmissions.")
      ],
      bank: [
        Q("Deep breaths alternating with periods of apnea in a decompensated HF patient is called:", "Cheyne-Stokes respiration", ["Kussmaul breathing", "Biot breathing", "Orthopnea"], "Cheyne-Stokes is a crescendo-decrescendo pattern with apnea.")
      ] },

    { id: "drug-weeds", title: "Drug fine print", goal: "Loop and thiazide side-effect lists, ARNI's mechanism, digoxin in HFpEF, ACEi as an NIV alternative.",
      pages: [
        { title: "Electrolytes by diuretic", fig: { type: "grid", cols: ["", "Loop", "Thiazide", "K-sparing"], rows: [["K", "↓", "↓", "↑"], ["Ca", "↓ (standard teaching)", "↑", ""], ["Na", "↓", "↓", ""], ["Mg", "", "↓", ""], ["Acid-base", "alkalosis", "hypochloremic alkalosis", ""], ["Other", "hyperuricemia, sulfa", "sulfa", "gynecomastia (spiro)"]] },
          html: "<p>Spironolactone also lists hypertriglyceridemia and renal failure. Hyperkalemia risk rises with renal impairment, ACEi/ARB and NSAIDs.</p>" },
        { title: "How sacubitril helps", fig: { type: "flow", steps: ["Neprilysin breaks down natriuretic peptides", "sacubitril blocks neprilysin", "more ANP/BNP: natriuresis, vasodilation", "valsartan blocks angiotensin II"] },
          html: "<p>Sacubitril/valsartan (Entresto) is recommended for patients tolerating a max-dose ACEi or ARB. The trial stopped early for benefit.</p>" },
        { title: "Why digoxin is risky in HFpEF", fig: { type: "flow", steps: ["Digoxin ↑ calcium inside cells", "stiff myocytes relax even less", "worse diastolic filling"] },
          html: "<p>Digoxin is for <strong>HFrEF only</strong> in stage D.</p>" }
      ],
      remember: ["Loop: ↓K, ↓Na, alkalosis, ↑uric acid, sulfa.", "Thiazide: ↑Ca, ↓K, ↓Na, ↓Mg, hypochloremic alkalosis.", "Sacubitril blocks neprilysin → more natriuretic peptides.", "Digoxin worsens diastolic function; HFrEF only."],
      check: [
        Q("Which enzyme does sacubitril inhibit?", "Neprilysin", ["ACE", "Na-K-ATPase", "Phosphodiesterase-5"], "Blocking neprilysin keeps natriuretic peptides around longer."),
        Q("Which diuretic lowers magnesium and raises calcium?", "Hydrochlorothiazide", ["Spironolactone", "Amiloride", "Acetazolamide"], "Thiazides cause hypercalcemia and hypomagnesemia."),
        Q("Why is digoxin used with caution in HFpEF?", "Extra intracellular calcium worsens relaxation", ["It lowers EF", "It causes hyperkalemia", "It blocks BNP"], "More calcium stiffens an already stiff ventricle.")
      ],
      bank: [
        Q("Which three drug types raise hyperkalemia risk with spironolactone?", "ACE inhibitors, ARBs and NSAIDs", ["Loops, thiazides and SGLT2i", "Beta blockers, nitrates and digoxin", "Statins, aspirin and heparin"], "All three reduce potassium excretion.")
      ] }
  ] };
})();
