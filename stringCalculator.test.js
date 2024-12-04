// Importing the function to be tested
const stringCalculator = require('./stringCalculator');

// Test cases
describe('stringCalculator function', () => {

  test('should return the sum of string', () => {
    expect(stringCalculator("")).toBe(0);
  });
  
});
