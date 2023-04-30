function exist(board: string[][], word: string): boolean {
  let len = word.length;
  function backtrack(i: number) {
    if (i === len) return true;
    board.forEach((el) => {
      el.forEach((e) => {
        if (e === word[i]) {
          backtrack(i + 1);
        }
      });
    });
  }
  return backtrack(0);
  // function allPermutation(nums: number[]) {
  //   const stack = [],
  //     res = [],
  //     len = nums.length;

  //   function backtrack(nums: number[]) {
  //     if (stack.length === len) return res.push(Array.from(stack));

  //     for (let i = 0; i < nums.length; i++) {
  //       stack.push(nums[i]);
  //       backtrack([...nums.slice(0, i), ...nums.slice(i + 1)]);
  //       stack.pop();
  //     }
  //   }
  //   backtrack(nums);
  //   return res;
  // }
}
console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"]
    ],
    "SEE"
  )
);
