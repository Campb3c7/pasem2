/*
  EKG Look-alikes & study guide. Engine: ekg-compare.js.
  chart: the EKG Rhythm Study Guide (answer version), one row per rhythm, verbatim. Rows are
    question sources for "Fill in the chart" (one cell at a time) and "Name the row".
    Row ids (sg-*) are progress keys: never rename.
  pairs: look-alike sets. Each lists 2-4 rhythm ids from window.EKG_RHYTHMS (data/rhythm-strips-ekg.js),
    the one question that splits them (ask), a difference table (rows: [feature, value per rhythm]),
    and why they look different (cause -> effect). Strips are drawn fresh by RhythmSynth.
    Pair ids (lk-*) are progress keys: never rename.
  Facts not in the study guide or the EKG deck say "(standard teaching)".
*/
(function () {
  "use strict";

  var COLUMNS = ["Rate", "Regularity", "P wave", "PR interval", "QRS complex", "QT interval", "Other"];
  function S(id, family, name, cells) { return { id: id, family: family, name: name, cells: cells }; }

  var chart = [
    S("sg-nsr", "Sinus", "Normal sinus rhythm", ["60-100 bpm", "Regular", "Normal", "Normal", "Normal", "Normal", "N/A"]),
    S("sg-sb", "Sinus", "Sinus bradycardia", ["< 60 bpm", "Regular", "Normal", "Normal", "Normal", "Normal", "Normal but slow"]),
    S("sg-st", "Sinus", "Sinus tachycardia", ["100-160 bpm", "Regular", "Normal", "Normal", "Normal", "+/- Shortened", "Normal but fast"]),
    S("sg-sa", "Sinus", "Sinus dysrhythmia/arrhythmia", ["60-100 bpm", "Irregular", "Normal", "Normal", "Normal", "Normal", "Irregular but all components there"]),
    S("sg-pause", "Sinus", "Sinus arrest/pause", ["Depends on underlying rhythm", "Regular with irregular beat", "Normal", "Normal", "Normal", "Normal", "Break in rhythm during pause"]),
    S("sg-pac", "Atrial", "Premature atrial contraction (PAC)", ["Depends on underlying rhythm", "Regular with irregular beat", "Occurs early", "Normal", "Normal", "Normal", "Beat occurs early"]),
    S("sg-atach", "Atrial", "Atrial tachycardia", ["160-250 bpm", "Regular", "+/- Buried in preceding T", "+/- Shortened", "Normal", "+/- Shortened", "Ectopic focus overrides SA node"]),
    S("sg-wap", "Atrial", "Wandering atrial pacemaker", ["60-100 bpm", "Irregular", "3+ different", "Usually normal but may vary", "Normal", "Normal", "Shifting pacemaker"]),
    S("sg-mat", "Atrial", "Multifocal atrial tachycardia", ["100-160 bpm", "Irregular", "3+ different", "Usually normal but may vary", "Normal", "Normal", "Rapidly shifting pacemaker"]),
    S("sg-flutter", "Atrial", "Atrial flutter", ["Atria: 250-350 bpm; Ventricles: any bpm", "Usually regular", "Same shape, appears uncorrelated", "Not measurable", "Normal", "Not measurable", "Sawtooth pattern"]),
    S("sg-af", "Atrial", "Atrial fibrillation", ["CVR: < 100 bpm; RVR: > 100 bpm", "Usually irregular", "None", "Not measurable", "Normal", "Not measurable", "Fibrillatory/chaotic baseline"]),
    S("sg-pjc", "Junctional", "Premature junctional complex (PJC)", ["Depends on underlying rhythm", "Regular with irregular beat", "None, inverted, or after QRS", "Normal or not measurable", "Normal", "Normal", "Retrograde in atria"]),
    S("sg-jbrady", "Junctional", "Junctional bradycardia", ["< 40 bpm", "Regular", "None, inverted, or after QRS", "Normal or not measurable", "Normal", "Normal", "P waves are weird, QRS is normal"]),
    S("sg-jr", "Junctional", "Junctional (escape) rhythm", ["40-60 bpm", "Regular", "None, inverted, or after QRS", "Normal or not measurable", "Normal", "Normal", "AV node sets pace"]),
    S("sg-ajr", "Junctional", "Accelerated junctional rhythm", ["60-100 bpm", "Regular", "None, inverted, or after QRS", "Normal, short, or N/A", "Normal", "+/- Shortened", "AV node speeds up"]),
    S("sg-jtach", "Junctional", "Junctional tachycardia", ["100-180 bpm", "Regular", "None, inverted, or after QRS", "Normal, short, or N/A", "Normal", "+/- Shortened", "AV node speeds up more"]),
    S("sg-pvc", "Ventricular", "Premature ventricular complex (PVC)", ["Depends on underlying rhythm", "Regular with irregular beat", "None", "Not measurable", "Wide", "Abnormal", "Ventricles fire prematurely and abnormally"]),
    S("sg-idio", "Ventricular", "Idioventricular rhythm", ["20-40 bpm", "Regular", "None", "Not measurable", "Wide", "Abnormal", "3+ ventricular escape beats"]),
    S("sg-aivr", "Ventricular", "Accelerated idioventricular rhythm", ["40-100 bpm", "Regular", "None", "Not measurable", "Wide", "Abnormal", "Faster ventricular escape beats"]),
    S("sg-vt", "Ventricular", "Ventricular tachycardia", ["100-250 bpm", "Regular", "None", "Not measurable", "Wide", "Abnormal", "Monomorphic or polymorphic"]),
    S("sg-vf", "Ventricular", "Ventricular fibrillation", ["Not measurable", "Rapid and chaotic", "None", "Not measurable", "Wavy and not discernable", "Not measurable", "No depolarization of ventricles"]),
    S("sg-asys", "Ventricular", "Asystole", ["Not measurable", "Not measurable", "None", "Not measurable", "None", "Not measurable", "No electrical activity"]),
    S("sg-avb1", "AV block", "1st degree AV block", ["Depends on underlying rhythm", "Regular", "Normal", "Prolonged", "Normal", "Normal", "Delayed conduction"]),
    S("sg-avb2i", "AV block", "2nd degree AV block, type I", ["Atrial rate greater than ventricular rate", "Atrial regular; ventricular irregular", "Normal", "Progressive lengthening", "Normal but drops", "Normal or drops", "Impaired AV node"]),
    S("sg-avb2ii", "AV block", "2nd degree AV block, type II", ["Atrial rate greater than ventricular rate", "Atrial regular; ventricular irregular", "Normal", "Constant", "Occasionally drops", "Occasionally drops", "Blocked His-Purkinje system"]),
    S("sg-avb3", "AV block", "3rd degree AV block", ["Atrial rate greater than ventricular rate", "Atrial regular; ventricular regular", "Normal", "No true interval", "Does not occur after every P wave", "Does not occur every beat", "Complete block"])
  ];

  function P(id, title, ids, ask, rows, why) { return { id: id, title: title, ids: ids, ask: ask, rows: rows, why: why }; }

  var pairs = [
    P("lk-wap-mat", "Wandering atrial pacemaker vs MAT", ["ekr-wap", "ekr-mat"],
      "Count the rate. Same P-wave picture, so the rate is the only thing that splits them.",
      [["Rate", "60-100", "Over 100 (100-160)"], ["P waves", "3+ shapes", "3+ shapes"], ["Rhythm", "Irregular", "Irregular"], ["Classic setting", "Can be normal (athletes, sleep) (standard teaching)", "COPD / hypoxia"]],
      "Both have a pacemaker that keeps moving between atrial sites, so each P starts somewhere new and looks different. In WAP the sites take turns at a normal rate; in MAT several irritable foci fire fast."),
    P("lk-af-mat", "Atrial fibrillation vs MAT", ["ekr-afrvr", "ekr-mat"],
      "Can you find real P waves? MAT has them (3+ shapes); AF has none, just a wavy baseline.",
      [["P waves", "None; fibrillatory baseline", "Present, 3+ shapes"], ["PR interval", "Not measurable", "Measurable, may vary"], ["Rhythm", "Irregularly irregular", "Irregular"]],
      "In AF hundreds of tiny impulses cancel each other out, so no organized P wave forms. In MAT each beat comes from one focus at a time, so each beat still makes a full P wave."),
    P("lk-af-flutter", "Atrial fibrillation vs atrial flutter", ["ekr-af", "ekr-flutter41"],
      "Look at the baseline between QRS complexes: chaotic squiggle (AF) or a repeating sawtooth (flutter)?",
      [["Baseline", "Chaotic, fibrillatory", "Regular sawtooth (F waves)"], ["Atrial rate", "Over 350, not countable", "250-350, countable"], ["Ventricular rhythm", "Irregularly irregular", "Usually regular (fixed 2:1, 4:1)"]],
      "Flutter is ONE reentry loop going around the right atrium, so every flutter wave is the same. AF is MANY random wavelets, so the baseline never repeats and the AV node gets hit at random."),
    P("lk-st-atach", "Sinus tachycardia vs atrial tachycardia vs flutter 2:1", ["ekr-st", "ekr-atach", "ekr-flutter21"],
      "Rate and the P wave: sinus tach is usually under 160 with a normal P; atrial tach is 160-250 with an odd P on the T; flutter sits at about 150 with a hidden second F wave.",
      [["Rate", "100-160", "160-250", "About 150 (atria about 300)"], ["P waves", "Normal sinus shape", "Small, pointed, may be on the T", "Sawtooth F waves, 2 per QRS"], ["Onset", "Gradual (standard teaching)", "Sudden", "Sudden"]],
      "Sinus tach is the SA node responding to the body (fever, pain), so it ramps up and down. Atrial tach is an ectopic focus that overrides the SA node. Flutter at 150 is a 300/min circuit halved by the AV node."),
    P("lk-junc-vent", "Junctional rhythm vs idioventricular rhythm", ["ekr-jr", "ekr-idio"],
      "How wide is the QRS? Narrow = junctional (above the bundle branches). Wide = ventricular.",
      [["QRS", "Narrow (normal)", "Wide, bizarre"], ["Rate", "40-60", "20-40"], ["P waves", "None, inverted, or after the QRS", "None"]],
      "A junctional beat starts above the His bundle, so it still travels down the fast Purkinje highway and the QRS stays narrow. A ventricular beat starts in the muscle and spreads cell to cell, so the QRS is slow and wide."),
    P("lk-junc-sb", "Junctional rhythm vs sinus bradycardia", ["ekr-jr", "ekr-sb"],
      "Look before each QRS: an upright normal P = sinus brady; no P, an inverted P, or a P after the QRS = junctional.",
      [["P waves", "None, inverted, or after the QRS", "Upright, normal, before every QRS"], ["PR", "Short or not measurable", "Normal 0.12-0.20"], ["Rate", "40-60", "Under 60"]],
      "In junctional rhythm the impulse starts in the middle (AV junction) and travels backwards up into the atria, so the P is inverted and arrives at the same time as or after the QRS."),
    P("lk-junc-rates", "The junctional family: name it by rate", ["ekr-jbrady", "ekr-jr", "ekr-ajr", "ekr-jtach"],
      "They all look the same (narrow, no upright P). Only the rate names them: under 40, 40-60, 60-100, over 100.",
      [["Rate", "Under 40", "40-60", "60-100", "100-180"], ["Meaning", "Junction slower than normal", "Junction's own escape rate", "Junction sped up", "Junction sped up more"]],
      "The AV junction's built-in rate is 40-60. Below that is a failing junction; above it means the junction has enhanced automaticity (digoxin, ischemia) and is overriding the SA node."),
    P("lk-vent-rates", "Idioventricular vs AIVR vs ventricular tachycardia", ["ekr-idio", "ekr-aivr", "ekr-vt"],
      "All wide with no P waves; the rate names them: 20-40, 40-100, over 100.",
      [["Rate", "20-40", "40-100", "100-250"], ["Meaning", "Ventricular escape (last backup)", "Faster ventricular escape", "Ventricles firing fast on their own"]],
      "The ventricles' own rate is 20-40. AIVR is a ventricular focus a little faster than that (classic after reperfusion); VT is an irritable focus or reentry loop firing over 100."),
    P("lk-mobitz", "2nd degree type I vs type II", ["ekr-avb2i", "ekr-avb2ii"],
      "Look at the PR just before and after the dropped beat. Getting longer then drop = type I. Same PR then drop = type II.",
      [["PR interval", "Progressively lengthens", "Constant"], ["Dropped beats", "After the PR gets longest", "Suddenly, without warning"], ["QRS", "Usually narrow", "Often wide"], ["Level of block", "AV node", "His-Purkinje system"], ["Danger", "Usually benign", "Can progress to 3rd degree"]],
      "The AV node fatigues gradually, so its delay grows beat by beat until one fails (type I). The His-Purkinje system is all-or-nothing, so it conducts normally until it suddenly doesn't (type II)."),
    P("lk-ii-iii", "2nd degree type II vs 3rd degree block", ["ekr-avb2ii", "ekr-avb3"],
      "Do the conducted beats have a fixed PR? Yes = type II. No relationship at all (P waves march through) = 3rd degree.",
      [["PR interval", "Constant on the conducted beats", "No true interval; varies"], ["P to QRS", "Some P waves conduct", "No P waves conduct"], ["Ventricular rhythm", "Irregular (drops)", "Regular (escape rhythm)"]],
      "In type II some impulses still get through the His-Purkinje system. In 3rd degree none do, so an escape pacemaker below the block drives the ventricles at its own steady rate."),
    P("lk-first-nsr", "1st degree AV block vs normal sinus rhythm", ["ekr-avb1", "ekr-nsr"],
      "Measure the PR: more than one big box (0.20 s) = 1st degree.",
      [["PR interval", "Over 0.20 s, constant", "0.12-0.20 s"], ["Every P conducted?", "Yes", "Yes"]],
      "Everything else is identical because every impulse still gets through; the AV node just holds each one a little longer."),
    P("lk-ectopics", "PAC vs PJC vs PVC", ["ekr-pac", "ekr-pjc", "ekr-pvc"],
      "Look at the early beat: odd early P + narrow QRS = PAC; no/inverted P + narrow QRS = PJC; no P + wide QRS = PVC.",
      [["P wave", "Early, different shape", "None, inverted, or after the QRS", "None"], ["QRS", "Narrow", "Narrow", "Wide, bizarre"], ["Pause after", "Not fully compensatory (standard teaching)", "Varies", "Full compensatory pause"]],
      "Where the beat starts decides its shape. Atrial start: its own P, then the normal pathway (narrow). Junction start: backwards P, normal pathway down (narrow). Ventricular start: no P and slow cell-to-cell spread (wide)."),
    P("lk-pause-ii", "Sinus pause vs 2nd degree type II", ["ekr-pause", "ekr-avb2ii"],
      "In the gap, is there a P wave? No P = sinus pause (the SA node stopped). A P with no QRS = AV block.",
      [["During the gap", "No P and no QRS", "A P wave with no QRS after it"], ["Problem", "SA node failed to fire", "Impulse blocked below the AV node"]],
      "A pause means the impulse was never made. A block means it was made (you see the P) but couldn't reach the ventricles."),
    P("lk-sa-af", "Sinus arrhythmia vs atrial fibrillation", ["ekr-sa", "ekr-af"],
      "Is there an upright P before every QRS? Yes = sinus arrhythmia. No P, wavy baseline = AF.",
      [["P waves", "Normal, before every QRS", "None"], ["Pattern", "Speeds up and slows down with breathing", "No pattern at all"]],
      "In sinus arrhythmia the SA node is still the pacemaker; only vagal tone changes with breathing. In AF the SA node has lost control to chaotic atrial activity."),
    P("lk-vt-vf", "Ventricular tachycardia vs VF vs torsades", ["ekr-vt", "ekr-vf", "ekr-torsades"],
      "Are there real repeating QRS complexes? Same-shape wide complexes = VT; complexes that twist and change height = torsades; no complexes at all = VF.",
      [["QRS", "Wide, all the same", "None, chaotic waves", "Wide, twisting around the baseline"], ["Rate", "100-250", "Not measurable", "Very fast"], ["Clue", "3+ PVCs in a row", "No pulse", "Long QT"]],
      "VT is one focus firing fast, so each beat looks the same. Torsades comes from a long QT and the axis rotates beat to beat. VF is many foci firing at random, so no organized depolarization occurs.")
  ];

  window.EKG_COMPARE = { columns: COLUMNS, chart: chart, pairs: pairs };
}());
