export function prec(c) {
  if (c === "^" || c === "√") return 3;
  else if (c === "*" || c === "/") return 2;
  else if (c === "+" || c === "-") return 1;
  else return -1;
}
