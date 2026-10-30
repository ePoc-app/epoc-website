---
title: Changelogs application mobile
aside: false
prevNext: false
---

## Version 3.0.1 (30 octobre 2026)
### 🛠️ Améliorations
- Affichage de la description, de l'email et du site web des collections sur mobile.
- Logo de l'éditeur de l'ePoc sur l'attestation (le logo Inria Learning Lab est réservé aux ePocs Inria).
- Mention d'attribution de la licence plus complète (éditeur ou auteurs, lien vers la licence).
- Suivi des sessions, des démarrages et des reprises d'ePoc.
- Suivi Matomo actif dans les exports HTML et SCORM.

### 🐛 Corrections de bugs
- Correction de la traduction du message d'ajout d'une collection personnalisée.
- Correction de la page « Voir tous » des collections personnalisées.
- Correction de la page blanche à l'ouverture d'un ePoc d'une collection personnalisée.
- Correction de l'initialisation SCORM et envoi du score en pourcentage.
- Correction de la mise à jour du score après un quiz.
- Correction du calcul de la durée de l'ePoc.

## Version 3.0.0 (21 octobre 2026)
### ✨ Fonctionnalités
- Nouvelle interface web : barre latérale, pages bibliothèque, à propos, paramètres et présentation des ePocs adaptées aux grands écrans.
- Menu principal de l'ePoc dans la barre latérale du player web, avec la page en cours mise en évidence.
- Support de l'API SCORM et des exports web et SCORM autonomes.
- Ouverture d'un ePoc par défaut depuis un paramètre d'URL.
- Lecteurs audio et vidéo détachables (Picture-in-Picture).
- Sélection des réponses améliorée dans les listes déroulantes.

### 🛠️ Améliorations
- Affichage de la licence sur la page de présentation, avec la licence de la collection par défaut si l'ePoc n'en a pas.
- Résumé de l'ePoc sélectionné par défaut sur la page de présentation.
- Affichage du score même dans les ePocs à badges.
- Durée globale de l'ePoc à la place de la durée moyenne des chapitres.
- Meilleure correction des listes déroulantes.
- « Auteurs » renommé en « Crédits ».
- Mise à jour vers Ionic 8 et Capacitor 8.

### 🐛 Corrections de bugs
- Correction de l'affichage bord à bord et des zones de sécurité sur Android.
- Correction des liens universels et des liens profonds.
- Correction des chapitres non terminés dans la table des matières.
- Correction de la page de fin de chapitre lorsque le chapitre suivant est verrouillé.
- Correction de la modale des badges dans la version web.
- Correction du lien vers la bibliothèque dans le menu principal.
- Correction du suivi du téléchargement des ePocs officiels.

## Version 2.0.3 (25 février 2026)
### 🐛 Corrections de bugs
- Masquage du marqueur de score de certificat en mode badge.
- Correction de l'affichage intempestif de la modale de certificat au premier badge obtenu.
- Correction de la taille du titre dans la modale de certificat.
- Correction des libellés dans la modale de certificat.
- Correction de la navigation du bouton de retour dans la modale de certificat depuis la page d'évaluation.
- Correction de l'affichage des licences en cas d'URL manquante.
- Correction du lien manquant dans l'aperçu et de l'ordre des liens dans le menu principal.
- Correction de la suppression des ePocs.
- Correction du menu de miniature pour les ePoc locaux.
- Correction des libellés de suppression des données.

## Version 2.0.2 (23 février 2026)
### 🐛 Corrections de bugs
- Suppression de la numérotation des chapitres dans la table des matières.
- Correction du rendu mathématique.
- Correction du débordement de la miniature des vidéos.
- Correction de la taille de police du bouton d'évaluation.
- Correction des badges sans icône et des traductions manquantes pour les questions à choix multiples.
- Correction de l'affichage des diagrammes Mermaid dans le contenu HTML.
- Correction des traductions manquantes pour les questions simples.
- Gestion de l'erreur "entité non trouvée" dans la modale des badges.
- Correction du passage du contexte des plugins.
- Correction du bouton de retour lors de l'ouverture de la page de score depuis une évaluation.
- Correction du problème de permission lors de l'import ePoc sur Android.
- Correction de la page de retour après avoir quitté une évaluation.

### 🛠️ Améliorations
- Ajout d'un événement de clic pour les liens externes.

## Version 2.0.1 (12 février 2026)

### 🛠️ Améliorations
- Chargement paresseux des iframes pour la page courante uniquement
- Ajout de sous-titres pour les teasers

### 🐛 Correctifs
- Correction de l'affichage plein écran des vidéos
- Résolution d'un problème de requêtes simultanées bloquant la lecture vidéo
- Correction du déverrouillage des contenus conditionnels
- Correction du bouton retour et de la modale éditeur dans les détails des collections
- Correction du filtrage des contenus sans titre et de la table des matières impactant le lecteur
- Résolution d'un problème de fonctionnement des sous-titres
- Correction d'un problème de permissions pour les anciennes versions d'Android
- Correction de la zone sécurisée de la barre de statut


