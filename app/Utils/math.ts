/**
 * Generates a random integer between min and max (inclusive).
 * Has a specified chance to return a fixed bias value instead.
 *
 * @param min Minimum number that can be generated.
 * @param max Maximum number that can be generated.
 * @param bias The favored number to return.
 * @param biasChance The probability (0.0 to 1.0) of returning the bias value.
 * @returns A number within the specified constraints.
 */
export function generateRandomInt(
  min: number = 2,
  max: number = 4,
  bias: number = 3,
  biasChance: number = 0.4,
): number {
  // 1. Determine if we should return the biased value
  if (Math.random() < biasChance) {
    return bias;
  }

  // 2. Generate a mathematically even distribution between min and max
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
