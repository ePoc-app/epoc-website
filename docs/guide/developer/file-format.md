# Format de fichier

## Fichier `.epoc`

Le format de fichier ePoc est une archive ZIP contenenant les assets, les données et 
metadonnées mais aussi les données de conception de l'ePoc au format JSON. 

Ce format de fichier a été introduit par l'éditeur.

Pour extraire le contenu d'un fichier `.epoc`, il suffit d'utiliser la commande `unzip`.

```bash
unzip mon_ePoc.epoc
```

Pour archiver le contenu dans un `.epoc`, il suffit de se placer dans le dossier contenant
`content.json` et `project.json` puis d'utiliser la commande `zip`

```bash
zip -r -X mon_ePoc.epoc *
```
## Contenus de l'archive

### `content.json` (`.epoc`, `.epocx`et `.zip`)

Contient les données (chapitres, pages, contenus, quizz) et métadonnées (titre, auteurs, etc)
de l'ePoc au format JSON dans un schéma respectant les [specifications du format ePoc](data-types.md) définis
en TypeScript.

### `project.json` (`.epoc` seulement)

Ce fichier contient les données de scénarisation, des contenus (cahpitres, pages, contenus, quizz) et
métadonnées (titre, auteurs, etc) de l'ePoc au format JSON. Il s'agit d'une serialization des données
du diagramme (voir [`vue-flow`](https://vueflow.dev/)).

### `assets` *folder*

Contient tous les assets (images, viéos, etc) de l'ePoc.

### `plugins` *folder*

### Autres

D'autres fichiers ou dossiers présents dans l'archive peuvent être utilisé mais ne sont pas
les utilisés ou lus par défaut.

## Fichier de publication (export) `.epocx` ou `.zip`

Le format de fichier d'export pour publication sur l'application mobile est aussi une 
archive ZIP contenant les assets, les données et metadonnées de l'ePoc au format JSON.

Il s'agit d'un sous-ensemble du fichier `.epoc`optimisé pour sa diffusion. Tous els assets
et pages non reliés à un chapitre sont retirés de l'archive.

Pour extraire le contenu d'un fichier `.epocx` ou `.zip`, il suffit d'utiliser la commande `unzip`.

```bash
unzip mon_ePoc.epocx # ou unzip mon_ePoc.zip
```

Pour archiver le contenu dans un `.epocx`, il suffit de se placer dans le dossier contenant
`content.json` puis d'utiliser la commande `zip`

```bash
zip -r -X mon_ePoc.epocx *
```

