# Jordan Yan: portfolio

Source of [jordanyan.com](https://www.jordanyan.com). I am a Technical Writer II at Zone 5 Technologies, and I write regulated, safety and compliance documentation.

This repository is a docs-as-code project. Pages are Markdown, changes go through pull requests, and every change is built, linted and tested before it is published.

## Writing samples

| Sample | Written for | What it shows |
| --- | --- | --- |
| [Family safety guides](https://www.jordanyan.com/docs/family-safety) | Trust and safety documentation | A help-center set for guardians: one concept page, three task guides, a quick reference. Reading level is tested in CI. |
| [COPPA for product teams](https://www.jordanyan.com/docs/compliance/coppa-for-product-teams) | Trust and safety; policy and procedure | A regulation explained for the people who act on it, cited to the rule text. |
| [Policy and procedure set](https://www.jordanyan.com/docs/policy-procedure) | Policy and procedure writing | One Regulation E requirement as a policy, a procedure and a customer notice, with a traceability table. |
| [Documentation update process](https://www.jordanyan.com/docs/process/doc-update-process) | Regulated product and audit documentation | The change-control process this repository follows. |
| [Writing for translation](https://www.jordanyan.com/docs/process/writing-for-translation) | Trust and safety documentation | A one-page guide to source text that translates cleanly. |

AI and developer documentation samples are in a separate repository, [kopyk/ai-docs](https://github.com/kopyk/ai-docs).

## How the site is organized

```text
static/index.html      Home page. Hand-written HTML, CSS and JavaScript, copied to the site root as is.
docs/                  Writing samples. One folder per sample set. Built by Docusaurus under /docs.
  family-safety/         Guardian guide set (concept, tasks, quick reference)
  compliance/            Regulation explainers
  policy-procedure/      Policy, procedure and customer notice from one requirement
  process/               How these docs are changed and written
  case-studies/          Past work, process and outcomes only (drafts until complete)
  creator/               Roblox Studio and Luau tutorial (draft until run in Studio)
i18n/es/               Spanish: UI strings, translated pages, and the term list for translators
examples/filtered-sign/ Luau code for the creator tutorial, with unit tests
src/components/        AboutSample, Steps, Checklist
src/css/custom.css     Styles for the docs and the components
styles/Portfolio/      Vale rules: the style guide in checkable form
scripts/               Reading-level check and its tests
sidebars.js            Navigation for /docs
CHANGELOG.md           Dated list of content changes
```

Three choices shape the structure:

- **Samples are grouped by reader, then tagged by role type.** A folder holds everything one audience needs. The "About this sample" note on each page and the [samples index](https://www.jordanyan.com/docs) say which kind of team the sample is written for.
- **Each set follows concept, task, reference.** A reader can learn how something works, do it, or look it up, and each page does only one of those.
- **Every sample opens with an "About this sample" note** that gives the audience, goal, constraints, tools and decisions.

A page with `draft: true` in its front matter is left out of the published site.

## Checks

GitHub Actions runs these on every push and pull request ([`ci.yml`](.github/workflows/ci.yml)).

| Check | Command | Fails when |
| --- | --- | --- |
| Build | `npm run build` | The site does not build in English or Spanish, or an internal link or anchor is broken |
| Prose style | `vale docs` | A page breaks an error-level rule in [`styles/Portfolio`](styles/Portfolio) |
| Reading level | `npm run check:reading-level` | A page in `docs/family-safety` scores above grade 8 (Flesch-Kincaid) |
| Scorer tests | `npm test` | The reading-level script's own unit tests fail |
| External links | lychee | A link to another site does not resolve |
| Tutorial code | `luau SignRules.spec.luau` | A unit test for the tutorial's module fails |

### The style rules

| Rule | Level | What it catches |
| --- | --- | --- |
| `Condescending` | error | "simply", "easily", "obviously" and similar |
| `Wordiness` | error | "in order to", "utilize", "prior to" and similar |
| `Latin` | error | "e.g.", "i.e.", "etc.", "via" |
| `Terms` | error | Variants of a fixed term, such as "passcode" for "guardian PIN" |
| `LegalCertainty` | error | Phrases that promise a legal outcome |
| `UIVerbs` | warning | "click", "tap" and "press" where "select" fits any device |
| `SentenceLength` | suggestion | Sentences over 30 words |

## Work on the site

You need Node.js 20 or later.

```bash
npm ci
npm start                    # English, with live reload, at http://localhost:3000/docs
npm start -- --locale es     # Spanish
npm run build && npm run serve   # the full site, home page included
```

The home page is a static file, so it appears only in the built site (`npm run serve`), not under `npm start`.

## Contribute a change

The full process, with change classes and the fast track for urgent fixes, is the [documentation update process](https://www.jordanyan.com/docs/process/doc-update-process). In short:

1. Open a branch from `main`.
2. Make the change. Follow the [writing-for-translation guide](https://www.jordanyan.com/docs/process/writing-for-translation).
3. Add an entry to [`CHANGELOG.md`](CHANGELOG.md) with the change class: Minor, Standard, Regulated or Urgent.
4. Run `npm run build`, `npm test` and `npm run check:reading-level`.
5. Open a pull request and state the class. For a Regulated change, re-check the cited source and update the "checked on" date on the page.
6. Merge when the checks pass and the owner approves. The site deploys from `main` ([`deploy.yml`](.github/workflows/deploy.yml)).

To add a page, create the Markdown file under `docs/`, start it with an `<AboutSample>` note, and add its ID to `sidebars.js`.

To translate a page, copy it to the same path under `i18n/es/docusaurus-plugin-content-docs/current/` and translate it using [`i18n/es/TERMS.md`](i18n/es/TERMS.md).

## Content rules

- Samples are original work. Companies and products in them are fictional unless a page says otherwise.
- No employer documents, screenshots or proprietary detail.
- A page about a real product is based on public information and labeled unofficial.
- A page that summarizes a law cites the primary source, carries a "not legal advice" note, and shows the date it was checked.

## Contact

- Email: [jxyan@uh.edu](mailto:jxyan@uh.edu)
- LinkedIn: [linkedin.com/in/jordanxyan](https://www.linkedin.com/in/jordanxyan/)
- Resume: [Jordan_Yan_Resume_2026.pdf](static/Jordan_Yan_Resume_2026.pdf)
