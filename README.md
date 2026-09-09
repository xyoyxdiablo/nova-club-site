# nova-club-site

Site vitrine NovaRythm Clubs — 4 pages statiques (Accueil, Offre clubs,
Catalogue B2B, Contact), construites avec les vrais composants
`@novarythm/design-system`. Hébergé sur GitHub Pages, domaine personnalisé
`novarythmclubs.com`.

## Développer

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # → dist/
npm run preview   # sert le build local
```

## Le design system est vendu (vendored), pas lié en direct

`vendor/novarythm-design-system/` contient une copie du **build compilé**
(`dist/`) du repo `~/novarythm/design-system` — pas le code source. Ça garde
ce repo autonome (le build CI n'a pas besoin d'accéder à un autre repo).

**Si le design system change**, il faut re-synchroniser manuellement :

```bash
cd ~/novarythm/design-system && npm run build
cp -r dist/* ~/novarythm/nova-club-site/vendor/novarythm-design-system/dist/
```

## Déploiement

Push sur `main` → GitHub Actions (`.github/workflows/deploy.yml`) build et
publie automatiquement sur GitHub Pages. Le fichier `public/CNAME` pointe le
Pages sur `novarythmclubs.com` — voir la configuration DNS requise dans le
message de livraison.
