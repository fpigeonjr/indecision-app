"use strict";

var square = function square(x) {
  return x * x;
};

var squareTwo = function squareTwo(x) {
  return x * x;
};

var sqaureArrow = function sqaureArrow(x) {
  return x * x;
};

console.log(square(10));
console.log(squareTwo(2));
console.log(sqaureArrow(9));

// challenge
// getFirstName
// create reg arrow func
// create arrow using short hand syntax


var getFirstName = function getFirstName(fullName) {
  return fullName.split(" ")[0];
};

var getFirstNameShort = function getFirstNameShort(fullName) {
  return fullName.split(" ")[0];
};

console.log(getFirstName("Frank Pigeon"));

console.log(getFirstNameShort("Emma Stone"));
