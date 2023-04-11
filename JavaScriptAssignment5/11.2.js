"use strict";
let multiplyReduce = (args) =>
  args.reduce((multiplyR, num) => multiplyR * num, 1);
console.log(multiplyReduce([9, 5, 8]));
