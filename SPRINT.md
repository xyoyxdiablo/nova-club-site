# nova-club-site — Fichier Maître Session
> Lire ce fichier EN PREMIER à chaque ouverture de session sur ce repo.
> Mettre à jour EN DERNIER avant de clore la session.
> Dernière mise à jour : 09/10/2026 (session copy + images) — voir tout en haut.

## 🎯 SESSION 09/10/2026 — Refonte copy complète + 7/8 photos manquantes intégrées

**Contexte** : la cheffe de projet a fait auditer le wording du site (export CSV complet des textes,
`_notes/wording-site-2026-10-09.csv`) par son équipe. Retour détaillé : bonne direction visuelle/copy,
mais le site restait trop "catalogue de vêtements premium" et sous-exploitait la vraie preuve business
2026 (projets clubs réels, réassorts, adoption). Verdict 7/10, avec 5 corrections prioritaires avant
publication — toutes traitées cette session (voir ci-dessous), plus un passage complet du wording.

### ✅ Refonte copy appliquée (toutes pages)
- **Home** : nouveau Hero (eyebrow/H1/sous-texte moins "lifestyle", plus concret), barre de preuves
  remplacée par des chiffres sourcés et attribuables (125 pièces réassort Ballainvilliers, 76 précommandes
  Le Perreux, 27 vestes Arena, 6 ans→XXL) — l'ancien `≈24 jours` et `3 commandes Thiais` retirés (risque
  de créer une attente SLA en contradiction avec la doctrine "jamais moins de 45 jours ouvrés").
  **Nouvelle section "Des projets clubs, en chiffres"** avec 3 case studies (Ballainvilliers GR, Le Perreux,
  Arena Sport Nogent — chiffres sourcés depuis le Drive `B2B Clubs 2026 — Repositionnement & Campagnes` /
  onglet "Proof Library"), insérée entre Personnalisation et Process. "Les trois vestiaires" →
  "Construisez votre vestiaire club", "Velours premium" → "Velours" (retrait du mot "premium" non justifié).
  Process étape 04 reformulée (fin du ton défensif "jamais moins").
