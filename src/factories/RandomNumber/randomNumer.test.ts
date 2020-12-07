import RandomNumber from "./index";

test("should return number number between 0 and 1000", () => {
  const randomNumberFactory = new RandomNumber().randomNumber;

  expect(typeof randomNumberFactory()).toBe("number");
  expect(randomNumberFactory()).toBeLessThanOrEqual(1000);
  expect(randomNumberFactory()).toBeGreaterThanOrEqual(0);
});
