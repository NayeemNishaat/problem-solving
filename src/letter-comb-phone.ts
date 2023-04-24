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

export function letterCombinations(digits: string): string[] {}

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
