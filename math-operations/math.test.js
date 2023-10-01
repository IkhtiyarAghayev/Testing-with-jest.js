const { add, subtract, multiply, divide } = require('./math')

describe("Math Oparations", () => {

    describe('addition', () => {
        test("sholuld return error if arguments is not a number", () => {
            expect(() => { add("1", 1); }).toThrow();
        });
        test('should return the sum of the two numbers correctly', () => {
            expect(add(5, 5)).toBe(10);
            expect(add(200, 1)).toBe(201);
            expect(add(3500, 6500)).toBe(10000);
        });
        test('should return the sum of the one positive and one negative number correctly', () => {
            expect(add(6, -5)).toBe(1);
            expect(add(-1, 20)).toBe(19);
            expect(add(-30, 25)).toBe(-5);
        });
        test('should return the sum of the two negative numbers correctly', () => {
            expect(add(-1, -5)).toBe(-6);
            expect(add(-24, -23)).toBe(-47);
            expect(add(-2500, -2500)).toBe(-5000);
        });
        test('should return the sum of the two float numbers correctly', () => {
            expect(add(0.1, 0.2)).toBeCloseTo(0.3);
            expect(add(0.33, 0.45)).toBeCloseTo(0.78);
            expect(add(0.9, 0.1)).toBe(1);
            expect(add(0.9, 1.1)).toBe(2);
        });
        test('should return the sum of the one float and one integer number correctly', () => {
            expect(add(0.9, 3)).toBe(3.9);
            expect(add(0.77, 3)).toBe(3.77);
            expect(add(0.96, 45)).toBe(45.96);
        });
        test('should return the sum of the two float negative numbers correctly', () => {
            expect(add(-0.1, -0.2)).toBeCloseTo(-0.3);
            expect(add(-0.33, -0.45)).toBeCloseTo(-0.78);
            expect(add(-0.9, -0.1)).toBe(-1);
            expect(add(-0.9, -1.1)).toBe(-2);
        });
        test('should return the sum of the one negative float and one positive float number correctly', () => {
            expect(add(-0.1, 0.2)).toBeCloseTo(0.1);
            expect(add(0.33, -0.45)).toBeCloseTo(-0.12);
            expect(add(-0.9, 0.1)).toBe(-0.8);
            expect(add(0.9, -1.1)).toBeCloseTo(-0.2);
        });
        test('should return the sum of the one negative or positive float and one negative or positive integer number correctly', () => {
            expect(add(0.9, -3)).toBe(-2.1);
            expect(add(-0.77, 3)).toBe(2.23);
            expect(add(0.96, -45)).toBe(-44.04);
        });
        test('should return the sum of 0 and positive number correctly.', () => {
            expect(add(0, 5)).toBe(5);
        });
        test('should return the sum of 0 and negative number correctly.', () => {
            expect(add(0, -5)).toBe(-5);
        });

    });

    describe('subtraction', () => {
        test("sholuld return error if arguments is not a number", () => {
            expect(() => { subtract('1', 1); }).toThrow();
        })
        test('should return the subtraction of the two numbers correctly', () => {
            expect(subtract(5, 2)).toBe(3);
            expect(subtract(500, 1)).toBe(499);
            expect(subtract(321, 123)).toBe(198);
        });
        test('should return the subtraction of the one positive and one negative number correctly', () => {
            expect(subtract(15, -25)).toBe(40);
            expect(subtract(-3, 5)).toBe(-8);
            expect(subtract(25, -30)).toBe(55);
        });
        test('should return the subtraction of the two negative numbers correctly', () => {
            expect(subtract(-5, -7)).toBe(2);
            expect(subtract(-40, -55)).toBe(15);
            expect(subtract(-5000, -5000)).toBe(0);
        });
        test('should return the subtraction of the two float numbers correctly', () => {
            expect(subtract(0.2, 0.1)).toBeCloseTo(0.1);
            expect(subtract(0.45, 0.33)).toBeCloseTo(0.12);
            expect(subtract(0.1, 0.1)).toBeCloseTo(0);
            expect(subtract(9.99, 1.1)).toBe(8.89);
        });
        test('should return the subtraction of the one float and one integer number correctly', () => {
            expect(subtract(3, 0.9)).toBe(2.1);
            expect(subtract(5, 0.77)).toBe(4.23);
            expect(subtract(45, 0.96)).toBe(44.04);
        });
        test('should return the subtraction of the two float negative numbers correctly', () => {
            expect(subtract(-0.475, -0.352)).toBeCloseTo(-0.123);
            expect(subtract(-0.45, -0.75)).toBeCloseTo(0.3);
            expect(subtract(-1.1, -0.1)).toBe(-1);
            expect(subtract(-1.1, -2.2)).toBeCloseTo(1.1);
        });
        test('should return the subtraction of the one negative float and one positive float number correctly', () => {
            expect(subtract(0.2, -0.1)).toBeCloseTo(0.3);
            expect(subtract(0.40, -0.45)).toBeCloseTo(0.85);
            expect(subtract(-0.9, 0.1)).toBe(-1);
            expect(subtract(0.9, -1.1)).toBeCloseTo(2);
        });
        test('should return the subtraction of the one negative or positive float and one negative or positive integer number correctly', () => {
            expect(subtract(10, -0.5)).toBe(10.5);
            expect(subtract(-33.2, 12)).toBe(-45.2);
            expect(subtract(-3, 0.3)).toBe(-3.3);
        });
        test('should return the subtraction of 0 and positive number correctly.', () => {
            expect(subtract(0, 5)).toBe(-5);
        });
        test('should return the subtraction of 0 and negative number correctly.', () => {
            expect(subtract(0, -5)).toBe(5);
        });
    });

    describe('multiplication', () => {
        test("sholuld return error if arguments is not a number", () => {
            expect(() => { subtract('1', 1); }).toThrow();
        })
        test('should return the multiplication of the two numbers correctly', () => {
            expect(multiply(4, 4)).toBe(16);
            expect(multiply(200, 18)).toBe(3600);
            expect(multiply(25, 8)).toBe(200);
        });
        test('should return the multiplication of the one positive and one negative number correctly', () => {
            expect(multiply(12, -5)).toBe(-60);
            expect(multiply(-8, 9)).toBe(-72);
            expect(multiply(10, -10)).toBe(-100);
        });
        test('should return the multiplication of the two negative numbers correctly', () => {
            expect(multiply(-20, -20)).toBe(400);
            expect(multiply(-3, -5)).toBe(15);
            expect(multiply(-240, -240)).toBe(57600);
        });
        test('should return the multiplication of the two float numbers correctly', () => {
            expect(multiply(0.2, 0.1)).toBeCloseTo(0.02);
            expect(multiply(0.25, 0.33)).toBeCloseTo(0.0825);
            expect(multiply(0.1, 0.1)).toBeCloseTo(0.01);
            expect(multiply(7.5, 4.3)).toBe(32.25);
        });
        test('should return the multiplication of the one float and one integer number correctly', () => {
            expect(multiply(6, 0.7)).toBeCloseTo(4.2);
            expect(multiply(0.12, 9)).toBe(1.08);
            expect(multiply(39, 0.99)).toBe(38.61);
        });
        test('should return the multiplication of the two float negative numbers correctly', () => {
            expect(multiply(-0.21, -0.252)).toBeCloseTo(0.05292);
            expect(multiply(-2.2, -0.5)).toBeCloseTo(1.1);
            expect(multiply(-15.5, -20.33)).toBeCloseTo(315.115);
            expect(multiply(-1.12, -2.60)).toBeCloseTo(2.912);
        });
        test('should return the multiplication of the one negative float and one positive float number correctly', () => {
            expect(multiply(0.9, -0.3)).toBeCloseTo(-0.27);
            expect(multiply(-3.7, 1.8)).toBeCloseTo(-6.66);
            expect(multiply(-0.1, 0.9)).toBeCloseTo(-0.09);
            expect(multiply(11.1, -11.1)).toBeCloseTo(-123.21);
        });
        test('should return the multiplication of the one negative or positive float and one negative or positive integer number correctly', () => {
            expect(multiply(5, -5.4)).toBe(-27);
            expect(multiply(-93.78, 3)).toBeCloseTo(-281.34);
            expect(multiply(-3, 1.98)).toBeCloseTo(-5.94);
        });
        test('should return the multiplication of 0 and positive number correctly.', () => {
            expect(multiply(0, 5)).toBe(0);
        });
        test('should return the multiplication of 0 and negative number correctly.', () => {
            expect(multiply(0, -5)).toBe(0);
        });
    })

    describe("division", () => {
        test("sholuld return error if arguments is not a number", () => {
            expect(() => { subtract('1', 1); }).toThrow();
        })
        test('should return the division of the two numbers correctly', () => {
            expect(divide(36, 2)).toBe(18);
            expect(divide(8, 8)).toBe(1);
            expect(divide(6, 2)).toBe(3);
        });
        test('should return the division of the one positive and one negative number correctly', () => {
            expect(divide(25, -10)).toBe(-2.5);
            expect(divide(-2, 2)).toBe(-1);
            expect(divide(24, -8)).toBe(-3);
        });
        test('should return the division of the two negative numbers correctly', () => {
            expect(divide(-5, -2)).toBe(2.5);
            expect(divide(-3, -5)).toBe(0.6);
            expect(divide(-10, -20)).toBe(0.5);
        });
        test('should return the division of the two float numbers correctly', () => {
            expect(divide(0.8, 0.4)).toBeCloseTo(2);
            expect(divide(0.36, 0.15)).toBeCloseTo(2.4);
            expect(divide(0.25, 0.4)).toBeCloseTo(0.625);
        });
        test('should return the multiplication of the one float and one integer number correctly', () => {
            expect(divide(9, 0.3)).toBeCloseTo(30);
            expect(divide(0.20, 5)).toBe(0.04);
            expect(divide(4, 0.2)).toBe(20);
        });
        test('should return the division of the two float negative numbers correctly', () => {
            expect(divide(-0.6, -0.2)).toBeCloseTo(3);
            expect(divide(-6.6, -2.2)).toBeCloseTo(3);
            expect(divide(-20.20, -12.50)).toBeCloseTo(1.616);
            expect(divide(-0.3, -0.5)).toBeCloseTo(0.6);
        });
        test('should return the division of the one negative float and one positive float number correctly', () => {
            expect(divide(0.9, -0.3)).toBeCloseTo(-3);
            expect(divide(-8.6, 0.4)).toBeCloseTo(-21.5);
            expect(divide(-0.2, 0.8)).toBeCloseTo(-0.25);
            expect(divide(10.1, -10.1)).toBeCloseTo(-1);
        });
        test('should return the division of the one negative or positive float and one negative or positive integer number correctly', () => {
            expect(divide(6, -0.2)).toBe(-30);
            expect(divide(-0.9, 3)).toBeCloseTo(-0.3);
            expect(divide(-6, -0.3)).toBeCloseTo(20);
        });
        test('should return the division of 0 and positive number correctly.', () => {
            expect(() => { divide(0, 5); }).toThrow();
        });
        test('should return the multiplication of 0 and negative number correctly.', () => {
            expect(() => { divide(0, -5); }).toThrow();
        });
    });
});
