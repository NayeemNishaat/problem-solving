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

export function letterCombinations(digits: string): string[] {
  if (digits === "") return [];
  const digitsArr = digits.split("").reverse();
  const digitsLength = digitsArr.length;
  if (digitsLength === 1) return Array.from(dict[+digitsArr.pop()]);

  function recursive(str1: string[] | string, str2: string) {
    if (!str2) return [];

    const arr1 = Array.from(str1);
    const arr2 = Array.from(str2);

    const newArr = [];
    for (let i = 0; i < arr1.length; i++)
      for (let j = 0; j < arr2.length; j++) newArr.push(arr1[i] + arr2[j]);

    return newArr.concat(recursive(newArr, dict[+digitsArr.pop()]));
  }

  return recursive(dict[+digitsArr.pop()], dict[+digitsArr.pop()]).filter(
    (el: string) => el.length === digitsLength
  );
}

const res = letterCombinations("234");
console.log(res);

/* function letterCombinations(digits: string): string[] {
  if (!digits) return [];

  const dict: { [key: string]: string[] } = {
    "1": null,
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"]
  };

  let res: string[] = [""];
  for (const c of digits) {
    const list = dict[c];
    if (!list) continue;

    const temp: string[] = [];
    for (const l of list) for (const str of res) temp.push(str + l);
    res = temp;
  }
  return res;
} */
