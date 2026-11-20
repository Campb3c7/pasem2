/* Cardio Part 3 Tiers: CAD Part I (Stager's foundations deck), all three tiers, in story format.
   Anna (2026-11-20): the Learn side should read like the "Learn it from zero" paths (a story, one idea per page,
   a picture on every page), not a chart of text; Learn and Questions are separate.
   Chunk: { id, title, goal, pages: [{ title, fig, html }], remember: [...], check: [Q], bank: [Q] }.
   Figures: cardio3-learn.js kit + tiers-figures.js. Facts follow source-material/cardio-part-3/text/cad-part-1.md;
   anything not on the slides is marked "(standard teaching)".
   Chunk ids are progress keys and question order is too: never rename a chunk, only append questions.
   Loaded after data/tiers-cardio-part-3.js. */
(function () {
  "use strict";
  var T = window.CARDIO3_TIERS;
  if (!T) return;
  function Q(prompt, answer, wrong, why) { return { prompt: prompt, answer: answer, wrong: wrong, why: why }; }
  function hy(x) { return '<div class="box-hy"><span class="lbl">Key idea</span>' + x + "</div>"; }
  function pic(x) { return '<div class="box-mnemonic"><span class="lbl">Picture it</span>' + x + "</div>"; }
  function mn(x) { return '<div class="box-mnemonic"><span class="lbl">Memory hook</span>' + x + "</div>"; }

  /* =============================== TIER 1 · FOUNDATIONS =============================== */
  T.units["t1|cad-part-1"] = { chunks: [
    { id: "words", title: "The words: CAD, ASCVD, IHD", goal: "Atherosclerosis is the process, ASCVD the family, CAD the heart's member, IHD the result.",
      pages: [
        { title: "One process, four places", fig: { type: "tiles", items: [["❤️", "Coronary", "CAD"], ["🧠", "Cerebral", "cerebrovascular disease"], ["🦵", "Peripheral", "PAD"], ["🫀", "Aortic", "aortic atherosclerotic disease"]] },
          html: "<p>Picture fat and inflammation slowly building a lump inside an artery wall. That process is <strong>atherosclerosis</strong>, and the lump is a <strong>plaque</strong>.</p>" +
            "<p>It doesn't care which artery it's in. Wherever it happens, the family of diseases it causes is called <strong>ASCVD</strong>: atherosclerotic cardiovascular disease.</p>" +
            "<p><strong>CAD</strong> is just the member of that family that lives in the heart's own arteries, the coronaries. Its other name is <strong>ASHD</strong>, atherosclerotic heart disease.</p>" +
            mn("Process → family → member: atherosclerosis → ASCVD → CAD.") },
        { title: "CAD is the pipe, IHD is the muscle", fig: { type: "flow", steps: ["CAD<br><small>a narrowed coronary</small>", "O₂ supply &lt; demand", "IHD<br><small>ischemic heart disease</small>"], hi: 2 },
          html: "<p>CAD describes the <strong>pipe</strong>: plaque in a coronary artery. <strong>IHD</strong> describes what the <strong>muscle</strong> feels: it gets less oxygen than it needs.</p>" +
            "<p>A blocked pipe is the usual reason the muscle goes hungry, but not the only one.</p>" +
            hy("CAD can cause IHD, but ischemia can happen <strong>without</strong> obstructive CAD, for example from vasospasm or an embolus.") +
            "<p>And <strong>CVD</strong> is the widest bucket of all: any heart or blood vessel disease, even one that has nothing to do with plaque.</p>" },
        { title: "Two ways CAD shows up", fig: { type: "acs" },
          html: "<p>Once CAD causes symptoms, it takes one of two roads:</p>" +
            "<ul><li><strong>Stable angina</strong>: predictable chest pain with exertion that settles with rest.</li>" +
            "<li><strong>Acute coronary syndrome (ACS)</strong>: something sudden. That's <strong>unstable angina</strong>, <strong>NSTEMI</strong> or <strong>STEMI</strong>, the three pictures above.</li></ul>" +
            "<p>Which road a patient takes depends on what kind of plaque they have. That's the story of the next chunks.</p>" }
      ],
      remember: ["Atherosclerosis (process) → ASCVD (any artery) → CAD (coronary arteries, also called ASHD).", "IHD = O₂ supply &lt; demand. Usually CAD, but spasm or emboli can do it too.", "Symptomatic CAD = stable angina or ACS (unstable angina, NSTEMI, STEMI)."],
      check: [
        Q("Which term means the heart muscle's oxygen supply falls short of its demand?", "Ischemic heart disease (IHD)", ["Coronary artery disease (CAD)", "ASCVD", "Atherosclerosis"], "IHD names the supply-demand mismatch itself, whatever caused it."),
        Q("A patient has atherosclerosis in the carotids and femoral arteries but clean coronaries. Which term fits?", "ASCVD", ["CAD", "ASHD", "IHD"], "ASCVD covers atherosclerosis in any arterial territory, not only the coronaries."),
        Q("Which of these is NOT an acute coronary syndrome?", "Stable angina", ["Unstable angina", "NSTEMI", "STEMI"], "Stable angina is the chronic, exertional form; ACS is UA, NSTEMI and STEMI.")
      ],
      bank: [
        Q("Can a patient have myocardial ischemia without obstructive CAD?", "Yes, for example from vasospasm or emboli", ["No, ischemia always means a fixed coronary stenosis", "Only in women", "Only after CABG"], "Ischemia is a supply-demand problem, and spasm or emboli can cut supply without plaque.")
      ] },

    { id: "supply", title: "Supply vs demand", goal: "The heart feeds itself in diastole, and exercise raises demand while shrinking diastole.",
      pages: [
        { title: "The needy heart", fig: { type: "tiles", items: [["⚖️", "0.3%", "of your body weight"], ["🫁", "7%", "of the oxygen you use at rest"], ["🧹", "Takes out the trash", "CO₂, lactic acid, H⁺"]] },
          html: "<p>The heart is tiny but greedy: <strong>0.3%</strong> of body weight using <strong>7%</strong> of resting oxygen, and it never gets a day off.</p>" +
            "<p>Its coronary blood flow does two jobs: brings oxygen in and carries waste (CO₂, lactic acid, H⁺) out. Any shortfall shows up fast.</p>" },
        { title: "It fills its own pipes between beats", fig: { type: "diastole" },
          html: "<p>Here's the twist: the heart can't feed itself while it squeezes. During <strong>systole</strong> the contracting muscle pinches its own small arteries shut. So coronary flow happens mostly in <strong>diastole</strong>.</p>" +
            "<p><strong>Drag the heart rate up.</strong> Watch systole barely change while diastole gets crushed. A fast heart has less time to fill its own arteries.</p>" +
            pic("Trying to drink from a straw while someone keeps squeezing it. You only get a sip in the pauses.") },
        { title: "Exercise tips the scale", fig: { type: "balance", tip: "demand", supply: ["narrowed artery", "can't open further"], demand: ["↑ heart rate", "↑ contractility"] },
          html: "<p>When you exercise, heart rate and contractility rise, so <strong>demand goes up</strong>. A healthy coronary answers by <strong>dilating</strong> to bring more blood.</p>" +
            "<p>A coronary narrowed by plaque is already as open as it can get. Supply can't rise, demand keeps rising, and the scale tips: <strong>ischemia</strong>, which the patient feels as <strong>angina</strong>.</p>" +
            hy("A fast heart rate hurts twice: more demand AND less diastole to fill the coronaries.") }
      ],
      remember: ["Coronary flow happens mostly in diastole; systole squeezes the vessels shut.", "↑ HR → ↑ demand and ↓ diastolic filling time: a double hit.", "Normal arteries dilate to meet demand; a narrowed one can't, so supply &lt; demand = ischemia = angina."],
      check: [
        Q("When does most blood flow into the myocardium?", "Diastole", ["Systole", "Isovolumetric contraction", "Equally in systole and diastole"], "Contracting muscle squeezes the intramyocardial vessels shut in systole."),
        Q("Heart rate rises from 70 to 140 during exercise. What happens to coronary filling time per beat?", "It falls, because diastole shortens", ["It rises, because diastole lengthens", "It doesn't change", "It rises, because systole shortens"], "Faster rates eat mostly into diastole, which is when the coronaries fill."),
        Q("Why does a patient with a fixed 70% stenosis get angina only with exertion?", "The narrowed artery can't dilate enough to meet the higher demand", ["The plaque ruptures each time they exercise", "Exercise causes coronary vasospasm", "Resting flow is already zero in that artery"], "At rest flow is enough; with exertion demand rises but the stenosed artery can't add supply.")
      ],
      bank: [
        Q("Which change raises myocardial oxygen demand?", "Higher heart rate and contractility", ["Longer diastole", "Lower heart rate", "Coronary vasodilation"], "The heart burns more oxygen the faster and harder it beats.")
      ] },

    { id: "two-plaques", title: "Young plaque vs old plaque", goal: "Young thin-capped plaques rupture and cause ACS; old thick-capped plaques narrow and cause angina.",
      pages: [
        { title: "Meet Arthur and Zeke", fig: { type: "tiles", items: [["🏃", "Arthur, 34", "loves fast food, runs 3 miles a day. Suddenly: chest pain, acute MI."], ["👴", "Zeke, 90", "lifelong dairy farmer, no \"rabbit food\". Chest tightness that slows his chores."]] },
          html: "<p>Two men from the slides, both with CAD. One has a heart attack out of nowhere at 34. The other has had slowly worsening chest tightness at 90.</p>" +
            "<p>What's different isn't how much plaque they have. It's <strong>how old the plaque is</strong>.</p>" },
        { title: "Two plaques, side by side", fig: { type: "capcore" },
          html: "<p><strong>A young plaque</strong> has a <strong>thin cap</strong> over a <strong>big, inflamed lipid core</strong>. It's still rebuilding its cap, so the cap is weak. It doesn't block much, so it causes no symptoms… until it tears.</p>" +
            "<p><strong>An old plaque</strong> has cooled down. Its cap has thickened with collagen, there's little lipid and little inflammation. It rarely tears, but it has grown into the lumen and <strong>narrows</strong> it.</p>" +
            hy("Young = vulnerable: thin cap, big core, ruptures. Old = stable: thick cap, small core, narrows.") },
        { title: "When a young plaque breaks", fig: [{ type: "artery", stage: "rupture" }, { type: "artery", stage: "clot" }],
          html: "<p>Under stress, the thin cap <strong>fissures</strong>. The core underneath is sticky and pro-clotting, and now it's touching blood.</p>" +
            "<p>Platelets pile on, the coagulation cascade fires, and a <strong>thrombus</strong> forms right there. Flow drops or stops in minutes: that's <strong>ACS</strong>, unstable angina, NSTEMI or STEMI.</p>" +
            "<p>A small plaque that wasn't causing any real stenosis can do this. That's Arthur: no warning angina at all.</p>" },
        { title: "What an old plaque does instead", fig: { type: "artery", stage: "plaque" },
          html: "<p>The old, stable plaque just sits there making the lumen smaller. At rest there's enough flow. With exertion there isn't.</p>" +
            "<p>So symptoms come <strong>with exertion first</strong> (exertional angina, or claudication in the legs), and only later at rest as the plaque keeps growing. That's Zeke.</p>" +
            mn("Arthur = rupture = ACS. Zeke = stenosis = stable angina.") }
      ],
      remember: ["Vulnerable (young): thin cap, large lipid core, lots of inflammation → ruptures → clot → ACS.", "Stable (old): thick collagen cap, little lipid → narrows the lumen → exertional angina, claudication.", "Rupture can come from a small, non-obstructive plaque, with no warning angina.", "Chronic narrowing: symptoms with exertion first, then at rest."],
      check: [
        Q("Which plaque is most likely to rupture and cause an MI?", "Thin fibrous cap with a large lipid core", ["Thick fibrous cap with little lipid", "Old plaque with lots of collagen", "Plaque causing a 90% stable stenosis"], "Thin caps over big inflamed lipid pools tear, exposing clot-forming material."),
        Q("A 35-year-old with no prior symptoms has a sudden STEMI. What most likely happened in his artery?", "A small, young plaque ruptured and a clot formed", ["A slowly growing plaque finally closed the lumen", "A thick-capped plaque calcified", "A stable plaque eroded over years"], "Young plaques don't narrow much but rupture suddenly, so ACS comes with no warning."),
        Q("Old plaques with thick fibrous caps usually cause which presentation?", "Exertional angina", ["STEMI", "Sudden cardiac death without warning", "Unstable angina at rest"], "Thick-capped plaques rarely rupture but narrow the lumen, limiting flow during exertion.")
      ],
      bank: [
        Q("How does acute CAD (plaque rupture) differ from chronic CAD in its symptoms?", "It starts abruptly, with no warning angina", ["It starts with exertion and later occurs at rest", "It causes only claudication", "It is always painless"], "Rupture and clot block flow all at once, unlike a plaque that grows slowly.")
      ] },

    { id: "symptoms", title: "What ischemia feels like", goal: "Classic angina is a dull substernal pressure that spreads to the left arm; women often feel something else.",
      pages: [
        { title: "Classic angina", fig: { type: "painmap" },
          html: "<p>The textbook patient points to the middle of the chest: <strong>substernal</strong>, <strong>tight, dull, achy</strong>. It classically spreads to the <strong>left shoulder and upper arm</strong> and lasts <strong>minutes to hours</strong>.</p>" +
            "<p>What it does NOT do: get worse with a <strong>deep breath</strong> or when you <strong>press on the sternum</strong>. Pain you can reproduce by pushing points away from the heart.</p>" },
        { title: "The company it keeps", fig: { type: "tiles", items: [["😮‍💨", "Dyspnea", "worse with exertion"], ["🤢", "Nausea", ""], ["💫", "Dizziness", "lightheadedness"], ["💦", "Diaphoresis", "sweating"]] },
          html: "<p>Chest pain rarely comes alone. Look for shortness of breath with exertion, nausea, lightheadedness and sweating.</p>" +
            "<p>Remember the two timelines: slow narrowing gives symptoms with exertion first, then at rest. Rupture gives symptoms <strong>abruptly</strong>, with no warning.</p>" },
        { title: "Women often feel it differently", fig: { type: "painmap", mode: "women" },
          html: "<p>Women report their ischemia symptoms, but clinicians are <strong>less likely to recognize them</strong>.</p>" +
            "<p>In a study of 515 women who had an MI, the most common symptoms were <strong>unusual fatigue</strong>, sleep trouble, shortness of breath, indigestion and anxiety. <strong>78%</strong> had a symptom for over a month beforehand, and only <strong>30%</strong> had chest discomfort.</p>" +
            hy("A woman with weeks of unusual fatigue and shortness of breath: think heart, even with no chest pain.") }
      ],
      remember: ["Classic: substernal, tight, dull, achy; spreads to the left shoulder/upper arm; minutes to hours.", "Not worse with deep breaths or sternal pressure.", "Also: exertional dyspnea, nausea, lightheadedness, diaphoresis.", "Women: unusual fatigue most common; only 30% had chest discomfort; 78% had a symptom > 1 month before."],
      check: [
        Q("Which feature argues AGAINST cardiac chest pain?", "It gets worse when you press on the sternum", ["It is substernal and tight", "It spreads to the left arm", "It comes with sweating"], "Ischemic pain doesn't change with palpation or breathing; reproducible pain points to the chest wall."),
        Q("A 58-year-old woman has weeks of unusual fatigue, poor sleep and indigestion. What should you keep in mind?", "These can be ischemia symptoms in women", ["Women's MI symptoms are the same as men's", "Without chest pain, ischemia is ruled out", "These symptoms only matter after age 80"], "Most women in the study had these vague symptoms and only 30% had chest discomfort."),
        Q("What was the most common symptom women reported before their MI?", "Unusual fatigue", ["Crushing chest pain", "Jaw pain", "Palpitations"], "Fatigue topped the list, which is why women's ischemia is easy to miss.")
      ],
      bank: [
        Q("Which description best fits classic angina?", "Dull, tight substernal pressure spreading to the left shoulder", ["Sharp pain worse with a deep breath", "Burning pain after meals relieved by antacids", "Pain reproduced by pressing on the ribs"], "Ischemic pain is a dull pressure that spreads, not sharp, pleuritic or positional.")
      ] },

    { id: "testing", title: "Who gets tested, and how", goal: "Only symptomatic patients get tested; pretest likelihood picks the test; the cath is the gold standard.",
      pages: [
        { title: "Meet Carl", fig: { type: "tiles", items: [["👴", "Carl, 67", "new patient establishing care"], ["🩸", "HTN + diabetes", "for 20 years"], ["🌿", "Tight chest + short of breath", "when working in the yard, for 4 months"], ["🛋️", "No rest symptoms", "no nausea, sweats or dizziness"]] },
          html: "<p>Carl is the deck's patient. Exertional chest tightness for months, two big risk factors, nothing at rest. That's the story of possible <strong>stable angina</strong>.</p>" +
            "<p>Step one is always the same: know his <strong>risk factors</strong> and take a good <strong>H&amp;P</strong>. What else would you ask? Smoking, lipids, family history.</p>" },
        { title: "Only test people with symptoms", fig: { type: "flow", steps: ["Risk factors + H&amp;P", "Symptoms?", "Pretest likelihood", "Pick the test"], hi: 1 },
          html: "<p>Tests for ischemia are <strong>not screening tests</strong>. They used to be, but now only patients who are <strong>symptomatic</strong> and at real risk get them.</p>" +
            "<p>The ESC 2024 model estimates the <strong>pretest likelihood</strong> of obstructive CAD from age, sex, the symptoms, and how many risk factors they have (smoking, dyslipidemia, HTN, diabetes, family history).</p>" },
        { title: "The likelihood decides how hard to look", fig: { type: "pretest" },
          html: "<p><strong>Drag the slider.</strong> Very low likelihood: a test won't help. Middle: a light test can rule it in or out. Higher: you want a real picture, stress imaging or CCTA.</p>" },
        { title: "Pick the stress test", fig: { type: "stresspick" },
          html: "<p>Four rules decide the test. Try Carl: no pain right now, he can walk, his EKG is normal. Then flip the answers and watch the test change.</p>" +
            "<ul><li><strong>Rule 1</strong>: acute MI or ongoing ischemia means <strong>no stress test at all</strong>.</li><li><strong>Rule 2</strong>: <strong>exercise</strong> is preferred if they can do it.</li>" +
            "<li><strong>Rule 3</strong>: LBBB or a paced rhythm means drug stress <strong>with imaging</strong>.</li><li><strong>Rule 4</strong>: no vasodilators with hypotension, high-grade AV block, sick sinus or wheezing.</li></ul>" },
        { title: "The gold standard: look inside", fig: { type: "coronary", blocks: [["ladp", "60%"], ["lcx", "100%"]] },
          html: "<p>If you need to know for sure, <strong>invasive coronary angiography</strong> shows the arteries themselves. It's the <strong>reference standard</strong> for coronary anatomy.</p>" +
            "<p>Bonus: if it finds a tight narrowing, the cardiologist can open it right then with a balloon and stent (<strong>PCI</strong>). Diagnostic and therapeutic in one trip.</p>" }
      ],
      remember: ["Ischemia tests are for symptomatic patients, never screening.", "Pretest likelihood (age, sex, symptoms, number of risk factors) picks the test.", "Rule 1: active ischemia = no stress test. Rule 2: exercise preferred. Rule 3: LBBB/paced = drug stress with imaging. Rule 4: no vasodilators with hypotension, high-grade AV block, sick sinus, wheezing.", "Coronary angiography = reference standard, and PCI can be done in the same procedure."],
      check: [
        Q("Which patient should get a stress test?", "A 60-year-old with 3 months of exertional chest tightness", ["An asymptomatic 50-year-old with high cholesterol, as screening", "A patient with chest pain right now and ST depressions", "A patient 1 year after a stent with no new symptoms"], "Stress tests are for symptomatic stable patients, never screening or active ischemia."),
        Q("A patient can walk on a treadmill but has a LBBB. Which test?", "Pharmacologic stress test with imaging", ["Exercise treadmill EKG alone", "No testing is possible", "Exercise treadmill EKG with a longer protocol"], "A LBBB makes ST changes unreadable, so the deck says drug stress with imaging."),
        Q("What is the reference standard for defining coronary anatomy?", "Invasive coronary angiography", ["Exercise stress EKG", "Coronary calcium score", "Transthoracic echo"], "Angiography shows the lumen directly and can treat a blockage with PCI.")
      ],
      bank: [
        Q("What decides how a patient with suspected stable angina is worked up?", "Their pretest likelihood of obstructive CAD", ["Their cholesterol level alone", "Whether they want a cath", "Their age alone"], "The likelihood model combines age, sex, symptoms and risk factors to pick the next test.")
      ] }
  ] };

  /* =============================== TIER 2 · STANDARD DETAILS =============================== */
  T.units["t2|cad-part-1"] = { chunks: [
    { id: "risk", title: "Risk factors", goal: "Most risk is modifiable, and five factors drive over half of CV deaths.",
      pages: [
        { title: "Three kinds of risk", fig: { type: "grid", cols: ["Modifiable", "Nonmodifiable", "Risk-enhancing"], rows: [["Hypertension", "Male sex", "CKD stage 3 to 5"], ["Dyslipidemia", "Advancing age", "Metabolic syndrome"], ["Diabetes", "Family history of premature CAD", "Chronic inflammatory conditions"], ["Tobacco, obesity, inactivity, poor diet, excess alcohol", "", ""]], hiCol: 0 },
          html: "<p>You can't change your sex, your age or your parents. Everything in the left column you can, so that's where the work is.</p>" +
            mn("Premature family history: male relative &lt; <strong>55</strong>, female relative &lt; <strong>65</strong>. Women get 10 extra years.") },
        { title: "How much they matter", fig: { type: "tiles", items: [["5️⃣", "&gt; 50%", "of CV deaths come from HLD, DM, HTN, obesity, smoking"], ["🚬", "2 to 3×", "ASCVD risk from smoking"], ["⏳", "−50% in 2 years", "after quitting"], ["🚶", "Even modest exercise", "lowers risk a lot"]] },
          html: "<p>Five common modifiable factors (lipids, diabetes, BP, obesity, smoking) cause <strong>more than half</strong> of cardiovascular deaths.</p>" +
            "<p>Smoking alone doubles or triples ASCVD risk, and that extra risk falls by <strong>half within 2 years</strong> of quitting. It's never too late.</p>" },
        { title: "Four ways to lower it", fig: { type: "flow", steps: ["Stop tobacco<br><small>assess, counsel, treat</small>", "Control BP + lipids<br><small>find early; lifestyle, meds</small>", "Move + eat well<br><small>sustainable, not all-or-nothing</small>", "Manage diabetes<br><small>to their overall risk</small>"] },
          html: "<p>The deck's four steps for risk reduction. Notice the tone: <strong>sustainable</strong> changes, not an all-or-nothing makeover.</p>" }
      ],
      remember: ["Modifiable: HTN, lipids, DM, tobacco, obesity, inactivity, diet, alcohol.", "Nonmodifiable: male sex, age, premature family history (men &lt; 55, women &lt; 65).", "Risk-enhancing: CKD 3 to 5, metabolic syndrome, chronic inflammation.", "Smoking: 2 to 3× risk, halves within 2 years of quitting. Top 5 modifiable factors: &gt; 50% of CV deaths."],
      check: [
        Q("Which family history counts as premature CAD?", "Father with an MI at 50", ["Father with an MI at 60", "Mother with an MI at 70", "Grandfather with an MI at 75"], "Premature means a male relative under 55 or a female relative under 65."),
        Q("How much does ASCVD risk drop within 2 years of quitting smoking?", "About 50%", ["About 10%", "It doesn't drop for 10 years", "Back to zero risk"], "Quitting halves the excess risk within 2 years, which is why cessation comes first."),
        Q("Which is a risk-enhancing condition rather than a classic modifiable risk factor?", "Chronic kidney disease stage 3", ["Hypertension", "Tobacco use", "Obesity"], "CKD 3-5, metabolic syndrome and chronic inflammation are listed as risk enhancers.")
      ],
      bank: [
        Q("Which is a nonmodifiable ASCVD risk factor?", "Male sex", ["Physical inactivity", "Dyslipidemia", "Excess alcohol"], "Sex, age and family history can't be changed; the rest can.")
      ] },

    { id: "plaque", title: "How a plaque is built", goal: "LDL gets stuck, monocytes eat it and become foam cells, and over 10-15 years a cap forms over a core.",
      pages: [
        { title: "1 · LDL slips in and gets stuck", fig: { type: "wall", step: "ldl" },
          html: "<p>This is a slice of artery wall, with blood running along the top. Under the thin <strong>endothelium</strong> is the <strong>intima</strong>.</p>" +
            "<p>It starts when <strong>lipoproteins (LDL)</strong> slip into the intima and <strong>get stuck</strong> there.</p>" },
        { title: "2 · The stuck LDL gets modified", fig: { type: "wall", step: "oxidize" },
          html: "<p>Trapped LDL gets <strong>modified (oxidized)</strong>. The body reads that as damage and turns on <strong>inflammation</strong>, and the lining puts out sticky hooks for white cells.</p>" },
        { title: "3 · Monocytes move in", fig: { type: "wall", step: "mono" },
          html: "<p><strong>Inflammatory cells are recruited</strong>: monocytes stick to the lining, crawl into the intima and become <strong>macrophages</strong>.</p>" },
        { title: "4 · Foam cells make a fatty streak", fig: { type: "wall", step: "foam" },
          html: "<p>Macrophages eat the modified LDL until they're stuffed and foamy: <strong>foam cells</strong>. A patch of them is the <strong>fatty streak</strong>, the first lesion. It doesn't narrow anything yet.</p>" +
            hy("Foam cell = a macrophage stuffed with lipid. Fatty streak = the first visible lesion.") },
        { title: "5 · Years later: cap and core", fig: { type: "wall", step: "cap" },
          html: "<p>Over <strong>10 to 15 years</strong>, some streaks grow into full plaques (atheromas): a <strong>fibrous cap</strong> over a <strong>lipid core</strong>. Growth isn't steady: there are busy periods and quiet ones.</p>" +
            mn("Stuck → modified → monocyte → macrophage → foam cell → fatty streak → cap over core.") },
        { title: "Why the lining matters", fig: { type: "grid", cols: ["Protector", "What it does", "When the lining is sick"], rows: [["Nitric oxide (NO)", "Vasodilates; blocks platelet adhesion and inflammation", "Falls"], ["Prostacyclin (PGI₂)", "Vasodilates; blocks platelet aggregation", "Falls"]], hiCol: 2 },
          html: "<p>A healthy endothelium keeps the artery relaxed and slippery with two molecules: <strong>NO</strong> and <strong>prostacyclin</strong>. When the lining is sick (endothelial dysfunction), both fall, and the artery loses its protection.</p>" },
        { title: "Where plaques like to grow", fig: { type: "tiles", items: [["🔀", "Branch points", ""], ["↪️", "Sharp curves", ""], ["〰️", "Irregular shape", ""], ["🌀", "Sudden changes in speed or direction", ""]] },
          html: "<p>Lining health depends on local <strong>flow</strong>. Smooth straight flow protects; disturbed flow at branches and bends doesn't.</p>" +
            "<p>Things that speed the whole process: <strong>hypertension</strong> (shear force), <strong>smoking</strong>, <strong>high cholesterol</strong>, and <strong>inflammation / oxidative stress</strong>.</p>" }
      ],
      remember: ["LDL stuck in the intima → modified → inflammation → monocytes → macrophages.", "Macrophage + lipid = foam cell; patch of foam cells = fatty streak (first lesion).", "Full atheroma: fibrous cap over lipid core, 10 to 15 years, grows in bursts.", "Endothelial dysfunction: ↓ NO and ↓ PGI₂.", "Plaques form at branches, curves, irregular spots; HTN, smoking, cholesterol, inflammation speed it up."],
      check: [
        Q("What is the first visible lesion of atherosclerosis?", "Fatty streak", ["Fibrous cap", "Calcified plaque", "Thrombus"], "Lipid-filled foam cells collecting in the intima make the fatty streak first."),
        Q("What are foam cells?", "Macrophages filled with lipid", ["Platelets stuck to the endothelium", "Smooth muscle cells making collagen", "Red cells trapped in clot"], "Recruited monocytes become macrophages that swallow modified LDL."),
        Q("Where in the arterial tree do atheromas tend to form?", "At branch points and sharp curves", ["In straight segments with smooth flow", "Only in the aorta", "Only in capillaries"], "Disturbed flow at branches and curves damages endothelial function.")
      ],
      bank: [
        Q("Which endothelial product vasodilates and inhibits platelet aggregation?", "Prostacyclin (PGI₂)", ["Thromboxane A2", "Endothelin", "LDL"], "Prostacyclin and nitric oxide are the protective molecules lost in endothelial dysfunction.")
      ] },

    { id: "remodel", title: "Remodeling: outward or inward", goal: "Most plaques first push the wall outward (positive remodeling), so the lumen stays open at first.",
      pages: [
        { title: "Two ways an artery reshapes", fig: { type: "remodel" },
          html: "<p>As a plaque grows, the artery wall can respond two ways.</p>" +
            "<p><strong>Positive remodeling</strong> (most common): the wall <strong>bulges outward</strong> around the plaque, so the lumen stays open. Less likely to cause angina at first.</p>" +
            "<p><strong>Negative remodeling</strong>: no outward bulge, so the plaque <strong>narrows the lumen</strong> as it grows.</p>" },
        { title: "It can switch", fig: { type: "flow", steps: ["Positive remodeling<br><small>lumen open, no angina</small>", "Plaque keeps growing", "Negative remodeling<br><small>lumen narrows, angina</small>"], hi: 2 },
          html: "<p>Many plaques start positive and <strong>switch to negative</strong> as they grow. That's why someone can have a lot of plaque for years with no symptoms.</p>" +
            hy("A big plaque doesn't always mean a narrow lumen. Positive remodeling hides it at first.") },
        { title: "Aging calms a plaque down", fig: { type: "capcore" },
          html: "<p>An unruptured plaque gets <strong>more stable with age</strong>: inflammation fades and the cap fills with collagen. Young plaques are still swapping out their cap's collagen while inflammation burns underneath, which is why they tear.</p>" +
            "<p>That inflamed core is also a <strong>pro-clotting, platelet-activating</strong> place, so a tear means a clot.</p>" }
      ],
      remember: ["Positive remodeling (most common): wall bulges out, lumen open, angina unlikely at first.", "Negative remodeling: no dilation, plaque narrows the lumen.", "Positive can switch to negative as the plaque grows.", "Plaques stabilize with age: less inflammation, more collagen in the cap."],
      check: [
        Q("Which kind of remodeling keeps the lumen open early on?", "Positive remodeling", ["Negative remodeling", "Calcific remodeling", "Fibrous remodeling"], "In positive remodeling the wall bulges outward, so the plaque doesn't narrow the lumen yet."),
        Q("What happens to an unruptured plaque as it ages?", "Less inflammation and a thicker collagen cap, so more stable", ["More inflammation and a thinner cap", "It dissolves completely", "It always ruptures within a year"], "Old plaques heal their caps, which is why they cause stenosis rather than rupture."),
        Q("A plaque grows without the artery wall dilating. What happens to the lumen?", "It narrows (negative remodeling)", ["It widens", "It stays the same", "It fills with collagen"], "Without outward remodeling, the growing plaque takes up lumen space.")
      ],
      bank: [
        Q("Which remodeling pattern is most common?", "Positive remodeling", ["Negative remodeling", "Neither; plaques don't remodel", "They are equally common"], "Most plaques first push the wall outward before any narrowing.")
      ] },

    { id: "muscle", title: "Stunned, hibernating or dead", goal: "Ischemia makes muscle stiff and weak; stunning and hibernation recover, infarction doesn't.",
      pages: [
        { title: "What ischemia does to a muscle cell", fig: { type: "flow", steps: ["Too little O₂", "Anaerobic metabolism<br><small>lactic acid</small>", "Local acidosis", "Stiff + weak<br><small>↓ compliance, ↓ contractility</small>", "Wall motion abnormality<br><small>seen on echo; EKG changes</small>"], hi: 4 },
          html: "<p>Starved of oxygen, the cells switch to <strong>anaerobic</strong> metabolism and make <strong>lactic acid</strong>. The local acid makes that patch of muscle relax poorly and squeeze poorly.</p>" +
            "<p>That's why ischemia shows up as a <strong>regional wall motion abnormality</strong> on echo, and as changes on the EKG.</p>" },
        { title: "Stunned: flow is back, function isn't yet", fig: { type: "muscle3", hi: "stun" },
          html: "<p>A <strong>brief</strong> episode of ischemia, then the blood comes back (reperfusion). The muscle is alive, but it stays <strong>weak for hours to days</strong>, sometimes longer, before recovering on its own.</p>" +
            pic("Stunned like after a punch: you're fine, you just need a minute.") },
        { title: "Hibernating: low flow, function turned down", fig: { type: "muscle3", hi: "hib" },
          html: "<p><strong>Chronic or repeated</strong> low flow. The muscle protects itself by <strong>turning its contraction down</strong> to match the little oxygen it gets. It's alive, just sleeping.</p>" +
            "<p>Restore the blood (stent or bypass) and it can <strong>wake up</strong>. Dobutamine stress echo can show which muscle is hibernating.</p>" +
            pic("A bear in winter: alive, saving energy, waiting for spring (revascularization).") },
        { title: "Infarcted: dead", fig: { type: "muscle3", hi: "mi" },
          html: "<p><strong>Prolonged, severe</strong> ischemia kills the cells: <strong>necrosis</strong>. That region is permanently lost. No amount of reperfusion brings it back.</p>" +
            hy("Stunned = flow back, function lagging. Hibernating = flow still low, waiting for revascularization. Infarcted = dead.") }
      ],
      remember: ["Ischemia → lactic acid → acidosis → stiff, weak muscle → wall motion abnormality on echo + EKG changes.", "Stunning: brief ischemia then reperfusion; viable; recovers in hours to days.", "Hibernation: chronic low flow; viable; function down-regulated; recovers after revascularization.", "Infarction: prolonged severe ischemia; necrosis; permanent."],
      check: [
        Q("Blood flow is restored after a brief occlusion, but the wall still moves poorly for 2 days. What is this?", "Myocardial stunning", ["Myocardial hibernation", "Myocardial infarction", "Positive remodeling"], "Stunning is viable muscle that stays weak for a while after flow returns."),
        Q("Chronically low flow makes a wall contract poorly, and it improves after CABG. What was it?", "Hibernating myocardium", ["Stunned myocardium", "Infarcted myocardium", "Scar tissue"], "Hibernating muscle is viable but turned down until blood supply is restored."),
        Q("Which ischemic state causes permanent loss of muscle?", "Myocardial infarction", ["Stunning", "Hibernation", "Demand ischemia that resolves"], "Prolonged severe ischemia kills myocytes, and dead muscle doesn't recover.")
      ],
      bank: [
        Q("Why does ischemic muscle show a wall motion abnormality on echo?", "Lactic acid from anaerobic metabolism impairs relaxation and contraction", ["The muscle is always already dead", "The valve stops opening", "The pericardium stiffens"], "Local acidosis makes that region stiff and weak, which echo sees as abnormal wall motion.")
      ] },

    { id: "stress", title: "Stress tests up close", goal: "Treadmill, drug stress, nuclear MPI and stress echo: what each does and when.",
      pages: [
        { title: "The treadmill: Bruce protocol", fig: { type: "bruce", hi: 3 },
          html: "<p>The patient is hooked to an <strong>EKG and BP cuff</strong> and walks while <strong>speed and incline go up every 3 minutes</strong>: the Bruce protocol.</p>" +
            "<p>It needs two things: they can <strong>exercise adequately</strong>, and their <strong>resting EKG can be read</strong> for ischemia.</p>" },
        { title: "Can't exercise? Use a drug", fig: { type: "quad", x: ["Coronary vasodilators", "Raise O₂ demand"], y: ["Drugs", "How"], cells: [["Regadenoson (most common), adenosine, dipyridamole", "", "ok"], ["Dobutamine (stress echo)", "", "bad"], ["Dilate healthy arterioles more than stenosed ones, so flow is uneven", "", "ok"], ["↑ HR and contractility, like exercise", "", "bad"]] },
          html: "<p>Two ways to stress a heart with medicine. <strong>Vasodilators</strong> open the healthy arteries a lot and the narrowed ones barely, so the narrowed territory looks dim. <strong>Dobutamine</strong> makes the heart work harder, like exercise.</p>" +
            hy("No vasodilators with hypotension, high-grade AV block, sick sinus or active wheezing (COPD, asthma).") },
        { title: "Nuclear MPI: dark at stress, filled at rest", fig: [{ type: "perfusion", state: "ischemia" }, { type: "perfusion", state: "scar" }],
          html: "<p>A radioactive tracer is injected at peak stress, a gamma camera photographs where it went, and stress images are compared with rest.</p>" +
            "<p><strong>Dark at stress but filled at rest = reversible ischemia</strong> (left). Dark in both = scar (right). The only contraindication to MPI is <strong>pregnancy</strong>, because of the radioactivity.</p>" +
            "<p>MPI helps most with an unreadable EKG (LBBB), patients who can't exercise, or when you need more detail on perfusion.</p>" },
        { title: "Stress echo: watch the walls move", fig: { type: "flow", steps: ["Resting echo", "Stress: treadmill, bike or dobutamine", "New wall motion abnormality = ischemia"], hi: 2 },
          html: "<p>A baseline echo first, then stress. A wall that moved fine at rest and stops moving under stress is ischemic.</p>" +
            "<p>Dobutamine stress echo can also find <strong>hibernating</strong> muscle that would recover after revascularization.</p>" +
            "<p>Any stress test is <strong>positive</strong> if it shows ischemia on the EKG or on the images.</p>" }
      ],
      remember: ["Bruce protocol: speed + incline up every 3 min; needs ability to exercise and a readable EKG.", "Vasodilators: regadenoson (most common), adenosine, dipyridamole. Dobutamine raises demand.", "MPI: reversible defect (dark at stress, filled at rest) = ischemia; only contraindication = pregnancy.", "Stress echo: new wall motion abnormality = ischemia; dobutamine echo checks viability."],
      check: [
        Q("Which vasodilator is the most commonly used stress agent?", "Regadenoson (Lexiscan)", ["Dobutamine", "Dipyridamole", "Nitroglycerin"], "Regadenoson is listed as the most common pharmacologic stress agent."),
        Q("A patient with active wheezing needs a pharmacologic stress test. Which agent fits?", "Dobutamine", ["Adenosine", "Regadenoson", "Dipyridamole"], "Vasodilators can trigger bronchospasm, so use dobutamine, which raises demand instead."),
        Q("On MPI, an area is dark on the stress images but fills in at rest. What does it mean?", "Reversible ischemia", ["Old infarct (scar)", "A normal study", "A tracer injection error"], "Tracer missing only under stress means the area gets enough flow at rest but not under load.")
      ],
      bank: [
        Q("What is the only contraindication to MPI itself?", "Pregnancy", ["Diabetes", "Age over 65", "Prior PCI"], "The radioactive tracer is the problem, so pregnancy is the one contraindication.")
      ] },

    { id: "after", title: "Duke score, CCTA and the cath", goal: "Turn a treadmill into a risk level, know when CCTA fits, and what a cath can do.",
      pages: [
        { title: "Score the treadmill", fig: { type: "duke", t: 8, st: 1 },
          html: "<p>The <strong>Duke Treadmill Score</strong> turns a treadmill test into a prognosis using three things: <strong>exercise time</strong> (minutes), the <strong>biggest ST deviation</strong> (mm) and the <strong>angina index</strong> (0 none, 1 nonlimiting, 2 exercise-limiting).</p>" +
            "<p><strong>Play with it.</strong> More minutes pushes the score up; ST depression and angina pull it down.</p>" },
        { title: "The deck's patient", fig: { type: "eq", terms: [["8", "min", ""], "−", ["5 × 1", "mm ST", ""], "−", ["4 × 1", "angina", "nonlimiting"], "=", ["−1", "Duke", "intermediate"]] },
          html: "<p>A 58-year-old man walks <strong>8 minutes</strong> of Bruce, gets mild chest pressure, and has <strong>1 mm horizontal ST depression</strong> in V4 to V6 that resolves in recovery. Score: <strong>−1</strong>, intermediate risk.</p>" +
            "<p>(The 5× and 4× weights are the standard formula, standard teaching.)</p>" },
        { title: "What the score means", fig: { type: "grid", cols: ["Score", "Risk", "Next step"], rows: [["≥ +5", "Low", "Good prognosis; more testing often unnecessary"], ["−10 to +4", "Intermediate", "Stress imaging or CCTA"], ["≤ −11", "High", "Prompt evaluation; consider invasive angiography"]], hiCol: 2 },
          html: mn("Think of +5 and −11 as the two fences. Between them is intermediate.") },
        { title: "CCTA: a CT picture of the arteries", fig: { type: "quad", x: ["CCTA", "Stress test"], y: ["Shows", "Best for"], cells: [["The arteries: plaque and narrowing, with IV contrast", "", "ok"], ["Whether the muscle gets ischemic", "", "bad"], ["Stable chest pain, no known CAD, intermediate likelihood; unclear stress test", "", "ok"], ["Heavy calcium, age &gt; 65, CKD", "", "bad"]] },
          html: "<p><strong>CCTA</strong> uses IV contrast to show plaque and narrowing directly. It shines in <strong>stable chest pain with no known CAD</strong> at <strong>intermediate</strong> likelihood, or to clear up an inconclusive stress test.</p>" },
        { title: "The cath: find it and fix it", fig: [{ type: "artery", stage: "balloon" }, { type: "artery", stage: "stent" }],
          html: "<p>In a <strong>cath (coronary angiography)</strong>, a catheter goes from the wrist or groin up to the coronary openings, contrast is injected, and fluoroscopy films the arteries.</p>" +
            "<p>Find a tight narrowing? Push a <strong>balloon</strong> across it, inflate it to squash the plaque into the wall, then leave a <strong>stent</strong> to hold it open. That's <strong>PCI</strong>, often in the same procedure.</p>" }
      ],
      remember: ["Duke = exercise minutes, max ST deviation (mm), angina index (0/1/2).", "≥ +5 low (often no more tests) · −10 to +4 intermediate (imaging or CCTA) · ≤ −11 high (consider cath).", "CCTA: stable chest pain, no known CAD, intermediate likelihood, or an unclear stress test.", "Cath = reference standard; PCI (balloon + stent) can be done in the same procedure."],
      check: [
        Q("A Duke Treadmill Score of −1 means what risk?", "Intermediate", ["Low", "High", "Non-diagnostic"], "Scores from −10 to +4 are intermediate, which calls for imaging or CCTA next."),
        Q("A Duke score of −14. What is the next step?", "Prompt evaluation and consider invasive angiography", ["No more testing", "Repeat the treadmill in a year", "Coronary calcium score"], "Scores of −11 or lower are high risk, so you look at the anatomy directly."),
        Q("Which patient is the best fit for CCTA?", "Stable chest pain, no known CAD, intermediate likelihood", ["Ongoing chest pain with ST elevation", "Known heavy coronary calcification", "Advanced CKD"], "CCTA shines in intermediate-likelihood patients without known CAD; calcium and CKD favor stress testing.")
      ],
      bank: [
        Q("What makes coronary angiography both diagnostic and therapeutic?", "A PCI with balloon and stent can be done in the same procedure", ["It also measures the calcium score", "It gives a stress EKG at the same time", "It dissolves plaque with contrast"], "If a significant narrowing is found, the cardiologist can open it right then.")
      ] }
  ] };

  /* =============================== TIER 3 · THE WEEDS =============================== */
  T.units["t3|cad-part-1"] = { chunks: [
    { id: "numbers", title: "The numbers", goal: "Every number on the slides, in one place.",
      pages: [
        { title: "How big the problem is", fig: { type: "tiles", items: [["🇺🇸", "18.2 million", "Americans with ASCVD (rises with age)"], ["🌍", "~15.9 million", "deaths worldwide from ASCVD in 2023"], ["📋", "35%", "of US adults have ≥ 1 established risk factor"], ["5️⃣", "&gt; 50%", "of CV deaths from the top 5 modifiable factors"]] },
          html: "<p>The deck's burden slide. The one most likely to be asked: <strong>35%</strong> of US adults have at least one established risk factor (uncontrolled HTN, dyslipidemia, high glucose or high BMI).</p>" },
        { title: "Numbers from the story", fig: { type: "tiles", items: [["⚖️", "0.3% → 7%", "heart's body weight → resting O₂ use"], ["⏳", "10 to 15 years", "for a plaque to fully develop"], ["🚬", "2-3× / −50% in 2 yr", "smoking risk / after quitting"], ["👩", "515 · 78% · 30%", "women studied · symptom &gt; 1 month · chest discomfort"]] },
          html: "<p>Each of these came up in Tiers 1 and 2. Here they are together so they stick as numbers.</p>" +
            mn("Family history cutoffs: men &lt; 55, women &lt; 65.") }
      ],
      remember: ["18.2 million Americans with ASCVD; ~15.9 million deaths worldwide (2023); 35% of US adults have a risk factor.", "Top 5 modifiable factors: &gt; 50% of CV deaths.", "Heart: 0.3% of body weight, 7% of resting O₂.", "Plaque: 10 to 15 years. Women's MI study: 515 women, 78% early symptoms, 30% chest discomfort."],
      check: [
        Q("The heart is 0.3% of body weight. What share of resting oxygen does it use?", "7%", ["0.3%", "20%", "50%"], "That big gap is why the heart is called needy: it can't tolerate any shortfall in supply."),
        Q("How long can an atheroma take to fully develop?", "10 to 15 years", ["2 to 3 weeks", "1 year", "40 to 50 years"], "Plaque builds slowly over a decade or more, which is why prevention starts early."),
        Q("What share of US adults have at least one established ASCVD risk factor?", "35%", ["5%", "60%", "90%"], "About a third of adults already have uncontrolled HTN, dyslipidemia, high glucose or high BMI.")
      ],
      bank: [
        Q("In the study of 515 women with MI, what share reported chest discomfort?", "30%", ["78%", "95%", "50%"], "Only 30% had chest discomfort, while 78% had another symptom for over a month beforehand.")
      ] },

    { id: "other-causes", title: "Ischemia without plaque", goal: "Spasm, congenital lesions and emboli can starve the muscle too.",
      pages: [
        { title: "A clean artery that clamps shut", fig: { type: "artery", stage: "spasm" },
          html: "<p><strong>Vasospasm</strong> causes <strong>Prinzmetal's angina</strong>. The artery may have no plaque at all; it just clamps down.</p>" +
            "<p>Two causes on the slide: <strong>\"twitchy\" arterioles</strong>, or <strong>illicit sympathomimetic drugs</strong> (cocaine, methamphetamine: standard teaching examples) causing intense vasoconstriction.</p>" },
        { title: "The other two", fig: { type: "tiles", items: [["🌀", "Vasospasm", "Prinzmetal's angina"], ["🧬", "Congenital lesions", "uncommon"], ["🦠", "Emboli", "septic vegetations from infective endocarditis"]] },
          html: "<p>A piece of an endocarditis <strong>vegetation</strong> can break off and lodge in a coronary artery. Congenital coronary problems exist but are uncommon.</p>" +
            hy("Young patient, clean coronaries, chest pain after a stimulant: think spasm.") }
      ],
      remember: ["Vasospasm → Prinzmetal's angina: twitchy arterioles or sympathomimetic drugs.", "Congenital lesions: uncommon.", "Emboli: septic vegetations from infective endocarditis."],
      check: [
        Q("A 28-year-old has chest pain and ST changes after using cocaine, with clean coronaries. Mechanism?", "Coronary vasospasm from a sympathomimetic", ["Plaque rupture", "Fixed stenosis", "Congenital coronary anomaly"], "Sympathomimetic drugs cause intense vasoconstriction, cutting supply without any plaque."),
        Q("A patient with infective endocarditis has an MI. What is the likely cause?", "A septic embolus from a vegetation", ["Vasospasm", "Positive remodeling", "Plaque erosion"], "Vegetations can break off and lodge in a coronary artery."),
        Q("Which cause of non-plaque ischemia does the deck call uncommon?", "Congenital lesions", ["Vasospasm", "Septic emboli", "Sympathomimetic drugs"], "Congenital coronary lesions exist but are rare compared with spasm and emboli.")
      ],
      bank: [
        Q("Vasospasm of the coronary arteries causes which angina?", "Prinzmetal's angina", ["Stable angina", "Unstable angina", "Ludwig's angina"], "Prinzmetal's (variant) angina is ischemia from spasm, not fixed plaque.")
      ] },

    { id: "who-not", title: "Stress test: who should, who shouldn't", goal: "The full appropriate and inappropriate lists, including the 2- and 5-year rule.",
      pages: [
        { title: "Who should get one", fig: { type: "tiles", items: [["❓", "Angina-like symptoms", "intermediate or high pretest probability"], ["📉", "Recent UA/NSTEMI", "treated without a cath: to risk-stratify"], ["📈", "Known CAD", "with new or worse symptoms"], ["💔", "New HFrEF or cardiomyopathy", "if no cath is planned"], ["🔪", "Pre-op", "active cardiac condition before elective noncardiac surgery"]] },
          html: "<p>Five situations where stress testing is appropriate. The sneaky one: after a UA or NSTEMI managed <strong>without</strong> a cath, the stress test <strong>risk-stratifies</strong> them.</p>" },
        { title: "Who shouldn't", fig: { type: "grid", cols: ["Don't stress test…", "Because"], rows: [["Active chest pain / ACS (UA, NSTEMI)", "Rule 1"], ["No new symptoms &lt; 2 years after PCI or &lt; 5 years after CABG", "Too soon, nothing changed"], ["No symptoms (rare exceptions)", "Not a screening test"], ["Decompensated HF, uncontrolled arrhythmia", "Unsafe"], ["Advanced / critical aortic stenosis", "Unsafe"], ["PE, infective endocarditis", "Unsafe"], ["Thyrotoxicosis, acute systemic illness/infection", "Stress makes it worse"]], hiCol: 0 },
          html: mn("Stent → 2, bypass → 5: no routine stress test before then unless symptoms change.") },
        { title: "The likelihood model's inputs", fig: { type: "tiles", items: [["🎂", "Age + sex", ""], ["💬", "Symptom characteristics", ""], ["🔢", "Number of risk factors", "smoking, dyslipidemia, HTN, diabetes, family history"]] },
          html: "<p>The <strong>2024 ESC Risk Factor-weighted Clinical Likelihood (RF-CL)</strong> model gives a % chance of obstructive CAD from these inputs. It counts risk factors; it doesn't use lab numbers like the LDL itself.</p>" }
      ],
      remember: ["Appropriate: symptoms with intermediate/high probability; UA/NSTEMI treated without cath; known CAD with new symptoms; new HFrEF/CM without cath planned; indicated pre-op.", "Inappropriate: active ACS; &lt; 2 yr after PCI or &lt; 5 yr after CABG without new symptoms; asymptomatic; decompensated HF; uncontrolled arrhythmia; critical AS; PE; IE; thyrotoxicosis; acute illness.", "ESC RF-CL: age, sex, symptoms, number of risk factors."],
      check: [
        Q("A patient had a stent 1 year ago and has no new symptoms. Stress test?", "No: inappropriate under 2 years after PCI without new symptoms", ["Yes, yearly testing is routine after PCI", "Yes, but only with dobutamine", "Only if LDL is high"], "Without new symptoms, testing isn't indicated for 2 years after PCI or 5 after CABG."),
        Q("Which condition makes a stress test inappropriate?", "Critical aortic stenosis", ["Stable exertional angina", "New HFrEF with no cath planned", "Known CAD with worsening symptoms"], "Stressing a heart behind a critical valve can cause collapse."),
        Q("A patient's NSTEMI was treated medically without a cath. Why order a stress test later?", "To risk-stratify them", ["To diagnose the NSTEMI", "To screen family members", "Stress tests are never done after ACS"], "After conservative management, the stress test shows how much ischemia remains.")
      ],
      bank: [
        Q("Which is NOT part of the ESC RF-CL pretest likelihood model?", "The LDL level", ["Age and sex", "Symptom characteristics", "Number of risk factors"], "The model counts dyslipidemia as a risk factor but doesn't use the LDL number itself.")
      ] },

    { id: "imaging", title: "CCTA limits, calcium score, cath details", goal: "When CT isn't the answer, what a calcium score of 0 does and doesn't mean, and how a cath runs.",
      pages: [
        { title: "When to skip CCTA", fig: { type: "tiles", items: [["🦴", "Moderate-severe calcium", "hides the lumen"], ["🎂", "Age &gt; 65", "probably calcified"], ["🫘", "CKD", "contrast kidney injury"], ["💓", "Irregular rhythm", "blurs the images"]] },
          html: "<p>In these patients, the deck prefers a <strong>stress test</strong> over CCTA. CCTA also means <strong>radiation and iodinated contrast</strong>, and it can turn up incidental findings.</p>" },
        { title: "Calcium score: counting calcium", fig: { type: "bars", items: [["CAC 0", 3, "no calcified plaque seen", "good"], ["Low", 25, "", "ok"], ["Higher", 60, "", "bad"], ["Very high", 95, "more plaque, higher risk", "bad"]] },
          html: "<p>A <strong>non-contrast CT</strong> that measures calcified plaque, reported as an <strong>Agatston score</strong>. Higher score = more calcified plaque = generally higher ASCVD risk.</p>" +
            hy("CAC 0 means no CALCIFIED plaque. It does NOT exclude soft (noncalcified) plaque or CAD.") +
            "<p>It's used selectively, to decide on lipid-lowering when that choice is uncertain.</p>" },
        { title: "How a cath runs", fig: [{ type: "access", mode: "radial" }, { type: "access", mode: "femoral" }],
          html: "<p><strong>1. Access</strong>: radial (wrist) or femoral (groin) artery, small sheath. <strong>2. Catheter</strong> up to the aorta and the coronary openings (ostia) under fluoroscopy. <strong>3. Contrast</strong> injected and filmed.</p>" +
            "<p>About an hour. Afterward, pressure is held on the puncture; a <strong>closure device</strong> may be used for the femoral site.</p>" },
        { title: "Reading the report", fig: { type: "coronary", blocks: [["ladp", "60%"], ["lcx", "100%"], ["rcam", "30%"]] },
          html: "<p>Each lesion is reported as a <strong>% narrowing and a location</strong>, like the deck's example: left main 30% mid, LAD 60% ostial, LCx totally occluded mid, RCA 30% mid-distal.</p>" +
            "<p>A <strong>left ventriculogram</strong> at the end (catheter across the aortic valve, dye into the LV) estimates the <strong>EF</strong> and left heart pressures.</p>" +
            "<p><strong>Risks</strong>: access-site bleeding or hematoma, contrast kidney injury or allergy, radiation, and uncommonly arrhythmia, MI or stroke.</p>" }
      ],
      remember: ["Prefer stress testing over CCTA with heavy calcium, age &gt; 65, or CKD.", "CAC: non-contrast CT, Agatston score; 0 doesn't exclude noncalcified plaque; used for uncertain lipid decisions.", "Cath: radial or femoral → ostia → contrast + fluoroscopy; ~1 hour; pressure or closure device.", "Ventriculogram → EF. Risks: bleeding, contrast AKI/allergy, radiation, rare MI/stroke/arrhythmia."],
      check: [
        Q("A 72-year-old with stable chest pain and CKD stage 4 needs testing. CCTA or stress test?", "Stress test", ["CCTA", "Calcium score only", "No testing"], "Age over 65 and CKD both favor stress testing over contrast CT."),
        Q("A coronary calcium score of 0 means what?", "No calcified plaque seen, but noncalcified plaque isn't ruled out", ["No CAD at all", "Very high risk", "The test failed"], "The score only sees calcium, so soft plaque can still be present."),
        Q("During a left heart cath, how is the EF estimated?", "Left ventriculogram: dye injected into the LV", ["Calcium score", "Right heart cath", "Duke treadmill score"], "The catheter crosses the aortic valve and dye shows how much the LV ejects.")
      ],
      bank: [
        Q("What is the calcium score mainly used for?", "Deciding on lipid-lowering in primary prevention when unsure", ["Diagnosing acute MI", "Planning a stent", "Measuring EF"], "It refines risk when the statin decision is uncertain.")
      ] }
  ] };
})();
