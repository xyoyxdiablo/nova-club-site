import { Nav, Footer, ImagePlaceholder } from '../Layout';
import './collection2026.css';

const VESTIAIRES = [
  { name: 'Vestes & joggings', img: '/img-2026/vestes-joggings.jpg' },
  { name: 'Activewear', img: '/img-2026/activewear.jpg' },
  { name: 'Velours premium', img: '/img-2026/velours-premium.jpg' },
];

const MODELES: Array<{ name: string; ref: string; img?: string; placeholder?: string }> = [
  { name: 'Nova Band', ref: 'NR-101', img: '/img-2026/nova-band-nr101.jpg' },
  { name: 'Azur Panel', ref: 'NR-102', placeholder: 'Azur Panel NR-102 — fichier à fournir (img/azur-hero.png)' },
  { name: 'Onyx Panel', ref: 'NR-103', img: '/img-2026/onyx-panel-nr103.jpg' },
  { name: 'Onyx Éclat', ref: 'NR-104', img: '/img-2026/onyx-eclat-nr104.jpg' },
  { name: 'Club Active', ref: 'NR-201', img: '/img-2026/club-active-nr201.jpg' },
];

const MATERIALS = [
  { name: 'FlexCotton', attrs: ['Souple', 'Respirant', 'Entretien facile'] },
  { name: 'Lycra', attrs: ['Extensible', 'Ajusté', 'Séchage rapide'] },
  { name: 'Velours', attrs: ['Doux au toucher', 'Dense', 'Finition premium'] },
];

const PROCESS = [
  { num: '01', title: 'Partagez votre univers', note: null },
  { num: '02', title: 'Découvrez votre design', note: null },
  { num: '03', title: 'Validez chaque détail', note: null },
  { num: '04', title: 'Nous lançons la production', note: 'jusqu’à 45 jours ouvrés annoncés' },
];

const PROOF_PHOTOS = [
  { src: '/img-2026/proof-1-grande.jpg', cls: 'big' },
  { src: '/img-2026/proof-2.jpg', cls: 'med' },
  { src: '/img-2026/proof-3.jpg', cls: '' },
  { src: '/img-2026/proof-4.jpg', cls: 'med' },
  { src: '/img-2026/proof-5.jpg', cls: '' },
  { src: '/img-2026/proof-6.jpg', cls: 'med' },
];

