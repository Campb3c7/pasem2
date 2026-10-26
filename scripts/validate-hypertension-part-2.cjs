const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),path=require('node:path');
const root=path.join(__dirname,'..'),file='data/hypertension-part-2.js',context=vm.createContext({window:{}});
vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),context,{filename:file});
const sections=context.window.HYPERTENSION_PART2_OBJECTIVES;
assert(Array.isArray(sections),'HYPERTENSION_PART2_OBJECTIVES missing');
/* Official objectives 4, 5, 6, 7, 11, 12, 13, 14, 15, 16 of "Hypertension, Parts I, II and III", in order. */
assert.deepEqual(Array.from(sections,s=>s.id),["04-bp-measurement","05-abpm-hbpm","06-diagnostic-criteria","07-stages","11-remodeling","12-cns-renal-autoregulation","13-medications","14-substances","15-history-physical","16-workup-risk"]);
/* Required components per section, taken from the objective wording. */
const required=[
["cuff-size","patient-prep","positioning","no-talking","both-arms","orthostatic","measurement-errors"],
["hbpm-technique","hbpm-utility","abpm-technique","abpm-utility","non-dippers","white-coat","office-comparison","comparable-values"],
["average-readings","out-of-office-confirmation","single-visit-exceptions","white-coat-hypertension","worked-example"],
["normal","elevated","stage-1","stage-2","isolated-systolic","isolated-diastolic","higher-category-rule"],
["natural-history","vascular-remodeling","lvh","diastolic-dysfunction","hhd-continuum"],
["cerebral-autoregulation","acute-rise-effects","autoregulation-shift","slow-lowering","renal-autoregulation","renal-mechanisms"],
["nsaids","pseudoephedrine","ocps","triptans","other-prescription-drugs","withdrawal-situations"],
["alcohol","cocaine","methamphetamine","st-johns-wort","other-substances"],
["history-prior-events","end-organ-symptoms","secondary-cause-history","vitals","fundoscopic","vascular-exam","cardiac-exam","lung-neuro"],
["initial-labs","ekg-echo","cv-risk-factors","risk-calculator"]];
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
console.log(`Hypertension Part II: ${sections.length} ordered sections; ${cards} Learn cards, ${test} Test questions, ${apply} Apply cases. ${required.flat().length} components checked; question links valid.`);
