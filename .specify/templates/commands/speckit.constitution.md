---
description: Create or update the project constitution from interactive or provided principle inputs, ensuring all dependent templates stay in sync.
handoffs: 
  - label: Build Specification
    agent: speckit.specify
    prompt: Implement the feature specification based on the updated constitution. I want to build...
---

## User Input

```text
$ARGUMENTS
```

You **MUST** consider the user input before proceeding (if not empty).

## Outline

You are updating the project constitution at `.specify/memory/constitution.md`. This file contains the foundational engineering principles and governance rules for the project. Your job is to (a) collect/derive concrete values, (b) validate the constitution structure, and (c) propagate any amendments across dependent artifacts.

Follow this execution flow:

1. Load the existing constitution at `.specify/memory/constitution.md`.
   - Validate document structure and completeness
   - Identify any TODOs or incomplete sections
   - Note current version and last amended date

2. Collect/derive updates from user input:
   - If user input supplies new principles, integrate them
   - If user requests modifications, update relevant sections
   - For governance dates: `RATIFICATION_DATE` is the original adoption date, `LAST_AMENDED_DATE` is today if changes are made
   - `CONSTITUTION_VERSION` must increment according to semantic versioning rules:
     - MAJOR: Backward incompatible governance/principle removals or redefinitions
     - MINOR: New principle/section added or materially expanded guidance
     - PATCH: Clarifications, wording, typo fixes, non-semantic refinements
   - If version bump type ambiguous, propose reasoning before finalizing

3. Draft the updated constitution content:
   - Preserve heading hierarchy and structure
   - Ensure each Principle section: succinct name line, paragraph (or bullet list) capturing non‑negotiable rules, explicit rationale
   - Ensure Governance section lists amendment procedure, versioning policy, and compliance review expectations
   - Update Sync Impact Report as HTML comment at top

4. Consistency propagation checklist:
   - Read `.specify/templates/plan-template.md` and ensure "Constitution Check" sections align with updated principles
   - Read `.specify/templates/spec-template.md` for scope/requirements alignment—update if constitution adds/removes mandatory sections
   - Read `.specify/templates/tasks-template.md` and ensure task categorization reflects new or removed principle-driven task types
   - Read any runtime guidance docs (e.g., `README.md`, `docs/quickstart.md`) and verify alignment

5. Produce a Sync Impact Report (prepend as an HTML comment at top of the constitution file):
   - Version change: old → new
   - List of modified principles (old title → new title if renamed)
   - Added sections
   - Removed sections
   - Templates requiring updates (✅ updated / ⚠ pending) with file paths
   - Follow-up TODOs if any sections intentionally deferred

6. Validation before final output:
   - No remaining unexplained TODOs
   - Version line matches report
   - Dates ISO format YYYY-MM-DD
   - Principles are declarative, testable, and free of vague language
   - All template files reference correct principle numbers

7. Write the completed constitution back to `.specify/memory/constitution.md` (overwrite).

8. Output a final summary to the user with:
   - New version and bump rationale
   - Any files flagged for manual follow-up
   - Suggested commit message (e.g., `docs: amend constitution to vX.Y.Z (principle additions + governance update)`)

## Formatting & Style Requirements

- Use Markdown headings exactly as in the template (do not demote/promote levels)
- Wrap long rationale lines to keep readability (<100 chars ideally)
- Keep a single blank line between sections
- Avoid trailing whitespace
- Use consistent list formatting (dashes for bullets, numbered lists where sequential)

## Validation Rules

If the user supplies partial updates (e.g., only one principle revision), still perform validation and version decision steps.

If critical info missing, insert `TODO(<FIELD_NAME>): explanation` and include in the Sync Impact Report under deferred items.

Always operate on the existing `.specify/memory/constitution.md` file—never create from scratch unless it doesn't exist.

## Special Considerations

- **Agent References**: This constitution is agent-agnostic. Avoid references to specific AI assistants.
- **Technology Stack**: Constitution should reflect actual project technology (Angular, TypeScript, RxJS, Dewdrops).
- **Existing Patterns**: Align new principles with proven patterns in the codebase (e.g., Observable subscriptions, component architecture).
- **Backward Compatibility**: Any constitutional changes must not retroactively invalidate existing compliant code.
