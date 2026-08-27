import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.accbaseadvisory.com',
  integrations: [sitemap()],
});
