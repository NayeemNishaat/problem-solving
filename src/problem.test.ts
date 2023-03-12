class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const tree = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4), new TreeNode(3)),
  new TreeNode(2, new TreeNode(4), new TreeNode(3))
);

function sortedArrayToBST(nums: number[]): any {
  function bst(nums: number[], left: number, right: number) {
    if (left > right) return null;

    const mid = Math.trunc((left + right) / 2);
    const root = new TreeNode(nums[mid]);
    root.left = bst(nums, left, mid - 1);
    root.right = bst(nums, mid + 1, right);
    return root;
  }

  return bst(nums, 0, nums.length - 1);
}
console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));
