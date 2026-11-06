---
title: Générateur de QR Code
description: Outil pour générer des QR Codes pour importer une ePoc à partir d'un lien
aside: false
prevNext: false
toc: false
main:
    backToTop: false
---

::qr-code
::

Cet outil permet de générer des QR codes pour des liens de téléchargement direct d'un ePoc (fichier `.epoc` ou `.zip`) ou d'une collection d'ePocs (fichier `.json`), afin de pouvoir les importer dans votre application ePoc mobile. Un titre facultatif peut être affiché sous le QR code.

À la génération, l'outil vérifie que le lien est accessible publiquement au téléchargement.

Il ne prend en charge la conversion en QR code des liens de partage des services suivants :

-   Google Drive
-   Dropbox
-   GitHub
-   Ou tout lien direct vers un fichier zip d'ePoc

::alert{to="https://bytesbin.com/file-hosting-direct-download-link/" target="_blank" icon="lucide:link"}
Guide pour obtenir un lien direct
::
