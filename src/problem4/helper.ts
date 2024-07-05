const LIMIT_START = 0;
const LIMIT_END = Math.floor(
  (Math.sqrt(1 + 8 * Number.MAX_SAFE_INTEGER) - 1) / 2
);


export function checkLimitNumber(n: number): void {
  if (!Number.isInteger(n)) {
    throw new Error(`The input must be an integer.${n}`);
  }

  if (n < LIMIT_START || n > LIMIT_END) {
    throw new Error("The number exceeds the safe limit for summation");
  }
}
