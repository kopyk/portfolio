---
title: Writing for translation
description: A one-page guide to writing English source text that translates cleanly, with the rules this site follows.
sidebar_label: Writing for translation
---

import AboutSample from '@site/src/components/AboutSample';

<AboutSample
  roles={['Trust and safety documentation', 'Regulated product documentation']}
  audience="Writers of English source content that will be translated, by people or by machine."
  goal="Cut translation errors and cost at the source, where one fix carries into every language."
  constraints="One page. Each rule has an example. The rules are ones this site's own pages follow."
  tools="Markdown, Docusaurus i18n, Vale.">

- **Rules a linter can check come first.** Several of these are Vale rules in this repository, so a writer hears about a problem before a translator does.
- **I have not managed a localization program.** This guide shows that I write source text with translation in mind and have set up the tooling. The Spanish page on this site is a draft that a fluent reviewer has not yet checked.

</AboutSample>

Good translation starts with the source. These rules make English text clearer for every reader, and they remove the most common causes of translation errors.

## Sentences

| Rule | Instead of | Write |
| --- | --- | --- |
| One idea per sentence. Aim for 20 words or fewer. | Select Save, which stores your settings and returns you to the dashboard, where you can review them. | Select **Save**. The dashboard opens and shows your settings. |
| Use active voice and name the actor. | The request must be approved. | Your child must approve the request. |
| Keep "that" and other small words. | Check the code you entered is correct. | Check that the code you entered is correct. |
| Put the condition first, then the action. | Select Forgot PIN if you cannot remember your PIN. | If you forgot your PIN, select **Forgot PIN**. |

## Words

| Rule | Instead of | Write |
| --- | --- | --- |
| One term for one thing. Do not vary for style. | guardian PIN, passcode, security code | guardian PIN |
| No idioms or figures of speech. | You are good to go. | Setup is complete. |
| No phrasal verbs when a single verb exists. | Fill in, find out, carry out | Enter, learn, do |
| Do not use a noun string of more than two nouns. | account link request code | the code for the link request |
| Avoid Latin abbreviations. | e.g., i.e., etc. | for example, that is, and so on |
| Do not use "may" for ability. | You may block a player from their profile. | You can block a player from their profile. |

## Text that surrounds the words

- **Write dates with the month as a word.** "November 10, 2026" cannot be misread. "11/10/2026" can.
- **State units and currency.** Write "$50 (US dollars)" the first time if readers outside the country may see it.
- **Do not build sentences from fragments.** A sentence split across a variable or a UI string cannot be reordered for another grammar.
- **Leave room.** Translated text is often longer than English. Do not design a table or button that only fits the English.
- **Keep text out of images.** Use captions and callouts in the page text.
- **Mark what must not be translated.** Product names, UI labels that stay in English and code all need a note for the translator.

## Give the translator context

Every page that goes to translation carries three things:

1. **A term list**: each product term, its meaning, and whether to translate it.
2. **The audience and reading level**, so the translator can match the register.
3. **The UI language**: whether the product's own screens are translated. If they are not, the translator needs to know how to show UI labels.

## How this site is set up

- English is the source language. Docusaurus i18n is on, with Spanish (`es`) as the first target.
- Translated pages live in `i18n/es/` and mirror the paths under `docs/`. A page with no translation falls back to English.
- Interface text in custom components uses the Docusaurus `<Translate>` API, so it is extracted with the rest of the UI strings.
- The family safety [quick reference](/docs/family-safety/quick-reference) is the first page prepared for translation. Its term list is in [`i18n/es/TERMS.md`](https://github.com/kopyk/portfolio/blob/main/i18n/es/TERMS.md).
