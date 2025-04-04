<template>
  <div class="w-full  md:pb-8 lg:pb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    <UiCard class="flex flex-col" v-for="(item, i) in directory" :key="i">
      <NuxtLink :to="item.path">
        <img class="w-full aspect-square rounded-lg" :src="item.thumb" :alt="item.title" />
      </NuxtLink>
      <div class="flex flex-col justify-between flex-grow p-5 ">
        <div class="mb-4">
          <NuxtLink :to="item.path">
            <UiCardTitle>{{item.title}}</UiCardTitle>
          </NuxtLink>
          <p class="font-light text-muted-foreground my-4">{{item.short}}</p>
        </div>
        <ButtonLink :to="item.path">
          {{$t('En savoir plus')}}
        </ButtonLink>
      </div>
    </UiCard>
  </div>
</template>

<script setup lang="ts">
const { locale, defaultLocale } = useI18nDocs();

const en = [
  {
    "title": "What is AI?",
    "description": "This discovery course is for anyone who wants to understand the principles of artificial intelligence (AI) compared to biological intelligence, where to find AI and its main approaches.",
    "short": "The principles of artificial intelligence (AI) compared to biological intelligence",
    "img": "/images/accueil-ia.png",
    "thumb": "/images/thumb-ia.png",
    "fullpage": true,
    "path": "/en/epocs/e009ll"
  },
  {
    "title": "Restricted Zone",
    "description": "ePoc training for new Inria arrivals in Restricted Zones.",
    "short": "ePoc training for new Inria arrivals in Restricted Zones.",
    "img": "/images/accueil-zrr.png",
    "thumb": "/images/thumb-zrr.png",
    "private": true,
    "apple_link": "https://apps.apple.com/us/app/epoc-zrr/id1596921676",
    "google_link": "https://play.google.com/store/apps/details?id=fr.inria.epoc.zrr",
    "fullpage": true,
    "path": "/en/epocs/e001db"
  },
  {
    "title": "Internet of Things and Privacy",
    "description": "ePoc training dedicated to the question of privacy protection in the smart home domain.",
    "short": "About privacy in the smart home domain.",
    "img": "/images/accueil-iot.png",
    "thumb": "/images/thumb-iot.png",
    "fullpage": true,
    "path": "/en/epocs/e003vr"
  },
  {
    "title": "Create My First ePoc",
    "description": "Discover the \"ePoc Editor\" and create your first mobile learning training, short, engaging, in just a few clicks.",
    "short": "Discover how to create your first mobile learning training, short, engaging, in just a few clicks.",
    "img": "/images/accueil-E012MC.png",
    "thumb": "/images/thumb-E012MC.png",
    "qrcode": "/images/qr-E012MC.png",
    "fullpage": true,
    "path": "/en/epocs/e012mc"
  },
  {
    "title": "Smartphone and Privacy",
    "description": "ePoc training dedicated to the question of privacy protection when using our personal assistants, smartphones or tablets.",
    "short": "About privacy protection on our smartphones or tablets.",
    "img": "/images/accueil-vp.png",
    "thumb": "/images/thumb-vp.png",
    "fullpage": true,
    "path": "/en/epocs/e002vr"
  },
  {
    "title": "Basics of Data",
    "description": "This course is intended for anyone wondering about how computers work. In this ePoc, we propose to understand some fundamentals about data.",
    "short": "Understand some fundamentals of computer science and data.",
    "img": "/images/accueil-data.png",
    "thumb": "/images/thumb-data.png",
    "fullpage": true,
    "path": "/en/epocs/e006pe"
  },
  {
    "title": "Smartphones and the Planet",
    "description": "A short mobile training to understand the environmental impacts of smartphones.",
    "short": "Understand the environmental impacts of smartphones.",
    "img": "/images/accueil-impactnum.png",
    "thumb": "/images/thumb-impactnum.png",
    "fullpage": true,
    "path": "/en/epocs/e007mm"
  }
];

