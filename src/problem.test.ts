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
  3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
);

function maxDepth(root: TreeNode | null): number {
  if (!root) return 0;

  let i = 1,
    max = 1;

  function dfs(root: TreeNode) {
    if (root.left) (max = Math.max(max, ++i)), dfs(root.left);
    if (root.right) (max = Math.max(max, ++i)), dfs(root.right);
    i--;
  }
  dfs(root);
  return max;
}
console.log(maxDepth(tree));
