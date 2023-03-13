<script setup lang="ts">
  import { Color } from '@/types/color'
  import AppSection from '@/components/utils/app-section/AppSection.vue'
  import me from '@/assets/images/me.jpg'
  import AppFigure from '@/components/utils/app-figure/AppFigure.vue'
</script>

<template>
  <AppSection
    class="about-page-brief-details"
    id="about"
    :color="Color.YELLOW">
    <template #title>
      {{ $t('aboutSection.about') }}
    </template>

    <div class="brief-details">
      <p class="brief-details-paragraph is-p1">
        {{ $t('aboutSection.aboutBlock.p1') }}
      </p>
      <p class="brief-details-paragraph is-p2">
        {{ $t('aboutSection.aboutBlock.p2') }}
      </p>

      <AppFigure
        class="brief-details-figure"
        :src="me"
        :alt="$t('aboutSection.aboutBlock.photoAlt')" />
    </div>

    <div class="achievements-details">
      <h3 class="achievements-details-title">
        {{ $t('aboutSection.aboutBlock.education') }}
      </h3>
      <ul class="achievements-details-list">
        <li class="achievements-details-list-item">
          <i>2020-2022: </i>
          <span>{{ $t('aboutSection.aboutBlock.educationList.p1') }}</span>
        </li>
        <li class="achievements-details-list-item">
          <i>2015-2017: </i>
          <span>{{ $t('aboutSection.aboutBlock.educationList.p2') }}</span>
        </li>
        <li class="achievements-details-list-item">
          <i>2011-2015: </i>
          <span>{{ $t('aboutSection.aboutBlock.educationList.p3') }}</span>
        </li>
      </ul>
    </div>
  </AppSection>
</template>

<style lang="scss" scoped>
  @use '@/styles/utils/functions.scss' as fun;
  @use '@/styles/utils/mixins.scss' as mixins;

  $grid-breakpoint: 1000px;

  // grid layout
  .brief-details {
    display: grid;
    grid-template:
      'p1 image'
      'p2 image'
      'p3 p3'
      /
      auto;
    column-gap: fun.space(20);

    @media screen and (width <= $grid-breakpoint) {
      grid-template:
        'p1 image'
        'p2 p2'
        'p3 p3'
        /
        auto;
    }

    @include mixins.tablet {
      grid-template:
        'image'
        'p1'
        'p2'
        'p3'
        /
        auto;
      column-gap: fun.space(5);
    }

    .brief-details-paragraph {
      &.is-p1 {
        grid-area: p1;
      }

      &.is-p2 {
        grid-area: p2;
      }
    }

    .brief-details-figure {
      grid-area: image;
    }
  }

  .brief-details,
  .achievements-details {
    @include mixins.text-h4;

    @include mixins.mobile {
      @include mixins.text-paragraph;
    }
  }

  .brief-details {
    .brief-details-paragraph {
      margin-bottom: fun.space(6);
    }

    .brief-details-figure {
      max-width: 300px;

      @media screen and (width <= $grid-breakpoint) {
        margin-bottom: fun.space(6);
      }

      @include mixins.tablet {
        justify-self: center;
      }
    }
  }

  .achievements-details {
    .achievements-details-title {
      margin-bottom: fun.space(5);
    }
  }
</style>
