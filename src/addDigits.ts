function addDigits(num: number): number {
  const strNum = num.toString();

  let numArr = strNum.split("").map((el) => +el);

  while (numArr.length !== 1) {
    const sum = numArr.reduce((acc, curr) => acc + curr, 0);

    numArr = sum
      .toString()
      .split("")
      .map((el) => +el);
  }

  return numArr[0];
}
console.log(addDigits(9878));
