const capitalize=require('./captilize')

// Arrange
const sajid = capitalize('sajid')

// Act 
const Sajid = 'Sajid';

// Assert

test('First letter should be capital', () => {
    expect(sajid).toBe(Sajid)
})