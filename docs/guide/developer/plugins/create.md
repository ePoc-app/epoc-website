# Créer un plugin

## Introduction

Notre application mobile utilise un système de plugin qui permet d'étendre ses fonctionnalités de manière 
sécurisée et contrôlée. Ce système repose sur l'utilisation d'une iframe en mode sandbox au sein de la webview du 
téléphone. Cette approche garantit un environnement d'exécution isolé pour chaque plugin, préservant ainsi la sécurité 
et la stabilité de l'application principale.

## Fonctionnement du système de plugin

Chaque plugin est essentiellement un script JavaScript (lancé à l'ouverture de l'ePoc) accompagné de template html 
(à insérer dans les pages de texte ou les exercies). Le plugin et ses templates sont éxécutés dans des iframes distinctes. 
L'attribut "sandbox" de l'iframe est utilisé pour créer un environnement d'exécution isolé, empêchant ainsi le plugin d'accéder 
aux ressources de l'application principale sans autorisation explicite.

Le système de plugin fournit une API JavaScript qui permet aux plugins d'interagir avec l'application principale de 
manière contrôlée mais aussi aux templates d'échanger des données avec le plugin. Cette API comprend des méthodes pour 
envoyer et recevoir des données, ainsi que pour déclencher des actions dans l'application principale.

## Plugin core
### Premier pas

Pour développer un plugin, vous devez tout d'abord créer un script JavaScript. Ce script est ensuite intégré dans une 
iframe non visible en mode sandbox avec les fonctions de l'API. Les fonctions d'API sont le seul moyen d'intéragir avec 
l'application et les templates.

Voici un exemple de code pour créer un plugin qui affiche 'Hello World' au chargement de l'ePoc :

```js
// plugin.js

ePoc.onLoad = () => {
    // Executé lorsque le plugin est chargé à l'ouverture de l'ePoc
    console.log('Hello World')
}
```


### API plugin core

#### Fonctions

##### `ePoc.onLoad(context)`

Fonction appelée au chargement du plugin permet de retourner sa configuration

##### `ePoc.onEmbed`

Fonction appelée lors du chargement d'un template intégré dans une page de texte ou une question

##### `ePoc.emit(event, value)`

Envoie un message vers l'application mobile

##### `ePoc.emitToEmbeds(value)`

Envoie un message vers les templates du plugin


##### `ePoc.receive(data)`

Reçoit un message de l'application mobile

#### Événements reçu speciaux
##### `'statement'`
Reçu lorsque l'utilisateur déclenche un évenement xAPI

- `epocId` : ID de l'ePoc où l'évennement a eu lieu
- `entityType` : Type du contenu qui a déclenché l'évenement (page, video, texte, question, etc)
- `entityId` : ID du contenu qui a déclenché l'évenement
- `verb` : Verbe de l'action qui a été effectuée (vu, lu, répondu, etc)
- `value` : Valeur de l'action qui a été effectuée

###### Exemple

```js
// plugin.js
ePoc.receive = async (data) => {
    if (data.event === 'statement') {
        console.log(data.statement)
        // {
        //     epocId,
        //     entityType,
        //     entityId,
        //     verb,
        //     value
        // }
    }
}
```

## Template

Les plugins peuvent déclarer un template html qui est aussi éxécuté dans une iframe distinct. La 
différence est que l'iframe du template est intégré dans des pages de texte ou des exercices et est visible par
l'apprenant.

### Exemple "Hello World"
Voici comment déclarer un template de plugin en reprenant l'exemple précédent :

```js
// plugin.js

ePoc.onLoad = () => {
    // Executé lorsque le plugin est chargé à l'ouverture de l'ePoc
    console.log('Hello World')
    
    // Le plugin retourne le nom du template et le shortcode pour l'intégrer dans les pages de texte
    return {
        template: 'plugin_template.html',
        shortcode: '[#hello_world]'
    };
}
```

Et le template en question (affiche simplement un titre H1) :

```html
<!-- plugin_template.html -->

<html lang="en">
<head>
    <!-- Feuille de style pour avoir un affichage identique à l'app mobile -->
    <link rel="stylesheet" href="/assets/css/plugin-embed.css">
</head>
<body>
<h1>Hello World</h1>
<!-- Script pour avoir accès à l'API -->
<script src="/assets/js/plugin-api-embed.js"></script>
<script>
    // Votre logique métier ici
</script>
</body>
</html>
```


### API plugin template

#### Fonctions
##### `plugin.emit(event, value)`

Envoie un message depuis le template vers le plugin


##### `plugin.receive(data)`

Reçoit un message du plugin ou de l'application mobile

#### Événements émis speciaux

##### `plugin.emit('user-responded', payload)`

Envoie la réponse de l'utilisateur quand le template du plugin est utilisé dans une question personnalisée

###### Exemple de question personnalisée

```html
<!-- plugin_template.html -->
<!-- Question personnalisée champ texte libre -->
<html lang="en">
<head>
  <link rel="stylesheet" href="/assets/css/plugin-embed.css">
</head>
<body>
  <form>
    <!-- Champ texte -->
    <input type="text"/>
  </form>
  <script src="/assets/js/plugin-api-embed.js"></script>
    <script>
        const userInput = document.querySelector('input');
        // Quand l'utilisateur tape du texte
        userInput.addEventListener('keyup', (event) => {
            // On envoie la réponse à l'app
          plugin.emit('user-responded', userInput.value)
        });
    </script>
</body>
</html>
```