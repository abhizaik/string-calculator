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

    test('should treat \n same as comma', () => {
        expect(stringCalculator("1\n5,10\n20")).toBe(36);
    });

    test('support different delimiters', () => {
        expect(stringCalculator("//;\n1;2")).toBe(3);
    });
    
    test('check for negative numbers', () => {
        expect(() => stringCalculator("1,-5,10,20")).toThrow("negative numbers not allowed -5");
    });

    test('numbers greater than 1000', () => {
        expect(stringCalculator("2,1001")).toBe(2);
    });

});
