import { validateStringNotEmpty, validateNumber} from './validation'
import { it, expect, describe } from 'vitest'

///////////////////////
describe('validateStringNotEmpty()', () => {
  it('validate string not empty', () => {
    const input = '';

    const resultFn = () => {
      validateStringNotEmpty(input);
    };

    expect(resultFn).toThrow(/Invalid input - must not be empty/);
  });

  it('should throw an error, if an empty string is provided', () => {
    const input = '';
    const validationFn = () => validateStringNotEmpty(input);
    expect(validationFn).toThrow();
  });

  it('should throw an error with a message that contains a reason (must not be empty)', () => {
    const input = '';
    const validationFn = () => validateStringNotEmpty(input);
    expect(validationFn).toThrow(/must not be empty/);
  });

  it('should throw an error if a long string of blanks is provided', () => {
    const input = '';
    const validationFn = () => validateStringNotEmpty(input);
    expect(validationFn).toThrow();
  });

  it('should throw an error if any other value than a string is provided', () => {
    const inputNum = 1;
    const inputBool = true;
    const inputObj = {};

    const validationFnNum = () => validateStringNotEmpty(inputNum);
    const validationFnBool = () => validateStringNotEmpty(inputBool);
    const validationFnObj = () => validateStringNotEmpty(inputObj);

    expect(validationFnNum).toThrow();
    expect(validationFnBool).toThrow();
    expect(validationFnObj).toThrow();
  });

  it('should not throw an error, if a non-empty string is provided', () => {
    const input = 'valid';
    const validationFn = () => validateStringNotEmpty(input);
    expect(validationFn).not.toThrow();
  });

});


describe('validateNumber()', () => {
  describe('HI! test case by myself', () => {
    it('validate number', () => {
      const input = '123';

      const resultFn = () => {
        validateNumber(input);
      };

      expect(resultFn).toThrow(/Invalid number input/);
    });
  })
  it('should throw an error if NaN is provided', () => {
    const input = NaN;
    const validationFn = () => validateNumber(input);
    expect(validationFn).toThrow();
  });

  it('should throw an error with a message that contains a reason (invalid number)', () => {
    const input = NaN;
    const validationFn = () => validateNumber(input);
    expect(validationFn).toThrow(/Invalid number/);
  });

  it('should throw an error if a non-numeric value is provided', () => {
    const input = '1';
    const validationFn = () => validateNumber(input);
    expect(validationFn).toThrow();
  });

  it('should not throw an error, if a number is provided', () => {
    const input = 1;
    const validationFn = () => validateNumber(input);
    expect(validationFn).not.toThrow();
  });
});
