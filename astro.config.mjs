import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Vercel serves the site at the root of its own domain; GitHub Pages serves
// it under /accbase-advisory/. Detect which one is building (Vercel sets the
// VERCEL env var automatically) so the same repo deploys correctly on both.
const onVercel = !!process.env.VERCEL;
const site = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'https://iamalok0508-cell.github.io';

export default defineConfig({
  site,
  base: onVercel ? '/' : '/accbase-advisory/',
  integrations: [sitemap()],
});
