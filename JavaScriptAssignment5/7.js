"use strict";
const filterLongWords = (args, n) => {
  let longEnough = [];
  for (let word of args) {
    if (word.length > n) longEnough.push(word);
  }
  return longEnough;
};
console.log(filterLongWords(["relo", "re", "rol"], 2));
