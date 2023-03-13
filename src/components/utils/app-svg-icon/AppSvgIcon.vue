<script setup lang="ts">
  import { computed } from 'vue'
  import { IconName, ICONS_SYMBOL_PREFIX, IconSize } from '@/types/icon'

  const props = withDefaults(
    defineProps<{
      iconName: IconName;
      prefix?: string;
      size?: IconSize;
    }>(),
    {
      prefix: ICONS_SYMBOL_PREFIX,
      size: IconSize.SIZE_24
    }
  )

  const SIZE_CLASS_MAP: Record<IconSize, `is-size-${string}`> = {
    [IconSize.SIZE_24]: 'is-size-24',
    [IconSize.SIZE_64]: 'is-size-64',
    [IconSize.SIZE_128]: 'is-size-128'
  }

  const symbolId = computed(() => `#${props.prefix}-${props.iconName}`)
</script>

<template>
  <svg
    class="app-svg-icon"
    :class="[`is-${props.iconName}`, SIZE_CLASS_MAP[props.size]]"
    aria-hidden="true">
    <use :href="symbolId"></use>
  </svg>
</template>

<style lang="scss" scoped>
  .app-svg-icon {
    &.is-size-24 {
      width: 24px;
      height: 24px;
    }

    &.is-size-64 {
      width: 64px;
      height: 64px;
    }

    &.is-size-128 {
      width: 128px;
      height: 128px;
    }
  }
</style>
