function increasingTriplet(nums: number[]): boolean {
  if (nums.length < 3) return false;
  let min = Infinity,
    mid = Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > mid) return true;
    else if (nums[i] > min && nums[i] < mid) mid = nums[i];
    else if (nums[i] < min) min = nums[i];
  }
  return false;
}
console.log(increasingTriplet([4, 5, 6777, 1, 2]));
[20, 100, 10, 12, 5, 13];
