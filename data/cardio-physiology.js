/* Palmer, Cardiovascular Physiology. Eight supplied objectives in order. Picture-only slides (4, 15, 20, 27, 39, 51) were rendered and their content folded into the matching cards. */
(function(){
"use strict";
/* Prompts, choices, explanations, and titles are rendered as escaped text, so decode the few entities used there. */
var ENT={"&Delta;":"\u0394","&rarr;":"\u2192","&ndash;":"\u2013","&rsquo;":"\u2019","&alpha;":"\u03b1","&beta;":"\u03b2"};
function d(x){return String(x).replace(/&[a-zA-Z]+;/g,function(m){return ENT[m]||m;});}
function q(p,a,w,e){return {prompt:d(p),choices:[a].concat(w).map(d),correct:0,explanation:d(e)};}
function c(t,h,v,tests,applies){return {title:t,html:h,coverage:v,test:tests,apply:applies};}
function s(id,t,desc,units){var r={id:id,title:d(t),description:d(desc),cards:[],test:[],apply:[]};units.forEach(function(x,i){r.cards.push({title:d(x.title),html:x.html,coverage:x.coverage});['test','apply'].forEach(function(m){x[m].forEach(function(z){z.card=i;r[m].push(z);});});});return r;}
function hy(x){return '<div class="box-hy"><span class="lbl">High yield</span>'+x+'</div>';}
function mn(x){return '<div class="box-mnemonic"><span class="lbl">Mnemonic</span>'+x+'</div>';}
function tbl(head,rows){return '<table class="learn-table"><tr>'+head.map(function(h){return '<th>'+h+'</th>';}).join('')+'</tr>'+rows.map(function(r){return '<tr>'+r.map(function(d){return '<td>'+d+'</td>';}).join('')+'</tr>';}).join('')+'</table>';}

window.CARDIO_PHYSIOLOGY_OBJECTIVES=[

s('01-circulation-organization','1. Organization of the circulatory system (systemic & pulmonic)','Objective 1. Slides 2&ndash;5, 13&ndash;14.',[
c('Two circuits: pulmonary and systemic',
tbl(['','Pulmonary circulation','Systemic circulation'],[
['Components','<strong>Right side of the heart</strong> + pulmonary arteries, capillaries, and veins','<strong>Left side of the heart</strong> + peripheral vessels + <strong>lymphatic system</strong>'],
['Size','<strong>Smaller</strong> of the two','<strong>Larger</strong> of the two'],
['Pressure','<strong>Lower</strong>','<strong>Higher</strong>']])+
'<p>The circuits run in series (slide 4 diagram): right heart &rarr; lungs &rarr; left heart &rarr; body (head/upper limbs, GI tract, kidneys, trunk/lower limbs) &rarr; back to the right heart.</p>'+
hy('Right heart = pulmonary (low pressure). Left heart = systemic (high pressure).'),
['pulmonary-components','systemic-components','circuit-size-pressure'],
[q('Which structures make up the pulmonary circulation?','Right side of the heart and the pulmonary arteries, capillaries, and veins',['Left side of the heart and the peripheral vessels','Left side of the heart and the lymphatic system','Right side of the heart and the coronary arteries'],'Pulmonary circulation = right heart + pulmonary arteries, capillaries, and veins.'),
q('Compared with the pulmonary circulation, the systemic circulation is:','Larger and at higher pressure',['Smaller and at lower pressure','Larger and at lower pressure','Smaller and at higher pressure'],'Systemic is the larger circuit with higher pressures; pulmonary is smaller with lower pressures.'),
q('Besides the left heart and peripheral blood vessels, which system does the lecture include in the systemic circulation?','Lymphatic system',['Pulmonary capillaries','Bronchial tree','Pulmonary veins'],'Systemic circulation = left heart + peripheral vessels + lymphatic system.')],
[q('A student traces a red blood cell leaving the right ventricle. Which circulation is it entering?','Pulmonary circulation',['Systemic circulation','Coronary circulation only','Lymphatic circulation'],'The right ventricle pumps into the pulmonary circuit (to the lungs).'),
q('A preceptor asks why left-sided chambers must generate higher pressures than right-sided chambers. Best answer?','The left heart drives the larger, higher-pressure systemic circuit',['The left heart drives the smaller pulmonary circuit','The left heart only receives blood and never pumps','The right heart supplies the whole body'],'The left heart pumps into the larger, higher-pressure systemic circulation.')]),

c('Central vs peripheral circulation',
'<p><strong>Central circulation</strong> = blood in the <strong>heart and pulmonary circulation</strong>.</p><p><strong>Peripheral circulation</strong> = blood <strong>outside</strong> the central circulation, mainly in peripheral blood vessels and lymphatic vessels.</p>'+
hy('Pulmonary vessels are part of the <strong>central</strong> circulation, not the peripheral.'),
['central-circulation','peripheral-circulation'],
[q('Blood located in the heart and pulmonary circulation is called the:','Central circulation',['Peripheral circulation','Systemic circulation','Microcirculation'],'Central circulation = heart + pulmonary circulation.'),
q('Blood in peripheral blood vessels and lymphatic vessels belongs to which division?','Peripheral circulation',['Central circulation','Pulmonary circulation','Coronary circulation'],'Everything outside the heart and pulmonary circuit is peripheral circulation.')],
[q('During a lecture review, a classmate says blood in the pulmonary capillaries is part of the peripheral circulation. How do you correct them?','It is central circulation, because the pulmonary circuit is grouped with the heart',['It is correct; all capillaries are peripheral','It is systemic circulation','It is lymphatic circulation'],'The lecture defines central circulation as blood in the heart and pulmonary circulation.')]),

c('Right heart, left heart, atria, and ventricles',
tbl(['Chamber','Role'],[
['Right atrium','Receives blood from the body (and heart); pumps to the right ventricle'],
['Right ventricle','Pumps blood to the lungs for gas exchange'],
['Left atrium','Receives blood from the pulmonary circuit; pumps to the left ventricle'],
['Left ventricle','Pumps blood to the rest of the body']])+
'<p><strong>Atria</strong> = upper <strong>receiving</strong> chambers that assist ventricular filling. <strong>Ventricles</strong> = lower <strong>pumping</strong> chambers.</p>',
['right-heart','left-heart','atria-role','ventricles-role'],
[q('What is the main role of the atria?','Upper receiving chambers that assist filling of the ventricles',['Lower pumping chambers that eject to the lungs and body','Valves that prevent backflow into the veins','Pacemaker tissue that sets the heart rate'],'Atria receive blood and help fill the ventricles.'),
q('The left atrium receives blood from:','The pulmonary circuit',['The systemic veins','The right ventricle','The aorta'],'Left atrium receives oxygenated blood returning from the lungs.'),
q('Which chamber pumps blood to the lungs?','Right ventricle',['Left ventricle','Right atrium','Left atrium'],'The right ventricle pumps into the pulmonary circuit.')],
[q('A diagram shows a chamber receiving blood returning from the body and passing it to the chamber below. Which chamber is it?','Right atrium',['Left atrium','Right ventricle','Left ventricle'],'The right atrium receives systemic venous return and pumps to the right ventricle.')]),

c('Heart wall and pericardium',
tbl(['Layer','Key features'],[
['Pericardium','Sac around the heart; protects from rubbing on external structures; anchors heart and great vessels to diaphragm and mediastinum. <strong>Fibrous</strong> + <strong>serous</strong> layers; fluid between parietal and visceral layers lubricates'],
['Epicardium','Membrane closely affixed to the heart (visceral layer of serous pericardium)'],
['Myocardium','Muscle layer; <strong>thickest in the left ventricle</strong> for more contraction power'],
['Endocardium','Thin cell layer lining the chambers, continuous with vessel endothelium; <strong>reduces friction and turbulence</strong>']]),
['heart-wall-layers','pericardium','myocardium-lv-thickest','endocardium'],
[q('Which layer of the heart wall is thickest in the left ventricle?','Myocardium',['Endocardium','Epicardium','Fibrous pericardium'],'The myocardium is the muscle layer, thickest in the LV for contraction power.'),
q('Which layer lines the heart chambers and is continuous with the endothelium of blood vessels?','Endocardium',['Epicardium','Myocardium','Parietal pericardium'],'The endocardium lines the chambers and reduces friction and turbulence.'),
q('What fills the narrow space between the parietal and visceral pericardium?','Lubricating fluid that lets the heart move without friction',['Fat that insulates the heart','Blood draining from the coronary veins','Lymph returning to the thoracic duct'],'Pericardial fluid lubricates as the heart moves.')],
[q('A student asks why the left ventricular wall looks so much thicker than the right on a cross-section. Best explanation?','The left ventricular myocardium is thickest to generate more contraction power for the systemic circuit',['The left ventricle has a thicker endocardium to reduce turbulence','The pericardium is double-layered only over the left ventricle','The left ventricle stores blood between beats'],'Myocardium is thickest in the LV for greater contraction power.')]),

c('Cardiac muscle contracts as a unit',
'<ul><li>Cardiac muscle combines properties of skeletal and smooth muscle; cells are <strong>striated</strong> (thick myosin, thin actin).</li><li><strong>Intercalated disks</strong> join cells so depolarization spreads faster.</li><li>Cells contract as a unit: atria squeeze <strong>superior &rarr; inferior</strong>; ventricles squeeze <strong>inferior &rarr; superior</strong> (apex toward base), moving blood efficiently toward the outflow.</li></ul>',
['intercalated-disks','contraction-direction'],
[q('Which structures join cardiac muscle cells so depolarization spreads faster?','Intercalated disks',['Purkinje fibers','Chordae tendineae','Sarcomeres'],'Intercalated disks connect cells so they depolarize and contract as a unit.'),
q('In which direction do the ventricles squeeze during contraction?','Inferior to superior (apex toward base)',['Superior to inferior (base toward apex)','Right to left','Outer wall to septum only'],'Ventricles contract from apex toward base, pushing blood toward the outflow valves.')],
[q('A tutor asks why ventricular contraction starting at the apex is efficient. Best answer?','It pushes blood upward toward the semilunar valves at the base',['It pushes blood back into the atria','It lets the atria fill during systole','It slows conduction through the AV node'],'Apex-to-base contraction moves blood toward the outflow tracts.')])
]),

s('02-circulation-functions','2. Functions of the systemic & pulmonic circulations','Objective 2. Slides 2, 5, 42, 51.',[
c('Pulmonary circulation function',
'<p>The right heart pumps blood <strong>through gas exchange</strong> in the lung vessels.</p><p>Its <strong>lower pressures let blood move slowly through the lungs</strong>, which <strong>improves gas exchange</strong>.</p>'+
hy('Why low pressure in the lungs? Slower transit = more time for gas exchange.'),
['pulmonary-function','pulmonary-low-pressure-purpose'],
[q('What is the main function of the pulmonary circulation?','Gas exchange in the lungs',['Delivering nutrients to peripheral tissues','Returning lymph to the venous system','Filtering bacteria in lymph nodes'],'Right heart pumps blood through the lungs for gas exchange.'),
q('Why are pressures low in the pulmonary circulation?','Low pressure lets blood move slowly through the lungs, improving gas exchange',['Low pressure increases afterload on the left ventricle','Low pressure prevents lymph formation','Low pressure allows the lungs to store most of the blood volume'],'Slow movement through the lungs improves gas exchange.')],
[q('A student asks why the right ventricle does not need to generate systemic-level pressure. Best answer?','The pulmonary circuit is a smaller, low-pressure system where slow flow improves gas exchange',['The right ventricle pumps directly to the brain','Pulmonary vessels have the highest resistance in the body','The right ventricle does not eject blood'],'Pulmonary circulation is smaller and low pressure by design.')]),

c('Systemic circulation function',
'<p><strong>Function:</strong> deliver <strong>oxygen and nutrients</strong> to tissues and return <strong>carbon dioxide and wastes</strong>.</p><p><strong>Sequence:</strong> arteries &rarr; arterioles &rarr; capillaries &rarr; venules &rarr; veins.</p><p>These are <strong>dynamic</strong> vessels that constrict and relax to adjust BP and flow to meet the varying demands of tissues and organs.</p>',
['systemic-function','systemic-vessel-sequence','systemic-dynamic'],
[q('What is the function of the systemic circulation?','Deliver oxygen and nutrients to tissues and return carbon dioxide and wastes',['Perform gas exchange in the alveoli','Store blood for the pulmonary circuit','Generate the cardiac impulse'],'Systemic circulation supplies tissues and removes CO2 and wastes.'),
q('Which sequence correctly lists systemic vessels in the direction of blood flow?','Arteries, arterioles, capillaries, venules, veins',['Arteries, venules, capillaries, arterioles, veins','Arterioles, arteries, capillaries, veins, venules','Veins, venules, capillaries, arterioles, arteries'],'Blood flows arteries &rarr; arterioles &rarr; capillaries &rarr; venules &rarr; veins.')],
[q('During exercise, blood flow to working skeletal muscle rises. Which feature of the systemic circulation makes this possible?','Its vessels constrict and relax to match flow to tissue demand',['Its vessels are rigid tubes with fixed flow','Its pressures are lower than the pulmonary circuit','It has no smooth muscle in its vessel walls'],'Systemic vessels are dynamic and adjust BP and flow to meet tissue demands.')]),

c('Oxygenated vs deoxygenated: the pulmonary exception',
'<p>General rule (slide 51): <strong>arteries</strong> carry oxygenated blood <strong>away</strong> from the heart; <strong>veins</strong> carry deoxygenated blood <strong>back</strong> to the heart.</p><p><strong>Exceptions:</strong></p><ul><li><strong>Pulmonary artery</strong> carries <strong>deoxygenated</strong> blood from the heart to the lungs.</li><li><strong>Pulmonary veins</strong> carry <strong>oxygenated</strong> blood from the lungs to the heart.</li></ul>'+
hy('Arteries are defined by direction (<strong>away</strong> from the heart), not by oxygen content.'),
['pulmonary-vessel-exception','artery-vein-direction'],
[q('Which vessel carries deoxygenated blood away from the heart?','Pulmonary artery',['Pulmonary vein','Aorta','Superior vena cava'],'The pulmonary artery is the exception: deoxygenated blood to the lungs.'),
q('Which vessels carry oxygenated blood back to the heart?','Pulmonary veins',['Pulmonary arteries','Venae cavae','Coronary sinus'],'Pulmonary veins return oxygenated blood from the lungs to the left atrium.')],
[q('A classmate defines arteries as vessels that carry oxygenated blood. Which vessel disproves this definition?','Pulmonary artery',['Aorta','Femoral artery','Carotid artery'],'Arteries carry blood away from the heart; the pulmonary artery carries deoxygenated blood.')])
]),

s('03-blood-flow-principles','3. Principles of blood flow and how they relate','Objective 3. Slides 6&ndash;12.',[
c('Pressure, resistance, and flow',
'<ul><li><strong>Flow</strong> = a volume measurement, determined by the <strong>pressure difference</strong> between the two ends of a vessel.</li><li><strong>Resistance</strong> = opposition to flow from friction between blood components and the vessel wall; <strong>blood viscosity</strong> is part of resistance. All vessels combined = <strong>peripheral (systemic) vascular resistance</strong>.</li><li><strong>Pressure</strong> = force from behind and against vessel walls generated by blood volume.</li></ul>'+
hy('<strong>Flow = &Delta;Pressure / Resistance.</strong> Raise resistance and flow falls unless pressure rises.'),
['flow','resistance','pressure','flow-equation','svr'],
[q('Which equation relates blood flow, pressure, and resistance?','Flow = change in pressure / resistance',['Flow = resistance / change in pressure','Flow = pressure x resistance','Flow = change in volume / change in pressure'],'Flow = &Delta;P / R.'),
q('The combined resistance of all systemic vessels is called:','Systemic (peripheral) vascular resistance',['Compliance','Afterload reserve','Critical closing pressure'],'Total resistance of all vessels = peripheral or systemic vascular resistance.'),
q('Resistance to blood flow is caused mainly by:','Friction between blood components and the vessel wall, including viscosity',['Elastic recoil of the arteries','The pressure gradient across the vessel','Opening of venous valves'],'Resistance = friction; viscosity contributes.')],
[q('Blood viscosity rises markedly. If the pressure difference across a vessel stays the same, what happens to flow?','Flow decreases because resistance increases',['Flow increases because resistance decreases','Flow is unchanged because only pressure determines flow','Flow increases because compliance increases'],'Viscosity is part of resistance; with &Delta;P fixed, higher R lowers flow.')]),

c('Laminar vs turbulent flow',
tbl(['Laminar','Turbulent'],[
['Smooth, streamlined','Movement in all directions'],
['Needs <strong>less</strong> pressure to move forward','Needs <strong>greater</strong> pressure to move forward']])+
'<p>Causes of turbulence: <strong>atherosclerotic plaque</strong> disrupting the smooth lining, and <strong>higher viscosity</strong>.</p><p><strong>Heart murmurs</strong> = the sound of turbulent flow through a diseased valve.</p>',
['laminar','turbulent','turbulence-causes','murmur'],
[q('Which type of flow requires greater pressure to move blood forward?','Turbulent flow',['Laminar flow','Streamlined flow','Capillary flow'],'Turbulent flow moves in all directions and needs more pressure.'),
q('What is a heart murmur, according to the lecture?','The sound of turbulent blood flow through a diseased valve',['The sound of laminar flow through a normal valve','The closing of the AV valves','Vibration of the pericardium'],'Murmurs come from turbulent flow through a diseased valve.')],
[q('A patient has an atherosclerotic plaque narrowing an artery. How does the plaque affect flow?','It disrupts the smooth lining, causing turbulence that requires more pressure to move blood forward',['It creates laminar flow that lowers pressure','It increases compliance of the vessel','It eliminates resistance at that segment'],'Plaque creates turbulent flow and raises the pressure needed.'),
q('On auscultation you hear a whooshing sound over a stiff, diseased aortic valve. What physical principle explains the sound?','Turbulent flow',['Laminar flow','Critical closing pressure','Arterial compliance'],'Murmurs are the sound of turbulence.')]),

c('Wall tension and critical closing pressure',
'<p><strong>Wall tension</strong> = force in the vessel wall opposing the distending pressure inside.</p><p>Pressure inside the vessel <strong>must exceed</strong> wall tension or the vessel collapses; that threshold is the <strong>critical closing pressure</strong>.</p>'+
hy('<strong>Circulatory shock:</strong> pressure in small vessels drops to critical closing pressure, vessels collapse, and tissue perfusion falls.'),
['wall-tension','critical-closing-pressure','shock-perfusion'],
[q('The force in the vessel wall that opposes the distending pressure inside is:','Wall tension',['Compliance','Distensibility','Viscosity'],'Wall tension opposes the internal distending pressure.'),
q('The pressure below which a small vessel collapses is called:','Critical closing pressure',['Central venous pressure','Pulse pressure','Threshold potential'],'If intravascular pressure falls below wall tension, the vessel collapses: critical closing pressure.')],
[q('A hypotensive patient in circulatory shock has cool, poorly perfused extremities. Which mechanism from the lecture explains reduced tissue perfusion?','Small-vessel pressure falls to critical closing pressure so vessels collapse',['Turbulent flow increases capillary perfusion','Compliance of the veins drops to zero','Laminar flow requires greater pressure'],'In shock, pressure drops to critical closing pressure and perfusion lessens.')]),

c('Distensibility and compliance',
'<ul><li><strong>Distensibility</strong> = ability of a vessel to <strong>stretch</strong> and accommodate more blood volume.</li><li><strong>Compliance</strong> = total blood that can be <strong>stored</strong> in a portion of the circulation per mmHg rise in pressure.</li></ul>'+
hy('<strong>Compliance = &Delta;Volume / &Delta;Pressure.</strong> Higher compliance = stretches more easily.'),
['distensibility','compliance','compliance-equation'],
[q('Which formula defines compliance?','Change in volume / change in pressure',['Change in pressure / resistance','Stroke volume x heart rate','Change in pressure / change in volume'],'Compliance = &Delta;V / &Delta;P.'),
q('The ability of a vessel to be stretched and accommodate more blood is:','Distensibility',['Resistance','Wall tension','Contractility'],'Distensibility = ability to stretch and accommodate increased volume.')],
[q('Vessel A holds 10 mL more blood per 1 mmHg rise in pressure; vessel B holds 2 mL more. Which statement is correct?','Vessel A has higher compliance and stretches more easily',['Vessel B has higher compliance','Both have equal compliance','Vessel A has higher resistance'],'More volume stored per mmHg = higher compliance.')]),

c('Arterial distension and recoil across the cycle',
'<ul><li>During systole, only about <strong>1/3 of stroke volume</strong> leaves the arteries; the rest stays and <strong>distends</strong> them, raising pressure.</li><li>When contraction ends, the stretched arterial walls <strong>recoil</strong> and keep driving blood into the arterioles <strong>during diastole</strong>.</li><li>Arterial volume and pressure fall slowly, but the next contraction comes first, so pressure <strong>never falls to 0</strong>.</li></ul>',
['arterial-recoil','continuous-flow'],
[q('About how much of the stroke volume leaves the arteries during systole?','About one-third',['All of it','About two-thirds','None of it'],'Only ~1/3 leaves during systole; the rest distends the arteries.'),
q('What keeps blood moving into the arterioles during diastole?','Recoil of the stretched arterial walls',['Atrial contraction','Venous valves','Closure of the AV valves'],'Elastic recoil drives blood forward during diastole.')],
[q('A student asks why diastolic arterial pressure does not drop to zero between beats. Best answer?','Distended arteries recoil and the next contraction occurs before pressure can fall to 0',['The semilunar valves stay open during diastole','The atria eject directly into the aorta','Capillaries pump blood back into the arteries'],'Recoil sustains pressure; the next systole arrives first.')]),

c('How the principles relate',
'<ul><li><strong>Pressure gradient drives flow; resistance opposes it</strong> (Flow = &Delta;P/R).</li><li><strong>Turbulence and viscosity</strong> add resistance, so more pressure is needed to keep flow constant.</li><li><strong>Pressure vs wall tension</strong> keeps vessels open; too little pressure reaches critical closing pressure.</li><li><strong>Compliance</strong> lets arteries store volume in systole and recoil in diastole, smoothing flow.</li></ul>'+
mn('<strong>"Push, Rub, Stretch":</strong> pressure Pushes, resistance Rubs (friction/turbulence), compliance Stretches to store and return volume.'),
['principles-relationships'],
[q('If resistance rises and flow must stay the same, what must happen?','The pressure difference must increase',['The pressure difference must decrease','Compliance must fall to zero','Wall tension must exceed intravascular pressure'],'Flow = &Delta;P/R; to keep flow constant against higher R, &Delta;P must rise.')],
[q('A patient develops widespread atherosclerosis and turbulent arterial flow. Which compensatory change keeps tissue flow adequate?','Higher driving pressure (blood pressure)',['Lower driving pressure','Reduced wall tension to below closing pressure','Conversion to laminar flow by viscosity increase'],'Turbulence and narrowing raise resistance, so higher pressure is needed to move blood forward.')])
]),

s('04-conduction-refractory','4. Cardiac conduction system, refractory periods, and supernormal period','Objective 4. Slides 16&ndash;27.',[
c('SA node: the normal pacemaker',
'<ul><li>The <strong>SA node</strong> normally sets the pace; its depolarization triggers depolarization of all other cardiac cells.</li><li>Its discharge rate <strong>= heart rate</strong>: <strong>60&ndash;100/min</strong>, faster than other myocardial cells.</li><li>The impulse travels through <strong>internodal pathways</strong> in both atria to the <strong>AV node</strong>, depolarizing (and contracting) the atrial myocardium on the way.</li></ul>',
['sa-node','internodal-pathways'],
[q('What is the intrinsic firing rate of the SA node?','60 to 100 per minute',['40 to 60 per minute','15 to 40 per minute','100 to 150 per minute'],'SA node: 60&ndash;100/min.'),
q('How does the SA node impulse reach the AV node?','Through the internodal pathways in the atria',['Through the bundle of His','Through the Purkinje fibers','Through the coronary sinus'],'Internodal pathways carry the impulse through both atria to the AV node.')],
[q('A healthy adult at rest has a regular heart rate of 72. Which structure is most likely setting this rate?','SA node',['AV node','Purkinje fibers','Bundle of His'],'A normal rate of 60&ndash;100 reflects SA node pacing.')]),

c('AV node and AV junction: the built-in delay',
'<p>At the AV node, atrial fibers connect with junctional fibers; together with the surrounding zone this is the <strong>AV junctional area</strong>.</p><p>Depolarization is <strong>very slow</strong> through these fibers, which <strong>delays ventricular depolarization</strong>.</p>'+
hy('Purpose of the AV delay: lets the atria <strong>finish depolarizing and contracting</strong> before the ventricles fire.'),
['av-node-delay','av-junction'],
[q('What is the purpose of slow conduction through the AV junction?','It delays ventricular depolarization so the atria can finish contracting',['It speeds ventricular depolarization','It sets the resting heart rate','It prevents the SA node from firing'],'The AV delay lets atria complete depolarization and contraction.')],
[q('If impulses passed from atria to ventricles with no delay, which problem would the lecture predict?','Ventricles would contract before atrial contraction finished filling them',['The SA node would stop firing','Purkinje fibers would fire at 15 to 40/min','The semilunar valves would not close'],'The AV delay normally allows the atria to finish contracting first.')]),

c('His bundle, bundle branches, Purkinje fibers',
'<p>Path after the AV node: <strong>AV bundle (bundle of His) &rarr; right and left bundle branches</strong> (in the interventricular septum) <strong>&rarr; Purkinje fibers</strong> in the ventricular walls.</p><p>Ventricular depolarization then begins, and contraction progresses <strong>from apex toward base</strong>.</p>'+
mn('<strong>"SA Is Always Busy, Bringing Pulses":</strong> SA node &rarr; Internodal &rarr; AV node &rarr; Bundle of His &rarr; Bundle branches &rarr; Purkinje.'),
['bundle-of-his','bundle-branches','purkinje','conduction-sequence'],
[q('Which sequence is correct after the AV node?','Bundle of His, bundle branches, Purkinje fibers',['Purkinje fibers, bundle branches, bundle of His','Bundle branches, bundle of His, internodal pathways','Internodal pathways, Purkinje fibers, bundle of His'],'AV node &rarr; His &rarr; R/L bundle branches &rarr; Purkinje.'),
q('Where do the right and left bundle branches run?','In the ventricular septal walls',['Along the atrial roof','In the coronary sinus','Within the pericardium'],'The bundle branches travel down the septum to the Purkinje fibers.')],
[q('An ECG shows a conduction block located just after the AV bundle in the septum on one side. Which structure is involved?','A bundle branch',['SA node','Internodal pathway','Pericardium'],'The bundle branches arise from the bundle of His in the septum; disruption anywhere shows on ECG.')]),

c('Backup pacemakers and their rates',
tbl(['Pacemaker','Intrinsic rate (per min)','When it takes over'],[
['SA node','60&ndash;100','Normal pacemaker'],
['AV node','40&ndash;60','SA node fails to fire'],
['Purkinje fibers','15&ndash;40','AV node fails to fire']])+
'<p>Disruption anywhere along the conducting system can be seen on <strong>ECG tracings</strong>.</p>'+
hy('Rates fall as you move down the system: 60&ndash;100 &rarr; 40&ndash;60 &rarr; 15&ndash;40.'),
['intrinsic-rates','escape-pacemakers','ecg-disruption'],
[q('If the SA node does not fire, at what rate can the AV node pace the heart?','40 to 60 per minute',['60 to 100 per minute','15 to 40 per minute','100 to 120 per minute'],'AV node intrinsic rate: 40&ndash;60/min.'),
q('What is the intrinsic rate of the Purkinje fibers?','15 to 40 per minute',['40 to 60 per minute','60 to 100 per minute','5 to 10 per minute'],'Purkinje fibers: 15&ndash;40/min.')],
[q('A patient has a regular pulse of 48 and an ECG showing the SA node is not firing. Which pacemaker is most likely driving the rhythm?','AV node',['SA node','Purkinje fibers','Internodal pathways'],'48/min falls in the AV node range of 40&ndash;60.'),
q('A patient has a regular pulse of 28 with failure of both the SA and AV nodes. Which tissue is pacing?','Purkinje fibers',['AV node','SA node','Bundle of His'],'15&ndash;40/min is the Purkinje fiber range.')]),

c('Myocardial action potential: phases 0&ndash;4',
'<p>Charge carriers: <strong>Na<sup>+</sup>, K<sup>+</sup>, Ca<sup>2+</sup></strong>. Channels: fast sodium, slow calcium-sodium, potassium.</p>'+
tbl(['Phase','Name','Ion event'],[
['0','Rapid depolarization','Fast Na<sup>+</sup> channels open; membrane goes from about -90 mV to +20 mV'],
['1','Early repolarization','At the peak; fast Na<sup>+</sup> channels inactivate'],
['2','Plateau','Slow Ca<sup>2+</sup> channels open; action potential lasts 3&ndash;15x longer than skeletal muscle, prolonging contraction'],
['3','Rapid repolarization','Ca<sup>2+</sup>/Na<sup>+</sup> channels close; K<sup>+</sup> channels open and K<sup>+</sup> moves out'],
['4','Resting membrane','Na<sup>+</sup>/K<sup>+</sup> pump returns Na<sup>+</sup> out and K<sup>+</sup> in']]),
['ap-phases','ion-channels','plateau-calcium'],
[q('Which ion event causes phase 0 of the myocardial action potential?','Fast sodium channels open with rapid sodium inflow',['Potassium channels open with potassium outflow','Slow calcium channels open','The sodium-potassium pump restores gradients'],'Phase 0 = fast Na+ influx, rapid depolarization.'),
q('Which phase is the plateau, caused by slow opening of calcium channels?','Phase 2',['Phase 0','Phase 3','Phase 4'],'Phase 2 = plateau from slow Ca2+ channel opening.'),
q('What happens during phase 3?','Calcium/sodium channels close and potassium channels open, repolarizing the cell',['Fast sodium channels open','Calcium channels open slowly','The cell rests at resting membrane potential'],'Phase 3 = rapid repolarization via K+ efflux.')],
[q('A drug prolongs opening of cardiac calcium channels. Which action potential phase would most directly lengthen?','Phase 2 (plateau)',['Phase 0 (rapid depolarization)','Phase 1 (early repolarization)','Phase 4 (resting)'],'Slow Ca2+ entry creates and sustains the plateau.')]),

c('Absolute refractory period',
'<p>The <strong>absolute refractory period (ARP)</strong> is when <strong>no stimulus</strong>, however strong, can generate another action potential.</p><p>It includes <strong>phases 0, 1, 2, and part of 3</strong> (until the membrane returns to threshold potential). It lasts almost as long as the contraction, <strong>blocking a second contraction</strong> until the first is over.</p>'+
tbl(['Period','Stimulus that can fire the cell','Timing (slide 27 curve)'],[
['Absolute (ARP)','None','Phase 0 through part of phase 3, until threshold'],
['Relative (RRP)','Greater than normal','From threshold to just before the end of phase 3'],
['Supernormal (SN)','Weak (smaller than normal)','Very short window at the end of phase 3, just before rest']]),
['absolute-refractory'],
[q('During the absolute refractory period, what stimulus can trigger a new action potential?','No stimulus',['A greater than normal stimulus','A weak stimulus','A normal stimulus'],'ARP: no stimulus generates another action potential.'),
q('Which phases are included in the absolute refractory period?','Phases 0, 1, 2, and part of 3',['Phase 4 only','Phases 3 and 4','Phase 0 only'],'ARP covers phases 0&ndash;2 and part of 3.')],
[q('A student asks why cardiac muscle cannot sustain a tetanic (summed) contraction like skeletal muscle. Which property explains this?','The absolute refractory period lasts almost as long as the contraction',['The supernormal period allows weak stimuli to fire','The SA node fires at 60 to 100/min','Purkinje fibers conduct slowly'],'A long ARP blocks a second contraction until the first finishes.')]),

c('Relative refractory period',
'<p>In the <strong>relative refractory period (RRP)</strong>, repolarization has brought the membrane to just below threshold. The cell <strong>can</strong> depolarize again, but only to a <strong>greater-than-normal stimulus</strong>.</p><p>Timing (notes): begins when phase 3 reaches threshold potential and ends just before the end of phase 3.</p>',
['relative-refractory'],
[q('During the relative refractory period, the cell can be depolarized by:','A greater than normal stimulus',['No stimulus','A weak stimulus','Only a stimulus from the SA node at rest'],'RRP: a stronger-than-normal stimulus can re-depolarize the cell.')],
[q('A strong premature impulse arrives late in phase 3, after threshold has been regained but before repolarization finishes, and triggers a response. In which period did it arrive?','Relative refractory period',['Absolute refractory period','Phase 0','Phase 2 plateau'],'Late phase 3 after threshold = RRP; a strong stimulus can fire the cell.')]),

c('Supernormal excitatory period',
'<p>The <strong>supernormal excitatory period (SN)</strong> is a <strong>very short</strong> window at the end of repolarization when even a <strong>weak stimulus</strong> can evoke a response.</p>'+
hy('This is the period where <strong>arrhythmias can develop</strong>.'),
['supernormal-period','supernormal-arrhythmia'],
[q('During the supernormal excitatory period, what stimulus can evoke a response?','A weak stimulus',['No stimulus','Only a greater than normal stimulus','Only a stimulus during phase 0'],'SN: a weak stimulus can evoke a response.'),
q('Why is the supernormal period clinically important?','Arrhythmias can develop during it',['It sets the normal heart rate','It prevents tetanic contraction','It causes the AV delay'],'Weak stimuli can trigger responses, so arrhythmias can arise.')],
[q('A small, normally insignificant electrical stimulus lands at the very end of repolarization and triggers an arrhythmia. Which period best explains this?','Supernormal excitatory period',['Absolute refractory period','Relative refractory period','Phase 2 plateau'],'Only during the supernormal period can a weak stimulus evoke a response.')])
]),

s('05-cardiac-cycle','5. Phases of the cardiac cycle (systole, diastole, and subcomponents)','Objective 5. Slides 28&ndash;33.',[
c('Systole vs diastole',
tbl(['','Systole','Diastole'],[
['Ventricles','Contract and pump blood out','Relax and fill'],
['AV valves','<strong>Closed</strong> (prevent backflow to atria)','<strong>Open</strong> (let ventricles fill)'],
['Semilunar valves','<strong>Open</strong> (blood ejected)','<strong>Closed</strong> (prevent backflow from vessels)'],
['Subphases','Isovolumetric contraction, ejection','Isovolumetric relaxation, rapid filling (then atrial contraction late)']]),
['systole','diastole','valve-states'],
[q('During ventricular systole, the valve positions are:','AV valves closed, semilunar valves open',['AV valves open, semilunar valves closed','Both sets open','Both sets closed throughout'],'Systole ejects through open semilunar valves while AV valves are shut.'),
q('Diastole is the phase of:','Ventricular relaxation and filling',['Ventricular contraction and ejection','Atrial relaxation only','Semilunar valve opening'],'Diastole = ventricles relax and fill.')],
[q('A patient has a leaky (incompetent) mitral valve. During which phase would blood abnormally flow back into the left atrium?','Systole, when the AV valve should be closed',['Diastole, when the AV valve should be open','Rapid filling phase','Phase 4 of the action potential'],'AV valves close in systole to prevent backflow; a leaky one allows it.')]),

c('Isovolumetric contraction',
'<p>First part of systole. Begins with <strong>closure of the AV valves (S1)</strong>, before the semilunar valves open.</p><p>Contraction begins and <strong>intraventricular pressure rises</strong> while all valves are closed, so volume does not change.</p>',
['isovolumetric-contraction','s1'],
[q('What event begins the isovolumetric contraction period?','Closure of the AV valves (S1)',['Closure of the semilunar valves (S2)','Opening of the semilunar valves','Atrial contraction'],'Isovolumetric contraction starts with AV valve closure, the first heart sound.'),
q('Which heart sound is produced by closure of the AV valves?','S1',['S2','S3','S4'],'S1 = AV valve closure.')],
[q('At the onset of systole, ventricular pressure is rising but no blood is leaving the ventricle. Which phase is this?','Isovolumetric contraction',['Ejection period','Isovolumetric relaxation','Rapid filling'],'All valves are closed while pressure builds.')]),

c('Ejection period',
'<p>When ventricular pressure <strong>exceeds aortic and pulmonary trunk pressure</strong>, the semilunar valves open and ejection occurs.</p><p>Ejection continues until great-vessel pressure exceeds ventricular pressure, closing the semilunar valves (<strong>S2</strong>).</p>',
['ejection','s2'],
[q('What causes the semilunar valves to open?','Ventricular pressure exceeding aortic and pulmonary trunk pressure',['Atrial pressure exceeding ventricular pressure','Closure of the AV valves','Venous return into the atria'],'Ejection starts when ventricular pressure exceeds great-vessel pressure.'),
q('Which heart sound marks closure of the semilunar valves at the end of ejection?','S2',['S1','S3','S4'],'S2 = semilunar valve closure.')],
[q('A stiff, narrowed aortic valve forces the left ventricle to reach a higher pressure before blood can leave. Which phase is delayed?','Ejection period',['Rapid filling','Isovolumetric relaxation','Atrial contraction'],'Semilunar valves open (starting ejection) only after ventricular pressure exceeds aortic pressure.')]),

c('Isovolumetric relaxation',
'<p>First part of diastole. Begins with <strong>closure of the semilunar valves</strong>; the ventricles begin relaxing with all valves closed.</p><p>When intraventricular pressure falls <strong>below atrial pressure</strong>, the AV valves open and this phase ends.</p>',
['isovolumetric-relaxation'],
[q('Which event begins isovolumetric relaxation?','Closure of the semilunar valves',['Closure of the AV valves','Opening of the AV valves','Atrial contraction'],'Isovolumetric relaxation starts at semilunar closure (S2).'),
q('What ends isovolumetric relaxation?','Ventricular pressure falls below atrial pressure and the AV valves open',['Ventricular pressure exceeds aortic pressure','The atria contract','The semilunar valves open'],'AV valves open once ventricular pressure drops below atrial pressure.')],
[q('Right after S2, ventricular pressure is falling but ventricular volume is unchanged. Which phase is occurring?','Isovolumetric relaxation',['Isovolumetric contraction','Ejection period','Rapid filling'],'All valves are closed as the ventricle relaxes.')]),

c('Rapid filling and S3',
'<p><strong>Rapid filling</strong> begins when the AV valves open and ends with complete ventricular filling.</p>'+
hy('<strong>S3:</strong> heard at the end of the filling phase in an <strong>over-distended or non-compliant ventricle</strong>, from vibrations as blood entering the ventricle stops abruptly, before the atria contract.'),
['rapid-filling','s3'],
[q('When does the rapid filling phase begin?','When the AV valves open',['When the semilunar valves open','When the AV valves close','When the atria contract'],'Rapid filling starts with AV valve opening.'),
q('An S3 is associated with which ventricular state?','Over-distended or non-compliant ventricle',['Normal compliant ventricle at rest','Closed AV valves in systole','Rapid ejection through the aortic valve'],'S3 arises with an over-distended or non-compliant ventricle at the end of filling.')],
[q('A patient with an over-distended left ventricle has an extra sound just after S2, at the end of early filling and before atrial contraction. Which sound is it?','S3',['S4','S1','S2'],'S3 = abrupt stop of filling in an over-distended or non-compliant ventricle.')]),

c('Atrial contraction and S4',
'<p>In the <strong>last third of diastole</strong> the atria contract to push the final amount of blood into the ventricles.</p><p>An <strong>S4</strong> may be heard here when that rush of blood is turbulent.</p>'+
tbl(['Sound','Timing','Cause (lecture)'],[
['S1','Start of systole','AV valves close'],
['S2','End of ejection','Semilunar valves close'],
['S3','End of rapid filling','Abrupt stop of inflow; over-distended/non-compliant ventricle'],
['S4','Last third of diastole','Atrial contraction; turbulent rush of blood']]),
['atrial-contraction','s4'],
[q('When is an S4 heard?','During the last third of diastole when the atria contract',['At the start of systole','At the end of ejection','During isovolumetric relaxation'],'S4 occurs with atrial contraction late in diastole.')],
[q('An extra sound is heard just before S1, coinciding with atrial contraction. Which sound is it?','S4',['S3','S2','Ejection click'],'S4 is late diastolic, during atrial contraction.')]),

c('Atrial pressure waves: c, v, a',
'<p>There are <strong>no valves between the great veins and the atria</strong>, so the atria fill during both systole and diastole at low pressure.</p>'+
tbl(['Wave','Timing','Cause'],[
['c','Start of systole','AV valves close and <strong>bulge into the atria</strong>, briefly raising atrial pressure and stopping inflow'],
['v','Late systole (AV valves still closed)','Venous pressure exceeds atrial pressure; atria <strong>fill</strong>'],
['a','Last phase of diastole (AV valves open)','<strong>Atrial contraction</strong> pushes the final blood into the ventricles']])+
mn('<strong>a</strong> = <strong>a</strong>trial contraction; <strong>c</strong> = <strong>c</strong>losure/bulge of AV valves; <strong>v</strong> = <strong>v</strong>enous filling.'),
['c-wave','v-wave','a-wave','no-venous-atrial-valves'],
[q('Which atrial pressure wave is caused by atrial contraction?','a wave',['c wave','v wave','x wave'],'a wave = atrial contraction at the end of diastole.'),
q('Which atrial pressure wave is caused by the AV valves closing and bulging into the atria?','c wave',['a wave','v wave','y wave'],'c wave = AV valve closure and bulge at the start of systole.'),
q('Which atrial pressure wave reflects atrial filling late in systole while the AV valves are still closed?','v wave',['a wave','c wave','p wave'],'v wave = venous filling of the atria in late systole.'),
q('Why can blood enter the atria during both systole and diastole?','There are no valves between the great veins and the atria, and atrial pressure is low',['The AV valves are always open','The semilunar valves prevent backflow into the atria','The atria actively suck blood in only during systole'],'No valves at the venous inflow plus low pressure allow continuous filling.')],
[q('While watching the jugular venous waveform, you note the wave that occurs just before S1 coinciding with atrial contraction. Which wave is it?','a wave',['c wave','v wave','Pulse pressure wave'],'The a wave reflects atrial contraction late in diastole, just before S1.')]),

c('Right atrial pressure and the jugular veins',
'<ul><li>Right atrial pressure is visible as <strong>pulsations in the internal jugular veins</strong>, which can be measured to assess cardiac function.</li><li>RA pressure/filling depends on the <strong>right ventricle pumping blood to the lungs</strong>; a strong pump drops atrial pressure and increases filling.</li><li>Intrathoracic pressure matters: RA pressure <strong>decreases with inspiration</strong> and <strong>increases with coughing or forced exhalation</strong>.</li></ul>',
['jvp-ra-pressure','intrathoracic-effects'],
[q('Where can right atrial pressure be observed at the bedside?','Internal jugular vein pulsations',['Radial artery pulse','Carotid artery pulse','Femoral vein'],'RA pressure is reflected in internal jugular venous pulsations.'),
q('What effect does inspiration have on right atrial pressure?','It decreases right atrial pressure',['It increases right atrial pressure','It has no effect','It reverses atrial filling'],'Inspiration lowers intrathoracic and RA pressure.')],
[q('While inspecting the neck veins, the patient coughs forcefully. What happens to right atrial pressure?','It increases',['It decreases','It falls to zero','It becomes equal to aortic pressure'],'Coughing or forced exhalation raises intrathoracic and RA pressure.'),
q('A patient has a failing right ventricle that cannot pump blood forward to the lungs. What happens to right atrial pressure?','It rises, because RA filling depends on RV emptying',['It falls, because the atria fill more','It is unaffected','It drops below zero during systole'],'RA pressure depends on the RV pumping blood out; a strong pump lowers it, a weak one raises it.')])
]),

s('06-cardiac-output-factors','6. Preload, afterload, contractility, and heart rate effects on cardiac output','Objective 6. Slides 34&ndash;41, 63.',[
c('Cardiac output and cardiac reserve',
'<ul><li><strong>Cardiac output (CO)</strong> = blood pumped per minute (L/min). <strong>Stroke volume (SV)</strong> = blood ejected by each ventricle per beat. <strong>Heart rate</strong> = beats per minute.</li><li><strong>CO = SV x HR</strong>; normal adult CO <strong>4&ndash;8 L/min</strong>.</li><li><strong>Cardiac reserve</strong> = the maximum increase in CO above normal: <strong>300&ndash;400%</strong> in a healthy young adult.</li><li>The ability to raise CO depends on <strong>4 factors: preload, afterload, contractility, and heart rate</strong>. SV is affected by preload, contractility, and afterload (slide 39).</li></ul>',
['co-equation','normal-co','cardiac-reserve','four-factors'],
[q('Which equation defines cardiac output?','CO = stroke volume x heart rate',['CO = heart rate / stroke volume','CO = change in pressure / resistance','CO = change in volume / change in pressure'],'CO = SV x HR.'),
q('What is normal adult cardiac output?','4 to 8 L/min',['1 to 2 L/min','10 to 15 L/min','0.5 to 1 L/min'],'Normal CO is 4&ndash;8 L/min.'),
q('What is the cardiac reserve of a healthy young adult?','300 to 400 percent above normal CO',['10 to 20 percent above normal CO','50 percent above normal CO','1000 percent above normal CO'],'Cardiac reserve is 300&ndash;400% in a healthy young adult.')],
[q('A patient has a heart rate of 70/min and stroke volume of 80 mL. What is the cardiac output?','5.6 L/min',['0.56 L/min','56 L/min','1.1 L/min'],'70 x 0.08 L = 5.6 L/min, within normal 4&ndash;8 L/min.')]),

c('Preload',
'<p><strong>Preload = volume work of the heart</strong>: the load <strong>before</strong> ventricular contraction begins.</p><p>It is the volume of blood stretching the ventricular fibers at the end of diastole = <strong>end-diastolic volume (EDV)</strong>.</p><p>Slide 39: increased volume = increased stretch = increased force of contraction.</p>'+
mn('<strong>PRE</strong>load = <strong>PRE</strong>-contraction = volume filling (EDV). <strong>AFTER</strong>load = load <strong>after</strong> contraction starts = pressure to overcome.'),
['preload','end-diastolic-volume'],
[q('Preload is best described as:','The volume of blood stretching the ventricle at the end of diastole (EDV)',['The pressure the ventricle must generate to open the aortic valve','The force of contraction independent of fiber length','The number of beats per minute'],'Preload = volume work = EDV.')],
[q('After a large IV fluid bolus, venous return and ventricular filling increase. Which determinant of cardiac output rises most directly?','Preload',['Afterload','Contractility','Heart rate'],'More filling = higher end-diastolic volume = higher preload.')]),

c('Frank-Starling mechanism',
'<p>The <strong>Frank-Starling mechanism (Starling law)</strong>: increased force of contraction that accompanies an increase in ventricular end-diastolic volume.</p>'+
hy('The more the ventricle is filled in diastole, the more forcefully it contracts in systole.'),
['frank-starling'],
[q('The Frank-Starling mechanism states that:','The ventricle contracts more forcefully when filled to a greater degree during diastole',['Higher heart rate always increases cardiac output','Afterload determines end-diastolic volume','Contractility changes only with fiber length'],'Greater EDV &rarr; greater force of contraction.')],
[q('A healthy person lies down and venous return increases, so the ventricle fills more. Stroke volume rises without any change in sympathetic tone. Which mechanism explains this?','Frank-Starling mechanism',['Increased afterload','Increased contractility','Reflex tachycardia'],'More filling stretches fibers and increases force: Frank-Starling.')]),

c('Afterload',
'<p><strong>Afterload = pressure (tension) work</strong>: the pressure the heart must generate to move blood into the aorta, presented <strong>after</strong> contraction has begun.</p><ul><li><strong>Systemic BP</strong> is the main source of afterload for the <strong>left ventricle</strong>.</li><li><strong>Pulmonary BP</strong> is the main source of afterload for the <strong>right ventricle</strong>.</li></ul><p>Slide 39: increased resistance = increased force needed to overcome it.</p>',
['afterload','afterload-sources'],
[q('Afterload is best defined as:','The pressure the ventricle must generate to eject blood into the great vessel',['End-diastolic volume','Force of contraction independent of resting length','Time spent in diastolic filling'],'Afterload = pressure/tension work after contraction begins.'),
q('What is the main source of afterload for the right ventricle?','Pulmonary blood pressure',['Systemic blood pressure','Central venous pressure','End-diastolic volume'],'RV afterload = pulmonary BP; LV afterload = systemic BP.')],
[q('A patient has long-standing uncontrolled systemic hypertension. Which ventricle faces increased afterload, and why?','Left ventricle, because systemic BP is its main afterload',['Right ventricle, because systemic BP is its main afterload','Left ventricle, because preload rises','Right ventricle, because pulmonary BP falls'],'Systemic BP is the main source of LV afterload.')]),

c('Cardiac contractility',
'<p><strong>Contractility</strong> = ability of the heart to change its force of contraction <strong>without changing its resting length</strong>.</p><p>It raises CO <strong>independent of preload and afterload</strong>.</p><p>Actin-myosin interaction requires energy from <strong>ATP breakdown</strong> and the presence of <strong>calcium ions</strong>.</p><p>The <strong>sympathetic</strong> nervous system increases contractility (slide 63).</p>',
['contractility','contractility-atp-calcium'],
[q('Cardiac contractility is the ability of the heart to:','Change its force of contraction without changing its resting length',['Change force only by increasing fiber stretch','Fire impulses at 60 to 100/min','Store blood between beats'],'Contractility is independent of fiber length, preload, and afterload.'),
q('Actin-myosin interaction during cardiac contraction requires:','ATP and calcium ions',['Sodium and chloride ions only','Glucose and potassium only','Nitric oxide and bradykinin'],'Contraction needs ATP energy and calcium.')],
[q('With no change in filling volume or blood pressure, sympathetic stimulation makes the ventricle eject more forcefully. Which factor changed?','Contractility',['Preload','Afterload','Compliance'],'A stronger contraction at the same resting length = increased contractility.')]),

c('Heart rate and diastolic filling',
'<p>Heart rate depends on the frequency of ventricular contractions <strong>and</strong> the time spent in diastolic filling.</p><p><strong>Faster rate &rarr; less time to fill &rarr; less blood fills &rarr; less CO &rarr; less O<sub>2</sub>/nutrients &rarr; cells can be injured or die.</strong></p><p>HR is primarily controlled by the ANS: <strong>vagus (CN X)</strong> slows it; <strong>sympathetic</strong> stimulation increases rate and contractility.</p>'+
hy('Raising HR helps CO only up to a point; very fast rates cut diastolic filling time and CO falls.'),
['heart-rate','diastolic-filling-time','ans-heart-rate'],
[q('Why can a very fast heart rate decrease cardiac output?','Less time in diastole means less ventricular filling',['It increases afterload on the right ventricle','It lengthens the absolute refractory period','It increases end-diastolic volume too much'],'Faster rate &rarr; less filling time &rarr; less blood filled &rarr; less CO.'),
q('Which nerve slows the heart rate?','Vagus nerve (CN X)',['Phrenic nerve','Glossopharyngeal nerve (CN IX)','Sympathetic cardiac nerves'],'Parasympathetic input via the vagus slows HR.')],
[q('A patient with a heart rate of 190 becomes lightheaded with low blood pressure. Which mechanism best explains the drop in cardiac output?','Shortened diastolic filling time reduces stroke volume',['Increased preload from more filling','Reduced afterload from vasodilation','Increased contractility from ATP excess'],'At very high HR, filling time and SV fall, lowering CO.')])
]),

s('07-arterial-vs-venous','7. Arterial vs venous systems: structure and function','Objective 7. Slides 43&ndash;53.',[
c('Vessel wall layers (tunicae)',
tbl(['Layer','Tissue','Role'],[
['Tunica externa (adventitia)','Loose connective tissue','Outer layer; controls diameter'],
['Tunica media','Smooth muscle','Vasoconstriction and vasodilation'],
['Tunica intima','Epithelial tissue','Smoothness prevents platelet adherence and clotting']])+
'<p>All vessels <strong>except capillaries</strong> have these 3 layers.</p>',
['tunica-layers','capillaries-lack-tunicae'],
[q('Which vessel layer is smooth muscle and controls vasoconstriction and vasodilation?','Tunica media',['Tunica intima','Tunica externa','Endocardium'],'Tunica media is the smooth muscle layer.'),
q('Which vessels lack the three-layer tunica structure?','Capillaries',['Arteries','Veins','Arterioles'],'All vessels except capillaries have 3 tunicae.'),
q('Which layer prevents platelet adherence and clotting because of its smoothness?','Tunica intima',['Tunica media','Tunica adventitia','Pericardium'],'The smooth intima prevents platelet adherence.')],
[q('An atherosclerotic lesion roughens the innermost vessel lining, and platelets begin to adhere. Which layer has lost its normal protective function?','Tunica intima',['Tunica media','Tunica externa','Adventitia'],'The intima normally prevents platelet adherence through its smoothness.')]),

c('Vascular smooth muscle and receptors',
'<ul><li>Smooth muscle contracts <strong>slowly</strong> and generates high force for long periods with <strong>low energy</strong> (1/10 to 1/300 of skeletal muscle).</li><li>Little sarcoplasmic reticulum and very few fast Na<sup>+</sup> channels, so vasoconstriction relies on <strong>extracellular calcium</strong>.</li></ul>'+
tbl(['Receptor','Effect on Ca<sup>2+</sup> channels','Result'],[
['&alpha;1 and &alpha;2-adrenergic','Open (excitatory)','<strong>Vasoconstriction</strong>'],
['&beta;2-adrenergic','Close (inhibitory)','<strong>Vasodilation</strong>']])+
'<p><strong>Calcium channel blockers</strong> cause vasodilation by blocking Ca<sup>2+</sup> entry.</p>',
['vascular-smooth-muscle','adrenergic-receptors','calcium-channel-blockers'],
[q('Stimulation of alpha-adrenergic receptors on vascular smooth muscle causes:','Vasoconstriction',['Vasodilation','No change in tone','Increased capillary permeability'],'Alpha 1 and 2 receptors open Ca2+ channels, causing vasoconstriction.'),
q('Beta-2 adrenergic receptors on vascular smooth muscle produce:','Vasodilation by closing calcium channels',['Vasoconstriction by opening calcium channels','Venous valve closure','Increased heart rate only'],'Beta-2 is inhibitory: Ca2+ channels close, vessels dilate.'),
q('Vascular smooth muscle depends mainly on which calcium source for vasoconstriction?','Extracellular calcium',['Sarcoplasmic reticulum stores','Mitochondrial calcium','Bone calcium released by PTH'],'Little SR storage means reliance on extracellular calcium.')],
[q('A patient with hypertension starts a calcium channel blocker. By what mechanism does it lower blood pressure?','It blocks calcium entry into vascular smooth muscle, causing vasodilation',['It stimulates alpha-1 receptors','It increases extracellular calcium','It opens fast sodium channels'],'CCBs block Ca2+ entry and cause vasodilation.')]),

c('Arterial system: high pressure',
'<ul><li><strong>High-pressure</strong> system: large and medium arteries plus arterioles.</li><li><strong>Thick-walled</strong> vessels with many <strong>elastic fibers</strong> for flexibility during systole and diastole.</li><li><strong>Arterioles</strong> (mostly smooth muscle) are the <strong>resistance vessels</strong> and regulate BP.</li></ul>',
['arterial-high-pressure','arterial-elastic-walls','arterioles-resistance'],
[q('Which vessels serve as the resistance vessels of the circulatory system and regulate BP?','Arterioles',['Large veins','Capillaries','Venules'],'Arterioles (mostly smooth muscle) regulate resistance and BP.'),
q('Why do arteries contain many elastic fibers?','To allow flexibility during systole and diastole',['To store large volumes of blood at low pressure','To form one-way valves','To allow gas exchange'],'Elastic fibers let arteries stretch in systole and recoil in diastole.')],
[q('A medication constricts arteriolar smooth muscle throughout the body. What happens to systemic vascular resistance and BP?','Both increase',['Both decrease','Resistance falls while BP rises','Neither changes because arterioles do not regulate BP'],'Arterioles are the resistance vessels; constriction raises SVR and BP.')]),

c('Arterial pulse pressure wave',
'<p>The <strong>pulse pressure</strong> is the wave generated by intermittent LV ejection into the aorta and large arteries; it is what you feel when taking a pulse.</p><p>The wave gets <strong>smaller further down</strong> the system; at the capillaries little remains, just enough to keep them open.</p><p>Local tissue control can open the system wider for more flow (e.g., a <strong>cut finger</strong>), so you may feel throbbing there.</p>',
['pulse-pressure-wave','pulse-dampening'],
[q('What are you feeling when you palpate a radial pulse?','The arterial pulse pressure wave from intermittent LV ejection',['Venous valve closure','Capillary exchange','Atrial a waves'],'The palpable pulse is the arterial pulse pressure wave.'),
q('What happens to the pulse pressure wave as it travels toward the capillaries?','It gets progressively smaller',['It gets progressively larger','It reverses direction','It stays constant'],'The wave dampens until little remains at the capillaries.')],
[q('A patient with a fresh finger cut notes throbbing in the injured finger. What explains this?','Local tissue control opens vessels wider, increasing flow so the pulse is felt',['Venous valves are failing in the finger','The capillaries generate their own pulse','Critical closing pressure has been reached'],'Local control increases flow to aid healing, so pulsation can be felt.')]),

c('Venous system: low pressure and CVP',
'<ul><li><strong>Low-pressure</strong> system returning blood from capillaries &rarr; venules &rarr; veins &rarr; <strong>right atrium</strong>.</li><li>Pressure in the right atrium is the <strong>central venous pressure (CVP)</strong>; normal is about <strong>0 mmHg</strong>.</li><li>CVP is regulated by the RV&rsquo;s ability to pump blood to the lungs <strong>and</strong> by unimpeded flow into the RA.</li></ul>',
['venous-low-pressure','cvp'],
[q('Pressure in the right atrium is called:','Central venous pressure',['Pulse pressure','Systemic vascular resistance','Critical closing pressure'],'RA pressure = CVP.'),
q('What is the normal central venous pressure according to the lecture?','About 0 mmHg',['About 20 mmHg','About 60 mmHg','About 120 mmHg'],'Normal RA pressure is about 0 mmHg.')],
[q('A patient&rsquo;s right ventricle can no longer pump effectively to the lungs. Which pressure would you expect to rise?','Central venous pressure',['Pulmonary capillary oxygen content','Arterial pulse pressure in the fingers','Critical closing pressure'],'CVP depends on the RV pumping blood forward; RV failure raises it.')]),

c('Venous capacitance, valves, and muscle pump',
'<ul><li>Veins and venules are <strong>thin-walled, distensible, and collapsible</strong>.</li><li>Veins can enlarge and <strong>store large quantities of blood</strong>.</li><li>They still have a muscle layer that contracts and relaxes with tissue demand.</li><li>Extremity veins have <strong>one-way valves</strong> (cup-shaped like semilunar valves) that prevent retrograde flow.</li><li>Intermittent contraction of extremity muscles pushes blood toward the heart: the <strong>venous (muscle) pump</strong>.</li></ul>',
['venous-capacitance','venous-valves','muscle-pump'],
[q('Which vessels can enlarge and store large quantities of blood?','Veins',['Arteries','Arterioles','Capillaries'],'Veins are distensible and store blood.'),
q('What prevents retrograde blood flow in extremity veins?','One-way venous valves',['Precapillary sphincters','Elastic recoil of the veins','The tunica intima alone'],'Extremity veins have one-way valves.'),
q('The intermittent contraction of leg muscles that moves venous blood toward the heart is called:','Venous (muscle) pump',['Frank-Starling mechanism','Autoregulation','Pulse pressure wave'],'Muscle contraction compresses veins and pushes blood forward.')],
[q('A long-haul traveler sits immobile for hours, and leg venous return slows. Which mechanism has been lost?','Venous (muscle) pump from leg muscle contraction',['Arterial elastic recoil','SA node pacing','Endothelial nitric oxide release'],'Without muscle contraction, the venous pump does not push blood forward.'),
q('A patient has damaged leg vein valves and blood pools in the lower legs. Which normal function of venous valves is impaired?','Preventing retrograde flow of blood',['Generating the arterial pulse','Regulating systemic vascular resistance','Performing gas exchange'],'Venous valves prevent retrograde flow.')]),

c('Arterial vs venous: side-by-side',
tbl(['Feature','Arterial system','Venous system'],[
['Pressure','<strong>High</strong>','<strong>Low</strong> (CVP ~0 mmHg)'],
['Walls','Thick, elastic','Thin, distensible, collapsible'],
['Main role','Deliver blood; arterioles set resistance and BP','Return blood to RA; store large volumes'],
['Direction','Away from the heart','Back to the heart'],
['Valves','None (in vessels)','One-way valves in extremities'],
['Pulse','Pulse pressure wave','No arterial-type pulse; RA pulsations seen in the internal jugular veins']]),
['artery-vein-comparison'],
[q('Which feature describes the venous system rather than the arterial system?','Thin-walled, distensible, low pressure',['Thick-walled with many elastic fibers','High pressure with resistance vessels','Generates the palpable pulse pressure wave'],'Veins are thin-walled, distensible, low-pressure vessels.')],
[q('A vessel on ultrasound is thin-walled, easily compressed, and has a valve. Which system is it most likely part of?','Venous system',['Arterial system','Arteriolar resistance system','Coronary arterial system'],'Thin, collapsible walls with valves are venous features.')]),

c('Microcirculation and lymphatics',
'<ul><li><strong>Microcirculation</strong> = arterioles, capillaries, and venules.</li><li>Arterioles feed capillaries via <strong>precapillary sphincters</strong> that open based on venous pressures and local tissue needs.</li><li><strong>Capillaries</strong> are the site of gas, nutrient, and waste exchange.</li><li>Small wastes re-enter capillaries; <strong>larger products</strong> go via lymphatic vessels.</li><li><strong>Thoracic duct &rarr; left subclavian vein</strong>; <strong>right lymphatic duct &rarr; right subclavian vein</strong>.</li><li><strong>Lymph nodes</strong> filter bacteria via B and T lymphocytes.</li></ul>',
['microcirculation','precapillary-sphincters','capillary-exchange','lymphatics'],
[q('Which vessels make up the microcirculation?','Arterioles, capillaries, and venules',['Aorta, arteries, and arterioles','Veins, venae cavae, and right atrium','Pulmonary arteries and veins'],'Microcirculation = arterioles, capillaries, venules.'),
q('The thoracic duct empties lymph into the:','Left subclavian vein',['Right subclavian vein','Superior vena cava directly','Left atrium'],'Thoracic duct &rarr; left subclavian; right lymphatic duct &rarr; right subclavian.'),
q('What controls blood entry from arterioles into capillaries?','Precapillary sphincters',['Venous valves','Semilunar valves','The tunica adventitia'],'Precapillary sphincters open based on venous pressures and tissue needs.')],
[q('A waste product is too large to re-enter capillary pores. By which route does it return to the venous system?','Lymphatic vessels to the thoracic or right lymphatic duct and into a subclavian vein',['Directly through arterial walls','Through the pulmonary veins','Via the coronary sinus'],'Larger products are carried by lymphatics back to the subclavian veins.')])
]),

s('08-blood-flow-control','8. Autoregulation, endothelial control, and humoral control of blood flow','Objective 8. Slides 54&ndash;62.',[
c('Autoregulation',
'<ul><li><strong>Local control</strong> of blood flow governed by the <strong>nutritional needs of the local tissue</strong>.</li><li><strong>Heart, brain, and kidneys</strong> keep flow relatively constant across systemic BP of about <strong>60&ndash;180 mmHg</strong>, preserving vital organ function.</li><li>Mediated by changes in vessel tone or local tissue factors (e.g., <strong>low oxygen</strong>, accumulated toxic metabolites).</li><li><strong>Hyperemia</strong> (increased blood flow) is an example.</li></ul>'+
hy('Autoregulation = the organ protects its own flow. Vital organs: <strong>heart, brain, kidneys</strong>; range <strong>60&ndash;180 mmHg</strong>.'),
['autoregulation','autoregulation-organs','autoregulation-range','hyperemia'],
[q('Which organs maintain relatively constant blood flow despite changes in systemic BP?','Heart, brain, and kidneys',['Skin, skeletal muscle, and GI tract','Liver, spleen, and pancreas','Lungs, bone, and fat'],'Autoregulation preserves flow to heart, brain, and kidneys.'),
q('Across approximately what systemic BP range does autoregulation keep vital organ flow constant?','60 to 180 mmHg',['0 to 40 mmHg','200 to 300 mmHg','20 to 60 mmHg'],'Lecture range: 60&ndash;180 mmHg.'),
q('Increased blood flow to a tissue resulting from local control is called:','Hyperemia',['Ischemia','Hypovolemia','Hemostasis'],'Hyperemia is an example of autoregulation.')],
[q('A patient&rsquo;s systemic BP rises from 110 to 150 mmHg, yet cerebral blood flow stays nearly unchanged. Which mechanism explains this?','Autoregulation',['Humoral control by histamine','Endothelin release after vessel damage','Venous muscle pump'],'Brain flow is held constant across 60&ndash;180 mmHg by autoregulation.'),
q('After a tourniquet is released, the limb flushes with increased flow as accumulated metabolites and low oxygen dilate local vessels. What is this an example of?','Hyperemia from autoregulation',['Humoral vasoconstriction','Critical closing pressure','Frank-Starling mechanism'],'Low O2 and metabolite buildup trigger local increased flow (hyperemia).')]),

c('Endothelial control: nitric oxide',
'<ul><li>Endothelial cells of arterioles and small arteries synthesize and release factors that control vessel dilation.</li><li><strong>Nitric oxide (NO)</strong> relaxes vascular smooth muscle: direct <strong>vasodilation</strong>.</li><li>NO <strong>inhibits platelet aggregation</strong> and secretion of platelet contents (which cause vasoconstriction).</li><li>Release is triggered by agonists <strong>acetylcholine, bradykinin, histamine, thrombin</strong>, and by <strong>shear stress</strong> from increased flow or BP.</li></ul>',
['nitric-oxide','no-platelet-inhibition','no-triggers'],
[q('Which endothelial substance relaxes vascular smooth muscle and inhibits platelet aggregation?','Nitric oxide',['Endothelin','Angiotensin II','Serotonin'],'NO is the key endothelial vasodilator.'),
q('Which agonists stimulate endothelial nitric oxide release?','Acetylcholine, bradykinin, histamine, and thrombin',['Norepinephrine, angiotensin II, and endothelin','Serotonin, corticosteroids, and aldosterone','Insulin, glucagon, and cortisol'],'The lecture lists ACh, bradykinin, histamine, and thrombin.')],
[q('During exercise, blood flow and shear stress on arterial walls increase, and the vessels dilate. Which endothelial mediator is responsible?','Nitric oxide',['Endothelin','Angiotensin II','Serotonin'],'Shear stress from increased flow or BP causes NO release.')]),

c('Endothelial control: vasoconstrictors and endothelin',
'<p>The endothelium also releases <strong>vasoconstrictors</strong>: <strong>angiotensin II, prostaglandins, and endothelins</strong>.</p>'+
hy('After a vessel is damaged, local <strong>endothelin</strong> is released to vasoconstrict and <strong>prevent extensive bleeding</strong>.'),
['endothelial-vasoconstrictors','endothelin'],
[q('Which endothelial substance is released after vessel damage to vasoconstrict and limit bleeding?','Endothelin',['Nitric oxide','Bradykinin','Histamine'],'Local endothelin release constricts the damaged vessel.'),
q('Which group lists endothelial vasoconstrictor substances from the lecture?','Angiotensin II, prostaglandins, and endothelins',['Nitric oxide, bradykinin, and histamine','Acetylcholine, thrombin, and histamine','Epinephrine, serotonin, and nitric oxide'],'Endothelial vasoconstrictors: angiotensin II, prostaglandins, endothelins.')],
[q('A patient sustains a small laceration and the injured vessel constricts almost immediately to limit blood loss. Which endothelial mediator best explains this?','Endothelin',['Nitric oxide','Histamine','Bradykinin'],'Endothelin is released locally after vessel damage.')]),

c('Humoral control: overview',
'<p>Vasoconstrictive and vasodilative <strong>hormones circulate</strong> in the blood from <strong>distant glands or local tissue</strong>.</p>'+
tbl(['Agent','Main vascular effect'],[
['Norepinephrine','Powerful vasoconstrictor'],
['Epinephrine','Weaker vasoconstrictor; vasodilator in skeletal muscle'],
['Angiotensin II','Powerful arteriolar vasoconstrictor; raises PVR and BP'],
['Histamine','Powerful arteriolar vasodilator; increases capillary permeability'],
['Serotonin','Vasoconstriction from aggregating platelets; controls bleeding'],
['Bradykinin','Intense arteriolar vasodilation; increased permeability; venule constriction'],
['Prostaglandins','Some constrict, some dilate']]),
['humoral-overview'],
[q('In humoral control, vasoactive hormones reach vessels from:','Distant glands or local tissue via the circulating blood',['Only direct sympathetic nerve contact','Only the endothelium of the same vessel','The lymphatic ducts'],'Humoral agents circulate from distant glands or local tissue.')],
[q('A student classifies a hormone released from a distant gland that circulates and constricts arterioles. Which type of blood flow control is this?','Humoral control',['Autoregulation','Endothelial control','Venous muscle pump'],'Circulating hormones from distant glands = humoral control.')]),

c('Norepinephrine vs epinephrine',
tbl(['','Norepinephrine','Epinephrine'],[
['Vascular effect','<strong>Powerful vasoconstrictor</strong>','<strong>Less powerful</strong> vasoconstrictor; <strong>vasodilator in skeletal muscle</strong>']])+
'<p>Both are released by <strong>sympathetic nerve endings</strong> and the <strong>adrenal medulla</strong>. Nerve-ending release acts <strong>immediately</strong>; adrenal release takes <strong>longer</strong> because of circulation time.</p><p>Notes: during stress or exercise, norepinephrine from sympathetic nerve endings constricts local veins and arterioles.</p>',
['norepinephrine','epinephrine','catecholamine-sources'],
[q('Which catecholamine acts as a vasodilator in skeletal muscle?','Epinephrine',['Norepinephrine','Angiotensin II','Serotonin'],'Epinephrine is a weaker vasoconstrictor and dilates skeletal muscle vessels.'),
q('Why does adrenal medullary catecholamine release act more slowly than nerve-ending release?','Adrenal release must travel through the circulation',['The adrenal medulla releases only inactive precursors','Nerve endings release more powerful hormones','The adrenal medulla is parasympathetic'],'Nerve endings act immediately; adrenal release has circulatory delay.')],
[q('A sprinter under stress has constriction of veins and arterioles in non-working tissues within seconds. Which agent and source best explain this immediate effect?','Norepinephrine from sympathetic nerve endings',['Epinephrine from the adrenal medulla','Histamine from mast cells','Bradykinin from the GI tract'],'Nerve-ending norepinephrine acts immediately and is a powerful vasoconstrictor.')]),

c('Angiotensin II and histamine',
'<ul><li><strong>Angiotensin II</strong>: powerful vasoconstrictor acting on <strong>arterioles</strong>, raising peripheral vascular resistance and BP.</li><li><strong>Histamine</strong>: powerful <strong>vasodilator</strong> of arterioles that <strong>increases capillary permeability</strong>; from <strong>mast cells</strong> in injured tissue and <strong>basophils</strong> in blood.</li></ul>',
['angiotensin-ii','histamine'],
[q('Which humoral agent is a powerful arteriolar vasoconstrictor that raises peripheral vascular resistance and BP?','Angiotensin II',['Histamine','Bradykinin','Nitric oxide'],'Angiotensin II constricts arterioles, raising PVR and BP.'),
q('Histamine is derived from:','Mast cells in injured tissue and basophils in the blood',['Aggregating platelets','The adrenal medulla','Endothelial cells after vessel damage'],'Mast cells and basophils release histamine.')],
[q('After a bee sting, the area becomes red and swollen from arteriolar dilation and leaky capillaries. Which mediator best explains both findings?','Histamine',['Angiotensin II','Serotonin','Norepinephrine'],'Histamine dilates arterioles and increases capillary permeability.')]),

c('Serotonin and bradykinin',
'<ul><li><strong>Serotonin</strong>: released from <strong>aggregating platelets</strong> during clotting; causes <strong>vasoconstriction</strong>, important in controlling bleeding.</li><li><strong>Bradykinin</strong>: <strong>intense arteriolar vasodilation</strong>, increased capillary permeability, and <strong>venule constriction</strong>; helps regulate flow in the <strong>skin, salivary glands, and GI tract</strong>.</li></ul>',
['serotonin','bradykinin'],
[q('Which humoral agent is released by aggregating platelets and causes vasoconstriction to help control bleeding?','Serotonin',['Bradykinin','Histamine','Nitric oxide'],'Serotonin from platelets constricts vessels during clotting.'),
q('Bradykinin helps regulate blood flow in which tissues?','Skin, salivary glands, and GI tract',['Brain, heart, and kidneys','Bone, cartilage, and tendon','Lungs, liver, and spleen'],'The lecture lists skin, salivary glands, and GI tract.')],
[q('A mediator causes intense arteriolar dilation, increased capillary permeability, and constriction of venules. Which is it?','Bradykinin',['Serotonin','Angiotensin II','Endothelin'],'This triad describes bradykinin.')]),

c('Prostaglandins and corticosteroids',
'<p><strong>Prostaglandins</strong> are formed from cell membrane constituents. Tissue injury releases these constituents (arachidonic acid), which initiates prostaglandin synthesis. <strong>Some constrict, others dilate</strong>.</p>'+
hy('<strong>Corticosteroids</strong> are anti-inflammatory because they <strong>block release of arachidonic acid</strong>, preventing prostaglandin synthesis.'),
['prostaglandins','corticosteroid-effect'],
[q('What is the vascular effect of prostaglandins?','Some produce vasoconstriction while others produce vasodilation',['All are powerful vasoconstrictors','All are powerful vasodilators','They have no vascular effect'],'Prostaglandins can either constrict or dilate.'),
q('How do corticosteroids reduce prostaglandin synthesis?','By blocking release of arachidonic acid from cell membranes',['By blocking calcium channels','By stimulating nitric oxide release','By antagonizing angiotensin II receptors'],'Corticosteroids block arachidonic acid release.')],
[q('A patient with an inflamed, injured joint is given a corticosteroid. Which mechanism from the lecture explains its anti-inflammatory effect on local blood flow mediators?','It blocks arachidonic acid release so prostaglandins are not synthesized',['It releases endothelin to constrict vessels','It increases histamine release from mast cells','It opens beta-2 receptor calcium channels'],'Blocking arachidonic acid release prevents prostaglandin synthesis.')])
])
];
})();
