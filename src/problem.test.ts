const arr = [];
function solution(nums: number[]) {
  if (!nums.length) return 0;
  const num = nums.shift();
  return num + solution(nums);
}
console.log(solution([3, 2, 1, 7]));
