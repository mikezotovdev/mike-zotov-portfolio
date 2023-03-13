import { defineStore } from 'pinia'
import { ColorScheme } from '@/types/color-scheme'
import { LocalStorageHelper } from '@/helpers/local-storage-helper'
import { LocalStorageItem } from '@/types/local-storage-item'
import { DocumentHelper } from '@/helpers/document-helper'

const getPreferredColorScheme = (): ColorScheme => {
  const savedColorScheme = LocalStorageHelper.get<ColorScheme>(LocalStorageItem.COLOR_SCHEME)
  const isValidColorScheme = Boolean(savedColorScheme && ColorScheme[savedColorScheme])

  if (savedColorScheme && isValidColorScheme) {
    return savedColorScheme
  }

  return ColorScheme.system
}

const getClassName = (colorScheme: ColorScheme): `is-${ColorScheme}` => `is-${colorScheme}`

const clearClassListPreferredColor = () => {
  document.documentElement.classList.remove(getClassName(ColorScheme.dark))
  document.documentElement.classList.remove(getClassName(ColorScheme.light))
  document.documentElement.classList.remove(getClassName(ColorScheme.system))
}

const setClassListPreferredColor = (colorScheme: ColorScheme) => {
  document.documentElement.classList.add(getClassName(colorScheme))
}

const updateClassListPreferredColor = (colorScheme: ColorScheme) => {
  if (!DocumentHelper.document) {
    return
  }

  clearClassListPreferredColor()
  setClassListPreferredColor(colorScheme)
}

interface ColorSchemeState {
  colorScheme: ColorScheme;
}

export const useColorSchemeStore = defineStore('colorScheme', {
  state: (): ColorSchemeState => ({
    colorScheme: getPreferredColorScheme()
  }),
  getters: {
    isDarkMode (): boolean {
      return this.colorScheme === ColorScheme.dark
    }
  },
  actions: {
    updatePreferredColorScheme (colorScheme: ColorScheme) {
      this.colorScheme = colorScheme
      LocalStorageHelper.set(LocalStorageItem.COLOR_SCHEME, this.colorScheme)
      updateClassListPreferredColor(colorScheme)
    }
  }
})
