"use strict";
let sums = (args) => sumReduce(args.filter((x) => x > 20));
console.log(sums([20, 22, 3, 22]));
