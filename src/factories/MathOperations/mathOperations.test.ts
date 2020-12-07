import MathOperations from "./index";

describe("test of basic math operations", () => {
  it("should sum two numbers", () => {
    const MathOperator = new MathOperations();

    expect(MathOperator.sum(2, 3)).toBe(5);
    expect(MathOperator.sum(10523, 1523)).toBe(12046);
  });

  it("should subtract two numbers", () => {
    const MathOperator = new MathOperations();

    expect(MathOperator.subtract(5, 2)).toBe(3);
    expect(MathOperator.subtract(5, 6)).toBe(-1);
  });

  it("should multiply two numbers", () => {
    const MathOperator = new MathOperations();

    expect(MathOperator.multiply(5, 2)).toBe(10);
    expect(MathOperator.multiply(2.5, 2)).toBe(5);
  });

  it("should divide two numbers", () => {
    const MathOperator = new MathOperations();

    expect(MathOperator.divide(10, 2)).toBe(5);
    expect(MathOperator.divide(7, 2)).toBe(3.5);
  });
});
