---
title: "COPPA for product teams"
description: A plain-language guide to the Children's Online Privacy Protection Rule for people who design, build and ship online products.
sidebar_label: COPPA for product teams
---

import AboutSample from '@site/src/components/AboutSample';

<AboutSample
  roles={['Trust and safety documentation', 'Policy and procedure writing', 'Security and audit compliance']}
  audience="Product managers, designers and engineers at a US consumer product that children might use. They are not lawyers and will not read the rule itself."
  goal="Give a product team enough understanding to spot a COPPA question early and bring the right facts to counsel."
  constraints="Every statement of what the rule requires is tied to a section of the rule. Only primary sources. Not legal advice. Current as of the date on the page."
  tools="Markdown, Docusaurus, eCFR and the Federal Register as sources, Vale.">

- **Organized by the team's questions, not the rule's section order.** The rule starts with definitions. A product team starts with "does this apply to us?", so that comes first.
- **Each requirement is paired with what changes in day-to-day work.** A summary of the rule already exists on the FTC site. The gap is the step from "the rule says" to "so in the design review we ask".
- **Citations sit in the text, next to the claim.** A reader who doubts a sentence can check it in one step, and a reviewer can see at a glance which sentences still need a source.
- **Dates and dollar figures are called out as things that expire.** The penalty figure changes most years, so the page says when it was checked.

</AboutSample>

:::caution Writing sample, not legal advice
This page is a writing sample. It summarizes a federal rule in plain language and leaves out detail. It is not legal advice. Talk to a lawyer before you make a decision that depends on COPPA.

**Checked against the rule text on November 10, 2026.**
:::

## The short version

The Children's Online Privacy Protection Act (COPPA) is a US federal law. The Federal Trade Commission (FTC) enforces it through the COPPA Rule, [16 CFR Part 312](https://www.ecfr.gov/current/title-16/part-312).

The rule's core idea fits in one sentence: **before you collect, use or share personal information from a child under 13, tell a parent what you plan to do and get the parent's consent.**

Around that core, the rule sets duties for notice, parent access, data security, data retention and how much data you may ask for.

## Does it apply to your product?

