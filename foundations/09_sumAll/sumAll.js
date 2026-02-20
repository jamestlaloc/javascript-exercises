// Takes two positive integers
// Add every integer in-between, including the inputs
// Return the sum

const sumAll = function(n1, n2) {
  let sum = 0;

    for(let i = n1; i <= n2; i++) {
      console.log(i);
      sum += i;
    }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
