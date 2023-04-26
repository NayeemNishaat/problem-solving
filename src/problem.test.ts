function solution(nums: number[]) {
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
console.log(solution([1, 1, 2]));
