function duplicateZeros(arr: number[]): void {
  const res = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) res.push(0, 0);
    else res.push(arr[i]);
  }

  for (let i = 0; i < arr.length; i++) arr[i] = res[i];

  console.log(arr);
}
console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]));
