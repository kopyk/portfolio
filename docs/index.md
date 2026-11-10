---
title: Writing samples
description: Writing samples by Jordan Yan, grouped by the kind of documentation team each one is written for.
slug: /
sidebar_label: All samples
---

These samples are original work written for this portfolio. Each one opens with an **About this sample** note: who it is for, what it had to do, what limited it, and what I decided.

Companies and products in the samples are fictional unless a page says otherwise. Pages that summarize a law cite the law itself and are not legal advice.

## Trust and safety documentation

For teams that write for users, parents and creators on consumer platforms.

- [Family safety guides](./family-safety/index.md): a help-center set for guardians. One concept page, three task guides and a quick reference, held to a grade 8 reading level by an automated check.
- [COPPA for product teams](./compliance/coppa-for-product-teams.md): what the children's privacy rule requires and what it changes in day-to-day product work.
- [Writing for translation](./process/writing-for-translation.md): a one-page guide to source text that translates cleanly.

## Policy and procedure writing

For compliance, risk and operations teams in finance, insurance and fintech.

- [Policy and procedure set: electronic transfer errors](./policy-procedure/index.md): one Regulation E requirement written as a policy, a procedure and a customer notice, with a traceability table across all three.
- [COPPA for product teams](./compliance/coppa-for-product-teams.md): a regulation explained for the people who have to act on it.

## Regulated product and audit documentation

For quality, regulatory and security compliance teams.

- [Documentation update process](./process/doc-update-process.md): the change-control process this site runs on, with risk classes, a fast track for urgent safety fixes and a review schedule.
- [Policy and procedure set](./policy-procedure/index.md): controlled documents with owners, versions and revision history.
- [21 CFR Part 11 for documentation teams](./compliance/fda-part-11-for-documentation-teams.md): electronic records and signatures, with an audit-readiness checklist.
- [The GLBA Safeguards Rule](./compliance/glba-safeguards-rule-evidence-guide.md) and [the HIPAA Security Rule](./compliance/hipaa-security-rule-for-engineers.md): security requirements mapped to documents, evidence and owners.
- [Export controls for technical writers](./compliance/export-controls-for-technical-writers.md): when to stop and ask before sharing a document.

## Regulatory range

Six regulations, each from a different field, each written for the people who have to act on it, and each in a different form. Every requirement is cited to the rule text.

| Sample | Field | Form | Source |
| --- | --- | --- | --- |
| [COPPA for product teams](./compliance/coppa-for-product-teams.md) | Children's privacy | Explainer with design-review questions | 16 CFR Part 312 |
| [The HIPAA Security Rule for engineering teams](./compliance/hipaa-security-rule-for-engineers.md) | Health data security | Requirements crosswalk | 45 CFR Part 164, Subpart C |
| [The GLBA Safeguards Rule](./compliance/glba-safeguards-rule-evidence-guide.md) | Financial data security | Control-to-evidence guide | 16 CFR Part 314 |
| [21 CFR Part 11 for documentation teams](./compliance/fda-part-11-for-documentation-teams.md) | Medical devices and pharma | Explainer with an audit-readiness checklist | 21 CFR Part 11 |
| [Export controls for technical writers](./compliance/export-controls-for-technical-writers.md) | Aerospace and defense | Decision guide with a flowchart | 22 CFR Parts 120 to 130; 15 CFR chapter VII, subchapter C |
| [Electronic transfer errors](./policy-procedure/index.md) | Consumer banking | Policy, procedure and customer notice | 12 CFR 1005.11 |

## How this site is built

The site is a docs-as-code project. Pages are Markdown in a [public Git repository](https://github.com/kopyk/portfolio). Every change runs through a build check, link checks, a prose linter and a reading-level test before it goes live. The [README](https://github.com/kopyk/portfolio#readme) explains the structure and the contribution workflow.

More samples, in AI and developer documentation, are at [ai.jordanyan.com](https://ai.jordanyan.com).
