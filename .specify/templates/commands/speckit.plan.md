---
description: Create a detailed implementation plan with step-by-step instructions, file modifications, and constitution compliance checks.
handoffs:
  - label: Start Implementation
    agent: speckit.implement
    prompt: Begin implementing the feature according to this plan...
---

## User Input

```text
$ARGUMENTS
```

You **MUST** consider the user input before proceeding (if not empty).

## Outline

You are creating a detailed implementation plan that breaks down a feature specification into concrete, actionable steps. This plan ensures constitution compliance and provides clear guidance for developers.

Follow this execution flow:

1. **Load Specification and Constitution**
   - Read the feature specification document (user should provide path)
   - Read `.specify/memory/constitution.md`
   - Read `.specify/templates/plan-template.md` as structural guide
   - Extract functional requirements, technical design, and constraints

2. **Pre-Implementation Analysis**
   
   - Identify all files requiring modification
   - Determine modification type (add, modify, extend, none)
   - Estimate lines of code and complexity for each change
   - Assess risk level (low/medium/high) per file
   - Note dependencies between steps

3. **Constitution Pre-Check**
   
   Before planning implementation, verify:
   - [ ] No shared component modifications in design
   - [ ] Observable subscription patterns identified
   - [ ] Validation functions scoped
   - [ ] Backward compatibility strategy clear
   - [ ] TypeScript types defined
   - [ ] Test coverage approach planned

4. **Break Down Implementation Phases**

   **Phase 1: Preparation**
   - Review existing code implementation
   - Create feature branch
   - Set up test fixtures and mocks
   - Document baseline behavior
   
   **Phase 2: Core Implementation**
   Break into numbered steps, each specifying:
   - **Step X.Y**: Descriptive name
   - **File**: Exact path
   - **Action**: What to add/modify/extend
   - **Code Structure**: Pseudo-code or example
   - **Verification**: How to confirm step completed
   - **Constitution Principle**: Which principle this step upholds
   
   Example steps:
   - Import dependencies (Principle 2: Observable imports)
   - Add component properties (Principle 2: Subscription storage)
   - Implement validation methods (Principle 3: Type guards)
   - Modify lifecycle methods (Principle 2: Subscription management)
   - Add business logic (Principle 4: Extend, don't replace)
   
   **Phase 3: Testing**
   - Write unit tests for each component/service
   - Run coverage analysis
   - Execute manual testing scenarios
   - Fix linting and compilation errors
   
   **Phase 4: Documentation & Review**
   - Update implementation docs
   - Create IMPLEMENTATION.md with progress tracking
   - Self-review against constitution
   - Prepare for code review

5. **Document Files to Modify**
   
   Create detailed table:
   
   | File Path | Change Type | Est. Lines | Risk Level | Constitution Principle |
   |-----------|-------------|-----------|-----------|----------------------|
   | path/to/component.ts | Modify | ~50 | Low | 2, 3, 5 |
   | path/to/component.spec.ts | Add tests | ~100 | Low | 6 |
   
   **No Changes Required** section:
   - List files explicitly NOT changing (templates, shared components, etc.)

6. **Testing Checklist**
   
   Detail specific test cases:
   
   **Unit Tests**:
   - Test 1: [Description] → Expected: [Outcome]
   - Test 2: [Edge case] → Expected: [Fallback behavior]
   - Test 3: [Integration] → Expected: [Service interaction]
   
   **Manual Testing Scenarios**:
   1. Happy path scenario with steps and expected results
   2. Edge case scenarios
   3. Performance measurements
   4. Browser compatibility checks

7. **Risk Assessment & Mitigation**
   
   For each identified risk:
   - **Risk**: Description
   - **Probability**: Low/Medium/High
   - **Impact**: Low/Medium/High
   - **Mitigation**: Specific strategy
   
   **Rollback Strategy**:
   - Step-by-step rollback procedure
   - Estimated rollback time
   - Verification steps

8. **Dependencies & Blockers**
   
   List:
   - Upstream tasks or approvals needed
   - Library versions required
   - Potential blockers and workarounds

9. **Code Review Checklist**
   
   Create comprehensive checklist for reviewers:
   
   **Constitution Compliance**:
   - [ ] Principle 1: No shared component mods
   - [ ] Principle 2: Subscription lifecycle managed
   - [ ] Principle 3: Inputs validated
   - [ ] Principle 4: Backward compatible
   - [ ] Principle 5: Strict typing maintained
   - [ ] Principle 6: 90%+ test coverage
   
   **Code Quality**:
   - [ ] No TypeScript errors
   - [ ] No linting errors
   - [ ] JSDoc comments present
   - [ ] Error handling implemented
   
   **Testing**:
   - [ ] All unit tests pass
   - [ ] Manual testing completed
   - [ ] Coverage threshold met

10. **Success Criteria**
    
    Define completion requirements:
    - [ ] All functional requirements met
    - [ ] Tests passing with coverage
    - [ ] No compilation or linting errors
    - [ ] Code review approved
    - [ ] Performance targets achieved
    - [ ] Documentation complete

11. **Save Implementation Plan**
    
    Write to: `specs/[FEATURE_ID]-[short-name]/plan.md`
    
    Include placeholder section for "Actual Implementation Notes" to be filled during development

12. **Output Summary**
    
    Provide user with:
    - Plan file path
    - Total estimated effort
    - Critical path dependencies
    - Key risks to monitor
    - Recommended handoff to implementation phase

## Effort Estimation Guidelines

- **Simple property addition**: 5-15 minutes
- **Method implementation**: 30-60 minutes
- **Complex logic with validation**: 1-2 hours
- **Lifecycle modification**: 30-60 minutes
- **Unit tests (comprehensive)**: 2-4 hours
- **Manual testing**: 1-2 hours
- **Documentation**: 30-60 minutes

Adjust based on:
- Developer familiarity with codebase
- Complexity of business logic
- Number of edge cases
- Integration complexity

## Quality Checklist

### Completeness
- [ ] All specification requirements addressed in plan
- [ ] Every file modification detailed
- [ ] All test scenarios planned
- [ ] Risks identified with mitigation

### Constitution Compliance
- [ ] Each step references relevant principle(s)
- [ ] No violations planned
- [ ] Validation strategy clear
- [ ] Testing strategy meets 90% coverage goal

### Clarity
- [ ] Steps are concrete and actionable
- [ ] Dependencies clearly stated
- [ ] Success criteria measurable
- [ ] Effort estimates reasonable

### Practicality
- [ ] Plan is achievable by competent developer
- [ ] Rollback strategy is realistic
- [ ] Timeline accounts for reviews and testing

## Special Considerations

- **Incremental Progress**: Plan should enable step-by-step implementation with verification at each stage
- **Parallel Work**: Identify steps that can be done concurrently (e.g., test setup while implementing logic)
- **Checkpoint Commits**: Suggest logical commit points for version control
- **Review Points**: Indicate when interim reviews might be beneficial (e.g., after core logic, before testing)

## Output Format

Create a structured Markdown document following the plan template. Use:
- Clear phase/step numbering
- Tables for file lists and risk assessments
- Checklists for reviews and success criteria
- Code blocks for pseudo-code examples
- Effort estimates in hours/minutes

The plan should be detailed enough that a developer can follow it step-by-step without significant ambiguity, while remaining flexible for reasonable deviations discovered during implementation.
