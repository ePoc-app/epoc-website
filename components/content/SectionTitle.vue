<template>
  <section class="py-8 md:py-12 text-center">
    <h2 class="w-full font-bold leading-tight tracking-tighter md:text-5xl text-4xl lg:leading-[1.1] mb-4">
      <ContentSlot :use="$slots.title" unwrap="p" />
    </h2>
    <p class="max-w-2xl mx-auto text-lg font-light text-muted-foreground">
      <ContentSlot :use="$slots.description" unwrap="p" />
    </p>
  </section>
</template>

<script setup lang="ts">
defineSlots();
</script>
