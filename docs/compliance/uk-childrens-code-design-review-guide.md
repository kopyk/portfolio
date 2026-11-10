---
title: "The UK Children's Code: a design review guide"
description: A design review guide to the 15 standards of the UK Age appropriate design code, for product designers and UX researchers.
sidebar_label: UK Children's Code design review
draft: true
---

import AboutSample from '@site/src/components/AboutSample';

<AboutSample
  roles={['Trust and safety documentation']}
  audience="Product designers and UX researchers at an online service that children in the UK are likely to use. They run design reviews and are not lawyers."
  goal="Give a reviewer something to check on a screen or flow for each of the code's 15 standards."
  constraints="Every statement of what the code or the law says is tied to a primary source. Not legal advice. Current as of the date on the page."
  tools="Markdown, Docusaurus, legislation.gov.uk, GOV.UK and the ICO as sources, Vale.">

- **Built as a review aid, not an explainer.** The reader has a screen open and a meeting to run. Each standard gets one sentence of substance and up to three questions to ask.
- **Fifteen standards grouped into four themes.** The code numbers its standards 1 to 15. A reviewer thinks in stages of a flow, so the tables follow that order and keep the code's numbers for lookup.
- **Two columns keep the source and my reading apart.** One column says what the code asks for. The other is labeled as practical reading, so nobody mistakes a review question for a legal test.
- **The comparison with COPPA is limited to two points.** A full comparison would be a second page. The two chosen are the ones a team working across both regimes is most likely to mix up.

</AboutSample>

:::caution Writing sample, not legal advice
This page is a writing sample. It summarizes a statutory code of practice in plain language and leaves out detail. It is not legal advice. Talk to a lawyer or your data protection officer before you make a decision that depends on the code.

**Checked against the sources listed below on November 10, 2026.**
:::

## What the code is

