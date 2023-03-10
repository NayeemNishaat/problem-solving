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
  2,
  new TreeNode(1),
  new TreeNode(10, new TreeNode(5), new TreeNode(17))
);

function isValidBST(root: TreeNode | null): boolean {
  const res = [];

  function dfs(root: TreeNode) {
    if (root.left) dfs(root.left);
    res.push(root.val);
    if (root.right) dfs(root.right);
  }
  dfs(root);

  for (let i = 0; i < res.length; i++) if (res[i] >= res[i + 1]) return false;
  return true;
}
console.log(isValidBST(tree));
