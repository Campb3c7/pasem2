/* Cardiac Testing, deck 3: Coronary Angiogram (Sillaman), slide by slide.
   Slide text: data/slide-text-coronary-angiogram.js (generated). Pictures: images/angio-slides/.
   LO blocks follow slide order. Slides 24-25 (right heart cath) have no objective of their own and sit in their own block.
   Anything not on the slides is marked "(standard teaching)". Question ids "coronary-angiogram|s<slide>|<i>", "coronary-angiogram|<lo>|r|<i>": only append. */
(function () {
  "use strict";
  var S = SlideStudy.S, Q = SlideStudy.Q;
  var los = [];

  /* ---------------------------------------------------------------- LO 1 */
  los.push({
    id: "lo1", label: "LO 1", title: "The gold standard",
    objective: "Know what the gold standard is for diagnosing coronary atherosclerosis.",
    slides: [
      S(1, "Title: Coronary angiogram", {
        pic: "<p>Title \"Coronary Angiogram\" over a real angiogram: dark, contrast-filled coronary arteries branching across the heart on an X-ray.</p>",
        why: "<p>An angiogram is an X-ray movie of the coronary arteries filled with contrast dye. Narrowings show up as gaps or pinches in the dark lines. This deck covers when to do it, how it is done, what can go wrong, and the noninvasive cousins: <b>coronary CT angiogram</b> and <b>calcium scoring</b>.</p>"
      }),
      S(2, "Objectives", {
        why: "<p>Ten objectives: the <b>gold standard</b>, what an angiogram is, indications, contraindications, <b>meds held</b> before and after, complications, the <b>two common access sites</b> (femoral and radial), <b>contrast allergy prep</b>, coronary CT angiogram, and <b>calcium scoring</b>.</p>"
      }),
      S(3, "Cardiac catheterization", {
        why: "<p>Cardiac catheterization with coronary angiography is the <b>gold standard</b> for diagnosing coronary atherosclerosis: it looks directly inside the arteries, and you can treat a blockage (PCI) in the same sitting.</p>",
        q: [
          Q("What is the gold standard for diagnosing coronary atherosclerosis?", "Cardiac catheterization with coronary angiography", ["Exercise treadmill test", "Coronary calcium score", "Transthoracic echo"], "Cath directly images the inside of the coronary arteries, which no other test does as well."),
          Q("Why is cath called the gold standard rather than a stress test?", "It shows the actual narrowing inside the artery", ["It uses no contrast", "It needs no access site", "It is the cheapest"], "A stress test infers ischemia, while cath sees the blockage itself.")
        ]
      })
    ],
    review: [
      Q("A stress test and CT both suggest disease but disagree. Which test settles whether the coronaries are narrowed?", "Coronary angiography", ["A second calcium score", "A Holter monitor", "A repeat echo"], "Angiography is the gold standard, so it settles disagreements between noninvasive tests."),
      Q("Besides diagnosis, what can be done during the same cath?", "PCI with a stent", ["A valve replacement by sternotomy", "A TEE", "A calcium score"], "A blockage found on angiogram can be opened in the same procedure.")
    ]
  });

  /* ---------------------------------------------------------------- LO 3 */
  los.push({
    id: "lo3", label: "LO 3", title: "Indications",
    objective: "Indications for a coronary angiogram.",
    slides: [
      S(4, "Coronary angiogram indications", {
        why: "<p>Go to cath when: angina <b>interferes with life despite maximal medical therapy</b>; <b>high-risk criteria on noninvasive testing</b>; <b>atypical symptoms with equivocal stress results</b> when a diagnosis is needed; <b>new-onset cardiomyopathy</b> (to rule out ischemic cause).</p>",
        q: [
          Q("Angina that still limits a patient's life on maximal medical therapy is an indication for what?", "Coronary angiogram", ["Calcium scoring", "Holter monitor", "More of the same drugs only"], "Failure of maximal medical therapy is a listed cath indication."),
          Q("A stress test shows high-risk criteria. What is the next step?", "Coronary angiogram", ["Repeat the stress test in a year", "Calcium score", "No further testing"], "High-risk noninvasive findings are a cath indication."),
          Q("Why does new-onset cardiomyopathy lead to an angiogram?", "To find or exclude coronary disease as the cause", ["To measure the QT", "To check the thyroid", "To place a pacemaker"], "Ischemia is a treatable cause of a new cardiomyopathy, so the coronaries are imaged (standard teaching).")
        ]
      }),
      S(5, "Angiogram as the initial test", {
        why: "<p>Skip the stress test and go <b>straight to cath</b> after <b>sudden cardiac arrest</b>, a <b>life-threatening ventricular arrhythmia</b>, <b>new symptomatic heart failure</b>, or <b>ACS</b> (STEMI, NSTEMI, unstable angina). These patients are too sick for a stress test to add anything.</p>",
        q: [
          Q("After a resuscitated sudden cardiac arrest, which test comes first?", "Coronary angiogram", ["Exercise stress test", "Calcium score", "Event monitor"], "Sudden cardiac arrest is a listed reason to go straight to angiography."),
          Q("Which ACS types are on the 'initial test' list for angiogram?", "STEMI, NSTEMI and unstable angina", ["Only STEMI", "Only stable angina", "None"], "All three ACS types are listed as initial-test indications."),
          Q("A patient has sustained VT with no known cause. Which test is the initial test?", "Coronary angiogram", ["Treadmill test", "Calcium score", "Bubble study"], "A life-threatening ventricular arrhythmia sends you straight to cath to look for ischemia.")
        ]
      })
    ],
    review: [
      Q("A patient has atypical chest pain and an equivocal stress test, and the diagnosis must be established. What next?", "Coronary angiogram", ["Nothing", "Repeat echo", "Holter"], "Atypical symptoms with equivocal stress results are a cath indication."),
      Q("A patient presents with new symptomatic heart failure. Which test can be the initial test for the coronaries?", "Coronary angiogram", ["Calcium score", "Event monitor", "Exercise ECG"], "New symptomatic HF is on the initial-test list."),
      Q("Which group should skip the stress test and go straight to cath?", "Patients with ACS", ["Asymptomatic low-risk patients", "Patients with atypical pain and a normal stress test", "Patients with stable controlled angina"], "ACS is an initial-test indication for angiography.")
    ]
  });

  /* ---------------------------------------------------------------- LO 4 */
  los.push({
    id: "lo4", label: "LO 4", title: "Contraindications",
    objective: "Contraindications for coronary angiogram.",
    slides: [
      S(6, "Contraindications (relative)", {
        why: "<p>All are <b>relative</b>: fix them first if you can. Kidneys and bleeding: <b>acute renal failure</b>, <b>active GI bleeding</b>, <b>severe coagulopathy</b>, <b>severe anemia</b>. Infection: <b>unexplained fever</b>, <b>untreated infection</b>, <b>aortic valve endocarditis</b>. Unstable: <b>acute stroke</b>, <b>severe uncontrolled HTN</b>, <b>electrolyte imbalance</b>, <b>digitalis toxicity</b>, <b>decompensated HF or pulmonary edema</b>, severe systemic illness. Practical: <b>contrast anaphylaxis</b>, <b>PAD blocking access</b>, illness that drastically shortens life, and <b>refusal of PCI or definitive therapy</b>.</p>",
        q: [
          Q("Are angiogram contraindications absolute or relative?", "Relative", ["Absolute", "There are none", "Only absolute in children"], "The slide lists all of them as relative."),
          Q("Why is acute renal failure a contraindication to cath?", "The contrast dye can worsen kidney injury", ["It blocks the radial artery", "It causes AF", "It ruins the X-ray image"], "Iodinated contrast is nephrotoxic, so failing kidneys are at risk (standard teaching)."),
          Q("Why is a patient's refusal of PCI a contraindication to cath?", "The test won't change management if they refuse treatment", ["PCI is always required", "It voids consent for anesthesia", "It is an absolute rule of the cath lab"], "Cath is done to guide treatment, so refusing that treatment removes most of its point (standard teaching)."),
          Q("Which valve infection is on the cath contraindication list?", "Aortic valve endocarditis", ["Tricuspid endocarditis in a dental patient", "Mitral prolapse", "Pulmonic stenosis"], "Catheters cross the aortic valve area and could dislodge a vegetation (standard teaching)."),
          Q("Which drug toxicity is on the cath contraindication list?", "Digitalis intoxication", ["Statin myalgia", "Aspirin allergy", "Metformin use"], "Digitalis toxicity is listed because of arrhythmia risk.")
        ]
      })
    ],
    review: [
      Q("A patient with severe PAD has no usable femoral or radial pulse. Which contraindication applies?", "Severe peripheral artery disease limiting vascular access", ["Contrast allergy", "Aortic valve endocarditis", "Digitalis toxicity"], "PAD that blocks access is a listed relative contraindication."),
      Q("A patient has documented anaphylaxis to contrast dye. How is this classified?", "A relative contraindication", ["An absolute contraindication", "Not a concern", "An indication"], "Contrast anaphylaxis is relative, and premedication can allow the cath."),
      Q("A patient has a hemoglobin of 6 and melena. Can the cath go ahead now?", "No, treat the bleeding and anemia first", ["Yes, no concern", "Yes, through the femoral only", "Only with extra heparin"], "Active GI bleeding and severe anemia are relative contraindications that should be fixed first."),
      Q("Which lung problem is a relative contraindication to cath?", "Acute pulmonary edema", ["Mild asthma", "A healed pneumonia", "Seasonal allergies"], "Decompensated HF or acute pulmonary edema is listed because the patient cannot lie flat safely (standard teaching).")
    ]
  });

  /* ---------------------------------------------------------------- LO 5 (before) */
  los.push({
    id: "lo5", label: "LO 5", title: "Before the cath: what to hold",
    objective: "Know what medications are held prior and following a coronary angiogram.",
    slides: [
      S(7, "Heart catheterization pre-op", {
        why: "<p>The morning of: <b>ACE-I, ARB and diuretics</b> may be held (kidneys and volume, before contrast). <b>Anticoagulation</b> is held beforehand: <b>INR must be under 1.5</b>. <b>Metformin</b> is held the <b>day of and 48 hours after</b> (lactic acidosis risk if contrast hurts the kidneys). <b>NPO after midnight</b>. The patient is shaved and given a sedative.</p>",
        q: [
          Q("Which blood pressure drugs may be held the morning of the cath?", "ACE inhibitors, ARBs and diuretics", ["Beta blockers and nitrates", "Statins", "Aspirin and clopidogrel"], "ACE-I, ARB and diuretics are held to protect the kidneys from contrast (standard teaching for the why)."),
          Q("What INR must be reached before a cath?", "Under 1.5", ["Under 3.0", "Over 2.0", "Exactly 2.5"], "Anticoagulation is held until the INR is under 1.5 to limit access-site bleeding."),
          Q("For how long after the cath is metformin held?", "48 hours", ["2 weeks", "6 hours", "It is never held"], "Metformin is held the day of and 48 hours after because contrast kidney injury can cause lactic acidosis (standard teaching for the why)."),
          Q("When does the patient stop eating and drinking before cath?", "After midnight the night before", ["4 hours before", "Never", "The morning after"], "The slide says nothing to eat or drink after midnight.")
        ]
      })
    ],
    review: [
      Q("A diabetic on metformin, lisinopril and furosemide is scheduled for cath. Which of these is held for two days after?", "Metformin", ["Lisinopril", "Furosemide", "All three for two weeks"], "Only metformin is held for 48 hours after the procedure."),
      Q("A patient on warfarin has an INR of 2.4 the morning of an elective cath. What happens?", "Delay until the INR is under 1.5", ["Proceed now", "Give more warfarin", "Switch to a stress test forever"], "The INR must be under 1.5 before cath.")
    ]
  });

  /* ---------------------------------------------------------------- LO 2 & 7 */
  los.push({
    id: "lo27", label: "LO 2 & 7", title: "How it is done: access, catheters, pictures, PCI",
    objective: "Know what a coronary angiogram is. Know the two most common access sites.",
    slides: [
      S(8, "Methodology", {
        pic: "<p>A drawing of a catheter running from the groin up the aorta into the heart, a close-up of the catheter tip entering a coronary artery, and a guide wire passing through a plaque in the artery.</p>",
        why: "<p>The idea in one picture: a catheter goes in through an artery (here the groin), up the aorta to the heart, and its tip is placed in a coronary artery opening. Dye goes in, X-ray films it. A <b>guide wire</b> can then cross a plaque to treat it.</p>",
        q: [
          Q("Which vessel does the catheter travel up to reach the coronary arteries?", "The aorta", ["The vena cava", "The pulmonary artery", "The esophagus"], "Coronary arteries arise from the aortic root, so the catheter climbs the aorta."),
          Q("What crosses the plaque in the methodology drawing?", "A guide wire", ["A TEE probe", "A Swan-Ganz balloon", "A pacing lead"], "The guide wire crosses the plaque so a balloon or stent can follow.")
        ]
      }),
      S(9, "The cath lab", {
        pic: "<p>A photo of a cath lab: a patient on the table under a large C-arm X-ray camera, a gowned operator beside the table, and monitors overhead.</p>",
        why: "<p>The cath lab is built around a moving <b>C-arm X-ray</b> that films the dye-filled arteries from different angles. The patient is awake with light sedation.</p>",
        q: [
          Q("What imaging machine films the arteries during a cath?", "A C-arm X-ray (fluoroscopy)", ["An MRI magnet", "An ultrasound probe", "A gamma camera"], "Angiography uses X-ray to film contrast inside the arteries.")
        ]
      }),
      S(10, "Obtain access", {
        why: "<p>Four possible arteries: <b>femoral</b>, <b>radial</b>, brachial, subclavian. The <b>two most common are femoral and radial</b>. Per the notes, access is obtained, then a catheter goes into the artery and up the aorta.</p>",
        q: [
          Q("What are the two most common access sites for a cath?", "Femoral and radial", ["Brachial and subclavian", "Jugular and femoral vein", "Carotid and radial"], "Femoral and radial are the two most common arterial access sites."),
          Q("Which four arteries are listed for cath access?", "Femoral, radial, brachial and subclavian", ["Carotid, femoral, popliteal and radial", "Aorta, iliac, renal and radial", "Jugular, femoral, brachial and ulnar"], "The access slide lists femoral, radial, brachial and subclavian.")
        ]
      }),
      S(11, "Femoral access: where to stick", {
        why: "<p>The femoral stick must be <b>no more than 3 cm below the inguinal ligament</b>. <b>Too high</b> (above the ligament) and you can't compress the artery against bone: <b>retroperitoneal bleed</b>. <b>Too low</b> and you risk a <b>pseudoaneurysm</b>.</p>",
        q: [
          Q("How far below the inguinal ligament may the femoral puncture be?", "No more than 3 cm", ["At least 10 cm", "Exactly 1 inch above it", "Anywhere in the thigh"], "The slide limits femoral access to within 3 cm below the inguinal ligament."),
          Q("What complication comes from a femoral stick that is too high?", "Retroperitoneal bleed", ["Pseudoaneurysm", "Radial occlusion", "Pneumothorax"], "Above the ligament the artery can't be compressed, so blood tracks into the retroperitoneum."),
          Q("What complication comes from a femoral stick that is too low?", "Pseudoaneurysm", ["Retroperitoneal bleed", "Stroke", "Aortic dissection"], "Too low a stick risks a pseudoaneurysm.")
        ]
      }),
      S(12, "Cannulation of coronary arteries", {
        pic: "<p>Preformed catheters with different curved tips, and drawings of the aortic root showing each catheter tip hooked into the left or right coronary artery opening.</p>",
        why: "<p>Catheters come with <b>preshaped curved tips</b> so they can hook into the left and right coronary openings in the aortic root. Each artery is then filled with dye in turn.</p>",
        q: [
          Q("Why do cath catheters have different curved tips?", "To hook into the left or right coronary opening", ["To pace the heart", "To measure temperature", "To cut plaque"], "Preshaped tips let the operator engage each coronary ostium.")
        ]
      }),
      S(13, "Angiogram", {
        pic: "<p>Two angiogram X-rays: dark, contrast-filled coronary arteries branching over the heart.</p>",
        why: "<p>The finished pictures: contrast makes the arteries dark on X-ray, so a narrowing shows as a <b>thinning or gap</b> in the line.</p>",
        q: [
          Q("How does a narrowing look on an angiogram?", "A thinning or gap in the dye-filled artery", ["A bright white spot on echo", "A flat ST segment", "A missing P wave"], "Contrast fills the lumen, so plaque shows as a pinch in the dark line (standard teaching).")
        ]
      }),
      S(14, "Percutaneous coronary intervention (PCI)", {
        why: "<p>If a significant blockage is found, it can be opened with a balloon and stent (PCI). Not every plaque needs it: stenoses <b>under 70%</b> are <b>not flow-limiting</b> and rarely need revascularization.</p>",
        q: [
          Q("Below what percent stenosis is a lesion usually not flow-limiting?", "70%", ["30%", "95%", "10%"], "Stenoses under 70% are not flow-limiting and rarely need revascularization."),
          Q("A cath shows a 50% LAD narrowing. Does it usually need a stent?", "No, it is not flow-limiting", ["Yes, always", "Yes, plus bypass", "Only if the patient is over 80"], "Under 70% rarely requires revascularization.")
        ]
      }),
      S(15, "Before and after angioplasty", {
        pic: "<p>Two angiograms. Before angioplasty: catheter threaded into a coronary artery and a blockage seen as a \"gap\" (circled). After angioplasty: the blockage cleared and a stent implanted, with dye flowing through.</p>",
        why: "<p>Before: the blockage looks like a <b>gap</b> in the dye. After the balloon and <b>stent</b>, dye flows straight through.</p>",
        q: [
          Q("In the before-and-after picture, how does the coronary blockage appear before angioplasty?", "As a gap in the dye-filled artery", ["As a bright stent", "As a bubble", "As a widened artery"], "The blockage stops dye, so it shows as a gap.")
        ]
      })
    ],
    review: [
      Q("What is a coronary angiogram in one line?", "X-ray pictures of the coronary arteries filled with dye through a catheter", ["An ultrasound of the valves", "A CT score of calcium", "A treadmill test with nuclear tracer"], "An angiogram injects contrast through a catheter and films the arteries on X-ray."),
      Q("Which common access site is in the wrist?", "Radial", ["Femoral", "Subclavian", "Brachial"], "The radial artery is at the wrist."),
      Q("A cath shows a 90% RCA lesion. What can be done during the same procedure?", "PCI with a stent", ["Nothing, wait for a stress test", "A TEE", "A calcium score"], "A flow-limiting lesion over 70% can be stented during the cath."),
      Q("What anatomic landmark limits how high a femoral stick can go?", "The inguinal ligament", ["The umbilicus", "The knee", "The iliac crest only"], "The puncture must be within 3 cm below the inguinal ligament.")
    ]
  });

  /* ---------------------------------------------------------------- after the cath (LO 5 & 7) */
  los.push({
    id: "after", label: "LO 5 & 7", title: "After the cath: sheath, recovery, closing the hole",
    objective: "Know what medications are held prior and following a coronary angiogram. Know the two most common access sites.",
    slides: [
      S(16, "Sheath removal", {
        why: "<p>The femoral <b>sheath stays</b> until anticoagulation is below its peak, usually <b>4 hours after the last heparin</b>. Meanwhile: <b>hourly vitals</b>, <b>groin checks every 30 minutes</b>. Then the sheath is pulled while <b>pressure is applied</b> to the femoral artery for about <b>20 minutes</b> or until hemostasis, followed by <b>6 hours of bedrest</b>.</p>",
        q: [
          Q("How long after the last heparin dose is the femoral sheath usually pulled?", "About 4 hours", ["Immediately", "24 hours", "1 week"], "The sheath stays until heparin is below its peak, usually 4 hours."),
          Q("How often are groin checks done while the sheath is in?", "Every 30 minutes", ["Every 4 hours", "Once a day", "Never"], "The slide lists 30-minute groin checks."),
          Q("How long is pressure held after pulling the femoral sheath?", "About 20 minutes or until hemostasis", ["2 minutes", "2 hours", "No pressure is needed"], "Pressure is applied for about 20 minutes or until bleeding stops."),
          Q("How long is bedrest after femoral sheath removal?", "6 hours", ["30 minutes", "3 days", "None"], "The slide calls for 6 hours of bedrest.")
        ]
      }),
      S(17, "Post-op", {
        why: "<p>Vitals every <b>15 min for 1 h</b>, every <b>30 min for 3 h</b>, then every <b>4 h for 24 h</b>. At home: <b>no lifting over 10 lbs</b> and <b>no strenuous exercise for 1 week</b>.</p>",
        q: [
          Q("How often are vitals checked in the first hour after a cath?", "Every 15 minutes", ["Every 4 hours", "Once", "Every 2 hours"], "Vitals are every 15 minutes for the first hour."),
          Q("What lifting limit applies for a week after cath?", "Nothing over 10 lbs", ["Nothing over 50 lbs", "No limit", "Nothing over 1 lb for a month"], "The slide says no heavy lifting over 10 lbs for 1 week."),
          Q("For how long is strenuous exercise avoided after cath?", "1 week", ["1 day", "6 months", "Forever"], "No strenuous exercise for 1 week.")
        ]
      }),
      S(18, "Hemostasis at the access site", {
        why: "<p>Three ways to stop the bleeding: <b>hand-held pressure</b>, a <b>mechanical clamp</b>, or a <b>closure device</b>. Per the notes, a clamp is preferred when a longer hold is expected: <b>larger sheaths</b>, <b>heavily anticoagulated</b> patients, a <b>hematoma</b> already present, or <b>dual antiplatelet therapy</b>.</p>",
        q: [
          Q("What are the three ways to get hemostasis at the access site?", "Hand pressure, mechanical clamp, closure device", ["Stitches, glue, cautery", "Ice, heat, elevation", "Heparin, warfarin, aspirin"], "The slide lists hand-held pressure, a mechanical clamp and a closure device."),
          Q("When is a mechanical clamp preferred over hand pressure?", "When a long hold is expected, such as on dual antiplatelet therapy", ["In every patient", "Only for radial access", "When the sheath is tiny and no drugs were given"], "The notes prefer a clamp for large sheaths, heavy anticoagulation, a hematoma or DAPT.")
        ]
      }),
      S(19, "Mynx device", {
        pic: "<p>Figure of the Mynx closure device: a balloon is inflated inside the artery and pulled back against the wall (A), a sealant is placed in the tissue track outside the artery (B, C), and the sealant expands to hold hemostasis after the device is withdrawn (D).</p>",
        why: "<p>Mynx is a femoral <b>closure device</b>: a balloon positions it against the inside wall, then a <b>sealant plug</b> is left in the tissue track. Per the notes, closure devices may raise local vascular complications, <b>raise the risk of local infection (endarteritis)</b>, and should be <b>avoided if a hematoma formed</b>.</p>",
        q: [
          Q("Where does the Mynx device leave its sealant?", "In the tissue track just outside the artery", ["Inside the coronary artery", "In the heart", "On the skin only"], "The sealant is placed in the extravascular tissue track."),
          Q("Which infection risk do closure devices raise, per the notes?", "Local infection or endarteritis", ["Endocarditis of the tricuspid", "Pneumonia", "UTI"], "The notes say closure devices increase the risk of local infection or endarteritis."),
          Q("When should a closure device be avoided?", "If a hematoma formed during the procedure", ["In every radial case only", "When the patient is fasting", "When the INR is normal"], "The notes say to avoid a closure device if a hematoma has formed.")
        ]
      }),
      S(20, "TR band", {
        pic: "<p>A TR band on a wrist: a clear plastic band with an inflatable balloon over the radial puncture site, shown in cross-section and on a hand.</p>",
        why: "<p>For <b>radial</b> access, a <b>TR band</b> (a clear wristband with an air balloon) presses on the puncture site. You can see the site through it and let air out slowly.</p>",
        q: [
          Q("Which access site does a TR band close?", "Radial", ["Femoral", "Subclavian", "Jugular"], "The TR band is a wrist compression band for radial access."),
          Q("How does a TR band stop bleeding?", "An inflated balloon presses on the puncture site", ["It injects glue", "It stitches the artery", "It cools the wrist"], "The band's balloon compresses the radial puncture.")
        ]
      }),
      S(21, "Video", {
        pic: "<p>A link to a YouTube video of the procedure; no other content on the slide.</p>",
        why: "<p>A video walk-through of the procedure; the content is covered by the slides around it.</p>"
      })
    ],
    review: [
      Q("A patient after femoral cath is on heparin, aspirin and clopidogrel and has a small hematoma. Which hemostasis method fits?", "Mechanical clamp", ["Closure device", "No pressure", "A TR band"], "DAPT and a hematoma favor a clamp, and a hematoma is a reason to avoid closure devices."),
      Q("A warehouse worker asks when he can lift boxes again after his cath. What do you tell him?", "No lifting over 10 lbs for 1 week", ["Tomorrow", "After 6 months", "Never again"], "Post-op instructions limit lifting over 10 lbs for 1 week."),
      Q("Why does the femoral sheath stay in for hours after the cath?", "To let heparin fall below its peak before pulling it", ["To keep giving contrast", "To pace the heart", "To measure cardiac output"], "Pulling it at peak anticoagulation would bleed, so it waits about 4 hours.")
    ]
  });

  /* ---------------------------------------------------------------- LO 6 */
  los.push({
    id: "lo6", label: "LO 6", title: "Complications",
    objective: "Know the possible complications during a coronary angiogram.",
    slides: [
      S(22, "Complications", {
        why: "<p>Rare but serious: <b>death 0.1%</b>, <b>MI 0.1%</b>, <b>stroke 0.4% during PCI</b>. <b>Vascular</b>: acute thrombosis or distal embolization, acute dissection, acute hematoma or hemorrhage, late <b>pseudoaneurysm</b>, late <b>AV fistula</b>, <b>retroperitoneal hemorrhage</b>. Also <b>arrhythmia</b>, <b>contrast allergy</b> (iodine) and <b>acute kidney injury</b>.</p>",
        q: [
          Q("What is the death rate from a cath?", "About 0.1%", ["About 5%", "About 10%", "Zero"], "Death is listed at 0.1%."),
          Q("What is the stroke rate during PCI?", "About 0.4%", ["About 4%", "About 40%", "0.01%"], "Stroke is listed at 0.4% during PCI."),
          Q("Which two vascular complications are late rather than acute?", "Pseudoaneurysm and AV fistula", ["Dissection and hematoma", "Thrombosis and embolization", "MI and stroke"], "Pseudoaneurysm and AV fistula are marked late."),
          Q("Which kidney complication can follow a cath?", "Acute kidney injury from contrast", ["Kidney stones", "Polycystic kidneys", "Nephrotic syndrome"], "Acute kidney injury is on the complication list.")
        ]
      })
    ],
    review: [
      Q("Hours after a femoral cath, a patient has back pain, hypotension and a falling hemoglobin with a normal groin. What do you suspect?", "Retroperitoneal hemorrhage", ["Pseudoaneurysm", "Contrast allergy", "Vasovagal reaction only"], "Bleeding into the retroperitoneum hides from the groin and shows as back pain and shock (standard teaching for the picture)."),
      Q("A week after cath, a patient has a pulsatile groin mass with a bruit. What is it?", "Pseudoaneurysm", ["Retroperitoneal bleed", "Lymph node", "Inguinal hernia"], "A pulsatile mass at the access site is a late pseudoaneurysm (standard teaching for the picture)."),
      Q("Two days after cath, a patient's creatinine doubles. What complication is this?", "Contrast-induced acute kidney injury", ["Contrast allergy", "AV fistula", "Stroke"], "Acute kidney injury from contrast is a listed complication."),
      Q("During cath, the patient develops hives and wheezing after dye. What happened?", "Allergic reaction to iodine contrast", ["MI", "Retroperitoneal bleed", "AV fistula"], "Allergic reaction to the iodine contrast agent is on the list.")
    ]
  });

  /* ---------------------------------------------------------------- LO 8 */
  los.push({
    id: "lo8", label: "LO 8", title: "Contrast dye allergy prep",
    objective: "Know the pre-op prep for patients with a contrast dye allergy.",
    slides: [
      S(23, "Allergy to contrast dye", {
        why: "<p>Premedicate: <b>prednisone 50 mg at 13, 7 and 1 hour</b> before, plus <b>Benadryl (diphenhydramine) 50 mg 1 hour</b> before.</p>",
        q: [
          Q("What steroid dose is given before cath in a contrast-allergic patient?", "Prednisone 50 mg", ["Prednisone 5 mg", "Dexamethasone 100 mg", "Hydrocortisone 1 g"], "The protocol uses prednisone 50 mg."),
          Q("At which times before the cath is prednisone given?", "13, 7 and 1 hour before", ["24 and 12 hours before", "Only right after", "1 week before"], "Prednisone is given 13, 7 and 1 hour before the procedure."),
          Q("Which antihistamine is given 1 hour before cath in a contrast-allergic patient?", "Benadryl 50 mg", ["Loratadine 10 mg", "Famotidine 20 mg", "Epinephrine 1 mg"], "Benadryl 50 mg is given 1 hour before.")
        ]
      })
    ],
    review: [
      Q("A patient with a contrast allergy has a cath at 9 AM. When is the first prednisone dose?", "8 PM the night before", ["8 AM the same day only", "9 AM", "A week before"], "13 hours before 9 AM is 8 PM the night before."),
      Q("Which two drugs make up contrast allergy prep?", "Prednisone and Benadryl", ["Metformin and aspirin", "Heparin and nitroglycerin", "Furosemide and lisinopril"], "The slide pairs prednisone 50 mg with Benadryl 50 mg.")
    ]
  });

  /* ---------------------------------------------------------------- right heart cath */
  los.push({
    id: "rhc", label: "Right heart cath", title: "Right heart cath (Swan-Ganz)",
    objective: "Right heart catheterization: what it measures and when to use it (no objective of its own).",
    slides: [
      S(24, "Right heart cath", {
        why: "<p>A <b>pulmonary artery (Swan-Ganz) catheter</b> goes through a vein into the right heart and pulmonary artery. It <b>directly measures</b>: <b>CVP</b>, right-sided intracardiac pressures, <b>pulmonary artery pressure</b>, <b>pulmonary capillary occlusion (wedge) pressure</b>, <b>cardiac output</b>, and <b>mixed venous O₂ saturation (SvO₂)</b>.</p>",
        q: [
          Q("What is another name for the pulmonary artery catheter?", "Swan-Ganz catheter", ["Foley catheter", "Judkins catheter", "Mynx device"], "The slide names pulmonary artery catheters as Swan-Ganz catheters."),
          Q("Which pressure from a right heart cath estimates left atrial pressure?", "Pulmonary capillary occlusion (wedge) pressure", ["CVP", "Mean arterial pressure", "Intracranial pressure"], "The wedge pressure reflects left atrial pressure (standard teaching)."),
          Q("Which oxygen measure comes from a right heart cath?", "Mixed venous oxyhemoglobin saturation (SvO2)", ["Arterial pulse oximetry", "Brain oxygen", "Exhaled CO2"], "SvO2 is a direct measurement listed on the slide.")
        ]
      }),
      S(25, "Right heart cath indications", {
        why: "<p>Use it when you need numbers you can't guess: <b>unknown volume status in shock</b>, <b>severe cardiogenic shock</b>, <b>suspected or known pulmonary hypertension</b>, and <b>severe cardiopulmonary disease</b> (congenital disease, left-to-right shunt, severe valve disease, pulmonary hypertension).</p>",
        q: [
          Q("Which shock situation is a right heart cath indication?", "Shock with unexplained or unknown volume status", ["Mild dehydration from the flu", "Vasovagal faint", "Stable hypertension"], "Unknown volume status in shock is listed."),
          Q("Which pulmonary condition is a right heart cath indication?", "Suspected or known pulmonary artery hypertension", ["Asthma", "Pneumonia", "Sinusitis"], "Pulmonary artery hypertension is listed.")
        ]
      })
    ],
    review: [
      Q("A patient in cardiogenic shock is not responding and you need CO and wedge pressure. Which procedure?", "Right heart cath with a Swan-Ganz catheter", ["Coronary calcium score", "TTE only", "Holter"], "Severe cardiogenic shock is an indication and the catheter measures CO and wedge directly."),
      Q("Left heart cath images the coronaries. What does right heart cath mainly give you?", "Pressures, cardiac output and SvO2", ["Coronary pictures", "Calcium score", "Valve pictures on ultrasound"], "Right heart cath measures pressures and flow rather than imaging the coronaries.")
    ]
  });

  /* ---------------------------------------------------------------- LO 9 */
  los.push({
    id: "lo9", label: "LO 9", title: "Coronary CT angiogram",
    objective: "Understand the concepts of a coronary CT angiogram.",
    slides: [
      S(26, "Coronary CT angiogram", {
        pic: "<p>A 3-D CT rendering of the heart with the coronary arteries in red (LAD, LCx labeled), and a CT cross-section next to it.</p>",
        why: "<p>CT angiography pictures the coronaries <b>without a catheter</b>. Per the notes, it is used when <b>stress testing is nondiagnostic but suspicion of coronary disease is strong</b>.</p>",
        q: [
          Q("Per the notes, when is a coronary CT angiogram used?", "Nondiagnostic stress test with strong suspicion of CAD", ["Every chest pain in the ED", "To grade valve stenosis", "To measure EF serially"], "The notes say CTA is used after a nondiagnostic stress test when suspicion is strong.")
        ]
      }),
      S(27, "Coronary CT angiography", {
        why: "<p><b>Noninvasive</b> coronary angiography. Indicated for <b>intermediate risk</b> with <b>equivocal stress results</b>, and for <b>known or suspected congenital coronary anomalies</b>. Prep: <b>beta blocker</b> to slow the heart to <b>60-70 bpm</b>, <b>nitroglycerin</b> to dilate the arteries, and <b>IV contrast</b>.</p>",
        q: [
          Q("Which patients fit coronary CT angiography best?", "Intermediate risk with equivocal stress results", ["High risk with ACS", "Asymptomatic low risk", "Anyone after cardiac arrest"], "The slide lists intermediate risk with equivocal stress tests."),
          Q("Why is a beta blocker given before coronary CTA?", "To slow the heart to 60-70 bpm for clear images", ["To raise BP", "To treat contrast allergy", "To dissolve plaque"], "A slower heart blurs less, so beta blockers target 60-70 bpm."),
          Q("Why is nitroglycerin given before coronary CTA?", "To dilate the coronary arteries", ["To slow the heart", "To protect the kidneys", "To prevent allergy"], "Nitroglycerin vasodilates the coronaries for a better picture."),
          Q("Which congenital problem is coronary CTA useful for?", "Coronary artery anomalies", ["ASD", "Tetralogy repair in a newborn", "Bicuspid valve calcium"], "CTA is useful for known or suspected congenital coronary anomalies.")
        ]
      }),
      S(28, "Coronary CTA accuracy", {
        why: "<p>Its strength is ruling out: <b>negative predictive value 95-100%</b> for significant CAD. Positive predictive value is <b>91-93% for left main and bypass grafts</b> but only <b>60-84% for other coronaries</b>, so a positive CTA in smaller vessels may overcall.</p>",
        q: [
          Q("What is the negative predictive value of coronary CTA for significant CAD?", "95-100%", ["50-60%", "70-75%", "10-20%"], "CTA has a negative predictive value of 95-100%."),
          Q("Where is coronary CTA's positive predictive value highest?", "Left main and bypass grafts", ["Small distal branches", "Every artery equally", "The coronary sinus"], "PPV is 91-93% for left main and bypass grafts versus 60-84% elsewhere."),
          Q("What is coronary CTA best at?", "Ruling out significant CAD", ["Grading valve leaks", "Measuring rhythm", "Treating blockages"], "A negative CTA is very reliable, so it best rules disease out.")
        ]
      }),
      S(29, "Coronary CTA limitations", {
        why: "<p>The picture fails with: <b>heart rate over 70</b>, an <b>irregular rhythm</b>, <b>can't hold breath for 5 seconds</b>, and <b>heavy calcification or prior stents</b> (bright metal and calcium hide the lumen).</p>",
        q: [
          Q("Above what heart rate is coronary CTA limited?", "70 bpm", ["100 bpm", "50 bpm", "150 bpm"], "A heart rate over 70 limits CTA."),
          Q("How long must the patient hold their breath for coronary CTA?", "About 5 seconds", ["1 minute", "Never", "30 seconds"], "Inability to hold the breath for 5 seconds is a limitation."),
          Q("Why do prior stents limit coronary CTA?", "The metal hides the artery's lumen", ["Stents are magnetic", "Stents cause allergy", "Stents slow the heart"], "Stents and heavy calcium blur the lumen on CT (standard teaching for the why).")
        ]
      })
    ],
    review: [
      Q("A patient in AF with a rate of 110 is referred for coronary CTA. What is the problem?", "Irregular, fast rhythm limits the images", ["Nothing", "AF is a contrast allergy", "CTA needs a fast rate"], "Heart rate over 70 and an irregular rhythm are listed limitations."),
      Q("A 52-year-old at intermediate risk has a coronary CTA with no significant stenosis. What does this mean?", "Significant CAD is very unlikely", ["He needs a cath anyway", "He has left main disease", "The test is meaningless"], "A 95-100% negative predictive value makes a negative CTA reassuring."),
      Q("A patient with multiple old stents needs coronary imaging. Why not CTA?", "Prior stents limit CTA", ["CTA is contraindicated in men", "Stents block the beta blocker", "CTA can't see the LAD"], "Severe calcification or prior stents are listed limitations.")
    ]
  });

  /* ---------------------------------------------------------------- LO 10 */
  los.push({
    id: "lo10", label: "LO 10", title: "Coronary calcium scoring",
    objective: "Understand the concepts of coronary calcium scoring and how it is interpreted.",
    slides: [
      S(30, "Coronary calcium scoring", {
        why: "<p>A <b>screening tool</b> for <b>asymptomatic</b> patients, recommended for <b>low-intermediate and intermediate risk</b>. It predicts <b>plaque burden</b> (how much atherosclerosis), but <b>cannot measure how tight a stenosis is</b>. A score of zero is <b>highly predictive of no atherosclerosis</b>.</p>",
        q: [
          Q("Who is coronary calcium scoring for?", "Asymptomatic low-intermediate or intermediate risk patients", ["Patients with STEMI", "Patients after cardiac arrest", "Patients with known 3-vessel disease"], "It is a screening tool for asymptomatic patients at low-intermediate or intermediate risk."),
          Q("What can a calcium score NOT tell you?", "How severe a stenosis is", ["Plaque burden", "Whether atherosclerosis is absent", "Overall extent of disease"], "The slide says it cannot measure severity of stenosis."),
          Q("What does a calcium score predict?", "The extent of atherosclerosis or plaque burden", ["The EF", "The rhythm", "Valve area"], "It predicts the extent of coronary atherosclerosis.")
        ]
      }),
      S(31, "Reading the calcium score", {
        why: "<p><b>0</b> = no identifiable disease. <b>1-99</b> = mild. <b>100-399</b> = moderate. <b>Over 400</b> = severe.</p>",
        q: [
          Q("What does a calcium score of 0 mean?", "No identifiable disease", ["Mild disease", "Severe disease", "The test failed"], "A score of 0 means no identifiable disease."),
          Q("What range is moderate disease on a calcium score?", "100 to 399", ["1 to 99", "Over 400", "0"], "100-399 is moderate disease."),
          Q("A calcium score of 520 means what?", "Severe disease", ["Mild disease", "No disease", "Moderate disease"], "Over 400 is severe disease.")
        ]
      }),
      S(32, "References", {
        why: "<p>UpToDate sources for the deck (stress testing, TEE, cath complications, PA catheters, coronary CT and calcium).</p>"
      })
    ],
    review: [
      Q("A calcium score of 45 is interpreted as what?", "Mild disease", ["Moderate disease", "Severe disease", "No disease"], "1-99 is mild disease."),
      Q("A symptomatic patient with chest pain at rest asks for a calcium score instead of a workup. Why is that wrong?", "Calcium scoring is a screening tool for asymptomatic patients", ["It uses too much contrast", "It needs a femoral stick", "It is only for children"], "Calcium scoring is for asymptomatic screening and cannot grade a stenosis."),
      Q("A score of 300 tells you about plaque burden. What does it not tell you?", "Whether any one artery is critically narrowed", ["That atherosclerosis exists", "The amount of calcium", "The risk category"], "Calcium scoring cannot measure stenosis severity.")
    ]
  });

  SlideStudy.lecture({
    id: "coronary-angiogram",
    title: "Cardiac Testing: Coronary Angiogram",
    short: "Angiogram",
    by: "Sillaman",
    img: "images/angio-slides/slide-{nn}.webp",
    los: los
  });
})();
