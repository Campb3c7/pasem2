# PA Semester 2 site guide

This is a static GitHub Pages study site. There is no build step and no framework.

## Structure

- `index.html` — page shell; do not put course content here.
- `styles.css` — shared visual design.
- `app.js` — Learn/Test/Apply/Recall behavior and local progress.
- `walkthrough.js` — Disease Walkthrough state, answer checking, and progress.
- `keyboard.js` — site-wide quiz shortcuts: A/B/C/D picks an answer, Space goes to the next question once it shows, H shows a hint where offered.
- `data/semester.js` — course and lecture catalog.
- `data/walkthrough/schema.js` — reusable case schema and registration helpers.
- `data/walkthrough/cases-*.js` — disease cases grouped by clinical domain.
- `data/vaccines.js` — all Vaccines objective content.
- `.github/workflows/pages.yml` — GitHub Pages deployment (excludes `source-material/`).
- `source-material/<course>/` — original lecture slides, extracted text, and objectives. Repo-only reference; read its README before building course content.

Course-specific tools (Disease Walkthrough, Diagnosis Drills, Geography Lab, Diseases) launch from a `data-course-tools="<course id>"` row inside the course page, not from the home page.

## Diseases tools

- `diseases.js` creates one Diseases tool per course with `createDiseasesTool(...)`; each has its own view, data global, and progress key.
- Infectious Disease data: `data/diseases.js` (`window.DISEASES`). Endocrine data: `data/diseases-endocrine.js` (`window.ENDOCRINE_DISEASES`). Cardio Part 1 data: one file per disease lecture, `data/diseases-cardio-*.js`, gathered by `data/diseases-cardio-part-1.js` (`window.CARDIO_PART1_DISEASES`); each has `scripts/validate-diseases-cardio-*.cjs`. Shared authoring helpers: `data/disease-helpers.js`.
- Question ids are `<disease id>|<index>`: only append questions to a disease, never insert or reorder.
- Run `node scripts/validate-diseases.cjs` after editing any Diseases data file.

## Concepts tool

- Cardio Part 1 has a Concepts tool (cause-and-effect reasoning, not recall). It reuses `createDiseasesTool(...)` with `title/one/many` labels, so its data has the Diseases shape and helpers.
- Data: one file per lecture, `data/concepts-<lecture id>.js`, gathered by `data/concepts-cardio-part-1.js` (`window.CARDIO_PART1_CONCEPTS`).
- Every concept has four sections in order: `idea`, `chain` (an `<ol class="concept-chain">`), `bedside`, `traps`. Questions are mostly prediction ("X rises — what happens to Y?"). Ids are `<concept id>|<index>`: only append.
- Run `node scripts/validate-concepts-<lecture id>.cjs` after editing.

## Heart Sounds tool

