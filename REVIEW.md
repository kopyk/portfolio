# Review list for Jordan

These pages are drafts for you to rewrite and approve. This file lists what
to check before the branch is merged. Delete it when the list is done.

## Before you merge: site settings

- [ ] **Switch GitHub Pages to "GitHub Actions".** Repository Settings, then Pages, then Source. The site used to be served straight from the files on `main`. It is now built by `.github/workflows/deploy.yml`. If you merge without this switch, jordanyan.com will show the README.
- [ ] Decide whether to protect `main` so changes need a pull request. The update process page says changes go through pull requests.

## Every page

- [ ] Rewrite in your own voice. You are the author.
- [ ] The "What I decided and why" notes describe decisions made while drafting. Keep only the ones you would defend in an interview.

## Family safety guides (`docs/family-safety`)

Kitewood and every control, label, limit and time in these pages are invented. Nothing needs checking against a real product. Check for consistency:

- [ ] Control names and choices match across all five pages and the Spanish page.
- [ ] Numbers are consistent: 6-digit code valid 15 minutes, 4-digit PIN, lock after 5 wrong tries for 15 minutes, up to two guardians, reports answered within 2 days.
- [ ] `report-and-block.md` gives general emergency advice (call your local emergency number; 911 in the United States). Confirm you are comfortable with it.
- [ ] Reading level is a script estimate (Flesch-Kincaid, grades 2.9 to 4.0). Paste a page into a second tool if you plan to quote a grade.

## COPPA explainer (`docs/compliance/coppa-for-product-teams.md`)

Each item below was checked against the eCFR text of 16 CFR Part 312 on 2026-11-10. Re-read the cited section yourself before publishing.

- [ ] "Child" is under 13 (§ 312.2). Applies to services directed to children or with actual knowledge (§ 312.3).
- [ ] "Directed to children" factors and the mixed audience definition (§ 312.2). The mixed audience paragraph is my paraphrase.
- [ ] Personal information table (§ 312.2, items 1 to 11). The page does not say which items the 2025 amendments added, because the eCFR does not mark them.
- [ ] Notice content (§ 312.4(d)) is summarized, not complete.
- [ ] Consent methods table (§ 312.5(b)(2)). "Email plus" and "text plus" are limited to operators that do not disclose children's personal information.
- [ ] Exceptions (§ 312.5(c)): the page lists four of nine.
- [ ] Security program elements and third-party assurances (§ 312.8).
- [ ] Retention (§ 312.10).
- [ ] 2025 amendments: published April 22, 2025 at 90 FR 16918, effective June 23, 2025, general compliance date April 22, 2026.
- [ ] The FTC's COPPA FAQ link was removed from Sources because it returned 404 to the link checker. Add it back if it opens for you.
- [ ] Penalty: $53,088 per violation (16 CFR 1.98(d)). No 2026 adjustment had been published on 2026-11-10. **Check again each January.**
- [ ] The "What this changes in your work" paragraphs are practical reading, not statements of law. Decide whether you agree with each.

## Policy and procedure set (`docs/policy-procedure`)

Fernhill Bank, its document numbers, roles, letter codes, phone number and address are invented. Deadlines were checked against the eCFR text of 12 CFR Part 1005 on 2026-11-10.

- [ ] Error list (§ 1005.11(a)); 60-day notice window (§ 1005.11(b)(1)); written confirmation (§ 1005.11(b)(2)).
- [ ] 10 business days, 45 days, 2 business days, 1 business day, 3 business days (§ 1005.11(c)(1) and (c)(2)).
- [ ] 20 business days and 90 days (§ 1005.11(c)(3)).
- [ ] Written explanation, documents, and 5 business days after reversing a credit (§ 1005.11(d)).
- [ ] Reasserted errors (§ 1005.11(e)); records for 2 years (§ 1005.13(b)); "business day" (§ 1005.2(d)).
- [ ] **Paraphrases to check with care in the customer notice:** "Started outside the United States" stands for "not initiated within a state". "A debit card purchase at a store or online" stands for "point-of-sale debit card transaction". Both simplify the rule.
- [ ] Policy 4.6 says a correction includes interest and fees. That reflects the official interpretation, which was not loaded during the check. Confirm in Supplement I to Part 1005 or soften.
- [ ] Policy 4.4 "bank standard" (full provisional credit, no $50 withholding), the day 8 progress check and second-analyst review are invented internal rules.
- [ ] The Regulation T exception to provisional credit (§ 1005.11(c)(2)(i)(B)) is left out on purpose. Decide whether to mention it.
- [ ] The revision history dates (version 1.0 on November 12, 2025) are invented for the sample.

## More regulation samples (`docs/compliance`)

Each page was drafted from the current eCFR text and then checked a second time, independently, on 2026-11-10. Both passes were automated. Re-read each cited section yourself before publishing, and click every eCFR and Federal Register link once in a browser: those sites block automated checks.

Each "About this sample" note lists Vale under tools and describes decisions made while drafting. Edit both to match what you did.

### HIPAA Security Rule (`hipaa-security-rule-for-engineers.md`)

