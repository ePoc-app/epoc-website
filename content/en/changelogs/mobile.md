---
title: Changelog mobile app
aside: false
prevNext: false
---


## Version 3.0.1 (October 30, 2026)
### 🛠️ Improvements
- Displayed the collection description, email and website on mobile.
- Displayed the ePoc publisher logo on the certificate (the Inria Learning Lab logo is reserved for Inria ePocs).
- More complete license attribution (publisher or authors, link to the license).
- Tracked ePoc sessions, starts and resumes.
- Enabled Matomo tracking in HTML and SCORM exports.

### 🐛 Bug Fixes
- Fixed missing translation when adding a custom collection.
- Fixed the "See all" page of custom collections.
- Fixed blank page when opening an ePoc from a custom collection.
- Fixed SCORM initialization and sent the score as a percentage.
- Fixed score not updating after a quiz.
- Fixed ePoc duration calculation.

## Version 3.0.0 (October 21, 2026)
### ✨ Features
- New web interface: sidebar, library, about, settings and ePoc overview pages adapted to large screens.
- ePoc main menu in the web player sidebar, highlighting the current page.
- Support for the SCORM API and standalone web and SCORM exports.
- Open a default ePoc from a URL parameter.
- Detachable audio and video players (Picture-in-Picture).
- Improved answer selection in dropdown lists.

### 🛠️ Improvements
- Displayed the license on the overview page, falling back to the collection license if the ePoc has none.
- ePoc summary selected by default on the overview page.
- Displayed the score even in badge-based ePocs.
- Global ePoc duration instead of the mean chapter duration.
- Better dropdown list correction.
- Renamed "Authors" to "Credits".
- Upgraded to Ionic 8 and Capacitor 8.

### 🐛 Bug Fixes
- Fixed edge-to-edge display and safe areas on Android.
- Fixed universal and deep links.
- Fixed chapters not marked as finished in the table of contents.
- Fixed the end of chapter page when the next chapter is locked.
- Fixed the badge modal in the web version.
- Fixed the library link in the main menu.
- Fixed official ePoc download tracking.

## Version 2.0.3 (February 25, 2026)
### 🐛 Bug Fixes
- Hidden certificate score marker in badge mode.
- Fixed certificate modal showing on the first badge.
- Fixed certificate modal title size.
- Fixed wording in the certificate modal.
- Fixed back button navigation in the certificate modal from the assessment page.
- Fixed license display when URL is missing.
- Fixed missing overview link and main menu links order.
- Fixed ePocs not deleting.
- Fixed local ePoc thumbnail menu.
- Fixed wording for data deletion.

## Version 2.0.2 (February 23, 2026)
### 🐛 Bug Fixes
- Removed chapter numbering in the table of contents page.
- Fixed math rendering.
- Fixed video poster overflow.
- Fixed assessment button font size.
- Fixed badges without icons and missing translations for multiple-choice questions.
- Fixed Mermaid diagrams in HTML content.
- Fixed missing translations for simple questions.
- Handled "entity not found" error in badge modal.
- Fixed plugin context passing.
- Fixed back button when opening the score page from an assessment.
- Fixed ePoc import permission issue on Android.
- Fixed return page after quitting an assessment.

### 🛠️ Improvements
- Added external link clicked event tracking.

## Version 2.0.1 (February 12, 2026)
### 🛠️ Improvements
- Lazy load iframes for current page only
- Added subtitles for teasers

### 🐛 Fixes
- Fixed fullscreen video display
- Resolved concurrent range request issue blocking video playback
- Fixed unlocking of conditional content
- Fixed back button and publisher modal in collection details
- Fixed filtering of content without title and TOC impacting player contents
- Fixed subtitles not working
- Fixed permission issue for old Android versions
- Fixed status bar safe area

## Version 2.0.0 (February 4, 2026)

#### 🔄 Migration
- Full migration to Ionic/Vue
- Global code refactor

#### ✨ New features
- Added content and chapters unlockable under conditions
- Web support for the app

#### 🛠️ Improvements
- Improved learning event logs
- Improved display of unlocked badges
- Open imported ePoc overview page when clicked from library

#### 🐛 Bug fixes
- Fixed display issue for imported ePocs
- Fixed display of the attestation modal

#### 🧹 Maintenance
- Updated to Ionic 8 and Capacitor 7
- Dependency cleanup
- Replaced community Capacitor plugin with official plugins


## Version 1.11.2 (November 6, 2025)
#### 🧹 Maintenance
- Migration of the official collection to `epoc.inria.fr` to avoid GitLab protection blocking

## Version 1.11.1 (September 4, 2025)
#### 🐛 Bug fix
- Fixed imported ePocs not showing issue

## Version 1.11.0 (September 2, 2025)

#### ✨ Features
- Official partner ePocs collections
- Third-party ePocs collections

#### 🛠️ Improvements
- Better ePocs collections metadata

#### 🧹 Maintenance
- Remove Sentry
- Remove old mode, login, routing, and resources

## Version 1.10.0 (May 6, 2025)
### 🛠️ Improvements
- Better Drag & Drop question UI
- Main menu wording & UI
- Reset name + learning data without deleting downloaded ePocs

### 🐛 Bug fix
- Resolved subtitles not showing on android

## Version 1.9.0 (Dec 6, 2024)
### ✨ Features
- Added image in question statement
- Allow images to be open in fullscreen

### 🛠️ Improvements
- Rename activity to assessment
- Added detailed response feedback

### 🐛 Bug fix
- Fixed certificate modal showing wrongfully

## Version 1.8.1 (Nov 15, 2024)
### ✨ Features
- Added zoom on content pages
- Added text selection on rich text content

### 🛠️ Improvements
- Added ePoc prerequisites
- Automatic scroll when dragging item outside of screen
- Allow reorder to be validated from start
- Added xAPI events
- Added chapter estimated time
- Added privacy policy link
- Always show feedback at the end of the correction

### 🐛 Bug fix
- Fixed quotes in plugin template data
- Fixed author job title
- Fixed imported ePocs overview
- Fixed default chapter duration if not set
- Fixed pan, zoom, swipe, text-select and scroll events on content pages

## Version 1.7.0 (May 6, 2024)
### ✨ Features
- Added support for passing data in plugin shortcodes or custom question
- Added support for multiple libraries (Test phase)
- Added badges to certificate

### 🛠️ Improvements
- Removed leave a comment button
- Replace cordova file-opener by the capacitor one

### 🐛 Bug fix
- Fixed Local ePoc teaser video not working
- Fixed import .epoc files
- Fixed images in explanation
- Fixed QCU Correction

## Version 1.5.0 (Dec 18, 2023)
### 🛠  Improvements:
- Added a customizable license per ePoc
- Added a title for authors
- Improved plugin system
- Improved ePoc import

### 🐛 Bug fix
- Fixed refresh of imported ePocs list
- Fixed validation of drag and drop activities
- Fixed default license text
- Fixed chapter objectives not scrollable
- Fixed various UI issues (colors, button size, missing icons, etc)

:read-more{icon="lucide:calendar-clock" to="/en/changelogs/editor"}