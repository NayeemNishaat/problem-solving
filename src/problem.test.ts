function solution(nums: number[]) {
  if (nums.length < 3) return false;
  let tiny = Infinity,
    small = Infinity,
    midium = Infinity,
    large = Infinity,
    huge = Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > large) huge = Math.min(huge, nums[i]);
    if (nums[i] > midium) /*  large = Math.min(large, nums[i]); */ return true;
    if (nums[i] > small) midium = Math.min(midium, nums[i]);
    if (nums[i] > tiny) small = Math.min(small, nums[i]);
    if (nums[i] < tiny) tiny = Math.min(tiny, nums[i]);
  }
  return false;
  // return { tiny, small, midium, large, huge };
}
console.log(solution([10, 100, 20, 0, 0, 140, 0, 0, 0, 1000]));
