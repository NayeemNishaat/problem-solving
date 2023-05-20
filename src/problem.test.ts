function coinChange(coins: number[], amount: number): number {
  if (amount === 0) return 0;

  let min = Infinity;
  const map = new Map();

  function dp(amount: number, num: number) {
    if (amount === 0) return num;
    if (amount < 0) return Infinity;
    if (map.has(amount)) return map.get(amount);

    let res = Infinity;
    for (let i = 0; i < coins.length; i++) {
      res = dp(amount - coins[i], num + 1);
      console.log(res);
      min = Math.min(res, min);
    }
    map.set(amount, min);
    return res;
  }
  dp(amount, 0);
  return min === Infinity ? -1 : min;
}
console.log(coinChange([1, 3, 4, 5], 7));
// [186, 419, 83, 408], 6249    20
// [3,7,405,436], 8839     25
// [1, 3, 4, 5], 7
