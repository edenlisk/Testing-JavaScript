const stringLength = require('./StringLength');

test('function should return 8', () => {
    const result = stringLength('edenlisk');
    expect(result).toEqual(8);
})

test('function should return undefined', () => {
    const result = stringLength('');
    expect(result).toBeUndefined();
})

test('function should return undefined', () => {
    const result = stringLength('lyceedekigali');
    expect(result).toBeUndefined();
})
