import MathOperationFactory from "./factories/MathOperations";
import RandomNumberFactory from "./factories/RandomNumber";

class Main {
  randomNumber: () => number;
  sum: number;
  subtraction: number;
  multiply: number;
  divide: number;

  constructor() {
    this.randomNumber = new RandomNumberFactory().randomNumber;
    this.sum = MathOperationFactory(
      "sum",
      this.randomNumber(),
      this.randomNumber()
    );
    this.subtraction = MathOperationFactory(
      "subtraction",
      this.randomNumber(),
      this.randomNumber()
    );
    this.multiply = MathOperationFactory(
      "multiply",
      this.randomNumber(),
      this.randomNumber()
    );
    this.divide = MathOperationFactory(
      "divide",
      this.randomNumber(),
      this.randomNumber()
    );
  }

  main(): void {
    console.log(this.sum);
    console.log(this.subtraction);
    console.log(this.multiply);
    console.log(this.divide);
  }
}

export default Main;
