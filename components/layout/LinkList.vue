<template>
  <ul>
    <li v-for="link in links" :key="link._path" class="">
      <div class="flex items-center gap-1">
        <SmartIcon :name="link.children ? 'lucide:folder':'lucide:file'"></SmartIcon>
        <NuxtLink class="text-primary hover:underline" :to="link._path">{{ link.title }}</NuxtLink>
      </div>
      <!-- Recursively render child links if they exist -->
      <NavigationLinks v-if="link.children" :links="link.children" class="ml-2 pl-6 border-l" />
    </li>
  </ul>
</template>

<script>
export default {
  name: 'NavigationLinks',
  props: {
    links: {
      type: Array,
      required: true
    }
  }
}
</script>
