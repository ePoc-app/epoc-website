---
title: Changelog editor
aside: false
prevNext: false
---

## Version 0.4.2 (March 9, 2026)
### 🐛 Bug Fixes
- Fixed epoc objectives, Thanks  Guillaume Montagné

### 🛠️ Improvements
- Display content id in form

## Version 0.4.1 (February 23, 2026)
### 🐛 Bug Fixes
- Fixed metadata import.
- Fixed badge export to simple questions.
- Fixed simple question import.
- Fixed certificate badge count during import.

## Version 0.4.0 (February 13, 2026)
#### ✨ Features
- Added tags to ePoc metadata.
- Added ePoc teaser subtitles support.
- Added Publisher form fields to ePoc metadata.
- Enabled support for unlockable content and chapters.

## Version 0.3.1 (December 12, 2025)
#### ✨ Features
- Print global preview as PDF
- Open working directory button
- Transform activity with a single question to a simple question
### 🛠️ Improvements
- Move zoom selection to the bottom left
- Better condition description sentences
- Insert chapter at position
- Display ID in ePoc parameter
### 🐛 Bug Fixes
- Fix page highlight  on condition hover

## Version 0.3 (September 4, 2025)
#### ✨ Features
- Assets menu

#### 🛠️ Improvements
- Merge Italian version

#### 🐛 Bug Fixes
- Node not correctly deleted when the last item inside it is deleted
- Linux save does not set file extension
- Save state does not end correctly in certain cases
- Error when opening global preview

## Version 0.2 (May 6, 2025)

### ✨ Features
- Certificate are now optional
- English traduction of the interface

### 🛠️ Improvements
- Remove chapter label & customization
- New lang metadata
- Rename Question to activity

## Version 0.1.11-beta (Dec 6, 2024)

### ✨ Features
- Add individual feedback for each question
- Open within a new window
- Add statements as html inline input to all question types
- Add table & strikethrough to WYSIWYG editor
- Move settings to top bar

### 🛠️ Improvements
- Rename "Activité" to "Evaluation"

### 🐛 Bug fix
- Add audio to import
- Double click on file doesn't open it
- Ordered chapters reproduced in the mobile app
- Apply backward compatibility after vue flow init
- Add backward compatibility for handle positions

## Version 0.1.10-beta (Nov 15, 2024)

### ✨ Features
- **Full chapter Copy/Paste:** Duplicate entire chapters from context menu
- **Edges preserved on Copy/Paste:** When copying and pasting nodes, connected edges are now automatically transferred.
- **Settings page:** New settings page

### 🛠️ Improvements
- **Chapter time estimation:**  Now possible to specify a chapter time estimation
- **Windowed Preview:** Disable fullscreen on preview (MacOS)
- **Custom question from context menu:** Now possible to add custom question from the context menu
- **Menu bar navigation:** Move new window location in the menu bar

### 🐛 Bug fix
- **Resolved chapter id duplication:** Eliminated unique identifier conflicts
- **Resolved chapter reordering**

## Version 0.1.9-beta (May 6, 2024)

### ✨ Features
- Added global preview
- Added value injection to custom questions
- Added text-only WYSIWYG editor

### 🛠️ Improvements
- Added chapter title on top of the chapter
- Added swap chapter in context menu
- Added swap linked page in context menu
- Redesigned badges interface
- Added tooltips in the toolbar
- Linked the preview window to the corresponding editor window
- Updated ePoc files types
- Changed ePoc editor icon

### 🐛 Bug fix
- Dragging a group of node with the drag selection correctly saves the undo action
- Fixed `scored` verb using `===` instead of `≥`
- Context menu actions now correctly saves the undo action
- Fixed crash after closing an editor window

## Version 0.1.8-beta (Mar 26, 2024)

### ✨ Features
- Added custom question content.
- Added hints to form inputs.
- Added ePoc editor version in the ‘content.json’ file.
- Added a button to delete custom badge icons.

### 🛠️ Improvements
- Disabled drag functionality for page contents (video, audio, text).
- Removed the instructions field when it is unnecessary
- Improved management of triggers for writing ‘content.json’ & ‘project.json’ files.

### 🐛 Bug fix
- Fixed Copy/Paste issues in WYSIWYG modals.
- Fixed the issue where importing a project as zip file did not correctly write the ePoc node.
- Corrected incorrect input types in forms.
- Fixed Copy/Paste issues with embed images

## Version 0.1.6-beta (Nov 10, 2023)

### 🛠 Improvements
- Badges targets highlighting on
- Add badge button in all forms
- Change main ePoc form fields order
- Link label to inputs

### ⚡️Performance
- Prune unused assets

### 🐛 Bug fix
- Fix copy/paste in text inputs
- Fix types to remove warnings (runtime and webstorm)
- Fix file input delete button not saving state
- Fix custom badge icons
- Fix activity duplicate content ids

## Version 0.1.5-beta (Sep 18, 2023)

### ✨ Features
- Add badges
- Auto update

### 🛠️ Improvements
- Code signature (Windows & MacOS)

:read-more{icon="lucide:calendar-clock" to="/en/changelogs/mobile"}