const fr = [
  {
    "title": "C'est quoi l'IA ?",
    "description": "Ce parcours d\u00e9couverte s'adresse \u00e0 toutes celles et tous ceux qui souhaitent comprendre les principes de l'intelligence artificielle (IA) par rapport \u00e0 l'intelligence biologique, o\u00f9 trouve-t-on de l'IA et ses principales approches.",
    "short": "Les principes de l'intelligence artificielle (IA) par rapport \u00e0 l'intelligence biologique",
    "img": "/images/accueil-ia.png",
    "thumb": "/images/thumb-ia.png",
    "fullpage": true,
    "path": "/epocs/e009ll"
  },
  {
    "title": "Zone \u00e0 R\u00e9gime Restrictif",
    "description": "Formation ePoc des nouveaux arrivants Inria en Zone \u00e0 R\u00e9gime Restrictif.",
    "short": "Formation ePoc des nouveaux arrivants Inria en Zone \u00e0 R\u00e9gime Restrictif.",
    "img": "/images/accueil-zrr.png",
    "thumb": "/images/thumb-zrr.png",
    "private": true,
    "apple_link": "https://apps.apple.com/us/app/epoc-zrr/id1596921676",
    "google_link": "https://play.google.com/store/apps/details?id=fr.inria.epoc.zrr",
    "fullpage": true,
    "path": "/epocs/e001db"
  },
  {
    "title": "Internet des objets et vie priv\u00e9e",
    "description": "Formation ePoc d\u00e9di\u00e9e \u00e0 la question du respect de la vie priv\u00e9e dans le domaine de la maison intelligente.",
    "short": "Sur la question de la vie priv\u00e9e dans le domaine de la maison intelligente.",
    "img": "/images/accueil-iot.png",
    "thumb": "/images/thumb-iot.png",
    "fullpage": true,
    "path": "/epocs/e003vr"
  },
  {
    "title": "Produire mon 1er ePoc",
    "description": "D\u00e9couvrez l'\u00e9diteur \"ePoc Editor\" et cr\u00e9ez votre premi\u00e8re formation mobile learning, courte, ludique, en quelques clics. ",
    "short": "D\u00e9couvrez comment cr\u00e9er votre premi\u00e8re formation mobile learning, courte, ludique, en quelques clics.",
    "img": "/images/accueil-E012MC.png",
    "thumb": "/images/thumb-E012MC.png",
    "qrcode": "/images/qr-E012MC.png",
    "fullpage": true,
    "path": "/epocs/e012mc"
  },
  {
    "title": "Smartphone et vie priv\u00e9e",
    "description": "Formation ePoc d\u00e9di\u00e9e \u00e0 la question du respect de la vie priv\u00e9e lorsque l'on utilise nos assistants personnels, smartphone ou tablette.",
    "short": "A propos du respect de la vie priv\u00e9e sur nos smartphone ou tablette.",
    "img": "/images/accueil-vp.png",
    "thumb": "/images/thumb-vp.png",
    "fullpage": true,
    "path": "/epocs/e002vr"
  },
  {
    "title": "B.A.-BA des data",
    "description": "Ce parcours se destine \u00e0 toutes celles et ceux qui s'interrogent sur le fonctionnement de l'informatique. Dans cet ePoc on vous propose de comprendre quelques fondamentaux sur les donn\u00e9es.",
    "short": "Comprendre quelques fondamentaux de l'informatique et des donn\u00e9es.",
    "img": "/images/accueil-data.png",
    "thumb": "/images/thumb-data.png",
    "fullpage": true,
    "path": "/epocs/e006pe"
  },
  {
    "title": "Le smartphone et la plan\u00e8te",
    "description": "Une formation courte sur mobile pour comprendre les impacts environnementaux du smartphone.",
    "short": "Comprendre les impacts environnementaux du smartphone.",
    "img": "/images/accueil-impactnum.png",
    "thumb": "/images/thumb-impactnum.png",
    "fullpage": true,
    "path": "/epocs/e007mm"
  }
];
const directory =  computed(() => {
  return locale.value === defaultLocale ? fr : en;
})
</script>