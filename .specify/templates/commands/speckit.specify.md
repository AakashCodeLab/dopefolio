---
description: Create a comprehensive feature specification document aligned with project constitution principles.
handoffs:
  - label: Create Implementation Plan
    agent: speckit.plan
    prompt: Create an implementation plan based on this specification...
---

## User Input

```text
$ARGUMENTS
```

You **MUST** consider the user input before proceeding (if not empty).

## Outline

You are creating a feature specification document that defines requirements, design, and acceptance criteria. This specification must align with all project constitution principles.

Follow this execution flow:

1. **Load Constitution and Templates**
   - Read `.specify/memory/constitution.md`
   - Read `.specify/templates/spec-template.md` as structural guide
   - Note all 6 principles that must be addressed

2. **Gather Feature Context**
   - Parse user input for feature description
   - Identify affected components/services
   - Determine business context and user needs
   - Reference any existing specs (e.g., in `specs/` directory) for patterns

3. **Constitution Alignment Check**
   
   For each principle, document compliance strategy:
   
   - **Principle 1 (Component Consumer-First)**: 
     - Confirm no shared component modifications required
     - Document how existing API will be leveraged
     - If API insufficient, flag for architecture review
   
   - **Principle 2 (Observable-Driven State)**:
     - Identify all async data flows
     - Plan Observable subscriptions
     - Document lifecycle management approach
   
   - **Principle 3 (Validation-First)**:
     - List all external inputs requiring validation
     - Define type guards needed
     - Document fallback priority chain
   
   - **Principle 4 (Backward Compatibility)**:
     - List existing functionality to preserve
     - Document migration requirements (if any)
     - Plan for dual support during transition
   
   - **Principle 5 (Type-Safe TypeScript)**:
     - Define TypeScript types/interfaces needed
     - Plan explicit return types
     - Document strict null handling
   
   - **Principle 6 (Testing Standards)**:
     - Outline unit test scenarios (happy path + edge cases)
     - Plan for 90%+ coverage
     - Define manual testing scenarios

4. **Write Specification Sections**

   Use the spec template structure, filling in:
   
   **Overview**: High-level feature description (2-3 sentences)
   
   **Business Context**:
   - Current state of system
   - Problems to solve
   - Desired outcomes
   
   **Functional Requirements**:
   - FR-1, FR-2, etc. with testable acceptance criteria
   - Each FR references constitution principle(s) it upholds
   
   **Non-Functional Requirements**:
   - Performance targets (with measurements)
   - Browser compatibility
   - Accessibility standards
   
   **Technical Design**:
   - Architecture overview
   - Component/service modifications (consumption-side only)
   - Data flow diagrams or descriptions
   - Validation and error handling strategy
   
   **User Scenarios**:
   - Happy path walkthrough
   - Edge cases and error scenarios
   - Expected behavior for each
   
   **Backward Compatibility Analysis**:
   - What remains unchanged
   - Migration requirements
   - Rollback strategy
   
   **Testing Strategy**:
   - Unit tests required (specific test cases)
   - Manual testing scenarios
   - Coverage targets
   
   **Dependencies**:
   - External libraries (no modifications)
   - Shared components (consumption only)
   
   **Risks & Mitigation**:
   - Technical risks with likelihood and impact
   - Mitigation strategies for each

5. **Validation**
   
   Before finalizing:
   - [ ] All 6 constitution principles explicitly addressed
   - [ ] No shared component modifications planned
   - [ ] All requirements are testable and measurable
   - [ ] Backward compatibility guaranteed
   - [ ] Type safety approach documented
   - [ ] Test coverage strategy defined (90%+)

6. **Save Specification**
   
   Write to: `specs/[FEATURE_ID]-[short-name]/spec.md`
   
   Follow existing spec directory structure (see `specs/ZPDT-84115-workflow-tab-query/` as reference)

7. **Output Summary**
   
   Provide user with:
   - Specification file path
   - Constitution compliance summary (which principles apply and how)
   - Key risks identified
   - Recommended next steps (typically: create implementation plan)
   - Suggested handoff to `speckit.plan` agent

## Quality Checklist

### Completeness
- [ ] All sections from template populated
- [ ] No placeholders or TODOs left unresolved
- [ ] Acceptance criteria specific and testable

### Constitution Compliance
- [ ] Principle 1: No shared component mods, only consumption patterns
- [ ] Principle 2: Observable subscriptions planned with lifecycle management
- [ ] Principle 3: All inputs validated with type guards and fallbacks
- [ ] Principle 4: Backward compatibility strategy documented
- [ ] Principle 5: TypeScript types defined, explicit return types planned
- [ ] Principle 6: 90%+ test coverage strategy with specific test cases

### Clarity
- [ ] Technical terms defined
- [ ] User scenarios easy to understand
- [ ] Design rationale explained
- [ ] Risks clearly stated with mitigation

### Actionability
- [ ] Developers can implement from this spec
- [ ] Testers can create test plan from this spec
- [ ] Reviewers can validate compliance from this spec

## Special Considerations

- **Feature ID Format**: Use JIRA ticket ID or descriptive format like `ZPDT-12345` or `feature-name`
- **Existing Patterns**: Reference similar implemented features in codebase as examples
- **Constitution References**: Use format "Principle X (Short Name)" when referencing
- **Measurable Targets**: All NFRs must have specific, testable thresholds

## Output Format

Create a well-structured Markdown document following the spec template. Include:
- Clear headings and subheadings
- Bullet lists for requirements and criteria
- Code examples where helpful (consumption patterns, type definitions)
- Tables for organizing related information
- Checkboxes for acceptance criteria and validation items

The specification should be comprehensive enough that implementation can proceed without significant ambiguity, while remaining flexible enough to accommodate refinements discovered during development.
