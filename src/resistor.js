/* resistor.js */

/* 
  see this resistor calculator for help
   http://bit.ly/2NjS274
*/

function getColorValue(color) {
  /* 
    elctronic resistors have colored bands where each color represents a numerical number
  */
  
  // for a given color,
  // use the below object and
  // return the color's numerical value
  const colors = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    gray: 8,
    white: 9,
  }
  return colors[color];
}


function getBandPairValue(bands) {
  // given an array of 2 colors
  // return a value for the pair
  // for example: blue green
  // returns a 65
  // but green blue returns a 56
  const [b1, b2] = bands;
  return getColorValue(b1) * 10  + getColorValue(b2);
}

function formatNumber(val) {
  // given a number return a string
  // the represents the number with a
  // suffix
  // For example, 
  // 26 returns 26
  // 2600 would return 2.6k
  // 26000 would return 26k
  // 260,000 would return 260k
  // 2,600,000 would return 2.6M
  // 2,600,000,000 would return 2.6G
  const ranges = [
    { divider: 1e9 , suffix: 'G' },
    { divider: 1e6 , suffix: 'M' },
    { divider: 1e3 , suffix: 'k' }
  ];
  for (let i = 0; i < ranges.length; i++) {
    if (val >= ranges[i].divider) {
      return (val / ranges[i].divider).toString() + ranges[i].suffix;
    }
  }
  return val.toString();
}

function getValueWithMultiplier(value, color) {
  // given a number called value, multiply that 
  // by the power of ten as 
  // represented by the color code
  // return the result
  return Math.pow(10, getColorValue(color)) * value;
}

function getTolerance(color) {
  // for the given color 
  // return a string for its tolerance
  // For example, 
  // 'violet' returns ±0.1%
  // 
  const colors = {
    brown: '±1%',
    red: '±2%',
    green: '±0.5%',
    blue: '±0.25%',
    violet: '±0.1%',
    grey: '±0.05%',
    gray: '±0.05%',
    gold: '±5%',
    silver: '±10%',
  }
  return colors[color];

}

function getResistorOhms(bands) {
  /* 
  see this calculator for help
   http://bit.ly/2NjS274

   given an array of 4 colors, calculate the
   ohms of the resistor, and return
   a string 
   For example the array ['orange','grey','green','blue']
   returns a string like this:
   'Resistor value: 3.8M Ohms ±0.25%'
  
   USE THE FUNCTIONS ALREADY CREATED
  */
  
  let val = getBandPairValue([bands[0], bands[1]]);
  val = getValueWithMultiplier(val, bands[2]);
  const ohms = formatNumber(val);
  const tolerance = getTolerance(bands[3]);
  return `Resistor value: ${ohms} Ohms ${tolerance}`;

  
}

module.exports = {
  getColorValue,
  getBandPairValue,
  formatNumber,
  getValueWithMultiplier,
  getTolerance,
  getResistorOhms,
};