import { describe, it, expect } from 'vitest';

const fizzbuzz = (number) : void => {
    if (typeof number !== 'number') throw new Error('parameter provided must be a number')
    
}

describe('fizzbuzz', () : void => {
    it('should be a function', () : void => {
        expect(typeof fizzbuzz).toBe('function');
    });
    it('should throw if not number is provided as parameter', () : void => {
        expect (fizzbuzz()).toThrow()

    })
    it('should throw a specific error message if not number is provider as parameter', () : void => {
        expect (() : void => fizzbuzz()).toThrow(/number/)
});
