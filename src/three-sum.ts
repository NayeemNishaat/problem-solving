export function threeSum(nums: number[]): number[][] {
  const sortedNums = nums.sort(function (a, b) {
    return a - b;
  });
  const res = [];

  for (let i = 0; i < sortedNums.length; i++) {
    let left = i + 1,
      right = sortedNums.length - 1;

    if (sortedNums[i - 1] === sortedNums[i] && i > 0) continue;

    while (left < right) {
      if (sortedNums[left] + sortedNums[right] + sortedNums[i] === 0) {
        res.push([sortedNums[i], sortedNums[left], sortedNums[right]]);
        left++, right--;

        while (sortedNums[left] === sortedNums[left - 1]) left++; // Note: Removing left/right doplicates
        while (sortedNums[right] === sortedNums[right + 1]) right--;
      }
      if (sortedNums[left] + sortedNums[right] + sortedNums[i] < 0) left++;
      if (sortedNums[left] + sortedNums[right] + sortedNums[i] > 0) right--;
    }
  }
  return res;
}
console.log(threeSum([-2, 0, 0, 2, 2]));
