const convertToCelsius = function (degF) {
  return +((5 * (degF - 32)) / 9).toFixed(1);
};

const convertToFahrenheit = function (degC) {
  return +((9 * degC) / 5 + 32).toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
