const fs = require('node:fs'), vm = require('node:vm'), assert = require('node:assert/strict'), path = require('node:path');
const root = path.join(__dirname, '..'), file = 'data/cardio-history-physical.js', context = vm.createContext({ window: {} });
vm.runInContext(fs.readFileSync(path.join(root, file), 'utf8'), context, { filename: file });
const sections = context.window.CARDIO_HP_OBJECTIVES;
assert(Array.isArray(sections), 'CARDIO_HP_OBJECTIVES missing');
assert.deepEqual(Array.from(sections, s => s.id), ['01-history-symptoms', '02-chronic-care-questions', '03-exam-landmarks', '04-valve-auscultation-points', '05-skin-findings', '06-pmi', '07-chest-wall-inspection-palpation', '08-diaphragm-vs-bell', '09-s1-s2-split', '10-s3-s4', '11-augment-ms-ar', '12-jvp', '13-pulses-bruits', '14-special-tests', '15-cultural-considerations']);
const required = [
  ['history-approach', 'symptom-list', 'angina', 'angina-classic', 'angina-atypical-women', 'oldcarts', 'historical-context', 'palpitations', 'palpitation-patterns', 'dyspnea', 'orthopnea', 'pnd', 'edema', 'daily-weights', 'peripheral-vascular', 'claudication-pad', 'venous-edema-dvt', 'arterial-perfusion-signs', 'syncope', 'syncope-causes', 'abd-back-flank-pain', 'tearing-dissection', 'postprandial-mismatch', 'general-cv-questions', 'risk-factors'],
  ['chronic-when', 'ochmedpra', 'onset', 'current-concerns', 'home-readings', 'medications', 'exercise', 'diet', 'previous-imaging', 'risk-factors-chronic', 'associated-symptoms'],
  ['exam-positioning', 'midsternal', 'midclavicular', 'anterior-axillary', 'midaxillary', 'posterior-axillary', 'suprasternal-notch', 'sternal-angle', 'second-ics', 'heart-projection', 'lv-apical-impulse'],
  ['projection-vs-auscultation', 'aortic', 'pulmonic', 'tricuspid', 'mitral', 'auscultation-sequence'],
  ['skin-inspection', 'ulcers-wounds', 'venous-patterns', 'hair-distribution', 'clubbing', 'capillary-refill', 'cyanosis', 'edema-technique', 'edema-1', 'edema-2', 'edema-3', 'edema-4'],
  ['pmi-inspect', 'pmi-palpate-finger-pads', 'pmi-location', 'pmi-lv-apex', 'pmi-diameter', 'pmi-amplitude-duration', 'pmi-tapping-normal', 'pmi-forceful-hyperkinetic', 'pmi-diffuse-displaced'],
  ['inspection-tangential-light', 'lifts-heaves', 'inspection-sites', 'palpate-heaves-finger-pads', 'heave-causes', 'palpate-thrills-heel', 'thrill-turbulent-flow', 'thrill-sites'],
  ['diaphragm-high-pitched', 'diaphragm-s1-s2', 'diaphragm-ar-mr', 'diaphragm-friction-rub', 'bell-low-pitched', 'bell-s3-s4', 'bell-mitral-stenosis'],
  ['s1-av-valves', 's1-apex', 's2-semilunar-valves', 's2-base', 's1-s2-carotid-timing', 's2-physiologic-split', 'split-inspiration', 'split-augment'],
  ['s3-timing', 's3-bell-apex-lld', 's3-rapid-filling', 's3-hyperdynamic', 's3-venous-return', 's4-timing', 's4-stiff-ventricle', 's4-lvh-causes', 's4-ischemia', 's4-palpable'],
  ['ms-left-lateral-decubitus', 'ms-bell-apex', 'ar-lean-forward-exhale', 'ar-diaphragm-lsb'],
  ['jvp-reflects-ra-cvp', 'jvp-right-ij', 'jvp-30-degrees', 'jvp-head-turn-scm', 'jvp-tangential-light', 'jvp-where-to-look', 'jvp-vs-carotid', 'jvp-ruler-sternal-angle', 'jvp-add-5', 'jvp-normal-6-8', 'jvp-significance'],
  ['pulse-technique-finger-pads', 'pulse-bilateral', 'aortic-pulse-technique', 'pulse-3', 'pulse-2', 'pulse-1', 'pulse-0', 'temporal-pulse', 'carotid-pulse', 'brachial-pulse', 'radial-pulse', 'ulnar-pulse', 'aortic-pulse', 'femoral-pulse', 'popliteal-pulse', 'posterior-tibial-pulse', 'dorsalis-pedis-pulse', 'bruit-bell', 'bruit-sites', 'carotid-hold-breath'],
  ['allen-purpose', 'allen-technique', 'allen-interpretation', 'circumference-technique', 'circumference-1cm', 'thigh-tenderness', 'homan-technique', 'homan-limitations', 'stemmer-technique', 'stemmer-positive-lymphedema', 'lea-test-technique', 'lea-normal-10', 'abi-purpose', 'abi-calculation', 'abi-noncompressible', 'abi-normal', 'abi-mild-moderate', 'abi-severe'],
  ['disparities-referral-hf', 'disparities-access', 'communication-gaps', 'mistrust-discrimination', 'implicit-bias', 'bias-training', 'heart-is-empty', 'talk-story', 'lifestyle-cad-risk', 'modesty-permission', 'personal-space', 'same-gender-chaperone', 'refusal-documented']
];
// app.js escapes these fields, so markup or entities would show as raw text.
const plain = (v, where) => assert(!/<\/?[a-zA-Z][^>]*>|&[a-zA-Z#][a-zA-Z0-9]*;/.test(v), `Markup/entity in escaped field (${where}): ${v}`);
let cards = 0, test = 0, apply = 0;
const prompts = new Set(), ids = new Set();
sections.forEach((s, i) => {
  assert(/^[a-z0-9-]+$/.test(s.id) && !ids.has(s.id)); ids.add(s.id);
  assert(s.title.startsWith(`${i + 1}. `), `Title order: ${s.title}`);
  assert.equal(s.description.split('.')[0], `Objective ${i + 1}`);
  plain(s.title, 'section title'); plain(s.description, 'section description');
  const tags = new Set(s.cards.flatMap(c => c.coverage));
  for (const tag of required[i]) assert(tags.has(tag), `Missing objective ${i + 1}: ${tag}`);
  for (const mode of ['test', 'apply']) for (const q of s[mode]) {
    assert(!prompts.has(q.prompt), `Duplicate prompt: ${q.prompt}`); prompts.add(q.prompt);
    assert.equal(q.choices.length, 4, q.prompt);
    assert.equal(new Set(q.choices).size, 4, `Duplicate choice: ${q.prompt}`);
    assert(Number.isInteger(q.correct) && q.correct >= 0 && q.correct < 4);
    assert(Number.isInteger(q.card) && q.card >= 0 && q.card < s.cards.length);
    assert(q.explanation && q.explanation.length > 10, `Explanation: ${q.prompt}`);
    plain(q.prompt, 'prompt'); q.choices.forEach(c => plain(c, 'choice')); plain(q.explanation, 'explanation');
  }
  s.cards.forEach((c, ci) => {
    assert(c.title && c.html && Array.isArray(c.coverage) && c.coverage.length);
    plain(c.title, 'card title');
    assert(s.test.some(q => q.card === ci), `No Test for ${s.id} card ${ci}`);
    assert(s.apply.some(q => q.card === ci), `No Apply for ${s.id} card ${ci}`);
  });
  cards += s.cards.length; test += s.test.length; apply += s.apply.length;
});
console.log(`Cardiovascular H&P: ${sections.length} ordered objectives; ${cards} Learn cards, ${test} Test questions, ${apply} Apply cases. ${required.flat().length} components checked; links, choices, and plain-text fields valid.`);
