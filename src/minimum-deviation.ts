export function minimumDeviation(nums: number[]): number {
  class Node {
    val: string;
    priority: number;
    constructor(val: string, priority: number) {
      this.val = val;
      this.priority = priority;
    }
  }
  class priorityQueue {
    values: Node[];
    constructor() {
      this.values = [];
    }

    enqueue(val: string, priority: number) {
      const newNode = new Node(val, priority);
      const values = this.values;
      values.push(newNode);
      let idx = values.length - 1,
        parentIdx = Math.floor((idx - 1) / 2);

      while (values[idx].priority < values[parentIdx]?.priority) {
        [values[idx], values[parentIdx]] = [values[parentIdx], values[idx]];

        idx = parentIdx;
        parentIdx = Math.floor((idx - 1) / 2);
      }
    }

    dequeue() {
      const vals = this.values;
      [vals[0], vals[vals.length - 1]] = [vals[vals.length - 1], vals[0]];
      const extracted = vals.pop();

      let parentIdx = 0,
        left = 2 * parentIdx + 1,
        right = 2 * parentIdx + 2;

      while (
        vals[left]?.priority < vals[parentIdx]?.priority ||
        vals[right]?.priority < vals[parentIdx]?.priority
      ) {
        if (!vals[right] || vals[left].priority < vals[right].priority)
          ([vals[left], vals[parentIdx]] = [vals[parentIdx], vals[left]]),
            (parentIdx = left);
        else
          ([vals[right], vals[parentIdx]] = [vals[parentIdx], vals[right]]),
            (parentIdx = right);

        (left = 2 * parentIdx + 1), (right = 2 * parentIdx + 2);
      }
      return extracted;
    }
  }
  const pq = new priorityQueue();

  let minVal = Number.MAX_SAFE_INTEGER;
  for (let num of nums) {
    if (num % 2 === 1) num = num * 2;
    pq.enqueue(num.toString(), -num);
    minVal = Math.min(minVal, num);
  }
  let minDeviation = Number.MAX_SAFE_INTEGER;
  while (true) {
    const maxVal = pq.dequeue();
    minDeviation = Math.min(minDeviation, -maxVal.priority - minVal);
    if (-maxVal.priority % 2 === 1) break;
    maxVal.priority = -maxVal.priority / 2;
    minVal = Math.min(minVal, maxVal.priority);
    pq.enqueue(maxVal.val, -maxVal.priority);
  }
  return minDeviation;
}
console.log(minimumDeviation([10, 1, 5]));
