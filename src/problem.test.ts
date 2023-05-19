function coinChange(coins: number[], amount: number): number {
  if (amount === 0) return 0;

  let min = Infinity;
  let arr = [];
  const map = new Map();

  function dp(total: number) {
    if (total > amount) return;
    if (total === amount) {
      min = Math.min(min, arr.length);

      if (map.has(total) && map.get(total).length > arr.length) {
        map.set(total, Array.from(arr));
      }
      return;
    }

    if (map.has(total)) {
      if (map.get(total).length > arr.length) {
        map.set(total, Array.from(arr));
      } else return;
    }

    for (let i = 0; i < coins.length; i++) {
      arr.push(coins[i]);

      const total = arr.reduce((acc, curr) => acc + curr, 0);
      dp(total);
      if (!map.has(total)) map.set(total, Array.from(arr));
      if (map.has(total) && map.get(total).length > arr.length) {
        map.set(total, Array.from(arr));
      }
      arr.pop();
    }
  }
  dp(0);
  return min === Infinity ? -1 : min;
}
console.log(coinChange([3, 7, 405, 436], 8839));
// [186, 419, 83, 408], 6249
// [3,7,405,436], 8839
