/* Cardio Part 2, Syncope (Raaf, Syncope 2026 deck, 98 slides). Official "Syncope Objectives" in the supplied order, one section each.
   Objective 10 has no named subject in the objectives file; it follows the Brugada objective and the deck's Brugada slides, so it is built as Brugada syndrome.
   Read from slide pictures: slide 12 (ESC transient-LOC tree) and slide 86 (Tintinalli syncope algorithm and high-risk criteria).
   Blanks the deck leaves for class (labeled "filled in from standard teaching" on the cards):
   slide 22 (two more carotid-sinus triggers: tight collar, looking up), slide 24 (positive carotid sinus massage),
   slide 89 (the 10:20 rule wording). Case patients Mick and Jessie are the deck's own teaching cases. */
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

  window.SYNCOPE_OBJECTIVES = [

    /* ---------- 1 ---------- */
    S("01-syncope-vs-presyncope", "1. Define syncope and tell it from presyncope", "Objective 1. Slides 6–7, 12–13.", [
      C("Definition of syncope",
        "<p><strong>Syncope</strong> is a <strong>transient, self-limited loss of consciousness</strong> and <strong>inability to maintain postural tone</strong> due to <strong>acute global impairment of cerebral blood flow</strong>.</p>" +
        tbl(["Feature", "Syncope"], [["Onset", "<strong>Sudden</strong>"], ["Duration", "<strong>Brief</strong> (under about 1 minute)"], ["Recovery", "<strong>Spontaneous and complete</strong>, no medical intervention"]]) +
        mn("<strong>Sudden, Short, Self-resolving</strong>: the three S's of syncope."),
        ["syncope-definition", "syncope-features"],
        [q("Syncope is caused by:", "Acute global impairment of cerebral blood flow", ["Focal cerebral ischemia", "Abnormal cortical electrical discharge", "Low blood glucose"], "Global cerebral hypoperfusion."),
          q("How does recovery from syncope happen?", "Spontaneously and completely", ["Only after medical intervention", "Slowly over hours with confusion", "Only after glucose is given"], "Spontaneous, complete recovery."),
          q("About how long does a syncopal loss of consciousness last?", "Less than about 1 minute", ["5 to 10 minutes", "Over 30 minutes", "Several hours"], "Transient = brief, under 1 minute."),
          q("Besides losing consciousness, what else is lost in syncope?", "Postural tone", ["Memory of the past week", "Vision in one eye", "Speech for a day"], "Loss of consciousness and postural tone.")],
        [q("A 20-year-old faints in line for a blood draw, is out for 15 seconds, wakes fully alert and needs no treatment. Does this meet the definition of syncope?", "Yes: sudden, brief, self-limited LOC with spontaneous full recovery", ["No, because it lasted under a minute", "No, syncope requires a seizure", "No, because no intervention was needed"], "This is the textbook definition.")]),
      C("Presyncope and what is not syncope",
        "<p><strong>Presyncope</strong>: the <strong>prodromal symptoms</strong> before syncope, such as <strong>lightheadedness</strong>, which may progress to syncope or resolve.</p>" +
        hy("Presyncope is <strong>not less serious</strong>. It carries the <strong>same prognosis</strong> and is <strong>worked up the same way</strong> as syncope.") +
        "<p><strong>Transient LOC that is not syncope</strong> (ACC/AHA): <strong>seizures</strong>, drug or alcohol intoxication, metabolic disturbances, <strong>hypoglycemia</strong>, concussion from head trauma, coma, AMS. Other TLOC groups: psychogenic (pseudosyncope, PNES) and rare causes (subclavian steal, vertebrobasilar TIA, SAH, cyanotic breath-holding).</p>" +
        "<p>There is <strong>no \"neurologic syncope\"</strong> category; neurologic causes are a differential of TLOC.</p>",
        ["presyncope-definition", "presyncope-prognosis", "not-syncope"],
        [q("What is presyncope?", "Prodromal symptoms like lightheadedness that may or may not progress to syncope", ["Syncope lasting over 5 minutes", "A seizure without convulsions", "Syncope in children only"], "Prodrome without full LOC."),
          q("How should presyncope be evaluated compared with syncope?", "The same way, because it carries the same prognosis", ["It needs no evaluation", "Only with a head CT", "Only if it happens three times"], "Same prognosis, same workup."),
          q("Which is NOT classified as syncope by ACC/AHA?", "Hypoglycemia", ["Vasovagal faint", "Orthostatic faint", "Faint from complete heart block"], "Hypoglycemia, seizures, intoxication, concussion and metabolic causes are not syncope."),
          q("Is there an accepted \"neurologic syncope\" category?", "No; neurologic causes are a differential for transient LOC", ["Yes, it is the most common type", "Yes, it includes all strokes", "Yes, it replaced cardiac syncope"], "No neurologic syncope category.")],
        [q("A 70-year-old reports two episodes of sudden lightheadedness and graying of vision while walking, without passing out. His daughter thinks it is not worth a workup. Best response?", "Evaluate it like syncope; presyncope carries the same prognosis", ["Reassure; presyncope is benign", "Only evaluate if he fully faints", "Order an EEG only"], "Presyncope is investigated like syncope."),
          q("A diabetic patient on insulin is found unresponsive with a glucose of 32 and wakes after IV dextrose. How is this classified?", "Not syncope: a metabolic cause of LOC that needed treatment", ["Reflex syncope", "Orthostatic syncope", "Cardiac syncope"], "Hypoglycemia is not syncope, and recovery was not spontaneous.")])
    ]),

    /* ---------- 2 ---------- */
    S("02-pathophysiology-etiologies", "2. Pathophysiology and most common causes", "Objective 2. Slides 8–11, 16.", [
      C("What happens when we stand, and why we faint",
        "<p>On standing, blood pools in the legs. <strong>Baroreceptors in the carotid sinuses and aortic arch</strong> sense the drop and trigger <strong>peripheral vasoconstriction, more chronotropy (HR) and more inotropy (SV)</strong>.</p>" +
        "<p><strong>Syncope:</strong> an inciting event <strong>drops cardiac output</strong> → less oxygen to the brain → <strong>global</strong> reduction or complete disruption of cerebral blood flow.</p>",
        ["baroreceptor-response", "syncope-mechanism"],
        [q("Where are the baroreceptors that respond to standing?", "Carotid sinuses and aortic arch", ["Renal arteries and liver", "Pulmonary veins", "Coronary sinus"], "Carotid sinuses and aortic arch."),
          q("Which three changes keep BP up when we stand?", "Peripheral vasoconstriction, higher heart rate and higher stroke volume", ["Vasodilation, lower HR, lower SV", "Bronchodilation, sweating, mydriasis", "Diuresis, bradycardia, venodilation"], "Vasoconstriction, + chronotropy, + inotropy."),
          q("The common final pathway of syncope is:", "A fall in cardiac output that reduces brain blood flow globally", ["A clot blocking one cerebral artery", "Low serum sodium", "An electrical storm in the cortex"], "Global cerebral hypoperfusion.")],
        [q("A patient with autonomic failure cannot vasoconstrict or raise his heart rate on standing. What happens when he stands quickly?", "Blood pools in the legs, cardiac output falls and he may faint", ["His BP rises sharply", "He develops a seizure from cortical irritation", "Nothing, because the brain autoregulates fully"], "Without compensation, standing drops output and cerebral flow.")]),
      C("Epidemiology and the three major causes",
        "<ul><li>Syncope is <strong>1–2% of ED visits</strong></li><li><strong>Elderly</strong>: highest incidence and morbidity</li><li>Cause stays <strong>idiopathic in 40%</strong></li></ul>" +
        tbl(["Category", "Notes"], [
          ["<strong>Reflex-mediated</strong>", "<strong>Most common</strong>: vasovagal, situational, carotid sinus syndrome. <strong>90% of cases in younger adults</strong>, 40% in older adults"],
          ["<strong>Orthostatic</strong>", "Drugs, volume depletion, autonomic failure"],
          ["<strong>Cardiac</strong>", "Structural, arrhythmia, cardiopulmonary obstruction"]]),
        ["syncope-epidemiology", "syncope-categories"],
        [q("What is the most common type of syncope?", "Reflex (neurally mediated) syncope", ["Cardiac syncope", "Orthostatic syncope", "Neurologic syncope"], "Reflex syncope is most common."),
          q("What share of syncope in younger adults is reflex syncope?", "90%", ["10%", "40%", "60%"], "90% in younger adults, 40% in older adults."),
          q("In what share of syncope cases does the cause remain unknown?", "40%", ["5%", "75%", "90%"], "Idiopathic in 40%."),
          q("Which group has the highest incidence of syncope and the most morbidity?", "The elderly", ["Teenagers", "Pregnant women", "Athletes"], "Elderly have highest incidence and morbidity.")],
        [q("A healthy 24-year-old has her first faint. Statistically, which category is most likely?", "Reflex syncope", ["Cardiac syncope from aortic stenosis", "Orthostatic syncope from autonomic failure", "Brugada syndrome"], "Reflex syncope is 90% of syncope in younger adults.")])
    ]),

    /* ---------- 3 ---------- */
    S("03-major-classifications", "3. Compare the major classes of syncope", "Objective 3. Slides 14–33, 95–96.", [
      C("Reflex syncope: how it works",
        "<ol class=\"concept-chain\"><li>Trigger (prolonged standing, fear, seeing blood)</li><li>Initial <strong>sympathetic</strong> surge</li><li>Reflex <strong>overcorrection</strong>: parasympathetic up, sympathetic down</li><li><strong>Vasodilation and/or bradycardia</strong> → systemic hypotension</li><li>Cerebral hypoperfusion → faint</li></ol>" +
        "<p>Includes <strong>vasovagal, situational, carotid sinus syndrome</strong>.</p>",
        ["reflex-mechanism"],
        [q("In reflex syncope, what follows the initial sympathetic surge?", "A reflex overcorrection with more parasympathetic and less sympathetic activity", ["A second, larger sympathetic surge", "A seizure", "Ventricular tachycardia"], "The autonomic system overcorrects."),
          q("Reflex syncope causes hypotension through:", "Vasodilation and/or bradycardia", ["Volume loss", "Outflow obstruction", "Accessory pathway conduction"], "Vasodilation ± bradycardia."),
          q("Which three syndromes are reflex syncope?", "Vasovagal, situational and carotid sinus syndrome", ["Vasovagal, Brugada and long QT", "Orthostatic, situational and WPW", "Aortic stenosis, HCM and PE"], "The three reflex types.")],
        [q("A man watching a gory movie feels hot and sweaty, then faints. His HR was 42 when EMS arrived and recovered quickly. What mechanism explains this?", "Reflex vagal overcorrection causing vasodilation and bradycardia", ["Outflow obstruction from HCM", "Volume depletion", "Accessory pathway tachycardia"], "Classic reflex (vasovagal) syncope.")]),
      C("Vasovagal syncope",
        "<p><strong>Triggers:</strong> unexpected or unpleasant sight, sound or smell; <strong>fear, severe pain, emotional distress</strong>; <strong>prolonged standing or kneeling</strong>.</p>" +
        "<p><strong>Hallmark prodrome:</strong> lightheadedness, <strong>nausea</strong>, tunnel vision, <strong>pallor, sweating, feeling warm</strong>.</p>" +
        "<p><strong>Prognosis:</strong> benign, but <strong>injuries occur in 30%</strong>, more with older age, recurrent syncope or falls, or <strong>no prodrome</strong>. Older patients may not have or remember a prodrome.</p>",
        ["vasovagal-triggers", "vasovagal-prodrome", "vasovagal-prognosis"],
        [q("Which is a hallmark prodromal symptom of vasovagal syncope?", "Nausea with pallor and sweating", ["Palpitations then sudden LOC", "Tearing chest pain", "Tongue biting"], "Lightheadedness, nausea, tunnel vision, pallor, sweating, warmth."),
          q("In what share of vasovagal episodes do injuries occur?", "30%", ["1%", "75%", "100%"], "Injuries in 30% of episodes."),
          q("Which raises the chance of injury in vasovagal syncope?", "Lacking a recognizable prodrome", ["Young age", "Having a long prodrome", "Fainting while seated"], "Older age, recurrence and no prodrome raise injury risk."),
          q("Which is a vasovagal trigger?", "Prolonged kneeling", ["Exertion", "Lying supine", "Turning the head"], "Prolonged standing or kneeling.")],
        [q("A 19-year-old altar server collapses after kneeling for 40 minutes in a warm church; she felt hot, nauseated and her vision narrowed first. Diagnosis?", "Vasovagal syncope", ["Carotid sinus syndrome", "Orthostatic hypotension from autonomic failure", "Cardiac syncope"], "Prolonged kneeling + warm setting + classic prodrome.")]),
      C("Situational syncope and carotid sinus syndrome",
        "<p><strong>Situational</strong>: reflex syncope triggered by a bodily function that stimulates the vagus or raises intrathoracic pressure: <strong>urination, defecation, coughing, swallowing, eating</strong>.</p>" +
        "<p><strong>Carotid sinus syndrome</strong>: stimulating the carotid sinus causes <strong>bradycardia, asystole &gt; 3 s, or hypotension</strong>.</p>" +
        "<ul><li><strong>Triggers:</strong> <strong>shaving, turning the neck</strong>, tight collars, looking up</li><li><strong>Risk factors:</strong> <strong>elderly men &gt; 65</strong> (almost exclusively), atherosclerosis, <strong>head and neck cancers</strong></li><li><strong>Symptoms:</strong> presyncope, syncope, <strong>unexplained falls</strong> in older patients</li><li><strong>Test:</strong> <strong>carotid sinus massage supine and upright</strong> with simultaneous HR and BP monitoring</li></ul>" +
        hy("Consider carotid sinus syndrome in patients <strong>&gt; 50 with recurrent syncope and a negative cardiac workup</strong>.") +
        note("Slide 22 leaves two triggers blank and slide 24 leaves the positive test blank. Filled in from standard teaching: tight collar and looking up; a positive massage reproduces symptoms with asystole over 3 seconds and/or a large drop in systolic BP (commonly 50 mmHg or more)."),
        ["situational-syncope", "carotid-sinus-mechanism", "carotid-sinus-risk", "carotid-sinus-test"],
        [q("Which is a situational syncope trigger?", "Micturition", ["Watching a scary movie", "Standing up quickly", "Exercise"], "Urination, defecation, cough, swallowing, eating."),
          q("Who gets carotid sinus syndrome almost exclusively?", "Men over 65", ["Young women", "Children", "Pregnant women"], "Elderly men > 65."),
          q("How is carotid sinus syndrome tested?", "Carotid sinus massage supine and upright with HR and BP monitoring", ["Tilt table only", "Echocardiogram", "Exercise stress test"], "Massage in both positions with monitoring."),
          q("Which cancer type is a risk factor for carotid sinus syndrome?", "Head and neck cancer", ["Colon cancer", "Prostate cancer", "Melanoma of the leg"], "Head and neck cancers."),
          q("Carotid sinus stimulation can cause asystole longer than:", "3 seconds", ["1 second", "10 seconds", "30 seconds"], "Asystole > 3 s.")],
        [q("A 74-year-old man faints twice while shaving. His echo, EKG and Holter are normal. Most likely diagnosis and test?", "Carotid sinus syndrome; carotid sinus massage with HR and BP monitoring", ["Vasovagal syncope; tilt table only", "Aortic stenosis; repeat echo", "Seizure; EEG"], "Elderly man, shaving trigger, negative cardiac workup."),
          q("A 68-year-old man faints at 3 a.m. right after urinating. He is otherwise well and the exam is normal. What type of syncope is this?", "Situational (micturition) syncope", ["Carotid sinus syndrome", "Cardiac syncope from WPW", "Orthostatic syncope from autonomic failure"], "Urination is a situational trigger.")]),
      C("Orthostatic syncope",
        "<p><strong>Mechanism:</strong> upright posture → blood shifts to the legs → cardiac output falls; <strong>inadequate compensation</strong> (autonomic failure, volume depletion, drug side effect) → cerebral hypoperfusion → syncope.</p>" +
        "<p><strong>Three causes:</strong> <strong>drug-induced, volume depletion, autonomic failure</strong>.</p>" +
        "<p><strong>Symptoms:</strong> dizziness, generalized weakness, cognitive slowing.</p>" +
        "<p><strong>Prevalence rises with age:</strong> &lt; 5% under 50, <strong>&gt; 20% over 70</strong>.</p>" +
        "<p><strong>History clues:</strong> syncope <strong>after standing</strong>; low volume (poor intake, vomiting, diarrhea, hemorrhage); <strong>meds</strong> (diuretics, alpha and beta blockers, vasodilators/nitrates, TCAs, antipsychotics); autonomic neuropathy, <strong>Parkinson's</strong>.</p>",
        ["orthostatic-mechanism", "orthostatic-causes", "orthostatic-history"],
        [q("What are the three causes of orthostatic syncope?", "Drugs, volume depletion and autonomic failure", ["Aortic stenosis, HCM and PE", "Coughing, swallowing and defecation", "Fear, pain and blood"], "Drug-induced, volume depletion, autonomic failure."),
          q("Orthostatic hypotension affects what share of people over 70?", "More than 20%", ["Less than 1%", "About 5%", "About 90%"], "> 20% over 70; < 5% under 50."),
          q("Which neurologic disease causes orthostatic syncope through autonomic dysfunction?", "Parkinson disease", ["Migraine", "Bell palsy", "Carpal tunnel syndrome"], "Parkinson's and autonomic neuropathy."),
          q("Which medication class is a classic orthostatic culprit?", "Diuretics", ["Statins", "PPIs", "Inhaled steroids"], "Diuretics, alpha/beta blockers, nitrates, TCAs, antipsychotics.")],
        [q("An 80-year-old started tamsulosin and furosemide last month and now gets dizzy and once fainted right after getting out of bed. Most likely type of syncope?", "Orthostatic syncope from medications", ["Carotid sinus syndrome", "Cardiac syncope", "Situational syncope"], "Alpha blocker + diuretic + syncope on standing.")]),
      C("Cardiac syncope and the classic clue lists",
        "<p>Mostly from <strong>structural heart disease or dysrhythmia</strong>; a <strong>harbinger of sudden death</strong> (1-year mortality <strong>&gt; 30%</strong>). Usually <strong>sudden, without prodrome</strong>; may follow <strong>palpitations or exertion</strong>.</p>" +
        tbl(["Noncardiac syncope", "Cardiac syncope"], [
          ["<strong>Younger</strong> age", "<strong>Older (&gt; 60)</strong>, <strong>male</strong>"],
          ["Only when <strong>standing</strong> or on changing position", "<strong>During exertion</strong> or <strong>supine</strong>"],
          ["<strong>Prodrome</strong>: nausea, vomiting, warmth", "<strong>Brief prodrome (palpitations)</strong> or none"],
          ["Specific triggers: dehydration, pain, medical setting", "Known ischemic or structural disease, arrhythmia, low EF"],
          ["Situational: cough, laugh, micturition, defecation", "Only <strong>1 or 2 episodes</strong>; abnormal cardiac exam"],
          ["Reflex clue: recurrent since <strong>before age 40</strong>, crowded or hot place, head rotation", "<strong>Family history of sudden cardiac death</strong>"]]),
        ["cardiac-syncope-features", "cardiac-vs-noncardiac-clues"],
        [q("What is the 1-year mortality with documented cardiac syncope?", "More than 30%", ["Under 1%", "About 5%", "About 90%"], "> 30% 1-year mortality."),
          q("Which history suggests cardiac rather than noncardiac syncope?", "Syncope while lying supine", ["Syncope only when standing", "A long prodrome with nausea and warmth", "Recurrent faints since age 15"], "Supine or exertional syncope suggests cardiac."),
          q("Which favors reflex syncope?", "A long history of recurrent syncope that began before age 40", ["Syncope during exercise", "Known reduced EF", "Family history of sudden death"], "Recurrent since youth = reflex."),
          q("Cardiac syncope typically has:", "Little or no prodrome", ["A long prodrome of nausea and warmth", "Postictal confusion", "Tongue biting"], "Sudden, usually without prodrome.")],
        [q("A 66-year-old man with prior MI and EF 30% faints while lying in bed watching TV, with only a brief flutter of palpitations first. Which category is most likely?", "Cardiac syncope", ["Vasovagal syncope", "Orthostatic syncope", "Situational syncope"], "Older male, structural disease, supine, palpitations only.")])
    ]),

    /* ---------- 4 ---------- */
    S("04-classes-workup-treatment-disposition", "4. Classes of syncope by workup, treatment and disposition", "Objective 4. Slides 19, 24, 37, 40, 82–86.", [
      C("Testing that confirms each class",
        tbl(["Class", "Key test", "What it shows"], [
          ["<strong>Reflex</strong>", "<strong>Tilt-table test</strong> (recurrent syncope, cardiac cause excluded); carotid sinus massage for CSS", "Vasovagal syncope and POTS"],
          ["<strong>Orthostatic</strong>", "<strong>Orthostatic vital signs</strong>", "SBP drop ≥ 20 or DBP drop ≥ 10 within 3 min of standing"],
          ["<strong>Cardiac: arrhythmia</strong>", "<strong>ECG monitoring</strong>: admission telemetry; outpatient Holter/event monitor if no significant cardiac disease is suspected", "Confirmed if symptoms recur during a monitored arrhythmia; excluded if symptoms occur in sinus rhythm"],
          ["<strong>Cardiac: structural</strong>", "<strong>Echo</strong> (history, exam or ECG suggesting structural disease)", "Confirms and quantifies AS, HCM"],
          ["<strong>Cardiac: exertional</strong>", "<strong>Stress testing</strong>", "Exercise-induced arrhythmia, post-exercise syncope"]]),
        ["tilt-table", "ecg-monitoring", "echo-stress"],
        [q("Which test identifies vasovagal syncope and POTS?", "Tilt-table testing", ["Echocardiogram", "Coronary angiography", "EEG"], "Tilt table, once cardiac causes are excluded."),
          q("When is an echo indicated after syncope?", "When history, exam or ECG suggests structural heart disease", ["For every vasovagal faint", "Only in children", "Never"], "Echo confirms and quantifies structural disease."),
          q("Which test is used for exercise-related syncope?", "Stress testing", ["Tilt table", "Carotid massage", "D-dimer"], "Stress testing for exertional syncope."),
          q("Monitoring excludes an arrhythmic cause when:", "Symptoms recur while the monitor shows sinus rhythm", ["The monitor shows no events for 1 hour", "The patient has no symptoms during monitoring", "Troponin is normal"], "Symptoms during sinus rhythm exclude arrhythmia.")],
        [q("A 30-year-old with recurrent faints has a normal EKG, echo and Holter. Which test is next?", "Tilt-table test", ["Cardiac catheterization", "Head CT", "Electrophysiology study first"], "Recurrent syncope with cardiac causes excluded: tilt table."),
          q("A 55-year-old faints during a run. Exam and resting EKG are normal. Which test best reproduces the trigger?", "Exercise stress test", ["Tilt table", "Carotid sinus massage", "Orthostatic vitals only"], "Exercise-related syncope: stress test.")]),
      C("Treatment and disposition by class",
        tbl(["Class", "Treatment", "Disposition"], [
          ["<strong>Vasovagal</strong>", "Avoid triggers, <strong>lie supine during prodrome</strong>, <strong>hydrate 2–2.5 L/day</strong>, may add <strong>salt</strong>", "<strong>Discharge</strong>"],
          ["<strong>Carotid sinus syndrome</strong>", "Avoid neck pressure triggers", "Usually discharge"],
          ["<strong>Orthostatic / medication-induced</strong>", "Treat volume loss, adjust or stop culprit meds", "<strong>Discharge</strong> (no increased morbidity or mortality)"],
          ["<strong>Cardiac</strong>", "Treat the cause: <strong>valve replacement for AS</strong>, pacemaker for block, ICD for Brugada, ablation for WPW", "<strong>Admit</strong>"],
          ["<strong>Unclear cause</strong>", "Risk-stratify", "Low risk: discharge with follow-up · High risk: admit for evaluation and monitoring"]]),
        ["vasovagal-treatment", "disposition-by-class"],
        [q("How much fluid per day does the deck recommend for vasovagal syncope?", "2–2.5 L", ["500 mL", "5 L", "No fluid change"], "Hydrate well (2–2.5 L), maybe salt."),
          q("What should a patient do during a vasovagal prodrome?", "Lie down (supine)", ["Stand up and walk", "Hold their breath", "Run in place"], "Supine during prodrome."),
          q("Which syncope classes can usually be discharged?", "Vasovagal, orthostatic and medication-induced", ["Aortic stenosis and Brugada", "Complete heart block", "Aortic dissection"], "No increased morbidity and mortality."),
          q("Where does a patient with an obvious cardiac cause of syncope go?", "Admission", ["Discharge home", "Outpatient follow-up in 6 months", "Urgent care"], "Admit for cardiac causes.")],
        [q("A 22-year-old faints at a blood drive after a clear prodrome. Exam, EKG and orthostatics are normal. Plan?", "Discharge with trigger avoidance, hydration, salt, and lying down at the first warning signs", ["Admit for telemetry", "Start a beta-blocker and admit", "Order an EP study"], "Vasovagal syncope can be discharged.")])
    ]),

    /* ---------- 5 ---------- */
    S("05-orthostatic-hypotension", "5. Orthostatic hypotension: definition and testing", "Objective 5. Slides 27–30.", [
      C("Orthostatic hypotension",
        "<p><strong>Definition:</strong> a <strong>sustained drop in systolic BP ≥ 20 mmHg or diastolic BP ≥ 10 mmHg within 3 minutes of standing</strong>.</p>" +
        "<p><strong>Testing:</strong> <strong>orthostatic vital signs</strong>: BP and HR lying (or sitting), then again after standing, through 3 minutes. Most often happens moving from <strong>lying or sitting to standing</strong>.</p>" +
        hy("Orthostatic hypotension is a <strong>measurable sign</strong>. Orthostatic syncope is a <strong>symptom</strong>.") +
        mn("<strong>20 / 10 / 3</strong>: systolic down 20, diastolic down 10, within 3 minutes."),
        ["oh-definition", "oh-testing", "oh-sign-vs-symptom"],
        [q("Orthostatic hypotension is a systolic drop of at least:", "20 mmHg within 3 minutes of standing", ["10 mmHg within 10 minutes", "40 mmHg within 1 minute", "5 mmHg within 3 minutes"], "SBP ≥ 20 or DBP ≥ 10 within 3 min."),
          q("Orthostatic hypotension is a diastolic drop of at least:", "10 mmHg", ["5 mmHg", "20 mmHg", "30 mmHg"], "DBP ≥ 10 mmHg."),
          q("Within what time after standing must the BP fall to count?", "3 minutes", ["30 seconds", "10 minutes", "1 hour"], "Within 3 minutes."),
          q("Orthostatic hypotension is best described as:", "A measurable sign", ["A symptom", "A diagnosis of exclusion", "A type of seizure"], "OH is a sign; orthostatic syncope is a symptom.")],
        [q("A patient's BP is 132/80 lying and 110/76 two minutes after standing. Does this meet the criteria for orthostatic hypotension?", "Yes: systolic fell 22 mmHg within 3 minutes", ["No: diastolic only fell 4 mmHg", "No: it must be measured at 10 minutes", "No: systolic must fall 40 mmHg"], "A systolic drop of ≥ 20 is enough."),
          q("A patient's BP is 124/84 seated and 116/72 one minute after standing. Interpretation?", "Positive: the diastolic fell 12 mmHg", ["Negative: systolic fell only 8 mmHg", "Negative: you must wait 10 minutes", "Cannot interpret without heart rate"], "A diastolic drop ≥ 10 meets the definition.")])
    ]),

    /* ---------- 6 ---------- */
    S("06-cardiac-syncope-etiologies", "6. The three causes of cardiac syncope", "Objective 6. Slides 31–34, 41–44, 53, 69.", [
      C("Structural, arrhythmia, cardiopulmonary obstruction",
        tbl(["Cause", "Conditions"], [
          ["<strong>Structural heart disease</strong>", "<strong>Aortic stenosis</strong> (most common in older patients), <strong>HCM</strong> (most common in younger patients)"],
          ["<strong>Arrhythmia: brady</strong>", "<strong>Sick sinus syndrome</strong>, <strong>Mobitz II and 3rd-degree AV block</strong>, <strong>pacemaker/ICD malfunction</strong>, drug-induced bradycardia"],
          ["<strong>Arrhythmia: tachy</strong>", "<strong>VT</strong> (monomorphic, torsades), <strong>WPW</strong>, <strong>Brugada</strong>"],
          ["<strong>Cardiopulmonary obstruction</strong>", "<strong>PE, MI, aortic dissection, cardiac tamponade</strong>"]]) +
        "<p><strong>Structural mechanism:</strong> the heart <strong>cannot raise output</strong> to match exercise-induced vasodilation → <strong>exertional syncope</strong>. <strong>Arrhythmic mechanism:</strong> HR too slow or too fast to keep output → sudden drop in cerebral perfusion with little warning.</p>",
        ["cardiac-three-causes", "structural-mechanism", "arrhythmia-mechanism"],
        [q("What are the three major causes of cardiac syncope?", "Structural heart disease, arrhythmia and cardiopulmonary obstruction", ["Reflex, orthostatic and situational", "Seizure, stroke and hypoglycemia", "Anemia, sepsis and dehydration"], "Structural, arrhythmia, obstruction."),
          q("Most common structural cause of syncope in older patients?", "Aortic stenosis", ["HCM", "Mitral valve prolapse", "Pericarditis"], "AS in older patients."),
          q("Most common structural cause of syncope in younger patients?", "Hypertrophic cardiomyopathy", ["Aortic stenosis", "Tamponade", "Aortic dissection"], "HCM in younger patients."),
          q("Which conditions make up cardiopulmonary obstruction syncope?", "PE, MI, aortic dissection and tamponade", ["WPW and Brugada", "AS and HCM", "SSS and AV block"], "The four obstruction causes."),
          q("Why does structural heart disease cause syncope with exertion?", "The heart cannot raise output to match exercise vasodilation", ["Exercise causes a seizure", "Exercise causes vagal overactivity", "Exercise lowers potassium"], "Fixed output + vasodilation = exertional syncope.")],
        [q("A 19-year-old basketball player faints during a sprint drill. Which category and most likely cause should you think of first?", "Structural cardiac syncope from HCM", ["Reflex syncope from fear", "Orthostatic syncope from autonomic failure", "Situational syncope from coughing"], "Exertional syncope in a young athlete = HCM until proven otherwise."),
          q("A patient with a pacemaker for complete heart block feels dizzy and faints; his device check shows a fractured lead. Which cardiac syncope group?", "Bradyarrhythmia from pacemaker malfunction", ["Structural heart disease", "Cardiopulmonary obstruction", "Reflex syncope"], "Pacemaker/ICD malfunction is a bradyarrhythmia cause.")]),
      C("Bradyarrhythmia causes in detail",
        "<p><strong>Sinus node dysfunction</strong> = disorder of SA pacemaker function. It becomes <strong>sick sinus syndrome</strong> when symptomatic (such as syncope). Syncope occurs in <strong>~50%</strong> of patients who get a pacemaker for SSS. Mostly <strong>age-related degeneration</strong> in older adults. EKG: sinus brady, <strong>pauses &gt; 3 s</strong> or sinus arrest, tachy-brady.</p>" +
        "<p><strong>Pacemaker/ICD malfunction:</strong> battery, leads or infection; lightheaded, palpitations, syncope, chest pain, SOB.</p>" +
        "<p><strong>Drug-induced bradycardia:</strong> beta-blockers, non-DHP CCBs (verapamil, diltiazem), clonidine; <strong>amiodarone, sotalol, flecainide</strong>; <strong>digoxin</strong>. <strong>Combinations raise risk and often unmask conduction disease.</strong></p>",
        ["sss-syncope", "device-malfunction", "drug-bradycardia"],
        [q("When does sinus node dysfunction become sick sinus syndrome?", "When the patient develops symptoms such as syncope", ["When the patient turns 65", "When the PR is over 200 ms", "When a pacemaker is placed"], "SSS = symptomatic SND."),
          q("Syncope occurs in about what share of patients who get a pacemaker for SSS?", "50%", ["5%", "90%", "20%"], "~50%."),
          q("Which drug combination is most likely to cause syncope from bradycardia?", "Metoprolol plus diltiazem", ["Atorvastatin plus aspirin", "Lisinopril plus amlodipine", "Metformin plus insulin"], "Combinations of nodal blockers raise risk and unmask conduction disease."),
          q("What sinus pause length is a sick sinus finding?", "More than 3 seconds", ["More than 0.5 seconds", "More than 1 second", "More than 30 seconds"], "Pauses > 3 s or sinus arrest.")],
        [q("An 80-year-old on metoprolol was started on verapamil and now has syncope with HR 38. What is the most likely explanation?", "Drug-induced bradycardia, possibly unmasking underlying conduction disease", ["Vasovagal syncope", "Carotid sinus syndrome", "Aortic dissection"], "Combinations of nodal blockers often unmask conduction disease.")])
    ]),

    /* ---------- 7 ---------- */
    S("07-aortic-stenosis-hcm", "7. Aortic stenosis and HCM as causes of syncope", "Objective 7. Slides 35–40.", [
      C("Aortic stenosis",
        "<p><strong>Mechanism:</strong> narrowed aortic valve → <strong>more resistance</strong> for the LV → cannot raise output with exertion.</p>" +
        "<p><strong>Features:</strong> most commonly <strong>elderly men</strong>; <strong>loud, harsh systolic (ejection) murmur</strong> at the <strong>RUSB</strong>.</p>" +
        "<p><strong>Severe AS triad:</strong> <strong>dyspnea on exertion</strong>, <strong>presyncope or syncope</strong>, <strong>angina on exertion</strong>.</p>" +
        "<p><strong>Diagnosis: echo.</strong> High mortality untreated; <strong>aortic valve replacement</strong> usually indicated.</p>" +
        mn("<strong>SAD</strong>: <strong>S</strong>yncope, <strong>A</strong>ngina, <strong>D</strong>yspnea on exertion = severe AS."),
        ["as-mechanism", "as-features", "as-diagnosis-treatment"],
        [q("Which three symptoms mark severe aortic stenosis?", "Exertional dyspnea, syncope or presyncope, and exertional angina", ["Fever, rash and joint pain", "Palpitations, tremor and weight loss", "Orthopnea, cough and hemoptysis only"], "SAD: syncope, angina, dyspnea."),
          q("How is aortic stenosis diagnosed?", "Echocardiogram", ["Chest x-ray", "Tilt table", "EEG"], "Echo."),
          q("What is the usual treatment for symptomatic severe AS?", "Aortic valve replacement", ["Beta-blocker alone", "Pacemaker", "Catheter ablation"], "AVR is usually indicated."),
          q("Which murmur fits aortic stenosis?", "Loud, harsh systolic ejection murmur at the right upper sternal border", ["Diastolic rumble at the apex", "Holosystolic murmur at the apex radiating to the axilla", "Continuous machinery murmur"], "Harsh systolic murmur at the RUSB.")],
        [q("Mick, 82, is found on the floor after using the bathroom at night. He has a 3/6 systolic ejection murmur at the RUSB, LVH on EKG and severe aortic valve calcification on echo. Most likely cause of his syncope?", "Aortic stenosis", ["Vasovagal syncope", "Brugada syndrome", "Hypoglycemia"], "The deck's own case: elderly man, AS murmur, calcified valve."),
          q("An elderly man with known severe AS now has exertional angina and has fainted twice. What is indicated?", "Aortic valve replacement", ["Watchful waiting with yearly echo", "Salt tablets and hydration", "Carotid sinus massage"], "Symptomatic severe AS: high mortality untreated, AVR indicated.")]),
      C("Hypertrophic cardiomyopathy",
        "<p>About <strong>1 in 4</strong> with HCM have syncope or presyncope. <strong>Autosomal dominant</strong>: ask about <strong>family history of HCM or sudden cardiac death</strong>.</p>" +
        "<p><strong>Mechanism:</strong> stiff, thick LV → <strong>poor filling (↓SV)</strong>; septal hypertrophy → <strong>LV outflow obstruction (↓CO)</strong>, <strong>worse with exertion or dehydration</strong>.</p>" +
        "<p><strong>Presentation:</strong> may be asymptomatic; DOE, <strong>exertional angina or syncope</strong>, palpitations. <strong>Exam</strong> may be normal or show <strong>S4</strong> (bell), systolic murmur, LV lift/heave.</p>" +
        "<p><strong>Red flags:</strong> family history of HCM, <strong>systolic ejection murmur</strong>, <strong>abnormal EKG with LVH</strong>. <strong>Diagnosis: transthoracic echo.</strong></p>" +
        hy("HCM murmur <strong>gets louder with less preload</strong> (standing, Valsalva, dehydration), which is why dehydration and exertion provoke syncope."),
        ["hcm-genetics", "hcm-mechanism", "hcm-presentation", "hcm-diagnosis"],
        [q("What is the inheritance pattern of HCM?", "Autosomal dominant", ["Autosomal recessive", "X-linked recessive", "Mitochondrial"], "Ask about family history."),
          q("About what share of HCM patients have syncope or presyncope?", "1 in 4", ["1 in 100", "1 in 2", "All of them"], "About 1 in 4."),
          q("Which heart sound may be heard in HCM?", "S4", ["S3 only", "Opening snap", "Pericardial knock"], "S4, best with the bell."),
          q("Which first test diagnoses HCM?", "Transthoracic echo", ["Coronary angiography", "Tilt table", "Holter"], "TTE."),
          q("What two problems lower output in HCM?", "Poor LV filling and LV outflow obstruction from septal hypertrophy", ["Valve regurgitation and AV block", "Vasodilation and bradycardia", "Pericardial fluid and tamponade"], "Stiff LV + septal outflow obstruction.")],
        [q("A 17-year-old soccer player fainted during a game on a hot day. His uncle died suddenly at 30. Exam shows a systolic murmur and EKG shows LVH. Next test?", "Transthoracic echocardiogram", ["Tilt table", "Head CT", "EEG"], "Red flags for HCM: TTE."),
          q("Why did a patient with known HCM faint after a long run without drinking water?", "Dehydration and exertion worsen LV outflow obstruction and lower output", ["Dehydration causes vasovagal syncope only", "Running prolongs the QT", "Dehydration causes complete heart block"], "Outflow obstruction worsens with exertion and dehydration.")])
    ]),

    /* ---------- 8 ---------- */
    S("08-av-blocks-syncope", "8. AV blocks on the EKG that cause syncope", "Objective 8. Slides 43, 49, 80.", [
      C("Which AV blocks cause syncope",
        "<p>The syncope-causing blocks are the <strong>high-grade</strong> ones: <strong>2nd-degree Mobitz II</strong> and <strong>3rd-degree (complete) heart block</strong>. Cause: <strong>structural damage to the conduction system</strong> (MI, fibrosis).</p>" +
        tbl(["Block", "EKG"], [
          ["<strong>Mobitz II</strong>", "<strong>Constant PR</strong> with sudden non-conducted P waves; QRS often wide"],
          ["<strong>3rd degree</strong>", "<strong>Complete dissociation</strong> of atria and ventricles; P waves march through a slow escape rhythm"],
          ["(Mobitz I, 1st degree)", "Progressive PR lengthening / long PR; rarely cause syncope"]]) +
        hy("On a syncope EKG, <strong>Mobitz II or 3rd-degree block</strong> is a <strong>diagnostic high-risk</strong> finding: admit."),
        ["syncope-blocks", "block-ekg", "block-high-risk"],
        [q("Which AV blocks are the classic causes of syncope?", "Mobitz II and third-degree block", ["First-degree and Mobitz I", "Only first-degree", "Bundle branch blocks only"], "High-grade blocks."),
          q("What is the underlying cause of high-grade AV block in syncope?", "Structural damage to the conduction system, such as MI or fibrosis", ["High vagal tone in athletes", "Caffeine", "Dehydration"], "Structural damage."),
          q("How does third-degree block look on the EKG?", "P waves and QRS complexes are completely dissociated", ["PR lengthens until a drop", "Constant PR with occasional drops", "PR over 200 ms with every P conducted"], "Complete AV dissociation."),
          q("How does Mobitz II look on the EKG?", "Constant PR with sudden dropped QRS complexes", ["Progressive PR lengthening", "No P waves", "Short PR with delta wave"], "PR stays constant.")],
        [q("A 79-year-old faints without warning. EKG: P waves at 80, wide QRS complexes at 34, PR intervals random. Diagnosis and disposition?", "Complete heart block; admit for pacing", ["Mobitz I; discharge", "Sinus arrhythmia; reassure", "First-degree block; outpatient follow-up"], "Third-degree block is a diagnostic high-risk finding."),
          q("A syncope patient's EKG shows a constant PR of 180 ms with every third P wave not conducted and a RBBB. What is this?", "Mobitz II block", ["Mobitz I block", "Nonconducted PACs", "Sinus pause"], "Constant PR with drops = Mobitz II.")])
    ]),

    /* ---------- 9 ---------- */
    S("09-brugada-pattern-vs-syndrome", "9. Brugada pattern (types 1 and 2) vs Brugada syndrome", "Objective 9. Slides 63–66, 68, 81.", [
      C("Type 1 vs type 2 pattern",
        "<p>Both show a <strong>pseudo-RBBB</strong> with <strong>ST elevation in V1–V2</strong>.</p>" +
        tbl(["Type", "Shape", "Description"], [
          ["<strong>Type 1</strong>", "<strong>Coved</strong> (\"shark fin\")", "Elevated ST <strong>descends with an upward convexity</strong> into an <strong>inverted T wave</strong>"],
          ["<strong>Type 2</strong>", "<strong>Saddleback</strong>", "Elevated ST <strong>descends toward baseline then rises</strong> into an <strong>upright T wave</strong>"]]) +
        mn("<strong>Type 1 = shark fin (coved), T down. Type 2 = saddle, T up.</strong>") +
        "<p>A <strong>Brugada type 1</strong> pattern on a syncope EKG is a <strong>suspicious</strong> finding that needs monitoring or workup.</p>",
        ["brugada-type1", "brugada-type2"],
        [q("Which Brugada pattern is coved or shark-fin shaped?", "Type 1", ["Type 2", "Type 3", "Neither"], "Type 1 = coved."),
          q("Which Brugada pattern has a saddleback ST segment?", "Type 2", ["Type 1", "Both", "Neither"], "Type 2 = saddleback."),
          q("In type 1 Brugada, the T wave is:", "Inverted", ["Upright", "Peaked", "Absent"], "Coved ST into an inverted T."),
          q("In which leads is the Brugada ST elevation seen?", "V1 and V2", ["II, III and aVF", "V5 and V6", "I and aVL"], "Right precordial leads.")],
        [q("An EKG shows ST elevation in V1–V2 that dips toward baseline and then rises into an upright T wave. Which pattern?", "Brugada type 2 (saddleback)", ["Brugada type 1 (coved)", "Anterior STEMI", "WPW"], "Saddleback with upright T = type 2.")]),
      C("Pattern vs syndrome",
        tbl(["", "<strong>Brugada pattern</strong>", "<strong>Brugada syndrome</strong>"], [
          ["EKG", "Typical features", "Typical features"],
          ["Clinical", "<strong>Asymptomatic</strong>, no other criteria", "<strong>Sustained ventricular arrhythmia, sudden cardiac death, or syncope</strong>"],
          ["How common", "More common", "<strong>Less common</strong> than the pattern"],
          ["Treatment", "<strong>None needed</strong>", "<strong>ICD</strong>"]]),
        ["brugada-pattern-vs-syndrome"],
        [q("What turns a Brugada pattern into Brugada syndrome?", "A history of sustained ventricular arrhythmia, sudden cardiac death or syncope", ["A type 2 pattern", "Age over 40", "A family history of hypertension"], "Pattern + clinical criteria = syndrome."),
          q("How is an asymptomatic Brugada pattern treated?", "No treatment if no other clinical criteria", ["ICD", "Daily flecainide", "Catheter ablation"], "Pattern alone needs no treatment."),
          q("Which is more common?", "Brugada pattern", ["Brugada syndrome", "They are equally common", "Neither has been described"], "The syndrome is less prevalent than the pattern.")],
        [q("A 34-year-old man has a coved ST elevation in V1–V2 found on a pre-op EKG. He has never fainted and no family member died suddenly. Diagnosis and plan?", "Brugada pattern; no treatment needed if no other criteria", ["Brugada syndrome; ICD", "STEMI; cath lab", "Long QT; beta-blocker"], "Asymptomatic with no clinical criteria = pattern."),
          q("The same patient later faints at rest while febrile. What is the diagnosis now?", "Brugada syndrome", ["Brugada pattern", "Vasovagal syncope only", "Orthostatic hypotension"], "Syncope plus the EKG pattern = syndrome.")])
    ]),

    /* ---------- 10 ---------- */
    S("10-brugada-syndrome", "10. Brugada syndrome: cause, who, presentation, EKG and management", "Objective 10. Slides 62–68.", [
      C("Brugada syndrome: who and how it presents",
        "<p><strong>Autosomal dominant</strong>. Most are of <strong>Southeast Asian descent</strong>, <strong>men &gt; women</strong>, usually diagnosed in <strong>adulthood</strong>. Raises risk of <strong>ventricular tachyarrhythmias and sudden cardiac death</strong>.</p>" +
        "<p><strong>Presentation:</strong> <strong>sudden cardiac arrest</strong> is the first presentation in <strong>up to 1/3</strong> (VF or polymorphic VT); syncope; palpitations.</p>" +
        "<p><strong>EKG:</strong> <strong>pseudo-RBBB</strong> with <strong>persistent ST elevation in V1–V2</strong>.</p>",
        ["brugada-epidemiology", "brugada-presentation", "brugada-ekg"],
        [q("Brugada syndrome is most common in which group?", "Men of Southeast Asian descent", ["Women of Northern European descent", "Children under 5", "Elderly women"], "Southeast Asian, M > F."),
          q("In up to what share of Brugada patients is sudden cardiac arrest the first presentation?", "One third", ["One tenth", "One half", "All"], "Up to 1/3."),
          q("Which EKG appearance is typical of Brugada?", "Pseudo-RBBB with ST elevation in V1–V2", ["Delta wave and short PR", "Sawtooth flutter waves", "Diffuse ST elevation with PR depression"], "Pseudo-RBBB + V1–V2 ST elevation."),
          q("Brugada syndrome is inherited in what pattern?", "Autosomal dominant", ["Autosomal recessive", "X-linked", "Not inherited"], "Autosomal dominant.")],
        [q("A 41-year-old Thai man is resuscitated from VF at night while asleep. His EKG shows a coved ST elevation in V1–V2 with an inverted T wave. Most likely diagnosis?", "Brugada syndrome", ["HCM", "Long QT syndrome", "WPW syndrome"], "Southeast Asian man, nocturnal VF, type 1 pattern.")]),
      C("Brugada syndrome: triggers and management",
        tbl(["Provoking factor", "Examples"], [
          ["<strong>Fever</strong>", "Any febrile illness"],
          ["<strong>Medications</strong>", "<strong>Sodium channel blockers (flecainide)</strong>, beta-blockers, <strong>TCAs</strong>, others"],
          ["<strong>Toxins</strong>", "<strong>Alcohol, cocaine</strong>"]]) +
        "<p><strong>Management:</strong> <strong>first-line ICD</strong>. If ventricular arrhythmias recur, add an antiarrhythmic or ablation. Brugada <strong>pattern</strong> alone needs no treatment.</p>" +
        hy("Brugada + <strong>fever</strong> = unmasking. Treat the fever and avoid Na⁺ channel blockers."),
        ["brugada-triggers", "brugada-management"],
        [q("First-line therapy for Brugada syndrome?", "ICD", ["Flecainide", "Pacemaker", "Digoxin"], "ICD device."),
          q("Which is a classic provoking factor for Brugada?", "Fever", ["Hypothermia", "Hypercalcemia", "Hypertension"], "Fever, Na⁺ channel blockers, BB, TCAs, alcohol, cocaine."),
          q("Which drug class can unmask Brugada?", "Sodium channel blockers such as flecainide", ["ACE inhibitors", "Statins", "Loop diuretics"], "Na⁺ channel blockers."),
          q("If a Brugada patient with an ICD keeps having ventricular arrhythmias, what is added?", "An antiarrhythmic or ablation", ["A second ICD", "Atropine", "Nothing else is possible"], "Add antiarrhythmic or ablation.")],
        [q("A man with known Brugada pattern faints during a high fever from influenza. Which statement is correct?", "Fever unmasks Brugada; this is now Brugada syndrome and he needs an ICD", ["Fever has nothing to do with Brugada", "He needs flecainide", "He only needs acetaminophen and reassurance"], "Fever provokes Brugada; syncope makes it a syndrome."),
          q("A patient with Brugada syndrome asks which drug for depression to avoid. Which class is a known trigger?", "Tricyclic antidepressants", ["SSRIs as a class are the only trigger", "Bupropion is the main trigger", "No drug triggers exist"], "TCAs are listed provoking medications.")])
    ]),

    /* ---------- 11 ---------- */
    S("11-long-qt-syndrome", "11. Long QT syndrome", "Objective 11. Slides 54–58.", [
      C("Long QT: definition and forms",
        "<p>A <strong>disorder of ventricular repolarization</strong> with a <strong>prolonged QT</strong>, leading to symptomatic ventricular arrhythmias and higher risk of <strong>sudden cardiac death</strong>. Can become <strong>torsades de pointes</strong>.</p>" +
        tbl(["Normal QT", "Limit"], [["<strong>Males</strong>", "<strong>≤ 470 ms</strong>"], ["<strong>Females</strong>", "<strong>≤ 480 ms</strong>"]]) +
        "<p><strong>Forms:</strong> <strong>congenital</strong> or <strong>acquired</strong> (medications, electrolytes).</p>",
        ["lqts-definition", "lqts-normal-values", "lqts-forms"],
        [q("Normal QT upper limit for males in this deck?", "470 ms", ["440 ms", "500 ms", "400 ms"], "≤ 470 ms in males."),
          q("Normal QT upper limit for females in this deck?", "480 ms", ["460 ms", "500 ms", "420 ms"], "≤ 480 ms in females."),
          q("Long QT syndrome can degenerate into:", "Torsades de pointes", ["Atrial flutter", "Mobitz I", "Sinus arrest"], "Torsades (polymorphic VT)."),
          q("Long QT syndrome is a disorder of:", "Ventricular repolarization", ["Atrial depolarization", "AV nodal conduction", "SA node automaticity"], "Repolarization.")],
        [q("A 26-year-old woman's EKG shows a QTc of 510 ms. Is this prolonged by the deck's cutoffs?", "Yes, above 480 ms for females", ["No, normal for women up to 520 ms", "No, QT only matters in men", "Cannot tell without an echo"], "Female limit is 480 ms.")]),
      C("Long QT: presentation and management",
        "<ul><li><strong>Asymptomatic</strong>: found as QT prolongation on EKG</li><li><strong>Symptomatic</strong>: <strong>palpitations, syncope, sudden cardiac arrest</strong></li><li>Any <strong>pulseless</strong> patient → <strong>ACLS</strong></li><li>Correct <strong>hypokalemia and hypomagnesemia</strong>; stop QT-prolonging drugs</li></ul>" +
        "<p>Torsades usually <strong>stops on its own within seconds</strong>, so it most often presents as <strong>brief syncope</strong> rather than arrest.</p>",
        ["lqts-presentation", "lqts-management"],
        [q("Which electrolytes should be corrected in long QT?", "Potassium and magnesium", ["Sodium and chloride", "Calcium and phosphate", "Bicarbonate only"], "Hypokalemia and hypomagnesemia."),
          q("Why does torsades most often present as brief syncope?", "It usually stops on its own within seconds", ["It is always slow", "It never affects output", "It only happens during sleep"], "Self-terminating bursts."),
          q("What is done for a long QT patient found pulseless?", "ACLS protocol", ["Oral potassium and discharge", "Carotid massage", "Tilt table test"], "Unstable without pulse → ACLS.")],
        [q("A 16-year-old faints when her alarm clock goes off; EKG shows a QTc of 520 ms and her cousin died suddenly while swimming. What condition fits?", "Congenital long QT syndrome", ["Vasovagal syncope", "Brugada pattern", "Orthostatic hypotension"], "Sudden-trigger syncope, long QT and family history of SCD.")])
    ]),

    /* ---------- 12 ---------- */
    S("12-qt-drugs-electrolytes", "12. Drugs and electrolytes that prolong the QT", "Objective 12. Slides 55–57.", [
      C("Acquired long QT: the lists",
        tbl(["Group", "Examples"], [
          ["<strong>Antiarrhythmics</strong>", "<strong>Quinidine, procainamide, sotalol</strong>"],
          ["<strong>Psychiatric</strong>", "<strong>Haloperidol, ziprasidone, SSRIs, TCAs</strong>"],
          ["<strong>Antimicrobials</strong>", "<strong>Fluoroquinolones, macrolides, azoles</strong>"],
          ["<strong>Antiemetics</strong>", "<strong>Ondansetron</strong>"],
          ["<strong>Electrolytes</strong>", "<strong>Hypokalemia, hypomagnesemia</strong>"]]) +
        hy("These raise the risk of <strong>torsades → syncope or sudden death</strong>, especially when combined.") +
        mn("<strong>\"Anti\" drugs</strong>: <strong>anti</strong>arrhythmics, <strong>anti</strong>psychotics/depressants, <strong>anti</strong>biotics/fungals, <strong>anti</strong>emetics. Plus low K and low Mg."),
        ["qt-antiarrhythmics", "qt-psych", "qt-antimicrobials", "qt-antiemetics", "qt-electrolytes"],
        [q("Which antiemetic prolongs the QT?", "Ondansetron", ["Docusate", "Simethicone", "Loperamide"], "Ondansetron."),
          q("Which antibiotic classes prolong the QT?", "Fluoroquinolones and macrolides", ["Penicillins and cephalosporins", "Tetracyclines only", "Aminoglycosides only"], "FQs, macrolides, azoles."),
          q("Which antipsychotics are named as QT prolongers?", "Haloperidol and ziprasidone", ["Lithium and valproate", "Buspirone and hydroxyzine", "Bupropion and mirtazapine"], "Haloperidol, ziprasidone; also SSRIs and TCAs."),
          q("Which antiarrhythmics are named as QT prolongers?", "Quinidine, procainamide and sotalol", ["Metoprolol and diltiazem", "Digoxin and atropine", "Adenosine and lidocaine"], "Class IA and III."),
          q("Which electrolyte abnormalities prolong the QT?", "Hypokalemia and hypomagnesemia", ["Hyperkalemia and hypermagnesemia", "Hypernatremia", "Hypercalcemia"], "Low K, low Mg.")],
        [q("A hospitalized patient on azithromycin and IV ondansetron with K⁺ 3.0 develops palpitations and a brief faint. Which risk factors for torsades does she have?", "Two QT-prolonging drugs and hypokalemia", ["Only hypokalemia", "None; these do not affect the QT", "Only azithromycin"], "Macrolide + ondansetron + low K."),
          q("A delirious patient on levofloxacin and fluconazole needs an antipsychotic. Which choice adds the most QT risk?", "IV haloperidol", ["Reorientation and sleep hygiene", "Melatonin", "Family at the bedside"], "Haloperidol prolongs the QT on top of an FQ and an azole.")])
    ]),

    /* ---------- 13 ---------- */
    S("13-wpw-syndrome", "13. Wolff-Parkinson-White syndrome", "Objective 13. Slides 59–61, 81, 94.", [
      C("WPW: EKG and why it causes syncope",
        "<p>An <strong>accessory pathway bypasses the AV node</strong>, causing <strong>early ventricular activation</strong>. It may cause <strong>AVRT</strong>; most concerning is <strong>atrial fibrillation</strong> conducted down the pathway.</p>" +
        tbl(["EKG finding", "Description"], [["<strong>Short PR</strong>", "AV node is bypassed"], ["<strong>Delta wave</strong>", "Slurred upstroke at the start of the QRS"], ["<strong>Wide QRS</strong>", "Pre-excitation"]]) +
        "<p><strong>Symptoms:</strong> most with the <strong>pattern are asymptomatic</strong>; a minority get paroxysmal arrhythmias: <strong>palpitations, chest pain, SOB, syncope, sudden cardiac death</strong>.</p>" +
        "<p>A <strong>delta wave</strong> on a syncope EKG is a <strong>suspicious</strong> finding.</p>",
        ["wpw-mechanism", "wpw-ekg", "wpw-symptoms"],
        [q("What is the most concerning arrhythmia in WPW?", "Atrial fibrillation conducted down the accessory pathway", ["Sinus arrhythmia", "First-degree AV block", "Junctional rhythm"], "Progression to AF is most concerning."),
          q("Which three EKG findings define WPW?", "Short PR, delta wave and wide QRS", ["Long PR, Q waves and peaked T", "Coved ST, inverted T and RBBB", "Low voltage and electrical alternans"], "Classic WPW triad."),
          q("Most patients with a WPW pattern are:", "Asymptomatic", ["In cardiac arrest", "Hypotensive", "Unable to exercise"], "A minority develop arrhythmias."),
          q("The delta wave is:", "A slurred upstroke at the start of the QRS", ["A notch at the end of the T wave", "An extra P wave", "A U wave"], "Early activation through the pathway.")],
        [q("Jessie, 38, felt a palpitation and fainted. EMS found a wide-complex tachycardia at 240 with BP 70/50; after an AED shock her EKG showed sinus tachycardia with delta waves. Most likely cause?", "WPW syndrome with a pathway-mediated tachyarrhythmia", ["Vasovagal syncope", "Aortic stenosis", "Orthostatic hypotension"], "The deck's case: delta waves after conversion of a fast wide rhythm.")])
    ]),

    /* ---------- 14 ---------- */
    S("14-polymorphic-vt", "14. Polymorphic ventricular tachycardia", "Objective 14. Slides 44, 53–58.", [
      C("Polymorphic VT and torsades in syncope",
        "<p><strong>VT</strong> = 3 or more consecutive PVCs. <strong>Monomorphic</strong>: rapid, regular, most common. <strong>Polymorphic</strong>: QRS shape keeps changing; <strong>torsades</strong> is polymorphic VT with a <strong>long QT</strong>.</p>" +
        "<p><strong>Clinical features:</strong> often <strong>no warning</strong>; palpitations, syncope, <strong>sudden cardiac arrest</strong>. Torsades usually <strong>self-terminates within seconds</strong> → <strong>brief syncope</strong>. Brugada causes VF or <strong>polymorphic VT</strong>.</p>" +
        "<p><strong>High risk for tachyarrhythmia syncope:</strong> prior <strong>MI</strong>, <strong>long QT or Brugada</strong>, <strong>HCM</strong>, congenital heart disease, significant vascular disease. Hard to catch because episodes are <strong>paroxysmal and infrequent</strong>.</p>",
        ["polymorphic-vt-features", "tachy-syncope-risk"],
        [q("Torsades de pointes is polymorphic VT associated with:", "A long QT", ["A short PR", "A delta wave", "A first-degree AV block"], "Long-QT polymorphic VT."),
          q("Why is tachyarrhythmic syncope hard to diagnose?", "Episodes are paroxysmal and infrequent", ["It always occurs during sleep", "It never shows on EKG", "It only happens in children"], "Paroxysmal and infrequent."),
          q("Which is a risk factor for tachyarrhythmia-induced syncope?", "Previous MI", ["Young age with no heart disease", "Hypothyroidism", "Recent blood donation"], "Prior MI, long QT, Brugada, HCM, congenital disease, vascular disease."),
          q("How much warning does VT-related syncope usually give?", "Little or none", ["Several minutes of nausea", "An hour of headache", "Always a long prodrome"], "Often occurs without warning.")],
        [q("A patient with a prior MI has abrupt syncope while seated with no prodrome. Telemetry later shows a fast wide rhythm whose QRS shapes keep changing. Rhythm?", "Polymorphic ventricular tachycardia", ["Monomorphic VT", "Atrial flutter", "Sinus tachycardia"], "Changing morphology = polymorphic.")])
    ]),

    /* ---------- 15 ---------- */
    S("15-cardiopulmonary-obstruction", "15. PE, MI, aortic dissection and tamponade as causes of syncope", "Objective 15. Slides 69–74.", [
      C("PE and MI",
        tbl(["Condition", "Mechanism"], [
          ["<strong>Pulmonary embolism</strong>", "<strong>Acute obstruction of the pulmonary vascular bed</strong> → reduced CO"],
          ["<strong>Myocardial infarction</strong>", "<strong>Myocardial dyskinesia</strong> after acute MI → reduced CO"]]) +
        "<p>Associated symptoms: <strong>chest pain</strong> (MI, PE), <strong>shortness of breath</strong> (PE, CHF).</p>",
        ["pe-syncope", "mi-syncope"],
        [q("How does PE cause syncope?", "Acute obstruction of the pulmonary vascular bed reduces cardiac output", ["It causes a seizure", "It causes vagal overactivity", "It blocks the AV node"], "Obstruction → reduced CO."),
          q("How does acute MI cause syncope?", "Myocardial dyskinesia reduces cardiac output", ["It causes pericardial fluid", "It tears the aorta", "It raises blood pressure"], "Dyskinesia → reduced CO.")],
        [q("A woman on oral contraceptives faints after a long flight and now has tachycardia, hypoxia and pleuritic chest pain. Most likely cause?", "Pulmonary embolism", ["Vasovagal syncope", "Carotid sinus syndrome", "Brugada syndrome"], "PE obstructs the pulmonary bed and drops output.")]),
      C("Aortic dissection",
        "<p><strong>Mechanism:</strong> a <strong>tear in the intima</strong> → <strong>false lumen</strong> → compresses the true lumen → <strong>systemic blood flow drops instantly</strong>.</p>" +
        "<p><strong>Symptom:</strong> <strong>tearing or ripping chest pain radiating to the back</strong>.</p>" +
        "<p><strong>Diagnosis:</strong> <strong>CT with contrast</strong>, echo, chest x-ray (<strong>widened mediastinum</strong>).</p>",
        ["dissection-mechanism", "dissection-diagnosis"],
        [q("Which pain description fits aortic dissection?", "Tearing or ripping chest pain radiating to the back", ["Pleuritic pain better leaning forward", "Burning epigastric pain after meals", "Pressure relieved by rest in 2 minutes"], "Tearing pain to the back."),
          q("Which chest x-ray finding suggests aortic dissection?", "Widened mediastinum", ["Kerley B lines", "Hampton hump", "Water-bottle heart"], "Widened mediastinum."),
          q("How does aortic dissection drop systemic flow?", "A false lumen compresses the true lumen", ["Fluid fills the pericardium", "A clot blocks the pulmonary artery", "The AV node is damaged"], "Intimal tear → false lumen.")],
        [q("A 64-year-old hypertensive man faints after sudden ripping chest pain that goes through to his back. Which test confirms the likely diagnosis?", "CT with contrast", ["Tilt table", "Carotid sinus massage", "EEG"], "Suspected aortic dissection → CT with contrast.")]),
      C("Cardiac tamponade",
        "<p><strong>Mechanism:</strong> fluid builds up around the heart → pressure on the heart → <strong>poor diastolic filling</strong> → ↓CO.</p>" +
        "<p><strong>Signs:</strong> <strong>hypotension, JVD, distant heart sounds</strong> (Beck's triad).</p>" +
        "<p><strong>Diagnosis:</strong> ECG <strong>low voltage or electrical alternans</strong>; <strong>best by bedside or formal echo</strong>.</p>",
        ["tamponade-mechanism", "tamponade-signs", "tamponade-diagnosis"],
        [q("Which triad suggests cardiac tamponade?", "Hypotension, JVD and distant heart sounds", ["Fever, rash and conjunctivitis", "Hypertension, bradycardia and irregular breathing", "Tearing pain, pulse deficit and widened mediastinum"], "Beck's triad."),
          q("Which EKG findings suggest tamponade?", "Low voltage or electrical alternans", ["Delta waves", "Coved ST elevation in V1–V2", "Prolonged QT"], "Low voltage, electrical alternans."),
          q("Best test to diagnose tamponade?", "Bedside or formal echo", ["Chest x-ray", "D-dimer", "Holter monitor"], "Echo."),
          q("Tamponade lowers cardiac output by:", "Impairing diastolic filling", ["Blocking the aortic valve", "Causing bradycardia", "Causing vasodilation"], "Poor diastolic filling.")],
        [q("A patient with metastatic lung cancer faints. BP 82/60, neck veins distended, heart sounds faint, and the EKG QRS amplitude alternates beat to beat. Next test?", "Bedside echocardiogram", ["Tilt table test", "EEG", "Exercise stress test"], "Suspected tamponade: echo.")])
    ]),

    /* ---------- 16 ---------- */
    S("16-syncope-vs-seizure", "16. Syncope vs seizure", "Objective 16. Slides 88–89.", [
      C("Telling them apart",
        tbl(["<strong>Syncope</strong>", "<strong>Epileptic seizure</strong>"], [
          ["<strong>Presyncope</strong> beforehand", "Witnessed head turning, unusual posturing"],
          ["<strong>Spontaneous</strong> return of consciousness", "<strong>Postictal confusion</strong>"],
          ["<strong>Decreased</strong> muscle tone", "<strong>Increased</strong> tone during the event; <strong>tonic-clonic</strong> movements"],
          ["No postictal state", "<strong>Lateral tongue biting</strong>"],
          ["No tongue biting", ""]]) +
        hy("<strong>Urinary incontinence and trauma can happen in either.</strong> Incontinence occurs in 10–20% of syncopal events.") +
        "",
        ["syncope-vs-seizure-table", "incontinence-either"],
        [q("Which finding favors seizure over syncope?", "Postictal confusion", ["A prodrome of nausea and warmth", "Quick spontaneous recovery", "Decreased muscle tone"], "Postictal state = seizure."),
          q("Which finding does NOT help distinguish syncope from seizure?", "Urinary incontinence", ["Lateral tongue biting", "Postictal confusion", "Presyncope beforehand"], "Incontinence can happen in either."),
          q("Which tongue-biting location points to a seizure?", "Lateral (side) of the tongue", ["Tip of the tongue", "No tongue location matters", "Upper lip"], "Lateral tongue biting."),
          q("Muscle tone during syncope is typically:", "Decreased", ["Increased", "Rhythmically jerking for minutes", "Rigid"], "Syncope = loss of tone.")],
        [q("A 25-year-old is found confused for 30 minutes after an event, with blood on the side of her tongue and wet pants. Most likely?", "Seizure", ["Vasovagal syncope", "Orthostatic syncope", "Situational syncope"], "Postictal confusion and lateral tongue biting point to seizure; incontinence does not discriminate."),
          q("A man faints in a hot crowded room after feeling nauseated, wet himself, and was fully alert within a minute. Most likely?", "Syncope (vasovagal)", ["Generalized seizure", "Postictal state", "Status epilepticus"], "Incontinence occurs in syncope too; quick full recovery and a prodrome favor syncope.")]),
      C("Syncope with convulsions: the 10:20 rule",
        tbl(["", "Syncope with convulsions", "True seizure"], [
          ["Jerking", "<strong>Brief, a few seconds</strong>", "<strong>Sustained rhythmic</strong> convulsions <strong>&gt; 30 s</strong>, or tonic-clonic from the start"]]) +
        "<p><strong>Clinical pearl: the 10:20 rule.</strong></p>" +
        note("Slide 89 names the 10:20 rule without wording. In the usual teaching it compares jerk counts: fewer than about 10 myoclonic jerks suggests syncope; more than about 20 suggests a seizure."),
        ["convulsive-syncope", "ten-twenty-rule"],
        [q("How long do limb jerks usually last in convulsive syncope?", "A few seconds", ["More than 30 seconds", "5 minutes", "An hour"], "Brief limb jerking."),
          q("Which feature favors a true seizure?", "Sustained rhythmic convulsions lasting over 30 seconds", ["A few seconds of jerking", "Pallor and sweating beforehand", "Immediate full recovery"], "> 30 s or generalized tonic-clonic from the outset."),
          q("Under the 10:20 rule, fewer than about 10 jerks suggests:", "Syncope", ["Seizure", "Stroke", "Hypoglycemia"], "Few jerks = syncope.")],
        [q("A bystander says a fainting teen jerked her arms about five times for 3 seconds and woke up clear-headed. Most likely?", "Convulsive syncope", ["Generalized tonic-clonic seizure", "Status epilepticus", "Psychogenic seizure"], "Brief jerking with quick recovery = syncope with convulsions.")])
    ]),

    /* ---------- 17 ---------- */
    S("17-systematic-evaluation", "17. A systematic approach to syncope", "Objective 17. Slides 75–79, 82–83, 86, 91–92.", [
      C("History: it's all in the history",
        "<ul><li>Present and <strong>previous attacks</strong>; <strong>eyewitness accounts</strong></li><li><strong>Triggers</strong> and what happened <strong>before, during and after</strong></li><li>PMHx of cardiac or neurologic disease</li><li><strong>Family history of sudden cardiac death</strong></li><li><strong>Red flags:</strong> falls or single-car crashes without cause, driving off the road</li></ul>" +
        tbl(["Associated symptom", "Think of"], [
          ["<strong>Chest pain</strong>", "Acute MI, aortic dissection, PE, aortic stenosis"],
          ["<strong>Palpitations</strong>", "Arrhythmias"],
          ["<strong>Shortness of breath</strong>", "PE, CHF"],
          ["<strong>Abdominal or back pain</strong>", "<strong>Leaking AAA</strong> or <strong>ruptured ectopic pregnancy</strong>"],
          ["<strong>Sudden, no warning, or with exertion</strong>", "Arrhythmia or structural cardiopulmonary lesion"]]),
        ["syncope-history", "associated-symptoms"],
        [q("Syncope with abdominal or back pain should make you think of:", "Leaking AAA or ruptured ectopic pregnancy", ["Vasovagal syncope", "Carotid sinus syndrome", "Orthostatic hypotension"], "Life-threatening intra-abdominal causes."),
          q("Syncope with palpitations should make you think of:", "Arrhythmia", ["Seizure", "Hypoglycemia", "Migraine"], "Palpitations → arrhythmia."),
          q("Which history item is a red flag in syncope?", "A single-car crash with no apparent cause", ["Fainting at the sight of blood", "Fainting after standing in heat", "A childhood history of breath holding"], "Unexplained falls or crashes are red flags."),
          q("Which family history matters most in syncope?", "Sudden cardiac death", ["Hypothyroidism", "Migraine", "Asthma"], "Family history of SCD.")],
        [q("A 29-year-old woman faints at work and has lower abdominal pain. Her last period was 7 weeks ago. Which test is most urgent?", "Urine pregnancy test", ["Tilt table test", "Holter monitor", "Carotid sinus massage"], "Consider a ruptured ectopic pregnancy.")]),
      C("Physical exam and first tests",
        "<p><strong>Exam clues of cardiac syncope:</strong> <strong>irregular rhythm, new murmur, S3/S4 gallop, JVD, leg edema, pulmonary rales</strong>. Also check <strong>orthostatic vital signs</strong>.</p>" +
        hy("ACEP: <strong>history, physical exam and 12-lead EKG</strong> are the <strong>only Level A recommendations</strong> for syncope.") +
        tbl(["Step", "Tests"], [
          ["First", "<strong>12-lead EKG</strong> and <strong>cardiac monitor</strong>"],
          ["Labs", "<strong>CBC, BMP</strong>, <strong>urine pregnancy test</strong>, <strong>troponin, BNP</strong>, <strong>D-dimer</strong>"],
          ["EKG looks for", "Prior cardiopulmonary disease, acute ischemia, arrhythmia, heart block, abnormal QT"]]),
        ["cardiac-exam-findings", "level-a", "initial-tests"],
        [q("Which are the only Level A recommendations for evaluating syncope (ACEP)?", "History, physical exam and 12-lead EKG", ["CT head, EEG and MRI", "Tilt table, echo and Holter", "Troponin, D-dimer and BNP"], "H&P + EKG."),
          q("Which exam finding suggests cardiac syncope?", "A new murmur", ["Pale conjunctivae only", "Normal heart sounds", "Clear lungs and no edema"], "New murmur, irregular rhythm, gallop, JVD, edema, rales."),
          q("Which lab is listed in the initial syncope workup for women of childbearing age?", "Urine pregnancy test", ["Serum lipase", "Thyroid antibodies", "HbA1c"], "Also CBC, BMP, troponin, BNP, D-dimer."),
          q("What should every syncope patient get first?", "A 12-lead EKG and cardiac monitoring", ["A head CT", "An EEG", "A lumbar puncture"], "EKG and monitor.")],
        [q("A 70-year-old faints. Exam: irregularly irregular pulse, S3, bilateral rales and leg edema. Which category do these findings point to?", "Cardiac syncope", ["Vasovagal syncope", "Situational syncope", "Psychogenic pseudosyncope"], "Exam abnormalities of cardiac syncope.")]),
      C("After the ED: further testing and special populations",
        "<p><strong>Algorithm (Tintinalli):</strong> Is it true syncope? → H&P and ECG → cause established? If yes and serious → admit; if yes and benign (vasovagal, carotid hypersensitivity, situational, medication, orthostatic) → likely discharge. If unexplained → <strong>risk-stratify</strong>.</p>" +
        tbl(["Population", "Focus"], [
          ["<strong>Elderly</strong>", "Cardiovascular disease, <strong>aortic stenosis</strong>; <strong>always review meds</strong> for bradycardia, orthostasis, QT prolongation; unwitnessed falls may be syncope"],
          ["<strong>Children and adolescents</strong>", "Related to <strong>activity or sports</strong>? HOCM, septal defects, <strong>breath holding</strong>; family history of heart disease, long QT, arrhythmia, SCD"],
          ["<strong>Pregnancy</strong>", "<strong>Dehydration (hyperemesis)</strong>, <strong>ectopic</strong>, <strong>PE</strong>, <strong>3rd-trimester IVC compression</strong> by the uterus"]]),
        ["ed-algorithm", "special-populations"],
        [q("What is the first question in the syncope algorithm?", "Is it true syncope?", ["Is the troponin elevated?", "Does the patient have insurance?", "Is the patient over 65?"], "True syncope vs other TLOC."),
          q("What must always be reviewed in an elderly syncope patient?", "The medication list", ["Childhood vaccines", "Allergy to latex", "Dental history"], "Meds causing bradycardia, orthostasis, QT prolongation."),
          q("Why can a pregnant woman faint in the third trimester?", "The enlarged uterus compresses the IVC and lowers venous return", ["Pregnancy causes Brugada", "The fetus blocks the carotid sinus", "Estrogen prolongs the PR"], "IVC compression."),
          q("Which is a cause of syncope in children listed on the slides?", "Breath holding", ["Aortic stenosis from age-related calcification", "Carotid sinus syndrome", "Parkinson disease"], "HOCM, septal defects, breath holding.")],
        [q("A 34-week pregnant woman faints while lying flat on her back for an ultrasound and recovers when turned onto her left side. Mechanism?", "Uterine compression of the IVC reducing venous return", ["Pulmonary embolism", "Ectopic rupture", "Brugada syndrome"], "Third-trimester IVC compression."),
          q("A 12-year-old faints during a swim race. Which history question matters most?", "Any family history of long QT, arrhythmia or sudden cardiac death", ["Any history of motion sickness", "Grades in school", "Recent haircut"], "Activity-related syncope in children: ask about family cardiac history.")])
    ]),

    /* ---------- 18 ---------- */
    S("18-high-risk-features", "18. High-risk history, exam and EKG findings", "Objective 18. Slides 76, 80–81, 85–86, 96.", [
      C("High-risk EKG findings",
        tbl(["<strong>Diagnostic</strong> (high risk)", "<strong>Suspicious</strong> (needs monitoring or workup)"], [
          ["<strong>Mobitz II or 3rd-degree AV block</strong>", "<strong>Bifascicular block</strong>"],
          ["<strong>Alternating bundle branch block</strong>", "<strong>Q waves</strong>"],
          ["<strong>Sinus pauses &gt; 3 s</strong> or <strong>sinus brady &lt; 40 while awake</strong>", "<strong>Delta wave</strong>"],
          ["<strong>Sustained VT or SVT &gt; 160</strong>", "<strong>Long or short QT</strong>"],
          ["<strong>Acute ischemia</strong>", "<strong>Brugada type 1</strong>, <strong>LVH pattern</strong>, <strong>paced rhythm</strong>"]]),
        ["diagnostic-ekg", "suspicious-ekg"],
        [q("Which EKG finding is diagnostic (high risk) in syncope?", "Mobitz II block", ["Sinus arrhythmia", "First-degree block in an athlete", "Early repolarization"], "Mobitz II or 3rd degree."),
          q("A sinus bradycardia below what rate while awake is a high-risk finding?", "40 bpm", ["60 bpm", "50 bpm", "30 bpm"], "< 40 while awake."),
          q("A sustained SVT above what rate is a high-risk finding?", "160 bpm", ["100 bpm", "120 bpm", "220 bpm"], "SVT > 160."),
          q("Which finding is suspicious rather than diagnostic?", "Bifascicular block", ["Complete heart block", "Sustained VT", "Acute ischemia"], "Bifascicular block needs monitoring/workup."),
          q("Which syncope EKG finding points to WPW and needs workup?", "Delta wave", ["Saddleback ST", "Peaked T", "U wave"], "Delta wave is suspicious.")],
        [q("A syncope patient's EKG shows a 4-second sinus pause while awake. How is this classified?", "Diagnostic high-risk finding", ["Normal variant", "Suspicious finding only", "Seizure activity"], "Pauses > 3 s while awake."),
          q("A syncope patient's EKG shows RBBB plus left anterior fascicular block and no other findings. How is this classified?", "Suspicious: needs monitoring or workup", ["Normal; discharge", "Diagnostic of complete heart block", "Diagnostic of VT"], "Bifascicular block is suspicious.")]),
      C("High-risk patient features",
        tbl(["High-risk indicators"], [
          ["<strong>Abnormal EKG</strong>"],
          ["Suspected <strong>structural heart disease</strong>, especially <strong>history of heart failure</strong>"],
          ["<strong>Persistently low BP (SBP &lt; 90)</strong>"],
          ["<strong>Hematocrit &lt; 30</strong>"],
          ["<strong>Shortness of breath</strong>"],
          ["<strong>Family history of sudden cardiac death</strong>"],
          ["<strong>Advanced age with comorbidities</strong> (no fixed cutoff; under 45 with nothing else appears low risk)"]]) +
        "<p>Also high-risk: <strong>exertional</strong> or <strong>supine</strong> syncope, sudden syncope <strong>without warning</strong>, chest pain, palpitations, abdominal/back pain.</p>" +
        mn("<strong>CHESS</strong> (San Francisco rule idea): <strong>C</strong>HF, <strong>H</strong>ematocrit &lt; 30, <strong>E</strong>KG abnormal, <strong>S</strong>OB, <strong>S</strong>BP &lt; 90."),
        ["high-risk-indicators", "high-risk-history"],
        [q("Which hematocrit is a high-risk syncope feature?", "Less than 30", ["Less than 45", "More than 50", "Less than 40"], "HCT < 30."),
          q("Which BP is a high-risk syncope feature?", "Systolic below 90 mmHg", ["Systolic below 130 mmHg", "Diastolic above 90 mmHg", "Systolic above 160 mmHg"], "SBP < 90."),
          q("Which history is a high-risk feature?", "History of heart failure", ["History of fainting with blood draws since childhood", "History of motion sickness", "History of migraines"], "Structural disease, especially HF."),
          q("Below what age does syncope appear clearly low risk if no other factors are present?", "45", ["65", "80", "25"], "Age < 45 with no other factors.")],
        [q("A 74-year-old with CHF faints. Hct is 27, BP 86/50, and he is short of breath. Risk category?", "High risk: CHF, Hct < 30, SBP < 90 and SOB", ["Low risk because the EKG is normal", "Low risk because he recovered", "Cannot classify without a tilt table"], "Multiple high-risk indicators.")])
    ]),

    /* ---------- 19 ---------- */
    S("19-disposition", "19. Who goes home and who gets admitted", "Objective 19. Slides 84–86.", [
      C("Admit vs discharge",
        tbl(["Disposition", "Who"], [
          ["<strong>Admit</strong>", "<strong>Obvious cardiac or neurologic cause</strong> (arrhythmia, MI, effusion, PE, SAH, TIA, subclavian steal); <strong>significant hemorrhage</strong> (GI bleed, trauma, ruptured spleen or ovarian cyst); <strong>concerning EKG, comorbidities or symptoms</strong>; unexplained syncope <strong>with high-risk criteria</strong> (admit for evaluation and cardiac monitoring)"],
          ["<strong>Discharge</strong>", "<strong>Vasovagal, orthostatic, medication-induced</strong> (no increased morbidity or mortality); carotid hypersensitivity and situational syncope"],
          ["<strong>Discharge with follow-up</strong>", "Unexplained syncope in a <strong>well-appearing, low-risk, asymptomatic</strong> patient after risk assessment"]]),
        ["admit-criteria", "discharge-criteria", "unclear-cause"],
        [q("Which syncope patients can usually be discharged?", "Those with vasovagal, orthostatic or medication-induced syncope", ["Those with Mobitz II", "Those with aortic dissection", "Those with HCT under 30"], "No increased morbidity and mortality."),
          q("Unexplained syncope with high-risk criteria should be:", "Admitted for evaluation and cardiac monitoring", ["Discharged with no follow-up", "Sent home with a tilt table referral only", "Treated with salt tablets"], "Admit for workup."),
          q("A well-appearing, asymptomatic patient with unexplained syncope and no high-risk features should be:", "Discharged with follow-up after risk assessment", ["Admitted to the ICU", "Sent for emergency surgery", "Started on an ICD"], "Low risk + asymptomatic → discharge with follow-up."),
          q("Which noncardiac cause of syncope needs admission?", "A significant GI bleed", ["Micturition syncope", "Fear of needles", "Standing in a hot church"], "Significant hemorrhage → admit.")],
        [q("A 23-year-old with a clear vasovagal faint at a concert has a normal exam and EKG. Disposition?", "Discharge with trigger avoidance and hydration advice", ["Admit for telemetry", "Admit for an EP study", "Emergency echo then ICU"], "Vasovagal syncope can be discharged."),
          q("A 58-year-old faints with no prodrome; EKG shows a new bifascicular block. Disposition?", "Admit for monitoring and workup", ["Discharge; this is normal", "Discharge with a pamphlet", "Tilt table as outpatient only"], "Concerning EKG → admit."),
          q("A 40-year-old with no medical history faints once while standing; exam, EKG, labs and orthostatics are normal, and she feels well. Disposition?", "Discharge with outpatient follow-up", ["ICU admission", "Emergency cardiac cath", "Immediate ICD"], "Unclear cause, low risk, asymptomatic.")])
    ])
  ];
})();
