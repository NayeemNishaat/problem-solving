export class Node {
  val: any;
  priority: any;

  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class priorityQueue {
  values: any[];
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
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

const heap = new priorityQueue();

function leastInterval(tasks: string[], n: number): number {
  if (n === 0) return tasks.length;

  const map = new Map();
  const queue = [];
  let time = 0;

  tasks.forEach((t) => {
    if (map.has(t)) map.set(t, map.get(t) + 1);
    else map.set(t, 1);
  });

  for (const [k, v] of map.entries()) {
    heap.enqueue(k, v * -1);
  }

  while (heap.values.length || queue.length) {
    if (queue[0]?.[2] === time) {
      const v = queue.shift();
      heap.enqueue(v[0], v[1]);
    }

    const val = heap.dequeue();
    if (val && val.priority + 1 !== 0) {
      queue.push([val.val, val.priority + 1, time + n + 1]);
    }

    time++;
  }

  return time;
}

console.log(
  // leastInterval(["A", "A", "A", "A", "A", "A", "B", "C", "D", "E", "F", "G"], 2) // 16
  leastInterval(["A", "A", "A", "B", "B", "B", "C", "C", "C", "D", "E", "E"], 2) // 12
);
