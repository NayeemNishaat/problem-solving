export function rob(nums: number[]): number {
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
//   let prevMax = 0,
//     max = 0;

//   for (let i = 0; i < nums.length; i++) {
//     const temp = max;

//     const currentMax = prevMax + nums[i];
//     if (currentMax > max) max = currentMax;
//     prevMax = temp;
//   }

//   return Math.max(prevMax, max);
// }

// function rob(nums: number[]): number {
//   const map = new Map();

//   function recurse(nums: number[], len: number) {
//     if (len < 0) return 0;
//     if (map.has(len)) return map.get(len);

//     const max = Math.max(
//       recurse(nums, len - 2) + nums[len],
//       recurse(nums, len - 1)
//     );

//     map.set(len, max);
//     return max;
//   }
//   return recurse(nums, nums.length - 1);
// }
// console.log(rob([2, 7, 9, 3, 1]));
