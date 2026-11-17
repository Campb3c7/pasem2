/* EKG Examplify: Anna's real exam-style questions, added one at a time (picture + question + the
   correct answer exactly as she gave it). Wrong choices and the "why" sentence are ours.
   Images live in images/ekg-examplify/<id>.webp (patient names, dates and ages blanked out).
   Q(id, image alt, question, correct answer, [3 wrong answers], why)
   Ids "exq-<n>" are progress keys: only append, never reorder or renumber. */
(function () {
  "use strict";
  function Q(id, alt, question, answer, wrong, why) {
    return { id: id, image: "images/ekg-examplify/" + id + ".webp", alt: alt, question: question, answer: answer, wrong: wrong, why: why };
  }
  var INTERP = "What is the proper interpretation of this 12 lead EKG?";

  window.EKG_EXAMPLIFY = {
    questions: [
      Q("exq-1", "12-lead EKG with a slow sinus rhythm and a wide early beat after every sinus beat", INTERP,
        "Sinus bradycardia with unifocal bigeminal PVCs",
        ["Sinus bradycardia with multifocal bigeminal PVCs", "Sinus bradycardia with unifocal trigeminal PVCs", "Normal sinus rhythm with bigeminal PACs"],
        "Every other beat is a wide, early QRS with no P wave and the same shape each time (unifocal bigeminy), and the sinus beats underneath run under 60."),
      Q("exq-2", "12-lead EKG with large ST elevations across the precordial leads", INTERP,
        "Normal sinus rhythm with right axis deviation and anterolateral STEMI",
        ["Normal sinus rhythm with left axis deviation and anterolateral STEMI", "Normal sinus rhythm with right axis deviation and inferior STEMI", "Normal sinus rhythm with right axis deviation and pericarditis"],
        "Tombstone ST elevation across V1-V4 marks an anterolateral STEMI, and a negative lead I with an upright aVF puts the axis to the right."),
      Q("exq-3", "12-lead EKG with ST elevation in the inferior leads and a long PR interval", INTERP,
        "First degree AV block with inferior STEMI (and right ventricular heart strain)",
        ["Second degree AV block type I with inferior STEMI", "First degree AV block with anterior STEMI", "First degree AV block with pericarditis"],
        "ST elevation in II, III and aVF with reciprocal ST depression in I and aVL is an inferior STEMI, and every P conducts after a PR longer than 0.20 s, so it is first degree block."),
      Q("exq-4", "12-lead EKG with ST elevation in V2-V5 and a wide biphasic P wave in V1", INTERP,
        "Normal sinus rhythm with left atrial enlargement and anterolateral STEMI",
        ["Normal sinus rhythm with right atrial enlargement and anterolateral STEMI", "Normal sinus rhythm with left atrial enlargement and inferior STEMI", "Normal sinus rhythm with left atrial enlargement and pericarditis"],
        "The P wave in V1 has a big, wide negative second half (left atrial enlargement), and ST elevation runs from V2 to V5 without the diffuse pattern of pericarditis, so it is an anterolateral STEMI."),
      Q("exq-5", "12-lead EKG with very tall precordial QRS complexes and tall peaked P waves", INTERP,
        "Normal sinus rhythm with right atrial enlargement and left ventricular hypertrophy",
        ["Normal sinus rhythm with left atrial enlargement and left ventricular hypertrophy", "Normal sinus rhythm with right atrial enlargement and right ventricular hypertrophy", "Sinus tachycardia with right atrial enlargement and left ventricular hypertrophy"],
        "The P waves in the inferior leads are tall and peaked (right atrial enlargement), and the huge S in V1-V2 plus tall R in V5-V6 meet voltage criteria for LVH."),
      Q("exq-6", "12-lead EKG with ST elevation in I, aVL and V2-V6", INTERP,
        "Normal sinus rhythm with anterolateral STEMI",
        ["Normal sinus rhythm with inferior STEMI", "Normal sinus rhythm with septal STEMI", "Normal sinus rhythm with pericarditis"],
        "ST elevation in V2-V6 plus I and aVL (with reciprocal depression in III and aVF) covers the anterior and lateral walls, so it is an anterolateral STEMI."),
      Q("exq-7", "12-lead EKG with narrow QRS complexes, no P waves and tall peaked T waves", INTERP,
        "Accelerated junctional rhythm with peaked T waves suggestive of hyperkalemia",
        ["Junctional escape rhythm with peaked T waves suggestive of hyperkalemia", "Accelerated junctional rhythm with hyperacute T waves of an anterior STEMI", "Normal sinus rhythm with peaked T waves suggestive of hyperkalemia"],
        "No P waves come before the narrow, regular QRS complexes and the rate is above 60 (accelerated junctional), and the tall, narrow, tented T waves point to high potassium."),
      Q("exq-8", "12-lead EKG with large ST elevations in II, III and aVF", INTERP,
        "Normal sinus rhythm with inferior STEMI",
        ["Normal sinus rhythm with anterolateral STEMI", "Normal sinus rhythm with pericarditis", "Sinus bradycardia with inferior STEMI"],
        "Tombstone ST elevation in II, III and aVF with reciprocal ST depression in aVL is an inferior STEMI (right coronary artery), not the diffuse, mild elevation of pericarditis."),
      Q("exq-9", "12-lead EKG with ST elevation in almost every lead", INTERP,
        "Normal sinus rhythm with widespread ST segment elevation consistent with pericarditis",
        ["Normal sinus rhythm with inferior STEMI", "Normal sinus rhythm with anterolateral STEMI", "Normal sinus rhythm with peaked T waves suggestive of hyperkalemia"],
        "Concave ST elevation shows up in nearly every lead (not one coronary territory) with PR depression and only aVR going the other way, which is pericarditis."),
      Q("exq-10", "12-lead EKG with wide QRS complexes, deep S waves in V1-V3 and ST elevation in V1-V3", INTERP,
        "Normal sinus rhythm with left axis deviation, left bundle branch block, and septoanterior STEMI",
        ["Normal sinus rhythm with left axis deviation and left bundle branch block only", "Normal sinus rhythm with right axis deviation, right bundle branch block, and septoanterior STEMI", "Normal sinus rhythm with left axis deviation, left bundle branch block, and inferior STEMI"],
        "A wide QRS with deep broad S waves in V1-V3 is LBBB, lead I up with II and aVF down is left axis, and ST elevation in V1-V3 far bigger than LBBB alone makes (Sgarbossa, standard teaching) flags a septoanterior STEMI."),
      Q("exq-11", "12-lead EKG with pairs of wide beats after every two sinus beats", INTERP,
        "First degree AV block with unifocal trigeminal PVC couplets",
        ["First degree AV block with multifocal trigeminal PVC couplets", "First degree AV block with unifocal bigeminal PVCs", "Normal sinus rhythm with unifocal trigeminal PVC couplets"],
        "Two same-shaped wide beats in a row (a unifocal couplet) keep returning after every two sinus beats, and those sinus beats have a PR longer than 0.20 s, so it is first degree block."),
      Q("exq-12", "12-lead EKG with ST elevation in V1-V4 and I and aVL", INTERP,
        "Normal sinus rhythm with septoanterolateral STEMI",
        ["Normal sinus rhythm with inferior STEMI", "Normal sinus rhythm with septal STEMI only", "Normal sinus rhythm with pericarditis"],
        "ST elevation starts in V1-V2 (septal), continues through V3-V4 (anterior) and shows in I and aVL (lateral), with reciprocal depression in III, so it spans the septal, anterior and lateral walls."),
      Q("exq-13", "12-lead EKG with a slow rate and an rSR' pattern in V1-V2", INTERP,
        "Sinus bradycardia with a right bundle branch block",
        ["Sinus bradycardia with a left bundle branch block", "Normal sinus rhythm with a right bundle branch block", "Sinus bradycardia with left anterior fascicular block"],
        "The rSR' (rabbit ears) in V1-V2 with a slurred S in I and V6 is a right bundle branch block, and the sinus beats come fewer than 60 a minute."),
      Q("exq-14", "12-lead EKG with a fast, regular, wide-complex rhythm and no P waves", INTERP,
        "Ventricular tachycardia with left axis deviation",
        ["Ventricular tachycardia with right axis deviation", "Supraventricular tachycardia with left axis deviation", "Ventricular fibrillation"],
        "A fast, regular, wide QRS with no P waves is VT (organized, unlike VF's chaos), and lead I upright with II, III and aVF negative puts the axis to the left."),
      Q("exq-15", "12-lead EKG with a slow rate and ST elevation in II, III and aVF", INTERP,
        "Sinus bradycardia with inferior STEMI",
        ["Normal sinus rhythm with inferior STEMI", "Sinus bradycardia with anterolateral STEMI", "Sinus bradycardia with pericarditis"],
        "ST elevation in II, III and aVF with reciprocal depression in I and aVL is an inferior STEMI, and the sinus rate is under 60 (common in inferior MI because the RCA feeds the SA and AV nodes).")
    ]
  };
}());
