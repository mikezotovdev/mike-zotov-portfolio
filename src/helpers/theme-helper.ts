import type { Theme } from '@/types/router'
import { DocumentHelper } from '@/helpers/document-helper'

export abstract class ThemeHelper {
  private static getIconElement = (rel: string, sizes?: string): HTMLMetaElement | null => {
    if (sizes) {
      return document.querySelector(`link[rel="${rel}"][sizes="${sizes}"]`)
    }

    return document.querySelector(`link[rel="${rel}"]`)
  }

  static async setTheme (theme: Theme) {
    if (!DocumentHelper.document) {
      return
    }

    const {
      color,
      appleTouchIcon,
      appleTouchIcon180,
      favicon32
    } = theme

    const HREF_KEY = 'href'

    const favicon32Element = ThemeHelper.getIconElement('icon', '32x32')
    const favicon192Element = ThemeHelper.getIconElement('icon', '192x192')
    const appleTouchIconElement = ThemeHelper.getIconElement('apple-touch-icon', '192x192')
    const appleTouchIcon180Element = ThemeHelper.getIconElement('apple-touch-icon', '180x180')
    const safariPinnedTabElement = ThemeHelper.getIconElement('mask-icon')

    const [
      appleTouchIconPath,
      appleTouchIcon180Path,
      favicon32Path
    ] = await Promise.all([
      appleTouchIcon(),
      appleTouchIcon180(),
      favicon32()
    ])

    favicon32Element?.setAttribute(HREF_KEY, favicon32Path.default)
    favicon192Element?.setAttribute(HREF_KEY, appleTouchIconPath.default)
    appleTouchIconElement?.setAttribute(HREF_KEY, appleTouchIconPath.default)
    appleTouchIcon180Element?.setAttribute(HREF_KEY, appleTouchIcon180Path.default)
    safariPinnedTabElement?.setAttribute(HREF_KEY, appleTouchIconPath.default)

    appleTouchIconElement?.setAttribute('color', color)
  }
}
