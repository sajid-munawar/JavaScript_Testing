class Calculator {
  constructor() {}
  add(a, b) {
    return a + b;
  }
  subtract(a, b) {
    return a - b;
  }
  multiply(a, b) {
    return a * b;
  }
  divide(a, b) {
    return a / b;
  }
}

const one = new Calculator()
// console.log(one.add(5,5));
// console.log(one.subtract(5,5));
// console.log(one.multiply(5,5));
// console.log(one.divide(5, 5));

module.exports=Calculator