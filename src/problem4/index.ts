import { checkLimitNumber } from "./helper";

//Formula-Based Approach
function sum_to_n_a(n: number): number {
  checkLimitNumber(n);
  return (n * (n + 1)) / 2;
}

// Iterative Approach
function sum_to_n_b(n: number): number {
  checkLimitNumber(n);
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}


// Tail Recursion and Trampoline Technique
function sum_to_n_c(n: number): number {
  checkLimitNumber(n);

  const trampoline = (fn: Function): Function => {
    return function (...args: any[]): any {
      let result = fn.apply(null, args);
      while (typeof result === 'function') {
        result = result();
      }
      return result;
    };
  }

  const sumToNRecursive = (n: number, acc: number = 0): any => {
    if (n <= 0) {
      return acc;
    }
    return () => sumToNRecursive(n - 1, acc + n);
  }

  return trampoline(sumToNRecursive)(n)
}