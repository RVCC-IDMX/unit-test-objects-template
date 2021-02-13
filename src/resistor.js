/* resistor.js */

/*
  elctronic resistors have colored bands where each color represents a numerical number
  Electrical engineers can read the colors and
  determine the resitance value in Ohms

  see this resistor calculator for help
   http://bit.ly/2NjS274
*/

function getColorValue(color) {
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
  };
}

function getBandPairValue(bands) {
  // given an array of 2 colors
  // return a value for the pair
  // for example: blue green
  // returns a 65
  // but green blue returns a 56

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
  //
  // Hint: I found a solution from stackoverflow
  // Be careful, if you copy older code make
  // sure you replace var with either const or let

}

function getValueWithMultiplier(val, color) {
  // given a number called value, multiply that
  // by the power of ten as
  // represented by the color code
  // return the result

}

function getTolerance(color) {
  // for the given color
  // return a string for its tolerance
  // For example,
  // 'violet' returns ±0.1%
  //

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

}

module.exports = {
  getColorValue,
  getBandPairValue,
  formatNumber,
  getValueWithMultiplier,
  getTolerance,
  getResistorOhms,
};
