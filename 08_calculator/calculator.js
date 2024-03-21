const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(numArray) {
  let total = 0;
  for (num of numArray) {
    total += num;
  }
  return total;
};

const multiply = function(numArray) {
  let total = 0;
  if (numArray.length > 0) {
    total=1;
  }
  for (num of numArray) {
    total *= num;
  }
  return total;
};

const power = function(num, exp) {
  return num ** exp;
};

const factorial = function(num) {
  let total = 1;
  for (i=num; i>=1; i--) {
    total *= i;
  }
  return total;
};
factorial(5)

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
