const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),path=require('node:path');
const root=path.join(__dirname,'..'),file='data/hypertension-part-1.js',context=vm.createContext({window:{}});
vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),context,{filename:file});
const sections=context.window.HYPERTENSION_PART1_OBJECTIVES;
assert(Array.isArray(sections),'HYPERTENSION_PART1_OBJECTIVES missing');
/* Official objectives 1, 2, 3, 8, 9, 10 of "Hypertension, Parts I, II and III", in order. */
assert.deepEqual(Array.from(sections,s=>s.id),["01-epidemiology-sdoh","02-bp-physiology","03-primary-vs-secondary","08-renovascular-resistant","09-secondary-workup","10-primary-etiologies"]);
/* Required components per section, taken from the objective wording. */
const required=[
["global-prevalence","global-awareness-control","us-prevalence","us-demographics","us-control","complication-risk","control-benefits","sdoh-domains","sdoh-disparities","health-literacy"],
["map","co-tpr","map-calculation","determinants","baroreceptor-reflex","short-term-neural","sympathetic-activity","chemoreceptors","volume-receptors","raas-triggers","macula-densa","long-term-humoral","angiotensin-ii","aldosterone"],
["primary-epidemiology","secondary-epidemiology","primary-pathophysiology","secondary-pathophysiology","secondary-etiologies"],
["renovascular-definition","ras-populations","resistant-definition","resistant-management"],
["when-to-suspect","ras-clues","ras-testing","pckd","coarctation","pheochromocytoma","hyperaldosteronism","cushing","thyroid","osa","medication-causes"],
["sns-hyperactivity","genetics","nephron-mass","sodium-handling","immunologic","developmental","non-modifiable","obesity","diabetes-dyslipidemia","ckd","alcohol","sodium-potassium","inactivity","smoking","sleep","polycythemia","nsaids","counseling"]];
assert.equal(required.length,sections.length);
/* app.js escapes titles, descriptions, prompts, choices, and explanations: no markup or HTML entities there. */
const plain=x=>{assert(typeof x==='string'&&x.trim(),'Empty text');assert(!/[<>]|&[a-zA-Z#0-9]+;/.test(x),`Escaped text contains markup/entity: ${x}`);};
let cards=0,test=0,apply=0;const prompts=new Set(),ids=/^[a-z0-9-]+$/,seen=new Set();
sections.forEach((s,i)=>{
  assert(ids.test(s.id),s.id);assert(!seen.has(s.id));seen.add(s.id);
  plain(s.title);plain(s.description);assert(/^Objective \d+/.test(s.description),s.description);
  assert(s.cards.length&&s.test.length&&s.apply.length,`Empty section ${s.id}`);
  const tags=new Set(s.cards.flatMap(c=>c.coverage));
  for(const tag of required[i])assert(tags.has(tag),`Missing component in ${s.id}: ${tag}`);
  for(const mode of ['test','apply'])for(const q of s[mode]){
    assert(!prompts.has(q.prompt),`Duplicate prompt: ${q.prompt}`);prompts.add(q.prompt);
    assert(Array.isArray(q.choices)&&q.choices.length===4,q.prompt);assert.equal(new Set(q.choices).size,4,`Duplicate choices: ${q.prompt}`);
    assert(Number.isInteger(q.correct)&&q.correct>=0&&q.correct<4,q.prompt);
    assert(Number.isInteger(q.card)&&q.card>=0&&q.card<s.cards.length,`Bad card link: ${q.prompt}`);
    [q.prompt,q.explanation,...q.choices].forEach(plain);
  }
  s.cards.forEach((c,ci)=>{plain(c.title);assert(c.html&&c.html.length>40,`Thin card ${s.id} ${ci}`);
    assert(Array.isArray(c.coverage)&&c.coverage.length&&c.coverage.every(t=>ids.test(t)),`Bad coverage ${s.id} ${ci}`);
    assert(s.test.some(q=>q.card===ci),`No test for ${s.id} card ${ci}`);assert(s.apply.some(q=>q.card===ci),`No apply for ${s.id} card ${ci}`);});
  cards+=s.cards.length;test+=s.test.length;apply+=s.apply.length;
});
console.log(`Hypertension Part I: ${sections.length} ordered sections; ${cards} Learn cards, ${test} Test questions, ${apply} Apply cases. ${required.flat().length} components checked; question links valid.`);
