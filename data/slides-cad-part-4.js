/* CAD Part IV (Stager): ACS management, complications and secondary prevention, slide by slide.
   Slide text: data/slide-text-cad-part-4.js (generated). Pictures: images/cad4-slides/.
   Anything not on the slides is marked "(standard teaching)". Question ids "cad-part-4|s<slide>|<i>", "cad-part-4|<lo>|r|<i>": only append. */
(function () {
  "use strict";
  var S = SlideStudy.S, Q = SlideStudy.Q;
  var los = [];

  /* ---------------------------------------------------------------- LO 1 */
  los.push({
    id: "lo1", label: "LO 1", title: "Ischemia, injury, infarction and MI types",
    objective: "Differentiate myocardial ischemia, myocardial injury, and myocardial infarction, including the clinical criteria used to distinguish primary MI, secondary MI, and procedure-related MI.",
    slides: [
      S(1, "Title: CAD Part IV, ACS management, complications and secondary prevention", {
        why: "<p>CAD III was recognizing the chest pain patient. CAD IV is what you DO once it's ACS: first drugs, UA/NSTEMI plan, STEMI reperfusion and its clocks, special cases (MINOCA, RV infarct, vasospasm), complications, and the plan to prevent the next one.</p>"
      }),
      S(2, "ACS can happen at any time", {
        why: "<p>Even well-treated CAD can rupture a plaque any day, because the dangerous plaques are often small, thin-capped ones (CAD I). Stopping medicines (especially antiplatelets and statins) removes the protection, so adherence is part of every visit.</p>",
        q: [
          Q("Can a patient on optimal medical therapy for CAD still have an ACS?", "Yes, at any time", ["No, optimal therapy prevents all ACS", "Only if they smoke", "Only after age 80"], "The slide says ACS can occur at any time despite optimal treatment."),
          Q("What common patient behavior raises the risk of an ACS event?", "Stopping or not taking medical therapy", ["Taking aspirin daily", "Going to cardiac rehab", "Walking daily"], "Non-adherence to medical therapy increases ACS risk.")
        ]
      }),
      S(3, "ACS definitions: ischemia, injury, infarction", {
        why: "<p>Think of three nested steps. <b>Ischemia</b> = supply &lt; demand (can be reversible, may show ST depression or T inversion). <b>Injury</b> = troponin is up, meaning cells were damaged, for any reason. <b>Infarction</b> = injury <i>caused by</i> ischemia: you need BOTH a troponin rise AND evidence of ischemia (symptoms, EKG, imaging).</p>",
        q: [
          Q("Myocardial injury is defined by:", "Elevated cardiac troponin", ["ST elevation alone", "Chest pain alone", "A positive stress test"], "Injury means myocardial damage shown by elevated troponin."),
          Q("What two things are required to call it a myocardial infarction?", "Acute myocardial injury AND acute myocardial ischemia", ["Chest pain AND anxiety", "Troponin elevation alone", "ST depression alone"], "MI needs both a troponin-proven injury and evidence of ischemia."),
          Q("Which EKG findings suggest infarction on the slide?", "ST elevation and Q waves", ["Peaked P waves", "Short PR interval", "Sinus arrhythmia"], "ST elevation and Q waves suggest infarction.")
        ]
      }),
      S(4, "Understanding EKG changes of myocardial ischemia", {
        pic: "<p>Diagram of the ventricular wall with its EKG at each stage:</p><ul><li><b>A</b> Normal ventricular wall: normal complex.</li><li><b>B</b> Ischemic area: T wave changes (inversion).</li><li><b>C</b> Ischemic zone + 'injury': S-T segment elevation.</li><li><b>D</b> Ischemic zone, zone of 'injury' + infarction: Q wave with ST elevation.</li><li><b>E</b> Ischemic zone + infarction: Q wave with T inversion.</li><li><b>F</b> Infarct (healed), scar: Q wave remains.</li></ul>",
        why: "<p>Read the picture top to bottom as time passing: <b>T wave</b> changes (ischemia) → <b>ST elevation</b> (injury) → <b>Q wave</b> (dead muscle). The Q wave is the 'scar' that stays forever, which is why an old MI can be seen on a new EKG (standard teaching).</p>",
        q: [
          Q("On the ischemia diagram, which EKG change goes with the ZONE OF INJURY?", "ST-segment elevation", ["T-wave inversion only", "Q wave only", "A normal complex"], "The injury zone produces ST elevation."),
          Q("Which EKG finding remains after an infarct has healed into scar?", "Q wave", ["ST elevation", "Peaked T wave", "Delta wave"], "A Q wave persists over the scarred infarct.")
        ]
      }),
      S(5, "Types of acute MI: STEMI vs NSTEMI", {
        pic: "<p><b>Types of Acute Myocardial Infarction</b></p><table class=\"ss-table\"><tr><th>STEMI: ST-Elevation MI</th><th>NSTEMI: Non-ST-Elevation MI</th></tr><tr><td>Diagnostic ST-segment elevation (or an accepted STEMI equivalent) on ECG</td><td>No diagnostic ST-segment elevation</td></tr><tr><td>Usually reflects acute coronary occlusion</td><td>May show ST depression, T-wave inversion, or nonspecific changes</td></tr><tr><td><b>Troponin elevation</b></td><td><b>Troponin elevation</b></td></tr><tr><td>Requires immediate reperfusion evaluation</td><td>Usually reflects a non-occlusive coronary lesion</td></tr></table><p><b>Both represent myocardial infarction:</b> acute myocardial injury (rise/fall in troponin, with at least one value above the 99th percentile) and evidence of acute myocardial ischemia.</p>",
        why: "<p>Both are heart attacks (troponin up + ischemia). The difference is the artery: STEMI usually = fully <b>closed</b> artery, so it needs reperfusion now; NSTEMI usually = <b>partly</b> open artery, so there's a little more time to stabilize and risk-stratify.</p>",
        q: [
          Q("What troponin pattern counts as acute myocardial injury?", "A rise/fall with at least one value above the 99th percentile", ["Any single detectable value", "A stable chronic elevation", "A value below the 99th percentile"], "Injury is a rising or falling troponin with a value over the 99th percentile."),
          Q("A STEMI usually reflects:", "Acute coronary occlusion", ["A non-occlusive lesion", "Normal coronary arteries", "Pericardial inflammation"], "ST elevation usually means the artery is fully blocked."),
          Q("Which feature is shared by STEMI and NSTEMI?", "Troponin elevation", ["ST elevation", "No myocardial injury", "Immediate thrombolytics for both"], "Both are MIs, so troponin is elevated in both.")
        ]
      }),
      S(6, "Types of MI: the 2026 classification", {
        why: "<p>The 2026 (Fifth Universal) definition sorts MIs by <b>cause</b>. <b>Primary</b> = the coronary itself caused it (plaque rupture, dissection, spasm, embolism). <b>Secondary</b> = the coronaries were the victim of something else that broke supply/demand (anemia, hypoxemia, fast arrhythmia). <b>Procedure-related</b> = caused by PCI or surgery. It matters because secondary MI is treated by fixing the trigger, not by rushing to the cath lab (standard teaching).</p>",
        q: [
          Q("An MI caused by plaque rupture is classified as:", "Primary MI", ["Secondary MI", "Procedure-related MI", "Myocardial injury only"], "Spontaneous coronary pathology like plaque rupture is primary MI."),
          Q("An MI caused by severe anemia in a patient with stable CAD is:", "Secondary MI", ["Primary MI", "Procedure-related MI", "Type 4b MI"], "Supply-demand imbalance from another acute condition is secondary MI."),
          Q("Procedure-related MI corresponds to which older types?", "Types 4a, 4b, 4c and 5", ["Type 1", "Type 2", "Type 3"], "MIs from PCI or CABG were types 4 and 5.")
        ]
      }),
      S(7, "Fourth Universal Definition (2018)", {
        pic: "<p><b>Table 1: Clinical classification of different types of myocardial infarction</b></p><ul><li><b>Type 1</b>: Spontaneous myocardial infarction related to ischaemia due to a primary coronary event such as plaque erosion and/or rupture, fissuring, or dissection.</li><li><b>Type 2</b>: Myocardial infarction secondary to ischaemia due to either increased oxygen demand or decreased supply, e.g. coronary artery spasm, coronary embolism, anaemia, arrhythmias, hypertension, or hypotension.</li><li><b>Type 3</b>: Sudden unexpected cardiac death, including cardiac arrest, often with symptoms suggestive of myocardial ischaemia, accompanied by presumably new ST elevation, or new LBBB, or evidence of fresh thrombus in a coronary artery by angiography and/or at autopsy, but death occurring before blood samples could be obtained, or at a time before the appearance of cardiac biomarkers in the blood.</li><li><b>Type 4a</b>: Myocardial infarction associated with PCI.</li><li><b>Type 4b</b>: Myocardial infarction associated with stent thrombosis as documented by angiography or at autopsy.</li><li><b>Type 5</b>: Myocardial infarction associated with CABG.</li></ul>",
        why: "<p>The older numbers still show up on exams. Quick map: <b>Type 1</b> = plaque event (now 'primary'), <b>Type 2</b> = supply/demand mismatch (now 'secondary'), <b>Type 3</b> = sudden death before labs, <b>4a</b> PCI, <b>4b</b> stent thrombosis, <b>5</b> CABG (now 'procedure-related').</p>",
        q: [
          Q("In the 2018 definition, an MI from stent thrombosis is:", "Type 4b", ["Type 1", "Type 2", "Type 5"], "Type 4b is MI from documented stent thrombosis."),
          Q("In the 2018 definition, sudden cardiac death before biomarkers could be drawn is:", "Type 3", ["Type 1", "Type 4a", "Type 5"], "Type 3 is death before blood samples could show biomarkers."),
          Q("In the 2018 definition, an MI associated with CABG is:", "Type 5", ["Type 2", "Type 3", "Type 4a"], "Type 5 is MI associated with CABG.")
        ]
      }),
      S(8, "Myocardial injury vs myocardial infarction", {
        why: "<p>The same troponin can mean different things. Septic patient, troponin up, no ischemia → <b>injury</b> only. Septic patient, troponin up, PLUS chest pressure and dynamic ST depression → <b>secondary MI</b>. Plaque rupture with ST elevation → <b>primary MI</b>. The deciding question is always: is there evidence of ischemia?</p>",
        q: [
          Q("A septic patient has a rising troponin but no ischemic symptoms or EKG findings. Diagnosis?", "Acute myocardial injury", ["Primary MI", "Secondary MI", "STEMI"], "Troponin elevation without ischemia is injury, not MI."),
          Q("A septic, hypotensive patient has chest pressure, dynamic ST depression and a rising troponin. Diagnosis?", "Secondary MI (traditionally Type 2)", ["Acute myocardial injury only", "Primary MI", "Procedure-related MI"], "Ischemia from a supply-demand problem plus injury makes it secondary MI."),
          Q("What separates myocardial injury from MI in the table?", "Evidence of ischemia", ["The troponin level", "The patient's age", "Whether sepsis is present"], "Both have troponin elevation; MI also has evidence of ischemia.")
        ]
      })
    ],
    review: [
      Q("A patient's troponin rises after a long run of rapid AF with chest pressure and ST depression; coronaries are clean. Type?", "Secondary MI", ["Primary MI", "Procedure-related MI", "No MI"], "A tachyarrhythmia causing supply-demand ischemia with injury is secondary MI."),
      Q("A patient has an MI during an elective PCI. Classification?", "Procedure-related MI", ["Primary MI", "Secondary MI", "Myocardial injury only"], "MI as a complication of PCI or surgery is procedure-related."),
      Q("Ischemia without troponin elevation is:", "Ischemia, not injury or infarction", ["Infarction", "Injury", "Type 3 MI"], "Without troponin elevation there is no injury, so no infarction."),
      Q("Which EKG change comes FIRST as ischemia develops?", "T-wave changes", ["Q waves", "ST elevation", "Scar"], "Ischemia first changes the T wave, then injury raises the ST, then Q waves appear."),
      Q("Old 'Type 1 MI' is the new:", "Primary MI", ["Secondary MI", "Procedure-related MI", "Injury"], "Type 1 (plaque event) maps to primary MI.")
    ]
  });

  /* ---------------------------------------------------------------- LO 2 */
  los.push({
    id: "lo2", label: "LO 2", title: "UA, NSTEMI, STEMI and which artery",
    objective: "Identify the major myocardial regions supplied by the LAD, left circumflex, and right coronary arteries, and predict the likely region of myocardial infarction associated with obstruction of each vessel. (Slides 9-13 review the three ACS types.)",
    slides: [
      S(9, "Unstable angina", {
        why: "<p>UA = a clot that partly blocks the artery (subtotal occlusion), enough to cause rest pain but not enough to kill cells, so troponin stays <b>negative</b>. EKG may show ST depression or T inversion, never ST elevation.</p>",
        q: [
          Q("Unstable angina is caused by:", "Subtotal coronary artery occlusion", ["Complete coronary occlusion", "Pericarditis", "Aortic dissection"], "UA is a partial (subtotal) occlusion."),
          Q("What is the HS troponin in unstable angina?", "Negative", ["Positive", "Very high", "Chronically elevated"], "UA has no myocardial injury, so troponin is negative.")
        ]
      }),
      S(10, "NSTEMI", {
        why: "<p>NSTEMI = rest pain + <b>positive</b> troponin + no ST elevation. The damage is <b>subendocardial</b>: the inner layer dies first because it's farthest from the epicardial arteries and squeezed hardest during systole (standard teaching).</p>",
        q: [
          Q("NSTEMI is what type of infarction?", "Subendocardial", ["Transmural", "Epicardial only", "Pericardial"], "NSTEMI damages the subendocardium."),
          Q("What separates NSTEMI from unstable angina?", "A positive HS troponin", ["ST elevation", "Chest pain at rest", "T-wave inversion"], "Both have rest pain without ST elevation; NSTEMI has a positive troponin.")
        ]
      }),
      S(11, "ST depression: NSTEMI EKG", {
        pic: "<p>12-lead EKG with circled ST depression in leads I, V4, V5 and V6.</p>",
        why: "<p>ST depression points to subendocardial ischemia and does not localize as reliably as ST elevation (standard teaching). Here it's in I and V4-V6 (lateral leads).</p>",
        q: [
          Q("Which EKG change is circled on the NSTEMI example?", "ST depression", ["ST elevation", "Delta waves", "Peaked T waves"], "The slide shows ST depression in an NSTEMI."),
          Q("Can an NSTEMI EKG show ST depression?", "Yes, ST depression or T inversion can occur", ["No, the EKG must be normal", "No, it always shows ST elevation", "Only Q waves"], "NSTEMI can show ST depression or T-wave inversion.")
        ]
      }),
      S(12, "STEMI", {
        why: "<p>STEMI = a <b>complete</b> occlusion. The whole wall thickness (transmural) is starving, so the ST segment rises. Old names: transmural MI, Q-wave MI.</p>",
        q: [
          Q("STEMI is due to:", "Complete coronary artery occlusion", ["Subtotal occlusion", "Vasodilation", "Pericardial effusion"], "STEMI means the artery is completely occluded."),
          Q("STEMI was previously known as:", "Transmural or Q-wave MI", ["Subendocardial MI", "Non-Q-wave MI", "Unstable angina"], "The old names were transmural or Q-wave infarction."),
          Q("Which three findings define STEMI on the slide?", "Rest chest pain, ST elevation and positive HS troponin", ["Exertional pain, normal EKG, negative troponin", "Rest pain, ST depression, negative troponin", "No pain, Q waves, normal troponin"], "STEMI is rest pain plus ST elevation plus a positive troponin.")
        ]
      }),
      S(13, "Anterolateral STEMI with reciprocal changes", {
        pic: "<p>12-lead EKG of an anterolateral STEMI: ST elevation circled in V2-V6 and I/aVL; the arrow points to reciprocal ST depression in the inferior leads. 'Notice the RECIPROCAL changes!'</p>",
        why: "<p>Reciprocal changes are the mirror image: leads facing the opposite wall show ST <i>depression</i>. Seeing them makes a true STEMI more likely than a mimic like pericarditis (standard teaching).</p>",
        q: [
          Q("What are reciprocal changes on a STEMI EKG?", "ST depression in leads facing the opposite wall", ["ST elevation in every lead", "Q waves in aVR only", "Normal T waves"], "Opposite-facing leads show mirror-image ST depression."),
          Q("The slide's STEMI is in which territory?", "Anterolateral", ["Inferior", "Posterior", "Right ventricular"], "The title is anterolateral STEMI.")
        ]
      }),
      S(14, "Localizing the MI", {
        why: "<p>Learn it as leads → wall → artery. <b>V1-V4 anterior/septal → LAD</b>. <b>I, aVL, V5-V6 lateral → LCx</b> (reciprocal in inferior leads). <b>II, III, aVF inferior → RCA (80%) or LCx (20%)</b> (reciprocal in I, aVL). <b>Posterior → V7-V9</b>, seen as ST depression in V1-V3. <b>RV → right-sided V4R → RCA</b>.</p>",
        q: [
          Q("ST elevation in V1-V4 points to which artery?", "LAD", ["RCA", "LCx", "Left main only"], "Anterior MI (V1-V4) is LAD."),
          Q("ST elevation in II, III and aVF usually points to which artery?", "RCA (80%)", ["LAD", "LCx always", "Left main"], "Inferior MI is RCA in 80% and LCx in 20%."),
          Q("ST elevation in I, aVL, V5 and V6 is which MI and artery?", "Lateral MI, LCx", ["Anterior MI, LAD", "Inferior MI, RCA", "Septal MI, LAD"], "Lateral leads point to the left circumflex."),
          Q("Where are the reciprocal changes for a posterior MI?", "V1-V3", ["II, III, aVF", "I, aVL", "V5-V6"], "Posterior MI shows mirror changes (ST depression) in V1-V3.")
        ]
      }),
      S(15, "Most MIs come from lesions with <50% stenosis", {
        pic: "<p><b>The Majority of MIs Are Caused by Lesions With &lt;50% Stenosis.</b> Bar chart, 'Coronary Stenosis Severity Prior to MI' (Ambrose 1988, Little 1988, Nobuyoshi 1991, Giroud 1992). All 4 studies: <b>68%</b> of MIs came from lesions &lt;50%, <b>18%</b> from 50%-70%, <b>14%</b> from &gt;70%. (Falk et al. Circulation. 1995;92:657-671.)</p>",
        why: "<p>This ties back to CAD I: the small, young, thin-capped plaques are the ones that rupture. Tight old plaques cause angina; mild-looking ones cause most heart attacks. That's why prevention (statins, antiplatelets) matters even when a cath shows 'only' 30-40%.</p>",
        q: [
          Q("What share of MIs came from lesions with less than 50% stenosis in the pooled studies?", "68%", ["14%", "18%", "95%"], "68% of MIs arose from lesions under 50%."),
          Q("What share of MIs came from lesions over 70% stenosis?", "14%", ["68%", "50%", "90%"], "Only 14% came from tight (>70%) lesions."),
          Q("What does this graph teach?", "Mild-looking plaques cause most MIs, so prevention matters", ["Only tight stenoses cause MI", "Stents prevent all MIs", "Mild plaques never rupture"], "Most MIs start at lesions that were not severely narrowed.")
        ]
      })
    ],
    review: [
      Q("ST elevation in II, III, aVF with ST depression in I and aVL. Wall and usual artery?", "Inferior wall, RCA", ["Anterior wall, LAD", "Lateral wall, LCx", "Septal wall, LAD"], "Inferior MI with lateral reciprocal changes is usually RCA."),
      Q("ST elevation only in V1-V2. Which wall?", "Septal (LAD)", ["Inferior (RCA)", "Lateral (LCx)", "Posterior (RCA or LCx)"], "V1-V2 is the septum, supplied by the LAD."),
      Q("Rest chest pain, T inversion, negative troponins x2. Diagnosis?", "Unstable angina", ["NSTEMI", "STEMI", "Secondary MI"], "No troponin rise and no ST elevation make it UA."),
      Q("Rest chest pain, ST depression, rising troponin. Diagnosis?", "NSTEMI", ["Unstable angina", "STEMI", "Stable angina"], "A troponin rise without ST elevation is NSTEMI."),
      Q("ST depression in V1-V3 with tall R waves suggests which MI?", "Posterior MI", ["Anterior MI", "Septal MI", "RV MI"], "Posterior MI shows as reciprocal ST depression in V1-V3 (tall R waves are standard teaching)."),
      Q("Which wall does the LCx usually supply?", "Lateral", ["Anterior", "Septal", "Right ventricle"], "LCx occlusion causes lateral MI.")
    ]
  });

  /* ---------------------------------------------------------------- LO 3 */
  los.push({
    id: "lo3", label: "LO 3", title: "First treatment for suspected ACS (Don)",
    objective: "Describe the initial pharmacologic management of patients with suspected acute coronary syndrome, including the roles of aspirin, nitroglycerin, beta-blockers, oxygen, and analgesics.",
    slides: [
      S(16, "Unstable Don: the story starts", {
        why: "<p>Don already has known CAD (a 60% RCA lesion treated medically). Now he has sudden heavy chest pain at rest with dyspnea, sweating and nausea: an ACS until proven otherwise. EMS gives the two first drugs: <b>aspirin 325</b> and <b>SL nitro</b>.</p>",
        q: [
          Q("Don has sudden heavy substernal pain at rest with diaphoresis. What should you suspect?", "Acute coronary syndrome", ["Stable angina", "GERD", "Costochondritis"], "Rest pain with diaphoresis, dyspnea and nausea in known CAD is ACS until proven otherwise."),
          Q("What did Don receive on the way to the hospital?", "Aspirin 325 mg and SL nitroglycerin", ["Morphine and oxygen", "Heparin and clopidogrel", "Thrombolytics"], "EMS gave aspirin 325 mg and SL nitroglycerin.")
        ]
      }),
      S(17, "Initial therapeutics: aspirin and nitroglycerin", {
        why: "<p><b>Aspirin</b> blocks thromboxane so platelets stop piling onto the clot; chewing gets it in fast (standard teaching). <b>Nitroglycerin</b> dilates veins (less preload) and coronaries. Avoid nitro when the patient depends on preload or BP: <b>RV infarct</b>, <b>severe AS</b>, or a <b>PDE-5 inhibitor</b> (sildenafil, tadalafil) in 24 hrs, because BP can crash.</p>",
        q: [
          Q("Which aspirin dose is given to all possible and definite ACS patients?", "325 mg chewed/swallowed", ["81 mg enteric-coated", "650 mg IV", "1,000 mg"], "Aspirin 325 mg chewed is given to every possible ACS patient."),
          Q("A man with chest pain took sildenafil 10 hours ago. Which drug should be avoided?", "Nitroglycerin", ["Aspirin", "Heparin", "Clopidogrel"], "Nitrates with a PDE-5 inhibitor within 24 hours can cause severe hypotension."),
          Q("Which condition is a contraindication to nitroglycerin on the slide?", "RV infarct", ["Hypertension", "Diabetes", "Left anterior MI"], "RV infarct, severe AS and recent PDE-5 inhibitors are the exceptions.")
        ]
      }),
      S(18, "Nitro drip and beta blockers in the ER", {
        why: "<p>Pain after 1-2 SL nitros → <b>nitro drip</b> (not if hypotensive or RV infarct). Ongoing pain or STEMI → <b>beta blocker</b>, which slows the heart and lowers demand. But a failing heart needs its rate and contractility, so no BB in <b>HF</b>, <b>risk of cardiogenic shock</b> or <b>bradycardia</b>.</p>",
        q: [
          Q("Chest pain continues after 2 SL nitroglycerin. Next?", "Start a nitroglycerin drip", ["Give oxygen", "Discharge", "Start a beta blocker IV push in shock"], "Persistent pain after 1-2 SL nitros gets a nitro drip."),
          Q("When should a beta blocker NOT be started in ACS?", "Heart failure, risk of cardiogenic shock or bradyarrhythmia", ["Hypertension", "Tachycardia", "Ongoing pain"], "Beta blockers can worsen HF, shock or bradycardia."),
          Q("When is a nitroglycerin drip contraindicated?", "Hypotension or RV infarction", ["Hypertension", "Ongoing chest pain", "Anterior STEMI"], "Nitro lowers preload and BP, which hypotension and RV infarct can't tolerate.")
        ]
      }),
      S(19, "Drugs to avoid in suspected ACS: morphine and oxygen", {
        why: "<p><b>Morphine</b> slows gut absorption of oral P2Y12 inhibitors, so platelets stay active longer; use it only for severe pain. <b>Oxygen</b> only if sat &lt;90%: extra O2 doesn't help and too much (hyperoxemia) can make coronaries spasm.</p>",
        q: [
          Q("Why should morphine be avoided in ACS unless pain is severe?", "It may interfere with antiplatelet medications", ["It causes hypertension", "It raises troponin", "It causes ST elevation"], "Morphine can blunt the effect of oral antiplatelet drugs."),
          Q("ACS patient with oxygen saturation 95%. Oxygen?", "No, only use it if sat is below 90%", ["Yes, 15 L non-rebreather", "Yes, always 2 L", "Yes, to prevent arrhythmias"], "Oxygen has no benefit above 90% and may cause coronary vasospasm."),
          Q("What risk does unnecessary oxygen carry in ACS?", "Hyperoxemia-induced coronary vasospasm", ["Hypoglycemia", "Bleeding", "Bradycardia"], "Too much oxygen can trigger coronary vasospasm.")
        ]
      }),
      S(20, "ACS diagnostics: EKG, labs, BNP, CXR", {
        why: "<p>The first EKG may be normal, so repeat it in 20-30 minutes (sooner if symptoms change). PT/INR and PTT are baselines before anticoagulants. BNP and CXR look for heart failure or another cause of chest pain.</p>",
        q: [
          Q("The first EKG in suspected ACS is non-diagnostic. When should it be repeated?", "In 20-30 minutes or sooner", ["In 24 hours", "Only if troponin rises", "Never"], "Serial EKGs catch evolving changes."),
          Q("Why get PT/INR and PTT in ACS?", "As baselines before anticoagulation", ["To diagnose MI", "To measure EF", "To find the culprit artery"], "Clotting baselines are needed before heparin (standard teaching)."),
          Q("What is the CXR used for in ACS?", "Evaluating for heart failure or another cause of chest pain", ["Diagnosing STEMI", "Measuring troponin", "Seeing coronary plaque"], "The CXR looks for HF or other chest pain causes.")
        ]
      }),
      S(21, "ACS diagnostics: HS troponin I", {
        why: "<p>Two troponins, at arrival and 1-2 hours later. The <b>delta</b> (change) matters more than one value: a rising or falling pattern means acute injury, while a flat mildly high level fits chronic causes like CKD or ESRD.</p>",
        q: [
          Q("When is HS troponin drawn in suspected ACS?", "At arrival and again in 1-2 hours", ["Once only", "Daily for a week", "Only after 12 hours"], "Two values 1-2 hours apart show the delta."),
          Q("A patient's first HS troponin is barely elevated 30 minutes after pain began. What matters most?", "The change (delta) on the next level", ["Nothing, it rules out MI", "Only the first value", "The BNP"], "An early troponin can be low, so the delta decides."),
          Q("In which patients is troponin chronically elevated?", "Late-stage CKD and ESRD", ["Healthy athletes", "Asthmatics", "Children"], "Impaired clearance in late CKD/ESRD keeps troponin elevated.")
        ]
      }),
      S(22, "Unstable Don in the ER", {
        why: "<p>Don is tachycardic (112), hypertensive (170/92), sweaty and pale, with clear lungs and no JVD (no heart failure). Pain is down to 5/10 but persists after ASA and 2 SL nitros, so a <b>nitro drip</b> is hung and the full ACS workup is ordered.</p>",
        q: [
          Q("Don still has pain after aspirin and 2 SL nitros. What is started?", "A nitroglycerin drip", ["Morphine", "Oxygen", "Thrombolytics"], "Persistent pain after SL nitro gets a nitroglycerin drip."),
          Q("Don has clear lungs and no JVD. What does that suggest?", "No heart failure right now", ["Cardiogenic shock", "RV infarction", "Tamponade"], "No congestion and no JVD argue against HF at this point.")
        ]
      })
    ],
    review: [
      Q("A chest pain patient with sat 98%, BP 150/90 and no PDE-5 use. Which initial drugs are appropriate?", "Chewed aspirin 325 mg and SL nitroglycerin", ["Oxygen and morphine", "Thrombolytics and oxygen", "IV beta blocker in shock"], "Aspirin and nitro are the first drugs; oxygen only below 90%."),
      Q("An inferior MI patient is hypotensive with JVD and clear lungs. Which drug is dangerous?", "Nitroglycerin", ["Aspirin", "Normal saline", "Heparin"], "RV infarction is preload-dependent, so nitro can crash the BP."),
      Q("An ACS patient has acute pulmonary edema and BP 85/50. Start a beta blocker?", "No, HF and shock risk are contraindications", ["Yes, IV metoprolol now", "Yes, oral metoprolol", "Only if HR is over 100"], "Beta blockers are contraindicated with HF or shock risk."),
      Q("Which drug for severe ACS pain is avoided when possible because it interferes with antiplatelets?", "Morphine", ["Nitroglycerin", "Aspirin", "Acetaminophen"], "Morphine slows absorption of oral antiplatelets."),
      Q("Why repeat troponin 1-2 hours after the first?", "To see the delta that shows acute injury", ["To check the lab didn't err", "Troponin is always negative at first", "To measure kidney function"], "A rise or fall between values shows acute injury.")
    ]
  });

  /* ---------------------------------------------------------------- LO 4a */
  los.push({
    id: "lo4a", label: "LO 4a", title: "UA/NSTEMI: meds and who goes to cath now",
    objective: "Develop an appropriate management plan for patients with unstable angina and NSTEMI, including antianginal therapy, dual antiplatelet therapy, anticoagulation, risk stratification, and selection of an invasive management strategy. (Part a: medications and emergent cath.)",
    slides: [
      S(23, "UA/NSTEMI step 1: anti-anginal therapy", {
        why: "<p>Nitro doses to know: <b>0.4 mg SL q5 min x3</b>, or a drip starting at <b>5-10 mcg/min</b> titrated to relief, keeping SBP &gt;100. Beta blocker: <b>oral, cardioselective, within 24 hours</b>, unless decompensated HF, hypotension or bradycardia. IV BBs are used little because they raised cardiogenic shock in trials (standard teaching).</p>",
        q: [
          Q("What is the SL nitroglycerin dose in UA/NSTEMI?", "0.4 mg every 5 minutes x3", ["4 mg once", "0.04 mg every hour", "40 mg daily"], "SL nitro is 0.4 mg q5 minutes up to three doses."),
          Q("A nitroglycerin drip is titrated while keeping systolic BP above:", "100 mmHg", ["70 mmHg", "140 mmHg", "160 mmHg"], "The drip is titrated to relief or BP drop, keeping SBP over 100."),
          Q("Which beta blocker approach is used in UA/NSTEMI?", "Oral cardioselective BB within 24 hours", ["IV nonselective BB for everyone", "No beta blockers ever", "Only after discharge"], "An oral cardioselective BB is started within 24 hours if no contraindication.")
        ]
      }),
      S(24, "UA/NSTEMI step 2: dual antiplatelet therapy", {
        why: "<p>Two different platelet 'on switches' get blocked: aspirin (thromboxane) and a P2Y12 inhibitor (ADP). First aspirin dose is <b>uncoated 325 mg chewed or crushed</b> for fast effect, then <b>EC 81 mg daily</b>. Which P2Y12 (prasugrel, ticagrelor, clopidogrel) is chosen with or by cardiology, especially if cath is coming.</p>",
        q: [
          Q("After the initial 325 mg aspirin in the ER, what is the daily dose?", "EC aspirin 81 mg daily", ["325 mg four times daily", "650 mg daily", "None"], "Initial uncoated 325 mg, then enteric-coated 81 mg daily."),
          Q("Which three P2Y12 inhibitors are listed?", "Prasugrel, ticagrelor and clopidogrel", ["Heparin, enoxaparin and warfarin", "Metoprolol, carvedilol and atenolol", "Alteplase, tenecteplase and reteplase"], "Prasugrel (Effient), ticagrelor (Brilinta) and clopidogrel (Plavix)."),
          Q("Who decides on the P2Y12 inhibitor for a patient going to immediate cath?", "Cardiology", ["The patient alone", "Pharmacy alone", "No one; it is never given"], "The P2Y12 choice is made with or by cardiology.")
        ]
      }),
      S(25, "UA/NSTEMI step 3: anticoagulation", {
        why: "<p>Antiplatelets stop platelets; anticoagulants stop <b>thrombin</b> from growing the clot. <b>UFH drip</b> if a cath is planned (it's short-acting and adjustable, titrated by anti-Xa or PTT). <b>Enoxaparin 1 mg/kg SQ twice daily</b> if no cath is planned.</p>",
        q: [
          Q("NSTEMI patient going to cath. Which anticoagulant?", "Unfractionated heparin IV drip", ["Enoxaparin 1 mg/kg SQ BID", "Warfarin", "No anticoagulant"], "UFH is used when a cath is planned."),
          Q("What is the enoxaparin dose for UA/NSTEMI when no cath is planned?", "1 mg/kg SQ twice daily", ["40 mg SQ daily", "1 mg/kg IV once", "5,000 units IV"], "Enoxaparin is 1 mg/kg SQ twice daily."),
          Q("How do heparins help in ACS?", "They inhibit clot extension by blocking further thrombin activation", ["They dissolve the existing clot", "They dilate the coronary arteries", "They lower heart rate"], "Heparins stop further thrombin activation of platelets and clotting factors.")
        ]
      }),
      S(26, "Risk stratify: who goes to emergent cath", {
        why: "<p>These five features mean the patient is unstable now, so they skip scoring and go straight to emergent cath: <b>cardiogenic shock</b>, <b>severe LV dysfunction/florid HF</b>, <b>recurrent rest angina despite nitro and BB</b>, <b>new or worse MR or new VSD</b> (mechanical complications), and <b>sustained ventricular arrhythmias</b>.</p>",
        q: [
          Q("An NSTEMI patient develops sustained VT. Next?", "Emergent cardiac catheterization", ["TIMI score and cath in 48 hours", "Stress test", "Discharge"], "Sustained ventricular arrhythmias are an emergent cath feature."),
          Q("Which finding sends a UA/NSTEMI patient to emergent cath?", "Recurrent rest angina despite nitro and beta blocker", ["Pain that resolved with one nitro", "Normal troponin", "Mild hypertension"], "Refractory rest angina despite intensive therapy is a high-risk feature."),
          Q("A new holosystolic murmur appears in an NSTEMI patient. Why does it matter?", "New MR or VSD calls for emergent cath", ["It is benign", "It means pericarditis", "It means the patient can go home"], "New or worsening MR or a new VSD is an emergent feature.")
        ]
      })
    ],
    review: [
      Q("NSTEMI, stable, cath tomorrow. Which combination fits?", "Aspirin, P2Y12 inhibitor, UFH drip, oral BB, nitro as needed", ["Aspirin only", "Thrombolytics and oxygen", "Enoxaparin and IV metoprolol in HF"], "UA/NSTEMI gets anti-anginals, DAPT and anticoagulation (UFH if cath planned)."),
      Q("NSTEMI patient in cardiogenic shock. Plan?", "Emergent cardiac cath", ["TIMI score, cath in 48 hours", "Stress test first", "Enoxaparin and discharge"], "Cardiogenic shock means emergent cath."),
      Q("Why is aspirin's first dose uncoated and chewed?", "For faster absorption and effect", ["To protect the stomach", "To lower the dose", "Because EC aspirin is stronger"], "Chewing uncoated aspirin works faster (standard teaching)."),
      Q("Which drug is NOT part of UA/NSTEMI anticoagulation?", "Clopidogrel", ["Unfractionated heparin", "Enoxaparin", "Both heparins"], "Clopidogrel is an antiplatelet, not an anticoagulant."),
      Q("A UA patient's nitro drip is lowering SBP to 92. What should you do?", "Reduce the drip to keep SBP over 100", ["Increase the drip", "Add sildenafil", "Ignore it"], "Nitro is titrated keeping systolic BP above 100.")
    ]
  });

  /* ---------------------------------------------------------------- LO 5 */
  los.push({
    id: "lo5", label: "LO 5", title: "TIMI risk score",
    objective: "Apply the TIMI risk score to risk-stratify patients with unstable angina or NSTEMI and guide decisions regarding the timing of an invasive management strategy.",
    slides: [
      S(27, "TIMI score for UA/NSTEMI", {
        why: "<p>Seven 1-point items, mnemonic <b>AMERICA</b> (standard teaching): <b>A</b>ge ≥65, <b>M</b>arkers elevated, <b>E</b>KG ST deviation ≥0.5 mm, <b>R</b>isk factors ≥3, <b>I</b>schemia: severe angina (≥2 episodes) in 24 h, known <b>C</b>AD ≥50%, <b>A</b>spirin in last 7 days. Score <b>3+</b> = higher risk → cath within <b>24-48 hours</b>. Aspirin use counts because the event broke through aspirin, which means aggressive disease.</p>",
        q: [
          Q("What TIMI score marks increased risk in UA/NSTEMI?", "3 or more", ["1 or more", "5 or more", "7 only"], "A TIMI score of 3+ is increased risk."),
          Q("Stable NSTEMI patient with TIMI 4. When should cath happen?", "Within 24-48 hours", ["Within 10 minutes", "Never", "In 3 months"], "High-risk stable patients go to LHC within 24-48 hours."),
          Q("Which is a TIMI point?", "Aspirin use in the past 7 days", ["BMI over 30", "Female sex", "Heart rate over 100"], "Aspirin use in the last 7 days earns a point."),
          Q("What ST deviation earns a TIMI point?", "Greater than 0.5 mm", ["Greater than 5 mm", "Any T inversion", "Only ST elevation over 2 mm"], "ST deviation over 0.5 mm scores 1 point.")
        ]
      }),
      S(28, "GRACE vs TIMI scores", {
        why: "<p>Three tools, three jobs. <b>TIMI UA/NSTEMI</b>: 7 yes/no items, predicts 14-day death, MI or urgent revascularization. <b>TIMI STEMI</b>: different weighted items (age, Killip, SBP &lt;100, HR &gt;100, anterior STE/LBBB, DM/HTN/angina, weight &lt;67 kg, time to treatment &gt;4 h), predicts 30-day death. <b>GRACE</b>: all ACS, uses creatinine, Killip class and cardiac arrest, predicts in-hospital to 3-year death.</p>",
        q: [
          Q("What does the TIMI UA/NSTEMI score predict?", "14-day all-cause death, MI or urgent revascularization", ["30-day death only", "10-year ASCVD risk", "Stroke risk in AF"], "The table lists 14-day death, MI or urgent revascularization."),
          Q("Which score uses serum creatinine and Killip class for all ACS?", "GRACE", ["TIMI UA/NSTEMI", "HEART", "CHA2DS2-VASc"], "GRACE includes creatinine, Killip class and cardiac arrest."),
          Q("Which TIMI score item is used for STEMI but not UA/NSTEMI?", "Systolic BP under 100", ["Age ≥65", "Aspirin in 7 days", "Known CAD ≥50%"], "The STEMI score weighs SBP, HR, Killip class, weight and time to treatment.")
        ]
      })
    ],
    review: [
      Q("A 70-year-old on aspirin with 3 risk factors, positive troponin and ST depression. TIMI score (no known CAD, 1 angina episode)?", "5", ["3", "4", "7"], "Age 1 + aspirin 1 + risk factors 1 + markers 1 + ST deviation 1 = 5."),
      Q("A 50-year-old, 1 risk factor, no aspirin, negative troponin, normal EKG, 1 episode. TIMI score?", "0", ["1", "2", "3"], "None of the seven items are present."),
      Q("Mnemonic for TIMI UA/NSTEMI items?", "AMERICA (standard teaching)", ["HEART", "MONA", "CHADS"], "Age, Markers, EKG, Risk factors, Ischemic episodes, CAD, Aspirin (standard teaching)."),
      Q("Which score would you use to predict 30-day death in a STEMI?", "TIMI risk score for STEMI", ["TIMI for UA/NSTEMI", "HEART score", "PREVENT"], "TIMI STEMI predicts 30-day all-cause death.")
    ]
  });

  /* ---------------------------------------------------------------- LO 4b */
  los.push({
    id: "lo4b", label: "LO 4b", title: "UA/NSTEMI: invasive strategy and Don's plan",
    objective: "Develop an appropriate management plan for patients with unstable angina and NSTEMI, including antianginal therapy, dual antiplatelet therapy, anticoagulation, risk stratification, and selection of an invasive management strategy. (Part b: invasive strategies.)",
    slides: [
      S(29, "Strategy 1: immediate invasive", {
        why: "<p>Very high risk = can't wait: <b>cardiogenic shock</b>, <b>hemodynamic instability</b>, <b>refractory pain</b>, <b>life-threatening arrhythmias</b>. These go to emergent cath, just like a STEMI.</p>",
        q: [
          Q("Which NSTE-ACS patient needs an IMMEDIATE invasive strategy?", "One with refractory chest pain despite medical therapy", ["A stable patient with TIMI 2", "A pain-free low-risk patient", "A patient with negative troponins and no symptoms"], "Refractory pain, shock, instability and life-threatening arrhythmias need emergent cath."),
          Q("An immediate invasive strategy means:", "Emergent coronary angiography", ["Cath within 3 months", "Stress test first", "Medical therapy only"], "Immediate invasive means emergent cath.")
        ]
      }),
      S(30, "Strategy 2: routine invasive", {
        why: "<p>Intermediate and high-risk patients get a cath <b>during the hospital stay even if they feel better</b>, because feeling better doesn't mean the plaque is safe. High-risk: generally within <b>24 hours</b>; others later in the stay. The cath then decides PCI or CABG.</p>",
        q: [
          Q("An intermediate-risk NSTEMI patient's pain resolves on medicines. Still cath?", "Yes, during the hospitalization", ["No, symptoms resolved", "Only if pain returns in 6 months", "Only a stress test is allowed"], "Routine invasive means cath during the stay even if symptoms improve."),
          Q("For selected high-risk patients, early routine cath is generally within:", "24 hours", ["10 minutes", "1 week", "45 days"], "Early invasive is generally within 24 hours.")
        ]
      }),
      S(31, "Strategy 3: selective invasive", {
        why: "<p>Low-risk patients start with medicines and noninvasive testing (stress test or CCTA). Cath only if testing shows significant ischemia or symptoms come back.</p>",
        q: [
          Q("A low-risk NSTE-ACS patient. First approach?", "Medical management and stress testing or CCTA", ["Emergent cath", "CABG", "Thrombolytics"], "Selective invasive starts with medicines and noninvasive testing."),
          Q("In the selective strategy, when does the patient go to cath?", "If testing shows significant ischemia or symptoms recur", ["Always within 24 hours", "Never", "Only after 5 years"], "Positive testing or recurrent symptoms trigger angiography.")
        ]
      }),
      S(32, "Routine vs selective invasive (2025 guideline)", {
        pic: "<p><b>Routine Invasive Versus Selective Invasive Strategy in Patients With NSTE-ACS</b> (flowchart):</p><ul><li><b>High- or intermediate-risk NSTE-ACS</b> → Routine invasive strategy (Class 1) → angiogram → PCI, CABG, or Medical therapy alone (consider additional diagnostic work-up for cases of MINOCA).</li><li><b>Lower-risk NSTE-ACS</b> → Routine invasive strategy (Class 1) OR Selective invasive strategy (Class 1) → Noninvasive risk stratification (e.g., stress testing or CCTA) or recurrent ischemic symptoms → <b>+</b> → angiogram (then PCI, CABG or medical therapy); <b>−</b> → Medical therapy alone.</li></ul>",
        why: "<p>Notice lower-risk patients can take either path; both are Class 1. A negative noninvasive test means medical therapy alone. Any cath that finds no obstructive disease raises the question of MINOCA (later in this deck).</p>",
        q: [
          Q("In the 2025 flowchart, what happens after a NEGATIVE noninvasive test in lower-risk NSTE-ACS?", "Medical therapy alone", ["Emergent cath", "CABG", "Thrombolytics"], "A negative stress test or CCTA leads to medical therapy alone."),
          Q("Which patients can take EITHER routine or selective invasive (both Class 1)?", "Lower-risk NSTE-ACS", ["Cardiogenic shock", "STEMI", "High-risk NSTE-ACS"], "Lower-risk patients may go either way.")
        ]
      }),
      S(33, "Contraindications to a routine invasive approach", {
        why: "<p>A cath leads to stents (needing DAPT) or surgery, so skip it when the risks or the patient's goals outweigh benefit: <b>high bleeding risk on DAPT</b>, <b>platelets &lt;50</b>, <b>advanced CKD (not on dialysis)</b> or <b>acute renal failure</b> (contrast), <b>life expectancy &lt;1-2 years</b>, <b>advanced dementia</b>, anatomy that rules out PCI/CABG, and <b>patient preference</b>.</p>",
        q: [
          Q("Which is a contraindication to routine invasive management?", "Platelet count under 50 × 10⁹/L", ["Age over 65", "Diabetes", "Positive troponin"], "Severe thrombocytopenia (<50) is listed."),
          Q("Why is advanced CKD not on dialysis a contraindication to routine cath?", "Contrast can worsen kidney function", ["CKD prevents stent placement", "CKD lowers troponin", "CKD causes STEMI"], "Contrast can push failing kidneys into dialysis (standard teaching)."),
          Q("A patient with advanced dementia and NSTEMI. Routine invasive?", "Generally not; it is a listed contraindication", ["Always required", "Only CABG", "Emergent cath"], "Advanced dementia is a contraindication to routine invasive care.")
        ]
      }),
      S(34, "Admission care for UA/NSTEMI", {
        why: "<p>Every UA/NSTEMI gets cardiology consulted from the ER. Stable patients: fix electrolytes and hypoxia, optimize fluids, admit to <b>telemetry</b> (watch for arrhythmias), <b>bedrest</b>, heart-healthy diet, then <b>NPO at midnight</b> for the next-day cath.</p>",
        q: [
          Q("Where is a stable UA/NSTEMI patient admitted?", "Telemetry floor", ["Home with follow-up", "Psychiatry unit", "Outpatient clinic"], "Stable patients are admitted to telemetry."),
          Q("Why is the patient kept NPO at midnight?", "For a possible cath the next day", ["To lower troponin", "To prevent GERD", "To treat HF"], "NPO prepares for cardiac cath (standard teaching).")
        ]
      }),
      S(35, "Unstable Don: what is the diagnosis and plan?", {
        why: "<p>The deck asks without an answer slide, so here is the reasoning from its own rules. <b>Diagnosis: NSTEMI</b>: rising then falling troponin (234 → 391 → 806 → 682) with inferior ST depression/T inversion and no ST elevation. <b>TIMI</b>: known CAD ≥50% (1), aspirin in 7 days (1), elevated markers (1), ST deviation (1) = at least <b>4</b> (risk factors count unknown, age 55 scores 0). TIMI ≥3 and stable → <b>routine (early) invasive</b>, cath within 24-48 hours, on DAPT, heparin drip, nitro and an oral beta blocker.</p>",
        q: [
          Q("Don's troponins are 234, 391, 806, 682 with ST depression in II, III, aVF. Diagnosis?", "NSTEMI", ["Unstable angina", "STEMI", "Stable angina"], "A rising and falling troponin without ST elevation is NSTEMI."),
          Q("Which TIMI points does Don definitely have?", "Known CAD ≥50%, aspirin use, elevated markers and ST deviation", ["Age ≥65 and 3 risk factors", "Only elevated markers", "None"], "His 60% RCA lesion, daily ASA, troponin and ST changes give at least 4 points."),
          Q("Don is stable with TIMI ≥3. Which strategy?", "Routine invasive, cath within 24-48 hours", ["Selective invasive with stress test", "Emergent cath within 10 minutes", "Medical therapy only"], "High-risk stable NSTEMI goes to cath within 24-48 hours.")
        ]
      })
    ],
    review: [
      Q("Low-risk NSTE-ACS patient prefers to avoid cath. Is selective invasive acceptable?", "Yes, it is Class 1 for lower-risk patients", ["No, cath is mandatory", "No, CABG is required", "Only if troponin is negative"], "Lower-risk patients can take a selective invasive path."),
      Q("NSTEMI with hemodynamic instability. Strategy?", "Immediate invasive", ["Routine invasive", "Selective invasive", "Medical therapy only"], "Instability calls for emergent angiography."),
      Q("A 92-year-old with life expectancy under 1 year and NSTEMI. Routine invasive?", "Generally not; limited life expectancy is a contraindication", ["Always", "Only CABG", "Emergent cath"], "Life expectancy under 1-2 years is a listed contraindication."),
      Q("Intermediate-risk NSTEMI, pain-free after 6 hours on meds. Plan?", "Cath during the hospitalization", ["Discharge, no cath", "Stress test in 6 weeks", "Emergent CABG"], "Routine invasive caths intermediate-risk patients even if they improve."),
      Q("A cath for NSTE-ACS shows no obstructive disease. What should be considered?", "MINOCA work-up", ["Immediate CABG", "Thrombolytics", "Nothing more"], "The 2025 flowchart flags MINOCA when the arteries are open.")
    ]
  });

  /* ---------------------------------------------------------------- LO 6 */
  los.push({
    id: "lo6", label: "LO 6", title: "STEMI: reperfusion and the clocks",
    objective: "Describe the management of STEMI, including the selection of reperfusion therapy, indications for primary PCI versus fibrinolytic therapy, and recommended treatment time targets.",
    slides: [
      S(36, "STEMI is a time-critical emergency", {
        why: "<p>STEMI is usually plaque rupture or erosion with a clot that completely blocks the artery. Every minute closed, more muscle dies, so the whole system is built around opening it fast.</p>",
        q: [
          Q("What is the cause of most STEMIs?", "Acute atherothrombosis from plaque rupture or erosion", ["Coronary vasospasm", "Anemia", "Aortic stenosis"], "Most STEMIs come from plaque rupture or erosion with thrombus."),
          Q("What is the treatment goal in STEMI?", "Rapid restoration of coronary blood flow (reperfusion)", ["Pain control only", "Discharge with a stress test", "Oxygen for everyone"], "STEMI requires rapid reperfusion.")
        ]
      }),
      S(37, "Time is muscle", {
        why: "<p>Necrosis starts in the <b>subendocardium</b> (inner layer, last in line for blood and squeezed hardest) and spreads outward toward the epicardium. Opening the artery early stops that wave, so less muscle dies and the EF is preserved.</p>",
        q: [
          Q("Where does necrosis begin in a STEMI?", "The subendocardium, spreading outward", ["The epicardium, spreading inward", "The pericardium", "The valves"], "Necrosis starts in the subendocardium and spreads outward over time."),
          Q("Why does reperfusion speed matter?", "It limits infarct size and preserves LV function", ["It lowers cholesterol", "It prevents all future plaque", "It cures diabetes"], "Faster reperfusion means less irreversible injury.")
        ]
      }),
      S(38, "Progression from ischemia to necrosis", {
        pic: "<p><b>Progression from Ischemia to Necrosis (Start in Endocardium, Extend to Epicardium)</b>: Normal myocardium (healthy myocardium with intact blood flow) → Ischemia, seconds-minutes (subendocardial ischemia, pale region) → Injury, minutes-hours (transmural injury, involves full thickness) → Early necrosis, hours-days (necrosis typically begins in endocardium and progresses outward) → Established infarction, days-weeks (full-thickness infarct with fibrous scar). Arrow: time since coronary occlusion increases.</p><p><b>Key Points:</b> Myocardial injury typically starts in the subendocardium and progresses toward the epicardium. The longer the ischemia persists, the greater the amount of irreversible damage. Rapid reperfusion can limit the size of the infarct.</p>",
        why: "<p>The timeline to remember: ischemia in <b>seconds-minutes</b>, injury <b>minutes-hours</b>, necrosis <b>hours-days</b>, scar <b>days-weeks</b>. Reperfusion during the injury window saves the most muscle.</p>",
        q: [
          Q("On the timeline, how long until ischemia begins after occlusion?", "Seconds to minutes", ["Days", "Weeks", "Months"], "Ischemia starts within seconds to minutes."),
          Q("What is left at the end of an established infarction?", "A full-thickness fibrous scar", ["Normal muscle", "A plaque", "A thrombus only"], "Established infarction becomes fibrous scar over days to weeks.")
        ]
      }),
      S(39, "STEMI: field recognition and straight to the cath lab", {
        why: "<p>Paramedics can transmit the EKG so the cath lab is activated before the patient arrives. ER time is brief: the same first drugs as UA/NSTEMI, then the cath lab is the priority.</p>",
        q: [
          Q("What is the priority once a STEMI is diagnosed?", "Getting the patient to the cardiac cath lab", ["Admission to telemetry for 24 hours", "A stress test", "Waiting for a second troponin"], "The slide says the priority is the cath lab."),
          Q("How can paramedics speed STEMI care?", "By transmitting the EKG from the field", ["By giving thrombolytics to everyone", "By skipping aspirin", "By driving to the nearest clinic"], "Field EKGs let the hospital activate the cath lab early.")
        ]
      }),
      S(40, "Open the artery: door-to-balloon and door-to-needle", {
        why: "<p>Two clocks: <b>door-to-balloon 90 minutes</b> for PCI, <b>door-to-needle 30 minutes</b> for thrombolytics when PCI isn't possible. PCI is preferred because it opens more arteries, with less reinfarction and much less brain bleeding than lytics.</p>",
        q: [
          Q("What is the door-to-balloon goal for STEMI?", "90 minutes", ["30 minutes", "120 minutes", "12 hours"], "Door-to-balloon goal is 90 minutes."),
          Q("What is the door-to-needle goal for thrombolytics?", "30 minutes", ["90 minutes", "10 minutes", "120 minutes"], "Door-to-needle goal is 30 minutes."),
          Q("Why is primary PCI preferred over thrombolytics?", "Lower reinfarction and intracranial hemorrhage risk", ["It is cheaper", "It needs no cath lab", "It works after 48 hours"], "PCI gives better outcomes with less reinfarction and ICH.")
        ]
      }),
      S(41, "Reperfusion 1: primary PCI", {
        why: "<p>The clock now starts at <b>first medical contact</b> (paramedics). Arrive at a PCI hospital: device within <b>90 min</b>. Transfer from a non-PCI hospital: within <b>120 min</b>.</p>",
        q: [
          Q("A STEMI patient arrives directly at a PCI-capable hospital. First medical contact-to-device goal?", "≤90 minutes", ["≤30 minutes", "≤120 minutes", "≤12 hours"], "Direct presentation goal is 90 minutes."),
          Q("A STEMI patient must be transferred from a non-PCI hospital. FMC-to-device goal?", "≤120 minutes", ["≤90 minutes", "≤30 minutes", "≤24 hours"], "Transfer goal is 120 minutes.")
        ]
      }),
      S(42, "Reperfusion 2: fibrinolytics", {
        why: "<p>Lytics are the backup: if PCI can't happen within <b>120 minutes</b>, give a fibrinolytic within <b>30 minutes</b> of arrival, generally within <b>12 hours</b> of symptom onset, then transfer to a PCI hospital anyway. Clots get harder to dissolve as they age, hence the 12-hour window (standard teaching).</p>",
        q: [
          Q("When should fibrinolytics be considered for STEMI?", "When PCI can't be done within 120 minutes", ["Always before PCI", "Only after 24 hours", "In every NSTEMI"], "Lytics are for when timely PCI is unavailable."),
          Q("Fibrinolytics are generally given within how long of symptom onset?", "12 hours", ["1 hour", "48 hours", "7 days"], "Eligible patients are generally within 12 hours."),
          Q("What happens after fibrinolytics are given?", "Transfer to a PCI-capable hospital", ["Discharge home", "Stress test in 6 weeks", "Nothing more"], "Patients are transferred to a PCI center after lytics.")
        ]
      }),
      S(43, "Transfer, lytics or emergent CABG", {
        why: "<p>Decision in one line: can they reach a PCI cath lab within <b>2 hours</b>? Yes → transfer. No → lytics (up to 12 hours from onset). Emergent CABG carries high mortality and is reserved for failed PCI or lytics.</p>",
        q: [
          Q("When is inter-hospital transfer for STEMI appropriate?", "If the PCI cath lab can be reached within 120 minutes", ["Always, regardless of time", "Only after 12 hours", "Never"], "Transfer is appropriate within 120 minutes."),
          Q("When is emergent CABG used in STEMI?", "When PCI or lytics fail", ["First-line in every STEMI", "Before trying PCI", "Never"], "Emergent CABG has high mortality and is reserved for failures.")
        ]
      }),
      S(44, "STEMI reperfusion timing targets", {
        html: "<p><b>STEMI: Reperfusion Timing Targets.</b> The goal is to restore coronary blood flow as quickly as possible.</p><table class=\"ss-table\"><tr><th>Target</th><th>Time</th><th>Details</th></tr><tr><td>Door-to-ECG</td><td>≤ 10 minutes</td><td>Obtain a 12-lead ECG in patients with suspected ACS. Rapid recognition helps activate the STEMI pathway.</td></tr><tr><td>Primary PCI</td><td>≤ 90 minutes</td><td>First medical contact to device activation for direct presentation to a PCI-capable hospital. If transfer is required, target ≤ 120 minutes from first medical contact.</td></tr><tr><td>Fibrinolytic therapy</td><td>≤ 30 minutes</td><td>Door-to-needle target when timely primary PCI cannot be achieved. For eligible STEMI patients, generally within 12 hours of symptom onset; assess contraindications. After fibrinolysis, transfer the patient to a PCI-capable hospital for a pharmacoinvasive strategy.</td></tr></table><p>Starting points differ: ECG = hospital arrival | PCI = first medical contact | Fibrinolysis = hospital arrival</p>",
        why: "<p>Memory hook: <b>10, 30, 90, 120</b>. EKG 10, needle 30, balloon 90, transfer 120. And note where each clock starts: EKG and lytics from hospital arrival; PCI from first medical contact.</p>",
        q: [
          Q("Door-to-ECG goal for suspected ACS?", "≤10 minutes", ["≤30 minutes", "≤90 minutes", "≤60 minutes"], "The ECG must be obtained within 10 minutes."),
          Q("Where does the primary PCI clock start?", "First medical contact", ["Hospital arrival", "Symptom onset", "Cath lab arrival"], "PCI is timed from first medical contact."),
          Q("Giving lytics and then sending the patient to a PCI hospital is called:", "A pharmacoinvasive strategy", ["Selective invasive", "Primary PCI", "Medical therapy only"], "After lytics, transfer for a pharmacoinvasive strategy.")
        ]
      }),
      S(45, "Treat the culprit lesion first", {
        why: "<p>The <b>culprit</b> is the artery causing this infarct. Angiography finds it and primary PCI opens it first, because that's the muscle dying right now.</p>",
        q: [
          Q("What is the initial intervention in STEMI?", "PCI of the culprit (infarct-related) artery", ["PCI of every lesion first", "CABG of all vessels", "Stress test"], "Primary PCI opens the culprit artery first."),
          Q("What does 'culprit lesion' mean?", "The lesion causing the current infarct", ["The oldest plaque", "Any lesion over 50%", "The left main"], "The culprit is the infarct-related artery.")
        ]
      }),
      S(46, "What about other blockages?", {
        why: "<p>In stable patients, other significant (non-culprit) lesions should also be fixed: <b>complete revascularization</b> lowers future events (standard teaching). Timing is flexible: same procedure, or staged later in the stay or within <b>45 days</b>, depending on anatomy, complexity, kidney function and stability.</p>",
        q: [
          Q("A stable STEMI patient also has a significant non-culprit lesion. Recommendation?", "Complete revascularization is generally recommended", ["Never treat non-culprit lesions", "CABG only", "Treat only if symptoms return in 5 years"], "Complete revascularization is recommended in stable patients."),
          Q("Staged PCI of non-culprit lesions can be done within:", "The hospitalization or within 45 days", ["10 minutes", "1 year", "Only at the same time"], "Staged PCI is later during the stay or within 45 days.")
        ]
      }),
      S(47, "Exception: cardiogenic shock", {
        why: "<p>In shock, more time and contrast in the cath lab hurt: treat <b>only the culprit</b> during the first procedure. Routine non-culprit PCI in shock worsened outcomes in trials (standard teaching).</p>",
        q: [
          Q("STEMI with cardiogenic shock and multivessel disease. During the initial procedure?", "PCI of the culprit artery only", ["PCI of all lesions", "No PCI", "CABG of all vessels immediately"], "In shock, avoid routine non-culprit PCI initially."),
          Q("Why avoid non-culprit PCI in cardiogenic shock initially?", "It increases the risk of adverse outcomes", ["It is too easy", "Non-culprit lesions are never significant", "It lowers troponin"], "The slide warns of increased adverse outcomes.")
        ]
      }),
      S(48, "Summary: shock vs no shock", {
        why: "<p>Two lines to memorize: <b>No shock + multivessel = complete revascularization.</b> <b>Shock = culprit only first.</b></p>",
        q: [
          Q("STEMI without shock and multivessel CAD:", "Complete revascularization is generally recommended", ["Culprit only, never treat others", "No PCI", "Thrombolytics only"], "Without shock, aim for complete revascularization."),
          Q("STEMI with shock:", "Culprit-vessel PCI first; avoid routine multivessel PCI initially", ["Multivessel PCI immediately", "Medical therapy only", "Discharge"], "In shock, culprit first.")
        ]
      }),
      S(49, "Where is the culprit?", {
        why: "<p>No answer slide, so from the deck's rules: ST elevation in <b>V3-V4 = anterior wall = LAD</b>, the culprit. An 80% mid-RCA lesion is a significant non-culprit lesion: if the patient is not in shock, plan <b>complete revascularization</b> (same procedure or staged within 45 days).</p>",
        q: [
          Q("STEMI with ST elevation in V3 and V4. Culprit artery?", "LAD", ["RCA", "LCx", "Left main"], "V3-V4 is the anterior wall, supplied by the LAD."),
          Q("That patient also has an 80% mid-RCA stenosis and is not in shock. Plan?", "Treat it too, now or staged within 45 days", ["Ignore it", "CABG only", "Thrombolytics"], "Stable STEMI with multivessel disease gets complete revascularization.")
        ]
      }),
      S(50, "Unstable Don: what if it's a STEMI? What if he's far away?", {
        why: "<p>Again no answer slide; from the deck's rules. ST elevation in <b>II, III, aVF = inferior STEMI</b> (usually RCA, Don's known lesion). That changes everything: activate the STEMI pathway, <b>get a right-sided EKG</b> to look for RV infarct (careful with nitro), and go for primary PCI within 90 minutes. If he's in rural Minnesota <b>3 hours</b> from PCI, he can't make 120 minutes, so give <b>fibrinolytics within 30 minutes</b> (within 12 hours of onset) and then transfer.</p>",
        q: [
          Q("If Don's EKG showed ST elevation in II, III and aVF, what would he have?", "Inferior STEMI", ["Anterior STEMI", "NSTEMI", "Unstable angina"], "ST elevation in the inferior leads is an inferior STEMI."),
          Q("With an inferior STEMI, which extra test should Don get?", "A right-sided EKG", ["A stress test", "A CAC score", "A lipid panel"], "Inferior MI calls for a right-sided EKG to check for RV infarct."),
          Q("Don has a STEMI 3 hours from the nearest PCI hospital. Treatment?", "Fibrinolytics within 30 minutes, then transfer", ["Drive 3 hours for primary PCI", "Medical therapy only", "Wait 24 hours"], "PCI can't happen within 120 minutes, so lytics first.")
        ]
      })
    ],
    review: [
      Q("STEMI patient arrives at a PCI hospital at 10:00. Balloon by?", "11:30", ["10:30", "12:00", "22:00"], "The door-to-balloon goal is 90 minutes."),
      Q("STEMI at a rural hospital; transfer to PCI would take 150 minutes. Next?", "Fibrinolytics within 30 minutes, then transfer", ["Transfer for primary PCI anyway", "CABG", "Medical therapy only"], "Over 120 minutes to PCI means lytics."),
      Q("STEMI symptoms started 20 hours ago and PCI is unavailable. Are lytics generally appropriate?", "No, they are generally within 12 hours", ["Yes, any time", "Yes, up to 72 hours", "Only for NSTEMI"], "Lytics are generally used within 12 hours of onset."),
      Q("Which goal is 10 minutes?", "Door-to-ECG", ["Door-to-needle", "Door-to-balloon", "Transfer to PCI"], "The ECG must be done within 10 minutes."),
      Q("STEMI with shock and 3-vessel disease. What happens in the first cath?", "Open only the culprit artery", ["Stent all three vessels", "Nothing, go to CABG", "Thrombolytics in the cath lab"], "Shock means culprit-only PCI initially."),
      Q("Why does necrosis begin in the subendocardium?", "It is the last layer to receive blood and is compressed most", ["It has no blood supply", "It is the thickest layer", "It contains the valves"], "The inner layer is farthest from epicardial arteries and squeezed hardest (standard teaching).")
    ]
  });

  /* ---------------------------------------------------------------- LO 7a */
  los.push({
    id: "lo7a", label: "LO 7a", title: "MINOCA, Takotsubo, vasospasm, stimulants",
    objective: "Recognize special clinical presentations and complications of ACS, including MINOCA, right ventricular infarction, atypical presentations in older adults, and vasospastic angina. (Part a: MINOCA, Takotsubo, vasospasm, stimulants.)",
    slides: [
      S(51, "MINOCA: key characteristics", {
        why: "<p>MINOCA = a true MI (troponin + ischemia) but the cath shows <b>no stenosis ≥50%</b>. About <b>5-15%</b> of MIs; more common in <b>women</b> and younger patients; can look like STEMI or NSTEMI. It's a <b>working</b> diagnosis that starts a search for the cause.</p>",
        q: [
          Q("What defines MINOCA?", "MI with no coronary stenosis ≥50% in a major epicardial artery", ["MI with left main disease", "Angina with no troponin", "MI from a stent thrombosis"], "MINOCA means MI criteria without obstructive (≥50%) disease."),
          Q("In whom is MINOCA more common?", "Women and younger patients", ["Elderly men only", "Smokers only", "Children"], "The slide says more common in women and relatively younger patients."),
          Q("About what share of acute MIs are MINOCA?", "5-15%", ["50-60%", "Under 1%", "90%"], "MINOCA accounts for about 5-15% of MIs.")
        ]
      }),
      S(52, "True ischemic MINOCA causes", {
        why: "<p>These are real ischemic causes the cath can miss: <b>spasm</b> (comes and goes), <b>SCAD</b> (a tear, often in young women, standard teaching), <b>embolism or thrombosis</b> that cleared, <b>microvascular dysfunction</b> (vessels too small to see), and <b>plaque rupture/erosion</b> that left little residual narrowing.</p>",
        q: [
          Q("Which is a TRUE ischemic cause of MINOCA?", "Coronary vasospasm", ["Myocarditis", "Takotsubo", "Pulmonary embolism"], "Vasospasm is a true ischemic MINOCA cause; the others are mimics."),
          Q("What does SCAD stand for?", "Spontaneous coronary artery dissection", ["Stable coronary artery disease", "Severe chronic aortic dilation", "Sudden cardiac arrest death"], "SCAD is spontaneous coronary artery dissection (standard teaching).")
        ]
      }),
      S(53, "MINOCA mimics", {
        why: "<p>Mimics raise troponin and can cause chest pain and EKG changes without coronary ischemia: <b>myocarditis</b> (inflamed muscle), <b>Takotsubo</b> (stress cardiomyopathy), <b>PE</b> (RV strain). They must be excluded before calling it MINOCA.</p>",
        q: [
          Q("Which is a MINOCA MIMIC rather than true ischemic MINOCA?", "Myocarditis", ["Coronary vasospasm", "SCAD", "Coronary embolism"], "Myocarditis mimics MINOCA without coronary ischemia."),
          Q("Why can a pulmonary embolism mimic MINOCA?", "It can raise troponin and cause chest pain without coronary blockage", ["It always causes ST elevation in V1-V4", "It blocks the LAD", "It lowers troponin"], "PE strains the heart and raises troponin (standard teaching).")
        ]
      }),
      S(54, "Suspected MI: think MINOCA", {
        why: "<p>The flow: suspected MI → angiography. ≥50% → treat the CAD. &lt;50% → working diagnosis MINOCA → <b>cardiac MRI</b> (best at telling myocarditis and Takotsubo from infarct, standard teaching), echo, intracoronary imaging, spasm/microvascular testing → find the cause and tailor treatment.</p>",
        q: [
          Q("Angiography in a suspected MI shows only 30% stenosis. Working diagnosis?", "MINOCA (if MI criteria are met)", ["Stable angina", "No disease, discharge", "Left main disease"], "Non-obstructive arteries with MI criteria give a working diagnosis of MINOCA."),
          Q("Which test is listed for further MINOCA evaluation?", "Cardiac MRI", ["Exercise treadmill ECG only", "CAC score", "Chest x-ray only"], "Cardiac MRI, echo, intracoronary imaging and spasm testing are listed."),
          Q("Is MINOCA a final diagnosis?", "No, it is a working diagnosis that needs a cause", ["Yes, always", "Only in men", "Only after CABG"], "The slide says MINOCA is a working diagnosis, not a final one.")
        ]
      }),
      S(55, "Takotsubo cardiomyopathy", {
        why: "<p>A surge of stress hormones stuns part of the LV (classically the apex balloons, standard teaching). It mimics ACS with chest pain, EKG changes and troponin, but the arteries are open and the dysfunction is <b>transient</b>.</p>",
        q: [
          Q("What does Takotsubo cardiomyopathy cause?", "Transient regional LV systolic dysfunction", ["Permanent scar", "Coronary plaque rupture", "Valve stenosis"], "Takotsubo causes temporary regional LV dysfunction."),
          Q("A woman has chest pain, troponin rise and EKG changes after her husband's death; cath is clean. Likely?", "Takotsubo (stress) cardiomyopathy", ["STEMI from plaque rupture", "Stable angina", "Aortic dissection"], "Emotional stress with ACS-like findings and open arteries suggests Takotsubo.")
        ]
      }),
      S(56, "Vasospastic angina", {
        why: "<p>Classic patient: <b>young smoker</b>, few risk factors, chest pain <b>at rest</b>, <b>midnight to morning</b>, with <b>transient ST elevation</b> that resolves when the pain does. Always ask about <b>cocaine or meth</b>.</p>",
        q: [
          Q("When does vasospastic angina usually occur?", "At rest, midnight to morning", ["Only with heavy exercise", "After meals", "Only in the afternoon"], "Variant angina typically occurs at rest from midnight to morning."),
          Q("What EKG finding occurs during a vasospastic episode?", "Transient ST elevation that resolves after the pain", ["Permanent Q waves", "Delta waves", "Prolonged PR"], "Spasm causes transient ST elevation."),
          Q("Which history question is important in suspected vasospasm?", "Cocaine or methamphetamine use", ["Seasonal allergies", "Shoe size", "Caffeine-free diet"], "Stimulant use is an important trigger to ask about.")
        ]
      }),
      S(57, "Vasospastic angina: PANCE pearl", {
        pic: "<p>Three EKG rhythm strips showing episodes of transient ST elevation during spasm.</p>",
        why: "<p>The trap: ST elevation plus clean coronaries. Spasm, not a fixed plaque, explains it, so it's not a STEMI from plaque and not a false alarm.</p>",
        q: [
          Q("A patient has transient ST elevation during pain but no obstructive CAD on angiography. Cause?", "Coronary artery spasm", ["A fixed obstructive plaque", "Stent thrombosis", "LV aneurysm"], "Vasospasm causes ST elevation without a fixed lesion."),
          Q("Vasospastic angina is caused by:", "Coronary artery spasm rather than a fixed lesion", ["A fixed 90% plaque", "Valve disease", "Pericardial fluid"], "The PANCE pearl says spasm, not a fixed obstruction.")
        ]
      }),
      S(58, "Vasospastic angina: treatment", {
        why: "<p>Relax the artery: <b>CCBs first-line</b> (amlodipine, diltiazem, verapamil), add <b>long-acting nitrates</b> if needed, <b>SL nitro</b> for attacks, stop smoking and stimulants. <b>Avoid beta blockers</b>, especially nonselective: blocking β2 (which dilates vessels) leaves α-constriction unopposed, worsening spasm (standard teaching).</p>",
        q: [
          Q("First-line treatment for vasospastic angina?", "Calcium channel blockers", ["Beta blockers", "Statins alone", "Aspirin alone"], "CCBs are first-line for vasospasm."),
          Q("Which drug class may worsen vasospasm and is avoided?", "Beta blockers, especially nonselective", ["Calcium channel blockers", "Nitrates", "Statins"], "Beta blockers can worsen coronary spasm."),
          Q("How is an acute vasospastic episode treated?", "Sublingual nitroglycerin", ["Thrombolytics", "Emergent CABG", "IV propranolol"], "SL nitro relieves acute spasm.")
        ]
      }),
      S(59, "Stimulant-associated cardiac ischemia", {
        why: "<p>Cocaine and meth flood the body with sympathetic drive: faster HR, higher BP, more demand, plus spasm and clotting. Treat the drive: <b>benzodiazepines</b> calm it, <b>nitrates</b> and <b>CCBs</b> relax spasm. Beta blockers are generally avoided acutely (unopposed alpha, standard teaching).</p>",
        q: [
          Q("A cocaine user has chest pain, HR 130 and BP 190/110. First drug to reduce sympathetic stimulation?", "A benzodiazepine", ["A nonselective beta blocker", "A thrombolytic", "Morphine only"], "Benzodiazepines reduce the sympathetic surge."),
          Q("How do cocaine and meth cause ischemia?", "More sympathetic drive, vasospasm and thrombosis", ["They lower heart rate", "They dilate coronaries", "They lower demand"], "Stimulants raise demand and cause spasm and clotting."),
          Q("Which drug treats stimulant-induced coronary vasospasm?", "Nitrates", ["Propranolol", "Epinephrine", "Pseudoephedrine"], "Nitrates relax coronary vasospasm.")
        ]
      })
    ],
    review: [
      Q("A 32-year-old woman has an MI; angiography shows normal arteries; MRI shows myocardial inflammation. Diagnosis?", "Myocarditis (a MINOCA mimic)", ["True ischemic MINOCA from SCAD", "STEMI from plaque", "Stable angina"], "MRI inflammation points to myocarditis, a mimic."),
      Q("A 28-year-old smoker wakes at 4 am with chest pain and transient ST elevation. Long-term treatment?", "A calcium channel blocker", ["A nonselective beta blocker", "Thrombolytics", "CABG"], "Vasospastic angina is treated first-line with CCBs."),
      Q("Which group is MORE likely to have MINOCA?", "Younger women", ["Older men with diabetes", "Patients after CABG", "Patients with left main disease"], "MINOCA is more common in women and younger patients."),
      Q("A meth user with chest pain is agitated and tachycardic. Best first step for the sympathetic surge?", "Benzodiazepine", ["IV metoprolol", "Thrombolytics", "Oxygen at 15 L"], "Benzodiazepines reduce stimulant-driven sympathetic activity."),
      Q("Which test best helps find the cause in MINOCA?", "Cardiac MRI", ["Holter monitor", "CAC score", "Treadmill test"], "Cardiac MRI separates myocarditis and Takotsubo from infarction (standard teaching).")
    ]
  });

  /* ---------------------------------------------------------------- LO 7b */
  los.push({
    id: "lo7b", label: "LO 7b", title: "RV infarction and the older patient",
    objective: "Recognize special clinical presentations and complications of ACS, including MINOCA, right ventricular infarction, atypical presentations in older adults, and vasospastic angina. (Part b: RV infarction and older adults.)",
    slides: [
      S(60, "Right ventricular infarction", {
        why: "<p>Usually a <b>proximal RCA</b> occlusion, so it comes with an <b>inferior MI</b>. The triad makes sense as a chain: weak RV → less blood pushed to the lungs → less LV filling → low output → <b>hypotension</b>; blood backs up on the right → <b>JVD</b>; nothing backs up into the lungs → <b>clear lungs</b>.</p>",
        q: [
          Q("What is the classic triad of RV infarction?", "Hypotension, JVD and clear lungs", ["Hypertension, rales and bradycardia", "Fever, rash and murmur", "Hypotension, rales and wheezing"], "RV infarct causes hypotension, JVD and clear lungs."),
          Q("RV infarction usually comes with which MI?", "Inferior MI", ["Anterior MI", "Lateral MI", "Septal MI"], "Proximal RCA occlusion causes inferior MI with RV involvement."),
          Q("Why are the lungs clear in isolated RV infarction?", "The failing RV sends less blood to the lungs, so there's no pulmonary edema", ["The LV pumps harder", "Oxygen is given", "The patient is dehydrated"], "RV failure doesn't back up into the lungs.")
        ]
      }),
      S(61, "RV infarction: preload and the right-sided EKG", {
        why: "<p>The LV can only pump what the RV delivers, so BP depends on <b>preload</b>. Rule: <b>get a right-sided EKG on every inferior MI</b> and look for ST elevation in the right precordial leads.</p>",
        q: [
          Q("How is RV infarction diagnosed?", "ST elevation in right precordial leads on a right-sided EKG", ["ST depression in V5-V6", "A normal standard EKG", "Troponin alone"], "A right-sided EKG shows ST elevation over the RV."),
          Q("Which patients should get a right-sided EKG?", "All patients with an inferior MI", ["All anterior MIs only", "Only patients over 80", "Only stable angina"], "The slide says obtain a right-sided EKG on all inferior MIs.")
        ]
      }),
      S(62, "Standard 12-lead vs right-sided ECG", {
        why: "<p>The standard V1-V6 look mostly at the LV, so they can miss the RV. Moving the chest leads to the right side mirrors them. <b>V4R</b> (5th intercostal space, right midclavicular line) looks straight at the RV free wall.</p>",
        q: [
          Q("Which right-sided lead is most important for RV infarction?", "V4R", ["V1", "aVL", "V6"], "V4R directly evaluates the RV free wall."),
          Q("Why can a standard 12-lead miss an RV infarct?", "Its chest leads mainly view the left ventricle", ["It has no chest leads", "It only shows rhythm", "RV infarcts cause no ST changes"], "V1-V6 are positioned over the LV.")
        ]
      }),
      S(63, "Lead placement: standard vs right-sided", {
        pic: "<p><b>Standard 12-Lead ECG Electrode Placement</b> (V1-V6 across the left chest) vs <b>Right-Sided ECG Lead Placement</b>: V2R right 2nd intercostal space (parasternal); V3R between V2R and V4R; V4R 5th intercostal space, right midclavicular line; V5R right anterior axillary line, same horizontal level as V4R; V6R right midaxillary line, same horizontal level as V4R. <b>Key Points</b>: obtain right-sided leads when right ventricular (RV) infarction is suspected (e.g., inferior STEMI); V4R is the most clinically useful lead; ST elevation in V4R supports RV involvement.</p>",
        why: "<p>Right-sided leads are the left-sided positions flipped across the sternum. Only V4R really needs memorizing: <b>5th intercostal space, right midclavicular line</b>.</p>",
        q: [
          Q("Where is V4R placed?", "5th intercostal space, right midclavicular line", ["2nd intercostal space, left sternal border", "Left midaxillary line", "On the back"], "V4R mirrors V4 on the right side."),
          Q("ST elevation in V4R supports:", "RV involvement", ["Anterior MI", "Pericarditis", "LBBB"], "ST elevation in V4R points to RV infarction.")
        ]
      }),
      S(64, "Right-sided EKG: inferior + RV infarction", {
        pic: "<p>Right-sided EKG with a chest diagram of right-sided lead positions. Caption: <b>Acute inferior and right ventricular myocardial infarction.</b> Electrocardiogram shows Q waves and prominent doming ST segment elevation in II, III, and aVF, findings which are characteristic of an acute inferior myocardial infarction. ST elevation in the right precordial leads (V4R, V5R, and V6R) indicates right ventricular involvement as well. The ST depressions in leads I and aVL represent reciprocal changes. Courtesy of Ary Goldberger, MD.</p>",
        why: "<p>Read it as three findings: inferior STE (II, III, aVF) = inferior MI; STE in V4R-V6R = RV too; ST depression in I and aVL = reciprocal changes.</p>",
        q: [
          Q("On the example, ST elevation in V4R-V6R indicates:", "Right ventricular involvement", ["Lateral MI", "Normal variant", "Pericarditis"], "Right precordial ST elevation means RV infarction."),
          Q("On the example, ST depression in I and aVL represents:", "Reciprocal changes", ["A second MI", "Digoxin effect", "LVH"], "I and aVL mirror the inferior ST elevation.")
        ]
      }),
      S(65, "RV infarction: management differences", {
        why: "<p>Since BP lives on preload, <b>don't take preload away</b> (no nitro, no diuretics); <b>add preload</b> with normal saline boluses.</p>",
        q: [
          Q("Which drugs worsen hypotension in RV infarction?", "Nitroglycerin and diuretics", ["Normal saline", "Aspirin", "Heparin"], "Vasodilators and diuretics drop preload and BP."),
          Q("How is hypotension treated in RV infarction?", "IV normal saline boluses", ["Furosemide", "Nitroglycerin drip", "Fluid restriction"], "Volume expands preload to raise BP.")
        ]
      }),
      S(66, "Recognize RV infarction", {
        why: "<p>The one-liner: <b>Inferior STEMI + hypotension + JVD + clear lungs = RV infarct</b> → V4R, avoid nitrates/diuretics, cautious fluids with reassessment, and urgent reperfusion (usually PCI).</p>",
        q: [
          Q("Inferior STEMI with BP 80/50, JVD and clear lungs. First thought?", "RV infarction", ["Left heart failure", "Tamponade from free-wall rupture only", "Pulmonary edema"], "That combination is the classic RV infarct picture."),
          Q("What is essential in RV infarction besides fluids?", "Urgent reperfusion, usually PCI", ["Diuresis", "Nitroglycerin drip", "Waiting 24 hours"], "Opening the artery is essential.")
        ]
      }),
      S(67, "CAD in the elderly", {
        why: "<p>Older adults have most MIs (<b>60-65%</b> are ≥65) and most ACS deaths. They more often have <b>NSTEMI</b> and may have <b>no chest pain</b>: instead dyspnea, syncope, weakness, fatigue or delirium, which delays care. They also have more HF, shock, arrhythmias, bleeding and AKI.</p>",
        q: [
          Q("About what share of MIs occur in patients 65 or older?", "60-65%", ["10-15%", "25%", "95%"], "Approximately 60-65% of MIs occur at 65 or older."),
          Q("Which ACS type are older adults MORE likely to have?", "NSTEMI", ["STEMI", "Vasospastic angina", "MINOCA"], "Older adults more often present with NSTEMI."),
          Q("An 84-year-old presents with new confusion and weakness, no chest pain. Can it be an MI?", "Yes, delirium can be the presentation", ["No, MI always causes chest pain", "Only in women", "Only with ST elevation"], "Older adults may present with delirium, weakness, dyspnea or syncope.")
        ]
      })
    ],
    review: [
      Q("Inferior STEMI patient's BP drops after SL nitro; JVD present, lungs clear. Next?", "IV normal saline bolus and right-sided EKG", ["More nitroglycerin", "IV furosemide", "Morphine"], "This is RV infarction: give volume and confirm with V4R."),
      Q("Which artery is usually blocked in RV infarction?", "Proximal RCA", ["LAD", "LCx", "Left main"], "RV infarct usually comes from proximal RCA occlusion."),
      Q("Why are older adults with MI often diagnosed late?", "They often present without classic chest pain", ["They never have troponin rises", "They always have STEMI", "They have no EKG changes"], "Atypical presentations delay recognition."),
      Q("RV infarct: hypotension comes from what chain?", "RV fails → less blood to lungs → less LV preload → low output", ["LV fails → pulmonary edema → hypoxia", "Valve rupture → MR", "Pericardial fluid → tamponade"], "The slide's chain explains hypotension from low LV preload."),
      Q("Which complications are MORE likely after MI in older adults?", "Heart failure, shock, arrhythmias, bleeding and AKI", ["None", "Only GERD", "Only anxiety"], "The slide lists increased HF, shock, arrhythmias, bleeding and AKI.")
    ]
  });

  /* ---------------------------------------------------------------- LO 8 */
  los.push({
    id: "lo8", label: "LO 8", title: "Complications of MI",
    objective: "Identify major complications of acute myocardial infarction, including functional, mechanical, and electrical complications, and recognize their characteristic clinical manifestations.",
    slides: [
      S(68, "Complications of AMI: the table", {
        why: "<p>Three buckets. <b>Functional</b> (pump problems): LV failure → ACEi; RV failure → fluids, no nitro/diuretics; cardiogenic shock. <b>Mechanical</b> (something tears): free wall → tamponade/death; septum → VSD with harsh holosystolic murmur; papillary muscle → acute MR with pulmonary edema. <b>Electrical</b>: brady/blocks → pacer; tachy → amiodarone or cardioversion; BBB → maybe pacer. Mechanical ruptures classically happen 3-7 days after MI as the dead muscle softens (standard teaching).</p>",
        q: [
          Q("Which complication is MECHANICAL?", "Papillary muscle rupture", ["Cardiogenic shock", "Complete heart block", "LV failure"], "Ruptures of the wall, septum or papillary muscle are mechanical."),
          Q("Which treatment goes with LV failure after MI on the table?", "ACE inhibitor", ["Fluid boluses", "Pacemaker", "Thrombolytics"], "The table pairs LV failure with an ACE inhibitor."),
          Q("Which complication carries HIGH mortality with hemopericardium?", "Free-wall rupture", ["Bundle branch block", "Sinus bradycardia", "LV failure"], "Free-wall rupture bleeds into the pericardium and is often fatal.")
        ]
      }),
      S(69, "Functional complications", {
        why: "<p>Know the opposite pictures. <b>LV failure</b>: wet lungs (congestion, edema) → diuretics and GDMT. <b>RV failure</b>: low BP, high JVP, <b>dry</b> lungs → careful fluids, no nitrates or diuretics. <b>Cardiogenic shock</b>: the pump can't perfuse the body → urgent revascularization.</p>",
        q: [
          Q("After MI, a patient has rales and pulmonary edema. Which complication?", "LV failure", ["RV failure", "Free-wall rupture", "Complete heart block"], "LV failure backs up into the lungs."),
          Q("Essential treatment for cardiogenic shock after MI?", "Urgent revascularization", ["Diuresis only", "Discharge", "Beta blocker IV push"], "The slide says urgent revascularization is essential."),
          Q("LV failure after MI is treated with diuretics when congested plus:", "Guideline-directed HF therapy (BB, ACEi)", ["Normal saline boluses", "Thrombolytics", "Nothing else"], "GDMT such as beta blockers and ACEi is used.")
        ]
      }),
      S(70, "Mechanical complications", {
        why: "<p>Match the clue: <b>sudden PEA/death with tamponade</b> → free-wall rupture. <b>New harsh holosystolic murmur + O2 step-up</b> (oxygen-rich LV blood leaks into the RV, so RV blood sat is higher than the RA) → VSD. <b>New murmur + sudden pulmonary edema/shock</b> → papillary muscle rupture with acute MR.</p>",
        q: [
          Q("Day 4 after MI: new harsh holosystolic murmur and an oxygen saturation step-up in the RV. Diagnosis?", "Ventricular septal rupture", ["Papillary muscle rupture", "Free-wall rupture", "Pericarditis"], "A left-to-right shunt causes an O2 step-up in the RV."),
          Q("After MI, sudden flash pulmonary edema and shock with a new murmur of MR. Diagnosis?", "Papillary muscle rupture", ["VSD", "RV infarct", "Sinus bradycardia"], "Papillary muscle rupture causes acute severe MR."),
          Q("LV free-wall rupture leads to:", "Hemopericardium, tamponade, PEA or sudden death", ["Clear lungs and JVD only", "Bradycardia only", "A slow MR murmur"], "Blood fills the pericardium and stops the heart.")
        ]
      }),
      S(71, "Electrical complications", {
        why: "<p>Inferior MI → <b>brady and AV block</b>, because the RCA usually feeds the AV node (standard teaching). Treat symptomatic brady with <b>atropine</b>, then <b>temporary pacing</b> if refractory; permanent pacer only if it persists after waiting. <b>Pulseless VT/VF → defibrillate</b>; <b>unstable VT with a pulse → synchronized cardioversion</b>. A new BBB signals big injury but doesn't automatically mean a pacer.</p>",
        q: [
          Q("Which MI location commonly causes sinus bradycardia and AV block?", "Inferior MI", ["Anterior MI", "Lateral MI", "Septal MI only"], "Bradycardia and AV block are particularly common with inferior MI."),
          Q("Symptomatic bradycardia after MI. First drug?", "Atropine", ["Amiodarone", "Metoprolol", "Adenosine"], "Atropine may be used for symptomatic bradycardia."),
          Q("Pulseless VT after MI. Treatment?", "Defibrillation", ["Synchronized cardioversion", "Atropine", "Observation"], "Pulseless VT/VF is defibrillated."),
          Q("A new isolated bundle branch block after MI. Pacemaker automatically?", "No, not automatically", ["Yes, always", "Yes, within 1 hour", "Only if the patient is over 50"], "Isolated new BBB does not automatically require a pacemaker.")
        ]
      })
    ],
    review: [
      Q("Unstable VT with a pulse after MI. Treatment?", "Synchronized cardioversion", ["Defibrillation", "Atropine", "Observation"], "Unstable VT with a pulse gets synchronized cardioversion."),
      Q("Which complication causes clear lungs, JVD and hypotension?", "RV failure", ["LV failure", "Papillary muscle rupture", "VSD with pulmonary edema"], "RV failure gives the dry-lung, high-JVD, low-BP picture."),
      Q("Which mechanical complication is most likely to cause sudden PEA arrest?", "Free-wall rupture with tamponade", ["VSD", "Papillary muscle rupture", "Bundle branch block"], "Hemopericardium from free-wall rupture leads to PEA."),
      Q("Complete heart block persists for days after an MI. Next step?", "Permanent pacemaker after an appropriate waiting period", ["Atropine forever", "No treatment", "Amiodarone"], "Persistent significant conduction disease needs a permanent pacer."),
      Q("When do mechanical ruptures classically occur after MI?", "About 3-7 days later", ["Within minutes", "After 1 year", "Never"], "The dead muscle is softest a few days after MI (standard teaching)."),
      Q("Which complication is ELECTRICAL?", "Ventricular tachycardia", ["Papillary muscle rupture", "Cardiogenic shock", "Free-wall rupture"], "Arrhythmias and blocks are electrical complications.")
    ]
  });

  /* ---------------------------------------------------------------- LO 9 */
  los.push({
    id: "lo9", label: "LO 9", title: "After the cath: Don's PCI and care",
    objective: "Describe the immediate post-MI and post-PCI management of patients, including monitoring for complications, assessment of vascular access sites, and discharge planning.",
    slides: [
      S(72, "Unstable Don: the cath", {
        why: "<p>Don's culprit is a <b>99% mid-LAD</b> (anterior wall), treated with a DES. He also has an <b>80% RCA</b> non-culprit lesion, which raises the next question.</p>",
        q: [
          Q("What was Don's culprit lesion?", "A 99% mid-LAD occlusion", ["An 80% RCA stenosis", "Left main disease", "Normal arteries"], "The 99% LAD lesion was stented as the culprit."),
          Q("What stent did Don receive?", "A drug-eluting stent", ["A bare-metal stent", "A bypass graft", "No stent"], "A DES was placed in the LAD.")
        ]
      }),
      S(73, "Unstable Don: what about the RCA?", {
        why: "<p>Answer <b>C</b>: the RCA may be treated during the initial procedure or as a staged PCI, depending on clinical and procedural factors. That's the complete-revascularization rule for a stable patient without shock.</p>",
        q: [
          Q("How should Don's remaining 80% RCA lesion be managed?", "PCI now or staged, depending on clinical and procedural factors", ["No further treatment needed", "It must be done in the same procedure", "RCA PCI is contraindicated after STEMI"], "Stable multivessel STEMI gets complete revascularization, now or staged."),
          Q("If Don had been in cardiogenic shock, what would change?", "Culprit-only PCI at first", ["PCI of every vessel immediately", "No PCI at all", "Thrombolytics in the cath lab"], "In shock, avoid routine non-culprit PCI initially.")
        ]
      }),
      S(74, "Unstable Don: post-MI care and discharge meds", {
        why: "<p>No answer slide, so from slides 80-81: with <b>EF 55%</b> Don goes home on <b>DAPT</b> (aspirin + P2Y12 for 12 months), a <b>high-intensity statin</b>, a <b>beta blocker</b>, an <b>ACE inhibitor/ARB</b> (his anterior STEMI is a listed reason), <b>SL nitro PRN</b> (standard teaching), plus cardiac rehab referral, smoking cessation and risk-factor control.</p>",
        q: [
          Q("Don's EF is 55% after his LAD STEMI. Which regimen fits the deck?", "DAPT, high-intensity statin, beta blocker and ACEi/ARB", ["Aspirin alone", "Warfarin and digoxin", "No medicines if EF is normal"], "Post-ACS care includes DAPT, high-intensity statin, BB and ACEi/ARB (anterior STEMI)."),
          Q("Why does Don have a reason for an ACEi/ARB even with EF 55%?", "He had an anterior STEMI", ["He has normal BP", "He is under 60", "ACEi lowers LDL"], "Anterior STEMI is a listed reason for ACEi/ARB."),
          Q("How long should Don take DAPT if his bleeding risk is not high?", "About 12 months", ["1 week", "1 month", "Lifelong P2Y12 alone"], "DAPT is generally 12 months after ACS.")
        ]
      }),
      S(75, "Immediately after PCI", {
        why: "<p>What can go wrong right after PCI drives the checklist: arrhythmias and re-ischemia (<b>telemetry</b>), bleeding or hematoma at the <b>access site</b>, a clot or dissection cutting off the limb (<b>distal pulses, color, temperature, sensation</b>), and contrast kidney injury (<b>renal function</b>).</p>",
        q: [
          Q("After PCI, why check distal pulses, color, temperature and sensation?", "To assess distal circulation beyond the access site", ["To measure troponin", "To check for MR", "To dose heparin"], "The slide lists assessing distal circulation."),
          Q("After PCI, why monitor renal function?", "Because contrast was given", ["Because stents damage the kidneys", "To check statin dose", "Kidneys don't matter after PCI"], "Contrast can cause kidney injury."),
          Q("What monitoring does every patient need right after PCI?", "Continuous cardiac monitoring (telemetry)", ["None", "Weekly EKG only", "Holter in 3 months"], "Telemetry watches for arrhythmias and recurrent ischemia.")
        ]
      }),
      S(76, "Discharge planning", {
        why: "<p>Uncomplicated STEMI patients can go home within <b>48-72 hours</b> if stable, but only with a plan for any remaining disease (like Don's RCA).</p>",
        q: [
          Q("When can selected uncomplicated STEMI patients be discharged?", "Within 48-72 hours if stable", ["Same day", "After 3 weeks", "After 3 months"], "Uncomplicated STEMIs may go home in 48-72 hours."),
          Q("What must be established before Don goes home?", "A plan for his remaining RCA disease", ["A CABG date regardless", "A repeat cath in 1 week always", "Nothing"], "The plan must address any remaining coronary disease.")
        ]
      })
    ],
    review: [
      Q("Hours after femoral PCI, a patient's foot is cool and pale with weak pulses. Which assessment caught this?", "Distal circulation check", ["Renal function", "Telemetry", "Lipid panel"], "Checking pulses, color and temperature finds limb ischemia."),
      Q("A stable patient 2 days after uncomplicated STEMI PCI. Can he go home?", "Yes, if stable with a plan for remaining disease", ["No, minimum 3 weeks", "No, he needs CABG first", "Only after a stress test"], "Uncomplicated STEMI may be discharged in 48-72 hours."),
      Q("After PCI, creatinine rises from 1.0 to 1.8. Cause to consider?", "Contrast-associated kidney injury", ["Stent thrombosis", "Vasospasm", "Normal finding"], "Renal function is watched because of contrast."),
      Q("Don's post-STEMI regimen should include which lipid therapy?", "High-intensity statin", ["No statin if LDL under 100", "Fish oil only", "Niacin"], "Every ACS patient gets a high-intensity statin.")
    ]
  });

  /* ---------------------------------------------------------------- LO 10 */
  los.push({
    id: "lo10", label: "LO 10", title: "Cardiac rehab and secondary prevention",
    objective: "Develop a secondary prevention plan following myocardial infarction, including pharmacologic therapy, lifestyle modification, lipid management, smoking cessation, and cardiac rehabilitation.",
    slides: [
      S(77, "Cardiac rehabilitation", {
        why: "<p>Rehab is for <b>MI, PCI with stent, CABG, valve surgery and HFrEF</b>. It lowers cardiac and all-cause mortality and improves quality of life, yet <b>fewer than 30%</b> of eligible patients go. Referring is your job.</p>",
        q: [
          Q("Which patient is eligible for cardiac rehab?", "A patient after CABG", ["A healthy 30-year-old", "A patient with GERD", "A patient with a sprained ankle"], "MI, PCI, CABG, valve surgery and HFrEF qualify."),
          Q("What share of eligible US patients participate in cardiac rehab?", "Fewer than 30%", ["About 90%", "About 70%", "All of them"], "Fewer than 30% participate."),
          Q("What does cardiac rehab reduce?", "Cardiac and all-cause mortality", ["Only weight", "Nothing proven", "Only cholesterol"], "Rehab reduces cardiac and all-cause mortality.")
        ]
      }),
      S(78, "The three parts of cardiac rehab", {
        why: "<p>Three equal parts: <b>exercise</b>, <b>stress reduction</b>, <b>heart-healthy education</b>. Usually <b>36 sessions over 3 months</b>, with nutrition, lipid, diabetes, BP, smoking and psychological support.</p>",
        q: [
          Q("How many cardiac rehab sessions are patients normally asked to attend?", "36 sessions over 3 months", ["3 sessions over 1 week", "100 sessions over 1 year", "1 session"], "The standard is 36 sessions over three months."),
          Q("Which is one of the three equally important parts of cardiac rehab?", "Counseling to reduce stress", ["Thrombolytic therapy", "Cardiac cath", "Antibiotics"], "Exercise, stress counseling and heart-healthy education are the three parts.")
        ]
      }),
      S(79, "Barriers to cardiac rehab", {
        why: "<p>Three barrier groups to spot and solve: <b>cost/coverage</b>, <b>access</b> (transportation, distance, schedule) and <b>patient factors</b> (awareness, responsibilities, difficulty changing). Home-based or hybrid programs can help (standard teaching).</p>",
        q: [
          Q("A patient lives 90 minutes from the nearest rehab center. Which barrier is this?", "Access", ["Cost", "Patient awareness", "Medication side effect"], "Distance and transportation are access barriers."),
          Q("Which is a PATIENT-factor barrier to rehab?", "Competing responsibilities", ["Insurance coverage", "Distance", "Program availability"], "Awareness, competing responsibilities and difficulty changing are patient factors.")
        ]
      }),
      S(80, "Core secondary prevention after ACS", {
        why: "<p>The core five: <b>lifestyle/education</b>, <b>DAPT ~12 months</b>, <b>high-intensity statin</b> (+ nonstatin if needed), <b>beta blocker</b> (especially low EF, HF, angina, arrhythmias), <b>ACEi/ARB</b> (especially EF ≤40%, HTN, diabetes, anterior STEMI).</p>",
        q: [
          Q("After ACS, how long is DAPT generally given if bleeding risk is not high?", "12 months", ["1 month", "3 years", "Lifelong"], "DAPT is generally 12 months after ACS."),
          Q("When is an ACEi/ARB especially indicated after ACS?", "LVEF ≤40%, hypertension, diabetes or anterior STEMI", ["Only with asthma", "Only with low BP", "Never"], "Those are the listed indications."),
          Q("After ACS, LDL isn't low enough on a high-intensity statin. Next?", "Add nonstatin therapy", ["Stop the statin", "Lower the statin dose", "Nothing"], "Nonstatin therapy is added for further LDL lowering.")
        ]
      }),
      S(81, "Additional secondary prevention measures", {
        why: "<p>The rest of the plan: <b>ezetimibe</b> or other nonstatin as needed, <b>rehab</b>, <b>smoking cessation</b>, weight and diet, BP to goal, diabetes (consider <b>GLP-1 RA or SGLT2i</b>), HF therapy if present. Anticoagulation only for a reason like <b>AF or LV thrombus</b>, not routinely.</p>",
        q: [
          Q("Which nonstatin is named for added LDL lowering after ACS?", "Ezetimibe", ["Niacin", "Warfarin", "Digoxin"], "Ezetimibe is added as needed."),
          Q("Should every patient get anticoagulation after MI?", "No, only for AF or LV thrombus", ["Yes, always", "Yes, for 1 year", "Only if under 50"], "Anticoagulation is not routine after every MI."),
          Q("A post-MI patient with type 2 diabetes. Which drug classes should be considered?", "GLP-1 RA or SGLT2 inhibitor with CV benefit", ["Sulfonylurea only", "Insulin only", "None"], "These agents have cardiovascular benefit in diabetes with ASCVD.")
        ]
      })
    ],
    review: [
      Q("A post-MI patient has EF 35%. Which two drugs are especially important?", "Beta blocker and ACEi/ARB", ["Warfarin and digoxin", "Nitrates and CCB", "Fish oil and niacin"], "Reduced EF strongly favors a beta blocker and ACEi/ARB."),
      Q("A post-MI patient develops AF. What is added?", "Anticoagulation", ["Nothing", "A second statin", "Thrombolytics"], "AF is an indication for anticoagulation."),
      Q("A post-MI patient says rehab is too far away. What should you do?", "Address the access barrier and keep encouraging rehab", ["Tell him rehab isn't important", "Skip it", "Only give medications"], "Rehab cuts mortality, so solving barriers matters."),
      Q("Which statin intensity is used after ACS?", "High intensity", ["Low intensity", "Moderate intensity", "None if LDL under 70"], "High-intensity statin therapy is core secondary prevention."),
      Q("What are the three parts of cardiac rehab?", "Exercise, stress reduction and heart-healthy education", ["Cath, stent and CABG", "Aspirin, statin and BB", "Diet, sleep and vitamins"], "Rehab has exercise, stress counseling and education.")
    ]
  });

  SlideStudy.lecture({
    id: "cad-part-4",
    title: "CAD Part IV: ACS Management",
    short: "CAD IV",
    by: "Stager",
    img: "images/cad4-slides/slide-{nn}.webp",
    los: los
  });
})();
