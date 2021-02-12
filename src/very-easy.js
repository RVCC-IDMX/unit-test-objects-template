/* very-easy.js */

function isInRange(num, obj) {
  // Given a number and an object with 
  // min and max properties, return true 
  // if the number lies within the given 
  // range(inclusive)
  if (num >= obj.min && num <= obj.max) {
    return true;
  }
  return false;
}

function isEmptyObject(obj) {
  // return true if an object is empty, 
  // return false otherwise
  // it is empty if there are no keys
  if (Object.keys(obj).length == 0) {
    return true;
  }
  return false;
}

function getVolumeOfBox(box) {
  // Create a function that gets 
  // an object that holds the height, width 
  // and length of a box and returns the 
  // volume of the box.

  return box.height * box.width * box.length;
}

module.exports = {
  isInRange,
  isEmptyObject,
  getVolumeOfBox,
};