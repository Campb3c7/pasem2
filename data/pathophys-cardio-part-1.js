/*
  Cardio Part 1 Pathophysiology practice (window.CARDIO_PART1_PATHOPHYS).

  A practice-first question bank: about 100 "why does this happen" questions
  spread across every Cardio Part 1 lecture. It reuses the Diseases engine
  (diseases.js) with topic labels: lecture -> topic -> one short "key" review
  section (shown when a question is missed) + questions.
  Sources: source-material/cardio-part-1/text/*.md.

  Question ids are "<topic id>|<index>" and progress is saved against them:
  only APPEND questions to a topic; never insert, delete, or reorder.
  `correct` is zero-based; the engine shuffles answer order every time.
*/
(function () {
  "use strict";

  var H = window.DiseaseContent;
  var HY = H.HY, S = H.S, Q = H.Q, D = H.D, L = H.L;

  function chain(steps) {
    return '<ol class="concept-chain">' + steps.map(function (step) { return "<li>" + step + "</li>"; }).join("") + "</ol>";
  }
  function points(items) {
    return "<ul>" + items.map(function (item) { return "<li>" + item + "</li>"; }).join("") + "</ul>";
  }
  // Every topic has one review section, "key"; every question points at it.
  function T(id, name, blurb, html, questions) {
    return D(id, name, blurb, [S("key", "Key pathophysiology", html)], questions.map(function (q) {
      return Q("key", q[0], q[1], q[2], q[3]);
    }));
  }

  window.CARDIO_PATHOPHYS_ANATOMY = L("cardio-anatomy", "Cardiovascular Anatomy", [
    T("pp-anat-coronary", "Coronary supply and infarct territory", "Which artery is blocked predicts which wall dies and which conduction tissue fails.",
      points([
        "<strong>LAD</strong>: anterior wall, anterior two-thirds of the septum, apex.",
        "<strong>Circumflex</strong>: lateral wall of the LV.",
        "<strong>RCA</strong>: RA, RV, inferior wall (in right-dominant hearts it gives the PDA), and the SA node and AV node in most people.",
        "<strong>Dominance</strong> = whichever artery gives the posterior descending artery (right-dominant in most people).",
        "Coronary arteries fill in <strong>diastole</strong>, when the myocardium relaxes; the LV is squeezed hardest in systole.",
        "Most cardiac venous blood drains through the <strong>coronary sinus</strong> into the right atrium."
      ]) + HY("Inferior MI + bradycardia or AV block = think RCA, because the RCA usually supplies the SA and AV nodes."), [
      ["A patient with an inferior wall MI develops sinus bradycardia and second-degree AV block. Why?",
        ["The RCA usually supplies the SA and AV nodes", "The LAD supplies the AV node in most people", "Inferior MI raises vagal tone only through pain", "The circumflex supplies the bundle of His"], 0,
        "In most people the RCA gives the SA nodal and AV nodal branches, so an RCA occlusion (inferior MI) can knock out both pacemaker and conduction tissue."],
      ["A proximal LAD occlusion would most directly cause ischemia of which region?",
        ["Anterior LV wall, anterior septum and apex", "Inferior LV wall", "Right ventricular free wall", "Lateral LV wall only"], 0,
        "The LAD runs in the anterior interventricular groove and feeds the anterior wall, the anterior two-thirds of the septum, and the apex."],
      ["Why is the left ventricle perfused mainly during diastole?",
        ["Systolic contraction compresses intramural coronary vessels", "The aortic valve blocks the coronary ostia in diastole", "Coronary arteries have no smooth muscle", "Aortic pressure is highest in diastole"], 0,
        "During systole the contracting LV wall squeezes its own vessels shut; flow resumes when the muscle relaxes in diastole. That is why tachycardia (shorter diastole) worsens ischemia."],
      ["Tachycardia worsens angina in a patient with coronary disease mainly because it:",
        ["Shortens diastole, cutting coronary filling time while raising O2 demand", "Lowers aortic pressure in systole", "Dilates the coronary sinus", "Reduces preload to zero"], 0,
        "Faster rates shorten diastole more than systole, so supply falls (less filling time) while demand rises (more beats per minute)."],
      ["A heart is described as right dominant. This means:",
        ["The RCA gives rise to the posterior descending artery", "The RV is larger than the LV", "The RCA supplies the anterior septum", "Right-sided pressures exceed left-sided pressures"], 0,
        "Dominance is defined by which artery supplies the PDA. Most hearts are right dominant."]
    ]),
    T("pp-anat-pericardium", "Pericardium and tamponade", "A stiff sac around the heart means fluid limits filling.",
      chain([
        "Fluid or blood collects in the pericardial space faster than the fibrous pericardium can stretch.",
        "Pericardial pressure rises and compresses the thin-walled right heart first.",
        "Diastolic filling falls → stroke volume and cardiac output fall.",
        "Venous blood backs up (JVD) and arterial pressure falls (hypotension); heart sounds are muffled (Beck triad)."
      ]) + HY("Speed matters more than volume: a small, fast bleed can cause tamponade while a large, slow effusion may not."), [
      ["Why can 150 mL of blood that collects quickly cause tamponade when 1 L of slowly accumulating fluid may not?",
        ["The fibrous pericardium stretches slowly, so rapid filling spikes pericardial pressure", "Blood is denser than serous fluid", "Slow effusions drain into the coronary sinus", "Rapid bleeding dilates the heart chambers"], 0,
        "The fibrous pericardium is stiff in the short term but can gradually stretch. Rapid accumulation raises pressure steeply and compresses the heart."],
      ["In cardiac tamponade, which chambers are compressed first?",
        ["The thin-walled right atrium and right ventricle", "The thick-walled left ventricle", "The left atrium only", "All chambers equally"], 0,
        "Right-sided chambers have thin walls and low pressures, so they collapse first under rising pericardial pressure."],
      ["Which mechanism explains the hypotension in tamponade?",
        ["Impaired diastolic filling lowers stroke volume", "Loss of contractility from myocardial necrosis", "Peripheral vasodilation from histamine", "Increased afterload from the pericardium"], 0,
        "The muscle still contracts normally; it simply cannot fill, so stroke volume and cardiac output fall."]
    ])
  ]);

  window.CARDIO_PATHOPHYS_PHYSIOLOGY = L("cardio-physiology", "Cardiovascular Physiology", [
    T("pp-phys-starling", "Preload, afterload and Frank-Starling", "Stretch before contraction raises force; pressure after contraction opposes ejection.",
      points([
        "<strong>Preload</strong> = end-diastolic volume, the stretch on the fibers before contraction.",
        "<strong>Frank-Starling</strong>: more filling → stronger contraction → bigger stroke volume (up to a point).",
        "<strong>Afterload</strong> = the pressure the ventricle must overcome to eject (systemic BP for the LV, pulmonary pressure for the RV).",
        "<strong>Contractility</strong> changes force without changing fiber length (sympathetic stimulation, calcium).",
        "<strong>CO = SV × HR</strong>; MAP = CO × TPR."
      ]) + HY("Preload ↑ → SV ↑. Afterload ↑ → SV ↓. Contractility ↑ → SV ↑ at the same preload."), [
      ["A patient receives a 1 L saline bolus. By the Frank-Starling mechanism, what happens to stroke volume in a healthy heart?",
        ["It rises because greater end-diastolic stretch increases contraction force", "It falls because the ventricle is overstretched", "It is unchanged because only heart rate changes", "It falls because afterload rises"], 0,
        "More venous return raises end-diastolic volume, which stretches sarcomeres toward their optimal length and increases force of contraction."],
      ["Systemic blood pressure rises sharply. What happens to LV stroke volume if nothing else changes?",
        ["It falls, because afterload opposes ejection", "It rises, because pressure pushes blood forward", "It is unchanged, because preload is unchanged", "It rises, because coronary perfusion improves"], 0,
        "Higher afterload means the ventricle spends more energy reaching ejection pressure and ejects less blood per beat."],
      ["Which change increases stroke volume without changing end-diastolic volume?",
        ["Increased contractility from sympathetic stimulation", "Increased venous return", "Increased systemic vascular resistance", "Decreased heart rate"], 0,
        "Contractility (inotropy) is the ability to change force at the same resting fiber length, so it raises SV independent of preload."],
      ["Pulmonary hypertension directly increases the afterload of which chamber?",
        ["Right ventricle", "Left ventricle", "Left atrium", "Right atrium"], 0,
        "Pulmonary arterial pressure is the resistance the RV pumps against, so it is RV afterload."],
      ["Heart rate doubles but stroke volume drops by half. What happens to cardiac output?",
        ["It stays about the same", "It doubles", "It falls by half", "It quadruples"], 0,
        "CO = SV × HR. Doubling one and halving the other leaves the product unchanged."]
    ]),
    T("pp-phys-conduction", "Conduction and the action potential", "Pacemaker hierarchy and calcium entry explain escape rhythms and the plateau.",
      points([
        "SA node 60-100/min → AV node (slow conduction, the built-in delay) → His → bundle branches → Purkinje.",
        "If the SA node fails, the <strong>AV junction</strong> escapes at 40-60/min; if that fails, <strong>Purkinje</strong> fibers fire at 15-40/min.",
        "Phase 2 plateau = slow <strong>calcium</strong> channels open, lengthening the action potential so the heart cannot tetanize.",
        "Vascular smooth muscle relies on <strong>extracellular calcium</strong> to contract; CCBs block that entry → vasodilation."
      ]) + HY("Lower in the conduction system = slower escape rate and wider complexes."), [
      ["The SA node stops firing and the AV node takes over. What heart rate do you expect?",
        ["40-60 bpm", "60-100 bpm", "15-40 bpm", "100-150 bpm"], 0,
        "The AV junction's intrinsic rate is 40-60 bpm, so it produces a junctional escape rhythm when the SA node fails."],
      ["Complete block below the AV node leaves only Purkinje fibers to pace the ventricles. Why is the patient likely symptomatic?",
        ["Purkinje escape rates are only 15-40 bpm, so cardiac output falls", "Purkinje fibers fire too fast", "Purkinje fibers cannot depolarize the ventricles", "The atria stop contracting"], 0,
        "The lower the pacemaker, the slower the escape rate. At 15-40 bpm, CO = SV × HR falls enough to cause dizziness, syncope or exertional dyspnea."],
      ["Why does the cardiac action potential last much longer than the skeletal muscle action potential?",
        ["Phase 2 calcium influx creates a plateau", "Potassium channels never open", "Sodium channels stay open until the next beat", "Cardiac cells lack a resting potential"], 0,
        "Slow calcium channels open during phase 2, holding the membrane depolarized and extending contraction. This also prevents tetany."],
      ["Why does the AV node normally delay conduction?",
        ["It lets the atria finish emptying into the ventricles before they contract", "It prevents the SA node from firing", "It allows the ventricles to repolarize first", "It protects the coronary arteries"], 0,
        "Slow conduction through the AV junction gives atrial contraction time to top off ventricular filling before systole."]
    ]),
    T("pp-phys-bp-reflex", "Baroreceptors, RAAS and natriuretic peptides", "Short-term BP control is neural; long-term control is hormonal and renal.",
      chain([
        "BP falls → less stretch of carotid and aortic baroreceptors → fewer signals to the medulla.",
        "Sympathetic output rises, parasympathetic output falls → HR, contractility and vasoconstriction increase (seconds to minutes).",
        "Renal sympathetic nerves (β1 on JG cells), low afferent arteriole pressure, and low sodium at the macula densa all release renin.",
        "Renin → angiotensin I → (ACE) angiotensin II → vasoconstriction, aldosterone (Na and water retention), thirst and ADH (hours to days)."
      ]) + points([
        "Atrial stretch (volume receptors) → ANP release, less ADH, less RAAS → natriuresis and vasodilation."
      ]) + HY("Baroreflex = fast, neural. RAAS = slow, durable, volume-based."), [
      ["A patient stands up quickly and BP drops. What is the first compensatory response?",
        ["Decreased baroreceptor firing triggers sympathetic activation", "Increased baroreceptor firing triggers vagal activation", "ANP release from the atria", "Aldosterone-mediated sodium retention within seconds"], 0,
        "Lower arterial stretch reduces baroreceptor firing, so the medulla increases sympathetic tone and withdraws vagal tone within seconds."],
      ["Which of these does NOT stimulate renin release?",
        ["Increased atrial stretch", "Low pressure in the afferent arteriole", "Low sodium delivery to the macula densa", "Renal sympathetic stimulation of β1 receptors"], 0,
        "Atrial stretch signals volume excess and suppresses RAAS (via ANP). The other three are the three triggers for renin release."],
      ["Angiotensin II raises blood pressure by all of the following EXCEPT:",
        ["Directly increasing potassium reabsorption", "Arteriolar vasoconstriction", "Stimulating aldosterone release", "Stimulating thirst and ADH release"], 0,
        "Angiotensin II vasoconstricts, triggers aldosterone, increases proximal Na reabsorption, and stimulates thirst and ADH. Aldosterone actually wastes potassium."],
      ["A patient is volume overloaded and the atria are stretched. What hormonal response helps correct this?",
        ["ANP release causing natriuresis and vasodilation", "Increased renin release", "Increased ADH release", "Increased aldosterone release"], 0,
        "Atrial stretch triggers ANP, which promotes sodium and water excretion and vasodilation while suppressing ADH and RAAS."],
      ["Why does a β1 blocker lower renin levels?",
        ["Renal sympathetic nerves release renin by acting on β1 receptors of juxtaglomerular cells", "β1 receptors in the lung convert angiotensin I", "β1 blockade increases macula densa sodium", "β1 receptors produce aldosterone"], 0,
        "Norepinephrine acting on β1 receptors of JG cells is one of the three pathways for renin release, so blocking β1 lowers renin."]
    ])
  ]);

  window.CARDIO_PATHOPHYS_HP = L("cardio-history-physical", "Cardiovascular H&P", [
    T("pp-hp-congestion", "Why congestion causes the findings", "Left-sided backup floods the lungs; right-sided backup fills the neck, liver and legs.",
      points([
        "<strong>Left-sided failure</strong> → high LA and pulmonary venous pressure → dyspnea, crackles, orthopnea, PND.",
        "<strong>Orthopnea</strong>: lying flat shifts blood from the legs back to the chest, raising preload the failing LV cannot handle.",
        "<strong>PND</strong>: 1-2 hours after lying down, redistributed edema fluid is reabsorbed into the circulation and floods the lungs.",
        "<strong>Right-sided failure</strong> → high RA pressure → raised JVP, hepatomegaly, dependent pitting edema.",
        "JVP = vertical height above the sternal angle + 5 cm (sternal angle to the center of the RA); the right IJ is used because it runs straight into the RA."
      ]) + HY("Lungs = left. Neck, liver, legs = right."), [
      ["Why does a patient with left heart failure become short of breath lying flat?",
        ["Lying flat returns pooled leg blood to the chest, raising preload the LV cannot pump forward", "Lying flat lowers venous return", "The diaphragm stops moving when supine", "Lying flat lowers pulmonary capillary pressure"], 0,
        "Supine positioning increases venous return. A failing LV cannot eject the extra volume, so pulmonary venous pressure rises and fluid enters the lungs."],
      ["Why does paroxysmal nocturnal dyspnea typically wake the patient 1-2 hours after going to bed?",
        ["Edema fluid from the legs is gradually reabsorbed and expands blood volume", "The SA node slows during sleep", "Sleep lowers afterload", "Airway muscles relax and cause obstruction"], 0,
        "Over the first hours of lying down, interstitial fluid from dependent tissues returns to the circulation, adding volume until the lungs congest."],
      ["Which finding points to elevated right atrial pressure rather than left atrial pressure?",
        ["Raised jugular venous pressure", "Bibasilar crackles", "Orthopnea", "Pink frothy sputum"], 0,
        "The internal jugular vein is a direct column to the right atrium, so its height reflects right-sided filling pressure."],
      ["Why is the right internal jugular vein preferred for estimating JVP?",
        ["It has the most direct path into the right atrium", "It lies closer to the carotid artery", "It has valves that amplify pulsations", "It drains the coronary sinus"], 0,
        "The right IJ runs in a nearly straight line through the SVC to the RA, so its pulsation height best reflects RA pressure."],
      ["Why does a patient with right heart failure develop pitting edema of the ankles?",
        ["Raised venous pressure increases capillary hydrostatic pressure, pushing fluid into the interstitium", "Low albumin from liver failure is always the cause", "Lymphatic obstruction from the heart", "Arterial insufficiency to the legs"], 0,
        "Back-pressure from the right heart raises systemic venous and capillary pressure. Fluid filters out and pools where gravity is greatest."]
    ]),
    T("pp-hp-gallops", "S3 and S4", "Extra sounds come from the ventricle receiving blood: too much volume (S3) or too stiff (S4).",
      points([
        "<strong>S3</strong>: early diastole, abrupt stop of rapid filling into an <strong>over-distended or volume-overloaded</strong> ventricle (HFrEF, severe MR). Louder with maneuvers that raise venous return.",
        "<strong>S4</strong>: late diastole, the atrium contracts against a <strong>stiff, non-compliant</strong> ventricle (LVH from HTN, AS, HCM). Often palpable at the apex.",
        "S4 needs an atrial kick, so it disappears in atrial fibrillation.",
        "Use the bell (low-pitched sounds)."
      ]) + HY("S3 = volume (\"sloshing in\"). S4 = stiffness (\"a stiff wall\")."), [
      ["A patient with long-standing hypertension and LVH has an extra sound just before S1. What causes it?",
        ["Atrial contraction against a stiff, hypertrophied ventricle", "Rapid filling of a dilated ventricle", "Opening of a stenotic mitral valve", "Late closure of the pulmonic valve"], 0,
        "That late-diastolic sound is an S4: the atrium pushes blood into a non-compliant ventricle."],
      ["A patient with an S4 develops atrial fibrillation. What happens to the S4?",
        ["It disappears because there is no organized atrial contraction", "It becomes louder", "It moves into systole", "It becomes an S3"], 0,
        "S4 is produced by the atrial kick. In AF the atria quiver without an effective contraction, so the S4 cannot occur."],
      ["Which patient is most likely to have an S3?",
        ["A patient with dilated cardiomyopathy and an EF of 20%", "A patient with long-standing hypertension and a stiff LV", "A patient with hypertrophic cardiomyopathy", "A patient in atrial fibrillation with a normal LV"], 0,
        "S3 reflects rapid early filling into an over-distended, volume-loaded ventricle, as in systolic heart failure."]
    ])
  ]);

  window.CARDIO_PATHOPHYS_LIPIDS = L("lipids-dyslipidemia", "Lipids & Dyslipidemia", [
    T("pp-lip-athero", "How atherosclerotic plaque forms", "LDL gets into the vessel wall, gets eaten, and builds a plaque.",
      chain([
        "Endothelial injury (HTN, smoking, diabetes, high LDL) lets lipoproteins enter the intima.",
        "Lipoproteins accumulate and are oxidized → endothelium expresses adhesion molecules → fatty streak.",
        "Monocytes bind, enter the wall, become macrophages and ingest lipoprotein → foam cells.",
        "Smooth muscle migration and fibrous cap formation → plaque; rupture of the cap exposes thrombogenic core → thrombus (ACS, stroke)."
      ]) + HY("Glycation of lipoproteins in diabetes increases foam-cell uptake and makes blood more prothrombotic."), [
      ["What is a foam cell?",
        ["A macrophage that has ingested lipoprotein in the arterial intima", "An endothelial cell filled with triglyceride", "A platelet coated with fibrin", "A smooth muscle cell that has died"], 0,
        "Monocytes enter the intima, become macrophages, and engulf modified lipoproteins; the lipid-laden cells look foamy."],
      ["What is the earliest visible lesion of atherosclerosis?",
        ["Fatty streak", "Fibrous cap", "Calcified plaque", "Mural thrombus"], 0,
        "Lipoprotein accumulation in the intima with adhesion-molecule expression forms the fatty streak, the first lesion."],
      ["Why do diabetic patients develop atherosclerosis faster?",
        ["Glycated lipoproteins are taken up more by macrophages and blood becomes more prothrombotic", "Insulin directly dissolves fibrous caps", "Hyperglycemia lowers LDL", "Glucose blocks monocyte adhesion"], 0,
        "Glycation of lipoproteins increases scavenger-macrophage uptake (more foam cells) and raises thrombotic tendency."],
      ["An acute MI from atherosclerosis most often results from:",
        ["Rupture of a plaque's fibrous cap with thrombus formation", "Slow, complete calcification of the artery", "Spasm of a normal artery only", "Embolism of cholesterol from the liver"], 0,
        "Cap rupture exposes the lipid core, triggering platelet aggregation and thrombus that suddenly occludes the vessel."]
    ]),
    T("pp-lip-genetic", "Genetic lipid disorders and triglycerides", "Fewer working LDL receptors means LDL stays in the blood.",
      points([
        "<strong>Familial hypercholesterolemia</strong> (defective LDL receptor): cells have about half the functional receptors in heterozygotes → very high LDL → tendon xanthomas, premature CAD, aortic stenosis.",
        "<strong>Familial defective Apo B</strong>: LDL cannot bind the receptor → same picture as FH.",
        "<strong>Lipoprotein lipase (LPL)</strong>, activated by Apo C-II, breaks chylomicron and VLDL triglyceride into free fatty acids for tissues. LPL deficiency → massive triglycerides.",
        "Triglycerides above about 500 raise pancreatitis risk; the lecture cites above 750 as able to cause it."
      ]) + HY("LDL receptor or Apo B defect → LDL problem → CAD and xanthomas. LPL or Apo C-II defect → triglyceride problem → pancreatitis and eruptive xanthomas."), [
      ["A 30-year-old has LDL of 280, Achilles tendon xanthomas and a father who had an MI at 40. What is the underlying defect?",
        ["Reduced functional LDL receptors", "Lipoprotein lipase deficiency", "Excess PCSK9 inhibition", "Overactive NPC1L1 transporter"], 0,
        "Familial hypercholesterolemia: too few working LDL receptors so LDL cannot be cleared by the liver, causing deposits and early CAD."],
      ["Why does lipoprotein lipase deficiency cause very high triglycerides?",
        ["Chylomicron and VLDL triglyceride cannot be broken into free fatty acids for tissue uptake", "The liver overproduces LDL", "LDL receptors are absent", "Bile acids are not reabsorbed"], 0,
        "LPL at the capillary wall hydrolyzes triglyceride in chylomicrons and VLDL. Without it, triglyceride-rich particles accumulate."],
      ["A patient has triglycerides of 1,200 and severe epigastric pain radiating to the back. What is the link?",
        ["Severe hypertriglyceridemia can cause acute pancreatitis", "High triglycerides cause peptic ulcers", "Triglycerides block the bile duct", "High LDL causes pancreatic ischemia"], 0,
        "Very high triglycerides are a direct cause of acute pancreatitis; this is why severe hypertriglyceridemia is treated urgently."]
    ]),
    T("pp-lip-drugs", "Why lipid drugs work", "Each drug class hits a different step of cholesterol handling.",
      points([
        "<strong>Statins</strong> block HMG-CoA reductase → less hepatic cholesterol → liver up-regulates LDL receptors → more LDL cleared.",
        "<strong>Ezetimibe</strong> blocks the NPC1L1 sterol transporter at the small-intestine brush border → less cholesterol absorbed.",
        "<strong>PCSK9 inhibitors</strong>: PCSK9 normally sends LDL receptors to be destroyed; blocking it lets receptors recycle → more LDL cleared.",
        "<strong>Bile acid sequestrants</strong> trap bile acids → liver uses cholesterol to make more → LDL falls (can raise triglycerides)."
      ]) + HY("Statins, PCSK9 inhibitors and bile acid sequestrants all end the same way: more hepatic LDL receptors pulling LDL out of the blood."), [
      ["Why do statins lower serum LDL?",
        ["Lower hepatic cholesterol synthesis up-regulates LDL receptors", "They block intestinal cholesterol absorption", "They activate lipoprotein lipase", "They bind bile acids in the gut"], 0,
        "With HMG-CoA reductase blocked, hepatocytes sense low intracellular cholesterol and express more LDL receptors, clearing LDL from plasma."],
      ["How do PCSK9 inhibitors lower LDL?",
        ["They let LDL receptors recycle to the hepatocyte surface instead of being degraded", "They block HMG-CoA reductase", "They inhibit the NPC1L1 transporter", "They block VLDL secretion"], 0,
        "PCSK9 tags LDL receptors for lysosomal destruction. Inhibiting it keeps more receptors available to clear LDL."],
      ["Ezetimibe lowers LDL by acting on which structure?",
        ["NPC1L1 sterol transporter at the intestinal brush border", "HMG-CoA reductase in the liver", "Lipoprotein lipase in capillaries", "PCSK9 in plasma"], 0,
        "Ezetimibe blocks NPC1L1, reducing cholesterol absorption from the small intestine."]
    ])
  ]);

  window.CARDIO_PATHOPHYS_HYPERTENSION_PART1 = L("hypertension-part-1", "Hypertension Part I", [
    T("pp-htn1-primary", "Primary hypertension mechanisms", "No single cause: sympathetic tone, salt handling, nephron mass, genetics and immunity all contribute.",
      points([
        "90-95% of HTN is primary; MAP = CO × TPR, so anything that raises output or resistance raises BP.",
        "Proposed mechanisms: sympathetic overactivity, reduced nephron mass, disordered sodium excretion, renal immune-cell infiltration, abnormal fetal aortic or capillary development, genetics.",
        "<strong>Obesity</strong>: more intravascular volume, higher CO, more sympathetic outflow, RAAS activation.",
        "<strong>Alcohol</strong> raises plasma catecholamines; <strong>smoking</strong> raises norepinephrine; <strong>polycythemia</strong> raises viscosity; <strong>NSAIDs</strong> raise BP about 5 mmHg."
      ]) + HY("Salt-sensitive HTN: normal kidneys excrete extra sodium after a salt load; in primary HTN this response is disordered."), [
      ["How does obesity raise blood pressure?",
        ["Higher intravascular volume, higher cardiac output, more sympathetic outflow and RAAS activation", "Adipose tissue directly secretes renin only", "It lowers cardiac output", "It causes vasodilation"], 0,
        "The lecture lists all four: volume expansion, increased CO, sympathetic activation and RAAS activation."],
      ["Why does reduced adult nephron mass predispose to hypertension?",
        ["Fewer nephrons excrete sodium less effectively, expanding volume", "More renin is destroyed", "The kidney makes more ANP", "Fewer nephrons lower angiotensin II"], 0,
        "With fewer filtering units, sodium and water excretion is impaired, so volume and BP rise. This is also why CKD so often causes HTN."],
      ["Why does polycythemia raise blood pressure?",
        ["Increased blood viscosity raises resistance to flow", "It lowers cardiac output", "It activates baroreceptors to lower BP", "It causes sodium loss"], 0,
        "More red cells make blood thicker, and resistance rises with viscosity."],
      ["Through which mechanism do heavy alcohol use and smoking raise blood pressure?",
        ["Increased circulating catecholamines (norepinephrine)", "Increased ANP", "Decreased aldosterone", "Decreased cardiac output"], 0,
        "The lecture notes that alcohol may raise plasma catecholamines and smoking raises plasma norepinephrine, increasing vascular tone and heart rate."]
    ]),
    T("pp-htn1-secondary", "Secondary hypertension mechanisms", "An identifiable disease drives the BP: kidney, vessel, hormone or drug.",
      points([
        "<strong>Renal artery stenosis</strong>: low flow to one kidney → constant RAAS activation → vasoconstriction and volume expansion; the stenosis is fixed so the signal never shuts off. AKI after starting an ACEI/ARB is a clue.",
        "<strong>Primary hyperaldosteronism</strong>: Na and water retention; H+ and K+ wasted → hypokalemia and metabolic alkalosis → weakness.",
        "<strong>Pheochromocytoma</strong>: adrenal medulla tumor releasing catecholamines in bursts → paroxysmal HTN, palpitations, diaphoresis, pallor.",
        "<strong>Cushing</strong>: glucocorticoid excess → Na and water retention.",
        "<strong>Coarctation</strong>: narrowing after the arch vessels → arm BP > leg BP; intercostal collaterals erode ribs (rib notching).",
        "<strong>OSA</strong>: nocturnal hypoxia → sympathetic activation. <strong>Licorice</strong> lowers K+ and raises BP."
      ]) + HY("Hypertension + hypokalemia + metabolic alkalosis = think aldosterone excess."), [
      ["Why does renal artery stenosis cause persistent hypertension?",
        ["The underperfused kidney keeps activating RAAS because the stenosis prevents flow from normalizing", "The stenotic kidney stops making renin", "The stenosis raises ANP", "The normal kidney excretes too much sodium"], 0,
        "The kidney behind the stenosis senses low pressure and releases renin. Raising systemic BP never fixes flow past a fixed obstruction, so RAAS stays on."],
      ["A patient with suspected renal artery stenosis develops AKI one week after starting lisinopril. What explains this?",
        ["The underperfused kidney depends on angiotensin II to keep filtration pressure up", "ACE inhibitors are directly toxic to tubules", "Lisinopril causes renal artery spasm", "ACE inhibitors raise aldosterone"], 0,
        "With low inflow, angiotensin II constriction of the efferent arteriole maintains glomerular pressure. Blocking it drops GFR; this is why the lecture says AKI after an ACEI/ARB should raise suspicion for RAS."],
      ["A patient with hypertension has K+ 2.9 and bicarbonate 32 and complains of generalized weakness. What is the mechanism?",
        ["Excess aldosterone retains sodium while wasting K+ and H+ in the urine", "Excess cortisol lowers renin only", "Catecholamine surges shift K+ into cells", "Renal artery stenosis lowers aldosterone"], 0,
        "Primary hyperaldosteronism: constant Na reabsorption is exchanged for K+ and H+ loss, producing hypokalemia and metabolic alkalosis."],
      ["Why does coarctation of the aorta cause inferior rib notching on CXR?",
        ["Dilated intercostal collateral arteries bypass the narrowing and erode the ribs", "High arm pressure fractures the ribs", "The aorta compresses the ribs directly", "Rib notching comes from LVH"], 0,
        "Collateral flow through the intercostal arteries supplies the descending aorta; the enlarged vessels notch the underside of the ribs (Roesler sign)."],
      ["Why do patients with pheochromocytoma have episodic rather than constant severe hypertension?",
        ["The tumor releases catecholamines suddenly and unpredictably", "Renin is released only at night", "Aldosterone levels fluctuate with meals", "The baroreflex is permanently disabled"], 0,
        "Tumor cells synthesize catecholamines and dump them in bursts, producing paroxysms of high BP, palpitations, sweating and pallor."],
      ["How does obstructive sleep apnea raise blood pressure?",
        ["Repeated nocturnal hypoxia activates the sympathetic nervous system", "It lowers circulating catecholamines", "It causes sodium loss", "It suppresses RAAS"], 0,
        "Hypoxic episodes stimulate chemoreceptors and sympathetic outflow, which raises vascular tone and BP; OSA is common in resistant HTN."]
    ])
  ]);

  window.CARDIO_PATHOPHYS_HYPERTENSION_PART2 = L("hypertension-part-2", "Hypertension Part II", [
    T("pp-htn2-heart", "Hypertensive heart disease", "Pumping against high pressure thickens the LV, which stiffens first and fails later.",
      chain([
        "High afterload → more myocardial O2 demand and lower coronary perfusion pressure.",
        "Myocytes hypertrophy (concentric LVH) to pump harder against aortic pressure.",
        "Thick LV relaxes incompletely in diastole → LVEDP and LA pressure rise → diastolic dysfunction (HFpEF) comes first.",
        "LA enlargement → atrial arrhythmias (AF).",
        "Eventually hypertrophy encroaches on the cavity, filling and stroke volume fall, and systolic function fails (HFrEF)."
      ]) + points(["Chronic HTN also stiffens arteries → higher systolic BP and wider pulse pressure."]) + HY("In hypertension, diastolic dysfunction comes before systolic dysfunction."), [
      ["Which type of heart failure develops first in chronic hypertension?",
        ["Diastolic dysfunction from a stiff, hypertrophied LV", "Systolic dysfunction from a dilated LV", "Right heart failure from pulmonary embolism", "High-output failure"], 0,
        "LVH impairs relaxation long before contractility fails, so HFpEF appears first."],
      ["Why does LVH make the myocardium more vulnerable to ischemia?",
        ["More muscle mass needs more O2 while high afterload lowers coronary perfusion pressure", "LVH dilates the coronary arteries", "LVH lowers myocardial O2 demand", "LVH shortens systole"], 0,
        "Demand rises with mass and wall tension, while supply falls because of high afterload and compressed subendocardial vessels."],
      ["Why are patients with hypertensive heart disease prone to atrial fibrillation?",
        ["High LV filling pressure raises LA pressure and enlarges the left atrium", "Hypertension directly blocks the AV node", "LVH lowers atrial pressure", "The SA node is destroyed by HTN"], 0,
        "A stiff LV needs higher pressure to fill, which is transmitted back to the LA. A stretched, enlarged LA is a substrate for AF."],
      ["Why do older patients with long-standing HTN often have isolated systolic hypertension and a wide pulse pressure?",
        ["Stiff, less compliant arteries cannot buffer systolic ejection or recoil in diastole", "Their hearts pump less blood", "Their diastolic pressure rises with age", "Their baroreceptors are overly sensitive"], 0,
        "Chronic HTN increases arterial wall stiffness. Less compliance means systolic pressure spikes higher and diastolic pressure falls, widening pulse pressure."]
    ]),
    T("pp-htn2-brain-kidney", "Autoregulation in the brain and kidney", "Chronic HTN resets the brain's safe range and strips the kidney of its protection.",
      points([
        "<strong>Cerebral autoregulation</strong> keeps flow constant across MAP about 60-150 mmHg: arteries dilate when BP falls and constrict when it rises.",
        "Chronic HTN shifts the curve to the right: the brain treats high pressure as normal, so rapid lowering into the \"normal\" range causes <strong>ischemia</strong>.",
        "CPP = MAP − ICP.",
        "<strong>Kidney</strong>: chronic HTN scleroses small renal arteries → endothelial dysfunction → autoregulation is lost → glomerular pressure follows systemic pressure directly → CKD.",
        "In CKD, volume expansion plus RAAS activation drives the HTN."
      ]) + HY("Lower BP slowly over weeks in long-standing HTN so autoregulation can reset."), [
      ["A patient with years of uncontrolled hypertension has BP lowered from 200/110 to 120/70 within an hour and becomes confused. Why?",
        ["The autoregulation curve has shifted right, so normal pressure is too low to perfuse the brain", "The brain is hyperperfused at 120/70", "Rapid BP lowering raises ICP", "Low BP causes cerebral edema"], 0,
        "Chronic HTN raises cerebral vascular resistance and resets autoregulation upward; a sudden drop to normal values falls below the new lower limit and causes ischemia."],
      ["Cerebral perfusion pressure equals:",
        ["MAP minus intracranial pressure", "Systolic BP minus diastolic BP", "Cardiac output times resistance", "Diastolic BP minus ICP"], 0,
        "CPP = MAP − ICP. Rising ICP or falling MAP both reduce brain perfusion."],
      ["How does chronic hypertension damage the kidney?",
        ["Sclerosis of small renal arteries destroys autoregulation so glomerular pressure tracks systemic pressure", "It causes renal artery spasm only during sleep", "It raises ANP until tubules die", "It reduces cardiac output to the kidneys"], 0,
        "Arteriolar sclerosis and endothelial dysfunction remove the kidney's buffer, so every BP swing hits the glomerulus directly."],
      ["What two processes drive hypertension in chronic kidney disease?",
        ["Volume expansion and RAAS activation", "Low renin and sodium loss", "Increased ANP and vasodilation", "Low cardiac output and bradycardia"], 0,
        "The lecture names the combination of volume expansion and RAAS activation as the main driver of HTN in chronic renal failure."]
    ])
  ]);

  window.CARDIO_PATHOPHYS_HYPERTENSION_PART3 = L("hypertension-part-3", "Hypertension Part III", [
    T("pp-htn3-drugs", "Why antihypertensives cause their side effects", "Most side effects follow directly from the mechanism.",
      points([
        "<strong>ACEI</strong>: block angiotensin II formation and bradykinin breakdown → bradykinin buildup → dry cough, angioedema. Less aldosterone → hyperkalemia.",
        "<strong>ARBs</strong> block the receptor without raising bradykinin → less cough and angioedema.",
        "<strong>Thiazides</strong>: more Na delivered distally → K+ wasted (hypokalemia); also hyponatremia, hyperuricemia (gout), hypercalcemia.",
        "<strong>Spironolactone/eplerenone</strong>: block the aldosterone receptor → fewer Na-K pumps → hyperkalemia.",
        "<strong>Dihydropyridine CCBs</strong>: arteriolar vasodilation → reflex tachycardia (short-acting forms) and edema from increased capillary pressure and permeability, which diuretics do not fix.",
        "<strong>Non-DHP CCBs</strong>: cardiac channels → bradycardia, AV block, lower contractility.",
        "<strong>Beta blockers and clonidine</strong>: stopping abruptly → rebound HTN (receptor up-regulation / sympathetic surge)."
      ]) + HY("ACEI cough = bradykinin. DHP edema = vasodilation, not volume, so diuretics don't help."), [
      ["Why do ACE inhibitors cause a dry cough?",
        ["ACE also breaks down bradykinin, so bradykinin accumulates", "Angiotensin II accumulates in the lungs", "They cause bronchoconstriction through β2 blockade", "They cause pulmonary edema"], 0,
        "ACE (kininase II) degrades bradykinin. Blocking it raises bradykinin, causing cough and contributing to angioedema."],
      ["A patient with ACE-inhibitor cough is switched to an ARB. Why is the cough likely to resolve?",
        ["ARBs block the angiotensin II receptor without affecting bradykinin breakdown", "ARBs block bradykinin receptors", "ARBs are bronchodilators", "ARBs raise aldosterone"], 0,
        "ARBs act downstream at the AT1 receptor, so bradykinin metabolism is normal."],
      ["Why do ACE inhibitors raise serum potassium?",
        ["Less angiotensin II means less aldosterone, so less K+ excretion", "They block potassium channels in the heart", "They cause hemolysis", "They increase dietary K+ absorption"], 0,
        "Aldosterone drives K+ secretion in the collecting duct. Lowering angiotensin II lowers aldosterone, so K+ is retained, especially in CKD, diabetes, or with spironolactone."],
      ["Why do thiazide diuretics cause hypokalemia?",
        ["More sodium reaches the collecting duct, where it is exchanged for potassium", "They block potassium absorption in the gut", "They raise insulin", "They block aldosterone"], 0,
        "Thiazides block Na reabsorption in the distal tubule; the extra Na delivered downstream is reabsorbed in exchange for K+ secretion, and volume loss also stimulates aldosterone."],
      ["A patient on amlodipine develops ankle edema. Why does adding furosemide usually not help?",
        ["The edema is from arteriolar vasodilation raising capillary pressure, not volume overload", "Furosemide is inactive with CCBs", "The edema is lymphatic", "Amlodipine causes heart failure"], 0,
        "DHP CCBs dilate arterioles more than venules and increase vascular permeability, so fluid leaks out despite normal total volume."],
      ["Why can short-acting nifedipine cause reflex tachycardia?",
        ["A sudden BP drop triggers the baroreceptor reflex", "It directly stimulates the SA node", "It blocks the vagus nerve", "It raises potassium"], 0,
        "A rapid, large fall in BP reduces baroreceptor firing, increasing sympathetic output and heart rate. That is why short-acting DHP forms are avoided."],
      ["Why is verapamil or diltiazem more likely than amlodipine to cause bradycardia and AV block?",
        ["Non-dihydropyridines act mainly on cardiac calcium channels, slowing SA and AV node conduction", "They block β1 receptors", "They raise vagal tone through the brainstem", "They cause hyperkalemia"], 0,
        "Non-DHP CCBs target cardiac channels (negative inotropy and dromotropy); DHPs act mainly on vascular smooth muscle and are heart-rate neutral."],
      ["Why can abruptly stopping clonidine cause a hypertensive crisis?",
        ["Central sympathetic suppression is suddenly removed, causing a catecholamine surge", "Clonidine withdrawal lowers renin", "Clonidine withdrawal causes hypokalemia", "Clonidine withdrawal blocks baroreceptors"], 0,
        "Clonidine is a central α2 agonist that reduces sympathetic outflow. Stopping it suddenly unleashes sympathetic tone, causing rebound HTN."]
    ])
  ]);

  window.CARDIO_PATHOPHYS_HYPERTENSIVE_CRISIS = L("hypertensive-crisis", "Hypertensive Crisis", [
    T("pp-crisis-mechanism", "What happens in the vessel wall", "A sudden SVR rise overwhelms autoregulation and injures the endothelium.",
      chain([
        "Abrupt rise in systemic vascular resistance (humoral vasoconstrictors from stressed vessel walls).",
        "Smooth muscle hypertrophies and constricts to protect the wall; prolonged contraction causes endothelial dysfunction and less nitric oxide.",
        "Autoregulation fails → focal vasodilation and endothelial damage → vascular permeability (edema).",
        "Fibrinoid necrosis, clotting cascade activation, inflammation.",
        "More vasoconstrictors released (angiotensin II, norepinephrine, vasopressin) → a vicious cycle."
      ]) + HY("Urgency vs emergency is defined by acute target-organ damage, not the number: both are ≥180 and/or ≥120."), [
      ["What is the central failure that lets severe hypertension injure organs in a hypertensive emergency?",
        ["Failure of autoregulation so high pressure reaches capillaries", "Excess nitric oxide production", "Low systemic vascular resistance", "Increased baroreceptor sensitivity"], 0,
        "Autoregulation normally constricts arterioles when MAP rises. When it fails, high pressure is transmitted to capillary beds, damaging tissue."],
      ["Why does a hypertensive emergency tend to worsen itself once it starts?",
        ["Endothelial damage releases more vasoconstrictors such as angiotensin II, norepinephrine and vasopressin", "The baroreflex raises heart rate to lower BP", "ANP release raises BP", "Fibrinoid necrosis dilates all arteries"], 0,
        "Vessel injury triggers inflammation, clotting and more vasoconstrictor release, which raises SVR further."],
      ["Which vessel-wall change is characteristic of a hypertensive emergency?",
        ["Fibrinoid necrosis of arterioles", "Fatty streak formation", "Cystic medial necrosis only", "Hyaline arteriolosclerosis without injury"], 0,
        "Acute severe pressure causes endothelial injury with fibrinoid necrosis, permeability and clotting activation."]
    ]),
    T("pp-crisis-organs", "Target-organ injury", "Each organ fails in a way that follows from very high afterload or pressure.",
      points([
        "<strong>Pulmonary edema</strong>: afterload so high the LV cannot eject → blood backs up into the lungs.",
        "<strong>MI/UA</strong>: coronaries fill in diastole; high aortic pressure, high afterload and LVH reduce perfusion while raising O2 demand.",
        "<strong>AKI</strong>: CO falls against huge afterload → kidney hypoperfused.",
        "<strong>Aortic dissection</strong>: high pressure tears the intima; blood dissects between intima and media.",
        "<strong>Hypertensive encephalopathy</strong>: high hydrostatic pressure → generalized cerebral edema. <strong>PRES</strong>: edema in bilateral parieto-occipital lobes → vision change, seizures, headache.",
        "<strong>MAHA</strong>: red cells are sheared by high vascular pressure (check smear, haptoglobin)."
      ]) + HY("BP difference between arms or a missing pulse in a hypertensive patient = think dissection."), [
      ["Why does a hypertensive emergency cause acute pulmonary edema?",
        ["Extreme afterload prevents LV ejection so blood backs up into the pulmonary veins", "High BP lowers pulmonary capillary pressure", "Hypertension causes bronchospasm", "Afterload increases RV output into the lungs"], 0,
        "The LV cannot push against the very high aortic pressure; LV and LA pressures climb and fluid floods the lungs."],
      ["Why does PRES cause visual changes?",
        ["Edema preferentially affects the bilateral occipital and parietal lobes", "High BP damages the optic chiasm", "The retina detaches from fluid", "The frontal lobes swell"], 0,
        "PRES edema favors the posterior (parieto-occipital) regions, where visual processing occurs; it is seen best on MRI."],
      ["Why does hypertensive emergency cause schistocytes on the peripheral smear?",
        ["Red cells are mechanically sheared in damaged, high-pressure vessels", "Bone marrow fails", "Iron deficiency develops acutely", "Hypertension causes autoimmune hemolysis"], 0,
        "Microangiopathic hemolytic anemia: RBCs fragment as they pass through injured arterioles under high pressure."],
      ["How does severe hypertension cause aortic dissection?",
        ["High wall stress tears the intima, and blood is forced between the intima and media", "It causes atherosclerotic occlusion of the aorta", "It dilates the aortic valve", "It causes aortic thrombosis"], 0,
        "The tear lets blood split the wall layers; rising pressure extends the false lumen rapidly and can cause rupture."]
    ]),
    T("pp-crisis-treatment", "Pathophysiology behind crisis treatment", "Treatment choices follow the mechanism of each complication.",
      points([
        "Lower MAP no more than 10-20% in the first hour, then 5-15% over 23 hours: chronically hypertensive organs autoregulate at a higher set point.",
        "<strong>Cocaine, amphetamines, pheo</strong>: never a beta blocker alone. Blocking β leaves catecholamines on α receptors → unopposed α vasoconstriction → BP rises further. Labetalol blocks both.",
        "<strong>Nitroprusside</strong>: venous and arterial dilation, but it raises ICP and produces cyanide.",
        "<strong>Aortic dissection</strong>: rapid SBP 100-120 within 20 minutes, HR first with esmolol, to reduce shear on the tear.",
        "<strong>Acute HFrEF</strong>: avoid BBs and CCBs (depress contractility) and hydralazine (raises cardiac work)."
      ]) + HY("Dissection is the exception: lower BP and HR fast. Ischemic stroke is the other exception: treat only at ≥220/120 (or <185/110 for tPA)."), [
      ["A patient on cocaine has BP 220/130 and HR 140. Why is IV metoprolol alone dangerous?",
        ["Blocking β receptors leaves catecholamines acting on α receptors, causing unopposed vasoconstriction", "Metoprolol causes reflex tachycardia", "Metoprolol raises ICP", "Metoprolol causes cyanide toxicity"], 0,
        "With β2 vasodilation blocked, the catecholamine surge acts only on α1 receptors, so BP rises further. Labetalol blocks both α and β."],
      ["Why is BP lowered only 10-20% in the first hour of most hypertensive emergencies?",
        ["Organs have adapted to high pressure, so rapid lowering below their autoregulation limit causes ischemia", "Faster lowering raises ICP", "IV drugs cannot work faster", "The kidneys need high pressure to make urine for a week"], 0,
        "Long-standing HTN resets autoregulation. A precipitous drop can cause the stroke, MI or AKI you are trying to prevent."],
      ["Why is the BP and heart rate lowered rapidly (SBP 100-120 within 20 minutes) in aortic dissection, unlike other emergencies?",
        ["Reducing pressure and the force of ejection limits shear stress that extends the tear", "Dissection patients have no autoregulation", "Low BP closes the false lumen permanently", "It prevents cyanide toxicity"], 0,
        "Each forceful ejection propagates the dissection; lowering HR first (esmolol) then SBP reduces wall stress quickly."]
    ])
  ]);

  window.CARDIO_PATHOPHYS_DEVICES = L("cardiac-devices", "Cardiac Devices", [
    T("pp-dev-mechanisms", "How devices fail and why", "Most device problems come from sensing, leads or infection.",
      points([
        "<strong>Asynchronous (fixed-rate) pacing</strong> ignores native beats, so a paced impulse can land on the T-wave vulnerable period → lethal arrhythmia.",
        "<strong>Oversensing</strong>: electrocautery EMI looks like cardiac activity → a pacemaker is inhibited (asystole in a dependent patient) or an ICD shocks inappropriately.",
        "A <strong>magnet</strong> makes most pacemakers pace asynchronously and suspends ICD therapy.",
        "Transvenous leads cross the <strong>tricuspid valve</strong> → can injure it (TR); leads can be seeded in bacteremia; subclavian thrombosis.",
        "<strong>CRT</strong> (biventricular pacing) resynchronizes the LV and RV in HFrEF to improve CO.",
        "<strong>Inappropriate ICD shocks</strong>: usually an atrial arrhythmia drives the ventricular rate above the shock threshold."
      ]) + HY("Pacemaker + cautery = oversensing → no pacing. ICD + cautery = oversensing → inappropriate shock."), [
      ["A pacemaker-dependent patient becomes asystolic during surgery with electrocautery. What happened?",
        ["The pacemaker oversensed cautery interference as heart activity and withheld pacing", "The cautery drained the battery", "The leads were cut by the cautery", "The pacemaker switched to rate-response mode"], 0,
        "Oversensing: EMI is interpreted as native depolarization, so the demand pacemaker is inhibited even though the heart is not beating."],
      ["Why does asynchronous (fixed-rate) pacing carry a small risk of a lethal arrhythmia?",
        ["A paced impulse can fall on the T-wave vulnerable period", "It cannot depolarize the ventricle", "It always paces at 30 bpm", "It disables the AV node"], 0,
        "Because it ignores intrinsic beats, a pacing spike may arrive during repolarization (R-on-T), triggering VT or VF."],
      ["Why can a transvenous pacemaker lead cause a new holosystolic murmur at the left lower sternal border?",
        ["The lead crosses and can injure the tricuspid valve, causing tricuspid regurgitation", "The lead narrows the aortic valve", "The lead perforates the mitral valve", "The lead causes pulmonic stenosis"], 0,
        "Right-sided leads pass through the tricuspid valve into the RV; leaflet injury produces TR."],
      ["Why does cardiac resynchronization therapy help selected HFrEF patients?",
        ["Pacing both ventricles makes them contract together, improving stroke volume", "It shocks VF", "It lowers heart rate to 40", "It replaces the AV node"], 0,
        "Biventricular pacing coordinates RV and LV contraction (and the LV walls), so the heart beats more efficiently and CO improves."],
      ["What is the most common cause of an inappropriate ICD shock?",
        ["An atrial arrhythmia speeds the ventricular rate past the shock threshold", "Ventricular fibrillation", "A fractured pacemaker battery", "Sinus bradycardia"], 0,
        "Fast AF or other SVTs can push the ventricular rate above the programmed cutoff, and the device shocks a non-lethal rhythm."],
      ["Why must an infected pacemaker system be fully explanted rather than treated with antibiotics alone?",
        ["Bacteria seed the hardware and leads, causing persistent bacteremia that antibiotics cannot clear", "Antibiotics damage the battery", "The pocket always needs a larger device", "Infection makes the leads conduct too well"], 0,
        "Biofilm on the generator and leads (sometimes visible as a vegetation on TEE) cannot be sterilized, so the device and leads must come out."]
    ])
  ]);

  window.CARDIO_PATHOPHYS_CARDIOMYOPATHIES = L("cardiomyopathies", "Cardiomyopathies", [
    T("pp-cm-hcm", "Hypertrophic cardiomyopathy", "Anything that makes the LV smaller makes the obstruction worse.",
      chain([
        "Sarcomere gene mutation → asymmetric LV (often septal) hypertrophy.",
        "Thick septum narrows the LV outflow tract; about two-thirds of patients have LVOT obstruction.",
        "Less LV volume (lower preload or afterload) → walls closer together → more obstruction → louder murmur.",
        "More LV volume (squatting, handgrip, beta blockers slowing HR) → less obstruction → softer murmur.",
        "Stiff thick wall → diastolic dysfunction; disorganized myocytes → VT/VF → sudden death in young athletes."
      ]) + points([
        "Avoid with LVOT obstruction: positive inotropes (dobutamine, digoxin), vasodilators (DHP CCBs, ACEI/ARB, nitrates) and diuretics."
      ]) + HY("Valsalva or standing from a squat ↓ preload → HCM murmur louder. Squatting ↑ preload → softer."), [
      ["Why does Valsalva make the HCM murmur louder?",
        ["It lowers preload, so a smaller LV cavity worsens outflow obstruction", "It raises preload and stretches the septum", "It raises afterload and opens the outflow tract", "It slows the heart rate"], 0,
        "Straining lowers venous return; less LV volume brings the septum and mitral leaflet closer, narrowing the outflow tract."],
      ["Why does squatting soften the murmur of HCM?",
        ["It increases venous return and afterload, enlarging the LV cavity", "It lowers preload", "It reduces contractility directly", "It raises heart rate"], 0,
        "More filling and more afterload keep the LV larger, holding the outflow tract open, so the murmur softens."],
      ["Why are diuretics and nitrates avoided in HCM with significant LVOT obstruction?",
        ["They lower preload, shrinking the LV cavity and worsening obstruction", "They raise afterload", "They cause hyperkalemia", "They prolong the QT interval"], 0,
        "Reducing volume or dilating veins lowers LV filling, which narrows the outflow tract and worsens symptoms."],
      ["Why do beta blockers help symptoms in HCM?",
        ["Slower heart rate lengthens diastole, improving filling and reducing obstruction and O2 demand", "They raise contractility", "They dilate arterioles", "They shrink the septum permanently"], 0,
        "Longer diastole lets the stiff LV fill more, and lower contractility reduces the dynamic obstruction."],
      ["How does alcohol septal ablation relieve LVOT obstruction?",
        ["Ethanol injected into a septal perforator causes a controlled infarct that thins the septum", "It dissolves the mitral valve", "It dilates the aorta", "It blocks the AV node"], 0,
        "Absolute ethanol in a septal perforator branch (from the LAD) creates a local infarction; the scarred septum shrinks and widens the outflow tract."]
    ]),
    T("pp-cm-other", "Dilated, restrictive, ARVC and stress cardiomyopathy", "Each type fails in a different phase: squeezing, filling, or electrical stability.",
      points([
        "<strong>Dilated</strong>: dilated, weak ventricles → systolic dysfunction (HFrEF), S3, functional MR. Causes include genetic, alcohol (may reverse with abstinence), muscular dystrophy.",
        "<strong>Restrictive</strong>: normal-size, rigid ventricles → severe diastolic dysfunction, high filling pressures, dilated atria. Often infiltrative (amyloid).",
        "<strong>ARVC</strong>: desmosomal protein mutation → myocyte detachment and death → fibro-fatty replacement → delayed conduction (epsilon waves) and VT.",
        "<strong>Takotsubo (stress)</strong>: catecholamine surge → coronary spasm/myocardial stunning → transient apical ballooning; looks like a STEMI.",
        "<strong>Peripartum</strong>: HFrEF late pregnancy or early postpartum with no other cause."
      ]) + HY("Dilated = can't squeeze. Restrictive = can't fill. ARVC = electrically unstable scar."), [
      ["What is the main hemodynamic problem in restrictive cardiomyopathy?",
        ["Rigid ventricles cannot fill, causing severe diastolic dysfunction", "Dilated ventricles cannot contract", "Outflow tract obstruction", "Valve leaflets fuse"], 0,
        "Stiff walls limit filling; filling pressures rise and atria dilate while systolic function may be near normal."],
      ["Why does a patient with dilated cardiomyopathy often develop mitral regurgitation?",
        ["LV dilation stretches the mitral annulus so the leaflets no longer meet", "Rheumatic fusion of the leaflets", "The mitral valve calcifies from alcohol", "Papillary muscles hypertrophy"], 0,
        "Functional (secondary) MR: the enlarged ventricle pulls the annulus and papillary muscles apart, so the valve leaks."],
      ["What causes the epsilon wave in arrhythmogenic right ventricular cardiomyopathy?",
        ["Delayed activation of myocytes scattered within fibro-fatty tissue", "Hyperkalemia", "Atrial enlargement", "Pericardial fluid"], 0,
        "Desmosome defects cause myocyte loss and fibro-fatty replacement; surviving strands depolarize late, producing a notch at the end of the QRS in V1."],
      ["A woman develops chest pain, ST elevation and apical ballooning right after her husband's funeral, with clean coronaries on cath. What is the mechanism?",
        ["A catecholamine surge causes coronary spasm and transient apical dysfunction", "Plaque rupture in the LAD", "Viral infection of the myocardium", "Amyloid infiltration"], 0,
        "Takotsubo: emotional or physical stress floods the heart with catecholamines, causing temporary apical akinesis that mimics STEMI."],
      ["Why might alcoholic dilated cardiomyopathy improve over time?",
        ["Early myocardial damage from alcohol can reverse with abstinence", "Alcohol scar always regenerates", "The disease is purely genetic", "Abstinence raises afterload"], 0,
        "The lecture notes that early-stage alcoholic cardiomyopathy may be reversible if the patient stops drinking."]
    ])
  ]);

  window.CARDIO_PATHOPHYS_VALVULAR = L("valvular-disease", "Valvular Disease", [
    T("pp-valv-aortic", "Aortic stenosis and regurgitation", "Stenosis loads the LV with pressure; regurgitation loads it with volume.",
      points([
        "<strong>AS</strong>: degenerative calcification (or bicuspid valve, rheumatic disease) → fixed outflow obstruction → pressure overload → concentric LVH.",
        "AS symptoms: angina (LVH demand plus less coronary perfusion), syncope (fixed output cannot rise with exertion), heart failure. Survival falls sharply once symptoms appear (syncope about 2 years).",
        "<strong>AR</strong>: blood leaks back from the aorta in diastole → LV volume overload → eccentric dilation.",
        "AR: big stroke volume raises systolic pressure; backflow drops diastolic pressure → <strong>wide pulse pressure</strong>, water-hammer pulse."
      ]) + HY("AS = pressure overload (concentric LVH). AR = volume overload (dilation, wide pulse pressure)."), [
      ["Why does severe aortic stenosis cause exertional syncope?",
        ["The fixed obstruction prevents cardiac output from rising while exercise dilates peripheral vessels", "The valve closes completely during exercise", "AS causes bradycardia", "AS lowers preload"], 0,
        "Exercise lowers peripheral resistance, but a fixed valve area caps output, so BP and cerebral perfusion fall."],
      ["Why do patients with aortic stenosis get angina even with normal coronary arteries?",
        ["Hypertrophied myocardium needs more O2 while high LV pressure lowers coronary perfusion", "Calcium from the valve embolizes to the coronaries", "AS causes coronary vasospasm", "AS lowers heart rate"], 0,
        "Concentric LVH raises demand, and high intraventricular pressure plus a lower aortic diastolic pressure gradient reduces subendocardial supply."],
      ["Why does chronic aortic regurgitation produce a wide pulse pressure?",
        ["A large stroke volume raises systolic pressure and diastolic backflow drops diastolic pressure", "The valve is narrowed", "Systolic pressure falls and diastolic rises", "Peripheral resistance is very high"], 0,
        "The LV ejects its normal volume plus the regurgitant volume (high systolic), then blood falls back into the LV (low diastolic)."],
      ["How does the left ventricle adapt to chronic aortic regurgitation?",
        ["Eccentric dilation to accommodate volume overload", "Concentric hypertrophy with a small cavity", "Atrophy", "Septal hypertrophy causing LVOT obstruction"], 0,
        "The LV fills from both the LA and the leaking aorta. Volume overload leads to chamber dilation."]
    ]),
    T("pp-valv-mitral", "Mitral stenosis and regurgitation", "Mitral disease shows up upstream: the left atrium, the lungs, and the right heart.",
      chain([
        "Rheumatic fever (most common cause of MS) → leaflet thickening, commissural fusion, short chordae → fish-mouth valve.",
        "MS: LA must push through a narrow valve → LA pressure rises → LA dilates → atrial fibrillation and thrombus.",
        "High LA pressure → pulmonary venous congestion → dyspnea; bronchial vein rupture → hemoptysis; eventually pulmonary HTN and right heart failure.",
        "Chronic MR: regurgitant volume → LA dilates (main coping mechanism) → AF risk; LV volume overload.",
        "Acute MR (papillary muscle rupture after MI, chordal rupture from IE): small, non-compliant LA → sudden pulmonary edema and shock."
      ]) + HY("Tachycardia is poorly tolerated in MS: shorter diastole leaves less time to fill the LV through the narrow valve."), [
      ["Why does a patient with mitral stenosis decompensate when they develop atrial fibrillation with a rapid rate?",
        ["Shorter diastole leaves less time to fill the LV through the narrowed valve and the atrial kick is lost", "AF increases LV afterload", "AF causes aortic regurgitation", "AF lowers left atrial pressure"], 0,
        "LV filling in MS is time-dependent. A fast rate shortens diastole and AF removes atrial contraction, so LA pressure spikes and CO falls."],
      ["Why can mitral stenosis cause hemoptysis?",
        ["High LA pressure raises pulmonary venous pressure and ruptures bronchial veins", "The valve calcium erodes into the bronchi", "MS causes pulmonary embolism directly", "Low pulmonary pressure damages alveoli"], 0,
        "Back pressure through the pulmonary veins can rupture dilated bronchial veins, as the lecture notes."],
      ["What is the main way the heart copes with chronic mitral regurgitation?",
        ["Left atrial dilation to absorb the regurgitant volume", "Concentric LVH", "Right ventricular hypertrophy only", "Narrowing of the mitral annulus"], 0,
        "The LA slowly enlarges to accommodate the backflow; this keeps LA pressure manageable but sets up atrial fibrillation."],
      ["Three days after an inferior MI a patient develops sudden pulmonary edema and a new holosystolic apical murmur. Why is this acute MR so poorly tolerated?",
        ["The normal-size, non-compliant left atrium cannot absorb the sudden regurgitant volume", "The LA has already dilated", "Acute MR lowers LA pressure", "The aortic valve also fails"], 0,
        "Papillary muscle rupture causes sudden MR; without time for LA dilation, pressure transmits straight to the lungs."]
    ])
  ]);

  window.CARDIO_PART1_PATHOPHYS = {
    lectures: [window.CARDIO_PATHOPHYS_ANATOMY, window.CARDIO_PATHOPHYS_PHYSIOLOGY, window.CARDIO_PATHOPHYS_HP,
      window.CARDIO_PATHOPHYS_LIPIDS, window.CARDIO_PATHOPHYS_HYPERTENSION_PART1, window.CARDIO_PATHOPHYS_HYPERTENSION_PART2,
      window.CARDIO_PATHOPHYS_HYPERTENSION_PART3, window.CARDIO_PATHOPHYS_HYPERTENSIVE_CRISIS, window.CARDIO_PATHOPHYS_DEVICES,
      window.CARDIO_PATHOPHYS_CARDIOMYOPATHIES, window.CARDIO_PATHOPHYS_VALVULAR]
  };
}());
