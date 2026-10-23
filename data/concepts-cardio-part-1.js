/*
  Cardio Part 1 Concepts tool data. Each lecture file sets its own global;
  this file gathers them in lecture order. Concepts reuse the Diseases data
  shape and engine (diseases.js): lecture -> concept -> sections + questions.
  Question ids are "<concept id>|<index>": only append questions.
*/
window.CARDIO_PART1_CONCEPTS = {
  lectures: [window.CARDIO_CONCEPTS_ANATOMY, window.CARDIO_CONCEPTS_PHYSIOLOGY, window.CARDIO_CONCEPTS_HP,
    window.CARDIO_CONCEPTS_LIPIDS, window.CARDIO_CONCEPTS_HYPERTENSION, window.CARDIO_CONCEPTS_HYPERTENSIVE_CRISIS, window.CARDIO_CONCEPTS_DEVICES, window.CARDIO_CONCEPTS_CARDIOMYOPATHIES,
    window.CARDIO_CONCEPTS_VALVULAR].filter(Boolean)
};
