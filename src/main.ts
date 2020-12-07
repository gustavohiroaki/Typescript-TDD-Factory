import MathOperationFactory from "./factories/MathOperations";
import RandomNumberFactory from "./factories/RandomNumber";

class Main {
  randomNumber: () => number;
  sum: (firstNumber: number, secondNumber: number) => number;
  subtract: (firstNumber: number, secondNumber: number) => number;
  multiply: (firstNumber: number, secondNumber: number) => number;
  divide: (firstNumber: number, secondNumber: number) => number;

  constructor() {
    this.randomNumber = new RandomNumberFactory().randomNumber;

    this.sum = new MathOperationFactory().sum;
    this.subtract = new MathOperationFactory().subtract;
    this.multiply = new MathOperationFactory().multiply;
    this.divide = new MathOperationFactory().divide;
  }

  main(): void {
    console.log(this.sum(this.randomNumber(), this.randomNumber()));
    console.log(this.subtract(this.randomNumber(), this.randomNumber()));
    console.log(this.multiply(this.randomNumber(), this.randomNumber()));
    console.log(this.divide(this.randomNumber(), this.randomNumber()));
  }
}

export default Main;
