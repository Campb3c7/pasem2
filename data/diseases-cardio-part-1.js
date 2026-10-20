/*
  Cardio Part 1 Diseases tool data. Each disease lecture file sets its own
  global; this file gathers them in lecture order. Anatomy, Physiology and
  H&P teach no diseases, so they have no entries here.
  Question ids are "<disease id>|<index>": only append questions.
*/
window.CARDIO_PART1_DISEASES = {
  lectures: [window.CARDIO_DISEASES_LIPIDS, window.CARDIO_DISEASES_HYPERTENSION,
    window.CARDIO_DISEASES_CARDIOMYOPATHIES, window.CARDIO_DISEASES_VALVULAR].filter(Boolean)
};
