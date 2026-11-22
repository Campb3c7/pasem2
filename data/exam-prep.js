/* Exam prep (Anna, 2026-11-22, the night before the Cardio Part 3 exam): one high-yield, concept-first question set per
   lecture, meant for AFTER the slides. Only questions that test understanding: mechanism, why, next step, compare,
   predict, patient cases built on the LOs. No slide trivia. Mixed across lectures or one lecture at a time; misses come
   back; the results view ranks concepts weakest first.
   Registry + helpers; lecture files call ExamPrep.lecture({...}); the engine is exam-prep.js.
     ExamPrep.lecture({ id, title, short, group, concepts: { <concept id>: "Name" }, qs: [X...] })
       id must match the lecture's Slide by slide id so "See slide N" can show the real slide.
     X(concept, kind, slide, prompt, answer, [3 wrong], why)
       kind: "Mechanism" | "Why" | "Next step" | "Case" | "Compare" | "Predict" | "Pick the drug" | "Trap" | "Fact" | "Classify"
       slide: the slide number that teaches it (0 = none).  why: ONE short sentence.
   Rebuilt 2026-11-22 (round 2) per Anna: each lecture's set matches how its professor writes questions (HF: Menti-style
   slide facts + NYHA/AHA staging cases; CAD/ACS: short AI-style vignettes; Surgery: Kahoot + bold/yellow slide text;
   Testing: core LOs + high-yield facts). Low-hanging facts ("Fact") and short vignettes both belong now.
   Question ids: "<lecture>|<index>": only append. Progress is stored under a v2 key, so the round-1 questions' results
   don't carry over to the rebuilt ones. */
(function () {
  "use strict";
  var reg = window.EXAM_PREP = window.EXAM_PREP || { course: "cardio-part-3", lectures: [] };
  window.ExamPrep = {
    X: function (concept, kind, n, prompt, answer, wrong, why) { return { concept: concept, kind: kind, n: n, prompt: prompt, answer: answer, wrong: wrong, why: why }; },
    lecture: function (l) { reg.lectures.push(l); }
  };
})();
