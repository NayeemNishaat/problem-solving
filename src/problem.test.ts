function generic(array: number[]): any {
  array.sort((a, b) => a - b);
  let perms = [array.slice()];

  while (array) {
    let [i, j, k] = Array(3).fill(array.length - 1);

    // Find the first non-increasing element
    while (i > 0 && array[i - 1] >= array[i]) i--;
    if (i <= 0) break;
    // console.log(array[i - 1], array[i]);
    // Find first element larger
    while (array[j] <= array[i - 1]) j--;

    // Swap them
    [array[i - 1], array[j]] = [array[j], array[i - 1]];
    console.log(array, 8);
    // Reverse the suffix
    while (i < k) {
      [array[i], array[k]] = [array[k], array[i]];
      i++;
      k--;
    }
    // Add a copy of the current state of the array to the list of permutations
    perms.push(array.slice());
  }
  return perms;
}
console.log(generic([3, 1, 2]));
