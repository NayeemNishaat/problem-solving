export function climbStairs(n: number) {
  n = ++n;
  function fib(n: number) {
    if (n < 2) return n;
    return fib(n - 1) + fib(n - 2);
  }
  return fib(n);
}
console.log(climbStairs(5));
