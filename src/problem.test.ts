function solution(nums: number[]) {
  if (nums.length < 3) return false;
  let min = Infinity,
    mid = Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > mid) return true;
    min = Math.min(min, nums[i]);
    if (nums[i] > min) mid = Math.min(mid, nums[i]);
  }
  return false;
}
console.log(solution([10, 100, 20, 0, 0, 140]));
