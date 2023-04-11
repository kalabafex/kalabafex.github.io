"use strict";
let printOddNumbersOnly = (args) => {
  for (let num of args) {
    if (num % 2 != 0) console.log(num);
  }
};
printOddNumbersOnly([1, 2, 3, 4, 5]);
