export function merge(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
): void {
  let i = m - 1,
    j = n - 1,
    k = m + n - 1;
  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--, k--;
    } else {
      nums1[k] = nums2[j];
      j--, k--;
    }
  }
  while (j >= 0) {
    nums1[k] = nums2[j];
    j--, k--;
  }
  console.log(nums1);
}
console.log(merge([0, 0, 0], 1, [1, 2], 2));
