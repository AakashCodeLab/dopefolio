<!--
SYNC IMPACT REPORT
==================
Version: 1.0.0 (Initial Constitution - Aakash Singh Portfolio)
Ratification Date: 2026-02-07
Last Amended: 2026-02-07

Modified Principles: N/A (Initial version)
Added Sections:
  - Complete constitution structure for Aakash Singh portfolio website
  - 7 core frontend development principles
  - Governance and compliance framework
  - Mobile-first and accessibility standards

Removed Sections: N/A

Templates Status:
  ✅ ALIGNED - .specify/templates/spec-template.md
  ✅ ALIGNED - .specify/templates/plan-template.md
  ✅ ALIGNED - .specify/templates/tasks-template.md
  ✅ ALIGNED - .specify/templates/commands/*.md

Follow-up TODOs:
  - Consider adding automated SASS compilation workflow
  - Document responsive breakpoint strategy
  - Create component library documentation for reusable patterns
-->

# Project Constitution

**Project Name**: Dopefolio - Personal Portfolio Website  
**Repository**: dopefolio  
**Constitution Version**: 1.0.0  
**Ratification Date**: 2026-02-07  
**Last Amended**: 2026-02-07

---

## Purpose

This constitution defines the foundational engineering principles and governance rules for the Dopefolio portfolio website. Dopefolio is a frontend-focused personal portfolio built with vanilla HTML, SASS, and JavaScript to showcase web development projects and professional skills. It establishes non-negotiable standards that guide all development, ensuring maintainability, performance, responsiveness, and accessibility across all devices.

---

## Core Principles

### Principle 1: Mobile-First Responsive Design

**Rule**: All UI components, layouts, and styling MUST be built using a mobile-first approach with progressive enhancement for larger screens. Responsive breakpoints MUST be consistent across all SASS files using the established mixin system. Media queries MUST use relative units (em) rather than absolute pixels for better browser zoom support.

**Rationale**: Modern web traffic is predominantly mobile. Mobile-first design ensures:
- Optimal performance on resource-constrained devices
- Content prioritization for smaller viewports
- Progressive enhancement for desktop experiences
- Consistent user experience across all device sizes
- Better accessibility for users with different devices

**Application**:
- Use the established responsive mixin system defined in `_mixins.scss`:
  - `phone`: max-width 600px (37.5em)
  - `tab-port`: max-width 900px (56.25em)
  - `tab-land`: max-width 1200px (75em)
  - `big-desktop`: min-width 1800px (112.5em)
- Base styles target mobile devices; add complexity for larger screens
- Test all features on mobile viewports before desktop
- Use flexible layouts (flexbox, grid) over fixed widths
- Ensure touch targets are minimum 44x44px for mobile usability

---

### Principle 2: BEM-Inspired SASS Architecture

**Rule**: All styling MUST follow the Block Element Modifier (BEM) naming convention using SASS nesting. Component styles MUST be organized in separate partial files (`_component.scss`) and imported into `main.scss`. Nesting depth MUST NOT exceed 3 levels to maintain readability and specificity control.

**Rationale**: BEM methodology with SASS provides:
- Clear, self-documenting class names
- Predictable CSS specificity
- Reusable, modular components
- Easy maintenance and refactoring
- Reduced stylesheet conflicts

**Application**:
- Block: `.header`, `.projects`, `.contact`
- Element: `.header__logo`, `.projects__row`, `.contact__form`
- Modifier: `.header__link--active`, `.btn--theme`, `.btn--med`
- Organize partials in logical folders:
  - `abstracts/`: variables, mixins, utilities
  - `base/`: reset, typography, base styles
  - `components/`: header, footer, skills, reusable UI
  - `pages/`: home, project-case-study, page-specific styles
- Use variables (`$themeClrPrimary`, `$commonBorderRadius`) for consistency
- Avoid overly specific selectors; prefer single class names

---

### Principle 3: Semantic HTML and Accessibility

**Rule**: All HTML MUST use semantic elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`) appropriately. All interactive elements MUST be keyboard accessible. Images MUST have descriptive alt text. Links MUST have clear, descriptive text or ARIA labels. Color contrast MUST meet WCAG 2.1 AA standards (4.5:1 for normal text, 3:1 for large text).

**Rationale**: Semantic HTML and accessibility ensure:
- Better SEO through clear document structure
- Screen reader compatibility for visually impaired users
- Keyboard navigation for users who cannot use a mouse
- Improved user experience for all users
- Legal compliance with accessibility standards (ADA, Section 508)

**Application**:
- Use `<section id="about">`, `<section id="projects">`, `<section id="contact">` for main content areas
- Provide meaningful alt text: `alt="Aakash Singh Logo Image"` not `alt="image1"`
- Ensure all forms have proper `<label>` elements with `for` attributes
- Test keyboard navigation: Tab, Enter, Space must work for all interactions
- Use ARIA attributes when semantic HTML is insufficient (`aria-label`, `role`)
- Include skip-to-content links for keyboard users
- Test with screen readers (NVDA, JAWS, VoiceOver)

---

### Principle 4: Performance-First Asset Management

**Rule**: All images MUST be optimized for web delivery with appropriate formats (WebP with JPEG/PNG fallbacks). Images below the fold MUST use lazy loading (`loading="lazy"`). CSS MUST be minified and concatenated for production. Unused styles MUST be removed. Third-party scripts MUST be loaded asynchronously when possible.

**Rationale**: Performance directly impacts user experience, SEO rankings, and conversion rates. Fast-loading sites provide:
- Better user engagement and lower bounce rates
- Improved search engine rankings (Core Web Vitals)
- Reduced bandwidth costs for users on limited data plans
- Better experience on slower networks

**Application**:
- Optimize images using tools (ImageOptim, Squoosh, Sharp)
- Use responsive images with `srcset` for different screen densities
- Add `loading="lazy"` to images not in viewport on initial load
- Run CSS build pipeline: `compile-sass → concat-css → prefix-css → compress-css`
- Minify JavaScript files for production
- Load non-critical third-party scripts with `async` or `defer`
- Monitor performance with Lighthouse, PageSpeed Insights
- Target performance metrics: FCP < 1.8s, LCP < 2.5s, CLS < 0.1

---

### Principle 5: Vanilla JavaScript Simplicity

**Rule**: JavaScript MUST be written in vanilla ES5/ES6 without framework dependencies unless absolutely necessary. Code MUST be modular, with clear separation of concerns. Event listeners MUST be properly scoped and removed when no longer needed to prevent memory leaks. DOM manipulation MUST be minimized and batched when possible.

**Rationale**: Vanilla JavaScript for simple interactions provides:
- Zero dependency overhead (smaller bundle size)
- Faster page load times
- Better long-term maintainability
- Direct understanding of browser APIs
- No framework update/deprecation risks

**Application**:
- Use `querySelector` and `querySelectorAll` for DOM selection
- Add event listeners with clear, descriptive handlers
- Group related functionality (hamburger menu logic, navigation)
- Avoid global scope pollution; use IIFEs or modules if needed
- Cache DOM queries to avoid repeated lookups
- Use event delegation for dynamic content
- Comment complex logic with clear explanations
- Test across browsers (Chrome, Firefox, Safari, Edge)

---

### Principle 6: Progressive Enhancement and Graceful Degradation

**Rule**: All core content and functionality MUST be accessible without JavaScript enabled. JavaScript MUST enhance the experience, not gate access to content. Styles MUST work without CSS custom properties in older browsers using fallbacks. External dependencies (fonts, CDN resources) MUST have fallback mechanisms.

**Rationale**: Progressive enhancement ensures:
- Content accessibility regardless of technical limitations
- Better SEO (crawlers can access content)
- Resilience against network failures or script errors
- Support for users with JavaScript disabled
- Future-proof codebase as browsers evolve

**Application**:
- Content sections (`about`, `projects`, `contact`) render without JavaScript
- Navigation works with standard HTML anchor links
- Forms submit without JavaScript validation (server-side validation critical)
- Provide system font fallbacks: `font-family: 'Source Sans Pro', sans-serif`
- Use CSS feature detection (`@supports`) for modern features
- Test with JavaScript disabled in browser
- Include `<noscript>` tags for critical JavaScript-dependent features

---

### Principle 7: Version Control and Code Documentation

**Rule**: All commits MUST have clear, descriptive commit messages following conventional commit format (`feat:`, `fix:`, `style:`, `refactor:`, `docs:`, `chore:`). All non-obvious code logic MUST include inline comments explaining the "why" not the "what". README documentation MUST be kept up-to-date with setup instructions, build commands, and deployment procedures.

**Rationale**: Clear documentation and version history provide:
- Easier collaboration and code review
- Better understanding of code evolution
- Faster onboarding for new developers
- Simplified debugging and rollback procedures
- Professional codebase presentation

**Application**:
- Commit message format: `type(scope): subject` (e.g., `feat(header): add mobile hamburger menu`)
- Commit types:
  - `feat`: New feature
  - `fix`: Bug fix
  - `style`: CSS/styling changes
  - `refactor`: Code restructuring without behavior change
  - `docs`: Documentation updates
  - `chore`: Build process, dependency updates
- Comment complex selectors, calculations, browser-specific hacks
- Keep README updated with:
  - Project description and purpose
  - Installation instructions
  - Development workflow (watch-sass, build-css)
  - Deployment steps
  - Contact information and license

---

## Governance

### Amendment Procedure

1. **Proposal**: Any contributor may propose amendments via pull request or discussion
2. **Review**: Project maintainer reviews impact on existing codebase and user experience
3. **Testing**: Proposed changes must be tested across all supported browsers and devices
4. **Approval**: Requires approval from project owner (Aakash Singh)
5. **Version Update**: Constitution version increments per semantic versioning:
   - **MAJOR**: Breaking changes to principles or removal of guarantees
   - **MINOR**: New principles added or material expansions
   - **PATCH**: Clarifications, examples, or wording improvements
6. **Propagation**: All template files, command definitions, and documentation updated to reflect changes

### Versioning Policy

This constitution follows semantic versioning (MAJOR.MINOR.PATCH):
- **Current Version**: 1.0.0
- **Version History**: Tracked in git commit history and sync impact reports
- **Breaking Changes**: Require MAJOR version bump and explicit migration guide

### Compliance Review

- **Pre-Merge Review**: All changes reviewed against these principles
- **Browser Testing**: Test on Chrome, Firefox, Safari, Edge (latest 2 versions)
- **Device Testing**: Test on mobile (iOS/Android), tablet, desktop
- **Performance Audit**: Run Lighthouse audit before major releases
- **Accessibility Check**: Validate WCAG 2.1 AA compliance
- **Template Alignment**: All `.specify/templates/*` files reference these principles

---

## Enforcement

Violations of these principles must be addressed before code merge:
- Automated SASS compilation checks (valid syntax)
- Lighthouse CI for performance regression detection
- HTML validation (W3C Validator)
- Accessibility testing (axe, WAVE)
- Manual cross-browser and cross-device testing
- Code review checklist referencing principle numbers

---

## Related Documents

- `.specify/templates/spec-template.md` - Feature specification requirements aligned with principles
- `.specify/templates/plan-template.md` - Implementation planning checklist
- `.specify/templates/tasks-template.md` - Task categorization reflecting principle-driven development
- `package.json` - Build scripts and development workflow
- `README.md` - Project overview and development setup
- `LICENSE` - GNU General Public License v3.0

---

## Technical Stack

**Frontend Technologies**:
- HTML5 (semantic markup)
- CSS3 (compiled from SASS/SCSS)
- JavaScript ES5/ES6 (vanilla, no frameworks)

**Build Tools**:
- node-sass: SASS compilation
- autoprefixer: CSS vendor prefix automation
- postcss-cli: CSS post-processing
- concat: CSS concatenation
- npm-run-all: Script orchestration

**Responsive Breakpoints**:
- Phone: 0-600px (37.5em)
- Tablet Portrait: 600-900px (56.25em)
- Tablet Landscape: 900-1200px (75em)
- Desktop: 1200-1800px (default)
- Large Desktop: 1800px+ (112.5em)

**Design System**:
- Primary Color: #7843e9 (purple)
- Border Radius: 5px
- Font: Source Sans Pro (Google Fonts)
- Base Font Size: 62.5% (1rem = 10px)

---

## Project Structure

```
dopefolio/
├── index.html              # Main landing page
├── project-1.html          # Case study page (Rasoighar)
├── project-2.html          # Case study page (optional)
├── project-3.html          # Case study page (optional)
├── index.js                # Main JavaScript (navigation, interactions)
├── DB.js                   # Database/configuration file (currently unused)
├── package.json            # Dependencies and build scripts
├── sass/                   # SASS source files
│   ├── main.scss           # Main import file
│   ├── abstracts/          # Variables, mixins, utilities
│   ├── base/               # Reset, typography, base styles
│   ├── components/         # Header, footer, skills, reusable components
│   └── pages/              # Page-specific styles
├── css/                    # Compiled CSS output
│   ├── style.css           # Final production CSS (minified)
│   ├── style.comp.css      # Compiled SASS output
│   ├── style.concat.css    # Concatenated CSS
│   └── style.prefix.css    # Prefixed CSS
├── assets/                 # Images, icons, media
│   ├── png/                # PNG images
│   ├── jpeg/               # JPEG images
│   └── svg/                # SVG icons and graphics
└── .specify/               # Project specification and governance
    ├── memory/             # Constitution and project memory
    └── templates/          # Specification templates
```

---

## User Personas

**Primary Audience**: Potential employers, recruiters, and clients seeking a frontend web developer

**User Needs**:
- Quick overview of skills and expertise
- Portfolio of completed projects with case studies
- Easy contact mechanism
- Professional, modern design aesthetic
- Fast, responsive experience on all devices

**User Journey**:
1. Land on homepage hero section
2. Scroll to "About Me" section to learn background
3. Review skills and technologies
4. Explore project portfolio with case studies
5. Contact via form or social media links

---

**Authority**: This constitution is the supreme technical governance document for the Dopefolio portfolio codebase.  
**Interpretation**: In cases of ambiguity, principles favor maintainability, performance, accessibility, and user experience over development speed.  
**Acknowledgment**: By contributing to this repository, all developers agree to uphold these principles.
