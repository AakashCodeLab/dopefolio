# .specify Directory Structure

This directory contains the project's governance framework, specification templates, and command definitions for AI-assisted development workflows.

## Purpose

The `.specify/` directory establishes:
- **Engineering principles** that govern all development decisions
- **Specification templates** for consistent feature documentation
- **Command workflows** for AI agents to assist with planning and implementation

## Directory Structure

```
.specify/
├── memory/
│   └── constitution.md          # Project constitution (principles & governance)
└── templates/
    ├── spec-template.md         # Feature specification template
    ├── plan-template.md         # Implementation plan template
    ├── tasks-template.md        # Task breakdown template
    └── commands/
        ├── speckit.constitution.md  # Constitution management command
        ├── speckit.analyze.md       # Codebase analysis command
        ├── speckit.specify.md       # Specification creation command
        └── speckit.plan.md          # Planning command
```

## Core Documents

### Constitution (`memory/constitution.md`)

The supreme technical governance document defining 6 non-negotiable engineering principles:

1. **Component Consumer-First Architecture** - No modifications to shared components
2. **Observable-Driven State Management** - Proper RxJS subscription lifecycle
3. **Validation-First Error Handling** - Type guards and safe defaults
4. **Backward Compatibility Guarantee** - Preserve existing functionality
5. **Type-Safe TypeScript Discipline** - Strict typing without `any`
6. **Comprehensive Testing Standards** - 90%+ coverage requirement

**Version**: 1.0.0 (ratified 2026-01-22)

All code changes must comply with these principles before merge approval.

## Templates

### Specification Template (`templates/spec-template.md`)

Structure for documenting new features:
- Business context and requirements
- Constitution alignment check
- Technical design
- User scenarios
- Testing strategy

### Plan Template (`templates/plan-template.md`)

Implementation planning structure:
- Step-by-step implementation phases
- File modification details
- Constitution compliance verification
- Risk assessment
- Testing checklist

### Tasks Template (`templates/tasks-template.md`)

Task breakdown organized by constitution principles:
- Category 1: Component Consumer Integration (Principle 1)
- Category 2: Observable Lifecycle Management (Principle 2)
- Category 3: Validation & Type Safety (Principles 3 & 5)
- Category 4: Backward Compatibility (Principle 4)
- Category 5: Comprehensive Testing (Principle 6)

## Command Workflows

Commands in `templates/commands/` define AI agent workflows:

### `speckit.constitution`
Create or update the project constitution and sync dependent templates.

### `speckit.analyze`
Analyze codebase patterns, particularly shared component consumption.

**Use when**: Understanding how existing components work before implementing features.

### `speckit.specify`
Create comprehensive feature specification aligned with constitution.

**Use when**: Defining requirements for new features or enhancements.

### `speckit.plan`
Generate detailed implementation plan from specification.

**Use when**: Breaking down specifications into actionable development steps.

## Workflow Example

Implementing a new feature that uses a shared component:

```bash
# Step 1: Analyze existing component consumption patterns
/speckit.analyze dew-listing component usage patterns

# Step 2: Create feature specification
/speckit.specify Pre-fill search bar in listing with default value

# Step 3: Generate implementation plan
/speckit.plan specs/feature-search-prefill/spec.md

# Step 4: Implement following plan, ensuring constitution compliance
```

## Constitution Compliance Process

Every feature implementation follows this validation flow:

```
┌─────────────────────────────────────────────┐
│ 1. Specification Creation                   │
│    └─ Constitution Alignment Check          │
└──────────────────┬──────────────────────────┘
                   │
┌──────────────────▼──────────────────────────┐
│ 2. Implementation Planning                  │
│    └─ Constitution Pre-Check                │
└──────────────────┬──────────────────────────┘
                   │
┌──────────────────▼──────────────────────────┐
│ 3. Development                              │
│    └─ Each step references principle        │
└──────────────────┬──────────────────────────┘
                   │
┌──────────────────▼──────────────────────────┐
│ 4. Code Review                              │
│    └─ Constitution Compliance Checklist     │
└──────────────────┬──────────────────────────┘
                   │
┌──────────────────▼──────────────────────────┐
│ 5. Merge Approval                           │
│    └─ All principles validated ✓            │
└─────────────────────────────────────────────┘
```

## Governance

### Amendment Process

To modify the constitution:
1. Propose changes via architecture review document
2. Get approval from tech leads and stakeholders
3. Update constitution with version bump (semantic versioning)
4. Propagate changes to all dependent templates
5. Update this README if structure changes

### Version History

Constitution versions are tracked in git history and the Sync Impact Report at the top of `constitution.md`.

## Integration with Existing Workflows

### Relation to `specs/` Directory

Feature specifications created using templates should be saved in:
```
specs/[FEATURE_ID]-[short-name]/
├── spec.md           # From spec-template.md
├── plan.md           # From plan-template.md
├── IMPLEMENTATION.md # Progress tracking
└── README.md         # Feature overview
```

Example: `specs/ZPDT-84115-workflow-tab-query/`

### Relation to Development Process

- **Before coding**: Use templates to create spec and plan
- **During coding**: Reference constitution principles in code comments
- **During review**: Use constitution checklist to validate changes
- **After merge**: Update implementation docs with lessons learned

## Key Constraints

### Principle 1 Enforcement

**Critical**: The constitution prohibits modifications to shared components located in:
- `/src/dd-common/packages/*/` (common Dewdrops components)
- `@dewdrops/angular` (external library)
- `@dewdrops/common` (external library)

All features using these components must be implemented at the **consumption point** (product/module side) only.

## For AI Agents

When assisting with development:
1. **Always** read the constitution before proposing solutions
2. **Reference** specific principles when explaining design decisions
3. **Use** templates for consistent documentation structure
4. **Validate** all proposals against constitution compliance
5. **Flag** any requirements that would violate principles for human review

## For Developers

When implementing features:
1. **Read** the constitution to understand non-negotiable principles
2. **Use** templates to create specifications and plans
3. **Validate** your changes against constitution checklist
4. **Reference** principle numbers in pull request descriptions
5. **Challenge** any requirement that would require principle violation

## Maintenance

This directory structure is maintained by the architecture team. For questions or suggestions:
- Open an architecture review issue
- Reference constitution version in discussions
- Propose template improvements via pull request

---

**Last Updated**: 2026-01-22  
**Constitution Version**: 1.0.0  
**Maintained By**: Architecture Team
