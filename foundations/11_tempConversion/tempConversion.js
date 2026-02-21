// Formula for Fahrenheit to Celsius: (32°F − 32) × 5/9 = 0°C

const convertToCelsius = function(f) {
  const conversion = 5/9 * (f - 32);
  const celsius = Math.round(conversion * 10) / 10;

  return celsius;
};


//Formula for Celsius to Fahrenheit: °F = (9/5 × °C) + 32
const convertToFahrenheit = function(c) {
  const conversion = (9/5 * c) + 32;
  const fahrenheit = Math.round(conversion * 10) / 10;

  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
