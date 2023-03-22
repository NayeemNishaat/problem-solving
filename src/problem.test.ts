function countPrimes(n: number): number {
  const arr = Array.from({ length: n }, () => true);
  arr[0] = arr[1] = false;
  for (let i = 2; i * i < n; i++)
    if (arr[i]) for (let j = i * i; j < n; j += i) arr[j] = false;

  return arr.reduce((acc, el) => (el ? ++acc : acc), 0);
}
console.log(countPrimes(10));
