import type { Theme } from '@/types/router'
import { Color } from '@/types/color'

export const ABOUT_THEME: Theme = {
  color: Color.YELLOW,
  appleTouchIcon: () => import('@/assets/favicons/apple-touch-icon-yellow.png'),
  appleTouchIcon180: () => import('@/assets/favicons/apple-touch-icon-180x180-yellow.png'),
  favicon32: () => import('@/assets/favicons/favicon-32x32-yellow.png')
}

export const PROJECT_THEME: Theme = {
  color: Color.GREEN,
  appleTouchIcon: () => import('@/assets/favicons/apple-touch-icon-green.png'),
  appleTouchIcon180: () => import('@/assets/favicons/apple-touch-icon-180x180-green.png'),
  favicon32: () => import('@/assets/favicons/favicon-32x32-green.png')
}

export const CONTACTS_THEME: Theme = {
  color: Color.RED,
  appleTouchIcon: () => import('@/assets/favicons/apple-touch-icon-red.png'),
  appleTouchIcon180: () => import('@/assets/favicons/apple-touch-icon-180x180-red.png'),
  favicon32: () => import('@/assets/favicons/favicon-32x32-red.png')
}
