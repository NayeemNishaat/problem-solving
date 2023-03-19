function getDigit(num, i) {
  // return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
  return Math.trunc(Math.abs(num) / 10 ** i) % 10; // Important: Math.abs() to get positive number when we put negative number
}
// console.log(getDigit(235436, 2));

function digitCount(num) {
  if (num === 0) return 1;
  return Math.trunc(Math.log10(Math.abs(num))) + 1;
}
// console.log(digitCount(235436));

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}
// console.log(mostDigits([23, 567, 89, 977446, 90]));

function radixSort(nums) {
  const maxDigits = mostDigits(nums);
  for (let i = 0; i < maxDigits; i++) {
    const buckets = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < nums.length; j++)
      buckets[getDigit(nums[j], i)].push(nums[j]);

    nums = [].concat(...buckets);
  }
  return nums;
}
console.log(radixSort([657, 2, 454, 5, 476, 454, 43, 79, 7, 56, 90, 0, 87]));
