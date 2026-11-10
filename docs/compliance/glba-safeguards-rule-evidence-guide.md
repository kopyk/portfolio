---
title: "The GLBA Safeguards Rule: what it requires and what evidence shows it"
description: A control-to-evidence guide to the FTC Safeguards Rule, 16 CFR Part 314, for security and compliance staff at non-bank financial institutions.
sidebar_label: GLBA Safeguards Rule evidence guide
---

import AboutSample from '@site/src/components/AboutSample';

<AboutSample
  roles={['Security and audit compliance', 'Policy and procedure writing']}
  audience="Security and compliance staff at a non-bank financial institution under FTC jurisdiction, such as a fintech lender. They must turn the rule into a written program and be ready to show that it works."
  goal="Map each element of the rule to the document that states it and the evidence a reviewer would expect to see."
  constraints="Every statement of what the rule requires is tied to a paragraph of the rule. Only primary sources. Not legal advice. Current as of the date on the page."
  tools="Markdown, Docusaurus, eCFR, the Federal Register and govinfo as sources, Vale.">

- **Organized in the rule's own paragraph order.** A reviewer works through § 314.4 from (a) to (j) and asks for evidence by paragraph. The page follows the same path, so a reader can use it as a checklist.
- **Three columns keep rule text and practice apart.** The first two columns of each table summarize the rule. The evidence column is my practical reading, and the page says so before the first table and in each column heading.
- **The small-institution exception is marked on the rows it affects.** A reader at a small lender can see which rows do not apply without first reading to the end.
- **The notification duty gets prose, not a table row.** It has a threshold, a clock and a list of contents, and a table cell would hide the conditions.
- **Dates and thresholds are called out as things that expire.** The amendment history has its own section with the date I checked it.

</AboutSample>

:::caution Writing sample, not legal advice
This page is a writing sample. It summarizes a federal rule in plain language and leaves out detail. It is not legal advice. Talk to a lawyer before you make a decision that depends on the Safeguards Rule.

**Checked against the rule text on November 10, 2026.**
:::

## The short version

The Gramm-Leach-Bliley Act (GLBA) tells federal agencies to set safeguard standards for financial institutions' customer records ([15 U.S.C. § 6801(b)](https://www.law.cornell.edu/uscode/text/15/6801)). The Federal Trade Commission (FTC) version of those standards is the Safeguards Rule, [16 CFR Part 314](https://www.ecfr.gov/current/title-16/part-314).

The rule asks for one thing: a written information security program that contains ten listed elements. For each element, this guide names the document that usually states it and the evidence that shows it happens.

## Who is covered

