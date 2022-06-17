const strLength = require('./stringLength')

test('It should return length of string', () => {
    expect(strLength('said')).toBe(4)
})