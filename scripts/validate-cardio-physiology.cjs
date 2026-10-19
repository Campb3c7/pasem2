const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),path=require('node:path');
const root=path.join(__dirname,'..'),file='data/cardio-physiology.js',context=vm.createContext({window:{}});
vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),context,{filename:file});
const sections=context.window.CARDIO_PHYSIOLOGY_OBJECTIVES;
assert(Array.isArray(sections),'CARDIO_PHYSIOLOGY_OBJECTIVES missing');
assert.deepEqual(Array.from(sections,s=>s.id),['01-circulation-organization','02-circulation-functions','03-blood-flow-principles','04-conduction-refractory','05-cardiac-cycle','06-cardiac-output-factors','07-arterial-vs-venous','08-blood-flow-control']);
const required=[
['pulmonary-components','systemic-components','circuit-size-pressure','central-circulation','peripheral-circulation','right-heart','left-heart','atria-role','ventricles-role','heart-wall-layers','intercalated-disks'],
['pulmonary-function','pulmonary-low-pressure-purpose','systemic-function','systemic-vessel-sequence','systemic-dynamic','pulmonary-vessel-exception'],
['flow','resistance','pressure','flow-equation','svr','laminar','turbulent','murmur','wall-tension','critical-closing-pressure','distensibility','compliance','compliance-equation','arterial-recoil','principles-relationships'],
['sa-node','internodal-pathways','av-node-delay','bundle-of-his','bundle-branches','purkinje','intrinsic-rates','ap-phases','ion-channels','absolute-refractory','relative-refractory','supernormal-period','supernormal-arrhythmia'],
['systole','diastole','valve-states','isovolumetric-contraction','s1','ejection','s2','isovolumetric-relaxation','rapid-filling','s3','atrial-contraction','s4','c-wave','v-wave','a-wave','jvp-ra-pressure'],
['co-equation','normal-co','cardiac-reserve','four-factors','preload','end-diastolic-volume','frank-starling','afterload','afterload-sources','contractility','heart-rate','diastolic-filling-time'],
['tunica-layers','vascular-smooth-muscle','adrenergic-receptors','arterial-high-pressure','arterioles-resistance','pulse-pressure-wave','venous-low-pressure','cvp','venous-capacitance','venous-valves','muscle-pump','artery-vein-comparison','microcirculation','lymphatics'],
['autoregulation','autoregulation-organs','autoregulation-range','hyperemia','nitric-oxide','endothelin','endothelial-vasoconstrictors','humoral-overview','norepinephrine','epinephrine','angiotensin-ii','histamine','serotonin','bradykinin','prostaglandins']];
const plain=x=>{assert(!/[<>]|&[a-zA-Z#]+;/.test(x),`Escaped text contains markup/entity: ${x}`);};
let cards=0,test=0,apply=0;const prompts=new Set(),ids=/^[a-z0-9-]+$/;
sections.forEach((s,i)=>{
  assert(ids.test(s.id));assert(s.title&&s.description);plain(s.title);plain(s.description);
  const tags=new Set(s.cards.flatMap(c=>c.coverage));
  for(const tag of required[i])assert(tags.has(tag),`Missing objective ${i+1}: ${tag}`);
  for(const mode of ['test','apply'])for(const q of s[mode]){
    assert(!prompts.has(q.prompt),`Duplicate prompt: ${q.prompt}`);prompts.add(q.prompt);
    assert.equal(q.choices.length,4,q.prompt);assert.equal(new Set(q.choices).size,4,q.prompt);
    assert(Number.isInteger(q.correct)&&q.correct>=0&&q.correct<4);
    assert(Number.isInteger(q.card)&&q.card>=0&&q.card<s.cards.length);
    assert(q.explanation);[q.prompt,q.explanation,...q.choices].forEach(plain);
  }
  s.cards.forEach((c,ci)=>{assert(c.title&&c.html);plain(c.title);assert(c.coverage.length);
    assert(s.test.some(q=>q.card===ci),`No test for ${s.id} card ${ci}`);assert(s.apply.some(q=>q.card===ci),`No apply for ${s.id} card ${ci}`);});
  cards+=s.cards.length;test+=s.test.length;apply+=s.apply.length;
});
console.log(`Cardiovascular Physiology: ${sections.length} ordered objectives; ${cards} Learn cards, ${test} Test questions, ${apply} Apply cases. ${required.flat().length} components checked; question links valid.`);
