// Take in an array and indefinite amount of args
// Remove the other args from the array given
// Return the resulting array

const removeFromArray = function(arr, ...args) {
  // const index = arr.indexOf(...args);
  
  // arr.splice(index, Infinity);
  
  // return arr; 
  const newArr = arr.filter(item => !args.includes(item));
  return newArr;
}

// Do not edit below this line
module.exports = removeFromArray;
