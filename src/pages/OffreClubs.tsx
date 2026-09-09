import { Section, Eyebrow, Heading, Badge } from '@novarythm/design-system';
import { Nav, Footer, PageHero } from '../Layout';

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
        <Eyebrow marker="§03">Du devis à la livraison</Eyebrow>
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
