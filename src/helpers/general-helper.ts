export abstract class GeneralHelper {
  static isEmpty (value: object) {
    return Object.keys(value).length === 0
  }

  // Returns a random value in [lower, upper), excluding (!) an upper bound
  static getRandomValue (lower: number, upper?: number) {
    if (upper === undefined) {
      upper = lower
      lower = 0
    }

    return Math.floor(Math.random() * (upper - lower)) + lower
  }
}
