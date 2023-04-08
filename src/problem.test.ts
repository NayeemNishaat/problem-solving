function countAndSay(n: number): string {
  function helper(str: string): string {
    const map = new Map();

    for (let i = 0; i < str.length; i++) {
      if (map.has(str[i])) map.set(str[i], map.get(str[i]) + 1);
      else map.set(str[i], 1);
    }

    const arr = [];
    map.forEach((v, k) => {
      arr.push(`${v}${k}`);
    });

    return arr.join("");
  }

  let str = "1";
  for (let i = 1; i < n; i++) {
    str = helper(str);
  }

  return str;
}
console.log(countAndSay(5));
// 1
// 11
// 21
// 1211
