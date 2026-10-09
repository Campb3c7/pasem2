const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),path=require('node:path');
const root=path.join(__dirname,'..'),context=vm.createContext({window:{}});
for(const m of fs.readFileSync(path.join(root,'index.html'),'utf8').matchAll(/<script src="(data\/[^" ]+)"><\/script>/g))vm.runInContext(fs.readFileSync(path.join(root,m[1]),'utf8'),context,{filename:m[1]});
const course=context.window.SEMESTER.courses.find(c=>c.id==='endocrine');
assert(course.lectures.some(l=>l.id==='diabetes-complications'),'Complications must remain in the catalog');
const sections=course.lectures.find(l=>l.id==='diabetes-complications').objectives;
const ids=['micro-macro','dyslipidemia','blood-pressure','cause-of-death','pad','retinopathy-types','retinopathy-symptoms','microvascular-course','eye-screening','neuropathy-screen','distal-symmetric','foot-care','isolated-presentation','isolated-outcomes','painful-presentation','painful-treatment','autonomic-neuropathy','kidney-pathophysiology','kidney-tests','kidney-screen-classify','kidney-protection'];
assert.deepEqual(Array.from(sections,s=>s.id),ids.map((id,i)=>String(i+1).padStart(2,'0')+'-'+id));
const required=[
 ['microvascular-examples','macrovascular-examples','risk-comparison'],
 ['high-tg','low-hdl','atherogenic-ldl','hld-ascvd','statin-first','statin-risk-intensity','additional-ldl'],
 ['bp13080','bp-safe','bp-lifestyle-comorbidity'],
 ['cvd-mortality','cv-risk-reduction'],
 ['pad-clues','pad-pulses','abi090','noncompressible-abi','toe-testing','exercise-abi','pad-risk-management','pad-exercise','pad-antiplatelet-statin','pad-revascularization'],
 ['npdr-findings','pdr-new-vessels','pdr-vitreous-detachment','dme-any-stage','dme-central-vision'],
 ['retina-asymptomatic','retina-blur-floaters-loss'],
 ['duration-degree','glycation-injury','glycemia-bp-lipids'],
 ['eye-t1-fiveyears','eye-t2-diagnosis','eye-normal1to2','eye-retina-annual','eye-pregnancy-postpartum','eye-existing-dme','eye-rapid-control-review'],
 ['nerve-t1-fiveyears','nerve-t2-diagnosis','nerve-annual','feet-highrisk-eachvisit','exam-skin-deformities','exam-pulses-temp','exam-monofilament','exam-other-senses-reflexes'],
 ['dsp-mostcommon','dsp-stocking-glove','dsp-sensory-first','dsp-denervation','dsp-pressure-ulcers','charcot-rocker-fractures'],
 ['footwear','daily-inspection','hygiene','no-pain-not-safe','no-reversal','slow-progression','therapy-deformity-care'],
 ['mono-versus-multiplex','isolated-abrupt-motor','cranial-femoral','isolated-ischemia-trauma'],
 ['isolated-gradual-recovery','isolated-analgesia-control','isolated-followup'],
 ['burning-allodynia','night-lower-extremities','sleep-emotional-burden'],
 ['pregabalin','duloxetine','gabapentin-sedation','venlafaxine','pain-guidance-clarification','capsaicin-mechanism-burning','lidocaine-topical'],
 ['postural-presentation','postural-nonpharm','postural-drugs','gastroparesis-presentation','gastroparesis-diet','gastroparesis-drugs-device','metoclopramide-safety','bowel-presentation','bowel-treatment','bowel-selection','retention-presentation','retention-assessment','retention-drainage','ed-presentation','ed-options','ed-nitrate-safety'],
 ['dkd-glomerular-injury','dkd-albumin-leak','dkd-filtration-loss','dkd-ckd-failure'],
 ['uacr-leak-test','egfr-function-test','kidney-both-tests'],
 ['kidney-t1-fiveyears','kidney-t2-diagnosis','kidney-annual','ckd1to4','uacr-confirmation','uacr-below30','uacr30to299','uacr300plus'],
 ['kidney-glycemia-bp','acearb30','acearb300-egfr60','sglt2-kidney-protection','acearb-creatinine-potassium','creatinine30-volume-context']
];
let cards=0,test=0,apply=0;const prompts=new Set();
sections.forEach((s,i)=>{
 const tags=new Set(s.cards.flatMap(c=>c.coverage));for(const tag of required[i])assert(tags.has(tag),`Missing objective ${i+1}: ${tag}`);
 for(const mode of ['test','apply'])for(const q of s[mode]){assert(!prompts.has(q.prompt));prompts.add(q.prompt);assert.equal(q.choices.length,4);assert.equal(new Set(q.choices).size,4);assert(Number.isInteger(q.correct)&&q.correct>=0&&q.correct<4);assert(Number.isInteger(q.card)&&q.card>=0&&q.card<s.cards.length);assert(q.explanation);}
 s.cards.forEach((c,ci)=>{assert(c.title&&c.html);assert(s.test.some(q=>q.card===ci));assert(s.apply.some(q=>q.card===ci));});cards+=s.cards.length;test+=s.test.length;apply+=s.apply.length;
});
assert.equal(sections[16].cards.length,5,'Each autonomic manifestation needs dedicated teaching');
console.log(`Complications: 21 ordered objectives; ${cards} Learn cards, ${test} Test questions, ${apply} Apply cases. ${required.flat().length} components checked; question links valid.`);
