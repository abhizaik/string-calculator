// Importing the function to be tested
const stringCalculator = require('./stringCalculator');

// Test cases
describe('stringCalculator function', () => {

    test('should return the sum of comma separeted string', () => {
        expect(stringCalculator("")).toBe(0);
        expect(stringCalculator("1")).toBe(1);
        expect(stringCalculator("1,5")).toBe(6);
        expect(stringCalculator("1,5,10,20")).toBe(36);
    });

});
