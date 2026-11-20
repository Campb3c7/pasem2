/* CAD Part I (Stager), slide by slide. Slide text: data/slide-text-cad-part-1.js (generated). Pictures: images/cad1-slides/.
   Anything not on the slides is marked "(standard teaching)". Question ids "cad-part-1|s<slide>|<i>", "cad-part-1|<lo>|r|<i>": only append. */
(function () {
  "use strict";
  var S = SlideStudy.S, Q = SlideStudy.Q;

  SlideStudy.lecture({
    id: "cad-part-1",
    title: "CAD Part I: Foundations",
    short: "CAD I",
    by: "Stager",
    img: "images/cad1-slides/slide-{nn}.webp",
    los: [
      /* ---------------------------------------------------------------- LO 1 */
      {
        id: "lo1", label: "LO 1", title: "ASCVD, atherosclerosis and CAD",
        objective: "Define and differentiate atherosclerotic cardiovascular disease (ASCVD), atherosclerosis, and coronary artery disease (CAD) and identify the major clinical manifestations of atherosclerotic disease.",
        slides: [
          S(1, "Title: Foundations of Coronary Artery Disease", {
            why: "<p>This lecture is the base for CAD Parts II to V: what plaque is, why it causes symptoms, and how we test for it. Her questions follow the LOs, and the LOs follow the slides in order.</p>"
          }),
          S(2, "Definitions", {
            html: "<ul><li><b>ATHEROSCLEROSIS</b>: Lipid buildup + inflammation → arterial plaque.</li><li><b>ASCVD</b>: Atherosclerosis in coronary, brain, limb, or aortic arteries.</li><li><b>CAD</b>: Atherosclerosis of the heart’s coronary arteries.</li><li><b>ASHD</b>: Atherosclerotic heart disease; usually CAD.</li><li><b>IHD</b>: Myocardial oxygen supply falls short of demand.</li><li><b>CVD</b>: Heart and blood-vessel diseases; may be nonatherosclerotic.</li><li>Remember: CAD can cause IHD, but ischemia can also occur without obstructive CAD.</li></ul>",
            why: "<p>Think of the terms as nested boxes. <b>Atherosclerosis</b> is the process (plaque in a wall). <b>ASCVD</b> is that process anywhere it causes disease (heart, brain, legs, aorta). <b>CAD</b> is ASCVD in the coronaries only. <b>IHD</b> is not a plaque word at all: it is a supply-demand word (not enough O₂ for the muscle). That is why IHD can happen without CAD, e.g. vasospasm, severe anemia, or a heart so thick (LVH) that demand outruns a normal supply.</p>",
            q: [
              Q("Which term describes a mismatch where myocardial oxygen supply falls short of demand, whatever the cause?", "Ischemic heart disease (IHD)", ["Coronary artery disease (CAD)", "Atherosclerosis", "ASCVD"], "IHD is defined by supply falling short of demand, not by plaque."),
              Q("Which term is the broadest and can include heart and vessel diseases that are NOT atherosclerotic?", "CVD", ["ASCVD", "ASHD", "CAD"], "CVD covers all heart and blood-vessel disease, including nonatherosclerotic causes."),
              Q("A patient has angina from coronary vasospasm with clean coronary arteries. Which statement fits?", "He has ischemia without obstructive CAD", ["He has CAD by definition", "He has ASCVD by definition", "Ischemia cannot occur without plaque"], "The slide stresses that ischemia can occur without obstructive CAD, and spasm is a classic example.")
            ]
          }),
          S(3, "Atherosclerotic Cardiovascular Disease (ASCVD)", {
            why: "<p>The same plaque process lands in four territories, and each has its own name and symptoms: coronary → angina/MI, cerebral → TIA/stroke, peripheral → claudication, aortic → aneurysm and atheroemboli. If someone has plaque in one bed, assume it is in the others too (that is why a PAD patient is treated as high cardiac risk).</p>",
            q: [
              Q("ASCVD is best defined as:", "A group of diseases caused by atherosclerosis in different arterial territories", ["Atherosclerosis limited to the coronary arteries", "Any heart disease that causes heart failure", "Inflammation of the arterial wall without lipid"], "ASCVD is the umbrella for atherosclerosis in coronary, cerebral, peripheral and aortic beds."),
              Q("Which of these is NOT one of the four ASCVD territories on the slide?", "Pulmonary arterial disease", ["Cerebrovascular disease", "Peripheral artery disease", "Aortic atherosclerotic disease"], "The four territories are coronary, cerebral, peripheral and aortic; pulmonary arteries are not listed.")
            ]
          }),
          S(4, "Atherosclerotic Cardiovascular Disease (ASCVD): when CAD causes symptoms", {
            why: "<p>The split here is the whole course in one line. <b>Stable angina</b> = a fixed narrowing that only hurts when demand rises. <b>ACS</b> = a sudden clot on a plaque that drops supply even at rest. ACS then splits by how much damage and what the EKG shows: UA (no troponin rise), NSTEMI (troponin rises, no ST elevation), STEMI (troponin rises + ST elevation from a fully blocked artery).</p>",
            q: [
              Q("Which of these is NOT an acute coronary syndrome?", "Stable angina", ["Unstable angina", "NSTEMI", "STEMI"], "Stable angina is the chronic, predictable presentation; ACS is UA, NSTEMI and STEMI."),
              Q("CAD is also known as:", "Atherosclerotic heart disease (ASHD)", ["Ischemic heart disease (IHD)", "Cardiovascular disease (CVD)", "Peripheral artery disease (PAD)"], "The slide equates CAD with ASHD: atherosclerosis of the heart's arteries.")
            ]
          }),
          S(5, "ASCVD burden", {
            why: "<p>The numbers matter less than the message: ASCVD is the leading killer, it climbs with age, and about a third of US adults already carry a risk factor. That is why prevention (CAD Part II) gets so much time.</p>",
            q: [
              Q("About what share of US adults had at least one established ASCVD risk factor?", "35%", ["5%", "15%", "75%"], "The slide says 35 percent of US adults had at least one risk factor such as uncontrolled HTN or dyslipidemia."),
              Q("How does ASCVD prevalence change with age?", "It increases with age", ["It decreases with age", "It peaks in young adults", "It does not change with age"], "Plaque builds over decades, so prevalence rises as people age."),
              Q("About how many Americans does ASCVD affect?", "18.2 million", ["1.8 million", "182 million", "15.9 million"], "18.2 million is the US figure; 15.9 million is worldwide deaths in 2023.")
            ]
          })
        ],
        review: [
          Q("A 70-year-old has claudication from femoral artery plaque. Which term covers his disease?", "ASCVD (peripheral artery disease)", ["CAD", "IHD", "ASHD"], "Plaque in a limb artery is ASCVD in the peripheral territory, not CAD."),
          Q("Which pair is correctly matched?", "IHD: oxygen supply falls short of demand", ["CAD: plaque in the carotid arteries", "CVD: always atherosclerotic", "ASHD: plaque in the aorta"], "IHD is the supply-demand definition; CVD can be nonatherosclerotic and CAD is coronary only."),
          Q("A sudden clot on a coronary plaque that causes chest pain at rest with troponin rise and no ST elevation is:", "NSTEMI", ["Stable angina", "Unstable angina", "STEMI"], "Troponin rise without ST elevation is NSTEMI, one of the three ACS types."),
          Q("Which statement is true?", "CAD can cause IHD, but IHD can occur without obstructive CAD", ["IHD and CAD mean the same thing", "CAD never causes ischemia", "Ischemia always means a plaque is present"], "This is the slide's 'Remember' line: plaque is one cause of ischemia, not the only one.")
        ]
      },

      /* ---------------------------------------------------------------- LO 3 */
      {
        id: "lo3", label: "LO 3", title: "Risk factors",
        objective: "Identify modifiable and nonmodifiable risk factors for ASCVD and CAD and explain their contributions to the development and progression of atherosclerotic disease.",
        slides: [
          S(6, "ASCVD risk factors", {
            html: "<ul><li><b>Modifiable</b><ul><li>Hypertension</li><li>Dyslipidemia</li><li>Diabetes mellitus</li><li>Tobacco use</li><li>Obesity</li><li>Physical inactivity</li><li>Unhealthy dietary patterns</li><li>Excessive alcohol use</li></ul></li><li><b>Non-Modifiable</b><ul><li>Male sex</li><li>Advancing age</li><li>Family history of premature CAD<ul><li>M &lt; 55 years</li><li>F &lt; 65 years</li></ul></li></ul></li><li><b>Important Risk-Enhancing Conditions</b><ul><li>Chronic kidney disease (stage III, IV, V)</li><li>Metabolic syndrome</li><li>Certain chronic inflammatory conditions</li></ul></li></ul>",
            why: "<p>Each risk factor hits a step of plaque formation: <b>LDL</b> supplies the fat, <b>HTN</b> adds shear stress that injures the endothelium, <b>smoking</b> and <b>diabetes</b> damage the endothelium and add oxidative stress and inflammation, and <b>inflammatory diseases</b> (lupus, RA, psoriasis, HIV) and <b>CKD</b> keep the wall inflamed. The family history ages are for the <i>relative</i>: a father or brother with CAD before 55, or a mother or sister before 65 (women are protected by estrogen until menopause, so their cutoff is 10 years later).</p>",
            q: [
              Q("Which is a NON-modifiable ASCVD risk factor?", "Male sex", ["Dyslipidemia", "Physical inactivity", "Excessive alcohol use"], "Sex, age and family history can't be changed; the others can."),
              Q("Which family history counts as premature CAD?", "Mother with an MI at 60", ["Father with an MI at 62", "Brother with an MI at 58", "Grandmother with an MI at 70"], "Premature means a female relative under 65 or a male relative under 55, so only the mother at 60 counts."),
              Q("Which is listed as a risk-ENHANCING condition rather than a classic risk factor?", "CKD stage III to V", ["Hypertension", "Tobacco use", "Obesity"], "CKD stage 3-5, metabolic syndrome and chronic inflammatory conditions are the risk-enhancing conditions.")
            ]
          }),
          S(7, "ASCVD risk factors: the big five, smoking, exercise", {
            why: "<p>Quitting smoking works fast because much of smoking's harm is <b>acute</b>: it makes platelets sticky, constricts arteries and lowers HDL. Those effects reverse within months, so risk halves in about 2 years even though old plaque is still there.</p>",
            q: [
              Q("The five most common modifiable risk factors account for about how much cardiovascular mortality?", "More than 50%", ["About 10%", "About 25%", "Nearly 100%"], "HLD, DM, HTN, obesity and smoking are responsible for more than half of CV deaths."),
              Q("Cigarette smoking raises ASCVD risk by about:", "2-3 times", ["10 percent", "10 times", "It doesn't raise risk on its own"], "The slide says smoking increases ASCVD risk 2-3x."),
              Q("How fast does excess risk fall after quitting smoking?", "About 50% within 2 years", ["Only after 20 years", "Immediately to zero", "It never falls"], "Risk decreases 50% within 2 years of quitting, because smoking's clotting and spasm effects wear off.")
            ]
          }),
          S(8, "ASCVD risk reduction", {
            why: "<p>Each step targets a risk factor from slide 6. 'Sustainable changes, not all-or-nothing' matters because even modest exercise lowers risk a lot (slide 7): a patient who walks 15 minutes a day is far better off than one who quits a strict plan after a week.</p>",
            q: [
              Q("What does the slide say about promoting diet and activity changes?", "Encourage sustainable changes rather than an all-or-nothing approach", ["Only start when the patient can commit to daily vigorous exercise", "Diet matters but exercise does not", "Avoid discussing it until labs are abnormal"], "Small changes the patient can keep beat a perfect plan they abandon."),
              Q("For tobacco, the slide says to:", "Assess exposure, offer counseling, and provide evidence-based cessation treatment", ["Advise quitting only if the patient asks", "Only treat once CAD is diagnosed", "Use counseling alone, never medication"], "The slide lists all three: assess, counsel and treat.")
            ]
          })
        ],
        review: [
          Q("Which patient has the most NON-modifiable risk?", "A 68-year-old man whose father had an MI at 50", ["A 40-year-old woman who smokes", "A 50-year-old woman with obesity", "A 35-year-old man with high LDL"], "He has age, male sex and premature family history, all non-modifiable."),
          Q("Which risk factor mainly harms the artery through shear stress on the endothelium?", "Hypertension", ["Family history", "Male sex", "Metabolic syndrome"], "High pressure adds shear force that injures the endothelium and speeds plaque."),
          Q("Which is a modifiable risk factor?", "Unhealthy dietary pattern", ["Advancing age", "Male sex", "Family history of premature CAD"], "Diet can be changed; age, sex and family history cannot.")
        ]
      },

      /* ---------------------------------------------------------------- LO 2 */
      {
        id: "lo2", label: "LO 2", title: "How plaque forms",
        objective: "Describe the pathophysiologic development and progression of atherosclerosis, including endothelial dysfunction, lipid accumulation, inflammation, plaque formation, plaque disruption, and thrombosis.",
        slides: [
          S(9, "Atherosclerosis pathophysiology: the steps", {
            why: "<p>Plaque is not just fat 'stuck to' the pipe. It sits <b>inside</b> the wall, under the endothelium, in the intima. LDL leaks in, gets trapped, and the body treats it like an invader: it sends inflammatory cells, which eat the LDL and become fat-stuffed foam cells. A wound-healing response then walls it off. So atherosclerosis is a <b>chronic inflammatory disease</b>, which is why inflammation markers and inflammatory diseases raise risk.</p>",
            q: [
              Q("Where do lipoproteins accumulate in atherosclerosis?", "In the intima of the arterial wall", ["On the outer adventitia", "Floating free in the lumen", "In the cardiac muscle"], "Lipoproteins enter and are trapped in the intima, just under the endothelium."),
              Q("What is the early lesion formed by lipid-laden cells?", "Fatty streak", ["Fibrous cap", "Thrombus", "Calcified plaque"], "Lipid-laden cells form the fatty streak, which some lesions later turn into complex plaque."),
              Q("Atherosclerosis is best described as:", "A chronic inflammatory process with lipid accumulation", ["A purely mechanical buildup of fat in the lumen", "An acute infection of the arterial wall", "A disease of the heart valves"], "The slide defines it as a chronic inflammatory process with lipid accumulation and plaque formation.")
            ]
          }),
          S(10, "Fatty streak (aorta)", {
            pic: "<p>Photo of an opened aorta with yellow fatty streaks; an arrow points to one.</p>",
            why: "<p>Fatty streaks are flat, yellow and do not narrow the lumen, and they can be seen even in teenagers. Most never become dangerous; some progress over 10-15 years into raised plaques.</p>",
            q: [
              Q("How long can it take an atheroma to fully develop?", "10-15 years", ["10-15 days", "1-2 months", "50 years at minimum"], "The slide says plaques may take 10-15 years for full development."),
              Q("A fatty streak is:", "A focal accumulation of serum lipoproteins within the intima", ["A clot on a ruptured plaque", "Calcium deposited in the media", "A tear in the adventitia"], "That is the slide's exact definition of the fatty streak.")
            ]
          }),
          S(11, "Where atheromas form", {
            why: "<p>Smooth, straight, fast flow ('laminar flow') keeps the endothelium healthy: it makes NO and resists inflammation. At branches and bends, flow becomes slow and swirling ('disturbed flow'). There the endothelium is stressed, more permeable to LDL and more inflamed, so plaque builds there first, e.g. the proximal LAD and the carotid bifurcation.</p>",
            q: [
              Q("Where do atheromas characteristically form?", "At branch points and areas of marked curvature", ["In straight segments with smooth flow", "Only in small capillaries", "Only in veins"], "Branches, curves and irregular segments have disturbed flow that injures the endothelium."),
              Q("What local factor influences endothelial function?", "Local blood-flow patterns", ["The patient's height", "Venous pressure", "Heart rate variability"], "The slide says endothelial function is influenced by local blood-flow patterns."),
              Q("How does atherosclerosis progress over time?", "At variable rates, with periods of greater and lesser activity", ["At a steady, constant rate", "Only during childhood", "Only after age 65"], "Plaque growth is not linear: it has active and quiet periods.")
            ]
          }),
          S(12, "4-piece artery model", {
            pic: "<ul><li><b>Normal</b>: lumen; tunica intima (endothelium); tunica media (smooth muscle); tunica externa (adventitia), loosely packed collagen and elastic fibers.</li><li><b>Fatty streak</b>: lipids (cholesterol, triglycerides) are deposited in the artery lining forming fatty streaks.</li><li><b>Atheroma</b>: atheroma formation is a build up of lipids that narrow the artery lumen and can reduce blood flow.</li><li><b>Fibrous plaque and blockage</b>: as fibers grow within the fatty layers, the atheroma begins to harden, forming plaque. Blood flow is severely reduced as the lumen narrows. Complete blockage occurs as a blood clot fills the lumen space. (Labels: plaque, bloodclot.)</li><li>The model shows atherosclerosis. Fatty substances are gradually deposited inside the artery walls that narrow the lumen and reduce bloodflow.</li></ul>",
            why: "<p>The four stages in order: normal → fatty streak → atheroma → fibrous plaque, with a clot as the final event that completely blocks the lumen. The three wall layers matter: plaque lives in the <b>intima</b>; the <b>media</b> is the smooth muscle that constricts and dilates.</p>",
            q: [
              Q("What is the correct order of the 4-piece artery model?", "Normal → fatty streak → atheroma → fibrous plaque with clot", ["Normal → atheroma → fatty streak → clot", "Fatty streak → normal → fibrous plaque → atheroma", "Normal → clot → fatty streak → atheroma"], "Lipid deposits first, then build up, then harden into plaque, and a clot can finally fill the lumen."),
              Q("Which layer of the arterial wall is the smooth muscle layer?", "Tunica media", ["Tunica intima", "Tunica externa (adventitia)", "Endothelium"], "The media is smooth muscle; the intima is the endothelial lining where plaque forms."),
              Q("In the model, what causes complete blockage?", "A blood clot filling the lumen space", ["The fatty streak alone", "Thickening of the adventitia", "Smooth muscle relaxation"], "The model says complete blockage occurs as a blood clot fills the lumen.")
            ]
          }),
          S(13, "LDL retention and modification", {
            pic: "<p>Diagram (lumen, endothelium, intima): <b>1</b> LDL enters and is retained in the intima → <b>2</b> Retained LDL is oxidized → <b>3</b> Modified LDL triggers inflammation.</p>",
            why: "<p>LDL in the blood is not the trouble by itself; trapped LDL that gets <b>oxidized</b> is. The body sees oxidized LDL as damaged material and raises an immune alarm. The more LDL in the blood, the more gets trapped, which is why lowering LDL (statins) slows the whole process.</p>",
            q: [
              Q("What happens to LDL after it is retained in the intima?", "It is oxidized", ["It is excreted by the kidney", "It turns into HDL", "It forms a clot"], "Retained LDL is oxidized, and oxidized LDL triggers inflammation."),
              Q("What does modified (oxidized) LDL trigger?", "Inflammation", ["Vasodilation", "Fibrinolysis", "Plaque regression"], "Step 3 of the slide: modified LDL triggers inflammation.")
            ]
          }),
          S(14, "Monocyte recruitment and foam cell formation", {
            pic: "<p><b>1</b> Endothelium expresses VCAM-1 and ICAM-1 → <b>2</b> Monocytes enter the intima and become macrophages → <b>3</b> Macrophages swallow modified LDL: foam cells → <b>4</b> Foam cells collect into a fatty streak.</p>",
            why: "<p>VCAM-1 and ICAM-1 are 'sticky hooks' the inflamed endothelium puts out to catch passing monocytes. Inside the wall, monocytes become macrophages and eat oxidized LDL, but they cannot digest it, so they swell into <b>foam cells</b> (bubbly fat-filled cells). Piles of foam cells are the fatty streak. When foam cells die they spill their fat, building the <b>necrotic lipid core</b>.</p>",
            q: [
              Q("Which adhesion molecules does the endothelium express to recruit monocytes?", "VCAM-1 and ICAM-1", ["HDL and LDL", "NO and PGI₂", "Troponin and CK-MB"], "Activated endothelium expresses VCAM-1 and ICAM-1, which grab monocytes."),
              Q("A foam cell is:", "A macrophage that has swallowed modified LDL", ["A platelet stuck to collagen", "A smooth muscle cell making collagen", "A red cell trapped in a clot"], "Macrophages that engulf modified LDL become foam cells."),
              Q("What do foam cells collect into?", "A fatty streak", ["A fibrous cap", "A thrombus", "A calcified nodule"], "Step 4 of the slide: foam cells collect into a fatty streak.")
            ]
          }),
          S(15, "Endothelial dysfunction", {
            pic: "<p>Healthy endothelium (smooth, tight cells): <b>Nitric oxide ↑</b> (vasodilates, blocks platelet adhesion) and <b>Prostacyclin (PGI₂) ↑</b> (vasodilates, blocks platelet aggregation). Dysfunctional endothelium (irregular, gapped cells): Nitric oxide ↓ and Prostacyclin ↓: 'Both falling as the endothelium fails'.</p>",
            why: "<p>A healthy endothelium is the artery's non-stick, self-relaxing lining. When it fails, two protections drop at once: the artery can't dilate well (so it can't raise flow on demand) and platelets stick more (so clots form more easily). Damaged, gapped cells also let more LDL in. Smoking, HTN, diabetes and high LDL all cause this.</p>",
            q: [
              Q("In endothelial dysfunction, what happens to nitric oxide and prostacyclin?", "Both decrease", ["Both increase", "NO increases, prostacyclin decreases", "Neither changes"], "The slide shows both falling as the endothelium fails."),
              Q("Nitric oxide normally:", "Vasodilates and blocks platelet adhesion", ["Vasoconstricts and activates platelets", "Oxidizes LDL", "Recruits monocytes"], "NO relaxes smooth muscle and keeps platelets from sticking."),
              Q("Prostacyclin (PGI₂) normally:", "Vasodilates and blocks platelet aggregation", ["Constricts the artery", "Promotes clotting", "Raises LDL"], "PGI₂ is a vasodilator and platelet aggregation inhibitor.")
            ]
          }),
          S(16, "Nitric oxide and prostacyclin", {
            why: "<p>This slide is the 'so what' of slide 15: losing NO and PGI₂ means less vasodilation, more platelet stickiness and more inflammation, all three of which push plaque forward. The same idea explains why nitroglycerin (an NO donor) relieves angina later in the course.</p>",
            q: [
              Q("What is the key concept on this slide?", "Endothelial dysfunction reduces the artery's normal protective mechanisms", ["Endothelial dysfunction protects against plaque", "NO causes atherosclerosis", "Prostacyclin activates platelets"], "Losing NO and PGI₂ removes protections and contributes to atherosclerosis."),
              Q("Which of these is NOT an effect of nitric oxide on the slide?", "Promotes platelet aggregation", ["Promotes vasodilation", "Helps inhibit platelet adhesion", "Helps inhibit vascular inflammation"], "NO inhibits platelets; it never promotes aggregation.")
            ]
          }),
          S(17, "The plaque grows a cap and a core", {
            pic: "<p><b>1</b> Lipid infiltration (Fatty streak) → <b>2</b> Progression to fibrous plaque → <b>3</b> Formation of a fibrous cap over lipid core (labels: fibrous cap, lipid-rich necrotic core) → <b>4</b> Calcification (may occur). Labels: endothelium, intima, lumen, fatty streak (lipid deposits).</p>",
            why: "<p>The <b>fibrous cap</b> is the body's scar tissue (made by smooth muscle cells laying down collagen) sealing the fatty core away from the blood. The <b>necrotic core</b> is dead foam cells and fat, and it is very clot-promoting. Everything later depends on this balance: a thick cap = stable; a thin cap over a big core = rupture-prone.</p>",
            q: [
              Q("What sits over the lipid-rich necrotic core?", "The fibrous cap", ["The adventitia", "The fatty streak", "A thrombus"], "The fibrous cap forms over the lipid core and separates it from the blood."),
              Q("What is the last stage on this slide, which MAY occur?", "Calcification", ["Fatty streak", "Lipid infiltration", "Endothelial healing"], "Calcification is step 4 and is labeled 'may occur'.")
            ]
          }),
          S(18, "Plaque disruption and thrombosis", {
            pic: "<p><b>1</b> MMPs from inflammatory cells thin the cap → <b>2</b> The cap fissures and exposes plaque contents → <b>3</b> Platelets aggregate and fibrin forms a thrombus → <b>4</b> Result: acute ischemia or MI.</p>",
            why: "<p>MMPs (matrix metalloproteinases) are enzymes that digest collagen. Inflammatory cells in the plaque release them, eating the cap from the inside. Once the cap cracks, blood touches the core's tissue factor and collagen, platelets pile on and fibrin binds them into a clot. This is why ACS can come from a plaque that was not narrowing the artery much.</p>",
            q: [
              Q("What thins the fibrous cap?", "MMPs released by inflammatory cells", ["Nitric oxide", "Calcium deposits", "HDL"], "MMPs from inflammatory cells digest the collagen in the cap."),
              Q("After the cap fissures, what forms the thrombus?", "Platelets aggregate and fibrin forms", ["Foam cells migrate to the lumen", "Smooth muscle cells divide", "The adventitia thickens"], "Exposed plaque contents activate platelets and the coagulation cascade, making fibrin."),
              Q("What is the result of plaque disruption and thrombosis?", "Acute ischemia or MI", ["Stable exertional angina", "Positive remodeling", "Regression of plaque"], "Step 4 of the slide: acute ischemia or MI.")
            ]
          }),
          S(19, "Stable vs vulnerable plaque", {
            pic: "<p>Two cross-sections: <b>Vulnerable plaque</b> (large lipid core, thin fibrous cap, inflammatory cells) and <b>Stable plaque</b> (small lipid core, thick fibrous cap). Labels: media, lumen, lipid core, fibrous cap.</p>",
            why: "<p>As plaque ages, inflammation settles and smooth muscle keeps laying down collagen, so the cap thickens. The danger of a plaque is about its <b>cap</b>, not its size: a big old plaque with a thick cap mostly narrows the lumen (angina), while a small young plaque with a thin cap can rupture (ACS).</p>",
            q: [
              Q("Which describes a vulnerable plaque?", "Thin cap, large lipid core, dense inflammation", ["Thick cap, small lipid core, little inflammation", "Fully calcified with no lipid", "No cap at all"], "Vulnerable plaques have thin caps, big lipid cores and dense inflammatory infiltrates."),
              Q("What happens as an unruptured plaque ages?", "Inflammation falls and the cap gets more collagen and more stable", ["Inflammation rises and the cap thins", "It disappears completely", "It always ruptures"], "Older plaques settle down and build a thicker, collagen-rich cap."),
              Q("Which plaque feature best predicts rupture?", "A thin fibrous cap", ["A thick fibrous cap", "A small lipid core", "Minimal inflammation"], "A thin cap over a large core is what tears.")
            ]
          })
        ],
        review: [
          Q("Put the early steps in order:", "LDL retained → LDL oxidized → monocytes recruited → foam cells → fatty streak", ["Foam cells → LDL retained → fatty streak → monocytes recruited", "Fatty streak → LDL oxidized → monocytes recruited → foam cells", "Monocytes recruited → fatty streak → LDL retained → oxidized"], "Trapped LDL is oxidized, which draws monocytes that become foam cells that form the streak."),
          Q("Which change of endothelial dysfunction makes clots more likely?", "Less prostacyclin and NO, so platelets stick and aggregate more", ["More NO", "More prostacyclin", "Less LDL entry"], "NO and PGI₂ normally block platelets, so losing them favors clotting."),
          Q("A macrophage full of oxidized LDL is called a:", "Foam cell", ["Fibroblast", "Platelet", "Monocyte"], "Macrophages that swallow modified LDL become foam cells."),
          Q("What enzymes weaken the fibrous cap?", "MMPs", ["ICAM-1", "Prostacyclin", "Troponin"], "Matrix metalloproteinases from inflammatory cells digest the cap's collagen."),
          Q("Why are atheromas common at the proximal LAD and carotid bifurcation?", "Branching and curvature cause disturbed flow that injures the endothelium", ["Those arteries have no endothelium", "Blood moves fastest and smoothest there", "They have more HDL"], "Branches and bends change flow speed and direction, stressing the endothelium.")
        ]
      },

      /* ---------------------------------------------------------------- LO 5 */
      {
        id: "lo5", label: "LO 5", title: "Young plaque vs old plaque, and remodeling",
        objective: "Differentiate chronic flow-limiting coronary atherosclerosis from acute plaque disruption and thrombosis and explain how these processes contribute to stable ischemic heart disease and acute coronary syndromes.",
        slides: [
          S(20, "Clinical consequences: young plaques", {
            why: "<p>A young plaque is still 'under construction': its cap is being rebuilt while active inflammation (and MMPs) sits right below. It is too small to limit flow, so it causes no symptoms, until it suddenly tears and a clot forms. That is why the first sign of CAD is often an MI.</p>",
            q: [
              Q("Why are young plaques usually asymptomatic?", "They don't block much blood flow", ["They have a thick fibrous cap", "They are fully calcified", "They are in the veins"], "Young plaques are small, so they don't limit flow until they rupture."),
              Q("When a young thin-capped plaque suddenly ruptures, what does it cause?", "Acute coronary syndrome (UA/NSTEMI/STEMI)", ["Stable exertional angina", "Claudication", "Positive remodeling"], "Rupture leads to clot that abruptly stops or limits flow, which is ACS.")
            ]
          }),
          S(21, "Clinical consequences: older plaques", {
            why: "<p>Old plaques are like a narrowed but solid pipe. At rest enough blood gets through; with exertion, demand rises and the narrowed artery cannot deliver more, so symptoms appear with effort and go away with rest. The same thing in the legs is claudication.</p>",
            q: [
              Q("Older plaques with thick caps mainly cause:", "Stenosis and limited flow: exertional angina and claudication", ["Sudden rupture and STEMI", "No symptoms ever", "Vasospasm at rest"], "Thick-capped plaques rarely rupture but narrow the lumen, causing effort symptoms."),
              Q("Which plaque is LESS likely to rupture?", "An older plaque with a thick fibrous cap", ["A young plaque with a thin cap", "A plaque with a large lipid core", "A plaque with dense inflammation"], "Thick collagen-rich caps resist rupture.")
            ]
          }),
          S(22, "What accelerates atherosclerosis", {
            why: "<p>Each accelerator hits the endothelium: HTN by shear force, smoking by toxins and oxidative stress, high cholesterol by supplying more LDL, inflammation by keeping the plaque active. The last line explains why ruptures cause clots: the plaque core is full of tissue factor and activated cells, so the moment it meets blood, platelets activate.</p>",
            q: [
              Q("How does systemic hypertension accelerate atherosclerosis?", "Excessive shear forces on the arterial wall", ["By lowering LDL", "By raising nitric oxide", "By thickening the fibrous cap"], "The slide lists HTN causing excessive shear forces."),
              Q("The inflammatory micro-environment inside the plaque is:", "Pro-clotting and platelet-activating", ["Anti-clotting", "Free of inflammatory cells", "Protective against MI"], "The walled-off lipid core is a pro-clotting, platelet-activating environment."),
              Q("Which is NOT listed as an accelerator of atherosclerosis?", "Regular exercise", ["Cigarette smoking", "Hypercholesterolemia", "Inflammation/oxidative stress"], "Exercise lowers risk; the other three accelerate plaque.")
            ]
          }),
          S(23, "Plaque formation and growth: two paths", {
            pic: "<p>Cholesterol particles infiltrate the damaged inner lining of the artery (labels: opening of an artery, cholesterol particles, tunica intima/media/adventitia, tear in the inner lining of the artery) → A plaque develops in the artery → More cholesterol and other materials are incorporated into the plaque, making it grow (narrowed opening, 50% blocked). Then two paths: <b>The plaque continues to grow, blocking blood flow through the artery</b> (90% blocked) → <b>STABLE ANGINA / CLAUDICATION / UNSTABLE ANGINA</b>; or <b>The plaque ruptures and a blood clot forms, completely blocking blood flow through the artery</b> → <b>ACS / STROKE (CVA)</b>.</p>",
            why: "<p>The two arrows are LO 5 in one picture: <b>slow growth</b> → a fixed narrowing → symptoms with effort; <b>rupture + clot</b> → sudden blockage → ACS in the heart or stroke in the brain.</p>",
            q: [
              Q("In the figure, a plaque that keeps growing to 90% blockage leads to:", "Stable angina / claudication / unstable angina", ["ACS from rupture", "Stroke from a clot", "Positive remodeling only"], "Slow growth narrows the lumen and causes effort symptoms."),
              Q("In the figure, a plaque that ruptures and forms a clot leads to:", "ACS or stroke (CVA)", ["Stable angina only", "Claudication only", "No symptoms"], "Rupture plus clot suddenly blocks flow, causing ACS or stroke.")
            ]
          }),
          S(24, "Arthur and Zeke", {
            why: "<p>No answer slide; the answers come from slides 20-21. <b>Arthur</b> (34, runs daily, fast food, sudden MI) most likely has a <b>young, thin-capped vulnerable plaque</b> that ruptured and clotted; it was too small to cause angina, and fitness didn't protect him. <b>Zeke</b> (90, lifelong high-fat diet, slow exertional chest tightness) most likely has <b>old, thick-capped stable plaques</b> narrowing the lumen: stable angina.</p>",
            q: [
              Q("Arthur, 34, runs 3 miles a day, eats fast food and has a sudden MI. What is likely in his arteries?", "A young, thin-capped plaque that ruptured and formed a clot", ["An old, thick-capped plaque with 90% stenosis", "No plaque at all", "Heavy calcification only"], "Young plaques are silent until they suddenly rupture, which causes MI."),
              Q("Zeke, 90, has intermittent chest tightness that slows his chores. What is likely in his arteries?", "Old, stable plaques with thick caps narrowing the lumen", ["A young plaque that just ruptured", "A clot from a vulnerable plaque", "Normal arteries with vasospasm"], "Old plaques narrow the lumen and cause predictable exertional angina."),
              Q("Why didn't Arthur have warning angina before his MI?", "His plaque was too small to limit flow before it ruptured", ["Running prevents angina", "Young men cannot have angina", "His plaque was fully calcified"], "Young plaques don't narrow the artery much, so there is no effort pain before rupture.")
            ]
          }),
          S(25, "Positive and negative remodeling", {
            why: "<p>The wall can 'make room' for plaque. In <b>positive remodeling</b> the whole artery bulges outward, so the lumen stays normal and there is no angina, but the plaque can be large, lipid-rich and hidden (a classic setup for a surprise rupture). In <b>negative remodeling</b> the artery does not expand (or shrinks), so the plaque eats into the lumen and angina appears earlier.</p>",
            q: [
              Q("In positive remodeling, the artery:", "Bulges outward at the plaque, keeping the lumen near normal", ["Shrinks inward, narrowing the lumen", "Fills completely with clot", "Loses its endothelium"], "Positive remodeling expands the wall outward to fit the plaque."),
              Q("Which type of remodeling is most common?", "Positive remodeling", ["Negative remodeling", "Neither occurs", "They are equally common"], "The slide says positive remodeling is most common."),
              Q("Which remodeling is more likely to cause angina early?", "Negative remodeling", ["Positive remodeling", "Both cause angina equally early", "Neither causes angina"], "With no outward expansion, plaque narrows the lumen as it grows.")
            ]
          }),
          S(26, "Positive remodeling (figure)", {
            pic: "<p><b>Positive Remodeling</b>: The artery enlarges outward to accommodate plaque. Normal artery (lumen normal size) → Atherosclerotic artery with positive remodeling: lumen (approximately normal size), fibrous cap, lipid-rich plaque, enlarged vessel diameter. 'The artery enlarges (outward) rather than narrowing (inward), which can delay symptoms.'</p>",
            why: "<p>This is why an angiogram (which only shows the lumen) can look nearly normal while a large plaque sits in the wall.</p>",
            q: [
              Q("What does positive remodeling do to symptoms?", "Delays them", ["Causes them earlier", "Makes them constant at rest", "Has no relation to symptoms"], "Keeping a normal lumen means no flow limit, so symptoms are delayed."),
              Q("In positive remodeling, the vessel diameter:", "Enlarges", ["Shrinks", "Stays exactly the same with a narrower lumen", "Becomes calcified"], "The figure labels an enlarged vessel diameter with a near-normal lumen.")
            ]
          }),
          S(27, "Negative remodeling (figure)", {
            pic: "<p><b>Negative Remodeling</b>: The artery shrinks inward to accommodate plaque. Normal artery (lumen normal size) → Artery with negative remodeling: reduced lumen, lipid-rich plaque. 'The artery becomes smaller, which can lead to earlier symptoms (e.g., angina).'</p>",
            q: [
              Q("In negative remodeling, the lumen is:", "Reduced", ["Normal size", "Enlarged", "Filled with clot"], "The artery shrinks inward and the lumen narrows."),
              Q("Negative remodeling can lead to:", "Earlier symptoms such as angina", ["Delayed symptoms", "No symptoms ever", "Only stroke"], "A smaller lumen limits flow sooner, so angina appears earlier.")
            ]
          })
        ],
        review: [
          Q("A 45-year-old with no prior chest pain has a sudden STEMI. The culprit plaque was most likely:", "Small, young, with a thin cap", ["Large, old, with a thick cap", "Fully calcified", "Negatively remodeled with 95% stenosis for years"], "Sudden ACS without warning is classic for a young vulnerable plaque rupturing."),
          Q("Which plaque type causes predictable exertional angina?", "Old, thick-capped, flow-limiting plaque", ["Young, thin-capped plaque", "A ruptured plaque with fresh clot", "A positively remodeled plaque with a normal lumen"], "Fixed stenosis limits flow only when demand rises."),
          Q("Why can positive remodeling hide dangerous plaque?", "The lumen stays near normal, so there is no angina even with a big plaque", ["It makes the plaque disappear", "It thickens the cap", "It narrows the lumen early"], "Outward growth keeps flow normal while the plaque grows in the wall."),
          Q("Stable ischemic heart disease vs ACS: which pairing is right?", "SIHD: fixed narrowing; ACS: plaque disruption with thrombus", ["SIHD: thrombus; ACS: fixed narrowing", "Both are caused only by vasospasm", "SIHD: rupture; ACS: positive remodeling"], "Chronic narrowing causes stable disease and acute rupture with clot causes ACS.")
        ]
      },

      /* ---------------------------------------------------------------- LO 4 */
      {
        id: "lo4", label: "LO 4", title: "Supply, demand and ischemia",
        objective: "Explain the relationship between coronary atherosclerosis, myocardial oxygen supply and demand, and myocardial ischemia, including the effects of coronary stenosis, increased myocardial demand, and impaired coronary perfusion.",
        slides: [
          S(28, "The “needy” heart", {
            why: "<p>The heart already pulls about 70-75% of the oxygen out of coronary blood at rest (standard teaching), far more than other organs. So it has almost no reserve to extract more: the <b>only</b> way to get more oxygen is to <b>increase flow</b>. That is why a narrowed artery matters so much.</p>",
            q: [
              Q("The heart is 0.3% of body weight but uses what share of resting oxygen?", "7%", ["0.3%", "25%", "50%"], "The slide says the heart accounts for 7% of resting oxygen consumption."),
              Q("Which waste products does coronary blood flow remove?", "Carbon dioxide, lactic acid and hydrogen ions", ["Bilirubin and urea", "Troponin and BNP", "Glucose and oxygen"], "The slide lists CO₂, lactic acid and H⁺.")
            ]
          }),
          S(29, "Coronary blood flow: mostly in diastole", {
            why: "<p>During systole the squeezing muscle pinches the small arteries running through it (especially in the LV, which squeezes hardest), so flow nearly stops. When the muscle relaxes in diastole, the vessels open and blood rushes in. So <b>diastolic time</b> and <b>diastolic pressure</b> drive coronary perfusion.</p>",
            q: [
              Q("When does most blood flow to the myocardium occur?", "During diastole", ["During systole", "Equally in both", "Only during exercise"], "Contraction compresses the vessels in systole, so flow occurs mainly in diastole."),
              Q("Why does coronary flow drop in systole?", "Contracting myocardium compresses the intramyocardial vessels", ["The aortic valve is closed", "Coronary arteries constrict in systole", "Blood pressure is lowest in systole"], "The squeezing muscle pinches the vessels inside it.")
            ]
          }),
          S(30, "Coronary blood flow during exercise", {
            why: "<p>Exercise hits the heart twice: demand goes up (faster, harder beats) while <b>supply time</b> goes down, because a faster heart rate mostly shortens diastole. This is why beta blockers help angina (standard teaching): slowing the rate lowers demand and lengthens diastole at the same time.</p>",
            q: [
              Q("What happens to diastole as heart rate rises?", "It shortens, reducing perfusion time per beat", ["It lengthens", "It stays the same", "Systole shortens instead"], "Faster rates mostly cut diastolic time, the time when the heart fills its own arteries."),
              Q("During exercise, myocardial oxygen demand:", "Increases from higher heart rate and contractility", ["Decreases", "Stays the same", "Increases only from blood pressure"], "Higher rate and contractility raise oxygen demand.")
            ]
          }),
          S(31, "How the heart meets demand", {
            why: "<p>Normal coronaries can dilate and raise flow several-fold (coronary flow reserve). A stenosed artery has already used up that reserve: the small vessels beyond it are dilated even at rest just to keep normal flow. When demand rises there is nothing left to give, and that territory becomes ischemic.</p>",
            q: [
              Q("How do normal coronary arteries meet higher demand?", "They dilate to increase blood flow", ["They constrict to raise pressure", "The heart extracts much more oxygen", "Blood flow shifts to systole"], "Normal coronaries dilate to raise flow."),
              Q("With flow-limiting CAD, what happens when demand rises?", "Flow may not increase enough, causing ischemia", ["Flow increases normally", "The heart stops needing oxygen", "Collateral flow always fixes it"], "A narrowed artery can't raise flow enough, so demand outstrips supply.")
            ]
          }),
          S(32, "Cardiac ischemia: coronary stenosis", {
            why: "<p>This is the stable angina mechanism: supply is capped by the narrowing, so symptoms appear at a reproducible level of effort and fade with rest (demand falls back under the cap).</p>",
            q: [
              Q("What does a coronary stenosis limit?", "The heart's ability to increase oxygen delivery when demand rises", ["The heart's ability to contract at rest", "Diastolic filling of the ventricle", "Venous return"], "Narrowing caps how much flow can rise with demand."),
              Q("When supply can't meet demand, what develops?", "Myocardial ischemia, which may cause angina", ["Myocardial hypertrophy", "Valve stenosis", "Vasodilation that fixes it"], "The slide: when supply cannot meet demand, ischemia develops and may cause angina.")
            ]
          }),
          S(33, "Cardiac ischemia: plaque disruption and thrombosis", {
            why: "<p>The other path to ischemia: not a demand problem but a sudden <b>supply</b> collapse. A small non-stenotic plaque can fissure, especially under stress (a surge of BP and heart rate, e.g. heavy exertion or emotional stress), and the clot on it drops supply even at rest.</p>",
            q: [
              Q("Can a small, non-stenotic plaque cause ischemia?", "Yes, if its fibrous cap suddenly ruptures", ["No, only large plaques cause ischemia", "Only if it calcifies", "Only in veins"], "A small plaque can fissure and clot, causing sudden ischemia."),
              Q("When is a small plaque especially likely to fissure?", "When the vessel is exposed to significant stress", ["During sleep only", "After a statin is started", "When the cap is thick"], "The slide says especially if the vessel is exposed to significant stress.")
            ]
          }),
          S(34, "Plaque disruption and thrombosis: 3 steps", {
            pic: "<p>Figure: thin-cap fibroatheroma (thin fibrous cap) → ruptured plaque with thrombus.</p>",
            why: "<p>Rupture (cap tears) and erosion (endothelium wears off the surface) both expose thrombogenic material: collagen and tissue factor. Platelets stick and activate, the coagulation cascade makes fibrin, and the clot blocks the artery. This sequence is why ACS treatment has antiplatelets AND anticoagulants (CAD IV/V).</p>",
            q: [
              Q("What is step 1 of plaque disruption and thrombosis?", "Plaque rupture or erosion exposes thrombogenic material", ["Thrombus obstructs the artery", "Platelets activate", "Fibrous cap thickens"], "Step 1 is rupture or erosion exposing the plaque contents to blood."),
              Q("What is step 2?", "Platelet activation and the coagulation cascade form a thrombus", ["Fatty streak formation", "Foam cell formation", "Positive remodeling"], "Exposed material activates platelets and coagulation, forming a clot."),
              Q("What is step 3?", "Reduced coronary flow causing acute ischemia and possibly MI", ["Plaque regression", "Increased coronary flow", "Calcification"], "The thrombus obstructs the artery, causing ischemia and maybe infarction.")
            ]
          }),
          S(35, "Other causes of cardiac ischemia", {
            why: "<p>These are the 'ischemia without plaque' causes from LO 1. <b>Vasospasm</b> (Prinzmetal's) causes chest pain at rest, often early morning, with transient ST elevation; cocaine and amphetamines (sympathomimetics) cause intense constriction. <b>Emboli</b> come from somewhere else, e.g. a vegetation from infective endocarditis breaks off and lodges in a coronary.</p>",
            q: [
              Q("Prinzmetal's angina is caused by:", "Coronary vasospasm", ["Plaque rupture", "Septic emboli", "A congenital lesion"], "Vasospasm causes Prinzmetal's angina."),
              Q("Which drug class can cause intense coronary vasoconstriction?", "Illicit sympathomimetics such as cocaine", ["Statins", "Nitrates", "ACE inhibitors"], "Sympathomimetic drugs can cause vasospasm and ischemia."),
              Q("Septic coronary emboli most often come from:", "Infective endocarditis vegetations", ["DVT", "Atrial myxoma only", "Fatty streaks"], "The slide lists septic vegetations from IE as an embolic cause.")
            ]
          }),
          S(36, "What ischemia does to the cell", {
            why: "<p>No oxygen → the cell switches to anaerobic metabolism → lactic acid. Acid stiffens the muscle (it can't relax) and weakens contraction. So the first findings are <b>mechanical</b> (a stiff, weak wall segment: a regional wall motion abnormality on echo) and <b>electrical</b> (ST/T changes on EKG), often before pain. This order is called the ischemic cascade (standard teaching).</p>",
            q: [
              Q("What does regional myocardial hypoxia produce?", "Anaerobic respiration and lactic acid", ["Aerobic respiration and more ATP", "Excess nitric oxide", "Ketones"], "Without oxygen, cells use anaerobic metabolism and make lactic acid."),
              Q("Ischemia-induced regional wall motion abnormalities are seen on:", "Echocardiography", ["Chest X-ray", "Lipid panel", "CAC score"], "The slide says wall motion abnormalities are visible on echo."),
              Q("What does local acidosis do to the myocardium?", "Impairs relaxation, reducing compliance and contractility", ["Improves contractility", "Speeds relaxation", "Has no effect"], "Acidosis causes abnormal relaxation with reduced compliance and contractility.")
            ]
          }),
          S(37, "Myocardial stunning", {
            why: "<p>Stunning = a short ischemic hit, flow restored, but the muscle is 'dazed' for hours to days. The cells are alive (viable), so function returns on its own. Example: right after a STEMI is opened with a stent, the wall can still move poorly for a few days and then recover.</p>",
            q: [
              Q("Myocardial stunning occurs after:", "A transient episode of ischemia followed by reperfusion", ["Chronic, repeated low flow", "Prolonged severe ischemia with necrosis", "Valve replacement"], "Stunning follows a brief ischemic episode once flow is restored."),
              Q("In stunning, the myocardium is:", "Viable, with temporarily impaired contractility", ["Dead and replaced by scar", "Permanently lost", "Normal in function"], "Stunned muscle is alive and recovers over hours to days."),
              Q("Recovery from stunning takes:", "Hours to days, sometimes longer", ["Seconds", "It never recovers", "Only after CABG"], "The slide says hours to days, sometimes longer.")
            ]
          }),
          S(38, "Myocardial hibernation", {
            why: "<p>Hibernation = muscle that is chronically underfed and turns down its own contraction to survive (like a bear lowering its metabolism for winter). It is alive, so restoring flow (PCI/CABG) can bring function back. That is why viability testing (dobutamine stress echo, slide 65) matters before deciding to revascularize a weak heart.</p>",
            q: [
              Q("Myocardial hibernation is:", "Chronically dysfunctional but viable myocardium from chronic or repetitive low flow", ["Irreversible necrosis", "Short-term dysfunction after brief ischemia that resolves on its own", "Normal myocardium"], "Hibernating muscle is alive but downregulated by chronically reduced flow."),
              Q("How can hibernating myocardium improve?", "By restoring blood flow, e.g. revascularization", ["It cannot improve", "Only with time and no treatment", "Only with a heart transplant"], "Function may improve after flow is restored."),
              Q("Stunning vs hibernation: which is caused by chronic or repetitive reduced flow?", "Hibernation", ["Stunning", "Both equally", "Neither"], "Stunning follows a single brief episode; hibernation follows chronic low flow.")
            ]
          }),
          S(39, "Myocardial infarction", {
            why: "<p>Infarction is the end of the line: ischemia lasted long enough that cells die. Dead muscle becomes scar and never contracts again, unlike stunning and hibernation. That is why 'time is muscle' in STEMI care.</p>",
            q: [
              Q("Myocardial infarction is:", "Irreversible cardiomyocyte injury and necrosis from prolonged severe ischemia", ["Reversible dysfunction after brief ischemia", "Viable but downregulated muscle", "Vasospasm without injury"], "MI means the cells died from prolonged severe ischemia."),
              Q("Which of these leaves PERMANENT loss of function?", "Infarction", ["Stunning", "Hibernation", "Exercise-induced ischemia that resolves"], "Only infarction kills the myocardium; the others are viable.")
            ]
          })
        ],
        review: [
          Q("Why does tachycardia worsen ischemia in a patient with CAD?", "It raises demand and shortens diastole, the time the coronaries fill", ["It lengthens diastole", "It lowers demand", "It increases coronary flow in systole"], "Faster rates both increase demand and cut perfusion time."),
          Q("Match: brief ischemia, flow restored, viable muscle that recovers on its own:", "Stunning", ["Hibernation", "Infarction", "Remodeling"], "That is the definition of stunning."),
          Q("A patient with an EF of 30% from chronic multivessel CAD improves after CABG. The muscle was:", "Hibernating", ["Infarcted", "Stunned from one short episode", "Normal"], "Chronically underperfused but viable muscle recovers when flow is restored."),
          Q("Which is the FIRST cellular consequence of inadequate oxygen supply?", "Anaerobic metabolism with lactic acid", ["Fibrous cap formation", "Foam cell formation", "Troponin release from a ruptured cap"], "Hypoxia shifts cells to anaerobic metabolism and lactic acid."),
          Q("A 25-year-old using cocaine has chest pain and ST changes with clean coronaries. Mechanism?", "Vasospasm from a sympathomimetic", ["Stable plaque with 90% stenosis", "Hibernation", "Septic embolus"], "Sympathomimetics cause intense coronary vasoconstriction.")
        ]
      },

      /* ---------------------------------------------------------------- LO 6 */
      {
        id: "lo6", label: "LO 6", title: "How CAD presents (and in women)",
        objective: "Identify common and atypical clinical manifestations of myocardial ischemia, including differences in presentation between women and men, and recognize symptoms that may suggest an alternative diagnosis. (Slides 40-41 finish LO 5.)",
        slides: [
          S(40, "CAD: presentation depends on the process", {
            why: "<p>Ask: is this a fixed pipe (chronic: predictable effort symptoms) or a new clot (acute: sudden, at rest, escalating)? The answer decides clinic workup vs ED.</p>",
            q: [
              Q("Chronic coronary atherosclerosis typically causes:", "Ischemia and angina, particularly during exertion", ["Sudden STEMI at rest", "No symptoms ever", "Claudication of the arm only"], "A chronic narrowing limits flow mainly when demand rises."),
              Q("Acute coronary plaque disruption may trigger:", "Thrombosis and ACS (UA, NSTEMI or STEMI)", ["Stable angina", "Positive remodeling", "Hibernation"], "Disruption leads to clot and ACS.")
            ]
          }),
          S(41, "CAD family tree", {
            pic: "<p>Coronary Artery Disease → <b>Stable Ischemic Heart Disease</b> and <b>Acute Coronary Syndrome</b>; Acute Coronary Syndrome → <b>Unstable Angina</b>, <b>NSTEMI</b>, <b>STEMI</b>.</p>",
            q: [
              Q("CAD splits into which two branches?", "Stable ischemic heart disease and acute coronary syndrome", ["UA and STEMI", "IHD and CVD", "PAD and CVA"], "The tree divides CAD into SIHD and ACS."),
              Q("Which three conditions fall under ACS?", "Unstable angina, NSTEMI, STEMI", ["Stable angina, UA, STEMI", "NSTEMI, STEMI, heart failure", "UA, Prinzmetal's, STEMI"], "ACS = UA, NSTEMI and STEMI.")
            ]
          }),
          S(42, "Symptoms of CAD: gradual", {
            why: "<p>As plaque grows, the effort needed to cause ischemia gets smaller and smaller: first only running, then stairs, then walking, and finally rest. Angina that is new, worsening, or at rest means the plaque is changing, which is unstable angina (CAD III/IV).</p>",
            q: [
              Q("When CAD causes gradual symptoms, why?", "Progressively less blood perfuses the myocardium as the plaque grows", ["The plaque suddenly ruptures", "The heart rate slows", "The valves leak"], "A growing plaque slowly reduces perfusion."),
              Q("With gradual CAD, symptoms first occur:", "With exertion, then at rest", ["At rest, then with exertion", "Only at night", "Only after meals"], "Demand-driven ischemia appears with effort first.")
            ]
          }),
          S(43, "Symptoms of CAD: acute", {
            pic: "<p>Figure (artery): plaques form in lining of artery → plaque grows, lining of artery damaged → plaque ruptures → blood clot forms, limiting blood flow.</p>",
            q: [
              Q("When CAD causes acute symptoms, the cause is:", "Plaque rupture", ["Slow plaque growth", "Positive remodeling", "Calcification"], "The slide: acute symptoms are due to plaque rupture."),
              Q("Acute symptoms from plaque rupture usually:", "Occur abruptly with no warning angina", ["Follow months of worsening exertional angina", "Only occur at night", "Are always painless"], "Rupture is sudden, often with no prior angina.")
            ]
          }),
          S(44, "Symptoms of CAD: the classic list", {
            why: "<p>Pain that worsens with a deep breath or when you press on the sternum points somewhere else: pleuritic pain (pericarditis, PE, pleurisy) or chest wall pain. Ischemic pain is visceral, so it is dull, diffuse and hard to point to with one finger, and it radiates along shared nerve roots (C7-T4) to the arm, jaw and shoulder (standard teaching).</p>",
            q: [
              Q("Which feature argues AGAINST cardiac ischemia?", "Pain that worsens with deep inspiration", ["Substernal tightness", "Radiation to the left shoulder", "Dyspnea with exertion"], "Ischemic pain does not change with breathing or sternal pressure."),
              Q("Classic ischemic chest pain is:", "Substernal, tight, dull, achy, radiating to the left shoulder/arm", ["Sharp, pinpoint and reproducible with palpation", "Burning after meals only", "Lasting a few seconds"], "That is the slide's description of classic angina."),
              Q("How long does ischemic chest pain last?", "Minutes to hours", ["A few seconds", "Days without change", "Less than one second"], "The slide says minutes to hours.")
            ]
          }),
          S(45, "Symptoms in women", {
            pic: "<p><b>Know the difference: Warning signs differ between men and women.</b> Women: jaw pain, shortness of breath, chest discomfort or tightness, backache, extreme fatigue &amp; nausea. Men: sweating, chest pain or tightness, heartburn, nausea or vomiting.</p>",
            why: "<p>The problem is not that women don't report symptoms; it's that clinicians don't recognize them. Women more often have ischemia from small-vessel (microvascular) disease and present with fatigue, dyspnea, back or jaw pain (standard teaching), so keep ischemia on the list for these complaints in a woman with risk factors.</p>",
            q: [
              Q("What does the slide say about women and ischemic symptoms?", "Women report them, but clinicians are less likely to recognize them as ischemia", ["Women rarely report symptoms", "Women never have chest pain", "Women's symptoms are always classic"], "The gap is in recognition by clinicians, not reporting."),
              Q("Which warning sign is shown for WOMEN on the figure?", "Extreme fatigue and nausea", ["Heartburn", "Sweating", "Chest pain only"], "The women's side lists jaw pain, SOB, chest discomfort, backache and extreme fatigue/nausea.")
            ]
          }),
          S(46, "Women and MI: the 515-woman trial", {
            why: "<p>Two take-home numbers: <b>78%</b> had a warning symptom for over a month before the MI (a chance to catch it), and only <b>30%</b> had chest discomfort. So in a woman, unusual fatigue, sleep problems, dyspnea or 'indigestion' can be her angina.</p>",
            q: [
              Q("In the trial of 515 women with acute MI, what was most reported?", "Unusual fatigue, sleep disturbances, SOB, indigestion, anxiety", ["Crushing chest pain", "Left arm numbness", "Syncope"], "Those were the most frequently reported symptoms."),
              Q("What percent of these women reported a symptom for more than a month before the MI?", "78%", ["30%", "10%", "50%"], "78% had at least one symptom for over a month."),
              Q("What percent reported chest discomfort?", "Only 30%", ["78%", "90%", "100%"], "Only 30% reported chest discomfort.")
            ]
          })
        ],
        review: [
          Q("A 58-year-old woman with diabetes has 6 weeks of unusual fatigue and dyspnea walking her dog, no chest pain. What should you consider?", "Myocardial ischemia", ["Only anxiety", "Only deconditioning, no workup", "Pericarditis"], "Women often present with fatigue and dyspnea instead of chest pain."),
          Q("Which chest pain is LEAST likely ischemic?", "Sharp pain reproduced by pressing on the sternum", ["Dull substernal pressure with exertion", "Tightness radiating to the left arm", "Pressure with dyspnea and diaphoresis"], "Pain reproduced by palpation suggests chest wall pain."),
          Q("Angina that occurred only on stairs now happens walking on flat ground. This means:", "The plaque is progressing and ischemia comes with less effort", ["The plaque is regressing", "It is not cardiac", "Positive remodeling is protecting him"], "Symptoms move from effort to rest as the narrowing grows."),
          Q("Which is NOT on the slide's list of CAD symptoms?", "Fever", ["Dyspnea", "Nausea", "Diaphoresis"], "Fever isn't a CAD symptom; it suggests infection or pericarditis.")
        ]
      },

      /* ---------------------------------------------------------------- LO 7 */
      {
        id: "lo7", label: "LO 7", title: "Evaluating suspected CAD (Carl)",
        objective: "Apply clinical history, physical examination, cardiovascular risk factors, and pretest likelihood to assess patients with suspected CAD and determine the need for further diagnostic evaluation.",
        slides: [
          S(47, "Meet Carl", {
            why: "<p>Read Carl like a test question: <b>exertional</b> chest tightness + dyspnea, for months, <b>relieved by rest</b> implicitly (no rest symptoms), not explained by heat, with no GI, cough or weight clues. That pattern is stable angina until proven otherwise.</p>",
            q: [
              Q("Carl's symptoms (chest tightness and SOB with yard work, no rest symptoms, 4 months) suggest:", "Stable exertional angina", ["Unstable angina", "STEMI", "GERD"], "Predictable effort symptoms without rest pain for months fit stable angina."),
              Q("Which of Carl's features points AWAY from ACS?", "No symptoms at rest", ["Chest tightness", "Diabetes for 20 years", "Shortness of breath"], "Rest pain would suggest ACS; his symptoms only come with effort.")
            ]
          }),
          S(48, "Carl's risk factors", {
            why: "<p>Carl already has <b>age</b> (67), <b>male sex</b>, <b>HTN</b> and <b>diabetes x 20 years</b>. Still to ask: smoking, lipids, family history of premature CAD, activity, diet, alcohol, weight, CKD and inflammatory disease (the slide 6 list).</p>",
            q: [
              Q("Which of these is one of Carl's KNOWN risk factors?", "Diabetes for 20 years", ["Smoking", "Family history of premature CAD", "Dyslipidemia"], "The case states HTN and diabetes; the rest still need to be asked."),
              Q("Which additional risk factor do we still need to ask Carl about?", "Tobacco use", ["His age", "His sex", "His diabetes"], "Age, sex and DM are known; smoking history is not given.")
            ]
          }),
          S(49, "How do we evaluate for CAD?", {
            why: "<p>Testing people without symptoms finds lots of false positives and leads to procedures that don't help. So stress tests are for <b>symptomatic</b> patients; asymptomatic people get risk-factor management instead (CAD II).</p>",
            q: [
              Q("Who gets tested for cardiac ischemia?", "Symptomatic patients with significant risk of CAD", ["Everyone over 40 as screening", "Asymptomatic smokers", "Anyone with a family history"], "Only symptomatic patients are tested; it is not a screening tool."),
              Q("What is the essential first step in evaluating suspected CAD?", "A good history and physical", ["A cardiac cath", "A CAC score", "A stress test"], "The slide says a good H&P is essential to begin the evaluation.")
            ]
          }),
          S(50, "Pretest likelihood: the 2024 ESC RF-CL model", {
            why: "<p>Pretest likelihood is 'how likely is CAD before we test?'. It matters because a test's result is only meaningful relative to it: in a very low-likelihood patient, a positive test is often false; in a very high one, a negative test may be falsely reassuring. So likelihood decides which test, if any (slide 51).</p>",
            q: [
              Q("What does the 2024 ESC RF-CL model estimate?", "Pretest likelihood of obstructive CAD", ["10-year risk of stroke", "Exercise capacity", "Ejection fraction"], "It estimates the pretest likelihood (%) of obstructive CAD."),
              Q("Which is NOT an input of the RF-CL model?", "Troponin level", ["Age and sex", "Symptom characteristics", "Number of risk factors"], "The model uses age, sex, symptoms and risk factors, not labs."),
              Q("Which risk factors does the model count?", "Smoking, dyslipidemia, HTN, diabetes and family history of premature CAD", ["Obesity, alcohol and inactivity", "CKD and inflammatory disease", "Age and sex only"], "The slide lists those five risk factors.")
            ]
          }),
          S(51, "Suspected stable angina: who gets which test", {
            pic: "<p>Patient with suspected stable angina pectoris: perform history, physical examination, and ECG. <b>Does the patient have known CAD?</b></p><ul><li><b>Yes</b> → Optimize risk factor management and antianginal medication regimen. Do symptoms persist?<ul><li>No → Testing is not usually indicated.</li><li>Yes → What is the patient's CAD history? <b>Obstructive CAD</b> → Stress test with imaging for most patients. <b>Nonobstructive CAD only</b> → Stress test with imaging, CCTA, or coronary flow reserve with PET or CMR.</li></ul></li><li><b>No</b> → What is the clinical likelihood of obstructive CAD?<ul><li><b>&lt;5%</b> → Testing is not usually indicated.</li><li><b>5 to 15%</b> → CAC scoring, exercise ECG, or no testing.</li><li><b>&gt;15%</b> → Stress test with imaging or CCTA.</li></ul></li></ul>",
            why: "<p>The higher the likelihood, the stronger the test. Under 5%: any positive is probably false, so don't test. 5-15%: cheap, simple options (CAC or exercise ECG) or nothing. Over 15%: a test that can really find ischemia or anatomy (stress imaging or CCTA).</p>",
            q: [
              Q("No known CAD, likelihood of obstructive CAD <5%. Next step?", "Testing is not usually indicated", ["Stress test with imaging", "CCTA", "Invasive angiography"], "Below 5%, a positive result would likely be false, so testing isn't indicated."),
              Q("No known CAD, likelihood 5-15%. Options?", "CAC scoring, exercise ECG, or no testing", ["Invasive angiography", "Stress test with imaging only", "PET only"], "The intermediate-low band gets simple tests or none."),
              Q("No known CAD, likelihood >15%. Next step?", "Stress test with imaging or CCTA", ["No testing", "CAC scoring only", "Repeat the history in a year"], "Above 15% the flowchart sends patients to stress imaging or CCTA.")
            ]
          })
        ],
        review: [
          Q("A patient with known obstructive CAD still has angina despite optimized meds. Next step per the flowchart?", "Stress test with imaging for most patients", ["No testing", "CAC score", "Exercise ECG without imaging"], "Known obstructive CAD with persistent symptoms gets stress imaging."),
          Q("Why don't we stress test asymptomatic adults?", "Testing is only for symptomatic patients; screening the general population isn't done", ["Stress tests are too dangerous for everyone", "Asymptomatic people can't exercise", "It's done only after age 80"], "The slide says only symptomatic persons are tested."),
          Q("Carl, 67, HTN, DM, 4 months of exertional chest tightness: which pretest category is he most likely in?", ">15%, so stress imaging or CCTA", ["<5%, no testing", "5-15%, CAC only", "He needs no evaluation"], "Older age, male sex, typical symptoms and two risk factors push likelihood above 15%."),
          Q("Which is the right order in evaluating suspected stable angina?", "H&P and ECG → known CAD? → likelihood → choose test", ["Cath → H&P → ECG", "CAC → stress test → H&P", "Stress test first in everyone"], "The flowchart starts with H&P and ECG, then branches by known CAD and likelihood.")
        ]
      },

      /* ---------------------------------------------------------------- LO 8 (+10) */
      {
        id: "lo8", label: "LO 8", title: "Stress testing (and reading the results)",
        objective: "Describe the indications, clinical applications, limitations, and contraindications of exercise stress testing, pharmacologic stress testing, myocardial perfusion imaging, and stress echocardiography. Also LO 10: interpret basic findings from stress testing and MPI.",
        slides: [
          S(52, "Exercise stress testing (treadmill)", {
            why: "<p>The exercise test reads ischemia from the EKG (ST depression), so the resting EKG must be 'clean'. If ST segments are already abnormal at rest (LBBB, paced rhythm, LVH with strain, digoxin, WPW), new changes can't be trusted, and you add imaging (slides 59-60). The Bruce protocol raises speed and incline every 3 minutes to push heart rate up step by step.</p>",
            q: [
              Q("Who is appropriate for an exercise treadmill stress test?", "Patients who can exercise adequately and have an interpretable resting EKG", ["Anyone with active chest pain", "Patients with LBBB", "Patients who cannot walk"], "It needs both adequate exercise and an EKG that can show ischemia."),
              Q("In the Bruce protocol, speed and incline increase every:", "3 minutes", ["30 seconds", "1 minute", "10 minutes"], "The Bruce protocol steps up every 3 minutes."),
              Q("During an exercise stress test, what is monitored?", "EKG and blood pressure", ["Troponin every minute", "CAC score", "Oxygen saturation only"], "The patient is connected to an EKG and BP monitor.")
            ]
          }),
          S(53, "Duke Treadmill Score", {
            why: "<p>Formula (standard teaching; the slide gives only the variables): <b>Duke = exercise minutes − (5 × max ST deviation in mm) − (4 × angina index)</b>. Exercising longer is good (adds points); ST depression and angina are bad (subtract). Example: 8 min, 1 mm ST depression, nonlimiting angina → 8 − 5 − 4 = −1 (intermediate).</p>",
            q: [
              Q("Which three variables make up the Duke Treadmill Score?", "Exercise duration, maximum ST deviation, angina index", ["Age, sex, cholesterol", "Heart rate, BP, METs", "Troponin, BNP, EF"], "Duke uses exercise minutes, ST deviation and the angina index."),
              Q("A Duke score of +6 is:", "Low risk", ["Intermediate risk", "High risk", "Uninterpretable"], "≥ +5 is low risk."),
              Q("A Duke score of −12 is:", "High risk", ["Low risk", "Intermediate risk", "Normal"], "≤ −11 is high risk.")
            ]
          }),
          S(54, "Duke score: what to do next", {
            why: "<p>The score is a decision tool: low → reassure, intermediate → get a better look (imaging or CCTA), high → likely significant disease, so go toward the cath lab.</p>",
            q: [
              Q("Duke score intermediate risk: next step?", "Consider stress imaging or CCTA", ["No further testing", "Immediate CABG", "Repeat the same test daily"], "Intermediate risk gets additional evaluation with stress imaging or CCTA."),
              Q("Duke score high risk: next step?", "Prompt evaluation; consider invasive coronary angiography", ["Reassure and discharge", "CAC score", "Repeat in 5 years"], "High risk warrants prompt workup and possibly cath."),
              Q("Duke score low risk means:", "Generally favorable prognosis; more testing often unnecessary", ["Needs cath", "Needs CABG", "Needs stress echo"], "Low-risk scores carry a good prognosis.")
            ]
          }),
          S(55, "Exercise stress test report (part 1)", {
            why: "<p>Target heart rate is 85% of age-predicted max (220 − age) (standard teaching). For him: 220 − 58 = 162; 150 is about 93%, so the test was adequate. 10 METs is good functional capacity, and a rise in systolic BP with exercise is normal (a <i>fall</i> would be a high-risk sign).</p>",
            q: [
              Q("The patient reached 93% of age-predicted max heart rate. Was the test adequate?", "Yes, it exceeded the 85% target", ["No, 100% is required", "No, it should be under 70%", "Adequacy isn't based on heart rate"], "Reaching at least 85% of predicted max makes the test diagnostic (standard teaching)."),
              Q("What symptom did he have during exercise?", "Mild substernal chest pressure that resolved in recovery", ["No symptoms", "Syncope", "Severe pain that persisted for hours"], "The report says mild substernal pressure that resolved during recovery.")
            ]
          }),
          S(56, "Exercise stress test report (part 2)", {
            why: "<p>Horizontal or downsloping ST depression ≥1 mm with exercise is the classic ischemic response; ST depression doesn't localize the territory (unlike ST elevation). Check the score: 8 min − (5 × 1 mm) − (4 × 1 for nonlimiting angina) = −1 → intermediate, so the next step is stress imaging or CCTA (slide 54).</p>",
            q: [
              Q("What EKG finding at peak exercise made the test abnormal?", "1 mm horizontal ST depression in V4-V6", ["ST elevation in II, III, aVF", "New LBBB", "Normal sinus rhythm"], "Horizontal ST depression with exercise is the ischemic response."),
              Q("His Duke score is −1. What risk group and next step?", "Intermediate; consider stress imaging or CCTA", ["Low; no further testing", "High; emergent cath", "Uninterpretable; repeat"], "−10 to +4 is intermediate, which calls for more evaluation."),
              Q("Why was his angina index 1, not 2?", "The chest discomfort was nonlimiting; he stopped for fatigue", ["He had no angina", "He had syncope", "His ST depression was 2 mm"], "Angina index 1 is nonlimiting angina; 2 is when angina stops the test.")
            ]
          }),
          S(57, "Pharmacologic stress testing", {
            why: "<p>Two different ideas. <b>Vasodilators</b> don't raise demand; they open all healthy arterioles, so healthy territories get much more flow than territories behind a narrowing that is already maxed out. The difference shows as a perfusion defect (a 'steal'-like contrast). <b>Dobutamine</b> mimics exercise: a β1 agonist that raises heart rate and contractility, so ischemic walls stop moving on echo.</p>",
            q: [
              Q("Which agent is the most commonly used vasodilator stress agent?", "Regadenoson (Lexiscan)", ["Dobutamine", "Dipyridamole", "Nitroglycerin"], "The slide calls regadenoson the most common."),
              Q("How does dobutamine create cardiac stress?", "Raises heart rate and contractility, increasing oxygen demand", ["Dilates coronary arterioles", "Lowers blood pressure", "Blocks adenosine"], "Dobutamine increases demand to simulate exercise."),
              Q("How do vasodilators reveal ischemia?", "They raise flow in healthy territories more than in stenosed ones", ["They raise heart rate", "They cause ST elevation", "They block platelets"], "Healthy arteries dilate more, so territories behind a stenosis look relatively underperfused.")
            ]
          }),
          S(58, "Who gets which stress test? Rules 1-2", {
            pic: "<p>Photo: hands holding a red, painful knee (joint disease).</p>",
            why: "<p>Rule 1: never stress a heart that is already infarcting; you'd be adding demand to an active MI. Rule 2: exercise is preferred because it adds useful prognostic information (duration, symptoms, BP and heart rate response), but only if they can reach an adequate workload.</p>",
            q: [
              Q("What is a contraindication to stress testing of ANY type?", "Acute MI or ongoing cardiac ischemia", ["Age over 65", "Diabetes", "Prior PCI"], "Rule #1: acute MI or ongoing ischemia rules out all stress testing."),
              Q("A patient with severe knee arthritis needs a stress test. Which type?", "Pharmacologic stress test", ["Exercise treadmill test", "No test can be done", "CAC score instead"], "Rule #2: patients who can't exercise adequately get pharmacologic stress.")
            ]
          }),
          S(59, "Who gets which stress test? Rules 3-4", {
            why: "<p>Rule 3: LBBB and ventricular pacing distort the ST segments, and exercise in LBBB can cause false septal defects on perfusion images; so these patients get a <b>pharmacologic (vasodilator) test with imaging</b>. Rule 4: adenosine-type drugs slow the AV node and SA node and cause bronchospasm and hypotension, so avoid them in high-grade AV block, sick sinus, wheezing and hypotension (dobutamine is the usual alternative, standard teaching).</p>",
            q: [
              Q("A patient with LBBB needs a stress test. Which type?", "Pharmacologic stress test with imaging", ["Exercise ECG without imaging", "No stress test possible", "CAC scoring"], "Rule #3: baseline LBBB or pacing calls for pharmacologic stress with imaging."),
              Q("Which patient should NOT get a vasodilator stress agent?", "Active wheezing from asthma", ["Well-controlled hypertension", "Diabetes", "Knee arthritis"], "Vasodilators can trigger bronchospasm in active wheezing."),
              Q("Which is NOT a contraindication to vasodilator stress agents?", "Obesity", ["Hypotension", "High-degree AV block", "Sick sinus syndrome"], "Obesity limits exercise but doesn't contraindicate vasodilators.")
            ]
          }),
          S(60, "Selecting a stress test + contraindications to exercise testing", {
            pic: "<p><b>Selecting a cardiac stress test for the diagnosis of myocardial ischemia</b></p><ul><li>Patient with suspected myocardial ischemia. Does the patient have any of the following? Contraindication to exercise stress test; inability to use a treadmill or stationary bicycle; unsatisfactory exercise capacity.<ul><li><b>Yes</b> → Pharmacologic stress test with imaging.</li><li><b>No</b> → Is either of the following present on the baseline ECG? Left bundle branch block; ventricular pacing.<ul><li><b>Yes</b> → Pharmacologic stress test with imaging.</li><li><b>No</b> → Are any of the following present on the baseline ECG? At least 1 mm ST depression; pre-excitation (Wolff-Parkinson-White); left ventricular hypertrophy with ST-T abnormalities; ST-T abnormalities due to digoxin use.<ul><li><b>Yes</b> → Exercise stress test with imaging.</li><li><b>No</b> → What is the patient's risk of CAD? <b>Intermediate or high</b> → Exercise stress test with imaging. <b>Low</b> → Exercise stress test without imaging.</li></ul></li></ul></li></ul></li></ul><p><b>Contraindications to exercise stress tests</b></p><ul><li><b>Absolute:</b><ul><li>Acute myocardial infarction (within 2 days)</li><li>Ongoing unstable angina</li><li>Uncontrolled arrhythmia with hemodynamic compromise</li><li>Active endocarditis</li><li>Symptomatic severe aortic stenosis</li><li>Decompensated heart failure</li><li>Acute pulmonary embolism, pulmonary infarction, deep venous thrombosis</li><li>Acute myocarditis or pericarditis</li><li>Acute aortic dissection</li><li>Physical disability that precludes safe and adequate testing</li></ul></li><li><b>Relative:</b><ul><li>Known obstructive left main coronary artery stenosis</li><li>Moderate or severe aortic stenosis with uncertain relation to symptoms</li><li>Atrial tachyarrhythmias with uncontrolled ventricular rates</li><li>Acquired advanced or complete heart block</li><li>Hypertrophic obstructive cardiomyopathy with severe resting gradient</li><li>Recent stroke or transient ischemic attack</li><li>Mental impairment with limited ability to cooperate</li><li>Severe hypertension (SBP &gt;200 or DBP &gt;110 mmHg)</li><li>Uncorrected medical conditions (eg, severe anemia, electrolyte imbalance, hyperthyroidism)</li></ul></li></ul>",
            why: "<p>Notice the split: <b>LBBB/paced</b> → pharmacologic + imaging (exercise itself misleads); <b>ST depression, WPW, LVH with strain, digoxin</b> → they can still <b>exercise</b>, just add imaging because the EKG part is unreadable.</p>",
            q: [
              Q("A patient can exercise but has LVH with ST-T abnormalities on baseline EKG. Which test?", "Exercise stress test with imaging", ["Exercise ECG without imaging", "Pharmacologic stress without imaging", "No test"], "ST-T changes from LVH make the EKG unreadable, so add imaging but keep exercise."),
              Q("A patient on digoxin with ST changes, low CAD risk, able to exercise. Which test?", "Exercise stress test with imaging", ["Exercise ECG without imaging", "Pharmacologic test with imaging", "CAC score"], "Digoxin ST changes call for imaging regardless of risk."),
              Q("Which is an ABSOLUTE contraindication to exercise stress testing?", "Symptomatic severe aortic stenosis", ["Severe hypertension 210/115", "Recent TIA", "Complete heart block"], "Symptomatic severe AS is absolute; the others are relative.")
            ]
          }),
          S(61, "Myocardial perfusion imaging (MPI)", {
            why: "<p>MPI shows where blood goes: a tracer is taken up by the heart muscle in proportion to flow. A region that gets less flow under stress shows up as a 'cold' (dark) spot. Because it reads perfusion instead of the EKG, it works when the EKG is uninterpretable (LBBB) and pairs with pharmacologic stress.</p>",
            q: [
              Q("What does MPI evaluate?", "Myocardial blood flow at rest and during stress", ["Coronary calcium", "Valve gradients", "Electrical conduction"], "MPI compares perfusion at rest and with stress."),
              Q("MPI is particularly useful when:", "The baseline EKG is uninterpretable, e.g. LBBB", ["The patient is asymptomatic", "The patient has active ACS", "The patient is pregnant"], "MPI doesn't rely on the EKG, so it helps when the EKG can't show ischemia.")
            ]
          }),
          S(62, "How stress testing with MPI is done", {
            q: [
              Q("When is the radioactive tracer injected?", "Intravenously during stress", ["Orally the night before", "Only after the test ends", "Into the coronary artery"], "The tracer is injected IV during stress."),
              Q("What camera obtains the images?", "A gamma camera", ["An echo probe", "An MRI scanner", "A fluoroscope"], "A gamma camera images the tracer distribution."),
              Q("How are perfusion defects identified?", "By comparing rest and stress images", ["By troponin levels", "By a single resting image", "By coronary calcium score"], "Rest and stress images are compared.")
            ]
          }),
          S(63, "Reading MPI: reversible ischemia", {
            pic: "<p>Images labeled <b>Stress</b> (top) and <b>Rest</b> (bottom): arrows point to dark areas in the stress images that fill in at rest. 'Arrows = ischemia.'</p>",
            why: "<p>Read MPI as two pictures. <b>Dark at stress, filled at rest</b> = reversible = ischemia (alive muscle that only starves when demand rises: a target for treatment). <b>Dark at stress AND at rest</b> = fixed = scar from an old MI (standard teaching).</p>",
            q: [
              Q("Reversible ischemia on MPI looks like:", "Dark on stress images but filled with tracer at rest", ["Dark on both stress and rest", "Normal on stress, dark at rest", "Bright everywhere"], "A defect that fills in at rest is reversible ischemia."),
              Q("A defect that is dark on BOTH stress and rest images most likely means:", "Scar from a prior MI (fixed defect)", ["Reversible ischemia", "Normal heart", "Vasospasm"], "A fixed defect is dead tissue that gets no tracer at any time (standard teaching).")
            ]
          }),
          S(64, "Stress testing with MPI: contraindication and reading", {
            why: "<p>Pregnancy is the one contraindication because the tracer exposes the fetus to radiation. A <b>positive</b> stress test means ischemia shows on EKG <i>or</i> on imaging; either one counts.</p>",
            q: [
              Q("What is the only contraindication to MPI?", "Pregnancy", ["LBBB", "Diabetes", "Obesity"], "Pregnancy, because of radioactivity in the tracer."),
              Q("When is a stress test positive?", "When there is evidence of ischemia on ECG or imaging", ["Only when the patient has chest pain", "Only when troponin rises", "Only when both ECG and imaging are abnormal"], "Ischemia on either ECG or imaging makes the test positive."),
              Q("Besides perfusion, what does the cardiologist often calculate on MPI?", "Ejection fraction", ["CAC score", "LDL level", "Duke score"], "The reader often calculates an EF.")
            ]
          }),
          S(65, "Stress echocardiography", {
            why: "<p>Echo watches the walls move. With stress, an ischemic segment stops thickening (a new wall motion abnormality), the mechanical sign of ischemia from slide 36. Low-dose dobutamine can 'wake up' hibernating muscle (it improves), proving it is viable and worth revascularizing.</p>",
            q: [
              Q("What does stress echo look for?", "New wall motion abnormalities induced by ischemia", ["Tracer uptake", "Coronary calcium", "ST elevation only"], "Echo detects ischemia-induced wall motion abnormalities."),
              Q("What extra question can a dobutamine stress echo answer?", "Viability of hibernating myocardium", ["Coronary calcium score", "Lipid levels", "Valve replacement timing only"], "Dobutamine stress echo can show hibernating muscle is viable."),
              Q("What is obtained first in a stress echo?", "A baseline resting echo", ["A cardiac cath", "A CAC score", "Troponins"], "A resting echo is the baseline for comparison.")
            ]
          }),
          S(66, "Stress testing: appropriate patients (1)", {
            q: [
              Q("Which patient is appropriate for stress testing?", "Symptoms suggesting angina with intermediate or high pretest probability", ["Asymptomatic with low pretest probability", "Active chest pain right now", "Acute STEMI"], "Symptomatic patients with intermediate/high probability are appropriate."),
              Q("After UA/NSTEMI treated conservatively without a heart cath, what is the stress test for?", "Risk stratification", ["Diagnosing STEMI", "Measuring calcium", "Treating the plaque"], "It risk-stratifies patients who didn't have a cath.")
            ]
          }),
          S(67, "Stress testing: appropriate patients (2)", {
            q: [
              Q("A patient with known CAD develops new or worsening symptoms. Stress test?", "Appropriate", ["Inappropriate", "Contraindicated", "Only if asymptomatic"], "Known CAD with new or worse symptoms is an appropriate indication."),
              Q("Newly diagnosed HFrEF: when is a stress test appropriate?", "If a cardiac cath is not planned", ["Always, even if a cath is planned", "Never", "Only if EF is normal"], "Stress testing evaluates ischemia when no cath is planned."),
              Q("Pre-op stress testing before elective noncardiac surgery is appropriate when:", "The patient has active cardiac conditions and evaluation is indicated", ["Every patient over 50", "Every diabetic", "The surgery is emergent"], "Only when active cardiac conditions make evaluation indicated.")
            ]
          }),
          S(68, "Stress testing: inappropriate patients (1)", {
            why: "<p>After revascularization, a stress test with no new symptoms adds nothing in the early years (the grafts or stents are expected to work), so wait: <b>5 years after CABG</b>, <b>2 years after PCI</b>. Think 'CABG is bigger, so the number is bigger'.</p>",
            q: [
              Q("A patient 1 year after PCI with a stent, no symptoms. Stress test?", "Inappropriate", ["Appropriate", "Required yearly", "Only exercise ECG"], "No new symptoms and under 2 years after PCI makes it inappropriate."),
              Q("No new symptoms after CABG: how long is stress testing inappropriate?", "Less than 5 years", ["Less than 2 years", "Less than 1 year", "Less than 10 years"], "<5 years after CABG and <2 years after PCI."),
              Q("Active chest pain suggesting ACS. Stress test?", "Inappropriate", ["Appropriate", "Only pharmacologic", "Only stress echo"], "Active ACS symptoms are a reason not to stress test.")
            ]
          }),
          S(69, "Stress testing: inappropriate patients (2)", {
            why: "<p>The common thread: anything where raising heart rate and BP could cause harm (decompensated HF, uncontrolled arrhythmia, critical AS, acute PE, endocarditis) or where stress will skew the result (thyrotoxicosis, acute illness).</p>",
            q: [
              Q("Which patient should NOT get a stress test?", "Advanced/critical aortic stenosis", ["Stable exertional angina", "Known CAD with new symptoms", "New HFrEF with no cath planned"], "Critical AS is a reason not to stress test."),
              Q("Thyrotoxicosis makes stress testing inappropriate because:", "Stress may aggravate the illness", ["It causes LBBB", "It lowers heart rate", "It blocks tracer uptake"], "Medical illness aggravated by stress, like thyrotoxicosis, is a reason not to test.")
            ]
          })
        ],
        review: [
          Q("A 64-year-old with a pacemaker (ventricular paced rhythm) needs a stress test. Which?", "Pharmacologic stress test with imaging", ["Exercise ECG", "Exercise ECG without imaging", "No test"], "Ventricular pacing makes the EKG unreadable, so pharmacologic stress with imaging."),
          Q("Duke score: 9 min, 0 mm ST deviation, no angina. Risk?", "Low (+9)", ["Intermediate", "High", "Can't be calculated"], "9 − 0 − 0 = +9, which is ≥ +5 (formula: standard teaching)."),
          Q("A COPD patient who is actively wheezing can't walk on a treadmill. Best stress agent?", "Dobutamine", ["Regadenoson", "Adenosine", "Dipyridamole"], "Vasodilators can worsen bronchospasm, so dobutamine is used instead (standard teaching)."),
          Q("On MPI, a defect at stress that fills in at rest means:", "Reversible ischemia", ["Old infarct", "Normal study", "Artifact from pregnancy"], "Dark at stress and perfused at rest is reversible ischemia."),
          Q("A woman who is pregnant needs ischemia evaluation. Which test is contraindicated?", "MPI (nuclear stress)", ["Stress echo", "Exercise ECG", "History and physical"], "Pregnancy is the only contraindication to MPI because of radiation."),
          Q("Which stress test can show viability of hibernating myocardium?", "Dobutamine stress echo", ["Exercise ECG without imaging", "CAC score", "Regadenoson ECG only"], "Dobutamine can make viable hibernating segments contract better.")
        ]
      },

      /* ---------------------------------------------------------------- LO 9 (+10) */
      {
        id: "lo9", label: "LO 9", title: "CCTA, CAC and coronary angiography",
        objective: "Explain the clinical applications, advantages, limitations, and risks of coronary CT angiography (CCTA), coronary artery calcium (CAC) scoring, and invasive coronary angiography. Also LO 10: interpret basic findings from coronary angiography.",
        slides: [
          S(70, "CCTA (coronary CT angiography)", {
            why: "<p>CCTA is an <b>anatomy</b> test (it shows the pipes and the plaque), while stress tests are <b>function</b> tests (they show whether the muscle is starving). It is best in intermediate-likelihood patients because a normal CCTA very reliably rules CAD out (standard teaching). It needs a slow, regular heart rhythm for sharp pictures, and contrast that the kidneys must clear.</p>",
            q: [
              Q("What does CCTA visualize?", "Coronary arteries, plaque, and luminal narrowing using IV contrast", ["Myocardial perfusion with a tracer", "Wall motion with ultrasound", "Calcium only without contrast"], "CCTA uses IV contrast to show the arteries, plaque and narrowing."),
              Q("CCTA is particularly useful for:", "Stable chest pain without known CAD, especially intermediate likelihood", ["Active STEMI", "Patients with heavy coronary calcium", "Pregnant patients"], "That is the slide's best use."),
              Q("Which is a limitation of CCTA?", "Image quality is reduced by heavy calcification or irregular rhythms", ["It can't see the coronary arteries", "It needs a treadmill", "It uses no radiation"], "Calcium blooms and arrhythmias blur the images.")
            ]
          }),
          S(71, "CCTA figure", {
            pic: "<p><b>Coronary CT Angiography (CCTA)</b>: visualizes coronary artery anatomy and identifies calcified and noncalcified plaque. 3D heart labels: aorta, left main coronary artery (LM), right coronary artery (RCA), left anterior descending artery (LAD), left circumflex artery (LCx). Panels: <b>Normal coronary artery</b> (patent lumen, no significant plaque); <b>Noncalcified atherosclerotic plaque</b> (noncalcified (soft) plaque with luminal narrowing (~50-70%)); <b>Calcified atherosclerotic plaque</b> (calcified plaque (high-attenuation calcium) with luminal narrowing).</p><ul><li>Contrast-enhanced CT visualizes coronary artery anatomy.</li><li>Identifies calcified and noncalcified plaque.</li><li>Estimates the degree of luminal narrowing (stenosis).</li><li>Useful in selected patients with suspected CAD, particularly those at intermediate pretest probability.</li><li>Limitations: iodinated contrast, radiation exposure, reduced accuracy with heavy calcification or arrhythmias, and incidental findings.</li></ul><p><b>Key concept:</b> CCTA provides detailed anatomic information about the coronary arteries, allowing detection of both calcified and noncalcified plaque and estimation of luminal narrowing. It is a noninvasive diagnostic test used in appropriately selected patients with stable chest pain and no known coronary artery disease.</p>",
            why: "<p>The key advantage over a CAC score: CCTA sees <b>soft (noncalcified) plaque</b> too, the young lipid-rich kind that can rupture.</p>",
            q: [
              Q("Which plaque can CCTA detect that a CAC score cannot?", "Noncalcified (soft) plaque", ["Calcified plaque", "No plaque at all", "Only valve calcium"], "CCTA uses contrast and sees soft plaque; CAC only measures calcium."),
              Q("CCTA is a noninvasive test used mainly for:", "Stable chest pain with no known CAD", ["Ongoing STEMI", "Known CAD with stents everywhere", "Asymptomatic screening of everyone"], "That is the key concept box on the slide.")
            ]
          }),
          S(72, "CCTA findings and management (UpToDate)", {
            pic: "<p><b>Coronary CT angiographic findings and recommended management</b> (four images: A LAD, B LAD, C RCA, D LAD):</p><ul><li><b>(A) No coronary atherosclerosis.</b> Excellent prognosis. Management: reassurance. Symptoms non-atherosclerotic in nature.</li><li><b>(B) Non-obstructive (&lt;50% stenosis; unlikely flow limiting) coronary artery disease (arrow).</b> Symptoms likely not atherosclerotic in nature. Management: preventive pharmacotherapy, risk factor modification and lifestyle changes. Patient risk is higher if multiple segments and/or high-risk plaque features.</li><li><b>(C) Moderate stenosis (50 to 69% stenosis; dashed arrow).</b> Symptoms possibly atherosclerotic in nature. Medical management if non-proximal location. Consider CT-FFR if proximal location or considering revascularization for symptom benefit. Aggressive cardiovascular risk factor modification.</li><li><b>(D) Obstructive (likely flow-limiting) coronary artery disease.</b> Management: symptom-guided anti-ischemia therapies, including revascularization, per guidelines. Preventive pharmacotherapies.</li></ul><p>CT-FFR: computed tomography derived fractional flow reserve; LAD: left anterior descending coronary artery; RCA: right coronary artery.</p>",
            why: "<p>The cutoffs: <b>&lt;50%</b> = non-obstructive (prevention), <b>50-69%</b> = moderate (maybe flow-limiting: CT-FFR checks whether it actually drops pressure), <b>≥70%</b> = obstructive (anti-ischemic therapy ± revascularization) (70% cutoff: standard teaching). Even non-obstructive plaque means ASCVD is present, so it earns prevention meds.</p>",
            q: [
              Q("CCTA shows <50% stenosis. Management?", "Preventive pharmacotherapy, risk factor modification and lifestyle", ["Urgent revascularization", "Reassurance only, no prevention", "CABG"], "Non-obstructive CAD still gets prevention."),
              Q("CCTA shows a 60% proximal stenosis. What may be considered?", "CT-FFR to see if it is flow-limiting", ["Nothing; ignore it", "Emergent CABG", "Thrombolytics"], "Moderate proximal lesions can be checked with CT-FFR."),
              Q("CCTA shows no coronary atherosclerosis. Prognosis and management?", "Excellent prognosis; reassurance", ["Poor prognosis; cath", "Repeat CCTA every 6 months", "Start DAPT"], "A clean CCTA means excellent prognosis and reassurance.")
            ]
          }),
          S(73, "When stress testing beats CCTA", {
            why: "<p>All three are about what CCTA needs: a readable lumen (calcium 'blooms' and hides it), and kidneys that can handle contrast. Over 65 → likely calcified → stress test. CKD → contrast risk → stress test.</p>",
            q: [
              Q("A 72-year-old with stable chest pain needs testing. CCTA or stress test?", "Stress test, because patients over 65 likely have coronary calcification", ["CCTA, because it's best over 65", "Neither", "Invasive cath first"], "Calcium in older patients obscures the lumen on CCTA."),
              Q("Why is stress testing preferred over CCTA in CKD?", "Risk of contrast-induced AKI", ["CKD causes LBBB", "Stress tests need kidney function", "CCTA can't image CKD patients' hearts"], "CCTA needs iodinated contrast, which can injure the kidney."),
              Q("Why is CCTA less useful with moderate or severe coronary calcification?", "Calcium obscures the lumen, making stenosis hard to quantify", ["Calcium makes the arteries invisible to CT", "Calcium means no CAD", "Calcium causes contrast allergy"], "Calcium blooms on CT and hides how narrow the lumen is.")
            ]
          }),
          S(74, "CAC scoring", {
            why: "<p>CAC is a <b>risk</b> test, not a diagnostic test for chest pain: it counts calcified plaque (Agatston score) without contrast. Calcium is a marker of long-standing plaque burden. A score of 0 lowers risk but can't exclude soft plaque. Its main job is to break a tie in primary prevention: 'Should this patient take a statin?' (CAD II).</p>",
            q: [
              Q("What does a CAC score measure?", "Calcified plaque burden in the coronary arteries", ["Noncalcified plaque", "Myocardial perfusion", "Ejection fraction"], "Noncontrast CT measures calcified plaque."),
              Q("A CAC score of 0 means:", "No detectable calcified plaque, but it does not exclude noncalcified plaque or CAD", ["No CAD at all", "High risk", "Definite obstructive CAD"], "Zero calcium doesn't rule out soft plaque."),
              Q("What is CAC mainly used for?", "Refining primary-prevention decisions when the need for lipid-lowering is uncertain", ["Diagnosing ACS", "Guiding stent placement", "Measuring EF"], "CAC is used selectively to decide on lipid-lowering treatment.")
            ]
          }),
          S(75, "CAC scoring examples", {
            pic: "<p>Four noncontrast CT slices with increasing white calcium in the coronary arteries: <b>CAC score = 0</b>, <b>CAC score = 29</b>, <b>CAC score = 250</b>, <b>CAC score = 1200</b>.</p>",
            why: "<p>The bright white spots along the arteries are calcium; more spots = higher Agatston score = greater calcified plaque burden and generally higher ASCVD risk.</p>",
            q: [
              Q("Which CAC score indicates the greatest calcified plaque burden?", "1200", ["0", "29", "250"], "A higher Agatston score means more calcified plaque."),
              Q("What does contrast have to do with CAC scoring?", "None is used: it is a noncontrast CT", ["It needs IV contrast", "It needs oral contrast", "It needs a radioactive tracer"], "CAC is a noncontrast CT.")
            ]
          }),
          S(76, "Coronary angiography: what is it?", {
            why: "<p>Angiography is the gold standard for <b>anatomy</b> because dye goes directly into each coronary and is filmed in real time. Its big plus: if you find a blockage, you can fix it in the same session (PCI). Its minus: it is invasive (arterial puncture, contrast, radiation).</p>",
            q: [
              Q("What is the reference standard for defining coronary anatomy?", "Invasive coronary angiography", ["CCTA", "CAC scoring", "Stress echo"], "The slide calls invasive angiography the reference standard."),
              Q("What does coronary angiography use to see the arteries?", "Contrast dye and fluoroscopy", ["Ultrasound", "A gamma camera", "MRI"], "Dye is injected and filmed with fluoroscopy."),
              Q("What extra advantage does angiography have over noninvasive tests?", "It allows intervention such as PCI with stent placement", ["It needs no contrast", "It has no risks", "It measures CAC"], "Blockages can be treated in the same procedure.")
            ]
          }),
          S(77, "Coronary angiography: steps", {
            q: [
              Q("Which arteries are used for access?", "Radial (wrist) or femoral (groin)", ["Jugular or subclavian vein", "Carotid", "Brachial vein"], "Access is the radial or femoral artery."),
              Q("Where is the catheter positioned for coronary angiography?", "At the openings (ostia) of the coronary arteries", ["In the right atrium", "In the pulmonary artery", "In the left atrium"], "The catheter tip sits at the coronary ostia."),
              Q("What is injected to visualize the coronaries?", "Iodinated contrast", ["Radioactive tracer", "Air bubbles", "Gadolinium"], "Iodinated contrast is injected and filmed with fluoroscopy.")
            ]
          }),
          S(78, "Coronary angiography figure", {
            pic: "<p><b>Coronary Angiography</b>: Catheter inserted in leg and guided up the aorta → Catheter tip stops at left coronary artery → Contrast agent injected into arteries. X-ray imaging shows stenosis in left coronary artery. Lower picture: patient on the cath lab table under the X-ray (fluoroscopy) camera with the operator and monitors.</p>",
            q: [
              Q("In the figure, where is the catheter inserted?", "The leg (femoral artery)", ["The neck", "The chest wall", "The abdomen"], "The figure shows femoral access in the leg, guided up the aorta."),
              Q("What does the X-ray imaging show after contrast is injected in the figure?", "A stenosis in the left coronary artery", ["A clot in the leg", "A valve leak", "A normal heart"], "The figure labels stenosis in the left coronary artery.")
            ]
          }),
          S(79, "Normal angiogram", {
            pic: "<p>Two angiogram images: <b>A</b> normal RCA; <b>B</b> normal LAD (in front) and left circumflex (on the side).</p>",
            q: [
              Q("In image A on this slide, which artery is shown?", "Normal RCA", ["LAD", "Left circumflex", "Left main"], "The caption says normal RCA in A."),
              Q("In image B, which arteries are shown?", "LAD in front and left circumflex on the side", ["RCA and PDA", "Aorta and pulmonary artery", "Left main only"], "B shows the LAD in front and the LCx along the side.")
            ]
          }),
          S(80, "Coronary angiography: risks", {
            why: "<p>The risks follow the steps: the <b>puncture</b> (bleeding, hematoma, vessel injury), the <b>dye</b> (kidney injury, allergy), the <b>X-rays</b> (radiation), and the <b>catheter in the heart</b> (arrhythmia, MI, stroke from dislodged plaque, uncommon).</p>",
            q: [
              Q("Which is a risk of coronary angiography?", "Contrast-associated acute kidney injury", ["Hypoglycemia", "Pneumothorax as the most common risk", "Hyperkalemia from the tracer"], "Iodinated contrast can injure the kidneys."),
              Q("Which complications are uncommon but serious?", "Arrhythmias, MI, stroke", ["Bleeding at the access site", "Hematoma", "Radiation exposure"], "The slide labels arrhythmia, MI and stroke as uncommon serious complications.")
            ]
          }),
          S(81, "Reading a cath report", {
            why: "<p>A cath report gives each vessel, the <b>location</b> (ostial = at its opening, mid, distal) and the <b>% narrowing</b>. Rough rule (standard teaching): ≥70% in a major artery (≥50% in the left main) is considered significant. In the slide example, the LCx is totally occluded and the LAD's 60% ostial lesion is the next concern.</p>",
            q: [
              Q("How does the cardiologist report a stenosis?", "As a percentage and a location", ["As an Agatston score", "As a Duke score", "As an EF"], "Stenosis is expressed as a percentage and its location."),
              Q("In the example report, which vessel is totally occluded?", "LCx at mid vessel", ["Left main", "LAD", "RCA"], "The report says the LCx is totally occluded at mid vessel."),
              Q("'Ostial' lesion means the narrowing is:", "At the opening of the artery", ["At the far end of the artery", "In the middle of the artery", "In a vein graft"], "Ostium means the opening where the artery leaves the aorta or its parent vessel.")
            ]
          }),
          S(82, "Left ventriculogram", {
            why: "<p>Once the catheter is in the left side, the cardiologist can cross the aortic valve into the LV, inject dye and watch it squeeze: the drop in dye volume from diastole to systole estimates the EF.</p>",
            q: [
              Q("What does a left ventriculogram estimate?", "Ejection fraction and left heart pressures", ["Coronary calcium", "Right heart pressures only", "Valve area"], "It estimates EF and measures the pressure in the left heart."),
              Q("To do a left ventriculogram, the catheter crosses which valve?", "The aortic valve", ["The mitral valve", "The tricuspid valve", "The pulmonic valve"], "From the aorta the catheter crosses the aortic valve into the LV.")
            ]
          }),
          S(83, "After the procedure + normal ventriculogram", {
            pic: "<p>Normal left ventriculogram during a left heart catheterization: <b>A</b> diastole, <b>B</b> systole (https://www.researchgate.net).</p>",
            q: [
              Q("How long does the procedure last?", "About an hour", ["About 5 minutes", "About 6 hours", "Overnight"], "The slide says about an hour."),
              Q("What prevents bleeding after the catheter is removed?", "Pressure held on the puncture, or a closure device for femoral access", ["Heparin bolus", "A tourniquet on the arm for a day", "Nothing is needed"], "Pressure is held, and a closure device may be used for femoral punctures.")
            ]
          }),
          S(84, "Diagnostic and therapeutic: PCI", {
            why: "<p>The balloon squashes the plaque into the wall to open the lumen; the stent is a metal mesh scaffold that keeps it from springing back. That combination restores flow immediately (DAPT afterward keeps the stent from clotting: CAD III-V).</p>",
            q: [
              Q("What does PCI use to restore coronary flow?", "Balloon angioplasty, commonly with a stent", ["Bypass grafts", "Thrombolytics only", "Atherectomy only"], "PCI is balloon angioplasty, usually with stent placement."),
              Q("What does the balloon do when inflated?", "Compresses plaque against the arterial wall and expands the vessel", ["Removes the plaque from the body", "Dissolves the clot with drugs", "Closes the artery"], "The balloon pushes plaque into the wall to widen the lumen."),
              Q("What is the stent's job?", "Maintain vessel patency and restore flow", ["Measure pressure", "Deliver contrast", "Close the puncture site"], "The expanded stent keeps the artery open.")
            ]
          }),
          S(85, "PCI figure", {
            pic: "<p>A PCI (percutaneous coronary intervention) or PTCA (percutaneous transluminal coronary angioplasty). Figure: <b>A</b> catheter with balloon and stent across the plaque; <b>B</b> balloon inflated, plaque compressed; <b>C</b> stent expanded.</p>",
            q: [
              Q("What does PCI stand for?", "Percutaneous coronary intervention", ["Primary coronary infusion", "Percutaneous cardiac imaging", "Peripheral coronary incision"], "PCI = percutaneous coronary intervention."),
              Q("What is the order shown in the figure?", "Catheter and balloon placed → balloon inflated → stent expanded", ["Stent expanded → balloon placed → plaque removed", "Balloon inflated → catheter placed → clot forms", "CABG → PCI → stent"], "The panels go from placement to inflation to the expanded stent.")
            ]
          }),
          S(86, "Angioplasty: before and after", {
            pic: "<p>Eight angiogram frames (A to H) showing a narrowed coronary artery, the balloon and stent being placed (arrows), and in the last frame (H) the artery filling normally after angioplasty.</p>",
            q: [
              Q("In the before-and-after frames, what does the last image show?", "The artery filling normally after angioplasty and stenting", ["A totally occluded artery", "A bypass graft", "A calcium score"], "After PCI the treated artery fills with contrast normally.")
            ]
          })
        ],
        review: [
          Q("A 50-year-old with stable chest pain, intermediate likelihood, normal kidneys, regular rhythm. Good anatomic test?", "CCTA", ["CAC score", "Invasive angiography first", "No testing"], "CCTA fits stable chest pain with intermediate likelihood and no barriers."),
          Q("Which test uses NO contrast?", "CAC scoring", ["CCTA", "Coronary angiography", "Left ventriculogram"], "CAC is a noncontrast CT."),
          Q("Which test can both diagnose and treat a coronary blockage?", "Invasive coronary angiography with PCI", ["CCTA", "CAC scoring", "MPI"], "Angiography allows PCI in the same procedure."),
          Q("A patient with CKD stage 4 and stable chest pain: CCTA or stress test?", "Stress test", ["CCTA", "Both are contraindicated", "CAC only"], "Contrast for CCTA risks AKI in CKD."),
          Q("CCTA shows 40% stenosis. What is it called and what's the plan?", "Non-obstructive CAD; prevention and lifestyle", ["Obstructive CAD; revascularize", "Normal; reassure only", "Moderate stenosis; CT-FFR"], "Under 50% is non-obstructive and gets preventive therapy."),
          Q("A CAC score of 0 in a patient with ongoing chest pain means:", "It doesn't exclude noncalcified plaque or CAD", ["CAD is ruled out", "She needs CABG", "She has high-risk plaque"], "Zero calcium can't rule out soft plaque.")
        ]
      }
    ]
  });
})();
