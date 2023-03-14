// Suppose these are versions : true true true true true [false] false false false false false
// Target : need to find the version which is false but next one true OR which is true but previous one is false
// Aprroach : Binary Search

var solution = function (isBadVersion: any) {
  return function (n: number): number {
    let left = 1,
      right = n;

    while (right >= left) {
      const mid = Math.trunc((right + left) / 2);
      if (left === right) return left;
      if (isBadVersion(mid)) right = mid;
      else left = mid + 1;
    }
    // return left;
  };
};
