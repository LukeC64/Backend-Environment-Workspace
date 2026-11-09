// Create a test suite for the numberProcessor.js module
const { sumNumbers, findHighestAndLowest, calculateAverage } = require('../src/numberProcessor');

describe('Number Processor', () => {
  // Test for sumNumbers function
  test('calculates the sum of numbers', () => {
    expect(sumNumbers([1, 2, 3, 4])).toBe(10);
  });

  // Test for findHighestAndLowest function
  test('finds the highest and lowest numbers', () => {
    expect(findHighestAndLowest([1, 2, 3, 4])).toEqual({ highest: 4, lowest: 1 });
  });

  // Test for calculateAverage function
  test('calculates the average of numbers', () => {
    expect(calculateAverage([1, 2, 3, 4])).toBe(2.5);
  });
});