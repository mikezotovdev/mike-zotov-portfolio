<script setup lang="ts">
  import AppPage from '@/components/utils/app-page/AppPage.vue'
  import AppQuote from '@/components/utils/app-quote/AppQuote.vue'
  import { IconName } from '@/types/icon'
  import AboutPageIntroSection from '@/components/about/AboutPageIntroSection.vue'
  import AboutPageProjectsSection from '@/components/about/AboutPageProjectsSection.vue'
  import AboutPageContactsSection from '@/components/about/AboutPageContactsSection.vue'
  import AboutPageBriefSection from '@/components/about/AboutPageBriefSection.vue'
  import { useRouter } from 'vue-router'
  import AboutPageSkillsSection from '@/components/about/AboutPageSkillsSection.vue'

  const router = useRouter()

  const navigateToAboutSection = () => {
    router.push('#about')
  }
</script>

<template>
  <AppPage class="about-page">
    <AboutPageIntroSection class="about-page-section is-intro" />

    <AppQuote
      class="about-page-section is-quote"
      :icon-name="IconName.ARROW_DOWN"
      :is-animated="true"
      @icon-click="navigateToAboutSection">
      {{ $t('welcomeSection.brief') }}
    </AppQuote>

    <AboutPageBriefSection class="about-page-section is-brief" />

    <AboutPageProjectsSection class="about-page-section is-projects" />

    <AboutPageSkillsSection class="about-page-section is-skills" />

    <AboutPageContactsSection class="about-page-section is-contacts" />
  </AppPage>
</template>

<style lang="scss" scoped>
  @use '@/styles/utils/functions.scss' as fun;
  @use '@/styles/utils/mixins.scss' as mixins;

  .about-page {
    .about-page-section {
      margin-bottom: fun.space(50);

      @include mixins.tablet {
        margin-bottom: fun.space(25);
      }
    }
  }
</style>
