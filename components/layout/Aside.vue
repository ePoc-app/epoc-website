<template>
  <UiScrollArea orientation="vertical" class="relative h-full overflow-hidden py-6 pr-6 text-sm md:pr-4" type="hover">
    <LayoutHeaderNavMobile v-if="isMobile" class="mb-5 border-b pb-2" />
    <LayoutSearchButton v-if="config.search.inAside" />
    <ul v-if="config.aside.useLevel" class="flex flex-col gap-1 border-b pb-4">
      <li v-for="link in navigation" :key="link.id">
        <NuxtLink
            :to="link.redirect ?? link._path"
            class="flex min-h-8 items-center gap-2 rounded-md px-2 py-1.5 text-sm leading-tight text-foreground/80 hover:bg-muted hover:text-primary"
            :class="[
            path.startsWith(link._path) && 'bg-muted !text-primary',
          ]"
        >
          <SmartIcon
              v-if="link.icon"
              :name="link.icon"
              class="shrink-0 self-center"
              :size="16"
          />
          {{ link.title }}

          <span v-for="(badge, i) in link.navBadges" :key="i">
            <Badge :variant="badge.variant" :type="badge.type" :size="badge.size ?? 'sm'">
              {{ badge.value }}
            </Badge>
          </span>
        </NuxtLink>
      </li>
    </ul>
    <LayoutAsideTree
        :links="tree"
        :level="0"
        :class="[config.aside.useLevel ? 'pt-4' : 'pt-1']"
    />
  </UiScrollArea>
</template>

<script setup lang="ts">
import type {NavItem} from '@nuxt/content';

defineProps<{ isMobile: boolean }>();

const { navDirFromPath } = useContentHelpers();
const config = useConfig();
const { locale, defaultLocale, navigation: nav } = useI18nDocs();

// Sidebar levels: the guide sections, plus the community section
const navigation = computed(() => {
  const guide = nav.value.find((node: NavItem) => node._path.includes('/guide'));
  const community = nav.value.find((node: NavItem) => node._path.endsWith('/community'));
  return [...(guide?.children ?? []), ...(community ? [community] : [])];
})



const tree = computed(() => {
  const route = useRoute();
  const path = route.path.split('/');
  if (config.value.aside.useLevel) {
    const localeDepth = locale.value === defaultLocale ? 1 : 2;
    // The community section is a single level, guide sections are one level deeper
    const isCommunity = path[localeDepth] === 'community';
    const leveledPath = path.splice(0, localeDepth + (isCommunity ? 1 : 2)).join('/');

    const dir = navDirFromPath(leveledPath, navigation.value);
    return dir ?? [];
  }

  return navigation.value;
});

const path = computed(() => useRoute().path);
</script>
