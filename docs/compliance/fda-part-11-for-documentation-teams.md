---
title: "21 CFR Part 11 for documentation teams"
description: A plain-language explainer of FDA's electronic records and electronic signatures rule, with an audit-readiness checklist for teams that write, approve and store controlled documents.
sidebar_label: 21 CFR Part 11 for documentation teams
---

import AboutSample from '@site/src/components/AboutSample';

<AboutSample
  roles={['Regulated product documentation']}
  audience="Technical writers, document control specialists and quality engineers at an FDA-regulated manufacturer. They create, approve and store controlled documents in electronic systems. They are not lawyers."
  goal="Explain what Part 11 asks of an electronic document system, then give the team yes-or-no questions it can answer before an audit."
  constraints="Every statement of what the rule requires is tied to a section of the rule. Only primary sources. FDA guidance is labeled as guidance. Not legal advice. Current as of the date on the page."
  tools="Markdown, Docusaurus, eCFR and the Federal Register as sources, Vale.">

- **An explainer first, then a checklist.** The explainer gives the reasons. The checklist is the part a team reopens before an audit, so it works without the text above it.
- **Every checklist row names a section.** A "no" answer points the reader to the exact paragraph to read next, and an auditor can see where each question comes from.
- **The eleven closed-system controls sit in one table.** Section 11.10 is a list in the rule. A table keeps it scannable and keeps the paragraph letters that auditors quote.
- **Rule and guidance are kept apart.** FDA's 2003 guidance changes how some paragraphs are enforced, not what they say. It has its own section and a label, so a reader cannot mistake it for rule text.
- **The device quality system rule gets a short section and no ISO text.** The page says where the rule connects to Part 11 and stops there.

</AboutSample>

:::caution Writing sample, not legal advice
This page is a writing sample. It summarizes a federal rule in plain language and leaves out detail. It is not legal advice. Talk to your regulatory affairs or legal team before you make a decision that depends on Part 11.

**Checked against the rule text on November 10, 2026.**
:::

## The short version

