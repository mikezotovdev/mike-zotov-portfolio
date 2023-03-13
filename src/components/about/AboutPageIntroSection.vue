<script setup lang="ts">
  import CvLinkEn from '@/components/cv-link/CvLinkEn.vue'
  import CvLinkRu from '@/components/cv-link/CvLinkRu.vue'
  import AppExternalLink from '@/components/utils/app-external-link/AppExternalLink.vue'
</script>

<template>
  <section class="about-page-intro-section">
    <div class="name-block">
      <h1 class="name-block-title">
        <span class="name-block-title-item">{{ $t('welcomeSection.mike') }}</span>
        <span class="name-block-title-item">{{ $t('welcomeSection.zotov') }}</span>
      </h1>

      <p class="name-block-subtitle">
        {{ $t('welcomeSection.shortTitle') }}
      </p>
    </div>

    <ul class="about-page-intro-section-list anchors-list">
      <li class="anchors-list-item">
        <RouterLink
          class="anchors-list-item-link is-yellow button is-fold"
          to="#about">
          {{ $t('welcomeSection.about') }}
        </RouterLink>
      </li>
      <li class="anchors-list-item">
        <RouterLink
          class="anchors-list-item-link is-green button is-fold"
          to="#projects">
          {{ $t('welcomeSection.projects') }}
        </RouterLink>
      </li>
      <li class="anchors-list-item">
        <RouterLink
          class="anchors-list-item-link is-blue button is-fold"
          to="#skills">
          {{ $t('welcomeSection.skills') }}
        </RouterLink>
      </li>
      <li class="anchors-list-item">
        <RouterLink
          class="anchors-list-item-link is-red button is-fold"
          to="#contacts">
          {{ $t('welcomeSection.contacts') }}
        </RouterLink>
      </li>
    </ul>

    <ul class="about-page-intro-section-list contacts-details">
      <li class="contacts-details-item">
        <a href="mailto:mikezotovdev@gmail.com">mikezotovdev@gmail.com</a>
      </li>
      <li class="contacts-details-item">
        <AppExternalLink href="https://www.linkedin.com/in/mike-zotov/">
          {{ $t('contactsSection.linkedInBase') }}
        </AppExternalLink>
      </li>
      <li class="contacts-details-item">
        <CvLinkEn />
      </li>
      <li class="contacts-details-item">
        <CvLinkRu />
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
  @use '@/styles/utils/functions.scss' as fun;
  @use '@/styles/utils/variables.scss' as var;
  @use '@/styles/utils/mixins.scss' as mixins;

  $grid-breakpoint: 600px;

  // grid layout
  .about-page-intro-section {
    display: grid;
    grid-template:
      'name anchors'
      'name contacts'
      /
      auto;
    column-gap: fun.space(5);

    @media screen and (max-width: $grid-breakpoint) {
      grid-template:
        'name name'
        'anchors contacts'
        /
        auto 1fr;
      column-gap: fun.space(12);
      row-gap: fun.space(10);
    }

    @include mixins.mobile {
      column-gap: fun.space(5);
    }

    .name-block {
      grid-area: name;
    }

    .anchors-list {
      grid-area: anchors;
    }

    .contacts-details {
      grid-area: contacts;
    }
  }

  .name-block-title {
    font-size: 18vw;
    line-height: 100%;
    text-transform: uppercase;
    font-weight: 400;
    font-family: "Circe Light", sans-serif;
    letter-spacing: -1vw;
    margin-bottom: fun.space(4);
    user-select: none;

    @media screen and (max-width: $grid-breakpoint) {
      font-size: 25vw;
    }

    @media screen and (min-width: var.$max-screen-width) {
      font-size: 259px;
    }

    .name-block-title-item {
      display: block;
    }
  }

  .name-block-subtitle {
    @include mixins.text-h4;
  }

  .about-page-intro-section-list {
    display: flex;
    flex-flow: column;

    @include mixins.tablet {
      @include mixins.text-small;
    }

    @media screen and (max-width: $grid-breakpoint) {
      @include mixins.text-paragraph;
    }

    @include mixins.mobile {
      @include mixins.text-tiny;
    }
  }

  .anchors-list {
    gap: fun.space(2);

    .anchors-list-item-link {
      color: var(--font-color);
      padding: 2px fun.space(2);
      @include mixins.text-no-underline-on-hover;

      &.is-yellow {
        background-color: var(--color-yellow);
      }

      &.is-green {
        background-color: var(--color-green);
      }

      &.is-blue {
        background-color: var(--color-blue);
      }

      &.is-red {
        background-color: var(--color-red);
      }
    }
  }

  .contacts-details {
    gap: fun.space(3);
  }
</style>
