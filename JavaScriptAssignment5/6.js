"use strict";
const findLongestWord = (args) => {
  let max = args[0].length;
  for (let str of args) {
    if (max < str.length) {
      max = str.length;
    }
  }
  return max;
};
console.log(findLongestWord(["relo", "re", "rol"]));
