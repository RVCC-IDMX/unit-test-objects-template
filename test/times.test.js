/* times.test.js */

const times = require('../src/times');

test('times 2 * 3 to equal 6', () => {
  expect(times(2, 3)).toBe(6);
});
