function solution(num: number) {
  let res = Array.from({ length: num }, () => []);
  let n = 1;

  for (let i = 0; i < num; i++) {
    for (let j = 0; j < i + 1; j++) {
      res[i][j] = n;
      n++;
    }
  }

  return res;
}
console.log(solution(6));
