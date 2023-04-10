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

function inorderTraversal(root: TreeNode | null): number[] {
  const res = [],
    stack = [];

  while (stack.length || root) {
    if (root) stack.push(root), (root = root.left);
    else {
      const currentNode = stack.pop();
      res.push(currentNode.val);
      root = currentNode.right;
    }
  }

  return res;
}
console.log(inorderTraversal(root));
