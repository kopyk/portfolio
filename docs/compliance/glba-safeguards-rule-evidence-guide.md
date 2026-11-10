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
- **Three columns keep rule text and practice apart.** Only the first column of each table summarizes the rule. The page says before the first table that the other two are practical reading, and both column headings repeat it.
- **The consumer-count exception is marked on the rows it affects.** A reader whose institution holds information about fewer than 5,000 consumers can see which rows do not apply without first reading to the end.
- **The notification duty gets prose, not a table row.** It has a threshold, a clock and a list of contents, and a table cell would hide the conditions.
- **Dates and thresholds are called out as things that expire.** The amendment history has its own section with the date I checked it.

</AboutSample>

:::caution Writing sample, not legal advice
This page is a writing sample. It summarizes a federal rule in plain language and leaves out detail. It is not legal advice. Talk to a lawyer before you make a decision that depends on the Safeguards Rule.

**Checked against the rule text on November 10, 2026.**
:::

## The short version

The Gramm-Leach-Bliley Act (GLBA) tells the agencies and authorities that enforce it to set safeguard standards for the customer records of the financial institutions under their jurisdiction ([15 U.S.C. § 6801(b)](https://www.law.cornell.edu/uscode/text/15/6801)). The Federal Trade Commission (FTC) version of those standards is the Safeguards Rule, [16 CFR Part 314](https://www.ecfr.gov/current/title-16/part-314).

The rule requires a written information security program with ten listed elements. For each element, this guide names the document that usually states it and the evidence that shows it happens.

## Who is covered

The rule applies to financial institutions under FTC jurisdiction. These are financial institutions that are not subject to the enforcement authority of another regulator under GLBA section 505, 15 U.S.C. § 6805 ([§ 314.1(b)](https://www.ecfr.gov/current/title-16/section-314.1)). Banks and federally insured credit unions answer to their own regulators, which set their own standards ([15 U.S.C. § 6805(a)](https://www.law.cornell.edu/uscode/text/15/6805) and § 6801(b)).

Two definitions set the scope ([§ 314.2](https://www.ecfr.gov/current/title-16/section-314.2)):

- A **financial institution** is any institution whose business is engaging in an activity that is financial in nature, or incidental to such financial activities, as described in section 4(k) of the Bank Holding Company Act, 12 U.S.C. § 1843(k) (§ 314.2(h)). Examples in § 314.1(b) include mortgage lenders, finance companies and collection agencies.
- **Customer information** is any record that contains nonpublic personal information about a customer of a financial institution, in any form, that is handled or maintained by or on behalf of you or your affiliates (§ 314.2(d)).

The rule covers all customer information in your possession, including information that other financial institutions gave you about their customers (§ 314.1(b)).

## The core duty

You must develop, implement and maintain a comprehensive, written information security program. Its safeguards must fit your size and complexity, the nature and scope of your activities and the sensitivity of the customer information ([§ 314.3(a)](https://www.ecfr.gov/current/title-16/section-314.3)).

## How to read the tables

Only the first column of each table summarizes the rule, [§ 314.4](https://www.ecfr.gov/current/title-16/section-314.4). The **document** and **evidence** columns are practical reading, not rule text. The rule does not name policy documents or list evidence.

Rows marked **Consumer-count exception** are explained in [The consumer-count exception](#the-consumer-count-exception). The test is how many consumers your customer information concerns, not the size of your business.

## Governance and risk: § 314.4(a) and (b)

| What the rule says | Document that states it (practical reading) | Evidence a reviewer would expect (practical reading) |
| --- | --- | --- |
| [(a)](https://www.ecfr.gov/current/title-16/section-314.4) Designate a Qualified Individual to oversee, implement and enforce the program. If the person works for an affiliate or a service provider, you keep responsibility, name a senior member of your personnel to direct and oversee them, and require the provider or affiliate to maintain a program that protects you as the rule requires. | Information security program charter | Signed designation. Role description. For an outside provider, the contract and the named senior overseer. |
| [(b)](https://www.ecfr.gov/current/title-16/section-314.4) Base the program on a risk assessment that identifies reasonably foreseeable internal and external risks to customer information and assesses whether your safeguards are sufficient. Repeat it periodically, (b)(2). | Risk management policy | Dated assessments. A risk register that links each risk to a safeguard. |
| [(b)(1)](https://www.ecfr.gov/current/title-16/section-314.4) The assessment must be written. It must include criteria to evaluate risks, criteria to assess systems and existing controls, and how you will mitigate or accept risks. **Consumer-count exception.** | Risk assessment methodology | The written assessment with its criteria. Risk acceptance records with approvers. |

**What this changes in your work:** a reviewer will pick a safeguard and ask which risk it answers. Number your risks and cite those numbers in your control documents.

## Safeguards: § 314.4(c)

You must design and implement safeguards to control the risks you identified, including the eight below.

| What the rule says | Document that states it (practical reading) | Evidence a reviewer would expect (practical reading) |
| --- | --- | --- |
| [(c)(1)](https://www.ecfr.gov/current/title-16/section-314.4) Implement and periodically review access controls. Admit only authorized users, and limit each to the customer information the user needs for the user's duties or, for a customer, to the customer's own information. | Access control policy | Access review records with dates and reviewers. Joiner, mover and leaver tickets. |
| [(c)(2)](https://www.ecfr.gov/current/title-16/section-314.4) Identify and manage the data, personnel, devices, systems and facilities that support your business. | Asset management standard | Data inventory and system inventory, with owners and a last-reviewed date. |
| [(c)(3)](https://www.ecfr.gov/current/title-16/section-314.4) Encrypt all customer information in transit over external networks and at rest. Where encryption is infeasible, use compensating controls that the Qualified Individual reviewed and approved. | Encryption standard | Configuration exports for storage and transport encryption. Signed approvals for each exception. |
| [(c)(4)](https://www.ecfr.gov/current/title-16/section-314.4) Adopt secure development practices for in-house applications you use to transmit, access or store customer information, and procedures to evaluate the security of external applications you use for the same purposes. | Secure development standard. Third-party software review procedure. | Code review and security test records for sampled releases. Completed software evaluations. |
| [(c)(5)](https://www.ecfr.gov/current/title-16/section-314.4) Implement multi-factor authentication for any individual who accesses any information system, unless the Qualified Individual approved in writing the use of reasonably equivalent or more secure access controls. | Authentication standard | Identity provider settings. Enforcement status by system. Written approvals for alternatives. |
| [(c)(6)](https://www.ecfr.gov/current/title-16/section-314.4) Maintain procedures to securely dispose of customer information no later than two years after you last used it to serve the customer. The deadline does not apply if the information is necessary for business operations or other legitimate business purposes, if law or regulation requires you to retain it, or if targeted disposal is not reasonably feasible because of how the information is maintained. Periodically review your retention policy to minimize unnecessary retention. | Retention schedule. Disposal procedure. | Deletion logs. Destruction certificates. Dated retention reviews. A written reason for each record set kept longer. |
| [(c)(7)](https://www.ecfr.gov/current/title-16/section-314.4) Adopt procedures for change management. | Change management procedure | Change tickets that show review, approval and testing. |
| [(c)(8)](https://www.ecfr.gov/current/title-16/section-314.4) Monitor and log the activity of authorized users. Detect their unauthorized access to, use of, or tampering with customer information. | Logging and monitoring standard | Log source list. Alert rules. A sample of investigated alerts. |

**What this changes in your work:** the Qualified Individual is the named approver for encryption exceptions and for alternatives to multi-factor authentication. Build an exception form with a signature and a review date before the first exception arrives.

## Testing, people and providers: § 314.4(d) to (f)

| What the rule says | Document that states it (practical reading) | Evidence a reviewer would expect (practical reading) |
| --- | --- | --- |
| [(d)(1)](https://www.ecfr.gov/current/title-16/section-314.4) Regularly test or otherwise monitor the effectiveness of key controls, systems and procedures. | Security testing policy | Test plan and results. Tracked findings with closure dates. |
| [(d)(2)](https://www.ecfr.gov/current/title-16/section-314.4) For information systems, use continuous monitoring, or periodic penetration testing and vulnerability assessments. Without effective continuous monitoring or other systems that detect, on an ongoing basis, changes in information systems that may create vulnerabilities, you must run annual penetration tests, plus vulnerability assessments at least every six months, whenever your operations or business arrangements change materially, and whenever circumstances you know or have reason to know may materially affect your program. **Consumer-count exception.** | Vulnerability management standard | Penetration test reports. Scan reports no more than six months apart. Remediation tickets. |
| [(e)](https://www.ecfr.gov/current/title-16/section-314.4) Give personnel security awareness training, updated as necessary to reflect the risks the assessment identified. Use qualified security personnel, train them, and verify that key security staff keep their knowledge current. | Training policy. Security staffing plan. | Completion records. Dated training content. Training records for security staff. |
| [(f)](https://www.ecfr.gov/current/title-16/section-314.4) Take reasonable steps to select and retain service providers that can maintain appropriate safeguards. Require those safeguards by contract. Periodically assess providers based on the risk they present and the continued adequacy of their safeguards. | Service provider management procedure | Due diligence files. Contract security clauses. Dated reassessments, scheduled by risk. |

**What this changes in your work:** the six-month and annual intervals are dates a reviewer can check. Put them on a compliance calendar with a named owner, and file each report by date.

## Evaluation, incident response and reporting: § 314.4(g) to (i)

| What the rule says | Document that states it (practical reading) | Evidence a reviewer would expect (practical reading) |
| --- | --- | --- |
| [(g)](https://www.ecfr.gov/current/title-16/section-314.4) Evaluate and adjust the program in light of test results, material business changes, new risk assessments and other material circumstances. | Program review procedure | Review minutes. A log that links each program change to its trigger. |
| [(h)](https://www.ecfr.gov/current/title-16/section-314.4) Establish a written incident response plan. It must address seven listed areas, including roles and decision authority, communications, and revision after an event. **Consumer-count exception.** | Incident response plan | The plan, mapped to the seven areas. Incident records. Post-incident reviews. |
| [(i)](https://www.ecfr.gov/current/title-16/section-314.4) The Qualified Individual must report in writing, regularly and at least once a year, to the board or an equivalent body. Without one, the report goes to a senior officer responsible for the program. It covers overall status, compliance with the rule and material matters. **Consumer-count exception.** | Board reporting procedure | The dated report. Board minutes or an agenda that shows the board received it. |

**What this changes in your work:** paragraph (i)(2) lists matters the report addresses, such as test results, security events and service provider arrangements. Use that list as the report's outline.

## Notifying the FTC: § 314.4(j)

A **notification event** is the acquisition of unencrypted customer information without the authorization of the individual it pertains to. Encrypted information counts as unencrypted if an unauthorized person accessed the key. The rule presumes that unauthorized access to unencrypted customer information is unauthorized acquisition unless you have reliable evidence that there was not, or could not reasonably have been, unauthorized acquisition ([§ 314.2(m)](https://www.ecfr.gov/current/title-16/section-314.2)).

If a notification event involves the information of **at least 500 consumers**, you must notify the FTC as soon as possible, and **no later than 30 days after discovery** ([§ 314.4(j)(1)](https://www.ecfr.gov/current/title-16/section-314.4)). The notice is made electronically on a form on the FTC's website. It must include six listed items, such as the types of information involved and the number of consumers affected or potentially affected.

Discovery is the first day the event is known to you. You are deemed to know when any employee, officer or agent knows, other than the person who committed the breach (§ 314.4(j)(2)). Paragraph (j) took effect on May 13, 2024 ([§ 314.5](https://www.ecfr.gov/current/title-16/section-314.5)).

**What this changes in your work:** the clock can start before the security team confirms anything. Record a discovery date, a consumer count and the reason for the decision to file or not.

## The consumer-count exception

Four paragraphs do not apply to a financial institution that maintains customer information concerning **fewer than 5,000 consumers** ([§ 314.6](https://www.ecfr.gov/current/title-16/section-314.6)):

- § 314.4(b)(1), the written risk assessment.
- § 314.4(d)(2), continuous monitoring or periodic penetration testing and vulnerability assessments.
- § 314.4(h), the written incident response plan.
- § 314.4(i), the report to the board.

The rest of § 314.4 is not on the list. That includes the risk assessment duty in paragraph (b) and the FTC notification in paragraph (j).

**What this changes in your work:** if you rely on the exception, keep a dated consumer count that supports it.

## Amendment history

Checked on November 10, 2026. On that date, the eCFR listed May 13, 2024 as the latest amendment to Part 314.

- **2021.** A final rule published on December 9, 2021 rewrote § 314.4 and added the exception in § 314.6 ([86 FR 70272](https://www.federalregister.gov/documents/2021/12/09/2021-25736/standards-for-safeguarding-customer-information)). It took effect on January 10, 2022. Several paragraphs of § 314.4 had a later date of December 9, 2022, which the FTC then delayed to June 9, 2023 ([87 FR 71509](https://www.federalregister.gov/documents/2022/11/23/2022-25201/standards-for-safeguarding-customer-information)).
- **2023.** A final rule published on November 13, 2023 added the notification duty ([88 FR 77499](https://www.federalregister.gov/documents/2023/11/13/2023-24412/standards-for-safeguarding-customer-information)). It took effect on May 13, 2024.

## Sources

All statements about what the rule requires come from these primary sources.

- Gramm-Leach-Bliley Act, Title V, Subtitle A, [15 U.S.C. §§ 6801–6809](https://www.law.cornell.edu/uscode/text/15/chapter-94/subchapter-I).
- Standards for Safeguarding Customer Information, [16 CFR Part 314](https://www.ecfr.gov/current/title-16/part-314) (eCFR).
- Federal Register final rules: [86 FR 70272](https://www.federalregister.gov/documents/2021/12/09/2021-25736/standards-for-safeguarding-customer-information) (December 9, 2021), [87 FR 71509](https://www.federalregister.gov/documents/2022/11/23/2022-25201/standards-for-safeguarding-customer-information) (November 23, 2022) and [88 FR 77499](https://www.federalregister.gov/documents/2023/11/13/2023-24412/standards-for-safeguarding-customer-information) (November 13, 2023).
