function maxProfit(prices: number[]): number {
  let left = 0,
    right = 1,
    currentProfit = 0,
    max = 0;

  while (right < prices.length) {
    currentProfit = prices[right] - prices[left];

    max = Math.max(max, currentProfit);

    if (prices[right] < prices[left]) left = right;
    right++;
  }

  return max;
}

// function maxProfit(prices: number[]) {
//   let min_price = prices[0],
//     maxprof = 0;

//   for (let i = 1; i < prices.length; i++) {
//     maxprof = Math.max(maxprof, prices[i] - min_price);
//     min_price = Math.min(prices[i], min_price);
//   }

//   return maxprof;
// }

console.log(maxProfit([7, 6, 4, 3, 1]));
