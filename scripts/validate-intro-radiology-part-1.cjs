const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),path=require('node:path');
const root=path.join(__dirname,'..'),file='data/intro-radiology-part-1.js',context=vm.createContext({window:{}});
vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),context,{filename:file});
const sections=context.window.RADIOLOGY_PART1_OBJECTIVES;
assert(Array.isArray(sections),'RADIOLOGY_PART1_OBJECTIVES missing');
const spec=[
['01-modalities-cost-risk',['choosing-study','pa-role','relative-cost','at-risk-populations','free-radicals','effective-dose','alara']],
['02-ionizing-modalities',['ionizing-list','non-ionizing']],
['03-artifact-contrast-penetration',['planar-cross-sectional','artifact','image-contrast','attenuation','five-densities','penetration']],
['04-contrast-indications',['contrast-agents','dynamic-enhancement','contrast-routes','contrast-yes','contrast-no']],
['05-contrast-contraindications',['renal-precaution','pregnancy-contrast','perforation-gastrografin','allergy-premed','prior-severe-reaction']],
['06-contrast-reactions-extravasation',['reaction-mild','reaction-moderate','reaction-severe','extravasation-subq','extravasation-cavity']],
['07-radiography-uses',['xray-science','xray-best-uses','xray-advantages']],
['08-radiography-vs-fluoroscopy',['fluoro-definition','fluoro-uses']],
['09-projections-pa-ap',['projection-definition','pa-ap-comparison','ap-magnification']],
['10-ct-how-performed',['gantry','image-reconstruction','hounsfield']],
['11-ct-best-uses',['ct-viscera','ct-vascular-bleeding','ct-bone','ct-radiation-cumulative','ct-pregnancy','ct-motion']],
['12-window-width-level',['window-width-definition','window-level-definition','width-contrast-effect','multiple-windows']],
['13-ct-study-types',['ct-iv-contrast','cta','hrct-technique','hrct-uses','3d-reconstruction']],
['14-imaging-planes',['axial','coronal','sagittal']],
['22-counseling-xray-ct',['counsel-xray','counsel-ct','counsel-contrast']]];
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
console.log(`Intro to Radiology Part One: ${sections.length} ordered sections; ${cards} Learn cards, ${test} Test questions, ${apply} Apply cases. ${spec.flatMap(x=>x[1]).length} components checked; question links valid.`);
