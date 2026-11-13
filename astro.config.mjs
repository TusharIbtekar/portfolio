import { defineConfig, fontProviders } from 'astro/config';

export default defineConfig({
  site: 'https://www.ibtekar.dev',
  devToolbar: { enabled: false },
  build: { inlineStylesheets: 'always' },
  fonts: [
    { provider: fontProviders.google(), name: 'Newsreader', cssVariable: '--font-serif', weights: [400], styles: ['normal'], fallbacks: ['serif'] },
    { provider: fontProviders.google(), name: 'Inter', cssVariable: '--font-sans', weights: [400, 500], styles: ['normal'], fallbacks: ['sans-serif'] },
    { provider: fontProviders.google(), name: 'JetBrains Mono', cssVariable: '--font-mono', weights: [400], styles: ['normal'], fallbacks: ['monospace'] },
  ],
  redirects: {
    '/timeline': '/#experience',
    '/projects': '/#projects',
  },
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
    },
  },
});
