/* Cardio Part 3, Cardiac Surgery (Gardner, "Intro to Cardiac Surgery", 59 slides, 2026-11-16). This is the official
   Cardiovascular Surgery objective block (9 objectives); it is taught the afternoon after the Cardio 2 B exam, so it
   belongs to Cardio Part 3, not Part 2. Sections follow the objectives in order, after one opening section on the
   deck's history and list of operations (slides 3 to 11).
   Read from slide pictures: 18 (SYNTAX score vs 4-year mortality curve), 20 (coronary anatomy), 24 (CPB machine parts),
   29 (graft configurations), 30 (conduit harvest sites). Slides 25 and 28 were videos of the bypass circuit (not saved).
   Speaker notes on slides 55 to 57 give the answers to the three post-op ICU cases. Slide 19 says CABG is favored for
   three-vessel disease with SYNTAX >= 23 and for left main "except for patients with Syntax Score < 22"; both are
   taught as written. */
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


  window.CARDIAC_SURGERY_OBJECTIVES = [

    S("01-history-operations", "1. Cardiac surgery history and the operations", "Slides 3 to 11: from \"a wound in the heart is mortal\" to the bypass machine, and the list of cardiac operations.", [
      C("From mortal wound to bypass machine",
        tbl(["When", "Who", "What happened"], [
          ["Ancient Egypt", "", "The heart was thought to be the <strong>seat of the intellect</strong>"],
          ["b. 460 BC", "<strong>Hippocrates</strong>", "\"A wound in the heart is mortal\""],
          ["1880s", "<strong>Theodor Billroth</strong>", "A surgeon who wants his colleagues' respect would never attempt to suture the heart"],
          ["1909", "", "109 reported cases of suturing heart wounds, <strong>60% mortality</strong>"],
          ["1923", "<strong>Elliott Cutler</strong>", "Opened a <strong>mitral stenosis</strong> in an 11-year-old with a knife through the heart wall"],
          ["1938", "<strong>Robert Gross</strong>", "Closed a <strong>PDA</strong> in a 7-year-old"],
          ["1954", "<strong>Lillehei</strong>", "Repaired congenital <strong>ASDs and VSDs</strong> using a <strong>parent as the bypass machine</strong> (cross-circulation): 45 cases, no donor deaths, 29 of 45 survived"],
          ["1955", "<strong>Lillehei and DeWall</strong>", "Got the air bubbles out of the oxygenator: the <strong>modern cardiopulmonary bypass machine</strong> was born"]]) +
        "<p><strong>Cardiac operations (slide 11):</strong> transplant, <strong>CABG</strong>, valve repair or replacement, cardiac aneurysm repair, repair of ASD or VSD, closure of PDA, repair of trauma, pacemaker placement.</p>",
        ["cs-history", "cs-operations"],
        [q("Who said \"a wound in the heart is mortal\"?", "Hippocrates", ["Billroth", "Lillehei", "Gross"], "Hippocrates believed heart wounds were always fatal, which kept surgeons away for centuries. (Slide 4)"),
          q("Which surgeon in the 1880s said a respected surgeon would never suture the heart?", "Theodor Billroth", ["Robert Gross", "Elliott Cutler", "C. Walton Lillehei"], "Billroth famously said no respected surgeon would suture the heart. (Slide 5)"),
          q("What was the mortality of the 109 heart-wound suturing cases reported by 1909?", "60%", ["6%", "100%", "10%"], "Early heart-wound repairs still had 60% mortality by 1909. (Slide 6)"),
          q("What did Robert Gross do in 1938?", "Closed a PDA in a 7-year-old", ["Opened a mitral stenosis", "Built the bypass machine", "Did the first heart transplant"], "Gross closed a PDA in a 7-year-old in 1938, an early cardiac operation. (Slide 8)"),
          q("In 1954 Lillehei repaired ASDs and VSDs using what as the bypass machine?", "One of the patient's parents (cross-circulation)", ["A modern oxygenator", "An ice bath", "A roller pump with no oxygenator"], "Before machines, Lillehei used a parent's circulation as the 'bypass' (cross-circulation). (Slide 9)"),
          q("What problem did Lillehei and DeWall solve in 1955 to create the modern bypass machine?", "Getting air bubbles out of the oxygenator", ["Making cardioplegia", "Harvesting the IMA", "Sterilizing the circuit"], "Removing air bubbles from the oxygenator made the modern bypass machine safe. (Slide 10)"),
          q("Who opened a mitral stenosis with a knife through the heart wall in 1923?", "Elliott Cutler", ["Robert Gross", "Billroth", "DeWall"], "Cutler opened a stenotic mitral valve with a knife through the heart wall in 1923. (Slide 7)"),
          q("The ancient Egyptians believed the heart was the seat of:", "The intellect", ["The soul only after death", "Digestion", "Breathing"], "Ancient Egyptians thought the heart held the intellect. (Slide 3)"),
          q("Which is on the slide's list of cardiac operations?", "Closure of a patent ductus arteriosus", ["Carotid endarterectomy", "Femoral-popliteal bypass", "AAA repair"], "PDA closure is one of the listed cardiac operations. (Slide 11)")],
        [q("A classmate says cross-circulation bypass used a pump. What did Lillehei actually use in 1954?", "A parent of the child, connected as the bypass machine", ["A bubble oxygenator", "Hypothermia only", "No bypass at all"], "Slide 9: 45 cases, no donor deaths, 29/45 survived."),
          q("Which surgery is NOT on the deck's list of cardiac operations?", "Carotid endarterectomy", ["Valve repair or replacement", "Transplant", "Pacemaker placement"], "Slide 11; carotid surgery is vascular surgery.")])
    ]),

    S("02-three-interventions", "2. The three invasive interventions and when to go invasive", "Objective 1 (slides 12 to 15): fibrinolysis, PCI with DES, CABG; when medical management fails; and risk stratification tools.", [
      C("Three interventions and the decision to go invasive",
        hy("The <strong>three invasive interventions for CAD</strong>:<br>1. <strong>Fibrinolysis with tPA</strong><br>2. <strong>PCI</strong> with a <strong>drug-eluting stent</strong><br>3. <strong>CABG</strong>") +
        "<p><strong>To be or not to be invasive?</strong> Go invasive when:</p>" +
        ul(["<strong>Medical management fails</strong>", "The patient has an <strong>acute event</strong>"]) +
        "<p>It always depends on the <strong>risk/benefit ratio</strong>. Knowing medical therapy has \"failed\" means predicting the future: weighing the risk of staying on medicine against the risk of surgery. That is population statistics: <strong>risk stratification</strong>.</p>" +
        tbl(["Risk tool (slide 15)", "What it predicts"], [
          ["<strong>STS</strong>", "<strong>Short-term</strong> surgical risk"],
          ["<strong>ASCERT</strong>", "<strong>Long-term survival</strong> probability; age over 65, isolated CABG"],
          ["<strong>EuroSCORE</strong>", "1995 in-hospital mortality"],
          ["<strong>Ambler</strong>", "Valve surgery with or without CABG (Great Britain and Ireland)"],
          ["APACHE I to IV", "ICU illness severity"],
          ["CHA2DS2-VASc, CHADS2", "Stroke risk in AF"]]),
        ["cs-three-interventions", "cs-when-invasive", "cs-risk-tools"],
        [q("What are the three invasive interventions for CAD?", "Fibrinolysis with tPA, PCI with drug-eluting stent, CABG", ["Statin, aspirin, beta blocker", "Angiogram, stress test, echo", "Valve replacement, pacemaker, transplant"], "The three invasive CAD options are tPA, PCI with a DES, and CABG. (Slide 12)"),
          q("Which fibrinolytic is named on the interventions slide?", "tPA", ["Heparin", "Aspirin", "Clopidogrel"], "tPA (tissue plasminogen activator) is the fibrinolytic named. (Slide 12)"),
          q("Which stent type is named with PCI on the interventions slide?", "Drug-eluting stent", ["Bare-metal stent", "Covered stent", "No stent"], "PCI is paired with a drug-eluting stent. (Slide 12)"),
          q("The two situations that push CAD treatment to invasive are:", "Medical management fails or the patient has an acute event", ["Age over 65 or LDL over 190", "Any angina or any risk factor", "Patient preference or insurance approval"], "Go invasive when medicines fail or an acute event happens. (Slide 13)"),
          q("The decision to go invasive always depends on:", "The risk/benefit ratio", ["The surgeon's schedule", "The LDL level alone", "The patient's age alone"], "Every invasive decision weighs risk against benefit. (Slide 13)"),
          q("Which risk tool predicts SHORT-term surgical risk?", "STS", ["ASCERT", "CHA2DS2-VASc", "Ambler"], "The STS score predicts short-term operative risk. (Slide 15)"),
          q("Which risk tool predicts LONG-term survival after isolated CABG in patients over 65?", "ASCERT", ["STS", "EuroSCORE", "APACHE"], "ASCERT predicts long-term survival after isolated CABG in patients over 65. (Slide 15)"),
          q("The Ambler risk model is for:", "Valve surgery with or without CABG", ["Isolated PCI", "AF stroke risk", "ICU sepsis"], "Ambler predicts risk for valve surgery with or without CABG. (Slide 15)"),
          q("Knowing when medical management has failed depends on population statistics, also called:", "Risk stratification", ["Triage", "Pretest sampling", "Shared decision making"], "Using population data to judge failure is risk stratification. (Slide 14)")],
        [q("A 70-year-old asks for his chance of surviving the next several years after an isolated CABG. Which calculator fits?", "ASCERT long-term survival calculator", ["STS short-term", "CHADS2", "Ambler"], "ASCERT predicts long-term survival after isolated CABG. (Slide 15)"),
          q("A patient's stable angina is controlled on three medications with no limits on activity. Is invasive therapy indicated now?", "No: medical management has not failed and there is no acute event", ["Yes, all angina needs CABG", "Yes, fibrinolysis today", "Yes, PCI is always first"], "His angina is controlled and there is no acute event, so stay medical. (Slide 13)"),
          q("A patient with a STEMI arrives at a hospital without a cath lab, 3 hours from one. Which of the three invasive interventions can be given there?", "Fibrinolysis with tPA", ["CABG", "PCI with DES", "None"], "Slide 12: fibrinolysis is one of the three interventions.")])
    ]),

    S("03-syntax", "3. SYNTAX scores and PCI vs CABG", "Objective 2 (slides 16 to 19): what SYNTAX I and II are based on, the mortality curve, and when PCI or CABG is favored.", [
      C("SYNTAX I and SYNTAX II",
        tbl(["SYNTAX I: the lesions (anatomy)", "SYNTAX II: adds the patient"], [
          ["<strong>Size</strong> and length of lesions", "<strong>Older age</strong> → higher score"],
          ["<strong>Complexity</strong>, tortuosity", "<strong>Lower renal function</strong> → higher"],
          ["<strong>Location</strong> of lesions", "<strong>Lower LVEF</strong> → higher"],
          ["<strong>Total occlusion</strong> or not", "<strong>Left main disease</strong> → higher"],
          ["<strong>Calcification</strong> or thrombus", "Diabetes; current smoker"],
          ["<strong>Diffuse</strong> or localized", "<strong>COPD</strong> → higher; <strong>PAD</strong> → higher"]]) +
        mn("SYNTAX I is all about the <strong>plaque</strong>: <strong>\"Size, Complexity, Location, Occlusion, Calcium, Diffuse\"</strong>. SYNTAX II = SYNTAX I + the <strong>patient</strong> (age, kidneys, EF, left main, DM, smoking, COPD, PAD).") +
        "<p><strong>Slide 18 curve:</strong> 4-year mortality climbs steeply with the SYNTAX total: about 0.6% at 0 points, 3% around 20 to 25, 15% around 40, 31.5% around 50, 58% around 60, and near 100% above 80. Higher score = more complex disease = worse outcome.</p>",
        ["cs-syntax-1", "cs-syntax-2", "cs-syntax-curve"],
        [q("SYNTAX I scoring is based on:", "The coronary lesions: size, complexity, location, occlusion, calcification, diffuse vs localized", ["Age, EF and kidney function only", "LDL and blood pressure", "Valve gradients"], "SYNTAX I scores the lesions themselves: size, complexity, location, calcification and more. (Slide 16)"),
          q("Which factor is part of SYNTAX I?", "Calcification or thrombus in the lesion", ["Current smoker", "COPD", "Renal function"], "Calcification or thrombus in a lesion is scored in SYNTAX I. (Slide 16)"),
          q("Which factor is added in SYNTAX II?", "Age", ["Lesion tortuosity", "Total occlusion", "Lesion length"], "SYNTAX II adds patient factors like age. (Slide 17)"),
          q("In SYNTAX II, lower renal function makes the score:", "Higher", ["Lower", "Unchanged", "Invalid"], "Worse kidney function raises the SYNTAX II score. (Slide 17)"),
          q("In SYNTAX II, a lower LVEF makes the score:", "Higher", ["Lower", "Unchanged", "Zero"], "Lower EF raises the SYNTAX II score. (Slide 17)"),
          q("Which comorbidities raise the SYNTAX II score?", "COPD and PAD", ["Hypothyroidism and gout", "Asthma and migraine", "GERD and osteoarthritis"], "COPD and PAD raise the SYNTAX II score. (Slide 17)"),
          q("What does the SYNTAX score vs mortality curve show?", "Mortality rises steeply as the SYNTAX score rises", ["Mortality falls as the score rises", "No relationship", "Mortality is flat after 20 points"], "Higher SYNTAX scores mean steeply higher mortality. (Slide 18)"),
          q("The complexity part of SYNTAX I includes:", "Tortuosity of the lesion", ["Diabetes", "Smoking", "Ejection fraction"], "Tortuosity makes a lesion more complex in SYNTAX I. (Slide 16)")],
        [q("Two patients have the same coronary anatomy. One is 82 with CKD and an EF of 30%; the other is 50 with normal kidneys and EF. Which score would differ between them?", "SYNTAX II", ["SYNTAX I", "Neither", "CHA2DS2-VASc only"], "SYNTAX I is anatomy only; SYNTAX II adds age, kidney function and EF."),
          q("An angiogram shows long, calcified, tortuous, diffuse lesions with a total occlusion. What happens to the SYNTAX I score?", "It is high", ["It is low", "It is zero", "It cannot be calculated"], "Every listed lesion feature raises SYNTAX I.")]),
      C("PCI or CABG when medical therapy fails",
        tbl(["Disease", "Favored"], [
          ["<strong>1- or 2-vessel</strong> disease <strong>not involving the proximal LAD</strong>", "<strong>PCI</strong>"],
          ["<strong>3-vessel</strong> disease with <strong>SYNTAX ≥23</strong>", "<strong>CABG</strong>"],
          ["3-vessel disease with a lower SYNTAX score", "PCI is a reasonable alternative"],
          ["<strong>Left main</strong> CAD", "<strong>CABG</strong>, except when <strong>SYNTAX is under 22</strong>"]]) +
        hy("Simple disease → <strong>PCI</strong>. Complex disease (3 vessels with high SYNTAX, left main) → <strong>CABG</strong>. A low SYNTAX score makes PCI reasonable even for 3-vessel or left main disease."),
        ["cs-pci-vs-cabg"],
        [q("PCI is favored over CABG in:", "1- or 2-vessel disease not involving the proximal LAD", ["3-vessel disease with SYNTAX 35", "Left main disease with SYNTAX 40", "Any diabetic with 3-vessel disease"], "Simple 1-2 vessel disease sparing the proximal LAD suits PCI. (Slide 19)"),
          q("CABG is favored for 3-vessel disease when the SYNTAX score is:", "23 or higher", ["Under 10", "Exactly 0", "Under 22"], "3-vessel disease with SYNTAX 23 or more does better with CABG. (Slide 19)"),
          q("For left main CAD, CABG is favored except when the SYNTAX score is:", "Under 22", ["Over 33", "Over 50", "Any value"], "Left main favors CABG unless the SYNTAX score is low (under 22). (Slide 19)"),
          q("In 3-vessel disease with a low SYNTAX score, PCI is:", "A reasonable alternative", ["Contraindicated", "Never considered", "Preferred over everything"], "Low SYNTAX 3-vessel disease can reasonably get PCI. (Slide 19)"),
          q("Which anatomic detail pushes 2-vessel disease toward CABG?", "Proximal LAD involvement", ["RCA involvement", "Diagonal branch involvement", "Distal circumflex involvement"], "Proximal LAD involvement pushes 2-vessel disease to CABG. (Slides 19 and 21)")],
        [q("A patient has failed medical therapy with 2-vessel disease of the RCA and circumflex; the LAD is normal. Favored intervention?", "PCI", ["CABG", "Fibrinolysis", "Heart transplant"], "2-vessel disease without the proximal LAD favors PCI. (Slide 19)"),
          q("A patient has 3-vessel disease and a SYNTAX score of 34 after failed medical therapy. Favored intervention?", "CABG", ["PCI", "Fibrinolysis", "No intervention"], "3-vessel disease with SYNTAX 34 favors CABG. (Slide 19)"),
          q("A patient has left main disease with a SYNTAX score of 15. What do the slides say?", "PCI is a reasonable alternative because the SYNTAX score is low", ["CABG is mandatory", "Fibrinolysis is preferred", "Only medical therapy is allowed"], "Slide 19: CABG favored for left main except with SYNTAX under 22.")])
    ]),

    S("04-cabg-indications", "4. Elective vs emergent CABG", "Objective 3 (slides 20 to 22): coronary anatomy, elective CABG indications, and emergent or urgent CABG indications.", [
      C("Who needs CABG, and how soon",
        "<p><strong>Anatomy (slide 20):</strong> the <strong>left coronary artery</strong> splits into the <strong>LAD</strong> (with diagonal branches) and the <strong>circumflex</strong> (with left marginal branches); the <strong>right coronary artery</strong> gives the right marginal and usually the <strong>posterior descending</strong> artery.</p>" +
        tbl(["Elective CABG indications", "Emergent / urgent CABG indications"], [
          ["Significant stenosis <strong>over 70%</strong>", "<strong>Acute ischemia with failed PCI or fibrinolysis</strong>"],
          ["<strong>Complex 3-vessel</strong> CAD", "<strong>Mechanical cardiac failure</strong>: <strong>ventricular or septal rupture</strong>, <strong>acute valvular injury</strong>"],
          ["<strong>Left main occlusion over 50%</strong>", "<strong>Recurrent ischemia</strong>"],
          ["<strong>2-vessel</strong> disease with <strong>proximal LAD</strong>", ""],
          ["Survivors of <strong>sudden cardiac event</strong> with <strong>ischemia-mediated VT</strong>", ""]]) +
        mn("Two different thresholds: <strong>70%</strong> for any vessel, but only <strong>50%</strong> for the <strong>left main</strong> (it feeds most of the LV)."),
        ["cs-coronary-anatomy", "cs-elective-cabg", "cs-emergent-cabg"],
        [q("What degree of stenosis is a CABG indication on slide 21?", "Over 70%", ["Over 30%", "Over 50% in any vessel", "Over 95% only"], "Stenosis over 70% is a CABG indication. (Slide 21)"),
          q("Left main occlusion of more than what percent is a CABG indication?", "50%", ["70%", "90%", "20%"], "Left main over 50% is a CABG indication. (Slide 21)"),
          q("Two-vessel disease is a CABG indication when it involves:", "The proximal LAD", ["The distal RCA", "A diagonal only", "The obtuse marginal only"], "2-vessel disease with proximal LAD involvement is a CABG indication. (Slide 21)"),
          q("Which sudden cardiac event survivors are CABG candidates?", "Those with ischemia-mediated VT", ["Those with Brugada syndrome", "Those with long QT", "Those with WPW"], "Survivors of ischemia-driven VT benefit from revascularization. (Slide 21)"),
          q("Which is an EMERGENT CABG indication?", "Acute ischemia after failed PCI or fibrinolysis", ["Stable 2-vessel disease", "LDL over 190", "Asymptomatic 60% stenosis"], "Ongoing ischemia after failed PCI or tPA needs emergent CABG. (Slide 22)"),
          q("Which mechanical failures need emergent CABG?", "Ventricular or septal rupture and acute valvular injury", ["Mild MR", "First-degree AV block", "Stable LV aneurysm found incidentally"], "Septal/ventricular rupture and acute valve injury are mechanical failures needing emergent surgery. (Slide 22)"),
          q("Recurrent ischemia is an indication for:", "Emergent or urgent CABG", ["Elective CABG in 6 months", "Calcium scoring", "Observation only"], "Recurrent ischemia is an emergent/urgent CABG indication. (Slide 22)"),
          q("The LAD and circumflex come from which artery?", "Left (main) coronary artery", ["Right coronary artery", "Posterior descending artery", "Aortic arch directly"], "The left main splits into the LAD and circumflex. (Slide 20)"),
          q("Which artery usually gives off the posterior descending artery?", "Right coronary artery", ["LAD", "Diagonal", "Left internal mammary"], "In most people (right dominance) the RCA gives off the PDA. (Slide 20)")],
        [q("A patient with an anterior STEMI had a failed PCI and still has chest pain and ST elevation. What does he need?", "Emergent CABG", ["Elective CABG in 3 months", "Discharge on aspirin", "Calcium score"], "Slide 22: acute ischemia with failed PCI."),
          q("Five days after an MI a patient develops a new harsh holosystolic murmur and shock; echo shows a ventricular septal rupture. Plan?", "Emergent surgery (mechanical cardiac failure)", ["Elective CABG next month", "Start a statin and observe", "Fibrinolysis"], "Septal rupture is mechanical failure, which needs emergent surgery. (Slide 22)"),
          q("A stable patient's angiogram shows a 60% left main stenosis. Is this a CABG indication?", "Yes: left main over 50%", ["No: only over 70% counts", "No: left main is never bypassed", "Only if he has VT"], "Left main over 50% is a CABG indication. (Slide 21)"),
          q("A stable patient has 80% stenoses of the proximal LAD and the circumflex. CABG indication?", "Yes: 2-vessel disease with proximal LAD involvement", ["No: needs 3 vessels", "No: only left main counts", "Only if emergent"], "2-vessel disease involving the proximal LAD is a CABG indication. (Slide 21)")])
    ]),

    S("05-cpb", "5. Cardiopulmonary bypass", "Objective 4 (slides 23 to 29): the cardiac team, the bypass machine's parts, how CPB works, flow and pressure targets, and why the patient is cooled.", [
      C("The team and the machine",
        "<p><strong>Cardiac team:</strong> surgeon, anesthesia, cardiology, PA, <strong>perfusionist</strong> (runs the bypass machine), circulators, surgical techs, echo techs, ICU and floor nursing, RT, office staff.</p>" +
        tbl(["CPB machine part (slide 24)", "Job"], [
          ["<strong>Reservoir</strong>", "Collects the venous blood drained from the patient"],
          ["<strong>Oxygenator</strong>", "Adds oxygen (does the lungs' job)"],
          ["<strong>Arterial pump</strong>", "Pumps blood back to the patient (does the heart's job)"],
          ["<strong>Cardioplegia pump</strong>", "Delivers cardioplegia to stop the heart"],
          ["<strong>Vent</strong>", "Drains blood out of the heart so it stays empty"],
          ["<strong>Sucker</strong>", "Returns blood from the surgical field"],
          ["Display", "Times, pressures, alarms"]]),
        ["cs-team", "cs-machine-parts"],
        [q("Which team member runs the bypass machine?", "Perfusionist", ["Circulator", "Echo tech", "Respiratory therapist"], "The perfusionist runs the bypass machine. (Slide 23)"),
          q("Which CPB part adds oxygen to the blood?", "Oxygenator", ["Reservoir", "Vent", "Sucker"], "The oxygenator does the lungs' job. (Slide 24)"),
          q("Which CPB part pumps the blood back into the patient?", "Arterial pump", ["Vent", "Reservoir", "Cardioplegia pump"], "The arterial pump does the heart's job, sending blood back to the patient. (Slide 24)"),
          q("Which CPB part delivers the solution that stops the heart?", "Cardioplegia pump", ["Arterial pump", "Sucker", "Oxygenator"], "The cardioplegia pump delivers the solution that arrests the heart. (Slide 24)"),
          q("Which CPB part collects venous blood drained from the patient?", "Reservoir", ["Oxygenator", "Arterial pump", "Display"], "The reservoir collects drained venous blood. (Slide 24)"),
          q("What does the sucker do?", "Returns blood from the surgical field to the circuit", ["Stops the heart", "Cools the blood", "Measures pressure"], "The sucker returns blood from the surgical field to the circuit. (Slide 24)")],
        [q("During CABG the field fills with blood. Which part of the bypass system returns it to the circuit?", "The sucker", ["The vent", "The arterial pump", "The cardioplegia pump"], "The sucker returns field blood to the circuit. (Slide 24)"),
          q("The bypass machine replaces which two organs during surgery?", "Heart (arterial pump) and lungs (oxygenator)", ["Kidneys and liver", "Heart and kidneys", "Lungs and brain"], "The arterial pump replaces the heart and the oxygenator replaces the lungs. (Slides 24 and 26)")]),
      C("How CPB works and why we cool",
        chain(["The blood is <strong>anticoagulated</strong>", "All blood is drained out, usually from the <strong>right atrium</strong>", "It is <strong>oxygenated, filtered and temperature controlled</strong>", "It is returned, usually into the <strong>aorta</strong>, but the flow is <strong>non-pulsatile</strong>", "The heart is stopped with <strong>cold cardioplegia</strong> (high potassium)", "At the end, cardioplegia is washed out, the heart fills, restarts, and the patient comes off bypass"]) +
        tbl(["Target", "Value"], [["Flow", "<strong>2.2 to 2.4 L/min</strong>"], ["Pressure", "<strong>65 to 100 mmHg</strong>"]]) +
        hy("<strong>Why make the patient hypothermic?</strong> Oxygen consumption falls about <strong>50% for every 10°C</strong> drop. At 37°C the flow needed is about <strong>2.4 L/min/m²</strong>; at <strong>18°C only 1 L/min/m²</strong>. Cooling protects the organs while the flow is artificial."),
        ["cs-cpb-steps", "cs-cpb-targets", "cs-hypothermia"],
        [q("CPB is a form of:", "Extracorporeal circulation", ["Intracardiac pacing", "Percutaneous intervention", "Fibrinolysis"], "CPB circulates blood outside the body (extracorporeal). (Slide 26)"),
          q("Before going on bypass, the blood must be:", "Anticoagulated", ["Cooled to 0°C", "Diluted with potassium", "Filtered of platelets"], "Blood clots on the circuit, so the patient must be anticoagulated (heparin). (Slide 26)"),
          q("From where is blood usually drained for CPB?", "The right atrium", ["The left ventricle", "The pulmonary artery", "The femoral vein only"], "Venous blood is usually drained from the right atrium. (Slide 26)"),
          q("Where is blood usually returned on CPB?", "The aorta", ["The right atrium", "The pulmonary vein", "The IVC"], "Oxygenated blood returns through the aorta. (Slide 26)"),
          q("What is unusual about the flow on CPB?", "It is non-pulsatile", ["It is twice normal", "It goes backwards", "It has no oxygen"], "The pump gives steady, non-pulsatile flow. (Slide 26)"),
          q("Target flow on CPB:", "2.2 to 2.4 L/min", ["5 to 6 L/min", "0.5 L/min", "10 L/min"], "CPB flow target is 2.2 to 2.4 L/min. (Slide 26)"),
          q("Target pressure on CPB:", "65 to 100 mmHg", ["120 to 140 mmHg", "20 to 30 mmHg", "Over 160 mmHg"], "CPB pressure target is 65 to 100 mmHg. (Slide 26)"),
          q("How much does oxygen consumption fall for every 10°C drop?", "About 50%", ["About 5%", "About 90%", "It rises"], "Each 10°C of cooling cuts O2 use about 50%. (Slide 27)"),
          q("At 18°C, what flow is required?", "About 1 L/min/m²", ["About 2.4 L/min/m²", "About 5 L/min/m²", "No flow at all"], "At 18°C, O2 needs are low enough for about 1 L/min/m². (Slide 27)"),
          q("Why is the patient made hypothermic on bypass?", "It lowers oxygen consumption so less flow is needed", ["It speeds up clotting", "It raises blood pressure", "It removes air bubbles"], "Cooling cuts O2 consumption, so organs tolerate lower flow. (Slide 27)"),
          q("Normothermia flow requirement on bypass:", "About 2.4 L/min/m² at 37°C", ["About 1 L/min/m² at 37°C", "About 10 L/min/m²", "About 0.2 L/min/m²"], "At normal temperature, about 2.4 L/min/m² is needed. (Slide 27)")],
        [q("A student asks why the patient's organs survive with only about 2.2 L/min of flow on bypass. Best answer?", "Hypothermia cuts oxygen use about 50% per 10°C, so less flow is needed", ["The heart keeps beating", "The kidneys shut off", "Bypass adds extra oxygen to tissues directly"], "Hypothermia halves O2 use per 10°C, so less flow is enough. (Slide 27)"),
          q("At the end of the CABG, what is done before coming off bypass?", "Cardioplegia is removed, the heart fills with blood and is restarted", ["More potassium is given", "The blood is cooled further", "Heparin is increased"], "Washing out cardioplegia and refilling the heart lets it restart. (Slide 26)")])
    ]),

    S("06-cardioplegia", "6. Cardioplegia: the primary electrolyte", "Objective 5 (slides 26 to 27): cold, potassium-rich cardioplegia and retrograde delivery.", [
      C("Cardioplegia",
        hy("The primary electrolyte in cardioplegia is <strong>POTASSIUM</strong>.") +
        ul(["Cardioplegia is a <strong>potassium-rich</strong> solution, usually mixed with the patient's own (<strong>autologous</strong>) blood.",
          "It is given <strong>cold</strong>; it stops the heart (<strong>global cardiac arrest</strong>) so the surgeon can sew on a still, bloodless field.",
          "<strong>Retrograde</strong> cardioplegia (given backward through the coronary sinus) spreads more evenly in <strong>diffuse CAD</strong> and does <strong>not need a competent aortic valve</strong> (speaker notes)."]) +
        chain(["High potassium outside the cells", "Myocytes depolarize and stay depolarized (standard teaching)", "The heart stops in diastole", "Cold slows metabolism and protects the stopped muscle"]),
        ["cs-cardioplegia-k", "cs-retrograde"],
        [q("What is the primary electrolyte in cardioplegia?", "Potassium", ["Sodium", "Calcium", "Magnesium"], "High potassium depolarizes the myocytes and arrests the heart in diastole. (Slides 26 and 27)"),
          q("Cardioplegia is usually mixed with:", "The patient's own (autologous) blood", ["Donor plasma", "Albumin only", "Saline only"], "Cardioplegia is mixed with the patient's own blood. (Slide 27)"),
          q("Cardioplegia is given at what temperature?", "Cold", ["Body temperature", "Warmed to 40°C", "Room temperature only"], "Cold cardioplegia lowers the heart's O2 demand. (Slide 26)"),
          q("What does cardioplegia do?", "Stops the heart", ["Speeds up the heart", "Dissolves clots", "Raises blood pressure"], "Cardioplegia stops the heart so surgeons can work on a still field. (Slides 26 and 27)"),
          q("An advantage of retrograde cardioplegia is:", "More uniform distribution in diffuse CAD and no need for a competent aortic valve", ["It works only with a normal aortic valve", "It needs no potassium", "It is warm"], "Retrograde delivery reaches past blockages and doesn't need a competent aortic valve."),
          q("Which statement about cardioplegia is true?", "It is a potassium-rich solution", ["It is a calcium-rich solution", "It contains no electrolytes", "It is mostly sodium bicarbonate"], "Cardioplegia is potassium-rich. (Slide 27)")],
        [q("A patient with severe aortic regurgitation is having CABG. Antegrade cardioplegia into the aortic root would leak into the LV. Which delivery helps?", "Retrograde cardioplegia", ["Warm calcium solution", "No cardioplegia", "Fibrinolysis"], "Slide 27 notes: retrograde does not depend on a competent aortic valve."),
          q("A student asks what electrolyte a perfusionist adds to arrest the heart. Answer?", "Potassium", ["Calcium", "Sodium", "Chloride"], "Potassium arrests the heart. (Slide 26)")])
    ]),

    S("07-conduits", "7. Conduits and patency", "Objective 6 (slides 29 to 35): arterial and vein conduits, harvest sites, saphenous vein failure rates, and internal thoracic artery patency.", [
      C("Conduits in order of patency",
        "<p>Harvest sites: <strong>internal mammary (thoracic) artery</strong> in the chest wall, <strong>radial artery</strong> in the forearm, <strong>saphenous vein</strong> in the leg. IMA = internal mammary artery = ITA = internal thoracic artery.</p>" +
        tbl(["Conduit", "Patency", "Notes"], [
          ["<strong>Left ITA (LIMA)</strong>", "<strong>95% at 5 years: the BEST</strong>", ""],
          ["<strong>Right ITA (RIMA)</strong>", "Under 90% at 10 years", "For 2-vessel arterial bypass, <strong>LITA + RITA beats LITA + radial</strong>"],
          ["<strong>Radial artery</strong>", "", "Arterial conduit option"],
          ["<strong>Saphenous vein graft (SVG)</strong>", "Under 90% at 1 year is common", "<strong>Most common</strong> conduit but <strong>highest failure</strong>"]]) +
        tbl(["Saphenous vein graft failure", ""], [
          ["High failure rate", "<strong>10 to 25% in 12 to 18 months</strong>"],
          ["Early occlusion (within 30 days)", "<strong>10%</strong> of SVGs"],
          ["Late occlusion, years 1 to 6", "<strong>2% per year</strong>"],
          ["Late occlusion, year 7 on", "<strong>4 to 5% per year</strong>"],
          ["Depends on", "Runoff and size of the native artery"]]) +
        hy("Order of patency: <strong>LITA > RITA > (radial) > saphenous vein</strong>. Try to place <strong>at least one arterial graft</strong> in every patient."),
        ["cs-harvest-sites", "cs-ita", "cs-svg"],
        [q("Which conduit has the best patency?", "Left internal thoracic (mammary) artery", ["Saphenous vein", "Right internal thoracic artery", "Radial artery"], "Slide 35: LITA 95% at 5 years (best)."),
          q("LITA patency at 5 years:", "95%", ["50%", "75%", "100%"], "LITA is about 95% patent at 5 years. (Slide 35)"),
          q("RITA patency on the slide:", "Under 90% at 10 years", ["95% at 5 years", "10% at 1 year", "50% at 1 year"], "RITA is a bit less durable, under 90% at 10 years. (Slide 35)"),
          q("Which is the most common CABG conduit?", "Saphenous vein graft", ["LITA", "Radial artery", "Gastroepiploic artery"], "Saphenous vein is the most commonly used conduit. (Slide 31)"),
          q("Saphenous vein graft failure rate in 12 to 18 months:", "10 to 25%", ["1%", "50 to 75%", "90%"], "10 to 25% of vein grafts fail within 12 to 18 months. (Slide 31)"),
          q("What percent of SVGs occlude early (within 30 days)?", "10%", ["1%", "50%", "25%"], "About 10% of vein grafts occlude in the first 30 days. (Slide 31)"),
          q("SVG late occlusion in years 1 to 6:", "2% per year", ["10% per year", "0.1% per year", "4 to 5% per year"], "Vein grafts close about 2% a year in years 1 to 6. (Slide 31)"),
          q("SVG late occlusion from year 7 on:", "4 to 5% per year", ["2% per year", "20% per year", "None"], "From year 7 on, vein graft failure speeds up to 4-5% a year. (Slide 31)"),
          q("For two-vessel arterial bypass, which combination is better?", "Left and right ITA", ["LITA and radial artery", "Two saphenous veins", "Radial and saphenous"], "Two arterial (ITA) grafts outlast an artery plus vein. (Slide 35)"),
          q("IMA and ITA are:", "Two names for the same artery (internal mammary = internal thoracic)", ["Different arteries in the arm", "Veins", "Coronary branches"], "Internal mammary and internal thoracic are the same artery. (Slide 35)"),
          q("What does saphenous vein graft success depend on?", "Runoff and size of the native artery", ["The patient's height", "The surgeon's hand dominance", "Potassium in cardioplegia"], "Vein grafts do best with good runoff and a large native artery. (Slide 31)"),
          q("How many arterial grafts should be placed per patient if possible?", "At least one", ["None", "Only veins", "Exactly four"], "At least one arterial graft (usually LITA to LAD) should be used. (Slide 34)")],
        [q("Rank these conduits from best to worst patency: saphenous vein, LITA, RITA.", "LITA, RITA, saphenous vein", ["Saphenous vein, RITA, LITA", "RITA, LITA, saphenous vein", "All equal"], "Arterial grafts last longer than veins: LITA, then RITA, then vein. (Slides 31 and 35)"),
          q("Eight years after CABG, a patient has angina again. Which graft most likely failed?", "A saphenous vein graft", ["The LITA to the LAD", "The pericardium", "The sternum"], "SVGs have high failure and late occlusion rises to 4 to 5%/year after year 7."),
          q("A surgeon is choosing a conduit for the LAD, the most important target. Which conduit?", "Left internal thoracic artery", ["Saphenous vein", "Cephalic vein", "Radial vein"], "LITA has the best patency.")])
    ]),

    S("08-outcomes", "8. Outcomes and risks for a poor result", "Objective 7 (slides 37 to 42): negative endpoints, predictors of post-op MI, revascularization or death, mortality numbers, predictors of mortality, and risk reduction after CABG.", [
      C("Who does badly after CABG",
        "<p><strong>Negative endpoints:</strong> need for revascularization, post-op MI, death.</p>" +
        tbl(["Predicts post-op MI, revascularization or death", "Predicts mortality"], [
          ["<strong>Emergency</strong> surgery", "<strong>More than moderate lung disease</strong>"],
          ["<strong>Shock</strong> or hemodynamic instability", "<strong>Pulmonary hypertension</strong>"],
          ["<strong>Reoperation</strong>", "<strong>Perioperative MI</strong>"],
          ["<strong>Renal dialysis</strong>", "<strong>Creatinine 1.5 to 2.5</strong>; <strong>acute kidney injury</strong>"],
          ["<strong>Insulin-dependent diabetes</strong>", "Atherosclerosis elsewhere: carotids, cerebrovascular, aorta"],
          ["<strong>Smoking</strong>", "Cardiac risk factors: age, hyperlipidemia, DM, HTN, smoking"],
          ["<strong>Low pre-op hemoglobin</strong>", ""]]) +
        tbl(["Time after CABG", "Mortality"], [["30 days", "<strong>3.2%</strong>"], ["180 days", "6.4%"], ["1 year", "8.1%"], ["2 years", "11.3%"], ["3 years", "23.3%"]]) +
        mn("Poor-outcome predictors: <strong>\"ESR DISH\"</strong>: <strong>E</strong>mergency, <strong>S</strong>hock, <strong>R</strong>eoperation, <strong>D</strong>ialysis, <strong>I</strong>nsulin-dependent DM, <strong>S</strong>moking, low <strong>H</strong>emoglobin.") +
        "<p><strong>After CABG, risk factor reduction makes a difference:</strong> stop smoking, control lipids, diabetes and hypertension, and take an <strong>antiplatelet (aspirin or clopidogrel)</strong>.</p>",
        ["cs-endpoints", "cs-predictors-poor", "cs-mortality", "cs-secondary-prev"],
        [q("Which three negative endpoints are used to judge CABG outcomes?", "Need for revascularization, post-op MI, death", ["Length of stay, cost, pain", "Wound infection, fever, ileus", "LDL, BP, A1c"], "Outcomes are judged by repeat revascularization, post-op MI and death. (Slide 37)"),
          q("Which is a predictor of post-op MI, revascularization or death after CABG?", "Emergency surgery", ["Elective surgery", "Normal hemoglobin", "Never smoking"], "Emergency surgery predicts a worse outcome. (Slide 38)"),
          q("Which type of diabetes is listed as a predictor of a poor CABG outcome?", "Insulin-dependent diabetes", ["Diet-controlled prediabetes", "Gestational diabetes", "Diabetes insipidus"], "Insulin-dependent diabetes predicts a poor outcome. (Slide 38)"),
          q("Which lab value before surgery predicts a poor outcome?", "Low pre-op hemoglobin", ["High HDL", "Low TSH", "High vitamin D"], "Low pre-op hemoglobin predicts a poor outcome. (Slide 38)"),
          q("30-day mortality after CABG on the slide:", "3.2%", ["0.1%", "23.3%", "11.3%"], "30-day mortality after CABG was 3.2%. (Slide 39)"),
          q("3-year mortality after CABG on the slide:", "23.3%", ["3.2%", "8.1%", "50%"], "3-year mortality after CABG was 23.3%. (Slide 39)"),
          q("1-year mortality after CABG on the slide:", "8.1%", ["3.2%", "23.3%", "1%"], "1-year mortality after CABG was 8.1%. (Slide 39)"),
          q("Which creatinine range is listed as a predictor of mortality?", "1.5 to 2.5 mg/dL", ["0.5 to 1.0 mg/dL", "Over 10 mg/dL only", "Under 0.5 mg/dL"], "Creatinine 1.5 to 2.5 predicts mortality. (Slide 40)"),
          q("Which lung finding predicts mortality after CABG?", "More than moderate lung disease or pulmonary hypertension", ["A remote childhood pneumonia", "Mild seasonal allergies", "Normal spirometry"], "Significant lung disease or pulmonary HTN predicts mortality. (Slide 40)"),
          q("Which antiplatelets are named for prevention after CABG?", "Aspirin or clopidogrel", ["Warfarin or heparin", "tPA or TNK", "Ticagrelor and prasugrel together"], "Aspirin or clopidogrel protects the grafts after CABG. (Slide 42)"),
          q("Which atherosclerotic sites are listed as predictors of mortality?", "Carotids, cerebrovascular, aorta", ["Renal veins", "Pulmonary veins", "Portal vein"], "Plaque in the carotids, brain or aorta predicts mortality. (Slide 40)"),
          q("Reoperation (redo CABG) is:", "A predictor of a poor outcome", ["Protective", "Unrelated to outcome", "Required for every patient"], "Redo CABG carries higher risk. (Slide 38)")],
        [q("Which CABG candidate has the highest risk of a poor outcome?", "An emergency redo CABG in a smoker on dialysis in shock", ["An elective first CABG in a nonsmoker with normal kidneys", "An elective CABG in a 55-year-old with diet-controlled DM", "A stable patient with normal hemoglobin"], "Emergency, redo, smoking, dialysis and shock stack risk factors."),
          q("A patient asks what he can do after his CABG to protect his grafts. Best answer from the slides?", "Stop smoking, control lipids, diabetes and BP, and take aspirin or clopidogrel", ["Nothing; the grafts last forever", "Stop all medicines", "Only rest for a year"], "Risk factor control plus antiplatelets protects the grafts. (Slide 42)"),
          q("A patient's creatinine is 2.1 before CABG. How does this affect risk?", "It is a predictor of mortality (creatinine 1.5 to 2.5)", ["It lowers risk", "It has no effect", "It only matters for valve surgery"], "Creatinine 2.1 is in the 1.5 to 2.5 range that predicts mortality. (Slide 40)")])
    ]),

    S("09-complications", "9. Complications after CABG", "Objective 8 (slides 43 to 50, 54): complications from the wound, the anesthesia, and the operation itself; cardiac, pulmonary and renal complications; and care after extubation.", [
      C("Where complications come from",
        tbl(["Source", "Causes"], [
          ["<strong>Wound / trauma</strong>", "Bleeding or thrombosis; <strong>sternotomy</strong>; <strong>devascularized sternum from using both ITAs</strong>"],
          ["<strong>Anesthesia</strong>", "Hypo- or hypervolemia; neurologic dysfunction (<strong>stroke</strong>)"],
          ["<strong>The operation itself</strong>", "Global cardiac arrest; hypothermia; <strong>non-pulsatile bypass</strong> and artificial perfusion; <strong>inflammatory response to CPB</strong>; reintroduction of fat and particulate matter; aortic clamping, unclamping and cannulation; bleeding or thrombosis"]]) +
        hy("Using <strong>both</strong> internal thoracic arteries removes much of the sternum's blood supply, raising the risk of <strong>sternal wound problems</strong>. That is the trade-off for better graft patency.") +
        "<p><strong>After extubation:</strong> incentive <strong>spirometry</strong>, <strong>ambulation</strong>, and <strong>antiplatelet therapy</strong>.</p>",
        ["cs-comp-sources", "cs-bilateral-ita", "cs-after-extubation"],
        [q("The three sources of post-CABG complications are:", "Wound/trauma, anesthesia, and the operation itself", ["Diet, exercise, sleep", "Age, sex, race", "Pre-op, intra-op, discharge paperwork"], "Complications come from the wound, anesthesia and the operation itself. (Slide 43)"),
          q("Why can using both ITAs cause a wound complication?", "It devascularizes the sternum", ["It causes stroke", "It causes AF", "It raises potassium"], "The ITAs supply the sternum, so taking both cuts its blood supply. (Slide 44)"),
          q("Which complication is linked to anesthesia?", "Stroke (neurologic dysfunction) and volume problems", ["Sternal devascularization", "Graft occlusion", "Phrenic nerve injury"], "Anesthesia-related problems include stroke and volume issues. (Slide 45)"),
          q("Which of these is a complication cause from the operation itself?", "Inflammatory response to CPB", ["Hypervolemia from anesthesia", "Sternotomy wound", "Smoking history"], "Bypass triggers a systemic inflammatory response. (Slide 46)"),
          q("Aortic clamping, unclamping and cannulation can cause complications by:", "Releasing fat and particulate matter (emboli)", ["Lowering potassium", "Raising HDL", "Causing hypothyroidism"], "Handling the aorta can shake loose fat and plaque emboli. (Slide 46)"),
          q("Which three things are emphasized after extubation?", "Spirometry, ambulation, antiplatelet therapy", ["Bedrest, NPO, sedation", "Warfarin, digoxin, diuretics", "Dialysis, transfusion, steroids"], "After extubation: spirometry, walking and antiplatelets. (Slide 54)")],
        [q("A diabetic patient had bilateral ITA grafts and on day 6 has sternal drainage and instability. Why was he at risk?", "Using both ITAs devascularizes the sternum", ["Cardioplegia caused it", "Too much spirometry", "Antiplatelet therapy"], "Taking both ITAs devascularizes the sternum, especially in diabetics. (Slide 44)"),
          q("The day after CABG a patient wakes with a new hemiparesis. Which group of causes does the lecture list it under?", "Anesthesia (neurologic dysfunction) and emboli from aortic clamping", ["Wound trauma", "Hypervolemia only", "Spirometry"], "Stroke after CABG comes from anesthesia or emboli from aortic clamping. (Slides 45 and 46)")]),
      C("Cardiac, pulmonary and renal complications",
        tbl(["System", "Complications"], [
          ["<strong>Dysrhythmias</strong>", "<strong>Atrial fibrillation</strong>, ventricular arrhythmias, bradyarrhythmia"],
          ["<strong>Myocardial weakness or failure</strong>", "MI (<strong>3.2%</strong> of CABG patients); poor inotropy; <strong>inadequate preload</strong>; <strong>vasodilatory shock (low SVR)</strong>; <strong>excessive afterload (high SVR)</strong>; valve dysfunction; <strong>tamponade</strong>"],
          ["<strong>Pulmonary</strong>", "Pulmonary edema (cardiogenic or not); pleural effusion; decreased thoracic compliance; <strong>atelectasis</strong>; pneumonia; <strong>phrenic nerve injury → diaphragm dysfunction</strong>; ALI/ARDS; difficulty weaning"],
          ["<strong>Renal</strong>", "From vasoconstriction, hypothermia, <strong>loss of pulsatile flow</strong>, atherosclerosis"]]) +
        hy("Protect the kidneys: <strong>keep the patient normotensive</strong> and <strong>avoid nephrotoxins</strong>: <strong>aminoglycosides, ACE inhibitors, contrast</strong>."),
        ["cs-cardiac-comp", "cs-pulm-comp", "cs-renal-comp"],
        [q("Which arrhythmia is listed first as a post-CABG dysrhythmia?", "Atrial fibrillation", ["Torsades", "WPW", "Brugada"], "AF is the most common post-CABG arrhythmia. (Slide 47)"),
          q("What percent of CABG patients have a post-op MI on the slide?", "3.2%", ["0.1%", "32%", "50%"], "Post-op MI happens in about 3.2% of CABG patients. (Slide 48)"),
          q("Vasodilatory shock after CABG means:", "Low SVR", ["High SVR", "High preload", "Tamponade"], "Vasodilatory shock = low SVR. (Slide 48)"),
          q("Excessive afterload after CABG means:", "High SVR", ["Low SVR", "Low preload", "Bradycardia"], "Excess afterload = high SVR. (Slide 48)"),
          q("Which nerve injury after CABG causes diaphragm dysfunction?", "Phrenic nerve", ["Recurrent laryngeal nerve", "Vagus nerve", "Long thoracic nerve"], "Phrenic nerve injury paralyzes the diaphragm. (Slide 49)"),
          q("Which pulmonary complication is listed after CABG?", "Atelectasis", ["Asbestosis", "Sarcoidosis", "Cystic fibrosis"], "Atelectasis is a common lung complication after CABG. (Slide 49)"),
          q("Why do kidneys suffer after CABG?", "Vasoconstriction, hypothermia, loss of pulsatile flow, atherosclerosis", ["Too much potassium in the diet", "Antiplatelet therapy", "Spirometry"], "Vasoconstriction, cold, non-pulsatile flow and atherosclerosis all hurt the kidneys. (Slide 50)"),
          q("Which drugs should be avoided after CABG to protect the kidneys?", "Aminoglycosides, ACE inhibitors, contrast", ["Aspirin, statins, beta blockers", "Acetaminophen and docusate", "Insulin and heparin"], "Aminoglycosides, ACE inhibitors and contrast stress injured kidneys. (Slide 50)"),
          q("What blood pressure goal protects the kidneys after CABG?", "Keep the patient normotensive", ["Keep SBP under 80", "Keep SBP over 200", "Let BP drift"], "Normal BP keeps kidney perfusion steady. (Slide 50)"),
          q("Which is a cardiac complication from fluid collecting around the heart after surgery?", "Tamponade", ["Endocarditis", "Myocarditis", "Dressler only"], "Blood collecting around the heart after surgery can cause tamponade. (Slide 48)")],
        [q("Two days after CABG a patient's heart rate is 140 and irregularly irregular. Most common post-op arrhythmia?", "Atrial fibrillation", ["Third-degree block", "Torsades", "VF"], "Irregularly irregular at 140 after CABG is AF, the most common post-op arrhythmia. (Slide 47)"),
          q("After CABG a patient cannot be weaned from the ventilator and the CXR shows a persistently raised left hemidiaphragm. Likely cause?", "Phrenic nerve injury", ["Hypokalemia", "Tamponade", "Contrast nephropathy"], "A raised hemidiaphragm after CABG suggests phrenic nerve injury. (Slide 49)"),
          q("A post-CABG patient's creatinine is rising. Which medication change fits the lecture?", "Avoid ACE inhibitors and aminoglycosides; keep BP normal", ["Start gentamicin", "Order a contrast CT", "Let BP fall to 80 systolic"], "Protect the kidneys: stop ACEi and aminoglycosides and keep BP normal. (Slide 50)")])
    ]),

    S("10-icu-monitoring", "10. ICU monitoring and the post-op cases", "Objective 9 (slides 51 to 57): what each ICU monitor tells you, and the three classic 8-hours-post-CABG calls.", [
      C("ICU monitoring tools",
        tbl(["Monitor", "Question it answers"], [
          ["<strong>Chest / mediastinal tube output</strong>", "<strong>Are they bleeding?</strong>"],
          ["<strong>Urine output</strong>, vital signs", "Are the kidneys perfused? Hypovolemia?"],
          ["Daily electrolytes, ABG, Hgb, platelets, BUN, creatinine", "Kidneys working? Anemia? Acidotic? Perfusing? Oxygenating?"],
          ["<strong>Blood sugar every 6 hours</strong>", "Hypo- or hyperglycemic?"],
          ["<strong>Echo</strong>", "Visual evidence of cardiac function"],
          ["<strong>ECG</strong>", "Ischemic changes?"],
          ["<strong>CXR</strong>", "Pulmonary edema, hypervolemia, pneumonia?"],
          ["<strong>Central filling pressure</strong> (CVP, possibly wedge)", "Volume (preload)"],
          ["<strong>Swan-Ganz</strong> (PA catheter)", "<strong>Cardiac output and SVR</strong>"],
          ["<strong>Telemetry</strong>", "Dysrhythmia"],
          ["<strong>Arterial line</strong>", "Continuous blood pressure"],
          ["<strong>Blood gases</strong>, pulse ox", "Oxygenation, ventilation, acid-base"]]),
        ["cs-monitor-floor", "cs-monitor-icu"],
        [q("What does chest tube output tell you after CABG?", "Whether the patient is bleeding", ["The cardiac output", "The SVR", "The blood sugar"], "Chest tube output shows whether the patient is bleeding. (Slide 51)"),
          q("How often is blood sugar checked after CABG on the slide?", "Every 6 hours", ["Once a week", "Every 15 minutes", "Only at discharge"], "Glucose is checked every 6 hours after CABG. (Slide 51)"),
          q("Which monitor gives cardiac output and SVR?", "Swan-Ganz (pulmonary artery) catheter", ["Arterial line", "Telemetry", "Pulse oximeter"], "The Swan-Ganz catheter measures CO and lets you calculate SVR. (Slide 52)"),
          q("Which monitor gives continuous blood pressure?", "Arterial line", ["Swan-Ganz", "Chest tube", "Telemetry"], "An arterial line gives beat-to-beat BP. (Slide 52)"),
          q("What is telemetry used for after CABG?", "Signs of dysrhythmia", ["Bleeding", "Blood sugar", "Oxygenation"], "Telemetry watches for arrhythmias. (Slide 52)"),
          q("What does the post-op CXR look for?", "Pulmonary edema, hypervolemia, pneumonia", ["Coronary calcium", "Graft patency", "Valve gradients"], "The CXR looks for edema, fluid overload and pneumonia. (Slide 51)"),
          q("Urine output after CABG tells you:", "Whether the kidneys are being perfused", ["Whether the grafts are open", "The ejection fraction", "The potassium level"], "Urine output reflects kidney perfusion. (Slide 51)"),
          q("Which test gives visual evidence of cardiac function after CABG?", "Echocardiography", ["ABG", "BUN", "Telemetry"], "Echo shows how well the heart is pumping. (Slide 51)"),
          q("Blood gases after CABG assess:", "Oxygenation, ventilation and acid-base status", ["Graft patency", "Clotting time", "Cardiac output"], "ABGs check oxygenation, ventilation and acid-base. (Slide 52)")],
        [q("After CABG the chest tubes drain 400 mL of blood in an hour. Which question does this monitor answer?", "Is the patient bleeding? Yes.", ["Is the patient hypoglycemic?", "Is SVR high?", "Is there AF?"], "High chest tube output means active bleeding. (Slide 51)"),
          q("You need to know whether a hypotensive post-CABG patient has low SVR or low cardiac output. Which monitor?", "Swan-Ganz catheter", ["Pulse oximeter", "Blood sugar", "Telemetry"], "A Swan-Ganz gives CO and SVR to separate the two. (Slide 52)")]),
      C("Three calls, 8 hours after CABG",
        tbl(["Nurse reports", "Likely problem", "What to check", "Treatment idea"], [
          ["<strong>BP 75/palp, HR 130</strong>, falling urine output", "<strong>Hypovolemia</strong> (bleeding or low volume)", "CVP, <strong>chest tube output</strong>, SpO2, cardiac output; ECG, Hgb, echo +/-", "Volume (blood if bleeding; standard teaching)"],
          ["<strong>BP 180/110, HR 90</strong>, falling urine output", "<strong>Hypertension</strong>", "History of HTN? CVP, CO, SVR; awake? <strong>pain</strong>? chest tube output; ECG, echo", "<strong>Nitroprusside</strong>"],
          ["<strong>BP 75/palp, HR 90</strong>, falling urine output", "<strong>Cardiac dyskinesia</strong> (pump problem)", "Chest tube output, CVP, CO, SVR; <strong>echocardiogram</strong>", "Treat the pump (standard teaching: inotropes)"]]) +
        hy("<strong>Low BP + fast heart</strong> = the heart is compensating for <strong>low volume</strong>. <strong>Low BP + normal heart rate</strong> = the heart is not compensating: think <strong>the pump</strong> and get an <strong>echo</strong>. <strong>High BP</strong> after CABG stresses fresh suture lines: treat with <strong>nitroprusside</strong>."),
        ["cs-case-hypovolemia", "cs-case-htn", "cs-case-dyskinesia"],
        [q("8 hours post-CABG: BP 75/palp, HR 130, low urine output. Most likely problem per the slide notes?", "Hypovolemia", ["Hypertension", "Cardiac dyskinesia", "Hyperglycemia"], "Low BP with a fast HR and low urine output = hypovolemia."),
          q("8 hours post-CABG: BP 180/110, HR 90, low urine output. Which drug do the notes suggest?", "Nitroprusside", ["Norepinephrine", "Normal saline bolus", "Potassium"], "Post-op hypertension is treated with nitroprusside to protect the grafts."),
          q("8 hours post-CABG: BP 75/palp, HR 90, low urine output. Likely problem per the notes?", "Cardiac dyskinesia", ["Hypovolemia", "Hypertension", "Hypoglycemia"], "Low BP with a normal HR suggests the pump is failing (dyskinesia), not volume."),
          q("For the hypotensive post-CABG patient with a normal heart rate, which test do the notes name?", "Echocardiogram", ["Calcium score", "Exercise stress test", "Holter"], "An echo shows if the heart muscle is moving poorly."),
          q("In the hypertensive post-CABG case, which questions do the notes ask?", "History of HTN, CVP/CO/SVR, is he awake, is he in pain, chest tube output", ["What is his LDL?", "Has he had a calcium score?", "What did he eat?"], "Check HTN history, hemodynamics, awareness, pain and bleeding before treating."),
          q("In the hypovolemic case, which measurements do the notes list?", "CVP, chest tube output, SpO2, cardiac output", ["LDL, HDL, triglycerides", "TSH, free T4", "Lipase, amylase"], "CVP, chest tube output, SpO2 and CO track volume status.")],
        [q("Eight hours after CABG: BP 78/50, HR 128, urine 10 mL/h, chest tubes draining heavily. Best first explanation?", "Hypovolemia from bleeding", ["Cardiac dyskinesia", "Hypertensive emergency", "Phrenic nerve injury"], "Slide 55: low BP with tachycardia = low volume."),
          q("Eight hours after CABG: BP 182/108, HR 88, the patient is waking up and grimacing. Besides pain control, what treatment do the notes name?", "Nitroprusside", ["IV fluids", "Epinephrine", "Atropine"], "After pain control, nitroprusside lowers the BP. (Slide 56)"),
          q("Eight hours after CABG: BP 76/palp, HR 90, low urine output, little chest tube output, CVP high. Next test?", "Echocardiogram to look at the pump (dyskinesia)", ["Calcium score", "Another liter of fluid without testing", "Stress test"], "High CVP with low BP and a normal HR suggests pump failure, so get an echo. (Slide 57)"),
          q("Why does a normal heart rate with a low BP point away from simple hypovolemia after CABG?", "With low volume the heart rate rises to compensate; a normal rate suggests the pump itself is failing", ["Hypovolemia always slows the heart", "Heart rate is unrelated to BP", "Bleeding causes bradycardia"], "Hypovolemia makes the HR climb; a normal HR with low BP points to a failing pump. (slides 55 and 57)")])
    ])
  ];
})();
