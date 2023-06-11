class RandomizedSet {
  map = new Map();

  constructor() {}

  insert(val: number): boolean {
    if (this.map.get(val) === val) return false;
    this.map.set(val, val);
    return true;
  }

  remove(val: number): boolean {
    if (this.map.has(val)) {
      this.map.delete(val);
      return true;
    } else return false;
  }

  getRandom(): number {
    const values: number[] = [...this.map.values()];
    return values[~~(Math.random() * values.length)];
  }
}
