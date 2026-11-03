const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),path=require('node:path');
const root=path.join(__dirname,'..'),file='data/heart-sounds-lecture.js',context=vm.createContext({window:{}});
vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),context,{filename:file});
const sections=context.window.HEART_SOUNDS_LECTURE_OBJECTIVES;
assert(Array.isArray(sections),'HEART_SOUNDS_LECTURE_OBJECTIVES missing');
const spec=[["01-where-to-listen",["tips","outline","ape-to-man","best-heard-vs-location","apetm-map","erb-point-murmurs","pulmonic-area-murmurs"]],
["02-s1-s2",["s1-definition","lav-mat","s1-starts-systole","s2-definition","d-slap","s2-starts-diastole","systole-between","diastole-between","cardiac-cycle"]],
["03-split-s2",["split-mechanism","split-location","split-normal-inspiration","hold-breath","wide-split","paradoxical-split","fixed-split"]],
["04-gallops",["s3-timing","s3-mechanism","s3-listening","s3-meaning","s3-normal","s4-timing","s4-mechanism","s4-listening","s4-meaning","s4-always-pathologic","s3-s4-compare","volume-vs-pressure","both-diastolic"]],
["05-clicks-snaps",["sec-timing-pitch","sec-cause","sec-followed-by","sec-mechanism","msc-mvp","msc-mechanism","msc-followed-by","msc-standing","msc-squatting","os-timing-pitch","os-mechanism","os-ms","os-rumble","extra-sounds-table","systole-vs-diastole-extras"]],
["06-murmur-timing-shape",["six-steps","timing-systolic","timing-diastolic","timing-continuous","holosystolic-pansystolic","shape-crescendo","shape-decrescendo","shape-diamond","shape-plateau","diagram-late-systolic","diagram-mid-systolic","diagram-holosystolic","diagram-diastolic","diagram-continuous","approach-tree","systolic-logic","diastolic-logic","arms"]],
["07-murmur-describe",["location-max","radiation-carotids","radiation-axilla","radiation-other","grade-scale","grade-thrill","grade-5-vs-6","grade-denominator","pitch-levels","diaphragm-high","bell-low","quality-blowing","quality-harsh","quality-rumbling","quality-musical","quality-scratchy","augmentation-list","sample-description"]],
["08-systolic-stenosis",["as-description","as-click","as-paradoxical","as-location-radiation","as-maneuvers","as-soft-s2","ps-description","ps-location","ps-radiation","ps-wide-split","ps-click","as-vs-ps"]],
["09-systolic-regurg-mvp",["mr-description","mr-location-radiation","mr-s3","mr-soft-s1","mvp-description","mvp-maneuvers","mvp-location","mvp-mr-relation","tr-description","tr-location","tr-carvallo","tr-s3","mr-vs-tr-vs-vsd"]],
["10-diastolic",["ar-description","ar-location","ar-radiation","ar-augment","pr-description","pr-inspiration","ar-vs-pr","ms-description","ms-location","ms-no-radiation","ms-augment","ms-loud-s1","ts-description","recall-table","right-sided-inspiration"]],
["11-pda-vsd",["pda-description","pda-shape","pda-location","pda-congenital","pda-mechanism","vsd-description","vsd-location","vsd-mechanism","vsd-shunt-direction","pda-vs-vsd"]],
["12-benign-and-rub",["stills-description","stills-location","stills-position","stills-most-common","hum-description","hum-location","hum-louder","hum-disappears","rub-description","rub-phases","rub-location","rub-expiration","rub-components","others-table","others-timing"]],
["13-maneuvers",["inspiration","expiration","breath-hold","squat","stand-valsalva","lean-forward","left-lateral","supine-sitting","jugular-compression","bell-list","diaphragm-list"]],
["14-word-clues",["word-quality","word-radiation","word-maneuver","word-shape","patient-clues","lookalikes","class-recordings"]]];
assert.deepEqual(Array.from(sections,s=>s.id),spec.map(x=>x[0]));
// app.js HTML-escapes these fields: no tags or entities allowed (bare < > comparisons are fine).
const plain=x=>{assert(typeof x==='string'&&x.length,'empty text');assert(!/<\/?[a-zA-Z]|&[a-zA-Z#][a-zA-Z0-9]*;/.test(x),`Escaped text contains markup/entity: ${x}`);};
let cards=0,test=0,apply=0;const prompts=new Set(),ids=/^[a-z0-9-]+$/;
sections.forEach((s,i)=>{
  assert(ids.test(s.id),s.id);plain(s.title);plain(s.description);
  const tags=new Set(s.cards.flatMap(c=>c.coverage));
  for(const tag of spec[i][1])assert(tags.has(tag),`Missing component in ${s.id}: ${tag}`);
  for(const mode of ['test','apply'])for(const q of s[mode]){
    assert(!prompts.has(q.prompt),`Duplicate prompt: ${q.prompt}`);prompts.add(q.prompt);
    assert.equal(q.choices.length,4,q.prompt);assert.equal(new Set(q.choices).size,4,q.prompt);
    assert(Number.isInteger(q.correct)&&q.correct>=0&&q.correct<4,q.prompt);
    assert(Number.isInteger(q.card)&&q.card>=0&&q.card<s.cards.length,q.prompt);
    assert(q.explanation,q.prompt);[q.prompt,q.explanation,...q.choices].forEach(plain);
  }
  s.cards.forEach((c,ci)=>{assert(c.title&&c.html);plain(c.title);assert(c.coverage.length);
    assert(s.test.some(q=>q.card===ci),`No test for ${s.id} card ${ci}`);assert(s.apply.some(q=>q.card===ci),`No apply for ${s.id} card ${ci}`);});
  cards+=s.cards.length;test+=s.test.length;apply+=s.apply.length;
});
console.log(`Heart Sounds lecture: ${sections.length} ordered sections; ${cards} Learn cards, ${test} Test questions, ${apply} Apply cases. ${spec.flatMap(x=>x[1]).length} components checked; question links valid.`);
