const reverseString = require('./ReverseString')

test('function return anazoh', () => {
    const result = reverseString('hozana');
    expect(result).toEqual('anazoh');
})

test('function should return undefined', () => {
    const result = reverseString('');
    expect(result).toBeUndefined();
})