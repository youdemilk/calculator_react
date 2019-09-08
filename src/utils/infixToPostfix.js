import { evaluate } from "./evaluate";
import { prec } from "./prec";

export function infixToPostfix(s) {
  s = s
    .replace(/(?<![\d)])-.+?(?=[+\-*^/]|$)/g, "(0$&)")
    .replace(/\d(?=[csl(])/g, "$&*")
    .replace(/(?<=\))[(scl]/g, "*$&")
    .replace(/[+\-*^/]$/, "");
  s = s.match(/(sin|cos|ln|\d+(\.\d+)?|[\^+*-/()])/g);
  console.log(s);
  let st = [];
  let l = s.length;
  let ns = [];

  for (let i = 0; i < l; i++) {
    if (/\d+/.test(s[i])) ns.push(s[i]);
    else if (s[i] === "(") st.push("(");
    else if (s[i] === ")") {
      while (st[st.length - 1] !== null && st[st.length - 1] !== "(") {
        ns.push(st.pop());
      }
      if (st[st.length - 1] === "(") {
        st.pop();
      }
    } else {
      while (
        st[st.length - 1] !== null &&
        prec(s[i]) <= prec(st[st.length - 1])
      ) {
        ns.push(st.pop());
      }
      st.push(s[i]);
    }
  }

  while (st[st.length - 1] != null) {
    ns.push(st.pop());
  }
  console.log(ns);
  return evaluate(ns);
}
