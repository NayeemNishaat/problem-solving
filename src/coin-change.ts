// Segment: Top Down
// function coinChange(coins: number[], amount: number): number {
//   if (amount === 0) return 0;
//   const map = new Map();

//   function dp(amount: number) {
//     if (amount === 0) return 0;
//     if (amount < 0) return Infinity;
//     if (map.has(amount)) return map.get(amount);

//     let min = Infinity;
//     for (let i = 0; i < coins.length; i++) {
//       const numCoins = dp(amount - coins[i]);
//       if (numCoins === Infinity) continue;
//       min = Math.min(min, numCoins + 1);
//     }
//     map.set(amount, min);
//     return min;
//   }
//   return dp(amount);
// }

// Segment: Bottom Up
export function coinChange(coins: number[], amount: number) {
  const dp = Array.from({ length: amount + 1 }, () => Infinity);
  dp[0] = 0;

  for (let i = 1; i < amount + 1; i++) {
    for (let j = 0; j <= coins.length; j++)
      if (i - coins[j] >= 0) dp[i] = Math.min(dp[i], 1 + dp[i - coins[j]]);
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
}
console.log(coinChange([1, 3, 4, 5], 7));
// [186, 419, 83, 408], 6249    20
// [3,7,405,436], 8839     25
// [1, 3, 4, 5], 7
// [2,5,10,1], 27 4
