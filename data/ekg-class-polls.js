/*
  EKG class poll questions from the EKG App session (Marriott, 11/9/2026), with the answers marked
  correct in the session results. Open-ended polls (J point, U waves, delta wave, long QT, junctional vs
  ventricular, calcium, RVH) were turned into multiple choice using the deck's answer. Used by
  ekg-mock.js (Class poll review + mixed into the mock exam). Ids poll-<n>: append only.
  Q(prompt, answer, [wrong answers], explanation)
*/
(function () {
  "use strict";
  function Q(prompt, answer, wrong, why) { return { prompt: prompt, answer: answer, wrong: wrong, why: why }; }

  var questions = [
    Q("What is the definition of the excitability of myocardial cells?", "Respond to an impulse", ["Produce their own impulse", "Transmit an impulse", "Contract when stimulated"],
      "Excitability (irritability) = the ability to respond to an impulse. Producing an impulse is automaticity, transmitting it is conductivity, and contracting is contractility."),
    Q("What is the proper order of the heart's conduction pathway?", "SA node → atria → AV node → bundle of His → bundle branches → Purkinje fibers", ["SA node → AV node → atria → bundle of His → Purkinje fibers → bundle branches", "AV node → SA node → atria → bundle branches → bundle of His → Purkinje fibers", "SA node → atria → bundle of His → AV node → bundle branches → Purkinje fibers"],
      "Top to bottom: SA node fires, the atria depolarize, the AV node delays, then His, bundle branches and Purkinje fibers spread it through the ventricles."),
    Q("What is the normal maximum duration of a QRS complex?", "0.12 seconds", ["0.08 seconds", "0.16 seconds", "0.20 seconds"],
      "A normal QRS is under 0.12 s (3 small boxes). 0.12 s or more is wide (bundle branch block, ventricular beat)."),
    Q("At what height compared with the R wave in the same lead does a Q wave qualify as pathologic?", "33.3% (one third)", ["10%", "20%", "25%"],
      "Pathologic Q: wider than 0.04 s and at least 1/3 the height of the R, in 2+ contiguous leads. A physiologic q is under 25% of the R."),
    Q("What complex represents depolarization of the ventricles on the EKG?", "QRS complex", ["P wave", "T wave", "QT interval"],
      "P = atrial depolarization, QRS = ventricular depolarization, T = ventricular repolarization."),
    Q("What does the P wave represent?", "RA followed by LA depolarization", ["Only RA depolarization", "LA followed by RA depolarization", "Atrial repolarization"],
      "The SA node sits in the RA, so the RA depolarizes first (first part of the P) and the LA last (terminal part)."),
    Q("What is the J point?", "Where the QRS ends and the ST segment begins", ["Where the P wave meets the QRS", "The peak of the T wave", "Where the T wave returns to baseline"],
      "The J point is the junction between the end of the QRS and the start of the ST segment. ST elevation or depression is measured 0.04 s after it."),
    Q("When can you see U waves on an EKG?", "Hypokalemia (and slow heart rates), after the T wave", ["Hyperkalemia, before the P wave", "Pericarditis, inside the ST segment", "Junctional rhythm, before the QRS"],
      "A U wave is a positive deflection after the T wave. It is classic for hypokalemia and is more visible with bradycardia."),
    Q("What does the delta wave represent?", "Ventricular pre-excitation through an accessory pathway (WPW)", ["Delayed ventricular depolarization from a bundle branch block", "Atrial repolarization", "Early repolarization of the ventricles"],
      "The accessory pathway skips the AV node's delay, so part of the ventricle depolarizes early: short PR and a slurred QRS upstroke."),
    Q("Which leads evaluate the inferior wall of the heart?", "II, III, aVF", ["I, aVL, V5, V6", "V1, V2", "aVR"],
      "The inferior triangle: II, III and aVF all look up at the bottom of the heart."),
    Q("Which leads evaluate the lateral wall of the heart?", "I, aVL, V5, V6", ["II, III, aVF", "V1, V2, V3", "aVR, V1"],
      "I and aVL are high lateral; V5 and V6 are low lateral."),
    Q("True or false: you can use the 300-150-100 method to calculate rate on an irregular rhythm.", "False", ["True", "True, if the rate is over 100", "True, if you average two R-R intervals"],
      "The 300 method uses one R-R interval, so it only works when the rhythm is regular. For irregular rhythms, count the QRS complexes in 6 seconds and multiply by 10."),
    Q("Why does a prolonged QT interval predispose patients to life-threatening dysrhythmias?", "It lengthens the vulnerable repolarization period, so an early beat (R on T) can trigger torsades de pointes", ["It shortens the refractory period so the atria fire too fast", "It blocks the AV node and causes complete heart block", "It decreases preload so the ventricles stop filling"],
      "During the long repolarization, parts of the ventricle are vulnerable. A premature impulse landing then can start torsades, which can degenerate to VF."),
    Q("Which of the following is true of a PAC?", "It originates outside the SA node and causes a beat that looks morphologically normal", ["It originates inside the SA node and causes a normal-looking beat", "It originates inside the SA node and causes an abnormal-looking beat", "It originates outside the SA node and causes a wide, abnormal beat"],
      "A PAC comes from an ectopic atrial focus (outside the SA node). It has its own odd P, but it travels the normal pathway, so the QRS looks normal."),
    Q("How can you differentiate wandering atrial pacemaker from multifocal atrial tachycardia?", "WAP has a rate of 60-100 and MAT has a rate of 100-160", ["WAP has a rate of 100-160 and MAT 60-100", "WAP requires 2 leads to diagnose and MAT 1", "WAP has 3+ P shapes and MAT has only one"],
      "Both have 3+ P-wave shapes and an irregular rhythm. Only the rate separates them."),
    Q("How can you differentiate junctional dysrhythmias from ventricular dysrhythmias?", "Junctional rhythms have a narrow QRS; ventricular rhythms have a wide, bizarre QRS", ["Junctional rhythms have no P waves; ventricular rhythms have upright P waves", "Junctional rhythms are always faster than ventricular ones", "Ventricular rhythms have a short PR interval"],
      "A junctional impulse still uses the His-Purkinje system (narrow QRS). A ventricular impulse spreads cell to cell (wide QRS, 0.12 s or more)."),
    Q("Atrial fibrillation often requires patients to be on blood thinners. Why?", "Loss of atrial kick lets blood pool in the atria and clot", ["The heart rate is greater than 200", "Loss of ventricular kick", "The heart rate is greater than 100"],
      "The quivering atria don't contract, so blood stagnates (especially in the left atrial appendage) and can form clots that embolize (stroke)."),
    Q("All of the following types of PVCs warn of myocardial ischemia EXCEPT which one?", "Unifocal PVCs", ["Multifocal PVCs", "Early (R on T) PVCs", "Frequent or grouped PVCs"],
      "Multifocal, early, frequent and grouped PVCs suggest an irritable, ischemic ventricle. Occasional unifocal PVCs are the least worrying."),
    Q("If you have a positive QRS in lead I but a negative QRS in aVF, what is the axis?", "Left axis deviation", ["Normal axis", "Right axis deviation", "Extreme axis deviation"],
      "Lead I up, aVF down: thumbs leaving each other = left axis deviation."),
    Q("Which of the following produces a right axis deviation?", "Thin individuals", ["Pregnancy", "Abdominal obesity", "Large pneumoperitoneum"],
      "Thin people and children have a more vertical heart (right axis). Anything that raises the diaphragm (pregnancy, obesity, abdominal distention) makes it horizontal (left axis)."),
    Q("Which of the following is true about axis deviation?", "Hypertrophy shifts the axis toward the enlarged region, and infarction shifts it away from the infarct", ["Hypertrophy shifts the axis away from the enlarged region", "Infarction shifts the axis toward the infarct", "Neither hypertrophy nor infarction changes the axis"],
      "More muscle = more voltage toward it. Dead tissue = no vector, so the opposite forces win."),
    Q("Which of the following is seen on an EKG with left atrial enlargement?", "Terminal P wave drops at least 1 mm below the isoelectric line in V1", ["P wave taller than 2.5 mm in lead II", "Biphasic P in V1 with the initial part taller", "Inverted P wave"],
      "The LA makes the end of the P wave, so LAE deepens the terminal part in V1. A tall P (> 2.5 mm) or a taller initial part is right atrial enlargement."),
    Q("What would you see on an EKG for a patient with RVH?", "Right axis deviation and an R wave larger than the S wave in V1", ["Left axis deviation and deep S waves in V1", "Tall R waves in V5-V6 over 26 mm", "A delta wave"],
      "Axis goes toward hypertrophy: the thick RV pulls it right and gives V1 (over the RV) a tall R."),
    Q("Which fascicle is the most clinically relevant yet most fragile?", "Anterior fascicle", ["Septal fascicle", "Posterior fascicle", "His bundle"],
      "The left anterior fascicle is the longest and thinnest, with the most fragile blood supply."),
    Q("Which leads are best for identifying a LBBB?", "V5 and V6", ["V1 and V2", "V3 and V4", "III and aVF"],
      "LBBB: wide, tall R with a flat or notched top in V5-V6. RBBB is best seen in V1-V2 (rabbit ears)."),
    Q("Where do we look on the EKG to evaluate ST depression or elevation?", "0.04 seconds after the J point", ["0.08 seconds after the J point", "0.12 seconds after the J point", "At the peak of the T wave"],
      "Compare the ST segment 0.04 s (1 small box) after the J point with the PR segment baseline."),
    Q("What is the earliest reliable sign of an acute MI on an EKG?", "ST segment elevation", ["T wave inversion", "ST segment depression", "Q wave changes"],
      "ST elevation (injury) is the earliest reliable sign. Q waves come hours to days later (infarction)."),
    Q("Which set of criteria diagnoses a STEMI?", "ST elevation > 1 mm in limb leads or > 2 mm in precordial leads, 0.04 s after the J point, in 2+ leads facing the same area", ["ST elevation > 2 mm in limb leads or > 1 mm in precordial leads, in any 2 leads", "ST depression > 1 mm in 2+ leads facing the same area", "ST elevation > 1 mm in any single lead, measured at the T-wave peak"],
      "All four parts were marked correct in class: >1 mm limb, >2 mm precordial, 2+ leads facing the same area, measured 0.04 s right of the J point."),
    Q("What is the characteristic finding of pericarditis on an EKG?", "Diffuse ST segment elevation", ["Diffuse Q waves", "T wave inversion before the ST segment normalizes", "Delta wave"],
      "Pericarditis irritates the whole heart surface: diffuse, saggy ST elevation. T inversion comes only after the ST normalizes, and no Q waves form."),
    Q("What is the characteristic finding of hyperkalemia on an EKG?", "Peaked T waves", ["Flat T waves", "U waves", "Shortened PR interval"],
      "Peaked T waves come first; then flat P, long PR, wide QRS and finally a sine wave. Flat T and U waves are hypokalemia."),
    Q("How can you differentiate hypocalcemia from hypercalcemia on an EKG?", "Hypocalcemia prolongs the QT; hypercalcemia shortens it", ["Hypocalcemia shortens the QT; hypercalcemia prolongs it", "Hypocalcemia peaks the T wave; hypercalcemia flattens it", "Hypocalcemia causes U waves; hypercalcemia causes delta waves"],
      "Calcium sets the length of the plateau (ST segment). Low calcium = long ST and QT (risk of torsades); high calcium = short QT.")
  ];

  window.EKG_CLASS_POLLS = questions.map(function (q, i) { q.id = "poll-" + (i + 1); return q; });
}());
