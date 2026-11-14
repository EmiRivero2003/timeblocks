
# TimeBlocks

A visual schedule organizer for students and professionals.

## Description

TimeBlocks is designed to help users organize their activities through customizable, color-coded schedule blocks and a personal calendar.

The goal is to provide an intuitive and responsive application that helps users manage their daily activities, improve productivity, and organize their time effectively.

## Team Members

- Emiliano Rivero — Group 17, Team Leader and Developer

## Planned Features

- Create, view, edit, and delete schedule blocks.
- Organize activities using color-coded categories.
- Schedule weekly and monthly recurring activities.
- Switch between daily, weekly, and monthly calendar views.
- Access a personal schedule using email and password authentication.
- Provide a responsive interface for desktop and mobile devices.

## Technology Stack

- Next.js with App Router
- TypeScript
- Tailwind CSS
- ESLint and Prettier
- Supabase PostgreSQL and Supabase Auth — planned integration
- Vercel — planned deployment

## Project Architecture

### Planned Pages

- `/` — Home page
- `/login` — User login
- `/register` — User registration
- `/calendar` — Calendar dashboard
- `/categories` — Category management

### Reusable Components

- Header and Navigation
- CalendarView
- ScheduleBlockCard
- ScheduleBlockForm
- CategoryPicker
- AuthenticationForm
- LoadingSkeleton

## Data Model

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

### Relationships

- A user can own multiple categories.
- A user can create multiple schedule blocks.
- A category can be associated with multiple schedule blocks.
- A schedule block can optionally have a recurrence rule.

## Design and Branding

### Color Palette

- Background: `#0F172A`
- Surface: `#1E293B`
- Primary: `#2563EB`
- Success: `#22C55E`
- Text: `#F8FAFC`

### Typography

- Inter
- Tailwind CSS utility classes

### Layout

- Responsive design
- Consistent spacing based on 8px increments
- Rounded cards and buttons
- Accessible navigation and forms

These design choices are the initial direction for the project and may be refined during development.

## Project Management

GitHub Project Board:
https://github.com/users/EmiRivero2003/projects/1

Repository Issues:
https://github.com/EmiRivero2003/timeblocks/issues

## Week 03 Progress

- Initial Next.js project setup completed.
- GitHub repository created.
- Project specifications drafted.
- Initial GitHub issues created.
- Component architecture planned.
- Core data entities identified.
- Visual design direction proposed.

## Week 04 Priorities

1. Define shared TypeScript interfaces.
2. Configure Supabase PostgreSQL.
3. Implement authentication.
4. Begin schedule block and category APIs.
5. Build initial calendar components.

## Project Status

The initial project structure and planning are in place.

Application features have not been implemented yet. Development will continue during Week 04.
