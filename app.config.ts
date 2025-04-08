import envConfig from './env.config';
export default defineAppConfig({
  shadcnDocs: {
    site: {
      name: 'ePoc Mobile Learning',
      description: 'ePoc (Electronic Pocket Open Course) est une solution complète libre et ouverte pour l\'apprentissage sur mobile. Développée par Inria.',
      ogImage: '/images/epoc-promo-blanc.png',
    },
    theme: {
      customizable: false,
      color: 'inria',
      radius: 0.5,
    },
    header: {
      title: 'ePoc',
      showTitle: false,
      darkModeToggle: true,
      languageSwitcher: {
        enable: true,
        triggerType: 'icon',
        dropdownType: 'select'
      },
      logo: {
        light: '/logo.svg',
        dark: '/logo-dark.svg',
      },
      nav: [{
        title: 'Éditeur',
        to: '/editor',
        icon: 'lucide:box',
        showLinkIcon: false,
      },{
        title: 'Nos ePocs',
        class: 'w-[600px] grid grid-cols-2',
        links: [{
          icon: 'lucide:library-big',
          title: 'Tous nos ePocs',
          to: '/epocs',
          description: 'Découvrez la collection ePoc Inria',
        },{
          icon: 'lucide:database',
          title: 'B.A.-BA des data',
          to: '/epocs/e006pe',
          description: 'Comprendre quelques fondamentaux de l\'informatique et des données.',
        },{
          icon: 'lucide:smartphone',
          title: 'Smartphone et vie privée',
          to: '/epocs/e002vr',
          description: 'A propos du respect de la vie privée sur nos smartphone ou tablette.',
        },{
          icon: 'lucide:cpu',
          title: 'Internet des objets et vie privée',
          to: '/epocs/e003vr',
          description: 'Sur la question de la vie privée dans le domaine de la maison intelligente.',
        },{
          icon: 'lucide:leaf',
          title: 'Le smartphone et la planète',
          to: '/epocs/e007mm',
          description: 'Comprendre les impacts environnementaux du smartphone.',
        },{
          icon: 'lucide:brain-cog',
          title: 'C\'est quoi l\'IA ?',
          to: '/epocs/e009ll',
          description: 'Les principes de l\'intelligence artificielle (IA) par rapport à l\'intelligence biologique',
        },{
          icon: 'lucide:monitor-cog',
          title: 'Produire mon 1er ePoc',
          to: '/epocs/e012mc',
          description: 'Découvrez comment créer votre première formation mobile learning, courte, ludique, en quelques clics.',
        },{
          icon: 'lucide:lock',
          title: 'Zone à Régime Restrictif',
          to: '/epocs/e001db',
          description: 'Formation ePoc des nouveaux arrivants Inria en Zone à Régime Restrictif.',
        },
        ],
      }, /*{
        title: 'Cas d\'usages',
        class: 'w-[600px] grid grid-cols-2',
        links: [{
          icon: 'lucide:heart-handshake',
          title: 'Accueil nouveaux arrivants',
          to: '/usecases/onboarding',
          description: 'Facilite l\'intégration des nouveaux employés avec des modules de formation accessibles sur mobile.',
        },{
          icon: 'lucide:backpack',
          title: 'Récapitulatif à emporter',
          to: '/usecases/takeaway',
          description: 'Permet de réviser les concepts clés après une formation grâce à des résumés et quiz sur mobile.',
        },{
          icon: 'lucide:lightbulb',
          title: 'Introduction d\'un cours',
          to: '/usecases/intro',
          description: 'Offre une introduction interactive à un nouveau sujet avec des vidéos et activités sur mobile.',
        },{
          icon: 'lucide:monitor-smartphone',
          title: 'Formation Hybride',
          to: '/usecases/hybrid',
          description: ' Intègre des modules mobiles dans un programme hybride pour renforcer l\'apprentissage et offrir plus de flexibilité.',
        },
        ],
      },*/ {
        title: 'Aide',
        class: 'w-[250px] grid grid-cols-1',
        links: [{
          title: 'Guide App mobile',
          to: '/guide/app/download',
          description: 'Guide d\'utilisation l\'application mobile sur iOS et Android',
          icon: 'lucide:smartphone'
        },{
          title: 'Guide Editeur',
          to: '/guide/user/install',
          description: 'Guide pour créer une formation mobile learning, courte, ludique, en quelques clics grâce à notre éditeur ePoc.',
          icon: 'lucide:monitor-cog'
        },{
          title: 'Guide Développeur',
          to: '/guide/developer/contributing',
          description: 'Guide pour contribuer et participer aux développements de la solution ePoc',
          icon: 'lucide:braces'
        },{
          title: 'Editeur de diagramme mermaid',
          to: '/tools/mermaid-editor',
          description: 'Outil pour générer le code d\'un diagramme mermaid',
          icon: 'lucide:git-fork'
        },{
          title: 'Générateur de QR Code',
          to: '/tools/qr-code-generator',
          description: 'Outil pour générer des QR Codes pour importer une ePoc à partir d\'un lien',
          icon: 'lucide:qr-code'
        },],
      }, {
        title: 'Communauté',
        class: 'w-[250px] grid grid-cols-1',
        links: [{
          title: 'Faire communauté',
          to: '/community/building-community',
          description: 'Pourquoi et comment participer à la communauté ePoc',
          icon: 'lucide:users'
        },{
          title: 'Soumettre un ePoc',
          to: '/community/submitting',
          description: 'Comment partager vos créations ePoc avec la communauté',
          icon: 'lucide:share'
        },{
          title: 'Forum',
          to: 'https://mooc-forums.inria.fr/laforgeedu/c/epoc',
          target: '_blank',
          description: 'Forum discourse dédié à ePoc',
          icon: 'lucide:messages-square'
        },{
          title: 'Discord',
          to: 'https://discord.gg/xzSVeuPEtH',
          target: '_blank',
          description: 'Serveur Discord ePoc',
          icon: 'cib:discord'
        },{
          title: 'Tchap',
          to: 'https://www.tchap.gouv.fr/#/room/#epoc:agent.education.tchap.gouv.fr',
          target: '_blank',
          description: 'Salon tchap ePoc (agents de la fonction publique)',
          icon: '/images/tchap.svg'
        },],
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
      credits: 'COPYRIGHT',
      links: [{
          title: 'Plan du site',
          to: '/sitemap',
        },{
          title: 'Conditions d\'utilisation',
          to: '/terms',
        },
        {
          title: 'Vie privee',
          to: '/privacy',
        },
        {
        icon: 'lucide:github',
        to: envConfig.repo,
        target: '_blank',
      },],
      navLinks: [
        {
          title: 'Docs',
          links: [{
            title: 'Guide App mobile',
            to: '/guide/app/download',
            icon: 'lucide:smartphone'
          },{
            title: 'Guide Editeur',
            to: '/guide/user/install',
            icon: 'lucide:monitor-cog'
          }, {
            title: 'Guide Développeur',
            to: '/guide/developer/contributing',
            icon: 'lucide:braces'
          }]
        },
        {
          title: 'Usecases',
          links: [{
            title: 'Formation Hybride',
            to: '/usecases/hybrid',
            icon: 'lucide:monitor-smartphone'
          },{
            title: 'Prérequis',
            to: '/usecases/intro',
            icon: 'lucide:list-checks'
          }, {
            title: 'Accueil Nouveaux Arrivants',
            to: '/usecases/onboarding',
            icon: 'lucide:heart-handshake'
          }, {
            title: 'Récapitulatif',
            to: '/usecases/takeaway',
            icon: 'lucide:backpack'
          }]
        },
        {
          title: 'Community',
          links: [{
            title: 'Faire communauté',
            to: '/community/building-community',
            icon: 'lucide:users'
          },{
            title: 'Soumettre un ePoc',
            to: '/community/submitting',
            icon: 'lucide:share'
          },{
            title: 'Forum',
            to: 'https://mooc-forums.inria.fr/laforgeedu/c/epoc',
            target: '_blank',
            icon: 'lucide:messages-square'
          },{
            title: 'Discord',
            to: 'https://discord.gg/xzSVeuPEtH',
            target: '_blank',
            icon: 'cib:discord'
          },{
            title: 'Tchap',
            to: 'https://www.tchap.gouv.fr/#/room/#epoc:agent.education.tchap.gouv.fr',
            target: '_blank',
            icon: '/images/tchap.svg'
          },]
        },
        {
          title: 'Divers',
          links: [{
            title: 'Générateur de QR Code',
            to: '/tools/qr-code-generator',
            icon: 'lucide:qr-code'
          },{
            title: 'Media Kit',
            to: '/mediakit',
            icon: 'lucide:wallpaper'
          }, {
            title: 'Partenariat',
            to: '/partnerships',
            icon: 'lucide:hand-heart'
          }]
        },
      ]
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