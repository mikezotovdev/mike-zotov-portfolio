<script setup lang="ts">
  import AppExternalLink from '@/components/utils/app-external-link/AppExternalLink.vue'
  import CvLinkEn from '@/components/cv-link/CvLinkEn.vue'
  import CvLinkRu from '@/components/cv-link/CvLinkRu.vue'
</script>

<template>
  <address class="contacts-address">
    <ul class="contacts-address-list">
      <li class="contacts-address-list-item">
        <span>{{ $t('contactsSection.email') }}</span>
        <a href="mailto:mikezotovdev@gmail.com">mikezotovdev@gmail.com</a>
      </li>
      <li class="contacts-address-list-item">
        <span>{{ $t('contactsSection.linkedIn') }}</span>
        <AppExternalLink href="https://www.linkedin.com/in/mike-zotov/">
          https://www.linkedin.com/in/mike-zotov/
        </AppExternalLink>
      </li>

      <li class="contacts-address-list-item">
        <CvLinkEn />
      </li>
      <li class="contacts-address-list-item">
        <CvLinkRu />
      </li>
    </ul>
  </address>
</template>

<style lang="scss" scoped>
  @use '@/styles/utils/functions.scss' as fun;

  .contacts-address-list {
    display: flex;
    flex-flow: column;
    gap: fun.space(4);
  }
</style>
