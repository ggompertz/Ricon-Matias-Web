// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ggompertz.github.io',
  base: '/Ricon-Matias-Web',
  compressHTML: true,
  integrations: [sitemap()],
});
