class RandomizedSet {
  dict = {};
  constructor() {}

  insert(val: number): boolean {
    if (this.dict[val] === val) return false;
    this.dict[val] = val;
    return true;
  }

  remove(val: number): boolean {
    if (this.dict[val] !== undefined) {
      delete this.dict[val];
      return true;
    } else return false;
  }

  getRandom(): number {
    const values: number[] = Object.values(this.dict);
    return values[~~(Math.random() * values.length)];
  }
}
