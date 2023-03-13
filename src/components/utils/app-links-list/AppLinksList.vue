<script setup lang="ts">
  import AppExternalLink from '@/components/utils/app-external-link/AppExternalLink.vue'

  const props = defineProps<{
    links: { link: `https://${string}`; text: string; };
  }>()
</script>

<template>
  <ul class="app-links-list">
    <li
      class="app-links-list-item"
      v-for="({link, text}) in props.links"
      :key="link">
      <AppExternalLink :href="link">
        {{ text }}
      </AppExternalLink>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
  @use '@/styles/utils/functions.scss' as fun;

  .app-links-list {
    display: flex;
    flex-flow: column;
    gap: fun.space(5);
  }
</style>
