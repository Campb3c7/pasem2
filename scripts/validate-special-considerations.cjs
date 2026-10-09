const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),path=require('node:path');
const root=path.join(__dirname,'..'),context=vm.createContext({window:{}});
for(const m of fs.readFileSync(path.join(root,'index.html'),'utf8').matchAll(/<script src="(data\/[^" ]+)"><\/script>/g)) vm.runInContext(fs.readFileSync(path.join(root,m[1]),'utf8'),context,{filename:m[1]});
const course=context.window.SEMESTER.courses.find(c=>c.id==='endocrine');
assert(course.lectures.some(l=>l.id==='diabetes-special-considerations'),'Special Considerations must remain in the catalog');
const sections=course.lectures.find(l=>l.id==='diabetes-special-considerations').objectives;
assert.deepEqual(Array.from(sections,s=>s.id),['01-morning-patterns','02-morning-management','03-perioperative-care','04-pregnancy','05-weight-management']);
const needed=[
 ['overnight-review','dawn-no-low','insufficient-dose','insufficient-duration','insufficient-pump','missed-dose','injection-site','pump-delivery','evening-illness-medications'],
 ['manage-dawn','manage-monitor-response','manage-insufficient','manage-delivery-first','manage-preceding-low','manage-other-contributors'],
 ['surgery-risk-balance','surgery-glucose-goal','surgery-a1c-goal','preop-oral-hold','preop-sglt2-hold','preop-glp-individualize','preop-nph50','preop-basal75to80','t1-basal-continues','preop-pump-protocol','intraop-monitor','npo-monitor-2to4','intraop-protocol','postop-monitor-basal','postop-intake','postop-restart-safety','postop-transition'],
 ['pregnancy-resistance','gdm24to28','early-preexisting-screen','one-step75','two-step50','two-step100','preconception65','preconception-complication-review','preconception-med-safety','early-congenital','late-macrosomia-lga','maternal-obstetric','stillbirth','neonatal-hypoglycemia','delivery-diet-gdm','delivery-med-gdm','delivery-preexisting','delivery-individualize'],
 ['weight-lifestyle','weight5to7','weight-over10-remission','weight-drug-options','weight-semaglutide-tirzepatide','weight-individualize','surgery-bmi30','surgery-bmi275','surgery-benefits','surgery-longterm']
];
let cards=0,test=0,apply=0;
sections.forEach((s,i)=>{
 const tags=new Set(s.cards.flatMap(c=>c.coverage));for(const tag of needed[i]) assert(tags.has(tag),`Missing objective component: ${tag}`);
 for(const mode of ['test','apply']) for(const q of s[mode]){assert.equal(q.choices.length,4);assert.equal(new Set(q.choices).size,4);assert(q.correct>=0&&q.correct<4);assert(Number.isInteger(q.card)&&q.card>=0&&q.card<s.cards.length);assert(q.explanation);}
 s.cards.forEach((c,ci)=>{assert(c.title&&c.html);assert(s.test.some(q=>q.card===ci));assert(s.apply.some(q=>q.card===ci));});
 cards+=s.cards.length;test+=s.test.length;apply+=s.apply.length;
});
console.log(`Special Considerations: five objectives in order; ${cards} Learn cards, ${test} Test questions, ${apply} Apply cases. ${needed.flat().length} components covered; question links valid.`);
