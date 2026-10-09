const fs = require('node:fs'), vm = require('node:vm'), assert = require('node:assert/strict'), path = require('node:path');
const root = path.join(__dirname, '..'), context = vm.createContext({window:{}});
const html = fs.readFileSync(path.join(root,'index.html'),'utf8');
for (const match of html.matchAll(/<script src="(data\/[^" ]+)"><\/script>/g)) vm.runInContext(fs.readFileSync(path.join(root,match[1]),'utf8'),context,{filename:match[1]});
const endocrine = context.window.SEMESTER.courses.find(course => course.id === 'endocrine');
assert(endocrine.lectures.some(lecture => lecture.id === 'diabetes-mellitus'), 'Diabetes must remain in the catalog');
const sections = endocrine.lectures.find(lecture => lecture.id === 'diabetes-mellitus').objectives;
const expectedIds = ['01-prediabetes-diabetes','02-t1-pathophysiology','03-t1-epidemiology','04-t1-presentation','05-differentiate-types','06-t1-diagnostic-testing','07-t1-mainstay','08-t1-a1c-goals','09-t2-pathophysiology','10-t2-epidemiology-risk','11-t2-presentation','12-t2-diagnosis','13-t2-lifestyle','14-lada-mody','15-lifespan-care','16-health-maintenance','17-cultural-care','18-ethics'];
assert.deepEqual(Array.from(sections, section => section.id),expectedIds,'Preserve all 18 objectives in order');
const expectedCoverage = [
  ['a1c-prediabetes','a1c-diabetes','fasting-prediabetes','fasting-diabetes','ogtt-prediabetes','ogtt-diabetes','random-symptoms','confirmation','a1c-time','lab-not-meter'],
  ['autoimmune-beta-cells','absolute-deficiency','autoimmune-associations','glucose-uptake-production','osmotic-diuresis','lipolysis-ketogenesis','protein-weight-loss'],
  ['t1-age','t1-populations','t1-genetic-environment'],
  ['t1-weight-polyphagia','t1-polyuria-polydipsia','t1-vision-postural-paresthesia','t1-onset','t1-asymptomatic'],
  ['age-overlap','body-size-overlap','insulin-overlap','dka-overlap','classification-tests','question-t2-clues','autoimmune-history'],
  ['t1-glucose-criteria','t1-confirmation','cpeptide-origin','cpeptide-low','cpeptide-preserved','insulin-antibody','gad','ia2','znt8'],
  ['lifelong-insulin','delivery-options','t1-team-activity'],
  ['pediatric-target','pediatric-individualization','adult-target','adult-benefit-risk'],
  ['t2-resistance-sites','t2-compensation','t2-beta-decline','t2-influences','t2-endothelium','t2-inflammation','t2-lipid-pattern'],
  ['t2-age','t2-populations-social-context','adiposity-inactivity-age-family','prediabetes-gdm-pcos','cvd-htn-lipids','acanthosis-masld','steroid-antipsychotic-risk'],
  ['t2-asymptomatic','t2-classic-symptoms','infections-wounds','acanthosis-neuropathic-presentation'],
  ['t2-glucose-criteria','t2-confirmation'],
  ['mnt','individualized-carbs','weight-benefit','weight-individualization','aerobic-minutes','activity-distribution','resistance','sedentary-time','sleep-goal','sleep-metabolic-effects'],
  ['lada-autoimmune','lada-adult-slow','lada-insulin-progression','lada-t1-spectrum','mody-monogenic','mody-inheritance','mody-clues','mody-genetic-confirmation'],
  ['child-supervision','growth-activity-illness-puberty','pediatric-devices','adolescent-psychosocial','adult-daily-context','older-function-cognition','older-hypoglycemia-burden'],
  ['screen-age-risk','normal-3y','prediabetes-yearly','gdm-1to3y','visits-3to6m','a1c-3m','a1c-stable-twice','bp-everyvisit','lipids-context','renal-uacr-egfr','renal-adult-timing','retinal-adult-start','retinal-repeat','annual-foot','highrisk-foot-everyvisit','tobacco-mental','dental-vaccines','reproductive-cancer','hearing-sleep-sexual'],
  ['language-literacy','nutrition-faith-other-medicine','beliefs-fears-distress','cultural-communication','cost-technology-support','qualitylife-sexual','clinician-bias-nonjudgment'],
  ['autonomy','beneficence','nonmaleficence','justice-access','confidentiality']
];
let cards=0, test=0, apply=0;
const prompts=new Set();
sections.forEach((section,index)=>{
  assert(section.title.startsWith((index+1)+'. '));
  const coverage=new Set(section.cards.flatMap(card=>card.coverage));
  for(const tag of expectedCoverage[index]) assert(coverage.has(tag),`Missing objective ${index+1}: ${tag}`);
  for(const mode of ['test','apply']) for(const question of section[mode]) {
    assert(!prompts.has(question.prompt),'Avoid duplicate questions'); prompts.add(question.prompt);
    assert.equal(question.choices.length,4); assert.equal(new Set(question.choices).size,4);
    assert(Number.isInteger(question.correct)&&question.correct>=0&&question.correct<4);
    assert(Number.isInteger(question.card)&&question.card>=0&&question.card<section.cards.length);
    assert(question.explanation);
  }
  section.cards.forEach((card,ci)=>{
    assert(card.html&&card.title);
    assert(section.test.some(q=>q.card===ci),`Untested card: ${card.title}`);
    assert(section.apply.some(q=>q.card===ci),`No application: ${card.title}`);
  });
  cards+=section.cards.length; test+=section.test.length; apply+=section.apply.length;
});
const curriculum=sections.flatMap(s=>s.cards.map(c=>c.html)).join(' ');
assert(!/metformin|semaglutide|glipizide|insulin glargine|units\/kg|HHS treatment/i.test(curriculum),'Exclude separate pharmacology/emergencies content');
console.log(`Diabetes: 18 objectives in order, ${cards} cards, ${test} Test questions, ${apply} Apply cases; ${expectedCoverage.flat().length} components checked. Every card has linked practice.`);
