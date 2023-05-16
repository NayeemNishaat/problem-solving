function canJump(nums: number[]): boolean {
  const memo = [];

  function rec(i: number): boolean {
    if (i >= nums.length - 1) return true;

    if (memo[i] !== undefined) return memo[i];
    for (let j = nums[i]; j > 0; j--) {
      const res = rec(i + j);
      memo[i] = res;
      if (res) return true;
    }
    return (memo[i] = false);
  }
  return rec(0);
}
console.log(
  canJump([
    2, 0, 6, 9, 8, 4, 5, 0, 8, 9, 1, 2, 9, 6, 8, 8, 0, 6, 3, 1, 2, 2, 1, 2, 6,
    5, 3, 1, 2, 2, 6, 4, 2, 4, 3, 0, 0, 0, 3, 8, 2, 4, 0, 1, 2, 0, 1, 4, 6, 5,
    8, 0, 7, 9, 3, 4, 6, 6, 5, 8, 9, 3, 4, 3, 7, 0, 4, 9, 0, 9, 8, 4, 3, 0, 7,
    7, 1, 9, 1, 9, 4, 9, 0, 1, 9, 5, 7, 7, 1, 5, 8, 2, 8, 2, 6, 8, 2, 2, 7, 5,
    1, 7, 9, 6
  ])
);
// [2,0,6,9,8,4,5,0,8,9,1,2,9,6,8,8,0,6,3,1,2,2,1,2,6,5,3,1,2,2,6,4,2,4,3,0,0,0,3,8,2,4,0,1,2,0,1,4,6,5,8,0,7,9,3,4,6,6,5,8,9,3,4,3,7,0,4,9,0,9,8,4,3,0,7,7,1,9,1,9,4,9,0,1,9,5,7,7,1,5,8,2,8,2,6,8,2,2,7,5,1,7,9,6]
// [2,5,0,0]

// class Solution {
//   public:
//       bool canJump(vector<int>& nums) {
//           //it shows at max what index can I reach.
//           //initially I can only reach index 0, hence reach = 0
//           int reach = 0;

//           for(int idx = 0; idx < nums.size(); idx++) {
//               //at every index I'll check if my reach was atleast able to
//               //reach that particular index.

//               //reach >= idx -> great, carry on. Otherwise,
//               if(reach < idx) return false;

//               //now as you can reach this index, it's time to update your reach
//               //as at every index, you're getting a new jump length.
//               reach = max(reach, idx + nums[idx]);
//           }

//           //this means that you reached till the end of the array, wohooo!!
//           return true;

//       }
//   };
