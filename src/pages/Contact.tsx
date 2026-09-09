import { useState } from 'react';
import type { FormEvent } from 'react';
import { Section, Eyebrow, Heading, Input, Button } from '@novarythm/design-system';
import { Nav, Footer, PageHero } from '../Layout';

const NEEDED = ['Le produit', 'Les quantités par taille', 'Le délai souhaité', 'Votre logo et vos couleurs'];

const FAQ: Array<{ q: string; a: string }> = [
  {
    q: 'Est-ce vraiment sans engagement ?',
    a: 'Vous recevez une maquette 3D et un devis chiffré avant toute validation — rien n’est engagé tant que vous n’avez pas donné votre accord.',
  },
  {
    q: 'Quels types de tenues proposez-vous ?',
    a: 'Trois références club : veste, débardeur, et bas (legging ou jogging) — voir le catalogue B2B pour le détail et les tarifs.',
  },
  {
    q: 'Et si on est un petit club ?',
    a: 'Nos tarifs comportent un palier "< 100 pièces" pensé pour les petits effectifs, pas seulement les gros clubs.',
  },
  {
    q: 'Peut-on faire plusieurs tailles ou couleurs dans une commande ?',
    a: 'Oui — une même commande peut mélanger tailles enfants (6 à 12 ans) et adultes (XS à XXL) ; la personnalisation couleurs est incluse par référence.',
  },
  {
    q: 'Peut-on tester les textiles avant de commander ?',
    a: '[À préciser avec l’équipe — indiquer ici la politique d’échantillons si elle existe]',
  },
  {
    q: 'Quels sont les délais réels ?',
    a: 'Fabrication : 45 jours ouvrés. Livraison : +5 à 10 jours en France, +10 à 21 jours à l’international selon la zone.',
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  const isTodo = a.startsWith('[');
  return (
    <div style={{ border: '1px solid var(--nv-c-border)' }}>
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '18px 20px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          font: 'inherit',
          color: 'var(--nv-c-ink)',
          textAlign: 'left',
        }}
        aria-expanded={open}
      >
        <span style={{ fontFamily: 'var(--nv-font-ui)', fontWeight: 600, fontSize: 14.5 }}>{q}</span>
        <span style={{ fontFamily: 'var(--nv-font-mono)', fontSize: 16 }}>{open ? '−' : '+'}</span>
      </button>
      {open && (
        <p
          style={{
            padding: '0 20px 18px',
            fontSize: 14,
            color: isTodo ? 'var(--nv-c-muted)' : 'var(--nv-c-soft)',
            fontStyle: isTodo ? 'italic' : 'normal',
            maxWidth: '52ch',
          }}
        >
          {a}
        </p>
      )}
    </div>
  );
}

export function Contact() {
  const [club, setClub] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Demande de devis — ${club || 'club'}`);
    const body = encodeURIComponent(`Club : ${club}\nEmail : ${email}\n\n${message}`);
    window.location.href = `mailto:equipe@novarythm.com?subject=${subject}&body=${body}`;
  }

  return (
    <>
      <Nav current="/contact.html" />
      <PageHero marker="§01" eyebrow="Parlons de votre club" title="Chaque club a sa couleur. La vôtre commence ici." />

      <Section tone="soft">
        <Eyebrow marker="§02">Commencez aujourd'hui</Eyebrow>
        <Heading level={2} style={{ marginTop: 16, maxWidth: '26ch' }}>
          Même avec une simple idée, on avance ensemble
        </Heading>
        <p style={{ fontSize: 15, color: 'var(--nv-c-soft)', marginTop: 14, maxWidth: '58ch' }}>
          Transmettez-nous ces quatre informations pour recevoir un devis sous quelques jours&nbsp;:
        </p>
        <ul style={{ marginTop: 16, paddingLeft: 20, color: 'var(--nv-c-text)', fontSize: 14.5, lineHeight: 1.8 }}>
          {NEEDED.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 32, maxWidth: 420 }}>
          <Input label="Nom du club" placeholder="GR Toulouse" value={club} onChange={(e) => setClub(e.target.value)} required />
          <Input
            label="Email"
            type="email"
            placeholder="club@exemple.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="nv-field">
            <label className="nv-field__label" htmlFor="message">
              Votre projet
            </label>
            <textarea
              id="message"
              className="nv-input"
              rows={5}
              placeholder="Produit, quantités par taille, délai souhaité..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <Button variant="primary" type="submit">
            Envoyer la demande →
          </Button>
        </form>
      </Section>

      <Section>
        <Eyebrow marker="§03">Questions fréquentes</Eyebrow>
        <Heading level={2} style={{ marginTop: 16 }}>
          Vous vous posez peut-être la question…
        </Heading>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 16,
            marginTop: 32,
          }}
        >
          {FAQ.map((item) => (
            <FaqItem key={item.q} q={item.q} a={item.a} />
          ))}
        </div>
      </Section>

      <Footer />
    </>
  );
}
