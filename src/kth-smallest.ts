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
  new TreeNode(1, null, new TreeNode(2)),
  new TreeNode(4)
);

export function kthSmallest(root: TreeNode | null, k: number): number {
  const vals = [];

  function dfs(root: TreeNode) {
    root.left && dfs(root.left);
    vals.push(root.val);
    root.right && dfs(root.right);
  }
  dfs(root);

  return vals[k - 1];
}
console.log(kthSmallest(tree, 1));
