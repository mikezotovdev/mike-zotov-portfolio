import { RouteName } from '@/types/router'
import { ABOUT_THEME } from '@/consts/theme'
import { Locale } from '@/types/i18n'
import NotFoundPage from '@/components/not-found/NotFoundPage.vue'
import { DEFAULT_META_EN } from '@/router/routes/routes-en'
import { DEFAULT_META_RU } from '@/router/routes/routes-ru'
import { APP_URL_BASE } from '@/consts/router'
import type { RouteRecordRaw } from 'vue-router'

export const ROUTES_NOT_FOUND: RouteRecordRaw[] = [
  {
    path: '/404-not-found/',
    name: RouteName.NOT_FOUND_EN,
    component: NotFoundPage,
    meta: {
      ...DEFAULT_META_EN,
      locale: Locale.EN,
      title: '404: Not found | Mike Zotov',
      description: 'Something went wrong! The page wasn\'t found',
      url: 'https://mikezotov.dev/404-not-found/',
      theme: ABOUT_THEME,
      image: `${APP_URL_BASE}/sharing/home/about.jpg`,
      i18n: {
        [Locale.RU]: { name: RouteName.NOT_FOUND_RU }
      }
    }
  },
  {
    path: '/ru/404-ne-najdeno/',
    name: RouteName.NOT_FOUND_RU,
    component: NotFoundPage,
    meta: {
      ...DEFAULT_META_RU,
      locale: Locale.RU,
      title: '404: Страница не найдена | Миша Зотов',
      description: 'Что-то пошло не так! Такой страницы не существует.',
      url: 'https://mikezotov.dev/ru/404-ne-najdeno/',
      theme: ABOUT_THEME,
      image: `${APP_URL_BASE}/sharing/home/obo-mne.jpg`,
      i18n: {
        [Locale.EN]: { name: RouteName.NOT_FOUND_EN }
      }
    }
  }
]
