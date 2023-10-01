const { getEvenNumbers } = require('./array');

describe('arrayFiltering', () => {
    describe('Only return even numbers', () => {
        const testArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, undefined, null, '', '4', '6', '8']
        test('should return the only even numbers', () => {
            expect(getEvenNumbers([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual([0, 2, 4, 6, 8, 10])
        });
        test('should throw error if argument is not an array', () => {
            expect(() => { getEvenNumbers(1234); }).toThrow();
            expect(() => { getEvenNumbers('1234'); }).toThrow();
        });
        test('should throw error if array is empty', () => {
            expect(() => { getEvenNumbers([]); }).toThrow();
        });
        test('shoud only return valid numbers', () => {
            expect(getEvenNumbers(testArray)).toEqual([0, 2, 4, 6, 8, 10]);
        });
    });
});