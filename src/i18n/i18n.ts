import { createI18n } from 'vue-i18n'
import { Locale } from '@/types/i18n'

export const i18n = createI18n({
  legacy: false,
  fallbackLocale: Locale.EN,
  messages: {}
})
