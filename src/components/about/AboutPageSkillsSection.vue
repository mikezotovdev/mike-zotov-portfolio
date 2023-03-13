<script setup lang="ts">
  import { Color } from '@/types/color'
  import AppSection from '@/components/utils/app-section/AppSection.vue'
  import AppTitledList from '@/components/utils/app-titled-list/AppTitledList.vue'
</script>

<template>
  <AppSection
    class="about-page-skills-section"
    id="skills"
    :color="Color.BLUE">
    <template #title>
      {{ $t('skillsSection.skills') }}
    </template>

    <div class="about-page-skills-section-content">
      <div class="skills-titled-list-group">
        <AppTitledList
          class="skills-titled-list is-programming-languages"
          :items="$tm('skillsSection.skillsList.programmingLanguages') as string[]">
          {{ $t('skillsSection.skillsTitles.programmingLanguages') }}
        </AppTitledList>
        <AppTitledList
          class="skills-titled-list is-verbal-languages"
          :items="$tm('skillsSection.skillsList.verbalLanguages') as string[]">
          {{ $t('skillsSection.skillsTitles.verbalLanguages') }}
        </AppTitledList>
      </div>
      <AppTitledList
        class="skills-titled-list is-frameworks"
        :items="$tm('skillsSection.skillsList.frameworksAndTechnologies') as string[]">
        {{ $t('skillsSection.skillsTitles.frameworksAndTechnologies') }}
      </AppTitledList>
      <AppTitledList
        class="skills-titled-list is-libraries"
        :items="$tm('skillsSection.skillsList.librariesAndPlugins') as string[]">
        {{ $t('skillsSection.skillsTitles.librariesAndPlugins') }}
      </AppTitledList>
      <AppTitledList
        class="skills-titled-list is-soft-skills"
        :items="$tm('skillsSection.skillsList.softSkills') as string[]">
        {{ $t('skillsSection.skillsTitles.softSkills') }}
      </AppTitledList>
    </div>
  </AppSection>
</template>

<style lang="scss" scoped>
  @use '@/styles/utils/functions.scss' as fun;
  @use '@/styles/utils/mixins.scss' as mixins;

  // grid layout
  .about-page-skills-section-content {
    display: grid;
    grid-template:
      'languages frameworks libraries skills'
      /
      1fr 1fr 1fr 1fr;
    column-gap: fun.space(5);
    row-gap: fun.space(10);

    @include mixins.tablet {
      grid-template:
        'languages frameworks'
        'libraries skills'
        /
        1fr 1fr;
    }

    @include mixins.mobile {
      grid-template:
        'languages'
        'frameworks'
        'libraries'
        'skills'
        /
        1fr;
    }

    .skills-titled-list-group {
      grid-area: languages;
      display: flex;
      flex-flow: column;
      gap: fun.space(8);
    }

    .skills-titled-list {
      &.is-frameworks {
        grid-area: frameworks;
      }

      &.is-libraries {
        grid-area: libraries;
      }

      &.is-soft-skills {
        grid-area: skills;
      }
    }
  }
</style>
