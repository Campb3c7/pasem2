const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),path=require('node:path');
const root=path.join(__dirname,'..'),file='data/cardio-anatomy.js',context=vm.createContext({window:{}});
vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),context,{filename:file});
const sections=context.window.CARDIO_ANATOMY_OBJECTIVES;
assert(Array.isArray(sections),'CARDIO_ANATOMY_OBJECTIVES missing');
assert.deepEqual(Array.from(sections,s=>s.id),['01-thoracic-cage','02-sternum-landmarks','03-thorax-surface-lines','04-mediastinum','05-pericardium','06-heart-external-surface','07-heart-structure','08-valve-projection-auscultation','09-thoracic-vessels','10-abdominal-vessels','11-extremity-vessels']);
const required=[
['cage-components','vertebral-articulation','costal-neurovascular','ribs-true','ribs-false','ribs-floating','sternum-description','sternum-parts'],
['manubrium-features','jugular-notch','manubrium-articulations','sternal-angle','sternal-angle-rib2','sternal-angle-t4-t5','body-features','body-t5-t9','costal-cartilages','xiphoid-junction','xiphoid-heart-liver','xiphoid-rib7','xiphoid-t10'],
['anterior-median-line','midclavicular-line','anterior-landmarks','anterior-axillary-line','midaxillary-line','posterior-axillary-line','posterior-median-line','scapular-line','c7-spinous'],
['thoracic-spaces','transverse-thoracic-plane','mediastinal-divisions','superior-boundaries','superior-contents','anterior-contents','middle-contents','middle-largest','posterior-contents'],
['fibrous-layer','fibrous-attachments','serous-layer','parietal-layer','visceral-epicardium','pericardial-fluid','transverse-sinus','oblique-sinus'],
['heart-position','apex','base','right-border','left-border','inferior-border','superior-border','coronary-sulcus','interventricular-sulci'],
['wall-layers','right-atrium','fossa-ovalis','right-ventricle','conus-arteriosus','moderator-band','membranous-septum-vsd','left-atrium','left-ventricle','blood-flow','fibrous-skeleton','fibrous-insulator','valves-av','valves-semilunar','valve-s1','valve-s2','chordae-papillary','semilunar-function','sa-node','av-node','av-bundle','bundle-branches','purkinje','rca','rca-branches','lca','lca-branches','lca-territory','coronary-sinus','great-cardiac-vein','middle-cardiac-vein','small-cardiac-vein','lv-posterior-vein','anterior-smallest-veins'],
['projection-principle','aortic-projection','aortic-auscultation','pulmonic-projection','pulmonic-auscultation','tricuspid-projection','tricuspid-auscultation','mitral-projection','mitral-auscultation'],
['vessel-layers','coronary-first-branches','aortic-arch','brachiocephalic-trunk','left-common-carotid','left-subclavian','thoracic-aorta-branches','svc-formation','svc-drainage','svc-location','azygos-system'],
['celiac-trunk','sma','renal-suprarenal','gonadal-arteries','ima','common-iliac-arteries','superior-epigastric','musculophrenic','lower-posterior-intercostals','inferior-epigastric-circumflex-iliac','epigastric-anastomosis','ivc-common-iliacs','ascending-lumbar','renal-gonadal-veins'],
['le-gluteal','le-thigh','le-leg','le-foot','le-arterial-path','popliteal-artery','deep-artery-thigh','great-saphenous','small-saphenous','superficial-vs-deep-le','deep-veins-le','ue-arterial-path','palmar-arches','subclavian-branches','axillary-branches','brachial-branches','cephalic-vein','basilic-vein','median-cubital','hand-superficial-veins','perforating-veins','deep-veins-ue-arm','deep-veins-ue-forearm','deep-veins-ue-hand']];
// Escaped (plain-text) fields must not contain HTML tags or entities.
const noMarkup=(v,where)=>{assert.equal(typeof v,'string',`${where} not a string`);assert(!/<\/?[a-z][^>]*>|&[a-z]+;|&#\d+;/i.test(v),`Markup/entity in escaped field ${where}: ${v}`);};
let cards=0,test=0,apply=0;const prompts=new Set(),ids=new Set();
sections.forEach((s,i)=>{
  assert(/^[a-z0-9-]+$/.test(s.id)&&!ids.has(s.id));ids.add(s.id);
  noMarkup(s.title,`${s.id} title`);noMarkup(s.description,`${s.id} description`);
  assert(s.title.startsWith(`${i+1}. `),`Title numbering ${s.id}`);assert(s.description.startsWith(`Objective ${i+1}. Slides`),`Description ${s.id}`);
  const tags=new Set(s.cards.flatMap(c=>c.coverage));
  for(const tag of required[i])assert(tags.has(tag),`Missing objective ${i+1}: ${tag}`);
  for(const mode of ['test','apply'])for(const q of s[mode]){
    assert(!prompts.has(q.prompt),`Duplicate prompt: ${q.prompt}`);prompts.add(q.prompt);
    noMarkup(q.prompt,'prompt');noMarkup(q.explanation,'explanation');q.choices.forEach(c=>noMarkup(c,'choice'));
    assert.equal(q.choices.length,4,`4 choices: ${q.prompt}`);assert.equal(new Set(q.choices).size,4,`Distinct choices: ${q.prompt}`);
    assert(Number.isInteger(q.correct)&&q.correct>=0&&q.correct<4);
    assert(Number.isInteger(q.card)&&q.card>=0&&q.card<s.cards.length,`Card link: ${q.prompt}`);
    assert(q.explanation&&q.explanation.length>5);
  }
  s.cards.forEach((c,ci)=>{assert(c.title&&c.html&&c.coverage.length);noMarkup(c.title,'card title');
    assert(s.test.some(q=>q.card===ci),`No test for ${s.id} card ${ci}`);assert(s.apply.some(q=>q.card===ci),`No apply for ${s.id} card ${ci}`);});
  cards+=s.cards.length;test+=s.test.length;apply+=s.apply.length;
});
console.log(`Cardio Anatomy: ${sections.length} ordered objectives; ${cards} Learn cards, ${test} Test questions, ${apply} Apply cases. ${required.flat().length} components checked; question links valid; no markup in escaped fields.`);
