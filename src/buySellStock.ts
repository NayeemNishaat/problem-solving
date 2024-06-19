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
console.log(maxProfit([7, 6, 4, 3, 1]));
