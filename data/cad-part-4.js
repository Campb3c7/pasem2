/* Cardio Part 3, CAD Part IV: Acute Coronary Syndrome (Stager, 81 slides). Sections follow the deck, which walks the
   10 objectives in order. Read from slide pictures: 3 (ischemia/injury/infarction), 4 (EKG evolution), 5 (STEMI vs
   NSTEMI box), 7 (2018 types), 11 (NSTEMI), 13 (anterolateral STEMI), 15 (Falk stenosis bars), 32 (NSTE-ACS
   algorithm), 38 (necrosis wavefront), 57 (vasospasm), 63 and 64 (right-sided leads). The reperfusion flowchart with
   lytic contraindications is CAD Part V slide 82. Case questions without an answer slide (35, 50, 74) are answered
   from the deck's own rules. */
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



  window.CAD_PART_4_OBJECTIVES = [

    S("01-ischemia-injury-mi", "1. Ischemia, injury and infarction", "Objective 1 (slides 2 to 4): the three stages of a starving heart and how the EKG evolves.", [
      C("Ischemia vs injury vs infarction",
        tbl(["Stage", "What it is", "EKG", "Reversible?"], [
          ["<strong>Ischemia</strong>", "O2 <strong>supply &lt; demand</strong>", "<strong>ST depression</strong> or <strong>T wave inversion</strong>", "Yes"],
          ["<strong>Injury</strong>", "Myocyte <strong>damage</strong>", "<strong>Elevated troponin</strong>", "Not by itself an MI"],
          ["<strong>Infarction (MI)</strong>", "<strong>Irreversible</strong> necrosis", "<strong>ST elevation</strong>, later <strong>Q waves</strong>", "No"]]) +
        hy("An MI needs <strong>both</strong>: <strong>acute myocardial injury</strong> (troponin) <strong>and</strong> evidence of <strong>acute ischemia</strong>. Troponin alone = injury, not MI."),
        ["iim-ischemia", "iim-injury", "iim-mi", "iim-both"],
        [q("Ischemia means:", "Oxygen supply is less than demand", ["The myocardium is dead", "The troponin is elevated", "The valve is stenotic"], "Ischemia is a supply-demand mismatch that is still reversible if flow returns. (Slide 2)"),
          q("Which EKG changes go with ischemia?", "ST depression or T wave inversion", ["ST elevation and Q waves", "Delta waves", "Peaked P waves"], "Ischemia mainly hits the subendocardium, which shows up as ST depression or inverted T waves. (Slide 3)"),
          q("Myocardial injury is shown by:", "An elevated troponin", ["ST depression alone", "A normal EKG", "A low BNP"], "Troponin leaks out only when myocytes are damaged, so it is the marker of injury. (Slide 3)"),
          q("Which EKG findings go with infarction?", "ST elevation and Q waves", ["T wave flattening only", "Short PR", "U waves"], "Infarction is full-thickness death, so you see ST elevation and later Q waves. (Slide 3)"),
          q("To call something an MI you need acute myocardial injury plus:", "Evidence of acute ischemia", ["A Q wave", "A positive stress test", "Chest pain lasting over 1 hour"], "Troponin can rise from many causes, so an MI also needs proof the cause is ischemia. (Slide 2)")],
        [q("A septic patient has a troponin of 80 but no chest pain and no ischemic EKG change. What is this?", "Acute myocardial injury, not MI", ["Primary MI", "Unstable angina", "STEMI"], "Without evidence of ischemia, a troponin rise is injury and does not meet the MI definition. (Slides 2, 8)"),
          q("During exercise a man gets chest pressure with ST depression that resolves with rest; troponin stays normal. Which stage?", "Ischemia", ["Infarction", "Injury", "Necrosis"], "ST depression that resolves with rest and a normal troponin is reversible ischemia. (Slides 2 to 3)")]),
      C("How the EKG evolves in an MI",
        chain(["<strong>Normal</strong> EKG", "<strong>T wave</strong> changes (hyperacute or inverted)", "<strong>ST elevation</strong> (injury current)", "<strong>Q wave</strong> develops as tissue dies", "<strong>Healed</strong> scar: Q wave remains"]),
        ["iim-evolve", "iim-q-scar"],
        [q("Which change comes first as an MI evolves on EKG?", "T wave changes", ["Q waves", "Healed scar pattern", "Delta wave"], "The T wave is the most sensitive to ischemia, so it changes before the ST segment and Q wave. (Slide 4)"),
          q("What stays on the EKG after an MI heals?", "The Q wave", ["The ST elevation", "The hyperacute T wave", "Nothing"], "Dead tissue conducts no current, so the Q wave persists as a marker of old scar. (Slide 4)")],
        [q("A routine EKG shows Q waves in II, III and aVF with flat ST segments. What does this suggest?", "An old (healed) inferior MI", ["An acute inferior STEMI", "Pericarditis", "Normal variant only"], "Q waves without ST elevation mark healed scar from a prior infarct. (Slide 4)")])
    ]),

    S("02-ua-nstemi-stemi", "2. UA, NSTEMI and STEMI", "Objective 1 (slides 5, 9 to 12): the three ACS types by occlusion, EKG and troponin.", [
      C("The three acute coronary syndromes",
        tbl(["", "Unstable angina", "NSTEMI", "STEMI"], [
          ["Artery", "<strong>Subtotal</strong> occlusion", "Usually <strong>non-occlusive</strong> thrombus", "<strong>Complete</strong> occlusion"],
          ["Where it dies", "No infarct", "<strong>Subendocardial</strong>", "<strong>Transmural</strong> (old name: Q-wave MI)"],
          ["Symptoms", "<strong>Rest</strong> pain or new/worsening angina", "Same", "Same"],
          ["EKG", "No ST elevation; may have ST depression or TWI", "No ST elevation; ST depression, TWI or nonspecific", "<strong>Diagnostic ST elevation</strong> or equivalent"],
          ["hs-troponin", "<strong>Negative</strong>", "<strong>Positive</strong>", "<strong>Positive</strong>"],
          ["Urgency", "Admit, treat", "Risk stratify", "<strong>Immediate reperfusion</strong>"]]) +
        hy("Troponin separates <strong>UA (negative)</strong> from <strong>NSTEMI (positive)</strong>. The EKG separates <strong>NSTEMI</strong> from <strong>STEMI</strong>.") +
        ul(["Both NSTEMI and STEMI are MIs: a <strong>rise and/or fall of troponin</strong> with at least one value <strong>above the 99th percentile</strong>, plus evidence of ischemia."]),
        ["acs-ua", "acs-nstemi", "acs-stemi", "acs-trop-split", "acs-99th"],
        [q("Unstable angina differs from NSTEMI because in UA the hs-troponin is:", "Negative", ["Positive", "Above 1,000", "Not measured"], "UA is ischemia without necrosis, so no troponin leaks out. (Slides 9 to 10)"),
          q("NSTEMI usually involves which kind of thrombus?", "Non-occlusive", ["Completely occlusive", "Venous", "No thrombus"], "A partly open artery lets some blood through, so only the subendocardium dies. (Slides 5, 11)"),
          q("STEMI was previously called:", "Transmural or Q-wave MI", ["Subendocardial MI", "Silent MI", "Type 2 MI"], "STEMI kills the full wall thickness, so it was once named for its transmural Q waves. (Slide 12)"),
          q("Which ACS needs immediate evaluation for reperfusion?", "STEMI", ["Unstable angina", "Stable angina", "Myocardial injury from sepsis"], "STEMI means the artery is fully closed, so every minute of delay kills more muscle. (Slide 5)"),
          q("The troponin threshold for MI is a value above the:", "99th percentile upper reference limit", ["50th percentile", "Normal range of CK-MB", "95th percentile of BNP"], "MI is defined by troponin rise or fall with at least one value above the 99th percentile. (Slide 5)"),
          q("Which part of the wall dies in an NSTEMI?", "The subendocardium", ["The full thickness", "The epicardium only", "The pericardium"], "The subendocardium is farthest from the coronary supply, so it dies first when flow is reduced. (Slide 11)")],
        [q("A 60-year-old has rest chest pain, ST depression in V4 to V6 and a negative hs-troponin at 0 and 2 hours. Diagnosis?", "Unstable angina", ["NSTEMI", "STEMI", "Stable angina"], "Rest pain with ischemic changes but no troponin rise is unstable angina. (Slides 9 to 10)"),
          q("Same patient, but the second hs-troponin rises well above the 99th percentile. Diagnosis now?", "NSTEMI", ["Unstable angina", "STEMI", "Pericarditis"], "A troponin rise without ST elevation turns UA into NSTEMI. (Slides 5, 11)"),
          q("A 55-year-old has crushing chest pain with 3 mm ST elevation in V2 to V4. Priority?", "Immediate reperfusion", ["Repeat troponin in 6 hours", "Outpatient stress test", "Start a statin and discharge"], "ST elevation means complete occlusion, so the artery must be opened now. (Slides 5, 12)")])
    ]),

    S("03-universal-definition", "3. Universal definition of MI", "Objective 1 (slides 6 to 8): primary, secondary and procedure-related MI (2026) and the older Types 1 to 5 (2018).", [
      C("Fifth Universal Definition (2026)",
        tbl(["Category", "Cause", "Old name"], [
          ["<strong>Primary MI</strong>", "<strong>Spontaneous coronary</strong> pathology: plaque disruption, dissection, vasospasm, embolism", "Mostly <strong>Type 1</strong>; some Type 2, 4b, 4c"],
          ["<strong>Secondary MI</strong>", "<strong>Supply-demand imbalance</strong> from <strong>another condition</strong>: anemia, hypoxemia, tachyarrhythmia", "<strong>Type 2</strong>"],
          ["<strong>Procedure-related MI</strong>", "Caused by a <strong>procedure</strong> (PCI, CABG)", "Types <strong>4a, 4b, 4c and 5</strong>"]]) +
        hy("Primary = the <strong>coronary artery</strong> is the problem. Secondary = the coronary is innocent; <strong>something else</strong> starved the heart."),
        ["ud-primary", "ud-secondary", "ud-procedure"],
        [q("Under the 2026 definition, a plaque rupture MI is a:", "Primary MI", ["Secondary MI", "Procedure-related MI", "Type 3 MI"], "Plaque disruption is spontaneous coronary pathology, which is the definition of primary MI. (Slide 6)"),
          q("Secondary MI is caused by:", "Supply-demand imbalance from another condition", ["Plaque rupture", "Stent thrombosis during PCI", "CABG"], "In secondary MI the heart is starved by something outside the coronary, like anemia or tachycardia. (Slide 6)"),
          q("Procedure-related MI replaces which old types?", "4a, 4b, 4c and 5", ["1 and 2", "Type 3 only", "Type 2 only"], "PCI- and CABG-related types are grouped together as procedure-related MI. (Slide 6)"),
          q("Which is a cause of primary MI on the 2026 list?", "Spontaneous coronary dissection", ["Severe anemia", "Hypoxemia from pneumonia", "Rapid atrial fibrillation"], "Dissection is a coronary problem itself, so it counts as primary MI. (Slide 6)")],
        [q("A patient with a hemoglobin of 5.8 from a GI bleed has chest pressure, ST depression and a rising troponin. Which 2026 category?", "Secondary MI", ["Primary MI", "Procedure-related MI", "Acute myocardial injury only"], "Anemia starved the heart while the coronaries did nothing new, so it is secondary MI. (Slides 6, 8)"),
          q("A troponin rise follows a stent placed yesterday. Which 2026 category?", "Procedure-related MI", ["Primary MI", "Secondary MI", "Not an MI by definition"], "An MI caused by PCI falls in the procedure-related group. (Slide 6)")]),
      C("Fourth Universal Definition (2018): Types 1 to 5",
        tbl(["Type", "Meaning"], [
          ["<strong>1</strong>", "<strong>Spontaneous</strong> (plaque rupture, atherothrombosis)"],
          ["<strong>2</strong>", "<strong>Secondary</strong>: spasm, embolism, anemia, arrhythmia, HTN, hypotension"],
          ["<strong>3</strong>", "<strong>Sudden death</strong> before biomarkers can be drawn"],
          ["<strong>4a</strong>", "Related to <strong>PCI</strong>"],
          ["<strong>4b</strong>", "<strong>Stent thrombosis</strong>"],
          ["<strong>5</strong>", "Related to <strong>CABG</strong>"]]),
        ["ud-t1", "ud-t2", "ud-t3", "ud-t4", "ud-t5"],
        [q("Type 3 MI is:", "Sudden cardiac death before biomarkers are obtained", ["Stent thrombosis", "CABG-related", "Anemia-related"], "Type 3 covers MI deaths where the patient died before troponin could be drawn. (Slide 7)"),
          q("Type 4b MI is:", "Stent thrombosis", ["CABG-related", "Spontaneous plaque rupture", "Sudden death"], "Type 4b names an MI caused by a clot forming in a stent. (Slide 7)"),
          q("Type 5 MI is related to:", "CABG", ["PCI", "Anemia", "Sepsis"], "Type 5 is the MI that happens around bypass surgery. (Slide 7)"),
          q("A Type 2 MI under the 2018 system matches which 2026 category?", "Secondary MI", ["Primary MI", "Procedure-related MI", "Type 3"], "Both describe supply-demand mismatch from another condition. (Slides 6 to 7)")],
        [q("A man on rapid AF at 170 with no coronary event develops chest pain and a troponin rise. 2018 type?", "Type 2", ["Type 1", "Type 4a", "Type 5"], "Tachyarrhythmia raised demand without a new coronary lesion, which is Type 2. (Slide 7)")]),
      C("Injury vs MI: three sepsis-style scenarios",
        tbl(["Scenario", "Answer"], [
          ["<strong>Sepsis</strong>, troponin up, <strong>no ischemia</strong>", "<strong>Acute myocardial injury</strong>"],
          ["Sepsis with <strong>hypotension</strong>, chest pressure, <strong>dynamic ST depression</strong>, troponin up", "<strong>Secondary MI</strong>"],
          ["<strong>Plaque rupture</strong> with ST elevation, troponin up", "<strong>Primary MI</strong>"]]),
        ["ud-scenarios"],
        [q("Troponin is up in sepsis with no symptoms or EKG signs of ischemia. Label?", "Acute myocardial injury", ["Secondary MI", "Primary MI", "Unstable angina"], "Without ischemia it is injury, no matter how high the troponin. (Slide 8)")],
        [q("A septic, hypotensive patient has new chest pressure and dynamic ST depression with a rising troponin. Label?", "Secondary MI", ["Acute myocardial injury", "Primary MI", "Procedure-related MI"], "Hypotension starved the heart and ischemia is present, so this is secondary MI. (Slide 8)")])
    ]),

    S("04-localization", "4. Localizing the infarct", "Objective 2 (slides 13 to 15): which leads, which wall, which artery, and why most MIs start in modest plaques.", [
      C("Walls, leads and arteries",
        tbl(["Wall", "ST change in", "Reciprocal in", "Artery"], [
          ["<strong>Anterior</strong>", "V1 to V4", "None on a 15-lead", "<strong>LAD</strong>"],
          ["<strong>Septal</strong>", "V1 to V2", "None", "<strong>LAD</strong>"],
          ["<strong>Lateral</strong>", "I, aVL, V5 to V6", "II, III, aVF", "<strong>LCx</strong>"],
          ["<strong>Inferior</strong>", "II, III, aVF", "I, aVL", "<strong>RCA (80%)</strong> or LCx (20%)"],
          ["<strong>Posterior</strong>", "V7 to V9", "V1 to V3", "RCA or LCx"],
          ["<strong>Right ventricle</strong>", "Right-sided V1 to V4 (V4R)", "I, aVL", "<strong>RCA</strong>"]]) +
        hy("Reciprocal changes (ST depression opposite the injured wall) support a true STEMI; the deck's anterolateral STEMI example shows them.") +
        mn("<strong>I SEE ALL</strong>: Inferior = II, III, aVF; Septal = V1 to V2; anterior = V3 to V4; lateral = I, aVL, V5 to V6 (standard teaching)."),
        ["loc-ant", "loc-sept", "loc-lat", "loc-inf", "loc-post", "loc-rv", "loc-recip"],
        [q("ST elevation in V1 to V4 points to which artery?", "LAD", ["RCA", "LCx", "Left main only"], "V1 to V4 look at the anterior wall, which the LAD supplies. (Slide 14)"),
          q("ST elevation in II, III and aVF is usually from which artery?", "RCA", ["LAD", "LCx in most people", "Diagonal"], "The RCA supplies the inferior wall in about 80% of people. (Slide 14)"),
          q("Which leads show a lateral MI?", "I, aVL, V5 and V6", ["II, III, aVF", "V1 and V2", "V7 to V9"], "I, aVL, V5 and V6 face the lateral wall, which the LCx supplies. (Slide 14)"),
          q("Where are reciprocal changes for an inferior MI?", "I and aVL", ["V1 to V3", "V5 and V6", "None"], "I and aVL face away from the inferior wall, so they show mirror-image ST depression. (Slide 14)"),
          q("A posterior MI shows ST elevation in V7 to V9 and reciprocal changes in:", "V1 to V3", ["II, III, aVF", "I and aVL", "V5 and V6"], "V1 to V3 look at the posterior wall from the front, so its injury appears upside down there. (Slide 14)"),
          q("Which artery supplies the septum?", "LAD", ["RCA", "LCx", "Obtuse marginal"], "The LAD's septal branches feed the septum, seen in V1 and V2. (Slide 14)"),
          q("Which artery causes a right ventricular infarct?", "RCA", ["LAD", "LCx", "Diagonal"], "The RCA supplies the right ventricle, so proximal RCA occlusion causes RV infarct. (Slide 14)")],
        [q("A 62-year-old has ST elevation in I, aVL, V5 and V6 with ST depression in II, III and aVF. Culprit artery?", "Left circumflex", ["RCA", "LAD septal branch", "Posterior descending only"], "Lateral ST elevation with inferior reciprocal depression points to the LCx. (Slide 14)"),
          q("A patient has ST elevation in V3 and V4 only. Which wall?", "Anterior", ["Inferior", "Lateral", "Posterior"], "V3 and V4 sit over the anterior wall supplied by the LAD. (Slides 14, 49)")]),
      C("Most MIs come from modest plaques",
        tbl(["Stenosis before the MI", "Share of MIs"], [["<strong>&lt; 50%</strong>", "<strong>68%</strong>"], ["50 to 70%", "18%"], ["&gt; 70%", "14%"]]) +
        ul(["Most MIs arise from plaques that were <strong>not flow-limiting</strong>: rupture of a soft plaque, not tightness, causes the clot (Falk, 1995)."]),
        ["loc-mild-plaque"],
        [q("What share of MIs come from lesions under 50% stenosis?", "About 68%", ["About 14%", "About 18%", "Almost none"], "Soft, non-flow-limiting plaques rupture most often, so most MIs start in mild lesions. (Slide 15)")],
        [q("A patient asks why he had an MI when his stress test last year was normal. Best explanation?", "Most MIs come from plaques under 50% that do not limit flow", ["Stress tests detect all plaques", "His MI must be noncardiac", "Only 90% lesions cause MI"], "A stress test finds flow-limiting lesions, but most MIs start in mild plaques that rupture. (Slide 15)")])
    ]),

    S("05-initial-pharm", "5. First drugs for possible ACS", "Objective 3 (slides 16 to 19, 23): aspirin, nitroglycerin, beta blocker, opioids and oxygen.", [
      C("Aspirin and nitroglycerin",
        ul(["<strong>Aspirin 325 mg chewed</strong> for <strong>every</strong> possible ACS.",
          "<strong>Nitroglycerin</strong> SL or IV: <strong>0.4 mg SL q5 min x 3</strong>, or a drip at <strong>5 to 10 mcg/min</strong>, titrated, keeping <strong>SBP &gt; 100</strong>.",
          "Pain still there after 1 to 2 SL NTG: start an <strong>NTG drip</strong>.",
          "<strong>Avoid NTG</strong> with: <strong>RV infarct</strong>, <strong>severe aortic stenosis</strong>, <strong>PDE-5 inhibitor within 24 h</strong>, or <strong>hypotension</strong>."]) +
        hy("Nitrates drop preload. RV infarct and severe AS are <strong>preload dependent</strong>, so NTG can crash the BP."),
        ["ip-asa", "ip-ntg-dose", "ip-ntg-drip", "ip-ntg-avoid"],
        [q("Which aspirin dose is given for possible ACS?", "325 mg chewed", ["81 mg swallowed whole", "650 mg enteric coated", "1 g IV"], "Chewing a full-dose aspirin gets the antiplatelet effect working within minutes. (Slide 17)"),
          q("SL nitroglycerin is dosed:", "0.4 mg every 5 minutes up to 3 doses", ["4 mg once", "0.04 mg hourly", "0.4 mg daily"], "Short repeated doses relieve ischemia while letting you watch the BP between each. (Slide 23)"),
          q("An NTG drip is titrated while keeping SBP above:", "100", ["60", "140", "180"], "Nitrates lower BP, so the drip is limited to keep coronary perfusion pressure up. (Slide 23)"),
          q("Which is a contraindication to nitroglycerin?", "PDE-5 inhibitor within 24 hours", ["Hypertension", "Diabetes", "Prior MI"], "Nitrates plus a PDE-5 inhibitor can cause profound hypotension. (Slide 17)"),
          q("When is an NTG drip started?", "Pain persists after 1 to 2 SL doses", ["Before any SL dose", "Only after the cath", "When SBP is under 90"], "Persistent pain after SL doses calls for a titratable continuous drip. (Slide 18)")],
        [q("A man with chest pain took sildenafil last night. His EKG shows ischemia. Which drug do you withhold?", "Nitroglycerin", ["Aspirin", "Heparin", "Atorvastatin"], "A PDE-5 inhibitor within 24 hours makes nitrates dangerous because of severe hypotension. (Slide 17)"),
          q("An inferior STEMI patient has BP 82/50, JVD and clear lungs. Which drug is avoided?", "Nitroglycerin", ["Aspirin", "Normal saline", "Heparin"], "This is RV infarct, which needs preload, so nitrates can drop the BP further. (Slides 17 to 18)")]),
      C("Beta blocker, opioids and oxygen",
        ul(["<strong>Beta blocker</strong> if pain persists despite nitrates, or for STEMI: <strong>oral cardioselective BB within 24 h</strong>. IV BB use is limited.",
          "BB <strong>contraindicated</strong> with <strong>HF / decompensated HF</strong>, <strong>risk of cardiogenic shock</strong>, <strong>hypotension</strong>, <strong>bradyarrhythmia</strong>.",
          "<strong>Avoid morphine</strong> unless pain is severe: it <strong>interferes with antiplatelet</strong> absorption.",
          "<strong>Oxygen only if sat &lt; 90%</strong>: hyperoxemia can cause <strong>coronary vasospasm</strong>."]) +
        mn("Initial ACS drugs (standard teaching mnemonic, updated by the deck): <strong>MONA-B</strong> is outdated. Aspirin and nitrates for all who can take them; O2 only below 90%; morphine only for severe pain; BB orally within 24 h."),
        ["ip-bb", "ip-bb-ci", "ip-morphine", "ip-o2"],
        [q("When should oxygen be given in ACS?", "Only if saturation is below 90%", ["Always, at 15 L", "Never", "Only after PCI"], "Extra oxygen above normal can cause vasospasm, so it is given only for hypoxemia. (Slide 19)"),
          q("Why avoid routine morphine in ACS?", "It interferes with antiplatelet drugs", ["It causes hypertension", "It raises troponin", "It causes ST elevation"], "Opioids slow gut absorption of oral P2Y12 inhibitors, weakening their effect. (Slide 19)"),
          q("How is a beta blocker usually started in ACS?", "Orally within 24 hours, cardioselective", ["IV push in every patient", "Only after discharge", "Nonselective IV infusion"], "Oral cardioselective BB within 24 hours lowers demand without the risks of routine IV dosing. (Slide 23)"),
          q("Which is a contraindication to a beta blocker in ACS?", "Decompensated heart failure", ["Hypertension", "Tachycardia", "Ongoing angina"], "A BB lowers contractility, which can tip decompensated HF into cardiogenic shock. (Slides 18, 23)")],
        [q("An ACS patient has an O2 sat of 96% on room air. Oxygen?", "No, oxygen is not needed", ["Yes, 4 L nasal cannula", "Yes, non-rebreather", "Yes, BiPAP"], "Oxygen is given only below 90% because hyperoxemia can provoke vasospasm. (Slide 19)"),
          q("An NSTEMI patient has HR 48 with new crackles and BP 92/60. Should he get metoprolol now?", "No, bradycardia, HF signs and low BP are contraindications", ["Yes, IV push", "Yes, double dose", "Yes, with morphine"], "A BB would worsen the bradycardia, HF and hypotension. (Slides 18, 23)")])
    ]),

    S("06-initial-workup", "6. Initial workup: Unstable Don", "Objectives 3 and 4 (slides 16, 20 to 22): serial EKGs, hs-troponin delta and baseline labs.", [
      C("Unstable Don arrives",
        ul(["<strong>55</strong>-year-old with a known <strong>60% RCA</strong> lesion, treated medically with metoprolol and aspirin.",
          "Now: sudden <strong>heavy chest pain</strong>, <strong>dyspnea</strong>, <strong>diaphoresis</strong>, <strong>nausea</strong>. EMS gave <strong>ASA 325</strong> and <strong>SL NTG</strong>.",
          "ER: sweaty and pale, pain 5/10, T 98.3, <strong>RR 24, HR 112, BP 170/92</strong>, lungs clear. <strong>NTG drip</strong> started."]),
        ["wu-don"],
        [q("Why does Don's medically treated 60% RCA lesion not rule out an acute event?", "Plaques can rupture and clot regardless of their percent stenosis", ["60% lesions never cause symptoms", "Metoprolol prevents all MIs", "Only the LAD causes MI"], "Rupture, not tightness, causes the thrombus, so a 60% lesion can still cause ACS. (Slides 15 to 16)")],
        [q("Don still has 5/10 pain in the ER after EMS aspirin and SL NTG. Next drug step?", "Start a nitroglycerin drip", ["Give oxygen at 15 L", "Give IV morphine first", "Give more aspirin 325"], "Persistent pain after SL nitrates calls for a titratable NTG drip. (Slides 18, 22)")]),
      C("Serial EKGs, troponin and labs",
        ul(["<strong>EKG within 10 minutes</strong>, then <strong>serial EKGs</strong>: repeat in <strong>20 to 30 min</strong> or sooner if symptoms change.",
          "<strong>hs-troponin I</strong> at arrival and at <strong>1 to 2 hours</strong>: the <strong>delta</strong> (change) matters, not just one value.",
          "Troponin can be <strong>chronically elevated in late CKD/ESRD</strong>, so a stable high value needs a delta to interpret.",
          "Labs: <strong>CBC, chemistry, PTT, PT/INR, BNP</strong>, plus a <strong>chest x-ray</strong>."]),
        ["wu-serial-ekg", "wu-trop-delta", "wu-ckd", "wu-labs"],
        [q("When is the EKG repeated in a suspected ACS?", "In 20 to 30 minutes or sooner with changes", ["Only the next morning", "Never if the first is normal", "Every 8 hours only"], "ST changes can evolve, so a normal first EKG must be repeated soon. (Slide 20)"),
          q("hs-troponin I is drawn at arrival and again at:", "1 to 2 hours", ["24 hours", "6 to 12 hours only", "1 week"], "The high-sensitivity assay picks up a change within 1 to 2 hours. (Slide 21)"),
          q("Why look at the troponin delta?", "A rise or fall shows an acute event, not a chronic elevation", ["A single value is always diagnostic", "Delta measures BNP", "It shows the culprit artery"], "Acute injury makes troponin change, while chronic causes keep it steady. (Slides 5, 21)"),
          q("In which patients is troponin often chronically elevated?", "Late-stage CKD or ESRD", ["Young athletes", "Patients with asthma", "Patients on statins"], "Reduced clearance and chronic strain keep troponin high in advanced kidney disease. (Slide 21)"),
          q("Which lab set is ordered in suspected ACS?", "CBC, chemistry, PTT, PT/INR, BNP and a chest x-ray", ["Only a lipid panel", "Only a D-dimer", "TSH and A1c only"], "These check for bleeding risk before antithrombotics, kidney function, HF and other causes. (Slide 21)")],
        [q("A dialysis patient has a troponin of 60 at arrival and 61 at 2 hours with no ischemic EKG change. Interpretation?", "Likely chronic elevation from ESRD, no acute delta", ["Definite NSTEMI", "STEMI equivalent", "Lab error"], "A flat value in ESRD fits chronic elevation; an MI needs a rise or fall. (Slide 21)"),
          q("A chest pain patient's first EKG is normal but the pain worsens 15 minutes later. Next step?", "Repeat the EKG now", ["Wait 6 hours for the next EKG", "Discharge home", "Order an outpatient stress test"], "EKGs are repeated in 20 to 30 minutes or sooner when symptoms change. (Slide 20)")])
    ]),

    S("07-nstemi-antithrombotics", "7. UA/NSTEMI: DAPT and anticoagulation", "Objective 4 (slides 24 to 25): aspirin plus a P2Y12 inhibitor, and heparin or enoxaparin.", [
      C("Dual antiplatelet therapy (DAPT)",
        ul(["<strong>Aspirin</strong>: uncoated <strong>325 mg chewed</strong>, then <strong>enteric-coated 81 mg daily</strong>.",
          "<strong>P2Y12 inhibitor</strong> for patients going to <strong>left heart cath</strong>, chosen <strong>with cardiology</strong>:",
          "<strong>Prasugrel (Effient)</strong>, <strong>ticagrelor (Brilinta)</strong>, <strong>clopidogrel (Plavix)</strong>."]) +
        hy("DAPT = <strong>aspirin + P2Y12 inhibitor</strong>. Doses and pros/cons of each P2Y12 are in CAD Part V."),
        ["nt-dapt", "nt-asa-maint", "nt-p2y12"],
        [q("DAPT means aspirin plus:", "A P2Y12 inhibitor", ["Warfarin", "Heparin", "A second aspirin"], "Two antiplatelets block two different platelet activation pathways. (Slide 24)"),
          q("After the 325 mg load, aspirin is continued as:", "81 mg enteric coated daily", ["325 mg four times daily", "Nothing", "650 mg daily"], "Low-dose aspirin keeps platelets inhibited with less bleeding. (Slide 24)"),
          q("What is the brand name of ticagrelor?", "Brilinta", ["Effient", "Plavix", "Lovenox"], "Ticagrelor is Brilinta; prasugrel is Effient and clopidogrel is Plavix. (Slide 24)"),
          q("What is the brand name of prasugrel?", "Effient", ["Brilinta", "Plavix", "Ranexa"], "Prasugrel is sold as Effient. (Slide 24)"),
          q("Who chooses the P2Y12 inhibitor for a patient going to cath?", "The team with cardiology", ["The patient alone", "The pharmacy only", "It is never chosen before cath"], "The choice depends on cath plans and bleeding risk, so it is made with cardiology. (Slide 24)")],
        [q("Don is going to the cath lab for NSTEMI. What antiplatelet plan fits?", "Aspirin plus a P2Y12 inhibitor chosen with cardiology", ["Aspirin alone", "No antiplatelets until after cath", "Warfarin alone"], "Patients headed to cath get DAPT, with the P2Y12 picked with cardiology. (Slide 24)")]),
      C("Heparin vs enoxaparin",
        tbl(["Drug", "Dose", "When"], [
          ["<strong>Unfractionated heparin (UFH)</strong> drip", "Titrated to <strong>anti-Xa or PTT</strong>", "<strong>Cath is planned</strong>"],
          ["<strong>Enoxaparin (Lovenox)</strong>", "<strong>1 mg/kg SQ BID</strong>", "<strong>No cath planned</strong>"]]) +
        ul(["Both prevent <strong>thrombin activation</strong>, which stops the clot from <strong>extending</strong>."]),
        ["nt-ufh", "nt-enox", "nt-thrombin"],
        [q("Which anticoagulant is preferred when a cath is planned?", "Unfractionated heparin drip", ["Enoxaparin", "Warfarin", "Apixaban"], "A UFH drip can be stopped and monitored easily around the procedure. (Slide 25)"),
          q("Enoxaparin for NSTEMI is dosed:", "1 mg/kg SQ twice daily", ["40 mg SQ once daily", "1 mg/kg IV once", "5,000 units twice daily"], "Treatment-dose enoxaparin is 1 mg/kg every 12 hours. (Slide 25)"),
          q("How is a UFH drip monitored?", "Anti-Xa or PTT", ["INR", "Platelet count only", "Troponin"], "UFH effect is followed with anti-Xa or PTT to keep it in range. (Slide 25)"),
          q("How do heparin and enoxaparin help in ACS?", "They prevent thrombin activation so the clot stops growing", ["They dissolve the clot", "They block COX-1", "They lower heart rate"], "Anticoagulants stop clot extension; they do not dissolve it. (Slide 25)")],
        [q("An NSTEMI patient will be managed medically with no cath planned. Anticoagulant?", "Enoxaparin 1 mg/kg SQ BID", ["UFH drip for cath", "Alteplase", "No anticoagulant"], "Enoxaparin is used when no cath is planned. (Slide 25)")])
    ]),

    S("08-cath-timi", "8. Who needs emergent cath, and the TIMI score", "Objectives 4 and 5 (slides 26 to 28): emergent cath triggers, TIMI points, and TIMI vs GRACE.", [
      C("Emergent cath triggers in UA/NSTEMI",
        ul(["<strong>Cardiogenic shock</strong>", "<strong>Severe LV dysfunction</strong> or florid HF",
          "<strong>Refractory rest angina</strong> despite NTG and BB", "<strong>New or worse MR</strong> or a <strong>new VSD</strong>",
          "<strong>Sustained ventricular arrhythmias</strong>"]),
        ["tc-emergent"],
        [q("Which UA/NSTEMI finding calls for emergent cath?", "Cardiogenic shock", ["Troponin of 50 with no symptoms", "Stable vitals and pain free", "A TIMI of 1"], "Shock means a large area is failing, so the artery must be opened at once. (Slide 26)"),
          q("Which new exam finding in NSTEMI calls for emergent cath?", "A new holosystolic murmur from MR or VSD", ["An S4", "A pericardial rub only", "Pedal pulses 2+"], "New MR or VSD signals mechanical damage that needs urgent cath. (Slide 26)")],
        [q("An NSTEMI patient on NTG and metoprolol has ongoing rest pain and runs of sustained VT. Next step?", "Emergent cardiac cath", ["Outpatient stress test", "Discharge on DAPT", "Repeat troponin tomorrow"], "Refractory angina and sustained VT are both triggers for emergent cath. (Slide 26)")]),
      C("TIMI risk score for UA/NSTEMI",
        tbl(["One point each"], [["Age <strong>&ge; 65</strong>"], ["<strong>&ge; 3</strong> CAD risk factors"], ["Known CAD <strong>&gt; 50%</strong> stenosis"], ["<strong>Aspirin</strong> in the past 7 days"], ["<strong>Severe angina</strong> (&ge; 2 episodes) in 24 h"], ["<strong>Elevated</strong> cardiac markers"], ["<strong>ST deviation &gt; 0.5 mm</strong>"]]) +
        hy("TIMI <strong>&ge; 3</strong> = increased risk: <strong>left heart cath within 24 to 48 hours</strong>.") +
        mn("<strong>AMERICA</strong> (standard teaching): Age 65, Markers, EKG ST change, Risk factors 3, Ischemia (2 anginal events), CAD known, Aspirin in 7 days."),
        ["tc-timi-items", "tc-timi-3"],
        [q("What TIMI score marks increased risk needing cath within 24 to 48 hours?", "3 or more", ["1 or more", "5 or more", "7"], "A TIMI of 3 or more means enough risk to benefit from early invasive treatment. (Slide 27)"),
          q("Which earns a TIMI point?", "Aspirin use in the past 7 days", ["Female sex", "Smoking alone", "Heart rate over 100"], "Aspirin use in the past week means the event broke through therapy, a marker of risk. (Slide 27)"),
          q("What ST deviation earns a TIMI point?", "More than 0.5 mm", ["More than 5 mm", "Any T wave change", "Only ST elevation over 2 mm"], "Even small ST deviation over 0.5 mm signals active ischemia. (Slide 27)"),
          q("What age earns a TIMI point?", "65 or older", ["50 or older", "75 or older", "80 or older"], "TIMI gives one point for age 65 or older. (Slide 27)"),
          q("How many risk factors earn the TIMI risk-factor point?", "3 or more", ["1", "2", "5"], "Three or more CAD risk factors earn one TIMI point. (Slide 27)")],
        [q("A 70-year-old with known 60% LAD disease has rising troponin and no other TIMI items. Score and plan?", "3, cath within 24 to 48 hours", ["1, discharge", "2, stress test", "7, emergent CABG"], "Age, known CAD and markers make 3 points, which triggers early cath. (Slide 27)"),
          q("A 50-year-old with 1 risk factor, no known CAD, normal troponin and no ST change has had one episode of pain. TIMI?", "0", ["1", "2", "3"], "None of the seven TIMI items are met. (Slide 27)")]),
      C("TIMI vs GRACE",
        tbl(["Score", "Predicts", "Key items"], [
          ["<strong>TIMI UA/NSTEMI</strong>", "<strong>14-day</strong> death, MI or urgent revascularization", "The 7 items above"],
          ["<strong>TIMI STEMI</strong>", "<strong>30-day death</strong>", "Age 65 to 74 = 2, &ge; 75 = 3; DM/HTN/angina = 1; SBP &lt; 100 = 3; HR &gt; 100 = 2; Killip II to IV = 2; weight &lt; 67 kg = 1; anterior STE or LBBB = 1; time to treatment &gt; 4 h = 1"],
          ["<strong>GRACE</strong>", "In-hospital and later death", "Age, HR, SBP, creatinine, <strong>Killip class</strong>, <strong>cardiac arrest on admission</strong>, ST deviation, markers"]]),
        ["tc-timi-stemi", "tc-grace"],
        [q("TIMI for UA/NSTEMI predicts outcomes over:", "14 days", ["30 days", "1 year", "10 years"], "The UA/NSTEMI TIMI score predicts death, MI or urgent revascularization at 14 days. (Slide 28)"),
          q("In TIMI-STEMI, an SBP under 100 earns how many points?", "3", ["1", "2", "0"], "Hypotension is the strongest single TIMI-STEMI predictor, worth 3 points. (Slide 28)"),
          q("Which score uses creatinine and cardiac arrest on admission?", "GRACE", ["TIMI UA/NSTEMI", "TIMI STEMI", "CHA2DS2-VASc"], "GRACE adds kidney function and arrest, which TIMI does not. (Slide 28)"),
          q("TIMI-STEMI predicts:", "30-day mortality", ["14-day revascularization", "Stroke risk in AF", "Bleeding on warfarin"], "The STEMI version of TIMI estimates death at 30 days. (Slide 28)")],
        [q("A STEMI patient is 77 with HR 110. How many TIMI-STEMI points do age and heart rate add?", "5", ["2", "3", "7"], "Age 75 or older gives 3 points and HR over 100 gives 2. (Slide 28)")])
    ]),

    S("09-invasive-strategy", "9. Invasive vs selective strategy in UA/NSTEMI", "Objective 4 (slides 29 to 34): immediate, routine and selective invasive care, contraindications, and admission orders.", [
      C("Three strategies",
        tbl(["Strategy", "Who", "What"], [
          ["<strong>Immediate invasive</strong>", "<strong>Shock</strong>, instability, refractory pain, life-threatening arrhythmia", "Cath now"],
          ["<strong>Routine invasive</strong>", "<strong>Intermediate or high risk</strong>", "Cath <strong>early (within 24 h) if high risk</strong>, otherwise later in the stay; then PCI, CABG or medical therapy"],
          ["<strong>Selective invasive</strong>", "<strong>Low risk</strong>", "Medical therapy, then <strong>stress test or CCTA</strong>; angiography only if ischemia or symptoms recur"]]) +
        chain(["Lower risk: noninvasive test", "Positive: angiography", "Negative: medical therapy, consider <strong>MINOCA</strong> if an MI occurred"]),
        ["is-immediate", "is-routine", "is-selective", "is-algorithm"],
        [q("Which strategy fits a low-risk NSTEMI?", "Selective invasive: medical therapy then a noninvasive test", ["Immediate invasive", "Emergent CABG", "Thrombolytics"], "Low-risk patients start with medicines and only go to cath if testing shows ischemia. (Slides 31 to 32)"),
          q("High-risk NSTEMI patients on a routine invasive strategy get cath:", "Early, within 24 hours", ["Within 7 days", "Only if a stress test is positive", "Never"], "Higher risk means earlier cath to prevent recurrent MI. (Slide 30)"),
          q("Which patients get an immediate invasive strategy?", "Shock, instability, refractory pain or life-threatening arrhythmia", ["All TIMI 3 patients", "Low-risk patients", "Patients with negative troponin"], "Unstable patients cannot wait; the artery must be opened now. (Slide 29)"),
          q("In the selective strategy, which tests come before cath?", "Stress testing or CCTA", ["Thrombolytics", "Cardiac MRI only", "Holter only"], "Noninvasive testing decides whether the patient needs angiography. (Slides 31 to 32)")],
        [q("A 48-year-old with a small troponin rise, no ongoing pain and TIMI of 1 is stable. Plan?", "Medical therapy, then a stress test or CCTA", ["Immediate cath", "Thrombolytics", "Emergent CABG"], "Low risk fits the selective strategy. (Slides 31 to 32)"),
          q("An NSTEMI patient becomes hypotensive and cold with pulmonary edema. Strategy?", "Immediate invasive", ["Selective invasive", "Stress test tomorrow", "Medical therapy only"], "Cardiogenic shock calls for cath right away. (Slides 26, 29)")]),
      C("When not to go invasive, and admission orders",
        ul(["Contraindications to a routine invasive approach: <strong>high bleeding risk on DAPT</strong>, <strong>platelets &lt; 50</strong>, <strong>advanced CKD not on dialysis</strong>, <strong>acute renal failure</strong>, <strong>life expectancy &lt; 1 to 2 years</strong>, <strong>advanced dementia</strong>, anatomy that rules out PCI or CABG, <strong>patient preference</strong>.",
          "Admission: <strong>cardiology consulted from the ER</strong> for every UA/NSTEMI; correct <strong>electrolytes and hypoxia</strong>; <strong>telemetry</strong> floor, bedrest, heart-healthy diet then <strong>NPO at midnight</strong> before cath."]),
        ["is-contra", "is-admit"],
        [q("Which platelet count argues against a routine invasive approach?", "Under 50", ["Under 300", "Over 150", "Over 400"], "Very low platelets make bleeding on DAPT and at the access site too risky. (Slide 33)"),
          q("Why is advanced CKD not on dialysis a relative contraindication to cath?", "Contrast can push the kidneys into dialysis", ["CKD protects the heart", "Cath cannot be done in CKD at all", "Troponin is useless in CKD"], "Contrast nephropathy could make a patient with failing kidneys dialysis dependent. (Slide 33)"),
          q("Who is consulted from the ER for every UA/NSTEMI?", "Cardiology", ["Cardiothoracic surgery", "Nephrology", "Neurology"], "Cardiology decides cath timing and the P2Y12, so they are called early. (Slide 34)"),
          q("Before a planned cath, the patient is kept:", "NPO after midnight", ["On a full diet", "On clear liquids for 3 days", "NPO for 48 hours"], "NPO status prepares for sedation during the procedure. (Slide 34)")],
        [q("An 89-year-old with advanced dementia has a small NSTEMI. Family wants comfort-focused care. Approach?", "Medical therapy without routine cath", ["Immediate cath", "Emergent CABG", "Thrombolytics"], "Advanced dementia and patient or family preference are reasons to skip routine invasive care. (Slide 33)")])
    ]),

    S("10-don-nstemi", "10. Unstable Don: putting NSTEMI together", "Objectives 4 and 5 (slide 35): Don's EKG, troponins, diagnosis and TIMI score.", [
      C("Don's results and answer",
        ul(["EKG: <strong>T wave inversion and ST depression in II, III, aVF</strong> (no ST elevation).",
          "hs-troponin I: <strong>234 then 391 then 806 then 682</strong> (normal &lt; 15): a rise and fall.", "BNP slightly high."]) +
        hy("Diagnosis: <strong>NSTEMI</strong> (inferior ischemia, rising and falling troponin, no ST elevation).") +
        tbl(["TIMI item", "Don"], [["Age &ge; 65", "No (55) = 0"], ["Known CAD &gt; 50%", "Yes (60% RCA) = 1"], ["ASA in 7 days", "Yes = 1"], ["Elevated markers", "Yes = 1"], ["ST deviation", "Yes = 1"], ["Severe angina", "Yes = 1"], ["&ge; 3 risk factors", "Not given"]]) +
        note("The deck does not print Don's final score. Applying slide 27, he has at least 5 points: high risk, so early invasive care."),
        ["dn-dx", "dn-timi"],
        [q("What makes Don's diagnosis NSTEMI instead of unstable angina?", "His troponin rose above normal", ["He had ST elevation", "His BNP was high", "He is 55"], "A troponin rise separates NSTEMI from UA. (Slide 35)"),
          q("What makes Don's diagnosis NSTEMI instead of STEMI?", "No ST elevation", ["Normal troponin", "Normal BNP", "Inferior leads"], "ST depression and TWI without elevation means NSTEMI. (Slide 35)"),
          q("Don's ischemic changes are in II, III and aVF. Which artery fits?", "RCA", ["LAD", "LCx in most people", "Left main"], "Inferior leads usually reflect the RCA, matching his known RCA lesion. (Slides 14, 35)")],
        [q("Using the deck's rules, Don's TIMI score is at least:", "5, high risk, early invasive", ["0, low risk", "2, selective strategy", "1, discharge"], "Known CAD, recent aspirin, markers, ST deviation and severe angina give at least 5 points. (Slides 27, 35)"),
          q("Don's troponin went 234, 391, 806, 682. What does the pattern show?", "A rise and fall consistent with acute MI", ["Chronic elevation from CKD", "Lab error", "A normal trend"], "An acute MI produces a dynamic rise and then fall in troponin. (Slides 5, 35)")])
    ]),

    S("11-stemi-time", "11. STEMI: time is muscle", "Objective 6 (slides 36 to 39): what happens in the artery, how necrosis spreads, and getting to the cath lab.", [
      C("Why minutes matter",
        ul(["STEMI = <strong>atherothrombosis</strong> with <strong>complete occlusion</strong>.", "<strong>Time is muscle</strong>: the longer the artery is closed, the more tissue dies."]) +
        chain(["<strong>Ischemia</strong>: seconds to minutes", "<strong>Injury</strong>: minutes to hours", "<strong>Early necrosis</strong>: hours to days", "<strong>Infarct</strong>: days to weeks"]) +
        ul(["Necrosis starts in the <strong>subendocardium</strong> and spreads <strong>outward</strong> toward the epicardium (wavefront).",
          "Ideally STEMI is recognized <strong>by EMS</strong>, who send the EKG from the field and alert the ER. The ER stay is short; the priority is the <strong>cath lab</strong>."]),
        ["st-occlusion", "st-wavefront", "st-ems"],
        [q("STEMI usually results from:", "Complete occlusion of a coronary artery by thrombus", ["Partial occlusion with no clot", "Anemia", "Vasodilation"], "A fully closed artery stops all flow to the territory, causing transmural injury. (Slide 36)"),
          q("Where does necrosis begin in a STEMI?", "The subendocardium", ["The epicardium", "The pericardium", "The valves"], "The subendocardium has the poorest blood supply, so it dies first and the wave moves outward. (Slide 38)"),
          q("Ischemia, injury, early necrosis, infarct: which takes days to weeks?", "Completed infarct", ["Ischemia", "Injury", "None"], "The infarct completes and remodels over days to weeks after the occlusion. (Slide 38)"),
          q("What is the priority once STEMI is recognized?", "Getting the patient to the cath lab", ["A long ER workup", "A stress test", "Waiting for troponin"], "Opening the artery quickly saves muscle, so the ER stay is kept short. (Slide 39)")],
        [q("EMS sends a field EKG showing anterior STEMI. What should happen?", "The ER activates the cath lab before arrival", ["Wait for the first troponin", "Admit to a general floor", "Order a stress test"], "Field recognition lets the team open the artery sooner, saving myocardium. (Slide 39)")])
    ]),

    S("12-reperfusion", "12. STEMI reperfusion: PCI vs fibrinolytics", "Objective 6 (slides 40 to 44, plus the reperfusion flowchart): time goals and when to use lytics.", [
      C("Reperfusion targets",
        tbl(["Target", "Goal", "Clock starts at"], [
          ["<strong>Door-to-ECG</strong>", "<strong>&le; 10 min</strong>", "Hospital arrival"],
          ["<strong>Primary PCI</strong> (direct to PCI hospital)", "<strong>&le; 90 min</strong> (door-to-balloon / first medical contact to device)", "<strong>First medical contact</strong>"],
          ["<strong>PCI after transfer</strong>", "<strong>&le; 120 min</strong>", "First medical contact"],
          ["<strong>Fibrinolytics</strong>", "<strong>Door-to-needle &le; 30 min</strong>", "Hospital arrival"]]) +
        hy("<strong>Primary PCI is preferred</strong>: lower reinfarction and lower intracranial hemorrhage than lytics."),
        ["rp-ecg", "rp-pci", "rp-transfer", "rp-needle", "rp-pci-better"],
        [q("What is the door-to-balloon goal for STEMI?", "90 minutes", ["30 minutes", "120 minutes from arrival", "6 hours"], "Opening the artery within 90 minutes limits infarct size. (Slides 40 to 41)"),
          q("What is the door-to-needle goal for fibrinolytics?", "30 minutes", ["10 minutes", "90 minutes", "12 hours"], "Lytics work best when given fast, so the target is 30 minutes. (Slides 40, 42)"),
          q("What is the door-to-ECG goal for suspected ACS?", "10 minutes", ["30 minutes", "60 minutes", "90 minutes"], "A fast EKG is what activates the STEMI pathway. (Slide 44)"),
          q("Why is primary PCI preferred over lytics?", "Less reinfarction and less intracranial hemorrhage", ["It is cheaper", "It needs no cath lab", "It works after 48 hours only"], "PCI opens the artery mechanically without systemic clot-busting bleeding risk. (Slide 40)"),
          q("For a patient transferred to a PCI hospital, the first-medical-contact-to-device goal is:", "120 minutes", ["90 minutes", "30 minutes", "240 minutes"], "Transfer adds time, so the goal stretches to 120 minutes. (Slide 41)"),
          q("The PCI clock starts at:", "First medical contact", ["Hospital arrival", "Symptom onset", "Cath lab arrival"], "PCI timing counts from first medical contact, while ECG and lytic timing count from arrival. (Slide 44)")],
        [q("A STEMI patient arrives by EMS at a PCI-capable hospital. Best reperfusion?", "Primary PCI within 90 minutes", ["Lytics within 30 minutes", "Medical therapy", "Elective CABG"], "Primary PCI is preferred when it can be done in time. (Slides 40 to 41)")]),
      C("When to give fibrinolytics",
        ul(["Give lytics when <strong>PCI cannot happen within 120 minutes</strong>, the patient is <strong>eligible</strong>, and generally <strong>within 12 hours</strong> of symptom onset.",
          "After lytics, <strong>transfer</strong> to a PCI hospital (<strong>pharmacoinvasive</strong> strategy); flowchart goal: angiography <strong>within 24 h</strong>.",
          "<strong>Emergent CABG</strong> has substantial mortality: reserved for failed PCI or lytics.",
          "Flowchart: symptoms <strong>12 to 48 h</strong> with ongoing ischemia: PCI as soon as possible. Over 48 h: individualized.",
          "Major contraindications to lytics: prior <strong>intracranial hemorrhage</strong>, AVM or intracranial malignancy; <strong>ischemic stroke within 3 months</strong>; <strong>aortic dissection</strong>; <strong>active bleeding</strong>; significant closed-head or facial trauma within 3 months."]),
        ["rp-lytic-when", "rp-pharmacoinvasive", "rp-cabg", "rp-late", "rp-lytic-ci"],
        [q("Fibrinolytics are considered when PCI cannot be done within:", "120 minutes", ["30 minutes", "12 hours", "24 hours"], "If transfer would take over 2 hours, lytics restore flow sooner. (Slides 42 to 43)"),
          q("Fibrinolytics are generally given within how long of symptom onset?", "12 hours", ["1 hour", "48 hours", "7 days"], "After 12 hours most of the muscle is lost and bleeding risk outweighs benefit. (Slides 42 to 43)"),
          q("After fibrinolytics, the patient should be:", "Transferred to a PCI-capable hospital", ["Discharged in 24 hours", "Sent for CABG immediately", "Given a second lytic dose"], "The pharmacoinvasive plan follows lytics with angiography. (Slides 42, 44)"),
          q("Which is a major contraindication to fibrinolytics?", "Suspected aortic dissection", ["Age over 65", "Diabetes", "Prior MI"], "Lytics would make bleeding from a dissection catastrophic. (Reperfusion flowchart, CAD Part V slide 82)"),
          q("When is emergent CABG used for STEMI?", "When PCI or lytics fail", ["As first-line for every STEMI", "Never", "Only for NSTEMI"], "Emergent CABG carries high mortality, so it is reserved for failures. (Slide 43)")],
        [q("Don lives in rural Minnesota, 3 hours from a PCI hospital, with an inferior STEMI that started 1 hour ago. Plan?", "Fibrinolytics within 30 minutes, then transfer", ["Drive 3 hours for primary PCI", "Medical therapy only", "Emergent CABG locally"], "PCI cannot happen within 120 minutes, so lytics come first and then transfer. (Slides 42 to 43, 50)"),
          q("A STEMI patient 2 hours from PCI had a hemorrhagic stroke last year. Reperfusion?", "Transfer for PCI; lytics are contraindicated", ["Give lytics now", "No reperfusion at all", "Give double-dose lytics"], "Prior intracranial hemorrhage forbids lytics, so the patient goes for PCI. (Slide 82 flowchart)")])
    ]),

    S("13-culprit-multivessel", "13. Culprit lesion and multivessel disease", "Objective 6 (slides 45 to 50, 72 to 73): what to fix first and what to do with the other lesions.", [
      C("Culprit first, then the rest",
        ul(["Urgent angiography finds the <strong>infarct-related (culprit) artery</strong>; <strong>primary PCI</strong> opens it.",
          "<strong>Stable</strong> STEMI with other significant lesions: <strong>complete revascularization</strong>, either <strong>during the initial PCI</strong> or <strong>staged</strong> later in the stay or <strong>within 45 days</strong>.",
          "Choice depends on <strong>anatomy, lesion complexity, renal function, clinical stability</strong>.",
          "<strong>Cardiogenic shock</strong>: <strong>culprit-only</strong> PCI; do <strong>not</strong> routinely treat nonculprit arteries at the first procedure."]) +
        hy("No shock + multivessel = <strong>complete revascularization</strong>. Shock = <strong>culprit only</strong>."),
        ["cm-culprit", "cm-complete", "cm-45", "cm-shock"],
        [q("In STEMI, the first lesion treated is the:", "Culprit (infarct-related) artery", ["Tightest non-culprit lesion", "Left main always", "Smallest branch"], "Restoring flow in the occluded artery saves the dying muscle. (Slide 45)"),
          q("Staged PCI of nonculprit lesions is done within:", "45 days", ["7 years", "24 hours only", "Never"], "Staged complete revascularization is done later in the stay or within 45 days. (Slide 46)"),
          q("In cardiogenic shock, the initial PCI should treat:", "The culprit vessel only", ["Every lesion at once", "No vessels", "Only nonculprit vessels"], "Multivessel PCI in shock adds contrast and time and worsens outcomes. (Slides 47 to 48)"),
          q("Which factor guides when to fix nonculprit lesions?", "Renal function", ["Hair color", "Cholesterol only", "Blood type"], "Contrast load matters, so kidney function helps decide whether to stage. (Slide 46)")],
        [q("A stable STEMI patient has ST elevation in V3 and V4 and also an 80% mid-RCA lesion. Plan?", "PCI of the LAD culprit, then RCA PCI during the procedure or staged", ["Treat only the RCA", "No further treatment of the RCA", "Emergent CABG"], "The LAD is the culprit; stable multivessel disease gets complete revascularization. (Slides 46, 49)"),
          q("Don gets a DES in his 99% mid-LAD and has an 80% RCA lesion. Which is right?", "RCA PCI may be done during the initial procedure or staged", ["No further treatment is needed", "RCA PCI must happen in the same procedure", "RCA PCI is contraindicated"], "Complete revascularization is recommended, with timing set by clinical and procedural factors. (Slides 72 to 73)"),
          q("Don's EKG instead shows ST elevation in II, III and aVF. What changes?", "Inferior STEMI: cath lab now, plus a right-sided EKG", ["Selective strategy", "Treat as UA", "Stress test first"], "Inferior STE is a STEMI from the RCA, so get a right-sided EKG to check for RV infarct. (Slides 50, 62)")])
    ]),

    S("14-minoca", "14. MINOCA and Takotsubo", "Objective 7 (slides 51 to 55): MI without obstructive coronaries, its causes, mimics and workup.", [
      C("MINOCA",
        ul(["<strong>MI with non-obstructive coronary arteries</strong>: no stenosis &ge; 50% on angiography.", "<strong>5 to 15%</strong> of MIs; more common in <strong>women</strong> and <strong>younger</strong> patients.",
          "Can present as STEMI or NSTEMI. It is a <strong>working diagnosis</strong>: the cause must be found."]) +
        tbl(["True ischemic causes", "Mimics (not MINOCA)"], [["<strong>Vasospasm</strong>", "<strong>Myocarditis</strong>"], ["<strong>SCAD</strong> (spontaneous coronary dissection)", "<strong>Takotsubo</strong>"], ["<strong>Embolism</strong> or thrombosis", "<strong>Pulmonary embolism</strong>"], ["<strong>Microvascular dysfunction</strong>", ""], ["Plaque rupture or erosion with transient thrombus", ""]]) +
        ul(["Workup: <strong>cardiac MRI</strong>, echo, intracoronary imaging, provocative spasm or microvascular testing."]),
        ["mn-def", "mn-epi", "mn-causes", "mn-mimics", "mn-workup"],
        [q("MINOCA means MI with coronary stenosis of:", "Less than 50%", ["More than 70%", "100%", "More than 50%"], "MINOCA is an MI where angiography shows no obstructive (50% or more) lesion. (Slide 51)"),
          q("MINOCA is more common in:", "Women and younger patients", ["Older men only", "Children", "Smokers over 80"], "Spasm, SCAD and microvascular causes are more frequent in women and younger people. (Slide 51)"),
          q("Which is a true ischemic cause of MINOCA?", "Spontaneous coronary artery dissection", ["Myocarditis", "Takotsubo", "Pulmonary embolism"], "SCAD causes real coronary ischemia, while the others only mimic it. (Slide 52)"),
          q("Which test is key in working up MINOCA?", "Cardiac MRI", ["Holter monitor", "Lipid panel", "ABI"], "Cardiac MRI separates infarct from myocarditis and Takotsubo. (Slide 54)"),
          q("About what share of MIs are MINOCA?", "5 to 15%", ["50 to 60%", "Less than 1%", "90%"], "MINOCA is a minority of MIs, about 5 to 15%. (Slide 51)")],
        [q("A 41-year-old woman has an NSTEMI; cath shows smooth coronaries without stenosis. Next diagnostic step?", "Cardiac MRI to find the cause", ["Discharge with no diagnosis", "Emergent CABG", "Repeat cath in 10 years"], "MINOCA is a working diagnosis, so MRI is used to find the real cause. (Slides 51, 54)")]),
      C("Takotsubo cardiomyopathy",
        ul(["<strong>Transient regional LV dysfunction</strong> that <strong>mimics ACS</strong>.", "Follows <strong>emotional or physical stress</strong>.", "Coronaries are not the cause; it is a MINOCA <strong>mimic</strong>."]),
        ["mn-takotsubo"],
        [q("Takotsubo typically follows:", "Emotional or physical stress", ["Heavy exercise training", "High cholesterol", "Statin use"], "A catecholamine surge from stress stuns part of the LV. (Slide 55)")],
        [q("Two days after her husband's death, a 68-year-old woman has chest pain, ST elevation and apical ballooning with clean coronaries. Diagnosis?", "Takotsubo cardiomyopathy", ["LAD STEMI", "Pericarditis", "Aortic dissection"], "Stress-triggered transient LV dysfunction with clean coronaries is Takotsubo. (Slide 55)")])
    ]),

    S("15-vasospasm-stimulants", "15. Vasospastic angina and stimulants", "Objective 7 (slides 56 to 59): who gets spasm, how it looks, how to treat it, and cocaine or meth.", [
      C("Vasospastic (Prinzmetal) angina",
        ul(["<strong>Rest pain</strong>, typically <strong>midnight to early morning</strong>.", "Often <strong>young smokers</strong>; also <strong>cocaine or meth</strong>.",
          "<strong>Transient ST elevation</strong> during attacks; <strong>no obstructive CAD</strong> on cath."]) +
        tbl(["Do", "Avoid"], [["<strong>CCB first</strong>: amlodipine, diltiazem, verapamil", "<strong>Beta blockers</strong>, especially <strong>nonselective</strong>"], ["Add <strong>long-acting nitrate</strong>", "Smoking"], ["<strong>SL NTG</strong> for attacks", "Cocaine, meth"]]) +
        hy("Beta blockers leave alpha receptors <strong>unopposed</strong>, which can worsen spasm."),
        ["vs-feat", "vs-ekg", "vs-ccb", "vs-avoid-bb"],
        [q("First-line treatment for vasospastic angina is:", "A calcium channel blocker", ["A nonselective beta blocker", "Aspirin alone", "Ranolazine"], "CCBs relax coronary smooth muscle and prevent spasm. (Slide 58)"),
          q("Which drug class should be avoided in vasospastic angina?", "Beta blockers, especially nonselective", ["CCBs", "Long-acting nitrates", "SL nitroglycerin"], "Blocking beta-2 leaves alpha vasoconstriction unopposed, worsening spasm. (Slide 58)"),
          q("When does vasospastic angina typically occur?", "At rest, midnight to early morning", ["Only with heavy exertion", "After meals only", "Only in the afternoon"], "Spasm attacks cluster at night and early morning at rest. (Slide 56)"),
          q("What does the cath show in vasospastic angina?", "No obstructive CAD", ["Triple vessel disease", "Left main occlusion", "Valve stenosis"], "The arteries are open between spasms, so the cath looks clean. (Slide 57)")],
        [q("A 32-year-old smoker wakes at 4 am with chest pain and transient ST elevation; cath is normal. Best long-term drug?", "Diltiazem or amlodipine", ["Propranolol", "Clopidogrel", "Alteplase"], "CCBs are first-line for vasospasm, and nonselective BBs can worsen it. (Slides 56 to 58)")]),
      C("Cocaine and methamphetamine",
        ul(["Cause <strong>high sympathetic tone</strong>, <strong>coronary spasm</strong>, <strong>thrombosis</strong> and <strong>MI</strong>.", "Treat with <strong>benzodiazepines</strong>, <strong>nitrates</strong>, and <strong>CCBs</strong> when appropriate."]),
        ["vs-stim"],
        [q("Which is first used to calm the sympathetic surge in cocaine chest pain?", "A benzodiazepine", ["A nonselective beta blocker", "Thrombolytics", "Epinephrine"], "Benzodiazepines blunt the sympathetic drive that causes the spasm and tachycardia. (Slide 59)")],
        [q("A 26-year-old after cocaine has chest pain, HR 128 and BP 182/104, agitated. First drugs?", "Benzodiazepine and nitrates", ["Propranolol", "Alteplase", "Morphine alone"], "Benzos calm the sympathetic surge and nitrates relieve spasm. (Slide 59)")])
    ]),

    S("16-rv-infarct", "16. Right ventricular infarct", "Objective 7 (slides 60 to 66): the triad, the right-sided EKG and why fluids, not nitrates.", [
      C("RV infarct",
        ul(["<strong>Proximal RCA</strong> occlusion; occurs with <strong>inferior MI</strong>.", "Triad: <strong>hypotension, JVD, clear lungs</strong>.",
          "Get a <strong>right-sided EKG on every inferior MI</strong>; <strong>V4R</strong> ST elevation is the key lead.",
          "Treatment: <strong>avoid nitrates and diuretics</strong>; give <strong>NS boluses</strong> cautiously; <strong>urgent PCI</strong>."]) +
        chain(["RV fails", "Less blood pumped to the lungs", "<strong>Less LV preload</strong>", "<strong>Low cardiac output</strong>, hypotension", "Blood backs up in the veins: <strong>JVD</strong>, but the <strong>lungs stay clear</strong>"]),
        ["rv-rca", "rv-triad", "rv-v4r", "rv-tx", "rv-mech"],
        [q("RV infarct usually comes with which MI?", "Inferior", ["Anterior", "Lateral only", "Septal"], "The proximal RCA supplies both the RV and the inferior wall. (Slide 60)"),
          q("What is the RV infarct triad?", "Hypotension, JVD and clear lungs", ["Hypertension, crackles, S3", "Fever, rub, diffuse ST elevation", "Bradycardia, wheeze, edema"], "The failing RV backs blood up into the veins but sends little to the lungs and LV. (Slide 61)"),
          q("Which lead is key for RV infarct?", "V4R", ["aVR", "V1", "Lead I"], "ST elevation in right-sided V4R shows RV injury. (Slide 63)"),
          q("Why are the lungs clear in RV infarct?", "The weak RV sends less blood to the lungs and LV", ["The LV is overloaded", "Fluid goes to the abdomen", "The patient is always on diuretics"], "The failing RV underfills the lungs, so there is no pulmonary edema. (Slide 61)"),
          q("Which treatment fits RV infarct with hypotension?", "Cautious normal saline boluses", ["Nitroglycerin drip", "Furosemide", "Morphine"], "The RV needs preload, so fluids support output while nitrates and diuretics drop it. (Slide 65)")],
        [q("An inferior STEMI patient has BP 78/50, JVD and clear lungs. Which drug would be harmful?", "Nitroglycerin", ["Normal saline", "Aspirin", "Heparin"], "Nitrates drop preload, which a failing RV depends on. (Slides 61, 65)"),
          q("Every inferior STEMI should also get:", "A right-sided EKG", ["A chest CT", "An EEG", "A lumbar puncture"], "A right-sided EKG finds RV involvement that changes fluid and nitrate decisions. (Slide 62)")])
    ]),

    S("17-older-adults", "17. ACS in older adults", "Objective 7 (slide 67): atypical presentation and higher risk after 65.", [
      C("Older adults",
        ul(["<strong>60 to 65%</strong> of MIs occur at <strong>age 65 or older</strong>; most ACS deaths are in older adults.",
          "<strong>NSTEMI more often than STEMI</strong>.", "Often <strong>no chest pain</strong>: <strong>dyspnea, syncope, weakness, delirium</strong>.",
          "More <strong>HF, shock, arrhythmia, bleeding, AKI</strong> and death."]),
        ["old-share", "old-type", "old-sx", "old-risk"],
        [q("About what share of MIs happen at age 65 or older?", "60 to 65%", ["10%", "25%", "90%"], "Most MIs are in older adults, so atypical presentations matter. (Slide 67)"),
          q("Older adults with ACS more often have:", "NSTEMI than STEMI", ["STEMI than NSTEMI", "Only stable angina", "No troponin rise"], "Older patients more often present with NSTEMI. (Slide 67)"),
          q("Which complications are more common in older ACS patients?", "Bleeding and AKI", ["Hypertension only", "Lower mortality", "Fewer arrhythmias"], "Older patients have more HF, shock, bleeding, AKI and death. (Slide 67)")],
        [q("An 84-year-old woman is brought in with new confusion and dyspnea but no chest pain. Troponin rises. What should you suspect?", "ACS with atypical presentation", ["Normal aging", "Dementia only", "Anxiety"], "Older adults often present with delirium or dyspnea instead of chest pain. (Slide 67)")])
    ]),

    S("18-complications", "18. Complications of MI", "Objective 8 (slides 68 to 71): functional, mechanical and electrical complications and their treatment.", [
      C("Functional complications",
        tbl(["Complication", "Treatment"], [["<strong>LV failure</strong>", "Diuretics and GDMT (BB, ACEi)"], ["<strong>RV failure</strong>", "<strong>Fluids</strong>; avoid nitrates and diuretics"], ["<strong>Cardiogenic shock</strong>", "<strong>Urgent revascularization</strong>"]]),
        ["cx-lv", "cx-rv", "cx-shock"],
        [q("Post-MI LV failure is treated with:", "Diuretics and GDMT such as BB and ACEi", ["Fluid boluses", "Nitrate avoidance and fluids", "Thrombolytics"], "Diuretics clear congestion and GDMT protects the failing LV. (Slide 69)"),
          q("Post-MI cardiogenic shock needs:", "Urgent revascularization", ["Outpatient follow-up", "A stress test", "Only diuretics"], "Opening the artery is the main way to recover pumping muscle in shock. (Slide 69)")],
        [q("After an anterior MI a patient has crackles, an S3 and BP 128/80. Treatment?", "Diuretic and GDMT", ["NS bolus", "Stop all drugs", "Thrombolytics"], "LV failure with congestion is treated with diuretics and GDMT. (Slide 69)")]),
      C("Mechanical complications",
        tbl(["Complication", "Clue"], [
          ["<strong>Free-wall rupture</strong>", "<strong>Hemopericardium, tamponade</strong>, PEA, sudden death"],
          ["<strong>Ventricular septal rupture (VSD)</strong>", "<strong>New harsh holosystolic murmur</strong>, L to R shunt, <strong>O2 step-up</strong> in the RV"],
          ["<strong>Papillary muscle rupture</strong>", "<strong>Acute MR</strong>, flash <strong>pulmonary edema</strong>, shock"]]),
        ["cx-wall", "cx-vsd", "cx-pap"],
        [q("Free-wall rupture after MI presents as:", "Tamponade, PEA or sudden death", ["A new soft diastolic murmur", "Slow-onset ankle edema", "Hypertension"], "Blood fills the pericardium and stops the heart from filling. (Slide 70)"),
          q("A post-MI VSD shows which finding on right heart cath?", "An oxygen step-up in the RV", ["Low RV oxygen", "Normal saturations", "High LA pressure only"], "Oxygenated LV blood shunts into the RV, raising its O2 saturation. (Slide 70)"),
          q("Papillary muscle rupture causes:", "Acute mitral regurgitation with pulmonary edema", ["Aortic stenosis", "Pericarditis", "Complete heart block"], "Losing the leaflet anchor lets the mitral valve flail, flooding the lungs. (Slide 70)")],
        [q("Four days after MI a patient suddenly has a new harsh holosystolic murmur and hypotension; RV O2 is higher than RA. Diagnosis?", "Ventricular septal rupture", ["Papillary muscle rupture", "Pericarditis", "Free-wall rupture"], "An O2 step-up proves a left-to-right shunt through the septum. (Slide 70)"),
          q("After an inferior MI a patient develops sudden flash pulmonary edema and a new apical murmur. Diagnosis?", "Papillary muscle rupture with acute MR", ["VSD", "RV infarct", "Pericardial tamponade"], "Acute MR from papillary rupture floods the lungs suddenly. (Slide 70)")]),
      C("Electrical complications",
        ul(["<strong>Bradycardia and AV block</strong>, especially with <strong>inferior MI</strong>: <strong>atropine</strong>; <strong>temporary pacing</strong> if refractory; <strong>permanent pacer</strong> only if it <strong>persists</strong> after waiting.",
          "<strong>VT/VF</strong>: <strong>defibrillate</strong> if pulseless; <strong>synchronized cardioversion</strong> if unstable with a pulse.",
          "<strong>SVT</strong>: treat by rhythm.", "<strong>New BBB</strong>: may mean extensive injury; <strong>not automatically</strong> a pacer."]),
        ["cx-brady", "cx-vt", "cx-svt", "cx-bbb"],
        [q("Bradycardia and AV block after MI are most common with which MI?", "Inferior", ["Anterior", "Lateral", "Septal only"], "The RCA usually supplies the AV node, so inferior MI slows conduction. (Slide 71)"),
          q("First drug for symptomatic bradycardia after inferior MI?", "Atropine", ["Metoprolol", "Diltiazem", "Adenosine"], "Atropine blocks vagal tone to speed the heart. (Slide 71)"),
          q("When is a permanent pacemaker placed for post-MI AV block?", "Only if the block persists after waiting", ["Immediately for every block", "Never", "Before cath"], "Post-MI block often recovers, so a permanent pacer is reserved for persistent block. (Slide 71)"),
          q("Pulseless VT after MI is treated with:", "Defibrillation", ["Synchronized cardioversion", "Atropine", "Adenosine"], "Pulseless VT is an arrest rhythm needing unsynchronized shock. (Slide 71)"),
          q("A new bundle branch block after MI:", "May mean extensive injury but does not automatically need a pacer", ["Always needs a permanent pacer", "Is meaningless", "Means the MI was small"], "BBB signals a large infarct, but pacing depends on the rest of the picture. (Slide 71)")],
        [q("After MI a patient has VT at 180 with a pulse, BP 74/40 and confusion. Treatment?", "Synchronized cardioversion", ["Defibrillation", "Atropine", "Observation"], "Unstable VT with a pulse gets synchronized cardioversion. (Slide 71)"),
          q("An inferior MI patient has HR 38 that does not respond to atropine. Next step?", "Temporary pacing", ["Permanent pacer today", "Metoprolol", "Discharge"], "Refractory bradycardia needs temporary pacing while the node recovers. (Slide 71)")])
    ]),

    S("19-post-pci-care", "19. Post-PCI care and Don's discharge", "Objective 9 (slides 72 to 76): monitoring after PCI, discharge timing and Don's home meds.", [
      C("Immediately after PCI",
        ul(["<strong>Telemetry</strong> and vital signs; watch for <strong>recurrent ischemia or arrhythmia</strong>.",
          "<strong>Access site</strong>: bleeding or <strong>hematoma</strong>.", "<strong>Distal circulation</strong>: pulses, color, temperature, sensation.",
          "<strong>Renal function</strong> after contrast.", "Follow access-specific <strong>activity and ambulation</strong> instructions.",
          "Selected uncomplicated STEMI patients may go home in <strong>48 to 72 hours</strong>; set a plan for any remaining disease."]),
        ["pp-monitor", "pp-site", "pp-distal", "pp-renal", "pp-dc"],
        [q("Why is renal function checked after PCI?", "Contrast can injure the kidneys", ["Troponin is cleared by the kidneys", "Stents release potassium", "To check the lipid panel"], "Iodinated contrast can cause acute kidney injury. (Slide 75)"),
          q("Which access-site problem is checked after PCI?", "Bleeding or hematoma", ["Hair loss", "Rash only", "Joint swelling"], "The arterial puncture can bleed, especially on antithrombotics. (Slide 75)"),
          q("Uncomplicated STEMI patients may be discharged in about:", "48 to 72 hours", ["6 hours", "2 weeks", "1 month"], "Stable uncomplicated patients can go home within 2 to 3 days. (Slide 76)"),
          q("Checking pulses, color, temperature and sensation below the access site looks for:", "Compromised distal circulation", ["Infection only", "Contrast allergy", "Hyperkalemia"], "A clot or dissection at the puncture can cut off flow to the limb. (Slide 75)")],
        [q("Two hours after femoral PCI the patient's leg is cool with a weak pedal pulse. What does this suggest?", "Compromised distal circulation at the access site", ["Normal after PCI", "Contrast allergy", "Recurrent MI"], "Loss of distal pulse and warmth means arterial flow beyond the puncture is impaired. (Slide 75)")]),
      C("Don goes home (EF 55%)",
        ul(["<strong>DAPT</strong>: aspirin plus a P2Y12 inhibitor for <strong>12 months</strong>.", "<strong>High-intensity statin</strong>.",
          "Beta blocker and ACEi/ARB by indication: with <strong>EF 55%</strong> and no HF or HTN mentioned, long-term BB is not clearly needed."]) +
        note("The deck asks this question without an answer slide. This answer applies slides 80 and CAD Part V slides 52 to 53."),
        ["pp-don-meds"],
        [q("How long is DAPT continued after ACS when bleeding risk is not high?", "12 months", ["1 week", "1 month", "Lifelong"], "Twelve months of DAPT protects the new stent and plaque while it heals. (Slide 80)")],
        [q("Don, EF 55%, is going home after his LAD stent. Which pair must he leave on?", "DAPT and a high-intensity statin", ["Warfarin and a statin", "Aspirin alone", "No medications"], "Every ACS patient goes home on DAPT and a high-intensity statin; BB and ACEi depend on EF and other indications. (Slides 74, 80)")])
    ]),

    S("20-rehab-prevention", "20. Cardiac rehab and secondary prevention", "Objective 10 (slides 77 to 81): who goes to rehab, what it includes, and the long-term plan.", [
      C("Cardiac rehab",
        ul(["For <strong>MI, PTCA with stent, CABG, valve surgery, HFrEF</strong>.", "Lowers <strong>cardiac and all-cause mortality</strong>, morbidity; improves quality of life.",
          "Yet <strong>fewer than 30%</strong> of eligible patients go.", "Three equal parts: <strong>exercise</strong>, <strong>stress counseling</strong>, <strong>heart-healthy education</strong>.",
          "<strong>36 sessions over 3 months</strong>.", "Barriers: <strong>cost/coverage</strong>, <strong>access</strong> (transport, distance, scheduling), <strong>patient factors</strong>."]),
        ["rh-who", "rh-benefit", "rh-30", "rh-parts", "rh-36", "rh-barriers"],
        [q("Cardiac rehab is usually:", "36 sessions over 3 months", ["6 sessions over 1 week", "100 sessions over 1 year", "1 session"], "The standard program is 36 supervised sessions over about 3 months. (Slide 78)"),
          q("What share of eligible US patients take part in cardiac rehab?", "Fewer than 30%", ["About 90%", "Exactly 50%", "Nearly 100%"], "Fewer than 30% attend despite proven mortality benefit. (Slide 77)"),
          q("Which is one of the three parts of cardiac rehab?", "Stress reduction counseling", ["Thrombolytics", "Cath lab training", "Surgery"], "Rehab combines exercise, stress counseling and heart-healthy education. (Slide 78)"),
          q("Which patient is eligible for cardiac rehab?", "HFrEF", ["Asthma", "Migraine", "Osteoarthritis"], "Rehab covers MI, stents, CABG, valve surgery and HFrEF. (Slide 77)"),
          q("Cardiac rehab reduces:", "Cardiac and all-cause mortality", ["Only cholesterol", "Only weight", "Nothing measurable"], "Supervised rehab lowers both cardiac and all-cause death. (Slide 77)")],
        [q("A post-MI patient says rehab is too far away and he cannot drive. Which barrier is this?", "Access", ["Cost", "Lack of benefit", "Medical contraindication"], "Transport and distance are access barriers. (Slide 79)")]),
      C("Secondary prevention after ACS",
        tbl(["Therapy", "Who"], [
          ["<strong>DAPT</strong> (ASA + P2Y12)", "<strong>12 months</strong> if bleeding risk not high"],
          ["<strong>High-intensity statin</strong>", "Everyone; add <strong>ezetimibe</strong> or other nonstatin as needed"],
          ["<strong>Beta blocker</strong>", "Especially <strong>reduced EF, HF, angina, arrhythmia</strong>"],
          ["<strong>ACEi or ARB</strong>", "Especially <strong>EF &le; 40%, HTN, DM, anterior STEMI</strong>"],
          ["Diabetes", "Individual A1c; <strong>GLP-1 RA or SGLT2i</strong> with CV benefit"],
          ["<strong>Anticoagulation</strong>", "Only for <strong>AF or LV thrombus</strong>, not routinely"]]) +
        ul(["Also: lifestyle, diet, activity, adherence, <strong>cardiac rehab</strong>, <strong>smoking cessation</strong>, weight, <strong>BP</strong> to an individual goal, treat HF (GDMT, diuretics)."]),
        ["sp-dapt", "sp-statin", "sp-bb", "sp-acei", "sp-dm", "sp-ac", "sp-life"],
        [q("Which nonstatin is added when LDL needs more lowering after ACS?", "Ezetimibe", ["Niacin", "Gemfibrozil", "Fish oil"], "Ezetimibe adds LDL lowering on top of a high-intensity statin. (Slide 81)"),
          q("ACEi or ARB after ACS is especially indicated with:", "EF 40% or less, HTN, DM or anterior STEMI", ["Normal EF with no other condition", "Asthma", "Hypotension"], "These conditions benefit from blocking remodeling and RAAS. (Slide 80)"),
          q("Anticoagulation after MI is given:", "Only for AF or LV thrombus", ["To every MI patient", "Never", "For 12 months always"], "Routine anticoagulation adds bleeding without benefit unless there is a clot source. (Slide 81)"),
          q("Which diabetes drugs are favored after ACS in type 2 diabetes?", "GLP-1 RA or SGLT2 inhibitor", ["Sulfonylureas", "Insulin only", "Metformin is banned"], "These drugs have proven cardiovascular benefit in patients with ASCVD. (Slide 81)"),
          q("Long-term beta blocker after ACS is particularly important with:", "Reduced EF, HF, angina or arrhythmia", ["Normal EF and no symptoms", "Asthma", "Bradycardia"], "BBs help most when the heart is weak, still ischemic or irritable. (Slide 80)")],
        [q("After an anterior STEMI a diabetic patient has EF 35%. Which drugs belong in his plan?", "DAPT, high-intensity statin, BB and ACEi or ARB", ["Aspirin only", "Warfarin and a statin", "Statin only"], "Low EF, diabetes and anterior STEMI all call for BB and ACEi or ARB on top of DAPT and statin. (Slide 80)"),
          q("A post-MI patient in sinus rhythm with no LV thrombus asks about a blood thinner like apixaban. Answer?", "Not needed; anticoagulate only for AF or LV thrombus", ["Yes, everyone needs it", "Yes, for 12 months", "Yes, instead of aspirin"], "Routine anticoagulation is not given after MI. (Slide 81)")])
    ]),
  ];
})();
