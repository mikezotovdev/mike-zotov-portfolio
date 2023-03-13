<script setup lang="ts">
  import ProjectsListPreview from '@/components/projects-list-preview/ProjectsListPreview.vue'
  import { Color } from '@/types/color'
  import AppSection from '@/components/utils/app-section/AppSection.vue'
</script>

<template>
  <AppSection
    class="about-page-projects-section"
    id="projects"
    :color="Color.GREEN">
    <template #title>
      {{ $t('projectsPage.project') }}
    </template>

    <ProjectsListPreview :is-header="false" />
  </AppSection>
</template>
