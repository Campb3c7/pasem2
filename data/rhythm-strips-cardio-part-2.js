/*
  Cardio Part 2 Rhythm strips: the rhythms from the Arrhythmias and Arrhythmia Management decks,
  drawn fresh by data/rhythm-synth.js every time. Engine: rhythm-strips.js.
  Each rhythm: id (rs-*, a progress key: never rename), name, gen (synth spec), rate (expected
  measured-rate range on a 6-second strip, checked by the validator), look (rate / rhythm / P / PR /
  QRS), clue (the one thing that names it), mgmt (from the slides), steps (answer keys for
  "Read it step by step"; null = not used there) and confuse (3+ look-alike ids for the quiz).
  Facts not on the slides say "(standard teaching)".
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
        irregular: "Irregularly irregular (no pattern)"
      }
    },
    p: {
      title: "What do the P waves look like?",
      options: {
        normal: "Upright P before every QRS",
        most: "Upright P before the normal beats, none before the early wide ones",
        early: "Mostly normal, plus an early P with a different shape",
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
        short: "Short (under 0.12 s)",
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
        delta: "Slightly wide with a slurred start (delta wave)"
      }
    }
  };

  function R(id, name, gen, rate, look, clue, mgmt, steps, confuse) {
    return { id: id, name: name, gen: gen, rate: rate, look: look, clue: clue, mgmt: mgmt, steps: steps, confuse: confuse };
  }
  function look(rate, rhythm, p, pr, qrs) { return { rate: rate, rhythm: rhythm, p: p, pr: pr, qrs: qrs }; }
  function st(reg, p, pr, qrs) { return { reg: reg, p: p, pr: pr, qrs: qrs }; }

  var groups = [
    {
      id: "sinus", title: "Sinus rhythms", blurb: "The SA node is in charge: an upright P before every narrow QRS.",
      rhythms: [
        R("rs-nsr", "Normal sinus rhythm", { gen: "sinus", rate: [64, 96] }, [60, 100],
          look("60-100", "Regular", "Upright, one before every QRS", "0.12-0.20 s, constant", "Narrow"),
          "Everything normal: the SA node fires 60-100 times a minute.",
          "Nothing to treat. This is the baseline every other strip is compared to.",
          st("regular", "normal", "normal", "narrow"), ["rs-sinus-brady", "rs-sinus-tach", "rs-first-degree", "rs-sinus-arrhythmia"]),
        R("rs-sinus-brady", "Sinus bradycardia", { gen: "sinus", rate: [40, 54] }, [38, 58],
          look("Under 60", "Regular", "Upright, one before every QRS", "Normal, constant", "Narrow"),
          "Looks exactly like normal sinus, just under 60.",
          "Asymptomatic: no treatment. Unstable: atropine 1 mg IV every 3-5 min (up to 3 mg), then temporary pacing; permanent pacemaker is definitive. Stable: look for causes (medications, hypothyroidism, acute MI).",
          st("regular", "normal", "normal", "narrow"), ["rs-junctional", "rs-first-degree", "rs-nsr", "rs-mobitz1"]),
        R("rs-sinus-tach", "Sinus tachycardia", { gen: "sinus", rate: [108, 140], pr: [0.12, 0.15] }, [104, 145],
          look("Over 100 (often 100-160)", "Regular", "Upright, one before every QRS", "Normal, constant", "Narrow"),
          "Fast but every beat still has its own upright P. Comes on and settles gradually.",
          "It is enhanced normal automaticity, not reentry. Treat the cause, such as fever, pain, hypovolemia or anemia (standard teaching); it is not a rhythm to shock or give adenosine for.",
          st("regular", "normal", "normal", "narrow"), ["rs-svt", "rs-flutter-2-1", "rs-mat", "rs-af-rvr"]),
        R("rs-sinus-arrhythmia", "Sinus arrhythmia", { gen: "sinus", rate: [66, 84], phasic: true }, [55, 100],
          look("Usually 60-100", "P-P varies by 0.12 s or more", "Upright, one before every QRS, all the same shape", "Normal, constant", "Narrow"),
          "Every beat is a normal sinus beat, but the spacing stretches and shrinks with breathing.",
          "Respiratory (phasic) sinus arrhythmia is common and benign, especially in the young; no further cardiac work-up needed.",
          st("phasic", "normal", "normal", "narrow"), ["rs-af", "rs-mat", "rs-pac", "rs-sinus-pause"]),
        R("rs-sinus-pause", "Sinus pause / arrest", { gen: "pause", rate: [66, 84] }, [25, 60],
          look("Underlying 60-100, slowed by the pause", "Regular, then a long gap", "Normal, then none during the pause", "Normal, constant", "Narrow"),
          "A long flat stretch with no P wave and no QRS: the SA node simply stopped firing for a moment.",
          "Part of sick sinus syndrome. Treat reversible causes and stop offending drugs; permanent pacemaker if symptoms persist.",
          st("pause", "normal", "normal", "narrow"), ["rs-mobitz2", "rs-pac", "rs-sinus-arrhythmia", "rs-mobitz1"])
      ]
    },
    {
      id: "atrial", title: "Atrial rhythms", blurb: "The atria are firing on their own: early P waves, flutter waves, or no P waves at all.",
      rhythms: [
        R("rs-pac", "Premature atrial contraction (PAC)", { gen: "ectopic", type: "pac", rate: [64, 86] }, [60, 105],
          look("Usually 60-100", "Regular with an early beat", "Early P with a different shape", "Normal", "Narrow (same as the others)"),
          "One beat comes early, has its own odd-looking P, and is followed by a short pause.",
          "Usually benign: reassure, cut caffeine, alcohol and stress. Symptomatic: beta blocker. Catheter ablation if PACs keep triggering AF.",
          st("early", "early", "normal", "narrow"), ["rs-pvc", "rs-sinus-arrhythmia", "rs-af", "rs-mat"]),
        R("rs-af", "Atrial fibrillation (rate controlled)", { gen: "af", rate: [70, 98] }, [60, 105],
          look("Variable; controlled here", "Irregularly irregular", "None; chaotic baseline", "None", "Narrow"),
          "No P waves anywhere and the QRS spacing never repeats.",
          "Rate control and anticoagulation decisions (CHA2DS2-VASc). Treat the rate when it is over 110.",
          st("irregular", "fib", "none", "narrow"), ["rs-mat", "rs-af-rvr", "rs-sinus-arrhythmia", "rs-flutter-4-1"]),
        R("rs-af-rvr", "Atrial fibrillation with RVR", { gen: "af", rate: [118, 150] }, [108, 160],
          look("Over 100 (RVR)", "Irregularly irregular", "None; chaotic baseline", "None", "Narrow"),
          "Fast, no P waves, and irregularly irregular.",
          "Unstable: synchronized cardioversion. Stable: rate control with a beta blocker or diltiazem when the rate is over 110, plus anticoagulation decisions.",
          st("irregular", "fib", "none", "narrow"), ["rs-mat", "rs-flutter-2-1", "rs-svt", "rs-sinus-tach"]),
        R("rs-flutter-2-1", "Atrial flutter with 2:1 block", { gen: "flutter", ratio: 2, atrialRate: [290, 310] }, [140, 160],
          look("About 150", "Regular", "Sawtooth flutter waves (about 300/min)", "None", "Narrow"),
          "A regular narrow rhythm at about 150: always look for a hidden second flutter wave.",
          "Like AF: rate control and anticoagulation. Radiofrequency ablation of the circuit is preferred and highly successful; synchronized cardioversion is the alternative.",
          st("regular", "flutter", "none", "narrow"), ["rs-svt", "rs-sinus-tach", "rs-af-rvr", "rs-mat"]),
        R("rs-flutter-4-1", "Atrial flutter with 4:1 block", { gen: "flutter", ratio: 4, atrialRate: [285, 315] }, [68, 82],
          look("About 75", "Regular", "Sawtooth flutter waves, 4 per QRS", "None", "Narrow"),
          "Sawtooth baseline with four flutter waves between each QRS.",
          "Same as any flutter: anticoagulation decisions, then ablation (preferred) or cardioversion.",
          st("regular", "flutter", "none", "narrow"), ["rs-af", "rs-nsr", "rs-flutter-2-1", "rs-mobitz2"]),
        R("rs-mat", "Multifocal atrial tachycardia (MAT)", { gen: "mat", rate: [106, 128] }, [98, 136],
          look("Over 100", "Irregular", "3 or more different P shapes", "Varies", "Narrow"),
          "Fast and irregular like AF, but you can see P waves, and they come in at least 3 shapes.",
          "Treat the lung disease (COPD). AV nodal blocking drugs for rate. Cardioversion and ablation have no effect.",
          st("irregular", "varied", "variable", "narrow"), ["rs-af-rvr", "rs-sinus-tach", "rs-pac", "rs-af"])
      ]
    },
    {
      id: "junctional", title: "Junctional & pre-excitation", blurb: "Rhythms that start at or loop through the AV junction, plus the accessory pathway of WPW.",
      rhythms: [
        R("rs-svt", "AVNRT (paroxysmal SVT)", { gen: "svt", rate: [168, 190] }, [160, 200],
          look("Often 170-180", "Regular", "Not seen (buried in the QRS)", "None", "Narrow"),
          "Very fast, perfectly regular and narrow, with no P waves you can find. Starts and stops suddenly.",
          "Unstable: synchronized cardioversion. Stable: vagal maneuvers first, then adenosine, then a beta blocker or calcium channel blocker.",
          st("regular", "none", "none", "narrow"), ["rs-sinus-tach", "rs-flutter-2-1", "rs-vt", "rs-af-rvr"]),
        R("rs-wpw", "Wolff-Parkinson-White pattern", { gen: "sinus", rate: [64, 92], pr: [0.085, 0.1], delta: true }, [60, 100],
          look("Usually normal", "Regular", "Upright, one before every QRS", "Short (under 120 ms)", "Slightly wide with a delta wave"),
          "Short PR that runs straight into a slurred upstroke (the delta wave).",
          "Asymptomatic pattern: watch. Avoid AV nodal blockers (adenosine, beta blockers, verapamil/diltiazem, digoxin) and IV amiodarone in pre-excited AF; procainamide for stable pre-excited tachycardia, cardioversion if unstable; ablation is definitive.",
          st("regular", "normal", "short", "delta"), ["rs-nsr", "rs-first-degree", "rs-pvc", "rs-junctional"]),
        R("rs-junctional", "Junctional escape rhythm", { gen: "junctional", rate: [42, 56] }, [38, 60],
          look("40-60", "Regular", "Absent or inverted after the QRS", "None", "Narrow"),
          "Slow, regular and narrow with no upright P: the AV node has taken over.",
          "The AV node (backup pacemaker, 40-60) takes over when the SA node fails. Find the cause and treat symptomatic slowing like other bradycardia: atropine, then pacing (standard teaching).",
          st("regular", "retro", "none", "narrow"), ["rs-sinus-brady", "rs-idioventricular", "rs-chb", "rs-flutter-4-1"])
      ]
    },
    {
      id: "blocks", title: "AV blocks", blurb: "Count P waves against QRS complexes and watch what the PR interval does.",
      rhythms: [
        R("rs-first-degree", "First-degree AV block", { gen: "sinus", rate: [62, 86], pr: [0.26, 0.34] }, [58, 92],
          look("Usually normal", "Regular", "Upright, one before every QRS", "Over 200 ms, constant", "Narrow"),
          "Every P conducts; the PR is just long (more than one big box).",
          "Asymptomatic: no treatment. In ACS it can signal a higher risk of progressing to complete heart block.",
          st("regular", "normal", "long", "narrow"), ["rs-nsr", "rs-mobitz1", "rs-wpw", "rs-sinus-brady"]),
        R("rs-mobitz1", "Second-degree AV block, Mobitz I (Wenckebach)", { gen: "wenckebach", atrialRate: [74, 88] }, [45, 75],
          look("Slightly slow", "Grouped beats (irregular in a pattern)", "Upright, regular; one without a QRS", "Lengthens each beat, then a P is dropped", "Narrow"),
          "Longer, longer, longer, drop: the beats come in groups.",
          "Asymptomatic: none. Symptomatic and unstable: atropine 1 mg IV, then temporary pacing. Rarely progresses to complete block.",
          st("pattern", "extra", "progressive", "narrow"), ["rs-mobitz2", "rs-first-degree", "rs-chb", "rs-pac"]),
        R("rs-mobitz2", "Second-degree AV block, Mobitz II", { gen: "mobitz2", atrialRate: [72, 90] }, [40, 80],
          look("Slow", "Regular P waves, QRS missing at times", "Upright, regular; some without a QRS", "Constant, then a sudden drop", "Often wide (75% are below the His)"),
          "The PR never changes, then a P wave just doesn't conduct.",
          "Higher risk: can progress to complete block or asystole. Pacing pads now, permanent pacemaker. Atropine often doesn't work.",
          st("pattern", "extra", "dropped", "wide"), ["rs-mobitz1", "rs-chb", "rs-sinus-pause", "rs-flutter-4-1"]),
        R("rs-chb", "Third-degree (complete) heart block", { gen: "chb", atrialRate: [72, 92], rate: [30, 40] }, [25, 45],
          look("Ventricles 20-40 wide (40-60 if narrow escape)", "Both regular, but independent", "Regular, more P waves than QRS", "Varies; no relationship", "Wide (ventricular escape) here"),
          "P waves march through at their own rate and the QRS complexes march at theirs: AV dissociation.",
          "Transcutaneous or transvenous pacing, then a permanent pacemaker. The escape rhythm often fails to keep up cardiac output.",
          st("regular", "extra", "varies", "wide"), ["rs-mobitz2", "rs-idioventricular", "rs-mobitz1", "rs-junctional"])
      ]
    },
    {
      id: "ventricular", title: "Ventricular & arrest rhythms", blurb: "Wide, bizarre complexes from the ventricles, and the shockable and unshockable arrest rhythms.",
      rhythms: [
        R("rs-pvc", "Premature ventricular contraction (PVC)", { gen: "ectopic", type: "pvc", rate: [64, 86] }, [55, 100],
          look("Usually 60-100", "Regular with an early beat", "None before the early beat", "None for the early beat", "Early beat is wide and bizarre"),
          "An early wide beat with no P wave, then a full compensatory pause.",
          "Usually benign. Symptomatic: beta blockers. Frequent PVCs: look for structural heart disease, electrolytes, ischemia.",
          st("early", "most", "normal", "mixed"), ["rs-pac", "rs-pvc-bigeminy", "rs-wpw", "rs-vt"]),
        R("rs-pvc-bigeminy", "PVCs in bigeminy", { gen: "ectopic", type: "pvc", rate: [64, 82], every: 2 }, [55, 95],
          look("Usually 60-100", "Irregular in a repeating pattern", "Before the normal beats only", "Normal for the normal beats", "Every second beat is wide"),
          "Normal, wide, normal, wide: every second beat is a PVC (every third = trigeminy).",
          "Same as PVCs: treat symptoms with beta blockers and look for a cause.",
          st("pattern", "most", "normal", "mixed"), ["rs-pvc", "rs-mobitz1", "rs-pac", "rs-vt"]),
        R("rs-idioventricular", "Ventricular escape (idioventricular) rhythm", { gen: "idioventricular", rate: [24, 38] }, [20, 42],
          look("20-40", "Regular", "None", "None", "Wide"),
          "Very slow, wide and regular with no P waves: the ventricles are the last backup pacemaker.",
          "Both the SA and AV nodes have failed, so the output is poor and it can deteriorate to asystole. Pacing and treating the cause (standard teaching).",
          st("regular", "none", "none", "wide"), ["rs-chb", "rs-junctional", "rs-vt", "rs-sinus-brady"]),
        R("rs-vt", "Monomorphic ventricular tachycardia", { gen: "vt", rate: [148, 182] }, [140, 190],
          look("Often 140-180", "Regular", "None seen", "None", "Wide, all the same shape"),
          "Fast, regular, wide and every complex looks the same.",
          "Pulseless: defibrillate (ACLS). Unstable with a pulse: synchronized cardioversion (100 J). Stable: amiodarone 150 mg IV or procainamide.",
          st("regular", "none", "none", "wide"), ["rs-svt", "rs-torsades", "rs-vf", "rs-idioventricular"]),
        R("rs-torsades", "Torsades de pointes (polymorphic VT)", { gen: "torsades" }, null,
          look("Very fast", "Irregular", "None", "None", "Wide, twisting around the baseline"),
          "Wide complexes that grow and shrink in a spindle, twisting around the baseline. Think long QT.",
          "Pulseless: unsynchronized shock. Magnesium 1-2 g IV. Stop QT-prolonging drugs and fix potassium and magnesium.",
          null, ["rs-vf", "rs-vt", "rs-af-rvr", "rs-flutter-2-1"]),
        R("rs-vf", "Ventricular fibrillation", { gen: "vf" }, null,
          look("None (no organized beats)", "Chaotic", "None", "None", "No QRS complexes"),
          "Chaotic squiggles with no real QRS complexes. Can be coarse, intermediate or fine.",
          "Shockable: CPR and defibrillate right away, epinephrine and amiodarone per ACLS.",
          null, ["rs-torsades", "rs-asystole", "rs-vt", "rs-af"]),
        R("rs-asystole", "Asystole", { gen: "asystole" }, null,
          look("None", "None", "None", "None", "None"),
          "A flat line. Check the leads and gain, and confirm in a second lead (standard teaching).",
          "Not shockable: CPR for 2 minutes and epinephrine per ACLS. Fewer than 2% survive.",
          null, ["rs-vf", "rs-idioventricular", "rs-chb", "rs-sinus-pause"])
      ]
    }
  ];


  window.CARDIO2_RHYTHMS = { steps: STEPS, groups: groups };
}());
