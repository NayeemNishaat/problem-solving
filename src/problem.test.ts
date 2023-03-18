function rob(nums: number[]): number {
  const hash = {};
  function recurse(nums: number[], len: number) {
    if (len < 0) return 0;
    if (hash[len] !== undefined) return hash[len];

    const max = Math.max(
      recurse(nums, len - 2) + nums[len],
      recurse(nums, len - 1)
    );
    hash[len] = max;
    return max;
  }

  return recurse(nums, nums.length - 1);
}
console.log(
  rob([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
  ])
);

// function rob(nums: number[]): number {
//   let prev = 0, max = 0;

//   for (let i = 0, n = nums.length; i < n; i++) {
//       const temp = max;
//       const currentMax = prev + nums[i];

//       if (currentMax > max)
//           max = currentMax;

//       prev = temp;
//   }

//   return prev > max ? prev : max;
// }
