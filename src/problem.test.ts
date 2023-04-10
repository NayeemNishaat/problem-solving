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

function zigzagLevelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];

  const res = [],
    queue = [root];
  let lvl = 0;

  while (queue.length) {
    const len = queue.length;
    const temp = [];

    for (let i = 0; i < len; i++) {
      const currentNode = queue.shift();
      temp.push(currentNode.val);

      currentNode.left && queue.push(currentNode.left);
      currentNode.right && queue.push(currentNode.right);
    }

    if (lvl % 2 === 1) temp.reverse();
    res.push(temp);
    lvl++;
  }

  return res;
}
console.log(zigzagLevelOrder(root));
