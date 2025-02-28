import envConfig from './env.config';
export default defineAppConfig({
  shadcnDocs: {
    site: {
      name: 'ePoc Mobile Learning',
      description: 'ePoc (Electronic Pocket Open Course) est une solution complète libre et ouverte pour l\'apprentissage sur mobile. Développée par Inria.',
    },
    theme: {
      customizable: false,
      color: 'slate',
      radius: 0.5,
    },
    header: {
      title: 'ePoc',
      showTitle: false,
      darkModeToggle: true,
      logo: {
        light: '/logo.svg',
        dark: '/logo-dark.svg',
      },
      nav: [{
        title: 'Nos ePocs',
        links: [{
          title: 'Getting Started',
          to: '/getting-started',
          description: 'Start building your document with shadcn-docs-nuxt',
          icon: 'lucide:rocket',
        }, {
          title: 'Components',
          to: '/components/prose',
          description: 'Explore available UI components and usage examples.',
          icon: 'lucide:box',
        }, {
          title: 'API',
          to: '/api/configuration/shadcn-docs',
          description: 'Discover the configurations and exposed APIs.',
          target: '_self',
          icon: 'lucide:code',
        }],
      }, {
        title: 'Editeur',
        to: '/editor',
        icon: 'lucide:box',
        showLinkIcon: false,
      }, {
        title: 'Aide',
        links: [],
      }, ],
      links: [{
        icon: 'lucide:github',
        to: envConfig.repo,
        target: '_blank',
      }],
    },
    aside: {
      useLevel: true,
      collapse: false,
    },
    main: {
      breadCrumb: true,
      showTitle: true,
    },
    footer: {
      credits: 'Copyright © Inria Learning Lab',
      links: [{
          title: 'Conditions d\'utilisation',
          to: '/terms',
        },
        {
          title: 'Vie privée',
          to: '/privacy',
        },
        {
        icon: 'lucide:github',
        to: envConfig.repo,
        target: '_blank',
      },],
    },
    toc: {
      enable: true,
      title: 'On This Page',
      links: [{
        title: 'Star on GitHub',
        icon: 'lucide:star',
        to: envConfig.repo,
        target: '_blank',
      }, {
        title: 'Create Issues',
        icon: 'lucide:circle-dot',
        to: envConfig.repo,
        target: '_blank',
      }],
    },
    search: {
      enable: true,
      inAside: false,
    },
    data: envConfig
  }
});