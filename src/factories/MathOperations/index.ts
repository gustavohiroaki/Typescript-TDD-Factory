import { IMathOperations } from "./interfaces/IMathOperations";

export default class MathOperations implements IMathOperations {
  sum(firstNumber: number, secondNumber: number): number {
    return firstNumber + secondNumber;
  }
  subtract(firstNumber: number, secondNumber: number): number {
    return firstNumber - secondNumber;
  }
  multiply(firstNumber: number, secondNumber: number): number {
    return firstNumber * secondNumber;
  }
  divide(firstNumber: number, secondNumber: number): number {
    return firstNumber / secondNumber;
  }
}
