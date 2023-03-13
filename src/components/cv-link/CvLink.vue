<script setup lang="ts">
  import { Locale } from '@/types/i18n'

  const props = defineProps<{
    locale: Locale;
  }>()
</script>

<template>
  <a
    v-if="props.locale === Locale.EN"
    class="cv-link"
    target="_blank"
    download="Mike Zotov - Senior Front-end Developer.pdf"
    href="/Mike-Zotov-Senior-Front-end-Developer.pdf">
    {{ $t('misc.cvEng') }}
  </a>
  <a
    v-else-if="props.locale === Locale.RU"
    class="cv-link"
    target="_blank"
    download="Михаил Зотов - Ведущий Фронтенд Разработчик.pdf"
    href="/Misha-Zotov-Vedushhij-Frontend-Razrabotchik.pdf">
    {{ $t('misc.cvRus') }}
  </a>
</template>