- Listening tool for the Heart Sounds audio exam: `heart-sounds.js` (engine) and `data/heart-sounds.js` (`window.HEART_SOUNDS`). It is its own course card on the home page (course `heart-sounds` in `data/semester.js` with `tool: "heart-sounds"` and no lectures; `app.js` opens `window.HeartSoundsTool` instead of a course page). Anna moved it out of Cardio Part 1 on 2026-11-02, next to Radiology and EKG.
- Audio lives in `audio/heart-sounds/{class,michigan,congenital}/` (sources and licenses in that folder's README). Each recording has `dx` (a diagnosis id), `timing`, `shape`, `extra`, `pitch`, `quality` (values from `options`; `null` = not quizzed), a `diagram` spec, and a `note`. `accept` lists other diagnoses the same sound pattern fits.
- The page is organized in three tiers. Tier 1 = the 10 class sounds (both tracks each): One by one, All at once, Quiz, Mock exam (15 questions, 70% to pass). Tier 1 uses class clips only; never put outside clips there. Tier 2 (`HEART_SOUNDS.tier2`: AR, ejection click, midsystolic click, PDA, VSD, Still's, rub) uses outside clips from `HEART_SOUNDS.extra` (Michigan library, congenital set): One by one, All at once, Quiz. Tier 3 (`HEART_SOUNDS.tier3`) is fact cards plus written questions (ids `t3|<index>`: only append).
- Exam practice (top of the page): `data/heart-sounds-exam.js` (`window.HEART_SOUNDS_EXAM`), written in the style of Anna's Examplify practice exam: short vignette + clip + one question (name it, systolic/diastolic/both, maneuver, volume vs pressure overload, cadence). Anna said (2026-11-03) the real exam only uses the sound types from her class recordings, so every question uses one of the 10 class clips. `clips` maps each sound to ONE file in `audio/heart-sounds/exam/` (sound-only tracks with the spoken name trimmed off; four also end before a second spoken bit); Tier 1 quiz and mock exam use the same clips. To swap a clip, change only that map. Questions are split into `sets` (index ranges; Set 1 = the first 50 Anna already did, Set 2 = the next 50), each with its own practice exam and every-question mode. Question ids are `ex|<index>`: only append, and add a new set for new questions.
- Practice exams (2026-11-04, above Exam practice): `data/heart-sounds-mocks.js` (`window.HEART_SOUNDS_MOCKS`), FIXED 15-question exams (1-5 matched closely to the Examplify practice exam's wording, answer lists and difficulty; 6-8 rewritten 2026-11-04 as ids mock-9..11: SAME question types and answer lists as the real practice exam, new patients and clue combinations. Anna rejected off-format questions like echo findings or mechanisms) (`M(sound, stem, question, [choices in exam order], correct index, why)`). Like the real exam, answers stay hidden until Submit, then score + full review. Exam ids `mock-<n>` are progress keys (best score); add new exams, don't edit old ones.
- Every reveal leads with "This sound means" (diagnosis name + `means` text, set in `MEANS` for class sounds) so the shape is always tied to the diagnosis. Anna wants that link spelled out everywhere.
- Anna dropped "Describe it" (drop-downs), Side by side, and the separate Additional practice section (2026-11-02); don't bring them back unless she asks.
- Recording ids are progress keys: never rename. Run `node scripts/validate-heart-sounds.cjs` after editing.
- Heart Sounds Lecture (Anna, 2026-11-03): the written side of the exam as a normal Learn/Test/Apply/Recall lecture in the `heart-sounds` course (`data/heart-sounds-lecture.js`, `window.HEART_SOUNDS_LECTURE_OBJECTIVES`). Not split by objective: 14 sections covering every detail of the deck plus maneuver, word-clue and class-recording reviews. The home card still opens the listening page, whose top "Lecture" block opens the course page via `window.PasemOpenCourse`; the course page's tools row has a Listening practice button back. Run `node scripts/validate-heart-sounds-lecture.cjs` after editing.

## Heart Murmurs tool

- Cardio Part 1 practice-only tool: `murmurs.js` (engine) and `data/murmurs.js` (`window.HEART_MURMURS`: spots, chart, sections of questions). It launches first in the Cardio Part 1 tools row.
- Each question is `Q(prompt, answer, [3 wrong], explanation, map?, flag?)`; `map: { spot, radiate }` draws the chest map with spot names hidden until answered. Ids are `<section id>|<index>`: only append.
- Run `node scripts/validate-murmurs.cjs` after editing.

## Pathophysiology tool

- Cardio Part 1 has a practice-first Pathophysiology tool (about 100 "why does this happen" questions across every lecture). It reuses `createDiseasesTool(...)` with `topic` labels.
- Data: `data/pathophys-cardio-part-1.js` (`window.CARDIO_PART1_PATHOPHYS`), lecture → topic → one short `key` review section + questions. Ids are `<topic id>|<index>`: only append.
- Run `node scripts/validate-pathophys-cardio-part-1.cjs` after editing.

## Medications tool

- Cardio Part 1 has a Medications tool grouped by drug class, not lecture (drugs cross lectures). It reuses `createDiseasesTool(...)` with `groupOne/groupMany` ("drug class") labels and `flashcards: true`, which adds a Flashcards tab (one card per section; Space flips, A = Again, B = Got it).
- Data: one file per drug class, `data/meds-cardio-<class>.js`, built with `data/medication-helpers.js` (`Med(...)` gives the five sections `uses`, `moa`, `avoid`, `se`, `pearls`; `Guide(...)` is for cross-class "which drug when" tables), gathered by `data/medications-cardio-part-1.js` (`window.CARDIO_PART1_MEDICATIONS`). Each entry lists `lectures` that teach it.
- Ids are `med-*` or `guide-*`; question ids are `<id>|<index>`: only append. Run `node scripts/validate-medications-cardio-part-1.cjs` after editing.

## Cardio Part 2 Medications tool

- Same engine and shape as the Cardio Part 1 Medications tool (`createDiseasesTool(...)` with `flashcards: true`), launched from the `data-course-tools="cardio-part-2"` row.
- Data: one file per drug class, `data/meds-cardio2-<class>.js` (built with `data/medication-helpers.js`), gathered by `data/medications-cardio-part-2.js` (`window.CARDIO_PART2_MEDICATIONS`). Lecture tags use the Part 2 lecture titles. Facts not on the slides are marked "(standard teaching)". Hypertension uses of shared drugs stay in Part 1.
- Ids `med-*` / `guide-*`; question ids `<id>|<index>`: only append. Run `node scripts/validate-medications-cardio-part-2.cjs` after editing.

## Cardio Part 2 Diseases tool

- Same engine as the other Diseases tools, launched from the `data-course-tools="cardio-part-2"` row (`#cardio2-diseases-launch`).
- Data: one file per lecture, `data/diseases-cardio2-<lecture>.js` (id prefixes `arr-`, `syn-`, `mgmt-`, `iep-`, `vas1-`, `vas2-`, `vsurg-`, `shk-`, `pharm-`), gathered by `data/diseases-cardio-part-2.js` (`window.CARDIO_PART2_DISEASES`). AF is split into four `mgmt-af-*` entries; Arrhythmia Pharmacology's entries are drug toxicities. Facts not on the slides are marked "(standard teaching)".
- Ids `<disease id>|<index>`: only append. Run `node scripts/validate-diseases-cardio-part-2.cjs` after editing (prompts must be unique across the tool; a new lecture file must be added to its list).

## Cardio Part 2 Concepts tool

- Same engine and shape as the Cardio Part 1 Concepts tool (`createDiseasesTool(...)` with concept labels), launched from the `data-course-tools="cardio-part-2"` row (`#cardio2-concepts-launch`).
- Data: one file per lecture, `data/concepts-cardio2-<lecture>.js` (id prefixes `arrc-`, `sync-`, `mgmtc-`, `iepc-`, `vas1c-`, `vas2c-`, `vsurgc-`, `shkc-`, `pharmc-`), gathered by `data/concepts-cardio-part-2.js` (`window.CARDIO_PART2_CONCEPTS`). Same four sections per concept (`idea`, `chain`, `bedside`, `traps`); mostly "what happens if" questions. Anything the slides only imply is marked "Clarification (standard physiology)".
- Ids `<concept id>|<index>`: only append. Run `node scripts/validate-concepts-cardio-part-2.cjs` after editing (prompts must be unique across the tool; a new lecture file must be added to its list).

## Cardio Part 2 Scores & Calculators tool

- Same Diseases engine (`createDiseasesTool(...)`, `score/scores` labels), launched from the `data-course-tools="cardio-part-2"` row (`#cardio2-scores-launch`). Data: `data/scores-cardio-part-2.js` (`window.CARDIO_PART2_SCORES`), grouped by Part 2 lecture.
- Each entry (`sc-*`) has sections `calc` (live calculator, always first), `use`, `traps`. Calculators are built with `window.ScoreCalc` from `data/score-helpers.js`: `points(id, items, bands)` for tick-box scores, `form(id, fields)` + `formula(id, fn)` for number/select ones; the calculator id must equal the entry id. `score-calc.js` (loaded after `diseases.js`) makes them live via event delegation, so section HTML stays static.
- Questions are short cases that need the calculation. Ids `<id>|<index>`: only append. Facts not on the slides are marked "(standard teaching)". Run `node scripts/validate-scores-cardio-part-2.cjs` after editing (it also checks each formula against worked examples; add one for any new formula).

## Cardio Part 2 Rhythm strips tool

- Custom engine `rhythm-strips.js` (loaded after `score-calc.js`), launched from the `data-course-tools="cardio-part-2"` row (`#cardio2-rhythms-launch`, view `#cardio2-rhythms-view`). Modes: Learn by group (gallery with "New strip"), Name that rhythm (15 strips, a miss comes back once), Read it step by step (rate by the 6-second method, regularity, P, PR, QRS, name). Space = `rhythm-next`.
- Strips are drawn fresh each time by `data/rhythm-synth.js` (`window.RhythmSynth.make(spec, seed)`: pure, no DOM; 6-second strip, standard paper). Generators: sinus, pause, ectopic (pac/pvc, `every`), af, flutter, mat, svt, junctional, wenckebach, mobitz2, chb, idioventricular, vt, torsades, vf, asystole.
- Data: `data/rhythm-strips-cardio-part-2.js` (`window.CARDIO2_RHYTHMS`): `steps` (answer sets for step mode) and groups of rhythms `R(id, name, gen, rate range, look, clue, mgmt, steps, confuse)`. Ids `rs-*` are progress keys (`pasem2:rhythms:cardio-part-2:progress`): never rename. Arrest rhythms have `rate: null` and `steps: null`.
- Run `node scripts/validate-rhythm-strips-cardio-part-2.cjs` after editing (draws every rhythm 60 times and checks the counted rate stays in range; rhythms with identical step answers must have non-overlapping rates).

## Struggles tool

- Cardio Part 1 tool built from Anna's starred Quizlet cards: `struggles.js` (engine) and `data/struggles-cardio-part-1.js` (`window.CARDIO_PART1_STRUGGLES`: `corrections` list + `groups`). Recall style: each group shows one targeted `learn` card, then its questions; a miss shows the card again and requeues the question.
- Each question is `Q(prompt, answer, [3 wrong], explanation, hint?)`; H shows the hint. Group `source` is the Quizlet name, shown only as a label. Ids are `<group id>|<index>`: only append.
- Check new cards against the slides and add any fix to `corrections`. Run `node scripts/validate-struggles-cardio-part-1.cjs` after editing.

## EKG tools

- Course-specific tools for the `ekg` course launch from the `data-course-tools="ekg"` block, laid out (2026-11-17, Anna found it cluttered) as compact `.ekg-hub-card` buttons in numbered sections: 1 Learn (Start here, Flashcards), 2 Practice (Rhythm strips: ladder, workbook, trainer, look-alikes; 12-lead: axis, MI, patterns), 3 Exam prep (Practice exam, Examplify), then a 4 Lecture heading. Put any new EKG tool in the matching section as a short one-line card; keep the launch ids. The written content is the `ekg-interpretation` lecture (`data/ekg-interpretation.js`).
- Start here (first in the EKG tools row, `#ekg-learn-launch`): Anna said the practice tools felt overwhelming without a foundation (2026-11-13), so `ekg-learn.js` + `data/ekg-learn.js` (`window.EKG_LEARN`) teach EKG from zero: parts → lessons (ids `learn-*` are progress keys under `pasem2:ekg-learn:progress`) → one-idea pages with a figure (`heart` conduction diagram, `sync` animated heart + beat, annotated `beat`, `paper`, `rate` ruler, generated `strip` by `ekr-*` id, real `workbook` strip, and 12-lead pieces from `window.EKGDraw`: `twelve`, `leadmap`, `axis`, `pattern`, `damage`), then 3-4 easy checks, a `remember` list and `practice` buttons (`launch` = a tool's launch id, `then` = a mode button inside it). Plain language, why before what, calm. Run `node scripts/validate-ekg-learn.cjs`.
- Workbook strips: `ekg-workbook.js` (engine) and `data/ekg-workbook.js` (`window.EKG_WORKBOOK`): Anna's 174 Independent EKG Workbook strips (`images/ekg-workbook/wb-NNN.webp`, cropped so the blanks and textbook captions don't give answers away) with the workbook answer key verbatim in `key`. Modes: step by step (regularity, rate band, P, PR, QRS, name), Name that strip (misses return), Browse; filter by rhythm group, Not tried yet, My misses. Where the site's answer differs from the key, `note` says why (strip 2: key says NSR at 50 bpm, site says sinus bradycardia). Ids `wb-NNN` are progress keys. Run `node scripts/validate-ekg-workbook.cjs` after editing.
- Rhythm trainer: the same engine as Cardio Part 2 Rhythm strips. `rhythm-strips.js` is now a factory, `createRhythmTool(cfg)`, called once per course (prefix `cardio2-rhythms` and `ekg-rhythms`); data `data/rhythm-strips-ekg.js` (`window.EKG_RHYTHMS`, ids `ekr-*` are progress keys under `pasem2:rhythms:ekg:progress`). It covers every objective 8/9 rhythm plus torsades, and the `mgmt` field shows as "Why it happens" (pathophysiology). Synth generators added for it: `atach`, and `ectopic` with `type: "pjc"`. Run `node scripts/validate-rhythm-strips-ekg.cjs` (and the Cardio Part 2 one if the synth changes).
- Look-alikes & study guide: `ekg-compare.js` + `data/ekg-compare.js` (`window.EKG_COMPARE`): `chart` = the EKG Rhythm Study Guide rows verbatim (ids `sg-*`), drilled as Fill in the chart / Name the row; `pairs` = look-alike sets of `ekr-*` rhythm ids (ids `lk-*`) with `ask` (the one question), a difference table and `why`, drilled on fresh strips. Run `node scripts/validate-ekg-compare.cjs`.
- Axis trainer: `ekg-axis.js` + `data/ekg-axis.js` (`window.EKG_AXIS`: `quadrants` by the lead I / aVF method, `causes` ids `ax-*`). Complexes and the hexaxial wheel are drawn from a random angle (projection on each limb lead). Modes: lead I + aVF, all six limb leads, what shifts the axis.
- MI locator: `ekg-mi.js` + `data/ekg-mi.js` (`window.EKG_MI`: per-lead normal complexes in mm, the 12-lead layout, `walls` ids `wall-*` with ST/reciprocal leads, artery and reciprocal answer, `damage` ids `dmg-*`). Modes: Locate the STEMI (drawn 12-lead, wall → artery → reciprocal), STEMI or not? (measure: >1 mm limb, >2 mm precordial, 2+ leads same area), Ischemia/injury/infarction. Run `node scripts/validate-ekg-mi.cjs` (also checks the axis data).
- Pattern gallery: `ekg-patterns.js` (draws schematic beats from overrides on a normal complex: P shapes, QRS shapes rsr/notchR/slurS/delta/paced, ST/T shapes, U waves, pacer spikes, sine) + `data/ekg-patterns.js` (`window.EKG_PATTERNS`, 26 patterns `pt-*` in 4 groups with `look` criteria from the deck, `why`, 3 `confuse` ids). Modes: gallery, Name that pattern, What would you see?. Run `node scripts/validate-ekg-patterns.cjs`.
- Practice exam (2026-11-16, its own block at the top of the EKG tools, `#ekg-mock-launch`): rebuilt to the real exam's announced format: 15 MCQs (1 pt), 20 rhythm strips (2-4 pts: sinus 2, atrial/junctional/ventricular/early beats 3, AV blocks 4), 5 12-leads (7 pts), 40 questions, 110-minute timer, on-screen calculator, final interpretation required. `ekg-mock.js` (engine) + `data/ekg-exam.js` (`window.EKG_EXAM`: format, strip slots, 12-lead fields and cases `tw-*`) + `data/ekg-twelve-synth.js` (`window.TwelveSynth.make(case, seed)`: standard 3x4 12-lead plus 10-s lead II strip, components per lead from frontal vectors + V1-V6 amplitudes). Strips/12-leads: half the points for the systematic read (deck order: regularity, rate, axis, P, QRS, PR, ST), half for the final interpretation (our split; the real rubric isn't published). Rate counts within 10% (min ±8). Strips come from workbook images + generated strips; MCQs = 3 class polls + 12 lecture questions from different objectives. Modes: timed/untimed full exam (answers hidden until hand-in), one part with answers checked as you go, Class poll review (`data/ekg-class-polls.js`, ids `poll-<n>`: only append). In-progress exams are saved in `pasem2:ekg-mock:current` (items stored as plain data with seeds) and resumable; best full-exam score in `pasem2:ekg-mock:progress` `exam110`. Anna may report that the real strip or 12-lead format differs: adjust `FIELDS`/scoring there. Run `node scripts/validate-ekg-mock.cjs` (draws every 12-lead case 40 times and checks axis quadrant and rate match its answers).
- Rhythm ladder (2026-11-15, first in the EKG practice tools grid, `#ekg-ladder-launch`): `ekg-ladder.js` + `data/ekg-ladder.js` (`window.EKG_LADDER`). Plain "Which rhythm is it?" multiple choice on fresh strips, by rhythm group: each group has rounds (rung ids `ld-*` are progress keys under `pasem2:ekg-ladder:progress`) that start with a small set of that group's rhythms and end with the whole group; a last round mixes everything. Anna rejected a tap-the-strip/feature version: keep it multiple choice, and every answer choice in a group's round must come from that same group (the validator checks it). After an answer the strip is marked up and a miss shows the rhythm's one-line clue; misses return in the round and in Redo misses; stars per round. Keep UI text short and neutral: no "beginner" or "from zero" wording. Run `node scripts/validate-ekg-ladder.cjs`.
- Flashcards (2026-11-15, its own block above the practice tools grid, `#ekg-flash-launch`): Anna asked for Quizlet on the site: 16 term/definition sets, one per objective (`data/ekg-flashcards.js`, `window.EKG_FLASHCARDS`, set ids `fc-1`..`fc-16` in objective order, cards `[tag, term, def]`), studied in a Quizlet Learn clone (`ekg-flashcards.js`): one side on top, 4 choices from the other side, wrong choices from the same set (same `tag` first), "Answer with" Definition/Term/Both, rounds of 7 (10 for All sets), misses come back in the round, Familiar after one first-try right, Mastered after a second in a later round. Card ids `<set id>|<index>` are progress keys (`pasem2:ekg-flashcards:progress`): only append. Terms and definitions must be unique within a set. Facts not on the slides are marked "(standard teaching)". Run `node scripts/validate-ekg-flashcards.cjs`.
- Learn the 12-lead (Anna, 2026-11-17, `#ekg-twelve-learn-launch`, second card in the Learn row): picture-first guided path on `learn-path.js`, `ekg-twelve-learn.js` (figures: full 12-leads from `TwelveSynth` with highlighted leads, single beats per lead from `TwelveSynth.beat`, electrode body map, limb-lead wheel, chest slice, toward/away rule, axis slider, walls + coronary arteries, colored lead map, ST measuring, bundle branches, 8-step read) + `data/ekg-twelve-learn.js` (`window.EKG_TWELVE_LEARN`, 13 lessons `t12-*` = progress keys under `pasem2:ekg-twelve-learn:progress`). 12-leads reuse the practice exam's `tw-*` cases. Run `node scripts/validate-ekg-twelve-learn.cjs` (and validate-ekg-mock if the synth changes).
- Catalog (Anna, 2026-11-18, `#ekg-catalog-launch`, 4th card in the Learn row): look-only gallery, no quizzing. `ekg-catalog.js` + `data/ekg-catalog.js` (`window.EKG_CATALOG`): two parts (Rhythm strips, 12-lead) → groups → findings `cat-*` (name, `what`, `look` list, `examples`). Examples are real labeled tracings only: `wb-NNN` (workbook + key), `exq-N` (Examplify + Anna's answer), `deck-N` (EKG Interpretation slide N picture in `images/ekg-catalog/`, titled by the slide in `DECK`). A finding with no real picture keeps an empty gallery. The 12-lead part's "Rhythm on a 12-lead" group is built from the strip findings' 12-lead examples. Run `node scripts/validate-ekg-catalog.cjs`.
- Step-by-step strip questions keep the strip in a sticky `.wb-sticky` box and fold answered steps (`.rs-part-done`): Anna found scrolling between strip and questions annoying (2026-11-13).

## Guided "from zero" paths

- Shared lesson engine: `learn-path.js` (`window.createLearnPath(cfg)`): parts → lessons (one idea per page with a figure) → 3+ easy checks → `remember` list → `practice` buttons (`launch` = a tool's launch id, optional `then`; or `objective: { course, lecture, mode, id }`, opened through `window.PasemStartObjective` in `app.js`). Each path supplies its own figure renderer. Lesson ids are progress keys: never rename.
- EKG "Start here": `ekg-learn.js` (figures) + `data/ekg-learn.js` (see EKG tools).
- Shock, Pressors & Fluids "Learn it from zero" (Anna, 2026-11-13): `shock-learn.js` (figures: circuit, equation, ventricle, Starling curve, receptors, dopamine slider, MAP slider, IABP, compartments, capillary, tonicity…) + `data/shock-learn.js` (`window.SHOCK_LEARN`, 15 lessons `shl-*`, progress `pasem2:shock-learn:progress`). Its gold card renders at the top of the Cardio Part 2 Shock lecture through `window.PasemLectureIntros["shock-pressors-fluids"]` (called by `app.js` `renderStudy`). Physiology first, facts from the deck, anything else marked standard teaching. Run `node scripts/validate-shock-learn.cjs` after editing.

## Content rules

- Keep each lecture's curriculum in its own `data/*.js` file and connect it from `data/semester.js`.
- Structure curriculum as course → lecture → objectives → cards/test/apply.
- Learn, Test, and Apply show objective launchers and then run one selected objective one card/question at a time.
- Recall owns no separate content. It is one lecture-wide sequence across all objectives, grouped Learn → linked Test → linked Apply for each card.
- Use one learning card per concept. Prefer rich `html` with comparison tables, high-yield boxes, and genuinely useful mnemonics when the lecture supports them.
- Test questions should be direct recall.
- Apply questions should be clinical vignettes with plausible distractors.
- `correct` is a zero-based answer index.
- `card` is an optional zero-based Learn-card index used by Recall. If omitted, the engine links by keyword similarity.
- IDs use lowercase letters, numbers, and dashes and must remain stable after progress is saved.
- Never add patient-identifying information.

## Disease Walkthrough cases

- Add cases to the matching `data/walkthrough/cases-*.js` file with `DiseaseWalkthrough.makeCase(...)`.
- Each case moves through hallmark presentation, a four-option diagnostic choice, conclusive result, a four-option diagnosis, and a four-option treatment.
- Shuffle the diagnosis-ready case order at the start of every walkthrough session and shuffle each answer set. Keep management-only or pre-confirmed cases listed in `data/walkthrough/config.js`; those remain available in the treatment drills. Do not reveal the disease title or source lecture before treatment is completed.
- Keep every clue visible in the opening presentation. The mode teaches recognition and should not depend on hidden history.
- Use a clinically meaningful variant only when population, severity, allergy, complication, or immune status changes the diagnostic or treatment path.
- The treatment answer is the lecture's drug or management choice for that exact case. Doses are excluded unless the curriculum specifically tests them.

## Diagnosis Drills

- Quizlet-style diagnosis pairs live in `data/diagnosis-drills.js` as four independent sections: classification, hallmark presentation, treatment matching, and diagnostic workup.
- Present the description as the prompt and the diagnosis or clinical scenario as one of four choices.
- Shuffle question order and answer position whenever a section starts. Reveal the complete pair only after the correct answer.

## Disease Geography Lab

- Regional disease data lives in `data/geography.js`. Include conditions only when geography materially helps recognition or the lecture explicitly teaches a distribution.
- Country geometry lives in generated `data/world-map.js` and comes from Natural Earth 1:110m Admin 0 Countries. Rebuild it with `scripts/build-world-map.cjs` rather than hand-drawing continent paths.
- Keep the 2D map as a memory aid; country outlines should be recognizable, while disease markers represent broad regional anchors rather than exact incidence boundaries.
- Preserve the four paths: guided map learning, travel-to-disease quiz, disease-to-region quiz, and the interactive regional atlas.
- Shuffle the guided and quiz sequences on every start. Keep four answer choices and allow retry after a miss.
- Use only supplied lecture content. A wrong diagnostic order receives a plausible non-diagnostic result from the shared engine.
- IDs must be unique and stable. Run `node scripts/validate-walkthrough.cjs` after editing case data.

## Validation

Open `index.html` through a local HTTP server, click every course, and check the browser console for errors. GitHub Pages deploys from `main` through the included workflow.
