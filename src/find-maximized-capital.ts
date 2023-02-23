// Part: Brute Force Approach
// export function findMaximizedCapital(
//   k: number,
//   w: number,
//   profits: number[],
//   capital: number[]
// ): number {
//   function findMax(w: number) {
//     const arr = [];
//     capital.forEach((c, i) => {
//       c <= w && arr.push(profits[i]);
//     });
//     return Math.max(...arr);
//   }
//   for (let i = 0; i < k; i++) {
//     w += findMax(w);
//   }
//   return w;
// }

// Part: Greedy Approach
export function findMaximizedCapital(
  k: number,
  w: number,
  profits: number[],
  capital: number[]
): number {
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

  const heap = new priorityQueue();
  class Project {
    capital: number;
    profit: number;
    constructor(capital: number, profit: number) {
      this.capital = capital;
      this.profit = profit;
    }
  }
  const projects: Project[] = [];
  for (let i = 0; i < profits.length; i++)
    projects.push(new Project(capital[i], profits[i]));

  projects.sort((a: Project, b: Project) => a.capital - b.capital);
  let ini = 0;
  for (let i = 0; i < k; i++) {
    while (projects[ini]?.capital <= w)
      heap.enqueue("profit", projects[ini++].profit * -1);

    const priorityNode = heap.dequeue();
    if (!priorityNode) break;
    else w += priorityNode.priority * -1;
  }
  return w;
}
console.log(findMaximizedCapital(3, 0, [1, 2, 3], [0, 1, 2]));
