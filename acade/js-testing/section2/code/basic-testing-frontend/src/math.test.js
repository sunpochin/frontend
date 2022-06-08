// import { test } from 'vitest';
import { it, expect} from 'vitest';

import { add } from './math';

it('should summarize all number values in an array', () => {
  // Arrange
  const numbers = [1, 2, 3];
  const expectedResult = numbers.reduce(
    (prevValue, currentValue) => prevValue + currentValue, 0);
  // Act
  const result = add(numbers);
  // Assert
  expect(result).toEqual(expectedResult);
});

it('should yield NaN if at least one invalid number is provided.', () => {
	// Arrange
  const inputs = ['invalid', 1]
	// Act
  const result = add(inputs);
	// Assert
  expect(result).toBeNaN();
});

it('should yield a correct sum if an array of numeric string values is provided.', () => {
	// Arrange
	const numbers = ['2', '1'];
	// Act
	const result = add(numbers);
	// Assert
  const expectedResult = numbers.reduce(
		(prevValue, currentValue) => +prevValue + +currentValue,
		0
	);
	expect(result).toBe(expectedResult);
});

