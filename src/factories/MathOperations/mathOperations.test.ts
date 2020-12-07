import MathOperations from "./index";

describe("test of basic math operations", () => {
  it("should sum two numbers", () => {
    const sum = MathOperations("sum", 2, 3);

    expect(sum).toBe(5);
  });

  it("should subtract two numbers", () => {
    const subtraction = MathOperations("subtraction", 2, 3);

    expect(subtraction).toBe(-1);
  });

  it("should multiply two numbers", () => {
    const multiply = MathOperations("multiply", 2, 3);

    expect(multiply).toBe(6);
  });

  it("should divide two numbers", () => {
    const divide = MathOperations("divide", 6, 3);

    expect(divide).toBe(2);
  });
});
