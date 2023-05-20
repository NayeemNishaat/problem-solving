function coinChange(coins: number[], amount: number): number {
  if (amount === 0) return 0;

  const map = new Map();

  function dp(amount: number) {
    if (amount === 0) return 0;
    if (amount < 0) return -1;
    if (map.has(amount)) return map.get(amount);

    let res = Infinity;
    for (let i = 0; i < coins.length; i++) {
      const cc = dp(amount - coins[i]);
      if (cc === -1) continue;
      res = Math.min(res, cc + 1);
    }
    map.set(amount, res === Infinity ? -1 : res);
    return map.get(amount);
  }
  return dp(amount);
}
console.log(coinChange([2, 5, 10, 1], 27));
// [186, 419, 83, 408], 6249    20
// [3,7,405,436], 8839     25
// [1, 3, 4, 5], 7
// [2,5,10,1], 27
