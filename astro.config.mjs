import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: process.env.DEPLOY_ENV === 'test' ? 'https://Yusufarbc.github.io' : 'https://luvi.com.tr',
  base: process.env.DEPLOY_ENV === 'test' ? '/luvi/' : '/',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});