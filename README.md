# Tom Deprez — page perso

Page perso statique, style néon cyberpunk. Aucun framework, aucune dépendance
hors Google Fonts.

## Structure

```
.
├── index.html              # structure de la page (hero, projets, parcours, passions)
├── assets/
│   ├── css/
│   │   ├── base.css        # variables, reset, fond animé, conteneur
│   │   ├── hero.css        # en-tête plein écran, glitch, boutons
│   │   └── components.css  # sections, cartes, timeline, stats, passions, footer
│   ├── js/
│   │   └── main.js         # machine à écrire, reveal au scroll, compteurs
│   └── img/                # images (vide pour l'instant)
└── README.md
```

## Lancer

Ouvrir `index.html` dans un navigateur, ou servir le dossier :

```bash
python3 -m http.server 8000
```

Puis http://localhost:8000

## Personnaliser

- Couleurs : variables CSS dans `assets/css/base.css` (`--cyan`, `--magenta`, ...)
- Textes : directement dans `index.html`
- Phrases de la machine à écrire : tableau `mots` en haut de `assets/js/main.js`
