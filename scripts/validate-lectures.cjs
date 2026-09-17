const path = require("path");

global.window = global;

[
  "vaccines",
  "viral-diseases",
  "syphilis",
  "tick-borne-illnesses",
  "introduction-infectious-disease",
  "infectious-disease-pharmacology",
  "sepsis",
  "global-infections",
  "fungal-diseases",
  "germs-and-worms",
  "infectious-disease-labs",
  "hiv-aids",
  "heent-anatomy-physiology",
  "heent-history-physical",
  "mouth-throat-diseases",
  "dental-diseases"
].forEach((name) => require(path.join("..", "data", name + ".js")));
require(path.join("..", "data", "semester.js"));

const courseIds = new Set();
const lectureIds = new Set();
let objectiveCount = 0;
let cardCount = 0;
let questionCount = 0;

function fail(message) {
  throw new Error(message);
}

(window.SEMESTER.courses || []).forEach((course) => {
  if (!course.id || courseIds.has(course.id)) fail(`Invalid or duplicate course id: ${course.id}`);
  courseIds.add(course.id);

  (course.lectures || []).forEach((lecture) => {
    const lectureKey = `${course.id}:${lecture.id}`;
    if (!lecture.id || lectureIds.has(lectureKey)) fail(`Invalid or duplicate lecture id: ${lectureKey}`);
    lectureIds.add(lectureKey);
    const objectiveIds = new Set();

    (lecture.objectives || []).forEach((objective) => {
      objectiveCount += 1;
      if (!objective.id || objectiveIds.has(objective.id)) fail(`${lectureKey} has an invalid or duplicate objective id: ${objective.id}`);
      objectiveIds.add(objective.id);
      if (!objective.title) fail(`${lectureKey}:${objective.id} is missing a title`);
      ["cards", "test", "apply"].forEach((field) => {
        if (!Array.isArray(objective[field]) || objective[field].length === 0) fail(`${lectureKey}:${objective.id} has no ${field}`);
      });
      cardCount += objective.cards.length;

      ["test", "apply"].forEach((kind) => {
        objective[kind].forEach((question, index) => {
          questionCount += 1;
          if (!question.prompt || !question.explanation) fail(`${lectureKey}:${objective.id}:${kind}:${index} is incomplete`);
          if (!Array.isArray(question.choices) || question.choices.length !== 4) fail(`${lectureKey}:${objective.id}:${kind}:${index} must have four choices`);
          if (!Number.isInteger(question.correct) || question.correct < 0 || question.correct >= question.choices.length) fail(`${lectureKey}:${objective.id}:${kind}:${index} has an invalid correct index`);
          if (!Number.isInteger(question.card) || question.card < 0 || question.card >= objective.cards.length) fail(`${lectureKey}:${objective.id}:${kind}:${index} has an invalid Learn-card link`);
          if (new Set(question.choices).size !== question.choices.length) fail(`${lectureKey}:${objective.id}:${kind}:${index} has duplicate choices`);
        });
      });
    });
  });
});

console.log(JSON.stringify({
  courses: courseIds.size,
  lectures: lectureIds.size,
  objectives: objectiveCount,
  cards: cardCount,
  questions: questionCount
}, null, 2));
