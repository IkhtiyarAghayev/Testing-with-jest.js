const { reverse } = require('./string');

describe('String reverser function', () => {
    test('should throw error if data type is not string', () => {
        expect(() => { reverse(123); }).toThrow();
        expect(() => { reverse(null); }).toThrow();
        expect(() => { reverse(NaN); }).toThrow();
        expect(() => { reverse(undefined); }).toThrow();
    });
    test('should throw  error if the string is empty', () => {
        expect(() => { reverse(''); }).toThrow();
    });
    test('should throw error if the string is empty and has whitespace.', () => {
        expect(() => { reverse('  '); }).toThrow();
    });
    test('should reverse the text correctly', () => {
        expect(reverse("Hello World")).toBe("dlroW olleH");
        expect(reverse("Hello, this is a test sentence for the text reverser function.")).toBe(".noitcnuf resrever txet eht rof ecnetnes tset a si siht ,olleH");
    });

});