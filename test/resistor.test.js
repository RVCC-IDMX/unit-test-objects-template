/* eslint-disable no-undef */
/* resistor.test.js */

const {
  getColorValue,
  getBandPairValue,
  formatNumber,
  getValueWithMultiplier,
  getTolerance,
  getResistorOhms,
} = require('../src/resistor');

/* getColorValue */

test('resistor color brown is 1', () => {
  expect(getColorValue('brown')).toBe(1);
});

test('resistor color green is 5', () => {
  expect(getColorValue('green')).toBe(5);
});


/* getBandPairValue */

test('band pair value of yellow/violet is 47', () => {
  expect(getBandPairValue(['yellow', 'violet'])).toBe(47);
});

test('band pair value of red/blue is 26', () => {
  expect(getBandPairValue(['red', 'blue'])).toBe(26);
});

/* formatNumber */

test('number 75 is 75', () => {
  expect(formatNumber(75)).toBe('75');
});

test('number 8500 is 8.5k', () => {
  expect(formatNumber(8500)).toBe('8.5k');
});

test('number 470000 is 470k', () => {
  expect(formatNumber(8500)).toBe('8.5k');
});

test('number 2100000 is 2.1M', () => {
  expect(formatNumber(2100000)).toBe('2.1M');
});

test('number 88000000 is 88M', () => {
  expect(formatNumber(88000000)).toBe('88M');
});

test('number 21,000,000,000 is 21G', () => {
  expect(formatNumber(21000000000)).toBe('21G');
});

/* getValueWithMultiplier */

test('38 with green multpler is 3800000', () => {
  expect(getValueWithMultiplier(38, 'green')).toBe(3800000);
});

/* getTolerance */

test('the color brown is ±1%', () => {
  expect(getTolerance('brown')).toBe('±1%');
});

test('the color red is ±2%', () => {
  expect(getTolerance('red')).toBe('±2%');
});

test('the color green is ±0.5%', () => {
  expect(getTolerance('green')).toBe('±0.5%');
});

test('the color blue is ±0.25%', () => {
  expect(getTolerance('blue')).toBe('±0.25%');
});

test('the color violet is ±0.1%', () => {
  expect(getTolerance('violet')).toBe('±0.1%');
});

test('the color grey is ±0.05%', () => {
  expect(getTolerance('grey')).toBe('±0.05%');
});

test('the color gold is ±5%', () => {
  expect(getTolerance('gold')).toBe('±5%');
});

test('the color silver is ±10%', () => {
  expect(getTolerance('silver')).toBe('±10%');
});

/* getResistorOhms */

test('the string includes 3.8M Ohms ±0.25%', () => {
  const colorBands = ['orange', 'grey', 'green', 'blue'];
  expect(getResistorOhms(colorBands))
    .toBe('Resistor value: 3.8M Ohms ±0.25%');
});