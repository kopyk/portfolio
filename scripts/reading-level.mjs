#!/usr/bin/env node
// Reading-level check for the guardian-facing pages.
//
//   node scripts/reading-level.mjs            check docs/family-safety, fail above grade 8
//   node scripts/reading-level.mjs --max 9 docs/some-dir
//
// It scores each page with the Flesch-Kincaid grade level formula:
//
//   0.39 * (words / sentences) + 11.8 * (syllables / words) - 15.59
//
// The score is a rough guide, not a measure of whether a page is clear. Its
// value here is as a tripwire: if an edit pushes a parent-facing page above
// the limit, the build fails and a person looks at the page again.
//
// Syllables are estimated from spelling, so scores differ a little from other
// tools. The estimate is tested in reading-level.test.mjs.

import {readdirSync, readFileSync, statSync} from 'node:fs';
import {join, relative} from 'node:path';
import {fileURLToPath} from 'node:url';

export const DEFAULT_MAX_GRADE = 8;
export const DEFAULT_DIRS = ['docs/family-safety'];

/** Reduce a Markdown/MDX page to the prose a reader sees. */
export function toPlainText(source) {
  return (
    source
      .replace(/^---\n[\s\S]*?\n---\n/, '') // front matter
      .replace(/```[\s\S]*?```/g, '') // code blocks
      .replace(/\{\/\*[\s\S]*?\*\/\}/g, '') // MDX comments
      .replace(/^import .*$/gm, '')
      // JSX blocks that carry props but no prose of their own, e.g. <AboutSample ...> ... </AboutSample>
      .replace(/<AboutSample[\s\S]*?<\/AboutSample>/g, '')
      .replace(/<[A-Z][\s\S]*?\/>/g, '') // self-closing components
      .replace(/<\/?[A-Za-z][^>]*>/g, '') // remaining tags
      .replace(/^:::.*$/gm, '') // admonition fences
      // Headings and table rows are labels, not sentences. Counting each as a
      // sentence would pull the score down and flatter the page, so only
      // paragraphs and list items are scored.
      .replace(/^#{1,6} .*$/gm, '')
      .replace(/^\s*\|.*$/gm, '')
      .replace(/!\[[^\]]*\]\([^)]*\)/g, '') // images
      .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1') // links: keep the text
      .replace(/\{#[^}]+\}/g, '') // heading ids
      .replace(/[*_`>#]/g, '') // emphasis, code ticks, quotes, heading marks
      // A list item or step is read as its own unit, so end each line that
      // has no final punctuation with a full stop.
      .split('\n')
      .map((line) => line.replace(/^\s*(?:[-+]|\d+\.)\s+/, '').trim())
      .filter(Boolean)
      .map((line) => (/[.!?:]$/.test(line) ? line : `${line}.`))
      .join(' ')
      .replace(/:/g, '.')
  );
}

/** Estimate the syllables in one English word from its spelling. */
export function countSyllables(word) {
  const w = word.toLowerCase().replace(/[^a-z]/g, '');
  if (w.length === 0) return 0;
  if (w.length <= 3) return 1;
  const trimmed = w
    .replace(/(?:[^laeiouy]es|[^dt]ed|[^laeiouy]e)$/, (m) => m[0]) // silent endings
    .replace(/^y/, '')
    .replace(/([aeiou])y([aeiou])/g, '$1-$2'); // "player": the y splits two syllables
  const groups = trimmed.match(/[aeiouy]+/g);
  // Vowel pairs that are usually two syllables: guard-i-an, rad-i-o, vid-e-o.
  const splitPairs = trimmed.match(/(?<![ct])ia(?!l)|io(?!n)|eo/g);
  return (groups ? groups.length : 1) + (splitPairs ? splitPairs.length : 0);
}

export function score(text) {
  const sentences = text.split(/[.!?]+/).filter((s) => /[A-Za-z]/.test(s)).length;
  const words = text.match(/[A-Za-z][A-Za-z'’-]*/g) || [];
  const syllables = words.reduce((sum, word) => sum + countSyllables(word), 0);
  if (sentences === 0 || words.length === 0) {
    return {sentences, words: words.length, syllables, grade: 0};
  }
  const grade = 0.39 * (words.length / sentences) + 11.8 * (syllables / words.length) - 15.59;
  return {sentences, words: words.length, syllables, grade: Math.round(grade * 10) / 10};
}

function listPages(dir) {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) return listPages(path);
    return /\.mdx?$/.test(name) ? [path] : [];
  });
}

function main(argv) {
  const args = [...argv];
  let max = DEFAULT_MAX_GRADE;
  const flag = args.indexOf('--max');
  if (flag !== -1) {
    max = Number(args[flag + 1]);
    args.splice(flag, 2);
  }
  const dirs = args.length > 0 ? args : DEFAULT_DIRS;
  let failed = false;

  for (const page of dirs.flatMap(listPages).sort()) {
    const result = score(toPlainText(readFileSync(page, 'utf8')));
    const ok = result.grade <= max;
    if (!ok) failed = true;
    const name = relative(process.cwd(), page);
    console.log(`${ok ? 'pass' : 'FAIL'}  grade ${result.grade.toFixed(1).padStart(4)}  ${String(result.words).padStart(5)} words  ${name}`);
  }

  if (failed) {
    console.error(`\nOne or more pages score above grade ${max}. Shorten sentences and use plainer words.`);
    process.exit(1);
  }
  console.log(`\nAll pages are at or below grade ${max}.`);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main(process.argv.slice(2));
}
