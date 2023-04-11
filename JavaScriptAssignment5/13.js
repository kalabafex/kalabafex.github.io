"use strict";
let printFibo = (n, a, b) => {
  let print = "";
  let next;
  for (let i = 0; i < n; i++) {
    print += i == n - 1 ? a + "" : a + ", ";
    next = a + b;
    a = b;
    b = next;
  }
  console.log(print);
};
printFibo(5, 2, 3);
