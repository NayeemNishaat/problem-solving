function coinChange(coins: number[], amount: number): number {
  if (amount === 0) return 0;

  let min = Infinity;
  const map = new Map();

  function dp(amount: number) {
    if (amount === 0) return 0;
    if (amount < 0) return Infinity;
    if (map.has(amount)) return map.get(amount);

    let res = Infinity;
    for (let i = 0; i < coins.length; i++) {
      res = dp(amount - coins[i]);

      min = Math.min(res, min);
    }
    min = min === Infinity ? min : min + 1;
    map.set(amount, min);
    return min;
  }
  dp(amount);
  return min === Infinity ? -1 : min;
}
console.log(coinChange([186, 419, 83, 408], 6249));
// [186, 419, 83, 408], 6249    20
// [3,7,405,436], 8839     25
// [1, 3, 4, 5], 7
