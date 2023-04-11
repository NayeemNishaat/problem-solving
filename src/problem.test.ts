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

const root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3), null));

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if (!preorder.length || !inorder.length) return null;

  const root = new TreeNode(preorder[0]);
  const rootIndex = inorder.indexOf(preorder[0]);

  root.left = buildTree(
    preorder.slice(1, rootIndex + 1),
    inorder.slice(0, rootIndex)
  );
  root.right = buildTree(
    preorder.slice(rootIndex + 1),
    inorder.slice(rootIndex + 1)
  );

  return root;
}
console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));
