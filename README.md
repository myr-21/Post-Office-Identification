# PostRoute Operator

Build the complete production-quality frontend UI for a web-based internal postal operations system called:

PostRoute AI
AI-Powered Delivery Post Office Identification System

This is an operator-facing system for post office staff. Its purpose is to help staff identify the correct PIN code and delivery post office from incomplete, noisy, misspelled, abbreviated, or inconsistently formatted postal addresses, then review predictions, route parcels, monitor mapping changes, and analyze system performance.

The UI must feel like a serious operational tool used by postal workers, not a generic startup SaaS dashboard.

Do NOT implement the ML model, real backend, authentication logic, PostgreSQL integration, or real API calls yet.

For this phase, build the entire frontend using realistic mock data and clean mock service functions, but design all interfaces and data structures so a real backend/API can be connected later without redesigning the UI.

1. DESIGN DIRECTION

Overall visual identity

Use a postal operations visual language inspired by Indian postal services:

Primary color: deep postal orange

Secondary: warm white / off-white

Neutral: charcoal / dark gray

Success: muted green

Warning: amber

Error: muted red

Information: restrained blue

Suggested palette:

Primary Orange: #E8751A

Dark Orange: #C95C0A

Light Orange: #FFF2E6

Warm White: #FFFCF8

Background: #F7F7F5

Card White: #FFFFFF

Primary Text: #242424

Secondary Text: #686868

Border: #E6E2DD

Success: #3F7D55

Warning: #B7791F

Error: #B54747

Info: #4677A8

Do not use neon orange.
Do not use gradients heavily.
Do not use excessive glassmorphism.
Do not make the UI look like a crypto dashboard.
Do not use oversized decorative illustrations.

The interface should prioritize clarity, readability, speed, and operator efficiency.

Use orange mainly for:

primary actions

selected navigation

active indicators

section accents

important metrics

status highlights

Keep most surfaces white / warm white.

2. TARGET USER

Primary users:

Post office operators

Counter staff

Sorting staff

Supervisors

The UI should work well for a user who may be processing many addresses continuously.

Prioritize:

large readable text

clear labels

obvious actions

minimal unnecessary animation

keyboard-friendly forms

high contrast

predictable navigation

visible status indicators

minimal clicks for common operations

3. APPLICATION STRUCTURE

Use a persistent application shell:

LEFT SIDEBAR
+
TOP HEADER
+
MAIN CONTENT

Sidebar navigation:

Dashboard

Address Prediction

Review Queue

Parcels

Post Offices

Pincode Mapping

Analytics

Activity Log

Bottom sidebar:

System Status

Operator Profile

Settings

Top header should contain:

current section title

search

notifications

operator name

online/system status

optional date/time

Make the sidebar collapsible on smaller screens.

4. DASHBOARD

Create a professional operational dashboard.

Page title:

Operations Dashboard

Subtitle:

Postal address prediction and routing overview

Top KPI cards:

Predictions Today

Example:
1,248

Supporting text:
+8.4% vs yesterday

Auto-Routed

1,091

Supporting:
87.4% of predictions

Manual Review

157

Supporting:
12.6%

Prediction Accuracy

94.8%

Supporting:
Based on verified predictions

Active Parcels

326

Mapping Changes

3

Supporting:
Last 30 days

Use small icons but avoid oversized decorative icons.

Main dashboard sections:

Recent Predictions

Table columns:

Time

Address

Predicted PIN

Delivery Post Office

Confidence

Status

Operator Action

Example statuses:

Auto Approved

Needs Review

Manually Verified

Corrected

Confidence indicators:

High: >= 90%

Medium: 70–89%

Low: < 70%

Use badges.

Review Queue Summary

Show:

Low confidence

Ambiguous address

Mapping conflict

Missing locality

Multiple candidate matches

Include a prominent:

Review Queue →

button.

Routing Activity

Timeline showing:

Parcel received

Address analyzed

PIN predicted

Operator verified

Sorting

Dispatched

Delivered

System Health

Show:

API: Operational

ML Model: Loaded

Database: Connected

Postal Mapping: Updated

Last synchronization: timestamp

