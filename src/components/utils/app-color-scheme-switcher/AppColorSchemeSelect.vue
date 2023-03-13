<script setup lang="ts">
  import { useColorSchemeStore } from '@/stores/color-scheme-store'
  import AppSvgIcon from '@/components/utils/app-svg-icon/AppSvgIcon.vue'
  import { IconName } from '@/types/icon'
  import { ColorScheme } from '@/types/color-scheme'
  import AppDropdown from '@/components/utils/app-dropdown/AppDropdown.vue'
  import { reactive } from 'vue'
  import { WindowHelper } from '@/helpers/window-helper'

  const COLOR_SCHEME_DARK_QUERY = '(prefers-color-scheme:dark)'
  const state = reactive<{ isDarkPreferred: boolean; }>({
    isDarkPreferred: WindowHelper.window?.matchMedia(COLOR_SCHEME_DARK_QUERY).matches ?? false
  })

  const colorSchemeStore = useColorSchemeStore()

  const getIconName = (colorScheme: ColorScheme): IconName => {
    switch (colorScheme) {
      case ColorScheme.dark:
        return IconName.MOON

      case ColorScheme.light:
        return IconName.SUN

      case ColorScheme.system: {
        return state.isDarkPreferred
          ? IconName.MOON
          : IconName.SUN
      }
    }
  }

  const colorSchemes = [
    ColorScheme.light,
    ColorScheme.dark,
    ColorScheme.system
  ]

  const toId = (colorScheme: ColorScheme) => colorScheme

  const watchMedia = () => {
    if (WindowHelper.window) {
      WindowHelper.window.matchMedia(COLOR_SCHEME_DARK_QUERY).onchange = (e: MediaQueryListEvent) => {
        state.isDarkPreferred = e.matches
      }
    }
  }

  watchMedia()
</script>

<template>
  <AppDropdown
    class="app-color-scheme-select"
    :options="colorSchemes"
    :to-id="toId"
    :model-value="colorSchemeStore.colorScheme"
    @update:model-value="colorSchemeStore.updatePreferredColorScheme">
    <template #value>
      <Transition
        name="opacity-out-in-transition"
        mode="out-in">
        <AppSvgIcon
          class="scheme-option-icon"
          :icon-name="getIconName(colorSchemeStore.colorScheme)" />
      </Transition>
    </template>
    <template #list-item="{ option }">
      <div class="scheme-option">
        <AppSvgIcon
          class="scheme-option-icon"
          :icon-name="getIconName(option as ColorScheme)" />
        <span>{{ $t(`misc.${option}`) }}</span>
      </div>
    </template>
  </AppDropdown>
</template>

<style lang="scss" scoped>
  @use '@/styles/utils/functions.scss' as fun;

  .app-color-scheme-switcher-icon {
    cursor: pointer;
  }

  .scheme-option {
    display: flex;
    align-items: center;
    gap: fun.space(4);
  }
</style>
