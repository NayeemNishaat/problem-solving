export function main() {
  function threeSum(nums: number[]): number[][] {
    nums.sort((a, b) => a - b);
    const res = [];

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === nums[i - 1]) continue; // Important:  Must be i - 1 because this doesn't decrease the combination space. If we use i + 1 then i increase and combination space decreased

      let left = i + 1,
        right = nums.length - 1,
        sum: number;

      while (left < right) {
        sum = nums[i] + nums[left] + nums[right];

        if (sum === 0) {
          res.push([nums[i], nums[left], nums[right]]);
          left++, right--;

          while (nums[left] === nums[left - 1]) left++;
          while (nums[right] === nums[right + 1]) right--;
        } else if (sum > 0) right--;
        else left++;
      }
    }

    return res;
  }

  return threeSum([-1, 0, 1, 2, -1, -4]);
}
