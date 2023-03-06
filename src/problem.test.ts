class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function deleteNode(node: ListNode | null): void {
  const nextNode = node.next;
  node.val = nextNode.val;
  node.next = nextNode.next;
  nextNode.next = null;
}
