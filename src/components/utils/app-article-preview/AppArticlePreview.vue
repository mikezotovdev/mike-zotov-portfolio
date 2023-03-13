<script setup lang="ts">
  import AppFigure from '@/components/utils/app-figure/AppFigure.vue'
  import type { ImageFileName } from '@/types/resource'
  import type { RouteName } from '@/types/router'

  const props = defineProps<{
    src: ImageFileName | string;
    alt: string;
    link: { name: RouteName | string; };
  }>()
</script>

<template>
  <section class="app-article-preview">
    <span
      v-if="$slots.number"
      class="app-article-preview-number">
      <slot name="number"></slot>
    </span>
    <div class="app-article-preview-image">
      <RouterLink
        class="app-article-preview-image-link"
        tabindex="-1"
        :to="link">
        <AppFigure
          class="app-article-preview-image-link-figure"
          :src="props.src"
          :alt="props.alt" />
      </RouterLink>
    </div>
    <div class="preview-details">
      <RouterLink
        class="preview-details-title"
        :to="link">
        <slot name="title"></slot>
      </RouterLink>
      <p class="preview-details-subtitle">
        <slot name="subtitle"></slot>
      </p>
      <p class="preview-details-description">
        <slot name="description"></slot>
        <RouterLink
          class="preview-details-description-read-more"
          tabindex="-1"
          :to="link">
          {{ $t('misc.readMore') }}
        </RouterLink>
      </p>
      <div class="preview-details-tags">
        <slot name="tags"></slot>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @use '@/styles/utils/functions.scss' as fun;
  @use '@/styles/utils/mixins.scss' as mixins;
  @use 'sass:math';

  $figure-ratio: math.div(1320, 943);
  $figure-max-width: 500px;
  $number-width: 110px;
  $grid-number-remove-breakpoint: 1150px;

  // grid layout
  .app-article-preview {
    display: grid;
    grid-template:
      'number image description'
      /
      $number-width 1fr 1fr;
    gap: fun.space(5);

    @media screen and (width >= 1250px) {
      grid-template-columns: $number-width $figure-max-width 1fr;
    }

    @media screen and (max-width: $grid-number-remove-breakpoint) {
      grid-template:
        'image description'
        /
        1fr 1fr;
    }

    @media screen and (width <= 720px) {
      grid-template:
        'image'
        'description'
        /
        1fr;
    }

    .app-article-preview-number {
      @include mixins.text-xl;
      grid-area: number;
      align-self: center;

      @media screen and (max-width: $grid-number-remove-breakpoint) {
        display: none;
      }
    }

    .app-article-preview-image {
      grid-area: image;
    }
  }

  .app-article-preview-image {
    .app-article-preview-image-link {
      display: block;
      @include mixins.text-no-underline-on-hover;
    }

    .app-article-preview-image-link-figure {
      transition-duration: 0.2s;
      transition-property: transform;
      aspect-ratio: $figure-ratio;
    }

    &:hover {
      .app-article-preview-image-link-figure {
        transform: scale(0.97);
      }
    }

    &:active {
      .app-article-preview-image-link-figure {
        transform: scale(0.96);
      }
    }
  }

  .preview-details {
    grid-area: description;
    display: flex;
    flex-flow: column;

    .preview-details-title {
      margin-bottom: fun.space(2);
      @include mixins.text-h3;
    }

    .preview-details-subtitle {
      margin-bottom: fun.space(5);
    }
  }

  .preview-details-description {
    margin-bottom: fun.space(5);

    .preview-details-description-read-more {
      margin-left: fun.space(1);
    }
  }
</style>
