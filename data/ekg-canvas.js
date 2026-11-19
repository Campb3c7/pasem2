/* EKG Canvas practice: everything else from Canvas that shows a strip or a 12-lead, one set per source.
   - 12-Lead Review (EKG Interpretation Application, Marriott): 10 12-leads, answers verbatim from
     "12 Lead Review_answers.docx". Pictures: images/ekg-canvas/tlr-<n>.webp (printed header line cropped).
   - Rhythm Review (same course): 27 unlabeled strips with no answer key. Where the original picture had a
     title hidden by the slide's crop, that title is the answer (src "slide"); the rest are our read
     (src "ours"). Skipped: slide 4 (crop too short to call), 12 (same strip as Examplify exq-17),
     21 (P waves can't be told from T waves), 22 (paper-speed demo, rate on the 60 line).
     Pictures: images/ekg-canvas/rr-<slide>.webp, cropped exactly as the slide shows them.
   - EKG Interpretation lecture: built at runtime from window.EKG_SLIDES (data/ekg-slides.js).
   - EKG Application (11/9 class polls): built at runtime from window.EKG_CLASS_POLLS; no pictures.
   Q(id, alt, question, answer, [3 wrong], why, src). Ids "tlr-<n>" and "rr-<slide>" are progress keys. */
(function () {
  "use strict";
  function Q(id, alt, question, answer, wrong, why, src) {
    return { id: id, image: "images/ekg-canvas/" + id + ".webp", alt: alt, question: question, answer: answer, wrong: wrong, why: why, src: src || "key" };
  }
  var TW = "What is the proper interpretation of this 12 lead EKG?";
  var RH = "What is the rhythm of this EKG strip?";

  window.EKG_CANVAS = {
    sets: [
      {
        id: "twelve-review", title: "12-Lead Review", note: "Answers from the 12 Lead Review answer key.",
        items: [
          Q("tlr-1", "12-lead with a fast rhythm, negative QRS in II, III and aVF, and an rSR' in V1", TW,
            "Sinus tachycardia with LAD and RBBB",
            ["Sinus tachycardia with RAD and RBBB", "Sinus tachycardia with LAD and LBBB", "Atrial flutter with LAD and RBBB"],
            "A P wave leads every QRS above 100, lead I is up while II and aVF are down (left axis), and V1 has a wide rSR' (right bundle branch block)."),
          Q("tlr-2", "12-lead with a regular rhythm and ST elevation in V1 and V2", TW,
            "NSR with septal STEMI (and borderline RAE)",
            ["NSR with inferior STEMI (and borderline RAE)", "NSR with anterolateral STEMI", "NSR with diffuse ST segment elevation consistent with acute pericarditis"],
            "The ST elevation stays in V1-V2, the septal leads, and the tall-ish P waves in II only reach borderline right atrial enlargement."),
          Q("tlr-3", "12-lead with a slow rhythm, P waves unrelated to the QRS, and ST elevation in V1-V3", TW,
            "3rd degree AVB with anteroseptal STEMI",
            ["2nd degree AVB type 2 with anteroseptal STEMI", "3rd degree AVB with inferior STEMI", "1st degree AVB with anteroseptal STEMI"],
            "The P waves march through at their own rate with no steady PR (complete block), and the ST elevation runs across V1-V3, the anteroseptal leads."),
          Q("tlr-4", "12-lead with a fast, irregularly irregular narrow rhythm and very tall precordial QRS complexes", TW,
            "Atrial fibrillation with RVR (and borderline LVH)",
            ["Atrial flutter with RVR (and borderline LVH)", "Multifocal atrial tachycardia (and borderline LVH)", "Sinus tachycardia with LVH"],
            "The narrow beats come over 100 at uneven, patternless intervals with no clear P waves, and the precordial voltage is high but only borderline for LVH."),
          Q("tlr-5", "12-lead with wide QRS complexes, each preceded by a sharp spike", TW,
            "Ventricular pacemaker rhythm",
            ["Left bundle branch block", "Accelerated idioventricular rhythm", "Ventricular tachycardia"],
            "A sharp pacer spike comes right before every wide QRS, so the ventricles are being paced rather than conducting on their own."),
          Q("tlr-6", "12-lead with a regular sinus rhythm and a long gap between each P wave and QRS", TW,
            "1st degree AVB",
            ["2nd degree AVB type 1", "Normal sinus rhythm", "3rd degree AVB"],
            "Every P conducts to a QRS, but each PR is longer than 0.20 s (more than one big box), which is first degree block."),
          Q("tlr-7", "12-lead with a fast sinus rhythm and two wide early beats of different shapes", TW,
            "Sinus tachycardia with two multifocal PVCs",
            ["Sinus tachycardia with two unifocal PVCs", "Sinus tachycardia with two PACs", "Normal sinus rhythm with ventricular bigeminy"],
            "The underlying sinus beats run over 100, and the two wide early beats with no P wave look different from each other, so they come from different foci."),
          Q("tlr-8", "12-lead with a regular sinus rhythm around 100 and a notched P wave", TW,
            "NSR (or sinus tachycardia if HR over 100bpm) (with borderline LAE)",
            ["Sinus tachycardia with RAE", "Junctional tachycardia", "NSR with LVH"],
            "A P wave comes before every narrow QRS at a rate right around 100, and the P is only borderline wide/notched for left atrial enlargement."),
          Q("tlr-9", "12-lead with ST elevation in most leads", TW,
            "NSR with diffuse ST segment elevation consistent with acute pericarditis",
            ["NSR with anterolateral STEMI", "NSR with inferior STEMI", "NSR with peaked T waves suggestive of hyperkalemia"],
            "The ST elevation is concave and spread across many leads that don't fit one coronary territory, which points to pericarditis instead of a STEMI."),
          Q("tlr-10", "12-lead with grouped beats, an rSR' in V1 and one wide early beat on the rhythm strip", TW,
            "2nd degree AVB type 1 with RBBB and 1 PVC",
            ["2nd degree AVB type 2 with RBBB and 1 PVC", "1st degree AVB with RBBB and 1 PVC", "2nd degree AVB type 1 with LBBB and 1 PVC"],
            "The PR stretches out until a P wave fails to conduct (Wenckebach), V1 has a wide rSR' (RBBB), and one wide early beat on the rhythm strip is a PVC.")
        ]
      },
      {
        id: "rhythm-review", title: "Rhythm Review", note: "No answer key came with this deck: answers marked \"slide\" come from the picture's own hidden title, the rest are our read.",
        items: [
          Q("rr-2", "Strip with a P wave before every QRS and R-R gaps that widen and narrow in a cycle", RH,
            "Sinus arrhythmia", ["Normal sinus rhythm with PACs", "Atrial fibrillation", "Wandering atrial pacemaker"],
            "Every beat has the same upright P and PR, but the gaps between beats stretch and shrink gradually, which is sinus arrhythmia.", "ours"),
          Q("rr-3", "Slow, regular strip of narrow QRS complexes with no P waves", RH,
            "Junctional escape rhythm", ["Sinus bradycardia", "Idioventricular rhythm", "Accelerated junctional rhythm"],
            "The QRS is narrow and regular with no P waves at about 50 bpm, which fits the junction's 40-60 escape rate.", "ours"),
          Q("rr-5", "Sinus strip with two early narrow beats followed by short pauses", RH,
            "Normal sinus rhythm with PACs", ["Normal sinus rhythm with PVCs", "Sinus arrhythmia", "Normal sinus rhythm with sinus pauses"],
            "Two narrow beats with a P wave come early and are followed by a pause shorter than two full cycles, which is how PACs behave.", "ours"),
          Q("rr-6", "Slow, regular strip with an upright P wave before each narrow QRS", RH,
            "Sinus bradycardia", ["Normal sinus rhythm", "Junctional escape rhythm", "First degree AV block"],
            "Each narrow QRS has a normal P in front of it, and the beats sit far apart (a rate under 60), so it is a slow sinus rhythm.", "slide"),
          Q("rr-7", "Strip with a P wave before every QRS, a steady PR and uneven gaps between beats", RH,
            "Sinus arrhythmia", ["Second degree AV block, type I", "Sinus rhythm with PACs", "Atrial fibrillation"],
            "Every QRS has the same P in front at the same PR, and the only thing that changes is the gap between beats, so it is sinus arrhythmia.", "ours"),
          Q("rr-8", "Sinus strip with three wide early beats of different shapes", RH,
            "Normal sinus rhythm with multiform (multifocal) PVCs", ["Normal sinus rhythm with unifocal PVCs", "Normal sinus rhythm with aberrant PACs", "Ventricular bigeminy"],
            "The three wide beats with no P come early and point in different directions, so each comes from a different spot in the ventricles.", "slide"),
          Q("rr-9", "Regular sinus strip that suddenly stops for one long flat gap, then resumes", RH,
            "Normal sinus rhythm with a sinus pause", ["Second degree AV block, type II", "Normal sinus rhythm with a blocked PAC", "Sinus arrhythmia"],
            "The gap has no P wave at all (so nothing was blocked at the AV node), which means the SA node itself briefly stopped firing.", "ours"),
          Q("rr-10", "Strip with a regular sawtooth baseline between narrow QRS complexes", RH,
            "Atrial flutter", ["Atrial fibrillation", "Multifocal atrial tachycardia", "Sinus tachycardia"],
            "Identical flutter waves form an even sawtooth between the QRSs, with several flutter waves per beat, which is atrial flutter.", "slide"),
          Q("rr-11", "Sinus strip with two narrow beats that arrive early", RH,
            "Normal sinus rhythm with PACs", ["Normal sinus rhythm with PVCs", "Sinus arrhythmia", "Second degree AV block, type I"],
            "Two narrow beats show up early in an otherwise regular sinus rhythm and look like the normal QRS, which marks them as atrial.", "ours"),
          Q("rr-13", "Regular strip of wide QRS complexes, each starting with a thin sharp spike", RH,
            "Ventricular paced rhythm", ["Idioventricular rhythm", "Ventricular tachycardia", "Normal sinus rhythm with a bundle branch block"],
            "A thin pacer spike starts every wide QRS at a steady rate, so a pacemaker in the ventricle is driving each beat.", "ours"),
          Q("rr-14", "Slow, regular strip of small narrow QRS complexes with no P waves", RH,
            "Junctional escape rhythm", ["Sinus bradycardia", "Idioventricular rhythm", "Third degree AV block"],
            "The narrow QRSs come about every 1.5 seconds (around 40 bpm) with no P wave in front, which is the junction escaping at its own 40-60 rate.", "ours"),
          Q("rr-15", "Sinus strip with one narrow beat that comes early with a P wave", RH,
            "Normal sinus rhythm with a PAC (premature atrial contraction)", ["Normal sinus rhythm with a PVC", "Normal sinus rhythm with a PJC", "Sinus arrhythmia"],
            "One narrow beat with its own P wave arrives early, then the sinus rhythm picks back up, which is a PAC.", "slide"),
          Q("rr-16", "Two strips of chaotic, uneven waves with no recognizable QRS", RH,
            "Ventricular fibrillation", ["Ventricular tachycardia", "Torsades de pointes", "Atrial fibrillation"],
            "There are no real QRS complexes, just disorganized waves of changing size and shape, which is ventricular fibrillation.", "slide"),
          Q("rr-17", "Flat, gently wandering line with no waves at all", RH,
            "Asystole", ["Fine ventricular fibrillation", "Idioventricular rhythm", "Third degree AV block"],
            "There are no P waves, QRS complexes or fibrillation waves, only a flat drifting baseline, so there is no electrical activity.", "ours"),
          Q("rr-18", "Fast, regular strip with an upright P wave before each narrow QRS", RH,
            "Sinus tachycardia", ["Supraventricular tachycardia", "Atrial flutter", "Normal sinus rhythm"],
            "Each narrow QRS has a normal P in front of it and the rate is about 130, a sinus rhythm over 100.", "slide"),
          Q("rr-19", "Regular strip around 70 bpm with a small inverted P wave just before each narrow QRS", RH,
            "Accelerated junctional rhythm", ["Normal sinus rhythm", "Junctional escape rhythm", "Junctional tachycardia"],
            "The P is upside down in lead II and sits right before the QRS (made in the junction), and the rate is about 70, between 60 and 100.", "ours"),
          Q("rr-20", "Strip of regular small P waves and slow, regular wide QRS complexes that don't line up with them", RH,
            "Third degree (complete) AV block with a ventricular escape", ["Second degree AV block, type II", "Normal sinus rhythm with PVCs", "Idioventricular rhythm"],
            "The P waves march at their own faster rate and the slow wide QRSs march at theirs with no fixed PR, so nothing gets through the AV node.", "ours"),
          Q("rr-23", "Slow, regular strip of very wide QRS complexes with no P waves", RH,
            "Idioventricular rhythm", ["Junctional escape rhythm", "Ventricular tachycardia", "Ventricular paced rhythm"],
            "The QRSs are wide and bizarre with no P waves at a slow rate, so the ventricles are firing on their own at their 20-40 rate.", "slide"),
          Q("rr-24", "Sinus strip where one P wave is not followed by a QRS", RH,
            "Second degree AV block, type I (Wenckebach)", ["Second degree AV block, type II", "Normal sinus rhythm with a sinus pause", "Normal sinus rhythm with a blocked PAC"],
            "The P waves keep a steady rate, the PR gets a little longer each beat, and then one P drops its QRS, which is Wenckebach.", "ours"),
          Q("rr-25", "Fast, regular strip of wide, rounded complexes with no P waves", RH,
            "Ventricular tachycardia (monomorphic)", ["Ventricular fibrillation", "Torsades de pointes", "Supraventricular tachycardia"],
            "Wide complexes of one shape come fast and regular with no P waves, which is monomorphic VT.", "ours"),
          Q("rr-26", "Strip of regular P waves with lengthening PR intervals and one P that is not followed by a QRS", RH,
            "Second degree AV block, type I (Wenckebach)", ["Second degree AV block, type II", "Third degree AV block", "First degree AV block"],
            "The PR grows a little with each beat until one P wave stands alone, and the PR after the drop is short again, which is Wenckebach.", "ours"),
          Q("rr-27", "Irregularly irregular strip of narrow QRS complexes with a wavy baseline and no P waves", RH,
            "Atrial fibrillation", ["Atrial flutter", "Multifocal atrial tachycardia", "Sinus arrhythmia"],
            "There are no P waves, only a wavy baseline, and the narrow beats come at uneven, patternless intervals.", "slide"),
          Q("rr-28", "Fast, irregular strip with P waves of several different shapes", RH,
            "Multifocal atrial tachycardia (MAT)", ["Atrial fibrillation", "Wandering atrial pacemaker", "Sinus tachycardia"],
            "Each beat has a P wave, but the P shapes and PR intervals keep changing (3 or more kinds) and the rate is over 100.", "slide")
        ]
      }
    ]
  };
}());
