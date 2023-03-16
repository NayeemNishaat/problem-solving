function climbStairs(n: number) {
  const hash = {};
  function fib(n: number) {
    if (n < 0) return 0;
    else if (n === 0) return 1;

    if (hash[n]) return hash[n];
    else return (hash[n] = fib(n - 1) + fib(n - 3));
  }
  return fib(n);
}
console.log(climbStairs(6)); // 1/3 steps each time
