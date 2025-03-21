import envConfig from './env.config';
export default defineAppConfig({
  shadcnDocs: {
    site: {
      name: 'ePoc Mobile Learning',
      description: 'ePoc (Electronic Pocket Open Course) est une solution complète libre et ouverte pour l\'apprentissage sur mobile. Développée par Inria.',
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
      logo: {
        light: '/logo.svg',
        dark: '/logo-dark.svg',
      },
      nav: [{
        title: 'Nos ePocs',
        links: [{
          title: 'Tous nos ePocs',
          to: '/epocs',
          description: 'Découvrez la collection ePoc Inria',
        },{
          title: 'B.A.-BA des data',
          to: '/epocs/E006PE'.toLowerCase(),
          description: 'Comprendre quelques fondamentaux de l\'informatique et des données.',
        },{
          title: 'Smartphone et vie privée',
          to: '/epocs/E002VR'.toLowerCase(),
          description: 'A propos du respect de la vie privée sur nos smartphone ou tablette.',
        },{
          title: 'Internet des objets et vie privée',
          to: '/epocs/E003VR'.toLowerCase(),
          description: 'Sur la question de la vie privée dans le domaine de la maison intelligente.',
        },{
          title: 'Le smartphone et la planète',
          to: '/epocs/E007MM'.toLowerCase(),
          description: 'Comprendre les impacts environnementaux du smartphone.',
        },{
          title: 'C\'est quoi l\'IA ?',
          to: '/epocs/E009LL'.toLowerCase(),
          description: 'Les principes de l\'intelligence artificielle (IA) par rapport à l\'intelligence biologique',
        },{
          title: 'Produire mon 1er ePoc',
          to: '/epocs/E012MC'.toLowerCase(),
          description: 'Découvrez comment créer votre première formation mobile learning, courte, ludique, en quelques clics.',
        },{
          title: '🔒 Zone à Régime Restrictif',
          to: '/epocs/E001DB'.toLowerCase(),
          description: 'Formation ePoc des nouveaux arrivants Inria en Zone à Régime Restrictif.',
        },
        ],
      }, {
        title: 'Editeur',
        to: '/editor',
        icon: 'lucide:box',
        showLinkIcon: false,
      }, {
        title: 'Aide',
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
          to: '/guide/developer/contributing/',
          description: 'Guide pour contribuer et participer aux développements de la solution ePoc',
          icon: 'lucide:braces'
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