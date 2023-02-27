function generic(nums1: number[], nums2: number[]) {
  const dict1 = {};
  const dict2 = {};
  const res = [];

  for (let i = 0; i < nums1.length; i++)
    dict1[nums1[i]] ? dict1[nums1[i]]++ : (dict1[nums1[i]] = 1);

  for (let i = 0; i < nums2.length; i++)
    dict2[nums2[i]] ? dict2[nums2[i]]++ : (dict2[nums2[i]] = 1);

  if (Object.keys(dict1).length > Object.keys(dict2).length) {
    for (const key in dict2) {
      if (!dict1[key]) continue;
      else {
        let i = 0;
        while (i < Math.min(dict1[key], dict2[key])) {
          res.push(+key);
          ++i;
        }
      }
    }
  } else {
    for (const key in dict1) {
      if (!dict2[key]) continue;
      else {
        let i = 0;
        while (i < Math.min(dict1[key], dict2[key])) {
          res.push(+key);
          ++i;
        }
      }
    }
  }
  return res;
}
console.log(generic([4, 55, 5, 5, 5], [2, 4, 6, 8, 5, 2, 0, 5, 5]));