- **Offre clubs** : H1 passé de "feature" à "outcome", atelier reformulé (validation avant prod / contrôle
  avant expédition) + note réassurance discrète ajoutée (gestion d'un problème de production), "Maquette 3D"
  → "Maquette & devis" (le "3D" n'était pas garanti systématique), étape Fabrication reformulée.
- **Contact** : H1 moins poétique / plus actionnable pour une page de bas de funnel, promesse SLA
  "devis sous quelques jours" retirée, question tailles/couleurs séparée en deux FAQ distinctes.
- **Boutons CTA corrigés** (bug réel trouvé par l'audit) : Hero et CTA final affichaient "Télécharger le
  catalogue" mais le lien ouvrait `/contact.html` — aucun PDF catalogue n'existe sur ce site (seule la page
  `/catalogue.html` existe). Renommé en "Présenter mon projet" (→ contact) + "Voir le catalogue"
  (→ `/catalogue.html`, lien honnête vers ce qui existe réellement).

### ✅ 4 décisions business tranchées avec la cheffe de projet
1. **Personnalisation incluse dans les prix** (résout le conflit Catalogue "hors personnalisation" vs
   Offre clubs "incluse sans supplément") → Catalogue B2B mis à jour en conséquence + badge réassurance
   ajouté sur Offre clubs.
2. **Politique échantillon** : ancienne règle reprise (1 échantillon non personnalisé possible, personnalisé
   facturé/déductible de la commande finale, pas de multi-échantillons sans projet qualifié) → FAQ Contact
   remplie (n'était plus un `[À préciser]`).
3. **MOQ** : pas de minimum de commande imposé → FAQ "Y a-t-il un minimum de commande ?" répond clairement.
4. **Délais livraison** : les anciens +5-10j France / +10-21j international étaient faux — en réalité
   **la livraison est comprise dans les 45 jours ouvrés** annoncés (pas un délai séparé qui s'ajoute).
   Corrigé partout (Home process, Offre clubs étape Fabrication + Livraison, FAQ Contact).

### ✅ 7 des 8 photos manquantes intégrées (fournies par la cheffe de projet via Drive)
Dossier source : `https://drive.google.com/drive/folders/10bBhr6Ev3yh7_8YAUntogeDsvdF-i69Z`. Fichiers
originaux 1,4 à 11,7 Mo (bien trop lourd pour un site statique) → recompressés en JPEG via `sips`
(1000-1600px / qualité 80-82) à 124-584 Ko chacun, alignés sur la taille des autres assets du site
(`public/img-2026/`, 76-330 Ko). 4 fichiers identifiables par leur nom (`1-logo-brode-poitrine.png` etc.),
4 autres identifiés visuellement (modèle en veste blanc/bleu = "Azur Panel" NR-102 ; 3 macros tissus
rouge/bleu/violet = FlexCotton/Lycra/Velours, confirmé par la cheffe de projet). Intégrées dans
`Collection2026.tsx`, vérifiées visuellement en preview locale (`npm run build && npm run preview`) —
rendu conforme au design (grilles 1/1, object-fit cover déjà prévus en CSS).

### 🔜 Reste ouvert
- **1 photo encore manquante sur Offre clubs** : la section "Notre atelier" (2 `ImagePlaceholder` — coupe/
  montage en confection, contrôle qualité/finition) n'a pas été fournie dans ce lot, toujours en placeholder.
- **3 photos finales des case studies** (Ballainvilliers GR, Le Perreux, Arena Sport Nogent) — la nouvelle
  section ajoutée cette session est encore en `ImagePlaceholder` pour chacune, à fournir.
- **Alt text des 6 photos "Ils portent NovaRythm"** : toutes identiques ("Club portant NovaRythm"),
  recommandé par l'audit de les personnaliser par club (ex. "Vestes personnalisées NovaRythm — Ballainvilliers
  GR") — bloqué faute de savoir quelle photo correspond à quel club. À demander si utile.
- **Rien n'est poussé sur GitHub Pages** — tous les changements de cette session sont en local, pas commités
  ni pushés au moment de la rédaction de ce fichier.

---

## 🎯 ÉTAT (avant session du 09/10/2026, reconstitué depuis `git log` + lecture du code)

**Site live** : https://novarythmclubs.com/ (4 pages : Accueil, Offre clubs, Catalogue B2B, Contact)

### Catalogue B2B (`/catalogue.html`, `src/pages/Catalogue.tsx`)
Jamais retouché depuis sa création le 09/09 avant cette session (seul le §02 — mention personnalisation —
a changé le 09/10, voir plus haut). 3 produits (Veste/Débardeur/Bas club, réf NR-100→119), grille tarifaire
HT par palier (<100 / ≥100 pièces), tailles (6-12 ans, XS-XXL). Aucune image sur cette page.

## 🔜 Prochaines actions possibles (à prioriser avec la cheffe de projet)
- Fournir la photo atelier manquante (Offre clubs) + les 3 photos finales case studies (Home)
- Décider si on personnalise les alt text de la galerie "Ils portent NovaRythm" (nécessite la correspondance photo↔club)
- Commit + push des changements de cette session
- Revoir le Catalogue B2B plus en profondeur si besoin (contenu minimal, pas de visuel) — pas prioritaire,
  pas mentionné dans l'audit wording

## Historique des sessions (reconstitué depuis git log — pas de détail au-delà des messages de commit, avant le 09/10)
- **09/09/2026** (`1c1ea2d`) : création du site, 4 pages (Accueil simple, Offre clubs, Catalogue B2B, Contact)
- **09/09/2026** (`f049763`) : fix `.gitignore` qui excluait par erreur le `dist/` vendored du design system
- **09/09/2026** (`9b539ed`) : trigger deploy après activation GitHub Pages (source Actions)
- **09/09/2026** (`0e8fbf6`) : enrichissement des pages avec des idées de `novarythm.com/pages/survetements2025`
- **09/09/2026** (`8ffa35b`) : nouvelle landing "Survêtements club" — logique catalogue de marque (depuis supprimée)
- **12/09/2026** (`683e647`) : nouvelle landing "Collection Club 2026" — brief structuré complet
- **14/09/2026** (`1346365`) : Collection 2026 devient la page d'accueil, suppression de `survetements.html`,
  nav mobile responsive (menu hamburger <760px)