## Version 2.0.0 (4 février 2026)

#### 🔄 Migration
- Migration complète vers Ionic/Vue
- Refactoring global du code

#### ✨ Nouvelles fonctionnalités
- Ajout des contenus et chapitres déblocables sous conditions
- Support web de l'application

#### 🛠️ Améliorations
- Amélioration des logs d'événements d'apprentissage
- Amélioration de l'affichage des bagdes débloqués
- Ouverture de la page d'aperçu de l'ePoc importé lorsqu'on clique depuis la bibliothèque

#### 🐛 Corrections de bugs
- Correction du bug d'affichage des ePocs importés
- Correction de l'affichage de la modal d'attestation

#### 🧹 Maintenance
- Mise à jour vers Ionic 8 et Capacitor 7
- Nettoyage des dépendances
- Remplacement de plugin Capacitor communautaire par les plugins officiels

## Version 1.11.2 (6 novembre 2025)
#### 🧹 Maintenance
- Migration de la collection officielle vers `epoc.inria.fr` pour éviter le blocage de protection gitlab


## Version 1.11.1 (4 septembre 2025)
#### 🐛 Corrections de bugs
- Correction du bug d'affichage des ePocs importés

## Version 1.11.0 (2 septembre 2025)

#### ✨ Nouvelles fonctionnalités
- Collections ePocs de partenaires officiels
- Collections ePocs tierces

#### 🛠️ Améliorations
- Meilleure métadonnée pour les collections ePocs

#### 🧹 Maintenance technique
- Suppression de Sentry
- Suppression de l'ancien mode, de la connexion, du routage et des ressources

## Version 1.10.0 (6 mai 2025)

### 🛠️ Améliorations

-   Meilleure interface utilisateur pour les questions de glisser-déposer
-   Formulation et interface du menu principal
-   Réinitialisation du nom et des données d'apprentissage sans supprimer les ePocs téléchargés

### 🐛 Correction de bugs

-   Résolution du problème des sous-titres non affichés sur Android

## Version 1.9.0 (6 décembre 2024)

### ✨ Fonctionnalités

-   Ajout d'images dans les énoncés de questions
-   Possibilité d'ouvrir les images en plein écran

### 🛠️ Améliorations

-   Renommage de "Activité" en "Évaluation"
-   Ajout de retour détaillé sur les chaque question

### 🐛 Correction de bugs

-   Correction de l'affichage incorrect de la modale de certificat

## Version 1.8.1 (15 novembre 2024)

### ✨ Fonctionnalités

-   Ajout du zoom sur les pages de contenu
-   Ajout de la sélection de texte sur le contenu enrichi

### 🛠️ Améliorations

-   Ajout des prérequis pour les ePocs
-   Défilement automatique lors du glissement d'un élément hors de l'écran
-   Validation possible dès le début pour les questions "reorder"
-   Ajout d'événements xAPI
-   Ajout du temps estimé par chapitre
-   Ajout du lien vers la politique de confidentialité
-   Affichage systématique du feedback à la fin de la correction

### 🐛 Correction de bugs

-   Correction des guillemets dans les données des modèles de plugins
-   Correction du titre de l'auteur
-   Correction de l'aperçu des ePocs importés
-   Correction de la durée par défaut des chapitres si non définie
-   Correction des événements de zoom, balayage, sélection de texte et défilement sur les pages de contenu

## Version 1.7.0 (6 mai 2024)

### ✨ Fonctionnalités

-   Ajout du support pour passer des données dans les shortcodes de plugins ou les questions personnalisées
-   Ajout du support pour plusieurs bibliothèques (Phase de test)
-   Ajout de badges sur le certificat

### 🛠️ Améliorations

-   Suppression du bouton "Laisser un commentaire"
-   Remplacement de cordova file-opener par celui de capacitor

### 🐛 Correction de bugs

-   Correction de la vidéo teaser des ePocs locaux ne fonctionnant pas
-   Correction de l'import des fichiers .epoc
-   Correction des images dans les explications
-   Correction de la correction des QCU

## Version 1.5.0 (18 décembre 2023)

### 🛠 Améliorations :

-   Ajout d'une licence personnalisable par ePoc
-   Ajout d'un titre pour les auteurs
-   Amélioration du système de plugins
-   Amélioration de l'import des ePocs

### 🐛 Correction de bugs

-   Correction du rafraîchissement de la liste des ePocs importés
-   Correction de la validation des activités de glisser-déposer
-   Correction du texte de licence par défaut
-   Correction des objectifs de chapitre non défilables
-   Correction de divers problèmes d'interface (couleurs, taille des boutons, icônes manquantes, etc)

:read-more{icon="lucide:calendar-clock" to="/changelogs/editor"}
