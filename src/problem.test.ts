function generic(nums: number[]) {
  function merge(arr1: number[], arr2: number[]) {
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

  if (nums.length <= 1) return nums;
  const mid = Math.floor(nums.length / 2);
  return merge(generic(nums.slice(0, mid)), generic(nums.slice(mid)));
}
console.log(generic([5, 2, 3, 1]));
