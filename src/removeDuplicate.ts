// function removeDuplicates(nums: number[]): number {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === nums[i - 1]) {
//       nums.splice(i, 1);
//       i--;
//     }
//   }

//   return nums.length;
// }

function removeDuplicates(nums: number[]): number {
  let left = 0,
    right = 1;

  while (right < nums.length) {
    if (nums[left] === nums[right]) {
      right++;
    } else nums[++left] = nums[right];
  }

  return left + 1;
}
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
