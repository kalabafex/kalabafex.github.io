"use strict";
let returnEvenNumbersOnly = (args) => {
  let evens = [];
  for (let num of args) {
    if (num % 2 == 0) evens.push(num);
  }
  return evens;
};
let computeSumOfSquares = (args) =>
  args.reduce((total, num) => total + num * num, 0);

let computeSumOfSquaresOfEvensOnly = (args) =>
  computeSumOfSquares(returnEvenNumbersOnly(args));
console.log(computeSumOfSquaresOfEvensOnly([1, 2, 3, 4, 5]));
