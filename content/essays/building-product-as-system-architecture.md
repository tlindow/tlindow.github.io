# Building Product as System Architecture

*In September of 2025, I took the lead to bring more cohesion across the merchant engineering organization at Affirm to develop the merchant lifecycle orchestrator deployable target as part of a multi-year effort to lay the groundwork for 99.99% availability across the application suite.*

---

By December of 2025, we had not only developed the technical architecture, with sign-off from our senior directors, but we had also laid the groundwork for an MCP-ready implementation of the architecture. This intelligent routing layer would reduce team dependencies and put us in a position to further product-led growth for merchant onboarding.

As the engineering manager overseeing this program, I set up working meetings with four separate teams to enable our tech lead to see around architectural corners only the other tech leads would know about (e.g., are we choosing to consolidate this endpoint or will it become deprecated in a future build?). I also set up kickoff and close meetings with upward and peer leadership to say, "Work with us! And if you are too busy, tell us."

Building system architecture is too often seen as simply a requirement to appease the high standards of enterprise customers. System architecture, along with any technical debt work, is always an act of building the core product. 

- "Are our systems fast enough to get hesitant users to think, 'that was easy' and go tell their friends?"
- "By reducing confusion about data discrepancies in our system, will we grow the bottom line?"
- "If we have another incident, will users leave us, or will they leave us because they just didn't understand how valuable the dashboard was to them?"

In this project, I made a clear decision early on when faced with the option to tell another team to do a database migration or drop a dashboard customers found useful: 

> "Drop the dashboard—the product is causing these users to do more work. And don't migrate the database—the data schemas are correct. I have found a way for our operations teams to provide this dashboard data and provide more holistic support."

It's not a failure to require operational support at a product- and engineering-led company—it's a necessary growth pattern for building a system that feels like a human.
