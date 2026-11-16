/* Cardio Part 3, CAD Part I: Foundations of Coronary Artery Disease (Stager, 86 slides). Sections follow the deck, which
   walks the 10 objectives roughly in order (risk factors come before pathophysiology in the deck).
   Read from slide pictures: 10 (fatty streak in the aorta), 12 (4-piece artery: normal, fatty streak, atheroma, fibrous
   plaque and blockage), 13 to 15 and 17 to 18 (LDL retention, foam cells, endothelial dysfunction, cap and core, plaque
   disruption), 19 (vulnerable vs stable plaque), 23 (stable angina vs ACS pathways), 26 to 27 (positive and negative
   remodeling), 41 (CAD tree), 43, 45 (women's warning signs), 51 (suspected stable angina algorithm), 60 (choosing a
   stress test + exercise contraindications), 63 (MPI reversible defect), 71 to 72 (CCTA overview and findings), 75 (CAC
   examples), 78, 86. Slide 24's two cases have no written answer; the answers come from slides 20 and 21. */
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


  window.CAD_PART_1_OBJECTIVES = [

    S("01-definitions", "1. ASCVD, atherosclerosis, CAD: the definitions", "Objective 1 (slides 2 to 5): the six terms, the four ASCVD territories, how CAD shows up, and the burden of disease.", [
      C("Six terms that sound alike",
        tbl(["Term", "Meaning"], [
          ["<strong>Atherosclerosis</strong>", "<strong>Lipid buildup + inflammation</strong> in the arterial wall → arterial <strong>plaque</strong> (the process)"],
          ["<strong>ASCVD</strong>", "Atherosclerotic cardiovascular disease: atherosclerosis in <strong>coronary, brain, limb or aortic</strong> arteries (the family of diseases)"],
          ["<strong>CAD</strong>", "Atherosclerosis of the <strong>heart's coronary arteries</strong>"],
          ["<strong>ASHD</strong>", "Atherosclerotic heart disease; <strong>usually means CAD</strong>"],
          ["<strong>IHD</strong>", "Ischemic heart disease: myocardial oxygen <strong>supply falls short of demand</strong>"],
          ["<strong>CVD</strong>", "Cardiovascular disease: any heart and blood-vessel disease; <strong>may be nonatherosclerotic</strong>"]]) +
        hy("<strong>CAD can cause IHD, but ischemia can also occur without obstructive CAD.</strong> (Think vasospasm or emboli.)") +
        mn("Process → family → one member: <strong>atherosclerosis</strong> is the process, <strong>ASCVD</strong> is the family, <strong>CAD</strong> is the coronary member."),
        ["def-athero", "def-ascvd", "def-cad", "def-ashd", "def-ihd", "def-cvd", "cad-ihd-link"],
        [q("Which term means lipid buildup plus inflammation in the arterial wall forming plaque?", "Atherosclerosis", ["IHD", "CVD", "ASHD"], "Atherosclerosis is lipid buildup plus inflammation in the artery wall that forms plaque. (Slide 2)"),
          q("Which term means atherosclerosis in coronary, brain, limb or aortic arteries?", "ASCVD", ["CAD", "IHD", "ASHD"], "ASCVD is atherosclerosis anywhere: coronary, brain, limb or aorta. (Slide 2)"),
          q("Which term means atherosclerosis of the heart's coronary arteries?", "CAD", ["ASCVD", "CVD", "IHD"], "CAD is atherosclerosis limited to the coronary arteries. (Slide 2)"),
          q("ASHD stands for:", "Atherosclerotic heart disease, usually CAD", ["Acute systolic heart dysfunction", "Aortic stenosis heart disease", "Arrhythmic sudden heart death"], "ASHD = atherosclerotic heart disease, which in practice usually means CAD. (Slide 2)"),
          q("IHD is defined as:", "Myocardial oxygen supply falling short of demand", ["Any disease of the heart and vessels", "Plaque in the carotid arteries", "Atherosclerosis in limb arteries"], "IHD is the mismatch itself: myocardial O2 supply below demand, whatever the cause. (Slide 2)"),
          q("Which term includes heart and vessel diseases that may be nonatherosclerotic?", "CVD", ["CAD", "ASCVD", "ASHD"], "CVD is the broadest term and includes non-atherosclerotic heart and vessel disease. (Slide 2)"),
          q("Can ischemia happen without obstructive CAD?", "Yes; CAD can cause IHD, but ischemia can occur without obstructive CAD", ["No; ischemia always means a blocked coronary", "Only in children", "Only after CABG"], "Ischemia can come from spasm, emboli or high demand even without obstructive plaque.")],
        [q("A patient has myocardial ischemia from cocaine-induced coronary vasospasm with clean coronary arteries. Which term fits, and which does not?", "IHD fits; obstructive CAD does not", ["CAD fits; IHD does not", "ASCVD fits; IHD does not", "Neither term fits"], "Slide 2: ischemia can occur without obstructive CAD."),
          q("A patient has rheumatic mitral stenosis and no plaque anywhere. Which umbrella term covers his disease?", "CVD", ["ASCVD", "CAD", "ASHD"], "Slide 2: CVD may be nonatherosclerotic.")]),
      C("ASCVD: one process, four territories",
        tbl(["Territory", "Disease"], [
          ["<strong>Coronary</strong>", "Coronary artery disease (CAD)"],
          ["<strong>Cerebral</strong>", "Cerebrovascular disease"],
          ["<strong>Peripheral</strong>", "Peripheral artery disease (PAD)"],
          ["<strong>Aortic</strong>", "Aortic atherosclerotic disease"]]) +
        "<p><strong>CAD is one manifestation of the broader disease process, ASCVD.</strong> CAD is also called atherosclerotic heart disease (ASHD).</p>" +
        "<p><strong>When CAD causes symptoms</strong>, it creates:</p>" +
        ul(["<strong>Stable angina</strong>", "<strong>Acute coronary syndrome</strong>: unstable angina, NSTEMI, STEMI"]) +
        hy("CAD tree (slide 41): CAD → <strong>stable ischemic heart disease</strong> or <strong>acute coronary syndrome</strong> → ACS = <strong>unstable angina, NSTEMI, STEMI</strong>."),
        ["ascvd-territories", "cad-manifest", "cad-tree"],
        [q("Which is NOT one of the four ASCVD territories on the slide?", "Pulmonary", ["Coronary", "Cerebral", "Aortic"], "Slide 3: coronary, cerebral, peripheral, aortic."),
          q("Atherosclerosis in the leg arteries is called:", "Peripheral artery disease", ["Cerebrovascular disease", "CAD", "Aortic atherosclerotic disease"], "Atherosclerosis in the leg arteries is PAD. (Slide 3)"),
          q("CAD is one manifestation of which broader process?", "ASCVD", ["CVD from valve disease", "Heart failure", "Cardiomyopathy"], "CAD is ASCVD in the coronary arteries. (Slide 3)"),
          q("Which three conditions make up acute coronary syndrome?", "Unstable angina, NSTEMI, STEMI", ["Stable angina, NSTEMI, STEMI", "Unstable angina, stable angina, STEMI", "Prinzmetal angina, NSTEMI, PAD"], "ACS = UA, NSTEMI and STEMI, all from acute plaque disruption. (Slides 4 and 41)"),
          q("Symptomatic CAD that is NOT acute coronary syndrome is:", "Stable angina (stable ischemic heart disease)", ["NSTEMI", "STEMI", "Unstable angina"], "Symptomatic but not acute = stable angina (stable ischemic heart disease). (Slides 4 and 41)")],
        [q("A 68-year-old with CAD also has calf pain when walking and a past TIA. How do these fit together?", "One process, ASCVD, in three territories: coronary, peripheral and cerebral", ["Three unrelated diseases", "All are valve diseases", "All are forms of heart failure"], "CAD, PAD and TIA are the same disease (ASCVD) in three vascular beds. (Slide 3)")]),
      C("ASCVD burden",
        tbl(["Fact", "Number"], [
          ["Americans with ASCVD", "<strong>18.2 million</strong>; prevalence <strong>increases with age</strong>"],
          ["Deaths worldwide attributable to ASCVD (2023)", "About <strong>15.9 million</strong>"],
          ["US adults with at least one established risk factor", "<strong>35%</strong> (uncontrolled HTN, dyslipidemia, high blood glucose or high BMI)"]]) +
        hy("ASCVD is a <strong>major cause of death and disability worldwide</strong>."),
        ["ascvd-us", "ascvd-world", "ascvd-35"],
        [q("About how many Americans have ASCVD?", "18.2 million", ["1.8 million", "182 million", "5.8 million"], "About 18.2 million Americans have ASCVD. (Slide 5)"),
          q("About how many deaths worldwide were attributable to ASCVD in 2023?", "15.9 million", ["1.59 million", "159,000", "59 million"], "ASCVD caused about 15.9 million deaths worldwide in 2023. (Slide 5)"),
          q("What percent of US adults have at least one established ASCVD risk factor?", "35%", ["5%", "75%", "95%"], "About 35% of US adults have at least one ASCVD risk factor. (Slide 5)"),
          q("How does ASCVD prevalence change with age?", "It increases", ["It decreases", "It stays flat", "It peaks at 30"], "Plaque builds over a lifetime, so ASCVD becomes more common with age. (Slide 5)")],
        [q("A health department wants to target the biggest share of adults at risk. Which statistic supports broad risk-factor screening?", "35% of US adults have at least one established risk factor", ["Only 1% of adults have a risk factor", "ASCVD only affects people over 90", "ASCVD is rare worldwide"], "With 35% of adults having a risk factor, broad screening reaches many at-risk people. (Slide 5)")])
    ]),

    S("02-risk-factors", "2. Risk factors and risk reduction", "Objective 3 (slides 6 to 8): modifiable, nonmodifiable and risk-enhancing factors, how much they matter, and how to lower risk.", [
      C("Modifiable, nonmodifiable, risk-enhancing",
        tbl(["Modifiable", "Nonmodifiable", "Risk-enhancing conditions"], [
          ["Hypertension", "<strong>Male sex</strong>", "<strong>CKD stage 3, 4, 5</strong>"],
          ["Dyslipidemia", "<strong>Advancing age</strong>", "<strong>Metabolic syndrome</strong>"],
          ["Diabetes mellitus", "<strong>Family history of premature CAD</strong>: male relative <strong>&lt; 55</strong>, female relative <strong>&lt; 65</strong>", "Certain <strong>chronic inflammatory conditions</strong>"],
          ["Tobacco use", "", ""], ["Obesity", "", ""], ["Physical inactivity", "", ""], ["Unhealthy dietary patterns", "", ""], ["Excessive alcohol use", "", ""]]) +
        mn("Premature family history: <strong>55 for men, 65 for women</strong>. Women get 10 extra years."),
        ["rf-modifiable", "rf-nonmod", "rf-fhx-ages", "rf-enhancing"],
        [q("Which is a NONmodifiable ASCVD risk factor?", "Male sex", ["Tobacco use", "Obesity", "Physical inactivity"], "You can't change your sex, so male sex is nonmodifiable. (Slide 6)"),
          q("Premature CAD in a male first-degree relative means onset before age:", "55", ["45", "65", "75"], "Premature CAD in a male relative = before 55. (Slide 6)"),
          q("Premature CAD in a female first-degree relative means onset before age:", "65", ["55", "45", "75"], "Premature CAD in a female relative = before 65. (Slide 6)"),
          q("Which CKD stages are listed as risk-enhancing conditions?", "Stages 3, 4 and 5", ["Stages 1 and 2 only", "Stage 5 only", "Any stage including stage 1"], "CKD stages 3 to 5 enhance ASCVD risk. (Slide 6)"),
          q("Which of these is a listed risk-enhancing condition rather than a classic risk factor?", "Metabolic syndrome", ["Hypertension", "Tobacco use", "Advancing age"], "Metabolic syndrome is a risk-enhancing condition, not one of the classic factors. (Slide 6)"),
          q("Which is a modifiable ASCVD risk factor?", "Excessive alcohol use", ["Advancing age", "Male sex", "Family history of premature CAD"], "Heavy alcohol use is modifiable, so it's a target for risk reduction. (Slide 6)"),
          q("Which chronic condition group is listed as risk-enhancing?", "Certain chronic inflammatory conditions", ["Seasonal allergies", "Migraine", "Osteoarthritis"], "Chronic inflammatory diseases speed plaque formation, so they enhance risk. (Slide 6)")],
        [q("A 45-year-old woman's father had an MI at 52 and her mother at 70. Does she have a family history of premature CAD?", "Yes, from her father (male relative under 55)", ["Yes, from her mother", "No; neither counts", "Only if both were under 50"], "Slide 6: male under 55, female under 65."),
          q("A 50-year-old man's mother had an MI at 63. Does this count as premature family history?", "Yes; a female relative under 65", ["No; women must be under 55", "No; only fathers count", "Only if she died"], "A female first-degree relative with CAD before 65 counts as premature. (Slide 6)"),
          q("A patient has lupus, eGFR 40 and metabolic syndrome. How do these affect her ASCVD risk?", "All three are risk-enhancing conditions", ["None affect ASCVD risk", "Only lupus counts", "They lower her risk"], "Inflammatory disease, CKD and metabolic syndrome all enhance risk. (Slide 6)")]),
      C("How much risk factors matter, and how to lower risk",
        ul(["The <strong>five most common modifiable risk factors</strong> (<strong>HLD, DM, HTN, obesity, smoking</strong>) cause <strong>more than 50%</strong> of cardiovascular mortality.",
          "<strong>Smoking raises ASCVD risk 2 to 3 times</strong>. That risk <strong>falls 50% within 2 years of quitting</strong>.",
          "<strong>Even modest exercise</strong> lowers ASCVD risk substantially."]) +
        tbl(["Risk reduction step", "How"], [
          ["<strong>Stop tobacco use</strong>", "Assess exposure, offer counseling, provide evidence-based cessation treatment"],
          ["<strong>Control BP and lipids</strong>", "Find elevated levels early; lifestyle measures and medications when indicated"],
          ["<strong>Physical activity and heart-healthy diet</strong>", "Encourage <strong>sustainable</strong> changes, not an all-or-nothing approach"],
          ["<strong>Manage diabetes and other conditions</strong>", "Individualize treatment to overall CV risk and comorbidities"]]),
        ["rf-50pct", "rf-smoking", "rf-exercise", "rr-steps"],
        [q("The five most common modifiable risk factors cause about what share of cardiovascular mortality?", "More than 50%", ["About 5%", "About 20%", "100%"], "These five common modifiable factors drive more than half of CV deaths. (Slide 7)"),
          q("Which five are the most common modifiable risk factors on the slide?", "HLD, DM, HTN, obesity, smoking", ["Age, sex, HTN, DM, smoking", "HLD, CKD, lupus, age, DM", "Alcohol, caffeine, HTN, DM, stress"], "The big five: lipids, diabetes, hypertension, obesity, smoking. (Slide 7)"),
          q("Cigarette smoking raises ASCVD risk by about:", "2 to 3 times", ["10 times", "10%", "It does not change risk"], "Smoking raises ASCVD risk about 2 to 3 times. (Slide 7)"),
          q("After quitting smoking, ASCVD risk falls 50% within:", "2 years", ["2 weeks", "10 years", "20 years"], "Quitting cuts the excess risk in half within 2 years. (Slide 7)"),
          q("How much exercise is needed to lower ASCVD risk substantially?", "Even modest exercise", ["Only marathon training", "None; exercise does not help", "At least 3 hours daily"], "Even modest exercise lowers ASCVD risk substantially. (Slide 7)"),
          q("The slide's approach to diet and exercise change is:", "Sustainable changes rather than all-or-nothing", ["All-or-nothing changes work best", "Only medications matter", "Diet changes should wait until after an MI"], "Sustainable small changes beat all-or-nothing plans that fail. (Slide 8)")],
        [q("A 52-year-old who smokes a pack a day asks if quitting now is worth it. What do you tell him?", "Yes: his excess ASCVD risk falls by half within 2 years of quitting", ["No: the damage is permanent", "Only if he quit before 40", "Quitting raises risk at first"], "Excess risk falls by half within 2 years of quitting, so it's always worth it. (Slide 7)"),
          q("A sedentary patient says she cannot manage the gym every day so there is no point. Best response?", "Even modest, sustainable activity lowers ASCVD risk substantially", ["Exercise only helps at high intensity", "She should not exercise at all", "Only medication will help"], "Even small amounts of regular activity lower risk; it doesn't have to be the gym. (Slides 7 and 8)")])
    ]),

    S("03-atherosclerosis-formation", "3. How plaque forms", "Objective 2 (slides 9 to 17): LDL entry, oxidation, monocytes and foam cells, fatty streak, endothelial dysfunction (NO and PGI2), cap and core, and where plaques form.", [
      C("From LDL to fatty streak",
        "<p>Atherosclerosis is a <strong>chronic inflammatory process</strong> with lipid accumulation and plaque formation in the arterial wall.</p>" +
        chain(["<strong>LDL enters and is retained in the intima</strong>",
          "Retained LDL is <strong>oxidized</strong> (modified)",
          "Modified LDL <strong>triggers inflammation</strong>",
          "Endothelium expresses adhesion molecules <strong>VCAM-1 and ICAM-1</strong>",
          "<strong>Monocytes enter the intima</strong> and become <strong>macrophages</strong>",
          "Macrophages <strong>swallow modified LDL</strong> → <strong>foam cells</strong>",
          "Foam cells collect into a <strong>fatty streak</strong> (the early lesion)"]) +
        "<p>The <strong>fatty streak</strong> = a focal accumulation of serum lipoproteins <strong>within the intima</strong> of the vessel wall. Full atheroma development may take <strong>10 to 15 years</strong>. Over time, some lesions progress into complex plaques.</p>" +
        hy("Foam cell = <strong>macrophage stuffed with oxidized LDL</strong>."),
        ["fs-ldl-entry", "fs-oxidation", "fs-vcam", "fs-foam", "fs-def", "fs-10-15"],
        [q("Where do lipoproteins first accumulate in atherosclerosis?", "The intima", ["The adventitia", "The media only", "The lumen"], "LDL first gets trapped in the intima, beneath the endothelium. (Slides 9 and 13)"),
          q("What happens to LDL retained in the intima?", "It is oxidized (modified)", ["It is excreted by the kidney", "It becomes HDL", "It calcifies immediately"], "Trapped LDL gets oxidized, which makes it inflammatory. (Slide 13)"),
          q("Which adhesion molecules does the endothelium express to recruit monocytes?", "VCAM-1 and ICAM-1", ["Troponin I and T", "ANP and BNP", "Factor V and VIII"], "VCAM-1 and ICAM-1 on the endothelium grab passing monocytes. (Slide 14)"),
          q("Monocytes that enter the intima become:", "Macrophages", ["Platelets", "Fibroblasts", "Neutrophils"], "Monocytes in the intima mature into macrophages. (Slide 14)"),
          q("A foam cell is:", "A macrophage that has swallowed modified LDL", ["A platelet clump", "A smooth muscle cell full of calcium", "A red cell in the plaque"], "Macrophages that eat oxidized LDL become lipid-stuffed foam cells. (Slide 14)"),
          q("The earliest lesion of atherosclerosis is the:", "Fatty streak", ["Fibrous cap", "Necrotic core", "Thrombus"], "The fatty streak (foam cells) is the earliest visible lesion. (Slides 9 and 10)"),
          q("How long may an atheroma take to fully develop?", "10 to 15 years", ["10 to 15 days", "1 year", "50 years"], "A full atheroma takes about 10 to 15 years to develop. (Slide 10)"),
          q("Atherosclerosis is best described as a chronic:", "Inflammatory process", ["Infectious process", "Congenital defect", "Autoimmune valve disease"], "Atherosclerosis is chronic inflammation, not just fat buildup. (Slide 9)")],
        [q("A 22-year-old's aorta at autopsy shows flat yellow streaks in the intima. What are they made of?", "Lipid-laden foam cells (a fatty streak)", ["Calcium deposits", "Fresh thrombus", "Scar from old MI"], "Flat yellow intimal streaks in a young person are fatty streaks: foam cells. (Slides 10 and 14)"),
          q("A drug blocks VCAM-1 expression. Which step of plaque formation would it slow?", "Monocyte recruitment into the intima", ["LDL absorption from the gut", "Platelet aggregation after rupture", "Plaque calcification only"], "Without VCAM-1, monocytes can't be recruited into the intima. (Slide 14)")]),
      C("Endothelial dysfunction",
        tbl(["Protector", "What it does", "In endothelial dysfunction"], [
          ["<strong>Nitric oxide (NO)</strong>", "<strong>Vasodilation</strong>; inhibits <strong>platelet adhesion</strong> and vascular inflammation", "<strong>Falls</strong>"],
          ["<strong>Prostacyclin (PGI2)</strong>", "<strong>Vasodilation</strong>; inhibits <strong>platelet aggregation</strong>", "<strong>Falls</strong>"]]) +
        hy("Endothelial dysfunction <strong>reduces the artery's normal protective mechanisms</strong> and contributes to atherosclerosis. Both NO and PGI2 fall as the endothelium fails.") +
        "<p>Endothelial function is influenced by <strong>local blood-flow patterns</strong>.</p>",
        ["ed-no", "ed-pgi2", "ed-key"],
        [q("Which endothelial product promotes vasodilation and inhibits platelet adhesion and vascular inflammation?", "Nitric oxide", ["Endothelin", "Thromboxane A2", "Angiotensin II"], "Nitric oxide dilates vessels and keeps platelets and inflammation away. (Slide 16)"),
          q("Which endothelial product promotes vasodilation and inhibits platelet aggregation?", "Prostacyclin (PGI2)", ["Thromboxane A2", "Endothelin", "Von Willebrand factor"], "Prostacyclin dilates vessels and blocks platelet aggregation. (Slide 16)"),
          q("In endothelial dysfunction, nitric oxide and prostacyclin:", "Both fall", ["Both rise", "NO rises, PGI2 falls", "Neither changes"], "Dysfunctional endothelium makes less NO and prostacyclin. (Slide 15)"),
          q("What is the key effect of endothelial dysfunction?", "It removes the artery's normal protective mechanisms", ["It makes the artery immune to plaque", "It raises HDL", "It dissolves plaque"], "Endothelial dysfunction strips the artery of its protective dilation and anti-clotting effects. (Slide 16)")],
        [q("A smoker's endothelium makes less NO. Which two protective effects are lost?", "Vasodilation and inhibition of platelet adhesion", ["Vasoconstriction and bleeding", "LDL oxidation and calcification", "Heart rate slowing and diuresis"], "Less NO means less vasodilation and more platelet adhesion. (Slide 16)")]),
      C("Cap, core and calcium; where plaques form",
        chain(["<strong>Lipid infiltration</strong> (fatty streak)", "Progression to <strong>fibrous plaque</strong>",
          "Formation of a <strong>fibrous cap over a lipid-rich necrotic core</strong>", "<strong>Calcification</strong> (may occur)"]) +
        "<p>The 4-piece artery model: <strong>normal → fatty streak → atheroma</strong> (lipid buildup narrowing the lumen) <strong>→ fibrous plaque and blockage</strong> (fibers harden the atheroma; a clot can fill the lumen).</p>" +
        "<p>Atherosclerosis progresses at <strong>variable rates</strong>, with periods of greater and lesser activity.</p>" +
        tbl(["Atheromas typically form where vessels have"], [
          ["<strong>Branching</strong> and <strong>marked curvature</strong>"], ["<strong>Irregular shape</strong>"], ["<strong>Sudden changes in velocity and direction</strong> of blood flow"]]) +
        hy("Plaques form where flow is <strong>disturbed</strong>: branch points and bends."),
        ["cc-steps", "cc-4piece", "cc-variable", "cc-sites"],
        [q("What is the order of plaque development?", "Fatty streak, fibrous plaque, fibrous cap over lipid core, calcification", ["Calcification, fatty streak, fibrous cap, lipid core", "Thrombus, fatty streak, cap, core", "Fibrous cap, fatty streak, thrombus, calcium"], "Plaque goes fatty streak, fibrous plaque, cap over lipid core, then may calcify. (Slide 17)"),
          q("What covers the lipid-rich necrotic core of a mature plaque?", "A fibrous cap", ["The adventitia", "A thrombus", "A calcium shell always"], "A fibrous cap walls off the necrotic lipid core. (Slide 17)"),
          q("Where do atheromas characteristically form?", "At branch points and areas of marked curvature", ["In straight segments with smooth flow", "Only in veins", "Only in capillaries"], "Branch points and curves have turbulent flow, so plaques form there. (Slide 11)"),
          q("Which flow pattern favors atheroma formation?", "Sudden changes in velocity and direction", ["Steady laminar flow", "No flow at all", "Venous flow"], "Abrupt changes in flow speed and direction injure endothelium and favor plaque. (Slide 11)"),
          q("How fast does atherosclerosis progress?", "At variable rates, with more and less active periods", ["At a fixed rate in everyone", "Only during sleep", "It never progresses after age 30"], "Plaque grows unevenly, with active and quiet periods. (Slide 11)"),
          q("Is calcification a required step in every plaque?", "No; it may occur", ["Yes; always first", "Yes; it is the earliest lesion", "Only in veins"], "Calcification can happen but isn't required. (Slide 17)")],
        [q("An angiogram shows the worst plaque at the bifurcation of the left main into the LAD and circumflex. Why there?", "Branch points have disturbed flow that favors atheroma", ["Branches have no endothelium", "LDL cannot reach straight segments", "It is random"], "Bifurcations have disturbed flow, the classic plaque site. (Slide 11)")])
    ]),

    S("04-stable-vs-vulnerable", "4. Plaque rupture, stable vs vulnerable plaque", "Objectives 2 and 5 (slides 18 to 24): how a plaque ruptures, what makes a plaque stable or vulnerable, and which clinical picture each causes.", [
      C("Plaque disruption and thrombosis",
        chain(["<strong>MMPs from inflammatory cells thin the cap</strong>", "The <strong>cap fissures</strong> and exposes plaque contents",
          "<strong>Platelets aggregate and fibrin forms</strong> a thrombus", "Result: <strong>acute ischemia or MI</strong>"]) +
        "<p>Factors that <strong>accelerate</strong> the whole process:</p>" +
        ul(["<strong>Systemic hypertension</strong> causing excessive <strong>shear forces</strong>", "<strong>Cigarette smoking</strong>", "<strong>Hypercholesterolemia</strong>", "<strong>Inflammation / oxidative stress</strong>"]) +
        hy("The inflammatory micro-environment inside the walled-off lipid plaque is <strong>pro-clotting and platelet-activating</strong>."),
        ["rup-mmp", "rup-steps", "rup-accel", "rup-procoag"],
        [q("What thins the fibrous cap before rupture?", "MMPs from inflammatory cells", ["Calcium", "HDL", "Nitric oxide"], "Inflammatory cells release MMPs that digest the cap's collagen. (Slide 18)"),
          q("After the cap fissures, what forms the thrombus?", "Aggregating platelets and fibrin", ["Foam cells only", "Smooth muscle only", "Calcium crystals"], "Exposed plaque contents attract platelets, which aggregate with fibrin into a clot. (Slide 18)"),
          q("Which is NOT listed as accelerating atherosclerosis?", "High HDL", ["Systemic hypertension", "Cigarette smoking", "Oxidative stress"], "High HDL is protective; it doesn't accelerate plaque. (Slide 22)"),
          q("How does hypertension accelerate atherosclerosis?", "Excessive shear forces", ["By lowering LDL", "By raising nitric oxide", "By thinning blood"], "High pressure adds shear stress that injures the endothelium. (Slide 22)"),
          q("The micro-environment inside a lipid plaque is:", "Pro-clotting and platelet-activating", ["Anticoagulant", "Free of inflammation", "Sterile and inert"], "The plaque core is full of tissue factor and platelet activators, so it's pro-clotting. (Slide 22)")],
        [q("A patient's plaque cap ruptures. Why does a clot form so quickly at that spot?", "The exposed plaque contents are pro-clotting and activate platelets", ["Blood flow stops in all arteries", "The plaque releases heparin", "Calcium attracts red cells"], "Plaque contents are highly thrombogenic, so a clot forms instantly. (Slides 18, 22 and 34)")]),
      C("Vulnerable (young) vs stable (old) plaque",
        tbl(["", "Vulnerable (unstable) plaque", "Stable plaque"], [
          ["Age", "<strong>Young</strong>, still replacing collagen in its cap", "<strong>Older</strong>; inflammation gradually decreases"],
          ["Fibrous cap", "<strong>Thin</strong>", "<strong>Thick, dense</strong>, more collagen"],
          ["Lipid core", "<strong>Large</strong>", "<strong>Minimal</strong>"],
          ["Inflammation", "<strong>Dense</strong> inflammatory infiltrate; active below the cap", "<strong>Little</strong>"],
          ["Lumen narrowing", "Little: <strong>asymptomatic</strong> until it ruptures", "<strong>Stenosis</strong> limits flow"],
          ["What it causes", "<strong>Sudden rupture → ACS</strong>: UA, NSTEMI, STEMI (also stroke)", "<strong>Exertional angina</strong>, <strong>claudication</strong>"]]) +
        "<p>Slide 23's pathway: a plaque that keeps growing (about 90% blocked) → <strong>stable angina / claudication</strong>; a plaque that ruptures and clots → <strong>ACS / stroke (CVA)</strong>.</p>" +
        hy("Young thin-capped plaque = <strong>rupture → ACS</strong>. Old thick-capped plaque = <strong>stenosis → exertional angina</strong>.") +
        note("The deck's slide 23 also places unstable angina under the growing-plaque arrow; the text slides teach unstable angina as an ACS from rupture and clot, which is what the questions use."),
        ["vp-young", "vp-old", "vp-table", "vp-pathways"],
        [q("Which plaque features make a plaque vulnerable?", "Thin cap, large lipid core, dense inflammation", ["Thick cap, small lipid core, little inflammation", "Heavy calcification and no lipid", "No cap at all and no lipid"], "Thin cap, big lipid core and heavy inflammation make a plaque likely to rupture. (Slide 19)"),
          q("As an unruptured plaque ages, its inflammation:", "Gradually decreases and it becomes more stable", ["Increases and it becomes vulnerable", "Stays the same", "Turns into infection"], "Over time inflammation settles and the cap thickens, so old plaque is more stable. (Slide 19)"),
          q("Why are young plaques usually asymptomatic?", "They do not block much blood flow", ["They are too small to rupture", "They are in veins", "They are fully calcified"], "Young plaques are small and often outwardly remodeled, so flow isn't blocked. (Slide 20)"),
          q("When young plaques suddenly rupture, they cause:", "Acute coronary syndromes", ["Stable exertional angina", "Claudication only", "Nothing"], "A young, thin-capped plaque that ruptures causes sudden ACS. (Slide 20)"),
          q("Older plaques with thick caps mainly cause:", "Stenosis with exertional angina or claudication", ["Sudden STEMI as the usual result", "No symptoms ever", "Aortic dissection"], "Old thick-capped plaques narrow the lumen, causing exertional symptoms. (Slide 21)"),
          q("A stable plaque has a cap that is:", "Dense, fibrous and collagen-rich", ["Thin and inflamed", "Absent", "Made of thrombus"], "Stable plaques have dense, collagen-rich caps that rarely rupture. (Slide 19)")],
        [q("Arthur is 34, eats fast food and runs 3 miles a day. He suddenly has an acute MI. What is likely in his arteries?", "A young, thin-capped plaque that ruptured and formed a clot", ["Old, heavily calcified stenosis", "Clean arteries with no plaque", "Only a fatty streak with no clot"], "Young, inflamed, thin-capped plaque can rupture without warning and cause an MI. (Slides 20 and 24)"),
          q("Zeke is 90, a lifelong dairy farmer, and has chest tightness that slows his chores. What is in his arteries?", "Old, stable thick-capped plaques narrowing the lumen", ["A fresh ruptured plaque with clot", "Vasospasm only", "Septic emboli"], "Old, thick-capped plaques narrow the lumen and cause stable exertional symptoms. (Slides 21 and 24)"),
          q("A 60-year-old has 2 years of predictable chest pressure climbing stairs. Which plaque type is most likely?", "Stable plaque causing fixed stenosis", ["Vulnerable plaque that just ruptured", "Fatty streak only", "No plaque"], "Years of predictable exertional pain = a stable, fixed stenosis. (Slide 21)")])
    ]),

    S("05-remodeling", "5. Positive and negative remodeling", "Objective 2 (slides 25 to 27): how a plaque reshapes the artery, and why it changes when symptoms begin.", [
      C("Outward or inward",
        tbl(["", "Positive remodeling", "Negative remodeling"], [
          ["What the wall does", "<strong>Bulges outward</strong> at the plaque (vessel diameter enlarges)", "<strong>No wall dilation</strong>; the artery <strong>shrinks inward</strong>"],
          ["Lumen", "Stays about <strong>normal size</strong>", "<strong>Narrowed</strong> as the plaque grows"],
          ["How common", "<strong>Most common</strong>", "Less common; many positive lesions <strong>change to negative</strong> as plaque progresses"],
          ["Symptoms", "<strong>Less likely to cause angina initially</strong>; can delay symptoms", "Can lead to <strong>earlier symptoms (angina)</strong>"]]) +
        hy("Positive = the artery <strong>makes room</strong> for the plaque, so a large plaque can hide with a normal lumen."),
        ["rm-pos", "rm-neg", "rm-common", "rm-symptoms"],
        [q("In positive remodeling, the arterial wall:", "Bulges outward at the plaque", ["Shrinks inward", "Does not change", "Ruptures immediately"], "In positive remodeling the wall bulges outward, preserving the lumen. (Slide 25)"),
          q("Which type of remodeling is most common?", "Positive", ["Negative", "Neither; remodeling never happens", "Both are equally rare"], "Positive (outward) remodeling is the most common type. (Slide 25)"),
          q("Which remodeling is less likely to cause angina at first?", "Positive", ["Negative", "Both cause early angina", "Neither ever causes angina"], "The lumen is preserved in positive remodeling, so angina comes late. (Slide 25)"),
          q("In negative remodeling, the lumen:", "Narrows as the plaque grows", ["Stays normal", "Enlarges", "Closes instantly"], "In negative remodeling the plaque grows inward and narrows the lumen. (Slide 25)"),
          q("Can positive remodeling turn into negative remodeling?", "Yes, many change as the plaque progresses", ["No, never", "Only after CABG", "Only in veins"], "Many plaques remodel outward first, then inward as they grow. (Slide 25)")],
        [q("An intravascular image shows a large lipid plaque but a near-normal lumen and an enlarged vessel diameter. What explains why the patient had no angina?", "Positive remodeling", ["Negative remodeling", "Vasospasm", "Calcification"], "Outward remodeling kept the lumen open despite a big plaque. (Slides 25 and 26)"),
          q("A patient's plaque grows with no outward bulge and he develops exertional angina early. Which remodeling is this?", "Negative remodeling", ["Positive remodeling", "Plaque regression", "Fatty streak only"], "Inward plaque growth narrows the lumen early: negative remodeling. (Slides 25 and 27)")])
    ]),

    S("06-supply-demand", "6. Coronary blood flow: supply and demand", "Objective 4 (slides 28 to 32): the heart's oxygen needs, flow in diastole, what exercise does, and how stenosis causes ischemia.", [
      C("The needy heart and when it gets blood",
        ul(["The heart is only <strong>0.3% of body weight</strong> but uses <strong>7% of resting oxygen consumption</strong>.",
          "Coronary flow <strong>brings oxygen</strong> and <strong>removes waste</strong>: CO2, lactic acid, hydrogen ions.",
          "Coronary flow happens <strong>mostly in diastole</strong>; in <strong>systole</strong> the contracting muscle <strong>compresses intramyocardial vessels</strong> and reduces flow."]) +
        tbl(["During exercise", "Effect"], [
          ["Heart rate and contractility ↑", "Myocardial <strong>O2 demand ↑</strong>"],
          ["Diastole <strong>shortens</strong> as HR rises", "<strong>Less perfusion time per beat</strong>"],
          ["Normal coronaries <strong>dilate</strong>", "Flow rises to meet demand"],
          ["Flow-limiting CAD", "Flow <strong>may not rise enough</strong> → <strong>ischemia</strong>"]]) +
        hy("Fast heart rate is a double hit: <strong>more demand</strong> and <strong>less diastolic time</strong> to fill the coronaries."),
        ["sd-03-7", "sd-waste", "sd-diastole", "sd-exercise", "sd-dilate"],
        [q("The heart is about 0.3% of body weight. What share of resting oxygen use does it account for?", "7%", ["0.3%", "25%", "50%"], "The heart is 0.3% of body weight but uses about 7% of resting O2. (Slide 28)"),
          q("Which waste products does coronary flow remove?", "CO2, lactic acid and hydrogen ions", ["Urea and creatinine", "Bilirubin and ammonia", "Glucose and insulin"], "Coronary flow washes out CO2, lactic acid and H+. (Slide 28)"),
          q("When does most coronary blood flow occur?", "Diastole", ["Systole", "Equally in both", "Only during exercise"], "Coronaries fill mostly in diastole, when the muscle relaxes. (Slide 29)"),
          q("Why is coronary flow reduced in systole?", "Contracting muscle compresses the intramyocardial vessels", ["The aortic valve is closed", "The coronaries constrict from vagal tone", "Blood is all in the lungs"], "Contracting muscle squeezes the vessels inside it. (Slide 29)"),
          q("What happens to diastole as heart rate rises?", "It shortens", ["It lengthens", "It is unchanged", "It disappears entirely at any rate"], "Faster heart rates shorten diastole most. (Slide 30)"),
          q("How do normal coronary arteries meet higher demand?", "They dilate to increase flow", ["They constrict", "They stop flow in systole and diastole", "They cannot change flow"], "Normal coronaries dilate to boost flow when demand rises. (Slide 31)")],
        [q("A patient with a fixed coronary stenosis develops angina when his heart rate climbs to 140. Name both reasons.", "Higher O2 demand and shorter diastolic filling time", ["Lower demand and longer diastole", "Only lower blood pressure", "Only anemia"], "Tachycardia raises O2 demand and shortens diastole, when coronaries fill. (Slides 30 and 31)"),
          q("Why might slowing the heart rate relieve angina in a patient with fixed stenosis?", "It lowers demand and lengthens diastole, when coronaries fill", ["It raises demand", "It shortens diastole", "It dilates veins only"], "Slower HR lowers demand and lengthens diastole, improving supply. (Slides 29 and 30)")]),
      C("Stenosis: when supply cannot meet demand",
        chain(["Coronary atherosclerosis <strong>narrows</strong> the artery", "Blood flow is <strong>limited</strong>",
          "The heart <strong>cannot raise O2 delivery</strong> when demand rises", "<strong>Supply &lt; demand</strong> → <strong>myocardial ischemia</strong>", "<strong>Anginal symptoms</strong>"]) +
        hy("Stenosis matters most when <strong>demand rises</strong>: the narrowed artery can carry enough at rest but cannot increase flow."),
        ["st-chain", "st-demand"],
        [q("When does a fixed stenosis usually produce ischemia?", "When myocardial oxygen demand rises", ["Only during deep sleep", "Only when lying flat", "Never"], "A fixed stenosis can't dilate, so ischemia appears when demand rises. (Slide 32)"),
          q("Myocardial ischemia develops when:", "Oxygen supply cannot meet oxygen demand", ["Supply exceeds demand", "Heart rate is slow", "Coronaries dilate fully"], "Ischemia = supply can't meet demand. (Slide 32)")],
        [q("A patient has a 75% LAD stenosis and no symptoms at rest but chest pressure when shoveling snow. Why?", "The narrowed artery cannot increase flow when demand rises", ["The artery is fully blocked at rest", "Snow causes vasospasm only", "Cold lowers demand"], "A 75% stenosis can't add flow when demand rises, so pain comes with exertion. (Slides 31 and 32)")])
    ]),

    S("07-acute-and-other-ischemia", "7. Rupture and the other causes of ischemia", "Objectives 4 and 5 (slides 33 to 35): how a small plaque causes acute ischemia, and causes of ischemia that are not atherosclerosis.", [
      C("Plaque rupture: small plaque, big event",
        ul(["Ischemia can come from <strong>sudden rupture of the fibrous cap</strong>.",
          "A <strong>relatively small plaque</strong> causing <strong>no significant stenosis</strong> can suddenly fissure, especially when the vessel is under <strong>significant stress</strong>."]) +
        chain(["<strong>Plaque rupture or erosion</strong>: thrombogenic material is exposed to the blood",
          "<strong>Platelet activation and thrombus formation</strong>: the coagulation cascade is activated at the site",
          "<strong>Reduced coronary blood flow</strong>: thrombus obstructs the artery → <strong>acute ischemia</strong>, possibly <strong>MI</strong>"]),
        ["ac-small", "ac-steps"],
        [q("Can a plaque that causes no significant stenosis cause an MI?", "Yes; it can suddenly fissure and clot", ["No; only tight stenoses cause MI", "Only if it is calcified", "Only in women"], "Most MIs come from non-flow-limiting plaques that suddenly rupture and clot. (Slide 33)"),
          q("What is the first step when a plaque causes acute ischemia?", "Plaque rupture or erosion exposes thrombogenic material", ["Coronary dilation", "Calcification", "Foam cell formation"], "Rupture or erosion exposes thrombogenic plaque contents to blood. (Slide 34)"),
          q("What finally reduces coronary flow in plaque rupture?", "A thrombus obstructing the artery", ["Vasodilation", "Calcium shell", "Positive remodeling"], "The clot on the ruptured plaque is what blocks flow. (Slide 34)")],
        [q("A 45-year-old with a normal stress test 6 months ago has an acute STEMI. How can that happen?", "A non-flow-limiting plaque ruptured and clotted", ["The stress test was the cause", "Stable stenosis always shows on stress testing so this cannot happen", "STEMI only comes from 90% stenoses"], "Stress tests catch flow-limiting lesions; a small plaque can still rupture and clot. (Slides 33 and 34)")]),
      C("Ischemia without atherosclerosis",
        tbl(["Cause", "Detail"], [
          ["<strong>Vasospasm</strong>", "Causes <strong>Prinzmetal's angina</strong>; from \"twitchy\" arterioles or <strong>illicit sympathomimetic drugs</strong> (intense vasoconstriction)"],
          ["<strong>Congenital lesions</strong>", "<strong>Uncommon</strong>"],
          ["<strong>Emboli</strong>", "<strong>Septic vegetations from infective endocarditis</strong>"]]) +
        hy("Ischemia is not only plaque that cannot dilate or plaque that ruptures."),
        ["oi-spasm", "oi-congenital", "oi-emboli"],
        [q("Vasospasm of the coronary arteries causes which angina?", "Prinzmetal's angina", ["Stable angina", "Unstable angina", "Ludwig's angina"], "Coronary spasm causes Prinzmetal (variant) angina. (Slide 35)"),
          q("Which drugs can cause coronary vasospasm?", "Illicit sympathomimetics", ["Statins", "ACE inhibitors", "Aspirin"], "Cocaine and amphetamines are sympathomimetics that cause coronary spasm. (Slide 35)"),
          q("Emboli that cause cardiac ischemia on the slide come from:", "Septic vegetations of infective endocarditis", ["DVT in the leg", "Fat from fractures", "Air from IV lines"], "Endocarditis vegetations can break off and embolize to a coronary. (Slide 35)"),
          q("How common are congenital coronary lesions as a cause of ischemia?", "Uncommon", ["The most common cause", "Half of all cases", "Never a cause"], "Congenital coronary anomalies are an uncommon cause of ischemia. (Slide 35)")],
        [q("A 28-year-old has chest pain after using cocaine; angiography shows no plaque. Mechanism?", "Sympathomimetic vasospasm", ["Plaque rupture", "Fixed stenosis", "Congenital lesion"], "Cocaine is a sympathomimetic that spasms the coronaries. (Slide 35)"),
          q("A patient with S. aureus endocarditis develops an acute MI. Most likely mechanism?", "Septic embolus from a vegetation", ["Vasospasm", "Old calcified stenosis", "Positive remodeling"], "Vegetations can embolize into a coronary artery. (Slide 35)")])
    ]),

    S("08-ischemia-effects", "8. What ischemia does: stunning, hibernation, infarction", "Objective 4 (slides 36 to 39): the cellular chain of ischemia and the three outcomes for heart muscle.", [
      C("Inside ischemic muscle",
        chain(["Inadequate O2 supply → regional <strong>hypoxia</strong>", "<strong>Anaerobic</strong> respiration → <strong>lactic acid</strong>",
          "Localized <strong>acidosis</strong> → abnormal <strong>relaxation</strong>", "↓ <strong>compliance and contractility</strong>",
          "<strong>Regional wall motion abnormalities</strong>, visible on <strong>echo</strong>", "Ischemic changes visible on the <strong>EKG</strong>"]),
        ["ie-anaerobic", "ie-acidosis", "ie-wma", "ie-ekg"],
        [q("What does ischemic myocardium produce from anaerobic respiration?", "Lactic acid", ["Ketones", "Ammonia", "Urea"], "Without O2, cells switch to anaerobic metabolism and make lactic acid. (Slide 36)"),
          q("Local acidosis in ischemic muscle first disturbs:", "Myocardial relaxation", ["Valve opening", "Pericardial fluid", "Sinus node automaticity only"], "Relaxation needs energy, so it's the first thing ischemia impairs. (Slide 36)"),
          q("Ischemia's effect on compliance and contractility:", "Both fall", ["Both rise", "Compliance rises, contractility falls", "Neither changes"], "Ischemia makes the muscle stiffer (less compliant) and weaker. (Slide 36)"),
          q("Which imaging test shows regional wall motion abnormalities from ischemia?", "Echocardiography", ["Chest x-ray", "CAC score", "Abdominal ultrasound"], "Echo shows the ischemic wall not moving normally. (Slide 36)")],
        [q("During a stress echo, the anterior wall stops moving well at peak exercise. Why?", "Ischemia caused local acidosis that impaired relaxation and contractility", ["The probe moved", "Exercise always causes this in normal hearts", "Anterior walls do not contract"], "Ischemia causes acidosis that impairs relaxation and contraction in that wall. (Slide 36)")]),
      C("Stunning vs hibernation vs infarction",
        tbl(["", "Stunning", "Hibernation", "Infarction"], [
          ["Cause", "<strong>Transient</strong> ischemia then <strong>reperfusion</strong>", "<strong>Chronic or repetitive</strong> reductions in flow", "<strong>Prolonged, severe</strong> ischemia"],
          ["Blood flow now", "<strong>Restored</strong>", "<strong>Still reduced</strong>", "Lost long enough to kill cells"],
          ["Muscle", "<strong>Viable</strong>, no irreversible injury", "<strong>Viable</strong>; <strong>downregulates</strong> contraction to adapt", "<strong>Necrosis</strong>: irreversible"],
          ["Recovery", "<strong>Hours to days</strong>, sometimes longer, on its own", "May improve after <strong>revascularization</strong>", "<strong>Permanent</strong> loss of function"]]) +
        mn("<strong>Stunned</strong> = knocked out, wakes up on its own. <strong>Hibernating</strong> = asleep until you bring food (blood) back. <strong>Infarcted</strong> = dead.") +
        hy("Dobutamine stress echo can test the <strong>viability of hibernating myocardium</strong> (slide 65)."),
        ["fx-stun", "fx-hib", "fx-mi", "fx-recovery"],
        [q("Myocardial stunning follows:", "Transient ischemia with restored blood flow", ["Chronic reduced flow", "Prolonged severe ischemia with necrosis", "Valve rupture"], "Stunning follows a brief ischemic episode after flow is restored. (Slide 37)"),
          q("In stunning, the myocardium is:", "Viable, with temporarily impaired contractility", ["Dead", "Permanently scarred", "Normal immediately"], "Stunned muscle is alive but temporarily weak. (Slide 37)"),
          q("How long can stunned myocardium take to recover?", "Hours to days, sometimes longer", ["Seconds", "Never", "Exactly 6 months"], "Stunned muscle recovers over hours to days, sometimes longer. (Slide 37)"),
          q("Hibernating myocardium is:", "Chronically dysfunctional but viable from chronic or repetitive low flow", ["Dead tissue", "Normal muscle", "Acutely stunned after reperfusion"], "Hibernating muscle is chronically underperfused, weak but still alive. (Slide 38)"),
          q("What may restore function in hibernating myocardium?", "Revascularization", ["Nothing", "Bed rest only", "Antibiotics"], "Restoring flow can wake up hibernating muscle. (Slide 38)"),
          q("Myocardial infarction is defined by:", "Irreversible cardiomyocyte injury and necrosis", ["Reversible dysfunction", "Normal function", "Downregulated but viable cells"], "MI means cardiomyocytes have died (necrosis), which is irreversible. (Slide 39)"),
          q("Why does hibernating myocardium reduce its contraction?", "As an adaptation to reduced oxygen availability", ["Because the cells are dead", "Because of infection", "Because of a valve leak"], "Hibernating muscle downregulates contraction to survive on less O2. (Slide 38)")],
        [q("After a STEMI is opened with a stent within 60 minutes, the anterior wall is still weak 2 days later but slowly improves over a week. Which term?", "Stunning", ["Hibernation", "Infarction", "Positive remodeling"], "Weak after flow is restored, then slowly recovers = stunning. (Slide 37)"),
          q("A patient with chronic multivessel stenosis has a weak inferior wall that contracts better after CABG. Which term?", "Hibernation", ["Stunning", "Infarction", "Vasospasm"], "Chronic low flow with recovery after CABG = hibernation. (Slide 38)"),
          q("Which patient's wall motion abnormality will NOT recover with revascularization?", "Scar from a completed infarction", ["Hibernating myocardium", "Stunned myocardium", "Ischemic muscle at peak exercise"], "Dead, scarred muscle can't recover no matter how flow is restored. (Slide 39)")])
    ]),

    S("09-presentation", "9. How CAD presents", "Objectives 5 and 6 (slides 40 to 44): chronic vs acute CAD, gradual vs abrupt symptoms, and the classic symptom list.", [
      C("Chronic stenosis vs acute plaque disruption",
        tbl(["", "Chronic coronary atherosclerosis", "Acute plaque disruption"], [
          ["Mechanism", "Plaque grows; <strong>progressively less blood</strong> reaches the myocardium", "<strong>Plaque rupture</strong> triggers <strong>thrombosis</strong>"],
          ["Symptoms", "<strong>Gradual and intermittent</strong>: first with <strong>exertion</strong>, then at <strong>rest</strong>", "<strong>Abrupt</strong>, with <strong>no warning anginal symptoms</strong>"],
          ["Clinical name", "<strong>Stable ischemic heart disease</strong> (angina)", "<strong>ACS</strong>: unstable angina, NSTEMI, STEMI"]]),
        ["pr-chronic", "pr-acute", "pr-exertion-rest"],
        [q("When CAD causes gradual, intermittent symptoms, the cause is:", "A growing plaque letting progressively less blood through", ["Sudden plaque rupture", "Vasospasm only", "Valve disease"], "A slowly growing plaque gradually lets less blood through. (Slide 42)"),
          q("With chronic progressive CAD, symptoms first occur:", "With exertion, then at rest", ["At rest, then with exertion", "Only at night", "Only after meals"], "As narrowing worsens, pain moves from exertion to rest. (Slide 42)"),
          q("Acute CAD symptoms are due to:", "Plaque rupture", ["Slow plaque growth", "Positive remodeling", "Fatty streaks"], "Sudden symptoms come from plaque rupture with clot. (Slide 43)"),
          q("Acute symptoms from plaque rupture usually come:", "Abruptly, with no warning angina", ["After months of predictable angina", "Only with exercise", "Only in the elderly"], "Rupture is sudden, often with no prior angina. (Slide 43)"),
          q("Acute plaque disruption with thrombosis causes:", "Acute coronary syndrome", ["Stable angina", "Claudication", "Hibernation only"], "Ruptured plaque plus clot = ACS. (Slide 40)")],
        [q("A 58-year-old has had exertional chest tightness for a year and now gets it at rest too. What does the change suggest?", "Progressive narrowing: symptoms move from exertion to rest", ["The plaque has regressed", "This is normal aging", "The pain is not cardiac"], "Moving from exertional to rest pain means worsening narrowing (or instability). (Slide 42)")]),
      C("The symptoms of myocardial ischemia",
        tbl(["Symptom", "Classic features"], [
          ["<strong>Chest pain</strong>", "<strong>Substernal, tight, dull, achy</strong>; classically radiates to the <strong>left shoulder / upper arm</strong>; <strong>does NOT worsen</strong> with deep inspiration or sternal palpation; lasts <strong>minutes to hours</strong>; women do not always have the classic pattern"],
          ["<strong>Dyspnea</strong>", "Worse with <strong>exertion</strong>"],
          ["<strong>Nausea</strong>", ""], ["<strong>Dizziness / lightheadedness</strong>", ""], ["<strong>Diaphoresis</strong>", ""]]) +
        hy("Pain that <strong>worsens with a deep breath or pressing on the sternum</strong> suggests a different cause (pleuritic or chest wall)."),
        ["sx-pain", "sx-radiate", "sx-not-pleuritic", "sx-other"],
        [q("Classic ischemic chest pain is described as:", "Substernal, tight, dull and achy", ["Sharp and pleuritic", "Tearing to the back", "Burning only after meals"], "Ischemia feels like dull, tight, achy substernal pressure. (Slide 44)"),
          q("Classic ischemic pain radiates to the:", "Left shoulder and upper arm", ["Right lower quadrant", "Lower back only", "Knee"], "Ischemic pain classically radiates to the left shoulder and arm. (Slide 44)"),
          q("Does ischemic chest pain worsen with deep inspiration or sternal palpation?", "No", ["Yes, always", "Only palpation", "Only inspiration"], "Pain that changes with breathing or pressing points to chest wall or pleura, not ischemia. (Slide 44)"),
          q("How long does ischemic chest pain classically last?", "Minutes to hours", ["Seconds", "Days to weeks continuously", "Under one second"], "Ischemic pain lasts minutes to hours, not seconds. (Slide 44)"),
          q("Which is listed as a symptom of CAD?", "Diaphoresis", ["Fever", "Rash", "Diarrhea"], "Sympathetic surge from ischemia causes sweating (diaphoresis). (Slide 44)"),
          q("Dyspnea from CAD is typically worse with:", "Exertion", ["Rest", "Eating", "Lying on the right side"], "Exertion raises demand, so CAD dyspnea worsens with activity. (Slide 44)")],
        [q("A 40-year-old has sharp left chest pain that worsens when you press on his sternum. What does this point toward?", "A noncardiac (chest wall) cause", ["Classic ischemic pain", "STEMI", "Stable angina"], "Slide 44: ischemic pain does not worsen with palpation."),
          q("A 62-year-old has 20 minutes of dull substernal pressure radiating to the left arm with sweating and nausea. How classic is this?", "Classic for myocardial ischemia", ["Classic for pericarditis", "Classic for GERD", "Classic for a chest wall strain"], "Dull substernal pressure radiating to the arm with sweating and nausea is classic ischemia. (Slide 44)")])
    ]),

    S("10-women", "10. Ischemia in women", "Objective 6 (slides 45 to 46): how women's symptoms differ and why they are missed.", [
      C("Know the difference",
        "<p>Women <strong>often report</strong> ischemic symptoms, but <strong>clinicians are less likely to recognize them</strong> as cardiac.</p>" +
        tbl(["Women (red figure)", "Men (blue figure)"], [
          ["Jaw pain", "Sweating"], ["Shortness of breath", "Chest pain or tightness"], ["Chest discomfort or tightness", "Heartburn"],
          ["Backache", "Nausea or vomiting"], ["Extreme fatigue and nausea", ""]]) +
        tbl(["Study of 515 women with acute MI", "Finding"], [
          ["Most frequent symptoms", "<strong>Unusual fatigue, sleep disturbances, SOB, indigestion, anxiety</strong>"],
          ["Prodrome", "<strong>78%</strong> had at least one symptom for <strong>more than 1 month</strong> before the MI"],
          ["Chest discomfort", "<strong>Only 30%</strong>; described as aching, tightness, pressure, sharpness, burning, fullness or tingling"]]) +
        hy("Women: <strong>fatigue, sleep trouble, SOB</strong>, often <strong>weeks ahead</strong>, and chest pain in <strong>only 30%</strong>."),
        ["wm-missed", "wm-figure", "wm-symptoms", "wm-78", "wm-30"],
        [q("Why are ischemic symptoms in women often missed?", "Clinicians are less likely to recognize them as cardiac", ["Women rarely report symptoms", "Women do not get CAD", "Women never have chest pain"], "Women's symptoms are often atypical and get missed by clinicians. (Slide 45)"),
          q("In the study of 515 women with acute MI, the most frequent symptom was:", "Unusual fatigue", ["Crushing chest pain", "Syncope", "Palpitations"], "Unusual fatigue was the most common symptom in women before MI. (Slide 46)"),
          q("What percent of women had at least one symptom for more than a month before their MI?", "78%", ["8%", "30%", "100%"], "78% of women had at least one symptom for over a month before their MI. (Slide 46)"),
          q("What percent of the women reported chest discomfort?", "30%", ["78%", "90%", "5%"], "Only 30% of women reported chest discomfort. (Slide 46)"),
          q("Which is listed among the most frequent prodromal symptoms in women?", "Sleep disturbances", ["Fever", "Hemoptysis", "Leg swelling"], "Sleep disturbance was among the most frequent warning symptoms in women. (Slide 46)"),
          q("On the 'Know the difference' figure, which warning sign is listed for women?", "Jaw pain", ["Heartburn", "Sweating", "Nausea or vomiting"], "Jaw pain is a listed warning sign in women. (Slide 45)")],
        [q("A 64-year-old diabetic woman reports 6 weeks of unusual fatigue, poor sleep, indigestion and new dyspnea on stairs, but no chest pain. Best next thought?", "Consider myocardial ischemia; these are common female presentations", ["Reassure; no chest pain rules out CAD", "Treat as anxiety only", "Order only a sleep study"], "Fatigue, poor sleep, indigestion and dyspnea are common female ischemic presentations. (Slides 45 and 46)"),
          q("A woman describes her chest discomfort before an MI as burning and tingling. Does that rule out ischemia?", "No; women described aching, tightness, pressure, sharpness, burning, fullness or tingling", ["Yes; burning is always GERD", "Yes; tingling is always neurologic", "Only if it lasted seconds"], "Women describe ischemic discomfort many ways, including burning and tingling. (Slide 46)")])
    ]),

    S("11-evaluation", "11. Evaluating suspected CAD: pretest likelihood", "Objective 7 (slides 47 to 51): the Carl case, who gets tested, the 2024 ESC RF-CL model and the suspected stable angina algorithm.", [
      C("Carl and the first step",
        "<p><strong>Carl</strong>, 67, HTN and diabetes for 20 years, establishing care. For 4 months: <strong>chest tightness with SOB working in the yard</strong>; not better with cooler weather. <strong>No rest symptoms</strong>, nausea, sweats or dizziness; no cough, weight change or reflux.</p>" +
        ul(["<strong>Risk factors are the first step</strong>. Carl's: <strong>age, male sex, HTN, diabetes</strong>. Still to ask: <strong>smoking, dyslipidemia, family history of premature CAD</strong>, obesity, inactivity, diet, alcohol, CKD (from slide 6).",
          "A <strong>good H&amp;P</strong> is essential to begin the evaluation.",
          "Tests for cardiac ischemia are for people with significant risk who are <strong>SYMPTOMATIC</strong>.",
          "They are <strong>not routine screening</strong> of the general population (although they were in the past)."]) +
        hy("Only <strong>symptomatic</strong> patients get tested for ischemia."),
        ["ev-carl", "ev-rf-first", "ev-symptomatic"],
        [q("What is an important first step in deciding whether a patient has CAD?", "Knowing the patient's risk factors", ["Ordering a cardiac cath", "Ordering a CAC score on everyone", "Starting nitroglycerin"], "Risk factors set the pretest probability, the first step in judging CAD. (Slide 48)"),
          q("Who should be tested for cardiac ischemia?", "Patients with significant risk who are symptomatic", ["The whole general population", "Asymptomatic adults over 40", "Only children"], "Testing is for symptomatic patients with significant risk. (Slide 49)"),
          q("Are ischemia tests used to screen the general population today?", "No; only symptomatic persons are tested", ["Yes, every year", "Yes, every 5 years", "Only in smokers without symptoms"], "Ischemia tests aren't used to screen people without symptoms. (Slide 49)"),
          q("Which of Carl's features is a risk factor?", "20 years of diabetes", ["Moving to Dayton", "Yard work", "Cooler weather"], "Long-standing diabetes is a major risk factor. (Slide 47)")],
        [q("Carl, 67, with HTN and DM, has 4 months of exertional chest tightness and dyspnea doing yard work, no rest symptoms. What does this pattern suggest?", "Stable exertional angina from chronic stenosis", ["Acute STEMI", "Pericarditis", "GERD"], "Exertional symptoms only, for months = stable angina from a fixed stenosis. (Slides 42 and 47)"),
          q("Which risk factors should you still ask Carl about?", "Smoking, lipids and family history of premature CAD", ["Height and blood type", "Allergies to penicillin", "Travel history"], "The RF-CL model needs smoking, lipids and family history too. (Slides 6 and 48)"),
          q("An asymptomatic 50-year-old asks for a stress test 'just to check'. Best answer?", "Ischemia testing is for symptomatic patients, not routine screening", ["Order an exercise stress test yearly", "Order a cardiac cath", "Order MPI every 2 years"], "Ischemia tests are for symptomatic patients, not screening. (Slide 49)")]),
      C("Pretest likelihood and the algorithm",
        "<p>The approach to a patient <strong>without known CAD</strong> with suspected stable angina depends on the <strong>clinical likelihood of obstructive CAD</strong>.</p>" +
        tbl(["2024 ESC RF-CL model uses"], [["<strong>Age and sex</strong>"], ["<strong>Symptom characteristics</strong>"],
          ["<strong>Number of CV risk factors</strong>: smoking, dyslipidemia, hypertension, diabetes, family history of premature CAD"]]) +
        "<p>It estimates the <strong>pretest likelihood (%) of obstructive CAD</strong> to guide testing.</p>" +
        tbl(["Suspected stable angina: H&amp;P and ECG first", "Next step"], [
          ["<strong>No known CAD</strong>, likelihood <strong>&lt; 5%</strong>", "<strong>Testing not usually indicated</strong>"],
          ["No known CAD, likelihood <strong>5 to 15%</strong>", "<strong>CAC scoring, exercise ECG, or no testing</strong>"],
          ["No known CAD, likelihood <strong>&gt; 15%</strong>", "<strong>Stress test with imaging or CCTA</strong>"],
          ["<strong>Known CAD</strong>", "<strong>Optimize risk factors and antianginal medicines</strong> first; if symptoms persist: obstructive CAD → <strong>stress test with imaging</strong> for most; nonobstructive only → stress imaging, CCTA, or coronary flow reserve with PET or CMR"],
          ["Known CAD, symptoms resolve", "No further testing"]]) +
        mn("<strong>5 and 15</strong>: under 5 skip, 5 to 15 light test, over 15 real imaging."),
        ["pl-model", "pl-inputs", "pl-lt5", "pl-5-15", "pl-gt15", "pl-known"],
        [q("Which model estimates pretest likelihood of obstructive CAD on the slide?", "2024 ESC Risk Factor-weighted Clinical Likelihood (RF-CL)", ["Duke Treadmill Score", "CHA2DS2-VASc", "Wells score"], "The 2024 ESC RF-CL model estimates pretest likelihood of obstructive CAD. (Slide 50)"),
          q("Which is NOT an input to the RF-CL model?", "Troponin level", ["Age and sex", "Symptom characteristics", "Number of CV risk factors"], "RF-CL uses age, sex, symptoms and risk factors, not troponin. (Slide 50)"),
          q("Which risk factors are counted in the RF-CL model?", "Smoking, dyslipidemia, HTN, diabetes, family history of premature CAD", ["Obesity, alcohol, CKD, lupus, age", "Only smoking", "Only LDL"], "RF-CL counts smoking, lipids, HTN, diabetes and family history. (Slide 50)"),
          q("Pretest likelihood under 5%: next step?", "Testing not usually indicated", ["Stress test with imaging", "Invasive angiography", "CCTA"], "Under 5% likelihood, testing usually isn't needed. (Slide 51)"),
          q("Pretest likelihood 5 to 15%: next step?", "CAC scoring, exercise ECG, or no testing", ["Invasive angiography", "PET only", "Immediate CABG"], "5 to 15%: CAC, exercise ECG or no testing. (Slide 51)"),
          q("Pretest likelihood over 15%: next step?", "Stress test with imaging or CCTA", ["No testing", "CAC score only", "Reassurance"], "Over 15%: stress imaging or CCTA. (Slide 51)"),
          q("Known CAD with suspected stable angina: what comes first?", "Optimize risk factors and antianginal medications", ["Immediate cath", "CCTA", "No treatment"], "With known CAD, optimize risk factors and antianginals before testing. (Slide 51)")],
        [q("A 42-year-old woman with atypical symptoms and no risk factors has an estimated likelihood of obstructive CAD of 3%. Next step?", "Testing is not usually indicated", ["Stress MPI", "CCTA", "Invasive angiography"], "Under 5% likelihood, testing isn't usually indicated. (Slide 51)"),
          q("A patient without known CAD has a pretest likelihood of 30%. Which tests fit?", "Stress test with imaging or CCTA", ["No testing", "CAC alone", "Exercise ECG or nothing"], "Over 15% likelihood: stress imaging or CCTA. (Slide 51)"),
          q("A patient with a stent 4 years ago has angina despite optimized medicines and known obstructive CAD. Most patients like him get:", "A stress test with imaging", ["A CAC score", "No testing", "An exercise ECG without imaging"], "Known CAD with angina despite meds usually gets stress imaging. (Slide 51)")])
    ]),

    S("12-exercise-stress", "12. Exercise stress testing and the Duke score", "Objectives 8 and 10 (slides 52 to 56): who can do a treadmill test, the Bruce protocol, the Duke Treadmill Score and a sample report.", [
      C("Exercise treadmill test",
        ul(["For patients who can <strong>exercise adequately</strong> and have a <strong>resting EKG interpretable for ischemia</strong>.",
          "Connected to an <strong>EKG and BP monitor</strong>.",
          "<strong>Bruce protocol</strong>: speed and incline increase every <strong>3 minutes</strong>."]) +
        tbl(["Duke Treadmill Score variables"], [["<strong>Exercise duration</strong> (minutes)"], ["<strong>Maximum ST deviation</strong> (mm)"],
          ["<strong>Angina index</strong>: 0 = none, 1 = nonlimiting, 2 = exercise-limiting"]]) +
        tbl(["Score", "Risk", "What to do"], [
          ["<strong>≥ +5</strong>", "<strong>Low</strong>", "Favorable prognosis; more testing often unnecessary"],
          ["<strong>−10 to +4</strong>", "<strong>Intermediate</strong>", "Consider <strong>stress imaging or CCTA</strong>"],
          ["<strong>≤ −11</strong>", "<strong>High</strong>", "Prompt evaluation; consider <strong>invasive coronary angiography</strong>"]]) +
        hy("Duke score formula (standard teaching): <strong>minutes − (5 × mm ST deviation) − (4 × angina index)</strong>."),
        ["ex-who", "ex-bruce", "ex-duke-vars", "ex-duke-bands", "ex-duke-action"],
        [q("Who is appropriate for an exercise treadmill test?", "Someone who can exercise adequately with an interpretable resting EKG", ["Anyone with a LBBB", "Someone with active chest pain", "Someone who cannot walk"], "Treadmill ECG needs a patient who can exercise and a readable resting EKG. (Slide 52)"),
          q("In the Bruce protocol, speed and incline rise every:", "3 minutes", ["30 seconds", "10 minutes", "1 minute"], "The Bruce protocol steps up speed and incline every 3 minutes. (Slide 52)"),
          q("Which is NOT a Duke Treadmill Score variable?", "Resting heart rate", ["Exercise duration", "Maximum ST deviation", "Angina index"], "Duke uses exercise time, ST deviation and angina; not resting HR. (Slide 53)"),
          q("A Duke angina index of 2 means:", "Exercise-limiting angina", ["No angina", "Nonlimiting angina", "Angina at rest only"], "Angina index 2 = angina that stops the test. (Slide 53)"),
          q("A Duke Treadmill Score of +5 or higher is:", "Low risk", ["Intermediate risk", "High risk", "Uninterpretable"], "Duke +5 or more = low risk. (Slide 53)"),
          q("A Duke Treadmill Score of −10 to +4 is:", "Intermediate risk", ["Low risk", "High risk", "Normal"], "Duke -10 to +4 = intermediate risk. (Slide 53)"),
          q("A Duke Treadmill Score of −11 or lower is:", "High risk", ["Low risk", "Intermediate risk", "Normal"], "Duke -11 or less = high risk. (Slide 53)"),
          q("What does the Duke Treadmill Score estimate?", "Prognosis and risk after an exercise treadmill ECG", ["Pretest likelihood before testing", "Stroke risk in AF", "Bleeding risk"], "The Duke score turns treadmill results into prognosis. (Slide 53)"),
          q("Next step for an intermediate Duke score:", "Consider stress imaging or CCTA", ["No further testing", "Immediate CABG", "Repeat the same test in 10 years"], "Intermediate risk needs more info: stress imaging or CCTA. (Slide 54)"),
          q("Next step for a high-risk Duke score:", "Prompt evaluation; consider invasive coronary angiography", ["Reassure", "CAC scoring", "Nothing"], "High risk on Duke warrants prompt cath. (Slide 54)")],
        [q("A patient exercises 12 minutes with no ST change and no angina. Duke risk?", "Low (score +12)", ["Intermediate", "High", "Cannot calculate"], "Slide 53: 12 − 0 − 0 = +12."),
          q("A patient exercises 3 minutes, has 3 mm ST depression and stops because of angina. Duke risk?", "High (3 − 15 − 8 = −20)", ["Low", "Intermediate", "Normal"], "Duke = minutes - 5×ST mm - 4×angina index: 3 - 15 - 8 = -20, high risk."),
          q("After a low-risk Duke score, what is usually true?", "Prognosis is favorable and more testing is often unnecessary", ["Cath is required", "CABG is required", "MPI is mandatory"], "Low Duke risk means good prognosis and usually no more testing. (Slide 54)")]),
      C("Reading a sample report",
        tbl(["Item", "Result"], [
          ["Patient", "58-year-old man, intermittent exertional chest discomfort; <strong>Bruce protocol</strong>"],
          ["Exercise", "<strong>8 minutes</strong>, <strong>10 METs</strong>, max HR 150 (about <strong>93%</strong> of age-predicted)"],
          ["BP", "132/78 at rest → 178/82 at peak"],
          ["Symptoms", "<strong>Mild substernal pressure</strong> during exercise, gone in recovery"],
          ["ECG", "Baseline NSR; <strong>1 mm horizontal ST depression in V4 to V6</strong> at peak, resolved in recovery"],
          ["Stopped for", "Fatigue and mild chest discomfort"],
          ["Duke score", "<strong>−1 → intermediate risk</strong>"],
          ["Interpretation", "<strong>Abnormal</strong> exercise ECG: exercise-induced ST depression with exertional chest discomfort"]]) +
        hy("Check the math: 8 − (5 × 1) − (4 × 1, nonlimiting angina) = <strong>−1</strong>. Next step: consider <strong>stress imaging or CCTA</strong>."),
        ["rep-numbers", "rep-ecg", "rep-duke", "rep-next"],
        [q("In the sample report, where was the ST depression?", "V4 to V6", ["II, III, aVF", "V1 to V2", "aVR only"], "The ST depression was in V4 to V6 (lateral). (Slide 56)"),
          q("What Duke score did the sample patient get?", "−1", ["+5", "−11", "+10"], "The sample patient scored -1. (Slide 56)"),
          q("What kind of ST depression did the sample show?", "1 mm horizontal", ["3 mm upsloping", "None", "2 mm ST elevation"], "The sample showed 1 mm horizontal ST depression. (Slide 56)"),
          q("The sample patient's functional capacity was:", "10 METs", ["2 METs", "20 METs", "Not measured"], "The sample patient reached 10 METs. (Slide 55)"),
          q("The sample patient reached what share of age-predicted max heart rate?", "About 93%", ["About 50%", "About 70%", "Over 120%"], "The sample patient reached about 93% of max predicted HR. (Slide 55)")],
        [q("The sample patient (Duke −1, intermediate risk). What is the best next step?", "Consider stress imaging or CCTA", ["Discharge with no follow-up", "Emergency CABG", "Repeat the treadmill in 5 years"], "Duke -1 is intermediate, so add stress imaging or CCTA. (Slides 54 and 56)"),
          q("A treadmill shows 1 mm horizontal ST depression in V4 to V6 that resolves in recovery, with chest pressure. How do you read it?", "Abnormal: exercise-induced ischemia", ["Normal", "Artifact only", "Acute STEMI"], "Horizontal ST depression with symptoms during exercise = ischemia. (Slide 56)")])
    ]),

    S("13-pharm-stress", "13. Pharmacologic stress and choosing the test", "Objective 8 (slides 57 to 60): vasodilator vs dobutamine stress, the four rules, and exercise test contraindications.", [
      C("Two ways drugs stress the heart",
        tbl(["", "Coronary vasodilators", "Increase O2 demand"], [
          ["Drugs", "<strong>Adenosine</strong>, <strong>regadenoson (Lexiscan, most common)</strong>, <strong>dipyridamole (Persantine)</strong>", "<strong>Dobutamine</strong> (stress echo)"],
          ["How", "Dilate coronary arterioles: flow rises <strong>more in healthy territories</strong> than in territories behind a stenosis", "↑ <strong>heart rate and contractility</strong>, simulating exercise"]]) +
        hy("Vasodilators create a <strong>flow difference</strong> (steal); dobutamine creates <strong>demand</strong>."),
        ["ph-vaso", "ph-lexiscan", "ph-dobut", "ph-mech"],
        [q("Which pharmacologic stress agent is the most common?", "Regadenoson (Lexiscan)", ["Dipyridamole", "Dobutamine", "Adenosine"], "Regadenoson is the most commonly used pharmacologic stress agent. (Slide 57)"),
          q("Persantine is the brand name of:", "Dipyridamole", ["Regadenoson", "Dobutamine", "Adenosine"], "Persantine = dipyridamole. (Slide 57)"),
          q("How do coronary vasodilators reveal ischemia?", "Flow rises more in healthy territories than behind a stenosis", ["They raise heart rate like exercise", "They block platelets", "They constrict healthy arteries"], "Healthy arteries dilate more than stenosed ones, so the narrowed territory shows a defect. (Slide 57)"),
          q("Which stress agent increases myocardial oxygen demand?", "Dobutamine", ["Adenosine", "Regadenoson", "Dipyridamole"], "Dobutamine raises HR and contractility, raising O2 demand. (Slide 57)"),
          q("Dobutamine is mainly paired with which imaging?", "Stress echo", ["CAC scoring", "Chest x-ray", "CCTA"], "Dobutamine's wall motion effects are watched with echo. (Slide 57)")],
        [q("A stress lab gives an agent that raises the heart rate and contractility while the patient lies still for echo images. Which agent?", "Dobutamine", ["Regadenoson", "Adenosine", "Dipyridamole"], "Dobutamine raises HR and contractility while the patient lies still. (Slide 57)")]),
      C("Who gets which stress test: the four rules",
        tbl(["Rule", "What it says"], [
          ["<strong>#1</strong>", "<strong>Acute MI / ongoing ischemia</strong> is a contraindication to <strong>any</strong> stress test"],
          ["<strong>#2</strong>", "<strong>Exercise is generally preferred</strong>; not possible if the patient cannot exercise (joint disease, deconditioning, obesity)"],
          ["<strong>#3</strong>", "<strong>Baseline EKG abnormalities (LBBB, ventricular pacing)</strong> → <strong>pharmacologic stress with imaging</strong>"],
          ["<strong>#4</strong>", "<strong>No vasodilators</strong> with: <strong>hypotension</strong>, <strong>high-degree AV block</strong>, <strong>sick sinus syndrome</strong>, <strong>active wheezing</strong> (COPD, asthma)"]]) +
        "<p><strong>Choosing a test (slide 60):</strong></p>" +
        tbl(["Situation", "Test"], [
          ["Contraindication to exercise, cannot use a treadmill or bike, or poor exercise capacity", "<strong>Pharmacologic stress with imaging</strong>"],
          ["<strong>LBBB or ventricular pacing</strong> on baseline ECG", "<strong>Pharmacologic stress with imaging</strong>"],
          ["Baseline <strong>≥ 1 mm ST depression</strong>, <strong>WPW</strong> pre-excitation, <strong>LVH with ST-T changes</strong>, or <strong>ST-T changes from digoxin</strong>", "<strong>Exercise stress with imaging</strong>"],
          ["None of those, <strong>intermediate or high</strong> CAD risk", "<strong>Exercise stress with imaging</strong>"],
          ["None of those, <strong>low</strong> CAD risk", "<strong>Exercise stress without imaging</strong>"]]) +
        mn("Rule 4, why: adenosine-type drugs slow AV and sinus nodes, drop BP and cause bronchospasm (standard teaching). So: <strong>low BP, slow nodes, wheeze</strong> = no vasodilator."),
        ["rule1", "rule2", "rule3", "rule4", "choose-alg"],
        [q("Which is a contraindication to stress testing of any type?", "Acute MI or ongoing cardiac ischemia", ["Hypertension controlled on medicines", "Prior stent 10 years ago", "Age over 65"], "Never stress a patient with an acute MI or ongoing ischemia. (Slide 58)"),
          q("Which stress test is generally preferred?", "Exercise", ["Dobutamine", "Regadenoson", "Dipyridamole"], "Exercise is preferred because it also measures functional capacity. (Slide 58)"),
          q("A baseline LBBB or ventricular pacing calls for:", "Pharmacologic stress with imaging", ["Exercise ECG without imaging", "No testing ever", "CAC scoring"], "LBBB and pacing make the ST segments unreadable and cause false defects with exercise, so use pharmacologic imaging. (Slide 59)"),
          q("Which condition is a reason NOT to use a vasodilator stress agent?", "Active wheezing", ["Knee arthritis", "Obesity", "LBBB"], "Vasodilators like regadenoson can trigger bronchospasm. (Slide 59)"),
          q("Which conduction problem rules out vasodilator stress?", "High-degree AV block", ["First-degree AV block", "Sinus arrhythmia", "Right bundle branch block"], "Vasodilator agents can worsen AV block. (Slide 59)"),
          q("Sick sinus syndrome and hypotension are contraindications to:", "Vasodilator stress agents", ["All echo", "Exercise testing on a bike only", "CAC scoring"], "Vasodilators slow conduction and drop BP, so avoid them in SSS or hypotension. (Slide 59)"),
          q("Baseline WPW pre-excitation or digoxin ST-T changes call for:", "Exercise stress with imaging", ["Exercise ECG without imaging", "No testing", "Pharmacologic stress without imaging"], "WPW and digoxin distort ST segments, so add imaging to exercise. (Slide 60)"),
          q("A patient with a normal baseline ECG and LOW CAD risk who can exercise gets:", "Exercise stress test without imaging", ["Pharmacologic stress with imaging", "Invasive angiography", "Dobutamine echo"], "Low risk with a normal ECG who can exercise needs only a plain treadmill ECG. (Slide 60)")],
        [q("A 70-year-old with severe knee osteoarthritis needs ischemia testing. Which test?", "Pharmacologic stress with imaging", ["Treadmill test", "Exercise ECG without imaging", "No test possible"], "He can't exercise, so pharmacologic stress with imaging. (Slides 58 and 60)"),
          q("A patient with asthma who is wheezing today cannot exercise. Which pharmacologic agent fits?", "Dobutamine stress echo", ["Regadenoson", "Adenosine", "Dipyridamole"], "Vasodilators can cause bronchospasm, so use dobutamine. (Slides 57 and 59)"),
          q("A patient with a pacemaker (ventricular pacing) needs stress testing. Which test?", "Pharmacologic stress with imaging", ["Treadmill ECG without imaging", "CAC score", "No test"], "Ventricular pacing hides ST changes, so pharmacologic stress with imaging. (Slide 59)"),
          q("A patient has LVH with baseline ST-T changes and can walk well. Which test?", "Exercise stress test with imaging", ["Exercise ECG alone", "No test", "Vasodilator without imaging"], "Baseline ST changes make the ECG unreadable, so exercise plus imaging. (Slide 60)")]),
      C("Exercise test contraindications",
        tbl(["Absolute", "Relative"], [
          ["<strong>Acute MI within 2 days</strong>", "Known obstructive <strong>left main</strong> stenosis"],
          ["<strong>Ongoing unstable angina</strong>", "Moderate or severe AS with uncertain relation to symptoms"],
          ["Uncontrolled arrhythmia with hemodynamic compromise", "Atrial tachyarrhythmias with uncontrolled rates"],
          ["<strong>Active endocarditis</strong>", "Acquired advanced or complete heart block"],
          ["<strong>Symptomatic severe aortic stenosis</strong>", "HCM with severe resting gradient"],
          ["<strong>Decompensated HF</strong>", "Recent stroke or TIA"],
          ["Acute PE, pulmonary infarction, DVT", "Mental impairment limiting cooperation"],
          ["Acute myocarditis or pericarditis", "<strong>Severe HTN: SBP &gt; 200 or DBP &gt; 110</strong>"],
          ["<strong>Acute aortic dissection</strong>", "Uncorrected conditions: severe anemia, electrolyte imbalance, hyperthyroidism"],
          ["Physical disability preventing safe testing", ""]]),
        ["ci-abs", "ci-rel", "ci-bp"],
        [q("Acute MI within how many days is an absolute contraindication to exercise testing?", "2 days", ["2 weeks", "2 months", "1 year"], "An MI within 2 days is an absolute contraindication. (Slide 60)"),
          q("Which is an ABSOLUTE contraindication to exercise testing?", "Acute aortic dissection", ["Recent TIA", "Known left main stenosis", "Severe anemia"], "Exercise could extend an acute dissection, so it's absolute. (Slide 60)"),
          q("Which is a RELATIVE contraindication to exercise testing?", "Known obstructive left main stenosis", ["Symptomatic severe AS", "Active endocarditis", "Ongoing unstable angina"], "Known left main disease is a relative contraindication: risky but not forbidden. (Slide 60)"),
          q("Severe hypertension as a relative contraindication is defined as:", "SBP over 200 or DBP over 110", ["SBP over 140", "DBP over 90", "SBP over 160 or DBP over 100"], "Severe HTN = SBP over 200 or DBP over 110. (Slide 60)"),
          q("Symptomatic severe aortic stenosis is what kind of contraindication to exercise testing?", "Absolute", ["Relative", "Not a contraindication", "Only for pharmacologic tests"], "Symptomatic severe AS can cause collapse or death with exercise. (Slide 60)")],
        [q("A patient scheduled for a treadmill test arrives with BP 214/112 and no symptoms. What should you do?", "Do not proceed now: severe HTN is a relative contraindication", ["Proceed; BP does not matter", "Give dobutamine instead", "Do a cath instead"], "BP over 200/110 is a relative contraindication, so hold off. (Slide 60)"),
          q("A patient with fever, a new murmur and positive blood cultures is booked for a treadmill test. What now?", "Cancel: active endocarditis is an absolute contraindication", ["Proceed with exercise", "Proceed with regadenoson", "Do it after a 2-day wait"], "Active endocarditis is an absolute contraindication. (Slide 60)")])
    ]),

    S("14-mpi-stress-echo", "14. Myocardial perfusion imaging and stress echo", "Objectives 8 and 10 (slides 61 to 65): what MPI shows, how it is done, reading reversible defects, its one contraindication, and stress echo.", [
      C("Radionuclide MPI",
        tbl(["", "MPI"], [
          ["Purpose", "Evaluates myocardial blood flow <strong>at rest and during stress</strong>; finds reduced perfusion; judges extent and severity"],
          ["Especially useful", "<strong>Baseline ECG abnormalities</strong> (e.g., LBBB); patients <strong>unable to exercise</strong>; patients needing more perfusion detail"],
          ["How", "Exercise or pharmacologic stress → <strong>IV radioactive tracer during stress</strong> → <strong>gamma camera</strong> images → <strong>compare rest and stress</strong>"],
          ["Only contraindication", "<strong>Pregnancy</strong> (radioactive tracer)"],
          ["Read by", "A specially trained cardiologist; reports each section and often calculates an <strong>EF</strong>"]]) +
        hy("<strong>Reversible ischemia</strong>: <strong>dark (no tracer) on stress images</strong> but <strong>filled with tracer at rest</strong>.") +
        "<p>A stress test is <strong>positive</strong> if there is evidence of ischemia on <strong>ECG or imaging</strong>.</p>" +
        tbl(["Pattern (standard teaching)", "Meaning"], [["Defect on stress, normal at rest", "<strong>Ischemia</strong> (reversible)"], ["Defect on stress and at rest", "<strong>Scar / infarct</strong> (fixed)"]]),
        ["mpi-purpose", "mpi-useful", "mpi-how", "mpi-reversible", "mpi-preg", "mpi-positive", "mpi-ef"],
        [q("What does MPI evaluate?", "Myocardial blood flow at rest and during stress", ["Coronary calcium only", "Valve gradients", "Pericardial fluid"], "MPI shows blood flow to the myocardium at rest and with stress. (Slide 61)"),
          q("In MPI, when is the radioactive tracer injected?", "During stress", ["Only the next day", "Before any IV is placed", "It is swallowed"], "Tracer injected at peak stress shows where flow falls short. (Slide 62)"),
          q("Which camera obtains the MPI images?", "A gamma camera", ["An ultrasound probe", "An MRI coil", "A fluoroscope"], "A gamma camera detects the tracer. (Slide 62)"),
          q("On MPI, reversible ischemia looks like:", "A dark area on stress images that fills with tracer at rest", ["Dark on both stress and rest images", "Bright on stress, dark at rest", "Normal on both"], "A stress defect that fills in at rest = reversible ischemia. (Slide 63)"),
          q("What is the only contraindication to MPI?", "Pregnancy", ["Diabetes", "LBBB", "Obesity"], "Pregnancy is the only contraindication because of radiation to the fetus. (Slide 64)"),
          q("A stress test is positive if there is evidence of ischemia on:", "ECG or imaging", ["Only a chest x-ray", "Only troponin", "Only symptoms"], "Ischemia on either ECG or imaging makes the test positive. (Slide 64)"),
          q("Besides perfusion, the MPI reader often calculates the:", "Ejection fraction", ["Agatston score", "Duke score", "Valve area"], "MPI can also calculate the EF. (Slide 64)"),
          q("A defect on both stress and rest MPI images suggests:", "Scar (fixed defect)", ["Reversible ischemia", "Normal study", "Artifact always"], "A defect at both stress and rest means no flow ever: scar (standard teaching).")],
        [q("A 34-year-old pregnant woman with chest pain needs ischemia testing. Which test should be avoided?", "MPI (radioactive tracer)", ["Stress echo", "Exercise ECG", "Bedside ECG"], "MPI uses radioactive tracer, so avoid it in pregnancy. (Slide 64)"),
          q("MPI shows an inferior wall that is dark on stress images and normal at rest. Interpretation?", "Reversible inferior ischemia", ["Old inferior infarct", "Normal study", "Pericarditis"], "Dark on stress, normal at rest = reversible ischemia. (Slide 63)"),
          q("A patient with LBBB cannot exercise. Which test fits best?", "Pharmacologic stress MPI", ["Treadmill ECG alone", "CAC score", "No testing"], "LBBB with no exercise = pharmacologic (vasodilator) MPI. (Slides 59 and 61)")]),
      C("Stress echocardiography",
        ul(["A <strong>baseline resting echo</strong> first.",
          "Stress by <strong>exercise</strong> (treadmill or bicycle) or <strong>dobutamine</strong>.",
          "Looks for <strong>wall motion abnormalities induced by ischemia</strong>.",
          "<strong>Dobutamine stress echo</strong> can also assess <strong>viability of hibernating myocardium</strong>."]),
        ["se-baseline", "se-stress", "se-wma", "se-viability"],
        [q("Stress echo looks for:", "Ischemia-induced wall motion abnormalities", ["Tracer defects", "Coronary calcium", "ST elevation only"], "Stress echo looks for walls that stop moving well under stress. (Slide 65)"),
          q("What is done first in a stress echo?", "A baseline resting echo", ["The tracer injection", "A cath", "A CAC score"], "A resting echo is the baseline for comparison. (Slide 65)"),
          q("Which drug is used for pharmacologic stress echo?", "Dobutamine", ["Regadenoson", "Adenosine", "Nitroglycerin"], "Dobutamine is used for pharmacologic stress echo. (Slide 65)"),
          q("Which stress test can also assess viability of hibernating myocardium?", "Dobutamine stress echo", ["Exercise ECG", "CAC scoring", "Regadenoson MPI only"], "Low-dose dobutamine can wake up hibernating muscle, showing it's viable. (Slide 65)")],
        [q("Before deciding on CABG, a cardiologist wants to know if a weak, chronically underperfused wall is still alive. Which stress test from the slides?", "Dobutamine stress echo for viability", ["Exercise ECG", "CAC score", "Exercise ECG without imaging"], "Dobutamine stress echo can show hibernating muscle is still viable. (Slides 38 and 65)")])
    ]),

    S("15-stress-appropriate", "15. Who should and should not get a stress test", "Objective 8 (slides 66 to 69): appropriate and inappropriate stress testing.", [
      C("Appropriate vs inappropriate",
        tbl(["Appropriate", "Inappropriate"], [
          ["Angina-like symptoms with <strong>intermediate or high pretest probability</strong>", "<strong>Active chest pain</strong> or other ACS symptoms (UA, NSTEMI)"],
          ["<strong>Recent UA or NSTEMI treated conservatively</strong> without a left heart cath (to <strong>risk stratify</strong>)", "Prior revascularization with <strong>no new symptoms</strong>: <strong>&lt; 5 years after CABG</strong> or <strong>&lt; 2 years after PCI with stent</strong>"],
          ["<strong>Known CAD</strong> with new or worsening symptoms", "<strong>Asymptomatic</strong> patients (rare exceptions)"],
          ["<strong>New HFrEF or cardiomyopathy</strong> when a cath is not planned", "<strong>Acutely decompensated HF</strong> or <strong>uncontrolled arrhythmias</strong>"],
          ["<strong>Pre-op</strong> for elective noncardiac surgery in a patient with active cardiac conditions, when evaluation is indicated", "<strong>Advanced/critical aortic stenosis</strong>"],
          ["", "<strong>Pulmonary embolus</strong> or <strong>infective endocarditis</strong>"],
          ["", "Illness worsened by stress: <strong>thyrotoxicosis</strong>, acute systemic illness or infection"]]) +
        mn("After revascularization: <strong>CABG 5, stent 2</strong> years of no routine testing without new symptoms."),
        ["ap-symptoms", "ap-acs-conserv", "ap-known", "ap-hfref", "ap-preop", "in-acs", "in-revasc", "in-asx", "in-other"],
        [q("Which patient is appropriate for stress testing?", "Angina-like symptoms with intermediate pretest probability", ["Active chest pain right now", "Asymptomatic adult wanting a check", "Critical aortic stenosis"], "Intermediate probability with symptoms is the ideal stress test candidate. (Slide 66)"),
          q("Why stress-test a patient after UA or NSTEMI treated without a cath?", "To risk stratify", ["To diagnose the NSTEMI", "To treat the clot", "It is never done"], "A stress test risk-stratifies UA/NSTEMI managed without cath. (Slide 66)"),
          q("Stress testing is inappropriate without new symptoms within how long after CABG?", "5 years", ["2 years", "6 months", "10 years"], "Under 5 years after CABG without new symptoms, testing is inappropriate. (Slide 68)"),
          q("Stress testing is inappropriate without new symptoms within how long after PCI with stent?", "2 years", ["5 years", "1 month", "10 years"], "Under 2 years after PCI without new symptoms, testing is inappropriate. (Slide 68)"),
          q("New HFrEF is an appropriate stress test indication when:", "A cardiac cath is not planned", ["A cath is already scheduled", "The patient is decompensated", "Never"], "New HFrEF without a planned cath can be evaluated for ischemia by stress test. (Slide 67)"),
          q("Which is an inappropriate stress test patient?", "Acutely decompensated HF", ["Known CAD with worsening symptoms", "New cardiomyopathy without planned cath", "Pre-op with active cardiac conditions"], "Decompensated HF is too unstable for stress testing. (Slide 69)"),
          q("Which illness is listed as aggravated by stress testing?", "Thyrotoxicosis", ["Hypothyroidism", "Seasonal allergies", "Gout"], "Thyrotoxicosis can be worsened by stress testing. (Slide 69)"),
          q("Advanced or critical aortic stenosis is:", "An inappropriate stress test situation", ["A main indication", "Not relevant", "Only a CAC contraindication"], "Critical AS can cause collapse under stress. (Slide 69)")],
        [q("A man had a stent 14 months ago, feels well, and asks for a routine stress test. Appropriate?", "No; under 2 years after PCI with no new symptoms", ["Yes; annual testing is required", "Yes; always after a stent", "Only if he is over 50"], "Less than 2 years after PCI with no new symptoms = inappropriate. (Slide 68)"),
          q("A woman had CABG 7 years ago and now has new exertional dyspnea and chest tightness. Appropriate?", "Yes; known CAD with new symptoms", ["No; never after CABG", "No; wait until 10 years", "Only a CAC score is allowed"], "Over 5 years post-CABG with new symptoms is appropriate. (Slide 67)"),
          q("A patient in the ED has ongoing chest pain with dynamic ST depression. Should he get a stress test now?", "No; active ACS symptoms make stress testing inappropriate", ["Yes, exercise test now", "Yes, regadenoson now", "Yes, dobutamine now"], "Active ACS is a contraindication; stress testing is for stable patients. (Slide 68)")])
    ]),

    S("16-ccta", "16. Coronary CT angiography", "Objective 9 (slides 70 to 73): what CCTA shows, when to use it, its limits, the four results, and when stress testing is preferred.", [
      C("CCTA: what, when, limits",
        tbl(["", "CCTA"], [
          ["What it does", "<strong>IV contrast</strong> CT to see coronary arteries, <strong>calcified and noncalcified plaque</strong> and luminal narrowing"],
          ["When useful", "<strong>Stable chest pain, no established CAD</strong>, especially <strong>intermediate</strong> likelihood; clarifies <strong>inconclusive or abnormal stress tests</strong>"],
          ["Limits", "<strong>Radiation</strong> and <strong>iodinated contrast</strong>; image quality worse with <strong>heavy calcification</strong> or <strong>irregular rhythm</strong>; <strong>incidental findings</strong>"]]) +
        hy("CCTA is <strong>anatomic</strong> (shows the plaque); stress tests are <strong>functional</strong> (show ischemia)."),
        ["ct-what", "ct-when", "ct-limits", "ct-anat"],
        [q("What does CCTA visualize?", "Coronary arteries, calcified and noncalcified plaque, and narrowing", ["Only calcium", "Only wall motion", "Only myocardial perfusion"], "CCTA shows the coronary lumen, both calcified and soft plaque, and narrowing. (Slides 70 and 71)"),
          q("CCTA is most useful in:", "Stable chest pain without established CAD, intermediate likelihood", ["Active STEMI", "Known heavy coronary calcification", "Asymptomatic screening of everyone"], "CCTA fits stable chest pain without known CAD at intermediate likelihood. (Slide 70)"),
          q("Which is a limitation of CCTA?", "Radiation and iodinated contrast", ["It cannot see plaque", "It requires exercise", "It needs a radioactive tracer"], "CCTA needs radiation and iodinated contrast. (Slide 70)"),
          q("CCTA image quality falls with:", "Heavy calcification or irregular heart rhythm", ["Slow regular rhythm", "Thin body habitus", "Normal kidneys"], "Heavy calcium and irregular rhythm both degrade CCTA images. (Slide 70)"),
          q("Can CCTA help after an inconclusive stress test?", "Yes; it can clarify inconclusive or abnormal results", ["No; never", "Only after CABG", "Only in pregnancy"], "CCTA can clarify an inconclusive or abnormal stress test. (Slide 70)")],
        [q("A 55-year-old with stable atypical chest pain, no known CAD and intermediate likelihood wants a noninvasive look at his arteries. Which test fits?", "CCTA", ["CAC score alone", "Invasive cath first", "No testing"], "Stable, no known CAD, intermediate likelihood = CCTA. (Slide 70)"),
          q("A patient in atrial fibrillation with a rapid irregular rate is scheduled for CCTA. What concern?", "Irregular rhythm lowers image quality", ["AF makes CCTA more accurate", "No concern", "AF is a pregnancy issue"], "A fast irregular rhythm blurs gated CT images. (Slide 70)")]),
      C("Results and when to prefer stress testing",
        tbl(["CCTA result", "Management"], [
          ["<strong>A. No coronary atherosclerosis</strong>", "Excellent prognosis; <strong>reassurance</strong>; symptoms non-atherosclerotic"],
          ["<strong>B. Nonobstructive (&lt; 50%)</strong>", "Preventive pharmacotherapy, risk factor modification and lifestyle"],
          ["<strong>C. Moderate (50 to 69%)</strong>", "Medical management if <strong>non-proximal</strong>; consider <strong>CT-FFR</strong> if proximal or revascularization for symptoms; aggressive risk factor modification"],
          ["<strong>D. Obstructive (likely flow-limiting)</strong>", "<strong>Symptom-guided anti-ischemic therapy, including revascularization</strong>; preventive pharmacotherapy"]]) +
        tbl(["Prefer stress testing over CCTA when", "Why"], [
          ["<strong>Known moderate or severe coronary calcification</strong>", "Calcium <strong>obscures the lumen</strong>, so stenosis is hard to measure"],
          ["Age <strong>&gt; 65</strong>", "Likely to have coronary calcification"],
          ["<strong>Chronic kidney disease</strong>", "Risk of <strong>contrast-induced AKI</strong>"]]),
        ["ct-a", "ct-b", "ct-c", "ct-d", "ct-calc", "ct-65", "ct-ckd"],
        [q("CCTA shows no coronary atherosclerosis. Management?", "Reassurance; symptoms are not atherosclerotic", ["CABG", "Stent", "Lifelong dual antiplatelet therapy"], "No plaque on CCTA = reassurance; the pain isn't atherosclerotic. (Slide 72)"),
          q("CCTA shows nonobstructive disease under 50%. Management?", "Preventive pharmacotherapy and risk factor modification", ["Immediate revascularization", "Nothing", "Repeat CCTA every month"], "Plaque under 50% needs prevention: statin and risk factor control. (Slide 72)"),
          q("What range is moderate stenosis on CCTA?", "50 to 69%", ["Under 50%", "70 to 99%", "100%"], "Moderate stenosis is 50 to 69%. (Slide 72)"),
          q("Moderate stenosis in a proximal location: what can be considered?", "CT-FFR", ["Reassurance only", "Thrombolytics", "CAC score"], "CT-FFR checks whether a moderate proximal lesion is flow-limiting. (Slide 72)"),
          q("Why prefer stress testing over CCTA with known heavy coronary calcium?", "Calcium obscures the lumen and makes stenosis hard to quantify", ["Calcium blocks the treadmill", "Calcium causes contrast allergy", "Calcium makes CCTA more accurate"], "Calcium blooms on CT and hides the lumen. (Slide 73)"),
          q("Above what age is stress testing preferred over CCTA?", "65", ["40", "50", "80"], "Over 65, coronary calcium is likely, so stress testing is preferred. (Slide 73)"),
          q("Why prefer stress testing over CCTA in CKD?", "Risk of contrast-induced acute kidney injury", ["CKD causes false-negative stress tests", "CKD patients cannot lie flat", "No reason"], "CCTA needs contrast, which risks AKI in CKD. (Slide 73)")],
        [q("A 72-year-old with stable exertional chest pain and no known CAD needs testing. Stress test or CCTA?", "Stress test, because over 65 he likely has coronary calcium", ["CCTA always in the elderly", "Neither", "CAC score only"], "Over 65 he likely has calcium, so stress testing is preferred. (Slide 73)"),
          q("A patient with eGFR 28 needs evaluation for stable angina. Stress test or CCTA?", "Stress test, to avoid contrast-induced AKI", ["CCTA with extra contrast", "CCTA is the only option", "No test"], "Avoid CCTA contrast with eGFR 28; use a stress test. (Slide 73)"),
          q("CCTA shows obstructive, likely flow-limiting LAD disease in a symptomatic patient. Management?", "Symptom-guided anti-ischemic therapy, including revascularization", ["Reassurance", "No change", "Repeat CCTA in 10 years"], "Obstructive disease with symptoms needs anti-ischemic therapy, including revascularization. (Slide 72)")])
    ]),

    S("17-cac", "17. Coronary artery calcium score", "Objective 9 (slides 74 to 75): what the CAC score measures, what zero means, and when to use it.", [
      C("CAC scoring",
        ul(["<strong>Noncontrast CT</strong> that measures <strong>calcified plaque burden</strong>.",
          "Reported as an <strong>Agatston score</strong>.",
          "<strong>Score of 0</strong> = no detectable calcified plaque, but it <strong>does not exclude noncalcified plaque or CAD</strong>.",
          "Used <strong>selectively</strong> to refine <strong>primary-prevention</strong> decisions when the need for <strong>lipid-lowering therapy is uncertain</strong>.",
          "<strong>Higher score</strong> = more calcified plaque and generally <strong>higher ASCVD risk</strong>.",
          "Slide 75 examples: scores of <strong>0, 29, 250 and 1,200</strong>, with more white calcium as the score rises."]) +
        hy("CAC vs CCTA: CAC uses <strong>no contrast</strong> and sees <strong>only calcium</strong>; CCTA uses <strong>contrast</strong> and sees <strong>soft plaque and the lumen</strong>."),
        ["cac-what", "cac-agatston", "cac-zero", "cac-use", "cac-higher"],
        [q("Does a CAC scan use IV contrast?", "No; it is noncontrast CT", ["Yes, always", "Only in women", "It uses a radioactive tracer"], "CAC is a noncontrast CT. (Slide 74)"),
          q("The CAC score is reported as the:", "Agatston score", ["Duke score", "Gensini score", "Wells score"], "CAC is reported as the Agatston score. (Slide 74)"),
          q("What does a CAC score of 0 mean?", "No detectable calcified plaque, but noncalcified plaque or CAD is not excluded", ["CAD is fully excluded", "The patient has an MI", "The scan failed"], "CAC 0 means no calcium, but soft plaque can still be there. (Slide 74)"),
          q("When is CAC scoring mainly used?", "To refine primary-prevention decisions when need for lipid-lowering therapy is uncertain", ["To diagnose acute MI", "To guide stent placement", "To screen every adult yearly"], "CAC helps decide on statins when primary-prevention risk is uncertain. (Slide 74)"),
          q("A higher CAC score means:", "More calcified plaque and generally higher ASCVD risk", ["Lower ASCVD risk", "Less plaque", "Nothing about risk"], "More calcium = more plaque = higher risk. (Slide 74)")],
        [q("A 55-year-old with borderline risk is unsure about starting a statin. Which test can refine the decision?", "CAC score", ["Invasive angiography", "Dobutamine echo", "MPI"], "CAC refines borderline risk when the statin decision is unclear. (Slide 74)"),
          q("A 48-year-old smoker has a CAC of 0 and asks if he is 'cleared' of heart disease. Best answer?", "No; noncalcified plaque can still be present", ["Yes; zero means no CAD", "Yes, for life", "Only if he stops smoking"], "CAC sees only calcium; soft plaque (common in smokers) can still be there. (Slide 74)"),
          q("Two patients have CAC scores of 29 and 1,200. Who has higher ASCVD risk?", "The patient with 1,200", ["The patient with 29", "They are equal", "CAC does not relate to risk"], "A CAC of 1,200 means far more plaque and higher risk. (Slides 74 and 75)")])
    ]),

    S("18-angiography-pci", "18. Invasive coronary angiography and PCI", "Objectives 9 and 10 (slides 76 to 86): what cath shows, how it is done, risks, reading a report, ventriculogram, and PCI.", [
      C("Coronary angiography: what and how",
        ul(["Uses <strong>contrast dye and fluoroscopy</strong> to see the coronaries and identify stenosis or occlusion.",
          "<strong>Invasive coronary angiography is the reference standard</strong> for defining coronary anatomy.",
          "Allows <strong>intervention</strong> (PCI with stent) when indicated: <strong>diagnostic and therapeutic</strong>."]) +
        chain(["<strong>Vascular access</strong>: <strong>radial (wrist)</strong> or <strong>femoral (groin)</strong> artery; small introducer sheath",
          "<strong>Catheter advanced</strong> through the artery into the aorta under fluoroscopy, to the <strong>ostia</strong> of the coronaries",
          "<strong>Iodinated contrast injected</strong>; fluoroscopy shows anatomy and narrowing; a short film clip is made"]) +
        "<p>Slide 79: normal <strong>RCA</strong> (A) and normal <strong>LAD (front)</strong> and <strong>left circumflex (side)</strong> (B).</p>",
        ["cath-what", "cath-gold", "cath-access", "cath-ostia", "cath-film"],
        [q("Which test is the reference standard for defining coronary anatomy?", "Invasive coronary angiography", ["CCTA", "CAC score", "MPI"], "Invasive angiography is the gold standard for coronary anatomy. (Slide 76)"),
          q("Coronary angiography uses:", "Contrast dye and fluoroscopy", ["Radioactive tracer and gamma camera", "Ultrasound only", "MRI only"], "Angiography uses contrast under fluoroscopy (x-ray). (Slide 76)"),
          q("Which arteries are used for access in coronary angiography?", "Radial or femoral", ["Carotid or subclavian", "Jugular or femoral vein", "Brachial vein"], "Access is through the radial or femoral artery. (Slide 77)"),
          q("Where is the catheter tip positioned for coronary angiography?", "At the ostia (openings) of the coronary arteries", ["In the right atrium", "In the pulmonary artery", "In the IVC"], "The catheter tip sits at the coronary ostia to inject contrast. (Slide 77)"),
          q("Can coronary angiography be therapeutic?", "Yes; PCI can be done in the same procedure", ["No; it is only diagnostic", "Only with CABG", "Only for valves"], "A stent can be placed during the same cath. (Slide 84)")],
        [q("A cardiologist wants the definitive map of a patient's coronary anatomy and the option to stent in the same sitting. Which test?", "Invasive coronary angiography", ["CCTA", "CAC score", "Stress echo"], "Angiography maps the anatomy and allows stenting in the same sitting. (Slides 76 and 84)")]),
      C("Risks and reading the report",
        tbl(["Risks"], [["<strong>Bleeding, hematoma or vascular injury</strong> at the access site"], ["<strong>Contrast-associated AKI</strong> or <strong>allergic reaction</strong>"],
          ["<strong>Radiation exposure</strong>"], ["Arrhythmias, MI, stroke or other serious complications (<strong>uncommon</strong>)"]]) +
        "<p>The cardiologist reports the <strong>degree of stenosis (%)</strong> and its <strong>location</strong>. Example:</p>" +
        tbl(["Vessel", "Finding"], [
          ["Left main", "30% mid-vessel lesion"], ["LAD", "60% ostial lesion, 50% distal lesion"],
          ["LCx", "<strong>Totally occluded</strong> at mid-vessel"], ["RCA", "30% mid-distal lesion"]]) +
        "<p><strong>Left ventriculogram</strong> (end of the LHC): catheter crosses the <strong>aortic valve into the LV</strong>, dye injected → estimates <strong>EF</strong> and measures <strong>left heart pressure</strong>.</p>" +
        "<p>Procedure lasts <strong>about an hour</strong>; then <strong>pressure is held</strong> on the puncture; a <strong>closure device</strong> may be used for femoral access.</p>",
        ["cath-risks", "cath-report", "cath-lv", "cath-after"],
        [q("Which is a listed risk of coronary angiography?", "Contrast-associated acute kidney injury", ["Hypoglycemia", "Pneumothorax as the main risk", "Hearing loss"], "Contrast can injure the kidneys. (Slide 80)"),
          q("How common are MI, stroke and serious arrhythmia from coronary angiography?", "Uncommon", ["Common in most patients", "Never happen", "Expected every time"], "Major complications like MI, stroke and arrhythmia are uncommon. (Slide 80)"),
          q("A cath report gives each lesion's:", "Percent stenosis and location", ["Agatston score", "Duke score", "Tracer uptake"], "The report gives each lesion's percent stenosis and location. (Slide 81)"),
          q("In the sample report, which vessel was totally occluded?", "Left circumflex", ["LAD", "RCA", "Left main"], "The circumflex was 100% occluded in the sample. (Slide 81)"),
          q("What does a left ventriculogram estimate?", "Ejection fraction and left heart pressure", ["Coronary calcium", "Pulmonary pressures", "Right atrial size"], "A ventriculogram estimates EF and left heart pressure. (Slide 82)"),
          q("To do a left ventriculogram, the catheter crosses which valve?", "Aortic", ["Mitral", "Tricuspid", "Pulmonic"], "The catheter crosses the aortic valve to enter the LV. (Slide 82)"),
          q("About how long does a coronary angiogram last?", "About an hour", ["About 5 minutes", "About 8 hours", "Two days"], "A coronary angiogram takes about an hour. (Slide 83)"),
          q("After the procedure, how is bleeding from a femoral puncture prevented?", "Holding pressure, sometimes a closure device", ["Suturing the artery open", "Giving heparin", "Nothing is needed"], "Holding pressure (or a closure device) seals the femoral puncture. (Slide 83)")],
        [q("Six hours after a femoral cath, the patient has a growing tender groin swelling. Most likely complication?", "Access-site hematoma", ["Contrast allergy", "Stroke", "Pneumonia"], "A growing tender groin swelling after femoral cath = hematoma. (Slide 80)"),
          q("Two days after a cath, a diabetic patient's creatinine has doubled. Most likely cause?", "Contrast-associated AKI", ["Hematoma", "Radiation", "Allergic rash"], "Creatinine doubling days after contrast in a diabetic = contrast AKI. (Slide 80)")]),
      C("PCI: balloon and stent",
        "<p>If significant narrowing is found, the cardiologist may do <strong>PCI</strong> (percutaneous coronary intervention; also called <strong>PTCA</strong>, percutaneous transluminal coronary angioplasty) <strong>during the same procedure</strong>.</p>" +
        chain(["<strong>Balloon catheter</strong> advanced across the narrowed segment",
          "Balloon <strong>inflated</strong> to <strong>compress plaque against the wall</strong> and expand the vessel",
          "<strong>Stent expanded</strong> to keep the vessel open and restore flow"]) +
        hy("PCI = <strong>balloon angioplasty</strong> plus, commonly, a <strong>stent</strong>."),
        ["pci-def", "pci-steps", "pci-same"],
        [q("PCI stands for:", "Percutaneous coronary intervention", ["Primary cardiac infusion", "Pulmonary capillary index", "Peripheral catheter insertion"], "PCI = percutaneous coronary intervention. (Slides 84 and 85)"),
          q("What does the balloon do in PCI?", "Compresses plaque against the artery wall and expands the vessel", ["Removes the plaque from the body", "Dissolves the clot with drugs", "Bypasses the artery"], "The balloon pushes plaque into the wall and widens the lumen. (Slide 84)"),
          q("What is the purpose of the stent?", "To keep the vessel open and restore flow", ["To measure pressure", "To take a biopsy", "To deliver tracer"], "The stent scaffolds the artery open to restore flow. (Slide 84)"),
          q("PTCA is another name for:", "Percutaneous coronary angioplasty", ["CABG", "CCTA", "Cardiac MRI"], "PTCA = percutaneous (transluminal) coronary angioplasty. (Slide 85)")],
        [q("During a diagnostic cath, a 90% mid-LAD stenosis is found in a symptomatic patient. What can happen next in the same procedure?", "PCI with balloon angioplasty and a stent", ["Open-heart CABG on the table", "Nothing until next year", "CAC scoring"], "A critical lesion found on cath can be stented right then (PCI). (Slide 84)")])
    ]),
  ];
})();