The rule applies to financial institutions under FTC jurisdiction. These are institutions that no other regulator enforces GLBA against ([§ 314.1(b)](https://www.ecfr.gov/current/title-16/section-314.1)). Banks and federally insured credit unions answer to their own regulators, which set their own standards ([15 U.S.C. § 6805(a)](https://www.law.cornell.edu/uscode/text/15/6805)).

| Term | What the rule says |
| --- | --- |
| Financial institution | A business that engages in an activity that is financial in nature, or incidental to such an activity ([§ 314.2(h)](https://www.ecfr.gov/current/title-16/section-314.2)). Examples in § 314.1(b) include mortgage lenders, finance companies, collection agencies and tax preparation firms. |
| Customer information | Any record that contains nonpublic personal information about a customer of a financial institution, in paper, electronic or other form, that you or your affiliates handle or maintain (§ 314.2(d)). |

The rule covers all customer information in your possession, including information that other financial institutions gave you about their customers (§ 314.1(b)).

## The core duty

You must develop, implement and maintain a comprehensive information security program. It must be written, in one or more readily accessible parts. Its safeguards must fit your size and complexity, your activities and the sensitivity of the customer information ([§ 314.3(a)](https://www.ecfr.gov/current/title-16/section-314.3)).

## How to read the tables

Only the first column of each table summarizes the rule, [§ 314.4](https://www.ecfr.gov/current/title-16/section-314.4). The **document** and **evidence** columns are practical reading, not rule text. The rule does not name policy documents or list evidence.

Rows marked **Small-institution exception** do not apply to some institutions. See [The small-institution exception](#the-small-institution-exception).

## Governance and risk: § 314.4(a) and (b)

| What the rule says | Document that states it | Evidence a reviewer would expect |
| --- | --- | --- |
| [(a)](https://www.ecfr.gov/current/title-16/section-314.4) Designate a Qualified Individual to oversee, implement and enforce the program. If the person works for an affiliate or a service provider, you keep responsibility and name a senior person to direct them. | Information security program charter | Signed designation. Role description. For an outside provider, the contract and the named senior overseer. |
| [(b)](https://www.ecfr.gov/current/title-16/section-314.4) Base the program on an assessment of foreseeable internal and external risks to customer information. Repeat it periodically. | Risk management policy | Dated assessments. A risk register that links each risk to a safeguard. |
| [(b)(1)](https://www.ecfr.gov/current/title-16/section-314.4) The assessment must be written. It must include criteria to evaluate risks, criteria to assess systems and existing controls, and how you will mitigate or accept risks. **Small-institution exception.** | Risk assessment methodology | The written assessment with its criteria. Risk acceptance records with approvers. |

**What this changes in your work:** a reviewer will pick a safeguard and ask which risk it answers. Number your risks and cite those numbers in your control documents.

## Safeguards: § 314.4(c)

You must design and implement safeguards to control the risks you identified, including the eight below.

| What the rule says | Document that states it | Evidence a reviewer would expect |
| --- | --- | --- |
| [(c)(1)](https://www.ecfr.gov/current/title-16/section-314.4) Implement and periodically review access controls. Admit only authorized users, and limit each to the customer information the user needs. | Access control policy | Access review records with dates and reviewers. Joiner, mover and leaver tickets. |
| [(c)(2)](https://www.ecfr.gov/current/title-16/section-314.4) Identify and manage the data, personnel, devices, systems and facilities that support your business. | Asset management standard | Data inventory and system inventory, with owners and a last-reviewed date. |
| [(c)(3)](https://www.ecfr.gov/current/title-16/section-314.4) Encrypt all customer information in transit over external networks and at rest. Where encryption is infeasible, use compensating controls that the Qualified Individual reviewed and approved. | Encryption standard | Configuration exports for storage and transport encryption. Signed approvals for each exception. |
| [(c)(4)](https://www.ecfr.gov/current/title-16/section-314.4) Adopt secure development practices for in-house applications, and procedures to evaluate the security of external ones. | Secure development standard. Third-party software review procedure. | Code review and security test records for sampled releases. Completed software evaluations. |
| [(c)(5)](https://www.ecfr.gov/current/title-16/section-314.4) Implement multi-factor authentication for any individual who accesses any information system, unless the Qualified Individual approved an equivalent or more secure control in writing. | Authentication standard | Identity provider settings. Enforcement status by system. Written approvals for alternatives. |
| [(c)(6)](https://www.ecfr.gov/current/title-16/section-314.4) Maintain procedures to securely dispose of customer information no later than two years after you last used it to serve the customer. The rule allows exceptions, such as a legal duty to retain. Periodically review your retention policy. | Retention schedule. Disposal procedure. | Deletion logs. Destruction certificates. Dated retention reviews. A written reason for each record set kept longer. |
| [(c)(7)](https://www.ecfr.gov/current/title-16/section-314.4) Adopt procedures for change management. | Change management procedure | Change tickets that show review, approval and testing. |
| [(c)(8)](https://www.ecfr.gov/current/title-16/section-314.4) Monitor and log the activity of authorized users. Detect their unauthorized access to, use of, or tampering with customer information. | Logging and monitoring standard | Log source list. Alert rules. A sample of investigated alerts. |

**What this changes in your work:** the Qualified Individual is the named approver for encryption exceptions and for alternatives to multi-factor authentication. Build an exception form with a signature and a review date before the first exception arrives.

## Testing, people and providers: § 314.4(d) to (f)

| What the rule says | Document that states it | Evidence a reviewer would expect |
| --- | --- | --- |
| [(d)(1)](https://www.ecfr.gov/current/title-16/section-314.4) Regularly test or otherwise monitor the effectiveness of key controls, systems and procedures. | Security testing policy | Test plan and results. Tracked findings with closure dates. |
| [(d)(2)](https://www.ecfr.gov/current/title-16/section-314.4) For information systems, use continuous monitoring, or periodic penetration testing and vulnerability assessments. Without effective continuous monitoring, you must run annual penetration tests, plus vulnerability assessments at least every six months and after material changes. **Small-institution exception.** | Vulnerability management standard | Penetration test reports. Scan reports no more than six months apart. Remediation tickets. |
| [(e)](https://www.ecfr.gov/current/title-16/section-314.4) Give personnel security awareness training, updated to reflect the risk assessment. Use qualified security personnel, train them, and verify that key security staff keep their knowledge current. | Training policy. Security staffing plan. | Completion records. Dated training content. Training records for security staff. |
| [(f)](https://www.ecfr.gov/current/title-16/section-314.4) Take reasonable steps to select service providers that can maintain appropriate safeguards. Require those safeguards by contract. Periodically assess providers based on their risk. | Service provider management procedure | Due diligence files. Contract security clauses. Dated reassessments, scheduled by risk. |

**What this changes in your work:** the six-month and annual intervals are dates a reviewer can check. Put them on a compliance calendar with a named owner, and file each report by date.

## Evaluation, incident response and reporting: § 314.4(g) to (i)

| What the rule says | Document that states it | Evidence a reviewer would expect |
| --- | --- | --- |
| [(g)](https://www.ecfr.gov/current/title-16/section-314.4) Evaluate and adjust the program in light of test results, material business changes, new risk assessments and other material circumstances. | Program review procedure | Review minutes. A log that links each program change to its trigger. |
| [(h)](https://www.ecfr.gov/current/title-16/section-314.4) Establish a written incident response plan. It must address seven areas: goals, internal processes, roles and decision authority, communications, remediation requirements, documentation and reporting, and revision after an event. **Small-institution exception.** | Incident response plan | The plan, mapped to the seven areas. Incident records. Post-incident reviews. |
| [(i)](https://www.ecfr.gov/current/title-16/section-314.4) The Qualified Individual must report in writing, regularly and at least once a year, to the board or an equivalent body. Without one, the report goes to a senior officer. It covers overall status, compliance with the rule and material matters. **Small-institution exception.** | Board reporting procedure | The dated report. Board minutes or an agenda that shows the board received it. |

**What this changes in your work:** paragraph (i)(2) lists matters the report addresses, such as test results, security events and service provider arrangements. Use that list as the report's outline.

## Notifying the FTC: § 314.4(j)

A **notification event** is the acquisition of unencrypted customer information without the authorization of the individual it pertains to. Encrypted information counts as unencrypted if an unauthorized person accessed the key. The rule presumes that unauthorized access is acquisition unless you have reliable evidence that it was not ([§ 314.2(m)](https://www.ecfr.gov/current/title-16/section-314.2)).

If a notification event involves the information of **at least 500 consumers**, you must notify the FTC as soon as possible, and **no later than 30 days after discovery** ([§ 314.4(j)(1)](https://www.ecfr.gov/current/title-16/section-314.4)). You file the notice electronically on the FTC's form. Among other items, it must give the types of information involved, the date or date range if you can determine it, and the number of consumers affected or potentially affected.

Discovery is the first day the event is known to you. You are deemed to know when any employee, officer or agent knows, other than the person who committed the breach (§ 314.4(j)(2)). This paragraph took effect on May 13, 2024 ([§ 314.5](https://www.ecfr.gov/current/title-16/section-314.5)).

**What this changes in your work:** the clock can start when an agent of yours notices, not when the security team confirms. Each incident record needs a discovery date, a count of affected consumers and the reasoning behind the decision to file or not.

## The small-institution exception

Four paragraphs do not apply to a financial institution that maintains customer information about **fewer than 5,000 consumers** ([§ 314.6](https://www.ecfr.gov/current/title-16/section-314.6)):

- § 314.4(b)(1), the written risk assessment and its required contents.
- § 314.4(d)(2), continuous monitoring, or penetration tests and vulnerability assessments.
- § 314.4(h), the written incident response plan.
- § 314.4(i), the written report to the board.

The rest of § 314.4 is not on the list. That includes the risk assessment duty in paragraph (b) and the FTC notification in paragraph (j).

**What this changes in your work:** if you rely on the exception, keep a dated consumer count that supports it.

## Amendment history

Checked on November 10, 2026. Summaries written before these dates may not match the current text.

- **2021.** A final rule published on December 9, 2021 rewrote § 314.4 and added the exception in § 314.6 ([86 FR 70272](https://www.federalregister.gov/documents/2021/12/09/2021-25736/standards-for-safeguarding-customer-information)). It took effect on January 10, 2022. Several paragraphs of § 314.4 had a later date of December 9, 2022, which the FTC then delayed to June 9, 2023 ([87 FR 71509](https://www.federalregister.gov/documents/2022/11/23/2022-25201/standards-for-safeguarding-customer-information)).
- **2023.** A final rule published on November 13, 2023 added the notification duty ([88 FR 77499](https://www.federalregister.gov/documents/2023/11/13/2023-24412/standards-for-safeguarding-customer-information)). It took effect on May 13, 2024.

On the date checked, the eCFR listed May 13, 2024 as the latest amendment to Part 314.

## Sources

All statements about what the rule requires come from these primary sources.

- Gramm-Leach-Bliley Act, Title V, Subtitle A, [15 U.S.C. §§ 6801–6809](https://www.law.cornell.edu/uscode/text/15/chapter-94/subchapter-I).
- Standards for Safeguarding Customer Information, [16 CFR Part 314](https://www.ecfr.gov/current/title-16/part-314) (eCFR).
- Federal Register final rules: [86 FR 70272](https://www.federalregister.gov/documents/2021/12/09/2021-25736/standards-for-safeguarding-customer-information) (December 9, 2021), [87 FR 71509](https://www.federalregister.gov/documents/2022/11/23/2022-25201/standards-for-safeguarding-customer-information) (November 23, 2022) and [88 FR 77499](https://www.federalregister.gov/documents/2023/11/13/2023-24412/standards-for-safeguarding-customer-information) (November 13, 2023).
