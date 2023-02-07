const dict = {
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz"
};

function letterCombinations(digits: string): string[] {
  if (digits === "") return [];
  const digitsArr = digits.split("").reverse();
  const digitsLength = digitsArr.length;
  if (digitsArr.length === 1) return Array.from(dict[+digitsArr.pop()]);

  function recursive(num1: string[], num2: string[]) {
    if (!num2) return [];

    const arr1 = Array.from(num1);
    const arr2 = Array.from(num2);

    const newArr = [];
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        newArr.push(arr1[i] + arr2[j]);
      }
    }
    return newArr.concat(recursive(newArr, dict[+digitsArr.pop()]));
  }
  return recursive(dict[+digitsArr.pop()], dict[+digitsArr.pop()]).filter(
    (el: string) => el.length === digitsLength
  );
}

console.time("combinationSum");
const res = letterCombinations("234");
console.log(res);
console.timeEnd("combinationSum");
