<script setup lang="ts">
  import AppPage from '@/components/utils/app-page/AppPage.vue'
  import { Color } from '@/types/color'
  import AppFigure from '@/components/utils/app-figure/AppFigure.vue'
  import ContactsAddress from '@/components/contacts-address/ContactsAddress.vue'

  import me from '@/assets/images/me.jpg'
</script>

<template>
  <AppPage
    class="contacts-page"
    :color="Color.RED">
    <template #title>
      {{ $t('contactsSection.contacts') }}
    </template>

    <div class="contacts-page-content">
      <ContactsAddress class="contacts-page-content-address" />

      <AppFigure
        class="contacts-page-content-figure"
        :src="me"
        :alt="$t('aboutSection.aboutBlock.photoAlt')" />
    </div>
  </AppPage>
</template>

<style lang="scss" scoped>
  @use '@/styles/utils/functions.scss' as fun;

  .contacts-page-content {
    display: flex;
    flex-flow: row wrap;
    gap: fun.space(4);

    .contacts-page-content-address {
      flex: 1;
    }

    .contacts-page-content-figure {
      flex-basis: 300px;
    }
  }
</style>
