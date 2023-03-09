class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
const head = new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(1))));
console.log(head);

function hasCycle(head: ListNode | null): boolean {
  let slow = head,
    fast = head;

  while (fast) {
    slow = slow.next;
    fast = fast.next?.next;
    if (slow === fast) return true;
  }
  return false;
}
console.log(hasCycle(head));
