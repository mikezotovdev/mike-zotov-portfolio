<script setup lang="ts">
  import { Color } from '@/types/color'
  import AppSection from '@/components/utils/app-section/AppSection.vue'
  import ContactsAddress from '@/components/contacts-address/ContactsAddress.vue'
</script>

<template>
  <AppSection
    class="about-page-contacts-section"
    id="contacts"
    :color="Color.RED">
    <template #title>
      {{ $t('contactsSection.contacts') }}
    </template>

    <ContactsAddress />
  </AppSection>
</template>
