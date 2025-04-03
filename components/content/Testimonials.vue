<template>
  <div class="masonry grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

    <UiCard v-for="t in testimonials" :key="t.name" class="flex flex-col">
      <UiCardHeader class="flex-grow justify-center max-h-36 transition-all">
        <p class="line-clamp-4">{{t.quote}}</p>
      </UiCardHeader>
      <UiCardFooter>
        <UiAvatar class="mr-2">
          <UiAvatarImage :src="t.img"></UiAvatarImage>
          <UiAvatarFallback class="text-primary-foreground">{{getInitials(t.name)}}</UiAvatarFallback>
        </UiAvatar>
        <div>
          <UiCardTitle>{{t.name}}</UiCardTitle>
          <UiCardDescription>
            <NuxtLink v-if="t.src" :to="t.src" target="_blank">{{t.srcName}}</NuxtLink>
            <span v-else>{{t.srcName}}</span>
          </UiCardDescription>
        </div>
      </UiCardFooter>
    </UiCard>

  </div>
</template>

<script setup lang="ts">
function getInitials(name: string): string {
  // Split the name into words
  const nameParts = name.split(' ');

  if (nameParts.length === 1) {
    // If it's a single word (pseudonym), take the first two letters
    return nameParts[0].slice(0, 2).toUpperCase();
  } else {
    // For Spanish names, take the first letter of the first given name and the first surname
    const firstNameInitial = nameParts[0].charAt(0).toUpperCase();
    const lastNameInitial = nameParts[nameParts.length - 1].charAt(0).toUpperCase();
    return firstNameInitial + lastNameInitial;
  }
}

const shuffleArray = <T,>(array: T[]): T[] => array.slice().sort(() => Math.random() - 0.5);

