// AUTO-GENERATED from content/resume.md - DO NOT EDIT DIRECTLY
// Edit content/resume.md to update your resume and trigger instant hot reloading.

import { parseResumeMarkdown, ParsedResume } from "@/lib/parseResumeMarkdown";

export const rawResumeMarkdown = `# Tyler Lindow

**Engineering Manager | Fintech Platform & 0→1 | Ex-Founder**  
San Diego, CA | Open to relocation  
(650) 580-5788 | [tyler.lindow@gmail.com](mailto:tyler.lindow@gmail.com)  
[linkedin.com/in/tlindow](https://linkedin.com/in/tlindow) | [github.com/tlindow](https://github.com/tlindow)

---

## Summary

Fintech engineering manager with 6+ years at Affirm across Partner Engineering, merchant onboarding, and marketing products. Owned Merchant Portal and affirm.com for the 500,000+ merchant portfolio; scaled developer-support engineering from 1 to 9; owned technical operations and SLA reliability for Amazon ($10B+ GMV) and $100M+ merchant accounts. Ex-founder (Beginner Work Inc.). Targeting Engineering Manager / Senior EM roles in fintech (payments, platform/DevX, partner integrations).

---



## Professional Experience



### Founder | Beginner Work Inc.

*San Diego, CA | Mar 2026 – Jul 2026*

- Built and launched a fundraising pitch simulator (React/Next.js) as sole founder; owned product discovery, architecture, and GTM. Validated demand through 92 in-person conversations (including 5 VCs) and 28 early users.
- Wound down in Jul 2026 rather than raise. Personal runway could not cover a full fundraising cycle; returned to Engineering Manager roles.

### Software Engineering Manager (L7), Merchant Advocacy | Affirm

*San Diego, CA (Remote) | Mar 2025 – Feb 2026*

- **Scope:** Managed 6 software engineers as direct reports, partnering with Product, Design, and Content; owned affirm.com and Merchant Portal (React, TypeScript) serving SMB/ecommerce-integration merchants, including native onboarding onto Affirm’s payment method via API.
- **affirm.com revamp:** Led a 5-week cross-functional rebuild of affirm.com (~1M monthly viewers) with Design, Marketing, and Engineering for web/mobile design continuity. Shipped onboarding and mobile conversion paths; generated an additional $500K GMV in a 3-day pre–Black Friday sale. Unlocked fast-follow A/B testing and CMS so marketing and eng could iterate without another full redesign cycle.
- **Org absorption:** After an engineering manager left, absorbed affirm.com ownership and supporting eng surfaces with no replacement hire; kept Merchant Portal and affirm.com delivery on track with no operational regression.
- **Merchant Portal reliability:** Raised availability 99.7% → 99.9% in one quarter and unblocked an Intuit launch covering hundreds of thousands of new merchants. Led weekly AI-tooling sessions where the team found and removed unused code paths that threw errant 5xxs and slowed incident diagnosis.
- **Tradeoff (domain decoupling):** Mediated RFCs and system design across Staff+, Directors, and four merchant-engineering teams; chose to decouple service boundaries and drop an out-of-scope dashboard feature rather than force a database migration. Secured Director sign-off on merchant lifecycle architecture by Dec 2025 as groundwork toward a 99.99% availability target.



### Developer Support Engineering Manager (L6 → L7), Partner Engineering | Affirm

*San Diego, CA (Remote) | Jul 2021 – Mar 2025*

- **Org design:** Grew the developer-support engineering function from 1 to 9 engineers; owned interview rubrics and early-team hiring decisions. Shifted Tier-1/Tier-2 load to operations so engineers owned platform reliability.
- **Promotions:** Ran weekly 1:1s and monthly career-growth reviews across a 9-engineer team; promoted a junior engineer to intermediate in ~1 year and then into product-building engineering, and supported a second engineer’s promotion cycle.
- **Partner APIs & payments:** Owned technical operations and SLA reliability for strategic merchant accounts ($100M+ GMV) and Affirm’s flagship partner (Amazon, $10B+ GMV). Merchant checkout / confirmation-flow integrations via partner REST APIs and webhooks.
- **SLA recovery:** Restored monthly attainment of an internal 99.9% availability target (also our partner commitments) through Mar 2025 after multiple missed months in 2024; shared metrics dashboards with Partner APIs and SRE to coordinate incident response across application code, infrastructure, and communications.
- **Collaboration (GMV signings):** With Sales Engineers, Technical Writers, and plugin partners, produced availability projections that let account management sign $100M+ GMV merchants.
- **SLA telemetry:** Architected automated SLA reporting and root-cause summaries (Python, Flask, Snowflake), eliminating 16 hours/month of toil and automating ~80% of SLA report generation and RCA drafting.
- **Observability:** Built per-merchant dashboards and alerting that cut detection time for higher-volume merchant-scoped outages to under 5 minutes (previously 20 minutes–2 hours unnoticed).



### Developer Support Engineer (L4 → L5), Partner Engineering | Affirm

*San Francisco, CA (Hybrid) | Sep 2019 – Jul 2021*

- **Merchant checkout integrations:** Promoted L4→L5. Primary technical liaison for 300+ SMB merchants; diagnosed JavaScript, REST API, and webhook defects in checkout / payment-method integrations on Shopify, Magento, WooCommerce, and Salesforce Commerce Cloud.
- **DevX feedback loop:** Built ETL pipelines towards Snowflake to cluster integration-defect patterns and convert developer feedback into platform fixes that reduced ticket inbound rate ~20% quarter over quarter.



### Lead Software Engineering Immersive Resident | Galvanize Inc

*San Francisco, CA | May 2019 – Aug 2019*

- Directed technical onboarding and multi-repo code review for ~20 Hack Reactor students (full-stack JavaScript, Git).



### Experience Development Specialist & Prototyping Studio Coordinator | The Tech Interactive

*San Jose, CA | May 2017 – Jan 2019*

- Partnered with Google on sensor-API workshops for 400+ visitors; engineered generative workshop signage in JavaScript (p5.js); Monthly Innovator Award.



### Design Code Build Instructor | Computer History Museum

*Mountain View, CA | Mar 2017 – Nov 2018*

- Guided 1,000+ students and volunteers through software logic and physical computing workshops.

---



## Education

- **Northwestern University** | Learning Sciences graduate coursework *(Evanston, IL)*
- **University of California, San Diego** | B.S. NanoEngineering, *Cum Laude* *(La Jolla, CA)*
- **Software engineering:** Hack Reactor Advanced Software Engineering Immersive; Deep Atlas Applied AI & ML residency
- Additional: Olin College of Engineering SEER (Summer Engineering Education Research)

---



## Skills & Toolkits

- **Technical Toolkit:** Python, JavaScript, TypeScript, React, Next.js, Node.js, Flask, Snowflake, SQL, ETL Pipelines, REST APIs, Webhooks, CI/CD, Git/GitHub, SLA/SLO telemetry, observability, LLMs & agentic coding (Claude, Cursor)
- **Leadership & Management:** Performance management & promotions, org design / domain boundaries, mentorship, incident management
- **B2B onboarding & Operations:** Partner Engineering, merchant checkout integrations (Shopify, Magento, WooCommerce, SFCC), self-serve onboarding & SDKs, Merchant Portal, SLA telemetry, GMV attribution

`;

export const parsedResume: ParsedResume = parseResumeMarkdown(rawResumeMarkdown);
