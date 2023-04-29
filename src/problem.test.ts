function solution(nums: number[]) {
  const res = [];

  function backtrack(nums: number[], prev: number[]) {
    if (prev.length) res.push([...prev]);

    for (let i = 0; i < nums.length; i++) {
      prev.push(nums[i]);
      backtrack([...nums.slice(i + 1)], prev);
      prev.pop();
    }
  }
  backtrack(nums, []);

  return res;
}
console.log(solution([1, 2, 3]));
