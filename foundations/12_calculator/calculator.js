const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	let sum = arr.reduce((total, currentNum) => total + currentNum, 0);
  return sum;
};

const multiply = function(arr) {
  let product = arr.reduce((total, currentNum) => total * currentNum, 1);
  return product;
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(n) {
	let result = 1;
  if(n < 0) {
    return 'undefined'
  } else if (n === 0 || n === 1){
    return 1;
  } else {
    for(let i = 2; i <= n; i++) {
      result *= i;
    }
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
