/* function productExceptSelf(nums: number[]): number[] {
  const postfix = [],
    prefix = [],
    res = [];

  for (let i = 0, j = nums.length - 1; i < nums.length, j >= 0; i++, j--) {
    prefix.push((prefix.at(-1) === undefined ? 1 : prefix.at(-1)) * nums[i]);
    postfix.push((postfix.at(-1) === undefined ? 1 : postfix.at(-1)) * nums[j]);
  }
  postfix.reverse();

  for (let i = 0; i < nums.length; i++) {
    res.push(
      (prefix[i - 1] === undefined ? 1 : prefix[i - 1]) *
        (postfix[i + 1] === undefined ? 1 : postfix[i + 1])
    );
  }

  return res;
}
console.log(productExceptSelf([-1, 1, 0, -3, 3])); */

function productExceptSelf(nums: number[]): number[] {
  const res = new Array(nums.length).fill(1);

  let left = 1;
  for (let i = 0; i < nums.length; i++) {
    res[i] = left;
    left *= nums[i];
  }

  let right = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] *= right;
    right *= nums[i];
  }

  return res;
}
