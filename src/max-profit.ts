export function maxProfit(prices: number[]): number {
  let left = 0,
    right = 1,
    maxProfit = 0;

  while (right < prices.length) {
    const currentProfit = prices[right] - prices[left];
    maxProfit = Math.max(maxProfit, currentProfit);

    if (maxProfit <= currentProfit) {
      if (prices[right] < prices[left]) (left = right), right++;
      else right++;
    } else {
      if (prices[right] < prices[left]) (left = right), right++;
      else right++;
    }
  }

  return maxProfit;
}
console.log(maxProfit([8, 3, 6, 2, 8, 8, 8, 4, 2, 0, 7, 2, 9, 4, 9]));
