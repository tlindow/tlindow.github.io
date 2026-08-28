# Protobuf Mastery: Merchant Settlements & Payout Rails

Welcome to the interactive Protobuf (`.proto`) tutorial! This hands-on exercise is designed around **B2B Merchant Settlements, Bank Account Routing, Fee Pricing Schedules, and Ledger Payouts**.

Instead of reading static syntax documentation, you will learn Protobuf by **participating in an interactive PR code review on GitHub with GitHub Copilot as your pedagogical mentor**.

---

## 🎯 Learning Objectives

By the end of this exercise, you will master the foundational and production-grade concepts of **Protocol Buffers (proto3)**:

1. **Schema Packaging & Syntax**: `syntax = "proto3"`, package namespacing, and importing Google Well-Known Types (`google.protobuf.Timestamp`).
2. **Monetary Precision vs Floating Point**: Designing lossless financial structures (e.g. `Money` with ISO currency codes and integer units/minor-units or nanos) instead of IEEE-754 `float`/`double`.
3. **Enum Semantics & Proto3 Zero-Value Baseline**: Why proto3 requires `_UNSPECIFIED = 0` as the first enum value and how default values affect wire transmission.
4. **Polymorphic Destinations with `oneof`**: Modeling mutually exclusive payout methods (Tokenized Bank Account vs ACH/FedNow vs International Wire) without wasting wire bytes or requiring complex validation logic.
5. **Hierarchical Collections & Dynamic Data**: Using `repeated` for ledger line items / fee schedules and `map<string, string>` for merchant reconciliation metadata.
6. **Field Numbering & Schema Evolution**: Understanding the 1-byte wire encoding optimization for field tags `1` through `15`, tag immutability, and using `reserved` to prevent accidental tag collisions across team versions.
7. **gRPC Interface Contracts**: Defining Unary RPCs (idempotent batch creation) and Server Streaming RPCs (streaming ledger events as settlements clear financial rails).

---

## 🏗️ Domain Scenario: High-Throughput Merchant Settlements

You are designing the contract for a merchant platform settlement engine. Every settlement cycle:
- Millions of dollars in merchant transactions are aggregated into batches.
- Contractual fee deductions (basis points + fixed per-transaction fees) and rolling reserve withholdings are applied.
- The net payout amount is computed and routed to the merchant's chosen bank destination rail (Direct ACH, FedNow real-time rail, International Wire, or a Tokenized Account).
- A real-time ledger stream emits events as settlement batches transition through states (`PENDING` → `CALCULATING` → `FUNDED` → `IN_TRANSIT` → `SETTLED` / `FAILED`).

---

## 🔄 How the Interactive PR Review Loop Works

```
+-------------------------------------------------------------+
| 1. Open the PR diff on GitHub                              |
|    Navigate to exercises/proto-learning/merchant_settlement.proto
+-------------------------------------------------------------+
                              │
                              ▼
+-------------------------------------------------------------+
| 2. Add an inline comment on a step                          |
|    Explain your conceptual approach or write pseudocode     |
+-------------------------------------------------------------+
                              │
                              ▼
+-------------------------------------------------------------+
| 3. Copilot scaffolds your thought into Proto syntax         |
|    Copilot generates a slightly improved diff suggestion    |
|    and asks reflection questions on conceptual trade-offs   |
+-------------------------------------------------------------+
                              │
                              ▼
+-------------------------------------------------------------+
| 4. Review & respond to Copilot's prompt                     |
|    Refine your mental model and update your comments        |
+-------------------------------------------------------------+
                              │
                              ▼
+-------------------------------------------------------------+
| 5. Copilot validates canonical production syntax            |
|    Loop repeats until each section reaches production grade |
+-------------------------------------------------------------+
```

---

## 📝 Exercise Breakdown

The starter file [`exercises/proto-learning/merchant_settlement.proto`](./merchant_settlement.proto) contains 6 distinct challenge steps:

### Step 1: Monetary Precision
- **Goal**: Model a `Money` message representing exact currency amounts (e.g., `$1,250.75 USD`).
- **Prompt Idea**: Start by commenting how you usually represent money in APIs (e.g. integer cents, float dollars, currency string). Let Copilot guide you through Google's canonical `google.type.Money` structure (`int64 units`, `int32 nanos`, `string currency_code`).

### Step 2: Lifecycle Enums & Rails
- **Goal**: Define `SettlementStatus` and `DisbursementRail` enums.
- **Prompt Idea**: Write out the enum states. Observe how Copilot highlights the proto3 `0` value convention (`SETTLEMENT_STATUS_UNSPECIFIED = 0`) and enum prefix conventions.

### Step 3: Polymorphic Payout Destinations
- **Goal**: Model mutually exclusive payout rails (ACH routing/account, Tokenized Account ID, International SWIFT/IBAN).
- **Prompt Idea**: Comment proposing multiple optional fields vs a `oneof` block.

### Step 4: Line Items & Fee Deduction Breakdown
- **Goal**: Model itemized transaction charges, fee tiers, dispute adjustments, and reconciliation key-value tags.
- **Prompt Idea**: Comment how you'd represent an array of line items, fee breakdown objects, and custom key-value metadata.

### Step 5: The SettlementBatch Aggregate
- **Goal**: Compose the complete root message with field tags, timestamps, and schema reservations.
- **Prompt Idea**: Propose field order and numbers. Copilot will introduce why tags 1-15 matter for hot paths and how `reserved` protects deleted fields.

### Step 6: gRPC Service Interface
- **Goal**: Write unary and server-streaming service definitions for batch creation and ledger feeds.
- **Prompt Idea**: Define the RPC signatures and request/response envelopes.

---

## 🚀 Getting Started

1. Check out the open Pull Request on GitHub.
2. Go to the **Files changed** tab.
3. Click on the line numbers next to any of the `// [STEP X EXERCISE]` stubs to add your comments.
4. Let the conversation with Copilot begin!
