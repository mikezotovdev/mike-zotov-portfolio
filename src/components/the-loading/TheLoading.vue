<script setup lang="ts">
  import { onMounted, onUnmounted } from 'vue'
  import AppSvgIcon from '@/components/utils/app-svg-icon/AppSvgIcon.vue'
  import { IconName, IconSize } from '@/types/icon'

  const LOCKED_CLASS = 'is-locked'

  onMounted(() => {
    document.documentElement.classList.add(LOCKED_CLASS)
  })

  onUnmounted(() => {
    document.documentElement.classList.remove(LOCKED_CLASS)
  })
</script>

<template>
  <Transition
    name="opacity-transition"
    mode="in-out">
    <div class="the-loading">
      <AppSvgIcon
        class="the-loading-icon"
        :icon-name="IconName.LOADING"
        :size="IconSize.SIZE_128" />
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
  @use '@/styles/utils/functions.scss' as fun;

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  .the-loading {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-gray-alpha);
    backdrop-filter: blur(5px);
    z-index: 1;

    .the-loading-icon {
      animation: rotate 2s linear infinite;
      fill: var(--font-color);
    }
  }
</style>
