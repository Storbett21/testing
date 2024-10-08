import { describe, it, expect } from 'vitest';

const fizzbuzz = (number: number): any | "fizz" | "buzz" | "fizzbuzz" => {  
  if (typeof number !== 'number') throw new Error('parameter provided must be a number');
  if (Number.isNaN(number)) throw new Error('parameter provided must be a number');
  
  if (number % 3 === 0 && number % 5 === 0) return 'fizzbuzz';
  if (number % 3 === 0) return 'fizz';
  if (number % 5 === 0) return 'buzz';
  
  return number;
};

describe('fizzbuzz', () : void => {
  it('should throw if not number is provided as parameter', () : void => {
    expect(() => fizzbuzz(NaN)).toThrow();
  });

  it('should throw a specific error message if not number is provided as parameter', (): void => {
    expect(() => fizzbuzz(NaN)).toThrow("parameter provided must be a number");
  });

  it('should return 1 if number provided is 1', () : void => {
    expect(fizzbuzz(1)).toBe(1);
  });

  it('should return 2 if number provided is 2', () : void => {
    expect(fizzbuzz(2)).toBe(2);
  });

  it('should return "fizz" if number provided is 3', () : void => {
    expect(fizzbuzz(3)).toBe('fizz');
  });

  it('should return "fizz" if number provided is multiple of 3', () : void => {
    expect(fizzbuzz(6)).toBe('fizz');
    expect(fizzbuzz(9)).toBe('fizz');
    expect(fizzbuzz(12)).toBe('fizz');
  });

  it('should return "buzz" if number provided is 5', () : void => {
    expect(fizzbuzz(5)).toBe('buzz');
  });

  it('should return "buzz" if number provided is multiple of 5', () : void => {
    expect(fizzbuzz(10)).toBe('buzz');
    expect(fizzbuzz(20)).toBe('buzz');
  });

  it('should return "fizzbuzz" if number provided is multiple of 3 and 5', () : void => {
    expect(fizzbuzz(15)).toBe('fizzbuzz');
  });
});
