import type { ReactNode } from 'react';
import { Section, Eyebrow, Heading, Button } from '@novarythm/design-system';
import '@novarythm/design-system/styles.css';

const NAV_LINKS = [
  { href: '/', label: 'Accueil' },
  { href: '/survetements.html', label: 'Survêtements club' },
  { href: '/offre.html', label: 'Offre clubs' },
  { href: '/catalogue.html', label: 'Catalogue B2B' },
  { href: '/contact.html', label: 'Contact' },
];

export function Nav({ current }: { current: string }) {
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px clamp(22px, 5vw, 40px)',
        borderBottom: '1px solid var(--nv-c-border)',
      }}
    >
      <a href="/" style={{ border: 'none', fontFamily: 'var(--nv-font-mono)', fontWeight: 600, letterSpacing: '0.04em' }}>
        NOVARYTHM CLUBS
      </a>
      <div style={{ display: 'flex', gap: 28 }}>
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            style={{
              border: 'none',
              fontFamily: 'var(--nv-font-mono)',
              fontSize: 12.5,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: current === link.href ? 'var(--nv-c-ink)' : 'var(--nv-c-soft)',
            }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <Section tone="inverse">
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
        <span style={{ fontFamily: 'var(--nv-font-mono)', fontSize: 11.5, color: 'var(--nv-c-on-deep-muted)' }}>
          NovaRythm Clubs — équipement sur mesure pour clubs de gymnastique rythmique
        </span>
        <Button variant="primary" inverse href="mailto:equipe@novarythm.com" size="sm">
          equipe@novarythm.com →
        </Button>
      </div>
    </Section>
  );
}

export function PageHero({ marker, eyebrow, title }: { marker: string; eyebrow: string; title: ReactNode }) {
  return (
    <Section>
      <Eyebrow marker={marker}>{eyebrow}</Eyebrow>
      <Heading level={1}>{title}</Heading>
    </Section>
  );
}

/** A slow-scrolling belt of short claims — reserved for facts already stated
 * elsewhere on the site (personnalisation, maquette, délais). Never invents
 * a new promise just to fill the band. */
export function Marquee({ items }: { items: string[] }) {
  const track = [...items, ...items]; // duplicated once for a seamless loop
  return (
    <div
      style={{
        borderTop: '1px solid var(--nv-c-border)',
        borderBottom: '1px solid var(--nv-c-border)',
        overflow: 'hidden',
        padding: '16px 0',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: 48,
          width: 'max-content',
          animation: 'nv-marquee 28s linear infinite',
        }}
      >
        {track.map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: 'var(--nv-font-mono)',
              fontSize: 11.5,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--nv-c-soft)',
              whiteSpace: 'nowrap',
            }}
          >
            {item}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes nv-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @media (prefers-reduced-motion: reduce) {
          div[style*="nv-marquee"] { animation: none !important; }
        }
      `}</style>
    </div>
  );
}

/**
 * Stands in for a photo we don't have yet. Renders a bordered box naming
 * exactly what shot should go here — never a fake/generic stock image.
 */
export function ImagePlaceholder({ note, ratio = '4 / 3' }: { note: string; ratio?: string }) {
  return (
    <div
      style={{
        aspectRatio: ratio,
        border: '1px dashed var(--nv-c-gray)',
        background: 'var(--nv-c-bg-soft)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
        textAlign: 'center',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--nv-font-mono)',
          fontSize: 11.5,
          letterSpacing: '0.04em',
          color: 'var(--nv-c-muted)',
          maxWidth: '28ch',
        }}
      >
        📷 PHOTO À AJOUTER
        <br />
        {note}
      </span>
    </div>
  );
}
