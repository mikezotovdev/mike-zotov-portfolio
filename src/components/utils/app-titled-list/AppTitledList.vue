<script setup lang="ts">
  const props = defineProps<{
    items: string[];
  }>()
</script>

<template>
  <div class="app-titled-list">
    <h3 class="app-titled-list-title">
      <slot></slot>
    </h3>

    <ul class="bullet-list">
      <li
        v-for="text in props.items"
        :key="text"
        class="bullet-list-item">
        {{ text }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
  @use '@/styles/utils/functions.scss' as fun;
  @use '@/styles/utils/mixins.scss' as mixins;

  .app-titled-list {
    .app-titled-list-title {
      margin-bottom: fun.space(6);
      @include mixins.text-h4;
    }
  }

  .bullet-list {
    list-style-type: disc;
    display: flex;
    flex-flow: column;
    gap: fun.space(2);
  }
</style>
