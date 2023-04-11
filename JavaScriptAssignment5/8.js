"use strict";
let computeSumOfSquares = (args) =>
  args.reduce((total, num) => total + num * num, 0);
console.log(computeSumOfSquares([3, 5, 2]));
