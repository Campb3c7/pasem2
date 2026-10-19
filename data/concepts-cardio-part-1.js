/*
  Cardio Part 1 Concepts tool data. Each lecture file sets its own global;
  this file gathers them in lecture order. Concepts reuse the Diseases data
  shape and engine (diseases.js): lecture -> concept -> sections + questions.
  Question ids are "<concept id>|<index>": only append questions.
*/
window.CARDIO_PART1_CONCEPTS = {
  lectures: [window.CARDIO_CONCEPTS_ANATOMY, window.CARDIO_CONCEPTS_PHYSIOLOGY, window.CARDIO_CONCEPTS_HP].filter(Boolean)
};
