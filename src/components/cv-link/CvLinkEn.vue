<script setup lang="ts">
  import { Locale } from '@/types/i18n'
  import CvLink from '@/components/cv-link/CvLink.vue'
</script>

<template>
  <CvLink
    class="cv-link-en"
    :locale="Locale.EN" />
</template>
