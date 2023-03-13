<script setup lang="ts">
  import AppDropdown from '@/components/utils/app-dropdown/AppDropdown.vue'
  import { Locale, LOCALE_NAME } from '@/types/i18n'
  import { useI18nStore } from '@/stores/i18n-store'
  import { computed } from 'vue'
  import type { RouteName } from '@/types/router'
  import { useRouter } from 'vue-router'

  const i18nStore = useI18nStore()
  const router = useRouter()

  const options = computed(() => {
    if (!i18nStore.routes) {
      return []
    }

    const entries = Object.entries(i18nStore.routes) as Array<[Locale, { name: RouteName; }]>

    return entries.map(([key, route]) => {
      return {
        id: key,
        text: LOCALE_NAME[key],
        route
      }
    })
  })

  const modelValue = computed(() => {
    return {
      id: i18nStore.locale,
      text: LOCALE_NAME[i18nStore.locale]
    }
  })

  const navigateToRoute = (option: { route: { name: RouteName; }; }) => {
    router.push(option.route)
  }
</script>

<template>
  <AppDropdown
    class="app-locale-select"
    :options="options"
    :model-value="modelValue"
    @update:model-value="navigateToRoute">
    <template #list-item="{option}">
      <RouterLink
        class="app-locale-select-link"
        :to="option.route"
        @click.prevent>
        {{ option.text }}
      </RouterLink>
    </template>
  </AppDropdown>
</template>

<style lang="scss" scoped>
  @use '@/styles/utils/mixins.scss' as mixins;

  .app-locale-select-link {
    color: var(--font-color);
    @include mixins.text-no-underline-on-hover;
  }
</style>
