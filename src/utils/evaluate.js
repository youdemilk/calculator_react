export function evaluate(expr) {
  let operators = {
      "+": (x, y) => x + y,
      "-": (x, y) => x - y,
      "*": (x, y) => x * y,
      "/": (x, y) => x / y,
      "^": (x, y) => Math.pow(x, y),
    },
    functions = {
      sin: x => Math.sin(x),
      cos: x => Math.cos(x),
      ln: x => Math.log(x),
    },
    stack = [];
  console.log(expr);
  expr.forEach(token => {
    if (token in operators) {
      let [y, x] = [stack.pop(), stack.pop()];
      stack.push(operators[token](x, y));
    } else if (token in functions) {
      stack.push(functions[token](stack.pop()));
    } else {
      stack.push(parseFloat(token));
    }
  });
  return stack.pop();
}
