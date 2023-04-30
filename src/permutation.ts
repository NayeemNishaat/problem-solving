/* export function permute(nums: number[]): number[][] {
  const result: number[][] = [];

  function dfs(n = 0) {
    if (n === nums.length - 1) return result.push([...nums]); // Note: Creating a copy and inserting

    for (let i = n; i < nums.length; i++) {
      // Remark: n is the item that we will swap and it alse determises how many branches we will have in each level. Max(n) is the depth/height of the tree. When n = 0 => i = (0 - 2) [3 branches]; n = 1 => i = (1 - 2) [2 branches]; n = 2 = nums.length - 1 return;
      [nums[i], nums[n]] = [nums[n], nums[i]];
      dfs(n + 1);
      [nums[i], nums[n]] = [nums[n], nums[i]];
    }
  }
  dfs();
  return result;
}
console.log(permute([1, 1, 2, 2]));
 */

/* function uniquePermutation(nums: number[]) {
  const stack = [],
    res = [],
    len = nums.length;

  nums.sort((a, b) => a - b);

  function backtrack(stack: number[], nums: number[]) {
    if (stack.length === len) return res.push(Array.from(stack));

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === nums[i - 1]) continue;

      stack.push(nums[i]);
      backtrack(stack, [...nums.slice(0, i), ...nums.slice(i + 1)]);
      stack.pop();
    }
  }
  backtrack(stack, nums);
  return res;
}
console.log(uniquePermutation([1, 1, 2]));
 */

/* function allPermutation(nums: number[]) {
  const stack = [],
    res = [],
    len = nums.length;

  function backtrack(nums: number[]) {
    if (stack.length === len) return res.push(Array.from(stack));

    for (let i = 0; i < nums.length; i++) {
      stack.push(nums[i]);
      backtrack([...nums.slice(0, i), ...nums.slice(i + 1)]);
      stack.pop();
    }
  }
  backtrack(nums);
  return res;
}
console.log(allPermutation([1, 2, 3])); */
