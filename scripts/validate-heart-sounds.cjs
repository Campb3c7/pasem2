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

if (errors.length) { console.error(errors.join("\n")); process.exit(1); }
console.log(`OK: ${data.recordings.length} class + ${extraIds.size} additional recordings (${recIds.size} total), ${dxIds.size} diagnoses, ${data.lookalikes.length} look-alike sets`);
