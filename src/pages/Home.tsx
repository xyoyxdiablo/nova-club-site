import { Section, Eyebrow, Heading, Button } from '@novarythm/design-system';
import { Nav, Footer } from '../Layout';

export function Home() {
  return (
    <>
      <Nav current="/" />
      <Section>
        <Eyebrow marker="§01">NovaRythm Clubs — Saison 2026</Eyebrow>
        <Heading level={1}>Du croquis au podium.</Heading>
        <p style={{ maxWidth: '60ch', fontSize: 17, color: 'var(--nv-c-text)', marginTop: 22 }}>
          L'équipement de votre club, pensé et confectionné sur mesure — France &amp; international.
          Justaucorps de compétition, tenues d'entraînement et accessoires de club, personnalisés
          sans supplément pour chaque effectif.
        </p>
        <div style={{ display: 'flex', gap: 16, marginTop: 32 }}>
          <Button variant="primary" href="/catalogue.html">
            Voir le catalogue B2B →
          </Button>
          <Button variant="secondary" href="/offre.html">
            Découvrir l'offre clubs
          </Button>
        </div>
      </Section>

      <Section tone="soft">
        <Eyebrow marker="§02">Positionnement</Eyebrow>
        <Heading level={2} style={{ marginTop: 16, maxWidth: '22ch' }}>
          Une tenue de club, pas un article de plus
        </Heading>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 28,
            marginTop: 40,
          }}
        >
          {[
            ['Maquette 3D', "Une maquette 3D de votre tenue avant toute confection, pour valider couleurs et coupe ensemble."],
            ['Accompagnement dédié', 'Un interlocuteur unique qui suit votre projet, de la première demande à la livraison.'],
            ['Garantie sérénité', "6 mois de garantie sur l'ensemble de la commande, sans démarche compliquée."],
          ].map(([title, body]) => (
            <div key={title} style={{ borderTop: '1px solid var(--nv-c-border)', paddingTop: 16 }}>
              <Eyebrow>{title}</Eyebrow>
              <p style={{ fontSize: 14.5, color: 'var(--nv-c-soft)', lineHeight: 1.55 }}>{body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Footer />
    </>
  );
}
