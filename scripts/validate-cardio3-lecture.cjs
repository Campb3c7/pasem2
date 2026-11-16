// Shared validator for Cardio Part 3 lecture files: node scripts/validate-cardio3-lecture.cjs <data file> <global> <label>
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),path=require('node:path');
module.exports=function(file,globalName,label){
const root=path.join(__dirname,'..'),context=vm.createContext({window:{}});
vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),context,{filename:file});
const sections=context.window[globalName];
assert(Array.isArray(sections),`${globalName} missing`);
// Sections are numbered 01, 02, ... in order.
sections.forEach((s,i)=>assert.equal(s.id.split('-')[0],String(i+1).padStart(2,'0'),`section order at ${s.id}`));
// app.js HTML-escapes these fields: no tags or entities allowed (bare < > comparisons are fine).
const plain=x=>{assert(typeof x==='string'&&x.length,'empty text');assert(!/<\/?[a-zA-Z]|&[a-zA-Z#][a-zA-Z0-9]*;/.test(x),`Escaped text contains markup/entity: ${x}`);};
let cards=0,test=0,apply=0;const prompts=new Set(),ids=new Set(),tags=new Set();
sections.forEach(s=>{
  assert(/^[a-z0-9-]+$/.test(s.id),s.id);assert(!ids.has(s.id),`dup id ${s.id}`);ids.add(s.id);plain(s.title);plain(s.description);
  assert(s.cards.length,`${s.id} has no cards`);
  for(const mode of ['test','apply'])for(const q of s[mode]){
    assert(!prompts.has(q.prompt),`Duplicate prompt: ${q.prompt}`);prompts.add(q.prompt);
    assert.equal(q.choices.length,4,q.prompt);assert.equal(new Set(q.choices).size,4,q.prompt);
    assert(Number.isInteger(q.correct)&&q.correct>=0&&q.correct<4,q.prompt);
    assert(Number.isInteger(q.card)&&q.card>=0&&q.card<s.cards.length,q.prompt);
    assert(q.explanation,q.prompt);[q.prompt,q.explanation,...q.choices].forEach(plain);
  }
  s.cards.forEach((c,ci)=>{assert(c.title&&c.html,`${s.id} card ${ci}`);plain(c.title);
    assert(!/undefined/.test(c.html),`${s.id} card ${ci} html has undefined`);
    assert(Array.isArray(c.coverage)&&c.coverage.length,`${s.id} card ${ci} coverage`);
    c.coverage.forEach(t=>{assert(!tags.has(t),`dup coverage tag ${t}`);tags.add(t);});
    assert(s.test.some(q=>q.card===ci),`No test for ${s.id} card ${ci}`);assert(s.apply.some(q=>q.card===ci),`No apply for ${s.id} card ${ci}`);});
  cards+=s.cards.length;test+=s.test.length;apply+=s.apply.length;
});
console.log(`${label}: ${sections.length} ordered sections; ${cards} Learn cards, ${test} Test questions, ${apply} Apply cases. ${tags.size} coverage tags unique; question links valid.`);
};
if(require.main===module)module.exports(process.argv[2],process.argv[3],process.argv[4]||process.argv[2]);