[21 CFR Part 11](https://www.ecfr.gov/current/title-21/part-11) is the Food and Drug Administration (FDA) rule on electronic records and electronic signatures. It sets the criteria under which FDA treats them as trustworthy, reliable and generally equivalent to paper records and handwritten signatures ([§ 11.1(a)](https://www.ecfr.gov/current/title-21/section-11.1)).

## When Part 11 applies

This page reads § 11.1(b) to mean that Part 11 does not decide which records you must keep. Other requirements do that. Part 11 applies to records in electronic form that you create, modify, maintain, archive, retrieve or transmit under a records requirement in another FDA regulation. It also applies to electronic records you submit to FDA under the Federal Food, Drug, and Cosmetic Act or the Public Health Service Act (§ 11.1(b)).

FDA guidance calls those other requirements **predicate rules**. The term comes from guidance, not from the rule text.

Systems, controls and their documentation must be readily available for FDA inspection (§ 11.1(e)). Paragraphs (f) through (p) exclude records required by certain food regulations, and electronic signatures obtained under two food labeling provisions (§ 11.1(g) and (h)).

**What this changes in your work:** start from the predicate rule. For each document type, name the regulation that requires it. That list defines which systems this page covers.

## Four definitions to know

These come from [§ 11.3](https://www.ecfr.gov/current/title-21/section-11.3).

| Term | Meaning in the rule |
| --- | --- |
| Electronic record | Any combination of text, graphics, data, audio, pictures or other information in digital form that a computer system creates, modifies, maintains, archives, retrieves or distributes. |
| Electronic signature | A computer data compilation of a symbol or series of symbols that a person executes, adopts or authorizes as the legally binding equivalent of a handwritten signature. |
| Closed system | An environment where the people responsible for the content of the records control access to the system. |
| Open system | An environment where the people responsible for the content of the records do not control access to the system. |

**What this changes in your work:** decide whether each system is closed or open, and write the reason down.

## Controls for closed systems

People who use a closed system must have procedures and controls designed to protect the authenticity, integrity and, when appropriate, confidentiality of records ([§ 11.10](https://www.ecfr.gov/current/title-21/section-11.10)). The section lists eleven controls.

| Paragraph | Control |
| --- | --- |
| (a) | Validate the system for accuracy, reliability, consistent intended performance and the ability to discern invalid or altered records. |
| (b) | Generate accurate and complete copies of records, in human readable and electronic form, for FDA to inspect, review and copy. |
| (c) | Protect records so that you can retrieve them accurately and readily for the whole retention period. |
| (d) | Limit system access to authorized individuals. |
| (e) | Keep secure, computer-generated, time-stamped audit trails of entries and actions that create, modify or delete records. Changes must not obscure earlier information. Keep the audit trail at least as long as the record. |
| (f) | Use operational system checks to enforce the permitted sequence of steps, as appropriate. |
| (g) | Use authority checks so that only authorized individuals use the system, sign a record or alter a record. |
| (h) | Use device checks, as appropriate, to determine that the source of data input or an instruction is valid. |
| (i) | Determine that people who develop, maintain or use the system have the education, training and experience for their tasks. |
| (j) | Establish and follow written policies that hold individuals accountable for actions taken under their electronic signatures. |
| (k) | Control the distribution and use of systems documentation, and keep a time-sequenced audit trail of its revisions. |

**What this changes in your work:** several of these controls are documents your team writes. Paragraph (j) is a policy. Paragraph (i) is a training record. Paragraph (k) puts the system's own manuals under change control.

## Open systems

Open systems need the § 11.10 controls, as appropriate, plus additional measures such as document encryption and appropriate digital signature standards. The aim is to protect records from creation to receipt ([§ 11.30](https://www.ecfr.gov/current/title-21/section-11.30)).

**What this changes in your work:** find the points where records leave systems you control, and ask what protects each record in transit.

## What a signed record must show

A signed electronic record must clearly show three things ([§ 11.50](https://www.ecfr.gov/current/title-21/section-11.50)):

- The printed name of the signer.
- The date and time of signing.
- The meaning of the signature, such as review, approval, responsibility or authorship.

These items must appear in any human readable form of the record, including a screen display and a printout (§ 11.50(b)).

Signatures must also be linked to their records so that nobody can cut, copy or transfer them to falsify a record by ordinary means ([§ 11.70](https://www.ecfr.gov/current/title-21/section-11.70)).

**What this changes in your work:** print an approved document and look for all three items for every signer. A signature block that shows only a name and date is missing the meaning.

## Electronic signature requirements

**General requirements** ([§ 11.100](https://www.ecfr.gov/current/title-21/section-11.100)). Each electronic signature must be unique to one individual and must not be reused by, or reassigned to, anyone else. The organization must verify a person's identity before it assigns that person a signature. Before or at the time of use, people who use electronic signatures must certify to FDA that the signatures are intended as the legally binding equivalent of handwritten signatures.

**Components and controls** ([§ 11.200](https://www.ecfr.gov/current/title-21/section-11.200)). A signature that is not biometric must use at least two distinct identification components, such as an identification code and a password. The first signing in a continuous session uses all components. Later signings in that session must use at least one component that only the individual can execute and that is designed for use only by that individual (§ 11.200(a)(1)(i)). Biometric signatures must be designed so that only their genuine owners can use them.

**Identification codes and passwords** ([§ 11.300](https://www.ecfr.gov/current/title-21/section-11.300)). Where signatures rely on codes and passwords, the rule requires controls that:

- Keep each combination of code and password unique to one person.
- Periodically check, recall or revise code and password issuances.
- Deauthorize lost, stolen or possibly compromised tokens and cards.
- Prevent unauthorized use, and detect and report attempts at it immediately to the system security unit.
- Test tokens and cards initially and periodically.

**What this changes in your work:** shared logins conflict with these sections. Write procedures for issuing accounts, verifying identity and handling a lost token. Keep a copy of the certification sent to FDA where an auditor can find it.

## FDA guidance on scope and enforcement

*This section describes FDA guidance, for orientation only. Guidance is not binding and is not rule text.*

FDA's 2003 guidance, [Part 11, Electronic Records; Electronic Signatures: Scope and Application](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/part-11-electronic-records-electronic-signatures-scope-and-application), was still listed as final on FDA's website on November 10, 2026. In it, FDA says it will interpret the scope of Part 11 narrowly. FDA also says it intends to exercise enforcement discretion for the validation, audit trail, record retention and record copying requirements, and for certain systems in operation before August 20, 1997.

The guidance states that Part 11 remains in effect, that FDA will enforce the other provisions, and that predicate rule requirements still apply.

## Device manufacturers: the quality system context

FDA's 2003 guidance names 21 CFR Part 820 as one example of a regulation whose record requirements bring Part 11 into play. FDA amended Part 820 in a final rule published on February 2, 2024 ([89 FR 7496](https://www.federalregister.gov/documents/2024/02/02/2024-01709/medical-devices-quality-system-regulation-amendments)). The rule took effect on February 2, 2026.

Part 820 is now titled the Quality Management System Regulation. It incorporates ISO 13485:2016 by reference ([§ 820.7](https://www.ecfr.gov/current/title-21/section-820.7)). A manufacturer must document a quality management system that complies with the applicable requirements of that standard and of Part 820 ([§ 820.10(a)](https://www.ecfr.gov/current/title-21/section-820.10)).

**What this changes in your work:** check procedures that cite Part 820 section numbers as they read before February 2, 2026. Many of those sections no longer exist.

## Audit-readiness checklist

Answer yes or no for one system at a time. Raise each "no" or "not sure" with your quality lead. The checklist is a reading aid, not a list of what an inspector will ask. Rows marked **Practice** are this page's practical reading. The rule does not require that document, and the section named is the one the practice rests on.

| # | Question | Traces to |
| --- | --- | --- |
| 1 | Do we have a list of our electronic records and the predicate rule behind each one? | **Practice.** Not required by the rule. FDA guidance recommends it. Rests on § 11.1(b) |
| 2 | Have we recorded whether the system is closed or open? | **Practice.** Not required by the rule. Rests on § 11.3(b)(4), (9) |
| 3 | Is the system validated, including its ability to discern invalid or altered records? | § 11.10(a) |
| 4 | Can we produce a complete, accurate copy of any record, in human readable and electronic form? | § 11.10(b) |
| 5 | Can we retrieve every record for its whole retention period? | § 11.10(c) |
| 6 | Is access limited to authorized people? | § 11.10(d) |
| 7 | Does a computer-generated, time-stamped audit trail record each create, modify and delete action, and keep earlier information visible? | § 11.10(e) |
| 8 | Do we keep audit trails at least as long as the records? | § 11.10(e) |
| 9 | Does the workflow enforce the required order of steps? | § 11.10(f) |
| 10 | Does the system check a person's authority before that person signs or alters a record? | § 11.10(g) |
| 11 | Can we show that system developers, administrators and users have the education, training and experience for their tasks? | § 11.10(i) |
| 12 | Is there a written policy that holds people accountable for actions under their signatures? | § 11.10(j) |
| 13 | Is the system's own documentation under distribution and change control? | § 11.10(k) |
| 14 | For an open system, are there added measures such as encryption? | § 11.30 |
| 15 | Does every signed record show printed name, date and time, and meaning, on screen and on printouts? | § 11.50 |
| 16 | Is each signature linked to its record so that it cannot be copied or moved by ordinary means? | § 11.70 |
| 17 | Is every electronic signature unique to one person, and do we verify identity before we assign it? | § 11.100(a), (b) |
| 18 | Has the organization certified to FDA that its electronic signatures are intended as the legally binding equivalent of handwritten signatures? | § 11.100(c) |
| 19 | Does each non-biometric signature use at least two distinct components? | § 11.200(a)(1) |
| 20 | Do we periodically check, recall or revise passwords and identification codes? | § 11.300(b) |
| 21 | Is there a procedure to deauthorize a lost or compromised token or card? | § 11.300(c) |
| 22 | Does the system detect and immediately report attempts at unauthorized use? | § 11.300(d) |

## Sources

All statements about what the rule requires come from these primary sources.

- Electronic Records; Electronic Signatures, [21 CFR Part 11](https://www.ecfr.gov/current/title-21/part-11) (eCFR).
- Quality Management System Regulation, [21 CFR Part 820](https://www.ecfr.gov/current/title-21/part-820) (eCFR).
- Medical Devices; Quality System Regulation Amendments, final rule, [89 FR 7496](https://www.federalregister.gov/documents/2024/02/02/2024-01709/medical-devices-quality-system-regulation-amendments) (February 2, 2024).
- FDA, [Part 11, Electronic Records; Electronic Signatures: Scope and Application](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/part-11-electronic-records-electronic-signatures-scope-and-application) (2003). FDA guidance, used for orientation only.
