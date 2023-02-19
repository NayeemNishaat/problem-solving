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
  if (!root) return [];
  const res: number[][] = [];
  const queue: TreeNode[] = [root];
  let level = 0;

  while (queue.length) {
    const temp = [];
    const len = queue.length;

    for (let i = 0; i < len; i++) {
      const current = queue.shift();
      temp.push(current.val);

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    if (level % 2 === 1) temp.reverse();
    res.push(temp);
    ++level;
  }
  return res;
}
console.log(
  zigzagLevelOrder(
    new TreeNode(
      1,
      new TreeNode(2, new TreeNode(4), null),
      new TreeNode(3, null, new TreeNode(5))
    )
  )
);
