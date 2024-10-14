import { describe, expect, it } from "vitest";

const canReconfigure = (from, to): void => {
  if (typeof from !== "string") throw new Error("from is not a string");

  if (typeof to !== "string") throw new Error("to is not a string");

  if (from.length !== to.length) return false
 
  return true
};

describe("canReconfigure", (): void => {  // Aquí cambiaste a "canReconfigure"
  it("should be a function", (): void => {
    expect(canReconfigure).toBeTypeOf("function");
  });

  it("should throw if first parameter is missing", (): void => {
    expect((): void => canReconfigure()).toThrow();
  });

  it("should throw if first parameter is not a string", (): void => {
    expect((): void => canReconfigure(2)).toThrow();
  });

  it("should throw if second parameter is not a string", (): void => {
    expect((): void => canReconfigure("a")).toThrow();
  });

  it('should return a boolean', (): void => {
    expect(canReconfigure('a','b')).toBeTypeOf('boolean')
  })

  it('should return false if strings have different lengths', (): void => {
    expect(canReconfigure('abc','de')).toBe(false)
  })
});

