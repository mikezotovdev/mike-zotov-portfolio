import { defineStore } from 'pinia'
import { i18n } from '@/i18n/i18n'
import { Locale } from '@/types/i18n'
import type { ComplementI18nRoutes } from '@/types/router'
import { GeneralHelper } from '@/helpers/general-helper'
import { DocumentHelper } from '@/helpers/document-helper'

interface I18nState {
  isLoading: boolean;

  routes: ComplementI18nRoutes | null;
}

export const useI18nStore = defineStore('i18n', {
  state: (): I18nState => ({
    isLoading: false,

    routes: null
  }),
  getters: {
    locale () {
      return i18n.global.locale.value as Locale
    }
  },
  actions: {
    async initMessages (locale: Locale) {
      if (!GeneralHelper.isEmpty(i18n.global.getLocaleMessage(locale))) {
        return
      }

      this.isLoading = true

      try {
        const { MESSAGES } = await import(`@/i18n/locales/${locale}.ts`)

        i18n.global.setLocaleMessage(locale, MESSAGES)
      } catch (e) {
        console.error(`Unable to load locale ${locale}`, e)
        throw e
      } finally {
        this.isLoading = false
      }
    },
    setLocale (locale: Locale) {
      i18n.global.locale.value = locale

      if (DocumentHelper.document) {
        DocumentHelper.document.documentElement.lang = locale
      }
    },
    async updateLocale (locale: Locale) {
      try {
        await this.initMessages(locale)
        this.setLocale(locale)
      } catch {
        await this.initMessages(Locale.EN)
        this.setLocale(Locale.EN)
      }
    },

    setComplementRoutes (routes: ComplementI18nRoutes) {
      this.routes = routes
    }
  }
})
