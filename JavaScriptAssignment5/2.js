"use strict";

const max = (x, y) => (x > y ? x : y);
const maxOfThree = (x, y, z) => max(max(x, y), z);
console.log(maxOfThree(9, 5, 8));
