"use strict";
const sum = (args) => {
  let total = 0;
  for (let num of args) {
    total += num;
  }
  return total;
};
console.log(sum([9, 5, 8]));
