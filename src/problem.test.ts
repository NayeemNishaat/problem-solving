function generic(x: number): number {
  const xStr = x.toString();
  let reversed = 0;
  if (xStr[0] === "-") reversed = -[...xStr.slice(1)].reverse().join("");
  else reversed = +[...xStr].reverse().join("");

  if (reversed > 2 ** 31 - 1) return 0;
  if (reversed < -(2 ** 31)) return 0;
  return reversed;
}
console.log(generic(56786));
