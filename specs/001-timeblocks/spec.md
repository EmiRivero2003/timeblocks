# TimeBlocks — Product Specification

## 1. Metadata

- **Project:** TimeBlocks
- **Description:** Visual schedule organizer for students and professionals
- **Status:** Draft for teammate review
- **Branch:** `docs/project-spec`
- **Created:** 2026-09-12
- **Scope:** Documentation only
- **Related constitution:** [TimeBlocks Constitution](../../.specify/memory/constitution.md)
- **API section:** Included as an intentional exception to the Spec-Kit template restriction on implementation details.

## 2. Problem and Purpose

Students and professionals often struggle to maintain routines because their schedules are scattered across tools or difficult to visualize.

TimeBlocks provides a personal visual calendar with customizable, color-coded schedule blocks. Users can organize activities, review commitments, and maintain recurring routines in one place.

## 3. Target Audience

- Students managing classes, study sessions, and personal activities.
- Professionals managing work sessions, meetings, and routines.
- Individuals who need a simple personal schedule organizer.

## 4. Goals

- Provide a private schedule for each authenticated user.
- Make activities easy to create, view, edit, and delete.
- Organize activities with named, color-coded categories.
- Offer weekly, daily, and monthly calendar views.
- Support weekly and monthly recurring activities.
- Provide accessible, responsive interfaces with clear feedback.

## 5. Scope and Priorities

### P0 — Core Features

- Email and password sign-up, sign-in, and sign-out.
- Private user data and ownership enforcement.
- Create, view, edit, and delete categories with a name and color.
- Create, view, edit, and delete schedule blocks.
- Weekly calendar view.

### P1 — Additional Views and Weekly Recurrence

- Daily calendar view.
- Monthly calendar view.
- Weekly recurrence on selected weekdays.
- Positive integer interval in weeks and a required end date.
- Editing or deleting a recurring series affects the entire series.

### P2 — Monthly Recurrence and Visual Improvements

- Monthly recurrence on the original day of the month.
- Positive integer interval in months and a required end date.
- Visual polish and usability improvements.

P0, P1, and P2 describe implementation order. P1 and P2 remain part of the planned project.

## 6. Out of Scope

- Drag-and-drop scheduling and resizing.
- Search.
- Notifications and reminders.
- Import, export, and external calendar synchronization.
- Schedule optimization and workload summaries.
- Conflict detection, overlap warnings, and overlap prevention.
- Overnight and all-day blocks.
- Individual occurrence exceptions.
- Shared calendars and collaborative scheduling.
- Automatic timezone conversion when traveling.
- Changing the profile timezone after initial setup in the MVP.

## 7. Domain Rules

### 7.1 Schedule Blocks

Required fields:

- Title.
- Date.
- Start time.
- End time.

Optional fields:

- Description.
- Category.

Validation and behavior:

- Titles must not be empty or whitespace-only.
- Dates and times must be valid.
- End time must be later than start time on the same date.
- Overnight and all-day blocks are not supported.
- Overlapping blocks are allowed without conflict warnings.
- Assigned categories must belong to the same user as the block.
- Blocks without categories must remain visible.
- Changes must persist after refreshing or signing in again.

### 7.2 Categories

- A category requires a non-empty name and a color.
- Colors use six-digit hexadecimal notation, such as `#2563EB`.
- Each category belongs to one user.
- Category colors must not be the only way to identify an activity.
- Deleting a category preserves its blocks and clears their category assignment.

### 7.3 Recurrence

- The original block date establishes the recurrence start.
- Recurrence intervals must be positive integers.
- The end date is required and must be on or after the start date.
- The recurrence date range includes its start and end dates.
- No occurrence may be generated outside that range.
- Weekly recurrence requires at least one selected weekday.
- Monthly recurrence uses the original block's day number.
- Editing or deleting a recurring series affects all its occurrences.
- The interface must clearly explain the series-wide effect.
- Individual occurrence exceptions are not supported.

