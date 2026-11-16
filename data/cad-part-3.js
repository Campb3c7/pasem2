/* Cardio Part 3, CAD Part III: Clinical Presentation, Diagnostic Evaluation, and Risk Stratification of the Chest Pain
   Patient (Stager, 124 slides). Sections follow the deck, which walks the 9 objectives in order. Read from slide
   pictures: 5 (chest discomfort, radiation, triggers, associated symptoms), 9 (AHA men vs women), 15 (noncardiac
   causes by system), 16 (noncardiac pain characteristics), 19 (probability of ischemia by pain descriptor), 24 (stable
   angina: subendocardial, reversible), 31 (NSTEMI: nonocclusive thrombus, subendocardial infarction), 32 (non-Q vs
   Q-wave infarction), 62 (acute chest pain pathway), 78 (pretest probability table), 88 (FFR), 92, 100, 102, 103,
   105, 109, 110. Case questions without an answer slide (20, 80, 82) are answered from the deck's own rules.
   Slide 119 gives LDL goal < 100 (most < 70) and TG < 200; slide 124 misspells metoprolol. */
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


  window.CAD_PART_3_OBJECTIVES = [

    S("01-angina", "1. Chest pain and angina pectoris", "Objective 1 (slides 2 to 4): why chest pain matters, what angina is, and the three angina types.", [
      C("Chest pain by the numbers",
        ul(["Chest pain is the <strong>2nd most common reason</strong> adults go to the ED in the US.",
          "Nearly <strong>4 million outpatient visits</strong> a year.",
          "Often noncardiac, but CAD affects <strong>&gt; 18.2 million</strong> US adults and is the <strong>leading cause of death for men and women</strong> (&gt; 365,000 deaths a year).",
          "Separating <strong>serious from benign</strong> causes is imperative."]),
        ["cp-ed", "cp-office", "cp-deaths"],
        [q("Where does chest pain rank among reasons adults present to the ED?", "2nd most common", ["Most common", "10th", "Rarely seen"], "Chest pain is the 2nd most common reason adults come to the ED, so you will see it constantly. (Slide 2)"),
          q("About how many outpatient visits a year are for chest pain?", "Nearly 4 million", ["About 40,000", "About 400 million", "About 1,000"], "Chest pain drives nearly 4 million outpatient visits a year, most of them noncardiac. (Slide 2)"),
          q("CAD causes more than how many US deaths a year?", "365,000", ["36,500", "3.6 million", "3,650"], "CAD kills more than 365,000 Americans a year, which is why chest pain is never brushed off. (Slide 2)"),
          q("CAD is the leading cause of death in:", "Both men and women", ["Men only", "Women only", "Children"], "CAD is the leading cause of death in both men and women, not just men. (Slide 2)")],
        [q("Most chest pain in an urgent care turns out noncardiac. Why still work it up carefully?", "CAD is common and the leading cause of death; serious causes must be separated from benign ones", ["Because all chest pain is cardiac", "Because noncardiac pain is always fatal", "It does not need a workup"], "CAD is common and the top killer, so even mostly-benign chest pain must be sorted carefully. (Slide 2)")]),
      C("Angina pectoris and its three types",
        ul(["<strong>Angina pectoris</strong> = chest pain or discomfort <strong>caused by myocardial ischemia</strong>.",
          "Described as <strong>retrosternal pressure, tightness or heaviness</strong>, not always 'pain', radiating to <strong>arm, jaw, shoulder or back</strong>.",
          "Associated: <strong>dyspnea, diaphoresis, nausea</strong>.",
          "<strong>Silent ischemia</strong> can happen in <strong>elderly and diabetic</strong> patients."]) +
        tbl(["Type", "Trigger", "Cause", "Ischemia"], [
          ["<strong>Stable</strong>", "<strong>Exertion or emotional stress</strong>; resolves with <strong>rest</strong>", "<strong>Fixed</strong> atherosclerotic obstruction", "<strong>Subendocardial</strong>"],
          ["<strong>Unstable</strong>", "<strong>At rest</strong> or minimal exertion; <strong>medical emergency</strong>", "<strong>Plaque rupture with thrombosis</strong>", ""],
          ["<strong>Vasospastic (Prinzmetal)</strong>", "Can occur <strong>at rest</strong>", "<strong>Coronary artery spasm</strong>", "<strong>Transmural</strong>, with <strong>ST elevation</strong>"]]),
        ["ap-def", "ap-describe", "ap-silent", "ap-stable", "ap-unstable", "ap-prinz"],
        [q("Angina pectoris is chest discomfort caused by:", "Myocardial ischemia", ["Pericardial inflammation", "Esophageal spasm", "Rib fracture"], "Angina is the symptom of myocardial ischemia: oxygen demand outstrips coronary supply. (Slide 3)"),
          q("Which groups can have silent ischemia?", "Elderly and diabetic patients", ["Young athletes", "Pregnant women only", "Children"], "Elderly and diabetic patients often have blunted pain sensation, so ischemia can be silent. (Slide 3)"),
          q("Stable angina is caused by:", "A fixed atherosclerotic obstruction", ["Plaque rupture with thrombosis", "Coronary spasm", "Aortic dissection"], "Stable angina comes from a fixed plaque that limits flow only when demand rises. (Slide 4)"),
          q("Stable angina causes which kind of ischemia?", "Subendocardial", ["Transmural with ST elevation", "Epicardial only", "None"], "A fixed stenosis starves the subendocardium first because it is farthest from the epicardial arteries. (Slide 4)"),
          q("Unstable angina indicates:", "Plaque rupture with thrombosis", ["A fixed stenosis only", "Spasm only", "Pericarditis"], "Unstable angina means a plaque has ruptured and a clot is forming, so the pain shows up at rest. (Slide 4)"),
          q("Prinzmetal angina is caused by:", "Coronary artery spasm", ["Fixed plaque", "Plaque rupture", "Valve disease"], "Prinzmetal angina is coronary spasm, not plaque, which is why the cath can be clean. (Slide 4)"),
          q("Prinzmetal angina causes which EKG change?", "ST elevation from transmural ischemia", ["Only T wave flattening", "Delta waves", "No change ever"], "Spasm briefly closes the whole artery, causing transmural ischemia and transient ST elevation. (Slide 4)"),
          q("Which angina type is a medical emergency?", "Unstable angina", ["Stable angina", "Musculoskeletal pain", "None"], "Unstable angina is a ruptured plaque with clot that can become an MI at any moment. (Slide 4)")],
        [q("A 38-year-old woman wakes at 5 am with chest pain and transient ST elevation that resolves in 10 minutes; her cath is clean. Which angina?", "Vasospastic (Prinzmetal)", ["Stable", "Unstable from rupture", "Musculoskeletal"], "Early-morning rest pain with transient ST elevation and clean coronaries is classic vasospasm. (Slide 4)"),
          q("A 79-year-old diabetic has new Q waves on a routine EKG but denies ever having chest pain. Why?", "Silent ischemia is common in elderly and diabetic patients", ["Q waves are normal at 79", "Diabetics never get CAD", "The EKG is reversed"], "Elderly and diabetic patients often feel no pain, so an MI can be found only as Q waves later. (Slide 3)")])
    ]),

    S("02-symptoms-equivalents", "2. Ischemic symptoms and anginal equivalents", "Objective 1 (slides 5 to 7): the four features of ischemic discomfort, other suggestive symptoms, and anginal equivalents.", [
      C("Four features of ischemic discomfort",
        tbl(["Feature", "Typical"], [
          ["<strong>Chest discomfort</strong>", "<strong>Pressure, tightness, heaviness, squeezing or aching</strong>; often substernal, may be elsewhere in the chest"],
          ["<strong>Radiation</strong>", "One or both <strong>arms, shoulders, neck, jaw or back</strong>"],
          ["<strong>Triggers/pattern</strong>", "Worse with <strong>exertion or emotional stress</strong>; relieved by <strong>rest or NTG</strong>. <strong>New, worsening, prolonged or resting</strong> symptoms raise concern for <strong>ACS</strong>"],
          ["<strong>Associated</strong>", "<strong>Dyspnea, diaphoresis, nausea, lightheadedness, unusual fatigue</strong>"]]) +
        tbl(["Other history clues to CAD"], [["Progressively worsening <strong>dyspnea or exercise intolerance</strong>"], ["<strong>Palpitations, lightheadedness</strong>"], ["<strong>Weight gain</strong> over days or <strong>leg edema</strong>"]]) +
        hy("Symptoms <strong>do not reliably match</strong> how much disease there is. <strong>Sudden cardiac death</strong> is sometimes the <strong>first</strong> symptom of CAD."),
        ["sy-quality", "sy-radiation", "sy-pattern", "sy-assoc", "sy-other", "sy-scd"],
        [q("Which radiation pattern fits ischemic chest discomfort?", "Arms, shoulders, neck, jaw or back", ["Down the legs", "Above the mandible to the scalp", "Only the right lower quadrant"], "Ischemic pain is visceral and poorly localized, so it radiates to the arms, shoulders, neck, jaw or back. (Slide 5)"),
          q("Which pattern raises concern for ACS rather than stable angina?", "New, worsening, prolonged or resting symptoms", ["Predictable exertional symptoms for years", "Pain relieved by rest in 2 minutes", "No symptoms"], "A new, worsening, longer or resting pattern suggests an unstable plaque, which is ACS. (Slide 5)"),
          q("Which is listed as another history clue that may suggest CAD?", "Weight gain over days or leg edema", ["Hair loss", "Rash", "Diarrhea"], "Weight gain and leg edema can signal heart failure from ischemic damage. (Slide 6)"),
          q("Do symptoms reliably match the extent of coronary disease?", "No", ["Yes, always", "Only in women", "Only in men"], "Symptoms do not track disease burden: severe CAD can be silent and mild CAD can hurt. (Slide 6)"),
          q("What can be the first symptom of CAD?", "Sudden cardiac death", ["Hair loss", "Night sweats", "Hematuria"], "Sudden cardiac death can be the very first sign of CAD, with no warning symptoms. (Slide 6)")],
        [q("A 61-year-old has chest heaviness when angry and when climbing stairs, relieved in minutes by rest. Which features fit ischemia?", "Pressure-type pain triggered by exertion or emotional stress and relieved by rest", ["Pleuritic pain", "Positional pain", "Pain lasting seconds"], "Pressure brought on by exertion or emotion and relieved by rest is the textbook ischemic pattern. (Slide 5)")]),
      C("Anginal equivalents",
        "<p>An <strong>anginal equivalent</strong> is a symptom <strong>other than chest discomfort</strong> that may reflect ischemia.</p>" +
        tbl(["Common anginal equivalents"], [["<strong>Dyspnea</strong>"], ["<strong>Unusual fatigue</strong> or reduced exercise tolerance"], ["<strong>Exertional weakness or lightheadedness</strong>"], ["<strong>Nausea or upper abdominal discomfort</strong>"]]),
        ["eq-def", "eq-list"],
        [q("An anginal equivalent is:", "A symptom other than chest discomfort that may reflect ischemia", ["Chest pain from GERD", "A normal stress test", "A drug that replaces nitroglycerin"], "An anginal equivalent is ischemia showing up as something other than chest pain, like dyspnea. (Slide 7)"),
          q("Which is a common anginal equivalent?", "Exertional dyspnea", ["Hematuria", "Itching", "Hair loss"], "Exertional dyspnea is the classic anginal equivalent: the ischemic LV stiffens and backs up into the lungs. (Slide 7)"),
          q("Which GI symptom can be an anginal equivalent?", "Nausea or upper abdominal discomfort", ["Bloody diarrhea", "Constipation", "Rectal pain"], "Inferior ischemia often feels like nausea or epigastric discomfort rather than chest pain. (Slide 7)")],
        [q("A 70-year-old diabetic now gets breathless and weak walking to the mailbox but has no chest pain. What should you consider?", "An anginal equivalent of myocardial ischemia", ["Normal aging only", "Asthma only", "Nothing"], "New exertional breathlessness and weakness in an elderly diabetic is an anginal equivalent until proven otherwise. (Slide 7)")])
    ]),

    S("03-women-older", "3. Women and older adults", "Objective 1 (slides 8 to 10): how women and patients over 75 present.", [
      C("Women and patients over 75",
        tbl(["Women (AHA graphic)", "Men"], [
          ["Nausea or vomiting", "Nausea or vomiting"], ["Jaw, neck or <strong>upper back</strong> pain", "Jaw, neck or back pain"],
          ["Chest pain, <strong>but not always</strong>", "Squeezing chest pressure or pain"],
          ["Pain or pressure in the <strong>lower chest or upper abdomen</strong>", "Shortness of breath"],
          ["Shortness of breath; <strong>fainting</strong>; <strong>indigestion</strong>; <strong>extreme fatigue</strong>", ""]]) +
        ul(["Women more often report <strong>nonspecific</strong> symptoms: nausea/vomiting, abdominal pain, SOB, severe fatigue.",
          "During an MI, <strong>women are more likely than men to have no chest pain</strong>.",
          "Chest pain is the most common heart attack symptom for <strong>both</strong> sexes."]) +
        tbl(["Patients over 75", ""], [
          ["Share of ACS", "<strong>33%</strong> of all ACS cases"],
          ["But at presentation", "<strong>Alternative diagnoses are still more common</strong> than cardiac chest pain"],
          ["Symptoms", "<strong>SOB, syncope, mental impairment, abdominal pain</strong>, or an <strong>unexplained fall</strong>"]]),
        ["wo-nonspecific", "wo-no-cp", "wo-graphic", "old-33", "old-alt", "old-sx"],
        [q("During an MI, who is more likely to present without chest pain?", "Women", ["Men", "Neither", "Only teenagers"], "Women are more likely than men to have an MI without chest pain. (Slide 8)"),
          q("Which symptom set do women more often report?", "Nausea, abdominal pain, SOB and severe fatigue", ["Only crushing chest pain", "Fever and rash", "Hematuria"], "Women more often report nausea, abdominal pain, dyspnea and severe fatigue with ischemia. (Slide 8)"),
          q("What is the most common heart attack symptom for both men and women?", "Chest pain", ["Fainting", "Indigestion", "Jaw pain"], "Chest pain is still the most common MI symptom in both men and women. (Slide 9)"),
          q("Patients over 75 account for what share of ACS cases?", "33%", ["3%", "75%", "90%"], "Patients over 75 make up about a third (33%) of ACS cases. (Slide 10)"),
          q("In patients over 75 with chest pain, what is more common at presentation?", "Alternative (noncardiac) diagnoses", ["ACS", "STEMI", "Prinzmetal angina"], "In patients over 75 chest pain more often has another cause, which makes diagnosis harder. (Slide 10)"),
          q("Which is a listed presentation of ischemia in patients over 75?", "An unexplained fall", ["Hair loss", "Night blindness", "Polyuria"], "In the very old, ischemia can present atypically, for example as an unexplained fall. (Slide 10)"),
          q("On the AHA graphic, which symptom is listed for women but not men?", "Extreme fatigue", ["Shortness of breath", "Nausea or vomiting", "Jaw pain"], "The AHA graphic lists extreme fatigue as a women's symptom, not a men's. (Slide 9)")],
        [q("An 82-year-old woman is brought in for new confusion and a fall at home; her EKG shows new ST depression. What does this illustrate?", "Atypical ischemic presentation in older adults", ["Typical stroke only", "Normal aging", "Musculoskeletal injury only"], "Older adults can present with confusion or a fall instead of chest pain when ischemic. (Slide 10)"),
          q("A 56-year-old woman has 2 days of indigestion, nausea and upper back pain. What must be on the differential?", "ACS, since women often present without classic chest pain", ["Only GERD", "Only muscle strain", "Only anxiety"], "Women often present with indigestion, nausea or back pain, so ACS stays on the list. (Slides 8 and 9)")])
    ]),

    S("04-classification", "4. Classifying chest pain", "Objective 2 (slides 11, 12, 19): the 2021 AHA/ACC categories, the old Diamond-Forrester system, and which pain words raise or lower the odds of ischemia.", [
      C("2021 AHA/ACC vs Diamond-Forrester",
        tbl(["2021 AHA/ACC category", "Meaning"], [
          ["<strong>Cardiac</strong>", "Underlying cardiac cause; classic discomfort by quality, location, radiation, provoking and relieving factors"],
          ["<strong>Possible cardiac</strong>", "Symptoms <strong>suggest</strong> a cardiac origin"],
          ["<strong>Noncardiac</strong>", "Likely noncardiac in persistent or recurring symptoms despite a <strong>negative stress test or anatomic evaluation</strong>, or a <strong>low-risk</strong> clinical decision pathway result"]]) +
        tbl(["Diamond-Forrester (no longer recommended)", "Criteria met"], [
          ["Typical criteria", "<strong>Substernal</strong>; <strong>exertional</strong>; <strong>relieved by rest or NTG</strong>"],
          ["<strong>Anginal (typical)</strong>", "<strong>All 3</strong>"], ["<strong>Atypical anginal</strong>", "<strong>2</strong>"], ["<strong>Non-anginal</strong>", "<strong>1</strong>"]]) +
        note("The 2021 guideline replaced 'atypical' with cardiac / possible cardiac / noncardiac; Diamond-Forrester is shown for history and the boards."),
        ["cl-cardiac", "cl-possible", "cl-noncardiac", "df-criteria", "df-counts", "df-old"],
        [q("Which three categories does the 2021 AHA/ACC guideline use?", "Cardiac, possible cardiac, noncardiac", ["Typical, atypical, non-anginal", "Stable, unstable, variant", "Low, medium, high"], "The 2021 AHA/ACC guideline sorts chest pain as cardiac, possible cardiac or noncardiac. (Slide 11)"),
          q("Is the Diamond-Forrester classification still recommended?", "No", ["Yes, it is preferred", "Only in women", "Only in children"], "The 2021 guideline dropped Diamond-Forrester labels in favor of cardiac, possible cardiac, noncardiac. (Slide 12)"),
          q("What are the three Diamond-Forrester criteria?", "Substernal, exertional, relieved by rest or nitroglycerin", ["Sharp, pleuritic, positional", "Burning, postprandial, relieved by antacids", "Tearing, to the back, sudden"], "Diamond-Forrester asks three things: substernal, exertional, relieved by rest or nitro. (Slide 12)"),
          q("Meeting all 3 Diamond-Forrester criteria is:", "Anginal (typical) chest pain", ["Atypical anginal", "Non-anginal", "Noncardiac by definition"], "All 3 Diamond-Forrester criteria met = typical (anginal) chest pain. (Slide 12)"),
          q("Meeting 2 Diamond-Forrester criteria is:", "Atypical anginal chest pain", ["Typical angina", "Non-anginal", "STEMI"], "2 of 3 Diamond-Forrester criteria = atypical anginal chest pain. (Slide 12)"),
          q("Meeting only 1 Diamond-Forrester criterion is:", "Non-anginal chest pain", ["Typical angina", "Atypical angina", "Unstable angina"], "Only 1 Diamond-Forrester criterion = non-anginal chest pain. (Slide 12)"),
          q("In the 2021 guideline, recurrent chest pain after a negative stress test is classified as:", "Noncardiac", ["Cardiac", "Possible cardiac", "Unstable angina"], "A recent negative stress test makes recurrent chest pain noncardiac in the 2021 scheme. (Slide 11)")],
        [q("A 65-year-old woman has substernal, exertional chest pain NOT relieved by rest or nitroglycerin. Diamond-Forrester class?", "Atypical anginal (2 of 3)", ["Typical anginal", "Non-anginal", "Cannot classify"], "Substernal and exertional but not relieved by rest = 2 of 3 criteria = atypical anginal. (Slides 12 and 80)"),
          q("A man has substernal pressure with exertion that goes away with rest. Diamond-Forrester class?", "Typical (anginal), all 3", ["Atypical", "Non-anginal", "Noncardiac"], "Substernal, exertional and relieved by rest meets all 3 criteria = typical angina. (Slide 12)")]),
      C("Words that raise or lower the odds",
        tbl(["Higher probability of ischemia", "Middle", "Lower probability"], [
          ["<strong>Central, pressure, squeezing, gripping, heaviness, tightness, exertional/stress-related, retrosternal</strong>", "Left-sided, dull, aching; stabbing; right-sided, tearing, ripping, burning", "<strong>Sharp, fleeting, shifting, pleuritic, positional</strong>"]]) +
        mn("<strong>Squeeze</strong> in the middle = heart. <strong>Sharp, shifting, breathing-related</strong> = probably not."),
        ["pr-high", "pr-low"],
        [q("Which descriptor carries the highest probability of ischemia?", "Pressure", ["Sharp", "Pleuritic", "Positional"], "Pressure-type pain carries the highest probability of ischemia. (Slide 19)"),
          q("Which descriptor carries the lowest probability of ischemia?", "Fleeting", ["Heaviness", "Squeezing", "Tightness"], "Fleeting, seconds-long pain is least likely to be ischemic. (Slide 19)"),
          q("Retrosternal and exertional pain falls at which end of the spectrum?", "High probability of ischemia", ["Low probability", "Middle only", "Zero probability"], "Retrosternal, exertional pain sits at the high-probability end of the ischemia spectrum. (Slide 19)")],
        [q("A patient describes his chest pain as sharp, shifting and worse when he takes a breath. Probability of ischemia?", "Low", ["High", "Certain", "Unchanged by description"], "Sharp, shifting, pleuritic pain is a low-probability descriptor for ischemia. (Slide 19)")])
    ]),

    S("05-exam", "5. Physical exam in ischemia", "Objective 4 (slide 13): what you see and hear during ischemia, including S4 and S3.", [
      C("Signs of active ischemia",
        "<p>The exam is <strong>normal</strong> when the patient is <strong>not having active ischemia</strong>.</p>" +
        tbl(["During ischemia"], [["Looks <strong>uncomfortable, pale, diaphoretic</strong>"], ["<strong>Dyspnea</strong>, ↑ work of breathing, conversational dyspnea, <strong>rales</strong>"], ["<strong>Altered mentation</strong>"],
          ["Gallops: <strong>S4</strong> from <strong>decreased LV compliance</strong> ('TEN-nes-see'); less often <strong>S3</strong> from <strong>LV systolic dysfunction</strong> ('Ken-TUC-ky')"]]) +
        hy("S4 is the <strong>more common</strong> gallop in ischemia: the stiff, ischemic ventricle resists the atrial kick."),
        ["ex-normal", "ex-look", "ex-s4", "ex-s3"],
        [q("What does the physical exam show when the patient is not having active ischemia?", "It is usually normal", ["Always an S3", "Always rales", "Always a murmur"], "Between episodes the exam is usually normal, so a normal exam does not rule out CAD. (Slide 13)"),
          q("Which gallop during ischemia comes from decreased LV compliance?", "S4", ["S3", "Opening snap", "Pericardial knock"], "Ischemia stiffens the LV, and the atrium slamming into it makes an S4. (Slide 13)"),
          q("Which gallop during ischemia comes from LV systolic dysfunction?", "S3", ["S4", "Ejection click", "Split S2"], "An S3 means the ischemic LV is failing (systolic dysfunction) and volume-overloaded. (Slide 13)"),
          q("Which gallop is heard more often with ischemia?", "S4", ["S3", "Neither ever", "Summation gallop only"], "S4 is more common because ischemia stiffens the LV (compliance) before it fails. (Slide 13)"),
          q("Which lung finding may appear with active ischemia?", "Rales", ["Stridor", "Wheeze only from asthma", "Absent breath sounds"], "Active ischemia can cause LV failure that backs fluid into the lungs, heard as rales. (Slide 13)")],
        [q("During an episode of chest pressure, a patient is pale, sweaty and has a new low-pitched sound just before S1. What is it and why?", "S4 from decreased LV compliance", ["S3 from volume overload", "Mitral click", "Pericardial rub"], "A sound just before S1 during ischemia is an S4 from the stiff, ischemic LV. (Slide 13)")])
    ]),

    S("06-differential", "6. Noncardiac chest pain and clues to another diagnosis", "Objective 2 (slides 14 to 18, 20): the differential by system, pain characteristics, and red flags for another cause.", [
      C("The differential",
        tbl(["System", "Causes"], [
          ["<strong>Pulmonary</strong>", "PE, pneumothorax, pneumonia, pleurisy/pleuritis"],
          ["<strong>GI</strong>", "GERD/PUD, esophagitis, pancreatitis, esophageal spasm, biliary colic, cholangitis, cholecystitis, esophageal rupture"],
          ["<strong>Chest wall / MSK</strong>", "Costochondritis, rib fracture, cervical disc disease, fibrositis, <strong>herpes zoster (before the rash)</strong>, sternoclavicular arthritis"],
          ["<strong>Non-ischemic CV</strong>", "Pericarditis, <strong>aortic dissection</strong>, aortic aneurysm, myocarditis, <strong>stress (takotsubo) cardiomyopathy</strong>"],
          ["<strong>Psychiatric</strong>", "Anxiety, hyperventilation, panic disorder, conversion disorder, depression, somatoform disorders"]]) +
        tbl(["Condition", "Duration", "Character"], [
          ["<strong>GERD</strong>", "5 to 60 min", "Substernal, <strong>worse lying down</strong>, no radiation, relief with <strong>food or antacids</strong>"],
          ["<strong>Esophageal spasm</strong>", "5 to 60 min", "Spontaneous, substernal, with <strong>cold liquids</strong>, <strong>relieved by nitroglycerin</strong>"],
          ["<strong>Peptic ulcer</strong>", "Hours", "Epigastric, <strong>burning</strong>, relief with food or antacids, <strong>normal ECG</strong>"],
          ["<strong>Biliary disease</strong>", "Hours", "Epigastric, <strong>interscapular</strong>, colic, <strong>after meals</strong>"],
          ["<strong>Cervical disc</strong>", "Variable", "Superficial, positional, arm, neck"],
          ["<strong>Musculoskeletal</strong>", "Variable", "Superficial, positional, worse with movement, <strong>local tenderness</strong>"],
          ["<strong>Thyroiditis</strong>", "Persistent", "Worse with <strong>swallowing</strong>, neck and throat tenderness"]]) +
        hy("Trap: <strong>esophageal spasm is relieved by nitroglycerin</strong>, so NTG response does not prove angina."),
        ["dd-systems", "dd-zoster", "dd-gerd", "dd-spasm", "dd-pud", "dd-biliary", "dd-thyroid"],
        [q("Which is a pulmonary cause of chest pain?", "Pneumothorax", ["Costochondritis", "Pancreatitis", "Panic disorder"], "Pneumothorax is a pulmonary cause of chest pain. (Slide 14)"),
          q("Which is a non-ischemic cardiovascular cause of chest pain?", "Aortic dissection", ["Biliary colic", "Rib fracture", "Pleurisy"], "Aortic dissection is a cardiovascular but non-ischemic cause of chest pain. (Slide 14)"),
          q("Which chest wall cause can hurt before any rash appears?", "Herpes zoster", ["Costochondritis", "Rib fracture", "Fibrositis"], "Zoster inflames the nerve first, so dermatomal pain can come days before the rash. (Slide 15)"),
          q("GERD chest pain is typically worse:", "Lying down (recumbency)", ["With exercise only", "When standing", "With deep breathing only"], "GERD is worse lying down because gravity no longer keeps acid in the stomach. (Slide 16)"),
          q("Which noncardiac pain can be relieved by nitroglycerin?", "Esophageal spasm", ["Biliary colic", "Costochondritis", "Thyroiditis"], "Nitro relaxes esophageal smooth muscle too, so esophageal spasm can improve with it. (Slide 16)"),
          q("Esophageal spasm is associated with:", "Cold liquids", ["Fatty meals only", "Breathing deeply", "Neck rotation"], "Cold liquids can trigger esophageal spasm. (Slide 16)"),
          q("Biliary pain classically radiates to the:", "Interscapular area, after meals", ["Left arm with exertion", "Jaw at rest", "Lower legs"], "Biliary pain follows meals and refers to the interscapular area or right shoulder. (Slide 16)"),
          q("Peptic ulcer pain lasts:", "Hours", ["Seconds", "5 to 60 minutes only", "Weeks without change"], "Ulcer pain lasts hours, unlike angina's minutes. (Slide 16)"),
          q("Which condition causes chest pain worse with swallowing and a tender neck?", "Thyroiditis", ["GERD", "Pericarditis", "Pneumonia"], "Thyroiditis inflames the neck, so swallowing hurts and the thyroid is tender. (Slide 16)"),
          q("Which psychiatric cause is listed for chest pain?", "Panic disorder", ["Schizophrenia only", "ADHD", "Autism"], "Panic disorder is a common psychiatric cause of chest pain. (Slide 14)")],
        [q("A 45-year-old's substernal burning wakes him when lying flat after late dinners and improves with antacids. Most likely?", "GERD", ["Stable angina", "Pericarditis", "Pneumothorax"], "Burning worse lying flat after meals and better with antacids is classic reflux. (Slide 16)"),
          q("A patient's chest pain improves with nitroglycerin. Does that prove it is angina?", "No; esophageal spasm also responds to nitroglycerin", ["Yes, always", "Yes, if it took 5 minutes", "Only in women"], "Nitro also relaxes the esophagus, so a nitro response does not prove angina. (Slide 16)"),
          q("A 70-year-old has burning left chest pain in a band along a rib, no rash yet, normal EKG. What should you consider?", "Herpes zoster before the rash", ["STEMI", "Prinzmetal angina", "Biliary colic"], "Banded rib pain along a dermatome can be zoster before the rash appears. (Slide 15)")]),
      C("Red flags for another diagnosis",
        tbl(["Feature", "Think"], [
          ["<strong>Pleuritic</strong>: sharp, knife-like, with breathing or cough", "<strong>Pulmonary</strong> or musculoskeletal"],
          ["Mainly in the <strong>mid or lower abdomen</strong>", "<strong>GI</strong>: dyspepsia, GERD, PUD, esophagitis, pancreatitis"],
          ["<strong>Localized with one finger</strong>", "<strong>Musculoskeletal</strong>"],
          ["<strong>Reproduced by movement or palpation</strong>", "<strong>Musculoskeletal</strong>"],
          ["<strong>Constant for days</strong>", "Pulmonary or musculoskeletal"],
          ["<strong>Fleeting, 30 seconds or less</strong>", "<strong>Nerve</strong> pain (musculoskeletal)"],
          ["Radiating to the <strong>legs</strong> or <strong>above the mandible</strong>", "Musculoskeletal"]]) +
        "<p><strong>Case (slide 20):</strong> 58-year-old man; substernal pressure walking uphill or carrying groceries, sometimes to the left shoulder, gone within <strong>5 minutes of rest</strong>; HTN, hyperlipidemia, <strong>25 pack-years</strong>. This is <strong>cardiac ischemia (stable angina)</strong>: pressure quality, substernal, exertional, relieved by rest, typical radiation, multiple risk factors.</p>",
        ["rf-pleuritic", "rf-abd", "rf-finger", "rf-palp", "rf-days", "rf-30s", "rf-radiate", "rf-case"],
        [q("Chest pain localized with one fingertip suggests:", "Musculoskeletal pain", ["STEMI", "Stable angina", "Aortic stenosis"], "Pain you can point to with one fingertip is too localized to be visceral, so think musculoskeletal. (Slide 17)"),
          q("Pain reproduced by palpation suggests:", "Musculoskeletal pain", ["Ischemia", "Pulmonary embolus only", "Pericarditis only"], "Ischemic pain is not reproduced by pressing, so palpation tenderness points to the chest wall. (Slide 18)"),
          q("Fleeting pains of 30 seconds or less suggest:", "Nerve (musculoskeletal) pain", ["Unstable angina", "NSTEMI", "Aortic dissection"], "Pain lasting only seconds is too short for ischemia and suggests a nerve or muscle cause. (Slide 18)"),
          q("Constant pain lasting days suggests:", "A pulmonary or musculoskeletal cause", ["Stable angina", "STEMI", "Prinzmetal angina"], "Ischemia does not last days without an MI, so constant days-long pain suggests a lung or chest wall cause. (Slide 18)"),
          q("Pain radiating into the lower extremities or above the mandible suggests:", "Musculoskeletal pain", ["Ischemia", "GERD", "Pneumonia only"], "Angina does not radiate below the waist or above the jaw, so that pattern points elsewhere. (Slide 18)"),
          q("Pain mainly in the mid or lower abdomen suggests:", "A GI cause", ["Stable angina", "Pneumothorax", "Costochondritis"], "Mid or lower abdominal pain points to a GI source. (Slide 17)"),
          q("Sharp pain with breathing or coughing suggests:", "A pulmonary or musculoskeletal cause", ["Stable angina", "Esophageal spasm only", "Biliary colic"], "Pain that sharpens with breathing or coughing is pleuritic or chest wall pain. (Slide 17)")],
        [q("The slide 20 patient: 58, substernal pressure walking uphill radiating to the left shoulder, gone within 5 minutes of rest, HTN, HLD, 25 pack-years. Cardiac or noncardiac?", "Cardiac ischemia (stable angina)", ["Musculoskeletal", "GERD", "Anxiety"], "Exertional substernal pressure radiating to the shoulder, relieved by rest, with risk factors = stable angina. (Slides 5, 20 and 23)"),
          q("A 30-year-old weightlifter has left chest pain that he can point to with one finger and that hurts when you press there. Most likely?", "Musculoskeletal chest pain", ["Unstable angina", "STEMI", "Aortic dissection"], "Pain you can point to with one finger and reproduce by pressing is musculoskeletal. (Slides 17 and 18)")])
    ]),

    S("07-office-triage", "7. Chest pain in the office", "Objective 4 (slide 21): what to do when ischemia is on the differential in clinic.", [
      C("Office decision",
        tbl(["Situation", "Action"], [
          ["<strong>Currently having chest pain</strong>", "<strong>Call 911</strong>; send to the ER <strong>by ambulance</strong>"],
          ["Had pain, not now, <strong>unstable angina features</strong>", "<strong>Call cardiology</strong> to be seen ASAP, or send to the ER"],
          ["Had pain, not now, stable features", "<strong>Risk stratify with stress testing</strong>"]]),
        ["off-active", "off-ua", "off-stable"],
        [q("A clinic patient is having chest pain right now. What do you do?", "Call 911 and send by ambulance", ["Schedule a stress test", "Send home with NTG", "Have them drive to the ER"], "Active chest pain in clinic could be an MI, so it goes by ambulance via 911, not by car. (Slide 21)"),
          q("A clinic patient is pain-free now but describes unstable angina features. What do you do?", "Call cardiology to be seen ASAP or send to the ER", ["Routine stress test in 3 months", "Reassure", "CAC score"], "Unstable features mean a possible ruptured plaque, so same-day cardiology or the ER. (Slide 21)"),
          q("A clinic patient is pain-free with a stable pattern of exertional pain. Next step?", "Risk stratify with stress testing", ["Call 911", "Emergent cath", "No workup"], "A stable, pain-free patient can be risk stratified safely with outpatient stress testing. (Slide 21)")],
        [q("A 64-year-old in your office develops chest pressure and sweating while you take his history. What now?", "Call 911 for ambulance transport to the ER", ["Order an outpatient stress test", "Let his wife drive him", "Give an antacid and observe"], "Chest pressure with diaphoresis happening now is a possible MI, so call 911. (Slide 21)")])
    ]),

    S("08-stable-angina", "8. Stable angina", "Objective 3 (slides 22 to 25): the four clinical syndromes and the features of stable angina, with Thomas's example.", [
      C("Four syndromes; stable angina",
        "<p>Four manifestations of coronary atherosclerosis: <strong>stable angina</strong>, <strong>unstable angina</strong>, <strong>NSTEMI</strong>, <strong>STEMI</strong>. Numbers 2 to 4 are <strong>ACS</strong>.</p>" +
        tbl(["Stable angina", ""], [
          ["Pattern", "<strong>Predictable and reproducible</strong>"],
          ["Triggers", "<strong>Exertion, cold exposure, emotional stress</strong>"],
          ["Duration", "<strong>5 to 10 minutes</strong>"],
          ["Relief", "<strong>Rest or nitroglycerin</strong>"],
          ["Cause", "<strong>Fixed, flow-limiting plaque</strong> that limits flow when demand rises"],
          ["Ischemia", "<strong>Subendocardial</strong>, <strong>reversible</strong> (no necrosis)"]]) +
        "<p><strong>Thomas, 72</strong> (prior MI and 3-vessel CABG 6 years ago; on ASA, metoprolol, losartan): chest pain after <strong>15 minutes</strong> on the treadmill, <strong>unchanged for 6 months</strong>; walks 13 minutes, rests 5. Exam normal; <strong>SL nitro renewed</strong>. = <strong>stable angina</strong>.</p>",
        ["sa-four", "sa-acs", "sa-features", "sa-cause", "sa-subendo", "sa-thomas"],
        [q("Which of the four syndromes is NOT an acute coronary syndrome?", "Stable angina", ["Unstable angina", "NSTEMI", "STEMI"], "ACS is UA, NSTEMI and STEMI; stable angina is a chronic, predictable pattern. (Slide 22)"),
          q("Which triggers are listed for stable angina?", "Exertion, cold exposure, emotional stress", ["Sleep only", "Lying flat only", "Eating spicy food only"], "Exertion, cold and emotional stress all raise myocardial oxygen demand past a fixed stenosis. (Slide 23)"),
          q("Stable angina symptoms typically last:", "5 to 10 minutes", ["Seconds", "Over 30 minutes", "Days"], "Stable angina lasts about 5 to 10 minutes and stops once demand falls. (Slide 23)"),
          q("Stable angina is relieved by:", "Rest or nitroglycerin", ["Antacids", "Leaning forward", "Nothing"], "Rest lowers demand and nitro dilates veins to cut preload, so either relieves stable angina. (Slide 23)"),
          q("The ischemia in stable angina is:", "Subendocardial and reversible", ["Transmural with necrosis", "Epicardial with necrosis", "Always permanent"], "Stable angina is subendocardial and fully reversible, with no lasting damage. (Slide 24)"),
          q("Stable angina is best described as:", "Predictable and reproducible", ["Random and at rest", "Constant for days", "Always worse each week"], "A fixed plaque gives the same pain at the same workload every time: predictable and reproducible. (Slide 23)")],
        [q("Thomas, 72, gets the same chest pain after 15 minutes on his treadmill as 6 months ago and it goes away with rest. Diagnosis?", "Stable angina", ["Unstable angina", "NSTEMI", "STEMI"], "Same trigger, same threshold for 6 months, relieved by rest = stable angina. (Slide 25)"),
          q("A patient's angina comes on shoveling snow in the cold and resolves after resting 5 minutes. Which syndrome?", "Stable angina", ["Unstable angina", "STEMI", "Pericarditis"], "Cold plus exertion raises demand; quick relief with rest makes it stable angina. (Slide 23)")])
    ]),

    S("09-acs-ua", "9. ACS and unstable angina", "Objective 3 (slides 26 to 29): what causes ACS, how symptoms change, and what defines unstable angina.", [
      C("ACS: causes and the change in symptoms",
        tbl(["ACS may be caused by"], [["<strong>Sudden plaque rupture</strong>"], ["<strong>Plaque growth to a critical level</strong>"], ["<strong>Stress from a noncardiac illness</strong> that taxes the diseased heart"]]) +
        tbl(["ACS = ischemic symptoms increase in", ""], [
          ["<strong>Frequency</strong>", ""], ["<strong>Severity</strong>", ""], ["<strong>Duration</strong>", ""],
          ["<strong>Provocation</strong>", "With measurably <strong>less exertion</strong> or <strong>at rest</strong>"],
          ["<strong>Relief</strong>", "<strong>Less responsive</strong> to rest or SL NTG"]]),
        ["acs-causes", "acs-change"],
        [q("Which is NOT listed as a cause of ACS?", "Positive remodeling with a normal lumen", ["Sudden plaque rupture", "Plaque growth to a critical level", "Stress from a noncardiac illness"], "Positive remodeling preserves the lumen, so it is not an ACS cause. (Slide 26)"),
          q("In ACS, provocation changes how?", "Symptoms come with less exertion or at rest", ["Only with marathon running", "Only after meals", "Never at rest"], "In ACS a clot narrows the lumen further, so less exertion (or rest) brings on pain. (Slide 27)"),
          q("In ACS, how do symptoms respond to rest or SL nitroglycerin?", "Less responsive", ["More responsive", "Always resolve in 1 minute", "Unchanged"], "A clot-narrowed artery does not recover with rest or a nitro, so ACS responds poorly. (Slide 27)")],
        [q("A patient with septic shock and known CAD develops chest pain and rising troponin without plaque rupture. Which ACS cause fits?", "Stress from a noncardiac illness taxing the diseased heart", ["Sudden plaque rupture", "Prinzmetal spasm", "Congenital lesion"], "A severe illness like sepsis can raise demand enough to injure a heart with fixed CAD (type 2 MI). (Slide 26)")]),
      C("Unstable angina",
        tbl(["Unstable angina = ACS symptoms with", ""], [
          ["Troponin", "<strong>No elevation</strong>"],
          ["EKG", "<strong>No ST elevation</strong>; may show <strong>ST depression or new T wave inversion</strong>, or nothing definitive"],
          ["Note", "All ACS patients <strong>begin this way</strong>, so the diagnosis <strong>evolves over time</strong>"]]) +
        "<p><strong>Thomas, 4 months later:</strong> his usual pain while only <strong>walking in from the parking lot</strong>; then pain <strong>at rest</strong> on the couch needing <strong>2 nitro</strong>. Office EKG: sinus, <strong>no ST or T changes</strong>. = <strong>unstable angina</strong>.</p>",
        ["ua-trop", "ua-ekg", "ua-evolve", "ua-thomas"],
        [q("In unstable angina, troponin is:", "Not elevated", ["Elevated", "Over 3 times normal", "Always over 1,000"], "Unstable angina is ischemia without cell death, so troponin stays normal. (Slide 28)"),
          q("Which EKG finding excludes unstable angina?", "ST elevation", ["ST depression", "New T wave inversion", "A normal EKG"], "ST elevation means STEMI, which by definition is not unstable angina. (Slide 28)"),
          q("Why does the diagnosis of unstable angina 'evolve over time'?", "All ACS patients begin this way until troponin or ST changes declare themselves", ["It always becomes stable angina", "It is a lifelong label", "It cannot change"], "Every ACS looks like UA at first until troponin or ST elevation shows it is an MI. (Slide 28)")],
        [q("Thomas now gets chest pain walking in from the parking lot and once at rest needing 2 nitro; EKG has no ST or T changes. Diagnosis?", "Unstable angina", ["Stable angina", "STEMI", "Pericarditis"], "New rest pain with no ST change and (implied) normal troponin = unstable angina. (Slide 29)"),
          q("A patient has new rest angina, normal troponins at 0 and 2 hours, and new T wave inversions without ST elevation. Diagnosis?", "Unstable angina", ["NSTEMI", "STEMI", "Stable angina"], "New rest angina with normal troponins and no ST elevation = unstable angina. (Slide 28)")])
    ]),

    S("10-nstemi-stemi", "10. NSTEMI vs STEMI", "Objective 3 (slides 30 to 35): definitions, mechanism, Thomas's two endings, and the ACS summary table.", [
      C("NSTEMI and STEMI",
        tbl(["", "NSTEMI", "STEMI"], [
          ["Symptoms", "Ischemic", "Ischemic"],
          ["<strong>Troponin</strong>", "<strong>Elevated</strong>", "<strong>Elevated</strong>"],
          ["<strong>EKG</strong>", "With or without ischemic changes, <strong>no ST elevation</strong>", "<strong>ST elevation</strong> (the 'hat trick')"],
          ["Thrombus", "<strong>Nonocclusive (partial)</strong>; residual flow", "Often <strong>acute complete occlusion</strong>"],
          ["Infarct", "<strong>Subendocardial</strong> (non-Q-wave)", "<strong>Transmural</strong> (Q-wave)"]]) +
        hy("NSTEMI and UA look alike at first <strong>until hs-troponin rises</strong>.") +
        tbl(["ACS summary", "Coronary flow", "Myocardial injury"], [
          ["<strong>Unstable angina</strong>", "Reduced, often transient", "<strong>None</strong>"],
          ["<strong>NSTEMI</strong>", "Reduced; partial occlusion may occur", "<strong>Acute injury</strong>"],
          ["<strong>STEMI</strong>", "Often <strong>acute occlusion</strong>", "Acute injury with a <strong>qualifying ST-elevation</strong> pattern"]]),
        ["ns-def", "st-hat", "ns-partial", "ns-subendo", "st-trans", "acs-table"],
        [q("NSTEMI requires ischemic symptoms plus:", "Elevated troponin without ST elevation", ["ST elevation", "Normal troponin", "A new murmur"], "NSTEMI = ischemic symptoms plus a troponin rise, without ST elevation. (Slide 30)"),
          q("The STEMI 'hat trick' is:", "Ischemic symptoms, elevated troponin, ST elevation", ["Pain, fever, rash", "Murmur, edema, JVD", "Syncope, bradycardia, hypotension"], "STEMI needs all three: symptoms, troponin rise and ST elevation. (Slide 32)"),
          q("In NSTEMI the thrombus is usually:", "Nonocclusive, with residual flow", ["Completely occlusive", "Absent", "In a vein"], "NSTEMI clots usually don't fully close the artery, so some flow remains. (Slide 31)"),
          q("NSTEMI typically causes which infarct?", "Subendocardial", ["Transmural", "Pericardial", "Valvular"], "Partial flow spares the outer wall, so NSTEMI infarcts the subendocardium. (Slide 31)"),
          q("A Q-wave infarct is:", "Transmural", ["Subendocardial", "Reversible", "Only seen in UA"], "Q waves mean full-thickness (transmural) dead muscle. (Slide 32)"),
          q("Which ACS has no acute myocardial injury?", "Unstable angina", ["NSTEMI", "STEMI", "All have injury"], "Unstable angina is ischemia without cell death, so there is no myocardial injury. (Slide 35)"),
          q("What distinguishes NSTEMI from UA?", "Rising hs-troponin", ["ST elevation", "Chest pain quality", "Age"], "A rising hs-troponin means cells died, which turns UA into NSTEMI. (Slide 30)")],
        [q("Thomas arrives at 11 pm with severe pain unrelieved by 3 NTG; hs-troponin 527 then 1,637 at 90 minutes; lateral T wave inversions. Diagnosis?", "NSTEMI", ["STEMI", "Unstable angina", "Stable angina"], "Rising troponin with T inversions but no ST elevation = NSTEMI. (Slide 33)"),
          q("Same Thomas, but the EKG shows anterolateral ST elevation. Diagnosis and timing?", "STEMI; cath lab within 90 minutes of ER arrival for stent", ["NSTEMI; cath in 5 days", "UA; discharge", "Stable angina; stress test"], "ST elevation = STEMI, and the goal is the cath lab within 90 minutes of arrival. (Slide 34)"),
          q("In the NSTEMI version of Thomas, what was started in the ER before next-morning cath?", "A heparin drip", ["Thrombolytics", "Nothing", "Warfarin only"], "NSTEMI gets anticoagulation (a heparin drip) to stop the clot growing until cath. (Slide 33)")])
    ]),

    S("11-initial-eval", "11. Initial evaluation: history, risk factors, exam, tests", "Objective 4 (slides 36 to 39): OLDCARTS and beyond, risk factors, vascular exam, and first tests.", [
      C("OLDCARTS and beyond",
        tbl(["Letter", "Ask"], [
          ["<strong>O</strong>nset", "When? Sudden or gradual? What were you doing?"], ["<strong>L</strong>ocation", "Where? Can you point to it?"],
          ["<strong>D</strong>uration", "How long each episode? Constant or intermittent?"], ["<strong>C</strong>haracter", "Pressure, tightness, squeezing, heaviness, burning, sharp?"],
          ["<strong>A</strong>ggravating / relieving", "Exertion, stress, meals, position, breathing? Does rest help?"], ["<strong>R</strong>adiation", "Arm, shoulder, jaw, neck, back, epigastrium?"],
          ["<strong>T</strong>iming / pattern", "How often? Change in frequency, duration, severity?"], ["<strong>S</strong>everity", "0 to 10; how does it limit activity?"]]) +
        "<p><strong>Do not stop at OLDCARTS</strong>: ask about associated symptoms (dyspnea, diaphoresis, nausea, palpitations, syncope), prior episodes, CAD risk factors and cardiac history.</p>",
        ["old-letters", "old-beyond"],
        [q("In OLDCARTS, what does the T stand for?", "Timing / pattern", ["Temperature", "Treatment", "Troponin"], "T in OLDCARTS is timing: when it starts, how long it lasts, and its pattern. (Slide 37)"),
          q("In OLDCARTS, 'Can you point to it?' belongs to:", "Location", ["Onset", "Severity", "Character"], "'Point to it' asks about location. (Slide 37)"),
          q("In OLDCARTS, asking about exertion, meals, position and breathing belongs to:", "Aggravating / relieving factors", ["Radiation", "Duration", "Onset"], "What makes it worse or better (exertion, meals, position, breathing) are aggravating/relieving factors. (Slide 37)"),
          q("Beyond OLDCARTS, what else must you ask?", "Associated symptoms, prior episodes, risk factors and cardiac history", ["Nothing else", "Only insurance", "Only allergies"], "Associated symptoms, prior episodes, risk factors and cardiac history complete the chest pain history. (Slide 37)")],
        [q("A patient says his pain is 'like an elephant on my chest.' Which OLDCARTS element is that?", "Character", ["Location", "Timing", "Radiation"], "'Elephant on my chest' describes what the pain feels like: character. (Slide 37)")]),
      C("Risk factors, exam, first tests",
        tbl(["Nonmodifiable", "Modifiable"], [
          ["Age", "Hyperlipidemia"], ["Male sex", "Hypertension"], ["<strong>Family history</strong>: male &lt; 55, female &lt; 65", "Diabetes"],
          ["", "Metabolic syndrome"], ["", "Cigarette smoking"], ["", "Obesity / sedentary lifestyle"], ["", "Excessive alcohol"]]) +
        tbl(["Exam for vascular disease", "First tests"], [
          ["<strong>Carotid bruit</strong>", "<strong>Resting 12-lead EKG</strong> at presentation"],
          ["<strong>Poor peripheral pulses</strong>", "<strong>Serial cardiac troponin</strong>"], ["", "CBC, CMP"], ["", "Tests for the differential, such as <strong>CXR</strong>"]]),
        ["ie-rf", "ie-exam", "ie-tests"],
        [q("Which exam finding suggests systemic vascular disease in a chest pain patient?", "Carotid bruit", ["Clubbing", "Spider angiomas", "Goiter"], "A carotid bruit shows atherosclerosis elsewhere, which makes CAD more likely. (Slide 39)"),
          q("Which troponin strategy is part of the initial testing?", "Serial troponins", ["One troponin a week later", "No troponin", "Troponin only if the EKG shows ST elevation"], "One troponin can be falsely normal early, so troponins are repeated. (Slide 39)"),
          q("Which test helps evaluate the differential of chest pain?", "Chest x-ray", ["Bone scan", "Colonoscopy", "EEG"], "A chest x-ray looks for other causes like pneumothorax, pneumonia or a wide mediastinum. (Slide 39)"),
          q("Which is a nonmodifiable CAD risk factor on the chest pain slide?", "Male sex", ["Obesity", "Metabolic syndrome", "Smoking"], "Male sex is a nonmodifiable CAD risk factor. (Slide 38)")],
        [q("A chest pain patient has diminished pedal pulses and a left carotid bruit. How does this change your thinking?", "Evidence of vascular disease makes CAD more likely", ["It rules out CAD", "It is irrelevant", "It points to GERD"], "Disease in the carotids or legs means atherosclerosis is systemic, so CAD is more likely too. (Slide 39)")])
    ]),

    S("12-ekg", "12. The resting EKG", "Objective 4 (slides 40 to 43): concerning EKG findings and why a normal EKG does not rule out ACS.", [
      C("Concerning EKG findings",
        tbl(["Finding", "How worrying"], [
          ["<strong>T wave inversion</strong>", "<strong>Nonspecific</strong>"],
          ["<strong>ST depression</strong>", "<strong>Maybe</strong>"],
          ["<strong>ST elevation</strong>", "<strong>Definitive</strong>"],
          ["<strong>New LBBB</strong>", "Concerning"],
          ["<strong>LVH and PVCs</strong>", "Concerning"]]) +
        hy("<strong>A normal initial EKG does not rule out ACS.</strong> Repeat EKGs when symptoms persist or recur, or suspicion stays high."),
        ["ekg-twi", "ekg-std", "ekg-ste", "ekg-lbbb", "ekg-normal", "ekg-serial"],
        [q("Which resting EKG finding is definitive for ischemia?", "ST elevation", ["T wave inversion", "ST depression", "PVCs"], "ST elevation is the one resting EKG finding that is definitive for ischemia (injury). (Slide 40)"),
          q("T wave inversion on the resting EKG is:", "Nonspecific", ["Definitive", "Always normal", "Diagnostic of pericarditis"], "T inversions have many causes, so on their own they are nonspecific. (Slide 40)"),
          q("ST depression on the resting EKG is described as:", "Maybe", ["Definitive", "Irrelevant", "Normal"], "ST depression may be ischemia but has other causes, so the slide calls it 'maybe'."),
          q("Which bundle branch finding is concerning for ischemia?", "New left bundle branch block", ["Old right bundle branch block", "Incomplete RBBB", "None"], "A new LBBB can hide or reflect an acute MI, so it is treated as concerning. (Slide 40)"),
          q("Does a normal first EKG rule out ACS?", "No", ["Yes", "Only in women", "Only if troponin is not drawn"], "Up to half of early MIs have a normal first EKG, so it never rules out ACS. (Slide 41)"),
          q("When should serial EKGs be obtained?", "When symptoms persist or recur, or suspicion remains high", ["Never", "Only after discharge", "Only once a year"], "Repeat the EKG when pain persists or recurs, because ischemic changes can appear later. (Slide 41)")],
        [q("A 55-year-old with ongoing chest pressure has a normal first EKG. Next step?", "Serial EKGs, since a normal EKG does not rule out ACS", ["Discharge", "Stress test immediately", "Reassure only"], "A normal first EKG doesn't exclude ACS, so repeat EKGs while the pain continues. (Slide 41)")])
    ]),

    S("13-troponin", "13. Troponin", "Objective 4 (slides 44 to 46): what troponin is, why it rises, timing, accuracy and the CKD trap.", [
      C("Troponin basics",
        ul(["Troponin is a muscle protein with three subunits: <strong>T, C and I</strong>.",
          "It spills from <strong>damaged myocytes</strong> during ischemia; it can also <strong>leak with significant cardiac stress</strong>: <strong>tachyarrhythmias, RV failure from PE, decompensated HF</strong>.",
          "<strong>Troponin I</strong> is found <strong>only in cardiac cells</strong>: the <strong>most specific</strong>.",
          "Detectable <strong>4 to 6 hours</strong> after ischemia begins; peaks, then stays elevated at low levels for <strong>7 to 10 days</strong> (regular assay)."]) +
        tbl(["Accuracy (in the right setting)", ""], [["Sensitivity", "<strong>50% at 4 hours, 97% at 6 hours</strong>"], ["Specificity", "<strong>95%</strong>"]]) +
        hy("Troponin is <strong>chronically elevated in ESRD and CKD stage 4</strong> (impaired clearance): compare with a <strong>prior baseline</strong>. An <strong>early</strong> first troponin can be <strong>normal</strong>."),
        ["tn-subunits", "tn-leak", "tn-i-specific", "tn-timing", "tn-accuracy", "tn-ckd", "tn-early"],
        [q("Which three subunits make up troponin?", "T, C and I", ["A, B and C", "I, II and III", "Alpha, beta, gamma"], "Troponin has three subunits: T, C and I. (Slide 44)"),
          q("Which troponin is the most specific for cardiac muscle damage?", "Troponin I", ["Troponin C", "Myoglobin", "CK total"], "Troponin I is found only in cardiac muscle, making it the most cardiac-specific. (Slide 45)"),
          q("Troponin I becomes detectable how long after ischemia starts?", "4 to 6 hours", ["5 minutes", "24 to 48 hours", "1 week"], "Troponin I takes 4 to 6 hours to rise, which is why an early level can be normal. (Slide 45)"),
          q("How long can troponin stay elevated after an event on a regular assay?", "7 to 10 days", ["1 hour", "1 day", "3 months"], "Troponin stays up for 7 to 10 days, so it can still catch an MI days later. (Slide 45)"),
          q("Troponin sensitivity at 6 hours:", "97%", ["50%", "75%", "20%"], "By 6 hours troponin is about 97% sensitive, once it has had time to rise. (Slide 46)"),
          q("Troponin sensitivity at 4 hours:", "50%", ["97%", "10%", "100%"], "At 4 hours troponin is only about 50% sensitive because many MIs haven't leaked yet. (Slide 46)"),
          q("Troponin specificity for MI in the right setting:", "95%", ["50%", "70%", "30%"], "In the right clinical setting a positive troponin is about 95% specific for MI. (Slide 46)"),
          q("Why is troponin chronically elevated in ESRD and CKD stage 4?", "Impaired clearance", ["Constant MIs", "Lab error", "Dialysis makes it"], "The kidneys clear troponin, so CKD 4 and ESRD keep it chronically high. (Slide 46)"),
          q("Which noncoronary condition can make troponin leak?", "RV failure from pulmonary embolism", ["Simple GERD", "Migraine", "Ankle sprain"], "A PE can strain and injure the RV, which leaks troponin without coronary blockage. (Slide 44)")],
        [q("A dialysis patient with chest pain has a troponin slightly above the lab normal. How do you interpret it?", "Compare with his prior baseline, since troponin is chronically elevated in ESRD", ["Diagnose STEMI", "Ignore all troponins in ESRD", "It proves NSTEMI"], "ESRD raises baseline troponin, so compare with his prior values and look for a change. (Slide 46)"),
          q("A patient arrives 45 minutes after chest pain began; first troponin is normal. Is MI ruled out?", "No; an early troponin can be normal, so repeat it", ["Yes", "Yes, if he is under 50", "Yes, if the EKG is normal"], "Troponin takes hours to rise, so a normal level at 45 minutes must be repeated. (Slide 46)"),
          q("A patient in AF with a rate of 170 has a mild troponin rise but no chest pain. Possible explanation?", "Troponin leak from cardiac stress of a tachyarrhythmia", ["Definite plaque rupture", "Lab contamination", "Pericarditis only"], "A fast rate raises demand and can leak troponin without a blocked artery. (Slide 44)")])
    ]),

    S("14-hs-troponin", "14. High-sensitivity troponin", "Objective 4 (slides 47 to 50): what makes an assay high sensitivity, NPV vs PPV, and the single and serial rule-out rules.", [
      C("hs-troponin: precision, NPV and the trade-off",
        ul(["The <strong>2021 ACC guidelines</strong> recommend <strong>hs-troponin</strong> for chest pain evaluation.",
          "Same molecule as traditional assays, measured <strong>more precisely at lower concentrations</strong>.",
          "To qualify, the assay must detect troponin in <strong>&gt; 50% of normal individuals</strong>.",
          "<strong>Higher sensitivity → higher negative predictive value</strong>: no rise, no acute MI. Quickly finds patients at very low risk of <strong>30-day MACE</strong>.",
          "Cost: <strong>lower specificity → lower positive predictive value</strong>: more noncardiac patients with detectable troponin get evaluated."]) +
        tbl(["Rule-out", "Rule"], [
          ["<strong>Single value</strong>", "Presenting <strong>&gt; 2 hours</strong> after symptom onset and below the <strong>sex-specific 99th percentile</strong>: concern for ACS falls substantially"],
          ["<strong>Delta</strong>", "Two levels <strong>90 to 120 minutes apart</strong>, both below the sex-specific 99th percentile with minimal change → <strong>discharge home</strong>"]]),
        ["hs-2021", "hs-precise", "hs-50pct", "hs-npv", "hs-ppv", "hs-single", "hs-delta"],
        [q("Which year's ACC guideline recommended hs-troponin for chest pain?", "2021", ["1999", "2010", "2030"], "The 2021 ACC/AHA chest pain guideline made hs-troponin the preferred test. (Slide 47)"),
          q("Do hs and traditional troponin assays measure different molecules?", "No; the same molecule, more precisely", ["Yes, completely different", "hs measures CK-MB", "hs measures BNP"], "hs assays measure the same troponin, just able to detect much lower levels. (Slide 47)"),
          q("An hs-troponin assay must detect troponin in what share of normal people?", "More than 50%", ["Less than 1%", "Exactly 10%", "None"], "To count as high-sensitivity, an assay must detect troponin in over half of healthy people. (Slide 47)"),
          q("The main strength of hs-troponin is its high:", "Negative predictive value", ["Positive predictive value", "Specificity", "Cost"], "hs-troponin is so sensitive that a negative result very reliably rules MI out. (Slide 48)"),
          q("The trade-off of hs-troponin's sensitivity is lower:", "Specificity and positive predictive value", ["Sensitivity", "Negative predictive value", "Precision"], "Detecting tiny amounts catches non-MI troponin leaks too, so specificity and PPV drop. (Slide 49)"),
          q("A single hs-troponin can substantially lower ACS concern if the patient presents how long after symptom onset?", "More than 2 hours", ["Within 10 minutes", "Exactly 30 minutes", "Over 1 week"], "After 2 hours troponin has had time to rise, so one low hs-troponin is reassuring. (Slide 50)"),
          q("Serial hs-troponins for the delta are drawn how far apart?", "90 to 120 minutes", ["6 to 12 hours", "24 hours", "5 minutes"], "The delta (change) is measured on samples 90 to 120 minutes apart. (Slide 50)"),
          q("The hs-troponin cutoff for rule-out is the:", "Sex-specific 99th percentile", ["50th percentile for everyone", "Lab maximum", "Any detectable level"], "Rule-out uses the sex-specific 99th percentile, since women's normal levels are lower. (Slide 50)"),
          q("hs-troponin helps identify patients at very low risk of 30-day:", "Major adverse cardiac events (MACE)", ["Stroke only", "Cancer", "Infection"], "Normal hs-troponins identify patients at very low 30-day MACE risk who can go home. (Slide 48)")],
        [q("A woman with chest pain that started 4 hours ago has a single hs-troponin below the female 99th percentile and a nonischemic EKG. What does this do?", "Substantially lessens concern for ACS", ["Diagnoses NSTEMI", "Mandates cath", "Means nothing"], "A single hs-troponin under the 99th percentile more than 2 hours after onset strongly lowers ACS concern. (Slide 50)"),
          q("A healthy 30-year-old has a detectable hs-troponin below the 99th percentile. Abnormal?", "No; hs assays detect troponin in more than half of normal people", ["Yes; any detectable level is MI", "Yes; it means myocarditis", "It means lab error"], "hs assays detect troponin in over half of normal people, so a value below the 99th percentile is normal. (Slides 47 and 49)"),
          q("Two hs-troponins 2 hours apart are both under the 99th percentile with minimal change; EKG nonischemic. Disposition?", "Discharge home", ["Emergent cath", "ICU admission", "Thrombolytics"], "Two low hs-troponins with no change and a nonischemic EKG rule out MI, so discharge is safe. (Slide 50)")])
    ]),

    S("15-bnp", "15. BNP", "Objective 4 (slides 51 to 52): what BNP is, what it does, and when it is not helpful.", [
      C("BNP and NT-proBNP",
        ul(["Named for the <strong>brain</strong>, but released mainly from the <strong>cardiac ventricles</strong>.",
          "Cleavage of the prohormone makes <strong>active BNP</strong> and <strong>inert NT-proBNP</strong>. Facilities usually measure one; <strong>levels are not comparable</strong>.",
          "Released more in <strong>decompensated HF</strong>, in response to <strong>high ventricular filling pressures</strong>, to promote <strong>sodium wasting</strong>.",
          "Effects: <strong>diuretic and natriuretic</strong>, <strong>inhibits RAAS and sympathetic activity</strong>, <strong>positive inotropy</strong>.",
          "<strong>Renally cleared</strong>: <strong>not helpful in AKI or significant CKD</strong> (always elevated)."]),
        ["bnp-source", "bnp-nt", "bnp-trigger", "bnp-effects", "bnp-renal"],
        [q("BNP is released mainly from the:", "Cardiac ventricles", ["Brain", "Atria only", "Kidneys"], "BNP comes mainly from stretched ventricular myocytes. (Slide 51)"),
          q("Which BNP product is biologically inert?", "NT-proBNP", ["BNP", "ANP", "Troponin"], "NT-proBNP is the inactive fragment cleaved off when BNP is made. (Slide 51)"),
          q("Can BNP and NT-proBNP values be compared directly?", "No", ["Yes, they are identical", "Only in men", "Only in children"], "BNP and NT-proBNP have different ranges and half-lives, so they can't be compared. (Slide 51)"),
          q("What triggers BNP release in decompensated HF?", "High ventricular filling pressures", ["Low blood sugar", "Hypothermia", "Plaque rupture"], "BNP is released when the ventricles are stretched by high filling pressures. (Slide 52)"),
          q("Which is an effect of BNP?", "Inhibits RAAS and sympathetic activity", ["Activates RAAS", "Causes sodium retention", "Causes vasoconstriction"], "BNP counteracts HF by blocking RAAS and sympathetic drive and promoting natriuresis. (Slide 52)"),
          q("Why is BNP unhelpful in AKI or significant CKD?", "It is renally cleared, so it is always elevated", ["It is never made", "It is destroyed by dialysis", "It only rises in the liver"], "BNP is cleared by the kidneys, so kidney failure raises it regardless of HF. (Slide 52)")],
        [q("A dyspneic patient with eGFR 18 has a high BNP. How useful is it for diagnosing HF?", "Not helpful; BNP is always elevated in significant CKD", ["Diagnostic of HF", "Rules out HF", "Proves MI"], "With eGFR 18 BNP is always high from poor clearance, so it can't diagnose HF. (Slide 52)")])
    ]),

    S("16-ed-steps-stemi", "16. ED: the first steps and STEMI", "Objective 4 (slides 53 to 56): triage, EKG within 10 minutes, labs and first drugs, and the STEMI pathway.", [
      C("Steps 1 to 3",
        tbl(["Step", "What"], [
          ["<strong>1. Arrival and triage</strong>", "ABCs, vitals, O2 sat, stability; look for <strong>severe pain, hypotension, respiratory distress, syncope</strong>; focused history; consider <strong>aortic dissection, PE, tension pneumothorax</strong>"],
          ["<strong>2. 12-lead EKG within 10 minutes</strong>", "Of arrival or first medical contact; look for ST elevation; serial EKGs if nondiagnostic; <strong>do not wait for troponin</strong> when the EKG and picture show acute occlusion"],
          ["<strong>3. Labs and treatment</strong>", "<strong>hs-troponin</strong>; CBC, electrolytes/renal, glucose; <strong>chewable aspirin 325 mg</strong>; <strong>SL nitroglycerin</strong> for ongoing pain if hemodynamically appropriate; <strong>oxygen only for hypoxemia</strong> (not routinely if sat &gt; 90%)"]]) +
        mn("EKG in <strong>10</strong>; aspirin <strong>325</strong> chewed; O2 only under <strong>90</strong>."),
        ["ed-triage", "ed-mimics", "ed-ekg10", "ed-nowait", "ed-asa", "ed-ntg", "ed-o2"],
        [q("Within how many minutes should the 12-lead EKG be obtained and read?", "10 minutes", ["30 minutes", "60 minutes", "2 hours"], "The 12-lead must be done and read within 10 minutes to catch a STEMI fast. (Slide 54)"),
          q("What aspirin dose is given when ACS is suspected?", "Chewable 325 mg", ["81 mg swallowed", "1 g IV", "No aspirin"], "Chewing 325 mg of aspirin gets fast antiplatelet effect to stop clot growth. (Slide 55)"),
          q("When should oxygen be given in suspected ACS?", "For hypoxemia; not routinely if sat is over 90%", ["To everyone at 15 L", "Never", "Only after discharge"], "Oxygen helps only if hypoxemic; routine O2 with a sat over 90% gives no benefit. (Slide 55)"),
          q("Which life-threatening mimics should be considered at triage?", "Aortic dissection, PE, tension pneumothorax", ["GERD, gastritis, gallstones", "Costochondritis and shingles", "Anxiety only"], "Dissection, PE and tension pneumothorax can mimic ACS and kill quickly, so think of them at triage. (Slide 53)"),
          q("Should reperfusion wait for the troponin when the EKG shows acute occlusion?", "No", ["Yes, always", "Only in women", "Only at night"], "Acute occlusion on EKG means 'time is muscle', so reperfusion never waits for troponin. (Slide 54)"),
          q("When is SL nitroglycerin appropriate in suspected ACS?", "For ongoing ischemic pain if hemodynamically appropriate", ["For everyone regardless of BP", "Only after cath", "Never"], "SL nitro is for ongoing ischemic pain as long as BP allows (no hypotension or RV infarct). (Slide 55)")],
        [q("A patient with chest pain has O2 sat 97% on room air. Should you start oxygen?", "No; oxygen is for hypoxemia only", ["Yes, 15 L non-rebreather", "Yes, always in ACS", "Only if he asks"], "With a sat of 97% oxygen adds nothing; it is only for hypoxemia. (Slide 55)"),
          q("A patient's first EKG shows anterior ST elevation; the troponin will take 45 minutes. What do you do?", "Activate the STEMI pathway now without waiting for troponin", ["Wait for troponin", "Repeat EKG in 6 hours", "Order a stress test"], "ST elevation is the diagnosis, so activate the STEMI pathway without waiting for troponin. (Slides 54 and 56)")]),
      C("STEMI pathway",
        ul(["<strong>ST elevation in 2 or more contiguous leads</strong> with an ischemic clinical picture = <strong>STEMI</strong>.",
          "<strong>Urgently notify interventional cardiology</strong>; activate the <strong>STEMI / primary PCI</strong> pathway.",
          "Give <strong>aspirin</strong> and a <strong>P2Y12 inhibitor</strong>: <strong>ticagrelor or prasugrel preferred over clopidogrel</strong> for PCI.",
          "To the <strong>cath lab</strong> for angiography and <strong>primary PCI</strong>."]),
        ["stemi-def", "stemi-activate", "stemi-p2y12", "stemi-pci"],
        [q("STEMI requires ST elevation in at least how many contiguous leads?", "2", ["1", "4", "6"], "STEMI needs ST elevation in at least 2 contiguous leads (same territory). (Slide 56)"),
          q("Which P2Y12 inhibitors are generally preferred over clopidogrel for PCI?", "Ticagrelor or prasugrel", ["Warfarin or apixaban", "Heparin or enoxaparin", "Aspirin or NSAIDs"], "Ticagrelor and prasugrel act faster and stronger than clopidogrel, so they're preferred for PCI. (Slide 56)"),
          q("After diagnosing STEMI, who is notified urgently?", "Interventional cardiology", ["Dermatology", "Physical therapy", "The patient's dentist"], "STEMI needs emergent PCI, so interventional cardiology is called right away. (Slide 56)")],
        [q("A 59-year-old has 1 hour of crushing pain and 3 mm ST elevation in II, III and aVF. Best management sequence?", "Aspirin, P2Y12 inhibitor, activate STEMI pathway, primary PCI", ["Stress test", "Discharge with NTG", "Repeat troponin in 6 hours then decide"], "Inferior STEMI: aspirin, P2Y12 inhibitor, STEMI activation, then primary PCI. (Slide 56)")])
    ]),

    S("17-ed-nste", "17. ED: no ST elevation and ongoing pain", "Objective 4 (slides 57 to 60): serial hs-troponin, repeat EKGs, nitrates, beta blockers and anticoagulation.", [
      C("Non-ST-elevation workup and treatment",
        ul(["EKG normal or not STEMI: <strong>hs-troponin now and again in 1 to 2 hours</strong>.",
          "H&amp;P and troponin highly suggestive of ACS: <strong>cardiologist to the ER bedside</strong>.",
          "Ongoing pain: <strong>repeat EKG every 10 to 20 minutes</strong> to catch a STEMI.",
          "Highly suggestive patients are usually <strong>admitted by the hospitalist</strong> for UA/NSTEMI with cardiology consult."]) +
        tbl(["Ongoing ischemic pain", ""], [
          ["<strong>SL nitroglycerin</strong>", "Symptom relief if hemodynamically stable"],
          ["<strong>IV nitroglycerin</strong>", "Persistent pain despite SL, <strong>hypertension</strong>, or <strong>pulmonary edema</strong>"],
          ["<strong>Oral beta blocker</strong>", "Start <strong>within 24 hours</strong> in ACS if no contraindications"]]) +
        tbl(["Anticoagulation for diagnosed ACS", ""], [
          ["Start", "<strong>Parenteral anticoagulation</strong> unless contraindicated"],
          ["Options", "<strong>Unfractionated heparin (UFH)</strong> or <strong>enoxaparin (LMWH)</strong>"],
          ["Choice depends on", "ACS type, strategy, <strong>renal function</strong>, circumstances"]]) +
        "<p>Keep evaluating other or concurrent causes; reassess symptoms, EKG, hemodynamics and biomarkers.</p>",
        ["nste-trop", "nste-cards", "nste-ekg", "nste-admit", "nste-ntg", "nste-ivntg", "nste-bb", "nste-ac"],
        [q("With no ST elevation, when is the hs-troponin repeated?", "In 1 to 2 hours", ["In 24 hours", "In 1 week", "Never"], "Without ST elevation, repeat hs-troponin in 1 to 2 hours to see the delta. (Slide 57)"),
          q("How often are repeat EKGs obtained in the ER patient with continuing chest pain?", "Every 10 to 20 minutes", ["Every 6 hours", "Once a day", "Only at discharge"], "Ongoing pain can evolve into STEMI, so repeat the EKG every 10 to 20 minutes. (Slide 58)"),
          q("When may IV nitroglycerin be considered?", "Persistent pain despite SL, hypertension, or pulmonary edema", ["Hypotension", "Right ventricular infarct with low BP", "Never"], "IV nitro is for pain not relieved by SL nitro, hypertension or pulmonary edema. (Slide 59)"),
          q("When should an oral beta blocker be started in ACS?", "Within 24 hours if no contraindications", ["Only after 1 month", "Never", "Only IV in all patients"], "An oral beta blocker in the first 24 hours lowers demand, if there are no contraindications. (Slide 59)"),
          q("Which anticoagulants are options for diagnosed ACS?", "Unfractionated heparin or enoxaparin", ["Warfarin or aspirin", "Apixaban or rivaroxaban only", "Clopidogrel or prasugrel"], "UFH or enoxaparin stops clot propagation in diagnosed ACS. (Slide 60)"),
          q("Which service typically admits patients highly suggestive of UA/NSTEMI?", "Hospitalist with cardiology consultation", ["Psychiatry", "Surgery only", "No admission"], "UA/NSTEMI is admitted by the hospitalist with cardiology consulting. (Slide 58)"),
          q("Which factor influences UFH vs enoxaparin choice?", "Renal function", ["Hair color", "Height", "Blood type"], "Enoxaparin is renally cleared, so poor kidney function favors UFH. (Slide 60)")],
        [q("An NSTEMI patient has persistent pain after 3 SL nitro, BP 170/96 and crackles. Which therapy fits?", "IV nitroglycerin", ["Stop all nitrates", "Discharge", "IV fluids bolus"], "IV nitro fits ongoing pain despite SL nitro plus hypertension and pulmonary edema. (Slide 59)"),
          q("A patient with NSTEMI is being admitted; no contraindications. Which anticoagulant step is next?", "Start parenteral anticoagulation (UFH or enoxaparin)", ["No anticoagulation", "Warfarin only", "Thrombolytics only"], "Admitted NSTEMI gets parenteral anticoagulation (UFH or enoxaparin) to stop clot growth. (Slide 60)")])
    ]),

    S("18-heart-score", "18. The HEART score", "Objective 5 (slides 61 to 64): scoring the five components and what each risk band means.", [
      C("Scoring HEART",
        "<p>Many ER patients become <strong>pain-free</strong>; ongoing ischemia is unlikely, but they still need risk stratification: home with follow-up, or a <strong>23-hour observation</strong> rule-out? (Slide 62 pathway: obvious noncardiac → no cardiac testing; possible ACS → troponin → <strong>clinical decision pathway</strong> → low risk = discharge, intermediate = further testing, high risk = invasive angiography.)</p>" +
        tbl(["Component", "2 points", "1 point", "0 points"], [
          ["<strong>H</strong>istory", "Highly suspicious", "Moderately suspicious", "Not suspicious"],
          ["<strong>E</strong>KG", "<strong>Significant ST depression</strong>", "Nonspecific repolarization, <strong>new LBBB, LVH</strong>", "Normal"],
          ["<strong>A</strong>ge", "<strong>65+</strong>", "<strong>45 to 64</strong>", "<strong>&lt; 45</strong>"],
          ["<strong>R</strong>isk factors", "<strong>3 or more</strong>, or <strong>known CAD</strong>", "1 to 2", "None"],
          ["<strong>T</strong>roponin", "<strong>&gt; 3× normal</strong>", "<strong>1 to 3×</strong> normal", "Normal"]]) +
        tbl(["Score", "Risk", "What to do"], [
          ["<strong>0 to 3</strong>", "<strong>Low</strong>", "If EKG and troponins reassuring, <strong>discharge</strong> may be appropriate; no routine urgent cardiac testing"],
          ["<strong>4 to 6</strong>", "<strong>Intermediate</strong>", "Serial hs-troponins; ED or inpatient <strong>observation</strong>; consider <strong>CCTA or stress testing</strong>"],
          ["<strong>7 to 10</strong>", "<strong>High</strong>", "Urgent evaluation; usually <strong>hospital-level care</strong>"]]) +
        mn("<strong>3 / 6 / 10</strong>: 0-3 go home, 4-6 observe, 7-10 admit."),
        ["hs-why", "heart-h", "heart-e", "heart-a", "heart-r", "heart-t", "heart-bands"],
        [q("What do the HEART letters stand for?", "History, EKG, Age, Risk factors, Troponin", ["Heart rate, Echo, Angina, Rhythm, Temperature", "Hypertension, Exercise, Alcohol, Race, Tobacco", "History, Exam, Auscultation, Rales, Tachycardia"], "HEART = History, EKG, Age, Risk factors, Troponin. (Slide 63)"),
          q("HEART score age points for a 70-year-old:", "2", ["0", "1", "3"], "Age 65 or older scores 2 points. (Slide 63)"),
          q("HEART score age points for a 50-year-old:", "1", ["0", "2", "3"], "Age 45 to 64 scores 1 point. (Slide 63)"),
          q("HEART score EKG points for significant ST depression:", "2", ["0", "1", "3"], "Significant ST depression is the high-risk EKG finding, 2 points. (Slide 63)"),
          q("HEART score EKG points for new LBBB or LVH:", "1", ["0", "2", "3"], "LBBB, LVH or repolarization changes are nonspecific EKG findings, 1 point. (Slide 63)"),
          q("HEART score risk factor points for known CAD:", "2", ["0", "1", "3"], "Known atherosclerotic disease (or 3+ risk factors) scores 2 points. (Slide 63)"),
          q("HEART score troponin points for 1 to 3 times normal:", "1", ["0", "2", "3"], "Troponin 1 to 3 times normal scores 1 point. (Slide 63)"),
          q("HEART score troponin points for more than 3 times normal:", "2", ["1", "0", "3"], "Troponin over 3 times normal scores 2 points. (Slide 63)"),
          q("A HEART score of 0 to 3 is:", "Low risk", ["Intermediate risk", "High risk", "Invalid"], "HEART 0 to 3 is low risk, about 1-2% MACE. (Slide 64)"),
          q("A HEART score of 4 to 6 is:", "Intermediate risk", ["Low risk", "High risk", "Normal"], "HEART 4 to 6 is intermediate risk. (Slide 64)"),
          q("A HEART score of 7 to 10 is:", "High risk", ["Low risk", "Intermediate risk", "Normal"], "HEART 7 to 10 is high risk and usually goes to early invasive care. (Slide 64)"),
          q("Management for intermediate HEART risk:", "Serial hs-troponins, observation, consider CCTA or stress testing", ["Discharge without follow-up", "Emergent CABG", "Thrombolytics"], "Intermediate risk gets serial troponins, observation and noninvasive testing like CCTA or stress. (Slide 64)")],
        [q("A 40-year-old with a moderately suspicious history, normal EKG, one risk factor and a normal troponin. HEART score and risk?", "2; low risk", ["5; intermediate", "7; high", "0; low"], "Slides 63 and 64: H1 E0 A0 R1 T0."),
          q("A 68-year-old with known CAD, highly suspicious history, ST depression and troponin 2 times normal. HEART score?", "9; high risk", ["4; intermediate", "6; intermediate", "2; low"], "Slide 63: H2 E2 A2 R2 T1."),
          q("A 55-year-old with a moderately suspicious history, nonspecific repolarization changes, 2 risk factors and a normal troponin. HEART score and next step?", "4; intermediate, observe and consider CCTA or stress testing", ["2; discharge", "8; emergent cath", "0; no follow-up"], "Slides 63 and 64: H1 E1 A1 R1 T0.")])
    ]),

    S("19-heart-pathway", "19. Inpatient evaluation and the HEART Pathway", "Objectives 4 and 5 (slides 65 to 72): admitted rule-out, troponin timing, what negative results mean, the HEART Pathway, and disposition.", [
      C("Inpatient troponin timing and what negatives mean",
        ul(["The inpatient team reviews the ED workup, takes more history, re-examines, reviews EKGs and prior testing, and continues <strong>cardiac monitoring</strong> when indicated."]) +
        tbl(["Assay", "Timing"], [
          ["<strong>hs-troponin (preferred)</strong>", "At presentation; repeat in <strong>1 to 2 hours</strong>; if intermediate risk, again at <strong>3 to 6 hours</strong>"],
          ["<strong>Conventional troponin</strong>", "At presentation; repeat in <strong>3 to 6 hours</strong>"]]) +
        "<p>Look at the <strong>pattern of change (rise or fall)</strong> with the clinical picture and EKG.</p>" +
        hy("Nonischemic EKG + negative serial hs-troponins: \"an <strong>acute MI is unlikely or ruled out</strong>. However, you <strong>may still have CAD</strong> that could explain your symptoms; we need to decide if more testing is appropriate.\""),
        ["ip-team", "ip-hs", "ip-conv", "ip-pattern", "ip-meaning"],
        [q("Inpatient hs-troponin timing after the first value:", "Repeat in 1 to 2 hours, and at 3 to 6 hours if intermediate risk", ["Repeat in 24 hours only", "Never repeat", "Every 5 minutes"], "hs-troponin repeats at 1 to 2 hours, and again at 3 to 6 hours if risk is intermediate. (Slide 66)"),
          q("Conventional troponin is repeated after:", "3 to 6 hours", ["15 minutes", "1 week", "Never"], "Conventional troponin rises slower, so it is repeated after 3 to 6 hours. (Slide 66)"),
          q("Which assay is preferred inpatient?", "High-sensitivity troponin", ["Conventional troponin", "CK-MB only", "Myoglobin only"], "hs-troponin is preferred because it rules MI in or out faster. (Slide 66)"),
          q("A nonischemic EKG with negative serial hs-troponins means:", "Acute MI is unlikely or ruled out, but CAD is still possible", ["CAD is ruled out entirely", "The patient had a STEMI", "No follow-up is ever needed"], "Negative troponins mean no MI now, but stable CAD can still be there. (Slide 68)"),
          q("Besides the values, what about serial troponins matters?", "The pattern of rise or fall", ["Only the color of the tube", "Only the first value", "Only the last value"], "A rise or fall pattern means acute injury; a flat level suggests chronic elevation. (Slide 66)")],
        [q("After negative serial hs-troponins and a normal EKG, a patient asks, 'So my heart is fine?' Best answer?", "A heart attack is unlikely, but you may still have CAD; we will decide on more testing", ["Yes, your heart is perfect", "You definitely have CAD", "You need CABG"], "Negative troponins rule out an MI, not CAD itself, so more testing may still be needed. (Slide 68)")]),
      C("HEART score vs HEART Pathway; who goes home",
        tbl(["", "HEART score", "HEART Pathway"], [
          ["What", "<strong>Risk score (0 to 10)</strong>", "<strong>Clinical decision pathway</strong>"],
          ["Uses", "History, ECG, Age, Risk factors, Troponin", "HEART (or modified) score <strong>plus EKG and serial troponins</strong>"],
          ["Low risk", "Score 0 to 3", "<strong>Score ≤ 3</strong>, <strong>no ischemic EKG changes</strong>, <strong>negative serial troponins</strong>; original pathway also <strong>excludes known CAD</strong>"]]) +
        "<p><strong>Low-risk definition:</strong> estimated <strong>30-day risk of death or MACE below 1%</strong> by a validated pathway.</p>" +
        tbl(["", "Low risk", "Intermediate risk"], [
          ["Patient", "Nonischemic EKG; negative hs-troponin pathway; 30-day risk &lt; 1%", "Nonischemic or nondiagnostic EKG; no acute MI on serial troponins; <strong>persistent concern for CAD</strong>"],
          ["Plan", "<strong>Discharge</strong>; no routine admission; <strong>no urgent stress test or CCTA</strong>; outpatient follow-up; address risk factors", "<strong>Observation or admission</strong>; <strong>CCTA</strong> (anatomy) or <strong>stress imaging</strong> (inducible ischemia), chosen by patient"]]),
        ["hp-def", "hp-criteria", "hp-cad", "hp-1pct", "disp-low", "disp-int"],
        [q("The HEART Pathway combines the HEART score with:", "A nonischemic EKG and negative serial troponins", ["A CAC score", "A BNP", "A chest x-ray only"], "The HEART Pathway = HEART score plus a nonischemic EKG and negative serial troponins. (Slide 69)"),
          q("Low risk in the HEART Pathway is a 30-day risk of death or MACE below:", "1%", ["10%", "5%", "25%"], "Low risk on the HEART Pathway means under 1% 30-day death or MACE. (Slide 69)"),
          q("Which patients does the original HEART Pathway exclude from low risk?", "Patients with known CAD", ["Women", "Patients under 45", "Nonsmokers"], "The original HEART Pathway does not apply to known CAD, so they can't be called low risk. (Slide 70)"),
          q("Is the HEART score a pathway or a score?", "A risk-stratification score", ["A clinical decision pathway", "A troponin assay", "An imaging test"], "HEART is a score; the HEART Pathway adds the EKG and serial troponins. (Slide 70)"),
          q("Low-risk chest pain patients need:", "Outpatient follow-up, no urgent stress test or CCTA", ["Urgent stress test before discharge", "Admission to ICU", "Emergent cath"], "Low-risk patients go home with outpatient follow-up; urgent testing adds nothing. (Slide 71)"),
          q("Intermediate-risk patients with persistent concern for CAD get:", "Observation or admission with CCTA or stress imaging", ["Discharge without testing", "Thrombolytics", "Immediate CABG"], "Intermediate risk with ongoing concern gets observation with CCTA or stress imaging. (Slide 72)"),
          q("CCTA in the intermediate group assesses:", "Coronary anatomy", ["Inducible ischemia directly", "Valve gradients", "Lung nodules"], "CCTA shows the coronary anatomy: plaque and stenosis. (Slide 72)")],
        [q("A 42-year-old without known CAD has HEART score 2, nonischemic EKG and negative serial hs-troponins. Disposition?", "Discharge with outpatient follow-up", ["Admit for stress test", "Emergent cath", "ICU"], "Low HEART score, nonischemic EKG and negative troponins = discharge with follow-up. (Slides 69 and 71)"),
          q("A 60-year-old with known CAD has a HEART score of 3 and negative troponins. Does he meet the original HEART Pathway low-risk criteria?", "No; the original pathway excludes known CAD", ["Yes; score is 3", "Yes; troponins are negative", "Only if he is a woman"], "Known CAD is excluded from the original HEART Pathway's low-risk group. (Slide 70)")])
    ]),

    S("20-noninvasive-testing", "20. CCTA, stress testing and pretest probability", "Objective 6 (slides 73 to 80): CCTA strengths and limits, stress testing types, pretest probability and the 15% line.", [
      C("CCTA vs stress testing",
        tbl(["", "CCTA", "Stress test"], [
          ["What", "CT with <strong>IV contrast</strong>: coronary <strong>anatomy and plaque</strong>, degree of stenosis", "Looks for <strong>inducible ischemia</strong> in <strong>clinically stable</strong> suspected or known CAD"],
          ["Used in", "Stable chest pain, <strong>intermediate to high</strong> likelihood, <strong>no known CAD</strong>", "Outpatient stable patients with symptoms of stable angina, <strong>not active chest pain</strong>"],
          ["Strength", "Sees <strong>calcified and noncalcified</strong> plaque; a <strong>normal study makes obstructive CAD very unlikely</strong>", "Raises O2 demand or alters coronary flow to test perfusion"],
          ["Limits", "Contrast; <strong>heavy calcium, irregular or rapid rate</strong>, poor HR control; <strong>does not show whether a lesion causes ischemia</strong>", ""]]) +
        tbl(["Stress approaches", "With or without imaging"], [
          ["<strong>Exercise</strong> or <strong>pharmacologic</strong>", "<strong>Exercise ECG alone</strong>; <strong>stress echo</strong>; <strong>nuclear MPI</strong>; <strong>stress cardiac MRI</strong>"]]) +
        hy("CCTA = <strong>anatomy</strong>; stress test = <strong>function</strong> (is there ischemia?)."),
        ["ccta3-what", "ccta3-use", "ccta3-normal", "ccta3-limits", "stress3-what", "stress3-types", "stress3-not-active"],
        [q("A normal CCTA with no plaque or stenosis means:", "Obstructive CAD is very unlikely", ["CAD is definitely present", "The patient needs cath", "Nothing"], "No plaque on CCTA means obstructive CAD is very unlikely (great negative predictive value). (Slide 74)"),
          q("Which question can CCTA NOT directly answer?", "Whether a lesion causes myocardial ischemia", ["Whether plaque is present", "Whether plaque is calcified", "The degree of stenosis"], "CCTA shows anatomy, not function, so it can't tell if a lesion causes ischemia. (Slide 74)"),
          q("Which heart rhythm problem limits CCTA image quality?", "Irregular or rapid heart rate", ["Slow regular rhythm", "Normal sinus rhythm", "First-degree AV block alone"], "A fast or irregular rate blurs the gated images, so CCTA needs a slow regular rhythm. (Slide 74)"),
          q("Which is NOT one of the stress imaging options on the slide?", "Coronary calcium scan", ["Stress echocardiography", "Nuclear MPI", "Stress cardiac MRI"], "A calcium scan measures plaque burden; it is not a stress test. (Slide 75)"),
          q("Stress testing is used in patients who are:", "Clinically stable", ["Having active chest pain", "In cardiogenic shock", "Having a STEMI"], "Stress tests are only for stable patients; unstable ones need ACS care. (Slides 75 and 76)"),
          q("CCTA is most commonly used in which patients?", "Stable chest pain with intermediate-to-high likelihood and no known CAD", ["Active STEMI", "Known heavy calcification", "Pregnant women in labor"], "CCTA is for stable chest pain in patients without known CAD at intermediate-high likelihood. (Slide 73)")],
        [q("Jane, 69, had substernal pressure walking uphill in Hawaii 2 weeks ago that resolved with rest; she now feels well. Is stress testing appropriate?", "Yes; she is stable with symptoms concerning for stable angina", ["No; she needs emergent cath", "No; she must have pain during the test", "No; women do not get CAD"], "She is stable now with a classic exertional story, so a stress test is the right next step. (Slide 76)")]),
      C("Pretest probability and the 15% line",
        ul(["<strong>Pretest probability</strong> = estimated likelihood of <strong>obstructive CAD before testing</strong>; it decides whether testing is appropriate.",
          "Estimated from <strong>age, sex, symptom characteristics</strong>, other clinical factors and judgment."]) +
        tbl(["Pretest probability", "Approach"], [
          ["<strong>Low (≤ 15%)</strong>", "Testing may be <strong>deferred</strong> in selected patients; <strong>exercise EKG</strong> may be considered"],
          ["<strong>Intermediate-high (&gt; 15%)</strong>", "Noninvasive testing more likely to help: <strong>stress testing or CCTA</strong>"]]) +
        tbl(["Chest pain pretest probability (slide 78)", "Men", "Women"], [
          ["30 to 39", "≤ 4%", "≤ 5%"], ["40 to 49", "≤ 22%", "≤ 10%"], ["50 to 59", "≤ 32%", "≤ 13%"], ["60 to 69", "≤ 44%", "≤ 16%"], ["70+", "≤ 52%", "≤ 27%"]]) +
        "<p>Adding <strong>CAC</strong> refines it: CAC 1 to 99 → ≤ 15%, <strong>100 to 999 → &gt; 15 to 50%</strong>, <strong>≥ 1,000 → &gt; 50%</strong>.</p>" +
        hy("For the same age, <strong>men</strong> have a much higher pretest probability than women."),
        ["ptp-def", "ptp-inputs", "ptp-low", "ptp-high", "ptp-table", "ptp-cac"],
        [q("Pretest probability estimates the likelihood of:", "Obstructive CAD before testing", ["Death within a year", "Cancer", "A positive stress test"], "Pretest probability estimates the chance of obstructive CAD before you test. (Slide 77)"),
          q("Which is NOT listed as an input for pretest probability?", "Troponin trend", ["Age", "Sex", "Symptom characteristics"], "Pretest probability uses age, sex and symptoms; troponin trend is part of acute workup. (Slide 77)"),
          q("Low pretest probability on the slide is:", "15% or less", ["Under 1%", "Under 50%", "Over 85%"], "Pretest probability of 15% or less is low. (Slide 79)"),
          q("Intermediate-high pretest probability (over 15%) favors:", "Stress testing or CCTA", ["No testing", "Immediate CABG", "Thrombolytics"], "Over 15% pretest probability favors stress testing or CCTA. (Slide 79)"),
          q("In low pretest probability, which test may be considered in selected patients?", "Exercise EKG", ["Invasive angiography", "PET-CT for everyone", "CABG"], "In low pretest probability, a simple exercise EKG can be used in selected patients. (Slide 79)"),
          q("Who has the higher chest pain pretest probability at age 60 to 69?", "Men (up to 44%)", ["Women (up to 44%)", "They are equal", "Neither has any"], "Men 60 to 69 have the highest chest pain pretest probability, up to 44%. (Slide 78)"),
          q("A CAC score of 1,000 or more puts pretest probability at:", "Over 50%", ["Under 15%", "Exactly 0", "15 to 50% only"], "CAC of 1,000 or more pushes pretest probability over 50%. (Slide 78)")],
        [q("The 65-year-old woman with substernal exertional chest pain not relieved by rest or NTG: about what pretest probability, and what next?", "About 16% (just over 15%); noninvasive testing such as stress test or CCTA, not straight to cath", ["Under 1%; no testing", "Over 80%; emergent cath", "Zero; another diagnosis only"], "Slides 78 to 80; answered from the table."),
          q("A 35-year-old man with atypical chest pain has a pretest probability of 4%. Approach?", "Testing may be deferred; exercise EKG in selected patients", ["Invasive angiography", "CABG", "Admit to ICU"], "At 4% pretest probability testing can be deferred, or an exercise EKG used selectively. (Slides 78 and 79)")])
    ]),

    S("21-stress-to-cath", "21. Positive stress test to cath: Stable Stan", "Objective 6 (slides 81 to 85): what a positive stress test means, when to cath, and the three cath outcomes.", [
      C("Stan and the rule-out test",
        "<p><strong>Stan</strong>, 46, ex-college lineman, desk job, <strong>+50 lbs</strong>; first check-up in 25 years. <strong>3 months</strong> of left chest pain limiting activity, <strong>relieved by rest</strong> (mowing &gt; 20 minutes). Regadenoson (<strong>Lexiscan</strong>) MPI: <strong>no EKG changes</strong> but <strong>reversible ischemia on MPI</strong> = a <strong>positive</strong> stress test → next: <strong>left heart cath</strong>.</p>" +
        ul(["A stress test <strong>risk stratifies</strong> and is a good <strong>rule-out</strong> test: normal or negative = <strong>very low chance of significant CAD</strong>.",
          "A <strong>positive</strong> stress test means <strong>another test</strong>: the <strong>LHC (coronary angiography)</strong>.",
          "LHC is <strong>invasive</strong> with small risk: use it when circumstances are <strong>very compelling</strong> or noninvasive testing <strong>cannot rule out</strong> CAD.",
          "Patient must <strong>lie flat</strong> fairly comfortably and be <strong>NPO after midnight</strong>."]) +
        tbl(["LHC outcomes", ""], [
          ["<strong>No significant disease</strong>", "A <strong>false-positive</strong> stress test (it happens)"],
          ["Disease <strong>amenable to stenting</strong>", "LHC becomes <strong>diagnostic and therapeutic</strong>"],
          ["Disease better treated <strong>medically or surgically</strong>", "LHC stays <strong>diagnostic</strong>"]]),
        ["stan-case", "stan-positive", "st3-ruleout", "lhc-when", "lhc-prep", "lhc-outcomes"],
        [q("A normal stress test means:", "A very low chance of significant CAD", ["CAD is definitely present", "The patient needs CABG", "Nothing"], "A normal stress test means significant CAD is very unlikely. (Slide 83)"),
          q("A positive stress test is usually followed by:", "Left heart cath (coronary angiography)", ["Discharge", "CAC score", "Repeat stress test in 10 years"], "A positive stress test goes to left heart cath to see and possibly fix the lesion. (Slide 83)"),
          q("Before a cardiac cath, the patient must be:", "NPO after midnight and able to lie flat", ["Fed a large meal", "Standing during the procedure", "On no IV access"], "Cath patients are NPO for sedation and must lie flat for the procedure. (Slide 84)"),
          q("If the cath finds no significant disease after a positive stress test, the stress test was:", "A false positive", ["A true positive", "A false negative", "Uninterpretable"], "A positive stress test with clean coronaries was a false positive. (Slide 85)"),
          q("When disease is amenable to stenting, the LHC becomes:", "Both diagnostic and therapeutic", ["Only diagnostic", "Cancelled", "A CABG"], "If the lesion can be stented during the cath, the LHC is diagnostic and therapeutic at once. (Slide 85)"),
          q("Why is LHC not used for every chest pain patient?", "It is invasive with a small risk", ["It never finds disease", "It is not accurate", "It needs general anesthesia always"], "LHC is invasive with real (small) risks, so it is not for everyone with chest pain. (Slide 84)")],
        [q("Stan's Lexiscan MPI shows reversible ischemia but no EKG changes. What does this mean and what is next?", "Positive stress test; proceed to left heart cath", ["Negative test; discharge", "Repeat stress test", "Start aspirin and never retest"], "Reversible ischemia on MPI is a positive test even without EKG changes, so go to cath. (Slides 82 and 83)"),
          q("A patient with severe orthopnea who cannot lie flat is scheduled for LHC. What is the problem?", "He must be able to lie flat fairly comfortably for the cath", ["No problem", "He needs to eat first", "He must stand"], "The cath requires lying flat, so severe orthopnea must be fixed first. (Slide 84)")])
    ]),

    S("22-lhc-findings", "22. Reading the cath: stenosis, TIMI, FFR", "Objectives 6 and 7 (slides 86 to 89): significant stenosis, TIMI flow grades, FFR and iFR, and medical therapy vs revascularization.", [
      C("Significant stenosis, TIMI flow and FFR",
        tbl(["Lesion", "Significant when"], [
          ["<strong>Non-left-main</strong> artery", "<strong>≥ 70%</strong>"],
          ["<strong>Left main</strong>", "<strong>≥ 50%</strong>"],
          ["<strong>Intermediate</strong> lesions", "<strong>FFR ≤ 0.80</strong> or <strong>iFR ≤ 0.89</strong> = physiologically significant"]]) +
        tbl(["TIMI grade", "Description", "Meaning"], [
          ["<strong>0</strong>", "No flow", "Complete occlusion"], ["<strong>1</strong>", "Penetration without perfusion", "Minimal flow beyond obstruction"],
          ["<strong>2</strong>", "Partial perfusion", "Distal artery fills, but delayed"], ["<strong>3</strong>", "Normal perfusion", "Normal flow"]]) +
        "<p>After successful PCI the goal is <strong>TIMI 3</strong>.</p>" +
        "<p><strong>FFR</strong> = <strong>pressure beyond</strong> a stenosis ÷ <strong>pressure before</strong> it (at maximum flow with adenosine): tells whether the stenosis limits flow enough to cause ischemia. Example: FFR 0.70 = 70% of maximum flow.</p>" +
        mn("Left main gets the <strong>lower bar (50)</strong> because it feeds so much muscle; everyone else needs <strong>70</strong>."),
        ["sig-70", "sig-lm50", "sig-ffr", "timi-grades", "timi-goal", "ffr-def"],
        [q("A non-left-main stenosis is anatomically significant at:", "70% or more", ["30% or more", "50% or more", "90% or more"], "Outside the left main, 70% narrowing is anatomically significant. (Slide 86)"),
          q("A left main stenosis is significant at:", "50% or more", ["70% or more", "90% or more", "30% or more"], "Left main supplies so much muscle that 50% is significant. (Slide 86)"),
          q("Which FFR value indicates a physiologically significant lesion?", "0.80 or less", ["Over 0.95", "1.0", "Over 0.90"], "FFR 0.80 or less means the lesion drops pressure enough to cause ischemia. (Slide 86)"),
          q("Which iFR value indicates a physiologically significant lesion?", "0.89 or less", ["Over 0.95", "1.0", "0.99"], "iFR 0.89 or less is the significant cutoff. (Slide 86)"),
          q("TIMI 0 flow means:", "No flow; complete occlusion", ["Normal flow", "Delayed distal filling", "Penetration without perfusion"], "TIMI 0 = no flow past the blockage. (Slide 87)"),
          q("TIMI 2 flow means:", "Partial perfusion; distal filling is delayed", ["No flow", "Normal flow", "Penetration without perfusion"], "TIMI 2 = the distal artery fills, but slowly. (Slide 87)"),
          q("What TIMI grade is the goal after successful PCI?", "TIMI 3", ["TIMI 0", "TIMI 1", "TIMI 2"], "TIMI 3 is normal brisk flow, the goal after PCI. (Slide 87)"),
          q("FFR compares pressure:", "Beyond the stenosis with pressure before it", ["In the aorta with the vena cava", "In the LV with the RV", "In the arm with the leg"], "FFR divides the pressure after the stenosis by the pressure before it. (Slide 88)"),
          q("TIMI 1 flow means:", "Penetration without perfusion", ["Normal flow", "Partial perfusion", "Complete absence of contrast entry"], "TIMI 1 = contrast gets past but doesn't fill the distal bed. (Slide 87)")],
        [q("A cath shows a 60% mid-LAD lesion of uncertain significance. FFR is 0.74. What does this mean?", "Physiologically significant; it limits flow enough to cause ischemia", ["Not significant", "FFR is irrelevant", "It is a false reading because under 1.0"], "FFR 0.74 is under 0.80, so the lesion is physiologically significant. (Slide 86)"),
          q("A 55% left main lesion is found. Significant?", "Yes; left main is significant at 50% or more", ["No; needs 70%", "No; left main is never stented", "Only with FFR over 0.95"], "Left main is significant at 50%, so 55% counts. (Slide 86)"),
          q("After a stent, contrast reaches the distal artery but slowly. Which TIMI grade, and is the goal met?", "TIMI 2; no, the goal is TIMI 3", ["TIMI 3; yes", "TIMI 0; no", "TIMI 1; yes"], "Slow distal filling is TIMI 2; the goal is TIMI 3. (Slide 87)")]),
      C("Medical therapy or revascularization",
        "<p>The decision depends on <strong>anatomy, ischemia, symptoms and the patient</strong>.</p>" +
        tbl(["Medical therapy", "Consider PCI or CABG"], [
          ["Guideline-directed risk reduction", "<strong>Significant or high-risk anatomy</strong>"],
          ["Statin when indicated", "<strong>Physiologically significant</strong> stenosis"],
          ["Antiplatelet when appropriate", "<strong>Persistent angina despite medical therapy</strong>"],
          ["Antianginal therapy for symptoms", "Overall context and <strong>patient preference</strong>"]]),
        ["dec-med", "dec-revasc"],
        [q("Which favors considering PCI or CABG?", "Persistent angina despite medical therapy", ["No symptoms and a 20% lesion", "Normal FFR", "Patient refuses procedures"], "Angina that persists on full medical therapy is the main reason to revascularize. (Slide 89)"),
          q("What does the revascularization decision depend on?", "Anatomy, ischemia, symptoms and the patient", ["Only the stress test", "Only the age", "Only cost"], "Revascularization depends on anatomy, ischemia, symptoms and the patient's wishes and risk. (Slide 89)")],
        [q("A patient has a 40% LAD lesion with FFR 0.92 and mild angina controlled on medicines. Best plan?", "Medical therapy", ["CABG", "Stent", "Emergent surgery"], "FFR 0.92 means the lesion isn't limiting flow, so stay with medicines. (Slides 86 and 89)")])
    ]),

    S("23-pci-stents", "23. PCI: BMS vs DES, thrombosis vs restenosis", "Objective 8 (slides 90 to 94): balloon and stent, bare-metal vs drug-eluting stents, and the two stent failures.", [
      C("Balloon, BMS and DES",
        chain(["<strong>Balloon angioplasty</strong>: balloon on a catheter is positioned across the stenosis and <strong>inflated</strong>", "<strong>Stent placement</strong>: a <strong>metal mesh</strong> is expanded to keep the vessel open"]) +
        tbl(["", "Bare-metal stent (BMS)", "Drug-eluting stent (DES)"], [
          ["Structure", "Metal scaffold", "Metal scaffold that <strong>releases medication</strong>"],
          ["Drug", "<strong>No antiproliferative drug</strong>", "Drug <strong>limits neointimal growth</strong>"],
          ["Restenosis", "<strong>Higher</strong>", "<strong>Lower</strong>"],
          ["Status", "Older technology", "<strong>Preferred</strong>; most commonly used"]]) +
        hy("PANCE: contemporary <strong>DES are preferred</strong>: they <strong>reduce restenosis and repeat revascularization without increasing stent thrombosis</strong>."),
        ["pci3-balloon", "pci3-stent", "bms", "des", "des-pref"],
        [q("Which stent releases medication to limit neointimal growth?", "Drug-eluting stent", ["Bare-metal stent", "Neither", "Balloon only"], "A DES releases an antiproliferative drug that slows neointimal growth. (Slide 90)"),
          q("Which stent has the higher restenosis risk?", "Bare-metal stent", ["Drug-eluting stent", "They are equal", "Neither ever restenoses"], "Without a drug, scar tissue grows into a bare-metal stent, so restenosis is higher. (Slide 93)"),
          q("Which stent is preferred in contemporary PCI?", "Drug-eluting stent", ["Bare-metal stent", "No stent ever", "Plastic stent"], "DES lowers restenosis without raising thrombosis, so it is the standard. (Slide 93)"),
          q("Do contemporary DES increase stent thrombosis compared with BMS?", "No", ["Yes, greatly", "Only in diabetics", "Yes, tenfold"], "Modern DES have not been shown to raise stent thrombosis versus BMS. (Slide 93)"),
          q("Why does a BMS restenose more often?", "Neointimal growth without an antiproliferative drug", ["It dissolves", "It causes vasospasm", "It is placed in veins"], "A BMS has no antiproliferative drug, so neointima grows into it. (Slide 90)"),
          q("Which stent is the most commonly used?", "Drug-eluting stent", ["Bare-metal stent", "Covered stent", "Biodegradable fabric stent"], "DES is the most commonly used stent. (Slide 90)")],
        [q("A cardiologist is choosing a stent for a typical patient with stable CAD. Which is preferred and why?", "DES; lower restenosis without more thrombosis", ["BMS; lower restenosis", "BMS; newer technology", "No stent; balloon only always"], "DES lowers restenosis without increasing thrombosis. (Slide 93)")]),
      C("Stent thrombosis vs in-stent restenosis",
        tbl(["", "In-stent thrombosis", "In-stent restenosis"], [
          ["Speed", "<strong>Sudden</strong>; <strong>hours to years</strong> after PCI", "<strong>Usually gradual</strong>"],
          ["What", "<strong>Acute clot</strong> within the stent", "<strong>Recurrent narrowing</strong> within the stented segment"],
          ["Cause", "<strong>Premature DAPT stop</strong>, inadequate expansion, <strong>malapposition</strong>", "<strong>Neointimal hyperplasia</strong>; maybe neoatherosclerosis"],
          ["Presents as", "<strong>ACS or acute MI</strong>", "<strong>Recurrent angina</strong> or ischemia"]]) +
        mn("<strong>Thrombosis = clot</strong> (sudden). <strong>Restenosis = tissue growth</strong> (slow)."),
        ["ist-what", "ist-cause", "isr-what", "isr-cause"],
        [q("In-stent thrombosis is:", "Acute clot formation within the stent", ["Gradual tissue regrowth", "Stent fracture only", "A normal finding"], "In-stent thrombosis is a sudden clot inside the stent, usually causing STEMI. (Slide 94)"),
          q("When can in-stent thrombosis occur?", "Hours to years after PCI", ["Only during the procedure", "Only after 10 years", "Never with DES"], "Stent thrombosis can happen hours to years after PCI. (Slide 94)"),
          q("Which is a risk factor for in-stent thrombosis?", "Premature discontinuation of DAPT", ["High HDL", "Regular exercise", "Low sodium diet"], "Stopping DAPT early lets platelets clot on the not-yet-covered stent. (Slide 94)"),
          q("In-stent restenosis is mainly caused by:", "Neointimal hyperplasia", ["Acute platelet clot", "Vasospasm", "Infection"], "Restenosis is slow scar tissue (neointimal hyperplasia) narrowing the stent. (Slide 94)"),
          q("In-stent restenosis usually presents as:", "Recurrent angina", ["Sudden STEMI", "Fever", "Stroke"], "Restenosis narrows slowly, so angina gradually returns. (Slide 94)")],
        [q("Three weeks after a DES, a patient stops clopidogrel for a dental procedure and has a sudden STEMI. Most likely?", "In-stent thrombosis", ["In-stent restenosis", "Prinzmetal angina", "Pericarditis"], "Stopping a P2Y12 inhibitor weeks after a DES invites a sudden clot: stent thrombosis. (Slide 94)"),
          q("Eight months after a BMS, a patient's exertional angina slowly returns. Most likely?", "In-stent restenosis", ["In-stent thrombosis", "Aortic dissection", "Costochondritis"], "Gradual return of angina months after a BMS is restenosis. (Slide 94)")])
    ]),

    S("24-dapt", "24. Dual antiplatelet therapy", "Objective 8 (slides 95 to 96): why stents need DAPT, how the drugs work, and how long.", [
      C("DAPT: why, what, how long",
        chain(["Balloon and stent <strong>injure the vessel lining</strong> and expose thrombogenic surfaces", "<strong>Platelets activate</strong>",
          "Platelets can aggregate on the stent <strong>before healthy endothelium covers it</strong>", "<strong>DAPT</strong> prevents stent thrombosis"]) +
        tbl(["Drug", "Mechanism"], [
          ["<strong>Aspirin</strong>", "Inhibits platelet <strong>thromboxane A2</strong> production"],
          ["<strong>P2Y12 inhibitor</strong>", "Blocks <strong>ADP-mediated</strong> platelet activation"]]) +
        tbl(["P2Y12 inhibitors", "Type"], [["<strong>Clopidogrel, prasugrel</strong>", "<strong>Thienopyridines</strong>"], ["<strong>Ticagrelor</strong>", "<strong>Non-thienopyridine</strong>"]]) +
        tbl(["Indication", "DAPT duration"], [
          ["<strong>ACS treated with PCI</strong> (STEMI, NSTEMI, UA)", "Aspirin + oral P2Y12 for <strong>at least 12 months</strong> if not high bleeding risk"],
          ["<strong>Chronic coronary disease</strong> treated with PCI", "Aspirin + <strong>clopidogrel for 6 months</strong>, then single antiplatelet"]]) +
        mn("<strong>ACS = 12</strong> months, <strong>stable = 6</strong>."),
        ["dapt-why", "dapt-asa", "dapt-p2y12", "dapt-thieno", "dapt-12", "dapt-6"],
        [q("Aspirin's antiplatelet mechanism is inhibiting:", "Thromboxane A2 production", ["ADP receptors", "Factor Xa", "Vitamin K"], "Aspirin irreversibly blocks COX-1, stopping thromboxane A2 production. (Slide 95)"),
          q("P2Y12 inhibitors block:", "ADP-mediated platelet activation", ["Thromboxane A2", "Thrombin directly", "Vitamin K epoxide reductase"], "P2Y12 inhibitors block the ADP receptor, stopping platelet activation. (Slide 95)"),
          q("Which P2Y12 inhibitor is a non-thienopyridine?", "Ticagrelor", ["Clopidogrel", "Prasugrel", "Ticlopidine"], "Ticagrelor is not a thienopyridine and binds reversibly. (Slide 95)"),
          q("Which P2Y12 inhibitors are thienopyridines?", "Clopidogrel and prasugrel", ["Ticagrelor and cangrelor", "Aspirin and dipyridamole", "Heparin and enoxaparin"], "Clopidogrel and prasugrel are thienopyridine prodrugs. (Slide 95)"),
          q("DAPT duration after PCI for ACS:", "At least 12 months", ["1 month", "6 months", "2 weeks"], "After PCI for ACS, DAPT is continued for at least 12 months. (Slide 96)"),
          q("DAPT duration after PCI for chronic coronary disease:", "6 months, then single antiplatelet", ["12 months minimum", "Lifelong", "2 weeks"], "For stable (chronic) CAD, DAPT is 6 months then single antiplatelet. (Slide 96)"),
          q("Why are platelets a risk right after stenting?", "The stent is not yet covered by healthy endothelium", ["The stent releases thrombin", "The patient is dehydrated", "Aspirin causes clots"], "Until endothelium covers the stent, exposed metal attracts platelets. (Slide 95)")],
        [q("A patient had a DES for NSTEMI 5 months ago and asks to stop ticagrelor. Advice?", "Continue DAPT for at least 12 months unless high bleeding risk", ["Stop now; 6 months is enough", "Stop aspirin instead of both", "Stop both today"], "After ACS, DAPT runs at least 12 months unless bleeding risk is high. (Slide 96)"),
          q("A patient had elective PCI for stable angina. Which DAPT plan fits?", "Aspirin plus clopidogrel for 6 months, then single antiplatelet", ["Aspirin plus ticagrelor for 12 months minimum", "No antiplatelets", "Warfarin alone"], "Elective PCI for stable angina: aspirin plus clopidogrel for 6 months, then one agent. (Slide 96)")])
    ]),

    S("25-cto", "25. Chronic total occlusion", "Objective 7 (slides 97 to 98): what a CTO is, collaterals, and treatment options.", [
      C("CTO",
        ul(["A <strong>CTO</strong> = <strong>100% occlusion</strong> with <strong>TIMI 0 flow</strong> present for <strong>≥ 3 months</strong>.",
          "As it develops gradually, <strong>collateral vessels</strong> enlarge to supply the myocardium.",
          "Collaterals may keep flow <strong>at rest</strong> but are <strong>insufficient with exercise</strong>.",
          "Some patients are <strong>asymptomatic</strong>; others get exertional angina or ischemia."]) +
        tbl(["Treatment", "Detail"], [
          ["<strong>Optimal medical therapy</strong>", "Antianginals and aggressive risk reduction"],
          ["<strong>CTO PCI</strong>", "Specialized techniques to cross and reopen, then balloon and usually <strong>DES</strong>"],
          ["<strong>CABG</strong>", "Selected patients by anatomy, symptoms and disease burden"]]) +
        "<p><strong>CTO PCI is considered</strong> for <strong>persistent, lifestyle-limiting angina despite optimal medical therapy</strong>, or <strong>significant ischemia or viable myocardium</strong> in the territory.</p>",
        ["cto-def", "cto-collat", "cto-tx", "cto-when"],
        [q("A chronic total occlusion is a 100% occlusion present for at least:", "3 months", ["3 days", "3 years", "3 hours"], "A CTO is a 100% blockage present for 3 months or more. (Slide 97)"),
          q("What TIMI flow does a CTO have?", "TIMI 0", ["TIMI 3", "TIMI 2", "TIMI 1"], "A CTO is fully closed, so TIMI 0. (Slide 97)"),
          q("How can a patient with a CTO be asymptomatic at rest?", "Collateral vessels supply the myocardium", ["The artery reopens each night", "The heart needs no blood at rest", "Troponin protects it"], "Collaterals grow around a slowly closing artery and keep the muscle alive. (Slide 97)"),
          q("When is CTO PCI considered?", "Lifestyle-limiting angina despite optimal medical therapy, or ischemia or viable myocardium in the territory", ["In every CTO found", "Only in asymptomatic patients", "Never"], "CTO PCI is for limiting angina despite medicines, or ischemia/viable muscle in that territory. (Slide 98)"),
          q("After a CTO is crossed, what is usually placed?", "A drug-eluting stent", ["A bare-metal stent", "Nothing", "A vein graft"], "Once a CTO is crossed, a DES keeps it open. (Slide 98)")],
        [q("A patient has a 100% RCA occlusion known for a year with good collaterals and no symptoms on medicines. Best approach?", "Optimal medical therapy", ["Emergent CTO PCI", "Thrombolytics", "Emergent CABG"], "Asymptomatic CTO with good collaterals stays on optimal medical therapy. (Slides 97 and 98)")])
    ]),

    S("26-access-complications", "26. Access-site complications", "Objective 9 (slides 99 to 107): radial vs femoral complications, retroperitoneal hemorrhage, pseudoaneurysm and AV fistula.", [
      C("Radial vs femoral; retroperitoneal hemorrhage",
        tbl(["Radial (wrist)", "Femoral (groin)"], [
          ["Hematoma / bleeding", "Hematoma / bleeding"], ["<strong>Radial artery occlusion</strong>", "<strong>Pseudoaneurysm</strong>"],
          ["Arterial perforation", "<strong>AV fistula</strong>"], ["Rarely <strong>compartment syndrome</strong>", "<strong>Retroperitoneal hemorrhage</strong>"]]) +
        tbl(["Retroperitoneal hemorrhage", "Potentially life-threatening"], [
          ["Mechanism", "<strong>High femoral puncture (above the inguinal ligament)</strong>; blood collects in the retroperitoneum, <strong>not externally visible</strong>"],
          ["Presentation", "<strong>Abdominal, flank or back pain</strong>; <strong>hypotension, tachycardia</strong>; <strong>falling hemoglobin</strong>; may have <strong>no groin swelling or bruise</strong>"],
          ["Suspect when", "<strong>Anemia or back pain</strong> after femoral access"],
          ["Diagnosis", "<strong>CT / CT angiography</strong> of abdomen and pelvis"],
          ["Treatment", "Hemodynamic support, <strong>transfusion</strong>; endovascular or surgical repair if bleeding persists"]]),
        ["ax-radial", "ax-femoral", "rp-mech", "rp-sx", "rp-dx", "rp-tx"],
        [q("Which complication is specific to femoral access on the slide?", "Retroperitoneal hemorrhage", ["Radial artery occlusion", "Compartment syndrome of the forearm", "Hand ischemia"], "A femoral stick can bleed into the retroperitoneum; radial access avoids this. (Slide 99)"),
          q("Which complication is listed for radial access?", "Radial artery occlusion", ["Retroperitoneal hemorrhage", "Femoral pseudoaneurysm", "Femoral AV fistula"], "Radial access can occlude the small radial artery. (Slide 99)"),
          q("Retroperitoneal hemorrhage is usually associated with a femoral puncture that is:", "High, above the inguinal ligament", ["Low, below the bifurcation", "In the radial artery", "In the vein only"], "A puncture above the inguinal ligament can't be compressed, so it bleeds into the retroperitoneum. (Slide 100)"),
          q("Is groin swelling required for retroperitoneal hemorrhage?", "No; it may have no visible swelling or bruising", ["Yes, always", "Only in women", "Only with radial access"], "Retroperitoneal blood hides behind the abdomen, so the groin can look normal. (Slide 101)"),
          q("Best test for suspected retroperitoneal hemorrhage:", "CT or CT angiography of abdomen and pelvis", ["Duplex ultrasound of the leg", "Chest x-ray", "Echocardiogram"], "CT of the abdomen and pelvis shows retroperitoneal blood. (Slide 102)"),
          q("Which signs suggest retroperitoneal hemorrhage?", "Back or flank pain, hypotension, tachycardia, falling hemoglobin", ["Pulsatile groin mass with bruit", "Blue toes with pulses", "Continuous bruit and thrill"], "Back or flank pain plus hypovolemia and falling hemoglobin = hidden retroperitoneal bleed. (Slide 101)")],
        [q("Four hours after femoral cath, a patient has back pain, BP 88/50, HR 120 and hemoglobin down 3 g, but the groin looks normal. Next step?", "CT of abdomen and pelvis for retroperitoneal hemorrhage, with resuscitation", ["Reassure; groin is fine", "Duplex of the radial artery", "Start heparin"], "Back pain, shock and a falling Hgb with a normal groin = retroperitoneal bleed: resuscitate and CT.")]),
      C("Pseudoaneurysm and AV fistula",
        tbl(["", "Femoral pseudoaneurysm", "AV fistula"], [
          ["What", "Blood <strong>pools outside the artery</strong> when the puncture fails to close, <strong>held in by surrounding tissue</strong>", "<strong>Abnormal connection</strong> between femoral <strong>artery and vein</strong> (both injured)"],
          ["Clues", "<strong>Pain out of proportion</strong> or swelling at the site; <strong>pulsatile mass</strong> or <strong>bruit</strong>", "<strong>Continuous bruit</strong> or <strong>palpable thrill</strong>"],
          ["Diagnosis", "<strong>Duplex ultrasound</strong> (test of choice)", ""],
          ["Treatment", "<strong>Small, stable (&lt; 2 cm)</strong>: observe with follow-up US; <strong>larger or symptomatic: US-guided thrombin injection</strong> (preferred); US-guided compression (alternative); surgery for complicated or failed cases", "<strong>Observation</strong> (many small ones close); US-guided compression; endovascular (covered stent or embolization); surgery for complicated or persistent"]]) +
        mn("Pseudoaneurysm: <strong>pulsatile</strong> mass, <strong>thrombin</strong> fix. Fistula: <strong>continuous</strong> bruit, often closes on its own."),
        ["pa-def", "pa-sx", "pa-dx", "pa-tx", "avf-def", "avf-sx", "avf-tx"],
        [q("Diagnostic test of choice for suspected femoral pseudoaneurysm:", "Duplex ultrasound", ["CT head", "Chest x-ray", "Angiography of the coronaries"], "Duplex shows the flow into a pseudoaneurysm sac and its neck. (Slide 104)"),
          q("Preferred treatment for a larger or symptomatic femoral pseudoaneurysm:", "Ultrasound-guided thrombin injection", ["Observation only", "Heparin drip", "Antibiotics"], "Thrombin injected under ultrasound clots the sac quickly and safely. (Slide 105)"),
          q("Small, stable pseudoaneurysms under what size may resolve with observation?", "2 cm", ["10 cm", "0.1 cm", "20 cm"], "Pseudoaneurysms under 2 cm often thrombose on their own. (Slide 105)"),
          q("When is surgery used for pseudoaneurysm?", "Complicated cases or failure of less invasive treatment", ["First-line for all", "Never", "Only for small ones"], "Surgery is for complicated cases or when thrombin/compression fails. (Slide 105)"),
          q("An AV fistula after cath is a connection between:", "Femoral artery and vein", ["Two coronary arteries", "Aorta and IVC from birth", "Radial artery and ulnar artery"], "An AV fistula after cath connects the femoral artery and vein. (Slide 106)"),
          q("Which exam finding suggests an AV fistula?", "Continuous bruit or palpable thrill", ["Blue toes with pulses", "Livedo reticularis", "Absent bowel sounds"], "Continuous arterial-to-venous flow gives a continuous bruit or thrill. (Slide 106)"),
          q("Many small, asymptomatic AV fistulas:", "Close spontaneously", ["Always need surgery", "Rupture", "Cause STEMI"], "Small asymptomatic AV fistulas often close on their own. (Slide 107)"),
          q("What holds a pseudoaneurysm in place?", "The surrounding tissues", ["All three arterial wall layers", "A stent", "The vein"], "A pseudoaneurysm has no true wall; only surrounding tissue contains it. (Slide 103)")],
        [q("The day after femoral cath, a patient has groin pain out of proportion and a pulsatile mass with a bruit. Next test?", "Duplex ultrasound", ["CT of the head", "Echo", "Coronary angiography"], "A pulsatile groin mass with a bruit after cath is a pseudoaneurysm until duplex says otherwise. (Slide 104)"),
          q("Duplex shows a 3.5 cm symptomatic femoral pseudoaneurysm. Preferred treatment?", "Ultrasound-guided thrombin injection", ["Observation only", "Immediate amputation", "Thrombolytics"], "Large or symptomatic pseudoaneurysm: ultrasound-guided thrombin injection. (Slide 105)"),
          q("A week after femoral cath, a continuous bruit is heard over the groin; the patient has no symptoms. Likely diagnosis and plan?", "Small AV fistula; observation, since many close", ["Pseudoaneurysm; thrombin", "Retroperitoneal bleed; CT", "Stent thrombosis; cath"], "A continuous bruit without symptoms is a small AV fistula, which often closes, so observe. (Slides 106 and 107)")])
    ]),

    S("27-aki-emboli", "27. Contrast AKI and cholesterol emboli", "Objective 9 (slides 108 to 112): contrast-associated AKI and cholesterol emboli syndrome, and how to tell them apart.", [
      C("Contrast-associated AKI vs cholesterol emboli",
        tbl(["", "Contrast-associated AKI", "Cholesterol emboli syndrome"], [
          ["What", "Kidney function falls after <strong>iodinated contrast</strong>; also hypotension, dehydration, instability", "<strong>Plaque dislodged</strong> → cholesterol crystals plug <strong>small to medium arterioles</strong> + <strong>intense inflammation</strong>"],
          ["Risk", "<strong>Pre-existing CKD (stage 3b or higher)</strong>, <strong>diabetes</strong>", "Catheter manipulation of atherosclerotic arteries (standard teaching)"],
          ["Timing of AKI", "Early", "<strong>Later and progressive</strong>"],
          ["Skin", "None", "<strong>Livedo reticularis</strong>, <strong>blue toe syndrome</strong> (toe necrosis <strong>with intact pulses</strong>)"],
          ["Other", "", "<strong>Fever, anorexia, weight loss, fatigue, myalgias</strong>; <strong>mesenteric ischemia</strong> (pain out of proportion, lactic acidosis); <strong>eosinophilia in up to 80%</strong>"],
          ["Prevention / treatment", "<strong>Hydration</strong> and <strong>holding nephrotoxic drugs</strong>", "<strong>Supportive</strong>"]]) +
        hy("Blue toes <strong>with good pulses</strong> + livedo + eosinophilia + late creeping creatinine = <strong>cholesterol emboli</strong>."),
        ["caki-def", "caki-risk", "caki-prev", "ces-mech", "ces-skin", "ces-systemic", "ces-late", "ces-eos", "ces-tx"],
        [q("Contrast-associated AKI is more likely in patients with:", "CKD stage 3b or higher and diabetes", ["Normal kidneys and youth", "High HDL", "Asthma"], "CKD 3b or worse, especially with diabetes, is the main contrast AKI risk. (Slide 108)"),
          q("Contrast-associated AKI is prevented mainly with:", "Hydration and holding nephrotoxic medicines", ["Steroids", "Antibiotics", "Diuretics before the procedure"], "Fluids and holding nephrotoxins protect the kidneys from contrast. (Slide 108)"),
          q("Which skin finding is an early sign of cholesterol emboli syndrome?", "Livedo reticularis", ["Malar rash", "Erythema migrans", "Petechiae on the palate"], "Livedo reticularis (lacy purple rash) is an early cholesterol emboli sign. (Slide 110)"),
          q("Blue toe syndrome means:", "Toe necrosis with intact distal pulses", ["Absent pulses from a femoral clot", "Cyanosis from hypoxemia", "Frostbite"], "Crystals plug tiny toe vessels, so toes die while the big pulses stay intact. (Slide 110)"),
          q("How does AKI from cholesterol emboli differ from contrast AKI?", "It occurs later and is progressive", ["It occurs earlier and resolves in a day", "It never happens", "It is identical"], "Cholesterol emboli AKI comes weeks later and keeps progressing; contrast AKI is quick and recovers. (Slide 112)"),
          q("Eosinophilia is reported in up to what share of cholesterol emboli patients?", "80%", ["8%", "20%", "100%"], "Up to 80% of cholesterol emboli patients have eosinophilia. (Slide 112)"),
          q("Treatment of cholesterol emboli syndrome is:", "Supportive", ["Thrombolytics", "Emergent CABG", "High-dose heparin"], "There is no specific cure for cholesterol emboli, so care is supportive. (Slide 112)"),
          q("Which GI complication can cholesterol emboli cause?", "Acute mesenteric ischemia", ["Appendicitis", "Peptic ulcer", "Hemorrhoids"], "Crystals can lodge in mesenteric arteries and cause bowel ischemia. (Slide 111)"),
          q("Besides plugging vessels, cholesterol crystals cause:", "An intense inflammatory response", ["Bleeding disorders", "Hyperthyroidism", "Nothing else"], "Cholesterol crystals trigger intense inflammation in the vessel wall. (Slide 109)")],
        [q("Two weeks after cath, a patient has painful purple toes with strong pedal pulses, a lacy rash on the legs, rising creatinine and eosinophilia. Diagnosis?", "Cholesterol emboli syndrome", ["Contrast-associated AKI", "Femoral artery thrombosis", "Raynaud phenomenon"], "Blue toes with good pulses, livedo, rising creatinine and eosinophils after cath = cholesterol emboli."),
          q("A diabetic with eGFR 35 is scheduled for cath. Best way to lower contrast AKI risk?", "Hydrate and hold nephrotoxic medicines", ["Give extra contrast", "Withhold all fluids", "Start NSAIDs"], "Hydration and holding nephrotoxins are the main ways to prevent contrast AKI. (Slide 108)"),
          q("After cath, a patient has severe diffuse abdominal pain with a soft, benign exam and rising lactate. Which cath complication fits?", "Cholesterol emboli causing mesenteric ischemia", ["Pseudoaneurysm", "AV fistula", "Radial artery occlusion"], "Pain out of proportion to a soft exam with rising lactate after cath = emboli causing mesenteric ischemia. (Slide 111)")])
    ]),

    S("28-cabg-vs-pci", "28. CABG vs PCI vs medical therapy", "Objective 7 (slides 113 to 116): what CABG is, when it is preferred, conduits and patency, and the three-way comparison.", [
      C("When CABG wins",
        "<p>CABG: the <strong>saphenous vein, internal mammary artery or radial artery</strong> is harvested and attached to the <strong>ascending aorta and coronary artery</strong> to <strong>bypass</strong> the blockage.</p>" +
        tbl(["CABG preferred over PCI"], [
          ["<strong>Significant left main</strong> disease (≥ 50%)"],
          ["<strong>Multivessel CAD with LV dysfunction</strong>: <strong>EF &lt; 35%</strong> CABG recommended; <strong>EF 35 to 50%</strong> reasonable in selected"],
          ["<strong>Diabetes with multivessel CAD involving the LAD</strong>"],
          ["<strong>Complex or diffuse</strong> multivessel disease (better long-term outcomes)"]]) +
        tbl(["Conduit", "Key point"], [
          ["<strong>LIMA</strong>", "<strong>Preferred graft to the LAD</strong>; about <strong>90%+ 10-year patency</strong>"],
          ["<strong>Radial artery</strong>", "Preferred <strong>second arterial</strong> conduit"],
          ["<strong>Saphenous vein</strong>", "Common; about <strong>50 to 60% 10-year patency</strong>"]]) +
        tbl(["CABG better", "PCI better", "Medical therapy only"], [
          ["<strong>3-vessel</strong> or <strong>left main</strong> disease; <strong>multivessel in diabetics</strong>; <strong>LV dysfunction + multivessel</strong>", "<strong>Limited number of lesions</strong>, <strong>normal LV function</strong>", "Stable CAD <strong>without critical stenosis (&lt; 70%)</strong> and <strong>without LV dysfunction</strong>"]]) +
        mn("CABG: <strong>L</strong>eft main, <strong>3</strong> vessels, <strong>D</strong>iabetes, <strong>L</strong>ow EF."),
        ["cabg-def", "cabg-lm", "cabg-ef", "cabg-dm", "cabg-diffuse", "lima", "radial", "svg", "pci-better", "med-only"],
        [q("Which conduit is the preferred graft to the LAD?", "Left internal mammary artery", ["Saphenous vein", "Radial artery", "Gastroepiploic vein"], "The LIMA to LAD lasts longest and improves survival. (Slide 115)"),
          q("LIMA 10-year patency is about:", "90% or more", ["50 to 60%", "20%", "10%"], "A LIMA graft is about 90% open at 10 years. (Slide 115)"),
          q("Saphenous vein graft 10-year patency is about:", "50 to 60%", ["90% or more", "99%", "10%"], "Vein grafts degenerate; only about half are open at 10 years. (Slide 115)"),
          q("The preferred second arterial conduit is the:", "Radial artery", ["Saphenous vein", "Femoral artery", "Carotid artery"], "The radial artery is the preferred second arterial graft. (Slide 115)"),
          q("Below what EF is CABG recommended for multivessel CAD?", "35%", ["55%", "65%", "15% only"], "With multivessel CAD and EF under 35%, CABG improves survival. (Slide 114)"),
          q("Which diabetic patient is CABG preferred for?", "Multivessel CAD involving the LAD", ["Single-vessel RCA disease", "No CAD", "Only prediabetes"], "Diabetics with multivessel disease including the LAD do better with CABG. (Slide 114)"),
          q("Which patient does better with PCI?", "Limited lesions with normal LV function", ["3-vessel disease with EF 30%", "Left main disease", "Diabetic multivessel disease"], "Limited lesions with normal LV function do well with PCI. (Slide 116)"),
          q("Who gets medical therapy only?", "Stable CAD without critical stenosis and without LV dysfunction", ["Left main 80% stenosis", "STEMI", "3-vessel disease with EF 25%"], "Stable CAD without critical stenosis or LV dysfunction is treated with medicines only. (Slide 116)"),
          q("Where are CABG grafts attached?", "Ascending aorta and the coronary artery beyond the blockage", ["Pulmonary artery and vena cava", "Left atrium and aorta", "Carotid and coronary artery"], "Grafts run from the ascending aorta (or LIMA) to the artery beyond the blockage. (Slide 113)")],
        [q("A 64-year-old diabetic has 3-vessel CAD including the proximal LAD and EF 40%. Best revascularization?", "CABG", ["PCI", "Medical therapy only", "Thrombolytics"], "Diabetic, 3-vessel with proximal LAD and reduced EF = CABG. (Slides 114 and 116)"),
          q("A 52-year-old with normal EF has a single 85% mid-RCA lesion and angina despite medicines. Best option?", "PCI", ["CABG", "No treatment", "Heart transplant"], "A single lesion with angina despite medicines and normal EF suits PCI. (Slide 116)"),
          q("A patient has stable angina with a 50% LAD lesion and normal EF. Plan?", "Medical therapy only", ["CABG", "PCI with DES", "Emergency surgery"], "A 50% LAD lesion with normal EF isn't critical, so medical therapy. (Slide 116)")])
    ]),

    S("29-long-term", "29. Long-term CAD management", "Objective 7 (slides 117 to 121): follow-up, goals of therapy, risk-factor targets, mortality-lowering drugs and asking about nitro use.", [
      C("Goals and targets",
        ul(["After revascularization, or when it is not needed, patients need <strong>ongoing medical management</strong>.",
          "Seen by cardiology every <strong>3 to 6 months</strong>; focus on risk factors and catching recurrence or complications."]) +
        tbl(["Goal of therapy", "How"], [
          ["<strong>Slow or arrest progression</strong> → lower ACS risk", "Lifestyle / risk factors, revascularization, pharmacotherapy"],
          ["<strong>Relieve anginal symptoms</strong>", ""]]) +
        hy("<strong>Aggressive risk factor reduction is the CORNERSTONE</strong> of CAD therapy.") +
        tbl(["Target", "Goal"], [
          ["Diabetes", "<strong>A1c &lt; 7%</strong> (some &lt; 6.5%)"],
          ["LDL", "<strong>&lt; 100</strong>, most recommend <strong>&lt; 70</strong>: <strong>statins</strong>"],
          ["Triglycerides", "<strong>&lt; 200</strong>: <strong>fibrates, fish oil</strong>"],
          ["Smoking", "<strong>Cessation</strong>"], ["BP", "<strong>&lt; 130/80</strong>"],
          ["Obesity", "Weight <strong>&lt; 120% of ideal body weight</strong> (BMI ≤ 24)"],
          ["Activity", "<strong>30 to 60 min</strong> moderate exercise <strong>5×/week</strong>"]]),
        ["lt-fu", "lt-goals", "lt-cornerstone", "lt-targets"],
        [q("How often do CAD patients typically see cardiology?", "Every 3 to 6 months", ["Every 5 years", "Weekly", "Only during ACS"], "Stable CAD patients usually see cardiology every 3 to 6 months. (Slide 117)"),
          q("What is the cornerstone of CAD therapy?", "Aggressive risk factor reduction", ["Stenting every lesion", "Aspirin alone", "Bed rest"], "Aggressive risk factor control (lipids, BP, smoking, diabetes) is the cornerstone. (Slide 118)"),
          q("LDL goal in CAD on the slide:", "Under 100, most recommend under 70", ["Under 190", "Under 160", "Over 100"], "LDL under 100 at least, and most aim under 70 in CAD. (Slide 119)"),
          q("Triglyceride goal in CAD on the slide:", "Under 200, with fibrates or fish oil", ["Under 500", "Under 1,000", "Any level"], "Triglycerides under 200, using fibrates or fish oil if needed. (Slide 119)"),
          q("Exercise goal in CAD on the slide:", "30 to 60 minutes moderate intensity 5 times a week", ["10 minutes once a week", "Bed rest", "2 hours daily vigorous only"], "30 to 60 minutes of moderate exercise 5 days a week. (Slide 119)"),
          q("Weight goal in CAD on the slide:", "Under 120% of ideal body weight (BMI 24 or less)", ["BMI under 35", "No weight goal", "BMI under 18"], "Aim for under 120% of ideal body weight, about BMI 24 or less. (Slide 119)"),
          q("What are the two goals of CAD therapy?", "Slow or arrest progression and relieve angina", ["Raise LDL and lower HDL", "Cure CAD and stop all drugs", "Avoid all exercise"], "Therapy aims to slow or stop plaque progression and relieve angina. (Slide 118)")],
        [q("A post-PCI patient has LDL 92 on atorvastatin 80 mg. What does the slide suggest?", "Most recommend LDL under 70, so further lowering is reasonable", ["He is at goal; nothing to change", "Stop the statin", "Switch to low intensity"], "Most recommend LDL under 70 in CAD, so 92 calls for more lowering. (Slide 119)")]),
      C("Mortality-lowering drugs and rescue nitro",
        tbl(["Drug", "Detail"], [
          ["<strong>High-intensity statin</strong>", "<strong>Atorvastatin 40 to 80</strong> or <strong>rosuvastatin 20 to 40</strong> daily"],
          ["<strong>Aspirin</strong>", "<strong>81 to 325</strong> mg daily, generally <strong>81 to 162</strong> preferred; use <strong>81 if GI effects</strong>"],
          ["<strong>P2Y12 inhibitor</strong>", "Daily if <strong>aspirin allergy</strong>"]]) +
        ul(["Every cardiology visit: ask about <strong>chest pain</strong> and how much <strong>rescue SL nitroglycerin</strong> they use.",
          "Ideal: <strong>normal activity without angina or nitro</strong>.",
          "Not everyone has angina: watch for <strong>anginal equivalents</strong> (dyspnea, exercise symptoms)."]),
        ["mort-statin", "mort-asa", "mort-p2y12", "lt-nitro"],
        [q("Which two drug groups lower mortality in CAD on the slide?", "High-intensity statin and antiplatelet therapy", ["Nitrates and ranolazine", "Calcium channel blockers and nitrates", "Diuretics and digoxin"], "High-intensity statin and antiplatelet therapy are the drugs that lower CAD mortality. (Slide 120)"),
          q("Preferred daily aspirin dose range for CAD:", "81 to 162 mg", ["650 to 1,000 mg", "5 mg", "2 g"], "Aspirin 81 to 162 mg daily is the CAD range. (Slide 120)"),
          q("Which aspirin dose is used if the patient has GI side effects?", "81 mg", ["325 mg", "650 mg", "1,000 mg"], "81 mg is the lowest effective dose, so use it if aspirin upsets the stomach. (Slide 120)"),
          q("What replaces aspirin in a CAD patient with aspirin allergy?", "A daily P2Y12 inhibitor", ["Nothing", "Warfarin", "Ibuprofen"], "A P2Y12 inhibitor gives antiplatelet protection when aspirin can't be used. (Slide 120)"),
          q("What should be asked at every cardiology visit?", "Chest pain and how much rescue SL nitroglycerin is used", ["Only weight", "Only insurance", "Only vaccines"], "Asking about chest pain and nitro use tracks whether angina is getting worse. (Slide 121)")],
        [q("A stable CAD patient now uses 4 SL nitro tablets a week, up from none. What does that suggest?", "Worsening angina that needs reassessment", ["Good control", "Nitro tolerance only", "Nothing"], "Rising SL nitro use means angina is worsening and needs reassessment. (Slide 121)")])
    ]),

    S("30-ccs-antianginals", "30. CCS angina class and antianginal drugs", "Objective 7 (slides 122 to 124): grading angina and how each antianginal works, side effects and cautions.", [
      C("CCS classification",
        tbl(["Class", "Limitation", "Angina with"], [
          ["<strong>I</strong>", "<strong>None</strong> with ordinary activity", "Only <strong>strenuous, rapid or prolonged</strong> exertion"],
          ["<strong>II</strong>", "<strong>Slight</strong>", "<strong>Brisk walking, uphill, stairs rapidly</strong>, activity <strong>after meals</strong>"],
          ["<strong>III</strong>", "<strong>Marked</strong>", "Walking <strong>1 to 2 blocks</strong> on level ground or <strong>1 flight of stairs</strong> at normal pace"],
          ["<strong>IV</strong>", "<strong>Cannot do any activity</strong> without discomfort", "May occur <strong>at rest</strong>"]]),
        ["ccs-1", "ccs-2", "ccs-3", "ccs-4"],
        [q("CCS class I angina occurs with:", "Only strenuous, rapid or prolonged exertion", ["Walking 1 block", "Rest", "Climbing 1 flight at normal pace"], "CCS I: angina only with strenuous, rapid or prolonged exertion. (Slide 122)"),
          q("CCS class II angina occurs with:", "Brisk walking, uphill, rapid stairs or activity after meals", ["Rest", "Any activity at all", "Only marathons"], "CCS II: angina with brisk walking, hills, fast stairs or after meals (slight limitation). (Slide 122)"),
          q("CCS class III angina occurs with:", "Walking 1 to 2 blocks or 1 flight of stairs at normal pace", ["Only strenuous exertion", "Rest only", "Brisk uphill walking only"], "CCS III: angina walking 1-2 blocks or one flight at normal pace (marked limitation). (Slide 122)"),
          q("CCS class IV angina means:", "Any activity causes discomfort; may occur at rest", ["No limitation", "Slight limitation", "Angina only after meals"], "CCS IV: any activity causes angina, possibly at rest. (Slide 122)")],
        [q("A patient gets angina walking one flight of stairs at a normal pace. CCS class?", "III", ["I", "II", "IV"], "Angina with one flight at normal pace is marked limitation, CCS III. (Slide 122)"),
          q("A patient gets angina only when hurrying up a hill after a big meal. CCS class?", "II", ["I", "III", "IV"], "Angina only with hills after meals is slight limitation, CCS II. (Slide 122)")]),
      C("Antianginal drugs",
        tbl(["Class", "Examples", "How it helps", "Side effects", "Caution"], [
          ["<strong>Beta blockers</strong>", "Metoprolol, atenolol, bisoprolol, carvedilol", "↓ <strong>HR, contractility, BP</strong>", "<strong>Bradycardia, hypotension, bronchospasm, depression</strong>", "May worsen HF, heart block; <strong>do NOT use in variant (Prinzmetal) angina</strong>"],
          ["<strong>Nitrates</strong>", "SL nitro, long-acting (isosorbide dinitrate)", "↓ <strong>preload and afterload</strong>, coronary vasodilation", "<strong>Headache, flushing, orthostasis</strong>", "<strong>Tachyphylaxis</strong>"],
          ["<strong>CCBs</strong>", "<strong>Verapamil, diltiazem</strong>", "↓ HR/BP, <strong>coronary vasodilation</strong>", "Bradycardia, hypotension, <strong>constipation</strong>", "May worsen HF, heart block"],
          ["<strong>Late sodium current blocker</strong>", "<strong>Ranolazine</strong>", "<strong>Prevents calcium overload</strong>", "Dizziness, headache", "<strong>No effect on BP/HR</strong>; <strong>QTc prolongation</strong>"]]) +
        "<p><strong>ACE inhibitors / ARBs</strong>: indicated in CAD with <strong>diabetes or LV systolic dysfunction</strong>.</p>" +
        hy("<strong>Ranolazine</strong> is the antianginal that <strong>does not lower BP or HR</strong>: useful when BP or HR are already low. <strong>Beta blockers worsen vasospasm</strong> (unopposed alpha), so avoid them in Prinzmetal (standard teaching for the why)."),
        ["aa-bb", "aa-nitrate", "aa-ccb", "aa-ranolazine", "aa-acei"],
        [q("Which antianginal class should NOT be used in variant (Prinzmetal) angina?", "Beta blockers", ["Calcium channel blockers", "Nitrates", "Statins"], "Beta blockers leave alpha vasoconstriction unopposed and can worsen spasm. (Slide 124)"),
          q("Which antianginal has no effect on BP or heart rate?", "Ranolazine", ["Metoprolol", "Diltiazem", "Nitroglycerin"], "Ranolazine works on myocyte sodium current, so it doesn't change BP or HR. (Slide 124)"),
          q("Ranolazine's notable ECG side effect:", "QTc prolongation", ["PR shortening", "Delta waves", "ST elevation"], "Ranolazine also blocks a potassium current, which lengthens repolarization and the QTc. (Slide 124)"),
          q("Ranolazine works by:", "Blocking the late sodium current to prevent calcium overload", ["Blocking beta receptors", "Releasing nitric oxide", "Blocking ADP receptors"], "Ranolazine blocks the late sodium current, which prevents calcium overload in ischemic cells. (Slide 124)"),
          q("Nitrates relieve angina by:", "Reducing preload and afterload and dilating coronaries", ["Raising heart rate", "Increasing contractility", "Blocking platelets"], "Nitrates dilate veins (less preload), arteries (less afterload) and coronaries. (Slide 124)"),
          q("Which nitrate problem limits continuous use?", "Tachyphylaxis", ["Constipation", "QTc prolongation", "Hyperkalemia"], "Continuous nitrate use causes tolerance, so a nitrate-free interval is needed. (Slide 124)"),
          q("Which side effect is typical of verapamil and diltiazem?", "Constipation", ["Bronchospasm", "Tachyphylaxis", "Hypoglycemia"], "Verapamil and diltiazem slow gut smooth muscle, causing constipation. (Slide 124)"),
          q("Which side effect is typical of beta blockers?", "Bronchospasm", ["Flushing", "Constipation only", "QTc prolongation"], "Beta-2 blockade can tighten airways (bronchospasm). (Slide 124)"),
          q("Which side effects are typical of nitrates?", "Headache, flushing, orthostasis", ["Bradycardia and heart block", "Constipation", "Depression and bronchospasm"], "Vasodilation causes headache, flushing and orthostatic hypotension. (Slide 124)"),
          q("ACE inhibitors or ARBs are indicated in CAD patients with:", "Diabetes or LV systolic dysfunction", ["Asthma", "Gout", "No other conditions"], "ACEi/ARB protect the kidneys and LV in CAD patients with diabetes or LV dysfunction. (Slide 123)"),
          q("Which antianginal classes may worsen heart failure and cause heart block?", "Beta blockers and calcium channel blockers", ["Nitrates and ranolazine", "Statins and aspirin", "ACE inhibitors and ARBs"], "Both depress contractility and AV conduction, so they can worsen HF and cause heart block. (Slide 124)"),
          q("Isosorbide dinitrate is a:", "Long-acting nitrate", ["Beta blocker", "Calcium channel blocker", "Late sodium blocker"], "Isosorbide dinitrate is a long-acting nitrate for prevention, not acute relief. (Slide 123)")],
        [q("A patient with stable angina has HR 52 and BP 98/60 on metoprolol and still has angina. Which drug adds relief without lowering HR or BP?", "Ranolazine", ["Diltiazem", "More metoprolol", "Verapamil"], "Ranolazine relieves angina without lowering HR or BP. (Slide 124)"),
          q("A 40-year-old with Prinzmetal angina is started on propranolol and gets worse. Why, and what fits better?", "Beta blockers can worsen vasospasm; use a CCB or nitrate", ["Dose too low; double it", "Add another beta blocker", "Stop all drugs"], "Beta blockers can worsen spasm; CCBs and nitrates relax coronary arteries. (Slides 4 and 124)"),
          q("A patient with asthma needs an antianginal. Which class from the table should be avoided because of bronchospasm?", "Beta blockers", ["Nitrates", "Ranolazine", "Calcium channel blockers"], "Beta blockers can cause bronchospasm, so avoid them in asthma. (Slide 124)"),
          q("A patient on ranolazine has a long QT on EKG. Which is the likely cause?", "Ranolazine's QTc prolongation", ["Nitrate tolerance", "Aspirin", "Statin"], "Ranolazine also blocks a potassium current, which lengthens repolarization and the QTc. (Slide 124)")])
    ]),
  ];
})();
