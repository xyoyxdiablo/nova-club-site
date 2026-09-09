import type { ReactNode } from 'react';
import { Section, Eyebrow, Heading, Button } from '@novarythm/design-system';
import '@novarythm/design-system/styles.css';

const NAV_LINKS = [
  { href: '/', label: 'Accueil' },
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
