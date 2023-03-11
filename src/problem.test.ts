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

function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];
  const res = [],
    queue = [root];

  while (queue.length) {
    const level = [];
    const len = queue.length;

    for (let i = 0; i < len; i++) {
      const current = queue.shift();
      level.push(current.val);
      current.left && queue.push(current.left);
      current.right && queue.push(current.right);
    }
    res.push(level);
  }

  return res;
}
console.log(levelOrder(tree));
