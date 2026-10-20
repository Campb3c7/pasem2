#!/usr/bin/env node
/* Validates data/diseases-cardio-cardiomyopathies.js (window.CARDIO_DISEASES_CARDIOMYOPATHIES). */
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");
const sandbox = { window: {} };
vm.createContext(sandbox);
for (const file of ["data/disease-helpers.js", "data/diseases-cardio-cardiomyopathies.js"]) {
  vm.runInContext(fs.readFileSync(path.join(root, file), "utf8"), sandbox, { filename: file });
}

const lecture = sandbox.window.CARDIO_DISEASES_CARDIOMYOPATHIES;
const errors = [];
const fail = (msg) => errors.push(msg);

const REQUIRED = ["cmp-general", "cmp-hcm", "cmp-arvc", "cmp-dcm", "cmp-rcm", "cmp-myocarditis", "cmp-ppcm", "cmp-takotsubo"];
const ID_RE = /^[a-z0-9-]+$/;
const MARKUP_RE = /<\/?[a-zA-Z][^>]*>|&[a-zA-Z]+;|&#\d+;/;

if (!lecture || !Array.isArray(lecture.diseases)) {
  console.error("window.CARDIO_DISEASES_CARDIOMYOPATHIES is missing or has no diseases array");
  process.exit(1);
}
if (lecture.id !== "cardiomyopathies") fail(`lecture id should be "cardiomyopathies", got "${lecture.id}"`);
if (lecture.title !== "Cardiomyopathies") fail(`lecture title should be "Cardiomyopathies", got "${lecture.title}"`);

const diseaseIds = new Set();
const prompts = new Set();
let questionCount = 0;

function plainCheck(where, text) {
  if (typeof text !== "string" || !text.trim()) fail(`${where}: empty text`);
  else if (MARKUP_RE.test(text)) fail(`${where}: contains HTML tag or entity: ${text}`);
}

for (const disease of lecture.diseases) {
  const id = disease.id;
  if (!ID_RE.test(id)) fail(`bad disease id "${id}"`);
  if (!id.startsWith("cmp-")) fail(`disease id "${id}" must start with "cmp-"`);
  if (diseaseIds.has(id)) fail(`duplicate disease id "${id}"`);
  diseaseIds.add(id);
  plainCheck(`${id} name`, disease.name);
  plainCheck(`${id} blurb`, disease.blurb);

  if (!Array.isArray(disease.sections) || !disease.sections.length) fail(`${id}: no sections`);
  const sectionIds = new Set();
  for (const section of disease.sections || []) {
    if (!ID_RE.test(section.id)) fail(`${id}: bad section id "${section.id}"`);
    if (sectionIds.has(section.id)) fail(`${id}: duplicate section id "${section.id}"`);
    sectionIds.add(section.id);
    if (!section.title || !section.html) fail(`${id}/${section.id}: missing title or html`);
  }

  const questions = disease.questions || [];
  if (questions.length < 6) fail(`${id}: only ${questions.length} questions (need >= 6)`);
  questions.forEach((q, index) => {
    const where = `${id}|${index}`;
    if (q.id !== where) fail(`${where}: id mismatch (${q.id})`);
    if (!sectionIds.has(q.section)) fail(`${where}: unknown section "${q.section}"`);
    plainCheck(`${where} prompt`, q.prompt);
    plainCheck(`${where} explanation`, q.explanation);
    if (!Array.isArray(q.choices) || q.choices.length !== 4) fail(`${where}: needs exactly 4 choices`);
    else {
      q.choices.forEach((c, i) => plainCheck(`${where} choice ${i}`, c));
      if (new Set(q.choices.map((c) => c.trim().toLowerCase())).size !== 4) fail(`${where}: choices not distinct`);
    }
    if (!Number.isInteger(q.correct) || q.correct < 0 || q.correct >= (q.choices || []).length) fail(`${where}: invalid correct index`);
    const key = String(q.prompt).trim().toLowerCase();
    if (prompts.has(key)) fail(`${where}: duplicate prompt "${q.prompt}"`);
    prompts.add(key);
    questionCount++;
  });
}

for (const id of REQUIRED) if (!diseaseIds.has(id)) fail(`required disease "${id}" missing`);

if (errors.length) {
  console.error(errors.join("\n"));
  console.error(`\n${errors.length} error(s)`);
  process.exit(1);
}
const perDisease = lecture.diseases.map((d) => `${d.id}:${d.questions.length}`).join(", ");
console.log(`OK cardiomyopathies: ${lecture.diseases.length} diseases, ${questionCount} questions (${perDisease})`);
