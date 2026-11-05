/*
  Cardio Part 2 Concepts: Arrhythmia Pharmacology.
  Source: source-material/cardio-part-2/text/arrhythmia-pharmacology.md.
  Anything the slides only imply is labeled "Clarification (standard physiology)".
  Question ids are "<concept id>|<index>": only APPEND questions.
*/
(function () {
  "use strict";
  var H = window.DiseaseContent;
  var Tbl = H.Tbl, HY = H.HY, Mn = H.Mn, S = H.S, Q = H.Q, D = H.D, L = H.L;
  function chain(steps) { return '<ol class="concept-chain">' + steps.map(function (s) { return "<li>" + s + "</li>"; }).join("") + "</ol>"; }
  function clar(text) { return "<p><strong>Clarification (standard physiology):</strong> " + text + "</p>"; }
  function traps(items) { return "<ul>" + items.map(function (i) { return "<li>" + i + "</li>"; }).join("") + "</ul>"; }

  window.CARDIO2_CONCEPTS_PHARM = L("pharmacology", "Arrhythmia Pharmacology", [

    D("pharmc-two-tissues", "Two kinds of heart tissue, two kinds of drugs", "Atrial and ventricular muscle fire with fast sodium channels, while the SA and AV nodes fire with calcium; so sodium and potassium blockers change the QRS and QT, and nodal blockers change the rate and PR.", [
      S("idea", "The idea", "<p>The heart has two kinds of electrical tissue:</p><ul><li><strong>Fast-response tissue</strong> (atrial and ventricular muscle): phase 0 = <strong>Na⁺ influx</strong>, phase 2 = Ca²⁺ plateau, phase 3 = <strong>K⁺ repolarization</strong>.</li><li><strong>Nodal tissue</strong> (SA, AV): phase 4 = <strong>automaticity</strong> (slow climb to threshold), phase 0 = <strong>Ca²⁺</strong>-dependent.</li></ul><p>So each class hits a specific phase, and you can predict its EKG effect.</p>"),
      S("chain", "Cause → effect", chain([
        "Class I blocks phase-0 Na⁺ in muscle → slower ventricular conduction → wider QRS",
        "Class III blocks phase-3 K⁺ → longer action potential and refractory period → longer QT",
        "Class II (β blockers) flattens the SA phase-4 slope and slows AV conduction → slower rate, longer PR",
        "Class IV (verapamil, diltiazem) blocks nodal Ca²⁺ phase 0 → slower AV conduction → longer PR",
        "Adenosine → brief A1-mediated AV block; digoxin → vagal AV slowing"
      ]) + Tbl(["Class", "Target", "Main tissue", "EKG"], [
        ["I (Na⁺)", "Phase 0", "Atria, ventricles", "↑ QRS (IA also ↑ QT)"],
        ["II (β)", "Phase 4 slope", "SA, AV node", "↓ HR, ↑ PR"],
        ["III (K⁺)", "Phase 3", "Atria, ventricles", "↑ QT"],
        ["IV (Ca²⁺)", "Phase 0 (nodal)", "AV node", "↓ HR, ↑ PR"]
      ]) + clar("linking each phase to the QRS, QT, and PR is standard physiology; the slides give the phases and targets.")),
      S("bedside", "Why it matters clinically", "<p>The slides' decision frame: <strong>AV-node-dependent SVT</strong> → transient AV block (vagal maneuvers, adenosine). <strong>AF/flutter rate control</strong> → slow the AV node (β blocker, diltiazem/verapamil, sometimes digoxin). <strong>Rhythm control or VT</strong> → change the muscle (Class I or III), chosen by EF, structural disease, QTc, and renal function.</p>" + HY("Before any choice: Is the patient unstable? Is the rhythm irregular or pre-excited? Then EF, structure, QTc, kidneys.")),
      S("traps", "Common traps", traps([
        "<strong>Expecting a Na⁺ blocker to slow the AV node.</strong> Nodal phase 0 is Ca²⁺-dependent.",
        "<strong>Expecting a β blocker to widen the QRS.</strong> It acts on nodes, not ventricular phase 0.",
        "<strong>Forgetting IA and IC also block K⁺.</strong> They can prolong repolarization too."
      ]))
    ], [
      Q("chain", "A patient starts a Class I sodium channel blocker. Which EKG interval widens most directly?", ["QRS", "PR", "RR only", "P wave only"], 0, "Blocking phase-0 Na⁺ slows ventricular conduction. Clarification (standard physiology): wider QRS."),
      Q("chain", "A patient starts a Class III potassium channel blocker. Which interval lengthens?", ["QT", "PR", "QRS only", "None"], 0, "Prolonged phase-3 repolarization lengthens the QT."),
      Q("idea", "Why do diltiazem and verapamil slow the AV node but not ventricular conduction?", ["Nodal phase 0 depends on Ca²⁺, while ventricular phase 0 depends on Na⁺", "They block Na⁺", "They only work in the atria", "They block K⁺"], 0, "Key distinction from the slides."),
      Q("chain", "How do beta blockers slow the sinus rate?", ["They flatten the phase-4 slope in the SA node", "They block phase-0 Na⁺", "They prolong phase 3", "They block A1 receptors"], 0, "Class II lowers the SA phase-4 slope."),
      Q("bedside", "AF with RVR, no pre-excitation, stable. What is the drug target?", ["Slow AV conduction (β blocker or diltiazem/verapamil)", "Block ventricular Na⁺ channels", "Prolong the QT", "Speed up the SA node"], 0, "Rate control targets the AV node."),
      Q("idea", "Which ion drives phase 3 repolarization in ventricular muscle?", ["Potassium", "Sodium", "Calcium", "Chloride"], 0, "Phase 3 = K⁺-dependent repolarization."),
      Q("idea", "What is phase 4 in nodal tissue responsible for?", ["Automaticity", "Rapid depolarization", "The plateau", "Repolarization"], 0, "Phase 4 = automaticity."),
      Q("traps", "Which antiarrhythmic classes also block potassium channels, prolonging repolarization?", ["IA and IC", "IB only", "II only", "IV only"], 0, "IA and IC also block K⁺.")
    ]),

    D("pharmc-rate-dependence", "Use-dependence vs reverse use-dependence", "Class IC drugs hold on to sodium channels longer, so they act more at fast rates and are dangerous in scarred hearts; Class III drugs prolong the action potential most at slow rates, which is when torsades strikes.", [
      S("idea", "The idea", "<p>Class I drugs differ in <strong>how fast they let go</strong> of the Na⁺ channel during diastole: IB rapid, IA intermediate, <strong>IC slow</strong>. At fast heart rates there's less diastole to let go, so IC drugs build up block → <strong>use-dependence</strong>: more effect at faster rates. In <strong>diseased myocardium</strong> that heavy conduction slowing creates new reentry → <strong>proarrhythmia</strong>.</p><p>Class III K⁺ blockers (sotalol, dofetilide, ibutilide) do the opposite: action potentials are <strong>most prolonged at slow rates</strong> (reverse use-dependence) → the QT is longest during bradycardia or pauses → torsades.</p>"),
      S("chain", "Cause → effect", chain([
        "IC (flecainide, propafenone) binds Na⁺ channels and releases slowly",
        "Fast rate → less diastole → block accumulates → much slower conduction",
        "Scarred or structurally diseased ventricle → slowed conduction feeds reentry → VT/VF",
        "So IC is avoided in structural heart disease",
        "Class III at slow rates → longest action potential → QT prolongation → torsades"
      ]) + Tbl(["", "IC (use-dependent)", "III (reverse use-dependent)"], [
        ["Strongest effect at", "Fast rates", "Slow rates"],
        ["Danger", "Proarrhythmia in diseased myocardium", "Long QT → torsades"],
        ["Avoid in", "Structural heart disease", "Long baseline QTc, poor renal clearance"]
      ])),
      S("bedside", "Why it matters clinically", "<p>Flecainide carries a boxed warning in <strong>atrial flutter</strong>: it slows the flutter rate enough that the AV node can conduct <strong>1:1</strong>, causing a dangerously fast ventricular rate, so give an AV nodal blocker (β blocker, digoxin) first. Flecainide is for patients <strong>without</strong> structural heart disease.</p>" + clar("the mechanism (a slower atrial flutter rate lets the AV node pass every beat) is standard teaching; the slide gives the warning and the preemptive negative chronotropic therapy.") + HY("IC: never in structural heart disease or after MI scarring.")),
      S("traps", "Common traps", traps([
        "<strong>Giving flecainide to a post-MI patient.</strong> Diseased myocardium → proarrhythmia.",
        "<strong>Giving flecainide for flutter without an AV nodal blocker.</strong> 1:1 conduction risk.",
        "<strong>Assuming Class III is safest at slow heart rates.</strong> That's when QT is longest."
      ]))
    ], [
      Q("idea", "What does use-dependence mean for Class IC drugs?", ["Their sodium-blocking effect increases at faster heart rates", "They work only at slow rates", "They lose effect with exercise", "They block potassium only"], 0, "Slow dissociation means more effect at faster rates."),
      Q("chain", "Why is flecainide avoided in patients with structural heart disease?", ["Heavy conduction slowing in diseased myocardium promotes reentry and proarrhythmia", "It causes hypertension", "It raises potassium", "It speeds up the AV node"], 0, "Higher proarrhythmic activity, especially in diseased myocardium."),
      Q("chain", "Flecainide is started for atrial flutter without an AV nodal blocker. What is the danger?", ["The slower flutter rate allows 1:1 AV conduction and a very fast ventricular rate", "Complete heart block", "Hypokalemia", "Torsades only"], 0, "Boxed warning: 1:1 conduction risk; give negative chronotropic therapy first."),
      Q("chain", "What does reverse use-dependence mean for sotalol and dofetilide?", ["The action potential is most prolonged at slow heart rates", "They work best at fast rates", "They shorten the QT at slow rates", "They have no rate effect"], 0, "Reverse use-dependence: more prolonged at slower rates."),
      Q("traps", "A patient on dofetilide becomes bradycardic. Why does this raise torsades risk?", ["The QT lengthens most at slow rates", "Bradycardia shortens the QT", "Dofetilide stops working", "Potassium rises"], 0, "Reverse use-dependence plus bradycardia lengthens QT."),
      Q("idea", "Rank the Class I subclasses from fastest to slowest Na⁺ channel release.", ["IB, IA, IC", "IC, IA, IB", "IA, IB, IC", "IA, IC, IB"], 0, "IB rapid, IA intermediate, IC slow."),
      Q("bedside", "Which patient is the best candidate for flecainide?", ["A patient with recurrent AF and a structurally normal heart", "A patient 2 months after an anterior MI", "A patient with HFrEF", "A patient with severe LVH and scar"], 0, "Avoid IC in structural heart disease."),
      Q("bedside", "What should accompany flecainide when treating atrial flutter?", ["An AV nodal blocker such as a beta blocker or digoxin", "A QT-prolonging drug", "IV fluids", "Nothing else"], 0, "Preemptive negative chronotropic therapy.")
    ]),

    D("pharmc-qt-stacking", "QT drugs add up", "Every potassium-channel blocker lengthens repolarization; stack two, start with a long QTc, or let a renally cleared drug accumulate, and the QT can reach torsades range.", [
      S("idea", "The idea", "<p>Class III drugs work by <strong>slowing K⁺ exit</strong> in phase 3. That's the therapeutic effect (longer refractory period stops reentry) <em>and</em> the risk (long QT → <strong>torsades de pointes</strong>). The QT effect is additive, so the rules all aim at keeping total QT in range:</p><ul><li>Don't start with a long baseline QTc (sotalol &gt; 450, dofetilide &gt; 440 = contraindicated).</li><li>Check for <strong>other QT-prolonging drugs</strong>.</li><li>Dose by <strong>kidney function</strong> (sotalol CrCl &lt; 40 contraindicated; dofetilide in severe renal insufficiency).</li><li>Start dofetilide in the <strong>hospital for 3 days</strong> with QT and CrCl monitoring.</li></ul>"),
      S("chain", "Cause → effect", chain([
        "K⁺ channel blocked → slower repolarization → longer action potential",
        "Longer refractory period → reentry stops (therapeutic)",
        "Longer QT on EKG",
        "Added QT drug, poor renal clearance, or slow rate → QT too long",
        "Early afterdepolarizations → torsades (polymorphic VT)"
      ]) + Tbl(["Drug", "QT rule"], [
        ["Sotalol", "Avoid QTc &gt; 450 or CrCl &lt; 40; also a β blocker (avoid asthma, AV block)"],
        ["Dofetilide", "Avoid QTc &gt; 440, congenital long QT, severe renal insufficiency; 3-day inpatient start"],
        ["Ibutilide", "Enhances slow Na⁺ current + blocks K⁺; watch QT-prolonging drugs"],
        ["Procainamide (IA)", "Prolongs QRS, PR, and QT"],
        ["Amiodarone", "K⁺ block plus Na⁺, β, Ca²⁺; many interactions"]
      ]) + clar("early afterdepolarizations as the trigger for torsades are standard physiology.")),
      S("bedside", "Why it matters clinically", "<p>Before starting any Class III drug, get a <strong>baseline QTc and creatinine clearance</strong> and review the med list. Amiodarone's extremely long half-life (weeks) means its effects and interactions linger long after it's stopped.</p>" + HY("Torsades risk = drug + long baseline QT + other QT drugs + poor renal clearance + slow rate.")),
      S("traps", "Common traps", traps([
        "<strong>Starting sotalol with a QTc of 480.</strong> Contraindicated.",
        "<strong>Ignoring kidney function.</strong> Sotalol and dofetilide accumulate.",
        "<strong>Starting dofetilide as an outpatient.</strong> It requires a 3-day hospital start."
      ]))
    ], [
      Q("idea", "How does a Class III drug stop reentry?", ["It prolongs the refractory period so the circuit runs into refractory tissue", "It speeds conduction", "It blocks the SA node only", "It shortens the action potential"], 0, "Prolonged refractory period prevents reentry."),
      Q("chain", "A patient on sotalol is started on another QT-prolonging drug. What is the risk?", ["Additive QT prolongation leading to torsades", "Hyperkalemia", "Shortened QT", "AV node acceleration"], 0, "Sotalol interacts with QT-prolonging agents."),
      Q("bedside", "A patient's baseline QTc is 470 ms. Can sotalol be started?", ["No, baseline QTc over 450 is a contraindication", "Yes, at full dose", "Yes, if potassium is normal", "Only IV"], 0, "Sotalol contraindicated with baseline QTc over 450."),
      Q("chain", "Why is sotalol contraindicated when CrCl is below 40?", ["It is renally cleared and accumulates, prolonging the QT further", "It damages the kidneys", "It becomes inactive", "It causes hypokalemia"], 0, "Dosing is based on renal function and QTc. Clarification (standard teaching): renal accumulation."),
      Q("bedside", "What does the 3-day inpatient start of dofetilide watch for?", ["To monitor QT, creatinine clearance, and rhythm for torsades during the first 3 days", "It is IV only", "It needs daily lab dosing forever", "It causes hypotension in all patients"], 0, "Hospitalized for 3 days with CrCl, QT, and rhythm monitoring."),
      Q("traps", "Which EKG intervals does procainamide (Class IA) prolong?", ["QRS, PR, and QT", "QT only", "PR only", "None"], 0, "Procainamide toxicity: QRS, PR, QT prolongation."),
      Q("chain", "What rhythm does excessive QT prolongation cause?", ["Torsades de pointes (polymorphic VT)", "Atrial flutter", "Sinus tachycardia", "Mobitz I"], 0, "QT prolongation risks torsades."),
      Q("bedside", "Amiodarone is stopped. Why do its effects and interactions persist for weeks?", ["Its half-life is extremely long (weeks)", "It is renally cleared", "It binds K⁺ permanently", "It is stored in the AV node"], 0, "Oral half-life about 58 days.")
    ]),

    D("pharmc-pre-excited", "Pre-excited AF: don't block the safe road", "In WPW with AF, the AV node is the only thing limiting ventricular rate; block it and every impulse races down the accessory pathway, so nodal blockers and IV amiodarone are avoided.", [
      S("idea", "The idea", "<p>Normally the AV node is a <strong>speed limit</strong>: it can't pass hundreds of atrial impulses a minute. An <strong>accessory pathway</strong> (WPW) has no such limit.</p><p>In <strong>AF with pre-excitation</strong>, impulses go down both roads. If you block the AV node (adenosine, β blocker, verapamil/diltiazem, digoxin, IV amiodarone), more impulses take the accessory pathway → ventricular rates near 300 → <strong>VF</strong>.</p><p>So treat the pathway or the muscle instead: <strong>procainamide</strong> (first line for antidromic wide-complex AVRT) or <strong>ibutilide</strong> (AF/flutter in WPW), or cardiovert if unstable.</p>" + clar("the 'two roads' explanation of why nodal blockade accelerates conduction over the pathway is standard teaching.")),
      S("chain", "Cause → effect", chain([
        "AF sends chaotic atrial impulses",
        "AV node limits how many reach the ventricle; pathway does not",
        "AV nodal blocker given → node closed",
        "Impulses route through the accessory pathway → very fast, wide, irregular rhythm",
        "Degenerates to VF → arrest"
      ]) + Tbl(["Rhythm", "Avoid", "Use"], [
        ["Pre-excited AF (irregular, wide, varying QRS)", "Adenosine, β blockers, CCB, digoxin, IV amiodarone", "Procainamide, ibutilide; cardiovert if unstable"],
        ["Antidromic AVRT (regular, wide)", "AV nodal blockers", "Procainamide first line"],
        ["Orthodromic AVRT (regular, narrow)", "-", "Vagal → adenosine → CCB/β blocker"]
      ])),
      S("bedside", "Why it matters clinically", "<p>An irregular, very fast, <strong>wide and varying</strong> QRS rhythm in a young patient → think pre-excited AF and reach for procainamide, not diltiazem. Lidocaine is also contraindicated in WPW. Orthodromic (narrow, down the node) AVRT is the one where nodal blockers are fine.</p>" + HY("Diltiazem and verapamil are contraindicated in AF/flutter with an accessory pathway (risk of VF).")),
      S("traps", "Common traps", traps([
        "<strong>Treating every fast AF with diltiazem.</strong> Check for pre-excitation first.",
        "<strong>Giving adenosine for a wide irregular tachycardia.</strong> It can trigger VF.",
        "<strong>Assuming amiodarone is safe in pre-excited AF.</strong> IV amiodarone is on the avoid list."
      ]))
    ], [
      Q("idea", "In pre-excited AF, why does blocking the AV node speed up the ventricular rate?", ["Impulses reroute through the accessory pathway, which has no rate limit", "The AV node speeds up", "The SA node fires faster", "Potassium falls"], 0, "The AV node is the speed limit; block it and the pathway takes over."),
      Q("bedside", "A 24-year-old has an irregular, wide-complex tachycardia at 260 with varying QRS shapes, BP stable. What drug fits?", ["Procainamide", "Diltiazem", "Adenosine", "Digoxin"], 0, "Pre-excited AF: avoid nodal blockers; procainamide."),
      Q("chain", "Diltiazem is given for AF in a patient with WPW. What is the risk?", ["Ventricular fibrillation", "Complete heart block only", "Hypokalemia", "Sinus bradycardia only"], 0, "Contraindicated with accessory pathway (risk of VF)."),
      Q("traps", "Which drugs are on the avoid list in pre-excited AF?", ["Adenosine, beta blockers, diltiazem/verapamil, digoxin, and IV amiodarone", "Procainamide and ibutilide", "Only digoxin", "Only beta blockers"], 0, "Safety exception from the slides."),
      Q("bedside", "What is first line for antidromic (wide-complex) AVRT in WPW?", ["Procainamide", "Verapamil", "Metoprolol", "Lidocaine"], 0, "Procainamide is first line for antidromic AVRT."),
      Q("chain", "In which WPW rhythm are AV nodal blockers acceptable?", ["Orthodromic AVRT (narrow, conducting down the AV node)", "Pre-excited AF", "Antidromic AVRT", "Pre-excited flutter"], 0, "Orthodromic AVRT: vagal, adenosine, then CCB/BB."),
      Q("bedside", "Which Class III drug is listed for stable AF/flutter with RVR in WPW?", ["Ibutilide", "Sotalol", "Dofetilide", "Amiodarone IV"], 0, "Ibutilide indication: stable AF/flutter with RVR in WPW.")
    ]),

    D("pharmc-adenosine", "Adenosine: a seconds-long pause button for the AV node", "Adenosine opens potassium channels in the AV node and blocks it for a few seconds; that's enough to break circuits that use the node, and short enough that side effects pass almost immediately.", [
      S("idea", "The idea", "<p>Adenosine <strong>activates K⁺ channels</strong> (K⁺ out, the main effect) and <strong>inhibits Ca²⁺ influx</strong> in the AV node → a brief, A1-mediated <strong>AV block</strong>. Its <strong>half-life is under 10 seconds</strong>, so it must be pushed fast (1–2 s) through a close IV with a 20 mL saline flush to reach the heart before it's gone.</p><p>Any reentry circuit that uses the AV node (AVNRT, orthodromic AVRT) is broken. Rhythms that don't use the node (atrial flutter) just slow briefly, which can unmask the flutter waves.</p>" + clar("adenosine revealing flutter waves as a diagnostic effect is standard teaching.")),
      S("chain", "Cause → effect", chain([
        "Rapid IV push 6 mg → flush (12 mg if no effect in 1–2 min, may repeat once)",
        "K⁺ channels open, Ca²⁺ influx blocked → AV node briefly blocked",
        "AV-node-dependent circuit breaks → sinus rhythm",
        "Transient flushing, chest pressure, sense of doom, brief asystole",
        "Gone within seconds → minimal toxicity"
      ]) + Tbl(["Use", "Avoid"], [
        ["Stable, regular, narrow-complex PSVT (AVNRT, AVRT)", "Wide-complex PSVT or WPW (risk of severe tachycardia, arrest)"],
        ["After vagal maneuvers fail", "Heart block"],
        ["", "Active bronchospasm (asthma, COPD)"]
      ])),
      S("bedside", "Why it matters clinically", "<p>Warn the patient: a few seconds of feeling awful (flushing, impending doom) and maybe a brief flat line on the monitor are expected. If SVT recurs after adenosine, the next step is a longer-acting nodal blocker (diltiazem, verapamil, β blocker).</p>" + HY("Rapid push + saline flush, because the half-life is under 10 seconds.")),
      S("traps", "Common traps", traps([
        "<strong>Pushing it slowly.</strong> It's destroyed before reaching the heart.",
        "<strong>Using it in wide or pre-excited rhythms.</strong> Risk of severe tachycardia or arrest.",
        "<strong>Giving it in an active asthma attack.</strong> Bronchospasm is a contraindication."
      ]))
    ], [
      Q("idea", "Why must adenosine be given as a rapid push followed by a saline flush?", ["Its half-life is under 10 seconds, so it must reach the heart quickly", "It is irritating to veins", "It needs to be diluted", "It works only in the lungs"], 0, "Half-life under 10 seconds."),
      Q("chain", "How does adenosine break AVNRT?", ["It briefly blocks the AV node, which is part of the reentry circuit", "It prolongs the QT", "It speeds the SA node", "It blocks ventricular Na⁺ channels"], 0, "Brief AV block interrupts re-entry pathways."),
      Q("idea", "What is adenosine's main cellular effect in the AV node?", ["Opening K⁺ channels so K⁺ leaves the cell", "Blocking Na⁺ channels", "Blocking β1 receptors", "Opening Ca²⁺ channels"], 0, "K⁺ channels activated (main effect); Ca²⁺ influx inhibited."),
      Q("bedside", "A patient has a few seconds of asystole and a sense of doom after adenosine. What next?", ["Reassure; these effects are expected and pass in seconds", "Start CPR immediately", "Give atropine", "Give a second drug to reverse it"], 0, "Short half-life means minimal toxicity; transient effects expected."),
      Q("traps", "Why is adenosine avoided in an active asthma exacerbation?", ["It can worsen bronchospasm", "It raises BP", "It causes hypokalemia", "It lasts too long"], 0, "Active bronchospasm is a contraindication."),
      Q("chain", "Adenosine is given for a regular narrow tachycardia at 150 and the rate briefly drops, revealing sawtooth waves. What is the rhythm?", ["Atrial flutter, which doesn't depend on the AV node", "AVNRT", "Sinus tachycardia only", "VT"], 0, "Clarification (standard teaching): adenosine unmasks flutter waves."),
      Q("bedside", "What is the first adenosine dose for stable PSVT?", ["6 mg rapid IV push", "12 mg slow IV", "1 mg/min infusion", "300 mg bolus"], 0, "Initial 6 mg; 12 mg if ineffective."),
      Q("traps", "Should adenosine be used for a regular wide-complex tachycardia in a known WPW patient?", ["No, avoid in wide-complex PSVT or accessory pathways", "Yes, always", "Yes, at double dose", "Only with digoxin"], 0, "Risk of severe tachycardia and arrest.")
    ]),

    D("pharmc-atropine", "Atropine only works where the vagus does", "Atropine removes vagal braking by blocking acetylcholine, so it speeds the SA node and AV node; blocks below the node, or a heart with no vagus, won't respond.", [
      S("idea", "The idea", "<p>Vagal tone releases <strong>acetylcholine</strong> that slows the SA node and AV node. Atropine <strong>blocks acetylcholine</strong>, so the existing sympathetic tone dominates → ↑ SA automaticity, ↑ AV conduction, ↑ HR and CO.</p><p>That means it only helps when the problem is <strong>vagal</strong> and <strong>at or above the AV node</strong>. <strong>Mobitz II and complete heart block</strong> arise below that level → atropine won't help → <strong>pacing</strong>. A <strong>transplanted heart</strong> has no vagal innervation → atropine likely ineffective.</p>"),
      S("chain", "Cause → effect", chain([
        "Atropine blocks muscarinic ACh receptors",
        "Vagal brake removed → sympathetic tone dominates",
        "SA rate ↑, AV conduction ↑ → HR and CO ↑",
        "Block below the node (Mobitz II, CHB) → no vagal target → no effect → pace",
        "Same block in the rest of the body → anticholinergic toxicity"
      ]) + Tbl(["Anticholinergic effect", "Why"], [
        ["Dilated pupils", "No parasympathetic constriction"],
        ["Warm, dry skin", "No sweating"],
        ["Tachycardia", "No vagal brake"],
        ["Urinary retention, worse glaucoma", "Bladder and eye muscarinic block"],
        ["Delirium, coma", "Central effect"]
      ]) + clar("the organ-by-organ anticholinergic explanations are standard pharmacology; the slides list the effects and cautions.")),
      S("bedside", "Why it matters clinically", "<p>Use with caution in <strong>myocardial ischemia, HF, and HTN</strong>: the higher rate raises oxygen demand and can cause ischemia or arrhythmia. Cautions also include <strong>acute angle glaucoma, BPH/urinary retention, pyloric obstruction</strong>. The half-life <strong>more than doubles in the elderly</strong>. In digoxin toxicity, atropine treats the vagally mediated bradycardia.</p>" + HY("Mobitz II and complete block originate below the node and need pacing.")),
      S("traps", "Common traps", traps([
        "<strong>Relying on atropine for complete heart block.</strong> Pace.",
        "<strong>Expecting it to work after heart transplant.</strong> No vagal innervation.",
        "<strong>Giving it freely in active ischemia.</strong> Faster rate raises demand."
      ]))
    ], [
      Q("idea", "How does atropine raise the heart rate?", ["It blocks acetylcholine, removing vagal slowing", "It stimulates β1 receptors directly", "It blocks Na⁺ channels", "It releases norepinephrine"], 0, "Blocks ACh; preexisting sympathetic stimulation predominates."),
      Q("chain", "Why is atropine ineffective for Mobitz II or complete heart block?", ["The block is below the AV node, where vagal tone isn't the problem", "These blocks are too fast", "Atropine only works on the atria", "It worsens Mobitz I only"], 0, "These blocks originate below the node and require pacing."),
      Q("chain", "A heart transplant recipient is bradycardic. Why may atropine not work?", ["The transplanted heart has no vagal innervation", "Immunosuppressants block it", "The donor heart lacks ACh receptors", "Atropine is contraindicated after surgery"], 0, "Lack of vagal innervation in the transplanted heart."),
      Q("bedside", "A patient given too much atropine has dilated pupils, warm dry skin, tachycardia, and delirium. What explains it?", ["Anticholinergic toxicity", "Cholinergic crisis", "Digoxin toxicity", "Beta blocker overdose"], 0, "Overdose symptoms listed on the slides."),
      Q("traps", "Why is atropine used cautiously in a patient with active myocardial ischemia?", ["The faster heart rate raises oxygen demand and can worsen ischemia", "It causes coronary spasm", "It slows the heart", "It causes hypokalemia"], 0, "Risks: increased BP and tachycardia, potential ischemia."),
      Q("bedside", "Which condition is a caution for atropine use?", ["Acute angle glaucoma", "Asthma", "Hypothyroidism", "Anemia"], 0, "Cautions: acute angle glaucoma, pyloric obstruction, urinary retention."),
      Q("chain", "Why might an 80-year-old have a prolonged response to atropine?", ["The half-life more than doubles in the elderly", "Elderly patients lack ACh", "Atropine is renally activated", "Elderly hearts are denervated"], 0, "Geriatric population: half-life more than doubled.")
    ]),

    D("pharmc-digoxin", "Digoxin: one pump, two effects, narrow window", "Digoxin blocks the Na/K pump, which raises cell calcium for a stronger squeeze and boosts vagal tone to slow the AV node; with a narrow range and renal clearance, toxicity makes the heart both irritable and blocked.", [
      S("idea", "The idea", "<p>Digoxin <strong>inhibits Na⁺/K⁺-ATPase</strong> → more Na⁺ inside → less Na⁺ gradient for the Na⁺/Ca²⁺ exchanger → <strong>more Ca²⁺ inside</strong> → stronger contraction (HFrEF). It is also <strong>vagomimetic</strong> → slows AV conduction (AF rate control).</p><p>The therapeutic range is narrow (<strong>0.5–2 ng/mL</strong>), it is <strong>cleared by the kidneys</strong> (half-life 36–48 h, longer in renal failure), and <strong>hypokalemia</strong> increases toxicity. In toxicity the cells become <strong>irritable</strong> (ectopy, atrial or junctional tachycardia) while the node is <strong>suppressed</strong> (block) → tachycardia with AV block.</p>" + clar("the Na/Ca exchanger step and low K⁺ letting digoxin bind the pump more are standard pharmacology; the slides give the mechanism and list hypokalemia as a risk factor.")),
      S("chain", "Cause → effect", chain([
        "Digoxin inhibits Na⁺/K⁺-ATPase → ↑ intracellular Na⁺ → ↑ Ca²⁺ → ↑ contractility",
        "Vagal effect → slower AV node",
        "Renal failure, low weight, old age, hypokalemia → level rises above 2",
        "Irritable myocardium + suppressed node → PVCs, atrial/junctional tachycardia with AV block, bradycardia, VT/VF",
        "Pump blocked everywhere → K⁺ stays outside cells → hyperkalemia in acute toxicity"
      ]) + Tbl(["Toxicity clue", "Feature"], [
        ["GI", "Nausea, vomiting"],
        ["Visual", "Halos, yellow or blurred vision"],
        ["EKG", "Scooped ST depression; tachycardia with AV block"],
        ["Antidote (DigiFab)", "Life-threatening arrhythmia, K⁺ &gt; 5.5, or end-organ damage"],
        ["Bridges", "Charcoal within 1–2 h; atropine for bradycardia; fluids for hypotension"]
      ])),
      S("bedside", "Why it matters clinically", "<p>Check levels regularly and reduce doses in CKD. A patient on digoxin who starts a diuretic and becomes <strong>hypokalemic</strong> is set up for toxicity. Elevated K⁺ in acute overdose is a marker of severity and an indication for DigiFab.</p>" + HY("Digoxin toxicity: nausea + yellow halos + new arrhythmia, especially in renal failure or hypokalemia.")),
      S("traps", "Common traps", traps([
        "<strong>Ignoring kidney function.</strong> Digoxin is renally excreted.",
        "<strong>Missing low K⁺.</strong> Hypokalemia increases toxicity.",
        "<strong>Thinking toxicity only causes bradycardia.</strong> Tachycardia with block is characteristic."
      ]))
    ], [
      Q("idea", "Which pump does digoxin inhibit?", ["Na⁺/K⁺-ATPase", "Ca²⁺-ATPase", "Proton pump", "Na⁺/Cl⁻ cotransporter"], 0, "Digoxin inhibits the Na/K ATPase."),
      Q("chain", "How does blocking the Na/K pump make the heart contract more strongly?", ["Intracellular Na⁺ rises, which leads to more intracellular Ca²⁺", "Potassium floods into the cell", "It blocks β1 receptors", "It shortens the action potential"], 0, "Increased intracellular sodium causes calcium influx."),
      Q("chain", "How does digoxin slow the ventricular rate in AF?", ["Its vagal effect slows AV node conduction", "It blocks Na⁺ in the ventricle", "It prolongs the QT", "It blocks the SA node with Ca²⁺"], 0, "Suppresses AV node conduction (vagomimetic)."),
      Q("bedside", "A patient on digoxin starts furosemide and her K⁺ drops to 2.9. What happens to toxicity risk?", ["It increases", "It decreases", "It is unchanged", "Digoxin becomes inactive"], 0, "Hypokalemia is a risk factor for toxicity."),
      Q("bedside", "An elderly patient on digoxin has AKI, nausea, and yellow halos. Why did toxicity develop?", ["Digoxin is renally cleared, so it accumulated", "The liver stopped metabolizing it", "AKI lowers digoxin levels", "Halos are unrelated"], 0, "Excretion is by the kidneys based on GFR."),
      Q("chain", "Which rhythm is characteristic of digoxin toxicity?", ["Atrial or junctional tachycardia with AV block", "Isolated sinus tachycardia", "Torsades from long QT", "Pre-excited AF"], 0, "Tachyarrhythmia with sinus or AV node suppression."),
      Q("bedside", "In acute digoxin overdose, K⁺ is 6.1. What is indicated?", ["DigiFab (digoxin immune Fab)", "More digoxin", "Potassium supplementation", "Adenosine"], 0, "DSFab indicated for K⁺ over 5.5, life-threatening arrhythmia, or end-organ damage."),
      Q("chain", "Why does acute digoxin toxicity cause hyperkalemia?", ["The blocked Na/K pump can't move K⁺ into cells", "The kidneys secrete more K⁺", "Digoxin contains K⁺", "Vomiting raises K⁺"], 0, "Clarification (standard pharmacology): pump inhibition leaves K⁺ outside cells.")
    ]),

    D("pharmc-nodal-stacking", "Stacking nodal blockers and negative inotropes", "Beta blockers and non-DHP calcium channel blockers both slow the node and weaken the squeeze; combine them, or give them to a failing heart, and you get block, hypotension, and shock.", [
      S("idea", "The idea", "<p>β blockers (Class II) and verapamil/diltiazem (Class IV) both <strong>slow SA and AV conduction</strong> and <strong>reduce contractility</strong>. Each alone is a reasonable rate-control drug. Together, their effects <strong>add</strong> → AV block, bradycardia, hypotension. In a heart that's already failing, removing contractility tips it into <strong>decompensated HF or cardiogenic shock</strong>.</p><p>Amiodarone also has β- and Ca²⁺-blocking effects, so it interacts with both.</p>"),
      S("chain", "Cause → effect", chain([
        "β blocker ↓ SA phase-4 slope and AV conduction, ↓ contractility",
        "+ verapamil/diltiazem ↓ nodal Ca²⁺ phase 0, ↓ contractility",
        "Additive → AV block, severe bradycardia, hypotension",
        "Weak heart (HFrEF, decompensated) → pulmonary edema, cardiogenic shock",
        "Overdose: bradycardia, hypotension, low output, myocardium refractory to drugs and pacing → asystole"
      ]) + Tbl(["Drug", "Key contraindications (slides)"], [
        ["Metoprolol", "SSS, 2nd/3rd-degree block without pacer, decompensated HF, hypotension"],
        ["Diltiazem", "Recent β blocker use, accessory pathway, SSS, AV block, hypotension, VT, severe HF"],
        ["Verapamil", "Concurrent β blocker, HFrEF, WPW, SSS/AV block, VT, hypotension"],
        ["Amiodarone", "SSS, AV block, bradycardia without pacer, cardiogenic shock"]
      ])),
      S("bedside", "Why it matters clinically", "<p>Pick <strong>one</strong> nodal agent for rate control and check the med list first. Avoid verapamil in HFrEF. Nonselective β blockers can trigger <strong>bronchospasm</strong>; diltiazem/verapamil are options for MAT in bronchospastic patients. Don't stop β blockers abruptly in CAD: withdrawal can cause ischemia, MI, VT, or sudden death.</p>" + HY("Verapamil + β blocker together is contraindicated.")),
      S("traps", "Common traps", traps([
        "<strong>Adding IV diltiazem right after IV metoprolol.</strong> Recent β blocker use is a contraindication.",
        "<strong>Using verapamil for rate control in HFrEF.</strong> It can cause pulmonary edema.",
        "<strong>Stopping a β blocker suddenly in CAD.</strong> Rebound ischemia."
      ]))
    ], [
      Q("chain", "A patient on metoprolol is given IV verapamil. What is the risk?", ["Additive AV block, bradycardia, and hypotension", "Hypertensive crisis", "QT shortening", "Hyperkalemia"], 0, "Concurrent beta blocker use is a contraindication to verapamil."),
      Q("idea", "Why can verapamil cause pulmonary edema in HFrEF?", ["It reduces contractility in a heart that is already weak", "It causes fluid retention through ADH", "It raises preload directly", "It blocks the kidneys"], 0, "Adverse effect: decompensated heart failure and pulmonary edema; HFrEF is a contraindication."),
      Q("bedside", "A severe beta blocker overdose leads to bradycardia and low output that do not respond to drugs or pacing. Why?", ["The myocardium becomes refractory to pharmacologic and electrical stimulation", "The pacer is defective", "Potassium is too low", "The vagus is overactive"], 0, "Severe intoxication can make the myocardium refractory, causing asystolic death."),
      Q("traps", "A CAD patient stops his beta blocker abruptly. What can happen?", ["Rebound ischemia, MI, VT, or sudden death", "Nothing", "Bradycardia", "Lower blood pressure"], 0, "Withdrawal effects in CAD patients."),
      Q("bedside", "Which rate-control drug fits MAT in a patient with active bronchospasm?", ["Diltiazem or verapamil", "Propranolol", "Carvedilol", "Sotalol"], 0, "Nonselective β blockers worsen bronchospasm; CCBs are listed for MAT in bronchospastic patients."),
      Q("chain", "Why does amiodarone interact with beta blockers and calcium channel blockers?", ["It has β-blocking and Ca²⁺-blocking effects of its own", "It speeds their metabolism", "It blocks their absorption", "It has no interactions"], 0, "Amiodarone also has Na⁺, β-adrenergic, and Ca²⁺ blockade.")
    ])
  ]);
})();
