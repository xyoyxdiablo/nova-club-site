import { Nav, Footer, ImagePlaceholder } from '../Layout';
import './collection2026.css';

const VESTIAIRES = [
  { name: 'Vestes & joggings', img: '/img-2026/vestes-joggings.jpg' },
  { name: 'Activewear', img: '/img-2026/activewear.jpg' },
  { name: 'Velours', img: '/img-2026/velours-premium.jpg' },
];

const MODELES: Array<{ name: string; ref: string; img?: string; placeholder?: string }> = [
  { name: 'Nova Band', ref: 'NR-101', img: '/img-2026/nova-band-nr101.jpg' },
  { name: 'Azur Panel', ref: 'NR-102', img: '/img-2026/azur-panel-nr102.jpg' },
  { name: 'Onyx Panel', ref: 'NR-103', img: '/img-2026/onyx-panel-nr103.jpg' },
  { name: 'Onyx Éclat', ref: 'NR-104', img: '/img-2026/onyx-eclat-nr104.jpg' },
  { name: 'Club Active', ref: 'NR-201', img: '/img-2026/club-active-nr201.jpg' },
];

const MATERIALS = [
  { name: 'FlexCotton', attrs: ['Souple', 'Respirant', 'Entretien facile'], img: '/img-2026/matiere-flexcotton.jpg' },
  { name: 'Lycra', attrs: ['Extensible', 'Ajusté', 'Séchage rapide'], img: '/img-2026/matiere-lycra.jpg' },
  { name: 'Velours', attrs: ['Toucher dense', 'Souple', 'Pensé pour les pièces club habillées'], img: '/img-2026/matiere-velours.jpg' },
];

const CASE_STUDIES = [
  {
    club: 'Ballainvilliers GR',
    stat: '125 pièces en réassort en 2026',
    detail: '39 vestes · 54 joggings · 32 débardeurs',
    quote: "Après plusieurs projets réalisés ensemble, le club renouvelle ses équipements avec NovaRythm.",
    placeholder: 'Photo finale Ballainvilliers GR — à fournir',
  },
  {
    club: 'Le Perreux',
    stat: '30 demandes en 1 heure. 50 en 48 h.',
    detail: '76 précommandes avant la validation d’une commande de 100 vestes.',
    quote: 'Un projet pensé autour de l’identité du club et immédiatement adopté par ses adhérentes.',
    placeholder: 'Photo finale Gym Club Le Perreux — à fournir',
  },
  {
    club: 'Arena Sport Nogent',
    stat: '27 vestes personnalisées',
    detail: 'Livrées en moins d’un mois sur ce projet, pour répondre à une échéance sportive.',
    quote: 'Nous sommes ravies et vous remercions infiniment pour votre efficacité.',
    placeholder: 'Photo finale Arena Sport Nogent — à fournir',
  },
];

const PROCESS = [
  { num: '01', title: 'Partagez votre univers', body: null },
  { num: '02', title: 'Découvrez votre design', body: null },
  { num: '03', title: 'Validez chaque détail', body: null },
  {
    num: '04',
    title: 'Fabrication',
    body: 'Après validation du projet et de l’acompte, la production est lancée. Prévoir 45 jours ouvrés de fabrication pour un projet standard. Pour une échéance précise, nous confirmons la faisabilité avant validation.',
  },
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
          <div className="c26-eyebrow">NOVARYTHM CLUBS</div>
          <h1 className="c26-h1">Une identité club pensée pour être portée.</h1>
          <p className="c26-lead">
            Vestes, joggings, activewear et tenues personnalisées aux couleurs de votre club — du
            premier visuel jusqu'aux réassorts.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: 28, flexWrap: 'wrap', gap: 8 }}>
            <a className="c26-btn c26-btn--on-ink" href="/contact.html">
              Présenter mon projet
            </a>
            <a className="mono-link" href="/catalogue.html" style={{ marginLeft: 8 }}>
              Voir le catalogue
            </a>
          </div>
        </div>
      </section>

      {/* 2 — BARRE DE PREUVES */}
      <section className="c26-section c26-section--ink">
        <div className="c26-inner c26-proofbar">
          <div className="c26-proofbar-item">
            <div className="num">125 pièces</div>
            <div className="label">Réassort Ballainvilliers 2026</div>
          </div>
          <div className="c26-proofbar-item">
            <div className="num">76 précommandes</div>
            <div className="label">Avant lancement de 100 vestes au Perreux</div>
          </div>
          <div className="c26-proofbar-item">
            <div className="num">27 vestes</div>
            <div className="label">Projet Arena Sport Nogent</div>
          </div>
          <div className="c26-proofbar-item">
            <div className="num">6 ans → XXL</div>
            <div className="label">Tailles disponibles</div>
          </div>
        </div>
      </section>

      {/* 3 — LES TROIS VESTIAIRES */}
      <section className="c26-section c26-section--white">
        <div className="c26-inner">
          <div className="c26-eyebrow">La collection</div>
          <h2 className="c26-h2" style={{ marginTop: 14 }}>
            Construisez votre vestiaire club
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
                <img src={m.img} alt={`Macro tissu ${m.name}`} />
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
            <img src="/img-2026/perso-logo-poitrine.jpg" alt="Logo brodé sur la poitrine" />
            <img src="/img-2026/perso-velours-poitrine.jpg" alt="Logo velours poitrine" />
            <img src="/img-2026/perso-velours-hanche.jpg" alt="Logo velours hanche" />
            <img src="/img-2026/perso-brassiere.jpg" alt="Macro brassière personnalisée" />
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
              <div className="label">Personnalisation individuelle</div>
              <p>Prénom ou initiales lorsque le modèle et le marquage s'y prêtent.</p>
            </div>
            <div className="item">
              <div className="label">Placement sur mesure</div>
              <p>Poitrine, dos ou manche selon le design.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6.5 — CASE STUDIES */}
      <section className="c26-section c26-section--white">
        <div className="c26-inner">
          <div className="c26-eyebrow">Projets clubs</div>
          <h2 className="c26-h2" style={{ marginTop: 14 }}>
            Des projets clubs, en chiffres
          </h2>
          <div className="c26-grid-3" style={{ marginTop: 40 }}>
            {CASE_STUDIES.map((c) => (
              <div className="c26-card" key={c.club}>
                <figure>
                  <ImagePlaceholder note={c.placeholder} ratio="4 / 3" />
                </figure>
                <div className="name">{c.club}</div>
                <div style={{ fontFamily: 'var(--nv-font-ui)', fontWeight: 700, fontSize: 18, marginTop: 10 }}>
                  {c.stat}
                </div>
                <p style={{ fontSize: 14, color: 'var(--nv-c-soft)', marginTop: 6 }}>{c.detail}</p>
                <p style={{ fontSize: 14, fontStyle: 'italic', marginTop: 12 }}>« {c.quote} »</p>
              </div>
            ))}
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
                {s.body && <div className="note">{s.body}</div>}
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
              Présenter mon projet
            </a>
            <a className="mono-link" href="/catalogue.html">
              Voir le catalogue
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
