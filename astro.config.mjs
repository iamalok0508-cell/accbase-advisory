import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://iamalok0508-cell.github.io',
  base: '/accbase-advisory/',
  integrations: [sitemap()],
});
