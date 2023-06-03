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

function serialize(root: TreeNode | null): string {
  const path: (TreeNode | null)[] = [];
  const preorder = (node: TreeNode | null) => {
    path.push(node);
    if (node === null) {
      return;
    }
    preorder(node.left);
    preorder(node.right);
  };
  preorder(root);
  return path.map((node) => (node === null ? "#" : node.val)).join(",");
}

function deserialize(data: string): TreeNode | null {
  if (data === "") return null;
  const path = data
    .split(",")
    .map((val) => (val === "#" ? null : new TreeNode(Number(val))));

  const preorder = (path: (TreeNode | null)[]): TreeNode => {
    if (path.length === 0) return;
    const node = path.shift();
    if (node === null) return null;

    node.left = preorder(path);
    node.right = preorder(path);

    return node;
  };
  return preorder(path);
}
