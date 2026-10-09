import { Section, Eyebrow, Heading, Badge } from '@novarythm/design-system';
import { Nav, Footer, PageHero, ImagePlaceholder } from '../Layout';

const ATELIER_STEPS: Array<{ title: string; body: string; note: string }> = [
  {
    title: 'On valide avant production.',
    body: 'Couleurs, logos, placements et détails principaux sont définis avant le lancement.',
    note: "Photo atelier : coupe ou montage d'une pièce en cours de confection",
  },
  {
    title: 'On contrôle avant expédition.',
    body: 'Conformité du modèle, marquages et finitions sont vérifiés avant le départ.',
    note: 'Photo atelier : contrôle qualité ou finition (broderie, couture) en gros plan',
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
      <PageHero marker="§01" eyebrow="Offre clubs" title="Votre identité club, déclinée sur toute votre collection." />

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
