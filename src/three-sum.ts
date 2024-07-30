function mergeSortedArray(arr1, arr2) {
  const arr = [];
  let i = 0,
    j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) arr.push(arr1[i]), i++;
    else arr.push(arr2[j]), j++;
  }

  while (i < arr1.length) arr.push(arr1[i]), i++;
  while (j < arr2.length) arr.push(arr2[j]), j++;

  return arr;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  return mergeSortedArray(
    mergeSort(arr.slice(0, mid)),
    mergeSort(arr.slice(mid))
  );
}

/* export function threeSum(nums: number[]): number[][] {
  nums = mergeSort(nums);
  const res = [];

  for (let i = 0; i < nums.length; i++) {
    let left = i + 1,
      right = nums.length - 1;

    if (nums[i - 1] === nums[i] && i > 0) continue;

    while (left < right) {
      const sum = nums[left] + nums[right] + nums[i];
      if (sum === 0) {
        res.push([nums[i], nums[left], nums[right]]);
        left++, right--;

        while (nums[left] === nums[left - 1]) left++;
        while (nums[right] === nums[right + 1]) right--;
      } else if (sum < 0) left++;
      else right--;
    }
  }
  return res;
} */

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
