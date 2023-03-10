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

function isSymmetric(root: TreeNode | null): boolean {
  function dfs(left: TreeNode | null, right: TreeNode | null) {
    if (
      (!left && right) ||
      (left && !right) ||
      (left && right && left.val !== right.val)
    )
      return false;

    if (left && right)
      return dfs(left.left, right.right) && dfs(left.right, right.left);
    return true;
  }
  return dfs(root.left, root.right);
}
console.log(isSymmetric(tree));
