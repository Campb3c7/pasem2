/* Cardiac Testing, deck 2: Echocardiography and Telemetry (Sillaman), slide by slide.
   Slide text: data/slide-text-echo-telemetry.js (generated). Pictures: images/echo-slides/.
   Case Study 1 (slide 2) has no answer slide: it is answered from the deck (echo for suspected valve disease).
   Anything not on the slides is marked "(standard teaching)". Question ids "echo-telemetry|s<slide>|<i>", "echo-telemetry|<lo>|r|<i>": only append. */
(function () {
  "use strict";
  var S = SlideStudy.S, Q = SlideStudy.Q;
  var los = [];

  /* ---------------------------------------------------------------- LO 2 (case 1) */
  los.push({
    id: "lo2", label: "LO 2", title: "Case 1: when to order an echo",
    objective: "Recognize when to order an echo.",
    slides: [
      S(1, "Title: In depth review on cardiac testing and procedures", {
        why: "<p>This deck covers the tests that look at the heart's <b>structure</b> (echo: TTE and TEE), its <b>pumping fraction</b> (MUGA) and its <b>rhythm over time</b> (telemetry, Holter, event monitor, implantable monitor). The skill is matching the question you have to the test that answers it.</p>"
      }),
      S(2, "Case study 1: dyspnea, edema and a murmur", {
        why: "<p>Dyspnea, leg swelling and a new systolic murmur: you suspect <b>valve disease</b>. The test that shows valves is the <b>echocardiogram</b>. An ECG shows rhythm, a stress test shows ischemia and a Holter shows rhythm over 24-48 hours, but none of them show the valves.</p>",
        q: [
          Q("A patient has dyspnea, 1+ leg edema and a 2/6 systolic murmur. You suspect valve disease. Which test do you order?", "Echocardiogram", ["ECG", "Exercise treadmill stress test with Myoview", "Holter monitor"], "An echo shows the valves; the other tests don't."),
          Q("Why is a Holter monitor the wrong test for suspected valve disease?", "It records rhythm, not valve structure", ["It uses radiation", "It shows valves too well", "It needs a TEE probe"], "Holter monitors give a continuous ECG, not pictures of the valves.")
        ]
      }),
      S(3, "Echocardiography and telemetry", {
        pic: "<p>Section title: \"Echocardiography and Telemetry\".</p>",
        why: "<p>Two halves: <b>echo</b> answers \"what does the heart look like and how well does it pump?\"; <b>telemetry and monitors</b> answer \"what is the rhythm doing over time?\".</p>",
        q: [
          Q("Which question does telemetry answer?", "What the heart's rhythm is doing over time", ["How thick the walls are", "How well the valves open", "Whether there is a PFO"], "Telemetry monitors the heart's electrical activity continuously.")
        ]
      }),
      S(4, "Objectives", {
        why: "<p>Ten objectives: TTE vs TEE, when to order an echo, what it evaluates, when to pick TEE, the valve TEE sees best (<b>mitral</b>), TEE contraindications and complications, MUGA, telemetry, and implantable monitors.</p>",
        q: [
          Q("Which valve does the lecture expect you to know is best seen on TEE?", "The mitral valve", ["The tricuspid valve", "The pulmonic valve", "The aortic valve"], "TEE gives the best view of the mitral valve.")
        ]
      })
    ],
    review: [
      Q("A 70-year-old has a new harsh systolic murmur and exertional syncope. What test shows the likely cause?", "Echocardiogram", ["Holter monitor", "Exercise EKG", "Telemetry"], "An echo evaluates the valves, such as aortic stenosis."),
      Q("Which test would you pick to see a heart valve: an ECG or an echo?", "An echo", ["An ECG", "Neither", "Both equally"], "The ECG shows electrical activity, not structure.")
    ]
  });

  /* ---------------------------------------------------------------- LO 1 & 3 */
  los.push({
    id: "lo1", label: "LO 1 & 3", title: "TTE: windows, views and modes",
    objective: "Recall the difference between transthoracic and transesophageal echocardiogram. List the structures evaluated during an echocardiogram.",
    slides: [
      S(5, "Transthoracic echocardiogram (TTE)", {
        why: "<p>TTE is the <b>primary noninvasive</b> test for heart anatomy and function. It shows <b>both ventricles' function</b> (LV systolic, diastolic, RV), <b>structural problems</b> (LVH, wall motion abnormalities, septal aneurysm, PFO, ASD) and <b>all four valves</b>.</p>",
        q: [
          Q("What is the primary noninvasive imaging test for cardiac anatomy and function?", "Transthoracic echocardiogram", ["Cardiac MRI", "MUGA", "Holter monitor"], "TTE is the primary noninvasive imaging modality."),
          Q("Which structural abnormality can TTE show?", "Patent foramen ovale", ["Coronary calcium", "Lung nodules", "Carotid plaque"], "PFO and ASD are on the structural list."),
          Q("Which ventricular function does TTE assess?", "LV systolic, LV diastolic and RV function", ["Only LV systolic", "Only RV", "None"], "TTE evaluates biventricular function including diastolic function.")
        ]
      }),
      S(6, "Imaging windows", {
        pic: "<p>A photo of a chest with three marked probe spots: 1 = parasternal (left of the sternum), 2 = apical (at the apex), 3 = subcostal (below the xiphoid).</p>",
        why: "<p>Bone and lung block ultrasound, so the probe uses three <b>windows</b>: <b>parasternal</b> (beside the sternum), <b>apical</b> (at the apex) and <b>subcostal</b> (under the xiphoid).</p>",
        q: [
          Q("What are the three TTE imaging windows?", "Parasternal, apical and subcostal", ["Anterior, posterior and lateral", "Esophageal, gastric and tracheal", "Cervical, thoracic and lumbar"], "The slide lists parasternal, apical and subcostal."),
          Q("Where is the subcostal window?", "Below the xiphoid", ["Beside the sternum", "At the apex", "In the esophagus"], "Subcostal is also called subxyphoid.")
        ]
      }),
      S(7, "Parasternal views", {
        why: "<p><b>Long axis</b>: size and squeeze of both ventricles (septum and posterior wall), and the <b>mitral and aortic valves</b>; color Doppler finds AR or MR. <b>Short axis</b>: three levels: aortic valve (base), mitral valve, and mid-ventricle at the papillary muscles.</p>",
        q: [
          Q("Which valves does the parasternal long axis view assess?", "Mitral and aortic", ["Tricuspid and pulmonic", "Only the pulmonic", "None"], "The long axis view assesses mitral and aortic valve morphology and function."),
          Q("What are the three levels of the parasternal short axis?", "Aortic valve, mitral valve, and mid-ventricle at the papillary muscles", ["Atria, ventricles and aorta", "Apex, septum and RV", "Neck, chest and abdomen"], "The slide lists these three levels.")
        ]
      }),
      S(8, "Apical views", {
        why: "<p><b>Apical 4-chamber</b>: all four chambers; best for <b>Simpson EF</b>, the LV apex and <b>mitral inflow</b> (diastolic function, mitral stenosis). <b>Apical 5-chamber</b>: adds the aortic valve; best Doppler alignment to <b>grade aortic stenosis</b> and calculate cardiac output. <b>Apical 2-chamber</b>: anterior and inferior LV walls.</p>",
        q: [
          Q("Which view is best for calculating the Simpson ejection fraction?", "Apical 4-chamber", ["Parasternal short axis", "Subcostal IVC", "Apical 5-chamber"], "The apical 4-chamber is the best view for Simpson EF."),
          Q("Which view is best for grading aortic stenosis?", "Apical 5-chamber", ["Apical 2-chamber", "Subcostal 4-chamber", "Parasternal short axis at the papillary muscles"], "The 5-chamber view aligns Doppler with the aortic outflow tract."),
          Q("Which LV walls does the apical 2-chamber view show?", "Anterior and inferior", ["Septal and lateral", "Only the apex", "Only the RV free wall"], "The 2-chamber view shows anterior and inferior walls.")
        ]
      }),
      S(9, "Subcostal views", {
        why: "<p><b>Subcostal 4-chamber</b>: in some <b>ventilated</b> patients it's the only window. <b>Short axis</b>: LV function and the aortic, tricuspid and pulmonic valves. <b>IVC</b>: its diameter and how it changes with breathing estimate <b>volume status</b>.</p>",
        q: [
          Q("Which echo view estimates volume status?", "Subcostal IVC view", ["Apical 5-chamber", "Parasternal long axis", "M-mode of the aortic root"], "IVC diameter and respiratory variation estimate volume status."),
          Q("In a ventilated ICU patient, which window may be the only one available?", "Subcostal", ["Parasternal", "Apical", "Suprasternal"], "The slide says subcostal may be the only accessible window in ventilated patients.")
        ]
      }),
      S(10, "M-mode echocardiography", {
        pic: "<p>An M-mode tracing: one line through the heart shown over time, with labeled points of valve opening and closing.</p>",
        why: "<p>M-mode is a single ice-pick line through the heart drawn over time: a <b>tracing</b>. It is used to <b>measure chamber size and wall thickness</b>.</p>",
        q: [
          Q("What is M-mode echo mainly used to measure?", "Chamber size and wall thickness", ["Blood flow direction", "3-D valve shape", "Coronary calcium"], "M-mode is useful for measuring chambers and wall thickness."),
          Q("What does M-mode look like?", "A tracing of heart structures over time", ["A color flow map", "A 3-D cast", "A bull's-eye map"], "M-mode provides a tracing of the heart structures.")
        ]
      }),
      S(11, "Doppler and color Doppler", {
        pic: "<p>A spectral Doppler tracing of velocity over time, and a color Doppler image with a colored jet across a valve.</p>",
        why: "<p><b>Doppler</b> measures <b>blood flow</b> through chambers and valves (speed → gradients, stenosis). <b>Color Doppler</b> paints the <b>direction</b> of flow in colors, making leaks (regurgitation) easy to see.</p>",
        q: [
          Q("What does Doppler echo measure?", "Blood flow through the heart's chambers and valves", ["Wall thickness only", "Electrical conduction", "Coronary anatomy"], "Doppler measures blood flow."),
          Q("What do the colors on color Doppler show?", "The direction of blood flow", ["The temperature of blood", "Oxygen saturation", "Wall thickness"], "Color Doppler uses colors to designate direction of flow.")
        ]
      }),
      S(12, "2-D echocardiography", {
        pic: "<p>Two 2-D echo images showing heart chambers (LV, LA, RV) in cross-section.</p>",
        why: "<p>2-D echo shows the <b>actual structures and their motion in real time</b>: the moving picture most people mean by \"an echo\".</p>",
        q: [
          Q("What does 2-D echo show?", "The actual structures and their motion in real time", ["Only flow direction", "Only a single-line tracing", "Electrical activity"], "2-D echo visualizes structures and real-time motion.")
        ]
      }),
      S(13, "3-D echocardiography", {
        pic: "<p>Four 3-D echo renderings of a heart valve seen face-on.</p>",
        why: "<p>3-D echo gives <b>depth</b> and more accurate function measurements on a beating heart. It is <b>useful to the CT surgeon before surgery</b>, for example to plan a valve repair.</p>",
        q: [
          Q("Who does the slide say finds 3-D echo especially useful?", "The CT surgeon before surgery", ["The dermatologist", "The radiologist reading a CXR", "The patient at home"], "3-D echo is useful for the CT surgeon before surgery."),
          Q("What does 3-D echo add over 2-D echo?", "Greater depth and more accurate function measurements", ["Radiation", "No moving images", "Electrical mapping"], "3-D captures views with greater depth for more accurate assessment.")
        ]
      })
    ],
    review: [
      Q("You want to know whether a patient's mitral stenosis is limiting LV filling. Which view studies mitral inflow?", "Apical 4-chamber", ["Subcostal IVC", "Apical 2-chamber", "Parasternal short axis at the aortic valve"], "The apical 4-chamber view studies mitral inflow."),
      Q("A septic patient's IVC is small and collapses with each breath. What does it suggest?", "Low volume status", ["Volume overload", "Tamponade", "Normal volume"], "IVC diameter and respiratory variation estimate volume status (standard teaching for the direction)."),
      Q("Which echo mode would best show a leaky mitral valve's jet?", "Color Doppler", ["M-mode", "3-D only", "No echo can"], "Color Doppler shows flow direction, so a regurgitant jet stands out."),
      Q("TTE versus TEE: which is placed on the chest?", "TTE", ["TEE", "Both", "Neither"], "Transthoracic means through the chest wall (standard teaching).")
    ]
  });

  /* ---------------------------------------------------------------- LO 3 */
  los.push({
    id: "lo3", label: "LO 3", title: "What an echo measures",
    objective: "List the structures evaluated during an echocardiogram.",
    slides: [
      S(14, "What echo evaluates", {
        why: "<p>One test, a long list: <b>LVEF</b>, LVOT, stroke volume, <b>diastolic function</b>, end-diastolic volume, <b>LVH</b>, <b>pulmonary artery systolic pressure</b>, IVC size, aortic root size, atrial sizes, <b>aortic valve area and peak velocity</b>, <b>mitral stenosis, regurgitation and prolapse</b>, <b>PFO</b>, <b>ASD</b>, tricuspid regurgitation, pulmonic stenosis and longitudinal strain.</p>",
        q: [
          Q("Which pressure can echo estimate?", "Pulmonary artery systolic pressure", ["Intracranial pressure", "Portal pressure", "Intraocular pressure"], "PA systolic pressure is on the echo list."),
          Q("Which aortic valve measures does echo give?", "Aortic valve area and peak velocity", ["Coronary calcium score", "Aortic wall plaque only", "Carotid flow"], "Aortic valve area and peak velocity are listed."),
          Q("Which of these is NOT on the slide's list of echo measurements?", "Coronary artery stenosis percent", ["Left ventricular ejection fraction", "Mitral valve prolapse", "Atrial septal defect"], "Echo doesn't measure coronary stenosis; the others are listed.")
        ]
      })
    ],
    review: [
      Q("A patient with HF symptoms needs his EF and diastolic function measured. Which test?", "Echocardiogram", ["Holter", "Telemetry", "Exercise EKG"], "Echo measures LVEF and diastolic function."),
      Q("A patient with a stroke at 35 needs a PFO looked for. Which basic test shows it?", "Echocardiogram (with a bubble study)", ["Holter", "MUGA", "Stress EKG"], "PFO is on the echo list, and a bubble study confirms it."),
      Q("Which measurement on the echo list relates to the aorta itself?", "Aortic root size", ["IVC size", "Tricuspid regurgitation", "Longitudinal strain"], "Aortic root size is listed.")
    ]
  });

  /* ---------------------------------------------------------------- LO 4 */
  los.push({
    id: "lo4", label: "LO 4", title: "TEE and when to order it",
    objective: "Recognize when to order a TEE vs TTE.",
    slides: [
      S(15, "Transesophageal echocardiography (TEE)", {
        pic: "<p>A drawing of a patient lying on their side with an ultrasound probe passed through the mouth into the esophagus, right behind the heart. Caption: the ultrasound probe is passed through the oesophagus to view the heart.</p>",
        why: "<p>In TEE the probe goes <b>down the esophagus</b>, which sits right behind the heart. No ribs or lungs in the way, so posterior structures (left atrium, mitral valve, appendage, aorta) are seen sharply.</p>",
        q: [
          Q("Where is the TEE probe placed?", "In the esophagus", ["On the chest wall", "In the trachea", "In the femoral vein"], "The probe is passed through the esophagus."),
          Q("Why does TEE see posterior heart structures so well?", "The esophagus lies right behind the heart with no ribs or lung in the way", ["It uses radiation", "It is done during exercise", "It uses a stronger magnet"], "The esophagus is right behind the left atrium (standard teaching).")
        ]
      }),
      S(16, "TEE indications", {
        why: "<p>Order a TEE for: suspected <b>aortic dissection</b> or acute aortic pathology; suspected <b>prosthetic valve dysfunction</b>; <b>endocarditis complications</b> (abscess, fistula) or diagnosis when pretest likelihood is moderate/high; <b>LA/LAA thrombus</b> before cardioversion or ablation in AF/flutter; <b>cardiac source of embolus</b>; follow-up when the change would alter therapy; when <b>TTE is nondiagnostic</b>; and to <b>guide procedures</b> (closure devices, valvuloplasty, percutaneous valves).</p>",
        q: [
          Q("A patient with AF is scheduled for cardioversion and you need to exclude a left atrial appendage clot. Which test?", "TEE", ["TTE", "MUGA", "Holter"], "Evaluating for LA/LAA thrombus before cardioversion is a TEE indication."),
          Q("A patient with a prosthetic valve and fevers has suspected endocarditis. Which echo fits?", "TEE", ["TTE only", "M-mode only", "No echo"], "Prosthetic valves give moderate/high pretest likelihood, so TEE is indicated."),
          Q("When does a nondiagnostic TTE lead to TEE?", "When you still need to evaluate for cardiac pathology", ["Never", "Only for children", "Only after surgery"], "TEE is indicated when TTE is nondiagnostic."),
          Q("Which acute aortic problem is a TEE indication?", "Suspected aortic dissection", ["Mild aortic root dilation found years ago", "Aortic calcification", "Normal aorta"], "Suspected acute aortic pathology like dissection is listed.")
        ]
      })
    ],
    review: [
      Q("A young stroke patient needs a cardiac source of embolus ruled out. Which echo gives the best look?", "TEE", ["TTE only", "MUGA", "Exercise echo"], "Evaluating for a cardiac source of embolus is a TEE indication."),
      Q("A cardiologist is placing a percutaneous closure device. Which echo guides the procedure?", "TEE", ["TTE", "M-mode", "MUGA"], "TEE guides noncoronary percutaneous interventions."),
      Q("A patient with endocarditis on antibiotics had a vegetation on TEE. When is a repeat TEE reasonable?", "When an interval change would change therapy", ["Every day", "Never", "Only after death"], "Follow-up TEE is indicated when a change would alter therapy.")
    ]
  });

  /* ---------------------------------------------------------------- LO 6-7 */
  los.push({
    id: "lo67", label: "LO 6-7", title: "TEE contraindications and complications",
    objective: "Recall the contraindications to performing a TEE. Recall the possible complications of a TEE.",
    slides: [
      S(17, "TEE contraindications: absolute", {
        why: "<p>The one absolute contraindication: <b>previous esophagectomy or esophagogastrectomy</b>. If the esophagus has been removed, there is no path for the probe.</p>",
        q: [
          Q("What is the absolute contraindication to TEE?", "Previous esophagectomy or esophagogastrectomy", ["Atrial fibrillation", "Prosthetic valve", "Age over 80"], "The slide lists prior esophagectomy as absolute."),
          Q("A patient had his esophagus removed for cancer. Which echo can he NOT have?", "TEE", ["TTE", "Stress echo", "3-D TTE"], "Prior esophagectomy is an absolute TEE contraindication.")
        ]
      }),
      S(18, "TEE contraindications: relative", {
        why: "<p>Relative: <b>recent active esophageal tear or bleeding</b>, <b>esophageal stricture</b>, <b>coagulopathy</b>, <b>thrombocytopenia</b>, <b>Zenker's diverticulum</b>, <b>altered mental status</b>, and <b>severe cervical spine arthritis</b> (limited neck motion raises complication risk).</p>",
        q: [
          Q("Which esophageal pouch is a relative TEE contraindication?", "Zenker's diverticulum", ["Meckel's diverticulum", "Colonic diverticulum", "Bladder diverticulum"], "Zenker's diverticulum is on the relative list."),
          Q("Why is severe cervical spine arthritis a relative TEE contraindication?", "Reduced neck motion raises the risk of complications", ["It causes arrhythmias", "It blocks the TTE window", "It raises potassium"], "The slide explains the reduced range of motion."),
          Q("Which lab problem is a relative TEE contraindication?", "Thrombocytopenia", ["High HDL", "Low TSH", "High glucose"], "Thrombocytopenia and coagulopathies are listed.")
        ]
      }),
      S(19, "TEE complications", {
        why: "<p>Major: <b>esophageal perforation</b>, <b>GI bleeding</b> (higher risk with <b>platelets &lt;50k</b>), pharyngeal hematoma, and <b>methemoglobinemia</b> from topical <b>benzocaine</b> throat spray. Minor: transient bronchospasm, hypoxia, NSVT, AF, hemoptysis and vomiting.</p>",
        q: [
          Q("Which TEE complication comes from the benzocaine throat spray?", "Methemoglobinemia", ["Esophageal perforation", "Pharyngeal hematoma", "AF"], "Methemoglobinemia is a rare complication of topical benzocaine."),
          Q("Below what platelet count is GI bleeding risk from TEE a concern?", "Under 50,000", ["Under 400,000", "Under 200,000", "Platelets don't matter"], "The slide flags platelet count under 50k."),
          Q("Which of these is a minor TEE complication?", "Transient bronchospasm", ["Esophageal perforation", "Methemoglobinemia", "GI bleeding"], "Transient bronchospasm is on the minor list.")
        ]
      })
    ],
    review: [
      Q("After a TEE, a patient's pulse oximeter reads 85% despite oxygen, and her blood looks chocolate-brown. What happened?", "Methemoglobinemia from the benzocaine spray", ["Esophageal perforation", "Pneumonia", "Normal post-TEE finding"], "Methemoglobinemia is a rare, potentially life-threatening complication of topical benzocaine."),
      Q("A patient with an esophageal stricture needs a TEE. How is the stricture classified?", "A relative contraindication", ["An absolute contraindication", "An indication", "No concern"], "Esophageal stricture is relative."),
      Q("After a TEE, a patient has severe chest pain, fever and subcutaneous air in the neck. What do you suspect?", "Esophageal perforation", ["Methemoglobinemia", "Transient bronchospasm", "Vomiting only"], "Esophageal perforation is a major complication (standard teaching for the signs)."),
      Q("A confused, agitated patient needs a TEE. How does the deck classify altered mental status?", "A relative contraindication", ["An absolute contraindication", "An indication", "Irrelevant"], "Altered mental status is on the relative list.")
    ]
  });

  /* ---------------------------------------------------------------- LO 4-5 */
  los.push({
    id: "lo5", label: "LO 4-5", title: "TEE vs TTE, and the bubble study",
    objective: "Recognize when to order a TEE vs TTE. Recall which valve is best visualized during a TEE.",
    slides: [
      S(20, "TEE vs TTE", {
        why: "<p><b>TTE is the initial test</b> for most patients: quick, non-invasive, done by an echo tech. <b>TEE first</b> only in certain <b>life-threatening situations</b> or when TTE is <b>likely to be nondiagnostic</b>. TEE: superior view of <b>posterior structures (best view of the mitral valve)</b>, minimally invasive, needs a skilled physician.</p>",
        q: [
          Q("Which echo is the initial test of choice for most patients?", "TTE", ["TEE", "3-D TEE", "Bubble study"], "TTE remains the initial test for most patients."),
          Q("Which valve is best seen on TEE?", "Mitral", ["Aortic", "Tricuspid", "Pulmonic"], "TEE gives superior visualization of posterior structures, best for the mitral valve."),
          Q("Who performs a TTE versus a TEE?", "TTE by an echo tech; TEE needs a skilled physician", ["Both by the patient", "TTE by a surgeon only", "TEE by an echo tech alone"], "The table lists who performs each."),
          Q("When should TEE be the FIRST test?", "In certain life-threatening situations or when TTE will likely be nondiagnostic", ["For every patient", "For routine murmurs", "Never"], "The slide gives these two situations.")
        ]
      }),
      S(21, "Bubble study", {
        why: "<p>Agitated saline makes <b>microbubbles</b> that light up the right heart. Normally the lung capillaries trap them, so they never reach the left heart. If bubbles <b>cross to the left</b>, there is a shunt: <b>PFO or ASD</b>. A left-to-right shunt shows as a dark jet interrupting the bubbly right atrium. Theoretical risk: <b>systemic air embolism</b> with a right-to-left shunt.</p>",
        q: [
          Q("What does a bubble study confirm?", "An atrial septal defect or patent foramen ovale", ["Aortic stenosis", "Coronary blockage", "Pericardial effusion"], "Contrast echo confirms ASD or PFO."),
          Q("Why don't bubbles normally reach the left heart?", "The pulmonary capillaries trap and absorb them", ["They dissolve in the RA", "The tricuspid valve blocks them", "They float to the brain"], "Bubbles are trapped by the pulmonary capillaries."),
          Q("What is the theoretical risk of a bubble study?", "Systemic air embolism with a right-to-left shunt", ["Radiation burn", "Methemoglobinemia", "Hyperkalemia"], "The slide warns of systemic air embolism with a right-to-left shunt.")
        ]
      })
    ],
    review: [
      Q("A patient has a suspected mitral valve vegetation that TTE couldn't see clearly. Which test next?", "TEE, which gives the best view of the mitral valve", ["Repeat TTE tomorrow", "MUGA", "Holter"], "TEE sees posterior structures, especially the mitral valve, best."),
      Q("A 40-year-old with a cryptogenic stroke has saline bubbles appearing in the left atrium within 3 beats. What is likely?", "A PFO or ASD with right-to-left shunting", ["Normal study", "Aortic stenosis", "Pulmonary embolism only"], "Bubbles reaching the left heart mean an intracardiac shunt."),
      Q("A stable outpatient has a new murmur. Which echo do you order first?", "TTE", ["TEE", "Bubble study only", "3-D TEE"], "TTE is the initial test for most patients.")
    ]
  });

  /* ---------------------------------------------------------------- LO 8 */
  los.push({
    id: "lo8", label: "LO 8", title: "MUGA scan",
    objective: "Explain the basic concepts of a MUGA scan.",
    slides: [
      S(22, "Multi-gated acquisition scan (MUGA)", {
        pic: "<p>A 3-D color model of the left ventricle from a MUGA scan, labeled base, apex, anterior, inferior and septum.</p>",
        why: "<p>MUGA = <b>radionuclide ventriculography</b>: a <b>volumetric</b> measurement. The patient's <b>red blood cells are labeled</b> with a radioactive tracer and a <b>gamma camera</b> over the chest counts the blood pool in the ventricle as it fills and empties.</p>",
        q: [
          Q("What is labeled with the radioactive tracer in a MUGA scan?", "The red blood cell pool", ["The coronary plaque", "The heart valves", "The pericardium"], "The red blood pool is labeled with a radioactive tracer."),
          Q("What camera records a MUGA scan?", "A gamma camera", ["An ultrasound probe", "An MRI magnet", "An X-ray fluoroscope"], "Radioactivity is measured over the chest with a gamma camera."),
          Q("What is another name for a MUGA scan?", "Radionuclide ventriculography", ["Transesophageal echo", "Coronary angiography", "Holter monitoring"], "The slide calls it radionuclide ventriculography.")
        ]
      }),
      S(23, "MUGA scan: strengths and limits", {
        why: "<p>MUGA is the <b>preferred technique for an accurate LVEF</b>: very accurate and <b>reproducible</b>, <b>not limited by body habitus</b>, non-invasive. Costs: <b>radiation (620 mrem)</b>, and it is <b>contraindicated in pregnancy and lactation</b>. For scale (notes): CXR 10 mrem, CT chest 700, CT head 200.</p>",
        q: [
          Q("What is MUGA the preferred technique for?", "Accurate measurement of LVEF", ["Seeing valve vegetations", "Finding a PFO", "Measuring coronary calcium"], "MUGA is preferred for accurate LVEF measurement."),
          Q("In which patients is MUGA contraindicated?", "Pregnant or lactating women", ["Obese patients", "Patients with AF", "Patients over 70"], "MUGA is contraindicated in pregnancy and lactation."),
          Q("How much radiation does a MUGA give compared with a chest CT?", "About 620 mrem, close to a chest CT (700)", ["About the same as a CXR (10)", "None", "Ten times a chest CT"], "The slide and notes give 620 vs 700 mrem."),
          Q("Does body size limit MUGA images?", "No, body habitus does not limit it", ["Yes, it fails in obesity", "Only in thin patients", "Only in children"], "Body habitus doesn't limit the technique.")
        ]
      })
    ],
    review: [
      Q("A patient on trastuzumab needs repeated, highly reproducible EF measurements, and his echo windows are poor. Which test?", "MUGA scan", ["TEE", "Holter", "Bubble study"], "MUGA is accurate, reproducible and not limited by body habitus."),
      Q("A 28-year-old pregnant woman needs her EF measured. Which test should be avoided?", "MUGA", ["TTE", "ECG", "Telemetry"], "MUGA is contraindicated in pregnancy."),
      Q("Why is MUGA's reproducibility useful?", "Serial EF measurements can be compared reliably", ["It avoids radiation", "It shows valves", "It replaces the EKG"], "MUGA is very accurate and reproducible.")
    ]
  });

  /* ---------------------------------------------------------------- LO 9 */
  los.push({
    id: "lo9", label: "LO 9", title: "Telemetry, Holter and event monitors",
    objective: "Recognize when to order telemetry.",
    slides: [
      S(24, "Case study 2: daily palpitations", {
        why: "<p>A 66-year-old with a <b>thumping heartbeat</b>, shortness of breath and fatigue, <b>every day</b>. You need to catch the rhythm while it's happening. Because symptoms are <b>daily</b>, a <b>24-48 hour Holter</b> is likely to catch them (standard teaching for picking the monitor by symptom frequency).</p>",
        q: [
          Q("A 66-year-old has daily palpitations with dyspnea and fatigue. Which outpatient monitor is most likely to catch the rhythm?", "A 24-48 hour Holter monitor", ["An implantable loop recorder first", "A MUGA scan", "A TEE"], "Daily symptoms are likely to happen during a 24-48 hour Holter (standard teaching)."),
          Q("What is the main question in case study 2?", "What rhythm is causing her palpitations", ["What her EF is", "Whether she has a PFO", "Whether her coronaries are blocked"], "Palpitations call for capturing the rhythm.")
        ]
      }),
      S(25, "Cardiac telemetry", {
        why: "<p>Telemetry = <b>continuous monitoring</b> of the heart's electrical activity, showing <b>2-3 ECG leads</b>. Order it for <b>suspected arrhythmia</b>, <b>unexplained syncope</b>, and to <b>evaluate a therapeutic intervention</b> (for example a new antiarrhythmic, standard teaching).</p>",
        q: [
          Q("How many ECG leads does telemetry usually show?", "Two or three", ["Twelve", "One only", "Fifteen"], "Telemetry views two or three leads."),
          Q("Which is an indication for telemetry?", "Unexplained syncope", ["Stable hypertension", "Routine pre-op for knee scope", "High cholesterol"], "Unexplained syncope is listed."),
          Q("A hospitalized patient is started on a new antiarrhythmic. Why put him on telemetry?", "To evaluate the therapeutic intervention", ["To measure EF", "To look for PFO", "To count calories"], "Evaluation of therapeutic intervention is a listed indication.")
        ]
      }),
      S(26, "Holter monitor", {
        why: "<p>A <b>24 or 48 hour</b> continuous ECG, placed in the outpatient office. The patient keeps a <b>symptom diary</b> and drops the monitor off afterward, so symptoms can be matched to the rhythm.</p>",
        q: [
          Q("How long does a Holter monitor record?", "24 or 48 hours", ["2-4 weeks", "Up to 3 years", "10 seconds"], "Holters are 24 and 48 hour monitors."),
          Q("Why does a Holter patient keep a symptom diary?", "To match symptoms with the recorded rhythm", ["To track diet", "To record BP", "To log exercise only"], "The diary lets symptoms be correlated with the ECG (standard teaching)."),
          Q("Where is a Holter monitor placed?", "In the outpatient office", ["In the cath lab", "In the OR", "By mail only"], "The Holter is placed in the outpatient office.")
        ]
      }),
      S(27, "30-day event monitor", {
        why: "<p>Records for <b>2-4 weeks</b>; used when you strongly suspect an arrhythmia that a Holter may miss, or to measure <b>AF burden</b>. It is <b>mailed</b> to the patient, can be <b>removed to shower</b>, but is uncomfortable, so <b>compliance</b> suffers.</p>",
        q: [
          Q("How long does an event monitor record?", "2-4 weeks", ["24 hours", "3 years", "1 hour"], "A 30-day event monitor records for 2-4 weeks."),
          Q("Which use of an event monitor does the slide mention?", "Measuring AF burden", ["Measuring EF", "Finding valve leaks", "Checking coronary calcium"], "Detecting AF burden is listed."),
          Q("What is the main drawback of an event monitor?", "Discomfort and poor patient compliance", ["High radiation", "Needs surgery", "Can't be removed to shower"], "The slide lists uncomfortable/patient compliance.")
        ]
      })
    ],
    review: [
      Q("A patient has palpitations about twice a month. Which monitor fits better than a Holter?", "A 30-day event monitor", ["A 24-hour Holter", "Telemetry for 1 day", "MUGA"], "Infrequent symptoms need the 2-4 week event monitor (standard teaching for matching)."),
      Q("A patient admitted for syncope of unclear cause. What monitoring should be ordered in the hospital?", "Telemetry", ["MUGA", "TEE", "Nothing"], "Unexplained syncope is a telemetry indication."),
      Q("Which monitor is mailed to the patient's home?", "30-day event monitor", ["Holter", "Telemetry", "Implantable loop recorder"], "The event monitor is mailed with instructions."),
      Q("Which monitor gives a continuous 24-48 hour ECG with a symptom diary?", "Holter", ["Telemetry", "Implantable device", "Event monitor"], "The Holter records continuously for 24-48 hours.")
    ]
  });

  /* ---------------------------------------------------------------- LO 10 */
  los.push({
    id: "lo10", label: "LO 10", title: "Implantable monitoring device",
    objective: "Recognize when to order an implantable monitoring device.",
    slides: [
      S(28, "Implantable monitoring device", {
        pic: "<p>Photos of two implantable loop recorders (Medtronic Reveal XT and the smaller Reveal LINQ) next to each other.</p>",
        why: "<p>Order an implantable monitor for <b>unexplained syncope</b> and <b>cryptogenic stroke</b> (looking for silent AF). It records up to <b>3 years</b>, goes in by a <b>minimally invasive</b> procedure, <b>downloads each night</b>, must be <b>explanted after 3 years</b>, and insurance approval can be hard.</p>",
        q: [
          Q("What are the two indications for an implantable monitoring device?", "Unexplained syncope and cryptogenic stroke", ["Hypertension and diabetes", "Valve disease and PFO", "Stable angina and high LDL"], "The slide lists unexplained syncope and cryptogenic stroke."),
          Q("How long can an implantable monitor record?", "Up to 3 years", ["24 hours", "2-4 weeks", "10 years"], "It monitors rhythm for up to 3 years."),
          Q("What happens to an implantable monitor after 3 years?", "It needs to be explanted", ["It dissolves", "It turns into a pacemaker", "Nothing"], "It must be explanted after three years.")
        ]
      })
    ],
    review: [
      Q("A 62-year-old had a stroke with no cause found after a full workup, including a normal Holter. What monitor do you order?", "Implantable loop recorder", ["Another 24-hour Holter", "MUGA", "TTE only"], "Cryptogenic stroke is an implantable monitor indication."),
      Q("A patient has rare, unexplained syncope every few months and a negative event monitor. What next?", "Implantable monitoring device", ["Telemetry for 1 hour", "Holter for 24 hours", "No more testing"], "Unexplained syncope is an indication for an implantable monitor."),
      Q("Order the rhythm monitors from shortest to longest recording.", "Holter (24-48 h), event monitor (2-4 weeks), implantable (up to 3 years)", ["Implantable, Holter, event", "Event, implantable, Holter", "All record the same time"], "The deck gives 24-48 hours, 2-4 weeks and up to 3 years.")
    ]
  });

  SlideStudy.lecture({
    id: "echo-telemetry",
    title: "Cardiac Testing: Echo and Telemetry",
    short: "Echo & telemetry",
    by: "Sillaman",
    img: "images/echo-slides/slide-{nn}.webp",
    los: los
  });
})();
