<script setup lang="ts">
  import AppPage from '@/components/utils/app-page/AppPage.vue'
  import AppSvgIcon from '@/components/utils/app-svg-icon/AppSvgIcon.vue'
  import { IconName } from '@/types/icon'
</script>

<template>
  <AppPage class="not-found-page">
    <div class="not-found-content">
      <h1 class="not-found-content-title">
        404
      </h1>
      <p class="not-found-content-description">
        {{ $t('notFoundPage.notFound') }}
      </p>

      <div class="bouncing-boys">
        <AppSvgIcon
          class="bouncing-boys-icon is-yellow"
          :icon-name="IconName.BOY_YELLOW" />
        <AppSvgIcon
          class="bouncing-boys-icon is-green"
          :icon-name="IconName.BOY_GREEN" />
        <AppSvgIcon
          class="bouncing-boys-icon is-red"
          :icon-name="IconName.BOY_RED" />
      </div>
    </div>
  </AppPage>
</template>

<style lang="scss" scoped>
  @use '@/styles/utils/functions.scss' as fun;
  @use '@/styles/utils/mixins.scss' as mixins;

  @keyframes bounce-yellow {
    from {
      transform: translateY(0);
    }

    to {
      transform: translateY(-20px);
    }
  }

  @keyframes bounce-green {
    from {
      transform: translateY(0);
    }

    to {
      transform: translateY(-30px);
    }
  }

  @keyframes bounce-red {
    from {
      transform: translateY(0);
    }

    to {
      transform: translateY(-40px);
    }
  }

  // grid layout
  .not-found-content {
    display: grid;
    grid-template:
      'title title'
      'description boys'
      /
      1fr 1fr;
    column-gap: fun.space(20);

    @include mixins.tablet {
      grid-template:
        'title'
        'boys'
        'description'
        /
        1fr;
      row-gap: fun.space(10);
    }

    .not-found-content-title {
      grid-area: title;
    }

    .not-found-content-description {
      grid-area: description;
    }

    .bouncing-boys {
      grid-area: boys;
    }
  }

  .not-found-content {
    .not-found-content-title {
      font-size: 30vw;
      line-height: 100%;
      margin-bottom: fun.space(10);

      @include mixins.tablet {
        font-size: 40vw;
      }

      @include mixins.mobile {
        font-size: 50vw;
      }
    }

    .not-found-content-description {
      @include mixins.text-h2;
    }
  }

  .bouncing-boys {
    display: flex;
    gap: fun.space(7);

    .bouncing-boys-icon {
      animation: alternate infinite cubic-bezier(0.2, 0.65, 0.6, 1);
      width: 80px;
      height: 80px;

      @include mixins.mobile {
        width: 60px;
        height: 60px;
      }

      &.is-yellow {
        animation-name: bounce-yellow;
        animation-duration: 200ms;
      }

      &.is-green {
        animation-name: bounce-green;
        animation-duration: 300ms;
      }

      &.is-red {
        animation-name: bounce-red;
        animation-duration: 400ms;
      }

    }
  }
</style>