All system-health data can be mocked.

5. ADDRESS PREDICTION PAGE

This is the most important page in the application.

Page title:

Address Prediction

Subtitle:

Identify the most probable delivery post office and PIN code

Create a large two-column layout.

LEFT:

Address Input

Large textarea:

Label:
Postal Address

Placeholder:

Enter or paste a postal address...

Example helper:

Example: Flat 302, Baner Road, near Balewadi, Pune

Additional fields:

Optional Region

Dropdown:

Maharashtra

Karnataka

Gujarat

Delhi

etc.

Optional District

Dropdown.

Optional PIN

Input.

Processing Mode

Radio / segmented control:

Automatic

Assisted

Buttons:

Predict Address
Clear

Include:

Ctrl + Enter to predict

RIGHT:

Prediction Result

Before prediction:

Show an empty state:

Prediction results will appear here

After mock prediction:

Large result card:

Predicted PIN

411045

Delivery Post Office

Baner S.O

District

Pune

State

Maharashtra

Confidence

94.2%

Display a large confidence indicator but don't use a giant speedometer.

Status:

High Confidence

Then:

Alternative Matches

Table:

| Rank | Post Office | PIN | Confidence |
| 1 | Baner S.O | 411045 | 94.2% |
| 2 | Aundh S.O | 411007 | 3.8% |
| 3 | Balewadi S.O | 411045 | 1.6% |

Then:

Prediction Explanation

Show interpretable factors:

Locality detected

District detected

PIN token matched

Address normalized

Mapping validated

Do not pretend to provide deep model explainability. This is a UI placeholder for future backend-generated reasoning.

Actions:

Confirm Routing
Send to Review
Try Another Address

6. ADDRESS NORMALIZATION PANEL

On the prediction page, include an expandable panel:

Address Processing

Show:

Raw Input:
flat no 302 baner rd pune near balewadi

Normalized:
Flat 302, Baner Road, Balewadi, Pune

Detected components:

Flat/Unit

Locality

Road

City

District

State

PIN

Use chips/tags for detected entities.

7. REVIEW QUEUE PAGE

Page title:

Review Queue

Subtitle:

Predictions requiring operator verification

Top summary:

Total pending

High priority

Mapping conflicts

Low confidence

Filters:

Confidence

Reason

Date

Region

Operator

Status

Search by:

address

PIN

parcel ID

Main table:

Columns:

Priority

Address

Predicted PIN

Post Office

Confidence

Review Reason

Created

Status

Action

Review reasons:

Low Confidence

Ambiguous Locality

Missing Information

Mapping Conflict

Multiple Candidates

Clicking a row opens a detailed review panel / page.

8. REVIEW DETAIL

Create a detailed operator review interface.

Show:

Original Address

Full raw address.

Normalized Address

System-normalized address.

Prediction

PIN
Post Office
Confidence

Candidate Matches

Ranked alternatives.

Mapping Information

Current mapping
Historical mapping
Potential conflict

Operator Decision

Buttons:

Approve Prediction
Correct Prediction
Reject
Escalate

If correcting:

Fields:

Correct PIN

Correct Post Office

Correction Reason

Notes

Button:

Save Correction

Show confirmation after successful mock submission.

9. PARCELS PAGE

Page title:

Parcel Routing

Show parcel-management interface.

Top:

Total Parcels

Received

Address Verified

Sorting

Dispatched

Delivered

Search:

Parcel ID

Address

PIN

Post Office

Filters:

Status

Date

Post Office

Table:

Parcel ID

Address

Predicted PIN

Delivery Office

Confidence

Routing Status

Last Updated

Action

Statuses:

Received

Address Analysis

Address Verified

Sorting

Dispatched

Delivered

10. PARCEL DETAIL

Create a detail page.

Header:

Parcel PA-2026-004821

Information cards:

Current Status

PIN

Delivery Office

Confidence

Assigned Operator

Address section:

Raw address
Normalized address

Prediction section:

Predicted PIN
Post Office
Alternatives
Confidence

Routing timeline:

Received
↓
Address Analyzed
↓
Verified
↓
Sorting
↓
Dispatched
↓
Delivered

