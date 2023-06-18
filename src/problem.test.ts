function isHappy(n: number): boolean {
  while (n > 9) {
    n = n
      .toString()
      .split("")
      .reduce((acc, el) => acc + +el * +el, 0);

    if (n === 1 || n === 7) return true;
  }
  return n === 1 || n === 7;
}
console.log(isHappy(13));
