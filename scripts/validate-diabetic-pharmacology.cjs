const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),path=require('node:path');
const root=path.join(__dirname,'..'),context=vm.createContext({window:{}});
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
for(const m of html.matchAll(/<script src="(data\/[^" ]+)"><\/script>/g)) vm.runInContext(fs.readFileSync(path.join(root,m[1]),'utf8'),context,{filename:m[1]});
const course=context.window.SEMESTER.courses.find(c=>c.id==='endocrine');
assert(course.lectures.some(l=>l.id==='diabetic-pharmacology'),'Pharmacology must remain in the catalog');
const sections=course.lectures.find(l=>l.id==='diabetic-pharmacology').objectives;
const suffixes=['metformin','sulfonylureas','glp1','tirzepatide','dpp4','sglt2','tzd','meglitinides','alpha-glucosidase','insulin-names','insulin-kinetics','insulin-administration','insulin-uses','insulin-starting-dose','insulin-titration','insulin-complications','monitoring-devices','motivational-interviewing','a1c-goal-selection','t2-goals-modalities','hypoglycemia-management','hypoglycemia-risk-comparison','weight-comparison','cardiovascular-comparison','efficacy-comparison','initial-add-on-therapy','compelling-patient-factors','t2-insulin-start-adjust','t1-insulin-trends'];
assert.deepEqual(Array.from(sections,s=>s.id),suffixes.map((s,i)=>String(i+1).padStart(2,'0')+'-'+s),'Preserve the drug, insulin, and additional objective order');
// Independent source-objective inventory, including each required formulation.
const required=[
 ['metformin-names:Metformin','metformin-moa','metformin-benefits','metformin-gi','metformin-b12','metformin-lactic','metformin-renal','metformin-contrast','metformin-efficacy','metformin-indications','metformin-offlabel'],
 ['su-names:Glyburide','su-names:Glipizide','su-names:Glimepiride','su-moa','su-indications','su-efficacy','su-hypoglycemia-weight','glyburide-avoid','su-g6pd','su-sulfa','su-recurrence'],
 ['glp-names:Semaglutide (SQ)','glp-names:Semaglutide (oral)','glp-names:Exenatide','glp-names:Exenatide ER','glp-names:Liraglutide','glp-names:Dulaglutide','glp-moa','glp-weight-hypo','glp-efficacy','glp-cv','glp-administration','glp-gi','glp-aki','glp-pancreatitis','glp-injection','glp-mtc-men2','glp-agent-renal'],
 ['tirzepatide-names:Tirzepatide','tirzepatide-moa','tirzepatide-frequency','tirzepatide-efficacy','tirzepatide-weight','tirzepatide-adverse','tirzepatide-contra','tirzepatide-combination-hypo'],
 ['dpp-names:Sitagliptin','dpp-names:Saxagliptin','dpp-names:Linagliptin','dpp-names:Alogliptin','dpp-moa','dpp-efficacy','dpp-weight-hypo','dpp-renal','dpp-adverse','dpp-hypersensitivity','dpp-hf','dpp-no-combination'],
 ['sglt-names:Canagliflozin','sglt-names:Dapagliflozin','sglt-names:Empagliflozin','sglt-names:Ertugliflozin','sglt-moa','sglt-efficacy','sglt-weight-hypo','sglt-cardiorenal','sglt-renal','sglt-infections','sglt-volume','sglt-edka','sglt-hold','sglt-contra-review'],
 ['tzd-names:Pioglitazone','tzd-names:Rosiglitazone','tzd-efficacy','tzd-slow','tzd-weight-hypo','tzd-edema-hf','tzd-fractures','tzd-contra'],
 ['glinide-names:Repaglinide','glinide-names:Nateglinide','glinide-meals','glinide-adverse','glinide-place','glinide-contra'],
 ['agi-names:Acarbose','agi-names:Miglitol','agi-moa','agi-timing','agi-place','agi-gi'],
 ['rapid-names:Lispro','rapid-names:Aspart','rapid-names:Glulisine','regular-names:Regular insulin','nph-names:NPH','glargine-names:Glargine U-100','glargine-names:Glargine U-300','degludec-names:Degludec'],
 ['rapid-onset','rapid-peak','rapid-duration','rapid-timing','regular-onset','regular-peak','regular-duration','regular-timing','regular-iv','nph-onset','nph-peak','nph-duration','nph-timing','glargine-profile','glargine-u300-profile','degludec-profile','basal-daily'],
 ['admin-product-concentration','admin-nph','admin-no-mix','admin-storage','admin-sites','admin-subcutaneous','admin-rotation','admin-short-needle'],
 ['use-basal','use-meal','use-correction','use-pump','use-aid','use-premix-tradeoff'],
 ['dose-t2-10units','dose-t2-weight','dose-t1-weight','dose-t1-split','dose-t1-individualized'],
 ['titrate-fasting','titrate-2units','titrate-decrease-low'],
 ['insulin-hypo-risk','insulin-hypo-prevention','insulin-beta-blocker','insulin-weight','insulin-lipohypertrophy','insulin-lipoatrophy','insulin-allergy'],
 ['meter-purpose','meter-how','meter-use','monitor-log','cgm-purpose','cgm-interstitial-lag','cgm-use','cgm-backup'],
 ['mi-empathy','mi-teachback','mi-barriers-culture','mi-shared-goals'],
 ['goal7','goal65','goal8','goal-individualize'],
 ['t2-overall-goals','modality-diet-exercise','modality-medications-dsmes','modality-surgery'],
 ['hypo-recognition','hypo-oral15','hypo-repeat-recovery','hypo-nonoral'],
 ['risk-high-insulin-su','risk-glinide','risk-low-classes','risk-combinations'],
 ['weight-gain-classes','weight-neutral-classes','weight-loss-classes'],
 ['cv-glp-proven','cv-sglt-benefit','cv-tirzepatide-update','cv-tzd-hf','cv-dpp-hf','cv-su-no-benefit'],
 ['efficacy-all-classes','efficacy-gap','efficacy-variable'],
 ['initial-comorbidity-first','initial-gap15','initial-metformin','addon-patient-factors','addon-injectable','addon-combination-review'],
 ['factor-ascvd','factor-hf','factor-ckd','ascvd-definition','factor-weight','factor-hypo','factor-adverse','factor-cost-preference'],
 ['t2-insulin-indications','t2-insulin-start','t2-insulin-adjust'],
 ['t1-physiologic','t1-needs-factors','t1-honeymoon','t1-continue-insulin']
];
let cards=0,test=0,apply=0;const prompts=new Set();
sections.forEach((s,i)=>{
 assert(s.title.startsWith((i+1)+'. '));
 const tags=new Set(s.cards.flatMap(c=>c.coverage));
 for(const tag of required[i]) assert(tags.has(tag),`Missing component in ${s.id}: ${tag}`);
 for(const mode of ['test','apply']) for(const q of s[mode]){
  assert(!prompts.has(q.prompt),`Duplicate prompt: ${q.prompt}`);prompts.add(q.prompt);
  assert.equal(q.choices.length,4);assert.equal(new Set(q.choices).size,4);
  assert(Number.isInteger(q.correct)&&q.correct>=0&&q.correct<4);
  assert(Number.isInteger(q.card)&&q.card>=0&&q.card<s.cards.length);assert(q.explanation);
 }
 s.cards.forEach((c,ci)=>{
  assert(c.title&&c.html);assert(s.test.some(q=>q.card===ci),`No Test: ${c.title}`);assert(s.apply.some(q=>q.card===ci),`No Apply: ${c.title}`);
 });cards+=s.cards.length;test+=s.test.length;apply+=s.apply.length;
});
const all=sections.flatMap(s=>s.cards.map(c=>c.html)).join(' ');
for(const brand of ['Zepbound','Toujeo','Tresiba','Rybelsus','Bydureon BCise']) assert(all.includes(brand),`Missing required formulation/brand: ${brand}`);
assert(sections[7].test.filter(q=>q.prompt.startsWith('Which class contains')).length===2,'Glinide objective provides both names and tests class');
assert(sections[8].test.filter(q=>q.prompt.startsWith('Which class contains')).length===2,'AGI objective provides both names and tests class');
console.log(`Diabetic Pharmacology: 29 ordered sections, ${cards} Learn cards, ${test} Test questions, ${apply} Apply cases. ${required.flat().length} source-objective components checked; all named drugs/formulations and card links present.`);
