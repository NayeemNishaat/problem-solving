export function canJump(nums: number[]): boolean {
  let reach = 0;

  for (let i = 0; i < nums.length; i++) {
    if (reach < i) return false;
    reach = Math.max(reach, i + nums[i]);
  }
  return true;
}
console.log(canJump([2, 5, 0, 0]));

/* export function canJump(nums: number[]): boolean {
    const memo = [];
  
    function rec(i: number): boolean {
      if (i >= nums.length - 1) return true;
  
      if (memo[i] !== undefined) return memo[i];
      for (let j = nums[i]; j > 0; j--) {
        const res = rec(i + j);
        memo[i] = res;
        if (res) return true;
      }
      return (memo[i] = false);
    }
    return rec(0);
  } */
