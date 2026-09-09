import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Survetements } from './pages/Survetements';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Survetements />
  </StrictMode>,
);
