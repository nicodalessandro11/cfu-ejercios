// 1. Anonymous Functions & Function Expressions

const add = (x, y) => {
  return x + y;
};

const multiply = (x, y) => {
  return x * y;
};

const divide = (x, y) => {
  return x / y;
};

console.log(add(2, 3)); // output 5
console.log(multiply(2, 3)); // output 6
console.log(divide(6, 3)); // output 2

// -----------------------------
// 2. Function Expression

// 2.1. create a function expression "printMessage"
const printMessage = function () {
  console.log("I am a function expression");
};

// 2.2. create a function (declaration) "useFuncExpression"
function useFuncExpression(func) {
  return func();
}

// invoke useFuncExpression function and pass printMessage as arg
useFuncExpression(printMessage); // should return "I am a function expression"

// -----------------------------
// 3. Callbacks

function processArray(arr, callback) {
  return arr.map(callback);
}

function addTwo(num) {
  return num + 2;
}

const nums = [1, 2, 3, 4];
console.log(processArray(nums, addTwo)); // should output [3, 4, 5, 6]
