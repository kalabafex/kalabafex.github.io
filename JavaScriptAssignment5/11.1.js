"use strict";
let sumReduce = (args) => args.reduce((sumR, num) => sumR + num, 0);
console.log(sumReduce([9, 5, 8]));
