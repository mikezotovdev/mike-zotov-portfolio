<template>
  <article class="app-article">
    <h1 class="app-article-title">
      <slot name="title"></slot>
    </h1>

    <div class="app-article-main">
      <h2 class="app-article-subtitle">
        {{ $t('projectPage.clientAndChallenge') }}
      </h2>
      <div class="app-article-text-block">
        <slot name="client-and-task"></slot>
      </div>

      <h2 class="app-article-subtitle">
        {{ $t('projectPage.technologiesAndSolutions') }}
      </h2>
      <div class="app-article-text-block">
        <slot name="technologies"></slot>
      </div>

      <h2 class="app-article-subtitle">
        {{ $t('projectPage.results') }}
      </h2>
      <div class="app-article-text-block">
        <slot name="results"></slot>
      </div>
    </div>

    <div
      v-if="$slots.screenshots"
      class="app-article-misc">
      <h2 class="app-article-subtitle">
        {{ $t('projectPage.screenshots') }}
      </h2>
      <div class="app-article-misc-screenshots">
        <slot name="screenshots"></slot>
      </div>
    </div>

    <aside class="app-article-aside">
      <h2 class="app-article-aside-subtitle">
        {{ $t('projectPage.position') }}
      </h2>
      <div class="app-article-aside-block">
        <slot name="position"></slot>
      </div>

      <h2 class="app-article-aside-subtitle">
        {{ $t('projectPage.technologyStack') }}
      </h2>
      <div class="app-article-aside-block">
        <slot name="technologies-stack"></slot>
      </div>

      <h2 class="app-article-aside-subtitle">
        {{ $t('projectPage.toolsStack') }}
      </h2>
      <div class="app-article-aside-block">
        <slot name="tools-stack"></slot>
      </div>

      <template v-if="$slots.links">
        <h2 class="app-article-aside-subtitle">
          {{ $t('projectPage.links') }}
        </h2>
        <div class="app-article-aside-block">
          <slot name="links"></slot>
        </div>
      </template>
    </aside>
  </article>
</template>

<style lang="scss" scoped>
  @use '@/styles/utils/functions.scss' as fun;
  @use '@/styles/utils/mixins.scss' as mixins;

  $content-block-space: fun.space(8);

  // grid layout
  .app-article {
    display: grid;
    grid-template:
      'title title'
      'main aside'
      'misc misc'
      /
      2fr 1fr;
    column-gap: fun.space(15);

    @include mixins.tablet {
      grid-template:
        'title'
        'main'
        'misc'
        'aside'
        /
        1fr;
    }

    .app-article-title {
      grid-area: title;
    }

    .app-article-main {
      grid-area: main;
    }

    .app-article-misc {
      grid-area: misc;
    }

    .app-article-aside {
      grid-area: aside;
    }
  }

  // main
  .app-article-title {
    @include mixins.text-h1;
    margin-bottom: fun.space(12);
  }

  .app-article-subtitle {
    @include mixins.text-h2;
    margin-bottom: fun.space(5);
  }

  .app-article-text-block {
    margin-bottom: $content-block-space;
  }

  .app-article-misc-screenshots {
    display: flex;
    flex-flow: row wrap;
    gap: fun.space(5);
    margin-bottom: 0;

    :slotted(> .app-figure) {
      flex: 1 0 350px;

      @include mixins.mobile {
        flex-basis: 0;
      }
    }

    @include mixins.tablet {
      margin-bottom: $content-block-space;
    }
  }

  // aside
  .app-article-aside-subtitle {
    @include mixins.text-h3;
    margin-bottom: fun.space(4);
  }

  .app-article-aside-block {
    margin-bottom: $content-block-space;
  }
</style>
