// @ts-check
import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
//se requiere tilizar import vercel from '@astrojs/vercel'; y no import vercel from '@astrojs/vercelserverless';
import vercel from '@astrojs/vercel';
// https://astro.build/config
export default defineConfig({
    output: 'server',
    adapter: vercel({
        webAnalytics: {
        enabled: true,
    },
    }),
    integrations: [preact()],
    vite: {
    resolve: {
      alias: {
        react: 'preact/compat',
        'react-dom': 'preact/compat',
      },
    },
  },
});