const testimonials = shuffleArray([
  {
    name: 'Alexis Kauffmann',
    img: 'https://matrix.agent.education.tchap.gouv.fr/_matrix/media/v3/thumbnail/agent.education.tchap.gouv.fr/IQVrXpkJHAKHdzSWKmrQNsFV?width=30&height=30&method=crop',
    src: 'https://tchap.gouv.fr/#/room/!cDdWbfkPfGeLnonKXE:agent.education.tchap.gouv.fr/$3ec103iDZTnUFKyl7470CBeOhubhzjLDtEvnT2263_g?via=agent.education.tchap.gouv.fr&via=agent.agriculture.tchap.gouv.fr&via=agent.diplomatie.tchap.gouv.fr',
    srcName: 'via Tchap',
    quote: 'Chef de projet logiciels et ressources éducatives libres à la DNE [...] Le projet ePoc nous intéresse beaucoup et je participe à faire connaitre le projet et à mettre les personnes intéressées en relation. '
  },
  // {
  //   name: 'Amelie Silvert',
  //   img: 'https://matrix.agent.education.tchap.gouv.fr/_matrix/media/v3/thumbnail/agent.education.tchap.gouv.fr/KXARfOMwxjHFKwRvaPxjFpNF?width=30&height=30&method=crop',
  //   src: 'https://tchap.gouv.fr/#/room/!cDdWbfkPfGeLnonKXE:agent.education.tchap.gouv.fr/$ImIw6X63MJj5ZcThhd5epodIvEw5m_ubQdenh2w6xzA?via=agent.education.tchap.gouv.fr&via=agent.agriculture.tchap.gouv.fr&via=agent.diplomatie.tchap.gouv.fr',
  //   srcName: 'via Tchap',
  //   quote: 'Bonjour, j\'ai trouvé epoc par hasard via un post sur X. Ca m\'a tout de suite plu. J\'ai fait une première version d\'une application sur Visio Agents.'
  // },
  // {
  //   name: 'Delphine Sechet',
  //   img: 'https://matrix.agent.education.tchap.gouv.fr/_matrix/media/v3/thumbnail/agent.education.tchap.gouv.fr/BwHltdsmHWxFpLQwmTOMlHhf?width=30&height=30&method=crop',
  //   src: 'https://tchap.gouv.fr/#/room/!cDdWbfkPfGeLnonKXE:agent.education.tchap.gouv.fr/$UmJdKibIG5OWNArMphNCgs3K640XGVu6lvsBAluBqTI?via=agent.education.tchap.gouv.fr&via=agent.agriculture.tchap.gouv.fr&via=agent.diplomatie.tchap.gouv.fr',
  //   srcName: 'via Tchap',
  //   quote: 'Bonjour, en SVT dans l\'académie de Versailles nous testons quelques usages d\'epoc. Des articles ont en cours de rédaction.'
  // },
  // {
  //   name: 'Agnes Lagrene',
  //   img: 'https://matrix.agent.education.tchap.gouv.fr/_matrix/media/v3/thumbnail/matrix.agent.education.tchap.gouv.fr/d70e9ec5efb818aa25e830f710d3807affd1706a?width=30&height=30&method=crop',
  //   src: 'https://tchap.gouv.fr/#/room/!cDdWbfkPfGeLnonKXE:agent.education.tchap.gouv.fr/$UYqx68LKse_MA4UHvY-nrs882J5rG7RAhtt8-wLMPH0?via=agent.education.tchap.gouv.fr&via=agent.agriculture.tchap.gouv.fr&via=agent.diplomatie.tchap.gouv.fr',
  //   srcName: 'via Tchap',
  //   quote: 'Bonjour, je viens de découvrir depuis peu ePoc et j\'adhère vraiment à l\'interface de création intuitive. Cela me donne beaucoup d\'idées d\'utilisation pour enrichir des modalités de formation pour les personnels.'
  // },
  {
    name: 'Bidule Bulle',
    img: 'https://play-lh.googleusercontent.com/a/ACg8ocKeM2UB59Nw1LI9QEZcFUtaeeguHhrqQRG9dSnR8oCDu8dXGw=s32-mo',
    src: 'https://play.google.com/store/apps/details?id=fr.inria.epoc',
    srcName: 'via Google Play',
    quote: 'C\'est très bien fait. Ludique avec les petites activités très parlantes. Le format des modules est bien pensé, de courte durée et répondant à un ensemble de questions qui découlent du précédent module. Parfait, j\'espère un niveau 2 sur le Baba des données.'
  },
  {
    name: 'Latefa Bouabdelli',
    img: 'https://play-lh.googleusercontent.com/a-/ALV-UjUKMAA9cW_LukBvHHW-19VMoeYi0CVGco7BiPQuv64Pd1a8h_Q2Og=s32',
    src: 'https://play.google.com/store/apps/details?id=fr.inria.epoc',
    srcName: 'via Google Play',
    quote: 'Application très attractive et instructive. Le contenu est clair et bien rédigé, les audios sont cours et explicites. Bravo!'
  },
  {
    name: 'Shekyb Solh Dost',
    img: 'https://play-lh.googleusercontent.com/a-/ALV-UjXSRTL9op6SSJavDTyRSOkJsiZEDiekpZD8Hj2ecDDsO56yznCtqQ=s32',
    src: 'https://play.google.com/store/apps/details?id=fr.inria.epoc',
    srcName: 'via Google Play',
    quote: 'Application très bien faite. Permet de progresser à son rythme'
  },
  {
    name: 'Felix Balama',
    img: 'https://play-lh.googleusercontent.com/a/ACg8ocIQ87T1c6TCgoihtU0LWj-Oy5XjdevRsbd1xhDbjxbowqd2bQ=s32-mo',
    src: 'https://play.google.com/store/apps/details?id=fr.inria.epoc',
    srcName: 'via Google Play',
    quote: 'Application très didactique et facile d\'usage 👏👏👍👍🔥'
  },
  {
    name: 'Djime Traore',
    img: 'https://play-lh.googleusercontent.com/a-/ALV-UjXLCjt7UebQE55N9la4mwFtv5zwsiOALyIrPEXi05L8BpaV73mN6w=s32',
    src: 'https://play.google.com/store/apps/details?id=fr.inria.epoc',
    srcName: 'via Google Play',
    quote: 'Elle est vraiment trop cool cet appli'
  },
  {
    name: 'Romain',
    img: 'https://play-lh.googleusercontent.com/a-/ALV-UjWXQQIZPTTEuAfcBDW-eLAoBJtLBoGfRzPdeH7g4EBvemA3-e62=s32',
    src: 'https://play.google.com/store/apps/details?id=fr.inria.epoc',
    srcName: 'via Google Play',
    quote: 'Superbe application très utile, facile d\'utilisation. Je recommande fortement.'
  },
])
</script>