"use strict";
const multiply = (args) => {
  let total = 1;
  for (let num of args) {
    total *= num;
  }
  return total;
};
console.log(multiply([9, 5, 8]));
