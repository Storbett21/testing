import { describe, it, expect } from 'vitest';

const fizzbuzz = (number): any | "fizz" => {  // puedes usar 'any' si quieres manejar varios tipos
  if (typeof number !== 'number') throw new Error('parameter provided must be a number')
  if (Number.isNaN(number)) throw new Error('parameter provided must be a number')
  
  if (number % 3 == 0) return 'fizz'
  return number
};

describe('fizzbuzz', () : void => {
  // it('should be a function', () : void => {
  //   expect(typeof fizzbuzz).toBe('function');
  // });

  it('should throw if not number is provided as parameter', () : void => {
    // Debe ir dentro de una función anónima
    expect(() : number | "fizz" => fizzbuzz(NaN)).toThrow();
  });

  it('should throw a specific error message if not number is provided as parameter', (): void => {
    // También se debe envolver en una función
    expect(() : number | "fizz" => fizzbuzz(NaN)).toThrow("parameter provider must be a number");
  });

  it('should throw a specific error message not number is provided', (): void => {
    // También se debe envolver en una función
    expect(() : number | "fizz" => fizzbuzz(NaN)).toThrow("parameter provider must be a number");
  });

  it('should return 1 if number provided is 1', () : void => {
    expect(fizzbuzz(1)).toBe(1)
  });

  it('should return 2 if number provided is 2', () : void => {
    expect(fizzbuzz(2)).toBe(2)
  });

  it('should return "fizz" if number provided is 3', () : void => {
    expect(fizzbuzz('3')).toBe('fizz')
  });
});

