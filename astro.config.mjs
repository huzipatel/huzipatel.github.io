import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://huzipatel.london',
  integrations: [sitemap({ filter: (page) => !page.includes('/apply/') })],
  vite: { plugins: [tailwindcss()] },
  compressHTML: true,
  build: { inlineStylesheets: 'auto' },
});