Show timestamps for each event.

Include:

Update Status

button.

11. POST OFFICES PAGE

Page title:

Post Offices

Purpose:

Browse postal offices and their associated PIN mappings.

Search fields:

Post Office

PIN

District

State

Filters:

State

District

Status

Mapping Version

Table:

Post Office

PIN

District

State

Latitude

Longitude

Status

Mapping Version

Status:

Active

Updated

Historical

Clicking one opens Post Office Detail.

12. POST OFFICE DETAIL

Show:

Post Office name
PIN
District
State
Region
Division
Status

Optional map placeholder.

Associated PIN information.

Mapping history.

Recent predictions involving this office.

13. PINCODE MAPPING PAGE

This is an important research/system feature.

Page title:

Pincode Mapping

Subtitle:

Manage current and historical postal mappings

Top cards:

Active PIN Codes

Recent Mapping Changes

Merged Codes

Conflicts Detected

Main table:

PIN

Post Office

Region

Mapping Version

Effective From

Status

Change Type

Actions

Change types:

New

Updated

Merged

Deprecated

Create a:

Mapping Change Details

drawer/modal with:

Previous Mapping
New Mapping
Effective Date
Change Reason
Affected Post Offices
Affected PIN Codes

Include version indicator:

Mapping Version: V3

14. MAPPING HISTORY

Create an easy-to-understand timeline:

V1
Original Mapping

↓

V2
Regional Update

↓

V3
Post Office Merge

Each event should show:

version

date

affected PIN

affected office

change type

Add a toggle:

Current Mapping / Historical Mapping

15. ANALYTICS PAGE

Page title:

Analytics & Model Performance

This page will eventually receive real ML metrics from the backend.

Top KPI cards:

Top-1 Accuracy

Top-3 Accuracy

Top-5 Accuracy

Precision

Recall

F1 Score

Auto-resolution Rate

Manual Review Rate

Charts:

Prediction Accuracy Trend

Line chart over time.

Accuracy by Address Condition

Bar chart:

Clean

Spelling Errors

Abbreviations

Missing Fields

Reordered Components

Combined Noise

Confidence Distribution

Histogram / bar chart.

Review Reasons

Donut or horizontal bar chart.

Baseline vs Proposed Model

Comparison chart.

Models:

TF-IDF + Logistic Regression

TF-IDF + Linear SVM

Proposed Model

Important:

These charts use mock values now and must be structured so real API values can replace them later.

Clearly label mock/demo analytics where appropriate.

16. ACTIVITY LOG

Page title:

Activity Log

Show chronological system/operator actions.

Columns:

Timestamp

Operator

Action

Entity

Details

Status

Examples:

Prediction generated
Prediction manually corrected
Parcel status updated
Mapping updated
Review approved

Filters:

Operator

Action

Date

Entity

17. NOTIFICATIONS

Create notification dropdown.

Types:

New review required

Mapping change detected

Low-confidence prediction

System warning

Successful update

Use orange notification indicator.

18. OPERATOR PROFILE / SETTINGS

Profile section:

Name

Role

Post Office

Employee ID placeholder

Last active

Settings:

Appearance

Density

Notifications

Table rows

Language placeholder

Keyboard shortcuts

Do NOT implement real authentication.

19. RESPONSIVE DESIGN

Desktop-first because this is an operational workstation.

Must also work at:

1440px

1280px

1024px

tablet width

At smaller sizes:

collapse sidebar

maintain readable tables

use horizontal table scrolling

stack prediction panels vertically

Do not ruin the desktop layout just to make mobile cards pretty.

20. COMPONENT SYSTEM

Build reusable components:

AppShell

Sidebar

TopHeader

PageHeader

KPI Card

StatusBadge

ConfidenceBadge

DataTable

SearchBar

FilterBar

EmptyState

LoadingState

ErrorState

Modal

Drawer

Timeline

PredictionCard

CandidateList

AddressField

AddressEntityChip

ReviewPanel

MappingTimeline

ChartCard

NotificationPanel

Toast

ConfirmDialog

Use a consistent component system throughout the application.

21. UX STATES

