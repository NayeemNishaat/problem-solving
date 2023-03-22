export function countPrimes(n: number): number {
  const arr = new Array(n);
  let res = 0;

  for (let i = 2; i < n; i++)
    if (!arr[i]) {
      for (let j = i * i; j < n; j += i) arr[j] = true;
      res++;
    }

  return res;
}
console.log(countPrimes(4));
