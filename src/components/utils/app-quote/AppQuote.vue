<script setup lang="ts">
  import AppSvgIcon from '@/components/utils/app-svg-icon/AppSvgIcon.vue'
  import { IconName, IconSize } from '@/types/icon'

  const props = withDefaults(
    defineProps<{
      iconName?: IconName | null;
      isAnimated?: boolean;
    }>(),
    {
      iconName: null,
      isAnimated: false
    }
  )

  interface Emit {
    (e: 'icon-click'): void;
  }

  const emit = defineEmits<Emit>()
</script>

<template>
  <blockquote class="app-quote">
    <button
      v-if="props.iconName"
      class="app-quote-button button is-icon"
      :class="{'is-animated': props.isAnimated}"
      type="button"
      @click="emit('icon-click')">
      <AppSvgIcon
        :icon-name="props.iconName"
        :size="IconSize.SIZE_64" />
    </button>
    <p class="app-quote-text">
      <slot></slot>
    </p>
  </blockquote>
</template>

<style lang="scss" scoped>
  @use '@/styles/utils/functions.scss' as fun;
  @use '@/styles/utils/mixins.scss' as mixins;

  $animation-offset: 15px;

  @keyframes top-down-animation {
    0% {
      transform: translateY(- $animation-offset);
    }

    100% {
      transform: translateY($animation-offset);
    }
  }

  .app-quote {
    display: flex;
    gap: fun.space(17);
    align-items: center;

    @include mixins.tablet {
      gap: fun.space(12);
    }

    @include mixins.mobile {
      gap: fun.space(8);
    }

    .app-quote-button {
      &.is-animated {
        animation: top-down-animation 1.25s alternate ease-in-out infinite;
      }

      @include mixins.mobile {
        :deep(.app-svg-icon) {
          width: 32px;
          height: 32px;
        }
      }
    }

    .app-quote-text {
      flex: 1;
      @include mixins.text-xl;

      @include mixins.tablet {
        @include mixins.text-h1;
      }

      @include mixins.mobile {
        @include mixins.text-h4;
      }
    }
  }
</style>
