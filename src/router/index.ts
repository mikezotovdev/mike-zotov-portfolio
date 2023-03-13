import type { RouteRecordRaw, RouterScrollBehavior } from 'vue-router'
import { ROUTES_RU } from '@/router/routes/routes-ru'
import { ROUTES_EN } from '@/router/routes/routes-en'
import { ROUTES_NOT_FOUND } from '@/router/routes/routes-not-found'
import { RouteName } from '@/types/router'
import { TimeoutHelper } from '@/helpers/timeout-helper'

export const routes: RouteRecordRaw[] = [
  ...ROUTES_EN,
  ...ROUTES_RU,
  ...ROUTES_NOT_FOUND,
  {
    path: '/:pathMatch(.*)*',
    redirect (to) {
      if (!to.fullPath.endsWith('/')) {
        return `${to.fullPath}/`
      }

      // old routes had /en/ prefix, now they don't => redirect
      if (to.fullPath.startsWith('/en/')) {
        return to.fullPath.slice(3)
      }

      if (to.path === '/kontakty/') {
        return `/ru${to.fullPath}`
      }

      if (to.path.startsWith('/proekty/')) {
        return `/ru${to.fullPath}`
      }

      if (to.fullPath.startsWith('/ru/')) {
        return { name: RouteName.NOT_FOUND_RU }
      }

      return { name: RouteName.NOT_FOUND_EN }
    }
  }
]

export const scrollBehavior: RouterScrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition
  }

  if (to.hash) {
    return {
      el: to.hash,
      behavior: 'smooth'
    }
  }

  return new Promise(resolve => {
    TimeoutHelper.create(() => {
      resolve({ left: 0, top: 0 })
    }, 150)
  })
}
