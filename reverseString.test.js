const reverseString = require('./reverseString');

// Arrange
const message ='should return reverse string'

// Act

const reverse = reverseString('sajid')

// Assert

test(message, () => {
    expect(reverse).toBe('dijas')
})