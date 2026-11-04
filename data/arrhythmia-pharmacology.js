/* Cardio Part 2, Arrhythmia Pharmacology (Scanlon, Arrhythmia Pharm 2026 deck, 62 slides). Official "Arrhythmia
   Pharmacology Objectives" in order. Splits: digoxin (5a use/MOA/kinetics, 5b toxicity); objective 6 into the action
   potential overview plus one section per class; objective 7 into Na channel and beta blocker subclasses; objective 8
   (names, contraindications, adverse effects) one section per drug not covered by its own objective; amiodarone (11a dosing
   and kinetics, 11b toxicity and interactions). Slide 2 (choose the drug by the rhythm) opens section 6a.
   Picture-only slides (9, 27, 36, 43) are action potential and conduction diagrams; their text is on the next slides.
   Mnemonics are standard teaching. Slide 61 says "LV block" for verapamil; read as AV block. */
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

  window.ARRHYTHMIA_PHARMACOLOGY_OBJECTIVES = [

    /* ---------- 1 ---------- */
    S("01-atropine-class-uses-dose", "1. Atropine: class, indications and dosing", "Objective 1. Slides 3, 9.", [
      C("Atropine basics",
        tbl(["", "Atropine"], [
          ["Class", "<strong>Anticholinergic</strong>"],
          ["Indications", "<strong>Symptomatic bradycardia</strong>; AV blocks: <strong>first degree</strong> and <strong>second degree Mobitz I</strong>"],
          ["Dose", "<strong>1 mg IV every 3–5 minutes</strong>, <strong>max 3 mg total</strong>"],
          ["Onset", "Immediate; peak 0.7–4 minutes"]]) +
        hy("<strong>Not for Mobitz II or complete heart block</strong>: those blocks are <strong>below the AV node</strong>, out of vagal reach. They need <strong>pacing</strong>.") +
        mn("<strong>1 every 3, up to 3</strong>: 1 mg q3–5 min, max 3 mg."),
        ["atropine-class", "atropine-indications", "atropine-dose", "atropine-not-mobitz2"],
        [q("What drug class is atropine?", "Anticholinergic", ["Beta agonist", "Cardiac glycoside", "Class III antiarrhythmic"], "Anticholinergic."),
          q("What is the atropine dose for symptomatic bradycardia?", "1 mg IV every 3 to 5 minutes, max 3 mg", ["0.1 mg IV once", "6 mg rapid IV push", "300 mg IV bolus"], "1 mg q3–5, max 3."),
          q("What is the maximum total dose of atropine for bradycardia?", "3 mg", ["1 mg", "10 mg", "0.5 mg"], "Max 3 mg."),
          q("Which AV blocks does atropine help?", "First degree and second degree Mobitz I", ["Mobitz II and complete heart block", "Only complete heart block", "None"], "Nodal blocks."),
          q("Why is atropine ineffective for Mobitz II and complete heart block?", "The block is below the AV node and needs pacing", ["Atropine only works in VF", "These blocks are caused by atropine", "The dose is too low"], "Infranodal."),
          q("How fast does IV atropine work?", "Immediately, peaking in under 5 minutes", ["After 2 hours", "After 2 days", "Only after a second dose"], "Immediate onset.")],
        [q("A patient has symptomatic sinus bradycardia at 38 bpm with hypotension. First drug?", "Atropine 1 mg IV", ["Adenosine 6 mg IV", "Amiodarone 300 mg IV", "Metoprolol 5 mg IV"], "Symptomatic bradycardia."),
          q("A patient with symptomatic third-degree AV block got atropine with no change. Next step?", "Transcutaneous pacing", ["More atropine past 3 mg", "Adenosine", "Digoxin"], "CHB needs pacing."),
          q("A patient has received atropine 1 mg three times for bradycardia. Can more be given?", "No, 3 mg is the maximum; move to pacing or other therapy", ["Yes, give 1 mg every minute", "Yes, give 6 mg", "Yes, double the dose"], "Max 3 mg.")])
    ]),

    /* ---------- 2 ---------- */
    S("02-atropine-moa-toxicity", "2. Atropine: mechanism, side effects and toxicity", "Objective 2. Slides 3–8.", [
      C("How atropine works",
        "<p><strong>Acetylcholine</strong> is the main <strong>parasympathetic</strong> transmitter: it slows the heart, increases secretions, contracts smooth muscle, dilates vessels. More vagal tone releases more of it.</p>" +
        "<ol class=\"concept-chain\"><li>Atropine <strong>blocks acetylcholine</strong> at receptors (smooth muscle, glands, CNS)</li><li>Parasympathetic (vagal) brake removed</li><li>Existing <strong>sympathetic</strong> tone dominates</li><li><strong>Faster SA node firing</strong> and <strong>better AV conduction</strong></li><li>Higher heart rate, <strong>higher cardiac output</strong>; secretions dry up</li></ol>" +
        hy("<strong>Heart transplant</strong>: atropine is <strong>likely ineffective</strong> because the transplanted heart has <strong>no vagal innervation</strong>.") +
        "<p>Kinetics: hepatic metabolism, urine excretion; <strong>half-life more than doubles in the elderly</strong>.</p>",
        ["atropine-moa", "atropine-transplant", "atropine-kinetics"],
        [q("How does atropine raise heart rate?", "It blocks acetylcholine, removing vagal slowing", ["It stimulates beta-1 receptors", "It blocks sodium channels", "It opens potassium channels"], "Anticholinergic."),
          q("What is the main neurotransmitter of the parasympathetic system?", "Acetylcholine", ["Norepinephrine", "Dopamine", "Serotonin"], "ACh."),
          q("Why is atropine likely ineffective after a heart transplant?", "The transplanted heart has no vagal innervation", ["Transplant drugs block atropine", "Transplant hearts have no SA node", "Atropine is toxic to grafts"], "Denervated."),
          q("How does age change atropine's half-life?", "It more than doubles in the elderly", ["It halves", "No change", "It becomes zero"], "Geriatric."),
          q("What does atropine do to AV node conduction?", "Improves it", ["Blocks it", "No effect", "Reverses it"], "Improves AV conduction.")],
        [q("A heart transplant recipient has symptomatic bradycardia. Why might atropine fail?", "The new heart is denervated, so blocking vagal input does nothing", ["The dose is always too low", "Atropine causes rejection", "Transplant hearts beat too fast"], "No vagal innervation."),
          q("An 85-year-old gets atropine. What pharmacokinetic point matters?", "Its half-life is more than doubled, so effects last longer", ["It is cleared twice as fast", "It cannot be given to the elderly", "It has no effect in the elderly"], "Longer half-life.")]),
      C("Side effects, cautions and toxicity",
        tbl(["Side effects", "Use with caution"], [["<strong>Tachycardia</strong>, <strong>dry eyes and mouth</strong>, <strong>blurred vision</strong>, <strong>constipation</strong>, <strong>urinary retention</strong>", "<strong>Acute angle-closure glaucoma</strong>, pyloric obstruction, <strong>BPH / urinary retention</strong>, mucus plugs (chronic lung disease); <strong>myocardial ischemia</strong>, heart failure, hypertension (tachycardia can cause ischemia, MI, arrhythmia)"]]) +
        hy("<strong>Toxicity</strong>: <strong>dilated pupils</strong>, <strong>warm dry skin</strong>, <strong>tachycardia</strong>, tremor, ataxia, <strong>delirium</strong>, coma.") +
        mn("Anticholinergic toxicity: <strong>Hot as a hare, Dry as a bone, Red as a beet, Blind as a bat, Mad as a hatter</strong> (plus can't pee, can't poop)."),
        ["atropine-side-effects", "atropine-cautions", "atropine-toxicity"],
        [q("Which is a common side effect of atropine?", "Dry mouth", ["Excess salivation", "Diarrhea", "Bradycardia"], "Anticholinergic."),
          q("Which eye condition calls for caution with atropine?", "Acute angle-closure glaucoma", ["Cataracts", "Myopia", "Conjunctivitis"], "Glaucoma."),
          q("Which urinary problem calls for caution with atropine?", "Urinary retention from BPH", ["Urinary incontinence from cough", "Kidney stones", "UTI"], "Retention."),
          q("What do the pupils look like in atropine toxicity?", "Dilated", ["Pinpoint", "Normal", "Unequal"], "Mydriasis."),
          q("What does the skin feel like in atropine toxicity?", "Warm and dry", ["Cold and clammy", "Sweaty", "Blue"], "Warm, dry."),
          q("Which mental status change occurs in atropine toxicity?", "Delirium", ["Euphoria only", "No change", "Improved memory"], "Delirium to coma."),
          q("Why use atropine carefully in myocardial ischemia?", "Tachycardia raises oxygen demand and can cause ischemia or MI", ["It causes bradycardia", "It lowers BP too much", "It blocks coronary flow directly"], "Tachycardia risk.")],
        [q("After several doses of atropine, a patient is confused, flushed, with hot dry skin, big pupils and HR 140. What is happening?", "Anticholinergic (atropine) toxicity", ["Opioid overdose", "Organophosphate poisoning", "Hypoglycemia"], "Classic toxidrome."),
          q("An older man with BPH gets atropine and later cannot urinate. Why?", "Anticholinergic urinary retention", ["Kidney failure from atropine", "UTI caused by atropine", "Dehydration only"], "Retention.")])
    ]),

    /* ---------- 3 ---------- */
    S("03-adenosine-uses-dose-contraindications", "3. Adenosine: names, indications, dose and contraindications", "Objective 3. Slides 10–12, 15.", [
      C("Adenosine basics and dosing",
        tbl(["", "Adenosine"], [
          ["Brand", "<strong>Adenocard</strong>"],
          ["Class", "Miscellaneous antiarrhythmic"],
          ["Indication", "<strong>Narrow-complex PSVT</strong>: <strong>AVNRT, AVRT</strong> (after vagal maneuvers)"],
          ["Dose", "<strong>6 mg rapid IV push</strong>; if no response in 1–2 min, <strong>12 mg</strong> (may <strong>repeat once</strong>)"],
          ["Give it", "<strong>Rapid push over 1–2 seconds</strong>, then a <strong>20 mL saline flush</strong>"],
          ["Kinetics", "Immediate onset; <strong>half-life under 10 seconds</strong>"]]) +
        mn("<strong>6, 12, 12</strong>, pushed fast and flushed."),
        ["adenosine-brand", "adenosine-indication", "adenosine-dose", "adenosine-administration"],
        [q("What is the brand name of adenosine?", "Adenocard", ["Cordarone", "Lanoxin", "Tambocor"], "Adenocard."),
          q("What is the first adenosine dose for PSVT?", "6 mg rapid IV push", ["12 mg slow IV", "1 mg IV", "300 mg IV"], "6 mg."),
          q("What is the second adenosine dose if 6 mg fails?", "12 mg rapid IV push", ["6 mg again", "24 mg", "3 mg"], "12 mg, may repeat once."),
          q("How is adenosine given?", "Rapid push over 1 to 2 seconds with a 20 mL saline flush", ["Slowly over 10 minutes", "As an infusion over 6 hours", "Subcutaneously"], "Fast and flushed."),
          q("What is the half-life of adenosine?", "Under 10 seconds", ["About 10 hours", "36 to 48 hours", "58 days"], "Very short."),
          q("What rhythms is adenosine used for?", "Narrow-complex PSVT such as AVNRT and AVRT", ["VF", "Asystole", "Complete heart block"], "PSVT.")],
        [q("A stable patient with a regular narrow-complex tachycardia at 190 did not convert with vagal maneuvers. Next step?", "Adenosine 6 mg rapid IV push with a flush", ["Atropine 1 mg", "Amiodarone 300 mg push", "Defibrillation"], "PSVT."),
          q("Adenosine 6 mg did not convert a patient's SVT after 2 minutes. Next dose?", "Adenosine 12 mg rapid IV push", ["Adenosine 6 mg slowly", "Adenosine 3 mg", "Atropine 1 mg"], "12 mg."),
          q("A nurse pushes adenosine slowly through a distal hand IV with no flush and it fails. Why?", "Its half-life is under 10 seconds, so it must be pushed fast and flushed", ["The dose was too high", "It works only orally", "It needs 20 minutes to act"], "Rapid push.")]),
      C("Side effects and contraindications",
        tbl(["Side effects (brief)", "Contraindications"], [["<strong>Flushing</strong>, lightheadedness, nausea, sweating, nervousness, numbness, <strong>feeling of impending doom</strong>", "Hypersensitivity, <strong>heart block</strong>, <strong>active bronchospasm</strong> (<strong>asthma</strong>, COPD)"]]) +
        hy("<strong>Avoid in wide-complex tachycardia and accessory pathways (WPW)</strong>: blocking the AV node can send AF down the accessory pathway: <strong>severe tachycardia, cardiac arrest</strong>.<br>Toxicity is minimal (short half-life), but severe effects include <strong>prolonged asystole</strong>, heart block, ischemia.") +
        "<p>Warn the patient: the <strong>impending doom</strong> feeling and a brief pause are expected and pass in seconds.</p>",
        ["adenosine-side-effects", "adenosine-contraindications", "adenosine-wpw"],
        [q("Which lung condition is a contraindication to adenosine?", "Active bronchospasm such as asthma", ["Pneumonia", "Pleural effusion", "Sarcoidosis"], "Bronchospasm."),
          q("Which conduction problem is a contraindication to adenosine?", "Heart block", ["Sinus tachycardia", "Right axis deviation", "Early repolarization"], "Heart block."),
          q("Why avoid adenosine in WPW with atrial fibrillation?", "Blocking the AV node can speed conduction down the accessory pathway, causing arrest", ["It is too slow to work", "It causes hypertension", "It worsens asthma only"], "Accessory pathway."),
          q("Which unusual feeling do patients often describe after adenosine?", "Impending doom", ["Euphoria", "Hunger", "Itching only"], "Transient."),
          q("Which severe adverse effect has been reported with adenosine?", "Prolonged asystole", ["Pulmonary fibrosis", "Hypothyroidism", "Lupus"], "Rare severe effects."),
          q("Why is adenosine toxicity usually minimal?", "Its half-life is under 10 seconds", ["It is not absorbed", "It is renally cleared over days", "It is given in tiny doses only"], "Short half-life.")],
        [q("A patient with SVT also has an acute asthma attack with wheezing. Which drug should be avoided?", "Adenosine", ["Diltiazem", "Synchronized cardioversion if unstable", "Vagal maneuvers"], "Bronchospasm."),
          q("A patient has an irregular, wide-complex tachycardia at 240 with known WPW. Should adenosine be given?", "No; it can cause VF in pre-excited AF", ["Yes, 6 mg", "Yes, 12 mg", "Yes, by slow infusion"], "Avoid in WPW."),
          q("After adenosine, a patient says she felt like she was dying and her monitor paused for 3 seconds before sinus rhythm. What is the best interpretation?", "Expected transient effects of adenosine", ["Anaphylaxis", "Adenosine overdose needing an antidote", "A stroke"], "Doom and a brief pause are expected.")])
    ]),

    /* ---------- 4 ---------- */
    S("04-adenosine-moa", "4. Adenosine: mechanism of action", "Objective 4. Slides 11, 13, 26.", [
      C("How adenosine works",
        "<ol class=\"concept-chain\"><li>Adenosine acts on <strong>A1 receptors</strong> in the AV node</li><li><strong>Opens potassium channels</strong>: K+ leaves the cell (<strong>main effect</strong>)</li><li><strong>Inhibits calcium influx</strong></li><li>Cell is hyperpolarized and slower to depolarize</li><li><strong>Brief AV nodal block</strong>, longer AV nodal refractory period</li><li><strong>Re-entry circuit through the AV node breaks</strong>: sinus rhythm returns</li></ol>" +
        hy("Adenosine <strong>directly inhibits AV nodal conduction</strong> and <strong>increases AV nodal refractoriness</strong>, so it ends re-entry that <strong>uses the AV node</strong> (AVNRT, orthodromic AVRT)."),
        ["adenosine-k-channels", "adenosine-ca", "adenosine-reentry"],
        [q("What is the main cellular action of adenosine?", "Opening potassium channels so K+ leaves the cell", ["Blocking sodium channels", "Blocking beta receptors", "Inhibiting Na/K ATPase"], "K+ efflux."),
          q("What does adenosine do to calcium influx?", "Inhibits it", ["Increases it", "Has no effect", "Reverses it"], "Inhibits Ca influx."),
          q("What does adenosine do to the AV node refractory period?", "Increases it", ["Shortens it", "Removes it", "No effect"], "Longer refractoriness."),
          q("Why does adenosine stop AVNRT?", "It briefly blocks the AV node, breaking the re-entry circuit", ["It speeds the atria", "It shocks the heart", "It blocks the accessory pathway only"], "AV node dependent re-entry."),
          q("Which adenosine receptor mediates the AV block?", "A1", ["Beta-1", "M2", "Alpha-1"], "A1-mediated.")],
        [q("Adenosine stops a patient's regular narrow tachycardia instantly. What does that suggest about the rhythm?", "It depended on the AV node (AVNRT or orthodromic AVRT)", ["It was VT", "It was atrial flutter that always stops with adenosine", "It was sinus tachycardia"], "AV-node-dependent re-entry."),
          q("A patient with atrial flutter gets adenosine; the rate slows briefly showing flutter waves, then resumes. Why didn't it convert?", "The flutter circuit is in the atrium, not the AV node; adenosine only briefly blocks the node", ["The dose was too high", "Adenosine speeds the atrium", "Flutter is ventricular"], "Unmasks flutter.")])
    ]),

    /* ---------- 5a ---------- */
    S("05a-digoxin-uses-moa-kinetics", "5a. Digoxin: uses, mechanism and narrow therapeutic window", "Objective 5. Slides 16–17, 26.", [
      C("Digoxin uses and mechanism",
        tbl(["", "Digoxin"], [
          ["Brands", "<strong>Lanoxin</strong>, Digitek, Digox"],
          ["Class", "<strong>Cardiac glycoside</strong>, antiarrhythmic"],
          ["Uses", "<strong>Rate control in AF/flutter</strong>; <strong>HFrEF</strong>; off-label rate control in SVT (AVNRT)"]]) +
        "<ol class=\"concept-chain\"><li><strong>Vagomimetic</strong>: suppresses AV node conduction (rate control)</li><li>Inhibits the Na/K ATPase: <strong>more intracellular sodium</strong></li><li>Less Na/Ca exchange: <strong>more intracellular calcium</strong> (stronger contraction, HFrEF)</li><li>Prolongs phases 4 and 0: <strong>longer refractory period</strong></li></ol>" +
        note("Na/K ATPase as the named target is standard teaching; the slide says increases intracellular sodium causing calcium influx."),
        ["digoxin-names", "digoxin-uses", "digoxin-moa"],
        [q("What is the brand name of digoxin?", "Lanoxin", ["Adenocard", "Tikosyn", "Multaq"], "Lanoxin."),
          q("What drug class is digoxin?", "Cardiac glycoside", ["Class IC antiarrhythmic", "Anticholinergic", "Calcium channel blocker"], "Glycoside."),
          q("Which two conditions is digoxin mainly used for?", "Rate control in AF or flutter, and HFrEF", ["VF and asystole", "Hypertension and angina", "Bradycardia and heart block"], "Slide 16."),
          q("How does digoxin slow the AV node?", "It is vagomimetic (increases vagal tone)", ["It blocks sodium channels", "It blocks beta receptors", "It blocks potassium channels"], "Vagomimetic."),
          q("How does digoxin increase contractility?", "More intracellular sodium leads to more intracellular calcium", ["It blocks calcium entry", "It stimulates beta-1 receptors", "It lowers potassium"], "Na then Ca.")],
        [q("A patient with HFrEF and AF with a rate of 110 on maximal beta blocker needs more rate control without lowering BP. Which drug fits?", "Digoxin", ["Verapamil", "Flecainide", "Adenosine"], "Digoxin in HFrEF + AF."),
          q("A student asks why digoxin helps both heart failure and AF. Best answer?", "It raises intracellular calcium for contractility and increases vagal tone to slow the AV node", ["It blocks potassium for both", "It is a diuretic", "It dilates arteries"], "Two mechanisms.")]),
      C("Kinetics, levels and renal failure",
        tbl(["", ""], [["Excretion", "<strong>Kidneys</strong> (depends on GFR)"], ["Half-life", "<strong>36–48 hours</strong>; <strong>longer in renal failure</strong>"], ["Monitoring", "<strong>Plasma levels regularly</strong>"], ["Therapeutic range", "<strong>0.5–2 ng/mL</strong>"]]) +
        hy("<strong>Narrow therapeutic window</strong>: toxicity risk rises above <strong>2.0 ng/mL</strong>. In <strong>renal failure</strong> the half-life lengthens and levels climb: reduce the dose and check levels."),
        ["digoxin-excretion", "digoxin-half-life", "digoxin-range"],
        [q("How is digoxin eliminated?", "By the kidneys", ["By the liver only", "By the lungs", "In the stool unchanged only"], "Renal."),
          q("What is the half-life of digoxin?", "36 to 48 hours", ["Under 10 seconds", "58 days", "2 hours"], "36–48 h."),
          q("What is the therapeutic range of digoxin?", "0.5 to 2 ng/mL", ["5 to 20 ng/mL", "10 to 40 ng/mL", "0.01 to 0.05 ng/mL"], "0.5–2."),
          q("What happens to digoxin's half-life in renal failure?", "It gets longer", ["It gets shorter", "No change", "It becomes zero"], "Longer."),
          q("Why does digoxin need level monitoring?", "It has a narrow therapeutic window", ["It has no side effects", "It is only given once", "It is cleared in seconds"], "Narrow window.")],
        [q("A patient stable on digoxin develops AKI. What is the risk?", "Digoxin accumulates and toxicity develops", ["Digoxin levels fall", "Nothing changes", "Digoxin becomes more effective safely"], "Renal clearance."),
          q("A patient's digoxin level is 2.6 ng/mL. How is it interpreted?", "Above range, increased toxicity risk", ["Therapeutic", "Subtherapeutic", "Lab error always"], "Over 2.0.")])
    ]),

    /* ---------- 5b ---------- */
    S("05b-digoxin-toxicity", "5b. Digoxin toxicity", "Objective 5. Slides 18–21.", [
      C("Risk factors and presentation",
        "<p>Toxicity in <strong>0.8–4%</strong> on chronic therapy; can cause <strong>fatal arrhythmias</strong>. Risk rises with levels <strong>over 2.0 ng/mL</strong>.</p>" +
        tbl(["Risk factors", "Symptoms"], [["<strong>Low body weight</strong>, <strong>advanced age</strong>, <strong>decreased renal function</strong>, <strong>hypokalemia</strong>", "<strong>Nausea and vomiting</strong>, <strong>visual changes (yellow vision, halos, blurring)</strong>, lethargy"]]) +
        tbl(["Arrhythmias and EKG", ""], [["Sinus bradycardia, AV block, PVCs, VT/VF (severe)", "<strong>Atrial or junctional tachycardia WITH AV block</strong> (characteristic): tachycardia plus nodal suppression"], ["<strong>Scooped ST depression</strong>", "Digoxin effect"], ["<strong>Hyperkalemia</strong>", "Acute toxicity (poisoned Na/K pump)"]]) +
        hy("Classic: <strong>N/V + yellow-green vision + an arrhythmia</strong> in an <strong>elderly</strong> patient with <strong>worsening kidneys or low potassium</strong>. <strong>Paroxysmal atrial tachycardia with block</strong> is the signature rhythm.") +
        note("Hypokalemia increasing toxicity is because digoxin and K+ compete for the same pump site (standard teaching)."),
        ["dig-tox-risk", "dig-tox-symptoms", "dig-tox-arrhythmias", "dig-scooped-st"],
        [q("Which electrolyte abnormality raises digoxin toxicity risk?", "Hypokalemia", ["Hypernatremia", "Hypercalcemia only in children", "Hypophosphatemia"], "Low K."),
          q("Which visual change is classic for digoxin toxicity?", "Yellow vision or halos", ["Double vision only", "Floaters", "Night blindness"], "Xanthopsia."),
          q("What is the most common symptom of digoxin toxicity?", "Nausea and vomiting", ["Itching", "Diarrhea only", "Cough"], "GI."),
          q("Which rhythm is characteristic of digoxin toxicity?", "Atrial or junctional tachycardia with AV block", ["Atrial flutter with 2:1 only", "Torsades", "Sinus tachycardia alone"], "Tachycardia with block."),
          q("What EKG ST change does digoxin cause?", "Scooped ST depression", ["Tombstone ST elevation", "Saddle-shaped ST elevation", "Delta waves"], "Scooped."),
          q("Which patient factors raise digoxin toxicity risk?", "Low body weight, older age, decreased renal function", ["Young age and obesity", "High potassium and good kidneys", "Male sex only"], "Slide 18."),
          q("Which potassium finding can occur in acute digoxin toxicity?", "Hyperkalemia", ["Hypokalemia only", "Normal always", "Hypercalcemia instead"], "Pump inhibition.")],
        [q("An 84-year-old woman on digoxin and furosemide has nausea, sees yellow halos around lights, and has K 2.9 and creatinine up from 1.0 to 2.1. What is happening?", "Digoxin toxicity", ["Migraine", "Stroke", "Viral gastroenteritis"], "Classic."),
          q("A patient on digoxin has atrial tachycardia at 150 with 2:1 AV block and scooped ST segments. What should be checked first?", "A digoxin level and potassium", ["Troponin only", "TSH only", "Lipase"], "Dig toxicity rhythm.")]),
      C("Treating digoxin toxicity",
        tbl(["Treatment", "When / how"], [
          ["<strong>Digoxin immune Fab (DigiFab, Digibind)</strong>", "<strong>Binds digoxin.</strong> For <strong>life-threatening arrhythmias</strong>, <strong>K over 5.5</strong>, or <strong>end-organ damage</strong> (renal failure, AMS)"],
          ["<strong>Activated charcoal</strong>", "Within <strong>1–2 hours</strong> of ingestion; <strong>1 g/kg (max 50 g)</strong>; patient must be alert and protect the airway"],
          ["Temporizing", "<strong>Atropine</strong> for bradycardia; <strong>IV fluids</strong> for hypotension"]]) +
        mn("<strong>Fab for the Fatal three</strong>: arrhythmia, potassium over 5.5, organ damage."),
        ["digifab", "dig-charcoal", "dig-temporizing"],
        [q("What is the antidote for digoxin toxicity?", "Digoxin immune Fab (DigiFab)", ["Naloxone", "Flumazenil", "Protamine"], "DSFab."),
          q("What potassium level is an indication for DigiFab?", "Over 5.5", ["Under 3.5", "Exactly 4.0", "Over 4.0"], "K over 5.5."),
          q("When is activated charcoal helpful in digoxin ingestion?", "Within 1 to 2 hours, if the patient can protect the airway", ["After 24 hours", "Only in comatose patients", "Never"], "Early, alert."),
          q("What is the activated charcoal dose for digoxin ingestion?", "1 g/kg, max 50 g", ["10 g/kg", "100 g for all", "0.1 g/kg"], "1 g/kg."),
          q("What temporizing drug treats bradycardia from digoxin toxicity?", "Atropine", ["Adenosine", "Verapamil", "Metoprolol"], "Atropine."),
          q("Which end-organ problems are indications for DigiFab?", "Renal failure or altered mental status", ["Mild nausea only", "Yellow vision only", "Headache"], "End-organ damage.")],
        [q("A patient with digoxin toxicity has K 6.4 and bradycardia. Definitive treatment?", "Digoxin immune Fab", ["IV calcium alone and observe", "Activated charcoal 2 days later", "More digoxin"], "K over 5.5."),
          q("A child swallowed grandma's digoxin 45 minutes ago, is alert, with normal vitals. Early step?", "Activated charcoal 1 g/kg", ["DigiFab for everyone", "Atropine", "Pacing"], "Within 1–2 hours, alert."),
          q("A patient with digoxin toxicity develops VT. Treatment?", "Digoxin immune Fab", ["Watch and wait", "Charcoal alone", "Digoxin loading"], "Life-threatening arrhythmia.")])
    ]),

    /* ---------- 6a ---------- */
    S("06a-action-potentials-overview", "6a. Action potential phases and the four classes", "Objective 6. Slides 2, 23–27.", [
      C("Fast (ventricular) vs slow (nodal) action potentials",
        tbl(["Phase", "<strong>Fast response</strong> (atria, ventricles, Purkinje)", "<strong>Slow response</strong> (SA and AV nodes)"], [
          ["0", "<strong>Na+ in</strong> (fast upstroke)", "<strong>Ca2+ in</strong> (slow upstroke)"],
          ["1", "Notch (early repolarization)", "None"],
          ["2", "<strong>Ca2+ plateau</strong>", "None"],
          ["3", "<strong>K+ out</strong> (repolarization)", "<strong>K+ out</strong>"],
          ["4", "Stable resting potential (about -90 mV)", "<strong>Automaticity</strong>: slow drift up to threshold (about -40 mV)"]]) +
        hy("<strong>Ventricular phase 0 = sodium. Nodal phase 0 = calcium.</strong> So Na blockers slow the ventricles; Ca blockers slow the nodes.") +
        "<p>Arrhythmias come from <strong>abnormal pacemaker activity</strong> or <strong>abnormal impulse propagation</strong> (re-entry). Drugs reduce ectopic firing, change conduction or refractoriness, and break re-entry circuits.</p>",
        ["fast-ap-phases", "slow-ap-phases", "arrhythmia-mechanisms"],
        [q("Which ion causes phase 0 in ventricular myocytes?", "Sodium entering", ["Calcium entering", "Potassium leaving", "Chloride entering"], "Fast Na."),
          q("Which ion causes phase 0 in the SA and AV nodes?", "Calcium entering", ["Sodium entering", "Potassium leaving", "Magnesium entering"], "Ca-dependent."),
          q("Which phase is the ventricular plateau and which ion drives it?", "Phase 2, calcium", ["Phase 0, sodium", "Phase 3, potassium", "Phase 4, chloride"], "Ca plateau."),
          q("Which ion movement causes phase 3 repolarization?", "Potassium leaving the cell", ["Sodium entering", "Calcium entering", "Chloride leaving"], "K out."),
          q("What does phase 4 represent in nodal cells?", "Automaticity (spontaneous depolarization)", ["The plateau", "Rapid upstroke", "Full repolarization only"], "Pacemaker drift."),
          q("What are the two basic causes of arrhythmias?", "Abnormal pacemaker activity and abnormal impulse propagation", ["Infection and inflammation", "High and low blood pressure", "Valve disease and anemia"], "Slide 23.")],
        [q("A drug slows conduction in ventricular muscle but barely affects the AV node. Which channel does it most likely block?", "Fast sodium channels", ["L-type calcium channels", "Beta receptors", "A1 receptors"], "Ventricular phase 0 is Na.")]),
      C("Vaughan Williams classes and choosing by rhythm",
        tbl(["Class", "Target", "Phase", "Drugs"], [
          ["<strong>I</strong>", "<strong>Na+ channels</strong>", "<strong>0</strong> (fast tissue)", "IA procainamide, quinidine, disopyramide; IB lidocaine, mexiletine; IC flecainide, propafenone"],
          ["<strong>II</strong>", "<strong>Beta receptors</strong>", "<strong>4</strong> (nodes)", "Metoprolol, atenolol, esmolol, bisoprolol; carvedilol, propranolol, sotalol, labetalol, timolol"],
          ["<strong>III</strong>", "<strong>K+ channels</strong>", "<strong>3</strong>", "Amiodarone, sotalol, dronedarone, ibutilide, dofetilide"],
          ["<strong>IV</strong>", "<strong>L-type Ca2+</strong>", "<strong>0 nodal / 2</strong>", "Diltiazem, verapamil"]]) +
        mn("<strong>\"Some Block Potassium Channels\"</strong>: I Sodium, II Beta, III Potassium, IV Calcium.") +
        tbl(["Rhythm", "Drug"], [["Regular AV-node-dependent SVT (AVNRT, orthodromic AVRT)", "<strong>Vagal maneuvers, then adenosine</strong>"], ["AF/flutter rate control (no pre-excitation)", "<strong>Beta blocker or diltiazem/verapamil</strong>; digoxin in selected cases"], ["Rhythm control, VT", "<strong>Class I or III</strong> (by structure, QTc, kidneys)"], ["<strong>Pre-excited AF (WPW)</strong>", "<strong>Avoid AV nodal blockers</strong> (adenosine, BB, CCB, digoxin) <strong>and IV amiodarone</strong>"]]) +
        hy("Before choosing: <strong>unstable?</strong> <strong>Irregular or pre-excited?</strong> Then <strong>EF, structural disease, QTc, renal function</strong>."),
        ["vw-classes", "drug-by-rhythm", "pre-excited-af-avoid"],
        [q("Which Vaughan Williams class is the beta blockers?", "Class II", ["Class I", "Class III", "Class IV"], "II."),
          q("Which class blocks potassium channels?", "Class III", ["Class I", "Class II", "Class IV"], "III."),
          q("Which class are diltiazem and verapamil?", "Class IV", ["Class I", "Class II", "Class III"], "IV."),
          q("Which drugs should be avoided in pre-excited AF?", "AV nodal blockers and IV amiodarone", ["Procainamide", "Synchronized cardioversion", "Ibutilide"], "Slide 2 safety exception."),
          q("What is first-line drug therapy for a stable regular AV-node-dependent SVT after vagal maneuvers?", "Adenosine", ["Digoxin", "Flecainide", "Lidocaine"], "Adenosine."),
          q("Which drug classes are used for AF rate control without pre-excitation?", "Beta blockers or diltiazem/verapamil", ["Class IB", "Atropine", "Adenosine"], "AV nodal slowing.")],
        [q("A stable patient with known WPW has irregular wide-complex AF at 250. Which drug should be avoided?", "Diltiazem", ["Procainamide", "Ibutilide", "Synchronized cardioversion if unstable"], "AV nodal blocker."),
          q("A stable patient has AF with RVR at 140 and no accessory pathway. Which drug class controls the rate?", "Beta blocker or non-dihydropyridine CCB", ["Class IB", "Anticholinergic", "Class IC alone"], "Rate control.")])
    ]),

    /* ---------- 6b ---------- */
    S("06b-class-i-moa", "6b. Class I: sodium channel blockers (mechanism)", "Objective 6. Slides 25, 28.", [
      C("Class I mechanism",
        "<ol class=\"concept-chain\"><li>Block <strong>fast Na+ channels</strong></li><li>Slower <strong>phase 0</strong> upstroke in atrial, ventricular and Purkinje tissue</li><li><strong>Slower conduction</strong> (QRS widens)</li><li>Re-entry and ectopic foci suppressed</li></ol>" +
        hy("<strong>IA and IC also block K+ channels</strong>: slow repolarization, longer action potential. <strong>IC</strong> dissociates slowly: <strong>use-dependence</strong> (stronger at fast rates) and <strong>more proarrhythmia</strong>, especially in diseased hearts."),
        ["class-i-moa", "class-i-k-block", "use-dependence"],
        [q("Which phase do Class I drugs affect?", "Phase 0", ["Phase 2", "Phase 3 only", "Phase 4 only"], "Na upstroke."),
          q("What do Class I drugs do to ventricular conduction?", "Slow it", ["Speed it", "No effect", "Block the AV node only"], "Slower conduction."),
          q("Which Class I subgroups also block potassium channels?", "IA and IC", ["IB only", "IB and IC", "None"], "IA and IC."),
          q("What is use-dependence?", "A stronger drug effect at faster heart rates", ["A stronger effect at slow rates", "Needing more drug over time", "Addiction"], "IC property."),
          q("Which EKG interval widens most with Class I drugs?", "QRS", ["PR only", "RR only", "None"], "Slower ventricular conduction.")],
        [q("A patient on flecainide has a much wider QRS during exercise than at rest. Which property explains this?", "Use-dependence of Class IC drugs", ["Reverse use-dependence", "Beta blockade", "Vagal tone"], "Stronger at fast rates.")])
    ]),

    /* ---------- 6c ---------- */
    S("06c-class-ii-moa", "6c. Class II: beta blockers (mechanism)", "Objective 6. Slides 26, 36–37.", [
      C("Class II mechanism",
        "<ol class=\"concept-chain\"><li>Block <strong>beta-adrenergic</strong> (sympathetic) stimulation</li><li><strong>Flatter phase 4 slope</strong> in the SA node: slower automaticity</li><li><strong>Slower AV nodal conduction</strong>, <strong>longer AV refractoriness</strong></li><li>Slower heart rate, longer PR</li></ol>" +
        hy("<strong>Class II acts on phase 4</strong> of the <strong>nodes</strong>. Some beta blockers also have membrane-stabilizing activity and lengthen the refractory period."),
        ["class-ii-moa", "class-ii-phase4"],
        [q("Which phase do beta blockers mainly affect?", "Phase 4 of nodal cells", ["Phase 0 of ventricular cells", "Phase 2", "Phase 1"], "Phase 4."),
          q("How do beta blockers slow the heart?", "By blocking sympathetic stimulation of the SA and AV nodes", ["By blocking sodium channels", "By opening potassium channels", "By raising vagal tone directly"], "Beta blockade."),
          q("What do beta blockers do to the PR interval?", "Lengthen it", ["Shorten it", "No change", "Abolish it"], "Slower AV conduction.")],
        [q("A patient with AF with RVR gets IV metoprolol and the rate falls from 140 to 95. Where did the drug act?", "SA and AV nodes, slowing AV conduction", ["Ventricular sodium channels", "The accessory pathway", "The lungs"], "Nodal.")])
    ]),

    /* ---------- 6d ---------- */
    S("06d-class-iii-moa", "6d. Class III: potassium channel blockers (mechanism)", "Objective 6. Slides 25, 42–44.", [
      C("Class III mechanism",
        "<ol class=\"concept-chain\"><li>Block the <strong>rapid K+ current</strong></li><li>K+ leaves slowly: <strong>phase 3 is prolonged</strong></li><li><strong>Longer action potential and refractory period</strong> (no effect on phase 0 or resting potential)</li><li>Less excitability, re-entry and ectopic foci suppressed</li><li><strong>QT prolongation</strong>: risk of <strong>torsades</strong></li></ol>" +
        hy("<strong>Reverse use-dependence</strong> (sotalol, dofetilide, ibutilide): the action potential is <strong>more prolonged at slow heart rates</strong>, so torsades risk is highest with bradycardia.") +
        "<p>Uses: <strong>rhythm control in AF/flutter</strong>, <strong>VT/VF</strong> treatment and prevention, conversion of atrial arrhythmias. Choose by structural disease, renal function and torsades risk.</p>",
        ["class-iii-moa", "class-iii-qt", "reverse-use-dependence", "class-iii-uses"],
        [q("Which phase do Class III drugs prolong?", "Phase 3", ["Phase 0", "Phase 4", "Phase 1"], "Repolarization."),
          q("What EKG interval do Class III drugs prolong?", "QT", ["PR only", "QRS only", "None"], "QT."),
          q("What arrhythmia is the main risk of Class III drugs?", "Torsades de pointes", ["Atrial flutter", "Sinus tachycardia", "AVNRT"], "Long QT."),
          q("What is reverse use-dependence?", "More action potential prolongation at slower heart rates", ["More effect at faster rates", "No rate effect", "Loss of effect over time"], "Bradycardia worsens QT."),
          q("Which Class III drugs show reverse use-dependence?", "Sotalol, dofetilide, ibutilide", ["Lidocaine, mexiletine", "Diltiazem, verapamil", "Atropine, adenosine"], "Slide 44."),
          q("Do Class III drugs change phase 0?", "No", ["Yes, they speed it", "Yes, they block it", "Only in the AV node"], "No effect on phase 0.")],
        [q("A patient on sotalol develops a QTc of 560 and torsades during a slow junctional rhythm at night. Which property explains the timing?", "Reverse use-dependence: more QT prolongation at slow rates", ["Use-dependence", "Beta agonism", "Vagolytic effect"], "Slow rate.")])
    ]),

    /* ---------- 6e ---------- */
    S("06e-class-iv-moa", "6e. Class IV: calcium channel blockers (mechanism)", "Objective 6. Slides 25–26, 57.", [
      C("Class IV mechanism",
        "<ol class=\"concept-chain\"><li>Block <strong>L-type Ca2+ channels</strong></li><li>Slower <strong>phase 0</strong> in <strong>SA and AV nodes</strong> (calcium-dependent)</li><li><strong>Slower AV conduction</strong>, <strong>longer AV refractoriness</strong></li><li>Lower heart rate; also less Ca in ventricular phase 2</li></ol>" +
        hy("Only the <strong>non-dihydropyridines</strong> (<strong>diltiazem, verapamil</strong>) are antiarrhythmic: they are <strong>selective for the myocardium</strong> with <strong>less systemic vasodilation</strong>. Main effect: <strong>AV nodal slowing</strong>."),
        ["class-iv-moa", "class-iv-nondhp"],
        [q("Which channel do Class IV drugs block?", "L-type calcium channels", ["Fast sodium channels", "Rapid potassium channels", "Beta receptors"], "L-type Ca."),
          q("Where is the main antiarrhythmic effect of Class IV drugs?", "The AV node", ["The Purkinje fibers", "The accessory pathway", "The ventricular muscle only"], "AV nodal slowing."),
          q("Which calcium channel blockers are antiarrhythmics?", "Diltiazem and verapamil", ["Amlodipine and nifedipine", "Felodipine", "Nicardipine"], "Non-dihydropyridines."),
          q("Why do diltiazem and verapamil cause less vasodilation than amlodipine?", "They are more selective for the myocardium", ["They are beta blockers", "They block sodium", "They are diuretics"], "Myocardial selectivity.")],
        [q("A resident wants amlodipine for AF rate control. Why is it the wrong choice?", "Dihydropyridines dilate vessels but do not slow the AV node", ["Amlodipine is a beta blocker", "Amlodipine causes torsades", "Amlodipine is too strong"], "Use diltiazem or verapamil.")])
    ]),

    /* ---------- 7a ---------- */
    S("07a-class-i-subclasses", "7a. Comparing class IA, IB and IC", "Objective 7. Slides 24, 28.", [
      C("IA vs IB vs IC",
        tbl(["", "<strong>IA</strong>", "<strong>IB</strong>", "<strong>IC</strong>"], [
          ["Drugs", "<strong>Procainamide</strong>, quinidine, disopyramide", "<strong>Lidocaine</strong>, mexiletine", "<strong>Flecainide</strong>, propafenone"],
          ["Dissociation in diastole", "<strong>Intermediate</strong>", "<strong>Rapid</strong>", "<strong>Slow</strong>"],
          ["K+ block", "Yes: longer AP, QT", "No", "Yes"],
          ["Key use", "WPW (antidromic AVRT), stable VT", "<strong>Ventricular</strong> arrhythmias (VT/VF)", "AF and VT <strong>without structural heart disease</strong>"],
          ["Key danger", "QT, lupus-like syndrome", "CNS toxicity", "<strong>Proarrhythmia</strong> in diseased hearts"]]) +
        mn("<strong>\"Double Quarter Pounder, Lettuce Mayo, Fries Please\"</strong>: IA Disopyramide, Quinidine, Procainamide; IB Lidocaine, Mexiletine; IC Flecainide, Propafenone.") +
        hy("Dissociation speed: <strong>IB fastest, IA in between, IC slowest</strong>. Slow dissociation = drug lingers = <strong>use-dependence</strong> and <strong>proarrhythmia</strong>."),
        ["class-ia", "class-ib", "class-ic", "class-i-dissociation"],
        [q("Which Class I subgroup dissociates most rapidly?", "IB", ["IA", "IC", "All equal"], "IB rapid."),
          q("Which Class I subgroup dissociates most slowly?", "IC", ["IA", "IB", "All equal"], "IC slow."),
          q("Which drugs are Class IA?", "Procainamide, quinidine, disopyramide", ["Lidocaine, mexiletine", "Flecainide, propafenone", "Amiodarone, sotalol"], "IA."),
          q("Which drugs are Class IB?", "Lidocaine and mexiletine", ["Procainamide and quinidine", "Flecainide and propafenone", "Diltiazem and verapamil"], "IB."),
          q("Which drugs are Class IC?", "Flecainide and propafenone", ["Lidocaine and mexiletine", "Procainamide and disopyramide", "Esmolol and metoprolol"], "IC."),
          q("Which Class I subgroup has the highest proarrhythmic risk in diseased myocardium?", "IC", ["IB", "IA", "None"], "IC."),
          q("Which Class I subgroup does NOT block potassium channels?", "IB", ["IA", "IC", "All block K"], "IB.")],
        [q("A patient with prior MI and low EF needs an antiarrhythmic for AF. Why avoid flecainide?", "Class IC drugs are proarrhythmic in structural heart disease", ["It is too weak", "It only works in VT", "It causes hypothyroidism"], "Avoid IC with structural disease."),
          q("A patient in VT with a pulse needs a sodium channel blocker that acts mainly on ventricular tissue. Which subgroup?", "IB (lidocaine)", ["IC (flecainide)", "IA (quinidine) for AF", "Class IV"], "IB targets ventricles.")])
    ]),

    /* ---------- 7b ---------- */
    S("07b-beta-blocker-subclasses", "7b. Selective vs nonselective beta blockers", "Objective 7. Slides 24, 38–39.", [
      C("Selective vs nonselective",
        tbl(["", "<strong>Selective (beta-1)</strong>", "<strong>Nonselective (beta-1 and beta-2)</strong>"], [
          ["Target", "Mostly <strong>cardiac</strong>", "Heart <strong>and lungs/vessels</strong>"],
          ["Drugs", "<strong>Metoprolol</strong> (Lopressor), <strong>atenolol</strong> (Tenormin), <strong>esmolol</strong> (Brevibloc), <strong>bisoprolol</strong> (Zebeta)", "<strong>Carvedilol</strong> (Coreg), <strong>propranolol</strong> (Inderal), <strong>sotalol</strong> (Betapace), <strong>labetalol</strong> (Normodyne), timolol"],
          ["Lungs", "Safer in asthma/COPD", "<strong>Bronchospasm risk</strong> (block beta-2 bronchodilation)"]]) +
        mn("Beta-1 selective = <strong>A BEaM</strong> (aimed at the heart): <strong>A</strong>tenolol, <strong>B</strong>isoprolol, <strong>E</strong>smolol, <strong>M</strong>etoprolol.") +
        hy("Adverse effects of all beta blockers: <strong>AV block</strong> (1st, 2nd, complete; usually reverses with dose reduction), <strong>bronchospasm</strong> (nonselective), and <strong>withdrawal</strong> in CAD (rebound ischemia, MI, VT, sudden death): <strong>never stop abruptly</strong>."),
        ["bb-selective", "bb-nonselective", "bb-adverse", "bb-withdrawal"],
        [q("Which beta blocker is cardioselective?", "Metoprolol", ["Propranolol", "Carvedilol", "Labetalol"], "Beta-1 selective."),
          q("Which beta blocker is nonselective?", "Propranolol", ["Atenolol", "Esmolol", "Bisoprolol"], "Nonselective."),
          q("Why are nonselective beta blockers risky in asthma?", "Beta-2 blockade prevents bronchodilation", ["They raise heart rate", "They cause hyperkalemia only", "They dilate airways too much"], "Bronchospasm."),
          q("What is the danger of stopping a beta blocker abruptly in CAD?", "Rebound ischemia, MI, VT or sudden death", ["Hypotension", "Bradycardia", "Hypoglycemia"], "Withdrawal."),
          q("What is the brand name of esmolol?", "Brevibloc", ["Lopressor", "Tenormin", "Coreg"], "Brevibloc."),
          q("What is the brand name of carvedilol?", "Coreg", ["Inderal", "Zebeta", "Betapace"], "Coreg."),
          q("Which beta blocker is also a Class III drug?", "Sotalol", ["Atenolol", "Esmolol", "Metoprolol"], "Sotalol."),
          q("How is beta blocker-related AV block usually managed?", "Dose reduction or discontinuation", ["Increase the dose", "Add verapamil", "Ignore it"], "Usually resolves.")],
        [q("A patient with moderate asthma needs a beta blocker for rate control. Which is the better choice?", "Metoprolol", ["Propranolol", "Carvedilol", "Timolol"], "Cardioselective."),
          q("A patient with CAD ran out of metoprolol 2 days ago and now has chest pain and PVCs. What happened?", "Beta blocker withdrawal with rebound ischemia", ["Beta blocker toxicity", "An allergy", "Hypokalemia only"], "Withdrawal.")])
    ]),

    /* ---------- 8a ---------- */
    S("08a-procainamide", "8a. Procainamide (Class IA)", "Objective 8. Slide 29.", [
      C("Procainamide",
        tbl(["", ""], [
          ["Uses", "<strong>First line: antidromic (wide-complex) AVRT in WPW</strong>; refractory orthodromic AVRT; <strong>stable VT with a pulse</strong>"],
          ["IV dose", "10–17 mg/kg at 20–50 mg/min (or 100 mg every 5 min); maintenance 1–4 mg/min"],
          ["PO", "50 mg/kg/day divided every 6 hours"],
          ["Adverse", "<strong>QRS, PR, QT prolongation</strong>, bradycardia, <strong>hypotension</strong>, <strong>drug-induced lupus-like syndrome</strong>, blood dyscrasias"],
          ["Monitor", "<strong>BP</strong> and <strong>serial EKGs</strong>"]]) +
        hy("<strong>Procainamide is the drug for WPW</strong> (pre-excited tachycardia): it slows the accessory pathway instead of blocking the AV node.") +
        note("Stopping the infusion if the QRS widens by 50% or hypotension occurs is standard ACLS teaching."),
        ["procainamide-uses", "procainamide-adverse", "procainamide-lupus"],
        [q("What is the first-line drug for antidromic wide-complex AVRT in WPW?", "Procainamide", ["Adenosine", "Diltiazem", "Digoxin"], "Procainamide."),
          q("Which autoimmune syndrome can procainamide cause?", "Drug-induced lupus", ["Myasthenia gravis", "Graves disease", "Rheumatoid arthritis"], "Lupus-like."),
          q("What must be monitored during procainamide infusion?", "Blood pressure and serial EKGs", ["Liver enzymes only", "Lung function", "Visual fields"], "BP, EKG."),
          q("Which EKG intervals does procainamide prolong?", "QRS, PR and QT", ["Only PR", "None", "Only RR"], "Cardiac toxicity."),
          q("Which Class is procainamide?", "IA", ["IB", "IC", "III"], "IA.")],
        [q("A stable patient with WPW has a wide, regular tachycardia (antidromic AVRT). Which drug?", "Procainamide", ["Adenosine", "Verapamil", "Metoprolol"], "Procainamide."),
          q("Months on oral procainamide, a patient develops arthralgias, a malar rash and a positive antihistone antibody. Cause?", "Drug-induced lupus from procainamide", ["New rheumatoid arthritis", "Lyme disease", "Digoxin toxicity"], "Lupus-like syndrome."),
          q("During a procainamide infusion, BP falls to 80/50 and the QRS widens. Next step?", "Stop the infusion", ["Increase the rate", "Add verapamil", "Give adenosine"], "Toxicity.")])
    ]),

    /* ---------- 8b ---------- */
    S("08b-flecainide", "8b. Flecainide (Class IC)", "Objective 8. Slides 33–35.", [
      C("Flecainide (Tambocor)",
        tbl(["", ""], [
          ["Uses", "Prevent sustained VT in patients <strong>without structural heart disease</strong>; AF/flutter prevention when not an ablation candidate and others failed; PVCs (off-label)"],
          ["Dose", "50–100 mg PO every 12 h; increase by 50 mg BID every 4 days; <strong>max 400 mg/day</strong>"],
          ["Contraindication", "<strong>Structural heart disease</strong>"],
          ["Adverse", "<strong>Proarrhythmia</strong>, long PR, 2nd degree block, dizziness, <strong>visual disturbances</strong>, dyspnea"],
          ["Monitor", "EKG, BP, HR; trough levels (renal or hepatic impairment)"]]) +
        hy("<strong>Boxed warnings</strong>: <strong>proarrhythmia</strong> (more PVCs, VT, VF, death in AF patients; not for chronic AF); <strong>atrial flutter with 1:1 conduction</strong>: give an <strong>AV nodal blocker</strong> first (beta blocker, digoxin).") +
        "<p><strong>Milk</strong> decreases absorption: adjust dose and check levels if milk intake changes.</p>",
        ["flecainide-uses", "flecainide-ci", "flecainide-boxed", "flecainide-milk"],
        [q("What is the brand name of flecainide?", "Tambocor", ["Corvert", "Tikosyn", "Betapace"], "Tambocor."),
          q("Which patients must not take flecainide?", "Patients with structural heart disease", ["Young patients with normal hearts", "Patients with PVCs only", "Patients over 18"], "Structural disease."),
          q("Why is an AV nodal blocker given with flecainide in atrial flutter?", "Flecainide can slow flutter enough to allow 1:1 AV conduction", ["Flecainide causes bradycardia", "To treat asthma", "To prevent lupus"], "1:1 conduction risk."),
          q("Which food decreases flecainide absorption?", "Milk", ["Grapefruit juice", "Bananas", "Leafy greens"], "Milk."),
          q("What is the maximum flecainide dose?", "400 mg/day", ["100 mg/day", "1 g/day", "50 mg/day"], "400."),
          q("What is the main boxed warning of flecainide?", "Proarrhythmia including VT, VF and death", ["Pulmonary fibrosis", "Hepatotoxicity", "Agranulocytosis"], "Proarrhythmic.")],
        [q("A 30-year-old with paroxysmal AF and a structurally normal heart on echo is not ready for ablation. Which drug can be used for rhythm control?", "Flecainide with an AV nodal blocker", ["Flecainide alone in a patient with prior MI", "Atropine", "Adenosine daily"], "Normal heart."),
          q("A patient on flecainide stops drinking milk and develops dizziness and a wider QRS. Why?", "More flecainide is absorbed without milk, raising levels", ["Milk caused an allergy", "Calcium deficiency", "Unrelated"], "Milk interaction."),
          q("A patient with ischemic cardiomyopathy (EF 30%) asks about flecainide for AF. Best answer?", "Contraindicated: structural heart disease", ["Safe at any dose", "Safe if taken with milk", "Safe if under 400 mg"], "Proarrhythmia.")])
    ]),

    /* ---------- 8c ---------- */
    S("08c-metoprolol", "8c. Metoprolol (Class II)", "Objective 8. Slide 41.", [
      C("Metoprolol (Lopressor, Toprol XL)",
        tbl(["", ""], [
          ["Uses", "<strong>Rate control in stable AF/flutter with RVR</strong>; MAT (no HF or bronchospasm); symptomatic PACs/PVCs; <strong>third-line</strong> for AVNRT and orthodromic AVRT after vagal maneuvers and adenosine"],
          ["Dose", "<strong>IV 5 mg every 5 min, up to 3 doses</strong>; PO 25 mg BID"],
          ["Adverse", "Depression, <strong>fatigue</strong>, <strong>sexual dysfunction</strong>, bradycardia, hypotension, less exercise tolerance"],
          ["Contraindications", "<strong>Sick sinus syndrome</strong>, <strong>2nd or 3rd degree block</strong> without a pacemaker, <strong>decompensated HF</strong>, <strong>hypotension</strong>, hypersensitivity"]]) +
        mn("<strong>5, 5, 5</strong>: 5 mg IV every 5 minutes, up to 3 doses (15 mg)."),
        ["metoprolol-uses", "metoprolol-dose", "metoprolol-adverse", "metoprolol-ci"],
        [q("What is the IV metoprolol dose for rate control?", "5 mg every 5 minutes, up to 3 doses", ["50 mg IV once", "1 mg every 3 minutes", "0.25 mg/kg"], "5 mg x3."),
          q("What are the brand names of metoprolol?", "Lopressor and Toprol XL", ["Tenormin and Zebeta", "Coreg and Inderal", "Cardizem and Calan"], "Lopressor."),
          q("Which conduction problem is a contraindication to metoprolol?", "Second or third degree heart block without a pacemaker", ["Right bundle branch block", "First degree AV block", "Sinus arrhythmia"], "Contraindication."),
          q("Which heart failure state is a contraindication to metoprolol?", "Decompensated heart failure", ["Stable compensated HFrEF", "HFpEF", "Prior heart failure fully treated"], "Decompensated."),
          q("Where does metoprolol fall in AVNRT treatment?", "Third line after vagal maneuvers and adenosine", ["First line before vagal maneuvers", "Never used", "Only for VF"], "Third line."),
          q("Which side effects of metoprolol often affect adherence?", "Fatigue, depression and sexual dysfunction", ["Cough and angioedema", "Gingival hyperplasia", "Blue skin"], "Slide 41.")],
        [q("A stable patient in AF with RVR at 135, BP 130/80, no heart failure. Which IV drug and dose?", "Metoprolol 5 mg IV every 5 minutes up to 3 doses", ["Adenosine 6 mg", "Amiodarone 300 mg push", "Atropine 1 mg"], "Rate control."),
          q("A patient with AF with RVR is in acute decompensated heart failure with pulmonary edema and BP 85/50. Why avoid metoprolol?", "Decompensated HF and hypotension are contraindications", ["It is too weak", "It causes tachycardia", "It is only oral"], "Contraindications.")])
    ]),

    /* ---------- 8d ---------- */
    S("08d-sotalol", "8d. Sotalol (Class II and III)", "Objective 8. Slides 52–53.", [
      C("Sotalol (Betapace)",
        tbl(["", ""], [
          ["Mechanism", "<strong>Dual</strong>: <strong>beta blocker (II)</strong> and <strong>K+ blocker (III)</strong>"],
          ["Uses", "<strong>Life-threatening ventricular arrhythmias</strong>; <strong>maintaining sinus rhythm in AF</strong>; off-label SVT, stable VT, PVCs"],
          ["Dose", "By <strong>renal function and QTc</strong>: PO 80 mg BID; IV 60–80 mg over 1–5 h"],
          ["Adverse", "Bradycardia, palpitations, fatigue, dizziness, dyspnea, weakness; <strong>beta blocker withdrawal</strong> if stopped abruptly"],
          ["Contraindications", "<strong>QTc over 450</strong>, <strong>CrCl under 40</strong>, <strong>asthma/bronchospasm</strong>, SSS, AV block, bradycardia, decompensated HF, cardiogenic shock"],
          ["Interactions", "Other QT-prolonging drugs"]]) +
        mn("Sotalol: <strong>450 and 40</strong>. No if QTc over 450 or CrCl under 40."),
        ["sotalol-moa", "sotalol-uses", "sotalol-ci"],
        [q("What makes sotalol unique among Class III drugs?", "It is also a beta blocker", ["It blocks sodium channels only", "It is a calcium channel blocker", "It has no QT effect"], "Dual action."),
          q("What baseline QTc contraindicates sotalol?", "Over 450 msec", ["Over 350 msec", "Over 600 msec only", "Any QTc"], "QTc over 450."),
          q("What creatinine clearance contraindicates sotalol?", "Under 40 mL/min", ["Under 90 mL/min", "Under 10 mL/min only", "Over 40 mL/min"], "CrCl under 40."),
          q("Why is sotalol contraindicated in asthma?", "It is a nonselective beta blocker", ["It causes pulmonary fibrosis", "It is a bronchodilator", "It contains iodine"], "Bronchospasm."),
          q("What is the brand name of sotalol?", "Betapace", ["Multaq", "Corvert", "Pacerone"], "Betapace."),
          q("What is sotalol's dose based on?", "Renal function and QTc", ["Weight only", "Age only", "Liver enzymes"], "Slide 52.")],
        [q("A patient with AF has a QTc of 470 and CrCl 35. Can sotalol be started?", "No, both the QTc and kidney function contraindicate it", ["Yes, at 80 mg BID", "Yes, if given IV", "Yes, with azithromycin"], "450 and 40."),
          q("A patient on sotalol is prescribed a fluoroquinolone. Concern?", "Additive QT prolongation and torsades risk", ["Hypoglycemia only", "Liver failure", "No concern"], "QT drugs.")])
    ]),

    /* ---------- 8e ---------- */
    S("08e-ibutilide", "8e. Ibutilide (Class III)", "Objective 8. Slide 54.", [
      C("Ibutilide (Corvert)",
        tbl(["", ""], [
          ["Uses", "<strong>Chemical conversion of AF/flutter</strong>; stable AF/flutter with RVR <strong>in WPW</strong>"],
          ["Dose (IV over 10 min)", "<strong>Under 60 kg: 0.01 mg/kg</strong>; <strong>60 kg or more: 1 mg</strong>"],
          ["Mechanism", "Mildly slows sinus node; <strong>prolongs QT</strong> by enhancing slow inward Na+ current and blocking K+ during repolarization"],
          ["Adverse", "<strong>Proarrhythmia</strong> (monomorphic and <strong>polymorphic VT</strong>, SVT, AV block), headache"],
          ["Interactions / CI", "QT-prolonging drugs; hypersensitivity"]]) +
        hy("Ibutilide is <strong>IV only</strong>, for <strong>converting</strong> AF/flutter. Watch for <strong>torsades</strong> on telemetry."),
        ["ibutilide-uses", "ibutilide-dose", "ibutilide-adverse"],
        [q("What is the brand name of ibutilide?", "Corvert", ["Tikosyn", "Multaq", "Tambocor"], "Corvert."),
          q("What is ibutilide used for?", "Chemical conversion of AF or flutter", ["Long-term rate control", "Bradycardia", "VF arrest"], "Conversion."),
          q("What is the ibutilide dose for a patient 60 kg or more?", "1 mg IV over 10 minutes", ["0.01 mg/kg IV push", "6 mg rapid push", "300 mg bolus"], "1 mg."),
          q("What is the ibutilide dose for a patient under 60 kg?", "0.01 mg/kg IV over 10 minutes", ["1 mg IV push", "10 mg/kg", "0.5 mg/kg"], "Weight-based."),
          q("What is the main risk of ibutilide?", "Polymorphic VT (torsades)", ["Pulmonary fibrosis", "Hypothyroidism", "Lupus"], "Proarrhythmia."),
          q("Can ibutilide be used for AF with RVR in WPW?", "Yes, in stable patients", ["No, never", "Only with digoxin", "Only orally"], "Slide 54.")],
        [q("A stable 75 kg patient with new atrial flutter is chosen for chemical cardioversion. Which ibutilide dose?", "1 mg IV over 10 minutes", ["0.75 mg/kg IV push", "6 mg IV push", "10 mg PO"], "60 kg or more."),
          q("Shortly after ibutilide, a patient's QT lengthens and polymorphic VT appears. What is this?", "Torsades from ibutilide", ["Expected sinus rhythm", "Atrial flutter returning", "Digoxin toxicity"], "Proarrhythmia.")])
    ]),

    /* ---------- 8f ---------- */
    S("08f-dofetilide", "8f. Dofetilide (Class III)", "Objective 8. Slides 55–56.", [
      C("Dofetilide (Tikosyn)",
        tbl(["", ""], [
          ["Uses", "<strong>Termination and prevention</strong> of AF/flutter; off-label PSVT. Not first line if other drugs work; <strong>can be used in HF or prior MI</strong>"],
          ["Mechanism", "Blocks outward K+ current: <strong>prolongs repolarization and QT</strong>"],
          ["Adverse", "<strong>Torsades</strong>, headache, chest pain, dizziness, VT, VF"],
          ["Contraindications", "<strong>Congenital long QT</strong>, <strong>QTc over 440</strong>, <strong>severe renal insufficiency</strong>"],
          ["Monitoring", "<strong>Hospitalized for 3 days</strong> to start; <strong>CrCl, QT and rhythm</strong>"]]) +
        mn("<strong>Tikosyn = Tik-tok, 3 days on the clock</strong> in the hospital."),
        ["dofetilide-uses", "dofetilide-ci", "dofetilide-monitoring"],
        [q("What is the brand name of dofetilide?", "Tikosyn", ["Corvert", "Betapace", "Cordarone"], "Tikosyn."),
          q("How long must patients be hospitalized when starting dofetilide?", "3 days", ["1 hour", "2 weeks", "Not at all"], "3 days."),
          q("Which QTc contraindicates dofetilide?", "Over 440 msec", ["Over 300 msec", "Over 600 msec only", "Under 440 msec"], "QTc over 440."),
          q("What must be monitored when starting dofetilide?", "Creatinine clearance, QT and rhythm", ["Liver enzymes only", "Thyroid only", "Vision"], "CrCl, QT, rhythm."),
          q("Can dofetilide be used in heart failure or after MI?", "Yes", ["No, never", "Only if EF is normal", "Only in children"], "Slide 55."),
          q("What is the main adverse effect of dofetilide?", "Torsades de pointes", ["Pulmonary fibrosis", "Drug-induced lupus", "Blue-gray skin"], "TdP.")],
        [q("A patient with HFrEF and persistent AF needs rhythm control and has a QTc of 420 with normal kidneys. Which drug can be started in the hospital?", "Dofetilide with 3 days of monitoring", ["Flecainide at home", "Sotalol with QTc 500", "Verapamil"], "Dofetilide OK in HF."),
          q("A patient with congenital long QT syndrome asks about dofetilide for AF. Best answer?", "Contraindicated", ["Safe at half dose", "Safe if started at home", "Safe with milk"], "Congenital long QT.")])
    ]),

    /* ---------- 8g ---------- */
    S("08g-diltiazem", "8g. Diltiazem (Class IV)", "Objective 8. Slides 57–59.", [
      C("Diltiazem (Cardizem)",
        tbl(["", ""], [
          ["Uses", "<strong>Rate control in AF/flutter with RVR</strong>; MAT in bronchospasm patients; AVNRT and orthodromic AVRT after vagal maneuvers and adenosine; symptomatic PACs/PVCs"],
          ["IV dose", "<strong>0.25 mg/kg bolus (usually 10–20 mg)</strong>, then <strong>5–10 mg/h</strong> infusion titrated to rate"],
          ["PO", "120–480 mg/day in 3–4 divided doses"],
          ["Adverse", "Bradycardia, <strong>peripheral edema</strong>, rash, dizziness, fatigue, vasodilation"],
          ["Contraindications", "<strong>AF/flutter with an accessory pathway</strong> (VF risk), SSS, AV block, <strong>hypotension</strong>, <strong>recent beta blocker</strong>, <strong>VT</strong>, severe HF"]]) +
        hy("Diltiazem is a good rate-control choice in <strong>asthma/COPD</strong> (no bronchospasm) but <strong>never in WPW with AF or in VT</strong>.") +
        mn("Diltiazem bolus <strong>0.25 mg/kg</strong> (a quarter per kilo)."),
        ["diltiazem-uses", "diltiazem-dose", "diltiazem-adverse", "diltiazem-ci"],
        [q("What is the IV bolus dose of diltiazem?", "0.25 mg/kg (usually 10 to 20 mg)", ["5 mg/kg", "6 mg rapid push", "1 mg/kg"], "0.25 mg/kg."),
          q("What is the diltiazem infusion rate after the bolus?", "5 to 10 mg/h titrated to rate", ["100 mg/h", "1 mg/min", "0.5 mg/min"], "5–10 mg/h."),
          q("What is the brand name of diltiazem?", "Cardizem", ["Calan", "Coreg", "Lanoxin"], "Cardizem."),
          q("Why is diltiazem contraindicated in AF with an accessory pathway?", "It can cause VF by favoring conduction down the pathway", ["It is too slow", "It causes asthma", "It is only oral"], "VF risk."),
          q("Which common side effect of diltiazem causes ankle swelling?", "Peripheral edema", ["DVT", "Heart failure always", "Lymphedema"], "Vasodilation."),
          q("Which tachycardia is a contraindication to diltiazem?", "Ventricular tachycardia", ["Sinus tachycardia from fever", "AF with RVR", "Atrial flutter"], "VT.")],
        [q("A patient with COPD has AF with RVR at 150, BP 128/76. Which IV rate control agent avoids bronchospasm?", "Diltiazem 0.25 mg/kg", ["Propranolol", "Adenosine", "Sotalol"], "No beta-2 effect."),
          q("A patient who just received IV metoprolol is still in AF at 130 and is now hypotensive. Should diltiazem be added?", "No; recent beta blocker and hypotension are contraindications", ["Yes, double dose", "Yes, give 20 mg push", "Yes, with verapamil"], "Contraindications.")])
    ]),

    /* ---------- 8h ---------- */
    S("08h-verapamil", "8h. Verapamil (Class IV)", "Objective 8. Slides 60–61.", [
      C("Verapamil (Calan, Verelan)",
        tbl(["", ""], [
          ["Uses", "Same as diltiazem: <strong>AF/flutter rate control</strong>, MAT, AVNRT and orthodromic AVRT after adenosine, PACs/PVCs"],
          ["IV dose", "<strong>5–10 mg over at least 2 minutes</strong>; repeat 10 mg after 15–30 min if needed"],
          ["PO", "40 mg 3–4 times daily, titrated"],
          ["Adverse", "Bradycardia, AV block, <strong>decompensated HF and pulmonary edema</strong>, peripheral edema, <strong>constipation</strong>, headache"],
          ["Contraindications", "<strong>Concurrent beta blocker</strong>, <strong>HFrEF</strong>, <strong>AF/flutter with WPW</strong>, SND/SSS/AV block without a pacemaker, <strong>VT</strong>, hypotension"]]) +
        hy("Verapamil is the <strong>most negatively inotropic</strong>: avoid in <strong>HFrEF</strong>. <strong>Constipation</strong> is its signature side effect.") +
        note("Slide 61 lists \"LV block\" as an adverse effect; read as AV block."),
        ["verapamil-uses", "verapamil-dose", "verapamil-adverse", "verapamil-ci"],
        [q("What is the IV verapamil dose?", "5 to 10 mg over at least 2 minutes", ["0.25 mg/kg push", "300 mg IV", "1 mg every 3 minutes"], "5–10 mg."),
          q("Which GI side effect is classic for verapamil?", "Constipation", ["Diarrhea", "Hematemesis", "Pancreatitis"], "Constipation."),
          q("Which heart failure type is a contraindication to verapamil?", "HFrEF", ["HFpEF", "Right heart strain from PE only", "None"], "Negative inotropy."),
          q("Which drug combination with verapamil is contraindicated?", "Concurrent beta blocker", ["Aspirin", "Statin", "Acetaminophen"], "Additive block."),
          q("What are the brand names of verapamil?", "Calan and Verelan", ["Cardizem", "Lopressor", "Tenormin"], "Calan."),
          q("Can verapamil precipitate pulmonary edema?", "Yes, by worsening heart failure", ["No, never", "Only orally", "Only in children"], "Decompensated HF.")],
        [q("A patient with an EF of 25% has AF with RVR. Why avoid verapamil?", "It is negatively inotropic and can cause decompensated HF", ["It speeds the ventricle", "It causes torsades", "It is ineffective in AF"], "HFrEF."),
          q("A patient on verapamil for rate control complains of hard stools for weeks. Likely cause?", "Verapamil-induced constipation", ["Hypothyroidism", "Colon cancer always", "Dehydration only"], "Signature side effect."),
          q("A wide-complex regular tachycardia of unknown cause is assumed to be SVT and given verapamil; the patient becomes hypotensive and pulseless. What principle was violated?", "Never give verapamil for VT or uncertain wide-complex tachycardia", ["Verapamil should be given faster", "Adenosine is contraindicated in VT", "Verapamil needs a beta blocker"], "VT contraindication.")])
    ]),

    /* ---------- 9 ---------- */
    S("09-lidocaine", "9. Lidocaine: use, monitoring and toxicity", "Objective 9. Slides 30–32.", [
      C("Lidocaine use and monitoring",
        tbl(["", "Lidocaine (Class IB)"], [
          ["Uses", "<strong>Stable VT with a pulse</strong>; <strong>lidocaine or amiodarone in ACLS</strong> for pulseless VT/VF"],
          ["Dose", "<strong>1–1.5 mg/kg</strong>; repeat 0.5–0.75 mg/kg every 5–10 min (<strong>max 3 mg/kg</strong>); infusion 1–4 mg/min"],
          ["Mechanism", "Na+ blockade, mainly in <strong>rapidly depolarizing</strong> tissue (ventricular ectopic foci)"],
          ["Contraindication", "<strong>WPW</strong>"]]) +
        hy("<strong>Monitor</strong>: <strong>LFTs</strong>, <strong>neurologic signs and mental status</strong>, <strong>EKG</strong>, <strong>BP</strong>, and <strong>lidocaine levels</strong>. It is <strong>liver metabolized</strong>: severe hepatic dysfunction raises toxicity.") +
        mn("Lidocaine <strong>1–1.5 to start, 3 max</strong> (mg/kg)."),
        ["lidocaine-uses", "lidocaine-dose", "lidocaine-monitoring", "lidocaine-ci"],
        [q("What is the initial IV lidocaine dose for VT?", "1 to 1.5 mg/kg", ["5 mg/kg", "0.1 mg/kg", "300 mg flat"], "1–1.5 mg/kg."),
          q("What is the maximum total lidocaine dose?", "3 mg/kg", ["10 mg/kg", "1 mg/kg", "6 mg/kg"], "3 mg/kg."),
          q("Which lab must be monitored with lidocaine because it is liver metabolized?", "Liver function tests", ["TSH", "Lipase", "Hemoglobin A1c"], "LFTs."),
          q("What else must be monitored on a lidocaine infusion?", "Neurologic status, EKG, BP and lidocaine levels", ["Pulmonary function tests", "Vision charts", "Bone density"], "Slide 30."),
          q("Which syndrome is a contraindication to lidocaine?", "WPW", ["Long QT", "Brugada", "Asthma"], "Slide 30."),
          q("In ACLS, which drug is an alternative to amiodarone for pulseless VT or VF?", "Lidocaine", ["Adenosine", "Diltiazem", "Digoxin"], "Lidocaine or amiodarone.")],
        [q("A 70 kg patient in stable monomorphic VT will get lidocaine. Initial dose?", "70 to 105 mg IV", ["700 mg IV", "7 mg IV", "1 g IV"], "1–1.5 mg/kg."),
          q("A patient with cirrhosis is on a lidocaine infusion. Why is extra caution needed?", "Hepatic dysfunction raises lidocaine levels and toxicity", ["Cirrhosis speeds clearance", "Lidocaine is renally cleared", "No caution needed"], "Liver metabolism.")]),
      C("Lidocaine toxicity",
        tbl(["Nervous system (common)", "Cardiovascular (infrequent)"], [["<strong>Tremor</strong>, <strong>tinnitus</strong>, insomnia or drowsiness, lightheadedness, <strong>slurred speech</strong>, ataxia, agitation, <strong>hallucinations</strong>, memory problems; <strong>seizures</strong> at high levels", "Sinus slowing, <strong>asystole</strong>, <strong>hypotension</strong>, shock (overdose or rapid IV push)"]]) +
        hy("CNS effects are usually <strong>mild and dose-dependent</strong> and <strong>resolve when the infusion is slowed or stopped</strong>. <strong>CNS first, heart later.</strong>"),
        ["lidocaine-cns-tox", "lidocaine-cv-tox", "lidocaine-tox-management"],
        [q("What are the earliest signs of lidocaine toxicity?", "CNS effects such as tremor, tinnitus and slurred speech", ["Asystole", "Rash", "Hypoglycemia"], "CNS first."),
          q("What can very high lidocaine levels cause?", "Seizures", ["Hyperthyroidism", "Pulmonary fibrosis", "Lupus"], "Seizures."),
          q("How are mild CNS effects of lidocaine managed?", "Slow or stop the infusion", ["Increase the dose", "Add amiodarone", "Give digoxin"], "Dose-dependent."),
          q("Which cardiovascular toxicity can lidocaine cause?", "Asystole and hypotension", ["Hypertensive crisis", "Atrial flutter", "Sinus tachycardia"], "Infrequent."),
          q("What usually causes cardiovascular lidocaine toxicity?", "Overdose or rapid IV administration", ["Low doses", "Oral intake", "Topical cream"], "Slide 32.")],
        [q("A patient on a lidocaine drip for VT develops ringing in the ears, perioral tingling, slurred speech and confusion. Next step?", "Slow or stop the lidocaine and check a level", ["Increase the drip", "Add verapamil", "Give atropine"], "CNS toxicity."),
          q("A patient on lidocaine for 2 days with worsening liver function becomes agitated and hallucinates, then seizes. Cause?", "Lidocaine toxicity from reduced hepatic clearance", ["Alcohol withdrawal only", "Digoxin toxicity", "Hypoglycemia"], "Liver dysfunction.")])
    ]),

    /* ---------- 10 ---------- */
    S("10-beta-blocker-toxicity", "10. Beta blocker toxicity", "Objective 10. Slides 39–40.", [
      C("Beta blocker overdose",
        "<p>From <strong>suicide attempts or accidental overdose</strong>:</p>" +
        tbl(["System", "Findings"], [
          ["Cardiac", "<strong>Bradycardia</strong>, <strong>hypotension</strong>, low cardiac output, <strong>heart failure</strong>, <strong>cardiogenic shock</strong>; AV block"],
          ["Refractory heart", "In severe cases the myocardium becomes <strong>refractory to drugs and pacing</strong>: <strong>asystolic death</strong>"],
          ["Lungs", "<strong>Bronchospasm</strong>, respiratory depression"],
          ["CNS", "<strong>Altered mental status</strong>, <strong>seizures</strong>, coma"]]) +
        hy("Think beta blocker overdose: <strong>slow + low</strong> (bradycardia + hypotension) with <strong>AMS</strong> or seizures, sometimes bronchospasm.") +
        note("Treatment (glucagon, high-dose insulin, calcium, pressors, pacing) is standard teaching; the deck lists only the presentation, which is what the objective asks."),
        ["bb-tox-cardiac", "bb-tox-refractory", "bb-tox-lungs-cns"],
        [q("What are the hallmark findings of beta blocker toxicity?", "Bradycardia and hypotension", ["Tachycardia and hypertension", "Fever and sweating", "Hyperglycemia and dilated pupils"], "Slow and low."),
          q("Which shock state can beta blocker overdose cause?", "Cardiogenic shock", ["Septic shock", "Anaphylactic shock", "Hemorrhagic shock"], "Low output."),
          q("Which respiratory problem can beta blocker overdose cause?", "Bronchospasm and respiratory depression", ["Hyperventilation only", "Pneumothorax", "Pleural effusion"], "Slide 40."),
          q("What can happen to the heart in severe beta blocker poisoning?", "It becomes refractory to drugs and pacing, leading to asystole", ["It speeds up uncontrollably", "It goes into AF only", "Nothing serious"], "Refractory."),
          q("Which neurologic findings occur in beta blocker toxicity?", "Altered mental status, seizures and coma", ["Pinpoint pupils only", "Peripheral neuropathy", "Bell palsy"], "CNS effects.")],
        [q("A patient took a bottle of her husband's propranolol. HR 34, BP 70/40, wheezing, and confused. Diagnosis?", "Beta blocker overdose", ["Opioid overdose", "Anticholinergic toxicity", "Digoxin toxicity with tachycardia"], "Slow, low, bronchospasm, AMS."),
          q("Which toxidrome fits a patient with bradycardia, hypotension and a seizure after an overdose of metoprolol?", "Beta blocker toxicity", ["Atropine toxicity", "Sympathomimetic toxicity", "Lidocaine at therapeutic dose"], "Beta blocker.")])
    ]),

    /* ---------- 11a ---------- */
    S("11a-amiodarone-dosing", "11a. Amiodarone: uses, ACLS dosing and kinetics", "Objective 11. Slides 45–47.", [
      C("Amiodarone uses, mechanism and doses",
        tbl(["", "Amiodarone (Cordarone, Pacerone)"], [
          ["Uses", "<strong>Cardiac arrest</strong> (pulseless VT/VF, after shocks, CPR and epinephrine); <strong>stable VT with a pulse</strong>; unstable VT after cardioversion"],
          ["Mechanism", "Mainly <strong>K+ block (III)</strong>, plus <strong>Na+ (I), beta (II) and Ca2+ (IV)</strong> blockade"],
          ["Contraindications", "<strong>Sick sinus</strong>, <strong>AV block</strong>, sinus node dysfunction, <strong>bradycardia without a pacer</strong>, <strong>cardiogenic shock</strong>, <strong>iodine hypersensitivity</strong>"]]) +
        tbl(["Setting", "Dose"], [
          ["<strong>ACLS arrest</strong>", "<strong>300 mg IV rapid bolus</strong>, then <strong>150 mg</strong>"],
          ["<strong>Sustained VT with a pulse</strong>", "<strong>150 mg IV over 10 min</strong>, then <strong>1 mg/min x 6 h</strong>, then <strong>0.5 mg/min for 18+ h</strong>"],
          ["Oral load", "400 mg every 8–12 h for 1–2 weeks; maintenance 200–400 mg daily"]]) +
        mn("Arrest: <strong>300 then 150</strong>. Pulse: <strong>150 over 10</strong>, then <strong>1 for 6</strong>, then <strong>0.5 for 18</strong>.") +
        hy("Half-life is <strong>very long</strong>: IV 9–36 days; <strong>PO about 58 days</strong> (15–142). Hepatic metabolism."),
        ["amio-uses", "amio-moa", "amio-acls-dose", "amio-vt-pulse-dose", "amio-half-life", "amio-ci"],
        [q("What is the first amiodarone dose in pulseless VT or VF?", "300 mg IV rapid bolus", ["150 mg over 10 minutes", "6 mg rapid push", "1 mg/kg"], "300 mg."),
          q("What is the second amiodarone dose in cardiac arrest?", "150 mg IV bolus", ["300 mg again", "450 mg", "50 mg"], "150 mg."),
          q("What is the amiodarone dose for stable VT with a pulse?", "150 mg IV over 10 minutes, then an infusion", ["300 mg rapid push", "1 g bolus", "6 mg push"], "150 over 10."),
          q("After the 150 mg load for VT with a pulse, what infusion follows?", "1 mg/min for 6 hours, then 0.5 mg/min for at least 18 hours", ["5 mg/min for 1 hour", "0.1 mg/min for 2 days", "10 mg/h for 6 hours"], "1 then 0.5."),
          q("What is the oral half-life of amiodarone?", "About 58 days", ["Under 10 seconds", "36 hours", "2 hours"], "Very long."),
          q("Which channels does amiodarone block?", "Potassium mainly, plus sodium, beta and calcium", ["Only sodium", "Only beta", "Only A1 receptors"], "All four classes."),
          q("Which allergy is a contraindication to amiodarone?", "Iodine hypersensitivity", ["Penicillin allergy", "Sulfa allergy", "Egg allergy"], "Iodine."),
          q("Which shock state contraindicates amiodarone?", "Cardiogenic shock", ["Septic shock with fever", "Hemorrhagic shock already corrected", "None"], "Slide 47.")],
        [q("A patient in VF has had two shocks, CPR and epinephrine and remains in VF. Which antiarrhythmic and dose?", "Amiodarone 300 mg IV bolus", ["Amiodarone 150 mg over 10 minutes", "Adenosine 6 mg", "Diltiazem 0.25 mg/kg"], "Arrest dose."),
          q("The same patient remains in VF after another shock. Next amiodarone dose?", "150 mg IV bolus", ["300 mg again", "No more amiodarone", "1 g infusion"], "Second dose."),
          q("A stable patient in monomorphic VT at 160 with a pulse and BP 120/70. Amiodarone regimen?", "150 mg IV over 10 minutes, then 1 mg/min for 6 hours, then 0.5 mg/min", ["300 mg rapid push", "6 mg rapid push", "No treatment"], "VT with pulse."),
          q("A patient stopped amiodarone a month ago but still has side effects. Why?", "Its half-life is around 58 days", ["It was never stopped", "It is stored in bone forever", "Side effects are unrelated"], "Long half-life.")])
    ]),

    /* ---------- 11b ---------- */
    S("11b-amiodarone-toxicity-interactions", "11b. Amiodarone: toxicity and interactions", "Objective 11. Slides 48–51.", [
      C("Amiodarone toxicities",
        tbl(["Organ", "Toxicity", "Monitoring"], [
          ["<strong>Heart</strong>", "Bradycardia, <strong>hypotension (IV)</strong>, AV block, SA arrest, new VT", "EKG"],
          ["<strong>Liver</strong> (boxed)", "<strong>Hepatotoxicity</strong>", "<strong>Baseline and periodic LFTs</strong>; stop or reduce if over 3x normal (or double an elevated baseline)"],
          ["<strong>Lungs</strong> (boxed)", "<strong>Pulmonary fibrosis</strong>, hypersensitivity and interstitial pneumonitis (can be fatal)", "<strong>Baseline CXR and PFTs</strong>; <strong>CXR every 3–6 months</strong>"],
          ["<strong>Thyroid</strong>", "<strong>Hypo- or hyperthyroidism</strong> (iodine load, blocks T4 to T3)", "<strong>Baseline and periodic TFTs</strong>"],
          ["<strong>Eyes</strong>", "<strong>Corneal microdeposits</strong> (common, asymptomatic), halos; rare <strong>optic neuritis</strong>", "Eye exams"],
          ["<strong>Skin</strong>", "<strong>Photosensitivity</strong>, <strong>blue-gray skin</strong> in sun-exposed areas", "Sun protection"],
          ["GI", "Nausea and vomiting (over 10%)", ""]]) +
        mn("Check the <strong>\"PFTs, LFTs and TFTs\"</strong> (plus eyes and skin): <strong>Lungs, Liver, Thyroid</strong>."),
        ["amio-cardiac-tox", "amio-liver", "amio-lung", "amio-thyroid", "amio-eye", "amio-skin"],
        [q("Which two amiodarone toxicities carry boxed warnings?", "Hepatotoxicity and pulmonary toxicity", ["Lupus and agranulocytosis", "Constipation and edema", "Hyperkalemia and gout"], "Liver, lung."),
          q("What baseline lung tests are needed before amiodarone?", "Chest x-ray and PFTs", ["Sputum culture", "Bronchoscopy", "Sweat chloride"], "CXR + PFTs."),
          q("How often is a chest x-ray repeated on amiodarone?", "Every 3 to 6 months", ["Every week", "Never", "Every 10 years"], "3–6 months."),
          q("At what liver enzyme level should amiodarone be reduced or stopped?", "Over 3 times normal", ["Any rise", "Over 10 times normal only", "Never"], "3x normal."),
          q("Why can amiodarone cause thyroid disease?", "It has high iodine content and blocks T4 to T3 conversion", ["It destroys the pituitary", "It is a thyroid hormone", "It blocks TSH receptors"], "Iodine."),
          q("What skin change can amiodarone cause?", "Blue-gray discoloration in sun-exposed areas", ["Yellow skin", "Vitiligo", "Hair growth"], "Blue-gray."),
          q("Which eye finding is common and usually asymptomatic on amiodarone?", "Corneal microdeposits", ["Retinal detachment", "Cataract", "Glaucoma"], "Microdeposits."),
          q("Which rare eye toxicity of amiodarone can cause blindness?", "Optic neuritis", ["Corneal deposits", "Dry eye", "Stye"], "Rare.")],
        [q("A patient on amiodarone for 2 years has a dry cough, dyspnea and bilateral reticular opacities on CXR. Diagnosis?", "Amiodarone pulmonary toxicity (fibrosis or pneumonitis)", ["Asthma", "CHF from amiodarone always", "TB"], "Pulmonary toxicity."),
          q("A patient on amiodarone has fatigue, weight gain and a high TSH. Cause?", "Amiodarone-induced hypothyroidism", ["Pituitary tumor", "Normal aging", "Digoxin toxicity"], "Thyroid."),
          q("A fair-skinned gardener on amiodarone develops slate-gray color on her face and hands. Advice?", "Sun protection; this is amiodarone skin discoloration", ["It is cyanosis from hypoxia", "Start iron", "It is melanoma"], "Photosensitivity."),
          q("Before starting long-term amiodarone, which baseline tests are needed?", "LFTs, TFTs, chest x-ray and PFTs", ["Only a CBC", "Only a lipid panel", "No tests"], "Baseline monitoring.")]),
      C("Drug and food interactions",
        tbl(["Interaction", "Effect"], [
          ["<strong>Drugs</strong>", "<strong>Many significant interactions: always check the med list</strong>, including <strong>beta blockers and calcium channel blockers</strong> (additive bradycardia, AV block)"],
          ["<strong>Food</strong>", "<strong>Increases</strong> the rate and extent of absorption"],
          ["<strong>Grapefruit juice</strong>", "<strong>Increases bioavailability by 50%</strong>: <strong>avoid</strong>"]]) +
        note("Warfarin and digoxin levels rise on amiodarone (standard teaching): their doses are usually reduced."),
        ["amio-drug-interactions", "amio-food", "amio-grapefruit"],
        [q("Which juice should be avoided with amiodarone?", "Grapefruit juice", ["Orange juice", "Apple juice", "Cranberry juice"], "Grapefruit."),
          q("By how much does grapefruit juice increase amiodarone bioavailability?", "About 50%", ["About 5%", "About 500%", "It decreases it"], "50%."),
          q("How does food affect amiodarone absorption?", "Increases it", ["Decreases it", "No effect", "Blocks it completely"], "Food increases absorption."),
          q("Which drug classes interact with amiodarone to cause bradycardia and AV block?", "Beta blockers and calcium channel blockers", ["Statins and aspirin", "PPIs", "Antihistamines"], "Additive."),
          q("Which anticoagulant's effect increases with amiodarone?", "Warfarin", ["Enoxaparin", "Fondaparinux", "Heparin flush"], "INR rises.")],
        [q("A patient on amiodarone drinks grapefruit juice every morning. Concern?", "Higher amiodarone levels and toxicity", ["Lower levels", "No concern", "Grapefruit cures the arrhythmia"], "Bioavailability up 50%."),
          q("A patient on amiodarone is started on diltiazem and becomes bradycardic with a long PR. Why?", "Additive AV nodal blockade from the interaction", ["Diltiazem allergy", "Amiodarone stopped working", "Hyperkalemia only"], "Interaction."),
          q("A patient on warfarin is started on amiodarone. What should happen?", "Monitor the INR closely and expect to lower the warfarin dose", ["Double the warfarin", "Stop the INR checks", "Nothing changes"], "Interaction.")])
    ])
  ];
})();
