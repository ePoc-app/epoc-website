<template>
  <div class="w-full  md:pb-8 lg:pb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    <UiCard class="flex flex-col" v-for="(item, i) in directory" :key="i">
      <NuxtLink :to="item._path">
        <img class="w-full aspect-square rounded-lg" :src="item.thumb" :alt="item.title" />
      </NuxtLink>
      <div class="flex flex-col justify-between flex-grow p-5 ">
        <div class="mb-4">
          <NuxtLink :to="item._path">
            <UiCardTitle>{{item.title}}</UiCardTitle>
          </NuxtLink>
          <p class="font-light text-muted-foreground my-4">{{item.short}}</p>
        </div>
        <ButtonLink :to="item._path">
          {{$t('En savoir plus')}}
        </ButtonLink>
      </div>
    </UiCard>
  </div>
</template>

<script setup lang="ts">
import type {NavItem, ParsedContent} from '@nuxt/content';

const { page } = useContent();
const { navigation } = useI18nDocs();
const { data: directory } = await useAsyncData('directory', () => {
  return navigation.value.find((nav: NavItem) => nav._path === page.value._path).children.reduce(async (directoryPromise: Promise<ParsedContent[]>, nav: NavItem) => {
    const directory = await directoryPromise;
    if (nav._path === page.value._path) return directory

    directory.push(await queryContent(nav._path).findOne());

    return directory;
  }, Promise.resolve([]));
}, {
  watch: [page, navigation],
  lazy: true
})
</script>