/* Hallmarks: CAD Part IV (ACS, Stager). Source: source-material/cardio-part-3/text/cad-part-4.md. Only APPEND hallmarks. */
(function () {
  "use strict";
  var C = window.Hallmarks.C;
  window.Hallmarks.lecture("cad-part-4", "CAD Part IV: ACS", [

    C("hm-anterior-mi", "Anterior / septal MI", "STEMI of the front wall and septum from the LAD.",
      "ST elevation V1-V4 (septal V1-V2) = LAD.", [
        ["ekg", "ST elevation in V1-V4 (septal: V1-V2)", "The anterior leads look at the LAD's territory."],
        ["cause", "LAD occlusion", "The LAD supplies the anterior wall and septum."],
        ["buzz", "No reciprocal changes on a standard 12-lead (needs a 15-lead)", "The slide lists no reciprocal leads for anterior MI."],
        ["tx", "ACEi or ARB especially after anterior STEMI", "Anterior STEMI is a listed reason for ACEi/ARB in secondary prevention."]
      ]),

    C("hm-lateral-mi", "Lateral MI", "STEMI of the side wall from the circumflex.",
      "ST elevation I, aVL, V5-V6 with reciprocal II, III, aVF = LCx.", [
        ["ekg", "ST elevation in I, aVL, V5 and V6", "These leads look at the lateral wall."],
        ["ekg", "Reciprocal ST depression in II, III and aVF", "The inferior leads mirror the lateral injury."],
        ["cause", "Left circumflex occlusion", "The LCx supplies the lateral wall."]
      ]),

    C("hm-inferior-mi", "Inferior MI", "STEMI of the bottom wall, usually from the RCA.",
      "ST elevation II, III, aVF with reciprocal I and aVL = RCA (80%); get a right-sided EKG.", [
        ["ekg", "ST elevation in II, III and aVF with reciprocal changes in I and aVL", "These leads look at the inferior wall."],
        ["cause", "RCA in 80%, LCx in 20%", "The RCA usually supplies the inferior wall."],
        ["dx", "Always get a right-sided EKG to look for RV infarction", "Inferior MI often drags the RV with it."],
        ["danger", "Sinus bradycardia and AV block", "The RCA usually feeds the SA and AV nodes."]
      ], { x: ["hm-post-mi-brady"] }),

    C("hm-posterior-mi", "Posterior MI", "STEMI of the back wall, seen best with posterior leads.",
      "ST depression V1-V3 is the mirror; ST elevation in V7-V9 confirms posterior MI.", [
        ["ekg", "ST elevation in V7-V9", "Posterior leads sit over the back wall."],
        ["ekg", "Reciprocal ST depression in V1-V3", "Anterior leads see the posterior injury upside down."],
        ["cause", "RCA or LCx", "Either artery can supply the posterior wall."]
      ], { x: ["hm-inferior-mi", "hm-lateral-mi"] }),

    C("hm-rv-mi", "Right ventricular infarction", "RV infarct from a proximal RCA, usually with an inferior MI.",
      "Inferior STEMI + hypotension + JVD + clear lungs = RV infarct: give fluids, no nitro, no diuretics.", [
        ["exam", "Triad: hypotension, JVD and clear lungs", "The RV fails, so blood backs up into the veins but not the lungs."],
        ["ekg", "ST elevation in right-sided leads, especially V4R", "V4R looks directly at the RV free wall."],
        ["avoid", "Nitroglycerin and diuretics", "They drop preload, and the failing RV depends on preload."],
        ["tx", "Normal saline boluses to expand preload, then urgent reperfusion", "More preload lets the RV push blood to the LV."],
        ["cause", "Proximal RCA occlusion, usually with an inferior MI", "The proximal RCA feeds the RV."]
      ]),

    C("hm-type2-mi", "Secondary (type 2) MI", "Supply-demand mismatch from another illness, not plaque rupture.",
      "Rising troponin + ischemic symptoms or EKG changes during sepsis, anemia, hypoxemia or a tachyarrhythmia = secondary MI.", [
        ["cause", "Oxygen supply-demand imbalance from another acute illness (severe anemia, hypoxemia, tachyarrhythmia)", "The coronary arteries may be fine; demand outstrips supply."],
        ["story", "Septic, hypotensive patient with chest pressure, dynamic ST depression and rising troponin", "Troponin plus evidence of ischemia makes it an MI, not just injury."],
        ["buzz", "Previously called type 2 MI", "The 2026 Fifth Universal Definition renamed it secondary MI."]
      ], { x: ["hm-myocardial-injury"] }),

    C("hm-myocardial-injury", "Acute myocardial injury (not MI)", "Troponin rises without any evidence of ischemia.",
      "Rising troponin with no ischemic symptoms or EKG changes (sepsis, CKD, PE) = injury, not infarction.", [
        ["labs", "Troponin elevated and rising or falling, but no ischemic symptoms or findings", "MI needs injury AND ischemia; this has only injury."],
        ["story", "Septic patient with a rising troponin and no chest pain or EKG change", "The slide's example of injury without infarction."],
        ["cause", "Heart stress: tachyarrhythmias, RV strain from PE, decompensated HF, CKD/ESRD", "Stress can leak troponin without a coronary event."]
      ], { x: ["hm-type2-mi"] }),

    C("hm-minoca", "MINOCA", "MI with no coronary stenosis of 50% or more.",
      "MI criteria met but cath shows no stenosis ≥50% = MINOCA, a working diagnosis; rule out myocarditis and Takotsubo.", [
        ["test", "No stenosis ≥50% in a major epicardial artery on cath", "That is what makes it non-obstructive."],
        ["who", "More common in women and younger patients", "MINOCA skews toward women and younger people."],
        ["cause", "Vasospasm, SCAD, embolism, microvascular dysfunction, or plaque erosion with transient clot", "These are the true ischemic MINOCA causes."],
        ["dx", "Working diagnosis: cardiac MRI and echo to exclude mimics", "Myocarditis, Takotsubo and PE can look like MINOCA."]
      ]),

    C("hm-takotsubo", "Takotsubo (stress) cardiomyopathy", "Transient regional LV dysfunction triggered by stress.",
      "Emotional or physical stress + ACS-like picture + clean coronaries + transient LV ballooning = Takotsubo.", [
        ["story", "Chest pain, EKG changes and troponin after emotional or physical stress", "It mimics ACS but is triggered by stress."],
        ["test", "Transient regional LV systolic dysfunction", "The wall motion problem resolves over time."],
        ["dx", "Mimic of MINOCA: no obstructive CAD on cath", "It must be excluded before calling it MINOCA."]
      ]),

    C("hm-prinzmetal", "Vasospastic (Prinzmetal) angina", "Coronary spasm, not a fixed plaque.",
      "Young smoker + rest pain midnight to morning + transient ST elevation + clean cath = Prinzmetal; CCB, no beta blocker.", [
        ["who", "Young smokers with few CV risk factors; ask about cocaine or meth", "Spasm-prone arteries, not plaque, cause it."],
        ["timing", "At rest, most often from midnight to morning", "The classic timing of vasospastic angina."],
        ["ekg", "Transient ST elevation that resolves when the pain stops", "Spasm causes transmural ischemia that reverses."],
        ["test", "No significant obstructive CAD on angiography", "The artery is normal between spasms."],
        ["tx", "Calcium channel blocker first line; SL nitro for attacks", "CCBs relax coronary smooth muscle."],
        ["avoid", "Beta blockers, especially nonselective ones", "Unopposed alpha tone can worsen spasm."]
      ], { x: ["hm-stimulant"] }),

    C("hm-stimulant", "Cocaine / meth chest pain", "Sympathomimetic ischemia from stimulant use.",
      "Tachycardia + HTN + chest pain after cocaine or meth = give a benzodiazepine first, then nitrates.", [
        ["cause", "Cocaine or methamphetamine surges sympathetic activity", "Higher HR and BP raise oxygen demand."],
        ["test", "Can cause vasospasm, coronary thrombosis and acute MI", "Stimulants hit supply and demand at once."],
        ["tx", "Benzodiazepines to calm the sympathetic surge, nitrates for spasm", "Treat the drug effect first."]
      ], { x: ["hm-prinzmetal"] }),

    C("hm-free-wall", "LV free wall rupture", "A mechanical tear of the LV wall after MI.",
      "Post-MI sudden collapse, tamponade, PEA = free wall rupture; very high mortality.", [
        ["danger", "Hemopericardium, then cardiac tamponade, then PEA or sudden death", "Blood fills the pericardium and stops the heart from filling."],
        ["buzz", "High mortality", "The complications table marks it as the deadliest."],
        ["exam", "Tamponade picture: hypotension, JVD and muffled heart sounds (standard teaching)", "Blood in the pericardium squeezes the heart."]
      ]),

    C("hm-vsr", "Ventricular septal rupture", "A hole in the septum after MI.",
      "New harsh holosystolic murmur + oxygen step-up from RA to RV after MI = septal rupture.", [
        ["exam", "New harsh holosystolic murmur", "Blood jets across the septum during systole."],
        ["test", "Oxygen saturation step-up (left-to-right shunt)", "Oxygenated LV blood enters the right side."],
        ["cause", "The septum tears after MI, creating a left-to-right shunt", "Blood crosses from the high-pressure LV to the RV."]
      ], { x: ["hm-papillary"] }),

    C("hm-papillary", "Papillary muscle rupture", "Acute severe mitral regurgitation after MI.",
      "Sudden flash pulmonary edema and shock after MI + new MR murmur = papillary muscle rupture.", [
        ["sx", "Sudden pulmonary edema and cardiogenic shock", "Acute severe MR floods the lungs."],
        ["exam", "New mitral regurgitation murmur", "The leaflet loses its anchor and leaks."],
        ["cause", "The papillary muscle tears, so the mitral leaflet flails", "The leaflet loses its anchor and leaks backward."]
      ], { x: ["hm-vsr"] }),

    C("hm-cardiogenic-shock", "Cardiogenic shock after MI", "Severe pump failure with tissue hypoperfusion.",
      "Post-MI hypotension + cold, hypoperfused + pulmonary congestion = cardiogenic shock; culprit-only PCI.", [
        ["sx", "Severe pump failure with hypotension and tissue hypoperfusion", "The heart can't generate enough output."],
        ["tx", "Urgent revascularization: PCI the culprit artery only", "Routine multivessel PCI during shock worsens outcomes."],
        ["who", "Elderly patients are at greater risk", "Older patients have more HF and shock after MI."]
      ]),

    C("hm-post-mi-brady", "Post-MI bradycardia / AV block", "Conduction trouble after MI, most often inferior.",
      "Inferior MI + slow rate or AV block = atropine, temporary pacing if refractory.", [
        ["who", "Most common with inferior MI", "The RCA usually supplies the AV node."],
        ["tx", "Atropine for symptomatic bradycardia; temporary pacing if refractory", "Most post-MI blocks are temporary."],
        ["buzz", "Permanent pacemaker only after a waiting period if it persists", "Many blocks recover, so don't rush a permanent device."]
      ])
  ], {
    walls: ["hm-anterior-mi", "hm-lateral-mi", "hm-inferior-mi", "hm-posterior-mi", "hm-rv-mi"],
    types: ["hm-type2-mi", "hm-myocardial-injury", "hm-minoca", "hm-takotsubo", "hm-prinzmetal", "hm-stimulant"],
    comp: ["hm-free-wall", "hm-vsr", "hm-papillary", "hm-cardiogenic-shock", "hm-post-mi-brady"]
  });
}());
