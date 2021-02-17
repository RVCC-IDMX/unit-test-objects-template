/* eslint-disable no-undef */
/* easy.test.js */

const
  removeObjProperty = require('../src/easy');

/* removeObjProperty */
test('check property of object is removed', () => {
  const obj1 = {
    name: 'john',
    age: 31,
    talent: 'singing',
  };
  const obj2 = {
    name: 'john',
    age: 31,
  };
  expect(removeObjProperty(obj1, 'talent')).toEqual(obj2);
});
