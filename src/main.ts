import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { routes, scrollBehavior } from './router'
import { createPinia } from 'pinia'
import './styles/styles.scss'
import { i18n } from './i18n/i18n'
import {
  endProgress,
  setI18nRoutes,
  startProgress,
  syncLocaleByRouteMetaHook,
  updateMetaHook,
  updateThemeHook
} from './router/hooks/hooks'
import 'virtual:svg-icons-register'

export const createApp = ViteSSG(
  App,
  { routes, scrollBehavior, strict: true },
  ({ app, router }) => {
    const pinia = createPinia()

    app.use(pinia)
    app.use(i18n)

    router.beforeEach(startProgress)
    router.beforeEach(syncLocaleByRouteMetaHook)
    router.beforeEach(updateMetaHook)

    router.afterEach(setI18nRoutes)
    router.afterEach(updateThemeHook)
    router.afterEach(endProgress)
  }
)
