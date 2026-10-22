const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),path=require('node:path');
const root=path.join(__dirname,'..'),file='data/ekg-interpretation.js',context=vm.createContext({window:{}});
vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),context,{filename:file});
const sections=context.window.EKG_INTERPRETATION_OBJECTIVES;
assert(Array.isArray(sections),'EKG_INTERPRETATION_OBJECTIVES missing');
const spec=[
['01-myocardial-cell-properties',['automaticity','excitability','conductivity','contractility']],
['02-conduction-pathway',['pathway-order','av-delay','ekg-events','atrial-kick']],
['03-normal-waveforms',['ekg-paper','p-wave','pr-interval','qrs-normal','qt-normal','j-point','st-segment','t-wave']],
['04-u-and-delta-waves',['u-wave','delta-wave']],
['05-q-waves',['q-physiologic','q-pathologic','q-timing']],
['06-lead-views',['lead-basics','limb-vs-precordial','precordial-placement','lead-territories','sal-mnemonic','right-sided','fifteen-lead']],
['07-stepwise-approach',['eight-steps','normal-characteristics','regularity','rate-300','rate-1500','abnormal-p','wide-qrs-causes']],
['08a-sinus-rhythms',['nsr','sinus-brady','sinus-tach','sinus-arrhythmia','sinus-arrest']],
['08b-atrial-rhythms',['atrial-mechanisms','svt-umbrella','atrial-tach','wap','mat','flutter','afib','afib-rvr']],
['08c-junctional-rhythms',['junctional-origin','junctional-p','junctional-rates']],
['08d-ventricular-rhythms',['ventricular-general','idioventricular','aivr','vtach','torsades','vfib','asystole']],
['08e-av-blocks',['block-causes','first-degree','wenckebach','mobitz-2','third-degree','block-comparison']],
['09-premature-beats',['pac-pjc-pvc-compare','pac-causes','pjc','pvc-warning','pvc-patterns']],
['10-qtc',['qtc-normal','long-qt-risk','short-qt']],
['11-electrical-axis',['axis-definition','normal-qrs-direction','axis-method','axis-quadrants','axis-body-habitus','axis-hypertrophy-infarct']],
['12-hypertrophy-blocks',['hypertrophy-vs-enlargement','rae','lae','rvh','lvh','strain','bbb-general','rbbb','lbbb','hemiblocks']],
['13-pericardial-pe-pacemakers',['pericarditis','effusion-low-voltage','electrical-alternans','pe-ekg','s1q3t3','pacemaker-indications','paced-rhythms']],
['14-myocardial-damage-localization',['rca','lad','circumflex','damage-stages','new-bbb','t-inversion','st-depression','localize-septal-anterior','localize-lateral-inferior','localize-posterior','reciprocal']],
['15-diagnostic-ste',['ste-measurement','ste-criteria','ste-mimics']],
['16-electrolytes',['hyperkalemia','hypokalemia','hypercalcemia','hypocalcemia']]];
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
console.log(`EKG Interpretation: ${sections.length} ordered sections; ${cards} Learn cards, ${test} Test questions, ${apply} Apply cases. ${spec.flatMap(x=>x[1]).length} components checked; question links valid.`);
