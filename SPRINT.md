# nova-club-site — Fichier Maître Session
> Lire ce fichier EN PREMIER à chaque ouverture de session sur ce repo.
> Mettre à jour EN DERNIER avant de clore la session.
> Dernière mise à jour : 16/10/2026 (session photos case studies + atelier + catalogue masqué + hero Offre clubs) — voir tout en haut.

## 🔜 EN COURS (session interrompue, pas encore commencé l'implémentation) — Carrousel logos clubs sur la home

**Demande de la cheffe de projet** : remplacer la barre de preuves "section 2" de la home (celle qu'on
vient de dédupliquer juste au-dessus, "45 jours ouvrés / 0 minimum / Incluse / 6 ans → XXL") par un
carrousel de logos des clubs partenaires, en mode "logos clients" façon site e-commerce (slide infini).
Logos à **détourer (fond supprimé)** et **mettre au même format**.

**Liste des 16 clubs à représenter** (donnée telle quelle par la cheffe de projet) :
GR Paray, Thiais GR, Olatu Berria Gym, Cadence Dourdan, ASSGA Gym, GR Toulouse, GR Ballainvilliers,
GRS Gradignan, Gym Passion 13, Clamart Gym 92, Olympique Rethélois Gymnique, ANGR Niort,
US Arena Nogent GR, Cascade Rhythmic USA, AnisseGR, Arts&Culture Châteauneuf-du-Pape,
Grenoble Gymnastique (la cheffe de projet elle-même n'a pas trouvé d'exemple/logo pour celui-ci).

**Pistes déjà repérées sur le Drive** (recherche faite, rien téléchargé ni traité pour l'instant) :
- Dossier `04 — Client Records` (id `1POXh6QESJuaidypQ3WQM4eNT2rjcYooN`) contient des sous-dossiers par
  client, parfois avec un sous-dossier `01 — Logos & Brand` propre.
- **Cascade Rhythmic USA** : dossier `Cascade Rhythmic USA — 2026` → `01 — Logos & Brand` déjà rempli de
  logos propres (couleur, N&B horizontal, carré, horizontal couleur) — le plus simple des 16.
- **GR Toulouse** : dossier dédié existe (`1uuBM8OVtR1L-pujfWlr77lp7pJioNySi`), contenu pas encore inspecté.
- **GRS Gradignan** : dossier dédié existe (`1cRysd07g9udxm1zb0IIkQ_ihW62jBI0G`), contenu pas encore inspecté.
- Les autres clubs n'ont pas de dossier dans `04 — Client Records` (recherche sur ce dossier precis
  épuisée, seulement 3 clubs + 1 PDF Dourdan dedans) — il faudra chercher ailleurs sur le Drive (recherche
  par nom de club) ou sur le site web / Facebook officiel de chaque club pour les ~13 restants.

**⚠️ Point de vigilance pour la suite** : une première tentative de lancer 4 agents en parallèle (un fork
par groupe de clubs) pour sourcer les logos a été refusée par la cheffe de projet avant exécution — elle
a préféré interrompre la session plutôt que laisser tourner cette recherche en arrière-plan à ce moment-là.
Pas de raison explicite donnée. À la reprise : proposer le plan d'abord (scope, sources envisagées) et
laisser la cheffe de projet valider avant de lancer plusieurs agents en parallèle sur cette tâche, plutôt
que de partir directement en recherche multi-agents.

