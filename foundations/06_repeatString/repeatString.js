// Take in a string and a number
// If the number is negative, return 'ERROR'
// Use loops to implement and not the built in repeat()

const repeatString = function(str, num) {
  if(num < 0) {
    return 'ERROR'
  } else {
    for(let i = 0; i < num; i++) {
       return str.concat(str, str)
    }
  }

};

// Do not edit below this line
module.exports = repeatString;
