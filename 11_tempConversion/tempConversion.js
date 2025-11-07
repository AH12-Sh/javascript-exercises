const convertToCelsius = function(fahrenheit) {
 let unroundedNumber = (fahrenheit - 32) * (5/9);
 let rounded = Math.round(unroundedNumber * 10) / 10;
 return rounded
};

const convertToFahrenheit = function(celsius) {
  let unroundedNumber = (celsius * (9/5) + 32);
  let rounded = Math.round(unroundedNumber * 10) / 10;
  return rounded
  
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};



/* formula for fahrenheit to celsius °C = (°F - 32) x (/5)
/ for celsius to fahrenheit c = (x × ⁠9/5⁠ + 32) °F


to round numbers to one decimal place 
var rounded = Math.round(number * 10) / 10

to two decimal places *100/)100
*/