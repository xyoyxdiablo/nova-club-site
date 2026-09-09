import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// Custom domain served at the root (not a GitHub project-pages subpath),
// so base stays '/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        offre: resolve(__dirname, 'offre.html'),
        catalogue: resolve(__dirname, 'catalogue.html'),
        contact: resolve(__dirname, 'contact.html'),
      },
    },
  },
});
