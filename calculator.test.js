const Calculator = require("./calculator");

// Arragne

const first = new Calculator();

// Act
const add = first.add(5, 5);
const subtract = first.subtract(5, 5);
const multiply = first.multiply(5, 5);
const divide = first.divide(5, 5);

// Assert

describe("Calculator", () => {
  test("shold add", () => {
    expect(add).toBe(10);
  });
  test("shold add", () => {
    expect(subtract).toBe(0);
  });
  test("shold add", () => {
    expect(divide).toBe(1);
  });
  test("shold add", () => {
    expect(multiply).toBe(25);
  });
});
