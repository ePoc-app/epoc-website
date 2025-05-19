<template>
  <div class="flex flex-wrap gap-4">
    <UiCard v-for="f in features" :key="f.name" class="flex flex-col basis-[calc(50%-0.5rem)] lg:basis-[calc(33.333%-0.66666rem)]" :class="{'bg-emerald-50 border-emerald-200 dark:bg-emerald-950 dark:border-emerald-800': f.success}">
      <UiCardHeader class="max-h-36 transition-all p-4 pb-0 md:p-6" :class="{'text-emerald-500': f.success}">
        <UiCardTitle class="text-sm md:text-2xl">{{f.name}}
          <SmartIcon v-if="f.success" name="lucide:circle-check-big" class="float-end" />
        </UiCardTitle>
      </UiCardHeader>
      <UiCardFooter class="flex-grow flex-col items-start p-4">
        <p class="line-clamp-3 flex-1 text-sm md:text-base">{{f.description}}</p>
        <UiCardDescription class="pt-2 flex items-center gap-1">
          <SmartIcon name="lucide:calendar" /> {{f.date ? f.date : $t('coming_soon')}}
        </UiCardDescription>
      </UiCardFooter>
    </UiCard>
    <UiCard class="flex flex-col md:basis-[calc(50%-0.5rem)] lg:basis-[calc(33.333%-0.66666rem)] bg-transparent border-none shadow-none">
      <UiCardHeader class="max-h-36 transition-all">
        <UiCardTitle>{{$t('feature_request')}}</UiCardTitle>
        <p class="line-clamp-3 flex-1">{{$t('feature_request_description')}}</p>
      </UiCardHeader>
      <UiCardFooter class="flex-grow flex-col items-start gap-1">
        <ButtonLink size="sm" :to="'mailto:ill-epoc-contact@inria.fr'+$t('feature_request_mailto')" target="_blank">
          {{ $t('feature_request_button') }}
          <SmartIcon name="lucide:arrow-up-right" class="ml-1" />
        </ButtonLink>
      </UiCardFooter>
    </UiCard>
  </div>
</template>

<script setup lang="ts">
const { locale, defaultLocale } = useI18nDocs();

const fr = [
  {
    name: 'Editeur ePoc',
    success: true,
    description: 'Sortie de l\'éditeur permettant de créer des ePocs',
    date: 'Q1 2023'
  },
  {
    name: 'Import d\'ePoc',
    success: true,
    description: 'Import d\'un ePoc créé avec l\'éditeur ou partagé par la communauté',
    date: 'Q1 2023'
  },
  {
    name: 'Badges',
    success: true,
    description: 'Système de badge conditionels permettant de débloquer l\'attestation',
    date: 'Q3 2023'
  },
  {
    name: 'Plugins',
    success: true,
    description: 'Système de plugin permettant d\'étendre les fonctionnalités d\'un ePoc',
    date: 'Q4 2023'
  },
  {
    name: 'Mathjax et Mermaid',
    success: true,
    description: 'Ajout du Mathjax et Mermaid pour avoir du LaTeX et des diagrammes dans les ePoc',
    date: 'Q1 2024'
  },
  {
    name: 'Collections d\'ePocs',
    success: false,
    description: 'Ouverture du catalogue d\'ePocs pour permettre de créer des collections tierces',
  },
  {
    name: 'Contenu déblocable',
    success: false,
    description: 'Chapitre ou contenu déblocable sous condition en fonction des actions de l\'apprenant',
  },
  {
    name: 'ePoc Hub',
    success: false,
    description: 'Service d\'hébergement d\'ePocs et de collections d\'ePocs pour la communauté',
  },
  {
    name: 'Scénarios à embranchement',
    success: false,
    description: 'Ouverture du catalogue d\'ePocs pour permettre de créer des collections tierces',
  },
  {
    name: 'Export SCORM et HTML',
    success: false,
    description: 'Export d\'un ePoc au format SCORM et HTML',
  }
];

const en = [
  {
    name: 'ePoc Editor',
    success: true,
    description: 'Release of the editor to create ePocs',
    date: 'Q1 2023'
  },
  {
    name: 'ePoc Import',
    success: true,
    description: 'Import an ePoc created with the editor or shared by the community',
    date: 'Q1 2023'
  },
  {
    name: 'Badges',
    success: true,
    description: 'Conditional badge system to unlock the certificate',
    date: 'Q3 2023'
  },
  {
    name: 'Plugins',
    success: true,
    description: 'Plugin system to extend the functionality of an ePoc',
    date: 'Q4 2023'
  },
  {
    name: 'Mathjax and Mermaid',
    success: true,
    description: 'Addition of Mathjax and Mermaid to have LaTeX and diagrams in ePocs',
    date: 'Q1 2024'
  },
  {
    name: 'ePoc Collections',
    success: false,
    description: 'Open the ePoc catalog to allow third-party collections to be created',
  },
  {
    name: 'Unlockable content',
    success: false,
    description: 'Chapter or unlockable content based on learner actions',
  },
  {
    name: 'ePoc Hub',
    success: false,
    description: 'Hosting service for ePocs and collections of ePocs for the community',
  },
  {
    name: 'Branching scenarios',
    success: false,
    description: 'Open the ePoc catalog to allow third-party collections to be created',
  },
  {
    name: 'SCORM and HTML export',
    success: false,
    description: 'Export an ePoc in SCORM and HTML format',
  }
]

const features =  computed(() => {
  return locale.value === defaultLocale ? fr : en;
})
</script>