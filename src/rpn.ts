interface IOperatorSets {
  [key: string]: (a: number, b: number) => number;
}

function evalRPN(tokens: string[]): number {
  const operatorSets: IOperatorSets = {
    "+": (a: number, b: number) => a + b,
    "-": (a: number, b: number) => a - b,
    "*": (a: number, b: number) => a * b,
    "/": (a: number, b: number) => (a / b) | 0
  };

  const stack: number[] = [];
  tokens.forEach((r) => {
    if (operatorSets[r] !== undefined) {
      const b = stack.pop();
      const a = stack.pop();
      stack.push(operatorSets[r](a, b));
    } else stack.push(Number(r));
  });
  return stack.pop();
}
