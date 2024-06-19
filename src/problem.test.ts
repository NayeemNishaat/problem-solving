function strip(html: string) {
  let tag = false,
    output = "",
    quote = 0;

  for (let i = 0; i < html.length; i++) {
    if (html[i] === "<") tag = true;
    else if (html[i] === ">") tag = false;
    else if (html[i] === "'" && quote === 0) quote = 1;
    else if (html[i] === "'" && quote === 1) quote = 0;
    else if (!tag && quote === 0) output += html[i];
  }
  return output;
}
console.log(strip("<a href='>Nayeem'>Saymon</a>"));
