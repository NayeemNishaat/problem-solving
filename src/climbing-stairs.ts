export function climbStairs(n: number) {
  const hash = {};
  function fib(n: number) {
    if (n < 0) return 0;
    else if (n === 0) return 1;

    if (hash[n]) return hash[n];
    else return (hash[n] = fib(n - 1) + fib(n - 3));
  }
  return fib(n);
}
console.log(climbStairs(5)); // 1 or 3 steps each time

// function climbStairs(n: number): number {
//   const map = new Map();

//   function fib(n: number): number {
//     if (n < 0) return 0;
//     if (n === 0) return 1;

//     if (map.has(n)) return map.get(n);
//     const res = fib(n - 1) + fib(n - 2);
//     map.set(n, res);

//     return res;
//   }
//   return fib(n);
// }

// console.log(climbStairs(5));
