function generateParenthesis(n: number): string[] {
  const stack = [],
    res = [];

  function backtrack(open: number, close: number) {
    if (open === close && close === n && open === n)
      return res.push(stack.join(""));

    if (open < 3) stack.push("("), backtrack(open + 1, close), stack.pop();
    if (close < open) stack.push(")"), backtrack(open, close + 1), stack.pop();
  }
  backtrack(0, 0);

  return res;
}

console.log(generateParenthesis(3));