The rule applies to you if either of these is true ([§ 312.3](https://www.ecfr.gov/current/title-16/section-312.3)):

- Your website or online service is **directed to children**.
- You have **actual knowledge** that you collect or keep personal information from a child.

A child is a person under 13 ([§ 312.2](https://www.ecfr.gov/current/title-16/section-312.2)).

### "Directed to children" is a judgment about the whole product

There is no single test. The FTC looks at a list of factors in the § 312.2 definition, including:

- Subject matter and visual content.
- Animated characters, or activities and incentives that appeal to children.
- Music and other audio.
- The age of models, and child celebrities or celebrities who appeal to children.
- Language.
- Whether ads on the service, or ads for it, are aimed at children.
- Reliable evidence about who uses the service.
- Evidence about who you meant it for. This includes marketing plans, what you tell third parties, user reviews and the age of users on similar services.

That last factor matters to a product team. Your own pitch decks and marketing briefs are evidence.

### Mixed audience services

A service can be directed to children under these factors without having children as its *primary* audience. The rule calls this a **mixed audience** service (§ 312.2). A mixed audience service may ask each user's age first, in a neutral way, and then apply COPPA protections only to users who say they are under 13. It must not collect personal information before it asks, other than what the consent exceptions allow.

"Neutral" has design consequences. An age screen that nudges a child toward a higher age is not neutral.

## What counts as personal information?

More than most teams expect. The § 312.2 definition lists:

| Category | Examples from the rule |
| --- | --- |
| Name and address | First and last name. Home or other physical address. |
| Contact details | Online contact information, such as an email address. A screen name that works as contact information. A telephone number. |
| Government-issued identifiers | Social Security, state ID card, birth certificate or passport number. |
| Persistent identifiers | A cookie ID, IP address, device serial number or other identifier that can recognize a user over time and across services. |
| Media | A photo, video or audio file that contains a child's image or voice. |
| Location | Geolocation that is enough to identify a street name and a city or town. |
| Biometric identifiers | Fingerprints, retina and iris patterns, voiceprints, gait patterns, facial templates and faceprints. |
| Combined data | Other information about the child or the parents that you combine with any identifier above. |

**What this changes in your work:** an analytics SDK that sets a cross-site identifier collects personal information under this rule, even when nobody types anything into a form. Treat "we don't ask for names" as the start of the review, not the end.

## What the rule requires

### 1. Tell parents what you do

You owe parents two kinds of notice ([§ 312.4](https://www.ecfr.gov/current/title-16/section-312.4)):

- A **direct notice**, sent to the parent before you collect a child's information.
- An **online notice**, linked clearly from your home page and from each place where you collect children's information.

The online notice must cover, among other things, who the operators are and how to reach them, what you collect from children, how you use it, which third parties get it and why, your data retention policy, and how a parent can review or delete the child's information (§ 312.4(d)).

**What this changes in your work:** the notice describes real system behavior. When you add a vendor, a data field or a new use, the notice may need to change before launch. Put "does this change the children's privacy notice?" in your launch checklist.

### 2. Get verifiable parental consent first

You need a parent's verifiable consent **before** any collection, use or disclosure of a child's personal information ([§ 312.5(a)(1)](https://www.ecfr.gov/current/title-16/section-312.5)).

Two details affect design:

- **Sharing needs its own consent.** You must let the parent agree to collection and use without agreeing to disclosure to third parties, unless the disclosure is integral to the service. Where you owe the parent that choice, you need separate verifiable consent for the disclosure (§ 312.5(a)(2)).
- **The method must be reasonably designed to confirm that the person is the parent.** The rule lists accepted methods (§ 312.5(b)(2)).

| Method | Note |
| --- | --- |
| A signed consent form, returned by mail, fax or scan | |
| A credit card, debit card or other online payment, used in a transaction | The payment system must notify the account holder of each transaction. |
| A call to a toll-free number staffed by trained personnel | |
| A video call with trained personnel | |
| A government-issued ID, checked against a database | Delete the ID record promptly after the check. |
| Knowledge-based questions | The questions must be hard enough that a child of 12 or younger in the household could not answer them. |
| A photo ID matched to a live image of the parent by facial recognition | Trained personnel confirm the match. Delete the ID and images promptly. |
| "Email plus" or "text plus": a message to the parent plus a confirming step | Only for operators that do not disclose children's personal information. |

**What this changes in your work:** consent is a product flow with states: not asked, pending, granted, granted without sharing, revoked. Model those states in your data, because every downstream system needs to respect them.

### 3. Know the exceptions, and how narrow they are

The rule allows a few kinds of collection without prior consent ([§ 312.5(c)](https://www.ecfr.gov/current/title-16/section-312.5)). Each is tied to one purpose. The ones product teams meet most often:

- Collecting a parent's or child's name or contact information **only to ask for consent**. If consent does not arrive in a reasonable time, delete it.
- Collecting a child's contact information to **answer one specific request**, then deleting it.
- Collecting a persistent identifier, and nothing else, **only to support the internal operations** of the service.
- Collecting an audio file of a child's voice, and nothing else, to **respond to a specific request**, then deleting it immediately.

**What this changes in your work:** an exception covers a purpose, not a data field. Data collected under "support for internal operations" cannot later feed ad targeting or a profile. If a team wants to reuse the data, the exception no longer fits and the consent question comes back.

### 4. Give parents access and control

On request, a parent can ([§ 312.6](https://www.ecfr.gov/current/title-16/section-312.6)):

- Learn what types of personal information you collected from the child.
- Review the child's personal information.
- Refuse further collection or use, and tell you to delete what you hold.

You must take reasonable steps to confirm that the person asking is the parent, without making the process a burden.

**What this changes in your work:** you need to be able to find, export and delete one child's data across every system that holds it, including vendors. That is much cheaper to design in than to add later.

### 5. Do not ask for more than the activity needs

You may not make a child's participation in a game, a prize offer or another activity depend on the child giving more personal information than is reasonably necessary for that activity ([§ 312.7](https://www.ecfr.gov/current/title-16/section-312.7)).

**What this changes in your work:** for each field in a sign-up or event flow, be ready to name the feature that needs it.

### 6. Run a written security program

You must establish and maintain a **written information security program** with safeguards that fit the sensitivity of the data ([§ 312.8](https://www.ecfr.gov/current/title-16/section-312.8)). At a minimum, the program must:

- Name one or more employees to coordinate it.
- Identify internal and external risks, and assess them at least once a year.
- Put safeguards in place to control those risks.
- Test and monitor the safeguards regularly.
- Be evaluated and updated at least once a year.

Before you release children's personal information to a service provider or another third party, you must take reasonable steps to determine that they can keep it confidential and secure, and you must get written assurances that they will (§ 312.8(c)).

**What this changes in your work:** vendor intake needs a step that asks "will this vendor receive children's data?", and a place to file the written assurance.

### 7. Set a retention period and publish it

You may keep a child's personal information only as long as is reasonably necessary for the specific purpose you collected it for. You may not keep it indefinitely. You must have a **written data retention policy** that states the purposes, the business need and a timeframe for deletion, and you must include that policy in your online notice ([§ 312.10](https://www.ecfr.gov/current/title-16/section-312.10)).

**What this changes in your work:** every store that holds children's data needs an owner, a purpose and a deletion schedule. "We keep it in case it is useful" does not meet the rule.

## What changed in 2025

The FTC published amendments to the rule on April 22, 2025 ([90 FR 16918](https://www.federalregister.gov/documents/2025/04/22/2025-05904/childrens-online-privacy-protection-rule)). They took effect on June 23, 2025. For most provisions, operators had until April 22, 2026 to comply. Some safe harbor provisions had their own dates.

If your team's COPPA knowledge dates from before 2025, check your understanding of these points against the current text: separate consent for third-party disclosure, the written security program, the written retention policy in the online notice, and the definitions of personal information and mixed audience service.

## Safe harbor programs

An industry group can ask the FTC to approve its self-regulatory guidelines. An operator that follows an approved program's guidelines is treated as complying with most of the rule ([§ 312.11](https://www.ecfr.gov/current/title-16/section-312.11)). Joining a program is a business decision for your legal and privacy leads.

## What is at stake

A violation of the rule is treated as a violation of an FTC trade regulation rule ([§ 312.9](https://www.ecfr.gov/current/title-16/section-312.9)). The maximum civil penalty is **$53,088 per violation** ([16 CFR 1.98(d)](https://www.ecfr.gov/current/title-16/section-1.98), as checked on November 10, 2026). The FTC adjusts this figure for inflation, usually each January, so check the current number before you quote it.

## Questions for your next design review

Use these to decide whether to bring in counsel. A "yes" or "not sure" means you should.

1. Could a reasonable person look at this feature's art, language or marketing and think it is aimed at children?
2. Do we have data that shows who actually uses it?
3. Does the feature, or any SDK inside it, collect anything in the personal information table above?
4. Does any data leave our systems? To whom, and is that integral to the service?
5. If we rely on an exception to consent, is the data used for that one purpose only?
6. Can we find and delete one child's data everywhere it lives?
7. Is there a deletion date for each new data store?
8. Does this change what our children's privacy notice says?

## Sources

All statements about what the rule requires come from these primary sources.

- Children's Online Privacy Protection Act, [15 U.S.C. §§ 6501–6506](https://www.law.cornell.edu/uscode/text/15/chapter-91).
- Children's Online Privacy Protection Rule, [16 CFR Part 312](https://www.ecfr.gov/current/title-16/part-312) (eCFR).
- Children's Online Privacy Protection Rule, final rule amendments, [90 FR 16918](https://www.federalregister.gov/documents/2025/04/22/2025-05904/childrens-online-privacy-protection-rule) (April 22, 2025).
- Civil penalty amounts, [16 CFR 1.98](https://www.ecfr.gov/current/title-16/section-1.98).
- FTC, [Complying with COPPA: Frequently Asked Questions](https://www.ftc.gov/business-guidance/resources/complying-coppa-frequently-asked-questions). FTC staff guidance, used for orientation only.
