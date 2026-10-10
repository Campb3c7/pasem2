const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),path=require('node:path');
const root=path.join(__dirname,'..'),context=vm.createContext({window:{}});
for(const m of fs.readFileSync(path.join(root,'index.html'),'utf8').matchAll(/<script src="(data\/[^" ]+)"><\/script>/g))vm.runInContext(fs.readFileSync(path.join(root,m[1]),'utf8'),context,{filename:m[1]});
const course=context.window.SEMESTER.courses.find(c=>c.id==='endocrine');
assert.equal(course.lectures.filter(l=>l.id==='pituitary-diseases').length,1);
const sections=course.lectures.find(l=>l.id==='pituitary-diseases').objectives;
const ids=['01-anatomy-axes','02-function-levels','03-mechanisms','04-hypopituitarism','05-growth-hormone-effects','06-gh-deficiency-manifestations','07-pediatric-gh-assessment','08-laron-syndrome','09-adult-gh-risk-pattern','10-gh-diagnostic-tests','11-gh-treatment','12-acth-deficiency','13-hypogonadotropic-hypogonadism','14-gonadotropin-diagnosis-treatment','15-tsh-deficiency','16-sellar-anatomy','17-adenoma-classification','18-adenoma-incidentaloma-workup','19-cell-types','20-prolactinoma-sex-differences','21-hyperprolactinemia-diagnosis-treatment','22-gigantism-acromegaly','23-acromegaly-complications','24-acromegaly-diagnosis-treatment','25-other-functioning-adenomas','26-craniopharyngioma-meningioma','27-pituitary-metastases','28-vasopressin-di-overview','29-di-causes-evaluation-treatment'];
assert.deepEqual(Array.from(sections,s=>s.id),ids);
const required=[
 ['anterior-portal','posterior-axons','hpa-crh-acth-cortisol','hpt-trh-tsh-thyroid','hpg-gnrh-lh-fsh','ghrh-gh-igf1','dopamine-inhibits-prl','adh-kidney','oxytocin'],
 ['hypofunction','hyperfunction','primary-target','secondary-pituitary','tertiary-hypothalamus'],
 ['deficiency-mass','deficiency-treatment','deficiency-infarct-trauma','deficiency-infection-infiltrative-genetic','excess-adenoma','resistance-receptor-signaling'],
 ['hypopit-definition','hypopit-pattern','hypopit-variable-presentation','hypopit-etiologies'],
 ['gh-linear-growth','gh-igf1','gh-bone-muscle','gh-lipolysis','gh-anti-insulin','gh-gluconeogenesis'],
 ['ghd-congenital-hypoglycemia-jaundice','ghd-child-growth-failure','ghd-child-delayed-bone-age','ghd-adult-body-composition','ghd-adult-bone'],
 ['child-growth-velocity','child-bone-age','igf1-nonspecific','random-gh-poor','child-gh-stimulation','child-mri','child-other-axes'],
 ['laron-gh-receptor','laron-high-gh-low-igf1','laron-phenotype','laron-igf1-treatment'],
 ['adult-ghd-risks','adult-ghd-no-general-screen','adult-low-igf1','adult-multiple-deficits','adult-stimulation-usual'],
 ['itt-mechanism','itt-contra-seizure-cardiovascular','glucagon-stimulation','serial-gh','test-threshold-context'],
 ['child-rhgh','laron-rhigf1','adult-individual-gh','gh-monitor-igf1','gh-adverse-fluid-joint-glucose'],
 ['acth-secondary-ai','acth-preserved-aldosterone','acth-no-hyperpigmentation','acth-am-cortisol','acth-cosyntropin','apoplexy-crisis','acth-glucocorticoid-replacement','acth-sick-day','cortisol-before-thyroid'],
 ['hh-definition','hh-labs','hh-congenital-puberty','hh-kallmann','hh-women','hh-men','hh-osteoporosis','hh-acquired-causes'],
 ['hh-male-workup','hh-female-workup','hh-other-axes','hh-mri-indications','hh-sex-steroid-treatment','hh-endometrial-protection','hh-fertility-gonadotropins-gnrh'],
 ['tsh-def-symptoms','central-hypothyroid-pattern','tsh-alone-inadequate','central-hypothyroid-mri-axes','central-lt4','central-cortisol-first','central-monitor-ft4'],
 ['sella-location','mass-hypopituitarism','optic-chiasm-bitemporal','cavernous-cn','mass-diplopia-facial'],
 ['micro-under10','macro-10plus','size-not-function','functioning-hypersecretion','nonfunctioning-mass','prolactinoma-common'],
 ['incidentaloma-mri','incidentaloma-hypersecretion','incidentaloma-hypopituitarism','incidentaloma-visual-field','incidentaloma-surgery','incidentaloma-followup'],
 ['cell-lactotroph','cell-somatotroph','cell-corticotroph','cell-thyrotroph','cell-gonadotroph'],
 ['prl-women-micro','prl-women-symptoms','prl-men-symptoms','prl-men-macro','prl-men-mass-effect'],
 ['prl-confirm','prl-secondary-causes','prl-medications','prl-macroprolactin','prl-hook-effect','prl-mri-indication','prl-observe-selected','prl-cabergoline','prl-surgery-indications'],
 ['gigantism-before-closure','gigantism-linear','acromegaly-after-closure','acromegaly-not-taller','gigantism-features','acromegaly-acral','acromegaly-facial-oral'],
 ['acro-htn-cardiomyopathy','acro-arrhythmia','acro-diabetes','acro-osa','acro-arthropathy-carpal','acro-colon-risk'],
 ['acro-igf1-screen','acro-ogtt-gh','acro-assay-threshold','acro-mri','acro-surgery-first','acro-somatostatin','acro-pegvisomant-cabergoline','acro-monitor'],
 ['corticotroph-cushing-disease','cushing-features','cushing-confirm-before-mri','gonadotroph-usually-nonfunctioning','gonadotroph-mass-effect','tshoma-central-hyperthyroid','tshoma-surgery'],
 ['cranio-rathke','cranio-suprasellar-cystic','cranio-child-symptoms','cranio-hypopit-di','cranio-treatment','meningioma-meninges','meningioma-slow','meningioma-nonfunctional'],
 ['metastasis-breast-lung','metastasis-posterior-stalk','metastasis-di','metastasis-mass-effects','metastasis-workup'],
 ['avp-osmolality','avp-thirst','avp-v2-water','central-adh-deficiency','nephrogenic-adh-resistance','di-symptoms','di-adipsic-hypernatremia','di-differential-dm-polydipsia'],
 ['cdi-causes','cdi-surgery-trauma','ndi-causes','primary-polydipsia-mimic','di-confirm-volume','di-serum-urine','di-water-deprivation-supervised','di-desmopressin-response','di-copeptin','di-mri-brightspot-limited','cdi-ddavp','cdi-hyponatremia-risk','ndi-low-solute-thiazide','ndi-amiloride-lithium']
];
let cards=0,test=0,apply=0;const prompts=new Set();
sections.forEach((s,i)=>{const tags=new Set(s.cards.flatMap(c=>c.coverage));for(const tag of required[i])assert(tags.has(tag),`Missing objective ${i+1}: ${tag}`);for(const mode of ['test','apply'])for(const q of s[mode]){assert(!prompts.has(q.prompt),`Duplicate prompt: ${q.prompt}`);prompts.add(q.prompt);assert.equal(q.choices.length,4);assert.equal(new Set(q.choices).size,4);assert(Number.isInteger(q.correct)&&q.correct>=0&&q.correct<4);assert(Number.isInteger(q.card)&&q.card>=0&&q.card<s.cards.length);assert(q.explanation);}s.cards.forEach((c,ci)=>{assert(c.title&&c.html);assert(s.test.some(q=>q.card===ci));assert(s.apply.some(q=>q.card===ci));});cards+=s.cards.length;test+=s.test.length;apply+=s.apply.length;});
assert(cards>=60,'Broad objectives must remain split into focused cards');
console.log(`Pituitary Diseases: 29 ordered objectives; ${cards} Learn cards, ${test} Test questions, ${apply} Apply cases. ${required.flat().length} components checked; question links valid.`);
