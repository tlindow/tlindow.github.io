// AUTO-GENERATED from content/resume.md - DO NOT EDIT DIRECTLY
// Edit content/resume.md to update your resume and trigger instant hot reloading.

import { parseResumeMarkdown, ParsedResume } from "@/lib/parseResumeMarkdown";

export const rawResumeMarkdown = `# Tyler Lindow

**Engineering Manager — Fintech B2B & Partner Integrations Platform | Ex-Founder**  
Relocating to Seattle, WA  
(650) 580-5788 | [tyler.lindow@gmail.com](mailto:tyler.lindow@gmail.com)  
[linkedin.com/in/tlindow](https://linkedin.com/in/tlindow) | [github.com/tlindow](https://github.com/tlindow)

---

## Summary

Ex-founder and fintech engineering manager. Built 0→1 product (Beginner Work Inc.) after 6+ years at Affirm across Partner Engineering, merchant onboarding, and marketing products—owned Merchant Portal and affirm.com for the 500,000+ merchant portfolio, scaled developer-support engineering from 1 to 9, and owned technical operations and SLA reliability for Amazon ($10B+ GMV) and $100M+ merchant accounts.

Targeting Engineering Manager / Senior EM in Seattle fintech (payments, platform/DevX, partner integrations).

---



## Professional Experience



### Founder | Beginner Work Inc.

*San Diego, CA (Hybrid) | Mar 2026 – Jul 2026*

- Shipped a 0→1 fundraising pitch simulator (React/Next.js)—28 users logged in, 14 paid ≥$1 (incl. one $9/mo), 92 in-person conversations (5 VCs), and 6 attendees across 2 events; led discovery through GTM in four months.



### Software Engineering Manager (L7), Merchant Advocacy | Affirm

*San Diego, CA (Remote) | Mar 2025 – Feb 2026*

- **Scope:** Managed 6 software engineers as direct reports, partnering with Product, Design, and Content; owned affirm.com and Merchant Portal (React, TypeScript) serving SMB/ecommerce-integration merchants, including native onboarding onto Affirm’s payment method via API.
- **Checkout funnel (affirm.com):** Directed a 5-week revamp of affirm.com (~1M monthly viewers)—native customer onboarding funnels and mobile conversion. Attributed **$500K incremental GMV** to that launch in a 3-day pre–Black Friday / Cyber Monday 2025 window.
- **Merchant Portal reliability:** Raised availability 99.7% → 99.9% in one quarter and unblocked an Intuit launch covering hundreds of thousands of new merchants. Led weekly AI-tooling sessions where the team found and removed unused code paths that threw errant 5xxs and slowed incident diagnosis.
- **Tradeoff — domain decoupling:** Mediated RFCs and system design across Staff+, Directors, and four merchant-engineering teams; chose to decouple service boundaries and drop an unintended dashboard feature rather than force a database migration. Secured Director sign-off on merchant lifecycle architecture by Dec 2025 as groundwork toward a 99.99% availability target (not yet achieved).



### Developer Support Engineering Manager (L6 → L7), Partner Engineering | Affirm

*San Diego, CA (Remote) | Jul 2021 – Mar 2025*

- **Org design:** Promoted L6→L7. Grew developer-support engineering from 1 to 9; owned interview rubrics and early-team hiring decisions. Shifted Tier-1/Tier-2 load to operations so engineers owned platform reliability.
- **Promotions:** Weekly 1:1s and monthly career-growth reviews. Promoted a junior engineer to intermediate in ~1 year, then from support into product-building engineering; supported a second engineer’s promotion cycle.
- **Partner APIs & payments:** Owned technical operations and SLA reliability for strategic merchant accounts ($100M+ GMV) and Affirm’s flagship partner (Amazon, $10B+ GMV)—merchant checkout / confirmation-flow integrations via partner REST APIs and webhooks.
- **Collaboration — GMV signings:** With Sales Engineers, Technical Writers, and plugin partners, produced availability projections that let account management sign $100M+ GMV merchants.
- **SLA telemetry & observability:** Architected automated SLA reporting and root-cause summaries (Python, Flask, Snowflake), eliminating 16 hours/month of toil and systemizing 80% of workflows. Merchant-specific outages ranged from 20 minutes to 2 hours; worked with observability to index more merchant IDs, create dashboards, and set alerts so merchant-scoped outages became visible within 5–15 minutes for higher-volume merchants.



### Developer Support Engineer (L4 → L5), Partner Engineering | Affirm

*San Francisco, CA (Hybrid) | Sep 2019 – Jul 2021*

- **Merchant checkout integrations:** Promoted L4→L5. Primary technical liaison for 300+ SMB merchants; diagnosed JavaScript, REST API, and webhook defects in checkout / payment-method integrations on Shopify, Magento, WooCommerce, and Salesforce Commerce Cloud.
- **DevX feedback loop:** Built ETL pipelines towards Snowflake to cluster integration-defect patterns and convert developer feedback into platform fixes that reduced integration churn ~20% quarter over quarter.



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

- **Technical Toolkit:** Python, JavaScript, TypeScript, React, Next.js, Node.js, Flask, Snowflake, SQL, ETL Pipelines, REST APIs, Webhooks, CI/CD, Git/GitHub, SLA/SLO telemetry, observability, incident management, LLMs & agentic coding (Claude, Cursor)
- **Leadership & Management:** Hiring & team scale (1 to 9), performance management & promotions, org design / domain boundaries, RFC & system design mediation (Staff+ / Director), mentorship, incident management
- **B2B onboarding & Operations:** Partner Engineering, merchant checkout integrations (Shopify, Magento, WooCommerce, SFCC), self-serve onboarding & SDKs, Merchant Portal, SLA telemetry, GMV attribution

`;

export const parsedResume: ParsedResume = parseResumeMarkdown(rawResumeMarkdown);
