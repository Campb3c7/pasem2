const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),path=require('node:path');
const root=path.join(__dirname,'..'),file='data/lipids-dyslipidemia.js',context=vm.createContext({window:{}});
vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),context,{filename:file});
const sections=context.window.LIPIDS_DYSLIPIDEMIA_OBJECTIVES;
assert(Array.isArray(sections),'LIPIDS_DYSLIPIDEMIA_OBJECTIVES missing');
const required={
'01-lipids-atherosclerosis':['atherosclerosis-burden','atherosclerosis-drivers','atherosclerosis-outcomes','ldl-role','hdl-role','tg-role','cholesterol-risk-relationship'],
'02-plaque-formation':['endothelial-entry','oxidation','fatty-streak','foam-cells','reversible-stage','calcification','fibrous-cap','atherosclerotic-plaque','luminal-narrowing','plaque-rupture','thrombosis','cap-stability'],
'03-ascvd-definition':['ascvd-stable-angina','ascvd-acs','ascvd-stroke-tia','ascvd-pad','ascvd-revascularization','risk-equivalent','secondary-prevention-recognition'],
'04-lipid-metabolism':['lipid-transport','ffa-three-sources','ffa-ingestion','chylomicron','lipoprotein-lipase','chylomicron-remnant','ffa-adipose','albumin-transport','ffa-liver-synthesis','vldl','idl-ldl','cholesterol-ingestion','npc1l1','cholesterol-uses','cholesterol-liver-synthesis','hmg-coa-reductase','cholesterol-clearance'],
'05-lipoprotein-components':['lipoprotein-structure','cholesterol-component','tg-ffa-component','apolipoprotein-role','chylomicron-class','vldl-class','ldl-class','hdl-class','lpa','apo-c2','apo-b','ldl-receptor','apo-a1'],
'06-primary-secondary-prevention':['primary-definition','secondary-definition','primary-benefit','secondary-benefit','prevention-indications','mortality-decline'],
'07-dyslipidemia-causes':['genetic-causes','secondary-causes','medication-causes'],
'08-risk-factors':['modifiable-vs-nonmodifiable','smoking','hypertension','diabetes','physical-inactivity','obesity','alcohol'],
'09-clinical-features':['asymptomatic','xanthelasma','tendon-xanthoma','eruptive-xanthoma','corneal-arcus'],
'10-familial-comparison':['fh-overview','fhtg-overview','fh-vs-fhtg','homozygous-fh','heterozygous-fh','fhtg-overproduction','fhtg-underutilization'],
'11-fh-criteria':['fh-ldl-threshold','fh-family-criterion','premature-chd-ages','fh-next-step'],
'12-genetic-pathophysiology':['defective-ldl-receptor','defective-apob','lpl-deficiency'],
'13-lipid-panel':['fasting','confirm-repeat','screening','measured-components','friedewald','vldl-calculation','tg-400-limit','ldl-ranges','total-cholesterol-ranges','hdl-ranges','tg-ranges'],
'14-additional-testing':['nmr-utility','nmr-interpretation','hscrp-utility','hscrp-categories','cac-procedure','cac-scores','cac-decision'],
'15-ascvd-risk-calculator':['calculator-purpose','calculator-options','who-to-calculate','calculator-inputs','risk-categories'],
'16-lifestyle':['diet-fat','mediterranean','omega3-diet','tg-diet','fiber-antioxidants','smoking-cessation','comorbidity-management','exercise','lifestyle-benefit','shared-decision'],
'17a-statins':['statin-moa','statin-route','statin-lipid-effect','statin-brand-generic','statin-intensity','statin-side-effects','statin-pregnancy','statin-monitoring','statin-cv-evidence','statin-benefit-groups'],
'17b-ezetimibe':['ezetimibe-brand','ezetimibe-moa','ezetimibe-route','ezetimibe-lipid-effect','ezetimibe-side-effects','ezetimibe-monitoring','improve-it'],
'17c-pcsk9-inhibitors':['pcsk9-moa','pcsk9-lipid-effect','pcsk9-brand','pcsk9-route','pcsk9-side-effects','pcsk9-evidence'],
'17d-bile-acid-sequestrants':['bas-brand','bas-moa','bas-route','bas-lipid-effect','bas-side-effects','bas-evidence','bas-clinical-use'],
'17e-fibric-acid-derivatives':['fibrate-brand','fibrate-moa','fibrate-route','fibrate-lipid-effect','fibrate-clinical-use','fibrate-side-effects','fibrate-monitoring','fibrate-evidence'],
'17f-niacin':['niacin-lipid-effect','niacin-evidence','niacin-side-effects','niacin-flush-prevention'],
'17g-fish-oil':['fish-oil-brand','fish-oil-route','fish-oil-moa','fish-oil-lipid-effect','fish-oil-side-effects','fish-oil-evidence'],
'18-medication-order':['comparison-table','ldl-order','tg-order'],
'19-treatment-plan':['four-groups','intensity-selection','no-ldl-target','special-ages','borderline-risk','risk-enhancers','cac-tiebreaker'],
'20-metabolic-syndrome':['three-of-five','waist','tg-criterion','hdl-criterion','glucose-criterion','bp-criterion','risk-enhancer-role'],
'21-follow-up':['follow-up-timing','follow-up-questions','follow-up-labs','ck-testing','inadequate-response','long-term-monitoring']};
assert.deepEqual(Array.from(sections,s=>s.id),Object.keys(required),'Section ids/order mismatch');
// Escaped text (prompts, choices, explanations, titles, descriptions) must contain no tags or HTML entities.
const plain=x=>{assert(typeof x==='string'&&x.trim(),'Empty text');assert(!/<\/?[a-zA-Z!]|&[a-zA-Z#][a-zA-Z0-9]*;/.test(x),`Escaped text contains markup/entity: ${x}`);};
let cards=0,test=0,apply=0;const prompts=new Set(),ids=/^[a-z0-9-]+$/,seenIds=new Set();
sections.forEach((s,i)=>{
  assert(ids.test(s.id),s.id);assert(!seenIds.has(s.id));seenIds.add(s.id);
  plain(s.title);plain(s.description);assert(/^Objective \d+\. Slides /.test(s.description),s.description);
  const tags=new Set(s.cards.flatMap(c=>c.coverage));
  for(const tag of required[s.id])assert(tags.has(tag),`Missing component in ${s.id}: ${tag}`);
  for(const mode of ['test','apply'])for(const q of s[mode]){
    plain(q.prompt);assert(!prompts.has(q.prompt),`Duplicate prompt: ${q.prompt}`);prompts.add(q.prompt);
    assert(Array.isArray(q.choices)&&q.choices.length===4,q.prompt);assert.equal(new Set(q.choices).size,4,`Duplicate choices: ${q.prompt}`);
    assert(Number.isInteger(q.correct)&&q.correct>=0&&q.correct<4,q.prompt);
    assert(Number.isInteger(q.card)&&q.card>=0&&q.card<s.cards.length,q.prompt);
    plain(q.explanation);q.choices.forEach(plain);
  }
  s.cards.forEach((c,ci)=>{assert(c.title&&c.html);plain(c.title);assert(Array.isArray(c.coverage)&&c.coverage.length);
    assert(s.test.some(q=>q.card===ci),`No test for ${s.id} card ${ci}`);assert(s.apply.some(q=>q.card===ci),`No apply for ${s.id} card ${ci}`);});
  cards+=s.cards.length;test+=s.test.length;apply+=s.apply.length;
});
const comps=Object.values(required).flat().length;
console.log(`Lipid Physiology and Dyslipidemia: ${sections.length} ordered sections; ${cards} Learn cards, ${test} Test questions, ${apply} Apply cases. ${comps} components checked; question links valid.`);
