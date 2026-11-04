/* Cardio Part 2, Arrhythmias (Arrhythmias 2026 deck, 151 slides). Official "Arrhythmias Objectives" in the supplied order.
   Big objectives are split: 6 (one section per brady rhythm), 9 (AF, flutter, MAT, AVNRT, AVRT), 20 (one section per drug).
   Sources outside this deck, labeled on the cards:
   - AF, flutter and MAT (objectives 9-10) are taught in the Chronic Arrhythmia Management deck (slides 16-26, 46-49, 56);
     this deck only lists them in its tachyarrhythmia table.
   - The 12 mg repeat adenosine dose, the 150 mg second amiodarone arrest dose and IV metoprolol 5 mg doses are confirmed
     by the Arrhythmia Pharmacology deck (slides 11, 46, 41). Defibrillation joules (objective 22) and the R-wave timing
     of synchronized shocks are in neither deck: standard AHA ACLS values, labeled on their cards.
   Picture-only slides are EKG strips and conduction diagrams; slide 3 (action potential phases) and slide 111
   (pre-excitation vs orthodromic vs antidromic) were read from the images. */
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
  var ACLS = note("ACLS standard, not on the slides. Check it against the Arrhythmia Pharmacology deck when it arrives.");

  window.ARRHYTHMIAS_OBJECTIVES = [

    /* ---------- 1 ---------- */
    S("01-normal-electrophysiology", "1. Normal electrophysiology of the heart", "Objective 1. Slides 2–7.", [
      C("Ions and the cardiac action potential",
        "<p>A muscle cell contracts when a rapid voltage change, the <strong>action potential</strong>, crosses its membrane. Ions cross through specific <strong>channels or pumps</strong>.</p>" +
        tbl(["Where", "Ion that is more concentrated"], [
          ["<strong>Outside</strong> the cell", "<strong>Na⁺ and Ca²⁺</strong>"],
          ["<strong>Inside</strong> the cell", "<strong>K⁺</strong>"]]) +
        tbl(["Phase", "What happens"], [
          ["<strong>0</strong> Depolarization", "<strong>Na⁺ rushes in</strong> (with some Ca²⁺)"],
          ["<strong>1</strong>", "<strong>Na⁺ channels close</strong>"],
          ["<strong>2</strong> Plateau", "<strong>Ca²⁺ in</strong> balances <strong>K⁺ out</strong>"],
          ["<strong>3</strong> Rapid repolarization", "<strong>K⁺ out</strong>, Ca²⁺ channels close"],
          ["<strong>4</strong> Resting potential", "Leaky K⁺ channels"]]) +
        "<p>Phases 0 to 3 make up the <strong>absolute refractory period</strong>: a second action potential cannot start.</p>" +
        hy("Cardiac cells have a <strong>long absolute refractory period</strong>, unlike skeletal muscle."),
        ["ion-concentrations", "action-potential-phases"],
        [q("Which ion is more concentrated inside cardiac cells?", "Potassium", ["Sodium", "Calcium", "Chloride"], "K⁺ is intracellular; Na⁺ and Ca²⁺ are more concentrated outside."),
          q("Which ion rushes in during phase 0 of the cardiac action potential?", "Sodium", ["Potassium", "Chloride", "Magnesium"], "Phase 0 depolarization is the fast Na⁺ influx."),
          q("The plateau (phase 2) of the cardiac action potential is a balance of:", "Calcium coming in and potassium going out", ["Sodium coming in and calcium going out", "Potassium coming in and sodium going out", "Chloride coming in and potassium going out"], "Phase 2: Ca²⁺ in, K⁺ out."),
          q("Phase 3 of the action potential is driven mainly by:", "Potassium leaving the cell", ["Sodium entering the cell", "Calcium entering the cell", "Sodium leaving the cell"], "Phase 3 is rapid repolarization from K⁺ efflux.")],
        [q("A drug blocks fast sodium channels in ventricular muscle. Which phase of the action potential is most directly slowed?", "Phase 0 depolarization", ["Phase 2 plateau", "Phase 3 repolarization", "Phase 4 resting potential"], "Fast Na⁺ influx drives phase 0."),
          q("A student asks why a second impulse cannot capture ventricular muscle during the plateau. Best answer?", "The cell is in its absolute refractory period", ["Calcium channels are all closed", "The cell is fully repolarized", "Potassium cannot leave the cell"], "Phases 0–3 are the absolute refractory period; cardiac muscle has a long one.")]),
      C("Automaticity, pacemakers and the conduction pathway",
        "<ul><li><strong>Automaticity</strong>: pacemaker cells fire spontaneously.</li>" +
        "<li><strong>Conductivity</strong>: impulses pass directly from cell to cell.</li></ul>" +
        tbl(["Pacemaker", "Intrinsic rate"], [
          ["<strong>SA node</strong> (primary)", "<strong>60–100 bpm</strong>"],
          ["<strong>AV node</strong> (backup when SA fails)", "<strong>40–60 bpm</strong>"],
          ["Ventricle (escape focus)", "<strong>20–40 bpm</strong>"]]) +
        "<p><strong>Pathway:</strong> SA node → both atria → AV node → <strong>bundle of His</strong> → right and left bundle branches → <strong>Purkinje fibers</strong> → rest of the ventricles.</p>" +
        mn("<strong>60 / 40 / 20</strong>: each pacemaker lower down starts about 20 bpm slower (SA 60–100, AV 40–60, ventricle 20–40)."),
        ["automaticity", "pacemaker-rates", "conduction-pathway"],
        [q("What is the intrinsic rate of the SA node?", "60–100 bpm", ["40–60 bpm", "20–40 bpm", "100–150 bpm"], "The SA node is the primary pacemaker at 60–100."),
          q("What is the intrinsic rate of the AV node when it takes over?", "40–60 bpm", ["60–100 bpm", "20–40 bpm", "10–20 bpm"], "AV node backup rate is 40–60."),
          q("After the AV node, the impulse next travels through the:", "Bundle of His", ["Purkinje fibers", "SA node", "Pulmonary veins"], "AV node → bundle of His → bundle branches → Purkinje fibers."),
          q("The ability of pacemaker cells to fire on their own is called:", "Automaticity", ["Conductivity", "Refractoriness", "Contractility"], "Automaticity = spontaneous self-generating pacemaker activity.")],
        [q("A patient's SA node stops firing and the monitor shows a narrow-complex rhythm at 48 bpm. Which structure is most likely pacing the heart?", "The AV node or junction", ["A ventricular focus", "The Purkinje fibers", "The SA node"], "Narrow QRS at 40–60 bpm is the AV-node backup rate."),
          q("A rhythm shows wide QRS complexes at 30 bpm with no P waves after the SA and AV nodes fail. Where is it coming from?", "A ventricular focus", ["The AV node", "The SA node", "An atrial focus"], "Ventricular escape runs at 20–40 bpm with wide QRS.")])
    ]),

    /* ---------- 2 ---------- */
    S("02-mechanisms-of-arrhythmias", "2. General mechanisms of arrhythmias", "Objective 2. Slides 8–10.", [
      C("What an arrhythmia is and who is susceptible",
        "<p>An <strong>arrhythmia</strong> is an irregular heartbeat or absence of normal rhythm. It may be asymptomatic or cause <strong>syncope, near syncope, dizziness, fatigue, palpitations</strong>. It can cause <strong>sudden cardiac death</strong> and lowers perfusion to brain and myocardium.</p>" +
        "<p><strong>Susceptibility:</strong> genetic abnormalities or acquired structural heart disease.</p>" +
        "<p><strong>Factors that raise risk:</strong></p><ul><li>Electrolyte abnormalities</li><li>Hormones: <strong>thyrotoxicosis</strong>, hypercatecholamine states</li><li><strong>Hypoxia</strong></li><li>Medications: <strong>QT prolongation</strong>, changes in automaticity, conduction, refractoriness</li><li><strong>Myocardial ischemia</strong></li></ul>",
        ["arrhythmia-definition", "susceptibility"],
        [q("Which hormonal state increases susceptibility to arrhythmias?", "Thyrotoxicosis", ["Hypoparathyroidism", "Growth hormone deficiency", "Low prolactin"], "Thyrotoxicosis and hypercatecholamine states raise arrhythmia risk."),
          q("Which is listed as a factor that increases arrhythmia susceptibility?", "Hypoxia", ["Hyperglycemia", "Hypernatremia", "Low cholesterol"], "Electrolytes, hormones, hypoxia, medications and ischemia raise risk."),
          q("Which is a possible lethal consequence of an arrhythmia?", "Sudden cardiac death", ["Pericarditis", "Valve calcification", "Aortic dissection"], "Arrhythmias can be lethal and reduce cardiac output.")],
        [q("A patient on a new QT-prolonging antibiotic with low potassium has new palpitations. Which pair of factors raises the arrhythmia risk here?", "A QT-prolonging medication and an electrolyte abnormality", ["Hypoxia and thyrotoxicosis", "Ischemia and hypoxia", "Genetics and thyrotoxicosis"], "Medication effects (QT prolongation) and electrolyte abnormalities are both listed risk factors.")]),
      C("The four mechanisms",
        tbl(["Mechanism", "What goes wrong", "Examples"], [
          ["<strong>Impulse formation</strong>", "SA node fails to generate or time signals", "Sinus arrest, premature beats, ectopic focus"],
          ["<strong>Impulse conduction</strong>", "Signal starts normally but is blocked or delayed", "SA block, AV block"],
          ["<strong>Reentry</strong>", "One impulse loops and re-excites tissue that should be resting", "<strong>AVNRT, WPW</strong>"],
          ["<strong>Triggered activity</strong>", "Cells fire again before they should after a beat", "Extra beats (digoxin toxicity, ischemia)"]]) +
        hy("<strong>Reentry</strong> is the most common cause of narrow-complex tachycardia."),
        ["formation", "conduction", "reentry", "triggered"],
        [q("AV block is an example of which arrhythmia mechanism?", "Disorder of impulse conduction", ["Disorder of impulse formation", "Reentry", "Triggered activity"], "The signal starts normally but is blocked on the way to the ventricles."),
          q("AVNRT and WPW are examples of which mechanism?", "Reentry", ["Triggered activity", "Disorder of impulse formation", "Disorder of impulse conduction"], "A single impulse loops repeatedly."),
          q("Sinus arrest and premature beats are disorders of:", "Impulse formation", ["Impulse conduction", "Reentry", "Refractoriness"], "The pacemaker fails to generate or time signals."),
          q("Cells firing again right after a beat, before they should, is called:", "Triggered activity", ["Reentry", "Automaticity", "Conduction block"], "Triggered activity causes extra beats.")],
        [q("An EP study shows a single impulse circling through tissue and reactivating it after its refractory period ends. Which mechanism is this?", "Reentry", ["Triggered activity", "Sinus node arrest", "AV block"], "Reentry = a loop that re-excites recovered tissue."),
          q("A patient with digoxin toxicity develops extra beats that arise right after normal beats. Which mechanism best explains them?", "Triggered activity", ["Reentry", "AV conduction block", "Sinus arrest"], "Digoxin toxicity is the deck's classic triggered-activity example.")])
    ]),

    /* ---------- 3 ---------- */
    S("03-sinus-arrhythmia-and-pacs", "3. Sinus arrhythmia and PACs: definition and EKG", "Objective 3. Slides 12–16.", [
      C("Sinus arrhythmia",
        "<p>A variation of normal sinus rhythm with an <strong>irregular rate</strong>: P-P interval varies by <strong>0.12 seconds</strong>.</p>" +
        tbl(["Type", "Key feature"], [
          ["<strong>Phasic</strong> (respiratory)", "Rate <strong>rises on inspiration</strong>, falls on expiration"],
          ["<strong>Nonphasic</strong>", "Not related to breathing"],
          ["<strong>Ventriculophasic</strong>", "In <strong>3rd-degree AV block</strong> and after a PVC's compensatory pause: a P-P interval containing a QRS is <strong>shorter</strong> than one without"]]) +
        "<p><strong>Respiratory sinus arrhythmia:</strong> inspiration <strong>inhibits vagal tone</strong> (rate up); expiration raises vagal tone (rate down). Common and benign, seen in <strong>young healthy people</strong>; also associated with obesity, diabetes and hypertension. <strong>No further cardiac workup</strong> needed.</p>",
        ["sinus-arrhythmia-definition", "sinus-arrhythmia-types", "respiratory-sinus-arrhythmia"],
        [q("Sinus arrhythmia is defined by a P-P interval variation of:", "0.12 seconds", ["0.04 seconds", "0.20 seconds", "0.40 seconds"], "Variation in P-P interval by 0.12 s."),
          q("In phasic (respiratory) sinus arrhythmia, the heart rate:", "Increases on inspiration and decreases on expiration", ["Decreases on inspiration and increases on expiration", "Does not change with breathing", "Drops only during breath holding"], "Inspiration inhibits vagal tone, so the rate rises."),
          q("Ventriculophasic sinus arrhythmia is seen in:", "Third-degree AV block", ["First-degree AV block", "Atrial flutter", "WPW pattern"], "Also after the compensatory pause of a PVC."),
          q("What workup does respiratory sinus arrhythmia need?", "No additional cardiac evaluation", ["Echocardiogram", "Holter monitor", "Electrophysiology study"], "It is common, benign and usually normal.")],
        [q("A healthy 19-year-old's rhythm strip shows sinus P waves before every QRS, with the rate speeding up as she breathes in and slowing as she breathes out. Next step?", "Reassure her; this is normal respiratory sinus arrhythmia", ["Order an echocardiogram", "Start metoprolol", "Refer for pacemaker"], "Phasic sinus arrhythmia is benign in young healthy people.")]),
      C("PACs on the EKG",
        "<p>A <strong>premature atrial contraction</strong> is an early beat from an <strong>ectopic atrial focus</strong> (not the SA node). The atria \"jump the gun\".</p>" +
        "<ul><li>P wave comes <strong>earlier than expected</strong></li><li>P wave <strong>looks different</strong> (new origin)</li><li>QRS is usually <strong>normal</strong></li></ul>" +
        tbl(["AV node status when the PAC arrives", "Result"], [
          ["Ready", "Conducts normally, then a <strong>short pause</strong>"],
          ["Still refractory", "No QRS: a <strong>nonconducted PAC</strong>"]]) +
        "<p>PACs can be sporadic or patterned (every 2nd or 3rd beat).</p>",
        ["pac-definition", "pac-ekg", "nonconducted-pac"],
        [q("Where does a PAC originate?", "An ectopic focus in the atria", ["The SA node", "The ventricle", "The bundle of His"], "A group of atrial cells other than the SA node fires early."),
          q("How does the P wave of a PAC look?", "Early and different in shape from the sinus P waves", ["Identical to sinus P waves and on time", "Absent", "Inverted after the QRS"], "New origin = different shape; premature = early."),
          q("The QRS that follows a conducted PAC is usually:", "Normal", ["Wide and bizarre", "Absent", "Preceded by a delta wave"], "The ventricles still depolarize normally."),
          q("A PAC that arrives while the AV node is still refractory produces:", "A P wave with no QRS (nonconducted PAC)", ["A wide QRS", "A delta wave", "Atrial flutter"], "No conduction = missing QRS.")],
        [q("A strip shows an early, oddly shaped P wave followed by a narrow QRS and a short pause, then sinus rhythm resumes. What is it?", "Premature atrial contraction", ["Premature ventricular contraction", "Mobitz I block", "Junctional escape beat"], "Early abnormal P + normal QRS + short pause = PAC."),
          q("A strip shows an early, abnormal P wave buried after a T wave with no QRS after it, then sinus rhythm resumes. It could be mistaken for a dropped beat. What is it?", "Nonconducted PAC", ["Mobitz II block", "Sinus arrest", "Third-degree AV block"], "The PAC reached a refractory AV node, so no QRS followed.")])
    ]),

    /* ---------- 4 ---------- */
    S("04-pac-risk-factors-treatment", "4. PACs: risk factors and treatment", "Objective 4. Slides 17–19.", [
      C("PAC triggers, symptoms and risk",
        "<p>PACs occur at <strong>all ages</strong> and usually do <strong>not</strong> mean heart disease. More common with <strong>heart and lung disease</strong>.</p>" +
        tbl(["Trigger type", "Examples"], [
          ["Raise <strong>sympathetic</strong> tone", "<strong>Cocaine, amphetamines, caffeine, nicotine, alcohol</strong>; also stress and fatigue"],
          ["Raise <strong>parasympathetic</strong> tone", "<strong>Digoxin</strong>"]]) +
        "<p><strong>Symptoms:</strong> most have few or none; palpitations, sense of skipped beats, dizziness. They rarely cause hemodynamic compromise (except with underlying bradycardia).</p>" +
        hy("<strong>Frequent PACs can degenerate into atrial fibrillation or flutter.</strong>"),
        ["pac-triggers", "pac-symptoms", "pac-progression"],
        [q("Which drug is listed as a parasympathetic trigger of PACs?", "Digoxin", ["Caffeine", "Cocaine", "Albuterol"], "Digoxin raises parasympathetic tone; the others are sympathetic triggers."),
          q("Frequent PACs can degenerate into:", "Atrial fibrillation or flutter", ["Ventricular fibrillation", "Complete heart block", "Torsades de pointes"], "PACs can trigger AF/flutter."),
          q("Which is a sympathetic-tone PAC trigger?", "Nicotine", ["Digoxin", "Beta-blockers", "Sleep"], "Cocaine, amphetamines, caffeine, nicotine and alcohol raise sympathetic tone."),
          q("Most patients with PACs have:", "Few or no symptoms", ["Syncope", "Chest pain at rest", "Heart failure"], "Palpitations or skipped beats are the usual complaints when present.")],
        [q("A 35-year-old night-shift nurse drinks five energy drinks a day and feels her heart \"skip.\" EKG shows sinus rhythm with occasional PACs. Most likely trigger?", "Caffeine", ["Digoxin", "Hypothyroidism", "Underlying cardiomyopathy"], "Caffeine raises sympathetic tone and is a classic PAC trigger.")]),
      C("Treating PACs",
        tbl(["Situation", "Treatment"], [
          ["<strong>Asymptomatic</strong>", "<strong>No treatment</strong>"],
          ["<strong>Symptomatic</strong>", "<strong>Reassurance</strong> and <strong>avoid triggers</strong> (nicotine, alcohol, caffeine, stress)"],
          ["Persistent symptoms", "<strong>Metoprolol 25 mg BID</strong>"],
          ["Other drugs", "Class IA (quinidine, procainamide) or class III (amiodarone, sotalol)"],
          ["PACs triggering AF", "<strong>Catheter ablation</strong>"]]),
        ["pac-treatment", "pac-metoprolol", "pac-ablation"],
        [q("What is the treatment for asymptomatic PACs?", "No treatment", ["Metoprolol", "Catheter ablation", "Amiodarone"], "Asymptomatic PACs need no treatment."),
          q("What drug and dose does the deck give for persistent symptomatic PACs?", "Metoprolol 25 mg BID", ["Amiodarone 300 mg IV", "Atropine 1 mg IV", "Adenosine 6 mg IV"], "Metoprolol 25 mg BID."),
          q("When is catheter ablation used for PACs?", "For symptomatic PACs that trigger atrial fibrillation", ["For any asymptomatic PAC", "For PACs during pregnancy", "For PACs from caffeine"], "Ablation targets PACs triggering AF."),
          q("The first step for a patient bothered by PACs is:", "Reassurance and trigger avoidance", ["Amiodarone", "Pacemaker", "Cardioversion"], "Explain their benign nature and remove triggers.")],
        [q("A 42-year-old with bothersome palpitations from PACs has already cut out caffeine, alcohol and nicotine, but the symptoms persist. Structural heart disease has been excluded. Reasonable next step?", "Metoprolol 25 mg BID", ["Immediate catheter ablation", "Permanent pacemaker", "IV adenosine"], "Persistent symptoms after trigger avoidance: metoprolol."),
          q("A patient's monitor shows bursts of PACs that repeatedly set off paroxysmal atrial fibrillation despite medication. Which treatment targets this?", "Catheter ablation", ["Reassurance only", "Atropine", "Digoxin"], "Ablation for symptomatic PACs triggering AF.")])
    ]),

    /* ---------- 5 ---------- */
    S("05-hemodynamic-instability", "5. Signs of hemodynamic instability in a dysrhythmia", "Objective 5. Slides 11, 72–73, 116.", [
      C("Instability indicators",
        "<ul><li><strong>Hypotension</strong>: systolic BP <strong>&lt; 90 mm Hg</strong> with systemic hypoperfusion</li>" +
        "<li><strong>Altered mentation</strong></li>" +
        "<li><strong>Chest pain</strong> (coronary ischemia)</li>" +
        "<li><strong>Dyspnea</strong> (pulmonary edema)</li>" +
        "<li><strong>Extremely rapid ventricular rate</strong>: over <strong>220–240 bpm</strong> in adults</li></ul>" +
        "<p>For unstable VT the deck also names heart failure and <strong>signs of shock</strong>.</p>" +
        hy("Unstable with a pulse = <strong>electricity</strong> (synchronized cardioversion for a tachycardia, atropine and pacing for a bradycardia)."),
        ["instability-hypotension", "instability-symptoms", "instability-rate"],
        [q("Which systolic BP marks hypotension as an instability sign in a dysrhythmia?", "Less than 90 mm Hg", ["Less than 110 mm Hg", "Less than 70 mm Hg", "Less than 100 mm Hg"], "SBP < 90 with hypoperfusion."),
          q("Dyspnea in an unstable arrhythmia patient is due to:", "Pulmonary edema", ["Bronchospasm", "Pneumothorax", "Anemia"], "Dyspnea from pulmonary edema."),
          q("Chest pain as an instability sign reflects:", "Coronary ischemia", ["Pericarditis", "Esophageal spasm", "Rib fracture"], "Chest pain from coronary ischemia."),
          q("Above what ventricular rate is a tachycardia itself considered an instability sign in adults?", "220–240 bpm", ["120 bpm", "150 bpm", "180 bpm"], "Extremely rapid ventricular rate over 220–240 bpm.")],
        [q("A 70-year-old in a narrow-complex tachycardia at 170 bpm is confused, has BP 82/50 and crackles. How is this patient classified?", "Unstable: hypotension, altered mentation and pulmonary edema", ["Stable, because the QRS is narrow", "Stable, because the rate is under 220", "Unstable only if chest pain develops"], "Any of hypotension, AMS, ischemic chest pain or pulmonary edema makes the patient unstable."),
          q("A patient in a tachycardia at 160 bpm is alert, BP 128/76, no chest pain and clear lungs. Classification?", "Stable", ["Unstable from the rate alone", "Unstable because of tachycardia over 150", "Pulseless"], "No hypotension, AMS, chest pain, dyspnea or rate > 220.")]),
      C("Approach to a tachyarrhythmia",
        "<ol><li>Is the patient <strong>conscious</strong>? <strong>Stable or unstable</strong>?</li><li>Is the QRS <strong>narrow or wide</strong>?</li><li>Is the rhythm <strong>regular or irregular</strong>?</li></ol>" +
        tbl(["Category", "Rhythms"], [
          ["<strong>Supraventricular (narrow QRS)</strong>", "Sinus tachycardia, AF, atrial flutter, MAT, AVNRT, AVRT"],
          ["<strong>Ventricular (wide QRS)</strong>", "Monomorphic VT, polymorphic VT, VF"]]),
        ["tachy-approach", "narrow-vs-wide"],
        [q("Which rhythm is a supraventricular (narrow-QRS) tachycardia?", "AVNRT", ["Monomorphic VT", "Ventricular fibrillation", "Torsades de pointes"], "Narrow: sinus tach, AF, flutter, MAT, AVNRT, AVRT."),
          q("Besides narrow vs wide QRS, what is the other rhythm question in the tachycardia approach?", "Is the rhythm regular or irregular?", ["Is the PR interval long?", "Is there a U wave?", "Is the axis normal?"], "Narrow or wide, regular or irregular, then stable or unstable."),
          q("Which tachycardia is in the wide-QRS (ventricular) group?", "Polymorphic VT", ["MAT", "Atrial flutter", "Sinus tachycardia"], "Ventricular: monomorphic VT, polymorphic VT, VF.")],
        [q("A monitor shows a narrow, irregularly irregular tachycardia at 140 bpm with no P waves. Which group does it belong to?", "Supraventricular tachycardia", ["Ventricular tachycardia", "Escape rhythm", "Bradyarrhythmia"], "Narrow complex = supraventricular; irregularly irregular suggests AF.")])
    ]),

    /* ---------- 6a ---------- */
    S("06a-sinus-bradycardia", "6a. Sinus bradycardia", "Objective 6. Slides 20–25.", [
      C("Sinus bradycardia: definition and causes",
        "<p>SA node rate <strong>&lt; 60 bpm</strong>. Normal and adaptive in <strong>athletes and during sleep</strong>; may mean true sinus node disease in the <strong>elderly and those with heart disease</strong>.</p>" +
        tbl(["Intrinsic", "Extrinsic"], [
          ["Ischemic heart disease, <strong>acute MI</strong>, cardiomyopathy, heart transplant, pericarditis, trauma, rheumatic heart disease, <strong>Lyme disease</strong>, viral myocarditis, <strong>OSA</strong>",
            "Drugs (antiarrhythmics, antihypertensives, antipsychotics, opioids, sedatives), vasovagal, <strong>hypothyroidism</strong>, hypothermia, hypoxia, <strong>hyperkalemia</strong>, anorexia nervosa, <strong>increased ICP</strong>"]]),
        ["sinus-brady-definition", "sinus-brady-etiology"],
        [q("Sinus bradycardia is a sinus rate below:", "60 bpm", ["50 bpm", "40 bpm", "70 bpm"], "SA node rate < 60 bpm."),
          q("Which is an extrinsic cause of sinus bradycardia?", "Hypothyroidism", ["Rheumatic heart disease", "Heart transplant", "Viral myocarditis"], "Hypothyroidism, hypothermia, hypoxia, hyperkalemia, drugs, raised ICP and anorexia are extrinsic."),
          q("Which infection is listed as an intrinsic cause of sinus bradycardia?", "Lyme disease", ["Strep throat", "Influenza", "Hepatitis A"], "Lyme disease and viral myocarditis are intrinsic causes."),
          q("Which sleep disorder is listed as a cause of sinus bradycardia?", "Obstructive sleep apnea", ["Narcolepsy", "Insomnia", "Restless legs"], "OSA is on the intrinsic list.")],
        [q("A 24-year-old marathon runner has a resting HR of 48, no symptoms and a normal exam. Interpretation?", "Adaptive sinus bradycardia; no treatment needed", ["Sick sinus syndrome needing a pacemaker", "Hypothyroidism until proven otherwise", "Mobitz II block"], "Sinus bradycardia is a normal adaptation in athletes."),
          q("A patient with a head injury has a falling heart rate (now 44), rising BP and irregular breathing. Which cause of sinus bradycardia fits?", "Increased intracranial pressure", ["Anorexia nervosa", "Hyperthyroidism", "Rheumatic heart disease"], "Increased ICP is an extrinsic cause of sinus bradycardia.")]),
      C("Sinus bradycardia: symptoms and diagnosis",
        "<p>Many have <strong>no symptoms</strong>. When the rate is too slow: <strong>lightheadedness, presyncope or syncope, fatigue, exercise intolerance, cognitive slowing</strong>. Low output can worsen <strong>angina and heart failure</strong>.</p>" +
        "<p><strong>Diagnosis:</strong> a slow pulse on exam is confirmed by <strong>ECG</strong>. It is vital to <strong>exclude other bradyarrhythmias such as AV block</strong>.</p>",
        ["sinus-brady-symptoms", "sinus-brady-diagnosis"],
        [q("How is sinus bradycardia confirmed?", "ECG after a slow pulse is found on exam", ["Echocardiogram", "Stress test", "Serum troponin"], "ECG confirms it."),
          q("When diagnosing sinus bradycardia, which other rhythm is vital to exclude?", "AV block", ["Atrial flutter", "AVNRT", "Sinus tachycardia"], "Exclude AV block and other bradyarrhythmias."),
          q("Which is a symptom of a too-slow heart rate?", "Cognitive slowing", ["Fever", "Pleuritic chest pain", "Hemoptysis"], "Lightheadedness, syncope, fatigue, exercise intolerance, cognitive slowing.")],
        [q("An 80-year-old with stable angina now gets chest pain with less activity. Pulse is 42 and regular. Why might the angina be worse?", "Bradycardia lowers cardiac output and worsens comorbid angina", ["Bradycardia raises myocardial oxygen demand", "Bradycardia causes coronary spasm", "Bradycardia causes anemia"], "Reduced output exacerbates angina and heart failure.")]),
      C("Sinus bradycardia: treatment",
        tbl(["Patient", "Treatment"], [
          ["<strong>Asymptomatic</strong>", "<strong>None</strong>"],
          ["<strong>Hemodynamically unstable</strong>", "<strong>Atropine 1 mg IV</strong>, repeat every <strong>3–5 min</strong> to <strong>3 mg total</strong> → if it fails, temporary <strong>transcutaneous or transvenous pacing</strong> → definitive <strong>permanent pacemaker</strong>"],
          ["<strong>Stable</strong>", "Find and treat the cause: <strong>medications, hypothyroidism, acute MI</strong>, others"]]),
        ["sinus-brady-unstable", "sinus-brady-stable"],
        [q("Atropine dose for unstable sinus bradycardia?", "1 mg IV every 3–5 minutes, up to 3 mg total", ["0.5 mg IV once", "6 mg rapid IV push", "1 mg IV every 10 minutes, no maximum"], "1 mg IV q3–5 min to 3 mg."),
          q("If atropine fails in unstable sinus bradycardia, next step?", "Temporary transcutaneous or transvenous pacing", ["Adenosine", "Synchronized cardioversion", "Amiodarone"], "Pacing if atropine is unsuccessful."),
          q("What is the definitive treatment for persistent symptomatic sinus bradycardia?", "Permanent pacemaker", ["Long-term atropine", "Catheter ablation", "ICD"], "Permanent pacemaker is definitive."),
          q("Treatment for a stable patient with sinus bradycardia focuses on:", "Finding and treating the underlying cause", ["Immediate pacing", "Atropine every 5 minutes", "Defibrillation"], "Look for meds, hypothyroidism, MI.")],
        [q("A 68-year-old has HR 38, BP 78/44 and is confused. Atropine 1 mg IV was given twice 5 minutes apart with no change. Next step?", "One more 1 mg dose is allowed, then transcutaneous pacing if it fails", ["Adenosine 6 mg IV", "Defibrillate", "Wait for labs before doing anything"], "Atropine to 3 mg total, then pacing."),
          q("A stable 75-year-old with HR 50 started a new beta-blocker last week and also reports weight gain and cold intolerance. Best approach?", "Review the medication and check thyroid function", ["Place a permanent pacemaker today", "Give atropine", "Start transcutaneous pacing"], "Stable patients: evaluate and treat causes like meds and hypothyroidism.")])
    ]),

    /* ---------- 6b ---------- */
    S("06b-sick-sinus-syndrome", "6b. Sick sinus syndrome", "Objective 6. Slides 26–34.", [
      C("Sick sinus syndrome: definition and causes",
        "<p><strong>Sinus node dysfunction</strong>: impaired SA pacemaker function and impulse transmission. Rhythms: atrial bradyarrhythmias, atrial tachyarrhythmias, and <strong>tachy-brady syndrome</strong> (alternating). ECG can show <strong>bradycardia, sinus pauses, sinus arrest</strong>.</p>" +
        tbl(["Intrinsic", "Extrinsic"], [
          ["<strong>Most common: age-related degeneration of the SA node</strong>; congenital disorders, arrhythmias, infiltrative disorders, surgery",
            "<strong>Increased vagal tone</strong> (carotid sinus hypersensitivity, vasovagal syncope); <strong>metabolic</strong>: hypothyroidism, hypothermia, hypocalcemia, hypoxia, hyperkalemia"]]),
        ["sss-definition", "sss-etiology", "tachy-brady"],
        [q("What is the most common cause of sick sinus syndrome?", "Age-related degeneration of the SA node", ["Lyme disease", "Digoxin toxicity", "Cardiac surgery"], "Intrinsic age-related degeneration is most common."),
          q("Alternating episodes of bradycardia and tachycardia in sinus node dysfunction are called:", "Tachy-brady syndrome", ["Wenckebach phenomenon", "Ventriculophasic arrhythmia", "Pseudo-pacemaker syndrome"], "Tachy-brady syndrome is a form of SSS."),
          q("Which is an extrinsic (vagal) cause of sinus node dysfunction?", "Carotid sinus hypersensitivity", ["Infiltrative disease", "Congenital disorder", "Age-related fibrosis"], "Increased vagal tone: carotid sinus hypersensitivity, vasovagal."),
          q("Which ECG finding fits sick sinus syndrome?", "Sinus pauses or sinus arrest", ["Delta wave", "Sawtooth flutter waves", "Prolonged QT"], "Bradycardia, pauses and arrest.")],
        [q("An 82-year-old's Holter shows runs of atrial fibrillation at 130 bpm that end in 4-second pauses, then sinus bradycardia at 42. Diagnosis?", "Sick sinus syndrome (tachy-brady syndrome)", ["Mobitz II block", "AVNRT", "Inappropriate sinus tachycardia"], "Alternating tachy and brady from sinus node dysfunction.")]),
      C("Sick sinus syndrome: presentation and diagnosis",
        "<p><strong>Symptoms:</strong> fatigue, lightheadedness, palpitations, presyncope, syncope, dyspnea on exertion, chest discomfort; angina or HF in cardiac patients.</p>" +
        "<p><strong>Chronotropic incompetence:</strong> the heart rate does not rise appropriately with activity.</p>" +
        tbl(["Step", "Test"], [
          ["Key", "<strong>Symptom-rhythm correlation</strong>"],
          ["First", "History and <strong>ECG</strong>"],
          ["Uncertain after ECG", "<strong>Exercise stress test</strong>"],
          ["Exercise test inconclusive", "<strong>Ambulatory ECG monitoring for 2–4 weeks</strong>"]]),
        ["sss-presentation", "chronotropic-incompetence", "sss-diagnosis"],
        [q("What is essential for diagnosing sick sinus syndrome?", "Correlation of symptoms with the rhythm", ["An abnormal echocardiogram", "Elevated troponin", "A positive tilt table"], "Symptom-rhythm correlation is key."),
          q("Failure of the heart rate to rise appropriately with activity is called:", "Chronotropic incompetence", ["Pseudo-pacemaker syndrome", "Sinus arrhythmia", "Vagal escape"], "Inappropriate HR response to demand."),
          q("If exercise testing is inconclusive for SSS, which test is next?", "Ambulatory ECG monitoring for 2–4 weeks", ["Cardiac MRI", "Coronary angiography", "Tilt table test"], "2–4 weeks of ambulatory monitoring.")],
        [q("A 77-year-old gets lightheaded climbing stairs. Resting ECG shows sinus rhythm at 58. On a treadmill her HR only reaches 80 at peak effort. Which feature of SSS does this show?", "Chronotropic incompetence", ["Tachy-brady syndrome", "Sinus arrest", "Mobitz I block"], "The rate fails to rise to meet demand.")]),
      C("Sick sinus syndrome: treatment and pacemaker indications",
        "<ol><li><strong>Treat reversible causes</strong>.</li><li><strong>Hold offending medications</strong>.</li><li><strong>Permanent pacemaker</strong> if those fail or no cause is found.</li></ol>" +
        "<p><strong>Permanent pacemaker indications:</strong></p><ul><li><strong>Symptomatic</strong> documented bradycardia</li><li><strong>Chronotropic incompetence</strong></li><li>SND caused by a <strong>necessary medication</strong> (for example, for AF)</li><li>Symptomatic patients with HR <strong>&lt; 40 bpm</strong>, even if not directly linked to symptoms</li></ul>" +
        hy("Tachy-brady SSS: the pacemaker lets you give the rate-control drug the patient needs."),
        ["sss-treatment", "ppm-indications"],
        [q("First step in treating sick sinus syndrome?", "Treat reversible causes and hold offending medications", ["Immediate permanent pacemaker", "Catheter ablation", "Amiodarone"], "Reverse causes first, then pace if needed."),
          q("Which is an indication for a permanent pacemaker in SSS?", "Sinus node dysfunction caused by a medication the patient needs", ["Asymptomatic HR of 55 during sleep", "Respiratory sinus arrhythmia", "Isolated PACs"], "SND due to necessary meds (for example for AF) is an indication."),
          q("Below what heart rate should a pacemaker be considered in symptomatic SSS even if symptoms are not clearly linked?", "40 bpm", ["60 bpm", "50 bpm", "30 bpm"], "Symptomatic patients with HR < 40.")],
        [q("A patient with tachy-brady syndrome needs a beta-blocker for AF rate control, but every dose causes symptomatic pauses. Best long-term solution?", "Permanent pacemaker, then continue the beta-blocker", ["Stop all rate control", "Atropine as needed", "Catheter ablation of the SA node"], "SND due to a necessary medication is a pacemaker indication.")])
    ]),

    /* ---------- 6c ---------- */
    S("06c-first-degree-av-block", "6c. First-degree AV block", "Objective 6. Slides 35–39.", [
      C("First-degree AV block: definition and causes",
        "<p>Delayed (not blocked) atrial-to-ventricular conduction: <strong>PR &gt; 200 ms</strong> on every beat, every P conducts. Most common site: <strong>AV node</strong>; can be His-Purkinje.</p>" +
        "<p><strong>Causes:</strong> <strong>athletes</strong> (high vagal tone), age-related degeneration, myocarditis, <strong>acute MI (most often inferior)</strong>, <strong>digoxin, beta-blockers, CCBs</strong>, <strong>Lyme disease</strong>, dilated cardiomyopathy, <strong>sarcoidosis</strong>.</p>",
        ["first-degree-definition", "first-degree-etiology"],
        [q("First-degree AV block is a PR interval longer than:", "200 ms", ["120 ms", "300 ms", "100 ms"], "PR > 200 ms (0.20 s)."),
          q("The most common site of delay in first-degree AV block is the:", "AV node", ["SA node", "Bundle of Kent", "Right bundle branch"], "AV node most common; His-Purkinje possible."),
          q("Which type of MI most commonly causes first-degree AV block?", "Inferior MI", ["Anterior MI", "Lateral MI", "Posterior MI only"], "Inferior wall MI."),
          q("Which drug class can cause first-degree AV block?", "Calcium channel blockers", ["Loop diuretics", "Statins", "ACE inhibitors"], "Digoxin, beta-blockers and CCBs slow AV conduction.")],
        [q("A fit 22-year-old cyclist has PR 240 ms with every P followed by a QRS and no symptoms. Most likely explanation?", "High vagal tone in an athlete", ["Acute anterior MI", "Mobitz II block", "WPW"], "Athletes commonly have first-degree AV block from vagal tone."),
          q("A hiker from Connecticut has a new expanding target rash and a PR interval of 260 ms. Which cause should you think of?", "Lyme disease", ["Sarcoidosis", "Digoxin toxicity", "Hyperthyroidism"], "Lyme is an inflammatory cause of AV block.")]),
      C("First-degree AV block: findings and pseudo-pacemaker syndrome",
        "<p>Usually <strong>benign</strong> and asymptomatic.</p>" +
        "<p><strong>Pseudo-pacemaker syndrome:</strong> marked first-degree block makes the <strong>atria contract right after the ventricles</strong> (against closed AV valves). Symptoms mimic pacemaker syndrome: malaise, dyspnea, orthopnea, cough, dizziness, chest discomfort, <strong>sensation of throat fullness</strong>.</p>",
        ["first-degree-benign", "pseudo-pacemaker"],
        [q("Pseudo-pacemaker syndrome happens when marked first-degree AV block causes:", "Atrial contraction right after ventricular contraction", ["Ventricular contraction without atrial input", "Two QRS complexes per P wave", "A delta wave"], "The atria contract against closed AV valves."),
          q("Which unusual symptom is listed for pseudo-pacemaker syndrome?", "Sensation of throat fullness", ["Hematuria", "Jaundice", "Visual halos"], "Throat fullness along with malaise, dyspnea, cough, dizziness."),
          q("Most first-degree AV block is:", "Benign and asymptomatic", ["Symptomatic and unstable", "A pacemaker indication", "A precursor to VF"], "It rarely produces symptoms.")],
        [q("A 70-year-old with a PR of 380 ms has malaise, orthopnea and a feeling of fullness in the throat. No dropped beats. What explains the symptoms?", "Pseudo-pacemaker syndrome from marked first-degree AV block", ["Mobitz II block", "Complete heart block", "Sick sinus syndrome"], "Marked PR prolongation causes atrial contraction after ventricular contraction.")]),
      C("First-degree AV block: evaluation and treatment",
        "<p><strong>Diagnosis:</strong> must be made by <strong>ECG</strong>.</p>" +
        "<p><strong>History:</strong> known structural or congenital heart disease, fitness level, <strong>new medications</strong>, recent cardiac procedures.</p>" +
        "<p><strong>Treatment:</strong> none if asymptomatic.</p>" +
        hy("New first-degree block <strong>during ACS</strong> signals a <strong>higher risk of progressing to complete heart block</strong>."),
        ["first-degree-evaluation", "first-degree-acs"],
        [q("Treatment for asymptomatic first-degree AV block?", "None", ["Atropine", "Pacemaker", "Isoproterenol"], "No treatment is required."),
          q("First-degree AV block during an ACS event signals higher risk of:", "Progression to complete heart block", ["Atrial fibrillation", "Torsades", "Pericarditis"], "It can herald complete heart block."),
          q("Which history question is part of evaluating first-degree AV block?", "Any new medications", ["Travel to Asia", "Family history of colon cancer", "Recent dental work"], "Ask about heart disease, fitness, new meds and recent procedures.")],
        [q("A patient admitted with an acute inferior STEMI develops a new PR of 260 ms. Why does this matter?", "It raises the risk of progression to complete heart block, so monitor closely", ["It needs no attention at all", "It means the STEMI has resolved", "It requires immediate defibrillation"], "First-degree block during ACS signals higher risk of complete heart block.")])
    ]),

    /* ---------- 6d ---------- */
    S("06d-mobitz-type-1", "6d. Second-degree AV block, Mobitz type I (Wenckebach)", "Objective 6. Slides 40–45.", [
      C("Mobitz I: what it looks like and why",
        "<p><strong>PR gradually lengthens</strong> until a P wave is <strong>not conducted</strong> (dropped QRS). Ratio of conducted to dropped beats can be fixed or varied. Usually at the <strong>AV node</strong>.</p>" +
        "<p><strong>Mechanism:</strong> each depolarization lengthens the AV node's refractory period, so each impulse conducts more slowly until one hits the absolute refractory period and is blocked. The pause lets the node recover and the cycle repeats: <strong>grouped beating</strong>.</p>" +
        mn("\"Longer, longer, longer, drop, now you have a Wenckebach.\""),
        ["mobitz1-ekg", "mobitz1-mechanism"],
        [q("What is the EKG hallmark of Mobitz I?", "Progressive PR prolongation until a QRS is dropped", ["Constant PR with sudden dropped QRS", "No relation between P and QRS", "Short PR with delta wave"], "Wenckebach = progressive PR lengthening, then a dropped beat."),
          q("Where does Mobitz I block usually occur?", "AV node", ["Below the bundle of His", "Bundle of Kent", "SA node"], "Usually at the AV node."),
          q("The repeating cycles of conducted beats followed by a pause in Mobitz I create:", "Grouped beating", ["Electrical alternans", "Bigeminy", "Sawtooth waves"], "The cycle repeats after recovery."),
          q("Why does the PR lengthen beat by beat in Mobitz I?", "Each depolarization prolongs the AV node refractory period", ["The SA node slows down", "An accessory pathway activates", "Potassium leaks out of the node"], "Subsequent impulses meet a longer refractory period.")],
        [q("A strip shows PR intervals of 200, 260, 320 ms, then a P wave with no QRS, then the pattern repeats. Diagnosis?", "Second-degree AV block, Mobitz type I", ["Mobitz type II", "Third-degree AV block", "First-degree AV block"], "Progressive PR prolongation before a drop = Wenckebach.")]),
      C("Mobitz I: causes and presentation",
        tbl(["Group", "Causes"], [
          ["<strong>Normal</strong>", "Normal people and <strong>athletes</strong> (vagal tone)"],
          ["<strong>Pathologic</strong>", "<strong>Acute inferior MI</strong>, cardiomyopathy (sarcoidosis), myocarditis (<strong>Lyme</strong>)"],
          ["<strong>Iatrogenic</strong>", "<strong>Digoxin toxicity</strong>, beta-blockers, CCBs, post cardiac surgery, post ablation"]]) +
        "<p>Often <strong>transient and asymptomatic</strong>. With a slow sinus rate and 2:1 or 3:2 block, output can fall: pale, diaphoretic, hypoperfusion or HF (crackles, JVD, edema).</p>" +
        hy("<strong>Mobitz I rarely progresses to complete heart block.</strong>"),
        ["mobitz1-etiology", "mobitz1-presentation", "mobitz1-progression"],
        [q("How often does Mobitz I progress to complete heart block?", "Rarely", ["Usually", "Always within 48 hours", "In about half of cases"], "Mobitz I rarely progresses."),
          q("Which MI is linked to Mobitz I?", "Acute inferior MI", ["Acute anterior MI", "Septal MI with bundle necrosis", "Lateral MI only"], "Inferior MI affects the AV node."),
          q("Which is an iatrogenic cause of Mobitz I?", "Digoxin toxicity", ["Hyperthyroidism", "Lyme disease", "Athletic training"], "Digoxin toxicity, BB, CCB, post surgery, post ablation."),
          q("Most patients with Mobitz I are:", "Asymptomatic, and the block is often transient", ["Pulseless", "In cardiogenic shock", "Pacemaker dependent"], "Often transient and asymptomatic.")],
        [q("A 74-year-old on digoxin has nausea, yellow-tinged vision and a strip with progressive PR lengthening and dropped beats. Most likely cause of the block?", "Digoxin toxicity", ["Anterior MI", "Hypothyroidism", "Normal vagal tone"], "Digoxin toxicity is an iatrogenic cause of Mobitz I.")]),
      C("Mobitz I: treatment",
        tbl(["Patient", "Treatment"], [
          ["<strong>Asymptomatic</strong>", "<strong>None</strong>; look for reversible causes"],
          ["<strong>Symptomatic + unstable</strong>", "<strong>Atropine 1 mg IV</strong> q3–5 min to 3 mg → <strong>temporary pacing</strong> if ineffective"],
          ["<strong>Symptomatic + stable</strong>", "Monitor with <strong>pacing pads on</strong>, check reversible causes; <strong>permanent pacemaker</strong> if no cause or symptoms persist"]]) +
        "<p>Mobitz I usually <strong>responds to atropine</strong> because the block is at the AV node.</p>",
        ["mobitz1-treatment"],
        [q("First drug for symptomatic, unstable Mobitz I?", "Atropine 1 mg IV", ["Adenosine 6 mg IV", "Amiodarone 150 mg IV", "Magnesium 2 g IV"], "Atropine, then pacing if needed."),
          q("For a symptomatic but stable Mobitz I patient, what goes on the chest while you look for causes?", "Pacing pads", ["Nitroglycerin patch", "Holter only", "Nothing"], "Monitor with pacing pads in place."),
          q("Treatment for asymptomatic Mobitz I?", "None, beyond looking for reversible causes", ["Permanent pacemaker", "Atropine", "Transvenous pacing"], "No treatment required.")],
        [q("A 66-year-old with Mobitz I on telemetry has dizziness but normal BP and mentation. No reversible cause is found and symptoms persist over days. Next step?", "Consider a permanent pacemaker", ["Give atropine every 5 minutes indefinitely", "Defibrillate", "Discharge with no follow-up"], "Stable but persistently symptomatic with no cause: permanent pacemaker.")])
    ]),

    /* ---------- 6e ---------- */
    S("06e-mobitz-type-2", "6e. Second-degree AV block, Mobitz type II", "Objective 6. Slides 46–51.", [
      C("Mobitz II: what it looks like and where",
        "<p>Some P waves suddenly fail to conduct while the <strong>PR stays constant</strong>.</p>" +
        "<p>Block is usually <strong>infranodal</strong> (His-Purkinje), often with a bundle branch or fascicular block:</p>" +
        tbl(["Block location", "Share", "QRS"], [
          ["<strong>Below the bundle of His</strong>", "<strong>75%</strong>", "<strong>Wide</strong>"],
          ["Within the His bundle", "25%", "Narrow"]]) +
        "<p><strong>High-grade AV block:</strong> more than one consecutive P wave not conducted.</p>",
        ["mobitz2-ekg", "mobitz2-location", "high-grade-block"],
        [q("What is the EKG hallmark of Mobitz II?", "Constant PR interval with sudden dropped QRS complexes", ["Progressive PR prolongation", "PR shorter than 120 ms", "No P waves"], "PR stays constant; some P waves fail to conduct."),
          q("Where is the block in most Mobitz II cases?", "The infranodal conducting system (below the His bundle)", ["The SA node", "The AV node", "An accessory pathway"], "Infranodal, 75% distal to His."),
          q("Why is the QRS usually wide in Mobitz II?", "The block is below the His bundle, so ventricular depolarization is slower", ["The atria depolarize late", "Digoxin widens it", "The SA node is diseased"], "Infranodal block = slower ventricular depolarization."),
          q("High-grade AV block means:", "More than one consecutive P wave is not conducted", ["The PR is over 300 ms", "Every other P conducts", "The QRS is over 200 ms"], "Two or more P waves in a row not conducted.")],
        [q("A strip shows a constant PR of 180 ms, wide QRS complexes, and every third or fourth P wave suddenly not followed by a QRS. Diagnosis?", "Second-degree AV block, Mobitz type II", ["Mobitz type I", "First-degree AV block", "Nonconducted PACs"], "Constant PR with sudden drops = Mobitz II."),
          q("A strip shows sinus P waves at 80 with three P waves in a row not followed by a QRS, then a conducted beat with the usual PR. What is this called?", "High-grade AV block", ["Mobitz I", "Sinus arrest", "Atrial flutter"], "More than one consecutive nonconducted P wave.")]),
      C("Mobitz II: causes and presentation",
        "<p>Means <strong>structural damage</strong>; rare without underlying heart disease.</p>" +
        "<ul><li><strong>Anterior MI</strong> (septal infarct, bundle branch necrosis)</li><li>Fibrosis and sclerosis: systemic sclerosis, SLE</li><li>Lyme disease, myocarditis</li><li><strong>Sarcoidosis, amyloidosis</strong></li><li><strong>Hyperkalemia</strong></li><li>Beta-blockers, CCBs, digoxin</li></ul>" +
        "<p>More likely than Mobitz I to cause <strong>hemodynamic compromise, severe bradycardia, and progression to 3rd-degree block or asystole</strong>. Symptoms: fatigue, presyncope or syncope, dyspnea, chest pain, <strong>sudden cardiac arrest</strong>; worse with more dropped P waves or sinus bradycardia.</p>",
        ["mobitz2-etiology", "mobitz2-risk"],
        [q("Which MI is associated with Mobitz II?", "Anterior MI", ["Inferior MI", "Right ventricular MI", "Posterior MI"], "Anterior/septal MI damages the bundle branches."),
          q("Compared with Mobitz I, Mobitz II is:", "More likely to progress to complete heart block or asystole", ["Less dangerous", "More often seen in athletes", "Usually transient and benign"], "Mobitz II carries higher risk."),
          q("Which infiltrative disease is linked to Mobitz II?", "Amyloidosis", ["Hemochromatosis of the liver only", "Gout", "Psoriasis"], "Sarcoidosis and amyloidosis."),
          q("Mobitz II in a patient without heart disease is:", "Rare", ["Common", "Expected in athletes", "Normal during sleep"], "It signals structural damage.")],
        [q("Two days after a large anterior STEMI, a patient develops intermittent dropped QRS complexes with a constant PR and a new right bundle branch block. Why is this worrying?", "It is Mobitz II, which can progress to complete heart block or asystole", ["It is Wenckebach, which is usually benign", "It is a normal post-MI finding", "It means reperfusion succeeded"], "Anterior MI + Mobitz II = high risk of progression.")]),
      C("Mobitz II: treatment",
        "<ul><li><strong>Start pacing as soon as the rhythm is identified</strong> (transcutaneous)</li><li><strong>Admit</strong> for cardiac monitoring and <strong>permanent pacemaker</strong></li><li>Often <strong>does not respond to atropine</strong> (unlike Mobitz I), because the block is below the AV node</li></ul>" +
        hy("Mobitz I: atropine works, pacemaker rarely needed. <strong>Mobitz II: pace now, pacemaker always.</strong>"),
        ["mobitz2-treatment", "mobitz2-atropine"],
        [q("What is the immediate action once Mobitz II is identified?", "Start pacing", ["Give adenosine", "Observe as outpatient", "Start a beta-blocker"], "Initiate pacing as soon as rhythm is identified."),
          q("What is the definitive treatment for Mobitz II?", "Permanent pacemaker", ["Atropine", "Catheter ablation", "Digoxin"], "Admit for monitoring and permanent pacemaker."),
          q("Why does Mobitz II often not respond to atropine?", "The block is below the AV node, where atropine has little effect", ["Atropine is contraindicated in all blocks", "Atropine only works in VF", "Mobitz II is caused by atropine"], "Atropine works on the SA and AV nodes.")],
        [q("A dizzy 72-year-old has Mobitz II with a wide QRS, HR 38 and BP 84/50. Which plan is best?", "Transcutaneous pacing now, admit, and arrange a permanent pacemaker", ["Atropine and discharge if HR improves", "Adenosine 6 mg IV", "Outpatient Holter monitor"], "Pace immediately; atropine often fails in infranodal block.")])
    ]),

    /* ---------- 6f ---------- */
    S("06f-third-degree-av-block", "6f. Third-degree (complete) AV block", "Objective 6. Slides 52–59.", [
      C("Complete heart block: definition and escape rhythms",
        "<p><strong>No AV conduction</strong>: <strong>complete dissociation</strong> of atria and ventricles. P waves march at their own rate; an <strong>escape pacemaker</strong> drives the slower QRS.</p>" +
        tbl(["Escape", "Block level", "QRS", "Rate"], [
          ["<strong>Junctional</strong>", "At or above the AV node", "<strong>Narrow</strong>", "<strong>40–60</strong>"],
          ["<strong>Ventricular</strong>", "Below the AV node", "<strong>Wide</strong>", "<strong>20–40</strong>"]]),
        ["chb-definition", "chb-escape"],
        [q("What defines third-degree AV block?", "Complete dissociation between atria and ventricles", ["Progressive PR lengthening", "PR over 200 ms", "Occasional dropped beats with constant PR"], "No AV conduction at all."),
          q("In complete heart block with a junctional escape, the QRS is:", "Narrow, at 40–60 bpm", ["Wide, at 20–40 bpm", "Narrow, at 100–150 bpm", "Absent"], "Block at or above the AV node gives a narrow junctional escape."),
          q("In complete heart block with a ventricular escape, the rate is:", "20–40 bpm", ["40–60 bpm", "60–100 bpm", "100–120 bpm"], "Block below the AV node: wide QRS at 20–40."),
          q("In complete heart block, the ventricular rate compared with the atrial rate is:", "Slower", ["Faster", "Equal", "Exactly half"], "The escape rate is slower than the P-wave rate.")],
        [q("A strip shows regular P waves at 90 and regular wide QRS complexes at 32, with PR intervals that vary at random. Diagnosis?", "Third-degree AV block with a ventricular escape rhythm", ["Mobitz II", "Junctional rhythm with retrograde P waves", "Sinus bradycardia"], "AV dissociation + wide QRS at 20–40 = complete block with ventricular escape.")]),
      C("Complete heart block: causes and presentation",
        "<p><strong>Causes</strong> mirror Mobitz I and II: <strong>inferior or anterior MI</strong>, degeneration of the conduction system, <strong>AV nodal blockers (BB, CCB, digoxin)</strong>, cardiomyopathy, myocarditis.</p>" +
        "<p><strong>Symptoms:</strong> fatigue, dyspnea, presyncope or syncope; worsened angina or HF.</p>" +
        "<p>A <strong>ventricular escape</strong> often <strong>fails to maintain output</strong>, causing instability and periods of <strong>ventricular asystole</strong>.</p>",
        ["chb-etiology", "chb-presentation"],
        [q("Which drug group can cause complete heart block?", "AV nodal blocking agents (beta-blockers, CCBs, digoxin)", ["Loop diuretics", "Nitrates", "Statins"], "AV nodal blockers are a cause."),
          q("Why are patients with a ventricular escape rhythm often unstable?", "The ventricular escape often fails to maintain cardiac output", ["The rate is too fast", "It causes pulmonary embolism", "It causes hypertension"], "Inadequate output and periods of asystole.")],
        [q("An 84-year-old on metoprolol and diltiazem collapses at home. EKG shows AV dissociation with wide escape beats at 28 bpm and long pauses. What is happening?", "Complete heart block with an inadequate ventricular escape, possibly from AV nodal blockers", ["Vasovagal syncope with normal conduction", "AVNRT", "Atrial flutter with 4:1 block"], "AV nodal blockers can cause complete block; ventricular escapes fail to maintain output.")]),
      C("Complete heart block: treatment",
        "<ul><li><strong>Atropine 1 mg IV</strong> and <strong>place transcutaneous pacer pads immediately</strong></li><li><strong>Infranodal</strong> block may not respond to atropine: transcutaneous pacing, then <strong>temporary transvenous pacing</strong></li><li>Risks: <strong>asystole, VT, sudden cardiac death</strong></li><li><strong>Permanent pacemaker is required</strong></li></ul>",
        ["chb-treatment"],
        [q("What does complete heart block ultimately require?", "Permanent pacemaker insertion", ["Long-term atropine", "Catheter ablation", "Watchful waiting"], "Permanent pacemaker is required."),
          q("Which complications does complete heart block risk?", "Asystole, VT and sudden cardiac death", ["Pericarditis and tamponade", "Aortic dissection", "Stroke only"], "Listed risks."),
          q("Alongside atropine, what should be placed immediately in complete heart block?", "Transcutaneous pacer pads", ["A Holter monitor", "A Foley catheter", "A nasogastric tube"], "Pads go on right away.")],
        [q("A patient with complete heart block and a wide escape at 30 bpm stays hypotensive after atropine. Transcutaneous pacing captures. Next step while awaiting a permanent device?", "Temporary transvenous pacing", ["Stop pacing and observe", "Adenosine", "Synchronized cardioversion"], "Infranodal block: transcutaneous then temporary transvenous, then permanent pacemaker.")])
    ]),

    /* ---------- 6g ---------- */
    S("06g-escape-rhythms", "6g. Junctional and ventricular escape rhythms", "Objective 6. Slides 60–70.", [
      C("Junctional escape rhythm",
        "<p>When SA activity is blocked or slower than the AV node/His bundle, the junction takes over at <strong>40–60 bpm</strong>.</p>" +
        "<p><strong>Seen in:</strong> sinus node dysfunction, <strong>young children during sleep</strong>, <strong>athletes</strong> (vagal tone).</p>" +
        "<p><strong>EKG:</strong> rate 40–60, <strong>narrow QRS (&lt; 120 ms)</strong>, P waves <strong>absent or retrograde</strong>.</p>" +
        "<p><strong>Treatment:</strong> none if healthy and asymptomatic; symptomatic: <strong>atropine 1 mg IV</strong> or temporary pacing; permanent pacemaker for <strong>SSS or complete/high-grade AV block</strong>.</p>",
        ["junctional-escape", "junctional-treatment"],
        [q("What is the rate of a junctional escape rhythm?", "40–60 bpm", ["20–40 bpm", "60–100 bpm", "100–150 bpm"], "AV node backup rate."),
          q("What do P waves look like in a junctional escape rhythm?", "Absent or retrograde", ["Sawtooth", "Upright and early", "Three different shapes"], "P waves absent or retrograde."),
          q("The QRS in a junctional escape rhythm is typically:", "Narrow (less than 120 ms)", ["Wide (over 120 ms)", "Absent", "Preceded by a delta wave"], "Narrow because ventricles depolarize normally."),
          q("A permanent pacemaker is indicated for a junctional escape rhythm when it is due to:", "Sick sinus syndrome or complete/high-grade AV block", ["A sleeping child", "An athlete's vagal tone", "Caffeine"], "Indications listed on slide 64.")],
        [q("A sleeping 6-year-old on a monitor has a narrow-complex rhythm at 52 with no visible P waves; she wakes and the rhythm returns to sinus. Next step?", "No treatment; this is a benign junctional escape rhythm", ["Atropine", "Pacemaker", "Adenosine"], "Young children during sleep are a common benign scenario.")]),
      C("Ventricular escape rhythm",
        "<p>SA and AV nodes both fail; a <strong>ventricular focus</strong> fires at <strong>20–40 bpm</strong>.</p>" +
        "<p><strong>Seen in:</strong> <strong>third-degree heart block</strong>, or after a long pause (<strong>sinus arrest</strong>) with no junctional escape.</p>" +
        tbl(["Feature", "Finding"], [
          ["Rate", "<strong>20–40 bpm</strong>"],
          ["QRS", "<strong>Wide</strong>, may look like LBBB or RBBB"],
          ["P waves", "Regular but <strong>not conducted</strong> (complete heart block) or <strong>absent</strong> (sinus arrest)"]]),
        ["ventricular-escape"],
        [q("What is the rate of a ventricular escape rhythm?", "20–40 bpm", ["40–60 bpm", "60–100 bpm", "150–250 bpm"], "Ventricular escape 20–40."),
          q("In a ventricular escape rhythm from sinus arrest, P waves are:", "Absent", ["Regular but not conducted", "Inverted before every QRS", "Sawtooth"], "Sinus arrest = no P waves."),
          q("In a ventricular escape rhythm from complete heart block, P waves are:", "Regular but not conducted", ["Absent", "Retrograde", "Early and abnormal"], "AV dissociation with non-conducted Ps.")],
        [q("After a 6-second sinus pause, a monitor shows wide QRS complexes at 30 bpm with no P waves. Which rhythm is this?", "Ventricular escape rhythm after sinus arrest", ["Junctional escape rhythm", "Mobitz I", "Slow VT"], "No junctional escape fired, so a ventricular focus took over.")]),
      C("Treating escape rhythms",
        "<ul><li><strong>Find and treat the cause</strong></li><li>Symptomatic: <strong>atropine 1 mg IV</strong> or temporary pacing (transcutaneous or transvenous)</li><li>Atropine works on the <strong>SA and AV nodes</strong>, so it <strong>may not help a ventricular escape</strong></li><li><strong>Permanent pacemaker</strong> for continued symptoms or persistent bradyarrhythmia</li></ul>",
        ["escape-treatment"],
        [q("Why may atropine fail in a ventricular escape rhythm?", "Atropine acts on the SA and AV nodes, not the ventricular focus", ["Atropine is only for tachycardia", "Atropine blocks the ventricles", "The dose is too small"], "Atropine works on the SA and AV nodes."),
          q("Which treatment is used for persistent symptomatic escape rhythms?", "Permanent pacemaker", ["Amiodarone", "Adenosine", "Magnesium"], "Continued symptoms or persistent bradyarrhythmias.")],
        [q("A hypotensive patient in a ventricular escape rhythm at 26 bpm gets atropine 1 mg with no change. Best next step?", "Temporary pacing", ["Repeat atropine every minute without limit", "Defibrillate", "Adenosine 6 mg"], "Atropine may not work on a ventricular focus; pace.")])
    ]),

    /* ---------- 7 ---------- */
    S("07-av-block-comparison", "7. Comparing the AV blocks", "Objective 7. Slides 35–59.", [
      C("AV blocks side by side",
        tbl(["Block", "PR", "Dropped beats", "Level / QRS", "Treatment"], [
          ["<strong>1st degree</strong>", "<strong>&gt; 200 ms, constant</strong>", "None", "AV node", "None if asymptomatic"],
          ["<strong>Mobitz I</strong>", "<strong>Lengthens</strong> then drop", "Yes, grouped beating", "AV node, narrow", "Atropine works; rarely progresses"],
          ["<strong>Mobitz II</strong>", "<strong>Constant</strong>", "Sudden drops", "Infranodal, <strong>usually wide</strong>", "Pace now; permanent pacemaker; atropine often fails"],
          ["<strong>3rd degree</strong>", "<strong>No relation</strong> (AV dissociation)", "No P conducts", "Junctional narrow 40–60 or ventricular wide 20–40", "Atropine, pads, pacing; permanent pacemaker required"]]) +
        hy("Inferior MI → AV-node blocks (1st degree, Mobitz I). <strong>Anterior MI → infranodal blocks (Mobitz II)</strong>."),
        ["block-table", "mi-location-blocks"],
        [q("Which AV block has a constant PR with sudden dropped QRS complexes?", "Mobitz II", ["Mobitz I", "First degree", "Third degree"], "Constant PR plus drops = Mobitz II."),
          q("Which AV block shows no relationship between P waves and QRS complexes?", "Third degree", ["First degree", "Mobitz I", "Mobitz II"], "AV dissociation."),
          q("Which AV block has a prolonged PR with every P conducted?", "First degree", ["Mobitz I", "Mobitz II", "Third degree"], "Delay without dropped beats."),
          q("Which two AV blocks most need a permanent pacemaker?", "Mobitz II and third degree", ["First degree and Mobitz I", "Mobitz I and third degree", "First degree and Mobitz II"], "Mobitz II and complete heart block."),
          q("Anterior MI is more associated with which block?", "Mobitz II", ["Mobitz I", "First degree in athletes", "Sinus arrhythmia"], "Anterior MI damages the infranodal system.")],
        [q("Two strips: Strip A has PRs of 160, 220, 280, then a drop. Strip B has a fixed PR of 160 with a sudden drop. Which needs urgent pacing preparation?", "Strip B (Mobitz II)", ["Strip A (Mobitz I)", "Both equally", "Neither"], "Mobitz II is the high-risk block."),
          q("A patient has a narrow-complex escape at 48 bpm with P waves at 75 that bear no relationship to the QRS. Where is the block?", "At or above the AV node (complete heart block with a junctional escape)", ["Below the His bundle", "In the SA node only", "There is no block"], "Narrow 40–60 escape = junctional, so the block is at or above the AV node.")]),
      C("Reading a bradycardia strip step by step",
        "<ol><li><strong>Is every P followed by a QRS?</strong> Yes → sinus brady or 1st degree (check PR).</li>" +
        "<li><strong>Some P waves dropped?</strong> Look at the PR before the drop: <strong>lengthening = Mobitz I</strong>, <strong>constant = Mobitz II</strong>.</li>" +
        "<li><strong>P and QRS each regular but unrelated?</strong> → <strong>3rd degree</strong>; QRS width tells junctional vs ventricular escape.</li>" +
        "<li><strong>No P waves at all</strong> with a slow narrow rhythm → junctional escape; slow wide → ventricular escape.</li></ol>" +
        mn("<strong>\"If some P's don't get through, then you have Mobitz II. If the R is far from P, then you have a first degree. If P's and Q's don't agree, then you have a third degree.\"</strong>"),
        ["block-approach"],
        [q("Some P waves are not conducted. What do you look at next to tell Mobitz I from II?", "Whether the PR lengthens before the dropped beat", ["The QT interval", "The T-wave shape", "The axis"], "Lengthening = I; constant = II."),
          q("A slow rhythm with regular P waves and regular QRS complexes that are unrelated is:", "Third-degree AV block", ["Mobitz I", "Sinus arrhythmia", "First-degree AV block"], "AV dissociation."),
          q("A slow, narrow rhythm with no P waves is most likely:", "Junctional escape rhythm", ["Ventricular escape rhythm", "Mobitz II", "Atrial flutter"], "Narrow, no P, 40–60 = junctional.")],
        [q("A 60-year-old's strip shows every P followed by a QRS, rate 54, PR 280 ms. Interpretation?", "Sinus bradycardia with first-degree AV block", ["Mobitz I", "Complete heart block", "Junctional rhythm"], "Every P conducts with a long PR = first degree.")])
    ]),

    /* ---------- 8 ---------- */
    S("08-sinus-tachycardia", "8. Sinus tachycardia", "Objective 8. Slides 76–80.", [
      C("Sinus tachycardia: definition and causes",
        "<p>Sinus rate <strong>&gt; 100 bpm</strong> (often 100–160). A normal response to exercise or catecholamines. <strong>Gradual onset and offset</strong>, unlike reentrant PSVT.</p>" +
        "<p><strong>Conditions:</strong> fever, <strong>hypovolemia</strong>, hypotension, <strong>sepsis</strong>, anemia, hypoxia, <strong>pulmonary embolism</strong>, acute MI, anxiety, <strong>hyperthyroidism</strong>.</p>" +
        "<p><strong>Triggers:</strong> stimulants; <strong>withdrawal</strong> from beta-blockers, alcohol, opioids, digoxin, benzodiazepines.</p>",
        ["sinus-tach-definition", "sinus-tach-causes"],
        [q("Sinus tachycardia is a sinus rate above:", "100 bpm", ["90 bpm", "120 bpm", "150 bpm"], "Faster than 100, often 100–160."),
          q("How does the onset of sinus tachycardia differ from reentrant PSVT?", "Sinus tachycardia starts and stops gradually", ["Sinus tachycardia starts and stops abruptly", "There is no difference", "Sinus tachycardia only occurs during sleep"], "Gradual onset/termination vs abrupt in PSVT."),
          q("Withdrawal from which drug class can trigger sinus tachycardia?", "Beta-blockers", ["Statins", "Proton pump inhibitors", "Thiazides"], "Withdrawal from BB, alcohol, opioids, digoxin, benzos."),
          q("Which condition is listed as a cause of sinus tachycardia?", "Pulmonary embolism", ["Hypothyroidism", "Hypothermia", "Increased ICP"], "PE, sepsis, fever, anemia, hypoxia and others.")],
        [q("A 30-year-old stopped her propranolol abruptly 2 days ago and now has a HR of 118 with normal P waves and a gradual rise in rate. Likely cause?", "Beta-blocker withdrawal causing sinus tachycardia", ["AVNRT", "Atrial flutter", "WPW"], "Beta-blocker withdrawal is a listed trigger."),
          q("A post-op patient has sinus tachycardia at 124, pleuritic chest pain and new hypoxia. Which cause must you consider?", "Pulmonary embolism", ["Hypothyroidism", "Athletic heart", "Sinus arrhythmia"], "Sinus tachycardia is the classic PE rhythm finding.")]),
      C("Sinus tachycardia: presentation and EKG tip",
        "<p>Sinus tachycardia itself rarely causes symptoms; some feel <strong>palpitations</strong>. In cardiac patients it raises O2 demand and cuts coronary flow, causing <strong>dyspnea and chest pain</strong>. Other symptoms come from the cause (fever, SOB, dizziness, syncope).</p>" +
        hy("At very fast rates the P wave can hide in the preceding T wave, giving a <strong>\"camel hump\"</strong> look."),
        ["sinus-tach-presentation", "camel-hump"],
        [q("At very fast sinus rates, where can the P wave hide?", "In the preceding T wave (camel hump)", ["Inside the QRS", "After the QRS as a delta wave", "In the U wave only"], "Camel hump appearance."),
          q("Why can sinus tachycardia cause chest pain in a cardiac patient?", "It raises myocardial oxygen demand and reduces coronary flow", ["It causes coronary emboli", "It lowers oxygen demand", "It causes aortic dissection"], "Increased demand and reduced diastolic coronary flow.")],
        [q("A febrile patient's EKG shows a regular narrow tachycardia at 140 where each T wave has a notch on its downslope. What is the notch most likely?", "A P wave hidden in the T wave from sinus tachycardia", ["A delta wave", "A U wave from hypokalemia", "An Osborn wave"], "The camel hump appearance at fast rates.")]),
      C("Sinus tachycardia: treatment",
        "<p><strong>Identify and treat the cause</strong>: IV fluids for hypovolemia or hypotension, antipyretics for fever, <strong>transfusion</strong> for significant anemia, avoid caffeine and stimulants.</p>" +
        "<p><strong>Admit</strong> when the cause can deteriorate: <strong>sepsis, shock, hypoxia, metabolic acidosis, acute MI</strong>.</p>" +
        hy("Do not try to slow the rate itself. Fix the cause."),
        ["sinus-tach-treatment", "sinus-tach-admission"],
        [q("What is the key principle in treating sinus tachycardia?", "Identify and treat the underlying cause", ["Give adenosine", "Cardiovert", "Start amiodarone"], "Treat the cause."),
          q("Treatment for sinus tachycardia from significant anemia?", "Blood transfusion", ["Metoprolol", "Adenosine", "Digoxin"], "Transfusion for significant anemia."),
          q("Which condition with sinus tachycardia calls for admission?", "Sepsis", ["Mild anxiety", "Caffeine use", "Exercise"], "Sepsis, shock, hypoxia, metabolic acidosis, acute MI.")],
        [q("A vomiting, dehydrated patient has sinus tachycardia at 128 and BP 96/60. Best initial treatment?", "IV fluids", ["IV diltiazem", "Adenosine 6 mg", "Synchronized cardioversion"], "Treat hypovolemia; the rate will follow."),
          q("A patient with sinus tachycardia at 122, fever 39.4 °C, lactate 4.6 and BP 88/52 is in the ED. Disposition?", "Admit: sepsis with shock can deteriorate", ["Discharge with antipyretics", "Give metoprolol and discharge", "Outpatient Holter monitor"], "Sepsis and shock are admission criteria.")])
    ]),

    /* ---------- 9a ---------- */
    S("09a-atrial-fibrillation-rvr", "9a. Atrial fibrillation with RVR", "Objective 9. Arrhythmias slide 71; Chronic Arrhythmia Management slides 24, 29–32, 46–51, 56.", [
      C("AF: pathophysiology and EKG",
        "<p>Foci, usually in <strong>muscle sleeves of the pulmonary veins</strong> in the left atrium, fire chaotically. The atria <strong>quiver</strong> and the <strong>atrial kick is lost</strong>. The AV node is bombarded with up to <strong>400 impulses/min</strong> and conducts irregularly and fast.</p>" +
        tbl(["EKG feature", "AF"], [
          ["Rhythm", "<strong>Irregularly irregular</strong>"],
          ["P waves", "<strong>Absent</strong>; flat or chaotic baseline"],
          ["QRS", "<strong>Narrow</strong> (unless BBB or pre-excitation)"],
          ["RVR", "Rate <strong>&gt; 100</strong>; treat to control the rate when <strong>&gt; 110</strong>"]]) +
        note("AF and flutter detail is taught in the Chronic Arrhythmia Management deck; this deck lists them in its tachycardia table."),
        ["af-patho", "af-ekg", "af-rvr-definition"],
        [q("What is the classic rhythm description of atrial fibrillation?", "Irregularly irregular with no P waves", ["Regular with sawtooth waves", "Regularly irregular with grouped beats", "Regular with a delta wave"], "Irregularly irregular, absent P waves."),
          q("Where does atrial fibrillation most often originate?", "Pulmonary vein muscle sleeves in the left atrium", ["The right atrial tricuspid annulus", "The AV node", "The bundle of Kent"], "Arrhythmogenic sleeves in the pulmonary veins."),
          q("What is lost when the atria fibrillate?", "The atrial kick", ["The QRS complex", "The T wave", "Ventricular contraction"], "No effective atrial contraction."),
          q("Above what rate does the deck say to treat AF to control the rate?", "110 bpm", ["90 bpm", "150 bpm", "60 bpm"], "RVR is > 100; treat for rate control when > 110.")],
        [q("A 76-year-old has palpitations. Pulse is 132 and irregularly irregular. EKG shows narrow QRS complexes with no P waves and a chaotic baseline. Diagnosis?", "Atrial fibrillation with rapid ventricular response", ["Atrial flutter with 2:1 block", "MAT", "Sinus tachycardia"], "No P waves, irregularly irregular, rate > 100 = AF with RVR.")]),
      C("AF with RVR: unstable patient",
        "<ul><li><strong>Immediate synchronized cardioversion, 150–200 J</strong></li><li>If it fails, <strong>load with medications</strong>; if still unstable, <strong>repeat cardioversion</strong></li></ul>" +
        hy("Unstable AF = shock it (synchronized). Do not wait for rate-control drugs."),
        ["af-unstable"],
        [q("Treatment for unstable AF with RVR?", "Immediate synchronized cardioversion", ["IV diltiazem first", "Unsynchronized defibrillation", "Oral metoprolol"], "Unstable = synchronized cardioversion."),
          q("What energy does the deck give for synchronized cardioversion of unstable AF?", "150–200 J", ["50 J", "360 J", "10 J"], "150–200 J."),
          q("If cardioversion of unstable AF fails, next step?", "Load with medications and repeat cardioversion if still unstable", ["Stop and observe", "Defibrillate unsynchronized", "Give adenosine"], "Load meds, then repeat.")],
        [q("A patient in AF at 168 has BP 76/40, is confused and has crackles. Best immediate treatment?", "Synchronized cardioversion at 150–200 J", ["Diltiazem 20 mg IV", "Metoprolol 25 mg orally", "Start apixaban and recheck tomorrow"], "Hypotension + AMS + pulmonary edema = unstable.")]),
      C("AF with RVR: stable patient",
        tbl(["Drug", "When"], [
          ["<strong>Cardizem (diltiazem) 10–20 mg IV bolus</strong>, then titrated drip to HR &lt; 100", "<strong>Drug of choice for most</strong>; can skip the bolus if BP is soft"],
          ["<strong>Metoprolol IV boluses</strong>", "<strong>Cardiac ischemia/infarction or CAD</strong>"],
          ["Amiodarone IV drip", "Can <strong>cardiovert</strong> the patient"],
          ["Digoxin IV", "Infrequently used, less effective"]]) +
        "<p>Also: look for reversible causes (chemistry, CBC, TSH/free T4, troponin, BNP, echo) and <strong>anticoagulate if appropriate</strong>, especially if AF &gt; 48 hours.</p>" +
        hy("<strong>Exclude pre-excitation (WPW) before giving a beta-blocker or CCB in AF.</strong> Blocking the AV node drives impulses down the accessory pathway."),
        ["af-stable-rate", "af-preexcitation-warning"],
        [q("Which IV drug is the rate-control drug of choice for most stable AF with RVR?", "Diltiazem (Cardizem)", ["Adenosine", "Atropine", "Procainamide"], "Cardizem 10–20 mg IV bolus then drip."),
          q("Which rate-control drug is preferred in AF with RVR and active cardiac ischemia or CAD?", "Metoprolol IV", ["Diltiazem", "Digoxin", "Adenosine"], "Metoprolol for ischemia/infarction or CAD."),
          q("What must be excluded before giving a beta-blocker or CCB in AF?", "A pre-excitation syndrome", ["Hypothyroidism", "Anemia", "Pregnancy"], "AV nodal blockade promotes conduction down the accessory pathway."),
          q("Which rate-control drug may also convert AF to sinus rhythm?", "Amiodarone", ["Diltiazem", "Metoprolol", "Digoxin"], "Amiodarone promotes cardioversion.")],
        [q("A stable 64-year-old with known CAD is in AF at 138 with chest tightness and BP 142/84. Best rate-control choice?", "IV metoprolol", ["IV adenosine", "Atropine", "IV procainamide"], "Metoprolol is preferred with ischemia or CAD."),
          q("A stable 58-year-old without CAD is in AF at 146, BP 128/80. Best initial IV drug?", "Diltiazem 10–20 mg IV bolus, then a drip", ["Digoxin IV as first line", "Adenosine 6 mg", "Amiodarone 300 mg push"], "Cardizem is the drug of choice for most.")])
    ]),

    /* ---------- 9b ---------- */
    S("09b-atrial-flutter", "9b. Atrial flutter with RVR", "Objective 9. Chronic Arrhythmia Management slides 16–20; Arrhythmias slide 71.", [
      C("Atrial flutter: mechanism and EKG",
        "<p>A <strong>reentry circuit in the right atrium</strong>, typically along the <strong>tricuspid annulus</strong>, with passive left atrial activation.</p>" +
        tbl(["Feature", "Flutter"], [
          ["Rhythm", "<strong>Rapid, regular</strong> narrow-complex tachycardia"],
          ["Atrial waves", "Single morphology, <strong>sawtooth</strong> downward deflections, best in <strong>inferior leads and V1</strong>"],
          ["2:1 block", "Ventricular rate <strong>150</strong>"],
          ["3:1 block", "Ventricular rate <strong>100</strong>"]]) +
        hy("A regular narrow tachycardia at <strong>exactly 150</strong>: think <strong>flutter with 2:1 block</strong>."),
        ["flutter-mechanism", "flutter-ekg", "flutter-ratios"],
        [q("Where is the reentry circuit of typical atrial flutter?", "Right atrium along the tricuspid annulus", ["Left atrial pulmonary veins", "AV node dual pathways", "Bundle of Kent"], "Right atrial circuit around the tricuspid annulus."),
          q("What do flutter waves look like?", "Sawtooth, best seen in the inferior leads and V1", ["Chaotic baseline with no organized waves", "Three different P-wave shapes", "Delta waves"], "Sawtooth pattern in II, III, aVF and V1."),
          q("Atrial flutter with 2:1 block gives a ventricular rate of about:", "150 bpm", ["100 bpm", "75 bpm", "300 bpm"], "2:1 block = 150."),
          q("Atrial flutter with 3:1 block gives a ventricular rate of about:", "100 bpm", ["150 bpm", "75 bpm", "200 bpm"], "3:1 block = 100.")],
        [q("An EKG shows a regular narrow-complex tachycardia at exactly 150 with sawtooth waves in leads II, III and aVF. Diagnosis?", "Atrial flutter with 2:1 conduction", ["AVNRT", "Sinus tachycardia", "AF with RVR"], "Sawtooth waves + 150 bpm = flutter with 2:1 block.")]),
      C("Atrial flutter: management",
        "<p>Flutter and MAT are managed much like AF, with similar risk factors and symptoms.</p>" +
        "<ul><li><strong>Unstable</strong>: <strong>synchronized cardioversion</strong></li><li><strong>Stable</strong>: rate control with AV nodal blockers (<strong>diltiazem</strong>, metoprolol), look for causes, anticoagulate as for AF</li></ul>",
        ["flutter-management"],
        [q("How is atrial flutter generally managed?", "Much like atrial fibrillation", ["Like VF, with defibrillation", "With atropine", "With no treatment"], "Flutter management is similar to AF."),
          q("Treatment for unstable atrial flutter with RVR?", "Synchronized cardioversion", ["Adenosine only", "Unsynchronized defibrillation", "Observation"], "Unstable with a pulse = synchronized cardioversion.")],
        [q("A stable patient with atrial flutter at 150 and normal BP has no pre-excitation. Reasonable first IV drug?", "Diltiazem", ["Atropine", "Epinephrine", "Magnesium"], "AV nodal blockade for rate control, as in AF.")])
    ]),

    /* ---------- 9c ---------- */
    S("09c-multifocal-atrial-tachycardia", "9c. Multifocal atrial tachycardia (MAT)", "Objective 9. Chronic Arrhythmia Management slide 21; Arrhythmias slide 71.", [
      C("MAT",
        "<p>A supraventricular tachycardia with a <strong>rapid, irregular</strong> atrial rhythm from <strong>multiple ectopic foci</strong>.</p>" +
        "<ul><li>HR <strong>&gt; 100</strong></li><li><strong>3 or more distinct P-wave morphologies</strong></li><li>Most often in the <strong>elderly</strong></li><li>Frequently with <strong>COPD</strong></li><li>Treated with <strong>AV nodal blocking agents</strong></li><li><strong>Cardioversion and RFCA have no effect</strong></li></ul>" +
        hy("Irregular narrow tachycardia <strong>with P waves of 3+ shapes</strong> in a COPD patient = MAT, not AF. Do not shock it."),
        ["mat-definition", "mat-ekg", "mat-treatment"],
        [q("How many distinct P-wave morphologies define MAT?", "3 or more", ["2", "1", "None, there are no P waves"], "3+ distinct P waves."),
          q("MAT is most often associated with which disease?", "COPD", ["Hypothyroidism", "WPW", "Lyme disease"], "Frequently associated with COPD."),
          q("Which treatment has no effect on MAT?", "Cardioversion", ["AV nodal blocking agents", "Treating the COPD exacerbation", "Diltiazem"], "Cardioversion and RFCA have no effect."),
          q("MAT is treated with:", "AV nodal blocking agents", ["Synchronized cardioversion", "Catheter ablation", "Defibrillation"], "AV nodal blockers.")],
        [q("An 81-year-old in a COPD exacerbation has an irregular narrow tachycardia at 124. Every beat has a P wave, and there are at least three P-wave shapes. Which treatment is NOT helpful?", "Synchronized cardioversion", ["Treating the COPD exacerbation", "An AV nodal blocking agent", "Oxygen to correct hypoxia"], "MAT does not respond to cardioversion or ablation."),
          q("An elderly COPD patient's irregular tachycardia was called AF, but the strip shows clear P waves of 3 different shapes before each QRS. Correct diagnosis?", "Multifocal atrial tachycardia", ["Atrial fibrillation", "Atrial flutter with variable block", "Sinus arrhythmia"], "Visible P waves of 3+ morphologies = MAT.")])
    ]),

    /* ---------- 9d ---------- */
    S("09d-avnrt", "9d. AV nodal reentrant tachycardia (AVNRT)", "Objective 9. Slides 81–97.", [
      C("AVNRT: who and why (dual pathways)",
        "<p>A regular SVT from a <strong>reentry circuit in the AV node</strong> and perinodal tissue. A <strong>paroxysmal SVT</strong>: abrupt onset and offset. Common in <strong>females, late teens to young adults</strong>, usually with <strong>no structural heart disease</strong>.</p>" +
        tbl(["Pathway", "Conduction", "Refractory period"], [
          ["<strong>Fast</strong>", "Fast", "<strong>Slow</strong> (long)"],
          ["<strong>Slow</strong>", "Slow", "<strong>Fast</strong> (short)"]]) +
        "<p><strong>Trigger:</strong> a perfectly timed <strong>PAC</strong> arrives while the fast pathway is refractory, goes down the <strong>slow</strong> pathway, and returns up the now-recovered <strong>fast</strong> pathway.</p>" +
        tbl(["Type", "Down to ventricles", "Back to atria"], [
          ["<strong>Typical (slow-fast)</strong>", "Slow pathway", "Fast pathway"],
          ["Atypical (fast-slow)", "Fast pathway", "Slow pathway"]]),
        ["avnrt-definition", "avnrt-dual-pathway", "avnrt-typical-atypical"],
        [q("Who most commonly gets AVNRT?", "Females in their late teens to young adulthood without structural heart disease", ["Elderly men with COPD", "Athletes with high vagal tone", "Patients with prior anterior MI"], "Young women with normal hearts."),
          q("In AVNRT, the fast pathway has:", "Fast conduction and a long (slow) refractory period", ["Slow conduction and a short refractory period", "Fast conduction and a short refractory period", "No refractory period"], "Fast pathway: fast conduction, slow recovery."),
          q("What usually triggers typical AVNRT?", "A perfectly timed PAC", ["A PVC on the T wave", "Hyperkalemia", "Vagal stimulation"], "A PAC arriving while the fast pathway is refractory."),
          q("In typical (slow-fast) AVNRT, the impulse travels:", "Down the slow pathway and back up the fast pathway", ["Down the fast pathway and back up the slow pathway", "Down an accessory pathway", "Only through the bundle of His"], "Slow down, fast up.")],
        [q("A 22-year-old woman has repeated episodes of a racing heart that start and stop suddenly. Her baseline EKG and echo are normal. Most likely SVT?", "AVNRT", ["Atrial flutter", "MAT", "Sinus tachycardia"], "Young woman, normal heart, paroxysmal regular SVT.")]),
      C("AVNRT: EKG and symptoms",
        tbl(["Feature", "AVNRT"], [
          ["QRS", "<strong>Narrow, rapid, regular</strong>"],
          ["Rate", "<strong>170–180 bpm</strong>"],
          ["P waves", "<strong>Buried in the QRS (70%)</strong> or retrograde at its end as a <strong>pseudo r' (V1) or S wave</strong>"]]) +
        "<p><strong>Symptoms:</strong> <strong>palpitations</strong>, dizziness or lightheadedness, dyspnea; <strong>sudden onset and termination</strong>. Less often fatigue or syncope; chest pain with significant heart disease.</p>",
        ["avnrt-ekg", "avnrt-symptoms"],
        [q("Typical ventricular rate in AVNRT?", "170–180 bpm", ["100–120 bpm", "220–250 bpm", "60–100 bpm"], "170–180 bpm."),
          q("Where are the P waves in most AVNRT?", "Buried within the QRS", ["Upright before each QRS", "Absent with a chaotic baseline", "Sawtooth between QRS complexes"], "Buried in 70%; otherwise a pseudo r' or S wave."),
          q("A pseudo r' in V1 during a narrow tachycardia suggests:", "A retrograde P wave at the end of the QRS in AVNRT", ["Right bundle branch block", "A delta wave", "Hyperkalemia"], "Retrograde P at the end of the QRS."),
          q("What is the most common symptom of AVNRT?", "Palpitations", ["Syncope", "Fever", "Leg swelling"], "Palpitations, dizziness, dyspnea.")],
        [q("A 25-year-old's EKG shows a regular narrow tachycardia at 176 with no visible P waves and a small r' in V1 that disappears after conversion. Diagnosis?", "AVNRT", ["Atrial flutter", "Sinus tachycardia", "Antidromic AVRT"], "Retrograde P as pseudo r' that vanishes in sinus rhythm.")]),
      C("AVNRT: vagal maneuvers",
        "<p>First line. Often works if used <strong>early</strong> in the episode.</p>" +
        tbl(["Maneuver", "How"], [
          ["<strong>Standard Valsalva</strong>", "Exhale forcefully against a closed airway; try <strong>1–2 times</strong>"],
          ["<strong>Modified Valsalva</strong>", "Semi-recumbent, blow into a <strong>10 mL syringe for 15 s</strong>, then <strong>lie flat with passive leg raise for 45 s</strong>; <strong>2.5–3× more successful</strong>"],
          ["<strong>Carotid sinus massage</strong>", "Patient <strong>supine</strong> with <strong>ECG and BP monitoring</strong>"]]) +
        "<p><strong>Valsalva physiology:</strong> straining lowers cardiac output; baroreceptors respond, and then <strong>vagal tone rises</strong> and the heart rate falls.</p>",
        ["vagal-maneuvers", "modified-valsalva", "carotid-massage"],
        [q("How is the modified Valsalva performed?", "Blow into a 10 mL syringe for 15 seconds semi-recumbent, then lie flat with a passive leg raise for 45 seconds", ["Hold breath for 60 seconds standing", "Immerse face in ice water for 5 minutes", "Cough forcefully 10 times"], "Syringe 15 s, then supine leg raise 45 s."),
          q("How much more successful is the modified Valsalva than the standard one?", "2.5–3 times", ["About the same", "10 times", "Half as successful"], "2.5–3× more successful."),
          q("What monitoring is needed for carotid sinus massage?", "Supine patient with ECG and BP monitoring", ["No monitoring", "Seated patient with pulse oximetry only", "Standing patient with a Holter"], "Supine with ECG and BP."),
          q("When are vagal maneuvers most effective in AVNRT?", "Early in the episode", ["Only after adenosine", "After 24 hours", "Only in unstable patients"], "Early application works best.")],
        [q("A stable 28-year-old in AVNRT tried a standard Valsalva twice without success. Next step before medication?", "Try the modified Valsalva", ["Synchronized cardioversion", "Amiodarone", "Atropine"], "Modified Valsalva if AVNRT persists after 1–2 standard attempts.")]),
      C("AVNRT: medicines, cardioversion and ablation",
        tbl(["Step", "Treatment"], [
          ["1st", "<strong>Vagal maneuvers</strong>"],
          ["2nd", "<strong>Adenosine 6 mg IV</strong>: rapid onset, short half-life, works in <strong>&gt; 80%</strong>"],
          ["If those fail", "IV <strong>CCB</strong> (verapamil, diltiazem) or IV <strong>beta-blocker</strong> (metoprolol, esmolol)"],
          ["<strong>Unstable</strong> or persists despite drugs", "<strong>Electrical (synchronized) cardioversion</strong>"],
          ["Frequent, refractory or poorly tolerated", "<strong>Catheter ablation</strong>"]]),
        ["avnrt-drugs", "avnrt-cardioversion", "avnrt-ablation"],
        [q("Which drug and dose come after vagal maneuvers in stable AVNRT?", "Adenosine 6 mg IV", ["Atropine 1 mg IV", "Amiodarone 300 mg IV", "Epinephrine 1 mg IV"], "Adenosine 6 mg IV."),
          q("Adenosine converts AVNRT in about what share of cases?", "Over 80%", ["About 20%", "About 50%", "Under 10%"], "Successful in > 80%."),
          q("Which drug classes are second-line for AVNRT if vagal maneuvers and adenosine fail?", "IV calcium channel blockers or IV beta-blockers", ["Class IC antiarrhythmics", "Digoxin and atropine", "Magnesium and calcium"], "Verapamil/diltiazem or metoprolol/esmolol."),
          q("When is catheter ablation recommended for AVNRT?", "For frequent, refractory or poorly tolerated episodes", ["For a single first episode", "Never", "Only in pregnancy"], "Ablation for recurrent or refractory AVNRT.")],
        [q("A patient in AVNRT at 182 becomes hypotensive and confused. Best treatment?", "Synchronized cardioversion", ["Another Valsalva", "Oral metoprolol", "Defibrillation unsynchronized"], "Unstable AVNRT = electrical cardioversion."),
          q("A 30-year-old has had six ED visits this year for AVNRT, each needing adenosine. Best long-term option?", "Catheter ablation", ["Daily adenosine", "Permanent pacemaker", "Warfarin"], "Frequent episodes: catheter ablation.")])
    ]),

    /* ---------- 9e ---------- */
    S("09e-avrt", "9e. Atrioventricular reentrant tachycardia (AVRT)", "Objective 9. Slides 102–103, 112.", [
      C("AVRT: the circuit and symptoms",
        "<p>A reentrant tachycardia whose loop uses the <strong>normal AV conduction system plus an accessory pathway</strong>. The pathway can conduct anterograde, retrograde or both.</p>" +
        "<p>AVRT is <strong>95% of the arrhythmias in WPW syndrome</strong> (a ventricular pre-excitation syndrome).</p>" +
        tbl(["Type", "Share", "QRS"], [["<strong>Orthodromic</strong>", "<strong>90–95%</strong>", "Narrow"], ["<strong>Antidromic</strong>", "<strong>5%</strong>", "Wide"]]) +
        "<p><strong>Symptoms:</strong> palpitations, syncope or presyncope, lightheadedness, <strong>diaphoresis</strong>, chest pain, SOB.</p>",
        ["avrt-definition", "avrt-wpw-share", "avrt-symptoms"],
        [q("What two pathways make the AVRT circuit?", "The normal AV conduction system and an accessory pathway", ["Fast and slow pathways inside the AV node", "Two pulmonary veins", "The left and right bundle branches"], "AVRT uses an accessory pathway; AVNRT stays in the AV node."),
          q("What share of WPW syndrome arrhythmias are AVRT?", "95%", ["5%", "50%", "25%"], "AVRT is 95% of WPW arrhythmias."),
          q("Which type of AVRT is most common?", "Orthodromic", ["Antidromic", "Atypical fast-slow", "Polymorphic"], "Orthodromic 90–95%.")],
        [q("A 19-year-old with a known accessory pathway has sudden palpitations, sweating and lightheadedness. EKG shows a regular narrow tachycardia at 210. Most likely rhythm?", "Orthodromic AVRT", ["Antidromic AVRT", "VT", "MAT"], "Narrow-complex AVRT with an accessory pathway = orthodromic.")])
    ]),

    /* ---------- 10 ---------- */
    S("10-af-flutter-mat-risk-factors", "10. Causes and risk factors for AF, flutter and MAT", "Objective 10. Chronic Arrhythmia Management slides 16, 21, 25–27.", [
      C("Risk factors for atrial dysrhythmias",
        "<p>AF, flutter and MAT share risk factors and symptoms.</p>" +
        "<ul><li><strong>Age</strong>, especially &gt; 70</li><li><strong>Valvular disease</strong>, especially <strong>mitral</strong></li><li>Dilated cardiomyopathy</li><li><strong>CAD</strong></li><li>Genetics</li><li><strong>COPD</strong></li><li>Severe anemia</li><li><strong>Hypertension</strong></li><li>Diabetes</li><li>CKD</li><li><strong>Obesity</strong></li></ul>" +
        "<p>AF is the <strong>most common arrhythmia</strong> (4.48% of the US; <strong>12% of those over 80</strong>).</p>",
        ["atrial-risk-factors", "af-epidemiology"],
        [q("Which valve's disease especially raises atrial dysrhythmia risk?", "Mitral valve", ["Pulmonic valve", "Tricuspid valve", "Aortic valve"], "Valvular disease, especially mitral."),
          q("What is the most common arrhythmia?", "Atrial fibrillation", ["AVNRT", "Atrial flutter", "Ventricular tachycardia"], "AF affects 4.48% of the US."),
          q("About what share of people over 80 have AF?", "12%", ["1%", "30%", "50%"], "AF prevalence rises to 12% after 80."),
          q("Which is a listed risk factor for atrial dysrhythmia?", "Obesity", ["Hypothyroidism", "Low sodium diet", "Young age"], "Obesity, HTN, DM, CKD, COPD and others.")],
        [q("A 78-year-old with hypertension, diabetes, obesity and mitral regurgitation asks about her heart rhythm risk. Which arrhythmia is she at highest risk for?", "Atrial fibrillation", ["AVNRT", "Brugada-related VF", "Mobitz II"], "Age, HTN, DM, obesity and mitral disease all raise AF risk.")]),
      C("Triggers of atrial dysrhythmias and MAT's link to COPD",
        tbl(["Trigger", "Example"], [
          ["Endocrine", "<strong>Thyrotoxicosis</strong>"],
          ["Substances", "<strong>Alcohol intake or withdrawal</strong>, excessive caffeine"],
          ["Procedures", "<strong>Surgery, especially heart or lung</strong>"],
          ["Inflammation / injury", "Pericarditis, chest trauma"],
          ["Other", "<strong>Hypoxia</strong>"],
          ["Medications", "<strong>Theophylline, beta agonists (albuterol)</strong>"]]) +
        hy("<strong>MAT</strong>: elderly, <strong>COPD</strong>, often worse with hypoxia and theophylline or albuterol."),
        ["atrial-triggers", "mat-risk"],
        [q("Which medication is a trigger for atrial dysrhythmias?", "Albuterol", ["Metoprolol", "Lisinopril", "Atorvastatin"], "Theophylline and beta agonists like albuterol."),
          q("Which endocrine condition triggers atrial dysrhythmias?", "Thyrotoxicosis", ["Hypothyroidism", "Addison disease", "Hypoparathyroidism"], "Thyrotoxicosis."),
          q("Which group is MAT most associated with?", "Elderly patients with COPD", ["Young women", "Athletes", "Children during sleep"], "Elderly and COPD."),
          q("Which surgery most often triggers atrial dysrhythmias?", "Heart or lung surgery", ["Cataract surgery", "Dental extraction", "Carpal tunnel release"], "Particularly heart/lung surgery.")],
        [q("Three days after a CABG, a patient develops new AF. Which trigger fits best?", "Recent heart surgery", ["Caffeine withdrawal", "Hypothyroidism", "Athletic heart"], "Surgery, particularly heart/lung, is a trigger."),
          q("A college student develops AF after a weekend of binge drinking (\"holiday heart\"). Which trigger is this?", "Alcohol intake", ["Theophylline", "Pericarditis", "Chest trauma"], "EtOH intake or withdrawal triggers AF.")])
    ]),

    /* ---------- 11 ---------- */
    S("11-wpw-pattern", "11. WPW pattern and its link to AVRT", "Objective 11. Slides 98–101, 111–112.", [
      C("WPW pattern: the triad",
        "<p>The <strong>bundle of Kent</strong> is an accessory pathway that <strong>bypasses the AV node</strong>, connecting atria and ventricles directly: <strong>ventricular pre-excitation</strong>.</p>" +
        tbl(["Classic triad", "Why"], [
          ["<strong>Short PR &lt; 120 ms</strong>", "The impulse skips the AV node delay"],
          ["<strong>Delta wave</strong> (slurred QRS upstroke)", "Early ventricular activation through the pathway"],
          ["<strong>Slightly wide QRS</strong>", "Fusion of pathway and normal conduction"]]) +
        mn("WPW = <strong>W</strong>ide QRS, <strong>P</strong>R short, <strong>W</strong>ave (delta)."),
        ["wpw-kent", "wpw-triad"],
        [q("What is the accessory pathway in WPW called?", "Bundle of Kent", ["Bundle of His", "Bachmann bundle", "Purkinje fibers"], "Bundle of Kent."),
          q("Which PR interval fits the WPW pattern?", "Less than 120 ms", ["Over 200 ms", "Exactly 160 ms", "Progressively lengthening"], "Short PR < 120 ms."),
          q("The slurred upstroke of the QRS in WPW is the:", "Delta wave", ["J wave", "Epsilon wave", "U wave"], "Delta wave."),
          q("What does the bundle of Kent bypass?", "The AV node", ["The SA node", "The bundle branches", "The pulmonary veins"], "It connects atria and ventricles directly.")],
        [q("An asymptomatic 17-year-old's sports physical EKG shows PR 100 ms, a slurred QRS upstroke and QRS 116 ms. What is this?", "WPW pattern", ["First-degree AV block", "Left bundle branch block", "Brugada pattern"], "Short PR + delta wave + slightly wide QRS.")]),
      C("WPW pattern vs WPW syndrome",
        tbl(["Term", "Meaning"], [
          ["<strong>WPW pattern</strong>", "Pre-excitation <strong>on the ECG</strong>, usually <strong>asymptomatic</strong> and found incidentally"],
          ["<strong>WPW syndrome</strong>", "Pre-excitation <strong>plus arrhythmias</strong> that use the accessory pathway"]]) +
        "<p>The two arrhythmias of WPW syndrome: <strong>AVRT</strong> (95%) and <strong>atrial fibrillation</strong>.</p>" +
        hy("Incidental WPW pattern still needs <strong>risk stratification</strong> for tachyarrhythmias and <strong>sudden cardiac death</strong>."),
        ["pattern-vs-syndrome", "wpw-arrhythmias", "wpw-risk-stratification"],
        [q("What separates WPW syndrome from WPW pattern?", "Arrhythmias that involve the accessory pathway", ["A longer PR interval", "The presence of a delta wave", "Age over 40"], "Pattern = ECG only; syndrome = pre-excitation plus arrhythmia."),
          q("Which two arrhythmias occur in WPW syndrome?", "AVRT and atrial fibrillation", ["AVNRT and MAT", "Mobitz II and complete heart block", "VT and torsades"], "AVRT (95%) and AF."),
          q("What does an asymptomatic patient with an incidental WPW pattern need?", "Risk stratification for tachyarrhythmia and sudden cardiac death", ["No follow-up ever", "Immediate pacemaker", "Daily digoxin"], "Risk stratification.")],
        [q("A 23-year-old with a known WPW pattern on prior EKGs now has recurrent episodes of a regular tachycardia. What is her diagnosis now?", "WPW syndrome", ["WPW pattern only", "AVNRT", "Sick sinus syndrome"], "Pre-excitation plus pathway-mediated arrhythmia = syndrome.")])
    ]),

    /* ---------- 12 ---------- */
    S("12-orthodromic-vs-antidromic", "12. Orthodromic vs antidromic AVRT", "Objective 12. Slides 103–114.", [
      C("Orthodromic vs antidromic: circuit and EKG",
        tbl(["", "<strong>Orthodromic</strong> (90–95%)", "<strong>Antidromic</strong> (5%)"], [
          ["Down to ventricles", "<strong>AV node</strong>", "<strong>Accessory pathway</strong>"],
          ["Back to atria", "Accessory pathway", "AV node"],
          ["QRS", "<strong>Narrow</strong>, regular, <strong>no delta wave</strong>", "<strong>Wide, pre-excited</strong> (delta wave), <strong>mimics VT</strong>"],
          ["Rate", "150–250+", "150–250+"],
          ["P wave", "Inverted, <strong>after the QRS</strong>; RP about <strong>½ RR</strong>, constant", "Rarely seen; RP <strong>more than ½ RR</strong>"],
          ["Trigger", "Early atrial or ventricular beat", "Early atrial or ventricular beat"]]) +
        "<p><strong>Orthodromic start:</strong> an early atrial beat is blocked in the pathway, goes down the AV node, returns up the pathway (or an early ventricular beat is blocked in the AV node, goes up the pathway, returns down the node).</p>" +
        mn("<strong>Ortho = orthodox</strong>: down the normal AV node, so a normal narrow QRS. <strong>Anti</strong> = the wrong way down the pathway, so a wide QRS."),
        ["ortho-circuit", "antidromic-circuit", "avrt-ekg-compare"],
        [q("In orthodromic AVRT, the impulse travels down to the ventricles through the:", "AV node", ["Accessory pathway", "Slow pathway only", "Left bundle only"], "Anterograde via AV node, retrograde via pathway."),
          q("The QRS in antidromic AVRT is:", "Wide and pre-excited", ["Narrow without a delta wave", "Absent", "Normal with a long PR"], "Anterograde down the pathway gives a wide pre-excited QRS."),
          q("Is a delta wave seen during orthodromic AVRT?", "No, the ventricles depolarize through the normal system", ["Yes, always", "Only in V1", "Only at rates over 250"], "Delta wave absent in orthodromic AVRT."),
          q("Antidromic AVRT is often mistaken for:", "Ventricular tachycardia", ["Sinus tachycardia", "Atrial flutter", "Sinus arrhythmia"], "Wide QRS mimics VT."),
          q("In orthodromic AVRT, the RP interval is about:", "Half the RR interval", ["More than half the RR interval", "Zero", "Twice the RR interval"], "RP ≈ ½ RR, constant.")],
        [q("A patient with WPW has a regular narrow tachycardia at 200 with inverted P waves just after each QRS and no delta waves. Which AVRT?", "Orthodromic AVRT", ["Antidromic AVRT", "AF with pre-excitation", "AVNRT"], "Narrow, no delta, retrograde P after QRS."),
          q("A patient with WPW has a regular wide-complex tachycardia at 230 with delta waves. Which AVRT?", "Antidromic AVRT", ["Orthodromic AVRT", "AVNRT", "Sinus tachycardia with BBB"], "Wide pre-excited QRS = antidromic.")]),
      C("Treating AVRT",
        tbl(["Situation", "Treatment"], [
          ["<strong>Unstable</strong>", "<strong>Synchronized cardioversion immediately</strong>"],
          ["<strong>Stable, narrow (orthodromic)</strong>", "1st <strong>vagal maneuvers</strong> → 2nd <strong>IV adenosine</strong> → 3rd <strong>metoprolol or diltiazem</strong> → refractory: <strong>procainamide</strong> (blocks the pathway)"],
          ["<strong>Stable, wide (antidromic)</strong>", "Diagnosis uncertain: <strong>treat as VT</strong>. Certain: <strong>procainamide 20–50 mg/min</strong>, max 15 mg/kg (≤ 1500 mg); fails → <strong>EP consult</strong>"]]) +
        hy("<strong>Avoid AV nodal blockers in pre-excited rhythms</strong> (antidromic AVRT, pre-excited AF): <strong>verapamil, diltiazem, beta-blockers, amiodarone, adenosine</strong>. Blocking the node pushes impulses down the pathway."),
        ["avrt-unstable", "ortho-treatment", "antidromic-treatment", "avoid-nodal-blockers"],
        [q("First-line treatment for stable orthodromic AVRT?", "Vagal maneuvers", ["Procainamide", "Synchronized cardioversion", "Amiodarone"], "Vagal → adenosine → BB/CCB → procainamide."),
          q("Which drug is used for stable antidromic AVRT when the diagnosis is certain?", "Procainamide", ["Adenosine", "Diltiazem", "Metoprolol"], "Procainamide 20–50 mg/min."),
          q("Which drugs must be avoided in antidromic AVRT and pre-excited AF?", "AV nodal blockers: verapamil, diltiazem, beta-blockers, amiodarone, adenosine", ["Procainamide only", "Magnesium and potassium", "Heparin and aspirin"], "Nodal blockers push impulses down the pathway."),
          q("A stable wide-complex tachycardia in a WPW patient where the diagnosis is uncertain should be treated as:", "Ventricular tachycardia", ["Sinus tachycardia", "AVNRT", "MAT"], "Treat undiagnosed wide QRS tachycardia as VT."),
          q("Treatment for unstable AVRT?", "Immediate synchronized cardioversion", ["Adenosine", "Vagal maneuvers", "Diltiazem"], "Unstable = synchronized cardioversion.")],
        [q("A stable WPW patient in a regular wide-complex tachycardia with delta waves is about to get IV diltiazem. Best response?", "Stop: avoid nodal blockers and give procainamide instead", ["Give diltiazem as planned", "Give adenosine instead", "Give metoprolol instead"], "Nodal blockers are contraindicated in pre-excited rhythms."),
          q("A stable patient in orthodromic AVRT did not convert with vagal maneuvers, adenosine, or diltiazem. Which drug can terminate it by blocking the accessory pathway?", "Procainamide", ["Atropine", "Digoxin", "Epinephrine"], "Procainamide for refractory cases.")])
    ]),

    /* ---------- 13 ---------- */
    S("13-pvcs", "13. Premature ventricular contractions (PVCs)", "Objective 13. Slides 117–122.", [
      C("PVCs on the EKG",
        "<p>Isolated early beats from the <strong>outflow tract or His-Purkinje</strong> regions. Common, usually asymptomatic and benign; rarely trigger VT or VF, mostly with underlying heart disease.</p>" +
        "<ul><li>QRS <strong>wide and different</strong> from normal beats</li><li><strong>No P wave</strong> before it, usually</li><li><strong>Full compensatory pause</strong> after it (unless retrograde VA conduction)</li></ul>" +
        tbl(["Pattern", "Meaning"], [["<strong>Bigeminy</strong>", "Every <strong>2nd</strong> beat is a PVC"], ["<strong>Trigeminy</strong>", "Every <strong>3rd</strong> beat is a PVC"]]),
        ["pvc-origin", "pvc-ekg", "pvc-patterns"],
        [q("What does a PVC look like on the EKG?", "A wide, abnormal QRS with no preceding P wave", ["A narrow QRS with an early abnormal P wave", "A sawtooth baseline", "A short PR with a delta wave"], "Wide, different QRS, usually no P wave."),
          q("What follows a PVC?", "A full compensatory pause", ["A delta wave", "A shorter-than-normal RR interval", "A run of flutter waves"], "Full compensatory pause unless retrograde VA conduction."),
          q("Ventricular bigeminy means:", "Every second beat is a PVC", ["Every third beat is a PVC", "Two PVCs in a row", "PVCs only during exercise"], "Bigeminy = every 2nd beat."),
          q("Ventricular trigeminy means:", "Every third beat is a PVC", ["Every second beat is a PVC", "Three PVCs in a row", "Three P waves per QRS"], "Trigeminy = every 3rd beat.")],
        [q("A strip alternates one normal narrow beat with one wide early beat that has no P wave, over and over. Rhythm?", "Sinus rhythm with ventricular bigeminy", ["Ventricular trigeminy", "Mobitz I", "Electrical alternans"], "Every second beat premature and wide = bigeminy."),
          q("A strip shows two normal beats, then a wide early beat with no P wave, repeating. Rhythm?", "Sinus rhythm with ventricular trigeminy", ["Ventricular bigeminy", "Nonsustained VT", "2:1 AV block"], "Every 3rd beat = trigeminy.")]),
      C("PVCs: what to look for",
        "<p><strong>Asymptomatic with no heart disease:</strong> no treatment. <strong>Mild symptoms:</strong> reassurance.</p>" +
        "<p><strong>Frequent PVCs: check for</strong></p><ul><li><strong>Electrolytes</strong>: hypokalemia, hyperkalemia, <strong>hypomagnesemia</strong></li><li><strong>Hyperthyroidism</strong></li><li><strong>Occult heart disease</strong></li></ul>",
        ["pvc-workup"],
        [q("Which electrolyte problems should be checked with frequent PVCs?", "Hypokalemia, hyperkalemia and hypomagnesemia", ["Hypernatremia and hypochloremia", "Hypercalcemia only", "Hypophosphatemia only"], "K⁺ and Mg²⁺ disorders."),
          q("Which endocrine condition should be excluded with frequent PVCs?", "Hyperthyroidism", ["Hypothyroidism", "Cushing syndrome", "Diabetes insipidus"], "Hyperthyroidism."),
          q("Treatment for asymptomatic PVCs in a patient with no heart disease?", "None", ["Amiodarone", "ICD", "Catheter ablation"], "No treatment.")],
        [q("A 45-year-old has frequent PVCs on a Holter, weight loss, tremor and heat intolerance. Which test is most important?", "Thyroid function tests", ["Coronary angiography", "Tilt table test", "Lumbar puncture"], "Hyperthyroidism is a cause of frequent PVCs.")]),
      C("PVCs: treatment",
        "<p><strong>Treat when:</strong> symptomatic, or <strong>cardiomyopathy from a high PVC burden</strong>.</p>" +
        tbl(["Line", "Treatment"], [
          ["<strong>1st</strong>", "<strong>Beta-blockers</strong> (metoprolol, propranolol, atenolol)"],
          ["Alternative", "Non-DHP CCBs (diltiazem, verapamil)"],
          ["2nd", "Antiarrhythmics (<strong>flecainide</strong>, amiodarone)"],
          ["Refractory", "<strong>Catheter ablation</strong> (symptoms or cardiomyopathy)"]]),
        ["pvc-treatment", "pvc-cardiomyopathy"],
        [q("First-line drug for symptomatic PVCs?", "Beta-blockers", ["Flecainide", "Amiodarone", "Digoxin"], "Metoprolol, propranolol, atenolol."),
          q("When are PVCs treated even if symptoms are mild?", "When a high PVC burden has caused cardiomyopathy", ["When they occur at night", "When the patient is over 50", "Never"], "PVC-induced cardiomyopathy is an indication."),
          q("Which antiarrhythmics are second-line for PVCs?", "Flecainide and amiodarone", ["Adenosine and atropine", "Digoxin and magnesium", "Lidocaine and epinephrine"], "Second line: flecainide, amiodarone.")],
        [q("A 52-year-old with a 25% PVC burden on Holter now has an EF of 35% and no other cause found. Beta-blocker failed. Best next step?", "Catheter ablation", ["Reassurance only", "Permanent pacemaker", "Digoxin"], "Refractory PVCs with cardiomyopathy: ablation.")])
    ]),

    /* ---------- 14 ---------- */
    S("14-vt-characterization", "14. Characterizing ventricular tachycardia", "Objective 14. Slides 123–126.", [
      C("VT: definition and the three axes",
        "<p><strong>VT = 3 or more consecutive PVCs.</strong></p>" +
        tbl(["Axis", "Options"], [
          ["<strong>Duration</strong>", "<strong>Nonsustained</strong>: &lt; 30 s, stops on its own · <strong>Sustained</strong>: &gt; 30 s, HR &gt; 100"],
          ["<strong>Morphology</strong>", "<strong>Monomorphic</strong> vs <strong>polymorphic</strong>"],
          ["<strong>Hemodynamics</strong>", "<strong>Stable vs unstable</strong>; perfusing vs <strong>pulseless</strong>"]]),
        ["vt-definition", "vt-duration", "vt-hemodynamics"],
        [q("VT is defined as how many consecutive PVCs?", "3 or more", ["2 or more", "5 or more", "10 or more"], "Three or more consecutive PVCs."),
          q("Nonsustained VT lasts:", "Less than 30 seconds and stops on its own", ["More than 30 seconds", "Exactly 1 minute", "Until cardioverted"], "< 30 s, terminates spontaneously."),
          q("Sustained VT lasts:", "More than 30 seconds", ["Less than 10 seconds", "Less than 30 seconds", "Only 3 beats"], "> 30 s with HR > 100."),
          q("Which three features characterize VT?", "Duration, morphology and hemodynamic stability", ["Axis, PR interval and QT", "Age, sex and race", "P wave, T wave and U wave"], "Sustained/nonsustained, mono/polymorphic, stable/unstable.")],
        [q("Telemetry shows 8 beats of wide-complex tachycardia at 160 that stop on their own; the patient feels fine. How is this classified?", "Nonsustained ventricular tachycardia", ["Sustained VT", "Ventricular fibrillation", "Accelerated junctional rhythm"], "≥ 3 PVCs, < 30 s, self-terminating.")]),
      C("Monomorphic vs polymorphic VT",
        tbl(["", "<strong>Monomorphic</strong>", "<strong>Polymorphic</strong>"], [
          ["QRS shape", "<strong>Same beat to beat</strong>", "<strong>Varies</strong> within one lead"],
          ["Rhythm", "Rapid, <strong>regular</strong>", "Rapid, <strong>irregular</strong>; RR and axis vary"],
          ["Rate", "140–180", "140–180"],
          ["P waves", "None associated", "Absent"],
          ["Note", "<strong>Most common</strong> VT", "Torsades is a long-QT subtype"]]),
        ["monomorphic-vt", "polymorphic-vt"],
        [q("Which VT form is most common?", "Monomorphic", ["Polymorphic", "Torsades", "Bidirectional"], "Monomorphic VT is most common."),
          q("In monomorphic VT, the QRS morphology is:", "Consistent beat to beat", ["Variable within a single lead", "Narrow", "Preceded by P waves"], "Same shape every beat."),
          q("Polymorphic VT has a rhythm that is:", "Rapid and irregular", ["Slow and regular", "Rapid and perfectly regular", "Paced"], "Irregular with varying RR and axis."),
          q("Typical rate range for VT on the slides?", "140–180 bpm", ["60–100 bpm", "100–120 bpm", "250–350 bpm"], "140–180.")],
        [q("A post-MI patient has a regular wide-complex tachycardia at 170 where every QRS looks identical. Morphology?", "Monomorphic VT", ["Polymorphic VT", "Torsades de pointes", "VF"], "Identical QRS complexes = monomorphic."),
          q("A strip shows a fast, irregular wide-complex rhythm whose QRS shape and axis keep changing in lead II. The QT before it was normal. Rhythm?", "Polymorphic VT", ["Monomorphic VT", "Atrial flutter", "Sinus tachycardia with BBB"], "Changing morphology = polymorphic; normal QT makes torsades less likely.")])
    ]),

    /* ---------- 15 ---------- */
    S("15-torsades-de-pointes", "15. Torsades de pointes", "Objective 15. Slides 127–128, 136.", [
      C("Torsades: recognition and causes",
        "<p>A <strong>long-QT subtype of polymorphic VT</strong>: the QRS <strong>twists around the baseline</strong> (\"twisting of the points\").</p>" +
        "<p><strong>Cause:</strong> <strong>delayed repolarization</strong>. Inherited (<strong>congenital long QT</strong>) or acquired (<strong>drug toxicity</strong>).</p>" +
        "<p><strong>Risk factors:</strong> <strong>severe hypokalemia</strong>, <strong>severe hypomagnesemia</strong>, <strong>QT-prolonging medications</strong>.</p>" +
        "<p>Bursts of up to <strong>30 cycles</strong>, often stopping on their own; sustained torsades is uncommon but can become <strong>VF</strong>.</p>",
        ["tdp-definition", "tdp-causes", "tdp-course"],
        [q("Torsades de pointes is a subtype of:", "Polymorphic VT with a long QT", ["Monomorphic VT", "Atrial flutter", "AVNRT"], "Long-QT polymorphic VT."),
          q("Which electrolyte abnormalities cause torsades?", "Severe hypokalemia and severe hypomagnesemia", ["Hypernatremia and hypercalcemia", "Hyperkalemia and hypercalcemia", "Hyponatremia only"], "Low K⁺ and low Mg²⁺."),
          q("The underlying problem in torsades is:", "Delayed repolarization", ["An accessory pathway", "AV node reentry", "SA node failure"], "Delayed repolarization initiates it."),
          q("Sustained torsades can degenerate into:", "Ventricular fibrillation", ["Atrial fibrillation", "Complete heart block", "Sinus bradycardia"], "Can lead to VF.")],
        [q("A patient on methadone and ondansetron with K⁺ 2.8 and Mg²⁺ 1.1 has runs of a wide tachycardia whose QRS peaks twist around the baseline. Diagnosis?", "Torsades de pointes", ["Monomorphic VT", "VF", "Antidromic AVRT"], "QT drugs + low K and Mg + twisting QRS.")]),
      C("Torsades: management",
        "<ul><li><strong>Sustained polymorphic VT: immediate unsynchronized shock</strong> (defibrillation)</li><li>Torsades: add <strong>magnesium 1–2 g IV</strong></li><li><strong>Do not withhold defibrillation</strong></li><li>Stop QT-prolonging drugs; correct K⁺ and Mg²⁺</li></ul>",
        ["tdp-magnesium", "tdp-defib"],
        [q("Which drug is added for torsades de pointes?", "Magnesium 1–2 g IV", ["Amiodarone 300 mg IV", "Adenosine 6 mg IV", "Procainamide"], "Magnesium 1–2 g IV."),
          q("How is sustained polymorphic VT shocked?", "Immediate unsynchronized shock (defibrillation)", ["Synchronized cardioversion at 50 J", "Not shocked at all", "Only after magnesium"], "Unsynchronized; do not withhold defibrillation."),
          q("Should magnesium delay defibrillation in unstable torsades?", "No, do not withhold defibrillation", ["Yes, always give magnesium first", "Yes, wait 10 minutes", "Only shock if magnesium fails twice"], "Defibrillation is not withheld.")],
        [q("A patient on sotalol develops sustained torsades and loses consciousness. Best immediate action?", "Defibrillate and give magnesium 1–2 g IV", ["Give amiodarone and wait", "Synchronized cardioversion at 50 J", "Adenosine 6 mg IV"], "Unsynchronized shock plus magnesium; amiodarone prolongs QT."),
          q("A patient with recurrent self-terminating runs of torsades is awake with a pulse. Which IV drug comes first?", "Magnesium", ["Adenosine", "Diltiazem", "Atropine"], "Magnesium 1–2 g IV for torsades.")])
    ]),

    /* ---------- 16 ---------- */
    S("16-vt-pathophysiology-risk", "16. VT: pathophysiology and risk factors", "Objective 16. Slides 129–131.", [
      C("VT: causes",
        tbl(["", "Causes"], [
          ["<strong>Common</strong>", "<strong>Chronic ischemic heart disease</strong>, <strong>acute MI</strong>"],
          ["Less common", "Dilated or hypertrophic cardiomyopathy, valvular disease (<strong>MVP</strong>), inherited ion-channel disease, drug toxicity"],
          ["<strong>Exacerbating</strong>", "<strong>Hypoxia, alkalosis</strong>, electrolyte abnormalities (especially <strong>hyperkalemia</strong>)"]]),
        ["vt-etiology", "vt-exacerbating"],
        [q("What is the most common cause of VT?", "Ischemic heart disease or acute MI", ["Mitral valve prolapse", "Hyperthyroidism", "Lyme disease"], "Chronic ischemic heart disease and acute MI."),
          q("Which electrolyte abnormality is especially named as a VT exacerbator?", "Hyperkalemia", ["Hypernatremia", "Hypocalcemia", "Hypophosphatemia"], "Electrolytes, especially hyperkalemia."),
          q("Which acid-base state exacerbates VT?", "Alkalosis", ["Mild acidosis only", "None", "Respiratory acidosis only"], "Hypoxia, alkalosis and electrolytes.")],
        [q("A patient with an old anterior MI and an LV scar has recurrent monomorphic VT. Which cause fits best?", "Chronic ischemic heart disease", ["Inherited ion-channel disease", "Drug toxicity", "Alkalosis"], "Scar from ischemic heart disease is the most common substrate.")]),
      C("VT: risk factors and post-MI timing",
        "<p><strong>Risk factors:</strong> <strong>hypertension, previous MI, COPD</strong>, <strong>ST changes</strong> on presentation.</p>" +
        hy("VT <strong>more than 48 hours after acute MI</strong> raises the risk of death. VT within the first 48 hours carries lower risk."),
        ["vt-risk-factors", "vt-post-mi-timing"],
        [q("Which is a listed risk factor for VT?", "COPD", ["Asthma in childhood", "Hypothyroidism", "Low BMI"], "Hypertension, previous MI, COPD, ST changes."),
          q("VT at what time after acute MI carries a higher risk of death?", "More than 48 hours after the MI", ["Within the first 6 hours", "Within the first 48 hours", "Timing does not matter"], "Late (> 48 h) VT carries higher mortality."),
          q("Which presenting EKG finding is a VT risk factor?", "ST segment changes", ["Sinus arrhythmia", "Low-voltage P waves", "Short QT"], "ST changes on presentation.")],
        [q("Two patients have VT after an MI: one 6 hours after, the other 5 days after. Which has the higher risk of death?", "The patient with VT 5 days after the MI", ["The patient with VT 6 hours after", "Equal risk", "Neither has increased risk"], "VT > 48 h after acute MI increases the risk of death.")]),
      C("VT: mechanisms",
        "<ul><li><strong>Abnormal automaticity</strong>: early or late afterdepolarizations</li><li><strong>Reentry</strong></li><li><strong>Ischemia</strong></li><li><strong>Increased extracellular potassium</strong> triggers spontaneous activity</li></ul>",
        ["vt-mechanisms"],
        [q("Which is a mechanism of VT?", "Reentry", ["AV node dual pathway", "Accessory pathway only", "Vagal stimulation"], "Abnormal automaticity, reentry, ischemia, high extracellular K⁺."),
          q("Early or late afterdepolarizations are a form of:", "Abnormal automaticity", ["Normal automaticity", "AV block", "Vagal reflex"], "Listed under abnormal automaticity.")],
        [q("A dialysis patient who missed sessions has K⁺ 7.4 and a run of wide-complex tachycardia. Which VT mechanism is most relevant?", "Increased extracellular potassium triggering spontaneous activity", ["An accessory pathway", "Dual AV nodal pathways", "Vagal hypertonia"], "High extracellular K⁺ triggers spontaneous activity.")])
    ]),

    /* ---------- 17 ---------- */
    S("17-vt-presentation-treatment", "17. VT: presentation and treatment by type", "Objective 17. Slides 132–137.", [
      C("VT: clinical presentation",
        "<p><strong>Typical:</strong> palpitations, dyspnea, lightheadedness; <strong>rarely asymptomatic</strong>. <strong>Severe:</strong> syncope, <strong>cardiac arrest</strong>.</p>" +
        "<p><strong>Triggers:</strong> exercise, emotional stress. <strong>Signs:</strong> hypotension, altered mental status, diaphoresis, pallor.</p>" +
        "<p><strong>Three management groups:</strong> pulseless VT · unstable VT with a pulse · stable VT with a pulse.</p>",
        ["vt-presentation", "vt-types"],
        [q("Which triggers are listed for VT?", "Exercise and emotional stress", ["Sleep and fasting", "Cold weather only", "Eating large meals"], "Exercise and emotional stress."),
          q("How often is VT asymptomatic?", "Rarely", ["Usually", "Always in young patients", "In half of cases"], "VT is rarely asymptomatic."),
          q("What are the three VT management groups?", "Pulseless, unstable with a pulse, stable with a pulse", ["Narrow, wide, irregular", "Acute, chronic, recurrent", "Mild, moderate, severe"], "Management is decided by pulse and stability.")],
        [q("A 60-year-old with prior MI collapses while shoveling snow. He is pale and diaphoretic with BP 74/40 and a wide regular tachycardia at 180. Which VT group?", "Unstable VT with a pulse", ["Stable VT with a pulse", "Pulseless VT", "Nonsustained VT"], "He has a pulse but is hypotensive.")]),
      C("Pulseless VT",
        "<ul><li><strong>Immediate defibrillation</strong></li><li><strong>Chest compressions</strong></li><li><strong>Follow ACLS</strong> (cardiac arrest algorithm: shock, CPR 2 min, epinephrine, amiodarone)</li></ul>" +
        hy("No pulse = <strong>defibrillate</strong> (unsynchronized). Pulse but unstable = <strong>synchronized cardioversion</strong>."),
        ["pulseless-vt"],
        [q("Treatment for pulseless VT?", "Immediate defibrillation and CPR per ACLS", ["Synchronized cardioversion", "Amiodarone 150 mg over 10 minutes", "Adenosine 6 mg"], "Pulseless VT is treated like VF."),
          q("Pulseless VT follows which protocol?", "The ACLS cardiac arrest protocol", ["The bradycardia protocol", "The stable tachycardia protocol", "Outpatient follow-up"], "Follow ACLS.")],
        [q("A monitored patient in monomorphic VT becomes unresponsive with no carotid pulse. First action?", "Defibrillate and start CPR", ["Synchronized cardioversion at 100 J", "Give amiodarone 150 mg IV", "Check a 12-lead EKG"], "Pulseless VT = immediate defibrillation.")]),
      C("Unstable VT with a pulse",
        "<p><strong>Unstable signs:</strong> hypotension, heart failure, chest pain, AMS, signs of shock.</p>" +
        "<ul><li><strong>Immediate synchronized cardioversion at 100 J</strong>, sedate when feasible</li><li>Increase energy per device settings if needed</li><li>If unsuccessful: more energy, add antiarrhythmics, expert consult</li></ul>",
        ["unstable-vt"],
        [q("Initial energy for synchronized cardioversion of unstable VT with a pulse?", "100 J", ["360 J", "50 J", "200 J unsynchronized"], "100 J synchronized."),
          q("Which signs make VT with a pulse unstable?", "Hypotension, heart failure, chest pain, AMS or shock", ["A rate of 150", "Palpitations alone", "A QRS of 130 ms"], "Listed instability signs."),
          q("If the first synchronized shock fails in unstable VT, next step?", "Increase the energy, add antiarrhythmics or get expert help", ["Stop and observe", "Give adenosine", "Switch to transcutaneous pacing"], "Escalate energy and add drugs.")],
        [q("A patient in VT at 190 is awake but has chest pain and BP 80/50. Best treatment?", "Synchronized cardioversion at 100 J, with sedation if feasible", ["Defibrillation at 360 J", "Amiodarone 150 mg over 10 minutes and observe", "Adenosine 6 mg IV"], "Unstable with a pulse = synchronized cardioversion.")]),
      C("Stable VT with a pulse",
        tbl(["Drug", "Dose and notes"], [
          ["<strong>Amiodarone</strong>", "<strong>150 mg IV over 10 min</strong>; may repeat if VT recurs; then <strong>1 mg/min for 6 hours</strong>"],
          ["<strong>Procainamide</strong>", "<strong>20–50 mg/min</strong> until the arrhythmia stops, hypotension, or <strong>QRS widens &gt; 50%</strong>; max <strong>17 mg/kg</strong>; maintenance 1–4 mg/min. <strong>Avoid with prolonged QT, acute MI or severe CHF</strong>"]]) +
        "<p>If drugs fail or are contraindicated: <strong>synchronized cardioversion</strong>.</p>",
        ["stable-vt-amiodarone", "stable-vt-procainamide"],
        [q("Amiodarone dose for stable VT with a pulse?", "150 mg IV over 10 minutes, then 1 mg/min for 6 hours", ["300 mg IV push", "1 mg IV every 3–5 minutes", "6 mg rapid IV push"], "150 mg over 10 min, then infusion."),
          q("When is procainamide stopped in stable VT?", "Arrhythmia suppressed, hypotension, or QRS widens more than 50%", ["After exactly 5 minutes", "When the QT shortens", "When the heart rate drops below 100"], "Procainamide end points."),
          q("When should procainamide be avoided?", "Prolonged QT, acute MI or severe CHF", ["Hypertension", "Asthma", "Diabetes"], "Listed contraindications."),
          q("What is the maximum procainamide dose for stable VT?", "17 mg/kg", ["3 mg total", "300 mg", "1 g/kg"], "Max 17 mg/kg.")],
        [q("A patient in VT at 150 is alert, BP 124/78, no chest pain. He has a long baseline QT. Which drug is preferred?", "Amiodarone 150 mg IV over 10 minutes", ["Procainamide", "Adenosine", "Defibrillation"], "Procainamide is avoided with prolonged QT."),
          q("A stable patient in VT did not respond to amiodarone, and procainamide is contraindicated. Next step?", "Synchronized cardioversion", ["Unsynchronized defibrillation", "Atropine", "Observation only"], "If drugs fail or are contraindicated: synchronized cardioversion.")]),
      C("VT: long-term management",
        "<p><strong>High risk:</strong> symptomatic or sustained VT <strong>without a reversible cause</strong> (acute MI, electrolytes, drug toxicity).</p>" +
        tbl(["Treatment", "Role"], [
          ["<strong>ICD</strong>", "<strong>Significant LV dysfunction</strong>: high sudden-death risk"],
          ["<strong>Beta-blockers</strong>", "<strong>Primary</strong> drug for VT with structural heart disease"],
          ["Amiodarone / sotalol", "If beta-blockers are not enough"],
          ["Ablation", "If unresponsive to drugs"]]),
        ["vt-long-term"],
        [q("Primary drug for long-term VT treatment with structural heart disease?", "Beta-blockers", ["Digoxin", "Diltiazem", "Adenosine"], "Beta-blockers first, then amiodarone/sotalol."),
          q("Which patients with VT get an ICD?", "Those with significant LV dysfunction", ["All patients with a single PVC", "Patients with VT from hypokalemia that was corrected", "Patients under 30 only"], "ICD for significant LV dysfunction."),
          q("Which drugs are second-line if beta-blockers fail for chronic VT?", "Amiodarone or sotalol", ["Atropine or adenosine", "Verapamil or digoxin", "Lidocaine or magnesium"], "Amiodarone/sotalol.")],
        [q("A patient survived sustained VT with no reversible cause; echo shows EF 25%. Best long-term protection from sudden death?", "ICD implantation", ["Daily aspirin only", "Pacemaker", "Diltiazem"], "Significant LV dysfunction: ICD.")])
    ]),

    /* ---------- 18 ---------- */
    S("18-ventricular-fibrillation", "18. Ventricular fibrillation", "Objective 18. Slides 138–147.", [
      C("VF: definition and EKG",
        "<p><strong>Disorganized depolarization</strong> and chaotic contraction of the ventricles: <strong>no cardiac output</strong>.</p>" +
        "<p><strong>EKG:</strong> irregular pattern with <strong>no discernible P waves or organized QRS</strong>. Amplitude can be <strong>coarse, intermediate or fine</strong>.</p>",
        ["vf-definition", "vf-ekg"],
        [q("What is the cardiac output in VF?", "None", ["Reduced by half", "Normal", "Increased"], "Chaotic contraction produces no output."),
          q("Which EKG description fits VF?", "Chaotic irregular waves with no organized QRS or P waves", ["Regular wide QRS at 160", "Sawtooth waves", "Narrow QRS with retrograde P waves"], "No discernible P waves or organized QRS."),
          q("VF amplitude can be described as:", "Coarse, intermediate or fine", ["Mono or polymorphic", "Orthodromic or antidromic", "Sustained or nonsustained"], "Amplitudes of VF.")],
        [q("A patient collapses. The monitor shows low-amplitude chaotic squiggles with no QRS complexes; some leads look almost flat. Which rhythm should you assume and treat?", "Fine ventricular fibrillation", ["Asystole", "Sinus arrest", "Atrial flutter"], "Fine VF can look nearly flat; it is still a shockable rhythm.")]),
      C("VF: causes and risk factors",
        tbl(["Type", "Description"], [["<strong>Primary VF</strong>", "Sudden, with no prior hemodynamic decline"], ["<strong>Secondary VF</strong>", "After prolonged LV failure and/or circulatory shock"]]) +
        "<p>Common in <strong>severe ischemic heart disease</strong> with or without acute MI.</p>" +
        "<ul><li><strong>Metabolic:</strong> hypokalemia, hyperkalemia, hypomagnesemia, acidosis, hypothermia, hypoxia</li><li><strong>Structural/genetic:</strong> dilated, hypertrophic, restrictive cardiomyopathy; <strong>family history of sudden cardiac death</strong>; QT abnormalities; <strong>Brugada syndrome</strong></li><li><strong>Alcohol</strong></li><li><strong>Inducers:</strong> direct myocardial stimulation (catheters), <strong>electrocution</strong>, <strong>blunt chest trauma (commotio cordis)</strong></li><li>History of sustained VT</li></ul>",
        ["vf-types", "vf-risk-factors", "vf-inducers"],
        [q("Primary VF is VF that:", "Occurs suddenly with no preceding hemodynamic deterioration", ["Follows prolonged LV failure or shock", "Is caused by a pacemaker", "Only occurs in children"], "Primary vs secondary VF."),
          q("Blunt chest trauma that induces VF is called:", "Commotio cordis", ["Beck's triad", "Kussmaul sign", "Brugada syndrome"], "Commotio cordis."),
          q("Which genetic syndrome is a VF risk factor?", "Brugada syndrome", ["Marfan syndrome only", "Down syndrome", "Turner syndrome"], "Brugada and congenital QT abnormalities."),
          q("Secondary VF follows:", "Prolonged LV failure and/or circulatory shock", ["A sudden PAC", "Vagal maneuvers", "Adenosine"], "Secondary VF.")],
        [q("A 15-year-old baseball catcher is struck in the chest by a fastball and collapses pulseless. Most likely rhythm and mechanism?", "VF from commotio cordis", ["Asystole from vagal reflex", "Complete heart block from contusion", "Torsades from long QT"], "Blunt chest trauma can induce VF.")]),
      C("VF: presentation, ACLS and after ROSC",
        "<p><strong>Presentation:</strong> sudden collapse (sudden cardiac death); before the event maybe chest pain, SOB, nausea, vomiting. At presentation: <strong>unconscious, unresponsive, no palpable pulse</strong>.</p>" +
        "<ol><li>Start <strong>CPR</strong>, attach monitor/defibrillator</li><li>Shockable (pVT/VF)? → <strong>defibrillate</strong></li><li><strong>CPR 2 min</strong>, IV/IO access, analyze rhythm</li><li>Still shockable → defibrillate, CPR 2 min, <strong>epinephrine 1 mg IV</strong></li><li>Still shockable → defibrillate, CPR 2 min, <strong>amiodarone 300 mg</strong>; consider the H's and T's</li></ol>" +
        "<p><strong>After ROSC:</strong> address triggers (acute ischemia, metabolic, toxicologic). <strong>Long term: ICD</strong> for a history of VF or sustained VT.</p>" +
        mn("<strong>Shock → CPR → Shock → Epi → Shock → Amio</strong>."),
        ["vf-presentation", "acls-sequence", "vf-post-rosc"],
        [q("In the ACLS cardiac arrest sequence for VF, after the second shock you give:", "Epinephrine 1 mg IV", ["Amiodarone 300 mg", "Atropine 1 mg", "Adenosine 6 mg"], "Shock, CPR, shock, epinephrine."),
          q("After the third shock in refractory VF, which drug is given?", "Amiodarone 300 mg", ["Epinephrine 3 mg", "Magnesium 1 g", "Lidocaine 50 mg"], "Shock, CPR, amiodarone 300 mg."),
          q("How long is each CPR cycle between rhythm checks?", "2 minutes", ["30 seconds", "5 minutes", "10 minutes"], "CPR for 2 minutes."),
          q("Long-term treatment after surviving VF with no reversible cause?", "ICD placement", ["Pacemaker", "Daily aspirin only", "Digoxin"], "ICD for a history of VF or sustained VT.")],
        [q("A man in VF has had one shock and 2 minutes of CPR; IV access is in. Rhythm check: still VF. What now?", "Shock, resume CPR for 2 minutes and give epinephrine 1 mg IV", ["Give amiodarone 300 mg before any shock", "Synchronized cardioversion", "Stop CPR and check labs"], "Second shock then epinephrine."),
          q("After ROSC from VF, troponin is high and the EKG shows ST elevation. What should be addressed next?", "The trigger: acute ischemia", ["Nothing; the rhythm is fixed", "Only magnesium", "Pacemaker placement"], "Post-ROSC: address dysrhythmic triggers like acute ischemia.")]),
      C("The H's and T's",
        tbl(["H's", "T's"], [
          ["<strong>Hypovolemia</strong>/hemorrhage", "<strong>Trauma</strong>"],
          ["<strong>Hypoxia</strong>", "<strong>Tablets</strong> (overdose)"],
          ["<strong>Hydrogen ion</strong> (acidosis)", "<strong>Thrombosis, coronary</strong>"],
          ["<strong>Hypo/hyperkalemia</strong>", "<strong>Thrombosis, pulmonary</strong> (PE)"],
          ["<strong>Hypothermia</strong>", "<strong>Tamponade</strong>, cardiac"],
          ["", "<strong>Tension pneumothorax</strong>"]]),
        ["hs-and-ts"],
        [q("Which is one of the H's in cardiac arrest?", "Hydrogen ion (acidosis)", ["Hypertension", "Hyperglycemia", "Hypocalcemia"], "Hypovolemia, hypoxia, hydrogen ion, hypo/hyperkalemia, hypothermia."),
          q("Which is one of the T's?", "Tension pneumothorax", ["Tachycardia", "Thyroid storm", "Tetany"], "Trauma, tablets, coronary and pulmonary thrombosis, tamponade, tension pneumothorax."),
          q("\"Tablets\" in the T's refers to:", "Overdose", ["Nitroglycerin", "Aspirin therapy", "Potassium supplements"], "Tablets = overdose.")],
        [q("A trauma patient in arrest has distended neck veins, absent breath sounds on the left and tracheal deviation to the right. Which reversible cause?", "Tension pneumothorax", ["Hypothermia", "Hypokalemia", "Coronary thrombosis"], "One of the T's.")])
    ]),

    /* ---------- 19 ---------- */
    S("19-pea-and-asystole", "19. PEA and asystole", "Objective 19. Slides 148–151.", [
      C("Pulseless electrical activity",
        "<p><strong>Organized electrical activity with no cardiac contraction</strong>: no output. PEA can <strong>mimic any rhythm, even sinus</strong>.</p>" +
        tbl(["PEA type", "Linked to"], [
          ["<strong>Narrow complex</strong>", "<strong>Mechanical</strong> problems: <strong>tamponade, pneumothorax, PE</strong>, myocardial rupture"],
          ["<strong>Wide complex</strong>", "<strong>Metabolic</strong> (hyperkalemia), <strong>drug toxicity</strong> (Na⁺ channel blockers), ischemia, LV failure"]]),
        ["pea-definition", "pea-types"],
        [q("PEA is defined as:", "Organized electrical activity with no cardiac contraction", ["No electrical or mechanical activity", "Chaotic ventricular activity", "A slow rhythm with a pulse"], "Electricity without mechanics."),
          q("Narrow-complex PEA points to which kind of cause?", "Mechanical, such as tamponade, pneumothorax or PE", ["Metabolic, such as hyperkalemia", "Drug toxicity from sodium channel blockers", "Hypothermia only"], "Narrow = mechanical."),
          q("Wide-complex PEA points to which kind of cause?", "Metabolic or toxic, such as hyperkalemia or sodium channel blocker toxicity", ["Tension pneumothorax", "Cardiac tamponade", "Pulmonary embolism"], "Wide = metabolic, toxic, ischemic or LV failure."),
          q("Which rhythm can PEA look like on the monitor?", "Any rhythm, even sinus rhythm", ["Only VF", "Only asystole", "Only atrial flutter"], "PEA can mimic any rhythm.")],
        [q("A patient after a stab wound to the chest shows a narrow sinus-looking rhythm at 110 on the monitor but has no pulse and muffled heart sounds. Most likely cause?", "PEA from cardiac tamponade", ["VF", "Hyperkalemia", "Sodium channel blocker overdose"], "Narrow-complex PEA = mechanical cause like tamponade."),
          q("A dialysis patient in arrest has a slow wide-complex rhythm on the monitor with no pulse. Which cause fits?", "Hyperkalemia causing wide-complex PEA", ["Tension pneumothorax", "Tamponade", "Massive PE"], "Wide-complex PEA = metabolic cause.")]),
      C("Asystole",
        "<p><strong>Cessation of electrical and mechanical activity</strong> (\"flatline\"). Usually a deterioration of <strong>VF or pulseless VT</strong>. <strong>Less than 2% survive.</strong></p>",
        ["asystole-definition", "asystole-survival"],
        [q("Asystole is the absence of:", "Both electrical and mechanical heart activity", ["Only mechanical activity", "Only P waves", "Only the QRS"], "Cessation of both."),
          q("Asystole usually develops from:", "Deterioration of VF or pulseless VT", ["Atrial flutter", "Mobitz I", "Sinus arrhythmia"], "Deterioration of the initial non-perfusing ventricular rhythm."),
          q("Survival from asystole is about:", "Less than 2%", ["About 25%", "About 50%", "Over 80%"], "< 2% survive.")],
        [q("A patient found down 20 minutes after an unwitnessed arrest shows a flat line in two leads. Which statement about prognosis is true?", "Survival from asystole is under 2%", ["Asystole has the best survival of all arrest rhythms", "A shock usually restores sinus rhythm", "Asystole always reverts to VF"], "< 2% of asystole cases survive.")]),
      C("Treating PEA and asystole",
        hy("<strong>Asystole and PEA do not respond to defibrillation.</strong>") +
        "<ol><li>Connect monitor/defibrillator, analyze rhythm</li><li>Asystole or PEA → <strong>CPR for 2 minutes</strong></li><li><strong>Epinephrine 1 mg IV every 3–5 min</strong></li><li>Repeat; shock only if it becomes shockable</li><li>Search for <strong>H's and T's</strong></li></ol>",
        ["pea-asystole-treatment"],
        [q("Are PEA and asystole treated with defibrillation?", "No, they are not shockable", ["Yes, at 360 J", "Yes, synchronized", "Only asystole is shocked"], "They do not respond to defibrillation."),
          q("Which drug and interval are used in PEA and asystole?", "Epinephrine 1 mg IV every 3–5 minutes", ["Amiodarone 300 mg every 3–5 minutes", "Atropine 1 mg every 10 minutes", "Adenosine 6 mg once"], "Epinephrine 1 mg q3–5 min."),
          q("When would you defibrillate during an asystole code?", "Only if the rhythm becomes shockable (VF or pulseless VT)", ["Every 2 minutes regardless", "Immediately at the start", "Never in any circumstance"], "Repeat until the rhythm is shockable.")],
        [q("During a code the rhythm is asystole. A resident charges the defibrillator. Best response?", "Do not shock; continue CPR and give epinephrine 1 mg IV every 3–5 minutes", ["Shock at 200 J", "Synchronized cardioversion", "Give amiodarone 300 mg"], "Asystole is not shockable.")])
    ]),

    /* ---------- 20a ---------- */
    S("20a-atropine", "20a. Atropine", "Objective 20. Slides 25, 45, 51, 59, 64, 70.", [
      C("Atropine: when, how much, and when it fails",
        "<p><strong>Indication:</strong> <strong>symptomatic / unstable bradycardia</strong> (sinus brady, Mobitz I, complete heart block, escape rhythms).</p>" +
        "<p><strong>Dose:</strong> <strong>1 mg IV</strong>, repeat every <strong>3–5 min</strong>, max <strong>3 mg</strong>.</p>" +
        "<p><strong>Acts on the SA and AV nodes</strong>, so it often fails in <strong>Mobitz II, infranodal complete block and ventricular escape</strong>. Next step: <strong>pacing</strong>.</p>" +
        "<p><strong>Sequence:</strong> atropine → transcutaneous/transvenous pacing → permanent pacemaker.</p>",
        ["atropine-indication", "atropine-dose", "atropine-limits"],
        [q("Atropine dosing in symptomatic bradycardia?", "1 mg IV every 3–5 minutes, max 3 mg", ["0.5 mg IV every 10 minutes, max 1 mg", "6 mg IV push", "1 mg IV every 3–5 minutes, no maximum"], "1 mg q3–5 min to 3 mg."),
          q("Atropine works on which structures?", "SA and AV nodes", ["Purkinje fibers", "Ventricular myocardium", "Accessory pathways"], "That is why infranodal blocks resist it."),
          q("In which block does atropine often fail?", "Mobitz II", ["Mobitz I", "First-degree AV block", "Sinus bradycardia"], "Infranodal block."),
          q("What comes after atropine fails in unstable bradycardia?", "Transcutaneous or transvenous pacing", ["Adenosine", "Amiodarone", "Defibrillation"], "Pacing.")],
        [q("A patient in sinus bradycardia at 36 with BP 80/50 has had atropine 1 mg three times. Next step?", "Transcutaneous pacing; the 3 mg maximum has been reached", ["A fourth 1 mg dose", "Adenosine 6 mg", "Magnesium 2 g"], "3 mg total is the maximum."),
          q("Which unstable bradycardia is atropine most likely to fix?", "Sinus bradycardia from high vagal tone", ["Mobitz II with wide QRS", "Complete heart block with a ventricular escape", "Ventricular escape after sinus arrest"], "Atropine works at the SA and AV nodes.")])
    ]),

    /* ---------- 20b ---------- */
    S("20b-adenosine", "20b. Adenosine", "Objective 20. Slides 96, 113–114.", [
      C("Adenosine: when, how much, and when not",
        "<p><strong>Indication:</strong> stable <strong>regular narrow-complex SVT</strong> (AVNRT, orthodromic AVRT) after <strong>vagal maneuvers</strong> fail.</p>" +
        "<p><strong>Dose:</strong> <strong>6 mg IV</strong> (rapid push). Rapid onset, <strong>short half-life</strong>, works in <strong>&gt; 80%</strong> of AVNRT.</p>" +
        note("If 6 mg fails after 1–2 minutes, give 12 mg rapid IV push (may repeat once). Confirmed in the Arrhythmia Pharmacology deck, slide 11.") +
        hy("<strong>Avoid in pre-excited rhythms</strong> (antidromic AVRT, pre-excited AF): it is an AV nodal blocker."),
        ["adenosine-indication", "adenosine-dose", "adenosine-avoid"],
        [q("Adenosine first dose for stable AVNRT?", "6 mg IV rapid push", ["1 mg IV", "12 mg IV slow push", "300 mg IV"], "6 mg IV."),
          q("Where does adenosine fit in stable narrow-complex SVT?", "After vagal maneuvers fail", ["Before vagal maneuvers", "Only after cardioversion", "Only in pulseless patients"], "Vagal first, adenosine second."),
          q("In which rhythm must adenosine be avoided?", "Antidromic AVRT or pre-excited AF", ["Typical AVNRT", "Orthodromic AVRT", "Sinus tachycardia workup"], "Nodal blockers are avoided in pre-excitation."),
          q("Which property of adenosine makes it safe to try in SVT?", "Very short half-life", ["Long half-life", "Oral route", "Strong sodium-channel block"], "Rapid onset, short half-life.")],
        [q("A stable 26-year-old in a regular narrow tachycardia at 180 did not convert with a modified Valsalva. Next step?", "Adenosine 6 mg IV rapid push", ["Amiodarone 300 mg", "Atropine 1 mg", "Defibrillation"], "Adenosine is second-line after vagal maneuvers."),
          q("A patient with WPW is in an irregular, wide, very fast tachycardia with changing delta-wave complexes. A nurse draws up adenosine. Best response?", "Do not give it; adenosine is an AV nodal blocker and is avoided in pre-excited AF", ["Give 6 mg as planned", "Give 12 mg instead", "Give adenosine with diltiazem"], "Avoid nodal blockers in pre-excitation.")])
    ]),

    /* ---------- 20c ---------- */
    S("20c-amiodarone", "20c. Amiodarone", "Objective 20. Slides 135, 137, 146; Chronic Arrhythmia Management slide 49.", [
      C("Amiodarone: the three uses",
        tbl(["Use", "Dose"], [
          ["<strong>Cardiac arrest</strong> (VF/pVT after the 3rd shock)", "<strong>300 mg IV/IO</strong>"],
          ["<strong>Stable VT</strong> with a pulse", "<strong>150 mg IV over 10 min</strong>, may repeat; then <strong>1 mg/min × 6 h</strong>"],
          ["<strong>AF with RVR</strong>", "IV drip; may <strong>cardiovert</strong> the patient"],
          ["Chronic VT", "If beta-blockers are not enough"]]) +
        note("The second arrest dose is 150 mg IV. Confirmed in the Arrhythmia Pharmacology deck, slide 46.") +
        hy("Amiodarone is an AV nodal blocker too: <strong>avoid in pre-excited rhythms</strong>."),
        ["amio-arrest", "amio-stable-vt", "amio-af", "amio-avoid"],
        [q("Amiodarone dose in VF/pulseless VT cardiac arrest?", "300 mg IV/IO", ["150 mg over 10 minutes", "1 mg every 3–5 minutes", "6 mg rapid push"], "300 mg after the third shock."),
          q("Which amiodarone regimen is used for VT that still has a pulse and is stable?", "150 mg IV over 10 minutes, then 1 mg/min for 6 hours", ["300 mg IV push", "1 mg IV", "20–50 mg/min"], "Stable VT dosing."),
          q("At what point in the VF algorithm is amiodarone given?", "After the third shock", ["Before the first shock", "After the first shock", "Only after ROSC"], "Shock, CPR, shock, epi, shock, amiodarone."),
          q("Why use caution with amiodarone for AF rate control?", "It can convert the patient to sinus rhythm", ["It causes hypertension", "It has no effect on rate", "It is a pure vasodilator"], "Amiodarone promotes cardioversion.")],
        [q("A patient in refractory VF has received three shocks and one dose of epinephrine. Which drug now?", "Amiodarone 300 mg IV", ["Amiodarone 150 mg over 10 minutes", "Atropine 1 mg", "Adenosine 12 mg"], "Arrest dose is 300 mg."),
          q("A stable patient in monomorphic VT at 150 gets amiodarone 150 mg IV over 10 minutes and converts. What follows?", "Amiodarone infusion at 1 mg/min for 6 hours", ["No further amiodarone", "300 mg IV push", "Oral amiodarone 2 g once"], "Follow with 1 mg/min maintenance.")])
    ]),

    /* ---------- 20d ---------- */
    S("20d-epinephrine", "20d. Epinephrine", "Objective 20. Slides 146, 148.", [
      C("Epinephrine in cardiac arrest",
        "<p><strong>Dose:</strong> <strong>1 mg IV/IO every 3–5 minutes</strong>.</p>" +
        tbl(["Rhythm", "When epinephrine starts"], [
          ["<strong>VF / pulseless VT</strong>", "After the <strong>2nd shock</strong> (shock → CPR → shock → <strong>epi</strong>)"],
          ["<strong>PEA / asystole</strong>", "<strong>As soon as possible</strong> with CPR (no shocks)"]]),
        ["epi-dose", "epi-timing"],
        [q("Epinephrine dose in cardiac arrest?", "1 mg IV every 3–5 minutes", ["0.1 mg once", "10 mg every 10 minutes", "300 mg once"], "1 mg q3–5 min."),
          q("In VF, epinephrine is first given:", "After the second shock", ["Before the first shock", "After the third shock", "Only after amiodarone fails"], "Shock, CPR, shock, epinephrine."),
          q("In asystole, epinephrine is given:", "As soon as possible with CPR, every 3–5 minutes", ["Only after three shocks", "Never", "Only after atropine"], "Non-shockable rhythms get epi early.")],
        [q("A PEA arrest started 4 minutes ago; epinephrine was given at minute 1. CPR continues. When is the next dose due?", "Now or within the next minute (every 3–5 minutes)", ["In 15 minutes", "Only after a shock", "Never; only one dose is allowed"], "Repeat every 3–5 min.")])
    ]),

    /* ---------- 20e ---------- */
    S("20e-magnesium", "20e. Magnesium", "Objective 20. Slides 127, 136.", [
      C("Magnesium for torsades",
        "<p><strong>Indication:</strong> <strong>torsades de pointes</strong> (long-QT polymorphic VT).</p>" +
        "<p><strong>Dose:</strong> <strong>1–2 g IV</strong>.</p>" +
        "<p>Severe <strong>hypomagnesemia</strong> is itself a cause of torsades; low Mg also drives frequent PVCs and VF. <strong>Do not withhold defibrillation</strong> while giving it.</p>",
        ["mag-indication", "mag-dose"],
        [q("Magnesium dose for torsades?", "1–2 g IV", ["10 g IV", "100 mg IV", "1 mg IV"], "1–2 g IV."),
          q("Magnesium is the drug for which rhythm?", "Torsades de pointes", ["AVNRT", "Sinus bradycardia", "Atrial flutter"], "Long-QT polymorphic VT."),
          q("Which electrolyte deficiency causes torsades?", "Hypomagnesemia", ["Hypermagnesemia", "Hypercalcemia", "Hypernatremia"], "Severe hypomagnesemia and hypokalemia.")],
        [q("A patient with alcohol use disorder, Mg 0.9 and a QTc of 560 has recurrent runs of twisting polymorphic VT but keeps a pulse. Which drug?", "Magnesium 1–2 g IV", ["Amiodarone 300 mg", "Adenosine 6 mg", "Procainamide"], "Torsades = magnesium; amiodarone and procainamide prolong QT.")])
    ]),

    /* ---------- 20f ---------- */
    S("20f-metoprolol-diltiazem", "20f. Metoprolol and Cardizem (diltiazem)", "Objective 20. Slides 19, 96, 113, 122, 137; Chronic Arrhythmia Management slide 49.", [
      C("Metoprolol",
        "<p>A <strong>beta-blocker</strong> (AV nodal blocker).</p>" +
        tbl(["Use", "Dose / note"], [
          ["Persistent symptomatic <strong>PACs</strong>", "<strong>25 mg BID</strong> (oral)"],
          ["<strong>AVNRT / orthodromic AVRT</strong> after adenosine", "IV beta-blocker (metoprolol, esmolol)"],
          ["<strong>AF with RVR</strong>", "IV boluses; <strong>choice with ischemia, infarction or CAD</strong>"],
          ["Symptomatic PVCs", "First line"],
          ["Chronic VT with structural disease", "Primary drug"]]) +
        note("IV dosing is 5 mg every 5 minutes, up to 3 doses (15 mg). Confirmed in the Arrhythmia Pharmacology deck, slide 41.") +
        hy("Avoid in pre-excited rhythms (WPW with AF or antidromic AVRT)."),
        ["metoprolol-uses", "metoprolol-dose"],
        [q("Metoprolol dose for persistent symptomatic PACs?", "25 mg BID", ["100 mg IV", "5 mg once a week", "1 mg/min"], "Metoprolol 25 mg BID."),
          q("In AF with RVR, metoprolol is preferred over diltiazem when the patient has:", "Cardiac ischemia, infarction or CAD", ["Asthma", "WPW", "Soft blood pressure"], "Metoprolol for ischemia/CAD."),
          q("Metoprolol is first-line for which ventricular ectopy?", "Symptomatic PVCs", ["VF", "Asystole", "Torsades"], "Beta-blockers first for symptomatic PVCs.")],
        [q("A stable patient with a recent NSTEMI develops AF with RVR at 140. Which rate-control drug fits best?", "IV metoprolol", ["IV diltiazem", "Digoxin", "Adenosine"], "Beta-blocker with ischemia or CAD.")]),
      C("Cardizem (diltiazem)",
        "<p>A <strong>non-dihydropyridine calcium channel blocker</strong> (AV nodal blocker).</p>" +
        tbl(["Use", "Dose / note"], [
          ["<strong>AF with RVR</strong>", "<strong>10–20 mg IV bolus</strong>, then titrated drip to HR &lt; 100; <strong>drug of choice for most</strong>; skip the bolus if BP is soft"],
          ["AVNRT / orthodromic AVRT after adenosine", "IV CCB (diltiazem or verapamil)"],
          ["Symptomatic PVCs", "Alternative to beta-blockers"]]) +
        hy("<strong>Avoid in pre-excitation</strong>: verapamil, diltiazem, BB, amiodarone and adenosine all push impulses down the accessory pathway."),
        ["diltiazem-uses", "diltiazem-dose", "nodal-blocker-avoid"],
        [q("Diltiazem dose for AF with RVR?", "10–20 mg IV bolus, then a titrated drip", ["1 mg IV every 3–5 minutes", "300 mg IV push", "6 mg rapid IV push"], "Cardizem 10–20 mg IV bolus then drip."),
          q("What heart-rate target is the diltiazem drip titrated to?", "Less than 100 bpm", ["Less than 60 bpm", "Less than 140 bpm", "Exactly 80 bpm"], "Titrated drip for HR < 100."),
          q("When can the diltiazem bolus be skipped?", "When the blood pressure is soft", ["When the patient has CAD", "When the rate is over 150", "Never"], "Drip without bolus if BP is soft."),
          q("Diltiazem belongs to which class?", "Non-dihydropyridine calcium channel blocker", ["Dihydropyridine CCB", "Beta-blocker", "Class IC antiarrhythmic"], "Non-DHP CCB.")],
        [q("A stable patient in new AF with RVR at 150 has BP 96/62. You want diltiazem. How should it be given?", "Start the drip without the bolus because the BP is soft", ["Give a 20 mg bolus twice", "Give it orally only", "Do not use any rate control"], "The deck says it can be given without the bolus if BP is soft."),
          q("Which patient should NOT receive diltiazem?", "A WPW patient in pre-excited AF", ["A stable patient in AF with RVR and no WPW", "A stable AVNRT patient after adenosine fails", "A patient with symptomatic PVCs who cannot take beta-blockers"], "Avoid nodal blockers in pre-excitation.")])
    ]),

    /* ---------- 21 ---------- */
    S("21-cardioversion-vs-defibrillation", "21. Synchronized cardioversion vs defibrillation", "Objective 21. Slides 113, 133–136, 146; Chronic Arrhythmia Management slides 46, 58.", [
      C("Synchronized cardioversion vs defibrillation",
        tbl(["", "<strong>Synchronized cardioversion</strong>", "<strong>Defibrillation</strong>"], [
          ["Shock timing", "<strong>Timed to the QRS (R wave)</strong>", "<strong>Unsynchronized</strong>, delivered right away"],
          ["Patient", "<strong>Has a pulse</strong> but is unstable (or elective)", "<strong>No pulse</strong>"],
          ["Rhythms", "<strong>Unstable VT with a pulse</strong>, unstable AF/flutter, unstable AVNRT/AVRT, elective AF cardioversion", "<strong>VF, pulseless VT</strong>, <strong>sustained polymorphic VT / torsades</strong>"],
          ["Sedation", "<strong>Sedate when feasible</strong>", "No time; patient is unconscious"]]) +
        note("Why the shock is timed to the R wave (to avoid hitting the T wave and setting off VF) is standard teaching, not stated on the slides.") +
        hy("<strong>Pulse + unstable → synchronize. No pulse (or polymorphic VT) → defibrillate.</strong> PEA and asystole → no shock at all."),
        ["sync-vs-defib-table", "sync-indications", "defib-indications"],
        [q("Synchronized cardioversion is used for:", "Unstable tachyarrhythmias with a pulse", ["VF", "Asystole", "PEA"], "Pulse + unstable."),
          q("Defibrillation is used for:", "VF and pulseless VT", ["Unstable AF with a pulse", "Stable VT", "Sinus tachycardia"], "No pulse = defibrillate."),
          q("Which shock type does sustained polymorphic VT get, even with a pulse?", "Unsynchronized (defibrillation)", ["Synchronized at 50 J", "Not shocked", "Synchronized after sedation only"], "Immediate unsynchronized shock for sustained polymorphic VT."),
          q("Which rhythms are never shocked?", "PEA and asystole", ["VF and pulseless VT", "Unstable AF and flutter", "Torsades"], "They do not respond to defibrillation."),
          q("In synchronized cardioversion, the shock is timed to the:", "QRS (R wave)", ["T wave", "P wave", "U wave"], "Synchronized to the R wave.")],
        [q("A patient in AF at 170 has a pulse, BP 70/40, and is confused. What type of shock?", "Synchronized cardioversion", ["Defibrillation", "No shock; give epinephrine", "Transcutaneous pacing"], "Pulse + unstable = synchronized."),
          q("A patient in sustained polymorphic VT is pulseless. The defibrillator is set to sync mode and will not fire. What should you do?", "Turn sync off and defibrillate", ["Keep trying in sync mode", "Give adenosine", "Wait for a narrow QRS"], "Polymorphic VT and pulseless rhythms need unsynchronized shocks."),
          q("A patient with a pulse in stable AF is scheduled for elective cardioversion. What precedes the shock?", "Conscious sedation with monitoring", ["CPR for 2 minutes", "Epinephrine 1 mg", "Nothing; no sedation is used"], "Cardioversion uses sedation; npo, normal K⁺ and O2 sat.")])
    ]),

    /* ---------- 22 ---------- */
    S("22-defibrillation-joules", "22. Joules for defibrillation", "Objective 22. Slides 133, 136, 146 (energy is not stated in the deck).", [
      C("Defibrillation energy",
        tbl(["Defibrillator", "Energy"], [
          ["<strong>Biphasic</strong> (most modern devices)", "<strong>120–200 J</strong> per manufacturer; if unknown, use the <strong>maximum</strong>"],
          ["<strong>Monophasic</strong>", "<strong>360 J</strong>"],
          ["Later shocks", "Same or higher energy"]]) +
        note("The deck says to defibrillate VF, pulseless VT and sustained polymorphic VT but does not list joules. These are AHA ACLS values. The Arrhythmia Pharmacology deck does not list joules either."),
        ["defib-biphasic", "defib-monophasic"],
        [q("Energy for a biphasic defibrillator in VF (ACLS)?", "120–200 J per manufacturer, or the maximum if unknown", ["50 J", "10 J", "500 J"], "Biphasic 120–200 J."),
          q("Energy for a monophasic defibrillator in VF (ACLS)?", "360 J", ["100 J", "200 J", "50 J"], "Monophasic 360 J."),
          q("For later shocks in VF, energy should be:", "The same or higher", ["Lower", "Zero", "Half the first dose"], "Equal or escalating energy.")],
        [q("Your code cart has a biphasic defibrillator and nobody knows its recommended energy. A patient is in VF. What setting?", "The device maximum", ["50 J", "100 J synchronized", "No shock until the manual is found"], "If unknown, use the maximum available."),
          q("An older monophasic defibrillator is the only device available for a pulseless VT patient. Energy?", "360 J", ["100 J", "150 J", "200 J synchronized"], "Monophasic 360 J.")])
    ]),

    /* ---------- 23 ---------- */
    S("23-cardioversion-joules", "23. Joules for cardioversion of unstable VT and AF with RVR", "Objective 23. Slide 134; Chronic Arrhythmia Management slides 46, 58.", [
      C("Cardioversion energy",
        tbl(["Rhythm", "First synchronized shock", "If it fails"], [
          ["<strong>Unstable VT with a pulse</strong>", "<strong>100 J</strong> (sedate when feasible)", "Increase per device settings; add antiarrhythmics or consult"],
          ["<strong>Unstable AF with RVR</strong>", "<strong>150–200 J</strong>", "Load with medications, then <strong>repeat cardioversion</strong>"],
          ["Elective AF cardioversion", "<strong>120–200 J biphasic</strong> (preferred)", "Under conscious sedation"]]) +
        mn("<strong>VT = 100</strong> (one hundred for one ventricle). <strong>AF = 150–200</strong>."),
        ["cv-vt-joules", "cv-af-joules", "cv-escalation"],
        [q("First synchronized energy for unstable VT with a pulse?", "100 J", ["360 J", "50 J", "200 J"], "100 J."),
          q("Synchronized energy for unstable AF with RVR?", "150–200 J", ["50 J", "100 J", "360 J"], "150–200 J."),
          q("What energy range does the deck give for elective biphasic AF cardioversion?", "120–200 J", ["10–50 J", "300–360 J", "50–100 J"], "120–200 J biphasic."),
          q("If the first synchronized shock for unstable VT fails, what changes?", "Increase the energy per device settings", ["Switch to 50 J", "Stop shocking", "Change to unsynchronized at the same energy"], "Escalate energy.")],
        [q("An unstable patient in AF at 175 is cardioverted at 150 J without success and is still hypotensive. Next step?", "Load with an antiarrhythmic and repeat cardioversion", ["Defibrillate at 360 J unsynchronized", "Stop and give oral metoprolol", "Give adenosine"], "Load meds, then repeat cardioversion."),
          q("A sedated patient in unstable monomorphic VT with a pulse is about to be cardioverted. What setting?", "Synchronized, 100 J", ["Unsynchronized, 360 J", "Synchronized, 10 J", "Unsynchronized, 100 J"], "Synchronized 100 J for unstable VT with a pulse.")])
    ])
  ];
})();
