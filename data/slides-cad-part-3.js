/* CAD Part III (Stager): chest pain presentation, evaluation and risk stratification, slide by slide.
   Slide text: data/slide-text-cad-part-3.js (generated). Pictures: images/cad3-slides/.
   Anything not on the slides is marked "(standard teaching)". Question ids "cad-part-3|s<slide>|<i>", "cad-part-3|<lo>|r|<i>": only append. */
(function () {
  "use strict";
  var S = SlideStudy.S, Q = SlideStudy.Q;
  var los = [];

  /* ---------------------------------------------------------------- LO 1 */
  los.push({
    id: "lo1", label: "LO 1", title: "How ischemia presents",
    objective: "Describe the clinical presentation of myocardial ischemia, including typical symptoms, anginal equivalents, associated symptoms, and differences in presentation among women, men, and older adults.",
    slides: [
      S(1, "Title: Chest pain presentation, evaluation and risk stratification", {
        why: "<p>CAD I was what plaque is and how we test for it. CAD III is the patient in front of you with chest pain: is it the heart, how sick are they, and what happens next (office, ED, cath lab, surgery).</p>"
      }),
      S(2, "Chest pain", {
        why: "<p>Most chest pain is not cardiac, but CAD is the #1 killer, so the job is triage: find the few dangerous causes (ACS, dissection, PE, tension pneumothorax) without testing everyone.</p>",
        q: [
          Q("Where does chest pain rank as a reason adults go to the ED in the US?", "2nd most common", ["Most common", "10th most common", "It is rare in the ED"], "The slide says chest pain is the 2nd most common reason for ED visits."),
          Q("About how many US deaths per year does CAD cause?", "More than 365,000", ["About 36,500", "About 3.6 million", "About 18.2 million"], "CAD causes >365,000 deaths a year; 18.2 million is how many adults have it."),
          Q("What is the key task with every chest pain patient?", "Distinguishing serious from benign causes", ["Ordering a cath for everyone", "Assuming it is noncardiac", "Treating it as GERD first"], "The slide calls telling serious from benign causes imperative.")
        ]
      }),
      S(3, "Angina pectoris", {
        why: "<p>Patients often say 'it's not pain, it's pressure', so ask about pressure, tightness or heaviness, not just 'pain'. Silent ischemia happens in diabetics (autonomic neuropathy dulls the visceral pain nerves, standard teaching) and the elderly.</p>",
        q: [
          Q("Angina pectoris is chest discomfort caused by:", "Myocardial ischemia", ["Pericardial inflammation", "Esophageal spasm", "Pleural irritation"], "Angina is by definition ischemic chest discomfort."),
          Q("How do patients typically describe angina?", "Retrosternal pressure, tightness or heaviness, not always 'pain'", ["Sharp, stabbing pain at one point", "Pain only on breathing in", "Burning after meals only"], "The slide stresses pressure, tightness or heaviness."),
          Q("In which patients can ischemia be 'silent'?", "Elderly and diabetic patients", ["Young athletes", "Pregnant women", "Smokers only"], "The slide names elderly and diabetic patients.")
        ]
      }),
      S(4, "Types of angina", {
        why: "<p>Three mechanisms, three patterns. <b>Stable</b>: fixed plaque + higher demand → the inner layer (subendocardium, the last to get blood) starves → ST depression. <b>Unstable</b>: a clot on a ruptured plaque → rest pain. <b>Prinzmetal</b>: the whole artery clamps down in spasm → the full wall thickness (transmural) starves → ST <i>elevation</i>, even at rest, in someone who may have no plaque.</p>",
        q: [
          Q("Which angina causes transmural ischemia with ST elevation and can occur at rest?", "Vasospastic (Prinzmetal) angina", ["Stable angina", "Unstable angina", "Microvascular angina"], "Spasm closes the artery completely, causing transmural ischemia and ST elevation."),
          Q("Stable angina is caused by:", "A fixed atherosclerotic obstruction with subendocardial ischemia", ["Plaque rupture with thrombosis", "Coronary spasm", "Septic emboli"], "A fixed narrowing limits flow when demand rises, starving the subendocardium."),
          Q("Angina at rest or with minimal exertion from plaque rupture with thrombosis is:", "Unstable angina, a medical emergency", ["Stable angina", "Prinzmetal angina", "Noncardiac chest pain"], "Rest pain from a fresh clot is unstable angina.")
        ]
      }),
      S(5, "The four features of ischemic chest pain", {
        pic: "<ul><li><b>Chest discomfort</b>: pressure, tightness, heaviness, squeezing, or aching; often substernal, but may occur elsewhere in the chest.</li><li><b>Radiation</b>: one or both arms, shoulders, neck, jaw, or back.</li><li><b>Triggers/Pattern</b>: symptoms worsen with exertion or emotional stress, relieved with rest or NTG. <b><i>New, worsening, prolonged, or resting symptoms raise concern for ACS.</i></b></li><li><b>Associated symptoms</b>: dyspnea, diaphoresis, nausea, lightheadedness or unusual fatigue.</li></ul>",
        why: "<p>Use these four boxes as your checklist when you take the history. The bold line is the key switch: anything <b>new, worsening, prolonged, or at rest</b> moves you from 'stable angina' to 'possible ACS'.</p>",
        q: [
          Q("Which pattern raises concern for ACS rather than stable angina?", "New, worsening, prolonged or resting symptoms", ["Symptoms only with heavy exertion, relieved by rest", "The same symptoms for 2 years", "Symptoms relieved within 2 minutes of rest"], "The slide marks new, worsening, prolonged or resting symptoms as ACS warnings."),
          Q("Where can ischemic chest discomfort radiate?", "One or both arms, shoulders, neck, jaw or back", ["Only the left arm", "Only below the umbilicus", "Only to the legs"], "Radiation can go to either arm, the shoulders, neck, jaw or back."),
          Q("Which is listed as an associated symptom?", "Unusual fatigue", ["Fever", "Productive cough", "Rash"], "Dyspnea, diaphoresis, nausea, lightheadedness and unusual fatigue are the associated symptoms.")
        ]
      }),
      S(6, "Other symptoms that may suggest CAD", {
        why: "<p>Dyspnea, palpitations and weight gain/edema are clues that ischemia may be stiffening or weakening the heart (heart failure) or causing arrhythmias. The scariest line: symptoms don't match disease severity, and the first symptom can be sudden death (ischemia → ventricular fibrillation).</p>",
        q: [
          Q("Which history finding may suggest CAD even without chest pain?", "Progressively worsening dyspnea or exercise intolerance", ["Chronic cough for years", "Joint pain", "Headache"], "Worsening dyspnea or exercise intolerance is on the slide's list."),
          Q("What can be the FIRST symptom of CAD?", "Sudden cardiac death", ["Claudication only", "A rash", "Weight loss"], "The slide warns that sudden cardiac death is sometimes the first symptom."),
          Q("Do symptoms reliably match how severe the CAD is?", "No, symptoms don't reliably correspond to the level of disease", ["Yes, always", "Only in men", "Only in diabetics"], "The slide says symptoms do not reliably correspond to disease level.")
        ]
      }),
      S(7, "Anginal equivalents", {
        why: "<p>An anginal equivalent is ischemia speaking a different language. Dyspnea is the most common one (an ischemic, stiff LV raises filling pressure, which backs up into the lungs, standard teaching). The clue is the pattern: it comes with exertion and goes with rest, just like angina.</p>",
        q: [
          Q("An anginal equivalent is:", "A symptom other than chest discomfort that may reflect myocardial ischemia", ["Chest pain from GERD", "Atypical chest pain that is never cardiac", "A drug that relieves angina"], "That is the slide's definition."),
          Q("Which is a common anginal equivalent?", "Dyspnea", ["Fever", "Diarrhea", "Hematuria"], "Dyspnea heads the slide's list of anginal equivalents."),
          Q("Which of these is NOT listed as an anginal equivalent?", "Pleuritic chest pain", ["Unusual fatigue", "Exertional lightheadedness", "Upper abdominal discomfort"], "Pleuritic pain points away from ischemia.")
        ]
      }),
      S(8, "CAD in women", {
        why: "<p>Same idea as CAD I: women more often have the nonspecific symptoms (nausea, abdominal pain, dyspnea, fatigue), and during an MI they are more likely to have NO chest pain, so missed diagnoses are more common.</p>",
        q: [
          Q("During an MI, who is more likely to present WITHOUT chest pain?", "Women", ["Men", "Neither; both always have chest pain", "Only young men"], "The slide says females are more likely than males to present without chest pain."),
          Q("Which symptom are women more likely to report?", "Severe fatigue", ["Pleuritic pain", "Fever", "Leg swelling"], "Women more often report nausea, abdominal pain, dyspnea and severe fatigue.")
        ]
      }),
      S(9, "Heart attack symptoms: men vs women (AHA)", {
        pic: "<p><b>HEART ATTACK SYMPTOMS: MEN VS. WOMEN.</b> The most common symptom of a heart attack for both men and women is chest pain. But women may experience less obvious warning signs. <b>Men</b>: nausea or vomiting; jaw, neck or back pain; squeezing chest pressure or pain; shortness of breath. <b>Women</b>: nausea or vomiting; jaw, neck or upper back pain; chest pain, but not always; pain or pressure in the lower chest or upper abdomen; shortness of breath; fainting; indigestion; extreme fatigue. (American Heart Association, Go Red for Women.)</p>",
        q: [
          Q("What is the most common heart attack symptom in BOTH men and women?", "Chest pain", ["Fainting", "Indigestion", "Back pain"], "The AHA figure says chest pain is the most common symptom for both."),
          Q("Which symptom is listed for women but not men on the AHA figure?", "Fainting", ["Shortness of breath", "Nausea or vomiting", "Jaw, neck or back pain"], "Fainting, indigestion, extreme fatigue and lower chest/upper abdominal pain are on the women's side only.")
        ]
      }),
      S(10, "CAD in older patients", {
        why: "<p>Older patients are a third of ACS cases, yet most of their chest pain is still not cardiac. Their ischemia may show up as dyspnea, syncope, confusion, abdominal pain or a fall, so think ischemia when an older adult has any of these.</p>",
        q: [
          Q("Patients >75 make up what share of ACS cases?", "33%", ["5%", "50%", "75%"], "The slide says patients over 75 account for 33% of ACS."),
          Q("An 82-year-old has an unexplained fall and new confusion. Which is true?", "This can be how ischemia presents in patients over 75", ["Ischemia never presents this way", "Falls rule out ACS", "Only chest pain counts in the elderly"], "Older patients may present with syncope, mental impairment or an unexplained fall."),
          Q("In patients over 75 with chest pain, which is more common at presentation?", "Alternative (noncardiac) diagnoses", ["A cardiac cause", "STEMI", "Prinzmetal angina"], "Despite a third of ACS, alternative diagnoses are still more common.")
        ]
      })
    ],
    review: [
      Q("A 70-year-old diabetic has fatigue and dyspnea on exertion, no chest pain. Why might ischemia be silent?", "Diabetes and age can blunt ischemic pain", ["Diabetics can't get CAD", "Older adults always have chest pain", "Fatigue rules out CAD"], "Silent ischemia occurs in elderly and diabetic patients."),
      Q("Which angina type is from spasm and shows ST elevation?", "Prinzmetal (vasospastic)", ["Stable", "Unstable", "Anginal equivalent"], "Spasm causes transmural ischemia with ST elevation."),
      Q("Which change turns stable angina into a concern for ACS?", "Symptoms now occur at rest", ["Symptoms with the same effort as last year", "Symptoms relieved by rest in 3 minutes", "No change in pattern"], "Rest, new, worsening or prolonged symptoms raise concern for ACS."),
      Q("A 55-year-old woman has nausea, upper back pain and extreme fatigue for 2 days. Best approach?", "Consider ACS: women often have less obvious symptoms", ["Reassure: no chest pain means no MI", "Treat as a viral illness only", "Order a CAC score next month"], "Women can have MIs without chest pain, with these less obvious symptoms."),
      Q("Exertional dyspnea that goes away with rest in a patient with risk factors is best called:", "An anginal equivalent", ["Pleurisy", "A panic attack", "GERD"], "A non-chest-pain symptom of ischemia with an effort pattern is an anginal equivalent.")
    ]
  });

  /* ---------------------------------------------------------------- LO 2 */
  los.push({
    id: "lo2", label: "LO 2", title: "Cardiac or not? Chest pain clues",
    objective: "Differentiate cardiac from noncardiac causes of chest pain by identifying characteristic clinical features, associated symptoms, and findings that suggest alternative diagnoses.",
    slides: [
      S(11, "Chest pain classification (2021 AHA/ACC)", {
        why: "<p>The 2021 guideline dropped 'atypical' because it got misread as 'not cardiac'. Now it's three bins: <b>cardiac</b>, <b>possible cardiac</b>, and <b>noncardiac</b>. Note how strict 'noncardiac' is: you call it noncardiac only after a negative test or a low-risk pathway, not on first impression.</p>",
        q: [
          Q("Which are the three 2021 AHA/ACC chest pain categories?", "Cardiac, possible cardiac, noncardiac", ["Typical, atypical, nonanginal", "Stable, unstable, variant", "Low, intermediate, high"], "The 2021 guideline uses cardiac, possible cardiac and noncardiac."),
          Q("When is chest pain classified as 'noncardiac' per the guideline?", "Persistent or recurring symptoms despite a negative stress test, anatomic evaluation, or low-risk pathway", ["Whenever it is sharp", "When the first EKG is normal", "When the patient is under 40"], "Noncardiac requires a negative cardiac evaluation or low-risk designation.")
        ]
      }),
      S(12, "Diamond-Forrester criteria (no longer recommended)", {
        why: "<p>Still worth knowing (older questions use it). Three features: <b>substernal</b>, <b>exertional</b>, <b>relieved by rest or NTG</b>. 3/3 = typical (anginal), 2/3 = atypical, 1/3 = non-anginal. It is no longer recommended because 'atypical' was often taken to mean 'not cardiac', especially in women.</p>",
        q: [
          Q("Substernal, exertional, and relieved by rest or NTG: all 3 present. Diamond-Forrester class?", "Typical (anginal) chest pain", ["Atypical anginal chest pain", "Non-anginal chest pain", "Noncardiac chest pain"], "All three features = typical angina."),
          Q("Only 2 of the 3 Diamond-Forrester features are present. Class?", "Atypical anginal chest pain", ["Typical angina", "Non-anginal chest pain", "Unstable angina"], "Two of three = atypical."),
          Q("What is the current status of the Diamond-Forrester criteria?", "No longer recommended", ["Required by the 2021 guideline", "Only used for women", "Used to diagnose STEMI"], "The slide labels them no longer recommended.")
        ]
      }),
      S(13, "Signs of cardiac ischemia (exam)", {
        why: "<p>Between episodes the exam is normal, so a normal exam never rules CAD out. During ischemia the stiff, weak LV explains the findings: <b>S4</b> = atrial kick hitting a stiff ventricle (common, 'TEN-nes-see'); <b>S3</b> = blood slamming into a failing, overfilled ventricle (less common, 'Ken-TUCK-y'); rales = backup into the lungs.</p>",
        q: [
          Q("What is the physical exam like when a CAD patient is NOT having active ischemia?", "Normal", ["Always shows an S3", "Always shows rales", "Always shows a murmur"], "The exam is normal without active ischemia."),
          Q("During ischemia, which gallop is more common and why?", "S4, from decreased LV compliance", ["S3, from increased compliance", "S4, from a leaky mitral valve", "S3, from high cardiac output"], "Ischemia stiffens the LV, producing an S4 (Tennessee)."),
          Q("An S3 during ischemia suggests:", "LV systolic dysfunction", ["A normal heart", "Decreased compliance only", "Pericarditis"], "S3 (Kentucky) is less common and reflects LV systolic dysfunction.")
        ]
      }),
      S(14, "Differential diagnosis of chest pain", {
        why: "<p>Think by organ: lungs, gut, chest wall, the rest of the heart and aorta, and the mind. The deadly ones to never miss besides ACS: <b>aortic dissection</b>, <b>PE</b>, <b>tension pneumothorax</b> (and esophageal rupture, standard teaching).</p>",
        q: [
          Q("Which is a NON-ischemic cardiovascular cause of chest pain?", "Aortic dissection", ["Pneumothorax", "Costochondritis", "Biliary colic"], "The slide lists pericarditis and aortic dissection as non-ischemic CV causes."),
          Q("Costochondritis falls under which category?", "Chest wall / MSK", ["Pulmonary", "GI", "Psychiatric"], "Costochondritis and rib fracture are chest wall/MSK causes."),
          Q("Which is a GI cause on the differential?", "Esophageal spasm", ["Pleurisy", "Pericarditis", "Panic disorder"], "GI causes include GERD/PUD, esophagitis, pancreatitis, esophageal spasm, biliary colic and cholangitis.")
        ]
      }),
      S(15, "Diagnoses other than cardiac ischemia (UpToDate)", {
        pic: "<p><b>Diagnoses other than cardiac ischemia for patients with chest pain</b></p><ul><li><b>Cardiovascular not caused by epicardial CAD</b>: aortic dissection, aortic aneurysm, myocarditis, pericarditis, stress (takotsubo) cardiomyopathy.</li><li><b>Pulmonary</b>: pleuritis, pneumonia, pulmonary embolus, pneumothorax.</li><li><b>Gastrointestinal</b>: biliary (cholangitis, cholecystitis, choledocholithiasis, colic); esophageal (esophagitis, spasm, reflux, rupture); pancreatitis; peptic ulcer disease (nonperforating).</li><li><b>Chest wall</b>: cervical disc disease, costochondritis, fibrositis, herpes zoster (before the rash), neuropathic pain, rib fracture, sternoclavicular arthritis.</li><li><b>Psychiatric</b>: affective disorders (eg, depression); anxiety disorders (hyperventilation, panic disorder, primary anxiety); somatoform disorders; thought disorders (eg, fixed delusions).</li></ul>",
        why: "<p>Herpes zoster 'before the rash' is a classic trap: burning dermatomal pain days before any vesicles appear.</p>",
        q: [
          Q("Which chest wall cause can occur before any visible skin findings?", "Herpes zoster (before the rash)", ["Rib fracture", "Costochondritis", "Sternoclavicular arthritis"], "Zoster pain can start before the vesicles appear."),
          Q("Takotsubo (stress) cardiomyopathy is in which category of the table?", "Cardiovascular not caused by epicardial CAD", ["Pulmonary", "Gastrointestinal", "Psychiatric"], "It is a cardiac cause, but not from epicardial CAD.")
        ]
      }),
      S(16, "Characteristics of major noncardiac causes (UpToDate)", {
        pic: "<table class=\"ss-table\"><tr><td><b>Condition</b></td><td><b>Duration of pain</b></td><td><b>Character of pain</b></td></tr><tr><td>Gastroesophageal reflux</td><td>5 to 60 minutes</td><td>Visceral, substernal, worse with recumbency, no radiation, relief with food, antacids</td></tr><tr><td>Esophageal spasm</td><td>5 to 60 minutes</td><td>Visceral, spontaneous, substernal, associated with cold liquids, relief with nitroglycerin</td></tr><tr><td>Peptic ulcer</td><td>Hours</td><td>Visceral, burning, epigastric, relief with food, antacids, normal ECG</td></tr><tr><td>Biliary disease</td><td>Hours</td><td>Visceral, epigastric, interscapular colic, occurs after meals</td></tr><tr><td>Cervical disc</td><td>Variable</td><td>Superficial, positional, arm, neck</td></tr><tr><td>Musculoskeletal</td><td>Variable</td><td>Superficial, positional, worse with movement, local tenderness</td></tr><tr><td>Thyroiditis</td><td>Persistent</td><td>Aggravated by swallowing, neck, throat tenderness</td></tr></table>",
        why: "<p>The big trap: <b>esophageal spasm is relieved by nitroglycerin</b> (NTG relaxes smooth muscle everywhere, including the esophagus), so relief with NTG does not prove angina. Visceral pain (gut, heart) is deep and vague; superficial, positional pain is chest wall.</p>",
        q: [
          Q("Which noncardiac cause of chest pain can be relieved by nitroglycerin?", "Esophageal spasm", ["Peptic ulcer", "Biliary disease", "Cervical disc"], "NTG relaxes esophageal smooth muscle, so spasm can improve with it."),
          Q("Substernal pain worse lying down, relieved by antacids, lasting 5-60 minutes suggests:", "Gastroesophageal reflux", ["Biliary disease", "Thyroiditis", "Musculoskeletal pain"], "Worse with recumbency and relieved by antacids fits GERD."),
          Q("Epigastric and interscapular colic after meals, lasting hours, suggests:", "Biliary disease", ["GERD", "Esophageal spasm", "Cervical disc"], "Biliary pain is post-prandial colic that can radiate between the shoulder blades.")
        ]
      }),
      S(17, "Symptoms suggesting an alternate dx (1)", {
        why: "<p>Heart pain is visceral: it comes from a deep organ, so it is diffuse and hard to localize. Pain you can point to with one finger, or that changes with breathing, comes from structures with somatic nerves (chest wall, pleura).</p>",
        q: [
          Q("Sharp pain that worsens with breathing or cough suggests:", "A pulmonary or musculoskeletal cause", ["Stable angina", "Unstable angina", "Prinzmetal angina"], "Pleuritic pain points to the lungs or the chest wall."),
          Q("Pain the patient localizes with one finger suggests:", "Musculoskeletal chest pain", ["Myocardial ischemia", "Aortic dissection", "Esophageal spasm"], "Ischemic pain is diffuse; one-finger pain is chest wall."),
          Q("Pain located mainly in the mid or lower abdomen suggests:", "A GI cause", ["STEMI", "Pericarditis", "Pneumothorax"], "The slide points mid/lower abdominal pain toward GI causes.")
        ]
      }),
      S(18, "Symptoms suggesting an alternate dx (2)", {
        why: "<p>Duration helps: ischemia lasts <b>minutes</b>. Seconds (≤30 s) is too short (nerve/MSK) and constant for days is too long (an MI would have shown on troponin and EKG by then).</p>",
        q: [
          Q("Fleeting pain lasting 30 seconds or less suggests:", "Nerve (musculoskeletal) pain", ["Stable angina", "NSTEMI", "Aortic dissection"], "Ischemia lasts minutes, not seconds."),
          Q("Constant pain lasting for days suggests:", "A pulmonary or musculoskeletal cause", ["Stable angina", "Unstable angina", "Prinzmetal angina"], "Days of constant pain don't fit ischemia."),
          Q("Pain radiating to the lower extremities or above the mandible suggests:", "Musculoskeletal pain", ["Myocardial ischemia", "Biliary colic", "GERD"], "Ischemic pain radiates to the jaw but not above it or into the legs.")
        ]
      }),
      S(19, "Probability of ischemia by pain description", {
        pic: "<p>A wedge from <b>High</b> to <b>Low</b> probability of ischemia: High: central, pressure, squeezing, gripping, heaviness, tightness, exertional/stress-related, retrosternal → left-sided, dull, aching → stabbing → right-sided, tearing, ripping, burning → Low: sharp, fleeting, shifting, pleuritic, positional.</p>",
        why: "<p>'Tearing' or 'ripping' is low for ischemia but should make you think of <b>aortic dissection</b> (standard teaching).</p>",
        q: [
          Q("Which description carries the HIGHEST probability of ischemia?", "Central squeezing pressure with exertion", ["Sharp, fleeting pain", "Pleuritic pain", "Positional pain"], "Central, pressure, squeezing and exertional are at the high end of the wedge."),
          Q("Which description carries the LOWEST probability of ischemia?", "Sharp, shifting, pleuritic pain", ["Heaviness", "Tightness", "Retrosternal gripping"], "Sharp, fleeting, shifting, pleuritic and positional are at the low end.")
        ]
      }),
      S(20, "Case: a 58-year-old man", {
        why: "<p>No answer slide; answered from the deck's rules. This is <b>cardiac ischemia</b> (stable angina pattern): substernal <b>pressure</b>, <b>exertional</b> (uphill, carrying groceries), <b>radiates to the left shoulder</b>, <b>resolves within 5 minutes of rest</b>, plus HTN, hyperlipidemia, 25 pack-years and male sex over 55.</p>",
        q: [
          Q("58-year-old man: substernal pressure walking uphill, radiating to the left shoulder, gone within 5 minutes of rest; HTN, HLD, 25 pack-years. Most suggestive of?", "Cardiac ischemia (stable angina pattern)", ["GERD", "Musculoskeletal pain", "Pleurisy"], "Exertional substernal pressure relieved by rest with risk factors is classic angina."),
          Q("Which feature of his story is MOST concerning for ischemia?", "Pressure brought on by exertion and relieved by rest", ["He is a man", "It is substernal only", "It lasts less than an hour"], "The exertion-rest pattern is the strongest clue of demand ischemia.")
        ]
      }),
      S(21, "Chest pain in the office: what to do", {
        why: "<p>The fork is simple: <b>pain right now</b> = possible ongoing MI, so 911 and an ambulance (not their own car: they could arrest on the way). <b>Pain earlier, not now</b>: if it has unstable features, get cardiology involved ASAP or send to the ER; if it looks stable, risk stratify with stress testing.</p>",
        q: [
          Q("A patient in your office is CURRENTLY having chest pain concerning for ischemia. Next step?", "Call 911 and send by ambulance to the ER", ["Schedule a stress test", "Have a family member drive them to the ER", "Give an antacid and reassess in a week"], "Active pain could be an MI in progress, so they go by ambulance."),
          Q("A patient had chest pain last week with unstable angina features but is pain-free now. Next step?", "Call cardiology to get them in ASAP or send to the ER", ["Routine follow-up in 3 months", "Call 911 for an ambulance", "No workup needed"], "Unstable features without current pain need urgent cardiology or the ER."),
          Q("A pain-free patient with a stable exertional pattern: how do you evaluate?", "Risk stratify with stress testing", ["Emergent cath", "Call 911", "Thrombolytics"], "Stable patients are risk-stratified with stress testing.")
        ]
      })
    ],
    review: [
      Q("Which feature makes ischemia LESS likely?", "Pain reproduced by pressing on the chest wall", ["Pressure with exertion", "Radiation to both arms", "Diaphoresis"], "Pain reproduced by palpation points to MSK chest pain."),
      Q("Chest pain relieved by nitroglycerin proves angina.", "False: esophageal spasm can also respond to NTG", ["True: only angina responds to NTG", "True if it is substernal", "False: NTG never helps angina"], "NTG relaxes esophageal smooth muscle too."),
      Q("Using Diamond-Forrester: exertional substernal pain NOT relieved by rest or NTG is:", "Atypical (2 of 3)", ["Typical (3 of 3)", "Non-anginal (1 of 3)", "Noncardiac"], "Two of the three features makes it atypical."),
      Q("Tearing chest pain radiating to the back should make you think of:", "Aortic dissection", ["Stable angina", "GERD", "Costochondritis"], "Tearing/ripping pain is low for ischemia but classic for dissection (standard teaching)."),
      Q("During an ischemic episode you hear an extra sound just before S1. It is:", "An S4 from a stiff, ischemic LV", ["An S3 from a normal heart", "A friction rub", "An opening snap"], "Ischemia reduces LV compliance, producing an S4.")
    ]
  });

  /* ---------------------------------------------------------------- LO 3 */
  los.push({
    id: "lo3", label: "LO 3", title: "Stable angina, UA, NSTEMI, STEMI (Thomas)",
    objective: "Compare and contrast the clinical presentations of stable angina, unstable angina, NSTEMI, and STEMI, including their underlying pathophysiology, EKG findings, and cardiac biomarker patterns.",
    slides: [
      S(22, "Clinical syndromes of symptomatic CAD", {
        q: [
          Q("Which of the four CAD syndromes is NOT an acute coronary syndrome?", "Stable angina", ["Unstable angina", "NSTEMI", "STEMI"], "Numbers 2-4 (UA, NSTEMI, STEMI) are ACS; stable angina is not.")
        ]
      }),
      S(23, "Stable angina", {
        why: "<p>Stable means <b>predictable</b>: the same trigger (exertion, cold, emotion) produces the same symptoms, lasting <b>5-10 minutes</b>, relieved by rest or NTG. Cold works as a trigger because it constricts vessels and raises BP, adding demand (standard teaching).</p>",
        q: [
          Q("How long do stable angina symptoms typically last?", "5-10 minutes", ["A few seconds", "Over an hour", "Several days"], "The slide says symptoms typically last 5-10 minutes."),
          Q("Which is a trigger of stable angina listed on the slide?", "Cold exposure", ["Lying flat", "Eating spicy food", "Deep breathing"], "Exertion, cold exposure and emotional stress trigger stable angina."),
          Q("Stable angina most commonly results from:", "A fixed, flow-limiting plaque during increased demand", ["Acute plaque rupture", "Coronary spasm at rest", "A septic embolus"], "A fixed plaque can't let more blood through when demand rises.")
        ]
      }),
      S(24, "Stable angina: area of ischemia", {
        pic: "<p>Coronary artery with an <b>atherosclerotic plaque</b> (lipid-rich core with fibrous cap) and a <b>partially occluded lumen</b> (reduced blood flow during increased demand, e.g. exercise). Wall layers: epicardium (external layer), myocardium (heart muscle), endocardium (inner layer), with the <b>area of ischemia during stable angina</b> at the inner layer. <b>Stable Angina: Area of Myocardial Ischemia</b>: reduced coronary blood flow during increased oxygen demand (e.g., exertion); typically causes <b>subendocardial ischemia</b> (inner portion of the myocardium); <b>reversible</b> ischemia (no cellular necrosis).</p>",
        why: "<p>Why the inner layer? Coronary arteries run on the <b>outside</b> (epicardium) and dive inward, so the subendocardium is at the end of the line, and it is also squeezed hardest by high LV pressure. It starves first.</p>",
        q: [
          Q("Which layer becomes ischemic in stable angina?", "The subendocardium (inner layer)", ["The epicardium only", "The full wall thickness", "The pericardium"], "Stable angina typically causes subendocardial ischemia."),
          Q("Is the ischemia in stable angina reversible?", "Yes, there is no cellular necrosis", ["No, cells die each episode", "Only with CABG", "Only if troponin rises"], "Stable angina is reversible ischemia without necrosis.")
        ]
      }),
      S(25, "Stable angina example: Thomas", {
        why: "<p>Thomas has CAD (prior MI, 3-vessel CABG) and angina at a <b>fixed threshold</b> (about 15 minutes of walking), unchanged for 6 months, with a normal exam. That is stable angina: continue his meds, renew SL NTG.</p>",
        q: [
          Q("Thomas gets chest pain after 15 minutes on the treadmill, unchanged from 6 months ago. This is:", "Stable angina", ["Unstable angina", "NSTEMI", "Prinzmetal angina"], "Same trigger and threshold over months = stable angina."),
          Q("What makes Thomas's angina 'stable'?", "It is predictable and unchanged at the same level of exertion", ["He has had a CABG", "He takes aspirin", "His exam is normal"], "Stability is about an unchanged, predictable pattern.")
        ]
      }),
      S(26, "Acute coronary syndromes: causes", {
        why: "<p>Three routes to ACS: (1) <b>rupture</b> with clot (most common), (2) a plaque that slowly grows to a <b>critical</b> narrowing, and (3) a <b>demand</b> crisis: sepsis, anemia, tachyarrhythmia or hypoxia stresses a heart whose arteries are already narrowed.</p>",
        q: [
          Q("Which is NOT listed as a cause of ACS?", "Positive remodeling with a normal lumen", ["Sudden plaque rupture", "Plaque growth to a critical level", "Stress from a non-cardiac illness"], "The three causes are rupture, critical growth and stress from another illness."),
          Q("A patient with known CAD develops sepsis and then ischemic chest pain. Mechanism?", "Stress from a non-cardiac illness taxing a diseased heart", ["Prinzmetal spasm", "Fatty streak formation", "Stent thrombosis"], "Illness raises demand beyond what narrowed arteries can supply.")
        ]
      }),
      S(27, "ACS: what changes", {
        why: "<p>Use these five words to grade the history: <b>frequency, severity, duration, provocation, relief</b>. Any of them getting worse (more often, harder, longer, with less effort, less relief from NTG) means the plaque is changing.</p>",
        q: [
          Q("Which change in symptoms is typical of ACS?", "Symptoms occur with measurably less exertion or at rest", ["Symptoms occur only with heavy exertion as before", "Symptoms respond faster to rest", "Symptoms become less frequent"], "ACS shows worsening provocation, among other changes."),
          Q("In ACS, how do symptoms respond to rest or SL nitroglycerin?", "They are less responsive", ["They respond faster", "They disappear permanently", "They respond only to antacids"], "Relief becomes harder to achieve in ACS.")
        ]
      }),
      S(28, "Unstable angina", {
        why: "<p>UA is ACS <b>without</b> myocardial death: the clot partly or briefly blocks flow, but not long enough to kill cells, so troponin stays normal. Everyone with ACS starts out looking like UA until troponins come back, so the label can change to NSTEMI.</p>",
        q: [
          Q("What is the troponin in unstable angina?", "Not elevated", ["Elevated", "Elevated only after 7 days", "Always more than 3x normal"], "UA has ischemic symptoms with no troponin rise."),
          Q("Which EKG finding is NOT seen in unstable angina?", "ST elevation", ["ST depression", "New T wave inversion", "A normal EKG"], "UA can show ST depression or T inversion but no ST elevation."),
          Q("Why does the UA diagnosis 'evolve over time'?", "All ACS patients start this way until troponins show whether there is injury", ["UA always becomes STEMI", "UA turns into stable angina", "The EKG always changes"], "Rising troponin later would change UA into NSTEMI.")
        ]
      }),
      S(29, "Unstable angina example: Thomas", {
        why: "<p>Thomas's pattern changed: pain with <b>less effort</b> (parking lot), then <b>at rest</b> (couch), needing <b>2 NTG</b>. Normal vitals and EKG don't change that: it's unstable angina. He is pain-free now, so per slide 21: cardiology ASAP (or the ER).</p>",
        q: [
          Q("Thomas now gets chest pain walking in from the parking lot and once on the couch. Normal EKG. Diagnosis?", "Unstable angina", ["Stable angina", "STEMI", "Noncardiac chest pain"], "New pain with less exertion and at rest is unstable angina."),
          Q("Thomas's EKG in the office is normal. Does that rule out ACS?", "No, a normal EKG does not rule out ACS", ["Yes, ACS always changes the EKG", "Yes, if he's pain-free", "Only if troponin was normal last year"], "UA often has a normal EKG."),
          Q("Thomas is pain-free in the office with unstable features. Next step?", "Cardiology ASAP or the ER", ["Routine stress test in 3 months", "Reassure and renew NTG", "Start an antacid"], "Unstable angina features need urgent evaluation.")
        ]
      }),
      S(30, "NSTEMI", {
        why: "<p>NSTEMI = ACS + <b>troponin rise</b> (myocytes died) but <b>no ST elevation</b>. Usually a partly blocking clot that kills the inner layer only. UA and NSTEMI look identical at first; the hs-troponin trend separates them.</p>",
        q: [
          Q("NSTEMI is defined by ischemic symptoms plus:", "Elevated troponin without ST elevation", ["ST elevation with normal troponin", "Normal troponin and normal EKG", "ST elevation and elevated troponin"], "Troponin rises but there is no ST elevation."),
          Q("What separates NSTEMI from unstable angina?", "A rise in (hs) troponin", ["ST elevation", "The type of chest pain", "The patient's age"], "UA and NSTEMI look alike until hs-troponin rises.")
        ]
      }),
      S(31, "NSTEMI: the picture", {
        pic: "<p><b>NSTEMI</b>: ruptured atherosclerotic plaque (exposed lipid core with platelet activation); <b>nonocclusive thrombus</b> (partially obstructs blood flow); residual lumen with blood flow. Wall: epicardium, myocardium, endocardium, with an <b>area of subendocardial infarction (irreversible injury)</b>. Box: plaque rupture or erosion with a nonocclusive (partial) thrombus; reduces coronary blood flow, leading to myocardial ischemia and myocardial necrosis; typically causes subendocardial infarction (inner portion of the myocardium); elevated cardiac troponin; no ST-segment elevation on ECG; the artery is usually <b>not completely occluded</b> (residual blood flow is present).</p>",
        q: [
          Q("In NSTEMI, the thrombus is usually:", "Nonocclusive (partial)", ["Completely occlusive", "Absent", "In a vein"], "NSTEMI usually has a partial thrombus with residual flow."),
          Q("NSTEMI typically causes infarction of which layer?", "Subendocardium", ["Full wall thickness (transmural)", "Epicardium only", "Pericardium"], "NSTEMI typically causes subendocardial infarction.")
        ]
      }),
      S(32, "STEMI: the hat trick", {
        pic: "<p>Heart diagram: <b>Non-Q-wave (subendocardial) infarction</b> with an ST-depression complex vs <b>Q-wave (transmural) infarction</b> with an ST-elevation/Q-wave complex.</p>",
        why: "<p>STEMI usually means the artery is <b>completely blocked</b>, so the whole wall thickness (transmural) dies, which the EKG shows as ST elevation (later Q waves). Subendocardial injury shows ST depression instead. That is why STEMI is a cath-lab emergency: the artery must be opened now.</p>",
        q: [
          Q("What three things make the STEMI 'hat trick'?", "Ischemic symptoms, elevated troponin, ST elevation on the 12-lead", ["Chest pain, fever, rub", "Dyspnea, edema, S3", "ST depression, normal troponin, chest pain"], "STEMI requires all three."),
          Q("A Q-wave (transmural) infarction involves:", "The full thickness of the wall", ["Only the subendocardium", "Only the epicardium", "No myocardial death"], "Transmural = the full wall thickness."),
          Q("Which infarction type shows ST depression on the figure?", "Non-Q-wave (subendocardial)", ["Q-wave (transmural)", "Prinzmetal", "Pericarditis"], "Subendocardial infarction is the non-Q-wave type with ST depression.")
        ]
      }),
      S(33, "NSTEMI example: Thomas", {
        why: "<p>Severe pain not relieved by 3 NTG + hs-troponin 527 → 1,637 at 90 minutes (a big <b>rise</b>) + T inversions (no ST elevation) = <b>NSTEMI</b>. Treatment: anticoagulation (heparin) and a cath within about a day (next morning).</p>",
        q: [
          Q("Thomas: hs-troponin 527 then 1,637 at 90 minutes, lateral T inversions, no ST elevation. Diagnosis?", "NSTEMI", ["Unstable angina", "STEMI", "Stable angina"], "Rising troponin without ST elevation is NSTEMI."),
          Q("What was started for Thomas's NSTEMI before his morning cath?", "A heparin drip", ["Thrombolytics", "Emergent CABG", "Nothing until the cath"], "The slide says a heparin gtt was started and an LHC scheduled for 9 am.")
        ]
      }),
      S(34, "STEMI example: Thomas", {
        why: "<p>Same story, but now <b>ST elevation in the anterolateral leads</b>: STEMI. The artery is occluded, so he goes to the cath lab within <b>90 minutes</b> of arrival (door-to-balloon, standard teaching), not the next morning.</p>",
        q: [
          Q("Thomas has ST elevation in the anterolateral leads and elevated troponin. How fast does he go to the cath lab?", "Within 90 minutes of ER arrival", ["Next morning", "Within a week", "Only if troponin keeps rising"], "STEMI needs emergent cath; he was in the lab within 90 minutes."),
          Q("What turned Thomas's NSTEMI story into a STEMI?", "ST elevation on the EKG", ["A higher troponin", "More chest pain", "A normal EKG"], "ST elevation is what defines STEMI.")
        ]
      }),
      S(35, "ACS summary", {
        why: "<p>One row each: <b>UA</b> = reduced, often transient flow, no injury. <b>NSTEMI</b> = reduced flow (maybe partial occlusion) + injury. <b>STEMI</b> = often complete occlusion + injury + qualifying ST elevation.</p>",
        q: [
          Q("Which ACS has NO acute myocardial injury?", "Unstable angina", ["NSTEMI", "STEMI", "All three have injury"], "UA has reduced flow but no acute injury."),
          Q("Coronary flow in STEMI is often:", "Acute coronary occlusion", ["Normal", "Transiently reduced only", "Increased"], "STEMI usually means the artery is completely blocked.")
        ]
      })
    ],
    review: [
      Q("Chest pain at rest, troponin rising, ST depression in V4-V6. Diagnosis?", "NSTEMI", ["UA", "STEMI", "Stable angina"], "Troponin rise without ST elevation is NSTEMI."),
      Q("Chest pain at rest, normal troponins x2, new T wave inversions. Diagnosis?", "Unstable angina", ["NSTEMI", "STEMI", "Stable angina"], "No troponin rise and no ST elevation is UA."),
      Q("Which layer infarcts in a STEMI?", "The full wall thickness (transmural)", ["Only the subendocardium", "Only the epicardium", "No layer; it's reversible"], "Complete occlusion causes transmural infarction."),
      Q("Which presentation is NOT an ACS?", "Pain after 2 flights of stairs for a year, gone with rest", ["New pain at rest", "Pain with less effort than before", "Pain not relieved by 3 NTG"], "An unchanged effort threshold is stable angina."),
      Q("Why is the subendocardium the first layer to become ischemic?", "It is farthest from the epicardial arteries and squeezed most by LV pressure", ["It has its own blood supply", "It needs no oxygen", "It is closest to the coronary arteries"], "Coronaries run on the outside, so the inner layer is at the end of the supply line.")
    ]
  });

  /* ---------------------------------------------------------------- LO 4 (part 1) */
  los.push({
    id: "lo4a", label: "LO 4a", title: "History, EKG, troponin and BNP",
    objective: "Describe the initial evaluation and management of a patient presenting with suspected acute coronary syndrome, including focused history and physical examination, EKG interpretation, serial high-sensitivity troponin testing, and initial pharmacologic interventions. (Part 1: history, exam, EKG and biomarkers.)",
    slides: [
      S(36, "History: OLDCARTS (blank)", {
        why: "<p>Try to fill in the eight letters before the next slide: Onset, Location, Duration, Character, Aggravating/relieving, Radiation, Timing, Severity.</p>",
        q: [
          Q("In OLDCARTS, what does the 'A' stand for?", "Aggravating / relieving factors", ["Associated symptoms", "Age", "Allergies"], "A = aggravating and relieving factors such as exertion, meals, position or breathing."),
          Q("In OLDCARTS, what does the 'T' stand for?", "Timing / pattern", ["Troponin", "Treatment", "Temperature"], "T = timing or pattern: how often and whether it is changing.")
        ]
      }),
      S(37, "History: OLDCARTS (filled in)", {
        why: "<p>For chest pain the most useful letters are <b>A</b> (exertion vs breathing vs meals vs position), <b>D</b> (minutes = ischemia; seconds or days = not), and <b>T</b> (any change in pattern = ACS concern). Then go beyond OLDCARTS: associated symptoms, prior episodes, risk factors and cardiac history.</p>",
        q: [
          Q("'Does it spread to the arm, shoulder, jaw, neck, back or epigastrium?' asks about which OLDCARTS letter?", "R: radiation", ["L: location", "C: character", "S: severity"], "That is the radiation question."),
          Q("'Any change in frequency, duration or severity?' asks about which letter?", "T: timing/pattern", ["O: onset", "D: duration", "A: aggravating factors"], "Timing/pattern covers how often and whether it is changing."),
          Q("What does the slide say to ask after OLDCARTS?", "Associated symptoms, prior episodes, risk factors and cardiac history", ["Nothing more is needed", "Only the family history", "Only medication allergies"], "The slide says do not stop at OLDCARTS.")
        ]
      }),
      S(38, "History: risk factors", {
        q: [
          Q("Which is a NON-modifiable risk factor on the table?", "Family history of premature heart disease", ["Metabolic syndrome", "Excessive alcohol intake", "Obesity/sedentary lifestyle"], "Age, male sex and premature family history are non-modifiable."),
          Q("Premature family history means a relative with heart disease at:", "Male < 55 or female < 65", ["Male < 65 or female < 55", "Any age", "Male < 45 or female < 50"], "The table uses males <55 and females <65.")
        ]
      }),
      S(39, "Exam and initial testing", {
        why: "<p>A carotid bruit or weak peripheral pulses means plaque elsewhere (ASCVD in another bed), which raises the chance the coronaries are involved too. Initial testing: EKG at presentation, <b>serial</b> troponins (one isn't enough), routine labs, and tests for the differential (e.g. CXR for pneumothorax or pneumonia).</p>",
        q: [
          Q("Which exam finding is evidence of cardiovascular disease that raises CAD likelihood?", "Carotid bruit", ["Clear lungs", "Normal S1/S2", "Reproducible chest wall tenderness"], "A bruit shows atherosclerosis elsewhere, so the coronaries are likely involved."),
          Q("Which is part of the initial testing for chest pain?", "Resting 12-lead EKG and serial troponins", ["Cardiac cath for everyone", "CAC score", "Stress test while in pain"], "The slide lists the EKG at presentation and serial cardiac troponin.")
        ]
      }),
      S(40, "Resting 12-lead EKG: concerning findings", {
        why: "<p>Ranked by how much they mean: <b>T inversion</b> = nonspecific; <b>ST depression</b> = maybe (subendocardial ischemia); <b>ST elevation</b> = definitive (transmural injury). A <b>new LBBB</b> counts because it hides ST changes and can come from a big anterior MI.</p>",
        q: [
          Q("Which resting EKG finding is 'definitive' for ischemia on the slide?", "ST elevation", ["T wave inversion", "ST depression", "PVCs"], "ST elevation is labeled definitive."),
          Q("How does the slide rate T wave inversion?", "Non-specific", ["Definitive", "Diagnostic of STEMI", "Normal"], "T inversion is concerning but non-specific."),
          Q("Which conduction finding is concerning for ischemia?", "New left bundle branch block", ["Old right bundle branch block", "First-degree AV block", "Sinus arrhythmia"], "A new LBBB is on the slide's list.")
        ]
      }),
      S(41, "A normal EKG doesn't rule out ACS", {
        why: "<p>Ischemia comes and goes, and some walls (posterior, lateral) are 'blind spots' on the standard leads (standard teaching). So repeat the EKG whenever symptoms persist or recur.</p>",
        q: [
          Q("Does a normal initial EKG rule out ACS?", "No", ["Yes", "Only in women", "Only if the patient is pain-free"], "The slide says a normal initial 12-lead does not rule out ACS."),
          Q("When should serial EKGs be obtained?", "When symptoms persist or recur, or suspicion remains high", ["Only after discharge", "Never; one EKG is enough", "Only if troponin is negative"], "Serial EKGs catch evolving changes.")
        ]
      }),
      S(42, "EKG with T-wave inversions", {
        pic: "<p>A 12-lead EKG with deep, symmetric T-wave inversions across the precordial leads (V2-V6), plus a single-beat sketch of an inverted T wave.</p>",
        why: "<p>Deep symmetric T inversions in V2-V4 can point to a critical proximal LAD lesion (Wellens pattern, standard teaching), so they deserve attention even though T inversion in general is nonspecific.</p>",
        q: [
          Q("How significant is T-wave inversion by itself for ischemia?", "Concerning but non-specific", ["Always diagnostic of STEMI", "Always normal", "Only seen in pericarditis"], "T inversion can be ischemic but has many causes.")
        ]
      }),
      S(43, "EKG with ST depression", {
        pic: "<p>A 12-lead EKG with boxes around the ST depression in leads II, V3, V4 and V5, plus a close-up of lead III marked 'ST Depression' with the depressed segment in red.</p>",
        why: "<p>ST depression = subendocardial ischemia (the inner layer). It can be UA/NSTEMI, demand ischemia, or reciprocal to an ST elevation elsewhere (standard teaching), so always look for elevation in other leads.</p>",
        q: [
          Q("ST depression on the EKG most often reflects ischemia of which layer?", "Subendocardium", ["Full wall (transmural)", "Pericardium", "Epicardium only"], "Subendocardial ischemia shows as ST depression."),
          Q("In the slide's EKG, where are the ST depressions boxed?", "Leads II, V3, V4 and V5", ["Only aVR", "Only V1", "Leads I and aVL only"], "The boxes surround II, V3, V4 and V5.")
        ]
      }),
      S(44, "Troponin I and T", {
        why: "<p>Troponin is part of the contraction machinery inside myocytes; it only gets into the blood when cells are damaged. 'Damaged' doesn't always mean a blocked artery: anything that strains the heart (tachyarrhythmias, PE stretching the RV, heart failure, sepsis) can leak troponin. So troponin = myocardial <b>injury</b>, not automatically MI.</p>",
        q: [
          Q("What are troponin's three subunits?", "T, C and I", ["A, B and C", "I, II and III", "Alpha, beta and gamma"], "Troponin has subunits T, C and I."),
          Q("Which can raise troponin WITHOUT a coronary blockage?", "A PE causing RV failure", ["A normal treadmill test", "GERD", "Costochondritis"], "Significant cardiac stress such as RV strain from a PE can leak troponin."),
          Q("Troponin enters the circulation when:", "Cardiac myocytes are damaged", ["The liver is inflamed", "Skeletal muscle is at rest", "Platelets aggregate"], "Damaged myocytes spill troponin into the blood.")
        ]
      }),
      S(45, "Troponin I: timing", {
        why: "<p>The 4-6 hour delay is why one early troponin can be falsely normal. The 7-10 day tail (on regular assays) means a troponin can still be up from an MI last week, which is why the <b>trend</b> (rising vs falling) matters.</p>",
        q: [
          Q("Which troponin is found only in cardiac cells and is most specific?", "Troponin I", ["Troponin C", "CK-MB", "Myoglobin"], "Troponin I is found only in cardiac cells."),
          Q("When does troponin I become detectable after ischemia starts?", "4-6 hours", ["5 minutes", "24 hours", "3 days"], "It becomes detectable 4-6 hours after onset."),
          Q("How long can troponin stay elevated after an event (regular assay)?", "7-10 days", ["1 hour", "24 hours", "6 months"], "It stays elevated at low levels for 7-10 days.")
        ]
      }),
      S(46, "Troponin I: accuracy", {
        why: "<p>Sensitivity climbs with time (50% at 4 h → 97% at 6 h), which is why a patient who arrives early can have a normal first troponin. In CKD stage 4/ESRD troponin is cleared poorly and sits chronically high, so compare with their baseline and look for a change.</p>",
        q: [
          Q("What is troponin's sensitivity for MI at 6 hours?", "97%", ["50%", "75%", "100%"], "Sensitivity is 50% at 4 hours and 97% at 6 hours."),
          Q("A dialysis patient has a mildly elevated troponin. Best interpretation?", "Compare with a prior level, because ESRD raises troponin chronically", ["Diagnose MI immediately", "Ignore it entirely", "Repeat in one month"], "Impaired clearance keeps troponin chronically high in ESRD/CKD 4."),
          Q("Why can the first troponin be normal in a real MI?", "The patient came to the ER very quickly after onset", ["Troponin never rises in MI", "Troponin is only positive in STEMI", "Troponin falls in MI"], "Troponin takes hours to rise, so very early levels can be normal.")
        ]
      }),
      S(47, "High-sensitivity troponin", {
        why: "<p>Same molecule, much better ruler. A regular assay reads 'zero' in most healthy people; an hs assay is required to <b>detect troponin in >50% of normal people</b>. That precision lets us see small changes over 1-2 hours, which is what speeds up ruling MI in or out.</p>",
        q: [
          Q("How do hs-troponin and conventional troponin differ?", "Same molecule, but hs measures more precisely at much lower levels", ["They measure different proteins", "Hs-troponin measures CK-MB", "Conventional assays are more sensitive"], "Both measure troponin; hs assays are far more precise at low levels."),
          Q("To qualify as high-sensitivity, an assay must detect troponin in:", "More than 50% of normal individuals", ["Less than 5% of people", "Only MI patients", "100% of MI patients only"], "That is the definition given on the slide."),
          Q("In what year did the ACC recommend hs-troponin for chest pain evaluation?", "2021", ["2001", "2011", "2024"], "The slide says new guidelines were published in 2021.")
        ]
      }),
      S(48, "Hs-troponin: high negative predictive value", {
        why: "<p>High sensitivity → very few MIs are missed → a negative result is very trustworthy ('no elevation, no MI'). That lets the ED safely send home low-risk patients faster (low 30-day MACE).</p>",
        q: [
          Q("Hs-troponin's higher sensitivity means a higher:", "Negative predictive value", ["Positive predictive value", "Specificity", "Cost per test"], "More sensitivity makes a negative result more reliable."),
          Q("What does 'no elevation of troponin, no acute MI' allow?", "Quickly identifying low-risk patients who don't have ACS", ["Diagnosing STEMI without an EKG", "Skipping the history", "Ruling in pericarditis"], "It helps identify patients at very low risk of 30-day MACE.")
        ]
      }),
      S(49, "Hs-troponin: the cost", {
        why: "<p>The trade-off: more sensitivity = less specificity. Since >50% of healthy people have measurable troponin, a detectable level alone means little; what matters is a level above the 99th percentile and, above all, a <b>change</b> over time.</p>",
        q: [
          Q("What is the downside of hs-troponin?", "Lower specificity and positive predictive value", ["Lower sensitivity", "It misses most MIs", "It can't be repeated"], "Detecting troponin in healthy people lowers specificity."),
          Q("A detectable hs-troponin in an otherwise healthy person means:", "Not much by itself, because >50% of healthy people have one", ["Definite MI", "Definite PE", "Kidney failure"], "Detectable levels are common in healthy people.")
        ]
      }),
      S(50, "Hs-troponin: how we use it", {
        why: "<p>Two shortcuts: (1) patient arrived <b>>2 hours</b> after symptoms started and one hs-troponin is <b>below the sex-specific 99th percentile</b> → ACS much less likely. (2) Two values <b>90-120 minutes apart</b>, both below the 99th percentile with <b>minimal change (delta)</b> → discharge home.</p>",
        q: [
          Q("When can a SINGLE hs-troponin substantially lessen concern for ACS?", "Patient presents >2 hours after onset and it is below the sex-specific 99th percentile", ["Any time it is detectable", "When drawn within 10 minutes of onset", "Only if the EKG shows ST elevation"], "One low value is reassuring only if enough time has passed since symptoms began."),
          Q("How far apart are the two serial hs-troponins drawn?", "90-120 minutes", ["10 minutes", "6-12 hours", "24 hours"], "The slide says 90-120 minutes apart."),
          Q("Two hs-troponins below the 99th percentile with minimal change. Disposition?", "Discharge home", ["Emergent cath", "Admit to the ICU", "Start thrombolytics"], "Low values with minimal delta allow discharge.")
        ]
      }),
      S(51, "BNP", {
        why: "<p>BNP is made from a prohormone that splits into active <b>BNP</b> and inactive <b>NT-proBNP</b>. Labs measure one or the other, and the numbers aren't interchangeable, so compare like with like.</p>",
        q: [
          Q("Where is BNP primarily released from?", "The cardiac ventricles", ["The brain", "The atria only", "The kidneys"], "Despite its name, BNP comes mainly from the ventricles."),
          Q("Are BNP and NT-proBNP levels comparable?", "No", ["Yes, they are identical", "Only in women", "Only in CKD"], "The slide says BNP and NT-proBNP levels are not comparable.")
        ]
      }),
      S(52, "BNP: why it rises and when it's useless", {
        why: "<p>Stretched, overfilled ventricles release BNP to fight back: it makes the kidneys dump salt and water, blocks RAAS and sympathetic drive. It is renally cleared, so in AKI or bad CKD it is always high and can't be interpreted.</p>",
        q: [
          Q("BNP release rises in response to:", "High ventricular filling pressures, as in decompensated HF", ["Low blood sugar", "Pleural irritation", "Esophageal spasm"], "Stretched ventricles secrete BNP."),
          Q("Which is an effect of BNP?", "Natriuresis and inhibition of RAAS", ["Sodium retention", "RAAS activation", "Vasoconstriction"], "BNP promotes sodium loss and blocks RAAS and sympathetic activity."),
          Q("Why is BNP not helpful in significant CKD?", "It is renally cleared, so it is always elevated", ["It can't be measured in CKD", "CKD lowers BNP to zero", "CKD changes BNP into troponin"], "Poor renal clearance keeps BNP high regardless of heart failure.")
        ]
      })
    ],
    review: [
      Q("A patient arrives 45 minutes after chest pain began; first hs-troponin is normal. Next?", "Repeat hs-troponin in 1-2 hours", ["Discharge now", "Diagnose noncardiac pain", "Order a BNP instead"], "A single value only reassures if drawn >2 hours after onset."),
      Q("Which marker is most specific for cardiac muscle damage?", "Troponin I", ["BNP", "CK", "Myoglobin"], "Troponin I is found only in cardiac cells."),
      Q("Troponin is mildly up in a patient with SVT at 190 bpm and no chest pain. Best explanation?", "Troponin leak from cardiac stress (tachyarrhythmia)", ["Definite STEMI", "Lab error only", "Pericarditis"], "Tachyarrhythmias can leak troponin without a blocked artery."),
      Q("What makes hs-troponin good at ruling OUT MI?", "High sensitivity gives a high negative predictive value", ["High specificity", "It is only positive in STEMI", "It is cheaper"], "Few MIs are missed, so a negative result is trustworthy."),
      Q("Which EKG finding is most concerning for ongoing transmural injury?", "ST elevation in 2 contiguous leads", ["Isolated T inversion", "First-degree AV block", "Sinus tachycardia"], "ST elevation is the definitive finding.")
    ]
  });

  /* ---------------------------------------------------------------- LO 4 (part 2) */
  los.push({
    id: "lo4b", label: "LO 4b", title: "ED steps and first treatment",
    objective: "Describe the initial evaluation and management of a patient presenting with suspected acute coronary syndrome (Part 2: triage, the 10-minute EKG, aspirin, nitroglycerin, oxygen, STEMI pathway, anticoagulation).",
    slides: [
      S(53, "Step 1: arrival and triage", {
        why: "<p>Stability first (ABCs, vitals, O₂), then a focused history, while keeping the other killers in mind: <b>aortic dissection</b>, <b>PE</b>, <b>tension pneumothorax</b>. Dissection matters most here because giving antiplatelets/anticoagulants to a dissection can be fatal (standard teaching).</p>",
        q: [
          Q("Which life-threatening causes must be considered at triage besides ACS?", "Aortic dissection, PE and tension pneumothorax", ["GERD and costochondritis", "Anxiety and panic", "Biliary colic and pancreatitis only"], "The slide names dissection, PE and tension pneumothorax."),
          Q("What is assessed first on arrival?", "Airway, breathing, circulation, vitals, O₂ and stability", ["A CAC score", "A lipid panel", "A stress test"], "Step 1 starts with ABCs and stability.")
        ]
      }),
      S(54, "Step 2: 12-lead EKG within 10 minutes", {
        why: "<p>The EKG is the fastest way to find a STEMI (a totally blocked artery). That's why it must be read within 10 minutes, and why you never wait for troponin when the EKG already shows an occlusion: troponin takes hours, and muscle dies by the minute.</p>",
        q: [
          Q("How soon must the 12-lead EKG be obtained and read?", "Within 10 minutes of arrival or first medical contact", ["Within 1 hour", "Within 24 hours", "After troponin results"], "Step 2: EKG within 10 minutes."),
          Q("The EKG shows an acute coronary occlusion. Should you wait for troponin?", "No, don't delay reperfusion for troponin", ["Yes, always confirm with troponin first", "Wait for two troponins", "Wait for a BNP"], "Reperfusion decisions shouldn't wait when the EKG shows occlusion."),
          Q("The first EKG is nondiagnostic but suspicion remains. Next?", "Serial EKGs", ["Discharge", "Stress test immediately", "CAC score"], "Serial EKGs can catch an evolving STEMI.")
        ]
      }),
      S(55, "Step 3: labs and first treatment", {
        why: "<p><b>Aspirin 325 mg chewed</b>: chewing gets it absorbed fast, and it blocks platelet thromboxane right away (the clot is platelet-driven). <b>SL NTG</b> relieves pain by venodilation (less preload, less demand) and coronary dilation, but avoid it with hypotension or recent PDE-5 inhibitor use (standard teaching). <b>Oxygen only if hypoxemic</b>: extra O₂ in a normal-sat patient doesn't help and may constrict coronaries (standard teaching).</p>",
        q: [
          Q("What aspirin dose is given when ACS is suspected?", "325 mg chewable", ["81 mg swallowed whole", "650 mg IV", "1 g rectal only"], "The slide says chewable ASA 325 mg."),
          Q("When should oxygen be given?", "For hypoxemia; not routinely when O₂ sat is >90%", ["To every chest pain patient", "Only after the cath", "Never"], "Oxygen is for hypoxemia only."),
          Q("When should sublingual nitroglycerin be considered?", "Ongoing ischemic discomfort if hemodynamically appropriate", ["In every hypotensive patient", "Only after the cath", "Instead of aspirin"], "NTG treats ongoing ischemic pain when BP allows.")
        ]
      }),
      S(56, "STEMI in the ER", {
        why: "<p>STEMI = ST elevation in <b>2+ contiguous leads</b> (leads looking at the same wall) + a clinical picture of ischemia. Then: activate the cath lab, aspirin + a P2Y12 inhibitor (ticagrelor or prasugrel preferred over clopidogrel because they act faster and more strongly), primary PCI.</p>",
        q: [
          Q("STEMI is diagnosed by ST elevation in how many anatomically contiguous leads?", "2 or more", ["1", "6 or more", "All 12"], "ST elevation in 2+ contiguous leads with an ischemic picture is STEMI."),
          Q("Which P2Y12 inhibitors are generally preferred over clopidogrel for PCI?", "Ticagrelor or prasugrel", ["Aspirin or heparin", "Warfarin or apixaban", "Alteplase or tenecteplase"], "Ticagrelor or prasugrel are preferred in patients undergoing PCI."),
          Q("After diagnosing STEMI, what is activated?", "The STEMI/primary PCI pathway with interventional cardiology", ["An outpatient stress test", "A hospitalist admission for the morning", "A CAC score"], "Interventional cardiology is notified urgently.")
        ]
      }),
      S(57, "No ST elevation: serial hs-troponin", {
        pic: "<p>Photo: a clinician talking with a patient in a hospital bed.</p>",
        q: [
          Q("Initial EKG is normal or not ST elevation. When is the hs-troponin repeated?", "In 1-2 hours", ["In 10 minutes", "In 24 hours", "It is not repeated"], "The slide says repeat in 1-2 hours."),
          Q("History, exam and hs-troponin are highly suggestive of ACS. What happens?", "The cardiologist is called to evaluate at the ER bedside", ["The patient is discharged", "A stress test is done right away", "Thrombolytics are given"], "Highly suggestive findings bring cardiology to the bedside.")
        ]
      }),
      S(58, "Repeat EKGs and admission", {
        q: [
          Q("How often should EKGs be repeated in an ER patient with ongoing chest pain?", "Every 10-20 minutes", ["Every 6 hours", "Once a day", "Only at discharge"], "Repeat EKGs every 10-20 minutes look for an evolving STEMI."),
          Q("Patients with an H&P highly suggestive of ACS (UA/NSTEMI) are usually admitted by:", "The hospitalist service with cardiology consultation", ["Outpatient cardiology next week", "General surgery", "Psychiatry"], "They are admitted by hospitalists for UA/NSTEMI with cardiology consulting.")
        ]
      }),
      S(59, "Managing ongoing ischemic pain", {
        pic: "<p>Photo: a bottle of IV nitroglycerin.</p>",
        why: "<p>Beta blockers lower heart rate and contractility (less demand) and lengthen diastole (more perfusion time), but start them <b>orally within 24 hours</b>, not as an emergency IV push, and only if there is no heart failure, shock or bradycardia (standard teaching).</p>",
        q: [
          Q("When may IV nitroglycerin be considered?", "Persistent pain despite SL NTG, hypertension, or pulmonary edema", ["Hypotension", "Right after a PDE-5 inhibitor", "As a first step before SL NTG in everyone"], "The slide lists those three indications."),
          Q("When should an oral beta blocker be started in ACS?", "Within 24 hours if no contraindications", ["Only after discharge", "Never in ACS", "IV in every patient on arrival"], "The slide says initiate an oral beta blocker within 24 hours.")
        ]
      }),
      S(60, "Anticoagulation for diagnosed ACS", {
        why: "<p>Aspirin and P2Y12 inhibitors stop platelets; <b>heparin</b> (UFH or enoxaparin) stops the coagulation cascade that makes fibrin. ACS clots need both. Enoxaparin is renally cleared, so renal function matters for the choice (standard teaching).</p>",
        q: [
          Q("What are the parenteral anticoagulant options for ACS on the slide?", "Unfractionated heparin or enoxaparin", ["Warfarin or apixaban", "Aspirin or clopidogrel", "Alteplase or tenecteplase"], "UFH or LMWH (enoxaparin) are the options."),
          Q("Which factor helps decide between UFH and enoxaparin?", "Renal function", ["Hair color", "Cholesterol level", "Height"], "Choice depends on ACS type, strategy, renal function and circumstances.")
        ]
      })
    ],
    review: [
      Q("Put the ED steps in order:", "Triage and stability → EKG within 10 min → troponin, ASA, NTG as needed", ["Troponin → wait 6 h → EKG", "Stress test → EKG → aspirin", "Cath → EKG → history"], "Step 1 triage, step 2 EKG within 10 minutes, step 3 labs and treatment."),
      Q("A chest pain patient has O₂ sat 97%. Give oxygen?", "No; oxygen is only for hypoxemia", ["Yes, always 4 L", "Yes, 100% non-rebreather", "Only after nitroglycerin"], "Routine oxygen isn't given when saturation is above 90%."),
      Q("ST elevation in II, III and aVF with chest pain. Next step?", "Activate the STEMI pathway for primary PCI", ["Repeat troponin in 2 hours before deciding", "Admit for a morning stress test", "Discharge with follow-up"], "Don't wait for troponin when the EKG shows occlusion."),
      Q("Which drug is chewed in suspected ACS?", "Aspirin 325 mg", ["Nitroglycerin", "Metoprolol", "Heparin"], "Chewing aspirin speeds platelet inhibition."),
      Q("Which combination treats both platelet and fibrin parts of an ACS clot?", "Antiplatelets (ASA + P2Y12) plus heparin", ["Aspirin alone", "Oxygen plus nitroglycerin", "Beta blocker plus statin"], "Antiplatelets block platelets and heparin blocks the coagulation cascade.")
    ]
  });

  /* ---------------------------------------------------------------- LO 5 */
  los.push({
    id: "lo5", label: "LO 5", title: "HEART score and HEART Pathway",
    objective: "Apply validated clinical decision pathways, including the HEART score and HEART Pathway, to risk-stratify patients presenting with acute chest pain and determine appropriate disposition.",
    slides: [
      S(61, "When the pain resolves in the ER", {
        why: "<p>Most ER chest pain patients become pain-free quickly. The question then shifts from 'is this an MI now?' to 'is this person safe to go home, or high-risk enough to stay for observation?'. Decision pathways answer that.</p>",
        q: [
          Q("A chest pain patient becomes pain-free in the ER. What is still needed?", "Risk stratification to decide home vs observation", ["Nothing; discharge immediately", "Emergent cath", "Thrombolytics"], "They still need evaluation to decide if they're safe to go home."),
          Q("How long is a typical chest pain rule-out observation stay?", "23 hours", ["3 hours", "7 days", "30 days"], "The slide mentions a 23-hour observation stay.")
        ]
      }),
      S(62, "Acute chest pain pathway (flowchart)", {
        pic: "<ul><li>Patient with acute chest pain → history + physical examination → ECG.</li><li><b>Obvious noncardiac cause</b> → no cardiac testing required.</li><li><b>Obvious nonischemic cardiac cause</b> → other cardiac testing as needed.</li><li><b>Possible ACS</b> → obtain troponin → use CDP (clinical decision pathway) to risk stratify:<ul><li><b>Low risk</b> → no testing required → discharge.</li><li><b>Intermediate risk</b> → further diagnostic testing may be indicated → if moderate-severe abnormality → invasive coronary angiography.</li><li><b>High risk</b> → invasive coronary angiography.</li></ul></li></ul>",
        q: [
          Q("Possible ACS, troponin done, CDP says LOW risk. Next?", "No testing required; discharge", ["Invasive angiography", "Admit to ICU", "Stress test before leaving"], "Low risk by the pathway needs no further testing."),
          Q("Possible ACS, CDP says HIGH risk. Next?", "Invasive coronary angiography", ["Discharge", "CAC score", "No testing"], "High-risk patients go to invasive angiography."),
          Q("Intermediate risk with a moderate-severe abnormality on further testing leads to:", "Invasive coronary angiography", ["Discharge", "Repeat the same test", "Psychiatry referral"], "A moderate-severe abnormality moves intermediate patients to angiography.")
        ]
      }),
      S(63, "The HEART score", {
        why: "<p>Five letters, 0-2 points each, max 10: <b>H</b>istory (how suspicious), <b>E</b>KG (normal 0, nonspecific/LBBB/LVH 1, significant ST depression 2), <b>A</b>ge (&lt;45 0, 45-64 1, ≥65 2), <b>R</b>isk factors (none 0, 1-2 = 1, ≥3 or known CAD 2), <b>T</b>roponin (normal 0, 1-3x 1, >3x 2).</p>",
        q: [
          Q("In the HEART score, a 58-year-old gets how many points for age?", "1", ["0", "2", "3"], "Ages 45-64 score 1."),
          Q("Known CAD scores how many points under Risk factors?", "2", ["0", "1", "3"], "3+ risk factors or known CAD = 2."),
          Q("Troponin 2x normal scores how many points?", "1", ["0", "2", "3"], "1-3x normal = 1; >3x = 2.")
        ]
      }),
      S(64, "HEART score: what the total means", {
        why: "<p><b>0-3</b> low → home if EKG and troponins reassuring. <b>4-6</b> intermediate → serial troponins, observation, consider CCTA or stress. <b>7-10</b> high → urgent workup, usually admit.</p>",
        q: [
          Q("HEART score 2 with reassuring EKG and troponins. Disposition?", "Discharge may be appropriate", ["Emergent cath", "ICU admission", "Thrombolytics"], "0-3 is low risk."),
          Q("HEART score 5. What fits best?", "Serial troponins, observation, consider CCTA or stress testing", ["Discharge with no follow-up", "Immediate CABG", "Nothing; it's low risk"], "4-6 is intermediate risk."),
          Q("HEART score 8. What fits best?", "Further urgent evaluation, usually hospital-level care", ["Discharge home", "Outpatient stress test in a month", "No testing"], "7-10 is high risk.")
        ]
      }),
      S(65, "Inpatient evaluation", {
        q: [
          Q("Which is part of the inpatient team's evaluation?", "Review the ED workup, reassess symptoms, review EKG and prior testing", ["Repeat the entire ED workup from scratch only", "Discharge without review", "Order a CAC score for everyone"], "The slide lists those steps plus cardiac monitoring."),
          Q("When is continuous cardiac monitoring continued?", "When clinically indicated", ["Never", "For every patient for 30 days", "Only after discharge"], "Monitoring continues when clinically indicated.")
        ]
      }),
      S(66, "Inpatient troponin timing", {
        why: "<p>The hs assay sees change faster, so its repeat is sooner (1-2 h, then 3-6 h if intermediate risk). Conventional assays need 3-6 h to show a change. Either way, read the <b>pattern</b> (rise or fall) with the EKG and story.</p>",
        q: [
          Q("With hs-troponin, when is the first repeat?", "1-2 hours", ["3-6 hours", "12 hours", "24 hours"], "Hs-troponin is repeated in 1-2 hours."),
          Q("With a conventional troponin assay, when is it repeated?", "3-6 hours", ["10 minutes", "1-2 hours", "24 hours"], "Conventional troponin is repeated in 3-6 hours."),
          Q("Intermediate risk on hs-troponin: when is a third level drawn?", "At 3-6 hours", ["At 10 minutes", "At 24 hours", "It is never repeated"], "If intermediate risk, repeat again at 3-6 hours.")
        ]
      }),
      S(67, "Scenario: no ischemic changes, negative troponins", {
        q: [
          Q("The hospitalist sees no ischemic EKG changes and serial hs-troponins without a rise/fall. What do they decide next?", "Whether additional cardiac testing is necessary", ["To start thrombolytics", "To send for emergent CABG", "That the patient definitely has no CAD"], "They decide if more testing is needed based on overall risk.")
        ]
      }),
      S(68, "What negative troponins do and don't tell you", {
        why: "<p>Negative serial troponins rule out an acute <b>MI</b>, not CAD. A patient can have stable plaque causing exertional angina with perfectly normal troponins, so the next question is whether to test for CAD.</p>",
        q: [
          Q("Nonischemic EKG and negative serial hs-troponins mean:", "Acute MI is unlikely or ruled out, but CAD may still be present", ["CAD is ruled out", "The patient had an NSTEMI", "The patient needs CABG"], "They rule out MI, not underlying coronary disease."),
          Q("What should you tell the patient next?", "We need to decide whether more testing is appropriate", ["You have no heart disease", "You need surgery", "Stop all medications"], "The slide's script says further testing may still be needed.")
        ]
      }),
      S(69, "The HEART Pathway", {
        why: "<p>The HEART <b>score</b> is a number; the HEART <b>Pathway</b> is a rule for discharge. All three must be true: HEART ≤3, no ischemic EKG changes, negative serial troponins. That defines low risk: 30-day death/MACE <1%.</p>",
        q: [
          Q("Which is NOT a HEART Pathway criterion for early discharge?", "Negative stress test", ["HEART score ≤3", "No ischemic EKG changes", "Negative serial troponins"], "The pathway uses the score, the EKG and serial troponins, not a stress test."),
          Q("Low risk in the HEART Pathway means an estimated 30-day risk of death or MACE of:", "Below 1%", ["Below 10%", "Below 25%", "Zero"], "Low risk is <1% 30-day death or MACE.")
        ]
      }),
      S(70, "HEART score vs HEART Pathway", {
        q: [
          Q("What is the difference between the HEART score and the HEART Pathway?", "The score is a 0-10 risk number; the pathway combines it with EKG and serial troponins", ["They are identical", "The pathway is for STEMI only", "The score requires a stress test"], "The pathway is a clinical decision pathway built on the score."),
          Q("Which patients does the original HEART Pathway also exclude?", "Patients with known CAD", ["Women", "Patients over 45", "Smokers"], "The original pathway excludes known CAD.")
        ]
      }),
      S(71, "Rule-out: low risk → home", {
        q: [
          Q("Low-risk chest pain (nonischemic EKG, negative hs-troponin pathway, <1% MACE). Management?", "No routine admission or urgent testing; outpatient follow-up and risk factor care", ["Admit for a stress test", "Urgent CCTA before discharge", "Emergent cath"], "Low-risk patients go home with follow-up."),
          Q("For low-risk patients, what should still be addressed?", "Cardiovascular risk factors", ["Nothing", "Thrombolytics", "CABG planning"], "The slide says address cardiovascular risk factors.")
        ]
      }),
      S(72, "Rule-out: intermediate risk → more testing", {
        q: [
          Q("Intermediate risk with persistent concern for CAD. Which tests are used?", "CCTA for anatomy or stress imaging for inducible ischemia", ["Thrombolytics", "BNP only", "No testing"], "The slide lists CCTA and stress imaging."),
          Q("Stress imaging is used to assess:", "Inducible ischemia", ["Coronary anatomy directly", "Calcium score", "Valve area"], "Stress imaging shows whether ischemia can be provoked.")
        ]
      })
    ],
    review: [
      Q("HEART score: highly suspicious history (2), normal EKG (0), age 50 (1), 2 risk factors (1), normal troponin (0). Total and risk?", "4, intermediate", ["2, low", "6, high", "8, high"], "2+0+1+1+0 = 4, which is 4-6 intermediate."),
      Q("HEART score: slightly suspicious history (0), normal EKG (0), age 40 (0), 1 risk factor (1), normal troponin (0). Disposition with negative serial troponins?", "Discharge (HEART Pathway low risk)", ["Admit for cath", "ICU", "Thrombolytics"], "Score 1 with a normal EKG and negative troponins meets low-risk criteria."),
      Q("A HEART score of 3 but ST depression on the EKG. Low-risk pathway?", "No; ischemic EKG changes exclude it", ["Yes, the score is ≤3", "Yes, if troponins are normal once", "Only for women"], "The pathway needs no ischemic EKG changes."),
      Q("Which HEART component scores 2 for '>3x normal'?", "Troponin", ["History", "Age", "Risk factors"], "Troponin >3x normal = 2 points."),
      Q("What does a negative HEART Pathway NOT rule out?", "Stable CAD", ["Acute MI", "High 30-day MACE", "Need for emergent cath"], "It rules out acute MI and high short-term risk, not underlying CAD.")
    ]
  });

  /* ---------------------------------------------------------------- LO 6 */
  los.push({
    id: "lo6", label: "LO 6", title: "Choosing and reading the tests (Jane, Stan)",
    objective: "Select and interpret appropriate diagnostic testing for patients with suspected CAD, including coronary CT angiography (CCTA), exercise and pharmacologic stress testing, myocardial perfusion imaging, and left heart catheterization, based on clinical presentation and pretest probability.",
    slides: [
      S(73, "CCTA", {
        why: "<p>CCTA = an anatomy test with contrast: it shows plaque and narrowing in people with stable chest pain and no known CAD (intermediate-to-high likelihood).</p>",
        q: [
          Q("CCTA is commonly used in which patients?", "Stable chest pain, intermediate-to-high likelihood, no known CAD", ["Active STEMI", "Known CAD with stents", "Asymptomatic low-risk adults"], "That is the slide's main use."),
          Q("What does CCTA use to see the coronaries?", "CT with IV contrast", ["A radioactive tracer", "Ultrasound", "A treadmill"], "CCTA is CT with IV contrast.")
        ]
      }),
      S(74, "CCTA: advantages and limitations", {
        why: "<p>The key limitation: CCTA shows a narrowing but <b>not whether it causes ischemia</b> (a 60% lesion may or may not limit flow). Stress tests answer that question; CT-FFR or invasive FFR can too.</p>",
        q: [
          Q("What does a normal CCTA (no plaque or stenosis) mean?", "Obstructive CAD is very unlikely", ["CAD is definite", "Ischemia is present", "The test failed"], "A clean CCTA makes obstructive CAD very unlikely."),
          Q("What can CCTA NOT directly tell you?", "Whether a lesion causes myocardial ischemia", ["Where plaque is", "Whether plaque is calcified", "The degree of stenosis"], "CCTA shows anatomy, not whether a lesion limits flow."),
          Q("Which patient factor limits CCTA image quality?", "Rapid or irregular heart rate", ["Normal sinus rhythm at 60", "Being a woman", "Age 40"], "Fast or irregular rhythms blur the images.")
        ]
      }),
      S(75, "Stress testing: when and how", {
        why: "<p>A stress test answers a <b>function</b> question: can I provoke ischemia? Two ways to stress (exercise or drugs) and several ways to look (EKG alone, echo, nuclear MPI, cardiac MRI). It is only for <b>clinically stable</b> patients.</p>",
        q: [
          Q("Stress testing is used to evaluate for:", "Inducible myocardial ischemia in stable patients", ["Active STEMI", "Calcium score", "Valve area only"], "It looks for ischemia that can be provoked in stable patients."),
          Q("Which is NOT one of the imaging options with stress testing on the slide?", "CAC scoring", ["Stress echocardiography", "Nuclear MPI", "Stress cardiac MRI"], "The options are exercise ECG alone, stress echo, MPI and stress cardiac MRI.")
        ]
      }),
      S(76, "Stress testing outpatient: Jane", {
        why: "<p>Jane had one exertional episode two weeks ago that resolved with rest and is well now: stable, not active chest pain, so outpatient evaluation (stress testing) fits. Active chest pain would mean the ER, not a stress test.</p>",
        q: [
          Q("Jane, 69, had substernal pressure walking uphill 2 weeks ago that resolved with rest; she feels well now. Setting for workup?", "Outpatient evaluation such as stress testing", ["Call 911 now", "Emergent cath", "No workup ever"], "She is stable and symptom-free now, so outpatient testing fits."),
          Q("Stress testing is NOT used for which patient?", "A patient with active chest pain right now", ["A stable patient with exertional symptoms", "A stable patient with suspected CAD", "Known CAD with new stable symptoms"], "Active chest pain is an ER problem, not a stress test.")
        ]
      }),
      S(77, "Pretest probability", {
        q: [
          Q("Pretest probability is:", "The likelihood of obstructive CAD before testing", ["The chance a test is positive", "The 10-year stroke risk", "The troponin level"], "It is the estimated likelihood of obstructive CAD before testing."),
          Q("Which is used to estimate pretest probability?", "Age, sex and symptom characteristics", ["Troponin and BNP", "CAC score only", "EF only"], "Age, sex, symptoms and clinical factors estimate it.")
        ]
      }),
      S(78, "Pretest probability table", {
        pic: "<p><b>Pretest probabilities of obstructive CAD in symptomatic patients</b> (A) according to age, sex and symptoms; (B) according to age, sex, symptoms and CAC.</p><table class=\"ss-table\"><tr><td><b>Age, y</b></td><td><b>Chest pain: men</b></td><td><b>Chest pain: women</b></td><td><b>Dyspnea: men</b></td><td><b>Dyspnea: women</b></td></tr><tr><td>30-39</td><td>≤4</td><td>≤5</td><td>0</td><td>3</td></tr><tr><td>40-49</td><td>≤22</td><td>≤10</td><td>12</td><td>3</td></tr><tr><td>50-59</td><td>≤32</td><td>≤13</td><td>20</td><td>9</td></tr><tr><td>60-69</td><td>≤44</td><td>≤16</td><td>27</td><td>14</td></tr><tr><td>70+</td><td>≤52</td><td>≤27</td><td>32</td><td>12</td></tr></table><ul><li>(A) Pretest probability based on age, sex and symptoms: <b>Low ≤15%</b> → <b>Intermediate-High &gt;15%</b>.</li><li>(B) Based on age, sex, symptoms and CAC score: ≤15% (CAC 1-99), &gt;15%-50% (CAC ≥100-999), &gt;50% (CAC ≥1,000).</li><li>Figure 2 caption: The pretest probability shown is for patients with anginal symptoms. Patients with lower-risk symptoms would be expected to have lower pretest probability. The darker green and orange-shaded regions denote the groups in which non-invasive testing is most beneficial (pretest probability &gt;15%). The light green-shaded regions denote the groups with pretest probability of CAD ≤15% in which the testing for diagnosis may be based on clinical judgement.</li></ul>",
        why: "<p>Patterns to remember: probability rises with <b>age</b>, and <b>men</b> are higher than women at every age. A 70+ man with chest pain is up to 52%; a woman the same age up to 27%.</p>",
        q: [
          Q("Pretest probability for a man aged 70+ with chest pain is up to:", "52%", ["4%", "16%", "27%"], "The table shows ≤52% for men 70+ with chest pain."),
          Q("At the same age with chest pain, who has the higher pretest probability?", "Men", ["Women", "They are equal", "It depends only on CAC"], "Men have higher values than women in every age band."),
          Q("Above what pretest probability is noninvasive testing most beneficial?", ">15%", [">5%", ">50%", ">90%"], "Darker regions (>15%) are where noninvasive testing helps most.")
        ]
      }),
      S(79, "Low vs intermediate-high probability", {
        q: [
          Q("Pretest probability ≤15%. What is appropriate?", "Testing may be deferred; exercise EKG in selected patients", ["Invasive cath", "CCTA in everyone", "Thrombolytics"], "Low probability allows deferring testing."),
          Q("Pretest probability >15%. What is appropriate?", "Stress testing or CCTA", ["No testing", "Only an exercise EKG", "CABG"], "Intermediate-high probability benefits from noninvasive testing.")
        ]
      }),
      S(80, "Case: a 65-year-old woman", {
        why: "<p>No answer slide; answered from the deck's rules. Substernal + exertional, but <b>not relieved by rest or NTG</b> = 2 of 3 features (atypical by the old criteria). A woman 60-69 with chest pain is up to about 16% (intermediate-high), so noninvasive testing (stress test or CCTA) is reasonable if she is stable now. Pain that does not resolve with rest or NTG should also make you ask whether this could be ACS, which would mean the ER instead (slide 21).</p>",
        q: [
          Q("Substernal, exertional, NOT relieved by rest or NTG: how many classic angina features?", "2 of 3", ["3 of 3", "1 of 3", "0 of 3"], "She has substernal and exertional, but not relief by rest/NTG."),
          Q("A stable 65-year-old woman with exertional substernal pain has about what pretest category?", "Intermediate-high (>15%)", ["Low (≤15%)", "Zero", "Over 90%"], "Women 60-69 with chest pain are up to about 16%, just over the 15% line.")
        ]
      }),
      S(81, "Stable Stan", {
        why: "<p>Stan: 46-year-old man, obese, sedentary, no care for 25 years, and 3 months of chest pain with effort (mowing for 20 minutes) relieved by rest: classic stable angina in someone with likely undiagnosed risk factors.</p>",
        q: [
          Q("Stan gets left chest discomfort after 20 minutes of mowing, relieved by rest, for 3 months. Most likely?", "Stable angina", ["Unstable angina", "STEMI", "Pleurisy"], "Predictable effort symptoms relieved by rest for months = stable angina."),
          Q("Which of Stan's features raises his CAD risk?", "50 lb weight gain with a sedentary desk job", ["Playing college football", "His finance degree", "Living in Ohio"], "Obesity and inactivity are risk factors.")
        ]
      }),
      S(82, "Stan's stress test", {
        why: "<p>Lexiscan (regadenoson) is a vasodilator, so it rarely changes the EKG; the imaging is what counts. <b>Reversible ischemia on MPI</b> = a positive test, so the next step is a left heart cath (slide 83).</p>",
        q: [
          Q("Stan's Lexiscan MPI shows reversible ischemia with no EKG changes. What does this mean?", "A positive stress test: inducible ischemia", ["A normal test", "A prior infarct only", "A false test because the EKG was normal"], "Ischemia on imaging makes the test positive even with a normal EKG."),
          Q("What is Stan's next step?", "Left heart catheterization (coronary angiography)", ["Repeat the stress test in a year", "Discharge with no follow-up", "CAC score"], "A positive stress test leads to cath.")
        ]
      }),
      S(83, "Stress test: a good rule-out test", {
        q: [
          Q("A stress test is normal. What does that mean?", "Very low chance of significant CAD", ["CAD is definite", "The patient needs a cath", "The patient had an MI"], "A negative stress test is a good rule-out."),
          Q("A stress test is positive. What is next?", "Left heart cath / coronary angiography", ["Nothing", "A second stress test always", "Thrombolytics"], "A positive test needs the next test: the cath.")
        ]
      }),
      S(84, "When to cath, and prep", {
        q: [
          Q("When is left heart cath used?", "When suspicion is compelling or noninvasive tests can't rule out CAD", ["As screening for everyone", "Before any stress test", "Only after CABG"], "The cath is invasive, so it's reserved for those situations."),
          Q("What must a patient be able to do for a cardiac cath?", "Lie flat fairly comfortably and be NPO after midnight", ["Run on a treadmill", "Hold their breath for 2 minutes", "Stop all medications for a week"], "The slide lists lying flat and NPO after midnight.")
        ]
      }),
      S(85, "Possible cath outcomes", {
        q: [
          Q("The cath after a positive stress test shows no significant disease. This is:", "A false positive stress test", ["A true positive", "A missed STEMI", "Impossible"], "The slide says this happens sometimes."),
          Q("The cath finds disease that is amenable to stenting. The cath becomes:", "Both diagnostic and therapeutic", ["Only diagnostic", "Cancelled", "A CABG"], "Stenting turns it into a diagnostic and therapeutic procedure.")
        ]
      }),
      S(86, "LHC findings: what counts as significant", {
        why: "<p><b>≥70%</b> in a regular artery, but <b>≥50% in the left main</b>, because the left main feeds most of the LV (LAD + circumflex), so less narrowing is already dangerous. For in-between lesions, measure physiology: <b>FFR ≤0.80</b> or <b>iFR ≤0.89</b> = significant.</p>",
        q: [
          Q("What degree of non-left-main stenosis is generally significant?", "≥70%", ["≥30%", "≥50%", "≥90%"], "Non-left-main lesions are significant at ≥70%."),
          Q("What degree of LEFT MAIN stenosis is significant?", "≥50%", ["≥70%", "≥90%", "≥30%"], "The left main supplies so much muscle that ≥50% counts."),
          Q("For an intermediate stenosis, which FFR indicates physiologic significance?", "≤0.80", ["≥0.95", "≤0.99", "1.0"], "FFR ≤0.80 (or iFR ≤0.89) means the lesion limits flow.")
        ]
      }),
      S(87, "TIMI flow", {
        why: "<p>TIMI is a 0-3 scale of how dye flows: <b>0</b> nothing past the blockage, <b>1</b> dye gets past but doesn't fill the artery, <b>2</b> fills but slowly, <b>3</b> normal. After PCI the goal is TIMI 3.</p>",
        q: [
          Q("TIMI 0 flow means:", "No flow: complete occlusion", ["Normal flow", "Delayed filling", "Minimal flow beyond the obstruction"], "TIMI 0 is no flow."),
          Q("What is the goal TIMI flow after successful PCI?", "TIMI 3", ["TIMI 0", "TIMI 1", "TIMI 2"], "TIMI 3 = normal perfusion."),
          Q("The distal artery fills, but flow is delayed. TIMI grade?", "2", ["0", "1", "3"], "TIMI 2 is partial perfusion with delayed flow.")
        ]
      }),
      S(88, "Fractional flow reserve (FFR)", {
        pic: "<p>Diagram: <b>Measure of the impact of a stenosis on the maximum flow in a given artery.</b> A coronary artery with a stenosis under <b>maximum flow (adenosine)</b>; pressure proximal and pressure distal are measured; FFR = pressure distal / pressure proximal = 0.70 → 70% of maximum flow. Myocardium shown downstream.</p>",
        why: "<p>FFR asks 'how much pressure is lost across this narrowing at maximum flow?'. Adenosine opens the small vessels fully, then a pressure wire measures beyond vs before. 0.70 means only 70% of normal maximal flow gets through → significant (≤0.80).</p>",
        q: [
          Q("FFR compares:", "Pressure beyond a stenosis with pressure before it", ["Flow in the aorta vs the vena cava", "LV pressure vs aortic pressure", "Troponin before and after"], "FFR = distal pressure / proximal pressure."),
          Q("An FFR of 0.70 means the lesion is:", "Physiologically significant (restricting flow)", ["Not significant", "A normal artery", "Totally occluded"], "0.70 is below the 0.80 cutoff."),
          Q("Which drug is used during FFR to produce maximum flow?", "Adenosine", ["Dobutamine", "Heparin", "Nitroprusside"], "The figure labels maximum flow with adenosine.")
        ]
      }),
      S(89, "Guiding treatment decisions", {
        q: [
          Q("Which is a reason to consider PCI or CABG?", "Persistent angina despite medical therapy", ["Any plaque on CCTA", "A CAC score of 10", "Normal FFR"], "Refractory angina is on the 'consider PCI or CABG' list."),
          Q("What does the decision to revascularize depend on?", "Anatomy, ischemia, symptoms and the patient", ["Only the troponin", "Only the patient's age", "Only the CAC score"], "The slide lists all four.")
        ]
      })
    ],
    review: [
      Q("A CCTA shows a 60% LAD lesion. What question is still unanswered?", "Whether it causes ischemia (needs stress test or FFR)", ["Whether there is plaque", "Where the plaque is", "Whether the LAD exists"], "CCTA doesn't show whether a lesion limits flow."),
      Q("Left main 55% stenosis on cath. Significant?", "Yes, ≥50% in the left main is significant", ["No, needs ≥70%", "No, the left main doesn't matter", "Only if TIMI 0"], "The left main cutoff is ≥50%."),
      Q("After a stent, dye fills the artery normally. TIMI grade?", "3", ["0", "1", "2"], "Normal flow is TIMI 3."),
      Q("A 45-year-old woman with chest pain has a pretest probability of about 10%. Next?", "Testing may be deferred; consider exercise EKG in selected cases", ["Emergent cath", "CABG", "CCTA is required"], "≤15% is low, so testing may be deferred."),
      Q("Lexiscan MPI is negative. What does that tell you?", "Very low chance of significant CAD", ["The patient needs a cath", "STEMI", "CAD is confirmed"], "A negative stress test is a good rule-out.")
    ]
  });

  /* ---------------------------------------------------------------- LO 8 */
  los.push({
    id: "lo8", label: "LO 8", title: "PCI, stents, DAPT and CTOs",
    objective: "Compare bare-metal stents (BMS) and drug-eluting stents (DES) with respect to their mechanism, efficacy, risk of restenosis and stent thrombosis, follow-up considerations, and role in contemporary PCI.",
    slides: [
      S(90, "How PCI restores flow; DES vs BMS", {
        why: "<p>After a stent, the artery heals by growing a new inner lining over the metal (<b>neointima</b>). Too much of that healing tissue re-narrows the artery (restenosis). A <b>DES</b> slowly releases an antiproliferative drug that keeps that overgrowth in check; a <b>BMS</b> has no drug, so it restenoses more.</p>",
        q: [
          Q("What does a drug-eluting stent release?", "Medication that reduces neointimal growth and restenosis", ["Heparin to dissolve clots", "Contrast dye", "Nitric oxide only"], "DES drugs limit neointimal growth."),
          Q("Why does a bare-metal stent have higher restenosis risk?", "No drug to limit neointimal growth", ["It dissolves after a week", "It's made of plastic", "It can't be expanded"], "Without an antiproliferative drug, tissue regrows inside the stent."),
          Q("Which stent is most commonly used today?", "Drug-eluting stent", ["Bare-metal stent", "Balloon only", "Plastic stent"], "DES is the most commonly used.")
        ]
      }),
      S(91, "Balloon angioplasty (pictures)", {
        pic: "<p>Balloon angioplasty: artery blocked with plaque deposits → balloon on a catheter inflated across the plaque → artery opened. Cross-sections: outer covering, middle layer, inner layer, inner channel → channel size reduced by blockage → channel opened with angioplasty.</p>",
        q: [
          Q("In balloon angioplasty, what happens to the plaque?", "It is compressed outward, widening the channel", ["It is removed through the catheter", "It dissolves", "It moves into the aorta"], "The inflated balloon pushes plaque into the wall to open the lumen.")
        ]
      }),
      S(92, "Stent deployment (pictures)", {
        pic: "<p>Uninflated balloon catheter across the plaque → dilated balloon catheter → dilated balloon catheter and stent → stent deployed.</p>",
        q: [
          Q("What is the order of stent placement shown?", "Uninflated balloon → inflated balloon → balloon with stent → stent deployed", ["Stent deployed → balloon inflated → catheter removed → plaque", "Plaque removed → stent → balloon", "CABG → balloon → stent"], "The stent is expanded by the balloon and left in place.")
        ]
      }),
      S(93, "BMS vs DES (PANCE takeaway)", {
        why: "<p>DES wins on restenosis and repeat procedures, and modern DES do <b>not</b> raise stent thrombosis risk. That's why BMS are now 'older technology'.</p>",
        q: [
          Q("Why are contemporary DES preferred over BMS?", "They reduce restenosis and repeat revascularization without raising stent thrombosis risk", ["They need no antiplatelet therapy", "They are cheaper and dissolve", "They eliminate all risk of thrombosis"], "That is the slide's PANCE takeaway."),
          Q("Which stent has the LOWER restenosis risk?", "DES", ["BMS", "They are equal", "Neither ever restenoses"], "The drug in a DES limits neointimal growth.")
        ]
      }),
      S(94, "Stent thrombosis vs restenosis", {
        why: "<p>Two very different failures. <b>Thrombosis</b> = a clot, sudden, presents as ACS/MI, usually from stopping DAPT too early or a poorly expanded stent. <b>Restenosis</b> = tissue regrowth (neointimal hyperplasia), gradual, presents as returning angina.</p>",
        q: [
          Q("Sudden ACS months after PCI in a patient who stopped DAPT early. Most likely?", "In-stent thrombosis", ["In-stent restenosis", "Pseudoaneurysm", "Cholesterol emboli"], "Stopping DAPT early is the classic thrombosis risk."),
          Q("Gradually returning angina 6 months after PCI. Most likely?", "In-stent restenosis", ["In-stent thrombosis", "Retroperitoneal bleed", "AV fistula"], "Restenosis is gradual tissue regrowth causing recurrent angina."),
          Q("In-stent restenosis is primarily caused by:", "Neointimal hyperplasia", ["Acute clot formation", "Contrast allergy", "Vasospasm"], "Restenosis = tissue growth, not clot.")
        ]
      }),
      S(95, "Stents and DAPT", {
        why: "<p>The balloon and stent injure the lining and leave bare metal exposed, both strong platelet magnets, until new endothelium covers the stent. DAPT blocks platelets two ways: <b>aspirin</b> (thromboxane A₂) + a <b>P2Y12 inhibitor</b> (ADP pathway).</p>",
        q: [
          Q("What two drugs make up DAPT?", "Aspirin plus a P2Y12 inhibitor", ["Aspirin plus heparin", "Heparin plus warfarin", "Statin plus beta blocker"], "DAPT = aspirin + a P2Y12 inhibitor."),
          Q("Aspirin inhibits platelets by blocking:", "Thromboxane A₂ production", ["The ADP receptor", "Factor Xa", "Vitamin K"], "Aspirin blocks platelet thromboxane A₂."),
          Q("Which P2Y12 inhibitor is a non-thienopyridine?", "Ticagrelor", ["Clopidogrel", "Prasugrel", "Aspirin"], "Clopidogrel and prasugrel are thienopyridines; ticagrelor is not.")
        ]
      }),
      S(96, "How long DAPT lasts after PCI", {
        q: [
          Q("ACS treated with PCI: DAPT duration (not high bleeding risk)?", "At least 12 months", ["1 month", "6 months", "Lifelong P2Y12 only"], "ACS + PCI = 12 months of DAPT."),
          Q("Chronic (stable) coronary disease treated with PCI: DAPT duration?", "6 months, then single antiplatelet", ["12 months", "2 weeks", "No DAPT"], "Stable CAD + PCI = aspirin + clopidogrel for 6 months."),
          Q("Which P2Y12 inhibitor is named for chronic coronary disease after PCI?", "Clopidogrel", ["Prasugrel", "Ticagrelor", "Cangrelor"], "The slide says aspirin + clopidogrel for 6 months.")
        ]
      }),
      S(97, "Chronic total occlusion (CTO)", {
        why: "<p>A slowly closing artery gives the heart time to grow <b>collaterals</b> (natural bypasses). They're enough at rest but not with exercise, so some people have exertional angina and others have none.</p>",
        q: [
          Q("A CTO is defined as:", "100% occlusion with TIMI 0 flow for ≥3 months", ["70% stenosis for 1 month", "A clot that dissolves in a day", "Any calcified plaque"], "That's the slide's definition."),
          Q("Why can a patient with a CTO have no symptoms at rest?", "Collateral vessels maintain flow at rest", ["The artery reopens at rest", "The heart stops needing oxygen", "TIMI 3 flow continues"], "Collaterals supply enough blood at rest but not always during exercise.")
        ]
      }),
      S(98, "Treating a CTO", {
        q: [
          Q("When is CTO PCI considered?", "Lifestyle-limiting angina despite optimal medical therapy, with ischemia or viable myocardium in that territory", ["In every CTO", "Only in asymptomatic patients", "Only if the CTO is less than 3 months old"], "Both conditions on the slide justify CTO PCI."),
          Q("Which is NOT a CTO treatment option on the slide?", "Thrombolytics", ["Optimal medical therapy", "CTO PCI", "CABG"], "The three options are medical therapy, CTO PCI and CABG.")
        ]
      })
    ],
    review: [
      Q("Stent thrombosis vs restenosis: which presents as sudden MI?", "Stent thrombosis", ["Restenosis", "Both equally", "Neither"], "Thrombosis is an acute clot; restenosis is gradual."),
      Q("NSTEMI treated with a DES. How long is DAPT?", "At least 12 months", ["6 months", "1 month", "None"], "ACS treated with PCI gets 12 months."),
      Q("Stable angina treated with PCI. DAPT plan?", "Aspirin + clopidogrel for 6 months, then single antiplatelet", ["12 months ticagrelor", "Aspirin alone from day 1", "Warfarin"], "Chronic coronary disease + PCI = 6 months."),
      Q("What is the most important modifiable risk factor for stent thrombosis?", "Stopping DAPT too early", ["Using a DES", "Exercising", "Taking a statin"], "Premature DAPT discontinuation is the classic cause."),
      Q("Which stent type is preferred in contemporary PCI?", "Drug-eluting stent", ["Bare-metal stent", "No stent ever", "Balloon only"], "DES reduces restenosis without more thrombosis.")
    ]
  });

  /* ---------------------------------------------------------------- LO 9 */
  los.push({
    id: "lo9", label: "LO 9", title: "Cath and PCI complications",
    objective: "Recognize complications associated with coronary angiography and PCI, including in-stent thrombosis, restenosis, vascular access-site complications, retroperitoneal hemorrhage, pseudoaneurysm, contrast-associated acute kidney injury, and cholesterol embolization syndrome.",
    slides: [
      S(99, "Access-site complications: radial vs femoral", {
        why: "<p>The wrist is small and superficial, so bleeding is easy to see and compress: that is why radial access has fewer serious bleeds (standard teaching). The groin's big artery sits near the vein and the retroperitoneum, so femoral access adds pseudoaneurysm, AV fistula and hidden retroperitoneal bleeding.</p>",
        q: [
          Q("Which complication is specific to FEMORAL access on the slide?", "Retroperitoneal hemorrhage", ["Radial artery occlusion", "Compartment syndrome of the forearm", "Arterial perforation of the wrist"], "Retroperitoneal bleeding, pseudoaneurysm and AV fistula are femoral complications."),
          Q("Which complication is specific to RADIAL access?", "Radial artery occlusion", ["Pseudoaneurysm", "Retroperitoneal hemorrhage", "AV fistula"], "Radial artery occlusion is a radial access complication."),
          Q("Which complication occurs with BOTH radial and femoral access?", "Hematoma/bleeding", ["AV fistula", "Retroperitoneal hemorrhage", "Radial artery occlusion"], "Hematoma and bleeding are listed under both.")
        ]
      }),
      S(100, "Retroperitoneal hemorrhage: mechanism", {
        pic: "<p>Figure: femoral artery puncture site above the inguinal ligament with retroperitoneal blood collecting beside the aorta.</p>",
        why: "<p>Above the inguinal ligament the artery can't be compressed against bone and bleeds backward into the retroperitoneum, a big hidden space. So the groin can look fine while the patient bleeds liters.</p>",
        q: [
          Q("Retroperitoneal hemorrhage is usually associated with:", "A high femoral puncture above the inguinal ligament", ["A radial puncture", "A low femoral puncture below the bifurcation", "A jugular line"], "High punctures bleed into the retroperitoneum."),
          Q("Why can retroperitoneal bleeding be missed?", "The blood collects where it may not be externally visible", ["It never causes symptoms", "It only occurs weeks later", "It always shows a large groin hematoma"], "The retroperitoneum hides the blood.")
        ]
      }),
      S(101, "Retroperitoneal hemorrhage: presentation", {
        q: [
          Q("After a femoral cath, a patient has back pain, BP 88/50, HR 120 and a falling Hgb with a normal groin. Suspect?", "Retroperitoneal hemorrhage", ["Pseudoaneurysm", "AV fistula", "Contrast AKI"], "Back/flank pain, shock and anemia without groin swelling is classic."),
          Q("Which finding is typical of retroperitoneal hemorrhage?", "Decreasing hemoglobin/hematocrit", ["Continuous bruit", "Livedo reticularis", "Pulsatile groin mass"], "Falling Hgb from hidden bleeding is typical.")
        ]
      }),
      S(102, "Retroperitoneal hemorrhage: diagnosis and management", {
        pic: "<p>CT image of the abdomen with an arrow pointing to retroperitoneal blood.</p>",
        q: [
          Q("How is retroperitoneal hemorrhage diagnosed?", "CT/CT angiography of the abdomen and pelvis", ["Duplex ultrasound of the groin", "EKG", "Troponin"], "CT shows the retroperitoneal blood."),
          Q("What is done if bleeding persists despite support and transfusion?", "Endovascular intervention or surgical repair", ["Thrombin injection", "Observation only", "Start heparin"], "Persistent bleeding needs endovascular or surgical repair.")
        ]
      }),
      S(103, "Pseudoaneurysm: what it is", {
        pic: "<p>Normal artery (tunica adventitia, media, intima) vs pseudoaneurysm with a tear extending through the media and blood collecting outside the wall.</p>",
        why: "<p>'Pseudo' because the wall of the sac is <b>not artery wall</b>; it's just surrounding tissue holding a pocket of blood that still connects to the artery through the hole. A true aneurysm involves all three layers of the wall (standard teaching).</p>",
        q: [
          Q("In a femoral pseudoaneurysm, what holds the blood in place?", "The surrounding tissues", ["All three layers of the artery wall", "A stent", "The vein"], "Blood pools outside the artery, held by surrounding tissue."),
          Q("What causes a pseudoaneurysm after a cath?", "The arterial puncture fails to close", ["Contrast allergy", "Cholesterol emboli", "Stent thrombosis"], "The hole doesn't seal, so blood leaks into a sac.")
        ]
      }),
      S(104, "Pseudoaneurysm: diagnosis", {
        q: [
          Q("Which finding suggests a femoral pseudoaneurysm?", "Pulsatile mass or bruit at the access site", ["Continuous bruit with a thrill", "Livedo reticularis", "Falling Hgb with normal groin and back pain"], "A pulsatile mass or bruit with pain/swelling suggests pseudoaneurysm."),
          Q("What is the diagnostic test of choice for femoral pseudoaneurysm?", "Duplex ultrasound", ["CT of the abdomen", "Angiography", "EKG"], "Duplex ultrasound is the test of choice.")
        ]
      }),
      S(105, "Pseudoaneurysm: treatment", {
        pic: "<p>Diagram: a pseudoaneurysm off the femoral artery with a syringe injecting it (ultrasound-guided thrombin injection); labels: common femoral vein and artery, greater saphenous vein, deep femoral artery, femoral vein and superficial femoral artery.</p>",
        q: [
          Q("Small, stable pseudoaneurysm (<2 cm). Management?", "Observation with follow-up ultrasound", ["Immediate surgery", "Thrombin injection always", "Start heparin"], "Small ones may resolve on their own."),
          Q("Larger or symptomatic pseudoaneurysm. Commonly preferred treatment?", "Ultrasound-guided thrombin injection", ["Observation only", "Open surgery first", "Thrombolytics"], "Thrombin injection clots the sac."),
          Q("When is surgical repair used?", "Complicated cases or failure of less invasive treatment", ["For every pseudoaneurysm", "Never", "Only under 2 cm"], "Surgery is reserved for complicated or failed cases.")
        ]
      }),
      S(106, "AV fistula", {
        why: "<p>The needle went through both the artery and the vein, leaving a channel between them. Blood flows from high to low pressure all the time, in systole and diastole, so the bruit is <b>continuous</b> (a pseudoaneurysm's bruit is systolic, standard teaching).</p>",
        q: [
          Q("What is a femoral AV fistula after a cath?", "An abnormal connection between the femoral artery and vein", ["A clot in the stent", "Blood in the retroperitoneum", "A sac held by surrounding tissue"], "Both vessels were injured, creating a connection."),
          Q("Which exam finding suggests an AV fistula?", "Continuous bruit or palpable thrill", ["Blue toes with good pulses", "Livedo reticularis", "Flank ecchymosis only"], "Constant artery-to-vein flow causes a continuous bruit or thrill.")
        ]
      }),
      S(107, "AV fistula: management", {
        q: [
          Q("Small asymptomatic AV fistula. Management?", "Observation; many close on their own", ["Emergency surgery", "Thrombin injection", "Thrombolytics"], "Many small fistulas close spontaneously."),
          Q("Which endovascular options are used for selected fistulas?", "Covered stent or embolization", ["Thrombin injection", "Balloon angioplasty only", "IV heparin"], "The slide lists covered stent or embolization.")
        ]
      }),
      S(108, "Contrast-associated AKI", {
        why: "<p>Iodinated contrast constricts the kidney's vessels and is toxic to tubular cells (standard teaching); kidneys with less reserve (CKD ≥3b, diabetes) are hit harder. Timing: creatinine rises within about 1-3 days and usually recovers, unlike cholesterol-emboli AKI, which comes later and keeps worsening.</p>",
        q: [
          Q("Which patients are most at risk for contrast-associated AKI?", "Pre-existing CKD (stage IIIb or higher) and diabetes", ["Young athletes", "Patients with normal kidneys only", "Patients with a radial approach only"], "CKD ≥IIIb and diabetes raise risk."),
          Q("How is contrast-associated AKI mainly prevented?", "Hydration and holding nephrotoxic medications", ["Giving more contrast", "Diuretics before the cath", "Steroids"], "Hydration and holding nephrotoxins are the main prevention."),
          Q("Besides contrast, what else can contribute to AKI after a cath?", "Hypotension, dehydration and hemodynamic instability", ["High HDL", "A drug-eluting stent", "Radial access"], "The slide lists those other factors.")
        ]
      }),
      S(109, "Cholesterol emboli syndrome", {
        pic: "<p>Photo of a leg with a lacy, purple-red net pattern on the skin: <b>LIVEDO RETICULARIS</b>.</p>",
        why: "<p>The catheter scrapes the aorta and knocks loose cholesterol crystals that shower downstream into small arteries: in the skin (livedo, blue toes), kidneys (AKI), gut (mesenteric ischemia). The crystals both plug vessels and set off intense inflammation.</p>",
        q: [
          Q("What causes cholesterol emboli syndrome?", "Cholesterol plaque dislodged from the arterial wall and swept into small-medium arterioles", ["A blood clot from the left atrium", "Air in the catheter", "Contrast allergy"], "Plaque crystals are dislodged and travel downstream."),
          Q("Cholesterol crystals cause damage by:", "Mechanical plugging plus an intense inflammatory response", ["Only mechanical plugging", "Only infection", "Vasodilation"], "Both plugging and inflammation occur.")
        ]
      }),
      S(110, "Cholesterol emboli: skin signs", {
        pic: "<p>Photos: (A) a toe with a dark purple necrotic area (blue toe); (B) mottled, purple-red soles of the feet.</p>",
        why: "<p>Blue toes with <b>intact pulses</b> is the key clue: the big arteries are open, only tiny vessels downstream are plugged.</p>",
        q: [
          Q("Blue toe syndrome in cholesterol emboli is toe necrosis with:", "Intact distal pulses", ["Absent femoral pulses", "A cold pulseless leg", "A DVT"], "Small vessels are plugged while big arteries stay open."),
          Q("Which are early skin signs of cholesterol emboli syndrome?", "Livedo reticularis and blue toe syndrome", ["Petechiae on the palate", "Janeway lesions", "Jaundice"], "Livedo and blue toes are the early cutaneous signs.")
        ]
      }),
      S(111, "Cholesterol emboli: other symptoms", {
        why: "<p>Mesenteric ischemia gives 'pain out of proportion to the exam': the gut is dying but the abdomen feels soft because the peritoneum isn't irritated yet. Lactic acidosis is the clue.</p>",
        q: [
          Q("Which constitutional symptoms are common in cholesterol emboli syndrome?", "Fever, anorexia, weight loss, fatigue, myalgias", ["Only chest pain", "Bradycardia and hypothermia", "None; it's always silent"], "They come from the inflammatory response."),
          Q("Severe abdominal pain out of proportion to the exam with lactic acidosis after a cath suggests:", "Acute mesenteric ischemia from cholesterol emboli", ["Pseudoaneurysm", "GERD", "Contrast allergy"], "Emboli to the gut cause mesenteric ischemia.")
        ]
      }),
      S(112, "Cholesterol emboli: AKI, eosinophilia, treatment", {
        q: [
          Q("How does cholesterol-emboli AKI differ from contrast AKI?", "It occurs later and is progressive", ["It occurs within hours and resolves", "It never happens", "It is identical"], "Emboli AKI comes later and keeps worsening."),
          Q("Which lab finding is reported in up to 80% of cholesterol emboli patients?", "Hypereosinophilia", ["Thrombocytosis", "Hyperkalemia", "Low BNP"], "Eosinophilia occurs in up to 80%."),
          Q("What is the treatment of cholesterol emboli syndrome?", "Primarily supportive", ["Thrombolytics", "Heparin drip", "Emergent CABG"], "Treatment is mainly supportive.")
        ]
      })
    ],
    review: [
      Q("A pulsatile groin mass with a bruit after a femoral cath. Test of choice?", "Duplex ultrasound (pseudoaneurysm)", ["CT abdomen (retroperitoneal bleed)", "Troponin", "Renal biopsy"], "A pulsatile mass suggests pseudoaneurysm; duplex US confirms it."),
      Q("A continuous bruit and thrill at the groin after a cath suggests:", "AV fistula", ["Pseudoaneurysm", "Retroperitoneal bleed", "Cholesterol emboli"], "Continuous artery-to-vein flow causes a continuous bruit."),
      Q("Hypotension, flank pain and falling Hgb hours after a femoral cath. Next test?", "CT of the abdomen and pelvis", ["Duplex ultrasound of the groin", "Echo", "Stress test"], "Suspected retroperitoneal bleed is diagnosed by CT."),
      Q("Three weeks after a cath: rising creatinine, livedo reticularis, eosinophilia. Diagnosis?", "Cholesterol emboli syndrome", ["Contrast-associated AKI", "Pseudoaneurysm", "Stent thrombosis"], "Late progressive AKI with livedo and eosinophilia is cholesterol emboli."),
      Q("Creatinine rises 2 days after a cath in a diabetic with CKD 3b. Most likely?", "Contrast-associated AKI", ["Cholesterol emboli syndrome", "AV fistula", "Restenosis"], "Early AKI in a high-risk patient fits contrast injury.")
    ]
  });

  /* ---------------------------------------------------------------- LO 7 */
  los.push({
    id: "lo7", label: "LO 7", title: "CABG vs PCI vs medicines, and long-term care",
    objective: "Compare medical management, percutaneous coronary intervention (PCI), and coronary artery bypass grafting (CABG) with respect to their indications, benefits, and limitations in patients with CAD.",
    slides: [
      S(113, "Coronary artery bypass grafting", {
        why: "<p>PCI fixes a narrowing; CABG goes <b>around</b> it, so it protects against future plaque in the bypassed segment too. That's why it wins when disease is widespread.</p>",
        q: [
          Q("Which conduits are harvested for CABG?", "Saphenous vein, internal mammary artery, radial artery", ["Femoral artery and jugular vein", "Carotid artery", "Pulmonary vein"], "Those three are the conduits on the slide."),
          Q("What does CABG do?", "Connects the aorta to the coronary beyond the blockage to bypass it", ["Removes plaque from the artery", "Places a stent", "Dissolves clot"], "Grafts bypass the atherosclerotic segment.")
        ]
      }),
      S(114, "When CABG is preferred over PCI", {
        why: "<p>Common thread: <b>lots of heart muscle at risk</b> (left main, multivessel with low EF) or disease that will keep coming back (diabetes, diffuse disease). CABG gives more complete and durable revascularization in these.</p>",
        q: [
          Q("Left main stenosis ≥50%. Preferred revascularization?", "CABG", ["PCI", "Medical therapy only", "Thrombolytics"], "Significant left main disease favors CABG."),
          Q("Multivessel CAD with EF less than 35%. Recommendation?", "CABG recommended in appropriate patients", ["Medical therapy only", "PCI always", "No treatment"], "EF <35% with multivessel CAD = CABG recommended."),
          Q("A diabetic with multivessel CAD involving the LAD. Preferred?", "CABG in appropriate surgical candidates", ["PCI", "Medical therapy only", "CTO PCI"], "Diabetes with multivessel LAD disease favors CABG.")
        ]
      }),
      S(115, "Bypass graft conduits", {
        why: "<p>Arteries are built for arterial pressure; veins are not, so vein grafts thicken and clog faster. The <b>LIMA to LAD</b> is the gold standard (>90% open at 10 years) vs saphenous vein about 50-60%.</p>",
        q: [
          Q("Which graft is preferred to the LAD?", "LIMA (left internal mammary artery)", ["Saphenous vein", "Radial artery", "Femoral artery"], "LIMA to LAD is the preferred graft."),
          Q("Approximate 10-year patency of a saphenous vein graft?", "50-60%", ["90%+", "10%", "100%"], "Vein grafts are about 50-60% open at 10 years."),
          Q("Which is the preferred SECOND arterial conduit?", "Radial artery", ["Saphenous vein", "LIMA", "Ulnar artery"], "The radial artery is the preferred second arterial conduit.")
        ]
      }),
      S(116, "CABG vs PCI vs medicines: summary", {
        q: [
          Q("3-vessel CAD or left main disease. Which is better?", "CABG", ["PCI", "Medical therapy only", "Watchful waiting"], "CABG is better for 3-vessel or left main disease."),
          Q("A limited number of lesions with normal LV function. Which is better?", "PCI", ["CABG", "Thrombolytics", "Heart transplant"], "PCI is better for limited lesions and normal EF."),
          Q("Stable CAD, no critical stenosis (<70%), normal LV function. Treatment?", "Medical therapy only", ["CABG", "PCI", "CTO PCI"], "Without critical stenosis or LV dysfunction, medicines alone.")
        ]
      }),
      S(117, "Further management of CAD", {
        q: [
          Q("How often do CAD patients typically see cardiology?", "Every 3-6 months", ["Every week", "Every 5 years", "Only during ACS"], "The slide says every 3-6 months."),
          Q("What is ongoing CAD management focused on?", "Risk factor modification and watching for recurrent disease or complications", ["Repeating caths every year", "Only pain control", "Stopping all medications"], "Follow-up targets risk factors and recurrence.")
        ]
      }),
      S(118, "Medical management goals", {
        why: "<p>Two goals: slow the disease (prevent ACS) and relieve angina. Stents and CABG treat symptoms and specific lesions; only risk-factor control and the right drugs treat the whole artery tree, hence 'cornerstone'.</p>",
        q: [
          Q("What is the cornerstone of CAD therapy?", "Aggressive risk factor reduction", ["Stenting every lesion", "CABG for everyone", "Nitroglycerin alone"], "The slide says aggressive risk factor reduction is the cornerstone."),
          Q("Which are the two goals of CAD therapy?", "Slow progression to reduce ACS risk and relieve angina", ["Raise LDL and lower HDL", "Increase heart rate and BP", "Only relieve pain"], "Slow the disease and relieve symptoms.")
        ]
      }),
      S(119, "Risk factor goals", {
        q: [
          Q("What is the BP goal in CAD on the slide?", "< 130/80", ["< 150/90", "< 140/90", "< 110/60"], "Hypertension should be controlled to <130/80."),
          Q("What A1c goal is listed for diabetics with CAD?", "< 7% (some recommend < 6.5%)", ["< 9%", "< 5%", "No goal"], "The slide lists A1c <7%, <6.5% for some."),
          Q("What exercise is recommended?", "30-60 minutes of moderate exercise 5x a week", ["10 minutes once a week", "Only weightlifting", "None after CABG"], "The slide recommends 30-60 minutes, 5 times a week.")
        ]
      }),
      S(120, "Mortality-lowering drugs", {
        why: "<p>These two lower <b>death</b> and MI, not just symptoms: <b>high-intensity statins</b> stabilize plaque (thicker caps, less inflammation) and <b>aspirin</b> prevents clots on plaque that does rupture.</p>",
        q: [
          Q("Which statin doses are high intensity?", "Atorvastatin 40-80 mg or rosuvastatin 20-40 mg", ["Atorvastatin 10 mg", "Rosuvastatin 5 mg", "Simvastatin 10 mg"], "Those are the high-intensity doses on the slide."),
          Q("Preferred daily aspirin dose in CAD?", "81-162 mg", ["650 mg", "1,000 mg", "Aspirin is not used"], "81-162 mg is generally preferred."),
          Q("A CAD patient is allergic to aspirin. Antiplatelet?", "A P2Y12 inhibitor daily", ["No antiplatelet", "Warfarin", "Heparin injections"], "Use a P2Y12 inhibitor if aspirin allergic.")
        ]
      }),
      S(121, "Ongoing care", {
        q: [
          Q("What is asked about at every cardiology visit?", "Chest pain and how much SL nitroglycerin is being used", ["Only the cholesterol", "Only weight", "Nothing; it's a routine refill"], "Rescue NTG use shows how well angina is controlled."),
          Q("What is the ideal outcome of CAD treatment?", "Normal activity without angina or SL NTG", ["Using NTG daily", "Avoiding all activity", "Monthly caths"], "The goal is normal activity without angina.")
        ]
      }),
      S(122, "CCS classification of angina", {
        why: "<p>Grade by what activity causes angina: <b>I</b> only strenuous, <b>II</b> slight limitation (brisk walking, uphill, stairs fast, after meals), <b>III</b> marked limitation (1-2 blocks or 1 flight at normal pace), <b>IV</b> any activity or at rest.</p>",
        q: [
          Q("Angina walking 1-2 blocks on level ground. CCS class?", "III", ["I", "II", "IV"], "Marked limitation with 1-2 blocks is class III."),
          Q("Angina only with strenuous, rapid or prolonged exertion. CCS class?", "I", ["II", "III", "IV"], "No limitation of ordinary activity is class I."),
          Q("Angina with any physical activity, possibly at rest. CCS class?", "IV", ["I", "II", "III"], "Inability to do any activity without discomfort is class IV.")
        ]
      }),
      S(123, "Symptom-relief medicines", {
        q: [
          Q("Which is listed as an anti-anginal medication?", "Ranolazine", ["Atorvastatin", "Aspirin", "Enoxaparin"], "Beta blockers, long-acting nitrates, CCBs and ranolazine are the anti-anginals."),
          Q("When are ACE inhibitors/ARBs indicated in CAD?", "History of diabetes or LV systolic dysfunction", ["In every patient", "Only in Prinzmetal angina", "Only after PCI"], "The slide lists DM or LV systolic dysfunction.")
        ]
      }),
      S(124, "Anti-anginal medications table", {
        why: "<p>All anti-anginals rebalance supply and demand. <b>Beta blockers</b> cut HR, contractility and BP (demand) but can worsen <b>vasospastic</b> angina (unopposed alpha constriction, standard teaching). <b>Nitrates</b> cut preload/afterload and dilate coronaries; tolerance (tachyphylaxis) needs a nitrate-free interval. <b>CCBs</b> lower HR/BP and dilate coronaries (good for spasm). <b>Ranolazine</b> works inside the cell (late Na current → less Ca overload) without changing HR or BP, but watch the QTc.</p>",
        q: [
          Q("Which anti-anginal should NOT be used in variant (Prinzmetal) angina?", "Beta blockers", ["Calcium channel blockers", "Nitrates", "Ranolazine"], "The table says do NOT use beta blockers in variant angina."),
          Q("Which anti-anginal has no effect on BP or HR but can prolong the QTc?", "Ranolazine", ["Metoprolol", "Diltiazem", "Nitroglycerin"], "Ranolazine prevents calcium overload without changing HR/BP."),
          Q("Tachyphylaxis is a problem with which drug class?", "Nitrates", ["Beta blockers", "Calcium channel blockers", "Ranolazine"], "The table notes tachyphylaxis with nitroglycerin.")
        ]
      })
    ],
    review: [
      Q("A diabetic with 3-vessel CAD and EF 30%. Best revascularization?", "CABG", ["PCI", "Medical therapy only", "Thrombolytics"], "Multivessel disease, diabetes and low EF all favor CABG."),
      Q("Single 80% RCA lesion, normal EF, angina despite meds. Best option?", "PCI", ["CABG", "No treatment", "Heart transplant"], "Limited disease with normal LV function favors PCI."),
      Q("Why is the LIMA preferred to the LAD over a saphenous vein graft?", "Much better long-term patency (90%+ vs 50-60% at 10 years)", ["It's easier to harvest", "It's longer", "It doesn't need anticoagulation"], "Arterial grafts last much longer."),
      Q("Which anti-anginal side effect pair is correct?", "Beta blocker: bradycardia and bronchospasm", ["Nitrate: constipation", "CCB: QTc prolongation", "Ranolazine: tachyphylaxis"], "Beta blockers cause bradycardia, hypotension, bronchospasm and depression."),
      Q("Which two drug types lower mortality in CAD?", "High-intensity statin and aspirin", ["Nitrates and ranolazine", "CCBs and nitrates", "Diuretics and digoxin"], "The slide lists statins and antiplatelets as mortality-lowering."),
      Q("A patient gets angina climbing stairs quickly and after meals but not otherwise. CCS class?", "II", ["I", "III", "IV"], "Slight limitation with brisk walking, stairs or after meals is class II.")
    ]
  });

  SlideStudy.lecture({
    id: "cad-part-3",
    title: "CAD Part III: The Chest Pain Patient",
    short: "CAD III",
    by: "Stager",
    img: "images/cad3-slides/slide-{nnn}.webp",
    los: los
  });
})();