### 7.4 Proposed Timezone and Calendar Assumptions

These assumptions require teammate review:

- Each user has one profile timezone, initially detected from the browser.
- Schedule dates and times are interpreted as local wall-clock values in that timezone.
- Traveling does not automatically convert existing schedule times.
- Monthly recurrence skips months without the required day.
- Missing monthly dates are not shifted to another day.
- Calendar weeks begin on Monday.
- Weekly intervals are anchored to the Monday of the week containing the original block date.
- Selected weekdays before the original block date are excluded from the first recurrence week.

Timezone detection failure and daylight-saving edge cases must be resolved before recurrence implementation.

## 8. User Stories and Acceptance Criteria

### US-01 — Create an Account — P0

As a new user, I want to register with email and password so that I can maintain a private schedule.

Acceptance criteria:

- Valid registration input starts the configured Supabase Auth registration flow.
- Invalid email or password input produces an understandable validation message.
- Registration responses do not expose sensitive account information.
- The interface displays a loading state during submission.
- The user reaches either the authenticated calendar or an email-confirmation screen, according to the authentication configuration.

### US-02 — Sign In and Sign Out — P0

As a registered user, I want to access and end my session securely.

Acceptance criteria:

- Valid credentials establish an authenticated session.
- Invalid credentials are rejected with a clear message.
- Successful sign-in opens the user's personal schedule.
- Signing out ends the current session and returns the user to an unauthenticated screen.
- Protected data is no longer available after sign-out.
- Session expiration requires authentication again.

### US-03 — Keep Data Private — P0

As a user, I want only my account to access my categories and blocks.

Acceptance criteria:

- Lists contain only records owned by the authenticated user.
- Unauthenticated API requests return `401 Unauthorized`.
- Requests targeting nonexistent or other users' records return `404 Not Found`.
- Changing an identifier cannot grant access to another user's data.
- Server authorization and database RLS enforce ownership.
- Client-supplied ownership values cannot override the authenticated identity.

### US-04 — Manage Categories — P0

As a user, I want named, color-coded categories to organize my activities.

Acceptance criteria:

- Users can create, list, edit, and delete their categories.
- Empty names and invalid colors are rejected.
- Updated names and colors appear wherever the category is displayed.
- Deleting a category preserves all associated blocks.
- Preserved blocks have no category assignment.
- Users cannot assign, edit, or delete another user's category.

### US-05 — Manage Blocks — P0

As a user, I want to create and maintain activities in my calendar.

Acceptance criteria:

- A valid title, date, start time, and end time create a block.
- Description and category may be omitted.
- Users can view, edit, and delete owned blocks.
- Empty titles, invalid dates, and invalid times are rejected.
- End times equal to or earlier than start times are rejected.
- Overlapping blocks are accepted without warnings.
- Saved changes remain after a refresh.
- Failed requests show an error and do not falsely indicate success.

### US-06 — View a Week — P0

As a user, I want to review my activities for a selected week.

Acceptance criteria:

- The weekly view displays the selected week.
- Blocks appear on their correct dates and time ranges.
- Categorized blocks display their category color.
- Uncategorized blocks use a default appearance.
- Overlapping blocks remain individually accessible.
- Users can navigate to previous and next weeks.
- Loading, empty, and error states are distinguishable.
- Navigation and block controls are keyboard-accessible.

### US-07 — View a Day or Month — P1

As a user, I want different calendar views for focused and broader planning.

Acceptance criteria:

- The daily view shows blocks for the selected date.
- The monthly view places activities on their correct dates.
- Users can switch between daily, weekly, and monthly views.
- Users can navigate to adjacent dates or months.
- All views display only the authenticated user's data.
- Required information and actions remain accessible on narrow screens.

### US-08 — Create Weekly Recurrence — P1

As a user, I want recurring activities on selected weekdays.

Acceptance criteria:

