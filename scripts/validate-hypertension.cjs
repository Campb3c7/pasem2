const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),path=require('node:path');
const root=path.join(__dirname,'..'),file='data/hypertension.js',context=vm.createContext({window:{}});
vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),context,{filename:file});
const sections=context.window.HYPERTENSION_OBJECTIVES;
assert(Array.isArray(sections),'HYPERTENSION_OBJECTIVES missing');
/* 24 official objectives in order; objective 22 is split into one section per drug class (22a-22l). */
assert.deepEqual(Array.from(sections,s=>s.id),["01-epidemiology-sdoh","02-bp-physiology","03-primary-vs-secondary","04-bp-measurement","05-abpm-hbpm","06-diagnostic-criteria","07-stages","08-renovascular-resistant","09-secondary-workup","10-primary-etiologies","11-remodeling","12-cns-renal-autoregulation","13-medications","14-substances","15-history-physical","16-workup-risk","17-bp-targets","18-lifestyle","19-chronic-care","20-treatment-principles","21-race-pregnancy","22a-thiazide-diuretics","22b-loop-diuretics","22c-potassium-sparing","22d-aldosterone-antagonists","22e-ace-inhibitors","22f-arbs","22g-calcium-channel-blockers","22h-beta-blockers","22i-mixed-alpha-beta","22j-alpha-1-blockers","22k-central-alpha-2-agonists","22l-direct-vasodilators","23-non-bp-indications","24-overdose"]);
/* Required components per section, taken from the objective wording. */
const required=[
["global-prevalence","global-awareness-control","us-prevalence","us-demographics","us-control","complication-risk","control-benefits","sdoh-domains","sdoh-disparities","health-literacy"],
["map","co-tpr","map-calculation","determinants","baroreceptor-reflex","short-term-neural","sympathetic-activity","chemoreceptors","volume-receptors","raas-triggers","macula-densa","long-term-humoral","angiotensin-ii","aldosterone"],
["primary-epidemiology","secondary-epidemiology","primary-pathophysiology","secondary-pathophysiology","secondary-etiologies"],
["cuff-size","patient-prep","positioning","no-talking","both-arms","orthostatic","measurement-errors"],
["hbpm-technique","hbpm-utility","abpm-technique","abpm-utility","non-dippers","white-coat","office-comparison","comparable-values"],
["average-readings","out-of-office-confirmation","single-visit-exceptions","white-coat-hypertension","worked-example"],
["normal","elevated","stage-1","stage-2","isolated-systolic","isolated-diastolic","higher-category-rule"],
["renovascular-definition","ras-populations","resistant-definition","resistant-management"],
["when-to-suspect","ras-clues","ras-testing","pckd","coarctation","pheochromocytoma","hyperaldosteronism","cushing","thyroid","osa","medication-causes"],
["sns-hyperactivity","genetics","nephron-mass","sodium-handling","immunologic","developmental","non-modifiable","obesity","diabetes-dyslipidemia","ckd","alcohol","sodium-potassium","inactivity","smoking","sleep","polycythemia","nsaids","counseling"],
["natural-history","vascular-remodeling","lvh","diastolic-dysfunction","hhd-continuum"],
["cerebral-autoregulation","acute-rise-effects","autoregulation-shift","slow-lowering","renal-autoregulation","renal-mechanisms"],
["nsaids","pseudoephedrine","ocps","triptans","other-prescription-drugs","withdrawal-situations"],
["alcohol","cocaine","methamphetamine","st-johns-wort","other-substances"],
["history-prior-events","end-organ-symptoms","secondary-cause-history","vitals","fundoscopic","vascular-exam","cardiac-exam","lung-neuro"],
["initial-labs","ekg-echo","cv-risk-factors","risk-calculator"],
["bp-goal","treatment-thresholds","risk-based-initiation","reassessment-intervals","withholding-treatment"],
["lifestyle-table","weight-loss","dash","sodium","exercise","alcohol-limits","tobacco","dash-foods","drink-definition","motivational-interviewing"],
["bp-review","symptom-review","adherence","exam-labs","lifestyle-goal","follow-up-intervals"],
["drug-classes","first-line","later-line","monotherapy-vs-combination","compelling-definition","hf","post-mi","cad","afib","diabetes","ckd","stroke","other-factors","no-acei-arb-combo"],
["black-patients","white-patients","compelling-trumps-race","pregnancy-unsafe","pregnancy-safe"],
["thiazide-agents","thiazide-moa","thiazide-outcomes","thiazide-dosing","thiazide-adverse","thiazide-cautions"],
["loop-indications","loop-moa","loop-agents","loop-dosing","loop-adverse"],
["ksparing-agents","ksparing-moa","ksparing-adverse"],
["aldo-agents","aldo-moa","aldo-indications","aldo-adverse","eplerenone-selectivity"],
["acei-agents","acei-moa","acei-indications","acei-renal","acei-monitoring","acei-cough","acei-hyperkalemia","acei-angioedema","acei-pregnancy"],
["arb-agents","arb-moa","arb-advantages","arb-adverse","arb-no-combo"],
["ccb-moa","dhp-vs-nondhp","ccb-agents","dhp-adverse","dhp-edema","nondhp-adverse","nondhp-contraindications"],
["beta-receptors","beta-moa","cardioselective","nonselective","isa","beta-indications","beta-race-age","beta-adverse","beta-diabetes","beta-contraindications","beta-withdrawal"],
["mixed-moa","carvedilol","labetalol","mixed-adverse"],
["alpha1-agents","alpha1-moa","alpha1-dosing","alpha1-adverse","first-dose-phenomenon"],
["alpha2-agents","alpha2-moa","alpha2-uses","alpha2-adverse","clonidine-rebound"],
["vasodilator-moa","hydralazine","minoxidil","vasodilator-adverse","drug-induced-lupus","hirsutism"],
["nondhp-nonbp","nonselective-nonbp","alpha1-nonbp","alpha2-nonbp"],
["ccb-overdose","bb-overdose","ccb-vs-bb","clonidine-overdose"]];
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
console.log(`Hypertension I–III: ${sections.length} ordered sections (24 objectives; drug classes split 22a–22l); ${cards} Learn cards, ${test} Test questions, ${apply} Apply cases. ${required.flat().length} components checked; question links valid.`);
