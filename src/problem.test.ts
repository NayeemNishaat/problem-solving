function solution(s: number[]) {
  s = s.sort((a, b) => a - b);
  const res: number[][] = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i - 1]) continue;
    let left = i + 1,
      right = s.length - 1;

    while (left < right) {
      const sum = s[i] + s[left] + s[right];

      if (sum === 0) {
        res.push([s[i], s[left], s[right]]);
        left++, right--;

        while (s[left] === s[left - 1]) left++;
        while (s[right] === s[right + 1]) right--;
      } else if (sum > 0) right--;
      else left++;
    }
  }
  return res;
}
console.log(solution([-1, 0, 1, 2, -1, -4]));
