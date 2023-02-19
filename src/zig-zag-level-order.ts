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

export function zigzagLevelOrder(root: TreeNode | null): number[][] {
  return;
}
console.log(
  zigzagLevelOrder(
    new TreeNode(
      3,
      new TreeNode(9, null, null),
      new TreeNode(20, new TreeNode(15), new TreeNode(7))
    )
  )
);
