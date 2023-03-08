class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const head = new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(1))));

function isPalindrome(head: ListNode | null): boolean {
  let fast = head,
    slow = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  let reverse = null;
  while (slow) {
    let temp = slow.next;
    slow.next = reverse;
    reverse = slow;
    slow = temp;
  }

  while (reverse) {
    if (reverse.val !== head.val) return false;
    head = head.next;
    reverse = reverse.next;
  }

  return true;
}
console.log(isPalindrome(head));
