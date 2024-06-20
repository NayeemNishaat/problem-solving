export function main() {
  // function maxProfit(prices: number[]): number {
  //   let currentProfit = 0,
  //     max = 0,
  //     left = 0,
  //     right = 1;

  //   while (right < prices.length) {
  //     currentProfit = prices[right] - prices[left];

  //     max = Math.max(currentProfit, max);

  //     if (prices[right] < prices[left]) {
  //       left = right;
  //     }
  //     right++;
  //   }
  //   console.log(max, 33);
  //   return max;
  // }
  maxProfit([7, 1, 5, 3, 6, 4, 3, 12]);

  function maxProfit(prices: number[]) {
    let min_price = prices[0],
      maxprof = 0;

    for (let i = 1; i < prices.length; i++) {
      maxprof = Math.max(maxprof, prices[i] - min_price);
      min_price = Math.min(prices[i], min_price);
    }

    return maxprof;
  }
}
