import { describe, expect, it } from "vitest";

const canConfigure = (from, to): void => {
  if (typeof from !== "string") throw new Error("from is not a string");

  if (typeof to !== "string") throw new Error("to is not a string");
};

describe("canConfigure", (): void => {  // Aquí cambiaste a "canConfigure"
  it("should be a function", (): void => {
    expect(canConfigure).toBeTypeOf("function");
  });

  it("should throw if first parameter is missing", (): void => {
    expect((): void => canConfigure()).toThrow();
  });

  it("should throw if first parameter is not a string", (): void => {
    expect((): void => canConfigure(2)).toThrow();
  });

  it("should throw if second parameter is not a string", (): void => {
    expect((): void => canConfigure("a")).toThrow();
  });
});

