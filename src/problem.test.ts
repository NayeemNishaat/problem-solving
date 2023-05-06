function findKthLargest(nums: number[], k: number): number {
  nums.sort((a, b) => b - a);
  return nums[k - 1];
}
console.log(
  findKthLargest(
    Array.from({ length: 100_000 }, () => Math.round(Math.random() * 100)),
    100000
  )
);
// Array.from({ length: 100_000 }, () => Math.round(Math.random() * 100)),
