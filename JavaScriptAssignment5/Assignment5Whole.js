"use strict";

const max = (x, y) => (x > y ? x : y);
console.log(max(5, 8));
const maxOfThree = (x, y, z) => max(max(x, y), z);
console.log(maxOfThree(9, 5, 8));
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
const sum = (args) => {
  let total = 0;
  for (let num of args) {
    total += num;
  }
  return total;
};
console.log(sum([9, 5, 8]));
const multiply = (args) => {
  let total = 1;
  for (let num of args) {
    total *= num;
  }
  return total;
};
console.log(multiply([9, 5, 8]));
const reverse = (word) => word.split("").reverse().join("");
console.log(reverse("relo"));
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
const filterLongWords = (args, n) => {
  let longEnough = [];
  for (let word of args) {
    if (word.length > n) longEnough.push(word);
  }
  return longEnough;
};
console.log(filterLongWords(["relo", "re", "rol"], 2));
let computeSumOfSquares = (args) =>
  args.reduce((total, num) => total + num * num, 0);
console.log(computeSumOfSquares([3, 5, 2]));
let printOddNumbersOnly = (args) => {
  for (let num of args) {
    if (num % 2 != 0) console.log(num);
  }
};

let returnEvenNumbersOnly = (args) => {
  let evens = [];
  for (let num of args) {
    if (num % 2 == 0) evens.push(num);
  }
  return evens;
};
printOddNumbersOnly([1, 2, 3, 4, 5]);
let computeSumOfSquaresOfEvensOnly = (args) =>
  computeSumOfSquares(returnEvenNumbersOnly(args));
console.log(computeSumOfSquaresOfEvensOnly([1, 2, 3, 4, 5]));

let sumReduce = (args) => args.reduce((sumR, num) => sumR + num, 0);
let multiplyReduce = (args) =>
  args.reduce((multiplyR, num) => multiplyR * num, 1);
console.log(sumReduce([9, 5, 8]));

console.log(multiplyReduce([9, 5, 8]));

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

let printFibo = (n, a, b) => {
  let print = "";
  let next;
  for (let i = 0; i < n; i++) {
    print += i == n - 1 ? a + "" : a + ", ";
    next = a + b;
    a = b;
    b = next;
  }
  console.log(print);
};
printFibo(5, 2, 3);

let sums = (args) => sumReduce(args.filter((x) => x > 20));
console.log(sums([20, 22, 3, 22]));

let getNewArray = (args) => {
  let newString = [];
  for (let word of args) {
    if (word.length > 5 && word.includes("a")) newString.push(word);
  }
  return newString;
};
console.log(getNewArray(["relative", "real", "rolling"]));

x = 1;
var a = 5;
var b = 10;
var c = (a, b, c) => {
  console.log(x);
  console.log(a);
  var f = (a, b, c) => {
    b = a;
    console.log(b);
    b = c;
    var x = 5;
  };
  f(a, b, c);
  console.log(b);
  var x = 10;
};
c(8, 9, 10);
console.log(b);
console.log(x);

var x = 9;
function myFunction() {
  return x * x;
}
console.log(myFunction());
x = 5;
console.log(myFunction);

var foo = 1;
let bar = () => {
  if (!foo) {
    var foo = 10;
  }
  alert(foo);
};
bar();
