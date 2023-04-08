export function countAndSay(n: number): string {
  function helper(str: string): string {
    const arr = [];
    let count = 1;

    for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i + 1]) count++;
      else arr.push([count, str[i]]), (count = 1);
    }
    return arr.reduce((acc, curr) => (acc += curr.join("")), "");
  }

  let str = "1";
  for (let i = 1; i < n; i++) str = helper(str);
  return str;
}
console.log(countAndSay(5));
