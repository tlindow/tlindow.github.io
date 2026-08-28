## 📚 Interactive Tutorial: Learning Protobuf via Merchant Settlements & Payout Rails

This PR introduces an interactive **Protocol Buffers (`.proto`)** learning exercise scaffolded for the **Merchant Financial Platform (Settlements, Payouts, Bank Rails & Fee Pricing)** domain.

---

### 🎯 How to Use This PR

1. Navigate to the **Files changed** tab: [`exercises/proto-learning/merchant_settlement.proto`](exercises/proto-learning/merchant_settlement.proto).
2. For each step (`[STEP 1]` through `[STEP 6]`), add an inline comment sharing your conceptual approach or pseudocode.
3. **GitHub Copilot** (guided by `.github/copilot-instructions.md`) will:
   - Convert your conceptual comment verbatim into a proto code draft.
   - Propose a scaffolded improvement (a "slightly better version").
   - Ask reflection questions highlighting trade-offs and inconsistencies.
4. Reply to Copilot's review threads until canonical production syntax is achieved.

---

### 📋 Learning Milestones Checklist

- [ ] **Step 1: Monetary Precision** — Lossless multi-currency modeling (`int64 units`, `int32 nanos`, `currency_code`) vs floating-point.
- [ ] **Step 2: Lifecycle Enums** — Defining `SettlementStatus` and `DisbursementRail` with `_UNSPECIFIED = 0`.
- [ ] **Step 3: Polymorphic Destinations (`oneof`)** — Tokenized account vs Direct ACH/FedNow vs International Wire.
- [ ] **Step 4: Itemized Ledger & Pricing Fees** — `repeated` structures and `map<string, string>` merchant metadata.
- [ ] **Step 5: SettlementBatch Aggregate** — Field tags 1–15 single-byte wire optimization and `reserved` evolution tags.
- [ ] **Step 6: gRPC Service & Streaming** — Unary idempotent batch RPCs + Server Streaming ledger events.
