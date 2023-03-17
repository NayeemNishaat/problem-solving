function generic(arr: number[]) {
  let left = 0,
    right = 1,
    maxProfit = 0,
    currentProfit = 0;

  while (right < arr.length) {
    currentProfit = arr[right] - arr[left];
    maxProfit = Math.max(currentProfit, maxProfit);
    if (arr[left] > arr[right]) left = right;
    right++;
  }
  return maxProfit;
}
console.log(generic([7, 1, 5, 3, 6, 4]));