The *Age appropriate design code*, known as the Children's Code, is a code of practice for online services. The Information Commissioner's Office (ICO) prepared it because [section 123 of the Data Protection Act 2018](https://www.legislation.gov.uk/ukpga/2018/12/section/123) requires one.

| Question | Answer | Source |
| --- | --- | --- |
| What does it cover? | Standards of age-appropriate design for "relevant information society services which are likely to be accessed by children". | [Section 123(1)](https://www.legislation.gov.uk/ukpga/2018/12/section/123) |
| Which services? | Services that process personal data under the UK GDPR. The UK government's summary lists apps, websites, video games, social media and connected toys. | [Section 123(7)](https://www.legislation.gov.uk/ukpga/2018/12/section/123); [GOV.UK summary](https://www.gov.uk/guidance/child-online-safety-data-protection-and-privacy) |
| Who is a child? | The ICO describes the code as applying to services likely to be accessed by children "up to age 18". | [ICO news release, September 2, 2020](https://wired-gov.net/wg/news.nsf/print/ICOs+Childrens+Code+will+help+protect+children+online+02092020104500) |
| When did it start? | It came into force on September 2, 2020. A 12-month transition period ended on September 2, 2021. | ICO news release, September 2, 2020 |

### Its legal status

The code is a statutory code of practice. It is not an Act of Parliament and not a statutory instrument. [Section 127 of the Data Protection Act 2018](https://www.legislation.gov.uk/ukpga/2018/12/section/127) sets its effect:

- Failing to follow the code does not, of itself, make you liable to legal proceedings.
- The code is admissible as evidence in legal proceedings.
- A court or tribunal must take a relevant provision of the code into account.
- The regulator must take a relevant provision into account when it carries out its data protection functions.

**What this changes in your work:** treat the standards as the measure the regulator will hold your design against when it applies data protection law. "The code is only guidance" is not a reason to close a review finding.

## The 15 standards

The second column follows the UK government's published [summary of the 15 standards](https://www.gov.uk/guidance/child-online-safety-data-protection-and-privacy). The names are the code's own. The ICO's [full text of each standard](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/childrens-information/childrens-code-guidance-and-resources/age-appropriate-design-a-code-of-practice-for-online-services/code-standards/) is longer and is the text that counts.

The third column is practical reading for a design review, not a statement of law.

### Before you design: foundations

| Standard | What the code asks for | What to check in a design review |
| --- | --- | --- |
| 1. Best interests of the child | Make the best interests of the child a primary consideration when you design and develop the service. | Who decided this feature is good for a child, and on what evidence? |
| 2. Data protection impact assessments | Carry out a data protection impact assessment (DPIA) to assess and reduce the risks to children that come from your data processing. Take account of different ages, capacities and development needs. | Does a DPIA cover this flow? Did design changes since then go back into it? |
| 3. Age appropriate application | Take a risk-based approach to understanding the age of individual users. As an alternative, apply the standards to all users. | How do we know the age of the person on this screen, and how sure are we? If we do not know, does every user get the child-safe version? |
| 6. Policies and community standards | Uphold your own published terms, policies and community standards. | Does the product do what the policy page says? |

### What you collect and how you use it

| Standard | What the code asks for | What to check in a design review |
| --- | --- | --- |
| 5. Detrimental use of data | Do not use children's personal data in ways shown to be harmful to their wellbeing, or that go against industry codes of practice, other regulatory provisions or government advice. | Does this feature use personal data to extend time on the service? |
| 8. Data minimisation | Collect and keep only the minimum amount of personal data you need from children. | For each field and each background signal, which feature needs it? |
| 9. Data sharing | Do not disclose children's data unless you can show a compelling reason, taking into account the best interests of the child. | Does anything on this screen send data to a third party, including an embedded SDK? Who wrote down the reason? |

### Defaults and controls

| Standard | What the code asks for | What to check in a design review |
| --- | --- | --- |
| 7. Default settings | Make settings "high privacy" by default, unless you can show a compelling reason for a different default. | What does a new child account look like before the user touches any setting? |
| 10. Geolocation | Switch geolocation options off by default, unless you can show a compelling reason. Give children an obvious sign when location tracking is active. | Is location off at first run? Can a child see, at a glance, that tracking is on? |
| 12. Profiling | Switch options that use profiling off by default, unless you can show a compelling reason for them to be on. | Which parts of this screen are personalized? What does the screen show with profiling off? |
| 13. Nudge techniques | Do not use nudge techniques to encourage children to give unnecessary personal data or to turn off privacy protections. | Are the "share more" and "share less" choices equal in size, color and effort? Does any copy make the private choice sound like a loss? |

### What you tell children and the tools you give them

| Standard | What the code asks for | What to check in a design review |
| --- | --- | --- |
| 4. Transparency | Give children privacy information that is concise, prominent and in clear language suited to their age. | Has a child in the target age range read this text in testing? |
| 11. Parental controls | If you provide parental controls, give the child age-appropriate information about them. If a parent or carer can monitor the child's activity or location, show the child a sign when that is active. | Does the child's view show that monitoring is on? |
| 14. Connected toys and devices | Make sure connected toys and devices include tools that enable conformance with the code. | Can someone find and change the settings on the device itself or at setup? |
| 15. Online tools | Provide prominent and accessible tools that help children exercise their data protection rights and report concerns. | How many taps from this screen to "delete my data" or "report a problem"? |

## Two points not to mix up with US COPPA

| | UK Children's Code | US COPPA Rule |
| --- | --- | --- |
| Who is a child? | The ICO describes the code as covering children up to age 18 (ICO news release, September 2, 2020). | "An individual under the age of 13" ([16 CFR 312.2](https://www.ecfr.gov/current/title-16/section-312.2)). |
| What is the main mechanism? | Standards for how you design the service ([section 123(1)](https://www.legislation.gov.uk/ukpga/2018/12/section/123)). No parent's consent switches the standards off. | Verifiable parental consent before you collect, use or disclose a child's personal information ([16 CFR 312.5(a)(1)](https://www.ecfr.gov/current/title-16/section-312.5)). |

One trap sits between the two. UK law also has an age of 13, but it is narrower. When a service offered directly to a child relies on consent as its lawful basis, a child under 13 needs consent from a holder of parental responsibility ([UK GDPR Article 8](https://www.legislation.gov.uk/eur/2016/679/article/8)). That is a rule about consent. It does not move the code's reach down from 18.

**What this changes in your work:** a 15-year-old is outside COPPA and inside the Children's Code. An age gate set at 13 does not answer the UK question.

## What may change

These points were checked on November 10, 2026. They will go out of date.

- **A new legal duty sits beside the code.** Since February 5, 2026, a service likely to be accessed by children must take the "children's higher protection matters" into account when it decides which design measures are appropriate ([UK GDPR Article 25(1A) and (1B)](https://www.legislation.gov.uk/eur/2016/679/article/25), inserted by [section 81 of the Data (Use and Access) Act 2025](https://www.legislation.gov.uk/ukpga/2025/18/section/81)).
- **The regulator's legal name has changed.** Since September 30, 2026, Part 5 of the Data Protection Act 2018 refers to "the Information Commission" ([section 123](https://www.legislation.gov.uk/ukpga/2018/12/section/123), amendment notes). This page uses "ICO", the name on the code.
- **The regulator must keep the code under review** and may amend or replace it ([section 126(3)](https://www.legislation.gov.uk/ukpga/2018/12/section/126), [section 123(2)](https://www.legislation.gov.uk/ukpga/2018/12/section/123)). An amended code must be laid before Parliament ([section 125](https://www.legislation.gov.uk/ukpga/2018/12/section/125)). Look for a review notice on the ICO's code page before you rely on this guide.
- **The UK consent age can now be changed by regulations.** Since April 29, 2026, the Secretary of State may set the Article 8 age anywhere from 13 to 16 ([UK GDPR Article 8(2A)](https://www.legislation.gov.uk/eur/2016/679/article/8)). On the date checked, Article 8 still said 13.

## Sources

- Data Protection Act 2018, sections [123](https://www.legislation.gov.uk/ukpga/2018/12/section/123), [125](https://www.legislation.gov.uk/ukpga/2018/12/section/125), [126](https://www.legislation.gov.uk/ukpga/2018/12/section/126) and [127](https://www.legislation.gov.uk/ukpga/2018/12/section/127) (legislation.gov.uk).
- UK GDPR, [Article 8](https://www.legislation.gov.uk/eur/2016/679/article/8) and [Article 25](https://www.legislation.gov.uk/eur/2016/679/article/25) (legislation.gov.uk).
- Data (Use and Access) Act 2025, [section 81](https://www.legislation.gov.uk/ukpga/2025/18/section/81) (legislation.gov.uk).
- Information Commissioner's Office, [Age appropriate design: a code of practice for online services](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/childrens-information/childrens-code-guidance-and-resources/age-appropriate-design-a-code-of-practice-for-online-services/). The code itself.
- UK government, [Child online safety: data protection and privacy](https://www.gov.uk/guidance/child-online-safety-data-protection-and-privacy), last updated September 27, 2021. Government guidance that summarizes the 15 standards.
- UK government, [Explanatory memorandum to the Age Appropriate Design Code 2020](https://www.gov.uk/government/publications/explanatory-memorandum-to-the-age-appropriate-design-code-2020-2020/explanatory-memorandum-to-the-age-appropriate-design-code-2020-2020) (June 11, 2020). Used for the code's status as a statutory code.
- Information Commissioner's Office, news release, "ICO's Children's Code will help protect children online" (September 2, 2020), read in a [republished copy](https://wired-gov.net/wg/news.nsf/print/ICOs+Childrens+Code+will+help+protect+children+online+02092020104500). Used for the dates and the age range.
- Children's Online Privacy Protection Rule, [16 CFR 312.2](https://www.ecfr.gov/current/title-16/section-312.2) and [16 CFR 312.5](https://www.ecfr.gov/current/title-16/section-312.5).
