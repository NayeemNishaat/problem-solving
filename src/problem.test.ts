function removeElement(nums: number[], val: number): number {
  let j = nums.length - 1,
    c = 0;
  for (let i = 0; i < nums.length && i <= j; i++) {
    if (nums[i] === val) {
      while (nums[j] === val) {
        j--;
        c++;
      }

      if (i > j) break;
      [nums[i], nums[j]] = [nums[j], nums[i]];
      j--;
      c++;
    }
  }
  console.log(c);
  return nums.length - c;
}
console.log(removeElement([1], 1));
