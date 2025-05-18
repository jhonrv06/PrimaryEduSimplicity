// @ts-check
import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import vercelServerless from '@astrojs/vercel/serverless'
// https://astro.build/config
export default defineConfig({
    output: 'server',
    adapter: vercelServerless({
        webAnalytics: {
        enabled: true,
    },
    }),
    integrations: [preact()],
});

