function generic(arr: number[]) {
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) current += arr[j];
      max = Math.max(max, current);
    }
  }
  return max;
}
console.log(generic([5, 4, -1, 7, 8]));
