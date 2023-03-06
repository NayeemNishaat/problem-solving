function generic(arr: number[], k: number): any {
  const missing: number[] = [];
  let j = 1;

  for (let i = 0; missing.length < k; ) {
    if (arr[i] !== j) missing.push(j), j++;
    else i++, j++;
  }
  return missing[k - 1];
}
console.log(generic([2, 3, 4, 7, 11], 5));
