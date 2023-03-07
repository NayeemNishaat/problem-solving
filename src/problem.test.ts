class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const head = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);
function reverseList(head: ListNode | null): ListNode | null {
  let prev = null;
  while (head) {
    const temp = head.next;
    head.next = prev;
    prev = head;
    head = temp;
  }
  return prev;
}
console.log(reverseList(head));
