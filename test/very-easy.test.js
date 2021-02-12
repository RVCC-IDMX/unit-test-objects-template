/* very-easy.test.js */

const {
  isInRange,
  isEmptyObject,
  getVolumeOfBox,
} = require('../src/very-easy');


/* isInRange */
test('check if 4.3 is in (inclusive) {min:2,max:7.3} is true', () => {
  const maxMinObj = {
    min: 2,
    max: 7.3,
  }
  expect(isInRange(4.3, maxMinObj)).toBe(true);
});

test('check if 2 is in (inclusive) {min:2,max:7.3} is true', () => {
  const maxMinObj = {
    min: 2,
    max: 7.3,
  }
  expect(isInRange(2, maxMinObj)).toBe(true);
});

test('check if 7.3 is in (inclusive) {min:2,max:7.3} is true', () => {
  const maxMinObj = {
    min: 2,
    max: 7.3,
  }
  expect(isInRange(7.3, maxMinObj)).toBe(true);
});

test('check if -8 is in (inclusive) {min:2,max:7.3} is false', () => {
  const maxMinObj = {
    min: 2,
    max: 7.3,
  }
  expect(isInRange(-8, maxMinObj)).toBe(false);
});

/* isEmptyObject */

test('check if {} is an empty object', () => {
  expect(isEmptyObject({})).toBe(true);
});

test('check if an object is not an empty object', () => {
  const myDog = {
    name: 'Gizmo',
    age: 13,
    breed: 'Chihuahua'
  }
  expect(isEmptyObject(myDog)).toBe(false);
});

/* getVolumeOfBox */

test('given an object with box dimensions, return volume', () => {
  const myBox = {
    height: 2,
    width: 4,
    length: 5,
  }
  expect(getVolumeOfBox(myBox)).toBe(40);
});
