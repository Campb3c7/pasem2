/*
  EKG Rhythm trainer: every rhythm in EKG objectives 8 and 9 (plus torsades, objective 10), drawn fresh
  by data/rhythm-synth.js every time. Engine: rhythm-strips.js (createRhythmTool, prefix "ekg-rhythms").
  Rates and looks follow the EKG Rhythm Study Guide; "why" lines follow the EKG Interpretation deck
  (Marriott). Each rhythm: id (ekr-*, a progress key: never rename), name, gen (synth spec), rate
  (expected measured-rate range on a 6-second strip, checked by the validator), look, clue, why
  (the pathophysiology, shown as "Why it happens"), steps (null = not in step mode) and confuse.
*/
(function () {
  "use strict";

  // Step-by-step answer sets. Keys are stable; labels can change.
  var STEPS = {
    reg: {
      title: "Is the rhythm regular?",
      options: {
        regular: "Regular",
        phasic: "Speeds up and slows down in waves",
        pause: "Regular, then a long pause",
        early: "Regular, with early beats",
        pattern: "Irregular in a repeating pattern",
        irregular: "Irregular (no pattern)"
      }
    },
    p: {
      title: "What do the P waves look like?",
      options: {
        normal: "Upright sinus P before every QRS",
        ectopic: "A P before every QRS, but small, pointed, not sinus-shaped",
        most: "Sinus P before the normal beats, none before the early wide ones",
        early: "Mostly sinus, plus an early P with a different shape",
        junction: "Sinus P waves, plus an early beat with an inverted P after it",
        none: "No P waves (flat baseline)",
        fib: "No P waves, wavy chaotic baseline",
        flutter: "Sawtooth flutter waves",
        varied: "P waves of 3 or more shapes",
        extra: "More P waves than QRS complexes",
        retro: "Absent or inverted after the QRS"
      }
    },
    pr: {
      title: "What does the PR interval do?",
      options: {
        normal: "Normal (0.12-0.20 s) and constant",
        long: "Over 0.20 s, but constant",
        short: "Short (under 0.12 s) or on the edge",
        progressive: "Gets longer and longer, then a beat drops",
        dropped: "Constant, with sudden dropped beats",
        variable: "Changes from beat to beat",
        varies: "No relationship: P and QRS march separately",
        none: "Nothing to measure (no P before the QRS)"
      }
    },
    qrs: {
      title: "How wide is the QRS?",
      options: {
        narrow: "Narrow (under 0.12 s)",
        wide: "Wide (0.12 s or more)",
        mixed: "Narrow, except wide early beats",
        none: "No QRS complexes"
      }
    }
  };

  function R(id, name, gen, rate, look, clue, why, steps, confuse) {
    return { id: id, name: name, gen: gen, rate: rate, look: look, clue: clue, mgmt: why, steps: steps, confuse: confuse };
  }
  function look(rate, rhythm, p, pr, qrs) { return { rate: rate, rhythm: rhythm, p: p, pr: pr, qrs: qrs }; }
  function st(reg, p, pr, qrs) { return { reg: reg, p: p, pr: pr, qrs: qrs }; }

  var groups = [
    {
      id: "sinus", title: "Sinus rhythms", blurb: "The SA node is in charge: an upright P before every narrow QRS. Only the rate or the spacing changes.",
      rhythms: [
        R("ekr-nsr", "Normal sinus rhythm", { gen: "sinus", rate: [64, 96] }, [60, 100],
          look("60-100", "Regular", "Normal, one before every QRS", "0.12-0.20 s, constant", "Narrow"),
          "Everything normal: P before every QRS, PR 0.12-0.20, QRS under 0.12, rate 60-100.",
          "The SA node has the fastest automaticity, so it sets the pace and the impulse travels the normal path: atria, AV node, His, bundle branches, Purkinje.",
          st("regular", "normal", "normal", "narrow"), ["ekr-sb", "ekr-st", "ekr-avb1", "ekr-sa"]),
        R("ekr-sb", "Sinus bradycardia", { gen: "sinus", rate: [40, 54] }, [38, 58],
          look("Under 60", "Regular", "Normal", "Normal", "Normal"),
          "Normal but slow: every beat is a sinus beat, just under 60.",
          "The SA node fires slower than normal (more vagal tone, athletes, sleep, beta blockers, hypothyroidism, inferior MI), but conduction is normal.",
          st("regular", "normal", "normal", "narrow"), ["ekr-jr", "ekr-avb1", "ekr-nsr", "ekr-jbrady"]),
        R("ekr-st", "Sinus tachycardia", { gen: "sinus", rate: [108, 140], pr: [0.12, 0.15] }, [104, 145],
          look("100-160", "Regular", "Normal", "Normal", "Normal (QT may shorten)"),
          "Normal but fast: 100-160 and every beat still has its own upright P.",
          "The SA node fires faster because of sympathetic drive (fever, pain, exercise, hypovolemia, anemia). Faster rate means a shorter QT.",
          st("regular", "normal", "normal", "narrow"), ["ekr-atach", "ekr-flutter21", "ekr-jtach", "ekr-mat"]),
        R("ekr-sa", "Sinus arrhythmia (dysrhythmia)", { gen: "sinus", rate: [66, 84], phasic: true }, [55, 100],
          look("60-100", "Irregular", "Normal, all the same shape", "Normal", "Normal"),
          "Irregular, but every component is there and normal: only the spacing between beats stretches and shrinks.",
          "The SA node speeds up when you breathe in and slows when you breathe out (vagal tone changes with respiration). Normal, especially in the young.",
          st("phasic", "normal", "normal", "narrow"), ["ekr-af", "ekr-wap", "ekr-pac", "ekr-pause"]),
        R("ekr-pause", "Sinus arrest / pause", { gen: "pause", rate: [66, 84] }, [25, 60],
          look("Depends on the underlying rhythm", "Regular with an irregular beat (the gap)", "Normal, none during the pause", "Normal", "Normal"),
          "A break in the rhythm: a flat stretch with no P and no QRS, then sinus beats start again.",
          "The SA node fails to fire for a moment, so nothing depolarizes the atria or ventricles. Part of sick sinus syndrome; can be from drugs or ischemia.",
          st("pause", "normal", "normal", "narrow"), ["ekr-avb2ii", "ekr-pac", "ekr-sa", "ekr-avb2i"])
      ]
    },
    {
      id: "atrial", title: "Atrial rhythms", blurb: "A focus in the atria takes over from the SA node: odd P waves, P waves of many shapes, flutter waves, or no P waves at all.",
      rhythms: [
        R("ekr-atach", "Atrial tachycardia", { gen: "atach", rate: [168, 200] }, [160, 205],
          look("160-250", "Regular", "Abnormal; may be buried in the preceding T", "+/- shortened", "Normal"),
          "Regular, narrow and very fast (over 160), with a small pointed P that often sits on the previous T wave.",
          "One irritable ectopic focus in the atria fires faster than the SA node and overrides it.",
          st("regular", "ectopic", "short", "narrow"), ["ekr-st", "ekr-flutter21", "ekr-jtach", "ekr-mat"]),
        R("ekr-wap", "Wandering atrial pacemaker", { gen: "mat", rate: [64, 88] }, [56, 98],
          look("60-100", "Irregular", "3 or more different shapes", "Usually normal but may vary", "Normal"),
          "P waves keep changing shape (at least 3 shapes) and the rate is under 100.",
          "The pacemaker shifts between the SA node and different atrial sites, so each beat starts in a different place and the P looks different.",
          st("irregular", "varied", "variable", "narrow"), ["ekr-mat", "ekr-sa", "ekr-af", "ekr-pac"]),
        R("ekr-mat", "Multifocal atrial tachycardia (MAT)", { gen: "mat", rate: [110, 128] }, [102, 140],
          look("100-160", "Irregular", "3 or more different shapes", "Usually normal but may vary", "Normal"),
          "WAP over 100: 3+ P shapes, irregular, fast. Think COPD.",
          "Several irritable atrial foci fire in turn (rapidly shifting pacemaker), classically from hypoxia and atrial stretch in COPD.",
          st("irregular", "varied", "variable", "narrow"), ["ekr-wap", "ekr-afrvr", "ekr-st", "ekr-af"]),
        R("ekr-flutter21", "Atrial flutter with 2:1 conduction", { gen: "flutter", ratio: 2, atrialRate: [290, 310] }, [140, 160],
          look("Atria 250-350; ventricles 150 here", "Usually regular", "Sawtooth flutter waves", "Not measurable", "Normal"),
          "Regular and narrow at about 150: look hard for a second flutter wave hiding in the T.",
          "A reentry circuit loops around the right atrium about 300 times a minute. The AV node can't pass them all, so it lets every 2nd (or 3rd, 4th) one through.",
          st("regular", "flutter", "none", "narrow"), ["ekr-st", "ekr-atach", "ekr-afrvr", "ekr-flutter41"]),
        R("ekr-flutter41", "Atrial flutter with 4:1 conduction", { gen: "flutter", ratio: 4, atrialRate: [285, 315] }, [68, 82],
          look("Atria 250-350; ventricles about 75", "Usually regular", "Sawtooth, 4 per QRS", "Not measurable", "Normal"),
          "Sawtooth baseline with four flutter waves between each QRS.",
          "Same right-atrial reentry circuit; the AV node blocks 3 of every 4 flutter waves.",
          st("regular", "flutter", "none", "narrow"), ["ekr-af", "ekr-nsr", "ekr-flutter21", "ekr-avb2ii"]),
        R("ekr-af", "Atrial fibrillation (controlled, CVR)", { gen: "af", rate: [70, 96] }, [60, 105],
          look("CVR under 100", "Irregularly irregular", "None; fibrillatory baseline", "Not measurable", "Normal"),
          "No P waves anywhere, a wavy baseline, and the QRS spacing never repeats.",
          "Hundreds of chaotic impulses fire all over the atria, so the atria quiver instead of contracting (blood pools: clot risk, hence blood thinners). The AV node lets them through at random.",
          st("irregular", "fib", "none", "narrow"), ["ekr-wap", "ekr-afrvr", "ekr-sa", "ekr-flutter41"]),
        R("ekr-afrvr", "Atrial fibrillation with RVR", { gen: "af", rate: [118, 150] }, [108, 160],
          look("RVR over 100", "Irregularly irregular", "None; fibrillatory baseline", "Not measurable", "Normal"),
          "Fast, no P waves, and irregularly irregular.",
          "Same chaotic atrial activity, but the AV node conducts more of it, so the ventricles race (rapid ventricular response).",
          st("irregular", "fib", "none", "narrow"), ["ekr-mat", "ekr-flutter21", "ekr-st", "ekr-af"])
      ]
    },
    {
      id: "junctional", title: "Junctional rhythms", blurb: "The AV junction is pacing: narrow QRS with no P, an inverted P, or a P after the QRS. The rate names it.",
      rhythms: [
        R("ekr-jbrady", "Junctional bradycardia", { gen: "junctional", rate: [30, 38] }, [27, 41],
          look("Under 40", "Regular", "None, inverted, or after the QRS", "Normal or not measurable", "Normal"),
          "Junctional beats (narrow, no upright P) slower than the junction's own 40-60.",
          "The SA node has failed and even the AV junction is firing below its normal backup rate.",
          st("regular", "retro", "none", "narrow"), ["ekr-jr", "ekr-sb", "ekr-idio", "ekr-avb3"]),
        R("ekr-jr", "Junctional (escape) rhythm", { gen: "junctional", rate: [44, 56] }, [42, 59],
          look("40-60", "Regular", "None, inverted, or after the QRS", "Normal or not measurable", "Normal"),
          "Narrow and regular at 40-60 with no upright P: the AV node sets the pace.",
          "The SA node fails, so the next pacemaker down (AV junction, intrinsic rate 40-60) escapes. The impulse goes up into the atria backwards, so the P is inverted or hidden.",
          st("regular", "retro", "none", "narrow"), ["ekr-sb", "ekr-jbrady", "ekr-ajr", "ekr-idio"]),
        R("ekr-ajr", "Accelerated junctional rhythm", { gen: "junctional", rate: [66, 94] }, [62, 98],
          look("60-100", "Regular", "None, inverted, or after the QRS", "Normal, short, or N/A", "Normal"),
          "Junctional beats at a 'normal' rate of 60-100: faster than the junction should fire.",
          "The AV junction speeds up past its own 40-60 (enhanced automaticity, e.g. digoxin toxicity, ischemia) and overtakes the SA node.",
          st("regular", "retro", "none", "narrow"), ["ekr-jr", "ekr-nsr", "ekr-jtach", "ekr-aivr"]),
        R("ekr-jtach", "Junctional tachycardia", { gen: "junctional", rate: [108, 140] }, [102, 145],
          look("100-180", "Regular", "None, inverted, or after the QRS", "Normal, short, or N/A", "Normal"),
          "Junctional beats over 100: narrow, regular, fast, with no upright P.",
          "The AV junction speeds up even more and overrides the SA node.",
          st("regular", "retro", "none", "narrow"), ["ekr-st", "ekr-atach", "ekr-ajr", "ekr-flutter21"])
      ]
    },
    {
      id: "ventricular", title: "Ventricular rhythms", blurb: "The ventricles are pacing themselves: wide, bizarre QRS with no P waves, plus the arrest rhythms.",
      rhythms: [
        R("ekr-idio", "Idioventricular rhythm", { gen: "idioventricular", rate: [24, 38] }, [20, 42],
          look("20-40", "Regular", "None", "Not measurable", "Wide; QT abnormal"),
          "Very slow, wide and regular, no P waves: 3 or more ventricular escape beats in a row.",
          "Both the SA node and the AV junction have failed, so the ventricles (last backup, 20-40) take over. Output is poor.",
          st("regular", "none", "none", "wide"), ["ekr-avb3", "ekr-jr", "ekr-aivr", "ekr-jbrady"]),
        R("ekr-aivr", "Accelerated idioventricular rhythm", { gen: "idioventricular", rate: [52, 88] }, [45, 95],
          look("40-100", "Regular", "None", "Not measurable", "Wide"),
          "Wide ventricular beats with no P at 40-100: faster than the ventricles' own 20-40.",
          "A ventricular focus fires faster than its intrinsic rate (classic after reperfusion of an MI) and overtakes a slow sinus node.",
          st("regular", "none", "none", "wide"), ["ekr-idio", "ekr-vt", "ekr-ajr", "ekr-avb3"]),
        R("ekr-vt", "Ventricular tachycardia", { gen: "vt", rate: [150, 185] }, [140, 190],
          look("100-250", "Regular", "None", "Not measurable", "Wide (monomorphic here)"),
          "Fast, regular, wide and bizarre with no P waves. 3 or more PVCs in a row = VT.",
          "An irritable ventricular focus (or a reentry loop around scar) fires rapidly. Fast and uncoordinated, so filling and output drop; can degrade to VF.",
          st("regular", "none", "none", "wide"), ["ekr-torsades", "ekr-aivr", "ekr-vf", "ekr-atach"]),
        R("ekr-torsades", "Torsades de pointes (polymorphic VT)", { gen: "torsades" }, null,
          look("Very fast", "Irregular", "None", "None", "Wide, twisting around the baseline"),
          "Wide complexes that grow and shrink in a spindle, twisting around the baseline. Think long QT.",
          "A long QT leaves a long vulnerable repolarization window; an early beat landing on the T (R on T) triggers polymorphic VT that can turn into VF.",
          null, ["ekr-vf", "ekr-vt", "ekr-afrvr", "ekr-flutter21"]),
        R("ekr-vf", "Ventricular fibrillation", { gen: "vf" }, null,
          look("Not measurable", "Rapid and chaotic", "None", "Not measurable", "Wavy, not discernible"),
          "Chaotic squiggles with no real QRS complexes.",
          "Many ventricular foci fire chaotically, so the ventricles quiver and never depolarize together: no output, no pulse.",
          null, ["ekr-torsades", "ekr-asys", "ekr-vt", "ekr-af"]),
        R("ekr-asys", "Asystole", { gen: "asystole" }, null,
          look("Not measurable", "Not measurable", "None", "Not measurable", "None"),
          "Flat line: no electrical activity. Check the leads and confirm in another lead.",
          "Every pacemaker site has failed, so nothing depolarizes.",
          null, ["ekr-vf", "ekr-idio", "ekr-avb3", "ekr-pause"])
      ]
    },
    {
      id: "blocks", title: "AV blocks", blurb: "Count P waves against QRS complexes and watch what the PR interval does.",
      rhythms: [
        R("ekr-avb1", "1st degree AV block", { gen: "sinus", rate: [62, 86], pr: [0.26, 0.34] }, [58, 92],
          look("Depends on the underlying rhythm", "Regular", "Normal", "Prolonged (over 0.20 s), constant", "Normal"),
          "Every P conducts; the PR is just longer than one big box.",
          "Conduction through the AV node is delayed but never blocked (drugs, vagal tone, ischemia, aging).",
          st("regular", "normal", "long", "narrow"), ["ekr-nsr", "ekr-avb2i", "ekr-sb", "ekr-jr"]),
        R("ekr-avb2i", "2nd degree AV block, type I (Wenckebach)", { gen: "wenckebach", atrialRate: [74, 88] }, [45, 75],
          look("Atrial rate greater than ventricular", "Atria regular; ventricles irregular", "Normal; some without a QRS", "Progressive lengthening, then a drop", "Normal"),
          "Longer, longer, longer, drop: the beats come in groups.",
          "The AV node itself gets more tired with each beat until one P can't get through; then it recovers and the cycle starts over. Usually benign.",
          st("pattern", "extra", "progressive", "narrow"), ["ekr-avb2ii", "ekr-avb1", "ekr-avb3", "ekr-pac"]),
        R("ekr-avb2ii", "2nd degree AV block, type II", { gen: "mobitz2", atrialRate: [72, 90] }, [40, 80],
          look("Atrial rate greater than ventricular", "Atria regular; ventricles irregular", "Normal; some without a QRS", "Constant, then a sudden drop", "Often wide"),
          "The PR never changes, then a P suddenly isn't conducted.",
          "The block is below the AV node (His or bundle branches): conduction is all or nothing, so beats drop without warning. Can progress to 3rd degree.",
          st("pattern", "extra", "dropped", "wide"), ["ekr-avb2i", "ekr-avb3", "ekr-pause", "ekr-flutter41"]),
        R("ekr-avb3", "3rd degree (complete) AV block", { gen: "chb", atrialRate: [72, 92], rate: [30, 40] }, [25, 45],
          look("Atria normal; ventricles 20-40 (wide) or 40-60 (narrow)", "Both regular, independent", "Normal, march through", "Varies; no relationship", "Wide here (ventricular escape)"),
          "P waves march at their rate and QRS complexes at theirs: AV dissociation.",
          "Nothing gets from the atria to the ventricles, so a junctional or ventricular escape pacemaker drives the ventricles on its own.",
          st("regular", "extra", "varies", "wide"), ["ekr-avb2ii", "ekr-idio", "ekr-avb2i", "ekr-jr"])
      ]
    },
    {
      id: "premature", title: "Early beats (PACs, PJCs, PVCs)", blurb: "One beat comes early. Where it starts decides what it looks like.",
      rhythms: [
        R("ekr-pac", "Normal sinus rhythm with a PAC", { gen: "ectopic", type: "pac", rate: [64, 86] }, [60, 105],
          look("Depends on the underlying rhythm", "Regular with an early beat", "Early P with a different shape", "Normal", "Normal"),
          "One beat comes early with its own odd-looking P, and the QRS is narrow like the others.",
          "An irritable atrial focus fires before the SA node is due; the impulse still goes down the normal pathway, so the QRS is normal.",
          st("early", "early", "normal", "narrow"), ["ekr-pjc", "ekr-pvc", "ekr-sa", "ekr-wap"]),
        R("ekr-pjc", "Normal sinus rhythm with a PJC", { gen: "ectopic", type: "pjc", rate: [64, 86] }, [60, 105],
          look("Depends on the underlying rhythm", "Regular with an early beat", "None, inverted, or after the QRS (early beat)", "Short or not measurable", "Normal"),
          "An early narrow beat with no upright P: the P is missing, inverted or just after the QRS.",
          "An irritable spot in the AV junction fires early; it conducts down normally (narrow QRS) and backwards into the atria (retrograde, inverted P).",
          st("early", "junction", "normal", "narrow"), ["ekr-pac", "ekr-pvc", "ekr-jr", "ekr-sa"]),
        R("ekr-pvc", "Normal sinus rhythm with a PVC", { gen: "ectopic", type: "pvc", rate: [64, 86] }, [55, 100],
          look("Depends on the underlying rhythm", "Regular with an early beat", "None before the early beat", "Not measurable for the early beat", "Early beat wide and bizarre"),
          "An early wide, bizarre beat with no P wave, then a full compensatory pause.",
          "A ventricular focus fires early and spreads muscle to muscle instead of through the Purkinje system, so the QRS is wide and the T points the opposite way.",
          st("early", "most", "normal", "mixed"), ["ekr-pac", "ekr-pjc", "ekr-bigeminy", "ekr-vt"]),
        R("ekr-bigeminy", "Ventricular bigeminy (PVC every other beat)", { gen: "ectopic", type: "pvc", rate: [64, 82], every: 2 }, [55, 95],
          look("Depends on the underlying rhythm", "Irregular in a repeating pattern", "Before the normal beats only", "Normal for the normal beats", "Every second beat wide"),
          "Normal, wide, normal, wide: every second beat is a PVC (every third = trigeminy).",
          "The same irritable ventricular focus fires after every sinus beat.",
          st("pattern", "most", "normal", "mixed"), ["ekr-pvc", "ekr-avb2i", "ekr-pac", "ekr-vt"])
      ]
    }
  ];

  window.EKG_RHYTHMS = { steps: STEPS, groups: groups };
}());
