class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  next: TreeNode | null;
  constructor(
    val?: number,
    left?: TreeNode,
    right?: TreeNode,
    next?: TreeNode
  ) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
  }
}

const root = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3, new TreeNode(6), new TreeNode(7))
);

function connect(root: TreeNode | null) {
  if (!root) return null;
  const queue = [root];

  while (queue.length) {
    let len = queue.length;

    for (let i = 0; i < len; i++) {
      const currentNode = queue.shift();
      currentNode.next = queue[0];

      if (i === len - 1) currentNode.next = null;

      currentNode.left && queue.push(currentNode.left);
      currentNode.right && queue.push(currentNode.right);
    }
  }
  return root;
}
console.log(connect(null));
