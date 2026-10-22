/*
  Cardio Part 1 Diseases tool: Cardiovascular Physiology lecture (Palmer).
  Same shape as data/diseases-cardio-valvular.js; uses window.DiseaseContent helpers.

  Sources: source-material/cardio-part-1/text/cardio-physiology.md (slides + notes)
  and the "Cardiology Physiology Objectives" block of objectives.txt.

  This is a physiology lecture, not a disease lecture. Each entry is a clinical
  condition the slides use to illustrate a principle: turbulent flow (murmurs,
  atherosclerotic plaque), circulatory shock (critical closing pressure),
  conduction failure and escape pacemakers, abnormal ventricular filling
  (S3/S4, right atrial pressure), raised blood pressure as afterload (and the
  calcium channel blocker mechanism the deck gives), and the local vascular
  response to injury. The deck teaches no workup or treatment beyond that,
  so none is given here.

  Question ids are "<disease id>|<index>" and progress is saved against them:
  only APPEND questions to a disease; never insert, delete, or reorder.
*/
(function () {
  "use strict";

  var H = window.DiseaseContent;
  var Tbl = H.Tbl, HY = H.HY, Mn = H.Mn, S = H.S, Q = H.Q, D = H.D, L = H.L;

  var pacemakerTable = Tbl(["Pacemaker site", "Intrinsic rate", "When it takes over"], [
    ["<strong>SA node</strong>", "<strong>60–100/min</strong>", "Normal pacemaker — fastest, so it sets the heart rate"],
    ["<strong>AV node</strong>", "<strong>40–60/min</strong>", "If the SA node does not fire"],
    ["<strong>Purkinje fibers</strong>", "<strong>15–40/min</strong>", "If the AV node also fails to fire"]
  ]) + Mn("100 – 60 – 40", "SA 60–100, AV 40–60, Purkinje 15–40: each backup is slower than the one above it.");

  var mediatorTable = Tbl(["Mediator", "Effect", "Source / role"], [
    ["<strong>Nitric oxide</strong>", "Vasodilation; inhibits platelet aggregation", "Endothelium; released by ACh, bradykinin, histamine, thrombin, and shear stress"],
    ["<strong>Endothelin</strong>", "Vasoconstriction", "Released locally after vessel damage to <strong>prevent extensive bleeding</strong>"],
    ["<strong>Serotonin</strong>", "Vasoconstriction", "Released from <strong>aggregating platelets</strong> during clotting; helps control bleeding"],
    ["<strong>Histamine</strong>", "Powerful arteriolar <strong>vasodilator</strong>; ↑ capillary permeability", "Mast cells in injured tissue, basophils"],
    ["<strong>Bradykinin</strong>", "Intense arteriolar vasodilation, ↑ capillary permeability, venule constriction", "Regulates flow in skin, salivary glands, GI tract"],
    ["<strong>Prostaglandins</strong>", "Some constrict, some dilate", "Synthesized after tissue injury from membrane constituents (arachidonic acid)"],
    ["<strong>Corticosteroids</strong>", "Anti-inflammatory", "<strong>Block arachidonic acid release</strong> → no prostaglandin synthesis"]
  ]);

  window.CARDIO_DISEASES_PHYSIOLOGY = L("cardio-physiology", "Cardiovascular Physiology", [

    // ------------------------------------------------------------------
    D("phys-turbulent-flow", "Turbulent Flow: Murmurs and Atherosclerotic Plaque", "Turbulent flow moves in all directions and needs more pressure to push blood forward. The lecture’s examples: atherosclerotic plaque roughening the vessel lining, high viscosity, and murmurs from blood flowing through a diseased valve.", [
      S("overview", "What the Lecture Says", Tbl(["", "Laminar flow", "Turbulent flow"], [
        ["Pattern", "Smooth, streamlined", "Movement in all directions"],
        ["Pressure needed", "<strong>Less</strong> pressure to move forward", "<strong>Greater</strong> pressure to move forward"]
      ]) + "<p><strong>Causes of turbulence in the lecture:</strong></p><ul><li><strong>Atherosclerotic plaque</strong> disrupts the smooth vessel lining → turbulent flow → <strong>raises the pressure</strong> needed to move blood forward.</li><li><strong>Higher viscosity</strong> (friction between molecules of the fluid) increases turbulence.</li><li><strong>Heart murmurs</strong> are turbulent flow through a <strong>diseased heart valve</strong> — the turbulence is the sound you hear.</li></ul>"),
      S("physiology", "Physiology Link", "<ul><li><strong>Flow</strong> is driven by the pressure difference between the two ends of a vessel; <strong>resistance</strong> opposes it (friction between blood and vessel walls; viscosity is part of resistance). Flow = ΔP / resistance.</li><li>The resistance of all vessels combined is <strong>peripheral (systemic) vascular resistance</strong>.</li><li>The <strong>endocardium</strong> lines the chambers, is continuous with vessel endothelium, and <strong>reduces friction and turbulence</strong>.</li><li>The smooth <strong>tunica intima</strong> prevents platelet adherence and clotting.</li></ul>" + HY("Anything that roughens the lining (plaque, diseased valve) or thickens the blood (viscosity) → turbulence → more pressure needed → audible murmur over a diseased valve.")),
      S("key", "Key Point", Mn("Rough road, loud ride", "A smooth lining gives quiet laminar flow; plaque or a diseased valve makes the road rough, the flow turbulent, and (at a valve) audible."))
    ], [
      Q("overview", "According to the physiology lecture, what is a heart murmur?", ["The sound of turbulent blood flow through a diseased valve", "The sound of normal AV valve closure", "Vibration of the pericardium", "Laminar flow through a normal valve"], 0, "Murmurs result from turbulent flow through a diseased heart valve; the turbulence is what you hear."),
      Q("overview", "How does atherosclerotic plaque change blood flow in an artery?", ["It disrupts the smooth lining, creating turbulent flow that requires more pressure", "It creates laminar flow that requires less pressure", "It increases arterial compliance", "It lowers blood viscosity"], 0, "Plaque disrupts the smooth vessel lining, causing turbulence that raises the pressure needed to move blood forward."),
      Q("overview", "Compared with laminar flow, turbulent flow:", ["Requires greater pressure to move blood forward", "Requires less pressure to move blood forward", "Is smooth and streamlined", "Occurs only in capillaries"], 0, "Laminar flow is streamlined and needs less pressure; turbulent flow moves in all directions and needs more."),
      Q("overview", "Besides a rough vessel lining, which blood property increases turbulence?", ["Higher viscosity", "Lower viscosity", "Higher compliance", "Lower hematocrit"], 0, "Higher viscosity (friction between molecules of a flowing fluid) increases turbulence."),
      Q("physiology", "Which heart layer, continuous with vascular endothelium, reduces friction and turbulence?", ["Endocardium", "Epicardium", "Myocardium", "Fibrous pericardium"], 0, "The endocardium lines the chambers, is continuous with vessel endothelium, and reduces friction and therefore turbulence."),
      Q("physiology", "Blood flow through a vessel is determined by:", ["The pressure difference between its two ends divided by resistance", "The absolute pressure at the start of the vessel only", "Wall tension alone", "The number of valves in the vessel"], 0, "Flow = change in pressure / resistance; resistance comes from friction with the walls and viscosity."),
      Q("physiology", "What property of the tunica intima prevents platelet adherence and clotting?", ["Its smoothness", "Its smooth muscle content", "Its loose connective tissue", "Its elastic recoil"], 0, "The tunica intima’s smooth epithelial lining prevents platelet adherence and blood clotting.")
    ]),

    // ------------------------------------------------------------------
    D("phys-circulatory-shock", "Circulatory Shock", "A state where pressure in the small vessels falls to the critical closing pressure, the vessels collapse, and tissue perfusion falls. The lecture links it to wall tension, autoregulation, and the reflexes that defend blood pressure.", [
      S("overview", "What the Lecture Says", "<p><strong>Circulatory shock:</strong> pressure in small vessels drops to the point of <strong>critical closing pressure</strong>, and <strong>perfusion of tissues lessens</strong>.</p><ul><li><strong>Wall tension</strong> = force in the vessel wall that opposes the distending pressure inside.</li><li>Pressure inside the vessel <strong>must be higher</strong> than wall tension or the vessel <strong>collapses</strong> — the <strong>critical closing pressure</strong>.</li></ul>" + HY("Shock = small-vessel pressure falls to critical closing pressure → vessels close → tissues are underperfused.")),
      S("physiology", "Physiology Link: Defending Perfusion", Tbl(["Mechanism", "What the lecture says"], [
        ["<strong>Cardiac output</strong>", "CO = SV × HR (normal adult 4–8 L/min)"],
        ["<strong>Heart rate limit</strong>", "Faster rate → less diastolic filling time → less CO → less O₂ and nutrients → cells can die"],
        ["<strong>Autoregulation</strong>", "Heart, brain, and kidney flow stays relatively constant across systemic BP of <strong>60–180 mmHg</strong>, preserving vital organs"],
        ["<strong>Baroreceptors</strong>", "Stretch receptors in vessel and heart walls signal the brainstem CV center (lower pons/medulla)"],
        ["<strong>Chemoreceptors</strong>", "Carotid bodies monitor O₂, CO₂, H⁺"],
        ["<strong>Extrinsic reflexes</strong>", "Pain and cold shunt blood to the central body"],
        ["<strong>Sympathetic response</strong>", "↑ heart rate and contractility; norepinephrine constricts veins and arterioles"]
      ])),
      S("key", "Key Point", "<p>The vital organs are protected only within the autoregulatory range; below ~60 mmHg, and once small-vessel pressure reaches critical closing pressure, perfusion falls.</p>" + Mn("Pressure must beat the wall", "If inside pressure loses to wall tension, the vessel closes — that is shock at the capillary level."))
    ], [
      Q("overview", "In circulatory shock, why does tissue perfusion fall?", ["Pressure in small vessels drops to the critical closing pressure and they collapse", "Laminar flow becomes turbulent in the capillaries", "Venous compliance falls to zero", "Arterial wall tension disappears"], 0, "In shock, small-vessel pressure falls to the critical closing pressure, the vessels collapse, and perfusion lessens."),
      Q("overview", "What is critical closing pressure?", ["The point where pressure inside a vessel no longer exceeds wall tension, so the vessel collapses", "The pressure at which the aortic valve closes", "The pressure in the right atrium", "The maximum pressure an artery can tolerate before rupture"], 0, "Pressure inside the vessel must exceed wall tension or the vessel collapses; that threshold is the critical closing pressure."),
      Q("overview", "Wall tension is defined as:", ["The force in the vessel wall that opposes the distending pressure inside", "The volume stored per mmHg rise in pressure", "Friction between blood and the vessel wall", "The pressure the ventricle must generate to open the aortic valve"], 0, "Wall tension opposes distending pressure. The volume-per-pressure definition is compliance; friction is resistance; the ventricular pressure is afterload."),
      Q("physiology", "Over what range of systemic blood pressure does autoregulation keep heart, brain, and kidney blood flow relatively constant?", ["60–180 mmHg", "20–60 mmHg", "100–250 mmHg", "0–100 mmHg"], 0, "Autoregulation keeps vital organ flow relatively constant from about 60 to 180 mmHg."),
      Q("physiology", "A hypotensive patient’s heart rate climbs very high. Why can a very fast rate reduce cardiac output?", ["Less diastolic time means less ventricular filling", "It lengthens the absolute refractory period", "It increases afterload directly", "It stops venous return to the atria"], 0, "The faster the rate, the less time to fill; less filling means less CO and less O₂ delivery."),
      Q("physiology", "Which receptors respond to changes in stretch of vessel walls and signal the brainstem CV center?", ["Baroreceptors", "Chemoreceptors", "β2-adrenergic receptors", "Nociceptors"], 0, "Baroreceptors are pressure-sensitive stretch receptors in vessel and heart walls."),
      Q("physiology", "Normal adult cardiac output is:", ["4–8 L/min", "1–2 L/min", "10–15 L/min", "20–25 L/min"], 0, "CO = SV × HR; the normal adult range is 4.0 to 8.0 L/min."),
      Q("physiology", "Which extrinsic reflexes shunt blood to the central body to support blood pressure?", ["Pain and cold reflexes", "Baroreceptor and chemoreceptor reflexes", "Frank-Starling and Bainbridge reflexes", "Cough and Valsalva reflexes"], 0, "Intrinsic reflexes are baroreceptors and chemoreceptors; extrinsic reflexes of pain and cold shunt blood centrally.")
    ]),

    // ------------------------------------------------------------------
    D("phys-conduction-failure", "Conduction Failure and Escape Rhythms", "When the SA node fails, slower backup pacemakers take over: the AV node at 40–60/min, then the Purkinje fibers at 15–40/min. Disruption anywhere along the conducting system shows on the ECG, and the supernormal period is when arrhythmias can develop.", [
      S("overview", "What the Lecture Says", pacemakerTable + "<ul><li>The SA node’s discharge rate <strong>determines the heart rate</strong> because it depolarizes faster than other cells.</li><li><strong>Disruption anywhere along the conducting system can be seen on the ECG.</strong></li><li>The <strong>supernormal excitatory period</strong> is a very short time when a <strong>weak stimulus</strong> can evoke a response — the period when <strong>arrhythmias can develop</strong>.</li></ul>"),
      S("physiology", "Physiology Link", "<p><strong>Normal path:</strong> SA node → internodal pathways (atria depolarize and contract) → <strong>AV node</strong> (slow conduction delays the ventricles so the atria finish contracting) → <strong>bundle of His</strong> → right and left bundle branches → Purkinje fibers → ventricles contract from apex toward base.</p>" + Tbl(["Refractory period", "Phases", "What it means"], [
        ["<strong>Absolute</strong>", "0, 1, 2, and part of 3", "No stimulus can trigger another AP; lasts almost as long as contraction, <strong>blocking a second contraction</strong>"],
        ["<strong>Relative</strong>", "Late phase 3", "Cell can re-depolarize to a <strong>greater-than-normal</strong> stimulus"],
        ["<strong>Supernormal</strong>", "Very short, end of phase 3", "<strong>Weak</strong> stimulus can evoke a response → <strong>arrhythmias</strong>"]
      ]) + "<p><strong>Autonomic control:</strong> parasympathetic (vagus, CN X) slows the rate; sympathetic increases rate and contractility.</p>"),
      S("key", "Key Point", HY("Slow regular rate 40–60 → AV node (junctional) is pacing; 15–40 → Purkinje (ventricular) is pacing. Arrhythmias can arise in the supernormal excitatory period."))
    ], [
      Q("overview", "If the SA node stops firing, which site takes over and at what rate?", ["AV node at 40–60/min", "Purkinje fibers at 60–100/min", "AV node at 15–40/min", "Bundle of His at 100–120/min"], 0, "The AV node can fire on its own at its intrinsic rate of 40–60/min."),
      Q("overview", "A patient has a regular rate of 28/min after both the SA and AV nodes fail. Which tissue is pacing the heart?", ["Purkinje fibers", "AV node", "SA node", "Internodal pathways"], 0, "When the AV node also fails, Purkinje fibers can fire at 15–40/min."),
      Q("overview", "What is the normal intrinsic firing rate of the SA node?", ["60–100/min", "40–60/min", "15–40/min", "100–150/min"], 0, "The SA node depolarizes at 60–100/min, faster than other myocardial cells, so it sets the heart rate."),
      Q("overview", "During which period can a weak stimulus evoke a response, allowing arrhythmias to develop?", ["Supernormal excitatory period", "Absolute refractory period", "Relative refractory period", "Phase 2 plateau"], 0, "The supernormal period is very short; a weak stimulus can evoke a response, and arrhythmias can develop."),
      Q("overview", "How can a disruption along the cardiac conducting system be detected, per the lecture?", ["On the ECG tracing", "By auscultating an S4", "By measuring central venous pressure", "By palpating the carotid pulse pressure"], 0, "Disruption anywhere along the conducting system can be seen on ECG tracings."),
      Q("physiology", "Why does the long absolute refractory period protect the heart?", ["It blocks a second contraction until the first is over", "It speeds conduction through the AV node", "It allows weak stimuli to trigger beats", "It lets the SA node fire faster"], 0, "The ARP (phases 0, 1, 2, part of 3) lasts almost as long as contraction, preventing another contraction until the first is complete."),
      Q("physiology", "What is the purpose of slow conduction through the AV junctional area?", ["It delays ventricular depolarization so the atria can finish contracting", "It speeds ventricular contraction", "It prevents the SA node from firing", "It generates the plateau phase"], 0, "Slow depolarization through the AV junction delays the ventricles, allowing the atria to complete depolarization and contraction."),
      Q("physiology", "During the relative refractory period, a myocardial cell can be re-depolarized by:", ["A greater-than-normal stimulus", "Any weak stimulus", "No stimulus at all", "Only vagal stimulation"], 0, "In the relative refractory period the cell can respond only to a greater-than-normal stimulus."),
      Q("physiology", "Which nerve provides the parasympathetic slowing of heart rate?", ["Vagus nerve (CN X)", "Phrenic nerve", "Glossopharyngeal nerve (CN IX)", "Sympathetic cardiac nerves"], 0, "Parasympathetic input via the vagus nerve slows heart rate with little effect on the vasculature.")
    ]),

    // ------------------------------------------------------------------
    D("phys-abnormal-filling", "Abnormal Ventricular Filling: S3, S4, and Venous Pressure", "Filling problems are heard and seen at the bedside. An over-distended or non-compliant ventricle can produce an S3 at the end of rapid filling, a turbulent atrial kick an S4, and right atrial pressure shows as jugular venous pulsations.", [
      S("overview", "What the Lecture Says", Tbl(["Finding", "Timing", "Mechanism"], [
        ["<strong>S3</strong>", "End of the <strong>rapid filling phase</strong>, before atrial contraction", "<strong>Over-distended or non-compliant ventricle</strong>; vibrations from abrupt cessation of blood entering the ventricle"],
        ["<strong>S4</strong>", "<strong>Last third of diastole</strong>", "Atria contract and the rush of blood is turbulent"]
      ]) + "<ul><li><strong>Right atrial pressure</strong> is visible as <strong>internal jugular vein pulsations</strong>, which can be measured to assess cardiac function.</li><li>Pressure in the right atrium is the <strong>central venous pressure (CVP)</strong> — normally about <strong>0 mmHg</strong>.</li></ul>"),
      S("physiology", "Physiology Link", "<p><strong>Cardiac cycle:</strong> systole = isovolumetric contraction (AV valves close, S1) → ejection; S2 when the semilunar valves close. Diastole = isovolumetric relaxation → AV valves open → rapid filling → atrial contraction.</p>" + Tbl(["Concept", "What the lecture says"], [
        ["<strong>Preload</strong>", "Volume work — end-diastolic volume stretching the ventricle"],
        ["<strong>Frank-Starling</strong>", "Greater diastolic filling → more forceful systolic contraction"],
        ["<strong>CVP / RA filling</strong>", "Depends on the <strong>RV pumping blood to the lungs</strong> and unimpeded flow into the RA; when the heart pumps strongly, atrial pressure drops and filling increases"],
        ["<strong>Intrathoracic pressure</strong>", "RA pressure <strong>falls with inspiration</strong>, <strong>rises with coughing or forced exhalation</strong>"],
        ["<strong>Atrial waves</strong>", "<strong>a</strong> = atrial contraction (late diastole); <strong>c</strong> = AV valves bulge into atria at start of systole; <strong>v</strong> = atrial filling against closed AV valves late in systole"]
      ])),
      S("key", "Key Point", HY("S3 = over-distended or stiff ventricle at the end of rapid filling. S4 = turbulent atrial kick in the last third of diastole. Neck vein pulsations reflect right atrial pressure, which rises when the RV can’t pump forward.") + Mn("S3 early, S4 late", "S3 follows rapid filling; S4 comes with the atrial kick just before S1."))
    ], [
      Q("overview", "A 3rd heart sound suggests which ventricular condition, per the lecture?", ["An over-distended or non-compliant ventricle", "A normally compliant ventricle at rest", "A stenotic semilunar valve", "Rapid AV node conduction"], 0, "An S3 may be heard with an over-distended or non-compliant ventricle, at the end of rapid filling."),
      Q("overview", "When in the cardiac cycle is an S4 heard?", ["Last third of diastole, when the atria contract", "Start of systole, when the AV valves close", "End of the rapid filling phase", "During the ejection period"], 0, "An S4 occurs in the last third of diastole when atrial contraction produces a turbulent rush of blood."),
      Q("overview", "What causes the vibrations of an S3?", ["Abrupt cessation of blood entering the ventricle at the end of rapid filling", "Atrial contraction against a stiff ventricle", "Closure of the semilunar valves", "Bulging of the AV valves into the atria"], 0, "S3 vibrations come from abrupt cessation of blood entering the ventricle at the end of the filling phase, before atrial contraction."),
      Q("overview", "Where can right atrial pressure be observed at the bedside?", ["As pulsations in the internal jugular veins", "At the radial pulse", "At the point of maximal impulse", "In the carotid upstroke"], 0, "Right atrial pressure is seen as internal jugular pulsations, which can be measured to assess cardiac function."),
      Q("physiology", "Central venous pressure (normally about 0 mmHg) depends mainly on:", ["The RV’s ability to pump blood to the lungs and unimpeded flow into the RA", "Left ventricular contractility alone", "Aortic valve area", "Arteriolar resistance in the kidneys"], 0, "CVP is regulated by the RV pumping blood to the pulmonary circulation and blood flowing unimpeded into the RA."),
      Q("physiology", "How does inspiration affect right atrial pressure?", ["It decreases it", "It increases it", "It has no effect", "It reverses the a-wave"], 0, "RA pressure falls with inspiration and rises with coughing or forced exhalation."),
      Q("physiology", "A ventricle filled to a greater degree in diastole contracts more forcefully. What is this called?", ["Frank-Starling mechanism", "Autoregulation", "Cardiac reserve", "Supernormal excitation"], 0, "The Frank-Starling mechanism: increased end-diastolic volume increases force of contraction."),
      Q("physiology", "Which atrial pressure wave occurs when the atria contract during the last phase of diastole?", ["a-wave", "c-wave", "v-wave", "x-descent"], 0, "The a-wave is atrial contraction; the c-wave is AV valve bulging at the start of systole; the v-wave is atrial filling late in systole.")
    ]),

    // ------------------------------------------------------------------
    D("phys-raised-afterload", "Raised Blood Pressure and Afterload", "Systemic blood pressure is the main afterload the left ventricle must overcome, and pulmonary pressure is the right ventricle’s. The lecture explains what raises vascular resistance (α-adrenergic stimulation, norepinephrine, angiotensin II) and how calcium channel blockers lower it.", [
      S("overview", "What the Lecture Says", "<ul><li><strong>Afterload</strong> = pressure (tension) work of the heart: the pressure it must generate to move blood into the aorta, presented after contraction begins.</li><li><strong>Systemic BP</strong> is the main afterload for the <strong>left</strong> ventricle; <strong>pulmonary BP</strong> for the <strong>right</strong>.</li><li><strong>Arterioles</strong> (mostly smooth muscle) are the resistance vessels that <strong>regulate BP</strong>.</li><li><strong>Calcium channel blocking drugs</strong> cause <strong>vasodilation</strong> by blocking calcium entry through calcium channels in vascular smooth muscle.</li></ul>" + HY("Higher systemic BP = higher LV afterload. CCBs lower vascular tone by blocking Ca²⁺ entry into smooth muscle.")),
      S("physiology", "Physiology Link: Vascular Tone", Tbl(["Factor", "Effect on vessels"], [
        ["<strong>α1/α2-adrenergic</strong> receptors", "Excitatory: open Ca²⁺ channels → <strong>vasoconstriction</strong>"],
        ["<strong>β2-adrenergic</strong> receptors", "Inhibitory: close Ca²⁺ channels → <strong>vasodilation</strong>"],
        ["<strong>Norepinephrine</strong>", "<strong>Powerful vasoconstrictor</strong>"],
        ["<strong>Epinephrine</strong>", "Weaker vasoconstrictor; <strong>vasodilator in skeletal muscle</strong>"],
        ["<strong>Angiotensin II</strong>", "Powerful vasoconstrictor of arterioles → ↑ peripheral vascular resistance → <strong>↑ BP</strong>"],
        ["<strong>Nitric oxide</strong> (endothelium)", "Relaxes smooth muscle → vasodilation"]
      ]) + "<p>Vascular smooth muscle has little sarcoplasmic reticulum and few fast Na⁺ channels, so <strong>vasoconstriction depends on extracellular calcium</strong> — which is why blocking Ca²⁺ entry dilates vessels.</p>"),
      S("key", "Key Point", Mn("Pre = volume, After = pressure", "Preload is the volume stretching the ventricle before it contracts; afterload is the pressure it pushes against after contraction starts."))
    ], [
      Q("overview", "What is the main source of afterload for the left ventricle?", ["Systemic blood pressure", "Pulmonary blood pressure", "End-diastolic volume", "Central venous pressure"], 0, "Systemic BP is the main afterload for the LV; pulmonary BP is the main afterload for the RV."),
      Q("overview", "Afterload is best defined as:", ["The pressure the ventricle must generate to move blood into the aorta", "The volume of blood stretching the ventricle at end-diastole", "The ability to change contraction force without changing length", "The maximum increase in cardiac output above normal"], 0, "Afterload is the pressure (tension) work of the heart; preload is end-diastolic volume, contractility is force at a given length, and cardiac reserve is the max CO increase."),
      Q("overview", "A patient with hypertension starts a calcium channel blocker. By what mechanism does it lower blood pressure?", ["Blocks calcium entry into vascular smooth muscle, causing vasodilation", "Stimulates α1 receptors", "Increases extracellular calcium", "Opens fast sodium channels in arterioles"], 0, "CCBs block Ca²⁺ entry through smooth muscle calcium channels, producing vasodilation."),
      Q("physiology", "Which vessels serve as the main resistance vessels that regulate blood pressure?", ["Arterioles", "Capillaries", "Venules", "Large elastic arteries"], 0, "Arterioles are mostly smooth muscle and serve as the resistance vessels of the circulation."),
      Q("physiology", "Stimulation of which receptors opens calcium channels in vascular smooth muscle and causes vasoconstriction?", ["α1 and α2-adrenergic receptors", "β2-adrenergic receptors", "Muscarinic receptors", "Histamine receptors"], 0, "α-adrenergic receptors are excitatory (vasoconstriction); β2 receptors are inhibitory (vasodilation)."),
      Q("physiology", "How does angiotensin II raise blood pressure?", ["Constricts arterioles, increasing peripheral vascular resistance", "Dilates arterioles to increase flow", "Increases capillary permeability", "Slows heart rate via the vagus nerve"], 0, "Angiotensin II is a powerful arteriolar vasoconstrictor that raises PVR and therefore BP."),
      Q("physiology", "Why does vascular smooth muscle contraction depend on extracellular calcium?", ["It has a poorly developed sarcoplasmic reticulum and few fast sodium channels", "It stores large amounts of calcium internally", "It relies on fast sodium channels for depolarization", "It lacks calcium channels"], 0, "With little SR for calcium storage and few fast Na⁺ channels, vasoconstriction relies on extracellular Ca²⁺ — the target of CCBs."),
      Q("physiology", "Which circulating catecholamine is the more powerful vasoconstrictor?", ["Norepinephrine", "Epinephrine", "Dopamine", "Acetylcholine"], 0, "Norepinephrine is a powerful vasoconstrictor; epinephrine is weaker and vasodilates skeletal muscle vessels.")
    ]),

    // ------------------------------------------------------------------
    D("phys-vessel-injury", "Vessel Injury and Local Inflammation", "After tissue or vessel injury, local mediators control bleeding and blood flow. Endothelin and serotonin constrict to limit bleeding, histamine and bradykinin dilate arterioles and leak capillaries, and corticosteroids block prostaglandin synthesis.", [
      S("overview", "What the Lecture Says", "<ul><li>After a blood vessel is damaged, <strong>endothelin</strong> is released locally to <strong>vasoconstrict and prevent extensive bleeding</strong>.</li><li><strong>Serotonin</strong> from aggregating platelets causes vasoconstriction and helps control bleeding.</li><li>Local tissue control can open the system for more flow — e.g., the <strong>“pulsing” felt in a cut finger</strong> as more blood arrives to help healing. Increased flow from local control is <strong>hyperemia</strong>, an example of autoregulation.</li><li><strong>Tissue injury</strong> triggers prostaglandin synthesis; <strong>corticosteroids</strong> are anti-inflammatory because they block arachidonic acid release.</li></ul>" + mediatorTable),
      S("physiology", "Physiology Link", "<p><strong>Autoregulation</strong> matches flow to local tissue needs via vessel tone and local factors (low O₂, accumulated metabolites). <strong>Endothelial control</strong> balances nitric oxide (dilates, inhibits platelet aggregation) against angiotensin II, prostaglandins, and endothelins (constrict). <strong>Humoral control</strong> adds circulating and local hormones.</p>" + HY("Bleeding control: endothelin (endothelium) + serotonin (platelets) constrict. Inflammation: histamine and bradykinin dilate and leak. Steroids stop prostaglandins at arachidonic acid.")),
      S("key", "Key Point", Mn("Histamine and bradykinin open the floodgates", "Both dilate arterioles and increase capillary permeability; endothelin and serotonin close the vessel to stop bleeding."))
    ], [
      Q("overview", "After a blood vessel is damaged, which endothelial substance is released locally to vasoconstrict and prevent extensive bleeding?", ["Endothelin", "Nitric oxide", "Bradykinin", "Histamine"], 0, "Local endothelin release after vessel damage causes vasoconstriction to prevent extensive bleeding."),
      Q("overview", "Which vasoconstrictor is released from aggregating platelets during clotting?", ["Serotonin", "Histamine", "Nitric oxide", "Bradykinin"], 0, "Serotonin from aggregating platelets causes vasoconstriction and helps control bleeding."),
      Q("overview", "How do corticosteroids produce their anti-inflammatory effect on local blood flow mediators?", ["They block arachidonic acid release, preventing prostaglandin synthesis", "They block calcium channels in smooth muscle", "They stimulate nitric oxide release", "They antagonize angiotensin II receptors"], 0, "Corticosteroids block release of arachidonic acid, so prostaglandins are not synthesized."),
      Q("overview", "A cut finger throbs as local blood flow increases to aid healing. What is this increased flow called?", ["Hyperemia", "Ischemia", "Hypovolemia", "Hemostasis"], 0, "Hyperemia (increased blood flow from local control) is an example of autoregulation."),
      Q("overview", "Which mediator from mast cells in injured tissue is a powerful arteriolar vasodilator that increases capillary permeability?", ["Histamine", "Serotonin", "Endothelin", "Norepinephrine"], 0, "Histamine comes from mast cells and basophils; it dilates arterioles and increases capillary permeability."),
      Q("overview", "Which mediator causes intense arteriolar vasodilation, increased capillary permeability, and constriction of venules?", ["Bradykinin", "Angiotensin II", "Serotonin", "Endothelin"], 0, "Bradykinin causes intense arteriolar dilation, capillary leak, and venule constriction; it helps regulate flow in skin, salivary glands, and GI tract."),
      Q("physiology", "Besides vasodilation, what does endothelial nitric oxide do to platelets?", ["Inhibits platelet aggregation", "Stimulates platelet aggregation", "Releases serotonin from platelets", "Has no platelet effect"], 0, "Nitric oxide relaxes vascular smooth muscle and inhibits platelet aggregation and secretion."),
      Q("physiology", "Which agonists trigger endothelial nitric oxide release, per the lecture?", ["Acetylcholine, bradykinin, histamine, and thrombin", "Norepinephrine, angiotensin II, and endothelin", "Serotonin, cortisol, and epinephrine", "Insulin, glucagon, and aldosterone"], 0, "NO release is controlled by ACh, bradykinin, histamine, thrombin, and shear stress from increased flow or BP.")
    ])
  ]);
}());
