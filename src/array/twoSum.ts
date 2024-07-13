function twoSum(nums: number[], target: number): number[] {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const el = nums[i];

    const remainder = target - el;

    if (map.has(remainder)) {
      return [map.get(remainder), i];
    } else {
      map.set(el, i);
    }
  }

  return [];
}
console.log(twoSum([3, 3], 6));
