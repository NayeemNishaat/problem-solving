function duplicateZeros(arr: number[]): void {
  const len = arr.length;
  for (let i = 0; i < len; i++) if (arr[i] === 0) arr.splice(i, 0, 0), i++;
  arr.splice(len);
}
console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]));
