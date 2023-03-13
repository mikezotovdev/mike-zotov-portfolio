import type { LocalStorageItem } from '@/types/local-storage-item'
import { WindowHelper } from '@/helpers/window-helper'

export abstract class LocalStorageHelper {
  static get<T extends string> (key: LocalStorageItem): T | null {
    return (WindowHelper.window?.localStorage.getItem(key) ?? null) as T | null
  }

  static set (key: LocalStorageItem, value: string) {
    window.localStorage.setItem(key, value)
  }
}
