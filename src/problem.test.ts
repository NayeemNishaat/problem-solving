function generic(nums: number[]) {
  let count = 0;
  nums.forEach((el) => el !== 0 && count++);

  for (let i = 0; i < nums.length; i++) {
    if (count === i) break;

    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
      i--;
    }
  }
  return nums;
}
console.log(
  generic([
    1, 0, 0, 3, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 89, 9, 5, 5, 0, 0, 34, 34,
    99
  ])
);
