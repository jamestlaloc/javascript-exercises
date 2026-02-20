// Take in a string and a number
// If the number is negative, return 'ERROR'
// Use loops to implement and not the built in repeat()

const repeatString = function(str, num) {
  let repeatedString = "";

  if(num <+ 0) {
    return 'ERROR'
  } else {
    for(let i = 0; i < num; i++) {
      console.log(i)
      repeatedString += str;
    }
  }
  return repeatedString
};

// Do not edit below this line
module.exports = repeatString;
