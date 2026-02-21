//Take in an integer
//Determine if the integer is divisible by four
//

const leapYears = function(year) {
  if(year % 4 === 0 || year % 400 === 0) {
    return true;
  } else if(year % 4 === 0 && year % 100) {
    return false;
  }
};

// Do not edit below this line
module.exports = leapYears;
