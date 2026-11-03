import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import process from 'node:process';

const currentDir = dirname(fileURLToPath(import.meta.url));
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ['shadcn-docs-nuxt'],
  compatibilityDate: '2024-07-06',

  app: {
    baseUrl:process.env.BASE_URL || '/',
  },

  i18n: {
    baseUrl: process.env.SITE_URL || 'https://epoc.inria.fr/',
    vueI18n: join(currentDir,'./i18n/i18n.config.ts'),
    detectBrowserLanguage: false,
    strategy: 'prefix_except_default',
    defaultLocale: 'fr',
    locales: [
      {
        code: 'en',
        name: 'English',
        language: 'en-US',
      },
      {
        code: 'fr',
        name: 'Français',
        language: 'fr-FR',
      },
    ],
  },

  scripts: {
    registry: {
      matomoAnalytics: {
        matomoUrl: 'https://piwik.inria.fr',
        trackPageView: true,
        enableLinkTracking: true,
        siteId: 132,
      }
    }
  },

  css: [
    join(currentDir, './assets/css/theme-inria.css'),
  ],

  modules: [
    '@nuxtjs/sitemap',
    // i18n duplique la route de redirection /sitemap.xml (ajoutée par le module sitemap) en /en/sitemap.xml,
    // rendue sinon comme une page de contenu inexistante (404 au prerender) : on retire cette copie
    (_, nuxt) => {
      nuxt.hook('modules:done', () => {
        for (const hook of ['pages:extend', 'pages:resolved'] as const) {
          nuxt.hook(hook, (pages) => {
            const index = pages.findIndex((page) => page.path === '/en/sitemap.xml');
            if (index !== -1) pages.splice(index, 1);
          });
        }
      });
    },
  ]
});