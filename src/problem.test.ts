function solution(nums: number[]) {
  const stack = [],
    res = [];

  function backtrack() {
    if (stack.length === nums.length) return res.push(Array.from(stack));

    for (let i = 0; i < nums.length; i++) {
      stack.push(nums[i]);
      backtrack();
      stack.pop();
    }
  }
  backtrack();
  return res;
}
console.log(solution([1, 2, 3]));
