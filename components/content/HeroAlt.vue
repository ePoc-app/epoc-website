<template>
  <div
      class="gap-8 py-8 md:py-12 md:pb-8 lg:py-12 lg:pb-10 text-center lg:text-left"
      :class="{ 'grid lg:grid-cols-2 items-center': $slots.right }"
  >
    <section
        class="flex flex-col items-center lg:items-start gap-2"
    >
      <NuxtLink
          v-if="announcement"
          :to="announcement.to"
          :target="announcement.target"
          class="inline-flex items-center px-0.5 font-medium"
      >
        <template v-if="announcement.icon">
          <SmartIcon :name="announcement.icon" :size="16" />
          <UiSeparator class="mx-2 h-4" orientation="vertical" />
        </template>
        <span class="underline-offset-4 hover:underline">{{ announcement.title }}</span>
        <Icon name="lucide:arrow-right" class="ml-1 size-4" />
      </NuxtLink>

      <h1 class="w-full font-bold leading-tight tracking-tighter md:text-7xl text-5xl lg:leading-[1.1] mb-8">
        <ContentSlot :use="$slots.title" unwrap="p" />
      </h1>
      <p class="max-w-2xl text-lg sm:text-xl font-light text-muted-foreground mb-8">
        <ContentSlot :use="$slots.description" unwrap="p" />
      </p>

      <div class="flex flex-wrap w-full items-center justify-center lg:justify-start gap-2 py-2">
        <template :key="i" v-for="(action, i) in actions">
          <hr v-if="action.separator" class="w-full border-none"/>
          <NuxtLink v-else
              :to="action.to"
              :target="action.target"
          >
            <UiButton :variant="action.variant" size="sm">
              <SmartIcon v-if="action.leftIcon" :name="action.leftIcon" class="mr-1" />
              {{ action.name }}
              <SmartIcon v-if="action.rightIcon" :name="action.rightIcon" class="ml-1" />
            </UiButton>
          </NuxtLink>
        </template>
      </div>
    </section>
    <div class="mx-auto" :class="{ 'order-first md:order-last': mobileRight === 'top' }">
      <ContentSlot :use="$slots.right" unwrap="p" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  announcement?: {
    to?: string;
    target?: Target;
    icon?: string;
    title: string;
  };
  actions: [{
    name: string;
    leftIcon?: string;
    rightIcon?: string;
    variant?: 'default' | 'link' | 'destructive' | 'outline' | 'secondary' | 'ghost';
    to: string;
    target?: Target;
    separator?: boolean;
  }];
  mobileRight?: 'top' | 'bottom';
}>();
defineSlots();
</script>
