---
title: Changelogs éditeur
aside: false
prevNext: false
---

## Version 0.4.2 (9 mars 2026)
### 🐛 Bug Fixes
- Fix epoc objectives, Thanks  Guillaume Montagné

### 🛠️ Improvements
- Display content id in form

## Version 0.4.1 (23 février 2026)
### 🐛 Corrections de bugs
- Correction de l'import des métadonnées.
- Correction de l'export des badges pour les questions simples.
- Correction de l'import des questions simples.
- Correction du décompte des badges de certificats lors de l'import.

## Version 0.4.0 (13 février 2026)
### ✨ Fonctionnalités
- Ajout de balises aux métadonnées ePoc.
- Ajout du support des sous-titres pour le teaser.
- Ajout des champs de formulaire Éditeur aux métadonnées ePoc.
- Prise en charge du contenu et des chapitres déverrouillables.

## Version 0.3.1 (12 Décembre 2025)
### ✨ Fonctionnalités
- Imprimer l'aperçu global en tant que PDF
- Possibilité d'ouvrir le répertoire de travail
- Transformer les activités avec une seule question en question simple
### 🛠️ Améliorations
- Sélecteur de zoom déplacer en bas à gauche
- Amélioration des phrases de description des conditions
- Insérer un chapitre à une certaine position
- Affichage de l'ID dans les paramètres de l'ePoc
### 🐛 Corrections de bugs
- Correction de la surbrillance de la page au survol de la condition.

## Version 0.3 (4 septembre 2025)
#### ✨ Nouvelles fonctionnalités
- Menu des ressources

#### 🛠️ Améliorations
- Fusion de la version italienne

#### 🐛 Corrections de bugs
- Nœud non correctement supprimé lors de la suppression du dernier élément à l'intérieur
- Sauvegarde sous Linux ne définit pas l'extension du fichier
- État de sauvegarde ne se termine pas correctement dans certains cas
- Erreur lors de l'ouverture de l'aperçu global

## Version 0.2 (6 mai 2025)

### ✨ Fonctionnalités

-   Les certificats sont maintenant optionnels
-   Traduction de l'interface en anglais

### 🛠️ Améliorations

-   Suppression du label et de la personnalisation des chapitres
-   Nouvelles métadonnées de langue
-   Renommage de "Question" en "Activité"

## Version 0.1.11-beta (6 décembre 2024)

### ✨ Fonctionnalités

-   Ajout de feedback individuel pour chaque question
-   Ouvrir dans une nouvelle fenêtre
-   Ajout d'énoncés en HTML pour tous les types de questions
-   Ajout de tableaux et de texte barré dans l'éditeur WYSIWYG
-   Déplacement des paramètres dans la barre supérieure

### 🛠️ Améliorations

-   Renommage de "Activité" en "Évaluation"

### 🐛 Correction de bugs

-   Ajout de l'audio à l'import
-   Double-clic sur un fichier ne l'ouvre pas
-   Chapitres ordonnés reproduits dans l'application mobile
-   Application de la compatibilité ascendante après l'initialisation de Vue Flow
-   Ajout de la compatibilité ascendante pour les positions des poignées

## Version 0.1.10-beta (15 novembre 2024)

### ✨ Fonctionnalités

-   **Copier/Coller complet de chapitre :** Duplication de chapitres entiers depuis le menu contextuel
-   **Arêtes préservées lors du Copier/Coller :** Lors de la copie et du collage de nœuds, les arêtes connectées sont maintenant automatiquement transférées.
-   **Page des paramètres :** Nouvelle page de paramètres

### 🛠️ Améliorations

-   **Estimation du temps de chapitre :** Possibilité de spécifier une estimation du temps pour un chapitre
-   **Prévision en fenêtrée :** Désactivation du plein écran lors de la prévision (MacOS)
-   **Question personnalisée depuis le menu contextuel :** Possibilité d'ajouter une question personnalisée depuis le menu contextuel
-   **Navigation dans la barre de menu :** Déplacement de l'emplacement de la nouvelle fenêtre dans la barre de menu

### 🐛 Correction de bugs

-   **Résolution de la duplication des identifiants de chapitre :** Élimination des conflits d'identifiants uniques
-   **Résolution du réordonnancement des chapitres**

## Version 0.1.9-beta (6 mai 2024)

### ✨ Fonctionnalités

-   Ajout de la prévision globale
-   Ajout de l'injection de valeur dans les questions personnalisées
-   Ajout de l'éditeur WYSIWYG en texte seul

### 🛠️ Améliorations

-   Ajout du titre du chapitre en haut du chapitre
-   Ajout de l'échange de chapitre dans le menu contextuel
-   Ajout de l'échange de page liée dans le menu contextuel
-   Redesign de l'interface des badges
-   Ajout d'infobulles dans la barre d'outils
-   Liaison de la fenêtre de prévision à la fenêtre d'édition correspondante
-   Mise à jour des types de fichiers ePoc
-   Changement de l'icône de l'éditeur ePoc

### 🐛 Correction de bugs

-   Le glissement d'un groupe de nœuds avec la sélection de glissement enregistre correctement l'action d'annulation
-   Correction du verbe `scored` utilisant `===` au lieu de `≥`
-   Les actions du menu contextuel enregistrent maintenant correctement l'action d'annulation
-   Correction du plantage après la fermeture d'une fenêtre d'édition

## Version 0.1.8-beta (26 mars 2024)

### ✨ Fonctionnalités

-   Ajout de contenu de question personnalisé.
-   Ajout d'indices pour les entrées de formulaire.
-   Ajout de la version de l'éditeur ePoc dans le fichier 'content.json'.
-   Ajout d'un bouton pour supprimer les icônes de badges personnalisés.

### 🛠️ Améliorations

-   Désactivation de la fonction de glissement pour le contenu des pages (vidéo, audio, texte).
-   Suppression du champ d'instructions lorsqu'il est inutile
-   Amélioration de la gestion des déclencheurs pour l'écriture des fichiers 'content.json' et 'project.json'.

### 🐛 Correction de bugs

-   Correction des problèmes de Copier/Coller dans les modales WYSIWYG.
-   Correction du problème où l'importation d'un projet en fichier zip n'écrivait pas correctement le nœud ePoc.
-   Correction des types d'entrée incorrects dans les formulaires.
-   Correction des problèmes de Copier/Coller avec les images intégrées

## Version 0.1.6-beta (10 novembre 2023)

### 🛠 Améliorations

-   Mise en évidence des cibles des badges
-   Ajout du bouton de badge dans tous les formulaires
-   Changement de l'ordre des champs du formulaire principal ePoc
-   Liaison de l'étiquette aux entrées

### ⚡️Performance

-   Élagage des ressources inutilisées

### 🐛 Correction de bugs

-   Correction du Copier/Coller dans les entrées de texte
-   Correction des types pour supprimer les avertissements (runtime et WebStorm)
-   Correction du bouton de suppression des entrées de fichier qui n'enregistrait pas l'état
-   Correction des icônes de badges personnalisés
-   Correction des identifiants de contenu en double dans les activités

## Version 0.1.5-beta (18 septembre 2023)

### ✨ Fonctionnalités

-   Ajout de badges
-   Mise à jour automatique

### 🛠️ Améliorations

-   Signature du code (Windows & MacOS)

:read-more{icon="lucide:calendar-clock" to="/changelogs/mobile"}
