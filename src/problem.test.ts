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

function sortedArrayToBST(nums: number[]): TreeNode | null {
  return;
}
console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));
