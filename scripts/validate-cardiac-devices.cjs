const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),path=require('node:path');
const root=path.join(__dirname,'..'),file='data/cardiac-devices.js',context=vm.createContext({window:{}});
vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),context,{filename:file});
const sections=context.window.CARDIAC_DEVICES_OBJECTIVES;
assert(Array.isArray(sections),'CARDIAC_DEVICES_OBJECTIVES missing');
const spec=[
['01-icd-vs-pacemaker-indications',['ppm-indications','ppm-presentation','reversible-causes','temporary-pacing','icd-function','icd-secondary-prophylaxis','icd-primary-ef30','icd-primary-other','ppm-vs-icd-comparison']],
['02-pacemaker-code',['code-letter-1','code-letter-2','code-letter-3','code-letter-4','code-letter-5','code-scenario']],
['03a-device-placement',['device-parts','permanent-types','lead-complications','ppm-procedure','icd-procedure']],
['03b-battery-life-replacement',['battery-life','generator-change','lead-fracture']],
['03c-device-precautions',['wallet-card-cxr','mri-precaution','acls-pad-distance','cpr-icd','central-line-precaution','icd-shock-er','inappropriate-shocks','driving-restriction']],
['03d-device-testing-follow-up',['interrogation','follow-up-schedule']],
['04-perioperative-management',['emi-oversensing-ppm','icd-surgery-hazard','preop-cardiology','pads-before-draping','postop-care']],
['05-magnet-response',['magnet-ppm','magnet-icd','magnet-comparison']],
['06-emi-distances',['distance-6-inches','security-systems','distance-2-feet','low-risk-devices']],
['07-device-infection',['infection-mechanisms','infection-risk-factors','infection-workup','infection-management']]];
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
console.log(`Cardiac Devices: ${sections.length} ordered sections; ${cards} Learn cards, ${test} Test questions, ${apply} Apply cases. ${spec.flatMap(x=>x[1]).length} components checked; question links valid.`);
