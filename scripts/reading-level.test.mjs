// Run with: npm test
import assert from 'node:assert/strict';
import {test} from 'node:test';
import {countSyllables, score, toPlainText} from './reading-level.mjs';

test('syllable estimates for words the guides use', () => {
  const expected = {
    the: 1, child: 1, chat: 1, safe: 1, code: 1, games: 1, saved: 1, linked: 1, blocked: 1,
    select: 2, account: 2, request: 2, player: 2, message: 2, approve: 2, settings: 2, trusted: 2,
    guardian: 3, username: 3, dashboard: 2, example: 3, family: 3,
    emergency: 4, information: 4,
  };
  for (const [word, syllables] of Object.entries(expected)) {
    assert.equal(countSyllables(word), syllables, word);
  }
});

test('plain text drops front matter, code, components and link targets', () => {
  const page = [
    '---', 'title: Example', '---', '',
    "import Steps from '@site/src/components/Steps';", '',
    ':::note', 'Kept sentence.', ':::', '',
    '<Steps>', '', '1. Select **Save**.', '', '</Steps>', '',
    '```js', 'const hidden = true;', '```', '',
    'Read [the guide](./guide.md).',
  ].join('\n');
  const text = toPlainText(page);
  assert.match(text, /Kept sentence\./);
  assert.match(text, /Select Save\./);
  assert.match(text, /Read the guide\./);
  assert.doesNotMatch(text, /hidden|guide\.md|import|title/);
});

test('headings and table rows are not scored', () => {
  const text = toPlainText('## Pick a setting\n\n| Setting | Meaning |\n| --- | --- |\n| Off | No one |\n\n- Call us\n- Write to us.');
  assert.doesNotMatch(text, /Pick|Setting|No one/);
  assert.equal(score(text).sentences, 2);
});

test('known passages land near their published grade', () => {
  const simple = score('The cat sat on the mat. The dog ran to the park. We like to play.');
  assert.ok(simple.grade < 2, `simple passage scored ${simple.grade}`);
  const dense = score(
    'Organizations implementing comprehensive documentation governance frameworks frequently encounter considerable institutional resistance, particularly when established operational procedures require substantial modification.',
  );
  assert.ok(dense.grade > 16, `dense passage scored ${dense.grade}`);
});
