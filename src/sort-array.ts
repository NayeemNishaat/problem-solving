export function sortArray(nums: number[]): number[] {
  function merge(nums1: number[], nums2: number[]): number[] {
    const nums = [];
    let i = 0,
      j = 0;

    while (i < nums1.length && j < nums2.length) {
      if (nums1[i] < nums2[j]) nums.push(nums1[i]), i++;
      else nums.push(nums2[j]), j++;
    }
    while (i < nums1.length) nums.push(nums1[i]), i++;
    while (j < nums2.length) nums.push(nums2[j]), j++;

    return nums;
  }

  if (nums.length <= 1) return nums;
  const mid = Math.floor(nums.length / 2);
  return merge(sortArray(nums.slice(0, mid)), sortArray(nums.slice(mid)));
}
console.log(sortArray([5, 1, 1, 2, 0, 0, -6]));
