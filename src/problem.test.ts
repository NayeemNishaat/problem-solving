function generic(nums1: number[], nums2: number[]) {
  let res: number[] = [];
  let ht = {};

  for (let i = 0; i < nums1.length; i++) ht[nums1[i]] = ht[nums1[i]] + 1 || 1;

  for (let i = 0; i < nums2.length; i++) {
    if (ht[nums2[i]]) {
      res.push(nums2[i]);
      ht[nums2[i]]--;
    }
  }

  return res;
}
console.log(generic([4, 55, 5, 5, 5], [2, 4, 6, 8, 5, 2, 0, 5, 5]));
