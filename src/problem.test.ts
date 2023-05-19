function coinChange(coins: number[], amount: number): number {
  if (amount === 0) return 0;

  let min = Infinity;
  let arr = [];
  const map = new Map();

  function dp(total: number) {
    if (total > amount) return arr;
    if (total === amount) {
      min = Math.min(min, arr.length);

      if (map.has(total) && map.get(total).length > arr.length) {
        map.set(total, Array.from(arr));
        // console.log("arr", arr);
        return arr;
      }
    }

    if (map.has(total)) {
      // console.log(map.get(total), arr);
      if (map.get(total).length > arr.length) {
        // console.log(arr);
        map.set(total, Array.from(arr));

        if (total !== 4) return arr;
      }
      // return map.get(total);
    }

    let res = [];
    for (let i = 0; i < coins.length; i++) {
      arr.push(coins[i]);
      console.log(arr, i);

      const total = arr.reduce((acc, curr) => acc + curr, 0);
      res = dp(total);
      // arr = res;
      // console.log(res);
      if (!map.has(total)) map.set(total, Array.from(arr));
      if (map.has(total) && map.get(total).length > arr.length) {
        map.set(total, Array.from(arr));
      }
      arr.pop();
    }
    return arr;
  }
  dp(0);
  console.log(map);
  return min === Infinity ? -1 : min;
}
console.log(coinChange([1, 3, 4, 5], 7));
// [186, 419, 83, 408], 6249
