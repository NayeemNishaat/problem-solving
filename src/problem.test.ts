class MinStack {
  head = [];
  constructor() {}

  push(val: number): void {
    let min = val;
    if (this.head.length)
      min = Math.min(this.head[this.head.length - 1].min, min);
    this.head.push({ val, min });
  }

  pop(): void {
    this.head.pop();
  }

  top(): number {
    return this.head[this.head.length - 1].val;
  }

  getMin(): number {
    return this.head[this.head.length - 1].min;
  }
}
const st = new MinStack();
st.push(1);
st.push(-2);
st.push(0);
st.push(-78);
console.log(st.getMin());
st.pop();
console.log(st.getMin());
