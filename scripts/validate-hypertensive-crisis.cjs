const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),path=require('node:path');
const root=path.join(__dirname,'..'),file='data/hypertensive-crisis.js',context=vm.createContext({window:{}});
vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),context,{filename:file});
const sections=context.window.HYPERTENSIVE_CRISIS_OBJECTIVES;
assert(Array.isArray(sections),'HYPERTENSIVE_CRISIS_OBJECTIVES missing');
/* 11 official objectives in order; 4 split into 4a-4d, 8 into 8a-8e, 9 into one section per condition (9a-9e) plus 9f (slides 45-46). */
assert.deepEqual(Array.from(sections,s=>s.id),["01-remodeling","02-autoregulation","03-definitions","04a-causes-pathophysiology","04b-history","04c-physical-exam","04d-workup","05-cns-effects","06-cardiac-effects","07-retinopathy-maha","08a-urgency-management","08b-emergency-goals-drugs","08c-nitroprusside","08d-nitroglycerin","08e-nicardipine","09a-ischemic-stroke","09b-intracerebral-hemorrhage","09c-aortic-dissection","09d-acute-coronary-syndrome","09e-heart-failure","09f-sympathetic-overactivity","10-pregnancy-hypertension","11-pregnancy-medications"]);
/* Required components per section, taken from the objective wording. */
const required=[
["vascular-remodeling","arterial-damage-map","lvh","diastolic-dysfunction","crisis-ischemia-link","natural-history"],
["organ-autoregulation","cerebral-range","cpp","rightward-shift","too-fast-lowering","renal-autoregulation","renal-in-crisis"],
["urgency-definition","emergency-definition","target-organs","symptom-groups"],
["causes","crisis-pathophysiology","vicious-cycle"],
["htn-history","contrast-history","trigger-history"],
["bp-technique","pulses","fundoscopic","cardiopulmonary-exam","cns-exam","abdominal-exam"],
["chem-ua","cbc-maha","troponin","tox-pregnancy","imaging","contrast-workup"],
["encephalopathy","pres","pres-imaging","gradual-recovery","ischemic-stroke","lacunar","ich","ich-ct","ich-dilemma","sah"],
["dissection-mechanism","dissection-exam","acs-mechanism","acs-findings","flash-pulmonary-edema","hf-exam"],
["retinopathy","maha","renal-damage","preeclampsia-organ"],
["competing-risks","outpatient-urgency","quiet-room","er-referral","restart-meds","new-onset","urgency-goals","monitoring"],
["emergency-goals","exceptions","drug-table","drug-by-organ"],
["snp-moa","snp-icp","cyanide","methemoglobinemia","snp-other-ae"],
["ntg-moa","ntg-indications","ntg-ae","tachyphylaxis","pde5"],
["nicardipine-moa","nicardipine-kinetics","nicardipine-ae","nicardipine-ci","nicardipine-uses"],
["stroke-no-tpa","stroke-drugs","stroke-tpa"],
["ich-goal","ich-dilemma-treatment","ich-drugs","ich-avoid"],
["dissection-goal","dissection-hr","dissection-drugs","dissection-or"],
["acs-threshold","acs-drugs","acs-workup","acs-avoid"],
["hf-goal","hf-drugs","hf-avoid"],
["sympathetic-causes","unopposed-alpha","labetalol-sympathetic"],
["pregnancy-physiology","chronic-htn-pregnancy","gestational-htn","preeclampsia-definition","preeclampsia-risk","preeclampsia-management","eclampsia"],
["labetalol","methyldopa","ccb-pregnancy","beta-blockers-iugr","clonidine-diuretics","acei-arb-avoid","pregnancy-emergency-drugs"]];
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
console.log(`Hypertensive Crisis: ${sections.length} ordered sections (11 objectives; 4, 8 and 9 split); ${cards} Learn cards, ${test} Test questions, ${apply} Apply cases. ${required.flat().length} components checked; question links valid.`);
