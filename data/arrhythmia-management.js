/* Cardio Part 2, Inpatient & Long-Term Arrhythmia Management (Gulczinski, Chronic Arrhythmia Management 2026, 127 slides).
   Official objectives in the supplied order. Objective 3 is split into 3a-3c and objective 5 into 5a-5e (one per drug).
   AF/flutter/MAT EKG and acute rate control are also taught in the Arrhythmias lecture (sections 9a-9c, 10); this lecture keeps
   the inpatient and long-term angle and words its questions differently.
   Slide notes:
   - Slide 14 says a positive POTS tilt test raises HR "by about 10 bpm" with a BP drop under 20/10. The usual criterion is a rise
     of 30 bpm or more; the card shows both and the questions avoid the number.
   - Slide 118 (warfarin advantages/disadvantages) is blank for class; filled from standard teaching and labeled.
   - Slide 107 (Marty's CHA2DS2-VASc) is a class exercise: age 90 = 2, TIA = 2, male = 0, so 4. */
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

  window.ARRHYTHMIA_MANAGEMENT_OBJECTIVES = [

    /* ---------- 1 ---------- */
    S("01-af-risk-factors-triggers", "1. Risk factors and triggers of atrial fibrillation", "Objective 1. Slides 25–26.", [
      C("Risk factors (the soil)",
        "<ul><li><strong>Age</strong>, especially <strong>&gt; 70</strong></li><li><strong>Valvular disease</strong>, especially the <strong>mitral valve</strong></li><li>Dilated cardiomyopathy</li><li><strong>CAD</strong> (arteriosclerotic heart disease)</li><li>Genetics</li><li><strong>COPD</strong></li><li><strong>Severe anemia</strong></li><li><strong>Hypertension</strong></li><li><strong>Diabetes</strong></li><li><strong>CKD</strong></li><li><strong>Obesity</strong></li></ul>" +
        hy("Risk factors are long-standing conditions that build the substrate. Triggers are the event that sets AF off."),
        ["af-risk-factors"],
        [q("Above what age does AF risk climb especially?", "70", ["40", "50", "90"], "Increasing age, especially above 70."),
          q("Which valve's disease especially raises AF risk?", "Mitral", ["Pulmonic", "Aortic", "Tricuspid"], "Valvular disease, especially mitral."),
          q("Which lung disease is an AF risk factor?", "COPD", ["Sarcoidosis only", "Pneumothorax", "Cystic fibrosis only"], "COPD is listed."),
          q("Which kidney condition is an AF risk factor?", "Chronic kidney disease", ["Kidney stones", "Simple renal cyst", "Urinary tract infection"], "CKD is listed.")],
        [q("A 74-year-old woman with hypertension, type 2 diabetes, obesity and stage 3 CKD has an irregular pulse. How many of her conditions are listed AF risk factors?", "All of them: age over 70, HTN, diabetes, obesity and CKD", ["Only age", "Only hypertension", "None; these do not affect AF"], "All are listed risk factors.")]),
      C("Triggers (the spark)",
        tbl(["Trigger", "Example"], [
          ["<strong>Thyrotoxicosis</strong>", "Hyperthyroidism"],
          ["<strong>Alcohol</strong>", "Intake (binge) or withdrawal"],
          ["<strong>Surgery</strong>", "Especially <strong>heart or lung</strong> surgery"],
          ["Inflammation / injury", "<strong>Pericarditis</strong>, chest trauma"],
          ["Stimulants", "Excessive <strong>caffeine</strong>"],
          ["<strong>Hypoxia</strong>", "Any cause"],
          ["<strong>Medications</strong>", "<strong>Theophylline, beta agonists (albuterol)</strong>"]]),
        ["af-triggers"],
        [q("Which endocrine trigger should be checked in new AF?", "Thyrotoxicosis", ["Hypothyroidism", "Adrenal insufficiency", "Hypoparathyroidism"], "Thyrotoxicosis triggers AF."),
          q("Which inhaled medication can trigger AF?", "Albuterol", ["Inhaled fluticasone", "Ipratropium only", "Nasal saline"], "Beta agonists (albuterol) and theophylline."),
          q("Which surgery type most often triggers AF?", "Heart or lung surgery", ["Hand surgery", "Cataract surgery", "Skin biopsy"], "Particularly heart/lung."),
          q("Which alcohol pattern is an AF trigger?", "Both heavy intake and withdrawal", ["Only lifelong abstinence", "Only one glass of wine with dinner", "Alcohol is not a trigger"], "EtOH intake or withdrawal.")],
        [q("Arnold, 55, develops AF with RVR after a 3-day alcohol binge following his sister's death. He has no cardiac history. What triggered his AF?", "Alcohol intake", ["Thyrotoxicosis", "Pericarditis", "Theophylline"], "The deck's case: alcohol binge as trigger."),
          q("A COPD patient in an exacerbation is getting continuous albuterol nebs and becomes hypoxic; the monitor shows new AF. Which two triggers are present?", "Beta-agonist medication and hypoxia", ["Caffeine and surgery", "Pericarditis and trauma", "Thyrotoxicosis and alcohol"], "Albuterol and hypoxia are both triggers.")])
    ]),

    /* ---------- 2 ---------- */
    S("02-af-epidemiology-pathophysiology-classification", "2. AF epidemiology, pathophysiology, remodeling and classification", "Objective 2. Slides 27–37.", [
      C("Epidemiology",
        "<ul><li>AF affects <strong>4.48%</strong> of the US and is rising: the <strong>most common arrhythmia</strong></li><li>Prevalence rises with age: <strong>12% of people over 80</strong></li><li><strong>More prevalent in women</strong>, but <strong>men are more likely to develop</strong> AF</li><li>More common in people of <strong>European descent</strong> than in Black people</li></ul>",
        ["af-epidemiology"],
        [q("What is the most common arrhythmia?", "Atrial fibrillation", ["Atrial flutter", "AVNRT", "PVCs causing VT"], "AF affects 4.48% of the US."),
          q("About what share of people over 80 have AF?", "12%", ["2%", "40%", "60%"], "12% of those older than 80."),
          q("Which sex is more likely to develop AF?", "Men (though prevalence is higher in women)", ["Women only", "Neither; risk is identical", "Only women after menopause"], "Prevalence higher in women; men more likely to develop it."),
          q("AF is more common in people of which descent?", "European", ["African", "East Asian", "Native American"], "More common in European descent than in Black people.")],
        [q("A medical student says AF is rare and mostly seen in young athletes. Best correction?", "AF is the most common arrhythmia and rises with age to about 12% after 80", ["AF only occurs after heart surgery", "AF is most common in children", "AF prevalence falls with age"], "Most common arrhythmia; prevalence climbs with age.")]),
      C("Pathophysiology: trigger, substrate and remodeling",
        "<ol class=\"concept-chain\"><li>AF needs a <strong>trigger</strong> and a <strong>permissive atrial substrate</strong>.</li><li>Triggers usually fire from <strong>muscle sleeves extending into the pulmonary veins</strong> of the left atrium (AF patients have more of these sleeves).</li><li>Many small areas depolarize: the atria <strong>quiver</strong> and the <strong>atrial kick is lost</strong>.</li><li>The AV node is bombarded with up to <strong>400 impulses/min</strong> and conducts <strong>irregularly and rapidly</strong>; QRS stays <strong>narrow</strong> unless a BBB.</li><li>If AF continues, <strong>electrical and structural remodeling</strong> of the atria promotes more AF: <strong>AF begets AF</strong>.</li></ol>" +
        "<p>Proposed links from CV risk factors: catecholamine excess, insulin resistance, atrial ischemia/inflammation, hemodynamic stress.</p>",
        ["af-trigger-substrate", "af-pulmonary-veins", "af-remodeling"],
        [q("What two things does AF need to start and continue?", "A trigger and a permissive atrial substrate", ["An accessory pathway and a PVC", "A long QT and low potassium", "A blocked AV node and a pacemaker"], "Trigger + substrate."),
          q("Where do most AF triggers originate?", "Muscle sleeves in the pulmonary veins of the left atrium", ["The right ventricular outflow tract", "The SA node", "The bundle of His"], "Pulmonary vein sleeves."),
          q("Why does AF tend to perpetuate itself?", "Electrical and structural atrial remodeling promotes continued AF", ["The SA node is destroyed immediately", "The ventricles take over pacing", "Potassium is lost into the atria"], "AF is self-promoting."),
          q("Up to how many impulses per minute bombard the AV node in AF?", "400", ["100", "150", "1,000"], "Up to 400/min.")],
        [q("A patient has had untreated persistent AF for 2 years and now each cardioversion fails within days. What process explains this?", "Atrial remodeling that makes AF self-sustaining", ["Development of an accessory pathway", "Loss of the pulmonary veins", "Hyperkalemia from AF"], "AF begets AF through remodeling.")]),
      C("Classification",
        tbl(["Type", "Definition"], [
          ["<strong>Reversible-cause AF</strong>", "From a correctable or temporary cause (post-op, trauma): classified separately"],
          ["<strong>Paroxysmal (pAF)</strong>", "Self-terminating or intermittent, <strong>&lt; 7 days</strong>, often &lt; 24 h"],
          ["<strong>Persistent</strong>", "Does not self-terminate within <strong>7 days</strong>; needs <strong>pharmacologic or electrical cardioversion</strong>"],
          ["<strong>Long-standing persistent</strong>", "Not terminated by <strong>1 year</strong>"],
          ["<strong>Permanent</strong>", "&gt; 1 year and <strong>accepted</strong>: no further attempts to restore NSR"],
          ["<strong>Lone AF</strong>", "Any type in someone <strong>under 60</strong> with <strong>no structural heart disease or risk factors</strong>; usually young men; &gt; 1/3 have family history"]]) +
        hy("A persistent patient who becomes paroxysmal on medication is <strong>still classified as persistent</strong>."),
        ["af-classes", "lone-af"],
        [q("Paroxysmal AF lasts:", "Less than 7 days and stops on its own", ["More than 7 days", "More than 1 year", "Only after cardioversion"], "< 7 days, often < 24 h."),
          q("Persistent AF is AF that:", "Fails to self-terminate within 7 days", ["Lasts under 24 hours", "Has been accepted with no attempts at NSR", "Only occurs after surgery"], "Needs cardioversion."),
          q("What makes AF permanent?", "It has lasted more than 1 year and no further attempts to restore NSR are made", ["It lasts over 7 days", "It occurs after heart surgery", "It occurs in a patient under 60"], "Permanent = accepted."),
          q("Lone AF occurs in:", "People under 60 with no structural heart disease or risk factors", ["People over 80 with heart failure", "Only after cardiac surgery", "Patients with mitral stenosis"], "Young, no structural disease."),
          q("A persistent AF patient who becomes paroxysmal on an antiarrhythmic is classified as:", "Still persistent", ["Paroxysmal", "Permanent", "Lone"], "Outcomes are like persistent AF.")],
        [q("A patient has had AF for 10 days; it did not stop on its own and needed electrical cardioversion. Classification?", "Persistent AF", ["Paroxysmal AF", "Permanent AF", "Lone AF"], "> 7 days, needed cardioversion."),
          q("A 45-year-old man with a normal echo, no hypertension or diabetes, has intermittent AF after heavy exercise; his father had AF. Which term fits?", "Lone AF", ["Permanent AF", "Valvular AF", "Long-standing persistent AF"], "Under 60, no structural disease or risk factors; often familial."),
          q("A 92-year-old has been in AF for 3 years; she and her cardiologist have decided not to attempt rhythm control. Classification?", "Permanent AF", ["Persistent AF", "Paroxysmal AF", "Lone AF"], "> 1 year and accepted.")])
    ]),

    /* ---------- 3a ---------- */
    S("03a-af-presentation-workup", "3a. AF: clinical presentation and workup", "Objective 3. Slides 22–24, 38–45, 122.", [
      C("Presentation",
        "<p><strong>Minimal symptoms</strong> are common in older or inactive people if the rate is controlled.</p>" +
        tbl(["Common", "Severe", "Complications"], [
          ["Palpitations, <strong>fatigue</strong>, weakness, dizziness, reduced exercise capacity, dyspnea", "Dyspnea at rest, angina, presyncope (rarely syncope)", "<strong>Embolic event</strong>, <strong>heart failure</strong> (pulmonary and peripheral edema, weight gain, ascites)"]]) +
        "<p>Most common complaints: <strong>fatigue, exertional dyspnea, decreased endurance</strong>. Symptoms mostly come from the <strong>rapid ventricular response</strong> and lost atrial kick.</p>" +
        "<p><strong>Exam:</strong> <strong>irregularly irregular</strong> pulse and heart rhythm.</p>" +
        hy("Patients often do <strong>not</strong> know when they are in AF: up to <strong>90% of episodes go unrecognized</strong>, 17% have silent episodes over 48 h, and 40% report AF symptoms while actually in sinus rhythm."),
        ["af-symptoms", "af-silent-episodes"],
        [q("What are the most common complaints in atrial dysrhythmias?", "Fatigue, exertional dyspnea and decreased endurance", ["Fever and rash", "Syncope and seizures", "Hemoptysis and weight loss"], "Fatigue, DOE, decreased endurance."),
          q("Up to what share of AF episodes are not recognized by the patient?", "90%", ["10%", "25%", "50%"], "Up to 90% unrecognized."),
          q("Which is a listed complication of AF?", "Embolic event", ["Aortic dissection", "Pericarditis", "Pneumothorax"], "Embolism and heart failure."),
          q("What drives most AF symptoms?", "The rapid ventricular response", ["The P waves", "A long QT", "Low potassium"], "Most symptoms relate to RVR.")],
        [q("Marty, 90, golfs and has never been sick. He had 10 minutes of left-hand numbness this morning. Pulse 80 and irregularly irregular, BP 104/55, no murmur. What rhythm and complication should you suspect?", "AF with a possible embolic TIA", ["Sinus arrhythmia with migraine", "Complete heart block with syncope", "MAT with COPD"], "The deck's case: irregularly irregular pulse and transient focal neuro symptoms.")]),
      C("Diagnosis and workup",
        tbl(["Setting", "Tests"], [
          ["<strong>Diagnosis</strong>", "<strong>12-lead EKG</strong> (also shows LVH, prior MI, conduction disease, baseline <strong>QTc</strong>)"],
          ["<strong>ER</strong>", "12-lead, <strong>CBC</strong>, chemistry panel, <strong>HS troponin</strong>"],
          ["<strong>Inpatient</strong>", "More HS troponins (q6h × 3), <strong>TSH and free T4</strong>, <strong>BNP</strong>, <strong>TTE for all new AF</strong> (valves, atrial size, LVH, systolic and diastolic function), UA for proteinuria, glucose"],
          ["Persistent rapid AF resistant to meds", "Consider <strong>PE</strong> (CT angiography)"],
          ["Ischemic symptoms", "Stress test or left heart cath"],
          ["Suspected but not captured", "<strong>Holter or implanted event monitor</strong>"]]) +
        hy("A TTE <strong>cannot definitively exclude left atrial (appendage) thrombus</strong>; that needs a <strong>TEE</strong>."),
        ["af-ekg-diagnosis", "af-labs", "af-echo", "af-holter"],
        [q("How is AF diagnosed?", "12-lead EKG", ["Echocardiogram", "Chest x-ray", "Troponin"], "Seen on the 12-lead."),
          q("Which thyroid tests are part of the AF workup?", "TSH and free T4", ["Thyroid ultrasound only", "Thyroglobulin", "Radioactive iodine uptake"], "Look for thyrotoxicosis."),
          q("Which imaging is done for all new-onset AF?", "Transthoracic echo", ["Cardiac MRI", "Coronary CT", "Nuclear stress test"], "TTE at diagnosis."),
          q("What can a TTE not definitively exclude in AF?", "Left atrial appendage thrombus", ["Valve disease", "LVH", "Reduced EF"], "Needs TEE."),
          q("Which monitor helps diagnose suspected paroxysmal AF with normal EKGs?", "Holter or implanted event monitor", ["Tilt table", "Pulse oximeter", "Spirometer"], "Holter/event device.")],
        [q("A patient's AF stays at 150 despite diltiazem and metoprolol; she has pleuritic pain and an O2 sat of 89%. Which cause should be considered and how?", "Pulmonary embolism, with CT angiography", ["Hypothyroidism, with TSH alone", "Pericarditis, with a Holter", "Anemia, with a stool guaiac"], "Persistent rapid AF resistant to meds: consider PE."),
          q("A 60-year-old has palpitations every few weeks, but every EKG in clinic shows sinus rhythm. Best next test?", "Holter or event monitor", ["Repeat the 12-lead daily", "Tilt-table test", "Cardiac catheterization"], "Capture paroxysmal AF.")])
    ]),

    /* ---------- 3b ---------- */
    S("03b-af-acute-management", "3b. AF: immediate and inpatient management", "Objective 3. Slides 46–54, 124–127.", [
      C("Unstable AF",
        "<p><strong>Unstable</strong> = hypotension, AMS, ischemic chest pain, pulmonary edema.</p>" +
        "<ul><li><strong>Immediate synchronized cardioversion, 150–200 J</strong></li><li>If it fails: <strong>load with medications</strong>, and if still unstable, <strong>repeat cardioversion</strong></li></ul>",
        ["af-unstable-cardioversion"],
        [q("Treatment for unstable AF?", "Immediate synchronized cardioversion", ["Oral metoprolol", "Warfarin first", "Watchful waiting"], "Unstable = shock (synchronized)."),
          q("If cardioversion fails in unstable AF, what next?", "Load with medications, then repeat cardioversion if still unstable", ["Discharge home", "Unsynchronized defibrillation", "Start a Watchman"], "Load meds, repeat.")],
        [q("The deck's 57-year-old has AF with BP 78/30 and HR 130–140. How does her care change?", "She is unstable: immediate synchronized cardioversion at 150–200 J", ["Start oral diltiazem and discharge", "Start apixaban only", "Order a Holter"], "Hypotension makes her unstable.")]),
      C("Stable AF: admit or not, and rate control",
        "<p><strong>Who is admitted?</strong> Not everyone. Known <strong>paroxysmal AF with good cardiology follow-up</strong>: adjust meds in the ER, outpatient follow-up. <strong>New-onset AF</strong>: benefits from a <strong>23-hour admission</strong> for workup and a plan. <strong>Complications</strong> (pulmonary edema): admit.</p>" +
        tbl(["Rate-control drug (RVR)", "Use"], [
          ["<strong>Cardizem 10–20 mg IV bolus</strong> + titrated drip to HR &lt; 100", "<strong>Drug of choice for most</strong>; drip without bolus if BP is soft"],
          ["<strong>Metoprolol IV</strong>", "<strong>Ischemia, infarction or CAD</strong>"],
          ["Amiodarone IV drip", "Possible cardioversion"],
          ["Digoxin IV", "Infrequent, less effective"]]),
        ["af-admission", "af-rate-control-acute"],
        [q("Which stable AF patient can reasonably avoid admission?", "Known paroxysmal AF with good cardiology follow-up", ["Any new-onset AF", "AF with pulmonary edema", "AF with BP 78/30"], "Adjust meds in the ER, outpatient follow-up."),
          q("How long an admission does new-onset AF benefit from?", "A 23-hour admission", ["No admission", "A 2-week admission", "ICU for 7 days"], "23-hour admission for workup and plan."),
          q("Which drug is the rate-control choice for most patients with AF and RVR?", "Diltiazem (Cardizem)", ["Digoxin", "Adenosine", "Procainamide"], "Cardizem 10–20 mg IV then drip."),
          q("Which drug is preferred for AF rate control in a patient with CAD?", "Metoprolol", ["Diltiazem", "Digoxin", "Amiodarone"], "Metoprolol for ischemia/CAD.")],
        [q("The deck's 57-year-old with palpitations and chest tightness has new AF, BP 121/68, HR 90–155, O2 sat 95%. What should the ER PA do first?", "Rate control (diltiazem IV), start the reversible-cause workup and admit for 23 hours", ["Immediate cardioversion without sedation", "Discharge with aspirin", "Order a Watchman device"], "Stable new-onset AF with RVR."),
          q("A stable AF patient with RVR has BP 90/48. You choose diltiazem. How should it be given?", "As a titrated drip without the bolus", ["As two 20 mg boluses", "Orally only", "Not at all; use adenosine"], "Drip without bolus if BP is soft.")]),
      C("Reversible causes, anticoagulation and pulmonary edema",
        "<p><strong>Reversible-cause workup:</strong> chemistry, CBC, TSH/free T4, HS troponin q6 × 3, BNP, TTE.</p>" +
        "<p><strong>Anticoagulate if appropriate</strong>, especially if AF &gt; <strong>48 hours</strong>:</p><ul><li><strong>Enoxaparin (Lovenox) 1 mg/kg SQ BID</strong></li><li><strong>Heparin drip</strong> titrated to aPTT or anti-Xa</li><li>A <strong>DOAC</strong>: apixaban (Eliquis), rivaroxaban (Xarelto), dabigatran (Pradaxa)</li></ul>" +
        "<p><strong>Pulmonary edema in AF RVR:</strong> the fast rate shortens diastolic filling and the atrial kick is lost, so LV filling pressure backs up into the lungs. Treat the <strong>rate</strong> (and diurese as needed).</p>" +
        "<p><strong>Two inpatient questions</strong> if AF does not convert: <strong>rhythm vs rate control?</strong> and <strong>what is the embolic risk and how do we lower it?</strong></p>",
        ["af-reversible-workup", "af-acute-anticoagulation", "af-pulmonary-edema", "af-two-questions"],
        [q("Anticoagulation matters most when AF has lasted longer than:", "48 hours", ["2 hours", "7 days", "1 year"], "Thrombus is assumed after 48 h."),
          q("Enoxaparin dose for therapeutic anticoagulation in AF?", "1 mg/kg SQ twice daily", ["40 mg SQ once daily", "5,000 units SQ three times daily", "1 mg/kg IV once"], "Lovenox 1 mg/kg SQ BID."),
          q("What two questions must be answered for new AF that doesn't convert?", "Rhythm vs rate control, and embolic risk and how to reduce it", ["Which statin and which diuretic", "Whether to place an ICD or a pacemaker", "Whether to do a stress test or a cath"], "Strategy + stroke prevention."),
          q("Why does AF with RVR cause pulmonary edema?", "Fast rates shorten filling and the atrial kick is lost, so pressure backs up into the lungs", ["AF damages the mitral valve", "AF causes pulmonary embolism", "AF lowers albumin"], "Rate-related filling problem.")],
        [q("The deck's 57-year-old with new AF had a GI bleed last week. How does that change management?", "Anticoagulation is held or carefully individualized because of the bleed; focus on rate control and the workup", ["Start full-dose heparin immediately", "Give tPA", "Do nothing different"], "A recent GI bleed is a direct concern for anticoagulation.")])
    ]),

    /* ---------- 3c ---------- */
    S("03c-rate-vs-rhythm-control", "3c. Rate control vs rhythm control", "Objective 3. Slides 54–57, 62–63, 75, 88–98.", [
      C("Rate control",
        "<p>Medications keep the <strong>resting HR around 80</strong>; no effort to restore NSR.</p>" +
        "<ul><li><strong>Best for frail elderly (≥ 80) with limited activity</strong>: fewer drug interactions and side effects than antiarrhythmics</li><li>First line: <strong>beta-blocker or non-DHP CCB</strong> (AV nodal blockers)</li><li>Acutely decompensated <strong>systolic HF</strong> that cannot take those: <strong>amiodarone or digoxin</strong> (amiodarone can cardiovert)</li></ul>" +
        hy("<strong>Exclude pre-excitation (WPW)</strong> before giving a BB or CCB in AF. Blocking the node sends impulses down the accessory pathway."),
        ["rate-control-who", "rate-control-drugs", "rate-preexcitation"],
        [q("Target resting heart rate in a rate-control strategy?", "About 80 bpm", ["About 50 bpm", "About 110 bpm", "About 140 bpm"], "Optimal resting HR 80."),
          q("Who is best suited to rate control?", "Frail elderly patients with limited activity", ["Young symptomatic patients", "Athletes", "Patients with new AF of short duration under 50"], "Frail, 80+."),
          q("First-line rate-control drugs?", "Beta-blockers or non-DHP calcium channel blockers", ["Dofetilide or sotalol", "Flecainide or propafenone", "Warfarin or apixaban"], "AV nodal blockers."),
          q("What must be excluded before giving a BB or CCB in AF?", "A pre-excitation syndrome", ["Hypothyroidism", "Pregnancy", "Anemia"], "WPW.")],
        [q("Granny is 90, walks with a walker, has CLL and is legally blind. She develops AF. Which strategy fits?", "Rate control with a beta-blocker or non-DHP CCB", ["Repeated cardioversion and dofetilide", "Catheter ablation", "Maze procedure"], "The deck's case: frail elderly → rate control.")]),
      C("Rhythm control and why we restore NSR",
        "<p><strong>Most new-onset AF</strong> today gets rhythm control, especially <strong>younger</strong> or <strong>symptomatic</strong> patients who feel the loss of atrial kick.</p>" +
        "<p><strong>Why restore NSR?</strong></p><ul><li>AF is an <strong>independent predictor of CV mortality</strong></li><li>NSR improves hemodynamics and <strong>exercise tolerance</strong></li><li>The <strong>atrial kick</strong> improves HF symptoms and quality of life</li><li>Prevents or reverses <strong>remodeling</strong>: atrial dilation and LV dysfunction (AF cardiomyopathy)</li></ul>" +
        tbl(["Step", "Option"], [
          ["<strong>1st, non-invasive</strong>", "<strong>Cardioversion + antiarrhythmic</strong> (can be repeated)"],
          ["<strong>Invasive</strong>, after non-invasive fails", "<strong>RF catheter ablation</strong>, or <strong>Maze</strong> if already having heart surgery"]]) +
        "<p>Even in NSR, keep <strong>anticoagulation or aspirin if indicated</strong>: relapse can happen any time.</p>",
        ["rhythm-control-who", "why-restore-nsr", "rhythm-steps", "keep-anticoagulation"],
        [q("Which patients are best suited to rhythm control?", "Younger or symptomatic patients", ["Frail 90-year-olds with limited activity", "Patients with permanent AF", "Only patients with mechanical valves"], "Younger or symptomatic."),
          q("What is the first-line rhythm-control approach?", "Cardioversion with an antiarrhythmic", ["Catheter ablation", "AV node ablation and pacemaker", "Maze procedure"], "Non-invasive first."),
          q("Why restore NSR?", "AF predicts CV mortality, and NSR improves hemodynamics and prevents remodeling", ["NSR removes the need for any follow-up", "NSR cures hypertension", "NSR prevents all strokes so anticoagulation can stop"], "Reasons listed on slide 63."),
          q("A patient cardioverted to NSR who still meets criteria should:", "Stay on anticoagulation or aspirin because AF can relapse", ["Stop all anticoagulation", "Start a pacemaker", "Stop all follow-up"], "Relapse can occur any time.")],
        [q("Arnold, 55 and healthy, stays in AF despite a diltiazem drip. TTE shows no valve disease and a preserved EF. What is the usual next plan?", "Start an antiarrhythmic, then TEE-guided cardioversion and discharge on anticoagulation", ["Rate control only and no follow-up", "AV node ablation and pacemaker", "Watchman device"], "The deck's case timeline."),
          q("Three years later Arnold is back in AF and a second cardioversion holds only 2 months despite antiarrhythmics. What will cardiology most likely recommend?", "RF catheter ablation", ["Stopping anticoagulation", "Digoxin alone", "Nothing more"], "Failing cardioversion + antiarrhythmics → ablation.")]),
      C("Difficult AF: AV node ablation and pacemaker",
        "<p>Some patients cannot stay in NSR <strong>and</strong> cannot take rate-control drugs because of <strong>bradycardia (tachy-brady / SSS) or hypotension</strong>.</p>" +
        "<ul><li><strong>Best solution: AV node ablation + permanent pacemaker</strong> (short procedure)</li><li>Atria and ventricles are electrically separated: no more RVR, but the <strong>atrial kick is lost</strong></li><li>Patient is <strong>pacer dependent</strong></li><li><strong>Still needs anticoagulation</strong>: the atria keep fibrillating</li></ul>" +
        "<p>Over time patients may move from rhythm to rate control as AF recurs.</p>",
        ["av-node-ablation", "difficult-af-anticoag"],
        [q("Best solution for AF in a patient who cannot tolerate nodal blockers because of hypotension or bradycardia?", "AV node ablation and a permanent pacemaker", ["High-dose diltiazem", "Stopping all treatment", "Digoxin alone forever"], "AV node ablation + PPM."),
          q("After AV node ablation for AF, does the patient still need anticoagulation?", "Yes, the atria are still fibrillating", ["No, the ablation cures AF", "Only for 1 week", "Only if over 90"], "Atria still fibrillate."),
          q("After AV node ablation, the patient is:", "Pacemaker dependent", ["Free of all devices", "On an ICD only", "In normal sinus rhythm"], "Permanently paced.")],
        [q("Nan, 70, faints on low doses of Lopressor or Cardizem, digoxin failed, and four cardioversions held under 10 days. What does the EP cardiologist schedule?", "AV node ablation and permanent pacemaker, continuing Xarelto", ["A fifth cardioversion with no other change", "Stopping all anticoagulation", "A Maze procedure without other surgery"], "The deck's case.")])
    ]),

    /* ---------- 4 ---------- */
    S("04-cardioversion-ablation-maze", "4. Cardioversion, catheter ablation and the Maze procedure", "Objective 4. Slides 57–61, 76–87, 123.", [
      C("Cardioversion: how it is done",
        "<ol><li>Patient is <strong>loaded with an antiarrhythmic</strong> (at therapeutic level), admitted, cardiology consult; rate control and anticoagulation as appropriate</li><li><strong>Normalize electrolytes (especially K⁺) and O2 sat</strong>; <strong>NPO ≥ 6 hours</strong> (NPO at midnight)</li><li>In the cardiac lab: <strong>TEE</strong> first; if <strong>no LA thrombus</strong>, cardiovert</li><li><strong>Conscious sedation</strong> with vitals, O2 sat and <strong>capnography</strong> monitored</li><li>Shock: <strong>120–200 J biphasic</strong> (preferred), synchronized</li><li>Maintain on an antiarrhythmic (<strong>sotalol, amiodarone, dronedarone</strong>); <strong>continue anticoagulation</strong>; outpatient cardiology follow-up</li></ol>" +
        "<p>Young patients with <strong>new AF of short duration</strong>: <strong>90% success</strong>. Ventricular function improves almost at once; atrial function recovers more slowly. Can be repeated over the years.</p>",
        ["cardioversion-prep", "cardioversion-tee", "cardioversion-energy", "cardioversion-after"],
        [q("What study is done right before elective cardioversion to look for clot?", "TEE", ["TTE", "Chest x-ray", "Holter"], "TEE to exclude LA thrombus."),
          q("How long should a patient be NPO before elective cardioversion?", "At least 6 hours", ["30 minutes", "48 hours", "No fasting is needed"], "NPO ≥ 6 h."),
          q("Energy for elective AF cardioversion with a biphasic device?", "120–200 J", ["10–20 J", "360 J", "50 J"], "120–200 J biphasic."),
          q("Success rate of cardioversion in young patients with new short-duration AF?", "90%", ["10%", "50%", "100%"], "~90%."),
          q("Which electrolyte is especially normalized before cardioversion?", "Potassium", ["Sodium", "Calcium", "Phosphate"], "Especially K⁺.")],
        [q("Before elective cardioversion, the TEE shows a thrombus in the left atrial appendage. What happens?", "Cancel the cardioversion and continue anticoagulation", ["Proceed with cardioversion", "Give tPA and proceed", "Switch to a higher energy"], "Cardiovert only if no LA thrombus is seen."),
          q("After successful cardioversion, what does the patient go home on?", "An antiarrhythmic and continued anticoagulation, with cardiology follow-up", ["No medications", "Only aspirin and no follow-up", "Only digoxin"], "Maintain NSR and keep anticoagulation.")]),
      C("Radiofrequency catheter ablation",
        "<p><strong>Goal:</strong> <strong>electrically isolate the pulmonary veins</strong> from the rest of the left atrium.</p>" +
        "<p><strong>Technique:</strong> femoral vein sheath → catheter to the RA under fluoroscopy → <strong>across the interatrial septum</strong> → 3-D electrical map of the LA → <strong>burn small lesions</strong> around the pulmonary veins.</p>" +
        "<p><strong>Indications:</strong> <strong>lifestyle-impairing AF</strong> and <strong>failure or intolerance of at least one antiarrhythmic</strong> (or repeated failed cardioversions). Best results with <strong>short-duration AF</strong>.</p>" +
        "<p><strong>Success:</strong> <strong>60% after one</strong>, up to <strong>80% after several</strong>; more effective than antiarrhythmics.</p>" +
        "<p><strong>Complications:</strong> cardiac perforation, <strong>tamponade</strong>, atrial flutter, vascular access problems. HS troponin rises from the procedure.</p>" +
        hy("Ablation has <strong>no mortality benefit</strong> and <strong>does not change the anticoagulation plan</strong>. It is not done to get off anticoagulation."),
        ["rfca-goal", "rfca-technique", "rfca-indications", "rfca-success-complications"],
        [q("What is the goal of AF catheter ablation?", "Electrically isolate the pulmonary veins from the left atrium", ["Destroy the SA node", "Cut the bundle of His", "Remove the left atrial appendage"], "Pulmonary vein isolation."),
          q("How does the catheter reach the left atrium?", "Through the femoral vein to the right atrium, then across the interatrial septum", ["Through the radial artery and the aortic valve", "Through the jugular vein into the coronary sinus only", "By open chest surgery"], "Transseptal approach."),
          q("Success after a single AF ablation?", "About 60%", ["About 10%", "About 99%", "About 30%"], "60% after one, 80% after multiple."),
          q("Does AF ablation let a patient stop anticoagulation?", "No, it does not change the anticoagulation strategy", ["Yes, always", "Yes, after 1 week", "Only if the troponin rises"], "No change in anticoagulation; no mortality benefit."),
          q("What are the two indications for AF ablation?", "Lifestyle-impairing AF and failure or intolerance of at least one antiarrhythmic", ["Any asymptomatic AF", "Permanent AF in a frail 95-year-old", "A CHA2DS2-VASc of 0"], "Listed on slide 80.")],
        [q("Hours after an AF ablation, a patient becomes hypotensive with JVD and muffled heart sounds. Which complication?", "Cardiac tamponade from perforation", ["Atrial flutter", "Groin hematoma only", "Expected troponin rise"], "Perforation and tamponade are listed complications."),
          q("A 58-year-old with symptomatic paroxysmal AF failed flecainide and wants to stop warfarin, so she asks for an ablation. Best counseling?", "Ablation may control her symptoms but does not change her need for anticoagulation", ["Ablation guarantees she can stop warfarin", "Ablation lowers her mortality", "Ablation is first-line before any drug"], "No change in anticoagulation strategy.")]),
      C("Maze procedure and atrial flutter ablation",
        "<p><strong>Cox-Maze:</strong> done <strong>only when the patient is already having cardiac surgery</strong> (valve replacement, CABG). The atria are <strong>surgically cut and repaired</strong>; the <strong>scar is electrically neutral</strong> and blocks spread of pulmonary vein impulses. The <strong>sinus node takes over pacing</strong>. Many patterns, one principle.</p>" +
        "<p><strong>Atrial flutter:</strong> caused by a circuit near the <strong>tricuspid valve</strong>, so the preferred treatment is <strong>RF catheter ablation</strong>, which is <strong>highly successful</strong>. Alternative: <strong>synchronized cardioversion</strong>.</p>",
        ["maze", "flutter-ablation"],
        [q("When is a Maze procedure done?", "During cardiac surgery being done for another reason", ["As first-line AF treatment", "In the cath lab through the femoral vein", "Only in children"], "With valve surgery or CABG."),
          q("How does the Maze procedure stop AF?", "Surgical scar lines are electrically neutral and block impulse spread", ["It removes the SA node", "It places a pacemaker", "It closes the left atrial appendage only"], "Scar blocks propagation."),
          q("Preferred treatment for atrial flutter?", "RF catheter ablation", ["Maze procedure", "Digoxin", "Watchman"], "Highly successful.")],
        [q("A patient with long-standing AF is scheduled for mitral valve replacement. What rhythm procedure can be added?", "A Cox-Maze procedure", ["AV node ablation without pacing", "Watchman before surgery", "Nothing; AF cannot be treated during surgery"], "Maze when already having cardiac surgery."),
          q("A 62-year-old has recurrent typical atrial flutter despite medication. Best definitive treatment?", "RF catheter ablation of the flutter circuit", ["Lifelong digoxin", "Maze without other surgery", "Observation only"], "Flutter ablation is highly successful.")])
    ]),

    /* ---------- 5a ---------- */
    S("05a-antiarrhythmic-classes", "5a. Antiarrhythmic classes and drug interactions", "Objective 5. Slides 64–66, 74.", [
      C("Vaughan-Williams classes",
        tbl(["Class", "Mechanism", "Drugs (trade)"], [
          ["<strong>IA</strong>", "Na⁺ channel blocker (intermediate)", "Procainamide"],
          ["<strong>IB</strong>", "Na⁺ channel blocker (short)", "Lidocaine"],
          ["<strong>IC</strong>", "Na⁺/K⁺ channel blocker (long)", "Flecainide, propafenone (Rythmol)"],
          ["<strong>II</strong>", "Beta-blockers", "Nonselective: carvedilol, sotalol · Selective: metoprolol, bisoprolol"],
          ["<strong>III</strong>", "<strong>K⁺ channel blockers</strong>", "<strong>Amiodarone (Pacerone), dofetilide (Tikosyn), dronedarone (Multaq), sotalol (Betapace)</strong>"],
          ["<strong>IV</strong>", "Ca²⁺ channel blockers", "Diltiazem (Cardizem), verapamil (Calan)"]]) +
        "<p><strong>Class IC</strong> (flecainide, propafenone): AF and SVT <strong>without structural heart disease</strong>; avoid with LV dysfunction or CAD; sometimes a <strong>\"pill in the pocket\"</strong>.</p>" +
        "<p><strong>Class III</strong>: maintain NSR after cardioversion. <strong>All prolong the QT</strong> and can cause torsades: <strong>monitor QTc, K⁺ and Mg²⁺</strong>.</p>",
        ["vw-classes", "class-ic", "class-iii-qt"],
        [q("Class III antiarrhythmics block which channel?", "Potassium", ["Sodium only", "Calcium", "Chloride"], "K⁺ channel blockers."),
          q("Which drugs are class IC?", "Flecainide and propafenone", ["Amiodarone and sotalol", "Lidocaine and mexiletine", "Diltiazem and verapamil"], "IC = flecainide, propafenone."),
          q("Class IC drugs are avoided in patients with:", "LV dysfunction or CAD", ["Asthma", "Hypothyroidism", "Young age"], "Structural heart disease."),
          q("What must be monitored with every class III drug?", "QTc, potassium and magnesium", ["Blood glucose only", "Liver enzymes only", "Platelet count only"], "All prolong QT."),
          q("What does \"pill in the pocket\" mean?", "Taking a class IC drug for a few days when AF symptoms start", ["Carrying nitroglycerin", "Taking warfarin only when bleeding", "Keeping adenosine at home"], "Episodic use of flecainide or propafenone.")],
        [q("A healthy 35-year-old with a normal echo has rare symptomatic paroxysmal AF and wants something to take only during episodes. Which option fits?", "Flecainide as a pill in the pocket", ["Amiodarone daily", "Dofetilide started at home", "Digoxin daily"], "Class IC without structural disease, episodic use."),
          q("A patient with prior MI and EF 35% has AF. A colleague suggests flecainide. Best response?", "Avoid it: class IC drugs are not used with LV dysfunction or CAD", ["Agree; flecainide is ideal", "Use double-dose flecainide", "Combine flecainide with dronedarone"], "Class IC avoided in structural heart disease.")]),
      C("Common drug interactions",
        "<p>Antiarrhythmics interact with:</p><ul><li><strong>Other antiarrhythmics</strong>: wash out the old one before loading a new one</li><li><strong>Antipsychotics</strong>: haloperidol (Haldol), quetiapine (Seroquel)</li><li><strong>Ondansetron (Zofran)</strong>, sometimes promethazine</li><li><strong>Macrolides</strong>: azithromycin, clarithromycin</li><li><strong>Quinolones</strong>: ciprofloxacin, levofloxacin</li><li><strong>Azole antifungals</strong></li><li><strong>HAART</strong> for HIV</li></ul>" +
        hy("Most of these add <strong>QT prolongation</strong> on top of a class III drug."),
        ["antiarrhythmic-ddi"],
        [q("Before switching from one antiarrhythmic to another, you must:", "Wash out the first drug, then load the new one", ["Give both together at full dose", "Stop anticoagulation", "Cardiovert first"], "Washout then load."),
          q("Which antiemetic interacts with antiarrhythmics?", "Ondansetron", ["Docusate", "Famotidine", "Simethicone"], "Zofran."),
          q("Which antibiotic class interacts with antiarrhythmics?", "Macrolides", ["Penicillins", "Cephalosporins", "Nitrofurantoin"], "Azithro, clarithro; also quinolones.")],
        [q("A patient on dofetilide develops pneumonia. Which antibiotic choice is most concerning?", "Levofloxacin", ["Ceftriaxone", "Amoxicillin", "Doxycycline"], "Quinolones interact with antiarrhythmics (QT)."),
          q("A patient on amiodarone with HIV is starting antiretroviral therapy. What is the concern?", "HAART interacts with antiarrhythmics", ["No interaction exists", "HAART lowers the QT", "HAART causes AF"], "HAART is on the DDI list.")])
    ]),

    /* ---------- 5b ---------- */
    S("05b-amiodarone", "5b. Amiodarone (Pacerone, Cordarone)", "Objective 5. Slides 64, 66–68.", [
      C("Amiodarone: when it is the drug of choice",
        "<p><strong>Class III</strong> (K⁺ channel blocker). Trade names: <strong>Pacerone, Cordarone</strong>.</p>" +
        "<ul><li><strong>Especially useful in persistent AF</strong>: more effective and considered <strong>safer</strong> than other antiarrhythmics there</li><li><strong>Drug of choice in AF with cardiac disease</strong>: <strong>CAD or systolic or diastolic heart failure</strong>, because it is <strong>less pro-arrhythmic</strong></li></ul>",
        ["amio-names", "amio-indications"],
        [q("What are amiodarone's trade names?", "Pacerone and Cordarone", ["Multaq and Tikosyn", "Betapace and Sorine", "Rythmol and Tambocor"], "Pacerone, Cordarone."),
          q("Amiodarone is the antiarrhythmic of choice in AF patients with:", "CAD or systolic or diastolic heart failure", ["No heart disease and age under 30", "Permanent AF only", "Prolonged QT only"], "Less pro-arrhythmic."),
          q("Amiodarone is especially useful in which AF type?", "Persistent AF", ["Lone AF in a 20-year-old only", "Permanent AF where no rhythm control is planned", "Post-op AF that resolved"], "More effective in persistent AF."),
          q("Amiodarone's Vaughan-Williams class?", "Class III", ["Class IA", "Class IC", "Class IV"], "K⁺ channel blocker.")],
        [q("A 68-year-old with HFrEF (EF 30%) and CAD has persistent AF and needs rhythm control. Which antiarrhythmic is the drug of choice?", "Amiodarone", ["Dronedarone", "Flecainide", "Sotalol"], "CAD and HF: amiodarone; dronedarone and sotalol are avoided in HF, flecainide in CAD.")]),
      C("Amiodarone: adverse effects",
        tbl(["Organ", "Adverse effect"], [
          ["<strong>Thyroid</strong>", "<strong>Hypothyroid and hyperthyroid</strong>"],
          ["<strong>Lung</strong>", "<strong>Pulmonary fibrosis</strong>"],
          ["<strong>Liver</strong>", "Liver damage, cirrhosis"],
          ["Nerves", "Neuropathy, gait ataxia"],
          ["Skin and eyes", "<strong>Skin discoloration</strong> (blue-gray), <strong>corneal deposits</strong>"],
          ["Heart", "QT prolongation (class III)"]]) +
        mn("Check the <strong>T-L-L</strong> before and during: <strong>T</strong>hyroid, <strong>L</strong>ungs, <strong>L</strong>iver (plus eyes and skin)."),
        ["amio-adverse"],
        [q("Which thyroid effect can amiodarone cause?", "Both hypothyroidism and hyperthyroidism", ["Only hyperthyroidism", "Only hypothyroidism", "No thyroid effect"], "Both."),
          q("Which lung toxicity is linked to amiodarone?", "Pulmonary fibrosis", ["Asthma", "Pneumothorax", "Pleural effusion only"], "Lung fibrosis."),
          q("Which eye finding is linked to amiodarone?", "Corneal deposits", ["Retinal detachment", "Glaucoma", "Cataracts only"], "Corneal deposits."),
          q("Intolerable side effects of amiodarone are:", "Common", ["Rare", "Never seen", "Only seen in children"], "Intolerable ADRs are common.")],
        [q("A patient on amiodarone for 2 years has a dry cough, exertional dyspnea and bibasilar crackles; CT shows interstitial fibrosis. Likely cause?", "Amiodarone pulmonary toxicity", ["Dofetilide toxicity", "Atrial fibrillation itself", "Beta-blocker bronchospasm"], "Lung fibrosis is a known amiodarone ADR."),
          q("A patient on amiodarone has weight gain, fatigue, cold intolerance and a high TSH. Explanation?", "Amiodarone-induced hypothyroidism", ["Dronedarone-induced HF", "Sotalol-induced QT prolongation", "Normal aging"], "Thyroid abnormalities are common.")])
    ]),

    /* ---------- 5c ---------- */
    S("05c-dronedarone", "5c. Dronedarone (Multaq)", "Objective 5. Slides 72–73.", [
      C("Dronedarone: uses and contraindications",
        "<p>Trade name <strong>Multaq</strong>. A <strong>miscellaneous agent with properties of all 4 classes</strong> (listed under class III).</p>" +
        "<p><strong>Use:</strong> <strong>paroxysmal AF</strong>, or <strong>after conversion of persistent AF</strong> to maintain NSR. Can be used with <strong>CAD risk factors</strong>.</p>" +
        tbl(["Contraindication", "Why"], [
          ["<strong>Permanent AF</strong>", "<strong>Increased mortality</strong>"],
          ["<strong>Heart failure</strong> (recent HF or severe NYHA class)", "<strong>2-fold increase</strong> in death, stroke and HF hospitalization"]]) +
        mn("<strong>Multaq: \"Multi\" classes, but No HF and No Permanent AF.</strong>"),
        ["dronedarone-names", "dronedarone-uses", "dronedarone-contraindications"],
        [q("What is dronedarone's trade name?", "Multaq", ["Tikosyn", "Betapace", "Pacerone"], "Multaq."),
          q("Dronedarone is contraindicated in:", "Heart failure and permanent AF", ["Paroxysmal AF and CAD", "Hypertension and diabetes", "Age over 50"], "Recent/severe HF and permanent AF."),
          q("Dronedarone has properties of:", "All 4 antiarrhythmic classes", ["Only class IC", "Only class IV", "No antiarrhythmic class"], "Miscellaneous agent."),
          q("In which AF patients is dronedarone used?", "Paroxysmal AF, or after conversion of persistent AF to keep NSR", ["Permanent AF", "AF with decompensated HF", "AF in pregnancy only"], "Maintain NSR."),
          q("Why is dronedarone avoided in permanent AF?", "It increases mortality", ["It is too expensive", "It has no effect on rhythm", "It causes hypoglycemia"], "Increased mortality in permanent AF.")],
        [q("A 70-year-old with NYHA class IV heart failure needs AF rhythm control. Which drug should NOT be used?", "Dronedarone (Multaq)", ["Amiodarone", "Dofetilide", "Rate control with digoxin"], "Dronedarone doubles death, stroke and HF hospitalization in HF."),
          q("A 60-year-old with paroxysmal AF, hypertension and hyperlipidemia (CAD risk factors) but normal EF needs a rhythm drug. Is dronedarone an option?", "Yes: paroxysmal AF without HF, and it can be used with CAD risk factors", ["No, it is contraindicated in any CAD risk", "No, it is only for permanent AF", "No, it requires a 3-day hospital start"], "Fits the indication.")])
    ]),

    /* ---------- 5d ---------- */
    S("05d-sotalol", "5d. Sotalol (Betapace)", "Objective 5. Slides 64, 69.", [
      C("Sotalol: uses and contraindications",
        "<p>Trade name <strong>Betapace</strong>. Class III (K⁺ channel blocker) and a <strong>nonselective beta-blocker</strong> (class II).</p>" +
        "<ul><li>Maintains NSR after cardioversion</li><li><strong>Can be used in CAD</strong></li><li><strong>Contraindicated in heart failure</strong> (more pro-arrhythmic) and <strong>prolonged QT</strong></li><li><strong>Correct hypokalemia and monitor K⁺</strong>: low K⁺ worsens QT prolongation</li></ul>",
        ["sotalol-names", "sotalol-uses", "sotalol-contraindications"],
        [q("What is sotalol's trade name?", "Betapace", ["Multaq", "Tikosyn", "Cordarone"], "Betapace."),
          q("Sotalol is contraindicated in:", "Heart failure or prolonged QT", ["CAD", "Paroxysmal AF", "Hypertension"], "HF and long QT."),
          q("Which electrolyte must be corrected and monitored on sotalol?", "Potassium", ["Sodium", "Calcium", "Phosphate"], "Hypokalemia worsens QT prolongation."),
          q("Sotalol has the actions of which two classes?", "Class II (beta-blocker) and class III", ["Class IA and IV", "Class IB and IC", "Class IV only"], "Nonselective BB plus K⁺ block."),
          q("Can sotalol be used in a patient with CAD?", "Yes", ["No, never", "Only after bypass surgery", "Only with flecainide"], "Sotalol can be used in CAD.")],
        [q("A patient with CAD and normal EF needs AF rhythm control. Baseline QTc is 430 ms and K⁺ 4.3. Is sotalol reasonable?", "Yes: CAD is not a contraindication; monitor QT and K⁺", ["No, sotalol is contraindicated in CAD", "No, sotalol is only for VT", "No, sotalol requires an ICD"], "No HF, normal QT."),
          q("A patient on sotalol has a QTc of 540 ms and K⁺ 3.0 after diarrhea. What is the concern and fix?", "Risk of torsades; hold or adjust sotalol and correct potassium", ["No concern; continue", "Add a second class III drug", "Give digoxin"], "Hypokalemia exacerbates sotalol's QT prolongation.")])
    ]),

    /* ---------- 5e ---------- */
    S("05e-dofetilide", "5e. Dofetilide (Tikosyn)", "Objective 5. Slides 64, 70–71.", [
      C("Dofetilide: hospital start and who gets it",
        "<p>Trade name <strong>Tikosyn</strong>. Class III.</p>" +
        "<ul><li><strong>Must be started in the hospital</strong>: FDA mandates <strong>3 days of inpatient cardiac monitoring</strong> when starting, or <strong>resuming after more than 2 missed doses</strong> (QT prolongation even at a previously tolerated dose)</li><li>Given at the <strong>same time twice daily</strong>; <strong>many drug interactions</strong></li><li>Indicated to <strong>maintain NSR</strong> and to <strong>convert persistent AF</strong> (~50%)</li><li><strong>No effect on CO, cardiac index, SV or SVR</strong>: fairly <strong>safe in HFrEF and CAD</strong></li><li>Fits patients with <strong>HF, CAD, CVA, HTN</strong> who also have AF</li></ul>",
        ["dofetilide-names", "dofetilide-hospital", "dofetilide-who"],
        [q("What is dofetilide's trade name?", "Tikosyn", ["Multaq", "Betapace", "Rythmol"], "Tikosyn."),
          q("Where must dofetilide be started?", "In the hospital with 3 days of cardiac monitoring", ["At home", "In the outpatient clinic", "In the pharmacy"], "FDA-mandated inpatient start."),
          q("After how many missed doses must dofetilide be restarted in the hospital?", "More than 2", ["1", "More than 10", "It never needs restarting"], "> 2 missed doses."),
          q("Why is dofetilide safe in HFrEF and CAD?", "It has no effect on cardiac output, SV or SVR", ["It improves EF", "It lowers blood pressure a lot", "It has no QT effect"], "Hemodynamically neutral."),
          q("About what share of persistent AF does dofetilide convert?", "About 50%", ["About 5%", "About 95%", "None"], "~50%.")],
        [q("A patient on dofetilide missed 3 doses while traveling. How should it be restarted?", "Readmit for 3 days of monitored reloading", ["Double the next dose at home", "Restart at home without monitoring", "Switch to dronedarone at home"], "Missed > 2 doses requires inpatient restart."),
          q("A 72-year-old with HFrEF, prior stroke and hypertension has persistent AF. Which antiarrhythmic fits well besides amiodarone?", "Dofetilide (Tikosyn)", ["Dronedarone (Multaq)", "Sotalol (Betapace)", "Flecainide"], "Dofetilide is used in HF, CAD, CVA, HTN with AF.")]),
      C("Comparing the four drugs",
        tbl(["Drug (trade)", "Use it when", "Avoid when"], [
          ["<strong>Amiodarone</strong> (Pacerone, Cordarone)", "<strong>Persistent AF</strong>; <strong>CAD or systolic/diastolic HF</strong>", "Intolerable ADRs (thyroid, lung, liver)"],
          ["<strong>Dronedarone</strong> (Multaq)", "Paroxysmal AF or after conversion; CAD risk factors OK", "<strong>Recent or severe HF; permanent AF</strong>"],
          ["<strong>Sotalol</strong> (Betapace)", "CAD OK", "<strong>HF; prolonged QT</strong>"],
          ["<strong>Dofetilide</strong> (Tikosyn)", "<strong>HF, CAD, CVA, HTN</strong> with AF", "Can't do a <strong>3-day hospital start</strong>; many DDIs"]]) +
        hy("<strong>HF + AF rhythm control → amiodarone or dofetilide.</strong> Not dronedarone, not sotalol."),
        ["drug-comparison"],
        [q("Which two antiarrhythmics are safe for AF rhythm control in heart failure?", "Amiodarone and dofetilide", ["Dronedarone and sotalol", "Flecainide and propafenone", "Sotalol and flecainide"], "Amiodarone or dofetilide."),
          q("Which antiarrhythmic must be started inpatient?", "Dofetilide", ["Amiodarone", "Sotalol", "Dronedarone"], "Tikosyn requires a 3-day start."),
          q("Which drug is contraindicated in permanent AF?", "Dronedarone", ["Amiodarone", "Dofetilide", "Metoprolol"], "Increased mortality."),
          q("Which antiarrhythmic is also a nonselective beta-blocker?", "Sotalol", ["Dofetilide", "Amiodarone", "Dronedarone"], "Class II + III.")],
        [q("A patient with a QTc of 500 ms at baseline and HFrEF needs AF rhythm control. Which drug is the safest choice of these?", "Amiodarone", ["Sotalol", "Dronedarone", "Flecainide"], "Sotalol (long QT, HF) and dronedarone (HF) are out; flecainide is avoided with LV dysfunction. Amiodarone is the HF drug of choice and least pro-arrhythmic, though the QT still needs close monitoring.")])
    ]),

    /* ---------- 6 ---------- */
    S("06-af-stroke-risk", "6. Stroke risk in non-valvular AF", "Objective 6. Slides 99–104, 106, 122.", [
      C("Why AF causes stroke",
        "<p>Quivering atria barely empty, so blood becomes <strong>static</strong>, especially in the <strong>left atrial appendage (LAA)</strong>.</p>" +
        "<p><strong>Thrombus is assumed</strong> once AF has gone <strong>48 hours or more</strong>, even if paroxysmal (it can form earlier).</p>" +
        "<p><strong>LAA shapes:</strong> windsock, <strong>chicken wing</strong>, cauliflower, cactus. <strong>Chicken wing</strong> is <strong>79% less likely</strong> to cause thromboembolic stroke.</p>",
        ["laa-stasis", "48-hour-rule", "laa-morphology"],
        [q("Where do most AF thrombi form?", "Left atrial appendage", ["Right ventricle", "Pulmonary veins", "Coronary sinus"], "LAA."),
          q("After how long in AF is left atrial thrombus assumed to be present?", "48 hours or more", ["2 hours", "7 days", "1 year"], "≥ 48 h, even if paroxysmal."),
          q("Which LAA shape carries the lowest stroke risk?", "Chicken wing", ["Cauliflower", "Cactus", "Windsock"], "79% less likely.")],
        [q("A patient has been in AF for an unknown length of time and wants immediate elective cardioversion. What must be assumed?", "That left atrial thrombus may be present, so TEE or anticoagulation is needed first", ["That there is no clot", "That the AF started today", "That stroke risk is zero"], "Unknown duration is treated like ≥ 48 h.")]),
      C("How big the stroke risk is",
        "<ul><li><strong>20% of ischemic strokes</strong> in the US are from AF (&gt; 70,000/year)</li><li>AF = <strong>5× the stroke risk</strong> of sinus rhythm</li><li>AF strokes are <strong>larger</strong> and more likely to have <strong>hemorrhagic conversion</strong></li><li>Embolic stroke rate <strong>5–6%/year</strong>; <strong>&gt; 10%/year with rheumatic valve disease</strong></li><li>Higher in <strong>women</strong>; rises with <strong>age</strong> (7.3% at 60–69, 30.8% at 80–89)</li></ul>",
        ["stroke-statistics"],
        [q("AF raises stroke risk about how many times compared with sinus rhythm?", "5 times", ["2 times", "20 times", "No change"], "5× the risk."),
          q("What share of US ischemic strokes are attributed to AF?", "20%", ["1%", "50%", "80%"], "20%."),
          q("Annual embolic stroke rate in AF?", "5–6% per year", ["0.1% per year", "25% per year", "50% per year"], "> 10% with rheumatic valve disease."),
          q("Which sex has a higher AF stroke risk?", "Women", ["Men", "Neither", "Only men over 80"], "Higher in women.")],
        [q("A patient asks how AF strokes compare with other strokes. Best answer?", "They tend to be larger and more likely to bleed (hemorrhagic conversion)", ["They are always smaller", "They never bleed", "They only cause TIAs"], "Larger, more hemorrhagic conversion.")]),
      C("Paroxysmal vs persistent vs permanent, and valvular AF",
        hy("<strong>Stroke rate is the same in paroxysmal, persistent and permanent AF.</strong> All need stroke prophylaxis unless contraindicated, decided by <strong>CHA2DS2-VASc</strong>.") +
        "<p>Patients cannot tell: <strong>90% of pAF recurs</strong>, up to <strong>90% of episodes are silent</strong>, so \"I only have it sometimes\" is not a reason to skip prophylaxis.</p>" +
        "<p>CHA2DS2-VASc and HAS-BLED were built for <strong>non-valvular AF</strong> (not mitral stenosis or mechanical valves, and not AF tied to cardiac surgery).</p>",
        ["stroke-same-all-types", "nonvalvular-scope"],
        [q("How does stroke risk compare between paroxysmal and permanent AF?", "It is no different", ["Paroxysmal is much lower", "Permanent is zero", "Paroxysmal is 10 times higher"], "Same risk."),
          q("CHA2DS2-VASc was developed for which AF?", "Non-valvular AF", ["AF with mechanical valves", "AF after cardiac surgery only", "Atrial flutter only"], "Non-valvular AF."),
          q("Which AF patients need stroke prophylaxis?", "Any with paroxysmal, persistent or permanent AF, per their CHA2DS2-VASc, unless contraindicated", ["Only permanent AF", "Only persistent AF", "Only patients over 90"], "All types.")],
        [q("A 70-year-old woman with hypertension says she does not need a blood thinner because her AF \"only comes and goes.\" Best response?", "Paroxysmal AF carries the same stroke risk as permanent AF, so she still needs prophylaxis by her score", ["She is right; paroxysmal AF has no stroke risk", "She only needs it during episodes", "She needs it only if she has a stroke first"], "Same stroke rate across types.")])
    ]),

    /* ---------- 7 ---------- */
    S("07-chadsvasc-hasbled-utility", "7. Using CHA2DS2-VASc and HAS-BLED", "Objective 7. Slides 108–112.", [
      C("CHA2DS2-VASc: choosing stroke prevention",
        tbl(["Score", "Annual stroke risk", "Treatment"], [
          ["<strong>0–1</strong>", "0.2–0.6%", "<strong>EC aspirin 81–325 mg/day</strong> alone"],
          ["<strong>2</strong>", "2.2%", "<strong>Individualize</strong> aspirin vs anticoagulation (<strong>anticoagulation preferred</strong>)"],
          ["<strong>≥ 3</strong>", "3.2% and up (about 12% at 9)", "<strong>Anticoagulate</strong>: warfarin or a DOAC (<strong>DOAC preferred</strong>)"]]),
        ["chadsvasc-treatment"],
        [q("Treatment for a CHA2DS2-VASc score of 0–1?", "Aspirin 81–325 mg daily alone", ["Warfarin", "A DOAC", "Watchman"], "ASA alone."),
          q("Treatment for a CHA2DS2-VASc score of 3 or more?", "Anticoagulation, DOAC preferred", ["Nothing", "Aspirin alone", "Clopidogrel alone"], "Anticoagulate; DOAC preferred."),
          q("What does a score of 2 call for?", "Individualize, with anticoagulation preferred", ["No therapy", "Mandatory warfarin only", "Aspirin is never allowed"], "Individualize."),
          q("What is the yearly stroke risk at a CHA2DS2-VASc of 0?", "0.2%", ["2.2%", "10%", "5%"], "0 = 0.2%.")],
        [q("A patient with non-valvular AF has a CHA2DS2-VASc of 4 and no bleeding history. Best stroke prevention?", "A DOAC", ["Aspirin alone", "No therapy", "Clopidogrel alone"], "≥ 3: anticoagulate, DOAC preferred.")]),
      C("HAS-BLED: bleeding risk on anticoagulation",
        tbl(["Letter", "Point for"], [
          ["<strong>H</strong>", "Hypertension: <strong>SBP &gt; 160</strong>"],
          ["<strong>A</strong>", "Abnormal <strong>renal</strong> and/or <strong>liver</strong> function (1 each)"],
          ["<strong>S</strong>", "<strong>Stroke</strong>"],
          ["<strong>B</strong>", "Prior major <strong>bleeding</strong>"],
          ["<strong>L</strong>", "<strong>Labile INRs</strong>"],
          ["<strong>E</strong>", "<strong>Elderly &gt; 65</strong>"],
          ["<strong>D</strong>", "<strong>Drugs</strong> (antiplatelets) and/or heavy <strong>alcohol</strong> (1 each)"]]) +
        "<p><strong>Major bleed</strong> = intracranial, hospitalization, Hgb drop &gt; 2 g, or transfusion. Risk: 1.1% at 0 → 3.7% at 3 → <strong>8.7% at 4</strong> → 12.5% at 5.</p>" +
        hy("<strong>HAS-BLED ≥ 3 = high bleeding risk</strong>: use caution, review the indication, and <strong>fix modifiable risks</strong> (control BP, stop extra antiplatelets, limit alcohol). If <strong>HAS-BLED &gt; CHA2DS2-VASc</strong>, bleeding risk may outweigh the benefit. (Not yet study-proven.)"),
        ["hasbled-elements", "hasbled-use"],
        [q("Which HAS-BLED item is scored for blood pressure?", "Systolic BP over 160 mmHg", ["Any history of hypertension", "Diastolic over 80", "Systolic over 120"], "SBP > 160."),
          q("In HAS-BLED, the L stands for:", "Labile INRs", ["Low platelets", "Left ventricular failure", "Lupus"], "Labile INRs."),
          q("A HAS-BLED score of what indicates high bleeding risk?", "3 or more", ["0", "1", "2 or less"], "> 3 (≥ 3) = high risk."),
          q("What should you do with a high HAS-BLED score?", "Use caution and correct modifiable risks such as uncontrolled BP", ["Stop all anticoagulation automatically", "Double the warfarin", "Ignore it"], "Correct risks, review regularly."),
          q("At what age does HAS-BLED give a point?", "Over 65", ["Over 75", "Over 50", "Over 85"], "Elderly > 65.")],
        [q("A 72-year-old on warfarin has SBP 170, takes daily aspirin and drinks heavily. What is his HAS-BLED score from these items alone?", "4 (hypertension, elderly, drugs, alcohol)", ["1", "2", "7"], "H 1 + E 1 + D 1 + alcohol 1 = 4."),
          q("A patient's HAS-BLED is 4 with SBP 172 and daily ibuprofen. What is the best first step?", "Control the blood pressure and stop the NSAID/antiplatelet, then reassess", ["Stop anticoagulation forever", "Add clopidogrel", "Increase the warfarin dose"], "Correct modifiable bleeding risks.")])
    ]),

    /* ---------- 8 ---------- */
    S("08-chadsvasc-calculation", "8. CHA2DS2-VASc: elements and calculation", "Objective 8. Slides 105, 107–109.", [
      C("The elements",
        tbl(["Letter", "Item", "Points"], [
          ["<strong>C</strong>", "<strong>CHF / LV dysfunction</strong>", "1"],
          ["<strong>H</strong>", "<strong>Hypertension</strong> (any history)", "1"],
          ["<strong>A2</strong>", "<strong>Age ≥ 75</strong>", "<strong>2</strong>"],
          ["<strong>D</strong>", "<strong>Diabetes</strong>", "1"],
          ["<strong>S2</strong>", "Prior <strong>stroke, TIA</strong> or other embolism", "<strong>2</strong>"],
          ["<strong>V</strong>", "<strong>Vascular disease</strong> (MI, PAD, aortic plaque)", "1"],
          ["<strong>A</strong>", "<strong>Age 65–74</strong>", "1"],
          ["<strong>Sc</strong>", "<strong>Sex category: female</strong>", "1"]]) +
        "<p>Maximum score <strong>9</strong>. Age is scored <strong>once</strong>: 65–74 = 1, ≥ 75 = 2.</p>" +
        mn("The two <strong>\"2\"</strong> letters are the ones with a 2 in the name: <strong>A2</strong> (age ≥ 75) and <strong>S2</strong> (stroke/TIA)."),
        ["chadsvasc-elements"],
        [q("How many points for age 75 or older?", "2", ["1", "3", "0"], "A2."),
          q("How many points for a prior stroke or TIA?", "2", ["1", "3", "4"], "S2."),
          q("How many points for female sex?", "1", ["0", "2", "3"], "Sc = 1."),
          q("Which counts as vascular disease in CHA2DS2-VASc?", "Prior MI, PAD or aortic plaque", ["Varicose veins", "Raynaud phenomenon", "A DVT"], "MI, PAD, aortic arteriosclerosis."),
          q("How many points for age 65–74?", "1", ["2", "0", "3"], "A = 1.")],
        [q("Marty is 90, male, never sick, and has just had a TIA. What is his CHA2DS2-VASc and treatment?", "4: anticoagulate, DOAC preferred", ["2: aspirin", "1: no therapy", "6: aspirin only"], "Age ≥ 75 (2) + TIA (2) = 4.")]),
      C("Practice calculations",
        tbl(["Patient", "Points", "Score → plan"], [
          ["68-year-old woman with HTN", "Age 65–74 (1) + female (1) + HTN (1)", "<strong>3 → anticoagulate</strong>"],
          ["55-year-old man, no history", "0", "<strong>0 → aspirin</strong>"],
          ["80-year-old man with diabetes and prior MI", "Age (2) + DM (1) + vascular (1)", "<strong>4 → anticoagulate</strong>"],
          ["60-year-old woman, no other history", "Female (1)", "<strong>1 → aspirin</strong>"],
          ["70-year-old man with HFrEF and HTN", "Age (1) + CHF (1) + HTN (1)", "<strong>3 → anticoagulate</strong>"]]),
        ["chadsvasc-practice"],
        [q("A 68-year-old woman with hypertension: CHA2DS2-VASc?", "3", ["2", "1", "4"], "Age 1 + female 1 + HTN 1."),
          q("A 55-year-old man with no medical history: CHA2DS2-VASc?", "0", ["1", "2", "3"], "No points."),
          q("An 80-year-old man with diabetes and a prior MI: CHA2DS2-VASc?", "4", ["3", "2", "5"], "Age 2 + DM 1 + vascular 1."),
          q("A 60-year-old woman with no other history: CHA2DS2-VASc?", "1", ["0", "2", "3"], "Female 1.")],
        [q("A 77-year-old woman with hypertension, diabetes and a prior stroke has AF. Score and plan?", "7: anticoagulate", ["4: aspirin", "5: individualize", "3: aspirin"], "Age 2 + F 1 + HTN 1 + DM 1 + stroke 2 = 7."),
          q("A 66-year-old man with AF and no other conditions: score and plan?", "1: aspirin alone", ["2: anticoagulate", "0: nothing", "3: anticoagulate"], "Age 65–74 = 1."),
          q("A 72-year-old man with AF, hypertension and heart failure: score and plan?", "3: anticoagulate, DOAC preferred", ["2: individualize", "1: aspirin", "5: aspirin"], "Age 1 + HTN 1 + CHF 1.")])
    ]),

    /* ---------- 9 ---------- */
    S("09-warfarin-vs-doacs", "9. Warfarin vs DOACs", "Objective 9. Slides 113–121.", [
      C("The DOACs",
        tbl(["Generic (trade)", "Class", "AF dose", "Kidney rules"], [
          ["<strong>Apixaban (Eliquis)</strong>", "Factor Xa inhibitor", "<strong>5 mg BID</strong>; <strong>2.5 mg BID if 2 of 3</strong>: SCr ≥ 1.5, age ≥ 80, weight ≤ 60 kg", "<strong>Acceptable with caution in stage IV–V CKD / ESRD</strong>"],
          ["<strong>Rivaroxaban (Xarelto)</strong>", "Factor Xa inhibitor", "<strong>20 mg daily with the largest meal</strong>", "GFR 15–50: <strong>15 mg daily</strong>"],
          ["<strong>Dabigatran (Pradaxa)</strong>", "<strong>Direct thrombin inhibitor</strong>", "<strong>150 mg BID</strong>", "Avoid if GFR ≤ 30; reversal agent exists but costly"],
          ["Edoxaban (Savaysa)", "Factor Xa inhibitor", "60 mg daily; 30 mg if GFR ≤ 50", "Not if GFR ≥ 95 or ≤ 30"]]) +
        mn("Factor <strong>X</strong>a: ri<strong>VAR</strong>o-<strong>XA</strong>ban, api<strong>XA</strong>ban, edo<strong>XA</strong>ban. <strong>Dabi-gat-RAN</strong> goes after th<strong>R</strong>ombin."),
        ["doac-names", "doac-doses", "doac-renal"],
        [q("What is apixaban's trade name?", "Eliquis", ["Xarelto", "Pradaxa", "Savaysa"], "Eliquis."),
          q("What is rivaroxaban's trade name?", "Xarelto", ["Eliquis", "Pradaxa", "Coumadin"], "Xarelto."),
          q("What is dabigatran's trade name?", "Pradaxa", ["Eliquis", "Xarelto", "Multaq"], "Pradaxa."),
          q("Dabigatran is a:", "Direct thrombin inhibitor", ["Factor Xa inhibitor", "Vitamin K antagonist", "P2Y12 inhibitor"], "Direct thrombin inhibitor."),
          q("When is apixaban reduced to 2.5 mg BID?", "When 2 of 3 are present: SCr ≥ 1.5, age ≥ 80, weight ≤ 60 kg", ["Whenever age is over 65", "In all women", "When GFR is over 90"], "2 of 3 criteria."),
          q("How should rivaroxaban 20 mg be taken?", "Once daily with the largest meal", ["Twice daily fasting", "Once weekly", "Only at bedtime without food"], "With the largest meal."),
          q("Which DOAC is acceptable with caution in ESRD?", "Apixaban", ["Dabigatran", "Edoxaban", "Rivaroxaban 20 mg"], "Apixaban.")],
        [q("An 84-year-old woman weighing 55 kg with SCr 1.1 starts apixaban for AF. Dose?", "2.5 mg BID (age ≥ 80 and weight ≤ 60 kg)", ["5 mg BID", "10 mg BID", "20 mg daily"], "2 of 3 criteria met."),
          q("A patient on hemodialysis has AF and needs an oral anticoagulant. Which DOAC can be used with caution?", "Apixaban", ["Dabigatran", "Edoxaban", "Rivaroxaban 20 mg"], "Apixaban is the ESRD exception."),
          q("A patient with AF has a GFR of 40. Rivaroxaban dose?", "15 mg daily", ["20 mg daily", "10 mg BID", "Avoid completely"], "GFR 15–50 → 15 mg.")]),
      C("Warfarin vs DOACs: who gets which",
        "<p><strong>DOACs are superior to warfarin</strong> for ischemic stroke prevention when CHA2DS2-VASc &gt; 2 (and preferred at ≥ 3).</p>" +
        tbl(["Warfarin is the drug of choice when", "DOAC caution"], [
          ["<strong>Mechanical valve</strong>", "<strong>BMI &gt; 40</strong>"],
          ["<strong>Significant native mitral valve disease</strong> (DOACs are for <strong>non-valvular AF only</strong>)", ""],
          ["<strong>ESRD</strong> (apixaban is the exception)", ""]]) +
        "<p><strong>Warfarin (Coumadin, Jantoven):</strong> dose adjusted to an <strong>INR of 2–3</strong> with regular INR checks.</p>" +
        tbl(["Warfarin advantages", "Warfarin disadvantages"], [
          ["Cheap; long track record", "<strong>INR monitoring</strong> and dose changes"],
          ["Reversible with <strong>vitamin K</strong>", "<strong>Many drug and dietary (vitamin K) interactions</strong>"],
          ["Works with <strong>mechanical valves, mitral stenosis, ESRD</strong>", "Narrow window; slow onset and offset"],
          ["Adherence can be checked by INR", "More intracranial bleeding than DOACs"]]) +
        note("Slide 118 leaves warfarin's advantages and disadvantages blank for class; this table is standard teaching."),
        ["warfarin-indications", "warfarin-inr", "warfarin-pros-cons", "doac-superior"],
        [q("Which patients must get warfarin rather than a DOAC?", "Those with mechanical valves or significant mitral valve disease", ["All patients over 75", "All women", "All patients with hypertension"], "DOACs are for non-valvular AF only."),
          q("Target INR for warfarin in AF?", "2–3", ["1–1.5", "3.5–4.5", "5–6"], "INR 2–3."),
          q("In which body-size group are DOACs used with caution?", "BMI over 40", ["BMI under 25", "BMI 25–30", "Any BMI over 20"], "BMI > 40."),
          q("For non-valvular AF with CHA2DS2-VASc above 2, DOACs compared with warfarin are:", "Superior for ischemic stroke prevention", ["Inferior", "Equal but more dangerous", "Never used"], "DOACs are superior."),
          q("Which is an advantage of warfarin?", "It can be reversed with vitamin K", ["It needs no monitoring", "It has no food interactions", "It works instantly"], "Standard teaching.")],
        [q("A 64-year-old with a mechanical mitral valve develops AF. Which anticoagulant?", "Warfarin with INR monitoring", ["Apixaban", "Rivaroxaban", "Dabigatran"], "Mechanical valve: warfarin."),
          q("A 70-year-old with non-valvular AF, CHA2DS2-VASc 4, normal kidneys and BMI 28 asks about warfarin vs a DOAC. Which is preferred?", "A DOAC such as apixaban", ["Warfarin is required", "Aspirin alone", "No anticoagulation"], "DOAC preferred at ≥ 3.")]),
      C("Watchman and LAA clipping",
        tbl(["Option", "What it is", "Who"], [
          ["<strong>Watchman</strong>", "Umbrella-like device placed in the <strong>LAA</strong>; tissue grows over it in <strong>4–6 weeks</strong>", "AF with <strong>high stroke risk</strong> and <strong>bleeding problems on anticoagulation</strong>; increasingly used to come off DOAC/warfarin"],
          ["<strong>LAA clipping</strong>", "External clip occludes the LAA", "<strong>Only during cardiac surgery</strong> for another reason"]]) +
        "<p>After Watchman: <strong>anticoagulation for 4–6 weeks</strong> while it epithelializes, then <strong>aspirin alone</strong>. After clipping: antiplatelet (low-dose ASA) alone.</p>",
        ["watchman", "laa-clip"],
        [q("Who is a Watchman candidate?", "AF patients with high stroke risk who have bleeding problems on anticoagulation", ["Patients with CHA2DS2-VASc 0", "Anyone with a mechanical valve", "Patients with sinus tachycardia"], "High stroke risk + bleeding."),
          q("How long is anticoagulation continued after a Watchman?", "4–6 weeks, then aspirin alone", ["Lifelong full dose", "No anticoagulation at all", "1 day"], "While it epithelializes."),
          q("When is LAA clipping done?", "Only when the patient is having cardiac surgery for another reason", ["As a stand-alone outpatient procedure", "In the ER", "During catheter ablation only"], "During other cardiac surgery.")],
        [q("An 80-year-old with AF (CHA2DS2-VASc 5) has had two major GI bleeds on apixaban. Which option lowers stroke risk without lifelong anticoagulation?", "Watchman left atrial appendage occlusion", ["Stop all therapy", "Switch to warfarin with INR 4", "Add clopidogrel"], "High stroke risk + bleeding = Watchman.")])
    ]),

    /* ---------- 10 ---------- */
    S("10-nsvt-in-hospital", "10. NSVT in the hospital", "Objective 10. Slides 2–5.", [
      C("NSVT: first steps",
        "<p>NSVT is <strong>very common on telemetry</strong> and is a potential marker of <strong>sustained ventricular arrhythmia</strong>: <strong>always investigate</strong>.</p>" +
        "<ol><li><strong>Look at the strip</strong>: <strong>artifact</strong> can mimic NSVT; compare with the 12-lead</li><li>Ask about <strong>chest pain, dyspnea, palpitations, syncope/presyncope</strong> (usually asymptomatic; exam normal, NSR by the time you arrive)</li><li>Look for <strong>reversible causes</strong></li></ol>" +
        tbl(["Reversible cause", "How to check"], [
          ["<strong>Electrolytes</strong> (K⁺ and Mg²⁺ most common)", "BMP, Mg"],
          ["<strong>Anemia</strong>", "CBC"],
          ["<strong>Myocardial ischemia</strong>", "<strong>Immediate 12-lead</strong> and <strong>HS troponin now and in 6 hours</strong> (all patients)"],
          ["Hypoxia, hypotension", "Vitals, O2 sat"],
          ["HF decompensation", "Exam, BNP"],
          ["Adverse drug effect", "Med review"]]),
        ["nsvt-artifact", "nsvt-reversible"],
        [q("What is the first thing to check after a reported run of NSVT on telemetry?", "Whether the strip is artifact, by comparing with the 12-lead", ["Start amiodarone", "Order an ICD", "Call a code"], "Artifact may look like NSVT."),
          q("Which electrolytes are the most common reversible causes of NSVT?", "Potassium and magnesium", ["Sodium and chloride", "Calcium and phosphate", "Glucose and bicarbonate"], "K⁺ and Mg²⁺."),
          q("Which tests check for ischemia after NSVT?", "Immediate 12-lead EKG and HS troponin now and in 6 hours", ["Chest x-ray only", "D-dimer", "Lipid panel"], "EKG + troponin × 2."),
          q("Why must NSVT always be investigated?", "It can be a marker for a sustained ventricular arrhythmia", ["It always causes death", "It is always artifact", "It means the patient has AF"], "Potential marker.")],
        [q("You are called about a 12-beat run of VT in room 3423. The patient is asymptomatic and now in sinus rhythm. After confirming it is not artifact, what do you order?", "12-lead EKG, HS troponin now and in 6 hours, and K⁺, Mg²⁺ and CBC", ["Immediate ICD placement", "Nothing; NSVT is always benign", "IV amiodarone bolus and transfer to ICU"], "The deck's case: look for reversible causes.")]),
      C("NSVT: when to work up further",
        tbl(["Situation", "Workup"], [
          ["<strong>Single episode</strong>", "<strong>12-lead, troponins and reversible causes</strong> only"],
          ["<strong>Recurrent or highly symptomatic</strong>", "<strong>2D echo</strong> (study of choice for function and structure)"],
          ["VT seems linked to <strong>exercise</strong>", "<strong>Stress testing</strong>"]]),
        ["nsvt-further-workup"],
        [q("What workup does a single asymptomatic episode of NSVT need?", "12-lead, troponins and evaluation of reversible causes", ["Echo, stress test and EP study", "Nothing at all", "Cardiac MRI"], "That is all for a single episode."),
          q("Which study is first for recurrent NSVT?", "2D echocardiogram", ["Holter", "Tilt table", "Coronary CT"], "Echo is the study of choice."),
          q("When is stress testing added for NSVT?", "When VT seems to occur with exercise", ["Always", "Never", "Only with a normal echo"], "Exercise-related VT.")],
        [q("A patient has three runs of NSVT overnight with lightheadedness; electrolytes and troponins are normal. Next study?", "2D echocardiogram", ["No further testing", "Tilt-table test", "EEG"], "Recurrent or symptomatic: echo."),
          q("A patient's NSVT runs occur only while walking the halls in cardiac rehab. What test is added?", "Exercise stress test", ["Tilt table", "Carotid sinus massage", "Holter only"], "VT linked to exercise.")])
    ]),

    /* ---------- 11 ---------- */
    S("11-sinus-tach-ist-pots", "11. Persistent sinus tachycardia, inappropriate sinus tachycardia and POTS", "Objective 11. Slides 6–15.", [
      C("Persistent sinus tachycardia and inappropriate sinus tachycardia",
        "<p><strong>Sinus tachycardia</strong> is a physiologic response to stress or illness; symptoms mostly come from the underlying illness. With an apparent cause, <strong>treat the cause</strong>.</p>" +
        "<p><strong>Inappropriate sinus tachycardia (IST)</strong>, also called chronic non-paroxysmal sinus tach:</p><ul><li><strong>Diagnosis of exclusion</strong>: no structural heart disease or other cause</li><li><strong>Exaggerated HR response to exercise</strong>, out of proportion to need</li><li>Mostly <strong>young women</strong></li><li>Mechanism: <strong>SA node hyperactivity</strong>, depressed vagal response, <strong>beta-adrenergic hypersensitivity</strong></li></ul>" +
        tbl(["Step", "Detail"], [
          ["1. <strong>12-lead EKG</strong>", "Confirm <strong>sinus</strong> tach, not <strong>atrial tach</strong> (atrial tach is paroxysmal, unrelated to events, often &gt; 140)"],
          ["2. No reversible cause", "Cardiology consult and <strong>2D echo</strong>"],
          ["3. Treatment", "<strong>Low-dose metoprolol</strong>; <strong>ivabradine</strong> is more effective (off label in the US)"]]),
        ["sinus-tach-cause", "ist-definition", "ist-workup-treatment"],
        [q("Inappropriate sinus tachycardia is a diagnosis of:", "Exclusion", ["Biopsy", "Echo only", "Genetic testing"], "No structural disease or other cause."),
          q("Who most often has inappropriate sinus tachycardia?", "Young women", ["Elderly men", "Children under 5", "Athletes over 60"], "Young and female."),
          q("What first test confirms sinus tach rather than atrial tach?", "12-lead EKG", ["Echo", "Tilt table", "TSH"], "12-lead."),
          q("First-line treatment for inappropriate sinus tachycardia?", "Low-dose metoprolol", ["Amiodarone", "Digoxin", "Dofetilide"], "Ivabradine is more effective but off label."),
          q("How does atrial tachycardia differ from sinus tachycardia?", "It is paroxysmal, unrelated to events, and often over 140", ["It is gradual and always under 110", "It only happens with fever", "It has no P waves"], "Slide 9.")],
        [q("A 26-year-old woman has a resting HR of 112 that jumps to 170 with light exercise. TSH, CBC, echo and Holter are normal, and the EKG shows sinus P waves. Diagnosis and first treatment?", "Inappropriate sinus tachycardia; low-dose metoprolol", ["POTS; midodrine", "AVNRT; ablation", "Hyperthyroidism; methimazole"], "Diagnosis of exclusion in a young woman."),
          q("An inpatient with pneumonia, fever 39 °C and dehydration has a sinus tachycardia of 120. Best management?", "Treat the cause: fluids, antipyretics and antibiotics", ["Start ivabradine", "Cardiovert", "Start amiodarone"], "Sinus tach with an apparent cause: correct the cause.")]),
      C("POTS",
        "<p><strong>Postural tachycardia syndrome:</strong> an <strong>exaggerated HR rise on standing</strong> with an <strong>intact baroreceptor reflex</strong>: they still vasoconstrict, so <strong>syncope is rare</strong>, but <strong>presyncope</strong> is common.</p>" +
        "<p>Most common in <strong>adolescent and young adult women</strong>. Proposed mechanisms: genetics, hypovolemia, deconditioning, distal denervation, low venous return (none proven for all).</p>" +
        tbl(["Symptom group", "Symptoms on standing"], [
          ["CNS", "Dizziness, weakness, lightheadedness, blurred vision, fatigue"],
          ["Orthostatic", "Palpitations, tremor, anxiety"],
          ["GI", "Nausea, cramps, constipation or diarrhea"]]) +
        "<p><strong>Diagnosis: tilt-table test.</strong> Positive: HR rises while BP drops <strong>less than 20/10</strong>.</p>" +
        "<p><strong>Treatment</strong> (usually combined): <strong>exercise</strong>, <strong>oral hydration</strong>, <strong>midodrine</strong> (alpha-1 agonist → vasoconstriction), <strong>fludrocortisone</strong> (mineralocorticoid), <strong>low-dose beta-blocker</strong> for palpitations.</p>" +
        note("Slide 14 says the heart rate rises \"by about 10 bpm.\" The usual POTS criterion is a sustained rise of 30 bpm or more (40 in adolescents) within 10 minutes of standing, without orthostatic hypotension. Ask which number your exam uses."),
        ["pots-definition", "pots-symptoms", "pots-tilt", "pots-treatment"],
        [q("What distinguishes POTS from orthostatic hypotension?", "Heart rate rises on standing while the BP stays up (drop under 20/10)", ["BP falls more than 20/10", "The heart rate falls on standing", "Patients always faint"], "Exaggerated HR with intact vasoconstriction."),
          q("Who most commonly has POTS?", "Adolescent and young adult women", ["Elderly men", "Infants", "Middle-aged men with CAD"], "Young women."),
          q("Which test diagnoses POTS?", "Tilt-table test", ["Echocardiogram", "Exercise stress test", "Coronary angiogram"], "Tilt table."),
          q("How does midodrine help POTS?", "It is an alpha-1 agonist that causes vasoconstriction", ["It is a beta-blocker", "It is a diuretic", "It blocks the AV node"], "Alpha-1 agonist."),
          q("Which mineralocorticoid is used in POTS?", "Fludrocortisone", ["Prednisone", "Spironolactone", "Hydrocortisone cream"], "Fludrocortisone."),
          q("How often do POTS patients faint?", "Rarely; presyncope is common", ["Every time they stand", "Never have any symptoms", "Only during sleep"], "Intact baroreflex.")],
        [q("A 17-year-old girl feels dizzy, shaky and nauseated every time she stands; her HR jumps sharply on a tilt table while her BP barely changes. Diagnosis?", "POTS", ["Orthostatic hypotension", "Inappropriate sinus tachycardia", "Vasovagal syncope"], "HR rise without BP drop on standing."),
          q("A young woman with POTS has palpitations despite fluids, salt and exercise. Which drugs can be added?", "Midodrine, fludrocortisone or a low-dose beta-blocker", ["Amiodarone and warfarin", "Digoxin and dofetilide", "Adenosine and atropine"], "Combination therapy.")])
    ])
  ];
})();
