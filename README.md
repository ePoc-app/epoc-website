# ePoc Website

The source code of https://epoc.inria.fr/ a static website based on mkdocs, mkdocs-material and [Pavo](https://github.com/technext/pavo) lading page template.

## Installation

```bash
pip install -r requirements.txt
```

## Live Preview

```bash
mkdocs serve --watch-theme
```

## Build and publish

```bash
mkdcos build
```

then publish it by uploading it to `epoc.inria.fr:/var/www/html/`