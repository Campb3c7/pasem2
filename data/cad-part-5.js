/* Cardio Part 3, CAD Part V: Pharmacologic Treatment of CAD and ACS (Stager, 87 slides). Sections follow the deck,
   which walks the 9 objectives in order. Read from slide pictures: 26 (beta receptors), 42 (doses to prevent angina),
   43 (stable angina stepwise flowchart), 64 (2025 ACC/AHA P2Y12 choice), 71 (plug vs mesh), 74 (STEMI anticoagulant
   by reperfusion strategy), 80 (CABG grafts), 82 (STEMI reperfusion flowchart with lytic contraindications).
   Slide 21 misspells Adcirca as "Acarida". */
(function () {
  "use strict";

  function q(prompt, answer, wrong, explanation) {
    return { prompt: prompt, choices: [answer].concat(wrong), correct: 0, explanation: explanation };
  }
  function C(title, html, coverage, test, apply) {
    return { title: title, html: html, coverage: coverage, test: test, apply: apply };
  }
  function S(id, title, description, units) {
    var r = { id: id, title: title, description: description, cards: [], test: [], apply: [] };
    units.forEach(function (u, i) {
      r.cards.push({ title: u.title, html: u.html, coverage: u.coverage });
      ["test", "apply"].forEach(function (m) {
        u[m].forEach(function (x) { x.card = i; r[m].push(x); });
      });
    });
    return r;
  }
  function hy(x) { return '<div class="box-hy"><span class="lbl">High yield</span>' + x + "</div>"; }
  function mn(x) { return '<div class="box-mnemonic"><span class="lbl">Mnemonic</span>' + x + "</div>"; }
  function note(x) { return '<div class="box-fix"><span class="lbl">Source note</span>' + x + "</div>"; }
  function tbl(head, rows) {
    return '<table class="learn-table"><tr>' + head.map(function (h) { return "<th>" + h + "</th>"; }).join("") + "</tr>" +
      rows.map(function (r) { return "<tr>" + r.map(function (d) { return "<td>" + d + "</td>"; }).join("") + "</tr>"; }).join("") + "</table>";
  }
  function ul(items) { return "<ul>" + items.map(function (i) { return "<li>" + i + "</li>"; }).join("") + "</ul>"; }
  function chain(steps) { return '<ol class="concept-chain">' + steps.map(function (s) { return "<li>" + s + "</li>"; }).join("") + "</ol>"; }



  window.CAD_PART_5_OBJECTIVES = [

    S("01-supply-demand", "1. Supply, demand and angina", "Objective 1 (slides 2 to 4): what sets oxygen supply and demand, what upsets them, and how angina feels.", [
      C("Oxygen supply vs demand",
        tbl(["Supply depends on", "Demand depends on"], [["<strong>Coronary blood flow</strong>", "<strong>Heart rate</strong>"], ["<strong>O2 content</strong> (hemoglobin, saturation)", "<strong>Contractility</strong>"], ["<strong>Perfusion pressure</strong>", "<strong>Wall stress</strong> (preload, afterload)"]]) +
        tbl(["", "Noncardiac", "Cardiac"], [
          ["<strong>Raise demand</strong>", "Fever, hyperthyroidism, cocaine/meth, HTN, anxiety, albuterol", "Tachycardia, HCM, AS, increased contractility"],
          ["<strong>Lower supply</strong>", "Anemia, hypoxemia, sickle cell, sympathomimetics, hyperviscosity (polycythemia vera, dehydration)", "CAD, AS, HCM"]]) +
        hy("Every antianginal drug either <strong>lowers demand</strong> (HR, contractility, wall stress) or <strong>raises supply</strong> (coronary dilation, longer diastole)."),
        ["sd-supply", "sd-demand", "sd-raise", "sd-lower"],
        [q("Which factor sets myocardial oxygen demand?", "Heart rate", ["Hemoglobin", "Oxygen saturation", "Coronary diameter"], "A faster heart beats more often and uses more oxygen per minute. (Slide 2)"),
          q("Which factor sets oxygen supply?", "Oxygen content of the blood", ["Contractility", "Wall stress", "Heart rate alone"], "Supply depends on how much oxygen the blood carries and how much reaches the muscle. (Slide 2)"),
          q("Which noncardiac condition raises demand?", "Hyperthyroidism", ["Anemia", "Hypoxemia", "Sickle cell disease"], "Thyroid hormone speeds the heart and boosts contractility, raising oxygen use. (Slide 3)"),
          q("Which noncardiac condition lowers supply?", "Anemia", ["Fever", "Anxiety", "Albuterol use"], "Less hemoglobin means less oxygen delivered per beat. (Slide 3)"),
          q("Which cardiac conditions both raise demand and lower supply?", "Aortic stenosis and HCM", ["Mitral prolapse and AF", "Pericarditis and myocarditis", "WPW and SVT"], "AS and HCM thicken the wall, raising demand, and limit coronary filling, lowering supply. (Slide 3)")],
        [q("A patient with stable CAD has angina only when his hemoglobin falls to 7. Why?", "Anemia lowers oxygen supply", ["Anemia raises heart rate only", "Anemia causes plaque rupture", "Anemia blocks nitrates"], "Less hemoglobin means less oxygen to muscle already limited by a fixed plaque. (Slide 3)"),
          q("An asthmatic with CAD gets chest pain after heavy albuterol use. Mechanism?", "Albuterol raises demand through tachycardia", ["Albuterol lowers hemoglobin", "Albuterol causes plaque rupture", "Albuterol blocks aspirin"], "Beta agonists speed the heart, raising oxygen demand. (Slide 3)")]),
      C("Signs and symptoms of angina",
        tbl(["Feature", "Typical angina"], [["Quality", "Pressure, heavy weight, burning, tightness, SOB, deep, gradual"], ["Radiation", "Left arm, left shoulder, jaw, right arm, back"], ["Duration", "<strong>2 to 30 minutes</strong>"], ["Triggers", "<strong>Exertion, cold</strong>, fright, anger, sexual intercourse"], ["NTG relief", "Within <strong>45 seconds to 5 minutes</strong>"], ["Location", "Substernal, to left shoulder/arm, jaw, lower neck or upper spine, interscapular; rarely right arm"]]),
        ["sd-angina"],
        [q("How long does typical angina last?", "2 to 30 minutes", ["A few seconds", "Several hours", "Days"], "Angina lasts minutes because it stops once demand falls; seconds or hours suggest other causes. (Slide 4)"),
          q("How fast does nitroglycerin relieve angina?", "Within 45 seconds to 5 minutes", ["After 1 hour", "After 24 hours", "It never relieves angina"], "SL NTG acts in minutes by lowering preload. (Slide 4)")],
        [q("A man has chest pressure walking into cold wind that eases after resting for 5 minutes. Which feature fits angina?", "Cold and exertion as triggers", ["Pain lasting days", "Sharp pain with breathing", "Point tenderness"], "Cold and exertion raise demand and are classic angina triggers. (Slide 4)")])
    ]),

    S("02-goals-risk", "2. Treatment goals and risk factor control", "Objective 1 (slides 5 to 8): short and long term goals and the risk factor targets.", [
      C("Goals and risk factor targets",
        tbl(["Goal", "Aim"], [["<strong>Short term</strong>", "Relieve angina; restore supply-demand balance"], ["<strong>Long term</strong>", "Prevent MI, arrhythmias, HF; prevent morbidity and death"]]) +
        tbl(["Risk factor", "Target"], [
          ["Tobacco", "Stop; offer counseling and medication; avoid <strong>secondhand smoke</strong>"],
          ["BP", "<strong>&lt; 130/80</strong> for many, individualized"],
          ["Lipids", "<strong>High-intensity statin</strong>; reassess LDL to see if more is needed"],
          ["Activity", "<strong>&ge; 150 min/week</strong> moderate"],
          ["Weight", "Sustainable; <strong>BMI is not a universal target</strong>"],
          ["Diabetes", "A1c <strong>around 7%</strong> for many, individualized"],
          ["Alcohol", "<strong>Do not recommend</strong> alcohol for heart benefit"]]),
        ["gr-goals", "gr-smoke", "gr-bp", "gr-lipid", "gr-activity", "gr-weight", "gr-a1c", "gr-alcohol"],
        [q("What BP goal is appropriate for many CAD patients?", "Below 130/80", ["Below 160/100", "Below 110/60 for all", "Below 150/90"], "Lower BP reduces afterload and future events in CAD. (Slide 7)"),
          q("How much activity is recommended per week in CAD?", "At least 150 minutes moderate", ["30 minutes total", "300 minutes vigorous only", "None"], "Regular moderate activity lowers CV risk and is tailored to symptoms. (Slide 8)"),
          q("Which lipid therapy is typical for established ASCVD?", "High-intensity statin", ["Niacin alone", "No therapy", "Fish oil alone"], "High-intensity statins lower LDL most and cut events. (Slide 7)"),
          q("What does the deck say about alcohol for heart health?", "Do not recommend it for cardiovascular benefit", ["Recommend 2 drinks daily", "Recommend red wine", "Recommend it to raise HDL"], "Alcohol is not advised as a heart treatment because of its risks. (Slide 8)"),
          q("A reasonable A1c goal for many nonpregnant adults with CAD is about:", "7%", ["5%", "9%", "11%"], "Around 7% balances benefit against hypoglycemia, individualized by patient. (Slide 8)"),
          q("Which is a long-term goal of CAD treatment?", "Preventing MI, arrhythmias and HF", ["Only relieving today's pain", "Raising heart rate", "Stopping all exercise"], "Long term, treatment aims to prevent events and death. (Slide 5)")],
        [q("A CAD patient asks whether he should start drinking red wine for his heart. Best answer?", "No, alcohol is not recommended for cardiovascular benefit", ["Yes, one glass nightly", "Yes, it replaces a statin", "Yes, it raises HDL safely"], "The deck says not to recommend alcohol for heart benefit. (Slide 8)"),
          q("A CAD patient with BMI 28 asks if he must reach BMI 25. Best answer?", "BMI is one measure, not a universal target; focus on sustainable weight management", ["Yes, exactly 25", "Weight does not matter", "He must reach BMI 18"], "The deck treats BMI as one measure, not a fixed goal. (Slide 8)")])
    ]),

    S("03-choosing-antianginals", "3. Choosing antianginal drugs", "Objective 1 (slides 6, 9, 10, 42, 43): the four drug choices, how to pick, the stepwise flowchart and usual doses.", [
      C("Stepwise therapy for stable angina",
        ul(["Three classic anti-ischemic classes: <strong>beta blockers, nitrates, CCBs</strong>; plus <strong>ranolazine</strong>.", "Choose by <strong>HR, BP, LV function, comorbidities</strong> and response."]) +
        chain(["<strong>SL NTG</strong> for acute relief (everyone)", "<strong>BB or CCB</strong> as initial maintenance", "Still symptomatic: <strong>add the other class</strong> (BB or CCB) <strong>or a long-acting nitrate</strong>", "Still symptomatic on combination: <strong>add ranolazine</strong> (last line)"]),
        ["ca-classes", "ca-choose", "ca-flow"],
        [q("Initial maintenance therapy for stable angina is usually:", "A beta blocker or CCB", ["Ranolazine", "A long-acting nitrate alone", "An opioid"], "BB or CCB is started first; nitrates and ranolazine are added if needed. (Slides 10, 43)"),
          q("In the stable angina flowchart, ranolazine is:", "Last-line add-on", ["First-line", "For acute relief", "Never used"], "Ranolazine is added when symptoms persist despite combination therapy. (Slide 43)"),
          q("Which drug does every angina patient carry for acute relief?", "SL nitroglycerin", ["Ranolazine", "Amlodipine", "Isosorbide mononitrate"], "SL NTG works in minutes for acute attacks. (Slides 15, 43)"),
          q("Which factors guide the choice of antianginal?", "HR, BP, LV function and comorbidities", ["Hair color", "Cholesterol only", "Age only"], "A slow HR or low BP, for example, rules certain drugs out. (Slide 10)")],
        [q("A patient on metoprolol still has angina twice weekly. Next step per the flowchart?", "Add a CCB or a long-acting nitrate", ["Stop metoprolol", "Add ranolazine first", "Add an opioid"], "Persistent symptoms on one class means adding the other class or a long-acting nitrate. (Slide 43)"),
          q("Angina persists on a BB, amlodipine and isosorbide mononitrate. Next add-on?", "Ranolazine", ["Another BB", "Verapamil", "Aspirin 650"], "Ranolazine is the last-line add-on after combination therapy. (Slide 43)")]),
      C("Usual oral doses to prevent angina",
        tbl(["Drug", "Start", "Max"], [
          ["Atenolol", "50 mg daily", "100 mg daily"], ["Bisoprolol", "2.5 mg daily", "20 mg daily"], ["Carvedilol IR", "12.5 mg BID", "50 mg BID"],
          ["Metoprolol succinate", "25 to 50 mg daily", "400 mg daily"], ["Metoprolol tartrate", "12.5 to 25 mg BID", "200 mg BID"], ["Propranolol ER", "80 mg daily", "320 mg daily"],
          ["Amlodipine", "5 mg daily", "10 mg daily"], ["Nifedipine ER", "30 or 60 mg daily", "120 mg daily"],
          ["Diltiazem 24-h ER", "120 to 180 mg daily", "360 mg daily"], ["Verapamil ER", "180 mg daily", "480 mg/day in 1 to 2 doses"],
          ["Isosorbide mononitrate ER", "30 to 60 mg daily", "120 mg daily"], ["Ranolazine", "500 mg BID", "1,000 mg BID"]]),
        ["ca-doses"],
        [q("What is the starting dose of amlodipine for angina?", "5 mg daily", ["50 mg daily", "0.5 mg daily", "100 mg BID"], "Amlodipine starts at 5 mg and goes up to 10 mg. (Slide 42)"),
          q("Metoprolol tartrate is dosed:", "Twice daily", ["Once weekly", "Once daily only", "Every hour"], "Tartrate is short acting, so it is given twice daily, unlike once-daily succinate. (Slide 42)")],
        [q("A patient on metoprolol succinate wants once-daily dosing. Is that how succinate is dosed?", "Yes, once daily", ["No, four times daily", "No, weekly", "No, only IV"], "Succinate is extended release and given once daily. (Slide 42)")])
    ]),

    S("04-nitrates-how", "4. Nitrates: how they work and the forms", "Objective 2 (slides 11 to 13): nitric oxide, venodilation and the onset and duration of each form.", [
      C("How nitrates relieve angina",
        chain(["Nitrate is converted to <strong>nitric oxide</strong>", "<strong>Smooth-muscle relaxation</strong>", "Mainly <strong>venodilation</strong>: less venous return, <strong>lower preload</strong>", "<strong>Lower wall stress</strong>", "<strong>Lower O2 demand</strong>"]) +
        ul(["Also <strong>dilate coronary arteries</strong> and relieve <strong>vasospasm</strong> (raises supply)."]),
        ["nh-moa", "nh-coronary"],
        [q("Nitrates are converted to:", "Nitric oxide", ["Carbon monoxide", "Thromboxane", "Angiotensin II"], "Nitric oxide relaxes vascular smooth muscle. (Slide 11)"),
          q("The main effect of nitrates is:", "Venodilation that lowers preload", ["Arterial constriction", "Faster heart rate", "More contractility"], "Pooling blood in veins lowers preload and wall stress, cutting demand. (Slide 11)"),
          q("How do nitrates help coronary vasospasm?", "They dilate coronary arteries", ["They slow the heart", "They block platelets", "They raise preload"], "Coronary dilation reverses spasm and improves supply. (Slides 11 to 12)")],
        [q("Why does SL nitroglycerin relieve exertional angina within minutes?", "Venodilation lowers preload and wall stress, cutting oxygen demand", ["It dissolves the plaque", "It raises heart rate", "It thins the blood"], "Lower preload shrinks the ventricle and its oxygen needs. (Slides 11 to 12)")]),
      C("Nitrate forms",
        tbl(["Form", "Onset", "Duration", "Start dose", "Use"], [
          ["<strong>IV NTG</strong>", "1 to 2 min", "3 to 5 min", "5 to 10 mcg/min", "Acute CP, HTN"],
          ["<strong>SL NTG</strong>", "1 to 3 min", "30 to 60 min", "0.4 mg PRN", "Acute CP"],
          ["<strong>Isosorbide dinitrate</strong>", "20 to 40 min", "4 to 6 h", "10 to 20 mg TID", "Stable angina"],
          ["<strong>NTG patch</strong>", "40 to 60 min", "&gt; 8 h", "1 patch", "Stable angina"],
          ["<strong>Isosorbide mononitrate</strong>", "30 to 60 min", "6 to 8 h", "30 mg daily", "Stable angina"]]) +
        hy("<strong>Every</strong> nitrate form causes <strong>tolerance</strong>."),
        ["nh-forms", "nh-tol-all"],
        [q("Which nitrate form has the fastest onset?", "IV nitroglycerin", ["NTG patch", "Isosorbide dinitrate", "Isosorbide mononitrate"], "IV NTG works in 1 to 2 minutes and wears off in 3 to 5. (Slide 13)"),
          q("How long does SL NTG last?", "30 to 60 minutes", ["3 to 5 minutes", "8 hours", "24 hours"], "SL NTG covers an acute episode but not the whole day. (Slide 13)"),
          q("Which nitrate forms cause tolerance?", "All of them", ["Only IV", "Only the patch", "None"], "Continuous nitrate exposure of any form leads to tolerance. (Slide 13)"),
          q("Isosorbide mononitrate starts at:", "30 mg daily", ["0.4 mg PRN", "5 mcg/min", "10 mg every hour"], "ISMN is a once-daily oral preventive nitrate. (Slide 13)"),
          q("The NTG patch lasts:", "More than 8 hours", ["3 to 5 minutes", "30 minutes", "1 week"], "The patch delivers nitrate over many hours for prevention. (Slide 13)")],
        [q("Which nitrate is for preventing stable angina, not stopping an attack?", "Isosorbide mononitrate", ["SL NTG", "IV NTG", "NTG spray"], "Long-acting oral nitrates take 30 to 60 minutes to work, so they prevent rather than treat attacks. (Slides 13, 18)")])
    ]),

    S("05-nitrate-use", "5. Using IV, SL and long-acting nitrates", "Objective 2 (slides 14 to 18): when to use each nitrate and how patients take them.", [
      C("IV and SL nitroglycerin",
        ul(["<strong>IV NTG</strong>: persistent ischemic pain despite SL; <strong>titratable and transient</strong>, so useful with <strong>marginal BP</strong>; <strong>drug of choice</strong> for hypertensive emergency with <strong>decompensated HF / pulmonary edema</strong>.",
          "<strong>SL NTG</strong>: PRN; <strong>every CAD patient carries it</strong>.",
          "Directions: <strong>stop and sit</strong>; take <strong>1 dose</strong>; if not relieved in <strong>5 minutes, call 911</strong> (do not wait for all 3); may repeat <strong>q5 min up to 3</strong> while waiting if BP allows.",
          "<strong>Do not swallow</strong>: let it dissolve. <strong>Headache</strong> from cerebral vasodilation is common."]),
        ["nu-iv", "nu-sl-carry", "nu-sl-steps", "nu-sl-swallow"],
        [q("If SL NTG does not relieve chest pain in 5 minutes, the patient should:", "Call 911", ["Wait for all 3 doses first", "Take a long-acting nitrate", "Go to sleep"], "Pain lasting past one dose may be an MI, so EMS should be called right away. (Slide 15)"),
          q("Why sit down before SL NTG?", "It can cause dizziness from vasodilation", ["It works only lying flat", "It must be taken with food", "It raises BP"], "Rapid venodilation can drop BP and cause dizziness or falls. (Slides 15 to 16)"),
          q("IV NTG is the treatment of choice for hypertensive emergency with:", "Decompensated HF or pulmonary edema", ["Aortic dissection only", "RV infarct", "Hypotension"], "NTG lowers preload, unloading the lungs while lowering BP. (Slide 14)"),
          q("Why is an IV NTG drip useful with marginal BP?", "It is titratable and its effect is short", ["It raises BP", "It lasts 24 hours", "It cannot be stopped"], "A short-acting drip can be turned down quickly if BP drops. (Slide 14)"),
          q("How is an SL NTG tablet taken?", "Dissolved under the tongue, not swallowed", ["Swallowed with water", "Chewed", "Crushed in food"], "Swallowed nitrate is destroyed by first-pass metabolism; under the tongue it absorbs directly. (Slide 16)")],
        [q("A patient with angina takes one SL NTG; 5 minutes later the pain continues. What should he do?", "Call 911, then may repeat NTG every 5 minutes up to 3 if BP allows", ["Take 2 more tablets before calling", "Drive himself to clinic", "Wait 1 hour"], "Unrelieved pain after one dose needs EMS now. (Slide 15)")]),
      C("Long-acting nitrates",
        ul(["<strong>Second-line</strong> when angina is not controlled on a <strong>beta blocker</strong>.",
          "<strong>Isosorbide mononitrate (Imdur)</strong>: ER <strong>once daily</strong>; IR at <strong>8 am and 3 pm</strong> for an overnight drug-free interval.",
          "<strong>Isosorbide dinitrate (Isordil)</strong>: <strong>2 to 3 times daily</strong> in a similar way.",
          "For <strong>prevention, not acute relief</strong>; dosed for times angina is likely.",
          "Daily <strong>nitrate-free interval of 10 to 12 hours</strong> prevents tolerance."]),
        ["nu-la-role", "nu-imdur", "nu-isordil", "nu-free"],
        [q("Why is immediate-release isosorbide mononitrate given at 8 am and 3 pm?", "To leave a nitrate-free interval overnight", ["To match meals", "To avoid headache", "To raise BP at night"], "Spacing the doses leaves a daily gap that prevents tolerance. (Slide 17)"),
          q("How long is the daily nitrate-free interval?", "10 to 12 hours", ["1 hour", "24 hours", "None needed"], "A 10 to 12 hour gap restores nitrate response. (Slide 18)"),
          q("What is the brand name of isosorbide mononitrate?", "Imdur", ["Isordil", "Ranexa", "Nitrostat"], "Isosorbide mononitrate is Imdur; dinitrate is Isordil. (Slide 17)"),
          q("Long-acting nitrates are second-line when angina is not controlled on:", "A beta blocker", ["Ranolazine", "Aspirin", "A statin"], "They are added when a BB alone is not enough. (Slide 17)")],
        [q("A patient takes isosorbide mononitrate IR at 8 am, 3 pm and 10 pm. What is wrong?", "No nitrate-free interval, so tolerance will develop", ["The dose is too low", "It should be taken only at night", "Nothing"], "Round-the-clock nitrate removes the break that prevents tolerance. (Slides 17 to 18)")])
    ]),

    S("06-nitrate-safety", "6. Nitrate side effects and contraindications", "Objective 2 (slides 19 to 24): tolerance, headache, hypotension, PDE-5 inhibitors and monitoring.", [
      C("Side effects",
        tbl(["Effect", "Detail"], [
          ["<strong>Tolerance</strong> (tachyphylaxis)", "Within <strong>24 to 48 h</strong> of continuous use; prevent with a nitrate-free interval"],
          ["<strong>Headache</strong>", "From vasodilation; <strong>does not show whether the drug is working</strong>"],
          ["<strong>Flushing</strong>", "Vasodilation"],
          ["<strong>Orthostatic hypotension / dizziness</strong>", "From <strong>venous pooling</strong>; sit down first; caution with low BP or volume depletion"]]),
        ["ns-tol", "ns-ha", "ns-flush", "ns-ortho"],
        [q("Nitrate tolerance can develop within:", "24 to 48 hours of continuous use", ["1 year", "1 minute", "Never"], "Continuous exposure quickly blunts the nitrate effect. (Slide 19)"),
          q("Does nitrate headache mean the drug is working?", "No, it does not indicate effectiveness", ["Yes, always", "Only with IV", "Only with the patch"], "Headache comes from cerebral vasodilation and does not track anti-ischemic effect. (Slide 19)"),
          q("Nitrate orthostatic hypotension comes mainly from:", "Venous pooling", ["Bradycardia", "Fluid overload", "Arterial spasm"], "Dilated veins hold blood away from the heart, dropping BP on standing. (Slide 20)")],
        [q("A patient on an NTG patch worn 24 hours a day says it stopped helping after a few days. Why?", "Nitrate tolerance from no free interval", ["The patch is expired", "His plaque dissolved", "He needs a bigger patch"], "Continuous use causes tolerance, fixed by removing the patch for 10 to 12 hours daily. (Slides 18 to 19)")]),
      C("Contraindications, cautions and monitoring",
        ul(["<strong>PDE-5 inhibitors within 24 h</strong>: severe hypotension. Sildenafil (Viagra, Revatio), vardenafil (Levitra), tadalafil (Cialis, Adcirca).",
          "<strong>HCM with LVOT obstruction</strong>: lower preload worsens obstruction.", "<strong>Severe aortic stenosis</strong>: use cautiously; hypotension.", "<strong>Volume depletion or low BP</strong>.",
          "Monitor BP, HR, dizziness, angina pattern and <strong>SL NTG use</strong>; new, worse, prolonged or rest pain needs <strong>urgent evaluation</strong>.",
          "Nitrates also relieve <strong>esophageal spasm</strong>: pain that resolves with NTG is not proof of angina."]),
        ["ns-pde5", "ns-hcm", "ns-as", "ns-monitor", "ns-esoph"],
        [q("Which drug must not be taken within 24 hours of a nitrate?", "Tadalafil", ["Atorvastatin", "Lisinopril", "Metformin"], "PDE-5 inhibitors plus nitrates both raise cyclic GMP and can cause severe hypotension. (Slide 21)"),
          q("Why do nitrates worsen HCM with LVOT obstruction?", "Lower preload makes the outflow obstruction worse", ["They thicken the septum", "They raise heart rate only", "They block calcium"], "A smaller LV pulls the septum and mitral leaflet together, narrowing the outflow. (Slide 22)"),
          q("Revatio, which interacts with nitrates, is a brand of:", "Sildenafil", ["Tadalafil", "Vardenafil", "Nitroglycerin"], "Revatio is sildenafil used for pulmonary hypertension. (Slide 21)"),
          q("Which non-cardiac chest pain can also be relieved by nitrates?", "Esophageal spasm", ["Rib fracture", "Pneumonia", "Shingles"], "Nitrates relax esophageal smooth muscle too. (Slide 24)")],
        [q("A man taking Cialis for ED arrives with chest pain. Which drug is withheld?", "Nitroglycerin", ["Aspirin", "Heparin", "Metoprolol"], "Cialis is tadalafil, a PDE-5 inhibitor; nitrates could cause severe hypotension. (Slide 21)"),
          q("A patient's substernal pain eased after SL NTG. Does that prove angina?", "No, esophageal spasm also responds to nitrates", ["Yes, always", "Yes, if the pain was sharp", "Yes, if he is over 50"], "NTG relief does not rule out esophageal causes. (Slide 24)"),
          q("A stable angina patient now needs SL NTG at rest several times a day. Next step?", "Urgent evaluation for unstable angina", ["Double the patch", "Reassure and follow up in 6 months", "Stop all nitrates"], "New rest symptoms or rising NTG use suggest unstable angina. (Slide 23)")])
    ]),

    S("07-bb-how", "7. Beta blockers: receptors and how they work", "Objective 3 (slides 25 to 30): beta-1 and beta-2, how BBs lower demand, the three groups and vasospasm.", [
      C("Receptors and mechanism",
        tbl(["Receptor", "Where", "Stimulation does"], [["<strong>Beta-1</strong>", "<strong>Heart</strong>, kidney <strong>JG cells</strong>", "Raises HR, contractility, AV conduction, <strong>renin</strong>"], ["<strong>Beta-2</strong>", "Bronchial and vascular smooth muscle", "<strong>Bronchodilation</strong>, vasodilation"]]) +
        ul(["Beta receptors are G protein-coupled receptors of the sympathetic system, activated by <strong>epinephrine</strong> (beta 1, 2, 3) and <strong>norepinephrine</strong> (mainly beta 1).",
          "<strong>First-line</strong> for stable angina. Lower <strong>HR, BP and contractility</strong>: less demand.", "Slower HR <strong>lengthens diastole</strong>, which supports coronary perfusion."]) +
        tbl(["Group", "Examples"], [["<strong>Cardioselective (beta-1)</strong>", "<strong>Metoprolol, atenolol, bisoprolol</strong>"], ["<strong>Nonselective</strong>", "<strong>Propranolol, nadolol, timolol</strong>"], ["<strong>Plus alpha-1 blockade</strong>", "<strong>Carvedilol, labetalol</strong>"]]) +
        hy("Avoid BBs (especially nonselective) in <strong>vasospastic angina</strong>: unopposed alpha worsens spasm. Use <strong>CCBs</strong>; nitrates also help."),
        ["bh-b1", "bh-b2", "bh-moa", "bh-diastole", "bh-groups", "bh-vaso"],
        [q("Beta-1 receptors are found mainly in the:", "Heart and kidney JG cells", ["Bronchi", "Skeletal muscle only", "Liver"], "Beta-1 sits on the heart and the renin-releasing JG cells. (Slide 25)"),
          q("Blocking beta-2 receptors can cause:", "Bronchoconstriction", ["Bronchodilation", "Tachycardia", "Hyperglycemia only"], "Beta-2 stimulation opens the airways, so blocking it can tighten them. (Slide 25)"),
          q("Which is a cardioselective beta blocker?", "Metoprolol", ["Propranolol", "Nadolol", "Labetalol"], "Metoprolol, atenolol and bisoprolol preferentially block beta-1. (Slide 28)"),
          q("Which beta blocker also blocks alpha-1?", "Carvedilol", ["Atenolol", "Bisoprolol", "Nadolol"], "Carvedilol and labetalol add alpha-1 blockade, causing vasodilation. (Slide 28)"),
          q("Besides lowering demand, how can a slower HR help supply?", "It lengthens diastolic filling time", ["It raises hemoglobin", "It dilates veins", "It dissolves clots"], "Coronaries fill in diastole, so a longer diastole improves flow. (Slides 27, 29)"),
          q("Why avoid nonselective BBs in vasospastic angina?", "Unopposed alpha activity worsens spasm", ["They cause tachycardia", "They raise preload too much", "They block calcium"], "With beta-2 blocked, alpha vasoconstriction acts unopposed on the coronaries. (Slide 30)")],
        [q("A stable angina patient has HR 92 and BP 148/90 with no asthma. Good first antianginal?", "A cardioselective beta blocker such as metoprolol", ["Nifedipine short acting", "Ranolazine", "Propranolol plus verapamil"], "A BB lowers both the fast HR and high BP, cutting demand. (Slides 27 to 28)"),
          q("A patient with angina and COPD needs a beta blocker. Best choice?", "Bisoprolol", ["Propranolol", "Nadolol", "Timolol"], "Cardioselective agents spare beta-2 in the airways. (Slides 25, 28, 31)")])
    ]),

    S("08-bb-safety", "8. Beta blocker side effects and contraindications", "Objective 3 (slides 31 to 32): what to warn about and when not to use them.", [
      C("Adverse effects and contraindications",
        tbl(["Adverse effect group", "Examples"], [
          ["General", "Fatigue, dizziness, lower exercise tolerance, <strong>cold extremities</strong>, <strong>sexual dysfunction</strong>"],
          ["Cardiovascular", "<strong>Bradycardia, hypotension, AV block</strong>; may worsen <strong>acute decompensated HF</strong>"],
          ["Respiratory", "<strong>Bronchospasm</strong> (especially nonselective)"],
          ["Metabolic", "<strong>Masks hypoglycemia</strong> warning signs (tachycardia), especially with insulin or sulfonylureas"],
          ["Withdrawal", "Abrupt stop: <strong>rebound tachycardia, angina or MI</strong>; <strong>taper</strong>"]]) +
        ul(["Contraindications: <strong>severe bradycardia</strong> or symptomatic hypotension; <strong>2nd or 3rd-degree AV block without a pacer</strong>; <strong>ADHF, cardiogenic shock</strong> or low output; <strong>active bronchospasm</strong>."]),
        ["bs-general", "bs-cv", "bs-resp", "bs-hypo", "bs-withdraw", "bs-ci"],
        [q("Why must beta blockers be tapered?", "Abrupt stop can cause rebound tachycardia, angina or MI", ["They cause seizures if stopped", "They are addictive", "Stopping raises potassium"], "Receptors upregulate on a BB, so sudden withdrawal floods the heart with sympathetic effect. (Slide 31)"),
          q("Which diabetic patients are most at risk from BB masking hypoglycemia?", "Those on insulin or sulfonylureas", ["Those on diet alone", "Those on metformin alone", "Those with type 2 and no drugs"], "These drugs cause lows, and BBs hide the warning tachycardia. (Slide 31)"),
          q("Which AV block is a BB contraindication without a pacer?", "Second or third degree", ["First degree only", "None", "Any bundle branch block"], "A BB slows AV conduction further and could cause complete block. (Slide 32)"),
          q("Which group of beta blockers most often causes bronchospasm?", "Nonselective", ["Cardioselective", "Alpha blockers", "None"], "Nonselective agents block airway beta-2. (Slide 31)"),
          q("Which is a general BB side effect?", "Cold extremities", ["Hair growth", "Weight loss", "Gingival hyperplasia"], "Less cardiac output and beta-2 blockade reduce peripheral blood flow. (Slide 31)")],
        [q("A patient stops his metoprolol abruptly before a trip and has chest pain and HR 120 two days later. Why?", "Beta blocker withdrawal rebound", ["Nitrate tolerance", "Statin side effect", "Ranolazine toxicity"], "Sudden BB stop unleashes sympathetic tone on upregulated receptors. (Slide 31)"),
          q("A patient with angina is wheezing in an active asthma flare. Beta blocker?", "No, active bronchospasm is a contraindication", ["Yes, propranolol", "Yes, nadolol", "Yes, timolol"], "A BB could worsen bronchospasm. (Slide 32)")])
    ]),

    S("09-ccb", "9. Calcium channel blockers", "Objective 4 (slides 33 to 37): DHP vs non-DHP, when to use them, combining with BBs and side effects.", [
      C("DHP vs non-DHP",
        tbl(["", "DHP", "Non-DHP"], [
          ["Drugs", "<strong>Amlodipine, nifedipine</strong>", "<strong>Verapamil, diltiazem</strong>"],
          ["Acts on", "<strong>Vascular smooth muscle</strong>", "<strong>Heart</strong>"],
          ["Effect", "<strong>Arterial vasodilation</strong>, lower BP and afterload", "<strong>Slower HR</strong>, less contractility, arrhythmia control"],
          ["With a BB", "<strong>Preferred combination</strong>", "<strong>Avoid</strong>: brady, AV block, worse LV function"],
          ["Side effects", "<strong>Edema</strong>, headache, flushing, <strong>reflex tachycardia</strong> (short-acting nifedipine)", "<strong>Brady, AV block</strong>, hypotension, dizziness, fatigue, <strong>worse HFrEF</strong>, <strong>constipation (verapamil)</strong>"]]) +
        ul(["CCBs are <strong>first-line alongside BBs</strong>; use if BB or nitrates are contraindicated, not tolerated, or not enough.", "<strong>Preferred for vasospastic angina</strong>."]),
        ["cc-dhp", "cc-ndhp", "cc-when", "cc-combo", "cc-vaso", "cc-dhp-ae", "cc-ndhp-ae"],
        [q("Which CCB is preferred when combined with a beta blocker?", "Amlodipine", ["Verapamil", "Diltiazem", "None"], "A DHP does not slow the heart, so it avoids additive bradycardia and AV block. (Slide 35)"),
          q("Why avoid a BB plus verapamil?", "Excessive bradycardia, AV block and worse LV function", ["Severe hypertension", "Hyperkalemia", "Tolerance"], "Both slow the AV node and weaken contraction. (Slide 35)"),
          q("Which CCB side effect is classic for verapamil?", "Constipation", ["Diarrhea", "Hair loss", "Cough"], "Verapamil slows gut smooth muscle. (Slide 37)"),
          q("Which DHP side effect is most common?", "Peripheral edema", ["Bradycardia", "Constipation", "AV block"], "Arterial dilation raises capillary pressure, pushing fluid into the ankles. (Slide 36)"),
          q("Reflex tachycardia is most likely with:", "Short-acting nifedipine", ["Verapamil", "Diltiazem", "Amlodipine only"], "Rapid BP drop triggers a sympathetic reflex that speeds the heart. (Slide 36)"),
          q("Non-DHP CCBs act mainly on the:", "Heart", ["Veins", "Kidneys", "Bronchi"], "Verapamil and diltiazem slow HR and contractility. (Slide 34)"),
          q("Which angina type prefers CCBs over BBs?", "Vasospastic (Prinzmetal)", ["Stable exertional", "Post-MI with low EF", "Demand ischemia from anemia"], "CCBs relax coronary spasm, while BBs can worsen it. (Slide 35)")],
        [q("A patient on metoprolol still has angina. Which CCB is safest to add?", "Amlodipine", ["Verapamil", "Diltiazem", "Short-acting nifedipine"], "A long-acting DHP adds vasodilation without extra AV nodal slowing. (Slides 35 to 36)"),
          q("A patient with HFrEF (EF 30%) and angina is started on diltiazem. Concern?", "Non-DHP CCBs can worsen HFrEF", ["It causes hyperkalemia", "It causes ankle edema only", "No concern"], "Diltiazem lowers contractility, which a weak LV cannot afford. (Slide 37)"),
          q("A patient on amlodipine 10 mg has new bilateral ankle swelling with clear lungs and normal JVP. Likely cause?", "DHP CCB edema", ["Acute HF", "DVT", "Nephrotic syndrome"], "Amlodipine edema comes from arterial dilation, not volume overload. (Slide 36)")])
    ]),

    S("10-ranolazine", "10. Ranolazine", "Objective 5 (slides 38 to 41): late sodium current, add-on role, dosing, side effects and interactions.", [
      C("Ranolazine (Ranexa)",
        chain(["Blocks the <strong>late inward sodium current</strong>", "Less intracellular sodium", "<strong>Less calcium influx</strong>", "Lower wall tension and <strong>O2 demand</strong>"]) +
        ul(["Prolongs the action potential. <strong>No effect on HR or BP</strong>.", "<strong>Add-on</strong> for patients still symptomatic on a BB, CCB or long-acting nitrate.",
          "Dose: <strong>500 mg ER BID</strong>, up to <strong>1,000 mg BID</strong>. Limit to <strong>500 mg BID</strong> with <strong>diltiazem, verapamil, grapefruit or fluconazole</strong>."]) +
        tbl(["Safety", "Detail"], [
          ["Adverse effects", "Constipation, headache, nausea, dizziness, <strong>QT prolongation</strong>"],
          ["Liver", "Heavy hepatic metabolism: <strong>contraindicated in cirrhosis</strong>"],
          ["Kidney", "Monitor renal function in moderate to severe impairment"],
          ["Interactions", "<strong>Raises digoxin</strong>; <strong>simvastatin max 20 mg</strong>; <strong>avoid strong CYP3A inhibitors</strong> (ketoconazole, itraconazole, clarithromycin)"]]) +
        hy("Ranolazine is the antianginal for a patient whose <strong>HR and BP are already low</strong>."),
        ["rz-moa", "rz-hrbp", "rz-role", "rz-dose", "rz-ae", "rz-liver", "rz-ddi"],
        [q("Ranolazine works by blocking:", "The late inward sodium current", ["Beta-1 receptors", "L-type calcium channels", "COX-1"], "Less late sodium means less calcium overload and lower demand. (Slide 38)"),
          q("What does ranolazine do to HR and BP?", "Nothing; no effect on HR or BP", ["Lowers both a lot", "Raises both", "Lowers HR only"], "Its action is inside the myocyte, not on rate or vessel tone. (Slide 38)"),
          q("Which ECG effect is a ranolazine adverse effect?", "QT prolongation", ["PR shortening", "Delta wave", "ST elevation"], "Ranolazine prolongs the ventricular action potential. (Slides 38, 40)"),
          q("Ranolazine is contraindicated in:", "Liver cirrhosis", ["Hypertension", "Diabetes", "Asthma"], "It is extensively metabolized by the liver. (Slide 40)"),
          q("What is the maximum simvastatin dose with ranolazine?", "20 mg daily", ["80 mg daily", "40 mg daily", "No limit"], "Ranolazine raises simvastatin levels and myopathy risk. (Slide 41)"),
          q("With diltiazem, ranolazine is limited to:", "500 mg twice daily", ["1,000 mg twice daily", "Not allowed", "250 mg weekly"], "Diltiazem raises ranolazine levels. (Slides 39, 41)"),
          q("Which drug's levels rise with ranolazine?", "Digoxin", ["Warfarin", "Metformin", "Lisinopril"], "Ranolazine increases digoxin, so monitor and adjust. (Slide 41)"),
          q("Which drug must be avoided with ranolazine?", "Clarithromycin", ["Amoxicillin", "Acetaminophen", "Lisinopril"], "Strong CYP3A inhibitors like clarithromycin raise ranolazine to dangerous levels. (Slide 41)")],
        [q("A patient on metoprolol and amlodipine still has angina; HR 54, BP 102/64. Best add-on?", "Ranolazine", ["More metoprolol", "Verapamil", "More amlodipine"], "Ranolazine relieves angina without dropping HR or BP further. (Slides 38 to 39)"),
          q("A patient with alcoholic cirrhosis and refractory angina is being considered for ranolazine. Answer?", "Contraindicated", ["Give 1,000 mg BID", "Give 500 mg BID", "Give with grapefruit juice"], "Ranolazine relies on hepatic metabolism. (Slide 40)")])
    ]),

    S("11-acs-overview", "11. ACS drugs: the plan, nitroglycerin and oxygen", "Objective 6 (slides 44 to 48): ACS goals, which drugs are core, and NTG and O2 rules.", [
      C("ACS goals and drug groups",
        ul(["Goals: relieve pain and lower demand; <strong>restore flow</strong> and limit injury; <strong>prevent more thrombus</strong>; reduce complications and death."]) +
        tbl(["Group", "Drugs"], [
          ["<strong>Core</strong>", "<strong>Aspirin, P2Y12 inhibitor, anticoagulant</strong>; reperfusion when indicated"],
          ["<strong>Symptom-directed</strong>", "<strong>Nitroglycerin, beta blocker, oxygen</strong> when indicated"],
          ["<strong>Selected</strong>", "<strong>Opioids</strong> for pain despite anti-ischemics; <strong>fibrinolysis</strong> for STEMI without timely PCI"],
          ["<strong>Avoid routinely</strong>", "<strong>Non-aspirin NSAIDs</strong>; <strong>prophylactic antiarrhythmics</strong>"]]),
        ["ao-goals", "ao-core", "ao-symptom", "ao-select", "ao-avoid"],
        [q("Which three drugs are core ACS therapy?", "Aspirin, a P2Y12 inhibitor and an anticoagulant", ["Morphine, oxygen and nitrates", "Statin, BB and ACEi", "Lidocaine, amiodarone and digoxin"], "These three stop the clot from growing, the root of ACS. (Slide 46)"),
          q("Which drugs should be avoided routinely in ACS?", "Non-aspirin NSAIDs and prophylactic antiarrhythmics", ["Aspirin and heparin", "Statins", "P2Y12 inhibitors"], "NSAIDs raise CV events and prophylactic antiarrhythmics do not help. (Slide 46)"),
          q("Opioids in ACS are:", "Reserved for pain despite anti-ischemic therapy", ["Core therapy for all", "Forbidden in all cases", "Given before aspirin"], "Opioids are for selected refractory pain because of their risks. (Slide 46)")],
        [q("An NSTEMI patient asks for ibuprofen for his chest discomfort. Answer?", "Avoid NSAIDs; they raise cardiovascular risk", ["Give 800 mg", "Give with aspirin", "Give instead of heparin"], "Non-aspirin NSAIDs have no routine role in ACS and increase events. (Slides 46, 58)")]),
      C("Nitroglycerin and oxygen in ACS",
        ul(["NTG: <strong>SL first</strong> (often from EMS), then an <strong>IV drip</strong> if pain persists.",
          "Avoid with <strong>hypotension, suspected RV infarct, recent PDE-5 use</strong>; caution with <strong>severe AS or obstructive HCM</strong>.",
          "<strong>Oxygen only if sat &lt; 90%</strong>: no benefit from routine oxygen without hypoxia."]),
        ["ao-ntg", "ao-o2"],
        [q("Oxygen in ACS is given when saturation is below:", "90%", ["98%", "95%", "80%"], "Routine oxygen without hypoxia has shown no benefit. (Slide 48)"),
          q("In which MI is nitroglycerin avoided?", "Suspected RV infarct", ["Anterior NSTEMI with hypertension", "Lateral NSTEMI", "Unstable angina with HTN"], "The failing RV needs preload, which NTG removes. (Slide 47)")],
        [q("A STEMI patient has sat 88% on room air. Oxygen?", "Yes, because sat is under 90%", ["No, never in ACS", "Only after PCI", "Only if HR is over 120"], "Oxygen improves supply when the patient is hypoxic. (Slide 48)")])
    ]),

    S("12-bb-acs", "12. Beta blockers in ACS", "Objective 6 (slides 49 to 52): benefits, timing, goal HR, contraindications and long-term use.", [
      C("Beta blockers in ACS",
        ul(["Benefits: <strong>smaller infarct</strong>, less <strong>reinfarction</strong>, lower <strong>mortality</strong> long term, fewer <strong>VT/VF and sudden death</strong>.",
          "<strong>Oral within 24 h</strong>; <strong>cardioselective</strong> (metoprolol, atenolol) preferred. <strong>No benefit</strong> to giving it <strong>before PCI</strong> if started within 24 h.",
          "Titrate to <strong>HR 55 to 70</strong> while keeping <strong>SBP &gt; 90</strong>.",
          "Contraindications: <strong>decompensated HF</strong>, <strong>HR &lt; 55</strong>, <strong>SBP &lt; 90</strong> or shock, <strong>2nd or 3rd-degree block</strong>, <strong>active asthma or wheeze</strong>; reassess when stable.",
          "Long term: <strong>EF &lt; 50% or HF</strong>: continue; use <strong>metoprolol succinate, carvedilol or bisoprolol</strong>. <strong>Preserved EF</strong>, uncomplicated revascularized MI: no clear lifelong benefit; reassess."]),
        ["ba-benefit", "ba-timing", "ba-goal", "ba-ci", "ba-long"],
        [q("What is the HR goal when titrating a BB in ACS?", "55 to 70", ["90 to 100", "40 to 50", "Over 100"], "This range lowers demand without dangerous bradycardia. (Slide 51)"),
          q("Is there benefit to giving a BB before PCI?", "No, as long as it is started within 24 hours", ["Yes, it is required", "Yes, IV in all", "It is forbidden after PCI"], "Outcomes are the same if the oral BB starts within the first day. (Slide 50)"),
          q("Which HR is a BB contraindication in ACS?", "Under 55", ["Under 100", "Over 70", "Over 55"], "A BB would slow an already slow heart further. (Slide 51)"),
          q("For long-term use with EF under 50%, which BBs are preferred?", "Metoprolol succinate, carvedilol or bisoprolol", ["Atenolol, propranolol or nadolol", "Labetalol only", "Metoprolol tartrate only"], "These three have outcome data in reduced EF. (Slide 52)"),
          q("Beta blockers in ACS reduce:", "Lethal ventricular arrhythmias and sudden death", ["Platelet aggregation", "LDL", "Clot size directly"], "Blocking sympathetic drive stabilizes the irritable infarcting muscle. (Slide 49)")],
        [q("An NSTEMI patient has BP 86/50 and cool extremities. Start metoprolol?", "No, SBP under 90 and shock are contraindications", ["Yes, IV push", "Yes, oral 100 mg", "Yes, plus diltiazem"], "A BB would worsen hypotension and low output. (Slide 51)"),
          q("A year after a stented, uncomplicated MI with EF 60%, a patient asks if he needs metoprolol forever. Answer?", "No clear lifelong benefit; reassess the need", ["Yes, lifelong for everyone", "Switch to propranolol", "Stop all medicines"], "With preserved EF, routine lifelong BB has not shown clear benefit. (Slide 52)")])
    ]),

    S("13-acei-arb", "13. ACE inhibitors and ARBs after ACS", "Objective 6 (slides 53 to 54): who gets them, when to start and what to monitor.", [
      C("ACEi/ARB",
        ul(["Lower <strong>mortality and recurrent events</strong> after MI.", "2025 guideline: oral <strong>ACEi</strong> (or <strong>ARB</strong> if ACEi not tolerated) for <strong>LVEF &le; 40%, HF, HTN, diabetes, anterior STEMI</strong>.",
          "<strong>Modest survival benefit</strong> even in lower-risk patients.", "Start <strong>within 24 h</strong>; continue long term for high-risk or reduced EF.",
          "Monitor <strong>BP, creatinine, potassium</strong>. <strong>Never combine ACEi + ARB</strong>."]),
        ["ae-who", "ae-low", "ae-start", "ae-monitor", "ae-combo"],
        [q("Which ACS patient has a high-risk feature for an ACE inhibitor?", "Anterior STEMI", ["Inferior UA with normal EF and no other disease", "Low LDL", "Age 40"], "Anterior STEMI, low EF, HF, HTN and diabetes all call for ACEi. (Slide 53)"),
          q("When is an ACE inhibitor usually started in ACS?", "Within the first 24 hours", ["After 1 year", "Only at discharge", "Before aspirin"], "Early ACEi limits remodeling. (Slide 54)"),
          q("What is monitored after starting an ACEi?", "BP, creatinine and potassium", ["INR", "Platelets only", "LDL"], "ACEi can lower BP, reduce GFR and raise potassium. (Slide 54)"),
          q("Which combination is avoided?", "ACEi plus ARB", ["ACEi plus statin", "ARB plus aspirin", "ACEi plus BB"], "Dual RAAS blockade raises kidney injury and hyperkalemia risk. (Slide 54)"),
          q("If an ACE inhibitor causes cough, use:", "An ARB", ["A second ACEi", "Nothing ever", "Hydralazine only"], "ARBs give the same benefit without bradykinin cough. (Slide 53)")],
        [q("After NSTEMI a diabetic patient with EF 50% asks why he needs lisinopril. Reason?", "Diabetes is a high-risk feature that calls for ACEi after ACS", ["It lowers LDL", "It replaces aspirin", "It treats angina pain"], "ACEi lowers mortality and events in high-risk ACS, including diabetes. (Slide 53)")])
    ]),

    S("14-opioids-nsaids", "14. Pain control: opioids, NSAIDs and the dosing table", "Objective 6 (slides 55 to 58): when opioids are used, their risks, reversal, and NTG and opioid doses.", [
      C("Opioids and NSAIDs",
        tbl(["Drug", "Dose", "Notes"], [
          ["<strong>SL NTG</strong>", "0.3 or 0.4 mg q5 min, up to 3", "Stable patient with <strong>SBP &ge; 90</strong>"],
          ["<strong>IV NTG</strong>", "Start <strong>10 mcg/min</strong>, titrate", "Persistent pain, HTN or pulmonary edema; avoid in RV infarct, SBP &lt; 90 or drop &gt; 30 below baseline; tachyphylaxis about 24 h"],
          ["<strong>Morphine IV</strong>", "<strong>2 to 4 mg</strong> q5 to 15 min, up to 10 mg", "Pain resistant to max anti-ischemics; delays oral P2Y12"],
          ["<strong>Fentanyl IV</strong>", "<strong>25 to 50 mcg</strong>, up to 100 mcg", "Same"]]) +
        ul(["Opioids are <strong>not routine</strong> and must not <strong>mask ongoing ischemia</strong>.", "Risks: <strong>hypotension, respiratory depression</strong>, nausea, sedation; <strong>slow gastric emptying, delaying oral P2Y12</strong>.",
          "<strong>Pruritus</strong> from histamine release is <strong>not always allergy</strong>.", "Reversal: <strong>naloxone 0.4 mg IV push</strong>, kept on hand.",
          "<strong>Avoid non-aspirin NSAIDs</strong> (ibuprofen, diclofenac): more CV events."]),
        ["op-when", "op-risk", "op-itch", "op-narcan", "op-doses", "op-nsaid"],
        [q("Why can morphine weaken antiplatelet therapy in ACS?", "It slows gastric emptying and delays oral P2Y12 absorption", ["It destroys platelets", "It blocks aspirin's COX effect", "It speeds P2Y12 clearance"], "Slower gut transit delays the P2Y12 loading dose. (Slide 55)"),
          q("What is the opioid reversal dose?", "Naloxone 0.4 mg IV push", ["Flumazenil 0.2 mg", "Naloxone 40 mg", "Atropine 1 mg"], "Naloxone reverses respiratory depression. (Slide 56)"),
          q("Itching after morphine usually means:", "Histamine release, not necessarily allergy", ["Anaphylaxis", "Liver failure", "A heparin reaction"], "Opioids release histamine directly, causing itch without true allergy. (Slide 56)"),
          q("Typical IV morphine dose in ACS?", "2 to 4 mg", ["20 to 40 mg", "0.2 mg", "100 mg"], "Small doses are repeated every 5 to 15 minutes up to about 10 mg. (Slide 57)"),
          q("IV NTG in ACS starts at:", "10 mcg/min", ["100 mcg/min", "1 mg/min", "0.4 mg"], "Starting low lets you titrate to pain and BP. (Slide 57)"),
          q("Typical IV fentanyl dose in ACS?", "25 to 50 mcg", ["250 to 500 mcg", "2 to 4 mg", "1 mcg"], "Fentanyl is dosed in micrograms, up to about 100 mcg. (Slide 57)")],
        [q("Despite max NTG and metoprolol, a STEMI patient waiting for the cath lab has severe pain. Option?", "IV morphine 2 to 4 mg or fentanyl 25 to 50 mcg", ["Ibuprofen 800 mg", "Ketorolac IV", "Delay the cath until pain-free"], "Opioids are for refractory pain, and reperfusion is not delayed. (Slides 55, 57, 77)"),
          q("After morphine an ACS patient has RR 6 and is hard to wake. Treatment?", "Naloxone 0.4 mg IV push", ["More morphine", "Flumazenil", "Heparin bolus"], "Naloxone reverses opioid respiratory depression. (Slide 56)")])
    ]),

    S("15-plug-mesh-dissolve", "15. Antiplatelets vs anticoagulants vs fibrinolytics", "Objective 7 (slides 59, 71): the plug, the mesh and the dissolver.", [
      C("Three ways to fight the clot",
        tbl(["Type", "Does", "Remember", "Examples"], [
          ["<strong>Antiplatelets</strong>", "Inhibit platelet activation or aggregation", "Stop the <strong>platelet plug</strong> growing", "<strong>Aspirin, clopidogrel, ticagrelor, prasugrel</strong>"],
          ["<strong>Anticoagulants</strong>", "Inhibit clotting factors (factor X, thrombin) and fibrin formation", "Slow the <strong>fibrin mesh</strong>", "<strong>Heparin, enoxaparin, bivalirudin</strong>"],
          ["<strong>Fibrinolytics</strong>", "Break down fibrin in an <strong>existing</strong> clot", "<strong>Dissolve</strong> the mesh", "<strong>Tenecteplase, alteplase</strong>"]]) +
        hy("In ACS antiplatelets and anticoagulants are <strong>complementary</strong> and used <strong>together</strong> (aspirin + P2Y12 + heparin)."),
        ["pm-anti-plt", "pm-anticoag", "pm-lytic", "pm-together"],
        [q("Which drug is an anticoagulant?", "Bivalirudin", ["Ticagrelor", "Tenecteplase", "Aspirin"], "Bivalirudin inhibits thrombin, slowing the fibrin mesh. (Slide 59)"),
          q("Which drug dissolves an existing clot?", "Tenecteplase", ["Enoxaparin", "Clopidogrel", "Heparin"], "Fibrinolytics break down the fibrin already in the clot. (Slide 59)"),
          q("Antiplatelets target the:", "Platelet plug", ["Fibrin mesh", "Plaque cholesterol", "Coronary smooth muscle"], "Antiplatelets stop platelets from sticking and clumping. (Slides 59, 71)"),
          q("In ACS, antiplatelets and anticoagulants are:", "Used together because they are complementary", ["Never combined", "Interchangeable", "Used only after discharge"], "One blocks the plug and the other the mesh, so both parts of the clot are covered. (Slide 71)")],
        [q("Heparin is started in an NSTEMI patient already on aspirin and ticagrelor. Why add it?", "It blocks the fibrin mesh while the antiplatelets block the plug", ["It dissolves the clot", "It replaces aspirin", "It lowers heart rate"], "Anticoagulants and antiplatelets act on different parts of the clot. (Slide 71)")])
    ]),

    S("16-aspirin", "16. Aspirin", "Objective 8 (slides 60 to 63): mechanism, forms, ACS loading and long-term use.", [
      C("Aspirin",
        ul(["<strong>Irreversibly</strong> inhibits platelet <strong>COX-1</strong>: less <strong>thromboxane A2</strong>, less aggregation, for the <strong>life of the platelet</strong>.",
          "Forms: tabs <strong>81, 162, 325, 500 mg</strong>; <strong>300 mg rectal</strong> suppository.",
          "ACS: <strong>162 to 325 mg non-enteric-coated, chewed</strong>, as soon as possible; give the load <strong>even if already on daily aspirin</strong>; then <strong>81 mg daily</strong>.",
          "Aspirin + oral P2Y12 = <strong>DAPT</strong>, at least <strong>12 months</strong> if bleeding risk not high; then <strong>low-dose aspirin long term</strong>.",
          "P2Y12 class: <strong>clopidogrel and prasugrel</strong> are thienopyridines; <strong>ticagrelor</strong> is not."]),
        ["as-moa", "as-forms", "as-load", "as-daily", "as-dapt", "as-class"],
        [q("Aspirin irreversibly inhibits:", "COX-1", ["P2Y12", "Factor Xa", "Thrombin"], "Blocking COX-1 stops thromboxane A2 production. (Slide 61)"),
          q("How long does aspirin's antiplatelet effect last?", "For the life of the platelet", ["2 hours", "24 hours exactly", "Until the next meal"], "Platelets have no nucleus and cannot make new COX-1. (Slide 61)"),
          q("ACS aspirin load is:", "162 to 325 mg non-enteric-coated, chewed", ["81 mg enteric coated swallowed", "1 g IV", "650 mg every 4 hours"], "Chewing uncoated aspirin gives the fastest effect. (Slide 62)"),
          q("Which rectal aspirin dose is available?", "300 mg", ["81 mg", "1,000 mg", "10 mg"], "A 300 mg suppository is used when the patient cannot swallow. (Slide 61)"),
          q("Which P2Y12 inhibitor is NOT a thienopyridine?", "Ticagrelor", ["Clopidogrel", "Prasugrel", "Ticlopidine"], "Ticagrelor is a non-thienopyridine. (Slide 60)")],
        [q("A patient already taking aspirin 81 mg daily presents with NSTEMI. Aspirin plan?", "Give a 162 to 325 mg chewed load anyway", ["No aspirin needed", "Stop aspirin", "Give enteric-coated 81 mg only"], "The load is given even if the patient takes daily aspirin. (Slide 62)"),
          q("Thirteen months after a stented ACS with no bleeding problems, what antiplatelet usually continues?", "Low-dose aspirin long term", ["Nothing", "Warfarin", "Prasugrel 60 mg daily"], "After at least 12 months of DAPT, low-dose aspirin is continued long term. (Slide 63)")])
    ]),

    S("17-p2y12", "17. P2Y12 inhibitors", "Objective 8 (slides 64 to 70): clopidogrel, prasugrel and ticagrelor, and which to pick.", [
      C("The three P2Y12 inhibitors",
        tbl(["", "Clopidogrel (Plavix)", "Prasugrel (Effient)", "Ticagrelor (Brilinta)"], [
          ["Use", "ACS, CAD, <strong>stroke, PAD</strong>", "<strong>ACS with PCI</strong>", "ACS with <strong>PCI or medical</strong> therapy"],
          ["Load", "<strong>300 to 600 mg</strong>", "<strong>60 mg</strong>", "<strong>180 mg</strong>"],
          ["Maintenance", "<strong>75 mg daily</strong>", "<strong>10 mg daily</strong> (5 mg if &lt; 60 kg)", "<strong>90 mg BID</strong> for 12 months"],
          ["Watch for", "Rare <strong>TTP</strong>", "<strong>Bleeding</strong>; <strong>contraindicated with prior stroke/TIA</strong>; avoid at <strong>&ge; 75</strong>; TTP", "Bleeding, <strong>hyperuricemia/gout</strong>, <strong>dyspnea</strong>"]]) +
        ul(["Ticagrelor: keep <strong>aspirin 75 to 100 mg</strong> (usually 81); <strong>&gt; 100 mg lowers ticagrelor's effect</strong>. Tablets <strong>can be crushed</strong>. Rule out HF or ischemia before blaming dyspnea on it.",
          "TTP clues: fever, weakness, low platelets, renal dysfunction, neuro changes."]),
        ["py-clop", "py-pras", "py-tica", "py-tica-asa", "py-ttp"],
        [q("Prasugrel is contraindicated with a history of:", "Stroke or TIA", ["Gout", "Asthma", "Diabetes"], "Prasugrel's strong effect raises intracranial bleeding after prior stroke. (Slide 67)"),
          q("Ticagrelor maintenance dose?", "90 mg twice daily", ["75 mg daily", "10 mg daily", "180 mg daily"], "Ticagrelor is short acting, so it is given twice daily. (Slide 68)"),
          q("Which P2Y12 inhibitor can cause hyperuricemia and gout?", "Ticagrelor", ["Clopidogrel", "Prasugrel", "Aspirin"], "Ticagrelor raises serum uric acid. (Slide 69)"),
          q("Why keep aspirin at 100 mg or less with ticagrelor?", "Higher aspirin doses reduce ticagrelor's effect", ["Higher doses cause gout", "Higher doses cause TTP", "Ticagrelor raises aspirin levels"], "Trials showed aspirin over 100 mg weakened ticagrelor's benefit. (Slide 70)"),
          q("Clopidogrel loading dose in ACS?", "300 to 600 mg", ["60 mg", "180 mg", "75 mg"], "A large load reaches platelet inhibition quickly. (Slide 65)"),
          q("Prasugrel maintenance is lowered to 5 mg daily for patients:", "Under 60 kg", ["Over 100 kg", "With gout", "On dialysis only"], "Low body weight raises prasugrel levels and bleeding. (Slide 66)"),
          q("Which rare adverse effect is shared by clopidogrel and prasugrel?", "TTP", ["Gout", "Dyspnea", "Cough"], "Thienopyridines can rarely cause thrombotic thrombocytopenic purpura. (Slides 65, 67)"),
          q("Which P2Y12 inhibitor is also used for stroke and PAD?", "Clopidogrel", ["Prasugrel", "Ticagrelor", "None"], "Clopidogrel is used for secondary prevention after ischemic stroke and in symptomatic PAD. (Slide 65)")],
        [q("A 78-year-old with a prior TIA is going for PCI for NSTEMI. Which P2Y12 should be avoided?", "Prasugrel", ["Ticagrelor", "Clopidogrel", "None"], "Prior TIA and age 75 or older both argue against prasugrel. (Slide 67)"),
          q("On ticagrelor a patient has new mild dyspnea. First step?", "Evaluate for HF or recurrent ischemia before blaming ticagrelor", ["Stop all antiplatelets", "Add prasugrel", "Double the dose"], "Dyspnea is a known effect, but serious causes must be ruled out first. (Slide 69)"),
          q("An intubated ACS patient cannot swallow. Which P2Y12 tablets can be crushed in water?", "Ticagrelor", ["None", "Only enteric aspirin", "Only patches"], "Ticagrelor tablets may be crushed and mixed with water. (Slide 70)")]),
      C("Picking the P2Y12 (2025 ACC/AHA)",
        tbl(["Situation", "Choice", "Alternative"], [
          ["<strong>PCI</strong> (NSTE-ACS or STEMI)", "Aspirin + <strong>ticagrelor or prasugrel</strong>", "Clopidogrel if those cannot be used"],
          ["<strong>CABG</strong>", "Aspirin + <strong>ticagrelor or clopidogrel</strong>", "Continue aspirin; start P2Y12 when safe after surgery"],
          ["<strong>No planned invasive</strong> evaluation", "Aspirin + <strong>ticagrelor</strong>", "Clopidogrel if ticagrelor not possible"],
          ["<strong>Fibrinolytic</strong> for STEMI", "Aspirin + <strong>clopidogrel</strong>", "Another P2Y12 may be considered at PCI"]]),
        ["py-pick"],
        [q("Which P2Y12 goes with fibrinolytics for STEMI?", "Clopidogrel", ["Prasugrel", "Ticagrelor", "None"], "Clopidogrel is the P2Y12 studied with fibrinolysis, so it has the guideline Class 1 spot. (Slide 64)"),
          q("Which P2Y12 is first choice when no invasive evaluation is planned?", "Ticagrelor", ["Prasugrel", "Clopidogrel only", "None"], "Prasugrel is only for PCI, and ticagrelor outperforms clopidogrel in medical ACS. (Slides 64, 66, 68)")],
        [q("A 60-year-old STEMI patient gets alteplase at a rural hospital. Which P2Y12 with aspirin?", "Clopidogrel", ["Prasugrel", "Ticagrelor", "No P2Y12"], "Aspirin plus clopidogrel is the regimen with fibrinolytic therapy. (Slide 64)")])
    ]),

    S("18-anticoagulants", "18. Anticoagulants in ACS", "Objective 9 (slides 72 to 74): UFH vs enoxaparin, when to start, and choosing by reperfusion plan.", [
      C("Heparin and enoxaparin",
        ul(["Anticoagulation prevents <strong>thrombus propagation</strong> and recurrent coronary thrombosis.",
          "<strong>UFH</strong>: IV drip titrated to <strong>PTT or anti-Xa</strong>. <strong>Enoxaparin (Lovenox)</strong>: <strong>1 mg/kg SQ q12 h</strong>.",
          "Start <strong>in the ER</strong> as soon as the MI is identified, for <strong>NSTEMI and STEMI</strong>.",
          "<strong>Enoxaparin only if no LHC</strong> is expected; <strong>UFH preferred</strong> when LHC is planned."]) +
        tbl(["STEMI reperfusion plan", "Anticoagulant"], [["<strong>PCI</strong>", "<strong>UFH or bivalirudin</strong> (bivalirudin if prior HIT)"], ["<strong>Fibrinolysis</strong>, then PCI likely", "<strong>UFH</strong>"], ["Fibrinolysis, PCI not likely", "<strong>Enoxaparin or fondaparinux</strong>"], ["<strong>No reperfusion</strong>", "<strong>UFH or enoxaparin</strong>"]]),
        ["ac-role", "ac-doses", "ac-start", "ac-choice", "ac-stemi"],
        [q("When should anticoagulation start in ACS?", "In the ER as soon as the MI is identified", ["After discharge", "Only after the cath", "After 48 hours"], "Early anticoagulation stops the clot from growing. (Slide 73)"),
          q("Which anticoagulant is preferred when LHC is planned?", "Unfractionated heparin drip", ["Enoxaparin", "Warfarin", "Fondaparinux"], "UFH is easily titrated and stopped around the cath. (Slide 73)"),
          q("Enoxaparin treatment dose for ACS?", "1 mg/kg SQ every 12 hours", ["40 mg SQ daily", "1 mg/kg IV hourly", "5,000 units SQ q8h"], "Therapeutic enoxaparin is weight-based every 12 hours. (Slide 72)"),
          q("A STEMI patient going to primary PCI has a history of HIT. Anticoagulant?", "Bivalirudin", ["UFH", "Enoxaparin", "No anticoagulant"], "Bivalirudin is a direct thrombin inhibitor safe in HIT. (Slide 74)"),
          q("What does anticoagulation prevent in ACS?", "Thrombus propagation and recurrent coronary thrombosis", ["Plaque formation over years", "Arrhythmias directly", "Pain"], "Anticoagulants stop the existing clot from extending. (Slide 72)")],
        [q("An NSTEMI patient is managed medically with no LHC planned. Anticoagulant?", "Enoxaparin 1 mg/kg SQ every 12 hours", ["UFH drip for cath", "Alteplase", "No anticoagulant"], "Enoxaparin is used when no cath is expected. (Slide 73)"),
          q("A STEMI patient receives lytics and PCI afterward is likely. Anticoagulant?", "UFH", ["Enoxaparin", "Fondaparinux", "None"], "If angiography with PCI is likely after lytics, UFH is the choice. (Slide 74)")])
    ]),

    S("19-strategy-pci-cabg", "19. Invasive vs selective strategy, PCI and CABG", "Objectives 7 and 9 (slides 75 to 80): who goes to cath, PCI precautions and CABG grafts.", [
      C("Invasive vs selective strategy",
        ul(["<strong>Invasive</strong>: angiography with revascularization when appropriate. <strong>Selective</strong>: medical treatment first, angiography if ischemia recurs or instability develops.",
          "Decide on <strong>overall risk and clinical context</strong>, not one score.",
          "Selective care: anti-ischemic and antithrombotic therapy; monitor symptoms, ECG, hemodynamics; <strong>echo</strong> when indicated; reconsider angiography if symptoms recur.",
          "Invasive or STEMI: call cardiology promptly; <strong>do not delay reperfusion to relieve pain</strong> or finish meds; STEMI: activate the cath lab.",
          "<strong>Unstable NSTEMI</strong> (refractory ischemia, instability, life-threatening arrhythmia): <strong>urgent invasive</strong>. Stable NSTEMI: timing by overall risk. <strong>NPO tied to planned procedures</strong>."]),
        ["sp-inv", "sp-risk", "sp-sel", "sp-nodelay", "sp-unstable"],
        [q("The choice between invasive and selective strategy is based on:", "Overall risk and clinical context, not one score", ["The TIMI score alone", "Age alone", "Patient's insurance"], "No single score captures every patient, so judgment uses the whole picture. (Slide 75)"),
          q("Should reperfusion be delayed until the pain is controlled?", "No, never delay reperfusion for pain relief", ["Yes, always", "Only in STEMI", "Only at night"], "Opening the artery is what ends the ischemia. (Slide 77)"),
          q("An unstable NSTEMI needs:", "Urgent invasive evaluation", ["A stress test next week", "Selective strategy", "Discharge"], "Refractory ischemia or instability means the artery must be seen now. (Slide 78)")],
        [q("A STEMI patient still has pain while the cath lab is activated; the nurse wants to finish the NTG titration first. Best action?", "Go to the cath lab without delay", ["Wait until pain-free", "Give lytics too", "Finish all meds first"], "Reperfusion must not be delayed to complete medications or relieve pain. (Slide 77)")]),
      C("PCI precautions and CABG",
        ul(["PCI indications in ACS: <strong>STEMI (door-to-PCI &lt; 90 min)</strong> and <strong>high-risk NSTEMI</strong>; needs a <strong>PCI-capable facility</strong>.",
          "Contrast: <strong>anaphylactoid</strong> reactions: <strong>pretreat with steroid or antihistamine</strong> if a concern.",
          "Kidneys: <strong>prehydrate with IV normal saline</strong>, consider <strong>N-acetylcysteine PO BID x 4</strong>, <strong>hold metformin 48 h before and after</strong>, hold other nephrotoxins.",
          "<strong>CABG</strong> grafts: <strong>internal mammary artery</strong>, <strong>radial artery</strong>, <strong>saphenous vein</strong> bypass around the blockage."]),
        ["sp-pci-ind", "sp-contrast", "sp-renal", "sp-cabg"],
        [q("How long is metformin held around a cath?", "48 hours before and after", ["1 week before only", "Not held", "1 hour"], "Contrast can impair kidney function, and metformin then risks lactic acidosis. (Slide 79)"),
          q("What is key to preventing contrast kidney injury?", "Prehydration with IV normal saline", ["Furosemide before", "NSAIDs", "Fluid restriction"], "Volume expansion dilutes contrast and keeps renal flow up. (Slide 79)"),
          q("A patient with a prior contrast reaction needs cath. Pretreat with:", "A steroid or antihistamine", ["Aspirin", "Metformin", "Nothing"], "Pretreatment blunts anaphylactoid reactions to contrast. (Slide 79)"),
          q("Which vessel is used as a CABG graft?", "Internal mammary artery", ["Carotid artery", "Femoral vein only", "Pulmonary artery"], "Internal mammary, radial artery and saphenous vein grafts bypass blockages. (Slide 80)")],
        [q("A diabetic on metformin with creatinine 1.4 is scheduled for LHC. Kidney plan?", "IV saline prehydration, consider NAC, hold metformin 48 hours before and after", ["Give ibuprofen", "Restrict fluids", "Double metformin"], "These steps protect the kidneys from contrast injury. (Slide 79)")])
    ]),

    S("20-lytics-extras", "20. Fibrinolytics and final ACS points", "Objective 9 (slides 81 to 84): alteplase, the reperfusion flowchart, lytic contraindications, arrhythmia prevention and statins.", [
      C("Alteplase (tPA)",
        ul(["Activates <strong>plasminogen to plasmin</strong>, which <strong>breaks down fibrin</strong>.", "Limits infarct size, improves LV function, lowers mortality, but is <strong>far inferior to PCI</strong>: used only when PCI cannot be done.",
          "<strong>STEMI only</strong>, within <strong>12 hours</strong> of pain onset, when invasive strategy is not an option.",
          "After lytics: <strong>UFH, LMWH or fondaparinux for at least 48 h, up to 8 days</strong> to stop new small clots as the clot lyses."]) +
        tbl(["Flowchart: symptoms", "Action"], [["<strong>&le; 12 h</strong>, PCI within 120 min of first contact (or &lt; 150 min in shock)", "<strong>Immediate PCI</strong>; quality goal PCI within 90 min of ED arrival"], ["&le; 12 h, PCI not possible, lytic eligible", "<strong>Lytic</strong> (door-to-needle &lt; 30 min), then transfer for angiography <strong>within 24 h</strong>"], ["&le; 12 h, not lytic eligible", "PCI as soon as possible"], ["<strong>12 to 48 h</strong> with ongoing ischemia", "PCI as soon as possible"], ["12 to 48 h, no ongoing ischemia", "Nonurgent PCI if available, or no reperfusion"], ["<strong>&gt; 48 h</strong>", "Individualized"]]) +
        ul(["Major lytic contraindications: prior <strong>intracranial hemorrhage</strong>, cerebrovascular malformation or intracranial malignancy; <strong>ischemic stroke within 3 months</strong> (but not within 3 hours); <strong>aortic dissection</strong>; <strong>active bleeding</strong>; significant closed-head or facial trauma within 3 months."]),
        ["ly-moa", "ly-role", "ly-when", "ly-after", "ly-flow", "ly-ci"],
        [q("Alteplase works by:", "Converting plasminogen to plasmin to break down fibrin", ["Blocking COX-1", "Blocking P2Y12", "Inhibiting thrombin"], "Plasmin digests the fibrin mesh of the existing clot. (Slide 81)"),
          q("Alteplase is used for which ACS type?", "STEMI only", ["UA", "NSTEMI", "All ACS"], "Lytics help only when an artery is fully occluded; they do not help NSTE-ACS. (Slide 81)"),
          q("After a fibrinolytic, anticoagulation continues for:", "At least 48 hours, up to 8 days", ["1 hour", "6 months", "Not needed"], "It prevents small new clots as the main clot dissolves. (Slide 83)"),
          q("Which is a major contraindication to fibrinolysis?", "Active bleeding", ["Age over 60", "Hypertension controlled", "Prior PCI"], "Lytics would make active bleeding uncontrollable. (Slide 82)"),
          q("After lytics, angiography should happen within:", "24 hours", ["7 days", "1 hour mandatory", "Never"], "The flowchart pairs lytics with transfer for angiography within 24 hours. (Slide 82)"),
          q("STEMI symptoms began 30 hours ago and ischemia is ongoing. Flowchart action?", "Perform PCI as soon as possible", ["Give alteplase", "No reperfusion", "Discharge"], "Ongoing ischemia at 12 to 48 hours still warrants PCI. (Slide 82)")],
        [q("A STEMI patient 3 hours from PCI had an ischemic stroke 6 weeks ago. Lytics?", "No, ischemic stroke within 3 months is a contraindication", ["Yes, full dose", "Yes, half dose", "Yes, with prasugrel"], "Recent ischemic stroke raises the risk of hemorrhagic conversion. (Slide 82)"),
          q("A STEMI patient in a rural ED has pain for 2 hours; PCI is 3 hours away; no contraindications. Plan?", "Alteplase with door-to-needle under 30 minutes, then transfer", ["Drive 3 hours for PCI", "Medical therapy only", "Wait 12 hours"], "When PCI cannot be done in time, lytics restore flow faster. (Slides 82 to 83)")]),
      C("Arrhythmia prevention and statins",
        ul(["<strong>No prophylactic lidocaine</strong> or other antiarrhythmics to prevent VT/VF.", "Correct <strong>hypokalemia and hypomagnesemia</strong>.",
          "<strong>High-intensity statin</strong> for every ACS patient <strong>regardless of baseline LDL</strong>, unless contraindicated."]),
        ["ly-lido", "ly-lytes", "ly-statin"],
        [q("Should lidocaine be given to prevent VF after MI?", "No, prophylactic antiarrhythmics are not used", ["Yes, to everyone", "Yes, for 48 hours", "Only after lytics"], "Prophylactic antiarrhythmics do not improve outcomes. (Slide 84)"),
          q("Which electrolytes are corrected to lower arrhythmia risk after MI?", "Potassium and magnesium", ["Sodium and calcium", "Phosphate only", "Chloride only"], "Low K and Mg make the injured heart more prone to VT/VF. (Slide 84)"),
          q("When is a high-intensity statin started in ACS?", "In all ACS patients, regardless of LDL", ["Only if LDL is over 190", "Only after 3 months", "Only in diabetics"], "Statins stabilize plaque, so the benefit does not depend on baseline LDL. (Slide 84)")],
        [q("An NSTEMI patient's LDL is 68. Should he get atorvastatin 80 mg?", "Yes, high-intensity statin regardless of LDL", ["No, LDL is already low", "Only a low dose", "Only if he smokes"], "Every ACS patient gets a high-intensity statin unless contraindicated. (Slide 84)")])
    ]),
  ];
})();
