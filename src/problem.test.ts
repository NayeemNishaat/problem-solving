function sum(a: number, b: number) {
  const aBin = a.toString(2).split("");
  const bBin = b.toString(2).split("");
  console.log(bBin);
  let carry = 0;
  const res = [];
  while (aBin.length || bBin.length) {
    const lastA = +aBin.pop();
    const lastB = +bBin.pop();

    if (!lastA) {
      if (carry === 0) res.push(lastB);
      else {
        if (lastB === 0) res.push(1);
        else {
          res.push(0);
        }
        carry = 0;
      }
      continue;
    }

    if (!lastB) {
      if (carry === 0) res.push(lastA);
      else {
        if (lastA === 0) res.push(1);
        else {
          res.push(0);
        }
        carry = 0;
      }
      continue;
    }

    if (lastA === 1 && lastB === 1) {
      if (carry === 0) res.push(0);
      else res.push(1);

      carry = 1;
      continue;
    }

    if (lastA === 1 || lastB === 1) {
      if (carry === 0) res.push(1);
      else {
        carry = 1;
        res.push(0);
      }

      continue;
    }

    if (carry === 1) {
      res.push(1);
      carry = 0;
    } else res.push(0);
  }
  // console.log(res);
  res.push(carry);
  res.reverse();
  return Number("0b" + res.join(""));
}
console.log(sum(200, 10));
