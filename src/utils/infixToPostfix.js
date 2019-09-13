import { evaluate } from "./evaluate";
import { prec } from "./prec";

export function infixToPostfix(expression) {
  expression = expression
    .replace(/(?<![\d)])-.+?(?=[+\-*^/]|$)/g, "(0$&)")
    .replace(/\d(?=[csl(])/g, "$&*")
    .replace(/(?<=\))[(scl]/g, "*$&")
    .replace(/[+\-*^/]$/, "");
  expression = expression.match(/(sin|cos|ln|√|\d+(\.\d+)?|[\^+*-√/()])/g);

  let string = [],
    newString = [];

  for (let i = 0; i < expression.length; i++) {
    if (/\d+/.test(expression[i])) newString.push(expression[i]);
    else if (expression[i] === "(") string.push("(");
    else if (expression[i] === ")") {
      while (
        string[string.length - 1] !== null &&
        string[string.length - 1] !== "("
      ) {
        newString.push(string.pop());
      }
      if (string[string.length - 1] === "(") {
        string.pop();
      }
    } else {
      while (
        string[string.length - 1] !== null &&
        prec(string[i]) <= prec(string[string.length - 1])
      ) {
        newString.push(string.pop());
      }
      string.push(string[i]);
    }
  }

  while (string[string.length - 1] != null) {
    newString.push(string.pop());
  }

  return evaluate(newString);
}
