# ludovicbachmann.com

Portfolio personnel construit avec **Angular 21**, **Tailwind CSS 4** et **TypeScript**. Site vitrine responsive avec dark mode, animations et formulaire de contact.

**[ludovicbachmann.com](https://ludovicbachmann.com)**

## Stack technique

- **Framework** : Angular 21 (standalone components, signals)
- **Styling** : Tailwind CSS 4 + SCSS
- **Animations** : GSAP
- **Formulaire** : Formspree
- **Déploiement** : Infomaniak (FTPS via lftp)

## Fonctionnalités

- Dark / Light mode avec transition fluide
- Design responsive (mobile-first)
- Navigation smooth scroll entre les sections
- Formulaire de contact fonctionnel
- Typographie fluide avec `clamp()`

## Démarrage rapide

```bash
# Installer les dépendances
make install

# Lancer le serveur de dev (localhost:4200)
make dev

# Build de production
make build

# Déployer
make deploy
```

## Structure du projet

```
src/
├── app/
│   ├── components/
│   │   ├── header/        # Navigation + theme toggle
│   │   ├── hero/          # Section d'accueil
│   │   ├── about/         # Présentation
│   │   ├── skills/        # Compétences techniques
│   │   ├── projects/      # Projets réalisés
│   │   ├── experience/    # Parcours professionnel
│   │   ├── contact/       # Formulaire de contact
│   │   └── footer/        # Pied de page + liens sociaux
│   ├── data/              # Données statiques (projets, expériences, skills)
│   ├── models/            # Interfaces TypeScript
│   └── services/          # ContactService (Formspree)
├── assets/                # Images et CV
└── styles.scss            # Variables CSS et styles globaux
```
