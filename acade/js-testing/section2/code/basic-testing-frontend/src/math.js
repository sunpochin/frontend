export function add(numbers) {
  let sum = 0;

  // throw new Error('this is not iterable');
  // throw new Error('somethin');
  
  for (const number of numbers) {
    sum += +number;
  }
  return sum;
}
