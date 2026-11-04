// Validates data/heart-sounds.js (Heart Sounds listening tool, Cardio Part 1).
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");
const sandbox = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(root, "data", "heart-sounds.js"), "utf8"), sandbox);
const data = sandbox.window.HEART_SOUNDS;
const errors = [];
const dxIds = new Set();
const recIds = new Set();
const groupIds = new Set((data.groups || []).concat(data.extra ? data.extra.groups : []).map((group) => group.id));
const sources = new Set(Object.keys(data.sources || {}));
const extraKeys = new Set(["S3", "S4", "EC", "MSC", "OS"]);
const shapes = new Set(["plateau", "cresc", "decresc", "diamond", "rumble", "machinery"]);

(data.diagnoses || []).forEach((dx) => {
  if (!/^[a-z0-9-]+$/.test(dx.id)) errors.push(`Bad diagnosis id: ${dx.id}`);
  if (dxIds.has(dx.id)) errors.push(`Duplicate diagnosis id: ${dx.id}`);
  dxIds.add(dx.id);
  ["name", "where", "listen", "clue", "why"].forEach((key) => { if (!dx[key]) errors.push(`${dx.id}: missing ${key}`); });
});
(data.recordings || []).concat(data.extra ? data.extra.recordings : []).forEach((rec) => {
  const where = rec.id;
  if (!/^[a-z0-9-]+$/.test(rec.id)) errors.push(`Bad recording id: ${rec.id}`);
  if (recIds.has(rec.id)) errors.push(`Duplicate recording id: ${rec.id}`);
  recIds.add(rec.id);
  if (!groupIds.has(rec.group)) errors.push(`${where}: unknown group ${rec.group}`);
  if (!sources.has(rec.source)) errors.push(`${where}: unknown source ${rec.source}`);
  if (!dxIds.has(rec.dx)) errors.push(`${where}: unknown diagnosis ${rec.dx}`);
  (rec.accept || []).forEach((id) => { if (!dxIds.has(id) || id === rec.dx) errors.push(`${where}: bad accept ${id}`); });
  [rec.file, rec.narrated].filter(Boolean).forEach((file) => {
    if (!fs.existsSync(path.join(root, data.audioBase, file))) errors.push(`${where}: missing audio ${file}`);
  });
  if (!rec.title || !rec.spot || !rec.note) errors.push(`${where}: missing title/spot/note`);
  (data.fields || []).forEach((field) => {
    const value = rec[field.id];
    if (value === undefined) errors.push(`${where}: ${field.id} undefined (use null to skip)`);
    else if (value !== null && data.options[field.id].indexOf(value) === -1) errors.push(`${where}: ${field.id} "${value}" is not an option`);
  });
  const noMurmur = rec.timing === "No murmur";
  if (noMurmur && rec.diagram.m && rec.diagram.m.length) errors.push(`${where}: no murmur but diagram has one`);
  if (rec.timing && !noMurmur && !(rec.diagram.m || []).length) errors.push(`${where}: murmur missing from diagram`);
  (rec.diagram.x || []).forEach((key) => { if (!extraKeys.has(key)) errors.push(`${where}: bad diagram extra ${key}`); });
  (rec.diagram.m || []).forEach((m) => { if (!shapes.has(m.shape)) errors.push(`${where}: bad murmur shape ${m.shape}`); });
});
const extraIds = new Set((data.extra ? data.extra.recordings : []).map((rec) => rec.id));
(data.recordings || []).forEach((rec) => { if (rec.source !== "class") errors.push(`${rec.id}: main page is class tracks only`); });
(data.extra ? data.extra.recordings : []).forEach((rec) => { if (rec.source === "class") errors.push(`${rec.id}: class track in additional practice`); });
(data.extra ? data.extra.lookalikes : []).forEach((set) => {
  set.recordings.forEach((id) => { if (!extraIds.has(id)) errors.push(`extra ${set.id}: ${id} is not an additional-practice recording`); });
});
(data.lookalikes || []).forEach((set) => {
  set.recordings.forEach((id) => { if (extraIds.has(id)) errors.push(`${set.id}: ${id} belongs to additional practice`); });
  if (!set.title || !set.clue) errors.push(`${set.id}: missing title/clue`);
  set.recordings.forEach((id) => { if (!recIds.has(id)) errors.push(`${set.id}: unknown recording ${id}`); });
});

const t2Ids = new Set();
(data.tier2 || []).forEach((item) => {
  if (!/^[a-z0-9-]+$/.test(item.id) || t2Ids.has(item.id)) errors.push(`tier2: bad or duplicate id ${item.id}`);
  t2Ids.add(item.id);
  if (!item.name || !item.signature || !item.means) errors.push(`tier2 ${item.id}: missing name/signature/means`);
  if (item.dx && !dxIds.has(item.dx)) errors.push(`tier2 ${item.id}: unknown diagnosis ${item.dx}`);
  (item.recordings || []).forEach((id) => { if (!extraIds.has(id)) errors.push(`tier2 ${item.id}: ${id} is not an additional-practice recording`); });
});
const tier3 = data.tier3 || { facts: [], questions: [] };
tier3.facts.forEach((fact, i) => { if (!fact.title || !fact.text) errors.push(`tier3 fact ${i}: missing title/text`); });
tier3.questions.forEach((q, i) => {
  if (!q.q || !q.a || !q.x || !Array.isArray(q.w) || q.w.length !== 3) errors.push(`tier3 question ${i}: needs prompt, answer, 3 wrong, explanation`);
  else if (new Set([q.a].concat(q.w)).size !== 4) errors.push(`tier3 question ${i}: duplicate choices`);
});

