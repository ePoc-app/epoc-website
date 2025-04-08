<template>
  <div class="w-full md:pb-8 lg:pb-20 leading-loose">
    <NavigationLinks :links="navigation"></NavigationLinks>
  </div>
</template>

<script setup lang="ts">
import NavigationLinks from '~/components/layout/LinkList.vue';

const { navigation } = useContent();
</script>