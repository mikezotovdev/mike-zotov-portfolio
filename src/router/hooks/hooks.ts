import { useI18nStore } from '@/stores/i18n-store'
import type { RouteLocation } from 'vue-router'
import { useProgressStore } from '@/stores/progress-store'
import { ThemeHelper } from '@/helpers/theme-helper'
import { useHead, useSeoMeta } from '@vueuse/head'

export const startProgress = () => {
  const progressStore = useProgressStore()

  progressStore.start()
}

export const endProgress = () => {
  const progressStore = useProgressStore()

  progressStore.end()
}

export const updateThemeHook = async (to: RouteLocation) => {
  const meta = to.meta

  await ThemeHelper.setTheme(meta.theme)
}

export const syncLocaleByRouteMetaHook = async (to: RouteLocation) => {
  const i18nStore = useI18nStore()

  const { locale } = to.meta

  await i18nStore.updateLocale(locale)
}

export const updateMetaHook = (to: RouteLocation) => {
  const meta = to.meta
  const {
    locale,
    title,
    description,
    applicationName,
    robots,
    siteName,
    image,
    url
  } = meta

  useHead({
    htmlAttrs: {
      lang: locale
    },
    title,
    meta: [
      // TODO: add manifest
      { name: 'description', content: description },
      { name: 'application-name', content: applicationName },
      { name: 'robots', content: robots },
      { name: 'googlebot', content: robots }
    ]
  })

  useSeoMeta({
    twitterImage: image,
    twitterTitle: title,
    twitterDescription: description,

    // open graph meta
    ogImage: image,
    ogLocale: locale,
    ogSiteName: siteName,
    ogUrl: url,
    ogTitle: title,
    ogDescription: description
  })
}

export const setI18nRoutes = (to: RouteLocation) => {
  const { i18n } = to.meta

  useI18nStore().setComplementRoutes(i18n)
}