export function Collection2026() {
  return (
    <div className="c26">
      <Nav current="/" />

      {/* 1 — HERO */}
      <section className="c26-hero">
        <img src="/img-2026/hero-ensemble-noir.jpg" alt="Ensemble NovaRythm noir, veste et jogging" />
        <div className="c26-hero-content">
          <div className="c26-eyebrow">NOVARYTHM — COLLECTION CLUB 2026</div>
          <h1 className="c26-h1">Votre club, à chaque entraînement.</h1>
          <p className="c26-lead">
            Vestes, joggings, activewear et velours — à vos couleurs, avec votre logo.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: 28, flexWrap: 'wrap', gap: 8 }}>
            <a className="c26-btn c26-btn--on-ink" href="/contact.html">
              Télécharger le catalogue
            </a>
            <span className="c26-hero-meta">25 pages · PDF</span>
          </div>
        </div>
      </section>

      {/* 2 — BARRE DE PREUVES */}
      <section className="c26-section c26-section--ink">
        <div className="c26-inner c26-proofbar">
          <div className="c26-proofbar-item">
            <div className="num">30 → 500+</div>
            <div className="label">Pièces par commande</div>
          </div>
          <div className="c26-proofbar-item">
            <div className="num">≈ 24 jours</div>
            <div className="label">Ouvrés constatés</div>
          </div>
          <div className="c26-proofbar-item">
            <div className="num">3 commandes</div>
            <div className="label">Sur une saison (Thiais GR)</div>
          </div>
          <div className="c26-proofbar-item">
            <div className="num">6 ans → 2XL</div>
            <div className="label">Toutes tailles</div>
          </div>
        </div>
      </section>

      {/* 3 — LES TROIS VESTIAIRES */}
      <section className="c26-section c26-section--white">
        <div className="c26-inner">
          <div className="c26-eyebrow">La collection</div>
          <h2 className="c26-h2" style={{ marginTop: 14 }}>
            Les trois vestiaires
          </h2>
          <div className="c26-grid-3" style={{ marginTop: 40 }}>
            {VESTIAIRES.map((v) => (
              <div className="c26-card" key={v.name}>
                <figure>
                  <img src={v.img} alt={v.name} />
                </figure>
                <div className="name">{v.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 — LES MODÈLES */}
      <section className="c26-section c26-section--cream">
        <div className="c26-inner">
          <div className="c26-eyebrow">Modèles</div>
          <h2 className="c26-h2" style={{ marginTop: 14 }}>
            Les modèles
          </h2>
          <div className="c26-grid-5" style={{ marginTop: 40 }}>
            {MODELES.map((m) => (
              <div className="c26-card" key={m.ref}>
                <figure>
                  {m.img ? <img src={m.img} alt={m.name} /> : <ImagePlaceholder note={m.placeholder ?? ''} ratio="3 / 4" />}
                </figure>
                <div className="name">{m.name}</div>
                <div className="ref">{m.ref}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 — LES MATIÈRES */}
      <section className="c26-section c26-section--white">
        <div className="c26-inner">
          <div className="c26-eyebrow">Matières</div>
          <h2 className="c26-h2" style={{ marginTop: 14 }}>
            Les matières
          </h2>
          <div className="c26-materials" style={{ marginTop: 40 }}>
            {MATERIALS.map((m) => (
              <div className="c26-material" key={m.name}>
                <ImagePlaceholder note={`Macro tissu ${m.name} — fichier à fournir (img/matiere-${m.name.toLowerCase()}-a4-v2.png)`} ratio="1 / 1" />
                <div className="body">
                  <div className="name">{m.name}</div>
                  <div className="attrs">
                    {m.attrs.map((a) => (
                      <span key={a}>{a}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 — PERSONNALISATION */}
      <section className="c26-section c26-section--cream">
        <div className="c26-inner c26-perso">
          <div className="c26-perso-macros">
            <ImagePlaceholder note="Logo brodé sur la poitrine (perso-logo-poitrine.png)" ratio="1 / 1" />
            <ImagePlaceholder note="Logo velours poitrine (vel-n1.png)" ratio="1 / 1" />
            <ImagePlaceholder note="Logo velours hanche (vel-n2.png)" ratio="1 / 1" />
            <ImagePlaceholder note="Macro brassière (brassiere-macro-1.jpg)" ratio="1 / 1" />
          </div>
          <div className="c26-perso-text">
            <div className="c26-eyebrow">Personnalisation</div>
            <h2 className="c26-h2" style={{ fontSize: 42 }}>
              Votre club. Votre identité.
            </h2>
            <div className="item">
              <div className="label">Marquage dos</div>
              <p>Logo, nom du club ou identité d'équipe.</p>
            </div>
            <div className="item">
              <div className="label">Prénom / initiales</div>
              <p>Une personnalisation discrète pour chaque membre.</p>
            </div>
            <div className="item">
              <div className="label">Placement sur mesure</div>
              <p>Poitrine, dos ou manche selon le design.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7 — PROCESS */}
      <section className="c26-section c26-section--white">
        <div className="c26-inner">
          <div className="c26-eyebrow">Process</div>
          <h2 className="c26-h2" style={{ marginTop: 14 }}>
            Du croquis à la production
          </h2>
          <div className="c26-process" style={{ marginTop: 40 }}>
            {PROCESS.map((s) => (
              <div className="c26-step" key={s.num}>
                <div className="num">{s.num}</div>
                <div className="title">{s.title}</div>
                {s.note && <div className="note">{s.note}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8 — ILS PORTENT NOVARYTHM */}
      <section className="c26-section c26-section--cream">
        <div className="c26-inner">
          <div className="c26-eyebrow">Preuve</div>
          <h2 className="c26-h2" style={{ marginTop: 14 }}>
            Ils portent NovaRythm
          </h2>
          <div className="c26-mosaic" style={{ marginTop: 40 }}>
            {PROOF_PHOTOS.map((p, i) => (
              <img key={i} src={p.src} className={p.cls} alt="Club portant NovaRythm" />
            ))}
          </div>
        </div>
      </section>

      {/* 9 — CTA FINAL */}
      <section className="c26-section--ink c26-final">
        <div className="c26-final-text">
          <div className="c26-eyebrow">Prêt à équiper votre club ?</div>
          <h2 className="c26-h2" style={{ color: '#fff' }}>
            Créons votre collection club.
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 16, maxWidth: '46ch' }}>
            Envoyez votre logo et vos couleurs — vous recevez une maquette de votre collection, sans engagement.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
            <a className="c26-btn c26-btn--on-ink" href="/contact.html">
              Télécharger le catalogue
            </a>
            <a className="mono-link" href="mailto:equipe@novarythm.com">
              equipe@novarythm.com
            </a>
          </div>
        </div>
        <div className="c26-final-img">
          <img src="/img-2026/cta-final.jpg" alt="Ensemble NovaRythm" />
        </div>
      </section>

      <Footer />
    </div>
  );
}
