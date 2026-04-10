import { multiply } from '../index.js';

test('multiply', () => {
  expect(multiply(4, 4)).toEqual(16);
});

test('summ adds two positive numbers', () => {
  expect(summ(3, 5)).toEqual(8);
});

test('summ adds two negative numbers', () => {
  expect(summ(-3, -5)).toEqual(-8);
});

test('summ adds positive and negative number', () => {
  expect(summ(10, -3)).toEqual(7);
});

test('summ adds negative and positive number', () => {
  expect(summ(-10, 3)).toEqual(-7);
});

test('summ with zero on the left', () => {
  expect(summ(0, 7)).toEqual(7);
});

test('summ with zero on the right', () => {
  expect(summ(7, 0)).toEqual(7);
});

test('summ with both zeros', () => {
  expect(summ(0, 0)).toEqual(0);
});

test('summ with decimal numbers (simple)', () => {
  expect(summ(0.1, 0.2)).toEqual(0.3);
});

test('summ with decimal precision (tolerance)', () => {
  expect(Math.abs(summ(0.1, 0.2) - 0.3)).toBeLessThan(1e-9);
});

test('summ with large integers', () => {
  expect(summ(1000000, 2000000)).toEqual(3000000);
});

test('summ with very small decimals', () => {
  expect(summ(0.000001, 0.000002)).toEqual(0.000003);
});

test('summ with one value being float', () => {
  expect(summ(3.5, 2)).toEqual(5.5);
});

test('summ with negative zero', () => {
  expect(summ(5, -0)).toEqual(5);
});
