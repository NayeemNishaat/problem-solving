export function main() {
  function maxProduct(nums: number[]): number {
    let max = -Infinity;

    for (let i = 0; i < nums.length; i++) {
      let prod = 1;
      for (let j = i; j < nums.length; j++) {
        prod *= nums[j];
        max = Math.max(max, prod);
      }
    }
    return max;
  }

  return maxProduct([2, 3, -2, 4]);
}
