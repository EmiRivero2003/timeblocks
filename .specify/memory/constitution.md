# TimeBlocks Constitution

## Core Principles

### I. Product and Trust Centered Design

TimeBlocks MUST help students and professionals organize their time clearly and confidently. The product MUST prioritize understandable scheduling workflows, predictable calendar behavior, and accurate schedule information.

### II. Modern Frontend Standards

The application MUST use Next.js with the App Router and TypeScript in strict mode. The team MUST NOT use the `any` type in TypeScript code.

### III. Utility-First Interface Quality

All user interfaces MUST use Tailwind CSS with a utility-first approach and be responsive, accessible, and consistent across screen sizes. Interfaces MUST prioritize readability, keyboard support, semantic structure, and clear interaction states.

### IV. Server-First Rendering

Server Components MUST be the default for data fetching and rendering. Client Components may be used when client-side interaction or browser capabilities are required. The team MUST keep server and client responsibilities clearly separated.

### V. Authentication and Personal Ownership

The application MUST use Supabase PostgreSQL for data storage and Supabase Auth for email and password authentication. Each user MUST have access only to their own private schedule data. Sharing schedules is outside the current project scope.

### VI. Security and Data Protection

Input MUST be validated on the server before processing or persistence. Row Level Security (RLS) MUST be enforced so users can access only their own records.

Secrets and privileged credentials MUST never be committed to the repository or exposed to the browser.

### VII. Maintainable Component Design

The codebase MUST favor small, reusable components with descriptive names and consistent naming conventions. Shared logic SHOULD be extracted into clear, testable units when doing so reduces duplication and improves readability.

### VIII. Code Quality and Consistency

ESLint and Prettier MUST be used to maintain code quality and consistent formatting. The team MUST keep naming, structure, and style consistent across the project.

### IX. Testing and Delivery Discipline

Relevant tests MUST be added as features are implemented, especially for validation, authentication, user data isolation, CRUD operations, and recurring events.

Relevant tests, linting, formatting checks, and the production build MUST pass before changes are merged.

## Project Standards

TimeBlocks MUST use Next.js with the App Router, TypeScript, Tailwind CSS, Supabase PostgreSQL, and Supabase Auth.

The architecture MUST remain understandable and appropriate for the project scope. Implementation decisions MUST support the product goals and comply with this constitution.

During the initial documentation stage, the team MUST focus on establishing this constitution and the project specification. Application features will be implemented in subsequent development stages.

## Development Workflow

- Work on a separate branch for each change.
- Use pull requests to integrate changes into `main`.
- Require at least one approval from the other teammate before merging a pull request.
- Require a new review when code changes after approval.
- Validate each feature or fix against its relevant acceptance criteria.
- Run relevant tests, linting, formatting checks, and the production build before merging.
- Keep changes focused and avoid unrelated modifications.
- Review decisions affecting scheduling, authentication, data ownership, or recurring events against this constitution.

## Governance

This constitution governs development work on TimeBlocks. Amendments MUST document the change and its rationale, receive review from the other teammate, and update the version and amendment date.

All changes MUST remain consistent with these requirements:

- Next.js App Router and TypeScript in strict mode, without `any`.
- Tailwind CSS with a utility-first approach and responsive, accessible interfaces.
- Server Components by default and Client Components when needed.
- Supabase PostgreSQL for storage and Supabase Auth for email and password authentication.
- Server-side validation and RLS enforcement.
- No committed secrets or browser-exposed privileged credentials.
- Small, reusable components with descriptive names.
- ESLint and Prettier enforcement.
- Tests for validation, authentication, user isolation, CRUD operations, and recurring events as features are implemented.
- Passing relevant tests, linting, formatting checks, and production builds before merging.
- Separate branches and pull requests approved by the other teammate.

**Version**: 1.0.0 | **Ratified**: 2026-09-12 | **Last Amended**: 2026-09-12
