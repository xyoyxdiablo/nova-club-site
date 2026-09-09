import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { OffreClubs } from './pages/OffreClubs';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <OffreClubs />
  </StrictMode>,
);
