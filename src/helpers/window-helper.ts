export abstract class WindowHelper {
  static get window (): Window | null {
    // SSG renders pages without opening browser (no DOM) =>
    // reference error will occur during the build =>
    // all read operations on window object should be handled
    if (typeof window === 'undefined') {
      return null
    }

    return window
  }
}