- Users select one or more weekdays, a week interval, and an end date.
- Missing weekdays, invalid intervals, and invalid end dates are rejected.
- Occurrences appear only on selected weekdays in eligible weeks.
- No occurrence appears before the start date or after the end date.
- For a Monday start, Monday/Wednesday selection, and an interval of two weeks, occurrences appear in the starting week and every second week afterward.
- Occurrences share the series title, times, description, and category.

### US-09 — Edit or Delete a Series — P1

As a user, I want consistent changes across a recurring routine.

Acceptance criteria:

- Editing a series updates every associated occurrence.
- Deleting a series removes every associated occurrence.
- The interface explains that the action affects the entire series.
- Unrelated blocks remain unchanged.
- Ownership checks apply to the series and its occurrences.
- Editing a single occurrence independently is unavailable.

### US-10 — Create Monthly Recurrence — P2

As a user, I want activities that repeat on the same day of selected months.

Acceptance criteria:

- Users provide a positive month interval and an end date.
- Eligible months are calculated from the original block month.
- Occurrences use the original day number.
- Under the proposed skip-month policy, a monthly series beginning January 31 has no February occurrence and resumes March 31.
- Skipped months do not change the interval anchor.
- No occurrence appears after the end date.
- Series-wide editing and deletion remain available.

### US-11 — Use a Clear Interface — P2

As a user, I want a polished interface that remains easy to understand.

Acceptance criteria:

- Controls have visible focus, loading, disabled, and error states.
- Visual improvements preserve existing behavior.
- Forms and calendar views remain responsive and accessible.
- Visual improvements do not introduce excluded features.

## 9. Non-Functional Requirements

### Accessibility and Responsiveness

- Use semantic HTML and accessible labels.
- Support keyboard operation for core actions.
- Provide visible focus states.
- Associate form errors with their fields.
- Do not rely on color alone for essential information.
- Keep core flows usable at mobile, tablet, and desktop viewport sizes.
- Test representative widths of 375, 768, and 1440 pixels.

### Security

- Validate input on the server.
- Authenticate and authorize every protected operation.
- Enforce user ownership through Supabase RLS.
- Never commit secrets or expose privileged credentials to the browser.
- Return safe errors without stack traces or database details.

### Maintainability

- Follow the TimeBlocks constitution.
- Use Next.js App Router and TypeScript strict mode without `any`.
- Use Server Components by default.
- Use Client Components when interaction or browser capabilities require them.
- Use Tailwind CSS, ESLint, and Prettier.
- Keep components and shared logic understandable and reusable.

### Reliability

- Persist successful changes across sessions.
- Show loading feedback during requests.
- Prevent accidental duplicate form submissions.
- Preserve entered form values when practical after an error.
- Distinguish a failed request from an empty calendar.

## 10. Data Entities

### Authenticated User and Profile

Supabase Auth manages identity and credentials.

The application profile contains:

- User ID referencing the authenticated identity.
- Profile timezone.

Each user owns their categories, blocks, and recurrence definitions.

### Category

- ID.
- Owner user ID.
- Name.
- Color.
- Creation and update timestamps.

A category may be referenced by multiple blocks belonging to its owner.

### Schedule Block

- ID.
- Owner user ID.
- Title.
- Date.
- Start time.
- End time.
- Optional description.
- Optional category reference.
- Optional recurrence reference.
- Creation and update timestamps.

### Recurrence Definition

- ID.
- Owner user ID.
- Association with the original block.
- Start date.
- Frequency: weekly or monthly.
- Positive integer interval.
- Selected weekdays for weekly recurrence.
- Original day number for monthly recurrence.
- End date.

The implementation plan will determine whether occurrences are stored individually or calculated. Either approach must preserve the specified behavior and ownership rules.

## 11. Proposed API

All endpoints require authentication. Ownership is derived from the authenticated session.

### Endpoints

