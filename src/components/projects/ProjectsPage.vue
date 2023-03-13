<script setup lang="ts">
  import AppPage from '@/components/utils/app-page/AppPage.vue'
  import { Color } from '@/types/color'
  import ProjectsListPreview from '@/components/projects-list-preview/ProjectsListPreview.vue'
</script>

<template>
  <AppPage
    class="projects-page"
    :color="Color.GREEN">
    <template #title>
      {{ $t('projectsPage.project') }}
    </template>

    <ProjectsListPreview :is-extra-projects-shown="true" />
  </AppPage>
</template>
