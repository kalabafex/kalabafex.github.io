"use strict";
const isVowel = (ch) => {
  if (
    ch == "a" ||
    ch == "e" ||
    ch == "i" ||
    ch == "o" ||
    ch == "u" ||
    ch == "A" ||
    ch == "E" ||
    ch == "I" ||
    ch == "O" ||
    ch == "U"
  ) {
    return true;
  }
  return false;
};
console.log(isVowel("a"));
