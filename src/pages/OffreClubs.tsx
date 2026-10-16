import { Section, Eyebrow, Heading, Badge } from '@novarythm/design-system';
import { Nav, Footer, PageHero } from '../Layout';

const ATELIER_STEPS: Array<{ title: string; body: string }> = [
  {
    title: 'On valide avant production.',
    body: 'Couleurs, logos, placements et détails principaux sont définis avant le lancement.',
  },
  {
    title: 'On contrôle avant expédition.',
    body: 'Conformité du modèle, marquages et finitions sont vérifiés avant le départ.',
  },
];

const RECOVERY_NOTE =
  "Et si un problème relevant de notre production survient ? Notre équipe prend le dossier en charge et définit avec le club la solution adaptée.";

const CUSTOM_ITEMS = ['Couleurs', 'Logos', 'Marquages', 'Détails de coupe selon modèle', 'Broderie'];

const STEPS = [
  ['Votre projet', 'Le produit, les quantités par taille, le délai souhaité, votre logo et vos couleurs.'],
  ['Maquette & devis', 'Une proposition personnalisée et chiffrée, avant tout engagement.'],
  ['Fabrication', 'Prévoir 45 jours ouvrés, livraison comprise, pour un projet standard. Une échéance particulière ? Nous vérifions sa faisabilité avant validation.'],
  ['Livraison', 'Votre commande vous est expédiée dès la fin de fabrication — le délai de 45 jours ouvrés annoncé à l’étape précédente comprend déjà la livraison.'],
];

export function OffreClubs() {
  return (
    <>
      <Nav current="/offre.html" />
      <PageHero
        marker="§01"
        eyebrow="Offre clubs"
        title="Votre identité club, déclinée sur toute votre collection."
        image={{
          src: '/img-2026/hero-personnalisation-atelier.jpg',
          alt: 'Veste NovaRythm finalisée, posée à côté de sa planche technique, des nuances de tissu et de son étiquette brodée, en atelier',
        }}
      />

      <Section tone="soft">
        <Eyebrow marker="§02">Personnalisation</Eyebrow>
        <Heading level={2} style={{ marginTop: 16, maxWidth: '24ch' }}>
          Chaque référence s'adapte à votre identité
        </Heading>
        <p style={{ fontSize: 15, color: 'var(--nv-c-soft)', marginTop: 12, maxWidth: '58ch' }}>
          Couleurs, logos, marquages et détails définis autour de votre projet.
        </p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 32 }}>
          {CUSTOM_ITEMS.map((item) => (
            <Badge key={item}>{item}</Badge>
          ))}
        </div>
        <p style={{ fontSize: 13.5, color: 'var(--nv-c-muted)', marginTop: 20 }}>
          Personnalisation standard incluse dans nos tarifs — aucun supplément caché.
        </p>
      </Section>

      <Section>
        <Eyebrow marker="§03">Notre atelier</Eyebrow>
        <Heading level={2} style={{ marginTop: 16, maxWidth: '26ch' }}>
          Vos tenues, fabriquées avec exigence
        </Heading>
        <div style={{ aspectRatio: '16 / 9', overflow: 'hidden', marginTop: 32, background: '#000' }}>
          <video
            src="/img-2026/atelier-production.mp4"
            poster="/img-2026/atelier-production-poster.jpg"
            autoPlay
            muted
            loop
            playsInline
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 40,
            marginTop: 48,
          }}
        >
          {ATELIER_STEPS.map((step) => (
            <div key={step.title}>
              <Heading level={3} italic>
                {step.title}
              </Heading>
              <p style={{ fontSize: 15, color: 'var(--nv-c-soft)', marginTop: 12, maxWidth: '40ch' }}>{step.body}</p>
            </div>
          ))}
        </div>
        <p style={{ fontSize: 14, color: 'var(--nv-c-muted)', marginTop: 40, maxWidth: '58ch', fontStyle: 'italic' }}>
          {RECOVERY_NOTE}
        </p>
      </Section>

      <Section tone="soft">
        <Eyebrow marker="§04">Du devis à la livraison</Eyebrow>
        <Heading level={2} style={{ marginTop: 16 }}>
          Quatre étapes, un seul interlocuteur
        </Heading>
        <div style={{ marginTop: 32 }}>
          {STEPS.map(([title, body], i) => (
            <div
              key={title}
              style={{
                display: 'grid',
                gridTemplateColumns: '64px 1fr',
                gap: 20,
                padding: '24px 0',
                borderTop: '1px solid var(--nv-c-border)',
                borderBottom: i === STEPS.length - 1 ? '1px solid var(--nv-c-border)' : undefined,
              }}
            >
              <span style={{ fontFamily: 'var(--nv-font-mono)', fontSize: 13, color: 'var(--nv-c-muted)' }}>
                0{i + 1}
              </span>
              <div>
                <div style={{ fontFamily: 'var(--nv-font-ui)', fontWeight: 700, fontSize: 16.5 }}>{title}</div>
                <p style={{ fontSize: 14.5, color: 'var(--nv-c-soft)', marginTop: 6, maxWidth: '58ch' }}>{body}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Footer />
    </>
  );
}