// Exam practice (data/heart-sounds-exam.js): class clips only, every class sound has a clip.
const examBox = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(root, "data", "heart-sounds-exam.js"), "utf8"), examBox);
const exam = examBox.window.HEART_SOUNDS_EXAM;
const classIds = new Set((data.recordings || []).map((rec) => rec.id));
const clipRecs = new Set();
Object.entries(exam.clips).forEach(([key, clip]) => {
  if (!classIds.has(clip.recording)) errors.push(`exam clip ${key}: ${clip.recording} is not a class recording`);
  if (clipRecs.has(clip.recording)) errors.push(`exam clip ${key}: duplicate recording ${clip.recording}`);
  clipRecs.add(clip.recording);
  if (/with-lecture/.test(clip.file)) errors.push(`exam clip ${key}: use the sound-only track`);
  if (!fs.existsSync(path.join(root, data.audioBase, clip.file))) errors.push(`exam clip ${key}: missing audio ${clip.file}`);
  if (!clip.from) errors.push(`exam clip ${key}: missing from`);
});
classIds.forEach((id) => { if (!clipRecs.has(id)) errors.push(`exam: no clip for class recording ${id}`); });
exam.questions.forEach((q, i) => {
  const where = `exam question ${i}`;
  if (!exam.clips[q.sound]) errors.push(`${where}: unknown sound ${q.sound}`);
  if (!q.question || !q.answer || !q.why) errors.push(`${where}: needs question, answer, why`);
  if (!Array.isArray(q.wrong) || q.wrong.length < 1 || q.wrong.length > 3) errors.push(`${where}: 1 to 3 wrong answers`);
  const all = [q.answer].concat(q.wrong || []);
  if (new Set(all).size !== all.length) errors.push(`${where}: duplicate choices`);
  if (q.order && (q.order.length !== all.length || all.some((choice) => q.order.indexOf(choice) === -1))) errors.push(`${where}: order does not match choices`);
});
let setEnd = 0;
(exam.sets || []).forEach((set) => {
  if (set.from !== setEnd || set.to <= set.from || set.to > exam.questions.length) errors.push(`exam ${set.id}: sets must be back-to-back ranges of the question list`);
  setEnd = set.to;
});
if (exam.sets && setEnd !== exam.questions.length) errors.push(`exam: ${exam.questions.length - setEnd} questions are in no set`);
// Practice exams (data/heart-sounds-mocks.js): fixed 15-question exams on the class clips.
const mockBox = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(root, "data", "heart-sounds-mocks.js"), "utf8"), mockBox);
const mocks = mockBox.window.HEART_SOUNDS_MOCKS;
const mockIds = new Set();
mocks.forEach((mock) => {
  if (!/^mock-[0-9]+$/.test(mock.id) || mockIds.has(mock.id)) errors.push(`mock ${mock.id}: bad or duplicate id`);
  mockIds.add(mock.id);
  if (mock.questions.length !== 15) errors.push(`${mock.id}: has ${mock.questions.length} questions, needs 15`);
  mock.questions.forEach((q, i) => {
    const where = `${mock.id} question ${i + 1}`;
    if (!exam.clips[q.sound]) errors.push(`${where}: unknown sound ${q.sound}`);
    if (!q.stem && !q.question) errors.push(`${where}: needs a stem or question`);
    if (!Array.isArray(q.choices) || q.choices.length < 2 || q.choices.length > 4) errors.push(`${where}: 2 to 4 choices`);
    else if (new Set(q.choices).size !== q.choices.length) errors.push(`${where}: duplicate choices`);
    if (!(q.correct >= 0 && q.correct < (q.choices || []).length)) errors.push(`${where}: bad correct index`);
    if (!q.why) errors.push(`${where}: missing why`);
  });
});
const examSounds = new Set(exam.questions.map((q) => q.sound));
Object.keys(exam.clips).forEach((key) => { if (!examSounds.has(key)) errors.push(`exam: no questions for ${key}`); });

if (errors.length) { console.error(errors.join("\n")); process.exit(1); }
console.log(`OK: ${data.recordings.length} class + ${extraIds.size} additional recordings (${recIds.size} total), ${dxIds.size} diagnoses, ${data.lookalikes.length} look-alike sets, ${t2Ids.size} Tier 2 sounds, ${tier3.facts.length} Tier 3 facts + ${tier3.questions.length} questions, exam practice ${exam.questions.length} questions on ${Object.keys(exam.clips).length} clips, ${mocks.length} practice exams`);
