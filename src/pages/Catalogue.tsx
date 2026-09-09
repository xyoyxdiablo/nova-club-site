import { Section, Eyebrow, Heading, Card, PriceTag, Table } from '@novarythm/design-system';
import { Nav, Footer, PageHero } from '../Layout';

const columns = [
  { key: 'ref', label: 'Référence' },
  { key: 'produit', label: 'Produit' },
  { key: 'lt100', label: '< 100 pièces', align: 'right' as const },
  { key: 'gte100', label: '≥ 100 pièces', align: 'right' as const },
];

const rows = [
  {
    ref: 'NR-100 → NR-111',
    produit: 'Veste club',
    lt100: <PriceTag value="24–30" unit="HT / pc" size="sm" />,
    gte100: <PriceTag value="20–26" unit="HT / pc" size="sm" />,
  },
  {
    ref: 'NR-112 → NR-115',
    produit: 'Débardeur club',
    lt100: <PriceTag value="18–20" unit="HT / pc" size="sm" />,
    gte100: <PriceTag value="15–18" unit="HT / pc" size="sm" />,
  },
  {
    ref: 'NR-116 → NR-119',
    produit: 'Bas club',
    lt100: <PriceTag value="18–24" unit="HT / pc" size="sm" />,
    gte100: <PriceTag value="16–19" unit="HT / pc" size="sm" />,
  },
];

export function Catalogue() {
  return (
    <>
      <Nav current="/catalogue.html" />
      <PageHero marker="§01" eyebrow="Catalogue B2B" title="Trois pièces, un même vestiaire" />

      <Section tone="soft">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, background: 'var(--nv-c-border)', border: '1px solid var(--nv-c-border)' }}>
          <Card eyebrow="Réf. NR-100 → NR-111" title="Veste club" footer={<PriceTag value="24–30" unit="HT / pc" prefix="< 100 pièces" size="sm" />}>
            Veste zippée aux couleurs du club, coupe entraînement et compétition.
          </Card>
          <Card eyebrow="Réf. NR-112 → NR-115" title="Débardeur club" footer={<PriceTag value="18–20" unit="HT / pc" prefix="< 100 pièces" size="sm" />}>
            Débardeur technique, logo et couleurs du club, entraînement quotidien.
          </Card>
          <Card eyebrow="Réf. NR-116 → NR-119" title="Bas club" footer={<PriceTag value="18–24" unit="HT / pc" prefix="< 100 pièces" size="sm" />}>
            Legging ou jogging assorti, même univers couleur que la veste.
          </Card>
        </div>
      </Section>

      <Section>
        <Eyebrow marker="§02">Grille tarifaire</Eyebrow>
        <Heading level={2} style={{ marginTop: 16 }}>
          Tarifs HT indicatifs
        </Heading>
        <p style={{ fontSize: 15, color: 'var(--nv-c-soft)', marginTop: 12, maxWidth: '60ch' }}>
          Hors personnalisation — chaque projet fait l'objet d'un devis chiffré selon quantités, coupes et
          finitions retenues.
        </p>
        <div style={{ marginTop: 28 }}>
          <Table columns={columns} rows={rows} />
        </div>
      </Section>

      <Section tone="soft">
        <Eyebrow marker="§03">Tailles disponibles</Eyebrow>
        <div style={{ display: 'flex', gap: 40, marginTop: 24, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontFamily: 'var(--nv-font-mono)', fontSize: 11.5, textTransform: 'uppercase', color: 'var(--nv-c-muted)', marginBottom: 10 }}>
              Enfants
            </div>
            <div style={{ display: 'flex', gap: 10 }}>
              {['6 ans', '8 ans', '10 ans', '12 ans'].map((s) => (
                <span key={s} style={{ fontFamily: 'var(--nv-font-mono)', fontSize: 13.5, border: '1px solid var(--nv-c-border)', padding: '7px 14px' }}>
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--nv-font-mono)', fontSize: 11.5, textTransform: 'uppercase', color: 'var(--nv-c-muted)', marginBottom: 10 }}>
              Adultes
            </div>
            <div style={{ display: 'flex', gap: 10 }}>
              {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((s) => (
                <span key={s} style={{ fontFamily: 'var(--nv-font-mono)', fontSize: 13.5, border: '1px solid var(--nv-c-border)', padding: '7px 14px' }}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </>
  );
}
