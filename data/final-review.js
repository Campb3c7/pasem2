/* Final review (Anna, 2026-11-22, night before the Cardio 3 exam): ready-made application-style MCQ sets she brings,
   one per lecture, shown as written (no new questions). Same engine as Exam prep and Vignettes (exam-prep.js,
   createExamPrep), its own progress key. Add a lecture by adding data/final-review-<lecture>.js and its script tag.
     FinalReview.lecture({ id, title, short, group, source, concepts, qs: [F...] })   id = the Slide by slide lecture id.
     F(concept, kind, prompt, answer, [3 wrong], why)   why = the set's own explanation, kept as given.
   Question ids "<lecture>|<index>": only append. Run node scripts/validate-final-review.cjs after editing. */
(function () {
  "use strict";
  var reg = window.CARDIO3_FINAL_REVIEW = window.CARDIO3_FINAL_REVIEW || { course: "cardio-part-3", lectures: [] };
  window.FinalReview = {
    F: function (concept, kind, prompt, answer, wrong, why) { return { concept: concept, kind: kind, n: 0, prompt: prompt, answer: answer, wrong: wrong, why: why }; },
    lecture: function (l) { reg.lectures.push(l); }
  };
})();
