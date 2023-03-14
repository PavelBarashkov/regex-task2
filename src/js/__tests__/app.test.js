/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
import validPhone from '../app';

test('app test ^8', () => {
  const number = validPhone('8 (927) 000-00-00');
  const result = '+79270000000';
  expect(result).toBe(number);
});

test('app test ^+', () => {
  const number = validPhone('+86 000 000 0000');
  const result = '+860000000000';
  expect(result).toBe(number);
});
