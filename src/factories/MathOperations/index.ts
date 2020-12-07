import { Op } from "./types/MathOperations";

export default function MathOperations(
  operation: Op,
  firstNumber: number,
  secondNumber: number
): number {
  let response;

  switch (operation) {
    case "sum":
      const sum = firstNumber + secondNumber;
      response = sum;
      break;
    case "subtraction":
      const subtraction = firstNumber - secondNumber;
      response = subtraction;
      break;
    case "multiply":
      const multiply = firstNumber * secondNumber;
      response = multiply;
      break;
    case "divide":
      const divide = firstNumber / secondNumber;
      response = divide;
      break;
  }

  return response;
}
