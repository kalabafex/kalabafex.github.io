"use strict";
let getNewArray = (args) => {
  let newString = [];
  for (let word of args) {
    if (word.length > 5 && word.includes("a")) newString.push(word);
  }
  return newString;
};
console.log(getNewArray(["relative", "real", "rolling"]));
