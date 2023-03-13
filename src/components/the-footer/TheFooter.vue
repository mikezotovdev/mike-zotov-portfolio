<script setup lang="ts">
  import CvLinkEn from '@/components/cv-link/CvLinkEn.vue'
  import CvLinkRu from '@/components/cv-link/CvLinkRu.vue'
</script>

<template>
  <footer class="the-footer">
    <div class="site-info">
      <h2 class="site-info-title">
        {{ $t('mikeZotov') }}
      </h2>
      <p class="site-info-subtitle">
        {{ $t('footer.shortTitle') }}
      </p>
    </div>
    <div class="quick-links">
      <h2 class="quick-links-title">
        {{ $t('footer.links') }}
      </h2>
      <ul class="quick-links-list">
        <li class="quick-links-list-item">
          <RouterLink :to="{name: $t('routeNames.home')}">
            {{ $t('footer.about') }}
          </RouterLink>
        </li>
        <li class="quick-links-list-item">
          <RouterLink :to="{name: $t('routeNames.projects.root')}">
            {{ $t('footer.projects') }}
          </RouterLink>
        </li>
        <li class="quick-links-list-item">
          <RouterLink :to="{name: $t('routeNames.contacts')}">
            {{ $t('footer.contacts') }}
          </RouterLink>
        </li>
        <li class="quick-links-list-item">
          <CvLinkEn />
        </li>
        <li class="quick-links-list-item">
          <CvLinkRu />
        </li>
      </ul>
    </div>
    <p class="the-footer-copyright">
      © 2021 — PRESENT {{ $t('footer.copyright') }}
    </p>
  </footer>
</template>

<style lang="scss" scoped>
  @use '@/styles/utils/functions.scss' as fun;
  @use '@/styles/utils/mixins.scss' as mixins;

  // grid layout
  .the-footer {
    display: grid;
    grid-template:
      'info links'
      'copyright copyright'
      /
      2fr 4fr;
    row-gap: fun.space(5);
    column-gap: fun.space(4);

    @include mixins.tablet {
      grid-template-columns: 1fr 1fr;
    }

    @include mixins.mobile {
      grid-template:
        'info'
        'links'
        'copyright'
        /
        1fr;
    }

    .site-info {
      grid-area: info;
    }

    .quick-links {
      grid-area: links;
    }

    .the-footer-copyright {
      grid-area: copyright;
    }
  }

  .the-footer {
    margin-bottom: fun.space(5);
  }

  .site-info {
    margin-bottom: fun.space(5);

    .site-info-title {
      @include mixins.text-h2;
      margin-bottom: fun.space(10);
    }

    .site-info-subtitle {
      @include mixins.text-small;
    }
  }

  .quick-links {
    .quick-links-title {
      @include mixins.text-h4;
      margin-bottom: fun.space(2);
    }

    .quick-links-list {
      display: flex;
      flex-flow: column;
      gap: fun.space(3);
    }
  }

  .the-footer-copyright {
    @include mixins.text-caption;
  }
</style>
