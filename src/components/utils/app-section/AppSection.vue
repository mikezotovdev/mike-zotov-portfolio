<script setup lang="ts">
  import AppTextColorLine from '@/components/utils/app-text-color-line/AppTextColorLine.vue'
  import type { Color } from '@/types/color'
  import { ColorLineType } from '@/types/color-line-type'

  const props = defineProps<{
    id: string;
    color: Color;
  }>()
</script>

<template>
  <section class="app-section">
    <h2
      class="app-section-title"
      :id="props.id">
      <AppTextColorLine
        is="span"
        :color="props.color"
        :type="ColorLineType.BIG">
        <slot name="title"></slot>
      </AppTextColorLine>
    </h2>

    <slot></slot>
  </section>
</template>

<style lang="scss" scoped>
  @use '@/styles/utils/functions.scss' as fun;
  @use '@/styles/utils/mixins.scss' as mixins;

  .app-section {
    .app-section-title {
      margin-bottom: fun.space(12);
      @include mixins.text-h1-extended-medium;
    }
  }
</style>