Every important screen must have:

loading state

empty state

populated state

error state

success state

For example, Address Prediction should demonstrate:

Empty

Processing

High-confidence prediction

Medium-confidence prediction

Low-confidence prediction

Error

Manual review required

22. MOCK DATA

Create realistic mock datasets in separate files/services.

Include at least:

15 post offices

20 predictions

10 review queue items

15 parcels

10 mapping history events

analytics time-series data

activity log events

Use realistic Indian/Pune postal examples, but clearly treat them as demonstration data.

Create typed interfaces/types for:

AddressInput
PredictionResult
CandidatePrediction
PostOffice
Parcel
ReviewItem
MappingChange
AnalyticsMetric
ActivityEvent
Operator


23. API-READY ARCHITECTURE

Do NOT hardcode mock objects directly into visual components.

Use service functions such as:

predictAddress()
getPredictions()
getReviewQueue()
getParcels()
getPostOffices()
getMappingHistory()
getAnalytics()
getActivityLog()


Initially these return mock data.

The UI must interact only through these service interfaces so they can later be replaced with:

FastAPI backend → ML service → PostgreSQL

without rewriting the frontend.

24. TECHNOLOGY

Use:

React

TypeScript

Vite

Tailwind CSS

Lucide React icons

Recharts or another lightweight chart library

React Router

Prefer reusable components.

Keep the code modular.

Use strong TypeScript typing.

Avoid unnecessary dependencies.

25. VISUAL DETAILS

Use:

10–14px border radius

subtle shadows

thin borders

generous but practical spacing

strong typography hierarchy

compact tables

readable badges

orange section accents

Cards should feel like physical operational forms modernized for software.

Use icons related to:

mail

package

location

map pin

route

building

search

alert

analytics

database

check

clock

Avoid excessive icon usage.

26. IMPORTANT UX PRINCIPLES

The operator should be able to:

Enter an address

Get a prediction

Understand confidence

See alternative results

Approve or correct it

Route the parcel

with minimal navigation.

The prediction workflow should always remain the central workflow.

27. MAIN NAVIGATION PRIORITY

Order navigation by operational frequency:

Dashboard

Address Prediction

Review Queue

Parcels

Post Offices

Pincode Mapping

Analytics

Activity Log

Use orange highlight on the active route.

28. ACCESSIBILITY

Ensure:

WCAG-friendly contrast

keyboard navigation

visible focus states

labels on all inputs

accessible buttons

tooltips only where necessary

no information conveyed by color alone

29. ANIMATION

Keep animation subtle.

Use:

page fade/slide transitions

dropdown transitions

modal transitions

hover states

progress transitions

Do NOT use dramatic animations.

This is a postal operations application, not a gaming launch screen.

30. FINAL PRODUCT FEEL

The final UI should feel like:

Modern Indian postal operations software

combined with:

Professional enterprise dashboard

combined with:

AI-assisted decision support

The interface should feel trustworthy, calm, precise, and operational.

The visual hierarchy should communicate:

Address → Prediction → Confidence → Verification → Routing

more strongly than anything else.

31. MOCK USER

Use:

Name:
Mayur Patil

Role:
Postal Operations Operator

Post Office:
Pune Central Operations

Status:
Online

This is demonstration data only.

32. DO NOT IMPLEMENT YET

Do not implement:

real ML model

NLP model

Python backend

PostgreSQL

authentication

live India Post APIs

OCR

real parcel tracking

real mapping updates

cloud deployment

Only create the frontend and mock service layer.

33. DELIVERABLE

Generate the complete frontend application with:

all pages listed above

full routing

responsive layout

reusable component system

mock data

mock service layer

realistic empty/loading/error/success states

polished operator-friendly UX

consistent orange/white postal visual language

clean TypeScript architecture

no placeholder “Lorem ipsum”

no unfinished screens

no generic SaaS templates

The app should be fully navigable immediately after generation.

Prioritize functional UX and information architecture over decorative visuals.

The final result should look like a serious internal system that could later be connected to the real AI/ML prediction backend.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/db46331d-3fcc-4338-bcc6-929df3e30405).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