**Reste à faire (rien commencé niveau code)** :
1. Terminer le sourcing des 16 logos (Drive + web), vérifier qu'aucun logo ne correspond au mauvais club
   (plusieurs noms proches : GR Paray / GR Toulouse / GR Ballainvilliers / GRS Gradignan ; US Arena Nogent
   GR vs le "Arena Sport Nogent" déjà utilisé comme case study — à vérifier si c'est bien le même club).
2. Détourer chaque logo (fond blanc/uni → transparent) — pas d'ImageMagick installé sur la machine, PIL
   (Python) disponible, suffisant pour un détourage simple par couleur de fond.
3. Uniformiser le format (même ratio/cadrage, fond cohérent — blanc ou transparent selon le fond de la
   section qui les accueillera).
4. Construire un composant carrousel "slide infini" façon logos clients e-commerce (il existe déjà un
   `Marquee` dans `Layout.tsx` mais pour du texte, pas des images — probablement à adapter ou dupliquer).
5. Remplacer la section 2 (barre de preuves) de `Collection2026.tsx` par ce carrousel.
6. Build + preview local + vérif visuelle avant push (comme pour les sessions précédentes).

---

## 🎯 SESSION 16/10/2026 (suite) — Catalogue B2B masqué, photo bannière Offre clubs, barre de preuves home dédupliquée

**✅ FAIT**
- **Catalogue B2B masqué** : demandé par la cheffe de projet (page jugée inutile + ne veut plus afficher
  les tarifs publiquement). Retiré de la nav (`Layout.tsx`), des 2 CTA "Voir le catalogue" sur la home,
  et de la FAQ Contact qui y renvoyait pour les tarifs (reformulée sans mention de prix). La page
  `catalogue.html` reste buildée (accessible par URL directe uniquement) — pas supprimée, juste masquée.
  Commit `60f9579`.
- **Bannière photo sur Offre clubs §01** : `PageHero` (`Layout.tsx`) accepte maintenant une image
  optionnelle (16:9, sous le H1). Photo fournie par la cheffe de projet (veste finalisée + planche
  technique + nuancier tissu + étiquette brodée, en atelier) — cohérente avec le §02 Personnalisation
  juste en dessous. Commit `8c6bdeb`.
- **Barre de preuves home dédupliquée** : la cheffe de projet a repéré que les 3 chiffres de la barre
  du haut (Ballainvilliers/Le Perreux/Arena) répétaient exactement la section "Des projets clubs, en
  chiffres" juste en dessous (maintenant illustrée de photos, cf. session précédente). Remplacés par 3
  promesses déjà sourcées ailleurs sur le site (45 jours ouvrés fabrication+livraison, 0 minimum de
  commande, personnalisation incluse) — "6 ans → XXL" gardé tel quel (pas un doublon). Commit `8c6bdeb`.

### 🔜 Reste ouvert
- Rien d'identifié pour l'instant sur ces 3 points — à re-regarder en direct par la cheffe de projet
  au prochain déploiement GitHub Pages.

---

## 🎯 SESSION 16/10/2026 — 3 photos case studies intégrées + "Notre atelier" simplifié

**Contexte** : reprise des trous laissés ouverts le 09/10 (section "Des projets clubs, en chiffres"
sur la home en placeholders, 2 blocs photo vides sur "Notre atelier"). La cheffe de projet a pointé
vers le Drive : dossier `06_ACQUISITION_OutReach / B2B Clubs 2026 — Repositionnement & Campagnes /
ASSETS PREUVES — Clubs 2026`, déjà trié en sous-dossiers `01 — Ballainvilliers`, `02 — Le Perreux`,
`03 — Arena Sport Nogent` (+ un doc `00 — INDEX` qui documente quelle photo utiliser et pourquoi pour
chaque case study — utile à relire si de nouvelles photos sont ajoutées plus tard).

**✅ FAIT**
- **Home, section "Des projets clubs, en chiffres"** : les 3 `ImagePlaceholder` remplacés par de vraies
  photos — Ballainvilliers GR (photo groupe, recommandée par l'INDEX comme image principale), Le Perreux
  (veste en production, face — aucune photo portée par une gymnaste n'existe encore, point déjà noté dans
  l'INDEX du Drive comme "manquant prioritaire"), Arena Sport Nogent (veste portée). Téléchargées depuis
  Drive, recompressées en JPEG (`sips`, 1200px / qualité 78, 127-335 Ko — dans la fourchette des autres
  assets `public/img-2026/`, cohérent avec les photos `proof-*` déjà en place).
- **Offre clubs, "Notre atelier"** : les 2 blocs restaient en placeholder photo vide (coupe/confection,
  contrôle qualité) — aucune photo dédiée disponible. Fusionnés en texte seul (2 colonnes, sans image) sous
  la vidéo de production déjà en place (commit `0e821ef`), suivis de la note de réassurance incident
  production. Plus aucun placeholder vide visible sur cette page.
- Vérifié en local (`npm run build && npm run preview`) avant push. Commit `29d0453`, poussé sur
  `origin/main` (déploiement auto GitHub Pages).

### 🔜 Reste ouvert
- **Photo portée équipe Le Perreux** toujours manquante (vestes turquoise/noir) — si elle est fournie un
  jour, elle doit remplacer la photo produit actuelle comme image principale du case study (voir INDEX Drive).
- Alt text des 6 photos "Ils portent NovaRythm" toujours identiques, pas personnalisés par club (reporté
  depuis le 09/10, non prioritaire).
- Dossier Drive `05 — Social proof — club à identifier` et `04 — Thiais` pas encore exploités sur ce site
  (utiles pour enrichir une galerie sociale plus tard, club pas encore identifié sur certaines photos).

---

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
