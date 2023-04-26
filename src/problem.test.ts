function solution(n: number, nums: number[]) {
  const stack = [],
    res = [];

  function backtrack(curr: number) {
    if (stack.length) res.push(stack.join(""));
    if (n === curr) return;

    for (let i = 0; i < nums.length; i++) {
      stack.push(nums[i]);
      backtrack(curr + 1);
      stack.pop();
    }
  }
  backtrack(0);
  return res;
}
console.log(solution(3, [1, 2, 3]));
