function twoSum(numbers: number[], target: number): number[] {
  let left = 0,
    right = numbers.length - 1,
    sum: number;

  while (left < right) {
    sum = numbers[left] + numbers[right];

    if (sum === target) return [++left, ++right];

    if (sum > target) right--;
    else left++;
  }
}
