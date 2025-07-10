---
title: Redirect
fullpage: true
description: You should be redirected to the ePoc app
---

<!-- Placeholder page when using Deep Linking (Universal / App Links) to the ePoc app using /app-redirect/* (See .htaccess to check url rewriting) -->

::hero-alt
---
actions:
- name: Télécharger pour Android
  to: {{$data.google_link}}
  leftIcon: 'cib:google-play'
  rightIcon: 'lucide:arrow-up-right'
  target: _blank
- name: Télécharger pour iOS
  to: {{$data.apple_link}}
  leftIcon: 'cib:apple'
  rightIcon: 'lucide:arrow-up-right'
  target: _blank
---

#title
Redirecting...

#description
If you have the ePoc app installed, you will be redirected to the app. If you are not redirected automatically, please click the "open" link at the top of the page.
<br/><br/>
Otherwise you can install the app from the [Google Play Store](https://play.google.com/store/apps/details?id=fr.inria.epoc) or the [Apple App Store](https://apps.apple.com/app/epoc/id6444228850).
::


