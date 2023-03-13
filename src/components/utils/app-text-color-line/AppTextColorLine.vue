<script setup lang="ts">
  import { ColorLineType } from '@/types/color-line-type'
  import { Color } from '@/types/color'
  import type { Component } from 'vue'

  const props = withDefaults(
    defineProps<{
      is: string | Component;
      type: ColorLineType;
      color: Color;
      isActive?: boolean;
    }>(),
    { isActive: true }
  )

  const COLOR_CLASS_MAP: Record<Color, `is-${string}`> = {
    [Color.GREEN]: 'is-green',
    [Color.RED]: 'is-red',
    [Color.YELLOW]: 'is-yellow',
    [Color.BLUE]: 'is-blue'
  }

  const TYPE_CLASS_MAP: Record<ColorLineType, `is-${string}`> = {
    [ColorLineType.SMALL]: 'is-small',
    [ColorLineType.MEDIUM]: 'is-medium',
    [ColorLineType.BIG]: 'is-big'
  }
</script>

<template>
  <component
    class="app-text-color-line"
    :class="[COLOR_CLASS_MAP[props.color], TYPE_CLASS_MAP[props.type], { 'is-active': props.isActive }]"
    v-bind="$attrs"
    :is="props.is">
    <slot></slot>
  </component>
</template>

<style lang="scss" scoped>
  @use '@/styles/utils/functions.scss' as fun;

  .app-text-color-line {
    position: relative;
    isolation: isolate;

    &::after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      left: 0;
      z-index: -1;
      transform-origin: 50% 0;
      transform: scaleY(0);
      transition-duration: 0.2s;
      transition-property: transform;
    }

    &.is-active {
      &::after {
        transform: scaleY(1);
      }
    }

    &.is-green {
      &::after {
        background-color: var(--color-green);
      }
    }

    &.is-red {
      &::after {
        background-color: var(--color-red);
      }
    }

    &.is-yellow {
      &::after {
        background-color: var(--color-yellow);
      }
    }

    &.is-blue {
      &::after {
        background-color: var(--color-blue);
      }
    }

    &.is-small {
      &::after {
        bottom: 0;
        height: 5px;
      }
    }

    &.is-medium {
      &::after {
        bottom: - fun.space(2);
        height: 7px;
      }
    }

    &.is-big {
      &::after {
        bottom: calc(1rem + #{fun.space(2)});
        height: calc(50% - #{fun.space(8)});
      }
    }
  }
</style>
