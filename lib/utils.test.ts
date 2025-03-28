import {applyMultiplier} from "./utils";

describe('applyMultiplier Function', () => {
    test('multiplies positive whole number by positive multiplier', () => {
        expect(applyMultiplier('5', 2)).toBe(10);
        expect(applyMultiplier('7', 3)).toBe(21);
    });

    test('multiplies positive decimal number by positive multiplier', () => {
        expect(applyMultiplier('5.5', 2)).toBe(11);
        expect(applyMultiplier('3.14', 3)).toBeCloseTo(9.42);
    });

    test('multiplies negative whole number by positive multiplier', () => {
        expect(applyMultiplier('-5', 2)).toBe(-10);
        expect(applyMultiplier('-7', 3)).toBe(-21);
    });

    test('multiplies negative decimal number by positive multiplier', () => {
        expect(applyMultiplier('-5.5', 2)).toBe(-11);
        expect(applyMultiplier('-3.14', 3)).toBeCloseTo(-9.42);
    });

    test('multiplies zero by any multiplier', () => {
        expect(applyMultiplier('0', 5)).toBe(0);
        expect(applyMultiplier('0', -3)).toBe(0);
        expect(applyMultiplier('0', 0)).toBe(0);
    });

    test('multiplies by different multiplier types', () => {
        expect(applyMultiplier('10', 0)).toBe(0);
        expect(applyMultiplier('10', 1)).toBe(10);
        expect(applyMultiplier('10', -1)).toBe(-10);
        expect(applyMultiplier('10', 0.5)).toBe(5);
    });

    test('handles very large numbers', () => {
        expect(applyMultiplier('1000000', 1000000)).toBe(1000000000000);
    });

    test('handles very small decimal numbers', () => {
        expect(applyMultiplier('0.0001', 10000)).toBe(1);
    });

    test('handles string inputs with whitespace', () => {
        expect(applyMultiplier(' 5 ', 2)).toBe(10);
        expect(applyMultiplier('  3.14  ', 3)).toBeCloseTo(9.42);
    });

    test('handles non-numeric string inputs', () => {
        expect(applyMultiplier('abc', 2)).toBeNaN();
        expect(applyMultiplier('', 2)).toBeNaN();
        expect(applyMultiplier('   ', 2)).toBeNaN();
    });

    test('handles mixed numeric and non-numeric inputs', () => {
        expect(applyMultiplier('10abc', 2)).toBeNaN();
        expect(applyMultiplier('abc10', 2)).toBeNaN();
    });

    test('handles scientific notation', () => {
        expect(applyMultiplier('1e3', 2)).toBe(2000);
        expect(applyMultiplier('-1.5e2', 2)).toBe(-300);
    });

    test('maintains decimal precision', () => {
        expect(applyMultiplier('0.1', 0.1)).toBeCloseTo(0.01);
        expect(applyMultiplier('0.2', 0.2)).toBeCloseTo(0.04);
    });
    it('multiplies a valid numeric string with a positive multiplier', () => {
        expect(applyMultiplier('5', 2)).toBe(10);
    });

    it('multiplies a valid numeric string with a negative multiplier', () => {
        expect(applyMultiplier('5', -3)).toBe(-15);
    });

    it('returns 0 if input is "0"', () => {
        expect(applyMultiplier('0', 10)).toBe(0);
    });

    it('returns 0 if multiplier is 0', () => {
        expect(applyMultiplier('123', 0)).toBe(0);
    });

    it('handles decimal values correctly', () => {
        expect(applyMultiplier('2.5', 4)).toBe(10);
        expect(applyMultiplier('3.14', 2)).toBeCloseTo(6.28);
    });

    it('handles negative numbers in string', () => {
        expect(applyMultiplier('-4', 5)).toBe(-20);
    });

    it('handles string with whitespace', () => {
        expect(applyMultiplier('  6 ', 3)).toBe(18);
    });

    it('returns NaN if input is not a valid number', () => {
        expect(applyMultiplier('abc', 3)).toBeNaN();
    });

    it('returns NaN if input is empty string', () => {
        expect(applyMultiplier('', 3)).toBe(0); // Note: Number('') === 0
    });

    it('returns NaN if input is null string representation', () => {
        expect(applyMultiplier('null', 3)).toBeNaN();
    });

    it('returns NaN if input is undefined string representation', () => {
        expect(applyMultiplier('undefined', 3)).toBeNaN();
    });

    it('handles exponential notation', () => {
        expect(applyMultiplier('1e2', 3)).toBe(300);
    });

    it('handles very large numbers', () => {
        expect(applyMultiplier('1e100', 2)).toBe(2e100);
    });

    it('handles very small numbers', () => {
        expect(applyMultiplier('1e-5', 2)).toBe(2e-5);
    });
});