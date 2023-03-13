<script setup lang="ts">
  import { ChipsType } from '@/types/chips-type'

  const props = withDefaults(
    defineProps<{ type?: ChipsType; }>(),
    { type: ChipsType.BLUE }
  )

  const TYPE_CLASS_MAP: Record<ChipsType, `is-${string}`> = {
    [ChipsType.GREEN]: 'is-green',
    [ChipsType.BLUE]: 'is-blue'
  }
</script>

<template>
  <li
    class="app-chips-item"
    :class="[TYPE_CLASS_MAP[props.type]]">
    <slot></slot>
  </li>
</template>

<style lang="scss" scoped>
  @use '@/styles/utils/functions.scss' as fun;
  @use '@/styles/utils/mixins.scss' as mixins;

  .app-chips-item {
    padding: 0 fun.space(4);
    @include mixins.text-small;

    &.is-green {
      background-color: var(--color-green-light);
    }

    &.is-blue {
      background-color: var(--color-blue-light);
    }
  }
</style>