| Method | Endpoint               | Purpose                                         | Success |
| ------ | ---------------------- | ----------------------------------------------- | ------- |
| GET    | `/api/blocks`          | List owned blocks within an optional date range | 200     |
| POST   | `/api/blocks`          | Create an owned block or recurring series       | 201     |
| GET    | `/api/blocks/{id}`     | Retrieve an owned block                         | 200     |
| PUT    | `/api/blocks/{id}`     | Update an owned block or its entire series      | 200     |
| DELETE | `/api/blocks/{id}`     | Delete an owned block or its entire series      | 204     |
| GET    | `/api/categories`      | List owned categories                           | 200     |
| POST   | `/api/categories`      | Create an owned category                        | 201     |
| PUT    | `/api/categories/{id}` | Update an owned category                        | 200     |
| DELETE | `/api/categories/{id}` | Delete a category while preserving its blocks   | 204     |

### Date Filtering

`GET /api/blocks` accepts:

- `startDate`: optional inclusive date in `YYYY-MM-DD` format.
- `endDate`: optional inclusive date in `YYYY-MM-DD` format.

Invalid dates or a start date later than the end date return `400 Bad Request`.

When recurrence is implemented, results must include occurrences within the requested range even when the series began before that range.

### Request Rules

- Block creation requires title, date, start time, and end time.
- Description and category are optional.
- Recurrence configuration is accepted when that feature is implemented.
- Category creation requires a name and valid color.
- PUT requests include the complete editable representation.
- For PUT requests, omitted optional block fields are cleared.
- Clients cannot change record ownership.
- An unavailable or other user's referenced category returns `404 Not Found`.
- Malformed category identifiers return `400 Bad Request`.
- A recurring occurrence must resolve to its parent series for series-wide changes.

The implementation plan must define recurrence payloads and occurrence identifiers consistently.

### Response Rules

- Responses with a body use JSON.
- Successful reads and updates return `200 OK`.
- Successful creation returns `201 Created`.
- Successful deletion returns `204 No Content` with no body.
- Invalid input returns `400 Bad Request`.
- Missing or invalid authentication returns `401 Unauthorized`.
- Missing or non-owned resources return `404 Not Found`.
- Unexpected failures return `500 Internal Server Error`.

