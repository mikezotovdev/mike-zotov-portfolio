<script setup lang="ts">
  import AppColorSchemeSelect from '@/components/utils/app-color-scheme-switcher/AppColorSchemeSelect.vue'
  import AppLocaleSelect from '@/components/utils/app-locale-select/AppLocaleSelect.vue'
  import AppTextColorLine from '@/components/utils/app-text-color-line/AppTextColorLine.vue'
  import { useRoute } from 'vue-router'
  import { ColorLineType } from '@/types/color-line-type'
  import { Color } from '@/types/color'
  import type { RouteName } from '@/types/router'
  import { reactive } from 'vue'
  import AppSvgIcon from '@/components/utils/app-svg-icon/AppSvgIcon.vue'
  import { IconName } from '@/types/icon'
  import CvLinkEn from '@/components/cv-link/CvLinkEn.vue'
  import CvLinkRu from '@/components/cv-link/CvLinkRu.vue'

  const route = useRoute()

  const state = reactive({
    isOpen: false
  })

  const toggleMenu = () => {
    state.isOpen = !state.isOpen
  }

  const closeMenu = () => {
    state.isOpen = false
  }

  const isActiveRoute = (routeName: RouteName | string) => {
    return route.name === routeName
  }
</script>

<template>
  <header class="the-header">
    <AppColorSchemeSelect class="the-header-scheme-select" />
    <AppLocaleSelect />

    <button
      class="the-header-menu-toggle button is-icon"
      type="button"
      @click="toggleMenu">
      <Transition
        name="opacity-out-in-transition"
        mode="out-in">
        <AppSvgIcon
          v-if="!state.isOpen"
          :icon-name="IconName.HAMBURGER" />
        <AppSvgIcon
          v-else
          :icon-name="IconName.CROSS" />
      </Transition>
    </button>

    <div
      class="the-header-links"
      :class="{'is-open': state.isOpen}">
      <ul class="links-list">
        <li class="links-list-item">
          <AppTextColorLine
            class="links-list-item-link"
            is="RouterLink"
            :type="ColorLineType.SMALL"
            :color="Color.YELLOW"
            :is-active="isActiveRoute($t('routeNames.home'))"
            :to="{name: $t('routeNames.home')}"
            @click="closeMenu()">
            {{ $t('footer.about') }}
          </AppTextColorLine>
        </li>
        <li class="links-list-item">
          <AppTextColorLine
            class="links-list-item-link"
            is="RouterLink"
            :type="ColorLineType.SMALL"
            :color="Color.GREEN"
            :is-active="isActiveRoute($t('routeNames.projects.root'))"
            :to="{name: $t('routeNames.projects.root')}"
            @click="closeMenu()">
            {{ $t('footer.projects') }}
          </AppTextColorLine>
        </li>
        <li class="links-list-item">
          <AppTextColorLine
            class="links-list-item-link"
            is="RouterLink"
            :type="ColorLineType.SMALL"
            :color="Color.RED"
            :is-active="isActiveRoute($t('routeNames.contacts'))"
            :to="{name: $t('routeNames.contacts')}"
            @click="closeMenu()">
            {{ $t('footer.contacts') }}
          </AppTextColorLine>
        </li>

        <li class="links-list-item is-cvs">
          <ul class="cv-list">
            <li class="cv-list-item">
              <CvLinkEn />
            </li>
            <li class="cv-list-item">
              <CvLinkRu />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </header>
</template>

<style lang="scss" scoped>
  @use '@/styles/utils/functions.scss' as fun;
  @use '@/styles/utils/mixins.scss' as mixins;

  $header-padding: fun.space(7);

  .the-header {
    position: relative;
    display: flex;
    gap: fun.space(8);
    align-items: center;
    padding: $header-padding 0;
    z-index: 1;

    .the-header-scheme-select {
      align-self: start;
      z-index: 1;
    }

    .the-header-menu-toggle {
      display: none;
      z-index: 2;

      @include mixins.mobile {
        position: fixed;
        display: block;
        top: $header-padding;
        right: fun.space(5);
      }
    }
  }

  .links-list {
    display: flex;
    gap: fun.space(8);
  }

  .the-header-links {
    @include mixins.mobile {
      position: fixed;
      left: 0;
      top: 0;
      height: 100vh;
      width: 100vw;
      display: flex;
      flex-flow: column;
      justify-content: center;
      padding-left: fun.space(12);
      z-index: 1;
      background-color: var(--app-background);
      gap: fun.space(7);
      transition: transform 0.3s 0.05s;
      transform: translateX(100%);
      @include mixins.text-h4;

      &.is-open {
        transform: translateX(0);
      }

      .links-list {
        flex-flow: column;
      }

      .cv-list {
        display: flex;
        flex-flow: column;
        gap: fun.space(4);
        @include mixins.text-paragraph;
      }
    }
  }

  .links-list-item {
    &.is-cvs {
      display: none;
      margin-top: fun.space(5);

      @include mixins.mobile {
        display: block;
      }
    }

    .links-list-item-link {
      color: var(--font-color);
      @include mixins.text-no-underline-on-hover;
    }
  }
</style>
