<script setup lang="ts">
  import { computed, onMounted, onUnmounted, reactive } from 'vue'
  import { GeneralHelper } from '@/helpers/general-helper'
  import { TimeoutHelper } from '@/helpers/timeout-helper'
  import { useProgressStore } from '@/stores/progress-store'

  const START_TIMEOUT_MS = 50
  const HOLD_FULL_PROGRESS_MS = 150
  const RANDOM_WIDTH_PERCENT_STEP = 10
  let timeoutMs = START_TIMEOUT_MS
  let timeoutId: number | null = null

  const START_PERCENT = 10
  const MAX_PERCENT = 100
  const MAX_PERCENT_REDUCED = 96

  const progressStore = useProgressStore()

  const state = reactive({
    widthPercent: START_PERCENT,
    isFinishing: false
  })

  const maxWidthPercent = computed(() => {
    return state.isFinishing
      ? MAX_PERCENT
      : MAX_PERCENT_REDUCED
  })

  const style = computed(() => ({
    transform: `scaleX(${state.widthPercent}%)`
  }))

  const setWidthPercent = (widthPercent: number) => {
    state.widthPercent = widthPercent
  }

  const makeRandomStep = () => {
    const newWidthPercent = GeneralHelper.getRandomValue(
      state.widthPercent,
      state.widthPercent + RANDOM_WIDTH_PERCENT_STEP
    )

    const clampedWidthPercent = newWidthPercent > maxWidthPercent.value
      ? maxWidthPercent.value
      : newWidthPercent

    setWidthPercent(clampedWidthPercent)
  }

  const cancelCurrentTimeout = () => {
    if (timeoutId !== null) {
      TimeoutHelper.cancel(timeoutId)
    }
  }

  const performDelayedStep = () => {
    cancelCurrentTimeout()
    timeoutId = TimeoutHelper.create(() => {
      timeoutMs = GeneralHelper.getRandomValue(100, 300)
      makeRandomStep()

      if (state.widthPercent === maxWidthPercent.value) {
        return
      }

      performDelayedStep()
    }, timeoutMs)
  }

  const endProgress = () => {
    state.isFinishing = true

    cancelCurrentTimeout()
    setWidthPercent(MAX_PERCENT)

    timeoutId = TimeoutHelper.create(() => {
      progressStore.$reset()
    }, HOLD_FULL_PROGRESS_MS)
  }

  onMounted(() => {
    progressStore.initProgress(endProgress)
    performDelayedStep()
  })
  onUnmounted(() => {
    cancelCurrentTimeout()
  })
</script>

<template>
  <div class="the-progress">
    <div
      class="the-progress-value"
      :class="{'is-finishing': state.isFinishing}"
      :style="style"></div>
  </div>
</template>

<style lang="scss" scoped>
  @use '@/styles/utils/functions.scss' as fun;
  @use '@/styles/utils/mixins.scss' as mixins;

  .the-progress {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 2px;
    background-color: transparent;
    z-index: 2;

    .the-progress-value {
      width: 100%;
      height: 100%;
      transform-origin: 0 center;
      background: linear-gradient(90deg, #8118a8, #ff7800);
      transition-duration: 0.15s;
      transition-timing-function: ease;
      transition-property: transform;

      &.is-finishing {
        transition-timing-function: linear;
      }
    }
  }
</style>
