<template>
  <footer class="text-muted-foreground py-6 md:px-8 md:py-0 mt-8" :class="{'border-t': page.fullpage || route.path === '/'}">
    <div class="container flex flex-col gap-2">
      <nav class="grid grid-cols-1 min-[450px]:grid-cols-2 lg:grid-cols-4 justify-between gap-8 py-8">
        <template v-for="(item, index) in footer.navLinks" :key="index">
          <div class="flex flex-col gap-4 text-center lg:text-left">
            <h4 class="text-lg font-semibold text-foreground">{{ $t(item.title) }}</h4>
            <ul class="flex flex-col gap-2">
              <li v-for="(link, i) in item.links" :key="i">
                <NuxtLink :to="localePath(link.to)" class="text-sm hover:text-primary transition-colors flex items-center justify-center lg:justify-start">
                  <SmartIcon v-if="link?.icon" :name="link.icon" :size="16" class="mr-1"/>
                  <span>{{ $t(link.title) }}</span>
                </NuxtLink>
              </li>
            </ul>
          </div>
        </template>
      </nav>
      <div class="flex flex-col items-center justify-between gap-2 md:h-24 md:flex-row">
        <MDC :value="$t(footer.credits)" class="text-sm" />
        <span class="flex-1" />
        <NuxtLink
            v-for="(link, i) in footer.links"
            :key="i"
            :to="localePath(link?.to)"
            :target="link?.target"
        >
          <UiButton variant="ghost" :size="link?.icon && !link?.title ? 'icon' : 'default'" class="flex gap-2">
            <SmartIcon v-if="link?.icon" :name="link.icon" :size="20" />
            <span v-if="link?.title">{{ $t(link.title) }}</span>
          </UiButton>
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const { page } = useContent();
const route = useRoute();
const { footer } = useConfig().value;
const { localePath } = useI18nDocs();
</script>