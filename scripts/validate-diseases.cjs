// Validates every Diseases tool's data (Infectious Disease, Endocrine, Cardio Part 1).
const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const path = require('node:path');
const root = path.join(__dirname, '..');
const context = vm.createContext({ window: {} });
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
for (const match of html.matchAll(/<script src="(data\/[^" ]+)"><\/script>/g)) {
  vm.runInContext(fs.readFileSync(path.join(root, match[1]), 'utf8'), context, { filename: match[1] });
}
for (const name of ['DISEASES', 'ENDOCRINE_DISEASES', 'CARDIO_PART1_DISEASES', 'CARDIO_PART1_MEDICATIONS']) {
  const data = context.window[name];
  assert(data && data.lectures.length, name + ' must be loaded');
  const lectureIds = new Set(), diseaseIds = new Set();
  let diseases = 0, questions = 0;
  for (const lecture of data.lectures) {
    assert(!lectureIds.has(lecture.id), 'duplicate lecture id ' + lecture.id);
    lectureIds.add(lecture.id);
    for (const disease of lecture.diseases) {
      assert(/^[a-z0-9-]+$/.test(disease.id), 'bad disease id ' + disease.id);
      assert(!diseaseIds.has(disease.id), 'duplicate disease id ' + disease.id);
      diseaseIds.add(disease.id);
      diseases += 1;
      const sectionIds = new Set(disease.sections.map(section => section.id));
      assert.equal(sectionIds.size, disease.sections.length, 'duplicate section id in ' + disease.id);
      for (const question of disease.questions) {
        questions += 1;
        assert.equal(question.choices.length, 4, question.id + ' needs 4 choices');
        assert.equal(new Set(question.choices).size, 4, question.id + ' has duplicate choices');
        assert(question.correct >= 0 && question.correct < 4, question.id + ' correct out of range');
        assert(question.explanation, question.id + ' needs an explanation');
        if (disease.sections.length) assert(sectionIds.has(question.section), question.id + ' links to missing section ' + question.section);
      }
    }
  }
  console.log(name + ': ' + data.lectures.length + ' lectures, ' + diseases + ' diseases, ' + questions + ' questions');
}
