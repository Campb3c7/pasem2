/*
  Cardio Part 2 Concepts: Arrhythmias.
  Each entry is a mechanism, not a disease: idea → cause/effect chain →
  bedside relevance → common traps, with prediction-style questions.
  Source: source-material/cardio-part-2/text/arrhythmias.md (plus the
  Arrhythmia Pharmacology deck for drug mechanisms). Anything the slides only
  imply is labeled "Clarification (standard physiology)".
  Question ids are "<concept id>|<index>": only APPEND questions.
*/
(function () {
  "use strict";
  var H = window.DiseaseContent;
  var Tbl = H.Tbl, HY = H.HY, Mn = H.Mn, S = H.S, Q = H.Q, D = H.D, L = H.L;
  function chain(steps) { return '<ol class="concept-chain">' + steps.map(function (s) { return "<li>" + s + "</li>"; }).join("") + "</ol>"; }
  function clar(text) { return "<p><strong>Clarification (standard physiology):</strong> " + text + "</p>"; }
  function traps(items) { return "<ul>" + items.map(function (i) { return "<li>" + i + "</li>"; }).join("") + "</ul>"; }

  window.CARDIO2_CONCEPTS_ARRHYTHMIAS = L("arrhythmias", "Arrhythmias", [

    D("arrc-rate-output", "Why too fast or too slow both drop output", "Cardiac output is heart rate times stroke volume, so a very slow rate loses beats and a very fast rate loses filling time; either way the brain and heart go short.", [
      S("idea", "The idea", "<p><strong>CO = HR x SV.</strong> Slowing the rate lowers output directly. Speeding it up raises output only until diastole gets so short the ventricle can't fill: then stroke volume falls faster than rate rises, and output drops.</p><p>Fast rates also raise myocardial O2 demand while shortening diastole, the time the coronaries fill, so ischemia and chest pain follow.</p>" + clar("diastole shortens much more than systole as HR rises; coronary perfusion happens mainly in diastole.")),
      S("chain", "Cause → effect", chain([
        "Bradycardia (e.g., complete block at 30) → fewer beats → ↓ CO → hypotension, syncope, fatigue.",
        "Tachycardia → diastole shortens → less ventricular filling → ↓ SV.",
        "Past a point SV falls more than HR rises → ↓ CO → hypotension, AMS.",
        "Short diastole + ↑ O2 demand → coronary ischemia → chest pain; backed-up filling → pulmonary edema."
      ]) + HY("The lecture's instability signs (hypotension, AMS, chest pain, dyspnea, rate &gt; 220–240) are all signs that output has failed.")),
      S("bedside", "Why it matters clinically", Tbl(["Rhythm", "Problem", "Bedside"], [
        ["Sinus brady 36 with hypotension", "Too few beats", "Atropine, then pacing"],
        ["SVT 220", "No filling time", "Synchronized cardioversion if unstable"],
        ["Sinus tach 130 from hypovolemia", "Rate is compensating for low SV", "Treat the cause; don't slow it"]
      ]) + "<p>Athletes tolerate slow rates because their stroke volume is large.</p>"),
      S("traps", "Common traps", traps([
        "<strong>\"Faster heart = more output.\"</strong> Only up to a point; very fast rhythms lower output.",
        "<strong>Slowing compensatory sinus tach.</strong> If the rate is propping up output (bleeding, sepsis), a beta blocker can crash the BP.",
        "<strong>A slow rate is always bad.</strong> Athletes with big stroke volumes are fine at 45."
      ]))
    ], [
      Q("chain", "A patient's SVT rate jumps from 150 to 230. What happens to stroke volume?", ["It falls because diastolic filling time is too short", "It rises because the heart beats more", "It stays the same", "It doubles"], 0, "Fast rates cut filling time and stroke volume."),
      Q("chain", "Why does a heart rate of 32 in complete heart block cause syncope?", ["Too few beats per minute drop cardiac output", "Stroke volume falls to zero", "The QT lengthens", "Preload falls"], 0, "CO = HR x SV; HR is the limiting term."),
      Q("chain", "Why do very fast rhythms cause chest pain even without CAD?", ["Diastole shortens, cutting coronary filling while demand rises", "They dilate the coronaries", "They lower O2 demand", "They raise preload"], 0, "Coronaries fill mainly in diastole."),
      Q("bedside", "A bleeding trauma patient has sinus tach at 135. What happens if you give IV metoprolol?", ["BP may crash because the fast rate was compensating for low stroke volume", "Output will rise", "Nothing; sinus tach is harmless", "Bleeding will stop"], 0, "Compensatory tachycardia props up CO; treat the cause."),
      Q("idea", "What equation explains why both brady- and tachyarrhythmias cause hypotension?", ["CO = HR x SV", "MAP = CO / SVR", "ABI = ankle / arm", "QTc = QT / RR"], 0, "Rate and stroke volume both set output."),
      Q("traps", "A marathon runner has a resting HR of 42 and normal BP. Why is he fine?", ["His large stroke volume keeps output normal", "His heart is failing", "He is in heart block", "Low HR raises SV infinitely"], 0, "Big SV offsets low HR."),
      Q("bedside", "Which finding means a tachycardia has caused output failure?", ["New confusion and SBP 80", "Palpitations alone", "A rate of 105", "Anxiety"], 0, "Hypotension and AMS are instability signs."),
      Q("chain", "SVT at 240 causes crackles in both lungs. Why?", ["Poor filling and rising pressures back up into the lungs", "Pneumonia from the rhythm", "Fluid from the IV", "Low preload"], 0, "Pulmonary edema is an instability sign.")
    ]),

    D("arrc-unstable-electricity", "Why unstable rhythms get electricity, not drugs", "An unstable patient has no time for drugs to work (and many drugs drop BP further), so electricity resets the rhythm instantly; synchronizing the shock avoids hitting the vulnerable T wave.", [
      S("idea", "The idea", "<p>\"Unstable\" means the rhythm is already failing perfusion. Antiarrhythmics take minutes and most (diltiazem, beta blockers, amiodarone, procainamide) <strong>lower BP</strong>. Electricity depolarizes the whole heart at once and lets the sinus node take over in seconds.</p><p><strong>Synchronized cardioversion</strong> times the shock to the <strong>R wave</strong>. A shock landing on the <strong>T wave</strong> (vulnerable repolarization) can trigger VF. A pulseless rhythm (VF, pulseless VT) has no organized R wave to sync to, so it gets an <strong>unsynchronized defibrillation</strong>.</p>" + clar("the R-on-T mechanism is standard teaching behind why the slides use synchronized shocks for organized rhythms with a pulse.")),
      S("chain", "Cause → effect", chain([
        "Tachyarrhythmia + hypotension, AMS, chest pain or pulmonary edema = unstable",
        "Drugs: slow onset and often hypotensive → worse perfusion",
        "Shock depolarizes all myocardium at once → re-entry circuits interrupted",
        "Synced to R wave → avoids the vulnerable T wave → no shock-induced VF",
        "No pulse / no organized QRS → nothing to sync to → unsynchronized defibrillation"
      ])),
      S("bedside", "Why it matters clinically", Tbl(["Situation", "Electricity"], [
        ["Unstable SVT, AF, flutter, VT with a pulse", "<strong>Synchronized</strong> cardioversion"],
        ["Pulseless VT, VF", "<strong>Unsynchronized</strong> defibrillation + CPR"],
        ["Unstable bradycardia", "Atropine, then <strong>pacing</strong> (electricity to add beats)"],
        ["Stable tachycardia", "Time for vagal maneuvers and drugs"]
      ]) + HY("Unstable with a pulse → sync. No pulse → defib.")),
      S("traps", "Common traps", traps([
        "<strong>Giving diltiazem to a hypotensive AF patient.</strong> It lowers BP further; unstable gets cardioversion.",
        "<strong>Syncing a VF shock.</strong> VF has no R wave, so the machine may never fire.",
        "<strong>Calling a fast rate unstable by itself.</strong> Instability is about perfusion signs (or extreme rates &gt; 220–240)."
      ]))
    ], [
      Q("chain", "Why is a synchronized shock used for VT with a pulse?", ["To avoid shocking on the T wave and triggering VF", "Because it uses more energy", "Because VT has no R waves", "To slow the AV node"], 0, "Sync times the shock to the R wave."),
      Q("bedside", "AF with RVR at 170, BP 78/40 and confusion. Why not start a diltiazem drip?", ["It takes time and lowers BP further; cardiovert instead", "Diltiazem doesn't affect AF", "It causes VF", "It is only oral"], 0, "Unstable = electricity."),
      Q("chain", "Why does VF get unsynchronized defibrillation?", ["There is no organized R wave to sync to", "Synchronized shocks are weaker", "Unsynchronized is safer for everyone", "VF responds to pacing"], 0, "No organized QRS."),
      Q("idea", "What makes a tachycardia 'unstable'?", ["Signs of failing perfusion such as hypotension or AMS", "A rate over 100", "Palpitations", "A wide QRS alone"], 0, "Instability = hypoperfusion."),
      Q("bedside", "Unstable bradycardia doesn't respond to atropine. What does electricity do here?", ["Pacing adds beats to restore output", "Cardioversion resets the rhythm", "Defibrillation stops the rhythm", "Nothing; use adenosine"], 0, "Transcutaneous or transvenous pacing."),
      Q("traps", "A stable patient has SVT at 180 with normal BP and mentation. First step?", ["Vagal maneuvers, then adenosine", "Immediate cardioversion", "Defibrillation", "Pacing"], 0, "Stable patients have time for vagal maneuvers and drugs."),
      Q("chain", "How does a cardioversion shock end a re-entry rhythm?", ["It depolarizes the whole myocardium at once, breaking the circuit", "It blocks sodium channels", "It speeds the SA node", "It lengthens the QT"], 0, "Everything is refractory at once; the sinus node takes over."),
      Q("traps", "Which rhythm should never get a synchronized shock?", ["Ventricular fibrillation", "Atrial flutter with hypotension", "Unstable SVT", "Monomorphic VT with a pulse and hypotension"], 0, "VF needs unsynchronized defibrillation.")
    ]),

    D("arrc-block-level", "Where the block is decides how dangerous it is", "Blocks in the AV node (1st degree, Mobitz I) are vagal and usually benign; blocks below it (Mobitz II, many 3rd degree) don't respond to atropine and need pacing.", [
      S("idea", "The idea", "<p>The <strong>AV node</strong> is rich in vagal input. Blocks <em>in</em> the node fatigue gradually (PR lengthens: Mobitz I), respond to <strong>atropine</strong>, and usually have a reliable <strong>junctional escape</strong> (narrow, 40–60).</p><p>Blocks <strong>below the node</strong> (His-Purkinje) fail suddenly without warning (constant PR, then a dropped beat: Mobitz II), don't respond to atropine (no vagal tone to block there), and leave only a <strong>slow, wide ventricular escape</strong> (20–40) that can fail. That's why Mobitz II and complete block go to <strong>pacing</strong>.</p>" + clar("the nodal vs infranodal split is the standard reasoning behind the slides' treatment table.")),
      S("chain", "Cause → effect", chain([
        "Nodal disease → gradual fatigue → PR lengthens beat to beat → dropped QRS (Wenckebach)",
        "Vagal tone matters at the node → atropine helps; narrow junctional escape usually holds",
        "Infranodal disease → all-or-none conduction → constant PR, sudden drop (Mobitz II), often wide QRS",
        "No vagal tone below the node → atropine does little",
        "Only a slow wide ventricular escape remains → can fail → syncope, arrest → pace"
      ]) + Tbl(["", "Mobitz I", "Mobitz II"], [
        ["Level", "AV node", "Below the node"],
        ["PR", "Lengthens", "Constant"],
        ["Atropine", "Works", "Little effect"],
        ["Risk", "Rarely progresses", "Can progress to complete block"],
        ["Treatment", "Observe; atropine if unstable", "<strong>Pace</strong>, permanent pacemaker"]
      ])),
      S("bedside", "Why it matters clinically", "<p>An inferior MI (RCA feeds the AV node) tends to cause nodal blocks that recover; an anterior MI damaging the septum and bundles tends to cause infranodal block that needs a pacer (standard teaching). The Pharm deck says atropine isn't used for Mobitz II or complete block because they need pacing.</p>" + HY("Narrow escape = higher, safer pacemaker. Wide escape = lower, slower, less reliable.")),
      S("traps", "Common traps", traps([
        "<strong>Giving repeated atropine for Mobitz II.</strong> It doesn't fix an infranodal block; get pacer pads on.",
        "<strong>Calling every dropped beat dangerous.</strong> Wenckebach in a sleeping athlete is benign.",
        "<strong>Assuming a constant PR means safe.</strong> A constant PR with sudden drops is Mobitz II, the dangerous one."
      ]))
    ], [
      Q("chain", "Why does atropine help Mobitz I but not Mobitz II?", ["Mobitz I is in the vagally innervated AV node; Mobitz II is below it", "Mobitz II is faster", "Atropine blocks sodium channels", "Mobitz I is in the ventricles"], 0, "Atropine removes vagal tone, which only matters at the node."),
      Q("chain", "A complete heart block shows a wide escape rhythm at 30. Where is the escape pacemaker?", ["In the ventricles", "In the AV junction", "In the SA node", "In the atria"], 0, "Wide and slow = ventricular escape."),
      Q("idea", "Which EKG pattern suggests the block is below the AV node?", ["Constant PR with sudden dropped QRS and wide complexes", "PR lengthening before a drop", "PR over 200 with every P conducted", "Grouped beating with narrow QRS"], 0, "Mobitz II: constant PR, sudden drops."),
      Q("bedside", "Which block needs a permanent pacemaker even if the patient feels fine?", ["Mobitz II", "First-degree AV block", "Mobitz I in an athlete", "Sinus arrhythmia"], 0, "Mobitz II can progress to complete block."),
      Q("chain", "Why is a junctional escape rhythm safer than a ventricular one?", ["It's faster and more reliable, and uses the normal conduction system", "It's slower", "It has no P waves", "It's always above 100"], 0, "Junctional 40-60 narrow vs ventricular 20-40 wide."),
      Q("traps", "A patient in Mobitz II at 38 bpm is hypotensive and atropine did nothing. Next step?", ["Transcutaneous pacing", "More atropine every minute", "Adenosine", "Observation"], 0, "Pace infranodal blocks."),
      Q("bedside", "A healthy athlete shows Wenckebach on a sleep Holter. Management?", ["Reassurance; nodal and vagal", "Pacemaker", "Atropine", "Amiodarone"], 0, "Nodal block from high vagal tone is benign."),
      Q("chain", "Why does PR lengthen before the dropped beat in Mobitz I?", ["The AV node fatigues progressively with each beat", "The His bundle fails all at once", "The SA node slows", "The ventricle is refractory"], 0, "Progressive nodal delay.")
    ]),

    D("arrc-reentry", "Re-entry and why adenosine works", "Most PSVTs are re-entry loops that pass through the AV node; briefly blocking the node breaks the loop. Rhythms that don't need the node (flutter, AF) only slow down and reveal themselves.", [
      S("idea", "The idea", "<p>A <strong>re-entry circuit</strong> needs two paths with different speeds and recovery times. An early beat goes down one path, comes back up the other, and keeps looping: <strong>abrupt onset and offset</strong>, regular, fast.</p><p>In <strong>AVNRT</strong> the loop is inside the AV node; in <strong>AVRT</strong> it uses the node plus an accessory pathway. Because both need the AV node, <strong>vagal maneuvers or adenosine</strong> (brief AV block, half-life &lt; 10 s) break them.</p><p><strong>Flutter</strong> loops in the right atrium; <strong>AF</strong> is chaos in the atria. The node is only a bystander, so adenosine just slows the ventricular response for a few seconds and <strong>unmasks flutter waves</strong> instead of curing it.</p>"),
      S("chain", "Cause → effect", chain([
        "Two pathways with different conduction/refractoriness",
        "A premature beat blocks in one, travels the other, re-enters → loop",
        "Loop includes the AV node (AVNRT, AVRT)",
        "Adenosine → K+ out, Ca2+ in blocked at the node → transient AV block",
        "One link broken → loop stops → sinus resumes"
      ]) + Tbl(["Rhythm", "Needs AV node?", "Adenosine effect"], [
        ["AVNRT", "Yes", "Terminates"],
        ["Orthodromic AVRT", "Yes", "Terminates"],
        ["Atrial flutter", "No", "Transient slowing; flutter waves visible"],
        ["Sinus tach", "No", "Transient slowing only"]
      ])),
      S("bedside", "Why it matters clinically", "<p>Adenosine is given as a <strong>rapid push with a flush</strong> because it's gone in seconds. Patients feel flushing and \"impending doom\" briefly. Avoid it in <strong>wide-complex/WPW</strong> rhythms and active bronchospasm.</p>" + HY("Adenosine cures node-dependent loops and diagnoses everything else.")),
      S("traps", "Common traps", traps([
        "<strong>Expecting adenosine to convert flutter.</strong> It reveals flutter waves; it doesn't fix the atrial loop.",
        "<strong>Slow push.</strong> Its half-life is under 10 s; a slow push never reaches the heart in force.",
        "<strong>Using it in pre-excited AF.</strong> Blocking the node can drive impulses down the accessory pathway."
      ]))
    ], [
      Q("chain", "Why does adenosine stop AVNRT?", ["The loop runs through the AV node, and adenosine briefly blocks the node", "It shocks the atria", "It blocks sodium channels in the ventricle", "It speeds the sinus node"], 0, "Breaking one link stops the circuit."),
      Q("chain", "Adenosine is given for a regular narrow tachycardia at 150, and sawtooth waves appear while the QRS pauses. What was it?", ["Atrial flutter", "AVNRT", "Sinus tachycardia", "VT"], 0, "Flutter doesn't need the node; slowing reveals it."),
      Q("idea", "What feature of re-entry explains the abrupt start and stop of PSVT?", ["A single premature beat can start the loop and a single block can end it", "The SA node gradually speeds up", "Electrolytes slowly shift", "Catecholamines build up"], 0, "Re-entry turns on and off abruptly."),
      Q("bedside", "Why is adenosine pushed rapidly with a saline flush?", ["Its half-life is under 10 seconds", "It is irritating to veins", "It must reach the lungs", "To avoid hypertension"], 0, "Rapid push and flush."),
      Q("chain", "What does adenosine do at the cellular level in the AV node?", ["Opens K+ channels and inhibits Ca2+ influx, slowing conduction", "Blocks fast Na+ channels", "Blocks beta-1 receptors", "Inhibits Na/K ATPase"], 0, "Per the Pharm deck."),
      Q("traps", "Which rhythm should not get adenosine?", ["Pre-excited AF in WPW", "Narrow-complex AVNRT", "Orthodromic AVRT", "Stable regular SVT"], 0, "Avoid in wide complex or accessory pathway rhythms."),
      Q("bedside", "Which non-drug step works by the same mechanism as adenosine?", ["Vagal maneuvers that slow AV node conduction", "Leg raise to boost preload", "Holding breath to raise CO2", "Lying flat"], 0, "Vagal tone slows the node."),
      Q("chain", "Why does adenosine not cure sinus tachycardia?", ["Sinus tach is not a loop through the AV node", "Sinus tach is too slow", "It causes AF", "It is ventricular"], 0, "Only a transient slowing.")
    ]),

    D("arrc-accessory-pathway", "Accessory pathways and why AV blockers can be deadly", "In WPW a muscle bridge bypasses the AV node's delay; blocking the node in AF pushes every impulse down the bridge, which has no speed limit, risking VF.", [
      S("idea", "The idea", "<p>The AV node is the heart's <strong>speed limit</strong>: its delay lets the ventricles fill and filters fast atrial impulses. An <strong>accessory pathway</strong> (WPW) conducts without that delay: <strong>short PR, delta wave, wide QRS</strong>.</p><p>In <strong>AF</strong> with an accessory pathway, impulses race down the bypass at rates up to 300. If you block the AV node (adenosine, BB, CCB, digoxin), even more impulses take the bypass → very fast ventricular rate → <strong>VF</strong>. <strong>Procainamide</strong> slows the pathway itself; unstable → cardiovert.</p>"),
      S("chain", "Cause → effect", chain([
        "Accessory pathway bypasses the AV node → early ventricular activation (delta wave, short PR)",
        "AF fires 300–400 impulses/min",
        "AV node normally filters most of them",
        "Block the AV node → impulses favor the unfiltered bypass",
        "Ventricular rate skyrockets → VF"
      ]) + Tbl(["Drug", "In pre-excited AF"], [
        ["Adenosine, BB, CCB, digoxin", "<strong>Avoid</strong> (block node)"],
        ["Procainamide", "Preferred (slows pathway)"],
        ["Synchronized cardioversion", "If unstable"]
      ])),
      S("bedside", "Why it matters clinically", "<p>The Syncope deck's Jessie had a wide-complex tachycardia at 240 that needed a shock; after, her EKG showed <strong>delta waves</strong>. Before any rate control in AF, the Management deck says you <strong>must exclude pre-excitation</strong>. Definitive care: <strong>ablation</strong> of the pathway.</p>" + HY("Irregular, very fast, wide and varying QRS = think pre-excited AF: no AV nodal blockers.")),
      S("traps", "Common traps", traps([
        "<strong>Giving diltiazem for 'AF with RVR' at 260 with wide bizarre QRSs.</strong> That's pre-excited AF.",
        "<strong>Thinking the pathway is always dangerous.</strong> Most with WPW pattern are asymptomatic.",
        "<strong>Assuming orthodromic AVRT can't use adenosine.</strong> Narrow orthodromic AVRT goes down the node and can get adenosine; wide/antidromic and AF are the danger."
      ]))
    ], [
      Q("chain", "A WPW patient in AF gets IV diltiazem. What happens?", ["More impulses go down the accessory pathway and the rate can degenerate into VF", "The rate safely slows", "The patient converts to sinus", "Nothing"], 0, "Blocking the node favors the bypass."),
      Q("idea", "Why is the PR interval short in WPW?", ["The impulse bypasses the AV node's normal delay", "The SA node fires faster", "The atria are smaller", "The QT is long"], 0, "Accessory pathway skips the nodal delay."),
      Q("bedside", "Preferred drug for stable pre-excited AF?", ["Procainamide", "Adenosine", "Metoprolol", "Digoxin"], 0, "Procainamide slows the accessory pathway."),
      Q("chain", "What normally protects the ventricles from AF's 400 impulses per minute?", ["The AV node's filtering delay", "The SA node", "The bundle of His speed", "The pericardium"], 0, "The node is the speed limit."),
      Q("bedside", "Before starting a beta blocker for new AF, what must be excluded?", ["A pre-excitation syndrome", "Hypothyroidism", "Pregnancy", "Low magnesium"], 0, "From the Management deck."),
      Q("traps", "AF at 270 with irregular, wide, changing QRS complexes. Which drug is dangerous?", ["Adenosine", "Procainamide", "Synchronized cardioversion", "None of these"], 0, "No AV nodal blockers in pre-excited AF."),
      Q("bedside", "Definitive treatment for symptomatic WPW?", ["Catheter ablation of the accessory pathway", "Lifelong digoxin", "Pacemaker", "Warfarin"], 0, "Ablation cures it."),
      Q("chain", "What does the delta wave represent?", ["Early ventricular activation through the accessory pathway", "Atrial repolarization", "A PVC", "Slow AV node conduction"], 0, "Slurred upstroke from pre-excitation.")
    ]),

    D("arrc-repolarization-qt", "Long QT, low K and Mg, and torsades", "When repolarization drags (drugs, low K, low Mg), early afterdepolarizations fire during the long QT and twist into torsades; magnesium stabilizes the membrane.", [
      S("idea", "The idea", "<p>The QT is ventricular depolarization plus <strong>repolarization</strong>, which depends on <strong>K+ leaving</strong> the cell (phase 3). Drugs that block K+ channels (class III, IA), <strong>hypokalemia</strong> and <strong>hypomagnesemia</strong> slow repolarization → <strong>long QT</strong>.</p><p>A long, uneven repolarization lets cells fire again early (afterdepolarizations). If one lands during the vulnerable period, it triggers <strong>torsades de pointes</strong>, polymorphic VT that twists around the baseline. <strong>IV magnesium</strong> suppresses the triggers even when Mg is normal.</p>" + clar("afterdepolarization is the standard mechanism; the slides give the causes and treatment.")),
      S("chain", "Cause → effect", chain([
        "K+ channel block, low K+, low Mg2+ → slower phase 3 repolarization",
        "QT lengthens; repolarization becomes uneven",
        "Early afterdepolarization fires during the long QT",
        "Triggers polymorphic VT with twisting axis = torsades",
        "Usually self-terminates (brief syncope) but can become VF"
      ]) + Tbl(["Add-up risk", "Examples"], [
        ["Antiarrhythmics", "Sotalol, dofetilide, amiodarone, procainamide, quinidine"],
        ["Other drugs", "Haloperidol, ondansetron, macrolides, fluoroquinolones, azoles, TCAs, SSRIs"],
        ["Electrolytes", "Hypokalemia, hypomagnesemia"]
      ])),
      S("bedside", "Why it matters clinically", "<p>Treat torsades with <strong>IV magnesium</strong>; unstable → defibrillate. Prevent it: check the <strong>QTc, K and Mg</strong> before and during class III drugs (dofetilide starts inpatient for this reason) and avoid stacking QT drugs.</p>" + HY("Every QT drug adds up: azithromycin + ondansetron + low K in a patient on sotalol is a setup for torsades.")),
      S("traps", "Common traps", traps([
        "<strong>Giving amiodarone for torsades.</strong> It prolongs the QT further; give magnesium.",
        "<strong>Withholding Mg because the level is normal.</strong> Mg treats torsades regardless of level.",
        "<strong>Ignoring 'harmless' drugs.</strong> Ondansetron and antibiotics count."
      ]))
    ], [
      Q("chain", "A patient on sotalol starts azithromycin and her K+ falls to 3.0. What is the main risk?", ["QT prolongation leading to torsades", "Complete heart block", "Atrial flutter", "Hyperkalemia"], 0, "Stacked QT risks."),
      Q("chain", "Which phase of the ventricular action potential does hypokalemia slow?", ["Phase 3 repolarization", "Phase 0 depolarization", "Phase 4 automaticity", "Phase 1 notch"], 0, "Phase 3 depends on K+ efflux."),
      Q("bedside", "First drug for torsades de pointes with a pulse?", ["IV magnesium", "Amiodarone", "Adenosine", "Diltiazem"], 0, "Magnesium."),
      Q("traps", "A torsades patient's Mg level is normal. Should you still give magnesium?", ["Yes; it suppresses the triggers regardless of level", "No, only if low", "No, give potassium only", "Only after cardioversion"], 0, "Mg works even at normal levels."),
      Q("idea", "Why do class III antiarrhythmics prolong the QT?", ["They block K+ channels and slow repolarization", "They block Na+ channels", "They block calcium in the node", "They are beta agonists"], 0, "Class III = K+ channel blockers."),
      Q("chain", "Why does torsades often cause brief syncope rather than death?", ["It usually self-terminates within seconds", "It never lowers output", "It is slow", "It only occurs asleep"], 0, "From the Syncope deck."),
      Q("bedside", "Why is dofetilide started in the hospital?", ["To monitor QT prolongation during loading", "Because it is IV only", "To check INR", "Because it causes bradycardia only"], 0, "FDA-mandated monitoring for QT."),
      Q("traps", "Which drug would worsen torsades?", ["Amiodarone", "Magnesium", "Potassium replacement", "Overdrive pacing"], 0, "Amiodarone prolongs QT.")
    ])
  ]);
}());
