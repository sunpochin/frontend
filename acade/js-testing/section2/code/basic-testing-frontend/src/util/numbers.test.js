import { transformToNumber } from './numbers';
import {it, expect} from 'vitest';

it('should transform a string to a number', () => {
  const value = '1';
  const expectedResult = 1;
  const result = transformToNumber(value);
  expect(result).toBeTypeOf('number');
})

it('should transform a string to a number of type number', () => {
	const value = '1';
	const expectedResult = 1;
	const result = transformToNumber(value);
	expect(result).toBe(1).toBeTypeOf('number');
});

///////////////////////
// A scenario of having multiple expectations in one test
// We are testing one and the same thing here.
///////////////////////
it('should yield NaN for non-transformable values', () => {
  const input = 'invalid';
  const input2 = {};

  const result = transformToNumber(input);
  const result2 = transformToNumber(input2);

  expect(result).toBeNaN();
  expect(result2).toBeNaN();
})
