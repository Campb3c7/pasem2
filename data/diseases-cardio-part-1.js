/*
  Cardio Part 1 Diseases tool data. Each lecture file sets its own global;
  this file gathers them in lecture order. Anatomy, Physiology, H&P and
  Cardiac Devices hold the conditions those lectures teach you to recognize.
  Question ids are "<disease id>|<index>": only append questions.
*/
window.CARDIO_PART1_DISEASES = {
  lectures: [window.CARDIO_DISEASES_ANATOMY, window.CARDIO_DISEASES_PHYSIOLOGY, window.CARDIO_DISEASES_HP,
    window.CARDIO_DISEASES_LIPIDS, window.CARDIO_DISEASES_HYPERTENSION_PART1,
    window.CARDIO_DISEASES_HYPERTENSION_PART2, window.CARDIO_DISEASES_HYPERTENSION_PART3, window.CARDIO_DISEASES_HYPERTENSIVE_CRISIS, window.CARDIO_DISEASES_DEVICES,
    window.CARDIO_DISEASES_CARDIOMYOPATHIES, window.CARDIO_DISEASES_VALVULAR].filter(Boolean)
};
