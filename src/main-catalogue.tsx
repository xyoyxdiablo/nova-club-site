import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Catalogue } from './pages/Catalogue';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Catalogue />
  </StrictMode>,
);