Example validation response:

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "The end time must be later than the start time.",
    "fields": {
      "endTime": "Must be later than startTime."
    }
  }
}
```

Errors must not reveal whether another user owns a requested record.

## 12. Interface States and Edge Cases

Required interface states:

- Loading during authentication and data requests.
- Empty categories with an option to create one.
- Empty calendar periods with an option to add a block.
- Field-specific validation messages.
- Recoverable request errors with an appropriate retry action.
- Unauthenticated state after session expiration.

Required edge-case coverage:

- Whitespace-only titles and category names.
- Invalid dates, times, colors, and identifiers.
- Equal or reversed start and end times.
- Missing or invalid recurrence end dates.
- Zero, negative, or fractional recurrence intervals.
- Weekly recurrence without selected weekdays.
- Monthly recurrence on the 29th, 30th, or 31st.
- Leap years.
- Category deletion with associated blocks.
- Requests involving another user's records.
- Recurring series beginning before the displayed calendar range.
- Overlapping blocks.
- Slow or failed network requests.
- Unavailable timezone detection.
- Daylight-saving clock changes.

## 13. Success Criteria and Verification

| Area                    | Acceptance target                                                                                       | Verification                              |
| ----------------------- | ------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| Authentication          | All defined valid and invalid authentication scenarios pass under the chosen confirmation configuration | Integration tests and manual flow checks  |
| Privacy                 | All tested unauthenticated API requests are rejected; all cross-user resource requests return 404       | Two-account API tests                     |
| Database isolation      | All tested cross-user database reads and writes are blocked by ownership policies                       | RLS tests                                 |
| Category CRUD           | All category scenarios pass; deletion preserves associated blocks                                       | Integration tests and database assertions |
| Block CRUD              | Valid changes persist; all tested invalid ranges are rejected                                           | Validation and integration tests          |
| Weekly calendar         | Every test block appears on its expected date and time                                                  | UI acceptance tests                       |
| Daily and monthly views | Every test activity is available on its expected date                                                   | UI acceptance tests                       |
| Weekly recurrence       | Generated dates exactly match selected weekdays, interval, and range                                    | Recurrence unit tests                     |
| Monthly recurrence      | Generated dates match the approved interval and missing-date policy                                     | Recurrence unit tests                     |
| Series operations       | Edits and deletions affect the full series and no unrelated blocks                                      | Integration tests                         |
| Accessibility           | Core flows can be completed using a keyboard; fields have labels and errors                             | Manual accessibility checks               |
| Responsiveness          | Core flows remain usable at 375, 768, and 1440 pixels                                                   | Viewport checks                           |
| Quality gates           | Relevant tests, lint, formatting checks, and build pass before merge                                    | Local checks or CI                        |

P0 criteria must pass before MVP acceptance. P1 and P2 criteria must pass as those features are delivered.

## 14. Development Workflow

- Work on separate branches.
- Integrate changes through pull requests.
- Require approval from the other teammate.
- Obtain another review after code changes invalidate an approval.
- Run relevant tests, lint, formatting checks, and the production build before merging.
- Keep implementation work aligned with this specification and the constitution.

## 15. Decisions Pending Teammate Review

The following remain proposals until reviewed:

1. Approve one profile timezone with local wall-clock scheduling.
2. Confirm when the profile timezone is first saved.
3. Define the fallback when browser timezone detection fails.
4. Define treatment of nonexistent or repeated times during daylight-saving transitions.
5. Approve skipping months without the recurrence day.
6. Approve Monday-based calendar weeks and weekly interval anchoring.
7. Confirm whether series edits and deletions require an explicit confirmation dialog.
8. Confirm Supabase email-confirmation behavior and password requirements.

Implementation planning will determine:

- Stored versus calculated recurrence occurrences.
- Recurrence request payloads and occurrence identifiers.
- Database schema details and migration strategy.
- Component organization and testing tools.

These technical choices must preserve the product behavior defined here.

## 16. Specification Quality Checklist

| Item                             | Status                          | Notes                                                    |
| -------------------------------- | ------------------------------- | -------------------------------------------------------- |
| Problem and target audience      | Complete                        | Students and professionals with scattered schedules      |
| P0/P1/P2 priorities              | Complete                        | Matches the agreed feature order                         |
| Authentication and privacy       | Defined; review pending         | Email-confirmation configuration remains open            |
| Category CRUD                    | Complete                        | Includes color, ownership, and safe deletion             |
| Block CRUD                       | Complete                        | Required fields and validation are defined               |
| Calendar views                   | Defined; review pending         | Week-start convention requires review                    |
| Weekly recurrence                | Defined; review pending         | Interval anchoring requires review                       |
| Monthly recurrence               | Defined; review pending         | Skip-month policy requires review                        |
| Series-wide changes              | Complete                        | Individual exceptions are excluded                       |
| Timezone behavior                | Review pending                  | Detection fallback and daylight-saving rules remain open |
| Accessibility and responsiveness | Complete                        | Includes verification expectations                       |
| Data entities and ownership      | Complete at specification level | Storage design is deferred to planning                   |
| API methods and responses        | Defined at specification level  | Recurrence payload details are deferred to planning      |
| Measurable acceptance criteria   | Complete                        | Verification methods are identified                      |
| Exclusions                       | Complete                        | Unrequested advanced features are excluded               |
| Branch metadata                  | Recorded                        | docs/project-spec                                        |
| Teammate approval                | Pending                         | This document remains a draft                            |
| Application implementation       | Outside this stage              | Documentation only                                       |