- [ ] Every Required or Addressable label matches §§ 164.308, 164.310 and 164.312. Standards with no implementation specifications are shown as "None".
- [ ] "Addressable does not mean optional" is a plain-language reading of § 164.306(d)(3), not rule wording.
- [ ] The PHI and business associate definitions are compressed to one sentence each (§ 160.103).
- [ ] The "What an engineering team typically owns" column is practice, not law. Examples such as "no shared accounts" and "removes access on the day someone leaves" go beyond the rule text.
- [ ] **Pending change:** the proposed rule at 90 FR 898 (January 6, 2025) was not final on 2026-11-10. The Unified Agenda showed final action projected for July 2027. Recheck before publishing and at each review.

### GLBA Safeguards Rule (`glba-safeguards-rule-evidence-guide.md`)

- [ ] Each row of § 314.4(a) to (j), the 500-consumer and 30-day notification rule, and the § 314.6 exception (fewer than 5,000 consumers; paragraphs (b)(1), (d)(2), (h), (i)).
- [ ] The "Document that states it" and "Evidence a reviewer would expect" columns are practice, not rule text.
- [ ] Coverage is simplified: banks, credit unions, securities firms and insurers have their own regulators, and the page says so only briefly.
- [ ] "The clock can start before the security team confirms anything" is an inference from § 314.4(j)(2).
- [ ] The page is about 1,700 words, a little over the others.

### 21 CFR Part 11 (`fda-part-11-for-documentation-teams.md`)

- [ ] Checklist rows 1 and 2 are marked **Practice**. The rule does not require those documents.
- [ ] The sentence on § 11.1(b) ("Part 11 does not decide which records you must keep") is worded as this page's reading.
- [ ] Summaries of §§ 11.10, 11.100, 11.200 and 11.300 drop detail, including the non-repudiation clause and § 11.200(a)(1)(ii), (a)(2) and (a)(3).
- [ ] FDA's 2003 "Scope and Application" guidance was still listed as final on 2026-11-10. It is used for orientation and labeled as guidance.
- [ ] Quality Management System Regulation: 89 FR 7496, effective February 2, 2026.

### Export controls (`export-controls-for-technical-writers.md`)

This page carries the most risk if a reader misreads it. Have someone with export compliance experience read it before it goes live.

- [ ] It is generic: no program, product, company or part names, and no technical content. Keep it that way when you rewrite.
- [ ] Confirm with your employer that publishing a general explainer on this topic under your name is fine.
- [ ] "Why publishing is not your decision": the ITAR part rests on §§ 120.34(a)(7) and 127.1(a)(1). The EAR part is labeled practical reading.
- [ ] The encryption conditions condense 22 CFR 120.54(a)(5) and (b) and 15 CFR 734.18(a)(5) and (b).
- [ ] "This review did not find a section" that requires marking controlled documents. That is a limit of the review, not a legal conclusion.
- [ ] Penalty figures: $1,271,078 (22 CFR 127.10) and $374,474 (15 CFR 6.3), both from January 2025. **Check again each January.**
- [ ] **Pending change:** proposed rule 91 FR 62361 (October 1, 2026) would revise § 120.33. Comments close November 30, 2026.
- [ ] Flowchart question 3 and the "writer's day" table are practice, not regulatory tests.

## Process pages (`docs/process`)

- [ ] `doc-update-process.md` describes how this repository works. Make sure you will follow it, including the 1-business-day and 5-business-day commitments and the review schedule.
- [ ] `writing-for-translation.md` says you have not managed a localization program. Edit to match your experience.

## Spanish quick reference (`i18n/es`)

- [ ] The translation is a machine-assisted draft and is labeled as a draft on the page. Have a fluent speaker review it, or remove the page before publishing. `TERMS.md` flags "denunciar" against "reportar".

## Case studies (`docs/case-studies`) — not published yet

Both pages have `draft: true`, so they are not on the live site.

- [ ] Fill in every `[JORDAN: ...]` prompt. Sentences outside the prompts come only from your resume.
- [ ] Zone 5: confirm with your employer that the description, and the program names on the home page and resume, are fine to publish.
- [ ] Remove `draft: true`, then add both pages to `docs/index.md` and the home page.

## Creator tutorial (`docs/creator`, `examples/filtered-sign`) — not published yet

Both pages have `draft: true`. API facts were checked against the Roblox Creator documentation on 2026-11-10. The module's 16 unit tests run in CI on the Luau command-line tool.

- [ ] **Run every step in Roblox Studio.** This has not been done. Confirm each "Check" line and each row of the troubleshooting table, in particular the property names in steps 1 and 2 and the `Infinite yield possible` message.
- [ ] Record the Studio version and date in "How this was tested".
- [ ] Remove `draft: true`, then add both pages to `docs/index.md` and the home page.

## Home page and resume

- [ ] The home page hero, focus areas and skills are rewritten. HTML, CSS, JavaScript and Vale are now listed as skills. Add them to the resume too.
- [ ] The resume PDF still has three typos: "AS9100-complaint", "programs avionics side", and the Rusty Dagger bullet. Re-export it. Add a one-line summary that names regulated, safety and compliance documentation.
- [ ] Title: the site says "Technical Writer II". The resume heading says "Technical Writer/ Manufacturing Operations". Make them match.
- [ ] The work-status line about clearance is still on the home page. Remove it if you no longer want defense recruiters.
- [ ] The home page names DC Medicaid (DHCF) and links the two public guides. Your resume says "Washington, D.C. EDI team". Decide which wording you want in both places.
