const convertToCelsius = function(far) {
    let c=(far-32) *5/9;
    return Math.round(c*10)/10;
};

const convertToFahrenheit = function(cel) {
  let f=(cel*9/5)+32;
    return (Math.round(f*10)/10);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
