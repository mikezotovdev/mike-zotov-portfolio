<script setup lang="ts">
  import AppTextColorLine from '@/components/utils/app-text-color-line/AppTextColorLine.vue'
  import { ColorLineType } from '@/types/color-line-type'
  import { Color } from '@/types/color'

  const props = withDefaults(
    defineProps<{
      color?: Color;
    }>(),
    { color: Color.RED }
  )
</script>

<template>
  <article class="app-page">
    <h1
      v-if="$slots.title"
      class="app-page-title">
      <AppTextColorLine
        is="span"
        :color="props.color"
        :type="ColorLineType.BIG">
        <slot name="title"></slot>
      </AppTextColorLine>
    </h1>

    <div class="app-page-content">
      <slot></slot>
    </div>
  </article>
</template>

<style lang="scss" scoped>
  @use '@/styles/utils/functions.scss' as fun;
  @use '@/styles/utils/mixins.scss' as mixins;

  .app-page {
    .app-page-title {
      margin-bottom: fun.space(12);
      @include mixins.text-h1-extended-medium;
    }
  }
</style>
