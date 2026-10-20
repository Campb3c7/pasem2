const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),path=require('node:path');
const root=path.join(__dirname,'..'),file='data/valvular-disease.js',context=vm.createContext({window:{}});
vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),context,{filename:file});
const sections=context.window.VALVULAR_DISEASE_OBJECTIVES;
assert(Array.isArray(sections),'VALVULAR_DISEASE_OBJECTIVES missing');
const lesion=p=>[`${p}-pathophysiology`,`${p}-symptoms`,`${p}-murmur`,`${p}-workup`,`${p}-management`];
const spec=[
['01-echo-first-line',['echo-first-line','echo-noninvasive-available','echo-anatomy','echo-function','echo-doppler-gradients','echo-ventricle-response']],
['02-tte-vs-tee',['tte-indication','tte-strengths','tte-limitations','tee-indication','tee-strengths','tee-limitations','tte-tee-comparison']],
['03a-aortic-stenosis',['as-pathophysiology','as-etiology-degenerative','as-etiology-bicuspid','as-etiology-rheumatic','as-symptoms','as-murmur','as-exam-findings','as-workup-tte','as-severity-values','as-ekg-cxr','as-management-medical','as-surgery-timing','as-savr-tavr']],
['03b-aortic-regurgitation',['ar-pathophysiology','ar-etiology-leaflet','ar-etiology-root','ar-symptoms','ar-murmur','ar-exam-findings','ar-workup-tte','ar-ekg-cxr','ar-management-medical','ar-surgery-timing']],
['03c-acute-aortic-regurgitation',['acute-ar-pathophysiology','acute-ar-etiology','acute-ar-presentation','acute-ar-workup','acute-ar-management']],
['03d-mitral-stenosis',['ms-pathophysiology','ms-etiology-rheumatic','ms-symptoms','ms-murmur','ms-complications','ms-workup-echo','ms-ekg-cxr','ms-management-medical','ms-balloon-valvotomy','ms-open-commissurotomy-replacement','ms-surgery-timing']],
['03e-mitral-valve-prolapse',['mvp-pathophysiology','mvp-etiology','mvp-symptoms','mvp-murmur','mvp-maneuvers','mvp-workup-echo','mvp-management','mvp-surgery-timing']],
['03f-mitral-regurgitation',['mr-pathophysiology','mr-etiology-primary','mr-etiology-secondary','mr-symptoms','mr-murmur','mr-workup-echo','mr-ekg-cxr','mr-management-medical','mr-surgery-timing','mr-repair-preferred','mr-replacement-indications']],
['03g-acute-mitral-regurgitation',['acute-mr-pathophysiology','acute-mr-etiology','acute-mr-presentation','acute-mr-workup','acute-mr-management']],
['03h-pulmonic-stenosis',['ps-pathophysiology','ps-etiology','ps-symptoms','ps-murmur','ps-exam-findings','ps-workup','ps-management','ps-surgery-timing']],
['03i-pulmonic-regurgitation',['pr-pathophysiology','pr-etiology','pr-symptoms','pr-murmur','pr-workup','pr-management','pr-surgery-timing']],
['03j-tricuspid-stenosis',['ts-pathophysiology','ts-etiology','ts-symptoms','ts-murmur','ts-workup','ts-management','ts-surgery-timing']],
['03k-tricuspid-regurgitation',['tr-pathophysiology','tr-etiology-primary','tr-etiology-secondary','tr-symptoms','tr-murmur','tr-carvallo','tr-workup','tr-management','tr-surgery-timing']],
['07-wood-phenomenon',['wood-definition','wood-clinical-significance']],
['08-severe-valve-areas',['severe-as-area','severe-ms-area']],
['09-eccentric-concentric-hypertrophy',['concentric-definition','eccentric-definition','concentric-stenosis','eccentric-regurgitation']],
['10-rheumatic-heart-disease',['rhd-pathophysiology','rhd-timeline','rhd-prevention-penicillin','rhd-secondary-prophylaxis','rhd-valves','rhd-global-burden','rhd-echo-acute','rhd-echo-chronic']],
['11-most-common-valvular-abnormality',['most-common-mvp']],
['12-surgical-strategies',['strategy-repair','strategy-replacement']],
['13-mechanical-vs-bioprosthetic',['mechanical-durability','mechanical-material','mechanical-population','bioprosthetic-durability','bioprosthetic-material','bioprosthetic-population']],
['14-anticoagulation',['anticoag-mechanical-warfarin','anticoag-inr-target','anticoag-doac-contraindicated','anticoag-bioprosthetic']],
['15-infection-susceptibility',['infection-foreign-material','infection-endothelium','infection-biofilm']],
['16-prosthetic-valve-endocarditis',['pve-early','pve-late','pve-organisms','pve-patient-education']],
['17-pve-prophylaxis',['prophylaxis-indications','prophylaxis-drug','prophylaxis-dose','prophylaxis-route','prophylaxis-timing']],
['18-surgical-approaches',['approach-open','approach-minimally-invasive','approach-transcatheter','approach-advantages','approach-disadvantages','approach-preferred']]];
assert.deepEqual(Array.from(sections,s=>s.id),spec.map(x=>x[0]));
// app.js HTML-escapes these fields: no tags or entities allowed (bare < > comparisons are fine).
const plain=x=>{assert(typeof x==='string'&&x.length,'empty text');assert(!/<\/?[a-zA-Z]|&[a-zA-Z#][a-zA-Z0-9]*;/.test(x),`Escaped text contains markup/entity: ${x}`);};
let cards=0,test=0,apply=0;const prompts=new Set(),ids=/^[a-z0-9-]+$/;
sections.forEach((s,i)=>{
  assert(ids.test(s.id),s.id);plain(s.title);plain(s.description);
  const tags=new Set(s.cards.flatMap(c=>c.coverage));
  for(const tag of spec[i][1])assert(tags.has(tag),`Missing component in ${s.id}: ${tag}`);
  for(const mode of ['test','apply'])for(const q of s[mode]){
    assert(!prompts.has(q.prompt),`Duplicate prompt: ${q.prompt}`);prompts.add(q.prompt);
    assert.equal(q.choices.length,4,q.prompt);assert.equal(new Set(q.choices).size,4,q.prompt);
    assert(Number.isInteger(q.correct)&&q.correct>=0&&q.correct<4,q.prompt);
    assert(Number.isInteger(q.card)&&q.card>=0&&q.card<s.cards.length,q.prompt);
    assert(q.explanation,q.prompt);[q.prompt,q.explanation,...q.choices].forEach(plain);
  }
  s.cards.forEach((c,ci)=>{assert(c.title&&c.html);plain(c.title);assert(c.coverage.length);
    assert(s.test.some(q=>q.card===ci),`No test for ${s.id} card ${ci}`);assert(s.apply.some(q=>q.card===ci),`No apply for ${s.id} card ${ci}`);});
  cards+=s.cards.length;test+=s.test.length;apply+=s.apply.length;
});
console.log(`Valvular Disease: ${sections.length} ordered sections; ${cards} Learn cards, ${test} Test questions, ${apply} Apply cases. ${spec.flatMap(x=>x[1]).length} components checked; question links valid.`);
