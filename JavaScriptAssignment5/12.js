"use strict";
let findSecondBiggest = (args) => {
  let max = args[0];
  let secondMax = args[1];
  for (let num of args) {
    if (max < num) {
      secondMax = max;
      max = num;
    }
  }
  return secondMax;
};
findSecondBiggest([1, 2, 3, 4, 5]);
