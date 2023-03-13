<script setup lang="ts">
  import type { ImageFileName } from '@/types/resource'

  const props = defineProps<{
    src: ImageFileName | string;
    alt: string;
  }>()
</script>

<template>
  <figure class="app-figure">
    <img
      class="app-figure-image"
      :src="props.src"
      :alt="props.alt">
    <figcaption
      v-if="$slots.default"
      class="app-figure-caption">
      <slot></slot>
    </figcaption>
  </figure>
</template>

<style lang="scss" scoped>
  @use '@/styles/utils/functions.scss' as fun;
  @use '@/styles/utils/mixins.scss' as mixins;

  .app-figure {
    margin: 0;

    .app-figure-caption {
      @include mixins.text-paragraph;
      margin-top: fun.space(4);
    }
  }
</style>
