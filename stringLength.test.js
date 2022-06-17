const characterCount = require("./stringLength");

//Arrange
const message = {
  success: "Length of string is 4",
  error: "length of the string must be less than 11 and greater than 0",
};

//Act
const countSuccessFunction = characterCount("sajid");
const countFailFunction = () => characterCount("");

//Assert
test(message.success, () => {
  expect(countSuccessFunction).toBe(5);
});
test(message.error, () => {
  expect(countFailFunction).toThrow("Error");
});
