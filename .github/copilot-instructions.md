
# TimeBlocks — GitHub Copilot Instructions

## Project Overview

TimeBlocks is a visual schedule organizer designed to help users manage activities, schedules, and recurring routines.

## Technology Stack

- Next.js 16 with App Router
- React 19
- TypeScript
- Tailwind CSS
- ESLint and Prettier
- Supabase PostgreSQL (planned)
- Supabase Authentication (planned)
- Vercel deployment (planned)

## Project Structure

- `app/` — Next.js routes, layouts, and pages.
- `components/` — Reusable React components as features are added.
- `public/` — Static assets.
- `app/globals.css` — Global styling.

## Planned Application Routes

- `/` — Landing page.
- `/login` — User authentication.
- `/register` — User registration.
- `/calendar` — Schedule management.
- `/categories` — Category management.

Do not assume planned routes are already implemented.

## Data Models

### User
- id
- email
- created_at

### Category
- id
- user_id
- name
- color

### ScheduleBlock
- id
- user_id
- category_id
- title
- description
- date
- start_time
- end_time

### RecurrenceRule
- id
- block_id
- frequency
- interval
- end_date

These are planned entities. Verify the database schema before implementing persistence.

## Coding Conventions

- Write all code and comments in English.
- Use TypeScript with strict typing.
- Use PascalCase for React components and interfaces.
- Use camelCase for variables and functions.
- Prefer Server Components.
- Use Client Components only when interactivity is required.
- Keep components reusable and maintainable.
- Use semantic HTML and accessible labels.
- Support keyboard navigation and visible focus indicators.
- Follow responsive design principles.

## Database and Security

- Keep database operations on the server.
- Validate input before mutations.
- Require authentication for private schedules.
- Enforce user ownership when querying or modifying data.
- Never expose environment variables or credentials.
- Use Supabase Row Level Security when implementing persistence.

## Design Guidelines

- Background: #0F172A
- Surface: #1E293B
- Primary: #2563EB
- Success: #22C55E
- Text: #F8FAFC

Use Tailwind CSS for styling.

## Git Workflow

- Develop features in separate branches.
- Create Pull Requests targeting main.
- Link relevant GitHub issues.
- Keep review Pull Requests open until reviewed.
- Use descriptive commit messages.

## Quality Checks

Run these commands before submitting work:

- `npm run lint`
- `npm run build`
- `npm run format:check`

## Development Priorities

1. Shared TypeScript data models.
2. Supabase integration.
3. User authentication.
4. Schedule block CRUD.
5. Category management.
6. Calendar views.
7. Recurring activities.
