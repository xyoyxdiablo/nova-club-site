import { Section, Eyebrow, Heading, Badge, Button, Card, PriceTag } from '@novarythm/design-system';
import { Nav, Footer, Marquee, ImagePlaceholder } from '../Layout';

const DETAILS: Array<{ label: string; note: string }> = [
  { label: 'Broderie logo', note: 'Macro du logo brodé sur poitrine — fils visibles, relief' },
  { label: 'Zip', note: 'Gros plan curseur + dents + surpiqûres du col' },
  { label: 'Panneau latéral', note: 'Plan oblique sur la bande couleur avec couture visible' },
  { label: 'Bord-côte', note: 'Macro du bord-côte poignet ou taille' },
  { label: "Couture d'assemblage", note: "Gros plan couture intérieure, très proche, tombé du tissu" },
  { label: 'Cordon / waistband', note: 'Détail élastique, cordon et embout du pantalon' },
];

const CUSTOM_ZOOMS: Array<{ label: string; note: string }> = [
  { label: 'Broderie logo', note: 'Logo du club brodé sur la veste' },
  { label: 'Prénom', note: "Broderie prénom sur la manche ou la poitrine" },
  { label: 'Couleur panneau', note: 'Bande latérale dans une couleur club spécifique' },
];

const CLUBS = ['GRS Gradignan', 'Thiais GR', 'GR Toulouse', 'GR Paray'];

export function Survetements() {
  return (
    <>
      <Nav current="/survetements.html" />

      <Section>
        <Eyebrow marker="§01">Survêtements club — Saison 2026</Eyebrow>
        <Heading level={1} style={{ maxWidth: '18ch' }}>
          Le survêtement qui représente votre club.
        </Heading>
        <p style={{ maxWidth: '58ch', fontSize: 17, color: 'var(--nv-c-text)', marginTop: 22 }}>
          Veste et bas assortis, logo et couleurs de votre club, de l'échauffement au podium.
        </p>
        <div style={{ display: 'flex', gap: 16, marginTop: 32 }}>
          <Button variant="primary" href="/contact.html">
            Demander un devis →
          </Button>
        </div>
        <div style={{ marginTop: 40 }}>
          <ImagePlaceholder note="Mannequin de face, veste + bas assortis, coloris club" ratio="16 / 9" />
        </div>
      </Section>

      <Marquee
        items={['Personnalisation incluse', 'Maquette 3D offerte', 'Fabrication 45 jours ouvrés', 'Accompagnement dédié']}
      />

      <Section tone="soft">
        <Eyebrow marker="§02">La collection</Eyebrow>
        <Heading level={2} style={{ marginTop: 16, maxWidth: '22ch' }}>
          Trois pièces, un même vestiaire
        </Heading>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginTop: 32 }}>
          <Card eyebrow="Réf. NR-100 → NR-111" title="Veste club" footer={<PriceTag value="24–30" unit="HT / pc" prefix="< 100 pièces" size="sm" />}>
            <ImagePlaceholder note="Veste club, vue mannequin ou à plat" ratio="3 / 4" />
          </Card>
          <Card eyebrow="Réf. NR-112 → NR-115" title="Débardeur club" footer={<PriceTag value="18–20" unit="HT / pc" prefix="< 100 pièces" size="sm" />}>
            <ImagePlaceholder note="Débardeur club, vue mannequin ou à plat" ratio="3 / 4" />
          </Card>
          <Card eyebrow="Réf. NR-116 → NR-119" title="Bas club" footer={<PriceTag value="18–24" unit="HT / pc" prefix="< 100 pièces" size="sm" />}>
            <ImagePlaceholder note="Bas club (legging/jogging), vue mannequin ou à plat" ratio="3 / 4" />
          </Card>
        </div>
        <p style={{ fontSize: 13, color: 'var(--nv-c-muted)', marginTop: 20 }}>
          Tarifs HT indicatifs — <a href="/catalogue.html">voir la grille tarifaire complète →</a>
        </p>
      </Section>

      <Section>
        <Eyebrow marker="§03">Détails &amp; finitions</Eyebrow>
        <Heading level={2} style={{ marginTop: 16, maxWidth: '24ch' }}>
          Ce n'est pas juste une veste avec un logo dessus
        </Heading>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginTop: 32 }}>
          {DETAILS.map((d) => (
            <div key={d.label}>
              <ImagePlaceholder note={d.note} ratio="1 / 1" />
              <div style={{ fontFamily: 'var(--nv-font-mono)', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--nv-c-soft)', marginTop: 10 }}>
                {d.label}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="soft">
        <Eyebrow marker="§04">Votre club. Vos couleurs.</Eyebrow>
        <Heading level={2} style={{ marginTop: 16, maxWidth: '22ch' }}>
          Personnalisation incluse, sans supplément
        </Heading>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginTop: 32 }}>
          {CUSTOM_ZOOMS.map((z) => (
            <div key={z.label}>
              <ImagePlaceholder note={z.note} ratio="1 / 1" />
              <div style={{ fontFamily: 'var(--nv-font-mono)', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--nv-c-soft)', marginTop: 10 }}>
                {z.label}
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 32 }}>
          {['Couleurs', 'Logos', 'Coupes', 'Marquages', 'Broderies'].map((item) => (
            <Badge key={item}>{item}</Badge>
          ))}
        </div>
      </Section>

      <Section>
        <Eyebrow marker="§05">Palette coloris</Eyebrow>
        <Heading level={2} style={{ marginTop: 16, maxWidth: '22ch' }}>
          Vos couleurs, en tissu
        </Heading>
        <p style={{ fontSize: 14.5, color: 'var(--nv-c-muted)', marginTop: 12, maxWidth: '54ch', fontStyle: 'italic' }}>
          Palette en cours de validation — remplacée par de vraies macro-photos tissu une fois les coloris
          définitifs confirmés.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 14, marginTop: 28 }}>
          {Array.from({ length: 6 }).map((_, i) => (
            <ImagePlaceholder key={i} note="Macro tissu — coloris à confirmer" ratio="1 / 1" />
          ))}
        </div>
      </Section>

      <Section tone="soft">
        <Eyebrow marker="§06">Ils nous font confiance</Eyebrow>
        <Heading level={2} style={{ marginTop: 16, maxWidth: '22ch' }}>
          Des clubs, pas des mannequins
        </Heading>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20, marginTop: 32 }}>
          {CLUBS.map((club) => (
            <div key={club}>
              <ImagePlaceholder note={`Photo club — ${club}`} ratio="4 / 5" />
              <div style={{ fontFamily: 'var(--nv-font-mono)', fontSize: 12, letterSpacing: '0.04em', color: 'var(--nv-c-soft)', marginTop: 10 }}>
                {club}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="inverse">
        <Eyebrow marker="§07">Prêt à équiper votre club ?</Eyebrow>
        <Heading level={2} italic style={{ marginTop: 18, maxWidth: '18ch' }}>
          Chaque club a sa couleur. La vôtre commence ici.
        </Heading>
        <div style={{ display: 'flex', gap: 16, marginTop: 28 }}>
          <Button variant="primary" inverse href="/contact.html">
            Demander un devis →
          </Button>
          <Button variant="secondary" inverse href="/offre.html">
            Voir le process complet
          </Button>
        </div>
      </Section>

      <Footer />
    </>
  );
}
