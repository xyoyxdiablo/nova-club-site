import { useState } from 'react';
import type { FormEvent } from 'react';
import { Section, Eyebrow, Heading, Input, Button } from '@novarythm/design-system';
import { Nav, Footer, PageHero } from '../Layout';

const NEEDED = ['Le produit', 'Les quantités par taille', 'Le délai souhaité', 'Votre logo et vos couleurs'];

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
        <Eyebrow marker="§02">Pour un devis chiffré</Eyebrow>
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

      <Footer />
    </>
  );
}
