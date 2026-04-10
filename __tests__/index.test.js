import { multiply } from '../index.js';
import { summ } from '../index.js';
test('multiply', () => {
  expect(multiply(4, 4)).toEqual(16);
});

test('summ', () => {
  expect(summ(3, 5)).toEqual(8);
  expect(summ(-3, -5)).toEqual(-8);
  expect(summ(10, -3)).toEqual(7);
  expect(summ(-10, 3)).toEqual(-7);
  expect(summ(0, 7)).toEqual(7);
  expect(summ(7, 0)).toEqual(7);
  expect(summ(0, 0)).toEqual(0);
  expect(summ(0.1, 0.2)).toEqual(0.3);
  expect(Math.abs(summ(0.1, 0.2) - 0.3)).toBeLessThan(1e-9);
  expect(summ(1000000, 2000000)).toEqual(3000000);
  expect(summ(0.000001, 0.000002)).toEqual(0.000003);
  expect(summ(3.5, 2)).toEqual(5.5);
  expect(summ(5, -0)).toEqual(5);

});
