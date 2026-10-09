const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),path=require('node:path');
const root=path.join(__dirname,'..'),context=vm.createContext({window:{}});
for(const m of fs.readFileSync(path.join(root,'index.html'),'utf8').matchAll(/<script src="(data\/[^" ]+)"><\/script>/g))vm.runInContext(fs.readFileSync(path.join(root,m[1]),'utf8'),context,{filename:m[1]});
const course=context.window.SEMESTER.courses.find(c=>c.id==='endocrine');
assert.equal(course.lectures.filter(l=>l.id==='diabetes-emergencies').length,1);
const sections=course.lectures.find(l=>l.id==='diabetes-emergencies').objectives;
const ids=['ulcer-exam','ulcer-pathophysiology','cellulitis-osteomyelitis','ulcer-management','dka-path-criteria','dka-etiology-presentation','dka-labs','dka-lab-treatment','dka-course','dka-prevention','hhs-pathophysiology','hhs-triggers-presentation','hhs-labs','hhs-course','hhs-population-prevention'];
assert.deepEqual(Array.from(sections,s=>s.id),ids.map((id,i)=>String(i+1).padStart(2,'0')+'-'+id));
const required=[
 ['wound-local-exam','foot-neurovascular','systemic-assessment','probe-depth','probe-bone-suspicion','probe-not-alone'],
 ['foot-pressure-trauma','foot-neuropathy-deformity','foot-perfusion-healing','foot-progression'],
 ['cellulitis-soft-tissue','osteomyelitis-bone','infection-coexist-uninfected','plain-xray','mri-uncertainty','early-xray-not-exclude','bone-sampling'],
 ['offload-wound-care','vascular-source-control','no-antibiotics-uninfected','antibiotic-selection-factors','mild-gram-positive','dicloxacillin-cephalexin','mrsa-options','streptococcal-coverage','deep-severe-care','unasyn-zosyn','vancomycin-mrsa','pseudomonas-not-automatic'],
 ['dka-insulin-counterregulation','dka-glucose-production-use','dka-lipolysis-ketones','dka-osmotic-loss','dka-glucose-known','dka-ketosis3','dka-acidosis','dka-euglycemic'],
 ['dka-missed-new-insulin','dka-pump','dka-infection','dka-stress-sglt2','dka-both-types','dka-time-symptoms','dka-dehydration-signs','dka-kussmaul-fruity','dka-neuro-change'],
 ['dka-lab-glucose','dka-lab-bhob','dka-lab-ph-bicarbonate','dka-gap','bhob-preferred','potassium-serum-total','dka-bun-creatinine','dka-sodium','dka-stress-wbc'],
 ['dka-initial-assessment','dka-fluid-type-rate','dka-fluid-reassess','dka-fluid-comorbidity','k-low-delay','k-mid-replace-insulin','k-high-hold-replace','k-renal-urine','dka-insulin01','dka-no-routine-bolus','dka-dextrose250','dka-continue-until-resolved','dka-treat-precipitant','dka-bicarbonate-selected','dka-phosphate-selected','dka-io'],
 ['course-glucose-ketones','course-low-k-glucose','course-repeat-monitoring','course-hyperchloremia','resolution-bhob06','resolution-ph-or-bicarb','resolution-not-glucose-alone','transition-reassess','transition-overlap','transition-followup'],
 ['prevent-symptoms-triggers','prevent-ketone-glucose','prevent-fluids-insulin','prevent-pump','prevent-escalation','prevent-vomiting','prevent-access-education'],
 ['hhs-relative-insulin','hhs-glucose-production-use','hhs-ketone-suppression','hhs-osmotic-loss','hhs-renal-vicious-cycle','hhs-osmolality-neuro'],
 ['hhs-infection-vascular-stress','hhs-treatment-medications','hhs-fluid-access','hhs-slow-onset','hhs-weak-polyuria-thirst','hhs-neuro-decline','hhs-high-mortality'],
 ['hhs-glucose600','hhs-osmolality','hhs-ketones-low','hhs-ph-bicarb','hhs-overlap','hhs-hemoconcentration-aki','hhs-sodium-variable','hhs-potassium-depletion','hhs-stress-wbc'],
 ['hhs-fluid-first','hhs-fluid-individualize','hhs-insulin005','hhs-mixed-protocol','hhs-monitor-osmolality-neuro','hhs-controlled-correction','hhs-dextrose250','hhs-treatment-low-risks','hhs-recovery-neuro-volume','hhs-recovery-osmolality','hhs-transition-followup'],
 ['hhs-older-t2','hhs-other-types','hhs-frailty-access','hhs-prevent-treatment-monitor','hhs-prevent-hydration-support']
];
let cards=0,test=0,apply=0;const prompts=new Set();
sections.forEach((s,i)=>{
 const tags=new Set(s.cards.flatMap(c=>c.coverage));for(const tag of required[i])assert(tags.has(tag),`Missing objective ${i+1}: ${tag}`);
 for(const mode of ['test','apply'])for(const q of s[mode]){assert(!prompts.has(q.prompt),`Duplicate prompt: ${q.prompt}`);prompts.add(q.prompt);assert.equal(q.choices.length,4);assert.equal(new Set(q.choices).size,4);assert(Number.isInteger(q.correct)&&q.correct>=0&&q.correct<4);assert(Number.isInteger(q.card)&&q.card>=0&&q.card<s.cards.length);assert(q.explanation);}
 s.cards.forEach((c,ci)=>{assert(c.title&&c.html);assert(s.test.some(q=>q.card===ci));assert(s.apply.some(q=>q.card===ci));});cards+=s.cards.length;test+=s.test.length;apply+=s.apply.length;
});
console.log(`Emergencies: 15 ordered objectives; ${cards} Learn cards, ${test} Test questions, ${apply} Apply cases. ${required.flat().length} components checked; question links valid.`);
