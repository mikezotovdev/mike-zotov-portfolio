export abstract class TimeoutHelper {
  static create (handler: () => void, ms: number) {
    return window.setTimeout(handler, ms)
  }

  static cancel (timeoutId: number) {
    window.clearTimeout(timeoutId)
  }
}
