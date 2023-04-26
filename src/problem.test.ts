function solution(nums: number[]) {
  const newArr = [];
  for (let i = 0; i < nums.length; i++) {
    newArr.push([nums[i]]);
    for (let j = i + 1; j < nums.length; j++) {
      newArr.push([nums[i], nums[j]]);
    }
  }
  return newArr;
}
console.log(solution([1, 2, 3]));
