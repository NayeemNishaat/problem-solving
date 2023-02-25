/* export function maxProfit(prices: number[]): number {
  let left = 0,
    right = 1,
    maxProfit = 0,
    currentProfit = 0,
    totalProfit = 0;

  while (right < prices.length) {
    currentProfit = prices[right] - prices[left];
    maxProfit = Math.max(maxProfit, currentProfit);

    if (
      prices[right - 1] > prices[right] ||
      (prices[right - 1] <= prices[right] && right === prices.length - 1)
    ) {
      (totalProfit += maxProfit), (maxProfit = 0);
      left = right;
    }
    right++;
  }

  return totalProfit;
} */

export function maxProfit(prices: number[]): number {
  let profit = 0;
  for (let i = 1; i < prices.length; i++)
    if (prices[i - 1] < prices[i]) profit += prices[i] - prices[i - 1];

  return profit;
}
console.log(maxProfit([1, 9, 6, 9, 1, 7, 1, 1, 5, 9, 9, 9, 8, 7, 6]));
