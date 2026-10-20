const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),path=require('node:path');
const root=path.join(__dirname,'..'),file='data/cardiomyopathies.js',context=vm.createContext({window:{}});
vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),context,{filename:file});
const sections=context.window.CARDIOMYOPATHY_OBJECTIVES;
assert(Array.isArray(sections),'CARDIOMYOPATHY_OBJECTIVES missing');
/* Required components per section, derived from the official objective wording (general objectives 1-8, then each AHA cardiomyopathy). */
const required={
'01-definition':['current-definition','old-definition','sequela-damage','ischemic-term','valvular-term','lvh-generic-term'],
'02-symptoms-exam-pathways':['symptom-spectrum','common-symptoms','pe-normal-often','gallop','av-regurgitation','displaced-pmi-heave','rales','jvd-edema-ascites','final-common-pathways'],
'03-hf-progression':['early-exertional','cardiac-reserve','overlooked-symptoms','fluid-retention','routine-dyspnea','frothy-sputum','orthopnea','pnd','edema-ascites','increased-jvp'],
'04-thromboembolism-scd':['tachyarrhythmias','sustained-vt','vt-vf-asystole','thromboembolism-risk','anticoagulation'],
'05-workup':['bnp','troponin','rule-out-labs','ekg-holter','cxr','incidental-cardiomegaly','echo-test-of-choice','cmr-follow-up','cmr-tissue-characterization','cmr-right-ventricle','biopsy','stress-test'],
'06-management-goals':['no-cure','morbidity-mortality','rate-control-bb','anticoagulant','diuretic','pacemaker','icd','surgery-transplant'],
'07-genetics-family':['genetic-basis','aha-genetic','aha-mixed','aha-acquired','three-generation-fhx','first-degree-screening','genetic-testing-family'],
'08-echo-correlation':['echo-hcm','echo-dcm','echo-rcm','echo-arvc','echo-myocarditis','echo-ppcm','echo-takotsubo','echo-athlete'],
'09a-hcm-features':['sarcomere-mutation','autosomal-dominant','age-dependent-penetrance','asymmetric-septal','diastolic-dysfunction','lvot-obstruction','hcm-variable','hcm-exertional-symptoms','hcm-advanced-hf','lvot-murmur','s4','mr-murmur','augmentation-maneuvers','ekg-lvh-p-waves','dagger-q-waves','giant-negative-t','ekg-arrhythmias'],
'09b-hcm-diagnosis':['echo-all-suspected','wall-thickness-15mm','asymmetric-segments','lvot-50-mmhg','lvot-prognosis','cmr-max-wall-thickness','cmr-septal-reduction-planning','stress-lvot-after-exercise','stress-bp-response','stress-arrhythmia-ischemia','hcm-first-degree','hcm-family-tests','hcm-genetic-screening','athlete-not-cm','athlete-symmetric','athlete-13-15mm','other-lvh-causes'],
'09c-hcm-treatment':['asymptomatic-observation','activity-restriction','bb-first-line','nondhp-ccb-alternative','combo-therapy','septal-myectomy','alcohol-septal-ablation','avoid-inotropes','avoid-dhp-ccb','avoid-acei-arb','avoid-nitrates','avoid-diuretics','af-anticoagulation'],
'09d-hcm-sudden-death':['icd-only-prevention','hcm-leading-scd-athletes','sca-presentation','sca-vt-vf','risk-under-40','risk-nsvt','risk-massive-hypertrophy','risk-stress-hypotension','risk-family-sca','defibrillation-cpr'],
'10-arvc':['arvc-autosomal-dominant','desmosomal-mutation','fibro-fatty-replacement','arvc-right-hf','arvc-vt','exercise-catecholamines','second-mcc-athletes','arvc-phases','arvc-ekg-normal-50','arvc-ekg-findings','epsilon-wave','arvc-echo','arvc-cmr','arvc-activity-restriction','arvc-beta-blocker','arvc-icd','arvc-transplant'],
'11-dcm':['most-common-cm','ventricular-dilation','systolic-dysfunction-ef40','dcm-idiopathic','dcm-genetic-muscular-dystrophy','dcm-alcohol','dcm-pregnancy','dcm-doxorubicin','dcm-hydroxychloroquine','dcm-left-then-right-hf','s3','dcm-regurg-murmurs','dcm-rales-jvp-edema','dcm-echo-toc','dcm-echo-findings','dcm-cxr-cardiomegaly','kerley-a','kerley-b','kerley-c','pleural-effusion','dcm-ecg','dcm-bnp','dcm-troponin','dcm-stress-cath','dcm-reversible-causes','dcm-hf-drugs','dcm-anticoagulation','dcm-digoxin-icd','dcm-transplant'],
'12-rcm':['rcm-nondilated','rcm-stiff-diastolic','rcm-dilated-atria','rcm-preserved-systolic','rcm-idiopathic','rcm-amyloidosis','rcm-sarcoidosis','rcm-radiation','rcm-biventricular-hf','rcm-rapid-progression','rcm-gallop-murmurs','rcm-low-qrs','rcm-cxr','rcm-echo','rcm-cmr','rcm-biopsy','rcm-poor-prognosis','rcm-no-cure-transplant'],
'13-myocarditis':['inflammation-necrosis','histologic-hallmark','variable-course','viral-most-common','common-viruses','chagas','giant-cell','masked-constitutional','post-viral-red-flag','other-presentations','myocarditis-ecg','myocarditis-enzymes','myocarditis-cxr','myocarditis-echo','supportive-care','myocarditis-hf-management','myocarditis-anticoagulation','severe-support'],
'14-ppcm':['ppcm-onset','ppcm-ef-45','ppcm-lv-dilation','ppcm-criteria','ppcm-age-30','ppcm-african-descent','ppcm-multiple-gestation','ppcm-preeclampsia','ppcm-cocaine','ppcm-terbutaline','ppcm-symptoms','ppcm-delayed-dx','ppcm-exam','ppcm-workup','ppcm-dcm-like-tx','ppcm-avoid-acei-arb','ppcm-prompt-delivery','ppcm-half-recover','ppcm-mortality','ppcm-future-pregnancy'],
'15-takotsubo':['common-names','octopus-pot','transient-lv-dysfunction','apical-ballooning','hypercontractile-base','emotional-distress','catecholamine-surge','stemi-mimic','treat-as-stemi','cath-no-cad','acute-complications','recovery-4-weeks','benzodiazepines','diazepam-lorazepam','recurrence-2-percent','lifelong-bb-uncertain']
};
assert.deepEqual(Array.from(sections,s=>s.id),Object.keys(required));
/* app.js escapes these fields, so they must be plain text with real characters, never markup or entities. */
const plain=x=>{assert(typeof x==='string'&&x.trim(),'Empty text');assert(!/[<>]|&[a-zA-Z#0-9]+;/.test(x),`Escaped text contains markup/entity: ${x}`);};
let cards=0,test=0,apply=0;const prompts=new Set(),ids=/^[a-z0-9-]+$/;
sections.forEach(s=>{
  assert(ids.test(s.id),s.id);plain(s.title);plain(s.description);
  const tags=new Set(s.cards.flatMap(c=>c.coverage));
  for(const tag of required[s.id])assert(tags.has(tag),`Missing component in ${s.id}: ${tag}`);
  for(const mode of ['test','apply']){
    assert(s[mode].length,`${s.id} has no ${mode} questions`);
    for(const q of s[mode]){
      plain(q.prompt);
      assert(!prompts.has(q.prompt),`Duplicate prompt: ${q.prompt}`);prompts.add(q.prompt);
      assert.equal(q.choices.length,4,q.prompt);assert.equal(new Set(q.choices).size,4,`Duplicate choices: ${q.prompt}`);
      assert(Number.isInteger(q.correct)&&q.correct>=0&&q.correct<4,q.prompt);
      assert(Number.isInteger(q.card)&&q.card>=0&&q.card<s.cards.length,`Bad card link: ${q.prompt}`);
      plain(q.explanation);q.choices.forEach(plain);
    }
  }
  s.cards.forEach((c,ci)=>{plain(c.title);assert(c.html&&c.html.length>40,`${s.id} card ${ci} html`);
    assert(Array.isArray(c.coverage)&&c.coverage.length&&c.coverage.every(t=>ids.test(t)),`${s.id} card ${ci} coverage`);
    assert(s.test.some(q=>q.card===ci),`No test for ${s.id} card ${ci}`);assert(s.apply.some(q=>q.card===ci),`No apply for ${s.id} card ${ci}`);});
  cards+=s.cards.length;test+=s.test.length;apply+=s.apply.length;
});
console.log(`Cardiomyopathies: ${sections.length} ordered sections; ${cards} Learn cards, ${test} Test questions, ${apply} Apply cases. ${Object.values(required).flat().length} components checked; question links valid.`);
