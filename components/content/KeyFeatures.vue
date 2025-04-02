<template>
  <div class="key-feature container py-8 md:py-12 grid grid-cols-1 gap-8 md:grid-cols-2 items-center justify-center auto-rows-auto text-lg">
    <div class="flex md:text-right mb-8 md:mb-0" :class="{ 'order-last md:order-none': reverse }">
      <div class="max-w-96 ml-auto mr-auto md:mr-0">
        <ContentSlot :use="$slots.side1" unwrap="p" />
        <p v-if="$slots.side1Desc" class="font-light text-muted-foreground mt-8">
          <ContentSlot :use="$slots.side1Desc" unwrap="p" />
        </p>
      </div>
    </div>
    <div class="">
      <div class="max-w-96 ml-auto md:ml-0 mr-auto">
        <ContentSlot :use="$slots.side2" unwrap="p" />
        <p v-if="$slots.side2Desc" class="font-light text-muted-foreground mt-8">
          <ContentSlot :use="$slots.side2Desc" unwrap="p" />
        </p>
      </div>
    </div>
  </div>
</template>

<style>
.key-feature h3 {
  font-size: 2rem;
}
.key-feature img {
  display: inline;
}
</style>

<script setup lang="ts">
defineProps<{
  reverse?: boolean;
}>();
defineSlots();
</script>
