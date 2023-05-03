function topKFrequent(nums: number[], k: number): number[] {
  const map = new Map();

  for (let i = 0; i < nums.length; i++)
    map.has(nums[i])
      ? map.set(nums[i], map.get(nums[i]) + 1)
      : map.set(nums[i], 1);

  return [...map.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map((el) => el[0]);
}
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
