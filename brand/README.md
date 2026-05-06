# Zenifai — Brand Assets

## Files

| Fichier | Format | Usage |
|---|---|---|
| `logo-dark-bg.svg` | SVG (vectoriel) | Wordmark blanc + point violet, pour fonds sombres |
| `logo-light-bg.svg` | SVG (vectoriel) | Wordmark noir + point violet, pour fonds clairs |
| `logo-mark.svg` | SVG (vectoriel) | Le point violet seul (favicon, app icon, avatar) |
| `logo-dark-bg.png` | PNG 1024×1024 | Version raster du wordmark (fond sombre, transparent) |
| `logo-light-bg.png` | PNG 1024×1024 | Version raster du wordmark (fond clair, transparent) |
| `logo-mark.png` | PNG 1024×1024 | Version raster de l'icône seule |

## Spécifications de marque

- **Police** : Fraunces (Google Fonts), poids semibold (600), letter-spacing −1
- **Couleur primaire (point violet)** : `#7C5CFF`
- **Texte sur fond sombre** : `#FFFFFF`
- **Texte sur fond clair** : `#0A0A0A`

## Pour éditer dans Figma / Illustrator / Photoshop

1. **Installe la police Fraunces** (gratuite) : https://fonts.google.com/specimen/Fraunces — télécharge la famille, double-clique sur les `.ttf` pour installer dans macOS.
2. Ouvre le SVG dans ton outil. Le wordmark "Zenifai" apparaîtra correctement avec Fraunces installée.
3. Pour exporter avec une typo "fixée" (indépendante de la police installée chez le destinataire) : sélectionne le texte → **Type → Convertir en tracés** (Illustrator) ou **Outline Stroke** (Figma).

## PNG — note

Les PNGs ont été générés via `qlmanage` macOS qui n'a pas pu charger Fraunces depuis Google Fonts (rendu offline). Si la typo paraît différente sur ces PNGs, régénère-les depuis le SVG **après avoir installé Fraunces localement**, ou exporte directement depuis Figma/Illustrator.

Régénération PNG simple (macOS, après installation Fraunces) :

```bash
qlmanage -t -s 2048 -o . logo-dark-bg.svg
mv logo-dark-bg.svg.png logo-dark-bg-2048.png
```

## Utilisations recommandées par plateforme

| Plateforme | Asset | Format |
|---|---|---|
| LinkedIn (logo entreprise) | `logo-mark.png` | 400×400 ou 1024×1024 |
| LinkedIn (image bandeau) | À créer (Figma) | 1584×396 |
| Clutch / G2 / agencegeo.pro | `logo-light-bg.png` (la plupart ont fond blanc) | 1024×1024 ou plus |
| Favicon | `logo-mark.svg` | scalable |
| OG image (Twitter/LinkedIn share) | À créer (Figma, 1200×630) | – |
| Signature email | `logo-light-bg.png` | hauteur 60-80 px |
| Présentation Keynote/PowerPoint | SVG | tous les outils modernes acceptent SVG |
