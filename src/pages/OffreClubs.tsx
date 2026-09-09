import { Section, Eyebrow, Heading, Badge } from '@novarythm/design-system';
import { Nav, Footer, PageHero, ImagePlaceholder } from '../Layout';

const ATELIER_STEPS: Array<{ title: string; body: string; note: string }> = [
  {
    title: 'On confectionne.',
    body: 'Chaque pièce est coupée et montée pour votre commande, aux couleurs et au logo de votre club.',
    note: "Photo atelier : coupe ou montage d'une pièce en cours de confection",
  },
  {
    title: 'On contrôle.',
    body: 'Couleurs, logo, finitions vérifiés avant expédition, référence par référence.',
    note: 'Photo atelier : contrôle qualité ou finition (broderie, couture) en gros plan',
  },
];

const CUSTOM_ITEMS = ['Couleurs', 'Logos', 'Coupes', 'Marquages', 'Broderies'];

const STEPS = [
  ['Votre projet', 'Le produit, les quantités par taille, le délai souhaité, votre logo et vos couleurs.'],
  ['Maquette 3D & devis', 'Une proposition personnalisée et chiffrée, avant tout engagement.'],
  ['Fabrication', 'Fabrication standard : 45 jours ouvrés — nous ne promettons jamais moins, pour tenir ce que nous annonçons.'],
  ['Livraison', 'France : +5 à 10 jours. International : +10 à 21 jours selon la zone.'],
];

export function OffreClubs() {
  return (
    <>
      <Nav current="/offre.html" />
      <PageHero marker="§01" eyebrow="Offre clubs" title="Personnalisation incluse, sans supplément" />

      <Section tone="soft">
        <Eyebrow marker="§02">Personnalisation</Eyebrow>
        <Heading level={2} style={{ marginTop: 16, maxWidth: '24ch' }}>
          Chaque référence se personnalise entièrement
        </Heading>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 32 }}>
          {CUSTOM_ITEMS.map((item) => (
            <Badge key={item}>{item}</Badge>
          ))}
        </div>
      </Section>

      <Section>
        <Eyebrow marker="§03">Notre atelier</Eyebrow>
        <Heading level={2} style={{ marginTop: 16, maxWidth: '26ch' }}>
          Vos tenues, fabriquées avec exigence
        </Heading>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 56, marginTop: 40 }}>
          {ATELIER_STEPS.map((step, i) => (
            <div
              key={step.title}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 40,
                alignItems: 'center',
                direction: i % 2 === 1 ? 'rtl' : 'ltr',
              }}
            >
              <div style={{ direction: 'ltr' }}>
                <ImagePlaceholder note={step.note} ratio="4 / 3" />
              </div>
              <div style={{ direction: 'ltr' }}>
                <Heading level={3} italic>
                  {step.title}
                </Heading>
                <p style={{ fontSize: 15, color: 'var(--nv-c-soft)', marginTop: 12, maxWidth: '40ch' }}>{step.body}</p>
              </div>
            </div>
          ))}
        </div>
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
