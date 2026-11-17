/*
  CAD Part I "from zero" lessons (engine: learn-path.js, figures: cardio3-learn.js).
  Same visual step-by-step style as the other Cardio Part 3 paths (Anna, 2026-11-16). Facts follow Stager's deck
  (source-material/cardio-part-3/text/cad-part-1.md) as built into data/cad-part-1.js; anything not on the slides
  is marked "(standard teaching)". Analogies are teaching aids.
  Lesson ids (cad1l-*) are progress keys: never rename. Checks: K(prompt, answer, [wrong], why).
*/
(function () {
  "use strict";
  function K(prompt, answer, wrong, why) { return { prompt: prompt, answer: answer, wrong: wrong, why: why }; }
  function hy(x) { return '<div class="box-hy"><span class="lbl">Key idea</span>' + x + "</div>"; }
  function an(x) { return '<div class="box-mnemonic"><span class="lbl">Picture it</span>' + x + "</div>"; }
  function mn(x) { return '<div class="box-mnemonic"><span class="lbl">Mnemonic</span>' + x + "</div>"; }
  function std(x) { return '<div class="box-fix"><span class="lbl">Standard teaching</span>' + x + "</div>"; }
  function obj(id, mode, label, note) {
    return { label: label, note: note, objective: { course: "cardio-part-3", lecture: "cad-part-1", mode: mode, id: id } };
  }

  var parts = [
    { id: "p1", title: "Part 1 · The words and the risks", blurb: "Atherosclerosis, ASCVD, CAD and IHD sorted out, then who gets it and how much each risk factor matters." },
    { id: "p2", title: "Part 2 · How a plaque is built", blurb: "Watch LDL slip into the wall, get oxidized, get eaten by macrophages and become a plaque. Then why young plaques rupture and old ones narrow." },
    { id: "p3", title: "Part 3 · Supply, demand and what ischemia does", blurb: "Why the heart fills in diastole, why a fast heart rate is a double hit, the causes of ischemia, and stunned vs hibernating vs dead muscle." },
    { id: "p4", title: "Part 4 · How CAD shows up", blurb: "Slow narrowing vs sudden rupture, the classic symptoms, and how women present differently." },
    { id: "p5", title: "Part 5 · Testing for CAD", blurb: "Who to test, the treadmill and Duke score, drug stress, MPI and stress echo, CCTA and calcium score, and the cath with PCI." }
  ];

  var lessons = [
    /* ---------------- 1 ---------------- */
    {
      id: "cad1l-words", part: "p1", title: "The words: process, family, member", goal: "Atherosclerosis is the process, ASCVD the family, CAD the coronary member, IHD the result.",
      pages: [
        { title: "One process, four territories", fig: { type: "tiles", items: [["❤️", "Coronary", "CAD"], ["🧠", "Cerebral", "cerebrovascular disease"], ["🦵", "Peripheral", "PAD"], ["🫀", "Aortic", "aortic atherosclerotic disease"]] },
          html: "<p><strong>Atherosclerosis</strong> is the process: fat plus inflammation in the artery wall builds a <strong>plaque</strong>. When it happens anywhere in the body, the family of diseases is <strong>ASCVD</strong> (atherosclerotic cardiovascular disease).</p>" +
            "<p><strong>CAD</strong> is the coronary member of that family. It is also called <strong>ASHD</strong> (atherosclerotic heart disease).</p>" +
            mn("Process → family → member: atherosclerosis → ASCVD → CAD.") },
        { title: "CAD vs IHD", fig: { type: "flow", steps: ["CAD<br><small>narrowed coronary</small>", "Supply &lt; demand", "IHD<br><small>ischemic heart disease</small>"], hi: 2 },
          html: "<p><strong>IHD</strong> means the heart muscle gets less oxygen than it needs. CAD is the usual cause, but not the only one.</p>" +
            hy("CAD can cause IHD, but ischemia can happen <strong>without</strong> obstructive CAD: vasospasm or emboli.") +
            "<p><strong>CVD</strong> is the widest term: any heart or blood-vessel disease, even one that isn't from plaque.</p>" },
        { title: "When CAD causes symptoms", fig: { type: "flow", steps: ["CAD", "Stable ischemic heart disease<br><small>stable angina</small>", "or ACS<br><small>unstable angina · NSTEMI · STEMI</small>"], hi: 2 },
          html: "<p>Symptomatic CAD splits two ways: <strong>stable angina</strong> (predictable, with exertion) or <strong>acute coronary syndrome</strong> (sudden). This is the CAD tree from slide 41.</p>" +
            "<p>Burden: <strong>18.2 million</strong> Americans have ASCVD, and it rises with age. About 15.9 million deaths worldwide (2023). <strong>35%</strong> of US adults have at least one established risk factor.</p>" }
      ],
      checks: [
        K("Which term is the process of fat and inflammation building plaque in the artery wall?", "Atherosclerosis", ["ASCVD", "IHD", "CVD"], "Atherosclerosis is the process; the others name diseases or results."),
        K("A patient has ischemia from coronary vasospasm with clean arteries. Which term fits?", "IHD without obstructive CAD", ["CAD", "ASCVD", "PAD"], "Ischemia means supply below demand, and spasm can do that without plaque."),
        K("Which is NOT one of the four ASCVD territories?", "Pulmonary arteries", ["Coronary", "Cerebral", "Peripheral"], "ASCVD covers coronary, cerebral, peripheral and aortic disease."),
        K("ACS includes unstable angina, NSTEMI and…", "STEMI", ["Stable angina", "Prinzmetal angina", "Claudication"], "ACS is the sudden branch: UA, NSTEMI and STEMI.")
      ],
      remember: [
        "Atherosclerosis (process) → ASCVD (family: coronary, cerebral, peripheral, aortic) → CAD (coronary member, = ASHD).",
        "IHD = supply &lt; demand; usually CAD, but also spasm or emboli.",
        "Symptomatic CAD = stable angina or ACS (UA, NSTEMI, STEMI).",
        "18.2 million Americans with ASCVD; 35% of adults have a risk factor."
      ],
      practice: [ obj("01-definitions", "learn", "Lecture: the definitions", "The six terms side by side."), obj("01-definitions", "test", "Test: the definitions", "Quick recall.") ]
    },

    /* ---------------- 2 ---------------- */
    {
      id: "cad1l-risk", part: "p1", title: "Risk factors", goal: "Most risk is modifiable, and five factors cause over half of CV deaths.",
      pages: [
        { title: "Three kinds of risk", fig: { type: "grid", cols: ["Modifiable", "Nonmodifiable", "Risk-enhancing"], rows: [["Hypertension", "Male sex", "CKD stage 3 to 5"], ["Dyslipidemia", "Advancing age", "Metabolic syndrome"], ["Diabetes", "Family history of premature CAD", "Chronic inflammatory conditions"], ["Tobacco, obesity, inactivity, poor diet, excess alcohol", "", ""]], hiCol: 0 },
          html: "<p>You can change the left column, so that's where the work is.</p>" +
            mn("Premature family history: male relative &lt; <strong>55</strong>, female relative &lt; <strong>65</strong>. Women get 10 extra years.") },
        { title: "How much they matter", fig: { type: "tiles", items: [["5️⃣", "> 50%", "of CV deaths from HLD, DM, HTN, obesity, smoking"], ["🚬", "2 to 3×", "ASCVD risk from smoking"], ["⏳", "−50% in 2 years", "after quitting"], ["🚶", "Even modest exercise", "lowers risk a lot"]] },
          html: "<p>The four steps to lower risk: <strong>stop tobacco</strong> (assess, counsel, treat), <strong>control BP and lipids</strong> (find them early; lifestyle and medicines), <strong>move and eat well</strong> (sustainable, not all-or-nothing), and <strong>manage diabetes</strong> to the patient's overall risk.</p>" }
      ],
      checks: [
        K("A man's father had an MI at 60. Is that premature family history?", "No, the cutoff for a male relative is under 55", ["Yes, any MI before 65 counts", "Yes, any parent's MI counts", "No, only siblings count"], "Premature means a male relative under 55 or a female relative under 65."),
        K("Which is a risk-enhancing condition rather than a classic modifiable factor?", "CKD stage 3", ["Smoking", "Hypertension", "Physical inactivity"], "CKD 3 to 5, metabolic syndrome and inflammatory disease enhance risk."),
        K("How fast does smoking-related ASCVD risk fall after quitting?", "About 50% within 2 years", ["Not at all for 10 years", "To zero in 1 month", "About 10% after 20 years"], "The risk drops quickly, which is why quitting is worth it at any age."),
        K("The five most common modifiable factors cause about what share of CV mortality?", "More than 50%", ["About 5%", "About 15%", "All of it"], "HLD, DM, HTN, obesity and smoking drive over half of CV deaths.")
      ],
      remember: [
        "Modifiable: HTN, lipids, DM, tobacco, obesity, inactivity, diet, alcohol.",
        "Nonmodifiable: male, age, premature family history (men &lt; 55, women &lt; 65).",
        "Risk-enhancing: CKD 3 to 5, metabolic syndrome, chronic inflammation.",
        "Smoking: 2 to 3× risk, halves within 2 years of quitting."
      ],
      practice: [ obj("02-risk-factors", "test", "Test: risk factors", "Quick recall."), obj("02-risk-factors", "apply", "Apply: risk factor cases", "Short vignettes.") ]
    },

    /* ---------------- 3 ---------------- */
    {
      id: "cad1l-ldl-in", part: "p2", title: "How plaque starts: LDL to fatty streak", goal: "LDL gets stuck, gets oxidized, and macrophages that eat it become foam cells.",
      pages: [
        { title: "1 · LDL gets in and gets stuck", fig: { type: "wall", step: "ldl" },
          html: "<p>This is a slice of artery wall. Blood runs on top. The thin <strong>endothelium</strong> lines it; under that is the <strong>intima</strong>, then the muscular media.</p>" +
            "<p>Atherosclerosis starts when <strong>LDL</strong> enters the intima and is <strong>retained</strong> there.</p>" },
        { title: "2 · Oxidized LDL lights a fire", fig: { type: "wall", step: "oxidize" },
          html: "<p>Trapped LDL gets <strong>oxidized</strong> (modified). The body sees it as damage and starts <strong>inflammation</strong>.</p>" +
            "<p>The endothelium puts out sticky <strong>adhesion molecules</strong>, <strong>VCAM-1</strong> and <strong>ICAM-1</strong>, like hooks that catch passing white cells.</p>" },
        { title: "3 · Monocytes move in", fig: { type: "wall", step: "mono" },
          html: "<p><strong>Monocytes</strong> stick to the hooks, crawl into the intima and become <strong>macrophages</strong>.</p>" },
        { title: "4 · Foam cells and the fatty streak", fig: { type: "wall", step: "foam" },
          html: "<p>Macrophages swallow oxidized LDL until they're stuffed: these are <strong>foam cells</strong>. A collection of foam cells is the <strong>fatty streak</strong>, the earliest lesion. It doesn't narrow the artery yet.</p>" +
            hy("Foam cell = a macrophage stuffed with oxidized LDL.") },
        { title: "5 · Cap and core", fig: { type: "wall", step: "cap" },
          html: "<p>Over years the streak becomes a <strong>fibrous plaque</strong>: a <strong>fibrous cap</strong> over a <strong>lipid-rich necrotic core</strong>, and calcium may follow. Full atheroma takes about <strong>10 to 15 years</strong>, and it grows in bursts, not steadily.</p>" +
            mn("Stuck → oxidized → monocyte → macrophage → foam cell → fatty streak → cap and core.") }
      ],
      checks: [
        K("What is a foam cell?", "A macrophage stuffed with oxidized LDL", ["A platelet full of fibrin", "A smooth muscle cell full of calcium", "An endothelial cell full of nitric oxide"], "Macrophages eat modified LDL until they look foamy."),
        K("Which molecules catch monocytes on the endothelium?", "VCAM-1 and ICAM-1", ["Nitric oxide and prostacyclin", "Troponin I and T", "MMPs"], "Inflamed endothelium expresses adhesion molecules that monocytes stick to."),
        K("What is the earliest visible lesion of atherosclerosis?", "The fatty streak", ["The fibrous cap", "A ruptured plaque", "Calcification"], "Foam cells collect into a fatty streak before any cap forms."),
        K("What happens to LDL right after it is retained in the intima?", "It is oxidized (modified)", ["It is cleared by the liver", "It turns into calcium", "It forms a clot"], "Oxidized LDL is what triggers the inflammation.")
      ],
      remember: [
        "LDL retained in the intima → oxidized → inflammation.",
        "Endothelium expresses VCAM-1 / ICAM-1 → monocytes enter → macrophages.",
        "Macrophage + oxidized LDL = foam cell; many = fatty streak.",
        "Later: fibrous cap over a lipid-rich necrotic core, ± calcium; 10 to 15 years."
      ],
      practice: [ obj("03-atherosclerosis-formation", "learn", "Lecture: how plaque forms", "The deck's cards."), obj("03-atherosclerosis-formation", "test", "Test: plaque formation", "Quick recall.") ]
    },

    /* ---------------- 4 ---------------- */
    {
      id: "cad1l-endothelium", part: "p2", title: "The lining, and where plaques grow", goal: "A sick endothelium loses its NO and PGI2; plaques grow where flow is disturbed.",
      pages: [
        { title: "The endothelium's two protectors", fig: { type: "grid", cols: ["Protector", "What it does", "In endothelial dysfunction"], rows: [["Nitric oxide (NO)", "Vasodilates; blocks platelet adhesion and inflammation", "Falls"], ["Prostacyclin (PGI2)", "Vasodilates; blocks platelet aggregation", "Falls"]], hiCol: 2 },
          html: "<p>A healthy lining keeps the artery relaxed and slippery. When it fails, both protectors fall, so the artery clamps down, platelets stick and inflammation grows. That speeds atherosclerosis.</p>" },
        { title: "Where plaques form", fig: { type: "tiles", items: [["🔀", "Branch points", ""], ["↪️", "Sharp curves", ""], ["〰️", "Irregular shape", ""], ["🌀", "Sudden changes in flow speed or direction", ""]] },
          html: "<p>Endothelial function depends on the local <strong>flow pattern</strong>. Smooth, straight flow protects; turbulent flow at bends and branches doesn't.</p>" +
            hy("Plaques form where flow is disturbed: branches and bends.") },
        { title: "The four-piece artery", fig: [{ type: "artery", stage: "normal" }, { type: "artery", stage: "streak" }, { type: "artery", stage: "plaque" }, { type: "artery", stage: "occluded" }],
          html: "<p>Slide 12's sequence: normal → fatty streak → atheroma narrowing the lumen → hard fibrous plaque, where a clot can fill the lumen.</p>" }
      ],
      checks: [
        K("What happens to nitric oxide in endothelial dysfunction?", "It falls", ["It rises", "It stays the same", "It turns into prostacyclin"], "A failing endothelium makes less of both NO and PGI2."),
        K("Prostacyclin (PGI2) normally does what?", "Vasodilates and blocks platelet aggregation", ["Constricts arteries", "Activates platelets", "Oxidizes LDL"], "PGI2 is one of the lining's two protectors."),
        K("Where does a plaque most likely form?", "At a branch point", ["In a long straight segment with smooth flow", "Only in veins", "Only in capillaries"], "Disturbed flow at branches and bends damages the lining.")
      ],
      remember: [
        "Endothelial dysfunction: ↓ NO and ↓ PGI2 → constriction, sticky platelets, inflammation.",
        "Plaques form at branches, curves, irregular spots, sudden flow changes.",
        "Normal → fatty streak → atheroma → fibrous plaque ± clot."
      ],
      practice: [ obj("03-atherosclerosis-formation", "apply", "Apply: plaque formation", "Short vignettes.") ]
    },

    /* ---------------- 5 ---------------- */
    {
      id: "cad1l-two-plaques", part: "p2", title: "Vulnerable vs stable plaque", goal: "Young thin-capped plaques rupture and cause ACS; old thick-capped plaques narrow and cause angina.",
      pages: [
        { title: "Two plaques, two stories", fig: { type: "capcore" },
          html: "<p>Left: a <strong>young, vulnerable</strong> plaque. Big lipid core, <strong>thin cap</strong>, lots of inflammation (purple). It barely narrows the lumen, so it causes <strong>no symptoms until it ruptures</strong>.</p>" +
            "<p>Right: an <strong>old, stable</strong> plaque. Thick collagen cap, small core, less inflammation. It narrows the lumen, so flow runs short when demand rises.</p>" },
        { title: "How a cap breaks", fig: { type: "flow", steps: ["Inflammatory cells release MMPs", "Cap thins and fissures", "Core contents exposed", "Platelets + fibrin → thrombus", "Acute ischemia or MI"], hi: 3 },
          html: "<p><strong>MMPs</strong> from inflammatory cells digest the cap. When it cracks, the pro-clotting core meets blood.</p>" +
            "<p>Things that speed this up: <strong>hypertension</strong> (shear force), <strong>smoking</strong>, <strong>high cholesterol</strong>, inflammation and oxidative stress.</p>" },
        { title: "Rupture in motion", fig: [{ type: "artery", stage: "rupture" }, { type: "artery", stage: "clot" }],
          html: hy("Young thin-capped plaque → <strong>rupture</strong> → ACS (UA, NSTEMI, STEMI) or stroke. Old thick-capped plaque → <strong>stenosis</strong> → exertional angina or claudication.") }
      ],
      checks: [
        K("Which plaque is most likely to rupture?", "A young plaque with a thin cap and large lipid core", ["An old plaque with a thick collagen cap", "A calcified plaque with a small core", "A fatty streak with no cap"], "A thin cap over a big inflamed core breaks easily."),
        K("What thins the fibrous cap?", "MMPs from inflammatory cells", ["Nitric oxide", "Calcium deposits", "Prostacyclin"], "Matrix metalloproteinases digest the cap's collagen."),
        K("A stable plaque that narrows the lumen by 80% most likely causes what?", "Exertional angina", ["STEMI with no warning", "Sudden stroke from rupture", "No symptoms ever"], "A fixed narrowing can't raise flow when demand rises."),
        K("Why does a vulnerable plaque often cause no symptoms beforehand?", "It barely narrows the lumen", ["It is always calcified", "It lives in veins", "It blocks flow completely"], "Flow is normal until the cap ruptures and a clot forms.")
      ],
      remember: [
        "Vulnerable (young): thin cap, big core, inflamed, little narrowing → rupture → ACS or stroke.",
        "Stable (old): thick cap, small core, narrows lumen → exertional angina, claudication.",
        "MMPs thin the cap → fissure → platelets + fibrin → thrombus.",
        "Speeds it up: HTN, smoking, high cholesterol, inflammation."
      ],
      practice: [ obj("04-stable-vs-vulnerable", "test", "Test: stable vs vulnerable", "Quick recall."), obj("04-stable-vs-vulnerable", "apply", "Apply: which plaque?", "Short vignettes.") ]
    },

    /* ---------------- 6 ---------------- */
    {
      id: "cad1l-remodeling", part: "p2", title: "Remodeling: out or in", goal: "Most arteries bulge outward to make room, which hides a big plaque.",
      pages: [
        { title: "Watch the plaque grow", fig: { type: "remodel" },
          html: "<p>The gold is plaque, the dark circle the lumen. In <strong>positive remodeling</strong> the wall bulges <strong>outward</strong> and the lumen stays near normal. In <strong>negative remodeling</strong> the artery shrinks <strong>inward</strong> and the lumen narrows.</p>" },
        { title: "Why it matters", fig: { type: "grid", cols: ["", "Positive", "Negative"], rows: [["Wall", "Bulges outward", "No dilation; shrinks inward"], ["Lumen", "About normal", "Narrowed"], ["How common", "Most common", "Less common; many positive lesions turn negative"], ["Symptoms", "Less likely early; can delay angina", "Earlier angina"]] },
          html: hy("Positive remodeling lets a <strong>large plaque hide</strong> behind a normal-looking lumen.") }
      ],
      checks: [
        K("Which remodeling is most common?", "Positive (outward)", ["Negative (inward)", "Neither; arteries never remodel", "Both equally"], "Most arteries first expand outward around the plaque."),
        K("Why can positive remodeling delay angina?", "The lumen stays near normal size", ["The plaque shrinks", "The artery fills with collaterals", "The cap gets thinner"], "Flow isn't limited while the wall makes room."),
        K("Negative remodeling tends to cause what?", "Earlier angina", ["No symptoms ever", "A bigger lumen", "Immediate rupture"], "The artery narrows inward, so flow is limited sooner.")
      ],
      remember: [
        "Positive = wall bulges out, lumen OK, most common, delays symptoms.",
        "Negative = artery shrinks in, lumen narrows, earlier angina.",
        "Many positive lesions turn negative as the plaque grows."
      ],
      practice: [ obj("05-remodeling", "test", "Test: remodeling", "Quick recall.") ]
    },

    /* ---------------- 7 ---------------- */
    {
      id: "cad1l-supply-demand", part: "p3", title: "Supply and demand", goal: "The heart fills its arteries in diastole, so a fast heart rate raises demand and cuts supply.",
      pages: [
        { title: "A needy muscle", fig: { type: "tiles", items: [["⚖️", "0.3%", "of body weight"], ["🫁", "7%", "of resting O₂ use"], ["🧹", "Flow also removes", "CO₂, lactic acid, H⁺"]] },
          html: "<p>The heart is tiny but greedy. Its oxygen comes only through the coronaries, so any shortfall shows up fast.</p>" },
        { title: "The coronaries fill in diastole", fig: { type: "diastole" },
          html: "<p>When the heart squeezes (systole) it <strong>crushes its own vessels</strong>, so coronary flow happens mostly in <strong>diastole</strong>. Drag the heart rate up: the beat shortens, and almost all of that comes out of diastole.</p>" +
            hy("A fast heart rate is a <strong>double hit</strong>: more demand, less filling time.") },
        { title: "Exercise with normal vs narrowed arteries", fig: { type: "balance", tip: "demand", supply: ["narrowed artery", "can't open further"], demand: ["↑ heart rate", "↑ contractility"], verdict: "Demand > supply → ischemia → angina" },
          html: "<p>With exercise, heart rate and contractility rise, so demand rises. <strong>Normal</strong> coronaries dilate and flow rises to match.</p>" +
            "<p>A <strong>flow-limiting stenosis</strong> carries enough at rest but <strong>can't increase</strong> flow. Supply falls behind demand: ischemia, then angina.</p>" }
      ],
      checks: [
        K("When does most coronary blood flow happen?", "Diastole", ["Systole", "Equally in both", "Only during exercise"], "Contracting muscle squeezes the coronaries shut in systole."),
        K("Why does tachycardia worsen ischemia?", "It raises demand and shortens diastolic filling time", ["It lowers demand", "It lengthens diastole", "It dilates every stenosis"], "Faster beats need more oxygen and leave less time to fill."),
        K("A 70% stenosis causes no symptoms at rest but angina on stairs. Why?", "Flow is enough at rest but can't rise with demand", ["The plaque ruptures each time", "Stairs cause vasospasm only", "Diastole gets longer on stairs"], "A fixed narrowing limits the increase, not the resting flow."),
        K("The heart uses about what share of resting oxygen consumption?", "7%", ["0.3%", "25%", "50%"], "It is 0.3% of body weight but uses 7% of resting oxygen.")
      ],
      remember: [
        "Heart: 0.3% of weight, 7% of resting O₂.",
        "Coronary flow is mostly in diastole.",
        "Fast HR = ↑ demand + ↓ diastolic time.",
        "Stenosis: fine at rest, can't increase flow → ischemia with exertion."
      ],
      practice: [ obj("06-supply-demand", "test", "Test: supply and demand", "Quick recall."), obj("06-supply-demand", "apply", "Apply: supply and demand", "Short vignettes.") ]
    },

    /* ---------------- 8 ---------------- */
    {
      id: "cad1l-other-causes", part: "p3", title: "Sudden ischemia and the non-plaque causes", goal: "A small plaque can cause a big event, and ischemia also comes from spasm and emboli.",
      pages: [
        { title: "Small plaque, big event", fig: { type: "flow", steps: ["Small plaque, no significant stenosis", "Rupture or erosion under stress", "Platelets + coagulation cascade", "Thrombus blocks flow", "Acute ischemia, maybe MI"], hi: 2 },
          html: "<p>Ischemia isn't only a big plaque that can't dilate. A <strong>small, non-narrowing plaque</strong> can suddenly fissure, especially when the vessel is under stress, and a clot does the blocking.</p>" },
        { title: "Not from atherosclerosis", fig: [{ type: "artery", stage: "spasm" }, { type: "tiles", items: [["🌀", "Vasospasm", "Prinzmetal angina; twitchy arterioles or sympathomimetic drugs"], ["🧬", "Congenital lesions", "uncommon"], ["🦠", "Emboli", "septic vegetations from endocarditis"]] }],
          html: hy("Ischemia without plaque: <strong>spasm</strong> (Prinzmetal, cocaine-type drugs), <strong>congenital</strong> lesions, <strong>emboli</strong> from endocarditis.") }
      ],
      checks: [
        K("A young man using an illicit sympathomimetic has chest pain with clean coronaries. Likely mechanism?", "Coronary vasospasm", ["Plaque rupture", "Positive remodeling", "Congenital AV block"], "Sympathomimetics cause intense vasoconstriction without any plaque."),
        K("Can a plaque that causes no significant stenosis cause an MI?", "Yes, if it ruptures and a clot forms", ["No, only tight stenoses cause MI", "Only if it is calcified", "Only in women"], "Rupture exposes clot-promoting material and a thrombus blocks flow."),
        K("Which is a non-atherosclerotic cause of ischemia in endocarditis?", "Septic emboli", ["Fatty streaks", "Foam cells", "Negative remodeling"], "Vegetations can break off and plug a coronary artery.")
      ],
      remember: [
        "Rupture or erosion of a small plaque → thrombus → acute ischemia or MI.",
        "Non-plaque ischemia: vasospasm (Prinzmetal, sympathomimetics), congenital lesions, emboli (endocarditis)."
      ],
      practice: [ obj("07-acute-and-other-ischemia", "test", "Test: other causes", "Quick recall.") ]
    },

    /* ---------------- 9 ---------------- */
    {
      id: "cad1l-muscle-fate", part: "p3", title: "What ischemia does to muscle", goal: "Ischemic muscle stiffens and weakens; it can be stunned, hibernating or dead.",
      pages: [
        { title: "Inside ischemic muscle", fig: { type: "flow", steps: ["Too little O₂", "Anaerobic metabolism → lactic acid", "Local acidosis", "Stiff (↓ compliance) and weak (↓ contractility)", "Wall motion abnormality on echo + EKG changes"], hi: 3, vertical: true },
          html: "<p>Without oxygen, cells switch to anaerobic metabolism. The acid makes the muscle relax poorly and squeeze poorly. That's what an <strong>echo</strong> (wall motion) and <strong>EKG</strong> pick up.</p>" },
        { title: "Stunned, hibernating, dead", fig: { type: "grid", cols: ["", "Stunning", "Hibernation", "Infarction"], rows: [["Cause", "Brief ischemia, then reperfusion", "Chronic or repeated low flow", "Prolonged severe ischemia"], ["Flow now", "Restored", "Still low", "Lost long enough to kill"], ["Muscle", "Alive", "Alive, turned down to adapt", "Necrotic"], ["Recovery", "On its own, hours to days", "After revascularization", "Never"]] },
          html: mn("<strong>Stunned</strong> = knocked out, wakes up on its own. <strong>Hibernating</strong> = asleep until you bring food (blood) back. <strong>Infarcted</strong> = dead.") +
            "<p><strong>Dobutamine stress echo</strong> can test whether hibernating muscle is still alive (viability).</p>" }
      ],
      checks: [
        K("Muscle that is still weak days after a brief occlusion was opened, and then recovers on its own, is…", "Stunned", ["Hibernating", "Infarcted", "Remodeled"], "Stunning follows ischemia with reperfusion and recovers without treatment."),
        K("Chronic low flow; the muscle turns down its squeeze but is alive. Which?", "Hibernating", ["Stunned", "Infarcted", "Vasospastic"], "Hibernating muscle adapts to low flow and can recover after revascularization."),
        K("Which test can show that hibernating muscle is viable?", "Dobutamine stress echo", ["Calcium score", "Lipid panel", "Resting EKG alone"], "Dobutamine makes viable muscle contract better, showing it's alive."),
        K("What causes the poor relaxation of ischemic muscle?", "Local acidosis from lactic acid", ["Too much oxygen", "High nitric oxide", "Calcium in the plaque"], "Anaerobic metabolism makes acid that stiffens the muscle.")
      ],
      remember: [
        "Ischemia → lactate → acidosis → ↓ compliance and ↓ contractility → wall motion and EKG changes.",
        "Stunned: reperfused, recovers alone. Hibernating: still low flow, recovers after revascularization. Infarcted: dead.",
        "Dobutamine stress echo tests viability."
      ],
      practice: [ obj("08-ischemia-effects", "test", "Test: stunning vs hibernation", "Quick recall."), obj("08-ischemia-effects", "apply", "Apply: which muscle?", "Short vignettes.") ]
    },

    /* ---------------- 10 ---------------- */
    {
      id: "cad1l-presentation", part: "p4", title: "How CAD presents", goal: "Slow narrowing gives gradual exertional symptoms; rupture gives sudden ACS.",
      pages: [
        { title: "Gradual vs abrupt", fig: { type: "grid", cols: ["", "Chronic narrowing", "Acute plaque disruption"], rows: [["Mechanism", "Plaque slowly grows", "Rupture → thrombosis"], ["Symptoms", "Gradual: exertion first, later at rest", "Abrupt, no warning"], ["Name", "Stable ischemic heart disease (angina)", "ACS: UA, NSTEMI, STEMI"]] },
          html: "<p>Same disease, two speeds. Which one you see depends on the plaque type from Part 2.</p>" },
        { title: "The classic symptoms", fig: { type: "tiles", items: [["💢", "Chest pain", "substernal, tight, dull; to left shoulder/arm"], ["😮‍💨", "Dyspnea", "worse with exertion"], ["🤢", "Nausea", ""], ["💫", "Lightheaded", ""], ["💦", "Diaphoresis", ""]] },
          html: "<p>Ischemic chest pain lasts <strong>minutes to hours</strong>.</p>" +
            hy("Pain that gets worse with a <strong>deep breath</strong> or when you <strong>press the sternum</strong> points to another cause (pleura or chest wall).") }
      ],
      checks: [
        K("Abrupt chest pain with no prior angina most likely comes from what?", "Plaque rupture with thrombosis", ["Slow plaque growth", "Positive remodeling", "Stable angina"], "Rupture is sudden; slow growth gives warning symptoms with exertion."),
        K("Which feature argues AGAINST ischemic chest pain?", "Worse when you press on the sternum", ["Substernal tightness", "Radiation to the left arm", "Comes with exertion"], "Reproducible chest wall pain points to a musculoskeletal cause."),
        K("Chronic coronary narrowing first causes symptoms when?", "With exertion", ["Only at rest", "Only at night", "Only after meals"], "Demand rises with exertion, and the narrowed artery can't keep up.")
      ],
      remember: [
        "Chronic narrowing → stable angina (exertion first). Rupture → ACS (sudden).",
        "Classic: substernal, tight, dull, to left arm; dyspnea, nausea, lightheaded, sweaty.",
        "Worse with deep breath or sternal pressure → think another cause."
      ],
      practice: [ obj("09-presentation", "test", "Test: presentation", "Quick recall.") ]
    },

    /* ---------------- 11 ---------------- */
    {
      id: "cad1l-women", part: "p4", title: "Ischemia in women", goal: "Women often have fatigue, sleep trouble and breathlessness, weeks ahead, and chest pain only 30% of the time.",
      pages: [
        { title: "Different words for the same disease", fig: { type: "grid", cols: ["Women", "Men"], rows: [["Jaw pain", "Sweating"], ["Shortness of breath", "Chest pain or tightness"], ["Chest discomfort", "Heartburn"], ["Backache", "Nausea or vomiting"], ["Extreme fatigue and nausea", ""]], hiCol: 0 },
          html: "<p>Women report ischemic symptoms, but clinicians are <strong>less likely to recognize them</strong> as cardiac.</p>" },
        { title: "515 women with MI", fig: { type: "tiles", items: [["😴", "Unusual fatigue", "most common"], ["🛏️", "Sleep disturbance", ""], ["😮‍💨", "Shortness of breath", ""], ["⏳", "78% had a prodrome", "symptoms > 1 month before"], ["💢", "Chest discomfort: only 30%", "aching, tight, burning, full, tingling"]] },
          html: hy("Women: fatigue, sleep trouble, SOB, indigestion, anxiety, often <strong>weeks ahead</strong>; chest pain in only <strong>30%</strong>.") }
      ],
      checks: [
        K("In the 515-woman MI study, what share had chest discomfort?", "About 30%", ["About 90%", "All of them", "None"], "Most women did not report the classic chest pain."),
        K("What was the most frequent symptom before MI in women?", "Unusual fatigue", ["Crushing chest pain", "Fever", "Leg swelling"], "Fatigue topped the list, often weeks before the MI."),
        K("What share of the women had warning symptoms more than a month before?", "78%", ["5%", "30%", "100%"], "Most had a prodrome, which is a chance to catch it early.")
      ],
      remember: [
        "Women: jaw pain, SOB, back pain, extreme fatigue, nausea.",
        "78% have a prodrome > 1 month; chest discomfort in only 30%.",
        "Often missed by clinicians: think of it."
      ],
      practice: [ obj("10-women", "test", "Test: women", "Quick recall."), obj("10-women", "apply", "Apply: women's cases", "Short vignettes.") ]
    },

    /* ---------------- 12 ---------------- */
    {
      id: "cad1l-who-to-test", part: "p5", title: "Who gets tested", goal: "Test symptomatic people only, and let the pretest likelihood pick the test.",
      pages: [
        { title: "Carl", fig: { type: "tiles", items: [["👴", "67-year-old man", "establishing care"], ["🩸", "HTN + diabetes", "20 years"], ["🌿", "Chest tightness + SOB", "doing yard work, 4 months"], ["🛋️", "Nothing at rest", ""]] },
          html: "<p>Start with <strong>risk factors</strong>: Carl has age, male sex, HTN and diabetes. Still ask about smoking, lipids, family history, weight, activity, diet, alcohol and CKD.</p>" +
            hy("Ischemia tests are for <strong>symptomatic</strong> people with significant risk, <strong>not</strong> routine screening.") },
        { title: "Pick the test by likelihood", fig: { type: "pretest" },
          html: "<p>The <strong>2024 ESC RF-CL model</strong> estimates the chance of obstructive CAD from <strong>age and sex</strong>, <strong>symptom type</strong> and the <strong>number of risk factors</strong> (smoking, lipids, HTN, diabetes, family history).</p>" +
            mn("5 and 15: under 5 skip, 5 to 15 a light test, over 15 real imaging.") },
        { title: "Already known CAD", fig: { type: "flow", steps: ["Known CAD + symptoms", "Optimize risk factors + antianginals", "Symptoms persist → stress imaging (or CCTA/PET/CMR if nonobstructive)"], hi: 1 },
          html: "<p>With known CAD, treat first. If symptoms resolve, <strong>no more testing</strong>.</p>" }
      ],
      checks: [
        K("An asymptomatic 50-year-old asks for a stress test 'to be safe.' Appropriate?", "No, ischemia testing is for symptomatic patients", ["Yes, everyone over 50 should have one", "Yes, if he exercises", "Only a CCTA is allowed"], "Tests for ischemia are not routine screening of the general population."),
        K("No known CAD, pretest likelihood 25%. Next test?", "Stress test with imaging or CCTA", ["No testing", "Calcium score only", "Repeat the H&P in a year"], "Above 15% you want a real picture."),
        K("No known CAD, pretest likelihood 3%. Next step?", "Testing not usually indicated", ["Coronary angiogram", "Stress MPI", "CCTA"], "Under 5% a test rarely helps."),
        K("Which is NOT an input of the 2024 ESC RF-CL model?", "Troponin level", ["Age and sex", "Symptom characteristics", "Number of risk factors"], "The model uses age, sex, symptoms and risk-factor count.")
      ],
      remember: [
        "Test only symptomatic patients with risk.",
        "Pretest likelihood &lt; 5% no test; 5 to 15% CAC, exercise ECG or none; &gt; 15% stress imaging or CCTA.",
        "Known CAD: optimize meds first; test if symptoms persist."
      ],
      practice: [ obj("11-evaluation", "test", "Test: who to test", "Quick recall."), obj("11-evaluation", "apply", "Apply: pick the test", "Short vignettes.") ]
    },

    /* ---------------- 13 ---------------- */
    {
      id: "cad1l-treadmill", part: "p5", title: "The treadmill and the Duke score", goal: "Exercise test for patients who can walk and have a readable EKG; score it with Duke.",
      pages: [
        { title: "Bruce protocol", fig: { type: "bruce", hi: 3 },
          html: "<p>For patients who can <strong>exercise adequately</strong> and have a <strong>resting EKG you can read for ischemia</strong>. EKG and BP are watched while speed and incline go up every <strong>3 minutes</strong>.</p>" },
        { title: "Duke Treadmill Score", fig: { type: "duke", t: 8, st: 1 },
          html: "<p>Three things go in: <strong>minutes</strong> of exercise, the biggest <strong>ST deviation</strong> (mm), and the <strong>angina index</strong> (0 none, 1 nonlimiting, 2 stops the test).</p>" +
            "<p>≥ +5 low risk; −10 to +4 intermediate (stress imaging or CCTA); ≤ −11 high (consider cath).</p>" },
        { title: "The sample report", fig: { type: "eq", terms: [["8", "min", ""], "−", ["5 × 1", "mm ST", ""], "−", ["4 × 1", "angina", "nonlimiting"], "=", ["−1", "", "intermediate"]] },
          html: "<p>58-year-old man, 8 minutes, 10 METs, 93% of max HR. Mild pressure during exercise, gone in recovery. <strong>1 mm horizontal ST depression in V4 to V6</strong> at peak.</p>" +
            "<p>Score −1 = intermediate → consider stress imaging or CCTA.</p>" }
      ],
      checks: [
        K("Who should NOT get a plain exercise treadmill test?", "A patient whose resting EKG can't be read for ischemia", ["A patient who can walk on a treadmill", "A patient with exertional chest pain", "A patient with intermediate risk"], "The treadmill relies on reading ST changes on the EKG."),
        K("How often does the Bruce protocol increase speed and incline?", "Every 3 minutes", ["Every 30 seconds", "Every 10 minutes", "Only once"], "Each Bruce stage lasts 3 minutes."),
        K("Duke score −14 means what?", "High risk: consider invasive angiography", ["Low risk: no more testing", "Intermediate: repeat in a year", "The test was invalid"], "−11 or lower is high risk."),
        K("Exercise 9 min, ST depression 0, no angina. Duke score?", "+9", ["−9", "0", "+4"], "9 − (5 × 0) − (4 × 0) = 9, which is low risk.")
      ],
      remember: [
        "Treadmill: can exercise + readable resting EKG; Bruce stages every 3 min.",
        "Duke = minutes − 5 × ST mm − 4 × angina index (standard teaching formula).",
        "≥ +5 low; −10 to +4 intermediate → imaging or CCTA; ≤ −11 high → cath."
      ],
      practice: [ obj("12-exercise-stress", "test", "Test: treadmill and Duke", "Quick recall."), obj("12-exercise-stress", "apply", "Apply: score it", "Short vignettes.") ]
    },

    /* ---------------- 14 ---------------- */
    {
      id: "cad1l-drug-stress", part: "p5", title: "Drug stress and choosing the test", goal: "Vasodilators make a flow difference; dobutamine makes demand. Four rules pick the test.",
      pages: [
        { title: "Two ways to stress without walking", fig: { type: "quad", x: ["Coronary vasodilators", "Raise O₂ demand"], y: ["Drugs", "How"], cells: [["Adenosine, regadenoson (most common), dipyridamole", "", "blue"], ["Dobutamine", "stress echo", "ok"], ["Healthy arteries dilate more than the narrowed one: a flow difference", "", "blue"], ["↑ HR and contractility, like exercise", "", "ok"]] },
          html: hy("Vasodilators create a flow difference (steal). Dobutamine creates demand.") },
        { title: "The four rules", fig: { type: "tiles", items: [["1", "Acute MI or ongoing ischemia", "no stress test at all"], ["2", "Exercise is preferred", "if the patient can do it"], ["3", "LBBB or ventricular pacing", "pharmacologic stress + imaging"], ["4", "No vasodilators with", "low BP, high-degree AV block, sick sinus, active wheezing"]] },
          html: std("Rule 4 makes sense: adenosine-type drugs slow the sinus and AV nodes, drop BP and cause bronchospasm.") +
            "<p>Baseline ST depression ≥ 1 mm, WPW, LVH with ST-T changes or digoxin → exercise <strong>with imaging</strong>. Clean EKG and low risk → plain exercise test.</p>" },
        { title: "When not to exercise", fig: { type: "grid", cols: ["Absolute", "Relative"], rows: [["MI within 2 days, ongoing UA", "Known left main stenosis"], ["Unstable arrhythmia, decompensated HF", "Moderate/severe AS, HCM with big gradient"], ["Symptomatic severe AS, active endocarditis", "Advanced heart block, fast atrial rhythms"], ["Acute PE/DVT, myocarditis, pericarditis, dissection", "SBP &gt; 200 or DBP &gt; 110, recent stroke"]] },
          html: "<p>The absolute list is anything acute and dangerous. The relative list is things exercise could tip over.</p>" }
      ],
      checks: [
        K("A patient with asthma who is actively wheezing needs a stress test and can't walk. Which drug?", "Dobutamine", ["Adenosine", "Regadenoson", "Dipyridamole"], "Vasodilators can cause bronchospasm, so active wheezing rules them out."),
        K("Baseline LBBB. Which stress test?", "Pharmacologic stress with imaging", ["Plain treadmill EKG", "No test is possible", "Exercise without imaging"], "LBBB makes the ST segments unreadable, so you need imaging and drug stress."),
        K("How do vasodilators reveal a stenosis?", "Healthy arteries dilate more, creating a flow difference", ["They raise heart rate like exercise", "They dissolve the plaque", "They block the AV node"], "The narrowed artery can't dilate further, so its territory gets relatively less tracer."),
        K("Which is an absolute contraindication to exercise testing?", "Acute MI within 2 days", ["Known left main stenosis", "Recent TIA", "SBP of 190"], "Any acute, unstable cardiac state rules out stressing the heart.")
      ],
      remember: [
        "Vasodilators (adenosine, regadenoson, dipyridamole) → flow difference; dobutamine → demand.",
        "Rules: no stress in acute MI; exercise preferred; LBBB/paced → drug + imaging; no vasodilator with low BP, AV block, sick sinus, wheezing.",
        "Absolute: acute MI &lt; 2 days, unstable angina, unstable arrhythmia, symptomatic severe AS, decompensated HF, PE, myocarditis, dissection."
      ],
      practice: [ obj("13-pharm-stress", "test", "Test: drug stress", "Quick recall."), obj("13-pharm-stress", "apply", "Apply: choose the test", "Short vignettes.") ]
    },

    /* ---------------- 15 ---------------- */
    {
      id: "cad1l-mpi-echo", part: "p5", title: "MPI, stress echo, and who should be tested", goal: "Ischemia = dark on stress, filled at rest. Know who should and shouldn't get a stress test.",
      pages: [
        { title: "Reading MPI", fig: [{ type: "perfusion", state: "ischemia" }, { type: "perfusion", state: "scar" }],
          html: "<p>A radioactive tracer goes in during stress, a camera takes pictures, and they're compared with rest. Useful with LBBB, inability to exercise, or when you need more detail.</p>" +
            hy("<strong>Reversible</strong> (dark on stress, filled at rest) = ischemia. <strong>Fixed</strong> (dark both times) = scar (standard teaching). The only contraindication: <strong>pregnancy</strong>.") },
        { title: "Stress echo", fig: { type: "flow", steps: ["Resting echo", "Stress: exercise or dobutamine", "New wall motion abnormality = ischemia"], hi: 2 },
          html: "<p>Dobutamine stress echo can also test the <strong>viability</strong> of hibernating muscle.</p>" },
        { title: "Should this patient get one?", fig: { type: "grid", cols: ["Appropriate", "Inappropriate"], rows: [["Angina-like symptoms, intermediate/high probability", "Active chest pain or ACS"], ["Recent UA/NSTEMI treated without a cath", "&lt; 5 yr after CABG or &lt; 2 yr after stent, no new symptoms"], ["Known CAD, new or worse symptoms", "Asymptomatic"], ["New HFrEF when no cath is planned", "Decompensated HF, uncontrolled arrhythmia, critical AS, PE, endocarditis"]] },
          html: mn("After revascularization: <strong>CABG 5, stent 2</strong> years of no routine testing without new symptoms.") }
      ],
      checks: [
        K("MPI shows a defect on stress images that fills in at rest. Meaning?", "Reversible ischemia", ["Old scar", "Normal study", "Artifact from pregnancy"], "Tracer can reach the area at rest but not under stress."),
        K("What is the only contraindication to MPI?", "Pregnancy", ["LBBB", "Inability to exercise", "Diabetes"], "The radioactive tracer is the problem, not the heart."),
        K("A patient had a stent 1 year ago and feels fine. Stress test?", "No, under 2 years after PCI without new symptoms", ["Yes, every year after a stent", "Yes, but only CCTA", "Only if he is over 65"], "Routine testing after PCI without symptoms isn't appropriate for 2 years."),
        K("What does a stress echo look for?", "New wall motion abnormalities", ["Tracer uptake", "Calcium score", "Troponin rise"], "Ischemic muscle moves poorly when stressed.")
      ],
      remember: [
        "MPI: dark on stress + filled at rest = ischemia; dark both = scar. Only contraindication: pregnancy.",
        "Stress echo: new wall motion abnormality; dobutamine tests viability.",
        "Not appropriate: active ACS, asymptomatic, &lt; 5 yr after CABG or &lt; 2 yr after stent without symptoms."
      ],
      practice: [ obj("14-mpi-stress-echo", "test", "Test: MPI and echo", "Quick recall."), obj("15-stress-appropriate", "apply", "Apply: should they be tested?", "Short vignettes.") ]
    },

    /* ---------------- 16 ---------------- */
    {
      id: "cad1l-ccta-cac", part: "p5", title: "CCTA and the calcium score", goal: "CCTA shows the plaque and lumen with contrast; CAC counts calcium without it.",
      pages: [
        { title: "Anatomy vs function", fig: { type: "quad", x: ["CCTA", "Stress test"], y: ["Shows", "Best for"], cells: [["The arteries: calcified and soft plaque, narrowing", "anatomic", "blue"], ["Whether muscle gets enough blood", "functional", "ok"], ["Stable chest pain, no known CAD, intermediate likelihood", "", "blue"], ["Calcium, age &gt; 65, CKD", "", "ok"]] },
          html: "<p>CCTA uses <strong>IV contrast</strong> and radiation. Heavy calcium or an irregular rhythm blurs it, and it can find incidental things.</p>" +
            hy("Prefer <strong>stress testing</strong> over CCTA with known heavy calcium, <strong>age &gt; 65</strong> (likely calcium) or <strong>CKD</strong> (contrast AKI).") },
        { title: "The four CCTA results", fig: { type: "bars", items: [["A · No plaque", 4, "reassure", "good"], ["B · < 50%", 35, "prevention meds + lifestyle", "good"], ["C · 50 to 69%", 60, "meds; CT-FFR if proximal", "ok"], ["D · Obstructive", 90, "anti-ischemic therapy ± revascularization", "bad"]], note: "Bar length shows the narrowing." },
          html: "<p>Everyone with plaque gets <strong>prevention</strong>. Only the tighter lesions earn a closer look.</p>" },
        { title: "Calcium score (CAC)", fig: { type: "bars", items: [["Score 0", 2, "no calcified plaque seen", "good"], ["29", 12, "", "ok"], ["250", 45, "", "ok"], ["1,200", 100, "lots of calcium", "bad"]], note: "Slide 75's examples. Higher score = more calcium = higher risk." },
          html: "<p><strong>Noncontrast</strong> CT, reported as an <strong>Agatston</strong> score. Used to refine prevention when it's unclear whether to start a statin.</p>" +
            hy("CAC 0 means no calcified plaque, but it does <strong>not</strong> rule out soft plaque or CAD.") }
      ],
      checks: [
        K("What does CCTA show that a calcium score cannot?", "Soft (noncalcified) plaque and the lumen", ["Only calcium", "Wall motion", "Tracer uptake"], "CCTA uses contrast, so it lights up the lumen and soft plaque."),
        K("A 72-year-old with CKD needs noninvasive testing. Better choice?", "Stress testing over CCTA", ["CCTA over stress testing", "No test is possible", "A calcium score to diagnose angina"], "Age over 65 means calcium, and CKD raises contrast AKI risk."),
        K("CAC score of 0 means what?", "No calcified plaque, but soft plaque is still possible", ["No CAD for sure", "Severe disease", "The test failed"], "Calcium scoring can't see noncalcified plaque."),
        K("CCTA shows nonobstructive plaque under 50%. Management?", "Preventive medicines and lifestyle", ["Urgent cath", "CABG", "No follow-up at all"], "Any plaque earns prevention, but it isn't flow-limiting.")
      ],
      remember: [
        "CCTA = anatomic, with contrast; stress test = functional.",
        "Prefer stress testing with heavy calcium, age &gt; 65, CKD.",
        "CCTA results: none → reassure; &lt; 50% → prevention; 50 to 69% → meds ± CT-FFR; obstructive → anti-ischemic ± revascularization.",
        "CAC: noncontrast, Agatston; 0 doesn't exclude soft plaque."
      ],
      practice: [ obj("16-ccta", "test", "Test: CCTA", "Quick recall."), obj("17-cac", "test", "Test: calcium score", "Quick recall.") ]
    },

    /* ---------------- 17 ---------------- */
    {
      id: "cad1l-cath-pci", part: "p5", title: "The cath and PCI", goal: "Angiography is the reference standard, and it can fix what it finds.",
      pages: [
        { title: "Getting in", fig: [{ type: "access", mode: "radial" }, { type: "access", mode: "femoral" }],
          html: "<p>A small sheath goes into the <strong>radial</strong> (wrist) or <strong>femoral</strong> (groin) artery. A catheter is threaded to the coronary openings under fluoroscopy, contrast is injected and a short film is made.</p>" +
            hy("Invasive angiography is the <strong>reference standard</strong> for coronary anatomy, and it's both diagnostic and therapeutic.") },
        { title: "Reading the report", fig: { type: "coronary", blocks: [["ladp", "60%"], ["lcx", "100%"], ["rcam", "30%"]] },
          html: "<p>The report lists each vessel's narrowing in %: here left main 30% mid (not drawn), LAD 60% ostial (and 50% distal), <strong>LCx totally occluded</strong> mid-vessel, RCA 30%.</p>" +
            "<p>At the end, a <strong>left ventriculogram</strong>: the catheter crosses the aortic valve, dye goes into the LV, and you get the <strong>EF</strong> and left heart pressure. About an hour; then pressure on the site or a closure device.</p>" },
        { title: "PCI: balloon, then stent", fig: [{ type: "artery", stage: "balloon" }, { type: "artery", stage: "stent" }],
          html: "<p>If a tight narrowing is found, <strong>PCI</strong> (also called PTCA) can happen in the same procedure: a balloon crushes the plaque into the wall, and a <strong>stent</strong> holds the artery open.</p>" +
            "<p>Risks: bleeding or hematoma at the site, <strong>contrast AKI</strong> or allergy, radiation, and uncommon arrhythmia, MI or stroke.</p>" }
      ],
      checks: [
        K("What is the reference standard for defining coronary anatomy?", "Invasive coronary angiography", ["CCTA", "Calcium score", "Stress echo"], "Catheter angiography shows the lumen directly and allows treatment."),
        K("What does the left ventriculogram measure?", "EF and left heart pressure", ["Calcium score", "Troponin", "Right atrial pressure"], "Dye in the LV shows how much it ejects."),
        K("What does the stent do in PCI?", "Holds the artery open after the balloon", ["Dissolves the clot", "Bypasses the artery", "Measures the pressure"], "The balloon opens the vessel; the stent keeps it open."),
        K("Which is a known risk of coronary angiography?", "Contrast-associated AKI", ["Hypercalcemia", "Pneumothorax every time", "Hypoglycemia"], "Iodinated contrast can injure the kidneys.")
      ],
      remember: [
        "Access: radial (wrist) or femoral (groin); contrast + fluoroscopy.",
        "Reference standard; diagnostic and therapeutic.",
        "Report: % narrowing by vessel; ventriculogram gives EF.",
        "PCI = balloon + stent. Risks: bleeding, contrast AKI/allergy, radiation, rare MI/stroke/arrhythmia."
      ],
      practice: [ obj("18-angiography-pci", "test", "Test: cath and PCI", "Quick recall."), obj("18-angiography-pci", "apply", "Apply: cath cases", "Short vignettes.") ]
    }
  ];

  window.CARDIO3_LEARN = window.CARDIO3_LEARN || {};
  window.CARDIO3_LEARN["cad-part-1"] = {
    prefix: "cad1l", short: "CAD Part I", heading: "Coronary artery disease from zero",
    kicker: "CAD foundations, step by step",
    card: "Watch a plaque being built, see why young plaques rupture and old ones narrow, drag the heart rate to see diastole shrink, then every test from the treadmill to the cath. Short lessons with moving pictures and a few easy checks.",
    intro: "Seventeen short lessons, one idea per page, each with a picture. Start with lesson 1: the plaque story in Part 2 explains everything after it.",
    parts: parts, lessons: lessons
  };
}());
