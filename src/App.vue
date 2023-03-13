<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import TheFooter from '@/components/the-footer/TheFooter.vue'
  import TheHeader from '@/components/the-header/TheHeader.vue'
  import { useI18nStore } from '@/stores/i18n-store'
  import TheLoading from '@/components/the-loading/TheLoading.vue'
  import TheProgress from '@/components/the-progress/TheProgress.vue'
  import { useProgressStore } from '@/stores/progress-store'

  const i18nStore = useI18nStore()
  const progressStore = useProgressStore()
</script>

<template>
  <Transition
    name="opacity-transition"
    mode="in-out">
    <TheProgress v-if="progressStore.isLoading" />
  </Transition>

  <TheHeader />

  <main class="main">
    <RouterView v-slot="{ Component }">
      <Transition
        name="opacity-out-in-transition"
        mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </main>

  <TheFooter />

  <Transition
    name="opacity-transition"
    mode="in-out">
    <TheLoading v-if="i18nStore.isLoading" />
  </Transition>
</template>

<style lang="scss" scoped>
  @use '@/styles/utils/functions.scss' as fun;
  @use '@/styles/utils/variables.scss' as var;
  @use '@/styles/utils/mixins.scss' as mixins;

  :global(#app) {
    max-width: var.$max-screen-width;
    margin: 0 auto;
    padding: 0 fun.space(16);

    @include mixins.tablet {
      padding: 0 fun.space(5);
    }
  }

  .main {
    margin: fun.space(13) 0 fun.space(30);

    @include mixins.tablet {
      margin-top: fun.space(8);
    }
  }
</style>
