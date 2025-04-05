<template>
  <div>
    <NuxtLink v-if="logo.light && logo.dark" :to="localePath('/')" title="Homepage" class="flex">
      <NuxtImg :src="logo.light" alt="Logo ePoc" class="h-7 dark:hidden" />
      <NuxtImg :src="logo.dark" alt="Logo ePoc" class="hidden h-7 dark:block" />
      <span v-if="showTitle && title" class="ml-3 self-center font-bold">
        {{ $t(title) }}
      </span>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { logo, title, showTitle } = useConfig().value.header;
const { localePath } = useI18nDocs();
</script>