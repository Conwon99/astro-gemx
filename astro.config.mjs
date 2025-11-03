import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import path from 'path';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.goddessofgoodness.com',
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false, // We have our own base styles
    }),
    sitemap(),
  ],
  vite: {
    resolve: {
      alias: {
        '@': path.resolve('./src'),
      },
    },
    server: {
      host: '::',
      port: 8080,
    },
  },
});




