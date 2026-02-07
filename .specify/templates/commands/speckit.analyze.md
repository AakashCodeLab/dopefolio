---
description: Analyze repository structure and component consumption patterns to inform feature implementation strategies.
handoffs:
  - label: Create Specification
    agent: speckit.specify
    prompt: Based on the analysis, create a feature specification for...
---

## User Input

```text
$ARGUMENTS
```

You **MUST** consider the user input before proceeding (if not empty).

## Outline

You are analyzing the codebase to understand existing patterns, particularly how shared components are consumed. This analysis informs implementation strategies that comply with the project constitution.

Follow this execution flow:

1. **Load Constitution**
   - Read `.specify/memory/constitution.md`
   - Note Principle 1 (Component Consumer-First Architecture) constraints
   - Identify other relevant principles for the analysis goal

2. **Understand the Request**
   - Parse user input to identify the target component or feature
   - Determine if this is about:
     - Shared component consumption patterns
     - Feature implementation strategy
     - Architecture decision
     - Code pattern discovery

3. **Perform Targeted Analysis**

   **For Shared Component Analysis**:
   - Use `codebase_search` to find component import/usage patterns
   - Identify component selector usage in templates
   - Find configuration objects and input bindings
   - Locate service integrations
   - Document component API (inputs, outputs, methods)

   **For Feature Implementation Analysis**:
   - Find similar existing features in codebase
   - Identify relevant services and utilities
   - Document existing state management patterns
   - Note routing and navigation patterns
   - Check test coverage patterns

   **For Architecture Pattern Analysis**:
   - Search for Observable subscription patterns
   - Identify validation/type guard usage
   - Document error handling strategies
   - Find lifecycle management examples (ngOnInit/ngOnDestroy)

4. **Document Findings**
   
   Create analysis report with:
   - **Component/Feature Overview**: What it is and where it's used
   - **API Surface**: Inputs, outputs, configuration options
   - **Consumption Pattern**: How products/modules currently use it
   - **Extensibility Points**: Available hooks without modifying source
   - **Constitution Compliance**: Which principles apply
   - **Recommendations**: Implementation strategies that follow Principle 1

5. **Identify Implementation Strategy**
   
   Based on analysis, propose:
   - **Preferred Approach**: Using existing API (constitution-compliant)
   - **Alternative Approaches**: If existing API insufficient
   - **Required Changes**: What needs to happen at consumption point
   - **Risks**: Potential issues and mitigation strategies

6. **Output Structured Analysis**
   
   Present findings in this format:
   ```markdown
   # Analysis: [Component/Feature Name]
   
   ## Component Overview
   [What it is, where it lives, what it does]
   
   ## Current Consumption Patterns
   [How it's currently used across products]
   
   ## API Documentation
   ### Inputs
   - `inputName`: Type - Description
   
   ### Outputs
   - `outputName`: Type - Description
   
   ### Configuration Objects
   [Structure of config objects]
   
   ## Implementation Strategy for [User's Goal]
   
   ### Constitution Compliance
   - Principle 1: [How to achieve goal without modifying component]
   - Principle 2: [Observable patterns to use]
   - Principle 3: [Validation approach]
   
   ### Recommended Approach
   [Step-by-step strategy using existing API]
   
   ### Code Examples
   [Pseudo-code showing consumption pattern]
   
   ## Risks & Considerations
   [Potential issues and mitigation]
   
   ## Next Steps
   - [ ] Create feature specification
   - [ ] Implement using recommended approach
   - [ ] Write tests covering scenarios
   ```

7. **Validation**
   - Ensure recommendations don't violate Principle 1
   - Verify all code examples are constitution-compliant
   - Check that proposed patterns exist elsewhere in codebase
   - Confirm no shared component modifications suggested

## Search Strategy

### For Component Analysis
1. Start broad: Search for component import statements
2. Find usage: Search for component selector in templates
3. Find configuration: Search for component property bindings
4. Find initialization: Search for ngOnInit patterns with the component

### For Pattern Discovery
1. Search existing implementations of similar features
2. Identify service patterns (search for service usage)
3. Find validation examples (search for type guard functions)
4. Locate test patterns (search for spec files)

## Key Questions to Answer

- **What API exists?** Document all available inputs, outputs, and configuration
- **How is it used now?** Show real examples from codebase
- **Can we extend it?** Identify hooks and extension points
- **What's the safe path?** Propose constitution-compliant implementation

## Special Considerations

- **Do NOT modify shared components**: Analysis must find ways to work with existing API
- **Technology Context**: Focus on Angular/TypeScript/RxJS patterns
- **Real Examples**: Use actual code from the repository, not hypothetical
- **Practical Solutions**: Recommend approaches that are implementable today

## Output Requirements

- Clear, actionable recommendations
- Code examples from actual repository
- Constitution principle references
- Risk assessment for proposed approach
- Next steps for specification and implementation
