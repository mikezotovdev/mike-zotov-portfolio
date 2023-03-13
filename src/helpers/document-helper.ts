export abstract class DocumentHelper {
  static get document (): Document | null {
    // SSG renders pages without opening browser (no DOM) =>
    // reference error will occur during the build =>
    // all read operations on document object should be handled
    if (typeof document === 'undefined') {
      return null
    }

    return document
  }
}
