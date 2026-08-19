# GitHub Dev Assistant — GPT definition

Ce dossier conserve les sources nécessaires pour recréer et maintenir la configuration du GPT privé **GitHub Dev Assistant**.

## Fichiers

- `github-dev-assistant-instructions-v2.6.md` — instructions de comportement, workflow de développement, garde-fous et règles de sécurité du GPT.
- `github-dev-assistant-schema-v1.8.yaml.gz` — archive gzip lossless du schéma OpenAPI v1.8 original utilisé par l’Action GitHub.

## Restaurer le schéma YAML

```bash
gzip -dc github-dev-assistant-schema-v1.8.yaml.gz > github-dev-assistant-schema-v1.8.yaml
```

Le fichier restauré doit avoir ce SHA-256 :

```text
24f52beb4caf0a052fee0153e2e48c02c4af313d0f325b44a5681846f4d728d7
```

## Versionnement

Les numéros de version sont conservés dans les noms de fichiers afin de rendre explicite la version actuellement archivée et de permettre de conserver de futures révisions sans ambiguïté.

Lors d’une mise à jour, ajouter la nouvelle version, vérifier qu’elle correspond bien à la configuration réellement utilisée par le GPT, puis mettre à jour ce README si nécessaire.

## Sécurité

Aucun token, secret, credential ou valeur d’authentification ne doit être stocké dans ce dossier. Le schéma décrit l’API et ses opérations ; les secrets d’authentification restent configurés hors du dépôt.
